(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],{219:function(e,t,n){},29:function(e,t){e.exports={JOIN:"join",LEAVE:"leave",COUNT:"count",PRESENT:"present",SHARE_ROOMS:"share-rooms",ADD_PEER:"add-peer",REMOVE_PEER:"remove-peer",RELAY_SDP:"relay-sdp",RELAY_ICE:"relay-ice",ICE_CANDIDATE:"ice-candidate",SESSION_DESCRIPTION:"session-description"}},396:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(27),o=n.n(a),i=(n(219),n(220),n(96)),u=n(21),s=n(38),l=n(209),f=n(403),d=n(404),j=n(73),b=function(e,t){for(var n=0;n<e.length;n++)for(var r=0;r<e[n].length;r++)if(e[n][r]===t)return!0;return!1},h=function(){return[Math.floor(4*Math.random()),Math.floor(4*Math.random())]},O=function(e){if(function(e){return!b(e,0)}(e))return e;for(var t=h(),n=Object(s.a)(t,2),r=n[0],c=n[1];0!==e[r][c];){var a=h(),o=Object(s.a)(a,2);r=o[0],c=o[1]}return e[r][c]=2,e},p=function(e){for(var t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],n=0;n<e.length;n++)for(var r=0,c=0;c<e[n].length;c++)0!==e[n][c]&&(t[n][r]=e[n][c],r++);return t},m=function(e){var t=function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].length-1;n++)0!==e[t][n]&&e[t][n]===e[t][n+1]&&(e[t][n]=2*e[t][n],e[t][n+1]=0);return e}(p(e));return p(t)},x=function(e){for(var t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],n=0;n<e.length;n++)for(var r=0;r<e[n].length;r++)t[n][r]=e[n][e[n].length-1-r];return t},v=function(e){var t=x(e),n=m(t);return x(n)},g=function(e){for(var t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],n=0;n<e.length;n++)for(var r=0;r<e[n].length;r++)t[n][r]=e[r][e[n].length-1-n];return t},E=function(e){for(var t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],n=0;n<e.length;n++)for(var r=0;r<e[n].length;r++)t[n][r]=e[e[n].length-1-r][n];return t},k=function(e){var t=g(e),n=m(t);return E(n)},y=function(e){var t=E(e),n=m(t);return g(n)},I=function(e,t){for(var n=0;n<e.length;n++)for(var r=0;r<e[n].length;r++)if(e[n][r]!==t[n][r])return!0;return!1},w=n(7),C=function(e){var t=e.number;return Object(w.jsx)("div",{className:"cell cell-".concat(t),children:t>0?t:""})},D=function(){var e=Object(r.useState)(O([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])),t=Object(s.a)(e,2),n=t[0],c=t[1],a=function(){!function(e){return b(e,2048)}(n)?function(e){return!I(e,m(e))&&!I(e,v(e))&&!I(e,k(e))&&!I(e,y(e))}(n)&&l.b.error("Game over!"):l.b.success("You win!")},o=function(){var e=m(n);c(O(e)),a()},i=function(){var e=v(n);c(O(e)),a()},u=function(){var e=k(n);c(O(e)),a()},h=function(){var e=y(n);c(O(e)),a()},p=function(e){switch(e.key){case"ArrowLeft":o();break;case"ArrowRight":i();break;case"ArrowUp":u();break;case"ArrowDown":h()}};return Object(r.useEffect)((function(){return window.addEventListener("keydown",p),function(){window.removeEventListener("keydown",p)}})),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"game-board",children:[Object(w.jsx)(f.a,{children:Object(w.jsx)(d.a,{xs:{span:24,offset:0},xl:{span:10,offset:7},children:n.map((function(e,t){return Object(w.jsx)("div",{className:"row",children:e.map((function(e,n){return Object(w.jsx)(C,{number:e},"cell-".concat(t,"-").concat(n))}))},"row-".concat(t))}))})}),document.documentElement.scrollWidth<600?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{children:Object(w.jsx)(d.a,{span:4,offset:10,children:Object(w.jsx)(j.a,{onClick:u,children:"\u0412\u0432\u0435\u0440\u0445"})})}),Object(w.jsxs)(f.a,{children:[Object(w.jsx)(d.a,{span:4,offset:6,children:Object(w.jsx)(j.a,{onClick:o,children:"\u041f\u0440\u0430\u0432\u043e"})}),Object(w.jsx)(d.a,{span:4,offset:4,children:Object(w.jsx)(j.a,{onClick:i,children:"\u041f\u0440\u0430\u0432\u043e"})})]}),Object(w.jsx)(f.a,{children:Object(w.jsx)(d.a,{span:4,offset:10,children:Object(w.jsx)(j.a,{onClick:h,children:"\u0412\u043d\u0438\u0437"})})})]}):null]})})},A=n(399),R=n(56),S=n(402),_=n(139),N=n(74),L=n.n(N),T=n(137),U=n(158),M=n(210),P=n(199),J=n.n(P),V=function(e){var t=Object(r.useState)(e),n=Object(s.a)(t,2),c=n[0],a=n[1],o=Object(r.useRef)(null),i=Object(r.useCallback)((function(e,t){o.current=t,a((function(t){return"function"===typeof e?e(t):e}))}),[]);return Object(r.useEffect)((function(){o.current&&(o.current(c),o.current=null)}),[c]),[c,i]},H=n(200),Y=Object(H.io)("wss://video-guru-app-server.herokuapp.com",{"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,transports:["websocket"]}),B=n(29),F=n.n(B),z="LOCAL_VIDEO",W="LOCAL_AUDIO";function G(){var e=function(e){var t,n=V([]),c=Object(s.a)(n,2),a=c[0],o=c[1],i=Object(r.useCallback)((function(e,t){o((function(t){return t.includes(e)?t:[].concat(Object(M.a)(t),[e])}),t)}),[o]),u=Object(r.useRef)({}),f=Object(r.useRef)(null),d=Object(r.useRef)(null),j=Object(r.useRef)((t={},Object(U.a)(t,z,null),Object(U.a)(t,W,null),t));return Object(r.useEffect)((function(){function e(){return(e=Object(T.a)(L.a.mark((function e(t){var n,r,c,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.peerID,r=t.createOffer,!(n in u.current)){e.next=3;break}return e.abrupt("return",console.warn("Already connected to peer ".concat(n)));case 3:if(u.current[n]=new RTCPeerConnection({iceServers:J()()}),u.current[n].onicecandidate=function(e){e.candidate&&Y.emit(F.a.RELAY_ICE,{peerID:n,iceCandidate:e.candidate})},c=0,u.current[n].ontrack=function(e){var t=Object(s.a)(e.streams,1)[0];1===++c&&(c=0,i(n,(function(){if(j.current[n])j.current[n].srcObject=t;else var e=!1,r=setInterval((function(){j.current[n]&&(j.current[n].srcObject=t,e=!0),e&&clearInterval(r)}),1e3)})))},d.current&&d.current.getTracks().forEach((function(e){u.current[n].addTrack(e,d.current)})),f.current&&f.current.getTracks().forEach((function(e){u.current[n].addTrack(e,f.current)})),!r){e.next=16;break}return e.next=12,u.current[n].createOffer();case 12:return a=e.sent,e.next=15,u.current[n].setLocalDescription(a);case 15:Y.emit(F.a.RELAY_SDP,{peerID:n,sessionDescription:a});case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Y.on(F.a.ADD_PEER,(function(t){return e.apply(this,arguments)})),function(){Y.off(F.a.ADD_PEER)}}),[i]),Object(r.useEffect)((function(){function e(){return(e=Object(T.a)(L.a.mark((function e(t){var n,r,c,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.peerID,c=t.sessionDescription,e.next=3,null===(n=u.current[r])||void 0===n?void 0:n.setRemoteDescription(new RTCSessionDescription(c));case 3:if("offer"!==c.type){e.next=10;break}return e.next=6,u.current[r].createAnswer();case 6:return a=e.sent,e.next=9,u.current[r].setLocalDescription(a);case 9:Y.emit(F.a.RELAY_SDP,{peerID:r,sessionDescription:a});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Y.on(F.a.SESSION_DESCRIPTION,(function(t){return e.apply(this,arguments)})),function(){Y.off(F.a.SESSION_DESCRIPTION)}}),[]),Object(r.useEffect)((function(){return Y.on(F.a.ICE_CANDIDATE,(function(e){var t,n=e.peerID,r=e.iceCandidate;null===(t=u.current[n])||void 0===t||t.addIceCandidate(new RTCIceCandidate(r))})),function(){Y.off(F.a.ICE_CANDIDATE)}}),[]),Object(r.useEffect)((function(){return Y.on(F.a.REMOVE_PEER,(function(e){var t=e.peerID;u.current[t]&&u.current[t].close(),delete u.current[t],delete j.current[t],o((function(e){return e.filter((function(e){return e!==t}))}))})),function(){Y.off(F.a.REMOVE_PEER)}}),[o]),Object(r.useEffect)((function(){function t(){return(t=Object(T.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0}).catch((function(e){l.b.error("\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0437\u0432\u0443\u043a\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),console.error(e.name+": "+e.message)}));case 2:return d.current=e.sent,e.next=5,navigator.mediaDevices.getUserMedia({video:!0}).catch((function(e){l.b.error("\u0412\u0438\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u0430 \u043d\u0435 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e"),console.error(e.name+": "+e.message)}));case 5:f.current=e.sent,i(z,(function(){var e=j.current.LOCAL_VIDEO,t=j.current.LOCAL_AUDIO;e&&(e.volume=0,e.srcObject=f.current),t&&(t.volume=0,t.srcObject=d.current)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){return t.apply(this,arguments)}().then((function(){return Y.emit(F.a.JOIN,{room:e})})).catch((function(e){return console.error("Error getting userMedia:",e)})),function(){d.current&&d.current.getTracks().forEach((function(e){return e.stop()})),f.current&&f.current.getTracks().forEach((function(e){return e.stop()})),Y.emit(F.a.LEAVE)}}),[i,e]),{clients:a,provideMediaRef:Object(r.useCallback)((function(e,t){j.current[e]=t}),[])}}(Object(u.g)().id),t=e.clients,n=e.provideMediaRef,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Array.from({length:e}).reduce((function(e,t,n,r){return n%2===0&&e.push(r.slice(n,n+2)),e}),[]),n=t.length,r="".concat(100/n,"%");return t.map((function(e,t,n){return t===n.length-1&&1===e.length?[{width:"100%",height:r}]:e.map((function(){return{width:"50%",height:r}}))})).flat()}(t.length);return Object(w.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",height:"100vh"},children:t.map((function(e,t){return Object(w.jsx)("div",{style:c[t],id:e,children:Object(w.jsx)("video",{width:"100%",height:"100%",ref:function(t){n(e,t)},autoPlay:!0,playsInline:!0,muted:e===z})},e)}))})}var q=n(405),K=n(406),Q=n(400),X=n(401);function Z(){var e=Object(u.f)(),t=Object(r.useState)([]),n=Object(s.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)([]),i=Object(s.a)(o,2),l=i[0],f=i[1],d=Object(r.useRef)(),b=[{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043d\u0430\u0442\u044b",dataIndex:"name",key:"name"},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",dataIndex:"count",key:"count"},{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435",dataIndex:"join",key:"join",render:function(t,n){return Object(w.jsx)(q.b,{size:"middle",children:Object(w.jsx)(j.a,{ghost:!0,type:"primary",onClick:function(){e.push("/2048/room/".concat(n.name))},children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043a\u043e\u043c\u043d\u0430\u0442\u0443"})})}}],h=c.map((function(e,t){return{key:t,name:e,count:Object(w.jsx)(K.a,{color:"blue",children:l[t]})}}));return Object(r.useEffect)((function(){Y.on(F.a.SHARE_ROOMS,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.rooms,n=void 0===t?[]:t,r=e.count,c=void 0===r?[]:r;d.current&&(a(n),f(c),console.log(n),console.log(c))}))}),[]),Object(w.jsxs)("div",{ref:d,children:[Object(w.jsx)("h1",{children:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043a\u043e\u043c\u043d\u0430\u0442\u044b"}),Object(w.jsx)(Q.a,{dataSource:h,columns:b}),Object(w.jsx)(j.a,{type:"primary",onClick:function(){e.push("/2048/room/".concat(Object(X.a)()))},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u043e\u043c\u043d\u0430\u0442\u0443"})]})}function $(){return Object(w.jsx)("div",{children:"NOT FOUND."})}var ee=n(95),te=n.n(ee);function ne(){var e=new ee.UnityContext({loaderUrl:"build/clicky/Build.loader.js",dataUrl:"build/clicky/Build.data",frameworkUrl:"build/clicky/Build.framework.js",codeUrl:"build/clicky/Build.wasm"});return Object(w.jsx)(te.a,{unityContext:e,style:{height:"100%",width:950,border:"2px solid black",background:"grey"}})}function re(){var e=new ee.UnityContext({loaderUrl:"build/jumper/Jumper.loader.js",dataUrl:"build/jumper/Jumper.data",frameworkUrl:"build/jumper/Jumper.framework.js",codeUrl:"build/jumper/Jumper.wasm"});return Object(w.jsx)(te.a,{unityContext:e,style:{height:"100%",width:"100%",border:"2px solid black",background:"grey"}})}var ce=function(){return Object(w.jsx)(i.a,{children:Object(w.jsxs)(A.a,{children:[Object(w.jsxs)(_.Header,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(w.jsx)("div",{className:"logo"}),Object(w.jsxs)(R.a,{theme:"dark",mode:"horizontal",children:[Object(w.jsx)(R.a.Item,{children:Object(w.jsx)(i.b,{to:"/2048/",children:"Home"})},"1"),Object(w.jsx)(R.a.Item,{children:Object(w.jsx)(i.b,{to:"/2048/2048",children:"2048"})},"2"),Object(w.jsx)(R.a.Item,{children:Object(w.jsx)(i.b,{to:"/2048/clicky",children:"Clicky"})},"3"),Object(w.jsx)(R.a.Item,{children:Object(w.jsx)(i.b,{to:"/2048/jumper",children:"Jumper"})},"4")]})]}),Object(w.jsxs)(_.Content,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:[Object(w.jsxs)(S.a,{style:{margin:"16px 0"},children:[Object(w.jsx)(S.a.Item,{children:"Home"}),Object(w.jsx)(S.a.Item,{children:"List"}),Object(w.jsx)(S.a.Item,{children:"App"})]}),Object(w.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(u.c,{children:[Object(w.jsx)(u.a,{exact:!0,path:"/2048/room/:id",component:G}),Object(w.jsx)(u.a,{exact:!0,path:"/2048/",component:Z}),Object(w.jsx)(u.a,{exact:!0,path:"/2048/2048",component:D}),Object(w.jsx)(u.a,{exact:!0,path:"/2048/clicky",component:ne}),Object(w.jsx)(u.a,{exact:!0,path:"/2048/jumper",component:re}),Object(w.jsx)(u.a,{component:$})]})})})]}),Object(w.jsx)(_.Footer,{style:{textAlign:"center"},children:"  \u0412\u0438\u0434\u0435\u043e\u0447\u0430\u0442. \u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c \u0413\u0440\u0438\u0433\u043e\u0440\u044f\u043d \u0410\u043d\u0434\u0440\u0430\u043d\u0438\u043a. \u0412\u0413\u0422\u0423/\u0418\u0414-181"})]})})};o.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(ce,{})}),document.getElementById("root"))}},[[396,1,2]]]);
//# sourceMappingURL=main.5e4c59d5.chunk.js.map