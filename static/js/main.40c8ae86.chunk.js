(this["webpackJsonpphone-catalog"]=this["webpackJsonpphone-catalog"]||[]).push([[0],{21:function(e,c,t){},22:function(e,c,t){},32:function(e,c){},33:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t(15),i=t.n(s),a=(t(21),t(7)),j=t(2),o=(t(22),t(10)),r=function(e){return fetch("".concat("https://mate-academy.github.io/phone-catalogue-static/api/phones").concat(e)).then((function(e){if(e.ok)return e.json();throw"".concat(e.status," - ").concat(e.statusText)}))},h=t(0),l=function(e){var c=e.phone,t=e.onChosePhone;return Object(h.jsxs)("li",{className:"thumbnail",children:[Object(h.jsx)("p",{className:"phones__btn-buy-wrapper",children:Object(h.jsx)("a",{className:"btn btn-success",href:"#buy",children:"Add"})}),Object(h.jsx)(a.c,{to:"/phoneProperty",className:"thumb",value:c.id,onClick:function(){t(c.id)},children:Object(h.jsx)("img",{alt:c.id,src:c.imageUrl})}),Object(h.jsx)(a.c,{to:"/phoneProperty",value:c.id,onClick:function(){t(c.id)},children:c.name}),Object(h.jsx)("p",{children:c.snippet})]})},b=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),t=c[0],s=c[1],i=Object(n.useState)(""),a=Object(o.a)(i,2),j=(a[0],a[1]);Object(n.useEffect)((function(){r(".json").then(s)}),[]);var b=function(e){j(e)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:"phones",children:t.map((function(e){return Object(h.jsx)(l,{phone:e,onChosePhone:b},e.id)}))})})},d=function(e){e.phoneId,e.match;var c=Object(n.useState)({}),t=Object(o.a)(c,2),s=t[0],i=t[1];return Object(n.useEffect)((function(){var e;(e="motorola-xoom-with-wi-fi",r("/".concat(e,".json"))).then(i)}),[]),Object(h.jsxs)("li",{className:"thumbnail",children:[Object(h.jsx)("h2",{children:s.name}),s.hasOwnProperty("name")&&Object(h.jsxs)("div",{className:"thumb",children:[Object(h.jsx)("img",{alt:s.id,src:s.images[0]}),Object(h.jsx)("img",{alt:s.id,src:s.images[1]}),Object(h.jsx)("img",{alt:s.id,src:s.images[2]})]}),Object(h.jsx)("p",{children:s.description}),Object(h.jsx)("p",{className:"phones__btn-buy-wrapper",children:Object(h.jsx)(a.c,{to:"/",className:"btn btn-success",children:"Back"})})]})};var p=function(){return Object(h.jsx)("body",{children:Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-2",children:[Object(h.jsxs)("section",{children:[Object(h.jsxs)("p",{children:["Search:",Object(h.jsx)("input",{type:"text"})]}),Object(h.jsxs)("p",{children:["Sort by:",Object(h.jsxs)("select",{children:[Object(h.jsx)("option",{value:"name",children:"Alphabetical"}),Object(h.jsx)("option",{value:"age",children:"Newest"})]})]})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)("p",{children:"Shopping Cart"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Phone 1"}),Object(h.jsx)("li",{children:"Phone 2"}),Object(h.jsx)("li",{children:"Phone 3"})]})]})]}),Object(h.jsx)("div",{className:"col-md-10",children:Object(h.jsx)(a.a,{children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/",exact:!0,component:b}),Object(h.jsx)(j.a,{path:"/phone",component:l}),Object(h.jsx)(j.a,{path:"/phoneProperty",component:d}),Object(h.jsx)("p",{children:"Not found page"})]})})})]})})})};t(32);i.a.render(Object(h.jsx)(a.b,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.40c8ae86.chunk.js.map