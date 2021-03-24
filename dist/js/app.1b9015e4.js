(function(e){function t(t){for(var o,u,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0e676f09"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={},i=u,c=(n("5c0b"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,null,null),l=s.exports,f=n("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=n("bc3a"),p=n.n(d);o["default"].use({install:function(e){e.prototype.$http=p.a.create({baseURL:"https://reqres.in/api/"})}});n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0");var m=n("8c4f");o["default"].use(m["a"]);var b=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"578a"))}},{path:"/dashboard",name:"dashboard",component:function(){return n.e("about").then(n.bind(null,"0c7c"))}},{path:"/cadastro",name:"cadastro",component:function(){return n.e("about").then(n.bind(null,"ad72"))}},{path:"/userLocation",name:"userLocation",component:function(){return n.e("about").then(n.bind(null,"6133"))}}],g=new m["a"]({mode:"history",base:"/",routes:b});g.beforeEach((function(e,t,n){document.title=e.name,"dashboard"!=e.name||localStorage.getItem("tokenLocal")?n():n({name:"login"})}));var h=g,v=n("1da1"),w=(n("96cf"),n("2f62"));o["default"].use(w["a"]);var y=new w["a"].Store({state:{usuarios:{},token:"",statusCode:"",usuario:{email:"",password:""}},getters:{usuarios:function(e){return e.usuarios},usuario:function(e){return e.usuario},token:function(e){return e.token},statusCode:function(e){return e.statusCode}},mutations:{ListUsuarios:function(e,t){e.usuarios=t},SetUsuario:function(e,t){e.usuario=t},SetToken:function(e,t){e.token=t},StatusCode:function(e,t){e.statusCode=t}},actions:{ListarUsuarios:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,o["default"].prototype.$http.get("users.json").then((function(e){var t=e.data;n("ListUsuarios",t.usuarios)})).catch((function(e){console.log("Erro ao listar"+e)}));case 3:case"end":return t.stop()}}),t)})))()},Logar:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,o["default"].prototype.$http.post("login",t).then((function(e){r("SetUsuario",t),localStorage.setItem("emailLocal",JSON.stringify(t.email)),r("SetToken",e.data.token),localStorage.setItem("tokenLocal",JSON.stringify(e.data.token)),r("StatusCode",e.status)})).catch((function(e){console.log("Erro ao logar"+e)}));case 3:case"end":return n.stop()}}),n)})))()},Cadastrar:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,o["default"].prototype.$http.post("register",t).then((function(e){r("SetToken",e.data.token),localStorage.setItem("tokenLocal",JSON.stringify(e.data.token)),r("SetUsuario",t),r("StatusCode",e.status)})).catch((function(e){console.log("Erro ao Cadastrar"+e)}));case 3:case"end":return n.stop()}}),n)})))()}}}),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Navbar"},[n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("HOME")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[n("b-avatar",{attrs:{size:30}}),n("em",[e._v(e._s(e.email))])],1)]},proxy:!0}])},[n("b-dropdown-item",{attrs:{href:"#"}},[e._v("Perfil")]),n("b-dropdown-item",{attrs:{href:"#"}},[e._v("Favoritos")]),n("b-dropdown-item",{on:{click:e.logout}},[e._v("logout")])],1)],1)],1)],1)],1)])},S=[],O=n("5530"),j={name:"Navbar",data:function(){return{email:""}},mounted:function(){if(localStorage.getItem("emailLocal"))try{this.email=JSON.parse(localStorage.getItem("emailLocal"))}catch(e){localStorage.removeItem("emailLocal")}},methods:Object(O["a"])(Object(O["a"])({},Object(w["d"])(["SetToken"])),{},{logout:function(){localStorage.removeItem("emailLocal"),localStorage.removeItem("tokenLocal"),this.$router.push({name:"login"}),this.$store.commit("SetToken",null),this.$router.push({name:"login"})}})},L=j,_=Object(c["a"])(L,k,S,!1,null,null,null),x=_.exports,C=(n("f9e3"),n("2dd8"),n("5f5b")),I=n("b1e0"),E=n("755e");o["default"].use(E,{load:{key:"AIzaSyCWp0kqYKOImm0UsHz17vaRq4kHOwsnqI4",libraries:"places"}}),o["default"].use(C["a"]),o["default"].use(I["a"]),o["default"].config.productionTip=!1,o["default"].component("app-navbar",x),new o["default"]({router:h,store:y,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.1b9015e4.js.map