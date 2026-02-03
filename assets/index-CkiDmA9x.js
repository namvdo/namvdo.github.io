(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Jf={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function uy(){if(h_)return Uo;h_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=t,Uo.jsx=i,Uo.jsxs=i,Uo}var p_;function fy(){return p_||(p_=1,Jf.exports=uy()),Jf.exports}var k=fy(),$f={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function dy(){if(m_)return pe;m_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function M(N,st,bt){this.props=N,this.context=st,this.refs=b,this.updater=bt||v}M.prototype.isReactComponent={},M.prototype.setState=function(N,st){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,st,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=M.prototype;function B(N,st,bt){this.props=N,this.context=st,this.refs=b,this.updater=bt||v}var O=B.prototype=new g;O.constructor=B,T(O,M.prototype),O.isPureReactComponent=!0;var L=Array.isArray,w={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function P(N,st,bt,wt,Ft,qt){return bt=qt.ref,{$$typeof:o,type:N,key:st,ref:bt!==void 0?bt:null,props:qt}}function Q(N,st){return P(N.type,st,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function U(N){var st={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(bt){return st[bt]})}var X=/\/+/g;function ut(N,st){return typeof N=="object"&&N!==null&&N.key!=null?U(""+N.key):st.toString(36)}function gt(){}function _t(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(gt,gt):(N.status="pending",N.then(function(st){N.status==="pending"&&(N.status="fulfilled",N.value=st)},function(st){N.status==="pending"&&(N.status="rejected",N.reason=st)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ct(N,st,bt,wt,Ft){var qt=typeof N;(qt==="undefined"||qt==="boolean")&&(N=null);var ot=!1;if(N===null)ot=!0;else switch(qt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(N.$$typeof){case o:case t:ot=!0;break;case _:return ot=N._init,ct(ot(N._payload),st,bt,wt,Ft)}}if(ot)return Ft=Ft(N),ot=wt===""?"."+ut(N,0):wt,L(Ft)?(bt="",ot!=null&&(bt=ot.replace(X,"$&/")+"/"),ct(Ft,st,bt,"",function(ee){return ee})):Ft!=null&&(D(Ft)&&(Ft=Q(Ft,bt+(Ft.key==null||N&&N.key===Ft.key?"":(""+Ft.key).replace(X,"$&/")+"/")+ot)),st.push(Ft)),1;ot=0;var St=wt===""?".":wt+":";if(L(N))for(var Ot=0;Ot<N.length;Ot++)wt=N[Ot],qt=St+ut(wt,Ot),ot+=ct(wt,st,bt,qt,Ft);else if(Ot=y(N),typeof Ot=="function")for(N=Ot.call(N),Ot=0;!(wt=N.next()).done;)wt=wt.value,qt=St+ut(wt,Ot++),ot+=ct(wt,st,bt,qt,Ft);else if(qt==="object"){if(typeof N.then=="function")return ct(_t(N),st,bt,wt,Ft);throw st=String(N),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return ot}function I(N,st,bt){if(N==null)return N;var wt=[],Ft=0;return ct(N,wt,"","",function(qt){return st.call(bt,qt,Ft++)}),wt}function it(N){if(N._status===-1){var st=N._result;st=st(),st.then(function(bt){(N._status===0||N._status===-1)&&(N._status=1,N._result=bt)},function(bt){(N._status===0||N._status===-1)&&(N._status=2,N._result=bt)}),N._status===-1&&(N._status=0,N._result=st)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Tt(){}return pe.Children={map:I,forEach:function(N,st,bt){I(N,function(){st.apply(this,arguments)},bt)},count:function(N){var st=0;return I(N,function(){st++}),st},toArray:function(N){return I(N,function(st){return st})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},pe.Component=M,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=B,pe.StrictMode=r,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,pe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return w.H.useMemoCache(N)}},pe.cache=function(N){return function(){return N.apply(null,arguments)}},pe.cloneElement=function(N,st,bt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var wt=T({},N.props),Ft=N.key,qt=void 0;if(st!=null)for(ot in st.ref!==void 0&&(qt=void 0),st.key!==void 0&&(Ft=""+st.key),st)!G.call(st,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&st.ref===void 0||(wt[ot]=st[ot]);var ot=arguments.length-2;if(ot===1)wt.children=bt;else if(1<ot){for(var St=Array(ot),Ot=0;Ot<ot;Ot++)St[Ot]=arguments[Ot+2];wt.children=St}return P(N.type,Ft,void 0,void 0,qt,wt)},pe.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},pe.createElement=function(N,st,bt){var wt,Ft={},qt=null;if(st!=null)for(wt in st.key!==void 0&&(qt=""+st.key),st)G.call(st,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Ft[wt]=st[wt]);var ot=arguments.length-2;if(ot===1)Ft.children=bt;else if(1<ot){for(var St=Array(ot),Ot=0;Ot<ot;Ot++)St[Ot]=arguments[Ot+2];Ft.children=St}if(N&&N.defaultProps)for(wt in ot=N.defaultProps,ot)Ft[wt]===void 0&&(Ft[wt]=ot[wt]);return P(N,qt,void 0,void 0,null,Ft)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(N){return{$$typeof:h,render:N}},pe.isValidElement=D,pe.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:it}},pe.memo=function(N,st){return{$$typeof:p,type:N,compare:st===void 0?null:st}},pe.startTransition=function(N){var st=w.T,bt={};w.T=bt;try{var wt=N(),Ft=w.S;Ft!==null&&Ft(bt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(Tt,Y)}catch(qt){Y(qt)}finally{w.T=st}},pe.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},pe.use=function(N){return w.H.use(N)},pe.useActionState=function(N,st,bt){return w.H.useActionState(N,st,bt)},pe.useCallback=function(N,st){return w.H.useCallback(N,st)},pe.useContext=function(N){return w.H.useContext(N)},pe.useDebugValue=function(){},pe.useDeferredValue=function(N,st){return w.H.useDeferredValue(N,st)},pe.useEffect=function(N,st,bt){var wt=w.H;if(typeof bt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return wt.useEffect(N,st)},pe.useId=function(){return w.H.useId()},pe.useImperativeHandle=function(N,st,bt){return w.H.useImperativeHandle(N,st,bt)},pe.useInsertionEffect=function(N,st){return w.H.useInsertionEffect(N,st)},pe.useLayoutEffect=function(N,st){return w.H.useLayoutEffect(N,st)},pe.useMemo=function(N,st){return w.H.useMemo(N,st)},pe.useOptimistic=function(N,st){return w.H.useOptimistic(N,st)},pe.useReducer=function(N,st,bt){return w.H.useReducer(N,st,bt)},pe.useRef=function(N){return w.H.useRef(N)},pe.useState=function(N){return w.H.useState(N)},pe.useSyncExternalStore=function(N,st,bt){return w.H.useSyncExternalStore(N,st,bt)},pe.useTransition=function(){return w.H.useTransition()},pe.version="19.1.1",pe}var g_;function Ch(){return g_||(g_=1,$f.exports=dy()),$f.exports}var $t=Ch(),td={exports:{}},Lo={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function hy(){return __||(__=1,(function(o){function t(I,it){var Y=I.length;I.push(it);t:for(;0<Y;){var Tt=Y-1>>>1,N=I[Tt];if(0<l(N,it))I[Tt]=it,I[Y]=N,Y=Tt;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var it=I[0],Y=I.pop();if(Y!==it){I[0]=Y;t:for(var Tt=0,N=I.length,st=N>>>1;Tt<st;){var bt=2*(Tt+1)-1,wt=I[bt],Ft=bt+1,qt=I[Ft];if(0>l(wt,Y))Ft<N&&0>l(qt,wt)?(I[Tt]=qt,I[Ft]=Y,Tt=Ft):(I[Tt]=wt,I[bt]=Y,Tt=bt);else if(Ft<N&&0>l(qt,Y))I[Tt]=qt,I[Ft]=Y,Tt=Ft;else break t}}return it}function l(I,it){var Y=I.sortIndex-it.sortIndex;return Y!==0?Y:I.id-it.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,x=null,y=3,v=!1,T=!1,b=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var it=i(p);it!==null;){if(it.callback===null)r(p);else if(it.startTime<=I)r(p),it.sortIndex=it.expirationTime,t(m,it);else break;it=i(p)}}function w(I){if(b=!1,L(I),!T)if(i(m)!==null)T=!0,G||(G=!0,ut());else{var it=i(p);it!==null&&ct(w,it.startTime-I)}}var G=!1,P=-1,Q=5,D=-1;function U(){return M?!0:!(o.unstable_now()-D<Q)}function X(){if(M=!1,G){var I=o.unstable_now();D=I;var it=!0;try{t:{T=!1,b&&(b=!1,B(P),P=-1),v=!0;var Y=y;try{e:{for(L(I),x=i(m);x!==null&&!(x.expirationTime>I&&U());){var Tt=x.callback;if(typeof Tt=="function"){x.callback=null,y=x.priorityLevel;var N=Tt(x.expirationTime<=I);if(I=o.unstable_now(),typeof N=="function"){x.callback=N,L(I),it=!0;break e}x===i(m)&&r(m),L(I)}else r(m);x=i(m)}if(x!==null)it=!0;else{var st=i(p);st!==null&&ct(w,st.startTime-I),it=!1}}break t}finally{x=null,y=Y,v=!1}it=void 0}}finally{it?ut():G=!1}}}var ut;if(typeof O=="function")ut=function(){O(X)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,_t=gt.port2;gt.port1.onmessage=X,ut=function(){_t.postMessage(null)}}else ut=function(){g(X,0)};function ct(I,it){P=g(function(){I(o.unstable_now())},it)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(I){switch(y){case 1:case 2:case 3:var it=3;break;default:it=y}var Y=y;y=it;try{return I()}finally{y=Y}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(I,it){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=y;y=I;try{return it()}finally{y=Y}},o.unstable_scheduleCallback=function(I,it,Y){var Tt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Tt+Y:Tt):Y=Tt,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,I={id:_++,callback:it,priorityLevel:I,startTime:Y,expirationTime:N,sortIndex:-1},Y>Tt?(I.sortIndex=Y,t(p,I),i(m)===null&&I===i(p)&&(b?(B(P),P=-1):b=!0,ct(w,Y-Tt))):(I.sortIndex=N,t(m,I),T||v||(T=!0,G||(G=!0,ut()))),I},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(I){var it=y;return function(){var Y=y;y=it;try{return I.apply(this,arguments)}finally{y=Y}}}})(nd)),nd}var v_;function py(){return v_||(v_=1,ed.exports=hy()),ed.exports}var id={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function my(){if(x_)return Cn;x_=1;var o=Ch();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Cn.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,v=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:v}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:v,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.1.1",Cn}var y_;function gy(){if(y_)return id.exports;y_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),id.exports=my(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function _y(){if(S_)return Lo;S_=1;var o=py(),t=Ch(),i=gy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),e;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,s=f;break}if(A===s){S=!0,s=c,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,s=c;break}if(A===s){S=!0,s=f,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var gt=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case M:return"Profiler";case b:return"StrictMode";case w:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case v:return"Portal";case O:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var ct=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Tt=[],N=-1;function st(e){return{current:e}}function bt(e){0>N||(e.current=Tt[N],Tt[N]=null,N--)}function wt(e,n){N++,Tt[N]=e.current,e.current=n}var Ft=st(null),qt=st(null),ot=st(null),St=st(null);function Ot(e,n){switch(wt(ot,n),wt(qt,e),wt(Ft,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Gg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Gg(n),e=Vg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}bt(Ft),wt(Ft,e)}function ee(){bt(Ft),bt(qt),bt(ot)}function Qt(e){e.memoizedState!==null&&wt(St,e);var n=Ft.current,a=Vg(n,e.type);n!==a&&(wt(qt,e),wt(Ft,a))}function de(e){qt.current===e&&(bt(Ft),bt(qt)),St.current===e&&(bt(St),Ao._currentValue=Y)}var Ke=Object.prototype.hasOwnProperty,V=o.unstable_scheduleCallback,Ne=o.unstable_cancelCallback,fe=o.unstable_shouldYield,re=o.unstable_requestPaint,kt=o.unstable_now,z=o.unstable_getCurrentPriorityLevel,at=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,At=o.unstable_NormalPriority,ht=o.unstable_LowPriority,C=o.unstable_IdlePriority,E=o.log,H=o.unstable_setDisableYieldValue,K=null,$=null;function nt(e){if(typeof E=="function"&&H(e),$&&typeof $.setStrictMode=="function")try{$.setStrictMode(K,e)}catch{}}var Ct=Math.clz32?Math.clz32:Xt,xt=Math.log,zt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(xt(e)/zt|0)|0}var Rt=256,Pt=4194304;function te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?c=te(s):(S&=A,S!==0?c=te(S):a||(a=A&~e,a!==0&&(c=te(a))))):(A=s&~f,A!==0?c=te(A):S!==0?c=te(S):a||(a=s&~e,a!==0&&(c=te(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function he(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=Rt;return Rt<<=1,(Rt&4194048)===0&&(Rt=256),e}function Lt(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function It(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Wt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Dt(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,lt=e.hiddenUpdates;for(a=S&~a;0<a;){var vt=31-Ct(a),Mt=1<<vt;A[vt]=0,F[vt]=-1;var ft=lt[vt];if(ft!==null)for(lt[vt]=null,vt=0;vt<ft.length;vt++){var dt=ft[vt];dt!==null&&(dt.lane&=-536870913)}a&=~Mt}s!==0&&Et(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Et(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ct(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Kt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ct(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function ue(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ce(){var e=it.p;return e!==0?e:(e=window.event,e===void 0?32:o_(e.type))}function hi(e,n){var a=it.p;try{return it.p=e,n()}finally{it.p=a}}var un=Math.random().toString(36).slice(2),fn="__reactFiber$"+un,Je="__reactProps$"+un,Ti="__reactContainer$"+un,br="__reactEvents$"+un,tl="__reactListeners$"+un,Tr="__reactHandles$"+un,Is="__reactResources$"+un,Ai="__reactMarker$"+un;function Ar(e){delete e[fn],delete e[Je],delete e[br],delete e[tl],delete e[Tr]}function zi(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ti]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=qg(e);e!==null;){if(a=e[fn])return a;e=qg(e)}return n}e=a,a=e.parentNode}return null}function la(e){if(e=e[fn]||e[Ti]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Wa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ca(e){var n=e[Is];return n||(n=e[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[Ai]=!0}var el=new Set,nl={};function R(e,n){j(e,n),j(e+"Capture",n)}function j(e,n){for(nl[e]=n,e=0;e<n.length;e++)el.add(n[e])}var pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mt={},J={};function Ut(e){return Ke.call(J,e)?!0:Ke.call(mt,e)?!1:pt.test(e)?J[e]=!0:(mt[e]=!0,!1)}function Ht(e,n,a){if(Ut(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Yt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Gt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var ae,oe;function Jt(e){if(ae===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ae=n&&n[1]||"",oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ae+e+oe}var ge=!1;function we(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(dt){var ft=dt}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(dt){ft=dt}e.call(Mt.prototype)}}else{try{throw Error()}catch(dt){ft=dt}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(dt){if(dt&&ft&&typeof dt.stack=="string")return[dt.stack,ft.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var F=S.split(`
`),lt=A.split(`
`);for(c=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;c<lt.length&&!lt[c].includes("DetermineComponentFrameRoot");)c++;if(s===F.length||c===lt.length)for(s=F.length-1,c=lt.length-1;1<=s&&0<=c&&F[s]!==lt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(F[s]!==lt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||F[s]!==lt[c]){var vt=`
`+F[s].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=s&&0<=c);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Jt(a):""}function je(e){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Jt("Activity");default:return""}}function Ie(e){try{var n="";do n+=je(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(e){var n=ie(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Me(e){e._valueTracker||(e._valueTracker=qe(e))}function Tn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ie(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var On=/[\n"\\]/g;function gn(e){return e.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(e,n,a,s,c,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?An(e,S,_e(n)):a!=null?An(e,S,_e(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+_e(A):e.removeAttribute("name")}function Pn(e,n,a,s,c,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=A?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function An(e,n,a){n==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $e(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Rr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Gn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ov=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||ov.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Gh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Gh(e,f,n[f])}function Kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return cv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cr=null,wr=null;function kh(e){var n=la(e);if(n&&(e=n.stateNode)){var a=e[Je]||null;t:switch(e=n.stateNode,n.type){case"input":if(ke(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Je]||null;if(!c)throw Error(r(90));ke(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Tn(s)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$e(e,!!a.multiple,n,!1)}}}var $c=!1;function Xh(e,n,a){if($c)return e(n,a);$c=!0;try{var s=e(n);return s}finally{if($c=!1,(Cr!==null||wr!==null)&&(Vl(),Cr&&(n=Cr,e=wr,wr=Cr=null,kh(n),e)))for(n=0;n<e.length;n++)kh(e[n])}}function zs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Je]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(Fi)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){tu=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{tu=!1}var ua=null,eu=null,al=null;function Wh(){if(al)return al;var e,n=eu,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return al=c.slice(e,1<s?1-s:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function qh(){return!1}function Vn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:qh,this.isPropagationStopped=qh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Vn(qa),Hs=_({},qa,{view:0,detail:0}),uv=Vn(Hs),nu,iu,Gs,ll=_({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gs&&(Gs&&e.type==="mousemove"?(nu=e.screenX-Gs.screenX,iu=e.screenY-Gs.screenY):iu=nu=0,Gs=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),Yh=Vn(ll),fv=_({},ll,{dataTransfer:0}),dv=Vn(fv),hv=_({},Hs,{relatedTarget:0}),au=Vn(hv),pv=_({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),mv=Vn(pv),gv=_({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_v=Vn(gv),vv=_({},qa,{data:0}),jh=Vn(vv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sv[e])?!!n[e]:!1}function ru(){return Mv}var Ev=_({},Hs,{key:function(e){if(e.key){var n=xv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bv=Vn(Ev),Tv=_({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=Vn(Tv),Av=_({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Rv=Vn(Av),Cv=_({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),wv=Vn(Cv),Dv=_({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uv=Vn(Dv),Lv=_({},qa,{newState:0,oldState:0}),Nv=Vn(Lv),Ov=[9,13,27,32],su=Fi&&"CompositionEvent"in window,Vs=null;Fi&&"documentMode"in document&&(Vs=document.documentMode);var Pv=Fi&&"TextEvent"in window&&!Vs,Kh=Fi&&(!su||Vs&&8<Vs&&11>=Vs),Qh=" ",Jh=!1;function $h(e,n){switch(e){case"keyup":return Ov.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function Bv(e,n){switch(e){case"compositionend":return tp(n);case"keypress":return n.which!==32?null:(Jh=!0,Qh);case"textInput":return e=n.data,e===Qh&&Jh?null:e;default:return null}}function Iv(e,n){if(Dr)return e==="compositionend"||!su&&$h(e,n)?(e=Wh(),al=eu=ua=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kh&&n.locale!=="ko"?null:n.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zv[e.type]:n==="textarea"}function np(e,n,a,s){Cr?wr?wr.push(s):wr=[s]:Cr=s,n=jl(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var ks=null,Xs=null;function Fv(e){Bg(e,0)}function cl(e){var n=Wa(e);if(Tn(n))return e}function ip(e,n){if(e==="change")return n}var ap=!1;if(Fi){var ou;if(Fi){var lu="oninput"in document;if(!lu){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),lu=typeof rp.oninput=="function"}ou=lu}else ou=!1;ap=ou&&(!document.documentMode||9<document.documentMode)}function sp(){ks&&(ks.detachEvent("onpropertychange",op),Xs=ks=null)}function op(e){if(e.propertyName==="value"&&cl(Xs)){var n=[];np(n,Xs,e,Jc(e)),Xh(Fv,n)}}function Hv(e,n,a){e==="focusin"?(sp(),ks=n,Xs=a,ks.attachEvent("onpropertychange",op)):e==="focusout"&&sp()}function Gv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(Xs)}function Vv(e,n){if(e==="click")return cl(n)}function kv(e,n){if(e==="input"||e==="change")return cl(n)}function Xv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Xv;function Ws(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ke.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cp(e,n){var a=lp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=lp(a)}}function up(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?up(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pi(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Wv=Fi&&"documentMode"in document&&11>=document.documentMode,Ur=null,uu=null,qs=null,fu=!1;function dp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Ur==null||Ur!==pi(s)||(s=Ur,"selectionStart"in s&&cu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),qs&&Ws(qs,s)||(qs=s,s=jl(uu,"onSelect"),0<s.length&&(n=new ol("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ur)))}function Ya(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Lr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},du={},hp={};Fi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function ja(e){if(du[e])return du[e];if(!Lr[e])return e;var n=Lr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return du[e]=n[a];return e}var pp=ja("animationend"),mp=ja("animationiteration"),gp=ja("animationstart"),qv=ja("transitionrun"),Yv=ja("transitionstart"),jv=ja("transitioncancel"),_p=ja("transitionend"),vp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function mi(e,n){vp.set(e,n),R(n,[e])}var xp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=xp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ie(n)},xp.set(e,n),n)}return{value:e,source:n,stack:Ie(n)}}var ai=[],Nr=0,pu=0;function ul(){for(var e=Nr,n=pu=Nr=0;n<e;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&yp(a,c,f)}}function fl(e,n,a,s){ai[Nr++]=e,ai[Nr++]=n,ai[Nr++]=a,ai[Nr++]=s,pu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function mu(e,n,a,s){return fl(e,n,a,s),dl(e)}function Or(e,n){return fl(e,null,null,n),dl(e)}function yp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ct(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function dl(e){if(50<vo)throw vo=0,Mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Pr={};function Zv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,s){return new Zv(e,n,a,s)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,s,c,f){var S=0;if(s=e,typeof e=="function")gu(e)&&(S=1);else if(typeof e=="string")S=Qx(e,a,Ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=jn(31,a,n,c),e.elementType=D,e.lanes=f,e;case T:return Za(a.children,c,f,n);case b:S=8,c|=24;break;case M:return e=jn(12,a,n,c|2),e.elementType=M,e.lanes=f,e;case w:return e=jn(13,a,n,c),e.elementType=w,e.lanes=f,e;case G:return e=jn(19,a,n,c),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case O:S=10;break t;case B:S=9;break t;case L:S=11;break t;case P:S=14;break t;case Q:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=jn(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Za(e,n,a,s){return e=jn(7,e,s,n),e.lanes=a,e}function _u(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function vu(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Br=[],Ir=0,pl=null,ml=0,ri=[],si=0,Ka=null,Gi=1,Vi="";function Qa(e,n){Br[Ir++]=ml,Br[Ir++]=pl,pl=e,ml=n}function Mp(e,n,a){ri[si++]=Gi,ri[si++]=Vi,ri[si++]=Ka,Ka=e;var s=Gi;e=Vi;var c=32-Ct(s)-1;s&=~(1<<c),a+=1;var f=32-Ct(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Gi=1<<32-Ct(n)+c|a<<c|s,Vi=f+e}else Gi=1<<f|a<<c|s,Vi=e}function xu(e){e.return!==null&&(Qa(e,1),Mp(e,1,0))}function yu(e){for(;e===pl;)pl=Br[--Ir],Br[Ir]=null,ml=Br[--Ir],Br[Ir]=null;for(;e===Ka;)Ka=ri[--si],ri[si]=null,Vi=ri[--si],ri[si]=null,Gi=ri[--si],ri[si]=null}var Bn=null,tn=null,Le=!1,Ja=null,Ri=!1,Su=Error(r(519));function $a(e){var n=Error(r(418,""));throw Zs(ii(n,e)),Su}function Ep(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[fn]=e,n[Je]=s,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)be(yo[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Pn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Me(n);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),Rr(n,s.value,s.defaultValue,s.children),Me(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Hg(n.textContent,a)?(s.popover!=null&&(be("beforetoggle",n),be("toggle",n)),s.onScroll!=null&&be("scroll",n),s.onScrollEnd!=null&&be("scrollend",n),s.onClick!=null&&(n.onclick=Zl),n=!0):n=!1,n||$a(e)}function bp(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Bn=Bn.return}}function Ys(e){if(e!==Bn)return!1;if(!Le)return bp(e),Le=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&tn&&$a(e),bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){tn=_i(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}tn=null}}else n===27?(n=tn,Aa(e.type)?(e=Vf,Vf=null,tn=e):tn=n):tn=Bn?_i(e.stateNode.nextSibling):null;return!0}function js(){tn=Bn=null,Le=!1}function Tp(){var e=Ja;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Ja=null),e}function Zs(e){Ja===null?Ja=[e]:Ja.push(e)}var Mu=st(null),tr=null,ki=null;function fa(e,n,a){wt(Mu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Mu.current,bt(Mu)}function Eu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function bu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var F=0;F<n.length;F++)if(A.context===n[F]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Eu(f.return,a,e),s||(S=null);break t}f=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Eu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Ks(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;Yn(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===St.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}c=c.return}e!==null&&bu(n,e,a,s),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function er(e){tr=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Ap(tr,e)}function _l(e,n){return tr===null&&er(e),Ap(e,n)}function Ap(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var Kv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Qv=o.unstable_scheduleCallback,Jv=o.unstable_NormalPriority,dn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new Kv,data:new Map,refCount:0}}function Qs(e){e.refCount--,e.refCount===0&&Qv(Jv,function(){e.controller.abort()})}var Js=null,Au=0,zr=0,Fr=null;function $v(e,n){if(Js===null){var a=Js=[];Au=0,zr=wf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Au++,n.then(Rp,Rp),n}function Rp(){if(--Au===0&&Js!==null){Fr!==null&&(Fr.status="fulfilled");var e=Js;Js=null,zr=0,Fr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function tx(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Cp=I.S;I.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&$v(e,n),Cp!==null&&Cp(e,n)};var nr=st(null);function Ru(){var e=nr.current;return e!==null?e:We.pooledCache}function vl(e,n){n===null?wt(nr,nr.current):wt(nr,n.pool)}function wp(){var e=Ru();return e===null?null:{parent:dn._currentValue,pool:e}}var $s=Error(r(460)),Dp=Error(r(474)),xl=Error(r(542)),Cu={then:function(){}};function Up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yl(){}function Lp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(yl,yl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e;default:if(typeof n.status=="string")n.then(yl,yl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e}throw to=n,$s}}var to=null;function Np(){if(to===null)throw Error(r(459));var e=to;return to=null,e}function Op(e){if(e===$s||e===xl)throw Error(r(483))}var da=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=dl(e),yp(e,null,a),n}return fl(e,s,n,a),dl(e)}function eo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Kt(e,a)}}function Uu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function no(){if(Lu){var e=Fr;if(e!==null)throw e}}function io(e,n,a,s){Lu=!1;var c=e.updateQueue;da=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var F=A,lt=F.next;F.next=null,S===null?f=lt:S.next=lt,S=F;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,A=vt.lastBaseUpdate,A!==S&&(A===null?vt.firstBaseUpdate=lt:A.next=lt,vt.lastBaseUpdate=F))}if(f!==null){var Mt=c.baseState;S=0,vt=lt=F=null,A=f;do{var ft=A.lane&-536870913,dt=ft!==A.lane;if(dt?(Re&ft)===ft:(s&ft)===ft){ft!==0&&ft===zr&&(Lu=!0),vt!==null&&(vt=vt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ce=e,se=A;ft=n;var He=a;switch(se.tag){case 1:if(ce=se.payload,typeof ce=="function"){Mt=ce.call(He,Mt,ft);break t}Mt=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=se.payload,ft=typeof ce=="function"?ce.call(He,Mt,ft):ce,ft==null)break t;Mt=_({},Mt,ft);break t;case 2:da=!0}}ft=A.callback,ft!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=c.callbacks,dt===null?c.callbacks=[ft]:dt.push(ft))}else dt={lane:ft,tag:A.tag,payload:A.payload,callback:A.callback,next:null},vt===null?(lt=vt=dt,F=Mt):vt=vt.next=dt,S|=ft;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;dt=A,A=dt.next,dt.next=null,c.lastBaseUpdate=dt,c.shared.pending=null}}while(!0);vt===null&&(F=Mt),c.baseState=F,c.firstBaseUpdate=lt,c.lastBaseUpdate=vt,f===null&&(c.shared.lanes=0),Ma|=S,e.lanes=S,e.memoizedState=Mt}}function Pp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Bp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pp(a[e],n)}var Hr=st(null),Sl=st(0);function Ip(e,n){e=Qi,wt(Sl,e),wt(Hr,n),Qi=e|n.baseLanes}function Nu(){wt(Sl,Qi),wt(Hr,Hr.current)}function Ou(){Qi=Sl.current,bt(Hr),bt(Sl)}var ma=0,ye=null,ze=null,on=null,Ml=!1,Gr=!1,ir=!1,El=0,ao=0,Vr=null,ex=0;function nn(){throw Error(r(321))}function Pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,s,c,f){return ma=f,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?ym:Sm,ir=!1,f=a(s,c),ir=!1,Gr&&(f=Fp(n,a,s,c)),zp(e),f}function zp(e){I.H=wl;var n=ze!==null&&ze.next!==null;if(ma=0,on=ze=ye=null,Ml=!1,ao=0,Vr=null,n)throw Error(r(300));e===null||_n||(e=e.dependencies,e!==null&&gl(e)&&(_n=!0))}function Fp(e,n,a,s){ye=e;var c=0;do{if(Gr&&(Vr=null),ao=0,Gr=!1,25<=c)throw Error(r(301));if(c+=1,on=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=lx,f=n(a,s)}while(Gr);return f}function nx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?ro(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ye.flags|=1024),n}function Iu(){var e=El!==0;return El=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fu(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}ma=0,on=ze=ye=null,Gr=!1,ao=El=0,Vr=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ye.memoizedState=on=e:on=on.next=e,on}function ln(){if(ze===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=on===null?ye.memoizedState:on.next;if(n!==null)on=n,ze=e;else{if(e===null)throw ye.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},on===null?ye.memoizedState=on=e:on=on.next=e}return on}function Hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(e){var n=ao;return ao+=1,Vr===null&&(Vr=[]),e=Lp(Vr,e,n),n=ye,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?ym:Sm),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ro(e);if(e.$$typeof===O)return Rn(e)}throw Error(r(438,String(e)))}function Gu(e){var n=null,a=ye.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ye.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hu(),ye.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=U;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=ln();return Vu(n,ze,e)}function Vu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=S=null,F=null,lt=n,vt=!1;do{var Mt=lt.lane&-536870913;if(Mt!==lt.lane?(Re&Mt)===Mt:(ma&Mt)===Mt){var ft=lt.revertLane;if(ft===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null}),Mt===zr&&(vt=!0);else if((ma&ft)===ft){lt=lt.next,ft===zr&&(vt=!0);continue}else Mt={lane:0,revertLane:lt.revertLane,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},F===null?(A=F=Mt,S=f):F=F.next=Mt,ye.lanes|=ft,Ma|=ft;Mt=lt.action,ir&&a(f,Mt),f=lt.hasEagerState?lt.eagerState:a(f,Mt)}else ft={lane:Mt,revertLane:lt.revertLane,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},F===null?(A=F=ft,S=f):F=F.next=ft,ye.lanes|=Mt,Ma|=Mt;lt=lt.next}while(lt!==null&&lt!==n);if(F===null?S=f:F.next=A,!Yn(f,e.memoizedState)&&(_n=!0,vt&&(a=Fr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=F,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function ku(e){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Yn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Hp(e,n,a){var s=ye,c=ln(),f=Le;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Yn((ze||c).memoizedState,a);S&&(c.memoizedState=a,_n=!0),c=c.queue;var A=kp.bind(null,s,c,e);if(so(2048,8,A,[e]),c.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,kr(9,Al(),Vp.bind(null,s,c,a,n),null),We===null)throw Error(r(349));f||(ma&124)!==0||Gp(s,n,a)}return a}function Gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ye.updateQueue,n===null?(n=Hu(),ye.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Vp(e,n,a,s){n.value=a,n.getSnapshot=s,Xp(n)&&Wp(e)}function kp(e,n,a){return a(function(){Xp(n)&&Wp(e)})}function Xp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Wp(e){var n=Or(e,2);n!==null&&$n(n,e,2)}function Xu(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),ir){nt(!0);try{a()}finally{nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function qp(e,n,a,s){return e.baseState=a,Vu(e,ze,typeof s=="function"?s:Wi)}function ix(e,n,a,s,c){if(Cl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};I.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Yp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=I.T,S={};I.T=S;try{var A=a(c,s),F=I.S;F!==null&&F(S,A),jp(e,n,A)}catch(lt){Wu(e,n,lt)}finally{I.T=f}}else try{f=a(c,s),jp(e,n,f)}catch(lt){Wu(e,n,lt)}}function jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Zp(e,n,s)},function(s){return Wu(e,n,s)}):Zp(e,n,a)}function Zp(e,n,a){n.status="fulfilled",n.value=a,Kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Yp(e,a)))}function Wu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==s)}e.action=null}function Kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qp(e,n){return n}function Jp(e,n){if(Le){var a=We.formState;if(a!==null){t:{var s=ye;if(Le){if(tn){e:{for(var c=tn,f=Ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=_i(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){tn=_i(c.nextSibling),s=c.data==="F!";break t}}$a(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=s,a=_m.bind(null,ye,s),s.dispatch=a,s=Xu(!1),f=Ku.bind(null,ye,!1,s.queue),s=kn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=ix.bind(null,ye,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function $p(e){var n=ln();return tm(n,ze,e)}function tm(e,n,a){if(n=Vu(e,n,Qp)[0],e=Tl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ro(n)}catch(S){throw S===$s?xl:S}else s=n;n=ln();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ye.flags|=2048,kr(9,Al(),ax.bind(null,c,a),null)),[s,f,e]}function ax(e,n){e.action=n}function em(e){var n=ln(),a=ze;if(a!==null)return tm(n,a,e);ln(),n=n.memoizedState,a=ln();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function kr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ye.updateQueue,n===null&&(n=Hu(),ye.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Al(){return{destroy:void 0,resource:void 0}}function nm(){return ln().memoizedState}function Rl(e,n,a,s){var c=kn();s=s===void 0?null:s,ye.flags|=e,c.memoizedState=kr(1|n,Al(),a,s)}function so(e,n,a,s){var c=ln();s=s===void 0?null:s;var f=c.memoizedState.inst;ze!==null&&s!==null&&Pu(s,ze.memoizedState.deps)?c.memoizedState=kr(n,f,a,s):(ye.flags|=e,c.memoizedState=kr(1|n,f,a,s))}function im(e,n){Rl(8390656,8,e,n)}function am(e,n){so(2048,8,e,n)}function rm(e,n){return so(4,2,e,n)}function sm(e,n){return so(4,4,e,n)}function om(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lm(e,n,a){a=a!=null?a.concat([e]):null,so(4,4,om.bind(null,n,e),a)}function qu(){}function cm(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Pu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function um(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Pu(n,s[1]))return s[0];if(s=e(),ir){nt(!0);try{e()}finally{nt(!1)}}return a.memoizedState=[s,n],s}function Yu(e,n,a){return a===void 0||(ma&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=hg(),ye.lanes|=e,Ma|=e,a)}function fm(e,n,a,s){return Yn(a,n)?a:Hr.current!==null?(e=Yu(e,a,s),Yn(e,n)||(_n=!0),e):(ma&42)===0?(_n=!0,e.memoizedState=a):(e=hg(),ye.lanes|=e,Ma|=e,n)}function dm(e,n,a,s,c){var f=it.p;it.p=f!==0&&8>f?f:8;var S=I.T,A={};I.T=A,Ku(e,!1,n,a);try{var F=c(),lt=I.S;if(lt!==null&&lt(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var vt=tx(F,s);oo(e,n,vt,Jn(e))}else oo(e,n,s,Jn(e))}catch(Mt){oo(e,n,{then:function(){},status:"rejected",reason:Mt},Jn())}finally{it.p=f,I.T=S}}function rx(){}function ju(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=hm(e).queue;dm(e,c,n,Y,a===null?rx:function(){return pm(e),a(s)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function pm(e){var n=hm(e).next.queue;oo(e,n,{},Jn())}function Zu(){return Rn(Ao)}function mm(){return ln().memoizedState}function gm(){return ln().memoizedState}function sx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=ha(a);var s=pa(n,e,a);s!==null&&($n(s,n,a),eo(s,n,a)),n={cache:Tu()},e.payload=n;return}n=n.return}}function ox(e,n,a){var s=Jn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?vm(n,a):(a=mu(e,n,a,s),a!==null&&($n(a,e,s),xm(a,n,s)))}function _m(e,n,a){var s=Jn();oo(e,n,a,s)}function oo(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))vm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(c.hasEagerState=!0,c.eagerState=A,Yn(A,S))return fl(e,n,c,0),We===null&&ul(),!1}catch{}finally{}if(a=mu(e,n,c,s),a!==null)return $n(a,e,s),xm(a,n,s),!0}return!1}function Ku(e,n,a,s){if(s={lane:2,revertLane:wf(),action:s,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(r(479))}else n=mu(e,a,s,2),n!==null&&$n(n,e,2)}function Cl(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function vm(e,n){Gr=Ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function xm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Kt(e,a)}}var wl={readContext:Rn,use:bl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},ym={readContext:Rn,use:bl,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,om.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var s=e();if(ir){nt(!0);try{e()}finally{nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=kn();if(a!==void 0){var c=a(n);if(ir){nt(!0);try{a(n)}finally{nt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=ox.bind(null,ye,e),[s.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,a=_m.bind(null,ye,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,n){var a=kn();return Yu(a,e,n)},useTransition:function(){var e=Xu(!1);return e=dm.bind(null,ye,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ye,c=kn();if(Le){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Re&124)!==0||Gp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,im(kp.bind(null,s,f,e),[e]),s.flags|=2048,kr(9,Al(),Vp.bind(null,s,f,a,n),null),a},useId:function(){var e=kn(),n=We.identifierPrefix;if(Le){var a=Vi,s=Gi;a=(s&~(1<<32-Ct(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=ex++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,ye,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return kn().memoizedState=sx.bind(null,ye)}},Sm={readContext:Rn,use:bl,useCallback:cm,useContext:Rn,useEffect:am,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:Tl,useRef:nm,useState:function(){return Tl(Wi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=ln();return fm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Tl(Wi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Zu,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=ln();return qp(a,ze,e,n)},useMemoCache:Gu,useCacheRefresh:gm},lx={readContext:Rn,use:bl,useCallback:cm,useContext:Rn,useEffect:am,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:ku,useRef:nm,useState:function(){return ku(Wi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=ln();return ze===null?Yu(a,e,n):fm(a,ze.memoizedState,e,n)},useTransition:function(){var e=ku(Wi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Zu,useFormState:em,useActionState:em,useOptimistic:function(e,n){var a=ln();return ze!==null?qp(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:gm},Xr=null,lo=0;function Dl(e){var n=lo;return lo+=1,Xr===null&&(Xr=[]),Lp(Xr,e,n)}function co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Mm(e){var n=e._init;return n(e._payload)}function Em(e){function n(Z,W){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[W],Z.flags|=16):tt.push(W)}}function a(Z,W){if(!e)return null;for(;W!==null;)n(Z,W),W=W.sibling;return null}function s(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function c(Z,W){return Z=Hi(Z,W),Z.index=0,Z.sibling=null,Z}function f(Z,W,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<W?(Z.flags|=67108866,W):tt):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,W,tt,yt){return W===null||W.tag!==6?(W=_u(tt,Z.mode,yt),W.return=Z,W):(W=c(W,tt),W.return=Z,W)}function F(Z,W,tt,yt){var Zt=tt.type;return Zt===T?vt(Z,W,tt.props.children,yt,tt.key):W!==null&&(W.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===Q&&Mm(Zt)===W.type)?(W=c(W,tt.props),co(W,tt),W.return=Z,W):(W=hl(tt.type,tt.key,tt.props,null,Z.mode,yt),co(W,tt),W.return=Z,W)}function lt(Z,W,tt,yt){return W===null||W.tag!==4||W.stateNode.containerInfo!==tt.containerInfo||W.stateNode.implementation!==tt.implementation?(W=vu(tt,Z.mode,yt),W.return=Z,W):(W=c(W,tt.children||[]),W.return=Z,W)}function vt(Z,W,tt,yt,Zt){return W===null||W.tag!==7?(W=Za(tt,Z.mode,yt,Zt),W.return=Z,W):(W=c(W,tt),W.return=Z,W)}function Mt(Z,W,tt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=_u(""+W,Z.mode,tt),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return tt=hl(W.type,W.key,W.props,null,Z.mode,tt),co(tt,W),tt.return=Z,tt;case v:return W=vu(W,Z.mode,tt),W.return=Z,W;case Q:var yt=W._init;return W=yt(W._payload),Mt(Z,W,tt)}if(ct(W)||ut(W))return W=Za(W,Z.mode,tt,null),W.return=Z,W;if(typeof W.then=="function")return Mt(Z,Dl(W),tt);if(W.$$typeof===O)return Mt(Z,_l(Z,W),tt);Ul(Z,W)}return null}function ft(Z,W,tt,yt){var Zt=W!==null?W.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Zt!==null?null:A(Z,W,""+tt,yt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===Zt?F(Z,W,tt,yt):null;case v:return tt.key===Zt?lt(Z,W,tt,yt):null;case Q:return Zt=tt._init,tt=Zt(tt._payload),ft(Z,W,tt,yt)}if(ct(tt)||ut(tt))return Zt!==null?null:vt(Z,W,tt,yt,null);if(typeof tt.then=="function")return ft(Z,W,Dl(tt),yt);if(tt.$$typeof===O)return ft(Z,W,_l(Z,tt),yt);Ul(Z,tt)}return null}function dt(Z,W,tt,yt,Zt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return Z=Z.get(tt)||null,A(W,Z,""+yt,Zt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case y:return Z=Z.get(yt.key===null?tt:yt.key)||null,F(W,Z,yt,Zt);case v:return Z=Z.get(yt.key===null?tt:yt.key)||null,lt(W,Z,yt,Zt);case Q:var Se=yt._init;return yt=Se(yt._payload),dt(Z,W,tt,yt,Zt)}if(ct(yt)||ut(yt))return Z=Z.get(tt)||null,vt(W,Z,yt,Zt,null);if(typeof yt.then=="function")return dt(Z,W,tt,Dl(yt),Zt);if(yt.$$typeof===O)return dt(Z,W,tt,_l(W,yt),Zt);Ul(W,yt)}return null}function ce(Z,W,tt,yt){for(var Zt=null,Se=null,ne=W,le=W=0,xn=null;ne!==null&&le<tt.length;le++){ne.index>le?(xn=ne,ne=null):xn=ne.sibling;var De=ft(Z,ne,tt[le],yt);if(De===null){ne===null&&(ne=xn);break}e&&ne&&De.alternate===null&&n(Z,ne),W=f(De,W,le),Se===null?Zt=De:Se.sibling=De,Se=De,ne=xn}if(le===tt.length)return a(Z,ne),Le&&Qa(Z,le),Zt;if(ne===null){for(;le<tt.length;le++)ne=Mt(Z,tt[le],yt),ne!==null&&(W=f(ne,W,le),Se===null?Zt=ne:Se.sibling=ne,Se=ne);return Le&&Qa(Z,le),Zt}for(ne=s(ne);le<tt.length;le++)xn=dt(ne,Z,le,tt[le],yt),xn!==null&&(e&&xn.alternate!==null&&ne.delete(xn.key===null?le:xn.key),W=f(xn,W,le),Se===null?Zt=xn:Se.sibling=xn,Se=xn);return e&&ne.forEach(function(Ua){return n(Z,Ua)}),Le&&Qa(Z,le),Zt}function se(Z,W,tt,yt){if(tt==null)throw Error(r(151));for(var Zt=null,Se=null,ne=W,le=W=0,xn=null,De=tt.next();ne!==null&&!De.done;le++,De=tt.next()){ne.index>le?(xn=ne,ne=null):xn=ne.sibling;var Ua=ft(Z,ne,De.value,yt);if(Ua===null){ne===null&&(ne=xn);break}e&&ne&&Ua.alternate===null&&n(Z,ne),W=f(Ua,W,le),Se===null?Zt=Ua:Se.sibling=Ua,Se=Ua,ne=xn}if(De.done)return a(Z,ne),Le&&Qa(Z,le),Zt;if(ne===null){for(;!De.done;le++,De=tt.next())De=Mt(Z,De.value,yt),De!==null&&(W=f(De,W,le),Se===null?Zt=De:Se.sibling=De,Se=De);return Le&&Qa(Z,le),Zt}for(ne=s(ne);!De.done;le++,De=tt.next())De=dt(ne,Z,le,De.value,yt),De!==null&&(e&&De.alternate!==null&&ne.delete(De.key===null?le:De.key),W=f(De,W,le),Se===null?Zt=De:Se.sibling=De,Se=De);return e&&ne.forEach(function(cy){return n(Z,cy)}),Le&&Qa(Z,le),Zt}function He(Z,W,tt,yt){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var Zt=tt.key;W!==null;){if(W.key===Zt){if(Zt=tt.type,Zt===T){if(W.tag===7){a(Z,W.sibling),yt=c(W,tt.props.children),yt.return=Z,Z=yt;break t}}else if(W.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===Q&&Mm(Zt)===W.type){a(Z,W.sibling),yt=c(W,tt.props),co(yt,tt),yt.return=Z,Z=yt;break t}a(Z,W);break}else n(Z,W);W=W.sibling}tt.type===T?(yt=Za(tt.props.children,Z.mode,yt,tt.key),yt.return=Z,Z=yt):(yt=hl(tt.type,tt.key,tt.props,null,Z.mode,yt),co(yt,tt),yt.return=Z,Z=yt)}return S(Z);case v:t:{for(Zt=tt.key;W!==null;){if(W.key===Zt)if(W.tag===4&&W.stateNode.containerInfo===tt.containerInfo&&W.stateNode.implementation===tt.implementation){a(Z,W.sibling),yt=c(W,tt.children||[]),yt.return=Z,Z=yt;break t}else{a(Z,W);break}else n(Z,W);W=W.sibling}yt=vu(tt,Z.mode,yt),yt.return=Z,Z=yt}return S(Z);case Q:return Zt=tt._init,tt=Zt(tt._payload),He(Z,W,tt,yt)}if(ct(tt))return ce(Z,W,tt,yt);if(ut(tt)){if(Zt=ut(tt),typeof Zt!="function")throw Error(r(150));return tt=Zt.call(tt),se(Z,W,tt,yt)}if(typeof tt.then=="function")return He(Z,W,Dl(tt),yt);if(tt.$$typeof===O)return He(Z,W,_l(Z,tt),yt);Ul(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,W!==null&&W.tag===6?(a(Z,W.sibling),yt=c(W,tt),yt.return=Z,Z=yt):(a(Z,W),yt=_u(tt,Z.mode,yt),yt.return=Z,Z=yt),S(Z)):a(Z,W)}return function(Z,W,tt,yt){try{lo=0;var Zt=He(Z,W,tt,yt);return Xr=null,Zt}catch(ne){if(ne===$s||ne===xl)throw ne;var Se=jn(29,ne,null,Z.mode);return Se.lanes=yt,Se.return=Z,Se}finally{}}}var Wr=Em(!0),bm=Em(!1),oi=st(null),Ci=null;function ga(e){var n=e.alternate;wt(hn,hn.current&1),wt(oi,e),Ci===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(Ci=e)}function Tm(e){if(e.tag===22){if(wt(hn,hn.current),wt(oi,e),Ci===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ci=e)}}else _a()}function _a(){wt(hn,hn.current),wt(oi,oi.current)}function qi(e){bt(oi),Ci===e&&(Ci=null),bt(hn)}var hn=st(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Qu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=ha(s);c.payload=n,a!=null&&(c.callback=a),n=pa(e,c,s),n!==null&&($n(n,e,s),eo(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=ha(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(e,c,s),n!==null&&($n(n,e,s),eo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=pa(e,s,a),n!==null&&($n(n,e,a),eo(n,e,a))}};function Am(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ws(a,s)||!Ws(c,f):!0}function Rm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function ar(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Cm(e){Nl(e)}function wm(e){console.error(e)}function Dm(e){Nl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Um(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $u(e,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function Lm(e){return e=ha(e),e.tag=3,e}function Nm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Um(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Um(n,a,s),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function cx(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,c,!0),a=oi.current,a!==null){switch(a.tag){case 13:return Ci===null?bf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Af(e,s,c)),!1;case 22:return a.flags|=65536,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Af(e,s,c)),!1}throw Error(r(435,a.tag))}return Af(e,s,c),bf(),!1}if(Le)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Su&&(e=Error(r(422),{cause:s}),Zs(ii(e,a)))):(s!==Su&&(n=Error(r(423),{cause:s}),Zs(ii(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ii(s,a),c=$u(e.stateNode,s,c),Uu(e,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),_o===null?_o=[f]:_o.push(f),en!==4&&(en=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=$u(a.stateNode,s,e),Uu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Lm(c),Nm(c,e,a,s),Uu(a,c),!1}a=a.return}while(a!==null);return!1}var Om=Error(r(461)),_n=!1;function Mn(e,n,a,s){n.child=e===null?bm(n,null,a,s):Wr(n,e.child,a,s)}function Pm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var A in s)A!=="ref"&&(S[A]=s[A])}else S=s;return er(n),s=Bu(e,n,a,S,f,c),A=Iu(),e!==null&&!_n?(zu(e,n,c),Yi(e,n,c)):(Le&&A&&xu(n),n.flags|=1,Mn(e,n,s,c),n.child)}function Bm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Im(e,n,f,s,c)):(e=hl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ws,a(S,s)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Hi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Im(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Ws(f,s)&&e.ref===n.ref)if(_n=!1,n.pendingProps=s=f,lf(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return tf(e,n,a,s,c)}function zm(e,n,a){var s=n.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Fm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,f!==null?f.cachePool:null),f!==null?Ip(n,f):Nu(),Tm(n);else return n.lanes=n.childLanes=536870912,Fm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(vl(n,f.cachePool),Ip(n,f),_a(),n.memoizedState=null):(e!==null&&vl(n,null),Nu(),_a());return Mn(e,n,c,a),n.child}function Fm(e,n,a,s){var c=Ru();return c=c===null?null:{parent:dn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&vl(n,null),Nu(),Tm(n),e!==null&&Ks(e,n,s,!0),null}function Pl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,s,c){return er(n),a=Bu(e,n,a,s,void 0,c),s=Iu(),e!==null&&!_n?(zu(e,n,c),Yi(e,n,c)):(Le&&s&&xu(n),n.flags|=1,Mn(e,n,a,c),n.child)}function Hm(e,n,a,s,c,f){return er(n),n.updateQueue=null,a=Fp(n,s,a,c),zp(e),s=Iu(),e!==null&&!_n?(zu(e,n,f),Yi(e,n,f)):(Le&&s&&xu(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Gm(e,n,a,s,c){if(er(n),n.stateNode===null){var f=Pr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},wu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Pr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Qu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ju.enqueueReplaceState(f,f.state,null),io(n,s,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,F=ar(a,A);f.props=F;var lt=f.context,vt=a.contextType;S=Pr,typeof vt=="object"&&vt!==null&&(S=Rn(vt));var Mt=a.getDerivedStateFromProps;vt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,vt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||lt!==S)&&Rm(n,f,s,S),da=!1;var ft=n.memoizedState;f.state=ft,io(n,s,f,c),no(),lt=n.memoizedState,A||ft!==lt||da?(typeof Mt=="function"&&(Qu(n,a,Mt,s),lt=n.memoizedState),(F=da||Am(n,a,F,s,ft,lt,S))?(vt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=S,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Du(e,n),S=n.memoizedProps,vt=ar(a,S),f.props=vt,Mt=n.pendingProps,ft=f.context,lt=a.contextType,F=Pr,typeof lt=="object"&&lt!==null&&(F=Rn(lt)),A=a.getDerivedStateFromProps,(lt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==Mt||ft!==F)&&Rm(n,f,s,F),da=!1,ft=n.memoizedState,f.state=ft,io(n,s,f,c),no();var dt=n.memoizedState;S!==Mt||ft!==dt||da||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof A=="function"&&(Qu(n,a,A,s),dt=n.memoizedState),(vt=da||Am(n,a,vt,s,ft,dt,F)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(lt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,dt,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,dt,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=dt),f.props=s,f.state=dt,f.context=F,s=vt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Pl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Wr(n,e.child,null,c),n.child=Wr(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Yi(e,n,c),e}function Vm(e,n,a,s){return js(),n.flags|=256,Mn(e,n,a,s),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:wp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function km(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(c?ga(n):_a(),Le){var A=tn,F;if(F=A){t:{for(F=A,A=Ri;F.nodeType!==8;){if(!A){A=null;break t}if(F=_i(F.nextSibling),F===null){A=null;break t}}A=F}A!==null?(n.memoizedState={dehydrated:A,treeContext:Ka!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},F=jn(18,null,null,0),F.stateNode=A,F.return=n,n.child=F,Bn=n,tn=null,F=!0):F=!1}F||$a(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Gf(A)?n.lanes=32:n.lanes=536870912,null;qi(n)}return A=s.children,s=s.fallback,c?(_a(),c=n.mode,A=Bl({mode:"hidden",children:A},c),s=Za(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,c=n.child,c.memoizedState=nf(a),c.childLanes=af(e,S,a),n.memoizedState=ef,s):(ga(n),rf(n,A))}if(F=e.memoizedState,F!==null&&(A=F.dehydrated,A!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(_a(),n.child=e.child,n.flags|=128,n=null):(_a(),c=s.fallback,A=n.mode,s=Bl({mode:"visible",children:s.children},A),c=Za(c,A,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Wr(n,e.child,null,a),s=n.child,s.memoizedState=nf(a),s.childLanes=af(e,S,a),n.memoizedState=ef,n=c);else if(ga(n),Gf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var lt=S.dgst;S=lt,s=Error(r(419)),s.stack="",s.digest=S,Zs({value:s,source:null,stack:null}),n=sf(e,n,a)}else if(_n||Ks(e,n,a,!1),S=(a&e.childLanes)!==0,_n||S){if(S=We,S!==null&&(s=a&-a,s=(s&42)!==0?1:ue(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==F.retryLane))throw F.retryLane=s,Or(e,s),$n(S,e,s),Om;A.data==="$?"||bf(),n=sf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,tn=_i(A.nextSibling),Bn=n,Le=!0,Ja=null,Ri=!1,e!==null&&(ri[si++]=Gi,ri[si++]=Vi,ri[si++]=Ka,Gi=e.id,Vi=e.overflow,Ka=n),n=rf(n,s.children),n.flags|=4096);return n}return c?(_a(),c=s.fallback,A=n.mode,F=e.child,lt=F.sibling,s=Hi(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,lt!==null?c=Hi(lt,c):(c=Za(c,A,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,A=e.child.memoizedState,A===null?A=nf(a):(F=A.cachePool,F!==null?(lt=dn._currentValue,F=F.parent!==lt?{parent:lt,pool:lt}:F):F=wp(),A={baseLanes:A.baseLanes|a,cachePool:F}),c.memoizedState=A,c.childLanes=af(e,S,a),n.memoizedState=ef,s):(ga(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=jn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sf(e,n,a){return Wr(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Xm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Eu(e.return,n,a)}function of(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Wm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Mn(e,n,s.children,a),s=hn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xm(e,a,n);else if(e.tag===19)Xm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(wt(hn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ll(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}of(n,!0,a,null,f);break;case"together":of(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function ux(e,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),fa(n,dn,e.memoizedState.cache),js();break;case 27:case 5:Qt(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?km(e,n,a):(ga(n),e=Yi(e,n,a),e!==null?e.sibling:null);ga(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ks(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Wm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),wt(hn,hn.current),s)break;return null;case 22:case 23:return n.lanes=0,zm(e,n,a);case 24:fa(n,dn,e.memoizedState.cache)}return Yi(e,n,a)}function qm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return _n=!1,ux(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Le&&(n.flags&1048576)!==0&&Mp(n,ml,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")gu(s)?(e=ar(s,e),n.tag=1,n=Gm(null,n,s,e,a)):(n.tag=0,n=tf(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===L){n.tag=11,n=Pm(null,n,s,e,a);break t}else if(c===P){n.tag=14,n=Bm(null,n,s,e,a);break t}}throw n=_t(s)||s,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ar(s,n.pendingProps),Gm(e,n,s,c,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Du(e,n),io(n,s,null,a);var S=n.memoizedState;if(s=S.cache,fa(n,dn,s),s!==f.cache&&bu(n,[dn],a,!0),no(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vm(e,n,s,a);break t}else if(s!==c){c=ii(Error(r(424)),n),Zs(c),n=Vm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=_i(e.firstChild),Bn=n,Le=!0,Ja=null,Ri=!0,a=bm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(js(),s===c){n=Yi(e,n,a);break t}Mn(e,n,s,a)}n=n.child}return n;case 26:return Pl(e,n),e===null?(a=Kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,e=n.pendingProps,s=Kl(ot.current).createElement(a),s[fn]=n,s[Je]=e,bn(s,a,e),sn(s),n.stateNode=s):n.memoizedState=Kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Le&&(s=n.stateNode=Yg(n.type,n.pendingProps,ot.current),Bn=n,Ri=!0,c=tn,Aa(n.type)?(Vf=c,tn=_i(s.firstChild)):tn=c),Mn(e,n,n.pendingProps.children,a),Pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((c=s=tn)&&(s=zx(s,n.type,n.pendingProps,Ri),s!==null?(n.stateNode=s,Bn=n,tn=_i(s.firstChild),Ri=!1,c=!0):c=!1),c||$a(n)),Qt(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,zf(c,f)?s=null:S!==null&&zf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Bu(e,n,nx,null,null,a),Ao._currentValue=c),Pl(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&Le&&((e=a=tn)&&(a=Fx(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,Bn=n,tn=null,e=!0):e=!1),e||$a(n)),null;case 13:return km(e,n,a);case 4:return Ot(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Wr(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return Pm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),Mn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,er(n),c=Rn(c),s=s(c),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return Bm(e,n,n.type,n.pendingProps,a);case 15:return Im(e,n,n.type,n.pendingProps,a);case 19:return Wm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Bl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return zm(e,n,a);case 24:return er(n),s=Rn(dn),e===null?(c=Ru(),c===null&&(c=We,f=Tu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},wu(n),fa(n,dn,c)):((e.lanes&a)!==0&&(Du(e,n),io(n,null,null,a),no()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,dn,s)):(s=f.cache,fa(n,dn,s),s!==c.cache&&bu(n,[dn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(e){e.flags|=4}function Ym(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!e_(n)){if(n=oi.current,n!==null&&((Re&4194048)===Re?Ci!==null:(Re&62914560)!==Re&&(Re&536870912)===0||n!==Ci))throw to=Cu,Dp;e.flags|=8192}}function Il(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,Zr|=n)}function uo(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function fx(e,n,a){var s=n.pendingProps;switch(yu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Xi(dn),ee(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ys(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tp())),Qe(n),null;case 26:return a=n.memoizedState,e===null?(ji(n),a!==null?(Qe(n),Ym(n,a)):(Qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ji(n),Qe(n),Ym(n,a)):(Qe(n),n.flags&=-16777217):(e.memoizedProps!==s&&ji(n),Qe(n),n.flags&=-16777217),null;case 27:de(n),a=ot.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}e=Ft.current,Ys(n)?Ep(n):(e=Yg(c,s,a),n.stateNode=e,ji(n))}return Qe(n),null;case 5:if(de(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(e=Ft.current,Ys(n))Ep(n);else{switch(c=Kl(ot.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[fn]=n,e[Je]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(bn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(n)}}return Qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ot.current,Ys(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Hg(e.nodeValue,a)),e||$a(n)}else e=Kl(e).createTextNode(s),e[fn]=n,n.stateNode=e}return Qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ys(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[fn]=n}else js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),c=!1}else c=Tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Qe(n),null;case 4:return ee(),e===null&&Nf(n.stateNode.containerInfo),Qe(n),null;case 10:return Xi(n.type),Qe(n),null;case 19:if(bt(hn),c=n.memoizedState,c===null)return Qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)uo(c,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ll(e),f!==null){for(n.flags|=128,uo(c,!1),e=f.updateQueue,n.updateQueue=e,Il(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return wt(hn,hn.current&1|2),n.child}e=e.sibling}c.tail!==null&&kt()>Hl&&(n.flags|=128,s=!0,uo(c,!1),n.lanes=4194304)}else{if(!s)if(e=Ll(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Il(n,e),uo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Le)return Qe(n),null}else 2*kt()-c.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,s=!0,uo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=kt(),n.sibling=null,e=hn.current,wt(hn,s?e&1|2:e&1),n):(Qe(n),null);case 22:case 23:return qi(n),Ou(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&bt(nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(dn),Qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function dx(e,n){switch(yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(dn),ee(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));js()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return bt(hn),null;case 4:return ee(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),Ou(),e!==null&&bt(nr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(dn),null;case 25:return null;default:return null}}function jm(e,n){switch(yu(n),n.tag){case 3:Xi(dn),ee();break;case 26:case 27:case 5:de(n);break;case 4:ee();break;case 13:qi(n);break;case 19:bt(hn);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),Ou(),e!==null&&bt(nr);break;case 24:Xi(dn)}}function fo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(A){Xe(n,n.return,A)}}function va(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var F=a,lt=A;try{lt()}catch(vt){Xe(c,F,vt)}}}s=s.next}while(s!==f)}}catch(vt){Xe(n,n.return,vt)}}function Zm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Bp(n,a)}catch(s){Xe(e,e.return,s)}}}function Km(e,n,a){a.props=ar(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Xe(e,n,s)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Xe(e,n,c)}}function wi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Xe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Xe(e,n,c)}else a.current=null}function Qm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Xe(e,e.return,c)}}function cf(e,n,a){try{var s=e.stateNode;Nx(s,e.type,a,n),s[Je]=n}catch(c){Xe(e,e.return,c)}}function Jm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zl));else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function zl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}function $m(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,s,a),n[fn]=e,n[Je]=a}catch(f){Xe(e,e.return,f)}}var Zi=!1,an=!1,df=!1,tg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function hx(e,n){if(e=e.containerInfo,Bf=nc,e=fp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,F=-1,lt=0,vt=0,Mt=e,ft=null;e:for(;;){for(var dt;Mt!==a||c!==0&&Mt.nodeType!==3||(A=S+c),Mt!==f||s!==0&&Mt.nodeType!==3||(F=S+s),Mt.nodeType===3&&(S+=Mt.nodeValue.length),(dt=Mt.firstChild)!==null;)ft=Mt,Mt=dt;for(;;){if(Mt===e)break e;if(ft===a&&++lt===c&&(A=S),ft===f&&++vt===s&&(F=S),(dt=Mt.nextSibling)!==null)break;Mt=ft,ft=Mt.parentNode}Mt=dt}a=A===-1||F===-1?null:{start:A,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},nc=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ce=ar(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ce,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(se){Xe(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function eg(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),s&4&&fo(5,a);break;case 1:if(xa(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Xe(a,a.return,S)}else{var c=ar(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Xe(a,a.return,S)}}s&64&&Zm(a),s&512&&ho(a,a.return);break;case 3:if(xa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bp(e,n)}catch(S){Xe(a,a.return,S)}}break;case 27:n===null&&s&4&&$m(a);case 26:case 5:xa(e,a),n===null&&s&4&&Qm(a),s&512&&ho(a,a.return);break;case 12:xa(e,a);break;case 13:xa(e,a),s&4&&ag(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Mx.bind(null,a),Hx(e,a))));break;case 22:if(s=a.memoizedState!==null||Zi,!s){n=n!==null&&n.memoizedState!==null||an,c=Zi;var f=an;Zi=s,(an=n)&&!f?ya(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),Zi=c,an=f}break;case 30:break;default:xa(e,a)}}function ng(e){var n=e.alternate;n!==null&&(e.alternate=null,ng(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ar(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Xn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)ig(e,n,a),a=a.sibling}function ig(e,n,a){if($&&typeof $.onCommitFiberUnmount=="function")try{$.onCommitFiberUnmount(K,a)}catch{}switch(a.tag){case 26:an||wi(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||wi(a,n);var s=Ze,c=Xn;Aa(a.type)&&(Ze=a.stateNode,Xn=!1),Ki(e,n,a),Mo(a.stateNode),Ze=s,Xn=c;break;case 5:an||wi(a,n);case 6:if(s=Ze,c=Xn,Ze=null,Ki(e,n,a),Ze=s,Xn=c,Ze!==null)if(Xn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Xe(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Xe(a,n,f)}break;case 18:Ze!==null&&(Xn?(e=Ze,Wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Do(e)):Wg(Ze,a.stateNode));break;case 4:s=Ze,c=Xn,Ze=a.stateNode.containerInfo,Xn=!0,Ki(e,n,a),Ze=s,Xn=c;break;case 0:case 11:case 14:case 15:an||va(2,a,n),an||va(4,a,n),Ki(e,n,a);break;case 1:an||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Km(a,n,s)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:an=(s=an)||a.memoizedState!==null,Ki(e,n,a),an=s;break;default:Ki(e,n,a)}}function ag(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Do(e)}catch(a){Xe(n,n.return,a)}}function px(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new tg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new tg),n;default:throw Error(r(435,e.tag))}}function hf(e,n){var a=px(e);n.forEach(function(s){var c=Ex.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Zn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Aa(A.type)){Ze=A.stateNode,Xn=!1;break t}break;case 5:Ze=A.stateNode,Xn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Xn=!0;break t}A=A.return}if(Ze===null)throw Error(r(160));ig(f,S,c),Ze=null,Xn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)rg(n,e),n=n.sibling}var gi=null;function rg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(n,e),Kn(e),s&4&&(va(3,e,e.return),fo(3,e),va(5,e,e.return));break;case 1:Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),s&64&&Zi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=gi;if(Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ai]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,s,a),f[fn]=e,sn(f),s=f;break t;case"link":var S=$g("link","href",c).get(s+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=$g("meta","content",c).get(s+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[fn]=e,sn(f),s=f}e.stateNode=s}else t_(c,e.type,e.stateNode);else e.stateNode=Jg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?t_(c,e.type,e.stateNode):Jg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),a!==null&&s&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),e.flags&32){c=e.stateNode;try{Gn(c,"")}catch(dt){Xe(e,e.return,dt)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,cf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(df=!0);break;case 6:if(Zn(n,e),Kn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(dt){Xe(e,e.return,dt)}}break;case 3:if($l=null,c=gi,gi=Ql(n.containerInfo),Zn(n,e),gi=c,Kn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Do(n.containerInfo)}catch(dt){Xe(e,e.return,dt)}df&&(df=!1,sg(e));break;case 4:s=gi,gi=Ql(e.stateNode.containerInfo),Zn(n,e),Kn(e),gi=s;break;case 12:Zn(n,e),Kn(e);break;case 13:Zn(n,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=kt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 22:c=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,lt=Zi,vt=an;if(Zi=lt||c,an=vt||F,Zn(n,e),an=vt,Zi=lt,Kn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||Zi||an||rr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=F.stateNode;var Mt=F.memoizedProps.style,ft=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;A.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch(dt){Xe(F,F.return,dt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(dt){Xe(F,F.return,dt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,hf(e,a))));break;case 19:Zn(n,e),Kn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 30:break;case 21:break;default:Zn(n,e),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Jm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(e);zl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Gn(S,""),a.flags&=-33);var A=uf(e);zl(e,A,S);break;case 3:case 4:var F=a.stateNode.containerInfo,lt=uf(e);ff(e,lt,F);break;default:throw Error(r(161))}}catch(vt){Xe(e,e.return,vt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eg(e,n.alternate,n),n=n.sibling}function rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),rr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Km(n,n.return,a),rr(n);break;case 27:Mo(n.stateNode);case 26:case 5:wi(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ya(c,f,a),fo(4,f);break;case 1:if(ya(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(lt){Xe(s,s.return,lt)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Pp(F[c],A)}catch(lt){Xe(s,s.return,lt)}}a&&S&64&&Zm(f),ho(f,f.return);break;case 27:$m(f);case 26:case 5:ya(c,f,a),a&&s===null&&S&4&&Qm(f),ho(f,f.return);break;case 12:ya(c,f,a);break;case 13:ya(c,f,a),a&&S&4&&ag(c,f);break;case 22:f.memoizedState===null&&ya(c,f,a),ho(f,f.return);break;case 30:break;default:ya(c,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qs(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qs(e))}function Di(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)og(e,n,a,s),n=n.sibling}function og(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,s),c&2048&&fo(9,n);break;case 1:Di(e,n,a,s);break;case 3:Di(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qs(e)));break;case 12:if(c&2048){Di(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Xe(n,n.return,F)}}else Di(e,n,a,s);break;case 13:Di(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Di(e,n,a,s):po(e,n):f._visibility&2?Di(e,n,a,s):(f._visibility|=2,qr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&pf(S,n);break;case 24:Di(e,n,a,s),c&2048&&mf(n.alternate,n);break;default:Di(e,n,a,s)}}function qr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,A=a,F=s,lt=S.flags;switch(S.tag){case 0:case 11:case 15:qr(f,S,A,F,c),fo(8,S);break;case 23:break;case 22:var vt=S.stateNode;S.memoizedState!==null?vt._visibility&2?qr(f,S,A,F,c):po(f,S):(vt._visibility|=2,qr(f,S,A,F,c)),c&&lt&2048&&pf(S.alternate,S);break;case 24:qr(f,S,A,F,c),c&&lt&2048&&mf(S.alternate,S);break;default:qr(f,S,A,F,c)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:po(a,s),c&2048&&pf(s.alternate,s);break;case 24:po(a,s),c&2048&&mf(s.alternate,s);break;default:po(a,s)}n=n.sibling}}var mo=8192;function Yr(e){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 26:Yr(e),e.flags&mo&&e.memoizedState!==null&&$x(gi,e.memoizedState,e.memoizedProps);break;case 5:Yr(e);break;case 3:case 4:var n=gi;gi=Ql(e.stateNode.containerInfo),Yr(e),gi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=mo,mo=16777216,Yr(e),mo=n):Yr(e));break;default:Yr(e)}}function cg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,fg(s,e)}cg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ug(e),e=e.sibling}function ug(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&va(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):go(e);break;default:go(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,fg(s,e)}cg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function fg(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,vn=s;else t:for(a=e;vn!==null;){s=vn;var c=s.sibling,f=s.return;if(ng(s),s===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var mx={getCacheForType:function(e){var n=Rn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},gx=typeof WeakMap=="function"?WeakMap:Map,Pe=0,We=null,Ee=null,Re=0,Be=0,Qn=null,Sa=!1,jr=!1,gf=!1,Qi=0,en=0,Ma=0,sr=0,_f=0,li=0,Zr=0,_o=null,Wn=null,vf=!1,xf=0,Hl=1/0,Gl=null,Ea=null,En=0,ba=null,Kr=null,Qr=0,yf=0,Sf=null,dg=null,vo=0,Mf=null;function Jn(){if((Pe&2)!==0&&Re!==0)return Re&-Re;if(I.T!==null){var e=zr;return e!==0?e:wf()}return Ce()}function hg(){li===0&&(li=(Re&536870912)===0||Le?q():536870912);var e=oi.current;return e!==null&&(e.flags|=32),li}function $n(e,n,a){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Ta(e,Re,li,!1)),Wt(e,a),((Pe&2)===0||e!==We)&&(e===We&&((Pe&2)===0&&(sr|=a),en===4&&Ta(e,Re,li,!1)),Ui(e))}function pg(e,n,a){if((Pe&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Bt(e,n),c=s?xx(e,n):Tf(e,n,!0),f=s;do{if(c===0){jr&&!s&&Ta(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!_x(a)){c=Tf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;c=_o;var F=A.current.memoizedState.isDehydrated;if(F&&(Jr(A,S).flags|=256),S=Tf(A,S,!1),S!==2){if(gf&&!F){A.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=Wn,Wn=c,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Jr(e,0),Ta(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,li,!Sa);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=xf+300-kt(),10<c)){if(Ta(s,n,li,!Sa),jt(s,0,!0)!==0)break t;s.timeoutHandle=kg(mg.bind(null,s,a,Wn,Gl,vf,n,li,sr,Zr,Sa,f,2,-0,0),c);break t}mg(s,a,Wn,Gl,vf,n,li,sr,Zr,Sa,f,0,-0,0)}}break}while(!0);Ui(e)}function mg(e,n,a,s,c,f,S,A,F,lt,vt,Mt,ft,dt){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(To={stylesheets:null,count:0,unsuspend:Jx},lg(n),Mt=ty(),Mt!==null)){e.cancelPendingCommit=Mt(Mg.bind(null,e,n,f,a,s,c,S,A,F,vt,1,ft,dt)),Ta(e,f,S,!lt);return}Mg(e,n,f,a,s,c,S,A,F)}function _x(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(e,n,a,s){n&=~_f,n&=~sr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Ct(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&Et(e,a,n)}function Vl(){return(Pe&6)===0?(xo(0),!1):!0}function Ef(){if(Ee!==null){if(Be===0)var e=Ee.return;else e=Ee,ki=tr=null,Fu(e),Xr=null,lo=0,e=Ee;for(;e!==null;)jm(e.alternate,e),e=e.return;Ee=null}}function Jr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Px(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ef(),We=e,Ee=a=Hi(e.current,null),Re=n,Be=0,Qn=null,Sa=!1,jr=Bt(e,n),gf=!1,Zr=li=_f=sr=Ma=en=0,Wn=_o=null,vf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Ct(s),f=1<<c;n|=e[c],s&=~f}return Qi=n,ul(),a}function gg(e,n){ye=null,I.H=wl,n===$s||n===xl?(n=Np(),Be=3):n===Dp?(n=Np(),Be=4):Be=n===Om?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,Ee===null&&(en=1,Ol(e,ii(n,e.current)))}function _g(){var e=I.H;return I.H=wl,e===null?wl:e}function vg(){var e=I.A;return I.A=mx,e}function bf(){en=4,Sa||(Re&4194048)!==Re&&oi.current!==null||(jr=!0),(Ma&134217727)===0&&(sr&134217727)===0||We===null||Ta(We,Re,li,!1)}function Tf(e,n,a){var s=Pe;Pe|=2;var c=_g(),f=vg();(We!==e||Re!==n)&&(Gl=null,Jr(e,n)),n=!1;var S=en;t:do try{if(Be!==0&&Ee!==null){var A=Ee,F=Qn;switch(Be){case 8:Ef(),S=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var lt=Be;if(Be=0,Qn=null,$r(e,A,F,lt),a&&jr){S=0;break t}break;default:lt=Be,Be=0,Qn=null,$r(e,A,F,lt)}}vx(),S=en;break}catch(vt){gg(e,vt)}while(!0);return n&&e.shellSuspendCounter++,ki=tr=null,Pe=s,I.H=c,I.A=f,Ee===null&&(We=null,Re=0,ul()),S}function vx(){for(;Ee!==null;)xg(Ee)}function xx(e,n){var a=Pe;Pe|=2;var s=_g(),c=vg();We!==e||Re!==n?(Gl=null,Hl=kt()+500,Jr(e,n)):jr=Bt(e,n);t:do try{if(Be!==0&&Ee!==null){n=Ee;var f=Qn;e:switch(Be){case 1:Be=0,Qn=null,$r(e,n,f,1);break;case 2:case 9:if(Up(f)){Be=0,Qn=null,yg(n);break}n=function(){Be!==2&&Be!==9||We!==e||(Be=7),Ui(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Up(f)?(Be=0,Qn=null,yg(n)):(Be=0,Qn=null,$r(e,n,f,7));break;case 5:var S=null;switch(Ee.tag){case 26:S=Ee.memoizedState;case 5:case 27:var A=Ee;if(!S||e_(S)){Be=0,Qn=null;var F=A.sibling;if(F!==null)Ee=F;else{var lt=A.return;lt!==null?(Ee=lt,kl(lt)):Ee=null}break e}}Be=0,Qn=null,$r(e,n,f,5);break;case 6:Be=0,Qn=null,$r(e,n,f,6);break;case 8:Ef(),en=6;break t;default:throw Error(r(462))}}yx();break}catch(vt){gg(e,vt)}while(!0);return ki=tr=null,I.H=s,I.A=c,Pe=a,Ee!==null?0:(We=null,Re=0,ul(),en)}function yx(){for(;Ee!==null&&!fe();)xg(Ee)}function xg(e){var n=qm(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?kl(e):Ee=n}function yg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hm(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=Hm(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Fu(n);default:jm(a,n),n=Ee=Sp(n,Qi),n=qm(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?kl(e):Ee=n}function $r(e,n,a,s){ki=tr=null,Fu(n),Xr=null,lo=0;var c=n.return;try{if(cx(e,c,n,a,Re)){en=1,Ol(e,ii(a,e.current)),Ee=null;return}}catch(f){if(c!==null)throw Ee=c,f;en=1,Ol(e,ii(a,e.current)),Ee=null;return}n.flags&32768?(Le||s===1?e=!0:jr||(Re&536870912)!==0?e=!1:(Sa=e=!0,(s===2||s===9||s===3||s===6)&&(s=oi.current,s!==null&&s.tag===13&&(s.flags|=16384))),Sg(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){Sg(n,Sa);return}e=n.return;var a=fx(n.alternate,n,Qi);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);en===0&&(en=5)}function Sg(e,n){do{var a=dx(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);en=6,Ee=null}function Mg(e,n,a,s,c,f,S,A,F){e.cancelPendingCommit=null;do Xl();while(En!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pu,Dt(e,a,f,S,A,F),e===We&&(Ee=We=null,Re=0),Kr=n,ba=e,Qr=a,yf=f,Sf=c,dg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bx(At,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=I.T,I.T=null,c=it.p,it.p=2,S=Pe,Pe|=4;try{hx(e,n,a)}finally{Pe=S,it.p=c,I.T=s}}En=1,Eg(),bg(),Tg()}}function Eg(){if(En===1){En=0;var e=ba,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var s=it.p;it.p=2;var c=Pe;Pe|=4;try{rg(n,e);var f=If,S=fp(e.containerInfo),A=f.focusedElem,F=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&up(A.ownerDocument.documentElement,A)){if(F!==null&&cu(A)){var lt=F.start,vt=F.end;if(vt===void 0&&(vt=lt),"selectionStart"in A)A.selectionStart=lt,A.selectionEnd=Math.min(vt,A.value.length);else{var Mt=A.ownerDocument||document,ft=Mt&&Mt.defaultView||window;if(ft.getSelection){var dt=ft.getSelection(),ce=A.textContent.length,se=Math.min(F.start,ce),He=F.end===void 0?se:Math.min(F.end,ce);!dt.extend&&se>He&&(S=He,He=se,se=S);var Z=cp(A,se),W=cp(A,He);if(Z&&W&&(dt.rangeCount!==1||dt.anchorNode!==Z.node||dt.anchorOffset!==Z.offset||dt.focusNode!==W.node||dt.focusOffset!==W.offset)){var tt=Mt.createRange();tt.setStart(Z.node,Z.offset),dt.removeAllRanges(),se>He?(dt.addRange(tt),dt.extend(W.node,W.offset)):(tt.setEnd(W.node,W.offset),dt.addRange(tt))}}}}for(Mt=[],dt=A;dt=dt.parentNode;)dt.nodeType===1&&Mt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Mt.length;A++){var yt=Mt[A];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}nc=!!Bf,If=Bf=null}finally{Pe=c,it.p=s,I.T=a}}e.current=n,En=2}}function bg(){if(En===2){En=0;var e=ba,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var s=it.p;it.p=2;var c=Pe;Pe|=4;try{eg(e,n.alternate,n)}finally{Pe=c,it.p=s,I.T=a}}En=3}}function Tg(){if(En===4||En===3){En=0,re();var e=ba,n=Kr,a=Qr,s=dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Kr=ba=null,Ag(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ea=null),Oe(a),n=n.stateNode,$&&typeof $.onCommitFiberRoot=="function")try{$.onCommitFiberRoot(K,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=I.T,c=it.p,it.p=2,I.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var A=s[S];f(A.value,{componentStack:A.stack})}}finally{I.T=n,it.p=c}}(Qr&3)!==0&&Xl(),Ui(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Mf?vo++:(vo=0,Mf=e):vo=0,xo(0)}}function Ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qs(n)))}function Xl(e){return Eg(),bg(),Tg(),Rg()}function Rg(){if(En!==5)return!1;var e=ba,n=yf;yf=0;var a=Oe(Qr),s=I.T,c=it.p;try{it.p=32>a?32:a,I.T=null,a=Sf,Sf=null;var f=ba,S=Qr;if(En=0,Kr=ba=null,Qr=0,(Pe&6)!==0)throw Error(r(331));var A=Pe;if(Pe|=4,ug(f.current),og(f,f.current,S,a),Pe=A,xo(0,!1),$&&typeof $.onPostCommitFiberRoot=="function")try{$.onPostCommitFiberRoot(K,f)}catch{}return!0}finally{it.p=c,I.T=s,Ag(e,n)}}function Cg(e,n,a){n=ii(a,n),n=$u(e.stateNode,n,2),e=pa(e,n,2),e!==null&&(Wt(e,2),Ui(e))}function Xe(e,n,a){if(e.tag===3)Cg(e,e,a);else for(;n!==null;){if(n.tag===3){Cg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){e=ii(a,e),a=Lm(2),s=pa(n,a,2),s!==null&&(Nm(a,s,n,e),Wt(s,2),Ui(s));break}}n=n.return}}function Af(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new gx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(gf=!0,c.add(a),e=Sx.bind(null,e,n,a),n.then(e,e))}function Sx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Re&a)===a&&(en===4||en===3&&(Re&62914560)===Re&&300>kt()-xf?(Pe&2)===0&&Jr(e,0):_f|=a,Zr===Re&&(Zr=0)),Ui(e)}function wg(e,n){n===0&&(n=Lt()),e=Or(e,n),e!==null&&(Wt(e,n),Ui(e))}function Mx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wg(e,a)}function Ex(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),wg(e,a)}function bx(e,n){return V(e,n)}var Wl=null,ts=null,Rf=!1,ql=!1,Cf=!1,or=0;function Ui(e){e!==ts&&e.next===null&&(ts===null?Wl=ts=e:ts=ts.next=e),ql=!0,Rf||(Rf=!0,Ax())}function xo(e,n){if(!Cf&&ql){Cf=!0;do for(var a=!1,s=Wl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Ct(42|e)+1)-1,f&=c&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ng(s,f))}else f=Re,f=jt(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Bt(s,f)||(a=!0,Ng(s,f));s=s.next}while(a);Cf=!1}}function Tx(){Dg()}function Dg(){ql=Rf=!1;var e=0;or!==0&&(Ox()&&(e=or),or=0);for(var n=kt(),a=null,s=Wl;s!==null;){var c=s.next,f=Ug(s,n);f===0?(s.next=null,a===null?Wl=c:a.next=c,c===null&&(ts=a)):(a=s,(e!==0||(f&3)!==0)&&(ql=!0)),s=c}xo(e)}function Ug(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Ct(f),A=1<<S,F=c[S];F===-1?((A&a)===0||(A&s)!==0)&&(c[S]=he(A,n)):F<=n&&(e.expiredLanes|=A),f&=~A}if(n=We,a=Re,a=jt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ne(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Ne(s),Oe(a)){case 2:case 8:a=et;break;case 32:a=At;break;case 268435456:a=C;break;default:a=At}return s=Lg.bind(null,e),a=V(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Ne(s),e.callbackPriority=2,e.callbackNode=null,2}function Lg(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var s=Re;return s=jt(e,e===We?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(pg(e,s,n),Ug(e,kt()),e.callbackNode!=null&&e.callbackNode===a?Lg.bind(null,e):null)}function Ng(e,n){if(Xl())return null;pg(e,n,!0)}function Ax(){Bx(function(){(Pe&6)!==0?V(at,Tx):Dg()})}function wf(){return or===0&&(or=q()),or}function Og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function Pg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Rx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Og((c[Je]||null).action),S=s.submitter;S&&(n=(n=S[Je]||null)?Og(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new ol("action","action",null,s,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(or!==0){var F=S?Pg(c,S):new FormData(c);ju(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(A.preventDefault(),F=S?Pg(c,S):new FormData(c),ju(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var Df=0;Df<hu.length;Df++){var Uf=hu[Df],Cx=Uf.toLowerCase(),wx=Uf[0].toUpperCase()+Uf.slice(1);mi(Cx,"on"+wx)}mi(pp,"onAnimationEnd"),mi(mp,"onAnimationIteration"),mi(gp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(qv,"onTransitionRun"),mi(Yv,"onTransitionStart"),mi(jv,"onTransitionCancel"),mi(_p,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function Bg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var A=s[S],F=A.instance,lt=A.currentTarget;if(A=A.listener,F!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=lt;try{f(c)}catch(vt){Nl(vt)}c.currentTarget=null,f=F}else for(S=0;S<s.length;S++){if(A=s[S],F=A.instance,lt=A.currentTarget,A=A.listener,F!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=lt;try{f(c)}catch(vt){Nl(vt)}c.currentTarget=null,f=F}}}}function be(e,n){var a=n[br];a===void 0&&(a=n[br]=new Set);var s=e+"__bubble";a.has(s)||(Ig(n,e,2,!1),a.add(s))}function Lf(e,n,a){var s=0;n&&(s|=4),Ig(a,e,s,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Yl]){e[Yl]=!0,el.forEach(function(a){a!=="selectionchange"&&(Dx.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Lf("selectionchange",!1,n))}}function Ig(e,n,a,s){switch(o_(n)){case 2:var c=iy;break;case 8:c=ay;break;default:c=Yf}a=c.bind(null,n,a,e),c=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Of(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var A=s.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=s.return;S!==null;){var F=S.tag;if((F===3||F===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=zi(A),S===null)return;if(F=S.tag,F===5||F===6||F===26||F===27){s=f=S;continue t}A=A.parentNode}}s=s.return}Xh(function(){var lt=f,vt=Jc(a),Mt=[];t:{var ft=vp.get(e);if(ft!==void 0){var dt=ol,ce=e;switch(e){case"keypress":if(rl(a)===0)break t;case"keydown":case"keyup":dt=bv;break;case"focusin":ce="focus",dt=au;break;case"focusout":ce="blur",dt=au;break;case"beforeblur":case"afterblur":dt=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Rv;break;case pp:case mp:case gp:dt=mv;break;case _p:dt=wv;break;case"scroll":case"scrollend":dt=uv;break;case"wheel":dt=Uv;break;case"copy":case"cut":case"paste":dt=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Zh;break;case"toggle":case"beforetoggle":dt=Nv}var se=(n&4)!==0,He=!se&&(e==="scroll"||e==="scrollend"),Z=se?ft!==null?ft+"Capture":null:ft;se=[];for(var W=lt,tt;W!==null;){var yt=W;if(tt=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||tt===null||Z===null||(yt=zs(W,Z),yt!=null&&se.push(So(W,yt,tt))),He)break;W=W.return}0<se.length&&(ft=new dt(ft,ce,null,a,vt),Mt.push({event:ft,listeners:se}))}}if((n&7)===0){t:{if(ft=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ft&&a!==Qc&&(ce=a.relatedTarget||a.fromElement)&&(zi(ce)||ce[Ti]))break t;if((dt||ft)&&(ft=vt.window===vt?vt:(ft=vt.ownerDocument)?ft.defaultView||ft.parentWindow:window,dt?(ce=a.relatedTarget||a.toElement,dt=lt,ce=ce?zi(ce):null,ce!==null&&(He=u(ce),se=ce.tag,ce!==He||se!==5&&se!==27&&se!==6)&&(ce=null)):(dt=null,ce=lt),dt!==ce)){if(se=Yh,yt="onMouseLeave",Z="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(se=Zh,yt="onPointerLeave",Z="onPointerEnter",W="pointer"),He=dt==null?ft:Wa(dt),tt=ce==null?ft:Wa(ce),ft=new se(yt,W+"leave",dt,a,vt),ft.target=He,ft.relatedTarget=tt,yt=null,zi(vt)===lt&&(se=new se(Z,W+"enter",ce,a,vt),se.target=tt,se.relatedTarget=He,yt=se),He=yt,dt&&ce)e:{for(se=dt,Z=ce,W=0,tt=se;tt;tt=es(tt))W++;for(tt=0,yt=Z;yt;yt=es(yt))tt++;for(;0<W-tt;)se=es(se),W--;for(;0<tt-W;)Z=es(Z),tt--;for(;W--;){if(se===Z||Z!==null&&se===Z.alternate)break e;se=es(se),Z=es(Z)}se=null}else se=null;dt!==null&&zg(Mt,ft,dt,se,!1),ce!==null&&He!==null&&zg(Mt,He,ce,se,!0)}}t:{if(ft=lt?Wa(lt):window,dt=ft.nodeName&&ft.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ft.type==="file")var Zt=ip;else if(ep(ft))if(ap)Zt=kv;else{Zt=Gv;var Se=Hv}else dt=ft.nodeName,!dt||dt.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?lt&&Kc(lt.elementType)&&(Zt=ip):Zt=Vv;if(Zt&&(Zt=Zt(e,lt))){np(Mt,Zt,a,vt);break t}Se&&Se(e,ft,lt),e==="focusout"&&lt&&ft.type==="number"&&lt.memoizedProps.value!=null&&An(ft,"number",ft.value)}switch(Se=lt?Wa(lt):window,e){case"focusin":(ep(Se)||Se.contentEditable==="true")&&(Ur=Se,uu=lt,qs=null);break;case"focusout":qs=uu=Ur=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,dp(Mt,a,vt);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":dp(Mt,a,vt)}var ne;if(su)t:{switch(e){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else Dr?$h(e,a)&&(le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Kh&&a.locale!=="ko"&&(Dr||le!=="onCompositionStart"?le==="onCompositionEnd"&&Dr&&(ne=Wh()):(ua=vt,eu="value"in ua?ua.value:ua.textContent,Dr=!0)),Se=jl(lt,le),0<Se.length&&(le=new jh(le,e,null,a,vt),Mt.push({event:le,listeners:Se}),ne?le.data=ne:(ne=tp(a),ne!==null&&(le.data=ne)))),(ne=Pv?Bv(e,a):Iv(e,a))&&(le=jl(lt,"onBeforeInput"),0<le.length&&(Se=new jh("onBeforeInput","beforeinput",null,a,vt),Mt.push({event:Se,listeners:le}),Se.data=ne)),Rx(Mt,e,lt,a,vt)}Bg(Mt,n)})}function So(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(e,a),c!=null&&s.unshift(So(e,c,f)),c=zs(e,n),c!=null&&s.push(So(e,c,f))),e.tag===3)return s;e=e.return}return[]}function es(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zg(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var A=a,F=A.alternate,lt=A.stateNode;if(A=A.tag,F!==null&&F===s)break;A!==5&&A!==26&&A!==27||lt===null||(F=lt,c?(lt=zs(a,f),lt!=null&&S.unshift(So(a,lt,F))):c||(lt=zs(a,f),lt!=null&&S.push(So(a,lt,F)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Ux=/\r\n?/g,Lx=/\u0000|\uFFFD/g;function Fg(e){return(typeof e=="string"?e:""+e).replace(Ux,`
`).replace(Lx,"")}function Hg(e,n){return n=Fg(n),Fg(e)===n}function Zl(){}function Fe(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Gn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Gn(e,""+s);break;case"className":Yt(e,"class",s);break;case"tabIndex":Yt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Yt(e,a,s);break;case"style":Vh(e,s,f);break;case"data":if(n!=="object"){Yt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=il(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",c.name,c,null),Fe(e,n,"formEncType",c.formEncType,c,null),Fe(e,n,"formMethod",c.formMethod,c,null),Fe(e,n,"formTarget",c.formTarget,c,null)):(Fe(e,n,"encType",c.encType,c,null),Fe(e,n,"method",c.method,c,null),Fe(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=il(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Zl);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=il(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":be("beforetoggle",e),be("toggle",e),Ht(e,"popover",s);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ht(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=lv.get(a)||a,Ht(e,a,s))}}function Pf(e,n,a,s,c,f){switch(a){case"style":Vh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Gn(e,s):(typeof s=="number"||typeof s=="bigint")&&Gn(e,""+s);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Je]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Ht(e,a,s)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,f,S,a,null)}}c&&Fe(e,n,"srcSet",a.srcSet,a,null),s&&Fe(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var A=f=S=c=null,F=null,lt=null;for(s in a)if(a.hasOwnProperty(s)){var vt=a[s];if(vt!=null)switch(s){case"name":c=vt;break;case"type":S=vt;break;case"checked":F=vt;break;case"defaultChecked":lt=vt;break;case"value":f=vt;break;case"defaultValue":A=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,n));break;default:Fe(e,n,s,vt,a,null)}}Pn(e,f,A,F,lt,S,c,!1),Me(e);return;case"select":be("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":s=A;default:Fe(e,n,c,A,a,null)}n=f,a=S,e.multiple=!!s,n!=null?$e(e,!!s,n,!1):a!=null&&$e(e,!!s,a,!0);return;case"textarea":be("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Fe(e,n,S,A,a,null)}Rr(e,s,c,f),Me(e);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(e,n,F,s,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(s=0;s<yo.length;s++)be(yo[s],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(lt in a)if(a.hasOwnProperty(lt)&&(s=a[lt],s!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,lt,s,a,null)}return;default:if(Kc(n)){for(vt in a)a.hasOwnProperty(vt)&&(s=a[vt],s!==void 0&&Pf(e,n,vt,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Fe(e,n,A,s,a,null))}function Nx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,A=null,F=null,lt=null,vt=null;for(dt in a){var Mt=a[dt];if(a.hasOwnProperty(dt)&&Mt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":F=Mt;default:s.hasOwnProperty(dt)||Fe(e,n,dt,null,s,Mt)}}for(var ft in s){var dt=s[ft];if(Mt=a[ft],s.hasOwnProperty(ft)&&(dt!=null||Mt!=null))switch(ft){case"type":f=dt;break;case"name":c=dt;break;case"checked":lt=dt;break;case"defaultChecked":vt=dt;break;case"value":S=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:dt!==Mt&&Fe(e,n,ft,dt,s,Mt)}}ke(e,S,A,F,lt,vt,f,c);return;case"select":dt=S=A=ft=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":dt=F;default:s.hasOwnProperty(f)||Fe(e,n,f,null,s,F)}for(c in s)if(f=s[c],F=a[c],s.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":ft=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==F&&Fe(e,n,c,f,s,F)}n=A,a=S,s=dt,ft!=null?$e(e,!!a,ft,!1):!!s!=!!a&&(n!=null?$e(e,!!a,n,!0):$e(e,!!a,a?[]:"",!1));return;case"textarea":dt=ft=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(e,n,A,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":ft=c;break;case"defaultValue":dt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Fe(e,n,S,c,s,f)}Sn(e,ft,dt);return;case"option":for(var ce in a)if(ft=a[ce],a.hasOwnProperty(ce)&&ft!=null&&!s.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Fe(e,n,ce,null,s,ft)}for(F in s)if(ft=s[F],dt=a[F],s.hasOwnProperty(F)&&ft!==dt&&(ft!=null||dt!=null))switch(F){case"selected":e.selected=ft&&typeof ft!="function"&&typeof ft!="symbol";break;default:Fe(e,n,F,ft,s,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)ft=a[se],a.hasOwnProperty(se)&&ft!=null&&!s.hasOwnProperty(se)&&Fe(e,n,se,null,s,ft);for(lt in s)if(ft=s[lt],dt=a[lt],s.hasOwnProperty(lt)&&ft!==dt&&(ft!=null||dt!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Fe(e,n,lt,ft,s,dt)}return;default:if(Kc(n)){for(var He in a)ft=a[He],a.hasOwnProperty(He)&&ft!==void 0&&!s.hasOwnProperty(He)&&Pf(e,n,He,void 0,s,ft);for(vt in s)ft=s[vt],dt=a[vt],!s.hasOwnProperty(vt)||ft===dt||ft===void 0&&dt===void 0||Pf(e,n,vt,ft,s,dt);return}}for(var Z in a)ft=a[Z],a.hasOwnProperty(Z)&&ft!=null&&!s.hasOwnProperty(Z)&&Fe(e,n,Z,null,s,ft);for(Mt in s)ft=s[Mt],dt=a[Mt],!s.hasOwnProperty(Mt)||ft===dt||ft==null&&dt==null||Fe(e,n,Mt,ft,s,dt)}var Bf=null,If=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Ox(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var kg=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(e){return Xg.resolve(null).then(e).catch(Ix)}:kg;function Ix(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Wg(e,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=e.ownerDocument;if(a&1&&Mo(S.documentElement),a&2&&Mo(S.body),a&4)for(a=S.head,Mo(a),S=a.firstChild;S;){var A=S.nextSibling,F=S.nodeName;S[Ai]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=A}}if(c===0){e.removeChild(f),Do(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);Do(n)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),Ar(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ai])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function Fx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Hx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Vf=null;function qg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Yg(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ar(e)}var ci=new Map,jg=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=it.d;it.d={f:Gx,r:Vx,D:kx,C:Xx,L:Wx,m:qx,X:jx,S:Yx,M:Zx};function Gx(){var e=Ji.f(),n=Vl();return e||n}function Vx(e){var n=la(e);n!==null&&n.tag===5&&n.type==="form"?pm(n):Ji.r(e)}var ns=typeof document>"u"?null:document;function Zg(e,n,a){var s=ns;if(s&&typeof n=="string"&&n){var c=gn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),jg.has(c)||(jg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),bn(n,"link",e),sn(n),s.head.appendChild(n)))}}function kx(e){Ji.D(e),Zg("dns-prefetch",e,null)}function Xx(e,n){Ji.C(e,n),Zg("preconnect",e,n)}function Wx(e,n,a){Ji.L(e,n,a);var s=ns;if(s&&e&&n){var c='link[rel="preload"][as="'+gn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gn(a.imageSizes)+'"]')):c+='[href="'+gn(e)+'"]';var f=c;switch(n){case"style":f=is(e);break;case"script":f=as(e)}ci.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(Eo(f))||n==="script"&&s.querySelector(bo(f))||(n=s.createElement("link"),bn(n,"link",e),sn(n),s.head.appendChild(n)))}}function qx(e,n){Ji.m(e,n);var a=ns;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gn(s)+'"][href="'+gn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(e)}if(!ci.has(f)&&(e=_({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}s=a.createElement("link"),bn(s,"link",e),sn(s),a.head.appendChild(s)}}}function Yx(e,n,a){Ji.S(e,n,a);var s=ns;if(s&&e){var c=ca(s).hoistableStyles,f=is(e);n=n||"default";var S=c.get(f);if(!S){var A={loading:0,preload:null};if(S=s.querySelector(Eo(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&kf(e,a);var F=S=s.createElement("link");sn(F),bn(F,"link",e),F._p=new Promise(function(lt,vt){F.onload=lt,F.onerror=vt}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Jl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(f,S)}}}function jx(e,n){Ji.X(e,n);var a=ns;if(a&&e){var s=ca(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(bo(c)),f||(e=_({src:e,async:!0},n),(n=ci.get(c))&&Xf(e,n),f=a.createElement("script"),sn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Zx(e,n){Ji.M(e,n);var a=ns;if(a&&e){var s=ca(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(bo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=ci.get(c))&&Xf(e,n),f=a.createElement("script"),sn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Kg(e,n,a,s){var c=(c=ot.current)?Ql(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=ca(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var f=ca(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(Eo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||Kx(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=ca(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+gn(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function Qg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Kx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),sn(n),e.head.appendChild(n))}function as(e){return'[src="'+gn(e)+'"]'}function bo(e){return"script[async]"+e}function Jg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+gn(a.href)+'"]');if(s)return n.instance=s,sn(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),sn(s),bn(s,"style",c),Jl(s,a.precedence,e),n.instance=s;case"stylesheet":c=is(a.href);var f=e.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,sn(f),f;s=Qg(a),(c=ci.get(c))&&kf(s,c),f=(e.ownerDocument||e).createElement("link"),sn(f);var S=f;return S._p=new Promise(function(A,F){S.onload=A,S.onerror=F}),bn(f,"link",s),n.state.loading|=4,Jl(f,a.precedence,e),n.instance=f;case"script":return f=as(a.src),(c=e.querySelector(bo(f)))?(n.instance=c,sn(c),c):(s=a,(c=ci.get(f))&&(s=_({},a),Xf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),sn(c),bn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Jl(s,a.precedence,e));return n.instance}function Jl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var A=s[S];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function $g(e,n,a){if($l===null){var s=new Map,c=$l=new Map;c.set(a,s)}else c=$l,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ai]||f[fn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=s.get(S);A?A.push(f):s.set(S,[f])}}return s}function t_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Qx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var To=null;function Jx(){}function $x(e,n,a){if(To===null)throw Error(r(475));var s=To;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=is(a.href),f=e.querySelector(Eo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=tc.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,sn(f);return}f=e.ownerDocument||e,a=Qg(a),(c=ci.get(c))&&kf(a,c),f=f.createElement("link"),sn(f);var S=f;S._p=new Promise(function(A,F){S.onload=A,S.onerror=F}),bn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=tc.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function ty(){if(To===null)throw Error(r(475));var e=To;return e.stylesheets&&e.count===0&&Wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function tc(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function Wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(ey,e),ec=null,tc.call(e))}function ey(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var s=a.get(null);else{a=new Map,ec.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=tc.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:O,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function ny(e,n,a,s,c,f,S,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=It(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=It(0),this.hiddenUpdates=It(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function n_(e,n,a,s,c,f,S,A,F,lt,vt,Mt){return e=new ny(e,n,a,S,A,F,lt,Mt),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=Tu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},wu(f),e}function i_(e){return e?(e=Pr,e):Pr}function a_(e,n,a,s,c,f){c=i_(c),s.context===null?s.context=c:s.pendingContext=c,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(e,s,n),a!==null&&($n(a,e,n),eo(a,e,n))}function r_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){r_(e,n),(e=e.alternate)&&r_(e,n)}function s_(e){if(e.tag===13){var n=Or(e,67108864);n!==null&&$n(n,e,67108864),qf(e,67108864)}}var nc=!0;function iy(e,n,a,s){var c=I.T;I.T=null;var f=it.p;try{it.p=2,Yf(e,n,a,s)}finally{it.p=f,I.T=c}}function ay(e,n,a,s){var c=I.T;I.T=null;var f=it.p;try{it.p=8,Yf(e,n,a,s)}finally{it.p=f,I.T=c}}function Yf(e,n,a,s){if(nc){var c=jf(s);if(c===null)Of(e,n,s,ic,a),l_(e,s);else if(sy(c,e,n,a,s))s.stopPropagation();else if(l_(e,s),n&4&&-1<ry.indexOf(e)){for(;c!==null;){var f=la(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=te(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var F=1<<31-Ct(S);A.entanglements[1]|=F,S&=~F}Ui(f),(Pe&6)===0&&(Hl=kt()+500,xo(0))}}break;case 13:A=Or(f,2),A!==null&&$n(A,f,2),Vl(),qf(f,2)}if(f=jf(s),f===null&&Of(e,n,s,ic,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Of(e,n,s,null,a)}}function jf(e){return e=Jc(e),Zf(e)}var ic=null;function Zf(e){if(ic=null,e=zi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function o_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z()){case at:return 2;case et:return 8;case At:case ht:return 32;case C:return 268435456;default:return 32}default:return 32}}var Kf=!1,Ra=null,Ca=null,wa=null,Ro=new Map,Co=new Map,Da=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=la(n),n!==null&&s_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function sy(e,n,a,s,c){switch(n){case"focusin":return Ra=wo(Ra,e,n,a,s,c),!0;case"dragenter":return Ca=wo(Ca,e,n,a,s,c),!0;case"mouseover":return wa=wo(wa,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,wo(Ro.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Co.set(f,wo(Co.get(f)||null,e,n,a,s,c)),!0}return!1}function c_(e){var n=zi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,hi(e.priority,function(){if(a.tag===13){var s=Jn();s=ue(s);var c=Or(a,s);c!==null&&$n(c,a,s),qf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Qc=s,a.target.dispatchEvent(s),Qc=null}else return n=la(a),n!==null&&s_(n),e.blockedOn=a,!1;n.shift()}return!0}function u_(e,n,a){ac(e)&&a.delete(n)}function oy(){Kf=!1,Ra!==null&&ac(Ra)&&(Ra=null),Ca!==null&&ac(Ca)&&(Ca=null),wa!==null&&ac(wa)&&(wa=null),Ro.forEach(u_),Co.forEach(u_)}function rc(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,oy)))}var sc=null;function f_(e){sc!==e&&(sc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sc===e&&(sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Zf(s||a)===null)continue;break}var f=la(a);f!==null&&(e.splice(n,3),n-=3,ju(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Do(e){function n(F){return rc(F,e)}Ra!==null&&rc(Ra,e),Ca!==null&&rc(Ca,e),wa!==null&&rc(wa,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)c_(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Je]||null;if(typeof f=="function")S||f_(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Je]||null)A=S.formAction;else if(Zf(c)!==null)continue}else A=S.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),f_(a)}}}function Qf(e){this._internalRoot=e}oc.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();a_(a,s,e,n,null,null)},oc.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;a_(e.current,2,null,e,null,null),Vl(),n[Ti]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ce();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&c_(e)}};var d_=t.version;if(d_!=="19.1.1")throw Error(r(527,d_,"19.1.1"));it.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var ly={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{K=lc.inject(ly),$=lc}catch{}}return Lo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Cm,f=wm,S=Dm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=n_(e,1,!1,null,null,a,s,c,f,S,A,null),e[Ti]=n.current,Nf(e),new Qf(n)},Lo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Cm,S=wm,A=Dm,F=null,lt=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&(lt=a.formState)),n=n_(e,1,!0,n,a??null,s,c,f,S,A,F,lt),n.context=i_(null),a=n.current,s=Jn(),s=ue(s),c=ha(s),c.callback=null,pa(a,c,s),a=s,n.current.lanes=a,Wt(n,a),Ui(n),e[Ti]=n.current,Nf(e),new oc(n)},Lo.version="19.1.1",Lo}var M_;function vy(){if(M_)return td.exports;M_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),td.exports=_y(),td.exports}var xy=vy();const yy="modulepreload",Sy=function(o){return"/"+o},E_={},My=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=d?.nonce||d?.getAttribute("nonce");l=m(i.map(p=>{if(p=Sy(p),p in E_)return;E_[p]=!0;const _=p.endsWith(".css"),x=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${x}`))return;const y=document.createElement("link");if(y.rel=_?"stylesheet":yy,_||(y.as="script"),y.crossOrigin="",y.href=p,h&&y.setAttribute("nonce",h),document.head.appendChild(y),_)return new Promise((v,T)=>{y.addEventListener("load",v),y.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return l.then(d=>{for(const h of d||[])h.status==="rejected"&&u(h.reason);return t().catch(u)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="180",Ey=0,b_=1,by=2,D0=1,Ty=2,aa=3,ka=0,qn=1,Oi=2,Ha=0,Ts=1,T_=2,A_=3,R_=4,Ay=5,gr=100,Ry=101,Cy=102,wy=103,Dy=104,Uy=200,Ly=201,Ny=202,Oy=203,Id=204,zd=205,Py=206,By=207,Iy=208,zy=209,Fy=210,Hy=211,Gy=212,Vy=213,ky=214,Fd=0,Hd=1,Gd=2,Cs=3,Vd=4,kd=5,Xd=6,Wd=7,U0=0,Xy=1,Wy=2,Ga=0,qy=1,Yy=2,jy=3,Zy=4,Ky=5,Qy=6,Jy=7,L0=300,ws=301,Ds=302,qd=303,Yd=304,jc=306,jd=1e3,xr=1001,Zd=1002,ni=1003,$y=1004,cc=1005,Mi=1006,ad=1007,yr=1008,sa=1009,N0=1010,O0=1011,Wo=1012,Dh=1013,Sr=1014,Bi=1015,Ko=1016,Uh=1017,Lh=1018,qo=1020,P0=35902,B0=35899,I0=1021,z0=1022,Ei=1023,Yo=1026,jo=1027,Nh=1028,Oh=1029,F0=1030,Ph=1031,Bh=1033,Bc=33776,Ic=33777,zc=33778,Fc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,th=36196,eh=37492,nh=37496,ih=37808,ah=37809,rh=37810,sh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,yh=36283,Sh=36284,Mh=36285,Eh=36286,tS=3200,eS=3201,nS=0,iS=1,Fa="",fi="srgb",Us="srgb-linear",Gc="linear",Ge="srgb",rs=7680,C_=519,aS=512,rS=513,sS=514,H0=515,oS=516,lS=517,cS=518,uS=519,bh=35044,w_="300 es",Ii=2e3,Vc=2001;class Ns{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Th=180/Math.PI;function Va(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Ae(o,t,i){return Math.max(t,Math.min(i,o))}function fS(o,t){return(o%t+t)%t}function sd(o,t,i){return(1-i)*o+i*t}function Pi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Te{constructor(t=0,i=0){Te.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],x=r[l+3];const y=u[d+0],v=u[d+1],T=u[d+2],b=u[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(h===1){t[i+0]=y,t[i+1]=v,t[i+2]=T,t[i+3]=b;return}if(x!==b||m!==y||p!==v||_!==T){let M=1-h;const g=m*y+p*v+_*T+x*b,B=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const w=Math.sqrt(O),G=Math.atan2(w,g*B);M=Math.sin(M*G)/w,h=Math.sin(h*G)/w}const L=h*B;if(m=m*M+y*L,p=p*M+v*L,_=_*M+T*L,x=x*M+b*L,M===1-h){const w=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=w,p*=w,_*=w,x*=w}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],x=u[d],y=u[d+1],v=u[d+2],T=u[d+3];return t[i]=h*T+_*x+m*v-p*y,t[i+1]=m*T+_*y+p*x-h*v,t[i+2]=p*T+_*v+h*y-m*x,t[i+3]=_*T-h*x-m*y-p*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),x=h(u/2),y=m(r/2),v=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=y*_*x+p*v*T,this._y=p*v*x-y*_*T,this._z=p*_*T+y*v*x,this._w=p*_*x-y*v*T;break;case"YXZ":this._x=y*_*x+p*v*T,this._y=p*v*x-y*_*T,this._z=p*_*T-y*v*x,this._w=p*_*x+y*v*T;break;case"ZXY":this._x=y*_*x-p*v*T,this._y=p*v*x+y*_*T,this._z=p*_*T+y*v*x,this._w=p*_*x-y*v*T;break;case"ZYX":this._x=y*_*x-p*v*T,this._y=p*v*x+y*_*T,this._z=p*_*T-y*v*x,this._w=p*_*x+y*v*T;break;case"YZX":this._x=y*_*x+p*v*T,this._y=p*v*x+y*_*T,this._z=p*_*T-y*v*x,this._w=p*_*x-y*v*T;break;case"XZY":this._x=y*_*x-p*v*T,this._y=p*v*x-y*_*T,this._z=p*_*T+y*v*x,this._w=p*_*x+y*v*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],x=i[10],y=r+h+x;if(y>0){const v=.5/Math.sqrt(y+1);this._w=.25/v,this._x=(_-m)*v,this._y=(u-p)*v,this._z=(d-l)*v}else if(r>h&&r>x){const v=2*Math.sqrt(1+r-h-x);this._w=(_-m)/v,this._x=.25*v,this._y=(l+d)/v,this._z=(u+p)/v}else if(h>x){const v=2*Math.sqrt(1+h-r-x);this._w=(u-p)/v,this._x=(l+d)/v,this._y=.25*v,this._z=(m+_)/v}else{const v=2*Math.sqrt(1+x-r-h);this._w=(d-l)/v,this._x=(u+p)/v,this._y=(m+_)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-r*p,this._z=u*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const v=1-i;return this._w=v*d+i*this._w,this._x=v*r+i*this._x,this._y=v*l+i*this._y,this._z=v*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),x=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=d*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(D_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(D_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),_=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+m*p+d*x-h*_,this.y=r+m*_+h*p-u*x,this.z=l+m*x+u*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return od.copy(this).projectOnVector(t),this.sub(od)}reflect(t){return this.sub(od.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new rt,D_=new Qo;class me{constructor(t,i,r,l,u,d,h,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],x=r[7],y=r[2],v=r[5],T=r[8],b=l[0],M=l[3],g=l[6],B=l[1],O=l[4],L=l[7],w=l[2],G=l[5],P=l[8];return u[0]=d*b+h*B+m*w,u[3]=d*M+h*O+m*G,u[6]=d*g+h*L+m*P,u[1]=p*b+_*B+x*w,u[4]=p*M+_*O+x*G,u[7]=p*g+_*L+x*P,u[2]=y*b+v*B+T*w,u[5]=y*M+v*O+T*G,u[8]=y*g+v*L+T*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-r*u*_+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=_*d-h*p,y=h*m-_*u,v=p*u-d*m,T=i*x+r*y+l*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=x*b,t[1]=(l*p-_*r)*b,t[2]=(h*r-l*d)*b,t[3]=y*b,t[4]=(_*i-l*m)*b,t[5]=(l*u-h*i)*b,t[6]=v*b,t[7]=(r*m-p*i)*b,t[8]=(d*i-r*u)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ld.makeScale(t,i)),this}rotate(t){return this.premultiply(ld.makeRotation(-t)),this}translate(t,i){return this.premultiply(ld.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new me;function G0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function dS(){const o=kc("canvas");return o.style.display="block",o}const U_={};function Zo(o){o in U_||(U_[o]=!0,console.warn(o))}function hS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const L_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pS(){const o={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ge&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=As(l.r),l.g=As(l.g),l.b=As(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Zo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Zo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Us]:{primaries:t,whitePoint:r,transfer:Gc,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Ue=pS();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function As(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ss;class mS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ss===void 0&&(ss=kc("canvas")),ss.width=t.width,ss.height=t.height;const l=ss.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ra(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gS=0;class Ih{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Va(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(cd(l[d].image)):u.push(cd(l[d]))}else u=cd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function cd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?mS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _S=0;const ud=new rt;class Ln extends Ns{constructor(t=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,r=xr,l=xr,u=Mi,d=yr,h=Ei,m=sa,p=Ln.DEFAULT_ANISOTROPY,_=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Va(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==L0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case xr:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case xr:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=L0;Ln.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],x=m[8],y=m[1],v=m[5],T=m[9],b=m[2],M=m[6],g=m[10];if(Math.abs(_-y)<.01&&Math.abs(x-b)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+b)<.1&&Math.abs(T+M)<.1&&Math.abs(p+v+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,L=(v+1)/2,w=(g+1)/2,G=(_+y)/4,P=(x+b)/4,Q=(T+M)/4;return O>L&&O>w?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=G/r,u=P/r):L>w?L<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),r=G/l,u=Q/l):w<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(w),r=P/u,l=Q/u),this.set(r,l,u,i),this}let B=Math.sqrt((M-T)*(M-T)+(x-b)*(x-b)+(y-_)*(y-_));return Math.abs(B)<.001&&(B=1),this.x=(M-T)/B,this.y=(x-b)/B,this.z=(y-_)/B,this.w=Math.acos((p+v+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vS extends Ns{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Ln(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ih(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends vS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class V0 extends Ln{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xS extends Ln{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,vi):vi.fromBufferAttribute(u,d),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(t.matrixWorld),this.union(uc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),fc.subVectors(this.max,No),os.subVectors(t.a,No),ls.subVectors(t.b,No),cs.subVectors(t.c,No),La.subVectors(ls,os),Na.subVectors(cs,ls),lr.subVectors(os,cs);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-lr.z,lr.y,La.z,0,-La.x,Na.z,0,-Na.x,lr.z,0,-lr.x,-La.y,La.x,0,-Na.y,Na.x,0,-lr.y,lr.x,0];return!fd(i,os,ls,cs,fc)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,os,ls,cs,fc))?!1:(dc.crossVectors(La,Na),i=[dc.x,dc.y,dc.z],fd(i,os,ls,cs,fc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],vi=new rt,uc=new Er,os=new rt,ls=new rt,cs=new rt,La=new rt,Na=new rt,lr=new rt,No=new rt,fc=new rt,dc=new rt,cr=new rt;function fd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){cr.fromArray(o,u);const h=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=t.dot(cr),p=i.dot(cr),_=r.dot(cr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const yS=new Er,Oo=new rt,dd=new rt;class Os{constructor(t=new rt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):yS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Oo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(dd)),this.expandByPoint(Oo.copy(t.center).sub(dd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new rt,hd=new rt,hc=new rt,Oa=new rt,pd=new rt,pc=new rt,md=new rt;class zh{constructor(t=new rt,i=new rt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){hd.copy(t).add(i).multiplyScalar(.5),hc.copy(i).sub(t).normalize(),Oa.copy(this.origin).sub(hd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(hc),h=Oa.dot(this.direction),m=-Oa.dot(hc),p=Oa.lengthSq(),_=Math.abs(1-d*d);let x,y,v,T;if(_>0)if(x=d*m-h,y=d*h-m,T=u*_,x>=0)if(y>=-T)if(y<=T){const b=1/_;x*=b,y*=b,v=x*(x+d*y+2*h)+y*(d*x+y+2*m)+p}else y=u,x=Math.max(0,-(d*y+h)),v=-x*x+y*(y+2*m)+p;else y=-u,x=Math.max(0,-(d*y+h)),v=-x*x+y*(y+2*m)+p;else y<=-T?(x=Math.max(0,-(-d*u+h)),y=x>0?-u:Math.min(Math.max(-u,-m),u),v=-x*x+y*(y+2*m)+p):y<=T?(x=0,y=Math.min(Math.max(-u,-m),u),v=y*(y+2*m)+p):(x=Math.max(0,-(d*u+h)),y=x>0?u:Math.min(Math.max(-u,-m),u),v=-x*x+y*(y+2*m)+p);else y=d>0?-u:u,x=Math.max(0,-(d*y+h)),v=-x*x+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(hd).addScaledVector(hc,y),v}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),_>=0?(u=(t.min.y-y.y)*_,d=(t.max.y-y.y)*_):(u=(t.max.y-y.y)*_,d=(t.min.y-y.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-y.z)*x,m=(t.max.z-y.z)*x):(h=(t.max.z-y.z)*x,m=(t.min.z-y.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){pd.subVectors(i,t),pc.subVectors(r,t),md.crossVectors(pd,pc);let d=this.direction.dot(md),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Oa.subVectors(this.origin,t);const m=h*this.direction.dot(pc.crossVectors(Oa,pc));if(m<0)return null;const p=h*this.direction.dot(pd.cross(Oa));if(p<0||m+p>d)return null;const _=-h*Oa.dot(md);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,r,l,u,d,h,m,p,_,x,y,v,T,b,M){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,_,x,y,v,T,b,M)}set(t,i,r,l,u,d,h,m,p,_,x,y,v,T,b,M){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=d,g[9]=h,g[13]=m,g[2]=p,g[6]=_,g[10]=x,g[14]=y,g[3]=v,g[7]=T,g[11]=b,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/us.setFromMatrixColumn(t,0).length(),u=1/us.setFromMatrixColumn(t,1).length(),d=1/us.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const y=d*_,v=d*x,T=h*_,b=h*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=v+T*p,i[5]=y-b*p,i[9]=-h*m,i[2]=b-y*p,i[6]=T+v*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*_,v=m*x,T=p*_,b=p*x;i[0]=y+b*h,i[4]=T*h-v,i[8]=d*p,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=v*h-T,i[6]=b+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*_,v=m*x,T=p*_,b=p*x;i[0]=y-b*h,i[4]=-d*x,i[8]=T+v*h,i[1]=v+T*h,i[5]=d*_,i[9]=b-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*_,v=d*x,T=h*_,b=h*x;i[0]=m*_,i[4]=T*p-v,i[8]=y*p+b,i[1]=m*x,i[5]=b*p+y,i[9]=v*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,v=d*p,T=h*m,b=h*p;i[0]=m*_,i[4]=b-y*x,i[8]=T*x+v,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=v*x+T,i[10]=y-b*x}else if(t.order==="XZY"){const y=d*m,v=d*p,T=h*m,b=h*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=y*x+b,i[5]=d*_,i[9]=v*x-T,i[2]=T*x-v,i[6]=h*_,i[10]=b*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SS,t,MS)}lookAt(t,i,r){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Pa.crossVectors(r,ti),Pa.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Pa.crossVectors(r,ti)),Pa.normalize(),mc.crossVectors(ti,Pa),l[0]=Pa.x,l[4]=mc.x,l[8]=ti.x,l[1]=Pa.y,l[5]=mc.y,l[9]=ti.y,l[2]=Pa.z,l[6]=mc.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],x=r[5],y=r[9],v=r[13],T=r[2],b=r[6],M=r[10],g=r[14],B=r[3],O=r[7],L=r[11],w=r[15],G=l[0],P=l[4],Q=l[8],D=l[12],U=l[1],X=l[5],ut=l[9],gt=l[13],_t=l[2],ct=l[6],I=l[10],it=l[14],Y=l[3],Tt=l[7],N=l[11],st=l[15];return u[0]=d*G+h*U+m*_t+p*Y,u[4]=d*P+h*X+m*ct+p*Tt,u[8]=d*Q+h*ut+m*I+p*N,u[12]=d*D+h*gt+m*it+p*st,u[1]=_*G+x*U+y*_t+v*Y,u[5]=_*P+x*X+y*ct+v*Tt,u[9]=_*Q+x*ut+y*I+v*N,u[13]=_*D+x*gt+y*it+v*st,u[2]=T*G+b*U+M*_t+g*Y,u[6]=T*P+b*X+M*ct+g*Tt,u[10]=T*Q+b*ut+M*I+g*N,u[14]=T*D+b*gt+M*it+g*st,u[3]=B*G+O*U+L*_t+w*Y,u[7]=B*P+O*X+L*ct+w*Tt,u[11]=B*Q+O*ut+L*I+w*N,u[15]=B*D+O*gt+L*it+w*st,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],x=t[6],y=t[10],v=t[14],T=t[3],b=t[7],M=t[11],g=t[15];return T*(+u*m*x-l*p*x-u*h*y+r*p*y+l*h*v-r*m*v)+b*(+i*m*v-i*p*y+u*d*y-l*d*v+l*p*_-u*m*_)+M*(+i*p*x-i*h*v-u*d*x+r*d*v+u*h*_-r*p*_)+g*(-l*h*_-i*m*x+i*h*y+l*d*x-r*d*y+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=t[9],y=t[10],v=t[11],T=t[12],b=t[13],M=t[14],g=t[15],B=x*M*p-b*y*p+b*m*v-h*M*v-x*m*g+h*y*g,O=T*y*p-_*M*p-T*m*v+d*M*v+_*m*g-d*y*g,L=_*b*p-T*x*p+T*h*v-d*b*v-_*h*g+d*x*g,w=T*x*m-_*b*m-T*h*y+d*b*y+_*h*M-d*x*M,G=i*B+r*O+l*L+u*w;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return t[0]=B*P,t[1]=(b*y*u-x*M*u-b*l*v+r*M*v+x*l*g-r*y*g)*P,t[2]=(h*M*u-b*m*u+b*l*p-r*M*p-h*l*g+r*m*g)*P,t[3]=(x*m*u-h*y*u-x*l*p+r*y*p+h*l*v-r*m*v)*P,t[4]=O*P,t[5]=(_*M*u-T*y*u+T*l*v-i*M*v-_*l*g+i*y*g)*P,t[6]=(T*m*u-d*M*u-T*l*p+i*M*p+d*l*g-i*m*g)*P,t[7]=(d*y*u-_*m*u+_*l*p-i*y*p-d*l*v+i*m*v)*P,t[8]=L*P,t[9]=(T*x*u-_*b*u-T*r*v+i*b*v+_*r*g-i*x*g)*P,t[10]=(d*b*u-T*h*u+T*r*p-i*b*p-d*r*g+i*h*g)*P,t[11]=(_*h*u-d*x*u-_*r*p+i*x*p+d*r*v-i*h*v)*P,t[12]=w*P,t[13]=(_*b*l-T*x*l+T*r*y-i*b*y-_*r*M+i*x*M)*P,t[14]=(T*h*l-d*b*l-T*r*m+i*b*m+d*r*M-i*h*M)*P,t[15]=(d*x*l-_*h*l+_*r*m-i*x*m-d*r*y+i*h*y)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,_=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,x=h+h,y=u*p,v=u*_,T=u*x,b=d*_,M=d*x,g=h*x,B=m*p,O=m*_,L=m*x,w=r.x,G=r.y,P=r.z;return l[0]=(1-(b+g))*w,l[1]=(v+L)*w,l[2]=(T-O)*w,l[3]=0,l[4]=(v-L)*G,l[5]=(1-(y+g))*G,l[6]=(M+B)*G,l[7]=0,l[8]=(T+O)*P,l[9]=(M-B)*P,l[10]=(1-(y+b))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const d=us.set(l[4],l[5],l[6]).length(),h=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/u,_=1/d,x=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=_,xi.elements[5]*=_,xi.elements[6]*=_,xi.elements[8]*=x,xi.elements[9]*=x,xi.elements[10]*=x,i.setFromRotationMatrix(xi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,_=2*u/(i-t),x=2*u/(r-l),y=(i+t)/(i-t),v=(r+l)/(r-l);let T,b;if(m)T=u/(d-u),b=d*u/(d-u);else if(h===Ii)T=-(d+u)/(d-u),b=-2*d*u/(d-u);else if(h===Vc)T=-d/(d-u),b=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,_=2/(i-t),x=2/(r-l),y=-(i+t)/(i-t),v=-(r+l)/(r-l);let T,b;if(m)T=1/(d-u),b=d/(d-u);else if(h===Ii)T=-2/(d-u),b=-(d+u)/(d-u);else if(h===Vc)T=-1/(d-u),b=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=v,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const us=new rt,xi=new Ye,SS=new rt(0,0,0),MS=new rt(1,1,1),Pa=new rt,mc=new rt,ti=new rt,O_=new Ye,P_=new Qo;class oa{constructor(t=0,i=0,r=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],x=l[2],y=l[6],v=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,v),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,v),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,v),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ae(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,v),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,v));break;case"XZY":this._z=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return O_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(O_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return P_.setFromEuler(this),this.setFromQuaternion(P_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ES=0;const B_=new rt,fs=new Qo,ea=new Ye,gc=new rt,Po=new rt,bS=new rt,TS=new Qo,I_=new rt(1,0,0),z_=new rt(0,1,0),F_=new rt(0,0,1),H_={type:"added"},AS={type:"removed"},ds={type:"childadded",child:null},gd={type:"childremoved",child:null};class Nn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new rt,i=new oa,r=new Qo,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new me}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(I_,t)}rotateY(t){return this.rotateOnAxis(z_,t)}rotateZ(t){return this.rotateOnAxis(F_,t)}translateOnAxis(t,i){return B_.copy(t).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(I_,t)}translateY(t){return this.translateOnAxis(z_,t)}translateZ(t){return this.translateOnAxis(F_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?gc.copy(t):gc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Po,gc,this.up):ea.lookAt(gc,Po,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(ea),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(H_),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(AS),gd.child=t,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(H_),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,bS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,TS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),x=d(t.shapes),y=d(t.skeletons),v=d(t.animations),T=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),v.length>0&&(r.animations=v),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new rt(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new rt,na=new rt,_d=new rt,ia=new rt,hs=new rt,ps=new rt,G_=new rt,vd=new rt,xd=new rt,yd=new rt,Sd=new rn,Md=new rn,Ed=new rn;class di{constructor(t=new rt,i=new rt,r=new rt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),yi.subVectors(t,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){yi.subVectors(l,i),na.subVectors(r,i),_d.subVectors(t,i);const d=yi.dot(yi),h=yi.dot(na),m=yi.dot(_d),p=na.dot(na),_=na.dot(_d),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const y=1/x,v=(p*m-h*_)*y,T=(d*_-h*m)*y;return u.set(1-v-T,T,v)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return Sd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(t,i),Md.fromBufferAttribute(t,r),Ed.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Sd,u.x),d.addScaledVector(Md,u.y),d.addScaledVector(Ed,u.z),d}static isFrontFacing(t,i,r,l){return yi.subVectors(r,i),na.subVectors(t,i),yi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),yi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return di.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return di.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;hs.subVectors(l,r),ps.subVectors(u,r),vd.subVectors(t,r);const m=hs.dot(vd),p=ps.dot(vd);if(m<=0&&p<=0)return i.copy(r);xd.subVectors(t,l);const _=hs.dot(xd),x=ps.dot(xd);if(_>=0&&x<=_)return i.copy(l);const y=m*x-_*p;if(y<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(hs,d);yd.subVectors(t,u);const v=hs.dot(yd),T=ps.dot(yd);if(T>=0&&v<=T)return i.copy(u);const b=v*p-m*T;if(b<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(ps,h);const M=_*T-v*x;if(M<=0&&x-_>=0&&v-T>=0)return G_.subVectors(u,l),h=(x-_)/(x-_+(v-T)),i.copy(l).addScaledVector(G_,h);const g=1/(M+b+y);return d=b*g,h=y*g,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},_c={h:0,s:0,l:0};function bd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class xe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ue.workingColorSpace){if(t=fS(t,1),i=Ae(i,0,1),r=Ae(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=bd(d,u,t+1/3),this.g=bd(d,u,t),this.b=bd(d,u,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=k0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Ue.workingToColorSpace(Dn.copy(this),t),Math.round(Ae(Dn.r*255,0,255))*65536+Math.round(Ae(Dn.g*255,0,255))*256+Math.round(Ae(Dn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=_<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=fi){Ue.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,l=Dn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+i,Ba.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ba),t.getHSL(_c);const r=sd(Ba.h,_c.h,i),l=sd(Ba.s,_c.s,i),u=sd(Ba.l,_c.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new xe;xe.NAMES=k0;let RS=0;class Ps extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=Ts,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=zd,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Id&&(r.blendSrc=this.blendSrc),this.blendDst!==zd&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class za extends Ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=U0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new rt,vc=new Te;let CS=0;class Fn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=bh,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(t),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Pi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Pi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Pi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Pi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Pi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),u=Ve(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bh&&(t.usage=this.usage),t}}class X0 extends Fn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class W0 extends Fn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class bi extends Fn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let wS=0;const ui=new Ye,Td=new Nn,ms=new rt,ei=new Er,Bo=new Er,yn=new rt;class Hn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(G0(t)?W0:X0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new me().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return Td.lookAt(t),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new bi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Bo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ei.min,Bo.min),ei.expandByPoint(yn),yn.addVectors(ei.max,Bo.max),ei.expandByPoint(yn)):(ei.expandByPoint(Bo.min),ei.expandByPoint(Bo.max))}ei.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)yn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)yn.fromBufferAttribute(h,p),m&&(ms.fromBufferAttribute(t,p),yn.add(ms)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Q=0;Q<r.count;Q++)h[Q]=new rt,m[Q]=new rt;const p=new rt,_=new rt,x=new rt,y=new Te,v=new Te,T=new Te,b=new rt,M=new rt;function g(Q,D,U){p.fromBufferAttribute(r,Q),_.fromBufferAttribute(r,D),x.fromBufferAttribute(r,U),y.fromBufferAttribute(u,Q),v.fromBufferAttribute(u,D),T.fromBufferAttribute(u,U),_.sub(p),x.sub(p),v.sub(y),T.sub(y);const X=1/(v.x*T.y-T.x*v.y);isFinite(X)&&(b.copy(_).multiplyScalar(T.y).addScaledVector(x,-v.y).multiplyScalar(X),M.copy(x).multiplyScalar(v.x).addScaledVector(_,-T.x).multiplyScalar(X),h[Q].add(b),h[D].add(b),h[U].add(b),m[Q].add(M),m[D].add(M),m[U].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let Q=0,D=B.length;Q<D;++Q){const U=B[Q],X=U.start,ut=U.count;for(let gt=X,_t=X+ut;gt<_t;gt+=3)g(t.getX(gt+0),t.getX(gt+1),t.getX(gt+2))}const O=new rt,L=new rt,w=new rt,G=new rt;function P(Q){w.fromBufferAttribute(l,Q),G.copy(w);const D=h[Q];O.copy(D),O.sub(w.multiplyScalar(w.dot(D))).normalize(),L.crossVectors(G,D);const X=L.dot(m[Q])<0?-1:1;d.setXYZW(Q,O.x,O.y,O.z,X)}for(let Q=0,D=B.length;Q<D;++Q){const U=B[Q],X=U.start,ut=U.count;for(let gt=X,_t=X+ut;gt<_t;gt+=3)P(t.getX(gt+0)),P(t.getX(gt+1)),P(t.getX(gt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Fn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,v=r.count;y<v;y++)r.setXYZ(y,0,0,0);const l=new rt,u=new rt,d=new rt,h=new rt,m=new rt,p=new rt,_=new rt,x=new rt;if(t)for(let y=0,v=t.count;y<v;y+=3){const T=t.getX(y+0),b=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,M),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),h.add(_),m.add(_),p.add(_),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,v=i.count;y<v;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,x=h.normalized,y=new p.constructor(m.length*_);let v=0,T=0;for(let b=0,M=m.length;b<M;b++){h.isInterleavedBufferAttribute?v=m[b]*h.data.stride+h.offset:v=m[b]*_;for(let g=0;g<_;g++)y[T++]=p[v++]}return new Fn(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,x=p.length;_<x;_++){const y=p[_],v=t(y,r);m.push(v)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,y=p.length;x<y;x++){const v=p[x];_.push(v.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],x=u[p];for(let y=0,v=x.length;y<v;y++)_.push(x[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new Ye,ur=new zh,xc=new Os,k_=new rt,yc=new rt,Sc=new rt,Mc=new rt,Ad=new rt,Ec=new rt,X_=new rt,bc=new rt;class Un extends Nn{constructor(t=new Hn,i=new za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Ec.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],x=u[m];_!==0&&(Ad.fromBufferAttribute(x,t),d?Ec.addScaledVector(Ad,_):Ec.addScaledVector(Ad.sub(i),_))}i.add(Ec)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(u),ur.copy(t.ray).recast(t.near),!(xc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(xc,k_)===null||ur.origin.distanceToSquared(k_)>(t.far-t.near)**2))&&(V_.copy(u).invert(),ur.copy(t.ray).applyMatrix4(V_),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,y=u.groups,v=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,b=y.length;T<b;T++){const M=y[T],g=d[M.materialIndex],B=Math.max(M.start,v.start),O=Math.min(h.count,Math.min(M.start+M.count,v.start+v.count));for(let L=B,w=O;L<w;L+=3){const G=h.getX(L),P=h.getX(L+1),Q=h.getX(L+2);l=Tc(this,g,t,r,p,_,x,G,P,Q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,v.start),b=Math.min(h.count,v.start+v.count);for(let M=T,g=b;M<g;M+=3){const B=h.getX(M),O=h.getX(M+1),L=h.getX(M+2);l=Tc(this,d,t,r,p,_,x,B,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,b=y.length;T<b;T++){const M=y[T],g=d[M.materialIndex],B=Math.max(M.start,v.start),O=Math.min(m.count,Math.min(M.start+M.count,v.start+v.count));for(let L=B,w=O;L<w;L+=3){const G=L,P=L+1,Q=L+2;l=Tc(this,g,t,r,p,_,x,G,P,Q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,v.start),b=Math.min(m.count,v.start+v.count);for(let M=T,g=b;M<g;M+=3){const B=M,O=M+1,L=M+2;l=Tc(this,d,t,r,p,_,x,B,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function DS(o,t,i,r,l,u,d,h){let m;if(t.side===qn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ka,h),m===null)return null;bc.copy(h),bc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(bc);return p<i.near||p>i.far?null:{distance:p,point:bc.clone(),object:o}}function Tc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,yc),o.getVertexPosition(m,Sc),o.getVertexPosition(p,Mc);const _=DS(o,t,i,r,yc,Sc,Mc,X_);if(_){const x=new rt;di.getBarycoord(X_,yc,Sc,Mc,x),l&&(_.uv=di.getInterpolatedAttribute(l,h,m,p,x,new Te)),u&&(_.uv1=di.getInterpolatedAttribute(u,h,m,p,x,new Te)),d&&(_.normal=di.getInterpolatedAttribute(d,h,m,p,x,new rt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new rt,materialIndex:0};di.getNormal(yc,Sc,Mc,y.normal),_.face=y,_.barycoord=x}return _}class Jo extends Hn{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],x=[];let y=0,v=0;T("z","y","x",-1,-1,r,i,t,d,u,0),T("z","y","x",1,-1,r,i,-t,d,u,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(_,3)),this.setAttribute("uv",new bi(x,2));function T(b,M,g,B,O,L,w,G,P,Q,D){const U=L/P,X=w/Q,ut=L/2,gt=w/2,_t=G/2,ct=P+1,I=Q+1;let it=0,Y=0;const Tt=new rt;for(let N=0;N<I;N++){const st=N*X-gt;for(let bt=0;bt<ct;bt++){const wt=bt*U-ut;Tt[b]=wt*B,Tt[M]=st*O,Tt[g]=_t,p.push(Tt.x,Tt.y,Tt.z),Tt[b]=0,Tt[M]=0,Tt[g]=G>0?1:-1,_.push(Tt.x,Tt.y,Tt.z),x.push(bt/P),x.push(1-N/Q),it+=1}}for(let N=0;N<Q;N++)for(let st=0;st<P;st++){const bt=y+st+ct*N,wt=y+st+ct*(N+1),Ft=y+(st+1)+ct*(N+1),qt=y+(st+1)+ct*N;m.push(bt,wt,qt),m.push(wt,Ft,qt),Y+=6}h.addGroup(v,Y,D),v+=Y,y+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const r=Ls(o[i]);for(const l in r)t[l]=r[l]}return t}function US(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function q0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const LS={clone:Ls,merge:zn};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends Ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=OS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=US(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Y0 extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new rt,W_=new Te,q_=new Te;class Si extends Y0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Th*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Th*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z)}getViewSize(t,i){return this.getViewBounds(t,W_,q_),i.subVectors(q_,W_)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class PS extends Nn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(gs,_s,t,i);l.layers=this.layers,this.add(l);const u=new Si(gs,_s,t,i);u.layers=this.layers,this.add(u);const d=new Si(gs,_s,t,i);d.layers=this.layers,this.add(d);const h=new Si(gs,_s,t,i);h.layers=this.layers,this.add(h);const m=new Si(gs,_s,t,i);m.layers=this.layers,this.add(m);const p=new Si(gs,_s,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Vc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(x,y,v),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class j0 extends Ln{constructor(t=[],i=ws,r,l,u,d,h,m,p,_){super(t,i,r,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class BS extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new j0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jo(5,5,5),u=new Xa({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Ha});u.uniforms.tEquirect.value=i;const d=new Un(l,u),h=i.minFilter;return i.minFilter===yr&&(i.minFilter=Mi),new PS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class ko extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IS={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,r),g=this._getHandJoint(p,b);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=_.position.distanceTo(x.position),v=.02,T=.005;p.inputState.pinching&&y>v+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=v-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(IS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new ko;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class zS extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class FS{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=bh,this.updateRanges=[],this.version=0,this.uuid=Va()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new rt;class Xc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)In.fromBufferAttribute(this,i),In.applyMatrix4(t),this.setXYZ(i,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)In.fromBufferAttribute(this,i),In.applyNormalMatrix(t),this.setXYZ(i,In.x,In.y,In.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)In.fromBufferAttribute(this,i),In.transformDirection(t),this.setXYZ(i,In.x,In.y,In.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Pi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Pi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Pi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Pi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Pi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),u=Ve(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new Fn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Z0 extends Ps{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vs;const Io=new rt,xs=new rt,ys=new rt,Ss=new Te,zo=new Te,K0=new Ye,Ac=new rt,Fo=new rt,Rc=new rt,Y_=new Te,Cd=new Te,j_=new Te;class HS extends Nn{constructor(t=new Z0){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Hn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new FS(i,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Xc(r,3,0,!1)),vs.setAttribute("uv",new Xc(r,2,3,!1))}this.geometry=vs,this.material=t,this.center=new Te(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),K0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-ys.z);const r=this.material.rotation;let l,u;r!==0&&(u=Math.cos(r),l=Math.sin(r));const d=this.center;Cc(Ac.set(-.5,-.5,0),ys,d,xs,l,u),Cc(Fo.set(.5,-.5,0),ys,d,xs,l,u),Cc(Rc.set(.5,.5,0),ys,d,xs,l,u),Y_.set(0,0),Cd.set(1,0),j_.set(1,1);let h=t.ray.intersectTriangle(Ac,Fo,Rc,!1,Io);if(h===null&&(Cc(Fo.set(-.5,.5,0),ys,d,xs,l,u),Cd.set(0,1),h=t.ray.intersectTriangle(Ac,Rc,Fo,!1,Io),h===null))return;const m=t.ray.origin.distanceTo(Io);m<t.near||m>t.far||i.push({distance:m,point:Io.clone(),uv:di.getInterpolation(Io,Ac,Fo,Rc,Y_,Cd,j_,new Te),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cc(o,t,i,r,l,u){Ss.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(zo.x=u*Ss.x-l*Ss.y,zo.y=l*Ss.x+u*Ss.y):zo.copy(Ss),o.copy(t),o.x+=zo.x,o.y+=zo.y,o.applyMatrix4(K0)}class GS extends Ln{constructor(t=null,i=1,r=1,l,u,d,h,m,p=ni,_=ni,x,y){super(null,d,h,m,p,_,l,u,x,y),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Z_ extends Fn{constructor(t,i,r,l=1){super(t,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ms=new Ye,K_=new Ye,wc=[],Q_=new Er,VS=new Ye,Ho=new Un,Go=new Os;class kS extends Un{constructor(t,i,r){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Z_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,VS)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Er),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ms),Q_.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Q_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ms),Go.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(Go)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=r.length+1,d=t*u+1;for(let h=0;h<r.length;h++)r[h]=l[d+h]}raycast(t,i){const r=this.matrixWorld,l=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(r),t.ray.intersectsSphere(Go)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,Ms),K_.multiplyMatrices(r,Ms),Ho.matrixWorld=K_,Ho.raycast(t,wc);for(let d=0,h=wc.length;d<h;d++){const m=wc[d];m.instanceId=u,m.object=this,i.push(m)}wc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Z_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new GS(new Float32Array(l*this.count),l,this.count,Nh,Bi));const u=this.morphTexture.source.data.data;let d=0;for(let p=0;p<r.length;p++)d+=r[p];const h=this.geometry.morphTargetsRelative?1:1-d,m=l*t;u[m]=h,u.set(r,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wd=new rt,XS=new rt,WS=new me;class pr{constructor(t=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=wd.subVectors(r,i).cross(XS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(wd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||WS.getNormalMatrix(t),l=this.coplanarPoint(wd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Os,qS=new Te(.5,.5),Dc=new rt;class Q0{constructor(t=new pr,i=new pr,r=new pr,l=new pr,u=new pr,d=new pr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ii,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],x=u[5],y=u[6],v=u[7],T=u[8],b=u[9],M=u[10],g=u[11],B=u[12],O=u[13],L=u[14],w=u[15];if(l[0].setComponents(p-d,v-_,g-T,w-B).normalize(),l[1].setComponents(p+d,v+_,g+T,w+B).normalize(),l[2].setComponents(p+h,v+x,g+b,w+O).normalize(),l[3].setComponents(p-h,v-x,g-b,w-O).normalize(),r)l[4].setComponents(m,y,M,L).normalize(),l[5].setComponents(p-m,v-y,g-M,w-L).normalize();else if(l[4].setComponents(p-m,v-y,g-M,w-L).normalize(),i===Ii)l[5].setComponents(p+m,v+y,g+M,w+L).normalize();else if(i===Vc)l[5].setComponents(m,y,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);const i=qS.distanceTo(t.center);return fr.radius=.7071067811865476+i,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Dc.x=l.normal.x>0?t.max.x:t.min.x,Dc.y=l.normal.y>0?t.max.y:t.min.y,Dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rs extends Ps{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wc=new rt,qc=new rt,J_=new Ye,Vo=new zh,Uc=new Os,Dd=new rt,$_=new rt;class Yc extends Nn{constructor(t=new Hn,i=new Rs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Wc.fromBufferAttribute(i,l-1),qc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Wc.distanceTo(qc);t.setAttribute("lineDistance",new bi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=u,t.ray.intersectsSphere(Uc)===!1)return;J_.copy(l).invert(),Vo.copy(t.ray).applyMatrix4(J_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=r.index,y=r.attributes.position;if(_!==null){const v=Math.max(0,d.start),T=Math.min(_.count,d.start+d.count);for(let b=v,M=T-1;b<M;b+=p){const g=_.getX(b),B=_.getX(b+1),O=Lc(this,t,Vo,m,g,B,b);O&&i.push(O)}if(this.isLineLoop){const b=_.getX(T-1),M=_.getX(v),g=Lc(this,t,Vo,m,b,M,T-1);g&&i.push(g)}}else{const v=Math.max(0,d.start),T=Math.min(y.count,d.start+d.count);for(let b=v,M=T-1;b<M;b+=p){const g=Lc(this,t,Vo,m,b,b+1,b);g&&i.push(g)}if(this.isLineLoop){const b=Lc(this,t,Vo,m,T-1,v,T-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Lc(o,t,i,r,l,u,d){const h=o.geometry.attributes.position;if(Wc.fromBufferAttribute(h,l),qc.fromBufferAttribute(h,u),i.distanceSqToSegment(Wc,qc,Dd,$_)>r)return;Dd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Dd);if(!(p<t.near||p>t.far))return{distance:p,point:$_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class t0 extends Yc{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class YS extends Ln{constructor(t,i,r,l,u,d,h,m,p){super(t,i,r,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class J0 extends Ln{constructor(t,i,r=Sr,l,u,d,h=ni,m=ni,p,_=Yo,x=1){if(_!==Yo&&_!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:x};super(y,l,u,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ih(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $0 extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $o extends Hn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,x=t/h,y=i/m,v=[],T=[],b=[],M=[];for(let g=0;g<_;g++){const B=g*y-d;for(let O=0;O<p;O++){const L=O*x-u;T.push(L,-B,0),b.push(0,0,1),M.push(O/h),M.push(1-g/m)}}for(let g=0;g<m;g++)for(let B=0;B<h;B++){const O=B+p*g,L=B+p*(g+1),w=B+1+p*(g+1),G=B+1+p*g;v.push(O,L,G),v.push(L,w,G)}this.setIndex(v),this.setAttribute("position",new bi(T,3)),this.setAttribute("normal",new bi(b,3)),this.setAttribute("uv",new bi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.widthSegments,t.heightSegments)}}class _r extends Hn{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const _=[],x=new rt,y=new rt,v=[],T=[],b=[],M=[];for(let g=0;g<=r;g++){const B=[],O=g/r;let L=0;g===0&&d===0?L=.5/i:g===r&&m===Math.PI&&(L=-.5/i);for(let w=0;w<=i;w++){const G=w/i;x.x=-t*Math.cos(l+G*u)*Math.sin(d+O*h),x.y=t*Math.cos(d+O*h),x.z=t*Math.sin(l+G*u)*Math.sin(d+O*h),T.push(x.x,x.y,x.z),y.copy(x).normalize(),b.push(y.x,y.y,y.z),M.push(G+L,1-O),B.push(p++)}_.push(B)}for(let g=0;g<r;g++)for(let B=0;B<i;B++){const O=_[g][B+1],L=_[g][B],w=_[g+1][B],G=_[g+1][B+1];(g!==0||d>0)&&v.push(O,L,G),(g!==r-1||m<Math.PI)&&v.push(L,w,G)}this.setIndex(v),this.setAttribute("position",new bi(T,3)),this.setAttribute("normal",new bi(b,3)),this.setAttribute("uv",new bi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jS extends Ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ZS extends Ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tv extends Y0{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class KS extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const e0=new Ye;class QS{constructor(t,i,r=0,l=1/0){this.ray=new zh(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return e0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(e0),this}intersectObject(t,i=!0,r=[]){return Ah(t,this,r,i),r.sort(n0),r}intersectObjects(t,i=!0,r=[]){for(let l=0,u=t.length;l<u;l++)Ah(t[l],this,r,i);return r.sort(n0),r}}function n0(o,t){return o.distance-t.distance}function Ah(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const u=o.children;for(let d=0,h=u.length;d<h;d++)Ah(u[d],t,i,!0)}}function i0(o,t,i,r){const l=JS(r);switch(i){case I0:return o*t;case Nh:return o*t/l.components*l.byteLength;case Oh:return o*t/l.components*l.byteLength;case F0:return o*t*2/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case z0:return o*t*3/l.components*l.byteLength;case Ei:return o*t*4/l.components*l.byteLength;case Bh:return o*t*4/l.components*l.byteLength;case Bc:case Ic:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zc:case Fc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(t,8)/2;case th:case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case yh:case Sh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Mh:case Eh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JS(o){switch(o){case sa:case N0:return{byteLength:1,components:1};case Wo:case O0:case Ko:return{byteLength:2,components:1};case Uh:case Lh:return{byteLength:2,components:4};case Sr:case Dh:case Bi:return{byteLength:4,components:1};case P0:case B0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ev(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function $S(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,x=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),h.onUploadCallback();let v;if(p instanceof Float32Array)v=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)v=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=o.SHORT;else if(p instanceof Uint32Array)v=o.UNSIGNED_INT;else if(p instanceof Int32Array)v=o.INT;else if(p instanceof Int8Array)v=o.BYTE;else if(p instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,_);else{x.sort((v,T)=>v.start-T.start);let y=0;for(let v=1;v<x.length;v++){const T=x[y],b=x[v];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++y,x[y]=b)}x.length=y+1;for(let v=0,T=x.length;v<T;v++){const b=x[v];o.bufferSubData(p,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var tM=`#ifdef USE_ALPHAHASH
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
#endif`,EM=`#define PI 3.141592653589793
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
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FM=`#ifdef USE_FOG
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
#endif`,YM=`ToonMaterial material;
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
#endif`,tE=`#if defined( RE_IndirectDiffuse )
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
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cE=`#if defined( USE_POINTS_UV )
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
#endif`,uE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ME=`#ifdef USE_NORMALMAP
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
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zE=`float getShadowMask() {
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
}`,FE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,GE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,kE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tb=`uniform sampler2D t2D;
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`#include <common>
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
}`,sb=`#if DEPTH_PACKING == 3200
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
}`,ob=`#define DISTANCE
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
}`,lb=`#define DISTANCE
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
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`uniform float scale;
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
}`,db=`uniform vec3 diffuse;
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
}`,hb=`#include <common>
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#define LAMBERT
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
}`,gb=`#define LAMBERT
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
}`,_b=`#define MATCAP
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
}`,vb=`#define MATCAP
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
}`,xb=`#define NORMAL
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
}`,yb=`#define NORMAL
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
}`,Sb=`#define PHONG
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
}`,Mb=`#define PHONG
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
}`,Eb=`#define STANDARD
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
}`,bb=`#define STANDARD
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
}`,Tb=`#define TOON
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
}`,Ab=`#define TOON
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
}`,Rb=`uniform float size;
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
}`,Cb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Db=`uniform vec3 color;
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
}`,Ub=`uniform float rotation;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:tM,alphahash_pars_fragment:eM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:aM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:oM,batching_pars_vertex:lM,batching_vertex:cM,begin_vertex:uM,beginnormal_vertex:fM,bsdfs:dM,iridescence_fragment:hM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:_M,clipping_planes_vertex:vM,color_fragment:xM,color_pars_fragment:yM,color_pars_vertex:SM,color_vertex:MM,common:EM,cube_uv_reflection_fragment:bM,defaultnormal_vertex:TM,displacementmap_pars_vertex:AM,displacementmap_vertex:RM,emissivemap_fragment:CM,emissivemap_pars_fragment:wM,colorspace_fragment:DM,colorspace_pars_fragment:UM,envmap_fragment:LM,envmap_common_pars_fragment:NM,envmap_pars_fragment:OM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:qM,envmap_vertex:BM,fog_vertex:IM,fog_pars_vertex:zM,fog_fragment:FM,fog_pars_fragment:HM,gradientmap_pars_fragment:GM,lightmap_pars_fragment:VM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:XM,lights_pars_begin:WM,lights_toon_fragment:YM,lights_toon_pars_fragment:jM,lights_phong_fragment:ZM,lights_phong_pars_fragment:KM,lights_physical_fragment:QM,lights_physical_pars_fragment:JM,lights_fragment_begin:$M,lights_fragment_maps:tE,lights_fragment_end:eE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:rE,map_fragment:sE,map_pars_fragment:oE,map_particle_fragment:lE,map_particle_pars_fragment:cE,metalnessmap_fragment:uE,metalnessmap_pars_fragment:fE,morphinstance_vertex:dE,morphcolor_vertex:hE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:_E,normal_fragment_maps:vE,normal_pars_fragment:xE,normal_pars_vertex:yE,normal_vertex:SE,normalmap_pars_fragment:ME,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:AE,opaque_fragment:RE,packing:CE,premultiplied_alpha_fragment:wE,project_vertex:DE,dithering_fragment:UE,dithering_pars_fragment:LE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:OE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:BE,shadowmap_vertex:IE,shadowmask_pars_fragment:zE,skinbase_vertex:FE,skinning_pars_vertex:HE,skinning_vertex:GE,skinnormal_vertex:VE,specularmap_fragment:kE,specularmap_pars_fragment:XE,tonemapping_fragment:WE,tonemapping_pars_fragment:qE,transmission_fragment:YE,transmission_pars_fragment:jE,uv_pars_fragment:ZE,uv_pars_vertex:KE,uv_vertex:QE,worldpos_vertex:JE,background_vert:$E,background_frag:tb,backgroundCube_vert:eb,backgroundCube_frag:nb,cube_vert:ib,cube_frag:ab,depth_vert:rb,depth_frag:sb,distanceRGBA_vert:ob,distanceRGBA_frag:lb,equirect_vert:cb,equirect_frag:ub,linedashed_vert:fb,linedashed_frag:db,meshbasic_vert:hb,meshbasic_frag:pb,meshlambert_vert:mb,meshlambert_frag:gb,meshmatcap_vert:_b,meshmatcap_frag:vb,meshnormal_vert:xb,meshnormal_frag:yb,meshphong_vert:Sb,meshphong_frag:Mb,meshphysical_vert:Eb,meshphysical_frag:bb,meshtoon_vert:Tb,meshtoon_frag:Ab,points_vert:Rb,points_frag:Cb,shadow_vert:wb,shadow_frag:Db,sprite_vert:Ub,sprite_frag:Lb},Vt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ni={basic:{uniforms:zn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:zn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:zn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:zn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:zn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:zn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:zn([Vt.points,Vt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:zn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:zn([Vt.common,Vt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:zn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:zn([Vt.sprite,Vt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:zn([Vt.common,Vt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:zn([Vt.lights,Vt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Ni.physical={uniforms:zn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Nc={r:0,b:0,g:0},dr=new oa,Nb=new Ye;function Ob(o,t,i,r,l,u,d){const h=new xe(0);let m=u===!0?0:1,p,_,x=null,y=0,v=null;function T(O){let L=O.isScene===!0?O.background:null;return L&&L.isTexture&&(L=(O.backgroundBlurriness>0?i:t).get(L)),L}function b(O){let L=!1;const w=T(O);w===null?g(h,m):w&&w.isColor&&(g(w,1),L=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,d):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,L){const w=T(L);w&&(w.isCubeTexture||w.mapping===jc)?(_===void 0&&(_=new Un(new Jo(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Ls(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,P,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),dr.copy(L.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),_.material.uniforms.envMap.value=w,_.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(dr)),_.material.toneMapped=Ue.getTransfer(w.colorSpace)!==Ge,(x!==w||y!==w.version||v!==o.toneMapping)&&(_.material.needsUpdate=!0,x=w,y=w.version,v=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new Un(new $o(2,2),new Xa({name:"BackgroundMaterial",uniforms:Ls(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(w.colorSpace)!==Ge,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(x!==w||y!==w.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,x=w,y=w.version,v=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function g(O,L){O.getRGB(Nc,q0(o)),r.buffers.color.setClear(Nc.r,Nc.g,Nc.b,L,d)}function B(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,L=1){h.set(O),m=L,g(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,g(h,m)},render:b,addToRenderList:M,dispose:B}}function Pb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,d=!1;function h(U,X,ut,gt,_t){let ct=!1;const I=x(gt,ut,X);u!==I&&(u=I,p(u.object)),ct=v(U,gt,ut,_t),ct&&T(U,gt,ut,_t),_t!==null&&t.update(_t,o.ELEMENT_ARRAY_BUFFER),(ct||d)&&(d=!1,L(U,X,ut,gt),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function m(){return o.createVertexArray()}function p(U){return o.bindVertexArray(U)}function _(U){return o.deleteVertexArray(U)}function x(U,X,ut){const gt=ut.wireframe===!0;let _t=r[U.id];_t===void 0&&(_t={},r[U.id]=_t);let ct=_t[X.id];ct===void 0&&(ct={},_t[X.id]=ct);let I=ct[gt];return I===void 0&&(I=y(m()),ct[gt]=I),I}function y(U){const X=[],ut=[],gt=[];for(let _t=0;_t<i;_t++)X[_t]=0,ut[_t]=0,gt[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ut,attributeDivisors:gt,object:U,attributes:{},index:null}}function v(U,X,ut,gt){const _t=u.attributes,ct=X.attributes;let I=0;const it=ut.getAttributes();for(const Y in it)if(it[Y].location>=0){const N=_t[Y];let st=ct[Y];if(st===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(st=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(st=U.instanceColor)),N===void 0||N.attribute!==st||st&&N.data!==st.data)return!0;I++}return u.attributesNum!==I||u.index!==gt}function T(U,X,ut,gt){const _t={},ct=X.attributes;let I=0;const it=ut.getAttributes();for(const Y in it)if(it[Y].location>=0){let N=ct[Y];N===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(N=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(N=U.instanceColor));const st={};st.attribute=N,N&&N.data&&(st.data=N.data),_t[Y]=st,I++}u.attributes=_t,u.attributesNum=I,u.index=gt}function b(){const U=u.newAttributes;for(let X=0,ut=U.length;X<ut;X++)U[X]=0}function M(U){g(U,0)}function g(U,X){const ut=u.newAttributes,gt=u.enabledAttributes,_t=u.attributeDivisors;ut[U]=1,gt[U]===0&&(o.enableVertexAttribArray(U),gt[U]=1),_t[U]!==X&&(o.vertexAttribDivisor(U,X),_t[U]=X)}function B(){const U=u.newAttributes,X=u.enabledAttributes;for(let ut=0,gt=X.length;ut<gt;ut++)X[ut]!==U[ut]&&(o.disableVertexAttribArray(ut),X[ut]=0)}function O(U,X,ut,gt,_t,ct,I){I===!0?o.vertexAttribIPointer(U,X,ut,_t,ct):o.vertexAttribPointer(U,X,ut,gt,_t,ct)}function L(U,X,ut,gt){b();const _t=gt.attributes,ct=ut.getAttributes(),I=X.defaultAttributeValues;for(const it in ct){const Y=ct[it];if(Y.location>=0){let Tt=_t[it];if(Tt===void 0&&(it==="instanceMatrix"&&U.instanceMatrix&&(Tt=U.instanceMatrix),it==="instanceColor"&&U.instanceColor&&(Tt=U.instanceColor)),Tt!==void 0){const N=Tt.normalized,st=Tt.itemSize,bt=t.get(Tt);if(bt===void 0)continue;const wt=bt.buffer,Ft=bt.type,qt=bt.bytesPerElement,ot=Ft===o.INT||Ft===o.UNSIGNED_INT||Tt.gpuType===Dh;if(Tt.isInterleavedBufferAttribute){const St=Tt.data,Ot=St.stride,ee=Tt.offset;if(St.isInstancedInterleavedBuffer){for(let Qt=0;Qt<Y.locationSize;Qt++)g(Y.location+Qt,St.meshPerAttribute);U.isInstancedMesh!==!0&&gt._maxInstanceCount===void 0&&(gt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Qt=0;Qt<Y.locationSize;Qt++)M(Y.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,wt);for(let Qt=0;Qt<Y.locationSize;Qt++)O(Y.location+Qt,st/Y.locationSize,Ft,N,Ot*qt,(ee+st/Y.locationSize*Qt)*qt,ot)}else{if(Tt.isInstancedBufferAttribute){for(let St=0;St<Y.locationSize;St++)g(Y.location+St,Tt.meshPerAttribute);U.isInstancedMesh!==!0&&gt._maxInstanceCount===void 0&&(gt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let St=0;St<Y.locationSize;St++)M(Y.location+St);o.bindBuffer(o.ARRAY_BUFFER,wt);for(let St=0;St<Y.locationSize;St++)O(Y.location+St,st/Y.locationSize,Ft,N,st*qt,st/Y.locationSize*St*qt,ot)}}else if(I!==void 0){const N=I[it];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(Y.location,N);break;case 3:o.vertexAttrib3fv(Y.location,N);break;case 4:o.vertexAttrib4fv(Y.location,N);break;default:o.vertexAttrib1fv(Y.location,N)}}}}B()}function w(){Q();for(const U in r){const X=r[U];for(const ut in X){const gt=X[ut];for(const _t in gt)_(gt[_t].object),delete gt[_t];delete X[ut]}delete r[U]}}function G(U){if(r[U.id]===void 0)return;const X=r[U.id];for(const ut in X){const gt=X[ut];for(const _t in gt)_(gt[_t].object),delete gt[_t];delete X[ut]}delete r[U.id]}function P(U){for(const X in r){const ut=r[X];if(ut[U.id]===void 0)continue;const gt=ut[U.id];for(const _t in gt)_(gt[_t].object),delete gt[_t];delete ut[U.id]}}function Q(){D(),d=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:G,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:M,disableUnusedAttributes:B}}function Bb(o,t,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,x){x!==0&&(o.drawArraysInstanced(r,p,_,x),i.update(_,r,x))}function h(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let v=0;for(let T=0;T<x;T++)v+=_[T];i.update(v,r,1)}function m(p,_,x,y){if(x===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let T=0;T<p.length;T++)d(p[T],_[T],y[T]);else{v.multiDrawArraysInstancedWEBGL(r,p,0,_,0,y,0,x);let T=0;for(let b=0;b<x;b++)T+=_[b]*y[b];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Ib(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Ei&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const Q=P===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==sa&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Bi&&!Q)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),w=T>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:v,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:L,vertexTextures:w,maxSamples:G}}function zb(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new pr,h=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const v=x.length!==0||y||r!==0||l;return l=y,r=x.length,v},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=_(x,y,0)},this.setState=function(x,y,v){const T=x.clippingPlanes,b=x.clipIntersection,M=x.clipShadows,g=o.get(x);if(!l||T===null||T.length===0||u&&!M)u?_(null):p();else{const B=u?0:r,O=B*4;let L=g.clippingState||null;m.value=L,L=_(T,y,O,v);for(let w=0;w!==O;++w)L[w]=i[w];g.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(x,y,v,T){const b=x!==null?x.length:0;let M=null;if(b!==0){if(M=m.value,T!==!0||M===null){const g=v+b*4,B=y.matrixWorldInverse;h.getNormalMatrix(B),(M===null||M.length<g)&&(M=new Float32Array(g));for(let O=0,L=v;O!==b;++O,L+=4)d.copy(x[O]).applyMatrix4(B,h),d.normal.toArray(M,L),M[L+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function Fb(o){let t=new WeakMap;function i(d,h){return h===qd?d.mapping=ws:h===Yd&&(d.mapping=Ds),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===qd||h===Yd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new BS(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const bs=4,a0=[.125,.215,.35,.446,.526,.582],vr=20,Ud=new tv,r0=new xe;let Ld=null,Nd=0,Od=0,Pd=!1;const mr=(1+Math.sqrt(5))/2,Es=1/mr,s0=[new rt(-mr,Es,0),new rt(mr,Es,0),new rt(-Es,0,mr),new rt(Es,0,mr),new rt(0,mr,-Es),new rt(0,mr,Es),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],Hb=new rt;class o0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=Hb}=u;Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ld,Nd,Od),this._renderer.xr.enabled=Pd,t.scissorTest=!1,Oc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ws||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Ko,format:Ei,colorSpace:Us,depthBuffer:!1},l=l0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gb(u)),this._blurMaterial=Vb(u,t,i)}return l}_compileMaterial(t){const i=new Un(this._lodPlanes[0],t);this._renderer.compile(i,Ud)}_sceneToCubeUV(t,i,r,l,u){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,v=x.toneMapping;x.getClearColor(r0),x.toneMapping=Ga,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null));const b=new za({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),M=new Un(new Jo,b);let g=!1;const B=t.background;B?B.isColor&&(b.color.copy(B),t.background=null,g=!0):(b.color.copy(r0),g=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[O],u.y,u.z)):L===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[O]));const w=this._cubeSize;Oc(l,L*w,O>2?w:0,w,w),x.setRenderTarget(l),g&&x.render(M,m),x.render(t,m)}M.geometry.dispose(),M.material.dispose(),x.toneMapping=v,x.autoClear=y,t.background=B}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ws||t.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c0());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Un(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Oc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Ud)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=s0[(l-u-1)%s0.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Un(this._lodPlanes[l],p),y=p.uniforms,v=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*v):2*Math.PI/(2*vr-1),b=u/T,M=isFinite(u)?1+Math.floor(_*b):vr;M>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${vr}`);const g=[];let B=0;for(let P=0;P<vr;++P){const Q=P/b,D=Math.exp(-Q*Q/2);g.push(D),P===0?B+=D:P<M&&(B+=2*D)}for(let P=0;P<g.length;P++)g[P]=g[P]/B;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=g,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:O}=this;y.dTheta.value=T,y.mipInt.value=O-r;const L=this._sizeLods[l],w=3*L*(l>O-bs?l-O+bs:0),G=4*(this._cubeSize-L);Oc(i,w,G,3*L,2*L),m.setRenderTarget(i),m.render(x,Ud)}}function Gb(o){const t=[],i=[],r=[];let l=o;const u=o-bs+1+a0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-bs?m=a0[d-o+bs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),_=-p,x=1+p,y=[_,_,x,_,x,x,_,_,x,x,_,x],v=6,T=6,b=3,M=2,g=1,B=new Float32Array(b*T*v),O=new Float32Array(M*T*v),L=new Float32Array(g*T*v);for(let G=0;G<v;G++){const P=G%3*2/3-1,Q=G>2?0:-1,D=[P,Q,0,P+2/3,Q,0,P+2/3,Q+1,0,P,Q,0,P+2/3,Q+1,0,P,Q+1,0];B.set(D,b*T*G),O.set(y,M*T*G);const U=[G,G,G,G,G,G];L.set(U,g*T*G)}const w=new Hn;w.setAttribute("position",new Fn(B,b)),w.setAttribute("uv",new Fn(O,M)),w.setAttribute("faceIndex",new Fn(L,g)),t.push(w),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function l0(o,t,i){const r=new Mr(o,t,i);return r.texture.mapping=jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Oc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function Vb(o,t,i){const r=new Float32Array(vr),l=new rt(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function c0(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function u0(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Hh(){return`

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
	`}function kb(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===qd||m===Yd,_=m===ws||m===Ds;if(p||_){let x=t.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new o0(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const v=h.image;return p&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new o0(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Xb(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Zo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Wb(o,t,i,r){const l={},u=new WeakMap;function d(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);y.removeEventListener("dispose",d),delete l[y.id];const v=u.get(y);v&&(t.remove(v),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const v in y)t.update(y[v],o.ARRAY_BUFFER)}function p(x){const y=[],v=x.index,T=x.attributes.position;let b=0;if(v!==null){const B=v.array;b=v.version;for(let O=0,L=B.length;O<L;O+=3){const w=B[O+0],G=B[O+1],P=B[O+2];y.push(w,G,G,P,P,w)}}else if(T!==void 0){const B=T.array;b=T.version;for(let O=0,L=B.length/3-1;O<L;O+=3){const w=O+0,G=O+1,P=O+2;y.push(w,G,G,P,P,w)}}else return;const M=new(G0(y)?W0:X0)(y,1);M.version=b;const g=u.get(x);g&&t.remove(g),u.set(x,M)}function _(x){const y=u.get(x);if(y){const v=x.index;v!==null&&y.version<v.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function qb(o,t,i){let r;function l(y){r=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function m(y,v){o.drawElements(r,v,u,y*d),i.update(v,r,1)}function p(y,v,T){T!==0&&(o.drawElementsInstanced(r,v,u,y*d,T),i.update(v,r,T))}function _(y,v,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,u,y,0,T);let M=0;for(let g=0;g<T;g++)M+=v[g];i.update(M,r,1)}function x(y,v,T,b){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<y.length;g++)p(y[g]/d,v[g],b[g]);else{M.multiDrawElementsInstancedWEBGL(r,v,0,u,y,0,b,0,T);let g=0;for(let B=0;B<T;B++)g+=v[B]*b[B];i.update(g,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function Yb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function jb(o,t,i){const r=new WeakMap,l=new rn;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let y=r.get(h);if(y===void 0||y.count!==x){let D=function(){P.dispose(),r.delete(h),h.removeEventListener("dispose",D)};y!==void 0&&y.texture.dispose();const v=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],g=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let O=0;v===!0&&(O=1),T===!0&&(O=2),b===!0&&(O=3);let L=h.attributes.position.count*O,w=1;L>t.maxTextureSize&&(w=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const G=new Float32Array(L*w*4*x),P=new V0(G,L,w,x);P.type=Bi,P.needsUpdate=!0;const Q=O*4;for(let U=0;U<x;U++){const X=M[U],ut=g[U],gt=B[U],_t=L*w*4*U;for(let ct=0;ct<X.count;ct++){const I=ct*Q;v===!0&&(l.fromBufferAttribute(X,ct),G[_t+I+0]=l.x,G[_t+I+1]=l.y,G[_t+I+2]=l.z,G[_t+I+3]=0),T===!0&&(l.fromBufferAttribute(ut,ct),G[_t+I+4]=l.x,G[_t+I+5]=l.y,G[_t+I+6]=l.z,G[_t+I+7]=0),b===!0&&(l.fromBufferAttribute(gt,ct),G[_t+I+8]=l.x,G[_t+I+9]=l.y,G[_t+I+10]=l.z,G[_t+I+11]=gt.itemSize===4?l.w:1)}}y={count:x,texture:P,size:new Te(L,w)},r.set(h,y),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let v=0;for(let b=0;b<p.length;b++)v+=p[b];const T=h.morphTargetsRelative?1:1-v;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function Zb(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const nv=new Ln,f0=new J0(1,1),iv=new V0,av=new xS,rv=new j0,d0=[],h0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);function Bs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=d0[l];if(u===void 0&&(u=new Float32Array(l),d0[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function pn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function mn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Zc(o,t){let i=h0[t];i===void 0&&(i=new Int32Array(t),h0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Kb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Qb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2fv(this.addr,t),mn(i,t)}}function Jb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;o.uniform3fv(this.addr,t),mn(i,t)}}function $b(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4fv(this.addr,t),mn(i,t)}}function tT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;g0.set(r),o.uniformMatrix2fv(this.addr,!1,g0),mn(i,r)}}function eT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;m0.set(r),o.uniformMatrix3fv(this.addr,!1,m0),mn(i,r)}}function nT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;p0.set(r),o.uniformMatrix4fv(this.addr,!1,p0),mn(i,r)}}function iT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2iv(this.addr,t),mn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3iv(this.addr,t),mn(i,t)}}function sT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4iv(this.addr,t),mn(i,t)}}function oT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2uiv(this.addr,t),mn(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3uiv(this.addr,t),mn(i,t)}}function uT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4uiv(this.addr,t),mn(i,t)}}function fT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(f0.compareFunction=H0,u=f0):u=nv,i.setTexture2D(t||u,l)}function dT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||av,l)}function hT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||rv,l)}function pT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||iv,l)}function mT(o){switch(o){case 5126:return Kb;case 35664:return Qb;case 35665:return Jb;case 35666:return $b;case 35674:return tT;case 35675:return eT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return aT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return oT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}function gT(o,t){o.uniform1fv(this.addr,t)}function _T(o,t){const i=Bs(t,this.size,2);o.uniform2fv(this.addr,i)}function vT(o,t){const i=Bs(t,this.size,3);o.uniform3fv(this.addr,i)}function xT(o,t){const i=Bs(t,this.size,4);o.uniform4fv(this.addr,i)}function yT(o,t){const i=Bs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ST(o,t){const i=Bs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function MT(o,t){const i=Bs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ET(o,t){o.uniform1iv(this.addr,t)}function bT(o,t){o.uniform2iv(this.addr,t)}function TT(o,t){o.uniform3iv(this.addr,t)}function AT(o,t){o.uniform4iv(this.addr,t)}function RT(o,t){o.uniform1uiv(this.addr,t)}function CT(o,t){o.uniform2uiv(this.addr,t)}function wT(o,t){o.uniform3uiv(this.addr,t)}function DT(o,t){o.uniform4uiv(this.addr,t)}function UT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||nv,u[d])}function LT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||av,u[d])}function NT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||rv,u[d])}function OT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||iv,u[d])}function PT(o){switch(o){case 5126:return gT;case 35664:return _T;case 35665:return vT;case 35666:return xT;case 35674:return yT;case 35675:return ST;case 35676:return MT;case 5124:case 35670:return ET;case 35667:case 35671:return bT;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return RT;case 36294:return CT;case 36295:return wT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return OT}}class BT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=mT(i.type)}}class IT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PT(i.type)}}class zT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function _0(o,t){o.seq.push(t),o.map[t.id]=t}function FT(o,t,i){const r=o.name,l=r.length;for(Bd.lastIndex=0;;){const u=Bd.exec(r),d=Bd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){_0(i,p===void 0?new BT(h,o,t):new IT(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new zT(h),_0(i,x)),i=x}}}class Hc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);FT(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function v0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const HT=37297;let GT=0;function VT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const x0=new me;function kT(o){Ue._getMatrix(x0,Ue.workingColorSpace,o);const t=`mat3( ${x0.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case Gc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function y0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+VT(o.getShaderSource(t),h)}else return u}function XT(o,t){const i=kT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function WT(o,t){let i;switch(t){case qy:i="Linear";break;case Yy:i="Reinhard";break;case jy:i="Cineon";break;case Zy:i="ACESFilmic";break;case Qy:i="AgX";break;case Jy:i="Neutral";break;case Ky:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new rt;function qT(){Ue.getLuminanceCoefficients(Pc);const o=Pc.x.toFixed(4),t=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function jT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function ZT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Xo(o){return o!==""}function S0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function M0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const KT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(KT,JT)}const QT=new Map;function JT(o,t){let i=ve[t];if(i===void 0){const r=QT.get(t);if(r!==void 0)i=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Rh(i)}const $T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E0(o){return o.replace($T,t1)}function t1(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function b0(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function e1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===D0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ty?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function n1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ws:case Ds:t="ENVMAP_TYPE_CUBE";break;case jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i1(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function a1(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case U0:t="ENVMAP_BLENDING_MULTIPLY";break;case Xy:t="ENVMAP_BLENDING_MIX";break;case Wy:t="ENVMAP_BLENDING_ADD";break}return t}function r1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function s1(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=e1(i),p=n1(i),_=i1(i),x=a1(i),y=r1(i),v=YT(i),T=jT(u),b=l.createProgram();let M,g,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),g.length>0&&(g+=`
`)):(M=[b0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),g=[b0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ve.tonemapping_pars_fragment:"",i.toneMapping!==Ga?WT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,XT("linearToOutputTexel",i.outputColorSpace),qT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),d=Rh(d),d=S0(d,i),d=M0(d,i),h=Rh(h),h=S0(h,i),h=M0(h,i),d=E0(d),h=E0(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=B+M+d,L=B+g+h,w=v0(l,l.VERTEX_SHADER,O),G=v0(l,l.FRAGMENT_SHADER,L);l.attachShader(b,w),l.attachShader(b,G),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function P(X){if(o.debug.checkShaderErrors){const ut=l.getProgramInfoLog(b)||"",gt=l.getShaderInfoLog(w)||"",_t=l.getShaderInfoLog(G)||"",ct=ut.trim(),I=gt.trim(),it=_t.trim();let Y=!0,Tt=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,w,G);else{const N=y0(l,w,"vertex"),st=y0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ct+`
`+N+`
`+st)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(I===""||it==="")&&(Tt=!1);Tt&&(X.diagnostics={runnable:Y,programLog:ct,vertexShader:{log:I,prefix:M},fragmentShader:{log:it,prefix:g}})}l.deleteShader(w),l.deleteShader(G),Q=new Hc(l,b),D=ZT(l,b)}let Q;this.getUniforms=function(){return Q===void 0&&P(this),Q};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(b,HT)),U},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GT++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=G,this}let o1=0;class l1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new c1(t),i.set(t,r)),r}}class c1{constructor(t){this.id=o1++,this.code=t,this.usedTimes=0}}function u1(o,t,i,r,l,u,d){const h=new Fh,m=new l1,p=new Set,_=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let v=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,U,X,ut,gt){const _t=ut.fog,ct=gt.geometry,I=D.isMeshStandardMaterial?ut.environment:null,it=(D.isMeshStandardMaterial?i:t).get(D.envMap||I),Y=it&&it.mapping===jc?it.image.height:null,Tt=T[D.type];D.precision!==null&&(v=l.getMaxPrecision(D.precision),v!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",v,"instead."));const N=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,st=N!==void 0?N.length:0;let bt=0;ct.morphAttributes.position!==void 0&&(bt=1),ct.morphAttributes.normal!==void 0&&(bt=2),ct.morphAttributes.color!==void 0&&(bt=3);let wt,Ft,qt,ot;if(Tt){const Ce=Ni[Tt];wt=Ce.vertexShader,Ft=Ce.fragmentShader}else wt=D.vertexShader,Ft=D.fragmentShader,m.update(D),qt=m.getVertexShaderID(D),ot=m.getFragmentShaderID(D);const St=o.getRenderTarget(),Ot=o.state.buffers.depth.getReversed(),ee=gt.isInstancedMesh===!0,Qt=gt.isBatchedMesh===!0,de=!!D.map,Ke=!!D.matcap,V=!!it,Ne=!!D.aoMap,fe=!!D.lightMap,re=!!D.bumpMap,kt=!!D.normalMap,z=!!D.displacementMap,at=!!D.emissiveMap,et=!!D.metalnessMap,At=!!D.roughnessMap,ht=D.anisotropy>0,C=D.clearcoat>0,E=D.dispersion>0,H=D.iridescence>0,K=D.sheen>0,$=D.transmission>0,nt=ht&&!!D.anisotropyMap,Ct=C&&!!D.clearcoatMap,xt=C&&!!D.clearcoatNormalMap,zt=C&&!!D.clearcoatRoughnessMap,Xt=H&&!!D.iridescenceMap,Rt=H&&!!D.iridescenceThicknessMap,Pt=K&&!!D.sheenColorMap,te=K&&!!D.sheenRoughnessMap,jt=!!D.specularMap,Bt=!!D.specularColorMap,he=!!D.specularIntensityMap,q=$&&!!D.transmissionMap,Lt=$&&!!D.thicknessMap,It=!!D.gradientMap,Wt=!!D.alphaMap,Dt=D.alphaTest>0,Et=!!D.alphaHash,Kt=!!D.extensions;let ue=Ga;D.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Oe={shaderID:Tt,shaderType:D.type,shaderName:D.name,vertexShader:wt,fragmentShader:Ft,defines:D.defines,customVertexShaderID:qt,customFragmentShaderID:ot,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:v,batching:Qt,batchingColor:Qt&&gt._colorsTexture!==null,instancing:ee,instancingColor:ee&&gt.instanceColor!==null,instancingMorph:ee&&gt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Us,alphaToCoverage:!!D.alphaToCoverage,map:de,matcap:Ke,envMap:V,envMapMode:V&&it.mapping,envMapCubeUVHeight:Y,aoMap:Ne,lightMap:fe,bumpMap:re,normalMap:kt,displacementMap:y&&z,emissiveMap:at,normalMapObjectSpace:kt&&D.normalMapType===iS,normalMapTangentSpace:kt&&D.normalMapType===nS,metalnessMap:et,roughnessMap:At,anisotropy:ht,anisotropyMap:nt,clearcoat:C,clearcoatMap:Ct,clearcoatNormalMap:xt,clearcoatRoughnessMap:zt,dispersion:E,iridescence:H,iridescenceMap:Xt,iridescenceThicknessMap:Rt,sheen:K,sheenColorMap:Pt,sheenRoughnessMap:te,specularMap:jt,specularColorMap:Bt,specularIntensityMap:he,transmission:$,transmissionMap:q,thicknessMap:Lt,gradientMap:It,opaque:D.transparent===!1&&D.blending===Ts&&D.alphaToCoverage===!1,alphaMap:Wt,alphaTest:Dt,alphaHash:Et,combine:D.combine,mapUv:de&&b(D.map.channel),aoMapUv:Ne&&b(D.aoMap.channel),lightMapUv:fe&&b(D.lightMap.channel),bumpMapUv:re&&b(D.bumpMap.channel),normalMapUv:kt&&b(D.normalMap.channel),displacementMapUv:z&&b(D.displacementMap.channel),emissiveMapUv:at&&b(D.emissiveMap.channel),metalnessMapUv:et&&b(D.metalnessMap.channel),roughnessMapUv:At&&b(D.roughnessMap.channel),anisotropyMapUv:nt&&b(D.anisotropyMap.channel),clearcoatMapUv:Ct&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:xt&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:te&&b(D.sheenRoughnessMap.channel),specularMapUv:jt&&b(D.specularMap.channel),specularColorMapUv:Bt&&b(D.specularColorMap.channel),specularIntensityMapUv:he&&b(D.specularIntensityMap.channel),transmissionMapUv:q&&b(D.transmissionMap.channel),thicknessMapUv:Lt&&b(D.thicknessMap.channel),alphaMapUv:Wt&&b(D.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(kt||ht),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:gt.isPoints===!0&&!!ct.attributes.uv&&(de||Wt),fog:!!_t,useFog:D.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ot,skinning:gt.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:bt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:de&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:at&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Oi,flipSided:D.side===qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Kt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&D.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function g(D){const U=[];if(D.shaderID?U.push(D.shaderID):(U.push(D.customVertexShaderID),U.push(D.customFragmentShaderID)),D.defines!==void 0)for(const X in D.defines)U.push(X),U.push(D.defines[X]);return D.isRawShaderMaterial===!1&&(B(U,D),O(U,D),U.push(o.outputColorSpace)),U.push(D.customProgramCacheKey),U.join()}function B(D,U){D.push(U.precision),D.push(U.outputColorSpace),D.push(U.envMapMode),D.push(U.envMapCubeUVHeight),D.push(U.mapUv),D.push(U.alphaMapUv),D.push(U.lightMapUv),D.push(U.aoMapUv),D.push(U.bumpMapUv),D.push(U.normalMapUv),D.push(U.displacementMapUv),D.push(U.emissiveMapUv),D.push(U.metalnessMapUv),D.push(U.roughnessMapUv),D.push(U.anisotropyMapUv),D.push(U.clearcoatMapUv),D.push(U.clearcoatNormalMapUv),D.push(U.clearcoatRoughnessMapUv),D.push(U.iridescenceMapUv),D.push(U.iridescenceThicknessMapUv),D.push(U.sheenColorMapUv),D.push(U.sheenRoughnessMapUv),D.push(U.specularMapUv),D.push(U.specularColorMapUv),D.push(U.specularIntensityMapUv),D.push(U.transmissionMapUv),D.push(U.thicknessMapUv),D.push(U.combine),D.push(U.fogExp2),D.push(U.sizeAttenuation),D.push(U.morphTargetsCount),D.push(U.morphAttributeCount),D.push(U.numDirLights),D.push(U.numPointLights),D.push(U.numSpotLights),D.push(U.numSpotLightMaps),D.push(U.numHemiLights),D.push(U.numRectAreaLights),D.push(U.numDirLightShadows),D.push(U.numPointLightShadows),D.push(U.numSpotLightShadows),D.push(U.numSpotLightShadowsWithMaps),D.push(U.numLightProbes),D.push(U.shadowMapType),D.push(U.toneMapping),D.push(U.numClippingPlanes),D.push(U.numClipIntersection),D.push(U.depthPacking)}function O(D,U){h.disableAll(),U.supportsVertexTextures&&h.enable(0),U.instancing&&h.enable(1),U.instancingColor&&h.enable(2),U.instancingMorph&&h.enable(3),U.matcap&&h.enable(4),U.envMap&&h.enable(5),U.normalMapObjectSpace&&h.enable(6),U.normalMapTangentSpace&&h.enable(7),U.clearcoat&&h.enable(8),U.iridescence&&h.enable(9),U.alphaTest&&h.enable(10),U.vertexColors&&h.enable(11),U.vertexAlphas&&h.enable(12),U.vertexUv1s&&h.enable(13),U.vertexUv2s&&h.enable(14),U.vertexUv3s&&h.enable(15),U.vertexTangents&&h.enable(16),U.anisotropy&&h.enable(17),U.alphaHash&&h.enable(18),U.batching&&h.enable(19),U.dispersion&&h.enable(20),U.batchingColor&&h.enable(21),U.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),D.push(h.mask)}function L(D){const U=T[D.type];let X;if(U){const ut=Ni[U];X=LS.clone(ut.uniforms)}else X=D.uniforms;return X}function w(D,U){let X;for(let ut=0,gt=_.length;ut<gt;ut++){const _t=_[ut];if(_t.cacheKey===U){X=_t,++X.usedTimes;break}}return X===void 0&&(X=new s1(o,U,D,u),_.push(X)),X}function G(D){if(--D.usedTimes===0){const U=_.indexOf(D);_[U]=_[_.length-1],_.pop(),D.destroy()}}function P(D){m.remove(D)}function Q(){m.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:L,acquireProgram:w,releaseProgram:G,releaseShaderCache:P,programs:_,dispose:Q}}function f1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function d1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function T0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function A0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(x,y,v,T,b,M){let g=o[t];return g===void 0?(g={id:x.id,object:x,geometry:y,material:v,groupOrder:T,renderOrder:x.renderOrder,z:b,group:M},o[t]=g):(g.id=x.id,g.object=x,g.geometry=y,g.material=v,g.groupOrder=T,g.renderOrder=x.renderOrder,g.z=b,g.group=M),t++,g}function h(x,y,v,T,b,M){const g=d(x,y,v,T,b,M);v.transmission>0?r.push(g):v.transparent===!0?l.push(g):i.push(g)}function m(x,y,v,T,b,M){const g=d(x,y,v,T,b,M);v.transmission>0?r.unshift(g):v.transparent===!0?l.unshift(g):i.unshift(g)}function p(x,y){i.length>1&&i.sort(x||d1),r.length>1&&r.sort(y||T0),l.length>1&&l.sort(y||T0)}function _(){for(let x=t,y=o.length;x<y;x++){const v=o[x];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function h1(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new A0,o.set(r,[d])):l>=u.length?(d=new A0,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function p1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new rt,color:new xe};break;case"SpotLight":i={position:new rt,direction:new rt,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[t.id]=i,i}}}function m1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let g1=0;function _1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function v1(o){const t=new p1,i=m1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,u=new Ye,d=new Ye;function h(p){let _=0,x=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let v=0,T=0,b=0,M=0,g=0,B=0,O=0,L=0,w=0,G=0,P=0;p.sort(_1);for(let D=0,U=p.length;D<U;D++){const X=p[D],ut=X.color,gt=X.intensity,_t=X.distance,ct=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)_+=ut.r*gt,x+=ut.g*gt,y+=ut.b*gt;else if(X.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(X.sh.coefficients[I],gt);P++}else if(X.isDirectionalLight){const I=t.get(X);if(I.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const it=X.shadow,Y=i.get(X);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,r.directionalShadow[v]=Y,r.directionalShadowMap[v]=ct,r.directionalShadowMatrix[v]=X.shadow.matrix,B++}r.directional[v]=I,v++}else if(X.isSpotLight){const I=t.get(X);I.position.setFromMatrixPosition(X.matrixWorld),I.color.copy(ut).multiplyScalar(gt),I.distance=_t,I.coneCos=Math.cos(X.angle),I.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),I.decay=X.decay,r.spot[b]=I;const it=X.shadow;if(X.map&&(r.spotLightMap[w]=X.map,w++,it.updateMatrices(X),X.castShadow&&G++),r.spotLightMatrix[b]=it.matrix,X.castShadow){const Y=i.get(X);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,r.spotShadow[b]=Y,r.spotShadowMap[b]=ct,L++}b++}else if(X.isRectAreaLight){const I=t.get(X);I.color.copy(ut).multiplyScalar(gt),I.halfWidth.set(X.width*.5,0,0),I.halfHeight.set(0,X.height*.5,0),r.rectArea[M]=I,M++}else if(X.isPointLight){const I=t.get(X);if(I.color.copy(X.color).multiplyScalar(X.intensity),I.distance=X.distance,I.decay=X.decay,X.castShadow){const it=X.shadow,Y=i.get(X);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=ct,r.pointShadowMatrix[T]=X.shadow.matrix,O++}r.point[T]=I,T++}else if(X.isHemisphereLight){const I=t.get(X);I.skyColor.copy(X.color).multiplyScalar(gt),I.groundColor.copy(X.groundColor).multiplyScalar(gt),r.hemi[g]=I,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Vt.LTC_FLOAT_1,r.rectAreaLTC2=Vt.LTC_FLOAT_2):(r.rectAreaLTC1=Vt.LTC_HALF_1,r.rectAreaLTC2=Vt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=y;const Q=r.hash;(Q.directionalLength!==v||Q.pointLength!==T||Q.spotLength!==b||Q.rectAreaLength!==M||Q.hemiLength!==g||Q.numDirectionalShadows!==B||Q.numPointShadows!==O||Q.numSpotShadows!==L||Q.numSpotMaps!==w||Q.numLightProbes!==P)&&(r.directional.length=v,r.spot.length=b,r.rectArea.length=M,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=L+w-G,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=P,Q.directionalLength=v,Q.pointLength=T,Q.spotLength=b,Q.rectAreaLength=M,Q.hemiLength=g,Q.numDirectionalShadows=B,Q.numPointShadows=O,Q.numSpotShadows=L,Q.numSpotMaps=w,Q.numLightProbes=P,r.version=g1++)}function m(p,_){let x=0,y=0,v=0,T=0,b=0;const M=_.matrixWorldInverse;for(let g=0,B=p.length;g<B;g++){const O=p[g];if(O.isDirectionalLight){const L=r.directional[x];L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),x++}else if(O.isSpotLight){const L=r.spot[v];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),v++}else if(O.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),d.identity(),u.copy(O.matrixWorld),u.premultiply(M),d.extractRotation(u),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),T++}else if(O.isPointLight){const L=r.point[y];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),y++}else if(O.isHemisphereLight){const L=r.hemi[b];L.direction.setFromMatrixPosition(O.matrixWorld),L.direction.transformDirection(M),b++}}}return{setup:h,setupView:m,state:r}}function R0(o){const t=new v1(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function x1(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new R0(o),t.set(l,[h])):u>=d.length?(h=new R0(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const y1=`void main() {
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
}`;function M1(o,t,i){let r=new Q0;const l=new Te,u=new Te,d=new rn,h=new jS({depthPacking:eS}),m=new ZS,p={},_=i.maxTextureSize,x={[ka]:qn,[qn]:ka,[Oi]:Oi},y=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:y1,fragmentShader:S1}),v=y.clone();v.defines.HORIZONTAL_PASS=1;const T=new Hn;T.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Un(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D0;let g=this.type;this.render=function(G,P,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),U=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(Ha),ut.buffers.depth.getReversed()===!0?ut.buffers.color.setClear(0,0,0,0):ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const gt=g!==aa&&this.type===aa,_t=g===aa&&this.type!==aa;for(let ct=0,I=G.length;ct<I;ct++){const it=G[ct],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Tt=Y.getFrameExtents();if(l.multiply(Tt),u.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/Tt.x),l.x=u.x*Tt.x,Y.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/Tt.y),l.y=u.y*Tt.y,Y.mapSize.y=u.y)),Y.map===null||gt===!0||_t===!0){const st=this.type!==aa?{minFilter:ni,magFilter:ni}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Mr(l.x,l.y,st),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const N=Y.getViewportCount();for(let st=0;st<N;st++){const bt=Y.getViewport(st);d.set(u.x*bt.x,u.y*bt.y,u.x*bt.z,u.y*bt.w),ut.viewport(d),Y.updateMatrices(it,st),r=Y.getFrustum(),L(P,Q,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===aa&&B(Y,Q),Y.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(D,U,X)};function B(G,P){const Q=t.update(b);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,v.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,v.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Mr(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(P,null,Q,y,b,null),v.uniforms.shadow_pass.value=G.mapPass.texture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(P,null,Q,v,b,null)}function O(G,P,Q,D){let U=null;const X=Q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(X!==void 0)U=X;else if(U=Q.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const ut=U.uuid,gt=P.uuid;let _t=p[ut];_t===void 0&&(_t={},p[ut]=_t);let ct=_t[gt];ct===void 0&&(ct=U.clone(),_t[gt]=ct,P.addEventListener("dispose",w)),U=ct}if(U.visible=P.visible,U.wireframe=P.wireframe,D===aa?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:x[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,Q.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const ut=o.properties.get(U);ut.light=Q}return U}function L(G,P,Q,D,U){if(G.visible===!1)return;if(G.layers.test(P.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&U===aa)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,G.matrixWorld);const gt=t.update(G),_t=G.material;if(Array.isArray(_t)){const ct=gt.groups;for(let I=0,it=ct.length;I<it;I++){const Y=ct[I],Tt=_t[Y.materialIndex];if(Tt&&Tt.visible){const N=O(G,Tt,D,U);G.onBeforeShadow(o,G,P,Q,gt,N,Y),o.renderBufferDirect(Q,null,gt,N,G,Y),G.onAfterShadow(o,G,P,Q,gt,N,Y)}}}else if(_t.visible){const ct=O(G,_t,D,U);G.onBeforeShadow(o,G,P,Q,gt,ct,null),o.renderBufferDirect(Q,null,gt,ct,G,null),G.onAfterShadow(o,G,P,Q,gt,ct,null)}}const ut=G.children;for(let gt=0,_t=ut.length;gt<_t;gt++)L(ut[gt],P,Q,D,U)}function w(G){G.target.removeEventListener("dispose",w);for(const Q in p){const D=p[Q],U=G.target.uuid;U in D&&(D[U].dispose(),delete D[U])}}}const E1={[Fd]:Hd,[Gd]:Xd,[Vd]:Wd,[Cs]:kd,[Hd]:Fd,[Xd]:Gd,[Wd]:Vd,[kd]:Cs};function b1(o,t){function i(){let q=!1;const Lt=new rn;let It=null;const Wt=new rn(0,0,0,0);return{setMask:function(Dt){It!==Dt&&!q&&(o.colorMask(Dt,Dt,Dt,Dt),It=Dt)},setLocked:function(Dt){q=Dt},setClear:function(Dt,Et,Kt,ue,Oe){Oe===!0&&(Dt*=ue,Et*=ue,Kt*=ue),Lt.set(Dt,Et,Kt,ue),Wt.equals(Lt)===!1&&(o.clearColor(Dt,Et,Kt,ue),Wt.copy(Lt))},reset:function(){q=!1,It=null,Wt.set(-1,0,0,0)}}}function r(){let q=!1,Lt=!1,It=null,Wt=null,Dt=null;return{setReversed:function(Et){if(Lt!==Et){const Kt=t.get("EXT_clip_control");Et?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Lt=Et;const ue=Dt;Dt=null,this.setClear(ue)}},getReversed:function(){return Lt},setTest:function(Et){Et?St(o.DEPTH_TEST):Ot(o.DEPTH_TEST)},setMask:function(Et){It!==Et&&!q&&(o.depthMask(Et),It=Et)},setFunc:function(Et){if(Lt&&(Et=E1[Et]),Wt!==Et){switch(Et){case Fd:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Gd:o.depthFunc(o.LESS);break;case Cs:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case kd:o.depthFunc(o.GEQUAL);break;case Xd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Wt=Et}},setLocked:function(Et){q=Et},setClear:function(Et){Dt!==Et&&(Lt&&(Et=1-Et),o.clearDepth(Et),Dt=Et)},reset:function(){q=!1,It=null,Wt=null,Dt=null,Lt=!1}}}function l(){let q=!1,Lt=null,It=null,Wt=null,Dt=null,Et=null,Kt=null,ue=null,Oe=null;return{setTest:function(Ce){q||(Ce?St(o.STENCIL_TEST):Ot(o.STENCIL_TEST))},setMask:function(Ce){Lt!==Ce&&!q&&(o.stencilMask(Ce),Lt=Ce)},setFunc:function(Ce,hi,un){(It!==Ce||Wt!==hi||Dt!==un)&&(o.stencilFunc(Ce,hi,un),It=Ce,Wt=hi,Dt=un)},setOp:function(Ce,hi,un){(Et!==Ce||Kt!==hi||ue!==un)&&(o.stencilOp(Ce,hi,un),Et=Ce,Kt=hi,ue=un)},setLocked:function(Ce){q=Ce},setClear:function(Ce){Oe!==Ce&&(o.clearStencil(Ce),Oe=Ce)},reset:function(){q=!1,Lt=null,It=null,Wt=null,Dt=null,Et=null,Kt=null,ue=null,Oe=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},x={},y=new WeakMap,v=[],T=null,b=!1,M=null,g=null,B=null,O=null,L=null,w=null,G=null,P=new xe(0,0,0),Q=0,D=!1,U=null,X=null,ut=null,gt=null,_t=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,it=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=it>=2);let Tt=null,N={};const st=o.getParameter(o.SCISSOR_BOX),bt=o.getParameter(o.VIEWPORT),wt=new rn().fromArray(st),Ft=new rn().fromArray(bt);function qt(q,Lt,It,Wt){const Dt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(q,Et),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Kt=0;Kt<It;Kt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Wt,0,o.RGBA,o.UNSIGNED_BYTE,Dt):o.texImage2D(Lt+Kt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Dt);return Et}const ot={};ot[o.TEXTURE_2D]=qt(o.TEXTURE_2D,o.TEXTURE_2D,1),ot[o.TEXTURE_CUBE_MAP]=qt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[o.TEXTURE_2D_ARRAY]=qt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ot[o.TEXTURE_3D]=qt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),St(o.DEPTH_TEST),d.setFunc(Cs),re(!1),kt(b_),St(o.CULL_FACE),Ne(Ha);function St(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function Ot(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function ee(q,Lt){return x[q]!==Lt?(o.bindFramebuffer(q,Lt),x[q]=Lt,q===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Lt),q===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Qt(q,Lt){let It=v,Wt=!1;if(q){It=y.get(Lt),It===void 0&&(It=[],y.set(Lt,It));const Dt=q.textures;if(It.length!==Dt.length||It[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Kt=Dt.length;Et<Kt;Et++)It[Et]=o.COLOR_ATTACHMENT0+Et;It.length=Dt.length,Wt=!0}}else It[0]!==o.BACK&&(It[0]=o.BACK,Wt=!0);Wt&&o.drawBuffers(It)}function de(q){return T!==q?(o.useProgram(q),T=q,!0):!1}const Ke={[gr]:o.FUNC_ADD,[Ry]:o.FUNC_SUBTRACT,[Cy]:o.FUNC_REVERSE_SUBTRACT};Ke[wy]=o.MIN,Ke[Dy]=o.MAX;const V={[Uy]:o.ZERO,[Ly]:o.ONE,[Ny]:o.SRC_COLOR,[Id]:o.SRC_ALPHA,[Fy]:o.SRC_ALPHA_SATURATE,[Iy]:o.DST_COLOR,[Py]:o.DST_ALPHA,[Oy]:o.ONE_MINUS_SRC_COLOR,[zd]:o.ONE_MINUS_SRC_ALPHA,[zy]:o.ONE_MINUS_DST_COLOR,[By]:o.ONE_MINUS_DST_ALPHA,[Hy]:o.CONSTANT_COLOR,[Gy]:o.ONE_MINUS_CONSTANT_COLOR,[Vy]:o.CONSTANT_ALPHA,[ky]:o.ONE_MINUS_CONSTANT_ALPHA};function Ne(q,Lt,It,Wt,Dt,Et,Kt,ue,Oe,Ce){if(q===Ha){b===!0&&(Ot(o.BLEND),b=!1);return}if(b===!1&&(St(o.BLEND),b=!0),q!==Ay){if(q!==M||Ce!==D){if((g!==gr||L!==gr)&&(o.blendEquation(o.FUNC_ADD),g=gr,L=gr),Ce)switch(q){case Ts:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case T_:o.blendFunc(o.ONE,o.ONE);break;case A_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case R_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ts:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case T_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case A_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}B=null,O=null,w=null,G=null,P.set(0,0,0),Q=0,M=q,D=Ce}return}Dt=Dt||Lt,Et=Et||It,Kt=Kt||Wt,(Lt!==g||Dt!==L)&&(o.blendEquationSeparate(Ke[Lt],Ke[Dt]),g=Lt,L=Dt),(It!==B||Wt!==O||Et!==w||Kt!==G)&&(o.blendFuncSeparate(V[It],V[Wt],V[Et],V[Kt]),B=It,O=Wt,w=Et,G=Kt),(ue.equals(P)===!1||Oe!==Q)&&(o.blendColor(ue.r,ue.g,ue.b,Oe),P.copy(ue),Q=Oe),M=q,D=!1}function fe(q,Lt){q.side===Oi?Ot(o.CULL_FACE):St(o.CULL_FACE);let It=q.side===qn;Lt&&(It=!It),re(It),q.blending===Ts&&q.transparent===!1?Ne(Ha):Ne(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),u.setMask(q.colorWrite);const Wt=q.stencilWrite;h.setTest(Wt),Wt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),at(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Ot(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(q){U!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),U=q)}function kt(q){q!==Ey?(St(o.CULL_FACE),q!==X&&(q===b_?o.cullFace(o.BACK):q===by?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ot(o.CULL_FACE),X=q}function z(q){q!==ut&&(I&&o.lineWidth(q),ut=q)}function at(q,Lt,It){q?(St(o.POLYGON_OFFSET_FILL),(gt!==Lt||_t!==It)&&(o.polygonOffset(Lt,It),gt=Lt,_t=It)):Ot(o.POLYGON_OFFSET_FILL)}function et(q){q?St(o.SCISSOR_TEST):Ot(o.SCISSOR_TEST)}function At(q){q===void 0&&(q=o.TEXTURE0+ct-1),Tt!==q&&(o.activeTexture(q),Tt=q)}function ht(q,Lt,It){It===void 0&&(Tt===null?It=o.TEXTURE0+ct-1:It=Tt);let Wt=N[It];Wt===void 0&&(Wt={type:void 0,texture:void 0},N[It]=Wt),(Wt.type!==q||Wt.texture!==Lt)&&(Tt!==It&&(o.activeTexture(It),Tt=It),o.bindTexture(q,Lt||ot[q]),Wt.type=q,Wt.texture=Lt)}function C(){const q=N[Tt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function H(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function K(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function nt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function zt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pt(q){wt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),wt.copy(q))}function te(q){Ft.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Ft.copy(q))}function jt(q,Lt){let It=p.get(Lt);It===void 0&&(It=new WeakMap,p.set(Lt,It));let Wt=It.get(q);Wt===void 0&&(Wt=o.getUniformBlockIndex(Lt,q.name),It.set(q,Wt))}function Bt(q,Lt){const Wt=p.get(Lt).get(q);m.get(Lt)!==Wt&&(o.uniformBlockBinding(Lt,Wt,q.__bindingPointIndex),m.set(Lt,Wt))}function he(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Tt=null,N={},x={},y=new WeakMap,v=[],T=null,b=!1,M=null,g=null,B=null,O=null,L=null,w=null,G=null,P=new xe(0,0,0),Q=0,D=!1,U=null,X=null,ut=null,gt=null,_t=null,wt.set(0,0,o.canvas.width,o.canvas.height),Ft.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:St,disable:Ot,bindFramebuffer:ee,drawBuffers:Qt,useProgram:de,setBlending:Ne,setMaterial:fe,setFlipSided:re,setCullFace:kt,setLineWidth:z,setPolygonOffset:at,setScissorTest:et,activeTexture:At,bindTexture:ht,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:Xt,texImage3D:Rt,updateUBOMapping:jt,uniformBlockBinding:Bt,texStorage2D:xt,texStorage3D:zt,texSubImage2D:K,texSubImage3D:$,compressedTexSubImage2D:nt,compressedTexSubImage3D:Ct,scissor:Pt,viewport:te,reset:he}}function T1(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Te,_=new WeakMap;let x;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(C,E){return v?new OffscreenCanvas(C,E):kc("canvas")}function b(C,E,H){let K=1;const $=ht(C);if(($.width>H||$.height>H)&&(K=H/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const nt=Math.floor(K*$.width),Ct=Math.floor(K*$.height);x===void 0&&(x=T(nt,Ct));const xt=E?T(nt,Ct):x;return xt.width=nt,xt.height=Ct,xt.getContext("2d").drawImage(C,0,0,nt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+nt+"x"+Ct+")."),xt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function M(C){return C.generateMipmaps}function g(C){o.generateMipmap(C)}function B(C){return C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?o.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(C,E,H,K,$=!1){if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=E;if(E===o.RED&&(H===o.FLOAT&&(nt=o.R32F),H===o.HALF_FLOAT&&(nt=o.R16F),H===o.UNSIGNED_BYTE&&(nt=o.R8)),E===o.RED_INTEGER&&(H===o.UNSIGNED_BYTE&&(nt=o.R8UI),H===o.UNSIGNED_SHORT&&(nt=o.R16UI),H===o.UNSIGNED_INT&&(nt=o.R32UI),H===o.BYTE&&(nt=o.R8I),H===o.SHORT&&(nt=o.R16I),H===o.INT&&(nt=o.R32I)),E===o.RG&&(H===o.FLOAT&&(nt=o.RG32F),H===o.HALF_FLOAT&&(nt=o.RG16F),H===o.UNSIGNED_BYTE&&(nt=o.RG8)),E===o.RG_INTEGER&&(H===o.UNSIGNED_BYTE&&(nt=o.RG8UI),H===o.UNSIGNED_SHORT&&(nt=o.RG16UI),H===o.UNSIGNED_INT&&(nt=o.RG32UI),H===o.BYTE&&(nt=o.RG8I),H===o.SHORT&&(nt=o.RG16I),H===o.INT&&(nt=o.RG32I)),E===o.RGB_INTEGER&&(H===o.UNSIGNED_BYTE&&(nt=o.RGB8UI),H===o.UNSIGNED_SHORT&&(nt=o.RGB16UI),H===o.UNSIGNED_INT&&(nt=o.RGB32UI),H===o.BYTE&&(nt=o.RGB8I),H===o.SHORT&&(nt=o.RGB16I),H===o.INT&&(nt=o.RGB32I)),E===o.RGBA_INTEGER&&(H===o.UNSIGNED_BYTE&&(nt=o.RGBA8UI),H===o.UNSIGNED_SHORT&&(nt=o.RGBA16UI),H===o.UNSIGNED_INT&&(nt=o.RGBA32UI),H===o.BYTE&&(nt=o.RGBA8I),H===o.SHORT&&(nt=o.RGBA16I),H===o.INT&&(nt=o.RGBA32I)),E===o.RGB&&(H===o.UNSIGNED_INT_5_9_9_9_REV&&(nt=o.RGB9_E5),H===o.UNSIGNED_INT_10F_11F_11F_REV&&(nt=o.R11F_G11F_B10F)),E===o.RGBA){const Ct=$?Gc:Ue.getTransfer(K);H===o.FLOAT&&(nt=o.RGBA32F),H===o.HALF_FLOAT&&(nt=o.RGBA16F),H===o.UNSIGNED_BYTE&&(nt=Ct===Ge?o.SRGB8_ALPHA8:o.RGBA8),H===o.UNSIGNED_SHORT_4_4_4_4&&(nt=o.RGBA4),H===o.UNSIGNED_SHORT_5_5_5_1&&(nt=o.RGB5_A1)}return(nt===o.R16F||nt===o.R32F||nt===o.RG16F||nt===o.RG32F||nt===o.RGBA16F||nt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function L(C,E){let H;return C?E===null||E===Sr||E===qo?H=o.DEPTH24_STENCIL8:E===Bi?H=o.DEPTH32F_STENCIL8:E===Wo&&(H=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Sr||E===qo?H=o.DEPTH_COMPONENT24:E===Bi?H=o.DEPTH_COMPONENT32F:E===Wo&&(H=o.DEPTH_COMPONENT16),H}function w(C,E){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==ni&&C.minFilter!==Mi?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function G(C){const E=C.target;E.removeEventListener("dispose",G),Q(E),E.isVideoTexture&&_.delete(E)}function P(C){const E=C.target;E.removeEventListener("dispose",P),U(E)}function Q(C){const E=r.get(C);if(E.__webglInit===void 0)return;const H=C.source,K=y.get(H);if(K){const $=K[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&D(C),Object.keys(K).length===0&&y.delete(H)}r.remove(C)}function D(C){const E=r.get(C);o.deleteTexture(E.__webglTexture);const H=C.source,K=y.get(H);delete K[E.__cacheKey],d.memory.textures--}function U(C){const E=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let $=0;$<E.__webglFramebuffer[K].length;$++)o.deleteFramebuffer(E.__webglFramebuffer[K][$]);else o.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)o.deleteFramebuffer(E.__webglFramebuffer[K]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=C.textures;for(let K=0,$=H.length;K<$;K++){const nt=r.get(H[K]);nt.__webglTexture&&(o.deleteTexture(nt.__webglTexture),d.memory.textures--),r.remove(H[K])}r.remove(C)}let X=0;function ut(){X=0}function gt(){const C=X;return C>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),X+=1,C}function _t(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function ct(C,E){const H=r.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(H,C,E);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,H.__webglTexture,o.TEXTURE0+E)}function I(C,E){const H=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){ot(H,C,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,H.__webglTexture,o.TEXTURE0+E)}function it(C,E){const H=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){ot(H,C,E);return}i.bindTexture(o.TEXTURE_3D,H.__webglTexture,o.TEXTURE0+E)}function Y(C,E){const H=r.get(C);if(C.version>0&&H.__version!==C.version){St(H,C,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,H.__webglTexture,o.TEXTURE0+E)}const Tt={[jd]:o.REPEAT,[xr]:o.CLAMP_TO_EDGE,[Zd]:o.MIRRORED_REPEAT},N={[ni]:o.NEAREST,[$y]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[Mi]:o.LINEAR,[ad]:o.LINEAR_MIPMAP_NEAREST,[yr]:o.LINEAR_MIPMAP_LINEAR},st={[aS]:o.NEVER,[uS]:o.ALWAYS,[rS]:o.LESS,[H0]:o.LEQUAL,[sS]:o.EQUAL,[cS]:o.GEQUAL,[oS]:o.GREATER,[lS]:o.NOTEQUAL};function bt(C,E){if(E.type===Bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Mi||E.magFilter===ad||E.magFilter===cc||E.magFilter===yr||E.minFilter===Mi||E.minFilter===ad||E.minFilter===cc||E.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(C,o.TEXTURE_WRAP_S,Tt[E.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,Tt[E.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,Tt[E.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,N[E.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,N[E.minFilter]),E.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,st[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ni||E.minFilter!==cc&&E.minFilter!==yr||E.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");o.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function wt(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",G));const K=E.source;let $=y.get(K);$===void 0&&($={},y.set(K,$));const nt=_t(E);if(nt!==C.__cacheKey){$[nt]===void 0&&($[nt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,H=!0),$[nt].usedTimes++;const Ct=$[C.__cacheKey];Ct!==void 0&&($[C.__cacheKey].usedTimes--,Ct.usedTimes===0&&D(E)),C.__cacheKey=nt,C.__webglTexture=$[nt].texture}return H}function Ft(C,E,H){return Math.floor(Math.floor(C/H)/E)}function qt(C,E,H,K){const nt=C.updateRanges;if(nt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,H,K,E.data);else{nt.sort((Rt,Pt)=>Rt.start-Pt.start);let Ct=0;for(let Rt=1;Rt<nt.length;Rt++){const Pt=nt[Ct],te=nt[Rt],jt=Pt.start+Pt.count,Bt=Ft(te.start,E.width,4),he=Ft(Pt.start,E.width,4);te.start<=jt+1&&Bt===he&&Ft(te.start+te.count-1,E.width,4)===Bt?Pt.count=Math.max(Pt.count,te.start+te.count-Pt.start):(++Ct,nt[Ct]=te)}nt.length=Ct+1;const xt=o.getParameter(o.UNPACK_ROW_LENGTH),zt=o.getParameter(o.UNPACK_SKIP_PIXELS),Xt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Rt=0,Pt=nt.length;Rt<Pt;Rt++){const te=nt[Rt],jt=Math.floor(te.start/4),Bt=Math.ceil(te.count/4),he=jt%E.width,q=Math.floor(jt/E.width),Lt=Bt,It=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,he),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,he,q,Lt,It,H,K,E.data)}C.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,xt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xt)}}function ot(C,E,H){let K=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=o.TEXTURE_3D);const $=wt(C,E),nt=E.source;i.bindTexture(K,C.__webglTexture,o.TEXTURE0+H);const Ct=r.get(nt);if(nt.version!==Ct.__version||$===!0){i.activeTexture(o.TEXTURE0+H);const xt=Ue.getPrimaries(Ue.workingColorSpace),zt=E.colorSpace===Fa?null:Ue.getPrimaries(E.colorSpace),Xt=E.colorSpace===Fa||xt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Rt=b(E.image,!1,l.maxTextureSize);Rt=At(E,Rt);const Pt=u.convert(E.format,E.colorSpace),te=u.convert(E.type);let jt=O(E.internalFormat,Pt,te,E.colorSpace,E.isVideoTexture);bt(K,E);let Bt;const he=E.mipmaps,q=E.isVideoTexture!==!0,Lt=Ct.__version===void 0||$===!0,It=nt.dataReady,Wt=w(E,Rt);if(E.isDepthTexture)jt=L(E.format===jo,E.type),Lt&&(q?i.texStorage2D(o.TEXTURE_2D,1,jt,Rt.width,Rt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Rt.width,Rt.height,0,Pt,te,null));else if(E.isDataTexture)if(he.length>0){q&&Lt&&i.texStorage2D(o.TEXTURE_2D,Wt,jt,he[0].width,he[0].height);for(let Dt=0,Et=he.length;Dt<Et;Dt++)Bt=he[Dt],q?It&&i.texSubImage2D(o.TEXTURE_2D,Dt,0,0,Bt.width,Bt.height,Pt,te,Bt.data):i.texImage2D(o.TEXTURE_2D,Dt,jt,Bt.width,Bt.height,0,Pt,te,Bt.data);E.generateMipmaps=!1}else q?(Lt&&i.texStorage2D(o.TEXTURE_2D,Wt,jt,Rt.width,Rt.height),It&&qt(E,Rt,Pt,te)):i.texImage2D(o.TEXTURE_2D,0,jt,Rt.width,Rt.height,0,Pt,te,Rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Wt,jt,he[0].width,he[0].height,Rt.depth);for(let Dt=0,Et=he.length;Dt<Et;Dt++)if(Bt=he[Dt],E.format!==Ei)if(Pt!==null)if(q){if(It)if(E.layerUpdates.size>0){const Kt=i0(Bt.width,Bt.height,E.format,E.type);for(const ue of E.layerUpdates){const Oe=Bt.data.subarray(ue*Kt/Bt.data.BYTES_PER_ELEMENT,(ue+1)*Kt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Dt,0,0,ue,Bt.width,Bt.height,1,Pt,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Dt,0,0,0,Bt.width,Bt.height,Rt.depth,Pt,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Dt,jt,Bt.width,Bt.height,Rt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?It&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Dt,0,0,0,Bt.width,Bt.height,Rt.depth,Pt,te,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Dt,jt,Bt.width,Bt.height,Rt.depth,0,Pt,te,Bt.data)}else{q&&Lt&&i.texStorage2D(o.TEXTURE_2D,Wt,jt,he[0].width,he[0].height);for(let Dt=0,Et=he.length;Dt<Et;Dt++)Bt=he[Dt],E.format!==Ei?Pt!==null?q?It&&i.compressedTexSubImage2D(o.TEXTURE_2D,Dt,0,0,Bt.width,Bt.height,Pt,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,Dt,jt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?It&&i.texSubImage2D(o.TEXTURE_2D,Dt,0,0,Bt.width,Bt.height,Pt,te,Bt.data):i.texImage2D(o.TEXTURE_2D,Dt,jt,Bt.width,Bt.height,0,Pt,te,Bt.data)}else if(E.isDataArrayTexture)if(q){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Wt,jt,Rt.width,Rt.height,Rt.depth),It)if(E.layerUpdates.size>0){const Dt=i0(Rt.width,Rt.height,E.format,E.type);for(const Et of E.layerUpdates){const Kt=Rt.data.subarray(Et*Dt/Rt.data.BYTES_PER_ELEMENT,(Et+1)*Dt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Et,Rt.width,Rt.height,1,Pt,te,Kt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,te,Rt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Rt.width,Rt.height,Rt.depth,0,Pt,te,Rt.data);else if(E.isData3DTexture)q?(Lt&&i.texStorage3D(o.TEXTURE_3D,Wt,jt,Rt.width,Rt.height,Rt.depth),It&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,te,Rt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Rt.width,Rt.height,Rt.depth,0,Pt,te,Rt.data);else if(E.isFramebufferTexture){if(Lt)if(q)i.texStorage2D(o.TEXTURE_2D,Wt,jt,Rt.width,Rt.height);else{let Dt=Rt.width,Et=Rt.height;for(let Kt=0;Kt<Wt;Kt++)i.texImage2D(o.TEXTURE_2D,Kt,jt,Dt,Et,0,Pt,te,null),Dt>>=1,Et>>=1}}else if(he.length>0){if(q&&Lt){const Dt=ht(he[0]);i.texStorage2D(o.TEXTURE_2D,Wt,jt,Dt.width,Dt.height)}for(let Dt=0,Et=he.length;Dt<Et;Dt++)Bt=he[Dt],q?It&&i.texSubImage2D(o.TEXTURE_2D,Dt,0,0,Pt,te,Bt):i.texImage2D(o.TEXTURE_2D,Dt,jt,Pt,te,Bt);E.generateMipmaps=!1}else if(q){if(Lt){const Dt=ht(Rt);i.texStorage2D(o.TEXTURE_2D,Wt,jt,Dt.width,Dt.height)}It&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,te,Rt)}else i.texImage2D(o.TEXTURE_2D,0,jt,Pt,te,Rt);M(E)&&g(K),Ct.__version=nt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function St(C,E,H){if(E.image.length!==6)return;const K=wt(C,E),$=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+H);const nt=r.get($);if($.version!==nt.__version||K===!0){i.activeTexture(o.TEXTURE0+H);const Ct=Ue.getPrimaries(Ue.workingColorSpace),xt=E.colorSpace===Fa?null:Ue.getPrimaries(E.colorSpace),zt=E.colorSpace===Fa||Ct===xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,Rt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let Et=0;Et<6;Et++)!Xt&&!Rt?Pt[Et]=b(E.image[Et],!0,l.maxCubemapSize):Pt[Et]=Rt?E.image[Et].image:E.image[Et],Pt[Et]=At(E,Pt[Et]);const te=Pt[0],jt=u.convert(E.format,E.colorSpace),Bt=u.convert(E.type),he=O(E.internalFormat,jt,Bt,E.colorSpace),q=E.isVideoTexture!==!0,Lt=nt.__version===void 0||K===!0,It=$.dataReady;let Wt=w(E,te);bt(o.TEXTURE_CUBE_MAP,E);let Dt;if(Xt){q&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Wt,he,te.width,te.height);for(let Et=0;Et<6;Et++){Dt=Pt[Et].mipmaps;for(let Kt=0;Kt<Dt.length;Kt++){const ue=Dt[Kt];E.format!==Ei?jt!==null?q?It&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,0,0,ue.width,ue.height,jt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,he,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,0,0,ue.width,ue.height,jt,Bt,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,he,ue.width,ue.height,0,jt,Bt,ue.data)}}}else{if(Dt=E.mipmaps,q&&Lt){Dt.length>0&&Wt++;const Et=ht(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Wt,he,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Rt){q?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Pt[Et].width,Pt[Et].height,jt,Bt,Pt[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,he,Pt[Et].width,Pt[Et].height,0,jt,Bt,Pt[Et].data);for(let Kt=0;Kt<Dt.length;Kt++){const Oe=Dt[Kt].image[Et].image;q?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,0,0,Oe.width,Oe.height,jt,Bt,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,he,Oe.width,Oe.height,0,jt,Bt,Oe.data)}}else{q?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,jt,Bt,Pt[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,he,jt,Bt,Pt[Et]);for(let Kt=0;Kt<Dt.length;Kt++){const ue=Dt[Kt];q?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,0,0,jt,Bt,ue.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,he,jt,Bt,ue.image[Et])}}}M(E)&&g(o.TEXTURE_CUBE_MAP),nt.__version=$.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ot(C,E,H,K,$,nt){const Ct=u.convert(H.format,H.colorSpace),xt=u.convert(H.type),zt=O(H.internalFormat,Ct,xt,H.colorSpace),Xt=r.get(E),Rt=r.get(H);if(Rt.__renderTarget=E,!Xt.__hasExternalTextures){const Pt=Math.max(1,E.width>>nt),te=Math.max(1,E.height>>nt);$===o.TEXTURE_3D||$===o.TEXTURE_2D_ARRAY?i.texImage3D($,nt,zt,Pt,te,E.depth,0,Ct,xt,null):i.texImage2D($,nt,zt,Pt,te,0,Ct,xt,null)}i.bindFramebuffer(o.FRAMEBUFFER,C),at(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,K,$,Rt.__webglTexture,0,z(E)):($===o.TEXTURE_2D||$>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,K,$,Rt.__webglTexture,nt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ee(C,E,H){if(o.bindRenderbuffer(o.RENDERBUFFER,C),E.depthBuffer){const K=E.depthTexture,$=K&&K.isDepthTexture?K.type:null,nt=L(E.stencilBuffer,$),Ct=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=z(E);at(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt,nt,E.width,E.height):H?o.renderbufferStorageMultisample(o.RENDERBUFFER,xt,nt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,nt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ct,o.RENDERBUFFER,C)}else{const K=E.textures;for(let $=0;$<K.length;$++){const nt=K[$],Ct=u.convert(nt.format,nt.colorSpace),xt=u.convert(nt.type),zt=O(nt.internalFormat,Ct,xt,nt.colorSpace),Xt=z(E);H&&at(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xt,zt,E.width,E.height):at(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xt,zt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,zt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Qt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=r.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct(E.depthTexture,0);const $=K.__webglTexture,nt=z(E);if(E.depthTexture.format===Yo)at(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,$,0,nt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,$,0);else if(E.depthTexture.format===jo)at(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,$,0,nt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function de(C){const E=r.get(C),H=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const $=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),E.__depthDisposeCallback=$}E.__boundDepthTexture=K}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const K=C.texture.mipmaps;K&&K.length>0?Qt(E.__webglFramebuffer[0],C):Qt(E.__webglFramebuffer,C)}else if(H){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=o.createRenderbuffer(),ee(E.__webglDepthbuffer[K],C,!1);else{const $=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer[K];o.bindRenderbuffer(o.RENDERBUFFER,nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,$,o.RENDERBUFFER,nt)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ee(E.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,$,o.RENDERBUFFER,nt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(C,E,H){const K=r.get(C);E!==void 0&&Ot(K.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),H!==void 0&&de(C)}function V(C){const E=C.texture,H=r.get(C),K=r.get(E);C.addEventListener("dispose",P);const $=C.textures,nt=C.isWebGLCubeRenderTarget===!0,Ct=$.length>1;if(Ct||(K.__webglTexture===void 0&&(K.__webglTexture=o.createTexture()),K.__version=E.version,d.memory.textures++),nt){H.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[xt]=[];for(let zt=0;zt<E.mipmaps.length;zt++)H.__webglFramebuffer[xt][zt]=o.createFramebuffer()}else H.__webglFramebuffer[xt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let xt=0;xt<E.mipmaps.length;xt++)H.__webglFramebuffer[xt]=o.createFramebuffer()}else H.__webglFramebuffer=o.createFramebuffer();if(Ct)for(let xt=0,zt=$.length;xt<zt;xt++){const Xt=r.get($[xt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=o.createTexture(),d.memory.textures++)}if(C.samples>0&&at(C)===!1){H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xt=0;xt<$.length;xt++){const zt=$[xt];H.__webglColorRenderbuffer[xt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,H.__webglColorRenderbuffer[xt]);const Xt=u.convert(zt.format,zt.colorSpace),Rt=u.convert(zt.type),Pt=O(zt.internalFormat,Xt,Rt,zt.colorSpace,C.isXRRenderTarget===!0),te=z(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Pt,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.RENDERBUFFER,H.__webglColorRenderbuffer[xt])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),ee(H.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(nt){i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture),bt(o.TEXTURE_CUBE_MAP,E);for(let xt=0;xt<6;xt++)if(E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)Ot(H.__webglFramebuffer[xt][zt],C,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt);else Ot(H.__webglFramebuffer[xt],C,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);M(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ct){for(let xt=0,zt=$.length;xt<zt;xt++){const Xt=$[xt],Rt=r.get(Xt);let Pt=o.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Pt=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,Rt.__webglTexture),bt(Pt,Xt),Ot(H.__webglFramebuffer,C,Xt,o.COLOR_ATTACHMENT0+xt,Pt,0),M(Xt)&&g(Pt)}i.unbindTexture()}else{let xt=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(xt,K.__webglTexture),bt(xt,E),E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)Ot(H.__webglFramebuffer[zt],C,E,o.COLOR_ATTACHMENT0,xt,zt);else Ot(H.__webglFramebuffer,C,E,o.COLOR_ATTACHMENT0,xt,0);M(E)&&g(xt),i.unbindTexture()}C.depthBuffer&&de(C)}function Ne(C){const E=C.textures;for(let H=0,K=E.length;H<K;H++){const $=E[H];if(M($)){const nt=B(C),Ct=r.get($).__webglTexture;i.bindTexture(nt,Ct),g(nt),i.unbindTexture()}}}const fe=[],re=[];function kt(C){if(C.samples>0){if(at(C)===!1){const E=C.textures,H=C.width,K=C.height;let $=o.COLOR_BUFFER_BIT;const nt=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=r.get(C),xt=E.length>1;if(xt)for(let Xt=0;Xt<E.length;Xt++)i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const zt=C.texture.mipmaps;zt&&zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Xt=0;Xt<E.length;Xt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=o.STENCIL_BUFFER_BIT)),xt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ct.__webglColorRenderbuffer[Xt]);const Rt=r.get(E[Xt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,H,K,0,0,H,K,$,o.NEAREST),m===!0&&(fe.length=0,re.length=0,fe.push(o.COLOR_ATTACHMENT0+Xt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(fe.push(nt),re.push(nt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,re)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),xt)for(let Xt=0;Xt<E.length;Xt++){i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,Ct.__webglColorRenderbuffer[Xt]);const Rt=r.get(E[Xt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,Rt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const E=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function z(C){return Math.min(l.maxSamples,C.samples)}function at(C){const E=r.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function et(C){const E=d.render.frame;_.get(C)!==E&&(_.set(C,E),C.update())}function At(C,E){const H=C.colorSpace,K=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Us&&H!==Fa&&(Ue.getTransfer(H)===Ge?(K!==Ei||$!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function ht(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=gt,this.resetTextureUnits=ut,this.setTexture2D=ct,this.setTexture2DArray=I,this.setTexture3D=it,this.setTextureCube=Y,this.rebindTextures=Ke,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=at}function A1(o,t){function i(r,l=Fa){let u;const d=Ue.getTransfer(l);if(r===sa)return o.UNSIGNED_BYTE;if(r===Uh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Lh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===P0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===B0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===N0)return o.BYTE;if(r===O0)return o.SHORT;if(r===Wo)return o.UNSIGNED_SHORT;if(r===Dh)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===Ko)return o.HALF_FLOAT;if(r===I0)return o.ALPHA;if(r===z0)return o.RGB;if(r===Ei)return o.RGBA;if(r===Yo)return o.DEPTH_COMPONENT;if(r===jo)return o.DEPTH_STENCIL;if(r===Nh)return o.RED;if(r===Oh)return o.RED_INTEGER;if(r===F0)return o.RG;if(r===Ph)return o.RG_INTEGER;if(r===Bh)return o.RGBA_INTEGER;if(r===Bc||r===Ic||r===zc||r===Fc)if(d===Ge)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Bc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Bc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===th||r===eh||r===nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===th||r===eh)return d===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===nh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ih)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_h||r===vh||r===xh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===_h)return d===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yh||r===Sh||r===Mh||r===Eh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===yh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Sh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const R1=`
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

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new $0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Xa({vertexShader:R1,fragmentShader:C1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Un(new $o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D1 extends Ns{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,x=null,y=null,v=null,T=null;const b=typeof XRWebGLBinding<"u",M=new w1,g={},B=i.getContextAttributes();let O=null,L=null;const w=[],G=[],P=new Te;let Q=null;const D=new Si;D.viewport=new rn;const U=new Si;U.viewport=new rn;const X=[D,U],ut=new KS;let gt=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let St=w[ot];return St===void 0&&(St=new Rd,w[ot]=St),St.getTargetRaySpace()},this.getControllerGrip=function(ot){let St=w[ot];return St===void 0&&(St=new Rd,w[ot]=St),St.getGripSpace()},this.getHand=function(ot){let St=w[ot];return St===void 0&&(St=new Rd,w[ot]=St),St.getHandSpace()};function ct(ot){const St=G.indexOf(ot.inputSource);if(St===-1)return;const Ot=w[St];Ot!==void 0&&(Ot.update(ot.inputSource,ot.frame,p||d),Ot.dispatchEvent({type:ot.type,data:ot.inputSource}))}function I(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",it);for(let ot=0;ot<w.length;ot++){const St=G[ot];St!==null&&(G[ot]=null,w[ot].disconnect(St))}gt=null,_t=null,M.reset();for(const ot in g)delete g[ot];t.setRenderTarget(O),v=null,y=null,x=null,l=null,L=null,qt.stop(),r.isPresenting=!1,t.setPixelRatio(Q),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){u=ot,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){h=ot,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ot){p=ot},this.getBaseLayer=function(){return y!==null?y:v},this.getBinding=function(){return x===null&&b&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ot){if(l=ot,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",I),l.addEventListener("inputsourceschange",it),B.xrCompatible!==!0&&await i.makeXRCompatible(),Q=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,ee=null,Qt=null;B.depth&&(Qt=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ot=B.stencil?jo:Yo,ee=B.stencil?qo:Sr);const de={colorFormat:i.RGBA8,depthFormat:Qt,scaleFactor:u};x=this.getBinding(),y=x.createProjectionLayer(de),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),L=new Mr(y.textureWidth,y.textureHeight,{format:Ei,type:sa,depthTexture:new J0(y.textureWidth,y.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ot={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:u};v=new XRWebGLLayer(l,i,Ot),l.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),L=new Mr(v.framebufferWidth,v.framebufferHeight,{format:Ei,type:sa,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),qt.setContext(l),qt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function it(ot){for(let St=0;St<ot.removed.length;St++){const Ot=ot.removed[St],ee=G.indexOf(Ot);ee>=0&&(G[ee]=null,w[ee].disconnect(Ot))}for(let St=0;St<ot.added.length;St++){const Ot=ot.added[St];let ee=G.indexOf(Ot);if(ee===-1){for(let de=0;de<w.length;de++)if(de>=G.length){G.push(Ot),ee=de;break}else if(G[de]===null){G[de]=Ot,ee=de;break}if(ee===-1)break}const Qt=w[ee];Qt&&Qt.connect(Ot)}}const Y=new rt,Tt=new rt;function N(ot,St,Ot){Y.setFromMatrixPosition(St.matrixWorld),Tt.setFromMatrixPosition(Ot.matrixWorld);const ee=Y.distanceTo(Tt),Qt=St.projectionMatrix.elements,de=Ot.projectionMatrix.elements,Ke=Qt[14]/(Qt[10]-1),V=Qt[14]/(Qt[10]+1),Ne=(Qt[9]+1)/Qt[5],fe=(Qt[9]-1)/Qt[5],re=(Qt[8]-1)/Qt[0],kt=(de[8]+1)/de[0],z=Ke*re,at=Ke*kt,et=ee/(-re+kt),At=et*-re;if(St.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(At),ot.translateZ(et),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Qt[10]===-1)ot.projectionMatrix.copy(St.projectionMatrix),ot.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const ht=Ke+et,C=V+et,E=z-At,H=at+(ee-At),K=Ne*V/C*ht,$=fe*V/C*ht;ot.projectionMatrix.makePerspective(E,H,K,$,ht,C),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function st(ot,St){St===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(St.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(l===null)return;let St=ot.near,Ot=ot.far;M.texture!==null&&(M.depthNear>0&&(St=M.depthNear),M.depthFar>0&&(Ot=M.depthFar)),ut.near=U.near=D.near=St,ut.far=U.far=D.far=Ot,(gt!==ut.near||_t!==ut.far)&&(l.updateRenderState({depthNear:ut.near,depthFar:ut.far}),gt=ut.near,_t=ut.far),ut.layers.mask=ot.layers.mask|6,D.layers.mask=ut.layers.mask&3,U.layers.mask=ut.layers.mask&5;const ee=ot.parent,Qt=ut.cameras;st(ut,ee);for(let de=0;de<Qt.length;de++)st(Qt[de],ee);Qt.length===2?N(ut,D,U):ut.projectionMatrix.copy(D.projectionMatrix),bt(ot,ut,ee)};function bt(ot,St,Ot){Ot===null?ot.matrix.copy(St.matrixWorld):(ot.matrix.copy(Ot.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(St.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(St.projectionMatrix),ot.projectionMatrixInverse.copy(St.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Th*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return ut},this.getFoveation=function(){if(!(y===null&&v===null))return m},this.setFoveation=function(ot){m=ot,y!==null&&(y.fixedFoveation=ot),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ot)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ut)},this.getCameraTexture=function(ot){return g[ot]};let wt=null;function Ft(ot,St){if(_=St.getViewerPose(p||d),T=St,_!==null){const Ot=_.views;v!==null&&(t.setRenderTargetFramebuffer(L,v.framebuffer),t.setRenderTarget(L));let ee=!1;Ot.length!==ut.cameras.length&&(ut.cameras.length=0,ee=!0);for(let V=0;V<Ot.length;V++){const Ne=Ot[V];let fe=null;if(v!==null)fe=v.getViewport(Ne);else{const kt=x.getViewSubImage(y,Ne);fe=kt.viewport,V===0&&(t.setRenderTargetTextures(L,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(L))}let re=X[V];re===void 0&&(re=new Si,re.layers.enable(V),re.viewport=new rn,X[V]=re),re.matrix.fromArray(Ne.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ne.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(fe.x,fe.y,fe.width,fe.height),V===0&&(ut.matrix.copy(re.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale)),ee===!0&&ut.cameras.push(re)}const Qt=l.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){x=r.getBinding();const V=x.getDepthInformation(Ot[0]);V&&V.isValid&&V.texture&&M.init(V,l.renderState)}if(Qt&&Qt.includes("camera-access")&&b){t.state.unbindTexture(),x=r.getBinding();for(let V=0;V<Ot.length;V++){const Ne=Ot[V].camera;if(Ne){let fe=g[Ne];fe||(fe=new $0,g[Ne]=fe);const re=x.getCameraImage(Ne);fe.sourceTexture=re}}}}for(let Ot=0;Ot<w.length;Ot++){const ee=G[Ot],Qt=w[Ot];ee!==null&&Qt!==void 0&&Qt.update(ee,St,p||d)}wt&&wt(ot,St),St.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:St}),T=null}const qt=new ev;qt.setAnimationLoop(Ft),this.setAnimationLoop=function(ot){wt=ot},this.dispose=function(){}}}const hr=new oa,U1=new Ye;function L1(o,t){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function r(M,g){g.color.getRGB(M.fogColor.value,q0(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,B,O,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(M,g):g.isMeshToonMaterial?(u(M,g),x(M,g)):g.isMeshPhongMaterial?(u(M,g),_(M,g)):g.isMeshStandardMaterial?(u(M,g),y(M,g),g.isMeshPhysicalMaterial&&v(M,g,L)):g.isMeshMatcapMaterial?(u(M,g),T(M,g)):g.isMeshDepthMaterial?u(M,g):g.isMeshDistanceMaterial?(u(M,g),b(M,g)):g.isMeshNormalMaterial?u(M,g):g.isLineBasicMaterial?(d(M,g),g.isLineDashedMaterial&&h(M,g)):g.isPointsMaterial?m(M,g,B,O):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===qn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===qn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const B=t.get(g),O=B.envMap,L=B.envMapRotation;O&&(M.envMap.value=O,hr.copy(L),hr.x*=-1,hr.y*=-1,hr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),M.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler(hr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function d(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function h(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function m(M,g,B,O){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*B,M.scale.value=O*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function x(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function y(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function v(M,g,B){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,g){g.matcap&&(M.matcap.value=g.matcap)}function b(M,g){const B=t.get(g).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function N1(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,O){const L=O.program;r.uniformBlockBinding(B,L)}function p(B,O){let L=l[B.id];L===void 0&&(T(B),L=_(B),l[B.id]=L,B.addEventListener("dispose",M));const w=O.program;r.updateUBOMapping(B,w);const G=t.render.frame;u[B.id]!==G&&(y(B),u[B.id]=G)}function _(B){const O=x();B.__bindingPointIndex=O;const L=o.createBuffer(),w=B.__size,G=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,w,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,L),L}function x(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(B){const O=l[B.id],L=B.uniforms,w=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let G=0,P=L.length;G<P;G++){const Q=Array.isArray(L[G])?L[G]:[L[G]];for(let D=0,U=Q.length;D<U;D++){const X=Q[D];if(v(X,G,D,w)===!0){const ut=X.__offset,gt=Array.isArray(X.value)?X.value:[X.value];let _t=0;for(let ct=0;ct<gt.length;ct++){const I=gt[ct],it=b(I);typeof I=="number"||typeof I=="boolean"?(X.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,ut+_t,X.__data)):I.isMatrix3?(X.__data[0]=I.elements[0],X.__data[1]=I.elements[1],X.__data[2]=I.elements[2],X.__data[3]=0,X.__data[4]=I.elements[3],X.__data[5]=I.elements[4],X.__data[6]=I.elements[5],X.__data[7]=0,X.__data[8]=I.elements[6],X.__data[9]=I.elements[7],X.__data[10]=I.elements[8],X.__data[11]=0):(I.toArray(X.__data,_t),_t+=it.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ut,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(B,O,L,w){const G=B.value,P=O+"_"+L;if(w[P]===void 0)return typeof G=="number"||typeof G=="boolean"?w[P]=G:w[P]=G.clone(),!0;{const Q=w[P];if(typeof G=="number"||typeof G=="boolean"){if(Q!==G)return w[P]=G,!0}else if(Q.equals(G)===!1)return Q.copy(G),!0}return!1}function T(B){const O=B.uniforms;let L=0;const w=16;for(let P=0,Q=O.length;P<Q;P++){const D=Array.isArray(O[P])?O[P]:[O[P]];for(let U=0,X=D.length;U<X;U++){const ut=D[U],gt=Array.isArray(ut.value)?ut.value:[ut.value];for(let _t=0,ct=gt.length;_t<ct;_t++){const I=gt[_t],it=b(I),Y=L%w,Tt=Y%it.boundary,N=Y+Tt;L+=Tt,N!==0&&w-N<it.storage&&(L+=w-N),ut.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=L,L+=it.storage}}}const G=L%w;return G>0&&(L+=w-G),B.__size=L,B.__cache={},this}function b(B){const O={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(O.boundary=4,O.storage=4):B.isVector2?(O.boundary=8,O.storage=8):B.isVector3||B.isColor?(O.boundary=16,O.storage=12):B.isVector4?(O.boundary=16,O.storage=16):B.isMatrix3?(O.boundary=48,O.storage=48):B.isMatrix4?(O.boundary=64,O.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),O}function M(B){const O=B.target;O.removeEventListener("dispose",M);const L=d.indexOf(O.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function g(){for(const B in l)o.deleteBuffer(l[B]);d=[],l={},u={}}return{bind:m,update:p,dispose:g}}class O1{constructor(t={}){const{canvas:i=dS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let v;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=r.getContextAttributes().alpha}else v=d;const T=new Uint32Array(4),b=new Int32Array(4);let M=null,g=null;const B=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let w=!1;this._outputColorSpace=fi;let G=0,P=0,Q=null,D=-1,U=null;const X=new rn,ut=new rn;let gt=null;const _t=new xe(0);let ct=0,I=i.width,it=i.height,Y=1,Tt=null,N=null;const st=new rn(0,0,I,it),bt=new rn(0,0,I,it);let wt=!1;const Ft=new Q0;let qt=!1,ot=!1;const St=new Ye,Ot=new rt,ee=new rn,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Ke(){return Q===null?Y:1}let V=r;function Ne(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",Wt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),V===null){const j="webgl2";if(V=Ne(j,R),V===null)throw Ne(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let fe,re,kt,z,at,et,At,ht,C,E,H,K,$,nt,Ct,xt,zt,Xt,Rt,Pt,te,jt,Bt,he;function q(){fe=new Xb(V),fe.init(),jt=new A1(V,fe),re=new Ib(V,fe,t,jt),kt=new b1(V,fe),re.reversedDepthBuffer&&y&&kt.buffers.depth.setReversed(!0),z=new Yb(V),at=new f1,et=new T1(V,fe,kt,at,re,jt,z),At=new Fb(L),ht=new kb(L),C=new $S(V),Bt=new Pb(V,C),E=new Wb(V,C,z,Bt),H=new Zb(V,E,C,z),Rt=new jb(V,re,et),xt=new zb(at),K=new u1(L,At,ht,fe,re,Bt,xt),$=new L1(L,at),nt=new h1,Ct=new x1(fe),Xt=new Ob(L,At,ht,kt,H,v,m),zt=new M1(L,H,re),he=new N1(V,z,re,kt),Pt=new Bb(V,fe,z),te=new qb(V,fe,z),z.programs=K.programs,L.capabilities=re,L.extensions=fe,L.properties=at,L.renderLists=nt,L.shadowMap=zt,L.state=kt,L.info=z}q();const Lt=new D1(L,V);this.xr=Lt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(I,it,!1))},this.getSize=function(R){return R.set(I,it)},this.setSize=function(R,j,pt=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,it=j,i.width=Math.floor(R*Y),i.height=Math.floor(j*Y),pt===!0&&(i.style.width=R+"px",i.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(I*Y,it*Y).floor()},this.setDrawingBufferSize=function(R,j,pt){I=R,it=j,Y=pt,i.width=Math.floor(R*pt),i.height=Math.floor(j*pt),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(X)},this.getViewport=function(R){return R.copy(st)},this.setViewport=function(R,j,pt,mt){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,j,pt,mt),kt.viewport(X.copy(st).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(bt)},this.setScissor=function(R,j,pt,mt){R.isVector4?bt.set(R.x,R.y,R.z,R.w):bt.set(R,j,pt,mt),kt.scissor(ut.copy(bt).multiplyScalar(Y).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(R){kt.setScissorTest(wt=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,pt=!0){let mt=0;if(R){let J=!1;if(Q!==null){const Ut=Q.texture.format;J=Ut===Bh||Ut===Ph||Ut===Oh}if(J){const Ut=Q.texture.type,Ht=Ut===sa||Ut===Sr||Ut===Wo||Ut===qo||Ut===Uh||Ut===Lh,Yt=Xt.getClearColor(),Gt=Xt.getClearAlpha(),ae=Yt.r,oe=Yt.g,Jt=Yt.b;Ht?(T[0]=ae,T[1]=oe,T[2]=Jt,T[3]=Gt,V.clearBufferuiv(V.COLOR,0,T)):(b[0]=ae,b[1]=oe,b[2]=Jt,b[3]=Gt,V.clearBufferiv(V.COLOR,0,b))}else mt|=V.COLOR_BUFFER_BIT}j&&(mt|=V.DEPTH_BUFFER_BIT),pt&&(mt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",Wt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Xt.dispose(),nt.dispose(),Ct.dispose(),at.dispose(),At.dispose(),ht.dispose(),H.dispose(),Bt.dispose(),he.dispose(),K.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",un),Lt.removeEventListener("sessionend",fn),Je.stop()};function It(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Wt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=z.autoReset,j=zt.enabled,pt=zt.autoUpdate,mt=zt.needsUpdate,J=zt.type;q(),z.autoReset=R,zt.enabled=j,zt.autoUpdate=pt,zt.needsUpdate=mt,zt.type=J}function Dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Et(R){const j=R.target;j.removeEventListener("dispose",Et),Kt(j)}function Kt(R){ue(R),at.remove(R)}function ue(R){const j=at.get(R).programs;j!==void 0&&(j.forEach(function(pt){K.releaseProgram(pt)}),R.isShaderMaterial&&K.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,pt,mt,J,Ut){j===null&&(j=Qt);const Ht=J.isMesh&&J.matrixWorld.determinant()<0,Yt=la(R,j,pt,mt,J);kt.setMaterial(mt,Ht);let Gt=pt.index,ae=1;if(mt.wireframe===!0){if(Gt=E.getWireframeAttribute(pt),Gt===void 0)return;ae=2}const oe=pt.drawRange,Jt=pt.attributes.position;let ge=oe.start*ae,we=(oe.start+oe.count)*ae;Ut!==null&&(ge=Math.max(ge,Ut.start*ae),we=Math.min(we,(Ut.start+Ut.count)*ae)),Gt!==null?(ge=Math.max(ge,0),we=Math.min(we,Gt.count)):Jt!=null&&(ge=Math.max(ge,0),we=Math.min(we,Jt.count));const je=we-ge;if(je<0||je===1/0)return;Bt.setup(J,mt,Yt,pt,Gt);let Ie,_e=Pt;if(Gt!==null&&(Ie=C.get(Gt),_e=te,_e.setIndex(Ie)),J.isMesh)mt.wireframe===!0?(kt.setLineWidth(mt.wireframeLinewidth*Ke()),_e.setMode(V.LINES)):_e.setMode(V.TRIANGLES);else if(J.isLine){let ie=mt.linewidth;ie===void 0&&(ie=1),kt.setLineWidth(ie*Ke()),J.isLineSegments?_e.setMode(V.LINES):J.isLineLoop?_e.setMode(V.LINE_LOOP):_e.setMode(V.LINE_STRIP)}else J.isPoints?_e.setMode(V.POINTS):J.isSprite&&_e.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Zo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))_e.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ie=J._multiDrawStarts,qe=J._multiDrawCounts,Me=J._multiDrawCount,Tn=Gt?C.get(Gt).bytesPerElement:1,pi=at.get(mt).currentProgram.getUniforms();for(let On=0;On<Me;On++)pi.setValue(V,"_gl_DrawID",On),_e.render(ie[On]/Tn,qe[On])}else if(J.isInstancedMesh)_e.renderInstances(ge,je,J.count);else if(pt.isInstancedBufferGeometry){const ie=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,qe=Math.min(pt.instanceCount,ie);_e.renderInstances(ge,je,qe)}else _e.render(ge,je)};function Oe(R,j,pt){R.transparent===!0&&R.side===Oi&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,Ai(R,j,pt),R.side=ka,R.needsUpdate=!0,Ai(R,j,pt),R.side=Oi):Ai(R,j,pt)}this.compile=function(R,j,pt=null){pt===null&&(pt=R),g=Ct.get(pt),g.init(j),O.push(g),pt.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),R!==pt&&R.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights();const mt=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ut=J.material;if(Ut)if(Array.isArray(Ut))for(let Ht=0;Ht<Ut.length;Ht++){const Yt=Ut[Ht];Oe(Yt,pt,J),mt.add(Yt)}else Oe(Ut,pt,J),mt.add(Ut)}),g=O.pop(),mt},this.compileAsync=function(R,j,pt=null){const mt=this.compile(R,j,pt);return new Promise(J=>{function Ut(){if(mt.forEach(function(Ht){at.get(Ht).currentProgram.isReady()&&mt.delete(Ht)}),mt.size===0){J(R);return}setTimeout(Ut,10)}fe.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Ce=null;function hi(R){Ce&&Ce(R)}function un(){Je.stop()}function fn(){Je.start()}const Je=new ev;Je.setAnimationLoop(hi),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(R){Ce=R,Lt.setAnimationLoop(R),R===null?Je.stop():Je.start()},Lt.addEventListener("sessionstart",un),Lt.addEventListener("sessionend",fn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(j),j=Lt.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,j,Q),g=Ct.get(R,O.length),g.init(j),O.push(g),St.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ft.setFromProjectionMatrix(St,Ii,j.reversedDepth),ot=this.localClippingEnabled,qt=xt.init(this.clippingPlanes,ot),M=nt.get(R,B.length),M.init(),B.push(M),Lt.enabled===!0&&Lt.isPresenting===!0){const Ut=L.xr.getDepthSensingMesh();Ut!==null&&Ti(Ut,j,-1/0,L.sortObjects)}Ti(R,j,0,L.sortObjects),M.finish(),L.sortObjects===!0&&M.sort(Tt,N),de=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,de&&Xt.addToRenderList(M,R),this.info.render.frame++,qt===!0&&xt.beginShadows();const pt=g.state.shadowsArray;zt.render(pt,R,j),qt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const mt=M.opaque,J=M.transmissive;if(g.setupLights(),j.isArrayCamera){const Ut=j.cameras;if(J.length>0)for(let Ht=0,Yt=Ut.length;Ht<Yt;Ht++){const Gt=Ut[Ht];tl(mt,J,R,Gt)}de&&Xt.render(R);for(let Ht=0,Yt=Ut.length;Ht<Yt;Ht++){const Gt=Ut[Ht];br(M,R,Gt,Gt.viewport)}}else J.length>0&&tl(mt,J,R,j),de&&Xt.render(R),br(M,R,j);Q!==null&&P===0&&(et.updateMultisampleRenderTarget(Q),et.updateRenderTargetMipmap(Q)),R.isScene===!0&&R.onAfterRender(L,R,j),Bt.resetDefaultState(),D=-1,U=null,O.pop(),O.length>0?(g=O[O.length-1],qt===!0&&xt.setGlobalState(L.clippingPlanes,g.state.camera)):g=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function Ti(R,j,pt,mt){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)pt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ft.intersectsSprite(R)){mt&&ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);const Ht=H.update(R),Yt=R.material;Yt.visible&&M.push(R,Ht,Yt,pt,ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ft.intersectsObject(R))){const Ht=H.update(R),Yt=R.material;if(mt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ee.copy(R.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),ee.copy(Ht.boundingSphere.center)),ee.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(Yt)){const Gt=Ht.groups;for(let ae=0,oe=Gt.length;ae<oe;ae++){const Jt=Gt[ae],ge=Yt[Jt.materialIndex];ge&&ge.visible&&M.push(R,Ht,ge,pt,ee.z,Jt)}}else Yt.visible&&M.push(R,Ht,Yt,pt,ee.z,null)}}const Ut=R.children;for(let Ht=0,Yt=Ut.length;Ht<Yt;Ht++)Ti(Ut[Ht],j,pt,mt)}function br(R,j,pt,mt){const J=R.opaque,Ut=R.transmissive,Ht=R.transparent;g.setupLightsView(pt),qt===!0&&xt.setGlobalState(L.clippingPlanes,pt),mt&&kt.viewport(X.copy(mt)),J.length>0&&Tr(J,j,pt),Ut.length>0&&Tr(Ut,j,pt),Ht.length>0&&Tr(Ht,j,pt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function tl(R,j,pt,mt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[mt.id]===void 0&&(g.state.transmissionRenderTarget[mt.id]=new Mr(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?Ko:sa,minFilter:yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Ut=g.state.transmissionRenderTarget[mt.id],Ht=mt.viewport||X;Ut.setSize(Ht.z*L.transmissionResolutionScale,Ht.w*L.transmissionResolutionScale);const Yt=L.getRenderTarget(),Gt=L.getActiveCubeFace(),ae=L.getActiveMipmapLevel();L.setRenderTarget(Ut),L.getClearColor(_t),ct=L.getClearAlpha(),ct<1&&L.setClearColor(16777215,.5),L.clear(),de&&Xt.render(pt);const oe=L.toneMapping;L.toneMapping=Ga;const Jt=mt.viewport;if(mt.viewport!==void 0&&(mt.viewport=void 0),g.setupLightsView(mt),qt===!0&&xt.setGlobalState(L.clippingPlanes,mt),Tr(R,pt,mt),et.updateMultisampleRenderTarget(Ut),et.updateRenderTargetMipmap(Ut),fe.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let we=0,je=j.length;we<je;we++){const Ie=j[we],_e=Ie.object,ie=Ie.geometry,qe=Ie.material,Me=Ie.group;if(qe.side===Oi&&_e.layers.test(mt.layers)){const Tn=qe.side;qe.side=qn,qe.needsUpdate=!0,Is(_e,pt,mt,ie,qe,Me),qe.side=Tn,qe.needsUpdate=!0,ge=!0}}ge===!0&&(et.updateMultisampleRenderTarget(Ut),et.updateRenderTargetMipmap(Ut))}L.setRenderTarget(Yt,Gt,ae),L.setClearColor(_t,ct),Jt!==void 0&&(mt.viewport=Jt),L.toneMapping=oe}function Tr(R,j,pt){const mt=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Ut=R.length;J<Ut;J++){const Ht=R[J],Yt=Ht.object,Gt=Ht.geometry,ae=Ht.group;let oe=Ht.material;oe.allowOverride===!0&&mt!==null&&(oe=mt),Yt.layers.test(pt.layers)&&Is(Yt,j,pt,Gt,oe,ae)}}function Is(R,j,pt,mt,J,Ut){R.onBeforeRender(L,j,pt,mt,J,Ut),R.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(L,j,pt,mt,R,Ut),J.transparent===!0&&J.side===Oi&&J.forceSinglePass===!1?(J.side=qn,J.needsUpdate=!0,L.renderBufferDirect(pt,j,mt,J,R,Ut),J.side=ka,J.needsUpdate=!0,L.renderBufferDirect(pt,j,mt,J,R,Ut),J.side=Oi):L.renderBufferDirect(pt,j,mt,J,R,Ut),R.onAfterRender(L,j,pt,mt,J,Ut)}function Ai(R,j,pt){j.isScene!==!0&&(j=Qt);const mt=at.get(R),J=g.state.lights,Ut=g.state.shadowsArray,Ht=J.state.version,Yt=K.getParameters(R,J.state,Ut,j,pt),Gt=K.getProgramCacheKey(Yt);let ae=mt.programs;mt.environment=R.isMeshStandardMaterial?j.environment:null,mt.fog=j.fog,mt.envMap=(R.isMeshStandardMaterial?ht:At).get(R.envMap||mt.environment),mt.envMapRotation=mt.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,ae===void 0&&(R.addEventListener("dispose",Et),ae=new Map,mt.programs=ae);let oe=ae.get(Gt);if(oe!==void 0){if(mt.currentProgram===oe&&mt.lightsStateVersion===Ht)return zi(R,Yt),oe}else Yt.uniforms=K.getUniforms(R),R.onBeforeCompile(Yt,L),oe=K.acquireProgram(Yt,Gt),ae.set(Gt,oe),mt.uniforms=Yt.uniforms;const Jt=mt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=xt.uniform),zi(R,Yt),mt.needsLights=ca(R),mt.lightsStateVersion=Ht,mt.needsLights&&(Jt.ambientLightColor.value=J.state.ambient,Jt.lightProbe.value=J.state.probe,Jt.directionalLights.value=J.state.directional,Jt.directionalLightShadows.value=J.state.directionalShadow,Jt.spotLights.value=J.state.spot,Jt.spotLightShadows.value=J.state.spotShadow,Jt.rectAreaLights.value=J.state.rectArea,Jt.ltc_1.value=J.state.rectAreaLTC1,Jt.ltc_2.value=J.state.rectAreaLTC2,Jt.pointLights.value=J.state.point,Jt.pointLightShadows.value=J.state.pointShadow,Jt.hemisphereLights.value=J.state.hemi,Jt.directionalShadowMap.value=J.state.directionalShadowMap,Jt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Jt.spotShadowMap.value=J.state.spotShadowMap,Jt.spotLightMatrix.value=J.state.spotLightMatrix,Jt.spotLightMap.value=J.state.spotLightMap,Jt.pointShadowMap.value=J.state.pointShadowMap,Jt.pointShadowMatrix.value=J.state.pointShadowMatrix),mt.currentProgram=oe,mt.uniformsList=null,oe}function Ar(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Hc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function zi(R,j){const pt=at.get(R);pt.outputColorSpace=j.outputColorSpace,pt.batching=j.batching,pt.batchingColor=j.batchingColor,pt.instancing=j.instancing,pt.instancingColor=j.instancingColor,pt.instancingMorph=j.instancingMorph,pt.skinning=j.skinning,pt.morphTargets=j.morphTargets,pt.morphNormals=j.morphNormals,pt.morphColors=j.morphColors,pt.morphTargetsCount=j.morphTargetsCount,pt.numClippingPlanes=j.numClippingPlanes,pt.numIntersection=j.numClipIntersection,pt.vertexAlphas=j.vertexAlphas,pt.vertexTangents=j.vertexTangents,pt.toneMapping=j.toneMapping}function la(R,j,pt,mt,J){j.isScene!==!0&&(j=Qt),et.resetTextureUnits();const Ut=j.fog,Ht=mt.isMeshStandardMaterial?j.environment:null,Yt=Q===null?L.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Us,Gt=(mt.isMeshStandardMaterial?ht:At).get(mt.envMap||Ht),ae=mt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,oe=!!pt.attributes.tangent&&(!!mt.normalMap||mt.anisotropy>0),Jt=!!pt.morphAttributes.position,ge=!!pt.morphAttributes.normal,we=!!pt.morphAttributes.color;let je=Ga;mt.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(je=L.toneMapping);const Ie=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,_e=Ie!==void 0?Ie.length:0,ie=at.get(mt),qe=g.state.lights;if(qt===!0&&(ot===!0||R!==U)){const $e=R===U&&mt.id===D;xt.setState(mt,R,$e)}let Me=!1;mt.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==qe.state.version||ie.outputColorSpace!==Yt||J.isBatchedMesh&&ie.batching===!1||!J.isBatchedMesh&&ie.batching===!0||J.isBatchedMesh&&ie.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ie.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ie.instancing===!1||!J.isInstancedMesh&&ie.instancing===!0||J.isSkinnedMesh&&ie.skinning===!1||!J.isSkinnedMesh&&ie.skinning===!0||J.isInstancedMesh&&ie.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ie.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ie.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ie.instancingMorph===!1&&J.morphTexture!==null||ie.envMap!==Gt||mt.fog===!0&&ie.fog!==Ut||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==xt.numPlanes||ie.numIntersection!==xt.numIntersection)||ie.vertexAlphas!==ae||ie.vertexTangents!==oe||ie.morphTargets!==Jt||ie.morphNormals!==ge||ie.morphColors!==we||ie.toneMapping!==je||ie.morphTargetsCount!==_e)&&(Me=!0):(Me=!0,ie.__version=mt.version);let Tn=ie.currentProgram;Me===!0&&(Tn=Ai(mt,j,J));let pi=!1,On=!1,gn=!1;const ke=Tn.getUniforms(),Pn=ie.uniforms;if(kt.useProgram(Tn.program)&&(pi=!0,On=!0,gn=!0),mt.id!==D&&(D=mt.id,On=!0),pi||U!==R){kt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ke.setValue(V,"projectionMatrix",R.projectionMatrix),ke.setValue(V,"viewMatrix",R.matrixWorldInverse);const Sn=ke.map.cameraPosition;Sn!==void 0&&Sn.setValue(V,Ot.setFromMatrixPosition(R.matrixWorld)),re.logarithmicDepthBuffer&&ke.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(mt.isMeshPhongMaterial||mt.isMeshToonMaterial||mt.isMeshLambertMaterial||mt.isMeshBasicMaterial||mt.isMeshStandardMaterial||mt.isShaderMaterial)&&ke.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,On=!0,gn=!0)}if(J.isSkinnedMesh){ke.setOptional(V,J,"bindMatrix"),ke.setOptional(V,J,"bindMatrixInverse");const $e=J.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ke.setValue(V,"boneTexture",$e.boneTexture,et))}J.isBatchedMesh&&(ke.setOptional(V,J,"batchingTexture"),ke.setValue(V,"batchingTexture",J._matricesTexture,et),ke.setOptional(V,J,"batchingIdTexture"),ke.setValue(V,"batchingIdTexture",J._indirectTexture,et),ke.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&ke.setValue(V,"batchingColorTexture",J._colorsTexture,et));const An=pt.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Rt.update(J,pt,Tn),(On||ie.receiveShadow!==J.receiveShadow)&&(ie.receiveShadow=J.receiveShadow,ke.setValue(V,"receiveShadow",J.receiveShadow)),mt.isMeshGouraudMaterial&&mt.envMap!==null&&(Pn.envMap.value=Gt,Pn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),mt.isMeshStandardMaterial&&mt.envMap===null&&j.environment!==null&&(Pn.envMapIntensity.value=j.environmentIntensity),On&&(ke.setValue(V,"toneMappingExposure",L.toneMappingExposure),ie.needsLights&&Wa(Pn,gn),Ut&&mt.fog===!0&&$.refreshFogUniforms(Pn,Ut),$.refreshMaterialUniforms(Pn,mt,Y,it,g.state.transmissionRenderTarget[R.id]),Hc.upload(V,Ar(ie),Pn,et)),mt.isShaderMaterial&&mt.uniformsNeedUpdate===!0&&(Hc.upload(V,Ar(ie),Pn,et),mt.uniformsNeedUpdate=!1),mt.isSpriteMaterial&&ke.setValue(V,"center",J.center),ke.setValue(V,"modelViewMatrix",J.modelViewMatrix),ke.setValue(V,"normalMatrix",J.normalMatrix),ke.setValue(V,"modelMatrix",J.matrixWorld),mt.isShaderMaterial||mt.isRawShaderMaterial){const $e=mt.uniformsGroups;for(let Sn=0,Rr=$e.length;Sn<Rr;Sn++){const Gn=$e[Sn];he.update(Gn,Tn),he.bind(Gn,Tn)}}return Tn}function Wa(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function ca(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,j,pt){const mt=at.get(R);mt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,mt.__autoAllocateDepthBuffer===!1&&(mt.__useRenderToTexture=!1),at.get(R.texture).__webglTexture=j,at.get(R.depthTexture).__webglTexture=mt.__autoAllocateDepthBuffer?void 0:pt,mt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const pt=at.get(R);pt.__webglFramebuffer=j,pt.__useDefaultFramebuffer=j===void 0};const sn=V.createFramebuffer();this.setRenderTarget=function(R,j=0,pt=0){Q=R,G=j,P=pt;let mt=!0,J=null,Ut=!1,Ht=!1;if(R){const Gt=at.get(R);if(Gt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(V.FRAMEBUFFER,null),mt=!1;else if(Gt.__webglFramebuffer===void 0)et.setupRenderTarget(R);else if(Gt.__hasExternalTextures)et.rebindTextures(R,at.get(R.texture).__webglTexture,at.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(Gt.__boundDepthTexture!==Jt){if(Jt!==null&&at.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(R)}}const ae=R.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Ht=!0);const oe=at.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(oe[j])?J=oe[j][pt]:J=oe[j],Ut=!0):R.samples>0&&et.useMultisampledRTT(R)===!1?J=at.get(R).__webglMultisampledFramebuffer:Array.isArray(oe)?J=oe[pt]:J=oe,X.copy(R.viewport),ut.copy(R.scissor),gt=R.scissorTest}else X.copy(st).multiplyScalar(Y).floor(),ut.copy(bt).multiplyScalar(Y).floor(),gt=wt;if(pt!==0&&(J=sn),kt.bindFramebuffer(V.FRAMEBUFFER,J)&&mt&&kt.drawBuffers(R,J),kt.viewport(X),kt.scissor(ut),kt.setScissorTest(gt),Ut){const Gt=at.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Gt.__webglTexture,pt)}else if(Ht){const Gt=j;for(let ae=0;ae<R.textures.length;ae++){const oe=at.get(R.textures[ae]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ae,oe.__webglTexture,pt,Gt)}}else if(R!==null&&pt!==0){const Gt=at.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Gt.__webglTexture,pt)}D=-1},this.readRenderTargetPixels=function(R,j,pt,mt,J,Ut,Ht,Yt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=at.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(Gt=Gt[Ht]),Gt){kt.bindFramebuffer(V.FRAMEBUFFER,Gt);try{const ae=R.textures[Yt],oe=ae.format,Jt=ae.type;if(!re.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-mt&&pt>=0&&pt<=R.height-J&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Yt),V.readPixels(j,pt,mt,J,jt.convert(oe),jt.convert(Jt),Ut))}finally{const ae=Q!==null?at.get(Q).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(R,j,pt,mt,J,Ut,Ht,Yt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=at.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(Gt=Gt[Ht]),Gt)if(j>=0&&j<=R.width-mt&&pt>=0&&pt<=R.height-J){kt.bindFramebuffer(V.FRAMEBUFFER,Gt);const ae=R.textures[Yt],oe=ae.format,Jt=ae.type;if(!re.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ge),V.bufferData(V.PIXEL_PACK_BUFFER,Ut.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Yt),V.readPixels(j,pt,mt,J,jt.convert(oe),jt.convert(Jt),0);const we=Q!==null?at.get(Q).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,we);const je=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await hS(V,je,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ge),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ut),V.deleteBuffer(ge),V.deleteSync(je),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,pt=0){const mt=Math.pow(2,-pt),J=Math.floor(R.image.width*mt),Ut=Math.floor(R.image.height*mt),Ht=j!==null?j.x:0,Yt=j!==null?j.y:0;et.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,pt,0,0,Ht,Yt,J,Ut),kt.unbindTexture()};const el=V.createFramebuffer(),nl=V.createFramebuffer();this.copyTextureToTexture=function(R,j,pt=null,mt=null,J=0,Ut=null){Ut===null&&(J!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=J,J=0):Ut=0);let Ht,Yt,Gt,ae,oe,Jt,ge,we,je;const Ie=R.isCompressedTexture?R.mipmaps[Ut]:R.image;if(pt!==null)Ht=pt.max.x-pt.min.x,Yt=pt.max.y-pt.min.y,Gt=pt.isBox3?pt.max.z-pt.min.z:1,ae=pt.min.x,oe=pt.min.y,Jt=pt.isBox3?pt.min.z:0;else{const An=Math.pow(2,-J);Ht=Math.floor(Ie.width*An),Yt=Math.floor(Ie.height*An),R.isDataArrayTexture?Gt=Ie.depth:R.isData3DTexture?Gt=Math.floor(Ie.depth*An):Gt=1,ae=0,oe=0,Jt=0}mt!==null?(ge=mt.x,we=mt.y,je=mt.z):(ge=0,we=0,je=0);const _e=jt.convert(j.format),ie=jt.convert(j.type);let qe;j.isData3DTexture?(et.setTexture3D(j,0),qe=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(et.setTexture2DArray(j,0),qe=V.TEXTURE_2D_ARRAY):(et.setTexture2D(j,0),qe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Me=V.getParameter(V.UNPACK_ROW_LENGTH),Tn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),pi=V.getParameter(V.UNPACK_SKIP_PIXELS),On=V.getParameter(V.UNPACK_SKIP_ROWS),gn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ie.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ie.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ae),V.pixelStorei(V.UNPACK_SKIP_ROWS,oe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Jt);const ke=R.isDataArrayTexture||R.isData3DTexture,Pn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const An=at.get(R),$e=at.get(j),Sn=at.get(An.__renderTarget),Rr=at.get($e.__renderTarget);kt.bindFramebuffer(V.READ_FRAMEBUFFER,Sn.__webglFramebuffer),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Gn=0;Gn<Gt;Gn++)ke&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,at.get(R).__webglTexture,J,Jt+Gn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,at.get(j).__webglTexture,Ut,je+Gn)),V.blitFramebuffer(ae,oe,Ht,Yt,ge,we,Ht,Yt,V.DEPTH_BUFFER_BIT,V.NEAREST);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||at.has(R)){const An=at.get(R),$e=at.get(j);kt.bindFramebuffer(V.READ_FRAMEBUFFER,el),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,nl);for(let Sn=0;Sn<Gt;Sn++)ke?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,J,Jt+Sn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,J),Pn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$e.__webglTexture,Ut,je+Sn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,$e.__webglTexture,Ut),J!==0?V.blitFramebuffer(ae,oe,Ht,Yt,ge,we,Ht,Yt,V.COLOR_BUFFER_BIT,V.NEAREST):Pn?V.copyTexSubImage3D(qe,Ut,ge,we,je+Sn,ae,oe,Ht,Yt):V.copyTexSubImage2D(qe,Ut,ge,we,ae,oe,Ht,Yt);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Pn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(qe,Ut,ge,we,je,Ht,Yt,Gt,_e,ie,Ie.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(qe,Ut,ge,we,je,Ht,Yt,Gt,_e,Ie.data):V.texSubImage3D(qe,Ut,ge,we,je,Ht,Yt,Gt,_e,ie,Ie):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ut,ge,we,Ht,Yt,_e,ie,Ie.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ut,ge,we,Ie.width,Ie.height,_e,Ie.data):V.texSubImage2D(V.TEXTURE_2D,Ut,ge,we,Ht,Yt,_e,ie,Ie);V.pixelStorei(V.UNPACK_ROW_LENGTH,Me),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,pi),V.pixelStorei(V.UNPACK_SKIP_ROWS,On),V.pixelStorei(V.UNPACK_SKIP_IMAGES,gn),Ut===0&&j.generateMipmaps&&V.generateMipmap(qe),kt.unbindTexture()},this.initRenderTarget=function(R){at.get(R).__webglFramebuffer===void 0&&et.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?et.setTextureCube(R,0):R.isData3DTexture?et.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?et.setTexture2DArray(R,0):et.setTexture2D(R,0),kt.unbindTexture()},this.resetState=function(){G=0,P=0,Q=null,kt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const sv={xRange:[-2,2],yRange:[-1.5,1.5],gridDivisions:8,axisColor:8947848,gridColor:3355443},C0=(o,t,i,r)=>({x:1-i*o*o+t,y:r*o}),w0=(o,t,i,r)=>({x:t,y:-r*o+i*t-t*t*t}),P1=o=>{const{xRange:t,yRange:i,gridDivisions:r,axisColor:l,gridColor:u}=sv,[d,h]=t,[m,p]=i,_=(h-d)/r,x=(p-m)/r,y=new ko;y.name="coordinate-system";for(let T=0;T<=r;T++){const b=d+T*_,M=Math.abs(b)<.01,g=[new rt(b,m,-.01),new rt(b,p,-.01)],B=new Hn().setFromPoints(g),O=new Rs({color:M?l:u,transparent:!0,opacity:M?1:.4}),L=new Yc(B,O);L.userData.isGrid=!0,y.add(L)}for(let T=0;T<=r;T++){const b=m+T*x,M=Math.abs(b)<.01,g=[new rt(d,b,-.01),new rt(h,b,-.01)],B=new Hn().setFromPoints(g),O=new Rs({color:M?l:u,transparent:!0,opacity:M?1:.4}),L=new Yc(B,O);L.userData.isGrid=!0,y.add(L)}const v=(T,b,M=.15)=>{const g=document.createElement("canvas"),B=g.getContext("2d");g.width=128,g.height=64,B.fillStyle="transparent",B.fillRect(0,0,g.width,g.height),B.font="Bold 32px Arial",B.fillStyle="#aaaaaa",B.textAlign="center",B.textBaseline="middle",B.fillText(T,g.width/2,g.height/2);const O=new YS(g);O.minFilter=Mi;const L=new Z0({map:O,transparent:!0,depthTest:!1}),w=new HS(L);return w.position.copy(b),w.scale.set(M*2,M,1),w.userData.isGrid=!0,w};for(let T=0;T<=r;T++){const b=d+T*_;Math.abs(b)>.01&&y.add(v(b.toFixed(1),new rt(b,m-.15,0),.12))}for(let T=0;T<=r;T++){const b=m+T*x;Math.abs(b)>.01&&y.add(v(b.toFixed(1),new rt(d-.2,b,0),.12))}return y.add(v("x",new rt(h+.2,0,0),.18)),y.add(v("y",new rt(0,p+.15,0),.18)),y.add(v("0",new rt(-.12,-.12,0),.1)),o.add(y),y},Li={period1:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period2:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period3:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period4:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period5:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period6plus:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},trajectory:"#00ffff",manifold:"#1e90ff",attractor:"#27ae60",repeller:"#e74c3c",saddlePoint:"#eedf32",periodicBlue:"#3498db"},B1=()=>{const o=$t.useRef(null),t=$t.useRef(null),i=$t.useRef(null),r=$t.useRef(null),l=$t.useRef(null),u=$t.useRef(null),d=$t.useRef(null),[h,m]=$t.useState("manifold"),[p,_]=$t.useState("henon"),[x,y]=$t.useState(null),[v,T]=$t.useState({a:.4,b:.3,epsilon:.0625,startX:.1,startY:.1,maxIterations:1e3,maxPeriod:5}),[b,M]=$t.useState({orbits:[],trajectoryPoints:[],currentPoint:{x:.1,y:.1},iteration:0,isRunning:!1,isReady:!1,showOrbits:!1,showTrail:!0,showOrbitLines:!1,highlightedOrbitId:null,hasStarted:!1}),[g,B]=$t.useState({manifolds:[],fixedPoints:[],isComputing:!1,isReady:!1,showOrbits:!0,showOrbitLines:!1,highlightedOrbitId:null}),[O,L]=$t.useState({period1:!0,period2:!0,period3:!0,period4:!0,period5:!0,period6plus:!1}),[w,G]=$t.useState({gridBoxes:[],invariantMeasure:null,leftEigenvector:null,transitions:null,selectedBoxIndex:null,currentBoxIndex:-1,isComputing:!1,subdivisions:20,pointsPerBox:64,epsilon:.05,showUlamOverlay:!1,showTransitions:!0,showCurrentBox:!0,needsRecompute:!1}),[P,Q]=$t.useState({isAnimating:!1,parameter:"a",rangeValue:.1,direction:1,steps:10,currentStep:0,baseValue:null,targetValue:null});$t.useRef(null);const[D,U]=$t.useState({isRecording:!1,isEncoding:!1,frameCount:0,recordingEnabled:!1,encodingProgress:0,error:null}),X=$t.useRef([]),ut=$t.useRef(null),gt=$t.useRef(null),_t=$t.useRef(null),[ct,I]=$t.useState({visible:!1,x:0,y:0,data:null}),it=$t.useRef(new QS),Y=$t.useRef(new Te);$t.useEffect(()=>{if(!o.current)return;const z=new zS;z.background=new xe(657930),i.current=z;const[at,et]=sv.yRange,At=et-at,ht=.5,C=window.innerWidth*.75/window.innerHeight,E=At+ht*2,H=E*C,K=new tv(-H/2,H/2,E/2,-E/2,.1,1e3);K.position.z=5,r.current=K;const $=new O1({canvas:o.current,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});$.setSize(window.innerWidth*.75,window.innerHeight),$.setPixelRatio(window.devicePixelRatio),t.current=$,P1(z);const nt=()=>{const xt=window.innerWidth*.75/window.innerHeight,zt=E*xt;K.left=-zt/2,K.right=zt/2,K.updateProjectionMatrix(),$.setSize(window.innerWidth*.75,window.innerHeight)};window.addEventListener("resize",nt);const Ct=()=>{l.current=requestAnimationFrame(Ct),$.render(z,K)};return Ct(),()=>{window.removeEventListener("resize",nt),l.current&&cancelAnimationFrame(l.current),u.current&&cancelAnimationFrame(u.current),$.dispose()}},[]),$t.useEffect(()=>{(async()=>{try{const at=await My(()=>import("./henon_periodic_orbits-DGrKuqq3.js"),[]);await at.default(),y(at),console.log("WASM module loaded successfully")}catch(at){console.error("Failed to load WASM module:",at)}})()},[]),$t.useEffect(()=>{T(p==="duffing"?z=>({...z,a:2.75,b:.2}):z=>({...z,a:.4,b:.3}))},[p]);const Tt=$t.useCallback((z,at)=>{const et=v.a,At=v.b,ht=-2*et*z,C=1,E=At,H=0,K=ht+H,$=ht*H-C*E;return{j11:ht,j12:C,j21:E,j22:H,trace:K,det:$}},[v.a,v.b]),N=$t.useCallback(z=>{if(!o.current||!i.current||!r.current)return;const at=o.current.getBoundingClientRect();if(Y.current.x=(z.clientX-at.left)/at.width*2-1,Y.current.y=-((z.clientY-at.top)/at.height)*2+1,it.current.setFromCamera(Y.current,r.current),w.showUlamOverlay&&w.gridBoxes.length>0){const ht=i.current.getObjectByName("ulam-grid");if(ht){const C=it.current.intersectObject(ht);if(C.length>0&&C[0].instanceId!==void 0){const E=C[0].instanceId,H=w.gridBoxes[E],K=w.invariantMeasure?w.invariantMeasure[E]:0,$=w.invariantMeasure?Math.max(...w.invariantMeasure):1;let nt=0,Ct=[];if(gt.current)try{const xt=gt.current.get_transitions(E);xt&&xt.length>0&&(nt=xt.length,Ct=xt.sort((zt,Xt)=>(Xt.probability||0)-(zt.probability||0)).slice(0,3))}catch(xt){console.error("Error getting transitions:",xt)}I({visible:!0,x:z.clientX,y:z.clientY,data:{type:"Ulam Box",boxIndex:E,pos:{x:H.center[0],y:H.center[1]},measure:K,measurePercent:$>0?K/$*100:0,numTransitions:nt,topTransitions:Ct,isCurrentBox:E===w.currentBoxIndex}});return}}}const et=[];i.current.traverse(ht=>{ht.isMesh&&(ht.userData.type==="orbit"||ht.userData.type==="fixedPoint")&&et.push(ht)});const At=it.current.intersectObjects(et,!1);if(At.length>0){const C=At[0].object.userData,E=Tt(C.pos.x,C.pos.y);C.type==="orbit"&&C.orbitId&&(h==="periodic"&&b.showOrbitLines?M(H=>H.highlightedOrbitId!==C.orbitId?{...H,highlightedOrbitId:C.orbitId}:H):h==="manifold"&&g.showOrbitLines&&B(H=>H.highlightedOrbitId!==C.orbitId?{...H,highlightedOrbitId:C.orbitId}:H)),I({visible:!0,x:z.clientX,y:z.clientY,data:{type:C.type==="fixedPoint"?"Fixed Point":"Periodic Point",period:C.period,stability:C.stability,pos:C.pos,eigenvalues:C.eigenvalues,jacobian:E,orbitSize:C.orbitPoints?.length||1}})}else I(ht=>ht.visible?{...ht,visible:!1}:ht),h==="periodic"&&b.highlightedOrbitId!==null&&M(ht=>ht.highlightedOrbitId!==null?{...ht,highlightedOrbitId:null}:ht),h==="manifold"&&g.highlightedOrbitId!==null&&B(ht=>ht.highlightedOrbitId!==null?{...ht,highlightedOrbitId:null}:ht)},[Tt,w.showUlamOverlay,w.gridBoxes,w.invariantMeasure,w.currentBoxIndex,h,b.showOrbitLines,b.highlightedOrbitId,g.showOrbitLines,g.highlightedOrbitId]);$t.useEffect(()=>{!o.current||!i.current||!r.current||o.current.getBoundingClientRect()},[N]);const st=$t.useCallback(z=>{if(!gt.current)return;const at=gt.current.get_transitions(z);G(et=>({...et,selectedBoxIndex:z,transitions:at}))},[]);$t.useEffect(()=>{const z=o.current;if(!z)return;const at=et=>{if(!w.showUlamOverlay||!w.gridBoxes.length)return;const At=z.getBoundingClientRect(),ht=(et.clientX-At.left)/At.width*2-1,C=-((et.clientY-At.top)/At.height)*2+1;it.current.setFromCamera(new Te(ht,C),r.current);const H=i.current.getObjectByName("ulam-grid");if(H){const K=it.current.intersectObject(H);if(K.length>0){const $=K[0].instanceId;$!==void 0&&st($)}else G($=>({...$,selectedBoxIndex:null,transitions:null}))}};return z.addEventListener("mousemove",N),z.addEventListener("click",at),()=>{z.removeEventListener("mousemove",N),z.removeEventListener("click",at)}},[N,w.showUlamOverlay,w.gridBoxes.length,st]),$t.useEffect(()=>{if(!x)return;let z=!1;return M(et=>({...et,isReady:!1,orbits:[],trajectoryPoints:[],iteration:0,hasStarted:!1,showOrbits:!1})),(()=>{try{if(z)return;const et=p==="duffing"?x.DuffingSystemWasm:x.HenonSystemWasm,At=new et(v.a,v.b,v.maxPeriod);if(z){At.free();return}const ht=At.getPeriodicOrbits();At.free(),M(C=>({...C,orbits:ht,isReady:!0,currentPoint:{x:v.startX,y:v.startY}}))}catch(et){console.error("Failed to compute periodic orbits:",et),M(At=>({...At,isReady:!0,orbits:[]}))}})(),()=>{z=!0}},[x,p,v.a,v.b,v.maxPeriod,v.startX,v.startY]),$t.useEffect(()=>{if(h==="manifold")return d.current&&clearTimeout(d.current),B(z=>({...z,isComputing:!0})),d.current=setTimeout(()=>{if(x)try{if(p==="duffing"){console.log("Computing Duffing manifold");const z=x.compute_duffing_manifold_simple(v.a,v.b,v.epsilon);B({manifolds:z.manifolds||[],fixedPoints:z.fixed_points||[],isComputing:!1,isReady:!0})}else if(b.orbits&&b.orbits.length>0){console.log("Using periodic orbits for manifold:",b.orbits.length,"orbits");const z=x.compute_manifold_from_orbits(v.a,v.b,v.epsilon,b.orbits);B({manifolds:z.manifolds||[],fixedPoints:z.fixed_points||[],isComputing:!1,isReady:!0})}else{console.log("No periodic orbits available, using simple computation");const z=x.compute_manifold_simple(v.a,v.b,v.epsilon);B({manifolds:z.manifolds||[],fixedPoints:z.fixed_points||[],isComputing:!1,isReady:!0})}}catch(z){console.error("Manifold computation error:",z),B(at=>({...at,isComputing:!1}))}},500),()=>{d.current&&clearTimeout(d.current)}},[h,p,v.a,v.b,v.epsilon,b.orbits,x]),$t.useEffect(()=>{if(!P.isAnimating||h!=="manifold"||g.isComputing)return;const{parameter:z,rangeValue:at,direction:et,steps:At,currentStep:ht,baseValue:C}=P;if(ht>=At){Q($=>({...$,isAnimating:!1}));return}const E=at/At,H=ht+1,K=C+et*E*H;T($=>({...$,[z]:parseFloat(K.toFixed(4))})),Q($=>({...$,currentStep:H}))},[P.isAnimating,P.currentStep,g.isComputing,h]);const bt=$t.useCallback(async()=>{const z=v[P.parameter],at=z+P.direction*P.rangeValue;if(D.recordingEnabled&&o.current)try{const et=o.current,At=1280,ht=720,C=new OffscreenCanvas(At,ht),E=C.getContext("2d");E.drawImage(et,0,0,At,ht);const H=`a = ${v.a.toFixed(4)}  b = ${v.b.toFixed(4)}  ε = ${v.epsilon.toFixed(4)}`;E.fillStyle="rgba(0, 0, 0, 0.7)",E.fillRect(10,ht-40,400,30),E.font="bold 16px monospace",E.fillStyle="#4CAF50",E.fillText(H,20,ht-18);const K=await createImageBitmap(C);X.current.push(K),U($=>({...$,frameCount:1})),console.log("Initial frame captured")}catch(et){console.error("Initial frame capture error:",et)}Q(et=>({...et,isAnimating:!0,baseValue:z,targetValue:at,currentStep:0}))},[v,P.parameter,P.direction,P.rangeValue,D.recordingEnabled]),wt=$t.useCallback(()=>{Q(z=>({...z,isAnimating:!1,currentStep:0}))},[]),Ft=$t.useCallback(async()=>{if(!o.current||!D.recordingEnabled)return null;const z=o.current,at=1280,et=720,At=new OffscreenCanvas(at,et),ht=At.getContext("2d");ht.drawImage(z,0,0,at,et);const C=`a = ${v.a.toFixed(4)}  b = ${v.b.toFixed(4)}  ε = ${v.epsilon.toFixed(4)}`;return ht.fillStyle="rgba(0, 0, 0, 0.7)",ht.fillRect(10,et-40,400,30),ht.font="bold 16px monospace",ht.fillStyle="#4CAF50",ht.fillText(C,20,et-18),await createImageBitmap(At)},[v.a,v.b,v.epsilon,D.recordingEnabled]),qt=$t.useCallback(()=>{ut.current&&ut.current.terminate();const z=new Worker(new URL("/assets/videoEncoder.worker-7mA2J84V.js",import.meta.url),{type:"classic"});return z.onmessage=at=>{const{type:et,blob:At,frameCount:ht,error:C}=at.data;switch(et){case"ready":console.log("Encoder ready");break;case"progress":U($=>({...$,frameCount:ht}));break;case"complete":const E=URL.createObjectURL(At),H=document.createElement("a"),K=ot();H.href=E,H.download=K,document.body.appendChild(H),H.click(),document.body.removeChild(H),URL.revokeObjectURL(E),U($=>({...$,isEncoding:!1,isRecording:!1,recordingEnabled:!1})),X.current=[];break;case"error":console.error("Encoder error:",C),U($=>({...$,error:C,isEncoding:!1}));break}},ut.current=z,z},[]),ot=$t.useCallback(()=>{const z=v.a.toFixed(3).replace(".","p"),at=v.b.toFixed(3).replace(".","p"),et=v.epsilon.toFixed(4).replace(".","p"),At=P.parameter,ht=(P.baseValue||0).toFixed(3).replace(".","p").replace("-","m"),C=(P.targetValue||0).toFixed(3).replace(".","p").replace("-","m");return`henon_${At}_a${z}_b${at}_eps${et}_${ht}_to_${C}.mp4`},[v.a,v.b,v.epsilon,P.parameter,P.baseValue,P.targetValue]),St=$t.useCallback(async()=>{if(!o.current||!t.current||!i.current||!r.current)return;t.current.render(i.current,r.current);const z=o.current,at=1920,et=1080,At=new OffscreenCanvas(at,et),ht=At.getContext("2d");if(ht.drawImage(z,0,0,at,et),ht.fillStyle="rgba(0, 0, 0, 0.8)",ht.fillRect(10,et-80,500,70),ht.font="bold 18px monospace",ht.fillStyle="#4CAF50",h==="periodic")ht.fillText(`Periodic Orbits | Iteration: ${b.iteration}`,20,et-55),ht.font="14px monospace",ht.fillStyle="#aaa",ht.fillText(`Current: (${b.currentPoint.x.toFixed(6)}, ${b.currentPoint.y.toFixed(6)})`,20,et-32);else if(h==="manifold"){ht.fillText("Unstable Manifold",20,et-55),ht.font="14px monospace",ht.fillStyle="#aaa";const zt=g.manifolds.reduce((Xt,Rt)=>Xt+(Rt.points_positive?.length||0)+(Rt.points_negative?.length||0),0);ht.fillText(`${g.fixedPoints.length} fixed points, ${zt} manifold points`,20,et-32)}ht.font="bold 14px monospace",ht.fillStyle="#4CAF50",ht.fillText(`a = ${v.a.toFixed(4)}   b = ${v.b.toFixed(4)}   ε = ${v.epsilon.toFixed(4)}`,20,et-12);const C=await At.convertToBlob({type:"image/png",quality:1}),E=URL.createObjectURL(C),H=document.createElement("a"),K=v.a.toFixed(3).replace(".","p"),$=v.b.toFixed(3).replace(".","p"),nt=v.epsilon.toFixed(4).replace(".","p"),Ct=h==="periodic"?"periodic":"manifold",xt=h==="periodic"?`_iter${b.iteration}`:"";H.href=E,H.download=`henon_${Ct}_a${K}_b${$}_eps${nt}${xt}.png`,document.body.appendChild(H),H.click(),document.body.removeChild(H),URL.revokeObjectURL(E)},[h,v,b.iteration,b.currentPoint,g.manifolds,g.fixedPoints]),Ot=$t.useCallback(async()=>{if(X.current.length===0){console.warn("No frames to encode");return}U(At=>({...At,isEncoding:!0,encodingProgress:0}));const z=qt();z.postMessage({type:"init",data:{width:1280,height:720,fps:2,filename:ot()}}),await new Promise(At=>setTimeout(At,100));const et=1e6/2;for(let At=0;At<X.current.length;At++){const ht=X.current[At];z.postMessage({type:"frame",data:{imageData:ht,timestamp:At*et,duration:et}}),At%5===0&&await new Promise(C=>setTimeout(C,10))}z.postMessage({type:"finish"})},[qt,ot]),ee=$t.useRef(!1);$t.useEffect(()=>{const z=ee.current,at=g.isComputing;ee.current=at,!(!D.recordingEnabled||!P.isAnimating)&&z&&!at&&(console.log(`[Recording] Manifold finished, capturing frame for step ${P.currentStep}...`),requestAnimationFrame(async()=>{try{const et=await Ft();et?(X.current.push(et),U(At=>({...At,frameCount:X.current.length})),console.log(`[Recording] Frame ${X.current.length} captured`)):console.log("[Recording] captureFrame returned null")}catch(et){console.error("[Recording] Frame capture error:",et)}}))},[g.isComputing,P.isAnimating,D.recordingEnabled,P.currentStep,Ft]),$t.useEffect(()=>{!P.isAnimating&&D.recordingEnabled&&X.current.length>0&&!D.isEncoding&&(console.log(`[Recording] Animation finished with ${X.current.length} frames, starting encoding...`),Ot())},[P.isAnimating,D.recordingEnabled,D.isEncoding,Ot]);const Qt=$t.useCallback(()=>{D.recordingEnabled?(U(z=>({...z,recordingEnabled:!1})),X.current=[]):(U(z=>({...z,recordingEnabled:!0,frameCount:0,error:null})),X.current=[])},[D.recordingEnabled]);$t.useEffect(()=>{if(!i.current)return;const z=i.current,at=[];if(z.traverse(et=>{(et.userData.type==="trajectory"||et.userData.type==="orbit"||et.userData.type==="orbitLine"||et.userData.type==="manifold"||et.userData.type==="fixedPoint")&&at.push(et)}),at.forEach(et=>{et.geometry&&et.geometry.dispose(),et.material&&et.material.dispose(),z.remove(et)}),h==="periodic"){if(b.showOrbits&&b.orbits.length>0){const et=b.orbits.filter(ht=>Ke(ht)),At="#ff00ff";et.forEach((ht,C)=>{const E=`orbit-${ht.period}-${C}`,H=b.highlightedOrbitId===E,K=H?At:de(ht);if(ht.points.forEach(($,nt)=>{const Ct=new _r(H?.06:.03,12,12),xt=new za({color:new xe(K)}),zt=new Un(Ct,xt);zt.position.set($[0],$[1],H?.15:.1),zt.userData={type:"orbit",orbitId:E,period:ht.period,stability:ht.stability,pointIndex:nt,pos:{x:$[0],y:$[1]},orbitPoints:ht.points,eigenvalues:ht.eigenvalues||null},z.add(zt)}),b.showOrbitLines&&ht.points.length>1){const $=new Hn,nt=new Float32Array(ht.points.length*3);ht.points.forEach((Rt,Pt)=>{nt[Pt*3]=Rt[0],nt[Pt*3+1]=Rt[1],nt[Pt*3+2]=H?.15:.1}),$.setAttribute("position",new Fn(nt,3));const Ct=H?At:de(ht),xt=H?1:.4,zt=new Rs({color:new xe(Ct),opacity:xt,transparent:!0,linewidth:H?3:1}),Xt=new t0($,zt);Xt.userData={type:"orbitLine",orbitId:E},z.add(Xt)}})}if(b.showTrail&&b.trajectoryPoints.length>0&&b.trajectoryPoints.forEach((et,At)=>{const ht=At/b.trajectoryPoints.length,C=.012*(.3+.7*ht),E=new _r(C,6,6),H=new za({color:new xe(Li.trajectory),opacity:.2+.6*ht,transparent:!0}),K=new Un(E,H);K.position.set(et.x,et.y,.05),K.userData.type="trajectory",z.add(K)}),b.hasStarted&&b.currentPoint){const et=new _r(.04,16,16),At=new za({color:new xe("#ffffff")}),ht=new Un(et,At);ht.position.set(b.currentPoint.x,b.currentPoint.y,.2),ht.userData.type="trajectory",z.add(ht)}}else if(g.manifolds.forEach(et=>{[et.plus,et.minus].forEach(At=>{if(At&&At.points&&At.points.length>1){const ht=new Hn,C=new Float32Array(At.points.length*3);At.points.forEach(([K,$],nt)=>{C[nt*3]=K,C[nt*3+1]=$,C[nt*3+2]=.1}),ht.setAttribute("position",new Fn(C,3));const E=new Rs({color:new xe(Li.manifold),linewidth:2}),H=new Yc(ht,E);H.userData.type="manifold",z.add(H)}})}),g.fixedPoints.forEach(et=>{const At=(et.stability||"").toLowerCase(),ht=At==="attractor"||At==="stable",H=ht?Li.attractor:At==="repeller"||At==="unstable"||At==="saddle"?Li.saddlePoint:Li.periodicBlue,K=ht?.03:.025,$=new _r(K,12,12),nt=new za({color:new xe(H)}),Ct=new Un($,nt);Ct.position.set(et.x,et.y,.2),Ct.userData={type:"fixedPoint",period:1,stability:et.stability,pos:{x:et.x,y:et.y},eigenvalues:et.eigenvalues||null},z.add(Ct)}),g.showOrbits&&b.orbits.length>0){const et=b.orbits.filter(ht=>Ke(ht)),At="#ff00ff";et.forEach((ht,C)=>{const E=`orbit-${ht.period}-${C}`,H=g.highlightedOrbitId===E,K=H?At:de(ht);if(ht.points.forEach(($,nt)=>{const Ct=new _r(H?.04:.02,10,10),xt=new za({color:new xe(K)}),zt=new Un(Ct,xt);zt.position.set($[0],$[1],H?.15:.05),zt.userData={type:"orbit",orbitId:E,period:ht.period,stability:ht.stability,pointIndex:nt,pos:{x:$[0],y:$[1]},orbitPoints:ht.points,eigenvalues:ht.eigenvalues||null},z.add(zt)}),g.showOrbitLines&&ht.points.length>1){const $=new Hn,nt=new Float32Array(ht.points.length*3);ht.points.forEach((Rt,Pt)=>{nt[Pt*3]=Rt[0],nt[Pt*3+1]=Rt[1],nt[Pt*3+2]=H?.15:.05}),$.setAttribute("position",new Fn(nt,3));const Ct=H?At:de(ht),xt=H?1:.4,zt=new Rs({color:new xe(Ct),opacity:xt,transparent:!0,linewidth:H?3:1}),Xt=new t0($,zt);Xt.userData={type:"orbitLine",orbitId:E},z.add(Xt)}})}},[h,b,g,O]);const de=z=>{const{stability:at}=z;return at.toLowerCase()==="stable"?Li.attractor:at.toLowerCase()==="saddle"?Li.saddlePoint:at.toLowerCase()==="unstable"?Li.repeller:Li.periodicBlue},Ke=z=>z.period===1?O.period1:z.period===2?O.period2:z.period===3?O.period3:z.period===4?O.period4:z.period===5?O.period5:O.period6plus,V=$t.useCallback(()=>{if(!b.isReady||b.isRunning)return;const{x:z,y:at}=b.currentPoint;if(!isFinite(z)||!isFinite(at)||Math.abs(z)>10||Math.abs(at)>10){M(ht=>({...ht,currentPoint:{x:v.startX,y:v.startY},trajectoryPoints:[],iteration:0,hasStarted:!1}));return}const At=(p==="duffing"?w0:C0)(z,at,v.a,v.b);M(ht=>({...ht,currentPoint:At,trajectoryPoints:[...ht.trajectoryPoints,{x:z,y:at}],iteration:ht.iteration+1,hasStarted:!0}))},[b.isReady,b.isRunning,b.currentPoint,v,p]),Ne=$t.useCallback(()=>{if(!b.isReady||b.isRunning)return;M(H=>({...H,isRunning:!0}));const z=p==="duffing"?w0:C0;let at=b.currentPoint.x,et=b.currentPoint.y,At=b.iteration;const ht=[...b.trajectoryPoints],C=5,E=()=>{for(let H=0;H<C&&At<v.maxIterations;H++){if(!isFinite(at)||!isFinite(et)||Math.abs(at)>10||Math.abs(et)>10){M($=>({...$,isRunning:!1,showOrbits:!0,hasStarted:!0,trajectoryPoints:ht,currentPoint:{x:at,y:et},iteration:At}));return}ht.push({x:at,y:et});const K=z(at,et,v.a,v.b);at=K.x,et=K.y,At++}M(H=>({...H,currentPoint:{x:at,y:et},trajectoryPoints:[...ht],iteration:At,hasStarted:!0})),At<v.maxIterations?u.current=requestAnimationFrame(E):M(H=>({...H,isRunning:!1,showOrbits:!0}))};u.current=requestAnimationFrame(E)},[b,v,p]),fe=$t.useCallback(()=>{u.current&&cancelAnimationFrame(u.current),M(z=>({...z,currentPoint:{x:v.startX,y:v.startY},trajectoryPoints:[],iteration:0,isRunning:!1,hasStarted:!1,showOrbits:!1}))},[v.startX,v.startY]),re=$t.useMemo(()=>{let z=0;return g.manifolds.forEach(at=>{at.plus?.points&&(z+=at.plus.points.length),at.minus?.points&&(z+=at.minus.points.length)}),z},[g.manifolds]),kt=$t.useCallback(async()=>{if(x){G(z=>({...z,isComputing:!0,needsRecompute:!1}));try{const{UlamComputer:z}=x;if(!z)throw console.error("UlamComputer export is missing from WASM module!"),new Error("UlamComputer definition missing");const at=new z(v.a,v.b,w.subdivisions,w.pointsPerBox,w.epsilon);gt.current=at;const et=at.get_grid_boxes(),At=at.get_invariant_measure(),ht=at.get_left_eigenvector();let C=-1;b.hasStarted&&b.currentPoint&&(C=at.get_box_index(b.currentPoint.x,b.currentPoint.y)),G(E=>({...E,isComputing:!1,gridBoxes:et,invariantMeasure:At,leftEigenvector:ht,currentBoxIndex:C,selectedBoxIndex:null,transitions:null}))}catch(z){console.error("Ulam computation failed:",z),G(at=>({...at,isComputing:!1}))}}},[x,v.a,v.b,w.subdivisions,w.pointsPerBox,w.epsilon,b.hasStarted,b.currentPoint]);return $t.useEffect(()=>{h==="manifold"&&G(z=>({...z,epsilon:v.epsilon}))},[h,v.epsilon]),$t.useEffect(()=>{if(!(!w.showUlamOverlay||!x))return _t.current&&clearTimeout(_t.current),_t.current=setTimeout(()=>{kt()},200),()=>{_t.current&&clearTimeout(_t.current)}},[w.showUlamOverlay,x,v.a,v.b,w.epsilon,w.subdivisions,w.pointsPerBox,kt]),$t.useEffect(()=>{if(!(!gt.current||!w.showUlamOverlay)&&b.hasStarted&&b.currentPoint){const z=gt.current.get_box_index(b.currentPoint.x,b.currentPoint.y);if(z!==w.currentBoxIndex){const at=z>=0?gt.current.get_transitions(z):null;G(et=>({...et,currentBoxIndex:z,transitions:et.showCurrentBox?at:et.transitions,selectedBoxIndex:et.showCurrentBox?z:et.selectedBoxIndex}))}}},[b.currentPoint,b.hasStarted,w.showUlamOverlay,w.currentBoxIndex]),$t.useEffect(()=>{const z=i.current;if(!z)return;const at=()=>{const Ct=z.getObjectByName("ulam-grid");Ct&&(Ct.geometry.dispose(),Ct.material.dispose(),z.remove(Ct))};if(!w.showUlamOverlay||!w.gridBoxes.length){at();return}at();const et=w.gridBoxes,At=et.length,ht=new $o(1,1),C=new za({color:16777215,transparent:!0,opacity:.5,side:Oi,depthWrite:!1}),E=new kS(ht,C,At);E.name="ulam-grid",E.userData.type="ulamGrid";const H=new Nn,K=new xe,$=new Map;w.selectedBoxIndex!==null&&w.transitions&&w.transitions.forEach(Ct=>{$.set(Ct.index,Ct.probability)});let nt=0;return w.invariantMeasure&&(nt=Math.max(...w.invariantMeasure)),et.forEach((Ct,xt)=>{const zt=Ct.center[0],Xt=Ct.center[1],Rt=Ct.radius[0],Pt=Ct.radius[1];H.position.set(zt,Xt,-.05),H.scale.set(Rt*2*.95,Pt*2*.95,1),H.updateMatrix(),E.setMatrixAt(xt,H.matrix);const te=w.showCurrentBox&&xt===w.currentBoxIndex,jt=w.selectedBoxIndex!==null&&xt===w.selectedBoxIndex;if(te&&!jt)K.setHex(16711935),E.setColorAt(xt,K);else if(w.selectedBoxIndex!==null)if(xt===w.selectedBoxIndex)K.setHex(65535),E.setColorAt(xt,K);else if($.has(xt)){const Bt=$.get(xt);K.setHSL(.7-Bt*.7,1,.5),E.setColorAt(xt,K)}else K.setHex(2236962),E.setColorAt(xt,K);else if(w.invariantMeasure&&w.invariantMeasure.length===At){const Bt=w.invariantMeasure[xt];if(Bt>0){const q=.66-Bt/nt*.5;K.setHSL(q,1,.5),E.setColorAt(xt,K)}else K.setHex(1118481),E.setColorAt(xt,K)}else K.setHex(3355443),E.setColorAt(xt,K)}),E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0),z.add(E),at},[w.showUlamOverlay,w.gridBoxes,w.selectedBoxIndex,w.transitions,w.invariantMeasure,w.currentBoxIndex,w.showCurrentBox]),$t.useEffect(()=>{if(!i.current)return;const z=i.current,at=[];z.traverse(et=>{h!=="periodic"&&(et.userData.type==="orbit"||et.userData.type==="trajectory"||et.userData.type==="orbitLine")&&at.push(et),h!=="manifold"&&(et.userData.type==="manifold"||et.userData.type==="fixedPoint")&&at.push(et),h!=="ulam"&&et.userData.type}),at.forEach(et=>{et.geometry&&et.geometry.dispose(),et.material&&et.material.dispose(),z.remove(et)})},[h]),k.jsxs("div",{style:Nt.container,children:[k.jsxs("div",{style:Nt.sidebar,children:[k.jsxs("div",{style:Nt.section,children:[k.jsx("h3",{style:Nt.sectionTitle,children:"Mode"}),k.jsxs("div",{style:Nt.toggleContainer,children:[k.jsx("button",{onClick:()=>m("periodic"),style:{...Nt.toggleButton,...h==="periodic"?Nt.toggleActive:{}},children:"Periodic Orbits"}),k.jsx("button",{onClick:()=>m("manifold"),style:{...Nt.toggleButton,...h==="manifold"?Nt.toggleActive:{}},children:"Unstable Manifold"})]})]}),k.jsxs("div",{style:Nt.section,children:[k.jsx("h3",{style:Nt.sectionTitle,children:"Dynamic System"}),k.jsxs("select",{value:p,onChange:z=>_(z.target.value),style:{width:"100%",padding:"8px 12px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"6px",fontSize:"14px",cursor:"pointer"},disabled:b.isRunning||P.isAnimating,children:[k.jsx("option",{value:"henon",children:"Hénon Map"}),k.jsx("option",{value:"duffing",children:"Duffing Map"})]}),k.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:p==="henon"?"x' = 1 - ax² + y, y' = bx":"x' = y, y' = -bx + ay - y³"})]}),k.jsxs("div",{style:Nt.section,children:[k.jsx("h3",{style:Nt.sectionTitle,children:"System Parameters"}),k.jsxs("label",{style:Nt.label,children:[k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"a ="}),k.jsx("input",{type:"number",step:"0.01",value:v.a,onChange:z=>T({...v,a:parseFloat(z.target.value)||.1}),style:Nt.numberInput,disabled:b.isRunning})]}),k.jsx("input",{type:"range",min:"0.1",max:p==="duffing"?3:2,step:"0.01",value:v.a,onChange:z=>T({...v,a:parseFloat(z.target.value)}),style:Nt.slider,disabled:b.isRunning})]}),k.jsxs("label",{style:Nt.label,children:[k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"b ="}),k.jsx("input",{type:"number",step:"0.01",value:v.b,onChange:z=>T({...v,b:parseFloat(z.target.value)||.1}),style:Nt.numberInput,disabled:b.isRunning})]}),k.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.01",value:v.b,onChange:z=>T({...v,b:parseFloat(z.target.value)}),style:Nt.slider,disabled:b.isRunning})]}),h==="periodic"&&k.jsxs(k.Fragment,{children:[k.jsxs("label",{style:Nt.label,children:[k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"Max Period ="}),k.jsx("input",{type:"number",step:"1",min:"1",max:"20",value:v.maxPeriod,onChange:z=>T({...v,maxPeriod:parseInt(z.target.value)||2}),style:Nt.numberInput,disabled:b.isRunning})]}),k.jsx("input",{type:"range",min:"2",max:"10",step:"1",value:v.maxPeriod,onChange:z=>T({...v,maxPeriod:parseInt(z.target.value)}),style:Nt.slider,disabled:b.isRunning})]}),k.jsxs("label",{style:Nt.label,children:[k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"Max Iterations ="}),k.jsx("input",{type:"number",step:"100",min:"100",max:"10000",value:v.maxIterations,onChange:z=>T({...v,maxIterations:parseInt(z.target.value)||100}),style:Nt.numberInput,disabled:b.isRunning})]}),k.jsx("input",{type:"range",min:"100",max:"5000",step:"100",value:v.maxIterations,onChange:z=>T({...v,maxIterations:parseInt(z.target.value)}),style:Nt.slider,disabled:b.isRunning})]})]}),h==="manifold"&&k.jsxs("label",{style:Nt.label,children:[k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"epsilon ="}),k.jsx("input",{type:"number",step:"0.001",value:v.epsilon,onChange:z=>T({...v,epsilon:parseFloat(z.target.value)||.01}),style:Nt.numberInput})]}),k.jsx("input",{type:"range",min:"0.001",max:"0.2",step:"0.001",value:v.epsilon,onChange:z=>T({...v,epsilon:parseFloat(z.target.value)}),style:Nt.slider})]})]}),k.jsx("button",{onClick:St,style:{...Nt.button,width:"100%",marginTop:"12px",backgroundColor:"#2d4a2d",borderColor:"#3a6a3a",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Save as PNG"}),h==="manifold"&&k.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[k.jsx("h4",{style:{fontSize:"12px",fontWeight:"600",marginBottom:"12px",color:"#888"},children:"Parameter Animation"}),k.jsx("label",{style:Nt.label,children:k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"Animate:"}),k.jsxs("select",{value:P.parameter,onChange:z=>Q(at=>({...at,parameter:z.target.value})),style:{...Nt.numberInput,width:"100px"},disabled:P.isAnimating,children:[k.jsx("option",{value:"a",children:"a"}),k.jsx("option",{value:"b",children:"b"}),k.jsx("option",{value:"epsilon",children:"epsilon"})]})]})}),k.jsx("label",{style:Nt.label,children:k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"Direction:"}),k.jsxs("div",{style:{display:"flex",gap:"4px"},children:[k.jsx("button",{onClick:()=>Q(z=>({...z,direction:-1})),style:{...Nt.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:P.direction===-1?"#3d5afe":"#2d2d2d"},disabled:P.isAnimating,children:"−"}),k.jsx("button",{onClick:()=>Q(z=>({...z,direction:1})),style:{...Nt.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:P.direction===1?"#3d5afe":"#2d2d2d"},disabled:P.isAnimating,children:"+"})]})]})}),k.jsxs("label",{style:Nt.label,children:[k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"Range:"}),k.jsx("input",{type:"number",step:"0.05",min:"0.01",max:"1.0",value:P.rangeValue,onChange:z=>Q(at=>({...at,rangeValue:parseFloat(z.target.value)||.1})),style:Nt.numberInput,disabled:P.isAnimating})]}),k.jsx("input",{type:"range",min:"0.01",max:"0.5",step:"0.01",value:P.rangeValue,onChange:z=>Q(at=>({...at,rangeValue:parseFloat(z.target.value)})),style:Nt.slider,disabled:P.isAnimating})]}),k.jsxs("label",{style:Nt.label,children:[k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"Steps:"}),k.jsx("input",{type:"number",step:"1",min:"5",max:"30",value:P.steps,onChange:z=>Q(at=>({...at,steps:parseInt(z.target.value)||10})),style:Nt.numberInput,disabled:P.isAnimating})]}),k.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:P.steps,onChange:z=>Q(at=>({...at,steps:parseInt(z.target.value)})),style:Nt.slider,disabled:P.isAnimating})]}),k.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[k.jsxs("button",{onClick:P.isAnimating?wt:bt,disabled:g.isComputing&&!P.isAnimating||D.isEncoding,style:{...Nt.button,flex:1,marginBottom:0,backgroundColor:P.isAnimating?"#8b0000":"#1a4a1a",borderColor:P.isAnimating?"#b22222":"#2a6a2a"},children:[P.isAnimating?"⏹ Stop":"▶ Play",D.recordingEnabled&&!P.isAnimating&&" & Rec"]}),k.jsx("button",{onClick:Qt,disabled:P.isAnimating||D.isEncoding,style:{...Nt.button,width:"50px",marginBottom:0,backgroundColor:D.recordingEnabled?"#b22222":"#2d2d2d",borderColor:D.recordingEnabled?"#ff4444":"#444"},title:D.recordingEnabled?"Recording enabled - will record next animation":"Enable recording",children:D.recordingEnabled?"🔴":"⏺"})]}),D.recordingEnabled&&!P.isAnimating&&!D.isEncoding&&k.jsx("div",{style:{marginTop:"8px",padding:"6px",background:"#1a0a0a",borderRadius:"4px",border:"1px solid #b22222"},children:k.jsx("div",{style:{fontSize:"11px",color:"#ff6666"},children:"🔴 Recording armed - Press Play to start"})}),D.isEncoding&&k.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"#0a0a1a",borderRadius:"4px",border:"1px solid #3d5afe"},children:[k.jsxs("div",{style:{fontSize:"11px",color:"#7986cb",marginBottom:"4px"},children:["🔄 Encoding video... (",D.frameCount," frames)"]}),k.jsx("div",{style:{height:"4px",backgroundColor:"#1a1a2e",borderRadius:"2px",overflow:"hidden"},children:k.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#3d5afe",animation:"pulse 1s infinite"}})})]}),D.error&&k.jsxs("div",{style:{marginTop:"8px",padding:"6px",background:"#1a0a0a",borderRadius:"4px",fontSize:"10px",color:"#ff6666"},children:["Error: ",D.error]}),P.isAnimating&&k.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[k.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:[P.parameter,": ",P.baseValue?.toFixed(3)," → ",P.targetValue?.toFixed(3)]}),k.jsxs("div",{style:{fontSize:"11px",color:"#888"},children:["Current: ",k.jsx("span",{style:{color:"#4CAF50",fontWeight:"bold"},children:v[P.parameter].toFixed(4)}),D.recordingEnabled&&k.jsxs("span",{style:{color:"#ff6666",marginLeft:"8px"},children:["📹 ",D.frameCount," frames"]})]}),k.jsxs("div",{style:{fontSize:"10px",color:"#555",marginTop:"4px"},children:["Step ",P.currentStep," / ",P.steps,g.isComputing&&k.jsx("span",{style:{color:"#ff9800",marginLeft:"8px"},children:"Computing..."})]}),k.jsx("div",{style:{marginTop:"6px",height:"4px",backgroundColor:"#333",borderRadius:"2px",overflow:"hidden"},children:k.jsx("div",{style:{width:`${P.currentStep/P.steps*100}%`,height:"100%",backgroundColor:D.recordingEnabled?"#ff6666":"#4CAF50",transition:"width 0.3s ease"}})})]})]}),k.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[k.jsxs("label",{style:Nt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:w.showUlamOverlay,onChange:z=>G({...w,showUlamOverlay:z.target.checked})}),"Show Ulam Grid"]}),w.showUlamOverlay&&k.jsxs(k.Fragment,{children:[k.jsxs("label",{style:Nt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:w.showTransitions,onChange:z=>G({...w,showTransitions:z.target.checked})}),"Show Transitions"]}),h==="periodic"&&k.jsxs("label",{style:Nt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:w.showCurrentBox,onChange:z=>G({...w,showCurrentBox:z.target.checked})}),"Track Current Position"]}),k.jsxs("label",{style:Nt.label,children:[k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"Epsilon (ε) ="}),k.jsx("input",{type:"number",step:"0.01",min:"0.001",max:"0.5",value:w.epsilon,onChange:z=>G({...w,epsilon:parseFloat(z.target.value)||.05}),style:Nt.numberInput,disabled:w.isComputing})]}),k.jsx("input",{type:"range",min:"0.01",max:"0.3",step:"0.01",value:w.epsilon,onChange:z=>G({...w,epsilon:parseFloat(z.target.value)}),style:Nt.slider,disabled:w.isComputing}),k.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Ball radius for boundary detection"})]}),k.jsxs("label",{style:Nt.label,children:[k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"Grid ="}),k.jsx("input",{type:"number",step:"1",min:"10",max:"80",value:w.subdivisions,onChange:z=>G({...w,subdivisions:parseInt(z.target.value)||10}),style:Nt.numberInput,disabled:w.isComputing})]}),k.jsx("input",{type:"range",min:"10",max:"60",step:"5",value:w.subdivisions,onChange:z=>G({...w,subdivisions:parseInt(z.target.value)}),style:Nt.slider,disabled:w.isComputing})]}),k.jsxs("label",{style:Nt.label,children:[k.jsxs("div",{style:Nt.paramRow,children:[k.jsx("span",{children:"Samples ="}),k.jsx("input",{type:"number",step:"16",min:"16",max:"256",value:w.pointsPerBox,onChange:z=>G({...w,pointsPerBox:parseInt(z.target.value)||64}),style:Nt.numberInput,disabled:w.isComputing})]}),k.jsx("input",{type:"range",min:"16",max:"256",step:"16",value:w.pointsPerBox,onChange:z=>G({...w,pointsPerBox:parseInt(z.target.value)}),style:Nt.slider,disabled:w.isComputing}),k.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Points per box (√n × √n grid)"})]}),k.jsx("div",{style:{marginTop:"8px",marginBottom:"8px",fontSize:"12px",color:w.isComputing?"#ff9800":"#4CAF50",display:"flex",alignItems:"center",gap:"6px"},children:w.isComputing?k.jsxs(k.Fragment,{children:[k.jsx("span",{className:"spinner",style:{width:"10px",height:"10px",border:"2px solid #ff9800",borderTop:"2px solid transparent",borderRadius:"50%",display:"inline-block",animation:"spin 1s linear infinite"}}),"Computing Ulam Grid..."]}):k.jsx("span",{children:"✓ Grid up to date"})}),k.jsx("style",{children:`
                                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                            `}),w.gridBoxes.length>0&&k.jsxs("div",{style:{marginTop:"12px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[k.jsx("div",{style:{fontSize:"11px",fontWeight:"600",color:"#888",marginBottom:"6px"},children:"Invariant Measure"}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[k.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Low"}),k.jsx("div",{style:{flex:1,height:"12px",borderRadius:"2px",background:"linear-gradient(to right, hsl(238, 100%, 50%), hsl(180, 100%, 50%), hsl(100, 100%, 50%), hsl(60, 100%, 50%))"}}),k.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"High"})]}),k.jsx("div",{style:{fontSize:"9px",color:"#555",marginTop:"4px"},children:"Probability of trajectory visiting each region"})]}),w.currentBoxIndex>=0&&k.jsxs("div",{style:{fontSize:"11px",color:"#888",marginTop:"4px"},children:["Current box: ",w.currentBoxIndex]})]})]}),h==="periodic"&&k.jsxs(k.Fragment,{children:[k.jsxs("div",{style:Nt.section,children:[k.jsx("h3",{style:Nt.sectionTitle,children:"Controls"}),k.jsx("button",{onClick:V,disabled:!b.isReady||b.isRunning,style:Nt.button,children:"Step Forward"}),k.jsx("button",{onClick:Ne,disabled:!b.isReady||b.isRunning,style:{...Nt.button,...Nt.runButton},children:b.isRunning?"Running...":"Run to Max Iterations"}),k.jsx("button",{onClick:fe,disabled:b.isRunning,style:{...Nt.button,...Nt.resetButton},children:"Reset"})]}),k.jsxs("div",{style:Nt.section,children:[k.jsx("h3",{style:Nt.sectionTitle,children:"Periodic Orbits"}),[1,2,3,4,5].map(z=>k.jsxs("label",{style:Nt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:O[`period${z}`],onChange:at=>L({...O,[`period${z}`]:at.target.checked})}),k.jsx("span",{style:{...Nt.colorBox,backgroundColor:Li[`period${z}`].stable}}),"Period-",z," (",b.orbits.filter(at=>at.period===z).length,")"]},z)),k.jsxs("label",{style:Nt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:b.showOrbits,onChange:z=>M({...b,showOrbits:z.target.checked})}),"Show orbit markers"]}),k.jsxs("label",{style:Nt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:b.showTrail,onChange:z=>M({...b,showTrail:z.target.checked})}),"Show trajectory trail"]}),k.jsxs("label",{style:Nt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:b.showOrbitLines,onChange:z=>M({...b,showOrbitLines:z.target.checked})}),"Show orbit lines"]})]})]}),h==="manifold"&&k.jsxs(k.Fragment,{children:[k.jsxs("div",{style:Nt.section,children:[k.jsx("h3",{style:Nt.sectionTitle,children:"Periodic Orbits"}),k.jsxs("label",{style:Nt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:g.showOrbits,onChange:z=>B({...g,showOrbits:z.target.checked})}),"Show orbit markers"]}),k.jsxs("label",{style:Nt.checkboxLabel,children:[k.jsx("input",{type:"checkbox",checked:g.showOrbitLines,onChange:z=>B({...g,showOrbitLines:z.target.checked})}),"Show orbit lines"]})]}),g.fixedPoints.length>0&&k.jsxs("div",{style:Nt.section,children:[k.jsxs("h3",{style:Nt.sectionTitle,children:["Fixed Points (",g.fixedPoints.length,")"]}),g.fixedPoints.map((z,at)=>k.jsxs("div",{style:Nt.fixedPointItem,children:[k.jsx("span",{style:{fontWeight:"bold",color:z.stability==="Attractor"?"#00ff00":z.stability==="Repeller"?"#ff4444":"#ffaa00"},children:z.stability}),k.jsxs("span",{children:[" (",z.x.toFixed(3),", ",z.y.toFixed(3),")"]})]},at))]})]}),k.jsxs("div",{style:Nt.info,children:[k.jsx("div",{style:Nt.infoHeader,children:p==="henon"?"Hénon Map: x' = 1 - ax² + y, y' = bx":"Duffing Map: x' = y, y' = -bx + ay - y³"}),h==="periodic"?k.jsxs(k.Fragment,{children:[k.jsxs("div",{children:["Status: ",b.isReady?b.isRunning?"Running...":"Ready":"Loading..."]}),k.jsxs("div",{children:["Iteration: ",b.iteration," / ",v.maxIterations]}),b.hasStarted&&k.jsxs("div",{children:["Position: (",b.currentPoint.x.toFixed(4),", ",b.currentPoint.y.toFixed(4),")"]}),k.jsxs("div",{children:["Orbits found: ",b.orbits.length]})]}):k.jsxs(k.Fragment,{children:[k.jsxs("div",{children:["Status: ",g.isComputing?"Computing...":"Ready"]}),k.jsxs("div",{children:["Manifolds: ",g.manifolds.length]}),k.jsxs("div",{children:["Total Points: ",re.toLocaleString()]})]})]})]}),k.jsxs("div",{style:Nt.viewport,children:[k.jsx("canvas",{ref:o,style:Nt.canvas}),ct.visible&&ct.data&&k.jsxs("div",{style:{position:"absolute",left:ct.x+15,top:ct.y+15,backgroundColor:"rgba(20, 20, 20, 0.95)",border:"1px solid #444",borderRadius:"4px",padding:"12px",zIndex:1e3,pointerEvents:"none",minWidth:"180px",maxWidth:"280px",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",fontSize:"12px",fontFamily:"monospace"},children:[k.jsxs("div",{style:{fontWeight:"bold",color:"#fff",marginBottom:"8px",borderBottom:"1px solid #444",paddingBottom:"4px"},children:[ct.data.type,ct.data.isCurrentBox&&k.jsx("span",{style:{color:"#ff00ff",marginLeft:"8px"},children:"● Current"})]}),ct.data.type==="Ulam Box"?k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"6px 12px"},children:[k.jsx("span",{style:{color:"#888"},children:"Box #:"}),k.jsx("span",{style:{color:"#00ccff"},children:ct.data.boxIndex}),k.jsx("span",{style:{color:"#888"},children:"Center:"}),k.jsxs("span",{style:{color:"#ddd"},children:["(",ct.data.pos.x.toFixed(2),", ",ct.data.pos.y.toFixed(2),")"]}),k.jsx("span",{style:{color:"#888"},children:"Measure:"}),k.jsxs("span",{style:{color:"#4CAF50"},children:[(ct.data.measure*100).toFixed(2),"%",k.jsxs("span",{style:{color:"#666",marginLeft:"4px"},children:["(",ct.data.measurePercent.toFixed(0),"% of max)"]})]}),k.jsx("span",{style:{color:"#888"},children:"Transitions:"}),k.jsxs("span",{style:{color:"#ddd"},children:[ct.data.numTransitions," boxes"]}),ct.data.topTransitions&&ct.data.topTransitions.length>0&&k.jsxs(k.Fragment,{children:[k.jsx("span",{style:{color:"#888"},children:"Top targets:"}),k.jsx("div",{style:{fontSize:"10px"},children:ct.data.topTransitions.map((z,at)=>k.jsxs("div",{style:{color:"#ff9800"},children:["→ Box ",z.index,": ",(z.probability*100).toFixed(1),"%"]},at))})]})]}):k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"8px 16px"},children:[k.jsx("span",{style:{color:"#888"},children:"Position:"}),k.jsxs("span",{style:{color:"#00ccff"},children:["(",ct.data.pos.x.toFixed(4),", ",ct.data.pos.y.toFixed(4),")"]}),k.jsx("span",{style:{color:"#888"},children:"Stability:"}),k.jsx("span",{style:{color:ct.data.stability?.toLowerCase()==="attractor"||ct.data.stability?.toLowerCase()==="stable"?"#27ae60":(ct.data.stability?.toLowerCase()==="repeller"||ct.data.stability?.toLowerCase()==="unstable","#e74c3c")},children:ct.data.stability||"Unknown"}),k.jsx("span",{style:{color:"#888"},children:"Period:"}),k.jsx("span",{style:{color:"#ddd"},children:ct.data.period}),ct.data.jacobian&&k.jsxs(k.Fragment,{children:[k.jsx("span",{style:{color:"#888"},children:"Jacobian:"}),k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px",background:"#333",padding:"4px",borderRadius:"2px"},children:[k.jsx("span",{children:ct.data.jacobian.j11?.toFixed(3)}),k.jsx("span",{children:ct.data.jacobian.j12?.toFixed(3)}),k.jsx("span",{children:ct.data.jacobian.j21?.toFixed(3)}),k.jsx("span",{children:ct.data.jacobian.j22?.toFixed(3)})]}),k.jsx("span",{style:{color:"#888"},children:"Det/Trace:"}),k.jsxs("span",{style:{color:"#ddd"},children:["D=",ct.data.jacobian.det?.toFixed(3),", Tr=",ct.data.jacobian.trace?.toFixed(3)]})]})]})]})]})]})},Nt={container:{display:"flex",height:"100vh",width:"100vw",backgroundColor:"#0a0a0a",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0",overflow:"hidden"},sidebar:{width:"320px",minWidth:"320px",padding:"20px",backgroundColor:"#1a1a1a",borderRight:"1px solid #333",overflowY:"auto"},section:{marginBottom:"24px"},sectionTitle:{fontSize:"14px",fontWeight:"600",marginBottom:"12px",color:"#fff",textTransform:"uppercase",letterSpacing:"0.5px"},toggleContainer:{display:"flex",gap:"4px"},toggleButton:{flex:1,padding:"10px",backgroundColor:"#2d2d2d",color:"#888",border:"1px solid #444",borderRadius:"4px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},toggleActive:{backgroundColor:"#3d5afe",color:"#fff",borderColor:"#3d5afe"},label:{display:"flex",flexDirection:"column",marginBottom:"12px",fontSize:"13px",color:"#b0b0b0"},paramRow:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"},numberInput:{width:"80px",padding:"4px 8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",fontSize:"13px",textAlign:"right"},slider:{marginTop:"6px",width:"100%"},checkboxLabel:{display:"flex",alignItems:"center",marginBottom:"10px",fontSize:"13px",cursor:"pointer",gap:"8px"},colorBox:{width:"14px",height:"14px",borderRadius:"2px",display:"inline-block"},button:{width:"100%",padding:"10px",marginBottom:"8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s"},runButton:{backgroundColor:"#1a4a1a",borderColor:"#2a6a2a"},resetButton:{backgroundColor:"#1a1a1a",borderColor:"#555"},fixedPointItem:{marginBottom:"6px",fontSize:"12px",padding:"6px",background:"#0f0f0f",borderRadius:"4px"},info:{marginTop:"16px",padding:"12px",backgroundColor:"#0f0f0f",borderRadius:"4px",fontSize:"11px",lineHeight:"1.6",color:"#888"},infoHeader:{fontSize:"12px",fontWeight:"600",color:"#4CAF50",marginBottom:"8px"},viewport:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},canvas:{display:"block"}};xy.createRoot(document.getElementById("root")).render(k.jsx($t.StrictMode,{children:k.jsx(B1,{})}));
