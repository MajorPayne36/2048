(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],{11:function(n,r,t){"use strict";t.r(r);var e=t(1),o=t.n(e),c=t(4),a=t.n(c),u=(t(9),t(2)),i=function(n,r){for(var t=0;t<n.length;t++)for(var e=0;e<n[t].length;e++)if(n[t][e]===r)return!0;return!1},f=function(){return[Math.floor(4*Math.random()),Math.floor(4*Math.random())]},l=function(n){if(function(n){return!i(n,0)}(n))return n;for(var r=f(),t=Object(u.a)(r,2),e=t[0],o=t[1];0!==n[e][o];){var c=f(),a=Object(u.a)(c,2);e=a[0],o=a[1]}return n[e][o]=2,n},v=function(n){for(var r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],t=0;t<n.length;t++)for(var e=0,o=0;o<n[t].length;o++)0!==n[t][o]&&(r[t][e]=n[t][o],e++);return r},s=function(n){var r=function(n){for(var r=0;r<n.length;r++)for(var t=0;t<n[r].length-1;t++)0!==n[r][t]&&n[r][t]===n[r][t+1]&&(n[r][t]=2*n[r][t],n[r][t+1]=0);return n}(v(n));return v(r)},h=function(n){for(var r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],t=0;t<n.length;t++)for(var e=0;e<n[t].length;e++)r[t][e]=n[t][n[t].length-1-e];return r},d=function(n){var r=h(n),t=s(r);return h(t)},g=function(n){for(var r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],t=0;t<n.length;t++)for(var e=0;e<n[t].length;e++)r[t][e]=n[e][n[t].length-1-t];return r},j=function(n){for(var r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],t=0;t<n.length;t++)for(var e=0;e<n[t].length;e++)r[t][e]=n[n[t].length-1-e][t];return r},b=function(n){var r=g(n),t=s(r);return j(t)},w=function(n){var r=j(n),t=s(r);return g(t)},m=function(n,r){for(var t=0;t<n.length;t++)for(var e=0;e<n[t].length;e++)if(n[t][e]!==r[t][e])return!0;return!1},O=t(0),p=function(n){var r=n.number;return Object(O.jsx)("div",{className:"cell cell-".concat(r),children:r>0?r:""})},x=function(){var n=Object(e.useState)(l([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])),r=Object(u.a)(n,2),t=r[0],o=r[1],c=function(){!function(n){return i(n,2048)}(t)?function(n){return!m(n,s(n))&&!m(n,d(n))&&!m(n,b(n))&&!m(n,w(n))}(t)&&console.log("Game over!"):console.log("You win!")},a=function(n){switch(n.key){case"ArrowLeft":!function(){var n=s(t);o(l(n)),c()}();break;case"ArrowRight":!function(){var n=d(t);o(l(n)),c()}();break;case"ArrowUp":!function(){var n=b(t);o(l(n)),c()}();break;case"ArrowDown":!function(){var n=w(t);o(l(n)),c()}()}};return Object(e.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}})),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"game-board",children:t.map((function(n,r){return Object(O.jsx)("div",{className:"row",children:n.map((function(n,t){return Object(O.jsx)(p,{number:n},"cell-".concat(r,"-").concat(t))}))},"row-".concat(r))}))})})};var k=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(x,{})})};a.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))},9:function(n,r,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.f2c1ee5e.chunk.js.map