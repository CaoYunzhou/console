"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[5791],{18602:(t,e,n)=>{n.d(e,{u:()=>T});var r,i=n(72791),a=n(63733),o=n(98202),l=n(74786),c=n.n(l),u=n(29627),s=n.n(u),h=n(42854),p=n.n(h),f=n(82066),y=n.n(f),d=n(18111),m=n.n(d),v=n(75555),b=n(39718),g=n(46044),O=n(87970),A=n(36768),x=n(70587),w=n(73822),P=n(23031),j=["layout","type","stroke","connectNulls","isRange","ref"];function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function S(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function k(){return k=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},k.apply(this,arguments)}function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){I(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,B(r.key),r)}}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function C(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=H(t);if(e){var i=H(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return N(t)}(this,n)}}function N(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}function I(t,e,n){return(e=B(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===E(e)?e:String(e)}var T=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,l=C(u);function u(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return I(N(t=l.call.apply(l,[this].concat(n))),"state",{isAnimationFinished:!0}),I(N(t),"id",(0,x.EL)("recharts-area-")),I(N(t),"handleAnimationEnd",(function(){var e=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),c()(e)&&e()})),I(N(t),"handleAnimationStart",(function(){var e=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),c()(e)&&e()})),t}return e=u,r=[{key:"getDerivedStateFromProps",value:function(t,e){return t.animationId!==e.prevAnimationId?{prevAnimationId:t.animationId,curPoints:t.points,curBaseLine:t.baseLine,prevPoints:e.curPoints,prevBaseLine:e.curBaseLine}:t.points!==e.curPoints||t.baseLine!==e.curBaseLine?{curPoints:t.points,curBaseLine:t.baseLine}:null}}],(n=[{key:"renderDots",value:function(t,e,n){var r=this.props.isAnimationActive,a=this.state.isAnimationFinished;if(r&&!a)return null;var o=this.props,l=o.dot,c=o.points,s=o.dataKey,h=(0,P.L6)(this.props),p=(0,P.L6)(l,!0),f=c.map((function(t,e){var n=L(L(L({key:"dot-".concat(e),r:3},h),p),{},{dataKey:s,cx:t.x,cy:t.y,index:e,value:t.value,payload:t.payload});return u.renderDotItem(l,n)})),y={clipPath:t?"url(#clipPath-".concat(e?"":"dots-").concat(n,")"):null};return i.createElement(g.m,k({className:"recharts-area-dots"},y),f)}},{key:"renderHorizontalRect",value:function(t){var e=this.props,n=e.baseLine,r=e.points,a=e.strokeWidth,o=r[0].x,l=r[r.length-1].x,c=t*Math.abs(o-l),u=s()(r.map((function(t){return t.y||0})));return(0,x.hj)(n)&&"number"===typeof n?u=Math.max(n,u):n&&Array.isArray(n)&&n.length&&(u=Math.max(s()(n.map((function(t){return t.y||0}))),u)),(0,x.hj)(u)?i.createElement("rect",{x:o<l?o:o-c,y:0,width:c,height:Math.floor(u+(a?parseInt("".concat(a),10):1))}):null}},{key:"renderVerticalRect",value:function(t){var e=this.props,n=e.baseLine,r=e.points,a=e.strokeWidth,o=r[0].y,l=r[r.length-1].y,c=t*Math.abs(o-l),u=s()(r.map((function(t){return t.x||0})));return(0,x.hj)(n)&&"number"===typeof n?u=Math.max(n,u):n&&Array.isArray(n)&&n.length&&(u=Math.max(s()(n.map((function(t){return t.x||0}))),u)),(0,x.hj)(u)?i.createElement("rect",{x:0,y:o<l?o:o-c,width:u+(a?parseInt("".concat(a),10):1),height:Math.floor(c)}):null}},{key:"renderClipRect",value:function(t){return"vertical"===this.props.layout?this.renderVerticalRect(t):this.renderHorizontalRect(t)}},{key:"renderAreaStatically",value:function(t,e,n,r){var a=this.props,o=a.layout,l=a.type,c=a.stroke,u=a.connectNulls,s=a.isRange,h=(a.ref,S(a,j));return i.createElement(g.m,{clipPath:n?"url(#clipPath-".concat(r,")"):null},i.createElement(v.H,k({},(0,P.L6)(h,!0),{points:t,connectNulls:u,type:l,baseLine:e,layout:o,stroke:"none",className:"recharts-area-area"})),"none"!==c&&i.createElement(v.H,k({},(0,P.L6)(this.props),{className:"recharts-area-curve",layout:o,type:l,connectNulls:u,fill:"none",points:t})),"none"!==c&&s&&i.createElement(v.H,k({},(0,P.L6)(this.props),{className:"recharts-area-curve",layout:o,type:l,connectNulls:u,fill:"none",points:e})))}},{key:"renderAreaWithAnimation",value:function(t,e){var n=this,r=this.props,a=r.points,l=r.baseLine,c=r.isAnimationActive,u=r.animationBegin,s=r.animationDuration,h=r.animationEasing,f=r.animationId,d=this.state,m=d.prevPoints,v=d.prevBaseLine;return i.createElement(o.ZP,{begin:u,duration:s,isActive:c,easing:h,from:{t:0},to:{t:1},key:"area-".concat(f),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(r){var o=r.t;if(m){var c,u=m.length/a.length,s=a.map((function(t,e){var n=Math.floor(e*u);if(m[n]){var r=m[n],i=(0,x.k4)(r.x,t.x),a=(0,x.k4)(r.y,t.y);return L(L({},t),{},{x:i(o),y:a(o)})}return t}));return c=(0,x.hj)(l)&&"number"===typeof l?(0,x.k4)(v,l)(o):p()(l)||y()(l)?(0,x.k4)(v,0)(o):l.map((function(t,e){var n=Math.floor(e*u);if(v[n]){var r=v[n],i=(0,x.k4)(r.x,t.x),a=(0,x.k4)(r.y,t.y);return L(L({},t),{},{x:i(o),y:a(o)})}return t})),n.renderAreaStatically(s,c,t,e)}return i.createElement(g.m,null,i.createElement("defs",null,i.createElement("clipPath",{id:"animationClipPath-".concat(e)},n.renderClipRect(o))),i.createElement(g.m,{clipPath:"url(#animationClipPath-".concat(e,")")},n.renderAreaStatically(a,l,t,e)))}))}},{key:"renderArea",value:function(t,e){var n=this.props,r=n.points,i=n.baseLine,a=n.isAnimationActive,o=this.state,l=o.prevPoints,c=o.prevBaseLine,u=o.totalLength;return a&&r&&r.length&&(!l&&u>0||!m()(l,r)||!m()(c,i))?this.renderAreaWithAnimation(t,e):this.renderAreaStatically(r,i,t,e)}},{key:"render",value:function(){var t,e=this.props,n=e.hide,r=e.dot,o=e.points,l=e.className,c=e.top,u=e.left,s=e.xAxis,h=e.yAxis,f=e.width,y=e.height,d=e.isAnimationActive,m=e.id;if(n||!o||!o.length)return null;var v=this.state.isAnimationFinished,b=1===o.length,A=(0,a.Z)("recharts-area",l),x=s&&s.allowDataOverflow,w=h&&h.allowDataOverflow,j=x||w,E=p()(m)?this.id:m,S=null!==(t=(0,P.L6)(r))&&void 0!==t?t:{r:3,strokeWidth:2},k=S.r,D=void 0===k?3:k,L=S.strokeWidth,M=void 0===L?2:L,R=((0,P.$k)(r)?r:{}).clipDot,C=void 0===R||R,N=2*D+M;return i.createElement(g.m,{className:A},x||w?i.createElement("defs",null,i.createElement("clipPath",{id:"clipPath-".concat(E)},i.createElement("rect",{x:x?u:u-f/2,y:w?c:c-y/2,width:x?f:2*f,height:w?y:2*y})),!C&&i.createElement("clipPath",{id:"clipPath-dots-".concat(E)},i.createElement("rect",{x:u-N/2,y:c-N/2,width:f+N,height:y+N}))):null,b?null:this.renderArea(j,E),(r||b)&&this.renderDots(j,C,E),(!d||v)&&O.e.renderCallByParent(this.props,o))}}])&&M(e.prototype,n),r&&M(e,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(i.PureComponent);r=T,I(T,"displayName","Area"),I(T,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!A.x.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"}),I(T,"getBaseValue",(function(t,e,n,r){var i=t.layout,a=t.baseValue,o=e.props.baseValue,l=null!==o&&void 0!==o?o:a;if((0,x.hj)(l)&&"number"===typeof l)return l;var c="horizontal"===i?r:n,u=c.scale.domain();if("number"===c.type){var s=Math.max(u[0],u[1]),h=Math.min(u[0],u[1]);return"dataMin"===l?h:"dataMax"===l||s<0?s:Math.max(Math.min(u[0],u[1]),0)}return"dataMin"===l?u[0]:"dataMax"===l?u[1]:u[0]})),I(T,"getComposedData",(function(t){var e,n=t.props,i=t.item,a=t.xAxis,o=t.yAxis,l=t.xAxisTicks,c=t.yAxisTicks,u=t.bandSize,s=t.dataKey,h=t.stackedData,p=t.dataStartIndex,f=t.displayedData,y=t.offset,d=n.layout,m=h&&h.length,v=r.getBaseValue(n,i,a,o),b="horizontal"===d,g=!1,O=f.map((function(t,e){var n;m?n=h[p+e]:(n=(0,w.F$)(t,s),Array.isArray(n)?g=!0:n=[v,n]);var r=null==n[1]||m&&null==(0,w.F$)(t,s);return b?{x:(0,w.Hv)({axis:a,ticks:l,bandSize:u,entry:t,index:e}),y:r?null:o.scale(n[1]),value:n,payload:t}:{x:r?null:a.scale(n[1]),y:(0,w.Hv)({axis:o,ticks:c,bandSize:u,entry:t,index:e}),value:n,payload:t}}));return e=m||g?O.map((function(t){var e=Array.isArray(t.value)?t.value[0]:null;return b?{x:t.x,y:null!=e&&null!=t.y?o.scale(e):null}:{x:null!=e?a.scale(e):null,y:t.y}})):b?o.scale(v):a.scale(v),L({points:O,baseLine:e,layout:d,isRange:g},y)})),I(T,"renderDotItem",(function(t,e){return i.isValidElement(t)?i.cloneElement(t,e):c()(t)?t(e):i.createElement(b.o,k({},e,{className:"recharts-area-dot"}))}))},28265:(t,e,n)=>{n.d(e,{T:()=>c});var r=n(83667),i=n(18602),a=n(90466),o=n(12891),l=n(93137),c=(0,r.z)({chartName:"AreaChart",GraphicalChild:i.u,axisComponents:[{axisType:"xAxis",AxisComp:a.K},{axisType:"yAxis",AxisComp:o.B}],formatAxisMap:l.t9})},19913:(t,e,n)=>{n.d(e,{h:()=>v});var r=n(63733),i=n(72791),a=n(33038),o=n.n(a),l=n(57441),c=n(70587),u=n(15303),s=n(23031);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===h(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a,o,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,i=t}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return l}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v=(0,i.forwardRef)((function(t,e){var n=t.aspect,a=t.initialDimension,h=void 0===a?{width:-1,height:-1}:a,p=t.width,y=void 0===p?"100%":p,m=t.height,v=void 0===m?"100%":m,b=t.minWidth,g=void 0===b?0:b,O=t.minHeight,A=t.maxHeight,x=t.children,w=t.debounce,P=void 0===w?0:w,j=t.id,E=t.className,S=t.onResize,k=t.style,D=void 0===k?{}:k,L=(0,i.useRef)(null),M=(0,i.useRef)();M.current=S,(0,i.useImperativeHandle)(e,(function(){return L}));var R=d((0,i.useState)({containerWidth:h.width,containerHeight:h.height}),2),C=R[0],N=R[1],H=(0,i.useCallback)((function(t,e){N((function(n){var r=Math.round(t),i=Math.round(e);return n.containerWidth===r&&n.containerHeight===i?n:{containerWidth:r,containerHeight:i}}))}),[]);(0,i.useEffect)((function(){var t=function(t){var e,n=t[0].contentRect,r=n.width,i=n.height;H(r,i),null===(e=M.current)||void 0===e||e.call(M,r,i)};P>0&&(t=o()(t,P,{trailing:!0,leading:!1}));var e=new ResizeObserver(t),n=L.current.getBoundingClientRect(),r=n.width,i=n.height;return H(r,i),e.observe(L.current),function(){e.disconnect()}}),[H,P]);var I=(0,i.useMemo)((function(){var t=C.containerWidth,e=C.containerHeight;if(t<0||e<0)return null;(0,u.Z)((0,c.hU)(y)||(0,c.hU)(v),"The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",y,v),(0,u.Z)(!n||n>0,"The aspect(%s) must be greater than zero.",n);var r=(0,c.hU)(y)?t:y,a=(0,c.hU)(v)?e:v;n&&n>0&&(r?a=r/n:a&&(r=a*n),A&&a>A&&(a=A)),(0,u.Z)(r>0||a>0,"The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",r,a,y,v,g,O,n);var o=!Array.isArray(x)&&(0,l.isElement)(x)&&(0,s.Gf)(x.type).endsWith("Chart");return i.Children.map(x,(function(t){return(0,l.isElement)(t)?(0,i.cloneElement)(t,f({width:r,height:a},o?{style:f({height:"100%",width:"100%",maxHeight:a,maxWidth:r},t.props.style)}:{})):t}))}),[n,x,v,A,O,g,C,y]);return i.createElement("div",{id:j?"".concat(j):void 0,className:(0,r.Z)("recharts-responsive-container",E),style:f(f({},D),{},{width:y,height:v,minWidth:g,minHeight:O,maxHeight:A}),ref:L},I)}))}}]);
//# sourceMappingURL=5791.4429aee3.chunk.js.map