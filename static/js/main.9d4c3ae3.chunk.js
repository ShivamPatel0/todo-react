(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(0),s=n.n(c),a=n(27),j=n.n(a),r=(n(38),n(39),n(12)),d=n(31),l=n(29),b=n(9),o=n(8),h=n(30),x=n(22),O=n(14),u=n(28),m=n(23),f=n(17),p=n.n(f);O.b.add(u.a,m.b,m.a);var v=function(e){var t=e.data.Lists.map((function(t,n){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t},p()()),Object(i.jsxs)("td",{children:[Object(i.jsx)(x.a,{title:"Click to delete",icon:"trash",onClick:function(){return e.delete(n)}})," ",Object(i.jsx)(x.a,{title:"Click to edit",icon:"edit",onClick:function(){return e.edit(n)}})]},p()())]},p()())}));return Object(i.jsx)(b.a,{children:Object(i.jsx)(h.a.Row,{className:"justify-content-md-center",children:Object(i.jsx)(o.a,{xs:!0,lg:"5",children:Object(i.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Task"}),Object(i.jsx)("th",{children:"Action"})]})}),Object(i.jsx)("tbody",{children:t})]})})})})},L=n(32),g=(n(26),n(24)),k=n(16),y=function(e){return Object(i.jsx)(b.a,{children:Object(i.jsx)(h.a.Row,{className:"justify-content-md-center",children:Object(i.jsx)(o.a,{xs:!0,lg:"5",children:Object(i.jsxs)(g.a,{className:"mb-3",children:[Object(i.jsx)(k.a,{placeholder:"Task","aria-label":"Task","aria-describedby":"basic-addon2",onChange:e.change,value:e.value.name,onKeyPress:function(t){"Enter"===t.key&&e.submit()}}),Object(i.jsx)(g.a.Append,{children:Object(i.jsx)(L.a,{variant:"primary",onClick:e.submit,children:"Submit"})})]})})})})},E=n(18),C=function(){var e=Object(c.useState)({name:"",Lists:[],isEdit:!1,index:0}),t=Object(d.a)(e,2),n=t[0],s=t[1];return Object(i.jsxs)(b.a,{children:[Object(i.jsx)(E.a,{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)("h3",{children:"TODO App"}),Object(i.jsx)("hr",{})]})}),Object(i.jsx)(E.a,{children:Object(i.jsx)(o.a,{children:Object(i.jsx)(y,{change:function(e){s({name:e.target.value,Lists:Object(r.a)(n.Lists),isEdit:n.isEdit,index:n.index})},submit:function(){if(0===n.name.length||n.isEdit){var e=n.Lists;e[n.index]=n.name,s({name:"",Lists:Object(r.a)(e),isEdit:!1,index:0})}else s({name:"",Lists:[].concat(Object(r.a)(n.Lists),[n.name]),isEdit:!1,index:0})},value:n})})}),Object(i.jsx)(E.a,{children:Object(i.jsx)(o.a,{children:Object(i.jsx)(v,{data:n,delete:function(e){if(window.confirm("Do you really want to delete this?")){var t=n.Lists;t.splice(e,1),s({name:n.name,Lists:Object(r.a)(t),isEdit:!1,index:0})}},edit:function(e){var t=n.Lists[e];s({name:t,Lists:Object(r.a)(n.Lists),isEdit:!0,index:e})}})})})]})};var w=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(C,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};j.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),T()}},[[50,1,2]]]);
//# sourceMappingURL=main.9d4c3ae3.chunk.js.map