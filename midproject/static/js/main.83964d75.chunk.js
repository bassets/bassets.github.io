(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),s=n.n(o),c=(n(24),n(4)),i=n(5),u=n(7),l=n(6),d=n(1),m=n.n(d),p=n(3),f=n(8),h=n.n(f),y=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://jsonplaceholder.typicode.com/users/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://jsonplaceholder.typicode.com/todos/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b={getAllUsers:y,getAllPosts:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://jsonplaceholder.typicode.com/posts/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllTodos:v,getUserTodos:function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://jsonplaceholder.typicode.com/todos?userId="+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),userCompleted:function(e,t){var n=!1;return e.filter((function(e){return e.userId==t})).map((function(e){n=!!e.completed})),n}},E=(n(43),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).showAbout=function(){var t=e.props.about,n=!e.state.open;e.setState({about:n?t:"",open:n})},e.state={open:!1,about:""},e}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"button",onClick:this.showAbout},"About"),this.state.about)}}]),n}(r.Component)),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).addUser=function(t,n){var r=b.userCompleted(n,t.id)?"green":"";return a.a.createElement("div",{id:r,className:"entry "+String.fromCharCode(97+t.id),key:t.id},a.a.createElement("p",{onClick:e.openDetails(t.id,t.name)},t.id,". ",t.name),a.a.createElement("p",{onClick:e.openDetails(t.id,t.name)},t.email),a.a.createElement("div",{className:"buttons"},a.a.createElement(E,{about:a.a.createElement("div",{className:"about"},t.address.street,", ",t.address.city,a.a.createElement("p",null,t.address.zipcode))}),a.a.createElement("div",{className:"button",onClick:e.renderUser()},"Update"),a.a.createElement("div",{className:"button",onClick:e.deleteUser(String.fromCharCode(97+t.id))},"Delete")))},e.deleteUser=function(e){return function(t){document.querySelector("."+e).style.display="none"}},e.renderUser=function(e){return Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))},e.searchEntries=function(e){var t=e.target.value;document.querySelectorAll(".entry").forEach((function(e){e.children[0].innerHTML.includes(t)||e.children[1].innerHTML.includes(t)?e.style.display="":e.style.display="none"}))},e.openDetails=function(t,n){return function(){document.querySelector(".right").style.width=0,document.querySelector(".right").style.opacity=0,document.querySelectorAll(".entry").forEach((function(e){e.style.background=""})),window.setTimeout((function(){e.setState({name:n}),document.querySelector(".entries").style.width="50%",document.querySelector(".right").style.width="50%",document.querySelector(".right").style.opacity=1,document.querySelector("."+String.fromCharCode(97+t)).style.background="#404045";var r=e.state.todos,o=e.state.posts,s=r.map((function(n){if(n.userId==t)return n.completed?a.a.createElement("div",{className:"entry"},n.id,". ",n.title,": Completed."):a.a.createElement("div",{className:"entry"},n.id,". ",n.title,": Not completed.",a.a.createElement("div",{className:"button",onClick:e.completeTask(n.id)},"Complete"))})),c=o.map((function(e){if(e.userId==t)return a.a.createElement("div",{className:"entry"},e.id,". ",e.title,a.a.createElement("br",null),e.body)}));e.setState({renderedTodos:s,renderedPosts:c})}),200)}},e.completeTask=function(e){return function(){}},e.state={users:"",posts:[],todos:[],rendered:!1,renderedTodos:!1,renderedPosts:!1,name:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t,n,r,a,o=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAllUsers();case 2:return t=e.sent,e.next=5,b.getAllTodos();case 5:return n=e.sent,e.next=8,b.getAllPosts();case 8:r=e.sent,this.setState({users:t.data,posts:r.data,todos:n.data}),a=t.data.map((function(e){return o.addUser(e,n.data)})),document.querySelector(".entries").style.opacity=1,this.setState({rendered:a});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("input",{className:"search",placeholder:"Type something...",onChange:this.searchEntries}),a.a.createElement("div",{className:"entries"},this.state.rendered),a.a.createElement("div",{className:"right"},a.a.createElement("p",{className:"title"},this.state.name),a.a.createElement("div",{className:"add"},"Add"),a.a.createElement("div",{className:"wrapper"},"Tasks",this.state.renderedTodos,"Posts",this.state.renderedPosts)))}}]),n}(r.Component),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.call(this)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(g,null)}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.83964d75.chunk.js.map