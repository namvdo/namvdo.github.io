(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Jf={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function ly(){if(p_)return Do;p_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var m_;function cy(){return m_||(m_=1,Jf.exports=ly()),Jf.exports}var k=cy(),$f={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function uy(){if(g_)return pe;g_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function y(O,rt,bt){this.props=O,this.context=rt,this.refs=M,this.updater=bt||E}y.prototype.isReactComponent={},y.prototype.setState=function(O,rt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,rt,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=y.prototype;function I(O,rt,bt){this.props=O,this.context=rt,this.refs=M,this.updater=bt||E}var C=I.prototype=new _;C.constructor=I,T(C,y.prototype),C.isPureReactComponent=!0;var D=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function G(O,rt,bt,At,Ft,jt){return bt=jt.ref,{$$typeof:o,type:O,key:rt,ref:bt!==void 0?bt:null,props:jt}}function J(O,rt){return G(O.type,rt,void 0,void 0,void 0,O.props)}function U(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function L(O){var rt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(bt){return rt[bt]})}var X=/\/+/g;function ot(O,rt){return typeof O=="object"&&O!==null&&O.key!=null?L(""+O.key):rt.toString(36)}function nt(){}function vt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(nt,nt):(O.status="pending",O.then(function(rt){O.status==="pending"&&(O.status="fulfilled",O.value=rt)},function(rt){O.status==="pending"&&(O.status="rejected",O.reason=rt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function _t(O,rt,bt,At,Ft){var jt=typeof O;(jt==="undefined"||jt==="boolean")&&(O=null);var st=!1;if(O===null)st=!0;else switch(jt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(O.$$typeof){case o:case t:st=!0;break;case v:return st=O._init,_t(st(O._payload),rt,bt,At,Ft)}}if(st)return Ft=Ft(O),st=At===""?"."+ot(O,0):At,D(Ft)?(bt="",st!=null&&(bt=st.replace(X,"$&/")+"/"),_t(Ft,rt,bt,"",function(ne){return ne})):Ft!=null&&(U(Ft)&&(Ft=J(Ft,bt+(Ft.key==null||O&&O.key===Ft.key?"":(""+Ft.key).replace(X,"$&/")+"/")+st)),rt.push(Ft)),1;st=0;var St=At===""?".":At+":";if(D(O))for(var Ot=0;Ot<O.length;Ot++)At=O[Ot],jt=St+ot(At,Ot),st+=_t(At,rt,bt,jt,Ft);else if(Ot=x(O),typeof Ot=="function")for(O=Ot.call(O),Ot=0;!(At=O.next()).done;)At=At.value,jt=St+ot(At,Ot++),st+=_t(At,rt,bt,jt,Ft);else if(jt==="object"){if(typeof O.then=="function")return _t(vt(O),rt,bt,At,Ft);throw rt=String(O),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return st}function B(O,rt,bt){if(O==null)return O;var At=[],Ft=0;return _t(O,At,"","",function(jt){return rt.call(bt,jt,Ft++)}),At}function at(O){if(O._status===-1){var rt=O._result;rt=rt(),rt.then(function(bt){(O._status===0||O._status===-1)&&(O._status=1,O._result=bt)},function(bt){(O._status===0||O._status===-1)&&(O._status=2,O._result=bt)}),O._status===-1&&(O._status=0,O._result=rt)}if(O._status===1)return O._result.default;throw O._result}var Y=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Tt(){}return pe.Children={map:B,forEach:function(O,rt,bt){B(O,function(){rt.apply(this,arguments)},bt)},count:function(O){var rt=0;return B(O,function(){rt++}),rt},toArray:function(O){return B(O,function(rt){return rt})||[]},only:function(O){if(!U(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},pe.Component=y,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=I,pe.StrictMode=r,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,pe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},pe.cache=function(O){return function(){return O.apply(null,arguments)}},pe.cloneElement=function(O,rt,bt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=T({},O.props),Ft=O.key,jt=void 0;if(rt!=null)for(st in rt.ref!==void 0&&(jt=void 0),rt.key!==void 0&&(Ft=""+rt.key),rt)!F.call(rt,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&rt.ref===void 0||(At[st]=rt[st]);var st=arguments.length-2;if(st===1)At.children=bt;else if(1<st){for(var St=Array(st),Ot=0;Ot<st;Ot++)St[Ot]=arguments[Ot+2];At.children=St}return G(O.type,Ft,void 0,void 0,jt,At)},pe.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},pe.createElement=function(O,rt,bt){var At,Ft={},jt=null;if(rt!=null)for(At in rt.key!==void 0&&(jt=""+rt.key),rt)F.call(rt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ft[At]=rt[At]);var st=arguments.length-2;if(st===1)Ft.children=bt;else if(1<st){for(var St=Array(st),Ot=0;Ot<st;Ot++)St[Ot]=arguments[Ot+2];Ft.children=St}if(O&&O.defaultProps)for(At in st=O.defaultProps,st)Ft[At]===void 0&&(Ft[At]=st[At]);return G(O,jt,void 0,void 0,null,Ft)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(O){return{$$typeof:h,render:O}},pe.isValidElement=U,pe.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:at}},pe.memo=function(O,rt){return{$$typeof:p,type:O,compare:rt===void 0?null:rt}},pe.startTransition=function(O){var rt=N.T,bt={};N.T=bt;try{var At=O(),Ft=N.S;Ft!==null&&Ft(bt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(Tt,Y)}catch(jt){Y(jt)}finally{N.T=rt}},pe.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},pe.use=function(O){return N.H.use(O)},pe.useActionState=function(O,rt,bt){return N.H.useActionState(O,rt,bt)},pe.useCallback=function(O,rt){return N.H.useCallback(O,rt)},pe.useContext=function(O){return N.H.useContext(O)},pe.useDebugValue=function(){},pe.useDeferredValue=function(O,rt){return N.H.useDeferredValue(O,rt)},pe.useEffect=function(O,rt,bt){var At=N.H;if(typeof bt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return At.useEffect(O,rt)},pe.useId=function(){return N.H.useId()},pe.useImperativeHandle=function(O,rt,bt){return N.H.useImperativeHandle(O,rt,bt)},pe.useInsertionEffect=function(O,rt){return N.H.useInsertionEffect(O,rt)},pe.useLayoutEffect=function(O,rt){return N.H.useLayoutEffect(O,rt)},pe.useMemo=function(O,rt){return N.H.useMemo(O,rt)},pe.useOptimistic=function(O,rt){return N.H.useOptimistic(O,rt)},pe.useReducer=function(O,rt,bt){return N.H.useReducer(O,rt,bt)},pe.useRef=function(O){return N.H.useRef(O)},pe.useState=function(O){return N.H.useState(O)},pe.useSyncExternalStore=function(O,rt,bt){return N.H.useSyncExternalStore(O,rt,bt)},pe.useTransition=function(){return N.H.useTransition()},pe.version="19.1.1",pe}var __;function Ch(){return __||(__=1,$f.exports=uy()),$f.exports}var ee=Ch(),td={exports:{}},Uo={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function fy(){return v_||(v_=1,(function(o){function t(B,at){var Y=B.length;B.push(at);t:for(;0<Y;){var Tt=Y-1>>>1,O=B[Tt];if(0<l(O,at))B[Tt]=at,B[Y]=O,Y=Tt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var at=B[0],Y=B.pop();if(Y!==at){B[0]=Y;t:for(var Tt=0,O=B.length,rt=O>>>1;Tt<rt;){var bt=2*(Tt+1)-1,At=B[bt],Ft=bt+1,jt=B[Ft];if(0>l(At,Y))Ft<O&&0>l(jt,At)?(B[Tt]=jt,B[Ft]=Y,Tt=Ft):(B[Tt]=At,B[bt]=Y,Tt=bt);else if(Ft<O&&0>l(jt,Y))B[Tt]=jt,B[Ft]=Y,Tt=Ft;else break t}}return at}function l(B,at){var Y=B.sortIndex-at.sortIndex;return Y!==0?Y:B.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,x=3,E=!1,T=!1,M=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var at=i(p);at!==null;){if(at.callback===null)r(p);else if(at.startTime<=B)r(p),at.sortIndex=at.expirationTime,t(m,at);else break;at=i(p)}}function N(B){if(M=!1,D(B),!T)if(i(m)!==null)T=!0,F||(F=!0,ot());else{var at=i(p);at!==null&&_t(N,at.startTime-B)}}var F=!1,G=-1,J=5,U=-1;function L(){return y?!0:!(o.unstable_now()-U<J)}function X(){if(y=!1,F){var B=o.unstable_now();U=B;var at=!0;try{t:{T=!1,M&&(M=!1,I(G),G=-1),E=!0;var Y=x;try{e:{for(D(B),g=i(m);g!==null&&!(g.expirationTime>B&&L());){var Tt=g.callback;if(typeof Tt=="function"){g.callback=null,x=g.priorityLevel;var O=Tt(g.expirationTime<=B);if(B=o.unstable_now(),typeof O=="function"){g.callback=O,D(B),at=!0;break e}g===i(m)&&r(m),D(B)}else r(m);g=i(m)}if(g!==null)at=!0;else{var rt=i(p);rt!==null&&_t(N,rt.startTime-B),at=!1}}break t}finally{g=null,x=Y,E=!1}at=void 0}}finally{at?ot():F=!1}}}var ot;if(typeof C=="function")ot=function(){C(X)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,vt=nt.port2;nt.port1.onmessage=X,ot=function(){vt.postMessage(null)}}else ot=function(){_(X,0)};function _t(B,at){G=_(function(){B(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(B){switch(x){case 1:case 2:case 3:var at=3;break;default:at=x}var Y=x;x=at;try{return B()}finally{x=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(B,at){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=x;x=B;try{return at()}finally{x=Y}},o.unstable_scheduleCallback=function(B,at,Y){var Tt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Tt+Y:Tt):Y=Tt,B){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Y+O,B={id:v++,callback:at,priorityLevel:B,startTime:Y,expirationTime:O,sortIndex:-1},Y>Tt?(B.sortIndex=Y,t(p,B),i(m)===null&&B===i(p)&&(M?(I(G),G=-1):M=!0,_t(N,Y-Tt))):(B.sortIndex=O,t(m,B),T||E||(T=!0,F||(F=!0,ot()))),B},o.unstable_shouldYield=L,o.unstable_wrapCallback=function(B){var at=x;return function(){var Y=x;x=at;try{return B.apply(this,arguments)}finally{x=Y}}}})(nd)),nd}var x_;function dy(){return x_||(x_=1,ed.exports=fy()),ed.exports}var id={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function hy(){if(y_)return Dn;y_=1;var o=Ch();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},Dn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:E}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.1.1",Dn}var S_;function py(){if(S_)return id.exports;S_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),id.exports=hy(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function my(){if(M_)return Uo;M_=1;var o=dy(),t=Ch(),i=py();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),e;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,s=f;break}if(A===s){S=!0,s=c,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,s=c;break}if(A===s){S=!0,s=f,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),C=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case N:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case C:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var _t=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Tt=[],O=-1;function rt(e){return{current:e}}function bt(e){0>O||(e.current=Tt[O],Tt[O]=null,O--)}function At(e,n){O++,Tt[O]=e.current,e.current=n}var Ft=rt(null),jt=rt(null),st=rt(null),St=rt(null);function Ot(e,n){switch(At(st,n),At(jt,e),At(Ft,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Vg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Vg(n),e=kg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}bt(Ft),At(Ft,e)}function ne(){bt(Ft),bt(jt),bt(st)}function Jt(e){e.memoizedState!==null&&At(St,e);var n=Ft.current,a=kg(n,e.type);n!==a&&(At(jt,e),At(Ft,a))}function he(e){jt.current===e&&(bt(Ft),bt(jt)),St.current===e&&(bt(St),To._currentValue=Y)}var Je=Object.prototype.hasOwnProperty,H=o.unstable_scheduleCallback,Ne=o.unstable_cancelCallback,ue=o.unstable_shouldYield,P=o.unstable_requestPaint,j=o.unstable_now,gt=o.unstable_getCurrentPriorityLevel,ut=o.unstable_ImmediatePriority,dt=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,Rt=o.unstable_LowPriority,w=o.unstable_IdlePriority,b=o.log,V=o.unstable_setDisableYieldValue,lt=null,ht=null;function tt(e){if(typeof b=="function"&&V(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(lt,e)}catch{}}var Pt=Math.clz32?Math.clz32:Yt,Dt=Math.log,Wt=Math.LN2;function Yt(e){return e>>>=0,e===0?32:31-(Dt(e)/Wt|0)|0}var wt=256,Ht=4194304;function $t(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?c=$t(s):(S&=A,S!==0?c=$t(S):a||(a=A&~e,a!==0&&(c=$t(a))))):(A=s&~f,A!==0?c=$t(A):S!==0?c=$t(S):a||(a=s&~e,a!==0&&(c=$t(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function de(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=wt;return wt<<=1,(wt&4194048)===0&&(wt=256),e}function Nt(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function It(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Xt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ut(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,it=e.hiddenUpdates;for(a=S&~a;0<a;){var xt=31-Pt(a),Mt=1<<xt;A[xt]=0,z[xt]=-1;var ct=it[xt];if(ct!==null)for(it[xt]=null,xt=0;xt<ct.length;xt++){var ft=ct[xt];ft!==null&&(ft.lane&=-536870913)}a&=~Mt}s!==0&&Et(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Et(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Qt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function fe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ce(){var e=at.p;return e!==0?e:(e=window.event,e===void 0?32:l_(e.type))}function mi(e,n){var a=at.p;try{return at.p=e,n()}finally{at.p=a}}var fn=Math.random().toString(36).slice(2),dn="__reactFiber$"+fn,$e="__reactProps$"+fn,Ri="__reactContainer$"+fn,br="__reactEvents$"+fn,tl="__reactListeners$"+fn,Tr="__reactHandles$"+fn,Bs="__reactResources$"+fn,Ci="__reactMarker$"+fn;function Ar(e){delete e[dn],delete e[$e],delete e[br],delete e[tl],delete e[Tr]}function zi(e){var n=e[dn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ri]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=jg(e);e!==null;){if(a=e[dn])return a;e=jg(e)}return n}e=a,a=e.parentNode}return null}function ca(e){if(e=e[dn]||e[Ri]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Wa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ua(e){var n=e[Bs];return n||(n=e[Bs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function on(e){e[Ci]=!0}var el=new Set,nl={};function R(e,n){Z(e,n),Z(e+"Capture",n)}function Z(e,n){for(nl[e]=n,e=0;e<n.length;e++)el.add(n[e])}var pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mt={},Q={};function Lt(e){return Je.call(Q,e)?!0:Je.call(mt,e)?!1:pt.test(e)?Q[e]=!0:(mt[e]=!0,!1)}function Gt(e,n,a){if(Lt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function qt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Vt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var re,oe;function te(e){if(re===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);re=n&&n[1]||"",oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+re+e+oe}var ge=!1;function we(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ft){var ct=ft}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ft){ct=ft}e.call(Mt.prototype)}}else{try{throw Error()}catch(ft){ct=ft}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ft){if(ft&&ct&&typeof ft.stack=="string")return[ft.stack,ct.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var z=S.split(`
`),it=A.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<it.length&&!it[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===it.length)for(s=z.length-1,c=it.length-1;1<=s&&0<=c&&z[s]!==it[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==it[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==it[c]){var xt=`
`+z[s].replace(" at new "," at ");return e.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",e.displayName)),xt}while(1<=s&&0<=c);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?te(a):""}function Ye(e){switch(e.tag){case 26:case 27:case 5:return te(e.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return te("Activity");default:return""}}function Ie(e){try{var n="";do n+=Ye(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ae(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(e){var n=ae(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ee(e){e._valueTracker||(e._valueTracker=qe(e))}function Rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ae(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function _n(e){return e.replace(Pn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(e,n,a,s,c,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,S,_e(n)):a!=null?Cn(e,S,_e(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+_e(A):e.removeAttribute("name")}function Bn(e,n,a,s,c,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=A?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Cn(e,n,a){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Mn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Rr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(_t(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Gn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var rv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||rv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function kh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Vh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Vh(e,f,n[f])}function Kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return ov.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cr=null,wr=null;function Xh(e){var n=ca(e);if(n&&(e=n.stateNode)){var a=e[$e]||null;t:switch(e=n.stateNode,n.type){case"input":if(ke(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[$e]||null;if(!c)throw Error(r(90));ke(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Rn(s)}break t;case"textarea":Mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var $c=!1;function Wh(e,n,a){if($c)return e(n,a);$c=!0;try{var s=e(n);return s}finally{if($c=!1,(Cr!==null||wr!==null)&&(Vl(),Cr&&(n=Cr,e=wr,wr=Cr=null,Xh(n),e)))for(n=0;n<e.length;n++)Xh(e[n])}}function Is(e,n){var a=e.stateNode;if(a===null)return null;var s=a[$e]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(Fi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){tu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{tu=!1}var fa=null,eu=null,al=null;function qh(){if(al)return al;var e,n=eu,a=n.length,s,c="value"in fa?fa.value:fa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return al=c.slice(e,1<s?1-s:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function jh(){return!1}function Vn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:jh,this.isPropagationStopped=jh,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Vn(qa),Fs=v({},qa,{view:0,detail:0}),lv=Vn(Fs),nu,iu,Hs,ll=v({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hs&&(Hs&&e.type==="mousemove"?(nu=e.screenX-Hs.screenX,iu=e.screenY-Hs.screenY):iu=nu=0,Hs=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),Yh=Vn(ll),cv=v({},ll,{dataTransfer:0}),uv=Vn(cv),fv=v({},Fs,{relatedTarget:0}),au=Vn(fv),dv=v({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=Vn(dv),pv=v({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mv=Vn(pv),gv=v({},qa,{data:0}),Zh=Vn(gv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xv[e])?!!n[e]:!1}function ru(){return yv}var Sv=v({},Fs,{key:function(e){if(e.key){var n=_v[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mv=Vn(Sv),Ev=v({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=Vn(Ev),bv=v({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Tv=Vn(bv),Av=v({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=Vn(Av),Cv=v({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Vn(Cv),Dv=v({},qa,{newState:0,oldState:0}),Uv=Vn(Dv),Lv=[9,13,27,32],su=Fi&&"CompositionEvent"in window,Gs=null;Fi&&"documentMode"in document&&(Gs=document.documentMode);var Nv=Fi&&"TextEvent"in window&&!Gs,Qh=Fi&&(!su||Gs&&8<Gs&&11>=Gs),Jh=" ",$h=!1;function tp(e,n){switch(e){case"keyup":return Lv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function Ov(e,n){switch(e){case"compositionend":return ep(n);case"keypress":return n.which!==32?null:($h=!0,Jh);case"textInput":return e=n.data,e===Jh&&$h?null:e;default:return null}}function Pv(e,n){if(Dr)return e==="compositionend"||!su&&tp(e,n)?(e=qh(),al=eu=fa=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qh&&n.locale!=="ko"?null:n.data;default:return null}}var Bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bv[e.type]:n==="textarea"}function ip(e,n,a,s){Cr?wr?wr.push(s):wr=[s]:Cr=s,n=Yl(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Vs=null,ks=null;function Iv(e){Ig(e,0)}function cl(e){var n=Wa(e);if(Rn(n))return e}function ap(e,n){if(e==="change")return n}var rp=!1;if(Fi){var ou;if(Fi){var lu="oninput"in document;if(!lu){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),lu=typeof sp.oninput=="function"}ou=lu}else ou=!1;rp=ou&&(!document.documentMode||9<document.documentMode)}function op(){Vs&&(Vs.detachEvent("onpropertychange",lp),ks=Vs=null)}function lp(e){if(e.propertyName==="value"&&cl(ks)){var n=[];ip(n,ks,e,Jc(e)),Wh(Iv,n)}}function zv(e,n,a){e==="focusin"?(op(),Vs=n,ks=a,Vs.attachEvent("onpropertychange",lp)):e==="focusout"&&op()}function Fv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(ks)}function Hv(e,n){if(e==="click")return cl(n)}function Gv(e,n){if(e==="input"||e==="change")return cl(n)}function Vv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Vv;function Xs(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Je.call(n,c)||!Zn(e[c],n[c]))return!1}return!0}function cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function up(e,n){var a=cp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=cp(a)}}function fp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gi(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var kv=Fi&&"documentMode"in document&&11>=document.documentMode,Ur=null,uu=null,Ws=null,fu=!1;function hp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Ur==null||Ur!==gi(s)||(s=Ur,"selectionStart"in s&&cu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ws&&Xs(Ws,s)||(Ws=s,s=Yl(uu,"onSelect"),0<s.length&&(n=new ol("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ur)))}function ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Lr={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},du={},pp={};Fi&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ya(e){if(du[e])return du[e];if(!Lr[e])return e;var n=Lr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in pp)return du[e]=n[a];return e}var mp=Ya("animationend"),gp=Ya("animationiteration"),_p=Ya("animationstart"),Xv=Ya("transitionrun"),Wv=Ya("transitionstart"),qv=Ya("transitioncancel"),vp=Ya("transitionend"),xp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function _i(e,n){xp.set(e,n),R(n,[e])}var yp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=yp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ie(n)},yp.set(e,n),n)}return{value:e,source:n,stack:Ie(n)}}var si=[],Nr=0,pu=0;function ul(){for(var e=Nr,n=pu=Nr=0;n<e;){var a=si[n];si[n++]=null;var s=si[n];si[n++]=null;var c=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&Sp(a,c,f)}}function fl(e,n,a,s){si[Nr++]=e,si[Nr++]=n,si[Nr++]=a,si[Nr++]=s,pu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function mu(e,n,a,s){return fl(e,n,a,s),dl(e)}function Or(e,n){return fl(e,null,null,n),dl(e)}function Sp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pt(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function dl(e){if(50<_o)throw _o=0,Mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Pr={};function jv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,s){return new jv(e,n,a,s)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,s,c,f){var S=0;if(s=e,typeof e=="function")gu(e)&&(S=1);else if(typeof e=="string")S=Zx(e,a,Ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Kn(31,a,n,c),e.elementType=U,e.lanes=f,e;case T:return Za(a.children,c,f,n);case M:S=8,c|=24;break;case y:return e=Kn(12,a,n,c|2),e.elementType=y,e.lanes=f,e;case N:return e=Kn(13,a,n,c),e.elementType=N,e.lanes=f,e;case F:return e=Kn(19,a,n,c),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case C:S=10;break t;case I:S=9;break t;case D:S=11;break t;case G:S=14;break t;case J:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Kn(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Za(e,n,a,s){return e=Kn(7,e,s,n),e.lanes=a,e}function _u(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function vu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Br=[],Ir=0,pl=null,ml=0,oi=[],li=0,Ka=null,Gi=1,Vi="";function Qa(e,n){Br[Ir++]=ml,Br[Ir++]=pl,pl=e,ml=n}function Ep(e,n,a){oi[li++]=Gi,oi[li++]=Vi,oi[li++]=Ka,Ka=e;var s=Gi;e=Vi;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Gi=1<<32-Pt(n)+c|a<<c|s,Vi=f+e}else Gi=1<<f|a<<c|s,Vi=e}function xu(e){e.return!==null&&(Qa(e,1),Ep(e,1,0))}function yu(e){for(;e===pl;)pl=Br[--Ir],Br[Ir]=null,ml=Br[--Ir],Br[Ir]=null;for(;e===Ka;)Ka=oi[--li],oi[li]=null,Vi=oi[--li],oi[li]=null,Gi=oi[--li],oi[li]=null}var In=null,en=null,Le=!1,Ja=null,wi=!1,Su=Error(r(519));function $a(e){var n=Error(r(418,""));throw Ys(ri(n,e)),Su}function bp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[dn]=e,n[$e]=s,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)Te(xo[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),Bn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ee(n);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),Rr(n,s.value,s.defaultValue,s.children),Ee(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Gg(n.textContent,a)?(s.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),s.onScroll!=null&&Te("scroll",n),s.onScrollEnd!=null&&Te("scrollend",n),s.onClick!=null&&(n.onclick=Zl),n=!0):n=!1,n||$a(e)}function Tp(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:In=In.return}}function qs(e){if(e!==In)return!1;if(!Le)return Tp(e),Le=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&en&&$a(e),Tp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){en=xi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}en=null}}else n===27?(n=en,Ra(e.type)?(e=Vf,Vf=null,en=e):en=n):en=In?xi(e.stateNode.nextSibling):null;return!0}function js(){en=In=null,Le=!1}function Ap(){var e=Ja;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Ja=null),e}function Ys(e){Ja===null?Ja=[e]:Ja.push(e)}var Mu=rt(null),tr=null,ki=null;function da(e,n,a){At(Mu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Mu.current,bt(Mu)}function Eu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function bu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Eu(f.return,a,e),s||(S=null);break t}f=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Eu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Zs(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;Zn(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===St.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}c=c.return}e!==null&&bu(n,e,a,s),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function er(e){tr=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Rp(tr,e)}function _l(e,n){return tr===null&&er(e),Rp(e,n)}function Rp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var Yv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Zv=o.unstable_scheduleCallback,Kv=o.unstable_NormalPriority,hn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new Yv,data:new Map,refCount:0}}function Ks(e){e.refCount--,e.refCount===0&&Zv(Kv,function(){e.controller.abort()})}var Qs=null,Au=0,zr=0,Fr=null;function Qv(e,n){if(Qs===null){var a=Qs=[];Au=0,zr=wf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Au++,n.then(Cp,Cp),n}function Cp(){if(--Au===0&&Qs!==null){Fr!==null&&(Fr.status="fulfilled");var e=Qs;Qs=null,zr=0,Fr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var wp=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qv(e,n),wp!==null&&wp(e,n)};var nr=rt(null);function Ru(){var e=nr.current;return e!==null?e:We.pooledCache}function vl(e,n){n===null?At(nr,nr.current):At(nr,n.pool)}function Dp(){var e=Ru();return e===null?null:{parent:hn._currentValue,pool:e}}var Js=Error(r(460)),Up=Error(r(474)),xl=Error(r(542)),Cu={then:function(){}};function Lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yl(){}function Np(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(yl,yl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e;default:if(typeof n.status=="string")n.then(yl,yl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e}throw $s=n,Js}}var $s=null;function Op(){if($s===null)throw Error(r(459));var e=$s;return $s=null,e}function Pp(e){if(e===Js||e===xl)throw Error(r(483))}var ha=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=dl(e),Sp(e,null,a),n}return fl(e,s,n,a),dl(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Qt(e,a)}}function Uu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function eo(){if(Lu){var e=Fr;if(e!==null)throw e}}function no(e,n,a,s){Lu=!1;var c=e.updateQueue;ha=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var z=A,it=z.next;z.next=null,S===null?f=it:S.next=it,S=z;var xt=e.alternate;xt!==null&&(xt=xt.updateQueue,A=xt.lastBaseUpdate,A!==S&&(A===null?xt.firstBaseUpdate=it:A.next=it,xt.lastBaseUpdate=z))}if(f!==null){var Mt=c.baseState;S=0,xt=it=z=null,A=f;do{var ct=A.lane&-536870913,ft=ct!==A.lane;if(ft?(Re&ct)===ct:(s&ct)===ct){ct!==0&&ct===zr&&(Lu=!0),xt!==null&&(xt=xt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ce=e,se=A;ct=n;var He=a;switch(se.tag){case 1:if(ce=se.payload,typeof ce=="function"){Mt=ce.call(He,Mt,ct);break t}Mt=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=se.payload,ct=typeof ce=="function"?ce.call(He,Mt,ct):ce,ct==null)break t;Mt=v({},Mt,ct);break t;case 2:ha=!0}}ct=A.callback,ct!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=c.callbacks,ft===null?c.callbacks=[ct]:ft.push(ct))}else ft={lane:ct,tag:A.tag,payload:A.payload,callback:A.callback,next:null},xt===null?(it=xt=ft,z=Mt):xt=xt.next=ft,S|=ct;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ft=A,A=ft.next,ft.next=null,c.lastBaseUpdate=ft,c.shared.pending=null}}while(!0);xt===null&&(z=Mt),c.baseState=z,c.firstBaseUpdate=it,c.lastBaseUpdate=xt,f===null&&(c.shared.lanes=0),Ea|=S,e.lanes=S,e.memoizedState=Mt}}function Bp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Ip(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Bp(a[e],n)}var Hr=rt(null),Sl=rt(0);function zp(e,n){e=Qi,At(Sl,e),At(Hr,n),Qi=e|n.baseLanes}function Nu(){At(Sl,Qi),At(Hr,Hr.current)}function Ou(){Qi=Sl.current,bt(Hr),bt(Sl)}var ga=0,ye=null,ze=null,ln=null,Ml=!1,Gr=!1,ir=!1,El=0,io=0,Vr=null,$v=0;function an(){throw Error(r(321))}function Pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,s,c,f){return ga=f,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Sm:Mm,ir=!1,f=a(s,c),ir=!1,Gr&&(f=Hp(n,a,s,c)),Fp(e),f}function Fp(e){B.H=wl;var n=ze!==null&&ze.next!==null;if(ga=0,ln=ze=ye=null,Ml=!1,io=0,Vr=null,n)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&gl(e)&&(vn=!0))}function Hp(e,n,a,s){ye=e;var c=0;do{if(Gr&&(Vr=null),io=0,Gr=!1,25<=c)throw Error(r(301));if(c+=1,ln=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=sx,f=n(a,s)}while(Gr);return f}function tx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ye.flags|=1024),n}function Iu(){var e=El!==0;return El=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fu(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}ga=0,ln=ze=ye=null,Gr=!1,io=El=0,Vr=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ye.memoizedState=ln=e:ln=ln.next=e,ln}function cn(){if(ze===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=ln===null?ye.memoizedState:ln.next;if(n!==null)ln=n,ze=e;else{if(e===null)throw ye.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},ln===null?ye.memoizedState=ln=e:ln=ln.next=e}return ln}function Hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,Vr===null&&(Vr=[]),e=Np(Vr,e,n),n=ye,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Sm:Mm),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===C)return wn(e)}throw Error(r(438,String(e)))}function Gu(e){var n=null,a=ye.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ye.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hu(),ye.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=L;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=cn();return Vu(n,ze,e)}function Vu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=S=null,z=null,it=n,xt=!1;do{var Mt=it.lane&-536870913;if(Mt!==it.lane?(Re&Mt)===Mt:(ga&Mt)===Mt){var ct=it.revertLane;if(ct===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Mt===zr&&(xt=!0);else if((ga&ct)===ct){it=it.next,ct===zr&&(xt=!0);continue}else Mt={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},z===null?(A=z=Mt,S=f):z=z.next=Mt,ye.lanes|=ct,Ea|=ct;Mt=it.action,ir&&a(f,Mt),f=it.hasEagerState?it.eagerState:a(f,Mt)}else ct={lane:Mt,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},z===null?(A=z=ct,S=f):z=z.next=ct,ye.lanes|=Mt,Ea|=Mt;it=it.next}while(it!==null&&it!==n);if(z===null?S=f:z.next=A,!Zn(f,e.memoizedState)&&(vn=!0,xt&&(a=Fr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function ku(e){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Zn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Gp(e,n,a){var s=ye,c=cn(),f=Le;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Zn((ze||c).memoizedState,a);S&&(c.memoizedState=a,vn=!0),c=c.queue;var A=Xp.bind(null,s,c,e);if(ro(2048,8,A,[e]),c.getSnapshot!==n||S||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,kr(9,Al(),kp.bind(null,s,c,a,n),null),We===null)throw Error(r(349));f||(ga&124)!==0||Vp(s,n,a)}return a}function Vp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ye.updateQueue,n===null?(n=Hu(),ye.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function kp(e,n,a,s){n.value=a,n.getSnapshot=s,Wp(n)&&qp(e)}function Xp(e,n,a){return a(function(){Wp(n)&&qp(e)})}function Wp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function qp(e){var n=Or(e,2);n!==null&&ei(n,e,2)}function Xu(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),ir){tt(!0);try{a()}finally{tt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function jp(e,n,a,s){return e.baseState=a,Vu(e,ze,typeof s=="function"?s:Wi)}function ex(e,n,a,s,c){if(Cl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Yp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var A=a(c,s),z=B.S;z!==null&&z(S,A),Zp(e,n,A)}catch(it){Wu(e,n,it)}finally{B.T=f}}else try{f=a(c,s),Zp(e,n,f)}catch(it){Wu(e,n,it)}}function Zp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Kp(e,n,s)},function(s){return Wu(e,n,s)}):Kp(e,n,a)}function Kp(e,n,a){n.status="fulfilled",n.value=a,Qp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Yp(e,a)))}function Wu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Qp(n),n=n.next;while(n!==s)}e.action=null}function Qp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Jp(e,n){return n}function $p(e,n){if(Le){var a=We.formState;if(a!==null){t:{var s=ye;if(Le){if(en){e:{for(var c=en,f=wi;c.nodeType!==8;){if(!f){c=null;break e}if(c=xi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){en=xi(c.nextSibling),s=c.data==="F!";break t}}$a(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:n},a.queue=s,a=vm.bind(null,ye,s),s.dispatch=a,s=Xu(!1),f=Ku.bind(null,ye,!1,s.queue),s=kn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=ex.bind(null,ye,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function tm(e){var n=cn();return em(n,ze,e)}function em(e,n,a){if(n=Vu(e,n,Jp)[0],e=Tl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ao(n)}catch(S){throw S===Js?xl:S}else s=n;n=cn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ye.flags|=2048,kr(9,Al(),nx.bind(null,c,a),null)),[s,f,e]}function nx(e,n){e.action=n}function nm(e){var n=cn(),a=ze;if(a!==null)return em(n,a,e);cn(),n=n.memoizedState,a=cn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function kr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ye.updateQueue,n===null&&(n=Hu(),ye.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Al(){return{destroy:void 0,resource:void 0}}function im(){return cn().memoizedState}function Rl(e,n,a,s){var c=kn();s=s===void 0?null:s,ye.flags|=e,c.memoizedState=kr(1|n,Al(),a,s)}function ro(e,n,a,s){var c=cn();s=s===void 0?null:s;var f=c.memoizedState.inst;ze!==null&&s!==null&&Pu(s,ze.memoizedState.deps)?c.memoizedState=kr(n,f,a,s):(ye.flags|=e,c.memoizedState=kr(1|n,f,a,s))}function am(e,n){Rl(8390656,8,e,n)}function rm(e,n){ro(2048,8,e,n)}function sm(e,n){return ro(4,2,e,n)}function om(e,n){return ro(4,4,e,n)}function lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cm(e,n,a){a=a!=null?a.concat([e]):null,ro(4,4,lm.bind(null,n,e),a)}function qu(){}function um(e,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Pu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function fm(e,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Pu(n,s[1]))return s[0];if(s=e(),ir){tt(!0);try{e()}finally{tt(!1)}}return a.memoizedState=[s,n],s}function ju(e,n,a){return a===void 0||(ga&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=pg(),ye.lanes|=e,Ea|=e,a)}function dm(e,n,a,s){return Zn(a,n)?a:Hr.current!==null?(e=ju(e,a,s),Zn(e,n)||(vn=!0),e):(ga&42)===0?(vn=!0,e.memoizedState=a):(e=pg(),ye.lanes|=e,Ea|=e,n)}function hm(e,n,a,s,c){var f=at.p;at.p=f!==0&&8>f?f:8;var S=B.T,A={};B.T=A,Ku(e,!1,n,a);try{var z=c(),it=B.S;if(it!==null&&it(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var xt=Jv(z,s);so(e,n,xt,ti(e))}else so(e,n,s,ti(e))}catch(Mt){so(e,n,{then:function(){},status:"rejected",reason:Mt},ti())}finally{at.p=f,B.T=S}}function ix(){}function Yu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=pm(e).queue;hm(e,c,n,Y,a===null?ix:function(){return mm(e),a(s)})}function pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function mm(e){var n=pm(e).next.queue;so(e,n,{},ti())}function Zu(){return wn(To)}function gm(){return cn().memoizedState}function _m(){return cn().memoizedState}function ax(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=pa(a);var s=ma(n,e,a);s!==null&&(ei(s,n,a),to(s,n,a)),n={cache:Tu()},e.payload=n;return}n=n.return}}function rx(e,n,a){var s=ti();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?xm(n,a):(a=mu(e,n,a,s),a!==null&&(ei(a,e,s),ym(a,n,s)))}function vm(e,n,a){var s=ti();so(e,n,a,s)}function so(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))xm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(c.hasEagerState=!0,c.eagerState=A,Zn(A,S))return fl(e,n,c,0),We===null&&ul(),!1}catch{}finally{}if(a=mu(e,n,c,s),a!==null)return ei(a,e,s),ym(a,n,s),!0}return!1}function Ku(e,n,a,s){if(s={lane:2,revertLane:wf(),action:s,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(r(479))}else n=mu(e,a,s,2),n!==null&&ei(n,e,2)}function Cl(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function xm(e,n){Gr=Ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ym(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Qt(e,a)}}var wl={readContext:wn,use:bl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Sm={readContext:wn,use:bl,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var s=e();if(ir){tt(!0);try{e()}finally{tt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=kn();if(a!==void 0){var c=a(n);if(ir){tt(!0);try{a(n)}finally{tt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=rx.bind(null,ye,e),[s.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,a=vm.bind(null,ye,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,n){var a=kn();return ju(a,e,n)},useTransition:function(){var e=Xu(!1);return e=hm.bind(null,ye,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ye,c=kn();if(Le){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Re&124)!==0||Vp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,am(Xp.bind(null,s,f,e),[e]),s.flags|=2048,kr(9,Al(),kp.bind(null,s,f,a,n),null),a},useId:function(){var e=kn(),n=We.identifierPrefix;if(Le){var a=Vi,s=Gi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=$v++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:$p,useActionState:$p,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,ye,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return kn().memoizedState=ax.bind(null,ye)}},Mm={readContext:wn,use:bl,useCallback:um,useContext:wn,useEffect:rm,useImperativeHandle:cm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:Tl,useRef:im,useState:function(){return Tl(Wi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=cn();return dm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Tl(Wi)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:Zu,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=cn();return jp(a,ze,e,n)},useMemoCache:Gu,useCacheRefresh:_m},sx={readContext:wn,use:bl,useCallback:um,useContext:wn,useEffect:rm,useImperativeHandle:cm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:ku,useRef:im,useState:function(){return ku(Wi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=cn();return ze===null?ju(a,e,n):dm(a,ze.memoizedState,e,n)},useTransition:function(){var e=ku(Wi)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:Zu,useFormState:nm,useActionState:nm,useOptimistic:function(e,n){var a=cn();return ze!==null?jp(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:_m},Xr=null,oo=0;function Dl(e){var n=oo;return oo+=1,Xr===null&&(Xr=[]),Np(Xr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Em(e){var n=e._init;return n(e._payload)}function bm(e){function n(K,W){if(e){var $=K.deletions;$===null?(K.deletions=[W],K.flags|=16):$.push(W)}}function a(K,W){if(!e)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function s(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function c(K,W){return K=Hi(K,W),K.index=0,K.sibling=null,K}function f(K,W,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<W?(K.flags|=67108866,W):$):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,W,$,yt){return W===null||W.tag!==6?(W=_u($,K.mode,yt),W.return=K,W):(W=c(W,$),W.return=K,W)}function z(K,W,$,yt){var Zt=$.type;return Zt===T?xt(K,W,$.props.children,yt,$.key):W!==null&&(W.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===J&&Em(Zt)===W.type)?(W=c(W,$.props),lo(W,$),W.return=K,W):(W=hl($.type,$.key,$.props,null,K.mode,yt),lo(W,$),W.return=K,W)}function it(K,W,$,yt){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=vu($,K.mode,yt),W.return=K,W):(W=c(W,$.children||[]),W.return=K,W)}function xt(K,W,$,yt,Zt){return W===null||W.tag!==7?(W=Za($,K.mode,yt,Zt),W.return=K,W):(W=c(W,$),W.return=K,W)}function Mt(K,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=_u(""+W,K.mode,$),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return $=hl(W.type,W.key,W.props,null,K.mode,$),lo($,W),$.return=K,$;case E:return W=vu(W,K.mode,$),W.return=K,W;case J:var yt=W._init;return W=yt(W._payload),Mt(K,W,$)}if(_t(W)||ot(W))return W=Za(W,K.mode,$,null),W.return=K,W;if(typeof W.then=="function")return Mt(K,Dl(W),$);if(W.$$typeof===C)return Mt(K,_l(K,W),$);Ul(K,W)}return null}function ct(K,W,$,yt){var Zt=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Zt!==null?null:A(K,W,""+$,yt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Zt?z(K,W,$,yt):null;case E:return $.key===Zt?it(K,W,$,yt):null;case J:return Zt=$._init,$=Zt($._payload),ct(K,W,$,yt)}if(_t($)||ot($))return Zt!==null?null:xt(K,W,$,yt,null);if(typeof $.then=="function")return ct(K,W,Dl($),yt);if($.$$typeof===C)return ct(K,W,_l(K,$),yt);Ul(K,$)}return null}function ft(K,W,$,yt,Zt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return K=K.get($)||null,A(W,K,""+yt,Zt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case x:return K=K.get(yt.key===null?$:yt.key)||null,z(W,K,yt,Zt);case E:return K=K.get(yt.key===null?$:yt.key)||null,it(W,K,yt,Zt);case J:var Se=yt._init;return yt=Se(yt._payload),ft(K,W,$,yt,Zt)}if(_t(yt)||ot(yt))return K=K.get($)||null,xt(W,K,yt,Zt,null);if(typeof yt.then=="function")return ft(K,W,$,Dl(yt),Zt);if(yt.$$typeof===C)return ft(K,W,$,_l(W,yt),Zt);Ul(W,yt)}return null}function ce(K,W,$,yt){for(var Zt=null,Se=null,ie=W,le=W=0,yn=null;ie!==null&&le<$.length;le++){ie.index>le?(yn=ie,ie=null):yn=ie.sibling;var De=ct(K,ie,$[le],yt);if(De===null){ie===null&&(ie=yn);break}e&&ie&&De.alternate===null&&n(K,ie),W=f(De,W,le),Se===null?Zt=De:Se.sibling=De,Se=De,ie=yn}if(le===$.length)return a(K,ie),Le&&Qa(K,le),Zt;if(ie===null){for(;le<$.length;le++)ie=Mt(K,$[le],yt),ie!==null&&(W=f(ie,W,le),Se===null?Zt=ie:Se.sibling=ie,Se=ie);return Le&&Qa(K,le),Zt}for(ie=s(ie);le<$.length;le++)yn=ft(ie,K,le,$[le],yt),yn!==null&&(e&&yn.alternate!==null&&ie.delete(yn.key===null?le:yn.key),W=f(yn,W,le),Se===null?Zt=yn:Se.sibling=yn,Se=yn);return e&&ie.forEach(function(La){return n(K,La)}),Le&&Qa(K,le),Zt}function se(K,W,$,yt){if($==null)throw Error(r(151));for(var Zt=null,Se=null,ie=W,le=W=0,yn=null,De=$.next();ie!==null&&!De.done;le++,De=$.next()){ie.index>le?(yn=ie,ie=null):yn=ie.sibling;var La=ct(K,ie,De.value,yt);if(La===null){ie===null&&(ie=yn);break}e&&ie&&La.alternate===null&&n(K,ie),W=f(La,W,le),Se===null?Zt=La:Se.sibling=La,Se=La,ie=yn}if(De.done)return a(K,ie),Le&&Qa(K,le),Zt;if(ie===null){for(;!De.done;le++,De=$.next())De=Mt(K,De.value,yt),De!==null&&(W=f(De,W,le),Se===null?Zt=De:Se.sibling=De,Se=De);return Le&&Qa(K,le),Zt}for(ie=s(ie);!De.done;le++,De=$.next())De=ft(ie,K,le,De.value,yt),De!==null&&(e&&De.alternate!==null&&ie.delete(De.key===null?le:De.key),W=f(De,W,le),Se===null?Zt=De:Se.sibling=De,Se=De);return e&&ie.forEach(function(oy){return n(K,oy)}),Le&&Qa(K,le),Zt}function He(K,W,$,yt){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var Zt=$.key;W!==null;){if(W.key===Zt){if(Zt=$.type,Zt===T){if(W.tag===7){a(K,W.sibling),yt=c(W,$.props.children),yt.return=K,K=yt;break t}}else if(W.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===J&&Em(Zt)===W.type){a(K,W.sibling),yt=c(W,$.props),lo(yt,$),yt.return=K,K=yt;break t}a(K,W);break}else n(K,W);W=W.sibling}$.type===T?(yt=Za($.props.children,K.mode,yt,$.key),yt.return=K,K=yt):(yt=hl($.type,$.key,$.props,null,K.mode,yt),lo(yt,$),yt.return=K,K=yt)}return S(K);case E:t:{for(Zt=$.key;W!==null;){if(W.key===Zt)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){a(K,W.sibling),yt=c(W,$.children||[]),yt.return=K,K=yt;break t}else{a(K,W);break}else n(K,W);W=W.sibling}yt=vu($,K.mode,yt),yt.return=K,K=yt}return S(K);case J:return Zt=$._init,$=Zt($._payload),He(K,W,$,yt)}if(_t($))return ce(K,W,$,yt);if(ot($)){if(Zt=ot($),typeof Zt!="function")throw Error(r(150));return $=Zt.call($),se(K,W,$,yt)}if(typeof $.then=="function")return He(K,W,Dl($),yt);if($.$$typeof===C)return He(K,W,_l(K,$),yt);Ul(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(a(K,W.sibling),yt=c(W,$),yt.return=K,K=yt):(a(K,W),yt=_u($,K.mode,yt),yt.return=K,K=yt),S(K)):a(K,W)}return function(K,W,$,yt){try{oo=0;var Zt=He(K,W,$,yt);return Xr=null,Zt}catch(ie){if(ie===Js||ie===xl)throw ie;var Se=Kn(29,ie,null,K.mode);return Se.lanes=yt,Se.return=K,Se}finally{}}}var Wr=bm(!0),Tm=bm(!1),ci=rt(null),Di=null;function _a(e){var n=e.alternate;At(pn,pn.current&1),At(ci,e),Di===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(Di=e)}function Am(e){if(e.tag===22){if(At(pn,pn.current),At(ci,e),Di===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Di=e)}}else va()}function va(){At(pn,pn.current),At(ci,ci.current)}function qi(e){bt(ci),Di===e&&(Di=null),bt(pn)}var pn=rt(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Qu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ti(),c=pa(s);c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,s),n!==null&&(ei(n,e,s),to(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ti(),c=pa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,s),n!==null&&(ei(n,e,s),to(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),s=pa(a);s.tag=2,n!=null&&(s.callback=n),n=ma(e,s,a),n!==null&&(ei(n,e,a),to(n,e,a))}};function Rm(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Xs(a,s)||!Xs(c,f):!0}function Cm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function ar(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function wm(e){Nl(e)}function Dm(e){console.error(e)}function Um(e){Nl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Lm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $u(e,n,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function Nm(e){return e=pa(e),e.tag=3,e}function Om(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Lm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Lm(n,a,s),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function ox(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Zs(n,a,c,!0),a=ci.current,a!==null){switch(a.tag){case 13:return Di===null?bf():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Af(e,s,c)),!1;case 22:return a.flags|=65536,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Af(e,s,c)),!1}throw Error(r(435,a.tag))}return Af(e,s,c),bf(),!1}if(Le)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Su&&(e=Error(r(422),{cause:s}),Ys(ri(e,a)))):(s!==Su&&(n=Error(r(423),{cause:s}),Ys(ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ri(s,a),c=$u(e.stateNode,s,c),Uu(e,c),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),go===null?go=[f]:go.push(f),nn!==4&&(nn=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=$u(a.stateNode,s,e),Uu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Nm(c),Om(c,e,a,s),Uu(a,c),!1}a=a.return}while(a!==null);return!1}var Pm=Error(r(461)),vn=!1;function En(e,n,a,s){n.child=e===null?Tm(n,null,a,s):Wr(n,e.child,a,s)}function Bm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var A in s)A!=="ref"&&(S[A]=s[A])}else S=s;return er(n),s=Bu(e,n,a,S,f,c),A=Iu(),e!==null&&!vn?(zu(e,n,c),ji(e,n,c)):(Le&&A&&xu(n),n.flags|=1,En(e,n,s,c),n.child)}function Im(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,zm(e,n,f,s,c)):(e=hl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xs,a(S,s)&&e.ref===n.ref)return ji(e,n,c)}return n.flags|=1,e=Hi(f,s),e.ref=n.ref,e.return=n,n.child=e}function zm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Xs(f,s)&&e.ref===n.ref)if(vn=!1,n.pendingProps=s=f,lf(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,ji(e,n,c)}return tf(e,n,a,s,c)}function Fm(e,n,a){var s=n.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Hm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Nu(),Am(n);else return n.lanes=n.childLanes=536870912,Hm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(vl(n,f.cachePool),zp(n,f),va(),n.memoizedState=null):(e!==null&&vl(n,null),Nu(),va());return En(e,n,c,a),n.child}function Hm(e,n,a,s){var c=Ru();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&vl(n,null),Nu(),Am(n),e!==null&&Zs(e,n,s,!0),null}function Pl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,s,c){return er(n),a=Bu(e,n,a,s,void 0,c),s=Iu(),e!==null&&!vn?(zu(e,n,c),ji(e,n,c)):(Le&&s&&xu(n),n.flags|=1,En(e,n,a,c),n.child)}function Gm(e,n,a,s,c,f){return er(n),n.updateQueue=null,a=Hp(n,s,a,c),Fp(e),s=Iu(),e!==null&&!vn?(zu(e,n,f),ji(e,n,f)):(Le&&s&&xu(n),n.flags|=1,En(e,n,a,f),n.child)}function Vm(e,n,a,s,c){if(er(n),n.stateNode===null){var f=Pr,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},wu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):Pr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Qu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ju.enqueueReplaceState(f,f.state,null),no(n,s,f,c),eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,z=ar(a,A);f.props=z;var it=f.context,xt=a.contextType;S=Pr,typeof xt=="object"&&xt!==null&&(S=wn(xt));var Mt=a.getDerivedStateFromProps;xt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,xt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||it!==S)&&Cm(n,f,s,S),ha=!1;var ct=n.memoizedState;f.state=ct,no(n,s,f,c),eo(),it=n.memoizedState,A||ct!==it||ha?(typeof Mt=="function"&&(Qu(n,a,Mt,s),it=n.memoizedState),(z=ha||Rm(n,a,z,s,ct,it,S))?(xt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=S,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Du(e,n),S=n.memoizedProps,xt=ar(a,S),f.props=xt,Mt=n.pendingProps,ct=f.context,it=a.contextType,z=Pr,typeof it=="object"&&it!==null&&(z=wn(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==Mt||ct!==z)&&Cm(n,f,s,z),ha=!1,ct=n.memoizedState,f.state=ct,no(n,s,f,c),eo();var ft=n.memoizedState;S!==Mt||ct!==ft||ha||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof A=="function"&&(Qu(n,a,A,s),ft=n.memoizedState),(xt=ha||Rm(n,a,xt,s,ct,ft,z)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ft,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ft,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ft),f.props=s,f.state=ft,f.context=z,s=xt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Pl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Wr(n,e.child,null,c),n.child=Wr(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ji(e,n,c),e}function km(e,n,a,s){return js(),n.flags|=256,En(e,n,a,s),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Dp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ui),e}function Xm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(pn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(c?_a(n):va(),Le){var A=en,z;if(z=A){t:{for(z=A,A=wi;z.nodeType!==8;){if(!A){A=null;break t}if(z=xi(z.nextSibling),z===null){A=null;break t}}A=z}A!==null?(n.memoizedState={dehydrated:A,treeContext:Ka!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},z=Kn(18,null,null,0),z.stateNode=A,z.return=n,n.child=z,In=n,en=null,z=!0):z=!1}z||$a(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Gf(A)?n.lanes=32:n.lanes=536870912,null;qi(n)}return A=s.children,s=s.fallback,c?(va(),c=n.mode,A=Bl({mode:"hidden",children:A},c),s=Za(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,c=n.child,c.memoizedState=nf(a),c.childLanes=af(e,S,a),n.memoizedState=ef,s):(_a(n),rf(n,A))}if(z=e.memoizedState,z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(va(),n.child=e.child,n.flags|=128,n=null):(va(),c=s.fallback,A=n.mode,s=Bl({mode:"visible",children:s.children},A),c=Za(c,A,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Wr(n,e.child,null,a),s=n.child,s.memoizedState=nf(a),s.childLanes=af(e,S,a),n.memoizedState=ef,n=c);else if(_a(n),Gf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var it=S.dgst;S=it,s=Error(r(419)),s.stack="",s.digest=S,Ys({value:s,source:null,stack:null}),n=sf(e,n,a)}else if(vn||Zs(e,n,a,!1),S=(a&e.childLanes)!==0,vn||S){if(S=We,S!==null&&(s=a&-a,s=(s&42)!==0?1:fe(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==z.retryLane))throw z.retryLane=s,Or(e,s),ei(S,e,s),Pm;A.data==="$?"||bf(),n=sf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,en=xi(A.nextSibling),In=n,Le=!0,Ja=null,wi=!1,e!==null&&(oi[li++]=Gi,oi[li++]=Vi,oi[li++]=Ka,Gi=e.id,Vi=e.overflow,Ka=n),n=rf(n,s.children),n.flags|=4096);return n}return c?(va(),c=s.fallback,A=n.mode,z=e.child,it=z.sibling,s=Hi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,it!==null?c=Hi(it,c):(c=Za(c,A,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,A=e.child.memoizedState,A===null?A=nf(a):(z=A.cachePool,z!==null?(it=hn._currentValue,z=z.parent!==it?{parent:it,pool:it}:z):z=Dp(),A={baseLanes:A.baseLanes|a,cachePool:z}),c.memoizedState=A,c.childLanes=af(e,S,a),n.memoizedState=ef,s):(_a(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sf(e,n,a){return Wr(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Eu(e.return,n,a)}function of(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function qm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(En(e,n,s.children,a),s=pn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wm(e,a,n);else if(e.tag===19)Wm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(At(pn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ll(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}of(n,!0,a,null,f);break;case"together":of(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function lx(e,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),da(n,hn,e.memoizedState.cache),js();break;case 27:case 5:Jt(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Xm(e,n,a):(_a(n),e=ji(e,n,a),e!==null?e.sibling:null);_a(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Zs(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return qm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),At(pn,pn.current),s)break;return null;case 22:case 23:return n.lanes=0,Fm(e,n,a);case 24:da(n,hn,e.memoizedState.cache)}return ji(e,n,a)}function jm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return vn=!1,lx(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Le&&(n.flags&1048576)!==0&&Ep(n,ml,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")gu(s)?(e=ar(s,e),n.tag=1,n=Vm(null,n,s,e,a)):(n.tag=0,n=tf(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===D){n.tag=11,n=Bm(null,n,s,e,a);break t}else if(c===G){n.tag=14,n=Im(null,n,s,e,a);break t}}throw n=vt(s)||s,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ar(s,n.pendingProps),Vm(e,n,s,c,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Du(e,n),no(n,s,null,a);var S=n.memoizedState;if(s=S.cache,da(n,hn,s),s!==f.cache&&bu(n,[hn],a,!0),eo(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=km(e,n,s,a);break t}else if(s!==c){c=ri(Error(r(424)),n),Ys(c),n=km(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=xi(e.firstChild),In=n,Le=!0,Ja=null,wi=!0,a=Tm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(js(),s===c){n=ji(e,n,a);break t}En(e,n,s,a)}n=n.child}return n;case 26:return Pl(e,n),e===null?(a=Qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,e=n.pendingProps,s=Kl(st.current).createElement(a),s[dn]=n,s[$e]=e,Tn(s,a,e),on(s),n.stateNode=s):n.memoizedState=Qg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Jt(n),e===null&&Le&&(s=n.stateNode=Yg(n.type,n.pendingProps,st.current),In=n,wi=!0,c=en,Ra(n.type)?(Vf=c,en=xi(s.firstChild)):en=c),En(e,n,n.pendingProps.children,a),Pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((c=s=en)&&(s=Bx(s,n.type,n.pendingProps,wi),s!==null?(n.stateNode=s,In=n,en=xi(s.firstChild),wi=!1,c=!0):c=!1),c||$a(n)),Jt(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,zf(c,f)?s=null:S!==null&&zf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Bu(e,n,tx,null,null,a),To._currentValue=c),Pl(e,n),En(e,n,s,a),n.child;case 6:return e===null&&Le&&((e=a=en)&&(a=Ix(a,n.pendingProps,wi),a!==null?(n.stateNode=a,In=n,en=null,e=!0):e=!1),e||$a(n)),null;case 13:return Xm(e,n,a);case 4:return Ot(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Wr(n,null,s,a):En(e,n,s,a),n.child;case 11:return Bm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,da(n,n.type,s.value),En(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,er(n),c=wn(c),s=s(c),n.flags|=1,En(e,n,s,a),n.child;case 14:return Im(e,n,n.type,n.pendingProps,a);case 15:return zm(e,n,n.type,n.pendingProps,a);case 19:return qm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Bl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Fm(e,n,a);case 24:return er(n),s=wn(hn),e===null?(c=Ru(),c===null&&(c=We,f=Tu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},wu(n),da(n,hn,c)):((e.lanes&a)!==0&&(Du(e,n),no(n,null,null,a),eo()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),da(n,hn,s)):(s=f.cache,da(n,hn,s),s!==c.cache&&bu(n,[hn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Yi(e){e.flags|=4}function Ym(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!n_(n)){if(n=ci.current,n!==null&&((Re&4194048)===Re?Di!==null:(Re&62914560)!==Re&&(Re&536870912)===0||n!==Di))throw $s=Cu,Up;e.flags|=8192}}function Il(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,Zr|=n)}function co(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function cx(e,n,a){var s=n.pendingProps;switch(yu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Xi(hn),ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qs(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ap())),Qe(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(Qe(n),Ym(n,a)):(Qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),Qe(n),Ym(n,a)):(Qe(n),n.flags&=-16777217):(e.memoizedProps!==s&&Yi(n),Qe(n),n.flags&=-16777217),null;case 27:he(n),a=st.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}e=Ft.current,qs(n)?bp(n):(e=Yg(c,s,a),n.stateNode=e,Yi(n))}return Qe(n),null;case 5:if(he(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(e=Ft.current,qs(n))bp(n);else{switch(c=Kl(st.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[dn]=n,e[$e]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Tn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=st.current,qs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=In,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[dn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Gg(e.nodeValue,a)),e||$a(n)}else e=Kl(e).createTextNode(s),e[dn]=n,n.stateNode=e}return Qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=qs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[dn]=n}else js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),c=!1}else c=Ap(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Qe(n),null;case 4:return ne(),e===null&&Nf(n.stateNode.containerInfo),Qe(n),null;case 10:return Xi(n.type),Qe(n),null;case 19:if(bt(pn),c=n.memoizedState,c===null)return Qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)co(c,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ll(e),f!==null){for(n.flags|=128,co(c,!1),e=f.updateQueue,n.updateQueue=e,Il(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Mp(a,e),a=a.sibling;return At(pn,pn.current&1|2),n.child}e=e.sibling}c.tail!==null&&j()>Hl&&(n.flags|=128,s=!0,co(c,!1),n.lanes=4194304)}else{if(!s)if(e=Ll(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Il(n,e),co(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Le)return Qe(n),null}else 2*j()-c.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,s=!0,co(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=j(),n.sibling=null,e=pn.current,At(pn,s?e&1|2:e&1),n):(Qe(n),null);case 22:case 23:return qi(n),Ou(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&bt(nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(hn),Qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ux(e,n){switch(yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(hn),ne(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));js()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return bt(pn),null;case 4:return ne(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),Ou(),e!==null&&bt(nr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(hn),null;case 25:return null;default:return null}}function Zm(e,n){switch(yu(n),n.tag){case 3:Xi(hn),ne();break;case 26:case 27:case 5:he(n);break;case 4:ne();break;case 13:qi(n);break;case 19:bt(pn);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),Ou(),e!==null&&bt(nr);break;case 24:Xi(hn)}}function uo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(A){Xe(n,n.return,A)}}function xa(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var z=a,it=A;try{it()}catch(xt){Xe(c,z,xt)}}}s=s.next}while(s!==f)}}catch(xt){Xe(n,n.return,xt)}}function Km(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ip(n,a)}catch(s){Xe(e,e.return,s)}}}function Qm(e,n,a){a.props=ar(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Xe(e,n,s)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Xe(e,n,c)}}function Ui(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Xe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Xe(e,n,c)}else a.current=null}function Jm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Xe(e,e.return,c)}}function cf(e,n,a){try{var s=e.stateNode;Ux(s,e.type,a,n),s[$e]=n}catch(c){Xe(e,e.return,c)}}function $m(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zl));else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function zl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}function tg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,s,a),n[dn]=e,n[$e]=a}catch(f){Xe(e,e.return,f)}}var Zi=!1,rn=!1,df=!1,eg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function fx(e,n){if(e=e.containerInfo,Bf=nc,e=dp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,z=-1,it=0,xt=0,Mt=e,ct=null;e:for(;;){for(var ft;Mt!==a||c!==0&&Mt.nodeType!==3||(A=S+c),Mt!==f||s!==0&&Mt.nodeType!==3||(z=S+s),Mt.nodeType===3&&(S+=Mt.nodeValue.length),(ft=Mt.firstChild)!==null;)ct=Mt,Mt=ft;for(;;){if(Mt===e)break e;if(ct===a&&++it===c&&(A=S),ct===f&&++xt===s&&(z=S),(ft=Mt.nextSibling)!==null)break;Mt=ct,ct=Mt.parentNode}Mt=ft}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},nc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ce=ar(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ce,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(se){Xe(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function ng(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),s&4&&uo(5,a);break;case 1:if(ya(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Xe(a,a.return,S)}else{var c=ar(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Xe(a,a.return,S)}}s&64&&Km(a),s&512&&fo(a,a.return);break;case 3:if(ya(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ip(e,n)}catch(S){Xe(a,a.return,S)}}break;case 27:n===null&&s&4&&tg(a);case 26:case 5:ya(e,a),n===null&&s&4&&Jm(a),s&512&&fo(a,a.return);break;case 12:ya(e,a);break;case 13:ya(e,a),s&4&&rg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yx.bind(null,a),zx(e,a))));break;case 22:if(s=a.memoizedState!==null||Zi,!s){n=n!==null&&n.memoizedState!==null||rn,c=Zi;var f=rn;Zi=s,(rn=n)&&!f?Sa(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),Zi=c,rn=f}break;case 30:break;default:ya(e,a)}}function ig(e){var n=e.alternate;n!==null&&(e.alternate=null,ig(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ar(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Xn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)ag(e,n,a),a=a.sibling}function ag(e,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(lt,a)}catch{}switch(a.tag){case 26:rn||Ui(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ui(a,n);var s=Ze,c=Xn;Ra(a.type)&&(Ze=a.stateNode,Xn=!1),Ki(e,n,a),So(a.stateNode),Ze=s,Xn=c;break;case 5:rn||Ui(a,n);case 6:if(s=Ze,c=Xn,Ze=null,Ki(e,n,a),Ze=s,Xn=c,Ze!==null)if(Xn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Xe(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Xe(a,n,f)}break;case 18:Ze!==null&&(Xn?(e=Ze,qg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wo(e)):qg(Ze,a.stateNode));break;case 4:s=Ze,c=Xn,Ze=a.stateNode.containerInfo,Xn=!0,Ki(e,n,a),Ze=s,Xn=c;break;case 0:case 11:case 14:case 15:rn||xa(2,a,n),rn||xa(4,a,n),Ki(e,n,a);break;case 1:rn||(Ui(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Qm(a,n,s)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:rn=(s=rn)||a.memoizedState!==null,Ki(e,n,a),rn=s;break;default:Ki(e,n,a)}}function rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wo(e)}catch(a){Xe(n,n.return,a)}}function dx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new eg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new eg),n;default:throw Error(r(435,e.tag))}}function hf(e,n){var a=dx(e);n.forEach(function(s){var c=Sx.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Qn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Ra(A.type)){Ze=A.stateNode,Xn=!1;break t}break;case 5:Ze=A.stateNode,Xn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Xn=!0;break t}A=A.return}if(Ze===null)throw Error(r(160));ag(f,S,c),Ze=null,Xn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)sg(n,e),n=n.sibling}var vi=null;function sg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(n,e),Jn(e),s&4&&(xa(3,e,e.return),uo(3,e),xa(5,e,e.return));break;case 1:Qn(n,e),Jn(e),s&512&&(rn||a===null||Ui(a,a.return)),s&64&&Zi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=vi;if(Qn(n,e),Jn(e),s&512&&(rn||a===null||Ui(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ci]||f[dn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[dn]=e,on(f),s=f;break t;case"link":var S=t_("link","href",c).get(s+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=t_("meta","content",c).get(s+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[dn]=e,on(f),s=f}e.stateNode=s}else e_(c,e.type,e.stateNode);else e.stateNode=$g(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?e_(c,e.type,e.stateNode):$g(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Qn(n,e),Jn(e),s&512&&(rn||a===null||Ui(a,a.return)),a!==null&&s&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Qn(n,e),Jn(e),s&512&&(rn||a===null||Ui(a,a.return)),e.flags&32){c=e.stateNode;try{Gn(c,"")}catch(ft){Xe(e,e.return,ft)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,cf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(df=!0);break;case 6:if(Qn(n,e),Jn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(ft){Xe(e,e.return,ft)}}break;case 3:if($l=null,c=vi,vi=Ql(n.containerInfo),Qn(n,e),vi=c,Jn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(ft){Xe(e,e.return,ft)}df&&(df=!1,og(e));break;case 4:s=vi,vi=Ql(e.stateNode.containerInfo),Qn(n,e),Jn(e),vi=s;break;case 12:Qn(n,e),Jn(e);break;case 13:Qn(n,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=j()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,it=Zi,xt=rn;if(Zi=it||c,rn=xt||z,Qn(n,e),rn=xt,Zi=it,Jn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Zi||rn||rr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=z.stateNode;var Mt=z.memoizedProps.style,ct=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;A.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(ft){Xe(z,z.return,ft)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(ft){Xe(z,z.return,ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,hf(e,a))));break;case 19:Qn(n,e),Jn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 30:break;case 21:break;default:Qn(n,e),Jn(e)}}function Jn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if($m(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(e);zl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Gn(S,""),a.flags&=-33);var A=uf(e);zl(e,A,S);break;case 3:case 4:var z=a.stateNode.containerInfo,it=uf(e);ff(e,it,z);break;default:throw Error(r(161))}}catch(xt){Xe(e,e.return,xt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function og(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;og(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ng(e,n.alternate,n),n=n.sibling}function rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),rr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qm(n,n.return,a),rr(n);break;case 27:So(n.stateNode);case 26:case 5:Ui(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(c,f,a),uo(4,f);break;case 1:if(Sa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(it){Xe(s,s.return,it)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Bp(z[c],A)}catch(it){Xe(s,s.return,it)}}a&&S&64&&Km(f),fo(f,f.return);break;case 27:tg(f);case 26:case 5:Sa(c,f,a),a&&s===null&&S&4&&Jm(f),fo(f,f.return);break;case 12:Sa(c,f,a);break;case 13:Sa(c,f,a),a&&S&4&&rg(c,f);break;case 22:f.memoizedState===null&&Sa(c,f,a),fo(f,f.return);break;case 30:break;default:Sa(c,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ks(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e))}function Li(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)lg(e,n,a,s),n=n.sibling}function lg(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,s),c&2048&&uo(9,n);break;case 1:Li(e,n,a,s);break;case 3:Li(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e)));break;case 12:if(c&2048){Li(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Xe(n,n.return,z)}}else Li(e,n,a,s);break;case 13:Li(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Li(e,n,a,s):ho(e,n):f._visibility&2?Li(e,n,a,s):(f._visibility|=2,qr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&pf(S,n);break;case 24:Li(e,n,a,s),c&2048&&mf(n.alternate,n);break;default:Li(e,n,a,s)}}function qr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,A=a,z=s,it=S.flags;switch(S.tag){case 0:case 11:case 15:qr(f,S,A,z,c),uo(8,S);break;case 23:break;case 22:var xt=S.stateNode;S.memoizedState!==null?xt._visibility&2?qr(f,S,A,z,c):ho(f,S):(xt._visibility|=2,qr(f,S,A,z,c)),c&&it&2048&&pf(S.alternate,S);break;case 24:qr(f,S,A,z,c),c&&it&2048&&mf(S.alternate,S);break;default:qr(f,S,A,z,c)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:ho(a,s),c&2048&&pf(s.alternate,s);break;case 24:ho(a,s),c&2048&&mf(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function jr(e){if(e.subtreeFlags&po)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 26:jr(e),e.flags&po&&e.memoizedState!==null&&Qx(vi,e.memoizedState,e.memoizedProps);break;case 5:jr(e);break;case 3:case 4:var n=vi;vi=Ql(e.stateNode.containerInfo),jr(e),vi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,jr(e),po=n):jr(e));break;default:jr(e)}}function ug(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,dg(s,e)}ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fg(e),e=e.sibling}function fg(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&xa(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):mo(e);break;default:mo(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,dg(s,e)}ug(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function dg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ks(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,xn=s;else t:for(a=e;xn!==null;){s=xn;var c=s.sibling,f=s.return;if(ig(s),s===a){xn=null;break t}if(c!==null){c.return=f,xn=c;break t}xn=f}}}var hx={getCacheForType:function(e){var n=wn(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},px=typeof WeakMap=="function"?WeakMap:Map,Pe=0,We=null,be=null,Re=0,Be=0,$n=null,Ma=!1,Yr=!1,gf=!1,Qi=0,nn=0,Ea=0,sr=0,_f=0,ui=0,Zr=0,go=null,Wn=null,vf=!1,xf=0,Hl=1/0,Gl=null,ba=null,bn=0,Ta=null,Kr=null,Qr=0,yf=0,Sf=null,hg=null,_o=0,Mf=null;function ti(){if((Pe&2)!==0&&Re!==0)return Re&-Re;if(B.T!==null){var e=zr;return e!==0?e:wf()}return Ce()}function pg(){ui===0&&(ui=(Re&536870912)===0||Le?q():536870912);var e=ci.current;return e!==null&&(e.flags|=32),ui}function ei(e,n,a){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Aa(e,Re,ui,!1)),Xt(e,a),((Pe&2)===0||e!==We)&&(e===We&&((Pe&2)===0&&(sr|=a),nn===4&&Aa(e,Re,ui,!1)),Ni(e))}function mg(e,n,a){if((Pe&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||zt(e,n),c=s?_x(e,n):Tf(e,n,!0),f=s;do{if(c===0){Yr&&!s&&Aa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!mx(a)){c=Tf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;c=go;var z=A.current.memoizedState.isDehydrated;if(z&&(Jr(A,S).flags|=256),S=Tf(A,S,!1),S!==2){if(gf&&!z){A.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=Wn,Wn=c,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Jr(e,0),Aa(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Aa(s,n,ui,!Ma);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=xf+300-j(),10<c)){if(Aa(s,n,ui,!Ma),Kt(s,0,!0)!==0)break t;s.timeoutHandle=Xg(gg.bind(null,s,a,Wn,Gl,vf,n,ui,sr,Zr,Ma,f,2,-0,0),c);break t}gg(s,a,Wn,Gl,vf,n,ui,sr,Zr,Ma,f,0,-0,0)}}break}while(!0);Ni(e)}function gg(e,n,a,s,c,f,S,A,z,it,xt,Mt,ct,ft){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:Kx},cg(n),Mt=Jx(),Mt!==null)){e.cancelPendingCommit=Mt(Eg.bind(null,e,n,f,a,s,c,S,A,z,xt,1,ct,ft)),Aa(e,f,S,!it);return}Eg(e,n,f,a,s,c,S,A,z)}function mx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(e,n,a,s){n&=~_f,n&=~sr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&Et(e,a,n)}function Vl(){return(Pe&6)===0?(vo(0),!1):!0}function Ef(){if(be!==null){if(Be===0)var e=be.return;else e=be,ki=tr=null,Fu(e),Xr=null,oo=0,e=be;for(;e!==null;)Zm(e.alternate,e),e=e.return;be=null}}function Jr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Nx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ef(),We=e,be=a=Hi(e.current,null),Re=n,Be=0,$n=null,Ma=!1,Yr=zt(e,n),gf=!1,Zr=ui=_f=sr=Ea=nn=0,Wn=go=null,vf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=e[c],s&=~f}return Qi=n,ul(),a}function _g(e,n){ye=null,B.H=wl,n===Js||n===xl?(n=Op(),Be=3):n===Up?(n=Op(),Be=4):Be=n===Pm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,be===null&&(nn=1,Ol(e,ri(n,e.current)))}function vg(){var e=B.H;return B.H=wl,e===null?wl:e}function xg(){var e=B.A;return B.A=hx,e}function bf(){nn=4,Ma||(Re&4194048)!==Re&&ci.current!==null||(Yr=!0),(Ea&134217727)===0&&(sr&134217727)===0||We===null||Aa(We,Re,ui,!1)}function Tf(e,n,a){var s=Pe;Pe|=2;var c=vg(),f=xg();(We!==e||Re!==n)&&(Gl=null,Jr(e,n)),n=!1;var S=nn;t:do try{if(Be!==0&&be!==null){var A=be,z=$n;switch(Be){case 8:Ef(),S=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var it=Be;if(Be=0,$n=null,$r(e,A,z,it),a&&Yr){S=0;break t}break;default:it=Be,Be=0,$n=null,$r(e,A,z,it)}}gx(),S=nn;break}catch(xt){_g(e,xt)}while(!0);return n&&e.shellSuspendCounter++,ki=tr=null,Pe=s,B.H=c,B.A=f,be===null&&(We=null,Re=0,ul()),S}function gx(){for(;be!==null;)yg(be)}function _x(e,n){var a=Pe;Pe|=2;var s=vg(),c=xg();We!==e||Re!==n?(Gl=null,Hl=j()+500,Jr(e,n)):Yr=zt(e,n);t:do try{if(Be!==0&&be!==null){n=be;var f=$n;e:switch(Be){case 1:Be=0,$n=null,$r(e,n,f,1);break;case 2:case 9:if(Lp(f)){Be=0,$n=null,Sg(n);break}n=function(){Be!==2&&Be!==9||We!==e||(Be=7),Ni(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Lp(f)?(Be=0,$n=null,Sg(n)):(Be=0,$n=null,$r(e,n,f,7));break;case 5:var S=null;switch(be.tag){case 26:S=be.memoizedState;case 5:case 27:var A=be;if(!S||n_(S)){Be=0,$n=null;var z=A.sibling;if(z!==null)be=z;else{var it=A.return;it!==null?(be=it,kl(it)):be=null}break e}}Be=0,$n=null,$r(e,n,f,5);break;case 6:Be=0,$n=null,$r(e,n,f,6);break;case 8:Ef(),nn=6;break t;default:throw Error(r(462))}}vx();break}catch(xt){_g(e,xt)}while(!0);return ki=tr=null,B.H=s,B.A=c,Pe=a,be!==null?0:(We=null,Re=0,ul(),nn)}function vx(){for(;be!==null&&!ue();)yg(be)}function yg(e){var n=jm(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?kl(e):be=n}function Sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Gm(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=Gm(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Fu(n);default:Zm(a,n),n=be=Mp(n,Qi),n=jm(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?kl(e):be=n}function $r(e,n,a,s){ki=tr=null,Fu(n),Xr=null,oo=0;var c=n.return;try{if(ox(e,c,n,a,Re)){nn=1,Ol(e,ri(a,e.current)),be=null;return}}catch(f){if(c!==null)throw be=c,f;nn=1,Ol(e,ri(a,e.current)),be=null;return}n.flags&32768?(Le||s===1?e=!0:Yr||(Re&536870912)!==0?e=!1:(Ma=e=!0,(s===2||s===9||s===3||s===6)&&(s=ci.current,s!==null&&s.tag===13&&(s.flags|=16384))),Mg(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){Mg(n,Ma);return}e=n.return;var a=cx(n.alternate,n,Qi);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);nn===0&&(nn=5)}function Mg(e,n){do{var a=ux(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);nn=6,be=null}function Eg(e,n,a,s,c,f,S,A,z){e.cancelPendingCommit=null;do Xl();while(bn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pu,Ut(e,a,f,S,A,z),e===We&&(be=We=null,Re=0),Kr=n,Ta=e,Qr=a,yf=f,Sf=c,hg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mx(Ct,function(){return Cg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,c=at.p,at.p=2,S=Pe,Pe|=4;try{fx(e,n,a)}finally{Pe=S,at.p=c,B.T=s}}bn=1,bg(),Tg(),Ag()}}function bg(){if(bn===1){bn=0;var e=Ta,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=at.p;at.p=2;var c=Pe;Pe|=4;try{sg(n,e);var f=If,S=dp(e.containerInfo),A=f.focusedElem,z=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&fp(A.ownerDocument.documentElement,A)){if(z!==null&&cu(A)){var it=z.start,xt=z.end;if(xt===void 0&&(xt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(xt,A.value.length);else{var Mt=A.ownerDocument||document,ct=Mt&&Mt.defaultView||window;if(ct.getSelection){var ft=ct.getSelection(),ce=A.textContent.length,se=Math.min(z.start,ce),He=z.end===void 0?se:Math.min(z.end,ce);!ft.extend&&se>He&&(S=He,He=se,se=S);var K=up(A,se),W=up(A,He);if(K&&W&&(ft.rangeCount!==1||ft.anchorNode!==K.node||ft.anchorOffset!==K.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var $=Mt.createRange();$.setStart(K.node,K.offset),ft.removeAllRanges(),se>He?(ft.addRange($),ft.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),ft.addRange($))}}}}for(Mt=[],ft=A;ft=ft.parentNode;)ft.nodeType===1&&Mt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Mt.length;A++){var yt=Mt[A];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}nc=!!Bf,If=Bf=null}finally{Pe=c,at.p=s,B.T=a}}e.current=n,bn=2}}function Tg(){if(bn===2){bn=0;var e=Ta,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=at.p;at.p=2;var c=Pe;Pe|=4;try{ng(e,n.alternate,n)}finally{Pe=c,at.p=s,B.T=a}}bn=3}}function Ag(){if(bn===4||bn===3){bn=0,P();var e=Ta,n=Kr,a=Qr,s=hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,Kr=Ta=null,Rg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ba=null),Oe(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(lt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,c=at.p,at.p=2,B.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var A=s[S];f(A.value,{componentStack:A.stack})}}finally{B.T=n,at.p=c}}(Qr&3)!==0&&Xl(),Ni(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Mf?_o++:(_o=0,Mf=e):_o=0,vo(0)}}function Rg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ks(n)))}function Xl(e){return bg(),Tg(),Ag(),Cg()}function Cg(){if(bn!==5)return!1;var e=Ta,n=yf;yf=0;var a=Oe(Qr),s=B.T,c=at.p;try{at.p=32>a?32:a,B.T=null,a=Sf,Sf=null;var f=Ta,S=Qr;if(bn=0,Kr=Ta=null,Qr=0,(Pe&6)!==0)throw Error(r(331));var A=Pe;if(Pe|=4,fg(f.current),lg(f,f.current,S,a),Pe=A,vo(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(lt,f)}catch{}return!0}finally{at.p=c,B.T=s,Rg(e,n)}}function wg(e,n,a){n=ri(a,n),n=$u(e.stateNode,n,2),e=ma(e,n,2),e!==null&&(Xt(e,2),Ni(e))}function Xe(e,n,a){if(e.tag===3)wg(e,e,a);else for(;n!==null;){if(n.tag===3){wg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){e=ri(a,e),a=Nm(2),s=ma(n,a,2),s!==null&&(Om(a,s,n,e),Xt(s,2),Ni(s));break}}n=n.return}}function Af(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new px;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(gf=!0,c.add(a),e=xx.bind(null,e,n,a),n.then(e,e))}function xx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Re&a)===a&&(nn===4||nn===3&&(Re&62914560)===Re&&300>j()-xf?(Pe&2)===0&&Jr(e,0):_f|=a,Zr===Re&&(Zr=0)),Ni(e)}function Dg(e,n){n===0&&(n=Nt()),e=Or(e,n),e!==null&&(Xt(e,n),Ni(e))}function yx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Dg(e,a)}function Sx(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Dg(e,a)}function Mx(e,n){return H(e,n)}var Wl=null,ts=null,Rf=!1,ql=!1,Cf=!1,or=0;function Ni(e){e!==ts&&e.next===null&&(ts===null?Wl=ts=e:ts=ts.next=e),ql=!0,Rf||(Rf=!0,bx())}function vo(e,n){if(!Cf&&ql){Cf=!0;do for(var a=!1,s=Wl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=c&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Og(s,f))}else f=Re,f=Kt(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||zt(s,f)||(a=!0,Og(s,f));s=s.next}while(a);Cf=!1}}function Ex(){Ug()}function Ug(){ql=Rf=!1;var e=0;or!==0&&(Lx()&&(e=or),or=0);for(var n=j(),a=null,s=Wl;s!==null;){var c=s.next,f=Lg(s,n);f===0?(s.next=null,a===null?Wl=c:a.next=c,c===null&&(ts=a)):(a=s,(e!==0||(f&3)!==0)&&(ql=!0)),s=c}vo(e)}function Lg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Pt(f),A=1<<S,z=c[S];z===-1?((A&a)===0||(A&s)!==0)&&(c[S]=de(A,n)):z<=n&&(e.expiredLanes|=A),f&=~A}if(n=We,a=Re,a=Kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ne(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Ne(s),Oe(a)){case 2:case 8:a=dt;break;case 32:a=Ct;break;case 268435456:a=w;break;default:a=Ct}return s=Ng.bind(null,e),a=H(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Ne(s),e.callbackPriority=2,e.callbackNode=null,2}function Ng(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var s=Re;return s=Kt(e,e===We?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(mg(e,s,n),Lg(e,j()),e.callbackNode!=null&&e.callbackNode===a?Ng.bind(null,e):null)}function Og(e,n){if(Xl())return null;mg(e,n,!0)}function bx(){Ox(function(){(Pe&6)!==0?H(ut,Ex):Ug()})}function wf(){return or===0&&(or=q()),or}function Pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function Bg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Tx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Pg((c[$e]||null).action),S=s.submitter;S&&(n=(n=S[$e]||null)?Pg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new ol("action","action",null,s,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(or!==0){var z=S?Bg(c,S):new FormData(c);Yu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=S?Bg(c,S):new FormData(c),Yu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var Df=0;Df<hu.length;Df++){var Uf=hu[Df],Ax=Uf.toLowerCase(),Rx=Uf[0].toUpperCase()+Uf.slice(1);_i(Ax,"on"+Rx)}_i(mp,"onAnimationEnd"),_i(gp,"onAnimationIteration"),_i(_p,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Xv,"onTransitionRun"),_i(Wv,"onTransitionStart"),_i(qv,"onTransitionCancel"),_i(vp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Ig(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var A=s[S],z=A.instance,it=A.currentTarget;if(A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=it;try{f(c)}catch(xt){Nl(xt)}c.currentTarget=null,f=z}else for(S=0;S<s.length;S++){if(A=s[S],z=A.instance,it=A.currentTarget,A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=it;try{f(c)}catch(xt){Nl(xt)}c.currentTarget=null,f=z}}}}function Te(e,n){var a=n[br];a===void 0&&(a=n[br]=new Set);var s=e+"__bubble";a.has(s)||(zg(n,e,2,!1),a.add(s))}function Lf(e,n,a){var s=0;n&&(s|=4),zg(a,e,s,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[jl]){e[jl]=!0,el.forEach(function(a){a!=="selectionchange"&&(Cx.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Lf("selectionchange",!1,n))}}function zg(e,n,a,s){switch(l_(n)){case 2:var c=ey;break;case 8:c=ny;break;default:c=jf}a=c.bind(null,n,a,e),c=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Of(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var A=s.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=s.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=zi(A),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){s=f=S;continue t}A=A.parentNode}}s=s.return}Wh(function(){var it=f,xt=Jc(a),Mt=[];t:{var ct=xp.get(e);if(ct!==void 0){var ft=ol,ce=e;switch(e){case"keypress":if(rl(a)===0)break t;case"keydown":case"keyup":ft=Mv;break;case"focusin":ce="focus",ft=au;break;case"focusout":ce="blur",ft=au;break;case"beforeblur":case"afterblur":ft=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Tv;break;case mp:case gp:case _p:ft=hv;break;case vp:ft=Rv;break;case"scroll":case"scrollend":ft=lv;break;case"wheel":ft=wv;break;case"copy":case"cut":case"paste":ft=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Kh;break;case"toggle":case"beforetoggle":ft=Uv}var se=(n&4)!==0,He=!se&&(e==="scroll"||e==="scrollend"),K=se?ct!==null?ct+"Capture":null:ct;se=[];for(var W=it,$;W!==null;){var yt=W;if($=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||$===null||K===null||(yt=Is(W,K),yt!=null&&se.push(yo(W,yt,$))),He)break;W=W.return}0<se.length&&(ct=new ft(ct,ce,null,a,xt),Mt.push({event:ct,listeners:se}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ct&&a!==Qc&&(ce=a.relatedTarget||a.fromElement)&&(zi(ce)||ce[Ri]))break t;if((ft||ct)&&(ct=xt.window===xt?xt:(ct=xt.ownerDocument)?ct.defaultView||ct.parentWindow:window,ft?(ce=a.relatedTarget||a.toElement,ft=it,ce=ce?zi(ce):null,ce!==null&&(He=u(ce),se=ce.tag,ce!==He||se!==5&&se!==27&&se!==6)&&(ce=null)):(ft=null,ce=it),ft!==ce)){if(se=Yh,yt="onMouseLeave",K="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(se=Kh,yt="onPointerLeave",K="onPointerEnter",W="pointer"),He=ft==null?ct:Wa(ft),$=ce==null?ct:Wa(ce),ct=new se(yt,W+"leave",ft,a,xt),ct.target=He,ct.relatedTarget=$,yt=null,zi(xt)===it&&(se=new se(K,W+"enter",ce,a,xt),se.target=$,se.relatedTarget=He,yt=se),He=yt,ft&&ce)e:{for(se=ft,K=ce,W=0,$=se;$;$=es($))W++;for($=0,yt=K;yt;yt=es(yt))$++;for(;0<W-$;)se=es(se),W--;for(;0<$-W;)K=es(K),$--;for(;W--;){if(se===K||K!==null&&se===K.alternate)break e;se=es(se),K=es(K)}se=null}else se=null;ft!==null&&Fg(Mt,ct,ft,se,!1),ce!==null&&He!==null&&Fg(Mt,He,ce,se,!0)}}t:{if(ct=it?Wa(it):window,ft=ct.nodeName&&ct.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ct.type==="file")var Zt=ap;else if(np(ct))if(rp)Zt=Gv;else{Zt=Fv;var Se=zv}else ft=ct.nodeName,!ft||ft.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?it&&Kc(it.elementType)&&(Zt=ap):Zt=Hv;if(Zt&&(Zt=Zt(e,it))){ip(Mt,Zt,a,xt);break t}Se&&Se(e,ct,it),e==="focusout"&&it&&ct.type==="number"&&it.memoizedProps.value!=null&&Cn(ct,"number",ct.value)}switch(Se=it?Wa(it):window,e){case"focusin":(np(Se)||Se.contentEditable==="true")&&(Ur=Se,uu=it,Ws=null);break;case"focusout":Ws=uu=Ur=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,hp(Mt,a,xt);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":hp(Mt,a,xt)}var ie;if(su)t:{switch(e){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else Dr?tp(e,a)&&(le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Qh&&a.locale!=="ko"&&(Dr||le!=="onCompositionStart"?le==="onCompositionEnd"&&Dr&&(ie=qh()):(fa=xt,eu="value"in fa?fa.value:fa.textContent,Dr=!0)),Se=Yl(it,le),0<Se.length&&(le=new Zh(le,e,null,a,xt),Mt.push({event:le,listeners:Se}),ie?le.data=ie:(ie=ep(a),ie!==null&&(le.data=ie)))),(ie=Nv?Ov(e,a):Pv(e,a))&&(le=Yl(it,"onBeforeInput"),0<le.length&&(Se=new Zh("onBeforeInput","beforeinput",null,a,xt),Mt.push({event:Se,listeners:le}),Se.data=ie)),Tx(Mt,e,it,a,xt)}Ig(Mt,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Is(e,a),c!=null&&s.unshift(yo(e,c,f)),c=Is(e,n),c!=null&&s.push(yo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function es(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fg(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var A=a,z=A.alternate,it=A.stateNode;if(A=A.tag,z!==null&&z===s)break;A!==5&&A!==26&&A!==27||it===null||(z=it,c?(it=Is(a,f),it!=null&&S.unshift(yo(a,it,z))):c||(it=Is(a,f),it!=null&&S.push(yo(a,it,z)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var wx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function Hg(e){return(typeof e=="string"?e:""+e).replace(wx,`
`).replace(Dx,"")}function Gg(e,n){return n=Hg(n),Hg(e)===n}function Zl(){}function Fe(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Gn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Gn(e,""+s);break;case"className":qt(e,"class",s);break;case"tabIndex":qt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(e,a,s);break;case"style":kh(e,s,f);break;case"data":if(n!=="object"){qt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=il(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",c.name,c,null),Fe(e,n,"formEncType",c.formEncType,c,null),Fe(e,n,"formMethod",c.formMethod,c,null),Fe(e,n,"formTarget",c.formTarget,c,null)):(Fe(e,n,"encType",c.encType,c,null),Fe(e,n,"method",c.method,c,null),Fe(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=il(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Zl);break;case"onScroll":s!=null&&Te("scroll",e);break;case"onScrollEnd":s!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=il(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Gt(e,"popover",s);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Gt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sv.get(a)||a,Gt(e,a,s))}}function Pf(e,n,a,s,c,f){switch(a){case"style":kh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Gn(e,s):(typeof s=="number"||typeof s=="bigint")&&Gn(e,""+s);break;case"onScroll":s!=null&&Te("scroll",e);break;case"onScrollEnd":s!=null&&Te("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[$e]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Gt(e,a,s)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,f,S,a,null)}}c&&Fe(e,n,"srcSet",a.srcSet,a,null),s&&Fe(e,n,"src",a.src,a,null);return;case"input":Te("invalid",e);var A=f=S=c=null,z=null,it=null;for(s in a)if(a.hasOwnProperty(s)){var xt=a[s];if(xt!=null)switch(s){case"name":c=xt;break;case"type":S=xt;break;case"checked":z=xt;break;case"defaultChecked":it=xt;break;case"value":f=xt;break;case"defaultValue":A=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:Fe(e,n,s,xt,a,null)}}Bn(e,f,A,z,it,S,c,!1),Ee(e);return;case"select":Te("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":s=A;default:Fe(e,n,c,A,a,null)}n=f,a=S,e.multiple=!!s,n!=null?tn(e,!!s,n,!1):a!=null&&tn(e,!!s,a,!0);return;case"textarea":Te("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Fe(e,n,S,A,a,null)}Rr(e,s,c,f),Ee(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(e,n,z,s,a,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(s=0;s<xo.length;s++)Te(xo[s],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(s=a[it],s!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,it,s,a,null)}return;default:if(Kc(n)){for(xt in a)a.hasOwnProperty(xt)&&(s=a[xt],s!==void 0&&Pf(e,n,xt,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Fe(e,n,A,s,a,null))}function Ux(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,A=null,z=null,it=null,xt=null;for(ft in a){var Mt=a[ft];if(a.hasOwnProperty(ft)&&Mt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":z=Mt;default:s.hasOwnProperty(ft)||Fe(e,n,ft,null,s,Mt)}}for(var ct in s){var ft=s[ct];if(Mt=a[ct],s.hasOwnProperty(ct)&&(ft!=null||Mt!=null))switch(ct){case"type":f=ft;break;case"name":c=ft;break;case"checked":it=ft;break;case"defaultChecked":xt=ft;break;case"value":S=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:ft!==Mt&&Fe(e,n,ct,ft,s,Mt)}}ke(e,S,A,z,it,xt,f,c);return;case"select":ft=S=A=ct=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ft=z;default:s.hasOwnProperty(f)||Fe(e,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":ct=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==z&&Fe(e,n,c,f,s,z)}n=A,a=S,s=ft,ct!=null?tn(e,!!a,ct,!1):!!s!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":ft=ct=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(e,n,A,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":ct=c;break;case"defaultValue":ft=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Fe(e,n,S,c,s,f)}Mn(e,ct,ft);return;case"option":for(var ce in a)if(ct=a[ce],a.hasOwnProperty(ce)&&ct!=null&&!s.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Fe(e,n,ce,null,s,ct)}for(z in s)if(ct=s[z],ft=a[z],s.hasOwnProperty(z)&&ct!==ft&&(ct!=null||ft!=null))switch(z){case"selected":e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol";break;default:Fe(e,n,z,ct,s,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)ct=a[se],a.hasOwnProperty(se)&&ct!=null&&!s.hasOwnProperty(se)&&Fe(e,n,se,null,s,ct);for(it in s)if(ct=s[it],ft=a[it],s.hasOwnProperty(it)&&ct!==ft&&(ct!=null||ft!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Fe(e,n,it,ct,s,ft)}return;default:if(Kc(n)){for(var He in a)ct=a[He],a.hasOwnProperty(He)&&ct!==void 0&&!s.hasOwnProperty(He)&&Pf(e,n,He,void 0,s,ct);for(xt in s)ct=s[xt],ft=a[xt],!s.hasOwnProperty(xt)||ct===ft||ct===void 0&&ft===void 0||Pf(e,n,xt,ct,s,ft);return}}for(var K in a)ct=a[K],a.hasOwnProperty(K)&&ct!=null&&!s.hasOwnProperty(K)&&Fe(e,n,K,null,s,ct);for(Mt in s)ct=s[Mt],ft=a[Mt],!s.hasOwnProperty(Mt)||ct===ft||ct==null&&ft==null||Fe(e,n,Mt,ct,s,ft)}var Bf=null,If=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Lx(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var Xg=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(e){return Wg.resolve(null).then(e).catch(Px)}:Xg;function Px(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function qg(e,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=e.ownerDocument;if(a&1&&So(S.documentElement),a&2&&So(S.body),a&4)for(a=S.head,So(a),S=a.firstChild;S;){var A=S.nextSibling,z=S.nodeName;S[Ci]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=A}}if(c===0){e.removeChild(f),wo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);wo(n)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),Ar(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Bx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ci])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function Ix(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function zx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Vf=null;function jg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Yg(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ar(e)}var fi=new Map,Zg=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=at.d;at.d={f:Fx,r:Hx,D:Gx,C:Vx,L:kx,m:Xx,X:qx,S:Wx,M:jx};function Fx(){var e=Ji.f(),n=Vl();return e||n}function Hx(e){var n=ca(e);n!==null&&n.tag===5&&n.type==="form"?mm(n):Ji.r(e)}var ns=typeof document>"u"?null:document;function Kg(e,n,a){var s=ns;if(s&&typeof n=="string"&&n){var c=_n(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Zg.has(c)||(Zg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",e),on(n),s.head.appendChild(n)))}}function Gx(e){Ji.D(e),Kg("dns-prefetch",e,null)}function Vx(e,n){Ji.C(e,n),Kg("preconnect",e,n)}function kx(e,n,a){Ji.L(e,n,a);var s=ns;if(s&&e&&n){var c='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+_n(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+_n(a.imageSizes)+'"]')):c+='[href="'+_n(e)+'"]';var f=c;switch(n){case"style":f=is(e);break;case"script":f=as(e)}fi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(Mo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),Tn(n,"link",e),on(n),s.head.appendChild(n)))}}function Xx(e,n){Ji.m(e,n);var a=ns;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_n(s)+'"][href="'+_n(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(e)}if(!fi.has(f)&&(e=v({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),Tn(s,"link",e),on(s),a.head.appendChild(s)}}}function Wx(e,n,a){Ji.S(e,n,a);var s=ns;if(s&&e){var c=ua(s).hoistableStyles,f=is(e);n=n||"default";var S=c.get(f);if(!S){var A={loading:0,preload:null};if(S=s.querySelector(Mo(f)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&kf(e,a);var z=S=s.createElement("link");on(z),Tn(z,"link",e),z._p=new Promise(function(it,xt){z.onload=it,z.onerror=xt}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Jl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(f,S)}}}function qx(e,n){Ji.X(e,n);var a=ns;if(a&&e){var s=ua(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=v({src:e,async:!0},n),(n=fi.get(c))&&Xf(e,n),f=a.createElement("script"),on(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function jx(e,n){Ji.M(e,n);var a=ns;if(a&&e){var s=ua(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&Xf(e,n),f=a.createElement("script"),on(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Qg(e,n,a,s){var c=(c=st.current)?Ql(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=ua(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var f=ua(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(Mo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||Yx(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=ua(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+_n(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function Jg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Yx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),on(n),e.head.appendChild(n))}function as(e){return'[src="'+_n(e)+'"]'}function Eo(e){return"script[async]"+e}function $g(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+_n(a.href)+'"]');if(s)return n.instance=s,on(s),s;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),on(s),Tn(s,"style",c),Jl(s,a.precedence,e),n.instance=s;case"stylesheet":c=is(a.href);var f=e.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,on(f),f;s=Jg(a),(c=fi.get(c))&&kf(s,c),f=(e.ownerDocument||e).createElement("link"),on(f);var S=f;return S._p=new Promise(function(A,z){S.onload=A,S.onerror=z}),Tn(f,"link",s),n.state.loading|=4,Jl(f,a.precedence,e),n.instance=f;case"script":return f=as(a.src),(c=e.querySelector(Eo(f)))?(n.instance=c,on(c),c):(s=a,(c=fi.get(f))&&(s=v({},a),Xf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),on(c),Tn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Jl(s,a.precedence,e));return n.instance}function Jl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var A=s[S];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function t_(e,n,a){if($l===null){var s=new Map,c=$l=new Map;c.set(a,s)}else c=$l,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ci]||f[dn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=s.get(S);A?A.push(f):s.set(S,[f])}}return s}function e_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Zx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bo=null;function Kx(){}function Qx(e,n,a){if(bo===null)throw Error(r(475));var s=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=is(a.href),f=e.querySelector(Mo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=tc.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,on(f);return}f=e.ownerDocument||e,a=Jg(a),(c=fi.get(c))&&kf(a,c),f=f.createElement("link"),on(f);var S=f;S._p=new Promise(function(A,z){S.onload=A,S.onerror=z}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=tc.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Jx(){if(bo===null)throw Error(r(475));var e=bo;return e.stylesheets&&e.count===0&&Wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function tc(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function Wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach($x,e),ec=null,tc.call(e))}function $x(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var s=a.get(null);else{a=new Map,ec.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=tc.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var To={$$typeof:C,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function ty(e,n,a,s,c,f,S,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=It(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=It(0),this.hiddenUpdates=It(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function i_(e,n,a,s,c,f,S,A,z,it,xt,Mt){return e=new ty(e,n,a,S,A,z,it,Mt),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Tu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},wu(f),e}function a_(e){return e?(e=Pr,e):Pr}function r_(e,n,a,s,c,f){c=a_(c),s.context===null?s.context=c:s.pendingContext=c,s=pa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ma(e,s,n),a!==null&&(ei(a,e,n),to(a,e,n))}function s_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){s_(e,n),(e=e.alternate)&&s_(e,n)}function o_(e){if(e.tag===13){var n=Or(e,67108864);n!==null&&ei(n,e,67108864),qf(e,67108864)}}var nc=!0;function ey(e,n,a,s){var c=B.T;B.T=null;var f=at.p;try{at.p=2,jf(e,n,a,s)}finally{at.p=f,B.T=c}}function ny(e,n,a,s){var c=B.T;B.T=null;var f=at.p;try{at.p=8,jf(e,n,a,s)}finally{at.p=f,B.T=c}}function jf(e,n,a,s){if(nc){var c=Yf(s);if(c===null)Of(e,n,s,ic,a),c_(e,s);else if(ay(c,e,n,a,s))s.stopPropagation();else if(c_(e,s),n&4&&-1<iy.indexOf(e)){for(;c!==null;){var f=ca(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=$t(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var z=1<<31-Pt(S);A.entanglements[1]|=z,S&=~z}Ni(f),(Pe&6)===0&&(Hl=j()+500,vo(0))}}break;case 13:A=Or(f,2),A!==null&&ei(A,f,2),Vl(),qf(f,2)}if(f=Yf(s),f===null&&Of(e,n,s,ic,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Of(e,n,s,null,a)}}function Yf(e){return e=Jc(e),Zf(e)}var ic=null;function Zf(e){if(ic=null,e=zi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function l_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case ut:return 2;case dt:return 8;case Ct:case Rt:return 32;case w:return 268435456;default:return 32}default:return 32}}var Kf=!1,Ca=null,wa=null,Da=null,Ao=new Map,Ro=new Map,Ua=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c_(e,n){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ca(n),n!==null&&o_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function ay(e,n,a,s,c){switch(n){case"focusin":return Ca=Co(Ca,e,n,a,s,c),!0;case"dragenter":return wa=Co(wa,e,n,a,s,c),!0;case"mouseover":return Da=Co(Da,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,s,c)),!0}return!1}function u_(e){var n=zi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,mi(e.priority,function(){if(a.tag===13){var s=ti();s=fe(s);var c=Or(a,s);c!==null&&ei(c,a,s),qf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Qc=s,a.target.dispatchEvent(s),Qc=null}else return n=ca(a),n!==null&&o_(n),e.blockedOn=a,!1;n.shift()}return!0}function f_(e,n,a){ac(e)&&a.delete(n)}function ry(){Kf=!1,Ca!==null&&ac(Ca)&&(Ca=null),wa!==null&&ac(wa)&&(wa=null),Da!==null&&ac(Da)&&(Da=null),Ao.forEach(f_),Ro.forEach(f_)}function rc(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ry)))}var sc=null;function d_(e){sc!==e&&(sc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sc===e&&(sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Zf(s||a)===null)continue;break}var f=ca(a);f!==null&&(e.splice(n,3),n-=3,Yu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function wo(e){function n(z){return rc(z,e)}Ca!==null&&rc(Ca,e),wa!==null&&rc(wa,e),Da!==null&&rc(Da,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Ua.length;a++){var s=Ua[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)u_(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[$e]||null;if(typeof f=="function")S||d_(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[$e]||null)A=S.formAction;else if(Zf(c)!==null)continue}else A=S.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),d_(a)}}}function Qf(e){this._internalRoot=e}oc.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ti();r_(a,s,e,n,null,null)},oc.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;r_(e.current,2,null,e,null,null),Vl(),n[Ri]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ce();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&u_(e)}};var h_=t.version;if(h_!=="19.1.1")throw Error(r(527,h_,"19.1.1"));at.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var sy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{lt=lc.inject(sy),ht=lc}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=wm,f=Dm,S=Um,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=i_(e,1,!1,null,null,a,s,c,f,S,A,null),e[Ri]=n.current,Nf(e),new Qf(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=wm,S=Dm,A=Um,z=null,it=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(it=a.formState)),n=i_(e,1,!0,n,a??null,s,c,f,S,A,z,it),n.context=a_(null),a=n.current,s=ti(),s=fe(s),c=pa(s),c.callback=null,ma(a,c,s),a=s,n.current.lanes=a,Xt(n,a),Ni(n),e[Ri]=n.current,Nf(e),new oc(n)},Uo.version="19.1.1",Uo}var E_;function gy(){if(E_)return td.exports;E_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),td.exports=my(),td.exports}var _y=gy();const vy="modulepreload",xy=function(o){return"/"+o},b_={},yy=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(v=>Promise.resolve(v).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=d?.nonce||d?.getAttribute("nonce");l=m(i.map(p=>{if(p=xy(p),p in b_)return;b_[p]=!0;const v=p.endsWith(".css"),g=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const x=document.createElement("link");if(x.rel=v?"stylesheet":vy,v||(x.as="script"),x.crossOrigin="",x.href=p,h&&x.setAttribute("nonce",h),document.head.appendChild(x),v)return new Promise((E,T)=>{x.addEventListener("load",E),x.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return l.then(d=>{for(const h of d||[])h.status==="rejected"&&u(h.reason);return t().catch(u)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="180",Sy=0,T_=1,My=2,C0=1,Ey=2,aa=3,ka=0,qn=1,bi=2,Ha=0,Ts=1,A_=2,R_=3,C_=4,by=5,gr=100,Ty=101,Ay=102,Ry=103,Cy=104,wy=200,Dy=201,Uy=202,Ly=203,Id=204,zd=205,Ny=206,Oy=207,Py=208,By=209,Iy=210,zy=211,Fy=212,Hy=213,Gy=214,Fd=0,Hd=1,Gd=2,Rs=3,Vd=4,kd=5,Xd=6,Wd=7,w0=0,Vy=1,ky=2,Ga=0,Xy=1,Wy=2,qy=3,jy=4,Yy=5,Zy=6,Ky=7,D0=300,Cs=301,ws=302,qd=303,jd=304,Yc=306,Yd=1e3,xr=1001,Zd=1002,ai=1003,Qy=1004,cc=1005,Ti=1006,ad=1007,yr=1008,oa=1009,U0=1010,L0=1011,Xo=1012,Dh=1013,Sr=1014,Bi=1015,Ko=1016,Uh=1017,Lh=1018,Wo=1020,N0=35902,O0=35899,P0=1021,B0=1022,Ai=1023,qo=1026,jo=1027,Nh=1028,Oh=1029,I0=1030,Ph=1031,Bh=1033,Bc=33776,Ic=33777,zc=33778,Fc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,th=36196,eh=37492,nh=37496,ih=37808,ah=37809,rh=37810,sh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,yh=36283,Sh=36284,Mh=36285,Eh=36286,Jy=3200,$y=3201,tS=0,eS=1,Fa="",hi="srgb",Ds="srgb-linear",Gc="linear",Ge="srgb",rs=7680,w_=519,nS=512,iS=513,aS=514,z0=515,rS=516,sS=517,oS=518,lS=519,bh=35044,D_="300 es",Ii=2e3,Vc=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Th=180/Math.PI;function Va(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Ae(o,t,i){return Math.max(t,Math.min(i,o))}function cS(o,t){return(o%t+t)%t}function sd(o,t,i){return(1-i)*o+i*t}function Pi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Me{constructor(t=0,i=0){Me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3];const x=u[d+0],E=u[d+1],T=u[d+2],M=u[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(h===1){t[i+0]=x,t[i+1]=E,t[i+2]=T,t[i+3]=M;return}if(g!==M||m!==x||p!==E||v!==T){let y=1-h;const _=m*x+p*E+v*T+g*M,I=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const N=Math.sqrt(C),F=Math.atan2(N,_*I);y=Math.sin(y*F)/N,h=Math.sin(h*F)/N}const D=h*I;if(m=m*y+x*D,p=p*y+E*D,v=v*y+T*D,g=g*y+M*D,y===1-h){const N=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=N,p*=N,v*=N,g*=N}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=u[d],x=u[d+1],E=u[d+2],T=u[d+3];return t[i]=h*T+v*g+m*E-p*x,t[i+1]=m*T+v*x+p*g-h*E,t[i+2]=p*T+v*E+h*x-m*g,t[i+3]=v*T-h*g-m*x-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(u/2),x=m(r/2),E=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=x*v*g+p*E*T,this._y=p*E*g-x*v*T,this._z=p*v*T+x*E*g,this._w=p*v*g-x*E*T;break;case"YXZ":this._x=x*v*g+p*E*T,this._y=p*E*g-x*v*T,this._z=p*v*T-x*E*g,this._w=p*v*g+x*E*T;break;case"ZXY":this._x=x*v*g-p*E*T,this._y=p*E*g+x*v*T,this._z=p*v*T+x*E*g,this._w=p*v*g-x*E*T;break;case"ZYX":this._x=x*v*g-p*E*T,this._y=p*E*g+x*v*T,this._z=p*v*T-x*E*g,this._w=p*v*g+x*E*T;break;case"YZX":this._x=x*v*g+p*E*T,this._y=p*E*g+x*v*T,this._z=p*v*T-x*E*g,this._w=p*v*g-x*E*T;break;case"XZY":this._x=x*v*g-p*E*T,this._y=p*E*g-x*v*T,this._z=p*v*T+x*E*g,this._w=p*v*g+x*E*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=r+h+g;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-p)*E,this._z=(d-l)*E}else if(r>h&&r>g){const E=2*Math.sqrt(1+r-h-g);this._w=(v-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+p)/E}else if(h>g){const E=2*Math.sqrt(1+h-r-g);this._w=(u-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+g-r-h);this._w=(d-l)/E,this._x=(u+p)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const E=1-i;return this._w=E*d+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,h),g=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=d*g+this._w*x,this._x=r*g+this._x*x,this._y=l*g+this._y*x,this._z=u*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(U_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(U_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),v=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*v,this.y=r+m*v+h*p-u*g,this.z=l+m*g+u*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return od.copy(this).projectOnVector(t),this.sub(od)}reflect(t){return this.sub(od.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new et,U_=new Qo;class me{constructor(t,i,r,l,u,d,h,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],x=r[2],E=r[5],T=r[8],M=l[0],y=l[3],_=l[6],I=l[1],C=l[4],D=l[7],N=l[2],F=l[5],G=l[8];return u[0]=d*M+h*I+m*N,u[3]=d*y+h*C+m*F,u[6]=d*_+h*D+m*G,u[1]=p*M+v*I+g*N,u[4]=p*y+v*C+g*F,u[7]=p*_+v*D+g*G,u[2]=x*M+E*I+T*N,u[5]=x*y+E*C+T*F,u[8]=x*_+E*D+T*G,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=v*d-h*p,x=h*m-v*u,E=p*u-d*m,T=i*g+r*x+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return t[0]=g*M,t[1]=(l*p-v*r)*M,t[2]=(h*r-l*d)*M,t[3]=x*M,t[4]=(v*i-l*m)*M,t[5]=(l*u-h*i)*M,t[6]=E*M,t[7]=(r*m-p*i)*M,t[8]=(d*i-r*u)*M,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ld.makeScale(t,i)),this}rotate(t){return this.premultiply(ld.makeRotation(-t)),this}translate(t,i){return this.premultiply(ld.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new me;function F0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function uS(){const o=kc("canvas");return o.style.display="block",o}const L_={};function Yo(o){o in L_||(L_[o]=!0,console.warn(o))}function fS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const N_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dS(){const o={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ge&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=As(l.r),l.g=As(l.g),l.b=As(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ds]:{primaries:t,whitePoint:r,transfer:Gc,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Ue=dS();function sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function As(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ss;class hS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ss===void 0&&(ss=kc("canvas")),ss.width=t.width,ss.height=t.height;const l=ss.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=sa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(sa(i[r]/255)*255):i[r]=sa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pS=0;class Ih{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Va(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(cd(l[d].image)):u.push(cd(l[d]))}else u=cd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function cd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mS=0;const ud=new et;class Nn extends Ls{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=xr,l=xr,u=Ti,d=yr,h=Ai,m=oa,p=Nn.DEFAULT_ANISOTROPY,v=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Va(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==D0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yd:t.x=t.x-Math.floor(t.x);break;case xr:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yd:t.y=t.y-Math.floor(t.y);break;case xr:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=D0;Nn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],v=m[4],g=m[8],x=m[1],E=m[5],T=m[9],M=m[2],y=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-M)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+M)<.1&&Math.abs(T+y)<.1&&Math.abs(p+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,D=(E+1)/2,N=(_+1)/2,F=(v+x)/4,G=(g+M)/4,J=(T+y)/4;return C>D&&C>N?C<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(C),l=F/r,u=G/r):D>N?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=F/l,u=J/l):N<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(N),r=G/u,l=J/u),this.set(r,l,u,i),this}let I=Math.sqrt((y-T)*(y-T)+(g-M)*(g-M)+(x-v)*(x-v));return Math.abs(I)<.001&&(I=1),this.x=(y-T)/I,this.y=(g-M)/I,this.z=(x-v)/I,this.w=Math.acos((p+E+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gS extends Ls{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Nn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ih(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends gS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class H0 extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _S extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,yi):yi.fromBufferAttribute(u,d),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(t.matrixWorld),this.union(uc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),fc.subVectors(this.max,Lo),os.subVectors(t.a,Lo),ls.subVectors(t.b,Lo),cs.subVectors(t.c,Lo),Na.subVectors(ls,os),Oa.subVectors(cs,ls),lr.subVectors(os,cs);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-lr.z,lr.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,lr.z,0,-lr.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-lr.y,lr.x,0];return!fd(i,os,ls,cs,fc)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,os,ls,cs,fc))?!1:(dc.crossVectors(Na,Oa),i=[dc.x,dc.y,dc.z],fd(i,os,ls,cs,fc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new et,new et,new et,new et,new et,new et,new et,new et],yi=new et,uc=new Er,os=new et,ls=new et,cs=new et,Na=new et,Oa=new et,lr=new et,Lo=new et,fc=new et,dc=new et,cr=new et;function fd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){cr.fromArray(o,u);const h=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=t.dot(cr),p=i.dot(cr),v=r.dot(cr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const vS=new Er,No=new et,dd=new et;class Ns{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):vS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(dd)),this.expandByPoint(No.copy(t.center).sub(dd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new et,hd=new et,hc=new et,Pa=new et,pd=new et,pc=new et,md=new et;class zh{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){hd.copy(t).add(i).multiplyScalar(.5),hc.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(hd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(hc),h=Pa.dot(this.direction),m=-Pa.dot(hc),p=Pa.lengthSq(),v=Math.abs(1-d*d);let g,x,E,T;if(v>0)if(g=d*m-h,x=d*h-m,T=u*v,g>=0)if(x>=-T)if(x<=T){const M=1/v;g*=M,x*=M,E=g*(g+d*x+2*h)+x*(d*g+x+2*m)+p}else x=u,g=Math.max(0,-(d*x+h)),E=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(d*x+h)),E=-g*g+x*(x+2*m)+p;else x<=-T?(g=Math.max(0,-(-d*u+h)),x=g>0?-u:Math.min(Math.max(-u,-m),u),E=-g*g+x*(x+2*m)+p):x<=T?(g=0,x=Math.min(Math.max(-u,-m),u),E=x*(x+2*m)+p):(g=Math.max(0,-(d*u+h)),x=g>0?u:Math.min(Math.max(-u,-m),u),E=-g*g+x*(x+2*m)+p);else x=d>0?-u:u,g=Math.max(0,-(d*x+h)),E=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(hd).addScaledVector(hc,x),E}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),v>=0?(u=(t.min.y-x.y)*v,d=(t.max.y-x.y)*v):(u=(t.max.y-x.y)*v,d=(t.min.y-x.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(h=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){pd.subVectors(i,t),pc.subVectors(r,t),md.crossVectors(pd,pc);let d=this.direction.dot(md),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Pa.subVectors(this.origin,t);const m=h*this.direction.dot(pc.crossVectors(Pa,pc));if(m<0)return null;const p=h*this.direction.dot(pd.cross(Pa));if(p<0||m+p>d)return null;const v=-h*Pa.dot(md);return v<0?null:this.at(v/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,u,d,h,m,p,v,g,x,E,T,M,y){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,v,g,x,E,T,M,y)}set(t,i,r,l,u,d,h,m,p,v,g,x,E,T,M,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=E,_[7]=T,_[11]=M,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/us.setFromMatrixColumn(t,0).length(),u=1/us.setFromMatrixColumn(t,1).length(),d=1/us.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const x=d*v,E=d*g,T=h*v,M=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=E+T*p,i[5]=x-M*p,i[9]=-h*m,i[2]=M-x*p,i[6]=T+E*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*v,E=m*g,T=p*v,M=p*g;i[0]=x+M*h,i[4]=T*h-E,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=E*h-T,i[6]=M+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*v,E=m*g,T=p*v,M=p*g;i[0]=x-M*h,i[4]=-d*g,i[8]=T+E*h,i[1]=E+T*h,i[5]=d*v,i[9]=M-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*v,E=d*g,T=h*v,M=h*g;i[0]=m*v,i[4]=T*p-E,i[8]=x*p+M,i[1]=m*g,i[5]=M*p+x,i[9]=E*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,E=d*p,T=h*m,M=h*p;i[0]=m*v,i[4]=M-x*g,i[8]=T*g+E,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=E*g+T,i[10]=x-M*g}else if(t.order==="XZY"){const x=d*m,E=d*p,T=h*m,M=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+M,i[5]=d*v,i[9]=E*g-T,i[2]=T*g-E,i[6]=h*v,i[10]=M*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xS,t,yS)}lookAt(t,i,r){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ba.crossVectors(r,ni),Ba.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ba.crossVectors(r,ni)),Ba.normalize(),mc.crossVectors(ni,Ba),l[0]=Ba.x,l[4]=mc.x,l[8]=ni.x,l[1]=Ba.y,l[5]=mc.y,l[9]=ni.y,l[2]=Ba.z,l[6]=mc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],x=r[9],E=r[13],T=r[2],M=r[6],y=r[10],_=r[14],I=r[3],C=r[7],D=r[11],N=r[15],F=l[0],G=l[4],J=l[8],U=l[12],L=l[1],X=l[5],ot=l[9],nt=l[13],vt=l[2],_t=l[6],B=l[10],at=l[14],Y=l[3],Tt=l[7],O=l[11],rt=l[15];return u[0]=d*F+h*L+m*vt+p*Y,u[4]=d*G+h*X+m*_t+p*Tt,u[8]=d*J+h*ot+m*B+p*O,u[12]=d*U+h*nt+m*at+p*rt,u[1]=v*F+g*L+x*vt+E*Y,u[5]=v*G+g*X+x*_t+E*Tt,u[9]=v*J+g*ot+x*B+E*O,u[13]=v*U+g*nt+x*at+E*rt,u[2]=T*F+M*L+y*vt+_*Y,u[6]=T*G+M*X+y*_t+_*Tt,u[10]=T*J+M*ot+y*B+_*O,u[14]=T*U+M*nt+y*at+_*rt,u[3]=I*F+C*L+D*vt+N*Y,u[7]=I*G+C*X+D*_t+N*Tt,u[11]=I*J+C*ot+D*B+N*O,u[15]=I*U+C*nt+D*at+N*rt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],g=t[6],x=t[10],E=t[14],T=t[3],M=t[7],y=t[11],_=t[15];return T*(+u*m*g-l*p*g-u*h*x+r*p*x+l*h*E-r*m*E)+M*(+i*m*E-i*p*x+u*d*x-l*d*E+l*p*v-u*m*v)+y*(+i*p*g-i*h*E-u*d*g+r*d*E+u*h*v-r*p*v)+_*(-l*h*v-i*m*g+i*h*x+l*d*g-r*d*x+r*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=t[9],x=t[10],E=t[11],T=t[12],M=t[13],y=t[14],_=t[15],I=g*y*p-M*x*p+M*m*E-h*y*E-g*m*_+h*x*_,C=T*x*p-v*y*p-T*m*E+d*y*E+v*m*_-d*x*_,D=v*M*p-T*g*p+T*h*E-d*M*E-v*h*_+d*g*_,N=T*g*m-v*M*m-T*h*x+d*M*x+v*h*y-d*g*y,F=i*I+r*C+l*D+u*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/F;return t[0]=I*G,t[1]=(M*x*u-g*y*u-M*l*E+r*y*E+g*l*_-r*x*_)*G,t[2]=(h*y*u-M*m*u+M*l*p-r*y*p-h*l*_+r*m*_)*G,t[3]=(g*m*u-h*x*u-g*l*p+r*x*p+h*l*E-r*m*E)*G,t[4]=C*G,t[5]=(v*y*u-T*x*u+T*l*E-i*y*E-v*l*_+i*x*_)*G,t[6]=(T*m*u-d*y*u-T*l*p+i*y*p+d*l*_-i*m*_)*G,t[7]=(d*x*u-v*m*u+v*l*p-i*x*p-d*l*E+i*m*E)*G,t[8]=D*G,t[9]=(T*g*u-v*M*u-T*r*E+i*M*E+v*r*_-i*g*_)*G,t[10]=(d*M*u-T*h*u+T*r*p-i*M*p-d*r*_+i*h*_)*G,t[11]=(v*h*u-d*g*u-v*r*p+i*g*p+d*r*E-i*h*E)*G,t[12]=N*G,t[13]=(v*M*l-T*g*l+T*r*x-i*M*x-v*r*y+i*g*y)*G,t[14]=(T*h*l-d*M*l-T*r*m+i*M*m+d*r*y-i*h*y)*G,t[15]=(d*g*l-v*h*l+v*r*m-i*g*m-d*r*x+i*h*x)*G,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,g=h+h,x=u*p,E=u*v,T=u*g,M=d*v,y=d*g,_=h*g,I=m*p,C=m*v,D=m*g,N=r.x,F=r.y,G=r.z;return l[0]=(1-(M+_))*N,l[1]=(E+D)*N,l[2]=(T-C)*N,l[3]=0,l[4]=(E-D)*F,l[5]=(1-(x+_))*F,l[6]=(y+I)*F,l[7]=0,l[8]=(T+C)*G,l[9]=(y-I)*G,l[10]=(1-(x+M))*G,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const d=us.set(l[4],l[5],l[6]).length(),h=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const p=1/u,v=1/d,g=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=v,Si.elements[5]*=v,Si.elements[6]*=v,Si.elements[8]*=g,Si.elements[9]*=g,Si.elements[10]*=g,i.setFromRotationMatrix(Si),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,v=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),E=(r+l)/(r-l);let T,M;if(m)T=u/(d-u),M=d*u/(d-u);else if(h===Ii)T=-(d+u)/(d-u),M=-2*d*u/(d-u);else if(h===Vc)T=-d/(d-u),M=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,v=2/(i-t),g=2/(r-l),x=-(i+t)/(i-t),E=-(r+l)/(r-l);let T,M;if(m)T=1/(d-u),M=d/(d-u);else if(h===Ii)T=-2/(d-u),M=-(d+u)/(d-u);else if(h===Vc)T=-1/(d-u),M=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const us=new et,Si=new je,xS=new et(0,0,0),yS=new et(1,1,1),Ba=new et,mc=new et,ni=new et,P_=new je,B_=new Qo;class la{constructor(t=0,i=0,r=0,l=la.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return P_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(P_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return B_.setFromEuler(this),this.setFromQuaternion(B_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SS=0;const I_=new et,fs=new Qo,ea=new je,gc=new et,Oo=new et,MS=new et,ES=new Qo,z_=new et(1,0,0),F_=new et(0,1,0),H_=new et(0,0,1),G_={type:"added"},bS={type:"removed"},ds={type:"childadded",child:null},gd={type:"childremoved",child:null};class On extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new et,i=new la,r=new Qo,l=new et(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new me}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(z_,t)}rotateY(t){return this.rotateOnAxis(F_,t)}rotateZ(t){return this.rotateOnAxis(H_,t)}translateOnAxis(t,i){return I_.copy(t).applyQuaternion(this.quaternion),this.position.add(I_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(z_,t)}translateY(t){return this.translateOnAxis(F_,t)}translateZ(t){return this.translateOnAxis(H_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?gc.copy(t):gc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Oo,gc,this.up):ea.lookAt(gc,Oo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(ea),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(G_),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bS),gd.child=t,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(G_),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,MS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,ES,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),g=d(t.shapes),x=d(t.skeletons),E=d(t.animations),T=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}On.DEFAULT_UP=new et(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new et,na=new et,_d=new et,ia=new et,hs=new et,ps=new et,V_=new et,vd=new et,xd=new et,yd=new et,Sd=new sn,Md=new sn,Ed=new sn;class pi{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Mi.subVectors(t,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Mi.subVectors(l,i),na.subVectors(r,i),_d.subVectors(t,i);const d=Mi.dot(Mi),h=Mi.dot(na),m=Mi.dot(_d),p=na.dot(na),v=na.dot(_d),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const x=1/g,E=(p*m-h*v)*x,T=(d*v-h*m)*x;return u.set(1-E-T,T,E)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return Sd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(t,i),Md.fromBufferAttribute(t,r),Ed.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Sd,u.x),d.addScaledVector(Md,u.y),d.addScaledVector(Ed,u.z),d}static isFrontFacing(t,i,r,l){return Mi.subVectors(r,i),na.subVectors(t,i),Mi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),Mi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return pi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;hs.subVectors(l,r),ps.subVectors(u,r),vd.subVectors(t,r);const m=hs.dot(vd),p=ps.dot(vd);if(m<=0&&p<=0)return i.copy(r);xd.subVectors(t,l);const v=hs.dot(xd),g=ps.dot(xd);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(hs,d);yd.subVectors(t,u);const E=hs.dot(yd),T=ps.dot(yd);if(T>=0&&E<=T)return i.copy(u);const M=E*p-m*T;if(M<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(ps,h);const y=v*T-E*g;if(y<=0&&g-v>=0&&E-T>=0)return V_.subVectors(u,l),h=(g-v)/(g-v+(E-T)),i.copy(l).addScaledVector(V_,h);const _=1/(y+M+x);return d=M*_,h=x*_,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const G0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},_c={h:0,s:0,l:0};function bd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class xe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ue.workingColorSpace){if(t=cS(t,1),i=Ae(i,0,1),r=Ae(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=bd(d,u,t+1/3),this.g=bd(d,u,t),this.b=bd(d,u,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const r=G0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Ue.workingToColorSpace(Ln.copy(this),t),Math.round(Ae(Ln.r*255,0,255))*65536+Math.round(Ae(Ln.g*255,0,255))*256+Math.round(Ae(Ln.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=hi){Ue.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,l=Ln.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(_c);const r=sd(Ia.h,_c.h,i),l=sd(Ia.s,_c.s,i),u=sd(Ia.l,_c.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new xe;xe.NAMES=G0;let TS=0;class Os extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=Ts,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=zd,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Id&&(r.blendSrc=this.blendSrc),this.blendDst!==zd&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ra extends Os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=w0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new et,vc=new Me;let AS=0;class jn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=bh,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(t),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Pi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Pi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Pi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Pi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Pi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),u=Ve(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bh&&(t.usage=this.usage),t}}class V0 extends jn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class k0 extends jn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Yn extends jn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let RS=0;const di=new je,Td=new On,ms=new et,ii=new Er,Po=new Er,Sn=new et;class Hn extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(F0(t)?k0:V0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new me().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return Td.lookAt(t),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Yn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ii.min,Po.min),ii.expandByPoint(Sn),Sn.addVectors(ii.max,Po.max),ii.expandByPoint(Sn)):(ii.expandByPoint(Po.min),ii.expandByPoint(Po.max))}ii.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)Sn.fromBufferAttribute(h,p),m&&(ms.fromBufferAttribute(t,p),Sn.add(ms)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let J=0;J<r.count;J++)h[J]=new et,m[J]=new et;const p=new et,v=new et,g=new et,x=new Me,E=new Me,T=new Me,M=new et,y=new et;function _(J,U,L){p.fromBufferAttribute(r,J),v.fromBufferAttribute(r,U),g.fromBufferAttribute(r,L),x.fromBufferAttribute(u,J),E.fromBufferAttribute(u,U),T.fromBufferAttribute(u,L),v.sub(p),g.sub(p),E.sub(x),T.sub(x);const X=1/(E.x*T.y-T.x*E.y);isFinite(X)&&(M.copy(v).multiplyScalar(T.y).addScaledVector(g,-E.y).multiplyScalar(X),y.copy(g).multiplyScalar(E.x).addScaledVector(v,-T.x).multiplyScalar(X),h[J].add(M),h[U].add(M),h[L].add(M),m[J].add(y),m[U].add(y),m[L].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let J=0,U=I.length;J<U;++J){const L=I[J],X=L.start,ot=L.count;for(let nt=X,vt=X+ot;nt<vt;nt+=3)_(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const C=new et,D=new et,N=new et,F=new et;function G(J){N.fromBufferAttribute(l,J),F.copy(N);const U=h[J];C.copy(U),C.sub(N.multiplyScalar(N.dot(U))).normalize(),D.crossVectors(F,U);const X=D.dot(m[J])<0?-1:1;d.setXYZW(J,C.x,C.y,C.z,X)}for(let J=0,U=I.length;J<U;++J){const L=I[J],X=L.start,ot=L.count;for(let nt=X,vt=X+ot;nt<vt;nt+=3)G(t.getX(nt+0)),G(t.getX(nt+1)),G(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new jn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,E=r.count;x<E;x++)r.setXYZ(x,0,0,0);const l=new et,u=new et,d=new et,h=new et,m=new et,p=new et,v=new et,g=new et;if(t)for(let x=0,E=t.count;x<E;x+=3){const T=t.getX(x+0),M=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,M),p.fromBufferAttribute(r,y),h.add(v),m.add(v),p.add(v),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(M,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,g=h.normalized,x=new p.constructor(m.length*v);let E=0,T=0;for(let M=0,y=m.length;M<y;M++){h.isInterleavedBufferAttribute?E=m[M]*h.data.stride+h.offset:E=m[M]*v;for(let _=0;_<v;_++)x[T++]=p[E++]}return new jn(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,g=p.length;v<g;v++){const x=p[v],E=t(x,r);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const E=p[g];v.push(E.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],g=u[p];for(let x=0,E=g.length;x<E;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const k_=new je,ur=new zh,xc=new Ns,X_=new et,yc=new et,Sc=new et,Mc=new et,Ad=new et,Ec=new et,W_=new et,bc=new et;class An extends On{constructor(t=new Hn,i=new ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Ec.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],g=u[m];v!==0&&(Ad.fromBufferAttribute(g,t),d?Ec.addScaledVector(Ad,v):Ec.addScaledVector(Ad.sub(i),v))}i.add(Ec)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(u),ur.copy(t.ray).recast(t.near),!(xc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(xc,X_)===null||ur.origin.distanceToSquared(X_)>(t.far-t.near)**2))&&(k_.copy(u).invert(),ur.copy(t.ray).applyMatrix4(k_),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,x=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,M=x.length;T<M;T++){const y=x[T],_=d[y.materialIndex],I=Math.max(y.start,E.start),C=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let D=I,N=C;D<N;D+=3){const F=h.getX(D),G=h.getX(D+1),J=h.getX(D+2);l=Tc(this,_,t,r,p,v,g,F,G,J),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),M=Math.min(h.count,E.start+E.count);for(let y=T,_=M;y<_;y+=3){const I=h.getX(y),C=h.getX(y+1),D=h.getX(y+2);l=Tc(this,d,t,r,p,v,g,I,C,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,M=x.length;T<M;T++){const y=x[T],_=d[y.materialIndex],I=Math.max(y.start,E.start),C=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let D=I,N=C;D<N;D+=3){const F=D,G=D+1,J=D+2;l=Tc(this,_,t,r,p,v,g,F,G,J),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),M=Math.min(m.count,E.start+E.count);for(let y=T,_=M;y<_;y+=3){const I=y,C=y+1,D=y+2;l=Tc(this,d,t,r,p,v,g,I,C,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function CS(o,t,i,r,l,u,d,h){let m;if(t.side===qn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ka,h),m===null)return null;bc.copy(h),bc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(bc);return p<i.near||p>i.far?null:{distance:p,point:bc.clone(),object:o}}function Tc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,yc),o.getVertexPosition(m,Sc),o.getVertexPosition(p,Mc);const v=CS(o,t,i,r,yc,Sc,Mc,W_);if(v){const g=new et;pi.getBarycoord(W_,yc,Sc,Mc,g),l&&(v.uv=pi.getInterpolatedAttribute(l,h,m,p,g,new Me)),u&&(v.uv1=pi.getInterpolatedAttribute(u,h,m,p,g,new Me)),d&&(v.normal=pi.getInterpolatedAttribute(d,h,m,p,g,new et),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new et,materialIndex:0};pi.getNormal(yc,Sc,Mc,x.normal),v.face=x,v.barycoord=g}return v}class Jo extends Hn{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],g=[];let x=0,E=0;T("z","y","x",-1,-1,r,i,t,d,u,0),T("z","y","x",1,-1,r,i,-t,d,u,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Yn(p,3)),this.setAttribute("normal",new Yn(v,3)),this.setAttribute("uv",new Yn(g,2));function T(M,y,_,I,C,D,N,F,G,J,U){const L=D/G,X=N/J,ot=D/2,nt=N/2,vt=F/2,_t=G+1,B=J+1;let at=0,Y=0;const Tt=new et;for(let O=0;O<B;O++){const rt=O*X-nt;for(let bt=0;bt<_t;bt++){const At=bt*L-ot;Tt[M]=At*I,Tt[y]=rt*C,Tt[_]=vt,p.push(Tt.x,Tt.y,Tt.z),Tt[M]=0,Tt[y]=0,Tt[_]=F>0?1:-1,v.push(Tt.x,Tt.y,Tt.z),g.push(bt/G),g.push(1-O/J),at+=1}}for(let O=0;O<J;O++)for(let rt=0;rt<G;rt++){const bt=x+rt+_t*O,At=x+rt+_t*(O+1),Ft=x+(rt+1)+_t*(O+1),jt=x+(rt+1)+_t*O;m.push(bt,At,jt),m.push(At,Ft,jt),Y+=6}h.addGroup(E,Y,U),E+=Y,x+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const r=Us(o[i]);for(const l in r)t[l]=r[l]}return t}function wS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function X0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const DS={clone:Us,merge:Fn};var US=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends Os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=US,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=wS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class W0 extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new et,q_=new Me,j_=new Me;class Ei extends W0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Th*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Th*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,q_,j_),i.subVectors(j_,q_)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class NS extends On{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(gs,_s,t,i);l.layers=this.layers,this.add(l);const u=new Ei(gs,_s,t,i);u.layers=this.layers,this.add(u);const d=new Ei(gs,_s,t,i);d.layers=this.layers,this.add(d);const h=new Ei(gs,_s,t,i);h.layers=this.layers,this.add(h);const m=new Ei(gs,_s,t,i);m.layers=this.layers,this.add(m);const p=new Ei(gs,_s,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Vc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=M,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(g,x,E),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class q0 extends Nn{constructor(t=[],i=Cs,r,l,u,d,h,m,p,v){super(t,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class OS extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new q0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jo(5,5,5),u=new Xa({name:"CubemapFromEquirect",uniforms:Us(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Ha});u.uniforms.tEquirect.value=i;const d=new An(l,u),h=i.minFilter;return i.minFilter===yr&&(i.minFilter=Ti),new NS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class Vo extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PS={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const M of t.hand.values()){const y=i.getJointPose(M,r),_=this._getHandJoint(p,M);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),E=.02,T=.005;p.inputState.pinching&&x>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(PS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Vo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class BS extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new la,this.environmentIntensity=1,this.environmentRotation=new la,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class IS{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=bh,this.updateRanges=[],this.version=0,this.uuid=Va()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new et;class Xc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.applyMatrix4(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.applyNormalMatrix(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.transformDirection(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Pi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Pi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Pi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Pi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Pi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),u=Ve(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new jn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class j0 extends Os{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vs;const Bo=new et,xs=new et,ys=new et,Ss=new Me,Io=new Me,Y0=new je,Ac=new et,zo=new et,Rc=new et,Y_=new Me,Cd=new Me,Z_=new Me;class zS extends On{constructor(t=new j0){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Hn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new IS(i,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Xc(r,3,0,!1)),vs.setAttribute("uv",new Xc(r,2,3,!1))}this.geometry=vs,this.material=t,this.center=new Me(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Y0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-ys.z);const r=this.material.rotation;let l,u;r!==0&&(u=Math.cos(r),l=Math.sin(r));const d=this.center;Cc(Ac.set(-.5,-.5,0),ys,d,xs,l,u),Cc(zo.set(.5,-.5,0),ys,d,xs,l,u),Cc(Rc.set(.5,.5,0),ys,d,xs,l,u),Y_.set(0,0),Cd.set(1,0),Z_.set(1,1);let h=t.ray.intersectTriangle(Ac,zo,Rc,!1,Bo);if(h===null&&(Cc(zo.set(-.5,.5,0),ys,d,xs,l,u),Cd.set(0,1),h=t.ray.intersectTriangle(Ac,Rc,zo,!1,Bo),h===null))return;const m=t.ray.origin.distanceTo(Bo);m<t.near||m>t.far||i.push({distance:m,point:Bo.clone(),uv:pi.getInterpolation(Bo,Ac,zo,Rc,Y_,Cd,Z_,new Me),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cc(o,t,i,r,l,u){Ss.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Io.x=u*Ss.x-l*Ss.y,Io.y=l*Ss.x+u*Ss.y):Io.copy(Ss),o.copy(t),o.x+=Io.x,o.y+=Io.y,o.applyMatrix4(Y0)}class FS extends Nn{constructor(t=null,i=1,r=1,l,u,d,h,m,p=ai,v=ai,g,x){super(null,d,h,m,p,v,l,u,g,x),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K_ extends jn{constructor(t,i,r,l=1){super(t,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ms=new je,Q_=new je,wc=[],J_=new Er,HS=new je,Fo=new An,Ho=new Ns;class GS extends An{constructor(t,i,r){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new K_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,HS)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Er),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ms),J_.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(J_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ms),Ho.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(Ho)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=r.length+1,d=t*u+1;for(let h=0;h<r.length;h++)r[h]=l[d+h]}raycast(t,i){const r=this.matrixWorld,l=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(r),t.ray.intersectsSphere(Ho)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,Ms),Q_.multiplyMatrices(r,Ms),Fo.matrixWorld=Q_,Fo.raycast(t,wc);for(let d=0,h=wc.length;d<h;d++){const m=wc[d];m.instanceId=u,m.object=this,i.push(m)}wc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new K_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new FS(new Float32Array(l*this.count),l,this.count,Nh,Bi));const u=this.morphTexture.source.data.data;let d=0;for(let p=0;p<r.length;p++)d+=r[p];const h=this.geometry.morphTargetsRelative?1:1-d,m=l*t;u[m]=h,u.set(r,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wd=new et,VS=new et,kS=new me;class pr{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=wd.subVectors(r,i).cross(VS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(wd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||kS.getNormalMatrix(t),l=this.coplanarPoint(wd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Ns,XS=new Me(.5,.5),Dc=new et;class Z0{constructor(t=new pr,i=new pr,r=new pr,l=new pr,u=new pr,d=new pr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ii,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],g=u[5],x=u[6],E=u[7],T=u[8],M=u[9],y=u[10],_=u[11],I=u[12],C=u[13],D=u[14],N=u[15];if(l[0].setComponents(p-d,E-v,_-T,N-I).normalize(),l[1].setComponents(p+d,E+v,_+T,N+I).normalize(),l[2].setComponents(p+h,E+g,_+M,N+C).normalize(),l[3].setComponents(p-h,E-g,_-M,N-C).normalize(),r)l[4].setComponents(m,x,y,D).normalize(),l[5].setComponents(p-m,E-x,_-y,N-D).normalize();else if(l[4].setComponents(p-m,E-x,_-y,N-D).normalize(),i===Ii)l[5].setComponents(p+m,E+x,_+y,N+D).normalize();else if(i===Vc)l[5].setComponents(m,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);const i=XS.distanceTo(t.center);return fr.radius=.7071067811865476+i,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Dc.x=l.normal.x>0?t.max.x:t.min.x,Dc.y=l.normal.y>0?t.max.y:t.min.y,Dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zo extends Os{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wc=new et,qc=new et,$_=new je,Go=new zh,Uc=new Ns,Dd=new et,t0=new et;class jc extends On{constructor(t=new Hn,i=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Wc.fromBufferAttribute(i,l-1),qc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Wc.distanceTo(qc);t.setAttribute("lineDistance",new Yn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=u,t.ray.intersectsSphere(Uc)===!1)return;$_.copy(l).invert(),Go.copy(t.ray).applyMatrix4($_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const E=Math.max(0,d.start),T=Math.min(v.count,d.start+d.count);for(let M=E,y=T-1;M<y;M+=p){const _=v.getX(M),I=v.getX(M+1),C=Lc(this,t,Go,m,_,I,M);C&&i.push(C)}if(this.isLineLoop){const M=v.getX(T-1),y=v.getX(E),_=Lc(this,t,Go,m,M,y,T-1);_&&i.push(_)}}else{const E=Math.max(0,d.start),T=Math.min(x.count,d.start+d.count);for(let M=E,y=T-1;M<y;M+=p){const _=Lc(this,t,Go,m,M,M+1,M);_&&i.push(_)}if(this.isLineLoop){const M=Lc(this,t,Go,m,T-1,E,T-1);M&&i.push(M)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Lc(o,t,i,r,l,u,d){const h=o.geometry.attributes.position;if(Wc.fromBufferAttribute(h,l),qc.fromBufferAttribute(h,u),i.distanceSqToSegment(Wc,qc,Dd,t0)>r)return;Dd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Dd);if(!(p<t.near||p>t.far))return{distance:p,point:t0.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class WS extends jc{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class qS extends Nn{constructor(t,i,r,l,u,d,h,m,p){super(t,i,r,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class K0 extends Nn{constructor(t,i,r=Sr,l,u,d,h=ai,m=ai,p,v=qo,g=1){if(v!==qo&&v!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ih(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Q0 extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $o extends Hn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=t/h,x=i/m,E=[],T=[],M=[],y=[];for(let _=0;_<v;_++){const I=_*x-d;for(let C=0;C<p;C++){const D=C*g-u;T.push(D,-I,0),M.push(0,0,1),y.push(C/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<h;I++){const C=I+p*_,D=I+p*(_+1),N=I+1+p*(_+1),F=I+1+p*_;E.push(C,D,F),E.push(D,N,F)}this.setIndex(E),this.setAttribute("position",new Yn(T,3)),this.setAttribute("normal",new Yn(M,3)),this.setAttribute("uv",new Yn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hh extends Hn{constructor(t=.5,i=1,r=32,l=1,u=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:d},r=Math.max(3,r),l=Math.max(1,l);const h=[],m=[],p=[],v=[];let g=t;const x=(i-t)/l,E=new et,T=new Me;for(let M=0;M<=l;M++){for(let y=0;y<=r;y++){const _=u+y/r*d;E.x=g*Math.cos(_),E.y=g*Math.sin(_),m.push(E.x,E.y,E.z),p.push(0,0,1),T.x=(E.x/i+1)/2,T.y=(E.y/i+1)/2,v.push(T.x,T.y)}g+=x}for(let M=0;M<l;M++){const y=M*(r+1);for(let _=0;_<r;_++){const I=_+y,C=I,D=I+r+1,N=I+r+2,F=I+1;h.push(C,D,F),h.push(D,N,F)}}this.setIndex(h),this.setAttribute("position",new Yn(m,3)),this.setAttribute("normal",new Yn(p,3)),this.setAttribute("uv",new Yn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _r extends Hn{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const v=[],g=new et,x=new et,E=[],T=[],M=[],y=[];for(let _=0;_<=r;_++){const I=[],C=_/r;let D=0;_===0&&d===0?D=.5/i:_===r&&m===Math.PI&&(D=-.5/i);for(let N=0;N<=i;N++){const F=N/i;g.x=-t*Math.cos(l+F*u)*Math.sin(d+C*h),g.y=t*Math.cos(d+C*h),g.z=t*Math.sin(l+F*u)*Math.sin(d+C*h),T.push(g.x,g.y,g.z),x.copy(g).normalize(),M.push(x.x,x.y,x.z),y.push(F+D,1-C),I.push(p++)}v.push(I)}for(let _=0;_<r;_++)for(let I=0;I<i;I++){const C=v[_][I+1],D=v[_][I],N=v[_+1][I],F=v[_+1][I+1];(_!==0||d>0)&&E.push(C,D,F),(_!==r-1||m<Math.PI)&&E.push(D,N,F)}this.setIndex(E),this.setAttribute("position",new Yn(T,3)),this.setAttribute("normal",new Yn(M,3)),this.setAttribute("uv",new Yn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jS extends Os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YS extends Os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class J0 extends W0{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ZS extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const e0=new je;class KS{constructor(t,i,r=0,l=1/0){this.ray=new zh(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return e0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(e0),this}intersectObject(t,i=!0,r=[]){return Ah(t,this,r,i),r.sort(n0),r}intersectObjects(t,i=!0,r=[]){for(let l=0,u=t.length;l<u;l++)Ah(t[l],this,r,i);return r.sort(n0),r}}function n0(o,t){return o.distance-t.distance}function Ah(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const u=o.children;for(let d=0,h=u.length;d<h;d++)Ah(u[d],t,i,!0)}}function i0(o,t,i,r){const l=QS(r);switch(i){case P0:return o*t;case Nh:return o*t/l.components*l.byteLength;case Oh:return o*t/l.components*l.byteLength;case I0:return o*t*2/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case B0:return o*t*3/l.components*l.byteLength;case Ai:return o*t*4/l.components*l.byteLength;case Bh:return o*t*4/l.components*l.byteLength;case Bc:case Ic:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zc:case Fc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(t,8)/2;case th:case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case yh:case Sh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Mh:case Eh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function QS(o){switch(o){case oa:case U0:return{byteLength:1,components:1};case Xo:case L0:case Ko:return{byteLength:2,components:1};case Uh:case Lh:return{byteLength:2,components:4};case Sr:case Dh:case Bi:return{byteLength:4,components:1};case N0:case O0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $0(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function JS(o){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,v),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,v);else{g.sort((E,T)=>E.start-T.start);let x=0;for(let E=1;E<g.length;E++){const T=g[x],M=g[E];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++x,g[x]=M)}g.length=x+1;for(let E=0,T=g.length;E<T;E++){const M=g[E];o.bufferSubData(p,M.start*v.BYTES_PER_ELEMENT,v,M.start,M.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var $S=`#ifdef USE_ALPHAHASH
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
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
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
#endif`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,ve={alphahash_fragment:$S,alphahash_pars_fragment:tM,alphamap_fragment:eM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:aM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:fM,iridescence_fragment:dM,bumpmap_pars_fragment:hM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:yM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:bM,displacementmap_pars_vertex:TM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:wM,colorspace_pars_fragment:DM,envmap_fragment:UM,envmap_common_pars_fragment:LM,envmap_pars_fragment:NM,envmap_pars_vertex:OM,envmap_physical_pars_fragment:WM,envmap_vertex:PM,fog_vertex:BM,fog_pars_vertex:IM,fog_fragment:zM,fog_pars_fragment:FM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:kM,lights_pars_begin:XM,lights_toon_fragment:qM,lights_toon_pars_fragment:jM,lights_phong_fragment:YM,lights_phong_pars_fragment:ZM,lights_physical_fragment:KM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:$M,lights_fragment_end:tE,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:aE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:oE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:fE,morphcolor_vertex:dE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:_E,normal_pars_fragment:vE,normal_pars_vertex:xE,normal_vertex:yE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:TE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:wE,dithering_fragment:DE,dithering_pars_fragment:UE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:PE,shadowmap_vertex:BE,shadowmask_pars_fragment:IE,skinbase_vertex:zE,skinning_pars_vertex:FE,skinning_vertex:HE,skinnormal_vertex:GE,specularmap_fragment:VE,specularmap_pars_fragment:kE,tonemapping_fragment:XE,tonemapping_pars_fragment:WE,transmission_fragment:qE,transmission_pars_fragment:jE,uv_pars_fragment:YE,uv_pars_vertex:ZE,uv_vertex:KE,worldpos_vertex:QE,background_vert:JE,background_frag:$E,backgroundCube_vert:tb,backgroundCube_frag:eb,cube_vert:nb,cube_frag:ib,depth_vert:ab,depth_frag:rb,distanceRGBA_vert:sb,distanceRGBA_frag:ob,equirect_vert:lb,equirect_frag:cb,linedashed_vert:ub,linedashed_frag:fb,meshbasic_vert:db,meshbasic_frag:hb,meshlambert_vert:pb,meshlambert_frag:mb,meshmatcap_vert:gb,meshmatcap_frag:_b,meshnormal_vert:vb,meshnormal_frag:xb,meshphong_vert:yb,meshphong_frag:Sb,meshphysical_vert:Mb,meshphysical_frag:Eb,meshtoon_vert:bb,meshtoon_frag:Tb,points_vert:Ab,points_frag:Rb,shadow_vert:Cb,shadow_frag:wb,sprite_vert:Db,sprite_frag:Ub},kt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Oi={basic:{uniforms:Fn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Fn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Fn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Fn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Fn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Fn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Fn([kt.points,kt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Fn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Fn([kt.common,kt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Fn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Fn([kt.sprite,kt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Fn([kt.common,kt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Fn([kt.lights,kt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Oi.physical={uniforms:Fn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Nc={r:0,b:0,g:0},dr=new la,Lb=new je;function Nb(o,t,i,r,l,u,d){const h=new xe(0);let m=u===!0?0:1,p,v,g=null,x=0,E=null;function T(C){let D=C.isScene===!0?C.background:null;return D&&D.isTexture&&(D=(C.backgroundBlurriness>0?i:t).get(D)),D}function M(C){let D=!1;const N=T(C);N===null?_(h,m):N&&N.isColor&&(_(N,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(C,D){const N=T(D);N&&(N.isCubeTexture||N.mapping===Yc)?(v===void 0&&(v=new An(new Jo(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Us(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,G,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),dr.copy(D.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),v.material.uniforms.envMap.value=N,v.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(dr)),v.material.toneMapped=Ue.getTransfer(N.colorSpace)!==Ge,(g!==N||x!==N.version||E!==o.toneMapping)&&(v.material.needsUpdate=!0,g=N,x=N.version,E=o.toneMapping),v.layers.enableAll(),C.unshift(v,v.geometry,v.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new An(new $o(2,2),new Xa({name:"BackgroundMaterial",uniforms:Us(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(N.colorSpace)!==Ge,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||x!==N.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,g=N,x=N.version,E=o.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function _(C,D){C.getRGB(Nc,X0(o)),r.buffers.color.setClear(Nc.r,Nc.g,Nc.b,D,d)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,D=1){h.set(C),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,_(h,m)},render:M,addToRenderList:y,dispose:I}}function Ob(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,d=!1;function h(L,X,ot,nt,vt){let _t=!1;const B=g(nt,ot,X);u!==B&&(u=B,p(u.object)),_t=E(L,nt,ot,vt),_t&&T(L,nt,ot,vt),vt!==null&&t.update(vt,o.ELEMENT_ARRAY_BUFFER),(_t||d)&&(d=!1,D(L,X,ot,nt),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function m(){return o.createVertexArray()}function p(L){return o.bindVertexArray(L)}function v(L){return o.deleteVertexArray(L)}function g(L,X,ot){const nt=ot.wireframe===!0;let vt=r[L.id];vt===void 0&&(vt={},r[L.id]=vt);let _t=vt[X.id];_t===void 0&&(_t={},vt[X.id]=_t);let B=_t[nt];return B===void 0&&(B=x(m()),_t[nt]=B),B}function x(L){const X=[],ot=[],nt=[];for(let vt=0;vt<i;vt++)X[vt]=0,ot[vt]=0,nt[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ot,attributeDivisors:nt,object:L,attributes:{},index:null}}function E(L,X,ot,nt){const vt=u.attributes,_t=X.attributes;let B=0;const at=ot.getAttributes();for(const Y in at)if(at[Y].location>=0){const O=vt[Y];let rt=_t[Y];if(rt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor)),O===void 0||O.attribute!==rt||rt&&O.data!==rt.data)return!0;B++}return u.attributesNum!==B||u.index!==nt}function T(L,X,ot,nt){const vt={},_t=X.attributes;let B=0;const at=ot.getAttributes();for(const Y in at)if(at[Y].location>=0){let O=_t[Y];O===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));const rt={};rt.attribute=O,O&&O.data&&(rt.data=O.data),vt[Y]=rt,B++}u.attributes=vt,u.attributesNum=B,u.index=nt}function M(){const L=u.newAttributes;for(let X=0,ot=L.length;X<ot;X++)L[X]=0}function y(L){_(L,0)}function _(L,X){const ot=u.newAttributes,nt=u.enabledAttributes,vt=u.attributeDivisors;ot[L]=1,nt[L]===0&&(o.enableVertexAttribArray(L),nt[L]=1),vt[L]!==X&&(o.vertexAttribDivisor(L,X),vt[L]=X)}function I(){const L=u.newAttributes,X=u.enabledAttributes;for(let ot=0,nt=X.length;ot<nt;ot++)X[ot]!==L[ot]&&(o.disableVertexAttribArray(ot),X[ot]=0)}function C(L,X,ot,nt,vt,_t,B){B===!0?o.vertexAttribIPointer(L,X,ot,vt,_t):o.vertexAttribPointer(L,X,ot,nt,vt,_t)}function D(L,X,ot,nt){M();const vt=nt.attributes,_t=ot.getAttributes(),B=X.defaultAttributeValues;for(const at in _t){const Y=_t[at];if(Y.location>=0){let Tt=vt[at];if(Tt===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&(Tt=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&(Tt=L.instanceColor)),Tt!==void 0){const O=Tt.normalized,rt=Tt.itemSize,bt=t.get(Tt);if(bt===void 0)continue;const At=bt.buffer,Ft=bt.type,jt=bt.bytesPerElement,st=Ft===o.INT||Ft===o.UNSIGNED_INT||Tt.gpuType===Dh;if(Tt.isInterleavedBufferAttribute){const St=Tt.data,Ot=St.stride,ne=Tt.offset;if(St.isInstancedInterleavedBuffer){for(let Jt=0;Jt<Y.locationSize;Jt++)_(Y.location+Jt,St.meshPerAttribute);L.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Jt=0;Jt<Y.locationSize;Jt++)y(Y.location+Jt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Jt=0;Jt<Y.locationSize;Jt++)C(Y.location+Jt,rt/Y.locationSize,Ft,O,Ot*jt,(ne+rt/Y.locationSize*Jt)*jt,st)}else{if(Tt.isInstancedBufferAttribute){for(let St=0;St<Y.locationSize;St++)_(Y.location+St,Tt.meshPerAttribute);L.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let St=0;St<Y.locationSize;St++)y(Y.location+St);o.bindBuffer(o.ARRAY_BUFFER,At);for(let St=0;St<Y.locationSize;St++)C(Y.location+St,rt/Y.locationSize,Ft,O,rt*jt,rt/Y.locationSize*St*jt,st)}}else if(B!==void 0){const O=B[at];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(Y.location,O);break;case 3:o.vertexAttrib3fv(Y.location,O);break;case 4:o.vertexAttrib4fv(Y.location,O);break;default:o.vertexAttrib1fv(Y.location,O)}}}}I()}function N(){J();for(const L in r){const X=r[L];for(const ot in X){const nt=X[ot];for(const vt in nt)v(nt[vt].object),delete nt[vt];delete X[ot]}delete r[L]}}function F(L){if(r[L.id]===void 0)return;const X=r[L.id];for(const ot in X){const nt=X[ot];for(const vt in nt)v(nt[vt].object),delete nt[vt];delete X[ot]}delete r[L.id]}function G(L){for(const X in r){const ot=r[X];if(ot[L.id]===void 0)continue;const nt=ot[L.id];for(const vt in nt)v(nt[vt].object),delete nt[vt];delete ot[L.id]}}function J(){U(),d=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:U,dispose:N,releaseStatesOfGeometry:F,releaseStatesOfProgram:G,initAttributes:M,enableAttribute:y,disableUnusedAttributes:I}}function Pb(o,t,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,g){g!==0&&(o.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T];i.update(E,r,1)}function m(p,v,g,x){if(g===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<p.length;T++)d(p[T],v[T],x[T]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let T=0;for(let M=0;M<g;M++)T+=v[M]*x[M];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Bb(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(G){return!(G!==Ai&&r.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(G){const J=G===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==oa&&r.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Bi&&!J)}function m(G){if(G==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=T>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:C,maxFragmentUniforms:D,vertexTextures:N,maxSamples:F}}function Ib(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new pr,h=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const E=g.length!==0||x||r!==0||l;return l=x,r=g.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,E){const T=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,_=o.get(g);if(!l||T===null||T.length===0||u&&!y)u?v(null):p();else{const I=u?0:r,C=I*4;let D=_.clippingState||null;m.value=D,D=v(T,x,C,E);for(let N=0;N!==C;++N)D[N]=i[N];_.clippingState=D,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(g,x,E,T){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=m.value,T!==!0||y===null){const _=E+M*4,I=x.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let C=0,D=E;C!==M;++C,D+=4)d.copy(g[C]).applyMatrix4(I,h),d.normal.toArray(y,D),y[D+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function zb(o){let t=new WeakMap;function i(d,h){return h===qd?d.mapping=Cs:h===jd&&(d.mapping=ws),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===qd||h===jd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new OS(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const bs=4,a0=[.125,.215,.35,.446,.526,.582],vr=20,Ud=new J0,r0=new xe;let Ld=null,Nd=0,Od=0,Pd=!1;const mr=(1+Math.sqrt(5))/2,Es=1/mr,s0=[new et(-mr,Es,0),new et(mr,Es,0),new et(-Es,0,mr),new et(Es,0,mr),new et(0,mr,-Es),new et(0,mr,Es),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],Fb=new et;class o0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=Fb}=u;Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ld,Nd,Od),this._renderer.xr.enabled=Pd,t.scissorTest=!1,Oc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ko,format:Ai,colorSpace:Ds,depthBuffer:!1},l=l0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hb(u)),this._blurMaterial=Gb(u,t,i)}return l}_compileMaterial(t){const i=new An(this._lodPlanes[0],t);this._renderer.compile(i,Ud)}_sceneToCubeUV(t,i,r,l,u){const m=new Ei(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,E=g.toneMapping;g.getClearColor(r0),g.toneMapping=Ga,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const M=new ra({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),y=new An(new Jo,M);let _=!1;const I=t.background;I?I.isColor&&(M.color.copy(I),t.background=null,_=!0):(M.color.copy(r0),_=!0);for(let C=0;C<6;C++){const D=C%3;D===0?(m.up.set(0,p[C],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[C],u.y,u.z)):D===1?(m.up.set(0,0,p[C]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[C],u.z)):(m.up.set(0,p[C],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[C]));const N=this._cubeSize;Oc(l,D*N,C>2?N:0,N,N),g.setRenderTarget(l),_&&g.render(y,m),g.render(t,m)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=E,g.autoClear=x,t.background=I}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Cs||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c0());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new An(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Oc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Ud)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=s0[(l-u-1)%s0.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new An(this._lodPlanes[l],p),x=p.uniforms,E=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*vr-1),M=u/T,y=isFinite(u)?1+Math.floor(v*M):vr;y>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vr}`);const _=[];let I=0;for(let G=0;G<vr;++G){const J=G/M,U=Math.exp(-J*J/2);_.push(U),G===0?I+=U:G<y&&(I+=2*U)}for(let G=0;G<_.length;G++)_[G]=_[G]/I;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:C}=this;x.dTheta.value=T,x.mipInt.value=C-r;const D=this._sizeLods[l],N=3*D*(l>C-bs?l-C+bs:0),F=4*(this._cubeSize-D);Oc(i,N,F,3*D,2*D),m.setRenderTarget(i),m.render(g,Ud)}}function Hb(o){const t=[],i=[],r=[];let l=o;const u=o-bs+1+a0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-bs?m=a0[d-o+bs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],E=6,T=6,M=3,y=2,_=1,I=new Float32Array(M*T*E),C=new Float32Array(y*T*E),D=new Float32Array(_*T*E);for(let F=0;F<E;F++){const G=F%3*2/3-1,J=F>2?0:-1,U=[G,J,0,G+2/3,J,0,G+2/3,J+1,0,G,J,0,G+2/3,J+1,0,G,J+1,0];I.set(U,M*T*F),C.set(x,y*T*F);const L=[F,F,F,F,F,F];D.set(L,_*T*F)}const N=new Hn;N.setAttribute("position",new jn(I,M)),N.setAttribute("uv",new jn(C,y)),N.setAttribute("faceIndex",new jn(D,_)),t.push(N),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function l0(o,t,i){const r=new Mr(o,t,i);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Oc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function Gb(o,t,i){const r=new Float32Array(vr),l=new et(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function c0(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function u0(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Gh(){return`

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
	`}function Vb(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===qd||m===jd,v=m===Cs||m===ws;if(p||v){let g=t.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new o0(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const E=h.image;return p&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new o0(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function kb(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Yo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Xb(o,t,i,r){const l={},u=new WeakMap;function d(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete l[x.id];const E=u.get(x);E&&(t.remove(E),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const E in x)t.update(x[E],o.ARRAY_BUFFER)}function p(g){const x=[],E=g.index,T=g.attributes.position;let M=0;if(E!==null){const I=E.array;M=E.version;for(let C=0,D=I.length;C<D;C+=3){const N=I[C+0],F=I[C+1],G=I[C+2];x.push(N,F,F,G,G,N)}}else if(T!==void 0){const I=T.array;M=T.version;for(let C=0,D=I.length/3-1;C<D;C+=3){const N=C+0,F=C+1,G=C+2;x.push(N,F,F,G,G,N)}}else return;const y=new(F0(x)?k0:V0)(x,1);y.version=M;const _=u.get(g);_&&t.remove(_),u.set(g,y)}function v(g){const x=u.get(g);if(x){const E=g.index;E!==null&&x.version<E.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function Wb(o,t,i){let r;function l(x){r=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function m(x,E){o.drawElements(r,E,u,x*d),i.update(E,r,1)}function p(x,E,T){T!==0&&(o.drawElementsInstanced(r,E,u,x*d,T),i.update(E,r,T))}function v(x,E,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,x,0,T);let y=0;for(let _=0;_<T;_++)y+=E[_];i.update(y,r,1)}function g(x,E,T,M){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/d,E[_],M[_]);else{y.multiDrawElementsInstancedWEBGL(r,E,0,u,x,0,M,0,T);let _=0;for(let I=0;I<T;I++)_+=E[I]*M[I];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function qb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function jb(o,t,i){const r=new WeakMap,l=new sn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(h);if(x===void 0||x.count!==g){let U=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",U)};x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),M===!0&&(C=3);let D=h.attributes.position.count*C,N=1;D>t.maxTextureSize&&(N=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const F=new Float32Array(D*N*4*g),G=new H0(F,D,N,g);G.type=Bi,G.needsUpdate=!0;const J=C*4;for(let L=0;L<g;L++){const X=y[L],ot=_[L],nt=I[L],vt=D*N*4*L;for(let _t=0;_t<X.count;_t++){const B=_t*J;E===!0&&(l.fromBufferAttribute(X,_t),F[vt+B+0]=l.x,F[vt+B+1]=l.y,F[vt+B+2]=l.z,F[vt+B+3]=0),T===!0&&(l.fromBufferAttribute(ot,_t),F[vt+B+4]=l.x,F[vt+B+5]=l.y,F[vt+B+6]=l.z,F[vt+B+7]=0),M===!0&&(l.fromBufferAttribute(nt,_t),F[vt+B+8]=l.x,F[vt+B+9]=l.y,F[vt+B+10]=l.z,F[vt+B+11]=nt.itemSize===4?l.w:1)}}x={count:g,texture:G,size:new Me(D,N)},r.set(h,x),h.addEventListener("dispose",U)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function Yb(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const tv=new Nn,f0=new K0(1,1),ev=new H0,nv=new _S,iv=new q0,d0=[],h0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);function Ps(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=d0[l];if(u===void 0&&(u=new Float32Array(l),d0[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Zc(o,t){let i=h0[t];i===void 0&&(i=new Int32Array(t),h0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Zb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Kb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function Qb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function Jb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function $b(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;g0.set(r),o.uniformMatrix2fv(this.addr,!1,g0),gn(i,r)}}function tT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;m0.set(r),o.uniformMatrix3fv(this.addr,!1,m0),gn(i,r)}}function eT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;p0.set(r),o.uniformMatrix4fv(this.addr,!1,p0),gn(i,r)}}function nT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function iT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function sT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function uT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(f0.compareFunction=z0,u=f0):u=tv,i.setTexture2D(t||u,l)}function fT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||nv,l)}function dT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||iv,l)}function hT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||ev,l)}function pT(o){switch(o){case 5126:return Zb;case 35664:return Kb;case 35665:return Qb;case 35666:return Jb;case 35674:return $b;case 35675:return tT;case 35676:return eT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return hT}}function mT(o,t){o.uniform1fv(this.addr,t)}function gT(o,t){const i=Ps(t,this.size,2);o.uniform2fv(this.addr,i)}function _T(o,t){const i=Ps(t,this.size,3);o.uniform3fv(this.addr,i)}function vT(o,t){const i=Ps(t,this.size,4);o.uniform4fv(this.addr,i)}function xT(o,t){const i=Ps(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yT(o,t){const i=Ps(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ST(o,t){const i=Ps(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function MT(o,t){o.uniform1iv(this.addr,t)}function ET(o,t){o.uniform2iv(this.addr,t)}function bT(o,t){o.uniform3iv(this.addr,t)}function TT(o,t){o.uniform4iv(this.addr,t)}function AT(o,t){o.uniform1uiv(this.addr,t)}function RT(o,t){o.uniform2uiv(this.addr,t)}function CT(o,t){o.uniform3uiv(this.addr,t)}function wT(o,t){o.uniform4uiv(this.addr,t)}function DT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||tv,u[d])}function UT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||nv,u[d])}function LT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||iv,u[d])}function NT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||ev,u[d])}function OT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return bT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}class PT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class BT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class IT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function _0(o,t){o.seq.push(t),o.map[t.id]=t}function zT(o,t,i){const r=o.name,l=r.length;for(Bd.lastIndex=0;;){const u=Bd.exec(r),d=Bd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){_0(i,p===void 0?new PT(h,o,t):new BT(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new IT(h),_0(i,g)),i=g}}}class Hc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);zT(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function v0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const FT=37297;let HT=0;function GT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const x0=new me;function VT(o){Ue._getMatrix(x0,Ue.workingColorSpace,o);const t=`mat3( ${x0.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case Gc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function y0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+GT(o.getShaderSource(t),h)}else return u}function kT(o,t){const i=VT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function XT(o,t){let i;switch(t){case Xy:i="Linear";break;case Wy:i="Reinhard";break;case qy:i="Cineon";break;case jy:i="ACESFilmic";break;case Zy:i="AgX";break;case Ky:i="Neutral";break;case Yy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new et;function WT(){Ue.getLuminanceCoefficients(Pc);const o=Pc.x.toFixed(4),t=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function jT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function YT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function ko(o){return o!==""}function S0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function M0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(ZT,QT)}const KT=new Map;function QT(o,t){let i=ve[t];if(i===void 0){const r=KT.get(t);if(r!==void 0)i=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Rh(i)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E0(o){return o.replace(JT,$T)}function $T(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function b0(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function t1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===C0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ey?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function e1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Cs:case ws:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n1(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function i1(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case w0:t="ENVMAP_BLENDING_MULTIPLY";break;case Vy:t="ENVMAP_BLENDING_MIX";break;case ky:t="ENVMAP_BLENDING_ADD";break}return t}function a1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function r1(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=t1(i),p=e1(i),v=n1(i),g=i1(i),x=a1(i),E=qT(i),T=jT(u),M=l.createProgram();let y,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ko).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(y=[b0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[b0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ve.tonemapping_pars_fragment:"",i.toneMapping!==Ga?XT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,kT("linearToOutputTexel",i.outputColorSpace),WT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),d=Rh(d),d=S0(d,i),d=M0(d,i),h=Rh(h),h=S0(h,i),h=M0(h,i),d=E0(d),h=E0(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===D_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=I+y+d,D=I+_+h,N=v0(l,l.VERTEX_SHADER,C),F=v0(l,l.FRAGMENT_SHADER,D);l.attachShader(M,N),l.attachShader(M,F),i.index0AttributeName!==void 0?l.bindAttribLocation(M,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(M,0,"position"),l.linkProgram(M);function G(X){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(M)||"",nt=l.getShaderInfoLog(N)||"",vt=l.getShaderInfoLog(F)||"",_t=ot.trim(),B=nt.trim(),at=vt.trim();let Y=!0,Tt=!0;if(l.getProgramParameter(M,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,M,N,F);else{const O=y0(l,N,"vertex"),rt=y0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(M,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+_t+`
`+O+`
`+rt)}else _t!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_t):(B===""||at==="")&&(Tt=!1);Tt&&(X.diagnostics={runnable:Y,programLog:_t,vertexShader:{log:B,prefix:y},fragmentShader:{log:at,prefix:_}})}l.deleteShader(N),l.deleteShader(F),J=new Hc(l,M),U=YT(l,M)}let J;this.getUniforms=function(){return J===void 0&&G(this),J};let U;this.getAttributes=function(){return U===void 0&&G(this),U};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(M,FT)),L},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(M),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=F,this}let s1=0;class o1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new l1(t),i.set(t,r)),r}}class l1{constructor(t){this.id=s1++,this.code=t,this.usedTimes=0}}function c1(o,t,i,r,l,u,d){const h=new Fh,m=new o1,p=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(U){return p.add(U),U===0?"uv":`uv${U}`}function y(U,L,X,ot,nt){const vt=ot.fog,_t=nt.geometry,B=U.isMeshStandardMaterial?ot.environment:null,at=(U.isMeshStandardMaterial?i:t).get(U.envMap||B),Y=at&&at.mapping===Yc?at.image.height:null,Tt=T[U.type];U.precision!==null&&(E=l.getMaxPrecision(U.precision),E!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",E,"instead."));const O=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,rt=O!==void 0?O.length:0;let bt=0;_t.morphAttributes.position!==void 0&&(bt=1),_t.morphAttributes.normal!==void 0&&(bt=2),_t.morphAttributes.color!==void 0&&(bt=3);let At,Ft,jt,st;if(Tt){const Ce=Oi[Tt];At=Ce.vertexShader,Ft=Ce.fragmentShader}else At=U.vertexShader,Ft=U.fragmentShader,m.update(U),jt=m.getVertexShaderID(U),st=m.getFragmentShaderID(U);const St=o.getRenderTarget(),Ot=o.state.buffers.depth.getReversed(),ne=nt.isInstancedMesh===!0,Jt=nt.isBatchedMesh===!0,he=!!U.map,Je=!!U.matcap,H=!!at,Ne=!!U.aoMap,ue=!!U.lightMap,P=!!U.bumpMap,j=!!U.normalMap,gt=!!U.displacementMap,ut=!!U.emissiveMap,dt=!!U.metalnessMap,Ct=!!U.roughnessMap,Rt=U.anisotropy>0,w=U.clearcoat>0,b=U.dispersion>0,V=U.iridescence>0,lt=U.sheen>0,ht=U.transmission>0,tt=Rt&&!!U.anisotropyMap,Pt=w&&!!U.clearcoatMap,Dt=w&&!!U.clearcoatNormalMap,Wt=w&&!!U.clearcoatRoughnessMap,Yt=V&&!!U.iridescenceMap,wt=V&&!!U.iridescenceThicknessMap,Ht=lt&&!!U.sheenColorMap,$t=lt&&!!U.sheenRoughnessMap,Kt=!!U.specularMap,zt=!!U.specularColorMap,de=!!U.specularIntensityMap,q=ht&&!!U.transmissionMap,Nt=ht&&!!U.thicknessMap,It=!!U.gradientMap,Xt=!!U.alphaMap,Ut=U.alphaTest>0,Et=!!U.alphaHash,Qt=!!U.extensions;let fe=Ga;U.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(fe=o.toneMapping);const Oe={shaderID:Tt,shaderType:U.type,shaderName:U.name,vertexShader:At,fragmentShader:Ft,defines:U.defines,customVertexShaderID:jt,customFragmentShaderID:st,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:E,batching:Jt,batchingColor:Jt&&nt._colorsTexture!==null,instancing:ne,instancingColor:ne&&nt.instanceColor!==null,instancingMorph:ne&&nt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ds,alphaToCoverage:!!U.alphaToCoverage,map:he,matcap:Je,envMap:H,envMapMode:H&&at.mapping,envMapCubeUVHeight:Y,aoMap:Ne,lightMap:ue,bumpMap:P,normalMap:j,displacementMap:x&&gt,emissiveMap:ut,normalMapObjectSpace:j&&U.normalMapType===eS,normalMapTangentSpace:j&&U.normalMapType===tS,metalnessMap:dt,roughnessMap:Ct,anisotropy:Rt,anisotropyMap:tt,clearcoat:w,clearcoatMap:Pt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Wt,dispersion:b,iridescence:V,iridescenceMap:Yt,iridescenceThicknessMap:wt,sheen:lt,sheenColorMap:Ht,sheenRoughnessMap:$t,specularMap:Kt,specularColorMap:zt,specularIntensityMap:de,transmission:ht,transmissionMap:q,thicknessMap:Nt,gradientMap:It,opaque:U.transparent===!1&&U.blending===Ts&&U.alphaToCoverage===!1,alphaMap:Xt,alphaTest:Ut,alphaHash:Et,combine:U.combine,mapUv:he&&M(U.map.channel),aoMapUv:Ne&&M(U.aoMap.channel),lightMapUv:ue&&M(U.lightMap.channel),bumpMapUv:P&&M(U.bumpMap.channel),normalMapUv:j&&M(U.normalMap.channel),displacementMapUv:gt&&M(U.displacementMap.channel),emissiveMapUv:ut&&M(U.emissiveMap.channel),metalnessMapUv:dt&&M(U.metalnessMap.channel),roughnessMapUv:Ct&&M(U.roughnessMap.channel),anisotropyMapUv:tt&&M(U.anisotropyMap.channel),clearcoatMapUv:Pt&&M(U.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&M(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&M(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&M(U.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&M(U.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&M(U.sheenColorMap.channel),sheenRoughnessMapUv:$t&&M(U.sheenRoughnessMap.channel),specularMapUv:Kt&&M(U.specularMap.channel),specularColorMapUv:zt&&M(U.specularColorMap.channel),specularIntensityMapUv:de&&M(U.specularIntensityMap.channel),transmissionMapUv:q&&M(U.transmissionMap.channel),thicknessMapUv:Nt&&M(U.thicknessMap.channel),alphaMapUv:Xt&&M(U.alphaMap.channel),vertexTangents:!!_t.attributes.tangent&&(j||Rt),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!_t.attributes.uv&&(he||Xt),fog:!!vt,useFog:U.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ot,skinning:nt.isSkinnedMesh===!0,morphTargets:_t.morphAttributes.position!==void 0,morphNormals:_t.morphAttributes.normal!==void 0,morphColors:_t.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:bt,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:fe,decodeVideoTexture:he&&U.map.isVideoTexture===!0&&Ue.getTransfer(U.map.colorSpace)===Ge,decodeVideoTextureEmissive:ut&&U.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(U.emissiveMap.colorSpace)===Ge,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===bi,flipSided:U.side===qn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Qt&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&U.extensions.multiDraw===!0||Jt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function _(U){const L=[];if(U.shaderID?L.push(U.shaderID):(L.push(U.customVertexShaderID),L.push(U.customFragmentShaderID)),U.defines!==void 0)for(const X in U.defines)L.push(X),L.push(U.defines[X]);return U.isRawShaderMaterial===!1&&(I(L,U),C(L,U),L.push(o.outputColorSpace)),L.push(U.customProgramCacheKey),L.join()}function I(U,L){U.push(L.precision),U.push(L.outputColorSpace),U.push(L.envMapMode),U.push(L.envMapCubeUVHeight),U.push(L.mapUv),U.push(L.alphaMapUv),U.push(L.lightMapUv),U.push(L.aoMapUv),U.push(L.bumpMapUv),U.push(L.normalMapUv),U.push(L.displacementMapUv),U.push(L.emissiveMapUv),U.push(L.metalnessMapUv),U.push(L.roughnessMapUv),U.push(L.anisotropyMapUv),U.push(L.clearcoatMapUv),U.push(L.clearcoatNormalMapUv),U.push(L.clearcoatRoughnessMapUv),U.push(L.iridescenceMapUv),U.push(L.iridescenceThicknessMapUv),U.push(L.sheenColorMapUv),U.push(L.sheenRoughnessMapUv),U.push(L.specularMapUv),U.push(L.specularColorMapUv),U.push(L.specularIntensityMapUv),U.push(L.transmissionMapUv),U.push(L.thicknessMapUv),U.push(L.combine),U.push(L.fogExp2),U.push(L.sizeAttenuation),U.push(L.morphTargetsCount),U.push(L.morphAttributeCount),U.push(L.numDirLights),U.push(L.numPointLights),U.push(L.numSpotLights),U.push(L.numSpotLightMaps),U.push(L.numHemiLights),U.push(L.numRectAreaLights),U.push(L.numDirLightShadows),U.push(L.numPointLightShadows),U.push(L.numSpotLightShadows),U.push(L.numSpotLightShadowsWithMaps),U.push(L.numLightProbes),U.push(L.shadowMapType),U.push(L.toneMapping),U.push(L.numClippingPlanes),U.push(L.numClipIntersection),U.push(L.depthPacking)}function C(U,L){h.disableAll(),L.supportsVertexTextures&&h.enable(0),L.instancing&&h.enable(1),L.instancingColor&&h.enable(2),L.instancingMorph&&h.enable(3),L.matcap&&h.enable(4),L.envMap&&h.enable(5),L.normalMapObjectSpace&&h.enable(6),L.normalMapTangentSpace&&h.enable(7),L.clearcoat&&h.enable(8),L.iridescence&&h.enable(9),L.alphaTest&&h.enable(10),L.vertexColors&&h.enable(11),L.vertexAlphas&&h.enable(12),L.vertexUv1s&&h.enable(13),L.vertexUv2s&&h.enable(14),L.vertexUv3s&&h.enable(15),L.vertexTangents&&h.enable(16),L.anisotropy&&h.enable(17),L.alphaHash&&h.enable(18),L.batching&&h.enable(19),L.dispersion&&h.enable(20),L.batchingColor&&h.enable(21),L.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),U.push(h.mask)}function D(U){const L=T[U.type];let X;if(L){const ot=Oi[L];X=DS.clone(ot.uniforms)}else X=U.uniforms;return X}function N(U,L){let X;for(let ot=0,nt=v.length;ot<nt;ot++){const vt=v[ot];if(vt.cacheKey===L){X=vt,++X.usedTimes;break}}return X===void 0&&(X=new r1(o,L,U,u),v.push(X)),X}function F(U){if(--U.usedTimes===0){const L=v.indexOf(U);v[L]=v[v.length-1],v.pop(),U.destroy()}}function G(U){m.remove(U)}function J(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:N,releaseProgram:F,releaseShaderCache:G,programs:v,dispose:J}}function u1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function f1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function T0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function A0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(g,x,E,T,M,y){let _=o[t];return _===void 0?(_={id:g.id,object:g,geometry:x,material:E,groupOrder:T,renderOrder:g.renderOrder,z:M,group:y},o[t]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=E,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=M,_.group=y),t++,_}function h(g,x,E,T,M,y){const _=d(g,x,E,T,M,y);E.transmission>0?r.push(_):E.transparent===!0?l.push(_):i.push(_)}function m(g,x,E,T,M,y){const _=d(g,x,E,T,M,y);E.transmission>0?r.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||f1),r.length>1&&r.sort(x||T0),l.length>1&&l.sort(x||T0)}function v(){for(let g=t,x=o.length;g<x;g++){const E=o[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function d1(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new A0,o.set(r,[d])):l>=u.length?(d=new A0,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function h1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new xe};break;case"SpotLight":i={position:new et,direction:new et,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new et,halfWidth:new et,halfHeight:new et};break}return o[t.id]=i,i}}}function p1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let m1=0;function g1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _1(o){const t=new h1,i=p1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new et);const l=new et,u=new je,d=new je;function h(p){let v=0,g=0,x=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let E=0,T=0,M=0,y=0,_=0,I=0,C=0,D=0,N=0,F=0,G=0;p.sort(g1);for(let U=0,L=p.length;U<L;U++){const X=p[U],ot=X.color,nt=X.intensity,vt=X.distance,_t=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)v+=ot.r*nt,g+=ot.g*nt,x+=ot.b*nt;else if(X.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(X.sh.coefficients[B],nt);G++}else if(X.isDirectionalLight){const B=t.get(X);if(B.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const at=X.shadow,Y=i.get(X);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,r.directionalShadow[E]=Y,r.directionalShadowMap[E]=_t,r.directionalShadowMatrix[E]=X.shadow.matrix,I++}r.directional[E]=B,E++}else if(X.isSpotLight){const B=t.get(X);B.position.setFromMatrixPosition(X.matrixWorld),B.color.copy(ot).multiplyScalar(nt),B.distance=vt,B.coneCos=Math.cos(X.angle),B.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),B.decay=X.decay,r.spot[M]=B;const at=X.shadow;if(X.map&&(r.spotLightMap[N]=X.map,N++,at.updateMatrices(X),X.castShadow&&F++),r.spotLightMatrix[M]=at.matrix,X.castShadow){const Y=i.get(X);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,r.spotShadow[M]=Y,r.spotShadowMap[M]=_t,D++}M++}else if(X.isRectAreaLight){const B=t.get(X);B.color.copy(ot).multiplyScalar(nt),B.halfWidth.set(X.width*.5,0,0),B.halfHeight.set(0,X.height*.5,0),r.rectArea[y]=B,y++}else if(X.isPointLight){const B=t.get(X);if(B.color.copy(X.color).multiplyScalar(X.intensity),B.distance=X.distance,B.decay=X.decay,X.castShadow){const at=X.shadow,Y=i.get(X);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,Y.shadowCameraNear=at.camera.near,Y.shadowCameraFar=at.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=_t,r.pointShadowMatrix[T]=X.shadow.matrix,C++}r.point[T]=B,T++}else if(X.isHemisphereLight){const B=t.get(X);B.skyColor.copy(X.color).multiplyScalar(nt),B.groundColor.copy(X.groundColor).multiplyScalar(nt),r.hemi[_]=B,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=kt.LTC_FLOAT_1,r.rectAreaLTC2=kt.LTC_FLOAT_2):(r.rectAreaLTC1=kt.LTC_HALF_1,r.rectAreaLTC2=kt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const J=r.hash;(J.directionalLength!==E||J.pointLength!==T||J.spotLength!==M||J.rectAreaLength!==y||J.hemiLength!==_||J.numDirectionalShadows!==I||J.numPointShadows!==C||J.numSpotShadows!==D||J.numSpotMaps!==N||J.numLightProbes!==G)&&(r.directional.length=E,r.spot.length=M,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=D+N-F,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=G,J.directionalLength=E,J.pointLength=T,J.spotLength=M,J.rectAreaLength=y,J.hemiLength=_,J.numDirectionalShadows=I,J.numPointShadows=C,J.numSpotShadows=D,J.numSpotMaps=N,J.numLightProbes=G,r.version=m1++)}function m(p,v){let g=0,x=0,E=0,T=0,M=0;const y=v.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const C=p[_];if(C.isDirectionalLight){const D=r.directional[g];D.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),g++}else if(C.isSpotLight){const D=r.spot[E];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),E++}else if(C.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(y),d.identity(),u.copy(C.matrixWorld),u.premultiply(y),d.extractRotation(u),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),T++}else if(C.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(y),x++}else if(C.isHemisphereLight){const D=r.hemi[M];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(y),M++}}}return{setup:h,setupView:m,state:r}}function R0(o){const t=new _1(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function v1(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new R0(o),t.set(l,[h])):u>=d.length?(h=new R0(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const x1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y1=`uniform sampler2D shadow_pass;
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
}`;function S1(o,t,i){let r=new Z0;const l=new Me,u=new Me,d=new sn,h=new jS({depthPacking:$y}),m=new YS,p={},v=i.maxTextureSize,g={[ka]:qn,[qn]:ka,[bi]:bi},x=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:x1,fragmentShader:y1}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const T=new Hn;T.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new An(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0;let _=this.type;this.render=function(F,G,J){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const U=o.getRenderTarget(),L=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(Ha),ot.buffers.depth.getReversed()===!0?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const nt=_!==aa&&this.type===aa,vt=_===aa&&this.type!==aa;for(let _t=0,B=F.length;_t<B;_t++){const at=F[_t],Y=at.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Tt=Y.getFrameExtents();if(l.multiply(Tt),u.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/Tt.x),l.x=u.x*Tt.x,Y.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/Tt.y),l.y=u.y*Tt.y,Y.mapSize.y=u.y)),Y.map===null||nt===!0||vt===!0){const rt=this.type!==aa?{minFilter:ai,magFilter:ai}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Mr(l.x,l.y,rt),Y.map.texture.name=at.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const O=Y.getViewportCount();for(let rt=0;rt<O;rt++){const bt=Y.getViewport(rt);d.set(u.x*bt.x,u.y*bt.y,u.x*bt.z,u.y*bt.w),ot.viewport(d),Y.updateMatrices(at,rt),r=Y.getFrustum(),D(G,J,Y.camera,at,this.type)}Y.isPointLightShadow!==!0&&this.type===aa&&I(Y,J),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(U,L,X)};function I(F,G){const J=t.update(M);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,E.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Mr(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(G,null,J,x,M,null),E.uniforms.shadow_pass.value=F.mapPass.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(G,null,J,E,M,null)}function C(F,G,J,U){let L=null;const X=J.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(X!==void 0)L=X;else if(L=J.isPointLight===!0?m:h,o.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const ot=L.uuid,nt=G.uuid;let vt=p[ot];vt===void 0&&(vt={},p[ot]=vt);let _t=vt[nt];_t===void 0&&(_t=L.clone(),vt[nt]=_t,G.addEventListener("dispose",N)),L=_t}if(L.visible=G.visible,L.wireframe=G.wireframe,U===aa?L.side=G.shadowSide!==null?G.shadowSide:G.side:L.side=G.shadowSide!==null?G.shadowSide:g[G.side],L.alphaMap=G.alphaMap,L.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,L.map=G.map,L.clipShadows=G.clipShadows,L.clippingPlanes=G.clippingPlanes,L.clipIntersection=G.clipIntersection,L.displacementMap=G.displacementMap,L.displacementScale=G.displacementScale,L.displacementBias=G.displacementBias,L.wireframeLinewidth=G.wireframeLinewidth,L.linewidth=G.linewidth,J.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ot=o.properties.get(L);ot.light=J}return L}function D(F,G,J,U,L){if(F.visible===!1)return;if(F.layers.test(G.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&L===aa)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,F.matrixWorld);const nt=t.update(F),vt=F.material;if(Array.isArray(vt)){const _t=nt.groups;for(let B=0,at=_t.length;B<at;B++){const Y=_t[B],Tt=vt[Y.materialIndex];if(Tt&&Tt.visible){const O=C(F,Tt,U,L);F.onBeforeShadow(o,F,G,J,nt,O,Y),o.renderBufferDirect(J,null,nt,O,F,Y),F.onAfterShadow(o,F,G,J,nt,O,Y)}}}else if(vt.visible){const _t=C(F,vt,U,L);F.onBeforeShadow(o,F,G,J,nt,_t,null),o.renderBufferDirect(J,null,nt,_t,F,null),F.onAfterShadow(o,F,G,J,nt,_t,null)}}const ot=F.children;for(let nt=0,vt=ot.length;nt<vt;nt++)D(ot[nt],G,J,U,L)}function N(F){F.target.removeEventListener("dispose",N);for(const J in p){const U=p[J],L=F.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}const M1={[Fd]:Hd,[Gd]:Xd,[Vd]:Wd,[Rs]:kd,[Hd]:Fd,[Xd]:Gd,[Wd]:Vd,[kd]:Rs};function E1(o,t){function i(){let q=!1;const Nt=new sn;let It=null;const Xt=new sn(0,0,0,0);return{setMask:function(Ut){It!==Ut&&!q&&(o.colorMask(Ut,Ut,Ut,Ut),It=Ut)},setLocked:function(Ut){q=Ut},setClear:function(Ut,Et,Qt,fe,Oe){Oe===!0&&(Ut*=fe,Et*=fe,Qt*=fe),Nt.set(Ut,Et,Qt,fe),Xt.equals(Nt)===!1&&(o.clearColor(Ut,Et,Qt,fe),Xt.copy(Nt))},reset:function(){q=!1,It=null,Xt.set(-1,0,0,0)}}}function r(){let q=!1,Nt=!1,It=null,Xt=null,Ut=null;return{setReversed:function(Et){if(Nt!==Et){const Qt=t.get("EXT_clip_control");Et?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Nt=Et;const fe=Ut;Ut=null,this.setClear(fe)}},getReversed:function(){return Nt},setTest:function(Et){Et?St(o.DEPTH_TEST):Ot(o.DEPTH_TEST)},setMask:function(Et){It!==Et&&!q&&(o.depthMask(Et),It=Et)},setFunc:function(Et){if(Nt&&(Et=M1[Et]),Xt!==Et){switch(Et){case Fd:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Gd:o.depthFunc(o.LESS);break;case Rs:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case kd:o.depthFunc(o.GEQUAL);break;case Xd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xt=Et}},setLocked:function(Et){q=Et},setClear:function(Et){Ut!==Et&&(Nt&&(Et=1-Et),o.clearDepth(Et),Ut=Et)},reset:function(){q=!1,It=null,Xt=null,Ut=null,Nt=!1}}}function l(){let q=!1,Nt=null,It=null,Xt=null,Ut=null,Et=null,Qt=null,fe=null,Oe=null;return{setTest:function(Ce){q||(Ce?St(o.STENCIL_TEST):Ot(o.STENCIL_TEST))},setMask:function(Ce){Nt!==Ce&&!q&&(o.stencilMask(Ce),Nt=Ce)},setFunc:function(Ce,mi,fn){(It!==Ce||Xt!==mi||Ut!==fn)&&(o.stencilFunc(Ce,mi,fn),It=Ce,Xt=mi,Ut=fn)},setOp:function(Ce,mi,fn){(Et!==Ce||Qt!==mi||fe!==fn)&&(o.stencilOp(Ce,mi,fn),Et=Ce,Qt=mi,fe=fn)},setLocked:function(Ce){q=Ce},setClear:function(Ce){Oe!==Ce&&(o.clearStencil(Ce),Oe=Ce)},reset:function(){q=!1,Nt=null,It=null,Xt=null,Ut=null,Et=null,Qt=null,fe=null,Oe=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,E=[],T=null,M=!1,y=null,_=null,I=null,C=null,D=null,N=null,F=null,G=new xe(0,0,0),J=0,U=!1,L=null,X=null,ot=null,nt=null,vt=null;const _t=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,at=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=at>=1):Y.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=at>=2);let Tt=null,O={};const rt=o.getParameter(o.SCISSOR_BOX),bt=o.getParameter(o.VIEWPORT),At=new sn().fromArray(rt),Ft=new sn().fromArray(bt);function jt(q,Nt,It,Xt){const Ut=new Uint8Array(4),Et=o.createTexture();o.bindTexture(q,Et),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Qt=0;Qt<It;Qt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,Ut):o.texImage2D(Nt+Qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ut);return Et}const st={};st[o.TEXTURE_2D]=jt(o.TEXTURE_2D,o.TEXTURE_2D,1),st[o.TEXTURE_CUBE_MAP]=jt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[o.TEXTURE_2D_ARRAY]=jt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),st[o.TEXTURE_3D]=jt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),St(o.DEPTH_TEST),d.setFunc(Rs),P(!1),j(T_),St(o.CULL_FACE),Ne(Ha);function St(q){v[q]!==!0&&(o.enable(q),v[q]=!0)}function Ot(q){v[q]!==!1&&(o.disable(q),v[q]=!1)}function ne(q,Nt){return g[q]!==Nt?(o.bindFramebuffer(q,Nt),g[q]=Nt,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Nt),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Jt(q,Nt){let It=E,Xt=!1;if(q){It=x.get(Nt),It===void 0&&(It=[],x.set(Nt,It));const Ut=q.textures;if(It.length!==Ut.length||It[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Qt=Ut.length;Et<Qt;Et++)It[Et]=o.COLOR_ATTACHMENT0+Et;It.length=Ut.length,Xt=!0}}else It[0]!==o.BACK&&(It[0]=o.BACK,Xt=!0);Xt&&o.drawBuffers(It)}function he(q){return T!==q?(o.useProgram(q),T=q,!0):!1}const Je={[gr]:o.FUNC_ADD,[Ty]:o.FUNC_SUBTRACT,[Ay]:o.FUNC_REVERSE_SUBTRACT};Je[Ry]=o.MIN,Je[Cy]=o.MAX;const H={[wy]:o.ZERO,[Dy]:o.ONE,[Uy]:o.SRC_COLOR,[Id]:o.SRC_ALPHA,[Iy]:o.SRC_ALPHA_SATURATE,[Py]:o.DST_COLOR,[Ny]:o.DST_ALPHA,[Ly]:o.ONE_MINUS_SRC_COLOR,[zd]:o.ONE_MINUS_SRC_ALPHA,[By]:o.ONE_MINUS_DST_COLOR,[Oy]:o.ONE_MINUS_DST_ALPHA,[zy]:o.CONSTANT_COLOR,[Fy]:o.ONE_MINUS_CONSTANT_COLOR,[Hy]:o.CONSTANT_ALPHA,[Gy]:o.ONE_MINUS_CONSTANT_ALPHA};function Ne(q,Nt,It,Xt,Ut,Et,Qt,fe,Oe,Ce){if(q===Ha){M===!0&&(Ot(o.BLEND),M=!1);return}if(M===!1&&(St(o.BLEND),M=!0),q!==by){if(q!==y||Ce!==U){if((_!==gr||D!==gr)&&(o.blendEquation(o.FUNC_ADD),_=gr,D=gr),Ce)switch(q){case Ts:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case A_:o.blendFunc(o.ONE,o.ONE);break;case R_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case C_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ts:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case A_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case R_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}I=null,C=null,N=null,F=null,G.set(0,0,0),J=0,y=q,U=Ce}return}Ut=Ut||Nt,Et=Et||It,Qt=Qt||Xt,(Nt!==_||Ut!==D)&&(o.blendEquationSeparate(Je[Nt],Je[Ut]),_=Nt,D=Ut),(It!==I||Xt!==C||Et!==N||Qt!==F)&&(o.blendFuncSeparate(H[It],H[Xt],H[Et],H[Qt]),I=It,C=Xt,N=Et,F=Qt),(fe.equals(G)===!1||Oe!==J)&&(o.blendColor(fe.r,fe.g,fe.b,Oe),G.copy(fe),J=Oe),y=q,U=!1}function ue(q,Nt){q.side===bi?Ot(o.CULL_FACE):St(o.CULL_FACE);let It=q.side===qn;Nt&&(It=!It),P(It),q.blending===Ts&&q.transparent===!1?Ne(Ha):Ne(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),u.setMask(q.colorWrite);const Xt=q.stencilWrite;h.setTest(Xt),Xt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ut(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Ot(o.SAMPLE_ALPHA_TO_COVERAGE)}function P(q){L!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),L=q)}function j(q){q!==Sy?(St(o.CULL_FACE),q!==X&&(q===T_?o.cullFace(o.BACK):q===My?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ot(o.CULL_FACE),X=q}function gt(q){q!==ot&&(B&&o.lineWidth(q),ot=q)}function ut(q,Nt,It){q?(St(o.POLYGON_OFFSET_FILL),(nt!==Nt||vt!==It)&&(o.polygonOffset(Nt,It),nt=Nt,vt=It)):Ot(o.POLYGON_OFFSET_FILL)}function dt(q){q?St(o.SCISSOR_TEST):Ot(o.SCISSOR_TEST)}function Ct(q){q===void 0&&(q=o.TEXTURE0+_t-1),Tt!==q&&(o.activeTexture(q),Tt=q)}function Rt(q,Nt,It){It===void 0&&(Tt===null?It=o.TEXTURE0+_t-1:It=Tt);let Xt=O[It];Xt===void 0&&(Xt={type:void 0,texture:void 0},O[It]=Xt),(Xt.type!==q||Xt.texture!==Nt)&&(Tt!==It&&(o.activeTexture(It),Tt=It),o.bindTexture(q,Nt||st[q]),Xt.type=q,Xt.texture=Nt)}function w(){const q=O[Tt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function V(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function tt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Dt(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(q){At.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),At.copy(q))}function $t(q){Ft.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Ft.copy(q))}function Kt(q,Nt){let It=p.get(Nt);It===void 0&&(It=new WeakMap,p.set(Nt,It));let Xt=It.get(q);Xt===void 0&&(Xt=o.getUniformBlockIndex(Nt,q.name),It.set(q,Xt))}function zt(q,Nt){const Xt=p.get(Nt).get(q);m.get(Nt)!==Xt&&(o.uniformBlockBinding(Nt,Xt,q.__bindingPointIndex),m.set(Nt,Xt))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Tt=null,O={},g={},x=new WeakMap,E=[],T=null,M=!1,y=null,_=null,I=null,C=null,D=null,N=null,F=null,G=new xe(0,0,0),J=0,U=!1,L=null,X=null,ot=null,nt=null,vt=null,At.set(0,0,o.canvas.width,o.canvas.height),Ft.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:St,disable:Ot,bindFramebuffer:ne,drawBuffers:Jt,useProgram:he,setBlending:Ne,setMaterial:ue,setFlipSided:P,setCullFace:j,setLineWidth:gt,setPolygonOffset:ut,setScissorTest:dt,activeTexture:Ct,bindTexture:Rt,unbindTexture:w,compressedTexImage2D:b,compressedTexImage3D:V,texImage2D:Yt,texImage3D:wt,updateUBOMapping:Kt,uniformBlockBinding:zt,texStorage2D:Dt,texStorage3D:Wt,texSubImage2D:lt,texSubImage3D:ht,compressedTexSubImage2D:tt,compressedTexSubImage3D:Pt,scissor:Ht,viewport:$t,reset:de}}function b1(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Me,v=new WeakMap;let g;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(w,b){return E?new OffscreenCanvas(w,b):kc("canvas")}function M(w,b,V){let lt=1;const ht=Rt(w);if((ht.width>V||ht.height>V)&&(lt=V/Math.max(ht.width,ht.height)),lt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const tt=Math.floor(lt*ht.width),Pt=Math.floor(lt*ht.height);g===void 0&&(g=T(tt,Pt));const Dt=b?T(tt,Pt):g;return Dt.width=tt,Dt.height=Pt,Dt.getContext("2d").drawImage(w,0,0,tt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+tt+"x"+Pt+")."),Dt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),w;return w}function y(w){return w.generateMipmaps}function _(w){o.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(w,b,V,lt,ht=!1){if(w!==null){if(o[w]!==void 0)return o[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=b;if(b===o.RED&&(V===o.FLOAT&&(tt=o.R32F),V===o.HALF_FLOAT&&(tt=o.R16F),V===o.UNSIGNED_BYTE&&(tt=o.R8)),b===o.RED_INTEGER&&(V===o.UNSIGNED_BYTE&&(tt=o.R8UI),V===o.UNSIGNED_SHORT&&(tt=o.R16UI),V===o.UNSIGNED_INT&&(tt=o.R32UI),V===o.BYTE&&(tt=o.R8I),V===o.SHORT&&(tt=o.R16I),V===o.INT&&(tt=o.R32I)),b===o.RG&&(V===o.FLOAT&&(tt=o.RG32F),V===o.HALF_FLOAT&&(tt=o.RG16F),V===o.UNSIGNED_BYTE&&(tt=o.RG8)),b===o.RG_INTEGER&&(V===o.UNSIGNED_BYTE&&(tt=o.RG8UI),V===o.UNSIGNED_SHORT&&(tt=o.RG16UI),V===o.UNSIGNED_INT&&(tt=o.RG32UI),V===o.BYTE&&(tt=o.RG8I),V===o.SHORT&&(tt=o.RG16I),V===o.INT&&(tt=o.RG32I)),b===o.RGB_INTEGER&&(V===o.UNSIGNED_BYTE&&(tt=o.RGB8UI),V===o.UNSIGNED_SHORT&&(tt=o.RGB16UI),V===o.UNSIGNED_INT&&(tt=o.RGB32UI),V===o.BYTE&&(tt=o.RGB8I),V===o.SHORT&&(tt=o.RGB16I),V===o.INT&&(tt=o.RGB32I)),b===o.RGBA_INTEGER&&(V===o.UNSIGNED_BYTE&&(tt=o.RGBA8UI),V===o.UNSIGNED_SHORT&&(tt=o.RGBA16UI),V===o.UNSIGNED_INT&&(tt=o.RGBA32UI),V===o.BYTE&&(tt=o.RGBA8I),V===o.SHORT&&(tt=o.RGBA16I),V===o.INT&&(tt=o.RGBA32I)),b===o.RGB&&(V===o.UNSIGNED_INT_5_9_9_9_REV&&(tt=o.RGB9_E5),V===o.UNSIGNED_INT_10F_11F_11F_REV&&(tt=o.R11F_G11F_B10F)),b===o.RGBA){const Pt=ht?Gc:Ue.getTransfer(lt);V===o.FLOAT&&(tt=o.RGBA32F),V===o.HALF_FLOAT&&(tt=o.RGBA16F),V===o.UNSIGNED_BYTE&&(tt=Pt===Ge?o.SRGB8_ALPHA8:o.RGBA8),V===o.UNSIGNED_SHORT_4_4_4_4&&(tt=o.RGBA4),V===o.UNSIGNED_SHORT_5_5_5_1&&(tt=o.RGB5_A1)}return(tt===o.R16F||tt===o.R32F||tt===o.RG16F||tt===o.RG32F||tt===o.RGBA16F||tt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function D(w,b){let V;return w?b===null||b===Sr||b===Wo?V=o.DEPTH24_STENCIL8:b===Bi?V=o.DEPTH32F_STENCIL8:b===Xo&&(V=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Sr||b===Wo?V=o.DEPTH_COMPONENT24:b===Bi?V=o.DEPTH_COMPONENT32F:b===Xo&&(V=o.DEPTH_COMPONENT16),V}function N(w,b){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==ai&&w.minFilter!==Ti?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function F(w){const b=w.target;b.removeEventListener("dispose",F),J(b),b.isVideoTexture&&v.delete(b)}function G(w){const b=w.target;b.removeEventListener("dispose",G),L(b)}function J(w){const b=r.get(w);if(b.__webglInit===void 0)return;const V=w.source,lt=x.get(V);if(lt){const ht=lt[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&U(w),Object.keys(lt).length===0&&x.delete(V)}r.remove(w)}function U(w){const b=r.get(w);o.deleteTexture(b.__webglTexture);const V=w.source,lt=x.get(V);delete lt[b.__cacheKey],d.memory.textures--}function L(w){const b=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(b.__webglFramebuffer[lt]))for(let ht=0;ht<b.__webglFramebuffer[lt].length;ht++)o.deleteFramebuffer(b.__webglFramebuffer[lt][ht]);else o.deleteFramebuffer(b.__webglFramebuffer[lt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[lt])}else{if(Array.isArray(b.__webglFramebuffer))for(let lt=0;lt<b.__webglFramebuffer.length;lt++)o.deleteFramebuffer(b.__webglFramebuffer[lt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let lt=0;lt<b.__webglColorRenderbuffer.length;lt++)b.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[lt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=w.textures;for(let lt=0,ht=V.length;lt<ht;lt++){const tt=r.get(V[lt]);tt.__webglTexture&&(o.deleteTexture(tt.__webglTexture),d.memory.textures--),r.remove(V[lt])}r.remove(w)}let X=0;function ot(){X=0}function nt(){const w=X;return w>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),X+=1,w}function vt(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function _t(w,b){const V=r.get(w);if(w.isVideoTexture&&dt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&V.__version!==w.version){const lt=w.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(V,w,b);return}}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,V.__webglTexture,o.TEXTURE0+b)}function B(w,b){const V=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){st(V,w,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,V.__webglTexture,o.TEXTURE0+b)}function at(w,b){const V=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){st(V,w,b);return}i.bindTexture(o.TEXTURE_3D,V.__webglTexture,o.TEXTURE0+b)}function Y(w,b){const V=r.get(w);if(w.version>0&&V.__version!==w.version){St(V,w,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,V.__webglTexture,o.TEXTURE0+b)}const Tt={[Yd]:o.REPEAT,[xr]:o.CLAMP_TO_EDGE,[Zd]:o.MIRRORED_REPEAT},O={[ai]:o.NEAREST,[Qy]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[Ti]:o.LINEAR,[ad]:o.LINEAR_MIPMAP_NEAREST,[yr]:o.LINEAR_MIPMAP_LINEAR},rt={[nS]:o.NEVER,[lS]:o.ALWAYS,[iS]:o.LESS,[z0]:o.LEQUAL,[aS]:o.EQUAL,[oS]:o.GEQUAL,[rS]:o.GREATER,[sS]:o.NOTEQUAL};function bt(w,b){if(b.type===Bi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ti||b.magFilter===ad||b.magFilter===cc||b.magFilter===yr||b.minFilter===Ti||b.minFilter===ad||b.minFilter===cc||b.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,Tt[b.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,Tt[b.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,Tt[b.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,O[b.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,O[b.minFilter]),b.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ai||b.minFilter!==cc&&b.minFilter!==yr||b.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");o.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function At(w,b){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",F));const lt=b.source;let ht=x.get(lt);ht===void 0&&(ht={},x.set(lt,ht));const tt=vt(b);if(tt!==w.__cacheKey){ht[tt]===void 0&&(ht[tt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,V=!0),ht[tt].usedTimes++;const Pt=ht[w.__cacheKey];Pt!==void 0&&(ht[w.__cacheKey].usedTimes--,Pt.usedTimes===0&&U(b)),w.__cacheKey=tt,w.__webglTexture=ht[tt].texture}return V}function Ft(w,b,V){return Math.floor(Math.floor(w/V)/b)}function jt(w,b,V,lt){const tt=w.updateRanges;if(tt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,V,lt,b.data);else{tt.sort((wt,Ht)=>wt.start-Ht.start);let Pt=0;for(let wt=1;wt<tt.length;wt++){const Ht=tt[Pt],$t=tt[wt],Kt=Ht.start+Ht.count,zt=Ft($t.start,b.width,4),de=Ft(Ht.start,b.width,4);$t.start<=Kt+1&&zt===de&&Ft($t.start+$t.count-1,b.width,4)===zt?Ht.count=Math.max(Ht.count,$t.start+$t.count-Ht.start):(++Pt,tt[Pt]=$t)}tt.length=Pt+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let wt=0,Ht=tt.length;wt<Ht;wt++){const $t=tt[wt],Kt=Math.floor($t.start/4),zt=Math.ceil($t.count/4),de=Kt%b.width,q=Math.floor(Kt/b.width),Nt=zt,It=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,de),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,de,q,Nt,It,V,lt,b.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function st(w,b,V){let lt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(lt=o.TEXTURE_3D);const ht=At(w,b),tt=b.source;i.bindTexture(lt,w.__webglTexture,o.TEXTURE0+V);const Pt=r.get(tt);if(tt.version!==Pt.__version||ht===!0){i.activeTexture(o.TEXTURE0+V);const Dt=Ue.getPrimaries(Ue.workingColorSpace),Wt=b.colorSpace===Fa?null:Ue.getPrimaries(b.colorSpace),Yt=b.colorSpace===Fa||Dt===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let wt=M(b.image,!1,l.maxTextureSize);wt=Ct(b,wt);const Ht=u.convert(b.format,b.colorSpace),$t=u.convert(b.type);let Kt=C(b.internalFormat,Ht,$t,b.colorSpace,b.isVideoTexture);bt(lt,b);let zt;const de=b.mipmaps,q=b.isVideoTexture!==!0,Nt=Pt.__version===void 0||ht===!0,It=tt.dataReady,Xt=N(b,wt);if(b.isDepthTexture)Kt=D(b.format===jo,b.type),Nt&&(q?i.texStorage2D(o.TEXTURE_2D,1,Kt,wt.width,wt.height):i.texImage2D(o.TEXTURE_2D,0,Kt,wt.width,wt.height,0,Ht,$t,null));else if(b.isDataTexture)if(de.length>0){q&&Nt&&i.texStorage2D(o.TEXTURE_2D,Xt,Kt,de[0].width,de[0].height);for(let Ut=0,Et=de.length;Ut<Et;Ut++)zt=de[Ut],q?It&&i.texSubImage2D(o.TEXTURE_2D,Ut,0,0,zt.width,zt.height,Ht,$t,zt.data):i.texImage2D(o.TEXTURE_2D,Ut,Kt,zt.width,zt.height,0,Ht,$t,zt.data);b.generateMipmaps=!1}else q?(Nt&&i.texStorage2D(o.TEXTURE_2D,Xt,Kt,wt.width,wt.height),It&&jt(b,wt,Ht,$t)):i.texImage2D(o.TEXTURE_2D,0,Kt,wt.width,wt.height,0,Ht,$t,wt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Kt,de[0].width,de[0].height,wt.depth);for(let Ut=0,Et=de.length;Ut<Et;Ut++)if(zt=de[Ut],b.format!==Ai)if(Ht!==null)if(q){if(It)if(b.layerUpdates.size>0){const Qt=i0(zt.width,zt.height,b.format,b.type);for(const fe of b.layerUpdates){const Oe=zt.data.subarray(fe*Qt/zt.data.BYTES_PER_ELEMENT,(fe+1)*Qt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ut,0,0,fe,zt.width,zt.height,1,Ht,Oe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ut,0,0,0,zt.width,zt.height,wt.depth,Ht,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ut,Kt,zt.width,zt.height,wt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?It&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ut,0,0,0,zt.width,zt.height,wt.depth,Ht,$t,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ut,Kt,zt.width,zt.height,wt.depth,0,Ht,$t,zt.data)}else{q&&Nt&&i.texStorage2D(o.TEXTURE_2D,Xt,Kt,de[0].width,de[0].height);for(let Ut=0,Et=de.length;Ut<Et;Ut++)zt=de[Ut],b.format!==Ai?Ht!==null?q?It&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ut,0,0,zt.width,zt.height,Ht,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Ut,Kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?It&&i.texSubImage2D(o.TEXTURE_2D,Ut,0,0,zt.width,zt.height,Ht,$t,zt.data):i.texImage2D(o.TEXTURE_2D,Ut,Kt,zt.width,zt.height,0,Ht,$t,zt.data)}else if(b.isDataArrayTexture)if(q){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Kt,wt.width,wt.height,wt.depth),It)if(b.layerUpdates.size>0){const Ut=i0(wt.width,wt.height,b.format,b.type);for(const Et of b.layerUpdates){const Qt=wt.data.subarray(Et*Ut/wt.data.BYTES_PER_ELEMENT,(Et+1)*Ut/wt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Et,wt.width,wt.height,1,Ht,$t,Qt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Ht,$t,wt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,wt.width,wt.height,wt.depth,0,Ht,$t,wt.data);else if(b.isData3DTexture)q?(Nt&&i.texStorage3D(o.TEXTURE_3D,Xt,Kt,wt.width,wt.height,wt.depth),It&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Ht,$t,wt.data)):i.texImage3D(o.TEXTURE_3D,0,Kt,wt.width,wt.height,wt.depth,0,Ht,$t,wt.data);else if(b.isFramebufferTexture){if(Nt)if(q)i.texStorage2D(o.TEXTURE_2D,Xt,Kt,wt.width,wt.height);else{let Ut=wt.width,Et=wt.height;for(let Qt=0;Qt<Xt;Qt++)i.texImage2D(o.TEXTURE_2D,Qt,Kt,Ut,Et,0,Ht,$t,null),Ut>>=1,Et>>=1}}else if(de.length>0){if(q&&Nt){const Ut=Rt(de[0]);i.texStorage2D(o.TEXTURE_2D,Xt,Kt,Ut.width,Ut.height)}for(let Ut=0,Et=de.length;Ut<Et;Ut++)zt=de[Ut],q?It&&i.texSubImage2D(o.TEXTURE_2D,Ut,0,0,Ht,$t,zt):i.texImage2D(o.TEXTURE_2D,Ut,Kt,Ht,$t,zt);b.generateMipmaps=!1}else if(q){if(Nt){const Ut=Rt(wt);i.texStorage2D(o.TEXTURE_2D,Xt,Kt,Ut.width,Ut.height)}It&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ht,$t,wt)}else i.texImage2D(o.TEXTURE_2D,0,Kt,Ht,$t,wt);y(b)&&_(lt),Pt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function St(w,b,V){if(b.image.length!==6)return;const lt=At(w,b),ht=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+V);const tt=r.get(ht);if(ht.version!==tt.__version||lt===!0){i.activeTexture(o.TEXTURE0+V);const Pt=Ue.getPrimaries(Ue.workingColorSpace),Dt=b.colorSpace===Fa?null:Ue.getPrimaries(b.colorSpace),Wt=b.colorSpace===Fa||Pt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Yt=b.isCompressedTexture||b.image[0].isCompressedTexture,wt=b.image[0]&&b.image[0].isDataTexture,Ht=[];for(let Et=0;Et<6;Et++)!Yt&&!wt?Ht[Et]=M(b.image[Et],!0,l.maxCubemapSize):Ht[Et]=wt?b.image[Et].image:b.image[Et],Ht[Et]=Ct(b,Ht[Et]);const $t=Ht[0],Kt=u.convert(b.format,b.colorSpace),zt=u.convert(b.type),de=C(b.internalFormat,Kt,zt,b.colorSpace),q=b.isVideoTexture!==!0,Nt=tt.__version===void 0||lt===!0,It=ht.dataReady;let Xt=N(b,$t);bt(o.TEXTURE_CUBE_MAP,b);let Ut;if(Yt){q&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,de,$t.width,$t.height);for(let Et=0;Et<6;Et++){Ut=Ht[Et].mipmaps;for(let Qt=0;Qt<Ut.length;Qt++){const fe=Ut[Qt];b.format!==Ai?Kt!==null?q?It&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Qt,0,0,fe.width,fe.height,Kt,fe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Qt,de,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Qt,0,0,fe.width,fe.height,Kt,zt,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Qt,de,fe.width,fe.height,0,Kt,zt,fe.data)}}}else{if(Ut=b.mipmaps,q&&Nt){Ut.length>0&&Xt++;const Et=Rt(Ht[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,de,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(wt){q?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Ht[Et].width,Ht[Et].height,Kt,zt,Ht[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,de,Ht[Et].width,Ht[Et].height,0,Kt,zt,Ht[Et].data);for(let Qt=0;Qt<Ut.length;Qt++){const Oe=Ut[Qt].image[Et].image;q?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Qt+1,0,0,Oe.width,Oe.height,Kt,zt,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Qt+1,de,Oe.width,Oe.height,0,Kt,zt,Oe.data)}}else{q?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Kt,zt,Ht[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,de,Kt,zt,Ht[Et]);for(let Qt=0;Qt<Ut.length;Qt++){const fe=Ut[Qt];q?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Qt+1,0,0,Kt,zt,fe.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Qt+1,de,Kt,zt,fe.image[Et])}}}y(b)&&_(o.TEXTURE_CUBE_MAP),tt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ot(w,b,V,lt,ht,tt){const Pt=u.convert(V.format,V.colorSpace),Dt=u.convert(V.type),Wt=C(V.internalFormat,Pt,Dt,V.colorSpace),Yt=r.get(b),wt=r.get(V);if(wt.__renderTarget=b,!Yt.__hasExternalTextures){const Ht=Math.max(1,b.width>>tt),$t=Math.max(1,b.height>>tt);ht===o.TEXTURE_3D||ht===o.TEXTURE_2D_ARRAY?i.texImage3D(ht,tt,Wt,Ht,$t,b.depth,0,Pt,Dt,null):i.texImage2D(ht,tt,Wt,Ht,$t,0,Pt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),ut(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,ht,wt.__webglTexture,0,gt(b)):(ht===o.TEXTURE_2D||ht>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,ht,wt.__webglTexture,tt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ne(w,b,V){if(o.bindRenderbuffer(o.RENDERBUFFER,w),b.depthBuffer){const lt=b.depthTexture,ht=lt&&lt.isDepthTexture?lt.type:null,tt=D(b.stencilBuffer,ht),Pt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=gt(b);ut(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,tt,b.width,b.height):V?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,tt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,tt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,w)}else{const lt=b.textures;for(let ht=0;ht<lt.length;ht++){const tt=lt[ht],Pt=u.convert(tt.format,tt.colorSpace),Dt=u.convert(tt.type),Wt=C(tt.internalFormat,Pt,Dt,tt.colorSpace),Yt=gt(b);V&&ut(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Wt,b.width,b.height):ut(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,Wt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Jt(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=r.get(b.depthTexture);lt.__renderTarget=b,(!lt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_t(b.depthTexture,0);const ht=lt.__webglTexture,tt=gt(b);if(b.depthTexture.format===qo)ut(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0,tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0);else if(b.depthTexture.format===jo)ut(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0,tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function he(w){const b=r.get(w),V=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const lt=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),lt){const ht=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,lt.removeEventListener("dispose",ht)};lt.addEventListener("dispose",ht),b.__depthDisposeCallback=ht}b.__boundDepthTexture=lt}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const lt=w.texture.mipmaps;lt&&lt.length>0?Jt(b.__webglFramebuffer[0],w):Jt(b.__webglFramebuffer,w)}else if(V){b.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[lt]),b.__webglDepthbuffer[lt]===void 0)b.__webglDepthbuffer[lt]=o.createRenderbuffer(),ne(b.__webglDepthbuffer[lt],w,!1);else{const ht=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[lt];o.bindRenderbuffer(o.RENDERBUFFER,tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,tt)}}else{const lt=w.texture.mipmaps;if(lt&&lt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),ne(b.__webglDepthbuffer,w,!1);else{const ht=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,tt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(w,b,V){const lt=r.get(w);b!==void 0&&Ot(lt.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),V!==void 0&&he(w)}function H(w){const b=w.texture,V=r.get(w),lt=r.get(b);w.addEventListener("dispose",G);const ht=w.textures,tt=w.isWebGLCubeRenderTarget===!0,Pt=ht.length>1;if(Pt||(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=b.version,d.memory.textures++),tt){V.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[Dt]=[];for(let Wt=0;Wt<b.mipmaps.length;Wt++)V.__webglFramebuffer[Dt][Wt]=o.createFramebuffer()}else V.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)V.__webglFramebuffer[Dt]=o.createFramebuffer()}else V.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Dt=0,Wt=ht.length;Dt<Wt;Dt++){const Yt=r.get(ht[Dt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&ut(w)===!1){V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Dt=0;Dt<ht.length;Dt++){const Wt=ht[Dt];V.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,V.__webglColorRenderbuffer[Dt]);const Yt=u.convert(Wt.format,Wt.colorSpace),wt=u.convert(Wt.type),Ht=C(Wt.internalFormat,Yt,wt,Wt.colorSpace,w.isXRRenderTarget===!0),$t=gt(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,Ht,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,V.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),ne(V.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(tt){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),bt(o.TEXTURE_CUBE_MAP,b);for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)Ot(V.__webglFramebuffer[Dt][Wt],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Wt);else Ot(V.__webglFramebuffer[Dt],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(b)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Dt=0,Wt=ht.length;Dt<Wt;Dt++){const Yt=ht[Dt],wt=r.get(Yt);let Ht=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ht=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ht,wt.__webglTexture),bt(Ht,Yt),Ot(V.__webglFramebuffer,w,Yt,o.COLOR_ATTACHMENT0+Dt,Ht,0),y(Yt)&&_(Ht)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Dt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,lt.__webglTexture),bt(Dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)Ot(V.__webglFramebuffer[Wt],w,b,o.COLOR_ATTACHMENT0,Dt,Wt);else Ot(V.__webglFramebuffer,w,b,o.COLOR_ATTACHMENT0,Dt,0);y(b)&&_(Dt),i.unbindTexture()}w.depthBuffer&&he(w)}function Ne(w){const b=w.textures;for(let V=0,lt=b.length;V<lt;V++){const ht=b[V];if(y(ht)){const tt=I(w),Pt=r.get(ht).__webglTexture;i.bindTexture(tt,Pt),_(tt),i.unbindTexture()}}}const ue=[],P=[];function j(w){if(w.samples>0){if(ut(w)===!1){const b=w.textures,V=w.width,lt=w.height;let ht=o.COLOR_BUFFER_BIT;const tt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(w),Dt=b.length>1;if(Dt)for(let Yt=0;Yt<b.length;Yt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Wt=w.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Yt=0;Yt<b.length;Yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ht|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ht|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Yt]);const wt=r.get(b[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,wt,0)}o.blitFramebuffer(0,0,V,lt,0,0,V,lt,ht,o.NEAREST),m===!0&&(ue.length=0,P.length=0,ue.push(o.COLOR_ATTACHMENT0+Yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ue.push(tt),P.push(tt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,P)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Yt=0;Yt<b.length;Yt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Yt]);const wt=r.get(b[Yt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,wt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const b=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function gt(w){return Math.min(l.maxSamples,w.samples)}function ut(w){const b=r.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dt(w){const b=d.render.frame;v.get(w)!==b&&(v.set(w,b),w.update())}function Ct(w,b){const V=w.colorSpace,lt=w.format,ht=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Ds&&V!==Fa&&(Ue.getTransfer(V)===Ge?(lt!==Ai||ht!==oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=ot,this.setTexture2D=_t,this.setTexture2DArray=B,this.setTexture3D=at,this.setTextureCube=Y,this.rebindTextures=Je,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=ut}function T1(o,t){function i(r,l=Fa){let u;const d=Ue.getTransfer(l);if(r===oa)return o.UNSIGNED_BYTE;if(r===Uh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Lh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===N0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===O0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===U0)return o.BYTE;if(r===L0)return o.SHORT;if(r===Xo)return o.UNSIGNED_SHORT;if(r===Dh)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===Ko)return o.HALF_FLOAT;if(r===P0)return o.ALPHA;if(r===B0)return o.RGB;if(r===Ai)return o.RGBA;if(r===qo)return o.DEPTH_COMPONENT;if(r===jo)return o.DEPTH_STENCIL;if(r===Nh)return o.RED;if(r===Oh)return o.RED_INTEGER;if(r===I0)return o.RG;if(r===Ph)return o.RG_INTEGER;if(r===Bh)return o.RGBA_INTEGER;if(r===Bc||r===Ic||r===zc||r===Fc)if(d===Ge)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Bc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Bc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===th||r===eh||r===nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===th||r===eh)return d===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===nh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ih)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_h||r===vh||r===xh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===_h)return d===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yh||r===Sh||r===Mh||r===Eh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===yh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Sh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const A1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
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

}`;class C1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Q0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Xa({vertexShader:A1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new An(new $o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w1 extends Ls{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,x=null,E=null,T=null;const M=typeof XRWebGLBinding<"u",y=new C1,_={},I=i.getContextAttributes();let C=null,D=null;const N=[],F=[],G=new Me;let J=null;const U=new Ei;U.viewport=new sn;const L=new Ei;L.viewport=new sn;const X=[U,L],ot=new ZS;let nt=null,vt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let St=N[st];return St===void 0&&(St=new Rd,N[st]=St),St.getTargetRaySpace()},this.getControllerGrip=function(st){let St=N[st];return St===void 0&&(St=new Rd,N[st]=St),St.getGripSpace()},this.getHand=function(st){let St=N[st];return St===void 0&&(St=new Rd,N[st]=St),St.getHandSpace()};function _t(st){const St=F.indexOf(st.inputSource);if(St===-1)return;const Ot=N[St];Ot!==void 0&&(Ot.update(st.inputSource,st.frame,p||d),Ot.dispatchEvent({type:st.type,data:st.inputSource}))}function B(){l.removeEventListener("select",_t),l.removeEventListener("selectstart",_t),l.removeEventListener("selectend",_t),l.removeEventListener("squeeze",_t),l.removeEventListener("squeezestart",_t),l.removeEventListener("squeezeend",_t),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",at);for(let st=0;st<N.length;st++){const St=F[st];St!==null&&(F[st]=null,N[st].disconnect(St))}nt=null,vt=null,y.reset();for(const st in _)delete _[st];t.setRenderTarget(C),E=null,x=null,g=null,l=null,D=null,jt.stop(),r.isPresenting=!1,t.setPixelRatio(J),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){u=st,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){h=st,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(C=t.getRenderTarget(),l.addEventListener("select",_t),l.addEventListener("selectstart",_t),l.addEventListener("selectend",_t),l.addEventListener("squeeze",_t),l.addEventListener("squeezestart",_t),l.addEventListener("squeezeend",_t),l.addEventListener("end",B),l.addEventListener("inputsourceschange",at),I.xrCompatible!==!0&&await i.makeXRCompatible(),J=t.getPixelRatio(),t.getSize(G),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,ne=null,Jt=null;I.depth&&(Jt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ot=I.stencil?jo:qo,ne=I.stencil?Wo:Sr);const he={colorFormat:i.RGBA8,depthFormat:Jt,scaleFactor:u};g=this.getBinding(),x=g.createProjectionLayer(he),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new Mr(x.textureWidth,x.textureHeight,{format:Ai,type:oa,depthTexture:new K0(x.textureWidth,x.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ot={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Ot),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new Mr(E.framebufferWidth,E.framebufferHeight,{format:Ai,type:oa,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),jt.setContext(l),jt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function at(st){for(let St=0;St<st.removed.length;St++){const Ot=st.removed[St],ne=F.indexOf(Ot);ne>=0&&(F[ne]=null,N[ne].disconnect(Ot))}for(let St=0;St<st.added.length;St++){const Ot=st.added[St];let ne=F.indexOf(Ot);if(ne===-1){for(let he=0;he<N.length;he++)if(he>=F.length){F.push(Ot),ne=he;break}else if(F[he]===null){F[he]=Ot,ne=he;break}if(ne===-1)break}const Jt=N[ne];Jt&&Jt.connect(Ot)}}const Y=new et,Tt=new et;function O(st,St,Ot){Y.setFromMatrixPosition(St.matrixWorld),Tt.setFromMatrixPosition(Ot.matrixWorld);const ne=Y.distanceTo(Tt),Jt=St.projectionMatrix.elements,he=Ot.projectionMatrix.elements,Je=Jt[14]/(Jt[10]-1),H=Jt[14]/(Jt[10]+1),Ne=(Jt[9]+1)/Jt[5],ue=(Jt[9]-1)/Jt[5],P=(Jt[8]-1)/Jt[0],j=(he[8]+1)/he[0],gt=Je*P,ut=Je*j,dt=ne/(-P+j),Ct=dt*-P;if(St.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Ct),st.translateZ(dt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Jt[10]===-1)st.projectionMatrix.copy(St.projectionMatrix),st.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const Rt=Je+dt,w=H+dt,b=gt-Ct,V=ut+(ne-Ct),lt=Ne*H/w*Rt,ht=ue*H/w*Rt;st.projectionMatrix.makePerspective(b,V,lt,ht,Rt,w),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function rt(st,St){St===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(St.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let St=st.near,Ot=st.far;y.texture!==null&&(y.depthNear>0&&(St=y.depthNear),y.depthFar>0&&(Ot=y.depthFar)),ot.near=L.near=U.near=St,ot.far=L.far=U.far=Ot,(nt!==ot.near||vt!==ot.far)&&(l.updateRenderState({depthNear:ot.near,depthFar:ot.far}),nt=ot.near,vt=ot.far),ot.layers.mask=st.layers.mask|6,U.layers.mask=ot.layers.mask&3,L.layers.mask=ot.layers.mask&5;const ne=st.parent,Jt=ot.cameras;rt(ot,ne);for(let he=0;he<Jt.length;he++)rt(Jt[he],ne);Jt.length===2?O(ot,U,L):ot.projectionMatrix.copy(U.projectionMatrix),bt(st,ot,ne)};function bt(st,St,Ot){Ot===null?st.matrix.copy(St.matrixWorld):(st.matrix.copy(Ot.matrixWorld),st.matrix.invert(),st.matrix.multiply(St.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(St.projectionMatrix),st.projectionMatrixInverse.copy(St.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Th*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return ot},this.getFoveation=function(){if(!(x===null&&E===null))return m},this.setFoveation=function(st){m=st,x!==null&&(x.fixedFoveation=st),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=st)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ot)},this.getCameraTexture=function(st){return _[st]};let At=null;function Ft(st,St){if(v=St.getViewerPose(p||d),T=St,v!==null){const Ot=v.views;E!==null&&(t.setRenderTargetFramebuffer(D,E.framebuffer),t.setRenderTarget(D));let ne=!1;Ot.length!==ot.cameras.length&&(ot.cameras.length=0,ne=!0);for(let H=0;H<Ot.length;H++){const Ne=Ot[H];let ue=null;if(E!==null)ue=E.getViewport(Ne);else{const j=g.getViewSubImage(x,Ne);ue=j.viewport,H===0&&(t.setRenderTargetTextures(D,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(D))}let P=X[H];P===void 0&&(P=new Ei,P.layers.enable(H),P.viewport=new sn,X[H]=P),P.matrix.fromArray(Ne.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Ne.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(ue.x,ue.y,ue.width,ue.height),H===0&&(ot.matrix.copy(P.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale)),ne===!0&&ot.cameras.push(P)}const Jt=l.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&M){g=r.getBinding();const H=g.getDepthInformation(Ot[0]);H&&H.isValid&&H.texture&&y.init(H,l.renderState)}if(Jt&&Jt.includes("camera-access")&&M){t.state.unbindTexture(),g=r.getBinding();for(let H=0;H<Ot.length;H++){const Ne=Ot[H].camera;if(Ne){let ue=_[Ne];ue||(ue=new Q0,_[Ne]=ue);const P=g.getCameraImage(Ne);ue.sourceTexture=P}}}}for(let Ot=0;Ot<N.length;Ot++){const ne=F[Ot],Jt=N[Ot];ne!==null&&Jt!==void 0&&Jt.update(ne,St,p||d)}At&&At(st,St),St.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:St}),T=null}const jt=new $0;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(st){At=st},this.dispose=function(){}}}const hr=new la,D1=new je;function U1(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,X0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,I,C,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),g(y,_)):_.isMeshPhongMaterial?(u(y,_),v(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&E(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),T(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),M(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,I,C):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===qn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===qn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=t.get(_),C=I.envMap,D=I.envMapRotation;C&&(y.envMap.value=C,hr.copy(D),hr.x*=-1,hr.y*=-1,hr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),y.envMapRotation.value.setFromMatrix4(D1.makeRotationFromEuler(hr)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,I,C){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=C*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function E(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function M(y,_){const I=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function L1(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,C){const D=C.program;r.uniformBlockBinding(I,D)}function p(I,C){let D=l[I.id];D===void 0&&(T(I),D=v(I),l[I.id]=D,I.addEventListener("dispose",y));const N=C.program;r.updateUBOMapping(I,N);const F=t.render.frame;u[I.id]!==F&&(x(I),u[I.id]=F)}function v(I){const C=g();I.__bindingPointIndex=C;const D=o.createBuffer(),N=I.__size,F=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,N,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,D),D}function g(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const C=l[I.id],D=I.uniforms,N=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let F=0,G=D.length;F<G;F++){const J=Array.isArray(D[F])?D[F]:[D[F]];for(let U=0,L=J.length;U<L;U++){const X=J[U];if(E(X,F,U,N)===!0){const ot=X.__offset,nt=Array.isArray(X.value)?X.value:[X.value];let vt=0;for(let _t=0;_t<nt.length;_t++){const B=nt[_t],at=M(B);typeof B=="number"||typeof B=="boolean"?(X.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,ot+vt,X.__data)):B.isMatrix3?(X.__data[0]=B.elements[0],X.__data[1]=B.elements[1],X.__data[2]=B.elements[2],X.__data[3]=0,X.__data[4]=B.elements[3],X.__data[5]=B.elements[4],X.__data[6]=B.elements[5],X.__data[7]=0,X.__data[8]=B.elements[6],X.__data[9]=B.elements[7],X.__data[10]=B.elements[8],X.__data[11]=0):(B.toArray(X.__data,vt),vt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(I,C,D,N){const F=I.value,G=C+"_"+D;if(N[G]===void 0)return typeof F=="number"||typeof F=="boolean"?N[G]=F:N[G]=F.clone(),!0;{const J=N[G];if(typeof F=="number"||typeof F=="boolean"){if(J!==F)return N[G]=F,!0}else if(J.equals(F)===!1)return J.copy(F),!0}return!1}function T(I){const C=I.uniforms;let D=0;const N=16;for(let G=0,J=C.length;G<J;G++){const U=Array.isArray(C[G])?C[G]:[C[G]];for(let L=0,X=U.length;L<X;L++){const ot=U[L],nt=Array.isArray(ot.value)?ot.value:[ot.value];for(let vt=0,_t=nt.length;vt<_t;vt++){const B=nt[vt],at=M(B),Y=D%N,Tt=Y%at.boundary,O=Y+Tt;D+=Tt,O!==0&&N-O<at.storage&&(D+=N-O),ot.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=D,D+=at.storage}}}const F=D%N;return F>0&&(D+=N-F),I.__size=D,I.__cache={},this}function M(I){const C={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(C.boundary=4,C.storage=4):I.isVector2?(C.boundary=8,C.storage=8):I.isVector3||I.isColor?(C.boundary=16,C.storage=12):I.isVector4?(C.boundary=16,C.storage=16):I.isMatrix3?(C.boundary=48,C.storage=48):I.isMatrix4?(C.boundary=64,C.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),C}function y(I){const C=I.target;C.removeEventListener("dispose",y);const D=d.indexOf(C.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function _(){for(const I in l)o.deleteBuffer(l[I]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class N1{constructor(t={}){const{canvas:i=uS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=d;const T=new Uint32Array(4),M=new Int32Array(4);let y=null,_=null;const I=[],C=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let N=!1;this._outputColorSpace=hi;let F=0,G=0,J=null,U=-1,L=null;const X=new sn,ot=new sn;let nt=null;const vt=new xe(0);let _t=0,B=i.width,at=i.height,Y=1,Tt=null,O=null;const rt=new sn(0,0,B,at),bt=new sn(0,0,B,at);let At=!1;const Ft=new Z0;let jt=!1,st=!1;const St=new je,Ot=new et,ne=new sn,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Je(){return J===null?Y:1}let H=r;function Ne(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",Xt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),H===null){const Z="webgl2";if(H=Ne(Z,R),H===null)throw Ne(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ue,P,j,gt,ut,dt,Ct,Rt,w,b,V,lt,ht,tt,Pt,Dt,Wt,Yt,wt,Ht,$t,Kt,zt,de;function q(){ue=new kb(H),ue.init(),Kt=new T1(H,ue),P=new Bb(H,ue,t,Kt),j=new E1(H,ue),P.reversedDepthBuffer&&x&&j.buffers.depth.setReversed(!0),gt=new qb(H),ut=new u1,dt=new b1(H,ue,j,ut,P,Kt,gt),Ct=new zb(D),Rt=new Vb(D),w=new JS(H),zt=new Ob(H,w),b=new Xb(H,w,gt,zt),V=new Yb(H,b,w,gt),wt=new jb(H,P,dt),Dt=new Ib(ut),lt=new c1(D,Ct,Rt,ue,P,zt,Dt),ht=new U1(D,ut),tt=new d1,Pt=new v1(ue),Yt=new Nb(D,Ct,Rt,j,V,E,m),Wt=new S1(D,V,P),de=new L1(H,gt,P,j),Ht=new Pb(H,ue,gt),$t=new Wb(H,ue,gt),gt.programs=lt.programs,D.capabilities=P,D.extensions=ue,D.properties=ut,D.renderLists=tt,D.shadowMap=Wt,D.state=j,D.info=gt}q();const Nt=new w1(D,H);this.xr=Nt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(B,at,!1))},this.getSize=function(R){return R.set(B,at)},this.setSize=function(R,Z,pt=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,at=Z,i.width=Math.floor(R*Y),i.height=Math.floor(Z*Y),pt===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(B*Y,at*Y).floor()},this.setDrawingBufferSize=function(R,Z,pt){B=R,at=Z,Y=pt,i.width=Math.floor(R*pt),i.height=Math.floor(Z*pt),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(X)},this.getViewport=function(R){return R.copy(rt)},this.setViewport=function(R,Z,pt,mt){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,Z,pt,mt),j.viewport(X.copy(rt).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(bt)},this.setScissor=function(R,Z,pt,mt){R.isVector4?bt.set(R.x,R.y,R.z,R.w):bt.set(R,Z,pt,mt),j.scissor(ot.copy(bt).multiplyScalar(Y).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(R){j.setScissorTest(At=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,pt=!0){let mt=0;if(R){let Q=!1;if(J!==null){const Lt=J.texture.format;Q=Lt===Bh||Lt===Ph||Lt===Oh}if(Q){const Lt=J.texture.type,Gt=Lt===oa||Lt===Sr||Lt===Xo||Lt===Wo||Lt===Uh||Lt===Lh,qt=Yt.getClearColor(),Vt=Yt.getClearAlpha(),re=qt.r,oe=qt.g,te=qt.b;Gt?(T[0]=re,T[1]=oe,T[2]=te,T[3]=Vt,H.clearBufferuiv(H.COLOR,0,T)):(M[0]=re,M[1]=oe,M[2]=te,M[3]=Vt,H.clearBufferiv(H.COLOR,0,M))}else mt|=H.COLOR_BUFFER_BIT}Z&&(mt|=H.DEPTH_BUFFER_BIT),pt&&(mt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",Xt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Yt.dispose(),tt.dispose(),Pt.dispose(),ut.dispose(),Ct.dispose(),Rt.dispose(),V.dispose(),zt.dispose(),de.dispose(),lt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",fn),Nt.removeEventListener("sessionend",dn),$e.stop()};function It(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=gt.autoReset,Z=Wt.enabled,pt=Wt.autoUpdate,mt=Wt.needsUpdate,Q=Wt.type;q(),gt.autoReset=R,Wt.enabled=Z,Wt.autoUpdate=pt,Wt.needsUpdate=mt,Wt.type=Q}function Ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Et(R){const Z=R.target;Z.removeEventListener("dispose",Et),Qt(Z)}function Qt(R){fe(R),ut.remove(R)}function fe(R){const Z=ut.get(R).programs;Z!==void 0&&(Z.forEach(function(pt){lt.releaseProgram(pt)}),R.isShaderMaterial&&lt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,pt,mt,Q,Lt){Z===null&&(Z=Jt);const Gt=Q.isMesh&&Q.matrixWorld.determinant()<0,qt=ca(R,Z,pt,mt,Q);j.setMaterial(mt,Gt);let Vt=pt.index,re=1;if(mt.wireframe===!0){if(Vt=b.getWireframeAttribute(pt),Vt===void 0)return;re=2}const oe=pt.drawRange,te=pt.attributes.position;let ge=oe.start*re,we=(oe.start+oe.count)*re;Lt!==null&&(ge=Math.max(ge,Lt.start*re),we=Math.min(we,(Lt.start+Lt.count)*re)),Vt!==null?(ge=Math.max(ge,0),we=Math.min(we,Vt.count)):te!=null&&(ge=Math.max(ge,0),we=Math.min(we,te.count));const Ye=we-ge;if(Ye<0||Ye===1/0)return;zt.setup(Q,mt,qt,pt,Vt);let Ie,_e=Ht;if(Vt!==null&&(Ie=w.get(Vt),_e=$t,_e.setIndex(Ie)),Q.isMesh)mt.wireframe===!0?(j.setLineWidth(mt.wireframeLinewidth*Je()),_e.setMode(H.LINES)):_e.setMode(H.TRIANGLES);else if(Q.isLine){let ae=mt.linewidth;ae===void 0&&(ae=1),j.setLineWidth(ae*Je()),Q.isLineSegments?_e.setMode(H.LINES):Q.isLineLoop?_e.setMode(H.LINE_LOOP):_e.setMode(H.LINE_STRIP)}else Q.isPoints?_e.setMode(H.POINTS):Q.isSprite&&_e.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))_e.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ae=Q._multiDrawStarts,qe=Q._multiDrawCounts,Ee=Q._multiDrawCount,Rn=Vt?w.get(Vt).bytesPerElement:1,gi=ut.get(mt).currentProgram.getUniforms();for(let Pn=0;Pn<Ee;Pn++)gi.setValue(H,"_gl_DrawID",Pn),_e.render(ae[Pn]/Rn,qe[Pn])}else if(Q.isInstancedMesh)_e.renderInstances(ge,Ye,Q.count);else if(pt.isInstancedBufferGeometry){const ae=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,qe=Math.min(pt.instanceCount,ae);_e.renderInstances(ge,Ye,qe)}else _e.render(ge,Ye)};function Oe(R,Z,pt){R.transparent===!0&&R.side===bi&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,Ci(R,Z,pt),R.side=ka,R.needsUpdate=!0,Ci(R,Z,pt),R.side=bi):Ci(R,Z,pt)}this.compile=function(R,Z,pt=null){pt===null&&(pt=R),_=Pt.get(pt),_.init(Z),C.push(_),pt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),R!==pt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const mt=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Lt=Q.material;if(Lt)if(Array.isArray(Lt))for(let Gt=0;Gt<Lt.length;Gt++){const qt=Lt[Gt];Oe(qt,pt,Q),mt.add(qt)}else Oe(Lt,pt,Q),mt.add(Lt)}),_=C.pop(),mt},this.compileAsync=function(R,Z,pt=null){const mt=this.compile(R,Z,pt);return new Promise(Q=>{function Lt(){if(mt.forEach(function(Gt){ut.get(Gt).currentProgram.isReady()&&mt.delete(Gt)}),mt.size===0){Q(R);return}setTimeout(Lt,10)}ue.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Ce=null;function mi(R){Ce&&Ce(R)}function fn(){$e.stop()}function dn(){$e.start()}const $e=new $0;$e.setAnimationLoop(mi),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(R){Ce=R,Nt.setAnimationLoop(R),R===null?$e.stop():$e.start()},Nt.addEventListener("sessionstart",fn),Nt.addEventListener("sessionend",dn),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(Z),Z=Nt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,Z,J),_=Pt.get(R,C.length),_.init(Z),C.push(_),St.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ft.setFromProjectionMatrix(St,Ii,Z.reversedDepth),st=this.localClippingEnabled,jt=Dt.init(this.clippingPlanes,st),y=tt.get(R,I.length),y.init(),I.push(y),Nt.enabled===!0&&Nt.isPresenting===!0){const Lt=D.xr.getDepthSensingMesh();Lt!==null&&Ri(Lt,Z,-1/0,D.sortObjects)}Ri(R,Z,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(Tt,O),he=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,he&&Yt.addToRenderList(y,R),this.info.render.frame++,jt===!0&&Dt.beginShadows();const pt=_.state.shadowsArray;Wt.render(pt,R,Z),jt===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const mt=y.opaque,Q=y.transmissive;if(_.setupLights(),Z.isArrayCamera){const Lt=Z.cameras;if(Q.length>0)for(let Gt=0,qt=Lt.length;Gt<qt;Gt++){const Vt=Lt[Gt];tl(mt,Q,R,Vt)}he&&Yt.render(R);for(let Gt=0,qt=Lt.length;Gt<qt;Gt++){const Vt=Lt[Gt];br(y,R,Vt,Vt.viewport)}}else Q.length>0&&tl(mt,Q,R,Z),he&&Yt.render(R),br(y,R,Z);J!==null&&G===0&&(dt.updateMultisampleRenderTarget(J),dt.updateRenderTargetMipmap(J)),R.isScene===!0&&R.onAfterRender(D,R,Z),zt.resetDefaultState(),U=-1,L=null,C.pop(),C.length>0?(_=C[C.length-1],jt===!0&&Dt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Ri(R,Z,pt,mt){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)pt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ft.intersectsSprite(R)){mt&&ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);const Gt=V.update(R),qt=R.material;qt.visible&&y.push(R,Gt,qt,pt,ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ft.intersectsObject(R))){const Gt=V.update(R),qt=R.material;if(mt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ne.copy(R.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),ne.copy(Gt.boundingSphere.center)),ne.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(qt)){const Vt=Gt.groups;for(let re=0,oe=Vt.length;re<oe;re++){const te=Vt[re],ge=qt[te.materialIndex];ge&&ge.visible&&y.push(R,Gt,ge,pt,ne.z,te)}}else qt.visible&&y.push(R,Gt,qt,pt,ne.z,null)}}const Lt=R.children;for(let Gt=0,qt=Lt.length;Gt<qt;Gt++)Ri(Lt[Gt],Z,pt,mt)}function br(R,Z,pt,mt){const Q=R.opaque,Lt=R.transmissive,Gt=R.transparent;_.setupLightsView(pt),jt===!0&&Dt.setGlobalState(D.clippingPlanes,pt),mt&&j.viewport(X.copy(mt)),Q.length>0&&Tr(Q,Z,pt),Lt.length>0&&Tr(Lt,Z,pt),Gt.length>0&&Tr(Gt,Z,pt),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function tl(R,Z,pt,mt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[mt.id]===void 0&&(_.state.transmissionRenderTarget[mt.id]=new Mr(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Ko:oa,minFilter:yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Lt=_.state.transmissionRenderTarget[mt.id],Gt=mt.viewport||X;Lt.setSize(Gt.z*D.transmissionResolutionScale,Gt.w*D.transmissionResolutionScale);const qt=D.getRenderTarget(),Vt=D.getActiveCubeFace(),re=D.getActiveMipmapLevel();D.setRenderTarget(Lt),D.getClearColor(vt),_t=D.getClearAlpha(),_t<1&&D.setClearColor(16777215,.5),D.clear(),he&&Yt.render(pt);const oe=D.toneMapping;D.toneMapping=Ga;const te=mt.viewport;if(mt.viewport!==void 0&&(mt.viewport=void 0),_.setupLightsView(mt),jt===!0&&Dt.setGlobalState(D.clippingPlanes,mt),Tr(R,pt,mt),dt.updateMultisampleRenderTarget(Lt),dt.updateRenderTargetMipmap(Lt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let we=0,Ye=Z.length;we<Ye;we++){const Ie=Z[we],_e=Ie.object,ae=Ie.geometry,qe=Ie.material,Ee=Ie.group;if(qe.side===bi&&_e.layers.test(mt.layers)){const Rn=qe.side;qe.side=qn,qe.needsUpdate=!0,Bs(_e,pt,mt,ae,qe,Ee),qe.side=Rn,qe.needsUpdate=!0,ge=!0}}ge===!0&&(dt.updateMultisampleRenderTarget(Lt),dt.updateRenderTargetMipmap(Lt))}D.setRenderTarget(qt,Vt,re),D.setClearColor(vt,_t),te!==void 0&&(mt.viewport=te),D.toneMapping=oe}function Tr(R,Z,pt){const mt=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Lt=R.length;Q<Lt;Q++){const Gt=R[Q],qt=Gt.object,Vt=Gt.geometry,re=Gt.group;let oe=Gt.material;oe.allowOverride===!0&&mt!==null&&(oe=mt),qt.layers.test(pt.layers)&&Bs(qt,Z,pt,Vt,oe,re)}}function Bs(R,Z,pt,mt,Q,Lt){R.onBeforeRender(D,Z,pt,mt,Q,Lt),R.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(D,Z,pt,mt,R,Lt),Q.transparent===!0&&Q.side===bi&&Q.forceSinglePass===!1?(Q.side=qn,Q.needsUpdate=!0,D.renderBufferDirect(pt,Z,mt,Q,R,Lt),Q.side=ka,Q.needsUpdate=!0,D.renderBufferDirect(pt,Z,mt,Q,R,Lt),Q.side=bi):D.renderBufferDirect(pt,Z,mt,Q,R,Lt),R.onAfterRender(D,Z,pt,mt,Q,Lt)}function Ci(R,Z,pt){Z.isScene!==!0&&(Z=Jt);const mt=ut.get(R),Q=_.state.lights,Lt=_.state.shadowsArray,Gt=Q.state.version,qt=lt.getParameters(R,Q.state,Lt,Z,pt),Vt=lt.getProgramCacheKey(qt);let re=mt.programs;mt.environment=R.isMeshStandardMaterial?Z.environment:null,mt.fog=Z.fog,mt.envMap=(R.isMeshStandardMaterial?Rt:Ct).get(R.envMap||mt.environment),mt.envMapRotation=mt.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,re===void 0&&(R.addEventListener("dispose",Et),re=new Map,mt.programs=re);let oe=re.get(Vt);if(oe!==void 0){if(mt.currentProgram===oe&&mt.lightsStateVersion===Gt)return zi(R,qt),oe}else qt.uniforms=lt.getUniforms(R),R.onBeforeCompile(qt,D),oe=lt.acquireProgram(qt,Vt),re.set(Vt,oe),mt.uniforms=qt.uniforms;const te=mt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=Dt.uniform),zi(R,qt),mt.needsLights=ua(R),mt.lightsStateVersion=Gt,mt.needsLights&&(te.ambientLightColor.value=Q.state.ambient,te.lightProbe.value=Q.state.probe,te.directionalLights.value=Q.state.directional,te.directionalLightShadows.value=Q.state.directionalShadow,te.spotLights.value=Q.state.spot,te.spotLightShadows.value=Q.state.spotShadow,te.rectAreaLights.value=Q.state.rectArea,te.ltc_1.value=Q.state.rectAreaLTC1,te.ltc_2.value=Q.state.rectAreaLTC2,te.pointLights.value=Q.state.point,te.pointLightShadows.value=Q.state.pointShadow,te.hemisphereLights.value=Q.state.hemi,te.directionalShadowMap.value=Q.state.directionalShadowMap,te.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,te.spotShadowMap.value=Q.state.spotShadowMap,te.spotLightMatrix.value=Q.state.spotLightMatrix,te.spotLightMap.value=Q.state.spotLightMap,te.pointShadowMap.value=Q.state.pointShadowMap,te.pointShadowMatrix.value=Q.state.pointShadowMatrix),mt.currentProgram=oe,mt.uniformsList=null,oe}function Ar(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Hc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function zi(R,Z){const pt=ut.get(R);pt.outputColorSpace=Z.outputColorSpace,pt.batching=Z.batching,pt.batchingColor=Z.batchingColor,pt.instancing=Z.instancing,pt.instancingColor=Z.instancingColor,pt.instancingMorph=Z.instancingMorph,pt.skinning=Z.skinning,pt.morphTargets=Z.morphTargets,pt.morphNormals=Z.morphNormals,pt.morphColors=Z.morphColors,pt.morphTargetsCount=Z.morphTargetsCount,pt.numClippingPlanes=Z.numClippingPlanes,pt.numIntersection=Z.numClipIntersection,pt.vertexAlphas=Z.vertexAlphas,pt.vertexTangents=Z.vertexTangents,pt.toneMapping=Z.toneMapping}function ca(R,Z,pt,mt,Q){Z.isScene!==!0&&(Z=Jt),dt.resetTextureUnits();const Lt=Z.fog,Gt=mt.isMeshStandardMaterial?Z.environment:null,qt=J===null?D.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ds,Vt=(mt.isMeshStandardMaterial?Rt:Ct).get(mt.envMap||Gt),re=mt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,oe=!!pt.attributes.tangent&&(!!mt.normalMap||mt.anisotropy>0),te=!!pt.morphAttributes.position,ge=!!pt.morphAttributes.normal,we=!!pt.morphAttributes.color;let Ye=Ga;mt.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ye=D.toneMapping);const Ie=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,_e=Ie!==void 0?Ie.length:0,ae=ut.get(mt),qe=_.state.lights;if(jt===!0&&(st===!0||R!==L)){const tn=R===L&&mt.id===U;Dt.setState(mt,R,tn)}let Ee=!1;mt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==qe.state.version||ae.outputColorSpace!==qt||Q.isBatchedMesh&&ae.batching===!1||!Q.isBatchedMesh&&ae.batching===!0||Q.isBatchedMesh&&ae.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ae.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ae.instancing===!1||!Q.isInstancedMesh&&ae.instancing===!0||Q.isSkinnedMesh&&ae.skinning===!1||!Q.isSkinnedMesh&&ae.skinning===!0||Q.isInstancedMesh&&ae.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ae.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ae.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ae.instancingMorph===!1&&Q.morphTexture!==null||ae.envMap!==Vt||mt.fog===!0&&ae.fog!==Lt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Dt.numPlanes||ae.numIntersection!==Dt.numIntersection)||ae.vertexAlphas!==re||ae.vertexTangents!==oe||ae.morphTargets!==te||ae.morphNormals!==ge||ae.morphColors!==we||ae.toneMapping!==Ye||ae.morphTargetsCount!==_e)&&(Ee=!0):(Ee=!0,ae.__version=mt.version);let Rn=ae.currentProgram;Ee===!0&&(Rn=Ci(mt,Z,Q));let gi=!1,Pn=!1,_n=!1;const ke=Rn.getUniforms(),Bn=ae.uniforms;if(j.useProgram(Rn.program)&&(gi=!0,Pn=!0,_n=!0),mt.id!==U&&(U=mt.id,Pn=!0),gi||L!==R){j.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ke.setValue(H,"projectionMatrix",R.projectionMatrix),ke.setValue(H,"viewMatrix",R.matrixWorldInverse);const Mn=ke.map.cameraPosition;Mn!==void 0&&Mn.setValue(H,Ot.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&ke.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(mt.isMeshPhongMaterial||mt.isMeshToonMaterial||mt.isMeshLambertMaterial||mt.isMeshBasicMaterial||mt.isMeshStandardMaterial||mt.isShaderMaterial)&&ke.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,Pn=!0,_n=!0)}if(Q.isSkinnedMesh){ke.setOptional(H,Q,"bindMatrix"),ke.setOptional(H,Q,"bindMatrixInverse");const tn=Q.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ke.setValue(H,"boneTexture",tn.boneTexture,dt))}Q.isBatchedMesh&&(ke.setOptional(H,Q,"batchingTexture"),ke.setValue(H,"batchingTexture",Q._matricesTexture,dt),ke.setOptional(H,Q,"batchingIdTexture"),ke.setValue(H,"batchingIdTexture",Q._indirectTexture,dt),ke.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ke.setValue(H,"batchingColorTexture",Q._colorsTexture,dt));const Cn=pt.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&wt.update(Q,pt,Rn),(Pn||ae.receiveShadow!==Q.receiveShadow)&&(ae.receiveShadow=Q.receiveShadow,ke.setValue(H,"receiveShadow",Q.receiveShadow)),mt.isMeshGouraudMaterial&&mt.envMap!==null&&(Bn.envMap.value=Vt,Bn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),mt.isMeshStandardMaterial&&mt.envMap===null&&Z.environment!==null&&(Bn.envMapIntensity.value=Z.environmentIntensity),Pn&&(ke.setValue(H,"toneMappingExposure",D.toneMappingExposure),ae.needsLights&&Wa(Bn,_n),Lt&&mt.fog===!0&&ht.refreshFogUniforms(Bn,Lt),ht.refreshMaterialUniforms(Bn,mt,Y,at,_.state.transmissionRenderTarget[R.id]),Hc.upload(H,Ar(ae),Bn,dt)),mt.isShaderMaterial&&mt.uniformsNeedUpdate===!0&&(Hc.upload(H,Ar(ae),Bn,dt),mt.uniformsNeedUpdate=!1),mt.isSpriteMaterial&&ke.setValue(H,"center",Q.center),ke.setValue(H,"modelViewMatrix",Q.modelViewMatrix),ke.setValue(H,"normalMatrix",Q.normalMatrix),ke.setValue(H,"modelMatrix",Q.matrixWorld),mt.isShaderMaterial||mt.isRawShaderMaterial){const tn=mt.uniformsGroups;for(let Mn=0,Rr=tn.length;Mn<Rr;Mn++){const Gn=tn[Mn];de.update(Gn,Rn),de.bind(Gn,Rn)}}return Rn}function Wa(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function ua(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,Z,pt){const mt=ut.get(R);mt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,mt.__autoAllocateDepthBuffer===!1&&(mt.__useRenderToTexture=!1),ut.get(R.texture).__webglTexture=Z,ut.get(R.depthTexture).__webglTexture=mt.__autoAllocateDepthBuffer?void 0:pt,mt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const pt=ut.get(R);pt.__webglFramebuffer=Z,pt.__useDefaultFramebuffer=Z===void 0};const on=H.createFramebuffer();this.setRenderTarget=function(R,Z=0,pt=0){J=R,F=Z,G=pt;let mt=!0,Q=null,Lt=!1,Gt=!1;if(R){const Vt=ut.get(R);if(Vt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(H.FRAMEBUFFER,null),mt=!1;else if(Vt.__webglFramebuffer===void 0)dt.setupRenderTarget(R);else if(Vt.__hasExternalTextures)dt.rebindTextures(R,ut.get(R.texture).__webglTexture,ut.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Vt.__boundDepthTexture!==te){if(te!==null&&ut.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(R)}}const re=R.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Gt=!0);const oe=ut.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(oe[Z])?Q=oe[Z][pt]:Q=oe[Z],Lt=!0):R.samples>0&&dt.useMultisampledRTT(R)===!1?Q=ut.get(R).__webglMultisampledFramebuffer:Array.isArray(oe)?Q=oe[pt]:Q=oe,X.copy(R.viewport),ot.copy(R.scissor),nt=R.scissorTest}else X.copy(rt).multiplyScalar(Y).floor(),ot.copy(bt).multiplyScalar(Y).floor(),nt=At;if(pt!==0&&(Q=on),j.bindFramebuffer(H.FRAMEBUFFER,Q)&&mt&&j.drawBuffers(R,Q),j.viewport(X),j.scissor(ot),j.setScissorTest(nt),Lt){const Vt=ut.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Vt.__webglTexture,pt)}else if(Gt){const Vt=Z;for(let re=0;re<R.textures.length;re++){const oe=ut.get(R.textures[re]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+re,oe.__webglTexture,pt,Vt)}}else if(R!==null&&pt!==0){const Vt=ut.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Vt.__webglTexture,pt)}U=-1},this.readRenderTargetPixels=function(R,Z,pt,mt,Q,Lt,Gt,qt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt){j.bindFramebuffer(H.FRAMEBUFFER,Vt);try{const re=R.textures[qt],oe=re.format,te=re.type;if(!P.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-mt&&pt>=0&&pt<=R.height-Q&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+qt),H.readPixels(Z,pt,mt,Q,Kt.convert(oe),Kt.convert(te),Lt))}finally{const re=J!==null?ut.get(J).__webglFramebuffer:null;j.bindFramebuffer(H.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(R,Z,pt,mt,Q,Lt,Gt,qt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt)if(Z>=0&&Z<=R.width-mt&&pt>=0&&pt<=R.height-Q){j.bindFramebuffer(H.FRAMEBUFFER,Vt);const re=R.textures[qt],oe=re.format,te=re.type;if(!P.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ge),H.bufferData(H.PIXEL_PACK_BUFFER,Lt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+qt),H.readPixels(Z,pt,mt,Q,Kt.convert(oe),Kt.convert(te),0);const we=J!==null?ut.get(J).__webglFramebuffer:null;j.bindFramebuffer(H.FRAMEBUFFER,we);const Ye=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await fS(H,Ye,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ge),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Lt),H.deleteBuffer(ge),H.deleteSync(Ye),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,pt=0){const mt=Math.pow(2,-pt),Q=Math.floor(R.image.width*mt),Lt=Math.floor(R.image.height*mt),Gt=Z!==null?Z.x:0,qt=Z!==null?Z.y:0;dt.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,pt,0,0,Gt,qt,Q,Lt),j.unbindTexture()};const el=H.createFramebuffer(),nl=H.createFramebuffer();this.copyTextureToTexture=function(R,Z,pt=null,mt=null,Q=0,Lt=null){Lt===null&&(Q!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=Q,Q=0):Lt=0);let Gt,qt,Vt,re,oe,te,ge,we,Ye;const Ie=R.isCompressedTexture?R.mipmaps[Lt]:R.image;if(pt!==null)Gt=pt.max.x-pt.min.x,qt=pt.max.y-pt.min.y,Vt=pt.isBox3?pt.max.z-pt.min.z:1,re=pt.min.x,oe=pt.min.y,te=pt.isBox3?pt.min.z:0;else{const Cn=Math.pow(2,-Q);Gt=Math.floor(Ie.width*Cn),qt=Math.floor(Ie.height*Cn),R.isDataArrayTexture?Vt=Ie.depth:R.isData3DTexture?Vt=Math.floor(Ie.depth*Cn):Vt=1,re=0,oe=0,te=0}mt!==null?(ge=mt.x,we=mt.y,Ye=mt.z):(ge=0,we=0,Ye=0);const _e=Kt.convert(Z.format),ae=Kt.convert(Z.type);let qe;Z.isData3DTexture?(dt.setTexture3D(Z,0),qe=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(dt.setTexture2DArray(Z,0),qe=H.TEXTURE_2D_ARRAY):(dt.setTexture2D(Z,0),qe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ee=H.getParameter(H.UNPACK_ROW_LENGTH),Rn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gi=H.getParameter(H.UNPACK_SKIP_PIXELS),Pn=H.getParameter(H.UNPACK_SKIP_ROWS),_n=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ie.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,re),H.pixelStorei(H.UNPACK_SKIP_ROWS,oe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,te);const ke=R.isDataArrayTexture||R.isData3DTexture,Bn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const Cn=ut.get(R),tn=ut.get(Z),Mn=ut.get(Cn.__renderTarget),Rr=ut.get(tn.__renderTarget);j.bindFramebuffer(H.READ_FRAMEBUFFER,Mn.__webglFramebuffer),j.bindFramebuffer(H.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Gn=0;Gn<Vt;Gn++)ke&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ut.get(R).__webglTexture,Q,te+Gn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ut.get(Z).__webglTexture,Lt,Ye+Gn)),H.blitFramebuffer(re,oe,Gt,qt,ge,we,Gt,qt,H.DEPTH_BUFFER_BIT,H.NEAREST);j.bindFramebuffer(H.READ_FRAMEBUFFER,null),j.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||ut.has(R)){const Cn=ut.get(R),tn=ut.get(Z);j.bindFramebuffer(H.READ_FRAMEBUFFER,el),j.bindFramebuffer(H.DRAW_FRAMEBUFFER,nl);for(let Mn=0;Mn<Vt;Mn++)ke?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Cn.__webglTexture,Q,te+Mn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Cn.__webglTexture,Q),Bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tn.__webglTexture,Lt,Ye+Mn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,tn.__webglTexture,Lt),Q!==0?H.blitFramebuffer(re,oe,Gt,qt,ge,we,Gt,qt,H.COLOR_BUFFER_BIT,H.NEAREST):Bn?H.copyTexSubImage3D(qe,Lt,ge,we,Ye+Mn,re,oe,Gt,qt):H.copyTexSubImage2D(qe,Lt,ge,we,re,oe,Gt,qt);j.bindFramebuffer(H.READ_FRAMEBUFFER,null),j.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Bn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(qe,Lt,ge,we,Ye,Gt,qt,Vt,_e,ae,Ie.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(qe,Lt,ge,we,Ye,Gt,qt,Vt,_e,Ie.data):H.texSubImage3D(qe,Lt,ge,we,Ye,Gt,qt,Vt,_e,ae,Ie):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Lt,ge,we,Gt,qt,_e,ae,Ie.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Lt,ge,we,Ie.width,Ie.height,_e,Ie.data):H.texSubImage2D(H.TEXTURE_2D,Lt,ge,we,Gt,qt,_e,ae,Ie);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Rn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Pn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,_n),Lt===0&&Z.generateMipmaps&&H.generateMipmap(qe),j.unbindTexture()},this.initRenderTarget=function(R){ut.get(R).__webglFramebuffer===void 0&&dt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?dt.setTextureCube(R,0):R.isData3DTexture?dt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?dt.setTexture2DArray(R,0):dt.setTexture2D(R,0),j.unbindTexture()},this.resetState=function(){F=0,G=0,J=null,j.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const av={xRange:[-2,2],yRange:[-1.5,1.5],gridDivisions:8,axisColor:8947848,gridColor:3355443},O1=o=>{const{xRange:t,yRange:i,gridDivisions:r,axisColor:l,gridColor:u}=av,[d,h]=t,[m,p]=i,v=(h-d)/r,g=(p-m)/r,x=new Vo;x.name="coordinate-system";for(let T=0;T<=r;T++){const M=d+T*v,y=Math.abs(M)<.01,_=[new et(M,m,-.01),new et(M,p,-.01)],I=new Hn().setFromPoints(_),C=new Zo({color:y?l:u,transparent:!0,opacity:y?1:.4}),D=new jc(I,C);D.userData.isGrid=!0,x.add(D)}for(let T=0;T<=r;T++){const M=m+T*g,y=Math.abs(M)<.01,_=[new et(d,M,-.01),new et(h,M,-.01)],I=new Hn().setFromPoints(_),C=new Zo({color:y?l:u,transparent:!0,opacity:y?1:.4}),D=new jc(I,C);D.userData.isGrid=!0,x.add(D)}const E=(T,M,y=.15)=>{const _=document.createElement("canvas"),I=_.getContext("2d");_.width=128,_.height=64,I.fillStyle="transparent",I.fillRect(0,0,_.width,_.height),I.font="Bold 32px Arial",I.fillStyle="#aaaaaa",I.textAlign="center",I.textBaseline="middle",I.fillText(T,_.width/2,_.height/2);const C=new qS(_);C.minFilter=Ti;const D=new j0({map:C,transparent:!0,depthTest:!1}),N=new zS(D);return N.position.copy(M),N.scale.set(y*2,y,1),N.userData.isGrid=!0,N};for(let T=0;T<=r;T++){const M=d+T*v;Math.abs(M)>.01&&x.add(E(M.toFixed(1),new et(M,m-.15,0),.12))}for(let T=0;T<=r;T++){const M=m+T*g;Math.abs(M)>.01&&x.add(E(M.toFixed(1),new et(d-.2,M,0),.12))}return x.add(E("x",new et(h+.2,0,0),.18)),x.add(E("y",new et(0,p+.15,0),.18)),x.add(E("0",new et(-.12,-.12,0),.1)),o.add(x),x},Ke={period1:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period2:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period3:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period4:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period5:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period6plus:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},trajectory:"#ff00ff",manifold:"#1e90ff",stableManifold:"#ffa500",attractor:"#27ae60",repeller:"#e74c3c",saddlePoint:"#eedf32",periodicBlue:"#3498db"},P1=()=>{const o=ee.useRef(null),t=ee.useRef(null),i=ee.useRef(null),r=ee.useRef(null),l=ee.useRef(null),u=ee.useRef(null),d=ee.useRef(null),[h,m]=ee.useState("henon"),[p,v]=ee.useState(null),[g,x]=ee.useState({a:.4,b:.3,epsilon:.0625,startX:.1,startY:.1,maxIterations:1e3,maxPeriod:5}),[E,T]=ee.useState({orbits:[],isReady:!1,showOrbits:!1}),[M,y]=ee.useState({manifolds:[],stableManifolds:[],fixedPoints:[],intersections:[],isComputing:!1,isReady:!1,showOrbits:!0,showOrbitLines:!1,showUnstableManifold:!0,showStableManifold:!1,intersectionThreshold:.05,highlightedOrbitId:null,currentPoint:{x:.1,y:.1,nx:1,ny:0},trajectoryPoints:[],iteration:0,isRunning:!1,hasStarted:!1,showTrail:!0,startPoint:{x:.1,y:.1,nx:1,ny:0}}),[_,I]=ee.useState({period1:!0,period2:!0,period3:!0,period4:!0,period5:!0,period6plus:!1}),[C,D]=ee.useState({gridBoxes:[],invariantMeasure:null,leftEigenvector:null,transitions:null,selectedBoxIndex:null,currentBoxIndex:-1,isComputing:!1,subdivisions:20,pointsPerBox:64,epsilon:.05,showUlamOverlay:!1,showTransitions:!0,showCurrentBox:!0,needsRecompute:!1}),[N,F]=ee.useState({isAnimating:!1,parameter:"a",rangeValue:.1,direction:1,steps:10,currentStep:0,baseValue:null,targetValue:null});ee.useRef(null);const[G,J]=ee.useState({isRecording:!1,isEncoding:!1,frameCount:0,recordingEnabled:!1,encodingProgress:0,error:null}),U=ee.useRef([]),L=ee.useRef(null),X=ee.useRef(null),ot=ee.useRef(null),[nt,vt]=ee.useState({visible:!1,x:0,y:0,data:null}),_t=ee.useRef(new KS),B=ee.useRef(new Me);ee.useEffect(()=>{if(!o.current)return;const P=new BS;P.background=new xe(657930),i.current=P;const[j,gt]=av.yRange,ut=gt-j,dt=.5,Ct=window.innerWidth*.75/window.innerHeight,Rt=ut+dt*2,w=Rt*Ct,b=new J0(-w/2,w/2,Rt/2,-Rt/2,.1,1e3);b.position.z=5,r.current=b;const V=new N1({canvas:o.current,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});V.setSize(window.innerWidth*.75,window.innerHeight),V.setPixelRatio(window.devicePixelRatio),t.current=V,O1(P);const lt=()=>{const tt=window.innerWidth*.75/window.innerHeight,Pt=Rt*tt;b.left=-Pt/2,b.right=Pt/2,b.updateProjectionMatrix(),V.setSize(window.innerWidth*.75,window.innerHeight)};window.addEventListener("resize",lt);const ht=()=>{l.current=requestAnimationFrame(ht),V.render(P,b)};return ht(),()=>{window.removeEventListener("resize",lt),l.current&&cancelAnimationFrame(l.current),u.current&&cancelAnimationFrame(u.current),V.dispose()}},[]),ee.useEffect(()=>{(async()=>{try{const j=await yy(()=>import("./henon_periodic_orbits-DrzMAHG9.js"),[]);await j.default(),v(j),console.log("WASM module loaded successfully")}catch(j){console.error("Failed to load WASM module:",j)}})()},[]),ee.useEffect(()=>{x(h==="duffing"?P=>({...P,a:2.75,b:.2}):P=>({...P,a:.4,b:.3}))},[h]);const at=ee.useCallback((P,j)=>{const gt=g.a,ut=g.b,dt=-2*gt*P,Ct=1,Rt=ut,w=0,b=dt+w,V=dt*w-Ct*Rt;return{j11:dt,j12:Ct,j21:Rt,j22:w,trace:b,det:V}},[g.a,g.b]),Y=ee.useCallback(P=>{if(!o.current||!i.current||!r.current)return;const j=o.current.getBoundingClientRect();if(B.current.x=(P.clientX-j.left)/j.width*2-1,B.current.y=-((P.clientY-j.top)/j.height)*2+1,_t.current.setFromCamera(B.current,r.current),C.showUlamOverlay&&C.gridBoxes.length>0){const dt=i.current.getObjectByName("ulam-grid");if(dt){const Ct=_t.current.intersectObject(dt);if(Ct.length>0&&Ct[0].instanceId!==void 0){const Rt=Ct[0].instanceId,w=C.gridBoxes[Rt],b=C.invariantMeasure?C.invariantMeasure[Rt]:0,V=C.invariantMeasure?Math.max(...C.invariantMeasure):1;let lt=0,ht=[];if(X.current)try{const tt=X.current.get_transitions(Rt);tt&&tt.length>0&&(lt=tt.length,ht=tt.sort((Pt,Dt)=>(Dt.probability||0)-(Pt.probability||0)).slice(0,3))}catch(tt){console.error("Error getting transitions:",tt)}vt({visible:!0,x:P.clientX,y:P.clientY,data:{type:"Ulam Box",boxIndex:Rt,pos:{x:w.center[0],y:w.center[1]},measure:b,measurePercent:V>0?b/V*100:0,numTransitions:lt,topTransitions:ht,isCurrentBox:Rt===C.currentBoxIndex}});return}}}const gt=[];i.current.traverse(dt=>{dt.isMesh&&(dt.userData.type==="orbit"||dt.userData.type==="fixedPoint")&&gt.push(dt)});const ut=_t.current.intersectObjects(gt,!1);if(ut.length>0){const Ct=ut[0].object.userData,Rt=at(Ct.pos.x,Ct.pos.y);Ct.type==="orbit"&&Ct.orbitId&&M.showOrbitLines&&y(w=>w.highlightedOrbitId!==Ct.orbitId?{...w,highlightedOrbitId:Ct.orbitId}:w),vt({visible:!0,x:P.clientX,y:P.clientY,data:{type:Ct.type==="fixedPoint"?"Fixed Point":"Periodic Point",period:Ct.period,stability:Ct.stability,pos:Ct.pos,eigenvalues:Ct.eigenvalues,jacobian:Rt,orbitSize:Ct.orbitPoints?.length||1}})}else vt(dt=>dt.visible?{...dt,visible:!1}:dt),M.highlightedOrbitId!==null&&y(dt=>dt.highlightedOrbitId!==null?{...dt,highlightedOrbitId:null}:dt)},[at,C.showUlamOverlay,C.gridBoxes,C.invariantMeasure,C.currentBoxIndex,M.showOrbitLines,M.highlightedOrbitId]);ee.useEffect(()=>{!o.current||!i.current||!r.current||o.current.getBoundingClientRect()},[Y]);const Tt=ee.useCallback(P=>{if(!X.current)return;const j=X.current.get_transitions(P);D(gt=>({...gt,selectedBoxIndex:P,transitions:j}))},[]);ee.useEffect(()=>{const P=o.current;if(!P)return;const j=gt=>{if(!C.showUlamOverlay||!C.gridBoxes.length)return;const ut=P.getBoundingClientRect(),dt=(gt.clientX-ut.left)/ut.width*2-1,Ct=-((gt.clientY-ut.top)/ut.height)*2+1;_t.current.setFromCamera(new Me(dt,Ct),r.current);const w=i.current.getObjectByName("ulam-grid");if(w){const b=_t.current.intersectObject(w);if(b.length>0){const V=b[0].instanceId;V!==void 0&&Tt(V)}else D(V=>({...V,selectedBoxIndex:null,transitions:null}))}};return P.addEventListener("mousemove",Y),P.addEventListener("click",j),()=>{P.removeEventListener("mousemove",Y),P.removeEventListener("click",j)}},[Y,C.showUlamOverlay,C.gridBoxes.length,Tt]),ee.useEffect(()=>{if(!p)return;let P=!1;return T(gt=>({...gt,isReady:!1,orbits:[],showOrbits:!1})),(()=>{try{if(P)return;let gt,ut;if(h==="duffing"?(gt=p.DuffingSystemWasm,ut=new gt(g.a,g.b,g.maxPeriod)):(gt=p.BoundaryHenonSystemWasm,ut=new gt(g.a,g.b,g.epsilon,g.maxPeriod)),P){ut.free();return}const dt=ut.getPeriodicOrbits();ut.free(),T(Ct=>({...Ct,orbits:dt,isReady:!0}))}catch(gt){console.error("Failed to compute periodic orbits:",gt),T(ut=>({...ut,isReady:!0,orbits:[]}))}})(),()=>{P=!0}},[p,h,g.a,g.b,g.epsilon,g.maxPeriod,g.startX,g.startY]),ee.useEffect(()=>(d.current&&clearTimeout(d.current),y(P=>({...P,isComputing:!0})),d.current=setTimeout(()=>{if(p)try{if(h==="duffing"){console.log("Computing Duffing manifold");const P=p.compute_duffing_manifold_simple(g.a,g.b,g.epsilon);y(j=>({...j,manifolds:P.manifolds||[],fixedPoints:P.fixed_points||[],isComputing:!1,isReady:!0}))}else if(E.orbits&&E.orbits.length>0)if(M.showStableManifold){console.log("Computing stable AND unstable manifolds:",E.orbits.length,"orbits");const P=p.compute_stable_and_unstable_manifolds(g.a,g.b,g.epsilon,E.orbits,M.intersectionThreshold);y(j=>({...j,manifolds:P.unstable_manifolds||[],stableManifolds:P.stable_manifolds||[],fixedPoints:P.fixed_points||[],intersections:P.intersections||[],isComputing:!1,isReady:!0}))}else{console.log("Using periodic orbits for manifold:",E.orbits.length,"orbits");const P=p.compute_manifold_from_orbits(g.a,g.b,g.epsilon,E.orbits);y(j=>({...j,manifolds:P.manifolds||[],stableManifolds:[],fixedPoints:P.fixed_points||[],intersections:[],isComputing:!1,isReady:!0}))}else{console.log("No periodic orbits available, using simple computation");const P=p.compute_manifold_simple(g.a,g.b,g.epsilon);y(j=>({...j,manifolds:P.manifolds||[],stableManifolds:[],fixedPoints:P.fixed_points||[],intersections:[],isComputing:!1,isReady:!0}))}}catch(P){console.error("Manifold computation error:",P),y(j=>({...j,isComputing:!1}))}},500),()=>{d.current&&clearTimeout(d.current)}),[h,g.a,g.b,g.epsilon,E.orbits,p,M.showStableManifold,M.intersectionThreshold]),ee.useEffect(()=>{if(!N.isAnimating||M.isComputing)return;const{parameter:P,rangeValue:j,direction:gt,steps:ut,currentStep:dt,baseValue:Ct}=N;if(dt>=ut){F(V=>({...V,isAnimating:!1}));return}const Rt=j/ut,w=dt+1,b=Ct+gt*Rt*w;x(V=>({...V,[P]:parseFloat(b.toFixed(4))})),F(V=>({...V,currentStep:w}))},[N.isAnimating,N.currentStep,M.isComputing]);const O=ee.useCallback(async()=>{const P=g[N.parameter],j=P+N.direction*N.rangeValue;if(G.recordingEnabled&&o.current)try{const gt=o.current,ut=1280,dt=720,Ct=new OffscreenCanvas(ut,dt),Rt=Ct.getContext("2d");Rt.drawImage(gt,0,0,ut,dt);const w=`a = ${g.a.toFixed(4)}  b = ${g.b.toFixed(4)}  ε = ${g.epsilon.toFixed(4)}`;Rt.fillStyle="rgba(0, 0, 0, 0.7)",Rt.fillRect(10,dt-40,400,30),Rt.font="bold 16px monospace",Rt.fillStyle="#4CAF50",Rt.fillText(w,20,dt-18);const b=await createImageBitmap(Ct);U.current.push(b),J(V=>({...V,frameCount:1})),console.log("Initial frame captured")}catch(gt){console.error("Initial frame capture error:",gt)}F(gt=>({...gt,isAnimating:!0,baseValue:P,targetValue:j,currentStep:0}))},[g,N.parameter,N.direction,N.rangeValue,G.recordingEnabled]),rt=ee.useCallback(()=>{F(P=>({...P,isAnimating:!1,currentStep:0}))},[]),bt=ee.useCallback(async()=>{if(!o.current||!G.recordingEnabled)return null;const P=o.current,j=1280,gt=720,ut=new OffscreenCanvas(j,gt),dt=ut.getContext("2d");dt.drawImage(P,0,0,j,gt);const Ct=`a = ${g.a.toFixed(4)}  b = ${g.b.toFixed(4)}  ε = ${g.epsilon.toFixed(4)}`;return dt.fillStyle="rgba(0, 0, 0, 0.7)",dt.fillRect(10,gt-40,400,30),dt.font="bold 16px monospace",dt.fillStyle="#4CAF50",dt.fillText(Ct,20,gt-18),await createImageBitmap(ut)},[g.a,g.b,g.epsilon,G.recordingEnabled]),At=ee.useCallback(()=>{L.current&&L.current.terminate();const P=new Worker(new URL("/assets/videoEncoder.worker-7mA2J84V.js",import.meta.url),{type:"classic"});return P.onmessage=j=>{const{type:gt,blob:ut,frameCount:dt,error:Ct}=j.data;switch(gt){case"ready":console.log("Encoder ready");break;case"progress":J(V=>({...V,frameCount:dt}));break;case"complete":const Rt=URL.createObjectURL(ut),w=document.createElement("a"),b=Ft();w.href=Rt,w.download=b,document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(Rt),J(V=>({...V,isEncoding:!1,isRecording:!1,recordingEnabled:!1})),U.current=[];break;case"error":console.error("Encoder error:",Ct),J(V=>({...V,error:Ct,isEncoding:!1}));break}},L.current=P,P},[]),Ft=ee.useCallback(()=>{const P=g.a.toFixed(3).replace(".","p"),j=g.b.toFixed(3).replace(".","p"),gt=g.epsilon.toFixed(4).replace(".","p"),ut=N.parameter,dt=(N.baseValue||0).toFixed(3).replace(".","p").replace("-","m"),Ct=(N.targetValue||0).toFixed(3).replace(".","p").replace("-","m");return`henon_${ut}_a${P}_b${j}_eps${gt}_${dt}_to_${Ct}.mp4`},[g.a,g.b,g.epsilon,N.parameter,N.baseValue,N.targetValue]),jt=ee.useCallback(async()=>{if(!o.current||!t.current||!i.current||!r.current)return;t.current.render(i.current,r.current);const P=o.current,j=1920,gt=1080,ut=new OffscreenCanvas(j,gt),dt=ut.getContext("2d");dt.drawImage(P,0,0,j,gt),dt.fillStyle="rgba(0, 0, 0, 0.8)",dt.fillRect(10,gt-80,500,70),dt.font="bold 18px monospace",dt.fillStyle="#4CAF50",dt.fillText(`Set-Valued Dynamics | Iteration: ${M.iteration}`,20,gt-55),dt.font="14px monospace",dt.fillStyle="#aaa";const Ct=M.manifolds.reduce((Dt,Wt)=>Dt+(Wt.points_positive?.length||0)+(Wt.points_negative?.length||0),0),Rt=E.orbits.length>0?`${E.orbits.length} orbits, `:"";dt.fillText(`${Rt}${M.fixedPoints.length} fixed pts, ${Ct} manifold pts`,20,gt-32),dt.font="bold 14px monospace",dt.fillStyle="#4CAF50",dt.fillText(`a = ${g.a.toFixed(4)}   b = ${g.b.toFixed(4)}   ε = ${g.epsilon.toFixed(4)}`,20,gt-12);const w=await ut.convertToBlob({type:"image/png",quality:1}),b=URL.createObjectURL(w),V=document.createElement("a"),lt=g.a.toFixed(3).replace(".","p"),ht=g.b.toFixed(3).replace(".","p"),tt=g.epsilon.toFixed(4).replace(".","p"),Pt=M.hasStarted?`_iter${M.iteration}`:"";V.href=b,V.download=`henon_a${lt}_b${ht}_eps${tt}${Pt}.png`,document.body.appendChild(V),V.click(),document.body.removeChild(V),URL.revokeObjectURL(b)},[g,E.orbits.length,M.iteration,M.hasStarted,M.manifolds,M.fixedPoints]),st=ee.useCallback(async()=>{if(U.current.length===0){console.warn("No frames to encode");return}J(ut=>({...ut,isEncoding:!0,encodingProgress:0}));const P=At();P.postMessage({type:"init",data:{width:1280,height:720,fps:2,filename:Ft()}}),await new Promise(ut=>setTimeout(ut,100));const gt=1e6/2;for(let ut=0;ut<U.current.length;ut++){const dt=U.current[ut];P.postMessage({type:"frame",data:{imageData:dt,timestamp:ut*gt,duration:gt}}),ut%5===0&&await new Promise(Ct=>setTimeout(Ct,10))}P.postMessage({type:"finish"})},[At,Ft]),St=ee.useRef(!1);ee.useEffect(()=>{const P=St.current,j=M.isComputing;St.current=j,!(!G.recordingEnabled||!N.isAnimating)&&P&&!j&&(console.log(`[Recording] Manifold finished, capturing frame for step ${N.currentStep}...`),requestAnimationFrame(async()=>{try{const gt=await bt();gt?(U.current.push(gt),J(ut=>({...ut,frameCount:U.current.length})),console.log(`[Recording] Frame ${U.current.length} captured`)):console.log("[Recording] captureFrame returned null")}catch(gt){console.error("[Recording] Frame capture error:",gt)}}))},[M.isComputing,N.isAnimating,G.recordingEnabled,N.currentStep,bt]),ee.useEffect(()=>{!N.isAnimating&&G.recordingEnabled&&U.current.length>0&&!G.isEncoding&&(console.log(`[Recording] Animation finished with ${U.current.length} frames, starting encoding...`),st())},[N.isAnimating,G.recordingEnabled,G.isEncoding,st]);const Ot=ee.useCallback(()=>{G.recordingEnabled?(J(P=>({...P,recordingEnabled:!1})),U.current=[]):(J(P=>({...P,recordingEnabled:!0,frameCount:0,error:null})),U.current=[])},[G.recordingEnabled]);ee.useEffect(()=>{if(!i.current)return;const P=i.current,j=[];if(P.traverse(gt=>{(gt.userData.type==="trajectory"||gt.userData.type==="orbit"||gt.userData.type==="orbitLine"||gt.userData.type==="manifold"||gt.userData.type==="fixedPoint")&&j.push(gt)}),j.forEach(gt=>{gt.geometry&&gt.geometry.dispose(),gt.material&&gt.material.dispose(),P.remove(gt)}),M.showUnstableManifold&&M.manifolds.length>0&&M.manifolds.forEach(gt=>{[gt.plus,gt.minus].forEach(ut=>{ut&&ut.points&&ut.points.length>1&&ut.points.forEach(([dt,Ct])=>{const Rt=new _r(.008,6,6),w=new ra({color:new xe(Ke.manifold)}),b=new An(Rt,w);b.position.set(dt,Ct,.1),b.userData.type="manifold",P.add(b)})})}),M.showStableManifold&&M.stableManifolds.length>0&&M.stableManifolds.forEach(gt=>{[gt.plus,gt.minus].forEach(ut=>{if(ut&&ut.points&&ut.points.length>1){const dt=new Hn,Ct=new Float32Array(ut.points.length*3);ut.points.forEach(([b,V],lt)=>{Ct[lt*3]=b,Ct[lt*3+1]=V,Ct[lt*3+2]=.08}),dt.setAttribute("position",new jn(Ct,3));const Rt=new Zo({color:new xe(Ke.stableManifold),linewidth:2}),w=new jc(dt,Rt);w.userData.type="manifold",P.add(w)}})}),M.fixedPoints.forEach(gt=>{const ut=(gt.stability||"").toLowerCase(),dt=ut==="attractor"||ut==="stable",w=dt?Ke.attractor:ut==="repeller"||ut==="unstable"||ut==="saddle"?Ke.saddlePoint:Ke.periodicBlue,b=dt?.03:.025,V=new _r(b,12,12),lt=new ra({color:new xe(w)}),ht=new An(V,lt);ht.position.set(gt.x,gt.y,.2),ht.userData={type:"fixedPoint",period:1,stability:gt.stability,pos:{x:gt.x,y:gt.y},eigenvalues:gt.eigenvalues||null},P.add(ht)}),M.showTrail&&M.trajectoryPoints.length>0&&M.trajectoryPoints.forEach((gt,ut)=>{const dt=ut/M.trajectoryPoints.length,Ct=.022*(.4+.6*dt),Rt=new _r(Ct,8,8),w=new ra({color:new xe(Ke.trajectory),opacity:.4+.6*dt,transparent:!0}),b=new An(Rt,w);b.position.set(gt.x,gt.y,.25),b.userData.type="trajectory",P.add(b)}),M.hasStarted&&M.currentPoint){const gt=new Hh(.05,.05,20),ut=new ra({color:new xe(Ke.trajectory),opacity:.6,transparent:!0,side:bi}),dt=new An(gt,ut);dt.position.set(M.currentPoint.x,M.currentPoint.y,.3),dt.userData.type="trajectory",P.add(dt);const Ct=new _r(.02,16,16),Rt=new ra({color:new xe("#ffffff")}),w=new An(Ct,Rt);w.position.set(M.currentPoint.x,M.currentPoint.y,.3),w.userData.type="trajectory",P.add(w)}if(M.showOrbits&&E.orbits.length>0){const gt=E.orbits.filter(dt=>Jt(dt)),ut="#ff00ff";gt.forEach((dt,Ct)=>{const Rt=`orbit-${dt.period}-${Ct}`,w=M.highlightedOrbitId===Rt,b=w?ut:ne(dt);if(dt.points.forEach((V,lt)=>{const ht=new _r(w?.04:.02,10,10),tt=new ra({color:new xe(b)}),Pt=new An(ht,tt);Pt.position.set(V[0],V[1],w?.15:.05),Pt.userData={type:"orbit",orbitId:Rt,period:dt.period,stability:dt.stability,pointIndex:lt,pos:{x:V[0],y:V[1]},orbitPoints:dt.points,eigenvalues:dt.eigenvalues||null},P.add(Pt)}),M.showOrbitLines&&dt.points.length>1){const V=new Hn,lt=new Float32Array(dt.points.length*3);dt.points.forEach((Wt,Yt)=>{lt[Yt*3]=Wt[0],lt[Yt*3+1]=Wt[1],lt[Yt*3+2]=w?.15:.05}),V.setAttribute("position",new jn(lt,3));const ht=w?ut:ne(dt),tt=w?1:.4,Pt=new Zo({color:new xe(ht),opacity:tt,transparent:!0,linewidth:w?3:1}),Dt=new WS(V,Pt);Dt.userData={type:"orbitLine",orbitId:Rt},P.add(Dt)}})}},[E,M,_]);const ne=P=>{const{stability:j}=P;return j.toLowerCase()==="stable"?Ke.attractor:j.toLowerCase()==="saddle"?Ke.saddlePoint:j.toLowerCase()==="unstable"?Ke.repeller:Ke.periodicBlue},Jt=P=>P.period===1?_.period1:P.period===2?_.period2:P.period===3?_.period3:P.period===4?_.period4:P.period===5?_.period5:_.period6plus,he=ee.useCallback(()=>{if(!M.isReady||M.isRunning||!p)return;const{x:P,y:j,nx:gt,ny:ut}=M.currentPoint;if(!isFinite(P)||!isFinite(j)||Math.abs(P)>10||Math.abs(j)>10){y(Rt=>({...Rt,currentPoint:{...Rt.startPoint},trajectoryPoints:[],iteration:0,hasStarted:!1}));return}const{boundary_map:dt}=p;if(!dt){console.error("boundary_map not found in WASM module");return}const Ct=dt(P,j,gt,ut,g.a,g.b,g.epsilon);y(Rt=>({...Rt,currentPoint:{x:Ct.x,y:Ct.y,nx:Ct.nx,ny:Ct.ny},trajectoryPoints:[...Rt.trajectoryPoints,{x:P,y:j,nx:gt,ny:ut}],iteration:Rt.iteration+1,hasStarted:!0}))},[M.isReady,M.isRunning,M.currentPoint,p,g]),Je=ee.useCallback(()=>{if(!M.isReady||M.isRunning||!p)return;y(V=>({...V,isRunning:!0}));const{boundary_map:P}=p;if(!P){console.error("boundary_map not found in WASM module"),y(V=>({...V,isRunning:!1}));return}let j=M.currentPoint.x,gt=M.currentPoint.y,ut=M.currentPoint.nx,dt=M.currentPoint.ny,Ct=M.iteration;const Rt=[...M.trajectoryPoints],w=5,b=()=>{for(let V=0;V<w&&Ct<g.maxIterations;V++){if(!isFinite(j)||!isFinite(gt)||Math.abs(j)>10||Math.abs(gt)>10){y(ht=>({...ht,isRunning:!1,hasStarted:!0,trajectoryPoints:Rt,currentPoint:{x:j,y:gt,nx:ut,ny:dt},iteration:Ct}));return}Rt.push({x:j,y:gt,nx:ut,ny:dt});const lt=P(j,gt,ut,dt,g.a,g.b,g.epsilon);j=lt.x,gt=lt.y,ut=lt.nx,dt=lt.ny,Ct++}y(V=>({...V,currentPoint:{x:j,y:gt,nx:ut,ny:dt},trajectoryPoints:[...Rt],iteration:Ct,hasStarted:!0})),Ct<g.maxIterations?u.current=requestAnimationFrame(b):y(V=>({...V,isRunning:!1}))};u.current=requestAnimationFrame(b)},[M,g,p]),H=ee.useCallback(()=>{u.current&&cancelAnimationFrame(u.current),y(P=>({...P,currentPoint:{...P.startPoint},trajectoryPoints:[],iteration:0,isRunning:!1,hasStarted:!1}))},[]);ee.useEffect(()=>{H()},[g.a,g.b,g.epsilon,H]);const Ne=ee.useMemo(()=>{let P=0;return M.manifolds.forEach(j=>{j.plus?.points&&(P+=j.plus.points.length),j.minus?.points&&(P+=j.minus.points.length)}),P},[M.manifolds]),ue=ee.useCallback(async()=>{if(p){D(P=>({...P,isComputing:!0,needsRecompute:!1}));try{const{UlamComputer:P}=p;if(!P)throw console.error("UlamComputer export is missing from WASM module!"),new Error("UlamComputer definition missing");const j=new P(g.a,g.b,C.subdivisions,C.pointsPerBox,C.epsilon);X.current=j;const gt=j.get_grid_boxes(),ut=j.get_invariant_measure(),dt=j.get_left_eigenvector();let Ct=-1;M.hasStarted&&M.currentPoint&&(Ct=j.get_box_index(M.currentPoint.x,M.currentPoint.y)),D(Rt=>({...Rt,isComputing:!1,gridBoxes:gt,invariantMeasure:ut,leftEigenvector:dt,currentBoxIndex:Ct,selectedBoxIndex:null,transitions:null}))}catch(P){console.error("Ulam computation failed:",P),D(j=>({...j,isComputing:!1}))}}},[p,g.a,g.b,C.subdivisions,C.pointsPerBox,C.epsilon,M.hasStarted,M.currentPoint]);return ee.useEffect(()=>{D(P=>({...P,epsilon:g.epsilon}))},[g.epsilon]),ee.useEffect(()=>{if(!(!C.showUlamOverlay||!p))return ot.current&&clearTimeout(ot.current),ot.current=setTimeout(()=>{ue()},200),()=>{ot.current&&clearTimeout(ot.current)}},[C.showUlamOverlay,p,g.a,g.b,C.epsilon,C.subdivisions,C.pointsPerBox,ue]),ee.useEffect(()=>{if(!(!X.current||!C.showUlamOverlay)&&M.hasStarted&&M.currentPoint){const P=X.current.get_box_index(M.currentPoint.x,M.currentPoint.y);if(P!==C.currentBoxIndex){const j=P>=0?X.current.get_transitions(P):null;D(gt=>({...gt,currentBoxIndex:P,transitions:gt.showCurrentBox?j:gt.transitions,selectedBoxIndex:gt.showCurrentBox?P:gt.selectedBoxIndex}))}}},[M.currentPoint,M.hasStarted,C.showUlamOverlay,C.currentBoxIndex]),ee.useEffect(()=>{const P=i.current;if(!P)return;const j=()=>{const ht=P.getObjectByName("ulam-grid");ht&&(ht.geometry.dispose(),ht.material.dispose(),P.remove(ht))};if(!C.showUlamOverlay||!C.gridBoxes.length){j();return}j();const gt=C.gridBoxes,ut=gt.length,dt=new $o(1,1),Ct=new ra({color:16777215,transparent:!0,opacity:.5,side:bi,depthWrite:!1}),Rt=new GS(dt,Ct,ut);Rt.name="ulam-grid",Rt.userData.type="ulamGrid";const w=new On,b=new xe,V=new Map;C.selectedBoxIndex!==null&&C.transitions&&C.transitions.forEach(ht=>{V.set(ht.index,ht.probability)});let lt=0;return C.invariantMeasure&&(lt=Math.max(...C.invariantMeasure)),gt.forEach((ht,tt)=>{const Pt=ht.center[0],Dt=ht.center[1],Wt=ht.radius[0],Yt=ht.radius[1];w.position.set(Pt,Dt,-.05),w.scale.set(Wt*2*.95,Yt*2*.95,1),w.updateMatrix(),Rt.setMatrixAt(tt,w.matrix);const wt=C.showCurrentBox&&tt===C.currentBoxIndex,Ht=C.selectedBoxIndex!==null&&tt===C.selectedBoxIndex;if(wt&&!Ht)b.setHex(16711935),Rt.setColorAt(tt,b);else if(C.selectedBoxIndex!==null)if(tt===C.selectedBoxIndex)b.setHex(65535),Rt.setColorAt(tt,b);else if(V.has(tt)){const $t=V.get(tt);b.setHSL(.7-$t*.7,1,.5),Rt.setColorAt(tt,b)}else b.setHex(2236962),Rt.setColorAt(tt,b);else if(C.invariantMeasure&&C.invariantMeasure.length===ut){const $t=C.invariantMeasure[tt];if($t>0){const zt=.66-$t/lt*.5;b.setHSL(zt,1,.5),Rt.setColorAt(tt,b)}else b.setHex(1118481),Rt.setColorAt(tt,b)}else b.setHex(3355443),Rt.setColorAt(tt,b)}),Rt.instanceMatrix.needsUpdate=!0,Rt.instanceColor&&(Rt.instanceColor.needsUpdate=!0),P.add(Rt),j},[C.showUlamOverlay,C.gridBoxes,C.selectedBoxIndex,C.transitions,C.invariantMeasure,C.currentBoxIndex,C.showCurrentBox]),k.jsxs("div",{style:Bt.container,children:[k.jsxs("div",{style:Bt.sidebar,children:[k.jsxs("div",{style:Bt.section,children:[k.jsx("h3",{style:Bt.sectionTitle,children:"Dynamic System"}),k.jsxs("select",{value:h,onChange:P=>m(P.target.value),style:{width:"100%",padding:"8px 12px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"6px",fontSize:"14px",cursor:"pointer"},disabled:M.isRunning||N.isAnimating,children:[k.jsx("option",{value:"henon",children:"Hénon Map"}),k.jsx("option",{value:"duffing",children:"Duffing Map"})]}),k.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:h==="henon"?"x' = 1 - ax² + y, y' = bx":"x' = y, y' = -bx + ay - y³"})]}),k.jsxs("div",{style:Bt.section,children:[k.jsx("h3",{style:Bt.sectionTitle,children:"System Parameters"}),k.jsxs("label",{style:Bt.label,children:[k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"a ="}),k.jsx("input",{type:"number",step:"0.01",value:g.a,onChange:P=>x({...g,a:parseFloat(P.target.value)||.1}),style:Bt.numberInput,disabled:M.isRunning})]}),k.jsx("input",{type:"range",min:"0.1",max:h==="duffing"?3:2,step:"0.01",value:g.a,onChange:P=>x({...g,a:parseFloat(P.target.value)}),style:Bt.slider,disabled:M.isRunning})]}),k.jsxs("label",{style:Bt.label,children:[k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"b ="}),k.jsx("input",{type:"number",step:"0.01",value:g.b,onChange:P=>x({...g,b:parseFloat(P.target.value)||.1}),style:Bt.numberInput,disabled:M.isRunning})]}),k.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.01",value:g.b,onChange:P=>x({...g,b:parseFloat(P.target.value)}),style:Bt.slider,disabled:M.isRunning})]}),k.jsxs("label",{style:Bt.label,children:[k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"epsilon ="}),k.jsx("input",{type:"number",step:"0.001",value:g.epsilon,onChange:P=>x({...g,epsilon:parseFloat(P.target.value)||.01}),style:Bt.numberInput,disabled:M.isRunning})]}),k.jsx("input",{type:"range",min:"0.001",max:"0.2",step:"0.001",value:g.epsilon,onChange:P=>x({...g,epsilon:parseFloat(P.target.value)}),style:Bt.slider,disabled:M.isRunning})]}),k.jsxs("label",{style:Bt.label,children:[k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"Max Period ="}),k.jsx("input",{type:"number",step:"1",min:"1",max:"20",value:g.maxPeriod,onChange:P=>x({...g,maxPeriod:parseInt(P.target.value)||2}),style:Bt.numberInput,disabled:M.isRunning})]}),k.jsx("input",{type:"range",min:"2",max:"10",step:"1",value:g.maxPeriod,onChange:P=>x({...g,maxPeriod:parseInt(P.target.value)}),style:Bt.slider,disabled:M.isRunning})]}),k.jsxs("label",{style:Bt.label,children:[k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"Max Iterations ="}),k.jsx("input",{type:"number",step:"100",min:"100",max:"10000",value:g.maxIterations,onChange:P=>x({...g,maxIterations:parseInt(P.target.value)||100}),style:Bt.numberInput,disabled:M.isRunning})]}),k.jsx("input",{type:"range",min:"100",max:"5000",step:"100",value:g.maxIterations,onChange:P=>x({...g,maxIterations:parseInt(P.target.value)}),style:Bt.slider,disabled:M.isRunning})]}),h==="henon"&&k.jsxs("div",{style:{marginTop:"12px",borderTop:"1px solid #333",paddingTop:"12px"},children:[k.jsx("h4",{style:{fontSize:"12px",fontWeight:"600",marginBottom:"10px",color:"#888"},children:"Manifold Display"}),k.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",padding:"8px 10px",backgroundColor:M.showUnstableManifold?"rgba(30, 144, 255, 0.15)":"transparent",borderRadius:"6px",border:`1px solid ${M.showUnstableManifold?Ke.manifold:"#444"}`,cursor:"pointer",transition:"all 0.2s ease"},children:[k.jsx("input",{type:"checkbox",checked:M.showUnstableManifold,onChange:P=>y(j=>({...j,showUnstableManifold:P.target.checked})),style:{width:"16px",height:"16px",accentColor:Ke.manifold}}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[k.jsx("div",{style:{width:"12px",height:"3px",backgroundColor:Ke.manifold,borderRadius:"2px"}}),k.jsx("span",{style:{color:"#ccc",fontSize:"13px"},children:"Unstable Manifold"})]})]}),k.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",padding:"8px 10px",backgroundColor:M.showStableManifold?"rgba(255, 165, 0, 0.15)":"transparent",borderRadius:"6px",border:`1px solid ${M.showStableManifold?Ke.stableManifold:"#444"}`,cursor:"pointer",transition:"all 0.2s ease"},children:[k.jsx("input",{type:"checkbox",checked:M.showStableManifold,onChange:P=>y(j=>({...j,showStableManifold:P.target.checked})),style:{width:"16px",height:"16px",accentColor:Ke.stableManifold}}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[k.jsx("div",{style:{width:"12px",height:"3px",backgroundColor:Ke.stableManifold,borderRadius:"2px"}}),k.jsx("span",{style:{color:"#ccc",fontSize:"13px"},children:"Stable Manifold"})]})]}),M.showStableManifold&&k.jsxs("div",{style:{marginTop:"8px",padding:"10px",backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"6px",border:"1px solid #333"},children:[k.jsx("div",{style:{fontSize:"11px",fontWeight:"600",color:"#888",marginBottom:"8px"},children:"Intersection Detection"}),k.jsxs("label",{style:Bt.label,children:[k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"Threshold ε"}),k.jsx("input",{type:"number",step:"0.01",value:M.intersectionThreshold,onChange:P=>y(j=>({...j,intersectionThreshold:parseFloat(P.target.value)||.01})),style:Bt.numberInput})]}),k.jsx("input",{type:"range",min:"0.001",max:"0.2",step:"0.001",value:M.intersectionThreshold,onChange:P=>y(j=>({...j,intersectionThreshold:parseFloat(P.target.value)})),style:Bt.slider})]}),k.jsx("div",{style:{fontSize:"11px",marginTop:"6px"},children:(()=>{const P=M.intersections.filter(j=>j.has_intersection);if(P.length>0){const j=Math.min(...P.map(gt=>gt.min_distance));return k.jsxs("div",{style:{color:"#e74c3c",fontWeight:"bold"},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[k.jsx("span",{style:{fontSize:"14px"},children:"⚠"}),k.jsx("span",{children:"Heteroclinic connection!"})]}),k.jsxs("div",{style:{fontSize:"10px",color:"#e74c3c",opacity:.8,marginTop:"4px"},children:[P.length," connection",P.length>1?"s":""," found (min d = ",j.toFixed(4),")"]})]})}else return M.intersections.length>0?k.jsxs("div",{style:{color:"#27ae60"},children:["✓ No heteroclinic connections (",M.intersections.length," pairs checked)"]}):k.jsx("div",{style:{color:"#888"},children:"Need ≥2 saddles for detection"})})()})]})]})]}),k.jsx("button",{onClick:jt,style:{...Bt.button,width:"100%",marginTop:"12px",backgroundColor:"#2d4a2d",borderColor:"#3a6a3a",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Save as PNG"}),k.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[k.jsx("h4",{style:{fontSize:"12px",fontWeight:"600",marginBottom:"12px",color:"#888"},children:"Parameter Animation"}),k.jsx("label",{style:Bt.label,children:k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"Animate:"}),k.jsxs("select",{value:N.parameter,onChange:P=>F(j=>({...j,parameter:P.target.value})),style:{...Bt.numberInput,width:"100px"},disabled:N.isAnimating,children:[k.jsx("option",{value:"a",children:"a"}),k.jsx("option",{value:"b",children:"b"}),k.jsx("option",{value:"epsilon",children:"epsilon"})]})]})}),k.jsx("label",{style:Bt.label,children:k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"Direction:"}),k.jsxs("div",{style:{display:"flex",gap:"4px"},children:[k.jsx("button",{onClick:()=>F(P=>({...P,direction:-1})),style:{...Bt.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:N.direction===-1?"#3d5afe":"#2d2d2d"},disabled:N.isAnimating,children:"−"}),k.jsx("button",{onClick:()=>F(P=>({...P,direction:1})),style:{...Bt.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:N.direction===1?"#3d5afe":"#2d2d2d"},disabled:N.isAnimating,children:"+"})]})]})}),k.jsxs("label",{style:Bt.label,children:[k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"Range:"}),k.jsx("input",{type:"number",step:"0.05",min:"0.01",max:"1.0",value:N.rangeValue,onChange:P=>F(j=>({...j,rangeValue:parseFloat(P.target.value)||.1})),style:Bt.numberInput,disabled:N.isAnimating})]}),k.jsx("input",{type:"range",min:"0.01",max:"0.5",step:"0.01",value:N.rangeValue,onChange:P=>F(j=>({...j,rangeValue:parseFloat(P.target.value)})),style:Bt.slider,disabled:N.isAnimating})]}),k.jsxs("label",{style:Bt.label,children:[k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"Steps:"}),k.jsx("input",{type:"number",step:"1",min:"5",max:"30",value:N.steps,onChange:P=>F(j=>({...j,steps:parseInt(P.target.value)||10})),style:Bt.numberInput,disabled:N.isAnimating})]}),k.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:N.steps,onChange:P=>F(j=>({...j,steps:parseInt(P.target.value)})),style:Bt.slider,disabled:N.isAnimating})]}),k.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[k.jsxs("button",{onClick:N.isAnimating?rt:O,disabled:M.isComputing&&!N.isAnimating||G.isEncoding,style:{...Bt.button,flex:1,marginBottom:0,backgroundColor:N.isAnimating?"#8b0000":"#1a4a1a",borderColor:N.isAnimating?"#b22222":"#2a6a2a"},children:[N.isAnimating?"⏹ Stop":"▶ Play",G.recordingEnabled&&!N.isAnimating&&" & Rec"]}),k.jsx("button",{onClick:Ot,disabled:N.isAnimating||G.isEncoding,style:{...Bt.button,width:"50px",marginBottom:0,backgroundColor:G.recordingEnabled?"#b22222":"#2d2d2d",borderColor:G.recordingEnabled?"#ff4444":"#444"},title:G.recordingEnabled?"Recording enabled - will record next animation":"Enable recording",children:G.recordingEnabled?"🔴":"⏺"})]}),G.recordingEnabled&&!N.isAnimating&&!G.isEncoding&&k.jsx("div",{style:{marginTop:"8px",padding:"6px",background:"#1a0a0a",borderRadius:"4px",border:"1px solid #b22222"},children:k.jsx("div",{style:{fontSize:"11px",color:"#ff6666"},children:"🔴 Recording armed - Press Play to start"})}),G.isEncoding&&k.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"#0a0a1a",borderRadius:"4px",border:"1px solid #3d5afe"},children:[k.jsxs("div",{style:{fontSize:"11px",color:"#7986cb",marginBottom:"4px"},children:["🔄 Encoding video... (",G.frameCount," frames)"]}),k.jsx("div",{style:{height:"4px",backgroundColor:"#1a1a2e",borderRadius:"2px",overflow:"hidden"},children:k.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#3d5afe",animation:"pulse 1s infinite"}})})]}),G.error&&k.jsxs("div",{style:{marginTop:"8px",padding:"6px",background:"#1a0a0a",borderRadius:"4px",fontSize:"10px",color:"#ff6666"},children:["Error: ",G.error]}),N.isAnimating&&k.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[k.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:[N.parameter,": ",N.baseValue?.toFixed(3)," → ",N.targetValue?.toFixed(3)]}),k.jsxs("div",{style:{fontSize:"11px",color:"#888"},children:["Current: ",k.jsx("span",{style:{color:"#4CAF50",fontWeight:"bold"},children:g[N.parameter].toFixed(4)}),G.recordingEnabled&&k.jsxs("span",{style:{color:"#ff6666",marginLeft:"8px"},children:["📹 ",G.frameCount," frames"]})]}),k.jsxs("div",{style:{fontSize:"10px",color:"#555",marginTop:"4px"},children:["Step ",N.currentStep," / ",N.steps,M.isComputing&&k.jsx("span",{style:{color:"#ff9800",marginLeft:"8px"},children:"Computing..."})]}),k.jsx("div",{style:{marginTop:"6px",height:"4px",backgroundColor:"#333",borderRadius:"2px",overflow:"hidden"},children:k.jsx("div",{style:{width:`${N.currentStep/N.steps*100}%`,height:"100%",backgroundColor:G.recordingEnabled?"#ff6666":"#4CAF50",transition:"width 0.3s ease"}})})]})]}),k.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[k.jsxs("label",{style:Bt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:C.showUlamOverlay,onChange:P=>D({...C,showUlamOverlay:P.target.checked})}),"Show Ulam Grid"]}),C.showUlamOverlay&&k.jsxs(k.Fragment,{children:[k.jsxs("label",{style:Bt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:C.showTransitions,onChange:P=>D({...C,showTransitions:P.target.checked})}),"Show Transitions"]}),k.jsxs("label",{style:Bt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:C.showCurrentBox,onChange:P=>D({...C,showCurrentBox:P.target.checked})}),"Track Current Position"]}),k.jsxs("label",{style:Bt.label,children:[k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"Grid ="}),k.jsx("input",{type:"number",step:"1",min:"10",max:"80",value:C.subdivisions,onChange:P=>D({...C,subdivisions:parseInt(P.target.value)||10}),style:Bt.numberInput,disabled:C.isComputing})]}),k.jsx("input",{type:"range",min:"10",max:"60",step:"5",value:C.subdivisions,onChange:P=>D({...C,subdivisions:parseInt(P.target.value)}),style:Bt.slider,disabled:C.isComputing})]}),k.jsxs("label",{style:Bt.label,children:[k.jsxs("div",{style:Bt.paramRow,children:[k.jsx("span",{children:"Samples ="}),k.jsx("input",{type:"number",step:"16",min:"16",max:"256",value:C.pointsPerBox,onChange:P=>D({...C,pointsPerBox:parseInt(P.target.value)||64}),style:Bt.numberInput,disabled:C.isComputing})]}),k.jsx("input",{type:"range",min:"16",max:"256",step:"16",value:C.pointsPerBox,onChange:P=>D({...C,pointsPerBox:parseInt(P.target.value)}),style:Bt.slider,disabled:C.isComputing}),k.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Points per box (√n × √n grid)"})]}),k.jsx("div",{style:{marginTop:"8px",marginBottom:"8px",fontSize:"12px",color:C.isComputing?"#ff9800":"#4CAF50",display:"flex",alignItems:"center",gap:"6px"},children:C.isComputing?k.jsxs(k.Fragment,{children:[k.jsx("span",{className:"spinner",style:{width:"10px",height:"10px",border:"2px solid #ff9800",borderTop:"2px solid transparent",borderRadius:"50%",display:"inline-block",animation:"spin 1s linear infinite"}}),"Computing Ulam Grid..."]}):k.jsx("span",{children:"✓ Grid up to date"})}),k.jsx("style",{children:`
                                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                            `}),C.gridBoxes.length>0&&k.jsxs("div",{style:{marginTop:"12px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[k.jsx("div",{style:{fontSize:"11px",fontWeight:"600",color:"#888",marginBottom:"6px"},children:"Invariant Measure"}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[k.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Low"}),k.jsx("div",{style:{flex:1,height:"12px",borderRadius:"2px",background:"linear-gradient(to right, hsl(238, 100%, 50%), hsl(180, 100%, 50%), hsl(100, 100%, 50%), hsl(60, 100%, 50%))"}}),k.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"High"})]}),k.jsx("div",{style:{fontSize:"9px",color:"#555",marginTop:"4px"},children:"Probability of trajectory visiting each region"})]}),C.currentBoxIndex>=0&&k.jsxs("div",{style:{fontSize:"11px",color:"#888",marginTop:"4px"},children:["Current box: ",C.currentBoxIndex]})]})]}),k.jsxs("div",{style:Bt.section,children:[k.jsx("h3",{style:Bt.sectionTitle,children:"Controls"}),k.jsx("button",{onClick:he,disabled:!M.isReady||M.isRunning,style:Bt.button,children:"Step Forward"}),k.jsx("button",{onClick:Je,disabled:!M.isReady||M.isRunning,style:{...Bt.button,...Bt.runButton},children:M.isRunning?"Running...":"Run to Max Iterations"}),k.jsx("button",{onClick:H,disabled:M.isRunning,style:{...Bt.button,...Bt.resetButton},children:"Reset"})]}),k.jsxs("div",{style:Bt.section,children:[k.jsx("h3",{style:Bt.sectionTitle,children:"Display"}),h==="henon"&&k.jsxs(k.Fragment,{children:[k.jsxs("label",{style:Bt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:M.showUnstableManifold,onChange:P=>y(j=>({...j,showUnstableManifold:P.target.checked})),style:{accentColor:Ke.manifold}}),k.jsx("span",{style:{...Bt.colorBox,backgroundColor:Ke.manifold,borderRadius:"50%"}}),"Unstable manifold"]}),k.jsxs("label",{style:Bt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:M.showStableManifold,onChange:P=>y(j=>({...j,showStableManifold:P.target.checked})),style:{accentColor:Ke.stableManifold}}),k.jsx("span",{style:{...Bt.colorBox,backgroundColor:Ke.stableManifold,borderRadius:"50%"}}),"Stable manifold"]})]}),k.jsxs("label",{style:Bt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:M.showTrail,onChange:P=>y({...M,showTrail:P.target.checked}),style:{accentColor:Ke.trajectory}}),k.jsx("span",{style:{...Bt.colorBox,backgroundColor:Ke.trajectory,borderRadius:"50%"}}),"Trajectory trail"]}),k.jsxs("label",{style:Bt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:M.showOrbits,onChange:P=>y({...M,showOrbits:P.target.checked})}),"Show orbit markers"]}),k.jsxs("label",{style:Bt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:M.showOrbitLines,onChange:P=>y({...M,showOrbitLines:P.target.checked})}),"Show orbit lines"]}),[1,2,3,4,5].map(P=>k.jsxs("label",{style:Bt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:_[`period${P}`],onChange:j=>I({..._,[`period${P}`]:j.target.checked})}),k.jsx("span",{style:{...Bt.colorBox,backgroundColor:Ke[`period${P}`].stable}}),"Period-",P," (",E.orbits.filter(j=>j.period===P).length,")"]},P))]}),M.fixedPoints.length>0&&k.jsxs("div",{style:Bt.section,children:[k.jsxs("h3",{style:Bt.sectionTitle,children:["Fixed Points (",M.fixedPoints.length,")"]}),M.fixedPoints.map((P,j)=>k.jsxs("div",{style:Bt.fixedPointItem,children:[k.jsx("span",{style:{fontWeight:"bold",color:P.stability==="Attractor"?"#00ff00":P.stability==="Repeller"?"#ff4444":"#ffaa00"},children:P.stability}),k.jsxs("span",{children:[" (",P.x.toFixed(3),", ",P.y.toFixed(3),")"]})]},j))]}),k.jsxs("div",{style:Bt.info,children:[k.jsx("div",{style:Bt.infoHeader,children:h==="henon"?"Hénon Map: x' = 1 - ax² + y, y' = bx":"Duffing Map: x' = y, y' = -bx + ay - y³"}),k.jsxs("div",{children:["Status: ",M.isComputing?"Computing...":M.isRunning?"Running...":"Ready"]}),k.jsxs("div",{children:["Orbits found: ",E.orbits.length]}),M.hasStarted&&k.jsxs(k.Fragment,{children:[k.jsxs("div",{children:["Iteration: ",M.iteration," / ",g.maxIterations]}),k.jsxs("div",{children:["Position: (",M.currentPoint.x.toFixed(4),", ",M.currentPoint.y.toFixed(4),")"]})]}),k.jsxs("div",{children:["Manifolds: ",M.manifolds.length]}),k.jsxs("div",{children:["Total Points: ",Ne.toLocaleString()]})]})]}),k.jsxs("div",{style:Bt.viewport,children:[k.jsx("canvas",{ref:o,style:Bt.canvas}),nt.visible&&nt.data&&k.jsxs("div",{style:{position:"absolute",left:nt.x+15,top:nt.y+15,backgroundColor:"rgba(20, 20, 20, 0.95)",border:"1px solid #444",borderRadius:"4px",padding:"12px",zIndex:1e3,pointerEvents:"none",minWidth:"180px",maxWidth:"280px",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",fontSize:"12px",fontFamily:"monospace"},children:[k.jsxs("div",{style:{fontWeight:"bold",color:"#fff",marginBottom:"8px",borderBottom:"1px solid #444",paddingBottom:"4px"},children:[nt.data.type,nt.data.isCurrentBox&&k.jsx("span",{style:{color:"#ff00ff",marginLeft:"8px"},children:"● Current"})]}),nt.data.type==="Ulam Box"?k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"6px 12px"},children:[k.jsx("span",{style:{color:"#888"},children:"Box #:"}),k.jsx("span",{style:{color:"#00ccff"},children:nt.data.boxIndex}),k.jsx("span",{style:{color:"#888"},children:"Center:"}),k.jsxs("span",{style:{color:"#ddd"},children:["(",nt.data.pos.x.toFixed(2),", ",nt.data.pos.y.toFixed(2),")"]}),k.jsx("span",{style:{color:"#888"},children:"Measure:"}),k.jsxs("span",{style:{color:"#4CAF50"},children:[(nt.data.measure*100).toFixed(2),"%",k.jsxs("span",{style:{color:"#666",marginLeft:"4px"},children:["(",nt.data.measurePercent.toFixed(0),"% of max)"]})]}),k.jsx("span",{style:{color:"#888"},children:"Transitions:"}),k.jsxs("span",{style:{color:"#ddd"},children:[nt.data.numTransitions," boxes"]}),nt.data.topTransitions&&nt.data.topTransitions.length>0&&k.jsxs(k.Fragment,{children:[k.jsx("span",{style:{color:"#888"},children:"Top targets:"}),k.jsx("div",{style:{fontSize:"10px"},children:nt.data.topTransitions.map((P,j)=>k.jsxs("div",{style:{color:"#ff9800"},children:["→ Box ",P.index,": ",(P.probability*100).toFixed(1),"%"]},j))})]})]}):k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"8px 16px"},children:[k.jsx("span",{style:{color:"#888"},children:"Position:"}),k.jsxs("span",{style:{color:"#00ccff"},children:["(",nt.data.pos.x.toFixed(4),", ",nt.data.pos.y.toFixed(4),")"]}),k.jsx("span",{style:{color:"#888"},children:"Stability:"}),k.jsx("span",{style:{color:nt.data.stability?.toLowerCase()==="attractor"||nt.data.stability?.toLowerCase()==="stable"?"#27ae60":(nt.data.stability?.toLowerCase()==="repeller"||nt.data.stability?.toLowerCase()==="unstable","#e74c3c")},children:nt.data.stability||"Unknown"}),k.jsx("span",{style:{color:"#888"},children:"Period:"}),k.jsx("span",{style:{color:"#ddd"},children:nt.data.period}),nt.data.jacobian&&k.jsxs(k.Fragment,{children:[k.jsx("span",{style:{color:"#888"},children:"Jacobian:"}),k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px",background:"#333",padding:"4px",borderRadius:"2px"},children:[k.jsx("span",{children:nt.data.jacobian.j11?.toFixed(3)}),k.jsx("span",{children:nt.data.jacobian.j12?.toFixed(3)}),k.jsx("span",{children:nt.data.jacobian.j21?.toFixed(3)}),k.jsx("span",{children:nt.data.jacobian.j22?.toFixed(3)})]}),k.jsx("span",{style:{color:"#888"},children:"Det/Trace:"}),k.jsxs("span",{style:{color:"#ddd"},children:["D=",nt.data.jacobian.det?.toFixed(3),", Tr=",nt.data.jacobian.trace?.toFixed(3)]})]})]})]})]})]})},Bt={container:{display:"flex",height:"100vh",width:"100vw",backgroundColor:"#0a0a0a",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0",overflow:"hidden"},sidebar:{width:"320px",minWidth:"320px",padding:"20px",backgroundColor:"#1a1a1a",borderRight:"1px solid #333",overflowY:"auto"},section:{marginBottom:"24px"},sectionTitle:{fontSize:"14px",fontWeight:"600",marginBottom:"12px",color:"#fff",textTransform:"uppercase",letterSpacing:"0.5px"},label:{display:"flex",flexDirection:"column",marginBottom:"12px",fontSize:"13px",color:"#b0b0b0"},paramRow:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"},numberInput:{width:"80px",padding:"4px 8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",fontSize:"13px",textAlign:"right"},slider:{marginTop:"6px",width:"100%"},checkboxLabel:{display:"flex",alignItems:"center",marginBottom:"10px",fontSize:"13px",cursor:"pointer",gap:"8px"},colorBox:{width:"14px",height:"14px",borderRadius:"2px",display:"inline-block"},button:{width:"100%",padding:"10px",marginBottom:"8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s"},runButton:{backgroundColor:"#1a4a1a",borderColor:"#2a6a2a"},resetButton:{backgroundColor:"#1a1a1a",borderColor:"#555"},fixedPointItem:{marginBottom:"6px",fontSize:"12px",padding:"6px",background:"#0f0f0f",borderRadius:"4px"},info:{marginTop:"16px",padding:"12px",backgroundColor:"#0f0f0f",borderRadius:"4px",fontSize:"11px",lineHeight:"1.6",color:"#888"},infoHeader:{fontSize:"12px",fontWeight:"600",color:"#4CAF50",marginBottom:"8px"},viewport:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},canvas:{display:"block"}};_y.createRoot(document.getElementById("root")).render(k.jsx(ee.StrictMode,{children:k.jsx(P1,{})}));
