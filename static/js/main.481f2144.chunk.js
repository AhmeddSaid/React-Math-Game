(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),u=(a(9),a(1)),o=(a(11),function(e){var t=e.numCorrect,a=e.numQuestions;return c.a.createElement("div",{className:"score-text"},c.a.createElement("div",null,"Your Score: ",t),c.a.createElement("div",null,"Question: ",a))}),s=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(null),s=Object(u.a)(o,2),m=s[0],i=s[1],b=Object(n.useState)(null),f=Object(u.a)(b,2),d=f[0],v=f[1],E=Object(n.useState)(null),h=Object(u.a)(E,2),j=h[0],O=h[1];Object(n.useEffect)(function(){var e=M();l(e[0]),i(e[1]),v(e[2]),O(e[3])},[]);var M=function(){var e=Math.floor(100*Math.random()),t=Math.floor(100*Math.random()),a=Math.floor(100*Math.random());return[e,t,a,Math.floor(3*Math.random())+(e+t+a)]},p=function(t){!function(e){l(e[0]),i(e[1]),v(e[2]),O(e[3])}(M());var a=w(t.target.name);e.handleAnswer(a)},w=function(e){var t=r+m+d;return t===j&&"true"===e||t!==j&&"false"===e};return c.a.createElement("div",null,c.a.createElement("div",{className:"equation"},c.a.createElement("p",{className:"text"},"".concat(r," + ").concat(m," + ").concat(d," = ").concat(j))),c.a.createElement("button",{className:"submit-btn",onClick:p,name:"true"},"True"),c.a.createElement("button",{className:"submit-btn",name:"false",onClick:p},"False"))},m=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),m=Object(u.a)(l,2),i=m[0],b=m[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"game"},c.a.createElement("h2",{className:"title"},"Mental Math"),c.a.createElement(s,{handleAnswer:function(e){e&&r(a+1),b(i+1)}}),c.a.createElement(o,{numCorrect:a,numQuestions:i})))};l.a.render(c.a.createElement(m,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(13)},9:function(e,t,a){}},[[4,2,1]]]);
//# sourceMappingURL=main.481f2144.chunk.js.map