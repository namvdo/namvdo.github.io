(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Yf={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function Jx(){if(r_)return bo;r_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return bo.Fragment=t,bo.jsx=i,bo.jsxs=i,bo}var s_;function $x(){return s_||(s_=1,Yf.exports=Jx()),Yf.exports}var ne=$x(),jf={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function tS(){if(o_)return le;o_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function y(L,$,vt){this.props=L,this.context=$,this.refs=C,this.updater=vt||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=y.prototype;function N(L,$,vt){this.props=L,this.context=$,this.refs=C,this.updater=vt||M}var U=N.prototype=new g;U.constructor=N,A(U,y.prototype),U.isPureReactComponent=!0;var R=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function z(L,$,vt,St,Dt,Ft){return vt=Ft.ref,{$$typeof:o,type:L,key:$,ref:vt!==void 0?vt:null,props:Ft}}function X(L,$){return z(L.type,$,void 0,void 0,void 0,L.props)}function w(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function D(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(vt){return $[vt]})}var G=/\/+/g;function nt(L,$){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):$.toString(36)}function ot(){}function dt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ot,ot):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ut(L,$,vt,St,Dt){var Ft=typeof L;(Ft==="undefined"||Ft==="boolean")&&(L=null);var et=!1;if(L===null)et=!0;else switch(Ft){case"bigint":case"string":case"number":et=!0;break;case"object":switch(L.$$typeof){case o:case t:et=!0;break;case _:return et=L._init,ut(et(L._payload),$,vt,St,Dt)}}if(et)return Dt=Dt(L),et=St===""?"."+nt(L,0):St,R(Dt)?(vt="",et!=null&&(vt=et.replace(G,"$&/")+"/"),ut(Dt,$,vt,"",function(Zt){return Zt})):Dt!=null&&(w(Dt)&&(Dt=X(Dt,vt+(Dt.key==null||L&&L.key===Dt.key?"":(""+Dt.key).replace(G,"$&/")+"/")+et)),$.push(Dt)),1;et=0;var gt=St===""?".":St+":";if(R(L))for(var bt=0;bt<L.length;bt++)St=L[bt],Ft=gt+nt(St,bt),et+=ut(St,$,vt,Ft,Dt);else if(bt=x(L),typeof bt=="function")for(L=bt.call(L),bt=0;!(St=L.next()).done;)St=St.value,Ft=gt+nt(St,bt++),et+=ut(St,$,vt,Ft,Dt);else if(Ft==="object"){if(typeof L.then=="function")return ut(dt(L),$,vt,St,Dt);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return et}function F(L,$,vt){if(L==null)return L;var St=[],Dt=0;return ut(L,St,"","",function(Ft){return $.call(vt,Ft,Dt++)}),St}function Z(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(vt){(L._status===0||L._status===-1)&&(L._status=1,L._result=vt)},function(vt){(L._status===0||L._status===-1)&&(L._status=2,L._result=vt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return le.Children={map:F,forEach:function(L,$,vt){F(L,function(){$.apply(this,arguments)},vt)},count:function(L){var $=0;return F(L,function(){$++}),$},toArray:function(L){return F(L,function($){return $})||[]},only:function(L){if(!w(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},le.Component=y,le.Fragment=i,le.Profiler=l,le.PureComponent=N,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,le.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cloneElement=function(L,$,vt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var St=A({},L.props),Dt=L.key,Ft=void 0;if($!=null)for(et in $.ref!==void 0&&(Ft=void 0),$.key!==void 0&&(Dt=""+$.key),$)!I.call($,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&$.ref===void 0||(St[et]=$[et]);var et=arguments.length-2;if(et===1)St.children=vt;else if(1<et){for(var gt=Array(et),bt=0;bt<et;bt++)gt[bt]=arguments[bt+2];St.children=gt}return z(L.type,Dt,void 0,void 0,Ft,St)},le.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},le.createElement=function(L,$,vt){var St,Dt={},Ft=null;if($!=null)for(St in $.key!==void 0&&(Ft=""+$.key),$)I.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Dt[St]=$[St]);var et=arguments.length-2;if(et===1)Dt.children=vt;else if(1<et){for(var gt=Array(et),bt=0;bt<et;bt++)gt[bt]=arguments[bt+2];Dt.children=gt}if(L&&L.defaultProps)for(St in et=L.defaultProps,et)Dt[St]===void 0&&(Dt[St]=et[St]);return z(L,Ft,void 0,void 0,null,Dt)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:d,render:L}},le.isValidElement=w,le.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:Z}},le.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},le.startTransition=function(L){var $=P.T,vt={};P.T=vt;try{var St=L(),Dt=P.S;Dt!==null&&Dt(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(xt,Y)}catch(Ft){Y(Ft)}finally{P.T=$}},le.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},le.use=function(L){return P.H.use(L)},le.useActionState=function(L,$,vt){return P.H.useActionState(L,$,vt)},le.useCallback=function(L,$){return P.H.useCallback(L,$)},le.useContext=function(L){return P.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,$){return P.H.useDeferredValue(L,$)},le.useEffect=function(L,$,vt){var St=P.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(L,$)},le.useId=function(){return P.H.useId()},le.useImperativeHandle=function(L,$,vt){return P.H.useImperativeHandle(L,$,vt)},le.useInsertionEffect=function(L,$){return P.H.useInsertionEffect(L,$)},le.useLayoutEffect=function(L,$){return P.H.useLayoutEffect(L,$)},le.useMemo=function(L,$){return P.H.useMemo(L,$)},le.useOptimistic=function(L,$){return P.H.useOptimistic(L,$)},le.useReducer=function(L,$,vt){return P.H.useReducer(L,$,vt)},le.useRef=function(L){return P.H.useRef(L)},le.useState=function(L){return P.H.useState(L)},le.useSyncExternalStore=function(L,$,vt){return P.H.useSyncExternalStore(L,$,vt)},le.useTransition=function(){return P.H.useTransition()},le.version="19.1.1",le}var l_;function Ed(){return l_||(l_=1,jf.exports=tS()),jf.exports}var Dn=Ed(),Zf={exports:{}},Ao={},Kf={exports:{}},Qf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function eS(){return u_||(u_=1,(function(o){function t(F,Z){var Y=F.length;F.push(Z);t:for(;0<Y;){var xt=Y-1>>>1,L=F[xt];if(0<l(L,Z))F[xt]=Z,F[Y]=L,Y=xt;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Z=F[0],Y=F.pop();if(Y!==Z){F[0]=Y;t:for(var xt=0,L=F.length,$=L>>>1;xt<$;){var vt=2*(xt+1)-1,St=F[vt],Dt=vt+1,Ft=F[Dt];if(0>l(St,Y))Dt<L&&0>l(Ft,St)?(F[xt]=Ft,F[Dt]=Y,xt=Dt):(F[xt]=St,F[vt]=Y,xt=vt);else if(Dt<L&&0>l(Ft,Y))F[xt]=Ft,F[Dt]=Y,xt=Dt;else break t}}return Z}function l(F,Z){var Y=F.sortIndex-Z.sortIndex;return Y!==0?Y:F.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,x=3,M=!1,A=!1,C=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=F)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function P(F){if(C=!1,R(F),!A)if(i(m)!==null)A=!0,I||(I=!0,nt());else{var Z=i(p);Z!==null&&ut(P,Z.startTime-F)}}var I=!1,z=-1,X=5,w=-1;function D(){return y?!0:!(o.unstable_now()-w<X)}function G(){if(y=!1,I){var F=o.unstable_now();w=F;var Z=!0;try{t:{A=!1,C&&(C=!1,N(z),z=-1),M=!0;var Y=x;try{e:{for(R(F),v=i(m);v!==null&&!(v.expirationTime>F&&D());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,x=v.priorityLevel;var L=xt(v.expirationTime<=F);if(F=o.unstable_now(),typeof L=="function"){v.callback=L,R(F),Z=!0;break e}v===i(m)&&r(m),R(F)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var $=i(p);$!==null&&ut(P,$.startTime-F),Z=!1}}break t}finally{v=null,x=Y,M=!1}Z=void 0}}finally{Z?nt():I=!1}}}var nt;if(typeof U=="function")nt=function(){U(G)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,dt=ot.port2;ot.port1.onmessage=G,nt=function(){dt.postMessage(null)}}else nt=function(){g(G,0)};function ut(F,Z){z=g(function(){F(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(F){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var Y=x;x=Z;try{return F()}finally{x=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(F,Z){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Y=x;x=F;try{return Z()}finally{x=Y}},o.unstable_scheduleCallback=function(F,Z,Y){var xt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,F){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,F={id:_++,callback:Z,priorityLevel:F,startTime:Y,expirationTime:L,sortIndex:-1},Y>xt?(F.sortIndex=Y,t(p,F),i(m)===null&&F===i(p)&&(C?(N(z),z=-1):C=!0,ut(P,Y-xt))):(F.sortIndex=L,t(m,F),A||M||(A=!0,I||(I=!0,nt()))),F},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(F){var Z=x;return function(){var Y=x;x=Z;try{return F.apply(this,arguments)}finally{x=Y}}}})(Qf)),Qf}var c_;function nS(){return c_||(c_=1,Kf.exports=eS()),Kf.exports}var Jf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function iS(){if(f_)return Rn;f_=1;var o=Ed();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Rn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.1.1",Rn}var h_;function aS(){if(h_)return Jf.exports;h_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Jf.exports=iS(),Jf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function rS(){if(d_)return Ao;d_=1;var o=nS(),t=Ed(),i=aS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===s)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,s=f;break}if(T===s){S=!0,s=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=u;break}if(T===s){S=!0,s=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case C:return"StrictMode";case P:return"Suspense";case I:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ut=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xt=[],L=-1;function $(e){return{current:e}}function vt(e){0>L||(e.current=xt[L],xt[L]=null,L--)}function St(e,n){L++,xt[L]=e.current,e.current=n}var Dt=$(null),Ft=$(null),et=$(null),gt=$(null);function bt(e,n){switch(St(et,n),St(Ft,e),St(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ng(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ng(n),e=Og(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Dt),St(Dt,e)}function Zt(){vt(Dt),vt(Ft),vt(et)}function Wt(e){e.memoizedState!==null&&St(gt,e);var n=Dt.current,a=Og(n,e.type);n!==a&&(St(Ft,e),St(Dt,a))}function de(e){Ft.current===e&&(vt(Dt),vt(Ft)),gt.current===e&&(vt(gt),So._currentValue=Y)}var an=Object.prototype.hasOwnProperty,H=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,re=o.unstable_shouldYield,ee=o.unstable_requestPaint,Ot=o.unstable_now,Ge=o.unstable_getCurrentPriorityLevel,Gt=o.unstable_ImmediatePriority,se=o.unstable_UserBlockingPriority,qe=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,O=o.unstable_IdlePriority,E=o.log,tt=o.unstable_setDisableYieldValue,ct=null,pt=null;function lt(e){if(typeof E=="function"&&tt(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ct,e)}catch{}}var Pt=Math.clz32?Math.clz32:qt,At=Math.log,kt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(At(e)/kt|0)|0}var yt=256,Ut=4194304;function jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=jt(s):(S&=T,S!==0?u=jt(S):a||(a=T&~e,a!==0&&(u=jt(a))))):(T=s&~f,T!==0?u=jt(T):S!==0?u=jt(S):a||(a=s&~e,a!==0&&(u=jt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=yt;return yt<<=1,(yt&4194048)===0&&(yt=256),e}function Tt(){var e=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),e}function Rt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mt(e,n,a,s,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-Pt(a),mt=1<<ft;T[ft]=0,B[ft]=-1;var it=J[ft];if(it!==null)for(J[ft]=null,ft=0;ft<it.length;ft++){var at=it[ft];at!==null&&(at.lane&=-536870913)}a&=~mt}s!==0&&_t(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Ht(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:$g(e.type))}function di(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var un=Math.random().toString(36).slice(2),cn="__reactFiber$"+un,Ze="__reactProps$"+un,Ai="__reactContainer$"+un,yr="__reactEvents$"+un,jo="__reactListeners$"+un,Mr="__reactHandles$"+un,Us="__reactResources$"+un,Ri="__reactMarker$"+un;function Er(e){delete e[cn],delete e[Ze],delete e[yr],delete e[jo],delete e[Mr]}function Bi(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ai]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ig(e);e!==null;){if(a=e[cn])return a;e=Ig(e)}return n}e=a,a=e.parentNode}return null}function la(e){if(e=e[cn]||e[Ai]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Xa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ua(e){var n=e[Us];return n||(n=e[Us]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[Ri]=!0}var Zo=new Set,Ko={};function b(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(Ko[e]=n,e=0;e<n.length;e++)Zo.add(n[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},j={};function Et(e){return an.call(j,e)?!0:an.call(st,e)?!1:rt.test(e)?j[e]=!0:(st[e]=!0,!1)}function wt(e,n,a){if(Et(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Lt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var Qt,$t;function Xt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+$t}var ce=!1;function be(e,n){if(!e||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(at){var it=at}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(at){it=at}e.call(mt.prototype)}}else{try{throw Error()}catch(at){it=at}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var B=S.split(`
`),J=T.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===J.length)for(s=B.length-1,u=J.length-1;1<=s&&0<=u&&B[s]!==J[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==J[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==J[u]){var ft=`
`+B[s].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=s&&0<=u);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xt(a):""}function Xe(e){switch(e.tag){case 26:case 27:case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return Xt("Activity");default:return""}}function Ne(e){try{var n="";do n+=Xe(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ke(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=ke(e))}function Tn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Kt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Un=/[\n"\\]/g;function mn(e){return e.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(e,n,a,s,u,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?bn(e,S,fe(n)):a!=null?bn(e,S,fe(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+fe(T):e.removeAttribute("name")}function Ln(e,n,a,s,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function bn(e,n,a){n==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ke(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function Tr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function In(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Zv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Zv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Od(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Nd(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Nd(e,f,n[f])}function Wu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return Qv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qu=null;function Yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,Ar=null;function Pd(e){var n=la(e);if(n&&(e=n.stateNode)){var a=e[Ze]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[Ze]||null;if(!u)throw Error(r(90));Fe(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Tn(s)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ke(e,!!a.multiple,n,!1)}}}var ju=!1;function Bd(e,n,a){if(ju)return e(n,a);ju=!0;try{var s=e(n);return s}finally{if(ju=!1,(br!==null||Ar!==null)&&(Bl(),br&&(n=br,e=Ar,Ar=br=null,Pd(n),e)))for(n=0;n<e.length;n++)Pd(e[n])}}function Ls(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Ze]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=!1;if(zi)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{Zu=!1}var ca=null,Ku=null,Jo=null;function zd(){if(Jo)return Jo;var e,n=Ku,a=n.length,s,u="value"in ca?ca.value:ca.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return Jo=u.slice(e,1<s?1-s:void 0)}function $o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Id(){return!1}function Fn(e){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Id,this.isPropagationStopped=Id,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Fn(Wa),Os=_({},Wa,{view:0,detail:0}),Jv=Fn(Os),Qu,Ju,Ps,nl=_({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ps&&(Ps&&e.type==="mousemove"?(Qu=e.screenX-Ps.screenX,Ju=e.screenY-Ps.screenY):Ju=Qu=0,Ps=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:Ju}}),Fd=Fn(nl),$v=_({},nl,{dataTransfer:0}),t0=Fn($v),e0=_({},Os,{relatedTarget:0}),$u=Fn(e0),n0=_({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),i0=Fn(n0),a0=_({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r0=Fn(a0),s0=_({},Wa,{data:0}),Hd=Fn(s0),o0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=u0[e])?!!n[e]:!1}function tc(){return c0}var f0=_({},Os,{key:function(e){if(e.key){var n=o0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h0=Fn(f0),d0=_({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gd=Fn(d0),p0=_({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),m0=Fn(p0),g0=_({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),_0=Fn(g0),v0=_({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x0=Fn(v0),S0=_({},Wa,{newState:0,oldState:0}),y0=Fn(S0),M0=[9,13,27,32],ec=zi&&"CompositionEvent"in window,Bs=null;zi&&"documentMode"in document&&(Bs=document.documentMode);var E0=zi&&"TextEvent"in window&&!Bs,Vd=zi&&(!ec||Bs&&8<Bs&&11>=Bs),kd=" ",Xd=!1;function Wd(e,n){switch(e){case"keyup":return M0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rr=!1;function T0(e,n){switch(e){case"compositionend":return qd(n);case"keypress":return n.which!==32?null:(Xd=!0,kd);case"textInput":return e=n.data,e===kd&&Xd?null:e;default:return null}}function b0(e,n){if(Rr)return e==="compositionend"||!ec&&Wd(e,n)?(e=zd(),Jo=Ku=ca=null,Rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vd&&n.locale!=="ko"?null:n.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!A0[e.type]:n==="textarea"}function jd(e,n,a,s){br?Ar?Ar.push(s):Ar=[s]:br=s,n=Vl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var zs=null,Is=null;function R0(e){Cg(e,0)}function il(e){var n=Xa(e);if(Tn(n))return e}function Zd(e,n){if(e==="change")return n}var Kd=!1;if(zi){var nc;if(zi){var ic="oninput"in document;if(!ic){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),ic=typeof Qd.oninput=="function"}nc=ic}else nc=!1;Kd=nc&&(!document.documentMode||9<document.documentMode)}function Jd(){zs&&(zs.detachEvent("onpropertychange",$d),Is=zs=null)}function $d(e){if(e.propertyName==="value"&&il(Is)){var n=[];jd(n,Is,e,Yu(e)),Bd(R0,n)}}function C0(e,n,a){e==="focusin"?(Jd(),zs=n,Is=a,zs.attachEvent("onpropertychange",$d)):e==="focusout"&&Jd()}function w0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(Is)}function D0(e,n){if(e==="click")return il(n)}function U0(e,n){if(e==="input"||e==="change")return il(n)}function L0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:L0;function Fs(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!an.call(n,u)||!Xn(e[u],n[u]))return!1}return!0}function tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ep(e,n){var a=tp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=tp(a)}}function np(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?np(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ip(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pi(e.document)}return n}function ac(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var N0=zi&&"documentMode"in document&&11>=document.documentMode,Cr=null,rc=null,Hs=null,sc=!1;function ap(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sc||Cr==null||Cr!==pi(s)||(s=Cr,"selectionStart"in s&&ac(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Hs&&Fs(Hs,s)||(Hs=s,s=Vl(rc,"onSelect"),0<s.length&&(n=new el("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Cr)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var wr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},oc={},rp={};zi&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Ya(e){if(oc[e])return oc[e];if(!wr[e])return e;var n=wr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in rp)return oc[e]=n[a];return e}var sp=Ya("animationend"),op=Ya("animationiteration"),lp=Ya("animationstart"),O0=Ya("transitionrun"),P0=Ya("transitionstart"),B0=Ya("transitioncancel"),up=Ya("transitionend"),cp=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function mi(e,n){cp.set(e,n),b(n,[e])}var fp=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=fp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ne(n)},fp.set(e,n),n)}return{value:e,source:n,stack:Ne(n)}}var ei=[],Dr=0,uc=0;function al(){for(var e=Dr,n=uc=Dr=0;n<e;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&hp(a,u,f)}}function rl(e,n,a,s){ei[Dr++]=e,ei[Dr++]=n,ei[Dr++]=a,ei[Dr++]=s,uc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function cc(e,n,a,s){return rl(e,n,a,s),sl(e)}function Ur(e,n){return rl(e,null,null,n),sl(e)}function hp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function sl(e){if(50<fo)throw fo=0,_f=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Lr={};function z0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,n,a,s){return new z0(e,n,a,s)}function fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,n){var a=e.alternate;return a===null?(a=Wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,s,u,f){var S=0;if(s=e,typeof e=="function")fc(e)&&(S=1);else if(typeof e=="string")S=Fx(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Wn(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return ja(a.children,u,f,n);case C:S=8,u|=24;break;case y:return e=Wn(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case P:return e=Wn(13,a,n,u),e.elementType=P,e.lanes=f,e;case I:return e=Wn(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case U:S=10;break t;case N:S=9;break t;case R:S=11;break t;case z:S=14;break t;case X:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Wn(S,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function ja(e,n,a,s){return e=Wn(7,e,s,n),e.lanes=a,e}function hc(e,n,a){return e=Wn(6,e,null,n),e.lanes=a,e}function dc(e,n,a){return n=Wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Nr=[],Or=0,ll=null,ul=0,ni=[],ii=0,Za=null,Fi=1,Hi="";function Ka(e,n){Nr[Or++]=ul,Nr[Or++]=ll,ll=e,ul=n}function pp(e,n,a){ni[ii++]=Fi,ni[ii++]=Hi,ni[ii++]=Za,Za=e;var s=Fi;e=Hi;var u=32-Pt(s)-1;s&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Fi=1<<32-Pt(n)+u|a<<u|s,Hi=f+e}else Fi=1<<f|a<<u|s,Hi=e}function pc(e){e.return!==null&&(Ka(e,1),pp(e,1,0))}function mc(e){for(;e===ll;)ll=Nr[--Or],Nr[Or]=null,ul=Nr[--Or],Nr[Or]=null;for(;e===Za;)Za=ni[--ii],ni[ii]=null,Hi=ni[--ii],ni[ii]=null,Fi=ni[--ii],ni[ii]=null}var Nn=null,Qe=null,Ce=!1,Qa=null,Ci=!1,gc=Error(r(519));function Ja(e){var n=Error(r(418,""));throw ks(ti(n,e)),gc}function mp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[cn]=e,n[Ze]=s,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)ve(po[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Ln(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),ge(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Tr(n,s.value,s.defaultValue,s.children),ge(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Lg(n.textContent,a)?(s.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),s.onScroll!=null&&ve("scroll",n),s.onScrollEnd!=null&&ve("scrollend",n),s.onClick!=null&&(n.onclick=kl),n=!0):n=!1,n||Ja(e)}function gp(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Nn=Nn.return}}function Gs(e){if(e!==Nn)return!1;if(!Ce)return gp(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Nf(e.type,e.memoizedProps)),a=!a),a&&Qe&&Ja(e),gp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Qe=_i(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Qe=null}}else n===27?(n=Qe,Aa(e.type)?(e=zf,zf=null,Qe=e):Qe=n):Qe=Nn?_i(e.stateNode.nextSibling):null;return!0}function Vs(){Qe=Nn=null,Ce=!1}function _p(){var e=Qa;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Qa=null),e}function ks(e){Qa===null?Qa=[e]:Qa.push(e)}var _c=$(null),$a=null,Gi=null;function fa(e,n,a){St(_c,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=_c.current,vt(_c)}function vc(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function xc(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),vc(f.return,a,e),s||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),vc(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Xs(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;Xn(u.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(u===gt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}u=u.return}e!==null&&xc(n,e,a,s),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tr(e){$a=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return vp($a,e)}function fl(e,n){return $a===null&&tr(e),vp(e,n)}function vp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(r(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var I0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},F0=o.unstable_scheduleCallback,H0=o.unstable_NormalPriority,fn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sc(){return{controller:new I0,data:new Map,refCount:0}}function Ws(e){e.refCount--,e.refCount===0&&F0(H0,function(){e.controller.abort()})}var qs=null,yc=0,Pr=0,Br=null;function G0(e,n){if(qs===null){var a=qs=[];yc=0,Pr=Tf(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return yc++,n.then(xp,xp),n}function xp(){if(--yc===0&&qs!==null){Br!==null&&(Br.status="fulfilled");var e=qs;qs=null,Pr=0,Br=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function V0(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Sp=F.S;F.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&G0(e,n),Sp!==null&&Sp(e,n)};var er=$(null);function Mc(){var e=er.current;return e!==null?e:Ve.pooledCache}function hl(e,n){n===null?St(er,er.current):St(er,n.pool)}function yp(){var e=Mc();return e===null?null:{parent:fn._currentValue,pool:e}}var Ys=Error(r(460)),Mp=Error(r(474)),dl=Error(r(542)),Ec={then:function(){}};function Ep(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pl(){}function Tp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(pl,pl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ap(e),e;default:if(typeof n.status=="string")n.then(pl,pl);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ap(e),e}throw js=n,Ys}}var js=null;function bp(){if(js===null)throw Error(r(459));var e=js;return js=null,e}function Ap(e){if(e===Ys||e===dl)throw Error(r(483))}var ha=!1;function Tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=sl(e),hp(e,null,a),n}return rl(e,s,n,a),sl(e)}function Zs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ht(e,a)}}function Ac(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Rc=!1;function Ks(){if(Rc){var e=Br;if(e!==null)throw e}}function Qs(e,n,a,s){Rc=!1;var u=e.updateQueue;ha=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,J=B.next;B.next=null,S===null?f=J:S.next=J,S=B;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==S&&(T===null?ft.firstBaseUpdate=J:T.next=J,ft.lastBaseUpdate=B))}if(f!==null){var mt=u.baseState;S=0,ft=J=B=null,T=f;do{var it=T.lane&-536870913,at=it!==T.lane;if(at?(Ee&it)===it:(s&it)===it){it!==0&&it===Pr&&(Rc=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ie=e,Jt=T;it=n;var Be=a;switch(Jt.tag){case 1:if(ie=Jt.payload,typeof ie=="function"){mt=ie.call(Be,mt,it);break t}mt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=Jt.payload,it=typeof ie=="function"?ie.call(Be,mt,it):ie,it==null)break t;mt=_({},mt,it);break t;case 2:ha=!0}}it=T.callback,it!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[it]:at.push(it))}else at={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(J=ft=at,B=mt):ft=ft.next=at,S|=it;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;at=T,T=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);ft===null&&(B=mt),u.baseState=B,u.firstBaseUpdate=J,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ma|=S,e.lanes=S,e.memoizedState=mt}}function Rp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Cp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Rp(a[e],n)}var zr=$(null),ml=$(0);function wp(e,n){e=Zi,St(ml,e),St(zr,n),Zi=e|n.baseLanes}function Cc(){St(ml,Zi),St(zr,zr.current)}function wc(){Zi=ml.current,vt(zr),vt(ml)}var ma=0,pe=null,Oe=null,sn=null,gl=!1,Ir=!1,nr=!1,_l=0,Js=0,Fr=null,k0=0;function $e(){throw Error(r(321))}function Dc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Xn(e[a],n[a]))return!1;return!0}function Uc(e,n,a,s,u,f){return ma=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?hm:dm,nr=!1,f=a(s,u),nr=!1,Ir&&(f=Up(n,a,s,u)),Dp(e),f}function Dp(e){F.H=El;var n=Oe!==null&&Oe.next!==null;if(ma=0,sn=Oe=pe=null,gl=!1,Js=0,Fr=null,n)throw Error(r(300));e===null||gn||(e=e.dependencies,e!==null&&cl(e)&&(gn=!0))}function Up(e,n,a,s){pe=e;var u=0;do{if(Ir&&(Fr=null),Js=0,Ir=!1,25<=u)throw Error(r(301));if(u+=1,sn=Oe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=K0,f=n(a,s)}while(Ir);return f}function X0(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?$s(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(pe.flags|=1024),n}function Lc(){var e=_l!==0;return _l=0,e}function Nc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Oc(e){if(gl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}gl=!1}ma=0,sn=Oe=pe=null,Ir=!1,Js=_l=0,Fr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?pe.memoizedState=sn=e:sn=sn.next=e,sn}function on(){if(Oe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=sn===null?pe.memoizedState:sn.next;if(n!==null)sn=n,Oe=e;else{if(e===null)throw pe.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},sn===null?pe.memoizedState=sn=e:sn=sn.next=e}return sn}function Pc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(e){var n=Js;return Js+=1,Fr===null&&(Fr=[]),e=Tp(Fr,e,n),n=pe,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?hm:dm),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $s(e);if(e.$$typeof===U)return An(e)}throw Error(r(438,String(e)))}function Bc(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=pe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pc(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=D;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=on();return zc(n,Oe,e)}function zc(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=S=null,B=null,J=n,ft=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(Ee&mt)===mt:(ma&mt)===mt){var it=J.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===Pr&&(ft=!0);else if((ma&it)===it){J=J.next,it===Pr&&(ft=!0);continue}else mt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=mt,S=f):B=B.next=mt,pe.lanes|=it,Ma|=it;mt=J.action,nr&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else it={lane:mt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=it,S=f):B=B.next=it,pe.lanes|=mt,Ma|=mt;J=J.next}while(J!==null&&J!==n);if(B===null?S=f:B.next=T,!Xn(f,e.memoizedState)&&(gn=!0,ft&&(a=Br,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Ic(e){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Xn(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Lp(e,n,a){var s=pe,u=on(),f=Ce;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Xn((Oe||u).memoizedState,a);S&&(u.memoizedState=a,gn=!0),u=u.queue;var T=Pp.bind(null,s,u,e);if(to(2048,8,T,[e]),u.getSnapshot!==n||S||sn!==null&&sn.memoizedState.tag&1){if(s.flags|=2048,Hr(9,Sl(),Op.bind(null,s,u,a,n),null),Ve===null)throw Error(r(349));f||(ma&124)!==0||Np(s,n,a)}return a}function Np(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Pc(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Op(e,n,a,s){n.value=a,n.getSnapshot=s,Bp(n)&&zp(e)}function Pp(e,n,a){return a(function(){Bp(n)&&zp(e)})}function Bp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Xn(e,a)}catch{return!0}}function zp(e){var n=Ur(e,2);n!==null&&Kn(n,e,2)}function Fc(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),nr){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function Ip(e,n,a,s){return e.baseState=a,zc(e,Oe,typeof s=="function"?s:ki)}function W0(e,n,a,s,u){if(Ml(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};F.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Fp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Fp(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=F.T,S={};F.T=S;try{var T=a(u,s),B=F.S;B!==null&&B(S,T),Hp(e,n,T)}catch(J){Hc(e,n,J)}finally{F.T=f}}else try{f=a(u,s),Hp(e,n,f)}catch(J){Hc(e,n,J)}}function Hp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Gp(e,n,s)},function(s){return Hc(e,n,s)}):Gp(e,n,a)}function Gp(e,n,a){n.status="fulfilled",n.value=a,Vp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Fp(e,a)))}function Hc(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Vp(n),n=n.next;while(n!==s)}e.action=null}function Vp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function kp(e,n){return n}function Xp(e,n){if(Ce){var a=Ve.formState;if(a!==null){t:{var s=pe;if(Ce){if(Qe){e:{for(var u=Qe,f=Ci;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qe=_i(u.nextSibling),s=u.data==="F!";break t}}Ja(s)}s=!1}s&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kp,lastRenderedState:n},a.queue=s,a=um.bind(null,pe,s),s.dispatch=a,s=Fc(!1),f=Wc.bind(null,pe,!1,s.queue),s=Hn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=W0.bind(null,pe,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function Wp(e){var n=on();return qp(n,Oe,e)}function qp(e,n,a){if(n=zc(e,n,kp)[0],e=xl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$s(n)}catch(S){throw S===Ys?dl:S}else s=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,Hr(9,Sl(),q0.bind(null,u,a),null)),[s,f,e]}function q0(e,n){e.action=n}function Yp(e){var n=on(),a=Oe;if(a!==null)return qp(n,a,e);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Hr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Pc(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Sl(){return{destroy:void 0,resource:void 0}}function jp(){return on().memoizedState}function yl(e,n,a,s){var u=Hn();s=s===void 0?null:s,pe.flags|=e,u.memoizedState=Hr(1|n,Sl(),a,s)}function to(e,n,a,s){var u=on();s=s===void 0?null:s;var f=u.memoizedState.inst;Oe!==null&&s!==null&&Dc(s,Oe.memoizedState.deps)?u.memoizedState=Hr(n,f,a,s):(pe.flags|=e,u.memoizedState=Hr(1|n,f,a,s))}function Zp(e,n){yl(8390656,8,e,n)}function Kp(e,n){to(2048,8,e,n)}function Qp(e,n){return to(4,2,e,n)}function Jp(e,n){return to(4,4,e,n)}function $p(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function tm(e,n,a){a=a!=null?a.concat([e]):null,to(4,4,$p.bind(null,n,e),a)}function Gc(){}function em(e,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Dc(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function nm(e,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Dc(n,s[1]))return s[0];if(s=e(),nr){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[s,n],s}function Vc(e,n,a){return a===void 0||(ma&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=rg(),pe.lanes|=e,Ma|=e,a)}function im(e,n,a,s){return Xn(a,n)?a:zr.current!==null?(e=Vc(e,a,s),Xn(e,n)||(gn=!0),e):(ma&42)===0?(gn=!0,e.memoizedState=a):(e=rg(),pe.lanes|=e,Ma|=e,n)}function am(e,n,a,s,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=F.T,T={};F.T=T,Wc(e,!1,n,a);try{var B=u(),J=F.S;if(J!==null&&J(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=V0(B,s);eo(e,n,ft,Zn(e))}else eo(e,n,s,Zn(e))}catch(mt){eo(e,n,{then:function(){},status:"rejected",reason:mt},Zn())}finally{Z.p=f,F.T=S}}function Y0(){}function kc(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=rm(e).queue;am(e,u,n,Y,a===null?Y0:function(){return sm(e),a(s)})}function rm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function sm(e){var n=rm(e).next.queue;eo(e,n,{},Zn())}function Xc(){return An(So)}function om(){return on().memoizedState}function lm(){return on().memoizedState}function j0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=da(a);var s=pa(n,e,a);s!==null&&(Kn(s,n,a),Zs(s,n,a)),n={cache:Sc()},e.payload=n;return}n=n.return}}function Z0(e,n,a){var s=Zn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(e)?cm(n,a):(a=cc(e,n,a,s),a!==null&&(Kn(a,e,s),fm(a,n,s)))}function um(e,n,a){var s=Zn();eo(e,n,a,s)}function eo(e,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(e))cm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,Xn(T,S))return rl(e,n,u,0),Ve===null&&al(),!1}catch{}finally{}if(a=cc(e,n,u,s),a!==null)return Kn(a,e,s),fm(a,n,s),!0}return!1}function Wc(e,n,a,s){if(s={lane:2,revertLane:Tf(),action:s,hasEagerState:!1,eagerState:null,next:null},Ml(e)){if(n)throw Error(r(479))}else n=cc(e,a,s,2),n!==null&&Kn(n,e,2)}function Ml(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function cm(e,n){Ir=gl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function fm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ht(e,a)}}var El={readContext:An,use:vl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},hm={readContext:An,use:vl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Zp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,yl(4194308,4,$p.bind(null,n,e),a)},useLayoutEffect:function(e,n){return yl(4194308,4,e,n)},useInsertionEffect:function(e,n){yl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var s=e();if(nr){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Hn();if(a!==void 0){var u=a(n);if(nr){lt(!0);try{a(n)}finally{lt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=Z0.bind(null,pe,e),[s.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Fc(e);var n=e.queue,a=um.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Gc,useDeferredValue:function(e,n){var a=Hn();return Vc(a,e,n)},useTransition:function(){var e=Fc(!1);return e=am.bind(null,pe,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=pe,u=Hn();if(Ce){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(Ee&124)!==0||Np(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Zp(Pp.bind(null,s,f,e),[e]),s.flags|=2048,Hr(9,Sl(),Op.bind(null,s,f,a,n),null),a},useId:function(){var e=Hn(),n=Ve.identifierPrefix;if(Ce){var a=Hi,s=Fi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=_l++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=k0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Xc,useFormState:Xp,useActionState:Xp,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wc.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Bc,useCacheRefresh:function(){return Hn().memoizedState=j0.bind(null,pe)}},dm={readContext:An,use:vl,useCallback:em,useContext:An,useEffect:Kp,useImperativeHandle:tm,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:nm,useReducer:xl,useRef:jp,useState:function(){return xl(ki)},useDebugValue:Gc,useDeferredValue:function(e,n){var a=on();return im(a,Oe.memoizedState,e,n)},useTransition:function(){var e=xl(ki)[0],n=on().memoizedState;return[typeof e=="boolean"?e:$s(e),n]},useSyncExternalStore:Lp,useId:om,useHostTransitionStatus:Xc,useFormState:Wp,useActionState:Wp,useOptimistic:function(e,n){var a=on();return Ip(a,Oe,e,n)},useMemoCache:Bc,useCacheRefresh:lm},K0={readContext:An,use:vl,useCallback:em,useContext:An,useEffect:Kp,useImperativeHandle:tm,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:nm,useReducer:Ic,useRef:jp,useState:function(){return Ic(ki)},useDebugValue:Gc,useDeferredValue:function(e,n){var a=on();return Oe===null?Vc(a,e,n):im(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Ic(ki)[0],n=on().memoizedState;return[typeof e=="boolean"?e:$s(e),n]},useSyncExternalStore:Lp,useId:om,useHostTransitionStatus:Xc,useFormState:Yp,useActionState:Yp,useOptimistic:function(e,n){var a=on();return Oe!==null?Ip(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bc,useCacheRefresh:lm},Gr=null,no=0;function Tl(e){var n=no;return no+=1,Gr===null&&(Gr=[]),Tp(Gr,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pm(e){var n=e._init;return n(e._payload)}function mm(e){function n(q,V){if(e){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function s(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function u(q,V){return q=Ii(q,V),q.index=0,q.sibling=null,q}function f(q,V,K){return q.index=K,e?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=67108866,V):K):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function S(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,V,K,ht){return V===null||V.tag!==6?(V=hc(K,q.mode,ht),V.return=q,V):(V=u(V,K),V.return=q,V)}function B(q,V,K,ht){var It=K.type;return It===A?ft(q,V,K.props.children,ht,K.key):V!==null&&(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===X&&pm(It)===V.type)?(V=u(V,K.props),io(V,K),V.return=q,V):(V=ol(K.type,K.key,K.props,null,q.mode,ht),io(V,K),V.return=q,V)}function J(q,V,K,ht){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=dc(K,q.mode,ht),V.return=q,V):(V=u(V,K.children||[]),V.return=q,V)}function ft(q,V,K,ht,It){return V===null||V.tag!==7?(V=ja(K,q.mode,ht,It),V.return=q,V):(V=u(V,K),V.return=q,V)}function mt(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=hc(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return K=ol(V.type,V.key,V.props,null,q.mode,K),io(K,V),K.return=q,K;case M:return V=dc(V,q.mode,K),V.return=q,V;case X:var ht=V._init;return V=ht(V._payload),mt(q,V,K)}if(ut(V)||nt(V))return V=ja(V,q.mode,K,null),V.return=q,V;if(typeof V.then=="function")return mt(q,Tl(V),K);if(V.$$typeof===U)return mt(q,fl(q,V),K);bl(q,V)}return null}function it(q,V,K,ht){var It=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return It!==null?null:T(q,V,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===It?B(q,V,K,ht):null;case M:return K.key===It?J(q,V,K,ht):null;case X:return It=K._init,K=It(K._payload),it(q,V,K,ht)}if(ut(K)||nt(K))return It!==null?null:ft(q,V,K,ht,null);if(typeof K.then=="function")return it(q,V,Tl(K),ht);if(K.$$typeof===U)return it(q,V,fl(q,K),ht);bl(q,K)}return null}function at(q,V,K,ht,It){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(K)||null,T(V,q,""+ht,It);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case x:return q=q.get(ht.key===null?K:ht.key)||null,B(V,q,ht,It);case M:return q=q.get(ht.key===null?K:ht.key)||null,J(V,q,ht,It);case X:var me=ht._init;return ht=me(ht._payload),at(q,V,K,ht,It)}if(ut(ht)||nt(ht))return q=q.get(K)||null,ft(V,q,ht,It,null);if(typeof ht.then=="function")return at(q,V,K,Tl(ht),It);if(ht.$$typeof===U)return at(q,V,K,fl(V,ht),It);bl(V,ht)}return null}function ie(q,V,K,ht){for(var It=null,me=null,Yt=V,te=V=0,vn=null;Yt!==null&&te<K.length;te++){Yt.index>te?(vn=Yt,Yt=null):vn=Yt.sibling;var Ae=it(q,Yt,K[te],ht);if(Ae===null){Yt===null&&(Yt=vn);break}e&&Yt&&Ae.alternate===null&&n(q,Yt),V=f(Ae,V,te),me===null?It=Ae:me.sibling=Ae,me=Ae,Yt=vn}if(te===K.length)return a(q,Yt),Ce&&Ka(q,te),It;if(Yt===null){for(;te<K.length;te++)Yt=mt(q,K[te],ht),Yt!==null&&(V=f(Yt,V,te),me===null?It=Yt:me.sibling=Yt,me=Yt);return Ce&&Ka(q,te),It}for(Yt=s(Yt);te<K.length;te++)vn=at(Yt,q,te,K[te],ht),vn!==null&&(e&&vn.alternate!==null&&Yt.delete(vn.key===null?te:vn.key),V=f(vn,V,te),me===null?It=vn:me.sibling=vn,me=vn);return e&&Yt.forEach(function(Ua){return n(q,Ua)}),Ce&&Ka(q,te),It}function Jt(q,V,K,ht){if(K==null)throw Error(r(151));for(var It=null,me=null,Yt=V,te=V=0,vn=null,Ae=K.next();Yt!==null&&!Ae.done;te++,Ae=K.next()){Yt.index>te?(vn=Yt,Yt=null):vn=Yt.sibling;var Ua=it(q,Yt,Ae.value,ht);if(Ua===null){Yt===null&&(Yt=vn);break}e&&Yt&&Ua.alternate===null&&n(q,Yt),V=f(Ua,V,te),me===null?It=Ua:me.sibling=Ua,me=Ua,Yt=vn}if(Ae.done)return a(q,Yt),Ce&&Ka(q,te),It;if(Yt===null){for(;!Ae.done;te++,Ae=K.next())Ae=mt(q,Ae.value,ht),Ae!==null&&(V=f(Ae,V,te),me===null?It=Ae:me.sibling=Ae,me=Ae);return Ce&&Ka(q,te),It}for(Yt=s(Yt);!Ae.done;te++,Ae=K.next())Ae=at(Yt,q,te,Ae.value,ht),Ae!==null&&(e&&Ae.alternate!==null&&Yt.delete(Ae.key===null?te:Ae.key),V=f(Ae,V,te),me===null?It=Ae:me.sibling=Ae,me=Ae);return e&&Yt.forEach(function(Qx){return n(q,Qx)}),Ce&&Ka(q,te),It}function Be(q,V,K,ht){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var It=K.key;V!==null;){if(V.key===It){if(It=K.type,It===A){if(V.tag===7){a(q,V.sibling),ht=u(V,K.props.children),ht.return=q,q=ht;break t}}else if(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===X&&pm(It)===V.type){a(q,V.sibling),ht=u(V,K.props),io(ht,K),ht.return=q,q=ht;break t}a(q,V);break}else n(q,V);V=V.sibling}K.type===A?(ht=ja(K.props.children,q.mode,ht,K.key),ht.return=q,q=ht):(ht=ol(K.type,K.key,K.props,null,q.mode,ht),io(ht,K),ht.return=q,q=ht)}return S(q);case M:t:{for(It=K.key;V!==null;){if(V.key===It)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(q,V.sibling),ht=u(V,K.children||[]),ht.return=q,q=ht;break t}else{a(q,V);break}else n(q,V);V=V.sibling}ht=dc(K,q.mode,ht),ht.return=q,q=ht}return S(q);case X:return It=K._init,K=It(K._payload),Be(q,V,K,ht)}if(ut(K))return ie(q,V,K,ht);if(nt(K)){if(It=nt(K),typeof It!="function")throw Error(r(150));return K=It.call(K),Jt(q,V,K,ht)}if(typeof K.then=="function")return Be(q,V,Tl(K),ht);if(K.$$typeof===U)return Be(q,V,fl(q,K),ht);bl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(q,V.sibling),ht=u(V,K),ht.return=q,q=ht):(a(q,V),ht=hc(K,q.mode,ht),ht.return=q,q=ht),S(q)):a(q,V)}return function(q,V,K,ht){try{no=0;var It=Be(q,V,K,ht);return Gr=null,It}catch(Yt){if(Yt===Ys||Yt===dl)throw Yt;var me=Wn(29,Yt,null,q.mode);return me.lanes=ht,me.return=q,me}finally{}}}var Vr=mm(!0),gm=mm(!1),ai=$(null),wi=null;function ga(e){var n=e.alternate;St(hn,hn.current&1),St(ai,e),wi===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(wi=e)}function _m(e){if(e.tag===22){if(St(hn,hn.current),St(ai,e),wi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(wi=e)}}else _a()}function _a(){St(hn,hn.current),St(ai,ai.current)}function Xi(e){vt(ai),wi===e&&(wi=null),vt(hn)}var hn=$(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Bf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function qc(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yc={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Zn(),u=da(s);u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,s),n!==null&&(Kn(n,e,s),Zs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Zn(),u=da(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,s),n!==null&&(Kn(n,e,s),Zs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(e,s,a),n!==null&&(Kn(n,e,a),Zs(n,e,a))}};function vm(e,n,a,s,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Fs(a,s)||!Fs(u,f):!0}function xm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Yc.enqueueReplaceState(n,n.state,null)}function ir(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Sm(e){Rl(e)}function ym(e){console.error(e)}function Mm(e){Rl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Em(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function jc(e,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function Tm(e){return e=da(e),e.tag=3,e}function bm(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){Em(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Em(n,a,s),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Q0(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Xs(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 13:return wi===null?xf():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),yf(e,s,u)),!1;case 22:return a.flags|=65536,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),yf(e,s,u)),!1}throw Error(r(435,a.tag))}return yf(e,s,u),xf(),!1}if(Ce)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==gc&&(e=Error(r(422),{cause:s}),ks(ti(e,a)))):(s!==gc&&(n=Error(r(423),{cause:s}),ks(ti(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=ti(s,a),u=jc(e.stateNode,s,u),Ac(e,u),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ti(f,a),co===null?co=[f]:co.push(f),Je!==4&&(Je=2),n===null)return!0;s=ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=jc(a.stateNode,s,e),Ac(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Tm(u),bm(u,e,a,s),Ac(a,u),!1}a=a.return}while(a!==null);return!1}var Am=Error(r(461)),gn=!1;function yn(e,n,a,s){n.child=e===null?gm(n,null,a,s):Vr(n,e.child,a,s)}function Rm(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return tr(n),s=Uc(e,n,a,S,f,u),T=Lc(),e!==null&&!gn?(Nc(e,n,u),Wi(e,n,u)):(Ce&&T&&pc(n),n.flags|=1,yn(e,n,s,u),n.child)}function Cm(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!fc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wm(e,n,f,s,u)):(e=ol(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!nf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fs,a(S,s)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Ii(f,s),e.ref=n.ref,e.return=n,n.child=e}function wm(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Fs(f,s)&&e.ref===n.ref)if(gn=!1,n.pendingProps=s=f,nf(e,u))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return Zc(e,n,a,s,u)}function Dm(e,n,a){var s=n.pendingProps,u=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Um(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?wp(n,f):Cc(),_m(n);else return n.lanes=n.childLanes=536870912,Um(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(hl(n,f.cachePool),wp(n,f),_a(),n.memoizedState=null):(e!==null&&hl(n,null),Cc(),_a());return yn(e,n,u,a),n.child}function Um(e,n,a,s){var u=Mc();return u=u===null?null:{parent:fn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&hl(n,null),Cc(),_m(n),e!==null&&Xs(e,n,s,!0),null}function wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Zc(e,n,a,s,u){return tr(n),a=Uc(e,n,a,s,void 0,u),s=Lc(),e!==null&&!gn?(Nc(e,n,u),Wi(e,n,u)):(Ce&&s&&pc(n),n.flags|=1,yn(e,n,a,u),n.child)}function Lm(e,n,a,s,u,f){return tr(n),n.updateQueue=null,a=Up(n,s,a,u),Dp(e),s=Lc(),e!==null&&!gn?(Nc(e,n,f),Wi(e,n,f)):(Ce&&s&&pc(n),n.flags|=1,yn(e,n,a,f),n.child)}function Nm(e,n,a,s,u){if(tr(n),n.stateNode===null){var f=Lr,S=a.contextType;typeof S=="object"&&S!==null&&(f=An(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Yc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Tc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?An(S):Lr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(qc(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Yc.enqueueReplaceState(f,f.state,null),Qs(n,s,f,u),Ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=ir(a,T);f.props=B;var J=f.context,ft=a.contextType;S=Lr,typeof ft=="object"&&ft!==null&&(S=An(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==S)&&xm(n,f,s,S),ha=!1;var it=n.memoizedState;f.state=it,Qs(n,s,f,u),Ks(),J=n.memoizedState,T||it!==J||ha?(typeof mt=="function"&&(qc(n,a,mt,s),J=n.memoizedState),(B=ha||vm(n,a,B,s,it,J,S))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=S,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,bc(e,n),S=n.memoizedProps,ft=ir(a,S),f.props=ft,mt=n.pendingProps,it=f.context,J=a.contextType,B=Lr,typeof J=="object"&&J!==null&&(B=An(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||it!==B)&&xm(n,f,s,B),ha=!1,it=n.memoizedState,f.state=it,Qs(n,s,f,u),Ks();var at=n.memoizedState;S!==mt||it!==at||ha||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof T=="function"&&(qc(n,a,T,s),at=n.memoizedState),(ft=ha||vm(n,a,ft,s,it,at,B)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,at,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,at,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=at),f.props=s,f.state=at,f.context=B,s=ft):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,wl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Vr(n,e.child,null,u),n.child=Vr(n,null,a,u)):yn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Wi(e,n,u),e}function Om(e,n,a,s){return Vs(),n.flags|=256,yn(e,n,a,s),n.child}var Kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qc(e){return{baseLanes:e,cachePool:yp()}}function Jc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function Pm(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?ga(n):_a(),Ce){var T=Qe,B;if(B=T){t:{for(B=T,T=Ci;B.nodeType!==8;){if(!T){T=null;break t}if(B=_i(B.nextSibling),B===null){T=null;break t}}T=B}T!==null?(n.memoizedState={dehydrated:T,treeContext:Za!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},B=Wn(18,null,null,0),B.stateNode=T,B.return=n,n.child=B,Nn=n,Qe=null,B=!0):B=!1}B||Ja(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Bf(T)?n.lanes=32:n.lanes=536870912,null;Xi(n)}return T=s.children,s=s.fallback,u?(_a(),u=n.mode,T=Dl({mode:"hidden",children:T},u),s=ja(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,u=n.child,u.memoizedState=Qc(a),u.childLanes=Jc(e,S,a),n.memoizedState=Kc,s):(ga(n),$c(n,T))}if(B=e.memoizedState,B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=tf(e,n,a)):n.memoizedState!==null?(_a(),n.child=e.child,n.flags|=128,n=null):(_a(),u=s.fallback,T=n.mode,s=Dl({mode:"visible",children:s.children},T),u=ja(u,T,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Vr(n,e.child,null,a),s=n.child,s.memoizedState=Qc(a),s.childLanes=Jc(e,S,a),n.memoizedState=Kc,n=u);else if(ga(n),Bf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var J=S.dgst;S=J,s=Error(r(419)),s.stack="",s.digest=S,ks({value:s,source:null,stack:null}),n=tf(e,n,a)}else if(gn||Xs(e,n,a,!1),S=(a&e.childLanes)!==0,gn||S){if(S=Ve,S!==null&&(s=a&-a,s=(s&42)!==0?1:ae(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==B.retryLane))throw B.retryLane=s,Ur(e,s),Kn(S,e,s),Am;T.data==="$?"||xf(),n=tf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Qe=_i(T.nextSibling),Nn=n,Ce=!0,Qa=null,Ci=!1,e!==null&&(ni[ii++]=Fi,ni[ii++]=Hi,ni[ii++]=Za,Fi=e.id,Hi=e.overflow,Za=n),n=$c(n,s.children),n.flags|=4096);return n}return u?(_a(),u=s.fallback,T=n.mode,B=e.child,J=B.sibling,s=Ii(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,J!==null?u=Ii(J,u):(u=ja(u,T,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,T=e.child.memoizedState,T===null?T=Qc(a):(B=T.cachePool,B!==null?(J=fn._currentValue,B=B.parent!==J?{parent:J,pool:J}:B):B=yp(),T={baseLanes:T.baseLanes|a,cachePool:B}),u.memoizedState=T,u.childLanes=Jc(e,S,a),n.memoizedState=Kc,s):(ga(n),a=e.child,e=a.sibling,a=Ii(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function $c(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=Wn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function tf(e,n,a){return Vr(n,e.child,null,a),e=$c(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Bm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),vc(e.return,n,a)}function ef(e,n,a,s,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function zm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(yn(e,n,s.children,a),s=hn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bm(e,a,n);else if(e.tag===19)Bm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(St(hn,s),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ef(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Al(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ef(n,!0,a,null,f);break;case"together":ef(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Xs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ii(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ii(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function J0(e,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),fa(n,fn,e.memoizedState.cache),Vs();break;case 27:case 5:Wt(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Pm(e,n,a):(ga(n),e=Wi(e,n,a),e!==null?e.sibling:null);ga(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Xs(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return zm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(hn,hn.current),s)break;return null;case 22:case 23:return n.lanes=0,Dm(e,n,a);case 24:fa(n,fn,e.memoizedState.cache)}return Wi(e,n,a)}function Im(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!nf(e,a)&&(n.flags&128)===0)return gn=!1,J0(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,Ce&&(n.flags&1048576)!==0&&pp(n,ul,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")fc(s)?(e=ir(s,e),n.tag=1,n=Nm(null,n,s,e,a)):(n.tag=0,n=Zc(null,n,s,e,a));else{if(s!=null){if(u=s.$$typeof,u===R){n.tag=11,n=Rm(null,n,s,e,a);break t}else if(u===z){n.tag=14,n=Cm(null,n,s,e,a);break t}}throw n=dt(s)||s,Error(r(306,n,""))}}return n;case 0:return Zc(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=ir(s,n.pendingProps),Nm(e,n,s,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,bc(e,n),Qs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,fa(n,fn,s),s!==f.cache&&xc(n,[fn],a,!0),Ks(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Om(e,n,s,a);break t}else if(s!==u){u=ti(Error(r(424)),n),ks(u),n=Om(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=_i(e.firstChild),Nn=n,Ce=!0,Qa=null,Ci=!0,a=gm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vs(),s===u){n=Wi(e,n,a);break t}yn(e,n,s,a)}n=n.child}return n;case 26:return wl(e,n),e===null?(a=Vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,s=Xl(et.current).createElement(a),s[cn]=n,s[Ze]=e,En(s,a,e),rn(s),n.stateNode=s):n.memoizedState=Vg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Wt(n),e===null&&Ce&&(s=n.stateNode=Fg(n.type,n.pendingProps,et.current),Nn=n,Ci=!0,u=Qe,Aa(n.type)?(zf=u,Qe=_i(s.firstChild)):Qe=u),yn(e,n,n.pendingProps.children,a),wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=s=Qe)&&(s=Ax(s,n.type,n.pendingProps,Ci),s!==null?(n.stateNode=s,Nn=n,Qe=_i(s.firstChild),Ci=!1,u=!0):u=!1),u||Ja(n)),Wt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,Nf(u,f)?s=null:S!==null&&Nf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Uc(e,n,X0,null,null,a),So._currentValue=u),wl(e,n),yn(e,n,s,a),n.child;case 6:return e===null&&Ce&&((e=a=Qe)&&(a=Rx(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,Nn=n,Qe=null,e=!0):e=!1),e||Ja(n)),null;case 13:return Pm(e,n,a);case 4:return bt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Vr(n,null,s,a):yn(e,n,s,a),n.child;case 11:return Rm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),yn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,tr(n),u=An(u),s=s(u),n.flags|=1,yn(e,n,s,a),n.child;case 14:return Cm(e,n,n.type,n.pendingProps,a);case 15:return wm(e,n,n.type,n.pendingProps,a);case 19:return zm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Dl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ii(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Dm(e,n,a);case 24:return tr(n),s=An(fn),e===null?(u=Mc(),u===null&&(u=Ve,f=Sc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Tc(n),fa(n,fn,u)):((e.lanes&a)!==0&&(bc(e,n),Qs(n,null,null,a),Ks()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fa(n,fn,s)):(s=f.cache,fa(n,fn,s),s!==u.cache&&xc(n,[fn],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(e){e.flags|=4}function Fm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yg(n)){if(n=ai.current,n!==null&&((Ee&4194048)===Ee?wi!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||n!==wi))throw js=Ec,Mp;e.flags|=8192}}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Tt():536870912,e.lanes|=n,qr|=n)}function ao(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function $0(e,n,a){var s=n.pendingProps;switch(mc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Vi(fn),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gs(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_p())),je(n),null;case 26:return a=n.memoizedState,e===null?(qi(n),a!==null?(je(n),Fm(n,a)):(je(n),n.flags&=-16777217)):a?a!==e.memoizedState?(qi(n),je(n),Fm(n,a)):(je(n),n.flags&=-16777217):(e.memoizedProps!==s&&qi(n),je(n),n.flags&=-16777217),null;case 27:de(n),a=et.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}e=Dt.current,Gs(n)?mp(n):(e=Fg(u,s,a),n.stateNode=e,qi(n))}return je(n),null;case 5:if(de(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}if(e=Dt.current,Gs(n))mp(n);else{switch(u=Xl(et.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}e[cn]=n,e[Ze]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(En(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qi(n)}}return je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=et.current,Gs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Lg(e.nodeValue,a)),e||Ja(n)}else e=Xl(e).createTextNode(s),e[cn]=n,n.stateNode=e}return je(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Gs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else Vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=_p(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),je(n),null;case 4:return Zt(),e===null&&Cf(n.stateNode.containerInfo),je(n),null;case 10:return Vi(n.type),je(n),null;case 19:if(vt(hn),u=n.memoizedState,u===null)return je(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)ao(u,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Al(e),f!==null){for(n.flags|=128,ao(u,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)dp(a,e),a=a.sibling;return St(hn,hn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ot()>Ol&&(n.flags|=128,s=!0,ao(u,!1),n.lanes=4194304)}else{if(!s)if(e=Al(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),ao(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ce)return je(n),null}else 2*Ot()-u.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,s=!0,ao(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ot(),n.sibling=null,e=hn.current,St(hn,s?e&1|2:e&1),n):(je(n),null);case 22:case 23:return Xi(n),wc(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&vt(er),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(fn),je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function tx(e,n){switch(mc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(fn),Zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 13:if(Xi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(hn),null;case 4:return Zt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Xi(n),wc(),e!==null&&vt(er),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(fn),null;case 25:return null;default:return null}}function Hm(e,n){switch(mc(n),n.tag){case 3:Vi(fn),Zt();break;case 26:case 27:case 5:de(n);break;case 4:Zt();break;case 13:Xi(n);break;case 19:vt(hn);break;case 10:Vi(n.type);break;case 22:case 23:Xi(n),wc(),e!==null&&vt(er);break;case 24:Vi(fn)}}function ro(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(T){He(n,n.return,T)}}function va(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var B=a,J=T;try{J()}catch(ft){He(u,B,ft)}}}s=s.next}while(s!==f)}}catch(ft){He(n,n.return,ft)}}function Gm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Cp(n,a)}catch(s){He(e,e.return,s)}}}function Vm(e,n,a){a.props=ir(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){He(e,n,s)}}function so(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){He(e,n,u)}}function Di(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){He(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(e,n,u)}else a.current=null}function km(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){He(e,e.return,u)}}function af(e,n,a){try{var s=e.stateNode;yx(s,e.type,a,n),s[Ze]=n}catch(u){He(e,e.return,u)}}function Xm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=kl));else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(sf(e,n,a),e=e.sibling;e!==null;)sf(e,n,a),e=e.sibling}function Ll(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function Wm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,s,a),n[cn]=e,n[Ze]=a}catch(f){He(e,e.return,f)}}var Yi=!1,tn=!1,of=!1,qm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function ex(e,n){if(e=e.containerInfo,Uf=Kl,e=ip(e),ac(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,B=-1,J=0,ft=0,mt=e,it=null;e:for(;;){for(var at;mt!==a||u!==0&&mt.nodeType!==3||(T=S+u),mt!==f||s!==0&&mt.nodeType!==3||(B=S+s),mt.nodeType===3&&(S+=mt.nodeValue.length),(at=mt.firstChild)!==null;)it=mt,mt=at;for(;;){if(mt===e)break e;if(it===a&&++J===u&&(T=S),it===f&&++ft===s&&(B=S),(at=mt.nextSibling)!==null)break;mt=it,it=mt.parentNode}mt=at}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:e,selectionRange:a},Kl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ie=ir(a.type,u,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ie,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){He(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Pf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Ym(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),s&4&&ro(5,a);break;case 1:if(xa(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){He(a,a.return,S)}else{var u=ir(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(a,a.return,S)}}s&64&&Gm(a),s&512&&so(a,a.return);break;case 3:if(xa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cp(e,n)}catch(S){He(a,a.return,S)}}break;case 27:n===null&&s&4&&Wm(a);case 26:case 5:xa(e,a),n===null&&s&4&&km(a),s&512&&so(a,a.return);break;case 12:xa(e,a);break;case 13:xa(e,a),s&4&&Km(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=cx.bind(null,a),Cx(e,a))));break;case 22:if(s=a.memoizedState!==null||Yi,!s){n=n!==null&&n.memoizedState!==null||tn,u=Yi;var f=tn;Yi=s,(tn=n)&&!f?Sa(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),Yi=u,tn=f}break;case 30:break;default:xa(e,a)}}function jm(e){var n=e.alternate;n!==null&&(e.alternate=null,jm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Er(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Gn=!1;function ji(e,n,a){for(a=a.child;a!==null;)Zm(e,n,a),a=a.sibling}function Zm(e,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:tn||Di(a,n),ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Di(a,n);var s=We,u=Gn;Aa(a.type)&&(We=a.stateNode,Gn=!1),ji(e,n,a),go(a.stateNode),We=s,Gn=u;break;case 5:tn||Di(a,n);case 6:if(s=We,u=Gn,We=null,ji(e,n,a),We=s,Gn=u,We!==null)if(Gn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:We!==null&&(Gn?(e=We,zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),To(e)):zg(We,a.stateNode));break;case 4:s=We,u=Gn,We=a.stateNode.containerInfo,Gn=!0,ji(e,n,a),We=s,Gn=u;break;case 0:case 11:case 14:case 15:tn||va(2,a,n),tn||va(4,a,n),ji(e,n,a);break;case 1:tn||(Di(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Vm(a,n,s)),ji(e,n,a);break;case 21:ji(e,n,a);break;case 22:tn=(s=tn)||a.memoizedState!==null,ji(e,n,a),tn=s;break;default:ji(e,n,a)}}function Km(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{To(e)}catch(a){He(n,n.return,a)}}function nx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new qm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new qm),n;default:throw Error(r(435,e.tag))}}function lf(e,n){var a=nx(e);n.forEach(function(s){var u=fx.bind(null,e,s);a.has(s)||(a.add(s),s.then(u,u))})}function qn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Aa(T.type)){We=T.stateNode,Gn=!1;break t}break;case 5:We=T.stateNode,Gn=!1;break t;case 3:case 4:We=T.stateNode.containerInfo,Gn=!0;break t}T=T.return}if(We===null)throw Error(r(160));Zm(f,S,u),We=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Qm(n,e),n=n.sibling}var gi=null;function Qm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Yn(e),s&4&&(va(3,e,e.return),ro(3,e),va(5,e,e.return));break;case 1:qn(n,e),Yn(e),s&512&&(tn||a===null||Di(a,a.return)),s&64&&Yi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=gi;if(qn(n,e),Yn(e),s&512&&(tn||a===null||Di(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ri]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,s,a),f[cn]=e,rn(f),s=f;break t;case"link":var S=Wg("link","href",u).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=u.createElement(s),En(f,s,a),u.head.appendChild(f);break;case"meta":if(S=Wg("meta","content",u).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=u.createElement(s),En(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[cn]=e,rn(f),s=f}e.stateNode=s}else qg(u,e.type,e.stateNode);else e.stateNode=Xg(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?qg(u,e.type,e.stateNode):Xg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&af(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Yn(e),s&512&&(tn||a===null||Di(a,a.return)),a!==null&&s&4&&af(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Yn(e),s&512&&(tn||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{In(u,"")}catch(at){He(e,e.return,at)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,af(e,u,a!==null?a.memoizedProps:u)),s&1024&&(of=!0);break;case 6:if(qn(n,e),Yn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(at){He(e,e.return,at)}}break;case 3:if(Yl=null,u=gi,gi=Wl(n.containerInfo),qn(n,e),gi=u,Yn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(at){He(e,e.return,at)}of&&(of=!1,Jm(e));break;case 4:s=gi,gi=Wl(e.stateNode.containerInfo),qn(n,e),Yn(e),gi=s;break;case 12:qn(n,e),Yn(e);break;case 13:qn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pf=Ot()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,lf(e,s)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=Yi,ft=tn;if(Yi=J||u,tn=ft||B,qn(n,e),tn=ft,Yi=J,Yn(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Yi||tn||ar(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=B.stateNode;var mt=B.memoizedProps.style,it=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){He(B,B.return,at)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(at){He(B,B.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,lf(e,a))));break;case 19:qn(n,e),Yn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,lf(e,s)));break;case 30:break;case 21:break;default:qn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Xm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=rf(e);Ll(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(In(S,""),a.flags&=-33);var T=rf(e);Ll(e,T,S);break;case 3:case 4:var B=a.stateNode.containerInfo,J=rf(e);sf(e,J,B);break;default:throw Error(r(161))}}catch(ft){He(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Jm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ym(e,n.alternate,n),n=n.sibling}function ar(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),ar(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Vm(n,n.return,a),ar(n);break;case 27:go(n.stateNode);case 26:case 5:Di(n,n.return),ar(n);break;case 22:n.memoizedState===null&&ar(n);break;case 30:ar(n);break;default:ar(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(u,f,a),ro(4,f);break;case 1:if(Sa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){He(s,s.return,J)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Rp(B[u],T)}catch(J){He(s,s.return,J)}}a&&S&64&&Gm(f),so(f,f.return);break;case 27:Wm(f);case 26:case 5:Sa(u,f,a),a&&s===null&&S&4&&km(f),so(f,f.return);break;case 12:Sa(u,f,a);break;case 13:Sa(u,f,a),a&&S&4&&Km(u,f);break;case 22:f.memoizedState===null&&Sa(u,f,a),so(f,f.return);break;case 30:break;default:Sa(u,f,a)}n=n.sibling}}function uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ws(a))}function cf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e))}function Ui(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$m(e,n,a,s),n=n.sibling}function $m(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,s),u&2048&&ro(9,n);break;case 1:Ui(e,n,a,s);break;case 3:Ui(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e)));break;case 12:if(u&2048){Ui(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){He(n,n.return,B)}}else Ui(e,n,a,s);break;case 13:Ui(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ui(e,n,a,s):oo(e,n):f._visibility&2?Ui(e,n,a,s):(f._visibility|=2,kr(e,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&uf(S,n);break;case 24:Ui(e,n,a,s),u&2048&&cf(n.alternate,n);break;default:Ui(e,n,a,s)}}function kr(e,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,B=s,J=S.flags;switch(S.tag){case 0:case 11:case 15:kr(f,S,T,B,u),ro(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&2?kr(f,S,T,B,u):oo(f,S):(ft._visibility|=2,kr(f,S,T,B,u)),u&&J&2048&&uf(S.alternate,S);break;case 24:kr(f,S,T,B,u),u&&J&2048&&cf(S.alternate,S);break;default:kr(f,S,T,B,u)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:oo(a,s),u&2048&&uf(s.alternate,s);break;case 24:oo(a,s),u&2048&&cf(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Xr(e){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)tg(e),e=e.sibling}function tg(e){switch(e.tag){case 26:Xr(e),e.flags&lo&&e.memoizedState!==null&&Gx(gi,e.memoizedState,e.memoizedProps);break;case 5:Xr(e);break;case 3:case 4:var n=gi;gi=Wl(e.stateNode.containerInfo),Xr(e),gi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=lo,lo=16777216,Xr(e),lo=n):Xr(e));break;default:Xr(e)}}function eg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,ig(s,e)}eg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ng(e),e=e.sibling}function ng(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&va(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):uo(e);break;default:uo(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,ig(s,e)}eg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function ig(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else t:for(a=e;_n!==null;){s=_n;var u=s.sibling,f=s.return;if(jm(s),s===a){_n=null;break t}if(u!==null){u.return=f,_n=u;break t}_n=f}}}var ix={getCacheForType:function(e){var n=An(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},ax=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,_e=null,Ee=0,Ue=0,jn=null,ya=!1,Wr=!1,ff=!1,Zi=0,Je=0,Ma=0,rr=0,hf=0,ri=0,qr=0,co=null,Vn=null,df=!1,pf=0,Ol=1/0,Pl=null,Ea=null,Mn=0,Ta=null,Yr=null,jr=0,mf=0,gf=null,ag=null,fo=0,_f=null;function Zn(){if((De&2)!==0&&Ee!==0)return Ee&-Ee;if(F.T!==null){var e=Pr;return e!==0?e:Tf()}return Te()}function rg(){ri===0&&(ri=(Ee&536870912)===0||Ce?k():536870912);var e=ai.current;return e!==null&&(e.flags|=32),ri}function Kn(e,n,a){(e===Ve&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Zr(e,0),ba(e,Ee,ri,!1)),Bt(e,a),((De&2)===0||e!==Ve)&&(e===Ve&&((De&2)===0&&(rr|=a),Je===4&&ba(e,Ee,ri,!1)),Li(e))}function sg(e,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=s?ox(e,n):Sf(e,n,!0),f=s;do{if(u===0){Wr&&!s&&ba(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!rx(a)){u=Sf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;u=co;var B=T.current.memoizedState.isDehydrated;if(B&&(Zr(T,S).flags|=256),S=Sf(T,S,!1),S!==2){if(ff&&!B){T.errorRecoveryDisabledLanes|=f,rr|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Zr(e,0),ba(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ba(s,n,ri,!ya);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=pf+300-Ot(),10<u)){if(ba(s,n,ri,!ya),Vt(s,0,!0)!==0)break t;s.timeoutHandle=Pg(og.bind(null,s,a,Vn,Pl,df,n,ri,rr,qr,ya,f,2,-0,0),u);break t}og(s,a,Vn,Pl,df,n,ri,rr,qr,ya,f,0,-0,0)}}break}while(!0);Li(e)}function og(e,n,a,s,u,f,S,T,B,J,ft,mt,it,at){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:Hx},tg(n),mt=Vx(),mt!==null)){e.cancelPendingCommit=mt(pg.bind(null,e,n,f,a,s,u,S,T,B,ft,1,it,at)),ba(e,f,S,!J);return}pg(e,n,f,a,s,u,S,T,B)}function rx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Xn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(e,n,a,s){n&=~hf,n&=~rr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&_t(e,a,n)}function Bl(){return(De&6)===0?(ho(0),!1):!0}function vf(){if(_e!==null){if(Ue===0)var e=_e.return;else e=_e,Gi=$a=null,Oc(e),Gr=null,no=0,e=_e;for(;e!==null;)Hm(e.alternate,e),e=e.return;_e=null}}function Zr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ex(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),vf(),Ve=e,_e=a=Ii(e.current,null),Ee=n,Ue=0,jn=null,ya=!1,Wr=Ct(e,n),ff=!1,qr=ri=hf=rr=Ma=Je=0,Vn=co=null,df=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Pt(s),f=1<<u;n|=e[u],s&=~f}return Zi=n,al(),a}function lg(e,n){pe=null,F.H=El,n===Ys||n===dl?(n=bp(),Ue=3):n===Mp?(n=bp(),Ue=4):Ue=n===Am?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,_e===null&&(Je=1,Cl(e,ti(n,e.current)))}function ug(){var e=F.H;return F.H=El,e===null?El:e}function cg(){var e=F.A;return F.A=ix,e}function xf(){Je=4,ya||(Ee&4194048)!==Ee&&ai.current!==null||(Wr=!0),(Ma&134217727)===0&&(rr&134217727)===0||Ve===null||ba(Ve,Ee,ri,!1)}function Sf(e,n,a){var s=De;De|=2;var u=ug(),f=cg();(Ve!==e||Ee!==n)&&(Pl=null,Zr(e,n)),n=!1;var S=Je;t:do try{if(Ue!==0&&_e!==null){var T=_e,B=jn;switch(Ue){case 8:vf(),S=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var J=Ue;if(Ue=0,jn=null,Kr(e,T,B,J),a&&Wr){S=0;break t}break;default:J=Ue,Ue=0,jn=null,Kr(e,T,B,J)}}sx(),S=Je;break}catch(ft){lg(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Gi=$a=null,De=s,F.H=u,F.A=f,_e===null&&(Ve=null,Ee=0,al()),S}function sx(){for(;_e!==null;)fg(_e)}function ox(e,n){var a=De;De|=2;var s=ug(),u=cg();Ve!==e||Ee!==n?(Pl=null,Ol=Ot()+500,Zr(e,n)):Wr=Ct(e,n);t:do try{if(Ue!==0&&_e!==null){n=_e;var f=jn;e:switch(Ue){case 1:Ue=0,jn=null,Kr(e,n,f,1);break;case 2:case 9:if(Ep(f)){Ue=0,jn=null,hg(n);break}n=function(){Ue!==2&&Ue!==9||Ve!==e||(Ue=7),Li(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Ep(f)?(Ue=0,jn=null,hg(n)):(Ue=0,jn=null,Kr(e,n,f,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var T=_e;if(!S||Yg(S)){Ue=0,jn=null;var B=T.sibling;if(B!==null)_e=B;else{var J=T.return;J!==null?(_e=J,zl(J)):_e=null}break e}}Ue=0,jn=null,Kr(e,n,f,5);break;case 6:Ue=0,jn=null,Kr(e,n,f,6);break;case 8:vf(),Je=6;break t;default:throw Error(r(462))}}lx();break}catch(ft){lg(e,ft)}while(!0);return Gi=$a=null,F.H=s,F.A=u,De=a,_e!==null?0:(Ve=null,Ee=0,al(),Je)}function lx(){for(;_e!==null&&!re();)fg(_e)}function fg(e){var n=Im(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?zl(e):_e=n}function hg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Lm(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Lm(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Oc(n);default:Hm(a,n),n=_e=dp(n,Zi),n=Im(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?zl(e):_e=n}function Kr(e,n,a,s){Gi=$a=null,Oc(n),Gr=null,no=0;var u=n.return;try{if(Q0(e,u,n,a,Ee)){Je=1,Cl(e,ti(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;Je=1,Cl(e,ti(a,e.current)),_e=null;return}n.flags&32768?(Ce||s===1?e=!0:Wr||(Ee&536870912)!==0?e=!1:(ya=e=!0,(s===2||s===9||s===3||s===6)&&(s=ai.current,s!==null&&s.tag===13&&(s.flags|=16384))),dg(n,e)):zl(n)}function zl(e){var n=e;do{if((n.flags&32768)!==0){dg(n,ya);return}e=n.return;var a=$0(n.alternate,n,Zi);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);Je===0&&(Je=5)}function dg(e,n){do{var a=tx(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);Je=6,_e=null}function pg(e,n,a,s,u,f,S,T,B){e.cancelPendingCommit=null;do Il();while(Mn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=uc,Mt(e,a,f,S,T,B),e===Ve&&(_e=Ve=null,Ee=0),Yr=n,Ta=e,jr=a,mf=f,gf=u,ag=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hx(qe,function(){return xg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null,u=Z.p,Z.p=2,S=De,De|=4;try{ex(e,n,a)}finally{De=S,Z.p=u,F.T=s}}Mn=1,mg(),gg(),_g()}}function mg(){if(Mn===1){Mn=0;var e=Ta,n=Yr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var s=Z.p;Z.p=2;var u=De;De|=4;try{Qm(n,e);var f=Lf,S=ip(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&np(T.ownerDocument.documentElement,T)){if(B!==null&&ac(T)){var J=B.start,ft=B.end;if(ft===void 0&&(ft=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ft,T.value.length);else{var mt=T.ownerDocument||document,it=mt&&mt.defaultView||window;if(it.getSelection){var at=it.getSelection(),ie=T.textContent.length,Jt=Math.min(B.start,ie),Be=B.end===void 0?Jt:Math.min(B.end,ie);!at.extend&&Jt>Be&&(S=Be,Be=Jt,Jt=S);var q=ep(T,Jt),V=ep(T,Be);if(q&&V&&(at.rangeCount!==1||at.anchorNode!==q.node||at.anchorOffset!==q.offset||at.focusNode!==V.node||at.focusOffset!==V.offset)){var K=mt.createRange();K.setStart(q.node,q.offset),at.removeAllRanges(),Jt>Be?(at.addRange(K),at.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),at.addRange(K))}}}}for(mt=[],at=T;at=at.parentNode;)at.nodeType===1&&mt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var ht=mt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Kl=!!Uf,Lf=Uf=null}finally{De=u,Z.p=s,F.T=a}}e.current=n,Mn=2}}function gg(){if(Mn===2){Mn=0;var e=Ta,n=Yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var s=Z.p;Z.p=2;var u=De;De|=4;try{Ym(e,n.alternate,n)}finally{De=u,Z.p=s,F.T=a}}Mn=3}}function _g(){if(Mn===4||Mn===3){Mn=0,ee();var e=Ta,n=Yr,a=jr,s=ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Yr=Ta=null,vg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ea=null),we(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=F.T,u=Z.p,Z.p=2,F.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{F.T=n,Z.p=u}}(jr&3)!==0&&Il(),Li(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===_f?fo++:(fo=0,_f=e):fo=0,ho(0)}}function vg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ws(n)))}function Il(e){return mg(),gg(),_g(),xg()}function xg(){if(Mn!==5)return!1;var e=Ta,n=mf;mf=0;var a=we(jr),s=F.T,u=Z.p;try{Z.p=32>a?32:a,F.T=null,a=gf,gf=null;var f=Ta,S=jr;if(Mn=0,Yr=Ta=null,jr=0,(De&6)!==0)throw Error(r(331));var T=De;if(De|=4,ng(f.current),$m(f,f.current,S,a),De=T,ho(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{Z.p=u,F.T=s,vg(e,n)}}function Sg(e,n,a){n=ti(a,n),n=jc(e.stateNode,n,2),e=pa(e,n,2),e!==null&&(Bt(e,2),Li(e))}function He(e,n,a){if(e.tag===3)Sg(e,e,a);else for(;n!==null;){if(n.tag===3){Sg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){e=ti(a,e),a=Tm(2),s=pa(n,a,2),s!==null&&(bm(a,s,n,e),Bt(s,2),Li(s));break}}n=n.return}}function yf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new ax;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(ff=!0,u.add(a),e=ux.bind(null,e,n,a),n.then(e,e))}function ux(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(Ee&a)===a&&(Je===4||Je===3&&(Ee&62914560)===Ee&&300>Ot()-pf?(De&2)===0&&Zr(e,0):hf|=a,qr===Ee&&(qr=0)),Li(e)}function yg(e,n){n===0&&(n=Tt()),e=Ur(e,n),e!==null&&(Bt(e,n),Li(e))}function cx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),yg(e,a)}function fx(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),yg(e,a)}function hx(e,n){return H(e,n)}var Fl=null,Qr=null,Mf=!1,Hl=!1,Ef=!1,sr=0;function Li(e){e!==Qr&&e.next===null&&(Qr===null?Fl=Qr=e:Qr=Qr.next=e),Hl=!0,Mf||(Mf=!0,px())}function ho(e,n){if(!Ef&&Hl){Ef=!0;do for(var a=!1,s=Fl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,bg(s,f))}else f=Ee,f=Vt(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,bg(s,f));s=s.next}while(a);Ef=!1}}function dx(){Mg()}function Mg(){Hl=Mf=!1;var e=0;sr!==0&&(Mx()&&(e=sr),sr=0);for(var n=Ot(),a=null,s=Fl;s!==null;){var u=s.next,f=Eg(s,n);f===0?(s.next=null,a===null?Fl=u:a.next=u,u===null&&(Qr=a)):(a=s,(e!==0||(f&3)!==0)&&(Hl=!0)),s=u}ho(e)}function Eg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Pt(f),T=1<<S,B=u[S];B===-1?((T&a)===0||(T&s)!==0)&&(u[S]=oe(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=Ve,a=Ee,a=Vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Le(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Le(s),we(a)){case 2:case 8:a=se;break;case 32:a=qe;break;case 268435456:a=O;break;default:a=qe}return s=Tg.bind(null,e),a=H(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Le(s),e.callbackPriority=2,e.callbackNode=null,2}function Tg(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Il()&&e.callbackNode!==a)return null;var s=Ee;return s=Vt(e,e===Ve?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(sg(e,s,n),Eg(e,Ot()),e.callbackNode!=null&&e.callbackNode===a?Tg.bind(null,e):null)}function bg(e,n){if(Il())return null;sg(e,n,!0)}function px(){Tx(function(){(De&6)!==0?H(Gt,dx):Mg()})}function Tf(){return sr===0&&(sr=k()),sr}function Ag(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function Rg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function mx(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ag((u[Ze]||null).action),S=s.submitter;S&&(n=(n=S[Ze]||null)?Ag(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new el("action","action",null,s,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(sr!==0){var B=S?Rg(u,S):new FormData(u);kc(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=S?Rg(u,S):new FormData(u),kc(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var bf=0;bf<lc.length;bf++){var Af=lc[bf],gx=Af.toLowerCase(),_x=Af[0].toUpperCase()+Af.slice(1);mi(gx,"on"+_x)}mi(sp,"onAnimationEnd"),mi(op,"onAnimationIteration"),mi(lp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(O0,"onTransitionRun"),mi(P0,"onTransitionStart"),mi(B0,"onTransitionCancel"),mi(up,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Cg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],B=T.instance,J=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ft){Rl(ft)}u.currentTarget=null,f=B}else for(S=0;S<s.length;S++){if(T=s[S],B=T.instance,J=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ft){Rl(ft)}u.currentTarget=null,f=B}}}}function ve(e,n){var a=n[yr];a===void 0&&(a=n[yr]=new Set);var s=e+"__bubble";a.has(s)||(wg(n,e,2,!1),a.add(s))}function Rf(e,n,a){var s=0;n&&(s|=4),wg(a,e,s,n)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Cf(e){if(!e[Gl]){e[Gl]=!0,Zo.forEach(function(a){a!=="selectionchange"&&(vx.has(a)||Rf(a,!1,e),Rf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gl]||(n[Gl]=!0,Rf("selectionchange",!1,n))}}function wg(e,n,a,s){switch($g(n)){case 2:var u=Wx;break;case 8:u=qx;break;default:u=Vf}a=u.bind(null,n,a,e),u=void 0,!Zu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function wf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=s.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Bi(T),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){s=f=S;continue t}T=T.parentNode}}s=s.return}Bd(function(){var J=f,ft=Yu(a),mt=[];t:{var it=cp.get(e);if(it!==void 0){var at=el,ie=e;switch(e){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":at=h0;break;case"focusin":ie="focus",at=$u;break;case"focusout":ie="blur",at=$u;break;case"beforeblur":case"afterblur":at=$u;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=m0;break;case sp:case op:case lp:at=i0;break;case up:at=_0;break;case"scroll":case"scrollend":at=Jv;break;case"wheel":at=x0;break;case"copy":case"cut":case"paste":at=r0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Gd;break;case"toggle":case"beforetoggle":at=y0}var Jt=(n&4)!==0,Be=!Jt&&(e==="scroll"||e==="scrollend"),q=Jt?it!==null?it+"Capture":null:it;Jt=[];for(var V=J,K;V!==null;){var ht=V;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||q===null||(ht=Ls(V,q),ht!=null&&Jt.push(mo(V,ht,K))),Be)break;V=V.return}0<Jt.length&&(it=new at(it,ie,null,a,ft),mt.push({event:it,listeners:Jt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",it&&a!==qu&&(ie=a.relatedTarget||a.fromElement)&&(Bi(ie)||ie[Ai]))break t;if((at||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,at?(ie=a.relatedTarget||a.toElement,at=J,ie=ie?Bi(ie):null,ie!==null&&(Be=c(ie),Jt=ie.tag,ie!==Be||Jt!==5&&Jt!==27&&Jt!==6)&&(ie=null)):(at=null,ie=J),at!==ie)){if(Jt=Fd,ht="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=Gd,ht="onPointerLeave",q="onPointerEnter",V="pointer"),Be=at==null?it:Xa(at),K=ie==null?it:Xa(ie),it=new Jt(ht,V+"leave",at,a,ft),it.target=Be,it.relatedTarget=K,ht=null,Bi(ft)===J&&(Jt=new Jt(q,V+"enter",ie,a,ft),Jt.target=K,Jt.relatedTarget=Be,ht=Jt),Be=ht,at&&ie)e:{for(Jt=at,q=ie,V=0,K=Jt;K;K=Jr(K))V++;for(K=0,ht=q;ht;ht=Jr(ht))K++;for(;0<V-K;)Jt=Jr(Jt),V--;for(;0<K-V;)q=Jr(q),K--;for(;V--;){if(Jt===q||q!==null&&Jt===q.alternate)break e;Jt=Jr(Jt),q=Jr(q)}Jt=null}else Jt=null;at!==null&&Dg(mt,it,at,Jt,!1),ie!==null&&Be!==null&&Dg(mt,Be,ie,Jt,!0)}}t:{if(it=J?Xa(J):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var It=Zd;else if(Yd(it))if(Kd)It=U0;else{It=w0;var me=C0}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&Wu(J.elementType)&&(It=Zd):It=D0;if(It&&(It=It(e,J))){jd(mt,It,a,ft);break t}me&&me(e,it,J),e==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&bn(it,"number",it.value)}switch(me=J?Xa(J):window,e){case"focusin":(Yd(me)||me.contentEditable==="true")&&(Cr=me,rc=J,Hs=null);break;case"focusout":Hs=rc=Cr=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,ap(mt,a,ft);break;case"selectionchange":if(N0)break;case"keydown":case"keyup":ap(mt,a,ft)}var Yt;if(ec)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Rr?Wd(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Vd&&a.locale!=="ko"&&(Rr||te!=="onCompositionStart"?te==="onCompositionEnd"&&Rr&&(Yt=zd()):(ca=ft,Ku="value"in ca?ca.value:ca.textContent,Rr=!0)),me=Vl(J,te),0<me.length&&(te=new Hd(te,e,null,a,ft),mt.push({event:te,listeners:me}),Yt?te.data=Yt:(Yt=qd(a),Yt!==null&&(te.data=Yt)))),(Yt=E0?T0(e,a):b0(e,a))&&(te=Vl(J,"onBeforeInput"),0<te.length&&(me=new Hd("onBeforeInput","beforeinput",null,a,ft),mt.push({event:me,listeners:te}),me.data=Yt)),mx(mt,e,J,a,ft)}Cg(mt,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Vl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ls(e,a),u!=null&&s.unshift(mo(e,u,f)),u=Ls(e,n),u!=null&&s.push(mo(e,u,f))),e.tag===3)return s;e=e.return}return[]}function Jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dg(e,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,B=T.alternate,J=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||J===null||(B=J,u?(J=Ls(a,f),J!=null&&S.unshift(mo(a,J,B))):u||(J=Ls(a,f),J!=null&&S.push(mo(a,J,B)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var xx=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function Ug(e){return(typeof e=="string"?e:""+e).replace(xx,`
`).replace(Sx,"")}function Lg(e,n){return n=Ug(n),Ug(e)===n}function kl(){}function Pe(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||In(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&In(e,""+s);break;case"className":zt(e,"class",s);break;case"tabIndex":zt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,a,s);break;case"style":Od(e,s,f);break;case"data":if(n!=="object"){zt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Qo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",u.name,u,null),Pe(e,n,"formEncType",u.formEncType,u,null),Pe(e,n,"formMethod",u.formMethod,u,null),Pe(e,n,"formTarget",u.formTarget,u,null)):(Pe(e,n,"encType",u.encType,u,null),Pe(e,n,"method",u.method,u,null),Pe(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Qo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=kl);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Qo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":ve("beforetoggle",e),ve("toggle",e),wt(e,"popover",s);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":wt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Kv.get(a)||a,wt(e,a,s))}}function Df(e,n,a,s,u,f){switch(a){case"style":Od(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?In(e,s):(typeof s=="number"||typeof s=="bigint")&&In(e,""+s);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"onClick":s!=null&&(e.onclick=kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ko.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Ze]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):wt(e,a,s)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,f,S,a,null)}}u&&Pe(e,n,"srcSet",a.srcSet,a,null),s&&Pe(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=S=u=null,B=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":u=ft;break;case"type":S=ft;break;case"checked":B=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Pe(e,n,s,ft,a,null)}}Ln(e,f,T,B,J,S,u,!1),ge(e);return;case"select":ve("invalid",e),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Pe(e,n,u,T,a,null)}n=f,a=S,e.multiple=!!s,n!=null?Ke(e,!!s,n,!1):a!=null&&Ke(e,!!s,a,!0);return;case"textarea":ve("invalid",e),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Pe(e,n,S,T,a,null)}Tr(e,s,u,f),ge(e);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(e,n,B,s,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(s=0;s<po.length;s++)ve(po[s],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,J,s,a,null)}return;default:if(Wu(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&Df(e,n,ft,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Pe(e,n,T,s,a,null))}function yx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,B=null,J=null,ft=null;for(at in a){var mt=a[at];if(a.hasOwnProperty(at)&&mt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":B=mt;default:s.hasOwnProperty(at)||Pe(e,n,at,null,s,mt)}}for(var it in s){var at=s[it];if(mt=a[it],s.hasOwnProperty(it)&&(at!=null||mt!=null))switch(it){case"type":f=at;break;case"name":u=at;break;case"checked":J=at;break;case"defaultChecked":ft=at;break;case"value":S=at;break;case"defaultValue":T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==mt&&Pe(e,n,it,at,s,mt)}}Fe(e,S,T,B,J,ft,f,u);return;case"select":at=S=T=it=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":at=B;default:s.hasOwnProperty(f)||Pe(e,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":it=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==B&&Pe(e,n,u,f,s,B)}n=T,a=S,s=at,it!=null?Ke(e,!!a,it,!1):!!s!=!!a&&(n!=null?Ke(e,!!a,n,!0):Ke(e,!!a,a?[]:"",!1));return;case"textarea":at=it=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Pe(e,n,T,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":it=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Pe(e,n,S,u,s,f)}Sn(e,it,at);return;case"option":for(var ie in a)if(it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!s.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Pe(e,n,ie,null,s,it)}for(B in s)if(it=s[B],at=a[B],s.hasOwnProperty(B)&&it!==at&&(it!=null||at!=null))switch(B){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Pe(e,n,B,it,s,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)it=a[Jt],a.hasOwnProperty(Jt)&&it!=null&&!s.hasOwnProperty(Jt)&&Pe(e,n,Jt,null,s,it);for(J in s)if(it=s[J],at=a[J],s.hasOwnProperty(J)&&it!==at&&(it!=null||at!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Pe(e,n,J,it,s,at)}return;default:if(Wu(n)){for(var Be in a)it=a[Be],a.hasOwnProperty(Be)&&it!==void 0&&!s.hasOwnProperty(Be)&&Df(e,n,Be,void 0,s,it);for(ft in s)it=s[ft],at=a[ft],!s.hasOwnProperty(ft)||it===at||it===void 0&&at===void 0||Df(e,n,ft,it,s,at);return}}for(var q in a)it=a[q],a.hasOwnProperty(q)&&it!=null&&!s.hasOwnProperty(q)&&Pe(e,n,q,null,s,it);for(mt in s)it=s[mt],at=a[mt],!s.hasOwnProperty(mt)||it===at||it==null&&at==null||Pe(e,n,mt,it,s,at)}var Uf=null,Lf=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function Ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Og(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Nf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Of=null;function Mx(){var e=window.event;return e&&e.type==="popstate"?e===Of?!1:(Of=e,!0):(Of=null,!1)}var Pg=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,Tx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(e){return Bg.resolve(null).then(e).catch(bx)}:Pg;function bx(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function zg(e,n){var a=n,s=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=e.ownerDocument;if(a&1&&go(S.documentElement),a&2&&go(S.body),a&4)for(a=S.head,go(a),S=a.firstChild;S;){var T=S.nextSibling,B=S.nodeName;S[Ri]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(u===0){e.removeChild(f),To(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);To(n)}function Pf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pf(a),Er(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ax(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ri])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function Rx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Cx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var zf=null;function Ig(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Fg(e,n,a){switch(n=Xl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Er(e)}var si=new Map,Hg=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ki=Z.d;Z.d={f:wx,r:Dx,D:Ux,C:Lx,L:Nx,m:Ox,X:Bx,S:Px,M:zx};function wx(){var e=Ki.f(),n=Bl();return e||n}function Dx(e){var n=la(e);n!==null&&n.tag===5&&n.type==="form"?sm(n):Ki.r(e)}var $r=typeof document>"u"?null:document;function Gg(e,n,a){var s=$r;if(s&&typeof n=="string"&&n){var u=mn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Hg.has(u)||(Hg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),En(n,"link",e),rn(n),s.head.appendChild(n)))}}function Ux(e){Ki.D(e),Gg("dns-prefetch",e,null)}function Lx(e,n){Ki.C(e,n),Gg("preconnect",e,n)}function Nx(e,n,a){Ki.L(e,n,a);var s=$r;if(s&&e&&n){var u='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+mn(a.imageSizes)+'"]')):u+='[href="'+mn(e)+'"]';var f=u;switch(n){case"style":f=ts(e);break;case"script":f=es(e)}si.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),si.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),En(n,"link",e),rn(n),s.head.appendChild(n)))}}function Ox(e,n){Ki.m(e,n);var a=$r;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+mn(s)+'"][href="'+mn(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=es(e)}if(!si.has(f)&&(e=_({rel:"modulepreload",href:e},n),si.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),En(s,"link",e),rn(s),a.head.appendChild(s)}}}function Px(e,n,a){Ki.S(e,n,a);var s=$r;if(s&&e){var u=ua(s).hoistableStyles,f=ts(e);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(_o(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=si.get(f))&&If(e,a);var B=S=s.createElement("link");rn(B),En(B,"link",e),B._p=new Promise(function(J,ft){B.onload=J,B.onerror=ft}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ql(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function Bx(e,n){Ki.X(e,n);var a=$r;if(a&&e){var s=ua(a).hoistableScripts,u=es(e),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(e=_({src:e,async:!0},n),(n=si.get(u))&&Ff(e,n),f=a.createElement("script"),rn(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function zx(e,n){Ki.M(e,n);var a=$r;if(a&&e){var s=ua(a).hoistableScripts,u=es(e),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=si.get(u))&&Ff(e,n),f=a.createElement("script"),rn(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Vg(e,n,a,s){var u=(u=et.current)?Wl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ts(a.href),a=ua(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ts(a.href);var f=ua(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(_o(e)))&&!f._p&&(S.instance=f,S.state.loading=5),si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(e,a),f||Ix(u,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=es(a),a=ua(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ts(e){return'href="'+mn(e)+'"'}function _o(e){return'link[rel="stylesheet"]['+e+"]"}function kg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Ix(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),rn(n),e.head.appendChild(n))}function es(e){return'[src="'+mn(e)+'"]'}function vo(e){return"script[async]"+e}function Xg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+mn(a.href)+'"]');if(s)return n.instance=s,rn(s),s;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),rn(s),En(s,"style",u),ql(s,a.precedence,e),n.instance=s;case"stylesheet":u=ts(a.href);var f=e.querySelector(_o(u));if(f)return n.state.loading|=4,n.instance=f,rn(f),f;s=kg(a),(u=si.get(u))&&If(s,u),f=(e.ownerDocument||e).createElement("link"),rn(f);var S=f;return S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),En(f,"link",s),n.state.loading|=4,ql(f,a.precedence,e),n.instance=f;case"script":return f=es(a.src),(u=e.querySelector(vo(f)))?(n.instance=u,rn(u),u):(s=a,(u=si.get(f))&&(s=_({},a),Ff(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),rn(u),En(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ql(s,a.precedence,e));return n.instance}function ql(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function If(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yl=null;function Wg(e,n,a){if(Yl===null){var s=new Map,u=Yl=new Map;u.set(a,s)}else u=Yl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ri]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function qg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Fx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var xo=null;function Hx(){}function Gx(e,n,a){if(xo===null)throw Error(r(475));var s=xo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ts(a.href),f=e.querySelector(_o(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=jl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,rn(f);return}f=e.ownerDocument||e,a=kg(a),(u=si.get(u))&&If(a,u),f=f.createElement("link"),rn(f);var S=f;S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),En(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=jl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Vx(){if(xo===null)throw Error(r(475));var e=xo;return e.stylesheets&&e.count===0&&Hf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Hf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function jl(){if(this.count--,this.count===0){if(this.stylesheets)Hf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Hf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(kx,e),Zl=null,jl.call(e))}function kx(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var s=a.get(null);else{a=new Map,Zl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=jl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var So={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Xx(e,n,a,s,u,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function jg(e,n,a,s,u,f,S,T,B,J,ft,mt){return e=new Xx(e,n,a,S,T,B,J,mt),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),e.current=f,f.stateNode=e,n=Sc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Tc(f),e}function Zg(e){return e?(e=Lr,e):Lr}function Kg(e,n,a,s,u,f){u=Zg(u),s.context===null?s.context=u:s.pendingContext=u,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(e,s,n),a!==null&&(Kn(a,e,n),Zs(a,e,n))}function Qg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Gf(e,n){Qg(e,n),(e=e.alternate)&&Qg(e,n)}function Jg(e){if(e.tag===13){var n=Ur(e,67108864);n!==null&&Kn(n,e,67108864),Gf(e,67108864)}}var Kl=!0;function Wx(e,n,a,s){var u=F.T;F.T=null;var f=Z.p;try{Z.p=2,Vf(e,n,a,s)}finally{Z.p=f,F.T=u}}function qx(e,n,a,s){var u=F.T;F.T=null;var f=Z.p;try{Z.p=8,Vf(e,n,a,s)}finally{Z.p=f,F.T=u}}function Vf(e,n,a,s){if(Kl){var u=kf(s);if(u===null)wf(e,n,s,Ql,a),t_(e,s);else if(jx(u,e,n,a,s))s.stopPropagation();else if(t_(e,s),n&4&&-1<Yx.indexOf(e)){for(;u!==null;){var f=la(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=jt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var B=1<<31-Pt(S);T.entanglements[1]|=B,S&=~B}Li(f),(De&6)===0&&(Ol=Ot()+500,ho(0))}}break;case 13:T=Ur(f,2),T!==null&&Kn(T,f,2),Bl(),Gf(f,2)}if(f=kf(s),f===null&&wf(e,n,s,Ql,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else wf(e,n,s,null,a)}}function kf(e){return e=Yu(e),Xf(e)}var Ql=null;function Xf(e){if(Ql=null,e=Bi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ql=e,null}function $g(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case Gt:return 2;case se:return 8;case qe:case Ye:return 32;case O:return 268435456;default:return 32}default:return 32}}var Wf=!1,Ra=null,Ca=null,wa=null,yo=new Map,Mo=new Map,Da=[],Yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t_(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=la(n),n!==null&&Jg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function jx(e,n,a,s,u){switch(n){case"focusin":return Ra=Eo(Ra,e,n,a,s,u),!0;case"dragenter":return Ca=Eo(Ca,e,n,a,s,u),!0;case"mouseover":return wa=Eo(wa,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return yo.set(f,Eo(yo.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Mo.set(f,Eo(Mo.get(f)||null,e,n,a,s,u)),!0}return!1}function e_(e){var n=Bi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,di(e.priority,function(){if(a.tag===13){var s=Zn();s=ae(s);var u=Ur(a,s);u!==null&&Kn(u,a,s),Gf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=kf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);qu=s,a.target.dispatchEvent(s),qu=null}else return n=la(a),n!==null&&Jg(n),e.blockedOn=a,!1;n.shift()}return!0}function n_(e,n,a){Jl(e)&&a.delete(n)}function Zx(){Wf=!1,Ra!==null&&Jl(Ra)&&(Ra=null),Ca!==null&&Jl(Ca)&&(Ca=null),wa!==null&&Jl(wa)&&(wa=null),yo.forEach(n_),Mo.forEach(n_)}function $l(e,n){e.blockedOn===n&&(e.blockedOn=null,Wf||(Wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Zx)))}var tu=null;function i_(e){tu!==e&&(tu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){tu===e&&(tu=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(Xf(s||a)===null)continue;break}var f=la(a);f!==null&&(e.splice(n,3),n-=3,kc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function To(e){function n(B){return $l(B,e)}Ra!==null&&$l(Ra,e),Ca!==null&&$l(Ca,e),wa!==null&&$l(wa,e),yo.forEach(n),Mo.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)e_(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[Ze]||null;if(typeof f=="function")S||i_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Ze]||null)T=S.formAction;else if(Xf(u)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),i_(a)}}}function qf(e){this._internalRoot=e}eu.prototype.render=qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();Kg(a,s,e,n,null,null)},eu.prototype.unmount=qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kg(e.current,2,null,e,null,null),Bl(),n[Ai]=null}};function eu(e){this._internalRoot=e}eu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Te();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&e_(e)}};var a_=t.version;if(a_!=="19.1.1")throw Error(r(527,a_,"19.1.1"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Kx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{ct=nu.inject(Kx),pt=nu}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=Sm,f=ym,S=Mm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=jg(e,1,!1,null,null,a,s,u,f,S,T,null),e[Ai]=n.current,Cf(e),new qf(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=Sm,S=ym,T=Mm,B=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=jg(e,1,!0,n,a??null,s,u,f,S,T,B,J),n.context=Zg(null),a=n.current,s=Zn(),s=ae(s),u=da(s),u.callback=null,pa(a,u,s),a=s,n.current.lanes=a,Bt(n,a),Li(n),e[Ai]=n.current,Cf(e),new eu(n)},Ao.version="19.1.1",Ao}var p_;function sS(){if(p_)return Zf.exports;p_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Zf.exports=rS(),Zf.exports}var oS=sS();const lS="modulepreload",uS=function(o){return"/"+o},m_={},cS=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(v=>Promise.resolve(v).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};var h=p;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");l=p(i.map(_=>{if(_=uS(_),_ in m_)return;m_[_]=!0;const v=_.endsWith(".css"),x=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${x}`))return;const M=document.createElement("link");if(M.rel=v?"stylesheet":lS,v||(M.as="script"),M.crossOrigin="",M.href=_,m&&M.setAttribute("nonce",m),document.head.appendChild(M),v)return new Promise((A,C)=>{M.addEventListener("load",A),M.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return l.then(d=>{for(const m of d||[])m.status==="rejected"&&c(m.reason);return t().catch(c)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Td="180",fS=0,g_=1,hS=2,mv=1,dS=2,na=3,Va=0,kn=1,ia=2,Fa=0,ys=1,__=2,v_=3,x_=4,pS=5,mr=100,mS=101,gS=102,_S=103,vS=104,xS=200,SS=201,yS=202,MS=203,Lh=204,Nh=205,ES=206,TS=207,bS=208,AS=209,RS=210,CS=211,wS=212,DS=213,US=214,Oh=0,Ph=1,Bh=2,Es=3,zh=4,Ih=5,Fh=6,Hh=7,gv=0,LS=1,NS=2,Ha=0,OS=1,PS=2,BS=3,zS=4,IS=5,FS=6,HS=7,_v=300,Ts=301,bs=302,Gh=303,Vh=304,Gu=306,kh=1e3,_r=1001,Xh=1002,Ti=1003,GS=1004,iu=1005,Mi=1006,$f=1007,vr=1008,sa=1009,vv=1010,xv=1011,Fo=1012,bd=1013,xr=1014,aa=1015,Xo=1016,Ad=1017,Rd=1018,Ho=1020,Sv=35902,yv=35899,Mv=1021,Ev=1022,Ei=1023,Go=1026,Vo=1027,Tv=1028,Cd=1029,bv=1030,wd=1031,Dd=1033,wu=33776,Du=33777,Uu=33778,Lu=33779,Wh=35840,qh=35841,Yh=35842,jh=35843,Zh=36196,Kh=37492,Qh=37496,Jh=37808,$h=37809,td=37810,ed=37811,nd=37812,id=37813,ad=37814,rd=37815,sd=37816,od=37817,ld=37818,ud=37819,cd=37820,fd=37821,hd=36492,dd=36494,pd=36495,md=36283,gd=36284,_d=36285,vd=36286,VS=3200,kS=3201,XS=0,WS=1,Ia="",ui="srgb",As="srgb-linear",Ou="linear",ze="srgb",ns=7680,S_=519,qS=512,YS=513,jS=514,Av=515,ZS=516,KS=517,QS=518,JS=519,xd=35044,y_="300 es",Pi=2e3,Pu=2001;class Cs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=Math.PI/180,Sd=180/Math.PI;function Ga(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Se(o,t,i){return Math.max(t,Math.min(i,o))}function $S(o,t){return(o%t+t)%t}function eh(o,t,i){return(1-i)*o+i*t}function Oi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ie(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Me{constructor(t=0,i=0){Me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3];const x=c[h+0],M=c[h+1],A=c[h+2],C=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=A,t[i+3]=C;return}if(v!==C||m!==x||p!==M||_!==A){let y=1-d;const g=m*x+p*M+_*A+v*C,N=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){const P=Math.sqrt(U),I=Math.atan2(P,g*N);y=Math.sin(y*I)/P,d=Math.sin(d*I)/P}const R=d*N;if(m=m*y+x*R,p=p*y+M*R,_=_*y+A*R,v=v*y+C*R,y===1-d){const P=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=P,p*=P,_*=P,v*=P}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=c[h],x=c[h+1],M=c[h+2],A=c[h+3];return t[i]=d*A+_*v+m*M-p*x,t[i+1]=m*A+_*x+p*v-d*M,t[i+2]=p*A+_*M+d*x-m*v,t[i+3]=_*A-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),v=d(c/2),x=m(r/2),M=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*_*v+p*M*A,this._y=p*M*v-x*_*A,this._z=p*_*A+x*M*v,this._w=p*_*v-x*M*A;break;case"YXZ":this._x=x*_*v+p*M*A,this._y=p*M*v-x*_*A,this._z=p*_*A-x*M*v,this._w=p*_*v+x*M*A;break;case"ZXY":this._x=x*_*v-p*M*A,this._y=p*M*v+x*_*A,this._z=p*_*A+x*M*v,this._w=p*_*v-x*M*A;break;case"ZYX":this._x=x*_*v-p*M*A,this._y=p*M*v+x*_*A,this._z=p*_*A-x*M*v,this._w=p*_*v+x*M*A;break;case"YZX":this._x=x*_*v+p*M*A,this._y=p*M*v+x*_*A,this._z=p*_*A-x*M*v,this._w=p*_*v-x*M*A;break;case"XZY":this._x=x*_*v-p*M*A,this._y=p*M*v-x*_*A,this._z=p*_*A+x*M*v,this._w=p*_*v+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(M_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(M_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),_=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*_,this.y=r+m*_+d*p-c*v,this.z=l+m*v+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return nh.copy(this).projectOnVector(t),this.sub(nh)}reflect(t){return this.sub(nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new Q,M_=new Wo;class ue{constructor(t,i,r,l,c,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],v=r[7],x=r[2],M=r[5],A=r[8],C=l[0],y=l[3],g=l[6],N=l[1],U=l[4],R=l[7],P=l[2],I=l[5],z=l[8];return c[0]=h*C+d*N+m*P,c[3]=h*y+d*U+m*I,c[6]=h*g+d*R+m*z,c[1]=p*C+_*N+v*P,c[4]=p*y+_*U+v*I,c[7]=p*g+_*R+v*z,c[2]=x*C+M*N+A*P,c[5]=x*y+M*U+A*I,c[8]=x*g+M*R+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*h-d*p,x=d*m-_*c,M=p*c-h*m,A=i*v+r*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=v*C,t[1]=(l*p-_*r)*C,t[2]=(d*r-l*h)*C,t[3]=x*C,t[4]=(_*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=M*C,t[7]=(r*m-p*i)*C,t[8]=(h*i-r*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ih.makeScale(t,i)),this}rotate(t){return this.premultiply(ih.makeRotation(-t)),this}translate(t,i){return this.premultiply(ih.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ih=new ue;function Rv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Bu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ty(){const o=Bu("canvas");return o.style.display="block",o}const E_={};function ko(o){o in E_||(E_[o]=!0,console.warn(o))}function ey(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const T_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ny(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ze&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Ms(l.r),l.g=Ms(l.g),l.b=Ms(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?Ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ko("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ko("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:t,whitePoint:r,transfer:Ou,toXYZ:T_,fromXYZ:b_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:T_,fromXYZ:b_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),o}const Re=ny();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let is;class iy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{is===void 0&&(is=Bu("canvas")),is.width=t.width,is.height=t.height;const l=is.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=is}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Bu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ra(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ay=0;class Ud{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Ga(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(ah(l[h].image)):c.push(ah(l[h]))}else c=ah(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function ah(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?iy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ry=0;const rh=new Q;class Bn extends Cs{constructor(t=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=_r,l=_r,c=Mi,h=vr,d=Ei,m=sa,p=Bn.DEFAULT_ANISOTROPY,_=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Ga(),this.name="",this.source=new Ud(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_v)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kh:t.x=t.x-Math.floor(t.x);break;case _r:t.x=t.x<0?0:1;break;case Xh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kh:t.y=t.y-Math.floor(t.y);break;case _r:t.y=t.y<0?0:1;break;case Xh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=_v;Bn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],x=m[1],M=m[5],A=m[9],C=m[2],y=m[6],g=m[10];if(Math.abs(_-x)<.01&&Math.abs(v-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,R=(M+1)/2,P=(g+1)/2,I=(_+x)/4,z=(v+C)/4,X=(A+y)/4;return U>R&&U>P?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=I/r,c=z/r):R>P?R<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),r=I/l,c=X/l):P<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),r=z/c,l=X/c),this.set(r,l,c,i),this}let N=Math.sqrt((y-A)*(y-A)+(v-C)*(v-C)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(y-A)/N,this.y=(v-C)/N,this.z=(x-_)/N,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sy extends Cs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Bn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ud(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends sy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Cv extends Bn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class oy extends Bn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,vi):vi.fromBufferAttribute(c,h),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),au.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),au.copy(r.boundingBox)),au.applyMatrix4(t.matrixWorld),this.union(au)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),ru.subVectors(this.max,Ro),as.subVectors(t.a,Ro),rs.subVectors(t.b,Ro),ss.subVectors(t.c,Ro),La.subVectors(rs,as),Na.subVectors(ss,rs),or.subVectors(as,ss);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-or.z,or.y,La.z,0,-La.x,Na.z,0,-Na.x,or.z,0,-or.x,-La.y,La.x,0,-Na.y,Na.x,0,-or.y,or.x,0];return!sh(i,as,rs,ss,ru)||(i=[1,0,0,0,1,0,0,0,1],!sh(i,as,rs,ss,ru))?!1:(su.crossVectors(La,Na),i=[su.x,su.y,su.z],sh(i,as,rs,ss,ru))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],vi=new Q,au=new qo,as=new Q,rs=new Q,ss=new Q,La=new Q,Na=new Q,or=new Q,Ro=new Q,ru=new Q,su=new Q,lr=new Q;function sh(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){lr.fromArray(o,c);const d=l.x*Math.abs(lr.x)+l.y*Math.abs(lr.y)+l.z*Math.abs(lr.z),m=t.dot(lr),p=i.dot(lr),_=r.dot(lr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const ly=new qo,Co=new Q,oh=new Q;class Vu{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):ly.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Co,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(oh)),this.expandByPoint(Co.copy(t.center).sub(oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ji=new Q,lh=new Q,ou=new Q,Oa=new Q,uh=new Q,lu=new Q,ch=new Q;class wv{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){lh.copy(t).add(i).multiplyScalar(.5),ou.copy(i).sub(t).normalize(),Oa.copy(this.origin).sub(lh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(ou),d=Oa.dot(this.direction),m=-Oa.dot(ou),p=Oa.lengthSq(),_=Math.abs(1-h*h);let v,x,M,A;if(_>0)if(v=h*m-d,x=h*d-m,A=c*_,v>=0)if(x>=-A)if(x<=A){const C=1/_;v*=C,x*=C,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-A?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p):x<=A?(v=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(lh).addScaledVector(ou,x),M}intersectSphere(t,i){Ji.subVectors(t.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,i,r,l,c){uh.subVectors(i,t),lu.subVectors(r,t),ch.crossVectors(uh,lu);let h=this.direction.dot(ch),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Oa.subVectors(this.origin,t);const m=d*this.direction.dot(lu.crossVectors(Oa,lu));if(m<0)return null;const p=d*this.direction.dot(uh.cross(Oa));if(p<0||m+p>h)return null;const _=-d*Oa.dot(ch);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,i,r,l,c,h,d,m,p,_,v,x,M,A,C,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,_,v,x,M,A,C,y)}set(t,i,r,l,c,h,d,m,p,_,v,x,M,A,C,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=A,g[11]=C,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/os.setFromMatrixColumn(t,0).length(),c=1/os.setFromMatrixColumn(t,1).length(),h=1/os.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=h*_,M=h*v,A=d*_,C=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+A*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=A+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*_,M=m*v,A=p*_,C=p*v;i[0]=x+C*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-A,i[6]=C+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*_,M=m*v,A=p*_,C=p*v;i[0]=x-C*d,i[4]=-h*v,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*_,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*_,M=h*v,A=d*_,C=d*v;i[0]=m*_,i[4]=A*p-M,i[8]=x*p+C,i[1]=m*v,i[5]=C*p+x,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,A=d*m,C=d*p;i[0]=m*_,i[4]=C-x*v,i[8]=A*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+A,i[10]=x-C*v}else if(t.order==="XZY"){const x=h*m,M=h*p,A=d*m,C=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=x*v+C,i[5]=h*_,i[9]=M*v-A,i[2]=A*v-M,i[6]=d*_,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uy,t,cy)}lookAt(t,i,r){const l=this.elements;return Qn.subVectors(t,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Pa.crossVectors(r,Qn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Pa.crossVectors(r,Qn)),Pa.normalize(),uu.crossVectors(Qn,Pa),l[0]=Pa.x,l[4]=uu.x,l[8]=Qn.x,l[1]=Pa.y,l[5]=uu.y,l[9]=Qn.y,l[2]=Pa.z,l[6]=uu.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],v=r[5],x=r[9],M=r[13],A=r[2],C=r[6],y=r[10],g=r[14],N=r[3],U=r[7],R=r[11],P=r[15],I=l[0],z=l[4],X=l[8],w=l[12],D=l[1],G=l[5],nt=l[9],ot=l[13],dt=l[2],ut=l[6],F=l[10],Z=l[14],Y=l[3],xt=l[7],L=l[11],$=l[15];return c[0]=h*I+d*D+m*dt+p*Y,c[4]=h*z+d*G+m*ut+p*xt,c[8]=h*X+d*nt+m*F+p*L,c[12]=h*w+d*ot+m*Z+p*$,c[1]=_*I+v*D+x*dt+M*Y,c[5]=_*z+v*G+x*ut+M*xt,c[9]=_*X+v*nt+x*F+M*L,c[13]=_*w+v*ot+x*Z+M*$,c[2]=A*I+C*D+y*dt+g*Y,c[6]=A*z+C*G+y*ut+g*xt,c[10]=A*X+C*nt+y*F+g*L,c[14]=A*w+C*ot+y*Z+g*$,c[3]=N*I+U*D+R*dt+P*Y,c[7]=N*z+U*G+R*ut+P*xt,c[11]=N*X+U*nt+R*F+P*L,c[15]=N*w+U*ot+R*Z+P*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],x=t[10],M=t[14],A=t[3],C=t[7],y=t[11],g=t[15];return A*(+c*m*v-l*p*v-c*d*x+r*p*x+l*d*M-r*m*M)+C*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*_-c*m*_)+y*(+i*p*v-i*d*M-c*h*v+r*h*M+c*d*_-r*p*_)+g*(-l*d*_-i*m*v+i*d*x+l*h*v-r*h*x+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],x=t[10],M=t[11],A=t[12],C=t[13],y=t[14],g=t[15],N=v*y*p-C*x*p+C*m*M-d*y*M-v*m*g+d*x*g,U=A*x*p-_*y*p-A*m*M+h*y*M+_*m*g-h*x*g,R=_*C*p-A*v*p+A*d*M-h*C*M-_*d*g+h*v*g,P=A*v*m-_*C*m-A*d*x+h*C*x+_*d*y-h*v*y,I=i*N+r*U+l*R+c*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return t[0]=N*z,t[1]=(C*x*c-v*y*c-C*l*M+r*y*M+v*l*g-r*x*g)*z,t[2]=(d*y*c-C*m*c+C*l*p-r*y*p-d*l*g+r*m*g)*z,t[3]=(v*m*c-d*x*c-v*l*p+r*x*p+d*l*M-r*m*M)*z,t[4]=U*z,t[5]=(_*y*c-A*x*c+A*l*M-i*y*M-_*l*g+i*x*g)*z,t[6]=(A*m*c-h*y*c-A*l*p+i*y*p+h*l*g-i*m*g)*z,t[7]=(h*x*c-_*m*c+_*l*p-i*x*p-h*l*M+i*m*M)*z,t[8]=R*z,t[9]=(A*v*c-_*C*c-A*r*M+i*C*M+_*r*g-i*v*g)*z,t[10]=(h*C*c-A*d*c+A*r*p-i*C*p-h*r*g+i*d*g)*z,t[11]=(_*d*c-h*v*c-_*r*p+i*v*p+h*r*M-i*d*M)*z,t[12]=P*z,t[13]=(_*C*l-A*v*l+A*r*x-i*C*x-_*r*y+i*v*y)*z,t[14]=(A*d*l-h*C*l-A*r*m+i*C*m+h*r*y-i*d*y)*z,t[15]=(h*v*l-_*d*l+_*r*m-i*v*m-h*r*x+i*d*x)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,v=d+d,x=c*p,M=c*_,A=c*v,C=h*_,y=h*v,g=d*v,N=m*p,U=m*_,R=m*v,P=r.x,I=r.y,z=r.z;return l[0]=(1-(C+g))*P,l[1]=(M+R)*P,l[2]=(A-U)*P,l[3]=0,l[4]=(M-R)*I,l[5]=(1-(x+g))*I,l[6]=(y+N)*I,l[7]=0,l[8]=(A+U)*z,l[9]=(y-N)*z,l[10]=(1-(x+C))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=os.set(l[0],l[1],l[2]).length();const h=os.set(l[4],l[5],l[6]).length(),d=os.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/c,_=1/h,v=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=_,xi.elements[5]*=_,xi.elements[6]*=_,xi.elements[8]*=v,xi.elements[9]*=v,xi.elements[10]*=v,i.setFromRotationMatrix(xi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Pi,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(r-l),x=(i+t)/(i-t),M=(r+l)/(r-l);let A,C;if(m)A=c/(h-c),C=h*c/(h-c);else if(d===Pi)A=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Pu)A=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Pi,m=!1){const p=this.elements,_=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),M=-(r+l)/(r-l);let A,C;if(m)A=1/(h-c),C=h/(h-c);else if(d===Pi)A=-2/(h-c),C=-(h+c)/(h-c);else if(d===Pu)A=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const os=new Q,xi=new nn,uy=new Q(0,0,0),cy=new Q(1,1,1),Pa=new Q,uu=new Q,Qn=new Q,A_=new nn,R_=new Wo;class oa{constructor(t=0,i=0,r=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return A_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(A_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return R_.setFromEuler(this),this.setFromQuaternion(R_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class Dv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fy=0;const C_=new Q,ls=new Wo,$i=new nn,cu=new Q,wo=new Q,hy=new Q,dy=new Wo,w_=new Q(1,0,0),D_=new Q(0,1,0),U_=new Q(0,0,1),L_={type:"added"},py={type:"removed"},us={type:"childadded",child:null},fh={type:"childremoved",child:null};class zn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new Q,i=new oa,r=new Wo,l=new Q(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new ue}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ls.setFromAxisAngle(t,i),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,i){return ls.setFromAxisAngle(t,i),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(w_,t)}rotateY(t){return this.rotateOnAxis(D_,t)}rotateZ(t){return this.rotateOnAxis(U_,t)}translateOnAxis(t,i){return C_.copy(t).applyQuaternion(this.quaternion),this.position.add(C_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(w_,t)}translateY(t){return this.translateOnAxis(D_,t)}translateZ(t){return this.translateOnAxis(U_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?cu.copy(t):cu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(wo,cu,this.up):$i.lookAt(cu,wo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),ls.setFromRotationMatrix($i),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(L_),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(py),fh.child=t,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(L_),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,hy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,dy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),A=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}zn.DEFAULT_UP=new Q(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new Q,ta=new Q,hh=new Q,ea=new Q,cs=new Q,fs=new Q,N_=new Q,dh=new Q,ph=new Q,mh=new Q,gh=new en,_h=new en,vh=new en;class ci{constructor(t=new Q,i=new Q,r=new Q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Si.subVectors(t,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Si.subVectors(l,i),ta.subVectors(r,i),hh.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(ta),m=Si.dot(hh),p=ta.dot(ta),_=ta.dot(hh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,M=(p*m-d*_)*x,A=(h*_-d*m)*x;return c.set(1-M-A,A,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ea.x),m.addScaledVector(h,ea.y),m.addScaledVector(d,ea.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return gh.setScalar(0),_h.setScalar(0),vh.setScalar(0),gh.fromBufferAttribute(t,i),_h.fromBufferAttribute(t,r),vh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(gh,c.x),h.addScaledVector(_h,c.y),h.addScaledVector(vh,c.z),h}static isFrontFacing(t,i,r,l){return Si.subVectors(r,i),ta.subVectors(t,i),Si.cross(ta).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),Si.cross(ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return ci.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;cs.subVectors(l,r),fs.subVectors(c,r),dh.subVectors(t,r);const m=cs.dot(dh),p=fs.dot(dh);if(m<=0&&p<=0)return i.copy(r);ph.subVectors(t,l);const _=cs.dot(ph),v=fs.dot(ph);if(_>=0&&v<=_)return i.copy(l);const x=m*v-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(cs,h);mh.subVectors(t,c);const M=cs.dot(mh),A=fs.dot(mh);if(A>=0&&M<=A)return i.copy(c);const C=M*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(fs,d);const y=_*A-M*v;if(y<=0&&v-_>=0&&M-A>=0)return N_.subVectors(c,l),d=(v-_)/(v-_+(M-A)),i.copy(l).addScaledVector(N_,d);const g=1/(y+C+x);return h=C*g,d=x*g,i.copy(r).addScaledVector(cs,h).addScaledVector(fs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},fu={h:0,s:0,l:0};function xh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ye{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=r,Re.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Re.workingColorSpace){if(t=$S(t,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=xh(h,c,t+1/3),this.g=xh(h,c,t),this.b=xh(h,c,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,i=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const r=Uv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Re.workingToColorSpace(wn.copy(this),t),Math.round(Se(wn.r*255,0,255))*65536+Math.round(Se(wn.g*255,0,255))*256+Math.round(Se(wn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,c=wn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Re.workingColorSpace){return Re.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=ui){Re.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+i,Ba.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ba),t.getHSL(fu);const r=eh(Ba.h,fu.h,i),l=eh(Ba.s,fu.s,i),c=eh(Ba.l,fu.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new ye;ye.NAMES=Uv;let my=0;class ws extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=ys,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Lh&&(r.blendSrc=this.blendSrc),this.blendDst!==Nh&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zo extends ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new Q,hu=new Me;let gy=0;class hi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=xd,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)hu.fromBufferAttribute(this,i),hu.applyMatrix3(t),this.setXY(i,hu.x,hu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ie(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array),c=Ie(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xd&&(t.usage=this.usage),t}}class Lv extends hi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Nv extends hi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class bi extends hi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let _y=0;const oi=new nn,Sh=new zn,hs=new Q,Jn=new qo,Do=new qo,xn=new Q;class $n extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rv(t)?Nv:Lv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ue().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,i,r){return oi.makeTranslation(t,i,r),this.applyMatrix4(oi),this}scale(t,i,r){return oi.makeScale(t,i,r),this.applyMatrix4(oi),this}lookAt(t){return Sh.lookAt(t),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new bi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(Jn.min,Do.min),Jn.expandByPoint(xn),xn.addVectors(Jn.max,Do.max),Jn.expandByPoint(xn)):(Jn.expandByPoint(Do.min),Jn.expandByPoint(Do.max))}Jn.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)xn.fromBufferAttribute(d,p),m&&(hs.fromBufferAttribute(t,p),xn.add(hs)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new Q,m[X]=new Q;const p=new Q,_=new Q,v=new Q,x=new Me,M=new Me,A=new Me,C=new Q,y=new Q;function g(X,w,D){p.fromBufferAttribute(r,X),_.fromBufferAttribute(r,w),v.fromBufferAttribute(r,D),x.fromBufferAttribute(c,X),M.fromBufferAttribute(c,w),A.fromBufferAttribute(c,D),_.sub(p),v.sub(p),M.sub(x),A.sub(x);const G=1/(M.x*A.y-A.x*M.y);isFinite(G)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(G),d[X].add(C),d[w].add(C),d[D].add(C),m[X].add(y),m[w].add(y),m[D].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let X=0,w=N.length;X<w;++X){const D=N[X],G=D.start,nt=D.count;for(let ot=G,dt=G+nt;ot<dt;ot+=3)g(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const U=new Q,R=new Q,P=new Q,I=new Q;function z(X){P.fromBufferAttribute(l,X),I.copy(P);const w=d[X];U.copy(w),U.sub(P.multiplyScalar(P.dot(w))).normalize(),R.crossVectors(I,w);const G=R.dot(m[X])<0?-1:1;h.setXYZW(X,U.x,U.y,U.z,G)}for(let X=0,w=N.length;X<w;++X){const D=N[X],G=D.start,nt=D.count;for(let ot=G,dt=G+nt;ot<dt;ot+=3)z(t.getX(ot+0)),z(t.getX(ot+1)),z(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new Q,c=new Q,h=new Q,d=new Q,m=new Q,p=new Q,_=new Q,v=new Q;if(t)for(let x=0,M=t.count;x<M;x+=3){const A=t.getX(x+0),C=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),d.add(_),m.add(_),p.add(_),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,x=new p.constructor(m.length*_);let M=0,A=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*_;for(let g=0;g<_;g++)x[A++]=p[M++]}return new hi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const x=p[_],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O_=new nn,ur=new wv,du=new Vu,P_=new Q,pu=new Q,mu=new Q,gu=new Q,yh=new Q,_u=new Q,B_=new Q,vu=new Q;class fi extends zn{constructor(t=new $n,i=new zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){_u.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(yh.fromBufferAttribute(v,t),h?_u.addScaledVector(yh,_):_u.addScaledVector(yh.sub(i),_))}i.add(_u)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),du.copy(r.boundingSphere),du.applyMatrix4(c),ur.copy(t.ray).recast(t.near),!(du.containsPoint(ur.origin)===!1&&(ur.intersectSphere(du,P_)===null||ur.origin.distanceToSquared(P_)>(t.far-t.near)**2))&&(O_.copy(c).invert(),ur.copy(t.ray).applyMatrix4(O_),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const y=x[A],g=h[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=N,P=U;R<P;R+=3){const I=d.getX(R),z=d.getX(R+1),X=d.getX(R+2);l=xu(this,g,t,r,p,_,v,I,z,X),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=A,g=C;y<g;y+=3){const N=d.getX(y),U=d.getX(y+1),R=d.getX(y+2);l=xu(this,h,t,r,p,_,v,N,U,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const y=x[A],g=h[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let R=N,P=U;R<P;R+=3){const I=R,z=R+1,X=R+2;l=xu(this,g,t,r,p,_,v,I,z,X),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=A,g=C;y<g;y+=3){const N=y,U=y+1,R=y+2;l=xu(this,h,t,r,p,_,v,N,U,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function vy(o,t,i,r,l,c,h,d){let m;if(t.side===kn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===Va,d),m===null)return null;vu.copy(d),vu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(vu);return p<i.near||p>i.far?null:{distance:p,point:vu.clone(),object:o}}function xu(o,t,i,r,l,c,h,d,m,p){o.getVertexPosition(d,pu),o.getVertexPosition(m,mu),o.getVertexPosition(p,gu);const _=vy(o,t,i,r,pu,mu,gu,B_);if(_){const v=new Q;ci.getBarycoord(B_,pu,mu,gu,v),l&&(_.uv=ci.getInterpolatedAttribute(l,d,m,p,v,new Me)),c&&(_.uv1=ci.getInterpolatedAttribute(c,d,m,p,v,new Me)),h&&(_.normal=ci.getInterpolatedAttribute(h,d,m,p,v,new Q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new Q,materialIndex:0};ci.getNormal(pu,mu,gu,x.normal),_.face=x,_.barycoord=v}return _}class Yo extends $n{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],v=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,t,h,c,0),A("z","y","x",1,-1,r,i,-t,h,c,1),A("x","z","y",1,1,t,r,i,l,h,2),A("x","z","y",1,-1,t,r,-i,l,h,3),A("x","y","z",1,-1,t,i,r,l,c,4),A("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(_,3)),this.setAttribute("uv",new bi(v,2));function A(C,y,g,N,U,R,P,I,z,X,w){const D=R/z,G=P/X,nt=R/2,ot=P/2,dt=I/2,ut=z+1,F=X+1;let Z=0,Y=0;const xt=new Q;for(let L=0;L<F;L++){const $=L*G-ot;for(let vt=0;vt<ut;vt++){const St=vt*D-nt;xt[C]=St*N,xt[y]=$*U,xt[g]=dt,p.push(xt.x,xt.y,xt.z),xt[C]=0,xt[y]=0,xt[g]=I>0?1:-1,_.push(xt.x,xt.y,xt.z),v.push(vt/z),v.push(1-L/X),Z+=1}}for(let L=0;L<X;L++)for(let $=0;$<z;$++){const vt=x+$+ut*L,St=x+$+ut*(L+1),Dt=x+($+1)+ut*(L+1),Ft=x+($+1)+ut*L;m.push(vt,St,Ft),m.push(St,Dt,Ft),Y+=6}d.addGroup(M,Y,w),M+=Y,x+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Pn(o){const t={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)t[l]=r[l]}return t}function xy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Ov(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const Sy={clone:Rs,merge:Pn};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,My=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=My,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=xy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Pv extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new Q,z_=new Me,I_=new Me;class yi extends Pv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Sd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(th*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,z_,I_),i.subVectors(I_,z_)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(th*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ds=-90,ps=1;class Ey extends zn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(ds,ps,t,i);l.layers=this.layers,this.add(l);const c=new yi(ds,ps,t,i);c.layers=this.layers,this.add(c);const h=new yi(ds,ps,t,i);h.layers=this.layers,this.add(h);const d=new yi(ds,ps,t,i);d.layers=this.layers,this.add(d);const m=new yi(ds,ps,t,i);m.layers=this.layers,this.add(m);const p=new yi(ds,ps,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Pu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(v,x,M),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Bv extends Bn{constructor(t=[],i=Ts,r,l,c,h,d,m,p,_){super(t,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ty extends Sr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Bv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yo(5,5,5),c=new ka({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Fa});c.uniforms.tEquirect.value=i;const h=new fi(l,c),d=i.minFilter;return i.minFilter===vr&&(i.minFilter=Mi),new Ey(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Po extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const by={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,r),g=this._getHandJoint(p,C);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(by)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Po;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Ay extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ry{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=xd,this.updateRanges=[],this.version=0,this.uuid=Ga()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ga()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ga()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new Q;class zu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)On.fromBufferAttribute(this,i),On.applyMatrix4(t),this.setXYZ(i,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.applyNormalMatrix(t),this.setXYZ(i,On.x,On.y,On.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.transformDirection(t),this.setXYZ(i,On.x,On.y,On.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ie(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Oi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Oi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Oi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Oi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array),c=Ie(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new hi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new zu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zv extends ws{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ms;const Uo=new Q,gs=new Q,_s=new Q,vs=new Me,Lo=new Me,Iv=new nn,Su=new Q,No=new Q,yu=new Q,F_=new Me,Eh=new Me,H_=new Me;class Cy extends zn{constructor(t=new zv){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new $n;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Ry(i,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new zu(r,3,0,!1)),ms.setAttribute("uv",new zu(r,2,3,!1))}this.geometry=ms,this.material=t,this.center=new Me(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),Iv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Mu(Su.set(-.5,-.5,0),_s,h,gs,l,c),Mu(No.set(.5,-.5,0),_s,h,gs,l,c),Mu(yu.set(.5,.5,0),_s,h,gs,l,c),F_.set(0,0),Eh.set(1,0),H_.set(1,1);let d=t.ray.intersectTriangle(Su,No,yu,!1,Uo);if(d===null&&(Mu(No.set(-.5,.5,0),_s,h,gs,l,c),Eh.set(0,1),d=t.ray.intersectTriangle(Su,yu,No,!1,Uo),d===null))return;const m=t.ray.origin.distanceTo(Uo);m<t.near||m>t.far||i.push({distance:m,point:Uo.clone(),uv:ci.getInterpolation(Uo,Su,No,yu,F_,Eh,H_,new Me),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Mu(o,t,i,r,l,c){vs.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Lo.x=c*vs.x-l*vs.y,Lo.y=l*vs.x+c*vs.y):Lo.copy(vs),o.copy(t),o.x+=Lo.x,o.y+=Lo.y,o.applyMatrix4(Iv)}const Th=new Q,wy=new Q,Dy=new ue;class dr{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Th.subVectors(r,i).cross(wy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Th),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Dy.getNormalMatrix(t),l=this.coplanarPoint(Th).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Vu,Uy=new Me(.5,.5),Eu=new Q;class Fv{constructor(t=new dr,i=new dr,r=new dr,l=new dr,c=new dr,h=new dr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Pi,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],x=c[6],M=c[7],A=c[8],C=c[9],y=c[10],g=c[11],N=c[12],U=c[13],R=c[14],P=c[15];if(l[0].setComponents(p-h,M-_,g-A,P-N).normalize(),l[1].setComponents(p+h,M+_,g+A,P+N).normalize(),l[2].setComponents(p+d,M+v,g+C,P+U).normalize(),l[3].setComponents(p-d,M-v,g-C,P-U).normalize(),r)l[4].setComponents(m,x,y,R).normalize(),l[5].setComponents(p-m,M-x,g-y,P-R).normalize();else if(l[4].setComponents(p-m,M-x,g-y,P-R).normalize(),i===Pi)l[5].setComponents(p+m,M+x,g+y,P+R).normalize();else if(i===Pu)l[5].setComponents(m,x,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){cr.center.set(0,0,0);const i=Uy.distanceTo(t.center);return cr.radius=.7071067811865476+i,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Eu.x=l.normal.x>0?t.max.x:t.min.x,Eu.y=l.normal.y>0?t.max.y:t.min.y,Eu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Iu extends ws{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fu=new Q,Hu=new Q,G_=new nn,Oo=new wv,Tu=new Vu,bh=new Q,V_=new Q;class yd extends zn{constructor(t=new $n,i=new Iu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Fu.fromBufferAttribute(i,l-1),Hu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Fu.distanceTo(Hu);t.setAttribute("lineDistance",new bi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tu.copy(r.boundingSphere),Tu.applyMatrix4(l),Tu.radius+=c,t.ray.intersectsSphere(Tu)===!1)return;G_.copy(l).invert(),Oo.copy(t.ray).applyMatrix4(G_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const M=Math.max(0,h.start),A=Math.min(_.count,h.start+h.count);for(let C=M,y=A-1;C<y;C+=p){const g=_.getX(C),N=_.getX(C+1),U=bu(this,t,Oo,m,g,N,C);U&&i.push(U)}if(this.isLineLoop){const C=_.getX(A-1),y=_.getX(M),g=bu(this,t,Oo,m,C,y,A-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),A=Math.min(x.count,h.start+h.count);for(let C=M,y=A-1;C<y;C+=p){const g=bu(this,t,Oo,m,C,C+1,C);g&&i.push(g)}if(this.isLineLoop){const C=bu(this,t,Oo,m,A-1,M,A-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function bu(o,t,i,r,l,c,h){const d=o.geometry.attributes.position;if(Fu.fromBufferAttribute(d,l),Hu.fromBufferAttribute(d,c),i.distanceSqToSegment(Fu,Hu,bh,V_)>r)return;bh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(bh);if(!(p<t.near||p>t.far))return{distance:p,point:V_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class Ly extends yd{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class Ny extends Bn{constructor(t,i,r,l,c,h,d,m,p){super(t,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hv extends Bn{constructor(t,i,r=xr,l,c,h,d=Ti,m=Ti,p,_=Go,v=1){if(_!==Go&&_!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ud(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Gv extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ku extends $n{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,v=t/d,x=i/m,M=[],A=[],C=[],y=[];for(let g=0;g<_;g++){const N=g*x-h;for(let U=0;U<p;U++){const R=U*v-c;A.push(R,-N,0),C.push(0,0,1),y.push(U/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let N=0;N<d;N++){const U=N+p*g,R=N+p*(g+1),P=N+1+p*(g+1),I=N+1+p*g;M.push(U,R,I),M.push(R,P,I)}this.setIndex(M),this.setAttribute("position",new bi(A,3)),this.setAttribute("normal",new bi(C,3)),this.setAttribute("uv",new bi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ku(t.width,t.height,t.widthSegments,t.heightSegments)}}class Io extends $n{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const _=[],v=new Q,x=new Q,M=[],A=[],C=[],y=[];for(let g=0;g<=r;g++){const N=[],U=g/r;let R=0;g===0&&h===0?R=.5/i:g===r&&m===Math.PI&&(R=-.5/i);for(let P=0;P<=i;P++){const I=P/i;v.x=-t*Math.cos(l+I*c)*Math.sin(h+U*d),v.y=t*Math.cos(h+U*d),v.z=t*Math.sin(l+I*c)*Math.sin(h+U*d),A.push(v.x,v.y,v.z),x.copy(v).normalize(),C.push(x.x,x.y,x.z),y.push(I+R,1-U),N.push(p++)}_.push(N)}for(let g=0;g<r;g++)for(let N=0;N<i;N++){const U=_[g][N+1],R=_[g][N],P=_[g+1][N],I=_[g+1][N+1];(g!==0||h>0)&&M.push(U,R,I),(g!==r-1||m<Math.PI)&&M.push(R,P,I)}this.setIndex(M),this.setAttribute("position",new bi(A,3)),this.setAttribute("normal",new bi(C,3)),this.setAttribute("uv",new bi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oy extends ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Py extends ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Vv extends Pv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class By extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function k_(o,t,i,r){const l=zy(r);switch(i){case Mv:return o*t;case Tv:return o*t/l.components*l.byteLength;case Cd:return o*t/l.components*l.byteLength;case bv:return o*t*2/l.components*l.byteLength;case wd:return o*t*2/l.components*l.byteLength;case Ev:return o*t*3/l.components*l.byteLength;case Ei:return o*t*4/l.components*l.byteLength;case Dd:return o*t*4/l.components*l.byteLength;case wu:case Du:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Uu:case Lu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qh:case jh:return Math.max(o,16)*Math.max(t,8)/4;case Wh:case Yh:return Math.max(o,8)*Math.max(t,8)/2;case Zh:case Kh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Qh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case td:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ed:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case nd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case id:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ad:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case rd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case sd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case od:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ld:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ud:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case cd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case fd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case hd:case dd:case pd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case md:case gd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case _d:case vd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zy(o){switch(o){case sa:case vv:return{byteLength:1,components:1};case Fo:case xv:case Xo:return{byteLength:2,components:1};case Ad:case Rd:return{byteLength:2,components:4};case xr:case bd:case aa:return{byteLength:4,components:1};case Sv:case yv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Td);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kv(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Iy(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<v.length;M++){const A=v[x],C=v[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,v[x]=C)}v.length=x+1;for(let M=0,A=v.length;M<A;M++){const C=v[M];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hy=`#ifdef USE_ALPHAHASH
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
#endif`,Gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wy=`#ifdef USE_AOMAP
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
#endif`,qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yy=`#ifdef USE_BATCHING
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
#endif`,jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
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
#endif`,$y=`#ifdef USE_BUMPMAP
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lM=`#define PI 3.141592653589793
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
} // validated`,uM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mM="gl_FragColor = linearToOutputTexel( gl_FragColor );",gM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DM=`uniform bool receiveShadow;
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
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BM=`PhysicalMaterial material;
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
#endif`,zM=`struct PhysicalMaterial {
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
}`,IM=`
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
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
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
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
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EE=`float getShadowMask() {
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
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,AE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,CE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
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
}`,WE=`#if DEPTH_PACKING == 3200
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
}`,qE=`#define DISTANCE
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
}`,YE=`#define DISTANCE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`uniform float scale;
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
}`,QE=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,$E=`uniform vec3 diffuse;
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
}`,tT=`#define LAMBERT
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
}`,eT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,rT=`#define NORMAL
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
}`,sT=`#define PHONG
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
}`,oT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,uT=`#define STANDARD
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
}`,cT=`#define TOON
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
}`,fT=`#define TOON
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
}`,hT=`uniform float size;
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:Fy,alphahash_pars_fragment:Hy,alphamap_fragment:Gy,alphamap_pars_fragment:Vy,alphatest_fragment:ky,alphatest_pars_fragment:Xy,aomap_fragment:Wy,aomap_pars_fragment:qy,batching_pars_vertex:Yy,batching_vertex:jy,begin_vertex:Zy,beginnormal_vertex:Ky,bsdfs:Qy,iridescence_fragment:Jy,bumpmap_pars_fragment:$y,clipping_planes_fragment:tM,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:aM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:oM,common:lM,cube_uv_reflection_fragment:uM,defaultnormal_vertex:cM,displacementmap_pars_vertex:fM,displacementmap_vertex:hM,emissivemap_fragment:dM,emissivemap_pars_fragment:pM,colorspace_fragment:mM,colorspace_pars_fragment:gM,envmap_fragment:_M,envmap_common_pars_fragment:vM,envmap_pars_fragment:xM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:UM,envmap_vertex:yM,fog_vertex:MM,fog_pars_vertex:EM,fog_fragment:TM,fog_pars_fragment:bM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:RM,lights_lambert_fragment:CM,lights_lambert_pars_fragment:wM,lights_pars_begin:DM,lights_toon_fragment:LM,lights_toon_pars_fragment:NM,lights_phong_fragment:OM,lights_phong_pars_fragment:PM,lights_physical_fragment:BM,lights_physical_pars_fragment:zM,lights_fragment_begin:IM,lights_fragment_maps:FM,lights_fragment_end:HM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:XM,map_fragment:WM,map_pars_fragment:qM,map_particle_fragment:YM,map_particle_pars_fragment:jM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:KM,morphinstance_vertex:QM,morphcolor_vertex:JM,morphnormal_vertex:$M,morphtarget_pars_vertex:tE,morphtarget_vertex:eE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:aE,normal_pars_vertex:rE,normal_vertex:sE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:uE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:fE,opaque_fragment:hE,packing:dE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:gE,dithering_pars_fragment:_E,roughnessmap_fragment:vE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:SE,shadowmap_pars_vertex:yE,shadowmap_vertex:ME,shadowmask_pars_fragment:EE,skinbase_vertex:TE,skinning_pars_vertex:bE,skinning_vertex:AE,skinnormal_vertex:RE,specularmap_fragment:CE,specularmap_pars_fragment:wE,tonemapping_fragment:DE,tonemapping_pars_fragment:UE,transmission_fragment:LE,transmission_pars_fragment:NE,uv_pars_fragment:OE,uv_pars_vertex:PE,uv_vertex:BE,worldpos_vertex:zE,background_vert:IE,background_frag:FE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:VE,cube_frag:kE,depth_vert:XE,depth_frag:WE,distanceRGBA_vert:qE,distanceRGBA_frag:YE,equirect_vert:jE,equirect_frag:ZE,linedashed_vert:KE,linedashed_frag:QE,meshbasic_vert:JE,meshbasic_frag:$E,meshlambert_vert:tT,meshlambert_frag:eT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:aT,meshnormal_frag:rT,meshphong_vert:sT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:uT,meshtoon_vert:cT,meshtoon_frag:fT,points_vert:hT,points_frag:dT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},Nt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ni={basic:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Pn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Pn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Pn([Nt.points,Nt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Pn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Pn([Nt.common,Nt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Pn([Nt.sprite,Nt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Pn([Nt.common,Nt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Pn([Nt.lights,Nt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ni.physical={uniforms:Pn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Au={r:0,b:0,g:0},fr=new oa,vT=new nn;function xT(o,t,i,r,l,c,h){const d=new ye(0);let m=c===!0?0:1,p,_,v=null,x=0,M=null;function A(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?i:t).get(R)),R}function C(U){let R=!1;const P=A(U);P===null?g(d,m):P&&P.isColor&&(g(P,1),R=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,R){const P=A(R);P&&(P.isCubeTexture||P.mapping===Gu)?(_===void 0&&(_=new fi(new Yo(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Rs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),fr.copy(R.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(fr)),_.material.toneMapped=Re.getTransfer(P.colorSpace)!==ze,(v!==P||x!==P.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=P,x=P.version,M=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new fi(new ku(2,2),new ka({name:"BackgroundMaterial",uniforms:Rs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Re.getTransfer(P.colorSpace)!==ze,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||x!==P.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=P,x=P.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function g(U,R){U.getRGB(Au,Ov(o)),r.buffers.color.setClear(Au.r,Au.g,Au.b,R,h)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,R=1){d.set(U),m=R,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,g(d,m)},render:C,addToRenderList:y,dispose:N}}function ST(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(D,G,nt,ot,dt){let ut=!1;const F=v(ot,nt,G);c!==F&&(c=F,p(c.object)),ut=M(D,ot,nt,dt),ut&&A(D,ot,nt,dt),dt!==null&&t.update(dt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,R(D,G,nt,ot),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function _(D){return o.deleteVertexArray(D)}function v(D,G,nt){const ot=nt.wireframe===!0;let dt=r[D.id];dt===void 0&&(dt={},r[D.id]=dt);let ut=dt[G.id];ut===void 0&&(ut={},dt[G.id]=ut);let F=ut[ot];return F===void 0&&(F=x(m()),ut[ot]=F),F}function x(D){const G=[],nt=[],ot=[];for(let dt=0;dt<i;dt++)G[dt]=0,nt[dt]=0,ot[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nt,attributeDivisors:ot,object:D,attributes:{},index:null}}function M(D,G,nt,ot){const dt=c.attributes,ut=G.attributes;let F=0;const Z=nt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const L=dt[Y];let $=ut[Y];if($===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),L===void 0||L.attribute!==$||$&&L.data!==$.data)return!0;F++}return c.attributesNum!==F||c.index!==ot}function A(D,G,nt,ot){const dt={},ut=G.attributes;let F=0;const Z=nt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let L=ut[Y];L===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(L=D.instanceColor));const $={};$.attribute=L,L&&L.data&&($.data=L.data),dt[Y]=$,F++}c.attributes=dt,c.attributesNum=F,c.index=ot}function C(){const D=c.newAttributes;for(let G=0,nt=D.length;G<nt;G++)D[G]=0}function y(D){g(D,0)}function g(D,G){const nt=c.newAttributes,ot=c.enabledAttributes,dt=c.attributeDivisors;nt[D]=1,ot[D]===0&&(o.enableVertexAttribArray(D),ot[D]=1),dt[D]!==G&&(o.vertexAttribDivisor(D,G),dt[D]=G)}function N(){const D=c.newAttributes,G=c.enabledAttributes;for(let nt=0,ot=G.length;nt<ot;nt++)G[nt]!==D[nt]&&(o.disableVertexAttribArray(nt),G[nt]=0)}function U(D,G,nt,ot,dt,ut,F){F===!0?o.vertexAttribIPointer(D,G,nt,dt,ut):o.vertexAttribPointer(D,G,nt,ot,dt,ut)}function R(D,G,nt,ot){C();const dt=ot.attributes,ut=nt.getAttributes(),F=G.defaultAttributeValues;for(const Z in ut){const Y=ut[Z];if(Y.location>=0){let xt=dt[Z];if(xt===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),xt!==void 0){const L=xt.normalized,$=xt.itemSize,vt=t.get(xt);if(vt===void 0)continue;const St=vt.buffer,Dt=vt.type,Ft=vt.bytesPerElement,et=Dt===o.INT||Dt===o.UNSIGNED_INT||xt.gpuType===bd;if(xt.isInterleavedBufferAttribute){const gt=xt.data,bt=gt.stride,Zt=xt.offset;if(gt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<Y.locationSize;Wt++)g(Y.location+Wt,gt.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Wt=0;Wt<Y.locationSize;Wt++)y(Y.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Wt=0;Wt<Y.locationSize;Wt++)U(Y.location+Wt,$/Y.locationSize,Dt,L,bt*Ft,(Zt+$/Y.locationSize*Wt)*Ft,et)}else{if(xt.isInstancedBufferAttribute){for(let gt=0;gt<Y.locationSize;gt++)g(Y.location+gt,xt.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let gt=0;gt<Y.locationSize;gt++)y(Y.location+gt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let gt=0;gt<Y.locationSize;gt++)U(Y.location+gt,$/Y.locationSize,Dt,L,$*Ft,$/Y.locationSize*gt*Ft,et)}}else if(F!==void 0){const L=F[Z];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(Y.location,L);break;case 3:o.vertexAttrib3fv(Y.location,L);break;case 4:o.vertexAttrib4fv(Y.location,L);break;default:o.vertexAttrib1fv(Y.location,L)}}}}N()}function P(){X();for(const D in r){const G=r[D];for(const nt in G){const ot=G[nt];for(const dt in ot)_(ot[dt].object),delete ot[dt];delete G[nt]}delete r[D]}}function I(D){if(r[D.id]===void 0)return;const G=r[D.id];for(const nt in G){const ot=G[nt];for(const dt in ot)_(ot[dt].object),delete ot[dt];delete G[nt]}delete r[D.id]}function z(D){for(const G in r){const nt=r[G];if(nt[D.id]===void 0)continue;const ot=nt[D.id];for(const dt in ot)_(ot[dt].object),delete ot[dt];delete nt[D.id]}}function X(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:N}}function yT(o,t,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(r,p,_,v),i.update(_,r,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let M=0;for(let A=0;A<v;A++)M+=_[A];i.update(M,r,1)}function m(p,_,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],_[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,v);let A=0;for(let C=0;C<v;C++)A+=_[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function MT(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ei&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const X=z===Xo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==sa&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==aa&&!X)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=A>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:P,maxSamples:I}}function ET(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new dr,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,M){const A=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,g=o.get(v);if(!l||A===null||A.length===0||c&&!y)c?_(null):p();else{const N=c?0:r,U=N*4;let R=g.clippingState||null;m.value=R,R=_(A,x,U,M);for(let P=0;P!==U;++P)R[P]=i[P];g.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(v,x,M,A){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const g=M+C*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<g)&&(y=new Float32Array(g));for(let U=0,R=M;U!==C;++U,R+=4)h.copy(v[U]).applyMatrix4(N,d),h.normal.toArray(y,R),y[R+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function TT(o){let t=new WeakMap;function i(h,d){return d===Gh?h.mapping=Ts:d===Vh&&(h.mapping=bs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Gh||d===Vh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ty(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ss=4,X_=[.125,.215,.35,.446,.526,.582],gr=20,Ah=new Vv,W_=new ye;let Rh=null,Ch=0,wh=0,Dh=!1;const pr=(1+Math.sqrt(5))/2,xs=1/pr,q_=[new Q(-pr,xs,0),new Q(pr,xs,0),new Q(-xs,0,pr),new Q(xs,0,pr),new Q(0,pr,-xs),new Q(0,pr,xs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],bT=new Q;class Y_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=bT}=c;Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rh,Ch,wh),this._renderer.xr.enabled=Dh,t.scissorTest=!1,Ru(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ts||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Xo,format:Ei,colorSpace:As,depthBuffer:!1},l=j_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(c)),this._blurMaterial=RT(c,t,i)}return l}_compileMaterial(t){const i=new fi(this._lodPlanes[0],t);this._renderer.compile(i,Ah)}_sceneToCubeUV(t,i,r,l,c){const m=new yi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(W_),v.toneMapping=Ha,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const C=new zo({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),y=new fi(new Yo,C);let g=!1;const N=t.background;N?N.isColor&&(C.color.copy(N),t.background=null,g=!0):(C.color.copy(W_),g=!0);for(let U=0;U<6;U++){const R=U%3;R===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):R===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const P=this._cubeSize;Ru(l,R*P,U>2?P:0,P,P),v.setRenderTarget(l),g&&v.render(y,m),v.render(t,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=N}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ts||t.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=K_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new fi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Ru(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Ah)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=q_[(l-c-1)%q_.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new fi(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*gr-1),C=c/A,y=isFinite(c)?1+Math.floor(_*C):gr;y>gr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gr}`);const g=[];let N=0;for(let z=0;z<gr;++z){const X=z/C,w=Math.exp(-X*X/2);g.push(w),z===0?N+=w:z<y&&(N+=2*w)}for(let z=0;z<g.length;z++)g[z]=g[z]/N;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=A,x.mipInt.value=U-r;const R=this._sizeLods[l],P=3*R*(l>U-Ss?l-U+Ss:0),I=4*(this._cubeSize-R);Ru(i,P,I,3*R,2*R),m.setRenderTarget(i),m.render(v,Ah)}}function AT(o){const t=[],i=[],r=[];let l=o;const c=o-Ss+1+X_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Ss?m=X_[h-o+Ss-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,v=1+p,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,A=6,C=3,y=2,g=1,N=new Float32Array(C*A*M),U=new Float32Array(y*A*M),R=new Float32Array(g*A*M);for(let I=0;I<M;I++){const z=I%3*2/3-1,X=I>2?0:-1,w=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];N.set(w,C*A*I),U.set(x,y*A*I);const D=[I,I,I,I,I,I];R.set(D,g*A*I)}const P=new $n;P.setAttribute("position",new hi(N,C)),P.setAttribute("uv",new hi(U,y)),P.setAttribute("faceIndex",new hi(R,g)),t.push(P),l>Ss&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function j_(o,t,i){const r=new Sr(o,t,i);return r.texture.mapping=Gu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ru(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function RT(o,t,i){const r=new Float32Array(gr),l=new Q(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Z_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function K_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}function CT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Gh||m===Vh,_=m===Ts||m===bs;if(p||_){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Y_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Y_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function wT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ko("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function DT(o,t,i,r){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const A in x.attributes)t.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,A=v.attributes.position;let C=0;if(M!==null){const N=M.array;C=M.version;for(let U=0,R=N.length;U<R;U+=3){const P=N[U+0],I=N[U+1],z=N[U+2];x.push(P,I,I,z,z,P)}}else if(A!==void 0){const N=A.array;C=A.version;for(let U=0,R=N.length/3-1;U<R;U+=3){const P=U+0,I=U+1,z=U+2;x.push(P,I,I,z,z,P)}}else return;const y=new(Rv(x)?Nv:Lv)(x,1);y.version=C;const g=c.get(v);g&&t.remove(g),c.set(v,y)}function _(v){const x=c.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function UT(o,t,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,c,x*h),i.update(M,r,1)}function p(x,M,A){A!==0&&(o.drawElementsInstanced(r,M,c,x*h,A),i.update(M,r,A))}function _(x,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,A);let y=0;for(let g=0;g<A;g++)y+=M[g];i.update(y,r,1)}function v(x,M,A,C){if(A===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/h,M[g],C[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,C,0,A);let g=0;for(let N=0;N<A;N++)g+=M[N]*C[N];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function LT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function NT(o,t,i){const r=new WeakMap,l=new en;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let D=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let R=0;A===!0&&(R=1),C===!0&&(R=2),y===!0&&(R=3);let P=d.attributes.position.count*R,I=1;P>t.maxTextureSize&&(I=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const z=new Float32Array(P*I*4*v),X=new Cv(z,P,I,v);X.type=aa,X.needsUpdate=!0;const w=R*4;for(let G=0;G<v;G++){const nt=g[G],ot=N[G],dt=U[G],ut=P*I*4*G;for(let F=0;F<nt.count;F++){const Z=F*w;A===!0&&(l.fromBufferAttribute(nt,F),z[ut+Z+0]=l.x,z[ut+Z+1]=l.y,z[ut+Z+2]=l.z,z[ut+Z+3]=0),C===!0&&(l.fromBufferAttribute(ot,F),z[ut+Z+4]=l.x,z[ut+Z+5]=l.y,z[ut+Z+6]=l.z,z[ut+Z+7]=0),y===!0&&(l.fromBufferAttribute(dt,F),z[ut+Z+8]=l.x,z[ut+Z+9]=l.y,z[ut+Z+10]=l.z,z[ut+Z+11]=dt.itemSize===4?l.w:1)}}x={count:v,texture:X,size:new Me(P,I)},r.set(d,x),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function OT(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Xv=new Bn,Q_=new Hv(1,1),Wv=new Cv,qv=new oy,Yv=new Bv,J_=[],$_=[],tv=new Float32Array(16),ev=new Float32Array(9),nv=new Float32Array(4);function Ds(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=J_[l];if(c===void 0&&(c=new Float32Array(l),J_[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function dn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Xu(o,t){let i=$_[t];i===void 0&&(i=new Int32Array(t),$_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function PT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function BT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function IT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function FT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;nv.set(r),o.uniformMatrix2fv(this.addr,!1,nv),pn(i,r)}}function HT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;ev.set(r),o.uniformMatrix3fv(this.addr,!1,ev),pn(i,r)}}function GT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;tv.set(r),o.uniformMatrix4fv(this.addr,!1,tv),pn(i,r)}}function VT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function kT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function XT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function WT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function qT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function YT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function jT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function ZT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function KT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Q_.compareFunction=Av,c=Q_):c=Xv,i.setTexture2D(t||c,l)}function QT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||qv,l)}function JT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Yv,l)}function $T(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Wv,l)}function tb(o){switch(o){case 5126:return PT;case 35664:return BT;case 35665:return zT;case 35666:return IT;case 35674:return FT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return VT;case 35667:case 35671:return kT;case 35668:case 35672:return XT;case 35669:case 35673:return WT;case 5125:return qT;case 36294:return YT;case 36295:return jT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return $T}}function eb(o,t){o.uniform1fv(this.addr,t)}function nb(o,t){const i=Ds(t,this.size,2);o.uniform2fv(this.addr,i)}function ib(o,t){const i=Ds(t,this.size,3);o.uniform3fv(this.addr,i)}function ab(o,t){const i=Ds(t,this.size,4);o.uniform4fv(this.addr,i)}function rb(o,t){const i=Ds(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function sb(o,t){const i=Ds(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ob(o,t){const i=Ds(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function lb(o,t){o.uniform1iv(this.addr,t)}function ub(o,t){o.uniform2iv(this.addr,t)}function cb(o,t){o.uniform3iv(this.addr,t)}function fb(o,t){o.uniform4iv(this.addr,t)}function hb(o,t){o.uniform1uiv(this.addr,t)}function db(o,t){o.uniform2uiv(this.addr,t)}function pb(o,t){o.uniform3uiv(this.addr,t)}function mb(o,t){o.uniform4uiv(this.addr,t)}function gb(o,t,i){const r=this.cache,l=t.length,c=Xu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Xv,c[h])}function _b(o,t,i){const r=this.cache,l=t.length,c=Xu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||qv,c[h])}function vb(o,t,i){const r=this.cache,l=t.length,c=Xu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Yv,c[h])}function xb(o,t,i){const r=this.cache,l=t.length,c=Xu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Wv,c[h])}function Sb(o){switch(o){case 5126:return eb;case 35664:return nb;case 35665:return ib;case 35666:return ab;case 35674:return rb;case 35675:return sb;case 35676:return ob;case 5124:case 35670:return lb;case 35667:case 35671:return ub;case 35668:case 35672:return cb;case 35669:case 35673:return fb;case 5125:return hb;case 36294:return db;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}class yb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=tb(i.type)}}class Mb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Sb(i.type)}}class Eb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Uh=/(\w+)(\])?(\[|\.)?/g;function iv(o,t){o.seq.push(t),o.map[t.id]=t}function Tb(o,t,i){const r=o.name,l=r.length;for(Uh.lastIndex=0;;){const c=Uh.exec(r),h=Uh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){iv(i,p===void 0?new yb(d,o,t):new Mb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new Eb(d),iv(i,v)),i=v}}}class Nu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);Tb(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function av(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const bb=37297;let Ab=0;function Rb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const rv=new ue;function Cb(o){Re._getMatrix(rv,Re.workingColorSpace,o);const t=`mat3( ${rv.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case Ou:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function sv(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Rb(o.getShaderSource(t),d)}else return c}function wb(o,t){const i=Cb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Db(o,t){let i;switch(t){case OS:i="Linear";break;case PS:i="Reinhard";break;case BS:i="Cineon";break;case zS:i="ACESFilmic";break;case FS:i="AgX";break;case HS:i="Neutral";break;case IS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cu=new Q;function Ub(){Re.getLuminanceCoefficients(Cu);const o=Cu.x.toFixed(4),t=Cu.y.toFixed(4),i=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Nb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Ob(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Bo(o){return o!==""}function ov(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(o){return o.replace(Pb,zb)}const Bb=new Map;function zb(o,t){let i=he[t];if(i===void 0){const r=Bb.get(t);if(r!==void 0)i=he[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Md(i)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uv(o){return o.replace(Ib,Fb)}function Fb(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function cv(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function Hb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===mv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===dS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===na&&(t="SHADOWMAP_TYPE_VSM"),t}function Gb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ts:case bs:t="ENVMAP_TYPE_CUBE";break;case Gu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function kb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case gv:t="ENVMAP_BLENDING_MULTIPLY";break;case LS:t="ENVMAP_BLENDING_MIX";break;case NS:t="ENVMAP_BLENDING_ADD";break}return t}function Xb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Wb(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Hb(i),p=Gb(i),_=Vb(i),v=kb(i),x=Xb(i),M=Lb(i),A=Nb(c),C=l.createProgram();let y,g,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Bo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Bo).join(`
`),g.length>0&&(g+=`
`)):(y=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),g=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?he.tonemapping_pars_fragment:"",i.toneMapping!==Ha?Db("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,wb("linearToOutputTexel",i.outputColorSpace),Ub(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=Md(h),h=ov(h,i),h=lv(h,i),d=Md(d),d=ov(d,i),d=lv(d,i),h=uv(h),d=uv(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=N+y+h,R=N+g+d,P=av(l,l.VERTEX_SHADER,U),I=av(l,l.FRAGMENT_SHADER,R);l.attachShader(C,P),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(G){if(o.debug.checkShaderErrors){const nt=l.getProgramInfoLog(C)||"",ot=l.getShaderInfoLog(P)||"",dt=l.getShaderInfoLog(I)||"",ut=nt.trim(),F=ot.trim(),Z=dt.trim();let Y=!0,xt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,P,I);else{const L=sv(l,P,"vertex"),$=sv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ut+`
`+L+`
`+$)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(F===""||Z==="")&&(xt=!1);xt&&(G.diagnostics={runnable:Y,programLog:ut,vertexShader:{log:F,prefix:y},fragmentShader:{log:Z,prefix:g}})}l.deleteShader(P),l.deleteShader(I),X=new Nu(l,C),w=Ob(l,C)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,bb)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Ab++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=P,this.fragmentShader=I,this}let qb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new jb(t),i.set(t,r)),r}}class jb{constructor(t){this.id=qb++,this.code=t,this.usedTimes=0}}function Zb(o,t,i,r,l,c,h){const d=new Dv,m=new Yb,p=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,D,G,nt,ot){const dt=nt.fog,ut=ot.geometry,F=w.isMeshStandardMaterial?nt.environment:null,Z=(w.isMeshStandardMaterial?i:t).get(w.envMap||F),Y=Z&&Z.mapping===Gu?Z.image.height:null,xt=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const L=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,$=L!==void 0?L.length:0;let vt=0;ut.morphAttributes.position!==void 0&&(vt=1),ut.morphAttributes.normal!==void 0&&(vt=2),ut.morphAttributes.color!==void 0&&(vt=3);let St,Dt,Ft,et;if(xt){const Te=Ni[xt];St=Te.vertexShader,Dt=Te.fragmentShader}else St=w.vertexShader,Dt=w.fragmentShader,m.update(w),Ft=m.getVertexShaderID(w),et=m.getFragmentShaderID(w);const gt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Zt=ot.isInstancedMesh===!0,Wt=ot.isBatchedMesh===!0,de=!!w.map,an=!!w.matcap,H=!!Z,Le=!!w.aoMap,re=!!w.lightMap,ee=!!w.bumpMap,Ot=!!w.normalMap,Ge=!!w.displacementMap,Gt=!!w.emissiveMap,se=!!w.metalnessMap,qe=!!w.roughnessMap,Ye=w.anisotropy>0,O=w.clearcoat>0,E=w.dispersion>0,tt=w.iridescence>0,ct=w.sheen>0,pt=w.transmission>0,lt=Ye&&!!w.anisotropyMap,Pt=O&&!!w.clearcoatMap,At=O&&!!w.clearcoatNormalMap,kt=O&&!!w.clearcoatRoughnessMap,qt=tt&&!!w.iridescenceMap,yt=tt&&!!w.iridescenceThicknessMap,Ut=ct&&!!w.sheenColorMap,jt=ct&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Ct=!!w.specularColorMap,oe=!!w.specularIntensityMap,k=pt&&!!w.transmissionMap,Tt=pt&&!!w.thicknessMap,Rt=!!w.gradientMap,Bt=!!w.alphaMap,Mt=w.alphaTest>0,_t=!!w.alphaHash,Ht=!!w.extensions;let ae=Ha;w.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ae=o.toneMapping);const we={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:Dt,defines:w.defines,customVertexShaderID:Ft,customFragmentShaderID:et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Wt,batchingColor:Wt&&ot._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&ot.instanceColor!==null,instancingMorph:Zt&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:As,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:an,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:Y,aoMap:Le,lightMap:re,bumpMap:ee,normalMap:Ot,displacementMap:x&&Ge,emissiveMap:Gt,normalMapObjectSpace:Ot&&w.normalMapType===WS,normalMapTangentSpace:Ot&&w.normalMapType===XS,metalnessMap:se,roughnessMap:qe,anisotropy:Ye,anisotropyMap:lt,clearcoat:O,clearcoatMap:Pt,clearcoatNormalMap:At,clearcoatRoughnessMap:kt,dispersion:E,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:yt,sheen:ct,sheenColorMap:Ut,sheenRoughnessMap:jt,specularMap:Vt,specularColorMap:Ct,specularIntensityMap:oe,transmission:pt,transmissionMap:k,thicknessMap:Tt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===ys&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:_t,combine:w.combine,mapUv:de&&C(w.map.channel),aoMapUv:Le&&C(w.aoMap.channel),lightMapUv:re&&C(w.lightMap.channel),bumpMapUv:ee&&C(w.bumpMap.channel),normalMapUv:Ot&&C(w.normalMap.channel),displacementMapUv:Ge&&C(w.displacementMap.channel),emissiveMapUv:Gt&&C(w.emissiveMap.channel),metalnessMapUv:se&&C(w.metalnessMap.channel),roughnessMapUv:qe&&C(w.roughnessMap.channel),anisotropyMapUv:lt&&C(w.anisotropyMap.channel),clearcoatMapUv:Pt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:At&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:jt&&C(w.sheenRoughnessMap.channel),specularMapUv:Vt&&C(w.specularMap.channel),specularColorMapUv:Ct&&C(w.specularColorMap.channel),specularIntensityMapUv:oe&&C(w.specularIntensityMap.channel),transmissionMapUv:k&&C(w.transmissionMap.channel),thicknessMapUv:Tt&&C(w.thicknessMap.channel),alphaMapUv:Bt&&C(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Ot||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ut.attributes.uv&&(de||Bt),fog:!!dt,useFog:w.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:bt,skinning:ot.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&Re.getTransfer(w.map.colorSpace)===ze,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Re.getTransfer(w.emissiveMap.colorSpace)===ze,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ia,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||Wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function g(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)D.push(G),D.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(N(D,w),U(D,w),D.push(o.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function N(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function U(w,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),w.push(d.mask)}function R(w){const D=A[w.type];let G;if(D){const nt=Ni[D];G=Sy.clone(nt.uniforms)}else G=w.uniforms;return G}function P(w,D){let G;for(let nt=0,ot=_.length;nt<ot;nt++){const dt=_[nt];if(dt.cacheKey===D){G=dt,++G.usedTimes;break}}return G===void 0&&(G=new Wb(o,D,w,c),_.push(G)),G}function I(w){if(--w.usedTimes===0){const D=_.indexOf(w);_[D]=_[_.length-1],_.pop(),w.destroy()}}function z(w){m.remove(w)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:P,releaseProgram:I,releaseShaderCache:z,programs:_,dispose:X}}function Kb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function Qb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function fv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function hv(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,A,C,y){let g=o[t];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:A,renderOrder:v.renderOrder,z:C,group:y},o[t]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=A,g.renderOrder=v.renderOrder,g.z=C,g.group=y),t++,g}function d(v,x,M,A,C,y){const g=h(v,x,M,A,C,y);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,x,M,A,C,y){const g=h(v,x,M,A,C,y);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||Qb),r.length>1&&r.sort(x||fv),l.length>1&&l.sort(x||fv)}function _(){for(let v=t,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function Jb(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new hv,o.set(r,[h])):l>=c.length?(h=new hv,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function $b(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new ye};break;case"SpotLight":i={position:new Q,direction:new Q,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[t.id]=i,i}}}function tA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let eA=0;function nA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function iA(o){const t=new $b,i=tA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const l=new Q,c=new nn,h=new nn;function d(p){let _=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,A=0,C=0,y=0,g=0,N=0,U=0,R=0,P=0,I=0,z=0;p.sort(nA);for(let w=0,D=p.length;w<D;w++){const G=p[w],nt=G.color,ot=G.intensity,dt=G.distance,ut=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=nt.r*ot,v+=nt.g*ot,x+=nt.b*ot;else if(G.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(G.sh.coefficients[F],ot);z++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=ut,r.directionalShadowMatrix[M]=G.shadow.matrix,N++}r.directional[M]=F,M++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(nt).multiplyScalar(ot),F.distance=dt,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,r.spot[C]=F;const Z=G.shadow;if(G.map&&(r.spotLightMap[P]=G.map,P++,Z.updateMatrices(G),G.castShadow&&I++),r.spotLightMatrix[C]=Z.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=ut,R++}C++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(nt).multiplyScalar(ot),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=F,y++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=ut,r.pointShadowMatrix[A]=G.shadow.matrix,U++}r.point[A]=F,A++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(ot),F.groundColor.copy(G.groundColor).multiplyScalar(ot),r.hemi[g]=F,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==M||X.pointLength!==A||X.spotLength!==C||X.rectAreaLength!==y||X.hemiLength!==g||X.numDirectionalShadows!==N||X.numPointShadows!==U||X.numSpotShadows!==R||X.numSpotMaps!==P||X.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=A,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=R+P-I,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,X.directionalLength=M,X.pointLength=A,X.spotLength=C,X.rectAreaLength=y,X.hemiLength=g,X.numDirectionalShadows=N,X.numPointShadows=U,X.numSpotShadows=R,X.numSpotMaps=P,X.numLightProbes=z,r.version=eA++)}function m(p,_){let v=0,x=0,M=0,A=0,C=0;const y=_.matrixWorldInverse;for(let g=0,N=p.length;g<N;g++){const U=p[g];if(U.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),v++}else if(U.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const R=r.rectArea[A];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),h.identity(),c.copy(U.matrixWorld),c.premultiply(y),h.extractRotation(c),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(h),R.halfHeight.applyMatrix4(h),A++}else if(U.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:r}}function dv(o){const t=new iA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function aA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new dv(o),t.set(l,[d])):c>=h.length?(d=new dv(o),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sA=`uniform sampler2D shadow_pass;
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
}`;function oA(o,t,i){let r=new Fv;const l=new Me,c=new Me,h=new en,d=new Oy({depthPacking:kS}),m=new Py,p={},_=i.maxTextureSize,v={[Va]:kn,[kn]:Va,[ia]:ia},x=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:rA,fragmentShader:sA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new $n;A.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new fi(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mv;let g=this.type;this.render=function(I,z,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const w=o.getRenderTarget(),D=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(Fa),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ot=g!==na&&this.type===na,dt=g===na&&this.type!==na;for(let ut=0,F=I.length;ut<F;ut++){const Z=I[ut],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),c.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/xt.x),l.x=c.x*xt.x,Y.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/xt.y),l.y=c.y*xt.y,Y.mapSize.y=c.y)),Y.map===null||ot===!0||dt===!0){const $=this.type!==na?{minFilter:Ti,magFilter:Ti}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Sr(l.x,l.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const L=Y.getViewportCount();for(let $=0;$<L;$++){const vt=Y.getViewport($);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),nt.viewport(h),Y.updateMatrices(Z,$),r=Y.getFrustum(),R(z,X,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===na&&N(Y,X),Y.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(w,D,G)};function N(I,z){const X=t.update(C);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Sr(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,X,x,C,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,X,M,C,null)}function U(I,z,X,w){let D=null;const G=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)D=G;else if(D=X.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const nt=D.uuid,ot=z.uuid;let dt=p[nt];dt===void 0&&(dt={},p[nt]=dt);let ut=dt[ot];ut===void 0&&(ut=D.clone(),dt[ot]=ut,z.addEventListener("dispose",P)),D=ut}if(D.visible=z.visible,D.wireframe=z.wireframe,w===na?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:v[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,X.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const nt=o.properties.get(D);nt.light=X}return D}function R(I,z,X,w,D){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===na)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);const ot=t.update(I),dt=I.material;if(Array.isArray(dt)){const ut=ot.groups;for(let F=0,Z=ut.length;F<Z;F++){const Y=ut[F],xt=dt[Y.materialIndex];if(xt&&xt.visible){const L=U(I,xt,w,D);I.onBeforeShadow(o,I,z,X,ot,L,Y),o.renderBufferDirect(X,null,ot,L,I,Y),I.onAfterShadow(o,I,z,X,ot,L,Y)}}}else if(dt.visible){const ut=U(I,dt,w,D);I.onBeforeShadow(o,I,z,X,ot,ut,null),o.renderBufferDirect(X,null,ot,ut,I,null),I.onAfterShadow(o,I,z,X,ot,ut,null)}}const nt=I.children;for(let ot=0,dt=nt.length;ot<dt;ot++)R(nt[ot],z,X,w,D)}function P(I){I.target.removeEventListener("dispose",P);for(const X in p){const w=p[X],D=I.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const lA={[Oh]:Ph,[Bh]:Fh,[zh]:Hh,[Es]:Ih,[Ph]:Oh,[Fh]:Bh,[Hh]:zh,[Ih]:Es};function uA(o,t){function i(){let k=!1;const Tt=new en;let Rt=null;const Bt=new en(0,0,0,0);return{setMask:function(Mt){Rt!==Mt&&!k&&(o.colorMask(Mt,Mt,Mt,Mt),Rt=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,_t,Ht,ae,we){we===!0&&(Mt*=ae,_t*=ae,Ht*=ae),Tt.set(Mt,_t,Ht,ae),Bt.equals(Tt)===!1&&(o.clearColor(Mt,_t,Ht,ae),Bt.copy(Tt))},reset:function(){k=!1,Rt=null,Bt.set(-1,0,0,0)}}}function r(){let k=!1,Tt=!1,Rt=null,Bt=null,Mt=null;return{setReversed:function(_t){if(Tt!==_t){const Ht=t.get("EXT_clip_control");_t?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Tt=_t;const ae=Mt;Mt=null,this.setClear(ae)}},getReversed:function(){return Tt},setTest:function(_t){_t?gt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(_t){Rt!==_t&&!k&&(o.depthMask(_t),Rt=_t)},setFunc:function(_t){if(Tt&&(_t=lA[_t]),Bt!==_t){switch(_t){case Oh:o.depthFunc(o.NEVER);break;case Ph:o.depthFunc(o.ALWAYS);break;case Bh:o.depthFunc(o.LESS);break;case Es:o.depthFunc(o.LEQUAL);break;case zh:o.depthFunc(o.EQUAL);break;case Ih:o.depthFunc(o.GEQUAL);break;case Fh:o.depthFunc(o.GREATER);break;case Hh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){Mt!==_t&&(Tt&&(_t=1-_t),o.clearDepth(_t),Mt=_t)},reset:function(){k=!1,Rt=null,Bt=null,Mt=null,Tt=!1}}}function l(){let k=!1,Tt=null,Rt=null,Bt=null,Mt=null,_t=null,Ht=null,ae=null,we=null;return{setTest:function(Te){k||(Te?gt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(Te){Tt!==Te&&!k&&(o.stencilMask(Te),Tt=Te)},setFunc:function(Te,di,un){(Rt!==Te||Bt!==di||Mt!==un)&&(o.stencilFunc(Te,di,un),Rt=Te,Bt=di,Mt=un)},setOp:function(Te,di,un){(_t!==Te||Ht!==di||ae!==un)&&(o.stencilOp(Te,di,un),_t=Te,Ht=di,ae=un)},setLocked:function(Te){k=Te},setClear:function(Te){we!==Te&&(o.clearStencil(Te),we=Te)},reset:function(){k=!1,Tt=null,Rt=null,Bt=null,Mt=null,_t=null,Ht=null,ae=null,we=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},x=new WeakMap,M=[],A=null,C=!1,y=null,g=null,N=null,U=null,R=null,P=null,I=null,z=new ye(0,0,0),X=0,w=!1,D=null,G=null,nt=null,ot=null,dt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),F=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),F=Z>=2);let xt=null,L={};const $=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),St=new en().fromArray($),Dt=new en().fromArray(vt);function Ft(k,Tt,Rt,Bt){const Mt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ht=0;Ht<Rt;Ht++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Tt+Ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return _t}const et={};et[o.TEXTURE_2D]=Ft(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=Ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=Ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=Ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),gt(o.DEPTH_TEST),h.setFunc(Es),ee(!1),Ot(g_),gt(o.CULL_FACE),Le(Fa);function gt(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function bt(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function Zt(k,Tt){return v[k]!==Tt?(o.bindFramebuffer(k,Tt),v[k]=Tt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Tt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Wt(k,Tt){let Rt=M,Bt=!1;if(k){Rt=x.get(Tt),Rt===void 0&&(Rt=[],x.set(Tt,Rt));const Mt=k.textures;if(Rt.length!==Mt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Ht=Mt.length;_t<Ht;_t++)Rt[_t]=o.COLOR_ATTACHMENT0+_t;Rt.length=Mt.length,Bt=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Rt)}function de(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const an={[mr]:o.FUNC_ADD,[mS]:o.FUNC_SUBTRACT,[gS]:o.FUNC_REVERSE_SUBTRACT};an[_S]=o.MIN,an[vS]=o.MAX;const H={[xS]:o.ZERO,[SS]:o.ONE,[yS]:o.SRC_COLOR,[Lh]:o.SRC_ALPHA,[RS]:o.SRC_ALPHA_SATURATE,[bS]:o.DST_COLOR,[ES]:o.DST_ALPHA,[MS]:o.ONE_MINUS_SRC_COLOR,[Nh]:o.ONE_MINUS_SRC_ALPHA,[AS]:o.ONE_MINUS_DST_COLOR,[TS]:o.ONE_MINUS_DST_ALPHA,[CS]:o.CONSTANT_COLOR,[wS]:o.ONE_MINUS_CONSTANT_COLOR,[DS]:o.CONSTANT_ALPHA,[US]:o.ONE_MINUS_CONSTANT_ALPHA};function Le(k,Tt,Rt,Bt,Mt,_t,Ht,ae,we,Te){if(k===Fa){C===!0&&(bt(o.BLEND),C=!1);return}if(C===!1&&(gt(o.BLEND),C=!0),k!==pS){if(k!==y||Te!==w){if((g!==mr||R!==mr)&&(o.blendEquation(o.FUNC_ADD),g=mr,R=mr),Te)switch(k){case ys:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case __:o.blendFunc(o.ONE,o.ONE);break;case v_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case x_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ys:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case __:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case v_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case x_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,U=null,P=null,I=null,z.set(0,0,0),X=0,y=k,w=Te}return}Mt=Mt||Tt,_t=_t||Rt,Ht=Ht||Bt,(Tt!==g||Mt!==R)&&(o.blendEquationSeparate(an[Tt],an[Mt]),g=Tt,R=Mt),(Rt!==N||Bt!==U||_t!==P||Ht!==I)&&(o.blendFuncSeparate(H[Rt],H[Bt],H[_t],H[Ht]),N=Rt,U=Bt,P=_t,I=Ht),(ae.equals(z)===!1||we!==X)&&(o.blendColor(ae.r,ae.g,ae.b,we),z.copy(ae),X=we),y=k,w=!1}function re(k,Tt){k.side===ia?bt(o.CULL_FACE):gt(o.CULL_FACE);let Rt=k.side===kn;Tt&&(Rt=!Rt),ee(Rt),k.blending===ys&&k.transparent===!1?Le(Fa):Le(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Bt=k.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?gt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){D!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),D=k)}function Ot(k){k!==fS?(gt(o.CULL_FACE),k!==G&&(k===g_?o.cullFace(o.BACK):k===hS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),G=k}function Ge(k){k!==nt&&(F&&o.lineWidth(k),nt=k)}function Gt(k,Tt,Rt){k?(gt(o.POLYGON_OFFSET_FILL),(ot!==Tt||dt!==Rt)&&(o.polygonOffset(Tt,Rt),ot=Tt,dt=Rt)):bt(o.POLYGON_OFFSET_FILL)}function se(k){k?gt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function qe(k){k===void 0&&(k=o.TEXTURE0+ut-1),xt!==k&&(o.activeTexture(k),xt=k)}function Ye(k,Tt,Rt){Rt===void 0&&(xt===null?Rt=o.TEXTURE0+ut-1:Rt=xt);let Bt=L[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},L[Rt]=Bt),(Bt.type!==k||Bt.texture!==Tt)&&(xt!==Rt&&(o.activeTexture(Rt),xt=Rt),o.bindTexture(k,Tt||et[k]),Bt.type=k,Bt.texture=Tt)}function O(){const k=L[xt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function jt(k){Dt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Dt.copy(k))}function Vt(k,Tt){let Rt=p.get(Tt);Rt===void 0&&(Rt=new WeakMap,p.set(Tt,Rt));let Bt=Rt.get(k);Bt===void 0&&(Bt=o.getUniformBlockIndex(Tt,k.name),Rt.set(k,Bt))}function Ct(k,Tt){const Bt=p.get(Tt).get(k);m.get(Tt)!==Bt&&(o.uniformBlockBinding(Tt,Bt,k.__bindingPointIndex),m.set(Tt,Bt))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xt=null,L={},v={},x=new WeakMap,M=[],A=null,C=!1,y=null,g=null,N=null,U=null,R=null,P=null,I=null,z=new ye(0,0,0),X=0,w=!1,D=null,G=null,nt=null,ot=null,dt=null,St.set(0,0,o.canvas.width,o.canvas.height),Dt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:gt,disable:bt,bindFramebuffer:Zt,drawBuffers:Wt,useProgram:de,setBlending:Le,setMaterial:re,setFlipSided:ee,setCullFace:Ot,setLineWidth:Ge,setPolygonOffset:Gt,setScissorTest:se,activeTexture:qe,bindTexture:Ye,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:qt,texImage3D:yt,updateUBOMapping:Vt,uniformBlockBinding:Ct,texStorage2D:At,texStorage3D:kt,texSubImage2D:ct,texSubImage3D:pt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Pt,scissor:Ut,viewport:jt,reset:oe}}function cA(o,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Me,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(O,E){return M?new OffscreenCanvas(O,E):Bu("canvas")}function C(O,E,tt){let ct=1;const pt=Ye(O);if((pt.width>tt||pt.height>tt)&&(ct=tt/Math.max(pt.width,pt.height)),ct<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const lt=Math.floor(ct*pt.width),Pt=Math.floor(ct*pt.height);v===void 0&&(v=A(lt,Pt));const At=E?A(lt,Pt):v;return At.width=lt,At.height=Pt,At.getContext("2d").drawImage(O,0,0,lt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+lt+"x"+Pt+")."),At}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function y(O){return O.generateMipmaps}function g(O){o.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(O,E,tt,ct,pt=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let lt=E;if(E===o.RED&&(tt===o.FLOAT&&(lt=o.R32F),tt===o.HALF_FLOAT&&(lt=o.R16F),tt===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(lt=o.R8UI),tt===o.UNSIGNED_SHORT&&(lt=o.R16UI),tt===o.UNSIGNED_INT&&(lt=o.R32UI),tt===o.BYTE&&(lt=o.R8I),tt===o.SHORT&&(lt=o.R16I),tt===o.INT&&(lt=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(lt=o.RG32F),tt===o.HALF_FLOAT&&(lt=o.RG16F),tt===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(lt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(lt=o.RG16UI),tt===o.UNSIGNED_INT&&(lt=o.RG32UI),tt===o.BYTE&&(lt=o.RG8I),tt===o.SHORT&&(lt=o.RG16I),tt===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),tt===o.UNSIGNED_INT&&(lt=o.RGB32UI),tt===o.BYTE&&(lt=o.RGB8I),tt===o.SHORT&&(lt=o.RGB16I),tt===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(lt=o.RGBA32UI),tt===o.BYTE&&(lt=o.RGBA8I),tt===o.SHORT&&(lt=o.RGBA16I),tt===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&(tt===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),E===o.RGBA){const Pt=pt?Ou:Re.getTransfer(ct);tt===o.FLOAT&&(lt=o.RGBA32F),tt===o.HALF_FLOAT&&(lt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(lt=Pt===ze?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function R(O,E){let tt;return O?E===null||E===xr||E===Ho?tt=o.DEPTH24_STENCIL8:E===aa?tt=o.DEPTH32F_STENCIL8:E===Fo&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xr||E===Ho?tt=o.DEPTH_COMPONENT24:E===aa?tt=o.DEPTH_COMPONENT32F:E===Fo&&(tt=o.DEPTH_COMPONENT16),tt}function P(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ti&&O.minFilter!==Mi?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function I(O){const E=O.target;E.removeEventListener("dispose",I),X(E),E.isVideoTexture&&_.delete(E)}function z(O){const E=O.target;E.removeEventListener("dispose",z),D(E)}function X(O){const E=r.get(O);if(E.__webglInit===void 0)return;const tt=O.source,ct=x.get(tt);if(ct){const pt=ct[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&w(O),Object.keys(ct).length===0&&x.delete(tt)}r.remove(O)}function w(O){const E=r.get(O);o.deleteTexture(E.__webglTexture);const tt=O.source,ct=x.get(tt);delete ct[E.__cacheKey],h.memory.textures--}function D(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let pt=0;pt<E.__webglFramebuffer[ct].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[ct][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)o.deleteFramebuffer(E.__webglFramebuffer[ct]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=O.textures;for(let ct=0,pt=tt.length;ct<pt;ct++){const lt=r.get(tt[ct]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(tt[ct])}r.remove(O)}let G=0;function nt(){G=0}function ot(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function dt(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ut(O,E){const tt=r.get(O);if(O.isVideoTexture&&se(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&tt.__version!==O.version){const ct=O.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(tt,O,E);return}}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function F(O,E){const tt=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){et(tt,O,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function Z(O,E){const tt=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){et(tt,O,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function Y(O,E){const tt=r.get(O);if(O.version>0&&tt.__version!==O.version){gt(tt,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const xt={[kh]:o.REPEAT,[_r]:o.CLAMP_TO_EDGE,[Xh]:o.MIRRORED_REPEAT},L={[Ti]:o.NEAREST,[GS]:o.NEAREST_MIPMAP_NEAREST,[iu]:o.NEAREST_MIPMAP_LINEAR,[Mi]:o.LINEAR,[$f]:o.LINEAR_MIPMAP_NEAREST,[vr]:o.LINEAR_MIPMAP_LINEAR},$={[qS]:o.NEVER,[JS]:o.ALWAYS,[YS]:o.LESS,[Av]:o.LEQUAL,[jS]:o.EQUAL,[QS]:o.GEQUAL,[ZS]:o.GREATER,[KS]:o.NOTEQUAL};function vt(O,E){if(E.type===aa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Mi||E.magFilter===$f||E.magFilter===iu||E.magFilter===vr||E.minFilter===Mi||E.minFilter===$f||E.minFilter===iu||E.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,xt[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,L[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ti||E.minFilter!==iu&&E.minFilter!==vr||E.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(O,E){let tt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",I));const ct=E.source;let pt=x.get(ct);pt===void 0&&(pt={},x.set(ct,pt));const lt=dt(E);if(lt!==O.__cacheKey){pt[lt]===void 0&&(pt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),pt[lt].usedTimes++;const Pt=pt[O.__cacheKey];Pt!==void 0&&(pt[O.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(E)),O.__cacheKey=lt,O.__webglTexture=pt[lt].texture}return tt}function Dt(O,E,tt){return Math.floor(Math.floor(O/tt)/E)}function Ft(O,E,tt,ct){const lt=O.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,ct,E.data);else{lt.sort((yt,Ut)=>yt.start-Ut.start);let Pt=0;for(let yt=1;yt<lt.length;yt++){const Ut=lt[Pt],jt=lt[yt],Vt=Ut.start+Ut.count,Ct=Dt(jt.start,E.width,4),oe=Dt(Ut.start,E.width,4);jt.start<=Vt+1&&Ct===oe&&Dt(jt.start+jt.count-1,E.width,4)===Ct?Ut.count=Math.max(Ut.count,jt.start+jt.count-Ut.start):(++Pt,lt[Pt]=jt)}lt.length=Pt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,Ut=lt.length;yt<Ut;yt++){const jt=lt[yt],Vt=Math.floor(jt.start/4),Ct=Math.ceil(jt.count/4),oe=Vt%E.width,k=Math.floor(Vt/E.width),Tt=Ct,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,oe,k,Tt,Rt,tt,ct,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function et(O,E,tt){let ct=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=o.TEXTURE_3D);const pt=St(O,E),lt=E.source;i.bindTexture(ct,O.__webglTexture,o.TEXTURE0+tt);const Pt=r.get(lt);if(lt.version!==Pt.__version||pt===!0){i.activeTexture(o.TEXTURE0+tt);const At=Re.getPrimaries(Re.workingColorSpace),kt=E.colorSpace===Ia?null:Re.getPrimaries(E.colorSpace),qt=E.colorSpace===Ia||At===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let yt=C(E.image,!1,l.maxTextureSize);yt=qe(E,yt);const Ut=c.convert(E.format,E.colorSpace),jt=c.convert(E.type);let Vt=U(E.internalFormat,Ut,jt,E.colorSpace,E.isVideoTexture);vt(ct,E);let Ct;const oe=E.mipmaps,k=E.isVideoTexture!==!0,Tt=Pt.__version===void 0||pt===!0,Rt=lt.dataReady,Bt=P(E,yt);if(E.isDepthTexture)Vt=R(E.format===Vo,E.type),Tt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Vt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,yt.width,yt.height,0,Ut,jt,null));else if(E.isDataTexture)if(oe.length>0){k&&Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,oe[0].width,oe[0].height);for(let Mt=0,_t=oe.length;Mt<_t;Mt++)Ct=oe[Mt],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ct.width,Ct.height,Ut,jt,Ct.data):i.texImage2D(o.TEXTURE_2D,Mt,Vt,Ct.width,Ct.height,0,Ut,jt,Ct.data);E.generateMipmaps=!1}else k?(Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height),Rt&&Ft(E,yt,Ut,jt)):i.texImage2D(o.TEXTURE_2D,0,Vt,yt.width,yt.height,0,Ut,jt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,oe[0].width,oe[0].height,yt.depth);for(let Mt=0,_t=oe.length;Mt<_t;Mt++)if(Ct=oe[Mt],E.format!==Ei)if(Ut!==null)if(k){if(Rt)if(E.layerUpdates.size>0){const Ht=k_(Ct.width,Ct.height,E.format,E.type);for(const ae of E.layerUpdates){const we=Ct.data.subarray(ae*Ht/Ct.data.BYTES_PER_ELEMENT,(ae+1)*Ht/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ae,Ct.width,Ct.height,1,Ut,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ct.width,Ct.height,yt.depth,Ut,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Vt,Ct.width,Ct.height,yt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ct.width,Ct.height,yt.depth,Ut,jt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Vt,Ct.width,Ct.height,yt.depth,0,Ut,jt,Ct.data)}else{k&&Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,oe[0].width,oe[0].height);for(let Mt=0,_t=oe.length;Mt<_t;Mt++)Ct=oe[Mt],E.format!==Ei?Ut!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ct.width,Ct.height,Ut,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Vt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Rt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ct.width,Ct.height,Ut,jt,Ct.data):i.texImage2D(o.TEXTURE_2D,Mt,Vt,Ct.width,Ct.height,0,Ut,jt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,yt.width,yt.height,yt.depth),Rt)if(E.layerUpdates.size>0){const Mt=k_(yt.width,yt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ht=yt.data.subarray(_t*Mt/yt.data.BYTES_PER_ELEMENT,(_t+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,Ut,jt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Ut,jt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,yt.width,yt.height,yt.depth,0,Ut,jt,yt.data);else if(E.isData3DTexture)k?(Tt&&i.texStorage3D(o.TEXTURE_3D,Bt,Vt,yt.width,yt.height,yt.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Ut,jt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,yt.width,yt.height,yt.depth,0,Ut,jt,yt.data);else if(E.isFramebufferTexture){if(Tt)if(k)i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height);else{let Mt=yt.width,_t=yt.height;for(let Ht=0;Ht<Bt;Ht++)i.texImage2D(o.TEXTURE_2D,Ht,Vt,Mt,_t,0,Ut,jt,null),Mt>>=1,_t>>=1}}else if(oe.length>0){if(k&&Tt){const Mt=Ye(oe[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height)}for(let Mt=0,_t=oe.length;Mt<_t;Mt++)Ct=oe[Mt],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut,jt,Ct):i.texImage2D(o.TEXTURE_2D,Mt,Vt,Ut,jt,Ct);E.generateMipmaps=!1}else if(k){if(Tt){const Mt=Ye(yt);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,jt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Ut,jt,yt);y(E)&&g(ct),Pt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function gt(O,E,tt){if(E.image.length!==6)return;const ct=St(O,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+tt);const lt=r.get(pt);if(pt.version!==lt.__version||ct===!0){i.activeTexture(o.TEXTURE0+tt);const Pt=Re.getPrimaries(Re.workingColorSpace),At=E.colorSpace===Ia?null:Re.getPrimaries(E.colorSpace),kt=E.colorSpace===Ia||Pt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let _t=0;_t<6;_t++)!qt&&!yt?Ut[_t]=C(E.image[_t],!0,l.maxCubemapSize):Ut[_t]=yt?E.image[_t].image:E.image[_t],Ut[_t]=qe(E,Ut[_t]);const jt=Ut[0],Vt=c.convert(E.format,E.colorSpace),Ct=c.convert(E.type),oe=U(E.internalFormat,Vt,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Tt=lt.__version===void 0||ct===!0,Rt=pt.dataReady;let Bt=P(E,jt);vt(o.TEXTURE_CUBE_MAP,E);let Mt;if(qt){k&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,oe,jt.width,jt.height);for(let _t=0;_t<6;_t++){Mt=Ut[_t].mipmaps;for(let Ht=0;Ht<Mt.length;Ht++){const ae=Mt[Ht];E.format!==Ei?Vt!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,ae.width,ae.height,Vt,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,ae.width,ae.height,Vt,Ct,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,oe,ae.width,ae.height,0,Vt,Ct,ae.data)}}}else{if(Mt=E.mipmaps,k&&Tt){Mt.length>0&&Bt++;const _t=Ye(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,oe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ut[_t].width,Ut[_t].height,Vt,Ct,Ut[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Ut[_t].width,Ut[_t].height,0,Vt,Ct,Ut[_t].data);for(let Ht=0;Ht<Mt.length;Ht++){const we=Mt[Ht].image[_t].image;k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,we.width,we.height,Vt,Ct,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,oe,we.width,we.height,0,Vt,Ct,we.data)}}else{k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,Ct,Ut[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Vt,Ct,Ut[_t]);for(let Ht=0;Ht<Mt.length;Ht++){const ae=Mt[Ht];k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,Vt,Ct,ae.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,oe,Vt,Ct,ae.image[_t])}}}y(E)&&g(o.TEXTURE_CUBE_MAP),lt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function bt(O,E,tt,ct,pt,lt){const Pt=c.convert(tt.format,tt.colorSpace),At=c.convert(tt.type),kt=U(tt.internalFormat,Pt,At,tt.colorSpace),qt=r.get(E),yt=r.get(tt);if(yt.__renderTarget=E,!qt.__hasExternalTextures){const Ut=Math.max(1,E.width>>lt),jt=Math.max(1,E.height>>lt);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,lt,kt,Ut,jt,E.depth,0,Pt,At,null):i.texImage2D(pt,lt,kt,Ut,jt,0,Pt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,pt,yt.__webglTexture,0,Ge(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,pt,yt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(O,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const ct=E.depthTexture,pt=ct&&ct.isDepthTexture?ct.type:null,lt=R(E.stencilBuffer,pt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=Ge(E);Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,lt,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,O)}else{const ct=E.textures;for(let pt=0;pt<ct.length;pt++){const lt=ct[pt],Pt=c.convert(lt.format,lt.colorSpace),At=c.convert(lt.type),kt=U(lt.internalFormat,Pt,At,lt.colorSpace),qt=Ge(E);tt&&Gt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,kt,E.width,E.height):Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,kt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,kt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut(E.depthTexture,0);const pt=ct.__webglTexture,lt=Ge(E);if(E.depthTexture.format===Go)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0);else if(E.depthTexture.format===Vo)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function de(O){const E=r.get(O),tt=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ct=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",pt)};ct.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ct}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ct=O.texture.mipmaps;ct&&ct.length>0?Wt(E.__webglFramebuffer[0],O):Wt(E.__webglFramebuffer,O)}else if(tt){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=o.createRenderbuffer(),Zt(E.__webglDepthbuffer[ct],O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,lt)}}else{const ct=O.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Zt(E.__webglDepthbuffer,O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function an(O,E,tt){const ct=r.get(O);E!==void 0&&bt(ct.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&de(O)}function H(O){const E=O.texture,tt=r.get(O),ct=r.get(E);O.addEventListener("dispose",z);const pt=O.textures,lt=O.isWebGLCubeRenderTarget===!0,Pt=pt.length>1;if(Pt||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=E.version,h.memory.textures++),lt){tt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[At]=[];for(let kt=0;kt<E.mipmaps.length;kt++)tt.__webglFramebuffer[At][kt]=o.createFramebuffer()}else tt.__webglFramebuffer[At]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)tt.__webglFramebuffer[At]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let At=0,kt=pt.length;At<kt;At++){const qt=r.get(pt[At]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Gt(O)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let At=0;At<pt.length;At++){const kt=pt[At];tt.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[At]);const qt=c.convert(kt.format,kt.colorSpace),yt=c.convert(kt.type),Ut=U(kt.internalFormat,qt,yt,kt.colorSpace,O.isXRRenderTarget===!0),jt=Ge(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Ut,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,tt.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Zt(tt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)bt(tt.__webglFramebuffer[At][kt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,kt);else bt(tt.__webglFramebuffer[At],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);y(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let At=0,kt=pt.length;At<kt;At++){const qt=pt[At],yt=r.get(qt);let Ut=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,yt.__webglTexture),vt(Ut,qt),bt(tt.__webglFramebuffer,O,qt,o.COLOR_ATTACHMENT0+At,Ut,0),y(qt)&&g(Ut)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(At=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,ct.__webglTexture),vt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)bt(tt.__webglFramebuffer[kt],O,E,o.COLOR_ATTACHMENT0,At,kt);else bt(tt.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,At,0);y(E)&&g(At),i.unbindTexture()}O.depthBuffer&&de(O)}function Le(O){const E=O.textures;for(let tt=0,ct=E.length;tt<ct;tt++){const pt=E[tt];if(y(pt)){const lt=N(O),Pt=r.get(pt).__webglTexture;i.bindTexture(lt,Pt),g(lt),i.unbindTexture()}}}const re=[],ee=[];function Ot(O){if(O.samples>0){if(Gt(O)===!1){const E=O.textures,tt=O.width,ct=O.height;let pt=o.COLOR_BUFFER_BIT;const lt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(O),At=E.length>1;if(At)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const kt=O.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const yt=r.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,tt,ct,0,0,tt,ct,pt,o.NEAREST),m===!0&&(re.length=0,ee.length=0,re.push(o.COLOR_ATTACHMENT0+qt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(re.push(lt),ee.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const yt=r.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ge(O){return Math.min(l.maxSamples,O.samples)}function Gt(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(O){const E=h.render.frame;_.get(O)!==E&&(_.set(O,E),O.update())}function qe(O,E){const tt=O.colorSpace,ct=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||tt!==As&&tt!==Ia&&(Re.getTransfer(tt)===ze?(ct!==Ei||pt!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Ye(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=nt,this.setTexture2D=ut,this.setTexture2DArray=F,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=an,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Gt}function fA(o,t){function i(r,l=Ia){let c;const h=Re.getTransfer(l);if(r===sa)return o.UNSIGNED_BYTE;if(r===Ad)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Rd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Sv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===yv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===vv)return o.BYTE;if(r===xv)return o.SHORT;if(r===Fo)return o.UNSIGNED_SHORT;if(r===bd)return o.INT;if(r===xr)return o.UNSIGNED_INT;if(r===aa)return o.FLOAT;if(r===Xo)return o.HALF_FLOAT;if(r===Mv)return o.ALPHA;if(r===Ev)return o.RGB;if(r===Ei)return o.RGBA;if(r===Go)return o.DEPTH_COMPONENT;if(r===Vo)return o.DEPTH_STENCIL;if(r===Tv)return o.RED;if(r===Cd)return o.RED_INTEGER;if(r===bv)return o.RG;if(r===wd)return o.RG_INTEGER;if(r===Dd)return o.RGBA_INTEGER;if(r===wu||r===Du||r===Uu||r===Lu)if(h===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===wu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===wu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Du)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wh||r===qh||r===Yh||r===jh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zh||r===Kh||r===Qh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Zh||r===Kh)return h===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Qh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===ud||r===cd||r===fd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Jh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$h)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===td)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ed)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===id)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ad)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===od)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ld)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ud)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hd||r===dd||r===pd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===hd)return h===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===md||r===gd||r===_d||r===vd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===md)return c.COMPRESSED_RED_RGTC1_EXT;if(r===gd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_d)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ho?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const hA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dA=`
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

}`;class pA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Gv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ka({vertexShader:hA,fragmentShader:dA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fi(new ku(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mA extends Cs{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,x=null,M=null,A=null;const C=typeof XRWebGLBinding<"u",y=new pA,g={},N=i.getContextAttributes();let U=null,R=null;const P=[],I=[],z=new Me;let X=null;const w=new yi;w.viewport=new en;const D=new yi;D.viewport=new en;const G=[w,D],nt=new By;let ot=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let gt=P[et];return gt===void 0&&(gt=new Mh,P[et]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(et){let gt=P[et];return gt===void 0&&(gt=new Mh,P[et]=gt),gt.getGripSpace()},this.getHand=function(et){let gt=P[et];return gt===void 0&&(gt=new Mh,P[et]=gt),gt.getHandSpace()};function ut(et){const gt=I.indexOf(et.inputSource);if(gt===-1)return;const bt=P[gt];bt!==void 0&&(bt.update(et.inputSource,et.frame,p||h),bt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",Z);for(let et=0;et<P.length;et++){const gt=I[et];gt!==null&&(I[et]=null,P[et].disconnect(gt))}ot=null,dt=null,y.reset();for(const et in g)delete g[et];t.setRenderTarget(U),M=null,x=null,v=null,l=null,R=null,Ft.stop(),r.isPresenting=!1,t.setPixelRatio(X),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",F),l.addEventListener("inputsourceschange",Z),N.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Zt=null,Wt=null;N.depth&&(Wt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=N.stencil?Vo:Go,Zt=N.stencil?Ho:xr);const de={colorFormat:i.RGBA8,depthFormat:Wt,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(de),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),R=new Sr(x.textureWidth,x.textureHeight,{format:Ei,type:sa,depthTexture:new Hv(x.textureWidth,x.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const bt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Sr(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:sa,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(et){for(let gt=0;gt<et.removed.length;gt++){const bt=et.removed[gt],Zt=I.indexOf(bt);Zt>=0&&(I[Zt]=null,P[Zt].disconnect(bt))}for(let gt=0;gt<et.added.length;gt++){const bt=et.added[gt];let Zt=I.indexOf(bt);if(Zt===-1){for(let de=0;de<P.length;de++)if(de>=I.length){I.push(bt),Zt=de;break}else if(I[de]===null){I[de]=bt,Zt=de;break}if(Zt===-1)break}const Wt=P[Zt];Wt&&Wt.connect(bt)}}const Y=new Q,xt=new Q;function L(et,gt,bt){Y.setFromMatrixPosition(gt.matrixWorld),xt.setFromMatrixPosition(bt.matrixWorld);const Zt=Y.distanceTo(xt),Wt=gt.projectionMatrix.elements,de=bt.projectionMatrix.elements,an=Wt[14]/(Wt[10]-1),H=Wt[14]/(Wt[10]+1),Le=(Wt[9]+1)/Wt[5],re=(Wt[9]-1)/Wt[5],ee=(Wt[8]-1)/Wt[0],Ot=(de[8]+1)/de[0],Ge=an*ee,Gt=an*Ot,se=Zt/(-ee+Ot),qe=se*-ee;if(gt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(qe),et.translateZ(se),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Wt[10]===-1)et.projectionMatrix.copy(gt.projectionMatrix),et.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Ye=an+se,O=H+se,E=Ge-qe,tt=Gt+(Zt-qe),ct=Le*H/O*Ye,pt=re*H/O*Ye;et.projectionMatrix.makePerspective(E,tt,ct,pt,Ye,O),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function $(et,gt){gt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(gt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let gt=et.near,bt=et.far;y.texture!==null&&(y.depthNear>0&&(gt=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),nt.near=D.near=w.near=gt,nt.far=D.far=w.far=bt,(ot!==nt.near||dt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ot=nt.near,dt=nt.far),nt.layers.mask=et.layers.mask|6,w.layers.mask=nt.layers.mask&3,D.layers.mask=nt.layers.mask&5;const Zt=et.parent,Wt=nt.cameras;$(nt,Zt);for(let de=0;de<Wt.length;de++)$(Wt[de],Zt);Wt.length===2?L(nt,w,D):nt.projectionMatrix.copy(w.projectionMatrix),vt(et,nt,Zt)};function vt(et,gt,bt){bt===null?et.matrix.copy(gt.matrixWorld):(et.matrix.copy(bt.matrixWorld),et.matrix.invert(),et.matrix.multiply(gt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(gt.projectionMatrix),et.projectionMatrixInverse.copy(gt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Sd*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(nt)},this.getCameraTexture=function(et){return g[et]};let St=null;function Dt(et,gt){if(_=gt.getViewerPose(p||h),A=gt,_!==null){const bt=_.views;M!==null&&(t.setRenderTargetFramebuffer(R,M.framebuffer),t.setRenderTarget(R));let Zt=!1;bt.length!==nt.cameras.length&&(nt.cameras.length=0,Zt=!0);for(let H=0;H<bt.length;H++){const Le=bt[H];let re=null;if(M!==null)re=M.getViewport(Le);else{const Ot=v.getViewSubImage(x,Le);re=Ot.viewport,H===0&&(t.setRenderTargetTextures(R,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(R))}let ee=G[H];ee===void 0&&(ee=new yi,ee.layers.enable(H),ee.viewport=new en,G[H]=ee),ee.matrix.fromArray(Le.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Le.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(re.x,re.y,re.width,re.height),H===0&&(nt.matrix.copy(ee.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Zt===!0&&nt.cameras.push(ee)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const H=v.getDepthInformation(bt[0]);H&&H.isValid&&H.texture&&y.init(H,l.renderState)}if(Wt&&Wt.includes("camera-access")&&C){t.state.unbindTexture(),v=r.getBinding();for(let H=0;H<bt.length;H++){const Le=bt[H].camera;if(Le){let re=g[Le];re||(re=new Gv,g[Le]=re);const ee=v.getCameraImage(Le);re.sourceTexture=ee}}}}for(let bt=0;bt<P.length;bt++){const Zt=I[bt],Wt=P[bt];Zt!==null&&Wt!==void 0&&Wt.update(Zt,gt,p||h)}St&&St(et,gt),gt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:gt}),A=null}const Ft=new kv;Ft.setAnimationLoop(Dt),this.setAnimationLoop=function(et){St=et},this.dispose=function(){}}}const hr=new oa,gA=new nn;function _A(o,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Ov(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,N,U,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),v(y,g)):g.isMeshPhongMaterial?(c(y,g),_(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,R)):g.isMeshMatcapMaterial?(c(y,g),A(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),C(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,N,U):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===kn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===kn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const N=t.get(g),U=N.envMap,R=N.envMapRotation;U&&(y.envMap.value=U,hr.copy(R),hr.x*=-1,hr.y*=-1,hr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),y.envMapRotation.value.setFromMatrix4(gA.makeRotationFromEuler(hr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,N,U){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*N,y.scale.value=U*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,N){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,g){g.matcap&&(y.matcap.value=g.matcap)}function C(y,g){const N=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function vA(o,t,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const R=U.program;r.uniformBlockBinding(N,R)}function p(N,U){let R=l[N.id];R===void 0&&(A(N),R=_(N),l[N.id]=R,N.addEventListener("dispose",y));const P=U.program;r.updateUBOMapping(N,P);const I=t.render.frame;c[N.id]!==I&&(x(N),c[N.id]=I)}function _(N){const U=v();N.__bindingPointIndex=U;const R=o.createBuffer(),P=N.__size,I=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,P,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,R),R}function v(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const U=l[N.id],R=N.uniforms,P=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let I=0,z=R.length;I<z;I++){const X=Array.isArray(R[I])?R[I]:[R[I]];for(let w=0,D=X.length;w<D;w++){const G=X[w];if(M(G,I,w,P)===!0){const nt=G.__offset,ot=Array.isArray(G.value)?G.value:[G.value];let dt=0;for(let ut=0;ut<ot.length;ut++){const F=ot[ut],Z=C(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,nt+dt,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,dt),dt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,U,R,P){const I=N.value,z=U+"_"+R;if(P[z]===void 0)return typeof I=="number"||typeof I=="boolean"?P[z]=I:P[z]=I.clone(),!0;{const X=P[z];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return P[z]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function A(N){const U=N.uniforms;let R=0;const P=16;for(let z=0,X=U.length;z<X;z++){const w=Array.isArray(U[z])?U[z]:[U[z]];for(let D=0,G=w.length;D<G;D++){const nt=w[D],ot=Array.isArray(nt.value)?nt.value:[nt.value];for(let dt=0,ut=ot.length;dt<ut;dt++){const F=ot[dt],Z=C(F),Y=R%P,xt=Y%Z.boundary,L=Y+xt;R+=xt,L!==0&&P-L<Z.storage&&(R+=P-L),nt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=R,R+=Z.storage}}}const I=R%P;return I>0&&(R+=P-I),N.__size=R,N.__cache={},this}function C(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function y(N){const U=N.target;U.removeEventListener("dispose",y);const R=h.indexOf(U.__bindingPointIndex);h.splice(R,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function g(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class xA{constructor(t={}){const{canvas:i=ty(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),C=new Int32Array(4);let y=null,g=null;const N=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1;this._outputColorSpace=ui;let I=0,z=0,X=null,w=-1,D=null;const G=new en,nt=new en;let ot=null;const dt=new ye(0);let ut=0,F=i.width,Z=i.height,Y=1,xt=null,L=null;const $=new en(0,0,F,Z),vt=new en(0,0,F,Z);let St=!1;const Dt=new Fv;let Ft=!1,et=!1;const gt=new nn,bt=new Q,Zt=new en,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function an(){return X===null?Y:1}let H=r;function Le(b,W){return i.getContext(b,W)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Td}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),H===null){const W="webgl2";if(H=Le(W,b),H===null)throw Le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let re,ee,Ot,Ge,Gt,se,qe,Ye,O,E,tt,ct,pt,lt,Pt,At,kt,qt,yt,Ut,jt,Vt,Ct,oe;function k(){re=new wT(H),re.init(),Vt=new fA(H,re),ee=new MT(H,re,t,Vt),Ot=new uA(H,re),ee.reversedDepthBuffer&&x&&Ot.buffers.depth.setReversed(!0),Ge=new LT(H),Gt=new Kb,se=new cA(H,re,Ot,Gt,ee,Vt,Ge),qe=new TT(R),Ye=new CT(R),O=new Iy(H),Ct=new ST(H,O),E=new DT(H,O,Ge,Ct),tt=new OT(H,E,O,Ge),yt=new NT(H,ee,se),At=new ET(Gt),ct=new Zb(R,qe,Ye,re,ee,Ct,At),pt=new _A(R,Gt),lt=new Jb,Pt=new aA(re),qt=new xT(R,qe,Ye,Ot,tt,M,m),kt=new oA(R,tt,ee),oe=new vA(H,Ge,ee,Ot),Ut=new yT(H,re,Ge),jt=new UT(H,re,Ge),Ge.programs=ct.programs,R.capabilities=ee,R.extensions=re,R.properties=Gt,R.renderLists=lt,R.shadowMap=kt,R.state=Ot,R.info=Ge}k();const Tt=new mA(R,H);this.xr=Tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(F,Z,!1))},this.getSize=function(b){return b.set(F,Z)},this.setSize=function(b,W,rt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,Z=W,i.width=Math.floor(b*Y),i.height=Math.floor(W*Y),rt===!0&&(i.style.width=b+"px",i.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(F*Y,Z*Y).floor()},this.setDrawingBufferSize=function(b,W,rt){F=b,Z=W,Y=rt,i.width=Math.floor(b*rt),i.height=Math.floor(W*rt),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,W,rt,st){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,W,rt,st),Ot.viewport(G.copy($).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(vt)},this.setScissor=function(b,W,rt,st){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,W,rt,st),Ot.scissor(nt.copy(vt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(b){Ot.setScissorTest(St=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){L=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,rt=!0){let st=0;if(b){let j=!1;if(X!==null){const Et=X.texture.format;j=Et===Dd||Et===wd||Et===Cd}if(j){const Et=X.texture.type,wt=Et===sa||Et===xr||Et===Fo||Et===Ho||Et===Ad||Et===Rd,zt=qt.getClearColor(),Lt=qt.getClearAlpha(),Qt=zt.r,$t=zt.g,Xt=zt.b;wt?(A[0]=Qt,A[1]=$t,A[2]=Xt,A[3]=Lt,H.clearBufferuiv(H.COLOR,0,A)):(C[0]=Qt,C[1]=$t,C[2]=Xt,C[3]=Lt,H.clearBufferiv(H.COLOR,0,C))}else st|=H.COLOR_BUFFER_BIT}W&&(st|=H.DEPTH_BUFFER_BIT),rt&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),qt.dispose(),lt.dispose(),Pt.dispose(),Gt.dispose(),qe.dispose(),Ye.dispose(),tt.dispose(),Ct.dispose(),oe.dispose(),ct.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",un),Tt.removeEventListener("sessionend",cn),Ze.stop()};function Rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Ge.autoReset,W=kt.enabled,rt=kt.autoUpdate,st=kt.needsUpdate,j=kt.type;k(),Ge.autoReset=b,kt.enabled=W,kt.autoUpdate=rt,kt.needsUpdate=st,kt.type=j}function Mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _t(b){const W=b.target;W.removeEventListener("dispose",_t),Ht(W)}function Ht(b){ae(b),Gt.remove(b)}function ae(b){const W=Gt.get(b).programs;W!==void 0&&(W.forEach(function(rt){ct.releaseProgram(rt)}),b.isShaderMaterial&&ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,rt,st,j,Et){W===null&&(W=Wt);const wt=j.isMesh&&j.matrixWorld.determinant()<0,zt=la(b,W,rt,st,j);Ot.setMaterial(st,wt);let Lt=rt.index,Qt=1;if(st.wireframe===!0){if(Lt=E.getWireframeAttribute(rt),Lt===void 0)return;Qt=2}const $t=rt.drawRange,Xt=rt.attributes.position;let ce=$t.start*Qt,be=($t.start+$t.count)*Qt;Et!==null&&(ce=Math.max(ce,Et.start*Qt),be=Math.min(be,(Et.start+Et.count)*Qt)),Lt!==null?(ce=Math.max(ce,0),be=Math.min(be,Lt.count)):Xt!=null&&(ce=Math.max(ce,0),be=Math.min(be,Xt.count));const Xe=be-ce;if(Xe<0||Xe===1/0)return;Ct.setup(j,st,zt,rt,Lt);let Ne,fe=Ut;if(Lt!==null&&(Ne=O.get(Lt),fe=jt,fe.setIndex(Ne)),j.isMesh)st.wireframe===!0?(Ot.setLineWidth(st.wireframeLinewidth*an()),fe.setMode(H.LINES)):fe.setMode(H.TRIANGLES);else if(j.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),Ot.setLineWidth(Kt*an()),j.isLineSegments?fe.setMode(H.LINES):j.isLineLoop?fe.setMode(H.LINE_LOOP):fe.setMode(H.LINE_STRIP)}else j.isPoints?fe.setMode(H.POINTS):j.isSprite&&fe.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ko("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))fe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,ke=j._multiDrawCounts,ge=j._multiDrawCount,Tn=Lt?O.get(Lt).bytesPerElement:1,pi=Gt.get(st).currentProgram.getUniforms();for(let Un=0;Un<ge;Un++)pi.setValue(H,"_gl_DrawID",Un),fe.render(Kt[Un]/Tn,ke[Un])}else if(j.isInstancedMesh)fe.renderInstances(ce,Xe,j.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,ke=Math.min(rt.instanceCount,Kt);fe.renderInstances(ce,Xe,ke)}else fe.render(ce,Xe)};function we(b,W,rt){b.transparent===!0&&b.side===ia&&b.forceSinglePass===!1?(b.side=kn,b.needsUpdate=!0,Ri(b,W,rt),b.side=Va,b.needsUpdate=!0,Ri(b,W,rt),b.side=ia):Ri(b,W,rt)}this.compile=function(b,W,rt=null){rt===null&&(rt=b),g=Pt.get(rt),g.init(W),U.push(g),rt.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),b!==rt&&b.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const st=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Et=j.material;if(Et)if(Array.isArray(Et))for(let wt=0;wt<Et.length;wt++){const zt=Et[wt];we(zt,rt,j),st.add(zt)}else we(Et,rt,j),st.add(Et)}),g=U.pop(),st},this.compileAsync=function(b,W,rt=null){const st=this.compile(b,W,rt);return new Promise(j=>{function Et(){if(st.forEach(function(wt){Gt.get(wt).currentProgram.isReady()&&st.delete(wt)}),st.size===0){j(b);return}setTimeout(Et,10)}re.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Te=null;function di(b){Te&&Te(b)}function un(){Ze.stop()}function cn(){Ze.start()}const Ze=new kv;Ze.setAnimationLoop(di),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(b){Te=b,Tt.setAnimationLoop(b),b===null?Ze.stop():Ze.start()},Tt.addEventListener("sessionstart",un),Tt.addEventListener("sessionend",cn),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(W),W=Tt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,W,X),g=Pt.get(b,U.length),g.init(W),U.push(g),gt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Dt.setFromProjectionMatrix(gt,Pi,W.reversedDepth),et=this.localClippingEnabled,Ft=At.init(this.clippingPlanes,et),y=lt.get(b,N.length),y.init(),N.push(y),Tt.enabled===!0&&Tt.isPresenting===!0){const Et=R.xr.getDepthSensingMesh();Et!==null&&Ai(Et,W,-1/0,R.sortObjects)}Ai(b,W,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(xt,L),de=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,de&&qt.addToRenderList(y,b),this.info.render.frame++,Ft===!0&&At.beginShadows();const rt=g.state.shadowsArray;kt.render(rt,b,W),Ft===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,j=y.transmissive;if(g.setupLights(),W.isArrayCamera){const Et=W.cameras;if(j.length>0)for(let wt=0,zt=Et.length;wt<zt;wt++){const Lt=Et[wt];jo(st,j,b,Lt)}de&&qt.render(b);for(let wt=0,zt=Et.length;wt<zt;wt++){const Lt=Et[wt];yr(y,b,Lt,Lt.viewport)}}else j.length>0&&jo(st,j,b,W),de&&qt.render(b),yr(y,b,W);X!==null&&z===0&&(se.updateMultisampleRenderTarget(X),se.updateRenderTargetMipmap(X)),b.isScene===!0&&b.onAfterRender(R,b,W),Ct.resetDefaultState(),w=-1,D=null,U.pop(),U.length>0?(g=U[U.length-1],Ft===!0&&At.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Ai(b,W,rt,st){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)rt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Dt.intersectsSprite(b)){st&&Zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);const wt=tt.update(b),zt=b.material;zt.visible&&y.push(b,wt,zt,rt,Zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Dt.intersectsObject(b))){const wt=tt.update(b),zt=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Zt.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Zt.copy(wt.boundingSphere.center)),Zt.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(zt)){const Lt=wt.groups;for(let Qt=0,$t=Lt.length;Qt<$t;Qt++){const Xt=Lt[Qt],ce=zt[Xt.materialIndex];ce&&ce.visible&&y.push(b,wt,ce,rt,Zt.z,Xt)}}else zt.visible&&y.push(b,wt,zt,rt,Zt.z,null)}}const Et=b.children;for(let wt=0,zt=Et.length;wt<zt;wt++)Ai(Et[wt],W,rt,st)}function yr(b,W,rt,st){const j=b.opaque,Et=b.transmissive,wt=b.transparent;g.setupLightsView(rt),Ft===!0&&At.setGlobalState(R.clippingPlanes,rt),st&&Ot.viewport(G.copy(st)),j.length>0&&Mr(j,W,rt),Et.length>0&&Mr(Et,W,rt),wt.length>0&&Mr(wt,W,rt),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function jo(b,W,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new Sr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Xo:sa,minFilter:vr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Et=g.state.transmissionRenderTarget[st.id],wt=st.viewport||G;Et.setSize(wt.z*R.transmissionResolutionScale,wt.w*R.transmissionResolutionScale);const zt=R.getRenderTarget(),Lt=R.getActiveCubeFace(),Qt=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(dt),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),de&&qt.render(rt);const $t=R.toneMapping;R.toneMapping=Ha;const Xt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),Ft===!0&&At.setGlobalState(R.clippingPlanes,st),Mr(b,rt,st),se.updateMultisampleRenderTarget(Et),se.updateRenderTargetMipmap(Et),re.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let be=0,Xe=W.length;be<Xe;be++){const Ne=W[be],fe=Ne.object,Kt=Ne.geometry,ke=Ne.material,ge=Ne.group;if(ke.side===ia&&fe.layers.test(st.layers)){const Tn=ke.side;ke.side=kn,ke.needsUpdate=!0,Us(fe,rt,st,Kt,ke,ge),ke.side=Tn,ke.needsUpdate=!0,ce=!0}}ce===!0&&(se.updateMultisampleRenderTarget(Et),se.updateRenderTargetMipmap(Et))}R.setRenderTarget(zt,Lt,Qt),R.setClearColor(dt,ut),Xt!==void 0&&(st.viewport=Xt),R.toneMapping=$t}function Mr(b,W,rt){const st=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Et=b.length;j<Et;j++){const wt=b[j],zt=wt.object,Lt=wt.geometry,Qt=wt.group;let $t=wt.material;$t.allowOverride===!0&&st!==null&&($t=st),zt.layers.test(rt.layers)&&Us(zt,W,rt,Lt,$t,Qt)}}function Us(b,W,rt,st,j,Et){b.onBeforeRender(R,W,rt,st,j,Et),b.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(R,W,rt,st,b,Et),j.transparent===!0&&j.side===ia&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,R.renderBufferDirect(rt,W,st,j,b,Et),j.side=Va,j.needsUpdate=!0,R.renderBufferDirect(rt,W,st,j,b,Et),j.side=ia):R.renderBufferDirect(rt,W,st,j,b,Et),b.onAfterRender(R,W,rt,st,j,Et)}function Ri(b,W,rt){W.isScene!==!0&&(W=Wt);const st=Gt.get(b),j=g.state.lights,Et=g.state.shadowsArray,wt=j.state.version,zt=ct.getParameters(b,j.state,Et,W,rt),Lt=ct.getProgramCacheKey(zt);let Qt=st.programs;st.environment=b.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(b.isMeshStandardMaterial?Ye:qe).get(b.envMap||st.environment),st.envMapRotation=st.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Qt===void 0&&(b.addEventListener("dispose",_t),Qt=new Map,st.programs=Qt);let $t=Qt.get(Lt);if($t!==void 0){if(st.currentProgram===$t&&st.lightsStateVersion===wt)return Bi(b,zt),$t}else zt.uniforms=ct.getUniforms(b),b.onBeforeCompile(zt,R),$t=ct.acquireProgram(zt,Lt),Qt.set(Lt,$t),st.uniforms=zt.uniforms;const Xt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xt.clippingPlanes=At.uniform),Bi(b,zt),st.needsLights=ua(b),st.lightsStateVersion=wt,st.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=$t,st.uniformsList=null,$t}function Er(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=Nu.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Bi(b,W){const rt=Gt.get(b);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function la(b,W,rt,st,j){W.isScene!==!0&&(W=Wt),se.resetTextureUnits();const Et=W.fog,wt=st.isMeshStandardMaterial?W.environment:null,zt=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:As,Lt=(st.isMeshStandardMaterial?Ye:qe).get(st.envMap||wt),Qt=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Xt=!!rt.morphAttributes.position,ce=!!rt.morphAttributes.normal,be=!!rt.morphAttributes.color;let Xe=Ha;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Xe=R.toneMapping);const Ne=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,fe=Ne!==void 0?Ne.length:0,Kt=Gt.get(st),ke=g.state.lights;if(Ft===!0&&(et===!0||b!==D)){const Ke=b===D&&st.id===w;At.setState(st,b,Ke)}let ge=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==ke.state.version||Kt.outputColorSpace!==zt||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Lt||st.fog===!0&&Kt.fog!==Et||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==At.numPlanes||Kt.numIntersection!==At.numIntersection)||Kt.vertexAlphas!==Qt||Kt.vertexTangents!==$t||Kt.morphTargets!==Xt||Kt.morphNormals!==ce||Kt.morphColors!==be||Kt.toneMapping!==Xe||Kt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Kt.__version=st.version);let Tn=Kt.currentProgram;ge===!0&&(Tn=Ri(st,W,j));let pi=!1,Un=!1,mn=!1;const Fe=Tn.getUniforms(),Ln=Kt.uniforms;if(Ot.useProgram(Tn.program)&&(pi=!0,Un=!0,mn=!0),st.id!==w&&(w=st.id,Un=!0),pi||D!==b){Ot.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Fe.setValue(H,"projectionMatrix",b.projectionMatrix),Fe.setValue(H,"viewMatrix",b.matrixWorldInverse);const Sn=Fe.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,bt.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&Fe.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),D!==b&&(D=b,Un=!0,mn=!0)}if(j.isSkinnedMesh){Fe.setOptional(H,j,"bindMatrix"),Fe.setOptional(H,j,"bindMatrixInverse");const Ke=j.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Fe.setValue(H,"boneTexture",Ke.boneTexture,se))}j.isBatchedMesh&&(Fe.setOptional(H,j,"batchingTexture"),Fe.setValue(H,"batchingTexture",j._matricesTexture,se),Fe.setOptional(H,j,"batchingIdTexture"),Fe.setValue(H,"batchingIdTexture",j._indirectTexture,se),Fe.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Fe.setValue(H,"batchingColorTexture",j._colorsTexture,se));const bn=rt.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&yt.update(j,rt,Tn),(Un||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Fe.setValue(H,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Ln.envMap.value=Lt,Ln.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(Ln.envMapIntensity.value=W.environmentIntensity),Un&&(Fe.setValue(H,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&Xa(Ln,mn),Et&&st.fog===!0&&pt.refreshFogUniforms(Ln,Et),pt.refreshMaterialUniforms(Ln,st,Y,Z,g.state.transmissionRenderTarget[b.id]),Nu.upload(H,Er(Kt),Ln,se)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Nu.upload(H,Er(Kt),Ln,se),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(H,"center",j.center),Fe.setValue(H,"modelViewMatrix",j.modelViewMatrix),Fe.setValue(H,"normalMatrix",j.normalMatrix),Fe.setValue(H,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Ke=st.uniformsGroups;for(let Sn=0,Tr=Ke.length;Sn<Tr;Sn++){const In=Ke[Sn];oe.update(In,Tn),oe.bind(In,Tn)}}return Tn}function Xa(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function ua(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,W,rt){const st=Gt.get(b);st.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Gt.get(b.texture).__webglTexture=W,Gt.get(b.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const rt=Gt.get(b);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0};const rn=H.createFramebuffer();this.setRenderTarget=function(b,W=0,rt=0){X=b,I=W,z=rt;let st=!0,j=null,Et=!1,wt=!1;if(b){const Lt=Gt.get(b);if(Lt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(Lt.__webglFramebuffer===void 0)se.setupRenderTarget(b);else if(Lt.__hasExternalTextures)se.rebindTextures(b,Gt.get(b.texture).__webglTexture,Gt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Xt=b.depthTexture;if(Lt.__boundDepthTexture!==Xt){if(Xt!==null&&Gt.has(Xt)&&(b.width!==Xt.image.width||b.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(b)}}const Qt=b.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(wt=!0);const $t=Gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[W])?j=$t[W][rt]:j=$t[W],Et=!0):b.samples>0&&se.useMultisampledRTT(b)===!1?j=Gt.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?j=$t[rt]:j=$t,G.copy(b.viewport),nt.copy(b.scissor),ot=b.scissorTest}else G.copy($).multiplyScalar(Y).floor(),nt.copy(vt).multiplyScalar(Y).floor(),ot=St;if(rt!==0&&(j=rn),Ot.bindFramebuffer(H.FRAMEBUFFER,j)&&st&&Ot.drawBuffers(b,j),Ot.viewport(G),Ot.scissor(nt),Ot.setScissorTest(ot),Et){const Lt=Gt.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Lt.__webglTexture,rt)}else if(wt){const Lt=W;for(let Qt=0;Qt<b.textures.length;Qt++){const $t=Gt.get(b.textures[Qt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Qt,$t.__webglTexture,rt,Lt)}}else if(b!==null&&rt!==0){const Lt=Gt.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Lt.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(b,W,rt,st,j,Et,wt,zt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){Ot.bindFramebuffer(H.FRAMEBUFFER,Lt);try{const Qt=b.textures[zt],$t=Qt.format,Xt=Qt.type;if(!ee.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-st&&rt>=0&&rt<=b.height-j&&(b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt),H.readPixels(W,rt,st,j,Vt.convert($t),Vt.convert(Xt),Et))}finally{const Qt=X!==null?Gt.get(X).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(b,W,rt,st,j,Et,wt,zt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt)if(W>=0&&W<=b.width-st&&rt>=0&&rt<=b.height-j){Ot.bindFramebuffer(H.FRAMEBUFFER,Lt);const Qt=b.textures[zt],$t=Qt.format,Xt=Qt.type;if(!ee.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.bufferData(H.PIXEL_PACK_BUFFER,Et.byteLength,H.STREAM_READ),b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt),H.readPixels(W,rt,st,j,Vt.convert($t),Vt.convert(Xt),0);const be=X!==null?Gt.get(X).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,be);const Xe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ey(H,Xe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Et),H.deleteBuffer(ce),H.deleteSync(Xe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,rt=0){const st=Math.pow(2,-rt),j=Math.floor(b.image.width*st),Et=Math.floor(b.image.height*st),wt=W!==null?W.x:0,zt=W!==null?W.y:0;se.setTexture2D(b,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,wt,zt,j,Et),Ot.unbindTexture()};const Zo=H.createFramebuffer(),Ko=H.createFramebuffer();this.copyTextureToTexture=function(b,W,rt=null,st=null,j=0,Et=null){Et===null&&(j!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=j,j=0):Et=0);let wt,zt,Lt,Qt,$t,Xt,ce,be,Xe;const Ne=b.isCompressedTexture?b.mipmaps[Et]:b.image;if(rt!==null)wt=rt.max.x-rt.min.x,zt=rt.max.y-rt.min.y,Lt=rt.isBox3?rt.max.z-rt.min.z:1,Qt=rt.min.x,$t=rt.min.y,Xt=rt.isBox3?rt.min.z:0;else{const bn=Math.pow(2,-j);wt=Math.floor(Ne.width*bn),zt=Math.floor(Ne.height*bn),b.isDataArrayTexture?Lt=Ne.depth:b.isData3DTexture?Lt=Math.floor(Ne.depth*bn):Lt=1,Qt=0,$t=0,Xt=0}st!==null?(ce=st.x,be=st.y,Xe=st.z):(ce=0,be=0,Xe=0);const fe=Vt.convert(W.format),Kt=Vt.convert(W.type);let ke;W.isData3DTexture?(se.setTexture3D(W,0),ke=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),ke=H.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),ke=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const ge=H.getParameter(H.UNPACK_ROW_LENGTH),Tn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pi=H.getParameter(H.UNPACK_SKIP_PIXELS),Un=H.getParameter(H.UNPACK_SKIP_ROWS),mn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ne.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ne.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qt),H.pixelStorei(H.UNPACK_SKIP_ROWS,$t),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xt);const Fe=b.isDataArrayTexture||b.isData3DTexture,Ln=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const bn=Gt.get(b),Ke=Gt.get(W),Sn=Gt.get(bn.__renderTarget),Tr=Gt.get(Ke.__renderTarget);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let In=0;In<Lt;In++)Fe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(b).__webglTexture,j,Xt+In),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(W).__webglTexture,Et,Xe+In)),H.blitFramebuffer(Qt,$t,wt,zt,ce,be,wt,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||Gt.has(b)){const bn=Gt.get(b),Ke=Gt.get(W);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,Zo),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ko);for(let Sn=0;Sn<Lt;Sn++)Fe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,j,Xt+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,j),Ln?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.__webglTexture,Et,Xe+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ke.__webglTexture,Et),j!==0?H.blitFramebuffer(Qt,$t,wt,zt,ce,be,wt,zt,H.COLOR_BUFFER_BIT,H.NEAREST):Ln?H.copyTexSubImage3D(ke,Et,ce,be,Xe+Sn,Qt,$t,wt,zt):H.copyTexSubImage2D(ke,Et,ce,be,Qt,$t,wt,zt);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ln?b.isDataTexture||b.isData3DTexture?H.texSubImage3D(ke,Et,ce,be,Xe,wt,zt,Lt,fe,Kt,Ne.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(ke,Et,ce,be,Xe,wt,zt,Lt,fe,Ne.data):H.texSubImage3D(ke,Et,ce,be,Xe,wt,zt,Lt,fe,Kt,Ne):b.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Et,ce,be,wt,zt,fe,Kt,Ne.data):b.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Et,ce,be,Ne.width,Ne.height,fe,Ne.data):H.texSubImage2D(H.TEXTURE_2D,Et,ce,be,wt,zt,fe,Kt,Ne);H.pixelStorei(H.UNPACK_ROW_LENGTH,ge),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Un),H.pixelStorei(H.UNPACK_SKIP_IMAGES,mn),Et===0&&W.generateMipmaps&&H.generateMipmap(ke),Ot.unbindTexture()},this.initRenderTarget=function(b){Gt.get(b).__webglFramebuffer===void 0&&se.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?se.setTextureCube(b,0):b.isData3DTexture?se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?se.setTexture2DArray(b,0):se.setTexture2D(b,0),Ot.unbindTexture()},this.resetState=function(){I=0,z=0,X=null,Ot.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const jv={xRange:[-2,2],yRange:[-1.5,1.5],gridDivisions:8,axisColor:8947848,gridColor:3355443},pv=(o,t,i,r)=>({x:1-i*o*o+t,y:r*o}),SA=o=>{const{xRange:t,yRange:i,gridDivisions:r,axisColor:l,gridColor:c}=jv,[h,d]=t,[m,p]=i,_=(d-h)/r,v=(p-m)/r,x=new Po;x.name="coordinate-system";for(let g=0;g<=r;g++){const N=h+g*_,U=Math.abs(N)<.01,R=[new Q(N,m,-.01),new Q(N,p,-.01)],P=new $n().setFromPoints(R),I=new Iu({color:U?l:c,transparent:!0,opacity:U?1:.4}),z=new yd(P,I);z.userData.isGrid=!0,x.add(z)}for(let g=0;g<=r;g++){const N=m+g*v,U=Math.abs(N)<.01,R=[new Q(h,N,-.01),new Q(d,N,-.01)],P=new $n().setFromPoints(R),I=new Iu({color:U?l:c,transparent:!0,opacity:U?1:.4}),z=new yd(P,I);z.userData.isGrid=!0,x.add(z)}const M=(g,N,U=.15)=>{const R=document.createElement("canvas"),P=R.getContext("2d");R.width=128,R.height=64,P.fillStyle="transparent",P.fillRect(0,0,R.width,R.height),P.font="Bold 32px Arial",P.fillStyle="#aaaaaa",P.textAlign="center",P.textBaseline="middle",P.fillText(g,R.width/2,R.height/2);const I=new Ny(R);I.minFilter=Mi;const z=new zv({map:I,transparent:!0,depthTest:!1}),X=new Cy(z);return X.position.copy(N),X.scale.set(U*2,U,1),X.userData.isGrid=!0,X};for(let g=0;g<=r;g++){const N=h+g*_;if(Math.abs(N)>.01){const U=M(N.toFixed(1),new Q(N,m-.15,0),.12);x.add(U)}}for(let g=0;g<=r;g++){const N=m+g*v;if(Math.abs(N)>.01){const U=M(N.toFixed(1),new Q(h-.2,N,0),.12);x.add(U)}}const A=M("x",new Q(d+.2,0,0),.18),C=M("y",new Q(0,p+.15,0),.18);x.add(A),x.add(C);const y=M("0",new Q(-.12,-.12,0),.1);return x.add(y),o.add(x),x},li={period1:{stable:"#e74c3c",unstable:"#c0392b",saddle:"#e67e22"},period2:{stable:"#27ae60",unstable:"#229954",saddle:"#16a085"},period3:{stable:"#3498db",unstable:"#2980b9",saddle:"#2c3e50"},period4:{stable:"#9b59b6",unstable:"#8e44ad",saddle:"#71368a"},period5:{stable:"#f39c12",unstable:"#d68910",saddle:"#ca6f1e"},period6plus:{stable:"#1abc9c",unstable:"#16a085",saddle:"#138d75"},trajectory:"#00ffff"},yA=()=>{const o=Dn.useRef(null),t=Dn.useRef(null),i=Dn.useRef(null),r=Dn.useRef(null),l=Dn.useRef(null),c=Dn.useRef(null),[h,d]=Dn.useState({a:1.4,b:.3,startX:.1,startY:.1,maxIterations:1e3,maxPeriod:5}),[m,p]=Dn.useState({orbits:[],trajectoryPoints:[],currentPoint:{x:.1,y:.1},iteration:0,isRunning:!1,isReady:!1,showOrbits:!1,showTrail:!0,hasStarted:!1}),[_,v]=Dn.useState({period1:!0,period2:!0,period3:!0,period4:!0,period5:!0,period6plus:!1});Dn.useEffect(()=>{if(!o.current)return;const g=new Ay;g.background=new ye(657930),i.current=g;const[N,U]=jv.yRange,R=U-N,P=.5,I=window.innerWidth*.75/window.innerHeight,z=R+P*2,X=z*I,w=new Vv(-X/2,X/2,z/2,-z/2,.1,1e3);w.position.z=5,r.current=w;const D=new xA({canvas:o.current,antialias:!0,alpha:!0});D.setSize(window.innerWidth*.75,window.innerHeight),D.setPixelRatio(window.devicePixelRatio),t.current=D,SA(g);const G=()=>{const ot=window.innerWidth*.75/window.innerHeight,dt=z*ot;w.left=-dt/2,w.right=dt/2,w.top=z/2,w.bottom=-z/2,w.updateProjectionMatrix(),D.setSize(window.innerWidth*.75,window.innerHeight)};window.addEventListener("resize",G);const nt=()=>{l.current=requestAnimationFrame(nt),D.render(g,w)};return nt(),()=>{window.removeEventListener("resize",G),l.current&&cancelAnimationFrame(l.current),c.current&&cancelAnimationFrame(c.current),D.dispose()}},[]),Dn.useEffect(()=>{let g=!1;return p(U=>({...U,isReady:!1,orbits:[],trajectoryPoints:[],currentPoint:{x:h.startX,y:h.startY},iteration:0,hasStarted:!1,showOrbits:!1})),(async()=>{try{const U=await cS(()=>import("./henon_periodic_orbits-7q1DX_R1.js"),[]);if(await U.default(),g)return;console.log(`Computing periodic orbits with max_period=${h.maxPeriod}`);const R=new U.HenonSystemWasm(h.a,h.b,h.maxPeriod);if(g){R.free();return}const P=R.getPeriodicOrbits();console.log(`Found ${P.length} periodic orbits`),R.free(),p(I=>({...I,orbits:P,isReady:!0,currentPoint:{x:h.startX,y:h.startY},trajectoryPoints:[],iteration:0,hasStarted:!1,showOrbits:!1}))}catch(U){console.error("Failed to initialize WASM:",U),p(R=>({...R,isReady:!0,orbits:[]}))}})(),()=>{g=!0}},[h.a,h.b,h.maxPeriod,h.startX,h.startY]),Dn.useEffect(()=>{if(!i.current)return;const g=i.current,N=[];if(g.traverse(U=>{(U.userData.type==="trajectory"||U.userData.type==="orbit")&&N.push(U)}),N.forEach(U=>{U.geometry&&U.geometry.dispose(),U.material&&U.material.dispose(),g.remove(U)}),m.showOrbits&&m.orbits.length>0&&m.orbits.filter(y).forEach(R=>{if(R.points.forEach(P=>{const I=new Io(.03,12,12),z=C(R),X=new zo({color:new ye(z)}),w=new fi(I,X);w.position.set(P[0],P[1],.1),w.userData.type="orbit",g.add(w)}),R.points.length>1){const P=new $n,I=new Float32Array(R.points.length*3);R.points.forEach((w,D)=>{I[D*3]=w[0],I[D*3+1]=w[1],I[D*3+2]=.1}),P.setAttribute("position",new hi(I,3));const z=new Iu({color:new ye(C(R)),opacity:.5,transparent:!0}),X=new Ly(P,z);X.userData.type="orbit",g.add(X)}}),m.showTrail&&m.trajectoryPoints.length>0){const U=Math.min(m.trajectoryPoints.length,500),R=Math.max(0,m.trajectoryPoints.length-U),P=m.trajectoryPoints.slice(R);P.forEach((I,z)=>{const X=z/P.length,D=.012*(.3+.7*X),G=new Io(D,6,6),nt=new zo({color:new ye(li.trajectory),opacity:.2+.6*X,transparent:!0}),ot=new fi(G,nt);ot.position.set(I.x,I.y,.05),ot.userData.type="trajectory",g.add(ot)})}if(m.hasStarted&&m.currentPoint){const U=new Io(.04,16,16),R=new zo({color:new ye("#ffffff")}),P=new fi(U,R);P.position.set(m.currentPoint.x,m.currentPoint.y,.2),P.userData.type="trajectory",g.add(P)}},[m.currentPoint,m.trajectoryPoints,m.orbits,m.showOrbits,m.showTrail,m.iteration,m.hasStarted,_]);const x=Dn.useCallback(()=>{if(!m.isReady||m.isRunning)return;const{x:g,y:N}=m.currentPoint;if(!isFinite(g)||!isFinite(N)||Math.abs(g)>10||Math.abs(N)>10){console.warn("Point diverged, resetting"),p(R=>({...R,currentPoint:{x:h.startX,y:h.startY},trajectoryPoints:[],iteration:0,hasStarted:!1}));return}const U=pv(g,N,h.a,h.b);p(R=>({...R,currentPoint:U,trajectoryPoints:[...R.trajectoryPoints,{x:g,y:N}],iteration:R.iteration+1,hasStarted:!0}))},[m.isReady,m.isRunning,m.currentPoint,h.a,h.b,h.startX,h.startY]),M=Dn.useCallback(()=>{if(!m.isReady||m.isRunning)return;p(z=>({...z,isRunning:!0}));let g=m.currentPoint.x,N=m.currentPoint.y,U=m.iteration;const R=[...m.trajectoryPoints],P=5,I=()=>{for(let z=0;z<P&&U<h.maxIterations;z++){if(!isFinite(g)||!isFinite(N)||Math.abs(g)>10||Math.abs(N)>10){console.warn("Point diverged at iteration",U),p(w=>({...w,isRunning:!1,showOrbits:!0,hasStarted:!0,trajectoryPoints:R,currentPoint:{x:g,y:N},iteration:U}));return}R.push({x:g,y:N});const X=pv(g,N,h.a,h.b);g=X.x,N=X.y,U++}p(z=>({...z,currentPoint:{x:g,y:N},trajectoryPoints:[...R],iteration:U,hasStarted:!0})),U<h.maxIterations?c.current=requestAnimationFrame(I):p(z=>({...z,isRunning:!1,showOrbits:!0}))};c.current=requestAnimationFrame(I)},[m.isReady,m.isRunning,m.currentPoint,m.iteration,m.trajectoryPoints,h.a,h.b,h.maxIterations]),A=Dn.useCallback(()=>{c.current&&cancelAnimationFrame(c.current),p(g=>({...g,currentPoint:{x:h.startX,y:h.startY},trajectoryPoints:[],iteration:0,isRunning:!1,hasStarted:!1,showOrbits:!1}))},[h.startX,h.startY]),C=g=>{const{period:N,stability:U}=g;let R;return N===1?R=li.period1:N===2?R=li.period2:N===3?R=li.period3:N===4?R=li.period4:N===5?R=li.period5:R=li.period6plus,R[U.toLowerCase()]||R.stable},y=g=>g.period===1?_.period1:g.period===2?_.period2:g.period===3?_.period3:g.period===4?_.period4:g.period===5?_.period5:g.period>=6?_.period6plus:!1;return ne.jsxs("div",{style:xe.container,children:[ne.jsxs("div",{style:xe.sidebar,children:[ne.jsxs("div",{style:xe.section,children:[ne.jsx("h3",{style:xe.sectionTitle,children:"System Parameters"}),ne.jsxs("label",{style:xe.label,children:["a = ",h.a.toFixed(2),ne.jsx("input",{type:"range",min:"0.5",max:"2.0",step:"0.01",value:h.a,onChange:g=>d({...h,a:parseFloat(g.target.value)}),style:xe.slider,disabled:m.isRunning})]}),ne.jsxs("label",{style:xe.label,children:["b = ",h.b.toFixed(2),ne.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.01",value:h.b,onChange:g=>d({...h,b:parseFloat(g.target.value)}),style:xe.slider,disabled:m.isRunning})]}),ne.jsxs("label",{style:xe.label,children:["Max Period = ",h.maxPeriod,ne.jsx("input",{type:"range",min:"2",max:"10",step:"1",value:h.maxPeriod,onChange:g=>d({...h,maxPeriod:parseInt(g.target.value)}),style:xe.slider,disabled:m.isRunning})]}),ne.jsxs("label",{style:xe.label,children:["Max Iterations = ",h.maxIterations,ne.jsx("input",{type:"range",min:"100",max:"5000",step:"100",value:h.maxIterations,onChange:g=>d({...h,maxIterations:parseInt(g.target.value)}),style:xe.slider,disabled:m.isRunning})]})]}),ne.jsxs("div",{style:xe.section,children:[ne.jsx("h3",{style:xe.sectionTitle,children:"Periodic Orbits"}),ne.jsxs("label",{style:xe.checkboxLabel,children:[ne.jsx("input",{type:"checkbox",checked:_.period1,onChange:g=>v({..._,period1:g.target.checked})}),ne.jsx("span",{style:{...xe.colorBox,backgroundColor:li.period1.stable}}),"Period-1 (",m.orbits.filter(g=>g.period===1).length,")"]}),ne.jsxs("label",{style:xe.checkboxLabel,children:[ne.jsx("input",{type:"checkbox",checked:_.period2,onChange:g=>v({..._,period2:g.target.checked})}),ne.jsx("span",{style:{...xe.colorBox,backgroundColor:li.period2.stable}}),"Period-2 (",m.orbits.filter(g=>g.period===2).length,")"]}),ne.jsxs("label",{style:xe.checkboxLabel,children:[ne.jsx("input",{type:"checkbox",checked:_.period3,onChange:g=>v({..._,period3:g.target.checked})}),ne.jsx("span",{style:{...xe.colorBox,backgroundColor:li.period3.stable}}),"Period-3 (",m.orbits.filter(g=>g.period===3).length,")"]}),ne.jsxs("label",{style:xe.checkboxLabel,children:[ne.jsx("input",{type:"checkbox",checked:_.period4,onChange:g=>v({..._,period4:g.target.checked})}),ne.jsx("span",{style:{...xe.colorBox,backgroundColor:li.period4.stable}}),"Period-4 (",m.orbits.filter(g=>g.period===4).length,")"]}),ne.jsxs("label",{style:xe.checkboxLabel,children:[ne.jsx("input",{type:"checkbox",checked:_.period5,onChange:g=>v({..._,period5:g.target.checked})}),ne.jsx("span",{style:{...xe.colorBox,backgroundColor:li.period5.stable}}),"Period-5 (",m.orbits.filter(g=>g.period===5).length,")"]}),ne.jsxs("label",{style:xe.checkboxLabel,children:[ne.jsx("input",{type:"checkbox",checked:m.showOrbits,onChange:g=>p({...m,showOrbits:g.target.checked})}),"Show orbit markers"]}),ne.jsxs("label",{style:xe.checkboxLabel,children:[ne.jsx("input",{type:"checkbox",checked:m.showTrail,onChange:g=>p({...m,showTrail:g.target.checked})}),"Show trajectory trail"]})]}),ne.jsxs("div",{style:xe.section,children:[ne.jsx("h3",{style:xe.sectionTitle,children:"Controls"}),ne.jsx("button",{onClick:x,disabled:!m.isReady||m.isRunning,style:xe.button,children:"Step Forward"}),ne.jsx("button",{onClick:M,disabled:!m.isReady||m.isRunning,style:{...xe.button,...xe.runButton},children:m.isRunning?"Running...":"Run to Max Iterations"}),ne.jsx("button",{onClick:A,disabled:m.isRunning,style:{...xe.button,...xe.resetButton},children:"Reset"})]}),ne.jsxs("div",{style:xe.info,children:[ne.jsx("div",{style:xe.infoHeader,children:"Henon Map: x' = 1 - ax^2 + y, y' = bx"}),ne.jsxs("div",{children:["Status: ",m.isReady?m.isRunning?"Running...":"Ready":"Loading..."]}),ne.jsxs("div",{children:["Iteration: ",m.iteration," / ",h.maxIterations]}),m.hasStarted&&ne.jsxs("div",{children:["Position: (",m.currentPoint.x.toFixed(4),", ",m.currentPoint.y.toFixed(4),")"]}),ne.jsxs("div",{children:["Orbits found: ",m.orbits.length]}),ne.jsxs("div",{children:["Trail points: ",m.trajectoryPoints.length]})]})]}),ne.jsx("div",{style:xe.viewport,children:ne.jsx("canvas",{ref:o,style:xe.canvas})})]})},xe={container:{display:"flex",height:"100vh",width:"100vw",backgroundColor:"#0a0a0a",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0",overflow:"hidden"},sidebar:{width:"320px",minWidth:"320px",padding:"20px",backgroundColor:"#1a1a1a",borderRight:"1px solid #333",overflowY:"auto"},section:{marginBottom:"32px"},sectionTitle:{fontSize:"14px",fontWeight:"600",marginBottom:"16px",color:"#fff",textTransform:"uppercase",letterSpacing:"0.5px"},label:{display:"flex",flexDirection:"column",marginBottom:"16px",fontSize:"13px",color:"#b0b0b0"},slider:{marginTop:"8px",width:"100%"},checkboxLabel:{display:"flex",alignItems:"center",marginBottom:"12px",fontSize:"13px",cursor:"pointer",gap:"8px"},colorBox:{width:"16px",height:"16px",borderRadius:"2px",display:"inline-block"},button:{width:"100%",padding:"12px",marginBottom:"8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s"},runButton:{backgroundColor:"#1a4a1a",borderColor:"#2a6a2a"},resetButton:{backgroundColor:"#1a1a1a",borderColor:"#555"},info:{marginTop:"24px",padding:"16px",backgroundColor:"#0f0f0f",borderRadius:"4px",fontSize:"12px",lineHeight:"1.8",color:"#888"},infoHeader:{fontSize:"13px",fontWeight:"600",color:"#4CAF50",marginBottom:"8px"},viewport:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",overflow:"hidden"},canvas:{maxWidth:"100%",maxHeight:"100%",borderRadius:"4px",display:"block"}};oS.createRoot(document.getElementById("root")).render(ne.jsx(Dn.StrictMode,{children:ne.jsx(yA,{})}));
