const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const { verify_session, create_token } = require('./auxiliar');

const { Server } = require('socket.io');
const express = require('express');
const connection = require('./connection/connection');
const app = express();

const clients = [];

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/dist'));
app.use('/', require('./routes/credentials'));
app.use(cookieParser());
app.use(cors({
    origin: '*'
}));

const http = app.listen(app.get('port'), () => {
    console.log('Http server listening in port: ', app.get('port'));
});





const io = new Server(http, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    const query = socket.handshake.query;
    const name = query.user;
    const user_id = query.user_id;

    if (name == 'null' || user_id == 'null') {
        socket.disconnect();
        return;
    }

    const index = clients.findIndex(client => client.user_id == user_id);
    if (index == -1) {
        clients.push({
            user_id,
            room: 'General',
            sk_id: socket.id,
            username: name
        });
    } else {
        clients[index].sk_id = socket.id;
    }

    socket.emit('updated');
    socket.broadcast.emit('new_client', {user_id, sk_id: socket.id, username: name});

    socket.on('message', ({sender, sender_id, room, room_id, date, message}) => {
        const msg = {sender, sender_id, date, message};

        connection.query(`INSERT INTO messages (room_id, sender_id, message, send_date) 
        VALUES (${room_id}, ${sender_id}, "${message}", '${date}');`);

        io.to(room).emit('new_message', {room, room_id, msg});
    });
});




app.get('/', function(req, resp) {
    resp.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/new_room', verify_session, function(req, resp) {
    const user_id = req.query.user_id;
    const chat_id = req.query.chat_id;
    const alias = req.query.alias;
    var alias_2 = req.query.alias_2;
    const focused = isNaN(req.query.focused)?0:Number(req.query.focused);


    const client = clients.find((client) => client.user_id == chat_id);
    const me = clients.find((client) => client.user_id == user_id);

    if (client == undefined) {
        resp.status(404).send({
            msg: "Socket not found. Please reload home page. If that don't works, login again..."
        });
        return;
    }

    if (user_id == chat_id) {
        resp.status(400).send({msg: "You need at least two pepople to create a room..."});
        return;
    }

    if (focused == 1) {
        alias_2 = alias;
    }

    const room_name = '_' + create_token(10);
    connection.query(`INSERT INTO rooms (name, defaut) VALUES ('${room_name}', false);`, (error, ret) => {
        if (error) {
            console.log(error);
            resp.status(500).send({msg: "Error saving chat room..."});
            return;
        }

        try {
            const room_id = ret.insertId;
            connection.query(`INSERT INTO users_rooms 
            (user_id, room_id, alias) 
            VALUES (${user_id}, ${room_id}, "${alias}");`);

            connection.query(`INSERT INTO users_rooms 
            (user_id, room_id, alias) 
            VALUES (${chat_id}, ${room_id}, "${alias_2}");`);

            const socket = io.sockets.sockets.get(client.sk_id);
            const my_socket = io.sockets.sockets.get(me.sk_id);
            const roomObj = {
                room_id,
                room: room_name,
                alias: alias_2,
                default: false,
                messages: []
            }
            socket.join(room_name);
            my_socket.join(room_name);
            socket.emit('new_room', roomObj);

            roomObj.alias = alias;
            resp.status(200).send(roomObj);
        } catch (err) {
            console.log(err);
            resp.status(500).send({msg: "Error including users into room..."});
            return;
        }
    });
});


app.get('/home_info', verify_session, async function(req, resp) {
    const rooms = [];
    const user_id = req.query.id;
    const client = clients.find((client) => client.user_id == user_id);

    if (client == undefined) {
        resp.status(404).send({
            msg: "Socket not found. Please reload home page. If that don't works, again..."
        });
        return;
    }

    connection.query(`
    SELECT r.id room_id, r.name room, ur.alias, r.defaut, m.sender_id, u.username sender , m.message, m.send_date date
    FROM rooms r
    LEFT JOIN users_rooms ur
    ON r.id = ur.room_id
    LEFT JOIN messages m
    ON r.id = m.room_id
    LEFT JOIN users u
    ON m.sender_id = u.Id
    WHERE r.defaut = true
    OR ur.user_id = ${user_id}
    ORDER BY r.id, m.send_date;`, function(error, data) {
        if (error) {
            console.log(error);
            resp.status(500).send({msg: "Error getting your data..."});
            return;
        }

        if (data.length <= 0) {
            resp.status(404).send({msg: "Error: Resource not found..."});
            return;
        }

        for (var row of data) {
            const msgObj = {
                sender_id: row.sender_id,
                sender: row.sender,
                message: row.message,
                date: row.date
            }

            var index = rooms.findIndex((r) => r.room == row.room);
            if (index == -1) {
                rooms.push({
                    room_id: row.room_id,
                    room: row.room,
                    alias: row.alias,
                    default: row.defaut,
                    messages: []
                });
                index = rooms.length - 1;
            }

            if (row.message != null) {
                rooms[index].messages.push(msgObj);
            }
        }

        const socket = io.sockets.sockets.get(client.sk_id);
        for (var room of rooms) {
            socket.join(room.room);
        }

        resp.status(200).send({rooms, clients});
    });
});
