(this["webpackJsonptel-directory-app"]=this["webpackJsonptel-directory-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=(a(15),a(1)),s=a(2),l=a(4),m=a(3),u=a(5),b=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={filterText:""},a.onChageFilterText=function(e){a.setState({filterText:e.target.value})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contacts.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.state.filterText.toLowerCase())}));return r.a.createElement("div",{className:"list"},r.a.createElement("br",null),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"filter"},"Filter by Name ")),r.a.createElement("input",{name:"filter",id:"filter",value:this.state.filterText,onChange:this.onChageFilterText,className:"form-control","aria-describedby":"filter"})),r.a.createElement("br",null),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Number List"),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.number},r.a.createElement("span",{className:"name"},e.name),r.a.createElement("span",{className:"float-right"},e.number))}))))))}}]),t}(n.Component)),p=a(7),d=a(6);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var h=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={name:"",number:""},e.onChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.addContact(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.state)),e.setState({name:"",number:""})},e.onChange=e.onChange.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},"ADD"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-group mb-3 "},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"name"},"Name ")),r.a.createElement("input",{className:"form-control",name:"name",id:"name","aria-describedby":"name",value:this.state.name,onChange:this.onChange})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"number"},"Number ")),r.a.createElement("input",{className:"form-control",name:"number",id:"number","aria-describedby":"number",value:this.state.number,onChange:this.onChange})),r.a.createElement("button",{className:"btn btn-dark float-right"},"ADD"))))}}]),t}(n.Component),v=function(e){return r.a.createElement("div",null,r.a.createElement(b,{contacts:e.contacts}),r.a.createElement("br",null),r.a.createElement(h,{addContact:e.addContact}))},g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{name:"Denemea",number:"456789909876"},{name:"Denemeb",number:"2345"},{name:"Denemec",number:"34543356"}]},a.addContact=function(e){var t=a.state.contacts;t.push(e),a.setState({contacts:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,{addContact:this.addContact,contacts:this.state.contacts}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.f8f17b55.chunk.js.map