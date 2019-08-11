(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){},128:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(49),c=a.n(r),l=(a(64),a(9)),i=a(10),s=a(12),m=a(11),u=a(13),v=a(133),h=a(136),d=a(137),p=a(138),f=a(134),b=a(135),k=a(54);a(65);var E=function(e){return o.a.createElement("button",{className:"save-btn btn-success",onClick:function(){return e.saveBook(e)}},"Save")},g=a(20),y=a.n(g),N=function(){return y.a.get("/api/books")},j=function(e){return y.a.delete("/api/books/"+e)},O=function(e){return y.a.post("/api/books",e)},w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"saveBook",value:function(e){O({title:e.title,authors:e.authors,description:e.description,image:e.image.thumbnail,link:e.link})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"book-list-wrapper"},this.props.query?o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("p",{className:"search-status"},"You Searched For: ",this.props.query)):null,this.props.items.map(function(t,a){var n=t.volumeInfo,r=(n.title,n.imageLinks),c=n.infoLink,l=n.description,i=n.authors,s=t.volumeInfo.title;return o.a.createElement("div",{key:a,className:"col-sm-12 col-md-4 col-lg-12 book-column"},o.a.createElement("div",{className:"book-wrapper"},o.a.createElement(E,{title:t.volumeInfo.title,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks,link:t.volumeInfo.infoLink,saveBook:e.saveBook}),o.a.createElement("a",{className:"book",href:c,target:"_blank"},o.a.createElement("div",{className:"book-title white-text"},o.a.createElement("h3",null,s))),o.a.createElement("p",{className:"authors"},o.a.createElement("strong",null,"Author: "),i),o.a.createElement("div",{className:"book-inner-flex"},o.a.createElement("a",{className:"book",href:c,target:"_blank"},o.a.createElement("div",{className:"book-image-wrapper"},o.a.createElement("img",{src:void 0!==r?r.thumbnail:"",alt:"Book",className:"book-image"}))),o.a.createElement("div",{className:"description"},o.a.createElement("div",null,o.a.createElement("strong",null,"Description:")),l))))}))}}]),t}(n.Component);a(85);var S=function(){return o.a.createElement("div",{className:"title"},o.a.createElement("img",{className:"title-position",src:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Books_Flat_Icon_Vector.svg"}),o.a.createElement("h1",{className:"title-text title-position"},"Google Books Search"))},I=(a(86),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={query:"",items:[],lastQuery:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"search",value:function(){var e=this;fetch("".concat("https://www.googleapis.com/books/v1/volumes?q=").concat(this.state.query),{method:"GET"}).then(function(e){return e.json()}).then(function(t){var a=t.items;e.setState({items:a}),e.setState({lastQuery:e.state.query}),console.log(t)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"global"},o.a.createElement(S,null),o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement(b.a,{type:"text",placeholder:"Search for a book",onChange:function(t){return e.setState({query:t.target.value})},onKeyPress:function(t){"Enter"==t.key&&e.search()}}),o.a.createElement(f.a.Addon,{onClick:function(){return e.search()}},o.a.createElement(k.a,{glyph:"search"})))),o.a.createElement(w,{items:this.state.items,query:this.state.lastQuery}))}}]),t}(n.Component)),_=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(I,null)}}]),t}(n.Component);a(122);var B=function(e){return o.a.createElement("button",{className:"unsave-btn btn-danger",onClick:function(){return e.deleteSaved(e)}},"Unsave")},C=(a(123),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={items:[],promiseIsResolved:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"deleteSaved",value:function(e){j(e.id).then(this.setState({items:this.state.items.filter(function(t){return t._id!==e.id})}))}},{key:"componentDidMount",value:function(){var e=this;N().then(function(t){e.setState({items:t.data})}).then(this.setState({promiseIsResolved:!0}))}},{key:"render",value:function(){var e=this;return this.state.promiseIsResolved?o.a.createElement("div",{className:"book-list-wrapper"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("p",{className:"search-status"},"Saved Books")),this.state.items.map(function(t,a){var n=t.authors,r=(t.title,t.image),c=t.link,l=t.description,i=(t._id,t.title);return o.a.createElement("div",{key:a,className:"col-sm-12 col-md-4 col-lg-12 book-column"},o.a.createElement("div",{className:"book-wrapper"},o.a.createElement(B,{id:t._id,deleteSaved:e.deleteSaved.bind(e)}),o.a.createElement("a",{className:"book",href:c,target:"_blank"},o.a.createElement("div",{className:"book-title white-text"},o.a.createElement("h3",null,i))),o.a.createElement("p",null,o.a.createElement("strong",null,"Author: "),n),o.a.createElement("div",{className:"book-inner-flex"},o.a.createElement("a",{className:"book",href:c,target:"_blank"},o.a.createElement("div",{className:"book-image-wrapper"},o.a.createElement("img",{src:void 0!==r[0]?r[0].thumbnail:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Books_Flat_Icon_Vector.svg",alt:"Book Image",className:"book-image"}))),o.a.createElement("div",{className:"description"},o.a.createElement("div",null,o.a.createElement("strong",null,"Description:")),l))))})):null}}]),t}(n.Component)),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={items:[],promiseIsResolved:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"loadSaved",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"global"},o.a.createElement(S,null),o.a.createElement(C,{items:this.state.items}))}}]),t}(n.Component),q=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(x,null)}}]),t}(n.Component),A=a(132);var L=function(){return o.a.createElement("ul",{className:"nav nav-tabs"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(A.a,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(A.a,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Saved")))},R=(a(128),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(v.a,null,o.a.createElement("div",null,o.a.createElement(L,null),o.a.createElement(h.a,null,o.a.createElement(d.a,{exact:!0,path:"/",component:_}),o.a.createElement(d.a,{exact:!0,path:"/search",component:_}),o.a.createElement(d.a,{exact:!0,path:"/saved",component:q}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,a){e.exports=a(130)},64:function(e,t,a){},65:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.2921e5bc.chunk.js.map