(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),l=n.n(r),i=(n(23),n(12)),c=n(6),u=n(7),s=n(10),m=n(8),d=n(11),h=n(5),p=n(35),f=n(34),g=(n(25),n(27),function(e){var t=e.list,n=e.toggleDone,a=e.removeItem;return o.a.createElement("div",{className:"item-line"},o.a.createElement("input",{className:"alignCenter checkBox",type:"checkbox",onChange:n.bind(void 0,t.id)}),o.a.createElement("p",{className:"alignCenter",style:{textDecoration:t.complete?"line-through":"none"}},t.title),o.a.createElement("button",{onClick:a.bind(void 0,t.id),className:"delBtn"},"Delete"))}),b=function(e){var t=e.list,n=e.removeItem,a=e.toggleDone;return t.filter(function(e,t){return t<10}).map(function(e){return o.a.createElement(g,{removeItem:n,toggleDone:a,key:e.id,list:e})})},v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.addToList,n=e.onInputChange;return o.a.createElement("form",{style:{display:"flex"},onSubmit:t},o.a.createElement("input",{style:{flex:"10"},onChange:n,type:"text",placeholder:"Enter New Item",value:this.props.todoName}),o.a.createElement("button",{style:{flex:"1",height:"3rem"}},"Enter"))}}]),t}(a.Component),E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is an About page for my todo app. Whatchu think huhhhh??"))},y=n(33);var j={background:"#333",color:"#fff",textAlign:"center",padding:"1rem"},O={color:"#fff",textDecoration:"none"},I=function(){return o.a.createElement("header",{style:j},o.a.createElement("h1",null,"Todos"),o.a.createElement(y.a,{style:O,to:"/"},"Home")," ","|"," ",o.a.createElement(y.a,{style:O,to:"/About"},"About"))},k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).toggleDone=function(t){e.setState({list:e.state.list.map(function(e){return e.id===t&&(e.complete=!e.complete),e})})},e.removeItem=function(t){e.setState({list:Object(i.a)(e.state.list.filter(function(e){return e.id!==t}))})},e.addToList=function(t){t.preventDefault();var n={id:Math.random(),title:e.state.todoName,complete:!1};e.setState({todoName:"",list:[].concat(Object(i.a)(e.state.list),[n])})},e.onInputChange=function(t){t.preventDefault(),e.setState({todoName:t.target.value})},e.state={todoName:"",list:[1]},e.addToList=e.addToList.bind(Object(h.a)(Object(h.a)(e))),e.onInputChange=e.onInputChange.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos").then(function(e){return e.json()}).then(function(t){return e.setState({list:t})})}},{key:"render",value:function(){var e=this;return 1===this.state.list.length?o.a.createElement("h1",null,"Loading Todos..."):o.a.createElement(p.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(I,null),o.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{onInputChange:e.onInputChange,todoName:e.state.todoName,addToList:e.addToList}),o.a.createElement(b,{toggleDone:e.toggleDone,removeItem:e.removeItem,list:e.state.list}))}}),o.a.createElement(f.a,{path:"/about",component:E})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.8fcd9a14.chunk.js.map