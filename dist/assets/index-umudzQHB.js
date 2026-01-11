(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Xh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fd={exports:{}},wo={},pd={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),Zh=Symbol.for("react.portal"),qh=Symbol.for("react.fragment"),Jh=Symbol.for("react.strict_mode"),em=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),rm=Symbol.for("react.forward_ref"),im=Symbol.for("react.suspense"),om=Symbol.for("react.memo"),sm=Symbol.for("react.lazy"),Zl=Symbol.iterator;function am(e){return e===null||typeof e!="object"?null:(e=Zl&&e[Zl]||e["@@iterator"],typeof e=="function"?e:null)}var hd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},md=Object.assign,gd={};function qn(e,t,n){this.props=e,this.context=t,this.refs=gd,this.updater=n||hd}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yd(){}yd.prototype=qn.prototype;function Ra(e,t,n){this.props=e,this.context=t,this.refs=gd,this.updater=n||hd}var Fa=Ra.prototype=new yd;Fa.constructor=Ra;md(Fa,qn.prototype);Fa.isPureReactComponent=!0;var ql=Array.isArray,vd=Object.prototype.hasOwnProperty,_a={current:null},xd={key:!0,ref:!0,__self:!0,__source:!0};function wd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)vd.call(t,r)&&!xd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Yr,type:e,key:o,ref:s,props:i,_owner:_a.current}}function lm(e,t){return{$$typeof:Yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function um(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jl=/\/+/g;function $o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?um(""+e.key):t.toString(36)}function Ti(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Yr:case Zh:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+$o(s,0):r,ql(i)?(n="",e!=null&&(n=e.replace(Jl,"$&/")+"/"),Ti(i,t,n,"",function(u){return u})):i!=null&&(Ia(i)&&(i=lm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Jl,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ql(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+$o(o,a);s+=Ti(o,t,n,l,i)}else if(l=am(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+$o(o,a++),s+=Ti(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return Ti(e,r,"","",function(o){return t.call(n,o,i++)}),r}function cm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Ei={transition:null},dm={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:_a};function kd(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!Ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=qn;F.Fragment=qh;F.Profiler=em;F.PureComponent=Ra;F.StrictMode=Jh;F.Suspense=im;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dm;F.act=kd;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=md({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=_a.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)vd.call(t,l)&&!xd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Yr,type:e.type,key:i,ref:o,props:r,_owner:s}};F.createContext=function(e){return e={$$typeof:nm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tm,_context:e},e.Consumer=e};F.createElement=wd;F.createFactory=function(e){var t=wd.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:rm,render:e}};F.isValidElement=Ia;F.lazy=function(e){return{$$typeof:sm,_payload:{_status:-1,_result:e},_init:cm}};F.memo=function(e,t){return{$$typeof:om,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=t}};F.unstable_act=kd;F.useCallback=function(e,t){return Se.current.useCallback(e,t)};F.useContext=function(e){return Se.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};F.useEffect=function(e,t){return Se.current.useEffect(e,t)};F.useId=function(){return Se.current.useId()};F.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Se.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};F.useRef=function(e){return Se.current.useRef(e)};F.useState=function(e){return Se.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Se.current.useTransition()};F.version="18.3.1";pd.exports=F;var A=pd.exports;const ba=Xh(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm=A,pm=Symbol.for("react.element"),hm=Symbol.for("react.fragment"),mm=Object.prototype.hasOwnProperty,gm=fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ym={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)mm.call(t,r)&&!ym.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:pm,type:e,key:o,ref:s,props:i,_owner:gm.current}}wo.Fragment=hm;wo.jsx=Sd;wo.jsxs=Sd;fd.exports=wo;var d=fd.exports,Ms={},jd={exports:{}},Fe={},Pd={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,V){var R=E.length;E.push(V);e:for(;0<R;){var D=R-1>>>1,W=E[D];if(0<i(W,V))E[D]=V,E[R]=W,R=D;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var V=E[0],R=E.pop();if(R!==V){E[0]=R;e:for(var D=0,W=E.length,Qt=W>>>1;D<Qt;){var et=2*(D+1)-1,xn=E[et],Ve=et+1,Yt=E[Ve];if(0>i(xn,R))Ve<W&&0>i(Yt,xn)?(E[D]=Yt,E[Ve]=R,D=Ve):(E[D]=xn,E[et]=R,D=et);else if(Ve<W&&0>i(Yt,R))E[D]=Yt,E[Ve]=R,D=Ve;else break e}}return V}function i(E,V){var R=E.sortIndex-V.sortIndex;return R!==0?R:E.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,p=3,y=!1,v=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=E)r(u),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(u)}}function w(E){if(x=!1,m(E),!v)if(n(l)!==null)v=!0,q(k);else{var V=n(u);V!==null&&Ie(w,V.startTime-E)}}function k(E,V){v=!1,x&&(x=!1,g(j),j=-1),y=!0;var R=p;try{for(m(V),f=n(l);f!==null&&(!(f.expirationTime>V)||E&&!oe());){var D=f.callback;if(typeof D=="function"){f.callback=null,p=f.priorityLevel;var W=D(f.expirationTime<=V);V=e.unstable_now(),typeof W=="function"?f.callback=W:f===n(l)&&r(l),m(V)}else r(l);f=n(l)}if(f!==null)var Qt=!0;else{var et=n(u);et!==null&&Ie(w,et.startTime-V),Qt=!1}return Qt}finally{f=null,p=R,y=!1}}var T=!1,P=null,j=-1,z=5,L=-1;function oe(){return!(e.unstable_now()-L<z)}function ue(){if(P!==null){var E=e.unstable_now();L=E;var V=!0;try{V=P(!0,E)}finally{V?ve():(T=!1,P=null)}}else T=!1}var ve;if(typeof h=="function")ve=function(){h(ue)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,kt=se.port2;se.port1.onmessage=ue,ve=function(){kt.postMessage(null)}}else ve=function(){C(ue,0)};function q(E){P=E,T||(T=!0,ve())}function Ie(E,V){j=C(function(){E(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,q(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var R=p;p=V;try{return E()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,V){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=p;p=E;try{return V()}finally{p=R}},e.unstable_scheduleCallback=function(E,V,R){var D=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?D+R:D):R=D,E){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=R+W,E={id:c++,callback:V,priorityLevel:E,startTime:R,expirationTime:W,sortIndex:-1},R>D?(E.sortIndex=R,t(u,E),n(l)===null&&E===n(u)&&(x?(g(j),j=-1):x=!0,Ie(w,R-D))):(E.sortIndex=W,t(l,E),v||y||(v=!0,q(k))),E},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(E){var V=p;return function(){var R=p;p=V;try{return E.apply(this,arguments)}finally{p=R}}}})(Cd);Pd.exports=Cd;var vm=Pd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm=A,ze=vm;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Td=new Set,Mr={};function mn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Mr[e]=t,e=0;e<t.length;e++)Td.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vs=Object.prototype.hasOwnProperty,wm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eu={},tu={};function km(e){return Vs.call(tu,e)?!0:Vs.call(eu,e)?!1:wm.test(e)?tu[e]=!0:(eu[e]=!0,!1)}function Sm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jm(e,t,n,r){if(t===null||typeof t>"u"||Sm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Oa=/[\-:]([a-z])/g;function Ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Oa,Ba);fe[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Oa,Ba);fe[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Oa,Ba);fe[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ua(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jm(t,n,i,r)&&(n=null),r||i===null?km(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Ha=Symbol.for("react.strict_mode"),As=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),Nd=Symbol.for("react.context"),$a=Symbol.for("react.forward_ref"),Ls=Symbol.for("react.suspense"),Ds=Symbol.for("react.suspense_list"),Wa=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Md=Symbol.for("react.offscreen"),nu=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Wo;function dr(e){if(Wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wo=t&&t[1]||""}return`
`+Wo+e}var Go=!1;function Ko(e,t){if(!e||Go)return"";Go=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Go=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function Pm(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case kn:return"Portal";case As:return"Profiler";case Ha:return"StrictMode";case Ls:return"Suspense";case Ds:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nd:return(e.displayName||"Context")+".Consumer";case Ed:return(e._context.displayName||"Context")+".Provider";case $a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wa:return t=e.displayName||null,t!==null?t:zs(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return zs(e(t))}catch{}}return null}function Cm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zs(t);case 8:return t===Ha?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tm(e){var t=Vd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ai(e){e._valueTracker||(e._valueTracker=Tm(e))}function Ad(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rs(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ld(e,t){t=t.checked,t!=null&&Ua(e,"checked",t,!1)}function Fs(e,t){Ld(e,t);var n=Ot(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_s(e,t.type,n):t.hasOwnProperty("defaultValue")&&_s(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _s(e,t,n){(t!=="number"||Oi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function _n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Is(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(fr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ot(n)}}function Dd(e,t){var n=Ot(t.value),r=Ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,Rd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Em=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){Em.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function Fd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function _d(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Nm=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Os(e,t){if(t){if(Nm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Us=null;function Ga(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,In=null,bn=null;function au(e){if(e=qr(e)){if(typeof Hs!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Co(t),Hs(e.stateNode,e.type,t))}}function Id(e){In?bn?bn.push(e):bn=[e]:In=e}function bd(){if(In){var e=In,t=bn;if(bn=In=null,au(e),t)for(e=0;e<t.length;e++)au(t[e])}}function Od(e,t){return e(t)}function Bd(){}var Qo=!1;function Ud(e,t,n){if(Qo)return e(t,n);Qo=!0;try{return Od(e,t,n)}finally{Qo=!1,(In!==null||bn!==null)&&(Bd(),bd())}}function Ar(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var $s=!1;if(mt)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){$s=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{$s=!1}function Mm(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var yr=!1,Bi=null,Ui=!1,Ws=null,Vm={onError:function(e){yr=!0,Bi=e}};function Am(e,t,n,r,i,o,s,a,l){yr=!1,Bi=null,Mm.apply(Vm,arguments)}function Lm(e,t,n,r,i,o,s,a,l){if(Am.apply(this,arguments),yr){if(yr){var u=Bi;yr=!1,Bi=null}else throw Error(S(198));Ui||(Ui=!0,Ws=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lu(e){if(gn(e)!==e)throw Error(S(188))}function Dm(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lu(i),e;if(o===r)return lu(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function $d(e){return e=Dm(e),e!==null?Wd(e):null}function Wd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wd(e);if(t!==null)return t;e=e.sibling}return null}var Gd=ze.unstable_scheduleCallback,uu=ze.unstable_cancelCallback,zm=ze.unstable_shouldYield,Rm=ze.unstable_requestPaint,J=ze.unstable_now,Fm=ze.unstable_getCurrentPriorityLevel,Ka=ze.unstable_ImmediatePriority,Kd=ze.unstable_UserBlockingPriority,Hi=ze.unstable_NormalPriority,_m=ze.unstable_LowPriority,Qd=ze.unstable_IdlePriority,ko=null,it=null;function Im(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Bm,bm=Math.log,Om=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-(bm(e)/Om|0)|0}var ui=64,ci=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $i(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=pr(a):(o&=s,o!==0&&(r=pr(o)))}else s=n&~i,s!==0?r=pr(s):o!==0&&(r=pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Um(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ze(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Um(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Gs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yd(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function Yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function $m(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var O=0;function Xd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zd,Ya,qd,Jd,ef,Ks=!1,di=[],At=null,Lt=null,Dt=null,Lr=new Map,Dr=new Map,Et=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cu(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=qr(t),t!==null&&Ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gm(e,t,n,r,i){switch(t){case"focusin":return At=rr(At,e,t,n,r,i),!0;case"dragenter":return Lt=rr(Lt,e,t,n,r,i),!0;case"mouseover":return Dt=rr(Dt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Lr.set(o,rr(Lr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Dr.set(o,rr(Dr.get(o)||null,e,t,n,r,i)),!0}return!1}function tf(e){var t=nn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Hd(n),t!==null){e.blockedOn=t,ef(e.priority,function(){qd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Us=r,n.target.dispatchEvent(r),Us=null}else return t=qr(n),t!==null&&Ya(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){Ni(e)&&n.delete(t)}function Km(){Ks=!1,At!==null&&Ni(At)&&(At=null),Lt!==null&&Ni(Lt)&&(Lt=null),Dt!==null&&Ni(Dt)&&(Dt=null),Lr.forEach(du),Dr.forEach(du)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ks||(Ks=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Km)))}function zr(e){function t(i){return ir(i,e)}if(0<di.length){ir(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&ir(At,e),Lt!==null&&ir(Lt,e),Dt!==null&&ir(Dt,e),Lr.forEach(t),Dr.forEach(t),n=0;n<Et.length;n++)r=Et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)tf(n),n.blockedOn===null&&Et.shift()}var On=wt.ReactCurrentBatchConfig,Wi=!0;function Qm(e,t,n,r){var i=O,o=On.transition;On.transition=null;try{O=1,Xa(e,t,n,r)}finally{O=i,On.transition=o}}function Ym(e,t,n,r){var i=O,o=On.transition;On.transition=null;try{O=4,Xa(e,t,n,r)}finally{O=i,On.transition=o}}function Xa(e,t,n,r){if(Wi){var i=Qs(e,t,n,r);if(i===null)os(e,t,r,Gi,n),cu(e,r);else if(Gm(i,e,t,n,r))r.stopPropagation();else if(cu(e,r),t&4&&-1<Wm.indexOf(e)){for(;i!==null;){var o=qr(i);if(o!==null&&Zd(o),o=Qs(e,t,n,r),o===null&&os(e,t,r,Gi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else os(e,t,r,null,n)}}var Gi=null;function Qs(e,t,n,r){if(Gi=null,e=Ga(r),e=nn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fm()){case Ka:return 1;case Kd:return 4;case Hi:case _m:return 16;case Qd:return 536870912;default:return 16}default:return 16}}var Mt=null,Za=null,Mi=null;function rf(){if(Mi)return Mi;var e,t=Za,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function fu(){return!1}function _e(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fi:fu,this.isPropagationStopped=fu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qa=_e(Jn),Zr=X({},Jn,{view:0,detail:0}),Xm=_e(Zr),Xo,Zo,or,So=X({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ja,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(Xo=e.screenX-or.screenX,Zo=e.screenY-or.screenY):Zo=Xo=0,or=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),pu=_e(So),Zm=X({},So,{dataTransfer:0}),qm=_e(Zm),Jm=X({},Zr,{relatedTarget:0}),qo=_e(Jm),e0=X({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),t0=_e(e0),n0=X({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r0=_e(n0),i0=X({},Jn,{data:0}),hu=_e(i0),o0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=a0[e])?!!t[e]:!1}function Ja(){return l0}var u0=X({},Zr,{key:function(e){if(e.key){var t=o0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ja,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c0=_e(u0),d0=X({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mu=_e(d0),f0=X({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ja}),p0=_e(f0),h0=X({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),m0=_e(h0),g0=X({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y0=_e(g0),v0=[9,13,27,32],el=mt&&"CompositionEvent"in window,vr=null;mt&&"documentMode"in document&&(vr=document.documentMode);var x0=mt&&"TextEvent"in window&&!vr,of=mt&&(!el||vr&&8<vr&&11>=vr),gu=" ",yu=!1;function sf(e,t){switch(e){case"keyup":return v0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function af(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function w0(e,t){switch(e){case"compositionend":return af(t);case"keypress":return t.which!==32?null:(yu=!0,gu);case"textInput":return e=t.data,e===gu&&yu?null:e;default:return null}}function k0(e,t){if(jn)return e==="compositionend"||!el&&sf(e,t)?(e=rf(),Mi=Za=Mt=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return of&&t.locale!=="ko"?null:t.data;default:return null}}var S0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S0[e.type]:t==="textarea"}function lf(e,t,n,r){Id(r),t=Ki(t,"onChange"),0<t.length&&(n=new qa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,Rr=null;function j0(e){xf(e,0)}function jo(e){var t=Tn(e);if(Ad(t))return e}function P0(e,t){if(e==="change")return t}var uf=!1;if(mt){var Jo;if(mt){var es="oninput"in document;if(!es){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),es=typeof xu.oninput=="function"}Jo=es}else Jo=!1;uf=Jo&&(!document.documentMode||9<document.documentMode)}function wu(){xr&&(xr.detachEvent("onpropertychange",cf),Rr=xr=null)}function cf(e){if(e.propertyName==="value"&&jo(Rr)){var t=[];lf(t,Rr,e,Ga(e)),Ud(j0,t)}}function C0(e,t,n){e==="focusin"?(wu(),xr=t,Rr=n,xr.attachEvent("onpropertychange",cf)):e==="focusout"&&wu()}function T0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Rr)}function E0(e,t){if(e==="click")return jo(t)}function N0(e,t){if(e==="input"||e==="change")return jo(t)}function M0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:M0;function Fr(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vs.call(t,i)||!Je(e[i],t[i]))return!1}return!0}function ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Su(e,t){var n=ku(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ku(n)}}function df(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?df(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ff(){for(var e=window,t=Oi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oi(e.document)}return t}function tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function V0(e){var t=ff(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&df(n.ownerDocument.documentElement,n)){if(r!==null&&tl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Su(n,o);var s=Su(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var A0=mt&&"documentMode"in document&&11>=document.documentMode,Pn=null,Ys=null,wr=null,Xs=!1;function ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xs||Pn==null||Pn!==Oi(r)||(r=Pn,"selectionStart"in r&&tl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Fr(wr,r)||(wr=r,r=Ki(Ys,"onSelect"),0<r.length&&(t=new qa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},ts={},pf={};mt&&(pf=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Po(e){if(ts[e])return ts[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pf)return ts[e]=t[n];return e}var hf=Po("animationend"),mf=Po("animationiteration"),gf=Po("animationstart"),yf=Po("transitionend"),vf=new Map,Pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){vf.set(e,t),mn(t,[e])}for(var ns=0;ns<Pu.length;ns++){var rs=Pu[ns],L0=rs.toLowerCase(),D0=rs[0].toUpperCase()+rs.slice(1);$t(L0,"on"+D0)}$t(hf,"onAnimationEnd");$t(mf,"onAnimationIteration");$t(gf,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(yf,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Lm(r,t,void 0,e),e.currentTarget=null}function xf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Cu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Cu(i,a,u),o=l}}}if(Ui)throw e=Ws,Ui=!1,Ws=null,e}function U(e,t){var n=t[ta];n===void 0&&(n=t[ta]=new Set);var r=e+"__bubble";n.has(r)||(wf(t,e,2,!1),n.add(r))}function is(e,t,n){var r=0;t&&(r|=4),wf(n,e,r,t)}var hi="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[hi]){e[hi]=!0,Td.forEach(function(n){n!=="selectionchange"&&(z0.has(n)||is(n,!1,e),is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,is("selectionchange",!1,t))}}function wf(e,t,n,r){switch(nf(t)){case 1:var i=Qm;break;case 4:i=Ym;break;default:i=Xa}n=i.bind(null,t,n,e),i=void 0,!$s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function os(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=nn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ud(function(){var u=o,c=Ga(n),f=[];e:{var p=vf.get(e);if(p!==void 0){var y=qa,v=e;switch(e){case"keypress":if(Vi(n)===0)break e;case"keydown":case"keyup":y=c0;break;case"focusin":v="focus",y=qo;break;case"focusout":v="blur",y=qo;break;case"beforeblur":case"afterblur":y=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=p0;break;case hf:case mf:case gf:y=t0;break;case yf:y=m0;break;case"scroll":y=Xm;break;case"wheel":y=y0;break;case"copy":case"cut":case"paste":y=r0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=mu}var x=(t&4)!==0,C=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Ar(h,g),w!=null&&x.push(Ir(h,w,m)))),C)break;h=h.return}0<x.length&&(p=new y(p,v,null,n,c),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Us&&(v=n.relatedTarget||n.fromElement)&&(nn(v)||v[gt]))break e;if((y||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?nn(v):null,v!==null&&(C=gn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(x=pu,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=mu,w="onPointerLeave",g="onPointerEnter",h="pointer"),C=y==null?p:Tn(y),m=v==null?p:Tn(v),p=new x(w,h+"leave",y,n,c),p.target=C,p.relatedTarget=m,w=null,nn(c)===u&&(x=new x(g,h+"enter",v,n,c),x.target=m,x.relatedTarget=C,w=x),C=w,y&&v)t:{for(x=y,g=v,h=0,m=x;m;m=wn(m))h++;for(m=0,w=g;w;w=wn(w))m++;for(;0<h-m;)x=wn(x),h--;for(;0<m-h;)g=wn(g),m--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=wn(x),g=wn(g)}x=null}else x=null;y!==null&&Tu(f,p,y,x,!1),v!==null&&C!==null&&Tu(f,C,v,x,!0)}}e:{if(p=u?Tn(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var k=P0;else if(vu(p))if(uf)k=N0;else{k=T0;var T=C0}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=E0);if(k&&(k=k(e,u))){lf(f,k,n,c);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&_s(p,"number",p.value)}switch(T=u?Tn(u):window,e){case"focusin":(vu(T)||T.contentEditable==="true")&&(Pn=T,Ys=u,wr=null);break;case"focusout":wr=Ys=Pn=null;break;case"mousedown":Xs=!0;break;case"contextmenu":case"mouseup":case"dragend":Xs=!1,ju(f,n,c);break;case"selectionchange":if(A0)break;case"keydown":case"keyup":ju(f,n,c)}var P;if(el)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else jn?sf(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(of&&n.locale!=="ko"&&(jn||j!=="onCompositionStart"?j==="onCompositionEnd"&&jn&&(P=rf()):(Mt=c,Za="value"in Mt?Mt.value:Mt.textContent,jn=!0)),T=Ki(u,j),0<T.length&&(j=new hu(j,e,null,n,c),f.push({event:j,listeners:T}),P?j.data=P:(P=af(n),P!==null&&(j.data=P)))),(P=x0?w0(e,n):k0(e,n))&&(u=Ki(u,"onBeforeInput"),0<u.length&&(c=new hu("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}xf(f,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ar(e,n),o!=null&&r.unshift(Ir(e,o,i)),o=Ar(e,t),o!=null&&r.push(Ir(e,o,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ar(n,o),l!=null&&s.unshift(Ir(n,l,a))):i||(l=Ar(n,o),l!=null&&s.push(Ir(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var R0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function Eu(e){return(typeof e=="string"?e:""+e).replace(R0,`
`).replace(F0,"")}function mi(e,t,n){if(t=Eu(t),Eu(e)!==t&&n)throw Error(S(425))}function Qi(){}var Zs=null,qs=null;function Js(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ea=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,Nu=typeof Promise=="function"?Promise:void 0,I0=typeof queueMicrotask=="function"?queueMicrotask:typeof Nu<"u"?function(e){return Nu.resolve(null).then(e).catch(b0)}:ea;function b0(e){setTimeout(function(){throw e})}function ss(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),rt="__reactFiber$"+er,br="__reactProps$"+er,gt="__reactContainer$"+er,ta="__reactEvents$"+er,O0="__reactListeners$"+er,B0="__reactHandles$"+er;function nn(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mu(e);e!==null;){if(n=e[rt])return n;e=Mu(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[rt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Co(e){return e[br]||null}var na=[],En=-1;function Wt(e){return{current:e}}function H(e){0>En||(e.current=na[En],na[En]=null,En--)}function B(e,t){En++,na[En]=e.current,e.current=t}var Bt={},ye=Wt(Bt),Te=Wt(!1),cn=Bt;function $n(e,t){var n=e.type.contextTypes;if(!n)return Bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function Yi(){H(Te),H(ye)}function Vu(e,t,n){if(ye.current!==Bt)throw Error(S(168));B(ye,t),B(Te,n)}function kf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Cm(e)||"Unknown",i));return X({},n,r)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,cn=ye.current,B(ye,e),B(Te,Te.current),!0}function Au(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=kf(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,H(Te),H(ye),B(ye,e)):H(Te),B(Te,n)}var lt=null,To=!1,as=!1;function Sf(e){lt===null?lt=[e]:lt.push(e)}function U0(e){To=!0,Sf(e)}function Gt(){if(!as&&lt!==null){as=!0;var e=0,t=O;try{var n=lt;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,To=!1}catch(i){throw lt!==null&&(lt=lt.slice(e+1)),Gd(Ka,Gt),i}finally{O=t,as=!1}}return null}var Nn=[],Mn=0,Zi=null,qi=0,Be=[],Ue=0,dn=null,ut=1,ct="";function qt(e,t){Nn[Mn++]=qi,Nn[Mn++]=Zi,Zi=e,qi=t}function jf(e,t,n){Be[Ue++]=ut,Be[Ue++]=ct,Be[Ue++]=dn,dn=e;var r=ut;e=ct;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var o=32-Ze(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ut=1<<32-Ze(t)+i|n<<i|r,ct=o+e}else ut=1<<o|n<<i|r,ct=e}function nl(e){e.return!==null&&(qt(e,1),jf(e,1,0))}function rl(e){for(;e===Zi;)Zi=Nn[--Mn],Nn[Mn]=null,qi=Nn[--Mn],Nn[Mn]=null;for(;e===dn;)dn=Be[--Ue],Be[Ue]=null,ct=Be[--Ue],Be[Ue]=null,ut=Be[--Ue],Be[Ue]=null}var De=null,Le=null,G=!1,Xe=null;function Pf(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Le=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:ut,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Le=null,!0):!1;default:return!1}}function ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ia(e){if(G){var t=Le;if(t){var n=t;if(!Lu(e,t)){if(ra(e))throw Error(S(418));t=zt(n.nextSibling);var r=De;t&&Lu(e,t)?Pf(r,n):(e.flags=e.flags&-4097|2,G=!1,De=e)}}else{if(ra(e))throw Error(S(418));e.flags=e.flags&-4097|2,G=!1,De=e}}}function Du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function gi(e){if(e!==De)return!1;if(!G)return Du(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Js(e.type,e.memoizedProps)),t&&(t=Le)){if(ra(e))throw Cf(),Error(S(418));for(;t;)Pf(e,t),t=zt(t.nextSibling)}if(Du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=De?zt(e.stateNode.nextSibling):null;return!0}function Cf(){for(var e=Le;e;)e=zt(e.nextSibling)}function Wn(){Le=De=null,G=!1}function il(e){Xe===null?Xe=[e]:Xe.push(e)}var H0=wt.ReactCurrentBatchConfig;function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function Tf(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=It(g,h),g.index=0,g.sibling=null,g}function o(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,m,w){return h===null||h.tag!==6?(h=hs(m,g.mode,w),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,w){var k=m.type;return k===Sn?c(g,h,m.props.children,w,m.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pt&&zu(k)===h.type)?(w=i(h,m.props),w.ref=sr(g,h,m),w.return=g,w):(w=_i(m.type,m.key,m.props,null,g.mode,w),w.ref=sr(g,h,m),w.return=g,w)}function u(g,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=ms(m,g.mode,w),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function c(g,h,m,w,k){return h===null||h.tag!==7?(h=ln(m,g.mode,w,k),h.return=g,h):(h=i(h,m),h.return=g,h)}function f(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=hs(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case si:return m=_i(h.type,h.key,h.props,null,g.mode,m),m.ref=sr(g,null,h),m.return=g,m;case kn:return h=ms(h,g.mode,m),h.return=g,h;case Pt:var w=h._init;return f(g,w(h._payload),m)}if(fr(h)||tr(h))return h=ln(h,g.mode,m,null),h.return=g,h;yi(g,h)}return null}function p(g,h,m,w){var k=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(g,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case si:return m.key===k?l(g,h,m,w):null;case kn:return m.key===k?u(g,h,m,w):null;case Pt:return k=m._init,p(g,h,k(m._payload),w)}if(fr(m)||tr(m))return k!==null?null:c(g,h,m,w,null);yi(g,m)}return null}function y(g,h,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,a(h,g,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case si:return g=g.get(w.key===null?m:w.key)||null,l(h,g,w,k);case kn:return g=g.get(w.key===null?m:w.key)||null,u(h,g,w,k);case Pt:var T=w._init;return y(g,h,m,T(w._payload),k)}if(fr(w)||tr(w))return g=g.get(m)||null,c(h,g,w,k,null);yi(h,w)}return null}function v(g,h,m,w){for(var k=null,T=null,P=h,j=h=0,z=null;P!==null&&j<m.length;j++){P.index>j?(z=P,P=null):z=P.sibling;var L=p(g,P,m[j],w);if(L===null){P===null&&(P=z);break}e&&P&&L.alternate===null&&t(g,P),h=o(L,h,j),T===null?k=L:T.sibling=L,T=L,P=z}if(j===m.length)return n(g,P),G&&qt(g,j),k;if(P===null){for(;j<m.length;j++)P=f(g,m[j],w),P!==null&&(h=o(P,h,j),T===null?k=P:T.sibling=P,T=P);return G&&qt(g,j),k}for(P=r(g,P);j<m.length;j++)z=y(P,g,j,m[j],w),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?j:z.key),h=o(z,h,j),T===null?k=z:T.sibling=z,T=z);return e&&P.forEach(function(oe){return t(g,oe)}),G&&qt(g,j),k}function x(g,h,m,w){var k=tr(m);if(typeof k!="function")throw Error(S(150));if(m=k.call(m),m==null)throw Error(S(151));for(var T=k=null,P=h,j=h=0,z=null,L=m.next();P!==null&&!L.done;j++,L=m.next()){P.index>j?(z=P,P=null):z=P.sibling;var oe=p(g,P,L.value,w);if(oe===null){P===null&&(P=z);break}e&&P&&oe.alternate===null&&t(g,P),h=o(oe,h,j),T===null?k=oe:T.sibling=oe,T=oe,P=z}if(L.done)return n(g,P),G&&qt(g,j),k;if(P===null){for(;!L.done;j++,L=m.next())L=f(g,L.value,w),L!==null&&(h=o(L,h,j),T===null?k=L:T.sibling=L,T=L);return G&&qt(g,j),k}for(P=r(g,P);!L.done;j++,L=m.next())L=y(P,g,j,L.value,w),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?j:L.key),h=o(L,h,j),T===null?k=L:T.sibling=L,T=L);return e&&P.forEach(function(ue){return t(g,ue)}),G&&qt(g,j),k}function C(g,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Sn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case si:e:{for(var k=m.key,T=h;T!==null;){if(T.key===k){if(k=m.type,k===Sn){if(T.tag===7){n(g,T.sibling),h=i(T,m.props.children),h.return=g,g=h;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pt&&zu(k)===T.type){n(g,T.sibling),h=i(T,m.props),h.ref=sr(g,T,m),h.return=g,g=h;break e}n(g,T);break}else t(g,T);T=T.sibling}m.type===Sn?(h=ln(m.props.children,g.mode,w,m.key),h.return=g,g=h):(w=_i(m.type,m.key,m.props,null,g.mode,w),w.ref=sr(g,h,m),w.return=g,g=w)}return s(g);case kn:e:{for(T=m.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=ms(m,g.mode,w),h.return=g,g=h}return s(g);case Pt:return T=m._init,C(g,h,T(m._payload),w)}if(fr(m))return v(g,h,m,w);if(tr(m))return x(g,h,m,w);yi(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=hs(m,g.mode,w),h.return=g,g=h),s(g)):n(g,h)}return C}var Gn=Tf(!0),Ef=Tf(!1),Ji=Wt(null),eo=null,Vn=null,ol=null;function sl(){ol=Vn=eo=null}function al(e){var t=Ji.current;H(Ji),e._currentValue=t}function oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){eo=e,ol=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(ol!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(eo===null)throw Error(S(308));Vn=e,eo.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var rn=null;function ll(e){rn===null?rn=[e]:rn.push(e)}function Nf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ll(t)):(n.next=i.next,i.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yt(e,n)}return i=r.interleaved,i===null?(t.next=t,ll(r)):(t.next=i.next,i.next=t),r.interleaved=t,yt(e,n)}function Ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}function Ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var i=e.updateQueue;Ct=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(p=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(y,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(y,f,p):v,p==null)break e;f=X({},f,p);break e;case 2:Ct=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pn|=s,e.lanes=s,e.memoizedState=f}}function Fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Jr={},ot=Wt(Jr),Or=Wt(Jr),Br=Wt(Jr);function on(e){if(e===Jr)throw Error(S(174));return e}function cl(e,t){switch(B(Br,t),B(Or,e),B(ot,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bs(t,e)}H(ot),B(ot,t)}function Kn(){H(ot),H(Or),H(Br)}function Vf(e){on(Br.current);var t=on(ot.current),n=bs(t,e.type);t!==n&&(B(Or,e),B(ot,n))}function dl(e){Or.current===e&&(H(ot),H(Or))}var K=Wt(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=[];function fl(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var Li=wt.ReactCurrentDispatcher,us=wt.ReactCurrentBatchConfig,fn=0,Y=null,re=null,ae=null,ro=!1,kr=!1,Ur=0,$0=0;function pe(){throw Error(S(321))}function pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function hl(e,t,n,r,i,o){if(fn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Li.current=e===null||e.memoizedState===null?Q0:Y0,e=n(r,i),kr){o=0;do{if(kr=!1,Ur=0,25<=o)throw Error(S(301));o+=1,ae=re=null,t.updateQueue=null,Li.current=X0,e=n(r,i)}while(kr)}if(Li.current=io,t=re!==null&&re.next!==null,fn=0,ae=re=Y=null,ro=!1,t)throw Error(S(300));return e}function ml(){var e=Ur!==0;return Ur=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?Y.memoizedState=ae=e:ae=ae.next=e,ae}function Ge(){if(re===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ae===null?Y.memoizedState:ae.next;if(t!==null)ae=t,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ae===null?Y.memoizedState=ae=e:ae=ae.next=e}return ae}function Hr(e,t){return typeof t=="function"?t(e):t}function cs(e){var t=Ge(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((fn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Y.lanes|=c,pn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Je(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,pn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ds(e){var t=Ge(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Je(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Af(){}function Lf(e,t){var n=Y,r=Ge(),i=t(),o=!Je(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,gl(Rf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,$r(9,zf.bind(null,n,r,i,t),void 0,null),le===null)throw Error(S(349));fn&30||Df(n,t,i)}return i}function Df(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zf(e,t,n,r){t.value=n,t.getSnapshot=r,Ff(t)&&_f(e)}function Rf(e,t,n){return n(function(){Ff(t)&&_f(e)})}function Ff(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function _f(e){var t=yt(e,1);t!==null&&qe(t,e,1,-1)}function _u(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=K0.bind(null,Y,e),[t.memoizedState,e]}function $r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function If(){return Ge().memoizedState}function Di(e,t,n,r){var i=nt();Y.flags|=e,i.memoizedState=$r(1|t,n,void 0,r===void 0?null:r)}function Eo(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(re!==null){var s=re.memoizedState;if(o=s.destroy,r!==null&&pl(r,s.deps)){i.memoizedState=$r(t,n,o,r);return}}Y.flags|=e,i.memoizedState=$r(1|t,n,o,r)}function Iu(e,t){return Di(8390656,8,e,t)}function gl(e,t){return Eo(2048,8,e,t)}function bf(e,t){return Eo(4,2,e,t)}function Of(e,t){return Eo(4,4,e,t)}function Bf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uf(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4,4,Bf.bind(null,t,e),n)}function yl(){}function Hf(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $f(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wf(e,t,n){return fn&21?(Je(n,t)||(n=Yd(),Y.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function W0(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=us.transition;us.transition={};try{e(!1),t()}finally{O=n,us.transition=r}}function Gf(){return Ge().memoizedState}function G0(e,t,n){var r=_t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kf(e))Qf(t,n);else if(n=Nf(e,t,n,r),n!==null){var i=ke();qe(n,e,r,i),Yf(n,t,r)}}function K0(e,t,n){var r=_t(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kf(e))Qf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Je(a,s)){var l=t.interleaved;l===null?(i.next=i,ll(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Nf(e,t,i,r),n!==null&&(i=ke(),qe(n,e,r,i),Yf(n,t,r))}}function Kf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Qf(e,t){kr=ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}var io={readContext:We,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Q0={readContext:We,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Iu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Di(4194308,4,Bf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Di(4194308,4,e,t)},useInsertionEffect:function(e,t){return Di(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=G0.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:_u,useDebugValue:yl,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=_u(!1),t=e[0];return e=W0.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=nt();if(G){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),le===null)throw Error(S(349));fn&30||Df(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Iu(Rf.bind(null,r,o,e),[e]),r.flags|=2048,$r(9,zf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=nt(),t=le.identifierPrefix;if(G){var n=ct,r=ut;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Y0={readContext:We,useCallback:Hf,useContext:We,useEffect:gl,useImperativeHandle:Uf,useInsertionEffect:bf,useLayoutEffect:Of,useMemo:$f,useReducer:cs,useRef:If,useState:function(){return cs(Hr)},useDebugValue:yl,useDeferredValue:function(e){var t=Ge();return Wf(t,re.memoizedState,e)},useTransition:function(){var e=cs(Hr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Af,useSyncExternalStore:Lf,useId:Gf,unstable_isNewReconciler:!1},X0={readContext:We,useCallback:Hf,useContext:We,useEffect:gl,useImperativeHandle:Uf,useInsertionEffect:bf,useLayoutEffect:Of,useMemo:$f,useReducer:ds,useRef:If,useState:function(){return ds(Hr)},useDebugValue:yl,useDeferredValue:function(e){var t=Ge();return re===null?t.memoizedState=e:Wf(t,re.memoizedState,e)},useTransition:function(){var e=ds(Hr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Af,useSyncExternalStore:Lf,useId:Gf,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function sa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var No={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=_t(e),o=ft(r,i);o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,i),t!==null&&(qe(t,e,i,r),Ai(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=_t(e),o=ft(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,i),t!==null&&(qe(t,e,i,r),Ai(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=_t(e),i=ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rt(e,i,r),t!==null&&(qe(t,e,r,n),Ai(t,e,r))}};function bu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(i,o):!0}function Xf(e,t,n){var r=!1,i=Bt,o=t.contextType;return typeof o=="object"&&o!==null?o=We(o):(i=Ee(t)?cn:ye.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):Bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=No,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&No.enqueueReplaceState(t,t.state,null)}function aa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ul(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=We(o):(o=Ee(t)?cn:ye.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(sa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&No.enqueueReplaceState(i,i.state,null),to(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t){try{var n="",r=t;do n+=Pm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function la(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z0=typeof WeakMap=="function"?WeakMap:Map;function Zf(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){so||(so=!0,va=r),la(e,t)},n}function qf(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){la(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){la(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dg.bind(null,e,t,n),t.then(e,e))}function Uu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var q0=wt.ReactCurrentOwner,Ce=!1;function we(e,t,n,r){t.child=e===null?Ef(t,null,n,r):Gn(t,e.child,n,r)}function $u(e,t,n,r,i){n=n.render;var o=t.ref;return Bn(t,i),r=hl(e,t,n,r,o,i),n=ml(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(G&&n&&nl(t),t.flags|=1,we(e,t,r,i),t.child)}function Wu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Cl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Jf(e,t,o,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(s,r)&&e.ref===t.ref)return vt(e,t,i)}return t.flags|=1,e=It(o,r),e.ref=t.ref,e.return=t,t.child=e}function Jf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,vt(e,t,i)}return ua(e,t,n,r,i)}function ep(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Ln,Ae),Ae|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Ln,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(Ln,Ae),Ae|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(Ln,Ae),Ae|=r;return we(e,t,i,n),t.child}function tp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ua(e,t,n,r,i){var o=Ee(n)?cn:ye.current;return o=$n(t,o),Bn(t,i),n=hl(e,t,n,r,o,i),r=ml(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(G&&r&&nl(t),t.flags|=1,we(e,t,n,i),t.child)}function Gu(e,t,n,r,i){if(Ee(n)){var o=!0;Xi(t)}else o=!1;if(Bn(t,i),t.stateNode===null)zi(e,t),Xf(t,n,r),aa(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Ee(n)?cn:ye.current,u=$n(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ou(t,s,r,u),Ct=!1;var p=t.memoizedState;s.state=p,to(t,r,s,i),l=t.memoizedState,a!==r||p!==l||Te.current||Ct?(typeof c=="function"&&(sa(t,n,c,r),l=t.memoizedState),(a=Ct||bu(t,n,a,r,p,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Mf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),s.props=u,f=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=We(l):(l=Ee(n)?cn:ye.current,l=$n(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Ou(t,s,r,l),Ct=!1,p=t.memoizedState,s.state=p,to(t,r,s,i);var v=t.memoizedState;a!==f||p!==v||Te.current||Ct?(typeof y=="function"&&(sa(t,n,y,r),v=t.memoizedState),(u=Ct||bu(t,n,u,r,p,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ca(e,t,n,r,o,i)}function ca(e,t,n,r,i,o){tp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Au(t,n,!1),vt(e,t,o);r=t.stateNode,q0.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Gn(t,e.child,null,o),t.child=Gn(t,null,a,o)):we(e,t,a,o),t.memoizedState=r.state,i&&Au(t,n,!0),t.child}function np(e){var t=e.stateNode;t.pendingContext?Vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vu(e,t.context,!1),cl(e,t.containerInfo)}function Ku(e,t,n,r,i){return Wn(),il(i),t.flags|=256,we(e,t,n,r),t.child}var da={dehydrated:null,treeContext:null,retryLane:0};function fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function rp(e,t,n){var r=t.pendingProps,i=K.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(K,i&1),e===null)return ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ao(s,r,0,null),e=ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=fa(n),t.memoizedState=da,e):vl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return J0(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=It(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=It(a,o):(o=ln(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?fa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=da,r}return o=e.child,e=o.sibling,r=It(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vl(e,t){return t=Ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vi(e,t,n,r){return r!==null&&il(r),Gn(t,e.child,null,n),e=vl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function J0(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=fs(Error(S(422))),vi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ao({mode:"visible",children:r.children},i,0,null),o=ln(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Gn(t,e.child,null,s),t.child.memoizedState=fa(s),t.memoizedState=da,o);if(!(t.mode&1))return vi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=fs(o,r,void 0),vi(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ce||a){if(r=le,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yt(e,i),qe(r,e,i,-1))}return Pl(),r=fs(Error(S(421))),vi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Le=zt(i.nextSibling),De=t,G=!0,Xe=null,e!==null&&(Be[Ue++]=ut,Be[Ue++]=ct,Be[Ue++]=dn,ut=e.id,ct=e.overflow,dn=t),t=vl(t,r.children),t.flags|=4096,t)}function Qu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oa(e.return,t,n)}function ps(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ip(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(we(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qu(e,n,t);else if(e.tag===19)Qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ps(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ps(t,!0,n,null,o);break;case"together":ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=It(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=It(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function eg(e,t,n){switch(t.tag){case 3:np(t),Wn();break;case 5:Vf(t);break;case 1:Ee(t.type)&&Xi(t);break;case 4:cl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?rp(e,t,n):(B(K,K.current&1),e=vt(e,t,n),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ip(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,ep(e,t,n)}return vt(e,t,n)}var op,pa,sp,ap;op=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pa=function(){};sp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,on(ot.current);var o=null;switch(n){case"input":i=Rs(e,i),r=Rs(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=Is(e,i),r=Is(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qi)}Os(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&U("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ap=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tg(e,t,n){var r=t.pendingProps;switch(rl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ee(t.type)&&Yi(),he(t),null;case 3:return r=t.stateNode,Kn(),H(Te),H(ye),fl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(ka(Xe),Xe=null))),pa(e,t),he(t),null;case 5:dl(t);var i=on(Br.current);if(n=t.type,e!==null&&t.stateNode!=null)sp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return he(t),null}if(e=on(ot.current),gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[rt]=t,r[br]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)U(hr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":ru(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":ou(r,o),U("invalid",r)}Os(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",""+a]):Mr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&U("scroll",r)}switch(n){case"input":ai(r),iu(r,o,!0);break;case"textarea":ai(r),su(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[rt]=t,e[br]=r,op(e,t,!1,!1),t.stateNode=e;e:{switch(s=Bs(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)U(hr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":ru(e,r),i=Rs(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),U("invalid",e);break;case"textarea":ou(e,r),i=Is(e,r),U("invalid",e);break;default:i=r}Os(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?_d(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vr(e,l):typeof l=="number"&&Vr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&U("scroll",e):l!=null&&Ua(e,o,l,s))}switch(n){case"input":ai(e),iu(e,r,!1);break;case"textarea":ai(e),su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?_n(e,!!r.multiple,o,!1):r.defaultValue!=null&&_n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)ap(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=on(Br.current),on(ot.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[rt]=t,(o=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=t,t.stateNode=r}return he(t),null;case 13:if(H(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Le!==null&&t.mode&1&&!(t.flags&128))Cf(),Wn(),t.flags|=98560,o=!1;else if(o=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[rt]=t}else Wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else Xe!==null&&(ka(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ie===0&&(ie=3):Pl())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Kn(),pa(e,t),e===null&&_r(t.stateNode.containerInfo),he(t),null;case 10:return al(t.type._context),he(t),null;case 17:return Ee(t.type)&&Yi(),he(t),null;case 19:if(H(K),o=t.memoizedState,o===null)return he(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ar(o,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=no(e),s!==null){for(t.flags|=128,ar(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Yn&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304)}else{if(!r)if(e=no(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!G)return he(t),null}else 2*J()-o.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=K.current,B(K,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return jl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function ng(e,t){switch(rl(t),t.tag){case 1:return Ee(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),H(Te),H(ye),fl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return dl(t),null;case 13:if(H(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(K),null;case 4:return Kn(),null;case 10:return al(t.type._context),null;case 22:case 23:return jl(),null;case 24:return null;default:return null}}var xi=!1,ge=!1,rg=typeof WeakSet=="function"?WeakSet:Set,N=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function ha(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Yu=!1;function ig(e,t){if(Zs=Wi,e=ff(),tl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++c===r&&(l=s),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qs={focusedElem:e,selectionRange:n},Wi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,C=v.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Qe(t.type,x),C);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){Z(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return v=Yu,Yu=!1,v}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ha(t,n,o)}i=i.next}while(i!==r)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lp(e){var t=e.alternate;t!==null&&(e.alternate=null,lp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[br],delete t[ta],delete t[O0],delete t[B0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function up(e){return e.tag===5||e.tag===3||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qi));else if(r!==4&&(e=e.child,e!==null))for(ga(e,t,n),e=e.sibling;e!==null;)ga(e,t,n),e=e.sibling}function ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ya(e,t,n),e=e.sibling;e!==null;)ya(e,t,n),e=e.sibling}var ce=null,Ye=!1;function St(e,t,n){for(n=n.child;n!==null;)cp(e,t,n),n=n.sibling}function cp(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:ge||An(n,t);case 6:var r=ce,i=Ye;ce=null,St(e,t,n),ce=r,Ye=i,ce!==null&&(Ye?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ye?(e=ce,n=n.stateNode,e.nodeType===8?ss(e.parentNode,n):e.nodeType===1&&ss(e,n),zr(e)):ss(ce,n.stateNode));break;case 4:r=ce,i=Ye,ce=n.stateNode.containerInfo,Ye=!0,St(e,t,n),ce=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ha(n,t,s),i=i.next}while(i!==r)}St(e,t,n);break;case 1:if(!ge&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,St(e,t,n),ge=r):St(e,t,n);break;default:St(e,t,n)}}function Zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rg),t.forEach(function(r){var i=pg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Ye=!1;break e;case 3:ce=a.stateNode.containerInfo,Ye=!0;break e;case 4:ce=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(ce===null)throw Error(S(160));cp(o,s,i),ce=null,Ye=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dp(t,e),t=t.sibling}function dp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),tt(e),r&4){try{Sr(3,e,e.return),Mo(3,e)}catch(x){Z(e,e.return,x)}try{Sr(5,e,e.return)}catch(x){Z(e,e.return,x)}}break;case 1:Ke(t,e),tt(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(Ke(t,e),tt(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{Vr(i,"")}catch(x){Z(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ld(i,o),Bs(a,s);var u=Bs(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?_d(i,f):c==="dangerouslySetInnerHTML"?Rd(i,f):c==="children"?Vr(i,f):Ua(i,c,f,u)}switch(a){case"input":Fs(i,o);break;case"textarea":Dd(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?_n(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?_n(i,!!o.multiple,o.defaultValue,!0):_n(i,!!o.multiple,o.multiple?[]:"",!1))}i[br]=o}catch(x){Z(e,e.return,x)}}break;case 6:if(Ke(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Z(e,e.return,x)}}break;case 3:if(Ke(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zr(t.containerInfo)}catch(x){Z(e,e.return,x)}break;case 4:Ke(t,e),tt(e);break;case 13:Ke(t,e),tt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(kl=J())),r&4&&Zu(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||c,Ke(t,e),ge=u):Ke(t,e),tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(f=N=c;N!==null;){switch(p=N,y=p.child,p.tag){case 0:case 11:case 14:case 15:Sr(4,p,p.return);break;case 1:An(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Z(r,n,x)}}break;case 5:An(p,p.return);break;case 22:if(p.memoizedState!==null){Ju(f);continue}}y!==null?(y.return=p,N=y):Ju(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fd("display",s))}catch(x){Z(e,e.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Z(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ke(t,e),tt(e),r&4&&Zu(e);break;case 21:break;default:Ke(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(up(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vr(i,""),r.flags&=-33);var o=Xu(e);ya(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Xu(e);ga(e,a,s);break;default:throw Error(S(161))}}catch(l){Z(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function og(e,t,n){N=e,fp(e)}function fp(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||xi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ge;a=xi;var u=ge;if(xi=s,(ge=l)&&!u)for(N=i;N!==null;)s=N,l=s.child,s.tag===22&&s.memoizedState!==null?ec(i):l!==null?(l.return=s,N=l):ec(i);for(;o!==null;)N=o,fp(o),o=o.sibling;N=i,xi=a,ge=u}qu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):qu(e)}}function qu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&zr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ge||t.flags&512&&ma(t)}catch(p){Z(t,t.return,p)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Ju(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function ec(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mo(4,t)}catch(l){Z(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Z(t,i,l)}}var o=t.return;try{ma(t)}catch(l){Z(t,o,l)}break;case 5:var s=t.return;try{ma(t)}catch(l){Z(t,s,l)}}}catch(l){Z(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var sg=Math.ceil,oo=wt.ReactCurrentDispatcher,xl=wt.ReactCurrentOwner,$e=wt.ReactCurrentBatchConfig,I=0,le=null,ne=null,de=0,Ae=0,Ln=Wt(0),ie=0,Wr=null,pn=0,Vo=0,wl=0,jr=null,Pe=null,kl=0,Yn=1/0,at=null,so=!1,va=null,Ft=null,wi=!1,Vt=null,ao=0,Pr=0,xa=null,Ri=-1,Fi=0;function ke(){return I&6?J():Ri!==-1?Ri:Ri=J()}function _t(e){return e.mode&1?I&2&&de!==0?de&-de:H0.transition!==null?(Fi===0&&(Fi=Yd()),Fi):(e=O,e!==0||(e=window.event,e=e===void 0?16:nf(e.type)),e):1}function qe(e,t,n,r){if(50<Pr)throw Pr=0,xa=null,Error(S(185));Xr(e,n,r),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(Vo|=n),ie===4&&Nt(e,de)),Ne(e,r),n===1&&I===0&&!(t.mode&1)&&(Yn=J()+500,To&&Gt()))}function Ne(e,t){var n=e.callbackNode;Hm(e,t);var r=$i(e,e===le?de:0);if(r===0)n!==null&&uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uu(n),t===1)e.tag===0?U0(tc.bind(null,e)):Sf(tc.bind(null,e)),I0(function(){!(I&6)&&Gt()}),n=null;else{switch(Xd(r)){case 1:n=Ka;break;case 4:n=Kd;break;case 16:n=Hi;break;case 536870912:n=Qd;break;default:n=Hi}n=wp(n,pp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pp(e,t){if(Ri=-1,Fi=0,I&6)throw Error(S(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=$i(e,e===le?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lo(e,r);else{t=r;var i=I;I|=2;var o=mp();(le!==e||de!==t)&&(at=null,Yn=J()+500,an(e,t));do try{ug();break}catch(a){hp(e,a)}while(!0);sl(),oo.current=o,I=i,ne!==null?t=0:(le=null,de=0,t=ie)}if(t!==0){if(t===2&&(i=Gs(e),i!==0&&(r=i,t=wa(e,i))),t===1)throw n=Wr,an(e,0),Nt(e,r),Ne(e,J()),n;if(t===6)Nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!ag(i)&&(t=lo(e,r),t===2&&(o=Gs(e),o!==0&&(r=o,t=wa(e,o))),t===1))throw n=Wr,an(e,0),Nt(e,r),Ne(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Jt(e,Pe,at);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=kl+500-J(),10<t)){if($i(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ea(Jt.bind(null,e,Pe,at),t);break}Jt(e,Pe,at);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ze(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sg(r/1960))-r,10<r){e.timeoutHandle=ea(Jt.bind(null,e,Pe,at),r);break}Jt(e,Pe,at);break;case 5:Jt(e,Pe,at);break;default:throw Error(S(329))}}}return Ne(e,J()),e.callbackNode===n?pp.bind(null,e):null}function wa(e,t){var n=jr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=lo(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&ka(t)),e}function ka(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function ag(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Je(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~wl,t&=~Vo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function tc(e){if(I&6)throw Error(S(327));Un();var t=$i(e,0);if(!(t&1))return Ne(e,J()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=Gs(e);r!==0&&(t=r,n=wa(e,r))}if(n===1)throw n=Wr,an(e,0),Nt(e,t),Ne(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Pe,at),Ne(e,J()),null}function Sl(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Yn=J()+500,To&&Gt())}}function hn(e){Vt!==null&&Vt.tag===0&&!(I&6)&&Un();var t=I;I|=1;var n=$e.transition,r=O;try{if($e.transition=null,O=1,e)return e()}finally{O=r,$e.transition=n,I=t,!(I&6)&&Gt()}}function jl(){Ae=Ln.current,H(Ln)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_0(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(rl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:Kn(),H(Te),H(ye),fl();break;case 5:dl(r);break;case 4:Kn();break;case 13:H(K);break;case 19:H(K);break;case 10:al(r.type._context);break;case 22:case 23:jl()}n=n.return}if(le=e,ne=e=It(e.current,null),de=Ae=t,ie=0,Wr=null,wl=Vo=pn=0,Pe=jr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}rn=null}return e}function hp(e,t){do{var n=ne;try{if(sl(),Li.current=io,ro){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ro=!1}if(fn=0,ae=re=Y=null,kr=!1,Ur=0,xl.current=null,n===null||n.return===null){ie=1,Wr=t,ne=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=de,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Uu(s);if(y!==null){y.flags&=-257,Hu(y,s,a,o,t),y.mode&1&&Bu(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Bu(o,u,t),Pl();break e}l=Error(S(426))}}else if(G&&a.mode&1){var C=Uu(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Hu(C,s,a,o,t),il(Qn(l,a));break e}}o=l=Qn(l,a),ie!==4&&(ie=2),jr===null?jr=[o]:jr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Zf(o,l,t);Ru(o,g);break e;case 1:a=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ft===null||!Ft.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=qf(o,a,t);Ru(o,w);break e}}o=o.return}while(o!==null)}yp(n)}catch(k){t=k,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function mp(){var e=oo.current;return oo.current=io,e===null?io:e}function Pl(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(pn&268435455)&&!(Vo&268435455)||Nt(le,de)}function lo(e,t){var n=I;I|=2;var r=mp();(le!==e||de!==t)&&(at=null,an(e,t));do try{lg();break}catch(i){hp(e,i)}while(!0);if(sl(),I=n,oo.current=r,ne!==null)throw Error(S(261));return le=null,de=0,ie}function lg(){for(;ne!==null;)gp(ne)}function ug(){for(;ne!==null&&!zm();)gp(ne)}function gp(e){var t=xp(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?yp(e):ne=t,xl.current=null}function yp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ng(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(n=tg(n,t,Ae),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function Jt(e,t,n){var r=O,i=$e.transition;try{$e.transition=null,O=1,cg(e,t,n,r)}finally{$e.transition=i,O=r}return null}function cg(e,t,n,r){do Un();while(Vt!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if($m(e,o),e===le&&(ne=le=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wi||(wi=!0,wp(Hi,function(){return Un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var s=O;O=1;var a=I;I|=4,xl.current=null,ig(e,n),dp(n,e),V0(qs),Wi=!!Zs,qs=Zs=null,e.current=n,og(n),Rm(),I=a,O=s,$e.transition=o}else e.current=n;if(wi&&(wi=!1,Vt=e,ao=i),o=e.pendingLanes,o===0&&(Ft=null),Im(n.stateNode),Ne(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(so)throw so=!1,e=va,va=null,e;return ao&1&&e.tag!==0&&Un(),o=e.pendingLanes,o&1?e===xa?Pr++:(Pr=0,xa=e):Pr=0,Gt(),null}function Un(){if(Vt!==null){var e=Xd(ao),t=$e.transition,n=O;try{if($e.transition=null,O=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,ao=0,I&6)throw Error(S(331));var i=I;for(I|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Sr(8,c,o)}var f=c.child;if(f!==null)f.return=c,N=f;else for(;N!==null;){c=N;var p=c.sibling,y=c.return;if(lp(c),c===u){N=null;break}if(p!==null){p.return=y,N=p;break}N=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,N=g;break e}N=o.return}}var h=e.current;for(N=h;N!==null;){s=N;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,N=m;else e:for(s=h;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mo(9,a)}}catch(k){Z(a,a.return,k)}if(a===s){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if(I=i,Gt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{O=n,$e.transition=t}}return!1}function nc(e,t,n){t=Qn(n,t),t=Zf(e,t,1),e=Rt(e,t,1),t=ke(),e!==null&&(Xr(e,1,t),Ne(e,t))}function Z(e,t,n){if(e.tag===3)nc(e,e,n);else for(;t!==null;){if(t.tag===3){nc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Qn(n,e),e=qf(t,e,1),t=Rt(t,e,1),e=ke(),t!==null&&(Xr(t,1,e),Ne(t,e));break}}t=t.return}}function dg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(de&n)===n&&(ie===4||ie===3&&(de&130023424)===de&&500>J()-kl?an(e,0):wl|=n),Ne(e,t)}function vp(e,t){t===0&&(e.mode&1?(t=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):t=1);var n=ke();e=yt(e,t),e!==null&&(Xr(e,t,n),Ne(e,n))}function fg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vp(e,n)}function pg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),vp(e,n)}var xp;xp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,eg(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,G&&t.flags&1048576&&jf(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=$n(t,ye.current);Bn(t,n),i=hl(null,t,r,e,i,n);var o=ml();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(o=!0,Xi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ul(t),i.updater=No,t.stateNode=i,i._reactInternals=t,aa(t,r,e,n),t=ca(null,t,r,!0,o,n)):(t.tag=0,G&&o&&nl(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=mg(r),e=Qe(r,e),i){case 0:t=ua(null,t,r,e,n);break e;case 1:t=Gu(null,t,r,e,n);break e;case 11:t=$u(null,t,r,e,n);break e;case 14:t=Wu(null,t,r,Qe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),ua(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Gu(e,t,r,i,n);case 3:e:{if(np(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Mf(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qn(Error(S(423)),t),t=Ku(e,t,r,n,i);break e}else if(r!==i){i=Qn(Error(S(424)),t),t=Ku(e,t,r,n,i);break e}else for(Le=zt(t.stateNode.containerInfo.firstChild),De=t,G=!0,Xe=null,n=Ef(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===i){t=vt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Vf(t),e===null&&ia(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Js(r,i)?s=null:o!==null&&Js(r,o)&&(t.flags|=32),tp(e,t),we(e,t,s,n),t.child;case 6:return e===null&&ia(t),null;case 13:return rp(e,t,n);case 4:return cl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),$u(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,B(Ji,r._currentValue),r._currentValue=s,o!==null)if(Je(o.value,s)){if(o.children===i.children&&!Te.current){t=vt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ft(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),oa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),oa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Bn(t,n),i=We(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),Wu(e,t,r,i,n);case 15:return Jf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),zi(e,t),t.tag=1,Ee(r)?(e=!0,Xi(t)):e=!1,Bn(t,n),Xf(t,r,i),aa(t,r,i,n),ca(null,t,r,!0,e,n);case 19:return ip(e,t,n);case 22:return ep(e,t,n)}throw Error(S(156,t.tag))};function wp(e,t){return Gd(e,t)}function hg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new hg(e,t,n,r)}function Cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mg(e){if(typeof e=="function")return Cl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$a)return 11;if(e===Wa)return 14}return 2}function It(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Cl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sn:return ln(n.children,i,o,t);case Ha:s=8,i|=8;break;case As:return e=He(12,n,t,i|2),e.elementType=As,e.lanes=o,e;case Ls:return e=He(13,n,t,i),e.elementType=Ls,e.lanes=o,e;case Ds:return e=He(19,n,t,i),e.elementType=Ds,e.lanes=o,e;case Md:return Ao(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ed:s=10;break e;case Nd:s=9;break e;case $a:s=11;break e;case Wa:s=14;break e;case Pt:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=He(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ln(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Ao(e,t,n,r){return e=He(22,e,r,t),e.elementType=Md,e.lanes=n,e.stateNode={isHidden:!1},e}function hs(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tl(e,t,n,r,i,o,s,a,l){return e=new gg(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ul(o),e}function yg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kp(e){if(!e)return Bt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ee(n))return kf(e,n,t)}return t}function Sp(e,t,n,r,i,o,s,a,l){return e=Tl(n,r,!0,e,i,o,s,a,l),e.context=kp(null),n=e.current,r=ke(),i=_t(n),o=ft(r,i),o.callback=t??null,Rt(n,o,i),e.current.lanes=i,Xr(e,i,r),Ne(e,r),e}function Lo(e,t,n,r){var i=t.current,o=ke(),s=_t(i);return n=kp(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(i,t,s),e!==null&&(qe(e,i,s,o),Ai(e,i,s)),s}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function El(e,t){rc(e,t),(e=e.alternate)&&rc(e,t)}function vg(){return null}var jp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nl(e){this._internalRoot=e}Do.prototype.render=Nl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Lo(e,t,null,null)};Do.prototype.unmount=Nl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){Lo(null,e,null,null)}),t[gt]=null}};function Do(e){this._internalRoot=e}Do.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&tf(e)}};function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function xg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=uo(s);o.call(u)}}var s=Sp(t,r,e,0,null,!1,!1,"",ic);return e._reactRootContainer=s,e[gt]=s.current,_r(e.nodeType===8?e.parentNode:e),hn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=uo(l);a.call(u)}}var l=Tl(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=l,e[gt]=l.current,_r(e.nodeType===8?e.parentNode:e),hn(function(){Lo(t,l,n,r)}),l}function Ro(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=uo(s);a.call(l)}}Lo(t,s,e,i)}else s=xg(n,t,e,i,r);return uo(s)}Zd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(Qa(t,n|1),Ne(t,J()),!(I&6)&&(Yn=J()+500,Gt()))}break;case 13:hn(function(){var r=yt(e,1);if(r!==null){var i=ke();qe(r,e,1,i)}}),El(e,1)}};Ya=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=ke();qe(t,e,134217728,n)}El(e,134217728)}};qd=function(e){if(e.tag===13){var t=_t(e),n=yt(e,t);if(n!==null){var r=ke();qe(n,e,t,r)}El(e,t)}};Jd=function(){return O};ef=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Hs=function(e,t,n){switch(t){case"input":if(Fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Co(r);if(!i)throw Error(S(90));Ad(r),Fs(r,i)}}}break;case"textarea":Dd(e,n);break;case"select":t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}};Od=Sl;Bd=hn;var wg={usingClientEntryPoint:!1,Events:[qr,Tn,Co,Id,bd,Sl]},lr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kg={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$d(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||vg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{ko=ki.inject(kg),it=ki}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wg;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ml(t))throw Error(S(200));return yg(e,t,null,n)};Fe.createRoot=function(e,t){if(!Ml(e))throw Error(S(299));var n=!1,r="",i=jp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tl(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,_r(e.nodeType===8?e.parentNode:e),new Nl(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=$d(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return hn(e)};Fe.hydrate=function(e,t,n){if(!zo(t))throw Error(S(200));return Ro(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!Ml(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=jp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Sp(t,null,e,1,n??null,i,!1,o,s),e[gt]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Do(t)};Fe.render=function(e,t,n){if(!zo(t))throw Error(S(200));return Ro(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!zo(e))throw Error(S(40));return e._reactRootContainer?(hn(function(){Ro(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Fe.unstable_batchedUpdates=Sl;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ro(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function Pp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pp)}catch(e){console.error(e)}}Pp(),jd.exports=Fe;var Sg=jd.exports,oc=Sg;Ms.createRoot=oc.createRoot,Ms.hydrateRoot=oc.hydrateRoot;const Cp=A.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Fo=A.createContext({}),Vl=A.createContext(null),_o=typeof document<"u",jg=_o?A.useLayoutEffect:A.useEffect,Tp=A.createContext({strict:!1}),Al=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Pg="framerAppearId",Ep="data-"+Al(Pg);function Cg(e,t,n,r){const{visualElement:i}=A.useContext(Fo),o=A.useContext(Tp),s=A.useContext(Vl),a=A.useContext(Cp).reducedMotion,l=A.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;A.useInsertionEffect(()=>{u&&u.update(n,s)});const c=A.useRef(!!(n[Ep]&&!window.HandoffComplete));return jg(()=>{u&&(u.render(),c.current&&u.animationState&&u.animationState.animateChanges())}),A.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,window.HandoffComplete=!0))}),u}function Dn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Tg(e,t,n){return A.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Dn(n)&&(n.current=r))},[t])}function Gr(e){return typeof e=="string"||Array.isArray(e)}function Io(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Ll=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dl=["initial",...Ll];function bo(e){return Io(e.animate)||Dl.some(t=>Gr(e[t]))}function Np(e){return!!(bo(e)||e.variants)}function Eg(e,t){if(bo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Gr(n)?n:void 0,animate:Gr(r)?r:void 0}}return e.inherit!==!1?t:{}}function Ng(e){const{initial:t,animate:n}=Eg(e,A.useContext(Fo));return A.useMemo(()=>({initial:t,animate:n}),[sc(t),sc(n)])}function sc(e){return Array.isArray(e)?e.join(" "):e}const ac={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Kr={};for(const e in ac)Kr[e]={isEnabled:t=>ac[e].some(n=>!!t[n])};function Mg(e){for(const t in e)Kr[t]={...Kr[t],...e[t]}}const Mp=A.createContext({}),Vp=A.createContext({}),Vg=Symbol.for("motionComponentSymbol");function Ag({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Mg(e);function o(a,l){let u;const c={...A.useContext(Cp),...a,layoutId:Lg(a)},{isStatic:f}=c,p=Ng(a),y=r(a,f);if(!f&&_o){p.visualElement=Cg(i,y,c,t);const v=A.useContext(Vp),x=A.useContext(Tp).strict;p.visualElement&&(u=p.visualElement.loadFeatures(c,x,e,v))}return A.createElement(Fo.Provider,{value:p},u&&p.visualElement?A.createElement(u,{visualElement:p.visualElement,...c}):null,n(i,a,Tg(y,p.visualElement,l),y,f,p.visualElement))}const s=A.forwardRef(o);return s[Vg]=i,s}function Lg({layoutId:e}){const t=A.useContext(Mp).id;return t&&e!==void 0?t+"-"+e:e}function Dg(e){function t(r,i={}){return Ag(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const zg=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function zl(e){return typeof e!="string"||e.includes("-")?!1:!!(zg.indexOf(e)>-1||/[A-Z]/.test(e))}const co={};function Rg(e){Object.assign(co,e)}const ei=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],yn=new Set(ei);function Ap(e,{layout:t,layoutId:n}){return yn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!co[e]||e==="opacity")}const Me=e=>!!(e&&e.getVelocity),Fg={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_g=ei.length;function Ig(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<_g;s++){const a=ei[s];if(e[a]!==void 0){const l=Fg[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const Lp=e=>t=>typeof t=="string"&&t.startsWith(e),Dp=Lp("--"),Sa=Lp("var(--"),bg=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Og=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ut=(e,t,n)=>Math.min(Math.max(n,e),t),vn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Cr={...vn,transform:e=>Ut(0,1,e)},Si={...vn,default:1},Tr=e=>Math.round(e*1e5)/1e5,Oo=/(-)?([\d]*\.?[\d])+/g,zp=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Bg=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ti(e){return typeof e=="string"}const ni=e=>({test:t=>ti(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),jt=ni("deg"),st=ni("%"),M=ni("px"),Ug=ni("vh"),Hg=ni("vw"),lc={...st,parse:e=>st.parse(e)/100,transform:e=>st.transform(e*100)},uc={...vn,transform:Math.round},Rp={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,radius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,size:M,top:M,right:M,bottom:M,left:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,rotate:jt,rotateX:jt,rotateY:jt,rotateZ:jt,scale:Si,scaleX:Si,scaleY:Si,scaleZ:Si,skew:jt,skewX:jt,skewY:jt,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:Cr,originX:lc,originY:lc,originZ:M,zIndex:uc,fillOpacity:Cr,strokeOpacity:Cr,numOctaves:uc};function Rl(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const f in t){const p=t[f];if(Dp(f)){o[f]=p;continue}const y=Rp[f],v=Og(p,y);if(yn.has(f)){if(l=!0,s[f]=v,!c)continue;p!==(y.default||0)&&(c=!1)}else f.startsWith("origin")?(u=!0,a[f]=v):i[f]=v}if(t.transform||(l||r?i.transform=Ig(e.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:p="50%",originZ:y=0}=a;i.transformOrigin=`${f} ${p} ${y}`}}const Fl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Fp(e,t,n){for(const r in t)!Me(t[r])&&!Ap(r,n)&&(e[r]=t[r])}function $g({transformTemplate:e},t,n){return A.useMemo(()=>{const r=Fl();return Rl(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Wg(e,t,n){const r=e.style||{},i={};return Fp(i,r,e),Object.assign(i,$g(e,t,n)),e.transformValues?e.transformValues(i):i}function Gg(e,t,n){const r={},i=Wg(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const Kg=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function fo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Kg.has(e)}let _p=e=>!fo(e);function Qg(e){e&&(_p=t=>t.startsWith("on")?!fo(t):e(t))}try{Qg(require("@emotion/is-prop-valid").default)}catch{}function Yg(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(_p(i)||n===!0&&fo(i)||!t&&!fo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function cc(e,t,n){return typeof e=="string"?e:M.transform(t+n*e)}function Xg(e,t,n){const r=cc(t,e.x,e.width),i=cc(n,e.y,e.height);return`${r} ${i}`}const Zg={offset:"stroke-dashoffset",array:"stroke-dasharray"},qg={offset:"strokeDashoffset",array:"strokeDasharray"};function Jg(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?Zg:qg;e[o.offset]=M.transform(-r);const s=M.transform(t),a=M.transform(n);e[o.array]=`${s} ${a}`}function _l(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,f,p){if(Rl(e,u,c,p),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:v,dimensions:x}=e;y.transform&&(x&&(v.transform=y.transform),delete y.transform),x&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=Xg(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(y.x=t),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),s!==void 0&&Jg(y,s,a,l,!1)}const Ip=()=>({...Fl(),attrs:{}}),Il=e=>typeof e=="string"&&e.toLowerCase()==="svg";function ey(e,t,n,r){const i=A.useMemo(()=>{const o=Ip();return _l(o,t,{enableHardwareAcceleration:!1},Il(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Fp(o,e.style,e),i.style={...o,...i.style}}return i}function ty(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(zl(n)?ey:Gg)(r,o,s,n),c={...Yg(r,typeof n=="string",e),...l,ref:i},{children:f}=r,p=A.useMemo(()=>Me(f)?f.get():f,[f]);return A.createElement(n,{...c,children:p})}}function bp(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Op=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bp(e,t,n,r){bp(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Op.has(i)?i:Al(i),t.attrs[i])}function bl(e,t){const{style:n}=e,r={};for(const i in n)(Me(n[i])||t.style&&Me(t.style[i])||Ap(i,e))&&(r[i]=n[i]);return r}function Up(e,t){const n=bl(e,t);for(const r in e)if(Me(e[r])||Me(t[r])){const i=ei.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Ol(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function ny(e){const t=A.useRef(null);return t.current===null&&(t.current=e()),t.current}const po=e=>Array.isArray(e),ry=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),iy=e=>po(e)?e[e.length-1]||0:e;function Ii(e){const t=Me(e)?e.get():e;return ry(t)?t.toValue():t}function oy({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:sy(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const Hp=e=>(t,n)=>{const r=A.useContext(Fo),i=A.useContext(Vl),o=()=>oy(e,t,r,i);return n?o():ny(o)};function sy(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=Ii(o[p]);let{initial:s,animate:a}=e;const l=bo(e),u=Np(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const f=c?a:s;return f&&typeof f!="boolean"&&!Io(f)&&(Array.isArray(f)?f:[f]).forEach(y=>{const v=Ol(e,y);if(!v)return;const{transitionEnd:x,transition:C,...g}=v;for(const h in g){let m=g[h];if(Array.isArray(m)){const w=c?m.length-1:0;m=m[w]}m!==null&&(i[h]=m)}for(const h in x)i[h]=x[h]}),i}const ee=e=>e;class dc{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function ay(e){let t=new dc,n=new dc,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const f=c&&i,p=f?t:n;return u&&s.add(l),p.add(l)&&f&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const c=t.order[u];c(l),s.has(c)&&(a.schedule(c),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const ji=["prepare","read","update","preRender","render","postRender"],ly=40;function uy(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=ji.reduce((f,p)=>(f[p]=ay(()=>n=!0),f),{}),s=f=>o[f].process(i),a=()=>{const f=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(f-i.timestamp,ly),1),i.timestamp=f,i.isProcessing=!0,ji.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:ji.reduce((f,p)=>{const y=o[p];return f[p]=(v,x=!1,C=!1)=>(n||l(),y.schedule(v,x,C)),f},{}),cancel:f=>ji.forEach(p=>o[p].cancel(f)),state:i,steps:o}}const{schedule:$,cancel:xt,state:me,steps:gs}=uy(typeof requestAnimationFrame<"u"?requestAnimationFrame:ee,!0),cy={useVisualState:Hp({scrapeMotionValuesFromProps:Up,createRenderState:Ip,onMount:(e,t,{renderState:n,latestValues:r})=>{$.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),$.render(()=>{_l(n,r,{enableHardwareAcceleration:!1},Il(t.tagName),e.transformTemplate),Bp(t,n)})}})},dy={useVisualState:Hp({scrapeMotionValuesFromProps:bl,createRenderState:Fl})};function fy(e,{forwardMotionProps:t=!1},n,r){return{...zl(e)?cy:dy,preloadedFeatures:n,useRender:ty(t),createVisualElement:r,Component:e}}function dt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const $p=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Bo(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const py=e=>t=>$p(t)&&e(t,Bo(t));function pt(e,t,n,r){return dt(e,t,py(n),r)}const hy=(e,t)=>n=>t(e(n)),bt=(...e)=>e.reduce(hy);function Wp(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const fc=Wp("dragHorizontal"),pc=Wp("dragVertical");function Gp(e){let t=!1;if(e==="y")t=pc();else if(e==="x")t=fc();else{const n=fc(),r=pc();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Kp(){const e=Gp(!0);return e?(e(),!1):!0}class Kt{constructor(t){this.isMounted=!1,this.node=t}update(){}}function hc(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||Kp())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&$.update(()=>a[r](o,s))};return pt(e.current,n,i,{passive:!e.getProps()[r]})}class my extends Kt{mount(){this.unmount=bt(hc(this.node,!0),hc(this.node,!1))}unmount(){}}class gy extends Kt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bt(dt(this.node.current,"focus",()=>this.onFocus()),dt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Qp=(e,t)=>t?e===t?!0:Qp(e,t.parentElement):!1;function ys(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Bo(n))}class yy extends Kt{constructor(){super(...arguments),this.removeStartListeners=ee,this.removeEndListeners=ee,this.removeAccessibleListeners=ee,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=pt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:f}=this.node.getProps();$.update(()=>{!f&&!Qp(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=pt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=bt(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||ys("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&$.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=dt(this.node.current,"keyup",s),ys("down",(a,l)=>{this.startPress(a,l)})},n=dt(this.node.current,"keydown",t),r=()=>{this.isPressing&&ys("cancel",(o,s)=>this.cancelPress(o,s))},i=dt(this.node.current,"blur",r);this.removeAccessibleListeners=bt(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&$.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Kp()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&$.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=pt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=dt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=bt(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ja=new WeakMap,vs=new WeakMap,vy=e=>{const t=ja.get(e.target);t&&t(e)},xy=e=>{e.forEach(vy)};function wy({root:e,...t}){const n=e||document;vs.has(n)||vs.set(n,{});const r=vs.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(xy,{root:e,...t})),r[i]}function ky(e,t,n){const r=wy(t);return ja.set(e,n),r.observe(e),()=>{ja.delete(e),r.unobserve(e)}}const Sy={some:0,all:1};class jy extends Kt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Sy[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),p=u?c:f;p&&p(l)};return ky(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Py(t,n))&&this.startObserver()}unmount(){}}function Py({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Cy={inView:{Feature:jy},tap:{Feature:yy},focus:{Feature:gy},hover:{Feature:my}};function Yp(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Ty(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function Ey(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Uo(e,t,n){const r=e.getProps();return Ol(r,t,n!==void 0?n:r.custom,Ty(e),Ey(e))}let Bl=ee;const un=e=>e*1e3,ht=e=>e/1e3,Ny={current:!1},Xp=e=>Array.isArray(e)&&typeof e[0]=="number";function Zp(e){return!!(!e||typeof e=="string"&&qp[e]||Xp(e)||Array.isArray(e)&&e.every(Zp))}const mr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,qp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:mr([0,.65,.55,1]),circOut:mr([.55,0,1,.45]),backIn:mr([.31,.01,.66,-.59]),backOut:mr([.33,1.53,.69,.99])};function Jp(e){if(e)return Xp(e)?mr(e):Array.isArray(e)?e.map(Jp):qp[e]}function My(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=Jp(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function Vy(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const eh=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Ay=1e-7,Ly=12;function Dy(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=eh(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Ay&&++a<Ly);return s}function ri(e,t,n,r){if(e===t&&n===r)return ee;const i=o=>Dy(o,0,1,e,n);return o=>o===0||o===1?o:eh(i(o),t,r)}const zy=ri(.42,0,1,1),Ry=ri(0,0,.58,1),th=ri(.42,0,.58,1),Fy=e=>Array.isArray(e)&&typeof e[0]!="number",nh=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,rh=e=>t=>1-e(1-t),Ul=e=>1-Math.sin(Math.acos(e)),ih=rh(Ul),_y=nh(Ul),oh=ri(.33,1.53,.69,.99),Hl=rh(oh),Iy=nh(Hl),by=e=>(e*=2)<1?.5*Hl(e):.5*(2-Math.pow(2,-10*(e-1))),Oy={linear:ee,easeIn:zy,easeInOut:th,easeOut:Ry,circIn:Ul,circInOut:_y,circOut:ih,backIn:Hl,backInOut:Iy,backOut:oh,anticipate:by},mc=e=>{if(Array.isArray(e)){Bl(e.length===4);const[t,n,r,i]=e;return ri(t,n,r,i)}else if(typeof e=="string")return Oy[e];return e},$l=(e,t)=>n=>!!(ti(n)&&Bg.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),sh=(e,t,n)=>r=>{if(!ti(r))return r;const[i,o,s,a]=r.match(Oo);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},By=e=>Ut(0,255,e),xs={...vn,transform:e=>Math.round(By(e))},sn={test:$l("rgb","red"),parse:sh("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+xs.transform(e)+", "+xs.transform(t)+", "+xs.transform(n)+", "+Tr(Cr.transform(r))+")"};function Uy(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Pa={test:$l("#"),parse:Uy,transform:sn.transform},zn={test:$l("hsl","hue"),parse:sh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+st.transform(Tr(t))+", "+st.transform(Tr(n))+", "+Tr(Cr.transform(r))+")"},xe={test:e=>sn.test(e)||Pa.test(e)||zn.test(e),parse:e=>sn.test(e)?sn.parse(e):zn.test(e)?zn.parse(e):Pa.parse(e),transform:e=>ti(e)?e:e.hasOwnProperty("red")?sn.transform(e):zn.transform(e)},Q=(e,t,n)=>-n*e+n*t+e;function ws(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Hy({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=ws(l,a,e+1/3),o=ws(l,a,e),s=ws(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const ks=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},$y=[Pa,sn,zn],Wy=e=>$y.find(t=>t.test(e));function gc(e){const t=Wy(e);let n=t.parse(e);return t===zn&&(n=Hy(n)),n}const ah=(e,t)=>{const n=gc(e),r=gc(t),i={...n};return o=>(i.red=ks(n.red,r.red,o),i.green=ks(n.green,r.green,o),i.blue=ks(n.blue,r.blue,o),i.alpha=Q(n.alpha,r.alpha,o),sn.transform(i))};function Gy(e){var t,n;return isNaN(e)&&ti(e)&&(((t=e.match(Oo))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(zp))===null||n===void 0?void 0:n.length)||0)>0}const lh={regex:bg,countKey:"Vars",token:"${v}",parse:ee},uh={regex:zp,countKey:"Colors",token:"${c}",parse:xe.parse},ch={regex:Oo,countKey:"Numbers",token:"${n}",parse:vn.parse};function Ss(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function ho(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ss(n,lh),Ss(n,uh),Ss(n,ch),n}function dh(e){return ho(e).values}function fh(e){const{values:t,numColors:n,numVars:r,tokenised:i}=ho(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(lh.token,s[l]):l<r+n?a=a.replace(uh.token,xe.transform(s[l])):a=a.replace(ch.token,Tr(s[l]));return a}}const Ky=e=>typeof e=="number"?0:e;function Qy(e){const t=dh(e);return fh(e)(t.map(Ky))}const Ht={test:Gy,parse:dh,createTransformer:fh,getAnimatableNone:Qy},ph=(e,t)=>n=>`${n>0?t:e}`;function hh(e,t){return typeof e=="number"?n=>Q(e,t,n):xe.test(e)?ah(e,t):e.startsWith("var(")?ph(e,t):gh(e,t)}const mh=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>hh(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},Yy=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=hh(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},gh=(e,t)=>{const n=Ht.createTransformer(t),r=ho(e),i=ho(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?bt(mh(r.values,i.values),n):ph(e,t)},Qr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},yc=(e,t)=>n=>Q(e,t,n);function Xy(e){return typeof e=="number"?yc:typeof e=="string"?xe.test(e)?ah:gh:Array.isArray(e)?mh:typeof e=="object"?Yy:yc}function Zy(e,t,n){const r=[],i=n||Xy(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||ee:t;a=bt(l,a)}r.push(a)}return r}function yh(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Bl(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=Zy(t,r,i),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const f=Qr(e[c],e[c+1],u);return s[c](f)};return n?u=>l(Ut(e[0],e[o-1],u)):l}function qy(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Qr(0,t,r);e.push(Q(n,1,i))}}function Jy(e){const t=[0];return qy(t,e.length-1),t}function ev(e,t){return e.map(n=>n*t)}function tv(e,t){return e.map(()=>t||th).splice(0,e.length-1)}function mo({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Fy(r)?r.map(mc):mc(r),o={done:!1,value:t[0]},s=ev(n&&n.length===t.length?n:Jy(t),e),a=yh(s,t,{ease:Array.isArray(i)?i:tv(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function vh(e,t){return t?e*(1e3/t):0}const nv=5;function xh(e,t,n){const r=Math.max(t-nv,0);return vh(n-e(r),t-r)}const js=.001,rv=.01,iv=10,ov=.05,sv=1;function av({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,s=1-t;s=Ut(ov,sv,s),e=Ut(rv,iv,ht(e)),s<1?(i=u=>{const c=u*s,f=c*e,p=c-n,y=Ca(u,s),v=Math.exp(-f);return js-p/y*v},o=u=>{const f=u*s*e,p=f*n+n,y=Math.pow(s,2)*Math.pow(u,2)*e,v=Math.exp(-f),x=Ca(Math.pow(u,2),s);return(-i(u)+js>0?-1:1)*((p-y)*v)/x}):(i=u=>{const c=Math.exp(-u*e),f=(u-n)*e+1;return-js+c*f},o=u=>{const c=Math.exp(-u*e),f=(n-u)*(e*e);return c*f});const a=5/e,l=uv(i,o,a);if(e=un(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const lv=12;function uv(e,t,n){let r=n;for(let i=1;i<lv;i++)r=r-e(r)/t(r);return r}function Ca(e,t){return e*Math.sqrt(1-t*t)}const cv=["duration","bounce"],dv=["stiffness","damping","mass"];function vc(e,t){return t.some(n=>e[n]!==void 0)}function fv(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!vc(e,dv)&&vc(e,cv)){const n=av(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function wh({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:c,velocity:f,isResolvedFromDuration:p}=fv({...r,velocity:-ht(r.velocity||0)}),y=f||0,v=l/(2*Math.sqrt(a*u)),x=o-i,C=ht(Math.sqrt(a/u)),g=Math.abs(x)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let h;if(v<1){const m=Ca(C,v);h=w=>{const k=Math.exp(-v*C*w);return o-k*((y+v*C*x)/m*Math.sin(m*w)+x*Math.cos(m*w))}}else if(v===1)h=m=>o-Math.exp(-C*m)*(x+(y+C*x)*m);else{const m=C*Math.sqrt(v*v-1);h=w=>{const k=Math.exp(-v*C*w),T=Math.min(m*w,300);return o-k*((y+v*C*x)*Math.sinh(T)+m*x*Math.cosh(T))/m}}return{calculatedDuration:p&&c||null,next:m=>{const w=h(m);if(p)s.done=m>=c;else{let k=y;m!==0&&(v<1?k=xh(h,m,w):k=0);const T=Math.abs(k)<=n,P=Math.abs(o-w)<=t;s.done=T&&P}return s.value=s.done?o:w,s}}}function xc({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=e[0],p={done:!1,value:f},y=j=>a!==void 0&&j<a||l!==void 0&&j>l,v=j=>a===void 0?l:l===void 0||Math.abs(a-j)<Math.abs(l-j)?a:l;let x=n*t;const C=f+x,g=s===void 0?C:s(C);g!==C&&(x=g-f);const h=j=>-x*Math.exp(-j/r),m=j=>g+h(j),w=j=>{const z=h(j),L=m(j);p.done=Math.abs(z)<=u,p.value=p.done?g:L};let k,T;const P=j=>{y(p.value)&&(k=j,T=wh({keyframes:[p.value,v(p.value)],velocity:xh(m,j,p.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:j=>{let z=!1;return!T&&k===void 0&&(z=!0,w(j),P(j)),k!==void 0&&j>k?T.next(j-k):(!z&&w(j),p)}}}const pv=e=>{const t=({timestamp:n})=>e(n);return{start:()=>$.update(t,!0),stop:()=>xt(t),now:()=>me.isProcessing?me.timestamp:performance.now()}},wc=2e4;function kc(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<wc;)t+=n,r=e.next(t);return t>=wc?1/0:t}const hv={decay:xc,inertia:xc,tween:mo,keyframes:mo,spring:wh};function go({autoplay:e=!0,delay:t=0,driver:n=pv,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:f,...p}){let y=1,v=!1,x,C;const g=()=>{C=new Promise(D=>{x=D})};g();let h;const m=hv[i]||mo;let w;m!==mo&&typeof r[0]!="number"&&(w=yh([0,100],r,{clamp:!1}),r=[0,100]);const k=m({...p,keyframes:r});let T;a==="mirror"&&(T=m({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let P="idle",j=null,z=null,L=null;k.calculatedDuration===null&&o&&(k.calculatedDuration=kc(k));const{calculatedDuration:oe}=k;let ue=1/0,ve=1/0;oe!==null&&(ue=oe+s,ve=ue*(o+1)-s);let se=0;const kt=D=>{if(z===null)return;y>0&&(z=Math.min(z,D)),y<0&&(z=Math.min(D-ve/y,z)),j!==null?se=j:se=Math.round(D-z)*y;const W=se-t*(y>=0?1:-1),Qt=y>=0?W<0:W>ve;se=Math.max(W,0),P==="finished"&&j===null&&(se=ve);let et=se,xn=k;if(o){const Ho=Math.min(se,ve)/ue;let ii=Math.floor(Ho),Xt=Ho%1;!Xt&&Ho>=1&&(Xt=1),Xt===1&&ii--,ii=Math.min(ii,o+1),!!(ii%2)&&(a==="reverse"?(Xt=1-Xt,s&&(Xt-=s/ue)):a==="mirror"&&(xn=T)),et=Ut(0,1,Xt)*ue}const Ve=Qt?{done:!1,value:r[0]}:xn.next(et);w&&(Ve.value=w(Ve.value));let{done:Yt}=Ve;!Qt&&oe!==null&&(Yt=y>=0?se>=ve:se<=0);const Yh=j===null&&(P==="finished"||P==="running"&&Yt);return f&&f(Ve.value),Yh&&E(),Ve},q=()=>{h&&h.stop(),h=void 0},Ie=()=>{P="idle",q(),x(),g(),z=L=null},E=()=>{P="finished",c&&c(),q(),x()},V=()=>{if(v)return;h||(h=n(kt));const D=h.now();l&&l(),j!==null?z=D-j:(!z||P==="finished")&&(z=D),P==="finished"&&g(),L=z,j=null,P="running",h.start()};e&&V();const R={then(D,W){return C.then(D,W)},get time(){return ht(se)},set time(D){D=un(D),se=D,j!==null||!h||y===0?j=D:z=h.now()-D/y},get duration(){const D=k.calculatedDuration===null?kc(k):k.calculatedDuration;return ht(D)},get speed(){return y},set speed(D){D===y||!h||(y=D,R.time=ht(se))},get state(){return P},play:V,pause:()=>{P="paused",j=se},stop:()=>{v=!0,P!=="idle"&&(P="idle",u&&u(),Ie())},cancel:()=>{L!==null&&kt(L),Ie()},complete:()=>{P="finished"},sample:D=>(z=0,kt(D))};return R}function mv(e){let t;return()=>(t===void 0&&(t=e()),t)}const gv=mv(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),yv=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Pi=10,vv=2e4,xv=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Zp(t.ease);function wv(e,t,{onUpdate:n,onComplete:r,...i}){if(!(gv()&&yv.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const c=()=>{l=new Promise(m=>{a=m})};c();let{keyframes:f,duration:p=300,ease:y,times:v}=i;if(xv(t,i)){const m=go({...i,repeat:0,delay:0});let w={done:!1,value:f[0]};const k=[];let T=0;for(;!w.done&&T<vv;)w=m.sample(T),k.push(w.value),T+=Pi;v=void 0,f=k,p=T-Pi,y="linear"}const x=My(e.owner.current,t,f,{...i,duration:p,ease:y,times:v}),C=()=>{u=!1,x.cancel()},g=()=>{u=!0,$.update(C),a(),c()};return x.onfinish=()=>{u||(e.set(Vy(f,i)),r&&r(),g())},{then(m,w){return l.then(m,w)},attachTimeline(m){return x.timeline=m,x.onfinish=null,ee},get time(){return ht(x.currentTime||0)},set time(m){x.currentTime=un(m)},get speed(){return x.playbackRate},set speed(m){x.playbackRate=m},get duration(){return ht(p)},play:()=>{s||(x.play(),xt(C))},pause:()=>x.pause(),stop:()=>{if(s=!0,x.playState==="idle")return;const{currentTime:m}=x;if(m){const w=go({...i,autoplay:!1});e.setWithVelocity(w.sample(m-Pi).value,w.sample(m).value,Pi)}g()},complete:()=>{u||x.finish()},cancel:g}}function kv({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ee,pause:ee,stop:ee,then:o=>(o(),Promise.resolve()),cancel:ee,complete:ee});return t?go({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const Sv={type:"spring",stiffness:500,damping:25,restSpeed:10},jv=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Pv={type:"keyframes",duration:.8},Cv={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Tv=(e,{keyframes:t})=>t.length>2?Pv:yn.has(e)?e.startsWith("scale")?jv(t[1]):Sv:Cv,Ta=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ht.test(t)||t==="0")&&!t.startsWith("url(")),Ev=new Set(["brightness","contrast","saturate","opacity"]);function Nv(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Oo)||[];if(!r)return e;const i=n.replace(r,"");let o=Ev.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Mv=/([a-z-]*)\(.*?\)/g,Ea={...Ht,getAnimatableNone:e=>{const t=e.match(Mv);return t?t.map(Nv).join(" "):e}},Vv={...Rp,color:xe,backgroundColor:xe,outlineColor:xe,fill:xe,stroke:xe,borderColor:xe,borderTopColor:xe,borderRightColor:xe,borderBottomColor:xe,borderLeftColor:xe,filter:Ea,WebkitFilter:Ea},Wl=e=>Vv[e];function kh(e,t){let n=Wl(e);return n!==Ea&&(n=Ht),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Sh=e=>/^0[^.\s]+$/.test(e);function Av(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Sh(e)}function Lv(e,t,n,r){const i=Ta(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?s:o[u-1]),Av(o[u])&&l.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(a=o[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const c=l[u];o[c]=kh(t,a)}return o}function Dv({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function Gl(e,t){return e[t]||e.default||e}const zv={skipAnimations:!1},Kl=(e,t,n,r={})=>i=>{const o=Gl(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-un(s);const l=Lv(t,e,n,o),u=l[0],c=l[l.length-1],f=Ta(e,u),p=Ta(e,c);let y={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:v=>{t.set(v),o.onUpdate&&o.onUpdate(v)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(Dv(o)||(y={...y,...Tv(e,y)}),y.duration&&(y.duration=un(y.duration)),y.repeatDelay&&(y.repeatDelay=un(y.repeatDelay)),!f||!p||Ny.current||o.type===!1||zv.skipAnimations)return kv(y);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=wv(t,e,y);if(v)return v}return go(y)};function yo(e){return!!(Me(e)&&e.add)}const jh=e=>/^\-?\d*\.?\d+$/.test(e);function Ql(e,t){e.indexOf(t)===-1&&e.push(t)}function Yl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Xl{constructor(){this.subscriptions=[]}add(t){return Ql(this.subscriptions,t),()=>Yl(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Rv=e=>!isNaN(parseFloat(e));class Fv{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=me;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,$.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>$.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Rv(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Xl);const r=this.events[t].add(n);return t==="change"?()=>{r(),$.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?vh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Xn(e,t){return new Fv(e,t)}const Ph=e=>t=>t.test(e),_v={test:e=>e==="auto",parse:e=>e},Ch=[vn,M,st,jt,Hg,Ug,_v],ur=e=>Ch.find(Ph(e)),Iv=[...Ch,xe,Ht],bv=e=>Iv.find(Ph(e));function Ov(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Xn(n))}function Bv(e,t){const n=Uo(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=iy(o[s]);Ov(e,s,a)}}function Uv(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),c!=null&&(typeof c=="string"&&(jh(c)||Sh(c))?c=parseFloat(c):!bv(c)&&Ht.test(u)&&(c=kh(l,u)),e.addValue(l,Xn(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function Hv(e,t){return t?(t[e]||t.default||t).from:void 0}function $v(e,t,n){const r={};for(const i in e){const o=Hv(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function Wv({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Gv(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Th(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const f in a){const p=e.getValue(f),y=a[f];if(!p||y===void 0||c&&Wv(c,f))continue;const v={delay:n,elapsed:0,...Gl(o||{},f)};if(window.HandoffAppearAnimations){const g=e.getProps()[Ep];if(g){const h=window.HandoffAppearAnimations(g,f,p,$);h!==null&&(v.elapsed=h,v.isHandoff=!0)}}let x=!v.isHandoff&&!Gv(p,y);if(v.type==="spring"&&(p.getVelocity()||v.velocity)&&(x=!1),p.animation&&(x=!1),x)continue;p.start(Kl(f,p,y,e.shouldReduceMotion&&yn.has(f)?{type:!1}:v));const C=p.animation;yo(l)&&(l.add(f),C.then(()=>l.remove(f))),u.push(C)}return s&&Promise.all(u).then(()=>{s&&Bv(e,s)}),u}function Na(e,t,n={}){const r=Uo(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Th(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:f}=i;return Kv(e,t,u+l,c,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function Kv(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(Qv).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(Na(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function Qv(e,t){return e.sortNodePosition(t)}function Yv(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Na(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Na(e,t,n);else{const i=typeof t=="function"?Uo(e,t,n.custom):t;r=Promise.all(Th(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const Xv=[...Ll].reverse(),Zv=Ll.length;function qv(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Yv(e,n,r)))}function Jv(e){let t=qv(e);const n=t1();let r=!0;const i=(l,u)=>{const c=Uo(e,u);if(c){const{transition:f,transitionEnd:p,...y}=c;l={...l,...y,...p}}return l};function o(l){t=l(e)}function s(l,u){const c=e.getProps(),f=e.getVariantContext(!0)||{},p=[],y=new Set;let v={},x=1/0;for(let g=0;g<Zv;g++){const h=Xv[g],m=n[h],w=c[h]!==void 0?c[h]:f[h],k=Gr(w),T=h===u?m.isActive:null;T===!1&&(x=g);let P=w===f[h]&&w!==c[h]&&k;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),m.protectedKeys={...v},!m.isActive&&T===null||!w&&!m.prevProp||Io(w)||typeof w=="boolean")continue;let z=e1(m.prevProp,w)||h===u&&m.isActive&&!P&&k||g>x&&k,L=!1;const oe=Array.isArray(w)?w:[w];let ue=oe.reduce(i,{});T===!1&&(ue={});const{prevResolvedValues:ve={}}=m,se={...ve,...ue},kt=q=>{z=!0,y.has(q)&&(L=!0,y.delete(q)),m.needsAnimating[q]=!0};for(const q in se){const Ie=ue[q],E=ve[q];if(v.hasOwnProperty(q))continue;let V=!1;po(Ie)&&po(E)?V=!Yp(Ie,E):V=Ie!==E,V?Ie!==void 0?kt(q):y.add(q):Ie!==void 0&&y.has(q)?kt(q):m.protectedKeys[q]=!0}m.prevProp=w,m.prevResolvedValues=ue,m.isActive&&(v={...v,...ue}),r&&e.blockInitialAnimation&&(z=!1),z&&(!P||L)&&p.push(...oe.map(q=>({animation:q,options:{type:h,...l}})))}if(y.size){const g={};y.forEach(h=>{const m=e.getBaseTarget(h);m!==void 0&&(g[h]=m)}),p.push({animation:g})}let C=!!p.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(C=!1),r=!1,C?t(p):Promise.resolve()}function a(l,u,c){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(y=>{var v;return(v=y.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const p=s(c,l);for(const y in n)n[y].protectedKeys={};return p}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function e1(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Yp(t,e):!1}function Zt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function t1(){return{animate:Zt(!0),whileInView:Zt(),whileHover:Zt(),whileTap:Zt(),whileDrag:Zt(),whileFocus:Zt(),exit:Zt()}}class n1 extends Kt{constructor(t){super(t),t.animationState||(t.animationState=Jv(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Io(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let r1=0;class i1 extends Kt{constructor(){super(...arguments),this.id=r1++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const o1={animation:{Feature:n1},exit:{Feature:i1}},Sc=(e,t)=>Math.abs(e-t);function s1(e,t){const n=Sc(e.x,t.x),r=Sc(e.y,t.y);return Math.sqrt(n**2+r**2)}class Eh{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Cs(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,y=s1(f.offset,{x:0,y:0})>=3;if(!p&&!y)return;const{point:v}=f,{timestamp:x}=me;this.history.push({...v,timestamp:x});const{onStart:C,onMove:g}=this.handlers;p||(C&&C(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Ps(p,this.transformPagePoint),$.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:y,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Cs(f.type==="pointercancel"?this.lastMoveEventInfo:Ps(p,this.transformPagePoint),this.history);this.startEvent&&y&&y(f,C),v&&v(f,C)},!$p(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Bo(t),a=Ps(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=me;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,Cs(a,this.history)),this.removeListeners=bt(pt(this.contextWindow,"pointermove",this.handlePointerMove),pt(this.contextWindow,"pointerup",this.handlePointerUp),pt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),xt(this.updatePoint)}}function Ps(e,t){return t?{point:t(e.point)}:e}function jc(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Cs({point:e},t){return{point:e,delta:jc(e,Nh(t)),offset:jc(e,a1(t)),velocity:l1(t,.1)}}function a1(e){return e[0]}function Nh(e){return e[e.length-1]}function l1(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Nh(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>un(t)));)n--;if(!r)return{x:0,y:0};const o=ht(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Re(e){return e.max-e.min}function Ma(e,t=0,n=.01){return Math.abs(e-t)<=n}function Pc(e,t,n,r=.5){e.origin=r,e.originPoint=Q(t.min,t.max,e.origin),e.scale=Re(n)/Re(t),(Ma(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Q(n.min,n.max,e.origin)-e.originPoint,(Ma(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Er(e,t,n,r){Pc(e.x,t.x,n.x,r?r.originX:void 0),Pc(e.y,t.y,n.y,r?r.originY:void 0)}function Cc(e,t,n){e.min=n.min+t.min,e.max=e.min+Re(t)}function u1(e,t,n){Cc(e.x,t.x,n.x),Cc(e.y,t.y,n.y)}function Tc(e,t,n){e.min=t.min-n.min,e.max=e.min+Re(t)}function Nr(e,t,n){Tc(e.x,t.x,n.x),Tc(e.y,t.y,n.y)}function c1(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Q(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Q(n,e,r.max):Math.min(e,n)),e}function Ec(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function d1(e,{top:t,left:n,bottom:r,right:i}){return{x:Ec(e.x,n,i),y:Ec(e.y,t,r)}}function Nc(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function f1(e,t){return{x:Nc(e.x,t.x),y:Nc(e.y,t.y)}}function p1(e,t){let n=.5;const r=Re(e),i=Re(t);return i>r?n=Qr(t.min,t.max-r,e.min):r>i&&(n=Qr(e.min,e.max-i,t.min)),Ut(0,1,n)}function h1(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Va=.35;function m1(e=Va){return e===!1?e=0:e===!0&&(e=Va),{x:Mc(e,"left","right"),y:Mc(e,"top","bottom")}}function Mc(e,t,n){return{min:Vc(e,t),max:Vc(e,n)}}function Vc(e,t){return typeof e=="number"?e:e[t]||0}const Ac=()=>({translate:0,scale:1,origin:0,originPoint:0}),Rn=()=>({x:Ac(),y:Ac()}),Lc=()=>({min:0,max:0}),te=()=>({x:Lc(),y:Lc()});function Oe(e){return[e("x"),e("y")]}function Mh({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function g1({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function y1(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ts(e){return e===void 0||e===1}function Aa({scale:e,scaleX:t,scaleY:n}){return!Ts(e)||!Ts(t)||!Ts(n)}function en(e){return Aa(e)||Vh(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Vh(e){return Dc(e.x)||Dc(e.y)}function Dc(e){return e&&e!=="0%"}function vo(e,t,n){const r=e-n,i=t*r;return n+i}function zc(e,t,n,r,i){return i!==void 0&&(e=vo(e,i,r)),vo(e,n,r)+t}function La(e,t=0,n=1,r,i){e.min=zc(e.min,t,n,r,i),e.max=zc(e.max,t,n,r,i)}function Ah(e,{x:t,y:n}){La(e.x,t.translate,t.scale,t.originPoint),La(e.y,n.translate,n.scale,n.originPoint)}function v1(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Fn(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Ah(e,s)),r&&en(o.latestValues)&&Fn(e,o.latestValues))}t.x=Rc(t.x),t.y=Rc(t.y)}function Rc(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Tt(e,t){e.min=e.min+t,e.max=e.max+t}function Fc(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=Q(e.min,e.max,o);La(e,t[n],t[r],s,t.scale)}const x1=["x","scaleX","originX"],w1=["y","scaleY","originY"];function Fn(e,t){Fc(e.x,t,x1),Fc(e.y,t,w1)}function Lh(e,t){return Mh(y1(e.getBoundingClientRect(),t))}function k1(e,t,n){const r=Lh(e,n),{scroll:i}=t;return i&&(Tt(r.x,i.offset.x),Tt(r.y,i.offset.y)),r}const Dh=({current:e})=>e?e.ownerDocument.defaultView:null,S1=new WeakMap;class j1{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=te(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Bo(c,"page").point)},o=(c,f)=>{const{drag:p,dragPropagation:y,onDragStart:v}=this.getProps();if(p&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Gp(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Oe(C=>{let g=this.getAxisMotionValue(C).get()||0;if(st.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[C];m&&(g=Re(m)*(parseFloat(g)/100))}}this.originPoint[C]=g}),v&&$.update(()=>v(c,f),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(c,f)=>{const{dragPropagation:p,dragDirectionLock:y,onDirectionLock:v,onDrag:x}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:C}=f;if(y&&this.currentDirection===null){this.currentDirection=P1(C),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,C),this.updateAxis("y",f.point,C),this.visualElement.render(),x&&x(c,f)},a=(c,f)=>this.stop(c,f),l=()=>Oe(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Eh(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Dh(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&$.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ci(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=c1(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Dn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=d1(i.layoutBox,n):this.constraints=!1,this.elastic=m1(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Oe(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=h1(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Dn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=k1(r,i.root,this.visualElement.getTransformPagePoint());let s=f1(i.layout.layoutBox,o);if(n){const a=n(g1(s));this.hasMutatedConstraints=!!a,a&&(s=Mh(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Oe(c=>{if(!Ci(c,n,this.currentDirection))return;let f=l&&l[c]||{};s&&(f={min:0,max:0});const p=i?200:1e6,y=i?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Kl(t,r,0,n))}stopAnimation(){Oe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Oe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Oe(n=>{const{drag:r}=this.getProps();if(!Ci(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-Q(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Dn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Oe(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=p1({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Oe(s=>{if(!Ci(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(Q(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;S1.set(this.visualElement,this);const t=this.visualElement.current,n=pt(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Dn(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=dt(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Oe(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Va,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Ci(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function P1(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class C1 extends Kt{constructor(t){super(t),this.removeGroupControls=ee,this.removeListeners=ee,this.controls=new j1(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ee}unmount(){this.removeGroupControls(),this.removeListeners()}}const _c=e=>(t,n)=>{e&&$.update(()=>e(t,n))};class T1 extends Kt{constructor(){super(...arguments),this.removePointerDownListener=ee}onPointerDown(t){this.session=new Eh(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Dh(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:_c(t),onStart:_c(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&$.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=pt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function E1(){const e=A.useContext(Vl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=A.useId();return A.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const bi={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ic(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const cr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(M.test(e))e=parseFloat(e);else return e;const n=Ic(e,t.target.x),r=Ic(e,t.target.y);return`${n}% ${r}%`}},N1={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Ht.parse(e);if(i.length>5)return r;const o=Ht.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=Q(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class M1 extends ba.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;Rg(V1),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),bi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||$.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function zh(e){const[t,n]=E1(),r=A.useContext(Mp);return ba.createElement(M1,{...e,layoutGroup:r,switchLayoutGroup:A.useContext(Vp),isPresent:t,safeToRemove:n})}const V1={borderRadius:{...cr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:cr,borderTopRightRadius:cr,borderBottomLeftRadius:cr,borderBottomRightRadius:cr,boxShadow:N1},Rh=["TopLeft","TopRight","BottomLeft","BottomRight"],A1=Rh.length,bc=e=>typeof e=="string"?parseFloat(e):e,Oc=e=>typeof e=="number"||M.test(e);function L1(e,t,n,r,i,o){i?(e.opacity=Q(0,n.opacity!==void 0?n.opacity:1,D1(r)),e.opacityExit=Q(t.opacity!==void 0?t.opacity:1,0,z1(r))):o&&(e.opacity=Q(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<A1;s++){const a=`border${Rh[s]}Radius`;let l=Bc(t,a),u=Bc(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Oc(l)===Oc(u)?(e[a]=Math.max(Q(bc(l),bc(u),r),0),(st.test(u)||st.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=Q(t.rotate||0,n.rotate||0,r))}function Bc(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const D1=Fh(0,.5,ih),z1=Fh(.5,.95,ee);function Fh(e,t,n){return r=>r<e?0:r>t?1:n(Qr(e,t,r))}function Uc(e,t){e.min=t.min,e.max=t.max}function be(e,t){Uc(e.x,t.x),Uc(e.y,t.y)}function Hc(e,t,n,r,i){return e-=t,e=vo(e,1/n,r),i!==void 0&&(e=vo(e,1/i,r)),e}function R1(e,t=0,n=1,r=.5,i,o=e,s=e){if(st.test(t)&&(t=parseFloat(t),t=Q(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=Q(o.min,o.max,r);e===o&&(a-=t),e.min=Hc(e.min,t,n,a,i),e.max=Hc(e.max,t,n,a,i)}function $c(e,t,[n,r,i],o,s){R1(e,t[n],t[r],t[i],t.scale,o,s)}const F1=["x","scaleX","originX"],_1=["y","scaleY","originY"];function Wc(e,t,n,r){$c(e.x,t,F1,n?n.x:void 0,r?r.x:void 0),$c(e.y,t,_1,n?n.y:void 0,r?r.y:void 0)}function Gc(e){return e.translate===0&&e.scale===1}function _h(e){return Gc(e.x)&&Gc(e.y)}function I1(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Ih(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Kc(e){return Re(e.x)/Re(e.y)}class b1{constructor(){this.members=[]}add(t){Ql(this.members,t),t.scheduleRender()}remove(t){if(Yl(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Qc(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const O1=(e,t)=>e.depth-t.depth;class B1{constructor(){this.children=[],this.isDirty=!1}add(t){Ql(this.children,t),this.isDirty=!0}remove(t){Yl(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(O1),this.isDirty=!1,this.children.forEach(t)}}function U1(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(xt(r),e(o-t))};return $.read(r,!0),()=>xt(r)}function H1(e){window.MotionDebug&&window.MotionDebug.record(e)}function $1(e){return e instanceof SVGElement&&e.tagName!=="svg"}function W1(e,t,n){const r=Me(e)?e:Xn(e);return r.start(Kl("",r,t,n)),r.animation}const Yc=["","X","Y","Z"],G1={visibility:"hidden"},Xc=1e3;let K1=0;const tn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function bh({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=K1++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,tn.totalNodes=tn.resolvedTargetDeltas=tn.recalculatedProjection=0,this.nodes.forEach(X1),this.nodes.forEach(tx),this.nodes.forEach(nx),this.nodes.forEach(Z1),H1(tn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new B1)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Xl),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=$1(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=U1(p,250),bi.hasAnimatedSinceResize&&(bi.hasAnimatedSinceResize=!1,this.nodes.forEach(qc))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||ax,{onLayoutAnimationStart:C,onLayoutAnimationComplete:g}=c.getProps(),h=!this.targetLayout||!Ih(this.targetLayout,v)||y,m=!p&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,m);const w={...Gl(x,"layout"),onPlay:C,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else p||qc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,xt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rx),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Zc);return}this.isUpdating||this.nodes.forEach(J1),this.isUpdating=!1,this.nodes.forEach(ex),this.nodes.forEach(Q1),this.nodes.forEach(Y1),this.clearAllSnapshots();const a=performance.now();me.delta=Ut(0,1e3/60,a-me.timestamp),me.timestamp=a,me.isProcessing=!0,gs.update.process(me),gs.preRender.process(me),gs.render.process(me),me.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(q1),this.sharedNodes.forEach(ix)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=te(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!_h(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||en(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),lx(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return te();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(Tt(a.x,l.offset.x),Tt(a.y,l.offset.y)),a}removeElementScroll(s){const a=te();be(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:f}=u;if(u!==this.root&&c&&f.layoutScroll){if(c.isRoot){be(a,s);const{scroll:p}=this.root;p&&(Tt(a.x,-p.offset.x),Tt(a.y,-p.offset.y))}Tt(a.x,c.offset.x),Tt(a.y,c.offset.y)}}return a}applyTransform(s,a=!1){const l=te();be(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Fn(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),en(c.latestValues)&&Fn(l,c.latestValues)}return en(this.latestValues)&&Fn(l,this.latestValues),l}removeTransform(s){const a=te();be(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!en(u.latestValues))continue;Aa(u.latestValues)&&u.updateSnapshot();const c=te(),f=u.measurePageBox();be(c,f),Wc(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return en(this.latestValues)&&Wc(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==me.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=me.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=te(),this.relativeTargetOrigin=te(),Nr(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),be(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=te(),this.targetWithTransforms=te()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),u1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):be(this.target,this.layout.layoutBox),Ah(this.target,this.targetDelta)):be(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=te(),this.relativeTargetOrigin=te(),Nr(this.relativeTargetOrigin,this.target,y.target),be(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}tn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Aa(this.parent.latestValues)||Vh(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===me.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;be(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,y=this.treeScale.y;v1(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=Rn(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Rn(),this.projectionDeltaWithTransform=Rn());const x=this.projectionTransform;Er(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=Qc(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==p||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),tn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Rn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=te(),y=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=y!==v,C=this.getStack(),g=!C||C.members.length<=1,h=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(sx));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const k=w/1e3;Jc(f.x,s.x,k),Jc(f.y,s.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Nr(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ox(this.relativeTarget,this.relativeTargetOrigin,p,k),m&&I1(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=te()),be(m,this.relativeTarget)),x&&(this.animationValues=c,L1(c,u,this.latestValues,k,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(xt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$.update(()=>{bi.hasAnimatedSinceResize=!0,this.currentAnimation=W1(0,Xc,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Xc),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&Oh(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||te();const f=Re(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const p=Re(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+p}be(a,l),Fn(a,c),Er(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new b1),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<Yc.length;c++){const f="rotate"+Yc[c];l[f]&&(u[f]=l[f],s.setStaticValue(f,0))}s.render();for(const c in u)s.setStaticValue(c,u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return G1;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Ii(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Ii(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!en(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Qc(this.projectionDeltaWithTransform,this.treeScale,p),c&&(u.transform=c(p,u.transform));const{x:y,y:v}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in co){if(p[x]===void 0)continue;const{correct:C,applyTo:g}=co[x],h=u.transform==="none"?p[x]:C(p[x],f);if(g){const m=g.length;for(let w=0;w<m;w++)u[g[w]]=h}else u[x]=h}return this.options.layoutId&&(u.pointerEvents=f===this?Ii(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Zc),this.root.sharedNodes.clear()}}}function Q1(e){e.updateLayout()}function Y1(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?Oe(f=>{const p=s?n.measuredBox[f]:n.layoutBox[f],y=Re(p);p.min=r[f].min,p.max=p.min+y}):Oh(o,n.layoutBox,r)&&Oe(f=>{const p=s?n.measuredBox[f]:n.layoutBox[f],y=Re(r[f]);p.max=p.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+y)});const a=Rn();Er(a,r,n.layoutBox);const l=Rn();s?Er(l,e.applyTransform(i,!0),n.measuredBox):Er(l,r,n.layoutBox);const u=!_h(a);let c=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:y}=f;if(p&&y){const v=te();Nr(v,n.layoutBox,p.layoutBox);const x=te();Nr(x,r,y.layoutBox),Ih(v,x)||(c=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function X1(e){tn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Z1(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function q1(e){e.clearSnapshot()}function Zc(e){e.clearMeasurements()}function J1(e){e.isLayoutDirty=!1}function ex(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function qc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function tx(e){e.resolveTargetDelta()}function nx(e){e.calcProjection()}function rx(e){e.resetRotation()}function ix(e){e.removeLeadSnapshot()}function Jc(e,t,n){e.translate=Q(t.translate,0,n),e.scale=Q(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ed(e,t,n,r){e.min=Q(t.min,n.min,r),e.max=Q(t.max,n.max,r)}function ox(e,t,n,r){ed(e.x,t.x,n.x,r),ed(e.y,t.y,n.y,r)}function sx(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const ax={duration:.45,ease:[.4,0,.1,1]},td=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),nd=td("applewebkit/")&&!td("chrome/")?Math.round:ee;function rd(e){e.min=nd(e.min),e.max=nd(e.max)}function lx(e){rd(e.x),rd(e.y)}function Oh(e,t,n){return e==="position"||e==="preserve-aspect"&&!Ma(Kc(t),Kc(n),.2)}const ux=bh({attachResizeListener:(e,t)=>dt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Es={current:void 0},Bh=bh({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Es.current){const e=new ux({});e.mount(window),e.setOptions({layoutScroll:!0}),Es.current=e}return Es.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),cx={pan:{Feature:T1},drag:{Feature:C1,ProjectionNode:Bh,MeasureLayout:zh}},dx=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function fx(e){const t=dx.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Da(e,t,n=1){const[r,i]=fx(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return jh(s)?parseFloat(s):s}else return Sa(i)?Da(i,t,n+1):i}function px(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!Sa(o))return;const s=Da(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!Sa(o))continue;const s=Da(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const hx=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Uh=e=>hx.has(e),mx=e=>Object.keys(e).some(Uh),id=e=>e===vn||e===M,od=(e,t)=>parseFloat(e.split(", ")[t]),sd=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return od(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?od(o[1],e):0}},gx=new Set(["x","y","z"]),yx=ei.filter(e=>!gx.has(e));function vx(e){const t=[];return yx.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Zn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:sd(4,13),y:sd(5,14)};Zn.translateX=Zn.x;Zn.translateY=Zn.y;const xx=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=Zn[u](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);c&&c.jump(a[u]),e[u]=Zn[u](l,o)}),e},wx=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(Uh);let o=[],s=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],f=ur(c);const p=t[l];let y;if(po(p)){const v=p.length,x=p[0]===null?1:0;c=p[x],f=ur(c);for(let C=x;C<v&&p[C]!==null;C++)y?Bl(ur(p[C])===y):y=ur(p[C])}else y=ur(p);if(f!==y)if(id(f)&&id(y)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&y===M&&(t[l]=p.map(parseFloat))}else f!=null&&f.transform&&(y!=null&&y.transform)&&(c===0||p===0)?c===0?u.set(y.transform(c)):t[l]=f.transform(p):(s||(o=vx(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(p))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=xx(t,e,a);return o.length&&o.forEach(([c,f])=>{e.getValue(c).set(f)}),e.render(),_o&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function kx(e,t,n,r){return mx(t)?wx(e,t,n,r):{target:t,transitionEnd:r}}const Sx=(e,t,n,r)=>{const i=px(e,t,r);return t=i.target,r=i.transitionEnd,kx(e,t,n,r)},za={current:null},Hh={current:!1};function jx(){if(Hh.current=!0,!!_o)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>za.current=e.matches;e.addListener(t),t()}else za.current=!1}function Px(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(Me(o))e.addValue(i,o),yo(r)&&r.add(i);else if(Me(s))e.addValue(i,Xn(o,{owner:e})),yo(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,Xn(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const ad=new WeakMap,$h=Object.keys(Kr),Cx=$h.length,ld=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Tx=Dl.length;class Ex{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>$.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=bo(n),this.isVariantNode=Np(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const f in c){const p=c[f];a[f]!==void 0&&Me(p)&&(p.set(a[f],!1),yo(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,ad.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Hh.current||jx(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:za.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ad.delete(this.current),this.projection&&this.projection.unmount(),xt(this.notifyUpdate),xt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=yn.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&$.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<Cx;l++){const u=$h[l],{isEnabled:c,Feature:f,ProjectionNode:p,MeasureLayout:y}=Kr[u];p&&(s=p),c(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),y&&(a=y))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:f,layoutScroll:p,layoutRoot:y}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||f&&Dn(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:p,layoutRoot:y})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):te()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<ld.length;r++){const i=ld[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Px(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Tx;r++){const i=Dl[r],o=this.props[i];(Gr(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Xn(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Ol(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Me(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Xl),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Wh extends Ex{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=$v(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){Uv(this,r,s);const a=Sx(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function Nx(e){return window.getComputedStyle(e)}class Mx extends Wh{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(yn.has(n)){const r=Wl(n);return r&&r.default||0}else{const r=Nx(t),i=(Dp(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Lh(t,n)}build(t,n,r,i){Rl(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return bl(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Me(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){bp(t,n,r,i)}}class Vx extends Wh{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(yn.has(n)){const r=Wl(n);return r&&r.default||0}return n=Op.has(n)?n:Al(n),t.getAttribute(n)}measureInstanceViewportBox(){return te()}scrapeMotionValuesFromProps(t,n){return Up(t,n)}build(t,n,r,i){_l(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Bp(t,n,r,i)}mount(t){this.isSVGTag=Il(t.tagName),super.mount(t)}}const Ax=(e,t)=>zl(e)?new Vx(t,{enableHardwareAcceleration:!1}):new Mx(t,{enableHardwareAcceleration:!0}),Lx={layout:{ProjectionNode:Bh,MeasureLayout:zh}},Dx={...o1,...Cy,...cx,...Lx},_=Dg((e,t)=>fy(e,t,Dx,Ax)),Gh="/assets/logo-BvWdAn7H.svg",zx=()=>{const[e,t]=A.useState(!1);A.useEffect(()=>{const i=()=>{const s=document.querySelector(".snap-container");s&&t(s.scrollTop>50)},o=document.querySelector(".snap-container");if(o)return o.addEventListener("scroll",i),()=>o.removeEventListener("scroll",i)},[]);const n=i=>{const o=document.querySelector(".snap-container");if(o){const s=document.getElementById(i);if(s){const a=s.offsetTop;o.scrollTo({top:a,behavior:"smooth"})}}},r=()=>{const i=document.querySelector(".snap-container");i&&i.scrollTo({top:0,behavior:"smooth"})};return d.jsxs(_.nav,{className:`navbar ${e?"scrolled":""}`,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[d.jsxs("div",{className:"container nav-container",children:[d.jsx(_.div,{className:"logo",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},onClick:r,style:{cursor:"pointer"},whileHover:{scale:1.05},whileTap:{scale:.95},children:d.jsx("img",{src:Gh,alt:"Regrov",style:{height:"40px",width:"auto"}})}),d.jsxs(_.div,{className:"nav-links",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[d.jsx("a",{href:"#solution",onClick:i=>{i.preventDefault(),n("solution")},children:"Features"}),d.jsx("a",{href:"#roadmap",onClick:i=>{i.preventDefault(),n("roadmap")},children:"Roadmap"}),d.jsx("a",{href:"#team",onClick:i=>{i.preventDefault(),n("team")},children:"Team"}),d.jsx(_.button,{className:"nav-btn",whileHover:{scale:1.05},whileTap:{scale:.95},transition:{duration:.2},children:"Get App"})]})]}),d.jsx("style",{children:`
        .navbar {
           position: fixed;
           top: 0;
           left: 0;
           right: 0;
           z-index: 1000;
           padding: 1rem 0;
           transition: all 0.3s ease;
           background: transparent;
        }

        .navbar.scrolled {
           background: rgba(13, 40, 24, 0.85); /* Dark Green Glass */
           box-shadow: 0 4px 20px rgba(0,0,0,0.2);
           backdrop-filter: blur(12px);
           padding: 0.75rem 0;
           border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .navbar.scrolled .logo {
           color: var(--color-accent);
        }

        .nav-container {
           display: flex;
           justify-content: space-between;
           align-items: center;
        }

        .logo {
           font-size: 1.5rem;
           font-weight: 800;
           color: var(--color-text-main);
           font-family: var(--font-heading);
           letter-spacing: -0.5px;
        }
        
        .nav-links {
           display: none;
           align-items: center;
           gap: 2rem;
        }

        @media (min-width: 768px) {
           .nav-links {
              display: flex;
           }
        }

        .nav-links a {
           font-weight: 500;
           color: var(--color-text-main);
           opacity: 0.8;
           transition: all 0.3s ease;
           text-decoration: none;
           position: relative;
        }
        
        .nav-links a::after {
           content: '';
           position: absolute;
           bottom: -5px;
           left: 0;
           width: 0;
           height: 2px;
           background: var(--color-accent);
           transition: width 0.3s ease;
        }
        
        .nav-links a:hover {
           opacity: 1;
           color: var(--color-accent);
           text-decoration: none;
        }
        
        .nav-links a:hover::after {
           width: 100%;
        }

        .nav-btn {
           background: var(--color-accent);
           border: none;
           padding: 0.6rem 1.5rem;
           border-radius: 50px;
           font-weight: 700;
           cursor: pointer;
           color: var(--color-text-dark);
           transition: all 0.3s ease;
           font-family: var(--font-body);
        }

        .nav-btn:hover {
           background: white;
           box-shadow: 0 4px 15px rgba(212, 238, 38, 0.4);
        }
      `})]})},Rx=({activeIndex:e,count:t,onSelect:n})=>d.jsxs("div",{className:"slide-navigator",children:[d.jsx("div",{className:"nav-dots",children:Array.from({length:t}).map((r,i)=>d.jsx("button",{className:`nav-dot ${i===e?"active":""}`,onClick:()=>n(i),"aria-label":`Go to slide ${i+1}`,children:i===e&&d.jsx(_.div,{layoutId:"active-dot",className:"active-indicator",transition:{type:"spring",stiffness:300,damping:30}})},i))}),d.jsx("style",{children:`
        .slide-navigator {
          position: fixed;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          display: none;
        }

        @media (min-width: 1024px) {
          .slide-navigator {
            display: block;
          }
        }

        .nav-dots {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          padding: 0;
          position: relative;
          transition: background 0.3s;
        }

        .nav-dot:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .active-indicator {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 2px solid var(--color-accent);
          border-radius: 50%;
          background: transparent;
        }
      `})]});var Fx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const _x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=(e,t)=>{const n=A.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,children:a,...l},u)=>A.createElement("svg",{ref:u,...Fx,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:`lucide lucide-${_x(e)}`,...l},[...t.map(([c,f])=>A.createElement(c,f)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n},Ix=b("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),bx=b("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),ud=b("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),Ox=b("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]),Bx=b("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),Ux=b("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]),Hx=b("Gavel",[["path",{d:"m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10",key:"c9cbz0"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]),Kh=b("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),$x=b("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]),Wx=b("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),Gx=b("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),Kx=b("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]),Qx=b("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),Yx=b("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Xx=b("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),Zx=b("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]),qx=b("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]),Jx=b("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),e2=b("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),t2=b("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),n2=b("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),r2=b("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]),Ns=b("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]),i2=b("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),cd=b("Tractor",[["path",{d:"M3 4h9l1 7",key:"1ftpo8"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M8 10V4",key:"1y5f7n"}],["path",{d:"M18 5c-.6 0-1 .4-1 1v5.6",key:"10zbvr"}],["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1",key:"2w242w"}],["circle",{cx:"7",cy:"15",r:".5",key:"fbsjqy"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}]]),o2=b("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]),Qh=b("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),dd=b("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]),s2=b("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),xo=b("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),a2="/assets/regrov-icon-BUYNv8tw.png",l2=()=>d.jsxs("div",{className:"hero-slide",children:[d.jsx("div",{className:"container h-full",children:d.jsxs("div",{className:"hero-grid",children:[d.jsxs("div",{className:"hero-content",children:[d.jsxs(_.div,{className:"badge-capsule",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},children:[d.jsx(Kh,{size:14}),d.jsx("span",{children:"Global Agri-Tech Ecosystem"})]}),d.jsxs(_.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.3,duration:.8},children:["The ",d.jsx("span",{className:"text-accent",children:"Super App"})," for ",d.jsx("br",{}),d.jsx("span",{className:"serif-italic",children:"Modern Farmers."})]}),d.jsx(_.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:"Connecting 500M+ farmers to fair trade, advisory, and community in one unified digital ecosystem."}),d.jsxs(_.div,{className:"hero-stat-row",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},children:[d.jsxs("div",{className:"stat-item",children:[d.jsx("strong",{children:"$12T"}),d.jsx("span",{children:"Global Market"})]}),d.jsx("div",{className:"divider"}),d.jsxs("div",{className:"stat-item",children:[d.jsx("strong",{children:"570M"}),d.jsx("span",{children:"Farmers"})]}),d.jsx("div",{className:"divider"}),d.jsxs("div",{className:"stat-item",children:[d.jsx("strong",{className:"text-accent",children:"1 App"}),d.jsx("span",{children:"Solution"})]})]})]}),d.jsx("div",{className:"phone-wrapper",children:d.jsxs(_.div,{className:"phone-mockup",initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.8},viewport:{once:!0},children:[d.jsx("div",{className:"notch"}),d.jsx("div",{className:"app-screen",children:d.jsx("div",{className:"brand-center",children:d.jsx(_.img,{src:a2,alt:"Regrov Logo",className:"logo-img",initial:{opacity:0,scale:.5},animate:{opacity:.9,scale:1},transition:{delay:1,duration:1}})})}),d.jsxs("div",{className:"floating-card c1",children:[d.jsx("div",{className:"icon-box",children:d.jsx(r2,{size:20})}),d.jsxs("div",{className:"text-box",children:[d.jsx("div",{className:"line l1"}),d.jsx("div",{className:"line l2"})]})]}),d.jsxs("div",{className:"floating-card c2",children:[d.jsx("div",{className:"icon-box",children:d.jsx(Qh,{size:20})}),d.jsxs("div",{className:"text-box",children:[d.jsx("span",{children:"Market Rate"}),d.jsx("strong",{children:"+15%"})]})]}),d.jsxs("div",{className:"floating-card c3",children:[d.jsx("div",{className:"user-face-icon",children:d.jsx(s2,{size:18})}),d.jsx("span",{children:'"Sold in 2hrs!"'})]}),d.jsx("div",{className:"glow-effect"})]})})]})}),d.jsx("style",{children:`
        .hero-slide {
          min-height: 100vh;
          height: auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 70% 30%, #1a4d2e 0%, var(--color-bg) 60%);
        }

        .h-full { 
          height: 100%; 
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          height: 100%;
          align-items: center;
          justify-items: center;
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 1080px) {
          .hero-grid {
            grid-template-columns: 1.2fr 1fr;
            justify-items: center;
          }
        }
        
        @media (max-width: 1079px) {
           .hero-content {
             margin-top: 5rem;
           }
        }

        .hero-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin: 1.5rem 0;
          line-height: 1.1;
          color: white;
        }

        .serif-italic {
           font-family: var(--font-heading);
           font-style: italic;
           font-weight: 400;
           color: rgba(255,255,255,0.9);
        }

        @media (min-width: 1200px) {
           .hero-content h1 {
              font-size: 5rem;
           }
        }

        .badge-capsule {
           display: inline-flex;
           align-items: center;
           gap: 10px;
           padding: 12px 24px;
           background: linear-gradient(135deg, rgba(26, 77, 46, 0.25) 0%, rgba(76, 175, 80, 0.15) 100%);
           backdrop-filter: blur(10px);
           -webkit-backdrop-filter: blur(10px);
           border-radius: 50px;
           color: #a8e6a3;
           font-size: 0.9rem;
           font-weight: 600;
           letter-spacing: 0.3px;
           border: 1.5px solid transparent;
           background-clip: padding-box;
           position: relative;
           overflow: hidden;
           box-shadow: 
             0 4px 15px rgba(76, 175, 80, 0.1),
             inset 0 1px 0 rgba(255, 255, 255, 0.1);
           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .badge-capsule::before {
           content: '';
           position: absolute;
           inset: 0;
           border-radius: 50px;
           padding: 1.5px;
           background: linear-gradient(135deg, 
             rgba(168, 230, 163, 0.6) 0%, 
             rgba(76, 175, 80, 0.4) 25%,
             rgba(26, 77, 46, 0.3) 50%,
             rgba(76, 175, 80, 0.4) 75%,
             rgba(168, 230, 163, 0.6) 100%);
           -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
           -webkit-mask-composite: xor;
           mask-composite: exclude;
           animation: borderRotate 3s linear infinite;
           opacity: 0.8;
        }

        .badge-capsule::after {
           content: '';
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
           width: 100%;
           height: 100%;
           background: radial-gradient(circle, rgba(168, 230, 163, 0.15) 0%, transparent 70%);
           border-radius: 50px;
           opacity: 0;
           transition: opacity 0.4s ease;
        }

        .badge-capsule:hover {
           transform: translateY(-2px);
           box-shadow: 
             0 8px 25px rgba(76, 175, 80, 0.25),
             inset 0 1px 0 rgba(255, 255, 255, 0.2);
           background: linear-gradient(135deg, rgba(26, 77, 46, 0.35) 0%, rgba(76, 175, 80, 0.25) 100%);
        }

        .badge-capsule:hover::after {
           opacity: 1;
        }

        .badge-capsule svg {
           filter: drop-shadow(0 0 4px rgba(168, 230, 163, 0.4));
           animation: globeSpin 20s linear infinite;
        }

        @keyframes borderRotate {
           0% {
             background-position: 0% 50%;
           }
           50% {
             background-position: 100% 50%;
           }
           100% {
             background-position: 0% 50%;
           }
        }

        @keyframes globeSpin {
           0% {
             transform: rotate(0deg);
           }
           100% {
             transform: rotate(360deg);
           }
        }

        .hero-content p {
           font-size: 1.25rem;
           color: var(--color-text-muted);
           max-width: 500px;
           margin-bottom: 3rem;
        }

        .hero-stat-row {
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 2rem;
           padding-top: 2rem;
           border-top: 1px solid rgba(255,255,255,0.1);
        }

        .stat-item {
           display: flex;
           flex-direction: column;
        }

        .stat-item strong {
           font-size: 2rem;
           font-family: var(--font-heading);
           color: white;
           line-height: 1;
        }

        .stat-item span {
           font-size: 0.85rem;
           text-transform: uppercase;
           letter-spacing: 1px;
           margin-top: 5px;
           color: rgba(255,255,255,0.5);
        }

        .divider {
           width: 1px;
           height: 40px;
           background: rgba(255,255,255,0.1);
        }

        /* Phone Styles */
        .phone-wrapper {
            transform: rotate(-12deg) scale(0.75);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%; 
            height: 100%;
        }
        .phone-mockup {
            width: 320px;
            height: 650px;
            background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
            border-radius: 45px;
            padding: 12px;
            box-shadow: 
                0 0 0 2px #0a0a0a,
                0 0 0 6px #3a3a3a,
                0 30px 60px -15px rgba(0, 0, 0, 0.7),
                inset 0 1px 2px rgba(255,255,255,0.1);
            position: relative;
            overflow: visible;
        }

        .phone-mockup::before {
            content: '';
            position: absolute;
            top: 80px;
            right: -3px;
            width: 3px;
            height: 50px;
            background: linear-gradient(180deg, #2a2a2a, #1a1a1a);
            border-radius: 0 2px 2px 0;
        }

        .phone-mockup::after {
            content: '';
            position: absolute;
            top: 150px;
            left: -3px;
            width: 3px;
            height: 80px;
            background: linear-gradient(180deg, #2a2a2a, #1a1a1a);
            border-radius: 2px 0 0 2px;
        }

        .notch {
            position: absolute;
            top: 12px;
            left: 50%;
            transform: translateX(-50%);
            width: 140px;
            height: 28px;
            background: #0a0a0a;
            border-radius: 0 0 18px 18px;
            z-index: 10;
            box-shadow: inset 0 -2px 4px rgba(0,0,0,0.3);
        }

        .notch::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 6px;
            background: #1a1a1a;
            border-radius: 3px;
        }

        .notch::after {
            content: '';
            position: absolute;
            top: 8px;
            right: 20px;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, #1a3a2a, #0a1a0a);
            border-radius: 50%;
            box-shadow: 0 0 4px rgba(0,255,100,0.3);
        }

        .app-screen {
            height: 100%;
            width: 100%;
            background: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 35px;
            border-radius: 35px;
            overflow: visible;
            position: relative;
        }

        .brand-center {
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .logo-img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        
        .floating-card {
           position: absolute;
           background: var(--color-surface);
           border-radius: 20px;
           padding: 1.25rem;
           box-shadow: 0 10px 30px rgba(0,0,0,0.2);
           display: flex;
           align-items: center;
           gap: 16px;
           border: 1px solid rgba(255,255,255,0.1);
           animation: float 6s ease-in-out infinite;
           z-index: 21;
           color: rgba(255,255,255,1);

        }

        .floating-card strong {
          color: white;
          font-size: 1.25rem;
        }

        .floating-card span {
          color: white;
          font-weight: 500;
        }

        .c1 { top: 15%; left: -140px; width: 220px; animation-delay: 0s; }
        .c2 { top: 45%; right: -160px; width: 240px; animation-delay: 2.5s; }
        .c3 { bottom: 18%; left: -100px; width: 200px; animation-delay: 5s; }

        .icon-box {
           width: 44px;
           height: 44px;
           background: rgba(26, 77, 46, 0.08);
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
           font-size: 1.4rem;
           color: #1a4d2e;
        }

        .text-box { display: flex; flex-direction: column; gap: 6px; width: 100%; }
        .line { height: 7px; background: rgba(0,0,0,0.05); border-radius: 4px; }
        .l1 { width: 85%; }
        .l2 { width: 60%; }

        .glow-effect {
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
           width: 500px;
           height: 500px;
           background: var(--color-accent);
           filter: blur(140px);
           opacity: 0.15;
           z-index: -1; 
           border-radius: 50%;
           pointer-events: none;
        }

        .user-face-icon {
          width: 36px;
          height: 36px;
          background: rgba(26, 77, 46, 0.08);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a4d2e;
          flex-shrink: 0;
        }
      
      // responsive 
      // upto 1400px
      @media (max-width: 1400px) {
        .phone-mockup {
            transform: scale(0.9);
        }
      }
      
      // upto 1200px
      @media (max-width: 1200px) {
        .phone-mockup {
            transform: scale(0.85);
        }
      }
      
      // upto 1024px
      @media (max-width: 1080px) {
         .phone-mockup {
             transform: scale(0.9);
         }
      }
      
      // upto 768px
      @media (max-width: 768px) {
        .phone-mockup {
             transform: scale(0.8);
         }
      }
      
      // upto 425px
      @media (max-width: 425px) {
        .phone-mockup {
             transform: scale(0.7);
         }
      }
      
      // upto 375px
      @media (max-width: 375px) {
          .phone-mockup {
             transform: scale(0.65);
         }
      }
      
      // upto 320px
      @media (max-width: 320px) {
         .phone-mockup {
             transform: scale(0.6);
         }
      }
      
      `})]}),u2=()=>{const e=[{icon:d.jsx(xo,{size:32}),title:"Fragmentation",desc:"Farmers disjointed from markets & advice."},{icon:d.jsx(Ix,{size:32}),title:"Middlemen",desc:"Losing 40-60% margin to intermediaries."},{icon:d.jsx(o2,{size:32}),title:"Price Opacity",desc:"No real-time data leads to underselling."},{icon:d.jsx(Kx,{size:32}),title:"Tool Fatigue",desc:"Forced to use 5+ apps for basic needs."}];return d.jsxs("div",{className:"problem-slide",children:[d.jsx("div",{className:"container h-full",children:d.jsxs("div",{className:"problem-grid",children:[d.jsxs(_.div,{className:"text-side",initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},children:[d.jsx("span",{className:"overline",children:"The Reality"}),d.jsxs("h2",{children:["Agriculture is ",d.jsx("span",{className:"highlight-red",children:"Broken."})]}),d.jsx("p",{className:"lead",children:"Despite feeding the world, farmers are trapped in an analog ecosystem that eats away their profits."}),d.jsxs("div",{className:"stat-highlight",children:[d.jsx("strong",{children:"60%"}),d.jsx("span",{children:"Income lost to inefficiencies"})]})]}),d.jsx("div",{className:"cards-side",children:e.map((t,n)=>d.jsxs(_.div,{className:"problem-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:n*.1},children:[d.jsx("div",{className:"icon-wrapper",children:t.icon}),d.jsx("h3",{children:t.title}),d.jsx("p",{children:t.desc})]},n))})]})}),d.jsx("style",{children:`
        .problem-slide {
          min-height: 100vh;
          height: auto;
          width: 100%;
          background: #0A0F0D; /* Almost black */
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          min-height: 100%;
          padding: 4rem 0;
          align-items: center;
          justify-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 900px) {
          .problem-grid {
            grid-template-columns: 1fr 1fr;
            justify-items: center;
          }
        }

        .overline {
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #ff6b6b;
          font-weight: 700;
          margin-bottom: 1rem;
          display: block;
        }

        .text-side {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .text-side h2 {
          font-size: 4rem;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1;
        }

        .highlight-red {
          color: #ff6b6b;
          font-style: italic;
        }

        .lead {
          font-size: 1.25rem;
          color: #888;
          margin-bottom: 3rem;
          max-width: 450px;
        }

        .stat-highlight {
          border-left: 4px solid #ff6b6b;
          padding-left: 1.5rem;
          text-align: left;
          align-self: center;
        }

        .stat-highlight strong {
          display: block;
          font-size: 3rem;
          color: white;
          font-family: var(--font-heading);
          line-height: 1;
        }

        .stat-highlight span {
          color: #888;
        }

        .cards-side {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          justify-items: center;
        }

        .problem-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 20px;
          transition: background 0.3s;
        }

        .problem-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.1);
        }

        .icon-wrapper {
          color: #ff6b6b;
          margin-bottom: 1rem;
        }

        .problem-card h3 {
          color: white;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .problem-card p {
          color: #888;
          font-size: 0.9rem;
          line-height: 1.4;
        }
      `})]})},c2=()=>d.jsxs("section",{className:"market-section",children:[d.jsx("div",{className:"container h-full",children:d.jsxs("div",{className:"market-content",children:[d.jsxs(_.div,{className:"market-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[d.jsx("span",{className:"tag",children:"The Opportunity"}),d.jsx("h2",{children:"A massive, untapped ecosystem."})]}),d.jsxs("div",{className:"stats-grid",children:[d.jsxs(_.div,{className:"stat-card",initial:{scale:.9,opacity:0},whileInView:{scale:1,opacity:1},viewport:{once:!0},transition:{delay:.2},children:[d.jsx(Kh,{size:40,className:"stat-icon"}),d.jsx("div",{className:"stat-label",children:"Total Addressable Market"}),d.jsx("div",{className:"stat-value",children:"$12 Trillion"}),d.jsx("div",{className:"stat-desc",children:"Global Agriculture Output"})]}),d.jsxs(_.div,{className:"stat-card featured",initial:{scale:.9,opacity:0},whileInView:{scale:1,opacity:1},viewport:{once:!0},transition:{delay:.4},children:[d.jsx(xo,{size:48,className:"stat-icon"}),d.jsx("div",{className:"stat-label",children:"Serviceable Market"}),d.jsx("div",{className:"stat-value highlight",children:"570 Million"}),d.jsx("div",{className:"stat-desc",children:"Farms family-owned globally."})]}),d.jsxs(_.div,{className:"stat-card",initial:{scale:.9,opacity:0},whileInView:{scale:1,opacity:1},viewport:{once:!0},transition:{delay:.6},children:[d.jsx(Qh,{size:40,className:"stat-icon"}),d.jsx("div",{className:"stat-label",children:"Target Market (India)"}),d.jsx("div",{className:"stat-value",children:"$300 Billion"}),d.jsx("div",{className:"stat-desc",children:"Immediate Agri-Tech opportunity."})]})]}),d.jsx(_.div,{className:"market-footer",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.8},children:d.jsxs("p",{children:["Market growing at ",d.jsx("strong",{children:"12% CAGR"})," due to smartphone adoption."]})})]})}),d.jsx("style",{children:`
        .market-section {
           min-height: 100vh;
           height: auto;
           width: 100%;
           background: radial-gradient(circle at center, #1E4D36 0%, #0D2818 100%);
           display: flex;
           align-items: center;
           justify-content: center;
           color: white;
        }

        .market-content {
           display: flex;
           flex-direction: column;
           padding: 4rem 0;
           align-items: center;
           width: 100%;
           max-width: 1200px;
        }

        .market-header {
           text-align: center;
           margin-bottom: 4rem;
        }

        .tag {
           color: var(--color-accent);
           text-transform: uppercase;
           letter-spacing: 2px;
           font-size: 0.8rem;
           margin-bottom: 0.5rem;
           display: block;
        }

        .market-header h2 {
           font-size: 3rem;
           color: rgba(255,255,255,0.9);
        }

        .stats-grid {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
           gap: 2rem;
           width: 100%;
        }

        .stat-card {
           background: rgba(255,255,255,0.05); /* Slightly lighter background */
           border: 1px solid rgba(255,255,255,0.1);
           border-radius: 20px;
           padding: 3rem 2rem;
           text-align: center;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           transition: transform 0.3s;
        }
        
        .stat-card:hover {
           background: rgba(255,255,255,0.08);
           transform: translateY(-5px);
        }

        .stat-card.featured {
           background: rgba(255,255,255,0.08); /* Even lighter for featured */
           border-color: rgba(255,255,255,0.2);
           transform: scale(1.05);
           box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        
        .stat-card.featured:hover {
            transform: scale(1.05) translateY(-5px);
        }

        .stat-icon {
           color: var(--color-accent-2); /* Goldenrod for icons */
           margin-bottom: 1.5rem;
           opacity: 0.8;
        }
        
        .featured .stat-icon {
            color: var(--color-accent); /* Neon for featured icon */
            opacity: 1;
        }

        .stat-label {
           text-transform: uppercase;
           letter-spacing: 1px;
           font-size: 0.85rem;
           margin-bottom: 1rem;
           color: rgba(255,255,255,0.6); /* Brighter gray */
        }

        .stat-value {
           font-size: 3rem;
           font-weight: 700;
           font-family: var(--font-heading);
           margin-bottom: 0.5rem;
           color: white;
           line-height: 1;
        }
        
        .stat-value.highlight {
            color: var(--color-accent);
        }

        .stat-desc {
           color: rgba(255,255,255,0.7); /* Brighter description */
           font-size: 0.95rem;
        }

        .market-footer {
           margin-top: 4rem;
           background: rgba(255,255,255,0.05);
           padding: 0.75rem 2rem;
           border-radius: 50px;
           color: rgba(255,255,255,0.8);
        }
        
        .market-footer strong {
            color: var(--color-accent);
        }

        @media (max-width: 900px) {
           .stats-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
           }
           
           .stat-card.featured {
              transform: scale(1);
           }
           
           .stat-card.featured:hover {
              transform: translateY(-5px);
           }
        }
      `})]}),d2=()=>{const e=[{icon:d.jsx(n2,{size:24}),title:"Social Graph",desc:"Connect & share tips.",color:"#FFC759"},{icon:d.jsx(Ns,{size:24}),title:"Marketplace",desc:"Direct buyer access.",color:"#4ECDC4"},{icon:d.jsx(Hx,{size:24}),title:"Bulk Bidding",desc:"Group buying power.",highlight:!0,color:"#D4EE26"},{icon:d.jsx(cd,{size:24}),title:"Job Portal",desc:"Find labor & machinery.",color:"#FF6B6B"},{icon:d.jsx(ud,{size:24}),title:"Mandi Alerts",desc:"Real-time prices.",color:"#A06CD5"},{icon:d.jsx(dd,{size:24}),title:"Expert Advisory",desc:"1:1 Agronomist calls.",color:"#62B6CB"}];return d.jsxs("section",{className:"solution-slide",children:[d.jsx("div",{className:"container h-full",children:d.jsxs("div",{className:"solution-split",children:[d.jsx("div",{className:"phone-container",children:d.jsxs(_.div,{className:"phone-mockup",initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.8},viewport:{once:!0},children:[d.jsx("div",{className:"notch"}),d.jsxs("div",{className:"app-screen",children:[d.jsxs("div",{className:"app-header",children:[d.jsx(Jx,{size:20,color:"#333"}),d.jsx("span",{className:"app-logo",children:"Regrov"}),d.jsx(ud,{size:20,color:"#333"})]}),d.jsxs("div",{className:"app-search",children:[d.jsx(t2,{size:16,color:"#999"}),d.jsx("span",{children:"Search crops, seeds..."})]}),d.jsxs("div",{className:"app-grid",children:[d.jsxs("div",{className:"app-card highlight",children:[d.jsx("div",{className:"card-icon",style:{background:"#e8f5e9"},children:d.jsx(Qx,{size:20,color:"green"})}),d.jsx("span",{children:"My Crops"})]}),d.jsxs("div",{className:"app-card",children:[d.jsx("div",{className:"card-icon",style:{background:"#fff3e0"},children:d.jsx(Ns,{size:20,color:"orange"})}),d.jsx("span",{children:"Mandi"})]}),d.jsxs("div",{className:"app-card",children:[d.jsx("div",{className:"card-icon",style:{background:"#e3f2fd"},children:d.jsx(xo,{size:20,color:"blue"})}),d.jsx("span",{children:"Community"})]}),d.jsxs("div",{className:"app-card",children:[d.jsx("div",{className:"card-icon",style:{background:"#fce4ec"},children:d.jsx(cd,{size:20,color:"pink"})}),d.jsx("span",{children:"Rentals"})]})]}),d.jsxs("div",{className:"feed-item",children:[d.jsxs("div",{className:"feed-header",children:[d.jsx("div",{className:"feed-avatar",children:"RP"}),d.jsxs("div",{className:"feed-meta",children:[d.jsx("strong",{children:"Ravi Patel"}),d.jsx("span",{children:"Just now"})]})]}),d.jsx("p",{className:"feed-text",children:"Just harvested 5 tons of premium wheat! 🌾 Ready for buyers."}),d.jsx("div",{className:"feed-img"})]}),d.jsxs("div",{className:"bottom-nav",children:[d.jsx("div",{className:"nav-item active",children:d.jsx(Wx,{size:22})}),d.jsx("div",{className:"nav-item",children:d.jsx(Ns,{size:22})}),d.jsx("div",{className:"nav-item",children:d.jsx(xo,{size:22})}),d.jsx("div",{className:"nav-item",children:d.jsx(dd,{size:22})})]})]})]})}),d.jsxs("div",{className:"solution-content",children:[d.jsxs(_.div,{className:"text-block",initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[d.jsx("span",{className:"tag",children:"The Solution"}),d.jsxs("h2",{children:["The Super App for ",d.jsx("br",{}),d.jsx("span",{className:"highlight-text",children:"Smart Farming"})]}),d.jsx("p",{className:"description",children:"One unified ecosystem replacing fragmented tools. Empowering farmers with data, access, and community."})]}),d.jsx("div",{className:"features-grid",children:e.map((t,n)=>d.jsxs(_.div,{className:"feature-card",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{delay:n*.1},viewport:{once:!0},children:[d.jsx("div",{className:"icon-badge",style:{color:t.color},children:t.icon}),d.jsxs("div",{children:[d.jsx("h4",{children:t.title}),d.jsx("p",{children:t.desc})]})]},n))})]})]})}),d.jsx("style",{children:`
                .solution-slide {
                    min-height: 100vh;
                    height: auto;
                    width: 100%;
                    background: radial-gradient(circle at top right, #163B24 0%, #0D2818 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .solution-split {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    min-height: 100%;
                    padding: 4rem 0;
                    align-items: center;
                    justify-items: center;
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                @media(min-width: 900px) {
                    .solution-split {
                        grid-template-columns: 1fr 1.2fr;
                        gap: 5rem;
                        justify-items: center;
                    }
                }

                /* Phone Styles */
                .phone-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }

                .phone-mockup {
                    width: 280px;
                    height: 550px;
                    background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
                    border-radius: 45px;
                    padding: 12px;
                    box-shadow: 
                        0 0 0 2px #0a0a0a,
                        0 0 0 6px #3a3a3a,
                        0 30px 60px -15px rgba(0, 0, 0, 0.7),
                        inset 0 1px 2px rgba(255,255,255,0.1);
                    position: relative;
                    overflow: visible;
                    transform: scale(0.1);
                    transform-origin: center;
                }

                .phone-mockup::before {
                    content: '';
                    position: absolute;
                    top: 80px;
                    right: -3px;
                    width: 3px;
                    height: 50px;
                    background: linear-gradient(180deg, #2a2a2a, #1a1a1a);
                    border-radius: 0 2px 2px 0;
                }

                .phone-mockup::after {
                    content: '';
                    position: absolute;
                    top: 150px;
                    left: -3px;
                    width: 3px;
                    height: 80px;
                    background: linear-gradient(180deg, #2a2a2a, #1a1a1a);
                    border-radius: 2px 0 0 2px;
                }

                .notch {
                    position: absolute;
                    top: 12px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 140px;
                    height: 28px;
                    background: #0a0a0a;
                    border-radius: 0 0 18px 18px;
                    z-index: 10;
                    box-shadow: inset 0 -2px 4px rgba(0,0,0,0.3);
                }

                .notch::before {
                    content: '';
                    position: absolute;
                    top: 8px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 6px;
                    background: #1a1a1a;
                    border-radius: 3px;
                }

                .notch::after {
                    content: '';
                    position: absolute;
                    top: 8px;
                    right: 20px;
                    width: 10px;
                    height: 10px;
                    background: radial-gradient(circle, #1a3a2a, #0a1a0a);
                    border-radius: 50%;
                    box-shadow: 0 0 4px rgba(0,255,100,0.3);
                }

                .app-screen {
                    height: 100%;
                    width: 100%;
                    background: #F5F7FA;
                    display: flex;
                    flex-direction: column;
                    padding-top: 35px;
                    border-radius: 35px;
                    overflow: hidden;
                    position: relative;
                }

                .app-header {
                    padding: 0 1.5rem 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .app-logo {
                    font-family: var(--font-heading);
                    font-weight: bold;
                    font-size: 1.25rem;
                    color: #1a4d2e;
                }

                .app-search {
                    margin: 0 1.5rem 1.5rem;
                    background: white;
                    padding: 10px 15px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #999;
                    font-size: 0.9rem;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                }

                .app-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                    padding: 0 1.5rem 1.5rem;
                }

                .app-card {
                    background: white;
                    padding: 15px;
                    border-radius: 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                }

                .card-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .app-card span {
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: #444;
                }

                .feed-item {
                    margin: 0 1.5rem;
                    background: white;
                    border-radius: 16px;
                    padding: 15px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                }

                .feed-header {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 10px;
                }
                
                .feed-avatar {
                    width: 35px; height: 35px;
                    background: #FFC759;
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 0.8rem; font-weight: bold; color: #333;
                }

                .feed-meta { display: flex; flex-direction: column; }
                .feed-meta strong { font-size: 0.9rem; color: #333; }
                .feed-meta span { font-size: 0.75rem; color: #888; }
                
                .feed-text { font-size: 0.85rem; color: #555; margin-bottom: 10px; }
                .feed-img { width: 100%; height: 80px; background: #e0e0e0; border-radius: 8px; }

                .bottom-nav {
                    margin-top: auto;
                    background: white;
                    padding: 15px 25px;
                    display: flex;
                    justify-content: space-between;
                    border-top: 1px solid #eee;
                }

                .nav-item { color: #ccc; }
                .nav-item.active { color: #1a4d2e; }


                /* Right Content */
                .solution-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }

                .text-block { 
                    margin-bottom: 3rem; 
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                .tag {
                    color: var(--color-accent);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.8rem;
                    display: block;
                    margin-bottom: 0.5rem;
                }

                h2 {
                    font-size: 3rem;
                    color: white;
                    line-height: 1.1;
                    margin-bottom: 1rem;
                }
                
                .highlight-text { color: var(--color-accent); font-style: italic; }
                
                .description {
                    color: #A3BCA9;
                    font-size: 1.1rem;
                    max-width: 500px;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    justify-items: center;
                }

                .feature-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                }

                .icon-badge {
                    background: rgba(255,255,255,0.05);
                    padding: 10px;
                    border-radius: 12px;
                }

                .feature-card h4 {
                    font-size: 1rem;
                    color: white;
                    margin-bottom: 0.2rem;
                }

                .feature-card p {
                    font-size: 0.85rem;
                    color: #888;
                }
            `})]})},f2=()=>d.jsxs("div",{className:"business-slide",children:[d.jsx("div",{className:"container h-full",children:d.jsxs("div",{className:"two-col-grid",children:[d.jsxs("div",{className:"revenue-section",children:[d.jsx("span",{className:"tag",children:"Monetization"}),d.jsx("h2",{children:"How We Make Money"}),d.jsxs("div",{className:"revenue-list",children:[d.jsxs(_.div,{className:"rev-item primary",initial:{x:-20,opacity:0},whileInView:{x:0,opacity:1},viewport:{once:!0},children:[d.jsx("div",{className:"icon-box",children:d.jsx(qx,{})}),d.jsxs("div",{children:[d.jsx("h3",{children:"Ads Platform"}),d.jsx("p",{children:"Hyper-local ads for fertilizers, tractors, & tools."})]})]}),d.jsxs(_.div,{className:"rev-item",initial:{x:-20,opacity:0},whileInView:{x:0,opacity:1},viewport:{once:!0},transition:{delay:.1},children:[d.jsx("div",{className:"icon-box",children:d.jsx(Bx,{})}),d.jsxs("div",{children:[d.jsx("h3",{children:"Transaction Fees"}),d.jsx("p",{children:"Commission on marketplace sales & hiring."})]})]}),d.jsxs(_.div,{className:"rev-item",initial:{x:-20,opacity:0},whileInView:{x:0,opacity:1},viewport:{once:!0},transition:{delay:.2},children:[d.jsx("div",{className:"icon-box",children:d.jsx(i2,{})}),d.jsxs("div",{children:[d.jsx("h3",{children:"Subscription"}),d.jsx("p",{children:"Premium advisory & advanced analytics."})]})]})]})]}),d.jsxs(_.div,{className:"gtm-section",initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5},children:[d.jsx("h3",{children:"Go-To-Market Strategy"}),d.jsxs("div",{className:"gtm-timeline",children:[d.jsxs("div",{className:"gtm-step",children:[d.jsx("span",{className:"step-count",children:"01"}),d.jsx("h4",{children:"Grassroots"}),d.jsx("p",{children:"Partner with 500+ FPOs (Farmer Organizations)."})]}),d.jsx("div",{className:"line"}),d.jsxs("div",{className:"gtm-step",children:[d.jsx("span",{className:"step-count",children:"02"}),d.jsx("h4",{children:"Digital Viral"}),d.jsx("p",{children:'Referral program: "Invite a farmer, get free soil test".'})]}),d.jsx("div",{className:"line"}),d.jsxs("div",{className:"gtm-step",children:[d.jsx("span",{className:"step-count",children:"03"}),d.jsx("h4",{children:"Govt Collab"}),d.jsx("p",{children:"Integrate with state agriculture databases."})]})]})]})]})}),d.jsx("style",{children:`
        .business-slide {
           min-height: 100vh;
           height: auto;
           width: 100%;
           background: #102A1E;
           display: flex;
           align-items: center;
           justify-content: center;
        }

        .two-col-grid {
           display: grid;
           grid-template-columns: 1fr;
           gap: 4rem;
           padding: 4rem 0;
           align-items: center;
           justify-items: center;
           width: 100%;
           max-width: 1200px;
           margin: 0 auto;
        }

        @media (min-width: 900px) {
           .two-col-grid {
              grid-template-columns: 1fr 1fr;
              justify-items: center;
           }
        }

        .tag {
           color: var(--color-accent);
           text-transform: uppercase;
           letter-spacing: 2px;
           font-size: 0.8rem;
           margin-bottom: 1rem;
           display: block;
        }

        .revenue-section {
           text-align: center;
           display: flex;
           flex-direction: column;
           align-items: center;
           width: 100%;
           max-width: 600px;
        }

        .revenue-section h2 {
           font-size: 3rem;
           color: white;
           margin-bottom: 3rem;
        }

        .revenue-list {
           display: flex;
           flex-direction: column;
           gap: 1.5rem;
        }

        .rev-item {
           background: rgba(255,255,255,0.05);
           padding: 1.5rem;
           border-radius: 16px;
           display: flex;
           align-items: center;
           gap: 1.5rem;
           border: 1px solid rgba(255,255,255,0.05);
           transition: transform 0.2s;
        }

        .rev-item:hover {
           transform: translateX(10px);
           background: rgba(255,255,255,0.08);
        }

        .rev-item.primary {
           border-color: var(--color-accent);
           background: linear-gradient(90deg, rgba(212, 238, 38, 0.1) 0%, rgba(255,255,255,0.05) 100%);
        }

        .icon-box {
           width: 50px;
           height: 50px;
           background: rgba(0,0,0,0.3);
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
           color: var(--color-accent);
        }

        .rev-item h3 {
           color: white;
           font-size: 1.2rem;
           margin-bottom: 0.25rem;
        }

        .rev-item p {
           color: #A3BCA9;
           font-size: 0.9rem;
        }

        .gtm-section {
           background: #0A1F12;
           padding: 3rem;
           border-radius: 32px;
           border: 1px solid rgba(255,255,255,0.05);
           width: 100%;
           max-width: 600px;
        }

        .gtm-section h3 {
           color: white;
           font-size: 1.8rem;
           margin-bottom: 2.5rem;
           text-align: center;
        }

        .gtm-timeline {
           display: flex;
           flex-direction: column;
           gap: 0;
           position: relative;
        }

        .gtm-step {
           display: flex;
           flex-direction: column;
           gap: 0.5rem;
           padding-left: 2rem;
           position: relative;
           padding-bottom: 2rem;
        }

        .gtm-step:last-child { padding-bottom: 0; }

        .line {
           position: absolute;
           left: 15px; /* Adjust based on circle size */
           top: 0;
           bottom: 0;
           width: 2px;
           background: rgba(255,255,255,0.1);
        }

        /* Connecting lines logic is complex in CSS only, simplified approach: */
        .gtm-step::before {
           content: '';
           position: absolute;
           left: 0;
           top: 0;
           width: 12px;
           height: 12px;
           border-radius: 50%;
           background: var(--color-accent);
           box-shadow: 0 0 0 4px rgba(212, 238, 38, 0.2);
        }
        
        .gtm-step::after {
            content: '';
            position: absolute;
            left: 5px;
            top: 12px;
            bottom: -12px;
            width: 2px;
            background: rgba(255,255,255,0.1);
        }

        .gtm-step:last-child::after {
            display: none;
        }

        .step-count {
           font-family: var(--font-heading);
           font-size: 2rem;
           color: rgba(255,255,255,0.1);
           position: absolute;
           right: 0;
           top: 0;
        }

        .gtm-step h4 {
           color: white;
           font-size: 1.2rem;
        }

        .gtm-step p {
           color: #888;
           font-size: 0.95rem;
        }
      `})]}),p2=()=>{const e=[{year:"Phase 0",title:"Building Prototype",desc:"Developing MVP with core social & marketplace features.",icon:d.jsx($x,{size:24}),status:"active"},{year:"Phase 1",title:"South India Pilot",desc:"Onboard 50k farmers & 200 FPOs.",icon:d.jsx(Ux,{size:24}),status:"future"},{year:"Phase 2",title:"Pan-India Expansion",desc:"Scale to 10M users. Launch Marketplace.",icon:d.jsx(Zx,{size:24}),status:"future"},{year:"Phase 3",title:"AI Integration",desc:"Deploy crop disease AI & price prediction.",icon:d.jsx(Ox,{size:24}),status:"future"}];return d.jsxs("div",{className:"roadmap-slide",children:[d.jsx("div",{className:"container h-full",children:d.jsxs("div",{className:"center-content",children:[d.jsxs("div",{className:"header-block",children:[d.jsx("span",{className:"tag",children:"The Vision"}),d.jsx("h2",{children:"Strategic Roadmap"})]}),d.jsx("div",{className:"roadmap-path",children:e.map((t,n)=>d.jsxs("div",{className:`milestone ${t.status}`,children:[d.jsxs(_.div,{className:"marker-container",initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{delay:n*.2},children:[d.jsx("div",{className:"marker-ring",children:d.jsx("div",{className:"icon",children:t.icon})}),n!==e.length-1&&d.jsx("div",{className:"connector"})]}),d.jsxs(_.div,{className:"milestone-content",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:n*.2+.1},children:[d.jsx("span",{className:"phase-badge",children:t.year}),d.jsx("h3",{children:t.title}),d.jsx("p",{children:t.desc})]})]},n))})]})}),d.jsx("style",{children:`
        .roadmap-slide {
           min-height: 100vh;
           height: auto;
           width: 100%;
           background: #0D2818;
           display: flex;
           align-items: center;
           justify-content: center;
           padding: 4rem 0;
        }

        .center-content {
           display: flex;
           flex-direction: column;
           align-items: center;
           width: 100%;
        }

        .header-block {
           text-align: center;
           margin-bottom: 4rem;
        }

        .tag {
           color: var(--color-accent);
           text-transform: uppercase;
           letter-spacing: 2px;
           font-size: 0.8rem;
           margin-bottom: 1rem;
           display: block;
        }

        .header-block h2 {
           font-size: 3rem;
           color: white;
        }

        .roadmap-path {
           display: flex;
           gap: 2rem;
           width: 100%;
           max-width: 1200px;
           justify-content: center;
        }

        .milestone {
           display: flex;
           flex-direction: column;
           align-items: center;
           flex: 1;
           position: relative;
        }

        .marker-container {
           position: relative;
           display: flex;
           justify-content: center;
           width: 100%;
           height: 80px;
        }

        .marker-ring {
           width: 60px;
           height: 60px;
           border-radius: 50%;
           background: #163B24;
           border: 2px solid #2D6A4F;
           display: flex;
           align-items: center;
           justify-content: center;
           z-index: 2;
           color: #888;
           transition: all 0.3s;
        }

        .milestone.complete .marker-ring, .milestone.active .marker-ring {
           background: var(--color-accent);
           border-color: var(--color-accent);
           color: #0D2818;
           box-shadow: 0 0 20px rgba(212, 238, 38, 0.4);
        }

        .connector {
           position: absolute;
           top: 30px;
           left: 50%;
           right: -50%;
           height: 2px;
           background: #2D6A4F;
           z-index: 1;
        }

        .milestone.complete .connector {
           background: var(--color-accent);
        }

        .milestone-content {
           text-align: center;
           background: rgba(255,255,255,0.03);
           padding: 1.5rem;
           border-radius: 16px;
           border: 1px solid rgba(255,255,255,0.05);
           width: 100%;
           margin-top: 1rem;
        }

        .phase-badge {
           display: inline-block;
           font-size: 0.75rem;
           text-transform: uppercase;
           letter-spacing: 1px;
           margin-bottom: 0.5rem;
           color: #888;
        }

        .milestone.active .phase-badge {
           color: var(--color-accent);
        }

        .milestone h3 {
           color: white;
           font-size: 1.1rem;
           margin-bottom: 0.5rem;
        }

        .milestone p {
           color: #A3BCA9;
           font-size: 0.85rem;
           line-height: 1.4;
        }

        @media (max-width: 900px) {
           .roadmap-path {
              flex-direction: column;
              align-items: flex-start;
              gap: 0;
           }

           .milestone {
              flex-direction: row;
              align-items: flex-start;
              width: 100%;
              gap: 1.5rem;
              padding-bottom: 2rem;
           }

           .marker-container {
              width: 60px;
              justify-content: flex-start;
              height: auto;
           }

           .connector {
              top: 60px;
              left: 30px;
              right: auto;
              width: 2px;
              height: 100%;
           }
           
           .milestone-content {
              margin-top: 0;
              text-align: left;
           }
        }
      `})]})},h2="/assets/jacob-CHZMknAs.png",m2="/assets/thomas-B2JnL6TM.jpeg",g2="/assets/karthik-CZZ0Gqdz.jpg",y2="/assets/shiju-DtID4hfZ.jpg",v2="/assets/suraj-B5Y4s7DT.jpg",x2="/assets/jono-DfekmxC-.jpg",w2="/assets/alan-wRKvjp4N.jpg",k2="/assets/joyes-CZf0-IHA.jpg",S2="/assets/christo-CdARgFYw.jpg",j2=()=>{const e=[{name:"Jacob",role:"Founder, CEO",image:h2},{name:"Thomas",role:"Co-founder, COO",image:m2},{name:"Karthik",role:"CFO",image:g2},{name:"Shiju",role:"CTO",image:y2},{name:"Sooraj",role:"Team Lead, IT",image:v2},{name:"Jono",role:"CMO",image:x2},{name:"Alan",role:"Marketing Member",image:w2},{name:"Joyes",role:"Human Resource",image:k2},{name:"Christo",role:"Financial Advisor",image:S2}];return d.jsxs("div",{className:"team-slide",children:[d.jsx("div",{className:"container h-full",children:d.jsx("div",{className:"content-wrapper",children:d.jsxs(_.div,{className:"team-block",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[d.jsx("span",{className:"tag",children:"Our Team"}),d.jsx("h2",{children:"Leadership & Visionaries"}),d.jsx("div",{className:"carousel-container",children:d.jsxs("div",{className:"carousel-wrapper",children:[d.jsx("div",{className:"team-group",children:e.map((t,n)=>d.jsxs(_.div,{className:"member-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:n*.1},children:[d.jsxs("div",{className:"avatar-lg",children:[t.image?d.jsx("img",{src:t.image,alt:t.name,onError:r=>{const i=r.target,o=i.nextElementSibling;i&&(i.style.display="none"),o&&(o.style.display="flex")}}):null,d.jsx("div",{className:"avatar-fallback",style:{display:t.image?"none":"flex"},children:t.name.charAt(0)})]}),d.jsxs("div",{children:[d.jsx("h3",{children:t.name}),d.jsx("span",{className:"role",children:t.role})]})]},`${t.name}-first-${n}`))}),d.jsx("div",{className:"team-group","aria-hidden":"true",children:e.map((t,n)=>d.jsxs(_.div,{className:"member-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:n*.1},children:[d.jsxs("div",{className:"avatar-lg",children:[t.image?d.jsx("img",{src:t.image,alt:t.name,onError:r=>{const i=r.target,o=i.nextElementSibling;i&&(i.style.display="none"),o&&(o.style.display="flex")}}):null,d.jsx("div",{className:"avatar-fallback",style:{display:t.image?"none":"flex"},children:t.name.charAt(0)})]}),d.jsxs("div",{children:[d.jsx("h3",{children:t.name}),d.jsx("span",{className:"role",children:t.role})]})]},`${t.name}-second-${n}`))})]})})]})})}),d.jsx("style",{children:`
                .team-slide {
                    min-height: 100vh;
                    height: auto;
                    width: 100%;
                    background: #0B1E14;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    padding: 4rem 0;
                }

                .content-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    max-width: 1000px;
                }

                .tag {
                    color: var(--color-accent);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.8rem;
                    margin-bottom: 0.5rem;
                    display: block;
                    text-align: center;
                }

                .team-block h2 {
                    color: white;
                    font-size: 3rem;
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .carousel-container {
                    position: relative;
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 1rem 0;
                }

                .carousel-wrapper {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    display: flex;
                }

                .team-group {
                    display: flex;
                    gap: 2rem;
                    padding-right: 2rem;
                    will-change: transform;
                    animation: scrolling 20s linear infinite;
                }

                .carousel-container:hover .team-group {
                    animation-play-state: paused;
                }

                @keyframes scrolling {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                .member-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    background: rgba(255,255,255,0.03);
                    padding: 2rem 1.5rem;
                    border-radius: 24px;
                    border: 1px solid rgba(255,255,255,0.05);
                    text-align: center;
                    min-width: 250px;
                    max-width: 250px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    flex-shrink: 0;
                }

                .member-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.4);
                    background: rgba(255,255,255,0.05);
                }


                .avatar-lg {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    flex-shrink: 0;
                    margin-bottom: 0.5rem;
                    border: 3px solid rgba(255,255,255,0.1);
                    background: rgba(255,255,255,0.05);
                }

                .avatar-lg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }

                .avatar-fallback {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    color: var(--color-accent);
                    font-size: 2rem;
                    background: rgba(255,255,255,0.1);
                }

                .member-card h3 {
                    color: white;
                    font-size: 1.25rem;
                    margin-bottom: 0.25rem;
                }

                .role {
                    color: #888;
                    font-size: 0.9rem;
                    display: block;
                }
            `})]})},P2=()=>{const e=()=>{const n=document.querySelector(".snap-container");n&&n.scrollTo({top:0,behavior:"smooth"})},t=n=>{const r=document.querySelector(".snap-container");if(r){const i=document.getElementById(n);if(i){const o=i.offsetTop;r.scrollTo({top:o,behavior:"smooth"})}}};return d.jsxs("footer",{className:"footer",children:[d.jsxs("div",{className:"container footer-container",children:[d.jsxs("div",{className:"footer-content",children:[d.jsxs(_.div,{className:"footer-brand",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[d.jsx("img",{src:Gh,alt:"Regrov",style:{height:"50px",width:"auto",marginBottom:"1rem"}}),d.jsx("p",{className:"footer-tagline",children:`"To become the world's most trusted digital ecosystem for farmers."`}),d.jsx("div",{className:"social-links",children:d.jsx("a",{href:"https://www.instagram.com/regrov_/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",className:"social-link",children:d.jsx(Gx,{size:20})})})]}),d.jsxs(_.div,{className:"footer-links",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:[d.jsx("h4",{children:"Quick Links"}),d.jsxs("ul",{children:[d.jsx("li",{children:d.jsx("button",{onClick:()=>t("hero"),children:"Home"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("problem"),children:"The Problem"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("solution"),children:"Solution"})})]})]}),d.jsxs(_.div,{className:"footer-contact",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:[d.jsx("h4",{children:"Get in Touch"}),d.jsxs("div",{className:"contact-item",children:[d.jsx(Yx,{size:18,className:"contact-icon"}),d.jsx("span",{children:"info@baytebar.com"})]}),d.jsxs("div",{className:"contact-item",children:[d.jsx(e2,{size:18,className:"contact-icon"}),d.jsx("span",{children:"+91 8848187268"})]}),d.jsxs("div",{className:"contact-item",children:[d.jsx(Xx,{size:18,className:"contact-icon"}),d.jsx("span",{children:"Idukki"})]})]})]}),d.jsx(_.div,{className:"footer-bottom",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,delay:.4},children:d.jsx("div",{className:"footer-bottom-content",children:d.jsx("p",{children:"© 2026 Regrov. All rights reserved."})})}),d.jsx(_.button,{className:"scroll-to-top",onClick:e,initial:{opacity:0,scale:0},whileInView:{opacity:1,scale:1},viewport:{once:!0},whileHover:{scale:1.1},whileTap:{scale:.9},transition:{duration:.3},children:d.jsx(bx,{size:24})})]}),d.jsx("style",{children:`
                .footer {
                    width: 100%;
                    background: linear-gradient(180deg, #0D2818 0%, #0A1F12 100%);
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 4rem 0 2rem;
                    position: relative;
                    overflow: hidden;
                }

                .footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
                    opacity: 0.3;
                }

                .footer-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }

                @media (min-width: 768px) {
                    .footer-content {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) {
                    .footer-content {
                        grid-template-columns: 2fr 1.5fr 1.5fr;
                    }
                }

                .footer-brand {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .footer-logo {
                    font-family: var(--font-heading);
                    font-size: 2rem;
                    color: var(--color-accent);
                    margin: 0;
                    font-weight: 700;
                }

                .footer-tagline {
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                    font-style: italic;
                    line-height: 1.6;
                    max-width: 300px;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 0.5rem;
                }

                .social-link {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    color: var(--color-text-muted);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .social-link:hover {
                    background: var(--color-accent);
                    color: var(--color-text-dark);
                    border-color: var(--color-accent);
                    transform: translateY(-3px);
                }

                .footer-links h4,
                .footer-contact h4 {
                    color: white;
                    font-size: 1.1rem;
                    margin-bottom: 1.5rem;
                    font-weight: 600;
                }

                .footer-links ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .footer-links button {
                    background: none;
                    border: none;
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                    cursor: pointer;
                    text-align: left;
                    padding: 0;
                    transition: all 0.2s ease;
                    font-family: var(--font-body);
                }

                .footer-links button:hover {
                    color: var(--color-accent);
                    transform: translateX(5px);
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                }

                .contact-icon {
                    color: var(--color-accent);
                    flex-shrink: 0;
                }

                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding-top: 2rem;
                    margin-top: 3rem;
                    width: 100%;
                    grid-column: 1 / -1;
                }

                .footer-bottom-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-text-muted);
                    font-size: 0.85rem;
                    text-align: center;
                }

                .footer-bottom-content p {
                    margin: 0;
                }

                .scroll-to-top {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    width: 50px;
                    height: 50px;
                    background: var(--color-accent);
                    color: var(--color-text-dark);
                    border: none;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 4px 15px rgba(212, 238, 38, 0.4);
                    z-index: 999;
                    transition: all 0.3s ease;
                }

                .scroll-to-top:hover {
                    background: white;
                    box-shadow: 0 6px 20px rgba(212, 238, 38, 0.5);
                }

                @media (max-width: 768px) {
                    .scroll-to-top {
                        bottom: 1rem;
                        right: 1rem;
                        width: 45px;
                        height: 45px;
                    }
                }
            `})]})};function C2(){const[e,t]=A.useState(0),n=A.useRef(null),r=[{id:"hero",component:d.jsx(l2,{})},{id:"problem",component:d.jsx(u2,{})},{id:"solution",component:d.jsx(d2,{})},{id:"market",component:d.jsx(c2,{})},{id:"business",component:d.jsx(f2,{})},{id:"roadmap",component:d.jsx(p2,{})},{id:"team",component:d.jsx(j2,{})}],i=()=>{if(n.current){const s=n.current.scrollTop,a=window.innerHeight,l=Math.round(s/a);t(l)}},o=s=>{n.current&&(n.current.scrollTo({top:s*window.innerHeight,behavior:"smooth"}),t(s))};return d.jsxs("div",{className:"app",children:[d.jsx(zx,{}),d.jsx(Rx,{activeIndex:e,count:r.length,onSelect:o}),d.jsxs("main",{ref:n,className:"snap-container",onScroll:i,children:[r.map(s=>d.jsx("section",{id:s.id,className:"snap-section",children:s.component},s.id)),d.jsx("section",{id:"footer",className:"snap-section footer-section",children:d.jsx(P2,{})})]})]})}Ms.createRoot(document.getElementById("root")).render(d.jsx(ba.StrictMode,{children:d.jsx(C2,{})}));
