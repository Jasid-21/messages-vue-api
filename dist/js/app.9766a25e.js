(function(){"use strict";var e={3905:function(e,o,t){var n=t(9242),s=t(3396);function r(e,o,t,n,r,a){const l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(l)}var a={setup(){return{}}},l=t(89);const u=(0,l.Z)(a,[["render",r]]);var c=u,i=t(2483);const m={class:"masterContainer"},d={class:"home"};function g(e,o,t,n,r,a){const l=(0,s.up)("Navbar"),u=(0,s.up)("Rooms"),c=(0,s.up)("ChatBox"),i=(0,s.up)("ConnectedUsers");return(0,s.wg)(),(0,s.iD)("div",m,[(0,s.Wm)(l),(0,s._)("div",d,[(0,s.Wm)(u,{rooms:n.rooms},null,8,["rooms"]),(0,s.Wm)(c),(0,s.Wm)(i,{clients:n.clients},null,8,["clients"])])])}const _=e=>((0,s.dD)("data-v-9432d826"),e=e(),(0,s.Cn)(),e),p=_((()=>(0,s._)("h1",{class:"logo"},"Chat App",-1))),v=_((()=>(0,s._)("h3",null,"Logout",-1))),f=_((()=>(0,s._)("h3",null,"Login",-1)));function w(e,o,t,n,r,a){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",null,[(0,s.Wm)(l,{to:"/"},{default:(0,s.w5)((()=>[p])),_:1}),n.logged?((0,s.wg)(),(0,s.j4)(l,{key:0,to:"/login",onClick:n.logout},{default:(0,s.w5)((()=>[v])),_:1},8,["onClick"])):((0,s.wg)(),(0,s.j4)(l,{key:1,to:"/login"},{default:(0,s.w5)((()=>[f])),_:1}))])}var h=t(4870),b={name:"Navbar",setup(){const e=(0,h.iH)(!1),o=localStorage.getItem("MSG_user_id"),t=localStorage.getItem("MSG_token"),n=()=>{const e=`/logout?token=${t}`;fetch(e,{method:"POST"}).then((e=>{200==e.status&&(localStorage.removeItem("MSG_user_id"),localStorage.removeItem("MSG_token"),localStorage.removeItem("MSG_username"))}))};return o&&t&&(e.value=!0),{logged:e,logout:n}}};const S=(0,l.Z)(b,[["render",w],["__scopeId","data-v-9432d826"]]);var y=S,k=t(7139);const M={class:"rooms"},I=["onClick"];function C(e,o,t,n,r,a){return(0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.rooms,((e,o)=>((0,s.wg)(),(0,s.iD)("li",{key:o,onClick:o=>n.setCurrent(e.room_id),class:(0,k.C_)({current:n.current.room_id==e.room_id})},(0,k.zw)(null!=e.alias?e.alias:e.room),11,I)))),128))])])}var D=t(65),U={name:"Rooms",props:["rooms"],setup(){const e=e=>{o.commit("set_current_room",e)},o=(0,D.oR)(),t=(0,s.Fl)((()=>o.state.currentRoom));return{setCurrent:e,current:t}}};const G=(0,l.Z)(U,[["render",C],["__scopeId","data-v-d3f05c92"]]);var O=G;const j={class:"users"};function R(e,o,t,n,r,a){const l=(0,s.up)("ActiveUser");return(0,s.wg)(),(0,s.iD)("div",j,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.clients,((e,o)=>((0,s.wg)(),(0,s.j4)(l,{key:o,client:e},null,8,["client"])))),128))])])}const x={key:0,class:"me"};function H(e,o,t,n,r,a){return(0,s.wg)(),(0,s.iD)("li",{class:"user_container",onDblclick:o[0]||(o[0]=e=>n.new_room(t.client.user_id,t.client.username))},[t.client.user_id==n.user_id?((0,s.wg)(),(0,s.iD)("span",x,(0,k.zw)("Me: "))):(0,s.kq)("",!0),(0,s._)("span",null,(0,k.zw)(t.client.username),1)],32)}var T={name:"ActiveUser",props:["client"],setup(){const e=(0,D.oR)(),o=localStorage.getItem("MSG_user_id"),t=localStorage.getItem("MSG_username"),n=localStorage.getItem("MSG_token"),s=(s,r)=>{const a=`/new_room?token=${n}&user_id=${o}&alias_2=${t}&chat_id=${s}&alias=${r}&focused=0`;fetch(a,{method:"POST"}).then((async e=>{const o=await e.json();return{status:e.status,resp:o}})).then((o=>{console.log(o),200==o.status?e.commit("add_room",o.resp):alert(o.resp.msg)}))};return{new_room:s,user_id:o}}};const F=(0,l.Z)(T,[["render",H],["__scopeId","data-v-38c176aa"]]);var P=F,$={name:"ConnectedUsers",props:["clients"],components:{ActiveUser:P}};const Z=(0,l.Z)($,[["render",R],["__scopeId","data-v-4883e209"]]);var V=Z;const z=e=>((0,s.dD)("data-v-e80c6e98"),e=e(),(0,s.Cn)(),e),B={class:"chatBox"},L={class:"messages-container"},W={ref:"bottom"},Y={class:"form-container"},q=z((()=>(0,s._)("input",{type:"submit",value:"Go!"},null,-1)));function A(e,o,t,r,a,l){const u=(0,s.up)("MessageBbl");return(0,s.wg)(),(0,s.iD)("div",B,[(0,s._)("div",L,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.current.messages,((e,o)=>((0,s.wg)(),(0,s.j4)(u,{key:o,msg:e,currUser:r.sender},null,8,["msg","currUser"])))),128)),(0,s._)("div",W,null,512)]),(0,s._)("div",Y,[(0,s._)("form",{class:"messages-form",onSubmit:o[1]||(o[1]=(0,n.iM)(((...e)=>r.sendMessage&&r.sendMessage(...e)),["prevent"]))},[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>r.message=e),placeholder:"Type something..."},null,512),[[n.nr,r.message]]),q],32)])])}const N={class:"details"},E={class:"sender"},K={class:"date"},J={class:"day"},Q={class:"hour"},X={class:"message"};function ee(e,o,t,n,r,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,k.C_)(["message-bbl",{owner:t.msg.sender==t.currUser}])},[(0,s._)("div",N,[(0,s._)("span",E,(0,k.zw)(t.msg.sender),1),(0,s._)("div",K,[(0,s._)("span",J,(0,k.zw)(t.msg.date.split(/[ T]/)[0]+" "),1),(0,s._)("span",Q,(0,k.zw)(t.msg.date.split(/[ T.]/)[1]),1)])]),(0,s._)("div",X,(0,k.zw)(t.msg.message),1)],2)}var oe={name:"MessageBbl",props:["msg","currUser"],setup(e){const o=(0,s.Fl)((()=>e.msg)),t=new Date(o.value.date),n=t.getDay(),r=t.getMonth()+1,a=t.getFullYear(),l=n+"-"+r+"-"+a;return{date:l}}};const te=(0,l.Z)(oe,[["render",ee],["__scopeId","data-v-613b1ddc"]]);var ne=te,se={name:"ChatBox",components:{MessageBbl:ne},setup(){function e(){const e=new Date,o=e.getFullYear(),t=e.getMonth()+1,n=e.getDate(),s=e.getHours(),r=s<10?"0"+s:s,a=e.getMinutes(),l=a<10?"0"+a:a,u=e.getSeconds(),c=u<10?"0"+u:u,i=o+"-"+t+"-"+n,m=r+":"+l+":"+c,d=i+" "+m;return d}const o=o=>{console.log(r.value);const t=e(),s={sender:a,sender_id:l,room:r.value.room,room_id:r.value.room_id,date:t,message:u.value};n.value.emit("message",s),u.value=""},t=(0,D.oR)(),n=(0,s.Fl)((()=>t.state.io)),r=(0,s.Fl)((()=>t.state.currentRoom)),a=localStorage.getItem("MSG_username"),l=localStorage.getItem("MSG_user_id"),u=(0,h.iH)(""),c=(0,h.iH)(null);return(0,s.YP)(r,(async()=>{await(0,s.Y3)(),c.value.scrollIntoView({alignToTop:!1})}),{deep:!0}),{message:u,sendMessage:o,current:r,sender:a,bottom:c}}};const re=(0,l.Z)(se,[["render",A],["__scopeId","data-v-e80c6e98"]]);var ae=re,le=t(2066),ue={name:"Home",components:{Navbar:y,Rooms:O,ConnectedUsers:V,ChatBox:ae},setup(){const e=(0,D.oR)(),o=(0,s.Fl)((()=>e.state.rooms)),t=(0,s.Fl)((()=>e.state.clients)),n=localStorage.getItem("MSG_user_id"),r=localStorage.getItem("MSG_username"),a=localStorage.getItem("MSG_token"),l=(0,le.io)({query:{user:r,user_id:n}});return l.on("updated",(()=>{e.commit("set_socket",l);const o=`/home_info?id=${n}&token=${a}`;fetch(o).then((e=>e.json())).then((o=>{e.commit("set_rooms",o.rooms),e.commit("set_clients",o.clients)}))})),l.on("new_client",(o=>{console.log("New client..."),e.commit("add_client",o)})),l.on("new_message",(o=>{console.log("Here"),e.commit("add_message",o)})),l.on("new_room",(o=>{console.log(o),e.commit("add_room",o)})),{rooms:o,clients:t}}};const ce=(0,l.Z)(ue,[["render",g],["__scopeId","data-v-80e69202"]]);var ie=ce;const me=e=>((0,s.dD)("data-v-37903f96"),e=e(),(0,s.Cn)(),e),de={class:"masterContainer"},ge=me((()=>(0,s._)("h2",null,"Login Form",-1))),_e=me((()=>(0,s._)("label",{for:"user"},"Username:",-1))),pe=me((()=>(0,s._)("br",null,null,-1))),ve=me((()=>(0,s._)("label",{for:"pass"},"Password:",-1))),fe=me((()=>(0,s._)("br",null,null,-1))),we=me((()=>(0,s._)("input",{type:"submit",value:"Login!"},null,-1))),he=me((()=>(0,s._)("br",null,null,-1)));function be(e,o,t,r,a,l){const u=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",de,[(0,s._)("form",{class:"loginForm",onSubmit:o[2]||(o[2]=(0,n.iM)(((...e)=>r.submit&&r.submit(...e)),["prevent"]))},[ge,_e,(0,s.wy)((0,s._)("input",{type:"text",name:"user",placeholder:"Ex: sefirot123","onUpdate:modelValue":o[0]||(o[0]=e=>r.user=e)},null,512),[[n.nr,r.user]]),pe,ve,(0,s.wy)((0,s._)("input",{type:"password",name:"pass","onUpdate:modelValue":o[1]||(o[1]=e=>r.pass=e)},null,512),[[n.nr,r.pass]]),fe,we,he,(0,s._)("span",null,[(0,s.Uk)(" Do not have an account? "),(0,s.Wm)(u,{to:"/register"},{default:(0,s.w5)((()=>[(0,s.Uk)("Signup!!")])),_:1})])],32)])}var Se={name:"LoginView",setup(){const e=()=>{const e=`/login?username=${t.value}&password=${n.value}`;fetch(e,{method:"POST"}).then((e=>(200!=e.status&&console.log(e.status),e.json()))).then((e=>{e.msg?alert(e.msg):(localStorage.setItem("MSG_token",e.token),localStorage.setItem("MSG_user_id",e.user_id),localStorage.setItem("MSG_username",t.value),o.replace("/"))}))},o=(0,i.tv)(),t=(0,h.iH)(""),n=(0,h.iH)("");return{user:t,pass:n,submit:e}}};const ye=(0,l.Z)(Se,[["render",be],["__scopeId","data-v-37903f96"]]);var ke=ye;const Me=e=>((0,s.dD)("data-v-64e5699f"),e=e(),(0,s.Cn)(),e),Ie={class:"masterContainer"},Ce=Me((()=>(0,s._)("h2",null,"Register Form",-1))),De=Me((()=>(0,s._)("label",{for:"user"},"Username:",-1))),Ue=Me((()=>(0,s._)("br",null,null,-1))),Ge=Me((()=>(0,s._)("label",{for:"pass"},"Password:",-1))),Oe=Me((()=>(0,s._)("br",null,null,-1))),je=Me((()=>(0,s._)("label",{for:"conf"},"Confirm password:",-1))),Re=Me((()=>(0,s._)("br",null,null,-1))),xe=Me((()=>(0,s._)("input",{type:"submit",value:"Register!"},null,-1))),He=Me((()=>(0,s._)("br",null,null,-1)));function Te(e,o,t,r,a,l){const u=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Ie,[(0,s._)("form",{class:"loginForm",onSubmit:o[3]||(o[3]=(0,n.iM)(((...e)=>r.submit&&r.submit(...e)),["prevent"]))},[Ce,De,(0,s.wy)((0,s._)("input",{type:"text",name:"user",placeholder:"Ex: sefirot123","onUpdate:modelValue":o[0]||(o[0]=e=>r.user=e),required:""},null,512),[[n.nr,r.user]]),Ue,Ge,(0,s.wy)((0,s._)("input",{type:"password",name:"pass","onUpdate:modelValue":o[1]||(o[1]=e=>r.pass=e),required:""},null,512),[[n.nr,r.pass]]),Oe,je,(0,s.wy)((0,s._)("input",{type:"password",name:"conf","onUpdate:modelValue":o[2]||(o[2]=e=>r.conf=e),required:""},null,512),[[n.nr,r.conf]]),Re,xe,He,(0,s._)("span",null,[(0,s.Uk)(" Alredy have an account? "),(0,s.Wm)(u,{to:"/login"},{default:(0,s.w5)((()=>[(0,s.Uk)("Login!!")])),_:1})])],32)])}var Fe={name:"LoginView",setup(){const e=()=>{console.log(t.value),console.log(n.value),n.value!=s.value&&alert("Passwords doesn't match...");const e=`/register?username=${t.value}&password=${n.value}`;fetch(e,{method:"POST"}).then((e=>(200!=e.status&&console.log(e.status),e.json()))).then((e=>{console.log(e),e.msg?alert(e.msg):(localStorage.setItem("MSG_token",e.token),localStorage.setItem("MSG_user_id",e.user_id),localStorage.setItem("MSG_username",t.value),o.replace("/"))}))},o=(0,i.tv)(),t=(0,h.iH)(""),n=(0,h.iH)(""),s=(0,h.iH)("");return{user:t,pass:n,conf:s,submit:e}}};const Pe=(0,l.Z)(Fe,[["render",Te],["__scopeId","data-v-64e5699f"]]);var $e=Pe;const Ze=[{path:"/",name:"home",component:ie},{path:"/login",name:"login",component:ke},{path:"/register",name:"register",component:$e}],Ve=(0,i.p7)({history:(0,i.PO)(),routes:Ze});var ze=Ve,Be=(t(7658),(0,D.MT)({state:{io:{},rooms:[],clients:[],currentRoom:{}},mutations:{set_current_room:(e,o)=>{for(var t of e.rooms)if(t.room_id==o){e.currentRoom=t;break}},set_socket:(e,o)=>{e.io=o,console.log(e.io)},set_rooms:(e,o)=>{console.log(o),e.rooms=o},add_room:(e,o)=>{e.rooms.push(o)},set_clients:(e,o)=>{e.clients=o,console.log(o)},add_client:(e,o)=>{console.log(e.clients);const t=e.clients.findIndex((e=>e.user_id==o.user_id));-1==t?e.clients.push(o):e.clients[t]=o,console.log(e.clients)},add_message:(e,{room:o,room_id:t,msg:n})=>{for(var s of(console.log(n),e.rooms))if(s.room_id==t){s.messages.push(n),e.currentRoom.room_id==t&&(e.currentRoom=s);break}console.log(e.currentRoom.messages)}},actions:{},modules:{}}));(0,n.ri)(c).use(Be).use(ze).mount("#app")}},o={};function t(n){var s=o[n];if(void 0!==s)return s.exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(o,n,s,r){if(!n){var a=1/0;for(i=0;i<e.length;i++){n=e[i][0],s=e[i][1],r=e[i][2];for(var l=!0,u=0;u<n.length;u++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[u])}))?n.splice(u--,1):(l=!1,r<a&&(a=r));if(l){e.splice(i--,1);var c=s();void 0!==c&&(o=c)}}return o}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[n,s,r]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var s,r,a=n[0],l=n[1],u=n[2],c=0;if(a.some((function(o){return 0!==e[o]}))){for(s in l)t.o(l,s)&&(t.m[s]=l[s]);if(u)var i=u(t)}for(o&&o(n);c<a.length;c++)r=a[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(i)},n=self["webpackChunkapp"]=self["webpackChunkapp"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(3905)}));n=t.O(n)})();
//# sourceMappingURL=app.9766a25e.js.map