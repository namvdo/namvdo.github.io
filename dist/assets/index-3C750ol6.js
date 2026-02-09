(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Jf={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function uy(){if(h_)return Uo;h_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=t,Uo.jsx=i,Uo.jsxs=i,Uo}var p_;function fy(){return p_||(p_=1,Jf.exports=uy()),Jf.exports}var z=fy(),$f={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function dy(){if(m_)return pe;m_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,E={};function b(O,at,Et){this.props=O,this.context=at,this.refs=E,this.updater=Et||_}b.prototype.isReactComponent={},b.prototype.setState=function(O,at){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,at,"setState")},b.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function m(){}m.prototype=b.prototype;function I(O,at,Et){this.props=O,this.context=at,this.refs=E,this.updater=Et||_}var B=I.prototype=new m;B.constructor=I,A(B,b.prototype),B.isPureReactComponent=!0;var N=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function F(O,at,Et,At,It,Wt){return Et=Wt.ref,{$$typeof:o,type:O,key:at,ref:Et!==void 0?Et:null,props:Wt}}function $(O,at){return F(O.type,at,void 0,void 0,void 0,O.props)}function w(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function L(O){var at={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Et){return at[Et]})}var q=/\/+/g;function ut(O,at){return typeof O=="object"&&O!==null&&O.key!=null?L(""+O.key):at.toString(36)}function mt(){}function vt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(mt,mt):(O.status="pending",O.then(function(at){O.status==="pending"&&(O.status="fulfilled",O.value=at)},function(at){O.status==="pending"&&(O.status="rejected",O.reason=at)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ct(O,at,Et,At,It){var Wt=typeof O;(Wt==="undefined"||Wt==="boolean")&&(O=null);var rt=!1;if(O===null)rt=!0;else switch(Wt){case"bigint":case"string":case"number":rt=!0;break;case"object":switch(O.$$typeof){case o:case t:rt=!0;break;case v:return rt=O._init,ct(rt(O._payload),at,Et,At,It)}}if(rt)return It=It(O),rt=At===""?"."+ut(O,0):At,N(It)?(Et="",rt!=null&&(Et=rt.replace(q,"$&/")+"/"),ct(It,at,Et,"",function($t){return $t})):It!=null&&(w(It)&&(It=$(It,Et+(It.key==null||O&&O.key===It.key?"":(""+It.key).replace(q,"$&/")+"/")+rt)),at.push(It)),1;rt=0;var St=At===""?".":At+":";if(N(O))for(var Pt=0;Pt<O.length;Pt++)At=O[Pt],Wt=St+ut(At,Pt),rt+=ct(At,at,Et,Wt,It);else if(Pt=y(O),typeof Pt=="function")for(O=Pt.call(O),Pt=0;!(At=O.next()).done;)At=At.value,Wt=St+ut(At,Pt++),rt+=ct(At,at,Et,Wt,It);else if(Wt==="object"){if(typeof O.then=="function")return ct(vt(O),at,Et,At,It);throw at=String(O),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return rt}function H(O,at,Et){if(O==null)return O;var At=[],It=0;return ct(O,At,"","",function(Wt){return at.call(Et,Wt,It++)}),At}function nt(O){if(O._status===-1){var at=O._result;at=at(),at.then(function(Et){(O._status===0||O._status===-1)&&(O._status=1,O._result=Et)},function(Et){(O._status===0||O._status===-1)&&(O._status=2,O._result=Et)}),O._status===-1&&(O._status=0,O._result=at)}if(O._status===1)return O._result.default;throw O._result}var K=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Tt(){}return pe.Children={map:H,forEach:function(O,at,Et){H(O,function(){at.apply(this,arguments)},Et)},count:function(O){var at=0;return H(O,function(){at++}),at},toArray:function(O){return H(O,function(at){return at})||[]},only:function(O){if(!w(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},pe.Component=b,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=I,pe.StrictMode=r,pe.Suspense=g,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,pe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return D.H.useMemoCache(O)}},pe.cache=function(O){return function(){return O.apply(null,arguments)}},pe.cloneElement=function(O,at,Et){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=A({},O.props),It=O.key,Wt=void 0;if(at!=null)for(rt in at.ref!==void 0&&(Wt=void 0),at.key!==void 0&&(It=""+at.key),at)!V.call(at,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&at.ref===void 0||(At[rt]=at[rt]);var rt=arguments.length-2;if(rt===1)At.children=Et;else if(1<rt){for(var St=Array(rt),Pt=0;Pt<rt;Pt++)St[Pt]=arguments[Pt+2];At.children=St}return F(O.type,It,void 0,void 0,Wt,At)},pe.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},pe.createElement=function(O,at,Et){var At,It={},Wt=null;if(at!=null)for(At in at.key!==void 0&&(Wt=""+at.key),at)V.call(at,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(It[At]=at[At]);var rt=arguments.length-2;if(rt===1)It.children=Et;else if(1<rt){for(var St=Array(rt),Pt=0;Pt<rt;Pt++)St[Pt]=arguments[Pt+2];It.children=St}if(O&&O.defaultProps)for(At in rt=O.defaultProps,rt)It[At]===void 0&&(It[At]=rt[At]);return F(O,Wt,void 0,void 0,null,It)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(O){return{$$typeof:h,render:O}},pe.isValidElement=w,pe.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:nt}},pe.memo=function(O,at){return{$$typeof:p,type:O,compare:at===void 0?null:at}},pe.startTransition=function(O){var at=D.T,Et={};D.T=Et;try{var At=O(),It=D.S;It!==null&&It(Et,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(Tt,K)}catch(Wt){K(Wt)}finally{D.T=at}},pe.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},pe.use=function(O){return D.H.use(O)},pe.useActionState=function(O,at,Et){return D.H.useActionState(O,at,Et)},pe.useCallback=function(O,at){return D.H.useCallback(O,at)},pe.useContext=function(O){return D.H.useContext(O)},pe.useDebugValue=function(){},pe.useDeferredValue=function(O,at){return D.H.useDeferredValue(O,at)},pe.useEffect=function(O,at,Et){var At=D.H;if(typeof Et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return At.useEffect(O,at)},pe.useId=function(){return D.H.useId()},pe.useImperativeHandle=function(O,at,Et){return D.H.useImperativeHandle(O,at,Et)},pe.useInsertionEffect=function(O,at){return D.H.useInsertionEffect(O,at)},pe.useLayoutEffect=function(O,at){return D.H.useLayoutEffect(O,at)},pe.useMemo=function(O,at){return D.H.useMemo(O,at)},pe.useOptimistic=function(O,at){return D.H.useOptimistic(O,at)},pe.useReducer=function(O,at,Et){return D.H.useReducer(O,at,Et)},pe.useRef=function(O){return D.H.useRef(O)},pe.useState=function(O){return D.H.useState(O)},pe.useSyncExternalStore=function(O,at,Et){return D.H.useSyncExternalStore(O,at,Et)},pe.useTransition=function(){return D.H.useTransition()},pe.version="19.1.1",pe}var g_;function Ch(){return g_||(g_=1,$f.exports=dy()),$f.exports}var Kt=Ch(),td={exports:{}},Lo={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function hy(){return __||(__=1,(function(o){function t(H,nt){var K=H.length;H.push(nt);t:for(;0<K;){var Tt=K-1>>>1,O=H[Tt];if(0<l(O,nt))H[Tt]=nt,H[K]=O,K=Tt;else break t}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var nt=H[0],K=H.pop();if(K!==nt){H[0]=K;t:for(var Tt=0,O=H.length,at=O>>>1;Tt<at;){var Et=2*(Tt+1)-1,At=H[Et],It=Et+1,Wt=H[It];if(0>l(At,K))It<O&&0>l(Wt,At)?(H[Tt]=Wt,H[It]=K,Tt=It):(H[Tt]=At,H[Et]=K,Tt=Et);else if(It<O&&0>l(Wt,K))H[Tt]=Wt,H[It]=K,Tt=It;else break t}}return nt}function l(H,nt){var K=H.sortIndex-nt.sortIndex;return K!==0?K:H.id-nt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],p=[],v=1,x=null,y=3,_=!1,A=!1,E=!1,b=!1,m=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function N(H){for(var nt=i(p);nt!==null;){if(nt.callback===null)r(p);else if(nt.startTime<=H)r(p),nt.sortIndex=nt.expirationTime,t(g,nt);else break;nt=i(p)}}function D(H){if(E=!1,N(H),!A)if(i(g)!==null)A=!0,V||(V=!0,ut());else{var nt=i(p);nt!==null&&ct(D,nt.startTime-H)}}var V=!1,F=-1,$=5,w=-1;function L(){return b?!0:!(o.unstable_now()-w<$)}function q(){if(b=!1,V){var H=o.unstable_now();w=H;var nt=!0;try{t:{A=!1,E&&(E=!1,I(F),F=-1),_=!0;var K=y;try{e:{for(N(H),x=i(g);x!==null&&!(x.expirationTime>H&&L());){var Tt=x.callback;if(typeof Tt=="function"){x.callback=null,y=x.priorityLevel;var O=Tt(x.expirationTime<=H);if(H=o.unstable_now(),typeof O=="function"){x.callback=O,N(H),nt=!0;break e}x===i(g)&&r(g),N(H)}else r(g);x=i(g)}if(x!==null)nt=!0;else{var at=i(p);at!==null&&ct(D,at.startTime-H),nt=!1}}break t}finally{x=null,y=K,_=!1}nt=void 0}}finally{nt?ut():V=!1}}}var ut;if(typeof B=="function")ut=function(){B(q)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,vt=mt.port2;mt.port1.onmessage=q,ut=function(){vt.postMessage(null)}}else ut=function(){m(q,0)};function ct(H,nt){F=m(function(){H(o.unstable_now())},nt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(H){switch(y){case 1:case 2:case 3:var nt=3;break;default:nt=y}var K=y;y=nt;try{return H()}finally{y=K}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(H,nt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var K=y;y=H;try{return nt()}finally{y=K}},o.unstable_scheduleCallback=function(H,nt,K){var Tt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Tt+K:Tt):K=Tt,H){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=K+O,H={id:v++,callback:nt,priorityLevel:H,startTime:K,expirationTime:O,sortIndex:-1},K>Tt?(H.sortIndex=K,t(p,H),i(g)===null&&H===i(p)&&(E?(I(F),F=-1):E=!0,ct(D,K-Tt))):(H.sortIndex=O,t(g,H),A||_||(A=!0,V||(V=!0,ut()))),H},o.unstable_shouldYield=L,o.unstable_wrapCallback=function(H){var nt=y;return function(){var K=y;y=nt;try{return H.apply(this,arguments)}finally{y=K}}}})(nd)),nd}var v_;function py(){return v_||(v_=1,ed.exports=hy()),ed.exports}var id={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function my(){if(x_)return Dn;x_=1;var o=Ch();function t(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(g,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:g,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(g,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(g,p,null,v)},Dn.flushSync=function(g){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,g)return g()}finally{d.T=p,r.p=v,r.d.f()}},Dn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},Dn.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},Dn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,_=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:_}):v==="script"&&r.d.X(g,{crossOrigin:x,integrity:y,fetchPriority:_,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},Dn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin);r.d.L(g,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(g,p){if(typeof g=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},Dn.requestFormReset=function(g){r.d.r(g)},Dn.unstable_batchedUpdates=function(g,p){return g(p)},Dn.useFormState=function(g,p,v){return d.H.useFormState(g,p,v)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.1.1",Dn}var y_;function gy(){if(y_)return id.exports;y_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),id.exports=my(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function _y(){if(S_)return Lo;S_=1;var o=py(),t=Ch(),i=gy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function g(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),e;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var M=!1,R=c.child;R;){if(R===a){M=!0,a=c,s=f;break}if(R===s){M=!0,s=c,a=f;break}R=R.sibling}if(!M){for(R=f.child;R;){if(R===a){M=!0,a=f,s=c;break}if(R===s){M=!0,s=f,a=c;break}R=R.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),B=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var mt=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case b:return"Profiler";case E:return"StrictMode";case D:return"Suspense";case V:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case B:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var ct=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Tt=[],O=-1;function at(e){return{current:e}}function Et(e){0>O||(e.current=Tt[O],Tt[O]=null,O--)}function At(e,n){O++,Tt[O]=e.current,e.current=n}var It=at(null),Wt=at(null),rt=at(null),St=at(null);function Pt(e,n){switch(At(rt,n),At(Wt,e),At(It,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Gg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Gg(n),e=Vg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Et(It),At(It,e)}function $t(){Et(It),Et(Wt),Et(rt)}function Qt(e){e.memoizedState!==null&&At(St,e);var n=It.current,a=Vg(n,e.type);n!==a&&(At(Wt,e),At(It,a))}function de(e){Wt.current===e&&(Et(It),Et(Wt)),St.current===e&&(Et(St),Ao._currentValue=K)}var Ke=Object.prototype.hasOwnProperty,k=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,ue=o.unstable_shouldYield,ie=o.unstable_requestPaint,Gt=o.unstable_now,Ne=o.unstable_getCurrentPriorityLevel,jt=o.unstable_ImmediatePriority,fe=o.unstable_UserBlockingPriority,P=o.unstable_NormalPriority,ot=o.unstable_LowPriority,T=o.unstable_IdlePriority,S=o.log,U=o.unstable_setDisableYieldValue,W=null,Z=null;function X(e){if(typeof S=="function"&&U(e),Z&&typeof Z.setStrictMode=="function")try{Z.setStrictMode(W,e)}catch{}}var gt=Math.clz32?Math.clz32:Ut,lt=Math.log,Rt=Math.LN2;function Ut(e){return e>>>=0,e===0?32:31-(lt(e)/Rt|0)|0}var _t=256,wt=4194304;function Xt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?c=Xt(s):(M&=R,M!==0?c=Xt(M):a||(a=R&~e,a!==0&&(c=Xt(a))))):(R=s&~f,R!==0?c=Xt(R):M!==0?c=Xt(M):a||(a=s&~e,a!==0&&(c=Xt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Lt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var e=_t;return _t<<=1,(_t&4194048)===0&&(_t=256),e}function Dt(){var e=wt;return wt<<=1,(wt&62914560)===0&&(wt=4194304),e}function Bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function kt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nt(e,n,a,s,c,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,st=e.hiddenUpdates;for(a=M&~a;0<a;){var xt=31-gt(a),Mt=1<<xt;R[xt]=0,G[xt]=-1;var ft=st[xt];if(ft!==null)for(st[xt]=null,xt=0;xt<ft.length;xt++){var dt=ft[xt];dt!==null&&(dt.lane&=-536870913)}a&=~Mt}s!==0&&bt(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function bt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-gt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Zt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-gt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function ce(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Re(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:o_(e.type))}function pi(e,n){var a=nt.p;try{return nt.p=e,n()}finally{nt.p=a}}var un=Math.random().toString(36).slice(2),fn="__reactFiber$"+un,Je="__reactProps$"+un,Ai="__reactContainer$"+un,Tr="__reactEvents$"+un,el="__reactListeners$"+un,Ar="__reactHandles$"+un,Is="__reactResources$"+un,Ri="__reactMarker$"+un;function Rr(e){delete e[fn],delete e[Je],delete e[Tr],delete e[el],delete e[Ar]}function zi(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ai]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=qg(e);e!==null;){if(a=e[fn])return a;e=qg(e)}return n}e=a,a=e.parentNode}return null}function ua(e){if(e=e[fn]||e[Ai]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function fa(e){var n=e[Is];return n||(n=e[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[Ri]=!0}var nl=new Set,il={};function C(e,n){Q(e,n),Q(e+"Capture",n)}function Q(e,n){for(il[e]=n,e=0;e<n.length;e++)nl.add(n[e])}var ht=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pt={},tt={};function Ot(e){return Ke.call(tt,e)?!0:Ke.call(pt,e)?!1:ht.test(e)?tt[e]=!0:(pt[e]=!0,!1)}function Ft(e,n,a){if(Ot(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function qt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function zt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var ne,se;function Jt(e){if(ne===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ne=n&&n[1]||"",se=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ne+e+se}var ge=!1;function Ce(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(dt){var ft=dt}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(dt){ft=dt}e.call(Mt.prototype)}}else{try{throw Error()}catch(dt){ft=dt}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(dt){if(dt&&ft&&typeof dt.stack=="string")return[dt.stack,ft.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),M=f[0],R=f[1];if(M&&R){var G=M.split(`
`),st=R.split(`
`);for(c=s=0;s<G.length&&!G[s].includes("DetermineComponentFrameRoot");)s++;for(;c<st.length&&!st[c].includes("DetermineComponentFrameRoot");)c++;if(s===G.length||c===st.length)for(s=G.length-1,c=st.length-1;1<=s&&0<=c&&G[s]!==st[c];)c--;for(;1<=s&&0<=c;s--,c--)if(G[s]!==st[c]){if(s!==1||c!==1)do if(s--,c--,0>c||G[s]!==st[c]){var xt=`
`+G[s].replace(" at new "," at ");return e.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",e.displayName)),xt}while(1<=s&&0<=c);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Jt(a):""}function Ye(e){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return Jt("Activity");default:return""}}function Ie(e){try{var n="";do n+=Ye(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ee(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(e){var n=ee(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){s=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Se(e){e._valueTracker||(e._valueTracker=qe(e))}function Rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ee(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function gn(e){return e.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(e,n,a,s,c,f,M,R){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,M,_e(n)):a!=null?Cn(e,M,_e(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+_e(R):e.removeAttribute("name")}function Fn(e,n,a,s,c,f,M,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=R?e.checked:!!s,e.defaultChecked=!!s,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Cn(e,n,a){n==="number"&&mi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $e(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function bn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Cr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Vn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ov=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||ov.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Gh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Gh(e,f,n[f])}function Kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return cv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Dr=null;function kh(e){var n=ua(e);if(n&&(e=n.stateNode)){var a=e[Je]||null;t:switch(e=n.stateNode,n.type){case"input":if(ke(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Je]||null;if(!c)throw Error(r(90));ke(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Rn(s)}break t;case"textarea":bn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$e(e,!!a.multiple,n,!1)}}}var $c=!1;function Xh(e,n,a){if($c)return e(n,a);$c=!0;try{var s=e(n);return s}finally{if($c=!1,(wr!==null||Dr!==null)&&(kl(),wr&&(n=wr,e=Dr,Dr=wr=null,kh(n),e)))for(n=0;n<e.length;n++)kh(e[n])}}function Fs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Je]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(Hi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){tu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{tu=!1}var da=null,eu=null,rl=null;function Wh(){if(rl)return rl;var e,n=eu,a=n.length,s,c="value"in da?da.value:da.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var M=a-e;for(s=1;s<=M&&n[a-s]===c[f-s];s++);return rl=c.slice(e,1<s?1-s:void 0)}function sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function qh(){return!1}function kn(e){function n(a,s,c,f,M){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:qh,this.isPropagationStopped=qh,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=kn(ja),Hs=v({},ja,{view:0,detail:0}),uv=kn(Hs),nu,iu,Gs,cl=v({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gs&&(Gs&&e.type==="mousemove"?(nu=e.screenX-Gs.screenX,iu=e.screenY-Gs.screenY):iu=nu=0,Gs=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),jh=kn(cl),fv=v({},cl,{dataTransfer:0}),dv=kn(fv),hv=v({},Hs,{relatedTarget:0}),au=kn(hv),pv=v({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),mv=kn(pv),gv=v({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_v=kn(gv),vv=v({},ja,{data:0}),Yh=kn(vv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sv[e])?!!n[e]:!1}function ru(){return Mv}var bv=v({},Hs,{key:function(e){if(e.key){var n=xv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ev=kn(bv),Tv=v({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=kn(Tv),Av=v({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Rv=kn(Av),Cv=v({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),wv=kn(Cv),Dv=v({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uv=kn(Dv),Lv=v({},ja,{newState:0,oldState:0}),Nv=kn(Lv),Ov=[9,13,27,32],su=Hi&&"CompositionEvent"in window,Vs=null;Hi&&"documentMode"in document&&(Vs=document.documentMode);var Pv=Hi&&"TextEvent"in window&&!Vs,Kh=Hi&&(!su||Vs&&8<Vs&&11>=Vs),Qh=" ",Jh=!1;function $h(e,n){switch(e){case"keyup":return Ov.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function Bv(e,n){switch(e){case"compositionend":return tp(n);case"keypress":return n.which!==32?null:(Jh=!0,Qh);case"textInput":return e=n.data,e===Qh&&Jh?null:e;default:return null}}function Iv(e,n){if(Ur)return e==="compositionend"||!su&&$h(e,n)?(e=Wh(),rl=eu=da=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kh&&n.locale!=="ko"?null:n.data;default:return null}}var Fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Fv[e.type]:n==="textarea"}function np(e,n,a,s){wr?Dr?Dr.push(s):Dr=[s]:wr=s,n=Zl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var ks=null,Xs=null;function zv(e){Bg(e,0)}function ul(e){var n=qa(e);if(Rn(n))return e}function ip(e,n){if(e==="change")return n}var ap=!1;if(Hi){var ou;if(Hi){var lu="oninput"in document;if(!lu){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),lu=typeof rp.oninput=="function"}ou=lu}else ou=!1;ap=ou&&(!document.documentMode||9<document.documentMode)}function sp(){ks&&(ks.detachEvent("onpropertychange",op),Xs=ks=null)}function op(e){if(e.propertyName==="value"&&ul(Xs)){var n=[];np(n,Xs,e,Jc(e)),Xh(zv,n)}}function Hv(e,n,a){e==="focusin"?(sp(),ks=n,Xs=a,ks.attachEvent("onpropertychange",op)):e==="focusout"&&sp()}function Gv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Xs)}function Vv(e,n){if(e==="click")return ul(n)}function kv(e,n){if(e==="input"||e==="change")return ul(n)}function Xv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Xv;function Ws(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ke.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cp(e,n){var a=lp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=lp(a)}}function up(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?up(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mi(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Wv=Hi&&"documentMode"in document&&11>=document.documentMode,Lr=null,uu=null,qs=null,fu=!1;function dp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Lr==null||Lr!==mi(s)||(s=Lr,"selectionStart"in s&&cu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),qs&&Ws(qs,s)||(qs=s,s=Zl(uu,"onSelect"),0<s.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Lr)))}function Ya(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Nr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},du={},hp={};Hi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Za(e){if(du[e])return du[e];if(!Nr[e])return e;var n=Nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return du[e]=n[a];return e}var pp=Za("animationend"),mp=Za("animationiteration"),gp=Za("animationstart"),qv=Za("transitionrun"),jv=Za("transitionstart"),Yv=Za("transitioncancel"),_p=Za("transitionend"),vp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function gi(e,n){vp.set(e,n),C(n,[e])}var xp=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=xp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ie(n)},xp.set(e,n),n)}return{value:e,source:n,stack:Ie(n)}}var ri=[],Or=0,pu=0;function fl(){for(var e=Or,n=pu=Or=0;n<e;){var a=ri[n];ri[n++]=null;var s=ri[n];ri[n++]=null;var c=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,s!==null&&c!==null){var M=s.pending;M===null?c.next=c:(c.next=M.next,M.next=c),s.pending=c}f!==0&&yp(a,c,f)}}function dl(e,n,a,s){ri[Or++]=e,ri[Or++]=n,ri[Or++]=a,ri[Or++]=s,pu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function mu(e,n,a,s){return dl(e,n,a,s),hl(e)}function Pr(e,n){return dl(e,null,null,n),hl(e)}function yp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-gt(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function hl(e){if(50<vo)throw vo=0,Mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Br={};function Zv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,s){return new Zv(e,n,a,s)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function pl(e,n,a,s,c,f){var M=0;if(s=e,typeof e=="function")gu(e)&&(M=1);else if(typeof e=="string")M=Qx(e,a,It.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Zn(31,a,n,c),e.elementType=w,e.lanes=f,e;case A:return Ka(a.children,c,f,n);case E:M=8,c|=24;break;case b:return e=Zn(12,a,n,c|2),e.elementType=b,e.lanes=f,e;case D:return e=Zn(13,a,n,c),e.elementType=D,e.lanes=f,e;case V:return e=Zn(19,a,n,c),e.elementType=V,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case m:case B:M=10;break t;case I:M=9;break t;case N:M=11;break t;case F:M=14;break t;case $:M=16,s=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Zn(M,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Ka(e,n,a,s){return e=Zn(7,e,s,n),e.lanes=a,e}function _u(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function vu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ir=[],Fr=0,ml=null,gl=0,si=[],oi=0,Qa=null,Vi=1,ki="";function Ja(e,n){Ir[Fr++]=gl,Ir[Fr++]=ml,ml=e,gl=n}function Mp(e,n,a){si[oi++]=Vi,si[oi++]=ki,si[oi++]=Qa,Qa=e;var s=Vi;e=ki;var c=32-gt(s)-1;s&=~(1<<c),a+=1;var f=32-gt(n)+c;if(30<f){var M=c-c%5;f=(s&(1<<M)-1).toString(32),s>>=M,c-=M,Vi=1<<32-gt(n)+c|a<<c|s,ki=f+e}else Vi=1<<f|a<<c|s,ki=e}function xu(e){e.return!==null&&(Ja(e,1),Mp(e,1,0))}function yu(e){for(;e===ml;)ml=Ir[--Fr],Ir[Fr]=null,gl=Ir[--Fr],Ir[Fr]=null;for(;e===Qa;)Qa=si[--oi],si[oi]=null,ki=si[--oi],si[oi]=null,Vi=si[--oi],si[oi]=null}var zn=null,tn=null,Ue=!1,$a=null,Ci=!1,Su=Error(r(519));function tr(e){var n=Error(r(418,""));throw Zs(ai(n,e)),Su}function bp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[fn]=e,n[Je]=s,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)be(yo[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Fn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Se(n);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),Cr(n,s.value,s.defaultValue,s.children),Se(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Hg(n.textContent,a)?(s.popover!=null&&(be("beforetoggle",n),be("toggle",n)),s.onScroll!=null&&be("scroll",n),s.onScrollEnd!=null&&be("scrollend",n),s.onClick!=null&&(n.onclick=Kl),n=!0):n=!1,n||tr(e)}function Ep(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:zn=zn.return}}function js(e){if(e!==zn)return!1;if(!Ue)return Ep(e),Ue=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ff(e.type,e.memoizedProps)),a=!a),a&&tn&&tr(e),Ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){tn=vi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}tn=null}}else n===27?(n=tn,Ca(e.type)?(e=Vf,Vf=null,tn=e):tn=n):tn=zn?vi(e.stateNode.nextSibling):null;return!0}function Ys(){tn=zn=null,Ue=!1}function Tp(){var e=$a;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),$a=null),e}function Zs(e){$a===null?$a=[e]:$a.push(e)}var Mu=at(null),er=null,Xi=null;function ha(e,n,a){At(Mu,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=Mu.current,Et(Mu)}function bu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Eu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var M=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),bu(f.return,a,e),s||(M=null);break t}f=R.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),bu(M,a,e),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===e){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function Ks(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var R=c.type;Yn(c.pendingProps.value,M.value)||(e!==null?e.push(R):e=[R])}}else if(c===St.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}c=c.return}e!==null&&Eu(n,e,a,s),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){er=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Ap(er,e)}function vl(e,n){return er===null&&nr(e),Ap(e,n)}function Ap(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(r(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var Kv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Qv=o.unstable_scheduleCallback,Jv=o.unstable_NormalPriority,dn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new Kv,data:new Map,refCount:0}}function Qs(e){e.refCount--,e.refCount===0&&Qv(Jv,function(){e.controller.abort()})}var Js=null,Au=0,zr=0,Hr=null;function $v(e,n){if(Js===null){var a=Js=[];Au=0,zr=wf(),Hr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Au++,n.then(Rp,Rp),n}function Rp(){if(--Au===0&&Js!==null){Hr!==null&&(Hr.status="fulfilled");var e=Js;Js=null,zr=0,Hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function tx(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Cp=H.S;H.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&$v(e,n),Cp!==null&&Cp(e,n)};var ir=at(null);function Ru(){var e=ir.current;return e!==null?e:We.pooledCache}function xl(e,n){n===null?At(ir,ir.current):At(ir,n.pool)}function wp(){var e=Ru();return e===null?null:{parent:dn._currentValue,pool:e}}var $s=Error(r(460)),Dp=Error(r(474)),yl=Error(r(542)),Cu={then:function(){}};function Up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sl(){}function Lp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Sl,Sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e;default:if(typeof n.status=="string")n.then(Sl,Sl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e}throw to=n,$s}}var to=null;function Np(){if(to===null)throw Error(r(459));var e=to;return to=null,e}function Op(e){if(e===$s||e===yl)throw Error(r(483))}var pa=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=hl(e),yp(e,null,a),n}return dl(e,s,n,a),hl(e)}function eo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Zt(e,a)}}function Uu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function no(){if(Lu){var e=Hr;if(e!==null)throw e}}function io(e,n,a,s){Lu=!1;var c=e.updateQueue;pa=!1;var f=c.firstBaseUpdate,M=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var G=R,st=G.next;G.next=null,M===null?f=st:M.next=st,M=G;var xt=e.alternate;xt!==null&&(xt=xt.updateQueue,R=xt.lastBaseUpdate,R!==M&&(R===null?xt.firstBaseUpdate=st:R.next=st,xt.lastBaseUpdate=G))}if(f!==null){var Mt=c.baseState;M=0,xt=st=G=null,R=f;do{var ft=R.lane&-536870913,dt=ft!==R.lane;if(dt?(Ae&ft)===ft:(s&ft)===ft){ft!==0&&ft===zr&&(Lu=!0),xt!==null&&(xt=xt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var le=e,re=R;ft=n;var He=a;switch(re.tag){case 1:if(le=re.payload,typeof le=="function"){Mt=le.call(He,Mt,ft);break t}Mt=le;break t;case 3:le.flags=le.flags&-65537|128;case 0:if(le=re.payload,ft=typeof le=="function"?le.call(He,Mt,ft):le,ft==null)break t;Mt=v({},Mt,ft);break t;case 2:pa=!0}}ft=R.callback,ft!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=c.callbacks,dt===null?c.callbacks=[ft]:dt.push(ft))}else dt={lane:ft,tag:R.tag,payload:R.payload,callback:R.callback,next:null},xt===null?(st=xt=dt,G=Mt):xt=xt.next=dt,M|=ft;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;dt=R,R=dt.next,dt.next=null,c.lastBaseUpdate=dt,c.shared.pending=null}}while(!0);xt===null&&(G=Mt),c.baseState=G,c.firstBaseUpdate=st,c.lastBaseUpdate=xt,f===null&&(c.shared.lanes=0),Ea|=M,e.lanes=M,e.memoizedState=Mt}}function Pp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Bp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pp(a[e],n)}var Gr=at(null),Ml=at(0);function Ip(e,n){e=Ji,At(Ml,e),At(Gr,n),Ji=e|n.baseLanes}function Nu(){At(Ml,Ji),At(Gr,Gr.current)}function Ou(){Ji=Ml.current,Et(Gr),Et(Ml)}var _a=0,xe=null,Fe=null,on=null,bl=!1,Vr=!1,ar=!1,El=0,ao=0,kr=null,ex=0;function nn(){throw Error(r(321))}function Pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,s,c,f){return _a=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?ym:Sm,ar=!1,f=a(s,c),ar=!1,Vr&&(f=zp(n,a,s,c)),Fp(e),f}function Fp(e){H.H=Dl;var n=Fe!==null&&Fe.next!==null;if(_a=0,on=Fe=xe=null,bl=!1,ao=0,kr=null,n)throw Error(r(300));e===null||_n||(e=e.dependencies,e!==null&&_l(e)&&(_n=!0))}function zp(e,n,a,s){xe=e;var c=0;do{if(Vr&&(kr=null),ao=0,Vr=!1,25<=c)throw Error(r(301));if(c+=1,on=Fe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=lx,f=n(a,s)}while(Vr);return f}function nx(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?ro(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(xe.flags|=1024),n}function Iu(){var e=El!==0;return El=0,e}function Fu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zu(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}_a=0,on=Fe=xe=null,Vr=!1,ao=El=0,kr=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?xe.memoizedState=on=e:on=on.next=e,on}function ln(){if(Fe===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=on===null?xe.memoizedState:on.next;if(n!==null)on=n,Fe=e;else{if(e===null)throw xe.alternate===null?Error(r(467)):Error(r(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},on===null?xe.memoizedState=on=e:on=on.next=e}return on}function Hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(e){var n=ao;return ao+=1,kr===null&&(kr=[]),e=Lp(kr,e,n),n=xe,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?ym:Sm),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ro(e);if(e.$$typeof===B)return wn(e)}throw Error(r(438,String(e)))}function Gu(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=xe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hu(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=L;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=ln();return Vu(n,Fe,e)}function Vu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var M=c.next;c.next=f.next,f.next=M}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=M=null,G=null,st=n,xt=!1;do{var Mt=st.lane&-536870913;if(Mt!==st.lane?(Ae&Mt)===Mt:(_a&Mt)===Mt){var ft=st.revertLane;if(ft===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Mt===zr&&(xt=!0);else if((_a&ft)===ft){st=st.next,ft===zr&&(xt=!0);continue}else Mt={lane:0,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(R=G=Mt,M=f):G=G.next=Mt,xe.lanes|=ft,Ea|=ft;Mt=st.action,ar&&a(f,Mt),f=st.hasEagerState?st.eagerState:a(f,Mt)}else ft={lane:Mt,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(R=G=ft,M=f):G=G.next=ft,xe.lanes|=Mt,Ea|=Mt;st=st.next}while(st!==null&&st!==n);if(G===null?M=f:G.next=R,!Yn(f,e.memoizedState)&&(_n=!0,xt&&(a=Hr,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=G,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function ku(e){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var M=c=c.next;do f=e(f,M.action),M=M.next;while(M!==c);Yn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Hp(e,n,a){var s=xe,c=ln(),f=Ue;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Yn((Fe||c).memoizedState,a);M&&(c.memoizedState=a,_n=!0),c=c.queue;var R=kp.bind(null,s,c,e);if(so(2048,8,R,[e]),c.getSnapshot!==n||M||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Xr(9,Rl(),Vp.bind(null,s,c,a,n),null),We===null)throw Error(r(349));f||(_a&124)!==0||Gp(s,n,a)}return a}function Gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Hu(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Vp(e,n,a,s){n.value=a,n.getSnapshot=s,Xp(n)&&Wp(e)}function kp(e,n,a){return a(function(){Xp(n)&&Wp(e)})}function Xp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Wp(e){var n=Pr(e,2);n!==null&&ti(n,e,2)}function Xu(e){var n=Xn();if(typeof e=="function"){var a=e;if(e=a(),ar){X(!0);try{a()}finally{X(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function qp(e,n,a,s){return e.baseState=a,Vu(e,Fe,typeof s=="function"?s:qi)}function ix(e,n,a,s,c){if(wl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};H.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function jp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=H.T,M={};H.T=M;try{var R=a(c,s),G=H.S;G!==null&&G(M,R),Yp(e,n,R)}catch(st){Wu(e,n,st)}finally{H.T=f}}else try{f=a(c,s),Yp(e,n,f)}catch(st){Wu(e,n,st)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Zp(e,n,s)},function(s){return Wu(e,n,s)}):Zp(e,n,a)}function Zp(e,n,a){n.status="fulfilled",n.value=a,Kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,jp(e,a)))}function Wu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==s)}e.action=null}function Kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qp(e,n){return n}function Jp(e,n){if(Ue){var a=We.formState;if(a!==null){t:{var s=xe;if(Ue){if(tn){e:{for(var c=tn,f=Ci;c.nodeType!==8;){if(!f){c=null;break e}if(c=vi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){tn=vi(c.nextSibling),s=c.data==="F!";break t}}tr(s)}s=!1}s&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=s,a=_m.bind(null,xe,s),s.dispatch=a,s=Xu(!1),f=Ku.bind(null,xe,!1,s.queue),s=Xn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=ix.bind(null,xe,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function $p(e){var n=ln();return tm(n,Fe,e)}function tm(e,n,a){if(n=Vu(e,n,Qp)[0],e=Al(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ro(n)}catch(M){throw M===$s?yl:M}else s=n;n=ln();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Xr(9,Rl(),ax.bind(null,c,a),null)),[s,f,e]}function ax(e,n){e.action=n}function em(e){var n=ln(),a=Fe;if(a!==null)return tm(n,a,e);ln(),n=n.memoizedState,a=ln();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Xr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Hu(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Rl(){return{destroy:void 0,resource:void 0}}function nm(){return ln().memoizedState}function Cl(e,n,a,s){var c=Xn();s=s===void 0?null:s,xe.flags|=e,c.memoizedState=Xr(1|n,Rl(),a,s)}function so(e,n,a,s){var c=ln();s=s===void 0?null:s;var f=c.memoizedState.inst;Fe!==null&&s!==null&&Pu(s,Fe.memoizedState.deps)?c.memoizedState=Xr(n,f,a,s):(xe.flags|=e,c.memoizedState=Xr(1|n,f,a,s))}function im(e,n){Cl(8390656,8,e,n)}function am(e,n){so(2048,8,e,n)}function rm(e,n){return so(4,2,e,n)}function sm(e,n){return so(4,4,e,n)}function om(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lm(e,n,a){a=a!=null?a.concat([e]):null,so(4,4,om.bind(null,n,e),a)}function qu(){}function cm(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Pu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function um(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Pu(n,s[1]))return s[0];if(s=e(),ar){X(!0);try{e()}finally{X(!1)}}return a.memoizedState=[s,n],s}function ju(e,n,a){return a===void 0||(_a&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=hg(),xe.lanes|=e,Ea|=e,a)}function fm(e,n,a,s){return Yn(a,n)?a:Gr.current!==null?(e=ju(e,a,s),Yn(e,n)||(_n=!0),e):(_a&42)===0?(_n=!0,e.memoizedState=a):(e=hg(),xe.lanes|=e,Ea|=e,n)}function dm(e,n,a,s,c){var f=nt.p;nt.p=f!==0&&8>f?f:8;var M=H.T,R={};H.T=R,Ku(e,!1,n,a);try{var G=c(),st=H.S;if(st!==null&&st(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var xt=tx(G,s);oo(e,n,xt,$n(e))}else oo(e,n,s,$n(e))}catch(Mt){oo(e,n,{then:function(){},status:"rejected",reason:Mt},$n())}finally{nt.p=f,H.T=M}}function rx(){}function Yu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=hm(e).queue;dm(e,c,n,K,a===null?rx:function(){return pm(e),a(s)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function pm(e){var n=hm(e).next.queue;oo(e,n,{},$n())}function Zu(){return wn(Ao)}function mm(){return ln().memoizedState}function gm(){return ln().memoizedState}function sx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=ma(a);var s=ga(n,e,a);s!==null&&(ti(s,n,a),eo(s,n,a)),n={cache:Tu()},e.payload=n;return}n=n.return}}function ox(e,n,a){var s=$n();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},wl(e)?vm(n,a):(a=mu(e,n,a,s),a!==null&&(ti(a,e,s),xm(a,n,s)))}function _m(e,n,a){var s=$n();oo(e,n,a,s)}function oo(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(e))vm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,R=f(M,a);if(c.hasEagerState=!0,c.eagerState=R,Yn(R,M))return dl(e,n,c,0),We===null&&fl(),!1}catch{}finally{}if(a=mu(e,n,c,s),a!==null)return ti(a,e,s),xm(a,n,s),!0}return!1}function Ku(e,n,a,s){if(s={lane:2,revertLane:wf(),action:s,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(r(479))}else n=mu(e,a,s,2),n!==null&&ti(n,e,2)}function wl(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function vm(e,n){Vr=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function xm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Zt(e,a)}}var Dl={readContext:wn,use:Tl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},ym={readContext:wn,use:Tl,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cl(4194308,4,om.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cl(4194308,4,e,n)},useInsertionEffect:function(e,n){Cl(4,2,e,n)},useMemo:function(e,n){var a=Xn();n=n===void 0?null:n;var s=e();if(ar){X(!0);try{e()}finally{X(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Xn();if(a!==void 0){var c=a(n);if(ar){X(!0);try{a(n)}finally{X(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=ox.bind(null,xe,e),[s.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,a=_m.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,n){var a=Xn();return ju(a,e,n)},useTransition:function(){var e=Xu(!1);return e=dm.bind(null,xe,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=xe,c=Xn();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Ae&124)!==0||Gp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,im(kp.bind(null,s,f,e),[e]),s.flags|=2048,Xr(9,Rl(),Vp.bind(null,s,f,a,n),null),a},useId:function(){var e=Xn(),n=We.identifierPrefix;if(Ue){var a=ki,s=Vi;a=(s&~(1<<32-gt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=ex++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return Xn().memoizedState=sx.bind(null,xe)}},Sm={readContext:wn,use:Tl,useCallback:cm,useContext:wn,useEffect:am,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:Al,useRef:nm,useState:function(){return Al(qi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=ln();return fm(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Al(qi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Zu,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=ln();return qp(a,Fe,e,n)},useMemoCache:Gu,useCacheRefresh:gm},lx={readContext:wn,use:Tl,useCallback:cm,useContext:wn,useEffect:am,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:ku,useRef:nm,useState:function(){return ku(qi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=ln();return Fe===null?ju(a,e,n):fm(a,Fe.memoizedState,e,n)},useTransition:function(){var e=ku(qi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Zu,useFormState:em,useActionState:em,useOptimistic:function(e,n){var a=ln();return Fe!==null?qp(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:gm},Wr=null,lo=0;function Ul(e){var n=lo;return lo+=1,Wr===null&&(Wr=[]),Lp(Wr,e,n)}function co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ll(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Mm(e){var n=e._init;return n(e._payload)}function bm(e){function n(J,j){if(e){var et=J.deletions;et===null?(J.deletions=[j],J.flags|=16):et.push(j)}}function a(J,j){if(!e)return null;for(;j!==null;)n(J,j),j=j.sibling;return null}function s(J){for(var j=new Map;J!==null;)J.key!==null?j.set(J.key,J):j.set(J.index,J),J=J.sibling;return j}function c(J,j){return J=Gi(J,j),J.index=0,J.sibling=null,J}function f(J,j,et){return J.index=et,e?(et=J.alternate,et!==null?(et=et.index,et<j?(J.flags|=67108866,j):et):(J.flags|=67108866,j)):(J.flags|=1048576,j)}function M(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function R(J,j,et,yt){return j===null||j.tag!==6?(j=_u(et,J.mode,yt),j.return=J,j):(j=c(j,et),j.return=J,j)}function G(J,j,et,yt){var Yt=et.type;return Yt===A?xt(J,j,et.props.children,yt,et.key):j!==null&&(j.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===$&&Mm(Yt)===j.type)?(j=c(j,et.props),co(j,et),j.return=J,j):(j=pl(et.type,et.key,et.props,null,J.mode,yt),co(j,et),j.return=J,j)}function st(J,j,et,yt){return j===null||j.tag!==4||j.stateNode.containerInfo!==et.containerInfo||j.stateNode.implementation!==et.implementation?(j=vu(et,J.mode,yt),j.return=J,j):(j=c(j,et.children||[]),j.return=J,j)}function xt(J,j,et,yt,Yt){return j===null||j.tag!==7?(j=Ka(et,J.mode,yt,Yt),j.return=J,j):(j=c(j,et),j.return=J,j)}function Mt(J,j,et){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=_u(""+j,J.mode,et),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return et=pl(j.type,j.key,j.props,null,J.mode,et),co(et,j),et.return=J,et;case _:return j=vu(j,J.mode,et),j.return=J,j;case $:var yt=j._init;return j=yt(j._payload),Mt(J,j,et)}if(ct(j)||ut(j))return j=Ka(j,J.mode,et,null),j.return=J,j;if(typeof j.then=="function")return Mt(J,Ul(j),et);if(j.$$typeof===B)return Mt(J,vl(J,j),et);Ll(J,j)}return null}function ft(J,j,et,yt){var Yt=j!==null?j.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Yt!==null?null:R(J,j,""+et,yt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===Yt?G(J,j,et,yt):null;case _:return et.key===Yt?st(J,j,et,yt):null;case $:return Yt=et._init,et=Yt(et._payload),ft(J,j,et,yt)}if(ct(et)||ut(et))return Yt!==null?null:xt(J,j,et,yt,null);if(typeof et.then=="function")return ft(J,j,Ul(et),yt);if(et.$$typeof===B)return ft(J,j,vl(J,et),yt);Ll(J,et)}return null}function dt(J,j,et,yt,Yt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return J=J.get(et)||null,R(j,J,""+yt,Yt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case y:return J=J.get(yt.key===null?et:yt.key)||null,G(j,J,yt,Yt);case _:return J=J.get(yt.key===null?et:yt.key)||null,st(j,J,yt,Yt);case $:var ye=yt._init;return yt=ye(yt._payload),dt(J,j,et,yt,Yt)}if(ct(yt)||ut(yt))return J=J.get(et)||null,xt(j,J,yt,Yt,null);if(typeof yt.then=="function")return dt(J,j,et,Ul(yt),Yt);if(yt.$$typeof===B)return dt(J,j,et,vl(j,yt),Yt);Ll(j,yt)}return null}function le(J,j,et,yt){for(var Yt=null,ye=null,te=j,oe=j=0,xn=null;te!==null&&oe<et.length;oe++){te.index>oe?(xn=te,te=null):xn=te.sibling;var we=ft(J,te,et[oe],yt);if(we===null){te===null&&(te=xn);break}e&&te&&we.alternate===null&&n(J,te),j=f(we,j,oe),ye===null?Yt=we:ye.sibling=we,ye=we,te=xn}if(oe===et.length)return a(J,te),Ue&&Ja(J,oe),Yt;if(te===null){for(;oe<et.length;oe++)te=Mt(J,et[oe],yt),te!==null&&(j=f(te,j,oe),ye===null?Yt=te:ye.sibling=te,ye=te);return Ue&&Ja(J,oe),Yt}for(te=s(te);oe<et.length;oe++)xn=dt(te,J,oe,et[oe],yt),xn!==null&&(e&&xn.alternate!==null&&te.delete(xn.key===null?oe:xn.key),j=f(xn,j,oe),ye===null?Yt=xn:ye.sibling=xn,ye=xn);return e&&te.forEach(function(Na){return n(J,Na)}),Ue&&Ja(J,oe),Yt}function re(J,j,et,yt){if(et==null)throw Error(r(151));for(var Yt=null,ye=null,te=j,oe=j=0,xn=null,we=et.next();te!==null&&!we.done;oe++,we=et.next()){te.index>oe?(xn=te,te=null):xn=te.sibling;var Na=ft(J,te,we.value,yt);if(Na===null){te===null&&(te=xn);break}e&&te&&Na.alternate===null&&n(J,te),j=f(Na,j,oe),ye===null?Yt=Na:ye.sibling=Na,ye=Na,te=xn}if(we.done)return a(J,te),Ue&&Ja(J,oe),Yt;if(te===null){for(;!we.done;oe++,we=et.next())we=Mt(J,we.value,yt),we!==null&&(j=f(we,j,oe),ye===null?Yt=we:ye.sibling=we,ye=we);return Ue&&Ja(J,oe),Yt}for(te=s(te);!we.done;oe++,we=et.next())we=dt(te,J,oe,we.value,yt),we!==null&&(e&&we.alternate!==null&&te.delete(we.key===null?oe:we.key),j=f(we,j,oe),ye===null?Yt=we:ye.sibling=we,ye=we);return e&&te.forEach(function(cy){return n(J,cy)}),Ue&&Ja(J,oe),Yt}function He(J,j,et,yt){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var Yt=et.key;j!==null;){if(j.key===Yt){if(Yt=et.type,Yt===A){if(j.tag===7){a(J,j.sibling),yt=c(j,et.props.children),yt.return=J,J=yt;break t}}else if(j.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===$&&Mm(Yt)===j.type){a(J,j.sibling),yt=c(j,et.props),co(yt,et),yt.return=J,J=yt;break t}a(J,j);break}else n(J,j);j=j.sibling}et.type===A?(yt=Ka(et.props.children,J.mode,yt,et.key),yt.return=J,J=yt):(yt=pl(et.type,et.key,et.props,null,J.mode,yt),co(yt,et),yt.return=J,J=yt)}return M(J);case _:t:{for(Yt=et.key;j!==null;){if(j.key===Yt)if(j.tag===4&&j.stateNode.containerInfo===et.containerInfo&&j.stateNode.implementation===et.implementation){a(J,j.sibling),yt=c(j,et.children||[]),yt.return=J,J=yt;break t}else{a(J,j);break}else n(J,j);j=j.sibling}yt=vu(et,J.mode,yt),yt.return=J,J=yt}return M(J);case $:return Yt=et._init,et=Yt(et._payload),He(J,j,et,yt)}if(ct(et))return le(J,j,et,yt);if(ut(et)){if(Yt=ut(et),typeof Yt!="function")throw Error(r(150));return et=Yt.call(et),re(J,j,et,yt)}if(typeof et.then=="function")return He(J,j,Ul(et),yt);if(et.$$typeof===B)return He(J,j,vl(J,et),yt);Ll(J,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,j!==null&&j.tag===6?(a(J,j.sibling),yt=c(j,et),yt.return=J,J=yt):(a(J,j),yt=_u(et,J.mode,yt),yt.return=J,J=yt),M(J)):a(J,j)}return function(J,j,et,yt){try{lo=0;var Yt=He(J,j,et,yt);return Wr=null,Yt}catch(te){if(te===$s||te===yl)throw te;var ye=Zn(29,te,null,J.mode);return ye.lanes=yt,ye.return=J,ye}finally{}}}var qr=bm(!0),Em=bm(!1),li=at(null),wi=null;function va(e){var n=e.alternate;At(hn,hn.current&1),At(li,e),wi===null&&(n===null||Gr.current!==null||n.memoizedState!==null)&&(wi=e)}function Tm(e){if(e.tag===22){if(At(hn,hn.current),At(li,e),wi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(wi=e)}}else xa()}function xa(){At(hn,hn.current),At(li,li.current)}function ji(e){Et(li),wi===e&&(wi=null),Et(hn)}var hn=at(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Qu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=$n(),c=ma(s);c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,s),n!==null&&(ti(n,e,s),eo(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=$n(),c=ma(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,s),n!==null&&(ti(n,e,s),eo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),s=ma(a);s.tag=2,n!=null&&(s.callback=n),n=ga(e,s,a),n!==null&&(ti(n,e,a),eo(n,e,a))}};function Am(e,n,a,s,c,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,M):n.prototype&&n.prototype.isPureReactComponent?!Ws(a,s)||!Ws(c,f):!0}function Rm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function rr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Cm(e){Ol(e)}function wm(e){console.error(e)}function Dm(e){Ol(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Um(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $u(e,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function Lm(e){return e=ma(e),e.tag=3,e}function Nm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Um(n,a,s)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Um(n,a,s),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function cx(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,c,!0),a=li.current,a!==null){switch(a.tag){case 13:return wi===null?Ef():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Af(e,s,c)),!1;case 22:return a.flags|=65536,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Af(e,s,c)),!1}throw Error(r(435,a.tag))}return Af(e,s,c),Ef(),!1}if(Ue)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Su&&(e=Error(r(422),{cause:s}),Zs(ai(e,a)))):(s!==Su&&(n=Error(r(423),{cause:s}),Zs(ai(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ai(s,a),c=$u(e.stateNode,s,c),Uu(e,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ai(f,a),_o===null?_o=[f]:_o.push(f),en!==4&&(en=2),n===null)return!0;s=ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=$u(a.stateNode,s,e),Uu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Lm(c),Nm(c,e,a,s),Uu(a,c),!1}a=a.return}while(a!==null);return!1}var Om=Error(r(461)),_n=!1;function En(e,n,a,s){n.child=e===null?Em(n,null,a,s):qr(n,e.child,a,s)}function Pm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var M={};for(var R in s)R!=="ref"&&(M[R]=s[R])}else M=s;return nr(n),s=Bu(e,n,a,M,f,c),R=Iu(),e!==null&&!_n?(Fu(e,n,c),Yi(e,n,c)):(Ue&&R&&xu(n),n.flags|=1,En(e,n,s,c),n.child)}function Bm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Im(e,n,f,s,c)):(e=pl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,c)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ws,a(M,s)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Gi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Im(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Ws(f,s)&&e.ref===n.ref)if(_n=!1,n.pendingProps=s=f,lf(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return tf(e,n,a,s,c)}function Fm(e,n,a){var s=n.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return zm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xl(n,f!==null?f.cachePool:null),f!==null?Ip(n,f):Nu(),Tm(n);else return n.lanes=n.childLanes=536870912,zm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(xl(n,f.cachePool),Ip(n,f),xa(),n.memoizedState=null):(e!==null&&xl(n,null),Nu(),xa());return En(e,n,c,a),n.child}function zm(e,n,a,s){var c=Ru();return c=c===null?null:{parent:dn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&xl(n,null),Nu(),Tm(n),e!==null&&Ks(e,n,s,!0),null}function Bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,s,c){return nr(n),a=Bu(e,n,a,s,void 0,c),s=Iu(),e!==null&&!_n?(Fu(e,n,c),Yi(e,n,c)):(Ue&&s&&xu(n),n.flags|=1,En(e,n,a,c),n.child)}function Hm(e,n,a,s,c,f){return nr(n),n.updateQueue=null,a=zp(n,s,a,c),Fp(e),s=Iu(),e!==null&&!_n?(Fu(e,n,f),Yi(e,n,f)):(Ue&&s&&xu(n),n.flags|=1,En(e,n,a,f),n.child)}function Gm(e,n,a,s,c){if(nr(n),n.stateNode===null){var f=Br,M=a.contextType;typeof M=="object"&&M!==null&&(f=wn(M)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},wu(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?wn(M):Br,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Qu(n,a,M,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Ju.enqueueReplaceState(f,f.state,null),io(n,s,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=rr(a,R);f.props=G;var st=f.context,xt=a.contextType;M=Br,typeof xt=="object"&&xt!==null&&(M=wn(xt));var Mt=a.getDerivedStateFromProps;xt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,xt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||st!==M)&&Rm(n,f,s,M),pa=!1;var ft=n.memoizedState;f.state=ft,io(n,s,f,c),no(),st=n.memoizedState,R||ft!==st||pa?(typeof Mt=="function"&&(Qu(n,a,Mt,s),st=n.memoizedState),(G=pa||Am(n,a,G,s,ft,st,M))?(xt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=M,s=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Du(e,n),M=n.memoizedProps,xt=rr(a,M),f.props=xt,Mt=n.pendingProps,ft=f.context,st=a.contextType,G=Br,typeof st=="object"&&st!==null&&(G=wn(st)),R=a.getDerivedStateFromProps,(st=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==Mt||ft!==G)&&Rm(n,f,s,G),pa=!1,ft=n.memoizedState,f.state=ft,io(n,s,f,c),no();var dt=n.memoizedState;M!==Mt||ft!==dt||pa||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof R=="function"&&(Qu(n,a,R,s),dt=n.memoizedState),(xt=pa||Am(n,a,xt,s,ft,dt,G)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(st||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,dt,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,dt,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=dt),f.props=s,f.state=dt,f.context=G,s=xt):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Bl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=qr(n,e.child,null,c),n.child=qr(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Yi(e,n,c),e}function Vm(e,n,a,s){return Ys(),n.flags|=256,En(e,n,a,s),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:wp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ci),e}function km(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ue){if(c?va(n):xa(),Ue){var R=tn,G;if(G=R){t:{for(G=R,R=Ci;G.nodeType!==8;){if(!R){R=null;break t}if(G=vi(G.nextSibling),G===null){R=null;break t}}R=G}R!==null?(n.memoizedState={dehydrated:R,treeContext:Qa!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},G=Zn(18,null,null,0),G.stateNode=R,G.return=n,n.child=G,zn=n,tn=null,G=!0):G=!1}G||tr(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return Gf(R)?n.lanes=32:n.lanes=536870912,null;ji(n)}return R=s.children,s=s.fallback,c?(xa(),c=n.mode,R=Il({mode:"hidden",children:R},c),s=Ka(s,c,a,null),R.return=n,s.return=n,R.sibling=s,n.child=R,c=n.child,c.memoizedState=nf(a),c.childLanes=af(e,M,a),n.memoizedState=ef,s):(va(n),rf(n,R))}if(G=e.memoizedState,G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(xa(),n.child=e.child,n.flags|=128,n=null):(xa(),c=s.fallback,R=n.mode,s=Il({mode:"visible",children:s.children},R),c=Ka(c,R,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,qr(n,e.child,null,a),s=n.child,s.memoizedState=nf(a),s.childLanes=af(e,M,a),n.memoizedState=ef,n=c);else if(va(n),Gf(R)){if(M=R.nextSibling&&R.nextSibling.dataset,M)var st=M.dgst;M=st,s=Error(r(419)),s.stack="",s.digest=M,Zs({value:s,source:null,stack:null}),n=sf(e,n,a)}else if(_n||Ks(e,n,a,!1),M=(a&e.childLanes)!==0,_n||M){if(M=We,M!==null&&(s=a&-a,s=(s&42)!==0?1:ce(s),s=(s&(M.suspendedLanes|a))!==0?0:s,s!==0&&s!==G.retryLane))throw G.retryLane=s,Pr(e,s),ti(M,e,s),Om;R.data==="$?"||Ef(),n=sf(e,n,a)}else R.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,tn=vi(R.nextSibling),zn=n,Ue=!0,$a=null,Ci=!1,e!==null&&(si[oi++]=Vi,si[oi++]=ki,si[oi++]=Qa,Vi=e.id,ki=e.overflow,Qa=n),n=rf(n,s.children),n.flags|=4096);return n}return c?(xa(),c=s.fallback,R=n.mode,G=e.child,st=G.sibling,s=Gi(G,{mode:"hidden",children:s.children}),s.subtreeFlags=G.subtreeFlags&65011712,st!==null?c=Gi(st,c):(c=Ka(c,R,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,R=e.child.memoizedState,R===null?R=nf(a):(G=R.cachePool,G!==null?(st=dn._currentValue,G=G.parent!==st?{parent:st,pool:st}:G):G=wp(),R={baseLanes:R.baseLanes|a,cachePool:G}),c.memoizedState=R,c.childLanes=af(e,M,a),n.memoizedState=ef,s):(va(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=Zn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sf(e,n,a){return qr(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Xm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),bu(e.return,n,a)}function of(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Wm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(En(e,n,s.children,a),s=hn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xm(e,a,n);else if(e.tag===19)Xm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(At(hn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Nl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}of(n,!0,a,null,f);break;case"together":of(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function ux(e,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),ha(n,dn,e.memoizedState.cache),Ys();break;case 27:case 5:Qt(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:ha(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?km(e,n,a):(va(n),e=Yi(e,n,a),e!==null?e.sibling:null);va(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ks(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Wm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),At(hn,hn.current),s)break;return null;case 22:case 23:return n.lanes=0,Fm(e,n,a);case 24:ha(n,dn,e.memoizedState.cache)}return Yi(e,n,a)}function qm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return _n=!1,ux(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Ue&&(n.flags&1048576)!==0&&Mp(n,gl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")gu(s)?(e=rr(s,e),n.tag=1,n=Gm(null,n,s,e,a)):(n.tag=0,n=tf(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===N){n.tag=11,n=Pm(null,n,s,e,a);break t}else if(c===F){n.tag=14,n=Bm(null,n,s,e,a);break t}}throw n=vt(s)||s,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=rr(s,n.pendingProps),Gm(e,n,s,c,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Du(e,n),io(n,s,null,a);var M=n.memoizedState;if(s=M.cache,ha(n,dn,s),s!==f.cache&&Eu(n,[dn],a,!0),no(),s=M.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vm(e,n,s,a);break t}else if(s!==c){c=ai(Error(r(424)),n),Zs(c),n=Vm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=vi(e.firstChild),zn=n,Ue=!0,$a=null,Ci=!0,a=Em(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ys(),s===c){n=Yi(e,n,a);break t}En(e,n,s,a)}n=n.child}return n;case 26:return Bl(e,n),e===null?(a=Kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ue||(a=n.type,e=n.pendingProps,s=Ql(rt.current).createElement(a),s[fn]=n,s[Je]=e,An(s,a,e),sn(s),n.stateNode=s):n.memoizedState=Kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Ue&&(s=n.stateNode=jg(n.type,n.pendingProps,rt.current),zn=n,Ci=!0,c=tn,Ca(n.type)?(Vf=c,tn=vi(s.firstChild)):tn=c),En(e,n,n.pendingProps.children,a),Bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ue&&((c=s=tn)&&(s=Fx(s,n.type,n.pendingProps,Ci),s!==null?(n.stateNode=s,zn=n,tn=vi(s.firstChild),Ci=!1,c=!0):c=!1),c||tr(n)),Qt(n),c=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,s=f.children,Ff(c,f)?s=null:M!==null&&Ff(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=Bu(e,n,nx,null,null,a),Ao._currentValue=c),Bl(e,n),En(e,n,s,a),n.child;case 6:return e===null&&Ue&&((e=a=tn)&&(a=zx(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,zn=n,tn=null,e=!0):e=!1),e||tr(n)),null;case 13:return km(e,n,a);case 4:return Pt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=qr(n,null,s,a):En(e,n,s,a),n.child;case 11:return Pm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ha(n,n.type,s.value),En(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,nr(n),c=wn(c),s=s(c),n.flags|=1,En(e,n,s,a),n.child;case 14:return Bm(e,n,n.type,n.pendingProps,a);case 15:return Im(e,n,n.type,n.pendingProps,a);case 19:return Wm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Il(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Gi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Fm(e,n,a);case 24:return nr(n),s=wn(dn),e===null?(c=Ru(),c===null&&(c=We,f=Tu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},wu(n),ha(n,dn,c)):((e.lanes&a)!==0&&(Du(e,n),io(n,null,null,a),no()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ha(n,dn,s)):(s=f.cache,ha(n,dn,s),s!==c.cache&&Eu(n,[dn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(e){e.flags|=4}function jm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!e_(n)){if(n=li.current,n!==null&&((Ae&4194048)===Ae?wi!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||n!==wi))throw to=Cu,Dp;e.flags|=8192}}function Fl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Dt():536870912,e.lanes|=n,Kr|=n)}function uo(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function fx(e,n,a){var s=n.pendingProps;switch(yu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Wi(dn),$t(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(js(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tp())),Qe(n),null;case 26:return a=n.memoizedState,e===null?(Zi(n),a!==null?(Qe(n),jm(n,a)):(Qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Zi(n),Qe(n),jm(n,a)):(Qe(n),n.flags&=-16777217):(e.memoizedProps!==s&&Zi(n),Qe(n),n.flags&=-16777217),null;case 27:de(n),a=rt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}e=It.current,js(n)?bp(n):(e=jg(c,s,a),n.stateNode=e,Zi(n))}return Qe(n),null;case 5:if(de(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(e=It.current,js(n))bp(n);else{switch(c=Ql(rt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[fn]=n,e[Je]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(An(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(n)}}return Qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=rt.current,js(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=zn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Hg(e.nodeValue,a)),e||tr(n)}else e=Ql(e).createTextNode(s),e[fn]=n,n.stateNode=e}return Qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=js(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[fn]=n}else Ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),c=!1}else c=Tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),Qe(n),null;case 4:return $t(),e===null&&Nf(n.stateNode.containerInfo),Qe(n),null;case 10:return Wi(n.type),Qe(n),null;case 19:if(Et(hn),c=n.memoizedState,c===null)return Qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)uo(c,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Nl(e),f!==null){for(n.flags|=128,uo(c,!1),e=f.updateQueue,n.updateQueue=e,Fl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return At(hn,hn.current&1|2),n.child}e=e.sibling}c.tail!==null&&Gt()>Gl&&(n.flags|=128,s=!0,uo(c,!1),n.lanes=4194304)}else{if(!s)if(e=Nl(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Fl(n,e),uo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ue)return Qe(n),null}else 2*Gt()-c.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,s=!0,uo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Gt(),n.sibling=null,e=hn.current,At(hn,s?e&1|2:e&1),n):(Qe(n),null);case 22:case 23:return ji(n),Ou(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Et(ir),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(dn),Qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function dx(e,n){switch(yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(dn),$t(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Et(hn),null;case 4:return $t(),null;case 10:return Wi(n.type),null;case 22:case 23:return ji(n),Ou(),e!==null&&Et(ir),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(dn),null;case 25:return null;default:return null}}function Ym(e,n){switch(yu(n),n.tag){case 3:Wi(dn),$t();break;case 26:case 27:case 5:de(n);break;case 4:$t();break;case 13:ji(n);break;case 19:Et(hn);break;case 10:Wi(n.type);break;case 22:case 23:ji(n),Ou(),e!==null&&Et(ir);break;case 24:Wi(dn)}}function fo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,M=a.inst;s=f(),M.destroy=s}a=a.next}while(a!==c)}}catch(R){Xe(n,n.return,R)}}function ya(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var M=s.inst,R=M.destroy;if(R!==void 0){M.destroy=void 0,c=n;var G=a,st=R;try{st()}catch(xt){Xe(c,G,xt)}}}s=s.next}while(s!==f)}}catch(xt){Xe(n,n.return,xt)}}function Zm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Bp(n,a)}catch(s){Xe(e,e.return,s)}}}function Km(e,n,a){a.props=rr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Xe(e,n,s)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Xe(e,n,c)}}function Di(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Xe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Xe(e,n,c)}else a.current=null}function Qm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Xe(e,e.return,c)}}function cf(e,n,a){try{var s=e.stateNode;Nx(s,e.type,a,n),s[Je]=n}catch(c){Xe(e,e.return,c)}}function Jm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Kl));else if(s!==4&&(s===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function zl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}function $m(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,s,a),n[fn]=e,n[Je]=a}catch(f){Xe(e,e.return,f)}}var Ki=!1,an=!1,df=!1,tg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function hx(e,n){if(e=e.containerInfo,Bf=ic,e=fp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,R=-1,G=-1,st=0,xt=0,Mt=e,ft=null;e:for(;;){for(var dt;Mt!==a||c!==0&&Mt.nodeType!==3||(R=M+c),Mt!==f||s!==0&&Mt.nodeType!==3||(G=M+s),Mt.nodeType===3&&(M+=Mt.nodeValue.length),(dt=Mt.firstChild)!==null;)ft=Mt,Mt=dt;for(;;){if(Mt===e)break e;if(ft===a&&++st===c&&(R=M),ft===f&&++xt===s&&(G=M),(dt=Mt.nextSibling)!==null)break;Mt=ft,ft=Mt.parentNode}Mt=dt}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},ic=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var le=rr(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(le,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(re){Xe(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function eg(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),s&4&&fo(5,a);break;case 1:if(Sa(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Xe(a,a.return,M)}else{var c=rr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Xe(a,a.return,M)}}s&64&&Zm(a),s&512&&ho(a,a.return);break;case 3:if(Sa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bp(e,n)}catch(M){Xe(a,a.return,M)}}break;case 27:n===null&&s&4&&$m(a);case 26:case 5:Sa(e,a),n===null&&s&4&&Qm(a),s&512&&ho(a,a.return);break;case 12:Sa(e,a);break;case 13:Sa(e,a),s&4&&ag(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Mx.bind(null,a),Hx(e,a))));break;case 22:if(s=a.memoizedState!==null||Ki,!s){n=n!==null&&n.memoizedState!==null||an,c=Ki;var f=an;Ki=s,(an=n)&&!f?Ma(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),Ki=c,an=f}break;case 30:break;default:Sa(e,a)}}function ng(e){var n=e.alternate;n!==null&&(e.alternate=null,ng(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Rr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Wn=!1;function Qi(e,n,a){for(a=a.child;a!==null;)ig(e,n,a),a=a.sibling}function ig(e,n,a){if(Z&&typeof Z.onCommitFiberUnmount=="function")try{Z.onCommitFiberUnmount(W,a)}catch{}switch(a.tag){case 26:an||Di(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||Di(a,n);var s=Ze,c=Wn;Ca(a.type)&&(Ze=a.stateNode,Wn=!1),Qi(e,n,a),Mo(a.stateNode),Ze=s,Wn=c;break;case 5:an||Di(a,n);case 6:if(s=Ze,c=Wn,Ze=null,Qi(e,n,a),Ze=s,Wn=c,Ze!==null)if(Wn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Xe(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Xe(a,n,f)}break;case 18:Ze!==null&&(Wn?(e=Ze,Wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Do(e)):Wg(Ze,a.stateNode));break;case 4:s=Ze,c=Wn,Ze=a.stateNode.containerInfo,Wn=!0,Qi(e,n,a),Ze=s,Wn=c;break;case 0:case 11:case 14:case 15:an||ya(2,a,n),an||ya(4,a,n),Qi(e,n,a);break;case 1:an||(Di(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Km(a,n,s)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:an=(s=an)||a.memoizedState!==null,Qi(e,n,a),an=s;break;default:Qi(e,n,a)}}function ag(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Do(e)}catch(a){Xe(n,n.return,a)}}function px(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new tg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new tg),n;default:throw Error(r(435,e.tag))}}function hf(e,n){var a=px(e);n.forEach(function(s){var c=bx.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Kn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,M=n,R=M;t:for(;R!==null;){switch(R.tag){case 27:if(Ca(R.type)){Ze=R.stateNode,Wn=!1;break t}break;case 5:Ze=R.stateNode,Wn=!1;break t;case 3:case 4:Ze=R.stateNode.containerInfo,Wn=!0;break t}R=R.return}if(Ze===null)throw Error(r(160));ig(f,M,c),Ze=null,Wn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)rg(n,e),n=n.sibling}var _i=null;function rg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(n,e),Qn(e),s&4&&(ya(3,e,e.return),fo(3,e),ya(5,e,e.return));break;case 1:Kn(n,e),Qn(e),s&512&&(an||a===null||Di(a,a.return)),s&64&&Ki&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(Kn(n,e),Qn(e),s&512&&(an||a===null||Di(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ri]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,s,a),f[fn]=e,sn(f),s=f;break t;case"link":var M=$g("link","href",c).get(s+(a.href||""));if(M){for(var R=0;R<M.length;R++)if(f=M[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(R,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;case"meta":if(M=$g("meta","content",c).get(s+(a.content||""))){for(R=0;R<M.length;R++)if(f=M[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(R,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[fn]=e,sn(f),s=f}e.stateNode=s}else t_(c,e.type,e.stateNode);else e.stateNode=Jg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?t_(c,e.type,e.stateNode):Jg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,e),Qn(e),s&512&&(an||a===null||Di(a,a.return)),a!==null&&s&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,e),Qn(e),s&512&&(an||a===null||Di(a,a.return)),e.flags&32){c=e.stateNode;try{Vn(c,"")}catch(dt){Xe(e,e.return,dt)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,cf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(df=!0);break;case 6:if(Kn(n,e),Qn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(dt){Xe(e,e.return,dt)}}break;case 3:if(tc=null,c=_i,_i=Jl(n.containerInfo),Kn(n,e),_i=c,Qn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Do(n.containerInfo)}catch(dt){Xe(e,e.return,dt)}df&&(df=!1,sg(e));break;case 4:s=_i,_i=Jl(e.stateNode.containerInfo),Kn(n,e),Qn(e),_i=s;break;case 12:Kn(n,e),Qn(e);break;case 13:Kn(n,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=Gt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 22:c=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,st=Ki,xt=an;if(Ki=st||c,an=xt||G,Kn(n,e),an=xt,Ki=st,Qn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||G||Ki||an||sr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,c)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{R=G.stateNode;var Mt=G.memoizedProps.style,ft=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;R.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch(dt){Xe(G,G.return,dt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=c?"":G.memoizedProps}catch(dt){Xe(G,G.return,dt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,hf(e,a))));break;case 19:Kn(n,e),Qn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 30:break;case 21:break;default:Kn(n,e),Qn(e)}}function Qn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Jm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(e);zl(e,f,c);break;case 5:var M=a.stateNode;a.flags&32&&(Vn(M,""),a.flags&=-33);var R=uf(e);zl(e,R,M);break;case 3:case 4:var G=a.stateNode.containerInfo,st=uf(e);ff(e,st,G);break;default:throw Error(r(161))}}catch(xt){Xe(e,e.return,xt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eg(e,n.alternate,n),n=n.sibling}function sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),sr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Km(n,n.return,a),sr(n);break;case 27:Mo(n.stateNode);case 26:case 5:Di(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}e=e.sibling}}function Ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Ma(c,f,a),fo(4,f);break;case 1:if(Ma(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(st){Xe(s,s.return,st)}if(s=f,c=s.updateQueue,c!==null){var R=s.stateNode;try{var G=c.shared.hiddenCallbacks;if(G!==null)for(c.shared.hiddenCallbacks=null,c=0;c<G.length;c++)Pp(G[c],R)}catch(st){Xe(s,s.return,st)}}a&&M&64&&Zm(f),ho(f,f.return);break;case 27:$m(f);case 26:case 5:Ma(c,f,a),a&&s===null&&M&4&&Qm(f),ho(f,f.return);break;case 12:Ma(c,f,a);break;case 13:Ma(c,f,a),a&&M&4&&ag(c,f);break;case 22:f.memoizedState===null&&Ma(c,f,a),ho(f,f.return);break;case 30:break;default:Ma(c,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qs(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qs(e))}function Ui(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)og(e,n,a,s),n=n.sibling}function og(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,s),c&2048&&fo(9,n);break;case 1:Ui(e,n,a,s);break;case 3:Ui(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qs(e)));break;case 12:if(c&2048){Ui(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,R=f.onPostCommit;typeof R=="function"&&R(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Xe(n,n.return,G)}}else Ui(e,n,a,s);break;case 13:Ui(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?Ui(e,n,a,s):po(e,n):f._visibility&2?Ui(e,n,a,s):(f._visibility|=2,jr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&pf(M,n);break;case 24:Ui(e,n,a,s),c&2048&&mf(n.alternate,n);break;default:Ui(e,n,a,s)}}function jr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,R=a,G=s,st=M.flags;switch(M.tag){case 0:case 11:case 15:jr(f,M,R,G,c),fo(8,M);break;case 23:break;case 22:var xt=M.stateNode;M.memoizedState!==null?xt._visibility&2?jr(f,M,R,G,c):po(f,M):(xt._visibility|=2,jr(f,M,R,G,c)),c&&st&2048&&pf(M.alternate,M);break;case 24:jr(f,M,R,G,c),c&&st&2048&&mf(M.alternate,M);break;default:jr(f,M,R,G,c)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:po(a,s),c&2048&&pf(s.alternate,s);break;case 24:po(a,s),c&2048&&mf(s.alternate,s);break;default:po(a,s)}n=n.sibling}}var mo=8192;function Yr(e){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 26:Yr(e),e.flags&mo&&e.memoizedState!==null&&$x(_i,e.memoizedState,e.memoizedProps);break;case 5:Yr(e);break;case 3:case 4:var n=_i;_i=Jl(e.stateNode.containerInfo),Yr(e),_i=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=mo,mo=16777216,Yr(e),mo=n):Yr(e));break;default:Yr(e)}}function cg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,fg(s,e)}cg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ug(e),e=e.sibling}function ug(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&ya(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Hl(e)):go(e);break;default:go(e)}}function Hl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,fg(s,e)}cg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}e=e.sibling}}function fg(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,vn=s;else t:for(a=e;vn!==null;){s=vn;var c=s.sibling,f=s.return;if(ng(s),s===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var mx={getCacheForType:function(e){var n=wn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},gx=typeof WeakMap=="function"?WeakMap:Map,Pe=0,We=null,Me=null,Ae=0,Be=0,Jn=null,ba=!1,Zr=!1,gf=!1,Ji=0,en=0,Ea=0,or=0,_f=0,ci=0,Kr=0,_o=null,qn=null,vf=!1,xf=0,Gl=1/0,Vl=null,Ta=null,Tn=0,Aa=null,Qr=null,Jr=0,yf=0,Sf=null,dg=null,vo=0,Mf=null;function $n(){if((Pe&2)!==0&&Ae!==0)return Ae&-Ae;if(H.T!==null){var e=zr;return e!==0?e:wf()}return Re()}function hg(){ci===0&&(ci=(Ae&536870912)===0||Ue?Y():536870912);var e=li.current;return e!==null&&(e.flags|=32),ci}function ti(e,n,a){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ra(e,Ae,ci,!1)),kt(e,a),((Pe&2)===0||e!==We)&&(e===We&&((Pe&2)===0&&(or|=a),en===4&&Ra(e,Ae,ci,!1)),Li(e))}function pg(e,n,a){if((Pe&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Lt(e,n),c=s?xx(e,n):Tf(e,n,!0),f=s;do{if(c===0){Zr&&!s&&Ra(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!_x(a)){c=Tf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var R=e;c=_o;var G=R.current.memoizedState.isDehydrated;if(G&&($r(R,M).flags|=256),M=Tf(R,M,!1),M!==2){if(gf&&!G){R.errorRecoveryDisabledLanes|=f,or|=f,c=4;break t}f=qn,qn=c,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}c=M}if(f=!1,c!==2)continue}}if(c===1){$r(e,0),Ra(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ra(s,n,ci,!ba);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=xf+300-Gt(),10<c)){if(Ra(s,n,ci,!ba),Vt(s,0,!0)!==0)break t;s.timeoutHandle=kg(mg.bind(null,s,a,qn,Vl,vf,n,ci,or,Kr,ba,f,2,-0,0),c);break t}mg(s,a,qn,Vl,vf,n,ci,or,Kr,ba,f,0,-0,0)}}break}while(!0);Li(e)}function mg(e,n,a,s,c,f,M,R,G,st,xt,Mt,ft,dt){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(To={stylesheets:null,count:0,unsuspend:Jx},lg(n),Mt=ty(),Mt!==null)){e.cancelPendingCommit=Mt(Mg.bind(null,e,n,f,a,s,c,M,R,G,xt,1,ft,dt)),Ra(e,f,M,!st);return}Mg(e,n,f,a,s,c,M,R,G)}function _x(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,a,s){n&=~_f,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-gt(c),M=1<<f;s[f]=-1,c&=~M}a!==0&&bt(e,a,n)}function kl(){return(Pe&6)===0?(xo(0),!1):!0}function bf(){if(Me!==null){if(Be===0)var e=Me.return;else e=Me,Xi=er=null,zu(e),Wr=null,lo=0,e=Me;for(;e!==null;)Ym(e.alternate,e),e=e.return;Me=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Px(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),bf(),We=e,Me=a=Gi(e.current,null),Ae=n,Be=0,Jn=null,ba=!1,Zr=Lt(e,n),gf=!1,Kr=ci=_f=or=Ea=en=0,qn=_o=null,vf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-gt(s),f=1<<c;n|=e[c],s&=~f}return Ji=n,fl(),a}function gg(e,n){xe=null,H.H=Dl,n===$s||n===yl?(n=Np(),Be=3):n===Dp?(n=Np(),Be=4):Be=n===Om?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,Me===null&&(en=1,Pl(e,ai(n,e.current)))}function _g(){var e=H.H;return H.H=Dl,e===null?Dl:e}function vg(){var e=H.A;return H.A=mx,e}function Ef(){en=4,ba||(Ae&4194048)!==Ae&&li.current!==null||(Zr=!0),(Ea&134217727)===0&&(or&134217727)===0||We===null||Ra(We,Ae,ci,!1)}function Tf(e,n,a){var s=Pe;Pe|=2;var c=_g(),f=vg();(We!==e||Ae!==n)&&(Vl=null,$r(e,n)),n=!1;var M=en;t:do try{if(Be!==0&&Me!==null){var R=Me,G=Jn;switch(Be){case 8:bf(),M=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var st=Be;if(Be=0,Jn=null,ts(e,R,G,st),a&&Zr){M=0;break t}break;default:st=Be,Be=0,Jn=null,ts(e,R,G,st)}}vx(),M=en;break}catch(xt){gg(e,xt)}while(!0);return n&&e.shellSuspendCounter++,Xi=er=null,Pe=s,H.H=c,H.A=f,Me===null&&(We=null,Ae=0,fl()),M}function vx(){for(;Me!==null;)xg(Me)}function xx(e,n){var a=Pe;Pe|=2;var s=_g(),c=vg();We!==e||Ae!==n?(Vl=null,Gl=Gt()+500,$r(e,n)):Zr=Lt(e,n);t:do try{if(Be!==0&&Me!==null){n=Me;var f=Jn;e:switch(Be){case 1:Be=0,Jn=null,ts(e,n,f,1);break;case 2:case 9:if(Up(f)){Be=0,Jn=null,yg(n);break}n=function(){Be!==2&&Be!==9||We!==e||(Be=7),Li(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Up(f)?(Be=0,Jn=null,yg(n)):(Be=0,Jn=null,ts(e,n,f,7));break;case 5:var M=null;switch(Me.tag){case 26:M=Me.memoizedState;case 5:case 27:var R=Me;if(!M||e_(M)){Be=0,Jn=null;var G=R.sibling;if(G!==null)Me=G;else{var st=R.return;st!==null?(Me=st,Xl(st)):Me=null}break e}}Be=0,Jn=null,ts(e,n,f,5);break;case 6:Be=0,Jn=null,ts(e,n,f,6);break;case 8:bf(),en=6;break t;default:throw Error(r(462))}}yx();break}catch(xt){gg(e,xt)}while(!0);return Xi=er=null,H.H=s,H.A=c,Pe=a,Me!==null?0:(We=null,Ae=0,fl(),en)}function yx(){for(;Me!==null&&!ue();)xg(Me)}function xg(e){var n=qm(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,n===null?Xl(e):Me=n}function yg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hm(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=Hm(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:zu(n);default:Ym(a,n),n=Me=Sp(n,Ji),n=qm(a,n,Ji)}e.memoizedProps=e.pendingProps,n===null?Xl(e):Me=n}function ts(e,n,a,s){Xi=er=null,zu(n),Wr=null,lo=0;var c=n.return;try{if(cx(e,c,n,a,Ae)){en=1,Pl(e,ai(a,e.current)),Me=null;return}}catch(f){if(c!==null)throw Me=c,f;en=1,Pl(e,ai(a,e.current)),Me=null;return}n.flags&32768?(Ue||s===1?e=!0:Zr||(Ae&536870912)!==0?e=!1:(ba=e=!0,(s===2||s===9||s===3||s===6)&&(s=li.current,s!==null&&s.tag===13&&(s.flags|=16384))),Sg(n,e)):Xl(n)}function Xl(e){var n=e;do{if((n.flags&32768)!==0){Sg(n,ba);return}e=n.return;var a=fx(n.alternate,n,Ji);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);en===0&&(en=5)}function Sg(e,n){do{var a=dx(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);en=6,Me=null}function Mg(e,n,a,s,c,f,M,R,G){e.cancelPendingCommit=null;do Wl();while(Tn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pu,Nt(e,a,f,M,R,G),e===We&&(Me=We=null,Ae=0),Qr=n,Aa=e,Jr=a,yf=f,Sf=c,dg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ex(P,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=H.T,H.T=null,c=nt.p,nt.p=2,M=Pe,Pe|=4;try{hx(e,n,a)}finally{Pe=M,nt.p=c,H.T=s}}Tn=1,bg(),Eg(),Tg()}}function bg(){if(Tn===1){Tn=0;var e=Aa,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var s=nt.p;nt.p=2;var c=Pe;Pe|=4;try{rg(n,e);var f=If,M=fp(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(M!==R&&R&&R.ownerDocument&&up(R.ownerDocument.documentElement,R)){if(G!==null&&cu(R)){var st=G.start,xt=G.end;if(xt===void 0&&(xt=st),"selectionStart"in R)R.selectionStart=st,R.selectionEnd=Math.min(xt,R.value.length);else{var Mt=R.ownerDocument||document,ft=Mt&&Mt.defaultView||window;if(ft.getSelection){var dt=ft.getSelection(),le=R.textContent.length,re=Math.min(G.start,le),He=G.end===void 0?re:Math.min(G.end,le);!dt.extend&&re>He&&(M=He,He=re,re=M);var J=cp(R,re),j=cp(R,He);if(J&&j&&(dt.rangeCount!==1||dt.anchorNode!==J.node||dt.anchorOffset!==J.offset||dt.focusNode!==j.node||dt.focusOffset!==j.offset)){var et=Mt.createRange();et.setStart(J.node,J.offset),dt.removeAllRanges(),re>He?(dt.addRange(et),dt.extend(j.node,j.offset)):(et.setEnd(j.node,j.offset),dt.addRange(et))}}}}for(Mt=[],dt=R;dt=dt.parentNode;)dt.nodeType===1&&Mt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Mt.length;R++){var yt=Mt[R];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}ic=!!Bf,If=Bf=null}finally{Pe=c,nt.p=s,H.T=a}}e.current=n,Tn=2}}function Eg(){if(Tn===2){Tn=0;var e=Aa,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var s=nt.p;nt.p=2;var c=Pe;Pe|=4;try{eg(e,n.alternate,n)}finally{Pe=c,nt.p=s,H.T=a}}Tn=3}}function Tg(){if(Tn===4||Tn===3){Tn=0,ie();var e=Aa,n=Qr,a=Jr,s=dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Qr=Aa=null,Ag(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ta=null),Oe(a),n=n.stateNode,Z&&typeof Z.onCommitFiberRoot=="function")try{Z.onCommitFiberRoot(W,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=H.T,c=nt.p,nt.p=2,H.T=null;try{for(var f=e.onRecoverableError,M=0;M<s.length;M++){var R=s[M];f(R.value,{componentStack:R.stack})}}finally{H.T=n,nt.p=c}}(Jr&3)!==0&&Wl(),Li(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Mf?vo++:(vo=0,Mf=e):vo=0,xo(0)}}function Ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qs(n)))}function Wl(e){return bg(),Eg(),Tg(),Rg()}function Rg(){if(Tn!==5)return!1;var e=Aa,n=yf;yf=0;var a=Oe(Jr),s=H.T,c=nt.p;try{nt.p=32>a?32:a,H.T=null,a=Sf,Sf=null;var f=Aa,M=Jr;if(Tn=0,Qr=Aa=null,Jr=0,(Pe&6)!==0)throw Error(r(331));var R=Pe;if(Pe|=4,ug(f.current),og(f,f.current,M,a),Pe=R,xo(0,!1),Z&&typeof Z.onPostCommitFiberRoot=="function")try{Z.onPostCommitFiberRoot(W,f)}catch{}return!0}finally{nt.p=c,H.T=s,Ag(e,n)}}function Cg(e,n,a){n=ai(a,n),n=$u(e.stateNode,n,2),e=ga(e,n,2),e!==null&&(kt(e,2),Li(e))}function Xe(e,n,a){if(e.tag===3)Cg(e,e,a);else for(;n!==null;){if(n.tag===3){Cg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){e=ai(a,e),a=Lm(2),s=ga(n,a,2),s!==null&&(Nm(a,s,n,e),kt(s,2),Li(s));break}}n=n.return}}function Af(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new gx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(gf=!0,c.add(a),e=Sx.bind(null,e,n,a),n.then(e,e))}function Sx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Ae&a)===a&&(en===4||en===3&&(Ae&62914560)===Ae&&300>Gt()-xf?(Pe&2)===0&&$r(e,0):_f|=a,Kr===Ae&&(Kr=0)),Li(e)}function wg(e,n){n===0&&(n=Dt()),e=Pr(e,n),e!==null&&(kt(e,n),Li(e))}function Mx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wg(e,a)}function bx(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),wg(e,a)}function Ex(e,n){return k(e,n)}var ql=null,es=null,Rf=!1,jl=!1,Cf=!1,lr=0;function Li(e){e!==es&&e.next===null&&(es===null?ql=es=e:es=es.next=e),jl=!0,Rf||(Rf=!0,Ax())}function xo(e,n){if(!Cf&&jl){Cf=!0;do for(var a=!1,s=ql;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var M=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-gt(42|e)+1)-1,f&=c&~(M&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ng(s,f))}else f=Ae,f=Vt(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Lt(s,f)||(a=!0,Ng(s,f));s=s.next}while(a);Cf=!1}}function Tx(){Dg()}function Dg(){jl=Rf=!1;var e=0;lr!==0&&(Ox()&&(e=lr),lr=0);for(var n=Gt(),a=null,s=ql;s!==null;){var c=s.next,f=Ug(s,n);f===0?(s.next=null,a===null?ql=c:a.next=c,c===null&&(es=a)):(a=s,(e!==0||(f&3)!==0)&&(jl=!0)),s=c}xo(e)}function Ug(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-gt(f),R=1<<M,G=c[M];G===-1?((R&a)===0||(R&s)!==0)&&(c[M]=ae(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=We,a=Ae,a=Vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Le(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Lt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Le(s),Oe(a)){case 2:case 8:a=fe;break;case 32:a=P;break;case 268435456:a=T;break;default:a=P}return s=Lg.bind(null,e),a=k(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Le(s),e.callbackPriority=2,e.callbackNode=null,2}function Lg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wl()&&e.callbackNode!==a)return null;var s=Ae;return s=Vt(e,e===We?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(pg(e,s,n),Ug(e,Gt()),e.callbackNode!=null&&e.callbackNode===a?Lg.bind(null,e):null)}function Ng(e,n){if(Wl())return null;pg(e,n,!0)}function Ax(){Bx(function(){(Pe&6)!==0?k(jt,Tx):Dg()})}function wf(){return lr===0&&(lr=Y()),lr}function Og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function Pg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Rx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Og((c[Je]||null).action),M=s.submitter;M&&(n=(n=M[Je]||null)?Og(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var R=new ll("action","action",null,s,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var G=M?Pg(c,M):new FormData(c);Yu(a,{pending:!0,data:G,method:c.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=M?Pg(c,M):new FormData(c),Yu(a,{pending:!0,data:G,method:c.method,action:f},f,G))},currentTarget:c}]})}}for(var Df=0;Df<hu.length;Df++){var Uf=hu[Df],Cx=Uf.toLowerCase(),wx=Uf[0].toUpperCase()+Uf.slice(1);gi(Cx,"on"+wx)}gi(pp,"onAnimationEnd"),gi(mp,"onAnimationIteration"),gi(gp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(qv,"onTransitionRun"),gi(jv,"onTransitionStart"),gi(Yv,"onTransitionCancel"),gi(_p,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function Bg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var M=s.length-1;0<=M;M--){var R=s[M],G=R.instance,st=R.currentTarget;if(R=R.listener,G!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=st;try{f(c)}catch(xt){Ol(xt)}c.currentTarget=null,f=G}else for(M=0;M<s.length;M++){if(R=s[M],G=R.instance,st=R.currentTarget,R=R.listener,G!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=st;try{f(c)}catch(xt){Ol(xt)}c.currentTarget=null,f=G}}}}function be(e,n){var a=n[Tr];a===void 0&&(a=n[Tr]=new Set);var s=e+"__bubble";a.has(s)||(Ig(n,e,2,!1),a.add(s))}function Lf(e,n,a){var s=0;n&&(s|=4),Ig(a,e,s,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Yl]){e[Yl]=!0,nl.forEach(function(a){a!=="selectionchange"&&(Dx.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Lf("selectionchange",!1,n))}}function Ig(e,n,a,s){switch(o_(n)){case 2:var c=iy;break;case 8:c=ay;break;default:c=jf}a=c.bind(null,n,a,e),c=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Of(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var M=s.tag;if(M===3||M===4){var R=s.stateNode.containerInfo;if(R===c)break;if(M===4)for(M=s.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;R!==null;){if(M=zi(R),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){s=f=M;continue t}R=R.parentNode}}s=s.return}Xh(function(){var st=f,xt=Jc(a),Mt=[];t:{var ft=vp.get(e);if(ft!==void 0){var dt=ll,le=e;switch(e){case"keypress":if(sl(a)===0)break t;case"keydown":case"keyup":dt=Ev;break;case"focusin":le="focus",dt=au;break;case"focusout":le="blur",dt=au;break;case"beforeblur":case"afterblur":dt=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Rv;break;case pp:case mp:case gp:dt=mv;break;case _p:dt=wv;break;case"scroll":case"scrollend":dt=uv;break;case"wheel":dt=Uv;break;case"copy":case"cut":case"paste":dt=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Zh;break;case"toggle":case"beforetoggle":dt=Nv}var re=(n&4)!==0,He=!re&&(e==="scroll"||e==="scrollend"),J=re?ft!==null?ft+"Capture":null:ft;re=[];for(var j=st,et;j!==null;){var yt=j;if(et=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||et===null||J===null||(yt=Fs(j,J),yt!=null&&re.push(So(j,yt,et))),He)break;j=j.return}0<re.length&&(ft=new dt(ft,le,null,a,xt),Mt.push({event:ft,listeners:re}))}}if((n&7)===0){t:{if(ft=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ft&&a!==Qc&&(le=a.relatedTarget||a.fromElement)&&(zi(le)||le[Ai]))break t;if((dt||ft)&&(ft=xt.window===xt?xt:(ft=xt.ownerDocument)?ft.defaultView||ft.parentWindow:window,dt?(le=a.relatedTarget||a.toElement,dt=st,le=le?zi(le):null,le!==null&&(He=u(le),re=le.tag,le!==He||re!==5&&re!==27&&re!==6)&&(le=null)):(dt=null,le=st),dt!==le)){if(re=jh,yt="onMouseLeave",J="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(re=Zh,yt="onPointerLeave",J="onPointerEnter",j="pointer"),He=dt==null?ft:qa(dt),et=le==null?ft:qa(le),ft=new re(yt,j+"leave",dt,a,xt),ft.target=He,ft.relatedTarget=et,yt=null,zi(xt)===st&&(re=new re(J,j+"enter",le,a,xt),re.target=et,re.relatedTarget=He,yt=re),He=yt,dt&&le)e:{for(re=dt,J=le,j=0,et=re;et;et=ns(et))j++;for(et=0,yt=J;yt;yt=ns(yt))et++;for(;0<j-et;)re=ns(re),j--;for(;0<et-j;)J=ns(J),et--;for(;j--;){if(re===J||J!==null&&re===J.alternate)break e;re=ns(re),J=ns(J)}re=null}else re=null;dt!==null&&Fg(Mt,ft,dt,re,!1),le!==null&&He!==null&&Fg(Mt,He,le,re,!0)}}t:{if(ft=st?qa(st):window,dt=ft.nodeName&&ft.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ft.type==="file")var Yt=ip;else if(ep(ft))if(ap)Yt=kv;else{Yt=Gv;var ye=Hv}else dt=ft.nodeName,!dt||dt.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?st&&Kc(st.elementType)&&(Yt=ip):Yt=Vv;if(Yt&&(Yt=Yt(e,st))){np(Mt,Yt,a,xt);break t}ye&&ye(e,ft,st),e==="focusout"&&st&&ft.type==="number"&&st.memoizedProps.value!=null&&Cn(ft,"number",ft.value)}switch(ye=st?qa(st):window,e){case"focusin":(ep(ye)||ye.contentEditable==="true")&&(Lr=ye,uu=st,qs=null);break;case"focusout":qs=uu=Lr=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,dp(Mt,a,xt);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":dp(Mt,a,xt)}var te;if(su)t:{switch(e){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else Ur?$h(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Kh&&a.locale!=="ko"&&(Ur||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Ur&&(te=Wh()):(da=xt,eu="value"in da?da.value:da.textContent,Ur=!0)),ye=Zl(st,oe),0<ye.length&&(oe=new Yh(oe,e,null,a,xt),Mt.push({event:oe,listeners:ye}),te?oe.data=te:(te=tp(a),te!==null&&(oe.data=te)))),(te=Pv?Bv(e,a):Iv(e,a))&&(oe=Zl(st,"onBeforeInput"),0<oe.length&&(ye=new Yh("onBeforeInput","beforeinput",null,a,xt),Mt.push({event:ye,listeners:oe}),ye.data=te)),Rx(Mt,e,st,a,xt)}Bg(Mt,n)})}function So(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Zl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Fs(e,a),c!=null&&s.unshift(So(e,c,f)),c=Fs(e,n),c!=null&&s.push(So(e,c,f))),e.tag===3)return s;e=e.return}return[]}function ns(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fg(e,n,a,s,c){for(var f=n._reactName,M=[];a!==null&&a!==s;){var R=a,G=R.alternate,st=R.stateNode;if(R=R.tag,G!==null&&G===s)break;R!==5&&R!==26&&R!==27||st===null||(G=st,c?(st=Fs(a,f),st!=null&&M.unshift(So(a,st,G))):c||(st=Fs(a,f),st!=null&&M.push(So(a,st,G)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Ux=/\r\n?/g,Lx=/\u0000|\uFFFD/g;function zg(e){return(typeof e=="string"?e:""+e).replace(Ux,`
`).replace(Lx,"")}function Hg(e,n){return n=zg(n),zg(e)===n}function Kl(){}function ze(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Vn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Vn(e,""+s);break;case"className":qt(e,"class",s);break;case"tabIndex":qt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(e,a,s);break;case"style":Vh(e,s,f);break;case"data":if(n!=="object"){qt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=al(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",c.name,c,null),ze(e,n,"formEncType",c.formEncType,c,null),ze(e,n,"formMethod",c.formMethod,c,null),ze(e,n,"formTarget",c.formTarget,c,null)):(ze(e,n,"encType",c.encType,c,null),ze(e,n,"method",c.method,c,null),ze(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=al(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Kl);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=al(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":be("beforetoggle",e),be("toggle",e),Ft(e,"popover",s);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ft(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=lv.get(a)||a,Ft(e,a,s))}}function Pf(e,n,a,s,c,f){switch(a){case"style":Vh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Vn(e,s):(typeof s=="number"||typeof s=="bigint")&&Vn(e,""+s);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!il.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Je]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Ft(e,a,s)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,f,M,a,null)}}c&&ze(e,n,"srcSet",a.srcSet,a,null),s&&ze(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var R=f=M=c=null,G=null,st=null;for(s in a)if(a.hasOwnProperty(s)){var xt=a[s];if(xt!=null)switch(s){case"name":c=xt;break;case"type":M=xt;break;case"checked":G=xt;break;case"defaultChecked":st=xt;break;case"value":f=xt;break;case"defaultValue":R=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:ze(e,n,s,xt,a,null)}}Fn(e,f,R,G,st,M,c,!1),Se(e);return;case"select":be("invalid",e),s=M=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":M=R;break;case"multiple":s=R;default:ze(e,n,c,R,a,null)}n=f,a=M,e.multiple=!!s,n!=null?$e(e,!!s,n,!1):a!=null&&$e(e,!!s,a,!0);return;case"textarea":be("invalid",e),f=c=s=null;for(M in a)if(a.hasOwnProperty(M)&&(R=a[M],R!=null))switch(M){case"value":s=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:ze(e,n,M,R,a,null)}Cr(e,s,c,f),Se(e);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(s=a[G],s!=null))switch(G){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ze(e,n,G,s,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(s=0;s<yo.length;s++)be(yo[s],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(s=a[st],s!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,st,s,a,null)}return;default:if(Kc(n)){for(xt in a)a.hasOwnProperty(xt)&&(s=a[xt],s!==void 0&&Pf(e,n,xt,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&ze(e,n,R,s,a,null))}function Nx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,M=null,R=null,G=null,st=null,xt=null;for(dt in a){var Mt=a[dt];if(a.hasOwnProperty(dt)&&Mt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":G=Mt;default:s.hasOwnProperty(dt)||ze(e,n,dt,null,s,Mt)}}for(var ft in s){var dt=s[ft];if(Mt=a[ft],s.hasOwnProperty(ft)&&(dt!=null||Mt!=null))switch(ft){case"type":f=dt;break;case"name":c=dt;break;case"checked":st=dt;break;case"defaultChecked":xt=dt;break;case"value":M=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:dt!==Mt&&ze(e,n,ft,dt,s,Mt)}}ke(e,M,R,G,st,xt,f,c);return;case"select":dt=M=R=ft=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":dt=G;default:s.hasOwnProperty(f)||ze(e,n,f,null,s,G)}for(c in s)if(f=s[c],G=a[c],s.hasOwnProperty(c)&&(f!=null||G!=null))switch(c){case"value":ft=f;break;case"defaultValue":R=f;break;case"multiple":M=f;default:f!==G&&ze(e,n,c,f,s,G)}n=R,a=M,s=dt,ft!=null?$e(e,!!a,ft,!1):!!s!=!!a&&(n!=null?$e(e,!!a,n,!0):$e(e,!!a,a?[]:"",!1));return;case"textarea":dt=ft=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:ze(e,n,R,null,s,c)}for(M in s)if(c=s[M],f=a[M],s.hasOwnProperty(M)&&(c!=null||f!=null))switch(M){case"value":ft=c;break;case"defaultValue":dt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&ze(e,n,M,c,s,f)}bn(e,ft,dt);return;case"option":for(var le in a)if(ft=a[le],a.hasOwnProperty(le)&&ft!=null&&!s.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:ze(e,n,le,null,s,ft)}for(G in s)if(ft=s[G],dt=a[G],s.hasOwnProperty(G)&&ft!==dt&&(ft!=null||dt!=null))switch(G){case"selected":e.selected=ft&&typeof ft!="function"&&typeof ft!="symbol";break;default:ze(e,n,G,ft,s,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)ft=a[re],a.hasOwnProperty(re)&&ft!=null&&!s.hasOwnProperty(re)&&ze(e,n,re,null,s,ft);for(st in s)if(ft=s[st],dt=a[st],s.hasOwnProperty(st)&&ft!==dt&&(ft!=null||dt!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:ze(e,n,st,ft,s,dt)}return;default:if(Kc(n)){for(var He in a)ft=a[He],a.hasOwnProperty(He)&&ft!==void 0&&!s.hasOwnProperty(He)&&Pf(e,n,He,void 0,s,ft);for(xt in s)ft=s[xt],dt=a[xt],!s.hasOwnProperty(xt)||ft===dt||ft===void 0&&dt===void 0||Pf(e,n,xt,ft,s,dt);return}}for(var J in a)ft=a[J],a.hasOwnProperty(J)&&ft!=null&&!s.hasOwnProperty(J)&&ze(e,n,J,null,s,ft);for(Mt in s)ft=s[Mt],dt=a[Mt],!s.hasOwnProperty(Mt)||ft===dt||ft==null&&dt==null||ze(e,n,Mt,ft,s,dt)}var Bf=null,If=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function Gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ff(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Ox(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var kg=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(e){return Xg.resolve(null).then(e).catch(Ix)}:kg;function Ix(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function Wg(e,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var M=e.ownerDocument;if(a&1&&Mo(M.documentElement),a&2&&Mo(M.body),a&4)for(a=M.head,Mo(a),M=a.firstChild;M;){var R=M.nextSibling,G=M.nodeName;M[Ri]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=R}}if(c===0){e.removeChild(f),Do(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);Do(n)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),Rr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Fx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ri])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function zx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Hx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Vf=null;function qg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function jg(e,n,a){switch(n=Ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Rr(e)}var ui=new Map,Yg=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=nt.d;nt.d={f:Gx,r:Vx,D:kx,C:Xx,L:Wx,m:qx,X:Yx,S:jx,M:Zx};function Gx(){var e=$i.f(),n=kl();return e||n}function Vx(e){var n=ua(e);n!==null&&n.tag===5&&n.type==="form"?pm(n):$i.r(e)}var is=typeof document>"u"?null:document;function Zg(e,n,a){var s=is;if(s&&typeof n=="string"&&n){var c=gn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Yg.has(c)||(Yg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),An(n,"link",e),sn(n),s.head.appendChild(n)))}}function kx(e){$i.D(e),Zg("dns-prefetch",e,null)}function Xx(e,n){$i.C(e,n),Zg("preconnect",e,n)}function Wx(e,n,a){$i.L(e,n,a);var s=is;if(s&&e&&n){var c='link[rel="preload"][as="'+gn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gn(a.imageSizes)+'"]')):c+='[href="'+gn(e)+'"]';var f=c;switch(n){case"style":f=as(e);break;case"script":f=rs(e)}ui.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(bo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),An(n,"link",e),sn(n),s.head.appendChild(n)))}}function qx(e,n){$i.m(e,n);var a=is;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gn(s)+'"][href="'+gn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rs(e)}if(!ui.has(f)&&(e=v({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),An(s,"link",e),sn(s),a.head.appendChild(s)}}}function jx(e,n,a){$i.S(e,n,a);var s=is;if(s&&e){var c=fa(s).hoistableStyles,f=as(e);n=n||"default";var M=c.get(f);if(!M){var R={loading:0,preload:null};if(M=s.querySelector(bo(f)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&kf(e,a);var G=M=s.createElement("link");sn(G),An(G,"link",e),G._p=new Promise(function(st,xt){G.onload=st,G.onerror=xt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,$l(M,n,s)}M={type:"stylesheet",instance:M,count:1,state:R},c.set(f,M)}}}function Yx(e,n){$i.X(e,n);var a=is;if(a&&e){var s=fa(a).hoistableScripts,c=rs(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=v({src:e,async:!0},n),(n=ui.get(c))&&Xf(e,n),f=a.createElement("script"),sn(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Zx(e,n){$i.M(e,n);var a=is;if(a&&e){var s=fa(a).hoistableScripts,c=rs(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=ui.get(c))&&Xf(e,n),f=a.createElement("script"),sn(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Kg(e,n,a,s){var c=(c=rt.current)?Jl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=fa(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=as(a.href);var f=fa(c).hoistableStyles,M=f.get(e);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=c.querySelector(bo(e)))&&!f._p&&(M.instance=f,M.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||Kx(c,e,a,M.state))),n&&s===null)throw Error(r(528,""));return M}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=fa(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function as(e){return'href="'+gn(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function Qg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Kx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),An(n,"link",a),sn(n),e.head.appendChild(n))}function rs(e){return'[src="'+gn(e)+'"]'}function Eo(e){return"script[async]"+e}function Jg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+gn(a.href)+'"]');if(s)return n.instance=s,sn(s),s;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),sn(s),An(s,"style",c),$l(s,a.precedence,e),n.instance=s;case"stylesheet":c=as(a.href);var f=e.querySelector(bo(c));if(f)return n.state.loading|=4,n.instance=f,sn(f),f;s=Qg(a),(c=ui.get(c))&&kf(s,c),f=(e.ownerDocument||e).createElement("link"),sn(f);var M=f;return M._p=new Promise(function(R,G){M.onload=R,M.onerror=G}),An(f,"link",s),n.state.loading|=4,$l(f,a.precedence,e),n.instance=f;case"script":return f=rs(a.src),(c=e.querySelector(Eo(f)))?(n.instance=c,sn(c),c):(s=a,(c=ui.get(f))&&(s=v({},a),Xf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),sn(c),An(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,$l(s,a.precedence,e));return n.instance}function $l(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,M=0;M<s.length;M++){var R=s[M];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function $g(e,n,a){if(tc===null){var s=new Map,c=tc=new Map;c.set(a,s)}else c=tc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ri]||f[fn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var R=s.get(M);R?R.push(f):s.set(M,[f])}}return s}function t_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Qx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var To=null;function Jx(){}function $x(e,n,a){if(To===null)throw Error(r(475));var s=To;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=as(a.href),f=e.querySelector(bo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=ec.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,sn(f);return}f=e.ownerDocument||e,a=Qg(a),(c=ui.get(c))&&kf(a,c),f=f.createElement("link"),sn(f);var M=f;M._p=new Promise(function(R,G){M.onload=R,M.onerror=G}),An(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=ec.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function ty(){if(To===null)throw Error(r(475));var e=To;return e.stylesheets&&e.count===0&&Wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ec(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function Wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(ey,e),nc=null,ec.call(e))}function ey(e,n){if(!(n.state.loading&4)){var a=nc.get(e);if(a)var s=a.get(null);else{a=new Map,nc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var M=c[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),s=M)}s&&a.set(null,s)}c=n.instance,M=c.getAttribute("data-precedence"),f=a.get(M)||s,f===s&&a.set(null,c),a.set(M,c),this.count++,s=ec.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:B,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function ny(e,n,a,s,c,f,M,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.hiddenUpdates=Bt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function n_(e,n,a,s,c,f,M,R,G,st,xt,Mt){return e=new ny(e,n,a,M,R,G,st,Mt),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=Tu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},wu(f),e}function i_(e){return e?(e=Br,e):Br}function a_(e,n,a,s,c,f){c=i_(c),s.context===null?s.context=c:s.pendingContext=c,s=ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ga(e,s,n),a!==null&&(ti(a,e,n),eo(a,e,n))}function r_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){r_(e,n),(e=e.alternate)&&r_(e,n)}function s_(e){if(e.tag===13){var n=Pr(e,67108864);n!==null&&ti(n,e,67108864),qf(e,67108864)}}var ic=!0;function iy(e,n,a,s){var c=H.T;H.T=null;var f=nt.p;try{nt.p=2,jf(e,n,a,s)}finally{nt.p=f,H.T=c}}function ay(e,n,a,s){var c=H.T;H.T=null;var f=nt.p;try{nt.p=8,jf(e,n,a,s)}finally{nt.p=f,H.T=c}}function jf(e,n,a,s){if(ic){var c=Yf(s);if(c===null)Of(e,n,s,ac,a),l_(e,s);else if(sy(c,e,n,a,s))s.stopPropagation();else if(l_(e,s),n&4&&-1<ry.indexOf(e)){for(;c!==null;){var f=ua(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Xt(f.pendingLanes);if(M!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;M;){var G=1<<31-gt(M);R.entanglements[1]|=G,M&=~G}Li(f),(Pe&6)===0&&(Gl=Gt()+500,xo(0))}}break;case 13:R=Pr(f,2),R!==null&&ti(R,f,2),kl(),qf(f,2)}if(f=Yf(s),f===null&&Of(e,n,s,ac,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Of(e,n,s,null,a)}}function Yf(e){return e=Jc(e),Zf(e)}var ac=null;function Zf(e){if(ac=null,e=zi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ac=e,null}function o_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ne()){case jt:return 2;case fe:return 8;case P:case ot:return 32;case T:return 268435456;default:return 32}default:return 32}}var Kf=!1,wa=null,Da=null,Ua=null,Ro=new Map,Co=new Map,La=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ua(n),n!==null&&s_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function sy(e,n,a,s,c){switch(n){case"focusin":return wa=wo(wa,e,n,a,s,c),!0;case"dragenter":return Da=wo(Da,e,n,a,s,c),!0;case"mouseover":return Ua=wo(Ua,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,wo(Ro.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Co.set(f,wo(Co.get(f)||null,e,n,a,s,c)),!0}return!1}function c_(e){var n=zi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,pi(e.priority,function(){if(a.tag===13){var s=$n();s=ce(s);var c=Pr(a,s);c!==null&&ti(c,a,s),qf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Qc=s,a.target.dispatchEvent(s),Qc=null}else return n=ua(a),n!==null&&s_(n),e.blockedOn=a,!1;n.shift()}return!0}function u_(e,n,a){rc(e)&&a.delete(n)}function oy(){Kf=!1,wa!==null&&rc(wa)&&(wa=null),Da!==null&&rc(Da)&&(Da=null),Ua!==null&&rc(Ua)&&(Ua=null),Ro.forEach(u_),Co.forEach(u_)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,oy)))}var oc=null;function f_(e){oc!==e&&(oc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Zf(s||a)===null)continue;break}var f=ua(a);f!==null&&(e.splice(n,3),n-=3,Yu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Do(e){function n(G){return sc(G,e)}wa!==null&&sc(wa,e),Da!==null&&sc(Da,e),Ua!==null&&sc(Ua,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<La.length;a++){var s=La[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)c_(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],M=c[Je]||null;if(typeof f=="function")M||f_(a);else if(M){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,M=f[Je]||null)R=M.formAction;else if(Zf(c)!==null)continue}else R=M.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),f_(a)}}}function Qf(e){this._internalRoot=e}lc.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();a_(a,s,e,n,null,null)},lc.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;a_(e.current,2,null,e,null,null),kl(),n[Ai]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Re();e={blockedOn:null,target:e,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,e),a===0&&c_(e)}};var d_=t.version;if(d_!=="19.1.1")throw Error(r(527,d_,"19.1.1"));nt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var ly={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{W=cc.inject(ly),Z=cc}catch{}}return Lo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Cm,f=wm,M=Dm,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=n_(e,1,!1,null,null,a,s,c,f,M,R,null),e[Ai]=n.current,Nf(e),new Qf(n)},Lo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Cm,M=wm,R=Dm,G=null,st=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(G=a.unstable_transitionCallbacks),a.formState!==void 0&&(st=a.formState)),n=n_(e,1,!0,n,a??null,s,c,f,M,R,G,st),n.context=i_(null),a=n.current,s=$n(),s=ce(s),c=ma(s),c.callback=null,ga(a,c,s),a=s,n.current.lanes=a,kt(n,a),Li(n),e[Ai]=n.current,Nf(e),new lc(n)},Lo.version="19.1.1",Lo}var M_;function vy(){if(M_)return td.exports;M_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),td.exports=_y(),td.exports}var xy=vy();const yy="modulepreload",Sy=function(o){return"/"+o},b_={},My=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let g=function(p){return Promise.all(p.map(v=>Promise.resolve(v).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=d?.nonce||d?.getAttribute("nonce");l=g(i.map(p=>{if(p=Sy(p),p in b_)return;b_[p]=!0;const v=p.endsWith(".css"),x=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${x}`))return;const y=document.createElement("link");if(y.rel=v?"stylesheet":yy,v||(y.as="script"),y.crossOrigin="",y.href=p,h&&y.setAttribute("nonce",h),document.head.appendChild(y),v)return new Promise((_,A)=>{y.addEventListener("load",_),y.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return l.then(d=>{for(const h of d||[])h.status==="rejected"&&u(h.reason);return t().catch(u)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="180",by=0,E_=1,Ey=2,D0=1,Ty=2,ra=3,Xa=0,jn=1,Pi=2,Ga=0,As=1,T_=2,A_=3,R_=4,Ay=5,_r=100,Ry=101,Cy=102,wy=103,Dy=104,Uy=200,Ly=201,Ny=202,Oy=203,Id=204,Fd=205,Py=206,By=207,Iy=208,Fy=209,zy=210,Hy=211,Gy=212,Vy=213,ky=214,zd=0,Hd=1,Gd=2,Cs=3,Vd=4,kd=5,Xd=6,Wd=7,U0=0,Xy=1,Wy=2,Va=0,qy=1,jy=2,Yy=3,Zy=4,Ky=5,Qy=6,Jy=7,L0=300,ws=301,Ds=302,qd=303,jd=304,Yc=306,Yd=1e3,xr=1001,Zd=1002,ii=1003,$y=1004,uc=1005,bi=1006,ad=1007,yr=1008,la=1009,N0=1010,O0=1011,Wo=1012,Dh=1013,Mr=1014,Ii=1015,Qo=1016,Uh=1017,Lh=1018,qo=1020,P0=35902,B0=35899,I0=1021,F0=1022,Ei=1023,jo=1026,Yo=1027,Nh=1028,Oh=1029,z0=1030,Ph=1031,Bh=1033,Ic=33776,Fc=33777,zc=33778,Hc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,th=36196,eh=37492,nh=37496,ih=37808,ah=37809,rh=37810,sh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,yh=36283,Sh=36284,Mh=36285,bh=36286,tS=3200,eS=3201,nS=0,iS=1,Ha="",di="srgb",Us="srgb-linear",Vc="linear",Ge="srgb",ss=7680,C_=519,aS=512,rS=513,sS=514,H0=515,oS=516,lS=517,cS=518,uS=519,Eh=35044,w_="300 es",Fi=2e3,kc=2001;class Ns{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Th=180/Math.PI;function ka(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Te(o,t,i){return Math.max(t,Math.min(i,o))}function fS(o,t){return(o%t+t)%t}function sd(o,t,i){return(1-i)*o+i*t}function Bi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(t=0,i=0){Ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let g=r[l+0],p=r[l+1],v=r[l+2],x=r[l+3];const y=u[d+0],_=u[d+1],A=u[d+2],E=u[d+3];if(h===0){t[i+0]=g,t[i+1]=p,t[i+2]=v,t[i+3]=x;return}if(h===1){t[i+0]=y,t[i+1]=_,t[i+2]=A,t[i+3]=E;return}if(x!==E||g!==y||p!==_||v!==A){let b=1-h;const m=g*y+p*_+v*A+x*E,I=m>=0?1:-1,B=1-m*m;if(B>Number.EPSILON){const D=Math.sqrt(B),V=Math.atan2(D,m*I);b=Math.sin(b*V)/D,h=Math.sin(h*V)/D}const N=h*I;if(g=g*b+y*N,p=p*b+_*N,v=v*b+A*N,x=x*b+E*N,b===1-h){const D=1/Math.sqrt(g*g+p*p+v*v+x*x);g*=D,p*=D,v*=D,x*=D}}t[i]=g,t[i+1]=p,t[i+2]=v,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],g=r[l+1],p=r[l+2],v=r[l+3],x=u[d],y=u[d+1],_=u[d+2],A=u[d+3];return t[i]=h*A+v*x+g*_-p*y,t[i+1]=g*A+v*y+p*x-h*_,t[i+2]=p*A+v*_+h*y-g*x,t[i+3]=v*A-h*x-g*y-p*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,g=Math.sin,p=h(r/2),v=h(l/2),x=h(u/2),y=g(r/2),_=g(l/2),A=g(u/2);switch(d){case"XYZ":this._x=y*v*x+p*_*A,this._y=p*_*x-y*v*A,this._z=p*v*A+y*_*x,this._w=p*v*x-y*_*A;break;case"YXZ":this._x=y*v*x+p*_*A,this._y=p*_*x-y*v*A,this._z=p*v*A-y*_*x,this._w=p*v*x+y*_*A;break;case"ZXY":this._x=y*v*x-p*_*A,this._y=p*_*x+y*v*A,this._z=p*v*A+y*_*x,this._w=p*v*x-y*_*A;break;case"ZYX":this._x=y*v*x-p*_*A,this._y=p*_*x+y*v*A,this._z=p*v*A-y*_*x,this._w=p*v*x+y*_*A;break;case"YZX":this._x=y*v*x+p*_*A,this._y=p*_*x+y*v*A,this._z=p*v*A-y*_*x,this._w=p*v*x-y*_*A;break;case"XZY":this._x=y*v*x-p*_*A,this._y=p*_*x-y*v*A,this._z=p*v*A+y*_*x,this._w=p*v*x+y*_*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],g=i[9],p=i[2],v=i[6],x=i[10],y=r+h+x;if(y>0){const _=.5/Math.sqrt(y+1);this._w=.25/_,this._x=(v-g)*_,this._y=(u-p)*_,this._z=(d-l)*_}else if(r>h&&r>x){const _=2*Math.sqrt(1+r-h-x);this._w=(v-g)/_,this._x=.25*_,this._y=(l+d)/_,this._z=(u+p)/_}else if(h>x){const _=2*Math.sqrt(1+h-r-x);this._w=(u-p)/_,this._x=(l+d)/_,this._y=.25*_,this._z=(g+v)/_}else{const _=2*Math.sqrt(1+x-r-h);this._w=(d-l)/_,this._x=(u+p)/_,this._y=(g+v)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,g=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*g,this._y=l*v+d*g+u*h-r*p,this._z=u*v+d*p+r*g-l*h,this._w=d*v-r*h-l*g-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const g=1-h*h;if(g<=Number.EPSILON){const _=1-i;return this._w=_*d+i*this._w,this._x=_*r+i*this._x,this._y=_*l+i*this._y,this._z=_*u+i*this._z,this.normalize(),this}const p=Math.sqrt(g),v=Math.atan2(p,h),x=Math.sin((1-i)*v)/p,y=Math.sin(i*v)/p;return this._w=d*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,i=0,r=0){it.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(D_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(D_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,g=t.w,p=2*(d*l-h*r),v=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+g*p+d*x-h*v,this.y=r+g*v+h*p-u*x,this.z=l+g*x+u*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,g=i.z;return this.x=l*g-u*h,this.y=u*d-r*g,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return od.copy(this).projectOnVector(t),this.sub(od)}reflect(t){return this.sub(od.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new it,D_=new Jo;class me{constructor(t,i,r,l,u,d,h,g,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,g,p)}set(t,i,r,l,u,d,h,g,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=g,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],g=r[6],p=r[1],v=r[4],x=r[7],y=r[2],_=r[5],A=r[8],E=l[0],b=l[3],m=l[6],I=l[1],B=l[4],N=l[7],D=l[2],V=l[5],F=l[8];return u[0]=d*E+h*I+g*D,u[3]=d*b+h*B+g*V,u[6]=d*m+h*N+g*F,u[1]=p*E+v*I+x*D,u[4]=p*b+v*B+x*V,u[7]=p*m+v*N+x*F,u[2]=y*E+_*I+A*D,u[5]=y*b+_*B+A*V,u[8]=y*m+_*N+A*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],g=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-r*u*v+r*h*g+l*u*p-l*d*g}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],g=t[6],p=t[7],v=t[8],x=v*d-h*p,y=h*g-v*u,_=p*u-d*g,A=i*x+r*y+l*_;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=x*E,t[1]=(l*p-v*r)*E,t[2]=(h*r-l*d)*E,t[3]=y*E,t[4]=(v*i-l*g)*E,t[5]=(l*u-h*i)*E,t[6]=_*E,t[7]=(r*g-p*i)*E,t[8]=(d*i-r*u)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const g=Math.cos(u),p=Math.sin(u);return this.set(r*g,r*p,-r*(g*d+p*h)+d+t,-l*p,l*g,-l*(-p*d+g*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ld.makeScale(t,i)),this}rotate(t){return this.premultiply(ld.makeRotation(-t)),this}translate(t,i){return this.premultiply(ld.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new me;function G0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Xc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function dS(){const o=Xc("canvas");return o.style.display="block",o}const U_={};function Zo(o){o in U_||(U_[o]=!0,console.warn(o))}function hS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const L_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pS(){const o={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ge&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?Vc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Zo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Zo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Us]:{primaries:t,whitePoint:r,transfer:Vc,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const De=pS();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let os;class mS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=Xc("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=oa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(oa(i[r]/255)*255):i[r]=oa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gS=0;class Ih{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=ka(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(cd(l[d].image)):u.push(cd(l[d]))}else u=cd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function cd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?mS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _S=0;const ud=new it;class Pn extends Ns{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=xr,l=xr,u=bi,d=yr,h=Ei,g=la,p=Pn.DEFAULT_ANISOTROPY,v=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=ka(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==L0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yd:t.x=t.x-Math.floor(t.x);break;case xr:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yd:t.y=t.y-Math.floor(t.y);break;case xr:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=L0;Pn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const g=t.elements,p=g[0],v=g[4],x=g[8],y=g[1],_=g[5],A=g[9],E=g[2],b=g[6],m=g[10];if(Math.abs(v-y)<.01&&Math.abs(x-E)<.01&&Math.abs(A-b)<.01){if(Math.abs(v+y)<.1&&Math.abs(x+E)<.1&&Math.abs(A+b)<.1&&Math.abs(p+_+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(p+1)/2,N=(_+1)/2,D=(m+1)/2,V=(v+y)/4,F=(x+E)/4,$=(A+b)/4;return B>N&&B>D?B<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(B),l=V/r,u=F/r):N>D?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=V/l,u=$/l):D<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(D),r=F/u,l=$/u),this.set(r,l,u,i),this}let I=Math.sqrt((b-A)*(b-A)+(x-E)*(x-E)+(y-v)*(y-v));return Math.abs(I)<.001&&(I=1),this.x=(b-A)/I,this.y=(x-E)/I,this.z=(y-v)/I,this.w=Math.acos((p+_+m-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this.w=Te(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this.w=Te(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vS extends Ns{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Pn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ih(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends vS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class V0 extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xS extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,xi):xi.fromBufferAttribute(u,d),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fc.copy(r.boundingBox)),fc.applyMatrix4(t.matrixWorld),this.union(fc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),dc.subVectors(this.max,No),ls.subVectors(t.a,No),cs.subVectors(t.b,No),us.subVectors(t.c,No),Oa.subVectors(cs,ls),Pa.subVectors(us,cs),cr.subVectors(ls,us);let i=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-cr.z,cr.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,cr.z,0,-cr.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-cr.y,cr.x,0];return!fd(i,ls,cs,us,dc)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,ls,cs,us,dc))?!1:(hc.crossVectors(Oa,Pa),i=[hc.x,hc.y,hc.z],fd(i,ls,cs,us,dc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ta=[new it,new it,new it,new it,new it,new it,new it,new it],xi=new it,fc=new Er,ls=new it,cs=new it,us=new it,Oa=new it,Pa=new it,cr=new it,No=new it,dc=new it,hc=new it,ur=new it;function fd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ur.fromArray(o,u);const h=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),g=t.dot(ur),p=i.dot(ur),v=r.dot(ur);if(Math.max(-Math.max(g,p,v),Math.min(g,p,v))>h)return!1}return!0}const yS=new Er,Oo=new it,dd=new it;class Os{constructor(t=new it,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):yS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Oo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(dd)),this.expandByPoint(Oo.copy(t.center).sub(dd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ea=new it,hd=new it,pc=new it,Ba=new it,pd=new it,mc=new it,md=new it;class Fh{constructor(t=new it,i=new it(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){hd.copy(t).add(i).multiplyScalar(.5),pc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(hd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(pc),h=Ba.dot(this.direction),g=-Ba.dot(pc),p=Ba.lengthSq(),v=Math.abs(1-d*d);let x,y,_,A;if(v>0)if(x=d*g-h,y=d*h-g,A=u*v,x>=0)if(y>=-A)if(y<=A){const E=1/v;x*=E,y*=E,_=x*(x+d*y+2*h)+y*(d*x+y+2*g)+p}else y=u,x=Math.max(0,-(d*y+h)),_=-x*x+y*(y+2*g)+p;else y=-u,x=Math.max(0,-(d*y+h)),_=-x*x+y*(y+2*g)+p;else y<=-A?(x=Math.max(0,-(-d*u+h)),y=x>0?-u:Math.min(Math.max(-u,-g),u),_=-x*x+y*(y+2*g)+p):y<=A?(x=0,y=Math.min(Math.max(-u,-g),u),_=y*(y+2*g)+p):(x=Math.max(0,-(d*u+h)),y=x>0?u:Math.min(Math.max(-u,-g),u),_=-x*x+y*(y+2*g)+p);else y=d>0?-u:u,x=Math.max(0,-(d*y+h)),_=-x*x+y*(y+2*g)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(hd).addScaledVector(pc,y),_}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,g=r+d;return g<0?null:h<0?this.at(g,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,g;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),v>=0?(u=(t.min.y-y.y)*v,d=(t.max.y-y.y)*v):(u=(t.max.y-y.y)*v,d=(t.min.y-y.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-y.z)*x,g=(t.max.z-y.z)*x):(h=(t.max.z-y.z)*x,g=(t.min.z-y.z)*x),r>g||h>l)||((h>r||r!==r)&&(r=h),(g<l||l!==l)&&(l=g),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,r,l,u){pd.subVectors(i,t),mc.subVectors(r,t),md.crossVectors(pd,mc);let d=this.direction.dot(md),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ba.subVectors(this.origin,t);const g=h*this.direction.dot(mc.crossVectors(Ba,mc));if(g<0)return null;const p=h*this.direction.dot(pd.cross(Ba));if(p<0||g+p>d)return null;const v=-h*Ba.dot(md);return v<0?null:this.at(v/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,u,d,h,g,p,v,x,y,_,A,E,b){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,g,p,v,x,y,_,A,E,b)}set(t,i,r,l,u,d,h,g,p,v,x,y,_,A,E,b){const m=this.elements;return m[0]=t,m[4]=i,m[8]=r,m[12]=l,m[1]=u,m[5]=d,m[9]=h,m[13]=g,m[2]=p,m[6]=v,m[10]=x,m[14]=y,m[3]=_,m[7]=A,m[11]=E,m[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),d=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),g=Math.cos(l),p=Math.sin(l),v=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const y=d*v,_=d*x,A=h*v,E=h*x;i[0]=g*v,i[4]=-g*x,i[8]=p,i[1]=_+A*p,i[5]=y-E*p,i[9]=-h*g,i[2]=E-y*p,i[6]=A+_*p,i[10]=d*g}else if(t.order==="YXZ"){const y=g*v,_=g*x,A=p*v,E=p*x;i[0]=y+E*h,i[4]=A*h-_,i[8]=d*p,i[1]=d*x,i[5]=d*v,i[9]=-h,i[2]=_*h-A,i[6]=E+y*h,i[10]=d*g}else if(t.order==="ZXY"){const y=g*v,_=g*x,A=p*v,E=p*x;i[0]=y-E*h,i[4]=-d*x,i[8]=A+_*h,i[1]=_+A*h,i[5]=d*v,i[9]=E-y*h,i[2]=-d*p,i[6]=h,i[10]=d*g}else if(t.order==="ZYX"){const y=d*v,_=d*x,A=h*v,E=h*x;i[0]=g*v,i[4]=A*p-_,i[8]=y*p+E,i[1]=g*x,i[5]=E*p+y,i[9]=_*p-A,i[2]=-p,i[6]=h*g,i[10]=d*g}else if(t.order==="YZX"){const y=d*g,_=d*p,A=h*g,E=h*p;i[0]=g*v,i[4]=E-y*x,i[8]=A*x+_,i[1]=x,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=_*x+A,i[10]=y-E*x}else if(t.order==="XZY"){const y=d*g,_=d*p,A=h*g,E=h*p;i[0]=g*v,i[4]=-x,i[8]=p*v,i[1]=y*x+E,i[5]=d*v,i[9]=_*x-A,i[2]=A*x-_,i[6]=h*v,i[10]=E*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SS,t,MS)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ia.crossVectors(r,ei),Ia.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ia.crossVectors(r,ei)),Ia.normalize(),gc.crossVectors(ei,Ia),l[0]=Ia.x,l[4]=gc.x,l[8]=ei.x,l[1]=Ia.y,l[5]=gc.y,l[9]=ei.y,l[2]=Ia.z,l[6]=gc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],g=r[8],p=r[12],v=r[1],x=r[5],y=r[9],_=r[13],A=r[2],E=r[6],b=r[10],m=r[14],I=r[3],B=r[7],N=r[11],D=r[15],V=l[0],F=l[4],$=l[8],w=l[12],L=l[1],q=l[5],ut=l[9],mt=l[13],vt=l[2],ct=l[6],H=l[10],nt=l[14],K=l[3],Tt=l[7],O=l[11],at=l[15];return u[0]=d*V+h*L+g*vt+p*K,u[4]=d*F+h*q+g*ct+p*Tt,u[8]=d*$+h*ut+g*H+p*O,u[12]=d*w+h*mt+g*nt+p*at,u[1]=v*V+x*L+y*vt+_*K,u[5]=v*F+x*q+y*ct+_*Tt,u[9]=v*$+x*ut+y*H+_*O,u[13]=v*w+x*mt+y*nt+_*at,u[2]=A*V+E*L+b*vt+m*K,u[6]=A*F+E*q+b*ct+m*Tt,u[10]=A*$+E*ut+b*H+m*O,u[14]=A*w+E*mt+b*nt+m*at,u[3]=I*V+B*L+N*vt+D*K,u[7]=I*F+B*q+N*ct+D*Tt,u[11]=I*$+B*ut+N*H+D*O,u[15]=I*w+B*mt+N*nt+D*at,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],g=t[9],p=t[13],v=t[2],x=t[6],y=t[10],_=t[14],A=t[3],E=t[7],b=t[11],m=t[15];return A*(+u*g*x-l*p*x-u*h*y+r*p*y+l*h*_-r*g*_)+E*(+i*g*_-i*p*y+u*d*y-l*d*_+l*p*v-u*g*v)+b*(+i*p*x-i*h*_-u*d*x+r*d*_+u*h*v-r*p*v)+m*(-l*h*v-i*g*x+i*h*y+l*d*x-r*d*y+r*g*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],g=t[6],p=t[7],v=t[8],x=t[9],y=t[10],_=t[11],A=t[12],E=t[13],b=t[14],m=t[15],I=x*b*p-E*y*p+E*g*_-h*b*_-x*g*m+h*y*m,B=A*y*p-v*b*p-A*g*_+d*b*_+v*g*m-d*y*m,N=v*E*p-A*x*p+A*h*_-d*E*_-v*h*m+d*x*m,D=A*x*g-v*E*g-A*h*y+d*E*y+v*h*b-d*x*b,V=i*I+r*B+l*N+u*D;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/V;return t[0]=I*F,t[1]=(E*y*u-x*b*u-E*l*_+r*b*_+x*l*m-r*y*m)*F,t[2]=(h*b*u-E*g*u+E*l*p-r*b*p-h*l*m+r*g*m)*F,t[3]=(x*g*u-h*y*u-x*l*p+r*y*p+h*l*_-r*g*_)*F,t[4]=B*F,t[5]=(v*b*u-A*y*u+A*l*_-i*b*_-v*l*m+i*y*m)*F,t[6]=(A*g*u-d*b*u-A*l*p+i*b*p+d*l*m-i*g*m)*F,t[7]=(d*y*u-v*g*u+v*l*p-i*y*p-d*l*_+i*g*_)*F,t[8]=N*F,t[9]=(A*x*u-v*E*u-A*r*_+i*E*_+v*r*m-i*x*m)*F,t[10]=(d*E*u-A*h*u+A*r*p-i*E*p-d*r*m+i*h*m)*F,t[11]=(v*h*u-d*x*u-v*r*p+i*x*p+d*r*_-i*h*_)*F,t[12]=D*F,t[13]=(v*E*l-A*x*l+A*r*y-i*E*y-v*r*b+i*x*b)*F,t[14]=(A*h*l-d*E*l-A*r*g+i*E*g+d*r*b-i*h*b)*F,t[15]=(d*x*l-v*h*l+v*r*g-i*x*g-d*r*y+i*h*y)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,g=t.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*g,p*g+l*h,0,p*h+l*g,v*h+r,v*g-l*d,0,p*g-l*h,v*g+l*d,u*g*g+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,g=i._w,p=u+u,v=d+d,x=h+h,y=u*p,_=u*v,A=u*x,E=d*v,b=d*x,m=h*x,I=g*p,B=g*v,N=g*x,D=r.x,V=r.y,F=r.z;return l[0]=(1-(E+m))*D,l[1]=(_+N)*D,l[2]=(A-B)*D,l[3]=0,l[4]=(_-N)*V,l[5]=(1-(y+m))*V,l[6]=(b+I)*V,l[7]=0,l[8]=(A+B)*F,l[9]=(b-I)*F,l[10]=(1-(y+E))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const d=fs.set(l[4],l[5],l[6]).length(),h=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const p=1/u,v=1/d,x=1/h;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=v,yi.elements[5]*=v,yi.elements[6]*=v,yi.elements[8]*=x,yi.elements[9]*=x,yi.elements[10]*=x,i.setFromRotationMatrix(yi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Fi,g=!1){const p=this.elements,v=2*u/(i-t),x=2*u/(r-l),y=(i+t)/(i-t),_=(r+l)/(r-l);let A,E;if(g)A=u/(d-u),E=d*u/(d-u);else if(h===Fi)A=-(d+u)/(d-u),E=-2*d*u/(d-u);else if(h===kc)A=-d/(d-u),E=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Fi,g=!1){const p=this.elements,v=2/(i-t),x=2/(r-l),y=-(i+t)/(i-t),_=-(r+l)/(r-l);let A,E;if(g)A=1/(d-u),E=d/(d-u);else if(h===Fi)A=-2/(d-u),E=-(d+u)/(d-u);else if(h===kc)A=-1/(d-u),E=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=_,p[2]=0,p[6]=0,p[10]=A,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new it,yi=new je,SS=new it(0,0,0),MS=new it(1,1,1),Ia=new it,gc=new it,ei=new it,O_=new je,P_=new Jo;class ca{constructor(t=0,i=0,r=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],g=l[1],p=l[5],v=l[9],x=l[2],y=l[6],_=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,_),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,_),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Te(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(g,u));break;case"ZYX":this._y=Math.asin(-Te(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,_),this._z=Math.atan2(g,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Te(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,_));break;case"XZY":this._z=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return O_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(O_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return P_.setFromEuler(this),this.setFromQuaternion(P_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bS=0;const B_=new it,ds=new Jo,na=new je,_c=new it,Po=new it,ES=new it,TS=new Jo,I_=new it(1,0,0),F_=new it(0,1,0),z_=new it(0,0,1),H_={type:"added"},AS={type:"removed"},hs={type:"childadded",child:null},gd={type:"childremoved",child:null};class Bn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const t=new it,i=new ca,r=new Jo,l=new it(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new me}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(I_,t)}rotateY(t){return this.rotateOnAxis(F_,t)}rotateZ(t){return this.rotateOnAxis(z_,t)}translateOnAxis(t,i){return B_.copy(t).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(I_,t)}translateY(t){return this.translateOnAxis(F_,t)}translateZ(t){return this.translateOnAxis(z_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?_c.copy(t):_c.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Po,_c,this.up):na.lookAt(_c,Po,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(na),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(H_),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(AS),gd.child=t,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(H_),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,ES),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,TS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let p=0,v=g.length;p<v;p++){const x=g[p];u(t.shapes,x)}else u(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,p=this.material.length;g<p;g++)h.push(u(t.materials,this.material[g]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];l.animations.push(u(t.animations,g))}}if(i){const h=d(t.geometries),g=d(t.materials),p=d(t.textures),v=d(t.images),x=d(t.shapes),y=d(t.skeletons),_=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),g.length>0&&(r.materials=g),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),_.length>0&&(r.animations=_),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const g=[];for(const p in h){const v=h[p];delete v.metadata,g.push(v)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new it(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new it,ia=new it,_d=new it,aa=new it,ps=new it,ms=new it,G_=new it,vd=new it,xd=new it,yd=new it,Sd=new rn,Md=new rn,bd=new rn;class hi{constructor(t=new it,i=new it,r=new it){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Si.subVectors(t,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Si.subVectors(l,i),ia.subVectors(r,i),_d.subVectors(t,i);const d=Si.dot(Si),h=Si.dot(ia),g=Si.dot(_d),p=ia.dot(ia),v=ia.dot(_d),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const y=1/x,_=(p*g-h*v)*y,A=(d*v-h*g)*y;return u.set(1-_-A,A,_)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,r,l,u,d,h,g){return this.getBarycoord(t,i,r,l,aa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(u,aa.x),g.addScaledVector(d,aa.y),g.addScaledVector(h,aa.z),g)}static getInterpolatedAttribute(t,i,r,l,u,d){return Sd.setScalar(0),Md.setScalar(0),bd.setScalar(0),Sd.fromBufferAttribute(t,i),Md.fromBufferAttribute(t,r),bd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Sd,u.x),d.addScaledVector(Md,u.y),d.addScaledVector(bd,u.z),d}static isFrontFacing(t,i,r,l){return Si.subVectors(r,i),ia.subVectors(t,i),Si.cross(ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Si.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return hi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return hi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ps.subVectors(l,r),ms.subVectors(u,r),vd.subVectors(t,r);const g=ps.dot(vd),p=ms.dot(vd);if(g<=0&&p<=0)return i.copy(r);xd.subVectors(t,l);const v=ps.dot(xd),x=ms.dot(xd);if(v>=0&&x<=v)return i.copy(l);const y=g*x-v*p;if(y<=0&&g>=0&&v<=0)return d=g/(g-v),i.copy(r).addScaledVector(ps,d);yd.subVectors(t,u);const _=ps.dot(yd),A=ms.dot(yd);if(A>=0&&_<=A)return i.copy(u);const E=_*p-g*A;if(E<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(ms,h);const b=v*A-_*x;if(b<=0&&x-v>=0&&_-A>=0)return G_.subVectors(u,l),h=(x-v)/(x-v+(_-A)),i.copy(l).addScaledVector(G_,h);const m=1/(b+E+y);return d=E*m,h=y*m,i.copy(r).addScaledVector(ps,d).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Ed(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class he{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=De.workingColorSpace){if(t=fS(t,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Ed(d,u,t+1/3),this.g=Ed(d,u,t),this.b=Ed(d,u,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const r=k0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return De.workingToColorSpace(Ln.copy(this),t),Math.round(Te(Ln.r*255,0,255))*65536+Math.round(Te(Ln.g*255,0,255))*256+Math.round(Te(Ln.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let g,p;const v=(h+d)/2;if(h===d)g=0,p=0;else{const x=d-h;switch(p=v<=.5?x/(d+h):x/(2-d-h),d){case r:g=(l-u)/x+(l<u?6:0);break;case l:g=(u-r)/x+2;break;case u:g=(r-l)/x+4;break}g/=6}return t.h=g,t.s=p,t.l=v,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=di){De.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,l=Ln.b;return t!==di?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(vc);const r=sd(Fa.h,vc.h,i),l=sd(Fa.s,vc.s,i),u=sd(Fa.l,vc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new he;he.NAMES=k0;let RS=0;class Ps extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=As,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Fd,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==Xa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Id&&(r.blendSrc=this.blendSrc),this.blendDst!==Fd&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const g=u[h];delete g.metadata,d.push(g)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ni extends Ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=U0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new it,xc=new Ee;let CS=0;class Nn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Eh,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(t),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Bi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Bi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Bi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Bi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),u=Ve(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eh&&(t.usage=this.usage),t}}class X0 extends Nn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class W0 extends Nn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ti extends Nn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let wS=0;const fi=new je,Td=new Bn,gs=new it,ni=new Er,Bo=new Er,yn=new it;class On extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(G0(t)?W0:X0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new me().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,r){return fi.makeTranslation(t,i,r),this.applyMatrix4(fi),this}scale(t,i,r){return fi.makeScale(t,i,r),this.applyMatrix4(fi),this}lookAt(t){return Td.lookAt(t),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ti(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Bo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ni.min,Bo.min),ni.expandByPoint(yn),yn.addVectors(ni.max,Bo.max),ni.expandByPoint(yn)):(ni.expandByPoint(Bo.min),ni.expandByPoint(Bo.max))}ni.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)yn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],g=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)yn.fromBufferAttribute(h,p),g&&(gs.fromBufferAttribute(t,p),yn.add(gs)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],g=[];for(let $=0;$<r.count;$++)h[$]=new it,g[$]=new it;const p=new it,v=new it,x=new it,y=new Ee,_=new Ee,A=new Ee,E=new it,b=new it;function m($,w,L){p.fromBufferAttribute(r,$),v.fromBufferAttribute(r,w),x.fromBufferAttribute(r,L),y.fromBufferAttribute(u,$),_.fromBufferAttribute(u,w),A.fromBufferAttribute(u,L),v.sub(p),x.sub(p),_.sub(y),A.sub(y);const q=1/(_.x*A.y-A.x*_.y);isFinite(q)&&(E.copy(v).multiplyScalar(A.y).addScaledVector(x,-_.y).multiplyScalar(q),b.copy(x).multiplyScalar(_.x).addScaledVector(v,-A.x).multiplyScalar(q),h[$].add(E),h[w].add(E),h[L].add(E),g[$].add(b),g[w].add(b),g[L].add(b))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let $=0,w=I.length;$<w;++$){const L=I[$],q=L.start,ut=L.count;for(let mt=q,vt=q+ut;mt<vt;mt+=3)m(t.getX(mt+0),t.getX(mt+1),t.getX(mt+2))}const B=new it,N=new it,D=new it,V=new it;function F($){D.fromBufferAttribute(l,$),V.copy(D);const w=h[$];B.copy(w),B.sub(D.multiplyScalar(D.dot(w))).normalize(),N.crossVectors(V,w);const q=N.dot(g[$])<0?-1:1;d.setXYZW($,B.x,B.y,B.z,q)}for(let $=0,w=I.length;$<w;++$){const L=I[$],q=L.start,ut=L.count;for(let mt=q,vt=q+ut;mt<vt;mt+=3)F(t.getX(mt+0)),F(t.getX(mt+1)),F(t.getX(mt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Nn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,_=r.count;y<_;y++)r.setXYZ(y,0,0,0);const l=new it,u=new it,d=new it,h=new it,g=new it,p=new it,v=new it,x=new it;if(t)for(let y=0,_=t.count;y<_;y+=3){const A=t.getX(y+0),E=t.getX(y+1),b=t.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,b),v.subVectors(d,u),x.subVectors(l,u),v.cross(x),h.fromBufferAttribute(r,A),g.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),h.add(v),g.add(v),p.add(v),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(E,g.x,g.y,g.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let y=0,_=i.count;y<_;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),v.subVectors(d,u),x.subVectors(l,u),v.cross(x),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,g){const p=h.array,v=h.itemSize,x=h.normalized,y=new p.constructor(g.length*v);let _=0,A=0;for(let E=0,b=g.length;E<b;E++){h.isInterleavedBufferAttribute?_=g[E]*h.data.stride+h.offset:_=g[E]*v;for(let m=0;m<v;m++)y[A++]=p[_++]}return new Nn(y,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new On,r=this.index.array,l=this.attributes;for(const h in l){const g=l[h],p=t(g,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const g=[],p=u[h];for(let v=0,x=p.length;v<x;v++){const y=p[v],_=t(y,r);g.push(_)}i.morphAttributes[h]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(t[p]=g[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const g in r){const p=r[g];t.data.attributes[g]=p.toJSON(t.data)}const l={};let u=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],v=[];for(let x=0,y=p.length;x<y;x++){const _=p[x];v.push(_.toJSON(t.data))}v.length>0&&(l[g]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],x=u[p];for(let y=0,_=x.length;y<_;y++)v.push(x[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new je,fr=new Fh,yc=new Os,k_=new it,Sc=new it,Mc=new it,bc=new it,Ad=new it,Ec=new it,X_=new it,Tc=new it;class Mn extends Bn{constructor(t=new On,i=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Ec.set(0,0,0);for(let g=0,p=u.length;g<p;g++){const v=h[g],x=u[g];v!==0&&(Ad.fromBufferAttribute(x,t),d?Ec.addScaledVector(Ad,v):Ec.addScaledVector(Ad.sub(i),v))}i.add(Ec)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(u),fr.copy(t.ray).recast(t.near),!(yc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(yc,k_)===null||fr.origin.distanceToSquared(k_)>(t.far-t.near)**2))&&(V_.copy(u).invert(),fr.copy(t.ray).applyMatrix4(V_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,fr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,g=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,y=u.groups,_=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,E=y.length;A<E;A++){const b=y[A],m=d[b.materialIndex],I=Math.max(b.start,_.start),B=Math.min(h.count,Math.min(b.start+b.count,_.start+_.count));for(let N=I,D=B;N<D;N+=3){const V=h.getX(N),F=h.getX(N+1),$=h.getX(N+2);l=Ac(this,m,t,r,p,v,x,V,F,$),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,_.start),E=Math.min(h.count,_.start+_.count);for(let b=A,m=E;b<m;b+=3){const I=h.getX(b),B=h.getX(b+1),N=h.getX(b+2);l=Ac(this,d,t,r,p,v,x,I,B,N),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(d))for(let A=0,E=y.length;A<E;A++){const b=y[A],m=d[b.materialIndex],I=Math.max(b.start,_.start),B=Math.min(g.count,Math.min(b.start+b.count,_.start+_.count));for(let N=I,D=B;N<D;N+=3){const V=N,F=N+1,$=N+2;l=Ac(this,m,t,r,p,v,x,V,F,$),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,_.start),E=Math.min(g.count,_.start+_.count);for(let b=A,m=E;b<m;b+=3){const I=b,B=b+1,N=b+2;l=Ac(this,d,t,r,p,v,x,I,B,N),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function DS(o,t,i,r,l,u,d,h){let g;if(t.side===jn?g=r.intersectTriangle(d,u,l,!0,h):g=r.intersectTriangle(l,u,d,t.side===Xa,h),g===null)return null;Tc.copy(h),Tc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Tc);return p<i.near||p>i.far?null:{distance:p,point:Tc.clone(),object:o}}function Ac(o,t,i,r,l,u,d,h,g,p){o.getVertexPosition(h,Sc),o.getVertexPosition(g,Mc),o.getVertexPosition(p,bc);const v=DS(o,t,i,r,Sc,Mc,bc,X_);if(v){const x=new it;hi.getBarycoord(X_,Sc,Mc,bc,x),l&&(v.uv=hi.getInterpolatedAttribute(l,h,g,p,x,new Ee)),u&&(v.uv1=hi.getInterpolatedAttribute(u,h,g,p,x,new Ee)),d&&(v.normal=hi.getInterpolatedAttribute(d,h,g,p,x,new it),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:g,c:p,normal:new it,materialIndex:0};hi.getNormal(Sc,Mc,bc,y.normal),v.face=y,v.barycoord=x}return v}class $o extends On{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const g=[],p=[],v=[],x=[];let y=0,_=0;A("z","y","x",-1,-1,r,i,t,d,u,0),A("z","y","x",1,-1,r,i,-t,d,u,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,u,4),A("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(g),this.setAttribute("position",new Ti(p,3)),this.setAttribute("normal",new Ti(v,3)),this.setAttribute("uv",new Ti(x,2));function A(E,b,m,I,B,N,D,V,F,$,w){const L=N/F,q=D/$,ut=N/2,mt=D/2,vt=V/2,ct=F+1,H=$+1;let nt=0,K=0;const Tt=new it;for(let O=0;O<H;O++){const at=O*q-mt;for(let Et=0;Et<ct;Et++){const At=Et*L-ut;Tt[E]=At*I,Tt[b]=at*B,Tt[m]=vt,p.push(Tt.x,Tt.y,Tt.z),Tt[E]=0,Tt[b]=0,Tt[m]=V>0?1:-1,v.push(Tt.x,Tt.y,Tt.z),x.push(Et/F),x.push(1-O/$),nt+=1}}for(let O=0;O<$;O++)for(let at=0;at<F;at++){const Et=y+at+ct*O,At=y+at+ct*(O+1),It=y+(at+1)+ct*(O+1),Wt=y+(at+1)+ct*O;g.push(Et,At,Wt),g.push(At,It,Wt),K+=6}h.addGroup(_,K,w),_+=K,y+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Gn(o){const t={};for(let i=0;i<o.length;i++){const r=Ls(o[i]);for(const l in r)t[l]=r[l]}return t}function US(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function q0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const LS={clone:Ls,merge:Gn};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=OS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=US(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class j0 extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new it,W_=new Ee,q_=new Ee;class Mi extends j0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Th*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Th*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,W_,q_),i.subVectors(q_,W_)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/g,i-=d.offsetY*r/p,l*=d.width/g,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class PS extends Bn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(_s,vs,t,i);l.layers=this.layers,this.add(l);const u=new Mi(_s,vs,t,i);u.layers=this.layers,this.add(u);const d=new Mi(_s,vs,t,i);d.layers=this.layers,this.add(d);const h=new Mi(_s,vs,t,i);h.layers=this.layers,this.add(h);const g=new Mi(_s,vs,t,i);g.layers=this.layers,this.add(g);const p=new Mi(_s,vs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,g]=i;for(const p of i)this.remove(p);if(t===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,g,p,v]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,g),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=E,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(x,y,_),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Y0 extends Pn{constructor(t=[],i=ws,r,l,u,d,h,g,p,v){super(t,i,r,l,u,d,h,g,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class BS extends br{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Y0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new $o(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Ga});u.uniforms.tEquirect.value=i;const d=new Mn(l,u),h=i.minFilter;return i.minFilter===yr&&(i.minFilter=bi),new PS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class ko extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IS={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,g=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const E of t.hand.values()){const b=i.getJointPose(E,r),m=this._getHandJoint(p,E);b!==null&&(m.matrix.fromArray(b.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=b.radius),m.visible=b!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=v.position.distanceTo(x.position),_=.02,A=.005;p.inputState.pinching&&y>_+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=_-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(g.matrix.fromArray(u.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,u.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(u.linearVelocity)):g.hasLinearVelocity=!1,u.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(u.angularVelocity)):g.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(IS)))}return h!==null&&(h.visible=l!==null),g!==null&&(g.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new ko;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class FS extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class zS{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Eh,this.updateRanges=[],this.version=0,this.uuid=ka()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ka()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ka()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new it;class Wc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.applyMatrix4(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.applyNormalMatrix(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.transformDirection(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Bi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Bi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Bi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Bi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),u=Ve(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new Nn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Z0 extends Ps{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xs;const Io=new it,ys=new it,Ss=new it,Ms=new Ee,Fo=new Ee,K0=new je,Rc=new it,zo=new it,Cc=new it,j_=new Ee,Cd=new Ee,Y_=new Ee;class HS extends Bn{constructor(t=new Z0){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new On;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new zS(i,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Wc(r,3,0,!1)),xs.setAttribute("uv",new Wc(r,2,3,!1))}this.geometry=xs,this.material=t,this.center=new Ee(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),K0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ss.z);const r=this.material.rotation;let l,u;r!==0&&(u=Math.cos(r),l=Math.sin(r));const d=this.center;wc(Rc.set(-.5,-.5,0),Ss,d,ys,l,u),wc(zo.set(.5,-.5,0),Ss,d,ys,l,u),wc(Cc.set(.5,.5,0),Ss,d,ys,l,u),j_.set(0,0),Cd.set(1,0),Y_.set(1,1);let h=t.ray.intersectTriangle(Rc,zo,Cc,!1,Io);if(h===null&&(wc(zo.set(-.5,.5,0),Ss,d,ys,l,u),Cd.set(0,1),h=t.ray.intersectTriangle(Rc,Cc,zo,!1,Io),h===null))return;const g=t.ray.origin.distanceTo(Io);g<t.near||g>t.far||i.push({distance:g,point:Io.clone(),uv:hi.getInterpolation(Io,Rc,zo,Cc,j_,Cd,Y_,new Ee),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function wc(o,t,i,r,l,u){Ms.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Fo.x=u*Ms.x-l*Ms.y,Fo.y=l*Ms.x+u*Ms.y):Fo.copy(Ms),o.copy(t),o.x+=Fo.x,o.y+=Fo.y,o.applyMatrix4(K0)}class GS extends Pn{constructor(t=null,i=1,r=1,l,u,d,h,g,p=ii,v=ii,x,y){super(null,d,h,g,p,v,l,u,x,y),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Z_ extends Nn{constructor(t,i,r,l=1){super(t,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bs=new je,K_=new je,Dc=[],Q_=new Er,VS=new je,Ho=new Mn,Go=new Os;class kS extends Mn{constructor(t,i,r){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Z_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,VS)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Er),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,bs),Q_.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(Q_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,bs),Go.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(Go)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=r.length+1,d=t*u+1;for(let h=0;h<r.length;h++)r[h]=l[d+h]}raycast(t,i){const r=this.matrixWorld,l=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(r),t.ray.intersectsSphere(Go)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,bs),K_.multiplyMatrices(r,bs),Ho.matrixWorld=K_,Ho.raycast(t,Dc);for(let d=0,h=Dc.length;d<h;d++){const g=Dc[d];g.instanceId=u,g.object=this,i.push(g)}Dc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Z_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new GS(new Float32Array(l*this.count),l,this.count,Nh,Ii));const u=this.morphTexture.source.data.data;let d=0;for(let p=0;p<r.length;p++)d+=r[p];const h=this.geometry.morphTargetsRelative?1:1-d,g=l*t;u[g]=h,u.set(r,g+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wd=new it,XS=new it,WS=new me;class mr{constructor(t=new it(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=wd.subVectors(r,i).cross(XS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(wd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||WS.getNormalMatrix(t),l=this.coplanarPoint(wd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Os,qS=new Ee(.5,.5),Uc=new it;class Q0{constructor(t=new mr,i=new mr,r=new mr,l=new mr,u=new mr,d=new mr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Fi,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],g=u[2],p=u[3],v=u[4],x=u[5],y=u[6],_=u[7],A=u[8],E=u[9],b=u[10],m=u[11],I=u[12],B=u[13],N=u[14],D=u[15];if(l[0].setComponents(p-d,_-v,m-A,D-I).normalize(),l[1].setComponents(p+d,_+v,m+A,D+I).normalize(),l[2].setComponents(p+h,_+x,m+E,D+B).normalize(),l[3].setComponents(p-h,_-x,m-E,D-B).normalize(),r)l[4].setComponents(g,y,b,N).normalize(),l[5].setComponents(p-g,_-y,m-b,D-N).normalize();else if(l[4].setComponents(p-g,_-y,m-b,D-N).normalize(),i===Fi)l[5].setComponents(p+g,_+y,m+b,D+N).normalize();else if(i===kc)l[5].setComponents(g,y,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){dr.center.set(0,0,0);const i=qS.distanceTo(t.center);return dr.radius=.7071067811865476+i,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Uc.x=l.normal.x>0?t.max.x:t.min.x,Uc.y=l.normal.y>0?t.max.y:t.min.y,Uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sr extends Ps{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qc=new it,jc=new it,J_=new je,Vo=new Fh,Lc=new Os,Dd=new it,$_=new it;class Ko extends Bn{constructor(t=new On,i=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)qc.fromBufferAttribute(i,l-1),jc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=qc.distanceTo(jc);t.setAttribute("lineDistance",new Ti(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Lc.copy(r.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=u,t.ray.intersectsSphere(Lc)===!1)return;J_.copy(l).invert(),Vo.copy(t.ray).applyMatrix4(J_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),g=h*h,p=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const _=Math.max(0,d.start),A=Math.min(v.count,d.start+d.count);for(let E=_,b=A-1;E<b;E+=p){const m=v.getX(E),I=v.getX(E+1),B=Nc(this,t,Vo,g,m,I,E);B&&i.push(B)}if(this.isLineLoop){const E=v.getX(A-1),b=v.getX(_),m=Nc(this,t,Vo,g,E,b,A-1);m&&i.push(m)}}else{const _=Math.max(0,d.start),A=Math.min(y.count,d.start+d.count);for(let E=_,b=A-1;E<b;E+=p){const m=Nc(this,t,Vo,g,E,E+1,E);m&&i.push(m)}if(this.isLineLoop){const E=Nc(this,t,Vo,g,A-1,_,A-1);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Nc(o,t,i,r,l,u,d){const h=o.geometry.attributes.position;if(qc.fromBufferAttribute(h,l),jc.fromBufferAttribute(h,u),i.distanceSqToSegment(qc,jc,Dd,$_)>r)return;Dd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Dd);if(!(p<t.near||p>t.far))return{distance:p,point:$_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class t0 extends Ko{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class jS extends Pn{constructor(t,i,r,l,u,d,h,g,p){super(t,i,r,l,u,d,h,g,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class J0 extends Pn{constructor(t,i,r=Mr,l,u,d,h=ii,g=ii,p,v=jo,x=1){if(v!==jo&&v!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:x};super(y,l,u,d,h,g,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ih(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $0 extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class tl extends On{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),g=Math.floor(l),p=h+1,v=g+1,x=t/h,y=i/g,_=[],A=[],E=[],b=[];for(let m=0;m<v;m++){const I=m*y-d;for(let B=0;B<p;B++){const N=B*x-u;A.push(N,-I,0),E.push(0,0,1),b.push(B/h),b.push(1-m/g)}}for(let m=0;m<g;m++)for(let I=0;I<h;I++){const B=I+p*m,N=I+p*(m+1),D=I+1+p*(m+1),V=I+1+p*m;_.push(B,N,V),_.push(N,D,V)}this.setIndex(_),this.setAttribute("position",new Ti(A,3)),this.setAttribute("normal",new Ti(E,3)),this.setAttribute("uv",new Ti(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.width,t.height,t.widthSegments,t.heightSegments)}}class sa extends On{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const g=Math.min(d+h,Math.PI);let p=0;const v=[],x=new it,y=new it,_=[],A=[],E=[],b=[];for(let m=0;m<=r;m++){const I=[],B=m/r;let N=0;m===0&&d===0?N=.5/i:m===r&&g===Math.PI&&(N=-.5/i);for(let D=0;D<=i;D++){const V=D/i;x.x=-t*Math.cos(l+V*u)*Math.sin(d+B*h),x.y=t*Math.cos(d+B*h),x.z=t*Math.sin(l+V*u)*Math.sin(d+B*h),A.push(x.x,x.y,x.z),y.copy(x).normalize(),E.push(y.x,y.y,y.z),b.push(V+N,1-B),I.push(p++)}v.push(I)}for(let m=0;m<r;m++)for(let I=0;I<i;I++){const B=v[m][I+1],N=v[m][I],D=v[m+1][I],V=v[m+1][I+1];(m!==0||d>0)&&_.push(B,N,V),(m!==r-1||g<Math.PI)&&_.push(N,D,V)}this.setIndex(_),this.setAttribute("position",new Ti(A,3)),this.setAttribute("normal",new Ti(E,3)),this.setAttribute("uv",new Ti(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class YS extends Ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ZS extends Ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tv extends j0{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,g=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class KS extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const e0=new je;class QS{constructor(t,i,r=0,l=1/0){this.ray=new Fh(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return e0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(e0),this}intersectObject(t,i=!0,r=[]){return Ah(t,this,r,i),r.sort(n0),r}intersectObjects(t,i=!0,r=[]){for(let l=0,u=t.length;l<u;l++)Ah(t[l],this,r,i);return r.sort(n0),r}}function n0(o,t){return o.distance-t.distance}function Ah(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const u=o.children;for(let d=0,h=u.length;d<h;d++)Ah(u[d],t,i,!0)}}function i0(o,t,i,r){const l=JS(r);switch(i){case I0:return o*t;case Nh:return o*t/l.components*l.byteLength;case Oh:return o*t/l.components*l.byteLength;case z0:return o*t*2/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case F0:return o*t*3/l.components*l.byteLength;case Ei:return o*t*4/l.components*l.byteLength;case Bh:return o*t*4/l.components*l.byteLength;case Ic:case Fc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zc:case Hc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(t,8)/2;case th:case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case yh:case Sh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Mh:case bh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JS(o){switch(o){case la:case N0:return{byteLength:1,components:1};case Wo:case O0:case Qo:return{byteLength:2,components:1};case Uh:case Lh:return{byteLength:2,components:4};case Mr:case Dh:case Ii:return{byteLength:4,components:1};case P0:case B0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ev(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function $S(o){const t=new WeakMap;function i(h,g){const p=h.array,v=h.usage,x=p.byteLength,y=o.createBuffer();o.bindBuffer(g,y),o.bufferData(g,p,v),h.onUploadCallback();let _;if(p instanceof Float32Array)_=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)_=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?_=o.HALF_FLOAT:_=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=o.SHORT;else if(p instanceof Uint32Array)_=o.UNSIGNED_INT;else if(p instanceof Int32Array)_=o.INT;else if(p instanceof Int8Array)_=o.BYTE;else if(p instanceof Uint8Array)_=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,g,p){const v=g.array,x=g.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,v);else{x.sort((_,A)=>_.start-A.start);let y=0;for(let _=1;_<x.length;_++){const A=x[y],E=x[_];E.start<=A.start+A.count+1?A.count=Math.max(A.count,E.start+E.count-A.start):(++y,x[y]=E)}x.length=y+1;for(let _=0,A=x.length;_<A;_++){const E=x[_];o.bufferSubData(p,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=t.get(h);g&&(o.deleteBuffer(g.buffer),t.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,g));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,g),p.version=h.version}}return{get:l,remove:u,update:d}}var tM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
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
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
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
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lM=`#ifdef USE_BATCHING
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
#endif`,cM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hM=`#ifdef USE_IRIDESCENCE
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
#endif`,pM=`#ifdef USE_BUMPMAP
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bM=`#define PI 3.141592653589793
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
#endif`,TM=`vec3 transformedNormal = objectNormal;
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
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DM="gl_FragColor = linearToOutputTexel( gl_FragColor );",UM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GM=`#ifdef USE_GRADIENTMAP
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
}`,VM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WM=`uniform bool receiveShadow;
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
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,jM=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QM=`PhysicalMaterial material;
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
#endif`,JM=`struct PhysicalMaterial {
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
}`,$M=`
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
#endif`,tb=`#if defined( RE_IndirectDiffuse )
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
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cb=`#if defined( USE_POINTS_UV )
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
#endif`,ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
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
#endif`,gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mb=`#ifdef USE_NORMALMAP
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
#endif`,bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fb=`float getShadowMask() {
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
}`,zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hb=`#ifdef USE_SKINNING
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
#endif`,Gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vb=`#ifdef USE_SKINNING
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
#endif`,kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jb=`#ifdef USE_TRANSMISSION
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
#endif`,Yb=`#ifdef USE_TRANSMISSION
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tE=`uniform sampler2D t2D;
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
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`#include <common>
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
}`,sE=`#if DEPTH_PACKING == 3200
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
}`,oE=`#define DISTANCE
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
}`,lE=`#define DISTANCE
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`uniform float scale;
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
}`,dE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,pE=`uniform vec3 diffuse;
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
}`,mE=`#define LAMBERT
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
}`,gE=`#define LAMBERT
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
}`,_E=`#define MATCAP
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
}`,vE=`#define MATCAP
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
}`,xE=`#define NORMAL
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
}`,yE=`#define NORMAL
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
}`,SE=`#define PHONG
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
}`,ME=`#define PHONG
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
}`,bE=`#define STANDARD
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
}`,EE=`#define STANDARD
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
}`,TE=`#define TOON
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
}`,AE=`#define TOON
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
}`,RE=`uniform float size;
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
}`,CE=`uniform vec3 diffuse;
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
}`,wE=`#include <common>
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
}`,DE=`uniform vec3 color;
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
}`,UE=`uniform float rotation;
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
}`,LE=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:tM,alphahash_pars_fragment:eM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:aM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:oM,batching_pars_vertex:lM,batching_vertex:cM,begin_vertex:uM,beginnormal_vertex:fM,bsdfs:dM,iridescence_fragment:hM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:_M,clipping_planes_vertex:vM,color_fragment:xM,color_pars_fragment:yM,color_pars_vertex:SM,color_vertex:MM,common:bM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:TM,displacementmap_pars_vertex:AM,displacementmap_vertex:RM,emissivemap_fragment:CM,emissivemap_pars_fragment:wM,colorspace_fragment:DM,colorspace_pars_fragment:UM,envmap_fragment:LM,envmap_common_pars_fragment:NM,envmap_pars_fragment:OM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:qM,envmap_vertex:BM,fog_vertex:IM,fog_pars_vertex:FM,fog_fragment:zM,fog_pars_fragment:HM,gradientmap_pars_fragment:GM,lightmap_pars_fragment:VM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:XM,lights_pars_begin:WM,lights_toon_fragment:jM,lights_toon_pars_fragment:YM,lights_phong_fragment:ZM,lights_phong_pars_fragment:KM,lights_physical_fragment:QM,lights_physical_pars_fragment:JM,lights_fragment_begin:$M,lights_fragment_maps:tb,lights_fragment_end:eb,logdepthbuf_fragment:nb,logdepthbuf_pars_fragment:ib,logdepthbuf_pars_vertex:ab,logdepthbuf_vertex:rb,map_fragment:sb,map_pars_fragment:ob,map_particle_fragment:lb,map_particle_pars_fragment:cb,metalnessmap_fragment:ub,metalnessmap_pars_fragment:fb,morphinstance_vertex:db,morphcolor_vertex:hb,morphnormal_vertex:pb,morphtarget_pars_vertex:mb,morphtarget_vertex:gb,normal_fragment_begin:_b,normal_fragment_maps:vb,normal_pars_fragment:xb,normal_pars_vertex:yb,normal_vertex:Sb,normalmap_pars_fragment:Mb,clearcoat_normal_fragment_begin:bb,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:Tb,iridescence_pars_fragment:Ab,opaque_fragment:Rb,packing:Cb,premultiplied_alpha_fragment:wb,project_vertex:Db,dithering_fragment:Ub,dithering_pars_fragment:Lb,roughnessmap_fragment:Nb,roughnessmap_pars_fragment:Ob,shadowmap_pars_fragment:Pb,shadowmap_pars_vertex:Bb,shadowmap_vertex:Ib,shadowmask_pars_fragment:Fb,skinbase_vertex:zb,skinning_pars_vertex:Hb,skinning_vertex:Gb,skinnormal_vertex:Vb,specularmap_fragment:kb,specularmap_pars_fragment:Xb,tonemapping_fragment:Wb,tonemapping_pars_fragment:qb,transmission_fragment:jb,transmission_pars_fragment:Yb,uv_pars_fragment:Zb,uv_pars_vertex:Kb,uv_vertex:Qb,worldpos_vertex:Jb,background_vert:$b,background_frag:tE,backgroundCube_vert:eE,backgroundCube_frag:nE,cube_vert:iE,cube_frag:aE,depth_vert:rE,depth_frag:sE,distanceRGBA_vert:oE,distanceRGBA_frag:lE,equirect_vert:cE,equirect_frag:uE,linedashed_vert:fE,linedashed_frag:dE,meshbasic_vert:hE,meshbasic_frag:pE,meshlambert_vert:mE,meshlambert_frag:gE,meshmatcap_vert:_E,meshmatcap_frag:vE,meshnormal_vert:xE,meshnormal_frag:yE,meshphong_vert:SE,meshphong_frag:ME,meshphysical_vert:bE,meshphysical_frag:EE,meshtoon_vert:TE,meshtoon_frag:AE,points_vert:RE,points_frag:CE,shadow_vert:wE,shadow_frag:DE,sprite_vert:UE,sprite_frag:LE},Ht={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Oi={basic:{uniforms:Gn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Gn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Gn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Gn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Gn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Gn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Gn([Ht.points,Ht.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Gn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Gn([Ht.common,Ht.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Gn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Gn([Ht.sprite,Ht.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Gn([Ht.common,Ht.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Gn([Ht.lights,Ht.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Oi.physical={uniforms:Gn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Oc={r:0,b:0,g:0},hr=new ca,NE=new je;function OE(o,t,i,r,l,u,d){const h=new he(0);let g=u===!0?0:1,p,v,x=null,y=0,_=null;function A(B){let N=B.isScene===!0?B.background:null;return N&&N.isTexture&&(N=(B.backgroundBlurriness>0?i:t).get(N)),N}function E(B){let N=!1;const D=A(B);D===null?m(h,g):D&&D.isColor&&(m(D,1),N=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,d):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(B,N){const D=A(N);D&&(D.isCubeTexture||D.mapping===Yc)?(v===void 0&&(v=new Mn(new $o(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Ls(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(V,F,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),hr.copy(N.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),v.material.uniforms.envMap.value=D,v.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(NE.makeRotationFromEuler(hr)),v.material.toneMapped=De.getTransfer(D.colorSpace)!==Ge,(x!==D||y!==D.version||_!==o.toneMapping)&&(v.material.needsUpdate=!0,x=D,y=D.version,_=o.toneMapping),v.layers.enableAll(),B.unshift(v,v.geometry,v.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Mn(new tl(2,2),new Wa({name:"BackgroundMaterial",uniforms:Ls(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=De.getTransfer(D.colorSpace)!==Ge,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||y!==D.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,x=D,y=D.version,_=o.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function m(B,N){B.getRGB(Oc,q0(o)),r.buffers.color.setClear(Oc.r,Oc.g,Oc.b,N,d)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(B,N=1){h.set(B),g=N,m(h,g)},getClearAlpha:function(){return g},setClearAlpha:function(B){g=B,m(h,g)},render:E,addToRenderList:b,dispose:I}}function PE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,d=!1;function h(L,q,ut,mt,vt){let ct=!1;const H=x(mt,ut,q);u!==H&&(u=H,p(u.object)),ct=_(L,mt,ut,vt),ct&&A(L,mt,ut,vt),vt!==null&&t.update(vt,o.ELEMENT_ARRAY_BUFFER),(ct||d)&&(d=!1,N(L,q,ut,mt),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function g(){return o.createVertexArray()}function p(L){return o.bindVertexArray(L)}function v(L){return o.deleteVertexArray(L)}function x(L,q,ut){const mt=ut.wireframe===!0;let vt=r[L.id];vt===void 0&&(vt={},r[L.id]=vt);let ct=vt[q.id];ct===void 0&&(ct={},vt[q.id]=ct);let H=ct[mt];return H===void 0&&(H=y(g()),ct[mt]=H),H}function y(L){const q=[],ut=[],mt=[];for(let vt=0;vt<i;vt++)q[vt]=0,ut[vt]=0,mt[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ut,attributeDivisors:mt,object:L,attributes:{},index:null}}function _(L,q,ut,mt){const vt=u.attributes,ct=q.attributes;let H=0;const nt=ut.getAttributes();for(const K in nt)if(nt[K].location>=0){const O=vt[K];let at=ct[K];if(at===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(at=L.instanceColor)),O===void 0||O.attribute!==at||at&&O.data!==at.data)return!0;H++}return u.attributesNum!==H||u.index!==mt}function A(L,q,ut,mt){const vt={},ct=q.attributes;let H=0;const nt=ut.getAttributes();for(const K in nt)if(nt[K].location>=0){let O=ct[K];O===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));const at={};at.attribute=O,O&&O.data&&(at.data=O.data),vt[K]=at,H++}u.attributes=vt,u.attributesNum=H,u.index=mt}function E(){const L=u.newAttributes;for(let q=0,ut=L.length;q<ut;q++)L[q]=0}function b(L){m(L,0)}function m(L,q){const ut=u.newAttributes,mt=u.enabledAttributes,vt=u.attributeDivisors;ut[L]=1,mt[L]===0&&(o.enableVertexAttribArray(L),mt[L]=1),vt[L]!==q&&(o.vertexAttribDivisor(L,q),vt[L]=q)}function I(){const L=u.newAttributes,q=u.enabledAttributes;for(let ut=0,mt=q.length;ut<mt;ut++)q[ut]!==L[ut]&&(o.disableVertexAttribArray(ut),q[ut]=0)}function B(L,q,ut,mt,vt,ct,H){H===!0?o.vertexAttribIPointer(L,q,ut,vt,ct):o.vertexAttribPointer(L,q,ut,mt,vt,ct)}function N(L,q,ut,mt){E();const vt=mt.attributes,ct=ut.getAttributes(),H=q.defaultAttributeValues;for(const nt in ct){const K=ct[nt];if(K.location>=0){let Tt=vt[nt];if(Tt===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(Tt=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(Tt=L.instanceColor)),Tt!==void 0){const O=Tt.normalized,at=Tt.itemSize,Et=t.get(Tt);if(Et===void 0)continue;const At=Et.buffer,It=Et.type,Wt=Et.bytesPerElement,rt=It===o.INT||It===o.UNSIGNED_INT||Tt.gpuType===Dh;if(Tt.isInterleavedBufferAttribute){const St=Tt.data,Pt=St.stride,$t=Tt.offset;if(St.isInstancedInterleavedBuffer){for(let Qt=0;Qt<K.locationSize;Qt++)m(K.location+Qt,St.meshPerAttribute);L.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Qt=0;Qt<K.locationSize;Qt++)b(K.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Qt=0;Qt<K.locationSize;Qt++)B(K.location+Qt,at/K.locationSize,It,O,Pt*Wt,($t+at/K.locationSize*Qt)*Wt,rt)}else{if(Tt.isInstancedBufferAttribute){for(let St=0;St<K.locationSize;St++)m(K.location+St,Tt.meshPerAttribute);L.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let St=0;St<K.locationSize;St++)b(K.location+St);o.bindBuffer(o.ARRAY_BUFFER,At);for(let St=0;St<K.locationSize;St++)B(K.location+St,at/K.locationSize,It,O,at*Wt,at/K.locationSize*St*Wt,rt)}}else if(H!==void 0){const O=H[nt];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(K.location,O);break;case 3:o.vertexAttrib3fv(K.location,O);break;case 4:o.vertexAttrib4fv(K.location,O);break;default:o.vertexAttrib1fv(K.location,O)}}}}I()}function D(){$();for(const L in r){const q=r[L];for(const ut in q){const mt=q[ut];for(const vt in mt)v(mt[vt].object),delete mt[vt];delete q[ut]}delete r[L]}}function V(L){if(r[L.id]===void 0)return;const q=r[L.id];for(const ut in q){const mt=q[ut];for(const vt in mt)v(mt[vt].object),delete mt[vt];delete q[ut]}delete r[L.id]}function F(L){for(const q in r){const ut=r[q];if(ut[L.id]===void 0)continue;const mt=ut[L.id];for(const vt in mt)v(mt[vt].object),delete mt[vt];delete ut[L.id]}}function $(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:V,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:b,disableUnusedAttributes:I}}function BE(o,t,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,x){x!==0&&(o.drawArraysInstanced(r,p,v,x),i.update(v,r,x))}function h(p,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,x);let _=0;for(let A=0;A<x;A++)_+=v[A];i.update(_,r,1)}function g(p,v,x,y){if(x===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let A=0;A<p.length;A++)d(p[A],v[A],y[A]);else{_.multiDrawArraysInstancedWEBGL(r,p,0,v,0,y,0,x);let A=0;for(let E=0;E<x;E++)A+=v[E]*y[E];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=g}function IE(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ei&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const $=F===Qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==la&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!$)}function g(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=g(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),_=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),m=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=A>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:_,maxVertexTextures:A,maxTextureSize:E,maxCubemapSize:b,maxAttributes:m,maxVertexUniforms:I,maxVaryings:B,maxFragmentUniforms:N,vertexTextures:D,maxSamples:V}}function FE(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new mr,h=new me,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const _=x.length!==0||y||r!==0||l;return l=y,r=x.length,_},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=v(x,y,0)},this.setState=function(x,y,_){const A=x.clippingPlanes,E=x.clipIntersection,b=x.clipShadows,m=o.get(x);if(!l||A===null||A.length===0||u&&!b)u?v(null):p();else{const I=u?0:r,B=I*4;let N=m.clippingState||null;g.value=N,N=v(A,y,B,_);for(let D=0;D!==B;++D)N[D]=i[D];m.clippingState=N,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(x,y,_,A){const E=x!==null?x.length:0;let b=null;if(E!==0){if(b=g.value,A!==!0||b===null){const m=_+E*4,I=y.matrixWorldInverse;h.getNormalMatrix(I),(b===null||b.length<m)&&(b=new Float32Array(m));for(let B=0,N=_;B!==E;++B,N+=4)d.copy(x[B]).applyMatrix4(I,h),d.normal.toArray(b,N),b[N+3]=d.constant}g.value=b,g.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,b}}function zE(o){let t=new WeakMap;function i(d,h){return h===qd?d.mapping=ws:h===jd&&(d.mapping=Ds),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===qd||h===jd)if(t.has(d)){const g=t.get(d).texture;return i(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const p=new BS(g.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ts=4,a0=[.125,.215,.35,.446,.526,.582],vr=20,Ud=new tv,r0=new he;let Ld=null,Nd=0,Od=0,Pd=!1;const gr=(1+Math.sqrt(5))/2,Es=1/gr,s0=[new it(-gr,Es,0),new it(gr,Es,0),new it(-Es,0,gr),new it(Es,0,gr),new it(0,gr,-Es),new it(0,gr,Es),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],HE=new it;class o0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=HE}=u;Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,r,l,g,h),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ld,Nd,Od),this._renderer.xr.enabled=Pd,t.scissorTest=!1,Pc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ws||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Qo,format:Ei,colorSpace:Us,depthBuffer:!1},l=l0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GE(u)),this._blurMaterial=VE(u,t,i)}return l}_compileMaterial(t){const i=new Mn(this._lodPlanes[0],t);this._renderer.compile(i,Ud)}_sceneToCubeUV(t,i,r,l,u){const g=new Mi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,_=x.toneMapping;x.getClearColor(r0),x.toneMapping=Va,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null));const E=new Ni({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),b=new Mn(new $o,E);let m=!1;const I=t.background;I?I.isColor&&(E.color.copy(I),t.background=null,m=!0):(E.color.copy(r0),m=!0);for(let B=0;B<6;B++){const N=B%3;N===0?(g.up.set(0,p[B],0),g.position.set(u.x,u.y,u.z),g.lookAt(u.x+v[B],u.y,u.z)):N===1?(g.up.set(0,0,p[B]),g.position.set(u.x,u.y,u.z),g.lookAt(u.x,u.y+v[B],u.z)):(g.up.set(0,p[B],0),g.position.set(u.x,u.y,u.z),g.lookAt(u.x,u.y,u.z+v[B]));const D=this._cubeSize;Pc(l,N*D,B>2?D:0,D,D),x.setRenderTarget(l),m&&x.render(b,g),x.render(t,g)}b.geometry.dispose(),b.material.dispose(),x.toneMapping=_,x.autoClear=y,t.background=I}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ws||t.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c0());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Mn(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const g=this._cubeSize;Pc(i,0,0,3*g,2*g),r.setRenderTarget(i),r.render(d,Ud)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=s0[(l-u-1)%s0.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const g=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Mn(this._lodPlanes[l],p),y=p.uniforms,_=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*_):2*Math.PI/(2*vr-1),E=u/A,b=isFinite(u)?1+Math.floor(v*E):vr;b>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${vr}`);const m=[];let I=0;for(let F=0;F<vr;++F){const $=F/E,w=Math.exp(-$*$/2);m.push(w),F===0?I+=w:F<b&&(I+=2*w)}for(let F=0;F<m.length;F++)m[F]=m[F]/I;y.envMap.value=t.texture,y.samples.value=b,y.weights.value=m,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:B}=this;y.dTheta.value=A,y.mipInt.value=B-r;const N=this._sizeLods[l],D=3*N*(l>B-Ts?l-B+Ts:0),V=4*(this._cubeSize-N);Pc(i,D,V,3*N,2*N),g.setRenderTarget(i),g.render(x,Ud)}}function GE(o){const t=[],i=[],r=[];let l=o;const u=o-Ts+1+a0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let g=1/h;d>o-Ts?g=a0[d-o+Ts-1]:d===0&&(g=0),r.push(g);const p=1/(h-2),v=-p,x=1+p,y=[v,v,x,v,x,x,v,v,x,x,v,x],_=6,A=6,E=3,b=2,m=1,I=new Float32Array(E*A*_),B=new Float32Array(b*A*_),N=new Float32Array(m*A*_);for(let V=0;V<_;V++){const F=V%3*2/3-1,$=V>2?0:-1,w=[F,$,0,F+2/3,$,0,F+2/3,$+1,0,F,$,0,F+2/3,$+1,0,F,$+1,0];I.set(w,E*A*V),B.set(y,b*A*V);const L=[V,V,V,V,V,V];N.set(L,m*A*V)}const D=new On;D.setAttribute("position",new Nn(I,E)),D.setAttribute("uv",new Nn(B,b)),D.setAttribute("faceIndex",new Nn(N,m)),t.push(D),l>Ts&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function l0(o,t,i){const r=new br(o,t,i);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function VE(o,t,i){const r=new Float32Array(vr),l=new it(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function c0(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function u0(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Hh(){return`

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
	`}function kE(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const g=h.mapping,p=g===qd||g===jd,v=g===ws||g===Ds;if(p||v){let x=t.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new o0(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const _=h.image;return p&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new o0(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let g=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&g++;return g===p}function u(h){const g=h.target;g.removeEventListener("dispose",u);const p=t.get(g);p!==void 0&&(t.delete(g),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function XE(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Zo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function WE(o,t,i,r){const l={},u=new WeakMap;function d(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const A in y.attributes)t.remove(y.attributes[A]);y.removeEventListener("dispose",d),delete l[y.id];const _=u.get(y);_&&(t.remove(_),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function g(x){const y=x.attributes;for(const _ in y)t.update(y[_],o.ARRAY_BUFFER)}function p(x){const y=[],_=x.index,A=x.attributes.position;let E=0;if(_!==null){const I=_.array;E=_.version;for(let B=0,N=I.length;B<N;B+=3){const D=I[B+0],V=I[B+1],F=I[B+2];y.push(D,V,V,F,F,D)}}else if(A!==void 0){const I=A.array;E=A.version;for(let B=0,N=I.length/3-1;B<N;B+=3){const D=B+0,V=B+1,F=B+2;y.push(D,V,V,F,F,D)}}else return;const b=new(G0(y)?W0:X0)(y,1);b.version=E;const m=u.get(x);m&&t.remove(m),u.set(x,b)}function v(x){const y=u.get(x);if(y){const _=x.index;_!==null&&y.version<_.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:g,getWireframeAttribute:v}}function qE(o,t,i){let r;function l(y){r=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function g(y,_){o.drawElements(r,_,u,y*d),i.update(_,r,1)}function p(y,_,A){A!==0&&(o.drawElementsInstanced(r,_,u,y*d,A),i.update(_,r,A))}function v(y,_,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,u,y,0,A);let b=0;for(let m=0;m<A;m++)b+=_[m];i.update(b,r,1)}function x(y,_,A,E){if(A===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let m=0;m<y.length;m++)p(y[m]/d,_[m],E[m]);else{b.multiDrawElementsInstancedWEBGL(r,_,0,u,y,0,E,0,A);let m=0;for(let I=0;I<A;I++)m+=_[I]*E[I];i.update(m,r,1)}}this.setMode=l,this.setIndex=h,this.render=g,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function jE(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function YE(o,t,i){const r=new WeakMap,l=new rn;function u(d,h,g){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let y=r.get(h);if(y===void 0||y.count!==x){let w=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",w)};y!==void 0&&y.texture.dispose();const _=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],m=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let B=0;_===!0&&(B=1),A===!0&&(B=2),E===!0&&(B=3);let N=h.attributes.position.count*B,D=1;N>t.maxTextureSize&&(D=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const V=new Float32Array(N*D*4*x),F=new V0(V,N,D,x);F.type=Ii,F.needsUpdate=!0;const $=B*4;for(let L=0;L<x;L++){const q=b[L],ut=m[L],mt=I[L],vt=N*D*4*L;for(let ct=0;ct<q.count;ct++){const H=ct*$;_===!0&&(l.fromBufferAttribute(q,ct),V[vt+H+0]=l.x,V[vt+H+1]=l.y,V[vt+H+2]=l.z,V[vt+H+3]=0),A===!0&&(l.fromBufferAttribute(ut,ct),V[vt+H+4]=l.x,V[vt+H+5]=l.y,V[vt+H+6]=l.z,V[vt+H+7]=0),E===!0&&(l.fromBufferAttribute(mt,ct),V[vt+H+8]=l.x,V[vt+H+9]=l.y,V[vt+H+10]=l.z,V[vt+H+11]=mt.itemSize===4?l.w:1)}}y={count:x,texture:F,size:new Ee(N,D)},r.set(h,y),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let _=0;for(let E=0;E<p.length;E++)_+=p[E];const A=h.morphTargetsRelative?1:1-_;g.getUniforms().setValue(o,"morphTargetBaseInfluence",A),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function ZE(o,t,i,r){let l=new WeakMap;function u(g){const p=r.render.frame,v=g.geometry,x=t.get(g,v);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),g.isInstancedMesh&&(g.hasEventListener("dispose",h)===!1&&g.addEventListener("dispose",h),l.get(g)!==p&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),l.set(g,p))),g.isSkinnedMesh){const y=g.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function d(){l=new WeakMap}function h(g){const p=g.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const nv=new Pn,f0=new J0(1,1),iv=new V0,av=new xS,rv=new Y0,d0=[],h0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);function Bs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=d0[l];if(u===void 0&&(u=new Float32Array(l),d0[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function pn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function mn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Zc(o,t){let i=h0[t];i===void 0&&(i=new Int32Array(t),h0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function KE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function QE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2fv(this.addr,t),mn(i,t)}}function JE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;o.uniform3fv(this.addr,t),mn(i,t)}}function $E(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4fv(this.addr,t),mn(i,t)}}function tT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;g0.set(r),o.uniformMatrix2fv(this.addr,!1,g0),mn(i,r)}}function eT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;m0.set(r),o.uniformMatrix3fv(this.addr,!1,m0),mn(i,r)}}function nT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;p0.set(r),o.uniformMatrix4fv(this.addr,!1,p0),mn(i,r)}}function iT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2iv(this.addr,t),mn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3iv(this.addr,t),mn(i,t)}}function sT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4iv(this.addr,t),mn(i,t)}}function oT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2uiv(this.addr,t),mn(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3uiv(this.addr,t),mn(i,t)}}function uT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4uiv(this.addr,t),mn(i,t)}}function fT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(f0.compareFunction=H0,u=f0):u=nv,i.setTexture2D(t||u,l)}function dT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||av,l)}function hT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||rv,l)}function pT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||iv,l)}function mT(o){switch(o){case 5126:return KE;case 35664:return QE;case 35665:return JE;case 35666:return $E;case 35674:return tT;case 35675:return eT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return aT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return oT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}function gT(o,t){o.uniform1fv(this.addr,t)}function _T(o,t){const i=Bs(t,this.size,2);o.uniform2fv(this.addr,i)}function vT(o,t){const i=Bs(t,this.size,3);o.uniform3fv(this.addr,i)}function xT(o,t){const i=Bs(t,this.size,4);o.uniform4fv(this.addr,i)}function yT(o,t){const i=Bs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ST(o,t){const i=Bs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function MT(o,t){const i=Bs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function bT(o,t){o.uniform1iv(this.addr,t)}function ET(o,t){o.uniform2iv(this.addr,t)}function TT(o,t){o.uniform3iv(this.addr,t)}function AT(o,t){o.uniform4iv(this.addr,t)}function RT(o,t){o.uniform1uiv(this.addr,t)}function CT(o,t){o.uniform2uiv(this.addr,t)}function wT(o,t){o.uniform3uiv(this.addr,t)}function DT(o,t){o.uniform4uiv(this.addr,t)}function UT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||nv,u[d])}function LT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||av,u[d])}function NT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||rv,u[d])}function OT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||iv,u[d])}function PT(o){switch(o){case 5126:return gT;case 35664:return _T;case 35665:return vT;case 35666:return xT;case 35674:return yT;case 35675:return ST;case 35676:return MT;case 5124:case 35670:return bT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return RT;case 36294:return CT;case 36295:return wT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return OT}}class BT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=mT(i.type)}}class IT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PT(i.type)}}class FT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function _0(o,t){o.seq.push(t),o.map[t.id]=t}function zT(o,t,i){const r=o.name,l=r.length;for(Bd.lastIndex=0;;){const u=Bd.exec(r),d=Bd.lastIndex;let h=u[1];const g=u[2]==="]",p=u[3];if(g&&(h=h|0),p===void 0||p==="["&&d+2===l){_0(i,p===void 0?new BT(h,o,t):new IT(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new FT(h),_0(i,x)),i=x}}}class Gc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);zT(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],g=r[h.id];g.needsUpdate!==!1&&h.setValue(t,g.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function v0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const HT=37297;let GT=0;function VT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const x0=new me;function kT(o){De._getMatrix(x0,De.workingColorSpace,o);const t=`mat3( ${x0.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Vc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function y0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+VT(o.getShaderSource(t),h)}else return u}function XT(o,t){const i=kT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function WT(o,t){let i;switch(t){case qy:i="Linear";break;case jy:i="Reinhard";break;case Yy:i="Cineon";break;case Zy:i="ACESFilmic";break;case Qy:i="AgX";break;case Jy:i="Neutral";break;case Ky:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new it;function qT(){De.getLuminanceCoefficients(Bc);const o=Bc.x.toFixed(4),t=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function YT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function ZT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Xo(o){return o!==""}function S0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function M0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const KT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(KT,JT)}const QT=new Map;function JT(o,t){let i=ve[t];if(i===void 0){const r=QT.get(t);if(r!==void 0)i=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Rh(i)}const $T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b0(o){return o.replace($T,t1)}function t1(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function E0(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function e1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===D0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ty?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function n1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ws:case Ds:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i1(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function a1(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case U0:t="ENVMAP_BLENDING_MULTIPLY";break;case Xy:t="ENVMAP_BLENDING_MIX";break;case Wy:t="ENVMAP_BLENDING_ADD";break}return t}function r1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function s1(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const g=e1(i),p=n1(i),v=i1(i),x=a1(i),y=r1(i),_=jT(i),A=YT(u),E=l.createProgram();let b,m,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Xo).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Xo).join(`
`),m.length>0&&(m+=`
`)):(b=[E0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),m=[E0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?ve.tonemapping_pars_fragment:"",i.toneMapping!==Va?WT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,XT("linearToOutputTexel",i.outputColorSpace),qT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),d=Rh(d),d=S0(d,i),d=M0(d,i),h=Rh(h),h=S0(h,i),h=M0(h,i),d=b0(d),h=b0(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,b=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",i.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const B=I+b+d,N=I+m+h,D=v0(l,l.VERTEX_SHADER,B),V=v0(l,l.FRAGMENT_SHADER,N);l.attachShader(E,D),l.attachShader(E,V),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function F(q){if(o.debug.checkShaderErrors){const ut=l.getProgramInfoLog(E)||"",mt=l.getShaderInfoLog(D)||"",vt=l.getShaderInfoLog(V)||"",ct=ut.trim(),H=mt.trim(),nt=vt.trim();let K=!0,Tt=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,E,D,V);else{const O=y0(l,D,"vertex"),at=y0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+ct+`
`+O+`
`+at)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(H===""||nt==="")&&(Tt=!1);Tt&&(q.diagnostics={runnable:K,programLog:ct,vertexShader:{log:H,prefix:b},fragmentShader:{log:nt,prefix:m}})}l.deleteShader(D),l.deleteShader(V),$=new Gc(l,E),w=ZT(l,E)}let $;this.getUniforms=function(){return $===void 0&&F(this),$};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(E,HT)),L},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GT++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=V,this}let o1=0;class l1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new c1(t),i.set(t,r)),r}}class c1{constructor(t){this.id=o1++,this.code=t,this.usedTimes=0}}function u1(o,t,i,r,l,u,d){const h=new zh,g=new l1,p=new Set,v=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let _=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,L,q,ut,mt){const vt=ut.fog,ct=mt.geometry,H=w.isMeshStandardMaterial?ut.environment:null,nt=(w.isMeshStandardMaterial?i:t).get(w.envMap||H),K=nt&&nt.mapping===Yc?nt.image.height:null,Tt=A[w.type];w.precision!==null&&(_=l.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const O=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,at=O!==void 0?O.length:0;let Et=0;ct.morphAttributes.position!==void 0&&(Et=1),ct.morphAttributes.normal!==void 0&&(Et=2),ct.morphAttributes.color!==void 0&&(Et=3);let At,It,Wt,rt;if(Tt){const Re=Oi[Tt];At=Re.vertexShader,It=Re.fragmentShader}else At=w.vertexShader,It=w.fragmentShader,g.update(w),Wt=g.getVertexShaderID(w),rt=g.getFragmentShaderID(w);const St=o.getRenderTarget(),Pt=o.state.buffers.depth.getReversed(),$t=mt.isInstancedMesh===!0,Qt=mt.isBatchedMesh===!0,de=!!w.map,Ke=!!w.matcap,k=!!nt,Le=!!w.aoMap,ue=!!w.lightMap,ie=!!w.bumpMap,Gt=!!w.normalMap,Ne=!!w.displacementMap,jt=!!w.emissiveMap,fe=!!w.metalnessMap,P=!!w.roughnessMap,ot=w.anisotropy>0,T=w.clearcoat>0,S=w.dispersion>0,U=w.iridescence>0,W=w.sheen>0,Z=w.transmission>0,X=ot&&!!w.anisotropyMap,gt=T&&!!w.clearcoatMap,lt=T&&!!w.clearcoatNormalMap,Rt=T&&!!w.clearcoatRoughnessMap,Ut=U&&!!w.iridescenceMap,_t=U&&!!w.iridescenceThicknessMap,wt=W&&!!w.sheenColorMap,Xt=W&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Lt=!!w.specularColorMap,ae=!!w.specularIntensityMap,Y=Z&&!!w.transmissionMap,Dt=Z&&!!w.thicknessMap,Bt=!!w.gradientMap,kt=!!w.alphaMap,Nt=w.alphaTest>0,bt=!!w.alphaHash,Zt=!!w.extensions;let ce=Va;w.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Oe={shaderID:Tt,shaderType:w.type,shaderName:w.name,vertexShader:At,fragmentShader:It,defines:w.defines,customVertexShaderID:Wt,customFragmentShaderID:rt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:Qt,batchingColor:Qt&&mt._colorsTexture!==null,instancing:$t,instancingColor:$t&&mt.instanceColor!==null,instancingMorph:$t&&mt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Us,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:Ke,envMap:k,envMapMode:k&&nt.mapping,envMapCubeUVHeight:K,aoMap:Le,lightMap:ue,bumpMap:ie,normalMap:Gt,displacementMap:y&&Ne,emissiveMap:jt,normalMapObjectSpace:Gt&&w.normalMapType===iS,normalMapTangentSpace:Gt&&w.normalMapType===nS,metalnessMap:fe,roughnessMap:P,anisotropy:ot,anisotropyMap:X,clearcoat:T,clearcoatMap:gt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Rt,dispersion:S,iridescence:U,iridescenceMap:Ut,iridescenceThicknessMap:_t,sheen:W,sheenColorMap:wt,sheenRoughnessMap:Xt,specularMap:Vt,specularColorMap:Lt,specularIntensityMap:ae,transmission:Z,transmissionMap:Y,thicknessMap:Dt,gradientMap:Bt,opaque:w.transparent===!1&&w.blending===As&&w.alphaToCoverage===!1,alphaMap:kt,alphaTest:Nt,alphaHash:bt,combine:w.combine,mapUv:de&&E(w.map.channel),aoMapUv:Le&&E(w.aoMap.channel),lightMapUv:ue&&E(w.lightMap.channel),bumpMapUv:ie&&E(w.bumpMap.channel),normalMapUv:Gt&&E(w.normalMap.channel),displacementMapUv:Ne&&E(w.displacementMap.channel),emissiveMapUv:jt&&E(w.emissiveMap.channel),metalnessMapUv:fe&&E(w.metalnessMap.channel),roughnessMapUv:P&&E(w.roughnessMap.channel),anisotropyMapUv:X&&E(w.anisotropyMap.channel),clearcoatMapUv:gt&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:lt&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&E(w.sheenRoughnessMap.channel),specularMapUv:Vt&&E(w.specularMap.channel),specularColorMapUv:Lt&&E(w.specularColorMap.channel),specularIntensityMapUv:ae&&E(w.specularIntensityMap.channel),transmissionMapUv:Y&&E(w.transmissionMap.channel),thicknessMapUv:Dt&&E(w.thicknessMap.channel),alphaMapUv:kt&&E(w.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Gt||ot),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:mt.isPoints===!0&&!!ct.attributes.uv&&(de||kt),fog:!!vt,useFog:w.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Pt,skinning:mt.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Et,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&q.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&De.getTransfer(w.map.colorSpace)===Ge,decodeVideoTextureEmissive:jt&&w.emissiveMap.isVideoTexture===!0&&De.getTransfer(w.emissiveMap.colorSpace)===Ge,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Pi,flipSided:w.side===jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function m(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const q in w.defines)L.push(q),L.push(w.defines[q]);return w.isRawShaderMaterial===!1&&(I(L,w),B(L,w),L.push(o.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function I(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function B(w,L){h.disableAll(),L.supportsVertexTextures&&h.enable(0),L.instancing&&h.enable(1),L.instancingColor&&h.enable(2),L.instancingMorph&&h.enable(3),L.matcap&&h.enable(4),L.envMap&&h.enable(5),L.normalMapObjectSpace&&h.enable(6),L.normalMapTangentSpace&&h.enable(7),L.clearcoat&&h.enable(8),L.iridescence&&h.enable(9),L.alphaTest&&h.enable(10),L.vertexColors&&h.enable(11),L.vertexAlphas&&h.enable(12),L.vertexUv1s&&h.enable(13),L.vertexUv2s&&h.enable(14),L.vertexUv3s&&h.enable(15),L.vertexTangents&&h.enable(16),L.anisotropy&&h.enable(17),L.alphaHash&&h.enable(18),L.batching&&h.enable(19),L.dispersion&&h.enable(20),L.batchingColor&&h.enable(21),L.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),w.push(h.mask)}function N(w){const L=A[w.type];let q;if(L){const ut=Oi[L];q=LS.clone(ut.uniforms)}else q=w.uniforms;return q}function D(w,L){let q;for(let ut=0,mt=v.length;ut<mt;ut++){const vt=v[ut];if(vt.cacheKey===L){q=vt,++q.usedTimes;break}}return q===void 0&&(q=new s1(o,L,w,u),v.push(q)),q}function V(w){if(--w.usedTimes===0){const L=v.indexOf(w);v[L]=v[v.length-1],v.pop(),w.destroy()}}function F(w){g.remove(w)}function $(){g.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:N,acquireProgram:D,releaseProgram:V,releaseShaderCache:F,programs:v,dispose:$}}function f1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,g){o.get(d)[h]=g}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function d1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function T0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function A0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(x,y,_,A,E,b){let m=o[t];return m===void 0?(m={id:x.id,object:x,geometry:y,material:_,groupOrder:A,renderOrder:x.renderOrder,z:E,group:b},o[t]=m):(m.id=x.id,m.object=x,m.geometry=y,m.material=_,m.groupOrder=A,m.renderOrder=x.renderOrder,m.z=E,m.group=b),t++,m}function h(x,y,_,A,E,b){const m=d(x,y,_,A,E,b);_.transmission>0?r.push(m):_.transparent===!0?l.push(m):i.push(m)}function g(x,y,_,A,E,b){const m=d(x,y,_,A,E,b);_.transmission>0?r.unshift(m):_.transparent===!0?l.unshift(m):i.unshift(m)}function p(x,y){i.length>1&&i.sort(x||d1),r.length>1&&r.sort(y||T0),l.length>1&&l.sort(y||T0)}function v(){for(let x=t,y=o.length;x<y;x++){const _=o[x];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:g,finish:v,sort:p}}function h1(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new A0,o.set(r,[d])):l>=u.length?(d=new A0,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function p1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new it,color:new he};break;case"SpotLight":i={position:new it,direction:new it,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new he,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new he,groundColor:new he};break;case"RectAreaLight":i={color:new he,position:new it,halfWidth:new it,halfHeight:new it};break}return o[t.id]=i,i}}}function m1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let g1=0;function _1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function v1(o){const t=new p1,i=m1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new it);const l=new it,u=new je,d=new je;function h(p){let v=0,x=0,y=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let _=0,A=0,E=0,b=0,m=0,I=0,B=0,N=0,D=0,V=0,F=0;p.sort(_1);for(let w=0,L=p.length;w<L;w++){const q=p[w],ut=q.color,mt=q.intensity,vt=q.distance,ct=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)v+=ut.r*mt,x+=ut.g*mt,y+=ut.b*mt;else if(q.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(q.sh.coefficients[H],mt);F++}else if(q.isDirectionalLight){const H=t.get(q);if(H.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const nt=q.shadow,K=i.get(q);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=ct,r.directionalShadowMatrix[_]=q.shadow.matrix,I++}r.directional[_]=H,_++}else if(q.isSpotLight){const H=t.get(q);H.position.setFromMatrixPosition(q.matrixWorld),H.color.copy(ut).multiplyScalar(mt),H.distance=vt,H.coneCos=Math.cos(q.angle),H.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),H.decay=q.decay,r.spot[E]=H;const nt=q.shadow;if(q.map&&(r.spotLightMap[D]=q.map,D++,nt.updateMatrices(q),q.castShadow&&V++),r.spotLightMatrix[E]=nt.matrix,q.castShadow){const K=i.get(q);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,r.spotShadow[E]=K,r.spotShadowMap[E]=ct,N++}E++}else if(q.isRectAreaLight){const H=t.get(q);H.color.copy(ut).multiplyScalar(mt),H.halfWidth.set(q.width*.5,0,0),H.halfHeight.set(0,q.height*.5,0),r.rectArea[b]=H,b++}else if(q.isPointLight){const H=t.get(q);if(H.color.copy(q.color).multiplyScalar(q.intensity),H.distance=q.distance,H.decay=q.decay,q.castShadow){const nt=q.shadow,K=i.get(q);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,K.shadowCameraNear=nt.camera.near,K.shadowCameraFar=nt.camera.far,r.pointShadow[A]=K,r.pointShadowMap[A]=ct,r.pointShadowMatrix[A]=q.shadow.matrix,B++}r.point[A]=H,A++}else if(q.isHemisphereLight){const H=t.get(q);H.skyColor.copy(q.color).multiplyScalar(mt),H.groundColor.copy(q.groundColor).multiplyScalar(mt),r.hemi[m]=H,m++}}b>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ht.LTC_FLOAT_1,r.rectAreaLTC2=Ht.LTC_FLOAT_2):(r.rectAreaLTC1=Ht.LTC_HALF_1,r.rectAreaLTC2=Ht.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=y;const $=r.hash;($.directionalLength!==_||$.pointLength!==A||$.spotLength!==E||$.rectAreaLength!==b||$.hemiLength!==m||$.numDirectionalShadows!==I||$.numPointShadows!==B||$.numSpotShadows!==N||$.numSpotMaps!==D||$.numLightProbes!==F)&&(r.directional.length=_,r.spot.length=E,r.rectArea.length=b,r.point.length=A,r.hemi.length=m,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=N+D-V,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=F,$.directionalLength=_,$.pointLength=A,$.spotLength=E,$.rectAreaLength=b,$.hemiLength=m,$.numDirectionalShadows=I,$.numPointShadows=B,$.numSpotShadows=N,$.numSpotMaps=D,$.numLightProbes=F,r.version=g1++)}function g(p,v){let x=0,y=0,_=0,A=0,E=0;const b=v.matrixWorldInverse;for(let m=0,I=p.length;m<I;m++){const B=p[m];if(B.isDirectionalLight){const N=r.directional[x];N.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),x++}else if(B.isSpotLight){const N=r.spot[_];N.position.setFromMatrixPosition(B.matrixWorld),N.position.applyMatrix4(b),N.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),_++}else if(B.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(B.matrixWorld),N.position.applyMatrix4(b),d.identity(),u.copy(B.matrixWorld),u.premultiply(b),d.extractRotation(u),N.halfWidth.set(B.width*.5,0,0),N.halfHeight.set(0,B.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),A++}else if(B.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(B.matrixWorld),N.position.applyMatrix4(b),y++}else if(B.isHemisphereLight){const N=r.hemi[E];N.direction.setFromMatrixPosition(B.matrixWorld),N.direction.transformDirection(b),E++}}}return{setup:h,setupView:g,state:r}}function R0(o){const t=new v1(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){t.setup(i)}function g(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d}}function x1(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new R0(o),t.set(l,[h])):u>=d.length?(h=new R0(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
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
}`;function M1(o,t,i){let r=new Q0;const l=new Ee,u=new Ee,d=new rn,h=new YS({depthPacking:eS}),g=new ZS,p={},v=i.maxTextureSize,x={[Xa]:jn,[jn]:Xa,[Pi]:Pi},y=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:y1,fragmentShader:S1}),_=y.clone();_.defines.HORIZONTAL_PASS=1;const A=new On;A.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Mn(A,y),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D0;let m=this.type;this.render=function(V,F,$){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||V.length===0)return;const w=o.getRenderTarget(),L=o.getActiveCubeFace(),q=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(Ga),ut.buffers.depth.getReversed()===!0?ut.buffers.color.setClear(0,0,0,0):ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const mt=m!==ra&&this.type===ra,vt=m===ra&&this.type!==ra;for(let ct=0,H=V.length;ct<H;ct++){const nt=V[ct],K=nt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const Tt=K.getFrameExtents();if(l.multiply(Tt),u.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/Tt.x),l.x=u.x*Tt.x,K.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/Tt.y),l.y=u.y*Tt.y,K.mapSize.y=u.y)),K.map===null||mt===!0||vt===!0){const at=this.type!==ra?{minFilter:ii,magFilter:ii}:{};K.map!==null&&K.map.dispose(),K.map=new br(l.x,l.y,at),K.map.texture.name=nt.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const O=K.getViewportCount();for(let at=0;at<O;at++){const Et=K.getViewport(at);d.set(u.x*Et.x,u.y*Et.y,u.x*Et.z,u.y*Et.w),ut.viewport(d),K.updateMatrices(nt,at),r=K.getFrustum(),N(F,$,K.camera,nt,this.type)}K.isPointLightShadow!==!0&&this.type===ra&&I(K,$),K.needsUpdate=!1}m=this.type,b.needsUpdate=!1,o.setRenderTarget(w,L,q)};function I(V,F){const $=t.update(E);y.defines.VSM_SAMPLES!==V.blurSamples&&(y.defines.VSM_SAMPLES=V.blurSamples,_.defines.VSM_SAMPLES=V.blurSamples,y.needsUpdate=!0,_.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new br(l.x,l.y)),y.uniforms.shadow_pass.value=V.map.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(F,null,$,y,E,null),_.uniforms.shadow_pass.value=V.mapPass.texture,_.uniforms.resolution.value=V.mapSize,_.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(F,null,$,_,E,null)}function B(V,F,$,w){let L=null;const q=$.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(q!==void 0)L=q;else if(L=$.isPointLight===!0?g:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ut=L.uuid,mt=F.uuid;let vt=p[ut];vt===void 0&&(vt={},p[ut]=vt);let ct=vt[mt];ct===void 0&&(ct=L.clone(),vt[mt]=ct,F.addEventListener("dispose",D)),L=ct}if(L.visible=F.visible,L.wireframe=F.wireframe,w===ra?L.side=F.shadowSide!==null?F.shadowSide:F.side:L.side=F.shadowSide!==null?F.shadowSide:x[F.side],L.alphaMap=F.alphaMap,L.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,L.map=F.map,L.clipShadows=F.clipShadows,L.clippingPlanes=F.clippingPlanes,L.clipIntersection=F.clipIntersection,L.displacementMap=F.displacementMap,L.displacementScale=F.displacementScale,L.displacementBias=F.displacementBias,L.wireframeLinewidth=F.wireframeLinewidth,L.linewidth=F.linewidth,$.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ut=o.properties.get(L);ut.light=$}return L}function N(V,F,$,w,L){if(V.visible===!1)return;if(V.layers.test(F.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&L===ra)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,V.matrixWorld);const mt=t.update(V),vt=V.material;if(Array.isArray(vt)){const ct=mt.groups;for(let H=0,nt=ct.length;H<nt;H++){const K=ct[H],Tt=vt[K.materialIndex];if(Tt&&Tt.visible){const O=B(V,Tt,w,L);V.onBeforeShadow(o,V,F,$,mt,O,K),o.renderBufferDirect($,null,mt,O,V,K),V.onAfterShadow(o,V,F,$,mt,O,K)}}}else if(vt.visible){const ct=B(V,vt,w,L);V.onBeforeShadow(o,V,F,$,mt,ct,null),o.renderBufferDirect($,null,mt,ct,V,null),V.onAfterShadow(o,V,F,$,mt,ct,null)}}const ut=V.children;for(let mt=0,vt=ut.length;mt<vt;mt++)N(ut[mt],F,$,w,L)}function D(V){V.target.removeEventListener("dispose",D);for(const $ in p){const w=p[$],L=V.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}const b1={[zd]:Hd,[Gd]:Xd,[Vd]:Wd,[Cs]:kd,[Hd]:zd,[Xd]:Gd,[Wd]:Vd,[kd]:Cs};function E1(o,t){function i(){let Y=!1;const Dt=new rn;let Bt=null;const kt=new rn(0,0,0,0);return{setMask:function(Nt){Bt!==Nt&&!Y&&(o.colorMask(Nt,Nt,Nt,Nt),Bt=Nt)},setLocked:function(Nt){Y=Nt},setClear:function(Nt,bt,Zt,ce,Oe){Oe===!0&&(Nt*=ce,bt*=ce,Zt*=ce),Dt.set(Nt,bt,Zt,ce),kt.equals(Dt)===!1&&(o.clearColor(Nt,bt,Zt,ce),kt.copy(Dt))},reset:function(){Y=!1,Bt=null,kt.set(-1,0,0,0)}}}function r(){let Y=!1,Dt=!1,Bt=null,kt=null,Nt=null;return{setReversed:function(bt){if(Dt!==bt){const Zt=t.get("EXT_clip_control");bt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Dt=bt;const ce=Nt;Nt=null,this.setClear(ce)}},getReversed:function(){return Dt},setTest:function(bt){bt?St(o.DEPTH_TEST):Pt(o.DEPTH_TEST)},setMask:function(bt){Bt!==bt&&!Y&&(o.depthMask(bt),Bt=bt)},setFunc:function(bt){if(Dt&&(bt=b1[bt]),kt!==bt){switch(bt){case zd:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Gd:o.depthFunc(o.LESS);break;case Cs:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case kd:o.depthFunc(o.GEQUAL);break;case Xd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}kt=bt}},setLocked:function(bt){Y=bt},setClear:function(bt){Nt!==bt&&(Dt&&(bt=1-bt),o.clearDepth(bt),Nt=bt)},reset:function(){Y=!1,Bt=null,kt=null,Nt=null,Dt=!1}}}function l(){let Y=!1,Dt=null,Bt=null,kt=null,Nt=null,bt=null,Zt=null,ce=null,Oe=null;return{setTest:function(Re){Y||(Re?St(o.STENCIL_TEST):Pt(o.STENCIL_TEST))},setMask:function(Re){Dt!==Re&&!Y&&(o.stencilMask(Re),Dt=Re)},setFunc:function(Re,pi,un){(Bt!==Re||kt!==pi||Nt!==un)&&(o.stencilFunc(Re,pi,un),Bt=Re,kt=pi,Nt=un)},setOp:function(Re,pi,un){(bt!==Re||Zt!==pi||ce!==un)&&(o.stencilOp(Re,pi,un),bt=Re,Zt=pi,ce=un)},setLocked:function(Re){Y=Re},setClear:function(Re){Oe!==Re&&(o.clearStencil(Re),Oe=Re)},reset:function(){Y=!1,Dt=null,Bt=null,kt=null,Nt=null,bt=null,Zt=null,ce=null,Oe=null}}}const u=new i,d=new r,h=new l,g=new WeakMap,p=new WeakMap;let v={},x={},y=new WeakMap,_=[],A=null,E=!1,b=null,m=null,I=null,B=null,N=null,D=null,V=null,F=new he(0,0,0),$=0,w=!1,L=null,q=null,ut=null,mt=null,vt=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,nt=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=nt>=1):K.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=nt>=2);let Tt=null,O={};const at=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),At=new rn().fromArray(at),It=new rn().fromArray(Et);function Wt(Y,Dt,Bt,kt){const Nt=new Uint8Array(4),bt=o.createTexture();o.bindTexture(Y,bt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Zt=0;Zt<Bt;Zt++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,kt,0,o.RGBA,o.UNSIGNED_BYTE,Nt):o.texImage2D(Dt+Zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Nt);return bt}const rt={};rt[o.TEXTURE_2D]=Wt(o.TEXTURE_2D,o.TEXTURE_2D,1),rt[o.TEXTURE_CUBE_MAP]=Wt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[o.TEXTURE_2D_ARRAY]=Wt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),rt[o.TEXTURE_3D]=Wt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),St(o.DEPTH_TEST),d.setFunc(Cs),ie(!1),Gt(E_),St(o.CULL_FACE),Le(Ga);function St(Y){v[Y]!==!0&&(o.enable(Y),v[Y]=!0)}function Pt(Y){v[Y]!==!1&&(o.disable(Y),v[Y]=!1)}function $t(Y,Dt){return x[Y]!==Dt?(o.bindFramebuffer(Y,Dt),x[Y]=Dt,Y===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Dt),Y===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Qt(Y,Dt){let Bt=_,kt=!1;if(Y){Bt=y.get(Dt),Bt===void 0&&(Bt=[],y.set(Dt,Bt));const Nt=Y.textures;if(Bt.length!==Nt.length||Bt[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,Zt=Nt.length;bt<Zt;bt++)Bt[bt]=o.COLOR_ATTACHMENT0+bt;Bt.length=Nt.length,kt=!0}}else Bt[0]!==o.BACK&&(Bt[0]=o.BACK,kt=!0);kt&&o.drawBuffers(Bt)}function de(Y){return A!==Y?(o.useProgram(Y),A=Y,!0):!1}const Ke={[_r]:o.FUNC_ADD,[Ry]:o.FUNC_SUBTRACT,[Cy]:o.FUNC_REVERSE_SUBTRACT};Ke[wy]=o.MIN,Ke[Dy]=o.MAX;const k={[Uy]:o.ZERO,[Ly]:o.ONE,[Ny]:o.SRC_COLOR,[Id]:o.SRC_ALPHA,[zy]:o.SRC_ALPHA_SATURATE,[Iy]:o.DST_COLOR,[Py]:o.DST_ALPHA,[Oy]:o.ONE_MINUS_SRC_COLOR,[Fd]:o.ONE_MINUS_SRC_ALPHA,[Fy]:o.ONE_MINUS_DST_COLOR,[By]:o.ONE_MINUS_DST_ALPHA,[Hy]:o.CONSTANT_COLOR,[Gy]:o.ONE_MINUS_CONSTANT_COLOR,[Vy]:o.CONSTANT_ALPHA,[ky]:o.ONE_MINUS_CONSTANT_ALPHA};function Le(Y,Dt,Bt,kt,Nt,bt,Zt,ce,Oe,Re){if(Y===Ga){E===!0&&(Pt(o.BLEND),E=!1);return}if(E===!1&&(St(o.BLEND),E=!0),Y!==Ay){if(Y!==b||Re!==w){if((m!==_r||N!==_r)&&(o.blendEquation(o.FUNC_ADD),m=_r,N=_r),Re)switch(Y){case As:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case T_:o.blendFunc(o.ONE,o.ONE);break;case A_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case R_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case As:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case T_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case A_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}I=null,B=null,D=null,V=null,F.set(0,0,0),$=0,b=Y,w=Re}return}Nt=Nt||Dt,bt=bt||Bt,Zt=Zt||kt,(Dt!==m||Nt!==N)&&(o.blendEquationSeparate(Ke[Dt],Ke[Nt]),m=Dt,N=Nt),(Bt!==I||kt!==B||bt!==D||Zt!==V)&&(o.blendFuncSeparate(k[Bt],k[kt],k[bt],k[Zt]),I=Bt,B=kt,D=bt,V=Zt),(ce.equals(F)===!1||Oe!==$)&&(o.blendColor(ce.r,ce.g,ce.b,Oe),F.copy(ce),$=Oe),b=Y,w=!1}function ue(Y,Dt){Y.side===Pi?Pt(o.CULL_FACE):St(o.CULL_FACE);let Bt=Y.side===jn;Dt&&(Bt=!Bt),ie(Bt),Y.blending===As&&Y.transparent===!1?Le(Ga):Le(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const kt=Y.stencilWrite;h.setTest(kt),kt&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),jt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Pt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ie(Y){L!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),L=Y)}function Gt(Y){Y!==by?(St(o.CULL_FACE),Y!==q&&(Y===E_?o.cullFace(o.BACK):Y===Ey?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pt(o.CULL_FACE),q=Y}function Ne(Y){Y!==ut&&(H&&o.lineWidth(Y),ut=Y)}function jt(Y,Dt,Bt){Y?(St(o.POLYGON_OFFSET_FILL),(mt!==Dt||vt!==Bt)&&(o.polygonOffset(Dt,Bt),mt=Dt,vt=Bt)):Pt(o.POLYGON_OFFSET_FILL)}function fe(Y){Y?St(o.SCISSOR_TEST):Pt(o.SCISSOR_TEST)}function P(Y){Y===void 0&&(Y=o.TEXTURE0+ct-1),Tt!==Y&&(o.activeTexture(Y),Tt=Y)}function ot(Y,Dt,Bt){Bt===void 0&&(Tt===null?Bt=o.TEXTURE0+ct-1:Bt=Tt);let kt=O[Bt];kt===void 0&&(kt={type:void 0,texture:void 0},O[Bt]=kt),(kt.type!==Y||kt.texture!==Dt)&&(Tt!==Bt&&(o.activeTexture(Bt),Tt=Bt),o.bindTexture(Y,Dt||rt[Y]),kt.type=Y,kt.texture=Dt)}function T(){const Y=O[Tt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function S(){try{o.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function U(){try{o.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function W(){try{o.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Z(){try{o.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function X(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function lt(){try{o.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Rt(){try{o.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ut(){try{o.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{o.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function wt(Y){At.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),At.copy(Y))}function Xt(Y){It.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),It.copy(Y))}function Vt(Y,Dt){let Bt=p.get(Dt);Bt===void 0&&(Bt=new WeakMap,p.set(Dt,Bt));let kt=Bt.get(Y);kt===void 0&&(kt=o.getUniformBlockIndex(Dt,Y.name),Bt.set(Y,kt))}function Lt(Y,Dt){const kt=p.get(Dt).get(Y);g.get(Dt)!==kt&&(o.uniformBlockBinding(Dt,kt,Y.__bindingPointIndex),g.set(Dt,kt))}function ae(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Tt=null,O={},x={},y=new WeakMap,_=[],A=null,E=!1,b=null,m=null,I=null,B=null,N=null,D=null,V=null,F=new he(0,0,0),$=0,w=!1,L=null,q=null,ut=null,mt=null,vt=null,At.set(0,0,o.canvas.width,o.canvas.height),It.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:St,disable:Pt,bindFramebuffer:$t,drawBuffers:Qt,useProgram:de,setBlending:Le,setMaterial:ue,setFlipSided:ie,setCullFace:Gt,setLineWidth:Ne,setPolygonOffset:jt,setScissorTest:fe,activeTexture:P,bindTexture:ot,unbindTexture:T,compressedTexImage2D:S,compressedTexImage3D:U,texImage2D:Ut,texImage3D:_t,updateUBOMapping:Vt,uniformBlockBinding:Lt,texStorage2D:lt,texStorage3D:Rt,texSubImage2D:W,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:gt,scissor:wt,viewport:Xt,reset:ae}}function T1(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ee,v=new WeakMap;let x;const y=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(T,S){return _?new OffscreenCanvas(T,S):Xc("canvas")}function E(T,S,U){let W=1;const Z=ot(T);if((Z.width>U||Z.height>U)&&(W=U/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(W*Z.width),gt=Math.floor(W*Z.height);x===void 0&&(x=A(X,gt));const lt=S?A(X,gt):x;return lt.width=X,lt.height=gt,lt.getContext("2d").drawImage(T,0,0,X,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+gt+")."),lt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function b(T){return T.generateMipmaps}function m(T){o.generateMipmap(T)}function I(T){return T.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?o.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function B(T,S,U,W,Z=!1){if(T!==null){if(o[T]!==void 0)return o[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=S;if(S===o.RED&&(U===o.FLOAT&&(X=o.R32F),U===o.HALF_FLOAT&&(X=o.R16F),U===o.UNSIGNED_BYTE&&(X=o.R8)),S===o.RED_INTEGER&&(U===o.UNSIGNED_BYTE&&(X=o.R8UI),U===o.UNSIGNED_SHORT&&(X=o.R16UI),U===o.UNSIGNED_INT&&(X=o.R32UI),U===o.BYTE&&(X=o.R8I),U===o.SHORT&&(X=o.R16I),U===o.INT&&(X=o.R32I)),S===o.RG&&(U===o.FLOAT&&(X=o.RG32F),U===o.HALF_FLOAT&&(X=o.RG16F),U===o.UNSIGNED_BYTE&&(X=o.RG8)),S===o.RG_INTEGER&&(U===o.UNSIGNED_BYTE&&(X=o.RG8UI),U===o.UNSIGNED_SHORT&&(X=o.RG16UI),U===o.UNSIGNED_INT&&(X=o.RG32UI),U===o.BYTE&&(X=o.RG8I),U===o.SHORT&&(X=o.RG16I),U===o.INT&&(X=o.RG32I)),S===o.RGB_INTEGER&&(U===o.UNSIGNED_BYTE&&(X=o.RGB8UI),U===o.UNSIGNED_SHORT&&(X=o.RGB16UI),U===o.UNSIGNED_INT&&(X=o.RGB32UI),U===o.BYTE&&(X=o.RGB8I),U===o.SHORT&&(X=o.RGB16I),U===o.INT&&(X=o.RGB32I)),S===o.RGBA_INTEGER&&(U===o.UNSIGNED_BYTE&&(X=o.RGBA8UI),U===o.UNSIGNED_SHORT&&(X=o.RGBA16UI),U===o.UNSIGNED_INT&&(X=o.RGBA32UI),U===o.BYTE&&(X=o.RGBA8I),U===o.SHORT&&(X=o.RGBA16I),U===o.INT&&(X=o.RGBA32I)),S===o.RGB&&(U===o.UNSIGNED_INT_5_9_9_9_REV&&(X=o.RGB9_E5),U===o.UNSIGNED_INT_10F_11F_11F_REV&&(X=o.R11F_G11F_B10F)),S===o.RGBA){const gt=Z?Vc:De.getTransfer(W);U===o.FLOAT&&(X=o.RGBA32F),U===o.HALF_FLOAT&&(X=o.RGBA16F),U===o.UNSIGNED_BYTE&&(X=gt===Ge?o.SRGB8_ALPHA8:o.RGBA8),U===o.UNSIGNED_SHORT_4_4_4_4&&(X=o.RGBA4),U===o.UNSIGNED_SHORT_5_5_5_1&&(X=o.RGB5_A1)}return(X===o.R16F||X===o.R32F||X===o.RG16F||X===o.RG32F||X===o.RGBA16F||X===o.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function N(T,S){let U;return T?S===null||S===Mr||S===qo?U=o.DEPTH24_STENCIL8:S===Ii?U=o.DEPTH32F_STENCIL8:S===Wo&&(U=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Mr||S===qo?U=o.DEPTH_COMPONENT24:S===Ii?U=o.DEPTH_COMPONENT32F:S===Wo&&(U=o.DEPTH_COMPONENT16),U}function D(T,S){return b(T)===!0||T.isFramebufferTexture&&T.minFilter!==ii&&T.minFilter!==bi?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function V(T){const S=T.target;S.removeEventListener("dispose",V),$(S),S.isVideoTexture&&v.delete(S)}function F(T){const S=T.target;S.removeEventListener("dispose",F),L(S)}function $(T){const S=r.get(T);if(S.__webglInit===void 0)return;const U=T.source,W=y.get(U);if(W){const Z=W[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(T),Object.keys(W).length===0&&y.delete(U)}r.remove(T)}function w(T){const S=r.get(T);o.deleteTexture(S.__webglTexture);const U=T.source,W=y.get(U);delete W[S.__cacheKey],d.memory.textures--}function L(T){const S=r.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),r.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let Z=0;Z<S.__webglFramebuffer[W].length;Z++)o.deleteFramebuffer(S.__webglFramebuffer[W][Z]);else o.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)o.deleteFramebuffer(S.__webglFramebuffer[W]);else o.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&o.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&o.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&o.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=T.textures;for(let W=0,Z=U.length;W<Z;W++){const X=r.get(U[W]);X.__webglTexture&&(o.deleteTexture(X.__webglTexture),d.memory.textures--),r.remove(U[W])}r.remove(T)}let q=0;function ut(){q=0}function mt(){const T=q;return T>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l.maxTextures),q+=1,T}function vt(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function ct(T,S){const U=r.get(T);if(T.isVideoTexture&&fe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(U,T,S);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,U.__webglTexture,o.TEXTURE0+S)}function H(T,S){const U=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){rt(U,T,S);return}i.bindTexture(o.TEXTURE_2D_ARRAY,U.__webglTexture,o.TEXTURE0+S)}function nt(T,S){const U=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){rt(U,T,S);return}i.bindTexture(o.TEXTURE_3D,U.__webglTexture,o.TEXTURE0+S)}function K(T,S){const U=r.get(T);if(T.version>0&&U.__version!==T.version){St(U,T,S);return}i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+S)}const Tt={[Yd]:o.REPEAT,[xr]:o.CLAMP_TO_EDGE,[Zd]:o.MIRRORED_REPEAT},O={[ii]:o.NEAREST,[$y]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[bi]:o.LINEAR,[ad]:o.LINEAR_MIPMAP_NEAREST,[yr]:o.LINEAR_MIPMAP_LINEAR},at={[aS]:o.NEVER,[uS]:o.ALWAYS,[rS]:o.LESS,[H0]:o.LEQUAL,[sS]:o.EQUAL,[cS]:o.GEQUAL,[oS]:o.GREATER,[lS]:o.NOTEQUAL};function Et(T,S){if(S.type===Ii&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bi||S.magFilter===ad||S.magFilter===uc||S.magFilter===yr||S.minFilter===bi||S.minFilter===ad||S.minFilter===uc||S.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(T,o.TEXTURE_WRAP_S,Tt[S.wrapS]),o.texParameteri(T,o.TEXTURE_WRAP_T,Tt[S.wrapT]),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,Tt[S.wrapR]),o.texParameteri(T,o.TEXTURE_MAG_FILTER,O[S.magFilter]),o.texParameteri(T,o.TEXTURE_MIN_FILTER,O[S.minFilter]),S.compareFunction&&(o.texParameteri(T,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(T,o.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ii||S.minFilter!==uc&&S.minFilter!==yr||S.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");o.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,l.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function At(T,S){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",V));const W=S.source;let Z=y.get(W);Z===void 0&&(Z={},y.set(W,Z));const X=vt(S);if(X!==T.__cacheKey){Z[X]===void 0&&(Z[X]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,U=!0),Z[X].usedTimes++;const gt=Z[T.__cacheKey];gt!==void 0&&(Z[T.__cacheKey].usedTimes--,gt.usedTimes===0&&w(S)),T.__cacheKey=X,T.__webglTexture=Z[X].texture}return U}function It(T,S,U){return Math.floor(Math.floor(T/U)/S)}function Wt(T,S,U,W){const X=T.updateRanges;if(X.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,S.width,S.height,U,W,S.data);else{X.sort((_t,wt)=>_t.start-wt.start);let gt=0;for(let _t=1;_t<X.length;_t++){const wt=X[gt],Xt=X[_t],Vt=wt.start+wt.count,Lt=It(Xt.start,S.width,4),ae=It(wt.start,S.width,4);Xt.start<=Vt+1&&Lt===ae&&It(Xt.start+Xt.count-1,S.width,4)===Lt?wt.count=Math.max(wt.count,Xt.start+Xt.count-wt.start):(++gt,X[gt]=Xt)}X.length=gt+1;const lt=o.getParameter(o.UNPACK_ROW_LENGTH),Rt=o.getParameter(o.UNPACK_SKIP_PIXELS),Ut=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,S.width);for(let _t=0,wt=X.length;_t<wt;_t++){const Xt=X[_t],Vt=Math.floor(Xt.start/4),Lt=Math.ceil(Xt.count/4),ae=Vt%S.width,Y=Math.floor(Vt/S.width),Dt=Lt,Bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ae),o.pixelStorei(o.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(o.TEXTURE_2D,0,ae,Y,Dt,Bt,U,W,S.data)}T.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,lt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Rt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ut)}}function rt(T,S,U){let W=o.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=o.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=o.TEXTURE_3D);const Z=At(T,S),X=S.source;i.bindTexture(W,T.__webglTexture,o.TEXTURE0+U);const gt=r.get(X);if(X.version!==gt.__version||Z===!0){i.activeTexture(o.TEXTURE0+U);const lt=De.getPrimaries(De.workingColorSpace),Rt=S.colorSpace===Ha?null:De.getPrimaries(S.colorSpace),Ut=S.colorSpace===Ha||lt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let _t=E(S.image,!1,l.maxTextureSize);_t=P(S,_t);const wt=u.convert(S.format,S.colorSpace),Xt=u.convert(S.type);let Vt=B(S.internalFormat,wt,Xt,S.colorSpace,S.isVideoTexture);Et(W,S);let Lt;const ae=S.mipmaps,Y=S.isVideoTexture!==!0,Dt=gt.__version===void 0||Z===!0,Bt=X.dataReady,kt=D(S,_t);if(S.isDepthTexture)Vt=N(S.format===Yo,S.type),Dt&&(Y?i.texStorage2D(o.TEXTURE_2D,1,Vt,_t.width,_t.height):i.texImage2D(o.TEXTURE_2D,0,Vt,_t.width,_t.height,0,wt,Xt,null));else if(S.isDataTexture)if(ae.length>0){Y&&Dt&&i.texStorage2D(o.TEXTURE_2D,kt,Vt,ae[0].width,ae[0].height);for(let Nt=0,bt=ae.length;Nt<bt;Nt++)Lt=ae[Nt],Y?Bt&&i.texSubImage2D(o.TEXTURE_2D,Nt,0,0,Lt.width,Lt.height,wt,Xt,Lt.data):i.texImage2D(o.TEXTURE_2D,Nt,Vt,Lt.width,Lt.height,0,wt,Xt,Lt.data);S.generateMipmaps=!1}else Y?(Dt&&i.texStorage2D(o.TEXTURE_2D,kt,Vt,_t.width,_t.height),Bt&&Wt(S,_t,wt,Xt)):i.texImage2D(o.TEXTURE_2D,0,Vt,_t.width,_t.height,0,wt,Xt,_t.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Y&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Vt,ae[0].width,ae[0].height,_t.depth);for(let Nt=0,bt=ae.length;Nt<bt;Nt++)if(Lt=ae[Nt],S.format!==Ei)if(wt!==null)if(Y){if(Bt)if(S.layerUpdates.size>0){const Zt=i0(Lt.width,Lt.height,S.format,S.type);for(const ce of S.layerUpdates){const Oe=Lt.data.subarray(ce*Zt/Lt.data.BYTES_PER_ELEMENT,(ce+1)*Zt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Nt,0,0,ce,Lt.width,Lt.height,1,wt,Oe)}S.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Nt,0,0,0,Lt.width,Lt.height,_t.depth,wt,Lt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Nt,Vt,Lt.width,Lt.height,_t.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Nt,0,0,0,Lt.width,Lt.height,_t.depth,wt,Xt,Lt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Nt,Vt,Lt.width,Lt.height,_t.depth,0,wt,Xt,Lt.data)}else{Y&&Dt&&i.texStorage2D(o.TEXTURE_2D,kt,Vt,ae[0].width,ae[0].height);for(let Nt=0,bt=ae.length;Nt<bt;Nt++)Lt=ae[Nt],S.format!==Ei?wt!==null?Y?Bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Nt,0,0,Lt.width,Lt.height,wt,Lt.data):i.compressedTexImage2D(o.TEXTURE_2D,Nt,Vt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Bt&&i.texSubImage2D(o.TEXTURE_2D,Nt,0,0,Lt.width,Lt.height,wt,Xt,Lt.data):i.texImage2D(o.TEXTURE_2D,Nt,Vt,Lt.width,Lt.height,0,wt,Xt,Lt.data)}else if(S.isDataArrayTexture)if(Y){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Vt,_t.width,_t.height,_t.depth),Bt)if(S.layerUpdates.size>0){const Nt=i0(_t.width,_t.height,S.format,S.type);for(const bt of S.layerUpdates){const Zt=_t.data.subarray(bt*Nt/_t.data.BYTES_PER_ELEMENT,(bt+1)*Nt/_t.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,bt,_t.width,_t.height,1,wt,Xt,Zt)}S.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,wt,Xt,_t.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,_t.width,_t.height,_t.depth,0,wt,Xt,_t.data);else if(S.isData3DTexture)Y?(Dt&&i.texStorage3D(o.TEXTURE_3D,kt,Vt,_t.width,_t.height,_t.depth),Bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,wt,Xt,_t.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,_t.width,_t.height,_t.depth,0,wt,Xt,_t.data);else if(S.isFramebufferTexture){if(Dt)if(Y)i.texStorage2D(o.TEXTURE_2D,kt,Vt,_t.width,_t.height);else{let Nt=_t.width,bt=_t.height;for(let Zt=0;Zt<kt;Zt++)i.texImage2D(o.TEXTURE_2D,Zt,Vt,Nt,bt,0,wt,Xt,null),Nt>>=1,bt>>=1}}else if(ae.length>0){if(Y&&Dt){const Nt=ot(ae[0]);i.texStorage2D(o.TEXTURE_2D,kt,Vt,Nt.width,Nt.height)}for(let Nt=0,bt=ae.length;Nt<bt;Nt++)Lt=ae[Nt],Y?Bt&&i.texSubImage2D(o.TEXTURE_2D,Nt,0,0,wt,Xt,Lt):i.texImage2D(o.TEXTURE_2D,Nt,Vt,wt,Xt,Lt);S.generateMipmaps=!1}else if(Y){if(Dt){const Nt=ot(_t);i.texStorage2D(o.TEXTURE_2D,kt,Vt,Nt.width,Nt.height)}Bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,Xt,_t)}else i.texImage2D(o.TEXTURE_2D,0,Vt,wt,Xt,_t);b(S)&&m(W),gt.__version=X.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function St(T,S,U){if(S.image.length!==6)return;const W=At(T,S),Z=S.source;i.bindTexture(o.TEXTURE_CUBE_MAP,T.__webglTexture,o.TEXTURE0+U);const X=r.get(Z);if(Z.version!==X.__version||W===!0){i.activeTexture(o.TEXTURE0+U);const gt=De.getPrimaries(De.workingColorSpace),lt=S.colorSpace===Ha?null:De.getPrimaries(S.colorSpace),Rt=S.colorSpace===Ha||gt===lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Ut=S.isCompressedTexture||S.image[0].isCompressedTexture,_t=S.image[0]&&S.image[0].isDataTexture,wt=[];for(let bt=0;bt<6;bt++)!Ut&&!_t?wt[bt]=E(S.image[bt],!0,l.maxCubemapSize):wt[bt]=_t?S.image[bt].image:S.image[bt],wt[bt]=P(S,wt[bt]);const Xt=wt[0],Vt=u.convert(S.format,S.colorSpace),Lt=u.convert(S.type),ae=B(S.internalFormat,Vt,Lt,S.colorSpace),Y=S.isVideoTexture!==!0,Dt=X.__version===void 0||W===!0,Bt=Z.dataReady;let kt=D(S,Xt);Et(o.TEXTURE_CUBE_MAP,S);let Nt;if(Ut){Y&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,ae,Xt.width,Xt.height);for(let bt=0;bt<6;bt++){Nt=wt[bt].mipmaps;for(let Zt=0;Zt<Nt.length;Zt++){const ce=Nt[Zt];S.format!==Ei?Vt!==null?Y?Bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,0,0,ce.width,ce.height,Vt,ce.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,ae,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,0,0,ce.width,ce.height,Vt,Lt,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,ae,ce.width,ce.height,0,Vt,Lt,ce.data)}}}else{if(Nt=S.mipmaps,Y&&Dt){Nt.length>0&&kt++;const bt=ot(wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,ae,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(_t){Y?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,wt[bt].width,wt[bt].height,Vt,Lt,wt[bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ae,wt[bt].width,wt[bt].height,0,Vt,Lt,wt[bt].data);for(let Zt=0;Zt<Nt.length;Zt++){const Oe=Nt[Zt].image[bt].image;Y?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,0,0,Oe.width,Oe.height,Vt,Lt,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,ae,Oe.width,Oe.height,0,Vt,Lt,Oe.data)}}else{Y?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Vt,Lt,wt[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ae,Vt,Lt,wt[bt]);for(let Zt=0;Zt<Nt.length;Zt++){const ce=Nt[Zt];Y?Bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,0,0,Vt,Lt,ce.image[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,ae,Vt,Lt,ce.image[bt])}}}b(S)&&m(o.TEXTURE_CUBE_MAP),X.__version=Z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Pt(T,S,U,W,Z,X){const gt=u.convert(U.format,U.colorSpace),lt=u.convert(U.type),Rt=B(U.internalFormat,gt,lt,U.colorSpace),Ut=r.get(S),_t=r.get(U);if(_t.__renderTarget=S,!Ut.__hasExternalTextures){const wt=Math.max(1,S.width>>X),Xt=Math.max(1,S.height>>X);Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?i.texImage3D(Z,X,Rt,wt,Xt,S.depth,0,gt,lt,null):i.texImage2D(Z,X,Rt,wt,Xt,0,gt,lt,null)}i.bindFramebuffer(o.FRAMEBUFFER,T),jt(S)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,W,Z,_t.__webglTexture,0,Ne(S)):(Z===o.TEXTURE_2D||Z>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,W,Z,_t.__webglTexture,X),i.bindFramebuffer(o.FRAMEBUFFER,null)}function $t(T,S,U){if(o.bindRenderbuffer(o.RENDERBUFFER,T),S.depthBuffer){const W=S.depthTexture,Z=W&&W.isDepthTexture?W.type:null,X=N(S.stencilBuffer,Z),gt=S.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=Ne(S);jt(S)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,lt,X,S.width,S.height):U?o.renderbufferStorageMultisample(o.RENDERBUFFER,lt,X,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,X,S.width,S.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,T)}else{const W=S.textures;for(let Z=0;Z<W.length;Z++){const X=W[Z],gt=u.convert(X.format,X.colorSpace),lt=u.convert(X.type),Rt=B(X.internalFormat,gt,lt,X.colorSpace),Ut=Ne(S);U&&jt(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,Rt,S.width,S.height):jt(S)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,Rt,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,Rt,S.width,S.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Qt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=r.get(S.depthTexture);W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ct(S.depthTexture,0);const Z=W.__webglTexture,X=Ne(S);if(S.depthTexture.format===jo)jt(S)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Z,0,X):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Yo)jt(S)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Z,0,X):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function de(T){const S=r.get(T),U=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=W}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const W=T.texture.mipmaps;W&&W.length>0?Qt(S.__webglFramebuffer[0],T):Qt(S.__webglFramebuffer,T)}else if(U){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(i.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=o.createRenderbuffer(),$t(S.__webglDepthbuffer[W],T,!1);else{const Z=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[W];o.bindRenderbuffer(o.RENDERBUFFER,X),o.framebufferRenderbuffer(o.FRAMEBUFFER,Z,o.RENDERBUFFER,X)}}else{const W=T.texture.mipmaps;if(W&&W.length>0?i.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=o.createRenderbuffer(),$t(S.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,X),o.framebufferRenderbuffer(o.FRAMEBUFFER,Z,o.RENDERBUFFER,X)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(T,S,U){const W=r.get(T);S!==void 0&&Pt(W.__webglFramebuffer,T,T.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),U!==void 0&&de(T)}function k(T){const S=T.texture,U=r.get(T),W=r.get(S);T.addEventListener("dispose",F);const Z=T.textures,X=T.isWebGLCubeRenderTarget===!0,gt=Z.length>1;if(gt||(W.__webglTexture===void 0&&(W.__webglTexture=o.createTexture()),W.__version=S.version,d.memory.textures++),X){U.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[lt]=[];for(let Rt=0;Rt<S.mipmaps.length;Rt++)U.__webglFramebuffer[lt][Rt]=o.createFramebuffer()}else U.__webglFramebuffer[lt]=o.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)U.__webglFramebuffer[lt]=o.createFramebuffer()}else U.__webglFramebuffer=o.createFramebuffer();if(gt)for(let lt=0,Rt=Z.length;lt<Rt;lt++){const Ut=r.get(Z[lt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=o.createTexture(),d.memory.textures++)}if(T.samples>0&&jt(T)===!1){U.__webglMultisampledFramebuffer=o.createFramebuffer(),U.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const Rt=Z[lt];U.__webglColorRenderbuffer[lt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,U.__webglColorRenderbuffer[lt]);const Ut=u.convert(Rt.format,Rt.colorSpace),_t=u.convert(Rt.type),wt=B(Rt.internalFormat,Ut,_t,Rt.colorSpace,T.isXRRenderTarget===!0),Xt=Ne(T);o.renderbufferStorageMultisample(o.RENDERBUFFER,Xt,wt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+lt,o.RENDERBUFFER,U.__webglColorRenderbuffer[lt])}o.bindRenderbuffer(o.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=o.createRenderbuffer(),$t(U.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(X){i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture),Et(o.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Rt=0;Rt<S.mipmaps.length;Rt++)Pt(U.__webglFramebuffer[lt][Rt],T,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt);else Pt(U.__webglFramebuffer[lt],T,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);b(S)&&m(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(gt){for(let lt=0,Rt=Z.length;lt<Rt;lt++){const Ut=Z[lt],_t=r.get(Ut);let wt=o.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(wt=T.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,_t.__webglTexture),Et(wt,Ut),Pt(U.__webglFramebuffer,T,Ut,o.COLOR_ATTACHMENT0+lt,wt,0),b(Ut)&&m(wt)}i.unbindTexture()}else{let lt=o.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(lt,W.__webglTexture),Et(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let Rt=0;Rt<S.mipmaps.length;Rt++)Pt(U.__webglFramebuffer[Rt],T,S,o.COLOR_ATTACHMENT0,lt,Rt);else Pt(U.__webglFramebuffer,T,S,o.COLOR_ATTACHMENT0,lt,0);b(S)&&m(lt),i.unbindTexture()}T.depthBuffer&&de(T)}function Le(T){const S=T.textures;for(let U=0,W=S.length;U<W;U++){const Z=S[U];if(b(Z)){const X=I(T),gt=r.get(Z).__webglTexture;i.bindTexture(X,gt),m(X),i.unbindTexture()}}}const ue=[],ie=[];function Gt(T){if(T.samples>0){if(jt(T)===!1){const S=T.textures,U=T.width,W=T.height;let Z=o.COLOR_BUFFER_BIT;const X=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=r.get(T),lt=S.length>1;if(lt)for(let Ut=0;Ut<S.length;Ut++)i.bindFramebuffer(o.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,gt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const Rt=T.texture.mipmaps;Rt&&Rt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Ut=0;Ut<S.length;Ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=o.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=o.STENCIL_BUFFER_BIT)),lt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,gt.__webglColorRenderbuffer[Ut]);const _t=r.get(S[Ut]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,_t,0)}o.blitFramebuffer(0,0,U,W,0,0,U,W,Z,o.NEAREST),g===!0&&(ue.length=0,ie.length=0,ue.push(o.COLOR_ATTACHMENT0+Ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ue.push(X),ie.push(X),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ie)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),lt)for(let Ut=0;Ut<S.length;Ut++){i.bindFramebuffer(o.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,gt.__webglColorRenderbuffer[Ut]);const _t=r.get(S[Ut]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,gt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,_t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&g){const S=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[S])}}}function Ne(T){return Math.min(l.maxSamples,T.samples)}function jt(T){const S=r.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(T){const S=d.render.frame;v.get(T)!==S&&(v.set(T,S),T.update())}function P(T,S){const U=T.colorSpace,W=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Us&&U!==Ha&&(De.getTransfer(U)===Ge?(W!==Ei||Z!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function ot(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(p.width=T.naturalWidth||T.width,p.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(p.width=T.displayWidth,p.height=T.displayHeight):(p.width=T.width,p.height=T.height),p}this.allocateTextureUnit=mt,this.resetTextureUnits=ut,this.setTexture2D=ct,this.setTexture2DArray=H,this.setTexture3D=nt,this.setTextureCube=K,this.rebindTextures=Ke,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=jt}function A1(o,t){function i(r,l=Ha){let u;const d=De.getTransfer(l);if(r===la)return o.UNSIGNED_BYTE;if(r===Uh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Lh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===P0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===B0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===N0)return o.BYTE;if(r===O0)return o.SHORT;if(r===Wo)return o.UNSIGNED_SHORT;if(r===Dh)return o.INT;if(r===Mr)return o.UNSIGNED_INT;if(r===Ii)return o.FLOAT;if(r===Qo)return o.HALF_FLOAT;if(r===I0)return o.ALPHA;if(r===F0)return o.RGB;if(r===Ei)return o.RGBA;if(r===jo)return o.DEPTH_COMPONENT;if(r===Yo)return o.DEPTH_STENCIL;if(r===Nh)return o.RED;if(r===Oh)return o.RED_INTEGER;if(r===z0)return o.RG;if(r===Ph)return o.RG_INTEGER;if(r===Bh)return o.RGBA_INTEGER;if(r===Ic||r===Fc||r===zc||r===Hc)if(d===Ge)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ic)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ic)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===th||r===eh||r===nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===th||r===eh)return d===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===nh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ih)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_h||r===vh||r===xh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===_h)return d===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yh||r===Sh||r===Mh||r===bh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===yh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Sh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const R1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C1=`
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

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new $0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Wa({vertexShader:R1,fragmentShader:C1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mn(new tl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D1 extends Ns{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",g=1,p=null,v=null,x=null,y=null,_=null,A=null;const E=typeof XRWebGLBinding<"u",b=new w1,m={},I=i.getContextAttributes();let B=null,N=null;const D=[],V=[],F=new Ee;let $=null;const w=new Mi;w.viewport=new rn;const L=new Mi;L.viewport=new rn;const q=[w,L],ut=new KS;let mt=null,vt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let St=D[rt];return St===void 0&&(St=new Rd,D[rt]=St),St.getTargetRaySpace()},this.getControllerGrip=function(rt){let St=D[rt];return St===void 0&&(St=new Rd,D[rt]=St),St.getGripSpace()},this.getHand=function(rt){let St=D[rt];return St===void 0&&(St=new Rd,D[rt]=St),St.getHandSpace()};function ct(rt){const St=V.indexOf(rt.inputSource);if(St===-1)return;const Pt=D[St];Pt!==void 0&&(Pt.update(rt.inputSource,rt.frame,p||d),Pt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function H(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",nt);for(let rt=0;rt<D.length;rt++){const St=V[rt];St!==null&&(V[rt]=null,D[rt].disconnect(St))}mt=null,vt=null,b.reset();for(const rt in m)delete m[rt];t.setRenderTarget(B),_=null,y=null,x=null,l=null,N=null,Wt.stop(),r.isPresenting=!1,t.setPixelRatio($),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){u=rt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){h=rt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(rt){p=rt},this.getBaseLayer=function(){return y!==null?y:_},this.getBinding=function(){return x===null&&E&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(rt){if(l=rt,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",H),l.addEventListener("inputsourceschange",nt),I.xrCompatible!==!0&&await i.makeXRCompatible(),$=t.getPixelRatio(),t.getSize(F),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,$t=null,Qt=null;I.depth&&(Qt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Pt=I.stencil?Yo:jo,$t=I.stencil?qo:Mr);const de={colorFormat:i.RGBA8,depthFormat:Qt,scaleFactor:u};x=this.getBinding(),y=x.createProjectionLayer(de),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),N=new br(y.textureWidth,y.textureHeight,{format:Ei,type:la,depthTexture:new J0(y.textureWidth,y.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Pt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};_=new XRWebGLLayer(l,i,Pt),l.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),N=new br(_.framebufferWidth,_.framebufferHeight,{format:Ei,type:la,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(g),p=null,d=await l.requestReferenceSpace(h),Wt.setContext(l),Wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function nt(rt){for(let St=0;St<rt.removed.length;St++){const Pt=rt.removed[St],$t=V.indexOf(Pt);$t>=0&&(V[$t]=null,D[$t].disconnect(Pt))}for(let St=0;St<rt.added.length;St++){const Pt=rt.added[St];let $t=V.indexOf(Pt);if($t===-1){for(let de=0;de<D.length;de++)if(de>=V.length){V.push(Pt),$t=de;break}else if(V[de]===null){V[de]=Pt,$t=de;break}if($t===-1)break}const Qt=D[$t];Qt&&Qt.connect(Pt)}}const K=new it,Tt=new it;function O(rt,St,Pt){K.setFromMatrixPosition(St.matrixWorld),Tt.setFromMatrixPosition(Pt.matrixWorld);const $t=K.distanceTo(Tt),Qt=St.projectionMatrix.elements,de=Pt.projectionMatrix.elements,Ke=Qt[14]/(Qt[10]-1),k=Qt[14]/(Qt[10]+1),Le=(Qt[9]+1)/Qt[5],ue=(Qt[9]-1)/Qt[5],ie=(Qt[8]-1)/Qt[0],Gt=(de[8]+1)/de[0],Ne=Ke*ie,jt=Ke*Gt,fe=$t/(-ie+Gt),P=fe*-ie;if(St.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(P),rt.translateZ(fe),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Qt[10]===-1)rt.projectionMatrix.copy(St.projectionMatrix),rt.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const ot=Ke+fe,T=k+fe,S=Ne-P,U=jt+($t-P),W=Le*k/T*ot,Z=ue*k/T*ot;rt.projectionMatrix.makePerspective(S,U,W,Z,ot,T),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function at(rt,St){St===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(St.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(l===null)return;let St=rt.near,Pt=rt.far;b.texture!==null&&(b.depthNear>0&&(St=b.depthNear),b.depthFar>0&&(Pt=b.depthFar)),ut.near=L.near=w.near=St,ut.far=L.far=w.far=Pt,(mt!==ut.near||vt!==ut.far)&&(l.updateRenderState({depthNear:ut.near,depthFar:ut.far}),mt=ut.near,vt=ut.far),ut.layers.mask=rt.layers.mask|6,w.layers.mask=ut.layers.mask&3,L.layers.mask=ut.layers.mask&5;const $t=rt.parent,Qt=ut.cameras;at(ut,$t);for(let de=0;de<Qt.length;de++)at(Qt[de],$t);Qt.length===2?O(ut,w,L):ut.projectionMatrix.copy(w.projectionMatrix),Et(rt,ut,$t)};function Et(rt,St,Pt){Pt===null?rt.matrix.copy(St.matrixWorld):(rt.matrix.copy(Pt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(St.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(St.projectionMatrix),rt.projectionMatrixInverse.copy(St.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Th*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return ut},this.getFoveation=function(){if(!(y===null&&_===null))return g},this.setFoveation=function(rt){g=rt,y!==null&&(y.fixedFoveation=rt),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=rt)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(ut)},this.getCameraTexture=function(rt){return m[rt]};let At=null;function It(rt,St){if(v=St.getViewerPose(p||d),A=St,v!==null){const Pt=v.views;_!==null&&(t.setRenderTargetFramebuffer(N,_.framebuffer),t.setRenderTarget(N));let $t=!1;Pt.length!==ut.cameras.length&&(ut.cameras.length=0,$t=!0);for(let k=0;k<Pt.length;k++){const Le=Pt[k];let ue=null;if(_!==null)ue=_.getViewport(Le);else{const Gt=x.getViewSubImage(y,Le);ue=Gt.viewport,k===0&&(t.setRenderTargetTextures(N,Gt.colorTexture,Gt.depthStencilTexture),t.setRenderTarget(N))}let ie=q[k];ie===void 0&&(ie=new Mi,ie.layers.enable(k),ie.viewport=new rn,q[k]=ie),ie.matrix.fromArray(Le.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Le.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ue.x,ue.y,ue.width,ue.height),k===0&&(ut.matrix.copy(ie.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale)),$t===!0&&ut.cameras.push(ie)}const Qt=l.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&E){x=r.getBinding();const k=x.getDepthInformation(Pt[0]);k&&k.isValid&&k.texture&&b.init(k,l.renderState)}if(Qt&&Qt.includes("camera-access")&&E){t.state.unbindTexture(),x=r.getBinding();for(let k=0;k<Pt.length;k++){const Le=Pt[k].camera;if(Le){let ue=m[Le];ue||(ue=new $0,m[Le]=ue);const ie=x.getCameraImage(Le);ue.sourceTexture=ie}}}}for(let Pt=0;Pt<D.length;Pt++){const $t=V[Pt],Qt=D[Pt];$t!==null&&Qt!==void 0&&Qt.update($t,St,p||d)}At&&At(rt,St),St.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:St}),A=null}const Wt=new ev;Wt.setAnimationLoop(It),this.setAnimationLoop=function(rt){At=rt},this.dispose=function(){}}}const pr=new ca,U1=new je;function L1(o,t){function i(b,m){b.matrixAutoUpdate===!0&&b.updateMatrix(),m.value.copy(b.matrix)}function r(b,m){m.color.getRGB(b.fogColor.value,q0(o)),m.isFog?(b.fogNear.value=m.near,b.fogFar.value=m.far):m.isFogExp2&&(b.fogDensity.value=m.density)}function l(b,m,I,B,N){m.isMeshBasicMaterial||m.isMeshLambertMaterial?u(b,m):m.isMeshToonMaterial?(u(b,m),x(b,m)):m.isMeshPhongMaterial?(u(b,m),v(b,m)):m.isMeshStandardMaterial?(u(b,m),y(b,m),m.isMeshPhysicalMaterial&&_(b,m,N)):m.isMeshMatcapMaterial?(u(b,m),A(b,m)):m.isMeshDepthMaterial?u(b,m):m.isMeshDistanceMaterial?(u(b,m),E(b,m)):m.isMeshNormalMaterial?u(b,m):m.isLineBasicMaterial?(d(b,m),m.isLineDashedMaterial&&h(b,m)):m.isPointsMaterial?g(b,m,I,B):m.isSpriteMaterial?p(b,m):m.isShadowMaterial?(b.color.value.copy(m.color),b.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function u(b,m){b.opacity.value=m.opacity,m.color&&b.diffuse.value.copy(m.color),m.emissive&&b.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(b.map.value=m.map,i(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,i(m.alphaMap,b.alphaMapTransform)),m.bumpMap&&(b.bumpMap.value=m.bumpMap,i(m.bumpMap,b.bumpMapTransform),b.bumpScale.value=m.bumpScale,m.side===jn&&(b.bumpScale.value*=-1)),m.normalMap&&(b.normalMap.value=m.normalMap,i(m.normalMap,b.normalMapTransform),b.normalScale.value.copy(m.normalScale),m.side===jn&&b.normalScale.value.negate()),m.displacementMap&&(b.displacementMap.value=m.displacementMap,i(m.displacementMap,b.displacementMapTransform),b.displacementScale.value=m.displacementScale,b.displacementBias.value=m.displacementBias),m.emissiveMap&&(b.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,b.emissiveMapTransform)),m.specularMap&&(b.specularMap.value=m.specularMap,i(m.specularMap,b.specularMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest);const I=t.get(m),B=I.envMap,N=I.envMapRotation;B&&(b.envMap.value=B,pr.copy(N),pr.x*=-1,pr.y*=-1,pr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),b.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler(pr)),b.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=m.reflectivity,b.ior.value=m.ior,b.refractionRatio.value=m.refractionRatio),m.lightMap&&(b.lightMap.value=m.lightMap,b.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,b.lightMapTransform)),m.aoMap&&(b.aoMap.value=m.aoMap,b.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,b.aoMapTransform))}function d(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,m.map&&(b.map.value=m.map,i(m.map,b.mapTransform))}function h(b,m){b.dashSize.value=m.dashSize,b.totalSize.value=m.dashSize+m.gapSize,b.scale.value=m.scale}function g(b,m,I,B){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.size.value=m.size*I,b.scale.value=B*.5,m.map&&(b.map.value=m.map,i(m.map,b.uvTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,i(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function p(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.rotation.value=m.rotation,m.map&&(b.map.value=m.map,i(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,i(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function v(b,m){b.specular.value.copy(m.specular),b.shininess.value=Math.max(m.shininess,1e-4)}function x(b,m){m.gradientMap&&(b.gradientMap.value=m.gradientMap)}function y(b,m){b.metalness.value=m.metalness,m.metalnessMap&&(b.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,b.metalnessMapTransform)),b.roughness.value=m.roughness,m.roughnessMap&&(b.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,b.roughnessMapTransform)),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)}function _(b,m,I){b.ior.value=m.ior,m.sheen>0&&(b.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),b.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(b.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,b.sheenColorMapTransform)),m.sheenRoughnessMap&&(b.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,b.sheenRoughnessMapTransform))),m.clearcoat>0&&(b.clearcoat.value=m.clearcoat,b.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(b.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,b.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(b.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jn&&b.clearcoatNormalScale.value.negate())),m.dispersion>0&&(b.dispersion.value=m.dispersion),m.iridescence>0&&(b.iridescence.value=m.iridescence,b.iridescenceIOR.value=m.iridescenceIOR,b.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(b.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,b.iridescenceMapTransform)),m.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),m.transmission>0&&(b.transmission.value=m.transmission,b.transmissionSamplerMap.value=I.texture,b.transmissionSamplerSize.value.set(I.width,I.height),m.transmissionMap&&(b.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,b.transmissionMapTransform)),b.thickness.value=m.thickness,m.thicknessMap&&(b.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=m.attenuationDistance,b.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(b.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(b.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=m.specularIntensity,b.specularColor.value.copy(m.specularColor),m.specularColorMap&&(b.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,b.specularColorMapTransform)),m.specularIntensityMap&&(b.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,b.specularIntensityMapTransform))}function A(b,m){m.matcap&&(b.matcap.value=m.matcap)}function E(b,m){const I=t.get(m).light;b.referencePosition.value.setFromMatrixPosition(I.matrixWorld),b.nearDistance.value=I.shadow.camera.near,b.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function N1(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(I,B){const N=B.program;r.uniformBlockBinding(I,N)}function p(I,B){let N=l[I.id];N===void 0&&(A(I),N=v(I),l[I.id]=N,I.addEventListener("dispose",b));const D=B.program;r.updateUBOMapping(I,D);const V=t.render.frame;u[I.id]!==V&&(y(I),u[I.id]=V)}function v(I){const B=x();I.__bindingPointIndex=B;const N=o.createBuffer(),D=I.__size,V=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,D,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,B,N),N}function x(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const B=l[I.id],N=I.uniforms,D=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,B);for(let V=0,F=N.length;V<F;V++){const $=Array.isArray(N[V])?N[V]:[N[V]];for(let w=0,L=$.length;w<L;w++){const q=$[w];if(_(q,V,w,D)===!0){const ut=q.__offset,mt=Array.isArray(q.value)?q.value:[q.value];let vt=0;for(let ct=0;ct<mt.length;ct++){const H=mt[ct],nt=E(H);typeof H=="number"||typeof H=="boolean"?(q.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,ut+vt,q.__data)):H.isMatrix3?(q.__data[0]=H.elements[0],q.__data[1]=H.elements[1],q.__data[2]=H.elements[2],q.__data[3]=0,q.__data[4]=H.elements[3],q.__data[5]=H.elements[4],q.__data[6]=H.elements[5],q.__data[7]=0,q.__data[8]=H.elements[6],q.__data[9]=H.elements[7],q.__data[10]=H.elements[8],q.__data[11]=0):(H.toArray(q.__data,vt),vt+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ut,q.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function _(I,B,N,D){const V=I.value,F=B+"_"+N;if(D[F]===void 0)return typeof V=="number"||typeof V=="boolean"?D[F]=V:D[F]=V.clone(),!0;{const $=D[F];if(typeof V=="number"||typeof V=="boolean"){if($!==V)return D[F]=V,!0}else if($.equals(V)===!1)return $.copy(V),!0}return!1}function A(I){const B=I.uniforms;let N=0;const D=16;for(let F=0,$=B.length;F<$;F++){const w=Array.isArray(B[F])?B[F]:[B[F]];for(let L=0,q=w.length;L<q;L++){const ut=w[L],mt=Array.isArray(ut.value)?ut.value:[ut.value];for(let vt=0,ct=mt.length;vt<ct;vt++){const H=mt[vt],nt=E(H),K=N%D,Tt=K%nt.boundary,O=K+Tt;N+=Tt,O!==0&&D-O<nt.storage&&(N+=D-O),ut.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=N,N+=nt.storage}}}const V=N%D;return V>0&&(N+=D-V),I.__size=N,I.__cache={},this}function E(I){const B={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(B.boundary=4,B.storage=4):I.isVector2?(B.boundary=8,B.storage=8):I.isVector3||I.isColor?(B.boundary=16,B.storage=12):I.isVector4?(B.boundary=16,B.storage=16):I.isMatrix3?(B.boundary=48,B.storage=48):I.isMatrix4?(B.boundary=64,B.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),B}function b(I){const B=I.target;B.removeEventListener("dispose",b);const N=d.indexOf(B.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[B.id]),delete l[B.id],delete u[B.id]}function m(){for(const I in l)o.deleteBuffer(l[I]);d=[],l={},u={}}return{bind:g,update:p,dispose:m}}class O1{constructor(t={}){const{canvas:i=dS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let _;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=r.getContextAttributes().alpha}else _=d;const A=new Uint32Array(4),E=new Int32Array(4);let b=null,m=null;const I=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let D=!1;this._outputColorSpace=di;let V=0,F=0,$=null,w=-1,L=null;const q=new rn,ut=new rn;let mt=null;const vt=new he(0);let ct=0,H=i.width,nt=i.height,K=1,Tt=null,O=null;const at=new rn(0,0,H,nt),Et=new rn(0,0,H,nt);let At=!1;const It=new Q0;let Wt=!1,rt=!1;const St=new je,Pt=new it,$t=new rn,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Ke(){return $===null?K:1}let k=r;function Le(C,Q){return i.getContext(C,Q)}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),k===null){const Q="webgl2";if(k=Le(Q,C),k===null)throw Le(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ue,ie,Gt,Ne,jt,fe,P,ot,T,S,U,W,Z,X,gt,lt,Rt,Ut,_t,wt,Xt,Vt,Lt,ae;function Y(){ue=new XE(k),ue.init(),Vt=new A1(k,ue),ie=new IE(k,ue,t,Vt),Gt=new E1(k,ue),ie.reversedDepthBuffer&&y&&Gt.buffers.depth.setReversed(!0),Ne=new jE(k),jt=new f1,fe=new T1(k,ue,Gt,jt,ie,Vt,Ne),P=new zE(N),ot=new kE(N),T=new $S(k),Lt=new PE(k,T),S=new WE(k,T,Ne,Lt),U=new ZE(k,S,T,Ne),_t=new YE(k,ie,fe),lt=new FE(jt),W=new u1(N,P,ot,ue,ie,Lt,lt),Z=new L1(N,jt),X=new h1,gt=new x1(ue),Ut=new OE(N,P,ot,Gt,U,_,g),Rt=new M1(N,U,ie),ae=new N1(k,Ne,ie,Gt),wt=new BE(k,ue,Ne),Xt=new qE(k,ue,Ne),Ne.programs=W.programs,N.capabilities=ie,N.extensions=ue,N.properties=jt,N.renderLists=X,N.shadowMap=Rt,N.state=Gt,N.info=Ne}Y();const Dt=new D1(N,k);this.xr=Dt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(H,nt,!1))},this.getSize=function(C){return C.set(H,nt)},this.setSize=function(C,Q,ht=!0){if(Dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,nt=Q,i.width=Math.floor(C*K),i.height=Math.floor(Q*K),ht===!0&&(i.style.width=C+"px",i.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(H*K,nt*K).floor()},this.setDrawingBufferSize=function(C,Q,ht){H=C,nt=Q,K=ht,i.width=Math.floor(C*ht),i.height=Math.floor(Q*ht),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(q)},this.getViewport=function(C){return C.copy(at)},this.setViewport=function(C,Q,ht,pt){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,Q,ht,pt),Gt.viewport(q.copy(at).multiplyScalar(K).round())},this.getScissor=function(C){return C.copy(Et)},this.setScissor=function(C,Q,ht,pt){C.isVector4?Et.set(C.x,C.y,C.z,C.w):Et.set(C,Q,ht,pt),Gt.scissor(ut.copy(Et).multiplyScalar(K).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(C){Gt.setScissorTest(At=C)},this.setOpaqueSort=function(C){Tt=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,ht=!0){let pt=0;if(C){let tt=!1;if($!==null){const Ot=$.texture.format;tt=Ot===Bh||Ot===Ph||Ot===Oh}if(tt){const Ot=$.texture.type,Ft=Ot===la||Ot===Mr||Ot===Wo||Ot===qo||Ot===Uh||Ot===Lh,qt=Ut.getClearColor(),zt=Ut.getClearAlpha(),ne=qt.r,se=qt.g,Jt=qt.b;Ft?(A[0]=ne,A[1]=se,A[2]=Jt,A[3]=zt,k.clearBufferuiv(k.COLOR,0,A)):(E[0]=ne,E[1]=se,E[2]=Jt,E[3]=zt,k.clearBufferiv(k.COLOR,0,E))}else pt|=k.COLOR_BUFFER_BIT}Q&&(pt|=k.DEPTH_BUFFER_BIT),ht&&(pt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Ut.dispose(),X.dispose(),gt.dispose(),jt.dispose(),P.dispose(),ot.dispose(),U.dispose(),Lt.dispose(),ae.dispose(),W.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",un),Dt.removeEventListener("sessionend",fn),Je.stop()};function Bt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const C=Ne.autoReset,Q=Rt.enabled,ht=Rt.autoUpdate,pt=Rt.needsUpdate,tt=Rt.type;Y(),Ne.autoReset=C,Rt.enabled=Q,Rt.autoUpdate=ht,Rt.needsUpdate=pt,Rt.type=tt}function Nt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function bt(C){const Q=C.target;Q.removeEventListener("dispose",bt),Zt(Q)}function Zt(C){ce(C),jt.remove(C)}function ce(C){const Q=jt.get(C).programs;Q!==void 0&&(Q.forEach(function(ht){W.releaseProgram(ht)}),C.isShaderMaterial&&W.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,ht,pt,tt,Ot){Q===null&&(Q=Qt);const Ft=tt.isMesh&&tt.matrixWorld.determinant()<0,qt=ua(C,Q,ht,pt,tt);Gt.setMaterial(pt,Ft);let zt=ht.index,ne=1;if(pt.wireframe===!0){if(zt=S.getWireframeAttribute(ht),zt===void 0)return;ne=2}const se=ht.drawRange,Jt=ht.attributes.position;let ge=se.start*ne,Ce=(se.start+se.count)*ne;Ot!==null&&(ge=Math.max(ge,Ot.start*ne),Ce=Math.min(Ce,(Ot.start+Ot.count)*ne)),zt!==null?(ge=Math.max(ge,0),Ce=Math.min(Ce,zt.count)):Jt!=null&&(ge=Math.max(ge,0),Ce=Math.min(Ce,Jt.count));const Ye=Ce-ge;if(Ye<0||Ye===1/0)return;Lt.setup(tt,pt,qt,ht,zt);let Ie,_e=wt;if(zt!==null&&(Ie=T.get(zt),_e=Xt,_e.setIndex(Ie)),tt.isMesh)pt.wireframe===!0?(Gt.setLineWidth(pt.wireframeLinewidth*Ke()),_e.setMode(k.LINES)):_e.setMode(k.TRIANGLES);else if(tt.isLine){let ee=pt.linewidth;ee===void 0&&(ee=1),Gt.setLineWidth(ee*Ke()),tt.isLineSegments?_e.setMode(k.LINES):tt.isLineLoop?_e.setMode(k.LINE_LOOP):_e.setMode(k.LINE_STRIP)}else tt.isPoints?_e.setMode(k.POINTS):tt.isSprite&&_e.setMode(k.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Zo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))_e.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const ee=tt._multiDrawStarts,qe=tt._multiDrawCounts,Se=tt._multiDrawCount,Rn=zt?T.get(zt).bytesPerElement:1,mi=jt.get(pt).currentProgram.getUniforms();for(let In=0;In<Se;In++)mi.setValue(k,"_gl_DrawID",In),_e.render(ee[In]/Rn,qe[In])}else if(tt.isInstancedMesh)_e.renderInstances(ge,Ye,tt.count);else if(ht.isInstancedBufferGeometry){const ee=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,qe=Math.min(ht.instanceCount,ee);_e.renderInstances(ge,Ye,qe)}else _e.render(ge,Ye)};function Oe(C,Q,ht){C.transparent===!0&&C.side===Pi&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,Ri(C,Q,ht),C.side=Xa,C.needsUpdate=!0,Ri(C,Q,ht),C.side=Pi):Ri(C,Q,ht)}this.compile=function(C,Q,ht=null){ht===null&&(ht=C),m=gt.get(ht),m.init(Q),B.push(m),ht.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),C!==ht&&C.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),m.setupLights();const pt=new Set;return C.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Ot=tt.material;if(Ot)if(Array.isArray(Ot))for(let Ft=0;Ft<Ot.length;Ft++){const qt=Ot[Ft];Oe(qt,ht,tt),pt.add(qt)}else Oe(Ot,ht,tt),pt.add(Ot)}),m=B.pop(),pt},this.compileAsync=function(C,Q,ht=null){const pt=this.compile(C,Q,ht);return new Promise(tt=>{function Ot(){if(pt.forEach(function(Ft){jt.get(Ft).currentProgram.isReady()&&pt.delete(Ft)}),pt.size===0){tt(C);return}setTimeout(Ot,10)}ue.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Re=null;function pi(C){Re&&Re(C)}function un(){Je.stop()}function fn(){Je.start()}const Je=new ev;Je.setAnimationLoop(pi),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(C){Re=C,Dt.setAnimationLoop(C),C===null?Je.stop():Je.start()},Dt.addEventListener("sessionstart",un),Dt.addEventListener("sessionend",fn),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(Q),Q=Dt.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,Q,$),m=gt.get(C,B.length),m.init(Q),B.push(m),St.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),It.setFromProjectionMatrix(St,Fi,Q.reversedDepth),rt=this.localClippingEnabled,Wt=lt.init(this.clippingPlanes,rt),b=X.get(C,I.length),b.init(),I.push(b),Dt.enabled===!0&&Dt.isPresenting===!0){const Ot=N.xr.getDepthSensingMesh();Ot!==null&&Ai(Ot,Q,-1/0,N.sortObjects)}Ai(C,Q,0,N.sortObjects),b.finish(),N.sortObjects===!0&&b.sort(Tt,O),de=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,de&&Ut.addToRenderList(b,C),this.info.render.frame++,Wt===!0&&lt.beginShadows();const ht=m.state.shadowsArray;Rt.render(ht,C,Q),Wt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const pt=b.opaque,tt=b.transmissive;if(m.setupLights(),Q.isArrayCamera){const Ot=Q.cameras;if(tt.length>0)for(let Ft=0,qt=Ot.length;Ft<qt;Ft++){const zt=Ot[Ft];el(pt,tt,C,zt)}de&&Ut.render(C);for(let Ft=0,qt=Ot.length;Ft<qt;Ft++){const zt=Ot[Ft];Tr(b,C,zt,zt.viewport)}}else tt.length>0&&el(pt,tt,C,Q),de&&Ut.render(C),Tr(b,C,Q);$!==null&&F===0&&(fe.updateMultisampleRenderTarget($),fe.updateRenderTargetMipmap($)),C.isScene===!0&&C.onAfterRender(N,C,Q),Lt.resetDefaultState(),w=-1,L=null,B.pop(),B.length>0?(m=B[B.length-1],Wt===!0&&lt.setGlobalState(N.clippingPlanes,m.state.camera)):m=null,I.pop(),I.length>0?b=I[I.length-1]:b=null};function Ai(C,Q,ht,pt){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)ht=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||It.intersectsSprite(C)){pt&&$t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(St);const Ft=U.update(C),qt=C.material;qt.visible&&b.push(C,Ft,qt,ht,$t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||It.intersectsObject(C))){const Ft=U.update(C),qt=C.material;if(pt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$t.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),$t.copy(Ft.boundingSphere.center)),$t.applyMatrix4(C.matrixWorld).applyMatrix4(St)),Array.isArray(qt)){const zt=Ft.groups;for(let ne=0,se=zt.length;ne<se;ne++){const Jt=zt[ne],ge=qt[Jt.materialIndex];ge&&ge.visible&&b.push(C,Ft,ge,ht,$t.z,Jt)}}else qt.visible&&b.push(C,Ft,qt,ht,$t.z,null)}}const Ot=C.children;for(let Ft=0,qt=Ot.length;Ft<qt;Ft++)Ai(Ot[Ft],Q,ht,pt)}function Tr(C,Q,ht,pt){const tt=C.opaque,Ot=C.transmissive,Ft=C.transparent;m.setupLightsView(ht),Wt===!0&&lt.setGlobalState(N.clippingPlanes,ht),pt&&Gt.viewport(q.copy(pt)),tt.length>0&&Ar(tt,Q,ht),Ot.length>0&&Ar(Ot,Q,ht),Ft.length>0&&Ar(Ft,Q,ht),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function el(C,Q,ht,pt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[pt.id]===void 0&&(m.state.transmissionRenderTarget[pt.id]=new br(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Qo:la,minFilter:yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Ot=m.state.transmissionRenderTarget[pt.id],Ft=pt.viewport||q;Ot.setSize(Ft.z*N.transmissionResolutionScale,Ft.w*N.transmissionResolutionScale);const qt=N.getRenderTarget(),zt=N.getActiveCubeFace(),ne=N.getActiveMipmapLevel();N.setRenderTarget(Ot),N.getClearColor(vt),ct=N.getClearAlpha(),ct<1&&N.setClearColor(16777215,.5),N.clear(),de&&Ut.render(ht);const se=N.toneMapping;N.toneMapping=Va;const Jt=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),m.setupLightsView(pt),Wt===!0&&lt.setGlobalState(N.clippingPlanes,pt),Ar(C,ht,pt),fe.updateMultisampleRenderTarget(Ot),fe.updateRenderTargetMipmap(Ot),ue.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Ce=0,Ye=Q.length;Ce<Ye;Ce++){const Ie=Q[Ce],_e=Ie.object,ee=Ie.geometry,qe=Ie.material,Se=Ie.group;if(qe.side===Pi&&_e.layers.test(pt.layers)){const Rn=qe.side;qe.side=jn,qe.needsUpdate=!0,Is(_e,ht,pt,ee,qe,Se),qe.side=Rn,qe.needsUpdate=!0,ge=!0}}ge===!0&&(fe.updateMultisampleRenderTarget(Ot),fe.updateRenderTargetMipmap(Ot))}N.setRenderTarget(qt,zt,ne),N.setClearColor(vt,ct),Jt!==void 0&&(pt.viewport=Jt),N.toneMapping=se}function Ar(C,Q,ht){const pt=Q.isScene===!0?Q.overrideMaterial:null;for(let tt=0,Ot=C.length;tt<Ot;tt++){const Ft=C[tt],qt=Ft.object,zt=Ft.geometry,ne=Ft.group;let se=Ft.material;se.allowOverride===!0&&pt!==null&&(se=pt),qt.layers.test(ht.layers)&&Is(qt,Q,ht,zt,se,ne)}}function Is(C,Q,ht,pt,tt,Ot){C.onBeforeRender(N,Q,ht,pt,tt,Ot),C.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),tt.onBeforeRender(N,Q,ht,pt,C,Ot),tt.transparent===!0&&tt.side===Pi&&tt.forceSinglePass===!1?(tt.side=jn,tt.needsUpdate=!0,N.renderBufferDirect(ht,Q,pt,tt,C,Ot),tt.side=Xa,tt.needsUpdate=!0,N.renderBufferDirect(ht,Q,pt,tt,C,Ot),tt.side=Pi):N.renderBufferDirect(ht,Q,pt,tt,C,Ot),C.onAfterRender(N,Q,ht,pt,tt,Ot)}function Ri(C,Q,ht){Q.isScene!==!0&&(Q=Qt);const pt=jt.get(C),tt=m.state.lights,Ot=m.state.shadowsArray,Ft=tt.state.version,qt=W.getParameters(C,tt.state,Ot,Q,ht),zt=W.getProgramCacheKey(qt);let ne=pt.programs;pt.environment=C.isMeshStandardMaterial?Q.environment:null,pt.fog=Q.fog,pt.envMap=(C.isMeshStandardMaterial?ot:P).get(C.envMap||pt.environment),pt.envMapRotation=pt.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,ne===void 0&&(C.addEventListener("dispose",bt),ne=new Map,pt.programs=ne);let se=ne.get(zt);if(se!==void 0){if(pt.currentProgram===se&&pt.lightsStateVersion===Ft)return zi(C,qt),se}else qt.uniforms=W.getUniforms(C),C.onBeforeCompile(qt,N),se=W.acquireProgram(qt,zt),ne.set(zt,se),pt.uniforms=qt.uniforms;const Jt=pt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=lt.uniform),zi(C,qt),pt.needsLights=fa(C),pt.lightsStateVersion=Ft,pt.needsLights&&(Jt.ambientLightColor.value=tt.state.ambient,Jt.lightProbe.value=tt.state.probe,Jt.directionalLights.value=tt.state.directional,Jt.directionalLightShadows.value=tt.state.directionalShadow,Jt.spotLights.value=tt.state.spot,Jt.spotLightShadows.value=tt.state.spotShadow,Jt.rectAreaLights.value=tt.state.rectArea,Jt.ltc_1.value=tt.state.rectAreaLTC1,Jt.ltc_2.value=tt.state.rectAreaLTC2,Jt.pointLights.value=tt.state.point,Jt.pointLightShadows.value=tt.state.pointShadow,Jt.hemisphereLights.value=tt.state.hemi,Jt.directionalShadowMap.value=tt.state.directionalShadowMap,Jt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Jt.spotShadowMap.value=tt.state.spotShadowMap,Jt.spotLightMatrix.value=tt.state.spotLightMatrix,Jt.spotLightMap.value=tt.state.spotLightMap,Jt.pointShadowMap.value=tt.state.pointShadowMap,Jt.pointShadowMatrix.value=tt.state.pointShadowMatrix),pt.currentProgram=se,pt.uniformsList=null,se}function Rr(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=Gc.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function zi(C,Q){const ht=jt.get(C);ht.outputColorSpace=Q.outputColorSpace,ht.batching=Q.batching,ht.batchingColor=Q.batchingColor,ht.instancing=Q.instancing,ht.instancingColor=Q.instancingColor,ht.instancingMorph=Q.instancingMorph,ht.skinning=Q.skinning,ht.morphTargets=Q.morphTargets,ht.morphNormals=Q.morphNormals,ht.morphColors=Q.morphColors,ht.morphTargetsCount=Q.morphTargetsCount,ht.numClippingPlanes=Q.numClippingPlanes,ht.numIntersection=Q.numClipIntersection,ht.vertexAlphas=Q.vertexAlphas,ht.vertexTangents=Q.vertexTangents,ht.toneMapping=Q.toneMapping}function ua(C,Q,ht,pt,tt){Q.isScene!==!0&&(Q=Qt),fe.resetTextureUnits();const Ot=Q.fog,Ft=pt.isMeshStandardMaterial?Q.environment:null,qt=$===null?N.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Us,zt=(pt.isMeshStandardMaterial?ot:P).get(pt.envMap||Ft),ne=pt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,se=!!ht.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),Jt=!!ht.morphAttributes.position,ge=!!ht.morphAttributes.normal,Ce=!!ht.morphAttributes.color;let Ye=Va;pt.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ye=N.toneMapping);const Ie=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,_e=Ie!==void 0?Ie.length:0,ee=jt.get(pt),qe=m.state.lights;if(Wt===!0&&(rt===!0||C!==L)){const $e=C===L&&pt.id===w;lt.setState(pt,C,$e)}let Se=!1;pt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==qe.state.version||ee.outputColorSpace!==qt||tt.isBatchedMesh&&ee.batching===!1||!tt.isBatchedMesh&&ee.batching===!0||tt.isBatchedMesh&&ee.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&ee.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&ee.instancing===!1||!tt.isInstancedMesh&&ee.instancing===!0||tt.isSkinnedMesh&&ee.skinning===!1||!tt.isSkinnedMesh&&ee.skinning===!0||tt.isInstancedMesh&&ee.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&ee.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&ee.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&ee.instancingMorph===!1&&tt.morphTexture!==null||ee.envMap!==zt||pt.fog===!0&&ee.fog!==Ot||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==lt.numPlanes||ee.numIntersection!==lt.numIntersection)||ee.vertexAlphas!==ne||ee.vertexTangents!==se||ee.morphTargets!==Jt||ee.morphNormals!==ge||ee.morphColors!==Ce||ee.toneMapping!==Ye||ee.morphTargetsCount!==_e)&&(Se=!0):(Se=!0,ee.__version=pt.version);let Rn=ee.currentProgram;Se===!0&&(Rn=Ri(pt,Q,tt));let mi=!1,In=!1,gn=!1;const ke=Rn.getUniforms(),Fn=ee.uniforms;if(Gt.useProgram(Rn.program)&&(mi=!0,In=!0,gn=!0),pt.id!==w&&(w=pt.id,In=!0),mi||L!==C){Gt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ke.setValue(k,"projectionMatrix",C.projectionMatrix),ke.setValue(k,"viewMatrix",C.matrixWorldInverse);const bn=ke.map.cameraPosition;bn!==void 0&&bn.setValue(k,Pt.setFromMatrixPosition(C.matrixWorld)),ie.logarithmicDepthBuffer&&ke.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&ke.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),L!==C&&(L=C,In=!0,gn=!0)}if(tt.isSkinnedMesh){ke.setOptional(k,tt,"bindMatrix"),ke.setOptional(k,tt,"bindMatrixInverse");const $e=tt.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ke.setValue(k,"boneTexture",$e.boneTexture,fe))}tt.isBatchedMesh&&(ke.setOptional(k,tt,"batchingTexture"),ke.setValue(k,"batchingTexture",tt._matricesTexture,fe),ke.setOptional(k,tt,"batchingIdTexture"),ke.setValue(k,"batchingIdTexture",tt._indirectTexture,fe),ke.setOptional(k,tt,"batchingColorTexture"),tt._colorsTexture!==null&&ke.setValue(k,"batchingColorTexture",tt._colorsTexture,fe));const Cn=ht.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&_t.update(tt,ht,Rn),(In||ee.receiveShadow!==tt.receiveShadow)&&(ee.receiveShadow=tt.receiveShadow,ke.setValue(k,"receiveShadow",tt.receiveShadow)),pt.isMeshGouraudMaterial&&pt.envMap!==null&&(Fn.envMap.value=zt,Fn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),pt.isMeshStandardMaterial&&pt.envMap===null&&Q.environment!==null&&(Fn.envMapIntensity.value=Q.environmentIntensity),In&&(ke.setValue(k,"toneMappingExposure",N.toneMappingExposure),ee.needsLights&&qa(Fn,gn),Ot&&pt.fog===!0&&Z.refreshFogUniforms(Fn,Ot),Z.refreshMaterialUniforms(Fn,pt,K,nt,m.state.transmissionRenderTarget[C.id]),Gc.upload(k,Rr(ee),Fn,fe)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(Gc.upload(k,Rr(ee),Fn,fe),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&ke.setValue(k,"center",tt.center),ke.setValue(k,"modelViewMatrix",tt.modelViewMatrix),ke.setValue(k,"normalMatrix",tt.normalMatrix),ke.setValue(k,"modelMatrix",tt.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){const $e=pt.uniformsGroups;for(let bn=0,Cr=$e.length;bn<Cr;bn++){const Vn=$e[bn];ae.update(Vn,Rn),ae.bind(Vn,Rn)}}return Rn}function qa(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function fa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,Q,ht){const pt=jt.get(C);pt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,pt.__autoAllocateDepthBuffer===!1&&(pt.__useRenderToTexture=!1),jt.get(C.texture).__webglTexture=Q,jt.get(C.depthTexture).__webglTexture=pt.__autoAllocateDepthBuffer?void 0:ht,pt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Q){const ht=jt.get(C);ht.__webglFramebuffer=Q,ht.__useDefaultFramebuffer=Q===void 0};const sn=k.createFramebuffer();this.setRenderTarget=function(C,Q=0,ht=0){$=C,V=Q,F=ht;let pt=!0,tt=null,Ot=!1,Ft=!1;if(C){const zt=jt.get(C);if(zt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(k.FRAMEBUFFER,null),pt=!1;else if(zt.__webglFramebuffer===void 0)fe.setupRenderTarget(C);else if(zt.__hasExternalTextures)fe.rebindTextures(C,jt.get(C.texture).__webglTexture,jt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Jt=C.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&jt.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(C)}}const ne=C.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Ft=!0);const se=jt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(se[Q])?tt=se[Q][ht]:tt=se[Q],Ot=!0):C.samples>0&&fe.useMultisampledRTT(C)===!1?tt=jt.get(C).__webglMultisampledFramebuffer:Array.isArray(se)?tt=se[ht]:tt=se,q.copy(C.viewport),ut.copy(C.scissor),mt=C.scissorTest}else q.copy(at).multiplyScalar(K).floor(),ut.copy(Et).multiplyScalar(K).floor(),mt=At;if(ht!==0&&(tt=sn),Gt.bindFramebuffer(k.FRAMEBUFFER,tt)&&pt&&Gt.drawBuffers(C,tt),Gt.viewport(q),Gt.scissor(ut),Gt.setScissorTest(mt),Ot){const zt=jt.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Q,zt.__webglTexture,ht)}else if(Ft){const zt=Q;for(let ne=0;ne<C.textures.length;ne++){const se=jt.get(C.textures[ne]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ne,se.__webglTexture,ht,zt)}}else if(C!==null&&ht!==0){const zt=jt.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zt.__webglTexture,ht)}w=-1},this.readRenderTargetPixels=function(C,Q,ht,pt,tt,Ot,Ft,qt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=jt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt){Gt.bindFramebuffer(k.FRAMEBUFFER,zt);try{const ne=C.textures[qt],se=ne.format,Jt=ne.type;if(!ie.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-pt&&ht>=0&&ht<=C.height-tt&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+qt),k.readPixels(Q,ht,pt,tt,Vt.convert(se),Vt.convert(Jt),Ot))}finally{const ne=$!==null?jt.get($).__webglFramebuffer:null;Gt.bindFramebuffer(k.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(C,Q,ht,pt,tt,Ot,Ft,qt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=jt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt)if(Q>=0&&Q<=C.width-pt&&ht>=0&&ht<=C.height-tt){Gt.bindFramebuffer(k.FRAMEBUFFER,zt);const ne=C.textures[qt],se=ne.format,Jt=ne.type;if(!ie.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ge),k.bufferData(k.PIXEL_PACK_BUFFER,Ot.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+qt),k.readPixels(Q,ht,pt,tt,Vt.convert(se),Vt.convert(Jt),0);const Ce=$!==null?jt.get($).__webglFramebuffer:null;Gt.bindFramebuffer(k.FRAMEBUFFER,Ce);const Ye=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await hS(k,Ye,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ge),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ot),k.deleteBuffer(ge),k.deleteSync(Ye),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Q=null,ht=0){const pt=Math.pow(2,-ht),tt=Math.floor(C.image.width*pt),Ot=Math.floor(C.image.height*pt),Ft=Q!==null?Q.x:0,qt=Q!==null?Q.y:0;fe.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ht,0,0,Ft,qt,tt,Ot),Gt.unbindTexture()};const nl=k.createFramebuffer(),il=k.createFramebuffer();this.copyTextureToTexture=function(C,Q,ht=null,pt=null,tt=0,Ot=null){Ot===null&&(tt!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=tt,tt=0):Ot=0);let Ft,qt,zt,ne,se,Jt,ge,Ce,Ye;const Ie=C.isCompressedTexture?C.mipmaps[Ot]:C.image;if(ht!==null)Ft=ht.max.x-ht.min.x,qt=ht.max.y-ht.min.y,zt=ht.isBox3?ht.max.z-ht.min.z:1,ne=ht.min.x,se=ht.min.y,Jt=ht.isBox3?ht.min.z:0;else{const Cn=Math.pow(2,-tt);Ft=Math.floor(Ie.width*Cn),qt=Math.floor(Ie.height*Cn),C.isDataArrayTexture?zt=Ie.depth:C.isData3DTexture?zt=Math.floor(Ie.depth*Cn):zt=1,ne=0,se=0,Jt=0}pt!==null?(ge=pt.x,Ce=pt.y,Ye=pt.z):(ge=0,Ce=0,Ye=0);const _e=Vt.convert(Q.format),ee=Vt.convert(Q.type);let qe;Q.isData3DTexture?(fe.setTexture3D(Q,0),qe=k.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(fe.setTexture2DArray(Q,0),qe=k.TEXTURE_2D_ARRAY):(fe.setTexture2D(Q,0),qe=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);const Se=k.getParameter(k.UNPACK_ROW_LENGTH),Rn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),mi=k.getParameter(k.UNPACK_SKIP_PIXELS),In=k.getParameter(k.UNPACK_SKIP_ROWS),gn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ie.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ie.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ne),k.pixelStorei(k.UNPACK_SKIP_ROWS,se),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Jt);const ke=C.isDataArrayTexture||C.isData3DTexture,Fn=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){const Cn=jt.get(C),$e=jt.get(Q),bn=jt.get(Cn.__renderTarget),Cr=jt.get($e.__renderTarget);Gt.bindFramebuffer(k.READ_FRAMEBUFFER,bn.__webglFramebuffer),Gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let Vn=0;Vn<zt;Vn++)ke&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,jt.get(C).__webglTexture,tt,Jt+Vn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,jt.get(Q).__webglTexture,Ot,Ye+Vn)),k.blitFramebuffer(ne,se,Ft,qt,ge,Ce,Ft,qt,k.DEPTH_BUFFER_BIT,k.NEAREST);Gt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(tt!==0||C.isRenderTargetTexture||jt.has(C)){const Cn=jt.get(C),$e=jt.get(Q);Gt.bindFramebuffer(k.READ_FRAMEBUFFER,nl),Gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,il);for(let bn=0;bn<zt;bn++)ke?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Cn.__webglTexture,tt,Jt+bn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Cn.__webglTexture,tt),Fn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$e.__webglTexture,Ot,Ye+bn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,$e.__webglTexture,Ot),tt!==0?k.blitFramebuffer(ne,se,Ft,qt,ge,Ce,Ft,qt,k.COLOR_BUFFER_BIT,k.NEAREST):Fn?k.copyTexSubImage3D(qe,Ot,ge,Ce,Ye+bn,ne,se,Ft,qt):k.copyTexSubImage2D(qe,Ot,ge,Ce,ne,se,Ft,qt);Gt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Fn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(qe,Ot,ge,Ce,Ye,Ft,qt,zt,_e,ee,Ie.data):Q.isCompressedArrayTexture?k.compressedTexSubImage3D(qe,Ot,ge,Ce,Ye,Ft,qt,zt,_e,Ie.data):k.texSubImage3D(qe,Ot,ge,Ce,Ye,Ft,qt,zt,_e,ee,Ie):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ot,ge,Ce,Ft,qt,_e,ee,Ie.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ot,ge,Ce,Ie.width,Ie.height,_e,Ie.data):k.texSubImage2D(k.TEXTURE_2D,Ot,ge,Ce,Ft,qt,_e,ee,Ie);k.pixelStorei(k.UNPACK_ROW_LENGTH,Se),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,mi),k.pixelStorei(k.UNPACK_SKIP_ROWS,In),k.pixelStorei(k.UNPACK_SKIP_IMAGES,gn),Ot===0&&Q.generateMipmaps&&k.generateMipmap(qe),Gt.unbindTexture()},this.initRenderTarget=function(C){jt.get(C).__webglFramebuffer===void 0&&fe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?fe.setTextureCube(C,0):C.isData3DTexture?fe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?fe.setTexture2DArray(C,0):fe.setTexture2D(C,0),Gt.unbindTexture()},this.resetState=function(){V=0,F=0,$=null,Gt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const sv={xRange:[-2,2],yRange:[-1.5,1.5],gridDivisions:8,axisColor:8947848,gridColor:3355443},C0=(o,t,i,r)=>({x:1-i*o*o+t,y:r*o}),w0=(o,t,i,r)=>({x:t,y:-r*o+i*t-t*t*t}),P1=o=>{const{xRange:t,yRange:i,gridDivisions:r,axisColor:l,gridColor:u}=sv,[d,h]=t,[g,p]=i,v=(h-d)/r,x=(p-g)/r,y=new ko;y.name="coordinate-system";for(let A=0;A<=r;A++){const E=d+A*v,b=Math.abs(E)<.01,m=[new it(E,g,-.01),new it(E,p,-.01)],I=new On().setFromPoints(m),B=new Sr({color:b?l:u,transparent:!0,opacity:b?1:.4}),N=new Ko(I,B);N.userData.isGrid=!0,y.add(N)}for(let A=0;A<=r;A++){const E=g+A*x,b=Math.abs(E)<.01,m=[new it(d,E,-.01),new it(h,E,-.01)],I=new On().setFromPoints(m),B=new Sr({color:b?l:u,transparent:!0,opacity:b?1:.4}),N=new Ko(I,B);N.userData.isGrid=!0,y.add(N)}const _=(A,E,b=.15)=>{const m=document.createElement("canvas"),I=m.getContext("2d");m.width=128,m.height=64,I.fillStyle="transparent",I.fillRect(0,0,m.width,m.height),I.font="Bold 32px Arial",I.fillStyle="#aaaaaa",I.textAlign="center",I.textBaseline="middle",I.fillText(A,m.width/2,m.height/2);const B=new jS(m);B.minFilter=bi;const N=new Z0({map:B,transparent:!0,depthTest:!1}),D=new HS(N);return D.position.copy(E),D.scale.set(b*2,b,1),D.userData.isGrid=!0,D};for(let A=0;A<=r;A++){const E=d+A*v;Math.abs(E)>.01&&y.add(_(E.toFixed(1),new it(E,g-.15,0),.12))}for(let A=0;A<=r;A++){const E=g+A*x;Math.abs(E)>.01&&y.add(_(E.toFixed(1),new it(d-.2,E,0),.12))}return y.add(_("x",new it(h+.2,0,0),.18)),y.add(_("y",new it(0,p+.15,0),.18)),y.add(_("0",new it(-.12,-.12,0),.1)),o.add(y),y},Sn={period1:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period2:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period3:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period4:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period5:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period6plus:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},trajectory:"#ff00ff",manifold:"#1e90ff",stableManifold:"#ffa500",attractor:"#27ae60",repeller:"#e74c3c",saddlePoint:"#eedf32",periodicBlue:"#3498db"},B1=()=>{const o=Kt.useRef(null),t=Kt.useRef(null),i=Kt.useRef(null),r=Kt.useRef(null),l=Kt.useRef(null),u=Kt.useRef(null),d=Kt.useRef(null),[h,g]=Kt.useState("manifold"),[p,v]=Kt.useState("henon"),[x,y]=Kt.useState(null),[_,A]=Kt.useState({a:.4,b:.3,epsilon:.0625,startX:.1,startY:.1,maxIterations:1e3,maxPeriod:5}),[E,b]=Kt.useState({orbits:[],trajectoryPoints:[],currentPoint:{x:.1,y:.1},iteration:0,isRunning:!1,isReady:!1,showOrbits:!1,showTrail:!0,showOrbitLines:!1,highlightedOrbitId:null,hasStarted:!1}),[m,I]=Kt.useState({manifolds:[],stableManifolds:[],fixedPoints:[],intersections:[],isComputing:!1,isReady:!1,showOrbits:!0,showOrbitLines:!1,showUnstableManifold:!0,showStableManifold:!1,intersectionThreshold:.05,highlightedOrbitId:null,currentPoint:{x:.1,y:.1,nx:1,ny:0},trajectoryPoints:[],iteration:0,isRunning:!1,hasStarted:!1,showTrail:!0,startPoint:{x:.1,y:.1,nx:1,ny:0}}),[B,N]=Kt.useState({period1:!0,period2:!0,period3:!0,period4:!0,period5:!0,period6plus:!1}),[D,V]=Kt.useState({gridBoxes:[],invariantMeasure:null,leftEigenvector:null,transitions:null,selectedBoxIndex:null,currentBoxIndex:-1,isComputing:!1,subdivisions:20,pointsPerBox:64,epsilon:.05,showUlamOverlay:!1,showTransitions:!0,showCurrentBox:!0,needsRecompute:!1}),[F,$]=Kt.useState({isAnimating:!1,parameter:"a",rangeValue:.1,direction:1,steps:10,currentStep:0,baseValue:null,targetValue:null});Kt.useRef(null);const[w,L]=Kt.useState({isRecording:!1,isEncoding:!1,frameCount:0,recordingEnabled:!1,encodingProgress:0,error:null}),q=Kt.useRef([]),ut=Kt.useRef(null),mt=Kt.useRef(null),vt=Kt.useRef(null),[ct,H]=Kt.useState({visible:!1,x:0,y:0,data:null}),nt=Kt.useRef(new QS),K=Kt.useRef(new Ee);Kt.useEffect(()=>{if(!o.current)return;const P=new FS;P.background=new he(657930),i.current=P;const[ot,T]=sv.yRange,S=T-ot,U=.5,W=window.innerWidth*.75/window.innerHeight,Z=S+U*2,X=Z*W,gt=new tv(-X/2,X/2,Z/2,-Z/2,.1,1e3);gt.position.z=5,r.current=gt;const lt=new O1({canvas:o.current,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});lt.setSize(window.innerWidth*.75,window.innerHeight),lt.setPixelRatio(window.devicePixelRatio),t.current=lt,P1(P);const Rt=()=>{const _t=window.innerWidth*.75/window.innerHeight,wt=Z*_t;gt.left=-wt/2,gt.right=wt/2,gt.updateProjectionMatrix(),lt.setSize(window.innerWidth*.75,window.innerHeight)};window.addEventListener("resize",Rt);const Ut=()=>{l.current=requestAnimationFrame(Ut),lt.render(P,gt)};return Ut(),()=>{window.removeEventListener("resize",Rt),l.current&&cancelAnimationFrame(l.current),u.current&&cancelAnimationFrame(u.current),lt.dispose()}},[]),Kt.useEffect(()=>{(async()=>{try{const ot=await My(()=>import("./henon_periodic_orbits-CG1xlsOS.js"),[]);await ot.default(),y(ot),console.log("WASM module loaded successfully")}catch(ot){console.error("Failed to load WASM module:",ot)}})()},[]),Kt.useEffect(()=>{A(p==="duffing"?P=>({...P,a:2.75,b:.2}):P=>({...P,a:.4,b:.3}))},[p]);const Tt=Kt.useCallback((P,ot)=>{const T=_.a,S=_.b,U=-2*T*P,W=1,Z=S,X=0,gt=U+X,lt=U*X-W*Z;return{j11:U,j12:W,j21:Z,j22:X,trace:gt,det:lt}},[_.a,_.b]),O=Kt.useCallback(P=>{if(!o.current||!i.current||!r.current)return;const ot=o.current.getBoundingClientRect();if(K.current.x=(P.clientX-ot.left)/ot.width*2-1,K.current.y=-((P.clientY-ot.top)/ot.height)*2+1,nt.current.setFromCamera(K.current,r.current),D.showUlamOverlay&&D.gridBoxes.length>0){const U=i.current.getObjectByName("ulam-grid");if(U){const W=nt.current.intersectObject(U);if(W.length>0&&W[0].instanceId!==void 0){const Z=W[0].instanceId,X=D.gridBoxes[Z],gt=D.invariantMeasure?D.invariantMeasure[Z]:0,lt=D.invariantMeasure?Math.max(...D.invariantMeasure):1;let Rt=0,Ut=[];if(mt.current)try{const _t=mt.current.get_transitions(Z);_t&&_t.length>0&&(Rt=_t.length,Ut=_t.sort((wt,Xt)=>(Xt.probability||0)-(wt.probability||0)).slice(0,3))}catch(_t){console.error("Error getting transitions:",_t)}H({visible:!0,x:P.clientX,y:P.clientY,data:{type:"Ulam Box",boxIndex:Z,pos:{x:X.center[0],y:X.center[1]},measure:gt,measurePercent:lt>0?gt/lt*100:0,numTransitions:Rt,topTransitions:Ut,isCurrentBox:Z===D.currentBoxIndex}});return}}}const T=[];i.current.traverse(U=>{U.isMesh&&(U.userData.type==="orbit"||U.userData.type==="fixedPoint")&&T.push(U)});const S=nt.current.intersectObjects(T,!1);if(S.length>0){const W=S[0].object.userData,Z=Tt(W.pos.x,W.pos.y);W.type==="orbit"&&W.orbitId&&(h==="periodic"&&E.showOrbitLines?b(X=>X.highlightedOrbitId!==W.orbitId?{...X,highlightedOrbitId:W.orbitId}:X):h==="manifold"&&m.showOrbitLines&&I(X=>X.highlightedOrbitId!==W.orbitId?{...X,highlightedOrbitId:W.orbitId}:X)),H({visible:!0,x:P.clientX,y:P.clientY,data:{type:W.type==="fixedPoint"?"Fixed Point":"Periodic Point",period:W.period,stability:W.stability,pos:W.pos,eigenvalues:W.eigenvalues,jacobian:Z,orbitSize:W.orbitPoints?.length||1}})}else H(U=>U.visible?{...U,visible:!1}:U),h==="periodic"&&E.highlightedOrbitId!==null&&b(U=>U.highlightedOrbitId!==null?{...U,highlightedOrbitId:null}:U),h==="manifold"&&m.highlightedOrbitId!==null&&I(U=>U.highlightedOrbitId!==null?{...U,highlightedOrbitId:null}:U)},[Tt,D.showUlamOverlay,D.gridBoxes,D.invariantMeasure,D.currentBoxIndex,h,E.showOrbitLines,E.highlightedOrbitId,m.showOrbitLines,m.highlightedOrbitId]);Kt.useEffect(()=>{!o.current||!i.current||!r.current||o.current.getBoundingClientRect()},[O]);const at=Kt.useCallback(P=>{if(!mt.current)return;const ot=mt.current.get_transitions(P);V(T=>({...T,selectedBoxIndex:P,transitions:ot}))},[]);Kt.useEffect(()=>{const P=o.current;if(!P)return;const ot=T=>{if(!D.showUlamOverlay||!D.gridBoxes.length)return;const S=P.getBoundingClientRect(),U=(T.clientX-S.left)/S.width*2-1,W=-((T.clientY-S.top)/S.height)*2+1;nt.current.setFromCamera(new Ee(U,W),r.current);const X=i.current.getObjectByName("ulam-grid");if(X){const gt=nt.current.intersectObject(X);if(gt.length>0){const lt=gt[0].instanceId;lt!==void 0&&at(lt)}else V(lt=>({...lt,selectedBoxIndex:null,transitions:null}))}};return P.addEventListener("mousemove",O),P.addEventListener("click",ot),()=>{P.removeEventListener("mousemove",O),P.removeEventListener("click",ot)}},[O,D.showUlamOverlay,D.gridBoxes.length,at]),Kt.useEffect(()=>{if(!x)return;let P=!1;return b(T=>({...T,isReady:!1,orbits:[],trajectoryPoints:[],iteration:0,hasStarted:!1,showOrbits:!1})),(()=>{try{if(P)return;let T,S;if(p==="duffing"?(T=x.DuffingSystemWasm,S=new T(_.a,_.b,_.maxPeriod)):(T=x.BoundaryHenonSystemWasm,S=new T(_.a,_.b,_.epsilon,_.maxPeriod)),P){S.free();return}const U=S.getPeriodicOrbits();S.free(),b(W=>({...W,orbits:U,isReady:!0,currentPoint:{x:_.startX,y:_.startY}}))}catch(T){console.error("Failed to compute periodic orbits:",T),b(S=>({...S,isReady:!0,orbits:[]}))}})(),()=>{P=!0}},[x,p,_.a,_.b,_.epsilon,_.maxPeriod,_.startX,_.startY]),Kt.useEffect(()=>{if(h==="manifold")return d.current&&clearTimeout(d.current),I(P=>({...P,isComputing:!0})),d.current=setTimeout(()=>{if(x)try{if(p==="duffing"){console.log("Computing Duffing manifold");const P=x.compute_duffing_manifold_simple(_.a,_.b,_.epsilon);I(ot=>({...ot,manifolds:P.manifolds||[],fixedPoints:P.fixed_points||[],isComputing:!1,isReady:!0}))}else if(E.orbits&&E.orbits.length>0)if(m.showStableManifold){console.log("Computing stable AND unstable manifolds:",E.orbits.length,"orbits");const P=x.compute_stable_and_unstable_manifolds(_.a,_.b,_.epsilon,E.orbits,m.intersectionThreshold);I(ot=>({...ot,manifolds:P.unstable_manifolds||[],stableManifolds:P.stable_manifolds||[],fixedPoints:P.fixed_points||[],intersections:P.intersections||[],isComputing:!1,isReady:!0}))}else{console.log("Using periodic orbits for manifold:",E.orbits.length,"orbits");const P=x.compute_manifold_from_orbits(_.a,_.b,_.epsilon,E.orbits);I(ot=>({...ot,manifolds:P.manifolds||[],stableManifolds:[],fixedPoints:P.fixed_points||[],intersections:[],isComputing:!1,isReady:!0}))}else{console.log("No periodic orbits available, using simple computation");const P=x.compute_manifold_simple(_.a,_.b,_.epsilon);I(ot=>({...ot,manifolds:P.manifolds||[],stableManifolds:[],fixedPoints:P.fixed_points||[],intersections:[],isComputing:!1,isReady:!0}))}}catch(P){console.error("Manifold computation error:",P),I(ot=>({...ot,isComputing:!1}))}},500),()=>{d.current&&clearTimeout(d.current)}},[h,p,_.a,_.b,_.epsilon,E.orbits,x,m.showStableManifold,m.intersectionThreshold]),Kt.useEffect(()=>{if(!F.isAnimating||h!=="manifold"||m.isComputing)return;const{parameter:P,rangeValue:ot,direction:T,steps:S,currentStep:U,baseValue:W}=F;if(U>=S){$(lt=>({...lt,isAnimating:!1}));return}const Z=ot/S,X=U+1,gt=W+T*Z*X;A(lt=>({...lt,[P]:parseFloat(gt.toFixed(4))})),$(lt=>({...lt,currentStep:X}))},[F.isAnimating,F.currentStep,m.isComputing,h]);const Et=Kt.useCallback(async()=>{const P=_[F.parameter],ot=P+F.direction*F.rangeValue;if(w.recordingEnabled&&o.current)try{const T=o.current,S=1280,U=720,W=new OffscreenCanvas(S,U),Z=W.getContext("2d");Z.drawImage(T,0,0,S,U);const X=`a = ${_.a.toFixed(4)}  b = ${_.b.toFixed(4)}  ε = ${_.epsilon.toFixed(4)}`;Z.fillStyle="rgba(0, 0, 0, 0.7)",Z.fillRect(10,U-40,400,30),Z.font="bold 16px monospace",Z.fillStyle="#4CAF50",Z.fillText(X,20,U-18);const gt=await createImageBitmap(W);q.current.push(gt),L(lt=>({...lt,frameCount:1})),console.log("Initial frame captured")}catch(T){console.error("Initial frame capture error:",T)}$(T=>({...T,isAnimating:!0,baseValue:P,targetValue:ot,currentStep:0}))},[_,F.parameter,F.direction,F.rangeValue,w.recordingEnabled]),At=Kt.useCallback(()=>{$(P=>({...P,isAnimating:!1,currentStep:0}))},[]),It=Kt.useCallback(async()=>{if(!o.current||!w.recordingEnabled)return null;const P=o.current,ot=1280,T=720,S=new OffscreenCanvas(ot,T),U=S.getContext("2d");U.drawImage(P,0,0,ot,T);const W=`a = ${_.a.toFixed(4)}  b = ${_.b.toFixed(4)}  ε = ${_.epsilon.toFixed(4)}`;return U.fillStyle="rgba(0, 0, 0, 0.7)",U.fillRect(10,T-40,400,30),U.font="bold 16px monospace",U.fillStyle="#4CAF50",U.fillText(W,20,T-18),await createImageBitmap(S)},[_.a,_.b,_.epsilon,w.recordingEnabled]),Wt=Kt.useCallback(()=>{ut.current&&ut.current.terminate();const P=new Worker(new URL("/assets/videoEncoder.worker-7mA2J84V.js",import.meta.url),{type:"classic"});return P.onmessage=ot=>{const{type:T,blob:S,frameCount:U,error:W}=ot.data;switch(T){case"ready":console.log("Encoder ready");break;case"progress":L(lt=>({...lt,frameCount:U}));break;case"complete":const Z=URL.createObjectURL(S),X=document.createElement("a"),gt=rt();X.href=Z,X.download=gt,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(Z),L(lt=>({...lt,isEncoding:!1,isRecording:!1,recordingEnabled:!1})),q.current=[];break;case"error":console.error("Encoder error:",W),L(lt=>({...lt,error:W,isEncoding:!1}));break}},ut.current=P,P},[]),rt=Kt.useCallback(()=>{const P=_.a.toFixed(3).replace(".","p"),ot=_.b.toFixed(3).replace(".","p"),T=_.epsilon.toFixed(4).replace(".","p"),S=F.parameter,U=(F.baseValue||0).toFixed(3).replace(".","p").replace("-","m"),W=(F.targetValue||0).toFixed(3).replace(".","p").replace("-","m");return`henon_${S}_a${P}_b${ot}_eps${T}_${U}_to_${W}.mp4`},[_.a,_.b,_.epsilon,F.parameter,F.baseValue,F.targetValue]),St=Kt.useCallback(async()=>{if(!o.current||!t.current||!i.current||!r.current)return;t.current.render(i.current,r.current);const P=o.current,ot=1920,T=1080,S=new OffscreenCanvas(ot,T),U=S.getContext("2d");if(U.drawImage(P,0,0,ot,T),U.fillStyle="rgba(0, 0, 0, 0.8)",U.fillRect(10,T-80,500,70),U.font="bold 18px monospace",U.fillStyle="#4CAF50",h==="periodic")U.fillText(`Periodic Orbits | Iteration: ${E.iteration}`,20,T-55),U.font="14px monospace",U.fillStyle="#aaa",U.fillText(`Current: (${E.currentPoint.x.toFixed(6)}, ${E.currentPoint.y.toFixed(6)})`,20,T-32);else if(h==="manifold"){U.fillText("Manifold Approximation",20,T-55),U.font="14px monospace",U.fillStyle="#aaa";const wt=m.manifolds.reduce((Lt,ae)=>Lt+(ae.points_positive?.length||0)+(ae.points_negative?.length||0),0),Xt=m.stableManifolds.reduce((Lt,ae)=>Lt+(ae.points_positive?.length||0)+(ae.points_negative?.length||0),0),Vt=m.showStableManifold?`, ${Xt} stable pts`:"";U.fillText(`${m.fixedPoints.length} fixed pts, ${wt} unstable pts${Vt}`,20,T-32)}U.font="bold 14px monospace",U.fillStyle="#4CAF50",U.fillText(`a = ${_.a.toFixed(4)}   b = ${_.b.toFixed(4)}   ε = ${_.epsilon.toFixed(4)}`,20,T-12);const W=await S.convertToBlob({type:"image/png",quality:1}),Z=URL.createObjectURL(W),X=document.createElement("a"),gt=_.a.toFixed(3).replace(".","p"),lt=_.b.toFixed(3).replace(".","p"),Rt=_.epsilon.toFixed(4).replace(".","p"),Ut=h==="periodic"?"periodic":"manifold",_t=h==="periodic"?`_iter${E.iteration}`:"";X.href=Z,X.download=`henon_${Ut}_a${gt}_b${lt}_eps${Rt}${_t}.png`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(Z)},[h,_,E.iteration,E.currentPoint,m.manifolds,m.fixedPoints,m.stableManifolds,m.showUnstableManifold,m.showStableManifold]),Pt=Kt.useCallback(async()=>{if(q.current.length===0){console.warn("No frames to encode");return}L(S=>({...S,isEncoding:!0,encodingProgress:0}));const P=Wt();P.postMessage({type:"init",data:{width:1280,height:720,fps:2,filename:rt()}}),await new Promise(S=>setTimeout(S,100));const T=1e6/2;for(let S=0;S<q.current.length;S++){const U=q.current[S];P.postMessage({type:"frame",data:{imageData:U,timestamp:S*T,duration:T}}),S%5===0&&await new Promise(W=>setTimeout(W,10))}P.postMessage({type:"finish"})},[Wt,rt]),$t=Kt.useRef(!1);Kt.useEffect(()=>{const P=$t.current,ot=m.isComputing;$t.current=ot,!(!w.recordingEnabled||!F.isAnimating)&&P&&!ot&&(console.log(`[Recording] Manifold finished, capturing frame for step ${F.currentStep}...`),requestAnimationFrame(async()=>{try{const T=await It();T?(q.current.push(T),L(S=>({...S,frameCount:q.current.length})),console.log(`[Recording] Frame ${q.current.length} captured`)):console.log("[Recording] captureFrame returned null")}catch(T){console.error("[Recording] Frame capture error:",T)}}))},[m.isComputing,F.isAnimating,w.recordingEnabled,F.currentStep,It]),Kt.useEffect(()=>{!F.isAnimating&&w.recordingEnabled&&q.current.length>0&&!w.isEncoding&&(console.log(`[Recording] Animation finished with ${q.current.length} frames, starting encoding...`),Pt())},[F.isAnimating,w.recordingEnabled,w.isEncoding,Pt]);const Qt=Kt.useCallback(()=>{w.recordingEnabled?(L(P=>({...P,recordingEnabled:!1})),q.current=[]):(L(P=>({...P,recordingEnabled:!0,frameCount:0,error:null})),q.current=[])},[w.recordingEnabled]);Kt.useEffect(()=>{if(!i.current)return;const P=i.current,ot=[];if(P.traverse(T=>{(T.userData.type==="trajectory"||T.userData.type==="orbit"||T.userData.type==="orbitLine"||T.userData.type==="manifold"||T.userData.type==="fixedPoint")&&ot.push(T)}),ot.forEach(T=>{T.geometry&&T.geometry.dispose(),T.material&&T.material.dispose(),P.remove(T)}),h==="periodic"){if(E.showOrbits&&E.orbits.length>0){const T=E.orbits.filter(U=>Ke(U)),S="#ff00ff";T.forEach((U,W)=>{const Z=`orbit-${U.period}-${W}`,X=E.highlightedOrbitId===Z,gt=X?S:de(U);if(U.points.forEach((lt,Rt)=>{const Ut=new sa(X?.06:.03,12,12),_t=new Ni({color:new he(gt)}),wt=new Mn(Ut,_t);wt.position.set(lt[0],lt[1],X?.15:.1),wt.userData={type:"orbit",orbitId:Z,period:U.period,stability:U.stability,pointIndex:Rt,pos:{x:lt[0],y:lt[1]},orbitPoints:U.points,eigenvalues:U.eigenvalues||null},P.add(wt)}),E.showOrbitLines&&U.points.length>1){const lt=new On,Rt=new Float32Array(U.points.length*3);U.points.forEach((Vt,Lt)=>{Rt[Lt*3]=Vt[0],Rt[Lt*3+1]=Vt[1],Rt[Lt*3+2]=X?.15:.1}),lt.setAttribute("position",new Nn(Rt,3));const Ut=X?S:de(U),_t=X?1:.4,wt=new Sr({color:new he(Ut),opacity:_t,transparent:!0,linewidth:X?3:1}),Xt=new t0(lt,wt);Xt.userData={type:"orbitLine",orbitId:Z},P.add(Xt)}})}if(E.showTrail&&E.trajectoryPoints.length>0&&E.trajectoryPoints.forEach((T,S)=>{const U=S/E.trajectoryPoints.length,W=.012*(.3+.7*U),Z=new sa(W,6,6),X=new Ni({color:new he(Sn.trajectory),opacity:.2+.6*U,transparent:!0}),gt=new Mn(Z,X);gt.position.set(T.x,T.y,.05),gt.userData.type="trajectory",P.add(gt)}),E.hasStarted&&E.currentPoint){const T=new sa(.04,16,16),S=new Ni({color:new he("#ffffff")}),U=new Mn(T,S);U.position.set(E.currentPoint.x,E.currentPoint.y,.2),U.userData.type="trajectory",P.add(U)}}else{if(m.showUnstableManifold&&m.manifolds.length>0&&m.manifolds.forEach(T=>{[T.plus,T.minus].forEach(S=>{if(S&&S.points&&S.points.length>1){const U=new On,W=new Float32Array(S.points.length*3);S.points.forEach(([gt,lt],Rt)=>{W[Rt*3]=gt,W[Rt*3+1]=lt,W[Rt*3+2]=.1}),U.setAttribute("position",new Nn(W,3));const Z=new Sr({color:new he(Sn.manifold),linewidth:2}),X=new Ko(U,Z);X.userData.type="manifold",P.add(X)}})}),m.showStableManifold&&m.stableManifolds.length>0&&m.stableManifolds.forEach(T=>{[T.plus,T.minus].forEach(S=>{if(S&&S.points&&S.points.length>1){const U=new On,W=new Float32Array(S.points.length*3);S.points.forEach(([gt,lt],Rt)=>{W[Rt*3]=gt,W[Rt*3+1]=lt,W[Rt*3+2]=.08}),U.setAttribute("position",new Nn(W,3));const Z=new Sr({color:new he(Sn.stableManifold),linewidth:2}),X=new Ko(U,Z);X.userData.type="manifold",P.add(X)}})}),m.fixedPoints.forEach(T=>{const S=(T.stability||"").toLowerCase(),U=S==="attractor"||S==="stable",X=U?Sn.attractor:S==="repeller"||S==="unstable"||S==="saddle"?Sn.saddlePoint:Sn.periodicBlue,gt=U?.03:.025,lt=new sa(gt,12,12),Rt=new Ni({color:new he(X)}),Ut=new Mn(lt,Rt);Ut.position.set(T.x,T.y,.2),Ut.userData={type:"fixedPoint",period:1,stability:T.stability,pos:{x:T.x,y:T.y},eigenvalues:T.eigenvalues||null},P.add(Ut)}),m.showTrail&&m.trajectoryPoints.length>0&&m.trajectoryPoints.forEach((T,S)=>{const U=S/m.trajectoryPoints.length,W=.012*(.3+.7*U),Z=new sa(W,6,6),X=new Ni({color:new he(Sn.trajectory),opacity:.2+.6*U,transparent:!0}),gt=new Mn(Z,X);gt.position.set(T.x,T.y,.05),gt.userData.type="trajectory",P.add(gt)}),m.hasStarted&&m.currentPoint){const T=new sa(.04,16,16),S=new Ni({color:new he("#ffffff")}),U=new Mn(T,S);U.position.set(m.currentPoint.x,m.currentPoint.y,.2),U.userData.type="trajectory",P.add(U)}if(m.showOrbits&&E.orbits.length>0){const T=E.orbits.filter(U=>Ke(U)),S="#ff00ff";T.forEach((U,W)=>{const Z=`orbit-${U.period}-${W}`,X=m.highlightedOrbitId===Z,gt=X?S:de(U);if(U.points.forEach((lt,Rt)=>{const Ut=new sa(X?.04:.02,10,10),_t=new Ni({color:new he(gt)}),wt=new Mn(Ut,_t);wt.position.set(lt[0],lt[1],X?.15:.05),wt.userData={type:"orbit",orbitId:Z,period:U.period,stability:U.stability,pointIndex:Rt,pos:{x:lt[0],y:lt[1]},orbitPoints:U.points,eigenvalues:U.eigenvalues||null},P.add(wt)}),m.showOrbitLines&&U.points.length>1){const lt=new On,Rt=new Float32Array(U.points.length*3);U.points.forEach((Vt,Lt)=>{Rt[Lt*3]=Vt[0],Rt[Lt*3+1]=Vt[1],Rt[Lt*3+2]=X?.15:.05}),lt.setAttribute("position",new Nn(Rt,3));const Ut=X?S:de(U),_t=X?1:.4,wt=new Sr({color:new he(Ut),opacity:_t,transparent:!0,linewidth:X?3:1}),Xt=new t0(lt,wt);Xt.userData={type:"orbitLine",orbitId:Z},P.add(Xt)}})}}},[h,E,m,B]);const de=P=>{const{stability:ot}=P;return ot.toLowerCase()==="stable"?Sn.attractor:ot.toLowerCase()==="saddle"?Sn.saddlePoint:ot.toLowerCase()==="unstable"?Sn.repeller:Sn.periodicBlue},Ke=P=>P.period===1?B.period1:P.period===2?B.period2:P.period===3?B.period3:P.period===4?B.period4:P.period===5?B.period5:B.period6plus,k=Kt.useCallback(()=>{if(!E.isReady||E.isRunning)return;const{x:P,y:ot}=E.currentPoint;if(!isFinite(P)||!isFinite(ot)||Math.abs(P)>10||Math.abs(ot)>10){b(U=>({...U,currentPoint:{x:_.startX,y:_.startY},trajectoryPoints:[],iteration:0,hasStarted:!1}));return}const S=(p==="duffing"?w0:C0)(P,ot,_.a,_.b);b(U=>({...U,currentPoint:S,trajectoryPoints:[...U.trajectoryPoints,{x:P,y:ot}],iteration:U.iteration+1,hasStarted:!0}))},[E.isReady,E.isRunning,E.currentPoint,_,p]),Le=Kt.useCallback(()=>{if(!E.isReady||E.isRunning)return;b(X=>({...X,isRunning:!0}));const P=p==="duffing"?w0:C0;let ot=E.currentPoint.x,T=E.currentPoint.y,S=E.iteration;const U=[...E.trajectoryPoints],W=5,Z=()=>{for(let X=0;X<W&&S<_.maxIterations;X++){if(!isFinite(ot)||!isFinite(T)||Math.abs(ot)>10||Math.abs(T)>10){b(lt=>({...lt,isRunning:!1,showOrbits:!0,hasStarted:!0,trajectoryPoints:U,currentPoint:{x:ot,y:T},iteration:S}));return}U.push({x:ot,y:T});const gt=P(ot,T,_.a,_.b);ot=gt.x,T=gt.y,S++}b(X=>({...X,currentPoint:{x:ot,y:T},trajectoryPoints:[...U],iteration:S,hasStarted:!0})),S<_.maxIterations?u.current=requestAnimationFrame(Z):b(X=>({...X,isRunning:!1,showOrbits:!0}))};u.current=requestAnimationFrame(Z)},[E,_,p]),ue=Kt.useCallback(()=>{u.current&&cancelAnimationFrame(u.current),b(P=>({...P,currentPoint:{x:_.startX,y:_.startY},trajectoryPoints:[],iteration:0,isRunning:!1,hasStarted:!1,showOrbits:!1}))},[_.startX,_.startY]),ie=Kt.useCallback(()=>{if(!m.isReady||m.isRunning||!x)return;const{x:P,y:ot,nx:T,ny:S}=m.currentPoint;if(!isFinite(P)||!isFinite(ot)||Math.abs(P)>10||Math.abs(ot)>10){I(Z=>({...Z,currentPoint:{...Z.startPoint},trajectoryPoints:[],iteration:0,hasStarted:!1}));return}const{boundary_map:U}=x;if(!U){console.error("boundary_map not found in WASM module");return}const W=U(P,ot,T,S,_.a,_.b,_.epsilon);I(Z=>({...Z,currentPoint:{x:W.x,y:W.y,nx:W.nx,ny:W.ny},trajectoryPoints:[...Z.trajectoryPoints,{x:P,y:ot,nx:T,ny:S}],iteration:Z.iteration+1,hasStarted:!0}))},[m.isReady,m.isRunning,m.currentPoint,x,_]),Gt=Kt.useCallback(()=>{if(!m.isReady||m.isRunning||!x)return;I(lt=>({...lt,isRunning:!0}));const{boundary_map:P}=x;if(!P){console.error("boundary_map not found in WASM module"),I(lt=>({...lt,isRunning:!1}));return}let ot=m.currentPoint.x,T=m.currentPoint.y,S=m.currentPoint.nx,U=m.currentPoint.ny,W=m.iteration;const Z=[...m.trajectoryPoints],X=5,gt=()=>{for(let lt=0;lt<X&&W<_.maxIterations;lt++){if(!isFinite(ot)||!isFinite(T)||Math.abs(ot)>10||Math.abs(T)>10){I(Ut=>({...Ut,isRunning:!1,hasStarted:!0,trajectoryPoints:Z,currentPoint:{x:ot,y:T,nx:S,ny:U},iteration:W}));return}Z.push({x:ot,y:T,nx:S,ny:U});const Rt=P(ot,T,S,U,_.a,_.b,_.epsilon);ot=Rt.x,T=Rt.y,S=Rt.nx,U=Rt.ny,W++}I(lt=>({...lt,currentPoint:{x:ot,y:T,nx:S,ny:U},trajectoryPoints:[...Z],iteration:W,hasStarted:!0})),W<_.maxIterations?u.current=requestAnimationFrame(gt):I(lt=>({...lt,isRunning:!1}))};u.current=requestAnimationFrame(gt)},[m,_,x]),Ne=Kt.useCallback(()=>{u.current&&cancelAnimationFrame(u.current),I(P=>({...P,currentPoint:{...P.startPoint},trajectoryPoints:[],iteration:0,isRunning:!1,hasStarted:!1}))},[]);Kt.useEffect(()=>{h==="manifold"&&Ne()},[_.a,_.b,_.epsilon,h,Ne]);const jt=Kt.useMemo(()=>{let P=0;return m.manifolds.forEach(ot=>{ot.plus?.points&&(P+=ot.plus.points.length),ot.minus?.points&&(P+=ot.minus.points.length)}),P},[m.manifolds]),fe=Kt.useCallback(async()=>{if(x){V(P=>({...P,isComputing:!0,needsRecompute:!1}));try{const{UlamComputer:P}=x;if(!P)throw console.error("UlamComputer export is missing from WASM module!"),new Error("UlamComputer definition missing");const ot=new P(_.a,_.b,D.subdivisions,D.pointsPerBox,D.epsilon);mt.current=ot;const T=ot.get_grid_boxes(),S=ot.get_invariant_measure(),U=ot.get_left_eigenvector();let W=-1;E.hasStarted&&E.currentPoint&&(W=ot.get_box_index(E.currentPoint.x,E.currentPoint.y)),V(Z=>({...Z,isComputing:!1,gridBoxes:T,invariantMeasure:S,leftEigenvector:U,currentBoxIndex:W,selectedBoxIndex:null,transitions:null}))}catch(P){console.error("Ulam computation failed:",P),V(ot=>({...ot,isComputing:!1}))}}},[x,_.a,_.b,D.subdivisions,D.pointsPerBox,D.epsilon,E.hasStarted,E.currentPoint]);return Kt.useEffect(()=>{h==="manifold"&&V(P=>({...P,epsilon:_.epsilon}))},[h,_.epsilon]),Kt.useEffect(()=>{if(!(!D.showUlamOverlay||!x))return vt.current&&clearTimeout(vt.current),vt.current=setTimeout(()=>{fe()},200),()=>{vt.current&&clearTimeout(vt.current)}},[D.showUlamOverlay,x,_.a,_.b,D.epsilon,D.subdivisions,D.pointsPerBox,fe]),Kt.useEffect(()=>{if(!(!mt.current||!D.showUlamOverlay)&&E.hasStarted&&E.currentPoint){const P=mt.current.get_box_index(E.currentPoint.x,E.currentPoint.y);if(P!==D.currentBoxIndex){const ot=P>=0?mt.current.get_transitions(P):null;V(T=>({...T,currentBoxIndex:P,transitions:T.showCurrentBox?ot:T.transitions,selectedBoxIndex:T.showCurrentBox?P:T.selectedBoxIndex}))}}},[E.currentPoint,E.hasStarted,D.showUlamOverlay,D.currentBoxIndex]),Kt.useEffect(()=>{const P=i.current;if(!P)return;const ot=()=>{const Ut=P.getObjectByName("ulam-grid");Ut&&(Ut.geometry.dispose(),Ut.material.dispose(),P.remove(Ut))};if(!D.showUlamOverlay||!D.gridBoxes.length){ot();return}ot();const T=D.gridBoxes,S=T.length,U=new tl(1,1),W=new Ni({color:16777215,transparent:!0,opacity:.5,side:Pi,depthWrite:!1}),Z=new kS(U,W,S);Z.name="ulam-grid",Z.userData.type="ulamGrid";const X=new Bn,gt=new he,lt=new Map;D.selectedBoxIndex!==null&&D.transitions&&D.transitions.forEach(Ut=>{lt.set(Ut.index,Ut.probability)});let Rt=0;return D.invariantMeasure&&(Rt=Math.max(...D.invariantMeasure)),T.forEach((Ut,_t)=>{const wt=Ut.center[0],Xt=Ut.center[1],Vt=Ut.radius[0],Lt=Ut.radius[1];X.position.set(wt,Xt,-.05),X.scale.set(Vt*2*.95,Lt*2*.95,1),X.updateMatrix(),Z.setMatrixAt(_t,X.matrix);const ae=D.showCurrentBox&&_t===D.currentBoxIndex,Y=D.selectedBoxIndex!==null&&_t===D.selectedBoxIndex;if(ae&&!Y)gt.setHex(16711935),Z.setColorAt(_t,gt);else if(D.selectedBoxIndex!==null)if(_t===D.selectedBoxIndex)gt.setHex(65535),Z.setColorAt(_t,gt);else if(lt.has(_t)){const Dt=lt.get(_t);gt.setHSL(.7-Dt*.7,1,.5),Z.setColorAt(_t,gt)}else gt.setHex(2236962),Z.setColorAt(_t,gt);else if(D.invariantMeasure&&D.invariantMeasure.length===S){const Dt=D.invariantMeasure[_t];if(Dt>0){const kt=.66-Dt/Rt*.5;gt.setHSL(kt,1,.5),Z.setColorAt(_t,gt)}else gt.setHex(1118481),Z.setColorAt(_t,gt)}else gt.setHex(3355443),Z.setColorAt(_t,gt)}),Z.instanceMatrix.needsUpdate=!0,Z.instanceColor&&(Z.instanceColor.needsUpdate=!0),P.add(Z),ot},[D.showUlamOverlay,D.gridBoxes,D.selectedBoxIndex,D.transitions,D.invariantMeasure,D.currentBoxIndex,D.showCurrentBox]),Kt.useEffect(()=>{if(!i.current)return;const P=i.current,ot=[];P.traverse(T=>{h!=="periodic"&&(T.userData.type==="orbit"||T.userData.type==="trajectory"||T.userData.type==="orbitLine")&&ot.push(T),h!=="manifold"&&(T.userData.type==="manifold"||T.userData.type==="fixedPoint")&&ot.push(T),h!=="ulam"&&T.userData.type}),ot.forEach(T=>{T.geometry&&T.geometry.dispose(),T.material&&T.material.dispose(),P.remove(T)})},[h]),z.jsxs("div",{style:Ct.container,children:[z.jsxs("div",{style:Ct.sidebar,children:[z.jsxs("div",{style:Ct.section,children:[z.jsx("h3",{style:Ct.sectionTitle,children:"Mode"}),z.jsxs("div",{style:Ct.toggleContainer,children:[z.jsx("button",{onClick:()=>g("periodic"),style:{...Ct.toggleButton,...h==="periodic"?Ct.toggleActive:{}},children:"Periodic Orbits"}),z.jsx("button",{onClick:()=>g("manifold"),style:{...Ct.toggleButton,...h==="manifold"?Ct.toggleActive:{}},children:"Manifold Approximation"})]})]}),z.jsxs("div",{style:Ct.section,children:[z.jsx("h3",{style:Ct.sectionTitle,children:"Dynamic System"}),z.jsxs("select",{value:p,onChange:P=>v(P.target.value),style:{width:"100%",padding:"8px 12px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"6px",fontSize:"14px",cursor:"pointer"},disabled:E.isRunning||F.isAnimating,children:[z.jsx("option",{value:"henon",children:"Hénon Map"}),z.jsx("option",{value:"duffing",children:"Duffing Map"})]}),z.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:p==="henon"?"x' = 1 - ax² + y, y' = bx":"x' = y, y' = -bx + ay - y³"})]}),z.jsxs("div",{style:Ct.section,children:[z.jsx("h3",{style:Ct.sectionTitle,children:"System Parameters"}),z.jsxs("label",{style:Ct.label,children:[z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"a ="}),z.jsx("input",{type:"number",step:"0.01",value:_.a,onChange:P=>A({..._,a:parseFloat(P.target.value)||.1}),style:Ct.numberInput,disabled:E.isRunning})]}),z.jsx("input",{type:"range",min:"0.1",max:p==="duffing"?3:2,step:"0.01",value:_.a,onChange:P=>A({..._,a:parseFloat(P.target.value)}),style:Ct.slider,disabled:E.isRunning})]}),z.jsxs("label",{style:Ct.label,children:[z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"b ="}),z.jsx("input",{type:"number",step:"0.01",value:_.b,onChange:P=>A({..._,b:parseFloat(P.target.value)||.1}),style:Ct.numberInput,disabled:E.isRunning})]}),z.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.01",value:_.b,onChange:P=>A({..._,b:parseFloat(P.target.value)}),style:Ct.slider,disabled:E.isRunning})]}),h==="periodic"&&z.jsxs(z.Fragment,{children:[z.jsxs("label",{style:Ct.label,children:[z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"Max Period ="}),z.jsx("input",{type:"number",step:"1",min:"1",max:"20",value:_.maxPeriod,onChange:P=>A({..._,maxPeriod:parseInt(P.target.value)||2}),style:Ct.numberInput,disabled:E.isRunning})]}),z.jsx("input",{type:"range",min:"2",max:"10",step:"1",value:_.maxPeriod,onChange:P=>A({..._,maxPeriod:parseInt(P.target.value)}),style:Ct.slider,disabled:E.isRunning})]}),z.jsxs("label",{style:Ct.label,children:[z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"Max Iterations ="}),z.jsx("input",{type:"number",step:"100",min:"100",max:"10000",value:_.maxIterations,onChange:P=>A({..._,maxIterations:parseInt(P.target.value)||100}),style:Ct.numberInput,disabled:E.isRunning})]}),z.jsx("input",{type:"range",min:"100",max:"5000",step:"100",value:_.maxIterations,onChange:P=>A({..._,maxIterations:parseInt(P.target.value)}),style:Ct.slider,disabled:E.isRunning})]})]}),h==="manifold"&&z.jsxs("label",{style:Ct.label,children:[z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"epsilon ="}),z.jsx("input",{type:"number",step:"0.001",value:_.epsilon,onChange:P=>A({..._,epsilon:parseFloat(P.target.value)||.01}),style:Ct.numberInput})]}),z.jsx("input",{type:"range",min:"0.001",max:"0.2",step:"0.001",value:_.epsilon,onChange:P=>A({..._,epsilon:parseFloat(P.target.value)}),style:Ct.slider})]}),h==="manifold"&&p==="henon"&&z.jsxs("div",{style:{marginTop:"12px",borderTop:"1px solid #333",paddingTop:"12px"},children:[z.jsx("h4",{style:{fontSize:"12px",fontWeight:"600",marginBottom:"10px",color:"#888"},children:"Manifold Display"}),z.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",padding:"8px 10px",backgroundColor:m.showUnstableManifold?"rgba(30, 144, 255, 0.15)":"transparent",borderRadius:"6px",border:`1px solid ${m.showUnstableManifold?Sn.manifold:"#444"}`,cursor:"pointer",transition:"all 0.2s ease"},children:[z.jsx("input",{type:"checkbox",checked:m.showUnstableManifold,onChange:P=>I(ot=>({...ot,showUnstableManifold:P.target.checked})),style:{width:"16px",height:"16px",accentColor:Sn.manifold}}),z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[z.jsx("div",{style:{width:"12px",height:"3px",backgroundColor:Sn.manifold,borderRadius:"2px"}}),z.jsx("span",{style:{color:"#ccc",fontSize:"13px"},children:"Unstable Manifold"})]})]}),z.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",padding:"8px 10px",backgroundColor:m.showStableManifold?"rgba(255, 165, 0, 0.15)":"transparent",borderRadius:"6px",border:`1px solid ${m.showStableManifold?Sn.stableManifold:"#444"}`,cursor:"pointer",transition:"all 0.2s ease"},children:[z.jsx("input",{type:"checkbox",checked:m.showStableManifold,onChange:P=>I(ot=>({...ot,showStableManifold:P.target.checked})),style:{width:"16px",height:"16px",accentColor:Sn.stableManifold}}),z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[z.jsx("div",{style:{width:"12px",height:"3px",backgroundColor:Sn.stableManifold,borderRadius:"2px"}}),z.jsx("span",{style:{color:"#ccc",fontSize:"13px"},children:"Stable Manifold"})]})]}),m.showStableManifold&&z.jsxs("div",{style:{marginTop:"8px",padding:"10px",backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"6px",border:"1px solid #333"},children:[z.jsx("div",{style:{fontSize:"11px",fontWeight:"600",color:"#888",marginBottom:"8px"},children:"Intersection Detection"}),z.jsxs("label",{style:Ct.label,children:[z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"Threshold ε"}),z.jsx("input",{type:"number",step:"0.01",value:m.intersectionThreshold,onChange:P=>I(ot=>({...ot,intersectionThreshold:parseFloat(P.target.value)||.01})),style:Ct.numberInput})]}),z.jsx("input",{type:"range",min:"0.001",max:"0.2",step:"0.001",value:m.intersectionThreshold,onChange:P=>I(ot=>({...ot,intersectionThreshold:parseFloat(P.target.value)})),style:Ct.slider})]}),z.jsx("div",{style:{fontSize:"11px",marginTop:"6px"},children:(()=>{const P=m.intersections.filter(ot=>ot.has_intersection);if(P.length>0){const ot=Math.min(...P.map(T=>T.min_distance));return z.jsxs("div",{style:{color:"#e74c3c",fontWeight:"bold"},children:[z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[z.jsx("span",{style:{fontSize:"14px"},children:"⚠"}),z.jsx("span",{children:"Heteroclinic connection!"})]}),z.jsxs("div",{style:{fontSize:"10px",color:"#e74c3c",opacity:.8,marginTop:"4px"},children:[P.length," connection",P.length>1?"s":""," found (min d = ",ot.toFixed(4),")"]})]})}else return m.intersections.length>0?z.jsxs("div",{style:{color:"#27ae60"},children:["✓ No heteroclinic connections (",m.intersections.length," pairs checked)"]}):z.jsx("div",{style:{color:"#888"},children:"Need ≥2 saddles for detection"})})()})]})]})]}),z.jsx("button",{onClick:St,style:{...Ct.button,width:"100%",marginTop:"12px",backgroundColor:"#2d4a2d",borderColor:"#3a6a3a",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Save as PNG"}),h==="manifold"&&z.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[z.jsx("h4",{style:{fontSize:"12px",fontWeight:"600",marginBottom:"12px",color:"#888"},children:"Parameter Animation"}),z.jsx("label",{style:Ct.label,children:z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"Animate:"}),z.jsxs("select",{value:F.parameter,onChange:P=>$(ot=>({...ot,parameter:P.target.value})),style:{...Ct.numberInput,width:"100px"},disabled:F.isAnimating,children:[z.jsx("option",{value:"a",children:"a"}),z.jsx("option",{value:"b",children:"b"}),z.jsx("option",{value:"epsilon",children:"epsilon"})]})]})}),z.jsx("label",{style:Ct.label,children:z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"Direction:"}),z.jsxs("div",{style:{display:"flex",gap:"4px"},children:[z.jsx("button",{onClick:()=>$(P=>({...P,direction:-1})),style:{...Ct.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:F.direction===-1?"#3d5afe":"#2d2d2d"},disabled:F.isAnimating,children:"−"}),z.jsx("button",{onClick:()=>$(P=>({...P,direction:1})),style:{...Ct.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:F.direction===1?"#3d5afe":"#2d2d2d"},disabled:F.isAnimating,children:"+"})]})]})}),z.jsxs("label",{style:Ct.label,children:[z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"Range:"}),z.jsx("input",{type:"number",step:"0.05",min:"0.01",max:"1.0",value:F.rangeValue,onChange:P=>$(ot=>({...ot,rangeValue:parseFloat(P.target.value)||.1})),style:Ct.numberInput,disabled:F.isAnimating})]}),z.jsx("input",{type:"range",min:"0.01",max:"0.5",step:"0.01",value:F.rangeValue,onChange:P=>$(ot=>({...ot,rangeValue:parseFloat(P.target.value)})),style:Ct.slider,disabled:F.isAnimating})]}),z.jsxs("label",{style:Ct.label,children:[z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"Steps:"}),z.jsx("input",{type:"number",step:"1",min:"5",max:"30",value:F.steps,onChange:P=>$(ot=>({...ot,steps:parseInt(P.target.value)||10})),style:Ct.numberInput,disabled:F.isAnimating})]}),z.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:F.steps,onChange:P=>$(ot=>({...ot,steps:parseInt(P.target.value)})),style:Ct.slider,disabled:F.isAnimating})]}),z.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[z.jsxs("button",{onClick:F.isAnimating?At:Et,disabled:m.isComputing&&!F.isAnimating||w.isEncoding,style:{...Ct.button,flex:1,marginBottom:0,backgroundColor:F.isAnimating?"#8b0000":"#1a4a1a",borderColor:F.isAnimating?"#b22222":"#2a6a2a"},children:[F.isAnimating?"⏹ Stop":"▶ Play",w.recordingEnabled&&!F.isAnimating&&" & Rec"]}),z.jsx("button",{onClick:Qt,disabled:F.isAnimating||w.isEncoding,style:{...Ct.button,width:"50px",marginBottom:0,backgroundColor:w.recordingEnabled?"#b22222":"#2d2d2d",borderColor:w.recordingEnabled?"#ff4444":"#444"},title:w.recordingEnabled?"Recording enabled - will record next animation":"Enable recording",children:w.recordingEnabled?"🔴":"⏺"})]}),w.recordingEnabled&&!F.isAnimating&&!w.isEncoding&&z.jsx("div",{style:{marginTop:"8px",padding:"6px",background:"#1a0a0a",borderRadius:"4px",border:"1px solid #b22222"},children:z.jsx("div",{style:{fontSize:"11px",color:"#ff6666"},children:"🔴 Recording armed - Press Play to start"})}),w.isEncoding&&z.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"#0a0a1a",borderRadius:"4px",border:"1px solid #3d5afe"},children:[z.jsxs("div",{style:{fontSize:"11px",color:"#7986cb",marginBottom:"4px"},children:["🔄 Encoding video... (",w.frameCount," frames)"]}),z.jsx("div",{style:{height:"4px",backgroundColor:"#1a1a2e",borderRadius:"2px",overflow:"hidden"},children:z.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#3d5afe",animation:"pulse 1s infinite"}})})]}),w.error&&z.jsxs("div",{style:{marginTop:"8px",padding:"6px",background:"#1a0a0a",borderRadius:"4px",fontSize:"10px",color:"#ff6666"},children:["Error: ",w.error]}),F.isAnimating&&z.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[z.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:[F.parameter,": ",F.baseValue?.toFixed(3)," → ",F.targetValue?.toFixed(3)]}),z.jsxs("div",{style:{fontSize:"11px",color:"#888"},children:["Current: ",z.jsx("span",{style:{color:"#4CAF50",fontWeight:"bold"},children:_[F.parameter].toFixed(4)}),w.recordingEnabled&&z.jsxs("span",{style:{color:"#ff6666",marginLeft:"8px"},children:["📹 ",w.frameCount," frames"]})]}),z.jsxs("div",{style:{fontSize:"10px",color:"#555",marginTop:"4px"},children:["Step ",F.currentStep," / ",F.steps,m.isComputing&&z.jsx("span",{style:{color:"#ff9800",marginLeft:"8px"},children:"Computing..."})]}),z.jsx("div",{style:{marginTop:"6px",height:"4px",backgroundColor:"#333",borderRadius:"2px",overflow:"hidden"},children:z.jsx("div",{style:{width:`${F.currentStep/F.steps*100}%`,height:"100%",backgroundColor:w.recordingEnabled?"#ff6666":"#4CAF50",transition:"width 0.3s ease"}})})]})]}),z.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[z.jsxs("label",{style:Ct.checkboxLabel,children:[z.jsx("input",{type:"checkbox",checked:D.showUlamOverlay,onChange:P=>V({...D,showUlamOverlay:P.target.checked})}),"Show Ulam Grid"]}),D.showUlamOverlay&&z.jsxs(z.Fragment,{children:[z.jsxs("label",{style:Ct.checkboxLabel,children:[z.jsx("input",{type:"checkbox",checked:D.showTransitions,onChange:P=>V({...D,showTransitions:P.target.checked})}),"Show Transitions"]}),h==="periodic"&&z.jsxs("label",{style:Ct.checkboxLabel,children:[z.jsx("input",{type:"checkbox",checked:D.showCurrentBox,onChange:P=>V({...D,showCurrentBox:P.target.checked})}),"Track Current Position"]}),z.jsxs("label",{style:Ct.label,children:[z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"Grid ="}),z.jsx("input",{type:"number",step:"1",min:"10",max:"80",value:D.subdivisions,onChange:P=>V({...D,subdivisions:parseInt(P.target.value)||10}),style:Ct.numberInput,disabled:D.isComputing})]}),z.jsx("input",{type:"range",min:"10",max:"60",step:"5",value:D.subdivisions,onChange:P=>V({...D,subdivisions:parseInt(P.target.value)}),style:Ct.slider,disabled:D.isComputing})]}),z.jsxs("label",{style:Ct.label,children:[z.jsxs("div",{style:Ct.paramRow,children:[z.jsx("span",{children:"Samples ="}),z.jsx("input",{type:"number",step:"16",min:"16",max:"256",value:D.pointsPerBox,onChange:P=>V({...D,pointsPerBox:parseInt(P.target.value)||64}),style:Ct.numberInput,disabled:D.isComputing})]}),z.jsx("input",{type:"range",min:"16",max:"256",step:"16",value:D.pointsPerBox,onChange:P=>V({...D,pointsPerBox:parseInt(P.target.value)}),style:Ct.slider,disabled:D.isComputing}),z.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Points per box (√n × √n grid)"})]}),z.jsx("div",{style:{marginTop:"8px",marginBottom:"8px",fontSize:"12px",color:D.isComputing?"#ff9800":"#4CAF50",display:"flex",alignItems:"center",gap:"6px"},children:D.isComputing?z.jsxs(z.Fragment,{children:[z.jsx("span",{className:"spinner",style:{width:"10px",height:"10px",border:"2px solid #ff9800",borderTop:"2px solid transparent",borderRadius:"50%",display:"inline-block",animation:"spin 1s linear infinite"}}),"Computing Ulam Grid..."]}):z.jsx("span",{children:"✓ Grid up to date"})}),z.jsx("style",{children:`
                                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                            `}),D.gridBoxes.length>0&&z.jsxs("div",{style:{marginTop:"12px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[z.jsx("div",{style:{fontSize:"11px",fontWeight:"600",color:"#888",marginBottom:"6px"},children:"Invariant Measure"}),z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[z.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Low"}),z.jsx("div",{style:{flex:1,height:"12px",borderRadius:"2px",background:"linear-gradient(to right, hsl(238, 100%, 50%), hsl(180, 100%, 50%), hsl(100, 100%, 50%), hsl(60, 100%, 50%))"}}),z.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"High"})]}),z.jsx("div",{style:{fontSize:"9px",color:"#555",marginTop:"4px"},children:"Probability of trajectory visiting each region"})]}),D.currentBoxIndex>=0&&z.jsxs("div",{style:{fontSize:"11px",color:"#888",marginTop:"4px"},children:["Current box: ",D.currentBoxIndex]})]})]}),h==="periodic"&&z.jsxs(z.Fragment,{children:[z.jsxs("div",{style:Ct.section,children:[z.jsx("h3",{style:Ct.sectionTitle,children:"Controls"}),z.jsx("button",{onClick:k,disabled:!E.isReady||E.isRunning,style:Ct.button,children:"Step Forward"}),z.jsx("button",{onClick:Le,disabled:!E.isReady||E.isRunning,style:{...Ct.button,...Ct.runButton},children:E.isRunning?"Running...":"Run to Max Iterations"}),z.jsx("button",{onClick:ue,disabled:E.isRunning,style:{...Ct.button,...Ct.resetButton},children:"Reset"})]}),z.jsxs("div",{style:Ct.section,children:[z.jsx("h3",{style:Ct.sectionTitle,children:"Periodic Orbits"}),[1,2,3,4,5].map(P=>z.jsxs("label",{style:Ct.checkboxLabel,children:[z.jsx("input",{type:"checkbox",checked:B[`period${P}`],onChange:ot=>N({...B,[`period${P}`]:ot.target.checked})}),z.jsx("span",{style:{...Ct.colorBox,backgroundColor:Sn[`period${P}`].stable}}),"Period-",P," (",E.orbits.filter(ot=>ot.period===P).length,")"]},P)),z.jsxs("label",{style:Ct.checkboxLabel,children:[z.jsx("input",{type:"checkbox",checked:E.showOrbits,onChange:P=>b({...E,showOrbits:P.target.checked})}),"Show orbit markers"]}),z.jsxs("label",{style:Ct.checkboxLabel,children:[z.jsx("input",{type:"checkbox",checked:E.showTrail,onChange:P=>b({...E,showTrail:P.target.checked})}),"Show trajectory trail"]}),z.jsxs("label",{style:Ct.checkboxLabel,children:[z.jsx("input",{type:"checkbox",checked:E.showOrbitLines,onChange:P=>b({...E,showOrbitLines:P.target.checked})}),"Show orbit lines"]})]})]}),h==="manifold"&&z.jsxs(z.Fragment,{children:[z.jsxs("div",{style:Ct.section,children:[z.jsx("h3",{style:Ct.sectionTitle,children:"Controls"}),z.jsx("button",{onClick:ie,disabled:!m.isReady||m.isRunning,style:Ct.button,children:"Step Forward"}),z.jsx("button",{onClick:Gt,disabled:!m.isReady||m.isRunning,style:{...Ct.button,...Ct.runButton},children:m.isRunning?"Running...":"Run to Max Iterations"}),z.jsx("button",{onClick:Ne,disabled:m.isRunning,style:{...Ct.button,...Ct.resetButton},children:"Reset"})]}),z.jsxs("div",{style:Ct.section,children:[z.jsx("h3",{style:Ct.sectionTitle,children:"Periodic Orbits"}),z.jsxs("label",{style:Ct.checkboxLabel,children:[z.jsx("input",{type:"checkbox",checked:m.showOrbits,onChange:P=>I({...m,showOrbits:P.target.checked})}),"Show orbit markers"]}),z.jsxs("label",{style:Ct.checkboxLabel,children:[z.jsx("input",{type:"checkbox",checked:m.showOrbitLines,onChange:P=>I({...m,showOrbitLines:P.target.checked})}),"Show orbit lines"]}),z.jsxs("label",{style:Ct.checkboxLabel,children:[z.jsx("input",{type:"checkbox",checked:m.showTrail,onChange:P=>I({...m,showTrail:P.target.checked})}),"Show trajectory trail"]})]}),m.fixedPoints.length>0&&z.jsxs("div",{style:Ct.section,children:[z.jsxs("h3",{style:Ct.sectionTitle,children:["Fixed Points (",m.fixedPoints.length,")"]}),m.fixedPoints.map((P,ot)=>z.jsxs("div",{style:Ct.fixedPointItem,children:[z.jsx("span",{style:{fontWeight:"bold",color:P.stability==="Attractor"?"#00ff00":P.stability==="Repeller"?"#ff4444":"#ffaa00"},children:P.stability}),z.jsxs("span",{children:[" (",P.x.toFixed(3),", ",P.y.toFixed(3),")"]})]},ot))]})]}),z.jsxs("div",{style:Ct.info,children:[z.jsx("div",{style:Ct.infoHeader,children:p==="henon"?"Hénon Map: x' = 1 - ax² + y, y' = bx":"Duffing Map: x' = y, y' = -bx + ay - y³"}),h==="periodic"?z.jsxs(z.Fragment,{children:[z.jsxs("div",{children:["Status: ",E.isReady?E.isRunning?"Running...":"Ready":"Loading..."]}),z.jsxs("div",{children:["Iteration: ",E.iteration," / ",_.maxIterations]}),E.hasStarted&&z.jsxs("div",{children:["Position: (",E.currentPoint.x.toFixed(4),", ",E.currentPoint.y.toFixed(4),")"]}),z.jsxs("div",{children:["Orbits found: ",E.orbits.length]})]}):z.jsxs(z.Fragment,{children:[z.jsxs("div",{children:["Status: ",m.isComputing?"Computing...":m.isRunning?"Running...":"Ready"]}),m.hasStarted&&z.jsxs(z.Fragment,{children:[z.jsxs("div",{children:["Iteration: ",m.iteration," / ",_.maxIterations]}),z.jsxs("div",{children:["Position: (",m.currentPoint.x.toFixed(4),", ",m.currentPoint.y.toFixed(4),")"]})]}),z.jsxs("div",{children:["Manifolds: ",m.manifolds.length]}),z.jsxs("div",{children:["Total Points: ",jt.toLocaleString()]})]})]})]}),z.jsxs("div",{style:Ct.viewport,children:[z.jsx("canvas",{ref:o,style:Ct.canvas}),ct.visible&&ct.data&&z.jsxs("div",{style:{position:"absolute",left:ct.x+15,top:ct.y+15,backgroundColor:"rgba(20, 20, 20, 0.95)",border:"1px solid #444",borderRadius:"4px",padding:"12px",zIndex:1e3,pointerEvents:"none",minWidth:"180px",maxWidth:"280px",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",fontSize:"12px",fontFamily:"monospace"},children:[z.jsxs("div",{style:{fontWeight:"bold",color:"#fff",marginBottom:"8px",borderBottom:"1px solid #444",paddingBottom:"4px"},children:[ct.data.type,ct.data.isCurrentBox&&z.jsx("span",{style:{color:"#ff00ff",marginLeft:"8px"},children:"● Current"})]}),ct.data.type==="Ulam Box"?z.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"6px 12px"},children:[z.jsx("span",{style:{color:"#888"},children:"Box #:"}),z.jsx("span",{style:{color:"#00ccff"},children:ct.data.boxIndex}),z.jsx("span",{style:{color:"#888"},children:"Center:"}),z.jsxs("span",{style:{color:"#ddd"},children:["(",ct.data.pos.x.toFixed(2),", ",ct.data.pos.y.toFixed(2),")"]}),z.jsx("span",{style:{color:"#888"},children:"Measure:"}),z.jsxs("span",{style:{color:"#4CAF50"},children:[(ct.data.measure*100).toFixed(2),"%",z.jsxs("span",{style:{color:"#666",marginLeft:"4px"},children:["(",ct.data.measurePercent.toFixed(0),"% of max)"]})]}),z.jsx("span",{style:{color:"#888"},children:"Transitions:"}),z.jsxs("span",{style:{color:"#ddd"},children:[ct.data.numTransitions," boxes"]}),ct.data.topTransitions&&ct.data.topTransitions.length>0&&z.jsxs(z.Fragment,{children:[z.jsx("span",{style:{color:"#888"},children:"Top targets:"}),z.jsx("div",{style:{fontSize:"10px"},children:ct.data.topTransitions.map((P,ot)=>z.jsxs("div",{style:{color:"#ff9800"},children:["→ Box ",P.index,": ",(P.probability*100).toFixed(1),"%"]},ot))})]})]}):z.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"8px 16px"},children:[z.jsx("span",{style:{color:"#888"},children:"Position:"}),z.jsxs("span",{style:{color:"#00ccff"},children:["(",ct.data.pos.x.toFixed(4),", ",ct.data.pos.y.toFixed(4),")"]}),z.jsx("span",{style:{color:"#888"},children:"Stability:"}),z.jsx("span",{style:{color:ct.data.stability?.toLowerCase()==="attractor"||ct.data.stability?.toLowerCase()==="stable"?"#27ae60":(ct.data.stability?.toLowerCase()==="repeller"||ct.data.stability?.toLowerCase()==="unstable","#e74c3c")},children:ct.data.stability||"Unknown"}),z.jsx("span",{style:{color:"#888"},children:"Period:"}),z.jsx("span",{style:{color:"#ddd"},children:ct.data.period}),ct.data.jacobian&&z.jsxs(z.Fragment,{children:[z.jsx("span",{style:{color:"#888"},children:"Jacobian:"}),z.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px",background:"#333",padding:"4px",borderRadius:"2px"},children:[z.jsx("span",{children:ct.data.jacobian.j11?.toFixed(3)}),z.jsx("span",{children:ct.data.jacobian.j12?.toFixed(3)}),z.jsx("span",{children:ct.data.jacobian.j21?.toFixed(3)}),z.jsx("span",{children:ct.data.jacobian.j22?.toFixed(3)})]}),z.jsx("span",{style:{color:"#888"},children:"Det/Trace:"}),z.jsxs("span",{style:{color:"#ddd"},children:["D=",ct.data.jacobian.det?.toFixed(3),", Tr=",ct.data.jacobian.trace?.toFixed(3)]})]})]})]})]})]})},Ct={container:{display:"flex",height:"100vh",width:"100vw",backgroundColor:"#0a0a0a",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0",overflow:"hidden"},sidebar:{width:"320px",minWidth:"320px",padding:"20px",backgroundColor:"#1a1a1a",borderRight:"1px solid #333",overflowY:"auto"},section:{marginBottom:"24px"},sectionTitle:{fontSize:"14px",fontWeight:"600",marginBottom:"12px",color:"#fff",textTransform:"uppercase",letterSpacing:"0.5px"},toggleContainer:{display:"flex",gap:"4px"},toggleButton:{flex:1,padding:"10px",backgroundColor:"#2d2d2d",color:"#888",border:"1px solid #444",borderRadius:"4px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},toggleActive:{backgroundColor:"#3d5afe",color:"#fff",borderColor:"#3d5afe"},label:{display:"flex",flexDirection:"column",marginBottom:"12px",fontSize:"13px",color:"#b0b0b0"},paramRow:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"},numberInput:{width:"80px",padding:"4px 8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",fontSize:"13px",textAlign:"right"},slider:{marginTop:"6px",width:"100%"},checkboxLabel:{display:"flex",alignItems:"center",marginBottom:"10px",fontSize:"13px",cursor:"pointer",gap:"8px"},colorBox:{width:"14px",height:"14px",borderRadius:"2px",display:"inline-block"},button:{width:"100%",padding:"10px",marginBottom:"8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s"},runButton:{backgroundColor:"#1a4a1a",borderColor:"#2a6a2a"},resetButton:{backgroundColor:"#1a1a1a",borderColor:"#555"},fixedPointItem:{marginBottom:"6px",fontSize:"12px",padding:"6px",background:"#0f0f0f",borderRadius:"4px"},info:{marginTop:"16px",padding:"12px",backgroundColor:"#0f0f0f",borderRadius:"4px",fontSize:"11px",lineHeight:"1.6",color:"#888"},infoHeader:{fontSize:"12px",fontWeight:"600",color:"#4CAF50",marginBottom:"8px"},viewport:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},canvas:{display:"block"}};xy.createRoot(document.getElementById("root")).render(z.jsx(Kt.StrictMode,{children:z.jsx(B1,{})}));
