(this.webpackJsonptimpmobile=this.webpackJsonptimpmobile||[]).push([[0],{173:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(28),i=a.n(c),r=a(17),o=a.n(r),l=a(11),m=a(12),j=a(3),d=a(9),u=a.n(d),b=a(14),h=a(18),p=a(19),x=new(function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,[{key:"login",value:function(){var e=Object(b.a)(u.a.mark((function e(t,a){var s,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new FormData).append("login",t),s.append("password",a),e.next=5,o()({method:"post",url:"https://mytimp.com/api/Login/check_login.php",data:s});case 5:if(n=e.sent,window.global.debug&&console.log("Login try: ",n.data),0!==n.data.error){e.next=11;break}return c=n.data.result,this.setUser({token:c.token,ID:c.ID,login:c.login,email:c.mail,role:c.role}),e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,a){}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}},{key:"setUser",value:function(e){window.global.debug&&console.log("Save user to localStorage"),localStorage.setItem("user",JSON.stringify(e))}}]),e}()),O=Object(s.createContext)(!!x.getCurrentUser()),g=a(0),f=function(){var e=n.a.useContext(O),t=(e.user,e.setUser),a=n.a.useState(""),s=Object(l.a)(a,2),c=s[0],i=s[1],r=n.a.useState(""),o=Object(l.a)(r,2),j=o[0],d=o[1],h=function(){var e=Object(b.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.global.debug&&(console.log("do Login"),console.log(c),console.log(j)),e.next=3,x.login(c,j);case 3:a=e.sent,window.global.debug&&console.log("Login result: ",a),a&&t(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"m-popup m-login-bg",children:Object(g.jsx)("div",{className:"m-popup__card",children:Object(g.jsxs)("div",{className:"m-login-form",children:[Object(g.jsxs)("div",{className:"m-login-form__section",children:[Object(g.jsx)("p",{className:"m-login-form__title",children:"\u0412\u0445\u043e\u0434"}),Object(g.jsx)("div",{className:"a-field",children:Object(g.jsxs)("div",{className:"a-field__inner",children:[Object(g.jsx)("input",{className:"a-field__input",name:"email",type:"email",autoComplete:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",onChange:function(e){return i(e.target.value)}}),Object(g.jsx)("i",{className:"a-field__icon"}),Object(g.jsx)("span",{className:"a-field__info"})]})}),Object(g.jsx)("div",{className:"a-field",children:Object(g.jsxs)("div",{className:"a-field__inner",children:[Object(g.jsx)("input",{className:"a-field__input",name:"password",type:"password",autoComplete:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return d(e.target.value)}}),Object(g.jsx)("i",{className:"a-field__icon"}),Object(g.jsx)("i",{className:"a-field__eye-icon"}),Object(g.jsx)("span",{className:"a-field__info"})]})}),Object(g.jsx)("button",{onClick:function(){return h()},className:"m-login-form__btn",type:"button",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(g.jsxs)("div",{className:"m-login-form__social --hide",children:[Object(g.jsx)("p",{className:"m-login-form__label",children:"\u0412\u0445\u043e\u0434 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e:"}),Object(g.jsx)("button",{className:"a-social-icon-link --facebook"}),Object(g.jsx)("button",{className:"a-social-icon-link --vk"}),Object(g.jsx)("button",{className:"a-social-icon-link --telegram"}),Object(g.jsx)("button",{className:"a-social-icon-link --viber"}),Object(g.jsx)("button",{className:"a-social-icon-link --whatsapp"})]}),Object(g.jsxs)("div",{className:"m-login-form__bottom",children:[Object(g.jsx)(m.b,{to:"/forgot",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"}),Object(g.jsx)(m.b,{className:"a-link-btn",to:"/register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})})})},v=function(){var e=n.a.useContext(O),t=(e.user,e.setUser);return n.a.useEffect((function(){x.logout(),t(!1)}),[]),Object(g.jsx)("div",{})},N=a(16),_=a(61),w=a(60),k=a(57),y=a.n(k),C=a(23),S=a.n(C),U=a(58),E=a.n(U),I=a(59),L=function(e){if(!e)return Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},D=function(e){if(!Object(I.isEmail)(e))return Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},P=function(e){if(e.length<3||e.length>20)return Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},R=function(e){if(e.length<6||e.length>40)return Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},A=function(e){Object(_.a)(a,e);var t=Object(w.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).handleRegister=s.handleRegister.bind(Object(N.a)(s)),s.onChangeUsername=s.onChangeUsername.bind(Object(N.a)(s)),s.onChangeEmail=s.onChangeEmail.bind(Object(N.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(N.a)(s)),s.state={username:"",email:"",password:"",successful:!1,message:""},s}return Object(p.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&x.register(this.state.username,this.state.email,this.state.password).then((function(e){t.setState({message:e.data.message,successful:!0})}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({successful:!1,message:a})}))}},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsxs)("div",{className:"card card-container",children:[Object(g.jsx)("img",{src:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(g.jsxs)(y.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t},children:[!this.state.successful&&Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"username",children:"Username"}),Object(g.jsx)(S.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[L,P]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email"}),Object(g.jsx)(S.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[L,D]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password"}),Object(g.jsx)(S.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[L,R]})]}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),this.state.message&&Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert",children:this.state.message})}),Object(g.jsx)(E.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),a}(s.Component),F=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"404 \u0442\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"})})},T=function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,null,[{key:"getAll",value:function(){var e=Object(b.a)(u.a.mark((function e(t){var a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("user_id",t),e.next=4,o()({method:"post",url:"https://mytimp.com/api/ThemeLoad/",data:a});case 4:return s=e.sent,window.global.debug&&console.log("Projects: ",s),e.abrupt("return",s.data.array);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),B=function(e){return console.log(e),Object(g.jsx)("div",{className:"m-panel-card",children:Object(g.jsxs)("div",{className:"m-panel-card__wrap",children:[Object(g.jsxs)("div",{className:"m-panel-card__card-section",children:[Object(g.jsxs)("div",{className:"a-title-block",children:[Object(g.jsx)("div",{className:"a-title-block__img",children:Object(g.jsx)("img",{src:"../img/no-img.png",alt:"Logo project"})}),Object(g.jsx)("p",{className:"a-title-block__title",children:e.project.title})]}),Object(g.jsx)("span",{className:"a-xs-font",children:"\u0422\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e"}),Object(g.jsxs)("div",{className:"a-participants",children:[Object(g.jsx)("div",{className:"a-participants__author",children:Object(g.jsx)("img",{src:"../img/person.png",alt:""})}),Object(g.jsx)("i",{className:"a-icon --icon-arrow-right-sm"}),Object(g.jsx)("div",{className:"a-participants__assigned",children:Object(g.jsx)("img",{src:"../img/person.png",alt:""})})]}),Object(g.jsxs)("p",{className:"a-expiration",children:[Object(g.jsx)("i",{className:"a-icon --icon-update"}),Object(g.jsx)("span",{className:"a-expiration__date",children:"12.05.22"})]}),Object(g.jsx)("div",{className:"a-notif-counter",children:"12"}),Object(g.jsxs)("div",{className:"m-task-bar",children:[Object(g.jsx)("div",{className:"a-task-item",children:"\u041d\u043e\u0432\u044b\u0435 - 15"}),Object(g.jsx)("div",{className:"a-task-item",children:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435 - 3"}),Object(g.jsx)("div",{className:"a-task-item",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e - 4"})]}),Object(g.jsxs)("div",{className:"a-progress",children:[Object(g.jsx)("div",{className:"a-progress__percentage",style:{width:"50%"}}),Object(g.jsx)("p",{children:"50%"})]})]}),Object(g.jsxs)("div",{className:"m-panel-card__edit-section",children:[Object(g.jsxs)("div",{className:"a-edit-panel-btn",children:[Object(g.jsx)("i",{className:"a-icon --icon-more-horiz"}),Object(g.jsx)("p",{children:"\u0415\u0449\u0451"})]}),Object(g.jsxs)("div",{className:"a-edit-panel-btn",children:[Object(g.jsx)("i",{className:"a-icon --icon-person-add"}),Object(g.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(g.jsxs)("div",{className:"a-edit-panel-btn",children:[Object(g.jsx)("i",{className:"a-icon --icon-trash"}),Object(g.jsx)("p",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})]})})},J=function(){var e=n.a.useState([]),t=Object(l.a)(e,2),a=t[0],s=t[1];return n.a.useEffect((function(){var e=x.getCurrentUser();function t(){return(t=Object(b.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.getAll(e.ID);case 2:a=t.sent,s(a);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(g.jsxs)("div",{className:"o-container__section o-section",children:[Object(g.jsx)("div",{className:"o-section__top",children:Object(g.jsxs)("div",{className:"m-top-panel",children:[Object(g.jsxs)("div",{className:"m-top-title",children:[Object(g.jsx)("p",{className:"a-main-title",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"}),Object(g.jsxs)("div",{className:"m-context-menu",children:[Object(g.jsx)("i",{className:"m-context-menu__icon",title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"}),Object(g.jsx)("div",{className:"m-context-menu__wrap",children:Object(g.jsxs)("ul",{className:"m-context-menu__list",children:[Object(g.jsx)("li",{className:"m-context-menu__item",children:"\u043f\u0443\u043d\u043a\u0442 1"}),Object(g.jsx)("li",{className:"m-context-menu__item",children:"\u043f\u0443\u043d\u043a\u0442 2"}),Object(g.jsx)("li",{className:"m-context-menu__item",children:"\u043f\u0443\u043d\u043a\u0442 3"})]})})]})]}),Object(g.jsx)("div",{className:"a-search-filed",children:Object(g.jsx)("input",{type:"search",className:"a-search-filed__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435, \u043f\u0440\u043e\u0435\u043a\u0442, \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439"})})]})}),Object(g.jsxs)("div",{className:"o-section__content",children:[a.map((function(e){return Object(g.jsx)(B,{project:e},e.ID)})),Object(g.jsxs)("div",{className:"m-add-btn-menu",children:[Object(g.jsx)("i",{className:"m-add-btn-menu__icon"}),Object(g.jsx)("div",{className:"m-add-btn-menu__wrap",children:Object(g.jsxs)("ul",{className:"m-add-btn-menu__list",children:[Object(g.jsx)("li",{className:"m-add-btn-menu__item",children:"\u041f\u0443\u043d\u043a\u0442 1"}),Object(g.jsx)("li",{className:"m-add-btn-menu__item",children:"\u041f\u0443\u043d\u043a\u0442 2"}),Object(g.jsx)("li",{className:"m-add-btn-menu__item",children:"\u041f\u0443\u043d\u043a\u0442 3"})]})})]})]})]})},z=function(){return Object(g.jsx)("div",{children:"\u0417\u0430\u0434\u0430\u0447\u0438"})},M=function(){return Object(g.jsx)("div",{children:"\u0427\u0430\u0442\u044b"})},q=function(){var e=Object(j.g)();return Object(g.jsx)("div",{children:Object(g.jsx)("ul",{children:Object(g.jsx)("li",{children:Object(g.jsx)("button",{onClick:function(){e.push("/logout")},children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})})})})},G=function(){return Object(g.jsx)("div",{})},H=function(){var e=n.a.useState(""),t=Object(l.a)(e,2),a=t[0],s=t[1];return n.a.useEffect((function(){switch(window.location.pathname){case"/projects":s("projects");break;case"/tasks":s("tasks");break;case"/chats":s("chats");break;case"/config":s("config")}}),[]),Object(g.jsx)("div",{className:"o-container__bottom",children:Object(g.jsxs)("div",{className:"m-bottom-menu",children:[Object(g.jsx)(m.b,{onClick:function(){return s("projects")},to:"/projects",children:Object(g.jsxs)("div",{className:"projects"===a?"a-bottom-menu-item --active":"a-bottom-menu-item",children:[Object(g.jsx)("i",{className:"a-bottom-menu-item__icon --icon-dashboard"}),Object(g.jsx)("p",{className:"a-bottom-menu-item__name",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"})]})}),Object(g.jsx)(m.b,{onClick:function(){return s("tasks")},to:"/tasks",children:Object(g.jsxs)("div",{className:"tasks"===a?"a-bottom-menu-item --active":"a-bottom-menu-item",children:[Object(g.jsx)("i",{className:"a-bottom-menu-item__icon --icon-check-circle"}),Object(g.jsx)("p",{className:"a-bottom-menu-item__name",children:"\u0417\u0430\u0434\u0430\u0447\u0438"})]})}),Object(g.jsx)(m.b,{onClick:function(){return s("chats")},to:"/chats",children:Object(g.jsxs)("div",{className:"chats"===a?"a-bottom-menu-item --active":"a-bottom-menu-item",children:[Object(g.jsx)("i",{className:"a-bottom-menu-item__icon --icon-bubble-chart"}),Object(g.jsx)("p",{className:"a-bottom-menu-item__name",children:"\u0427\u0430\u0442\u044b"})]})}),Object(g.jsx)(m.b,{onClick:function(){return s("config")},to:"/config",children:Object(g.jsxs)("div",{className:"config"===a?"a-bottom-menu-item --active":"a-bottom-menu-item",children:[Object(g.jsx)("i",{className:"a-bottom-menu-item__icon --icon-more-horiz"}),Object(g.jsx)("p",{className:"a-bottom-menu-item__name",children:"\u0415\u0449\u0435"})]})})]})})},K=function(e){var t=e.children;return Object(g.jsx)("div",{className:"o-container",children:Object(g.jsx)("div",{className:"o-container__wrap",children:t})})},Q=function(){var e=n.a.useContext(O),t=e.user;e.setUser;window.global.debug&&console.log(t);var a=[{path:"/",component:J,exact:!0},{path:"/logout",component:v,exact:!0},{path:"/error",component:F,exact:!0},{path:"/projects",component:J,exact:!0},{path:"/tasks",component:z,exact:!0},{path:"/chats",component:M,exact:!0},{path:"/config",component:q,exact:!0}],s=[{path:"/login",component:f,exact:!0},{path:"/register",component:A,exact:!0},{path:"/forgot",component:G,exact:!0}];return t?Object(g.jsxs)(K,{children:[Object(g.jsxs)(j.d,{children:[a.map((function(e){return Object(g.jsx)(j.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(g.jsx)(j.a,{to:"/projects"})]}),Object(g.jsx)(H,{})]}):Object(g.jsxs)(j.d,{children:[s.map((function(e){return Object(g.jsx)(j.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(g.jsx)(j.a,{to:"/login"})]})},V=(a(173),function(){var e=n.a.useState(!1),t=Object(l.a)(e,2),a=t[0],s=t[1];return n.a.useEffect((function(){var e=x.getCurrentUser();e&&s(e)}),[]),Object(g.jsx)(O.Provider,{value:{user:a,setUser:s},children:Object(g.jsx)(m.a,{children:Object(g.jsx)(Q,{})})})}),W=function(){window.global={debug:!0,debugArea:{login:!0,register:!0},baseUrl:"62.113.118.96:9988"},o.a.defaults.baseURL="http://"+window.global.baseUrl+"/",window.global.debug&&console.log("App in debug mode!")};window.cordova?document.addEventListener("deviceready",(function(){console.log("Running cordova-"+window.cordova.platformId+"@"+window.cordova.version),W(),i.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(V,{})}),document.getElementById("root"))}),!1):(W(),i.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(V,{})}),document.getElementById("root")))}},[[174,1,2]]]);
//# sourceMappingURL=main.b6d27c27.chunk.js.map