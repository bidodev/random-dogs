(this.webpackJsonprosetta=this.webpackJsonprosetta||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(3),i=t.n(a),c=(t(14),t(1)),s=t.n(c),l=t(4),u=t(5),d=t(6),f=t(8),h=t(7),g=(t(16),function(e){Object(f.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(u.a)(this,t),(e=n.call(this)).state={dogs:[]},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breed/hound/images/random/6");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,this.setState({dogs:t.message});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.dogs.map((function(e){return r.a.createElement("figure",null,r.a.createElement("img",{src:"".concat(e),alt:""}))})))}}]),t}(r.a.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/random-dogs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/random-dogs","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(n,e)}))}}()},9:function(e,n,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.52071bc1.chunk.js.map