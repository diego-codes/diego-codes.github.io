(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"0fx2":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("nKUr"),o=n("vOnD"),i=n("c35u"),a=o.d.ul.withConfig({displayName:"TagsList__List"})(["display:flex;list-style:none;gap:0.7em;"]),u=o.d.li.withConfig({displayName:"TagsList__Tag"})([""," border:1px solid ",";color:",";display:inline-block;padding:0.2em 0.4em;border-radius:0.2em;"],Object(i.e)(i.c.small),(function(e){return e.theme.primary}),(function(e){return e.theme.primary}));function c(e){var t=e.tags;return 0===t.length?null:Object(r.jsx)(a,{children:t.map((function(e){return Object(r.jsx)(u,{children:e},e)}))})}c.defaultProps={tags:[]}},"2qu3":function(e,t,n){"use strict";var r=n("lSNA"),o=n("lwsE"),i=n("W8MJ");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var s,d=(s=n("q1tI"))&&s.__esModule?s:{default:s},f=n("8L3h"),p=n("jwwS");var h=[],m=[],b=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function g(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=y(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function j(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new O(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!b&&"function"===typeof n.webpack){var i=n.webpack();m.push((function(e){var t,n=c(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(a){n.e(a)}finally{n.f()}}))}var a=function(e,t){o();var i=d.default.useContext(p.LoadableContext),a=(0,f.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return a.loading||a.error?d.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?n.render(a.loaded,e):null}),[e,a])};return a.preload=function(){return o()},a.displayName="LoadableComponent",d.default.forwardRef(a)}var O=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return j(y,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}_.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return j(g,e)},_.preloadAll=function(){return new Promise((function(e,t){w(h).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return b=!0,t()};w(m,e).then(n,n)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var x=_;t.default=x},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},JHam:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var r=n("nKUr"),o=n("a3WO");var i=n("BsWD");function a(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n("vOnD"),c=n("q1tI"),l=n("Vvt1"),s=n.n(l),d=n("A5+V"),f=u.d.div.withConfig({displayName:"TitledContent__Container"})(["margin-block-end:1.5rem;"]),p=u.d.h1.withConfig({displayName:"TitledContent__Heading"})(["margin:0;margin-block-end:0.5em;"]);function h(e){var t=e.heading,n=e.id,o=e.hierarchy,i=e.children;return Object(r.jsxs)(f,{children:[Object(r.jsx)(p,{as:"h".concat(o),id:n,children:t}),i]})}h.defaultProps={heading:void 0,id:void 0,hierarchy:1,children:void 0};var m=n("YFqc"),b=n.n(m),y=n("0fx2"),g=n("c35u"),v=n("hCUG"),j="1rem",O=Object(u.d)(v.a).withConfig({displayName:"ProjectCard__ReadMoreButton"})(["padding:0 0.1em;white-space:nowrap;&::after{content:' \\2192';display:inline;}"]),_=u.d.a.withConfig({displayName:"ProjectCard__Container"})(["margin-block-end:1.5rem;color:inherit;text-decoration:none;background-color:",";display:flex;flex-flow:column;&:focus{outline:2px solid ",";}&:focus,&:hover{","{","}}"],(function(e){return e.theme.bg02}),(function(e){return e.theme.primary}),O,v.b),w=u.d.header.withConfig({displayName:"ProjectCard__Header"})([""]),x=u.d.div.withConfig({displayName:"ProjectCard__Image"})(["block-size:12.5em;inline-size:100%;margin-block-end:1.3em;background:url('","') top center no-repeat;background-size:cover;"],(function(e){return e.url})),C=u.d.h2.withConfig({displayName:"ProjectCard__Heading"})(["margin-block-start:0;margin-block-end:0.4em;font-size:",";padding-inline-start:",";padding-inline-end:",";"],g.a.h2,j,j),k=u.d.p.withConfig({displayName:"ProjectCard__Summary"})(["flex:1 1 auto;padding-inline-start:",";padding-inline-end:",";"],j,j),P=u.d.footer.withConfig({displayName:"ProjectCard__Footer"})(["padding:",";"],j);function S(e){var t=e.img,n=e.heading,o=e.children,i=e.tags,a=e.url;return Object(r.jsx)(b.a,{href:a,passHref:!0,children:Object(r.jsxs)(_,{children:[Object(r.jsxs)(w,{children:[Object(r.jsx)(x,{url:t}),Object(r.jsx)(C,{children:n})]}),Object(r.jsxs)(k,{children:[o," ",Object(r.jsx)(O,{as:"span",children:"Read more"})]}),Object(r.jsx)(P,{children:Object(r.jsx)(y.a,{tags:i})})]})})}S.defaultProps={heading:void 0,img:void 0,children:void 0,tags:[],url:void 0};var E=s()((function(){return n.e(14).then(n.bind(null,"V35x"))}),{loadableGenerated:{webpack:function(){return["V35x"]},modules:["./ProjectFilterList"]}}),D=u.d.div.withConfig({displayName:"ProjectCardsGrid__Grid"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(20em,1fr));grid-auto-rows:1fr;gap:0.5em;"]),M=u.d.div.withConfig({displayName:"ProjectCardsGrid__FiltersContainer"})(["margin-block-end:1em;"]);function L(e){var t=e.projects,n=Object(c.useState)([]),o=n[0],i=n[1],u=a(new Set(t.map((function(e){return e.tags})).flat())),l=o.length>0?t.filter((function(e){return e.tags.some((function(e){return o.includes(e)}))})):t;return Object(r.jsx)(d.a,{children:Object(r.jsxs)(h,{id:"projects",heading:"Projects",children:[Object(r.jsx)(M,{children:Object(r.jsx)(E,{filters:u,selectedFilters:o,onToggle:function(e){o.includes(e)?i((function(t){return t.filter((function(t){return t!==e}))})):i((function(t){return[].concat(a(t),[e])}))},onReset:function(){return i([])}})}),Object(r.jsx)(D,{children:l.map((function(e){var t;return Object(r.jsx)(S,{heading:e.name,img:"/".concat(null===(t=e.imgs)||void 0===t?void 0:t[0]),url:"/projects/".concat(e.slug),tags:e.tags,children:e.description},e.slug)}))})]})})}L.defaultProps={projects:[]}},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Vvt1:function(e,t,n){e.exports=n("a6RD")},YFqc:function(e,t,n){e.exports=n("cTJO")},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},a6RD:function(e,t,n){"use strict";var r=n("lSNA");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=c,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i(i({},r),e));if(r=i(i({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var o={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}r.loadableGenerated&&delete(r=i(i({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,c(n,r);delete r.ssr}return n(r)};u(n("q1tI"));var a=u(n("2qu3"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},c35u:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return p}));var r,o,i=n("ODXe"),a=n("rePB"),u=n("uIir"),c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",small:"small"},l=(r={},Object(a.a)(r,c.h1,"1.383rem"),Object(a.a)(r,c.h2,"1.296rem"),Object(a.a)(r,c.h3,"1.215rem"),Object(a.a)(r,c.h4,"1.138rem"),Object(a.a)(r,c.h5,"1.067rem"),Object(a.a)(r,c.small,"0.937rem"),r),s=Object(a.a)({},u.a.md,(o={},Object(a.a)(o,c.h1,"1.802rem"),Object(a.a)(o,c.h2,"1.602rem"),Object(a.a)(o,c.h3,"1.424rem"),Object(a.a)(o,c.h4,"1.266rem"),Object(a.a)(o,c.h5,"1.125rem"),Object(a.a)(o,c.small,"0.889rem"),o)),d=function(e){return Object.entries(e).map((function(e){var t=Object(i.a)(e,2),n=t[0],r=t[1];return"\n          ".concat(n," {\n            font-size: ").concat(r,";\n          }\n        ")})).join("\n")},f=function(e,t){return"\n  ".concat(Object(u.b)(e)," {\n    ").concat(d(t),"\n  }\n")},p=function(e){return"\n  font-size: ".concat(l[e],";\n\n  ").concat(Object.entries(s).map((function(t){var n=Object(i.a)(t,2),r=n[0],o=n[1];return"\n      ".concat(Object(u.b)(r)," {\n        font-size: ").concat(o[e],";\n      }\n    ")})),"\n")}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),a=n("elyg"),u=n("nOHt"),c=n("vNVm"),l={};function s(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.pathname||"/",d=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],u=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):u||i}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,m=e.replace,b=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var v=i.Children.only(h),j=v&&"object"===typeof v&&v.ref,O=(0,c.useIntersection)({rootMargin:"200px"}),_=r(O,2),w=_[0],x=_[1],C=i.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);(0,i.useEffect)((function(){var e=x&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof g?g:n&&n.locale,o=l[f+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,f,p,{locale:r})}),[p,f,x,g,t,n]);var k={ref:C,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,n,f,p,m,b,y,g)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),s(n,f,p,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var P="undefined"!==typeof g?g:n&&n.locale,S=(0,a.getDomainLocale)(p,P,n&&n.locales,n&&n.domainLocales);k.href=S||(0,a.addBasePath)((0,a.addLocale)(p,P,n&&n.defaultLocale))}return i.default.cloneElement(v,k)};t.default=d},hCUG:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));var r=n("vOnD"),o=Object(r.c)(["background-size:auto 100%;color:",";"],(function(e){return e.theme.bg01})),i=Object(r.c)(["background:linear-gradient( transparent 0%,"," 0% ) no-repeat;background-size:auto 2px;background-position:bottom;transition:background-size 150ms,color 150ms;text-decoration:none;&:hover{","}"],(function(e){return e.theme.primary}),o);t.a=r.d.a.withConfig({displayName:"StyledLink"})(["",""],i)},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},uIir:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r={sm:36,md:48,lg:62,xl:75,xxl:87.5},o=function(e){return"\n  @media (min-width: ".concat(e,"em)\n")}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,o=(0,i.useRef)(),l=(0,i.useState)(!1),s=r(l,2),d=s[0],f=s[1],p=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||d||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,i.useEffect)((function(){u||d||(0,a.default)((function(){return f(!0)}))}),[d]),[p,d]};var i=n("q1tI"),a=o(n("0G5g")),u="undefined"!==typeof IntersectionObserver;var c=new Map}}]);