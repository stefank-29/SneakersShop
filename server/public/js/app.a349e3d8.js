(function(e){function t(t){for(var a,o,i=t[0],u=t[1],c=t[2],m=0,p=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view")],1)},s=[],o=(r("96cf"),r("1da1")),i=r("5530"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header",{staticClass:"top"},[a("nav",{staticClass:"nav"},[a("div",{staticClass:"nav__section nav__section--pages"},[a("li",{staticClass:"nav__item"},[a("router-link",{staticClass:"nav__link nav__link--logo",attrs:{to:{name:"Home"}}},[a("img",{attrs:{src:r("e8a9"),alt:""}})])],1),e._l(e.menu,(function(t){return a("li",{key:t.title,staticClass:"nav__item"},[a("router-link",{staticClass:"nav__link",attrs:{to:t.slug}},[e._v(" "+e._s(t.title)+" ")])],1)}))],2),a("div",{staticClass:"nav__section nav__section--user"},[e.$store.state.isUserLoggedIn?e._e():a("li",{staticClass:"nav__item"},[a("router-link",{staticClass:"nav__link",attrs:{to:{name:"Register"}}},[e._v(" Register ")])],1),e.$store.state.isUserLoggedIn?e._e():a("li",{staticClass:"nav__item"},[a("router-link",{staticClass:"nav__link",attrs:{to:{name:"Login"}}},[e._v(" Login ")])],1),e.$store.state.isUserLoggedIn?a("li",{staticClass:"nav__item",on:{click:e.logout}},[a("router-link",{staticClass:"nav__link",attrs:{to:"/logout"}},[e._v(" Logout ")])],1):e._e(),e.$store.state.isUserLoggedIn?a("li",{staticClass:"nav__item"},[a("router-link",{staticClass:"nav__link",attrs:{to:"/account"}},[a("img",{staticClass:"avatar",attrs:{src:e.$store.state.gravatar,alt:""}})])],1):e._e()])])])])},c=[],l=r("2f62"),m={name:"Header",methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["removeUser"])),{},{logout:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.removeUser(),e.$router.push({name:"Home"});case 2:case"end":return t.stop()}}),t)})))()}}),data:function(){return{menu:[{slug:"/chats",title:"Chats",icon:"chat"},{slug:"/contacts",title:"Contacts",icon:"contact"}],gravatar:this.$store.state.gravatar}}},p=m,v=r("2877"),d=Object(v["a"])(p,u,c,!1,null,null,null),g=d.exports,f=r("bc3a"),_=r.n(f),b=function(){return _.a.create({baseURL:"http://localhost:3000/api/"})},w={register:function(e){return b().post("/register",e)},login:function(e){return b().post("/login",e)},isLoggedIn:function(){return b().get("/user")},logout:function(){return b().get("/logout")}},h={components:{Header:g},methods:Object(i["a"])({},Object(l["b"])(["setUser"])),created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.isLoggedIn();case 3:r=t.sent,r.data.user?(a={user:r.data.user,gravatar:r.data.gravatar},e.setUser(a)):console.log("No logged user"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},x=h,O=(r("5c0b"),Object(v["a"])(x,n,s,!1,null,null,null)),j=O.exports,y=r("8c4f"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"})},C=[],U={name:"Home",components:{}},P=U,L=Object(v["a"])(P,k,C,!1,null,null,null),R=L.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inner"},[r("form",{staticClass:"form card",attrs:{action:"/register"},on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[r("h2",[e._v("Register")]),r("label",{attrs:{for:"username"}},[e._v("Username*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),r("label",{attrs:{for:"surname"}},[e._v("Surname")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],attrs:{type:"text",name:"surname",required:""},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value)}}}),r("label",{attrs:{for:"email"}},[e._v("Email*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("label",{attrs:{for:"password"}},[e._v("Password*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("label",{attrs:{for:"password-confirm"}},[e._v("Confirm Password*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"}],attrs:{type:"password",name:"password-confirm",required:""},domProps:{value:e.confirm_password},on:{input:function(t){t.target.composing||(e.confirm_password=t.target.value)}}}),r("input",{staticClass:"button save",attrs:{type:"submit",value:"Register",name:"register"}})])])},I=[],N=(r("b0c0"),{name:"Register",data:function(){return{username:"",name:"",surname:"",email:"",password:"",confirm_password:"",error:null}},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["setUser"])),{},{register:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.register({username:e.username,name:e.name,surname:e.surname,email:e.email,password:e.password,"password-confirm":e.confirm_password});case 3:r=t.sent,r.data.error||(a={user:r.data.user,gravatar:r.data.gravatar},e.setUser(a),e.$router.push({name:"Home"})),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}),computed:Object(i["a"])({},Object(l["c"])(["user","isUserLoggedIn"]))}),H=N,q=Object(v["a"])(H,$,I,!1,null,null,null),E=q.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inner"},[r("form",{staticClass:"form card",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("h2",[e._v("Login")]),r("label",{attrs:{for:"username"}},[e._v("Username*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("label",{attrs:{for:"password"}},[e._v("Password*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("input",{staticClass:"button save",attrs:{type:"submit",value:"Log In",name:"login"}})])])},M=[],T={name:"Login",data:function(){return{username:"",password:"",error:null}},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["setUser"])),{},{login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.login({username:e.username,password:e.password});case 3:r=t.sent,r.data.error||(a={user:r.data.user,gravatar:r.data.gravatar},e.setUser(a),e.$router.push({name:"Home"})),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}})},D=T,J=Object(v["a"])(D,S,M,!1,null,null,null),A=J.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("404")]),r("h2",[e._v("Page not found")])])}],B={},G=Object(v["a"])(B,F,z,!1,null,null,null),K=G.exports;a["a"].use(y["a"]);var Q=[{path:"/",name:"Home",component:R},{path:"/register",name:"Register",component:E},{path:"/login",name:"Login",component:A},{path:"/:catchAll(.*)",name:"NotFound",component:K}],V=new y["a"]({mode:"history",base:"/",routes:Q}),W=V,X={user:null,isUserLoggedIn:!1,gravatar:""},Y={setUser:function(e,t){var r=t.user,a=t.gravatar;e.user=r,e.isUserLoggedIn=!0,e.gravatar=a},logout:function(e){e.user=null,e.gravatar="",e.isUserLoggedIn=!1}},Z={setUser:function(e,t){var r=e.commit;r("setUser",t)},removeUser:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,w.logout();case 4:t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.log(t.t0.message);case 10:r("logout");case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))()}},ee={};a["a"].use(l["a"]);var te=new l["a"].Store({state:X,mutations:Y,actions:Z,getters:ee});r("a41b");a["a"].config.productionTip=!1,new a["a"]({router:W,store:te,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},a41b:function(e,t,r){},e8a9:function(e,t,r){e.exports=r.p+"img/whatsapp.714716d3.svg"}});
//# sourceMappingURL=app.a349e3d8.js.map