(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"7c645df117fb79ab9a8b":function(t,e,n){"use strict";n.r(e);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),a=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a")),c=n("1037a6e0d5914309f74c"),f=n.n(c),l=n("921c0b8c557fe6ba5da8"),p=n.n(l),u=n("6938d226fd372a75cbf9"),s=n("2aea235afd5c55b8b19b"),b=n.n(s),d=n("e95a63b25fb92ed15721"),y=n("d547f4e73aa1d3df70c6"),m=n("4dd2a92e69dcbe1bab10");function v(t){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),e&&i)for(var c in i)void 0===e[c]&&(e[c]=i[c]);else e||(e=i||{});if(1===a)e.children=r;else if(a>1){for(var f=new Array(a),l=0;l<a;l++)f[l]=arguments[l+3];e.children=f}return{$$typeof:o,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e){return!e||"object"!==v(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,S(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(e,i.a.Component),n=e,(o=[{key:"render",value:function(){var t=f.a.name+" - Set Password",e=f.a.desc,n=this.props,o=n.classes,r=n.history.location.pathname.split("/"),i=r[r.length-1];r=r.slice(1,r.length-1);var c=y.a.find(function(t){return t.key===i});return h("div",{},void 0,h(a.Helmet,{},void 0,h("title",{},void 0,t),h("meta",{name:"description",content:e}),h("meta",{property:"og:title",content:t}),h("meta",{property:"og:description",content:e}),h("meta",{property:"twitter:title",content:t}),h("meta",{property:"twitter:description",content:e})),h(m.g,{title:i,desc:""},void 0,void 0!==c&&c.child.map(function(t,e){return t.link?h(b.a,{color:"primary",component:d.Link,className:o.link,to:t.link},e.toString(),t.name):h(p.a,{className:o.title,variant:"h6"},void 0,t.name)})))}}])&&w(n.prototype,o),r&&w(n,r),e}();e.default=Object(u.withStyles)({link:{display:"block",textTransform:"capitalize"},title:{margin:"20px 16px 5px",textTransform:"uppercase",fontSize:12}})(O)}}]);