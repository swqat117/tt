(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"50b2b11ca44fa27cd2d4":function(e,t,n){"use strict";n.r(t);var o,a=n("8af190b70a6bc55c6f1b"),r=n.n(a),i=n("0d7f0986bcd2f33d8a2a"),c=n("b912ecc4473ae8a2ff0b"),l=n.n(c),f=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),d=n("6938d226fd372a75cbf9"),s=n("2aea235afd5c55b8b19b"),u=n.n(s),b=n("c7fd554010f79f6c0ef8"),m=n.n(b),p=n("921c0b8c557fe6ba5da8"),v=n.n(p),y=n("16c7abd7abc407b9f247"),h=n.n(y),g=n("2a6448bbba59779def58"),w=n.n(g),N=n("e799c547a20a503b338f"),O=n.n(N),S=n("b02fe3f80d4238b52f20"),j=n.n(S),_=n("1037a6e0d5914309f74c"),C=n.n(_),k=n("0d4ee4ad37ded188f527"),P=n.n(k),F=n("387190e83edf0e5eb8f6");function W(e){return(W="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t,n,a){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=new Array(i),f=0;f<i;f++)l[f]=arguments[f+3];t.children=l}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=A(v.a,{variant:"h5",gutterBottom:!0,align:"center"},void 0,"Will come with performance in design"),G=A("aside",{},void 0,A(u.a,{variant:"contained",mini:!0,color:"secondary",type:"submit"},void 0,"Notify me")),H=A(w.a,{icon:"logo-facebook"}),I=A(w.a,{icon:"logo-twitter"}),R=A(w.a,{icon:"logo-github"}),V=function(e){function t(){var e,n,o,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return o=this,a=(e=x(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==W(a)&&"function"!==typeof a?J(o):a,T(J(J(n)),"state",{email:""}),T(J(J(n)),"handleChange",function(e){return function(t){n.setState(T({},e,t.target.value))}}),n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=C.a.name+" - Coming Soon",t=C.a.desc,n=this.props,o=n.classes,a=n.deco,r=this.state.email;return A("div",{className:o.rootFull},void 0,A(i.Helmet,{},void 0,A("title",{},void 0,e),A("meta",{name:"description",content:t}),A("meta",{property:"og:title",content:e}),A("meta",{property:"og:description",content:t}),A("meta",{property:"twitter:title",content:e}),A("meta",{property:"twitter:description",content:t})),A("div",{className:o.container},void 0,A("div",{className:o.fullFormWrap},void 0,A(j.a,{className:l()(o.fullWrap,a&&o.petal,o.centerV)},void 0,A("div",{className:o.brandCenter},void 0,A("div",{className:o.brand},void 0,A("img",{src:P.a,alt:C.a.name}),C.a.name)),A(v.a,{variant:"h2",className:o.titleGradient,gutterBottom:!0},void 0,"Coming Soon"),$,A("section",{className:o.pageFormWrap},void 0,A("div",{className:l()(o.notifyForm,o.centerAdornment)},void 0,A(h.a,{},void 0,A(m.a,{fullWidth:!0,id:"standard-name",label:"Email",className:o.textField,value:r,onChange:this.handleChange("email"),margin:"normal"})),G),A("div",{className:l()(o.lockForm,o.centerAdornment)},void 0,A(O.a,{color:"primary",className:o.button,href:"#"},void 0,H),A(O.a,{color:"primary",className:o.button,href:"#"},void 0,I),A(O.a,{color:"primary",className:o.button,href:"#"},void 0,R)))))))}}])&&E(n.prototype,o),a&&E(n,a),t}(),q=Object(f.connect)(function(e){return{force:e,deco:e.getIn(["ui","decoration"])}})(V);t.default=Object(d.withStyles)(F.a)(q)}}]);