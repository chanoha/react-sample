(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/h46":function(t,n,e){e("cHUd")("Map")},"8iia":function(t,n,e){var r=e("QMMT"),o=e("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},EhLH:function(t,n,e){"use strict";e.r(n);var r=e("ln6h"),o=e.n(r),i=e("q1tI"),s=e.n(i),u=e("H4cH"),a=e("vcXL"),c=e.n(a),f=s.a.createElement,p=function(t){return f(u.Layout,null,f("h1",null,t.post.title),f("p",null,t.post.body))};p.getInitialProps=function(t){var n,e,r;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n=t.query.id,i.next=3,o.a.awrap(c()("https://jsonplaceholder.typicode.com/posts/".concat(n)));case 3:return e=i.sent,i.next=6,o.a.awrap(e.json());case 6:return r=i.sent,console.log("Fetched post: ".concat(r.title)),i.abrupt("return",{post:r});case 9:case"end":return i.stop()}}))},n.default=p},H4cH:function(t,n,e){"use strict";e.r(n),e.d(n,"Header",(function(){return c})),e.d(n,"Layout",(function(){return p})),e.d(n,"getRenderedBy",(function(){return l})),e.d(n,"PostLink",(function(){return h}));var r=e("q1tI"),o=e.n(r),i=e("YFqc"),s=e.n(i),u=o.a.createElement,a={marginRight:15},c=function(){return u("div",null,u(s.a,{href:"/"},u("a",{style:a},"Home")),u(s.a,{href:"/about"},u("a",{style:a},"About")))},f={margin:20,padding:20,border:"1px solid #DDD"},p=function(t){return u("div",{style:f},u(c,null),t.children)};function l(){return window.document?"client":"server"}var h=function(t){return u(s.a,{as:"/p/".concat(t.id),href:"/post?title=".concat(t.title)},u("a",{style:a},t.title))};n.default=p},LX0d:function(t,n,e){t.exports=e("UDep")},MDTK:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){return e("EhLH")}])},"RRc/":function(t,n,e){var r=e("oioR");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},UDep:function(t,n,e){e("wgeU"),e("FlQf"),e("bBy9"),e("g33z"),e("XLbu"),e("/h46"),e("dVTT"),t.exports=e("WEpk").Map},Wu5q:function(t,n,e){"use strict";var r=e("2faE").f,o=e("oVml"),i=e("XJU/"),s=e("2GTP"),u=e("EXMj"),a=e("oioR"),c=e("MPFp"),f=e("UO39"),p=e("TJWN"),l=e("jmDH"),h=e("6/1s").fastKey,v=e("n3ko"),d=l?"_s":"size",_=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,c){var f=t((function(t,r){u(t,f,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&a(r,e,t[c],t)}));return i(f.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var e=v(this,n),r=_(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[d]--}return!!r},forEach:function(t){v(this,n);for(var e,r=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!_(v(this,n),t)}}),l&&r(f.prototype,"size",{get:function(){return v(this,n)[d]}}),f},def:function(t,n,e){var r,o,i=_(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,n,e){c(t,n,(function(t,e){this._t=v(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))}),e?"entries":"values",!e,!0),p(n)}}},XLbu:function(t,n,e){var r=e("Y7ZC");r(r.P+r.R,"Map",{toJSON:e("8iia")("Map")})},YFqc:function(t,n,e){t.exports=e("cTJO")},cTJO:function(t,n,e){"use strict";var r=e("/HRN"),o=e("WaGi"),i=e("ZDA2"),s=e("/+P4"),u=e("N9n2"),a=e("LX0d"),c=e("KI45"),f=e("5Uuq");n.__esModule=!0,n.default=void 0;var p,l=e("CxY0"),h=f(e("q1tI")),v=c(e("nOHt")),d=e("g/15");function _(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var y=new a,g=window.IntersectionObserver,w={};function k(){return p||(g?p=new g((function(t){t.forEach((function(t){if(y.has(t.target)){var n=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(t.target),y.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0)}var m=function(t){function n(t){var e;return r(this,n),(e=i(this,s(n).call(this,t))).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var n=null,e=null,r=null;return function(o,i){if(r&&o===n&&i===e)return r;var s=t(o,i);return n=o,e=i,r=s,s}}((function(t,n){return{href:_(t),as:n?_(n):n}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),s=i.href,u=i.as;if(function(t){var n=(0,l.parse)(t,!1,!0),e=(0,l.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===e.protocol&&n.host===e.host}(s)){var a=window.location.pathname;s=(0,l.resolve)(a,s),u=u?(0,l.resolve)(a,u):s,t.preventDefault();var c=e.props.scroll;null==c&&(c=u.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](s,u,{shallow:e.props.shallow}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return u(n,t),o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href;return(0,l.resolve)(t,n)}},{key:"handleRef",value:function(t){var n=this,e=w[this.getHref()];this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),e||(this.cleanUpListeners=function(t,n){var e=k();return e?(e.observe(t),y.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}y.delete(t)}):function(){}}(t,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),w[t]=!0}}},{key:"render",value:function(){var t=this,n=this.props.children,e=this.formatUrls(this.props.href,this.props.as),r=e.href,o=e.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var i=h.Children.only(n),s={ref:function(n){t.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),t.prefetch()},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||t.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),h.default.cloneElement(i,s)}}]),n}(h.Component);n.default=m},dVTT:function(t,n,e){e("aPfg")("Map")},g33z:function(t,n,e){"use strict";var r=e("Wu5q"),o=e("n3ko");t.exports=e("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)},vcXL:function(t,n,e){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports}},[["MDTK",1,2,0]]]);