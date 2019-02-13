(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(66)},36:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(36),a(3)),s=a(4),i=a(6),m=a(5),u=a(7),p=a(68),h=a(70),d=a(69),b=a(8),f=a.n(b),v=a(12),E=a(29),y=a(17),C=a(13),O=a.n(C),j=r.a.createContext(),g=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[t.payload].concat(Object(E.a)(e.contacts))});case"EDIT_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return g(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),k=j.Consumer,w=a(67),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDeleteClick=function(){var e=Object(v.a)(f.a.mark(function e(t,a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("https://jsonplaceholder.typicode.com/users/"+t);case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.email,c=t.phone,o=t.id,l=this.state.showContactInfo;return r.a.createElement(k,null,function(t){var s=t.dispatch;return r.a.createElement("div",null,r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("div",{className:"card-title"},a," ",r.a.createElement("ion-icon",{name:"arrow-dropdown",onClick:function(t){e.setState({showContactInfo:!e.state.showContactInfo})},style:{cursor:"pointer"}}),r.a.createElement("ion-icon",{name:"close",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,o,s)}),r.a.createElement(w.a,{to:"/contacts/edit/".concat(o)},r.a.createElement("ion-icon",{name:"create",style:{cursor:"pointer",float:"right",color:"grey"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Phone: ",c),r.a.createElement("li",{className:"list-group-item"},"Email: ",n)):null))})}}]),t}(n.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),e.contacts.map(function(e){return r.a.createElement(S,{key:e.id,name:e.name,phone:e.phone,email:e.email,id:e.id})}))})}}]),t}(n.Component),A=a(14),T=a(27),D=a.n(T),P=function(e){var t=e.label,a=e.name,n=e.type,c=e.onChange,o=e.value,l=e.placeholder,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:n,className:D()("form-control form-control-lg",{"is-invalid":s}),name:a,placeholder:l,value:o,error:s,onChange:c}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};P.defaultProps={type:"text"};var I=P,F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onFormSubmit=function(){var e=Object(v.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=10;break}return e.abrupt("return",a.setState({errors:{phone:"Phone Number is required"}}));case 10:return s={name:c,email:o,phone:l},e.next=13,O.a.post("https://jsonplaceholder.typicode.com/users",s);case 13:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 17:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onStateChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onFormSubmit.bind(e,l)},r.a.createElement(I,{label:"Name",placeholder:"Name",value:a,name:"name",error:o.name,onChange:e.onStateChange}),r.a.createElement(I,{label:"Email",type:"email",placeholder:"Email",value:n,name:"email",error:o.email,onChange:e.onStateChange}),r.a.createElement(I,{label:"Phone",placeholder:"Phone Number",value:c,name:"phone",error:o.phone,onChange:e.onStateChange}),r.a.createElement("button",{className:"btn btn-light btn-block",type:"submit"},"Add Contact"))))})}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onFormSubmit=function(){var e=Object(v.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=10;break}return e.abrupt("return",a.setState({errors:{phone:"Phone Number is required"}}));case 10:return s=a.props.match.params.id,i={name:c,email:o,phone:l},e.next=14,O.a.put("https://jsonplaceholder.typicode.com/users/"+s,i);case 14:m=e.sent,t({type:"EDIT_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onStateChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,O.a.get("https://jsonplaceholder.typicode.com/users/"+t);case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onFormSubmit.bind(e,l)},r.a.createElement(I,{label:"Name",placeholder:"Name",value:a,name:"name",error:o.name,onChange:e.onStateChange}),r.a.createElement(I,{label:"Email",type:"email",placeholder:"Email",value:n,name:"email",error:o.email,onChange:e.onStateChange}),r.a.createElement(I,{label:"Phone",placeholder:"Phone Number",value:c,name:"phone",error:o.phone,onChange:e.onStateChange}),r.a.createElement("button",{className:"btn btn-light btn-block",type:"submit"},"Update Contact"))))})}}]),t}(n.Component);function q(e){var t=e.title;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t)),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/",className:"nav-link"},r.a.createElement("ion-icon",{name:"home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/contacts/add",className:"nav-link"},r.a.createElement("ion-icon",{name:"add"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/about",className:"nav-link"},r.a.createElement("ion-icon",{name:"book"}),"About"))))}q.defaultProps={title:"Contact App"};var L=q;function M(){return r.a.createElement("div",null,r.a.createElement("h1",{class:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"A simple CRUD app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}var U=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{class:"display-4"},"Page Not Found"),r.a.createElement("p",{className:"lead"},"Here's a link to the homepage instead"," ",r.a.createElement(w.a,{exact:!0,to:"/",path:"/",component:"Contacts"},"Home")))}}]),t}(n.Component),B=(a(61),a(63),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(p.a,{basename:"process.env.PUBLIC_URL"},r.a.createElement("div",null,r.a.createElement(L,{title:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:x}),r.a.createElement(d.a,{exact:!0,path:"/contacts/add",component:F}),r.a.createElement(d.a,{exact:!0,path:"/about",component:M}),r.a.createElement(d.a,{exact:!0,path:"/contacts/edit/:id",component:_}),r.a.createElement(d.a,{component:U}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.edabe945.chunk.js.map