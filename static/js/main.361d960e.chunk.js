(this["webpackJsonpfun-mode"]=this["webpackJsonpfun-mode"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(0),s=c.n(i),r=c(15),l=c.n(r),o=(c(34),c(35),c(6)),a=(c(36),c(37),c(22)),d=c.n(a),j=function(e){var t=Object(i.useState)(!1),c=Object(o.a)(t,2),s=c[0],r=c[1],l=Object(i.useState)(!1),a=Object(o.a)(l,2),j=a[0],h=a[1],b=Object(i.useState)(!1),u=Object(o.a)(b,2),O=u[0],x=u[1],p=Object(i.useState)(!1),g=Object(o.a)(p,2),f=g[0],w=g[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"c",children:Object(n.jsx)("div",{class:"circle-border a \n          ".concat(O?"a-circle-hover":""," \n          ").concat(f?"a-hover":""," \n          ").concat(j?"a-expand":"","\n          "),onClick:function(){return h(!0)},onMouseEnter:function(){return w(!0)},onMouseLeave:function(){return w(!1)},children:j?Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onMouseDown:function(){return h(!1)},class:"btn-r",children:"X"}),Object(n.jsx)("div",{style:{paddingTop:100},class:"a-secret-menu",children:Object(n.jsx)("h3",{children:e.secretMenu})})]}):Object(n.jsx)("h3",{class:"title",children:e.title})})}),Object(n.jsx)("div",{id:"circle",class:"circle-border circle ".concat(s?"expand":""," ").concat(O?"circle-hover":""),onClick:function(){return r(!0)},onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:s?Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onMouseDown:function(){return r(!1)},class:"btn",children:"X"}),e.hamburgerMenu]}):Object(n.jsx)("div",{class:"content",children:Object(n.jsx)(d.a,{fontSize:"large"})})})]})},h=(c(42),c(43),function(e){return Object(n.jsx)("div",{style:{width:e.src?e.width?e.width:"100%":"auto",height:e.src?e.height?e.height:400:"auto",boxShadow:e.shadow?"inset 0 0 20px #000000":""},children:e.src?Object(n.jsx)("img",{alt:e.src,src:e.src,style:{width:e.width?e.width:"auto",height:e.src?e.height?e.height:400:"auto",borderRadius:"25px",boxShadow:"inset 0 0 20px #000000"}}):Object(n.jsx)("div",{className:"card-content ",style:{padding:e.p?e.p:20},children:e.children})})}),b=function(e){var t=Object(i.useState)(!1),c=Object(o.a)(t,2),s=c[0],r=c[1];return Object(n.jsx)("div",{class:"card-container",children:Object(n.jsxs)("div",{class:"\n  card\n  ".concat(e.link||e.hiddenContent?"card-hover":"","\n  ","".concat(s?"card-expand":""),"\n  "),style:{padding:e.p?e.p:0,display:e.row?"flex":"auto",flexDirection:e.row?"row":"auto"},onMouseDown:function(){e.hiddenContent?r(!0):e.link&&(window.location.href=e.link)},children:[e.children,s?Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onMouseUp:function(){return r(!s)},class:"btn-r",children:"X"}),e.hiddenContent]}):null]})})},u=c(18),O=c(3),x=function(e){return Object(n.jsxs)(b,{row:!0,p:e.p,link:e.link,children:[Object(n.jsx)(h,{src:e.src,height:150,width:150}),Object(n.jsx)("div",{style:{textAlign:e.textAlign?e.textAlign:"left"},children:Object(n.jsx)("div",{style:{paddingLeft:10},children:e.children})})]})},p=[{id:"001",title:"HP 250 G7",subTitle:"Laptop",images:["https://www.laptopsdirect.co.uk/Images/6BP88EA_1_Classic.jpg?v=1&switchoff=enabled","https://www.laptopsdirect.co.uk/Images/6BP88EA_1_Classic.jpg?v=1&switchoff=enabled","https://www.laptopsdirect.co.uk/Images/6BP88EA_1_Classic.jpg?v=1&switchoff=enabled","https://www.laptopsdirect.co.uk/Images/6BP88EA_1_Classic.jpg?v=1&switchoff=enabled"],details:[{label:"CPU",content:"Core i5-8265U "},{label:"RAM",content:"8GB"},{label:"SSD",content:"256GB "},{label:"SCREEN",content:'15.6"'}]},{id:"002",title:"Lenovo V15 IIL",subTitle:"Laptop",images:["https://www.laptopsdirect.co.uk/Images/82C50075UK_1_classic.jpg?v=3&switchoff=enabled","https://www.laptopsdirect.co.uk/Images/82C50075UK_1_classic.jpg?v=3&switchoff=enabled","https://www.laptopsdirect.co.uk/Images/82C50075UK_1_classic.jpg?v=3&switchoff=enabled"],details:[{label:"CPU",content:"Core i5-1035G1 "},{label:"RAM",content:"8GB"},{label:"SSD",content:"256GB "},{label:"SCREEN",content:'15.6"'}]},{id:"003",title:"MSI GF63 Thin",subTitle:"Gaming Laptop",images:["https://www.laptopsdirect.co.uk/Images/9S7-16R412-1069_1_Supersize.png?width=937&height=937&v=3","https://www.laptopsdirect.co.uk/Images/9S7-16R412-1069_1_Supersize.png?width=937&height=937&v=3","https://www.laptopsdirect.co.uk/Images/9S7-16R412-1069_1_Supersize.png?width=937&height=937&v=3"],details:[{label:"CPU",content:"Core i5-9300H "},{label:"GPU",content:"GeForce GTX 1650 Ti 4GB"},{label:"RAM",content:"8GB"},{label:"SSD",content:"256GB "},{label:"SCREEN",content:'15.6"'}]}];function g(){return Object(n.jsx)("div",{children:p.map((function(e,t){return Object(n.jsxs)(x,{p:10,src:e.images[0],link:"/product/".concat(e.id),children:[Object(n.jsx)("h5",{style:{marginBlock:5},children:e.subTitle}),Object(n.jsx)("h2",{style:{marginBlock:5},children:e.title}),e.details.map((function(e,t){return Object(n.jsx)("ul",{children:Object(n.jsx)("li",{children:Object(n.jsxs)("p",{style:{marginBlock:5},children:[e.content," ",e.label]})})})}))]})}))})}var f=c(25),w=c.n(f),v=c(26),m=c.n(v),S=c(27),k=c.n(S),C=c(24),M=c.n(C),E=function(e){var t=Object(i.useState)(!1),c=Object(o.a)(t,2),s=c[0],r=c[1],l=e.iconSize?e.iconSize:10,a=s?l+l/10:l;return Object(n.jsx)("button",{class:"main-btn",onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},children:Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)("div",{style:{backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",padding:a},class:"\n          ".concat(s?"icon-btn-hover":"main-btn-icon","\n           "),children:e.icon}),Object(n.jsx)("div",{class:"main-btn-text",style:{lineHeight:e.lineHeight?e.lineHeight:"50px"},children:e.children})]})})},_=c(23),y=c.n(_),B=(c(44),function(e){return Object(n.jsx)("img",{className:"carousel-card",alt:e.src,src:e.src})}),A=function(e){return Object(n.jsx)("div",{className:"carousel-container",style:{height:e.height?e.height:300},children:e.children})};function I(){var e=Object(O.f)().id,t=Object(i.useState)({}),c=Object(o.a)(t,2),s=c[0],r=c[1],l=Object(i.useState)(!0),a=Object(o.a)(l,2),d=a[0],j=a[1];Object(i.useEffect)((function(){r(u(e)),j(!1)}));var u=function(){return p.find((function(t){return t.id===e}))};return console.log(s),d?Object(n.jsxs)(b,{children:["Fetching product ",Object(n.jsx)("i",{children:e})]}):Object(n.jsxs)(b,{children:[Object(n.jsx)(h,{icon:Object(n.jsx)(y.a,{}),children:"\u2714 In Stock"}),Object(n.jsx)(A,{height:400,children:s.images.map((function(e,t){return Object(n.jsx)(B,{src:e})}))}),Object(n.jsxs)(h,{children:[Object(n.jsxs)("h6",{children:[Object(n.jsx)("b",{children:s.subTitle})," : ",s.id]}),Object(n.jsxs)("h2",{children:[s.title,s.details.map((function(e,t){return Object(n.jsxs)(n.Fragment,{children:["\xa0\u25aa\xa0",e.content]})}))]})]}),Object(n.jsx)(h,{shadow:!0,children:Object(n.jsxs)("table",{id:"vertical-1",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{}),Object(n.jsx)("th",{children:s.title}),Object(n.jsx)("th",{children:Object(n.jsx)("th",{children:Object(n.jsx)(E,{lineHeight:"30px",iconSize:2,icon:Object(n.jsx)(M.a,{}),children:"COMPARE"})})})]}),s.details.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:e.label}),Object(n.jsx)("td",{children:e.content})]})}))]})}),Object(n.jsxs)(h,{children:[Object(n.jsx)(E,{backgroundColor:"lightgreen",icon:Object(n.jsx)(w.a,{}),children:"ADD TO BASKET"}),Object(n.jsx)(E,{backgroundColor:"lightcoral",icon:Object(n.jsx)(m.a,{}),children:"SAVE FOR LATER"}),Object(n.jsx)(E,{backgroundColor:"lightblue",icon:Object(n.jsx)(k.a,{}),children:"DOWNLOAD"})]})]})}var G=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{title:"FUN-MODE",secretMenu:Object(n.jsx)("h3",{children:"fun-mode"}),hamburgerMenu:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Option 1"}),Object(n.jsx)("li",{children:"Option 2"}),Object(n.jsx)("li",{children:"Option 3"}),Object(n.jsx)("li",{children:"Option 4"}),Object(n.jsx)("li",{children:"Option 5"})]})}),Object(n.jsx)(u.a,{children:Object(n.jsxs)(O.c,{children:[Object(n.jsx)(O.a,{exact:!0,path:"/",children:Object(n.jsx)(b,{link:"".concat("/fun-mode","/products"),children:Object(n.jsx)(h,{children:"See products here"})})}),Object(n.jsx)(O.a,{path:"".concat("/fun-mode","/products"),children:Object(n.jsx)(g,{})}),Object(n.jsx)(O.a,{path:"".concat("/fun-mode","/product/:id"),children:Object(n.jsx)(I,{})})]})})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root")),T()}},[[48,1,2]]]);
//# sourceMappingURL=main.361d960e.chunk.js.map