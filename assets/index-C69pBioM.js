(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Jf={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function ly(){if(h_)return Do;h_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var p_;function cy(){return p_||(p_=1,Jf.exports=ly()),Jf.exports}var W=cy(),$f={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function uy(){if(m_)return pe;m_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,A={};function M(O,it,bt){this.props=O,this.context=it,this.refs=A,this.updater=bt||x}M.prototype.isReactComponent={},M.prototype.setState=function(O,it){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,it,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=M.prototype;function z(O,it,bt){this.props=O,this.context=it,this.refs=A,this.updater=bt||x}var R=z.prototype=new _;R.constructor=z,b(R,M.prototype),R.isPureReactComponent=!0;var D=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function G(O,it,bt,At,Ft,qt){return bt=qt.ref,{$$typeof:o,type:O,key:it,ref:bt!==void 0?bt:null,props:qt}}function $(O,it){return G(O.type,it,void 0,void 0,void 0,O.props)}function U(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function L(O){var it={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(bt){return it[bt]})}var V=/\/+/g;function Y(O,it){return typeof O=="object"&&O!==null&&O.key!=null?L(""+O.key):it.toString(36)}function mt(){}function _t(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(mt,mt):(O.status="pending",O.then(function(it){O.status==="pending"&&(O.status="fulfilled",O.value=it)},function(it){O.status==="pending"&&(O.status="rejected",O.reason=it)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function gt(O,it,bt,At,Ft){var qt=typeof O;(qt==="undefined"||qt==="boolean")&&(O=null);var rt=!1;if(O===null)rt=!0;else switch(qt){case"bigint":case"string":case"number":rt=!0;break;case"object":switch(O.$$typeof){case o:case t:rt=!0;break;case v:return rt=O._init,gt(rt(O._payload),it,bt,At,Ft)}}if(rt)return Ft=Ft(O),rt=At===""?"."+Y(O,0):At,D(Ft)?(bt="",rt!=null&&(bt=rt.replace(V,"$&/")+"/"),gt(Ft,it,bt,"",function(ie){return ie})):Ft!=null&&(U(Ft)&&(Ft=$(Ft,bt+(Ft.key==null||O&&O.key===Ft.key?"":(""+Ft.key).replace(V,"$&/")+"/")+rt)),it.push(Ft)),1;rt=0;var St=At===""?".":At+":";if(D(O))for(var Nt=0;Nt<O.length;Nt++)At=O[Nt],qt=St+Y(At,Nt),rt+=gt(At,it,bt,qt,Ft);else if(Nt=y(O),typeof Nt=="function")for(O=Nt.call(O),Nt=0;!(At=O.next()).done;)At=At.value,qt=St+Y(At,Nt++),rt+=gt(At,it,bt,qt,Ft);else if(qt==="object"){if(typeof O.then=="function")return gt(_t(O),it,bt,At,Ft);throw it=String(O),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return rt}function B(O,it,bt){if(O==null)return O;var At=[],Ft=0;return gt(O,At,"","",function(qt){return it.call(bt,qt,Ft++)}),At}function et(O){if(O._status===-1){var it=O._result;it=it(),it.then(function(bt){(O._status===0||O._status===-1)&&(O._status=1,O._result=bt)},function(bt){(O._status===0||O._status===-1)&&(O._status=2,O._result=bt)}),O._status===-1&&(O._status=0,O._result=it)}if(O._status===1)return O._result.default;throw O._result}var Z=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Tt(){}return pe.Children={map:B,forEach:function(O,it,bt){B(O,function(){it.apply(this,arguments)},bt)},count:function(O){var it=0;return B(O,function(){it++}),it},toArray:function(O){return B(O,function(it){return it})||[]},only:function(O){if(!U(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},pe.Component=M,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=z,pe.StrictMode=r,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,pe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},pe.cache=function(O){return function(){return O.apply(null,arguments)}},pe.cloneElement=function(O,it,bt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=b({},O.props),Ft=O.key,qt=void 0;if(it!=null)for(rt in it.ref!==void 0&&(qt=void 0),it.key!==void 0&&(Ft=""+it.key),it)!F.call(it,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&it.ref===void 0||(At[rt]=it[rt]);var rt=arguments.length-2;if(rt===1)At.children=bt;else if(1<rt){for(var St=Array(rt),Nt=0;Nt<rt;Nt++)St[Nt]=arguments[Nt+2];At.children=St}return G(O.type,Ft,void 0,void 0,qt,At)},pe.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},pe.createElement=function(O,it,bt){var At,Ft={},qt=null;if(it!=null)for(At in it.key!==void 0&&(qt=""+it.key),it)F.call(it,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ft[At]=it[At]);var rt=arguments.length-2;if(rt===1)Ft.children=bt;else if(1<rt){for(var St=Array(rt),Nt=0;Nt<rt;Nt++)St[Nt]=arguments[Nt+2];Ft.children=St}if(O&&O.defaultProps)for(At in rt=O.defaultProps,rt)Ft[At]===void 0&&(Ft[At]=rt[At]);return G(O,qt,void 0,void 0,null,Ft)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(O){return{$$typeof:h,render:O}},pe.isValidElement=U,pe.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:et}},pe.memo=function(O,it){return{$$typeof:p,type:O,compare:it===void 0?null:it}},pe.startTransition=function(O){var it=N.T,bt={};N.T=bt;try{var At=O(),Ft=N.S;Ft!==null&&Ft(bt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(Tt,Z)}catch(qt){Z(qt)}finally{N.T=it}},pe.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},pe.use=function(O){return N.H.use(O)},pe.useActionState=function(O,it,bt){return N.H.useActionState(O,it,bt)},pe.useCallback=function(O,it){return N.H.useCallback(O,it)},pe.useContext=function(O){return N.H.useContext(O)},pe.useDebugValue=function(){},pe.useDeferredValue=function(O,it){return N.H.useDeferredValue(O,it)},pe.useEffect=function(O,it,bt){var At=N.H;if(typeof bt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return At.useEffect(O,it)},pe.useId=function(){return N.H.useId()},pe.useImperativeHandle=function(O,it,bt){return N.H.useImperativeHandle(O,it,bt)},pe.useInsertionEffect=function(O,it){return N.H.useInsertionEffect(O,it)},pe.useLayoutEffect=function(O,it){return N.H.useLayoutEffect(O,it)},pe.useMemo=function(O,it){return N.H.useMemo(O,it)},pe.useOptimistic=function(O,it){return N.H.useOptimistic(O,it)},pe.useReducer=function(O,it,bt){return N.H.useReducer(O,it,bt)},pe.useRef=function(O){return N.H.useRef(O)},pe.useState=function(O){return N.H.useState(O)},pe.useSyncExternalStore=function(O,it,bt){return N.H.useSyncExternalStore(O,it,bt)},pe.useTransition=function(){return N.H.useTransition()},pe.version="19.1.1",pe}var g_;function Ch(){return g_||(g_=1,$f.exports=uy()),$f.exports}var ae=Ch(),td={exports:{}},Uo={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function fy(){return __||(__=1,(function(o){function t(B,et){var Z=B.length;B.push(et);t:for(;0<Z;){var Tt=Z-1>>>1,O=B[Tt];if(0<l(O,et))B[Tt]=et,B[Z]=O,Z=Tt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var et=B[0],Z=B.pop();if(Z!==et){B[0]=Z;t:for(var Tt=0,O=B.length,it=O>>>1;Tt<it;){var bt=2*(Tt+1)-1,At=B[bt],Ft=bt+1,qt=B[Ft];if(0>l(At,Z))Ft<O&&0>l(qt,At)?(B[Tt]=qt,B[Ft]=Z,Tt=Ft):(B[Tt]=At,B[bt]=Z,Tt=bt);else if(Ft<O&&0>l(qt,Z))B[Tt]=qt,B[Ft]=Z,Tt=Ft;else break t}}return et}function l(B,et){var Z=B.sortIndex-et.sortIndex;return Z!==0?Z:B.id-et.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,y=3,x=!1,b=!1,A=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var et=i(p);et!==null;){if(et.callback===null)r(p);else if(et.startTime<=B)r(p),et.sortIndex=et.expirationTime,t(m,et);else break;et=i(p)}}function N(B){if(A=!1,D(B),!b)if(i(m)!==null)b=!0,F||(F=!0,Y());else{var et=i(p);et!==null&&gt(N,et.startTime-B)}}var F=!1,G=-1,$=5,U=-1;function L(){return M?!0:!(o.unstable_now()-U<$)}function V(){if(M=!1,F){var B=o.unstable_now();U=B;var et=!0;try{t:{b=!1,A&&(A=!1,z(G),G=-1),x=!0;var Z=y;try{e:{for(D(B),g=i(m);g!==null&&!(g.expirationTime>B&&L());){var Tt=g.callback;if(typeof Tt=="function"){g.callback=null,y=g.priorityLevel;var O=Tt(g.expirationTime<=B);if(B=o.unstable_now(),typeof O=="function"){g.callback=O,D(B),et=!0;break e}g===i(m)&&r(m),D(B)}else r(m);g=i(m)}if(g!==null)et=!0;else{var it=i(p);it!==null&&gt(N,it.startTime-B),et=!1}}break t}finally{g=null,y=Z,x=!1}et=void 0}}finally{et?Y():F=!1}}}var Y;if(typeof R=="function")Y=function(){R(V)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,_t=mt.port2;mt.port1.onmessage=V,Y=function(){_t.postMessage(null)}}else Y=function(){_(V,0)};function gt(B,et){G=_(function(){B(o.unstable_now())},et)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(B){switch(y){case 1:case 2:case 3:var et=3;break;default:et=y}var Z=y;y=et;try{return B()}finally{y=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(B,et){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=y;y=B;try{return et()}finally{y=Z}},o.unstable_scheduleCallback=function(B,et,Z){var Tt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Tt+Z:Tt):Z=Tt,B){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Z+O,B={id:v++,callback:et,priorityLevel:B,startTime:Z,expirationTime:O,sortIndex:-1},Z>Tt?(B.sortIndex=Z,t(p,B),i(m)===null&&B===i(p)&&(A?(z(G),G=-1):A=!0,gt(N,Z-Tt))):(B.sortIndex=O,t(m,B),b||x||(b=!0,F||(F=!0,Y()))),B},o.unstable_shouldYield=L,o.unstable_wrapCallback=function(B){var et=y;return function(){var Z=y;y=et;try{return B.apply(this,arguments)}finally{y=Z}}}})(nd)),nd}var v_;function dy(){return v_||(v_=1,ed.exports=fy()),ed.exports}var id={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function hy(){if(x_)return Cn;x_=1;var o=Ch();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},Cn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:x}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.1.1",Cn}var y_;function py(){if(y_)return id.exports;y_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),id.exports=hy(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function my(){if(S_)return Uo;S_=1;var o=dy(),t=Ch(),i=py();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),e;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,s=f;break}if(T===s){S=!0,s=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=c;break}if(T===s){S=!0,s=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var mt=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case M:return"Profiler";case A:return"StrictMode";case N:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case R:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var gt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Tt=[],O=-1;function it(e){return{current:e}}function bt(e){0>O||(e.current=Tt[O],Tt[O]=null,O--)}function At(e,n){O++,Tt[O]=e.current,e.current=n}var Ft=it(null),qt=it(null),rt=it(null),St=it(null);function Nt(e,n){switch(At(rt,n),At(qt,e),At(Ft,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Gg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Gg(n),e=Vg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}bt(Ft),At(Ft,e)}function ie(){bt(Ft),bt(qt),bt(rt)}function Jt(e){e.memoizedState!==null&&At(St,e);var n=Ft.current,a=Vg(n,e.type);n!==a&&(At(qt,e),At(Ft,a))}function he(e){qt.current===e&&(bt(Ft),bt(qt)),St.current===e&&(bt(St),To._currentValue=Z)}var Qe=Object.prototype.hasOwnProperty,H=o.unstable_scheduleCallback,we=o.unstable_cancelCallback,P=o.unstable_shouldYield,lt=o.unstable_requestPaint,q=o.unstable_now,yt=o.unstable_getCurrentPriorityLevel,ot=o.unstable_ImmediatePriority,Rt=o.unstable_UserBlockingPriority,Ut=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,w=o.unstable_IdlePriority,E=o.log,Q=o.unstable_setDisableYieldValue,ct=null,pt=null;function dt(e){if(typeof E=="function"&&Q(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ct,e)}catch{}}var Gt=Math.clz32?Math.clz32:$t,Ot=Math.log,Qt=Math.LN2;function $t(e){return e>>>=0,e===0?32:31-(Ot(e)/Qt|0)|0}var Ct=256,It=4194304;function ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=ee(s):(S&=T,S!==0?c=ee(S):a||(a=T&~e,a!==0&&(c=ee(a))))):(T=s&~f,T!==0?c=ee(T):S!==0?c=ee(S):a||(a=s&~e,a!==0&&(c=ee(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function de(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Ct;return Ct<<=1,(Ct&4194048)===0&&(Ct=256),e}function Lt(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Wt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wt(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,at=e.hiddenUpdates;for(a=S&~a;0<a;){var vt=31-Gt(a),Mt=1<<vt;T[vt]=0,I[vt]=-1;var st=at[vt];if(st!==null)for(at[vt]=null,vt=0;vt<st.length;vt++){var ut=st[vt];ut!==null&&(ut.lane&=-536870913)}a&=~Mt}s!==0&&Et(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Et(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Gt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Kt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Gt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function fe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ce(){var e=et.p;return e!==0?e:(e=window.event,e===void 0?32:o_(e.type))}function hi(e,n){var a=et.p;try{return et.p=e,n()}finally{et.p=a}}var un=Math.random().toString(36).slice(2),fn="__reactFiber$"+un,Je="__reactProps$"+un,Ti="__reactContainer$"+un,Er="__reactEvents$"+un,tl="__reactListeners$"+un,br="__reactHandles$"+un,Bs="__reactResources$"+un,Ai="__reactMarker$"+un;function Tr(e){delete e[fn],delete e[Je],delete e[Er],delete e[tl],delete e[br]}function zi(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ti]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=qg(e);e!==null;){if(a=e[fn])return a;e=qg(e)}return n}e=a,a=e.parentNode}return null}function la(e){if(e=e[fn]||e[Ti]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Xa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ca(e){var n=e[Bs];return n||(n=e[Bs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[Ai]=!0}var el=new Set,nl={};function C(e,n){j(e,n),j(e+"Capture",n)}function j(e,n){for(nl[e]=n,e=0;e<n.length;e++)el.add(n[e])}var ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ht={},J={};function Dt(e){return Qe.call(J,e)?!0:Qe.call(ht,e)?!1:ft.test(e)?J[e]=!0:(ht[e]=!0,!1)}function Ht(e,n,a){if(Dt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Yt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Vt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var se,le;function te(e){if(se===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);se=n&&n[1]||"",le=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+se+e+le}var ge=!1;function De(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ut){var st=ut}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ut){st=ut}e.call(Mt.prototype)}}else{try{throw Error()}catch(ut){st=ut}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ut){if(ut&&st&&typeof ut.stack=="string")return[ut.stack,st.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var I=S.split(`
`),at=T.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<at.length&&!at[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===at.length)for(s=I.length-1,c=at.length-1;1<=s&&0<=c&&I[s]!==at[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==at[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==at[c]){var vt=`
`+I[s].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=s&&0<=c);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?te(a):""}function je(e){switch(e.tag){case 26:case 27:case 5:return te(e.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return te("Activity");default:return""}}function Ie(e){try{var n="";do n+=je(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function re(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(e){var n=re(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Me(e){e._valueTracker||(e._valueTracker=qe(e))}function Tn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=re(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nn=/[\n"\\]/g;function gn(e){return e.replace(Nn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(e,n,a,s,c,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?An(e,S,_e(n)):a!=null?An(e,S,_e(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+_e(T):e.removeAttribute("name")}function On(e,n,a,s,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function An(e,n,a){n==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $e(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Ar(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(gt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var rv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||rv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Gh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Gh(e,f,n[f])}function Kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return ov.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rr=null,Cr=null;function kh(e){var n=la(e);if(n&&(e=n.stateNode)){var a=e[Je]||null;t:switch(e=n.stateNode,n.type){case"input":if(ke(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Je]||null;if(!c)throw Error(r(90));ke(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Tn(s)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$e(e,!!a.multiple,n,!1)}}}var $c=!1;function Xh(e,n,a){if($c)return e(n,a);$c=!0;try{var s=e(n);return s}finally{if($c=!1,(Rr!==null||Cr!==null)&&(Vl(),Rr&&(n=Rr,e=Cr,Cr=Rr=null,kh(n),e)))for(n=0;n<e.length;n++)kh(e[n])}}function Is(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Je]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(Fi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){tu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{tu=!1}var ua=null,eu=null,al=null;function Wh(){if(al)return al;var e,n=eu,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return al=c.slice(e,1<s?1-s:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function qh(){return!1}function Hn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:qh,this.isPropagationStopped=qh,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Hn(Wa),Fs=v({},Wa,{view:0,detail:0}),lv=Hn(Fs),nu,iu,Hs,ll=v({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hs&&(Hs&&e.type==="mousemove"?(nu=e.screenX-Hs.screenX,iu=e.screenY-Hs.screenY):iu=nu=0,Hs=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),Yh=Hn(ll),cv=v({},ll,{dataTransfer:0}),uv=Hn(cv),fv=v({},Fs,{relatedTarget:0}),au=Hn(fv),dv=v({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=Hn(dv),pv=v({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mv=Hn(pv),gv=v({},Wa,{data:0}),jh=Hn(gv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xv[e])?!!n[e]:!1}function ru(){return yv}var Sv=v({},Fs,{key:function(e){if(e.key){var n=_v[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mv=Hn(Sv),Ev=v({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=Hn(Ev),bv=v({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Tv=Hn(bv),Av=v({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=Hn(Av),Cv=v({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Hn(Cv),Dv=v({},Wa,{newState:0,oldState:0}),Uv=Hn(Dv),Lv=[9,13,27,32],su=Fi&&"CompositionEvent"in window,Gs=null;Fi&&"documentMode"in document&&(Gs=document.documentMode);var Nv=Fi&&"TextEvent"in window&&!Gs,Kh=Fi&&(!su||Gs&&8<Gs&&11>=Gs),Qh=" ",Jh=!1;function $h(e,n){switch(e){case"keyup":return Lv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function Ov(e,n){switch(e){case"compositionend":return tp(n);case"keypress":return n.which!==32?null:(Jh=!0,Qh);case"textInput":return e=n.data,e===Qh&&Jh?null:e;default:return null}}function Pv(e,n){if(wr)return e==="compositionend"||!su&&$h(e,n)?(e=Wh(),al=eu=ua=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kh&&n.locale!=="ko"?null:n.data;default:return null}}var Bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bv[e.type]:n==="textarea"}function np(e,n,a,s){Rr?Cr?Cr.push(s):Cr=[s]:Rr=s,n=jl(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Vs=null,ks=null;function Iv(e){Bg(e,0)}function cl(e){var n=Xa(e);if(Tn(n))return e}function ip(e,n){if(e==="change")return n}var ap=!1;if(Fi){var ou;if(Fi){var lu="oninput"in document;if(!lu){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),lu=typeof rp.oninput=="function"}ou=lu}else ou=!1;ap=ou&&(!document.documentMode||9<document.documentMode)}function sp(){Vs&&(Vs.detachEvent("onpropertychange",op),ks=Vs=null)}function op(e){if(e.propertyName==="value"&&cl(ks)){var n=[];np(n,ks,e,Jc(e)),Xh(Iv,n)}}function zv(e,n,a){e==="focusin"?(sp(),Vs=n,ks=a,Vs.attachEvent("onpropertychange",op)):e==="focusout"&&sp()}function Fv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(ks)}function Hv(e,n){if(e==="click")return cl(n)}function Gv(e,n){if(e==="input"||e==="change")return cl(n)}function Vv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Vv;function Xs(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Qe.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cp(e,n){var a=lp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=lp(a)}}function up(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?up(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pi(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var kv=Fi&&"documentMode"in document&&11>=document.documentMode,Dr=null,uu=null,Ws=null,fu=!1;function dp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Dr==null||Dr!==pi(s)||(s=Dr,"selectionStart"in s&&cu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ws&&Xs(Ws,s)||(Ws=s,s=jl(uu,"onSelect"),0<s.length&&(n=new ol("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Dr)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ur={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},du={},hp={};Fi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Ya(e){if(du[e])return du[e];if(!Ur[e])return e;var n=Ur[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return du[e]=n[a];return e}var pp=Ya("animationend"),mp=Ya("animationiteration"),gp=Ya("animationstart"),Xv=Ya("transitionrun"),Wv=Ya("transitionstart"),qv=Ya("transitioncancel"),_p=Ya("transitionend"),vp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function mi(e,n){vp.set(e,n),C(n,[e])}var xp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=xp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ie(n)},xp.set(e,n),n)}return{value:e,source:n,stack:Ie(n)}}var ai=[],Lr=0,pu=0;function ul(){for(var e=Lr,n=pu=Lr=0;n<e;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&yp(a,c,f)}}function fl(e,n,a,s){ai[Lr++]=e,ai[Lr++]=n,ai[Lr++]=a,ai[Lr++]=s,pu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function mu(e,n,a,s){return fl(e,n,a,s),dl(e)}function Nr(e,n){return fl(e,null,null,n),dl(e)}function yp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Gt(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function dl(e){if(50<_o)throw _o=0,Mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Or={};function Yv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,s){return new Yv(e,n,a,s)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,s,c,f){var S=0;if(s=e,typeof e=="function")gu(e)&&(S=1);else if(typeof e=="string")S=Zx(e,a,Ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=jn(31,a,n,c),e.elementType=U,e.lanes=f,e;case b:return ja(a.children,c,f,n);case A:S=8,c|=24;break;case M:return e=jn(12,a,n,c|2),e.elementType=M,e.lanes=f,e;case N:return e=jn(13,a,n,c),e.elementType=N,e.lanes=f,e;case F:return e=jn(19,a,n,c),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case R:S=10;break t;case z:S=9;break t;case D:S=11;break t;case G:S=14;break t;case $:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=jn(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function ja(e,n,a,s){return e=jn(7,e,s,n),e.lanes=a,e}function _u(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function vu(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Pr=[],Br=0,pl=null,ml=0,ri=[],si=0,Za=null,Gi=1,Vi="";function Ka(e,n){Pr[Br++]=ml,Pr[Br++]=pl,pl=e,ml=n}function Mp(e,n,a){ri[si++]=Gi,ri[si++]=Vi,ri[si++]=Za,Za=e;var s=Gi;e=Vi;var c=32-Gt(s)-1;s&=~(1<<c),a+=1;var f=32-Gt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Gi=1<<32-Gt(n)+c|a<<c|s,Vi=f+e}else Gi=1<<f|a<<c|s,Vi=e}function xu(e){e.return!==null&&(Ka(e,1),Mp(e,1,0))}function yu(e){for(;e===pl;)pl=Pr[--Br],Pr[Br]=null,ml=Pr[--Br],Pr[Br]=null;for(;e===Za;)Za=ri[--si],ri[si]=null,Vi=ri[--si],ri[si]=null,Gi=ri[--si],ri[si]=null}var Pn=null,tn=null,Ne=!1,Qa=null,Ri=!1,Su=Error(r(519));function Ja(e){var n=Error(r(418,""));throw js(ii(n,e)),Su}function Ep(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[fn]=e,n[Je]=s,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)be(xo[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),On(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Me(n);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),Ar(n,s.value,s.defaultValue,s.children),Me(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Hg(n.textContent,a)?(s.popover!=null&&(be("beforetoggle",n),be("toggle",n)),s.onScroll!=null&&be("scroll",n),s.onScrollEnd!=null&&be("scrollend",n),s.onClick!=null&&(n.onclick=Zl),n=!0):n=!1,n||Ja(e)}function bp(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Pn=Pn.return}}function qs(e){if(e!==Pn)return!1;if(!Ne)return bp(e),Ne=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&tn&&Ja(e),bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){tn=_i(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}tn=null}}else n===27?(n=tn,Aa(e.type)?(e=Vf,Vf=null,tn=e):tn=n):tn=Pn?_i(e.stateNode.nextSibling):null;return!0}function Ys(){tn=Pn=null,Ne=!1}function Tp(){var e=Qa;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),Qa=null),e}function js(e){Qa===null?Qa=[e]:Qa.push(e)}var Mu=it(null),$a=null,ki=null;function fa(e,n,a){At(Mu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Mu.current,bt(Mu)}function Eu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function bu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Eu(f.return,a,e),s||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Eu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Zs(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;Yn(c.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(c===St.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}c=c.return}e!==null&&bu(n,e,a,s),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tr(e){$a=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Ap($a,e)}function _l(e,n){return $a===null&&tr(e),Ap(e,n)}function Ap(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var jv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Zv=o.unstable_scheduleCallback,Kv=o.unstable_NormalPriority,dn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new jv,data:new Map,refCount:0}}function Ks(e){e.refCount--,e.refCount===0&&Zv(Kv,function(){e.controller.abort()})}var Qs=null,Au=0,Ir=0,zr=null;function Qv(e,n){if(Qs===null){var a=Qs=[];Au=0,Ir=wf(),zr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Au++,n.then(Rp,Rp),n}function Rp(){if(--Au===0&&Qs!==null){zr!==null&&(zr.status="fulfilled");var e=Qs;Qs=null,Ir=0,zr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Cp=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qv(e,n),Cp!==null&&Cp(e,n)};var er=it(null);function Ru(){var e=er.current;return e!==null?e:We.pooledCache}function vl(e,n){n===null?At(er,er.current):At(er,n.pool)}function wp(){var e=Ru();return e===null?null:{parent:dn._currentValue,pool:e}}var Js=Error(r(460)),Dp=Error(r(474)),xl=Error(r(542)),Cu={then:function(){}};function Up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yl(){}function Lp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(yl,yl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e;default:if(typeof n.status=="string")n.then(yl,yl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e}throw $s=n,Js}}var $s=null;function Np(){if($s===null)throw Error(r(459));var e=$s;return $s=null,e}function Op(e){if(e===Js||e===xl)throw Error(r(483))}var da=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=dl(e),yp(e,null,a),n}return fl(e,s,n,a),dl(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Kt(e,a)}}function Uu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function eo(){if(Lu){var e=zr;if(e!==null)throw e}}function no(e,n,a,s){Lu=!1;var c=e.updateQueue;da=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var I=T,at=I.next;I.next=null,S===null?f=at:S.next=at,S=I;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,T=vt.lastBaseUpdate,T!==S&&(T===null?vt.firstBaseUpdate=at:T.next=at,vt.lastBaseUpdate=I))}if(f!==null){var Mt=c.baseState;S=0,vt=at=I=null,T=f;do{var st=T.lane&-536870913,ut=st!==T.lane;if(ut?(Re&st)===st:(s&st)===st){st!==0&&st===Ir&&(Lu=!0),vt!==null&&(vt=vt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ue=e,oe=T;st=n;var He=a;switch(oe.tag){case 1:if(ue=oe.payload,typeof ue=="function"){Mt=ue.call(He,Mt,st);break t}Mt=ue;break t;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=oe.payload,st=typeof ue=="function"?ue.call(He,Mt,st):ue,st==null)break t;Mt=v({},Mt,st);break t;case 2:da=!0}}st=T.callback,st!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[st]:ut.push(st))}else ut={lane:st,tag:T.tag,payload:T.payload,callback:T.callback,next:null},vt===null?(at=vt=ut,I=Mt):vt=vt.next=ut,S|=st;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ut=T,T=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);vt===null&&(I=Mt),c.baseState=I,c.firstBaseUpdate=at,c.lastBaseUpdate=vt,f===null&&(c.shared.lanes=0),Ma|=S,e.lanes=S,e.memoizedState=Mt}}function Pp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Bp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pp(a[e],n)}var Fr=it(null),Sl=it(0);function Ip(e,n){e=Qi,At(Sl,e),At(Fr,n),Qi=e|n.baseLanes}function Nu(){At(Sl,Qi),At(Fr,Fr.current)}function Ou(){Qi=Sl.current,bt(Fr),bt(Sl)}var ma=0,xe=null,ze=null,on=null,Ml=!1,Hr=!1,nr=!1,El=0,io=0,Gr=null,$v=0;function nn(){throw Error(r(321))}function Pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,s,c,f){return ma=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?ym:Sm,nr=!1,f=a(s,c),nr=!1,Hr&&(f=Fp(n,a,s,c)),zp(e),f}function zp(e){B.H=wl;var n=ze!==null&&ze.next!==null;if(ma=0,on=ze=xe=null,Ml=!1,io=0,Gr=null,n)throw Error(r(300));e===null||_n||(e=e.dependencies,e!==null&&gl(e)&&(_n=!0))}function Fp(e,n,a,s){xe=e;var c=0;do{if(Hr&&(Gr=null),io=0,Hr=!1,25<=c)throw Error(r(301));if(c+=1,on=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=sx,f=n(a,s)}while(Hr);return f}function tx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(xe.flags|=1024),n}function Iu(){var e=El!==0;return El=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fu(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}ma=0,on=ze=xe=null,Hr=!1,io=El=0,Gr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?xe.memoizedState=on=e:on=on.next=e,on}function ln(){if(ze===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=on===null?xe.memoizedState:on.next;if(n!==null)on=n,ze=e;else{if(e===null)throw xe.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},on===null?xe.memoizedState=on=e:on=on.next=e}return on}function Hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,Gr===null&&(Gr=[]),e=Lp(Gr,e,n),n=xe,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?ym:Sm),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===R)return Rn(e)}throw Error(r(438,String(e)))}function Gu(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=xe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hu(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=L;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=ln();return Vu(n,ze,e)}function Vu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=S=null,I=null,at=n,vt=!1;do{var Mt=at.lane&-536870913;if(Mt!==at.lane?(Re&Mt)===Mt:(ma&Mt)===Mt){var st=at.revertLane;if(st===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),Mt===Ir&&(vt=!0);else if((ma&st)===st){at=at.next,st===Ir&&(vt=!0);continue}else Mt={lane:0,revertLane:at.revertLane,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},I===null?(T=I=Mt,S=f):I=I.next=Mt,xe.lanes|=st,Ma|=st;Mt=at.action,nr&&a(f,Mt),f=at.hasEagerState?at.eagerState:a(f,Mt)}else st={lane:Mt,revertLane:at.revertLane,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},I===null?(T=I=st,S=f):I=I.next=st,xe.lanes|=Mt,Ma|=Mt;at=at.next}while(at!==null&&at!==n);if(I===null?S=f:I.next=T,!Yn(f,e.memoizedState)&&(_n=!0,vt&&(a=zr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=I,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function ku(e){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Yn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Hp(e,n,a){var s=xe,c=ln(),f=Ne;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Yn((ze||c).memoizedState,a);S&&(c.memoizedState=a,_n=!0),c=c.queue;var T=kp.bind(null,s,c,e);if(ro(2048,8,T,[e]),c.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Vr(9,Al(),Vp.bind(null,s,c,a,n),null),We===null)throw Error(r(349));f||(ma&124)!==0||Gp(s,n,a)}return a}function Gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Hu(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Vp(e,n,a,s){n.value=a,n.getSnapshot=s,Xp(n)&&Wp(e)}function kp(e,n,a){return a(function(){Xp(n)&&Wp(e)})}function Xp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Wp(e){var n=Nr(e,2);n!==null&&$n(n,e,2)}function Xu(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),nr){dt(!0);try{a()}finally{dt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function qp(e,n,a,s){return e.baseState=a,Vu(e,ze,typeof s=="function"?s:Wi)}function ex(e,n,a,s,c){if(Cl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Yp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var T=a(c,s),I=B.S;I!==null&&I(S,T),jp(e,n,T)}catch(at){Wu(e,n,at)}finally{B.T=f}}else try{f=a(c,s),jp(e,n,f)}catch(at){Wu(e,n,at)}}function jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Zp(e,n,s)},function(s){return Wu(e,n,s)}):Zp(e,n,a)}function Zp(e,n,a){n.status="fulfilled",n.value=a,Kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Yp(e,a)))}function Wu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==s)}e.action=null}function Kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qp(e,n){return n}function Jp(e,n){if(Ne){var a=We.formState;if(a!==null){t:{var s=xe;if(Ne){if(tn){e:{for(var c=tn,f=Ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=_i(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){tn=_i(c.nextSibling),s=c.data==="F!";break t}}Ja(s)}s=!1}s&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=s,a=_m.bind(null,xe,s),s.dispatch=a,s=Xu(!1),f=Ku.bind(null,xe,!1,s.queue),s=Gn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=ex.bind(null,xe,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function $p(e){var n=ln();return tm(n,ze,e)}function tm(e,n,a){if(n=Vu(e,n,Qp)[0],e=Tl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ao(n)}catch(S){throw S===Js?xl:S}else s=n;n=ln();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Vr(9,Al(),nx.bind(null,c,a),null)),[s,f,e]}function nx(e,n){e.action=n}function em(e){var n=ln(),a=ze;if(a!==null)return tm(n,a,e);ln(),n=n.memoizedState,a=ln();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Vr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Hu(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Al(){return{destroy:void 0,resource:void 0}}function nm(){return ln().memoizedState}function Rl(e,n,a,s){var c=Gn();s=s===void 0?null:s,xe.flags|=e,c.memoizedState=Vr(1|n,Al(),a,s)}function ro(e,n,a,s){var c=ln();s=s===void 0?null:s;var f=c.memoizedState.inst;ze!==null&&s!==null&&Pu(s,ze.memoizedState.deps)?c.memoizedState=Vr(n,f,a,s):(xe.flags|=e,c.memoizedState=Vr(1|n,f,a,s))}function im(e,n){Rl(8390656,8,e,n)}function am(e,n){ro(2048,8,e,n)}function rm(e,n){return ro(4,2,e,n)}function sm(e,n){return ro(4,4,e,n)}function om(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lm(e,n,a){a=a!=null?a.concat([e]):null,ro(4,4,om.bind(null,n,e),a)}function qu(){}function cm(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Pu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function um(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Pu(n,s[1]))return s[0];if(s=e(),nr){dt(!0);try{e()}finally{dt(!1)}}return a.memoizedState=[s,n],s}function Yu(e,n,a){return a===void 0||(ma&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=hg(),xe.lanes|=e,Ma|=e,a)}function fm(e,n,a,s){return Yn(a,n)?a:Fr.current!==null?(e=Yu(e,a,s),Yn(e,n)||(_n=!0),e):(ma&42)===0?(_n=!0,e.memoizedState=a):(e=hg(),xe.lanes|=e,Ma|=e,n)}function dm(e,n,a,s,c){var f=et.p;et.p=f!==0&&8>f?f:8;var S=B.T,T={};B.T=T,Ku(e,!1,n,a);try{var I=c(),at=B.S;if(at!==null&&at(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var vt=Jv(I,s);so(e,n,vt,Jn(e))}else so(e,n,s,Jn(e))}catch(Mt){so(e,n,{then:function(){},status:"rejected",reason:Mt},Jn())}finally{et.p=f,B.T=S}}function ix(){}function ju(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=hm(e).queue;dm(e,c,n,Z,a===null?ix:function(){return pm(e),a(s)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function pm(e){var n=hm(e).next.queue;so(e,n,{},Jn())}function Zu(){return Rn(To)}function mm(){return ln().memoizedState}function gm(){return ln().memoizedState}function ax(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=ha(a);var s=pa(n,e,a);s!==null&&($n(s,n,a),to(s,n,a)),n={cache:Tu()},e.payload=n;return}n=n.return}}function rx(e,n,a){var s=Jn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?vm(n,a):(a=mu(e,n,a,s),a!==null&&($n(a,e,s),xm(a,n,s)))}function _m(e,n,a){var s=Jn();so(e,n,a,s)}function so(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))vm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Yn(T,S))return fl(e,n,c,0),We===null&&ul(),!1}catch{}finally{}if(a=mu(e,n,c,s),a!==null)return $n(a,e,s),xm(a,n,s),!0}return!1}function Ku(e,n,a,s){if(s={lane:2,revertLane:wf(),action:s,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(r(479))}else n=mu(e,a,s,2),n!==null&&$n(n,e,2)}function Cl(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function vm(e,n){Hr=Ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function xm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Kt(e,a)}}var wl={readContext:Rn,use:bl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},ym={readContext:Rn,use:bl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,om.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var s=e();if(nr){dt(!0);try{e()}finally{dt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Gn();if(a!==void 0){var c=a(n);if(nr){dt(!0);try{a(n)}finally{dt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=rx.bind(null,xe,e),[s.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,a=_m.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,n){var a=Gn();return Yu(a,e,n)},useTransition:function(){var e=Xu(!1);return e=dm.bind(null,xe,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=xe,c=Gn();if(Ne){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Re&124)!==0||Gp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,im(kp.bind(null,s,f,e),[e]),s.flags|=2048,Vr(9,Al(),Vp.bind(null,s,f,a,n),null),a},useId:function(){var e=Gn(),n=We.identifierPrefix;if(Ne){var a=Vi,s=Gi;a=(s&~(1<<32-Gt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=$v++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return Gn().memoizedState=ax.bind(null,xe)}},Sm={readContext:Rn,use:bl,useCallback:cm,useContext:Rn,useEffect:am,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:Tl,useRef:nm,useState:function(){return Tl(Wi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=ln();return fm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Tl(Wi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Zu,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=ln();return qp(a,ze,e,n)},useMemoCache:Gu,useCacheRefresh:gm},sx={readContext:Rn,use:bl,useCallback:cm,useContext:Rn,useEffect:am,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:ku,useRef:nm,useState:function(){return ku(Wi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=ln();return ze===null?Yu(a,e,n):fm(a,ze.memoizedState,e,n)},useTransition:function(){var e=ku(Wi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Zu,useFormState:em,useActionState:em,useOptimistic:function(e,n){var a=ln();return ze!==null?qp(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:gm},kr=null,oo=0;function Dl(e){var n=oo;return oo+=1,kr===null&&(kr=[]),Lp(kr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Mm(e){var n=e._init;return n(e._payload)}function Em(e){function n(K,k){if(e){var tt=K.deletions;tt===null?(K.deletions=[k],K.flags|=16):tt.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function s(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function c(K,k){return K=Hi(K,k),K.index=0,K.sibling=null,K}function f(K,k,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<k?(K.flags|=67108866,k):tt):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function T(K,k,tt,xt){return k===null||k.tag!==6?(k=_u(tt,K.mode,xt),k.return=K,k):(k=c(k,tt),k.return=K,k)}function I(K,k,tt,xt){var Zt=tt.type;return Zt===b?vt(K,k,tt.props.children,xt,tt.key):k!==null&&(k.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===$&&Mm(Zt)===k.type)?(k=c(k,tt.props),lo(k,tt),k.return=K,k):(k=hl(tt.type,tt.key,tt.props,null,K.mode,xt),lo(k,tt),k.return=K,k)}function at(K,k,tt,xt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=vu(tt,K.mode,xt),k.return=K,k):(k=c(k,tt.children||[]),k.return=K,k)}function vt(K,k,tt,xt,Zt){return k===null||k.tag!==7?(k=ja(tt,K.mode,xt,Zt),k.return=K,k):(k=c(k,tt),k.return=K,k)}function Mt(K,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=_u(""+k,K.mode,tt),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return tt=hl(k.type,k.key,k.props,null,K.mode,tt),lo(tt,k),tt.return=K,tt;case x:return k=vu(k,K.mode,tt),k.return=K,k;case $:var xt=k._init;return k=xt(k._payload),Mt(K,k,tt)}if(gt(k)||Y(k))return k=ja(k,K.mode,tt,null),k.return=K,k;if(typeof k.then=="function")return Mt(K,Dl(k),tt);if(k.$$typeof===R)return Mt(K,_l(K,k),tt);Ul(K,k)}return null}function st(K,k,tt,xt){var Zt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Zt!==null?null:T(K,k,""+tt,xt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===Zt?I(K,k,tt,xt):null;case x:return tt.key===Zt?at(K,k,tt,xt):null;case $:return Zt=tt._init,tt=Zt(tt._payload),st(K,k,tt,xt)}if(gt(tt)||Y(tt))return Zt!==null?null:vt(K,k,tt,xt,null);if(typeof tt.then=="function")return st(K,k,Dl(tt),xt);if(tt.$$typeof===R)return st(K,k,_l(K,tt),xt);Ul(K,tt)}return null}function ut(K,k,tt,xt,Zt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return K=K.get(tt)||null,T(k,K,""+xt,Zt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case y:return K=K.get(xt.key===null?tt:xt.key)||null,I(k,K,xt,Zt);case x:return K=K.get(xt.key===null?tt:xt.key)||null,at(k,K,xt,Zt);case $:var ye=xt._init;return xt=ye(xt._payload),ut(K,k,tt,xt,Zt)}if(gt(xt)||Y(xt))return K=K.get(tt)||null,vt(k,K,xt,Zt,null);if(typeof xt.then=="function")return ut(K,k,tt,Dl(xt),Zt);if(xt.$$typeof===R)return ut(K,k,tt,_l(k,xt),Zt);Ul(k,xt)}return null}function ue(K,k,tt,xt){for(var Zt=null,ye=null,ne=k,ce=k=0,xn=null;ne!==null&&ce<tt.length;ce++){ne.index>ce?(xn=ne,ne=null):xn=ne.sibling;var Ue=st(K,ne,tt[ce],xt);if(Ue===null){ne===null&&(ne=xn);break}e&&ne&&Ue.alternate===null&&n(K,ne),k=f(Ue,k,ce),ye===null?Zt=Ue:ye.sibling=Ue,ye=Ue,ne=xn}if(ce===tt.length)return a(K,ne),Ne&&Ka(K,ce),Zt;if(ne===null){for(;ce<tt.length;ce++)ne=Mt(K,tt[ce],xt),ne!==null&&(k=f(ne,k,ce),ye===null?Zt=ne:ye.sibling=ne,ye=ne);return Ne&&Ka(K,ce),Zt}for(ne=s(ne);ce<tt.length;ce++)xn=ut(ne,K,ce,tt[ce],xt),xn!==null&&(e&&xn.alternate!==null&&ne.delete(xn.key===null?ce:xn.key),k=f(xn,k,ce),ye===null?Zt=xn:ye.sibling=xn,ye=xn);return e&&ne.forEach(function(Ua){return n(K,Ua)}),Ne&&Ka(K,ce),Zt}function oe(K,k,tt,xt){if(tt==null)throw Error(r(151));for(var Zt=null,ye=null,ne=k,ce=k=0,xn=null,Ue=tt.next();ne!==null&&!Ue.done;ce++,Ue=tt.next()){ne.index>ce?(xn=ne,ne=null):xn=ne.sibling;var Ua=st(K,ne,Ue.value,xt);if(Ua===null){ne===null&&(ne=xn);break}e&&ne&&Ua.alternate===null&&n(K,ne),k=f(Ua,k,ce),ye===null?Zt=Ua:ye.sibling=Ua,ye=Ua,ne=xn}if(Ue.done)return a(K,ne),Ne&&Ka(K,ce),Zt;if(ne===null){for(;!Ue.done;ce++,Ue=tt.next())Ue=Mt(K,Ue.value,xt),Ue!==null&&(k=f(Ue,k,ce),ye===null?Zt=Ue:ye.sibling=Ue,ye=Ue);return Ne&&Ka(K,ce),Zt}for(ne=s(ne);!Ue.done;ce++,Ue=tt.next())Ue=ut(ne,K,ce,Ue.value,xt),Ue!==null&&(e&&Ue.alternate!==null&&ne.delete(Ue.key===null?ce:Ue.key),k=f(Ue,k,ce),ye===null?Zt=Ue:ye.sibling=Ue,ye=Ue);return e&&ne.forEach(function(oy){return n(K,oy)}),Ne&&Ka(K,ce),Zt}function He(K,k,tt,xt){if(typeof tt=="object"&&tt!==null&&tt.type===b&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var Zt=tt.key;k!==null;){if(k.key===Zt){if(Zt=tt.type,Zt===b){if(k.tag===7){a(K,k.sibling),xt=c(k,tt.props.children),xt.return=K,K=xt;break t}}else if(k.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===$&&Mm(Zt)===k.type){a(K,k.sibling),xt=c(k,tt.props),lo(xt,tt),xt.return=K,K=xt;break t}a(K,k);break}else n(K,k);k=k.sibling}tt.type===b?(xt=ja(tt.props.children,K.mode,xt,tt.key),xt.return=K,K=xt):(xt=hl(tt.type,tt.key,tt.props,null,K.mode,xt),lo(xt,tt),xt.return=K,K=xt)}return S(K);case x:t:{for(Zt=tt.key;k!==null;){if(k.key===Zt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(K,k.sibling),xt=c(k,tt.children||[]),xt.return=K,K=xt;break t}else{a(K,k);break}else n(K,k);k=k.sibling}xt=vu(tt,K.mode,xt),xt.return=K,K=xt}return S(K);case $:return Zt=tt._init,tt=Zt(tt._payload),He(K,k,tt,xt)}if(gt(tt))return ue(K,k,tt,xt);if(Y(tt)){if(Zt=Y(tt),typeof Zt!="function")throw Error(r(150));return tt=Zt.call(tt),oe(K,k,tt,xt)}if(typeof tt.then=="function")return He(K,k,Dl(tt),xt);if(tt.$$typeof===R)return He(K,k,_l(K,tt),xt);Ul(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(K,k.sibling),xt=c(k,tt),xt.return=K,K=xt):(a(K,k),xt=_u(tt,K.mode,xt),xt.return=K,K=xt),S(K)):a(K,k)}return function(K,k,tt,xt){try{oo=0;var Zt=He(K,k,tt,xt);return kr=null,Zt}catch(ne){if(ne===Js||ne===xl)throw ne;var ye=jn(29,ne,null,K.mode);return ye.lanes=xt,ye.return=K,ye}finally{}}}var Xr=Em(!0),bm=Em(!1),oi=it(null),Ci=null;function ga(e){var n=e.alternate;At(hn,hn.current&1),At(oi,e),Ci===null&&(n===null||Fr.current!==null||n.memoizedState!==null)&&(Ci=e)}function Tm(e){if(e.tag===22){if(At(hn,hn.current),At(oi,e),Ci===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ci=e)}}else _a()}function _a(){At(hn,hn.current),At(oi,oi.current)}function qi(e){bt(oi),Ci===e&&(Ci=null),bt(hn)}var hn=it(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Qu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=ha(s);c.payload=n,a!=null&&(c.callback=a),n=pa(e,c,s),n!==null&&($n(n,e,s),to(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=ha(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(e,c,s),n!==null&&($n(n,e,s),to(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=pa(e,s,a),n!==null&&($n(n,e,a),to(n,e,a))}};function Am(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Xs(a,s)||!Xs(c,f):!0}function Rm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function ir(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Cm(e){Nl(e)}function wm(e){console.error(e)}function Dm(e){Nl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Um(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $u(e,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function Lm(e){return e=ha(e),e.tag=3,e}function Nm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Um(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Um(n,a,s),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function ox(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Zs(n,a,c,!0),a=oi.current,a!==null){switch(a.tag){case 13:return Ci===null?bf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Af(e,s,c)),!1;case 22:return a.flags|=65536,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Af(e,s,c)),!1}throw Error(r(435,a.tag))}return Af(e,s,c),bf(),!1}if(Ne)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Su&&(e=Error(r(422),{cause:s}),js(ii(e,a)))):(s!==Su&&(n=Error(r(423),{cause:s}),js(ii(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ii(s,a),c=$u(e.stateNode,s,c),Uu(e,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),go===null?go=[f]:go.push(f),en!==4&&(en=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=$u(a.stateNode,s,e),Uu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Lm(c),Nm(c,e,a,s),Uu(a,c),!1}a=a.return}while(a!==null);return!1}var Om=Error(r(461)),_n=!1;function Mn(e,n,a,s){n.child=e===null?bm(n,null,a,s):Xr(n,e.child,a,s)}function Pm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return tr(n),s=Bu(e,n,a,S,f,c),T=Iu(),e!==null&&!_n?(zu(e,n,c),Yi(e,n,c)):(Ne&&T&&xu(n),n.flags|=1,Mn(e,n,s,c),n.child)}function Bm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Im(e,n,f,s,c)):(e=hl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xs,a(S,s)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Hi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Im(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Xs(f,s)&&e.ref===n.ref)if(_n=!1,n.pendingProps=s=f,lf(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return tf(e,n,a,s,c)}function zm(e,n,a){var s=n.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Fm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,f!==null?f.cachePool:null),f!==null?Ip(n,f):Nu(),Tm(n);else return n.lanes=n.childLanes=536870912,Fm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(vl(n,f.cachePool),Ip(n,f),_a(),n.memoizedState=null):(e!==null&&vl(n,null),Nu(),_a());return Mn(e,n,c,a),n.child}function Fm(e,n,a,s){var c=Ru();return c=c===null?null:{parent:dn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&vl(n,null),Nu(),Tm(n),e!==null&&Zs(e,n,s,!0),null}function Pl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,s,c){return tr(n),a=Bu(e,n,a,s,void 0,c),s=Iu(),e!==null&&!_n?(zu(e,n,c),Yi(e,n,c)):(Ne&&s&&xu(n),n.flags|=1,Mn(e,n,a,c),n.child)}function Hm(e,n,a,s,c,f){return tr(n),n.updateQueue=null,a=Fp(n,s,a,c),zp(e),s=Iu(),e!==null&&!_n?(zu(e,n,f),Yi(e,n,f)):(Ne&&s&&xu(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Gm(e,n,a,s,c){if(tr(n),n.stateNode===null){var f=Or,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},wu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Or,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Qu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ju.enqueueReplaceState(f,f.state,null),no(n,s,f,c),eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=ir(a,T);f.props=I;var at=f.context,vt=a.contextType;S=Or,typeof vt=="object"&&vt!==null&&(S=Rn(vt));var Mt=a.getDerivedStateFromProps;vt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,vt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||at!==S)&&Rm(n,f,s,S),da=!1;var st=n.memoizedState;f.state=st,no(n,s,f,c),eo(),at=n.memoizedState,T||st!==at||da?(typeof Mt=="function"&&(Qu(n,a,Mt,s),at=n.memoizedState),(I=da||Am(n,a,I,s,st,at,S))?(vt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=at),f.props=s,f.state=at,f.context=S,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Du(e,n),S=n.memoizedProps,vt=ir(a,S),f.props=vt,Mt=n.pendingProps,st=f.context,at=a.contextType,I=Or,typeof at=="object"&&at!==null&&(I=Rn(at)),T=a.getDerivedStateFromProps,(at=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==Mt||st!==I)&&Rm(n,f,s,I),da=!1,st=n.memoizedState,f.state=st,no(n,s,f,c),eo();var ut=n.memoizedState;S!==Mt||st!==ut||da||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof T=="function"&&(Qu(n,a,T,s),ut=n.memoizedState),(vt=da||Am(n,a,vt,s,st,ut,I)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ut,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ut,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ut),f.props=s,f.state=ut,f.context=I,s=vt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Pl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Xr(n,e.child,null,c),n.child=Xr(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Yi(e,n,c),e}function Vm(e,n,a,s){return Ys(),n.flags|=256,Mn(e,n,a,s),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:wp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function km(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ne){if(c?ga(n):_a(),Ne){var T=tn,I;if(I=T){t:{for(I=T,T=Ri;I.nodeType!==8;){if(!T){T=null;break t}if(I=_i(I.nextSibling),I===null){T=null;break t}}T=I}T!==null?(n.memoizedState={dehydrated:T,treeContext:Za!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},I=jn(18,null,null,0),I.stateNode=T,I.return=n,n.child=I,Pn=n,tn=null,I=!0):I=!1}I||Ja(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Gf(T)?n.lanes=32:n.lanes=536870912,null;qi(n)}return T=s.children,s=s.fallback,c?(_a(),c=n.mode,T=Bl({mode:"hidden",children:T},c),s=ja(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=nf(a),c.childLanes=af(e,S,a),n.memoizedState=ef,s):(ga(n),rf(n,T))}if(I=e.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(_a(),n.child=e.child,n.flags|=128,n=null):(_a(),c=s.fallback,T=n.mode,s=Bl({mode:"visible",children:s.children},T),c=ja(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Xr(n,e.child,null,a),s=n.child,s.memoizedState=nf(a),s.childLanes=af(e,S,a),n.memoizedState=ef,n=c);else if(ga(n),Gf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var at=S.dgst;S=at,s=Error(r(419)),s.stack="",s.digest=S,js({value:s,source:null,stack:null}),n=sf(e,n,a)}else if(_n||Zs(e,n,a,!1),S=(a&e.childLanes)!==0,_n||S){if(S=We,S!==null&&(s=a&-a,s=(s&42)!==0?1:fe(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==I.retryLane))throw I.retryLane=s,Nr(e,s),$n(S,e,s),Om;T.data==="$?"||bf(),n=sf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,tn=_i(T.nextSibling),Pn=n,Ne=!0,Qa=null,Ri=!1,e!==null&&(ri[si++]=Gi,ri[si++]=Vi,ri[si++]=Za,Gi=e.id,Vi=e.overflow,Za=n),n=rf(n,s.children),n.flags|=4096);return n}return c?(_a(),c=s.fallback,T=n.mode,I=e.child,at=I.sibling,s=Hi(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,at!==null?c=Hi(at,c):(c=ja(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=e.child.memoizedState,T===null?T=nf(a):(I=T.cachePool,I!==null?(at=dn._currentValue,I=I.parent!==at?{parent:at,pool:at}:I):I=wp(),T={baseLanes:T.baseLanes|a,cachePool:I}),c.memoizedState=T,c.childLanes=af(e,S,a),n.memoizedState=ef,s):(ga(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=jn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sf(e,n,a){return Xr(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Xm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Eu(e.return,n,a)}function of(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Wm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Mn(e,n,s.children,a),s=hn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xm(e,a,n);else if(e.tag===19)Xm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(At(hn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ll(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}of(n,!0,a,null,f);break;case"together":of(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function lx(e,n,a){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),fa(n,dn,e.memoizedState.cache),Ys();break;case 27:case 5:Jt(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?km(e,n,a):(ga(n),e=Yi(e,n,a),e!==null?e.sibling:null);ga(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Zs(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Wm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),At(hn,hn.current),s)break;return null;case 22:case 23:return n.lanes=0,zm(e,n,a);case 24:fa(n,dn,e.memoizedState.cache)}return Yi(e,n,a)}function qm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return _n=!1,lx(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Ne&&(n.flags&1048576)!==0&&Mp(n,ml,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")gu(s)?(e=ir(s,e),n.tag=1,n=Gm(null,n,s,e,a)):(n.tag=0,n=tf(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===D){n.tag=11,n=Pm(null,n,s,e,a);break t}else if(c===G){n.tag=14,n=Bm(null,n,s,e,a);break t}}throw n=_t(s)||s,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ir(s,n.pendingProps),Gm(e,n,s,c,a);case 3:t:{if(Nt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Du(e,n),no(n,s,null,a);var S=n.memoizedState;if(s=S.cache,fa(n,dn,s),s!==f.cache&&bu(n,[dn],a,!0),eo(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vm(e,n,s,a);break t}else if(s!==c){c=ii(Error(r(424)),n),js(c),n=Vm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=_i(e.firstChild),Pn=n,Ne=!0,Qa=null,Ri=!0,a=bm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ys(),s===c){n=Yi(e,n,a);break t}Mn(e,n,s,a)}n=n.child}return n;case 26:return Pl(e,n),e===null?(a=Kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ne||(a=n.type,e=n.pendingProps,s=Kl(rt.current).createElement(a),s[fn]=n,s[Je]=e,bn(s,a,e),sn(s),n.stateNode=s):n.memoizedState=Kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Jt(n),e===null&&Ne&&(s=n.stateNode=Yg(n.type,n.pendingProps,rt.current),Pn=n,Ri=!0,c=tn,Aa(n.type)?(Vf=c,tn=_i(s.firstChild)):tn=c),Mn(e,n,n.pendingProps.children,a),Pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ne&&((c=s=tn)&&(s=Bx(s,n.type,n.pendingProps,Ri),s!==null?(n.stateNode=s,Pn=n,tn=_i(s.firstChild),Ri=!1,c=!0):c=!1),c||Ja(n)),Jt(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,zf(c,f)?s=null:S!==null&&zf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Bu(e,n,tx,null,null,a),To._currentValue=c),Pl(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&Ne&&((e=a=tn)&&(a=Ix(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,Pn=n,tn=null,e=!0):e=!1),e||Ja(n)),null;case 13:return km(e,n,a);case 4:return Nt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Xr(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return Pm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),Mn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,tr(n),c=Rn(c),s=s(c),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return Bm(e,n,n.type,n.pendingProps,a);case 15:return Im(e,n,n.type,n.pendingProps,a);case 19:return Wm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Bl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return zm(e,n,a);case 24:return tr(n),s=Rn(dn),e===null?(c=Ru(),c===null&&(c=We,f=Tu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},wu(n),fa(n,dn,c)):((e.lanes&a)!==0&&(Du(e,n),no(n,null,null,a),eo()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,dn,s)):(s=f.cache,fa(n,dn,s),s!==c.cache&&bu(n,[dn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(e){e.flags|=4}function Ym(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!e_(n)){if(n=oi.current,n!==null&&((Re&4194048)===Re?Ci!==null:(Re&62914560)!==Re&&(Re&536870912)===0||n!==Ci))throw $s=Cu,Dp;e.flags|=8192}}function Il(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,jr|=n)}function co(e,n){if(!Ne)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function cx(e,n,a){var s=n.pendingProps;switch(yu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Xi(dn),ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qs(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tp())),Ke(n),null;case 26:return a=n.memoizedState,e===null?(ji(n),a!==null?(Ke(n),Ym(n,a)):(Ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ji(n),Ke(n),Ym(n,a)):(Ke(n),n.flags&=-16777217):(e.memoizedProps!==s&&ji(n),Ke(n),n.flags&=-16777217),null;case 27:he(n),a=rt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}e=Ft.current,qs(n)?Ep(n):(e=Yg(c,s,a),n.stateNode=e,ji(n))}return Ke(n),null;case 5:if(he(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(e=Ft.current,qs(n))Ep(n);else{switch(c=Kl(rt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[fn]=n,e[Je]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(bn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(n)}}return Ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=rt.current,qs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Pn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Hg(e.nodeValue,a)),e||Ja(n)}else e=Kl(e).createTextNode(s),e[fn]=n,n.stateNode=e}return Ke(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=qs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[fn]=n}else Ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=Tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Ke(n),null;case 4:return ie(),e===null&&Nf(n.stateNode.containerInfo),Ke(n),null;case 10:return Xi(n.type),Ke(n),null;case 19:if(bt(hn),c=n.memoizedState,c===null)return Ke(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)co(c,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ll(e),f!==null){for(n.flags|=128,co(c,!1),e=f.updateQueue,n.updateQueue=e,Il(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return At(hn,hn.current&1|2),n.child}e=e.sibling}c.tail!==null&&q()>Hl&&(n.flags|=128,s=!0,co(c,!1),n.lanes=4194304)}else{if(!s)if(e=Ll(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Il(n,e),co(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ne)return Ke(n),null}else 2*q()-c.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,s=!0,co(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=q(),n.sibling=null,e=hn.current,At(hn,s?e&1|2:e&1),n):(Ke(n),null);case 22:case 23:return qi(n),Ou(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&bt(er),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(dn),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ux(e,n){switch(yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(dn),ie(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return bt(hn),null;case 4:return ie(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),Ou(),e!==null&&bt(er),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(dn),null;case 25:return null;default:return null}}function jm(e,n){switch(yu(n),n.tag){case 3:Xi(dn),ie();break;case 26:case 27:case 5:he(n);break;case 4:ie();break;case 13:qi(n);break;case 19:bt(hn);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),Ou(),e!==null&&bt(er);break;case 24:Xi(dn)}}function uo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(T){Xe(n,n.return,T)}}function va(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var I=a,at=T;try{at()}catch(vt){Xe(c,I,vt)}}}s=s.next}while(s!==f)}}catch(vt){Xe(n,n.return,vt)}}function Zm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Bp(n,a)}catch(s){Xe(e,e.return,s)}}}function Km(e,n,a){a.props=ir(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Xe(e,n,s)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Xe(e,n,c)}}function wi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Xe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Xe(e,n,c)}else a.current=null}function Qm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Xe(e,e.return,c)}}function cf(e,n,a){try{var s=e.stateNode;Ux(s,e.type,a,n),s[Je]=n}catch(c){Xe(e,e.return,c)}}function Jm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zl));else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function zl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}function $m(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,s,a),n[fn]=e,n[Je]=a}catch(f){Xe(e,e.return,f)}}var Zi=!1,an=!1,df=!1,tg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function fx(e,n){if(e=e.containerInfo,Bf=nc,e=fp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,I=-1,at=0,vt=0,Mt=e,st=null;e:for(;;){for(var ut;Mt!==a||c!==0&&Mt.nodeType!==3||(T=S+c),Mt!==f||s!==0&&Mt.nodeType!==3||(I=S+s),Mt.nodeType===3&&(S+=Mt.nodeValue.length),(ut=Mt.firstChild)!==null;)st=Mt,Mt=ut;for(;;){if(Mt===e)break e;if(st===a&&++at===c&&(T=S),st===f&&++vt===s&&(I=S),(ut=Mt.nextSibling)!==null)break;Mt=st,st=Mt.parentNode}Mt=ut}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},nc=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ue=ir(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ue,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Xe(a,a.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function eg(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),s&4&&uo(5,a);break;case 1:if(xa(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Xe(a,a.return,S)}else{var c=ir(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Xe(a,a.return,S)}}s&64&&Zm(a),s&512&&fo(a,a.return);break;case 3:if(xa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bp(e,n)}catch(S){Xe(a,a.return,S)}}break;case 27:n===null&&s&4&&$m(a);case 26:case 5:xa(e,a),n===null&&s&4&&Qm(a),s&512&&fo(a,a.return);break;case 12:xa(e,a);break;case 13:xa(e,a),s&4&&ag(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yx.bind(null,a),zx(e,a))));break;case 22:if(s=a.memoizedState!==null||Zi,!s){n=n!==null&&n.memoizedState!==null||an,c=Zi;var f=an;Zi=s,(an=n)&&!f?ya(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),Zi=c,an=f}break;case 30:break;default:xa(e,a)}}function ng(e){var n=e.alternate;n!==null&&(e.alternate=null,ng(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Tr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Vn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)ig(e,n,a),a=a.sibling}function ig(e,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:an||wi(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||wi(a,n);var s=Ze,c=Vn;Aa(a.type)&&(Ze=a.stateNode,Vn=!1),Ki(e,n,a),So(a.stateNode),Ze=s,Vn=c;break;case 5:an||wi(a,n);case 6:if(s=Ze,c=Vn,Ze=null,Ki(e,n,a),Ze=s,Vn=c,Ze!==null)if(Vn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Xe(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Xe(a,n,f)}break;case 18:Ze!==null&&(Vn?(e=Ze,Wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wo(e)):Wg(Ze,a.stateNode));break;case 4:s=Ze,c=Vn,Ze=a.stateNode.containerInfo,Vn=!0,Ki(e,n,a),Ze=s,Vn=c;break;case 0:case 11:case 14:case 15:an||va(2,a,n),an||va(4,a,n),Ki(e,n,a);break;case 1:an||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Km(a,n,s)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:an=(s=an)||a.memoizedState!==null,Ki(e,n,a),an=s;break;default:Ki(e,n,a)}}function ag(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wo(e)}catch(a){Xe(n,n.return,a)}}function dx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new tg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new tg),n;default:throw Error(r(435,e.tag))}}function hf(e,n){var a=dx(e);n.forEach(function(s){var c=Sx.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Zn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Aa(T.type)){Ze=T.stateNode,Vn=!1;break t}break;case 5:Ze=T.stateNode,Vn=!1;break t;case 3:case 4:Ze=T.stateNode.containerInfo,Vn=!0;break t}T=T.return}if(Ze===null)throw Error(r(160));ig(f,S,c),Ze=null,Vn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)rg(n,e),n=n.sibling}var gi=null;function rg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(n,e),Kn(e),s&4&&(va(3,e,e.return),uo(3,e),va(5,e,e.return));break;case 1:Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),s&64&&Zi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=gi;if(Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ai]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,s,a),f[fn]=e,sn(f),s=f;break t;case"link":var S=$g("link","href",c).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=$g("meta","content",c).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[fn]=e,sn(f),s=f}e.stateNode=s}else t_(c,e.type,e.stateNode);else e.stateNode=Jg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?t_(c,e.type,e.stateNode):Jg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),a!==null&&s&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),e.flags&32){c=e.stateNode;try{Fn(c,"")}catch(ut){Xe(e,e.return,ut)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,cf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(df=!0);break;case 6:if(Zn(n,e),Kn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(ut){Xe(e,e.return,ut)}}break;case 3:if($l=null,c=gi,gi=Ql(n.containerInfo),Zn(n,e),gi=c,Kn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(ut){Xe(e,e.return,ut)}df&&(df=!1,sg(e));break;case 4:s=gi,gi=Ql(e.stateNode.containerInfo),Zn(n,e),Kn(e),gi=s;break;case 12:Zn(n,e),Kn(e);break;case 13:Zn(n,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=q()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,at=Zi,vt=an;if(Zi=at||c,an=vt||I,Zn(n,e),an=vt,Zi=at,Kn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Zi||an||ar(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=I.stateNode;var Mt=I.memoizedProps.style,st=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;T.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(ut){Xe(I,I.return,ut)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(ut){Xe(I,I.return,ut)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,hf(e,a))));break;case 19:Zn(n,e),Kn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 30:break;case 21:break;default:Zn(n,e),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Jm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(e);zl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Fn(S,""),a.flags&=-33);var T=uf(e);zl(e,T,S);break;case 3:case 4:var I=a.stateNode.containerInfo,at=uf(e);ff(e,at,I);break;default:throw Error(r(161))}}catch(vt){Xe(e,e.return,vt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eg(e,n.alternate,n),n=n.sibling}function ar(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),ar(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Km(n,n.return,a),ar(n);break;case 27:So(n.stateNode);case 26:case 5:wi(n,n.return),ar(n);break;case 22:n.memoizedState===null&&ar(n);break;case 30:ar(n);break;default:ar(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ya(c,f,a),uo(4,f);break;case 1:if(ya(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(at){Xe(s,s.return,at)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Pp(I[c],T)}catch(at){Xe(s,s.return,at)}}a&&S&64&&Zm(f),fo(f,f.return);break;case 27:$m(f);case 26:case 5:ya(c,f,a),a&&s===null&&S&4&&Qm(f),fo(f,f.return);break;case 12:ya(c,f,a);break;case 13:ya(c,f,a),a&&S&4&&ag(c,f);break;case 22:f.memoizedState===null&&ya(c,f,a),fo(f,f.return);break;case 30:break;default:ya(c,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ks(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e))}function Di(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)og(e,n,a,s),n=n.sibling}function og(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,s),c&2048&&uo(9,n);break;case 1:Di(e,n,a,s);break;case 3:Di(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e)));break;case 12:if(c&2048){Di(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Xe(n,n.return,I)}}else Di(e,n,a,s);break;case 13:Di(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Di(e,n,a,s):ho(e,n):f._visibility&2?Di(e,n,a,s):(f._visibility|=2,Wr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&pf(S,n);break;case 24:Di(e,n,a,s),c&2048&&mf(n.alternate,n);break;default:Di(e,n,a,s)}}function Wr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,I=s,at=S.flags;switch(S.tag){case 0:case 11:case 15:Wr(f,S,T,I,c),uo(8,S);break;case 23:break;case 22:var vt=S.stateNode;S.memoizedState!==null?vt._visibility&2?Wr(f,S,T,I,c):ho(f,S):(vt._visibility|=2,Wr(f,S,T,I,c)),c&&at&2048&&pf(S.alternate,S);break;case 24:Wr(f,S,T,I,c),c&&at&2048&&mf(S.alternate,S);break;default:Wr(f,S,T,I,c)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:ho(a,s),c&2048&&pf(s.alternate,s);break;case 24:ho(a,s),c&2048&&mf(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function qr(e){if(e.subtreeFlags&po)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 26:qr(e),e.flags&po&&e.memoizedState!==null&&Qx(gi,e.memoizedState,e.memoizedProps);break;case 5:qr(e);break;case 3:case 4:var n=gi;gi=Ql(e.stateNode.containerInfo),qr(e),gi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,qr(e),po=n):qr(e));break;default:qr(e)}}function cg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,fg(s,e)}cg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ug(e),e=e.sibling}function ug(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&va(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):mo(e);break;default:mo(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,fg(s,e)}cg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function fg(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ks(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,vn=s;else t:for(a=e;vn!==null;){s=vn;var c=s.sibling,f=s.return;if(ng(s),s===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var hx={getCacheForType:function(e){var n=Rn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},px=typeof WeakMap=="function"?WeakMap:Map,Pe=0,We=null,Ee=null,Re=0,Be=0,Qn=null,Sa=!1,Yr=!1,gf=!1,Qi=0,en=0,Ma=0,rr=0,_f=0,li=0,jr=0,go=null,kn=null,vf=!1,xf=0,Hl=1/0,Gl=null,Ea=null,En=0,ba=null,Zr=null,Kr=0,yf=0,Sf=null,dg=null,_o=0,Mf=null;function Jn(){if((Pe&2)!==0&&Re!==0)return Re&-Re;if(B.T!==null){var e=Ir;return e!==0?e:wf()}return Ce()}function hg(){li===0&&(li=(Re&536870912)===0||Ne?X():536870912);var e=oi.current;return e!==null&&(e.flags|=32),li}function $n(e,n,a){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),Ta(e,Re,li,!1)),Wt(e,a),((Pe&2)===0||e!==We)&&(e===We&&((Pe&2)===0&&(rr|=a),en===4&&Ta(e,Re,li,!1)),Ui(e))}function pg(e,n,a){if((Pe&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||zt(e,n),c=s?_x(e,n):Tf(e,n,!0),f=s;do{if(c===0){Yr&&!s&&Ta(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!mx(a)){c=Tf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;c=go;var I=T.current.memoizedState.isDehydrated;if(I&&(Qr(T,S).flags|=256),S=Tf(T,S,!1),S!==2){if(gf&&!I){T.errorRecoveryDisabledLanes|=f,rr|=f,c=4;break t}f=kn,kn=c,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Qr(e,0),Ta(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,li,!Sa);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=xf+300-q(),10<c)){if(Ta(s,n,li,!Sa),jt(s,0,!0)!==0)break t;s.timeoutHandle=kg(mg.bind(null,s,a,kn,Gl,vf,n,li,rr,jr,Sa,f,2,-0,0),c);break t}mg(s,a,kn,Gl,vf,n,li,rr,jr,Sa,f,0,-0,0)}}break}while(!0);Ui(e)}function mg(e,n,a,s,c,f,S,T,I,at,vt,Mt,st,ut){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:Kx},lg(n),Mt=Jx(),Mt!==null)){e.cancelPendingCommit=Mt(Mg.bind(null,e,n,f,a,s,c,S,T,I,vt,1,st,ut)),Ta(e,f,S,!at);return}Mg(e,n,f,a,s,c,S,T,I)}function mx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(e,n,a,s){n&=~_f,n&=~rr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Gt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&Et(e,a,n)}function Vl(){return(Pe&6)===0?(vo(0),!1):!0}function Ef(){if(Ee!==null){if(Be===0)var e=Ee.return;else e=Ee,ki=$a=null,Fu(e),kr=null,oo=0,e=Ee;for(;e!==null;)jm(e.alternate,e),e=e.return;Ee=null}}function Qr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Nx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ef(),We=e,Ee=a=Hi(e.current,null),Re=n,Be=0,Qn=null,Sa=!1,Yr=zt(e,n),gf=!1,jr=li=_f=rr=Ma=en=0,kn=go=null,vf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Gt(s),f=1<<c;n|=e[c],s&=~f}return Qi=n,ul(),a}function gg(e,n){xe=null,B.H=wl,n===Js||n===xl?(n=Np(),Be=3):n===Dp?(n=Np(),Be=4):Be=n===Om?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,Ee===null&&(en=1,Ol(e,ii(n,e.current)))}function _g(){var e=B.H;return B.H=wl,e===null?wl:e}function vg(){var e=B.A;return B.A=hx,e}function bf(){en=4,Sa||(Re&4194048)!==Re&&oi.current!==null||(Yr=!0),(Ma&134217727)===0&&(rr&134217727)===0||We===null||Ta(We,Re,li,!1)}function Tf(e,n,a){var s=Pe;Pe|=2;var c=_g(),f=vg();(We!==e||Re!==n)&&(Gl=null,Qr(e,n)),n=!1;var S=en;t:do try{if(Be!==0&&Ee!==null){var T=Ee,I=Qn;switch(Be){case 8:Ef(),S=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var at=Be;if(Be=0,Qn=null,Jr(e,T,I,at),a&&Yr){S=0;break t}break;default:at=Be,Be=0,Qn=null,Jr(e,T,I,at)}}gx(),S=en;break}catch(vt){gg(e,vt)}while(!0);return n&&e.shellSuspendCounter++,ki=$a=null,Pe=s,B.H=c,B.A=f,Ee===null&&(We=null,Re=0,ul()),S}function gx(){for(;Ee!==null;)xg(Ee)}function _x(e,n){var a=Pe;Pe|=2;var s=_g(),c=vg();We!==e||Re!==n?(Gl=null,Hl=q()+500,Qr(e,n)):Yr=zt(e,n);t:do try{if(Be!==0&&Ee!==null){n=Ee;var f=Qn;e:switch(Be){case 1:Be=0,Qn=null,Jr(e,n,f,1);break;case 2:case 9:if(Up(f)){Be=0,Qn=null,yg(n);break}n=function(){Be!==2&&Be!==9||We!==e||(Be=7),Ui(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Up(f)?(Be=0,Qn=null,yg(n)):(Be=0,Qn=null,Jr(e,n,f,7));break;case 5:var S=null;switch(Ee.tag){case 26:S=Ee.memoizedState;case 5:case 27:var T=Ee;if(!S||e_(S)){Be=0,Qn=null;var I=T.sibling;if(I!==null)Ee=I;else{var at=T.return;at!==null?(Ee=at,kl(at)):Ee=null}break e}}Be=0,Qn=null,Jr(e,n,f,5);break;case 6:Be=0,Qn=null,Jr(e,n,f,6);break;case 8:Ef(),en=6;break t;default:throw Error(r(462))}}vx();break}catch(vt){gg(e,vt)}while(!0);return ki=$a=null,B.H=s,B.A=c,Pe=a,Ee!==null?0:(We=null,Re=0,ul(),en)}function vx(){for(;Ee!==null&&!P();)xg(Ee)}function xg(e){var n=qm(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?kl(e):Ee=n}function yg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hm(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=Hm(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Fu(n);default:jm(a,n),n=Ee=Sp(n,Qi),n=qm(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?kl(e):Ee=n}function Jr(e,n,a,s){ki=$a=null,Fu(n),kr=null,oo=0;var c=n.return;try{if(ox(e,c,n,a,Re)){en=1,Ol(e,ii(a,e.current)),Ee=null;return}}catch(f){if(c!==null)throw Ee=c,f;en=1,Ol(e,ii(a,e.current)),Ee=null;return}n.flags&32768?(Ne||s===1?e=!0:Yr||(Re&536870912)!==0?e=!1:(Sa=e=!0,(s===2||s===9||s===3||s===6)&&(s=oi.current,s!==null&&s.tag===13&&(s.flags|=16384))),Sg(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){Sg(n,Sa);return}e=n.return;var a=cx(n.alternate,n,Qi);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);en===0&&(en=5)}function Sg(e,n){do{var a=ux(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);en=6,Ee=null}function Mg(e,n,a,s,c,f,S,T,I){e.cancelPendingCommit=null;do Xl();while(En!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pu,wt(e,a,f,S,T,I),e===We&&(Ee=We=null,Re=0),Zr=n,ba=e,Kr=a,yf=f,Sf=c,dg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mx(Ut,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,c=et.p,et.p=2,S=Pe,Pe|=4;try{fx(e,n,a)}finally{Pe=S,et.p=c,B.T=s}}En=1,Eg(),bg(),Tg()}}function Eg(){if(En===1){En=0;var e=ba,n=Zr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=et.p;et.p=2;var c=Pe;Pe|=4;try{rg(n,e);var f=If,S=fp(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&up(T.ownerDocument.documentElement,T)){if(I!==null&&cu(T)){var at=I.start,vt=I.end;if(vt===void 0&&(vt=at),"selectionStart"in T)T.selectionStart=at,T.selectionEnd=Math.min(vt,T.value.length);else{var Mt=T.ownerDocument||document,st=Mt&&Mt.defaultView||window;if(st.getSelection){var ut=st.getSelection(),ue=T.textContent.length,oe=Math.min(I.start,ue),He=I.end===void 0?oe:Math.min(I.end,ue);!ut.extend&&oe>He&&(S=He,He=oe,oe=S);var K=cp(T,oe),k=cp(T,He);if(K&&k&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var tt=Mt.createRange();tt.setStart(K.node,K.offset),ut.removeAllRanges(),oe>He?(ut.addRange(tt),ut.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ut.addRange(tt))}}}}for(Mt=[],ut=T;ut=ut.parentNode;)ut.nodeType===1&&Mt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Mt.length;T++){var xt=Mt[T];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}nc=!!Bf,If=Bf=null}finally{Pe=c,et.p=s,B.T=a}}e.current=n,En=2}}function bg(){if(En===2){En=0;var e=ba,n=Zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=et.p;et.p=2;var c=Pe;Pe|=4;try{eg(e,n.alternate,n)}finally{Pe=c,et.p=s,B.T=a}}En=3}}function Tg(){if(En===4||En===3){En=0,lt();var e=ba,n=Zr,a=Kr,s=dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Zr=ba=null,Ag(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ea=null),Oe(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,c=et.p,et.p=2,B.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{B.T=n,et.p=c}}(Kr&3)!==0&&Xl(),Ui(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Mf?_o++:(_o=0,Mf=e):_o=0,vo(0)}}function Ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ks(n)))}function Xl(e){return Eg(),bg(),Tg(),Rg()}function Rg(){if(En!==5)return!1;var e=ba,n=yf;yf=0;var a=Oe(Kr),s=B.T,c=et.p;try{et.p=32>a?32:a,B.T=null,a=Sf,Sf=null;var f=ba,S=Kr;if(En=0,Zr=ba=null,Kr=0,(Pe&6)!==0)throw Error(r(331));var T=Pe;if(Pe|=4,ug(f.current),og(f,f.current,S,a),Pe=T,vo(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{et.p=c,B.T=s,Ag(e,n)}}function Cg(e,n,a){n=ii(a,n),n=$u(e.stateNode,n,2),e=pa(e,n,2),e!==null&&(Wt(e,2),Ui(e))}function Xe(e,n,a){if(e.tag===3)Cg(e,e,a);else for(;n!==null;){if(n.tag===3){Cg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){e=ii(a,e),a=Lm(2),s=pa(n,a,2),s!==null&&(Nm(a,s,n,e),Wt(s,2),Ui(s));break}}n=n.return}}function Af(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new px;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(gf=!0,c.add(a),e=xx.bind(null,e,n,a),n.then(e,e))}function xx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Re&a)===a&&(en===4||en===3&&(Re&62914560)===Re&&300>q()-xf?(Pe&2)===0&&Qr(e,0):_f|=a,jr===Re&&(jr=0)),Ui(e)}function wg(e,n){n===0&&(n=Lt()),e=Nr(e,n),e!==null&&(Wt(e,n),Ui(e))}function yx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wg(e,a)}function Sx(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),wg(e,a)}function Mx(e,n){return H(e,n)}var Wl=null,$r=null,Rf=!1,ql=!1,Cf=!1,sr=0;function Ui(e){e!==$r&&e.next===null&&($r===null?Wl=$r=e:$r=$r.next=e),ql=!0,Rf||(Rf=!0,bx())}function vo(e,n){if(!Cf&&ql){Cf=!0;do for(var a=!1,s=Wl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Gt(42|e)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ng(s,f))}else f=Re,f=jt(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||zt(s,f)||(a=!0,Ng(s,f));s=s.next}while(a);Cf=!1}}function Ex(){Dg()}function Dg(){ql=Rf=!1;var e=0;sr!==0&&(Lx()&&(e=sr),sr=0);for(var n=q(),a=null,s=Wl;s!==null;){var c=s.next,f=Ug(s,n);f===0?(s.next=null,a===null?Wl=c:a.next=c,c===null&&($r=a)):(a=s,(e!==0||(f&3)!==0)&&(ql=!0)),s=c}vo(e)}function Ug(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Gt(f),T=1<<S,I=c[S];I===-1?((T&a)===0||(T&s)!==0)&&(c[S]=de(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=We,a=Re,a=jt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&we(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&we(s),Oe(a)){case 2:case 8:a=Rt;break;case 32:a=Ut;break;case 268435456:a=w;break;default:a=Ut}return s=Lg.bind(null,e),a=H(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&we(s),e.callbackPriority=2,e.callbackNode=null,2}function Lg(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var s=Re;return s=jt(e,e===We?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(pg(e,s,n),Ug(e,q()),e.callbackNode!=null&&e.callbackNode===a?Lg.bind(null,e):null)}function Ng(e,n){if(Xl())return null;pg(e,n,!0)}function bx(){Ox(function(){(Pe&6)!==0?H(ot,Ex):Dg()})}function wf(){return sr===0&&(sr=X()),sr}function Og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function Pg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Tx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Og((c[Je]||null).action),S=s.submitter;S&&(n=(n=S[Je]||null)?Og(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new ol("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(sr!==0){var I=S?Pg(c,S):new FormData(c);ju(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=S?Pg(c,S):new FormData(c),ju(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Df=0;Df<hu.length;Df++){var Uf=hu[Df],Ax=Uf.toLowerCase(),Rx=Uf[0].toUpperCase()+Uf.slice(1);mi(Ax,"on"+Rx)}mi(pp,"onAnimationEnd"),mi(mp,"onAnimationIteration"),mi(gp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Xv,"onTransitionRun"),mi(Wv,"onTransitionStart"),mi(qv,"onTransitionCancel"),mi(_p,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Bg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],I=T.instance,at=T.currentTarget;if(T=T.listener,I!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=at;try{f(c)}catch(vt){Nl(vt)}c.currentTarget=null,f=I}else for(S=0;S<s.length;S++){if(T=s[S],I=T.instance,at=T.currentTarget,T=T.listener,I!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=at;try{f(c)}catch(vt){Nl(vt)}c.currentTarget=null,f=I}}}}function be(e,n){var a=n[Er];a===void 0&&(a=n[Er]=new Set);var s=e+"__bubble";a.has(s)||(Ig(n,e,2,!1),a.add(s))}function Lf(e,n,a){var s=0;n&&(s|=4),Ig(a,e,s,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Yl]){e[Yl]=!0,el.forEach(function(a){a!=="selectionchange"&&(Cx.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Lf("selectionchange",!1,n))}}function Ig(e,n,a,s){switch(o_(n)){case 2:var c=ey;break;case 8:c=ny;break;default:c=Yf}a=c.bind(null,n,a,e),c=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Of(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=s.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=zi(T),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){s=f=S;continue t}T=T.parentNode}}s=s.return}Xh(function(){var at=f,vt=Jc(a),Mt=[];t:{var st=vp.get(e);if(st!==void 0){var ut=ol,ue=e;switch(e){case"keypress":if(rl(a)===0)break t;case"keydown":case"keyup":ut=Mv;break;case"focusin":ue="focus",ut=au;break;case"focusout":ue="blur",ut=au;break;case"beforeblur":case"afterblur":ut=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Tv;break;case pp:case mp:case gp:ut=hv;break;case _p:ut=Rv;break;case"scroll":case"scrollend":ut=lv;break;case"wheel":ut=wv;break;case"copy":case"cut":case"paste":ut=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Zh;break;case"toggle":case"beforetoggle":ut=Uv}var oe=(n&4)!==0,He=!oe&&(e==="scroll"||e==="scrollend"),K=oe?st!==null?st+"Capture":null:st;oe=[];for(var k=at,tt;k!==null;){var xt=k;if(tt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||tt===null||K===null||(xt=Is(k,K),xt!=null&&oe.push(yo(k,xt,tt))),He)break;k=k.return}0<oe.length&&(st=new ut(st,ue,null,a,vt),Mt.push({event:st,listeners:oe}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",st&&a!==Qc&&(ue=a.relatedTarget||a.fromElement)&&(zi(ue)||ue[Ti]))break t;if((ut||st)&&(st=vt.window===vt?vt:(st=vt.ownerDocument)?st.defaultView||st.parentWindow:window,ut?(ue=a.relatedTarget||a.toElement,ut=at,ue=ue?zi(ue):null,ue!==null&&(He=u(ue),oe=ue.tag,ue!==He||oe!==5&&oe!==27&&oe!==6)&&(ue=null)):(ut=null,ue=at),ut!==ue)){if(oe=Yh,xt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Zh,xt="onPointerLeave",K="onPointerEnter",k="pointer"),He=ut==null?st:Xa(ut),tt=ue==null?st:Xa(ue),st=new oe(xt,k+"leave",ut,a,vt),st.target=He,st.relatedTarget=tt,xt=null,zi(vt)===at&&(oe=new oe(K,k+"enter",ue,a,vt),oe.target=tt,oe.relatedTarget=He,xt=oe),He=xt,ut&&ue)e:{for(oe=ut,K=ue,k=0,tt=oe;tt;tt=ts(tt))k++;for(tt=0,xt=K;xt;xt=ts(xt))tt++;for(;0<k-tt;)oe=ts(oe),k--;for(;0<tt-k;)K=ts(K),tt--;for(;k--;){if(oe===K||K!==null&&oe===K.alternate)break e;oe=ts(oe),K=ts(K)}oe=null}else oe=null;ut!==null&&zg(Mt,st,ut,oe,!1),ue!==null&&He!==null&&zg(Mt,He,ue,oe,!0)}}t:{if(st=at?Xa(at):window,ut=st.nodeName&&st.nodeName.toLowerCase(),ut==="select"||ut==="input"&&st.type==="file")var Zt=ip;else if(ep(st))if(ap)Zt=Gv;else{Zt=Fv;var ye=zv}else ut=st.nodeName,!ut||ut.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?at&&Kc(at.elementType)&&(Zt=ip):Zt=Hv;if(Zt&&(Zt=Zt(e,at))){np(Mt,Zt,a,vt);break t}ye&&ye(e,st,at),e==="focusout"&&at&&st.type==="number"&&at.memoizedProps.value!=null&&An(st,"number",st.value)}switch(ye=at?Xa(at):window,e){case"focusin":(ep(ye)||ye.contentEditable==="true")&&(Dr=ye,uu=at,Ws=null);break;case"focusout":Ws=uu=Dr=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,dp(Mt,a,vt);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":dp(Mt,a,vt)}var ne;if(su)t:{switch(e){case"compositionstart":var ce="onCompositionStart";break t;case"compositionend":ce="onCompositionEnd";break t;case"compositionupdate":ce="onCompositionUpdate";break t}ce=void 0}else wr?$h(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(Kh&&a.locale!=="ko"&&(wr||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&wr&&(ne=Wh()):(ua=vt,eu="value"in ua?ua.value:ua.textContent,wr=!0)),ye=jl(at,ce),0<ye.length&&(ce=new jh(ce,e,null,a,vt),Mt.push({event:ce,listeners:ye}),ne?ce.data=ne:(ne=tp(a),ne!==null&&(ce.data=ne)))),(ne=Nv?Ov(e,a):Pv(e,a))&&(ce=jl(at,"onBeforeInput"),0<ce.length&&(ye=new jh("onBeforeInput","beforeinput",null,a,vt),Mt.push({event:ye,listeners:ce}),ye.data=ne)),Tx(Mt,e,at,a,vt)}Bg(Mt,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Is(e,a),c!=null&&s.unshift(yo(e,c,f)),c=Is(e,n),c!=null&&s.push(yo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function ts(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zg(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,I=T.alternate,at=T.stateNode;if(T=T.tag,I!==null&&I===s)break;T!==5&&T!==26&&T!==27||at===null||(I=at,c?(at=Is(a,f),at!=null&&S.unshift(yo(a,at,I))):c||(at=Is(a,f),at!=null&&S.push(yo(a,at,I)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var wx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function Fg(e){return(typeof e=="string"?e:""+e).replace(wx,`
`).replace(Dx,"")}function Hg(e,n){return n=Fg(n),Fg(e)===n}function Zl(){}function Fe(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Fn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Fn(e,""+s);break;case"className":Yt(e,"class",s);break;case"tabIndex":Yt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Yt(e,a,s);break;case"style":Vh(e,s,f);break;case"data":if(n!=="object"){Yt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=il(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",c.name,c,null),Fe(e,n,"formEncType",c.formEncType,c,null),Fe(e,n,"formMethod",c.formMethod,c,null),Fe(e,n,"formTarget",c.formTarget,c,null)):(Fe(e,n,"encType",c.encType,c,null),Fe(e,n,"method",c.method,c,null),Fe(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=il(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Zl);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=il(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":be("beforetoggle",e),be("toggle",e),Ht(e,"popover",s);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ht(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sv.get(a)||a,Ht(e,a,s))}}function Pf(e,n,a,s,c,f){switch(a){case"style":Vh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Fn(e,s):(typeof s=="number"||typeof s=="bigint")&&Fn(e,""+s);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Je]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Ht(e,a,s)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,f,S,a,null)}}c&&Fe(e,n,"srcSet",a.srcSet,a,null),s&&Fe(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var T=f=S=c=null,I=null,at=null;for(s in a)if(a.hasOwnProperty(s)){var vt=a[s];if(vt!=null)switch(s){case"name":c=vt;break;case"type":S=vt;break;case"checked":I=vt;break;case"defaultChecked":at=vt;break;case"value":f=vt;break;case"defaultValue":T=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,n));break;default:Fe(e,n,s,vt,a,null)}}On(e,f,T,I,at,S,c,!1),Me(e);return;case"select":be("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Fe(e,n,c,T,a,null)}n=f,a=S,e.multiple=!!s,n!=null?$e(e,!!s,n,!1):a!=null&&$e(e,!!s,a,!0);return;case"textarea":be("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Fe(e,n,S,T,a,null)}Ar(e,s,c,f),Me(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(e,n,I,s,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(s=0;s<xo.length;s++)be(xo[s],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(s=a[at],s!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,at,s,a,null)}return;default:if(Kc(n)){for(vt in a)a.hasOwnProperty(vt)&&(s=a[vt],s!==void 0&&Pf(e,n,vt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Fe(e,n,T,s,a,null))}function Ux(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,I=null,at=null,vt=null;for(ut in a){var Mt=a[ut];if(a.hasOwnProperty(ut)&&Mt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":I=Mt;default:s.hasOwnProperty(ut)||Fe(e,n,ut,null,s,Mt)}}for(var st in s){var ut=s[st];if(Mt=a[st],s.hasOwnProperty(st)&&(ut!=null||Mt!=null))switch(st){case"type":f=ut;break;case"name":c=ut;break;case"checked":at=ut;break;case"defaultChecked":vt=ut;break;case"value":S=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==Mt&&Fe(e,n,st,ut,s,Mt)}}ke(e,S,T,I,at,vt,f,c);return;case"select":ut=S=T=st=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ut=I;default:s.hasOwnProperty(f)||Fe(e,n,f,null,s,I)}for(c in s)if(f=s[c],I=a[c],s.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":st=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==I&&Fe(e,n,c,f,s,I)}n=T,a=S,s=ut,st!=null?$e(e,!!a,st,!1):!!s!=!!a&&(n!=null?$e(e,!!a,n,!0):$e(e,!!a,a?[]:"",!1));return;case"textarea":ut=st=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Fe(e,n,T,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":st=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Fe(e,n,S,c,s,f)}Sn(e,st,ut);return;case"option":for(var ue in a)if(st=a[ue],a.hasOwnProperty(ue)&&st!=null&&!s.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Fe(e,n,ue,null,s,st)}for(I in s)if(st=s[I],ut=a[I],s.hasOwnProperty(I)&&st!==ut&&(st!=null||ut!=null))switch(I){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Fe(e,n,I,st,s,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)st=a[oe],a.hasOwnProperty(oe)&&st!=null&&!s.hasOwnProperty(oe)&&Fe(e,n,oe,null,s,st);for(at in s)if(st=s[at],ut=a[at],s.hasOwnProperty(at)&&st!==ut&&(st!=null||ut!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:Fe(e,n,at,st,s,ut)}return;default:if(Kc(n)){for(var He in a)st=a[He],a.hasOwnProperty(He)&&st!==void 0&&!s.hasOwnProperty(He)&&Pf(e,n,He,void 0,s,st);for(vt in s)st=s[vt],ut=a[vt],!s.hasOwnProperty(vt)||st===ut||st===void 0&&ut===void 0||Pf(e,n,vt,st,s,ut);return}}for(var K in a)st=a[K],a.hasOwnProperty(K)&&st!=null&&!s.hasOwnProperty(K)&&Fe(e,n,K,null,s,st);for(Mt in s)st=s[Mt],ut=a[Mt],!s.hasOwnProperty(Mt)||st===ut||st==null&&ut==null||Fe(e,n,Mt,st,s,ut)}var Bf=null,If=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Lx(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var kg=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(e){return Xg.resolve(null).then(e).catch(Px)}:kg;function Px(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Wg(e,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=e.ownerDocument;if(a&1&&So(S.documentElement),a&2&&So(S.body),a&4)for(a=S.head,So(a),S=a.firstChild;S;){var T=S.nextSibling,I=S.nodeName;S[Ai]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){e.removeChild(f),wo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);wo(n)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),Tr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Bx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ai])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function Ix(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function zx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Vf=null;function qg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Yg(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Tr(e)}var ci=new Map,jg=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=et.d;et.d={f:Fx,r:Hx,D:Gx,C:Vx,L:kx,m:Xx,X:qx,S:Wx,M:Yx};function Fx(){var e=Ji.f(),n=Vl();return e||n}function Hx(e){var n=la(e);n!==null&&n.tag===5&&n.type==="form"?pm(n):Ji.r(e)}var es=typeof document>"u"?null:document;function Zg(e,n,a){var s=es;if(s&&typeof n=="string"&&n){var c=gn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),jg.has(c)||(jg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),bn(n,"link",e),sn(n),s.head.appendChild(n)))}}function Gx(e){Ji.D(e),Zg("dns-prefetch",e,null)}function Vx(e,n){Ji.C(e,n),Zg("preconnect",e,n)}function kx(e,n,a){Ji.L(e,n,a);var s=es;if(s&&e&&n){var c='link[rel="preload"][as="'+gn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gn(a.imageSizes)+'"]')):c+='[href="'+gn(e)+'"]';var f=c;switch(n){case"style":f=ns(e);break;case"script":f=is(e)}ci.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(Mo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),bn(n,"link",e),sn(n),s.head.appendChild(n)))}}function Xx(e,n){Ji.m(e,n);var a=es;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gn(s)+'"][href="'+gn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(e)}if(!ci.has(f)&&(e=v({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),bn(s,"link",e),sn(s),a.head.appendChild(s)}}}function Wx(e,n,a){Ji.S(e,n,a);var s=es;if(s&&e){var c=ca(s).hoistableStyles,f=ns(e);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(Mo(f)))T.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&kf(e,a);var I=S=s.createElement("link");sn(I),bn(I,"link",e),I._p=new Promise(function(at,vt){I.onload=at,I.onerror=vt}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Jl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function qx(e,n){Ji.X(e,n);var a=es;if(a&&e){var s=ca(a).hoistableScripts,c=is(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=v({src:e,async:!0},n),(n=ci.get(c))&&Xf(e,n),f=a.createElement("script"),sn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Yx(e,n){Ji.M(e,n);var a=es;if(a&&e){var s=ca(a).hoistableScripts,c=is(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=ci.get(c))&&Xf(e,n),f=a.createElement("script"),sn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Kg(e,n,a,s){var c=(c=rt.current)?Ql(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=ca(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ns(a.href);var f=ca(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(Mo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||jx(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=ca(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ns(e){return'href="'+gn(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function Qg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function jx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),sn(n),e.head.appendChild(n))}function is(e){return'[src="'+gn(e)+'"]'}function Eo(e){return"script[async]"+e}function Jg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+gn(a.href)+'"]');if(s)return n.instance=s,sn(s),s;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),sn(s),bn(s,"style",c),Jl(s,a.precedence,e),n.instance=s;case"stylesheet":c=ns(a.href);var f=e.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,sn(f),f;s=Qg(a),(c=ci.get(c))&&kf(s,c),f=(e.ownerDocument||e).createElement("link"),sn(f);var S=f;return S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),bn(f,"link",s),n.state.loading|=4,Jl(f,a.precedence,e),n.instance=f;case"script":return f=is(a.src),(c=e.querySelector(Eo(f)))?(n.instance=c,sn(c),c):(s=a,(c=ci.get(f))&&(s=v({},a),Xf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),sn(c),bn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Jl(s,a.precedence,e));return n.instance}function Jl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function $g(e,n,a){if($l===null){var s=new Map,c=$l=new Map;c.set(a,s)}else c=$l,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ai]||f[fn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function t_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Zx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bo=null;function Kx(){}function Qx(e,n,a){if(bo===null)throw Error(r(475));var s=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ns(a.href),f=e.querySelector(Mo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=tc.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,sn(f);return}f=e.ownerDocument||e,a=Qg(a),(c=ci.get(c))&&kf(a,c),f=f.createElement("link"),sn(f);var S=f;S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),bn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=tc.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Jx(){if(bo===null)throw Error(r(475));var e=bo;return e.stylesheets&&e.count===0&&Wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function tc(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function Wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach($x,e),ec=null,tc.call(e))}function $x(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var s=a.get(null);else{a=new Map,ec.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=tc.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var To={$$typeof:R,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function ty(e,n,a,s,c,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.hiddenUpdates=Bt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function n_(e,n,a,s,c,f,S,T,I,at,vt,Mt){return e=new ty(e,n,a,S,T,I,at,Mt),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=Tu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},wu(f),e}function i_(e){return e?(e=Or,e):Or}function a_(e,n,a,s,c,f){c=i_(c),s.context===null?s.context=c:s.pendingContext=c,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(e,s,n),a!==null&&($n(a,e,n),to(a,e,n))}function r_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){r_(e,n),(e=e.alternate)&&r_(e,n)}function s_(e){if(e.tag===13){var n=Nr(e,67108864);n!==null&&$n(n,e,67108864),qf(e,67108864)}}var nc=!0;function ey(e,n,a,s){var c=B.T;B.T=null;var f=et.p;try{et.p=2,Yf(e,n,a,s)}finally{et.p=f,B.T=c}}function ny(e,n,a,s){var c=B.T;B.T=null;var f=et.p;try{et.p=8,Yf(e,n,a,s)}finally{et.p=f,B.T=c}}function Yf(e,n,a,s){if(nc){var c=jf(s);if(c===null)Of(e,n,s,ic,a),l_(e,s);else if(ay(c,e,n,a,s))s.stopPropagation();else if(l_(e,s),n&4&&-1<iy.indexOf(e)){for(;c!==null;){var f=la(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=ee(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var I=1<<31-Gt(S);T.entanglements[1]|=I,S&=~I}Ui(f),(Pe&6)===0&&(Hl=q()+500,vo(0))}}break;case 13:T=Nr(f,2),T!==null&&$n(T,f,2),Vl(),qf(f,2)}if(f=jf(s),f===null&&Of(e,n,s,ic,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Of(e,n,s,null,a)}}function jf(e){return e=Jc(e),Zf(e)}var ic=null;function Zf(e){if(ic=null,e=zi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function o_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case ot:return 2;case Rt:return 8;case Ut:case Xt:return 32;case w:return 268435456;default:return 32}default:return 32}}var Kf=!1,Ra=null,Ca=null,wa=null,Ao=new Map,Ro=new Map,Da=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=la(n),n!==null&&s_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function ay(e,n,a,s,c){switch(n){case"focusin":return Ra=Co(Ra,e,n,a,s,c),!0;case"dragenter":return Ca=Co(Ca,e,n,a,s,c),!0;case"mouseover":return wa=Co(wa,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,s,c)),!0}return!1}function c_(e){var n=zi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,hi(e.priority,function(){if(a.tag===13){var s=Jn();s=fe(s);var c=Nr(a,s);c!==null&&$n(c,a,s),qf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Qc=s,a.target.dispatchEvent(s),Qc=null}else return n=la(a),n!==null&&s_(n),e.blockedOn=a,!1;n.shift()}return!0}function u_(e,n,a){ac(e)&&a.delete(n)}function ry(){Kf=!1,Ra!==null&&ac(Ra)&&(Ra=null),Ca!==null&&ac(Ca)&&(Ca=null),wa!==null&&ac(wa)&&(wa=null),Ao.forEach(u_),Ro.forEach(u_)}function rc(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ry)))}var sc=null;function f_(e){sc!==e&&(sc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sc===e&&(sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Zf(s||a)===null)continue;break}var f=la(a);f!==null&&(e.splice(n,3),n-=3,ju(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function wo(e){function n(I){return rc(I,e)}Ra!==null&&rc(Ra,e),Ca!==null&&rc(Ca,e),wa!==null&&rc(wa,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)c_(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Je]||null;if(typeof f=="function")S||f_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Je]||null)T=S.formAction;else if(Zf(c)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),f_(a)}}}function Qf(e){this._internalRoot=e}oc.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();a_(a,s,e,n,null,null)},oc.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;a_(e.current,2,null,e,null,null),Vl(),n[Ti]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ce();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&c_(e)}};var d_=t.version;if(d_!=="19.1.1")throw Error(r(527,d_,"19.1.1"));et.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var sy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{ct=lc.inject(sy),pt=lc}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Cm,f=wm,S=Dm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=n_(e,1,!1,null,null,a,s,c,f,S,T,null),e[Ti]=n.current,Nf(e),new Qf(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Cm,S=wm,T=Dm,I=null,at=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(at=a.formState)),n=n_(e,1,!0,n,a??null,s,c,f,S,T,I,at),n.context=i_(null),a=n.current,s=Jn(),s=fe(s),c=ha(s),c.callback=null,pa(a,c,s),a=s,n.current.lanes=a,Wt(n,a),Ui(n),e[Ti]=n.current,Nf(e),new oc(n)},Uo.version="19.1.1",Uo}var M_;function gy(){if(M_)return td.exports;M_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),td.exports=my(),td.exports}var _y=gy();const vy="modulepreload",xy=function(o){return"/"+o},E_={},yy=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(v=>Promise.resolve(v).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=d?.nonce||d?.getAttribute("nonce");l=m(i.map(p=>{if(p=xy(p),p in E_)return;E_[p]=!0;const v=p.endsWith(".css"),g=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const y=document.createElement("link");if(y.rel=v?"stylesheet":vy,v||(y.as="script"),y.crossOrigin="",y.href=p,h&&y.setAttribute("nonce",h),document.head.appendChild(y),v)return new Promise((x,b)=>{y.addEventListener("load",x),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return l.then(d=>{for(const h of d||[])h.status==="rejected"&&u(h.reason);return t().catch(u)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="180",Sy=0,b_=1,My=2,C0=1,Ey=2,aa=3,Va=0,Xn=1,Oi=2,Fa=0,Ts=1,T_=2,A_=3,R_=4,by=5,mr=100,Ty=101,Ay=102,Ry=103,Cy=104,wy=200,Dy=201,Uy=202,Ly=203,Id=204,zd=205,Ny=206,Oy=207,Py=208,By=209,Iy=210,zy=211,Fy=212,Hy=213,Gy=214,Fd=0,Hd=1,Gd=2,Rs=3,Vd=4,kd=5,Xd=6,Wd=7,w0=0,Vy=1,ky=2,Ha=0,Xy=1,Wy=2,qy=3,Yy=4,jy=5,Zy=6,Ky=7,D0=300,Cs=301,ws=302,qd=303,Yd=304,jc=306,jd=1e3,vr=1001,Zd=1002,ni=1003,Qy=1004,cc=1005,Mi=1006,ad=1007,xr=1008,sa=1009,U0=1010,L0=1011,Xo=1012,Dh=1013,yr=1014,Bi=1015,Ko=1016,Uh=1017,Lh=1018,Wo=1020,N0=35902,O0=35899,P0=1021,B0=1022,Ei=1023,qo=1026,Yo=1027,Nh=1028,Oh=1029,I0=1030,Ph=1031,Bh=1033,Bc=33776,Ic=33777,zc=33778,Fc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,th=36196,eh=37492,nh=37496,ih=37808,ah=37809,rh=37810,sh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,yh=36283,Sh=36284,Mh=36285,Eh=36286,Jy=3200,$y=3201,tS=0,eS=1,za="",fi="srgb",Ds="srgb-linear",Gc="linear",Ge="srgb",as=7680,C_=519,nS=512,iS=513,aS=514,z0=515,rS=516,sS=517,oS=518,lS=519,bh=35044,w_="300 es",Ii=2e3,Vc=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Th=180/Math.PI;function Ga(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Ae(o,t,i){return Math.max(t,Math.min(i,o))}function cS(o,t){return(o%t+t)%t}function sd(o,t,i){return(1-i)*o+i*t}function Pi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Te{constructor(t=0,i=0){Te.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3];const y=u[d+0],x=u[d+1],b=u[d+2],A=u[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(h===1){t[i+0]=y,t[i+1]=x,t[i+2]=b,t[i+3]=A;return}if(g!==A||m!==y||p!==x||v!==b){let M=1-h;const _=m*y+p*x+v*b+g*A,z=_>=0?1:-1,R=1-_*_;if(R>Number.EPSILON){const N=Math.sqrt(R),F=Math.atan2(N,_*z);M=Math.sin(M*F)/N,h=Math.sin(h*F)/N}const D=h*z;if(m=m*M+y*D,p=p*M+x*D,v=v*M+b*D,g=g*M+A*D,M===1-h){const N=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=N,p*=N,v*=N,g*=N}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=u[d],y=u[d+1],x=u[d+2],b=u[d+3];return t[i]=h*b+v*g+m*x-p*y,t[i+1]=m*b+v*y+p*g-h*x,t[i+2]=p*b+v*x+h*y-m*g,t[i+3]=v*b-h*g-m*y-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(u/2),y=m(r/2),x=m(l/2),b=m(u/2);switch(d){case"XYZ":this._x=y*v*g+p*x*b,this._y=p*x*g-y*v*b,this._z=p*v*b+y*x*g,this._w=p*v*g-y*x*b;break;case"YXZ":this._x=y*v*g+p*x*b,this._y=p*x*g-y*v*b,this._z=p*v*b-y*x*g,this._w=p*v*g+y*x*b;break;case"ZXY":this._x=y*v*g-p*x*b,this._y=p*x*g+y*v*b,this._z=p*v*b+y*x*g,this._w=p*v*g-y*x*b;break;case"ZYX":this._x=y*v*g-p*x*b,this._y=p*x*g+y*v*b,this._z=p*v*b-y*x*g,this._w=p*v*g+y*x*b;break;case"YZX":this._x=y*v*g+p*x*b,this._y=p*x*g+y*v*b,this._z=p*v*b-y*x*g,this._w=p*v*g-y*x*b;break;case"XZY":this._x=y*v*g-p*x*b,this._y=p*x*g-y*v*b,this._z=p*v*b+y*x*g,this._w=p*v*g+y*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],y=r+h+g;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-m)*x,this._y=(u-p)*x,this._z=(d-l)*x}else if(r>h&&r>g){const x=2*Math.sqrt(1+r-h-g);this._w=(v-m)/x,this._x=.25*x,this._y=(l+d)/x,this._z=(u+p)/x}else if(h>g){const x=2*Math.sqrt(1+h-r-g);this._w=(u-p)/x,this._x=(l+d)/x,this._y=.25*x,this._z=(m+v)/x}else{const x=2*Math.sqrt(1+g-r-h);this._w=(d-l)/x,this._x=(u+p)/x,this._y=(m+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const x=1-i;return this._w=x*d+i*this._w,this._x=x*r+i*this._x,this._y=x*l+i*this._y,this._z=x*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,h),g=Math.sin((1-i)*v)/p,y=Math.sin(i*v)/p;return this._w=d*g+this._w*y,this._x=r*g+this._x*y,this._y=l*g+this._y*y,this._z=u*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,i=0,r=0){nt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(D_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(D_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),v=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*v,this.y=r+m*v+h*p-u*g,this.z=l+m*g+u*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return od.copy(this).projectOnVector(t),this.sub(od)}reflect(t){return this.sub(od.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new nt,D_=new Qo;class me{constructor(t,i,r,l,u,d,h,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],y=r[2],x=r[5],b=r[8],A=l[0],M=l[3],_=l[6],z=l[1],R=l[4],D=l[7],N=l[2],F=l[5],G=l[8];return u[0]=d*A+h*z+m*N,u[3]=d*M+h*R+m*F,u[6]=d*_+h*D+m*G,u[1]=p*A+v*z+g*N,u[4]=p*M+v*R+g*F,u[7]=p*_+v*D+g*G,u[2]=y*A+x*z+b*N,u[5]=y*M+x*R+b*F,u[8]=y*_+x*D+b*G,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=v*d-h*p,y=h*m-v*u,x=p*u-d*m,b=i*g+r*y+l*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=g*A,t[1]=(l*p-v*r)*A,t[2]=(h*r-l*d)*A,t[3]=y*A,t[4]=(v*i-l*m)*A,t[5]=(l*u-h*i)*A,t[6]=x*A,t[7]=(r*m-p*i)*A,t[8]=(d*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ld.makeScale(t,i)),this}rotate(t){return this.premultiply(ld.makeRotation(-t)),this}translate(t,i){return this.premultiply(ld.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new me;function F0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function uS(){const o=kc("canvas");return o.style.display="block",o}const U_={};function jo(o){o in U_||(U_[o]=!0,console.warn(o))}function fS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const L_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dS(){const o={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ge&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=As(l.r),l.g=As(l.g),l.b=As(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return jo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return jo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ds]:{primaries:t,whitePoint:r,transfer:Gc,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Le=dS();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function As(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rs;class hS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{rs===void 0&&(rs=kc("canvas")),rs.width=t.width,rs.height=t.height;const l=rs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=rs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ra(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pS=0;class Ih{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Ga(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(cd(l[d].image)):u.push(cd(l[d]))}else u=cd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function cd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mS=0;const ud=new nt;class Un extends Ls{constructor(t=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=vr,l=vr,u=Mi,d=xr,h=Ei,m=sa,p=Un.DEFAULT_ANISOTROPY,v=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Ga(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==D0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case vr:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case vr:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=D0;Un.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],v=m[4],g=m[8],y=m[1],x=m[5],b=m[9],A=m[2],M=m[6],_=m[10];if(Math.abs(v-y)<.01&&Math.abs(g-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+A)<.1&&Math.abs(b+M)<.1&&Math.abs(p+x+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(p+1)/2,D=(x+1)/2,N=(_+1)/2,F=(v+y)/4,G=(g+A)/4,$=(b+M)/4;return R>D&&R>N?R<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(R),l=F/r,u=G/r):D>N?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=F/l,u=$/l):N<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(N),r=G/u,l=$/u),this.set(r,l,u,i),this}let z=Math.sqrt((M-b)*(M-b)+(g-A)*(g-A)+(y-v)*(y-v));return Math.abs(z)<.001&&(z=1),this.x=(M-b)/z,this.y=(g-A)/z,this.z=(y-v)/z,this.w=Math.acos((p+x+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gS extends Ls{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Un(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ih(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends gS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class H0 extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _S extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(t=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,vi):vi.fromBufferAttribute(u,d),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(t.matrixWorld),this.union(uc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),fc.subVectors(this.max,Lo),ss.subVectors(t.a,Lo),os.subVectors(t.b,Lo),ls.subVectors(t.c,Lo),La.subVectors(os,ss),Na.subVectors(ls,os),or.subVectors(ss,ls);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-or.z,or.y,La.z,0,-La.x,Na.z,0,-Na.x,or.z,0,-or.x,-La.y,La.x,0,-Na.y,Na.x,0,-or.y,or.x,0];return!fd(i,ss,os,ls,fc)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,ss,os,ls,fc))?!1:(dc.crossVectors(La,Na),i=[dc.x,dc.y,dc.z],fd(i,ss,os,ls,fc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],vi=new nt,uc=new Mr,ss=new nt,os=new nt,ls=new nt,La=new nt,Na=new nt,or=new nt,Lo=new nt,fc=new nt,dc=new nt,lr=new nt;function fd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){lr.fromArray(o,u);const h=l.x*Math.abs(lr.x)+l.y*Math.abs(lr.y)+l.z*Math.abs(lr.z),m=t.dot(lr),p=i.dot(lr),v=r.dot(lr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const vS=new Mr,No=new nt,dd=new nt;class Ns{constructor(t=new nt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):vS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(dd)),this.expandByPoint(No.copy(t.center).sub(dd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new nt,hd=new nt,hc=new nt,Oa=new nt,pd=new nt,pc=new nt,md=new nt;class zh{constructor(t=new nt,i=new nt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){hd.copy(t).add(i).multiplyScalar(.5),hc.copy(i).sub(t).normalize(),Oa.copy(this.origin).sub(hd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(hc),h=Oa.dot(this.direction),m=-Oa.dot(hc),p=Oa.lengthSq(),v=Math.abs(1-d*d);let g,y,x,b;if(v>0)if(g=d*m-h,y=d*h-m,b=u*v,g>=0)if(y>=-b)if(y<=b){const A=1/v;g*=A,y*=A,x=g*(g+d*y+2*h)+y*(d*g+y+2*m)+p}else y=u,g=Math.max(0,-(d*y+h)),x=-g*g+y*(y+2*m)+p;else y=-u,g=Math.max(0,-(d*y+h)),x=-g*g+y*(y+2*m)+p;else y<=-b?(g=Math.max(0,-(-d*u+h)),y=g>0?-u:Math.min(Math.max(-u,-m),u),x=-g*g+y*(y+2*m)+p):y<=b?(g=0,y=Math.min(Math.max(-u,-m),u),x=y*(y+2*m)+p):(g=Math.max(0,-(d*u+h)),y=g>0?u:Math.min(Math.max(-u,-m),u),x=-g*g+y*(y+2*m)+p);else y=d>0?-u:u,g=Math.max(0,-(d*y+h)),x=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(hd).addScaledVector(hc,y),x}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),v>=0?(u=(t.min.y-y.y)*v,d=(t.max.y-y.y)*v):(u=(t.max.y-y.y)*v,d=(t.min.y-y.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-y.z)*g,m=(t.max.z-y.z)*g):(h=(t.max.z-y.z)*g,m=(t.min.z-y.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){pd.subVectors(i,t),pc.subVectors(r,t),md.crossVectors(pd,pc);let d=this.direction.dot(md),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Oa.subVectors(this.origin,t);const m=h*this.direction.dot(pc.crossVectors(Oa,pc));if(m<0)return null;const p=h*this.direction.dot(pd.cross(Oa));if(p<0||m+p>d)return null;const v=-h*Oa.dot(md);return v<0?null:this.at(v/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,r,l,u,d,h,m,p,v,g,y,x,b,A,M){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,v,g,y,x,b,A,M)}set(t,i,r,l,u,d,h,m,p,v,g,y,x,b,A,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=y,_[3]=x,_[7]=b,_[11]=A,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/cs.setFromMatrixColumn(t,0).length(),u=1/cs.setFromMatrixColumn(t,1).length(),d=1/cs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const y=d*v,x=d*g,b=h*v,A=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=x+b*p,i[5]=y-A*p,i[9]=-h*m,i[2]=A-y*p,i[6]=b+x*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*v,x=m*g,b=p*v,A=p*g;i[0]=y+A*h,i[4]=b*h-x,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=x*h-b,i[6]=A+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*v,x=m*g,b=p*v,A=p*g;i[0]=y-A*h,i[4]=-d*g,i[8]=b+x*h,i[1]=x+b*h,i[5]=d*v,i[9]=A-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*v,x=d*g,b=h*v,A=h*g;i[0]=m*v,i[4]=b*p-x,i[8]=y*p+A,i[1]=m*g,i[5]=A*p+y,i[9]=x*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,x=d*p,b=h*m,A=h*p;i[0]=m*v,i[4]=A-y*g,i[8]=b*g+x,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=x*g+b,i[10]=y-A*g}else if(t.order==="XZY"){const y=d*m,x=d*p,b=h*m,A=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=y*g+A,i[5]=d*v,i[9]=x*g-b,i[2]=b*g-x,i[6]=h*v,i[10]=A*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xS,t,yS)}lookAt(t,i,r){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Pa.crossVectors(r,ti),Pa.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Pa.crossVectors(r,ti)),Pa.normalize(),mc.crossVectors(ti,Pa),l[0]=Pa.x,l[4]=mc.x,l[8]=ti.x,l[1]=Pa.y,l[5]=mc.y,l[9]=ti.y,l[2]=Pa.z,l[6]=mc.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],y=r[9],x=r[13],b=r[2],A=r[6],M=r[10],_=r[14],z=r[3],R=r[7],D=r[11],N=r[15],F=l[0],G=l[4],$=l[8],U=l[12],L=l[1],V=l[5],Y=l[9],mt=l[13],_t=l[2],gt=l[6],B=l[10],et=l[14],Z=l[3],Tt=l[7],O=l[11],it=l[15];return u[0]=d*F+h*L+m*_t+p*Z,u[4]=d*G+h*V+m*gt+p*Tt,u[8]=d*$+h*Y+m*B+p*O,u[12]=d*U+h*mt+m*et+p*it,u[1]=v*F+g*L+y*_t+x*Z,u[5]=v*G+g*V+y*gt+x*Tt,u[9]=v*$+g*Y+y*B+x*O,u[13]=v*U+g*mt+y*et+x*it,u[2]=b*F+A*L+M*_t+_*Z,u[6]=b*G+A*V+M*gt+_*Tt,u[10]=b*$+A*Y+M*B+_*O,u[14]=b*U+A*mt+M*et+_*it,u[3]=z*F+R*L+D*_t+N*Z,u[7]=z*G+R*V+D*gt+N*Tt,u[11]=z*$+R*Y+D*B+N*O,u[15]=z*U+R*mt+D*et+N*it,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],g=t[6],y=t[10],x=t[14],b=t[3],A=t[7],M=t[11],_=t[15];return b*(+u*m*g-l*p*g-u*h*y+r*p*y+l*h*x-r*m*x)+A*(+i*m*x-i*p*y+u*d*y-l*d*x+l*p*v-u*m*v)+M*(+i*p*g-i*h*x-u*d*g+r*d*x+u*h*v-r*p*v)+_*(-l*h*v-i*m*g+i*h*y+l*d*g-r*d*y+r*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=t[9],y=t[10],x=t[11],b=t[12],A=t[13],M=t[14],_=t[15],z=g*M*p-A*y*p+A*m*x-h*M*x-g*m*_+h*y*_,R=b*y*p-v*M*p-b*m*x+d*M*x+v*m*_-d*y*_,D=v*A*p-b*g*p+b*h*x-d*A*x-v*h*_+d*g*_,N=b*g*m-v*A*m-b*h*y+d*A*y+v*h*M-d*g*M,F=i*z+r*R+l*D+u*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/F;return t[0]=z*G,t[1]=(A*y*u-g*M*u-A*l*x+r*M*x+g*l*_-r*y*_)*G,t[2]=(h*M*u-A*m*u+A*l*p-r*M*p-h*l*_+r*m*_)*G,t[3]=(g*m*u-h*y*u-g*l*p+r*y*p+h*l*x-r*m*x)*G,t[4]=R*G,t[5]=(v*M*u-b*y*u+b*l*x-i*M*x-v*l*_+i*y*_)*G,t[6]=(b*m*u-d*M*u-b*l*p+i*M*p+d*l*_-i*m*_)*G,t[7]=(d*y*u-v*m*u+v*l*p-i*y*p-d*l*x+i*m*x)*G,t[8]=D*G,t[9]=(b*g*u-v*A*u-b*r*x+i*A*x+v*r*_-i*g*_)*G,t[10]=(d*A*u-b*h*u+b*r*p-i*A*p-d*r*_+i*h*_)*G,t[11]=(v*h*u-d*g*u-v*r*p+i*g*p+d*r*x-i*h*x)*G,t[12]=N*G,t[13]=(v*A*l-b*g*l+b*r*y-i*A*y-v*r*M+i*g*M)*G,t[14]=(b*h*l-d*A*l-b*r*m+i*A*m+d*r*M-i*h*M)*G,t[15]=(d*g*l-v*h*l+v*r*m-i*g*m-d*r*y+i*h*y)*G,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,g=h+h,y=u*p,x=u*v,b=u*g,A=d*v,M=d*g,_=h*g,z=m*p,R=m*v,D=m*g,N=r.x,F=r.y,G=r.z;return l[0]=(1-(A+_))*N,l[1]=(x+D)*N,l[2]=(b-R)*N,l[3]=0,l[4]=(x-D)*F,l[5]=(1-(y+_))*F,l[6]=(M+z)*F,l[7]=0,l[8]=(b+R)*G,l[9]=(M-z)*G,l[10]=(1-(y+A))*G,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=cs.set(l[0],l[1],l[2]).length();const d=cs.set(l[4],l[5],l[6]).length(),h=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/u,v=1/d,g=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=v,xi.elements[5]*=v,xi.elements[6]*=v,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,i.setFromRotationMatrix(xi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,v=2*u/(i-t),g=2*u/(r-l),y=(i+t)/(i-t),x=(r+l)/(r-l);let b,A;if(m)b=u/(d-u),A=d*u/(d-u);else if(h===Ii)b=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Vc)b=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,v=2/(i-t),g=2/(r-l),y=-(i+t)/(i-t),x=-(r+l)/(r-l);let b,A;if(m)b=1/(d-u),A=d/(d-u);else if(h===Ii)b=-2/(d-u),A=-(d+u)/(d-u);else if(h===Vc)b=-1/(d-u),A=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const cs=new nt,xi=new Ye,xS=new nt(0,0,0),yS=new nt(1,1,1),Pa=new nt,mc=new nt,ti=new nt,O_=new Ye,P_=new Qo;class oa{constructor(t=0,i=0,r=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return O_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(O_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return P_.setFromEuler(this),this.setFromQuaternion(P_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SS=0;const B_=new nt,us=new Qo,ea=new Ye,gc=new nt,Oo=new nt,MS=new nt,ES=new Qo,I_=new nt(1,0,0),z_=new nt(0,1,0),F_=new nt(0,0,1),H_={type:"added"},bS={type:"removed"},fs={type:"childadded",child:null},gd={type:"childremoved",child:null};class Ln extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new nt,i=new oa,r=new Qo,l=new nt(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new me}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return us.setFromAxisAngle(t,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,i){return us.setFromAxisAngle(t,i),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(I_,t)}rotateY(t){return this.rotateOnAxis(z_,t)}rotateZ(t){return this.rotateOnAxis(F_,t)}translateOnAxis(t,i){return B_.copy(t).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(I_,t)}translateY(t){return this.translateOnAxis(z_,t)}translateZ(t){return this.translateOnAxis(F_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?gc.copy(t):gc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Oo,gc,this.up):ea.lookAt(gc,Oo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),us.setFromRotationMatrix(ea),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(H_),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bS),gd.child=t,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(H_),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,MS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,ES,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),g=d(t.shapes),y=d(t.skeletons),x=d(t.animations),b=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new nt(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new nt,na=new nt,_d=new nt,ia=new nt,ds=new nt,hs=new nt,G_=new nt,vd=new nt,xd=new nt,yd=new nt,Sd=new rn,Md=new rn,Ed=new rn;class di{constructor(t=new nt,i=new nt,r=new nt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),yi.subVectors(t,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){yi.subVectors(l,i),na.subVectors(r,i),_d.subVectors(t,i);const d=yi.dot(yi),h=yi.dot(na),m=yi.dot(_d),p=na.dot(na),v=na.dot(_d),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const y=1/g,x=(p*m-h*v)*y,b=(d*v-h*m)*y;return u.set(1-x-b,b,x)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return Sd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(t,i),Md.fromBufferAttribute(t,r),Ed.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Sd,u.x),d.addScaledVector(Md,u.y),d.addScaledVector(Ed,u.z),d}static isFrontFacing(t,i,r,l){return yi.subVectors(r,i),na.subVectors(t,i),yi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),yi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return di.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return di.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ds.subVectors(l,r),hs.subVectors(u,r),vd.subVectors(t,r);const m=ds.dot(vd),p=hs.dot(vd);if(m<=0&&p<=0)return i.copy(r);xd.subVectors(t,l);const v=ds.dot(xd),g=hs.dot(xd);if(v>=0&&g<=v)return i.copy(l);const y=m*g-v*p;if(y<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(ds,d);yd.subVectors(t,u);const x=ds.dot(yd),b=hs.dot(yd);if(b>=0&&x<=b)return i.copy(u);const A=x*p-m*b;if(A<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(hs,h);const M=v*b-x*g;if(M<=0&&g-v>=0&&x-b>=0)return G_.subVectors(u,l),h=(g-v)/(g-v+(x-b)),i.copy(l).addScaledVector(G_,h);const _=1/(M+A+y);return d=A*_,h=y*_,i.copy(r).addScaledVector(ds,d).addScaledVector(hs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const G0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},_c={h:0,s:0,l:0};function bd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Se{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=r,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Le.workingColorSpace){if(t=cS(t,1),i=Ae(i,0,1),r=Ae(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=bd(d,u,t+1/3),this.g=bd(d,u,t),this.b=bd(d,u,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=G0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Le.workingToColorSpace(Dn.copy(this),t),Math.round(Ae(Dn.r*255,0,255))*65536+Math.round(Ae(Dn.g*255,0,255))*256+Math.round(Ae(Dn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=fi){Le.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,l=Dn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+i,Ba.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ba),t.getHSL(_c);const r=sd(Ba.h,_c.h,i),l=sd(Ba.s,_c.s,i),u=sd(Ba.l,_c.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Se;Se.NAMES=G0;let TS=0;class Os extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=Ts,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=zd,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Id&&(r.blendSrc=this.blendSrc),this.blendDst!==zd&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gr extends Os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=w0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new nt,vc=new Te;let AS=0;class Wn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=bh,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(t),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Pi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Pi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Pi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Pi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Pi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),u=Ve(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bh&&(t.usage=this.usage),t}}class V0 extends Wn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class k0 extends Wn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class bi extends Wn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let RS=0;const ui=new Ye,Td=new Ln,ps=new nt,ei=new Mr,Po=new Mr,yn=new nt;class qn extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(F0(t)?k0:V0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new me().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return Td.lookAt(t),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new bi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ei.min,Po.min),ei.expandByPoint(yn),yn.addVectors(ei.max,Po.max),ei.expandByPoint(yn)):(ei.expandByPoint(Po.min),ei.expandByPoint(Po.max))}ei.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)yn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)yn.fromBufferAttribute(h,p),m&&(ps.fromBufferAttribute(t,p),yn.add(ps)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let $=0;$<r.count;$++)h[$]=new nt,m[$]=new nt;const p=new nt,v=new nt,g=new nt,y=new Te,x=new Te,b=new Te,A=new nt,M=new nt;function _($,U,L){p.fromBufferAttribute(r,$),v.fromBufferAttribute(r,U),g.fromBufferAttribute(r,L),y.fromBufferAttribute(u,$),x.fromBufferAttribute(u,U),b.fromBufferAttribute(u,L),v.sub(p),g.sub(p),x.sub(y),b.sub(y);const V=1/(x.x*b.y-b.x*x.y);isFinite(V)&&(A.copy(v).multiplyScalar(b.y).addScaledVector(g,-x.y).multiplyScalar(V),M.copy(g).multiplyScalar(x.x).addScaledVector(v,-b.x).multiplyScalar(V),h[$].add(A),h[U].add(A),h[L].add(A),m[$].add(M),m[U].add(M),m[L].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let $=0,U=z.length;$<U;++$){const L=z[$],V=L.start,Y=L.count;for(let mt=V,_t=V+Y;mt<_t;mt+=3)_(t.getX(mt+0),t.getX(mt+1),t.getX(mt+2))}const R=new nt,D=new nt,N=new nt,F=new nt;function G($){N.fromBufferAttribute(l,$),F.copy(N);const U=h[$];R.copy(U),R.sub(N.multiplyScalar(N.dot(U))).normalize(),D.crossVectors(F,U);const V=D.dot(m[$])<0?-1:1;d.setXYZW($,R.x,R.y,R.z,V)}for(let $=0,U=z.length;$<U;++$){const L=z[$],V=L.start,Y=L.count;for(let mt=V,_t=V+Y;mt<_t;mt+=3)G(t.getX(mt+0)),G(t.getX(mt+1)),G(t.getX(mt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const l=new nt,u=new nt,d=new nt,h=new nt,m=new nt,p=new nt,v=new nt,g=new nt;if(t)for(let y=0,x=t.count;y<x;y+=3){const b=t.getX(y+0),A=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,M),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),h.add(v),m.add(v),p.add(v),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,g=h.normalized,y=new p.constructor(m.length*v);let x=0,b=0;for(let A=0,M=m.length;A<M;A++){h.isInterleavedBufferAttribute?x=m[A]*h.data.stride+h.offset:x=m[A]*v;for(let _=0;_<v;_++)y[b++]=p[x++]}return new Wn(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,g=p.length;v<g;v++){const y=p[v],x=t(y,r);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,y=p.length;g<y;g++){const x=p[g];v.push(x.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],g=u[p];for(let y=0,x=g.length;y<x;y++)v.push(g[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new Ye,cr=new zh,xc=new Ns,k_=new nt,yc=new nt,Sc=new nt,Mc=new nt,Ad=new nt,Ec=new nt,X_=new nt,bc=new nt;class zn extends Ln{constructor(t=new qn,i=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Ec.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],g=u[m];v!==0&&(Ad.fromBufferAttribute(g,t),d?Ec.addScaledVector(Ad,v):Ec.addScaledVector(Ad.sub(i),v))}i.add(Ec)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(u),cr.copy(t.ray).recast(t.near),!(xc.containsPoint(cr.origin)===!1&&(cr.intersectSphere(xc,k_)===null||cr.origin.distanceToSquared(k_)>(t.far-t.near)**2))&&(V_.copy(u).invert(),cr.copy(t.ray).applyMatrix4(V_),!(r.boundingBox!==null&&cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,cr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,y=u.groups,x=u.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,A=y.length;b<A;b++){const M=y[b],_=d[M.materialIndex],z=Math.max(M.start,x.start),R=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let D=z,N=R;D<N;D+=3){const F=h.getX(D),G=h.getX(D+1),$=h.getX(D+2);l=Tc(this,_,t,r,p,v,g,F,G,$),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let M=b,_=A;M<_;M+=3){const z=h.getX(M),R=h.getX(M+1),D=h.getX(M+2);l=Tc(this,d,t,r,p,v,g,z,R,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,A=y.length;b<A;b++){const M=y[b],_=d[M.materialIndex],z=Math.max(M.start,x.start),R=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let D=z,N=R;D<N;D+=3){const F=D,G=D+1,$=D+2;l=Tc(this,_,t,r,p,v,g,F,G,$),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),A=Math.min(m.count,x.start+x.count);for(let M=b,_=A;M<_;M+=3){const z=M,R=M+1,D=M+2;l=Tc(this,d,t,r,p,v,g,z,R,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function CS(o,t,i,r,l,u,d,h){let m;if(t.side===Xn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===Va,h),m===null)return null;bc.copy(h),bc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(bc);return p<i.near||p>i.far?null:{distance:p,point:bc.clone(),object:o}}function Tc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,yc),o.getVertexPosition(m,Sc),o.getVertexPosition(p,Mc);const v=CS(o,t,i,r,yc,Sc,Mc,X_);if(v){const g=new nt;di.getBarycoord(X_,yc,Sc,Mc,g),l&&(v.uv=di.getInterpolatedAttribute(l,h,m,p,g,new Te)),u&&(v.uv1=di.getInterpolatedAttribute(u,h,m,p,g,new Te)),d&&(v.normal=di.getInterpolatedAttribute(d,h,m,p,g,new nt),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new nt,materialIndex:0};di.getNormal(yc,Sc,Mc,y.normal),v.face=y,v.barycoord=g}return v}class Jo extends qn{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],g=[];let y=0,x=0;b("z","y","x",-1,-1,r,i,t,d,u,0),b("z","y","x",1,-1,r,i,-t,d,u,1),b("x","z","y",1,1,t,r,i,l,d,2),b("x","z","y",1,-1,t,r,-i,l,d,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(v,3)),this.setAttribute("uv",new bi(g,2));function b(A,M,_,z,R,D,N,F,G,$,U){const L=D/G,V=N/$,Y=D/2,mt=N/2,_t=F/2,gt=G+1,B=$+1;let et=0,Z=0;const Tt=new nt;for(let O=0;O<B;O++){const it=O*V-mt;for(let bt=0;bt<gt;bt++){const At=bt*L-Y;Tt[A]=At*z,Tt[M]=it*R,Tt[_]=_t,p.push(Tt.x,Tt.y,Tt.z),Tt[A]=0,Tt[M]=0,Tt[_]=F>0?1:-1,v.push(Tt.x,Tt.y,Tt.z),g.push(bt/G),g.push(1-O/$),et+=1}}for(let O=0;O<$;O++)for(let it=0;it<G;it++){const bt=y+it+gt*O,At=y+it+gt*(O+1),Ft=y+(it+1)+gt*(O+1),qt=y+(it+1)+gt*O;m.push(bt,At,qt),m.push(At,Ft,qt),Z+=6}h.addGroup(x,Z,U),x+=Z,y+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function In(o){const t={};for(let i=0;i<o.length;i++){const r=Us(o[i]);for(const l in r)t[l]=r[l]}return t}function wS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function X0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const DS={clone:Us,merge:In};var US=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=US,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=wS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class W0 extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new nt,W_=new Te,q_=new Te;class Si extends W0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Th*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Th*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z)}getViewSize(t,i){return this.getViewBounds(t,W_,q_),i.subVectors(q_,W_)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,gs=1;class NS extends Ln{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(ms,gs,t,i);l.layers=this.layers,this.add(l);const u=new Si(ms,gs,t,i);u.layers=this.layers,this.add(u);const d=new Si(ms,gs,t,i);d.layers=this.layers,this.add(d);const h=new Si(ms,gs,t,i);h.layers=this.layers,this.add(h);const m=new Si(ms,gs,t,i);m.layers=this.layers,this.add(m);const p=new Si(ms,gs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Vc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(g,y,x),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class q0 extends Un{constructor(t=[],i=Cs,r,l,u,d,h,m,p,v){super(t,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class OS extends Sr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new q0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Jo(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:Us(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:Fa});u.uniforms.tEquirect.value=i;const d=new zn(l,u),h=i.minFilter;return i.minFilter===xr&&(i.minFilter=Mi),new NS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class Vo extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PS={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,r),_=this._getHandJoint(p,A);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=v.position.distanceTo(g.position),x=.02,b=.005;p.inputState.pinching&&y>x+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=x-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(PS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Vo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class BS extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class IS{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=bh,this.updateRanges=[],this.version=0,this.uuid=Ga()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ga()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ga()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new nt;class Xc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Pi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Pi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Pi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Pi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Pi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),u=Ve(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new Wn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Y0 extends Os{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _s;const Bo=new nt,vs=new nt,xs=new nt,ys=new Te,Io=new Te,j0=new Ye,Ac=new nt,zo=new nt,Rc=new nt,Y_=new Te,Cd=new Te,j_=new Te;class zS extends Ln{constructor(t=new Y0){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new qn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new IS(i,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new Xc(r,3,0,!1)),_s.setAttribute("uv",new Xc(r,2,3,!1))}this.geometry=_s,this.material=t,this.center=new Te(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),j0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-xs.z);const r=this.material.rotation;let l,u;r!==0&&(u=Math.cos(r),l=Math.sin(r));const d=this.center;Cc(Ac.set(-.5,-.5,0),xs,d,vs,l,u),Cc(zo.set(.5,-.5,0),xs,d,vs,l,u),Cc(Rc.set(.5,.5,0),xs,d,vs,l,u),Y_.set(0,0),Cd.set(1,0),j_.set(1,1);let h=t.ray.intersectTriangle(Ac,zo,Rc,!1,Bo);if(h===null&&(Cc(zo.set(-.5,.5,0),xs,d,vs,l,u),Cd.set(0,1),h=t.ray.intersectTriangle(Ac,Rc,zo,!1,Bo),h===null))return;const m=t.ray.origin.distanceTo(Bo);m<t.near||m>t.far||i.push({distance:m,point:Bo.clone(),uv:di.getInterpolation(Bo,Ac,zo,Rc,Y_,Cd,j_,new Te),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cc(o,t,i,r,l,u){ys.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Io.x=u*ys.x-l*ys.y,Io.y=l*ys.x+u*ys.y):Io.copy(ys),o.copy(t),o.x+=Io.x,o.y+=Io.y,o.applyMatrix4(j0)}class FS extends Un{constructor(t=null,i=1,r=1,l,u,d,h,m,p=ni,v=ni,g,y){super(null,d,h,m,p,v,l,u,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Z_ extends Wn{constructor(t,i,r,l=1){super(t,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ss=new Ye,K_=new Ye,wc=[],Q_=new Mr,HS=new Ye,Fo=new zn,Ho=new Ns;class GS extends zn{constructor(t,i,r){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Z_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,HS)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Mr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ss),Q_.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Q_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ss),Ho.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(Ho)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=r.length+1,d=t*u+1;for(let h=0;h<r.length;h++)r[h]=l[d+h]}raycast(t,i){const r=this.matrixWorld,l=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(r),t.ray.intersectsSphere(Ho)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,Ss),K_.multiplyMatrices(r,Ss),Fo.matrixWorld=K_,Fo.raycast(t,wc);for(let d=0,h=wc.length;d<h;d++){const m=wc[d];m.instanceId=u,m.object=this,i.push(m)}wc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Z_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new FS(new Float32Array(l*this.count),l,this.count,Nh,Bi));const u=this.morphTexture.source.data.data;let d=0;for(let p=0;p<r.length;p++)d+=r[p];const h=this.geometry.morphTargetsRelative?1:1-d,m=l*t;u[m]=h,u.set(r,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wd=new nt,VS=new nt,kS=new me;class hr{constructor(t=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=wd.subVectors(r,i).cross(VS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(wd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||kS.getNormalMatrix(t),l=this.coplanarPoint(wd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Ns,XS=new Te(.5,.5),Dc=new nt;class Z0{constructor(t=new hr,i=new hr,r=new hr,l=new hr,u=new hr,d=new hr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ii,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],g=u[5],y=u[6],x=u[7],b=u[8],A=u[9],M=u[10],_=u[11],z=u[12],R=u[13],D=u[14],N=u[15];if(l[0].setComponents(p-d,x-v,_-b,N-z).normalize(),l[1].setComponents(p+d,x+v,_+b,N+z).normalize(),l[2].setComponents(p+h,x+g,_+A,N+R).normalize(),l[3].setComponents(p-h,x-g,_-A,N-R).normalize(),r)l[4].setComponents(m,y,M,D).normalize(),l[5].setComponents(p-m,x-y,_-M,N-D).normalize();else if(l[4].setComponents(p-m,x-y,_-M,N-D).normalize(),i===Ii)l[5].setComponents(p+m,x+y,_+M,N+D).normalize();else if(i===Vc)l[5].setComponents(m,y,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(t){ur.center.set(0,0,0);const i=XS.distanceTo(t.center);return ur.radius=.7071067811865476+i,ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Dc.x=l.normal.x>0?t.max.x:t.min.x,Dc.y=l.normal.y>0?t.max.y:t.min.y,Dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zo extends Os{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wc=new nt,qc=new nt,J_=new Ye,Go=new zh,Uc=new Ns,Dd=new nt,$_=new nt;class Yc extends Ln{constructor(t=new qn,i=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Wc.fromBufferAttribute(i,l-1),qc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Wc.distanceTo(qc);t.setAttribute("lineDistance",new bi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=u,t.ray.intersectsSphere(Uc)===!1)return;J_.copy(l).invert(),Go.copy(t.ray).applyMatrix4(J_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const x=Math.max(0,d.start),b=Math.min(v.count,d.start+d.count);for(let A=x,M=b-1;A<M;A+=p){const _=v.getX(A),z=v.getX(A+1),R=Lc(this,t,Go,m,_,z,A);R&&i.push(R)}if(this.isLineLoop){const A=v.getX(b-1),M=v.getX(x),_=Lc(this,t,Go,m,A,M,b-1);_&&i.push(_)}}else{const x=Math.max(0,d.start),b=Math.min(y.count,d.start+d.count);for(let A=x,M=b-1;A<M;A+=p){const _=Lc(this,t,Go,m,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Lc(this,t,Go,m,b-1,x,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Lc(o,t,i,r,l,u,d){const h=o.geometry.attributes.position;if(Wc.fromBufferAttribute(h,l),qc.fromBufferAttribute(h,u),i.distanceSqToSegment(Wc,qc,Dd,$_)>r)return;Dd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Dd);if(!(p<t.near||p>t.far))return{distance:p,point:$_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class WS extends Yc{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class qS extends Un{constructor(t,i,r,l,u,d,h,m,p){super(t,i,r,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class K0 extends Un{constructor(t,i,r=yr,l,u,d,h=ni,m=ni,p,v=qo,g=1){if(v!==qo&&v!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ih(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Q0 extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $o extends qn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=t/h,y=i/m,x=[],b=[],A=[],M=[];for(let _=0;_<v;_++){const z=_*y-d;for(let R=0;R<p;R++){const D=R*g-u;b.push(D,-z,0),A.push(0,0,1),M.push(R/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let z=0;z<h;z++){const R=z+p*_,D=z+p*(_+1),N=z+1+p*(_+1),F=z+1+p*_;x.push(R,D,F),x.push(D,N,F)}this.setIndex(x),this.setAttribute("position",new bi(b,3)),this.setAttribute("normal",new bi(A,3)),this.setAttribute("uv",new bi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.widthSegments,t.heightSegments)}}class Es extends qn{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const v=[],g=new nt,y=new nt,x=[],b=[],A=[],M=[];for(let _=0;_<=r;_++){const z=[],R=_/r;let D=0;_===0&&d===0?D=.5/i:_===r&&m===Math.PI&&(D=-.5/i);for(let N=0;N<=i;N++){const F=N/i;g.x=-t*Math.cos(l+F*u)*Math.sin(d+R*h),g.y=t*Math.cos(d+R*h),g.z=t*Math.sin(l+F*u)*Math.sin(d+R*h),b.push(g.x,g.y,g.z),y.copy(g).normalize(),A.push(y.x,y.y,y.z),M.push(F+D,1-R),z.push(p++)}v.push(z)}for(let _=0;_<r;_++)for(let z=0;z<i;z++){const R=v[_][z+1],D=v[_][z],N=v[_+1][z],F=v[_+1][z+1];(_!==0||d>0)&&x.push(R,D,F),(_!==r-1||m<Math.PI)&&x.push(D,N,F)}this.setIndex(x),this.setAttribute("position",new bi(b,3)),this.setAttribute("normal",new bi(A,3)),this.setAttribute("uv",new bi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class YS extends Os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jS extends Os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class J0 extends W0{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ZS extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const t0=new Ye;class KS{constructor(t,i,r=0,l=1/0){this.ray=new zh(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return t0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(t0),this}intersectObject(t,i=!0,r=[]){return Ah(t,this,r,i),r.sort(e0),r}intersectObjects(t,i=!0,r=[]){for(let l=0,u=t.length;l<u;l++)Ah(t[l],this,r,i);return r.sort(e0),r}}function e0(o,t){return o.distance-t.distance}function Ah(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const u=o.children;for(let d=0,h=u.length;d<h;d++)Ah(u[d],t,i,!0)}}function n0(o,t,i,r){const l=QS(r);switch(i){case P0:return o*t;case Nh:return o*t/l.components*l.byteLength;case Oh:return o*t/l.components*l.byteLength;case I0:return o*t*2/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case B0:return o*t*3/l.components*l.byteLength;case Ei:return o*t*4/l.components*l.byteLength;case Bh:return o*t*4/l.components*l.byteLength;case Bc:case Ic:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zc:case Fc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(t,8)/2;case th:case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case yh:case Sh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Mh:case Eh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function QS(o){switch(o){case sa:case U0:return{byteLength:1,components:1};case Xo:case L0:case Ko:return{byteLength:2,components:1};case Uh:case Lh:return{byteLength:2,components:4};case yr:case Dh:case Bi:return{byteLength:4,components:1};case N0:case O0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $0(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function JS(o){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,v),h.onUploadCallback();let x;if(p instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=o.SHORT;else if(p instanceof Uint32Array)x=o.UNSIGNED_INT;else if(p instanceof Int32Array)x=o.INT;else if(p instanceof Int8Array)x=o.BYTE;else if(p instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,v);else{g.sort((x,b)=>x.start-b.start);let y=0;for(let x=1;x<g.length;x++){const b=g[y],A=g[x];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++y,g[y]=A)}g.length=y+1;for(let x=0,b=g.length;x<b;x++){const A=g[x];o.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var $S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,MM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",DM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,WM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_E=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,IE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$E=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ob=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_b=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:$S,alphahash_pars_fragment:tM,alphamap_fragment:eM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:aM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:fM,iridescence_fragment:dM,bumpmap_pars_fragment:hM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:yM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:bM,displacementmap_pars_vertex:TM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:wM,colorspace_pars_fragment:DM,envmap_fragment:UM,envmap_common_pars_fragment:LM,envmap_pars_fragment:NM,envmap_pars_vertex:OM,envmap_physical_pars_fragment:WM,envmap_vertex:PM,fog_vertex:BM,fog_pars_vertex:IM,fog_fragment:zM,fog_pars_fragment:FM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:kM,lights_pars_begin:XM,lights_toon_fragment:qM,lights_toon_pars_fragment:YM,lights_phong_fragment:jM,lights_phong_pars_fragment:ZM,lights_physical_fragment:KM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:$M,lights_fragment_end:tE,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:aE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:oE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:fE,morphcolor_vertex:dE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:_E,normal_pars_fragment:vE,normal_pars_vertex:xE,normal_vertex:yE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:TE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:wE,dithering_fragment:DE,dithering_pars_fragment:UE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:PE,shadowmap_vertex:BE,shadowmask_pars_fragment:IE,skinbase_vertex:zE,skinning_pars_vertex:FE,skinning_vertex:HE,skinnormal_vertex:GE,specularmap_fragment:VE,specularmap_pars_fragment:kE,tonemapping_fragment:XE,tonemapping_pars_fragment:WE,transmission_fragment:qE,transmission_pars_fragment:YE,uv_pars_fragment:jE,uv_pars_vertex:ZE,uv_vertex:KE,worldpos_vertex:QE,background_vert:JE,background_frag:$E,backgroundCube_vert:tb,backgroundCube_frag:eb,cube_vert:nb,cube_frag:ib,depth_vert:ab,depth_frag:rb,distanceRGBA_vert:sb,distanceRGBA_frag:ob,equirect_vert:lb,equirect_frag:cb,linedashed_vert:ub,linedashed_frag:fb,meshbasic_vert:db,meshbasic_frag:hb,meshlambert_vert:pb,meshlambert_frag:mb,meshmatcap_vert:gb,meshmatcap_frag:_b,meshnormal_vert:vb,meshnormal_frag:xb,meshphong_vert:yb,meshphong_frag:Sb,meshphysical_vert:Mb,meshphysical_frag:Eb,meshtoon_vert:bb,meshtoon_frag:Tb,points_vert:Ab,points_frag:Rb,shadow_vert:Cb,shadow_frag:wb,sprite_vert:Db,sprite_frag:Ub},kt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ni={basic:{uniforms:In([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:In([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:In([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:In([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:In([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:In([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:In([kt.points,kt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:In([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:In([kt.common,kt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:In([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:In([kt.sprite,kt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:In([kt.common,kt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:In([kt.lights,kt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Ni.physical={uniforms:In([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Nc={r:0,b:0,g:0},fr=new oa,Lb=new Ye;function Nb(o,t,i,r,l,u,d){const h=new Se(0);let m=u===!0?0:1,p,v,g=null,y=0,x=null;function b(R){let D=R.isScene===!0?R.background:null;return D&&D.isTexture&&(D=(R.backgroundBlurriness>0?i:t).get(D)),D}function A(R){let D=!1;const N=b(R);N===null?_(h,m):N&&N.isColor&&(_(N,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(R,D){const N=b(D);N&&(N.isCubeTexture||N.mapping===jc)?(v===void 0&&(v=new zn(new Jo(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Us(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,G,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),fr.copy(D.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),v.material.uniforms.envMap.value=N,v.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(fr)),v.material.toneMapped=Le.getTransfer(N.colorSpace)!==Ge,(g!==N||y!==N.version||x!==o.toneMapping)&&(v.material.needsUpdate=!0,g=N,y=N.version,x=o.toneMapping),v.layers.enableAll(),R.unshift(v,v.geometry,v.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new zn(new $o(2,2),new ka({name:"BackgroundMaterial",uniforms:Us(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Le.getTransfer(N.colorSpace)!==Ge,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||y!==N.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,g=N,y=N.version,x=o.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function _(R,D){R.getRGB(Nc,X0(o)),r.buffers.color.setClear(Nc.r,Nc.g,Nc.b,D,d)}function z(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(R,D=1){h.set(R),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(R){m=R,_(h,m)},render:A,addToRenderList:M,dispose:z}}function Ob(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,d=!1;function h(L,V,Y,mt,_t){let gt=!1;const B=g(mt,Y,V);u!==B&&(u=B,p(u.object)),gt=x(L,mt,Y,_t),gt&&b(L,mt,Y,_t),_t!==null&&t.update(_t,o.ELEMENT_ARRAY_BUFFER),(gt||d)&&(d=!1,D(L,V,Y,mt),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function m(){return o.createVertexArray()}function p(L){return o.bindVertexArray(L)}function v(L){return o.deleteVertexArray(L)}function g(L,V,Y){const mt=Y.wireframe===!0;let _t=r[L.id];_t===void 0&&(_t={},r[L.id]=_t);let gt=_t[V.id];gt===void 0&&(gt={},_t[V.id]=gt);let B=gt[mt];return B===void 0&&(B=y(m()),gt[mt]=B),B}function y(L){const V=[],Y=[],mt=[];for(let _t=0;_t<i;_t++)V[_t]=0,Y[_t]=0,mt[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:mt,object:L,attributes:{},index:null}}function x(L,V,Y,mt){const _t=u.attributes,gt=V.attributes;let B=0;const et=Y.getAttributes();for(const Z in et)if(et[Z].location>=0){const O=_t[Z];let it=gt[Z];if(it===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(it=L.instanceColor)),O===void 0||O.attribute!==it||it&&O.data!==it.data)return!0;B++}return u.attributesNum!==B||u.index!==mt}function b(L,V,Y,mt){const _t={},gt=V.attributes;let B=0;const et=Y.getAttributes();for(const Z in et)if(et[Z].location>=0){let O=gt[Z];O===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));const it={};it.attribute=O,O&&O.data&&(it.data=O.data),_t[Z]=it,B++}u.attributes=_t,u.attributesNum=B,u.index=mt}function A(){const L=u.newAttributes;for(let V=0,Y=L.length;V<Y;V++)L[V]=0}function M(L){_(L,0)}function _(L,V){const Y=u.newAttributes,mt=u.enabledAttributes,_t=u.attributeDivisors;Y[L]=1,mt[L]===0&&(o.enableVertexAttribArray(L),mt[L]=1),_t[L]!==V&&(o.vertexAttribDivisor(L,V),_t[L]=V)}function z(){const L=u.newAttributes,V=u.enabledAttributes;for(let Y=0,mt=V.length;Y<mt;Y++)V[Y]!==L[Y]&&(o.disableVertexAttribArray(Y),V[Y]=0)}function R(L,V,Y,mt,_t,gt,B){B===!0?o.vertexAttribIPointer(L,V,Y,_t,gt):o.vertexAttribPointer(L,V,Y,mt,_t,gt)}function D(L,V,Y,mt){A();const _t=mt.attributes,gt=Y.getAttributes(),B=V.defaultAttributeValues;for(const et in gt){const Z=gt[et];if(Z.location>=0){let Tt=_t[et];if(Tt===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(Tt=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(Tt=L.instanceColor)),Tt!==void 0){const O=Tt.normalized,it=Tt.itemSize,bt=t.get(Tt);if(bt===void 0)continue;const At=bt.buffer,Ft=bt.type,qt=bt.bytesPerElement,rt=Ft===o.INT||Ft===o.UNSIGNED_INT||Tt.gpuType===Dh;if(Tt.isInterleavedBufferAttribute){const St=Tt.data,Nt=St.stride,ie=Tt.offset;if(St.isInstancedInterleavedBuffer){for(let Jt=0;Jt<Z.locationSize;Jt++)_(Z.location+Jt,St.meshPerAttribute);L.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Jt=0;Jt<Z.locationSize;Jt++)M(Z.location+Jt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Jt=0;Jt<Z.locationSize;Jt++)R(Z.location+Jt,it/Z.locationSize,Ft,O,Nt*qt,(ie+it/Z.locationSize*Jt)*qt,rt)}else{if(Tt.isInstancedBufferAttribute){for(let St=0;St<Z.locationSize;St++)_(Z.location+St,Tt.meshPerAttribute);L.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let St=0;St<Z.locationSize;St++)M(Z.location+St);o.bindBuffer(o.ARRAY_BUFFER,At);for(let St=0;St<Z.locationSize;St++)R(Z.location+St,it/Z.locationSize,Ft,O,it*qt,it/Z.locationSize*St*qt,rt)}}else if(B!==void 0){const O=B[et];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(Z.location,O);break;case 3:o.vertexAttrib3fv(Z.location,O);break;case 4:o.vertexAttrib4fv(Z.location,O);break;default:o.vertexAttrib1fv(Z.location,O)}}}}z()}function N(){$();for(const L in r){const V=r[L];for(const Y in V){const mt=V[Y];for(const _t in mt)v(mt[_t].object),delete mt[_t];delete V[Y]}delete r[L]}}function F(L){if(r[L.id]===void 0)return;const V=r[L.id];for(const Y in V){const mt=V[Y];for(const _t in mt)v(mt[_t].object),delete mt[_t];delete V[Y]}delete r[L.id]}function G(L){for(const V in r){const Y=r[V];if(Y[L.id]===void 0)continue;const mt=Y[L.id];for(const _t in mt)v(mt[_t].object),delete mt[_t];delete Y[L.id]}}function $(){U(),d=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:U,dispose:N,releaseStatesOfGeometry:F,releaseStatesOfProgram:G,initAttributes:A,enableAttribute:M,disableUnusedAttributes:z}}function Pb(o,t,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,g){g!==0&&(o.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let x=0;for(let b=0;b<g;b++)x+=v[b];i.update(x,r,1)}function m(p,v,g,y){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<p.length;b++)d(p[b],v[b],y[b]);else{x.multiDrawArraysInstancedWEBGL(r,p,0,v,0,y,0,g);let b=0;for(let A=0;A<g;A++)b+=v[A]*y[A];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Bb(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(G){return!(G!==Ei&&r.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(G){const $=G===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==sa&&r.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Bi&&!$)}function m(G){if(G==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),R=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=b>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:z,maxVaryings:R,maxFragmentUniforms:D,vertexTextures:N,maxSamples:F}}function Ib(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new hr,h=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const x=g.length!==0||y||r!==0||l;return l=y,r=g.length,x},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,x){const b=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||b===null||b.length===0||u&&!M)u?v(null):p();else{const z=u?0:r,R=z*4;let D=_.clippingState||null;m.value=D,D=v(b,y,R,x);for(let N=0;N!==R;++N)D[N]=i[N];_.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(g,y,x,b){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const _=x+A*4,z=y.matrixWorldInverse;h.getNormalMatrix(z),(M===null||M.length<_)&&(M=new Float32Array(_));for(let R=0,D=x;R!==A;++R,D+=4)d.copy(g[R]).applyMatrix4(z,h),d.normal.toArray(M,D),M[D+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function zb(o){let t=new WeakMap;function i(d,h){return h===qd?d.mapping=Cs:h===Yd&&(d.mapping=ws),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===qd||h===Yd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new OS(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const bs=4,i0=[.125,.215,.35,.446,.526,.582],_r=20,Ud=new J0,a0=new Se;let Ld=null,Nd=0,Od=0,Pd=!1;const pr=(1+Math.sqrt(5))/2,Ms=1/pr,r0=[new nt(-pr,Ms,0),new nt(pr,Ms,0),new nt(-Ms,0,pr),new nt(Ms,0,pr),new nt(0,pr,-Ms),new nt(0,pr,Ms),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],Fb=new nt;class s0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=Fb}=u;Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ld,Nd,Od),this._renderer.xr.enabled=Pd,t.scissorTest=!1,Oc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Ko,format:Ei,colorSpace:Ds,depthBuffer:!1},l=o0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hb(u)),this._blurMaterial=Gb(u,t,i)}return l}_compileMaterial(t){const i=new zn(this._lodPlanes[0],t);this._renderer.compile(i,Ud)}_sceneToCubeUV(t,i,r,l,u){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(a0),g.toneMapping=Ha,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const A=new gr({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),M=new zn(new Jo,A);let _=!1;const z=t.background;z?z.isColor&&(A.color.copy(z),t.background=null,_=!0):(A.color.copy(a0),_=!0);for(let R=0;R<6;R++){const D=R%3;D===0?(m.up.set(0,p[R],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[R],u.y,u.z)):D===1?(m.up.set(0,0,p[R]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[R],u.z)):(m.up.set(0,p[R],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[R]));const N=this._cubeSize;Oc(l,D*N,R>2?N:0,N,N),g.setRenderTarget(l),_&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=y,t.background=z}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Cs||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=c0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l0());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new zn(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Oc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Ud)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=r0[(l-u-1)%r0.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new zn(this._lodPlanes[l],p),y=p.uniforms,x=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*_r-1),A=u/b,M=isFinite(u)?1+Math.floor(v*A):_r;M>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${_r}`);const _=[];let z=0;for(let G=0;G<_r;++G){const $=G/A,U=Math.exp(-$*$/2);_.push(U),G===0?z+=U:G<M&&(z+=2*U)}for(let G=0;G<_.length;G++)_[G]=_[G]/z;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:R}=this;y.dTheta.value=b,y.mipInt.value=R-r;const D=this._sizeLods[l],N=3*D*(l>R-bs?l-R+bs:0),F=4*(this._cubeSize-D);Oc(i,N,F,3*D,2*D),m.setRenderTarget(i),m.render(g,Ud)}}function Hb(o){const t=[],i=[],r=[];let l=o;const u=o-bs+1+i0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-bs?m=i0[d-o+bs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),v=-p,g=1+p,y=[v,v,g,v,g,g,v,v,g,g,v,g],x=6,b=6,A=3,M=2,_=1,z=new Float32Array(A*b*x),R=new Float32Array(M*b*x),D=new Float32Array(_*b*x);for(let F=0;F<x;F++){const G=F%3*2/3-1,$=F>2?0:-1,U=[G,$,0,G+2/3,$,0,G+2/3,$+1,0,G,$,0,G+2/3,$+1,0,G,$+1,0];z.set(U,A*b*F),R.set(y,M*b*F);const L=[F,F,F,F,F,F];D.set(L,_*b*F)}const N=new qn;N.setAttribute("position",new Wn(z,A)),N.setAttribute("uv",new Wn(R,M)),N.setAttribute("faceIndex",new Wn(D,_)),t.push(N),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function o0(o,t,i){const r=new Sr(o,t,i);return r.texture.mapping=jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Oc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function Gb(o,t,i){const r=new Float32Array(_r),l=new nt(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function l0(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function c0(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vb(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===qd||m===Yd,v=m===Cs||m===ws;if(p||v){let g=t.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new s0(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return p&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new s0(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function kb(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&jo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Xb(o,t,i,r){const l={},u=new WeakMap;function d(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);y.removeEventListener("dispose",d),delete l[y.id];const x=u.get(y);x&&(t.remove(x),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(g,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const x in y)t.update(y[x],o.ARRAY_BUFFER)}function p(g){const y=[],x=g.index,b=g.attributes.position;let A=0;if(x!==null){const z=x.array;A=x.version;for(let R=0,D=z.length;R<D;R+=3){const N=z[R+0],F=z[R+1],G=z[R+2];y.push(N,F,F,G,G,N)}}else if(b!==void 0){const z=b.array;A=b.version;for(let R=0,D=z.length/3-1;R<D;R+=3){const N=R+0,F=R+1,G=R+2;y.push(N,F,F,G,G,N)}}else return;const M=new(F0(y)?k0:V0)(y,1);M.version=A;const _=u.get(g);_&&t.remove(_),u.set(g,M)}function v(g){const y=u.get(g);if(y){const x=g.index;x!==null&&y.version<x.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function Wb(o,t,i){let r;function l(y){r=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function m(y,x){o.drawElements(r,x,u,y*d),i.update(x,r,1)}function p(y,x,b){b!==0&&(o.drawElementsInstanced(r,x,u,y*d,b),i.update(x,r,b))}function v(y,x,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,u,y,0,b);let M=0;for(let _=0;_<b;_++)M+=x[_];i.update(M,r,1)}function g(y,x,b,A){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)p(y[_]/d,x[_],A[_]);else{M.multiDrawElementsInstancedWEBGL(r,x,0,u,y,0,A,0,b);let _=0;for(let z=0;z<b;z++)_+=x[z]*A[z];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function qb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Yb(o,t,i){const r=new WeakMap,l=new rn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let y=r.get(h);if(y===void 0||y.count!==g){let U=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",U)};y!==void 0&&y.texture.dispose();const x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let R=0;x===!0&&(R=1),b===!0&&(R=2),A===!0&&(R=3);let D=h.attributes.position.count*R,N=1;D>t.maxTextureSize&&(N=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const F=new Float32Array(D*N*4*g),G=new H0(F,D,N,g);G.type=Bi,G.needsUpdate=!0;const $=R*4;for(let L=0;L<g;L++){const V=M[L],Y=_[L],mt=z[L],_t=D*N*4*L;for(let gt=0;gt<V.count;gt++){const B=gt*$;x===!0&&(l.fromBufferAttribute(V,gt),F[_t+B+0]=l.x,F[_t+B+1]=l.y,F[_t+B+2]=l.z,F[_t+B+3]=0),b===!0&&(l.fromBufferAttribute(Y,gt),F[_t+B+4]=l.x,F[_t+B+5]=l.y,F[_t+B+6]=l.z,F[_t+B+7]=0),A===!0&&(l.fromBufferAttribute(mt,gt),F[_t+B+8]=l.x,F[_t+B+9]=l.y,F[_t+B+10]=l.z,F[_t+B+11]=mt.itemSize===4?l.w:1)}}y={count:g,texture:G,size:new Te(D,N)},r.set(h,y),h.addEventListener("dispose",U)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let x=0;for(let A=0;A<p.length;A++)x+=p[A];const b=h.morphTargetsRelative?1:1-x;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function jb(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const tv=new Un,u0=new K0(1,1),ev=new H0,nv=new _S,iv=new q0,f0=[],d0=[],h0=new Float32Array(16),p0=new Float32Array(9),m0=new Float32Array(4);function Ps(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=f0[l];if(u===void 0&&(u=new Float32Array(l),f0[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function pn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function mn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Zc(o,t){let i=d0[t];i===void 0&&(i=new Int32Array(t),d0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Zb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Kb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2fv(this.addr,t),mn(i,t)}}function Qb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;o.uniform3fv(this.addr,t),mn(i,t)}}function Jb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4fv(this.addr,t),mn(i,t)}}function $b(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;m0.set(r),o.uniformMatrix2fv(this.addr,!1,m0),mn(i,r)}}function tT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;p0.set(r),o.uniformMatrix3fv(this.addr,!1,p0),mn(i,r)}}function eT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;h0.set(r),o.uniformMatrix4fv(this.addr,!1,h0),mn(i,r)}}function nT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function iT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2iv(this.addr,t),mn(i,t)}}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3iv(this.addr,t),mn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4iv(this.addr,t),mn(i,t)}}function sT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2uiv(this.addr,t),mn(i,t)}}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3uiv(this.addr,t),mn(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4uiv(this.addr,t),mn(i,t)}}function uT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(u0.compareFunction=z0,u=u0):u=tv,i.setTexture2D(t||u,l)}function fT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||nv,l)}function dT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||iv,l)}function hT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||ev,l)}function pT(o){switch(o){case 5126:return Zb;case 35664:return Kb;case 35665:return Qb;case 35666:return Jb;case 35674:return $b;case 35675:return tT;case 35676:return eT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return hT}}function mT(o,t){o.uniform1fv(this.addr,t)}function gT(o,t){const i=Ps(t,this.size,2);o.uniform2fv(this.addr,i)}function _T(o,t){const i=Ps(t,this.size,3);o.uniform3fv(this.addr,i)}function vT(o,t){const i=Ps(t,this.size,4);o.uniform4fv(this.addr,i)}function xT(o,t){const i=Ps(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yT(o,t){const i=Ps(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ST(o,t){const i=Ps(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function MT(o,t){o.uniform1iv(this.addr,t)}function ET(o,t){o.uniform2iv(this.addr,t)}function bT(o,t){o.uniform3iv(this.addr,t)}function TT(o,t){o.uniform4iv(this.addr,t)}function AT(o,t){o.uniform1uiv(this.addr,t)}function RT(o,t){o.uniform2uiv(this.addr,t)}function CT(o,t){o.uniform3uiv(this.addr,t)}function wT(o,t){o.uniform4uiv(this.addr,t)}function DT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||tv,u[d])}function UT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||nv,u[d])}function LT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||iv,u[d])}function NT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||ev,u[d])}function OT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return bT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}class PT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class BT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class IT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function g0(o,t){o.seq.push(t),o.map[t.id]=t}function zT(o,t,i){const r=o.name,l=r.length;for(Bd.lastIndex=0;;){const u=Bd.exec(r),d=Bd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){g0(i,p===void 0?new PT(h,o,t):new BT(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new IT(h),g0(i,g)),i=g}}}class Hc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);zT(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function _0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const FT=37297;let HT=0;function GT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const v0=new me;function VT(o){Le._getMatrix(v0,Le.workingColorSpace,o);const t=`mat3( ${v0.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case Gc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function x0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+GT(o.getShaderSource(t),h)}else return u}function kT(o,t){const i=VT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function XT(o,t){let i;switch(t){case Xy:i="Linear";break;case Wy:i="Reinhard";break;case qy:i="Cineon";break;case Yy:i="ACESFilmic";break;case Zy:i="AgX";break;case Ky:i="Neutral";break;case jy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new nt;function WT(){Le.getLuminanceCoefficients(Pc);const o=Pc.x.toFixed(4),t=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function YT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function jT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function ko(o){return o!==""}function y0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function S0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(ZT,QT)}const KT=new Map;function QT(o,t){let i=ve[t];if(i===void 0){const r=KT.get(t);if(r!==void 0)i=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Rh(i)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M0(o){return o.replace(JT,$T)}function $T(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function E0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===C0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ey?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function eA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Cs:case ws:t="ENVMAP_TYPE_CUBE";break;case jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function iA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case w0:t="ENVMAP_BLENDING_MULTIPLY";break;case Vy:t="ENVMAP_BLENDING_MIX";break;case ky:t="ENVMAP_BLENDING_ADD";break}return t}function aA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function rA(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=tA(i),p=eA(i),v=nA(i),g=iA(i),y=aA(i),x=qT(i),b=YT(u),A=l.createProgram();let M,_,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ko).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(M=[E0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[E0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ve.tonemapping_pars_fragment:"",i.toneMapping!==Ha?XT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,kT("linearToOutputTexel",i.outputColorSpace),WT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),d=Rh(d),d=y0(d,i),d=S0(d,i),h=Rh(h),h=y0(h,i),h=S0(h,i),d=M0(d),h=M0(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=z+M+d,D=z+_+h,N=_0(l,l.VERTEX_SHADER,R),F=_0(l,l.FRAGMENT_SHADER,D);l.attachShader(A,N),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function G(V){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(A)||"",mt=l.getShaderInfoLog(N)||"",_t=l.getShaderInfoLog(F)||"",gt=Y.trim(),B=mt.trim(),et=_t.trim();let Z=!0,Tt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,N,F);else{const O=x0(l,N,"vertex"),it=x0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+gt+`
`+O+`
`+it)}else gt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",gt):(B===""||et==="")&&(Tt=!1);Tt&&(V.diagnostics={runnable:Z,programLog:gt,vertexShader:{log:B,prefix:M},fragmentShader:{log:et,prefix:_}})}l.deleteShader(N),l.deleteShader(F),$=new Hc(l,A),U=jT(l,A)}let $;this.getUniforms=function(){return $===void 0&&G(this),$};let U;this.getAttributes=function(){return U===void 0&&G(this),U};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(A,FT)),L},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=N,this.fragmentShader=F,this}let sA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new lA(t),i.set(t,r)),r}}class lA{constructor(t){this.id=sA++,this.code=t,this.usedTimes=0}}function cA(o,t,i,r,l,u,d){const h=new Fh,m=new oA,p=new Set,v=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(U){return p.add(U),U===0?"uv":`uv${U}`}function M(U,L,V,Y,mt){const _t=Y.fog,gt=mt.geometry,B=U.isMeshStandardMaterial?Y.environment:null,et=(U.isMeshStandardMaterial?i:t).get(U.envMap||B),Z=et&&et.mapping===jc?et.image.height:null,Tt=b[U.type];U.precision!==null&&(x=l.getMaxPrecision(U.precision),x!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",x,"instead."));const O=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,it=O!==void 0?O.length:0;let bt=0;gt.morphAttributes.position!==void 0&&(bt=1),gt.morphAttributes.normal!==void 0&&(bt=2),gt.morphAttributes.color!==void 0&&(bt=3);let At,Ft,qt,rt;if(Tt){const Ce=Ni[Tt];At=Ce.vertexShader,Ft=Ce.fragmentShader}else At=U.vertexShader,Ft=U.fragmentShader,m.update(U),qt=m.getVertexShaderID(U),rt=m.getFragmentShaderID(U);const St=o.getRenderTarget(),Nt=o.state.buffers.depth.getReversed(),ie=mt.isInstancedMesh===!0,Jt=mt.isBatchedMesh===!0,he=!!U.map,Qe=!!U.matcap,H=!!et,we=!!U.aoMap,P=!!U.lightMap,lt=!!U.bumpMap,q=!!U.normalMap,yt=!!U.displacementMap,ot=!!U.emissiveMap,Rt=!!U.metalnessMap,Ut=!!U.roughnessMap,Xt=U.anisotropy>0,w=U.clearcoat>0,E=U.dispersion>0,Q=U.iridescence>0,ct=U.sheen>0,pt=U.transmission>0,dt=Xt&&!!U.anisotropyMap,Gt=w&&!!U.clearcoatMap,Ot=w&&!!U.clearcoatNormalMap,Qt=w&&!!U.clearcoatRoughnessMap,$t=Q&&!!U.iridescenceMap,Ct=Q&&!!U.iridescenceThicknessMap,It=ct&&!!U.sheenColorMap,ee=ct&&!!U.sheenRoughnessMap,jt=!!U.specularMap,zt=!!U.specularColorMap,de=!!U.specularIntensityMap,X=pt&&!!U.transmissionMap,Lt=pt&&!!U.thicknessMap,Bt=!!U.gradientMap,Wt=!!U.alphaMap,wt=U.alphaTest>0,Et=!!U.alphaHash,Kt=!!U.extensions;let fe=Ha;U.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(fe=o.toneMapping);const Oe={shaderID:Tt,shaderType:U.type,shaderName:U.name,vertexShader:At,fragmentShader:Ft,defines:U.defines,customVertexShaderID:qt,customFragmentShaderID:rt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:x,batching:Jt,batchingColor:Jt&&mt._colorsTexture!==null,instancing:ie,instancingColor:ie&&mt.instanceColor!==null,instancingMorph:ie&&mt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ds,alphaToCoverage:!!U.alphaToCoverage,map:he,matcap:Qe,envMap:H,envMapMode:H&&et.mapping,envMapCubeUVHeight:Z,aoMap:we,lightMap:P,bumpMap:lt,normalMap:q,displacementMap:y&&yt,emissiveMap:ot,normalMapObjectSpace:q&&U.normalMapType===eS,normalMapTangentSpace:q&&U.normalMapType===tS,metalnessMap:Rt,roughnessMap:Ut,anisotropy:Xt,anisotropyMap:dt,clearcoat:w,clearcoatMap:Gt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Qt,dispersion:E,iridescence:Q,iridescenceMap:$t,iridescenceThicknessMap:Ct,sheen:ct,sheenColorMap:It,sheenRoughnessMap:ee,specularMap:jt,specularColorMap:zt,specularIntensityMap:de,transmission:pt,transmissionMap:X,thicknessMap:Lt,gradientMap:Bt,opaque:U.transparent===!1&&U.blending===Ts&&U.alphaToCoverage===!1,alphaMap:Wt,alphaTest:wt,alphaHash:Et,combine:U.combine,mapUv:he&&A(U.map.channel),aoMapUv:we&&A(U.aoMap.channel),lightMapUv:P&&A(U.lightMap.channel),bumpMapUv:lt&&A(U.bumpMap.channel),normalMapUv:q&&A(U.normalMap.channel),displacementMapUv:yt&&A(U.displacementMap.channel),emissiveMapUv:ot&&A(U.emissiveMap.channel),metalnessMapUv:Rt&&A(U.metalnessMap.channel),roughnessMapUv:Ut&&A(U.roughnessMap.channel),anisotropyMapUv:dt&&A(U.anisotropyMap.channel),clearcoatMapUv:Gt&&A(U.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&A(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&A(U.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&A(U.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&A(U.iridescenceThicknessMap.channel),sheenColorMapUv:It&&A(U.sheenColorMap.channel),sheenRoughnessMapUv:ee&&A(U.sheenRoughnessMap.channel),specularMapUv:jt&&A(U.specularMap.channel),specularColorMapUv:zt&&A(U.specularColorMap.channel),specularIntensityMapUv:de&&A(U.specularIntensityMap.channel),transmissionMapUv:X&&A(U.transmissionMap.channel),thicknessMapUv:Lt&&A(U.thicknessMap.channel),alphaMapUv:Wt&&A(U.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(q||Xt),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:mt.isPoints===!0&&!!gt.attributes.uv&&(he||Wt),fog:!!_t,useFog:U.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Nt,skinning:mt.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:bt,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:fe,decodeVideoTexture:he&&U.map.isVideoTexture===!0&&Le.getTransfer(U.map.colorSpace)===Ge,decodeVideoTextureEmissive:ot&&U.emissiveMap.isVideoTexture===!0&&Le.getTransfer(U.emissiveMap.colorSpace)===Ge,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Oi,flipSided:U.side===Xn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Kt&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&U.extensions.multiDraw===!0||Jt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function _(U){const L=[];if(U.shaderID?L.push(U.shaderID):(L.push(U.customVertexShaderID),L.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)L.push(V),L.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(z(L,U),R(L,U),L.push(o.outputColorSpace)),L.push(U.customProgramCacheKey),L.join()}function z(U,L){U.push(L.precision),U.push(L.outputColorSpace),U.push(L.envMapMode),U.push(L.envMapCubeUVHeight),U.push(L.mapUv),U.push(L.alphaMapUv),U.push(L.lightMapUv),U.push(L.aoMapUv),U.push(L.bumpMapUv),U.push(L.normalMapUv),U.push(L.displacementMapUv),U.push(L.emissiveMapUv),U.push(L.metalnessMapUv),U.push(L.roughnessMapUv),U.push(L.anisotropyMapUv),U.push(L.clearcoatMapUv),U.push(L.clearcoatNormalMapUv),U.push(L.clearcoatRoughnessMapUv),U.push(L.iridescenceMapUv),U.push(L.iridescenceThicknessMapUv),U.push(L.sheenColorMapUv),U.push(L.sheenRoughnessMapUv),U.push(L.specularMapUv),U.push(L.specularColorMapUv),U.push(L.specularIntensityMapUv),U.push(L.transmissionMapUv),U.push(L.thicknessMapUv),U.push(L.combine),U.push(L.fogExp2),U.push(L.sizeAttenuation),U.push(L.morphTargetsCount),U.push(L.morphAttributeCount),U.push(L.numDirLights),U.push(L.numPointLights),U.push(L.numSpotLights),U.push(L.numSpotLightMaps),U.push(L.numHemiLights),U.push(L.numRectAreaLights),U.push(L.numDirLightShadows),U.push(L.numPointLightShadows),U.push(L.numSpotLightShadows),U.push(L.numSpotLightShadowsWithMaps),U.push(L.numLightProbes),U.push(L.shadowMapType),U.push(L.toneMapping),U.push(L.numClippingPlanes),U.push(L.numClipIntersection),U.push(L.depthPacking)}function R(U,L){h.disableAll(),L.supportsVertexTextures&&h.enable(0),L.instancing&&h.enable(1),L.instancingColor&&h.enable(2),L.instancingMorph&&h.enable(3),L.matcap&&h.enable(4),L.envMap&&h.enable(5),L.normalMapObjectSpace&&h.enable(6),L.normalMapTangentSpace&&h.enable(7),L.clearcoat&&h.enable(8),L.iridescence&&h.enable(9),L.alphaTest&&h.enable(10),L.vertexColors&&h.enable(11),L.vertexAlphas&&h.enable(12),L.vertexUv1s&&h.enable(13),L.vertexUv2s&&h.enable(14),L.vertexUv3s&&h.enable(15),L.vertexTangents&&h.enable(16),L.anisotropy&&h.enable(17),L.alphaHash&&h.enable(18),L.batching&&h.enable(19),L.dispersion&&h.enable(20),L.batchingColor&&h.enable(21),L.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),U.push(h.mask)}function D(U){const L=b[U.type];let V;if(L){const Y=Ni[L];V=DS.clone(Y.uniforms)}else V=U.uniforms;return V}function N(U,L){let V;for(let Y=0,mt=v.length;Y<mt;Y++){const _t=v[Y];if(_t.cacheKey===L){V=_t,++V.usedTimes;break}}return V===void 0&&(V=new rA(o,L,U,u),v.push(V)),V}function F(U){if(--U.usedTimes===0){const L=v.indexOf(U);v[L]=v[v.length-1],v.pop(),U.destroy()}}function G(U){m.remove(U)}function $(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:N,releaseProgram:F,releaseShaderCache:G,programs:v,dispose:$}}function uA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function fA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function b0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function T0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(g,y,x,b,A,M){let _=o[t];return _===void 0?(_={id:g.id,object:g,geometry:y,material:x,groupOrder:b,renderOrder:g.renderOrder,z:A,group:M},o[t]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=x,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=A,_.group=M),t++,_}function h(g,y,x,b,A,M){const _=d(g,y,x,b,A,M);x.transmission>0?r.push(_):x.transparent===!0?l.push(_):i.push(_)}function m(g,y,x,b,A,M){const _=d(g,y,x,b,A,M);x.transmission>0?r.unshift(_):x.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,y){i.length>1&&i.sort(g||fA),r.length>1&&r.sort(y||b0),l.length>1&&l.sort(y||b0)}function v(){for(let g=t,y=o.length;g<y;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function dA(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new T0,o.set(r,[d])):l>=u.length?(d=new T0,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function hA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new nt,color:new Se};break;case"SpotLight":i={position:new nt,direction:new nt,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[t.id]=i,i}}}function pA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let mA=0;function gA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _A(o){const t=new hA,i=pA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new nt);const l=new nt,u=new Ye,d=new Ye;function h(p){let v=0,g=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,b=0,A=0,M=0,_=0,z=0,R=0,D=0,N=0,F=0,G=0;p.sort(gA);for(let U=0,L=p.length;U<L;U++){const V=p[U],Y=V.color,mt=V.intensity,_t=V.distance,gt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=Y.r*mt,g+=Y.g*mt,y+=Y.b*mt;else if(V.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(V.sh.coefficients[B],mt);G++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const et=V.shadow,Z=i.get(V);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,r.directionalShadow[x]=Z,r.directionalShadowMap[x]=gt,r.directionalShadowMatrix[x]=V.shadow.matrix,z++}r.directional[x]=B,x++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(Y).multiplyScalar(mt),B.distance=_t,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,r.spot[A]=B;const et=V.shadow;if(V.map&&(r.spotLightMap[N]=V.map,N++,et.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[A]=et.matrix,V.castShadow){const Z=i.get(V);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,r.spotShadow[A]=Z,r.spotShadowMap[A]=gt,D++}A++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(Y).multiplyScalar(mt),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=B,M++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const et=V.shadow,Z=i.get(V);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,Z.shadowCameraNear=et.camera.near,Z.shadowCameraFar=et.camera.far,r.pointShadow[b]=Z,r.pointShadowMap[b]=gt,r.pointShadowMatrix[b]=V.shadow.matrix,R++}r.point[b]=B,b++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(mt),B.groundColor.copy(V.groundColor).multiplyScalar(mt),r.hemi[_]=B,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=kt.LTC_FLOAT_1,r.rectAreaLTC2=kt.LTC_FLOAT_2):(r.rectAreaLTC1=kt.LTC_HALF_1,r.rectAreaLTC2=kt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=y;const $=r.hash;($.directionalLength!==x||$.pointLength!==b||$.spotLength!==A||$.rectAreaLength!==M||$.hemiLength!==_||$.numDirectionalShadows!==z||$.numPointShadows!==R||$.numSpotShadows!==D||$.numSpotMaps!==N||$.numLightProbes!==G)&&(r.directional.length=x,r.spot.length=A,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=D+N-F,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=G,$.directionalLength=x,$.pointLength=b,$.spotLength=A,$.rectAreaLength=M,$.hemiLength=_,$.numDirectionalShadows=z,$.numPointShadows=R,$.numSpotShadows=D,$.numSpotMaps=N,$.numLightProbes=G,r.version=mA++)}function m(p,v){let g=0,y=0,x=0,b=0,A=0;const M=v.matrixWorldInverse;for(let _=0,z=p.length;_<z;_++){const R=p[_];if(R.isDirectionalLight){const D=r.directional[g];D.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),g++}else if(R.isSpotLight){const D=r.spot[x];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),x++}else if(R.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(M),d.identity(),u.copy(R.matrixWorld),u.premultiply(M),d.extractRotation(u),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),b++}else if(R.isPointLight){const D=r.point[y];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(M),y++}else if(R.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(M),A++}}}return{setup:h,setupView:m,state:r}}function A0(o){const t=new _A(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function vA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new A0(o),t.set(l,[h])):u>=d.length?(h=new A0(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SA(o,t,i){let r=new Z0;const l=new Te,u=new Te,d=new rn,h=new YS({depthPacking:$y}),m=new jS,p={},v=i.maxTextureSize,g={[Va]:Xn,[Xn]:Va,[Oi]:Oi},y=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:xA,fragmentShader:yA}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const b=new qn;b.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new zn(b,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0;let _=this.type;this.render=function(F,G,$){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const U=o.getRenderTarget(),L=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(Fa),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const mt=_!==aa&&this.type===aa,_t=_===aa&&this.type!==aa;for(let gt=0,B=F.length;gt<B;gt++){const et=F[gt],Z=et.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Tt=Z.getFrameExtents();if(l.multiply(Tt),u.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/Tt.x),l.x=u.x*Tt.x,Z.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/Tt.y),l.y=u.y*Tt.y,Z.mapSize.y=u.y)),Z.map===null||mt===!0||_t===!0){const it=this.type!==aa?{minFilter:ni,magFilter:ni}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Sr(l.x,l.y,it),Z.map.texture.name=et.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const O=Z.getViewportCount();for(let it=0;it<O;it++){const bt=Z.getViewport(it);d.set(u.x*bt.x,u.y*bt.y,u.x*bt.z,u.y*bt.w),Y.viewport(d),Z.updateMatrices(et,it),r=Z.getFrustum(),D(G,$,Z.camera,et,this.type)}Z.isPointLightShadow!==!0&&this.type===aa&&z(Z,$),Z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(U,L,V)};function z(F,G){const $=t.update(A);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Sr(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(G,null,$,y,A,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(G,null,$,x,A,null)}function R(F,G,$,U){let L=null;const V=$.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)L=V;else if(L=$.isPointLight===!0?m:h,o.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const Y=L.uuid,mt=G.uuid;let _t=p[Y];_t===void 0&&(_t={},p[Y]=_t);let gt=_t[mt];gt===void 0&&(gt=L.clone(),_t[mt]=gt,G.addEventListener("dispose",N)),L=gt}if(L.visible=G.visible,L.wireframe=G.wireframe,U===aa?L.side=G.shadowSide!==null?G.shadowSide:G.side:L.side=G.shadowSide!==null?G.shadowSide:g[G.side],L.alphaMap=G.alphaMap,L.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,L.map=G.map,L.clipShadows=G.clipShadows,L.clippingPlanes=G.clippingPlanes,L.clipIntersection=G.clipIntersection,L.displacementMap=G.displacementMap,L.displacementScale=G.displacementScale,L.displacementBias=G.displacementBias,L.wireframeLinewidth=G.wireframeLinewidth,L.linewidth=G.linewidth,$.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const Y=o.properties.get(L);Y.light=$}return L}function D(F,G,$,U,L){if(F.visible===!1)return;if(F.layers.test(G.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&L===aa)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,F.matrixWorld);const mt=t.update(F),_t=F.material;if(Array.isArray(_t)){const gt=mt.groups;for(let B=0,et=gt.length;B<et;B++){const Z=gt[B],Tt=_t[Z.materialIndex];if(Tt&&Tt.visible){const O=R(F,Tt,U,L);F.onBeforeShadow(o,F,G,$,mt,O,Z),o.renderBufferDirect($,null,mt,O,F,Z),F.onAfterShadow(o,F,G,$,mt,O,Z)}}}else if(_t.visible){const gt=R(F,_t,U,L);F.onBeforeShadow(o,F,G,$,mt,gt,null),o.renderBufferDirect($,null,mt,gt,F,null),F.onAfterShadow(o,F,G,$,mt,gt,null)}}const Y=F.children;for(let mt=0,_t=Y.length;mt<_t;mt++)D(Y[mt],G,$,U,L)}function N(F){F.target.removeEventListener("dispose",N);for(const $ in p){const U=p[$],L=F.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}const MA={[Fd]:Hd,[Gd]:Xd,[Vd]:Wd,[Rs]:kd,[Hd]:Fd,[Xd]:Gd,[Wd]:Vd,[kd]:Rs};function EA(o,t){function i(){let X=!1;const Lt=new rn;let Bt=null;const Wt=new rn(0,0,0,0);return{setMask:function(wt){Bt!==wt&&!X&&(o.colorMask(wt,wt,wt,wt),Bt=wt)},setLocked:function(wt){X=wt},setClear:function(wt,Et,Kt,fe,Oe){Oe===!0&&(wt*=fe,Et*=fe,Kt*=fe),Lt.set(wt,Et,Kt,fe),Wt.equals(Lt)===!1&&(o.clearColor(wt,Et,Kt,fe),Wt.copy(Lt))},reset:function(){X=!1,Bt=null,Wt.set(-1,0,0,0)}}}function r(){let X=!1,Lt=!1,Bt=null,Wt=null,wt=null;return{setReversed:function(Et){if(Lt!==Et){const Kt=t.get("EXT_clip_control");Et?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Lt=Et;const fe=wt;wt=null,this.setClear(fe)}},getReversed:function(){return Lt},setTest:function(Et){Et?St(o.DEPTH_TEST):Nt(o.DEPTH_TEST)},setMask:function(Et){Bt!==Et&&!X&&(o.depthMask(Et),Bt=Et)},setFunc:function(Et){if(Lt&&(Et=MA[Et]),Wt!==Et){switch(Et){case Fd:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Gd:o.depthFunc(o.LESS);break;case Rs:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case kd:o.depthFunc(o.GEQUAL);break;case Xd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Wt=Et}},setLocked:function(Et){X=Et},setClear:function(Et){wt!==Et&&(Lt&&(Et=1-Et),o.clearDepth(Et),wt=Et)},reset:function(){X=!1,Bt=null,Wt=null,wt=null,Lt=!1}}}function l(){let X=!1,Lt=null,Bt=null,Wt=null,wt=null,Et=null,Kt=null,fe=null,Oe=null;return{setTest:function(Ce){X||(Ce?St(o.STENCIL_TEST):Nt(o.STENCIL_TEST))},setMask:function(Ce){Lt!==Ce&&!X&&(o.stencilMask(Ce),Lt=Ce)},setFunc:function(Ce,hi,un){(Bt!==Ce||Wt!==hi||wt!==un)&&(o.stencilFunc(Ce,hi,un),Bt=Ce,Wt=hi,wt=un)},setOp:function(Ce,hi,un){(Et!==Ce||Kt!==hi||fe!==un)&&(o.stencilOp(Ce,hi,un),Et=Ce,Kt=hi,fe=un)},setLocked:function(Ce){X=Ce},setClear:function(Ce){Oe!==Ce&&(o.clearStencil(Ce),Oe=Ce)},reset:function(){X=!1,Lt=null,Bt=null,Wt=null,wt=null,Et=null,Kt=null,fe=null,Oe=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},y=new WeakMap,x=[],b=null,A=!1,M=null,_=null,z=null,R=null,D=null,N=null,F=null,G=new Se(0,0,0),$=0,U=!1,L=null,V=null,Y=null,mt=null,_t=null;const gt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,et=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Z)[1]),B=et>=1):Z.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),B=et>=2);let Tt=null,O={};const it=o.getParameter(o.SCISSOR_BOX),bt=o.getParameter(o.VIEWPORT),At=new rn().fromArray(it),Ft=new rn().fromArray(bt);function qt(X,Lt,Bt,Wt){const wt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(X,Et),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Kt=0;Kt<Bt;Kt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Wt,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Lt+Kt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return Et}const rt={};rt[o.TEXTURE_2D]=qt(o.TEXTURE_2D,o.TEXTURE_2D,1),rt[o.TEXTURE_CUBE_MAP]=qt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[o.TEXTURE_2D_ARRAY]=qt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),rt[o.TEXTURE_3D]=qt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),St(o.DEPTH_TEST),d.setFunc(Rs),lt(!1),q(b_),St(o.CULL_FACE),we(Fa);function St(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Nt(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function ie(X,Lt){return g[X]!==Lt?(o.bindFramebuffer(X,Lt),g[X]=Lt,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Lt),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Jt(X,Lt){let Bt=x,Wt=!1;if(X){Bt=y.get(Lt),Bt===void 0&&(Bt=[],y.set(Lt,Bt));const wt=X.textures;if(Bt.length!==wt.length||Bt[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Kt=wt.length;Et<Kt;Et++)Bt[Et]=o.COLOR_ATTACHMENT0+Et;Bt.length=wt.length,Wt=!0}}else Bt[0]!==o.BACK&&(Bt[0]=o.BACK,Wt=!0);Wt&&o.drawBuffers(Bt)}function he(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const Qe={[mr]:o.FUNC_ADD,[Ty]:o.FUNC_SUBTRACT,[Ay]:o.FUNC_REVERSE_SUBTRACT};Qe[Ry]=o.MIN,Qe[Cy]=o.MAX;const H={[wy]:o.ZERO,[Dy]:o.ONE,[Uy]:o.SRC_COLOR,[Id]:o.SRC_ALPHA,[Iy]:o.SRC_ALPHA_SATURATE,[Py]:o.DST_COLOR,[Ny]:o.DST_ALPHA,[Ly]:o.ONE_MINUS_SRC_COLOR,[zd]:o.ONE_MINUS_SRC_ALPHA,[By]:o.ONE_MINUS_DST_COLOR,[Oy]:o.ONE_MINUS_DST_ALPHA,[zy]:o.CONSTANT_COLOR,[Fy]:o.ONE_MINUS_CONSTANT_COLOR,[Hy]:o.CONSTANT_ALPHA,[Gy]:o.ONE_MINUS_CONSTANT_ALPHA};function we(X,Lt,Bt,Wt,wt,Et,Kt,fe,Oe,Ce){if(X===Fa){A===!0&&(Nt(o.BLEND),A=!1);return}if(A===!1&&(St(o.BLEND),A=!0),X!==by){if(X!==M||Ce!==U){if((_!==mr||D!==mr)&&(o.blendEquation(o.FUNC_ADD),_=mr,D=mr),Ce)switch(X){case Ts:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case T_:o.blendFunc(o.ONE,o.ONE);break;case A_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case R_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ts:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case T_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case A_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}z=null,R=null,N=null,F=null,G.set(0,0,0),$=0,M=X,U=Ce}return}wt=wt||Lt,Et=Et||Bt,Kt=Kt||Wt,(Lt!==_||wt!==D)&&(o.blendEquationSeparate(Qe[Lt],Qe[wt]),_=Lt,D=wt),(Bt!==z||Wt!==R||Et!==N||Kt!==F)&&(o.blendFuncSeparate(H[Bt],H[Wt],H[Et],H[Kt]),z=Bt,R=Wt,N=Et,F=Kt),(fe.equals(G)===!1||Oe!==$)&&(o.blendColor(fe.r,fe.g,fe.b,Oe),G.copy(fe),$=Oe),M=X,U=!1}function P(X,Lt){X.side===Oi?Nt(o.CULL_FACE):St(o.CULL_FACE);let Bt=X.side===Xn;Lt&&(Bt=!Bt),lt(Bt),X.blending===Ts&&X.transparent===!1?we(Fa):we(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const Wt=X.stencilWrite;h.setTest(Wt),Wt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ot(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Nt(o.SAMPLE_ALPHA_TO_COVERAGE)}function lt(X){L!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),L=X)}function q(X){X!==Sy?(St(o.CULL_FACE),X!==V&&(X===b_?o.cullFace(o.BACK):X===My?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Nt(o.CULL_FACE),V=X}function yt(X){X!==Y&&(B&&o.lineWidth(X),Y=X)}function ot(X,Lt,Bt){X?(St(o.POLYGON_OFFSET_FILL),(mt!==Lt||_t!==Bt)&&(o.polygonOffset(Lt,Bt),mt=Lt,_t=Bt)):Nt(o.POLYGON_OFFSET_FILL)}function Rt(X){X?St(o.SCISSOR_TEST):Nt(o.SCISSOR_TEST)}function Ut(X){X===void 0&&(X=o.TEXTURE0+gt-1),Tt!==X&&(o.activeTexture(X),Tt=X)}function Xt(X,Lt,Bt){Bt===void 0&&(Tt===null?Bt=o.TEXTURE0+gt-1:Bt=Tt);let Wt=O[Bt];Wt===void 0&&(Wt={type:void 0,texture:void 0},O[Bt]=Wt),(Wt.type!==X||Wt.texture!==Lt)&&(Tt!==Bt&&(o.activeTexture(Bt),Tt=Bt),o.bindTexture(X,Lt||rt[X]),Wt.type=X,Wt.texture=Lt)}function w(){const X=O[Tt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $t(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(X){At.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),At.copy(X))}function ee(X){Ft.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Ft.copy(X))}function jt(X,Lt){let Bt=p.get(Lt);Bt===void 0&&(Bt=new WeakMap,p.set(Lt,Bt));let Wt=Bt.get(X);Wt===void 0&&(Wt=o.getUniformBlockIndex(Lt,X.name),Bt.set(X,Wt))}function zt(X,Lt){const Wt=p.get(Lt).get(X);m.get(Lt)!==Wt&&(o.uniformBlockBinding(Lt,Wt,X.__bindingPointIndex),m.set(Lt,Wt))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Tt=null,O={},g={},y=new WeakMap,x=[],b=null,A=!1,M=null,_=null,z=null,R=null,D=null,N=null,F=null,G=new Se(0,0,0),$=0,U=!1,L=null,V=null,Y=null,mt=null,_t=null,At.set(0,0,o.canvas.width,o.canvas.height),Ft.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:St,disable:Nt,bindFramebuffer:ie,drawBuffers:Jt,useProgram:he,setBlending:we,setMaterial:P,setFlipSided:lt,setCullFace:q,setLineWidth:yt,setPolygonOffset:ot,setScissorTest:Rt,activeTexture:Ut,bindTexture:Xt,unbindTexture:w,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:$t,texImage3D:Ct,updateUBOMapping:jt,uniformBlockBinding:zt,texStorage2D:Ot,texStorage3D:Qt,texSubImage2D:ct,texSubImage3D:pt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Gt,scissor:It,viewport:ee,reset:de}}function bA(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Te,v=new WeakMap;let g;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,E){return x?new OffscreenCanvas(w,E):kc("canvas")}function A(w,E,Q){let ct=1;const pt=Xt(w);if((pt.width>Q||pt.height>Q)&&(ct=Q/Math.max(pt.width,pt.height)),ct<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const dt=Math.floor(ct*pt.width),Gt=Math.floor(ct*pt.height);g===void 0&&(g=b(dt,Gt));const Ot=E?b(dt,Gt):g;return Ot.width=dt,Ot.height=Gt,Ot.getContext("2d").drawImage(w,0,0,dt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+dt+"x"+Gt+")."),Ot}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),w;return w}function M(w){return w.generateMipmaps}function _(w){o.generateMipmap(w)}function z(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(w,E,Q,ct,pt=!1){if(w!==null){if(o[w]!==void 0)return o[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let dt=E;if(E===o.RED&&(Q===o.FLOAT&&(dt=o.R32F),Q===o.HALF_FLOAT&&(dt=o.R16F),Q===o.UNSIGNED_BYTE&&(dt=o.R8)),E===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(dt=o.R8UI),Q===o.UNSIGNED_SHORT&&(dt=o.R16UI),Q===o.UNSIGNED_INT&&(dt=o.R32UI),Q===o.BYTE&&(dt=o.R8I),Q===o.SHORT&&(dt=o.R16I),Q===o.INT&&(dt=o.R32I)),E===o.RG&&(Q===o.FLOAT&&(dt=o.RG32F),Q===o.HALF_FLOAT&&(dt=o.RG16F),Q===o.UNSIGNED_BYTE&&(dt=o.RG8)),E===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(dt=o.RG8UI),Q===o.UNSIGNED_SHORT&&(dt=o.RG16UI),Q===o.UNSIGNED_INT&&(dt=o.RG32UI),Q===o.BYTE&&(dt=o.RG8I),Q===o.SHORT&&(dt=o.RG16I),Q===o.INT&&(dt=o.RG32I)),E===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),Q===o.UNSIGNED_INT&&(dt=o.RGB32UI),Q===o.BYTE&&(dt=o.RGB8I),Q===o.SHORT&&(dt=o.RGB16I),Q===o.INT&&(dt=o.RGB32I)),E===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),Q===o.UNSIGNED_INT&&(dt=o.RGBA32UI),Q===o.BYTE&&(dt=o.RGBA8I),Q===o.SHORT&&(dt=o.RGBA16I),Q===o.INT&&(dt=o.RGBA32I)),E===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),E===o.RGBA){const Gt=pt?Gc:Le.getTransfer(ct);Q===o.FLOAT&&(dt=o.RGBA32F),Q===o.HALF_FLOAT&&(dt=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(dt=Gt===Ge?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(w,E){let Q;return w?E===null||E===yr||E===Wo?Q=o.DEPTH24_STENCIL8:E===Bi?Q=o.DEPTH32F_STENCIL8:E===Xo&&(Q=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===yr||E===Wo?Q=o.DEPTH_COMPONENT24:E===Bi?Q=o.DEPTH_COMPONENT32F:E===Xo&&(Q=o.DEPTH_COMPONENT16),Q}function N(w,E){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==ni&&w.minFilter!==Mi?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function F(w){const E=w.target;E.removeEventListener("dispose",F),$(E),E.isVideoTexture&&v.delete(E)}function G(w){const E=w.target;E.removeEventListener("dispose",G),L(E)}function $(w){const E=r.get(w);if(E.__webglInit===void 0)return;const Q=w.source,ct=y.get(Q);if(ct){const pt=ct[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&U(w),Object.keys(ct).length===0&&y.delete(Q)}r.remove(w)}function U(w){const E=r.get(w);o.deleteTexture(E.__webglTexture);const Q=w.source,ct=y.get(Q);delete ct[E.__cacheKey],d.memory.textures--}function L(w){const E=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let pt=0;pt<E.__webglFramebuffer[ct].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[ct][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)o.deleteFramebuffer(E.__webglFramebuffer[ct]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=w.textures;for(let ct=0,pt=Q.length;ct<pt;ct++){const dt=r.get(Q[ct]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),d.memory.textures--),r.remove(Q[ct])}r.remove(w)}let V=0;function Y(){V=0}function mt(){const w=V;return w>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),V+=1,w}function _t(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function gt(w,E){const Q=r.get(w);if(w.isVideoTexture&&Rt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&Q.__version!==w.version){const ct=w.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(Q,w,E);return}}else w.isExternalTexture&&(Q.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+E)}function B(w,E){const Q=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){rt(Q,w,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+E)}function et(w,E){const Q=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){rt(Q,w,E);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+E)}function Z(w,E){const Q=r.get(w);if(w.version>0&&Q.__version!==w.version){St(Q,w,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+E)}const Tt={[jd]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[Zd]:o.MIRRORED_REPEAT},O={[ni]:o.NEAREST,[Qy]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[Mi]:o.LINEAR,[ad]:o.LINEAR_MIPMAP_NEAREST,[xr]:o.LINEAR_MIPMAP_LINEAR},it={[nS]:o.NEVER,[lS]:o.ALWAYS,[iS]:o.LESS,[z0]:o.LEQUAL,[aS]:o.EQUAL,[oS]:o.GEQUAL,[rS]:o.GREATER,[sS]:o.NOTEQUAL};function bt(w,E){if(E.type===Bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Mi||E.magFilter===ad||E.magFilter===cc||E.magFilter===xr||E.minFilter===Mi||E.minFilter===ad||E.minFilter===cc||E.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,Tt[E.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,Tt[E.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,Tt[E.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,O[E.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,O[E.minFilter]),E.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,it[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ni||E.minFilter!==cc&&E.minFilter!==xr||E.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function At(w,E){let Q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",F));const ct=E.source;let pt=y.get(ct);pt===void 0&&(pt={},y.set(ct,pt));const dt=_t(E);if(dt!==w.__cacheKey){pt[dt]===void 0&&(pt[dt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),pt[dt].usedTimes++;const Gt=pt[w.__cacheKey];Gt!==void 0&&(pt[w.__cacheKey].usedTimes--,Gt.usedTimes===0&&U(E)),w.__cacheKey=dt,w.__webglTexture=pt[dt].texture}return Q}function Ft(w,E,Q){return Math.floor(Math.floor(w/Q)/E)}function qt(w,E,Q,ct){const dt=w.updateRanges;if(dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Q,ct,E.data);else{dt.sort((Ct,It)=>Ct.start-It.start);let Gt=0;for(let Ct=1;Ct<dt.length;Ct++){const It=dt[Gt],ee=dt[Ct],jt=It.start+It.count,zt=Ft(ee.start,E.width,4),de=Ft(It.start,E.width,4);ee.start<=jt+1&&zt===de&&Ft(ee.start+ee.count-1,E.width,4)===zt?It.count=Math.max(It.count,ee.start+ee.count-It.start):(++Gt,dt[Gt]=ee)}dt.length=Gt+1;const Ot=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),$t=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Ct=0,It=dt.length;Ct<It;Ct++){const ee=dt[Ct],jt=Math.floor(ee.start/4),zt=Math.ceil(ee.count/4),de=jt%E.width,X=Math.floor(jt/E.width),Lt=zt,Bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,de),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,de,X,Lt,Bt,Q,ct,E.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ot),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,$t)}}function rt(w,E,Q){let ct=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=o.TEXTURE_3D);const pt=At(w,E),dt=E.source;i.bindTexture(ct,w.__webglTexture,o.TEXTURE0+Q);const Gt=r.get(dt);if(dt.version!==Gt.__version||pt===!0){i.activeTexture(o.TEXTURE0+Q);const Ot=Le.getPrimaries(Le.workingColorSpace),Qt=E.colorSpace===za?null:Le.getPrimaries(E.colorSpace),$t=E.colorSpace===za||Ot===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Ct=A(E.image,!1,l.maxTextureSize);Ct=Ut(E,Ct);const It=u.convert(E.format,E.colorSpace),ee=u.convert(E.type);let jt=R(E.internalFormat,It,ee,E.colorSpace,E.isVideoTexture);bt(ct,E);let zt;const de=E.mipmaps,X=E.isVideoTexture!==!0,Lt=Gt.__version===void 0||pt===!0,Bt=dt.dataReady,Wt=N(E,Ct);if(E.isDepthTexture)jt=D(E.format===Yo,E.type),Lt&&(X?i.texStorage2D(o.TEXTURE_2D,1,jt,Ct.width,Ct.height):i.texImage2D(o.TEXTURE_2D,0,jt,Ct.width,Ct.height,0,It,ee,null));else if(E.isDataTexture)if(de.length>0){X&&Lt&&i.texStorage2D(o.TEXTURE_2D,Wt,jt,de[0].width,de[0].height);for(let wt=0,Et=de.length;wt<Et;wt++)zt=de[wt],X?Bt&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,zt.width,zt.height,It,ee,zt.data):i.texImage2D(o.TEXTURE_2D,wt,jt,zt.width,zt.height,0,It,ee,zt.data);E.generateMipmaps=!1}else X?(Lt&&i.texStorage2D(o.TEXTURE_2D,Wt,jt,Ct.width,Ct.height),Bt&&qt(E,Ct,It,ee)):i.texImage2D(o.TEXTURE_2D,0,jt,Ct.width,Ct.height,0,It,ee,Ct.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Wt,jt,de[0].width,de[0].height,Ct.depth);for(let wt=0,Et=de.length;wt<Et;wt++)if(zt=de[wt],E.format!==Ei)if(It!==null)if(X){if(Bt)if(E.layerUpdates.size>0){const Kt=n0(zt.width,zt.height,E.format,E.type);for(const fe of E.layerUpdates){const Oe=zt.data.subarray(fe*Kt/zt.data.BYTES_PER_ELEMENT,(fe+1)*Kt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,fe,zt.width,zt.height,1,It,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,zt.width,zt.height,Ct.depth,It,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,wt,jt,zt.width,zt.height,Ct.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,zt.width,zt.height,Ct.depth,It,ee,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,wt,jt,zt.width,zt.height,Ct.depth,0,It,ee,zt.data)}else{X&&Lt&&i.texStorage2D(o.TEXTURE_2D,Wt,jt,de[0].width,de[0].height);for(let wt=0,Et=de.length;wt<Et;wt++)zt=de[wt],E.format!==Ei?It!==null?X?Bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,wt,0,0,zt.width,zt.height,It,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,wt,jt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Bt&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,zt.width,zt.height,It,ee,zt.data):i.texImage2D(o.TEXTURE_2D,wt,jt,zt.width,zt.height,0,It,ee,zt.data)}else if(E.isDataArrayTexture)if(X){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Wt,jt,Ct.width,Ct.height,Ct.depth),Bt)if(E.layerUpdates.size>0){const wt=n0(Ct.width,Ct.height,E.format,E.type);for(const Et of E.layerUpdates){const Kt=Ct.data.subarray(Et*wt/Ct.data.BYTES_PER_ELEMENT,(Et+1)*wt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Et,Ct.width,Ct.height,1,It,ee,Kt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,It,ee,Ct.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Ct.width,Ct.height,Ct.depth,0,It,ee,Ct.data);else if(E.isData3DTexture)X?(Lt&&i.texStorage3D(o.TEXTURE_3D,Wt,jt,Ct.width,Ct.height,Ct.depth),Bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,It,ee,Ct.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Ct.width,Ct.height,Ct.depth,0,It,ee,Ct.data);else if(E.isFramebufferTexture){if(Lt)if(X)i.texStorage2D(o.TEXTURE_2D,Wt,jt,Ct.width,Ct.height);else{let wt=Ct.width,Et=Ct.height;for(let Kt=0;Kt<Wt;Kt++)i.texImage2D(o.TEXTURE_2D,Kt,jt,wt,Et,0,It,ee,null),wt>>=1,Et>>=1}}else if(de.length>0){if(X&&Lt){const wt=Xt(de[0]);i.texStorage2D(o.TEXTURE_2D,Wt,jt,wt.width,wt.height)}for(let wt=0,Et=de.length;wt<Et;wt++)zt=de[wt],X?Bt&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,It,ee,zt):i.texImage2D(o.TEXTURE_2D,wt,jt,It,ee,zt);E.generateMipmaps=!1}else if(X){if(Lt){const wt=Xt(Ct);i.texStorage2D(o.TEXTURE_2D,Wt,jt,wt.width,wt.height)}Bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,ee,Ct)}else i.texImage2D(o.TEXTURE_2D,0,jt,It,ee,Ct);M(E)&&_(ct),Gt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function St(w,E,Q){if(E.image.length!==6)return;const ct=At(w,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+Q);const dt=r.get(pt);if(pt.version!==dt.__version||ct===!0){i.activeTexture(o.TEXTURE0+Q);const Gt=Le.getPrimaries(Le.workingColorSpace),Ot=E.colorSpace===za?null:Le.getPrimaries(E.colorSpace),Qt=E.colorSpace===za||Gt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const $t=E.isCompressedTexture||E.image[0].isCompressedTexture,Ct=E.image[0]&&E.image[0].isDataTexture,It=[];for(let Et=0;Et<6;Et++)!$t&&!Ct?It[Et]=A(E.image[Et],!0,l.maxCubemapSize):It[Et]=Ct?E.image[Et].image:E.image[Et],It[Et]=Ut(E,It[Et]);const ee=It[0],jt=u.convert(E.format,E.colorSpace),zt=u.convert(E.type),de=R(E.internalFormat,jt,zt,E.colorSpace),X=E.isVideoTexture!==!0,Lt=dt.__version===void 0||ct===!0,Bt=pt.dataReady;let Wt=N(E,ee);bt(o.TEXTURE_CUBE_MAP,E);let wt;if($t){X&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Wt,de,ee.width,ee.height);for(let Et=0;Et<6;Et++){wt=It[Et].mipmaps;for(let Kt=0;Kt<wt.length;Kt++){const fe=wt[Kt];E.format!==Ei?jt!==null?X?Bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,0,0,fe.width,fe.height,jt,fe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,de,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,0,0,fe.width,fe.height,jt,zt,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,de,fe.width,fe.height,0,jt,zt,fe.data)}}}else{if(wt=E.mipmaps,X&&Lt){wt.length>0&&Wt++;const Et=Xt(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Wt,de,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Ct){X?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,It[Et].width,It[Et].height,jt,zt,It[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,de,It[Et].width,It[Et].height,0,jt,zt,It[Et].data);for(let Kt=0;Kt<wt.length;Kt++){const Oe=wt[Kt].image[Et].image;X?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,0,0,Oe.width,Oe.height,jt,zt,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,de,Oe.width,Oe.height,0,jt,zt,Oe.data)}}else{X?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,jt,zt,It[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,de,jt,zt,It[Et]);for(let Kt=0;Kt<wt.length;Kt++){const fe=wt[Kt];X?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,0,0,jt,zt,fe.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,de,jt,zt,fe.image[Et])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),dt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Nt(w,E,Q,ct,pt,dt){const Gt=u.convert(Q.format,Q.colorSpace),Ot=u.convert(Q.type),Qt=R(Q.internalFormat,Gt,Ot,Q.colorSpace),$t=r.get(E),Ct=r.get(Q);if(Ct.__renderTarget=E,!$t.__hasExternalTextures){const It=Math.max(1,E.width>>dt),ee=Math.max(1,E.height>>dt);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,dt,Qt,It,ee,E.depth,0,Gt,Ot,null):i.texImage2D(pt,dt,Qt,It,ee,0,Gt,Ot,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),ot(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,pt,Ct.__webglTexture,0,yt(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,pt,Ct.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ie(w,E,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,w),E.depthBuffer){const ct=E.depthTexture,pt=ct&&ct.isDepthTexture?ct.type:null,dt=D(E.stencilBuffer,pt),Gt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=yt(E);ot(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot,dt,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,dt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,dt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Gt,o.RENDERBUFFER,w)}else{const ct=E.textures;for(let pt=0;pt<ct.length;pt++){const dt=ct[pt],Gt=u.convert(dt.format,dt.colorSpace),Ot=u.convert(dt.type),Qt=R(dt.internalFormat,Gt,Ot,dt.colorSpace),$t=yt(E);Q&&ot(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,Qt,E.width,E.height):ot(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$t,Qt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Jt(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),gt(E.depthTexture,0);const pt=ct.__webglTexture,dt=yt(E);if(E.depthTexture.format===qo)ot(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0);else if(E.depthTexture.format===Yo)ot(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function he(w){const E=r.get(w),Q=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const ct=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",pt)};ct.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ct}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const ct=w.texture.mipmaps;ct&&ct.length>0?Jt(E.__webglFramebuffer[0],w):Jt(E.__webglFramebuffer,w)}else if(Q){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=o.createRenderbuffer(),ie(E.__webglDepthbuffer[ct],w,!1);else{const pt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,dt)}}else{const ct=w.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ie(E.__webglDepthbuffer,w,!1);else{const pt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(w,E,Q){const ct=r.get(w);E!==void 0&&Nt(ct.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&he(w)}function H(w){const E=w.texture,Q=r.get(w),ct=r.get(E);w.addEventListener("dispose",G);const pt=w.textures,dt=w.isWebGLCubeRenderTarget===!0,Gt=pt.length>1;if(Gt||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=E.version,d.memory.textures++),dt){Q.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Ot]=[];for(let Qt=0;Qt<E.mipmaps.length;Qt++)Q.__webglFramebuffer[Ot][Qt]=o.createFramebuffer()}else Q.__webglFramebuffer[Ot]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ot=0;Ot<E.mipmaps.length;Ot++)Q.__webglFramebuffer[Ot]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Gt)for(let Ot=0,Qt=pt.length;Ot<Qt;Ot++){const $t=r.get(pt[Ot]);$t.__webglTexture===void 0&&($t.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&ot(w)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ot=0;Ot<pt.length;Ot++){const Qt=pt[Ot];Q.__webglColorRenderbuffer[Ot]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ot]);const $t=u.convert(Qt.format,Qt.colorSpace),Ct=u.convert(Qt.type),It=R(Qt.internalFormat,$t,Ct,Qt.colorSpace,w.isXRRenderTarget===!0),ee=yt(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,It,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ot])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),ie(Q.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),bt(o.TEXTURE_CUBE_MAP,E);for(let Ot=0;Ot<6;Ot++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Nt(Q.__webglFramebuffer[Ot][Qt],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,Qt);else Nt(Q.__webglFramebuffer[Ot],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let Ot=0,Qt=pt.length;Ot<Qt;Ot++){const $t=pt[Ot],Ct=r.get($t);let It=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(It=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,Ct.__webglTexture),bt(It,$t),Nt(Q.__webglFramebuffer,w,$t,o.COLOR_ATTACHMENT0+Ot,It,0),M($t)&&_(It)}i.unbindTexture()}else{let Ot=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ot=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ot,ct.__webglTexture),bt(Ot,E),E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Nt(Q.__webglFramebuffer[Qt],w,E,o.COLOR_ATTACHMENT0,Ot,Qt);else Nt(Q.__webglFramebuffer,w,E,o.COLOR_ATTACHMENT0,Ot,0);M(E)&&_(Ot),i.unbindTexture()}w.depthBuffer&&he(w)}function we(w){const E=w.textures;for(let Q=0,ct=E.length;Q<ct;Q++){const pt=E[Q];if(M(pt)){const dt=z(w),Gt=r.get(pt).__webglTexture;i.bindTexture(dt,Gt),_(dt),i.unbindTexture()}}}const P=[],lt=[];function q(w){if(w.samples>0){if(ot(w)===!1){const E=w.textures,Q=w.width,ct=w.height;let pt=o.COLOR_BUFFER_BIT;const dt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Gt=r.get(w),Ot=E.length>1;if(Ot)for(let $t=0;$t<E.length;$t++)i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer);const Qt=w.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let $t=0;$t<E.length;$t++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),Ot){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Gt.__webglColorRenderbuffer[$t]);const Ct=r.get(E[$t]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ct,0)}o.blitFramebuffer(0,0,Q,ct,0,0,Q,ct,pt,o.NEAREST),m===!0&&(P.length=0,lt.length=0,P.push(o.COLOR_ATTACHMENT0+$t),w.depthBuffer&&w.resolveDepthBuffer===!1&&(P.push(dt),lt.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,lt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,P))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ot)for(let $t=0;$t<E.length;$t++){i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,Gt.__webglColorRenderbuffer[$t]);const Ct=r.get(E[$t]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,Ct,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const E=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function yt(w){return Math.min(l.maxSamples,w.samples)}function ot(w){const E=r.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(w){const E=d.render.frame;v.get(w)!==E&&(v.set(w,E),w.update())}function Ut(w,E){const Q=w.colorSpace,ct=w.format,pt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||Q!==Ds&&Q!==za&&(Le.getTransfer(Q)===Ge?(ct!==Ei||pt!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}function Xt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=mt,this.resetTextureUnits=Y,this.setTexture2D=gt,this.setTexture2DArray=B,this.setTexture3D=et,this.setTextureCube=Z,this.rebindTextures=Qe,this.setupRenderTarget=H,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=ot}function TA(o,t){function i(r,l=za){let u;const d=Le.getTransfer(l);if(r===sa)return o.UNSIGNED_BYTE;if(r===Uh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Lh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===N0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===O0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===U0)return o.BYTE;if(r===L0)return o.SHORT;if(r===Xo)return o.UNSIGNED_SHORT;if(r===Dh)return o.INT;if(r===yr)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===Ko)return o.HALF_FLOAT;if(r===P0)return o.ALPHA;if(r===B0)return o.RGB;if(r===Ei)return o.RGBA;if(r===qo)return o.DEPTH_COMPONENT;if(r===Yo)return o.DEPTH_STENCIL;if(r===Nh)return o.RED;if(r===Oh)return o.RED_INTEGER;if(r===I0)return o.RG;if(r===Ph)return o.RG_INTEGER;if(r===Bh)return o.RGBA_INTEGER;if(r===Bc||r===Ic||r===zc||r===Fc)if(d===Ge)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Bc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Bc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===th||r===eh||r===nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===th||r===eh)return d===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===nh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ih)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_h||r===vh||r===xh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===_h)return d===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yh||r===Sh||r===Mh||r===Eh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===yh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Sh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const AA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Q0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ka({vertexShader:AA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zn(new $o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wA extends Ls{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,y=null,x=null,b=null;const A=typeof XRWebGLBinding<"u",M=new CA,_={},z=i.getContextAttributes();let R=null,D=null;const N=[],F=[],G=new Te;let $=null;const U=new Si;U.viewport=new rn;const L=new Si;L.viewport=new rn;const V=[U,L],Y=new ZS;let mt=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let St=N[rt];return St===void 0&&(St=new Rd,N[rt]=St),St.getTargetRaySpace()},this.getControllerGrip=function(rt){let St=N[rt];return St===void 0&&(St=new Rd,N[rt]=St),St.getGripSpace()},this.getHand=function(rt){let St=N[rt];return St===void 0&&(St=new Rd,N[rt]=St),St.getHandSpace()};function gt(rt){const St=F.indexOf(rt.inputSource);if(St===-1)return;const Nt=N[St];Nt!==void 0&&(Nt.update(rt.inputSource,rt.frame,p||d),Nt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function B(){l.removeEventListener("select",gt),l.removeEventListener("selectstart",gt),l.removeEventListener("selectend",gt),l.removeEventListener("squeeze",gt),l.removeEventListener("squeezestart",gt),l.removeEventListener("squeezeend",gt),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",et);for(let rt=0;rt<N.length;rt++){const St=F[rt];St!==null&&(F[rt]=null,N[rt].disconnect(St))}mt=null,_t=null,M.reset();for(const rt in _)delete _[rt];t.setRenderTarget(R),x=null,y=null,g=null,l=null,D=null,qt.stop(),r.isPresenting=!1,t.setPixelRatio($),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){u=rt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){h=rt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(rt){p=rt},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(rt){if(l=rt,l!==null){if(R=t.getRenderTarget(),l.addEventListener("select",gt),l.addEventListener("selectstart",gt),l.addEventListener("selectend",gt),l.addEventListener("squeeze",gt),l.addEventListener("squeezestart",gt),l.addEventListener("squeezeend",gt),l.addEventListener("end",B),l.addEventListener("inputsourceschange",et),z.xrCompatible!==!0&&await i.makeXRCompatible(),$=t.getPixelRatio(),t.getSize(G),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,ie=null,Jt=null;z.depth&&(Jt=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Nt=z.stencil?Yo:qo,ie=z.stencil?Wo:yr);const he={colorFormat:i.RGBA8,depthFormat:Jt,scaleFactor:u};g=this.getBinding(),y=g.createProjectionLayer(he),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),D=new Sr(y.textureWidth,y.textureHeight,{format:Ei,type:sa,depthTexture:new K0(y.textureWidth,y.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Nt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(l,i,Nt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new Sr(x.framebufferWidth,x.framebufferHeight,{format:Ei,type:sa,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),qt.setContext(l),qt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function et(rt){for(let St=0;St<rt.removed.length;St++){const Nt=rt.removed[St],ie=F.indexOf(Nt);ie>=0&&(F[ie]=null,N[ie].disconnect(Nt))}for(let St=0;St<rt.added.length;St++){const Nt=rt.added[St];let ie=F.indexOf(Nt);if(ie===-1){for(let he=0;he<N.length;he++)if(he>=F.length){F.push(Nt),ie=he;break}else if(F[he]===null){F[he]=Nt,ie=he;break}if(ie===-1)break}const Jt=N[ie];Jt&&Jt.connect(Nt)}}const Z=new nt,Tt=new nt;function O(rt,St,Nt){Z.setFromMatrixPosition(St.matrixWorld),Tt.setFromMatrixPosition(Nt.matrixWorld);const ie=Z.distanceTo(Tt),Jt=St.projectionMatrix.elements,he=Nt.projectionMatrix.elements,Qe=Jt[14]/(Jt[10]-1),H=Jt[14]/(Jt[10]+1),we=(Jt[9]+1)/Jt[5],P=(Jt[9]-1)/Jt[5],lt=(Jt[8]-1)/Jt[0],q=(he[8]+1)/he[0],yt=Qe*lt,ot=Qe*q,Rt=ie/(-lt+q),Ut=Rt*-lt;if(St.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Ut),rt.translateZ(Rt),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Jt[10]===-1)rt.projectionMatrix.copy(St.projectionMatrix),rt.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const Xt=Qe+Rt,w=H+Rt,E=yt-Ut,Q=ot+(ie-Ut),ct=we*H/w*Xt,pt=P*H/w*Xt;rt.projectionMatrix.makePerspective(E,Q,ct,pt,Xt,w),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function it(rt,St){St===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(St.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(l===null)return;let St=rt.near,Nt=rt.far;M.texture!==null&&(M.depthNear>0&&(St=M.depthNear),M.depthFar>0&&(Nt=M.depthFar)),Y.near=L.near=U.near=St,Y.far=L.far=U.far=Nt,(mt!==Y.near||_t!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),mt=Y.near,_t=Y.far),Y.layers.mask=rt.layers.mask|6,U.layers.mask=Y.layers.mask&3,L.layers.mask=Y.layers.mask&5;const ie=rt.parent,Jt=Y.cameras;it(Y,ie);for(let he=0;he<Jt.length;he++)it(Jt[he],ie);Jt.length===2?O(Y,U,L):Y.projectionMatrix.copy(U.projectionMatrix),bt(rt,Y,ie)};function bt(rt,St,Nt){Nt===null?rt.matrix.copy(St.matrixWorld):(rt.matrix.copy(Nt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(St.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(St.projectionMatrix),rt.projectionMatrixInverse.copy(St.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Th*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(y===null&&x===null))return m},this.setFoveation=function(rt){m=rt,y!==null&&(y.fixedFoveation=rt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=rt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(rt){return _[rt]};let At=null;function Ft(rt,St){if(v=St.getViewerPose(p||d),b=St,v!==null){const Nt=v.views;x!==null&&(t.setRenderTargetFramebuffer(D,x.framebuffer),t.setRenderTarget(D));let ie=!1;Nt.length!==Y.cameras.length&&(Y.cameras.length=0,ie=!0);for(let H=0;H<Nt.length;H++){const we=Nt[H];let P=null;if(x!==null)P=x.getViewport(we);else{const q=g.getViewSubImage(y,we);P=q.viewport,H===0&&(t.setRenderTargetTextures(D,q.colorTexture,q.depthStencilTexture),t.setRenderTarget(D))}let lt=V[H];lt===void 0&&(lt=new Si,lt.layers.enable(H),lt.viewport=new rn,V[H]=lt),lt.matrix.fromArray(we.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(we.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(P.x,P.y,P.width,P.height),H===0&&(Y.matrix.copy(lt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),ie===!0&&Y.cameras.push(lt)}const Jt=l.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const H=g.getDepthInformation(Nt[0]);H&&H.isValid&&H.texture&&M.init(H,l.renderState)}if(Jt&&Jt.includes("camera-access")&&A){t.state.unbindTexture(),g=r.getBinding();for(let H=0;H<Nt.length;H++){const we=Nt[H].camera;if(we){let P=_[we];P||(P=new Q0,_[we]=P);const lt=g.getCameraImage(we);P.sourceTexture=lt}}}}for(let Nt=0;Nt<N.length;Nt++){const ie=F[Nt],Jt=N[Nt];ie!==null&&Jt!==void 0&&Jt.update(ie,St,p||d)}At&&At(rt,St),St.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:St}),b=null}const qt=new $0;qt.setAnimationLoop(Ft),this.setAnimationLoop=function(rt){At=rt},this.dispose=function(){}}}const dr=new oa,DA=new Ye;function UA(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,X0(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,z,R,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),g(M,_)):_.isMeshPhongMaterial?(u(M,_),v(M,_)):_.isMeshStandardMaterial?(u(M,_),y(M,_),_.isMeshPhysicalMaterial&&x(M,_,D)):_.isMeshMatcapMaterial?(u(M,_),b(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),A(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,z,R):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Xn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Xn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const z=t.get(_),R=z.envMap,D=z.envMapRotation;R&&(M.envMap.value=R,dr.copy(D),dr.x*=-1,dr.y*=-1,dr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),M.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(dr)),M.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,z,R){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*z,M.scale.value=R*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function x(M,_,z){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function A(M,_){const z=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function LA(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,R){const D=R.program;r.uniformBlockBinding(z,D)}function p(z,R){let D=l[z.id];D===void 0&&(b(z),D=v(z),l[z.id]=D,z.addEventListener("dispose",M));const N=R.program;r.updateUBOMapping(z,N);const F=t.render.frame;u[z.id]!==F&&(y(z),u[z.id]=F)}function v(z){const R=g();z.__bindingPointIndex=R;const D=o.createBuffer(),N=z.__size,F=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,N,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,D),D}function g(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const R=l[z.id],D=z.uniforms,N=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let F=0,G=D.length;F<G;F++){const $=Array.isArray(D[F])?D[F]:[D[F]];for(let U=0,L=$.length;U<L;U++){const V=$[U];if(x(V,F,U,N)===!0){const Y=V.__offset,mt=Array.isArray(V.value)?V.value:[V.value];let _t=0;for(let gt=0;gt<mt.length;gt++){const B=mt[gt],et=A(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,Y+_t,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,_t),_t+=et.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(z,R,D,N){const F=z.value,G=R+"_"+D;if(N[G]===void 0)return typeof F=="number"||typeof F=="boolean"?N[G]=F:N[G]=F.clone(),!0;{const $=N[G];if(typeof F=="number"||typeof F=="boolean"){if($!==F)return N[G]=F,!0}else if($.equals(F)===!1)return $.copy(F),!0}return!1}function b(z){const R=z.uniforms;let D=0;const N=16;for(let G=0,$=R.length;G<$;G++){const U=Array.isArray(R[G])?R[G]:[R[G]];for(let L=0,V=U.length;L<V;L++){const Y=U[L],mt=Array.isArray(Y.value)?Y.value:[Y.value];for(let _t=0,gt=mt.length;_t<gt;_t++){const B=mt[_t],et=A(B),Z=D%N,Tt=Z%et.boundary,O=Z+Tt;D+=Tt,O!==0&&N-O<et.storage&&(D+=N-O),Y.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=et.storage}}}const F=D%N;return F>0&&(D+=N-F),z.__size=D,z.__cache={},this}function A(z){const R={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(R.boundary=4,R.storage=4):z.isVector2?(R.boundary=8,R.storage=8):z.isVector3||z.isColor?(R.boundary=16,R.storage=12):z.isVector4?(R.boundary=16,R.storage=16):z.isMatrix3?(R.boundary=48,R.storage=48):z.isMatrix4?(R.boundary=64,R.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),R}function M(z){const R=z.target;R.removeEventListener("dispose",M);const D=d.indexOf(R.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[R.id]),delete l[R.id],delete u[R.id]}function _(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class NA{constructor(t={}){const{canvas:i=uS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const b=new Uint32Array(4),A=new Int32Array(4);let M=null,_=null;const z=[],R=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let N=!1;this._outputColorSpace=fi;let F=0,G=0,$=null,U=-1,L=null;const V=new rn,Y=new rn;let mt=null;const _t=new Se(0);let gt=0,B=i.width,et=i.height,Z=1,Tt=null,O=null;const it=new rn(0,0,B,et),bt=new rn(0,0,B,et);let At=!1;const Ft=new Z0;let qt=!1,rt=!1;const St=new Ye,Nt=new nt,ie=new rn,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Qe(){return $===null?Z:1}let H=r;function we(C,j){return i.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",Wt,!1),i.addEventListener("webglcontextcreationerror",wt,!1),H===null){const j="webgl2";if(H=we(j,C),H===null)throw we(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let P,lt,q,yt,ot,Rt,Ut,Xt,w,E,Q,ct,pt,dt,Gt,Ot,Qt,$t,Ct,It,ee,jt,zt,de;function X(){P=new kb(H),P.init(),jt=new TA(H,P),lt=new Bb(H,P,t,jt),q=new EA(H,P),lt.reversedDepthBuffer&&y&&q.buffers.depth.setReversed(!0),yt=new qb(H),ot=new uA,Rt=new bA(H,P,q,ot,lt,jt,yt),Ut=new zb(D),Xt=new Vb(D),w=new JS(H),zt=new Ob(H,w),E=new Xb(H,w,yt,zt),Q=new jb(H,E,w,yt),Ct=new Yb(H,lt,Rt),Ot=new Ib(ot),ct=new cA(D,Ut,Xt,P,lt,zt,Ot),pt=new UA(D,ot),dt=new dA,Gt=new vA(P),$t=new Nb(D,Ut,Xt,q,Q,x,m),Qt=new SA(D,Q,lt),de=new LA(H,yt,lt,q),It=new Pb(H,P,yt),ee=new Wb(H,P,yt),yt.programs=ct.programs,D.capabilities=lt,D.extensions=P,D.properties=ot,D.renderLists=dt,D.shadowMap=Qt,D.state=q,D.info=yt}X();const Lt=new wA(D,H);this.xr=Lt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=P.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=P.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(B,et,!1))},this.getSize=function(C){return C.set(B,et)},this.setSize=function(C,j,ft=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,et=j,i.width=Math.floor(C*Z),i.height=Math.floor(j*Z),ft===!0&&(i.style.width=C+"px",i.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(B*Z,et*Z).floor()},this.setDrawingBufferSize=function(C,j,ft){B=C,et=j,Z=ft,i.width=Math.floor(C*ft),i.height=Math.floor(j*ft),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,j,ft,ht){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,j,ft,ht),q.viewport(V.copy(it).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(bt)},this.setScissor=function(C,j,ft,ht){C.isVector4?bt.set(C.x,C.y,C.z,C.w):bt.set(C,j,ft,ht),q.scissor(Y.copy(bt).multiplyScalar(Z).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(C){q.setScissorTest(At=C)},this.setOpaqueSort=function(C){Tt=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,ft=!0){let ht=0;if(C){let J=!1;if($!==null){const Dt=$.texture.format;J=Dt===Bh||Dt===Ph||Dt===Oh}if(J){const Dt=$.texture.type,Ht=Dt===sa||Dt===yr||Dt===Xo||Dt===Wo||Dt===Uh||Dt===Lh,Yt=$t.getClearColor(),Vt=$t.getClearAlpha(),se=Yt.r,le=Yt.g,te=Yt.b;Ht?(b[0]=se,b[1]=le,b[2]=te,b[3]=Vt,H.clearBufferuiv(H.COLOR,0,b)):(A[0]=se,A[1]=le,A[2]=te,A[3]=Vt,H.clearBufferiv(H.COLOR,0,A))}else ht|=H.COLOR_BUFFER_BIT}j&&(ht|=H.DEPTH_BUFFER_BIT),ft&&(ht|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",Wt,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),$t.dispose(),dt.dispose(),Gt.dispose(),ot.dispose(),Ut.dispose(),Xt.dispose(),Q.dispose(),zt.dispose(),de.dispose(),ct.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",un),Lt.removeEventListener("sessionend",fn),Je.stop()};function Bt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Wt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=yt.autoReset,j=Qt.enabled,ft=Qt.autoUpdate,ht=Qt.needsUpdate,J=Qt.type;X(),yt.autoReset=C,Qt.enabled=j,Qt.autoUpdate=ft,Qt.needsUpdate=ht,Qt.type=J}function wt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Et(C){const j=C.target;j.removeEventListener("dispose",Et),Kt(j)}function Kt(C){fe(C),ot.remove(C)}function fe(C){const j=ot.get(C).programs;j!==void 0&&(j.forEach(function(ft){ct.releaseProgram(ft)}),C.isShaderMaterial&&ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ft,ht,J,Dt){j===null&&(j=Jt);const Ht=J.isMesh&&J.matrixWorld.determinant()<0,Yt=la(C,j,ft,ht,J);q.setMaterial(ht,Ht);let Vt=ft.index,se=1;if(ht.wireframe===!0){if(Vt=E.getWireframeAttribute(ft),Vt===void 0)return;se=2}const le=ft.drawRange,te=ft.attributes.position;let ge=le.start*se,De=(le.start+le.count)*se;Dt!==null&&(ge=Math.max(ge,Dt.start*se),De=Math.min(De,(Dt.start+Dt.count)*se)),Vt!==null?(ge=Math.max(ge,0),De=Math.min(De,Vt.count)):te!=null&&(ge=Math.max(ge,0),De=Math.min(De,te.count));const je=De-ge;if(je<0||je===1/0)return;zt.setup(J,ht,Yt,ft,Vt);let Ie,_e=It;if(Vt!==null&&(Ie=w.get(Vt),_e=ee,_e.setIndex(Ie)),J.isMesh)ht.wireframe===!0?(q.setLineWidth(ht.wireframeLinewidth*Qe()),_e.setMode(H.LINES)):_e.setMode(H.TRIANGLES);else if(J.isLine){let re=ht.linewidth;re===void 0&&(re=1),q.setLineWidth(re*Qe()),J.isLineSegments?_e.setMode(H.LINES):J.isLineLoop?_e.setMode(H.LINE_LOOP):_e.setMode(H.LINE_STRIP)}else J.isPoints?_e.setMode(H.POINTS):J.isSprite&&_e.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)jo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(P.get("WEBGL_multi_draw"))_e.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const re=J._multiDrawStarts,qe=J._multiDrawCounts,Me=J._multiDrawCount,Tn=Vt?w.get(Vt).bytesPerElement:1,pi=ot.get(ht).currentProgram.getUniforms();for(let Nn=0;Nn<Me;Nn++)pi.setValue(H,"_gl_DrawID",Nn),_e.render(re[Nn]/Tn,qe[Nn])}else if(J.isInstancedMesh)_e.renderInstances(ge,je,J.count);else if(ft.isInstancedBufferGeometry){const re=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,qe=Math.min(ft.instanceCount,re);_e.renderInstances(ge,je,qe)}else _e.render(ge,je)};function Oe(C,j,ft){C.transparent===!0&&C.side===Oi&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,Ai(C,j,ft),C.side=Va,C.needsUpdate=!0,Ai(C,j,ft),C.side=Oi):Ai(C,j,ft)}this.compile=function(C,j,ft=null){ft===null&&(ft=C),_=Gt.get(ft),_.init(j),R.push(_),ft.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),C!==ft&&C.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights();const ht=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Dt=J.material;if(Dt)if(Array.isArray(Dt))for(let Ht=0;Ht<Dt.length;Ht++){const Yt=Dt[Ht];Oe(Yt,ft,J),ht.add(Yt)}else Oe(Dt,ft,J),ht.add(Dt)}),_=R.pop(),ht},this.compileAsync=function(C,j,ft=null){const ht=this.compile(C,j,ft);return new Promise(J=>{function Dt(){if(ht.forEach(function(Ht){ot.get(Ht).currentProgram.isReady()&&ht.delete(Ht)}),ht.size===0){J(C);return}setTimeout(Dt,10)}P.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ce=null;function hi(C){Ce&&Ce(C)}function un(){Je.stop()}function fn(){Je.start()}const Je=new $0;Je.setAnimationLoop(hi),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(C){Ce=C,Lt.setAnimationLoop(C),C===null?Je.stop():Je.start()},Lt.addEventListener("sessionstart",un),Lt.addEventListener("sessionend",fn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(j),j=Lt.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,j,$),_=Gt.get(C,R.length),_.init(j),R.push(_),St.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ft.setFromProjectionMatrix(St,Ii,j.reversedDepth),rt=this.localClippingEnabled,qt=Ot.init(this.clippingPlanes,rt),M=dt.get(C,z.length),M.init(),z.push(M),Lt.enabled===!0&&Lt.isPresenting===!0){const Dt=D.xr.getDepthSensingMesh();Dt!==null&&Ti(Dt,j,-1/0,D.sortObjects)}Ti(C,j,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(Tt,O),he=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,he&&$t.addToRenderList(M,C),this.info.render.frame++,qt===!0&&Ot.beginShadows();const ft=_.state.shadowsArray;Qt.render(ft,C,j),qt===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=M.opaque,J=M.transmissive;if(_.setupLights(),j.isArrayCamera){const Dt=j.cameras;if(J.length>0)for(let Ht=0,Yt=Dt.length;Ht<Yt;Ht++){const Vt=Dt[Ht];tl(ht,J,C,Vt)}he&&$t.render(C);for(let Ht=0,Yt=Dt.length;Ht<Yt;Ht++){const Vt=Dt[Ht];Er(M,C,Vt,Vt.viewport)}}else J.length>0&&tl(ht,J,C,j),he&&$t.render(C),Er(M,C,j);$!==null&&G===0&&(Rt.updateMultisampleRenderTarget($),Rt.updateRenderTargetMipmap($)),C.isScene===!0&&C.onAfterRender(D,C,j),zt.resetDefaultState(),U=-1,L=null,R.pop(),R.length>0?(_=R[R.length-1],qt===!0&&Ot.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function Ti(C,j,ft,ht){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ft=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ft.intersectsSprite(C)){ht&&ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(St);const Ht=Q.update(C),Yt=C.material;Yt.visible&&M.push(C,Ht,Yt,ft,ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ft.intersectsObject(C))){const Ht=Q.update(C),Yt=C.material;if(ht&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ie.copy(C.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),ie.copy(Ht.boundingSphere.center)),ie.applyMatrix4(C.matrixWorld).applyMatrix4(St)),Array.isArray(Yt)){const Vt=Ht.groups;for(let se=0,le=Vt.length;se<le;se++){const te=Vt[se],ge=Yt[te.materialIndex];ge&&ge.visible&&M.push(C,Ht,ge,ft,ie.z,te)}}else Yt.visible&&M.push(C,Ht,Yt,ft,ie.z,null)}}const Dt=C.children;for(let Ht=0,Yt=Dt.length;Ht<Yt;Ht++)Ti(Dt[Ht],j,ft,ht)}function Er(C,j,ft,ht){const J=C.opaque,Dt=C.transmissive,Ht=C.transparent;_.setupLightsView(ft),qt===!0&&Ot.setGlobalState(D.clippingPlanes,ft),ht&&q.viewport(V.copy(ht)),J.length>0&&br(J,j,ft),Dt.length>0&&br(Dt,j,ft),Ht.length>0&&br(Ht,j,ft),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function tl(C,j,ft,ht){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ht.id]===void 0&&(_.state.transmissionRenderTarget[ht.id]=new Sr(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")||P.has("EXT_color_buffer_float")?Ko:sa,minFilter:xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Dt=_.state.transmissionRenderTarget[ht.id],Ht=ht.viewport||V;Dt.setSize(Ht.z*D.transmissionResolutionScale,Ht.w*D.transmissionResolutionScale);const Yt=D.getRenderTarget(),Vt=D.getActiveCubeFace(),se=D.getActiveMipmapLevel();D.setRenderTarget(Dt),D.getClearColor(_t),gt=D.getClearAlpha(),gt<1&&D.setClearColor(16777215,.5),D.clear(),he&&$t.render(ft);const le=D.toneMapping;D.toneMapping=Ha;const te=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),_.setupLightsView(ht),qt===!0&&Ot.setGlobalState(D.clippingPlanes,ht),br(C,ft,ht),Rt.updateMultisampleRenderTarget(Dt),Rt.updateRenderTargetMipmap(Dt),P.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let De=0,je=j.length;De<je;De++){const Ie=j[De],_e=Ie.object,re=Ie.geometry,qe=Ie.material,Me=Ie.group;if(qe.side===Oi&&_e.layers.test(ht.layers)){const Tn=qe.side;qe.side=Xn,qe.needsUpdate=!0,Bs(_e,ft,ht,re,qe,Me),qe.side=Tn,qe.needsUpdate=!0,ge=!0}}ge===!0&&(Rt.updateMultisampleRenderTarget(Dt),Rt.updateRenderTargetMipmap(Dt))}D.setRenderTarget(Yt,Vt,se),D.setClearColor(_t,gt),te!==void 0&&(ht.viewport=te),D.toneMapping=le}function br(C,j,ft){const ht=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Dt=C.length;J<Dt;J++){const Ht=C[J],Yt=Ht.object,Vt=Ht.geometry,se=Ht.group;let le=Ht.material;le.allowOverride===!0&&ht!==null&&(le=ht),Yt.layers.test(ft.layers)&&Bs(Yt,j,ft,Vt,le,se)}}function Bs(C,j,ft,ht,J,Dt){C.onBeforeRender(D,j,ft,ht,J,Dt),C.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(D,j,ft,ht,C,Dt),J.transparent===!0&&J.side===Oi&&J.forceSinglePass===!1?(J.side=Xn,J.needsUpdate=!0,D.renderBufferDirect(ft,j,ht,J,C,Dt),J.side=Va,J.needsUpdate=!0,D.renderBufferDirect(ft,j,ht,J,C,Dt),J.side=Oi):D.renderBufferDirect(ft,j,ht,J,C,Dt),C.onAfterRender(D,j,ft,ht,J,Dt)}function Ai(C,j,ft){j.isScene!==!0&&(j=Jt);const ht=ot.get(C),J=_.state.lights,Dt=_.state.shadowsArray,Ht=J.state.version,Yt=ct.getParameters(C,J.state,Dt,j,ft),Vt=ct.getProgramCacheKey(Yt);let se=ht.programs;ht.environment=C.isMeshStandardMaterial?j.environment:null,ht.fog=j.fog,ht.envMap=(C.isMeshStandardMaterial?Xt:Ut).get(C.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,se===void 0&&(C.addEventListener("dispose",Et),se=new Map,ht.programs=se);let le=se.get(Vt);if(le!==void 0){if(ht.currentProgram===le&&ht.lightsStateVersion===Ht)return zi(C,Yt),le}else Yt.uniforms=ct.getUniforms(C),C.onBeforeCompile(Yt,D),le=ct.acquireProgram(Yt,Vt),se.set(Vt,le),ht.uniforms=Yt.uniforms;const te=ht.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(te.clippingPlanes=Ot.uniform),zi(C,Yt),ht.needsLights=ca(C),ht.lightsStateVersion=Ht,ht.needsLights&&(te.ambientLightColor.value=J.state.ambient,te.lightProbe.value=J.state.probe,te.directionalLights.value=J.state.directional,te.directionalLightShadows.value=J.state.directionalShadow,te.spotLights.value=J.state.spot,te.spotLightShadows.value=J.state.spotShadow,te.rectAreaLights.value=J.state.rectArea,te.ltc_1.value=J.state.rectAreaLTC1,te.ltc_2.value=J.state.rectAreaLTC2,te.pointLights.value=J.state.point,te.pointLightShadows.value=J.state.pointShadow,te.hemisphereLights.value=J.state.hemi,te.directionalShadowMap.value=J.state.directionalShadowMap,te.directionalShadowMatrix.value=J.state.directionalShadowMatrix,te.spotShadowMap.value=J.state.spotShadowMap,te.spotLightMatrix.value=J.state.spotLightMatrix,te.spotLightMap.value=J.state.spotLightMap,te.pointShadowMap.value=J.state.pointShadowMap,te.pointShadowMatrix.value=J.state.pointShadowMatrix),ht.currentProgram=le,ht.uniformsList=null,le}function Tr(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Hc.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function zi(C,j){const ft=ot.get(C);ft.outputColorSpace=j.outputColorSpace,ft.batching=j.batching,ft.batchingColor=j.batchingColor,ft.instancing=j.instancing,ft.instancingColor=j.instancingColor,ft.instancingMorph=j.instancingMorph,ft.skinning=j.skinning,ft.morphTargets=j.morphTargets,ft.morphNormals=j.morphNormals,ft.morphColors=j.morphColors,ft.morphTargetsCount=j.morphTargetsCount,ft.numClippingPlanes=j.numClippingPlanes,ft.numIntersection=j.numClipIntersection,ft.vertexAlphas=j.vertexAlphas,ft.vertexTangents=j.vertexTangents,ft.toneMapping=j.toneMapping}function la(C,j,ft,ht,J){j.isScene!==!0&&(j=Jt),Rt.resetTextureUnits();const Dt=j.fog,Ht=ht.isMeshStandardMaterial?j.environment:null,Yt=$===null?D.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ds,Vt=(ht.isMeshStandardMaterial?Xt:Ut).get(ht.envMap||Ht),se=ht.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,le=!!ft.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),te=!!ft.morphAttributes.position,ge=!!ft.morphAttributes.normal,De=!!ft.morphAttributes.color;let je=Ha;ht.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(je=D.toneMapping);const Ie=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,_e=Ie!==void 0?Ie.length:0,re=ot.get(ht),qe=_.state.lights;if(qt===!0&&(rt===!0||C!==L)){const $e=C===L&&ht.id===U;Ot.setState(ht,C,$e)}let Me=!1;ht.version===re.__version?(re.needsLights&&re.lightsStateVersion!==qe.state.version||re.outputColorSpace!==Yt||J.isBatchedMesh&&re.batching===!1||!J.isBatchedMesh&&re.batching===!0||J.isBatchedMesh&&re.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&re.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&re.instancing===!1||!J.isInstancedMesh&&re.instancing===!0||J.isSkinnedMesh&&re.skinning===!1||!J.isSkinnedMesh&&re.skinning===!0||J.isInstancedMesh&&re.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&re.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&re.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&re.instancingMorph===!1&&J.morphTexture!==null||re.envMap!==Vt||ht.fog===!0&&re.fog!==Dt||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Ot.numPlanes||re.numIntersection!==Ot.numIntersection)||re.vertexAlphas!==se||re.vertexTangents!==le||re.morphTargets!==te||re.morphNormals!==ge||re.morphColors!==De||re.toneMapping!==je||re.morphTargetsCount!==_e)&&(Me=!0):(Me=!0,re.__version=ht.version);let Tn=re.currentProgram;Me===!0&&(Tn=Ai(ht,j,J));let pi=!1,Nn=!1,gn=!1;const ke=Tn.getUniforms(),On=re.uniforms;if(q.useProgram(Tn.program)&&(pi=!0,Nn=!0,gn=!0),ht.id!==U&&(U=ht.id,Nn=!0),pi||L!==C){q.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ke.setValue(H,"projectionMatrix",C.projectionMatrix),ke.setValue(H,"viewMatrix",C.matrixWorldInverse);const Sn=ke.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,Nt.setFromMatrixPosition(C.matrixWorld)),lt.logarithmicDepthBuffer&&ke.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&ke.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),L!==C&&(L=C,Nn=!0,gn=!0)}if(J.isSkinnedMesh){ke.setOptional(H,J,"bindMatrix"),ke.setOptional(H,J,"bindMatrixInverse");const $e=J.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ke.setValue(H,"boneTexture",$e.boneTexture,Rt))}J.isBatchedMesh&&(ke.setOptional(H,J,"batchingTexture"),ke.setValue(H,"batchingTexture",J._matricesTexture,Rt),ke.setOptional(H,J,"batchingIdTexture"),ke.setValue(H,"batchingIdTexture",J._indirectTexture,Rt),ke.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&ke.setValue(H,"batchingColorTexture",J._colorsTexture,Rt));const An=ft.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Ct.update(J,ft,Tn),(Nn||re.receiveShadow!==J.receiveShadow)&&(re.receiveShadow=J.receiveShadow,ke.setValue(H,"receiveShadow",J.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(On.envMap.value=Vt,On.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&j.environment!==null&&(On.envMapIntensity.value=j.environmentIntensity),Nn&&(ke.setValue(H,"toneMappingExposure",D.toneMappingExposure),re.needsLights&&Xa(On,gn),Dt&&ht.fog===!0&&pt.refreshFogUniforms(On,Dt),pt.refreshMaterialUniforms(On,ht,Z,et,_.state.transmissionRenderTarget[C.id]),Hc.upload(H,Tr(re),On,Rt)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Hc.upload(H,Tr(re),On,Rt),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&ke.setValue(H,"center",J.center),ke.setValue(H,"modelViewMatrix",J.modelViewMatrix),ke.setValue(H,"normalMatrix",J.normalMatrix),ke.setValue(H,"modelMatrix",J.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const $e=ht.uniformsGroups;for(let Sn=0,Ar=$e.length;Sn<Ar;Sn++){const Fn=$e[Sn];de.update(Fn,Tn),de.bind(Fn,Tn)}}return Tn}function Xa(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function ca(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,j,ft){const ht=ot.get(C);ht.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),ot.get(C.texture).__webglTexture=j,ot.get(C.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:ft,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const ft=ot.get(C);ft.__webglFramebuffer=j,ft.__useDefaultFramebuffer=j===void 0};const sn=H.createFramebuffer();this.setRenderTarget=function(C,j=0,ft=0){$=C,F=j,G=ft;let ht=!0,J=null,Dt=!1,Ht=!1;if(C){const Vt=ot.get(C);if(Vt.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(H.FRAMEBUFFER,null),ht=!1;else if(Vt.__webglFramebuffer===void 0)Rt.setupRenderTarget(C);else if(Vt.__hasExternalTextures)Rt.rebindTextures(C,ot.get(C.texture).__webglTexture,ot.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const te=C.depthTexture;if(Vt.__boundDepthTexture!==te){if(te!==null&&ot.has(te)&&(C.width!==te.image.width||C.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Rt.setupDepthRenderbuffer(C)}}const se=C.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Ht=!0);const le=ot.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(le[j])?J=le[j][ft]:J=le[j],Dt=!0):C.samples>0&&Rt.useMultisampledRTT(C)===!1?J=ot.get(C).__webglMultisampledFramebuffer:Array.isArray(le)?J=le[ft]:J=le,V.copy(C.viewport),Y.copy(C.scissor),mt=C.scissorTest}else V.copy(it).multiplyScalar(Z).floor(),Y.copy(bt).multiplyScalar(Z).floor(),mt=At;if(ft!==0&&(J=sn),q.bindFramebuffer(H.FRAMEBUFFER,J)&&ht&&q.drawBuffers(C,J),q.viewport(V),q.scissor(Y),q.setScissorTest(mt),Dt){const Vt=ot.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Vt.__webglTexture,ft)}else if(Ht){const Vt=j;for(let se=0;se<C.textures.length;se++){const le=ot.get(C.textures[se]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+se,le.__webglTexture,ft,Vt)}}else if(C!==null&&ft!==0){const Vt=ot.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Vt.__webglTexture,ft)}U=-1},this.readRenderTargetPixels=function(C,j,ft,ht,J,Dt,Ht,Yt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Vt=Vt[Ht]),Vt){q.bindFramebuffer(H.FRAMEBUFFER,Vt);try{const se=C.textures[Yt],le=se.format,te=se.type;if(!lt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ht&&ft>=0&&ft<=C.height-J&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Yt),H.readPixels(j,ft,ht,J,jt.convert(le),jt.convert(te),Dt))}finally{const se=$!==null?ot.get($).__webglFramebuffer:null;q.bindFramebuffer(H.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(C,j,ft,ht,J,Dt,Ht,Yt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Vt=Vt[Ht]),Vt)if(j>=0&&j<=C.width-ht&&ft>=0&&ft<=C.height-J){q.bindFramebuffer(H.FRAMEBUFFER,Vt);const se=C.textures[Yt],le=se.format,te=se.type;if(!lt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ge),H.bufferData(H.PIXEL_PACK_BUFFER,Dt.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Yt),H.readPixels(j,ft,ht,J,jt.convert(le),jt.convert(te),0);const De=$!==null?ot.get($).__webglFramebuffer:null;q.bindFramebuffer(H.FRAMEBUFFER,De);const je=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await fS(H,je,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ge),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Dt),H.deleteBuffer(ge),H.deleteSync(je),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,ft=0){const ht=Math.pow(2,-ft),J=Math.floor(C.image.width*ht),Dt=Math.floor(C.image.height*ht),Ht=j!==null?j.x:0,Yt=j!==null?j.y:0;Rt.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,ft,0,0,Ht,Yt,J,Dt),q.unbindTexture()};const el=H.createFramebuffer(),nl=H.createFramebuffer();this.copyTextureToTexture=function(C,j,ft=null,ht=null,J=0,Dt=null){Dt===null&&(J!==0?(jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=J,J=0):Dt=0);let Ht,Yt,Vt,se,le,te,ge,De,je;const Ie=C.isCompressedTexture?C.mipmaps[Dt]:C.image;if(ft!==null)Ht=ft.max.x-ft.min.x,Yt=ft.max.y-ft.min.y,Vt=ft.isBox3?ft.max.z-ft.min.z:1,se=ft.min.x,le=ft.min.y,te=ft.isBox3?ft.min.z:0;else{const An=Math.pow(2,-J);Ht=Math.floor(Ie.width*An),Yt=Math.floor(Ie.height*An),C.isDataArrayTexture?Vt=Ie.depth:C.isData3DTexture?Vt=Math.floor(Ie.depth*An):Vt=1,se=0,le=0,te=0}ht!==null?(ge=ht.x,De=ht.y,je=ht.z):(ge=0,De=0,je=0);const _e=jt.convert(j.format),re=jt.convert(j.type);let qe;j.isData3DTexture?(Rt.setTexture3D(j,0),qe=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Rt.setTexture2DArray(j,0),qe=H.TEXTURE_2D_ARRAY):(Rt.setTexture2D(j,0),qe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const Me=H.getParameter(H.UNPACK_ROW_LENGTH),Tn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pi=H.getParameter(H.UNPACK_SKIP_PIXELS),Nn=H.getParameter(H.UNPACK_SKIP_ROWS),gn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ie.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,se),H.pixelStorei(H.UNPACK_SKIP_ROWS,le),H.pixelStorei(H.UNPACK_SKIP_IMAGES,te);const ke=C.isDataArrayTexture||C.isData3DTexture,On=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const An=ot.get(C),$e=ot.get(j),Sn=ot.get(An.__renderTarget),Ar=ot.get($e.__renderTarget);q.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),q.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let Fn=0;Fn<Vt;Fn++)ke&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ot.get(C).__webglTexture,J,te+Fn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ot.get(j).__webglTexture,Dt,je+Fn)),H.blitFramebuffer(se,le,Ht,Yt,ge,De,Ht,Yt,H.DEPTH_BUFFER_BIT,H.NEAREST);q.bindFramebuffer(H.READ_FRAMEBUFFER,null),q.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||ot.has(C)){const An=ot.get(C),$e=ot.get(j);q.bindFramebuffer(H.READ_FRAMEBUFFER,el),q.bindFramebuffer(H.DRAW_FRAMEBUFFER,nl);for(let Sn=0;Sn<Vt;Sn++)ke?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,An.__webglTexture,J,te+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,An.__webglTexture,J),On?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.__webglTexture,Dt,je+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$e.__webglTexture,Dt),J!==0?H.blitFramebuffer(se,le,Ht,Yt,ge,De,Ht,Yt,H.COLOR_BUFFER_BIT,H.NEAREST):On?H.copyTexSubImage3D(qe,Dt,ge,De,je+Sn,se,le,Ht,Yt):H.copyTexSubImage2D(qe,Dt,ge,De,se,le,Ht,Yt);q.bindFramebuffer(H.READ_FRAMEBUFFER,null),q.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else On?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(qe,Dt,ge,De,je,Ht,Yt,Vt,_e,re,Ie.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(qe,Dt,ge,De,je,Ht,Yt,Vt,_e,Ie.data):H.texSubImage3D(qe,Dt,ge,De,je,Ht,Yt,Vt,_e,re,Ie):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Dt,ge,De,Ht,Yt,_e,re,Ie.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Dt,ge,De,Ie.width,Ie.height,_e,Ie.data):H.texSubImage2D(H.TEXTURE_2D,Dt,ge,De,Ht,Yt,_e,re,Ie);H.pixelStorei(H.UNPACK_ROW_LENGTH,Me),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Nn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,gn),Dt===0&&j.generateMipmaps&&H.generateMipmap(qe),q.unbindTexture()},this.initRenderTarget=function(C){ot.get(C).__webglFramebuffer===void 0&&Rt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Rt.setTextureCube(C,0):C.isData3DTexture?Rt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Rt.setTexture2DArray(C,0):Rt.setTexture2D(C,0),q.unbindTexture()},this.resetState=function(){F=0,G=0,$=null,q.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const av={xRange:[-2,2],yRange:[-1.5,1.5],gridDivisions:8,axisColor:8947848,gridColor:3355443},R0=(o,t,i,r)=>({x:1-i*o*o+t,y:r*o}),OA=o=>{const{xRange:t,yRange:i,gridDivisions:r,axisColor:l,gridColor:u}=av,[d,h]=t,[m,p]=i,v=(h-d)/r,g=(p-m)/r,y=new Vo;y.name="coordinate-system";for(let b=0;b<=r;b++){const A=d+b*v,M=Math.abs(A)<.01,_=[new nt(A,m,-.01),new nt(A,p,-.01)],z=new qn().setFromPoints(_),R=new Zo({color:M?l:u,transparent:!0,opacity:M?1:.4}),D=new Yc(z,R);D.userData.isGrid=!0,y.add(D)}for(let b=0;b<=r;b++){const A=m+b*g,M=Math.abs(A)<.01,_=[new nt(d,A,-.01),new nt(h,A,-.01)],z=new qn().setFromPoints(_),R=new Zo({color:M?l:u,transparent:!0,opacity:M?1:.4}),D=new Yc(z,R);D.userData.isGrid=!0,y.add(D)}const x=(b,A,M=.15)=>{const _=document.createElement("canvas"),z=_.getContext("2d");_.width=128,_.height=64,z.fillStyle="transparent",z.fillRect(0,0,_.width,_.height),z.font="Bold 32px Arial",z.fillStyle="#aaaaaa",z.textAlign="center",z.textBaseline="middle",z.fillText(b,_.width/2,_.height/2);const R=new qS(_);R.minFilter=Mi;const D=new Y0({map:R,transparent:!0,depthTest:!1}),N=new zS(D);return N.position.copy(A),N.scale.set(M*2,M,1),N.userData.isGrid=!0,N};for(let b=0;b<=r;b++){const A=d+b*v;Math.abs(A)>.01&&y.add(x(A.toFixed(1),new nt(A,m-.15,0),.12))}for(let b=0;b<=r;b++){const A=m+b*g;Math.abs(A)>.01&&y.add(x(A.toFixed(1),new nt(d-.2,A,0),.12))}return y.add(x("x",new nt(h+.2,0,0),.18)),y.add(x("y",new nt(0,p+.15,0),.18)),y.add(x("0",new nt(-.12,-.12,0),.1)),o.add(y),y},Li={period1:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},period2:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},period3:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},period4:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},period5:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},period6plus:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},trajectory:"#00ffff",manifold:"#1e90ff",attractor:"#27ae60",repeller:"#e74c3c",saddlePoint:"#e74c3c",periodicBlue:"#3498db"},PA=()=>{const o=ae.useRef(null),t=ae.useRef(null),i=ae.useRef(null),r=ae.useRef(null),l=ae.useRef(null),u=ae.useRef(null),d=ae.useRef(null),[h,m]=ae.useState("periodic"),[p,v]=ae.useState(null),[g,y]=ae.useState({a:.4,b:.3,epsilon:.0625,startX:.1,startY:.1,maxIterations:1e3,maxPeriod:5}),[x,b]=ae.useState({orbits:[],trajectoryPoints:[],currentPoint:{x:.1,y:.1},iteration:0,isRunning:!1,isReady:!1,showOrbits:!1,showTrail:!0,hasStarted:!1}),[A,M]=ae.useState({manifolds:[],fixedPoints:[],isComputing:!1,isReady:!1}),[_,z]=ae.useState({period1:!0,period2:!0,period3:!0,period4:!0,period5:!0,period6plus:!1}),[R,D]=ae.useState({gridBoxes:[],invariantMeasure:null,leftEigenvector:null,transitions:null,selectedBoxIndex:null,currentBoxIndex:-1,isComputing:!1,subdivisions:20,pointsPerBox:64,epsilon:.05,showUlamOverlay:!1,showTransitions:!0,showCurrentBox:!0,needsRecompute:!1}),[N,F]=ae.useState({isAnimating:!1,parameter:"a",rangeValue:.1,direction:1,steps:10,currentStep:0,baseValue:null,targetValue:null});ae.useRef(null);const[G,$]=ae.useState({isRecording:!1,isEncoding:!1,frameCount:0,recordingEnabled:!1,encodingProgress:0,error:null}),U=ae.useRef([]),L=ae.useRef(null),V=ae.useRef(null),[Y,mt]=ae.useState({visible:!1,x:0,y:0,data:null}),_t=ae.useRef(new KS),gt=ae.useRef(new Te);ae.useEffect(()=>{if(!o.current)return;const P=new BS;P.background=new Se(657930),i.current=P;const[lt,q]=av.yRange,yt=q-lt,ot=.5,Rt=window.innerWidth*.75/window.innerHeight,Ut=yt+ot*2,Xt=Ut*Rt,w=new J0(-Xt/2,Xt/2,Ut/2,-Ut/2,.1,1e3);w.position.z=5,r.current=w;const E=new NA({canvas:o.current,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});E.setSize(window.innerWidth*.75,window.innerHeight),E.setPixelRatio(window.devicePixelRatio),t.current=E,OA(P);const Q=()=>{const pt=window.innerWidth*.75/window.innerHeight,dt=Ut*pt;w.left=-dt/2,w.right=dt/2,w.updateProjectionMatrix(),E.setSize(window.innerWidth*.75,window.innerHeight)};window.addEventListener("resize",Q);const ct=()=>{l.current=requestAnimationFrame(ct),E.render(P,w)};return ct(),()=>{window.removeEventListener("resize",Q),l.current&&cancelAnimationFrame(l.current),u.current&&cancelAnimationFrame(u.current),E.dispose()}},[]),ae.useEffect(()=>{(async()=>{try{const lt=await yy(()=>import("./henon_periodic_orbits-CntY8sCO.js"),[]);await lt.default(),v(lt),console.log("WASM module loaded successfully")}catch(lt){console.error("Failed to load WASM module:",lt)}})()},[]);const B=ae.useCallback((P,lt)=>{const q=g.a,yt=g.b,ot=-2*q*P,Rt=1,Ut=yt,Xt=0,w=ot+Xt,E=ot*Xt-Rt*Ut;return{j11:ot,j12:Rt,j21:Ut,j22:Xt,trace:w,det:E}},[g.a,g.b]),et=ae.useCallback(P=>{if(!o.current||!i.current||!r.current)return;const lt=o.current.getBoundingClientRect();if(gt.current.x=(P.clientX-lt.left)/lt.width*2-1,gt.current.y=-((P.clientY-lt.top)/lt.height)*2+1,_t.current.setFromCamera(gt.current,r.current),R.showUlamOverlay&&R.gridBoxes.length>0){const ot=i.current.getObjectByName("ulam-grid");if(ot){const Rt=_t.current.intersectObject(ot);if(Rt.length>0&&Rt[0].instanceId!==void 0){const Ut=Rt[0].instanceId,Xt=R.gridBoxes[Ut],w=R.invariantMeasure?R.invariantMeasure[Ut]:0,E=R.invariantMeasure?Math.max(...R.invariantMeasure):1;let Q=0,ct=[];if(V.current){const pt=V.current.get_transitions(Ut);pt&&pt.length>0&&(Q=pt.length,ct=pt.sort((dt,Gt)=>Gt.probability-dt.probability).slice(0,3))}mt({visible:!0,x:P.clientX,y:P.clientY,data:{type:"Ulam Box",boxIndex:Ut,pos:{x:Xt.center[0],y:Xt.center[1]},measure:w,measurePercent:E>0?w/E*100:0,numTransitions:Q,topTransitions:ct,isCurrentBox:Ut===R.currentBoxIndex}});return}}}const q=[];i.current.traverse(ot=>{ot.isMesh&&(ot.userData.type==="orbit"||ot.userData.type==="fixedPoint")&&q.push(ot)});const yt=_t.current.intersectObjects(q,!1);if(yt.length>0){const Rt=yt[0].object.userData,Ut=B(Rt.pos.x,Rt.pos.y);mt({visible:!0,x:P.clientX,y:P.clientY,data:{type:Rt.type==="fixedPoint"?"Fixed Point":"Periodic Point",period:Rt.period,stability:Rt.stability,pos:Rt.pos,eigenvalues:Rt.eigenvalues,jacobian:Ut,orbitSize:Rt.orbitPoints?.length||1}})}else mt(ot=>ot.visible?{...ot,visible:!1}:ot)},[B,R.showUlamOverlay,R.gridBoxes,R.invariantMeasure,R.currentBoxIndex]);ae.useEffect(()=>{!o.current||!i.current||!r.current||o.current.getBoundingClientRect()},[et]);const Z=ae.useCallback(P=>{if(!V.current)return;const lt=V.current.get_transitions(P);D(q=>({...q,selectedBoxIndex:P,transitions:lt}))},[]);ae.useEffect(()=>{const P=o.current;if(!P)return;const lt=q=>{if(!R.showUlamOverlay||!R.gridBoxes.length)return;const yt=P.getBoundingClientRect(),ot=(q.clientX-yt.left)/yt.width*2-1,Rt=-((q.clientY-yt.top)/yt.height)*2+1;_t.current.setFromCamera(new Te(ot,Rt),r.current);const Xt=i.current.getObjectByName("ulam-grid");if(Xt){const w=_t.current.intersectObject(Xt);if(w.length>0){const E=w[0].instanceId;E!==void 0&&Z(E)}else D(E=>({...E,selectedBoxIndex:null,transitions:null}))}};return P.addEventListener("mousemove",et),P.addEventListener("click",lt),()=>{P.removeEventListener("mousemove",et),P.removeEventListener("click",lt)}},[et,R.showUlamOverlay,R.gridBoxes.length,Z]),ae.useEffect(()=>{if(!p)return;let P=!1;return b(q=>({...q,isReady:!1,orbits:[],trajectoryPoints:[],iteration:0,hasStarted:!1,showOrbits:!1})),(()=>{try{if(P)return;const q=new p.HenonSystemWasm(g.a,g.b,g.maxPeriod);if(P){q.free();return}const yt=q.getPeriodicOrbits();q.free(),b(ot=>({...ot,orbits:yt,isReady:!0,currentPoint:{x:g.startX,y:g.startY}}))}catch(q){console.error("Failed to compute periodic orbits:",q),b(yt=>({...yt,isReady:!0,orbits:[]}))}})(),()=>{P=!0}},[p,g.a,g.b,g.maxPeriod,g.startX,g.startY]),ae.useEffect(()=>{if(h==="manifold")return d.current&&clearTimeout(d.current),M(P=>({...P,isComputing:!0})),d.current=setTimeout(()=>{if(p)try{if(x.orbits&&x.orbits.length>0){console.log("Using periodic orbits for manifold:",x.orbits.length,"orbits");const P=p.compute_manifold_from_orbits(g.a,g.b,g.epsilon,x.orbits);M({manifolds:P.manifolds||[],fixedPoints:P.fixed_points||[],isComputing:!1,isReady:!0})}else{console.log("No periodic orbits available, using simple computation");const P=p.compute_manifold_simple(g.a,g.b,g.epsilon);M({manifolds:P.manifolds||[],fixedPoints:P.fixed_points||[],isComputing:!1,isReady:!0})}}catch(P){console.error("Manifold computation error:",P),M(lt=>({...lt,isComputing:!1}))}},500),()=>{d.current&&clearTimeout(d.current)}},[h,g.a,g.b,g.epsilon,x.orbits,p]),ae.useEffect(()=>{if(!N.isAnimating||h!=="manifold"||A.isComputing)return;const{parameter:P,rangeValue:lt,direction:q,steps:yt,currentStep:ot,baseValue:Rt}=N;if(ot>=yt){F(E=>({...E,isAnimating:!1}));return}const Ut=lt/yt,Xt=ot+1,w=Rt+q*Ut*Xt;y(E=>({...E,[P]:parseFloat(w.toFixed(4))})),F(E=>({...E,currentStep:Xt}))},[N.isAnimating,N.currentStep,A.isComputing,h]);const Tt=ae.useCallback(async()=>{const P=g[N.parameter],lt=P+N.direction*N.rangeValue;if(G.recordingEnabled&&o.current)try{const q=o.current,yt=1280,ot=720,Rt=new OffscreenCanvas(yt,ot),Ut=Rt.getContext("2d");Ut.drawImage(q,0,0,yt,ot);const Xt=`a = ${g.a.toFixed(4)}  b = ${g.b.toFixed(4)}  ε = ${g.epsilon.toFixed(4)}`;Ut.fillStyle="rgba(0, 0, 0, 0.7)",Ut.fillRect(10,ot-40,400,30),Ut.font="bold 16px monospace",Ut.fillStyle="#4CAF50",Ut.fillText(Xt,20,ot-18);const w=await createImageBitmap(Rt);U.current.push(w),$(E=>({...E,frameCount:1})),console.log("Initial frame captured")}catch(q){console.error("Initial frame capture error:",q)}F(q=>({...q,isAnimating:!0,baseValue:P,targetValue:lt,currentStep:0}))},[g,N.parameter,N.direction,N.rangeValue,G.recordingEnabled]),O=ae.useCallback(()=>{F(P=>({...P,isAnimating:!1,currentStep:0}))},[]),it=ae.useCallback(async()=>{if(!o.current||!G.recordingEnabled)return null;const P=o.current,lt=1280,q=720,yt=new OffscreenCanvas(lt,q),ot=yt.getContext("2d");ot.drawImage(P,0,0,lt,q);const Rt=`a = ${g.a.toFixed(4)}  b = ${g.b.toFixed(4)}  ε = ${g.epsilon.toFixed(4)}`;return ot.fillStyle="rgba(0, 0, 0, 0.7)",ot.fillRect(10,q-40,400,30),ot.font="bold 16px monospace",ot.fillStyle="#4CAF50",ot.fillText(Rt,20,q-18),await createImageBitmap(yt)},[g.a,g.b,g.epsilon,G.recordingEnabled]),bt=ae.useCallback(()=>{L.current&&L.current.terminate();const P=new Worker(new URL("/assets/videoEncoder.worker-7mA2J84V.js",import.meta.url),{type:"classic"});return P.onmessage=lt=>{const{type:q,blob:yt,frameCount:ot,error:Rt}=lt.data;switch(q){case"ready":console.log("Encoder ready");break;case"progress":$(E=>({...E,frameCount:ot}));break;case"complete":const Ut=URL.createObjectURL(yt),Xt=document.createElement("a"),w=At();Xt.href=Ut,Xt.download=w,document.body.appendChild(Xt),Xt.click(),document.body.removeChild(Xt),URL.revokeObjectURL(Ut),$(E=>({...E,isEncoding:!1,isRecording:!1,recordingEnabled:!1})),U.current=[];break;case"error":console.error("Encoder error:",Rt),$(E=>({...E,error:Rt,isEncoding:!1}));break}},L.current=P,P},[]),At=ae.useCallback(()=>{const P=g.a.toFixed(3).replace(".","p"),lt=g.b.toFixed(3).replace(".","p"),q=g.epsilon.toFixed(4).replace(".","p"),yt=N.parameter,ot=(N.baseValue||0).toFixed(3).replace(".","p").replace("-","m"),Rt=(N.targetValue||0).toFixed(3).replace(".","p").replace("-","m");return`henon_${yt}_a${P}_b${lt}_eps${q}_${ot}_to_${Rt}.mp4`},[g.a,g.b,g.epsilon,N.parameter,N.baseValue,N.targetValue]),Ft=ae.useCallback(async()=>{if(!o.current||!t.current||!i.current||!r.current)return;t.current.render(i.current,r.current);const P=o.current,lt=1920,q=1080,yt=new OffscreenCanvas(lt,q),ot=yt.getContext("2d");if(ot.drawImage(P,0,0,lt,q),ot.fillStyle="rgba(0, 0, 0, 0.8)",ot.fillRect(10,q-80,500,70),ot.font="bold 18px monospace",ot.fillStyle="#4CAF50",h==="periodic")ot.fillText(`Periodic Orbits | Iteration: ${x.iteration}`,20,q-55),ot.font="14px monospace",ot.fillStyle="#aaa",ot.fillText(`Current: (${x.currentPoint.x.toFixed(6)}, ${x.currentPoint.y.toFixed(6)})`,20,q-32);else if(h==="manifold"){ot.fillText("Unstable Manifold",20,q-55),ot.font="14px monospace",ot.fillStyle="#aaa";const dt=A.manifolds.reduce((Gt,Ot)=>Gt+(Ot.points_positive?.length||0)+(Ot.points_negative?.length||0),0);ot.fillText(`${A.fixedPoints.length} fixed points, ${dt} manifold points`,20,q-32)}ot.font="bold 14px monospace",ot.fillStyle="#4CAF50",ot.fillText(`a = ${g.a.toFixed(4)}   b = ${g.b.toFixed(4)}   ε = ${g.epsilon.toFixed(4)}`,20,q-12);const Rt=await yt.convertToBlob({type:"image/png",quality:1}),Ut=URL.createObjectURL(Rt),Xt=document.createElement("a"),w=g.a.toFixed(3).replace(".","p"),E=g.b.toFixed(3).replace(".","p"),Q=g.epsilon.toFixed(4).replace(".","p"),ct=h==="periodic"?"periodic":"manifold",pt=h==="periodic"?`_iter${x.iteration}`:"";Xt.href=Ut,Xt.download=`henon_${ct}_a${w}_b${E}_eps${Q}${pt}.png`,document.body.appendChild(Xt),Xt.click(),document.body.removeChild(Xt),URL.revokeObjectURL(Ut)},[h,g,x.iteration,x.currentPoint,A.manifolds,A.fixedPoints]),qt=ae.useCallback(async()=>{if(U.current.length===0){console.warn("No frames to encode");return}$(yt=>({...yt,isEncoding:!0,encodingProgress:0}));const P=bt();P.postMessage({type:"init",data:{width:1280,height:720,fps:2,filename:At()}}),await new Promise(yt=>setTimeout(yt,100));const q=1e6/2;for(let yt=0;yt<U.current.length;yt++){const ot=U.current[yt];P.postMessage({type:"frame",data:{imageData:ot,timestamp:yt*q,duration:q}}),yt%5===0&&await new Promise(Rt=>setTimeout(Rt,10))}P.postMessage({type:"finish"})},[bt,At]),rt=ae.useRef(!1);ae.useEffect(()=>{const P=rt.current,lt=A.isComputing;rt.current=lt,!(!G.recordingEnabled||!N.isAnimating)&&P&&!lt&&(console.log(`[Recording] Manifold finished, capturing frame for step ${N.currentStep}...`),requestAnimationFrame(async()=>{try{const q=await it();q?(U.current.push(q),$(yt=>({...yt,frameCount:U.current.length})),console.log(`[Recording] Frame ${U.current.length} captured`)):console.log("[Recording] captureFrame returned null")}catch(q){console.error("[Recording] Frame capture error:",q)}}))},[A.isComputing,N.isAnimating,G.recordingEnabled,N.currentStep,it]),ae.useEffect(()=>{!N.isAnimating&&G.recordingEnabled&&U.current.length>0&&!G.isEncoding&&(console.log(`[Recording] Animation finished with ${U.current.length} frames, starting encoding...`),qt())},[N.isAnimating,G.recordingEnabled,G.isEncoding,qt]);const St=ae.useCallback(()=>{G.recordingEnabled?($(P=>({...P,recordingEnabled:!1})),U.current=[]):($(P=>({...P,recordingEnabled:!0,frameCount:0,error:null})),U.current=[])},[G.recordingEnabled]);ae.useEffect(()=>{if(!i.current)return;const P=i.current,lt=[];if(P.traverse(q=>{(q.userData.type==="trajectory"||q.userData.type==="orbit"||q.userData.type==="manifold"||q.userData.type==="fixedPoint")&&lt.push(q)}),lt.forEach(q=>{q.geometry&&q.geometry.dispose(),q.material&&q.material.dispose(),P.remove(q)}),h==="periodic"){if(x.showOrbits&&x.orbits.length>0&&x.orbits.filter(yt=>ie(yt)).forEach(yt=>{if(yt.points.forEach((ot,Rt)=>{const Ut=new Es(.03,12,12),Xt=new gr({color:new Se(Nt(yt))}),w=new zn(Ut,Xt);w.position.set(ot[0],ot[1],.1),w.userData={type:"orbit",period:yt.period,stability:yt.stability,pointIndex:Rt,pos:{x:ot[0],y:ot[1]},orbitPoints:yt.points,eigenvalues:yt.eigenvalues||null},P.add(w)}),yt.points.length>1){const ot=new qn,Rt=new Float32Array(yt.points.length*3);yt.points.forEach((w,E)=>{Rt[E*3]=w[0],Rt[E*3+1]=w[1],Rt[E*3+2]=.1}),ot.setAttribute("position",new Wn(Rt,3));const Ut=new Zo({color:new Se(Nt(yt)),opacity:.5,transparent:!0}),Xt=new WS(ot,Ut);Xt.userData.type="orbitLine",P.add(Xt)}}),x.showTrail&&x.trajectoryPoints.length>0&&x.trajectoryPoints.forEach((q,yt)=>{const ot=yt/x.trajectoryPoints.length,Rt=.012*(.3+.7*ot),Ut=new Es(Rt,6,6),Xt=new gr({color:new Se(Li.trajectory),opacity:.2+.6*ot,transparent:!0}),w=new zn(Ut,Xt);w.position.set(q.x,q.y,.05),w.userData.type="trajectory",P.add(w)}),x.hasStarted&&x.currentPoint){const q=new Es(.04,16,16),yt=new gr({color:new Se("#ffffff")}),ot=new zn(q,yt);ot.position.set(x.currentPoint.x,x.currentPoint.y,.2),ot.userData.type="trajectory",P.add(ot)}}else A.manifolds.forEach(q=>{[q.plus,q.minus].forEach(yt=>{if(yt&&yt.points&&yt.points.length>1){const ot=new qn,Rt=new Float32Array(yt.points.length*3);yt.points.forEach(([w,E],Q)=>{Rt[Q*3]=w,Rt[Q*3+1]=E,Rt[Q*3+2]=.1}),ot.setAttribute("position",new Wn(Rt,3));const Ut=new Zo({color:new Se(Li.manifold),linewidth:2}),Xt=new Yc(ot,Ut);Xt.userData.type="manifold",P.add(Xt)}})}),A.fixedPoints.forEach(q=>{const yt=(q.stability||"").toLowerCase(),ot=yt==="attractor"||yt==="stable",Xt=ot?Li.attractor:yt==="repeller"||yt==="unstable"||yt==="saddle"?Li.saddlePoint:Li.periodicBlue,w=ot?.06:.05,E=new Es(w,16,16),Q=new gr({color:new Se(Xt)}),ct=new zn(E,Q);ct.position.set(q.x,q.y,.2),ct.userData={type:"fixedPoint",period:1,stability:q.stability,pos:{x:q.x,y:q.y},eigenvalues:q.eigenvalues||null},P.add(ct)})},[h,x,A,_]);const Nt=P=>{const{stability:lt}=P;return lt.toLowerCase()==="stable"?Li.attractor:lt.toLowerCase()==="saddle"?Li.saddlePoint:lt.toLowerCase()==="unstable"?Li.repeller:Li.periodicBlue},ie=P=>P.period===1?_.period1:P.period===2?_.period2:P.period===3?_.period3:P.period===4?_.period4:P.period===5?_.period5:_.period6plus,Jt=ae.useCallback(()=>{if(!x.isReady||x.isRunning)return;const{x:P,y:lt}=x.currentPoint;if(!isFinite(P)||!isFinite(lt)||Math.abs(P)>10||Math.abs(lt)>10){b(yt=>({...yt,currentPoint:{x:g.startX,y:g.startY},trajectoryPoints:[],iteration:0,hasStarted:!1}));return}const q=R0(P,lt,g.a,g.b);b(yt=>({...yt,currentPoint:q,trajectoryPoints:[...yt.trajectoryPoints,{x:P,y:lt}],iteration:yt.iteration+1,hasStarted:!0}))},[x.isReady,x.isRunning,x.currentPoint,g]),he=ae.useCallback(()=>{if(!x.isReady||x.isRunning)return;b(Ut=>({...Ut,isRunning:!0}));let P=x.currentPoint.x,lt=x.currentPoint.y,q=x.iteration;const yt=[...x.trajectoryPoints],ot=5,Rt=()=>{for(let Ut=0;Ut<ot&&q<g.maxIterations;Ut++){if(!isFinite(P)||!isFinite(lt)||Math.abs(P)>10||Math.abs(lt)>10){b(w=>({...w,isRunning:!1,showOrbits:!0,hasStarted:!0,trajectoryPoints:yt,currentPoint:{x:P,y:lt},iteration:q}));return}yt.push({x:P,y:lt});const Xt=R0(P,lt,g.a,g.b);P=Xt.x,lt=Xt.y,q++}b(Ut=>({...Ut,currentPoint:{x:P,y:lt},trajectoryPoints:[...yt],iteration:q,hasStarted:!0})),q<g.maxIterations?u.current=requestAnimationFrame(Rt):b(Ut=>({...Ut,isRunning:!1,showOrbits:!0}))};u.current=requestAnimationFrame(Rt)},[x,g]),Qe=ae.useCallback(()=>{u.current&&cancelAnimationFrame(u.current),b(P=>({...P,currentPoint:{x:g.startX,y:g.startY},trajectoryPoints:[],iteration:0,isRunning:!1,hasStarted:!1,showOrbits:!1}))},[g.startX,g.startY]),H=ae.useMemo(()=>{let P=0;return A.manifolds.forEach(lt=>{lt.plus?.points&&(P+=lt.plus.points.length),lt.minus?.points&&(P+=lt.minus.points.length)}),P},[A.manifolds]),we=ae.useCallback(async()=>{if(p){D(P=>({...P,isComputing:!0,needsRecompute:!1}));try{const{UlamComputer:P}=p;if(!P)throw console.error("UlamComputer export is missing from WASM module!"),new Error("UlamComputer definition missing");const lt=new P(g.a,g.b,R.subdivisions,R.pointsPerBox,R.epsilon);V.current=lt;const q=lt.get_grid_boxes(),yt=lt.get_invariant_measure(),ot=lt.get_left_eigenvector();let Rt=-1;x.hasStarted&&x.currentPoint&&(Rt=lt.get_box_index(x.currentPoint.x,x.currentPoint.y)),D(Ut=>({...Ut,isComputing:!1,gridBoxes:q,invariantMeasure:yt,leftEigenvector:ot,currentBoxIndex:Rt,selectedBoxIndex:null,transitions:null}))}catch(P){console.error("Ulam computation failed:",P),D(lt=>({...lt,isComputing:!1}))}}},[p,g.a,g.b,R.subdivisions,R.pointsPerBox,R.epsilon,x.hasStarted,x.currentPoint]);return ae.useEffect(()=>{R.showUlamOverlay&&p&&R.gridBoxes.length===0&&!R.isComputing&&we()},[R.showUlamOverlay,p,R.gridBoxes.length,R.isComputing,we]),ae.useEffect(()=>{if(!(!V.current||!R.showUlamOverlay)&&x.hasStarted&&x.currentPoint){const P=V.current.get_box_index(x.currentPoint.x,x.currentPoint.y);if(P!==R.currentBoxIndex){const lt=P>=0?V.current.get_transitions(P):null;D(q=>({...q,currentBoxIndex:P,transitions:q.showCurrentBox?lt:q.transitions,selectedBoxIndex:q.showCurrentBox?P:q.selectedBoxIndex}))}}},[x.currentPoint,x.hasStarted,R.showUlamOverlay,R.currentBoxIndex]),ae.useEffect(()=>{const P=i.current;if(!P)return;const lt=()=>{const ct=P.getObjectByName("ulam-grid");ct&&(ct.geometry.dispose(),ct.material.dispose(),P.remove(ct))};if(!R.showUlamOverlay||!R.gridBoxes.length){lt();return}lt();const q=R.gridBoxes,yt=q.length,ot=new $o(1,1),Rt=new gr({color:16777215,transparent:!0,opacity:.5,side:Oi,depthWrite:!1}),Ut=new GS(ot,Rt,yt);Ut.name="ulam-grid",Ut.userData.type="ulamGrid";const Xt=new Ln,w=new Se,E=new Map;R.selectedBoxIndex!==null&&R.transitions&&R.transitions.forEach(ct=>{E.set(ct.index,ct.probability)});let Q=0;return R.invariantMeasure&&(Q=Math.max(...R.invariantMeasure)),q.forEach((ct,pt)=>{const dt=ct.center[0],Gt=ct.center[1],Ot=ct.radius[0],Qt=ct.radius[1];Xt.position.set(dt,Gt,-.05),Xt.scale.set(Ot*2*.95,Qt*2*.95,1),Xt.updateMatrix(),Ut.setMatrixAt(pt,Xt.matrix);const $t=R.showCurrentBox&&pt===R.currentBoxIndex,Ct=R.selectedBoxIndex!==null&&pt===R.selectedBoxIndex;if($t&&!Ct)w.setHex(16711935),Ut.setColorAt(pt,w);else if(R.selectedBoxIndex!==null)if(pt===R.selectedBoxIndex)w.setHex(65535),Ut.setColorAt(pt,w);else if(E.has(pt)){const It=E.get(pt);w.setHSL(.7-It*.7,1,.5),Ut.setColorAt(pt,w)}else w.setHex(2236962),Ut.setColorAt(pt,w);else if(R.invariantMeasure&&R.invariantMeasure.length===yt){const It=R.invariantMeasure[pt];if(It>0){const jt=.66-It/Q*.5;w.setHSL(jt,1,.5),Ut.setColorAt(pt,w)}else w.setHex(1118481),Ut.setColorAt(pt,w)}else w.setHex(3355443),Ut.setColorAt(pt,w)}),Ut.instanceMatrix.needsUpdate=!0,Ut.instanceColor&&(Ut.instanceColor.needsUpdate=!0),P.add(Ut),lt},[R.showUlamOverlay,R.gridBoxes,R.selectedBoxIndex,R.transitions,R.invariantMeasure,R.currentBoxIndex,R.showCurrentBox]),ae.useEffect(()=>{if(!i.current)return;const P=i.current,lt=[];P.traverse(q=>{h!=="periodic"&&(q.userData.type==="orbit"||q.userData.type==="trajectory"||q.userData.type==="orbitLine")&&lt.push(q),h!=="manifold"&&(q.userData.type==="manifold"||q.userData.type==="fixedPoint")&&lt.push(q),h!=="ulam"&&q.userData.type}),lt.forEach(q=>{q.geometry&&q.geometry.dispose(),q.material&&q.material.dispose(),P.remove(q)})},[h]),W.jsxs("div",{style:Pt.container,children:[W.jsxs("div",{style:Pt.sidebar,children:[W.jsxs("div",{style:Pt.section,children:[W.jsx("h3",{style:Pt.sectionTitle,children:"Mode"}),W.jsxs("div",{style:Pt.toggleContainer,children:[W.jsx("button",{onClick:()=>m("periodic"),style:{...Pt.toggleButton,...h==="periodic"?Pt.toggleActive:{}},children:"Periodic Orbits"}),W.jsx("button",{onClick:()=>m("manifold"),style:{...Pt.toggleButton,...h==="manifold"?Pt.toggleActive:{}},children:"Unstable Manifold"})]})]}),W.jsxs("div",{style:Pt.section,children:[W.jsx("h3",{style:Pt.sectionTitle,children:"System Parameters"}),W.jsxs("label",{style:Pt.label,children:[W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"a ="}),W.jsx("input",{type:"number",step:"0.01",value:g.a,onChange:P=>y({...g,a:parseFloat(P.target.value)||.1}),style:Pt.numberInput,disabled:x.isRunning})]}),W.jsx("input",{type:"range",min:"0.1",max:"2.0",step:"0.01",value:g.a,onChange:P=>y({...g,a:parseFloat(P.target.value)}),style:Pt.slider,disabled:x.isRunning})]}),W.jsxs("label",{style:Pt.label,children:[W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"b ="}),W.jsx("input",{type:"number",step:"0.01",value:g.b,onChange:P=>y({...g,b:parseFloat(P.target.value)||.1}),style:Pt.numberInput,disabled:x.isRunning})]}),W.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.01",value:g.b,onChange:P=>y({...g,b:parseFloat(P.target.value)}),style:Pt.slider,disabled:x.isRunning})]}),h==="manifold"&&W.jsxs("label",{style:Pt.label,children:[W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"epsilon ="}),W.jsx("input",{type:"number",step:"0.001",value:g.epsilon,onChange:P=>y({...g,epsilon:parseFloat(P.target.value)||.01}),style:Pt.numberInput})]}),W.jsx("input",{type:"range",min:"0.001",max:"0.2",step:"0.001",value:g.epsilon,onChange:P=>y({...g,epsilon:parseFloat(P.target.value)}),style:Pt.slider})]}),W.jsx("button",{onClick:Ft,style:{...Pt.button,width:"100%",marginTop:"12px",backgroundColor:"#2d4a2d",borderColor:"#3a6a3a",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Save as PNG"}),h==="manifold"&&W.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[W.jsx("h4",{style:{fontSize:"12px",fontWeight:"600",marginBottom:"12px",color:"#888"},children:"Parameter Animation"}),W.jsx("label",{style:Pt.label,children:W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"Animate:"}),W.jsxs("select",{value:N.parameter,onChange:P=>F(lt=>({...lt,parameter:P.target.value})),style:{...Pt.numberInput,width:"100px"},disabled:N.isAnimating,children:[W.jsx("option",{value:"a",children:"a"}),W.jsx("option",{value:"b",children:"b"}),W.jsx("option",{value:"epsilon",children:"epsilon"})]})]})}),W.jsx("label",{style:Pt.label,children:W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"Direction:"}),W.jsxs("div",{style:{display:"flex",gap:"4px"},children:[W.jsx("button",{onClick:()=>F(P=>({...P,direction:-1})),style:{...Pt.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:N.direction===-1?"#3d5afe":"#2d2d2d"},disabled:N.isAnimating,children:"−"}),W.jsx("button",{onClick:()=>F(P=>({...P,direction:1})),style:{...Pt.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:N.direction===1?"#3d5afe":"#2d2d2d"},disabled:N.isAnimating,children:"+"})]})]})}),W.jsxs("label",{style:Pt.label,children:[W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"Range:"}),W.jsx("input",{type:"number",step:"0.05",min:"0.01",max:"1.0",value:N.rangeValue,onChange:P=>F(lt=>({...lt,rangeValue:parseFloat(P.target.value)||.1})),style:Pt.numberInput,disabled:N.isAnimating})]}),W.jsx("input",{type:"range",min:"0.01",max:"0.5",step:"0.01",value:N.rangeValue,onChange:P=>F(lt=>({...lt,rangeValue:parseFloat(P.target.value)})),style:Pt.slider,disabled:N.isAnimating})]}),W.jsxs("label",{style:Pt.label,children:[W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"Steps:"}),W.jsx("input",{type:"number",step:"1",min:"5",max:"30",value:N.steps,onChange:P=>F(lt=>({...lt,steps:parseInt(P.target.value)||10})),style:Pt.numberInput,disabled:N.isAnimating})]}),W.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:N.steps,onChange:P=>F(lt=>({...lt,steps:parseInt(P.target.value)})),style:Pt.slider,disabled:N.isAnimating})]}),W.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[W.jsxs("button",{onClick:N.isAnimating?O:Tt,disabled:A.isComputing&&!N.isAnimating||G.isEncoding,style:{...Pt.button,flex:1,marginBottom:0,backgroundColor:N.isAnimating?"#8b0000":"#1a4a1a",borderColor:N.isAnimating?"#b22222":"#2a6a2a"},children:[N.isAnimating?"⏹ Stop":"▶ Play",G.recordingEnabled&&!N.isAnimating&&" & Rec"]}),W.jsx("button",{onClick:St,disabled:N.isAnimating||G.isEncoding,style:{...Pt.button,width:"50px",marginBottom:0,backgroundColor:G.recordingEnabled?"#b22222":"#2d2d2d",borderColor:G.recordingEnabled?"#ff4444":"#444"},title:G.recordingEnabled?"Recording enabled - will record next animation":"Enable recording",children:G.recordingEnabled?"🔴":"⏺"})]}),G.recordingEnabled&&!N.isAnimating&&!G.isEncoding&&W.jsx("div",{style:{marginTop:"8px",padding:"6px",background:"#1a0a0a",borderRadius:"4px",border:"1px solid #b22222"},children:W.jsx("div",{style:{fontSize:"11px",color:"#ff6666"},children:"🔴 Recording armed - Press Play to start"})}),G.isEncoding&&W.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"#0a0a1a",borderRadius:"4px",border:"1px solid #3d5afe"},children:[W.jsxs("div",{style:{fontSize:"11px",color:"#7986cb",marginBottom:"4px"},children:["🔄 Encoding video... (",G.frameCount," frames)"]}),W.jsx("div",{style:{height:"4px",backgroundColor:"#1a1a2e",borderRadius:"2px",overflow:"hidden"},children:W.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#3d5afe",animation:"pulse 1s infinite"}})})]}),G.error&&W.jsxs("div",{style:{marginTop:"8px",padding:"6px",background:"#1a0a0a",borderRadius:"4px",fontSize:"10px",color:"#ff6666"},children:["Error: ",G.error]}),N.isAnimating&&W.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[W.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:[N.parameter,": ",N.baseValue?.toFixed(3)," → ",N.targetValue?.toFixed(3)]}),W.jsxs("div",{style:{fontSize:"11px",color:"#888"},children:["Current: ",W.jsx("span",{style:{color:"#4CAF50",fontWeight:"bold"},children:g[N.parameter].toFixed(4)}),G.recordingEnabled&&W.jsxs("span",{style:{color:"#ff6666",marginLeft:"8px"},children:["📹 ",G.frameCount," frames"]})]}),W.jsxs("div",{style:{fontSize:"10px",color:"#555",marginTop:"4px"},children:["Step ",N.currentStep," / ",N.steps,A.isComputing&&W.jsx("span",{style:{color:"#ff9800",marginLeft:"8px"},children:"Computing..."})]}),W.jsx("div",{style:{marginTop:"6px",height:"4px",backgroundColor:"#333",borderRadius:"2px",overflow:"hidden"},children:W.jsx("div",{style:{width:`${N.currentStep/N.steps*100}%`,height:"100%",backgroundColor:G.recordingEnabled?"#ff6666":"#4CAF50",transition:"width 0.3s ease"}})})]})]}),W.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[W.jsxs("label",{style:Pt.checkboxLabel,children:[W.jsx("input",{type:"checkbox",checked:R.showUlamOverlay,onChange:P=>D({...R,showUlamOverlay:P.target.checked})}),"Show Ulam Grid"]}),R.showUlamOverlay&&W.jsxs(W.Fragment,{children:[W.jsxs("label",{style:Pt.checkboxLabel,children:[W.jsx("input",{type:"checkbox",checked:R.showTransitions,onChange:P=>D({...R,showTransitions:P.target.checked})}),"Show Transitions"]}),h==="periodic"&&W.jsxs("label",{style:Pt.checkboxLabel,children:[W.jsx("input",{type:"checkbox",checked:R.showCurrentBox,onChange:P=>D({...R,showCurrentBox:P.target.checked})}),"Track Current Position"]}),W.jsxs("label",{style:Pt.label,children:[W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"Epsilon (ε) ="}),W.jsx("input",{type:"number",step:"0.01",min:"0.001",max:"0.5",value:R.epsilon,onChange:P=>D({...R,epsilon:parseFloat(P.target.value)||.05}),style:Pt.numberInput,disabled:R.isComputing})]}),W.jsx("input",{type:"range",min:"0.01",max:"0.3",step:"0.01",value:R.epsilon,onChange:P=>D({...R,epsilon:parseFloat(P.target.value)}),style:Pt.slider,disabled:R.isComputing}),W.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Ball radius for boundary detection"})]}),W.jsxs("label",{style:Pt.label,children:[W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"Grid ="}),W.jsx("input",{type:"number",step:"1",min:"10",max:"80",value:R.subdivisions,onChange:P=>D({...R,subdivisions:parseInt(P.target.value)||10}),style:Pt.numberInput,disabled:R.isComputing})]}),W.jsx("input",{type:"range",min:"10",max:"60",step:"5",value:R.subdivisions,onChange:P=>D({...R,subdivisions:parseInt(P.target.value)}),style:Pt.slider,disabled:R.isComputing})]}),W.jsxs("label",{style:Pt.label,children:[W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"Samples ="}),W.jsx("input",{type:"number",step:"16",min:"16",max:"256",value:R.pointsPerBox,onChange:P=>D({...R,pointsPerBox:parseInt(P.target.value)||64}),style:Pt.numberInput,disabled:R.isComputing})]}),W.jsx("input",{type:"range",min:"16",max:"256",step:"16",value:R.pointsPerBox,onChange:P=>D({...R,pointsPerBox:parseInt(P.target.value)}),style:Pt.slider,disabled:R.isComputing}),W.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Points per box (√n × √n grid)"})]}),W.jsx("button",{onClick:we,disabled:R.isComputing,style:Pt.button,children:R.isComputing?"Computing...":"Recompute Ulam Grid"}),R.gridBoxes.length>0&&W.jsxs("div",{style:{marginTop:"12px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[W.jsx("div",{style:{fontSize:"11px",fontWeight:"600",color:"#888",marginBottom:"6px"},children:"Invariant Measure"}),W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[W.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Low"}),W.jsx("div",{style:{flex:1,height:"12px",borderRadius:"2px",background:"linear-gradient(to right, hsl(238, 100%, 50%), hsl(180, 100%, 50%), hsl(100, 100%, 50%), hsl(60, 100%, 50%))"}}),W.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"High"})]}),W.jsx("div",{style:{fontSize:"9px",color:"#555",marginTop:"4px"},children:"Probability of trajectory visiting each region"})]}),R.currentBoxIndex>=0&&W.jsxs("div",{style:{fontSize:"11px",color:"#888",marginTop:"4px"},children:["Current box: ",R.currentBoxIndex]})]})]}),h==="periodic"&&W.jsxs(W.Fragment,{children:[W.jsxs("label",{style:Pt.label,children:[W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"Max Period ="}),W.jsx("input",{type:"number",step:"1",min:"1",max:"20",value:g.maxPeriod,onChange:P=>y({...g,maxPeriod:parseInt(P.target.value)||2}),style:Pt.numberInput,disabled:x.isRunning})]}),W.jsx("input",{type:"range",min:"2",max:"10",step:"1",value:g.maxPeriod,onChange:P=>y({...g,maxPeriod:parseInt(P.target.value)}),style:Pt.slider,disabled:x.isRunning})]}),W.jsxs("label",{style:Pt.label,children:[W.jsxs("div",{style:Pt.paramRow,children:[W.jsx("span",{children:"Max Iterations ="}),W.jsx("input",{type:"number",step:"100",min:"100",max:"10000",value:g.maxIterations,onChange:P=>y({...g,maxIterations:parseInt(P.target.value)||100}),style:Pt.numberInput,disabled:x.isRunning})]}),W.jsx("input",{type:"range",min:"100",max:"5000",step:"100",value:g.maxIterations,onChange:P=>y({...g,maxIterations:parseInt(P.target.value)}),style:Pt.slider,disabled:x.isRunning})]})]})]}),h==="periodic"&&W.jsxs(W.Fragment,{children:[W.jsxs("div",{style:Pt.section,children:[W.jsx("h3",{style:Pt.sectionTitle,children:"Periodic Orbits"}),[1,2,3,4,5].map(P=>W.jsxs("label",{style:Pt.checkboxLabel,children:[W.jsx("input",{type:"checkbox",checked:_[`period${P}`],onChange:lt=>z({..._,[`period${P}`]:lt.target.checked})}),W.jsx("span",{style:{...Pt.colorBox,backgroundColor:Li[`period${P}`].stable}}),"Period-",P," (",x.orbits.filter(lt=>lt.period===P).length,")"]},P)),W.jsxs("label",{style:Pt.checkboxLabel,children:[W.jsx("input",{type:"checkbox",checked:x.showOrbits,onChange:P=>b({...x,showOrbits:P.target.checked})}),"Show orbit markers"]}),W.jsxs("label",{style:Pt.checkboxLabel,children:[W.jsx("input",{type:"checkbox",checked:x.showTrail,onChange:P=>b({...x,showTrail:P.target.checked})}),"Show trajectory trail"]})]}),W.jsxs("div",{style:Pt.section,children:[W.jsx("h3",{style:Pt.sectionTitle,children:"Controls"}),W.jsx("button",{onClick:Jt,disabled:!x.isReady||x.isRunning,style:Pt.button,children:"Step Forward"}),W.jsx("button",{onClick:he,disabled:!x.isReady||x.isRunning,style:{...Pt.button,...Pt.runButton},children:x.isRunning?"Running...":"Run to Max Iterations"}),W.jsx("button",{onClick:Qe,disabled:x.isRunning,style:{...Pt.button,...Pt.resetButton},children:"Reset"})]})]}),h==="manifold"&&A.fixedPoints.length>0&&W.jsxs("div",{style:Pt.section,children:[W.jsxs("h3",{style:Pt.sectionTitle,children:["Fixed Points (",A.fixedPoints.length,")"]}),A.fixedPoints.map((P,lt)=>W.jsxs("div",{style:Pt.fixedPointItem,children:[W.jsx("span",{style:{fontWeight:"bold",color:P.stability==="Attractor"?"#00ff00":P.stability==="Repeller"?"#ff4444":"#ffaa00"},children:P.stability}),W.jsxs("span",{children:[" (",P.x.toFixed(3),", ",P.y.toFixed(3),")"]})]},lt))]}),W.jsxs("div",{style:Pt.info,children:[W.jsx("div",{style:Pt.infoHeader,children:"Henon Map: x' = 1 - ax² + y, y' = bx"}),h==="periodic"?W.jsxs(W.Fragment,{children:[W.jsxs("div",{children:["Status: ",x.isReady?x.isRunning?"Running...":"Ready":"Loading..."]}),W.jsxs("div",{children:["Iteration: ",x.iteration," / ",g.maxIterations]}),x.hasStarted&&W.jsxs("div",{children:["Position: (",x.currentPoint.x.toFixed(4),", ",x.currentPoint.y.toFixed(4),")"]}),W.jsxs("div",{children:["Orbits found: ",x.orbits.length]})]}):W.jsxs(W.Fragment,{children:[W.jsxs("div",{children:["Status: ",A.isComputing?"Computing...":"Ready"]}),W.jsxs("div",{children:["Manifolds: ",A.manifolds.length]}),W.jsxs("div",{children:["Total Points: ",H.toLocaleString()]})]})]})]}),W.jsxs("div",{style:Pt.viewport,children:[W.jsx("canvas",{ref:o,style:Pt.canvas}),Y.visible&&Y.data&&W.jsxs("div",{style:{position:"absolute",left:Y.x+15,top:Y.y+15,backgroundColor:"rgba(20, 20, 20, 0.95)",border:"1px solid #444",borderRadius:"4px",padding:"12px",zIndex:1e3,pointerEvents:"none",minWidth:"180px",maxWidth:"280px",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",fontSize:"12px",fontFamily:"monospace"},children:[W.jsxs("div",{style:{fontWeight:"bold",color:"#fff",marginBottom:"8px",borderBottom:"1px solid #444",paddingBottom:"4px"},children:[Y.data.type,Y.data.isCurrentBox&&W.jsx("span",{style:{color:"#ff00ff",marginLeft:"8px"},children:"● Current"})]}),Y.data.type==="Ulam Box"?W.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"6px 12px"},children:[W.jsx("span",{style:{color:"#888"},children:"Box #:"}),W.jsx("span",{style:{color:"#00ccff"},children:Y.data.boxIndex}),W.jsx("span",{style:{color:"#888"},children:"Center:"}),W.jsxs("span",{style:{color:"#ddd"},children:["(",Y.data.pos.x.toFixed(2),", ",Y.data.pos.y.toFixed(2),")"]}),W.jsx("span",{style:{color:"#888"},children:"Measure:"}),W.jsxs("span",{style:{color:"#4CAF50"},children:[(Y.data.measure*100).toFixed(2),"%",W.jsxs("span",{style:{color:"#666",marginLeft:"4px"},children:["(",Y.data.measurePercent.toFixed(0),"% of max)"]})]}),W.jsx("span",{style:{color:"#888"},children:"Transitions:"}),W.jsxs("span",{style:{color:"#ddd"},children:[Y.data.numTransitions," boxes"]}),Y.data.topTransitions&&Y.data.topTransitions.length>0&&W.jsxs(W.Fragment,{children:[W.jsx("span",{style:{color:"#888"},children:"Top targets:"}),W.jsx("div",{style:{fontSize:"10px"},children:Y.data.topTransitions.map((P,lt)=>W.jsxs("div",{style:{color:"#ff9800"},children:["→ Box ",P.index,": ",(P.probability*100).toFixed(1),"%"]},lt))})]})]}):W.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"8px 16px"},children:[W.jsx("span",{style:{color:"#888"},children:"Position:"}),W.jsxs("span",{style:{color:"#00ccff"},children:["(",Y.data.pos.x.toFixed(4),", ",Y.data.pos.y.toFixed(4),")"]}),W.jsx("span",{style:{color:"#888"},children:"Stability:"}),W.jsx("span",{style:{color:Y.data.stability?.toLowerCase()==="attractor"||Y.data.stability?.toLowerCase()==="stable"?"#27ae60":(Y.data.stability?.toLowerCase()==="repeller"||Y.data.stability?.toLowerCase()==="unstable","#e74c3c")},children:Y.data.stability||"Unknown"}),W.jsx("span",{style:{color:"#888"},children:"Period:"}),W.jsx("span",{style:{color:"#ddd"},children:Y.data.period}),Y.data.jacobian&&W.jsxs(W.Fragment,{children:[W.jsx("span",{style:{color:"#888"},children:"Jacobian:"}),W.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px",background:"#333",padding:"4px",borderRadius:"2px"},children:[W.jsx("span",{children:Y.data.jacobian.j11?.toFixed(3)}),W.jsx("span",{children:Y.data.jacobian.j12?.toFixed(3)}),W.jsx("span",{children:Y.data.jacobian.j21?.toFixed(3)}),W.jsx("span",{children:Y.data.jacobian.j22?.toFixed(3)})]}),W.jsx("span",{style:{color:"#888"},children:"Det/Trace:"}),W.jsxs("span",{style:{color:"#ddd"},children:["D=",Y.data.jacobian.det?.toFixed(3),", Tr=",Y.data.jacobian.trace?.toFixed(3)]})]})]})]})]})]})},Pt={container:{display:"flex",height:"100vh",width:"100vw",backgroundColor:"#0a0a0a",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0",overflow:"hidden"},sidebar:{width:"320px",minWidth:"320px",padding:"20px",backgroundColor:"#1a1a1a",borderRight:"1px solid #333",overflowY:"auto"},section:{marginBottom:"24px"},sectionTitle:{fontSize:"14px",fontWeight:"600",marginBottom:"12px",color:"#fff",textTransform:"uppercase",letterSpacing:"0.5px"},toggleContainer:{display:"flex",gap:"4px"},toggleButton:{flex:1,padding:"10px",backgroundColor:"#2d2d2d",color:"#888",border:"1px solid #444",borderRadius:"4px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},toggleActive:{backgroundColor:"#3d5afe",color:"#fff",borderColor:"#3d5afe"},label:{display:"flex",flexDirection:"column",marginBottom:"12px",fontSize:"13px",color:"#b0b0b0"},paramRow:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"},numberInput:{width:"80px",padding:"4px 8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",fontSize:"13px",textAlign:"right"},slider:{marginTop:"6px",width:"100%"},checkboxLabel:{display:"flex",alignItems:"center",marginBottom:"10px",fontSize:"13px",cursor:"pointer",gap:"8px"},colorBox:{width:"14px",height:"14px",borderRadius:"2px",display:"inline-block"},button:{width:"100%",padding:"10px",marginBottom:"8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s"},runButton:{backgroundColor:"#1a4a1a",borderColor:"#2a6a2a"},resetButton:{backgroundColor:"#1a1a1a",borderColor:"#555"},fixedPointItem:{marginBottom:"6px",fontSize:"12px",padding:"6px",background:"#0f0f0f",borderRadius:"4px"},info:{marginTop:"16px",padding:"12px",backgroundColor:"#0f0f0f",borderRadius:"4px",fontSize:"11px",lineHeight:"1.6",color:"#888"},infoHeader:{fontSize:"12px",fontWeight:"600",color:"#4CAF50",marginBottom:"8px"},viewport:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},canvas:{display:"block"}};_y.createRoot(document.getElementById("root")).render(W.jsx(ae.StrictMode,{children:W.jsx(PA,{})}));
