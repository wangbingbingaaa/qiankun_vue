(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["vueApp"]=t():e["vueApp"]=t()})(window,(function(){return function(e){function t(t){for(var o,u,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a6607ffd"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="http://localhost:10001/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonpvueApp"]=window["webpackJsonpvueApp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=l;return a.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return W})),n.d(t,"mount",(function(){return U})),n.d(t,"unmount",(function(){return B}));n("96cf");var o=n("1da1"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("h1",[e._v(e._s(e.msg))]),n("p",[e._v("qiankun 主应用带过来的消息："+e._s(e.microInfo))]),n("button",{on:{click:e.handleActions}},[e._v("子应用按钮")])],1),n("router-view")],1)},u=[],i=n("d4ec"),c=n("bee2"),l=n("ade3");function s(){console.warn("Current execute action is empty!")}var p=function(){function e(){Object(i["a"])(this,e),Object(l["a"])(this,"actions",{onGlobalStateChange:s,setGlobalState:s})}return Object(c["a"])(e,[{key:"setActions",value:function(e){console.log("actions",e),this.actions=e}},{key:"onGlobalStateChange",value:function(){var e;return(e=this.actions).onGlobalStateChange.apply(e,arguments)}},{key:"setGlobalState",value:function(){var e;return(e=this.actions).setGlobalState.apply(e,arguments)}}]),e}(),f=new p,d=f,h={name:"HelloWorld",data:function(){return{msg:"VUE子应用",microInfo:{}}},mounted:function(){var e=this;d.onGlobalStateChange((function(t){console.log("子应用的观察函数：",t),e.microInfo=t}),!0)},methods:{handleActions:function(){d.setGlobalState({msg:"子应用传递过来消息，".concat(Math.random())})}}},m=h,v=(n("034f"),n("2877")),b=Object(v["a"])(m,a,u,!1,null,null,null),_=b.exports,g=(n("d3b7"),n("8c4f")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},w=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},O=[],x={name:"HelloWorld",props:{msg:String}},A=x,k=Object(v["a"])(A,j,O,!1,null,"e02045d8",null),S=k.exports,E={name:"Home",components:{HelloWorld:S}},P=E,C=Object(v["a"])(P,y,w,!1,null,null,null),G=C.exports;r["a"].use(g["a"]);var H=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],I=new g["a"]({mode:"history",base:"/vue",routes:H}),R=I;n("a766");r["a"].config.productionTip=!1;var N=null;function T(e){e&&(console.log("props-----",e),d.setActions(e)),N=new r["a"]({router:R,render:function(e){return e(_)}}).$mount("#app")}function W(e){return M.apply(this,arguments)}function M(){return M=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function U(e){return $.apply(this,arguments)}function $(){return $=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t,"props--------s"),T(t);case 2:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}function B(e){return Y.apply(this,arguments)}function Y(){return Y=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:N.$destroy();case 1:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||T(),window.__POWERED_BY_QIANKUN__&&console.log(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},"85ec":function(e,t,n){},a766:function(e,t,n){}})}));
//# sourceMappingURL=app.35eba670.js.map