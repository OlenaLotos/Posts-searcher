"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[89],{5476:function(r,t,n){var e=n(6871),a=n(501),u=n(184),c=function(r){var t=r.items,n=(0,e.TH)(),c=t.map((function(r){var t=r.id,e=r.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:n},to:"/posts/".concat(t),children:e})},t)}));return(0,u.jsx)("ol",{children:c})};t.Z=c,c.defaultProps={items:[]}},3089:function(r,t,n){n.r(t),n.d(t,{default:function(){return m}});var e=n(1413),a=n(5861),u=n(885),c=n(7757),s=n.n(c),i=n(2791),o=n(501),f=n(4942),p=n(184),l=function(r){var t=r.onSubmit,n=(0,i.useState)({search:""}),a=(0,u.Z)(n,2),c=a[0],s=a[1];return(0,p.jsxs)("form",{onSubmit:function(r){r.preventDefault(),t((0,e.Z)({},c)),s({search:""})},children:[(0,p.jsx)("input",{name:"search",value:c.search,onChange:function(r){var t=r.target,n=t.name,a=t.value;s((0,e.Z)((0,e.Z)({},c),{},(0,f.Z)({},n,a)))},placeholder:"Search",required:!0}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})},h=n(5476),v=n(387),m=function(){var r=(0,i.useState)({items:[],loading:!1,error:null}),t=(0,u.Z)(r,2),n=t[0],c=t[1],f=(0,o.lr)(),m=(0,u.Z)(f,2),d=m[0],Z=m[1],x=d.get("search");(0,i.useEffect)((function(){var r=function(){var r=(0,a.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c((function(r){return(0,e.Z)((0,e.Z)({},r),{},{loading:!0})})),r.next=4,(0,v.cl)(x);case 4:t=r.sent,c((function(r){return(0,e.Z)((0,e.Z)({},r),{},{items:t})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),c((function(t){return(0,e.Z)((0,e.Z)({},t),{},{error:r.t0})}));case 11:return r.prev=11,c((function(r){return(0,e.Z)((0,e.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();x&&r()}),[x]);var w=n.items;return(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h2",{children:"Posts Search Page"}),(0,p.jsx)(l,{onSubmit:function(r){var t=r.search;Z({search:t})}}),w.length>0&&(0,p.jsx)(h.Z,{items:w})]})}},387:function(r,t,n){n.d(t,{JF:function(){return o},Jq:function(){return i},cl:function(){return f},w8:function(){return p}});var e=n(5861),a=n(7757),u=n.n(a),c=n(4569),s=n.n(c)().create({baseURL:"https://jsonplaceholder.typicode.com/posts",params:{_limit:12}}),i=function(){var r=(0,e.Z)(u().mark((function r(){var t,n,e,a=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,r.next=3,s.get("/",{params:{_page:t}});case 3:return n=r.sent,e=n.data,r.abrupt("return",e);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/".concat(t));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/",{params:{q:t}});case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/".concat(t,"/comments"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=89.08611bd8.chunk.js.map