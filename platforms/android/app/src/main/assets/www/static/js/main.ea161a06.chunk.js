(this.webpackJsonptimpmobile=this.webpackJsonptimpmobile||[]).push([[0],{27:function(n,t,e){},34:function(n,t,e){"use strict";e.r(t);var o=e(0),c=e.n(o),i=e(18),a=e.n(i),r=(e(27),e(14)),s=e(2),u=e(11),d=e(21),l=e(9),j=e(10),h=new(function(){function n(){Object(l.a)(this,n),this.authenticated=!1}return Object(j.a)(n,[{key:"login",value:function(n,t){"admin"==n.login&&"admin"==n.password&&(this.authenticated=!0,t())}},{key:"logout",value:function(n){this.authenticated=!1,n()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),n}()),b=e(1),p=function(n){var t=n.component,e=Object(d.a)(n,["component"]);return Object(b.jsx)(s.b,Object(u.a)(Object(u.a)({},e),{},{render:function(n){return h.isAuthenticated()?Object(b.jsx)(t,Object(u.a)({},n)):Object(b.jsx)(s.a,{to:{pathname:"/login",state:{from:n.location}}})}}))},O=function(n){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Index landing"}),Object(b.jsx)("button",{onClick:function(){n.history.push("/login")},children:"Login"})]})},g=e(22),f=e(20),x=function(n){Object(g.a)(e,n);var t=Object(f.a)(e);function e(){var n;Object(l.a)(this,e);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(n=t.call.apply(t,[this].concat(c))).handleSubmit=function(){console.log("do login"),console.log(n.login),console.log(n.password),h.login({login:n.login,password:n.password},(function(){n.props.history.push("/main")}))},n}return Object(j.a)(e,[{key:"render",value:function(){var n=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Login"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{placeholder:"Name",type:"text",onChange:function(t){return n.login=t.target.value}})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{placeholder:"Password",type:"password",onChange:function(t){return n.password=t.target.value}})}),Object(b.jsx)("button",{type:"button",onClick:this.handleSubmit,children:"Login"})]})}}]),e}(o.Component),m=function(n){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Main"}),Object(b.jsx)("button",{onClick:function(){h.logout((function(){n.history.push("/")}))},children:"Logout"})]})},v=function(){return Object(b.jsx)(r.a,{children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{path:"/android_asset/www/index.html",exact:!0,component:O}),Object(b.jsx)(s.b,{path:"/",exact:!0,component:O}),Object(b.jsx)(s.b,{path:"/login",exact:!0,component:x}),Object(b.jsx)(p,{path:"/main",component:m}),Object(b.jsx)(s.b,{path:"*",component:function(n){return console.log(n),"404 NOT FOUND"}})]})})},w=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,35)).then((function(t){var e=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;e(n),o(n),c(n),i(n),a(n)}))},y=function(){a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),w()};window.cordova?document.addEventListener("deviceready",(function(){console.log("Running cordova-"+window.cordova.platformId+"@"+window.cordova.version),y()}),!1):y()}},[[34,1,2]]]);
//# sourceMappingURL=main.ea161a06.chunk.js.map