(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("3nLz");var n=r("5NKs");t.__esModule=!0,t.default=void 0;var a,i=n(r("v06X")),o=n(r("XEEL")),s=n(r("uDP2")),l=n(r("j8BX")),c=n(r("q1tI")),u=n(r("17x9")),d=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},p=Object.create({}),g=function(e){var t=d(e),r=f(t);return p[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),c.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function w(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function E(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+c+o+s+r+n+t+i+a+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,r=e.imageVariants,n=e.generateSources,a=e.spreadProps,i=c.default.createElement(R,(0,l.default)({src:t},a));return r.length>1?c.default.createElement("picture",null,n(r),i):i},R=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:n,src:a},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var z=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=m&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!h&&b&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||m&&(h||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=f(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,L=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:z?1:0,transition:P?"opacity "+b+"ms":"none"},s),x="boolean"==typeof m?"lightgray":m,C={transitionDelay:b+"ms"},D=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&C,{},s,{},f),k={title:t,alt:this.state.isVisible?"":r,style:D,className:p,itemProp:S};if(g){var q=g,G=q[0];return c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),x&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&C)}),G.base64&&c.default.createElement(I,{src:G.base64,spreadProps:k,imageVariants:q,generateSources:O}),G.tracedSVG&&c.default.createElement(I,{src:G.tracedSVG,spreadProps:k,imageVariants:q,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(q),c.default.createElement(R,{alt:r,title:t,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:r,title:t,loading:E},G,{imageVariants:q}))}}))}if(h){var N=h,T=N[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete M.display,c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},x&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},P&&C)}),T.base64&&c.default.createElement(I,{src:T.base64,spreadProps:k,imageVariants:N,generateSources:O}),T.tracedSVG&&c.default.createElement(I,{src:T.tracedSVG,spreadProps:k,imageVariants:N,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(N),c.default.createElement(R,{alt:r,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:r,title:t,loading:E},T,{imageVariants:N}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),V=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});z.propTypes={resolutions:P,sizes:V,fixed:u.default.oneOfType([P,u.default.arrayOf(P)]),fluid:u.default.oneOfType([V,u.default.arrayOf(V)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var x=z;t.default=x},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},X8hv:function(e,t,r){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,r){return(a=n()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&i(a,r.prototype),a}).apply(null,arguments)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("xtjI"),r("Dq+y"),r("Ggvi"),r("YbXK"),r("cFtU"),r("m210"),r("4DPX"),r("rzGZ"),r("q8oJ"),r("8npG"),r("nWfQ"),r("nWfQ"),r("YbXK"),r("cFtU"),r("q8oJ"),r("m210"),r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var u=r("q1tI"),d=r("E/Ix"),f=d.useMDXComponents,p=d.mdx,g=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,n=e.children,i=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["scope","components","children"]),s=f(r),c=g(t),d=u.useMemo((function(){if(!n)return null;var e=l({React:u,mdx:p},c),t=Object.keys(e),r=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(r)))}),[n,t]);return u.createElement(d,l({components:s},i))}},nWfQ:function(e,t,r){var n=r("P8UN"),a=r("nsRs"),i=r("nONw"),o=r("1a8y"),s=r("BjK0"),l=r("96qb"),c=r("16Xr"),u=(r("emib").Reflect||{}).construct,d=l((function(){function e(){}return!(u((function(){}),[],e)instanceof e)})),f=!l((function(){u((function(){}))}));n(n.S+n.F*(d||f),"Reflect",{construct:function(e,t){i(e),o(t);var r=arguments.length<3?e:i(arguments[2]);if(f&&!d)return u(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(c.apply(e,n))}var l=r.prototype,p=a(s(l)?l:Object.prototype),g=Function.apply.call(e,p,t);return s(g)?g:p}})}}]);
//# sourceMappingURL=e4b664e9766f10fb29fe7de2ab0729241a6afe19-19e3fae304172cf779ae.js.map