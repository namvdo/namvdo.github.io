(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Jf={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function ly(){if(p_)return Do;p_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var m_;function cy(){return m_||(m_=1,Jf.exports=ly()),Jf.exports}var H=cy(),$f={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function uy(){if(g_)return fe;g_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,D={};function M(N,it,Tt){this.props=N,this.context=it,this.refs=D,this.updater=Tt||b}M.prototype.isReactComponent={},M.prototype.setState=function(N,it){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,it,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=M.prototype;function A(N,it,Tt){this.props=N,this.context=it,this.refs=D,this.updater=Tt||b}var B=A.prototype=new g;B.constructor=A,R(B,M.prototype),B.isPureReactComponent=!0;var L=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},w=Object.prototype.hasOwnProperty;function V(N,it,Tt,Rt,It,kt){return Tt=kt.ref,{$$typeof:o,type:N,key:it,ref:Tt!==void 0?Tt:null,props:kt}}function tt(N,it){return V(N.type,it,void 0,void 0,void 0,N.props)}function O(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function T(N){var it={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Tt){return it[Tt]})}var q=/\/+/g;function j(N,it){return typeof N=="object"&&N!==null&&N.key!=null?T(""+N.key):it.toString(36)}function ht(){}function lt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ht,ht):(N.status="pending",N.then(function(it){N.status==="pending"&&(N.status="fulfilled",N.value=it)},function(it){N.status==="pending"&&(N.status="rejected",N.reason=it)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function mt(N,it,Tt,Rt,It){var kt=typeof N;(kt==="undefined"||kt==="boolean")&&(N=null);var st=!1;if(N===null)st=!0;else switch(kt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(N.$$typeof){case o:case t:st=!0;break;case _:return st=N._init,mt(st(N._payload),it,Tt,Rt,It)}}if(st)return It=It(N),st=Rt===""?"."+j(N,0):Rt,L(It)?(Tt="",st!=null&&(Tt=st.replace(q,"$&/")+"/"),mt(It,it,Tt,"",function(Qt){return Qt})):It!=null&&(O(It)&&(It=tt(It,Tt+(It.key==null||N&&N.key===It.key?"":(""+It.key).replace(q,"$&/")+"/")+st)),it.push(It)),1;st=0;var St=Rt===""?".":Rt+":";if(L(N))for(var Lt=0;Lt<N.length;Lt++)Rt=N[Lt],kt=St+j(Rt,Lt),st+=mt(Rt,it,Tt,kt,It);else if(Lt=S(N),typeof Lt=="function")for(N=Lt.call(N),Lt=0;!(Rt=N.next()).done;)Rt=Rt.value,kt=St+j(Rt,Lt++),st+=mt(Rt,it,Tt,kt,It);else if(kt==="object"){if(typeof N.then=="function")return mt(lt(N),it,Tt,Rt,It);throw it=String(N),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return st}function I(N,it,Tt){if(N==null)return N;var Rt=[],It=0;return mt(N,Rt,"","",function(kt){return it.call(Tt,kt,It++)}),Rt}function at(N){if(N._status===-1){var it=N._result;it=it(),it.then(function(Tt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Tt)},function(Tt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Tt)}),N._status===-1&&(N._status=0,N._result=it)}if(N._status===1)return N._result.default;throw N._result}var K=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function At(){}return fe.Children={map:I,forEach:function(N,it,Tt){I(N,function(){it.apply(this,arguments)},Tt)},count:function(N){var it=0;return I(N,function(){it++}),it},toArray:function(N){return I(N,function(it){return it})||[]},only:function(N){if(!O(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},fe.Component=M,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=A,fe.StrictMode=r,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,fe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},fe.cache=function(N){return function(){return N.apply(null,arguments)}},fe.cloneElement=function(N,it,Tt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Rt=R({},N.props),It=N.key,kt=void 0;if(it!=null)for(st in it.ref!==void 0&&(kt=void 0),it.key!==void 0&&(It=""+it.key),it)!w.call(it,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&it.ref===void 0||(Rt[st]=it[st]);var st=arguments.length-2;if(st===1)Rt.children=Tt;else if(1<st){for(var St=Array(st),Lt=0;Lt<st;Lt++)St[Lt]=arguments[Lt+2];Rt.children=St}return V(N.type,It,void 0,void 0,kt,Rt)},fe.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},fe.createElement=function(N,it,Tt){var Rt,It={},kt=null;if(it!=null)for(Rt in it.key!==void 0&&(kt=""+it.key),it)w.call(it,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(It[Rt]=it[Rt]);var st=arguments.length-2;if(st===1)It.children=Tt;else if(1<st){for(var St=Array(st),Lt=0;Lt<st;Lt++)St[Lt]=arguments[Lt+2];It.children=St}if(N&&N.defaultProps)for(Rt in st=N.defaultProps,st)It[Rt]===void 0&&(It[Rt]=st[Rt]);return V(N,kt,void 0,void 0,null,It)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(N){return{$$typeof:h,render:N}},fe.isValidElement=O,fe.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:at}},fe.memo=function(N,it){return{$$typeof:p,type:N,compare:it===void 0?null:it}},fe.startTransition=function(N){var it=F.T,Tt={};F.T=Tt;try{var Rt=N(),It=F.S;It!==null&&It(Tt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(At,K)}catch(kt){K(kt)}finally{F.T=it}},fe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},fe.use=function(N){return F.H.use(N)},fe.useActionState=function(N,it,Tt){return F.H.useActionState(N,it,Tt)},fe.useCallback=function(N,it){return F.H.useCallback(N,it)},fe.useContext=function(N){return F.H.useContext(N)},fe.useDebugValue=function(){},fe.useDeferredValue=function(N,it){return F.H.useDeferredValue(N,it)},fe.useEffect=function(N,it,Tt){var Rt=F.H;if(typeof Tt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Rt.useEffect(N,it)},fe.useId=function(){return F.H.useId()},fe.useImperativeHandle=function(N,it,Tt){return F.H.useImperativeHandle(N,it,Tt)},fe.useInsertionEffect=function(N,it){return F.H.useInsertionEffect(N,it)},fe.useLayoutEffect=function(N,it){return F.H.useLayoutEffect(N,it)},fe.useMemo=function(N,it){return F.H.useMemo(N,it)},fe.useOptimistic=function(N,it){return F.H.useOptimistic(N,it)},fe.useReducer=function(N,it,Tt){return F.H.useReducer(N,it,Tt)},fe.useRef=function(N){return F.H.useRef(N)},fe.useState=function(N){return F.H.useState(N)},fe.useSyncExternalStore=function(N,it,Tt){return F.H.useSyncExternalStore(N,it,Tt)},fe.useTransition=function(){return F.H.useTransition()},fe.version="19.1.1",fe}var __;function Ch(){return __||(__=1,$f.exports=uy()),$f.exports}var Yt=Ch(),td={exports:{}},Uo={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function fy(){return v_||(v_=1,(function(o){function t(I,at){var K=I.length;I.push(at);t:for(;0<K;){var At=K-1>>>1,N=I[At];if(0<l(N,at))I[At]=at,I[K]=N,K=At;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var at=I[0],K=I.pop();if(K!==at){I[0]=K;t:for(var At=0,N=I.length,it=N>>>1;At<it;){var Tt=2*(At+1)-1,Rt=I[Tt],It=Tt+1,kt=I[It];if(0>l(Rt,K))It<N&&0>l(kt,Rt)?(I[At]=kt,I[It]=K,At=It):(I[At]=Rt,I[Tt]=K,At=Tt);else if(It<N&&0>l(kt,K))I[At]=kt,I[It]=K,At=It;else break t}}return at}function l(I,at){var K=I.sortIndex-at.sortIndex;return K!==0?K:I.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,x=null,S=3,b=!1,R=!1,D=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var at=i(p);at!==null;){if(at.callback===null)r(p);else if(at.startTime<=I)r(p),at.sortIndex=at.expirationTime,t(m,at);else break;at=i(p)}}function F(I){if(D=!1,L(I),!R)if(i(m)!==null)R=!0,w||(w=!0,j());else{var at=i(p);at!==null&&mt(F,at.startTime-I)}}var w=!1,V=-1,tt=5,O=-1;function T(){return M?!0:!(o.unstable_now()-O<tt)}function q(){if(M=!1,w){var I=o.unstable_now();O=I;var at=!0;try{t:{R=!1,D&&(D=!1,A(V),V=-1),b=!0;var K=S;try{e:{for(L(I),x=i(m);x!==null&&!(x.expirationTime>I&&T());){var At=x.callback;if(typeof At=="function"){x.callback=null,S=x.priorityLevel;var N=At(x.expirationTime<=I);if(I=o.unstable_now(),typeof N=="function"){x.callback=N,L(I),at=!0;break e}x===i(m)&&r(m),L(I)}else r(m);x=i(m)}if(x!==null)at=!0;else{var it=i(p);it!==null&&mt(F,it.startTime-I),at=!1}}break t}finally{x=null,S=K,b=!1}at=void 0}}finally{at?j():w=!1}}}var j;if(typeof B=="function")j=function(){B(q)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,lt=ht.port2;ht.port1.onmessage=q,j=function(){lt.postMessage(null)}}else j=function(){g(q,0)};function mt(I,at){V=g(function(){I(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(I){switch(S){case 1:case 2:case 3:var at=3;break;default:at=S}var K=S;S=at;try{return I()}finally{S=K}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(I,at){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=S;S=I;try{return at()}finally{S=K}},o.unstable_scheduleCallback=function(I,at,K){var At=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?At+K:At):K=At,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=K+N,I={id:_++,callback:at,priorityLevel:I,startTime:K,expirationTime:N,sortIndex:-1},K>At?(I.sortIndex=K,t(p,I),i(m)===null&&I===i(p)&&(D?(A(V),V=-1):D=!0,mt(F,K-At))):(I.sortIndex=N,t(m,I),R||b||(R=!0,w||(w=!0,j()))),I},o.unstable_shouldYield=T,o.unstable_wrapCallback=function(I){var at=S;return function(){var K=S;S=at;try{return I.apply(this,arguments)}finally{S=K}}}})(nd)),nd}var x_;function dy(){return x_||(x_=1,ed.exports=fy()),ed.exports}var id={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function hy(){if(y_)return Dn;y_=1;var o=Ch();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Dn.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:b}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.1.1",Dn}var S_;function py(){if(S_)return id.exports;S_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),id.exports=hy(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function my(){if(M_)return Uo;M_=1;var o=dy(),t=Ch(),i=py();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),e;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var E=!1,C=c.child;C;){if(C===a){E=!0,a=c,s=f;break}if(C===s){E=!0,s=c,a=f;break}C=C.sibling}if(!E){for(C=f.child;C;){if(C===a){E=!0,a=f,s=c;break}if(C===s){E=!0,s=f,a=c;break}C=C.sibling}if(!E)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),B=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case M:return"Profiler";case D:return"StrictMode";case F:return"Suspense";case w:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case B:return(e.displayName||"Context")+".Provider";case A:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case tt:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var mt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},At=[],N=-1;function it(e){return{current:e}}function Tt(e){0>N||(e.current=At[N],At[N]=null,N--)}function Rt(e,n){N++,At[N]=e.current,e.current=n}var It=it(null),kt=it(null),st=it(null),St=it(null);function Lt(e,n){switch(Rt(st,n),Rt(kt,e),Rt(It,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Vg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Vg(n),e=kg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Tt(It),Rt(It,e)}function Qt(){Tt(It),Tt(kt),Tt(st)}function Zt(e){e.memoizedState!==null&&Rt(St,e);var n=It.current,a=kg(n,e.type);n!==a&&(Rt(kt,e),Rt(It,a))}function ue(e){kt.current===e&&(Tt(It),Tt(kt)),St.current===e&&(Tt(St),To._currentValue=K)}var Je=Object.prototype.hasOwnProperty,G=o.unstable_scheduleCallback,we=o.unstable_cancelCallback,ce=o.unstable_shouldYield,ee=o.unstable_requestPaint,Vt=o.unstable_now,Oe=o.unstable_getCurrentPriorityLevel,Wt=o.unstable_ImmediatePriority,oe=o.unstable_UserBlockingPriority,We=o.unstable_NormalPriority,ke=o.unstable_LowPriority,v=o.unstable_IdlePriority,y=o.log,P=o.unstable_setDisableYieldValue,W=null,k=null;function X(e){if(typeof y=="function"&&P(e),k&&typeof k.setStrictMode=="function")try{k.setStrictMode(W,e)}catch{}}var pt=Math.clz32?Math.clz32:_t,ut=Math.log,yt=Math.LN2;function _t(e){return e>>>=0,e===0?32:31-(ut(e)/yt|0)|0}var gt=256,Et=4194304;function Ut(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var C=s&134217727;return C!==0?(s=C&~f,s!==0?c=Ut(s):(E&=C,E!==0?c=Ut(E):a||(a=C&~e,a!==0&&(c=Ut(a))))):(C=s&~f,C!==0?c=Ut(C):E!==0?c=Ut(E):a||(a=s&~e,a!==0&&(c=Ut(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Nt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var e=gt;return gt<<=1,(gt&4194048)===0&&(gt=256),e}function wt(){var e=Et;return Et<<=1,(Et&62914560)===0&&(Et=4194304),e}function Ot(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ct(e,n,a,s,c,f){var E=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,z=e.expirationTimes,rt=e.hiddenUpdates;for(a=E&~a;0<a;){var vt=31-pt(a),bt=1<<vt;C[vt]=0,z[vt]=-1;var ot=rt[vt];if(ot!==null)for(rt[vt]=null,vt=0;vt<ot.length;vt++){var ct=ot[vt];ct!==null&&(ct.lane&=-536870913)}a&=~bt}s!==0&&Mt(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(E&~n))}function Mt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function jt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-pt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function le(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=at.p;return e!==0?e:(e=window.event,e===void 0?32:l_(e.type))}function mi(e,n){var a=at.p;try{return at.p=e,n()}finally{at.p=a}}var fn=Math.random().toString(36).slice(2),dn="__reactFiber$"+fn,$e="__reactProps$"+fn,Ri="__reactContainer$"+fn,br="__reactEvents$"+fn,tl="__reactListeners$"+fn,Tr="__reactHandles$"+fn,Bs="__reactResources$"+fn,Ci="__reactMarker$"+fn;function Ar(e){delete e[dn],delete e[$e],delete e[br],delete e[tl],delete e[Tr]}function zi(e){var n=e[dn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ri]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=jg(e);e!==null;){if(a=e[dn])return a;e=jg(e)}return n}e=a,a=e.parentNode}return null}function ca(e){if(e=e[dn]||e[Ri]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Wa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ua(e){var n=e[Bs];return n||(n=e[Bs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function on(e){e[Ci]=!0}var el=new Set,nl={};function U(e,n){Q(e,n),Q(e+"Capture",n)}function Q(e,n){for(nl[e]=n,e=0;e<n.length;e++)el.add(n[e])}var ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dt={},$={};function Dt(e){return Je.call($,e)?!0:Je.call(dt,e)?!1:ft.test(e)?$[e]=!0:(dt[e]=!0,!1)}function zt(e,n,a){if(Dt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ft(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var te,ae;function Kt(e){if(te===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||"",ae=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+ae}var he=!1;function Ae(e,n){if(!e||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(ct){var ot=ct}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(ct){ot=ct}e.call(bt.prototype)}}else{try{throw Error()}catch(ct){ot=ct}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(ct){if(ct&&ot&&typeof ct.stack=="string")return[ct.stack,ot.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),E=f[0],C=f[1];if(E&&C){var z=E.split(`
`),rt=C.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<rt.length&&!rt[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===rt.length)for(s=z.length-1,c=rt.length-1;1<=s&&0<=c&&z[s]!==rt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==rt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==rt[c]){var vt=`
`+z[s].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=s&&0<=c);break}}}finally{he=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Kt(a):""}function Ye(e){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return Kt("Activity");default:return""}}function Pe(e){try{var n="";do n+=Ye(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $t(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(e){var n=$t(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(E){s=""+E,f.call(this,E)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ye(e){e._valueTracker||(e._valueTracker=qe(e))}function Rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=$t(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function _n(e){return e.replace(Pn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(e,n,a,s,c,f,E,C){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),n!=null?E==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pe(n)):e.value!==""+pe(n)&&(e.value=""+pe(n)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,E,pe(n)):a!=null?Cn(e,E,pe(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+pe(C):e.removeAttribute("name")}function Bn(e,n,a,s,c,f,E,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+pe(a):"",n=n!=null?""+pe(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=C?e.checked:!!s,e.defaultChecked=!!s,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Cn(e,n,a){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+pe(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Mn(e,n,a){if(n!=null&&(n=""+pe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pe(a):""}function Rr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(mt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=pe(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Gn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var rv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||rv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function kh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Vh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Vh(e,f,n[f])}function Kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return ov.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cr=null,wr=null;function Xh(e){var n=ca(e);if(n&&(e=n.stateNode)){var a=e[$e]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ge(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[$e]||null;if(!c)throw Error(r(90));Ge(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Rn(s)}break t;case"textarea":Mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var $c=!1;function Wh(e,n,a){if($c)return e(n,a);$c=!0;try{var s=e(n);return s}finally{if($c=!1,(Cr!==null||wr!==null)&&(Vl(),Cr&&(n=Cr,e=wr,wr=Cr=null,Xh(n),e)))for(n=0;n<e.length;n++)Xh(e[n])}}function Is(e,n){var a=e.stateNode;if(a===null)return null;var s=a[$e]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(Fi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){tu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{tu=!1}var fa=null,eu=null,al=null;function qh(){if(al)return al;var e,n=eu,a=n.length,s,c="value"in fa?fa.value:fa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var E=a-e;for(s=1;s<=E&&n[a-s]===c[f-s];s++);return al=c.slice(e,1<s?1-s:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function jh(){return!1}function Vn(e){function n(a,s,c,f,E){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=E,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:jh,this.isPropagationStopped=jh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Vn(qa),Fs=_({},qa,{view:0,detail:0}),lv=Vn(Fs),nu,iu,Hs,ll=_({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hs&&(Hs&&e.type==="mousemove"?(nu=e.screenX-Hs.screenX,iu=e.screenY-Hs.screenY):iu=nu=0,Hs=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),Yh=Vn(ll),cv=_({},ll,{dataTransfer:0}),uv=Vn(cv),fv=_({},Fs,{relatedTarget:0}),au=Vn(fv),dv=_({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=Vn(dv),pv=_({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mv=Vn(pv),gv=_({},qa,{data:0}),Zh=Vn(gv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xv[e])?!!n[e]:!1}function ru(){return yv}var Sv=_({},Fs,{key:function(e){if(e.key){var n=_v[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mv=Vn(Sv),Ev=_({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=Vn(Ev),bv=_({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Tv=Vn(bv),Av=_({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=Vn(Av),Cv=_({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Vn(Cv),Dv=_({},qa,{newState:0,oldState:0}),Uv=Vn(Dv),Lv=[9,13,27,32],su=Fi&&"CompositionEvent"in window,Gs=null;Fi&&"documentMode"in document&&(Gs=document.documentMode);var Nv=Fi&&"TextEvent"in window&&!Gs,Qh=Fi&&(!su||Gs&&8<Gs&&11>=Gs),Jh=" ",$h=!1;function tp(e,n){switch(e){case"keyup":return Lv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function Ov(e,n){switch(e){case"compositionend":return ep(n);case"keypress":return n.which!==32?null:($h=!0,Jh);case"textInput":return e=n.data,e===Jh&&$h?null:e;default:return null}}function Pv(e,n){if(Dr)return e==="compositionend"||!su&&tp(e,n)?(e=qh(),al=eu=fa=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qh&&n.locale!=="ko"?null:n.data;default:return null}}var Bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bv[e.type]:n==="textarea"}function ip(e,n,a,s){Cr?wr?wr.push(s):wr=[s]:Cr=s,n=Yl(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Vs=null,ks=null;function Iv(e){Ig(e,0)}function cl(e){var n=Wa(e);if(Rn(n))return e}function ap(e,n){if(e==="change")return n}var rp=!1;if(Fi){var ou;if(Fi){var lu="oninput"in document;if(!lu){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),lu=typeof sp.oninput=="function"}ou=lu}else ou=!1;rp=ou&&(!document.documentMode||9<document.documentMode)}function op(){Vs&&(Vs.detachEvent("onpropertychange",lp),ks=Vs=null)}function lp(e){if(e.propertyName==="value"&&cl(ks)){var n=[];ip(n,ks,e,Jc(e)),Wh(Iv,n)}}function zv(e,n,a){e==="focusin"?(op(),Vs=n,ks=a,Vs.attachEvent("onpropertychange",lp)):e==="focusout"&&op()}function Fv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(ks)}function Hv(e,n){if(e==="click")return cl(n)}function Gv(e,n){if(e==="input"||e==="change")return cl(n)}function Vv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Vv;function Xs(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Je.call(n,c)||!Zn(e[c],n[c]))return!1}return!0}function cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function up(e,n){var a=cp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=cp(a)}}function fp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gi(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var kv=Fi&&"documentMode"in document&&11>=document.documentMode,Ur=null,uu=null,Ws=null,fu=!1;function hp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Ur==null||Ur!==gi(s)||(s=Ur,"selectionStart"in s&&cu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ws&&Xs(Ws,s)||(Ws=s,s=Yl(uu,"onSelect"),0<s.length&&(n=new ol("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ur)))}function ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Lr={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},du={},pp={};Fi&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ya(e){if(du[e])return du[e];if(!Lr[e])return e;var n=Lr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in pp)return du[e]=n[a];return e}var mp=Ya("animationend"),gp=Ya("animationiteration"),_p=Ya("animationstart"),Xv=Ya("transitionrun"),Wv=Ya("transitionstart"),qv=Ya("transitioncancel"),vp=Ya("transitionend"),xp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function _i(e,n){xp.set(e,n),U(n,[e])}var yp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=yp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pe(n)},yp.set(e,n),n)}return{value:e,source:n,stack:Pe(n)}}var si=[],Nr=0,pu=0;function ul(){for(var e=Nr,n=pu=Nr=0;n<e;){var a=si[n];si[n++]=null;var s=si[n];si[n++]=null;var c=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,s!==null&&c!==null){var E=s.pending;E===null?c.next=c:(c.next=E.next,E.next=c),s.pending=c}f!==0&&Sp(a,c,f)}}function fl(e,n,a,s){si[Nr++]=e,si[Nr++]=n,si[Nr++]=a,si[Nr++]=s,pu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function mu(e,n,a,s){return fl(e,n,a,s),dl(e)}function Or(e,n){return fl(e,null,null,n),dl(e)}function Sp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-pt(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function dl(e){if(50<_o)throw _o=0,Mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Pr={};function jv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,s){return new jv(e,n,a,s)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,s,c,f){var E=0;if(s=e,typeof e=="function")gu(e)&&(E=1);else if(typeof e=="string")E=Zx(e,a,It.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=Kn(31,a,n,c),e.elementType=O,e.lanes=f,e;case R:return Za(a.children,c,f,n);case D:E=8,c|=24;break;case M:return e=Kn(12,a,n,c|2),e.elementType=M,e.lanes=f,e;case F:return e=Kn(13,a,n,c),e.elementType=F,e.lanes=f,e;case w:return e=Kn(19,a,n,c),e.elementType=w,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case B:E=10;break t;case A:E=9;break t;case L:E=11;break t;case V:E=14;break t;case tt:E=16,s=null;break t}E=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Kn(E,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Za(e,n,a,s){return e=Kn(7,e,s,n),e.lanes=a,e}function _u(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function vu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Br=[],Ir=0,pl=null,ml=0,oi=[],li=0,Ka=null,Gi=1,Vi="";function Qa(e,n){Br[Ir++]=ml,Br[Ir++]=pl,pl=e,ml=n}function Ep(e,n,a){oi[li++]=Gi,oi[li++]=Vi,oi[li++]=Ka,Ka=e;var s=Gi;e=Vi;var c=32-pt(s)-1;s&=~(1<<c),a+=1;var f=32-pt(n)+c;if(30<f){var E=c-c%5;f=(s&(1<<E)-1).toString(32),s>>=E,c-=E,Gi=1<<32-pt(n)+c|a<<c|s,Vi=f+e}else Gi=1<<f|a<<c|s,Vi=e}function xu(e){e.return!==null&&(Qa(e,1),Ep(e,1,0))}function yu(e){for(;e===pl;)pl=Br[--Ir],Br[Ir]=null,ml=Br[--Ir],Br[Ir]=null;for(;e===Ka;)Ka=oi[--li],oi[li]=null,Vi=oi[--li],oi[li]=null,Gi=oi[--li],oi[li]=null}var In=null,en=null,De=!1,Ja=null,wi=!1,Su=Error(r(519));function $a(e){var n=Error(r(418,""));throw Ys(ri(n,e)),Su}function bp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[dn]=e,n[$e]=s,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)Me(xo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Bn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),ye(n);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Rr(n,s.value,s.defaultValue,s.children),ye(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Gg(n.textContent,a)?(s.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),s.onScroll!=null&&Me("scroll",n),s.onScrollEnd!=null&&Me("scrollend",n),s.onClick!=null&&(n.onclick=Zl),n=!0):n=!1,n||$a(e)}function Tp(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:In=In.return}}function qs(e){if(e!==In)return!1;if(!De)return Tp(e),De=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&en&&$a(e),Tp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){en=xi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}en=null}}else n===27?(n=en,Ra(e.type)?(e=Vf,Vf=null,en=e):en=n):en=In?xi(e.stateNode.nextSibling):null;return!0}function js(){en=In=null,De=!1}function Ap(){var e=Ja;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Ja=null),e}function Ys(e){Ja===null?Ja=[e]:Ja.push(e)}var Mu=it(null),tr=null,ki=null;function da(e,n,a){Rt(Mu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Mu.current,Tt(Mu)}function Eu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function bu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var E=c.child;f=f.firstContext;t:for(;f!==null;){var C=f;f=c;for(var z=0;z<n.length;z++)if(C.context===n[z]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Eu(f.return,a,e),s||(E=null);break t}f=C.next}}else if(c.tag===18){if(E=c.return,E===null)throw Error(r(341));E.lanes|=a,f=E.alternate,f!==null&&(f.lanes|=a),Eu(E,a,e),E=null}else E=c.child;if(E!==null)E.return=c;else for(E=c;E!==null;){if(E===e){E=null;break}if(c=E.sibling,c!==null){c.return=E.return,E=c;break}E=E.return}c=E}}function Zs(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var E=c.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var C=c.type;Zn(c.pendingProps.value,E.value)||(e!==null?e.push(C):e=[C])}}else if(c===St.current){if(E=c.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}c=c.return}e!==null&&bu(n,e,a,s),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function er(e){tr=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Rp(tr,e)}function _l(e,n){return tr===null&&er(e),Rp(e,n)}function Rp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var Yv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Zv=o.unstable_scheduleCallback,Kv=o.unstable_NormalPriority,hn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new Yv,data:new Map,refCount:0}}function Ks(e){e.refCount--,e.refCount===0&&Zv(Kv,function(){e.controller.abort()})}var Qs=null,Au=0,zr=0,Fr=null;function Qv(e,n){if(Qs===null){var a=Qs=[];Au=0,zr=wf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Au++,n.then(Cp,Cp),n}function Cp(){if(--Au===0&&Qs!==null){Fr!==null&&(Fr.status="fulfilled");var e=Qs;Qs=null,zr=0,Fr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var wp=I.S;I.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qv(e,n),wp!==null&&wp(e,n)};var nr=it(null);function Ru(){var e=nr.current;return e!==null?e:Xe.pooledCache}function vl(e,n){n===null?Rt(nr,nr.current):Rt(nr,n.pool)}function Dp(){var e=Ru();return e===null?null:{parent:hn._currentValue,pool:e}}var Js=Error(r(460)),Up=Error(r(474)),xl=Error(r(542)),Cu={then:function(){}};function Lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yl(){}function Np(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(yl,yl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e;default:if(typeof n.status=="string")n.then(yl,yl);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e}throw $s=n,Js}}var $s=null;function Op(){if($s===null)throw Error(r(459));var e=$s;return $s=null,e}function Pp(e){if(e===Js||e===xl)throw Error(r(483))}var ha=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=dl(e),Sp(e,null,a),n}return fl(e,s,n,a),dl(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,jt(e,a)}}function Uu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=E:f=f.next=E,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function eo(){if(Lu){var e=Fr;if(e!==null)throw e}}function no(e,n,a,s){Lu=!1;var c=e.updateQueue;ha=!1;var f=c.firstBaseUpdate,E=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var z=C,rt=z.next;z.next=null,E===null?f=rt:E.next=rt,E=z;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,C=vt.lastBaseUpdate,C!==E&&(C===null?vt.firstBaseUpdate=rt:C.next=rt,vt.lastBaseUpdate=z))}if(f!==null){var bt=c.baseState;E=0,vt=rt=z=null,C=f;do{var ot=C.lane&-536870913,ct=ot!==C.lane;if(ct?(be&ot)===ot:(s&ot)===ot){ot!==0&&ot===zr&&(Lu=!0),vt!==null&&(vt=vt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var se=e,ie=C;ot=n;var ze=a;switch(ie.tag){case 1:if(se=ie.payload,typeof se=="function"){bt=se.call(ze,bt,ot);break t}bt=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ie.payload,ot=typeof se=="function"?se.call(ze,bt,ot):se,ot==null)break t;bt=_({},bt,ot);break t;case 2:ha=!0}}ot=C.callback,ot!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[ot]:ct.push(ot))}else ct={lane:ot,tag:C.tag,payload:C.payload,callback:C.callback,next:null},vt===null?(rt=vt=ct,z=bt):vt=vt.next=ct,E|=ot;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;ct=C,C=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);vt===null&&(z=bt),c.baseState=z,c.firstBaseUpdate=rt,c.lastBaseUpdate=vt,f===null&&(c.shared.lanes=0),Ea|=E,e.lanes=E,e.memoizedState=bt}}function Bp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Ip(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Bp(a[e],n)}var Hr=it(null),Sl=it(0);function zp(e,n){e=Qi,Rt(Sl,e),Rt(Hr,n),Qi=e|n.baseLanes}function Nu(){Rt(Sl,Qi),Rt(Hr,Hr.current)}function Ou(){Qi=Sl.current,Tt(Hr),Tt(Sl)}var ga=0,_e=null,Be=null,ln=null,Ml=!1,Gr=!1,ir=!1,El=0,io=0,Vr=null,$v=0;function an(){throw Error(r(321))}function Pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,s,c,f){return ga=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Sm:Mm,ir=!1,f=a(s,c),ir=!1,Gr&&(f=Hp(n,a,s,c)),Fp(e),f}function Fp(e){I.H=wl;var n=Be!==null&&Be.next!==null;if(ga=0,ln=Be=_e=null,Ml=!1,io=0,Vr=null,n)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&gl(e)&&(vn=!0))}function Hp(e,n,a,s){_e=e;var c=0;do{if(Gr&&(Vr=null),io=0,Gr=!1,25<=c)throw Error(r(301));if(c+=1,ln=Be=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=sx,f=n(a,s)}while(Gr);return f}function tx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(_e.flags|=1024),n}function Iu(){var e=El!==0;return El=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fu(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}ga=0,ln=Be=_e=null,Gr=!1,io=El=0,Vr=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?_e.memoizedState=ln=e:ln=ln.next=e,ln}function cn(){if(Be===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=ln===null?_e.memoizedState:ln.next;if(n!==null)ln=n,Be=e;else{if(e===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},ln===null?_e.memoizedState=ln=e:ln=ln.next=e}return ln}function Hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,Vr===null&&(Vr=[]),e=Np(Vr,e,n),n=_e,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Sm:Mm),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===B)return wn(e)}throw Error(r(438,String(e)))}function Gu(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hu(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=T;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=cn();return Vu(n,Be,e)}function Vu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var E=c.next;c.next=f.next,f.next=E}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var C=E=null,z=null,rt=n,vt=!1;do{var bt=rt.lane&-536870913;if(bt!==rt.lane?(be&bt)===bt:(ga&bt)===bt){var ot=rt.revertLane;if(ot===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),bt===zr&&(vt=!0);else if((ga&ot)===ot){rt=rt.next,ot===zr&&(vt=!0);continue}else bt={lane:0,revertLane:rt.revertLane,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},z===null?(C=z=bt,E=f):z=z.next=bt,_e.lanes|=ot,Ea|=ot;bt=rt.action,ir&&a(f,bt),f=rt.hasEagerState?rt.eagerState:a(f,bt)}else ot={lane:bt,revertLane:rt.revertLane,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},z===null?(C=z=ot,E=f):z=z.next=ot,_e.lanes|=bt,Ea|=bt;rt=rt.next}while(rt!==null&&rt!==n);if(z===null?E=f:z.next=C,!Zn(f,e.memoizedState)&&(vn=!0,vt&&(a=Fr,a!==null)))throw a;e.memoizedState=f,e.baseState=E,e.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function ku(e){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var E=c=c.next;do f=e(f,E.action),E=E.next;while(E!==c);Zn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Gp(e,n,a){var s=_e,c=cn(),f=De;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var E=!Zn((Be||c).memoizedState,a);E&&(c.memoizedState=a,vn=!0),c=c.queue;var C=Xp.bind(null,s,c,e);if(ro(2048,8,C,[e]),c.getSnapshot!==n||E||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,kr(9,Al(),kp.bind(null,s,c,a,n),null),Xe===null)throw Error(r(349));f||(ga&124)!==0||Vp(s,n,a)}return a}function Vp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Hu(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function kp(e,n,a,s){n.value=a,n.getSnapshot=s,Wp(n)&&qp(e)}function Xp(e,n,a){return a(function(){Wp(n)&&qp(e)})}function Wp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function qp(e){var n=Or(e,2);n!==null&&ei(n,e,2)}function Xu(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),ir){X(!0);try{a()}finally{X(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function jp(e,n,a,s){return e.baseState=a,Vu(e,Be,typeof s=="function"?s:Wi)}function ex(e,n,a,s,c){if(Cl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){f.listeners.push(E)}};I.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Yp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=I.T,E={};I.T=E;try{var C=a(c,s),z=I.S;z!==null&&z(E,C),Zp(e,n,C)}catch(rt){Wu(e,n,rt)}finally{I.T=f}}else try{f=a(c,s),Zp(e,n,f)}catch(rt){Wu(e,n,rt)}}function Zp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Kp(e,n,s)},function(s){return Wu(e,n,s)}):Kp(e,n,a)}function Kp(e,n,a){n.status="fulfilled",n.value=a,Qp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Yp(e,a)))}function Wu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Qp(n),n=n.next;while(n!==s)}e.action=null}function Qp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Jp(e,n){return n}function $p(e,n){if(De){var a=Xe.formState;if(a!==null){t:{var s=_e;if(De){if(en){e:{for(var c=en,f=wi;c.nodeType!==8;){if(!f){c=null;break e}if(c=xi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){en=xi(c.nextSibling),s=c.data==="F!";break t}}$a(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:n},a.queue=s,a=vm.bind(null,_e,s),s.dispatch=a,s=Xu(!1),f=Ku.bind(null,_e,!1,s.queue),s=kn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=ex.bind(null,_e,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function tm(e){var n=cn();return em(n,Be,e)}function em(e,n,a){if(n=Vu(e,n,Jp)[0],e=Tl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ao(n)}catch(E){throw E===Js?xl:E}else s=n;n=cn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,kr(9,Al(),nx.bind(null,c,a),null)),[s,f,e]}function nx(e,n){e.action=n}function nm(e){var n=cn(),a=Be;if(a!==null)return em(n,a,e);cn(),n=n.memoizedState,a=cn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function kr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Hu(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Al(){return{destroy:void 0,resource:void 0}}function im(){return cn().memoizedState}function Rl(e,n,a,s){var c=kn();s=s===void 0?null:s,_e.flags|=e,c.memoizedState=kr(1|n,Al(),a,s)}function ro(e,n,a,s){var c=cn();s=s===void 0?null:s;var f=c.memoizedState.inst;Be!==null&&s!==null&&Pu(s,Be.memoizedState.deps)?c.memoizedState=kr(n,f,a,s):(_e.flags|=e,c.memoizedState=kr(1|n,f,a,s))}function am(e,n){Rl(8390656,8,e,n)}function rm(e,n){ro(2048,8,e,n)}function sm(e,n){return ro(4,2,e,n)}function om(e,n){return ro(4,4,e,n)}function lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cm(e,n,a){a=a!=null?a.concat([e]):null,ro(4,4,lm.bind(null,n,e),a)}function qu(){}function um(e,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Pu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function fm(e,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Pu(n,s[1]))return s[0];if(s=e(),ir){X(!0);try{e()}finally{X(!1)}}return a.memoizedState=[s,n],s}function ju(e,n,a){return a===void 0||(ga&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=pg(),_e.lanes|=e,Ea|=e,a)}function dm(e,n,a,s){return Zn(a,n)?a:Hr.current!==null?(e=ju(e,a,s),Zn(e,n)||(vn=!0),e):(ga&42)===0?(vn=!0,e.memoizedState=a):(e=pg(),_e.lanes|=e,Ea|=e,n)}function hm(e,n,a,s,c){var f=at.p;at.p=f!==0&&8>f?f:8;var E=I.T,C={};I.T=C,Ku(e,!1,n,a);try{var z=c(),rt=I.S;if(rt!==null&&rt(C,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var vt=Jv(z,s);so(e,n,vt,ti(e))}else so(e,n,s,ti(e))}catch(bt){so(e,n,{then:function(){},status:"rejected",reason:bt},ti())}finally{at.p=f,I.T=E}}function ix(){}function Yu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=pm(e).queue;hm(e,c,n,K,a===null?ix:function(){return mm(e),a(s)})}function pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function mm(e){var n=pm(e).next.queue;so(e,n,{},ti())}function Zu(){return wn(To)}function gm(){return cn().memoizedState}function _m(){return cn().memoizedState}function ax(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=pa(a);var s=ma(n,e,a);s!==null&&(ei(s,n,a),to(s,n,a)),n={cache:Tu()},e.payload=n;return}n=n.return}}function rx(e,n,a){var s=ti();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?xm(n,a):(a=mu(e,n,a,s),a!==null&&(ei(a,e,s),ym(a,n,s)))}function vm(e,n,a){var s=ti();so(e,n,a,s)}function so(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))xm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var E=n.lastRenderedState,C=f(E,a);if(c.hasEagerState=!0,c.eagerState=C,Zn(C,E))return fl(e,n,c,0),Xe===null&&ul(),!1}catch{}finally{}if(a=mu(e,n,c,s),a!==null)return ei(a,e,s),ym(a,n,s),!0}return!1}function Ku(e,n,a,s){if(s={lane:2,revertLane:wf(),action:s,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(r(479))}else n=mu(e,a,s,2),n!==null&&ei(n,e,2)}function Cl(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function xm(e,n){Gr=Ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ym(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,jt(e,a)}}var wl={readContext:wn,use:bl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Sm={readContext:wn,use:bl,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var s=e();if(ir){X(!0);try{e()}finally{X(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=kn();if(a!==void 0){var c=a(n);if(ir){X(!0);try{a(n)}finally{X(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=rx.bind(null,_e,e),[s.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,a=vm.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,n){var a=kn();return ju(a,e,n)},useTransition:function(){var e=Xu(!1);return e=hm.bind(null,_e,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=_e,c=kn();if(De){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(be&124)!==0||Vp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,am(Xp.bind(null,s,f,e),[e]),s.flags|=2048,kr(9,Al(),kp.bind(null,s,f,a,n),null),a},useId:function(){var e=kn(),n=Xe.identifierPrefix;if(De){var a=Vi,s=Gi;a=(s&~(1<<32-pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=$v++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:$p,useActionState:$p,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return kn().memoizedState=ax.bind(null,_e)}},Mm={readContext:wn,use:bl,useCallback:um,useContext:wn,useEffect:rm,useImperativeHandle:cm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:Tl,useRef:im,useState:function(){return Tl(Wi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=cn();return dm(a,Be.memoizedState,e,n)},useTransition:function(){var e=Tl(Wi)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:Zu,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=cn();return jp(a,Be,e,n)},useMemoCache:Gu,useCacheRefresh:_m},sx={readContext:wn,use:bl,useCallback:um,useContext:wn,useEffect:rm,useImperativeHandle:cm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:ku,useRef:im,useState:function(){return ku(Wi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=cn();return Be===null?ju(a,e,n):dm(a,Be.memoizedState,e,n)},useTransition:function(){var e=ku(Wi)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:Zu,useFormState:nm,useActionState:nm,useOptimistic:function(e,n){var a=cn();return Be!==null?jp(a,Be,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:_m},Xr=null,oo=0;function Dl(e){var n=oo;return oo+=1,Xr===null&&(Xr=[]),Np(Xr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Em(e){var n=e._init;return n(e._payload)}function bm(e){function n(J,Z){if(e){var et=J.deletions;et===null?(J.deletions=[Z],J.flags|=16):et.push(Z)}}function a(J,Z){if(!e)return null;for(;Z!==null;)n(J,Z),Z=Z.sibling;return null}function s(J){for(var Z=new Map;J!==null;)J.key!==null?Z.set(J.key,J):Z.set(J.index,J),J=J.sibling;return Z}function c(J,Z){return J=Hi(J,Z),J.index=0,J.sibling=null,J}function f(J,Z,et){return J.index=et,e?(et=J.alternate,et!==null?(et=et.index,et<Z?(J.flags|=67108866,Z):et):(J.flags|=67108866,Z)):(J.flags|=1048576,Z)}function E(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function C(J,Z,et,xt){return Z===null||Z.tag!==6?(Z=_u(et,J.mode,xt),Z.return=J,Z):(Z=c(Z,et),Z.return=J,Z)}function z(J,Z,et,xt){var qt=et.type;return qt===R?vt(J,Z,et.props.children,xt,et.key):Z!==null&&(Z.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===tt&&Em(qt)===Z.type)?(Z=c(Z,et.props),lo(Z,et),Z.return=J,Z):(Z=hl(et.type,et.key,et.props,null,J.mode,xt),lo(Z,et),Z.return=J,Z)}function rt(J,Z,et,xt){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==et.containerInfo||Z.stateNode.implementation!==et.implementation?(Z=vu(et,J.mode,xt),Z.return=J,Z):(Z=c(Z,et.children||[]),Z.return=J,Z)}function vt(J,Z,et,xt,qt){return Z===null||Z.tag!==7?(Z=Za(et,J.mode,xt,qt),Z.return=J,Z):(Z=c(Z,et),Z.return=J,Z)}function bt(J,Z,et){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=_u(""+Z,J.mode,et),Z.return=J,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return et=hl(Z.type,Z.key,Z.props,null,J.mode,et),lo(et,Z),et.return=J,et;case b:return Z=vu(Z,J.mode,et),Z.return=J,Z;case tt:var xt=Z._init;return Z=xt(Z._payload),bt(J,Z,et)}if(mt(Z)||j(Z))return Z=Za(Z,J.mode,et,null),Z.return=J,Z;if(typeof Z.then=="function")return bt(J,Dl(Z),et);if(Z.$$typeof===B)return bt(J,_l(J,Z),et);Ul(J,Z)}return null}function ot(J,Z,et,xt){var qt=Z!==null?Z.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return qt!==null?null:C(J,Z,""+et,xt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case S:return et.key===qt?z(J,Z,et,xt):null;case b:return et.key===qt?rt(J,Z,et,xt):null;case tt:return qt=et._init,et=qt(et._payload),ot(J,Z,et,xt)}if(mt(et)||j(et))return qt!==null?null:vt(J,Z,et,xt,null);if(typeof et.then=="function")return ot(J,Z,Dl(et),xt);if(et.$$typeof===B)return ot(J,Z,_l(J,et),xt);Ul(J,et)}return null}function ct(J,Z,et,xt,qt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return J=J.get(et)||null,C(Z,J,""+xt,qt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case S:return J=J.get(xt.key===null?et:xt.key)||null,z(Z,J,xt,qt);case b:return J=J.get(xt.key===null?et:xt.key)||null,rt(Z,J,xt,qt);case tt:var ve=xt._init;return xt=ve(xt._payload),ct(J,Z,et,xt,qt)}if(mt(xt)||j(xt))return J=J.get(et)||null,vt(Z,J,xt,qt,null);if(typeof xt.then=="function")return ct(J,Z,et,Dl(xt),qt);if(xt.$$typeof===B)return ct(J,Z,et,_l(Z,xt),qt);Ul(Z,xt)}return null}function se(J,Z,et,xt){for(var qt=null,ve=null,Jt=Z,re=Z=0,yn=null;Jt!==null&&re<et.length;re++){Jt.index>re?(yn=Jt,Jt=null):yn=Jt.sibling;var Re=ot(J,Jt,et[re],xt);if(Re===null){Jt===null&&(Jt=yn);break}e&&Jt&&Re.alternate===null&&n(J,Jt),Z=f(Re,Z,re),ve===null?qt=Re:ve.sibling=Re,ve=Re,Jt=yn}if(re===et.length)return a(J,Jt),De&&Qa(J,re),qt;if(Jt===null){for(;re<et.length;re++)Jt=bt(J,et[re],xt),Jt!==null&&(Z=f(Jt,Z,re),ve===null?qt=Jt:ve.sibling=Jt,ve=Jt);return De&&Qa(J,re),qt}for(Jt=s(Jt);re<et.length;re++)yn=ct(Jt,J,re,et[re],xt),yn!==null&&(e&&yn.alternate!==null&&Jt.delete(yn.key===null?re:yn.key),Z=f(yn,Z,re),ve===null?qt=yn:ve.sibling=yn,ve=yn);return e&&Jt.forEach(function(La){return n(J,La)}),De&&Qa(J,re),qt}function ie(J,Z,et,xt){if(et==null)throw Error(r(151));for(var qt=null,ve=null,Jt=Z,re=Z=0,yn=null,Re=et.next();Jt!==null&&!Re.done;re++,Re=et.next()){Jt.index>re?(yn=Jt,Jt=null):yn=Jt.sibling;var La=ot(J,Jt,Re.value,xt);if(La===null){Jt===null&&(Jt=yn);break}e&&Jt&&La.alternate===null&&n(J,Jt),Z=f(La,Z,re),ve===null?qt=La:ve.sibling=La,ve=La,Jt=yn}if(Re.done)return a(J,Jt),De&&Qa(J,re),qt;if(Jt===null){for(;!Re.done;re++,Re=et.next())Re=bt(J,Re.value,xt),Re!==null&&(Z=f(Re,Z,re),ve===null?qt=Re:ve.sibling=Re,ve=Re);return De&&Qa(J,re),qt}for(Jt=s(Jt);!Re.done;re++,Re=et.next())Re=ct(Jt,J,re,Re.value,xt),Re!==null&&(e&&Re.alternate!==null&&Jt.delete(Re.key===null?re:Re.key),Z=f(Re,Z,re),ve===null?qt=Re:ve.sibling=Re,ve=Re);return e&&Jt.forEach(function(oy){return n(J,oy)}),De&&Qa(J,re),qt}function ze(J,Z,et,xt){if(typeof et=="object"&&et!==null&&et.type===R&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case S:t:{for(var qt=et.key;Z!==null;){if(Z.key===qt){if(qt=et.type,qt===R){if(Z.tag===7){a(J,Z.sibling),xt=c(Z,et.props.children),xt.return=J,J=xt;break t}}else if(Z.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===tt&&Em(qt)===Z.type){a(J,Z.sibling),xt=c(Z,et.props),lo(xt,et),xt.return=J,J=xt;break t}a(J,Z);break}else n(J,Z);Z=Z.sibling}et.type===R?(xt=Za(et.props.children,J.mode,xt,et.key),xt.return=J,J=xt):(xt=hl(et.type,et.key,et.props,null,J.mode,xt),lo(xt,et),xt.return=J,J=xt)}return E(J);case b:t:{for(qt=et.key;Z!==null;){if(Z.key===qt)if(Z.tag===4&&Z.stateNode.containerInfo===et.containerInfo&&Z.stateNode.implementation===et.implementation){a(J,Z.sibling),xt=c(Z,et.children||[]),xt.return=J,J=xt;break t}else{a(J,Z);break}else n(J,Z);Z=Z.sibling}xt=vu(et,J.mode,xt),xt.return=J,J=xt}return E(J);case tt:return qt=et._init,et=qt(et._payload),ze(J,Z,et,xt)}if(mt(et))return se(J,Z,et,xt);if(j(et)){if(qt=j(et),typeof qt!="function")throw Error(r(150));return et=qt.call(et),ie(J,Z,et,xt)}if(typeof et.then=="function")return ze(J,Z,Dl(et),xt);if(et.$$typeof===B)return ze(J,Z,_l(J,et),xt);Ul(J,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,Z!==null&&Z.tag===6?(a(J,Z.sibling),xt=c(Z,et),xt.return=J,J=xt):(a(J,Z),xt=_u(et,J.mode,xt),xt.return=J,J=xt),E(J)):a(J,Z)}return function(J,Z,et,xt){try{oo=0;var qt=ze(J,Z,et,xt);return Xr=null,qt}catch(Jt){if(Jt===Js||Jt===xl)throw Jt;var ve=Kn(29,Jt,null,J.mode);return ve.lanes=xt,ve.return=J,ve}finally{}}}var Wr=bm(!0),Tm=bm(!1),ci=it(null),Di=null;function _a(e){var n=e.alternate;Rt(pn,pn.current&1),Rt(ci,e),Di===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(Di=e)}function Am(e){if(e.tag===22){if(Rt(pn,pn.current),Rt(ci,e),Di===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Di=e)}}else va()}function va(){Rt(pn,pn.current),Rt(ci,ci.current)}function qi(e){Tt(ci),Di===e&&(Di=null),Tt(pn)}var pn=it(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Qu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ti(),c=pa(s);c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,s),n!==null&&(ei(n,e,s),to(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ti(),c=pa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,s),n!==null&&(ei(n,e,s),to(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),s=pa(a);s.tag=2,n!=null&&(s.callback=n),n=ma(e,s,a),n!==null&&(ei(n,e,a),to(n,e,a))}};function Rm(e,n,a,s,c,f,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,E):n.prototype&&n.prototype.isPureReactComponent?!Xs(a,s)||!Xs(c,f):!0}function Cm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function ar(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function wm(e){Nl(e)}function Dm(e){console.error(e)}function Um(e){Nl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Lm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $u(e,n,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function Nm(e){return e=pa(e),e.tag=3,e}function Om(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Lm(n,a,s)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Lm(n,a,s),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var C=s.stack;this.componentDidCatch(s.value,{componentStack:C!==null?C:""})})}function ox(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Zs(n,a,c,!0),a=ci.current,a!==null){switch(a.tag){case 13:return Di===null?bf():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Af(e,s,c)),!1;case 22:return a.flags|=65536,s===Cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Af(e,s,c)),!1}throw Error(r(435,a.tag))}return Af(e,s,c),bf(),!1}if(De)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Su&&(e=Error(r(422),{cause:s}),Ys(ri(e,a)))):(s!==Su&&(n=Error(r(423),{cause:s}),Ys(ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ri(s,a),c=$u(e.stateNode,s,c),Uu(e,c),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),go===null?go=[f]:go.push(f),nn!==4&&(nn=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=$u(a.stateNode,s,e),Uu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Nm(c),Om(c,e,a,s),Uu(a,c),!1}a=a.return}while(a!==null);return!1}var Pm=Error(r(461)),vn=!1;function En(e,n,a,s){n.child=e===null?Tm(n,null,a,s):Wr(n,e.child,a,s)}function Bm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var E={};for(var C in s)C!=="ref"&&(E[C]=s[C])}else E=s;return er(n),s=Bu(e,n,a,E,f,c),C=Iu(),e!==null&&!vn?(zu(e,n,c),ji(e,n,c)):(De&&C&&xu(n),n.flags|=1,En(e,n,s,c),n.child)}function Im(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,zm(e,n,f,s,c)):(e=hl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,c)){var E=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xs,a(E,s)&&e.ref===n.ref)return ji(e,n,c)}return n.flags|=1,e=Hi(f,s),e.ref=n.ref,e.return=n,n.child=e}function zm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Xs(f,s)&&e.ref===n.ref)if(vn=!1,n.pendingProps=s=f,lf(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,ji(e,n,c)}return tf(e,n,a,s,c)}function Fm(e,n,a){var s=n.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Hm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Nu(),Am(n);else return n.lanes=n.childLanes=536870912,Hm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(vl(n,f.cachePool),zp(n,f),va(),n.memoizedState=null):(e!==null&&vl(n,null),Nu(),va());return En(e,n,c,a),n.child}function Hm(e,n,a,s){var c=Ru();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&vl(n,null),Nu(),Am(n),e!==null&&Zs(e,n,s,!0),null}function Pl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,s,c){return er(n),a=Bu(e,n,a,s,void 0,c),s=Iu(),e!==null&&!vn?(zu(e,n,c),ji(e,n,c)):(De&&s&&xu(n),n.flags|=1,En(e,n,a,c),n.child)}function Gm(e,n,a,s,c,f){return er(n),n.updateQueue=null,a=Hp(n,s,a,c),Fp(e),s=Iu(),e!==null&&!vn?(zu(e,n,f),ji(e,n,f)):(De&&s&&xu(n),n.flags|=1,En(e,n,a,f),n.child)}function Vm(e,n,a,s,c){if(er(n),n.stateNode===null){var f=Pr,E=a.contextType;typeof E=="object"&&E!==null&&(f=wn(E)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},wu(n),E=a.contextType,f.context=typeof E=="object"&&E!==null?wn(E):Pr,f.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(Qu(n,a,E,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(E=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),E!==f.state&&Ju.enqueueReplaceState(f,f.state,null),no(n,s,f,c),eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,z=ar(a,C);f.props=z;var rt=f.context,vt=a.contextType;E=Pr,typeof vt=="object"&&vt!==null&&(E=wn(vt));var bt=a.getDerivedStateFromProps;vt=typeof bt=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,vt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||rt!==E)&&Cm(n,f,s,E),ha=!1;var ot=n.memoizedState;f.state=ot,no(n,s,f,c),eo(),rt=n.memoizedState,C||ot!==rt||ha?(typeof bt=="function"&&(Qu(n,a,bt,s),rt=n.memoizedState),(z=ha||Rm(n,a,z,s,ot,rt,E))?(vt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=E,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Du(e,n),E=n.memoizedProps,vt=ar(a,E),f.props=vt,bt=n.pendingProps,ot=f.context,rt=a.contextType,z=Pr,typeof rt=="object"&&rt!==null&&(z=wn(rt)),C=a.getDerivedStateFromProps,(rt=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E!==bt||ot!==z)&&Cm(n,f,s,z),ha=!1,ot=n.memoizedState,f.state=ot,no(n,s,f,c),eo();var ct=n.memoizedState;E!==bt||ot!==ct||ha||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof C=="function"&&(Qu(n,a,C,s),ct=n.memoizedState),(vt=ha||Rm(n,a,vt,s,ot,ct,z)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(rt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=z,s=vt):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Pl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Wr(n,e.child,null,c),n.child=Wr(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ji(e,n,c),e}function km(e,n,a,s){return js(),n.flags|=256,En(e,n,a,s),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Dp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ui),e}function Xm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,E;if((E=f)||(E=e!==null&&e.memoizedState===null?!1:(pn.current&2)!==0),E&&(c=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(c?_a(n):va(),De){var C=en,z;if(z=C){t:{for(z=C,C=wi;z.nodeType!==8;){if(!C){C=null;break t}if(z=xi(z.nextSibling),z===null){C=null;break t}}C=z}C!==null?(n.memoizedState={dehydrated:C,treeContext:Ka!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},z=Kn(18,null,null,0),z.stateNode=C,z.return=n,n.child=z,In=n,en=null,z=!0):z=!1}z||$a(n)}if(C=n.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return Gf(C)?n.lanes=32:n.lanes=536870912,null;qi(n)}return C=s.children,s=s.fallback,c?(va(),c=n.mode,C=Bl({mode:"hidden",children:C},c),s=Za(s,c,a,null),C.return=n,s.return=n,C.sibling=s,n.child=C,c=n.child,c.memoizedState=nf(a),c.childLanes=af(e,E,a),n.memoizedState=ef,s):(_a(n),rf(n,C))}if(z=e.memoizedState,z!==null&&(C=z.dehydrated,C!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(va(),n.child=e.child,n.flags|=128,n=null):(va(),c=s.fallback,C=n.mode,s=Bl({mode:"visible",children:s.children},C),c=Za(c,C,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Wr(n,e.child,null,a),s=n.child,s.memoizedState=nf(a),s.childLanes=af(e,E,a),n.memoizedState=ef,n=c);else if(_a(n),Gf(C)){if(E=C.nextSibling&&C.nextSibling.dataset,E)var rt=E.dgst;E=rt,s=Error(r(419)),s.stack="",s.digest=E,Ys({value:s,source:null,stack:null}),n=sf(e,n,a)}else if(vn||Zs(e,n,a,!1),E=(a&e.childLanes)!==0,vn||E){if(E=Xe,E!==null&&(s=a&-a,s=(s&42)!==0?1:le(s),s=(s&(E.suspendedLanes|a))!==0?0:s,s!==0&&s!==z.retryLane))throw z.retryLane=s,Or(e,s),ei(E,e,s),Pm;C.data==="$?"||bf(),n=sf(e,n,a)}else C.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,en=xi(C.nextSibling),In=n,De=!0,Ja=null,wi=!1,e!==null&&(oi[li++]=Gi,oi[li++]=Vi,oi[li++]=Ka,Gi=e.id,Vi=e.overflow,Ka=n),n=rf(n,s.children),n.flags|=4096);return n}return c?(va(),c=s.fallback,C=n.mode,z=e.child,rt=z.sibling,s=Hi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,rt!==null?c=Hi(rt,c):(c=Za(c,C,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,C=e.child.memoizedState,C===null?C=nf(a):(z=C.cachePool,z!==null?(rt=hn._currentValue,z=z.parent!==rt?{parent:rt,pool:rt}:z):z=Dp(),C={baseLanes:C.baseLanes|a,cachePool:z}),c.memoizedState=C,c.childLanes=af(e,E,a),n.memoizedState=ef,s):(_a(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(E=n.deletions,E===null?(n.deletions=[e],n.flags|=16):E.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sf(e,n,a){return Wr(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Eu(e.return,n,a)}function of(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function qm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(En(e,n,s.children,a),s=pn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wm(e,a,n);else if(e.tag===19)Wm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Rt(pn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ll(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}of(n,!0,a,null,f);break;case"together":of(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function lx(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),da(n,hn,e.memoizedState.cache),js();break;case 27:case 5:Zt(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Xm(e,n,a):(_a(n),e=ji(e,n,a),e!==null?e.sibling:null);_a(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Zs(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return qm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Rt(pn,pn.current),s)break;return null;case 22:case 23:return n.lanes=0,Fm(e,n,a);case 24:da(n,hn,e.memoizedState.cache)}return ji(e,n,a)}function jm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return vn=!1,lx(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,De&&(n.flags&1048576)!==0&&Ep(n,ml,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")gu(s)?(e=ar(s,e),n.tag=1,n=Vm(null,n,s,e,a)):(n.tag=0,n=tf(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===L){n.tag=11,n=Bm(null,n,s,e,a);break t}else if(c===V){n.tag=14,n=Im(null,n,s,e,a);break t}}throw n=lt(s)||s,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ar(s,n.pendingProps),Vm(e,n,s,c,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Du(e,n),no(n,s,null,a);var E=n.memoizedState;if(s=E.cache,da(n,hn,s),s!==f.cache&&bu(n,[hn],a,!0),eo(),s=E.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=km(e,n,s,a);break t}else if(s!==c){c=ri(Error(r(424)),n),Ys(c),n=km(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=xi(e.firstChild),In=n,De=!0,Ja=null,wi=!0,a=Tm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(js(),s===c){n=ji(e,n,a);break t}En(e,n,s,a)}n=n.child}return n;case 26:return Pl(e,n),e===null?(a=Qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:De||(a=n.type,e=n.pendingProps,s=Kl(st.current).createElement(a),s[dn]=n,s[$e]=e,Tn(s,a,e),on(s),n.stateNode=s):n.memoizedState=Qg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&De&&(s=n.stateNode=Yg(n.type,n.pendingProps,st.current),In=n,wi=!0,c=en,Ra(n.type)?(Vf=c,en=xi(s.firstChild)):en=c),En(e,n,n.pendingProps.children,a),Pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((c=s=en)&&(s=Bx(s,n.type,n.pendingProps,wi),s!==null?(n.stateNode=s,In=n,en=xi(s.firstChild),wi=!1,c=!0):c=!1),c||$a(n)),Zt(n),c=n.type,f=n.pendingProps,E=e!==null?e.memoizedProps:null,s=f.children,zf(c,f)?s=null:E!==null&&zf(c,E)&&(n.flags|=32),n.memoizedState!==null&&(c=Bu(e,n,tx,null,null,a),To._currentValue=c),Pl(e,n),En(e,n,s,a),n.child;case 6:return e===null&&De&&((e=a=en)&&(a=Ix(a,n.pendingProps,wi),a!==null?(n.stateNode=a,In=n,en=null,e=!0):e=!1),e||$a(n)),null;case 13:return Xm(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Wr(n,null,s,a):En(e,n,s,a),n.child;case 11:return Bm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,da(n,n.type,s.value),En(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,er(n),c=wn(c),s=s(c),n.flags|=1,En(e,n,s,a),n.child;case 14:return Im(e,n,n.type,n.pendingProps,a);case 15:return zm(e,n,n.type,n.pendingProps,a);case 19:return qm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Bl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Fm(e,n,a);case 24:return er(n),s=wn(hn),e===null?(c=Ru(),c===null&&(c=Xe,f=Tu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},wu(n),da(n,hn,c)):((e.lanes&a)!==0&&(Du(e,n),no(n,null,null,a),eo()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),da(n,hn,s)):(s=f.cache,da(n,hn,s),s!==c.cache&&bu(n,[hn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Yi(e){e.flags|=4}function Ym(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!n_(n)){if(n=ci.current,n!==null&&((be&4194048)===be?Di!==null:(be&62914560)!==be&&(be&536870912)===0||n!==Di))throw $s=Cu,Up;e.flags|=8192}}function Il(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?wt():536870912,e.lanes|=n,Zr|=n)}function co(e,n){if(!De)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function cx(e,n,a){var s=n.pendingProps;switch(yu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Xi(hn),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qs(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ap())),Qe(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(Qe(n),Ym(n,a)):(Qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),Qe(n),Ym(n,a)):(Qe(n),n.flags&=-16777217):(e.memoizedProps!==s&&Yi(n),Qe(n),n.flags&=-16777217),null;case 27:ue(n),a=st.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}e=It.current,qs(n)?bp(n):(e=Yg(c,s,a),n.stateNode=e,Yi(n))}return Qe(n),null;case 5:if(ue(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(e=It.current,qs(n))bp(n);else{switch(c=Kl(st.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[dn]=n,e[$e]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Tn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=st.current,qs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=In,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[dn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Gg(e.nodeValue,a)),e||$a(n)}else e=Kl(e).createTextNode(s),e[dn]=n,n.stateNode=e}return Qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=qs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[dn]=n}else js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),c=!1}else c=Ap(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Qe(n),null;case 4:return Qt(),e===null&&Nf(n.stateNode.containerInfo),Qe(n),null;case 10:return Xi(n.type),Qe(n),null;case 19:if(Tt(pn),c=n.memoizedState,c===null)return Qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)co(c,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ll(e),f!==null){for(n.flags|=128,co(c,!1),e=f.updateQueue,n.updateQueue=e,Il(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Mp(a,e),a=a.sibling;return Rt(pn,pn.current&1|2),n.child}e=e.sibling}c.tail!==null&&Vt()>Hl&&(n.flags|=128,s=!0,co(c,!1),n.lanes=4194304)}else{if(!s)if(e=Ll(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Il(n,e),co(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!De)return Qe(n),null}else 2*Vt()-c.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,s=!0,co(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Vt(),n.sibling=null,e=pn.current,Rt(pn,s?e&1|2:e&1),n):(Qe(n),null);case 22:case 23:return qi(n),Ou(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Tt(nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(hn),Qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ux(e,n){switch(yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(hn),Qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ue(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));js()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Tt(pn),null;case 4:return Qt(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),Ou(),e!==null&&Tt(nr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(hn),null;case 25:return null;default:return null}}function Zm(e,n){switch(yu(n),n.tag){case 3:Xi(hn),Qt();break;case 26:case 27:case 5:ue(n);break;case 4:Qt();break;case 13:qi(n);break;case 19:Tt(pn);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),Ou(),e!==null&&Tt(nr);break;case 24:Xi(hn)}}function uo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,E=a.inst;s=f(),E.destroy=s}a=a.next}while(a!==c)}}catch(C){Ve(n,n.return,C)}}function xa(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var E=s.inst,C=E.destroy;if(C!==void 0){E.destroy=void 0,c=n;var z=a,rt=C;try{rt()}catch(vt){Ve(c,z,vt)}}}s=s.next}while(s!==f)}}catch(vt){Ve(n,n.return,vt)}}function Km(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ip(n,a)}catch(s){Ve(e,e.return,s)}}}function Qm(e,n,a){a.props=ar(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ve(e,n,s)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Ve(e,n,c)}}function Ui(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ve(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ve(e,n,c)}else a.current=null}function Jm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ve(e,e.return,c)}}function cf(e,n,a){try{var s=e.stateNode;Ux(s,e.type,a,n),s[$e]=n}catch(c){Ve(e,e.return,c)}}function $m(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zl));else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function zl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}function tg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,s,a),n[dn]=e,n[$e]=a}catch(f){Ve(e,e.return,f)}}var Zi=!1,rn=!1,df=!1,eg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function fx(e,n){if(e=e.containerInfo,Bf=nc,e=dp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var E=0,C=-1,z=-1,rt=0,vt=0,bt=e,ot=null;e:for(;;){for(var ct;bt!==a||c!==0&&bt.nodeType!==3||(C=E+c),bt!==f||s!==0&&bt.nodeType!==3||(z=E+s),bt.nodeType===3&&(E+=bt.nodeValue.length),(ct=bt.firstChild)!==null;)ot=bt,bt=ct;for(;;){if(bt===e)break e;if(ot===a&&++rt===c&&(C=E),ot===f&&++vt===s&&(z=E),(ct=bt.nextSibling)!==null)break;bt=ot,ot=bt.parentNode}bt=ct}a=C===-1||z===-1?null:{start:C,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},nc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var se=ar(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(se,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ve(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function ng(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),s&4&&uo(5,a);break;case 1:if(ya(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(E){Ve(a,a.return,E)}else{var c=ar(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Ve(a,a.return,E)}}s&64&&Km(a),s&512&&fo(a,a.return);break;case 3:if(ya(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ip(e,n)}catch(E){Ve(a,a.return,E)}}break;case 27:n===null&&s&4&&tg(a);case 26:case 5:ya(e,a),n===null&&s&4&&Jm(a),s&512&&fo(a,a.return);break;case 12:ya(e,a);break;case 13:ya(e,a),s&4&&rg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yx.bind(null,a),zx(e,a))));break;case 22:if(s=a.memoizedState!==null||Zi,!s){n=n!==null&&n.memoizedState!==null||rn,c=Zi;var f=rn;Zi=s,(rn=n)&&!f?Sa(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),Zi=c,rn=f}break;case 30:break;default:ya(e,a)}}function ig(e){var n=e.alternate;n!==null&&(e.alternate=null,ig(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ar(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Xn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)ag(e,n,a),a=a.sibling}function ag(e,n,a){if(k&&typeof k.onCommitFiberUnmount=="function")try{k.onCommitFiberUnmount(W,a)}catch{}switch(a.tag){case 26:rn||Ui(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ui(a,n);var s=Ze,c=Xn;Ra(a.type)&&(Ze=a.stateNode,Xn=!1),Ki(e,n,a),So(a.stateNode),Ze=s,Xn=c;break;case 5:rn||Ui(a,n);case 6:if(s=Ze,c=Xn,Ze=null,Ki(e,n,a),Ze=s,Xn=c,Ze!==null)if(Xn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Ve(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Ve(a,n,f)}break;case 18:Ze!==null&&(Xn?(e=Ze,qg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wo(e)):qg(Ze,a.stateNode));break;case 4:s=Ze,c=Xn,Ze=a.stateNode.containerInfo,Xn=!0,Ki(e,n,a),Ze=s,Xn=c;break;case 0:case 11:case 14:case 15:rn||xa(2,a,n),rn||xa(4,a,n),Ki(e,n,a);break;case 1:rn||(Ui(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Qm(a,n,s)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:rn=(s=rn)||a.memoizedState!==null,Ki(e,n,a),rn=s;break;default:Ki(e,n,a)}}function rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wo(e)}catch(a){Ve(n,n.return,a)}}function dx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new eg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new eg),n;default:throw Error(r(435,e.tag))}}function hf(e,n){var a=dx(e);n.forEach(function(s){var c=Sx.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Qn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,E=n,C=E;t:for(;C!==null;){switch(C.tag){case 27:if(Ra(C.type)){Ze=C.stateNode,Xn=!1;break t}break;case 5:Ze=C.stateNode,Xn=!1;break t;case 3:case 4:Ze=C.stateNode.containerInfo,Xn=!0;break t}C=C.return}if(Ze===null)throw Error(r(160));ag(f,E,c),Ze=null,Xn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)sg(n,e),n=n.sibling}var vi=null;function sg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(n,e),Jn(e),s&4&&(xa(3,e,e.return),uo(3,e),xa(5,e,e.return));break;case 1:Qn(n,e),Jn(e),s&512&&(rn||a===null||Ui(a,a.return)),s&64&&Zi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=vi;if(Qn(n,e),Jn(e),s&512&&(rn||a===null||Ui(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ci]||f[dn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[dn]=e,on(f),s=f;break t;case"link":var E=t_("link","href",c).get(s+(a.href||""));if(E){for(var C=0;C<E.length;C++)if(f=E[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(C,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(E=t_("meta","content",c).get(s+(a.content||""))){for(C=0;C<E.length;C++)if(f=E[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(C,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[dn]=e,on(f),s=f}e.stateNode=s}else e_(c,e.type,e.stateNode);else e.stateNode=$g(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?e_(c,e.type,e.stateNode):$g(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Qn(n,e),Jn(e),s&512&&(rn||a===null||Ui(a,a.return)),a!==null&&s&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Qn(n,e),Jn(e),s&512&&(rn||a===null||Ui(a,a.return)),e.flags&32){c=e.stateNode;try{Gn(c,"")}catch(ct){Ve(e,e.return,ct)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,cf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(df=!0);break;case 6:if(Qn(n,e),Jn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(ct){Ve(e,e.return,ct)}}break;case 3:if($l=null,c=vi,vi=Ql(n.containerInfo),Qn(n,e),vi=c,Jn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(ct){Ve(e,e.return,ct)}df&&(df=!1,og(e));break;case 4:s=vi,vi=Ql(e.stateNode.containerInfo),Qn(n,e),Jn(e),vi=s;break;case 12:Qn(n,e),Jn(e);break;case 13:Qn(n,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=Vt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,rt=Zi,vt=rn;if(Zi=rt||c,rn=vt||z,Qn(n,e),rn=vt,Zi=rt,Jn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Zi||rn||rr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)E=f.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{C=z.stateNode;var bt=z.memoizedProps.style,ot=bt!=null&&bt.hasOwnProperty("display")?bt.display:null;C.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(ct){Ve(z,z.return,ct)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(ct){Ve(z,z.return,ct)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,hf(e,a))));break;case 19:Qn(n,e),Jn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 30:break;case 21:break;default:Qn(n,e),Jn(e)}}function Jn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if($m(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(e);zl(e,f,c);break;case 5:var E=a.stateNode;a.flags&32&&(Gn(E,""),a.flags&=-33);var C=uf(e);zl(e,C,E);break;case 3:case 4:var z=a.stateNode.containerInfo,rt=uf(e);ff(e,rt,z);break;default:throw Error(r(161))}}catch(vt){Ve(e,e.return,vt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function og(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;og(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ng(e,n.alternate,n),n=n.sibling}function rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),rr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qm(n,n.return,a),rr(n);break;case 27:So(n.stateNode);case 26:case 5:Ui(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,E=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(c,f,a),uo(4,f);break;case 1:if(Sa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(rt){Ve(s,s.return,rt)}if(s=f,c=s.updateQueue,c!==null){var C=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Bp(z[c],C)}catch(rt){Ve(s,s.return,rt)}}a&&E&64&&Km(f),fo(f,f.return);break;case 27:tg(f);case 26:case 5:Sa(c,f,a),a&&s===null&&E&4&&Jm(f),fo(f,f.return);break;case 12:Sa(c,f,a);break;case 13:Sa(c,f,a),a&&E&4&&rg(c,f);break;case 22:f.memoizedState===null&&Sa(c,f,a),fo(f,f.return);break;case 30:break;default:Sa(c,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ks(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e))}function Li(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)lg(e,n,a,s),n=n.sibling}function lg(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,s),c&2048&&uo(9,n);break;case 1:Li(e,n,a,s);break;case 3:Li(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e)));break;case 12:if(c&2048){Li(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,E=f.id,C=f.onPostCommit;typeof C=="function"&&C(E,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Ve(n,n.return,z)}}else Li(e,n,a,s);break;case 13:Li(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,E=n.alternate,n.memoizedState!==null?f._visibility&2?Li(e,n,a,s):ho(e,n):f._visibility&2?Li(e,n,a,s):(f._visibility|=2,qr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&pf(E,n);break;case 24:Li(e,n,a,s),c&2048&&mf(n.alternate,n);break;default:Li(e,n,a,s)}}function qr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,E=n,C=a,z=s,rt=E.flags;switch(E.tag){case 0:case 11:case 15:qr(f,E,C,z,c),uo(8,E);break;case 23:break;case 22:var vt=E.stateNode;E.memoizedState!==null?vt._visibility&2?qr(f,E,C,z,c):ho(f,E):(vt._visibility|=2,qr(f,E,C,z,c)),c&&rt&2048&&pf(E.alternate,E);break;case 24:qr(f,E,C,z,c),c&&rt&2048&&mf(E.alternate,E);break;default:qr(f,E,C,z,c)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:ho(a,s),c&2048&&pf(s.alternate,s);break;case 24:ho(a,s),c&2048&&mf(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function jr(e){if(e.subtreeFlags&po)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 26:jr(e),e.flags&po&&e.memoizedState!==null&&Qx(vi,e.memoizedState,e.memoizedProps);break;case 5:jr(e);break;case 3:case 4:var n=vi;vi=Ql(e.stateNode.containerInfo),jr(e),vi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,jr(e),po=n):jr(e));break;default:jr(e)}}function ug(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,dg(s,e)}ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fg(e),e=e.sibling}function fg(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&xa(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):mo(e);break;default:mo(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,dg(s,e)}ug(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function dg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ks(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,xn=s;else t:for(a=e;xn!==null;){s=xn;var c=s.sibling,f=s.return;if(ig(s),s===a){xn=null;break t}if(c!==null){c.return=f,xn=c;break t}xn=f}}}var hx={getCacheForType:function(e){var n=wn(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},px=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,Se=null,be=0,Ne=0,$n=null,Ma=!1,Yr=!1,gf=!1,Qi=0,nn=0,Ea=0,sr=0,_f=0,ui=0,Zr=0,go=null,Wn=null,vf=!1,xf=0,Hl=1/0,Gl=null,ba=null,bn=0,Ta=null,Kr=null,Qr=0,yf=0,Sf=null,hg=null,_o=0,Mf=null;function ti(){if((Le&2)!==0&&be!==0)return be&-be;if(I.T!==null){var e=zr;return e!==0?e:wf()}return Te()}function pg(){ui===0&&(ui=(be&536870912)===0||De?Y():536870912);var e=ci.current;return e!==null&&(e.flags|=32),ui}function ei(e,n,a){(e===Xe&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Aa(e,be,ui,!1)),Gt(e,a),((Le&2)===0||e!==Xe)&&(e===Xe&&((Le&2)===0&&(sr|=a),nn===4&&Aa(e,be,ui,!1)),Ni(e))}function mg(e,n,a){if((Le&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Nt(e,n),c=s?_x(e,n):Tf(e,n,!0),f=s;do{if(c===0){Yr&&!s&&Aa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!mx(a)){c=Tf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;t:{var C=e;c=go;var z=C.current.memoizedState.isDehydrated;if(z&&(Jr(C,E).flags|=256),E=Tf(C,E,!1),E!==2){if(gf&&!z){C.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=Wn,Wn=c,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}c=E}if(f=!1,c!==2)continue}}if(c===1){Jr(e,0),Aa(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Aa(s,n,ui,!Ma);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=xf+300-Vt(),10<c)){if(Aa(s,n,ui,!Ma),Bt(s,0,!0)!==0)break t;s.timeoutHandle=Xg(gg.bind(null,s,a,Wn,Gl,vf,n,ui,sr,Zr,Ma,f,2,-0,0),c);break t}gg(s,a,Wn,Gl,vf,n,ui,sr,Zr,Ma,f,0,-0,0)}}break}while(!0);Ni(e)}function gg(e,n,a,s,c,f,E,C,z,rt,vt,bt,ot,ct){if(e.timeoutHandle=-1,bt=n.subtreeFlags,(bt&8192||(bt&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:Kx},cg(n),bt=Jx(),bt!==null)){e.cancelPendingCommit=bt(Eg.bind(null,e,n,f,a,s,c,E,C,z,vt,1,ot,ct)),Aa(e,f,E,!rt);return}Eg(e,n,f,a,s,c,E,C,z)}function mx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(e,n,a,s){n&=~_f,n&=~sr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-pt(c),E=1<<f;s[f]=-1,c&=~E}a!==0&&Mt(e,a,n)}function Vl(){return(Le&6)===0?(vo(0),!1):!0}function Ef(){if(Se!==null){if(Ne===0)var e=Se.return;else e=Se,ki=tr=null,Fu(e),Xr=null,oo=0,e=Se;for(;e!==null;)Zm(e.alternate,e),e=e.return;Se=null}}function Jr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Nx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ef(),Xe=e,Se=a=Hi(e.current,null),be=n,Ne=0,$n=null,Ma=!1,Yr=Nt(e,n),gf=!1,Zr=ui=_f=sr=Ea=nn=0,Wn=go=null,vf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-pt(s),f=1<<c;n|=e[c],s&=~f}return Qi=n,ul(),a}function _g(e,n){_e=null,I.H=wl,n===Js||n===xl?(n=Op(),Ne=3):n===Up?(n=Op(),Ne=4):Ne=n===Pm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,Se===null&&(nn=1,Ol(e,ri(n,e.current)))}function vg(){var e=I.H;return I.H=wl,e===null?wl:e}function xg(){var e=I.A;return I.A=hx,e}function bf(){nn=4,Ma||(be&4194048)!==be&&ci.current!==null||(Yr=!0),(Ea&134217727)===0&&(sr&134217727)===0||Xe===null||Aa(Xe,be,ui,!1)}function Tf(e,n,a){var s=Le;Le|=2;var c=vg(),f=xg();(Xe!==e||be!==n)&&(Gl=null,Jr(e,n)),n=!1;var E=nn;t:do try{if(Ne!==0&&Se!==null){var C=Se,z=$n;switch(Ne){case 8:Ef(),E=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var rt=Ne;if(Ne=0,$n=null,$r(e,C,z,rt),a&&Yr){E=0;break t}break;default:rt=Ne,Ne=0,$n=null,$r(e,C,z,rt)}}gx(),E=nn;break}catch(vt){_g(e,vt)}while(!0);return n&&e.shellSuspendCounter++,ki=tr=null,Le=s,I.H=c,I.A=f,Se===null&&(Xe=null,be=0,ul()),E}function gx(){for(;Se!==null;)yg(Se)}function _x(e,n){var a=Le;Le|=2;var s=vg(),c=xg();Xe!==e||be!==n?(Gl=null,Hl=Vt()+500,Jr(e,n)):Yr=Nt(e,n);t:do try{if(Ne!==0&&Se!==null){n=Se;var f=$n;e:switch(Ne){case 1:Ne=0,$n=null,$r(e,n,f,1);break;case 2:case 9:if(Lp(f)){Ne=0,$n=null,Sg(n);break}n=function(){Ne!==2&&Ne!==9||Xe!==e||(Ne=7),Ni(e)},f.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Lp(f)?(Ne=0,$n=null,Sg(n)):(Ne=0,$n=null,$r(e,n,f,7));break;case 5:var E=null;switch(Se.tag){case 26:E=Se.memoizedState;case 5:case 27:var C=Se;if(!E||n_(E)){Ne=0,$n=null;var z=C.sibling;if(z!==null)Se=z;else{var rt=C.return;rt!==null?(Se=rt,kl(rt)):Se=null}break e}}Ne=0,$n=null,$r(e,n,f,5);break;case 6:Ne=0,$n=null,$r(e,n,f,6);break;case 8:Ef(),nn=6;break t;default:throw Error(r(462))}}vx();break}catch(vt){_g(e,vt)}while(!0);return ki=tr=null,I.H=s,I.A=c,Le=a,Se!==null?0:(Xe=null,be=0,ul(),nn)}function vx(){for(;Se!==null&&!ce();)yg(Se)}function yg(e){var n=jm(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?kl(e):Se=n}function Sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Gm(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=Gm(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Fu(n);default:Zm(a,n),n=Se=Mp(n,Qi),n=jm(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?kl(e):Se=n}function $r(e,n,a,s){ki=tr=null,Fu(n),Xr=null,oo=0;var c=n.return;try{if(ox(e,c,n,a,be)){nn=1,Ol(e,ri(a,e.current)),Se=null;return}}catch(f){if(c!==null)throw Se=c,f;nn=1,Ol(e,ri(a,e.current)),Se=null;return}n.flags&32768?(De||s===1?e=!0:Yr||(be&536870912)!==0?e=!1:(Ma=e=!0,(s===2||s===9||s===3||s===6)&&(s=ci.current,s!==null&&s.tag===13&&(s.flags|=16384))),Mg(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){Mg(n,Ma);return}e=n.return;var a=cx(n.alternate,n,Qi);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);nn===0&&(nn=5)}function Mg(e,n){do{var a=ux(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);nn=6,Se=null}function Eg(e,n,a,s,c,f,E,C,z){e.cancelPendingCommit=null;do Xl();while(bn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pu,Ct(e,a,f,E,C,z),e===Xe&&(Se=Xe=null,be=0),Kr=n,Ta=e,Qr=a,yf=f,Sf=c,hg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mx(We,function(){return Cg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=I.T,I.T=null,c=at.p,at.p=2,E=Le,Le|=4;try{fx(e,n,a)}finally{Le=E,at.p=c,I.T=s}}bn=1,bg(),Tg(),Ag()}}function bg(){if(bn===1){bn=0;var e=Ta,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var s=at.p;at.p=2;var c=Le;Le|=4;try{sg(n,e);var f=If,E=dp(e.containerInfo),C=f.focusedElem,z=f.selectionRange;if(E!==C&&C&&C.ownerDocument&&fp(C.ownerDocument.documentElement,C)){if(z!==null&&cu(C)){var rt=z.start,vt=z.end;if(vt===void 0&&(vt=rt),"selectionStart"in C)C.selectionStart=rt,C.selectionEnd=Math.min(vt,C.value.length);else{var bt=C.ownerDocument||document,ot=bt&&bt.defaultView||window;if(ot.getSelection){var ct=ot.getSelection(),se=C.textContent.length,ie=Math.min(z.start,se),ze=z.end===void 0?ie:Math.min(z.end,se);!ct.extend&&ie>ze&&(E=ze,ze=ie,ie=E);var J=up(C,ie),Z=up(C,ze);if(J&&Z&&(ct.rangeCount!==1||ct.anchorNode!==J.node||ct.anchorOffset!==J.offset||ct.focusNode!==Z.node||ct.focusOffset!==Z.offset)){var et=bt.createRange();et.setStart(J.node,J.offset),ct.removeAllRanges(),ie>ze?(ct.addRange(et),ct.extend(Z.node,Z.offset)):(et.setEnd(Z.node,Z.offset),ct.addRange(et))}}}}for(bt=[],ct=C;ct=ct.parentNode;)ct.nodeType===1&&bt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<bt.length;C++){var xt=bt[C];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}nc=!!Bf,If=Bf=null}finally{Le=c,at.p=s,I.T=a}}e.current=n,bn=2}}function Tg(){if(bn===2){bn=0;var e=Ta,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var s=at.p;at.p=2;var c=Le;Le|=4;try{ng(e,n.alternate,n)}finally{Le=c,at.p=s,I.T=a}}bn=3}}function Ag(){if(bn===4||bn===3){bn=0,ee();var e=Ta,n=Kr,a=Qr,s=hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,Kr=Ta=null,Rg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ba=null),Ue(a),n=n.stateNode,k&&typeof k.onCommitFiberRoot=="function")try{k.onCommitFiberRoot(W,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=I.T,c=at.p,at.p=2,I.T=null;try{for(var f=e.onRecoverableError,E=0;E<s.length;E++){var C=s[E];f(C.value,{componentStack:C.stack})}}finally{I.T=n,at.p=c}}(Qr&3)!==0&&Xl(),Ni(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Mf?_o++:(_o=0,Mf=e):_o=0,vo(0)}}function Rg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ks(n)))}function Xl(e){return bg(),Tg(),Ag(),Cg()}function Cg(){if(bn!==5)return!1;var e=Ta,n=yf;yf=0;var a=Ue(Qr),s=I.T,c=at.p;try{at.p=32>a?32:a,I.T=null,a=Sf,Sf=null;var f=Ta,E=Qr;if(bn=0,Kr=Ta=null,Qr=0,(Le&6)!==0)throw Error(r(331));var C=Le;if(Le|=4,fg(f.current),lg(f,f.current,E,a),Le=C,vo(0,!1),k&&typeof k.onPostCommitFiberRoot=="function")try{k.onPostCommitFiberRoot(W,f)}catch{}return!0}finally{at.p=c,I.T=s,Rg(e,n)}}function wg(e,n,a){n=ri(a,n),n=$u(e.stateNode,n,2),e=ma(e,n,2),e!==null&&(Gt(e,2),Ni(e))}function Ve(e,n,a){if(e.tag===3)wg(e,e,a);else for(;n!==null;){if(n.tag===3){wg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){e=ri(a,e),a=Nm(2),s=ma(n,a,2),s!==null&&(Om(a,s,n,e),Gt(s,2),Ni(s));break}}n=n.return}}function Af(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new px;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(gf=!0,c.add(a),e=xx.bind(null,e,n,a),n.then(e,e))}function xx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(be&a)===a&&(nn===4||nn===3&&(be&62914560)===be&&300>Vt()-xf?(Le&2)===0&&Jr(e,0):_f|=a,Zr===be&&(Zr=0)),Ni(e)}function Dg(e,n){n===0&&(n=wt()),e=Or(e,n),e!==null&&(Gt(e,n),Ni(e))}function yx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Dg(e,a)}function Sx(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Dg(e,a)}function Mx(e,n){return G(e,n)}var Wl=null,ts=null,Rf=!1,ql=!1,Cf=!1,or=0;function Ni(e){e!==ts&&e.next===null&&(ts===null?Wl=ts=e:ts=ts.next=e),ql=!0,Rf||(Rf=!0,bx())}function vo(e,n){if(!Cf&&ql){Cf=!0;do for(var a=!1,s=Wl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var E=s.suspendedLanes,C=s.pingedLanes;f=(1<<31-pt(42|e)+1)-1,f&=c&~(E&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Og(s,f))}else f=be,f=Bt(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Nt(s,f)||(a=!0,Og(s,f));s=s.next}while(a);Cf=!1}}function Ex(){Ug()}function Ug(){ql=Rf=!1;var e=0;or!==0&&(Lx()&&(e=or),or=0);for(var n=Vt(),a=null,s=Wl;s!==null;){var c=s.next,f=Lg(s,n);f===0?(s.next=null,a===null?Wl=c:a.next=c,c===null&&(ts=a)):(a=s,(e!==0||(f&3)!==0)&&(ql=!0)),s=c}vo(e)}function Lg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var E=31-pt(f),C=1<<E,z=c[E];z===-1?((C&a)===0||(C&s)!==0)&&(c[E]=ne(C,n)):z<=n&&(e.expiredLanes|=C),f&=~C}if(n=Xe,a=be,a=Bt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&we(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Nt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&we(s),Ue(a)){case 2:case 8:a=oe;break;case 32:a=We;break;case 268435456:a=v;break;default:a=We}return s=Ng.bind(null,e),a=G(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&we(s),e.callbackPriority=2,e.callbackNode=null,2}function Ng(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var s=be;return s=Bt(e,e===Xe?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(mg(e,s,n),Lg(e,Vt()),e.callbackNode!=null&&e.callbackNode===a?Ng.bind(null,e):null)}function Og(e,n){if(Xl())return null;mg(e,n,!0)}function bx(){Ox(function(){(Le&6)!==0?G(Wt,Ex):Ug()})}function wf(){return or===0&&(or=Y()),or}function Pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function Bg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Tx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Pg((c[$e]||null).action),E=s.submitter;E&&(n=(n=E[$e]||null)?Pg(n.formAction):E.getAttribute("formAction"),n!==null&&(f=n,E=null));var C=new ol("action","action",null,s,c);e.push({event:C,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(or!==0){var z=E?Bg(c,E):new FormData(c);Yu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(C.preventDefault(),z=E?Bg(c,E):new FormData(c),Yu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var Df=0;Df<hu.length;Df++){var Uf=hu[Df],Ax=Uf.toLowerCase(),Rx=Uf[0].toUpperCase()+Uf.slice(1);_i(Ax,"on"+Rx)}_i(mp,"onAnimationEnd"),_i(gp,"onAnimationIteration"),_i(_p,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Xv,"onTransitionRun"),_i(Wv,"onTransitionStart"),_i(qv,"onTransitionCancel"),_i(vp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),U("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),U("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),U("onBeforeInput",["compositionend","keypress","textInput","paste"]),U("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Ig(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var E=s.length-1;0<=E;E--){var C=s[E],z=C.instance,rt=C.currentTarget;if(C=C.listener,z!==f&&c.isPropagationStopped())break t;f=C,c.currentTarget=rt;try{f(c)}catch(vt){Nl(vt)}c.currentTarget=null,f=z}else for(E=0;E<s.length;E++){if(C=s[E],z=C.instance,rt=C.currentTarget,C=C.listener,z!==f&&c.isPropagationStopped())break t;f=C,c.currentTarget=rt;try{f(c)}catch(vt){Nl(vt)}c.currentTarget=null,f=z}}}}function Me(e,n){var a=n[br];a===void 0&&(a=n[br]=new Set);var s=e+"__bubble";a.has(s)||(zg(n,e,2,!1),a.add(s))}function Lf(e,n,a){var s=0;n&&(s|=4),zg(a,e,s,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[jl]){e[jl]=!0,el.forEach(function(a){a!=="selectionchange"&&(Cx.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Lf("selectionchange",!1,n))}}function zg(e,n,a,s){switch(l_(n)){case 2:var c=ey;break;case 8:c=ny;break;default:c=jf}a=c.bind(null,n,a,e),c=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Of(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var E=s.tag;if(E===3||E===4){var C=s.stateNode.containerInfo;if(C===c)break;if(E===4)for(E=s.return;E!==null;){var z=E.tag;if((z===3||z===4)&&E.stateNode.containerInfo===c)return;E=E.return}for(;C!==null;){if(E=zi(C),E===null)return;if(z=E.tag,z===5||z===6||z===26||z===27){s=f=E;continue t}C=C.parentNode}}s=s.return}Wh(function(){var rt=f,vt=Jc(a),bt=[];t:{var ot=xp.get(e);if(ot!==void 0){var ct=ol,se=e;switch(e){case"keypress":if(rl(a)===0)break t;case"keydown":case"keyup":ct=Mv;break;case"focusin":se="focus",ct=au;break;case"focusout":se="blur",ct=au;break;case"beforeblur":case"afterblur":ct=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Tv;break;case mp:case gp:case _p:ct=hv;break;case vp:ct=Rv;break;case"scroll":case"scrollend":ct=lv;break;case"wheel":ct=wv;break;case"copy":case"cut":case"paste":ct=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Kh;break;case"toggle":case"beforetoggle":ct=Uv}var ie=(n&4)!==0,ze=!ie&&(e==="scroll"||e==="scrollend"),J=ie?ot!==null?ot+"Capture":null:ot;ie=[];for(var Z=rt,et;Z!==null;){var xt=Z;if(et=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||et===null||J===null||(xt=Is(Z,J),xt!=null&&ie.push(yo(Z,xt,et))),ze)break;Z=Z.return}0<ie.length&&(ot=new ct(ot,se,null,a,vt),bt.push({event:ot,listeners:ie}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",ot&&a!==Qc&&(se=a.relatedTarget||a.fromElement)&&(zi(se)||se[Ri]))break t;if((ct||ot)&&(ot=vt.window===vt?vt:(ot=vt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ct?(se=a.relatedTarget||a.toElement,ct=rt,se=se?zi(se):null,se!==null&&(ze=u(se),ie=se.tag,se!==ze||ie!==5&&ie!==27&&ie!==6)&&(se=null)):(ct=null,se=rt),ct!==se)){if(ie=Yh,xt="onMouseLeave",J="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Kh,xt="onPointerLeave",J="onPointerEnter",Z="pointer"),ze=ct==null?ot:Wa(ct),et=se==null?ot:Wa(se),ot=new ie(xt,Z+"leave",ct,a,vt),ot.target=ze,ot.relatedTarget=et,xt=null,zi(vt)===rt&&(ie=new ie(J,Z+"enter",se,a,vt),ie.target=et,ie.relatedTarget=ze,xt=ie),ze=xt,ct&&se)e:{for(ie=ct,J=se,Z=0,et=ie;et;et=es(et))Z++;for(et=0,xt=J;xt;xt=es(xt))et++;for(;0<Z-et;)ie=es(ie),Z--;for(;0<et-Z;)J=es(J),et--;for(;Z--;){if(ie===J||J!==null&&ie===J.alternate)break e;ie=es(ie),J=es(J)}ie=null}else ie=null;ct!==null&&Fg(bt,ot,ct,ie,!1),se!==null&&ze!==null&&Fg(bt,ze,se,ie,!0)}}t:{if(ot=rt?Wa(rt):window,ct=ot.nodeName&&ot.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ot.type==="file")var qt=ap;else if(np(ot))if(rp)qt=Gv;else{qt=Fv;var ve=zv}else ct=ot.nodeName,!ct||ct.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?rt&&Kc(rt.elementType)&&(qt=ap):qt=Hv;if(qt&&(qt=qt(e,rt))){ip(bt,qt,a,vt);break t}ve&&ve(e,ot,rt),e==="focusout"&&rt&&ot.type==="number"&&rt.memoizedProps.value!=null&&Cn(ot,"number",ot.value)}switch(ve=rt?Wa(rt):window,e){case"focusin":(np(ve)||ve.contentEditable==="true")&&(Ur=ve,uu=rt,Ws=null);break;case"focusout":Ws=uu=Ur=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,hp(bt,a,vt);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":hp(bt,a,vt)}var Jt;if(su)t:{switch(e){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else Dr?tp(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(Qh&&a.locale!=="ko"&&(Dr||re!=="onCompositionStart"?re==="onCompositionEnd"&&Dr&&(Jt=qh()):(fa=vt,eu="value"in fa?fa.value:fa.textContent,Dr=!0)),ve=Yl(rt,re),0<ve.length&&(re=new Zh(re,e,null,a,vt),bt.push({event:re,listeners:ve}),Jt?re.data=Jt:(Jt=ep(a),Jt!==null&&(re.data=Jt)))),(Jt=Nv?Ov(e,a):Pv(e,a))&&(re=Yl(rt,"onBeforeInput"),0<re.length&&(ve=new Zh("onBeforeInput","beforeinput",null,a,vt),bt.push({event:ve,listeners:re}),ve.data=Jt)),Tx(bt,e,rt,a,vt)}Ig(bt,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Is(e,a),c!=null&&s.unshift(yo(e,c,f)),c=Is(e,n),c!=null&&s.push(yo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function es(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fg(e,n,a,s,c){for(var f=n._reactName,E=[];a!==null&&a!==s;){var C=a,z=C.alternate,rt=C.stateNode;if(C=C.tag,z!==null&&z===s)break;C!==5&&C!==26&&C!==27||rt===null||(z=rt,c?(rt=Is(a,f),rt!=null&&E.unshift(yo(a,rt,z))):c||(rt=Is(a,f),rt!=null&&E.push(yo(a,rt,z)))),a=a.return}E.length!==0&&e.push({event:n,listeners:E})}var wx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function Hg(e){return(typeof e=="string"?e:""+e).replace(wx,`
`).replace(Dx,"")}function Gg(e,n){return n=Hg(n),Hg(e)===n}function Zl(){}function Ie(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Gn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Gn(e,""+s);break;case"className":Xt(e,"class",s);break;case"tabIndex":Xt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,s);break;case"style":kh(e,s,f);break;case"data":if(n!=="object"){Xt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=il(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",c.name,c,null),Ie(e,n,"formEncType",c.formEncType,c,null),Ie(e,n,"formMethod",c.formMethod,c,null),Ie(e,n,"formTarget",c.formTarget,c,null)):(Ie(e,n,"encType",c.encType,c,null),Ie(e,n,"method",c.method,c,null),Ie(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=il(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Zl);break;case"onScroll":s!=null&&Me("scroll",e);break;case"onScrollEnd":s!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=il(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Me("beforetoggle",e),Me("toggle",e),zt(e,"popover",s);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":zt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sv.get(a)||a,zt(e,a,s))}}function Pf(e,n,a,s,c,f){switch(a){case"style":kh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Gn(e,s):(typeof s=="number"||typeof s=="bigint")&&Gn(e,""+s);break;case"onScroll":s!=null&&Me("scroll",e);break;case"onScrollEnd":s!=null&&Me("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[$e]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):zt(e,a,s)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var E=a[f];if(E!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,f,E,a,null)}}c&&Ie(e,n,"srcSet",a.srcSet,a,null),s&&Ie(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var C=f=E=c=null,z=null,rt=null;for(s in a)if(a.hasOwnProperty(s)){var vt=a[s];if(vt!=null)switch(s){case"name":c=vt;break;case"type":E=vt;break;case"checked":z=vt;break;case"defaultChecked":rt=vt;break;case"value":f=vt;break;case"defaultValue":C=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,n));break;default:Ie(e,n,s,vt,a,null)}}Bn(e,f,C,z,rt,E,c,!1),ye(e);return;case"select":Me("invalid",e),s=E=f=null;for(c in a)if(a.hasOwnProperty(c)&&(C=a[c],C!=null))switch(c){case"value":f=C;break;case"defaultValue":E=C;break;case"multiple":s=C;default:Ie(e,n,c,C,a,null)}n=f,a=E,e.multiple=!!s,n!=null?tn(e,!!s,n,!1):a!=null&&tn(e,!!s,a,!0);return;case"textarea":Me("invalid",e),f=c=s=null;for(E in a)if(a.hasOwnProperty(E)&&(C=a[E],C!=null))switch(E){case"value":s=C;break;case"defaultValue":c=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Ie(e,n,E,C,a,null)}Rr(e,s,c,f),ye(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ie(e,n,z,s,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(s=0;s<xo.length;s++)Me(xo[s],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in a)if(a.hasOwnProperty(rt)&&(s=a[rt],s!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,rt,s,a,null)}return;default:if(Kc(n)){for(vt in a)a.hasOwnProperty(vt)&&(s=a[vt],s!==void 0&&Pf(e,n,vt,s,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(s=a[C],s!=null&&Ie(e,n,C,s,a,null))}function Ux(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,E=null,C=null,z=null,rt=null,vt=null;for(ct in a){var bt=a[ct];if(a.hasOwnProperty(ct)&&bt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":z=bt;default:s.hasOwnProperty(ct)||Ie(e,n,ct,null,s,bt)}}for(var ot in s){var ct=s[ot];if(bt=a[ot],s.hasOwnProperty(ot)&&(ct!=null||bt!=null))switch(ot){case"type":f=ct;break;case"name":c=ct;break;case"checked":rt=ct;break;case"defaultChecked":vt=ct;break;case"value":E=ct;break;case"defaultValue":C=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==bt&&Ie(e,n,ot,ct,s,bt)}}Ge(e,E,C,z,rt,vt,f,c);return;case"select":ct=E=C=ot=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ct=z;default:s.hasOwnProperty(f)||Ie(e,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":ot=f;break;case"defaultValue":C=f;break;case"multiple":E=f;default:f!==z&&Ie(e,n,c,f,s,z)}n=C,a=E,s=ct,ot!=null?tn(e,!!a,ot,!1):!!s!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":ct=ot=null;for(C in a)if(c=a[C],a.hasOwnProperty(C)&&c!=null&&!s.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ie(e,n,C,null,s,c)}for(E in s)if(c=s[E],f=a[E],s.hasOwnProperty(E)&&(c!=null||f!=null))switch(E){case"value":ot=c;break;case"defaultValue":ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(e,n,E,c,s,f)}Mn(e,ot,ct);return;case"option":for(var se in a)if(ot=a[se],a.hasOwnProperty(se)&&ot!=null&&!s.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Ie(e,n,se,null,s,ot)}for(z in s)if(ot=s[z],ct=a[z],s.hasOwnProperty(z)&&ot!==ct&&(ot!=null||ct!=null))switch(z){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Ie(e,n,z,ot,s,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)ot=a[ie],a.hasOwnProperty(ie)&&ot!=null&&!s.hasOwnProperty(ie)&&Ie(e,n,ie,null,s,ot);for(rt in s)if(ot=s[rt],ct=a[rt],s.hasOwnProperty(rt)&&ot!==ct&&(ot!=null||ct!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:Ie(e,n,rt,ot,s,ct)}return;default:if(Kc(n)){for(var ze in a)ot=a[ze],a.hasOwnProperty(ze)&&ot!==void 0&&!s.hasOwnProperty(ze)&&Pf(e,n,ze,void 0,s,ot);for(vt in s)ot=s[vt],ct=a[vt],!s.hasOwnProperty(vt)||ot===ct||ot===void 0&&ct===void 0||Pf(e,n,vt,ot,s,ct);return}}for(var J in a)ot=a[J],a.hasOwnProperty(J)&&ot!=null&&!s.hasOwnProperty(J)&&Ie(e,n,J,null,s,ot);for(bt in s)ot=s[bt],ct=a[bt],!s.hasOwnProperty(bt)||ot===ct||ot==null&&ct==null||Ie(e,n,bt,ot,s,ct)}var Bf=null,If=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Lx(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var Xg=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(e){return Wg.resolve(null).then(e).catch(Px)}:Xg;function Px(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function qg(e,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var E=e.ownerDocument;if(a&1&&So(E.documentElement),a&2&&So(E.body),a&4)for(a=E.head,So(a),E=a.firstChild;E;){var C=E.nextSibling,z=E.nodeName;E[Ci]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=C}}if(c===0){e.removeChild(f),wo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);wo(n)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),Ar(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Bx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ci])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function Ix(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function zx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Vf=null;function jg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Yg(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ar(e)}var fi=new Map,Zg=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=at.d;at.d={f:Fx,r:Hx,D:Gx,C:Vx,L:kx,m:Xx,X:qx,S:Wx,M:jx};function Fx(){var e=Ji.f(),n=Vl();return e||n}function Hx(e){var n=ca(e);n!==null&&n.tag===5&&n.type==="form"?mm(n):Ji.r(e)}var ns=typeof document>"u"?null:document;function Kg(e,n,a){var s=ns;if(s&&typeof n=="string"&&n){var c=_n(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Zg.has(c)||(Zg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",e),on(n),s.head.appendChild(n)))}}function Gx(e){Ji.D(e),Kg("dns-prefetch",e,null)}function Vx(e,n){Ji.C(e,n),Kg("preconnect",e,n)}function kx(e,n,a){Ji.L(e,n,a);var s=ns;if(s&&e&&n){var c='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+_n(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+_n(a.imageSizes)+'"]')):c+='[href="'+_n(e)+'"]';var f=c;switch(n){case"style":f=is(e);break;case"script":f=as(e)}fi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(Mo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),Tn(n,"link",e),on(n),s.head.appendChild(n)))}}function Xx(e,n){Ji.m(e,n);var a=ns;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_n(s)+'"][href="'+_n(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(e)}if(!fi.has(f)&&(e=_({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),Tn(s,"link",e),on(s),a.head.appendChild(s)}}}function Wx(e,n,a){Ji.S(e,n,a);var s=ns;if(s&&e){var c=ua(s).hoistableStyles,f=is(e);n=n||"default";var E=c.get(f);if(!E){var C={loading:0,preload:null};if(E=s.querySelector(Mo(f)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&kf(e,a);var z=E=s.createElement("link");on(z),Tn(z,"link",e),z._p=new Promise(function(rt,vt){z.onload=rt,z.onerror=vt}),z.addEventListener("load",function(){C.loading|=1}),z.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Jl(E,n,s)}E={type:"stylesheet",instance:E,count:1,state:C},c.set(f,E)}}}function qx(e,n){Ji.X(e,n);var a=ns;if(a&&e){var s=ua(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=_({src:e,async:!0},n),(n=fi.get(c))&&Xf(e,n),f=a.createElement("script"),on(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function jx(e,n){Ji.M(e,n);var a=ns;if(a&&e){var s=ua(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&Xf(e,n),f=a.createElement("script"),on(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Qg(e,n,a,s){var c=(c=st.current)?Ql(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=ua(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var f=ua(c).hoistableStyles,E=f.get(e);if(E||(c=c.ownerDocument||c,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,E),(f=c.querySelector(Mo(e)))&&!f._p&&(E.instance=f,E.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||Yx(c,e,a,E.state))),n&&s===null)throw Error(r(528,""));return E}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=ua(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+_n(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function Jg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Yx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),on(n),e.head.appendChild(n))}function as(e){return'[src="'+_n(e)+'"]'}function Eo(e){return"script[async]"+e}function $g(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+_n(a.href)+'"]');if(s)return n.instance=s,on(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),on(s),Tn(s,"style",c),Jl(s,a.precedence,e),n.instance=s;case"stylesheet":c=is(a.href);var f=e.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,on(f),f;s=Jg(a),(c=fi.get(c))&&kf(s,c),f=(e.ownerDocument||e).createElement("link"),on(f);var E=f;return E._p=new Promise(function(C,z){E.onload=C,E.onerror=z}),Tn(f,"link",s),n.state.loading|=4,Jl(f,a.precedence,e),n.instance=f;case"script":return f=as(a.src),(c=e.querySelector(Eo(f)))?(n.instance=c,on(c),c):(s=a,(c=fi.get(f))&&(s=_({},a),Xf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),on(c),Tn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Jl(s,a.precedence,e));return n.instance}function Jl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,E=0;E<s.length;E++){var C=s[E];if(C.dataset.precedence===n)f=C;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function t_(e,n,a){if($l===null){var s=new Map,c=$l=new Map;c.set(a,s)}else c=$l,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ci]||f[dn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var E=f.getAttribute(n)||"";E=e+E;var C=s.get(E);C?C.push(f):s.set(E,[f])}}return s}function e_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Zx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bo=null;function Kx(){}function Qx(e,n,a){if(bo===null)throw Error(r(475));var s=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=is(a.href),f=e.querySelector(Mo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=tc.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,on(f);return}f=e.ownerDocument||e,a=Jg(a),(c=fi.get(c))&&kf(a,c),f=f.createElement("link"),on(f);var E=f;E._p=new Promise(function(C,z){E.onload=C,E.onerror=z}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=tc.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Jx(){if(bo===null)throw Error(r(475));var e=bo;return e.stylesheets&&e.count===0&&Wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function tc(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function Wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach($x,e),ec=null,tc.call(e))}function $x(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var s=a.get(null);else{a=new Map,ec.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var E=c[f];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),s=E)}s&&a.set(null,s)}c=n.instance,E=c.getAttribute("data-precedence"),f=a.get(E)||s,f===s&&a.set(null,c),a.set(E,c),this.count++,s=tc.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var To={$$typeof:B,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function ty(e,n,a,s,c,f,E,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.hiddenUpdates=Ot(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function i_(e,n,a,s,c,f,E,C,z,rt,vt,bt){return e=new ty(e,n,a,E,C,z,rt,bt),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Tu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},wu(f),e}function a_(e){return e?(e=Pr,e):Pr}function r_(e,n,a,s,c,f){c=a_(c),s.context===null?s.context=c:s.pendingContext=c,s=pa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ma(e,s,n),a!==null&&(ei(a,e,n),to(a,e,n))}function s_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){s_(e,n),(e=e.alternate)&&s_(e,n)}function o_(e){if(e.tag===13){var n=Or(e,67108864);n!==null&&ei(n,e,67108864),qf(e,67108864)}}var nc=!0;function ey(e,n,a,s){var c=I.T;I.T=null;var f=at.p;try{at.p=2,jf(e,n,a,s)}finally{at.p=f,I.T=c}}function ny(e,n,a,s){var c=I.T;I.T=null;var f=at.p;try{at.p=8,jf(e,n,a,s)}finally{at.p=f,I.T=c}}function jf(e,n,a,s){if(nc){var c=Yf(s);if(c===null)Of(e,n,s,ic,a),c_(e,s);else if(ay(c,e,n,a,s))s.stopPropagation();else if(c_(e,s),n&4&&-1<iy.indexOf(e)){for(;c!==null;){var f=ca(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var E=Ut(f.pendingLanes);if(E!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;E;){var z=1<<31-pt(E);C.entanglements[1]|=z,E&=~z}Ni(f),(Le&6)===0&&(Hl=Vt()+500,vo(0))}}break;case 13:C=Or(f,2),C!==null&&ei(C,f,2),Vl(),qf(f,2)}if(f=Yf(s),f===null&&Of(e,n,s,ic,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Of(e,n,s,null,a)}}function Yf(e){return e=Jc(e),Zf(e)}var ic=null;function Zf(e){if(ic=null,e=zi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function l_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oe()){case Wt:return 2;case oe:return 8;case We:case ke:return 32;case v:return 268435456;default:return 32}default:return 32}}var Kf=!1,Ca=null,wa=null,Da=null,Ao=new Map,Ro=new Map,Ua=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c_(e,n){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ca(n),n!==null&&o_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function ay(e,n,a,s,c){switch(n){case"focusin":return Ca=Co(Ca,e,n,a,s,c),!0;case"dragenter":return wa=Co(wa,e,n,a,s,c),!0;case"mouseover":return Da=Co(Da,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,s,c)),!0}return!1}function u_(e){var n=zi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,mi(e.priority,function(){if(a.tag===13){var s=ti();s=le(s);var c=Or(a,s);c!==null&&ei(c,a,s),qf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Qc=s,a.target.dispatchEvent(s),Qc=null}else return n=ca(a),n!==null&&o_(n),e.blockedOn=a,!1;n.shift()}return!0}function f_(e,n,a){ac(e)&&a.delete(n)}function ry(){Kf=!1,Ca!==null&&ac(Ca)&&(Ca=null),wa!==null&&ac(wa)&&(wa=null),Da!==null&&ac(Da)&&(Da=null),Ao.forEach(f_),Ro.forEach(f_)}function rc(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ry)))}var sc=null;function d_(e){sc!==e&&(sc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sc===e&&(sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Zf(s||a)===null)continue;break}var f=ca(a);f!==null&&(e.splice(n,3),n-=3,Yu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function wo(e){function n(z){return rc(z,e)}Ca!==null&&rc(Ca,e),wa!==null&&rc(wa,e),Da!==null&&rc(Da,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Ua.length;a++){var s=Ua[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)u_(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],E=c[$e]||null;if(typeof f=="function")E||d_(a);else if(E){var C=null;if(f&&f.hasAttribute("formAction")){if(c=f,E=f[$e]||null)C=E.formAction;else if(Zf(c)!==null)continue}else C=E.action;typeof C=="function"?a[s+1]=C:(a.splice(s,3),s-=3),d_(a)}}}function Qf(e){this._internalRoot=e}oc.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ti();r_(a,s,e,n,null,null)},oc.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;r_(e.current,2,null,e,null,null),Vl(),n[Ri]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Te();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&u_(e)}};var h_=t.version;if(h_!=="19.1.1")throw Error(r(527,h_,"19.1.1"));at.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var sy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{W=lc.inject(sy),k=lc}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=wm,f=Dm,E=Um,C=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(C=n.unstable_transitionCallbacks)),n=i_(e,1,!1,null,null,a,s,c,f,E,C,null),e[Ri]=n.current,Nf(e),new Qf(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=wm,E=Dm,C=Um,z=null,rt=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(rt=a.formState)),n=i_(e,1,!0,n,a??null,s,c,f,E,C,z,rt),n.context=a_(null),a=n.current,s=ti(),s=le(s),c=pa(s),c.callback=null,ma(a,c,s),a=s,n.current.lanes=a,Gt(n,a),Ni(n),e[Ri]=n.current,Nf(e),new oc(n)},Uo.version="19.1.1",Uo}var E_;function gy(){if(E_)return td.exports;E_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),td.exports=my(),td.exports}var _y=gy();const vy="modulepreload",xy=function(o){return"/"+o},b_={},yy=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=d?.nonce||d?.getAttribute("nonce");l=m(i.map(p=>{if(p=xy(p),p in b_)return;b_[p]=!0;const _=p.endsWith(".css"),x=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${x}`))return;const S=document.createElement("link");if(S.rel=_?"stylesheet":vy,_||(S.as="script"),S.crossOrigin="",S.href=p,h&&S.setAttribute("nonce",h),document.head.appendChild(S),_)return new Promise((b,R)=>{S.addEventListener("load",b),S.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return l.then(d=>{for(const h of d||[])h.status==="rejected"&&u(h.reason);return t().catch(u)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="180",Sy=0,T_=1,My=2,C0=1,Ey=2,aa=3,ka=0,qn=1,bi=2,Ha=0,Ts=1,A_=2,R_=3,C_=4,by=5,gr=100,Ty=101,Ay=102,Ry=103,Cy=104,wy=200,Dy=201,Uy=202,Ly=203,Id=204,zd=205,Ny=206,Oy=207,Py=208,By=209,Iy=210,zy=211,Fy=212,Hy=213,Gy=214,Fd=0,Hd=1,Gd=2,Rs=3,Vd=4,kd=5,Xd=6,Wd=7,w0=0,Vy=1,ky=2,Ga=0,Xy=1,Wy=2,qy=3,jy=4,Yy=5,Zy=6,Ky=7,D0=300,Cs=301,ws=302,qd=303,jd=304,Yc=306,Yd=1e3,xr=1001,Zd=1002,ai=1003,Qy=1004,cc=1005,Ti=1006,ad=1007,yr=1008,oa=1009,U0=1010,L0=1011,Xo=1012,Dh=1013,Sr=1014,Bi=1015,Ko=1016,Uh=1017,Lh=1018,Wo=1020,N0=35902,O0=35899,P0=1021,B0=1022,Ai=1023,qo=1026,jo=1027,Nh=1028,Oh=1029,I0=1030,Ph=1031,Bh=1033,Bc=33776,Ic=33777,zc=33778,Fc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,th=36196,eh=37492,nh=37496,ih=37808,ah=37809,rh=37810,sh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,yh=36283,Sh=36284,Mh=36285,Eh=36286,Jy=3200,$y=3201,tS=0,eS=1,Fa="",hi="srgb",Ds="srgb-linear",Gc="linear",Fe="srgb",rs=7680,w_=519,nS=512,iS=513,aS=514,z0=515,rS=516,sS=517,oS=518,lS=519,bh=35044,D_="300 es",Ii=2e3,Vc=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Th=180/Math.PI;function Va(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Ee(o,t,i){return Math.max(t,Math.min(i,o))}function cS(o,t){return(o%t+t)%t}function sd(o,t,i){return(1-i)*o+i*t}function Pi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function He(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class xe{constructor(t=0,i=0){xe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],x=r[l+3];const S=u[d+0],b=u[d+1],R=u[d+2],D=u[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(h===1){t[i+0]=S,t[i+1]=b,t[i+2]=R,t[i+3]=D;return}if(x!==D||m!==S||p!==b||_!==R){let M=1-h;const g=m*S+p*b+_*R+x*D,A=g>=0?1:-1,B=1-g*g;if(B>Number.EPSILON){const F=Math.sqrt(B),w=Math.atan2(F,g*A);M=Math.sin(M*w)/F,h=Math.sin(h*w)/F}const L=h*A;if(m=m*M+S*L,p=p*M+b*L,_=_*M+R*L,x=x*M+D*L,M===1-h){const F=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=F,p*=F,_*=F,x*=F}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],x=u[d],S=u[d+1],b=u[d+2],R=u[d+3];return t[i]=h*R+_*x+m*b-p*S,t[i+1]=m*R+_*S+p*x-h*b,t[i+2]=p*R+_*b+h*S-m*x,t[i+3]=_*R-h*x-m*S-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),x=h(u/2),S=m(r/2),b=m(l/2),R=m(u/2);switch(d){case"XYZ":this._x=S*_*x+p*b*R,this._y=p*b*x-S*_*R,this._z=p*_*R+S*b*x,this._w=p*_*x-S*b*R;break;case"YXZ":this._x=S*_*x+p*b*R,this._y=p*b*x-S*_*R,this._z=p*_*R-S*b*x,this._w=p*_*x+S*b*R;break;case"ZXY":this._x=S*_*x-p*b*R,this._y=p*b*x+S*_*R,this._z=p*_*R+S*b*x,this._w=p*_*x-S*b*R;break;case"ZYX":this._x=S*_*x-p*b*R,this._y=p*b*x+S*_*R,this._z=p*_*R-S*b*x,this._w=p*_*x+S*b*R;break;case"YZX":this._x=S*_*x+p*b*R,this._y=p*b*x+S*_*R,this._z=p*_*R-S*b*x,this._w=p*_*x-S*b*R;break;case"XZY":this._x=S*_*x-p*b*R,this._y=p*b*x-S*_*R,this._z=p*_*R+S*b*x,this._w=p*_*x+S*b*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],x=i[10],S=r+h+x;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(_-m)*b,this._y=(u-p)*b,this._z=(d-l)*b}else if(r>h&&r>x){const b=2*Math.sqrt(1+r-h-x);this._w=(_-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+p)/b}else if(h>x){const b=2*Math.sqrt(1+h-r-x);this._w=(u-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+_)/b}else{const b=2*Math.sqrt(1+x-r-h);this._w=(d-l)/b,this._x=(u+p)/b,this._y=(m+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-r*p,this._z=u*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const b=1-i;return this._w=b*d+i*this._w,this._x=b*r+i*this._x,this._y=b*l+i*this._y,this._z=b*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),x=Math.sin((1-i)*_)/p,S=Math.sin(i*_)/p;return this._w=d*x+this._w*S,this._x=r*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,i=0,r=0){nt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(U_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(U_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),_=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+m*p+d*x-h*_,this.y=r+m*_+h*p-u*x,this.z=l+m*x+u*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return od.copy(this).projectOnVector(t),this.sub(od)}reflect(t){return this.sub(od.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new nt,U_=new Qo;class de{constructor(t,i,r,l,u,d,h,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],x=r[7],S=r[2],b=r[5],R=r[8],D=l[0],M=l[3],g=l[6],A=l[1],B=l[4],L=l[7],F=l[2],w=l[5],V=l[8];return u[0]=d*D+h*A+m*F,u[3]=d*M+h*B+m*w,u[6]=d*g+h*L+m*V,u[1]=p*D+_*A+x*F,u[4]=p*M+_*B+x*w,u[7]=p*g+_*L+x*V,u[2]=S*D+b*A+R*F,u[5]=S*M+b*B+R*w,u[8]=S*g+b*L+R*V,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-r*u*_+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=_*d-h*p,S=h*m-_*u,b=p*u-d*m,R=i*x+r*S+l*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/R;return t[0]=x*D,t[1]=(l*p-_*r)*D,t[2]=(h*r-l*d)*D,t[3]=S*D,t[4]=(_*i-l*m)*D,t[5]=(l*u-h*i)*D,t[6]=b*D,t[7]=(r*m-p*i)*D,t[8]=(d*i-r*u)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ld.makeScale(t,i)),this}rotate(t){return this.premultiply(ld.makeRotation(-t)),this}translate(t,i){return this.premultiply(ld.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new de;function F0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function uS(){const o=kc("canvas");return o.style.display="block",o}const L_={};function Yo(o){o in L_||(L_[o]=!0,console.warn(o))}function fS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const N_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dS(){const o={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Fe&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Fe&&(l.r=As(l.r),l.g=As(l.g),l.b=As(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ds]:{primaries:t,whitePoint:r,transfer:Gc,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Ce=dS();function sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function As(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ss;class hS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ss===void 0&&(ss=kc("canvas")),ss.width=t.width,ss.height=t.height;const l=ss.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=sa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(sa(i[r]/255)*255):i[r]=sa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pS=0;class Ih{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Va(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(cd(l[d].image)):u.push(cd(l[d]))}else u=cd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function cd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mS=0;const ud=new nt;class Nn extends Ls{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=xr,l=xr,u=Ti,d=yr,h=Ai,m=oa,p=Nn.DEFAULT_ANISOTROPY,_=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Va(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==D0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yd:t.x=t.x-Math.floor(t.x);break;case xr:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yd:t.y=t.y-Math.floor(t.y);break;case xr:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=D0;Nn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],x=m[8],S=m[1],b=m[5],R=m[9],D=m[2],M=m[6],g=m[10];if(Math.abs(_-S)<.01&&Math.abs(x-D)<.01&&Math.abs(R-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(x+D)<.1&&Math.abs(R+M)<.1&&Math.abs(p+b+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(p+1)/2,L=(b+1)/2,F=(g+1)/2,w=(_+S)/4,V=(x+D)/4,tt=(R+M)/4;return B>L&&B>F?B<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(B),l=w/r,u=V/r):L>F?L<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),r=w/l,u=tt/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=V/u,l=tt/u),this.set(r,l,u,i),this}let A=Math.sqrt((M-R)*(M-R)+(x-D)*(x-D)+(S-_)*(S-_));return Math.abs(A)<.001&&(A=1),this.x=(M-R)/A,this.y=(x-D)/A,this.z=(S-_)/A,this.w=Math.acos((p+b+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gS extends Ls{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Nn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ih(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends gS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class H0 extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _S extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,yi):yi.fromBufferAttribute(u,d),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(t.matrixWorld),this.union(uc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),fc.subVectors(this.max,Lo),os.subVectors(t.a,Lo),ls.subVectors(t.b,Lo),cs.subVectors(t.c,Lo),Na.subVectors(ls,os),Oa.subVectors(cs,ls),lr.subVectors(os,cs);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-lr.z,lr.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,lr.z,0,-lr.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-lr.y,lr.x,0];return!fd(i,os,ls,cs,fc)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,os,ls,cs,fc))?!1:(dc.crossVectors(Na,Oa),i=[dc.x,dc.y,dc.z],fd(i,os,ls,cs,fc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],yi=new nt,uc=new Er,os=new nt,ls=new nt,cs=new nt,Na=new nt,Oa=new nt,lr=new nt,Lo=new nt,fc=new nt,dc=new nt,cr=new nt;function fd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){cr.fromArray(o,u);const h=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=t.dot(cr),p=i.dot(cr),_=r.dot(cr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const vS=new Er,No=new nt,dd=new nt;class Ns{constructor(t=new nt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):vS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(dd)),this.expandByPoint(No.copy(t.center).sub(dd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new nt,hd=new nt,hc=new nt,Pa=new nt,pd=new nt,pc=new nt,md=new nt;class zh{constructor(t=new nt,i=new nt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){hd.copy(t).add(i).multiplyScalar(.5),hc.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(hd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(hc),h=Pa.dot(this.direction),m=-Pa.dot(hc),p=Pa.lengthSq(),_=Math.abs(1-d*d);let x,S,b,R;if(_>0)if(x=d*m-h,S=d*h-m,R=u*_,x>=0)if(S>=-R)if(S<=R){const D=1/_;x*=D,S*=D,b=x*(x+d*S+2*h)+S*(d*x+S+2*m)+p}else S=u,x=Math.max(0,-(d*S+h)),b=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(d*S+h)),b=-x*x+S*(S+2*m)+p;else S<=-R?(x=Math.max(0,-(-d*u+h)),S=x>0?-u:Math.min(Math.max(-u,-m),u),b=-x*x+S*(S+2*m)+p):S<=R?(x=0,S=Math.min(Math.max(-u,-m),u),b=S*(S+2*m)+p):(x=Math.max(0,-(d*u+h)),S=x>0?u:Math.min(Math.max(-u,-m),u),b=-x*x+S*(S+2*m)+p);else S=d>0?-u:u,x=Math.max(0,-(d*S+h)),b=-x*x+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(hd).addScaledVector(hc,S),b}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,d=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,d=(t.min.y-S.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-S.z)*x,m=(t.max.z-S.z)*x):(h=(t.max.z-S.z)*x,m=(t.min.z-S.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){pd.subVectors(i,t),pc.subVectors(r,t),md.crossVectors(pd,pc);let d=this.direction.dot(md),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Pa.subVectors(this.origin,t);const m=h*this.direction.dot(pc.crossVectors(Pa,pc));if(m<0)return null;const p=h*this.direction.dot(pd.cross(Pa));if(p<0||m+p>d)return null;const _=-h*Pa.dot(md);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,u,d,h,m,p,_,x,S,b,R,D,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,_,x,S,b,R,D,M)}set(t,i,r,l,u,d,h,m,p,_,x,S,b,R,D,M){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=d,g[9]=h,g[13]=m,g[2]=p,g[6]=_,g[10]=x,g[14]=S,g[3]=b,g[7]=R,g[11]=D,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/us.setFromMatrixColumn(t,0).length(),u=1/us.setFromMatrixColumn(t,1).length(),d=1/us.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const S=d*_,b=d*x,R=h*_,D=h*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=b+R*p,i[5]=S-D*p,i[9]=-h*m,i[2]=D-S*p,i[6]=R+b*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*_,b=m*x,R=p*_,D=p*x;i[0]=S+D*h,i[4]=R*h-b,i[8]=d*p,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=b*h-R,i[6]=D+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*_,b=m*x,R=p*_,D=p*x;i[0]=S-D*h,i[4]=-d*x,i[8]=R+b*h,i[1]=b+R*h,i[5]=d*_,i[9]=D-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*_,b=d*x,R=h*_,D=h*x;i[0]=m*_,i[4]=R*p-b,i[8]=S*p+D,i[1]=m*x,i[5]=D*p+S,i[9]=b*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,b=d*p,R=h*m,D=h*p;i[0]=m*_,i[4]=D-S*x,i[8]=R*x+b,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=b*x+R,i[10]=S-D*x}else if(t.order==="XZY"){const S=d*m,b=d*p,R=h*m,D=h*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=S*x+D,i[5]=d*_,i[9]=b*x-R,i[2]=R*x-b,i[6]=h*_,i[10]=D*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xS,t,yS)}lookAt(t,i,r){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ba.crossVectors(r,ni),Ba.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ba.crossVectors(r,ni)),Ba.normalize(),mc.crossVectors(ni,Ba),l[0]=Ba.x,l[4]=mc.x,l[8]=ni.x,l[1]=Ba.y,l[5]=mc.y,l[9]=ni.y,l[2]=Ba.z,l[6]=mc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],x=r[5],S=r[9],b=r[13],R=r[2],D=r[6],M=r[10],g=r[14],A=r[3],B=r[7],L=r[11],F=r[15],w=l[0],V=l[4],tt=l[8],O=l[12],T=l[1],q=l[5],j=l[9],ht=l[13],lt=l[2],mt=l[6],I=l[10],at=l[14],K=l[3],At=l[7],N=l[11],it=l[15];return u[0]=d*w+h*T+m*lt+p*K,u[4]=d*V+h*q+m*mt+p*At,u[8]=d*tt+h*j+m*I+p*N,u[12]=d*O+h*ht+m*at+p*it,u[1]=_*w+x*T+S*lt+b*K,u[5]=_*V+x*q+S*mt+b*At,u[9]=_*tt+x*j+S*I+b*N,u[13]=_*O+x*ht+S*at+b*it,u[2]=R*w+D*T+M*lt+g*K,u[6]=R*V+D*q+M*mt+g*At,u[10]=R*tt+D*j+M*I+g*N,u[14]=R*O+D*ht+M*at+g*it,u[3]=A*w+B*T+L*lt+F*K,u[7]=A*V+B*q+L*mt+F*At,u[11]=A*tt+B*j+L*I+F*N,u[15]=A*O+B*ht+L*at+F*it,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],x=t[6],S=t[10],b=t[14],R=t[3],D=t[7],M=t[11],g=t[15];return R*(+u*m*x-l*p*x-u*h*S+r*p*S+l*h*b-r*m*b)+D*(+i*m*b-i*p*S+u*d*S-l*d*b+l*p*_-u*m*_)+M*(+i*p*x-i*h*b-u*d*x+r*d*b+u*h*_-r*p*_)+g*(-l*h*_-i*m*x+i*h*S+l*d*x-r*d*S+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=t[9],S=t[10],b=t[11],R=t[12],D=t[13],M=t[14],g=t[15],A=x*M*p-D*S*p+D*m*b-h*M*b-x*m*g+h*S*g,B=R*S*p-_*M*p-R*m*b+d*M*b+_*m*g-d*S*g,L=_*D*p-R*x*p+R*h*b-d*D*b-_*h*g+d*x*g,F=R*x*m-_*D*m-R*h*S+d*D*S+_*h*M-d*x*M,w=i*A+r*B+l*L+u*F;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/w;return t[0]=A*V,t[1]=(D*S*u-x*M*u-D*l*b+r*M*b+x*l*g-r*S*g)*V,t[2]=(h*M*u-D*m*u+D*l*p-r*M*p-h*l*g+r*m*g)*V,t[3]=(x*m*u-h*S*u-x*l*p+r*S*p+h*l*b-r*m*b)*V,t[4]=B*V,t[5]=(_*M*u-R*S*u+R*l*b-i*M*b-_*l*g+i*S*g)*V,t[6]=(R*m*u-d*M*u-R*l*p+i*M*p+d*l*g-i*m*g)*V,t[7]=(d*S*u-_*m*u+_*l*p-i*S*p-d*l*b+i*m*b)*V,t[8]=L*V,t[9]=(R*x*u-_*D*u-R*r*b+i*D*b+_*r*g-i*x*g)*V,t[10]=(d*D*u-R*h*u+R*r*p-i*D*p-d*r*g+i*h*g)*V,t[11]=(_*h*u-d*x*u-_*r*p+i*x*p+d*r*b-i*h*b)*V,t[12]=F*V,t[13]=(_*D*l-R*x*l+R*r*S-i*D*S-_*r*M+i*x*M)*V,t[14]=(R*h*l-d*D*l-R*r*m+i*D*m+d*r*M-i*h*M)*V,t[15]=(d*x*l-_*h*l+_*r*m-i*x*m-d*r*S+i*h*S)*V,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,_=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,x=h+h,S=u*p,b=u*_,R=u*x,D=d*_,M=d*x,g=h*x,A=m*p,B=m*_,L=m*x,F=r.x,w=r.y,V=r.z;return l[0]=(1-(D+g))*F,l[1]=(b+L)*F,l[2]=(R-B)*F,l[3]=0,l[4]=(b-L)*w,l[5]=(1-(S+g))*w,l[6]=(M+A)*w,l[7]=0,l[8]=(R+B)*V,l[9]=(M-A)*V,l[10]=(1-(S+D))*V,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const d=us.set(l[4],l[5],l[6]).length(),h=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const p=1/u,_=1/d,x=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=_,Si.elements[5]*=_,Si.elements[6]*=_,Si.elements[8]*=x,Si.elements[9]*=x,Si.elements[10]*=x,i.setFromRotationMatrix(Si),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,_=2*u/(i-t),x=2*u/(r-l),S=(i+t)/(i-t),b=(r+l)/(r-l);let R,D;if(m)R=u/(d-u),D=d*u/(d-u);else if(h===Ii)R=-(d+u)/(d-u),D=-2*d*u/(d-u);else if(h===Vc)R=-d/(d-u),D=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=x,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,_=2/(i-t),x=2/(r-l),S=-(i+t)/(i-t),b=-(r+l)/(r-l);let R,D;if(m)R=1/(d-u),D=d/(d-u);else if(h===Ii)R=-2/(d-u),D=-(d+u)/(d-u);else if(h===Vc)R=-1/(d-u),D=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=x,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=R,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const us=new nt,Si=new je,xS=new nt(0,0,0),yS=new nt(1,1,1),Ba=new nt,mc=new nt,ni=new nt,P_=new je,B_=new Qo;class la{constructor(t=0,i=0,r=0,l=la.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],x=l[2],S=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ee(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return P_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(P_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return B_.setFromEuler(this),this.setFromQuaternion(B_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SS=0;const I_=new nt,fs=new Qo,ea=new je,gc=new nt,Oo=new nt,MS=new nt,ES=new Qo,z_=new nt(1,0,0),F_=new nt(0,1,0),H_=new nt(0,0,1),G_={type:"added"},bS={type:"removed"},ds={type:"childadded",child:null},gd={type:"childremoved",child:null};class On extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new nt,i=new la,r=new Qo,l=new nt(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new de}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(z_,t)}rotateY(t){return this.rotateOnAxis(F_,t)}rotateZ(t){return this.rotateOnAxis(H_,t)}translateOnAxis(t,i){return I_.copy(t).applyQuaternion(this.quaternion),this.position.add(I_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(z_,t)}translateY(t){return this.translateOnAxis(F_,t)}translateZ(t){return this.translateOnAxis(H_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?gc.copy(t):gc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Oo,gc,this.up):ea.lookAt(gc,Oo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(ea),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(G_),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bS),gd.child=t,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(G_),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,MS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,ES,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),x=d(t.shapes),S=d(t.skeletons),b=d(t.animations),R=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),b.length>0&&(r.animations=b),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}On.DEFAULT_UP=new nt(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new nt,na=new nt,_d=new nt,ia=new nt,hs=new nt,ps=new nt,V_=new nt,vd=new nt,xd=new nt,yd=new nt,Sd=new sn,Md=new sn,Ed=new sn;class pi{constructor(t=new nt,i=new nt,r=new nt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Mi.subVectors(t,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Mi.subVectors(l,i),na.subVectors(r,i),_d.subVectors(t,i);const d=Mi.dot(Mi),h=Mi.dot(na),m=Mi.dot(_d),p=na.dot(na),_=na.dot(_d),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const S=1/x,b=(p*m-h*_)*S,R=(d*_-h*m)*S;return u.set(1-b-R,R,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return Sd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(t,i),Md.fromBufferAttribute(t,r),Ed.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Sd,u.x),d.addScaledVector(Md,u.y),d.addScaledVector(Ed,u.z),d}static isFrontFacing(t,i,r,l){return Mi.subVectors(r,i),na.subVectors(t,i),Mi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),Mi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return pi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;hs.subVectors(l,r),ps.subVectors(u,r),vd.subVectors(t,r);const m=hs.dot(vd),p=ps.dot(vd);if(m<=0&&p<=0)return i.copy(r);xd.subVectors(t,l);const _=hs.dot(xd),x=ps.dot(xd);if(_>=0&&x<=_)return i.copy(l);const S=m*x-_*p;if(S<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(hs,d);yd.subVectors(t,u);const b=hs.dot(yd),R=ps.dot(yd);if(R>=0&&b<=R)return i.copy(u);const D=b*p-m*R;if(D<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(r).addScaledVector(ps,h);const M=_*R-b*x;if(M<=0&&x-_>=0&&b-R>=0)return V_.subVectors(u,l),h=(x-_)/(x-_+(b-R)),i.copy(l).addScaledVector(V_,h);const g=1/(M+D+S);return d=D*g,h=S*g,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const G0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},_c={h:0,s:0,l:0};function bd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ge{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=cS(t,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=bd(d,u,t+1/3),this.g=bd(d,u,t),this.b=bd(d,u,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const r=G0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Ce.workingToColorSpace(Ln.copy(this),t),Math.round(Ee(Ln.r*255,0,255))*65536+Math.round(Ee(Ln.g*255,0,255))*256+Math.round(Ee(Ln.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=_<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=hi){Ce.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,l=Ln.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(_c);const r=sd(Ia.h,_c.h,i),l=sd(Ia.s,_c.s,i),u=sd(Ia.l,_c.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new ge;ge.NAMES=G0;let TS=0;class Os extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=Ts,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=zd,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Id&&(r.blendSrc=this.blendSrc),this.blendDst!==zd&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ra extends Os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=w0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new nt,vc=new xe;let AS=0;class jn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=bh,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(t),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Pi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=He(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Pi(i,this.array)),i}setX(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Pi(i,this.array)),i}setY(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Pi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Pi(i,this.array)),i}setW(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array),u=He(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bh&&(t.usage=this.usage),t}}class V0 extends jn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class k0 extends jn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Yn extends jn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let RS=0;const di=new je,Td=new On,ms=new nt,ii=new Er,Po=new Er,Sn=new nt;class Hn extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(F0(t)?k0:V0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new de().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return Td.lookAt(t),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Yn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ii.min,Po.min),ii.expandByPoint(Sn),Sn.addVectors(ii.max,Po.max),ii.expandByPoint(Sn)):(ii.expandByPoint(Po.min),ii.expandByPoint(Po.max))}ii.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Sn.fromBufferAttribute(h,p),m&&(ms.fromBufferAttribute(t,p),Sn.add(ms)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let tt=0;tt<r.count;tt++)h[tt]=new nt,m[tt]=new nt;const p=new nt,_=new nt,x=new nt,S=new xe,b=new xe,R=new xe,D=new nt,M=new nt;function g(tt,O,T){p.fromBufferAttribute(r,tt),_.fromBufferAttribute(r,O),x.fromBufferAttribute(r,T),S.fromBufferAttribute(u,tt),b.fromBufferAttribute(u,O),R.fromBufferAttribute(u,T),_.sub(p),x.sub(p),b.sub(S),R.sub(S);const q=1/(b.x*R.y-R.x*b.y);isFinite(q)&&(D.copy(_).multiplyScalar(R.y).addScaledVector(x,-b.y).multiplyScalar(q),M.copy(x).multiplyScalar(b.x).addScaledVector(_,-R.x).multiplyScalar(q),h[tt].add(D),h[O].add(D),h[T].add(D),m[tt].add(M),m[O].add(M),m[T].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let tt=0,O=A.length;tt<O;++tt){const T=A[tt],q=T.start,j=T.count;for(let ht=q,lt=q+j;ht<lt;ht+=3)g(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}const B=new nt,L=new nt,F=new nt,w=new nt;function V(tt){F.fromBufferAttribute(l,tt),w.copy(F);const O=h[tt];B.copy(O),B.sub(F.multiplyScalar(F.dot(O))).normalize(),L.crossVectors(w,O);const q=L.dot(m[tt])<0?-1:1;d.setXYZW(tt,B.x,B.y,B.z,q)}for(let tt=0,O=A.length;tt<O;++tt){const T=A[tt],q=T.start,j=T.count;for(let ht=q,lt=q+j;ht<lt;ht+=3)V(t.getX(ht+0)),V(t.getX(ht+1)),V(t.getX(ht+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new jn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,b=r.count;S<b;S++)r.setXYZ(S,0,0,0);const l=new nt,u=new nt,d=new nt,h=new nt,m=new nt,p=new nt,_=new nt,x=new nt;if(t)for(let S=0,b=t.count;S<b;S+=3){const R=t.getX(S+0),D=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,D),d.fromBufferAttribute(i,M),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,M),h.add(_),m.add(_),p.add(_),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,b=i.count;S<b;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,x=h.normalized,S=new p.constructor(m.length*_);let b=0,R=0;for(let D=0,M=m.length;D<M;D++){h.isInterleavedBufferAttribute?b=m[D]*h.data.stride+h.offset:b=m[D]*_;for(let g=0;g<_;g++)S[R++]=p[b++]}return new jn(S,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,x=p.length;_<x;_++){const S=p[_],b=t(S,r);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,S=p.length;x<S;x++){const b=p[x];_.push(b.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],x=u[p];for(let S=0,b=x.length;S<b;S++)_.push(x[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const k_=new je,ur=new zh,xc=new Ns,X_=new nt,yc=new nt,Sc=new nt,Mc=new nt,Ad=new nt,Ec=new nt,W_=new nt,bc=new nt;class An extends On{constructor(t=new Hn,i=new ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Ec.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],x=u[m];_!==0&&(Ad.fromBufferAttribute(x,t),d?Ec.addScaledVector(Ad,_):Ec.addScaledVector(Ad.sub(i),_))}i.add(Ec)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(u),ur.copy(t.ray).recast(t.near),!(xc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(xc,X_)===null||ur.origin.distanceToSquared(X_)>(t.far-t.near)**2))&&(k_.copy(u).invert(),ur.copy(t.ray).applyMatrix4(k_),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,S=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,D=S.length;R<D;R++){const M=S[R],g=d[M.materialIndex],A=Math.max(M.start,b.start),B=Math.min(h.count,Math.min(M.start+M.count,b.start+b.count));for(let L=A,F=B;L<F;L+=3){const w=h.getX(L),V=h.getX(L+1),tt=h.getX(L+2);l=Tc(this,g,t,r,p,_,x,w,V,tt),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),D=Math.min(h.count,b.start+b.count);for(let M=R,g=D;M<g;M+=3){const A=h.getX(M),B=h.getX(M+1),L=h.getX(M+2);l=Tc(this,d,t,r,p,_,x,A,B,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,D=S.length;R<D;R++){const M=S[R],g=d[M.materialIndex],A=Math.max(M.start,b.start),B=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let L=A,F=B;L<F;L+=3){const w=L,V=L+1,tt=L+2;l=Tc(this,g,t,r,p,_,x,w,V,tt),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),D=Math.min(m.count,b.start+b.count);for(let M=R,g=D;M<g;M+=3){const A=M,B=M+1,L=M+2;l=Tc(this,d,t,r,p,_,x,A,B,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function CS(o,t,i,r,l,u,d,h){let m;if(t.side===qn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ka,h),m===null)return null;bc.copy(h),bc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(bc);return p<i.near||p>i.far?null:{distance:p,point:bc.clone(),object:o}}function Tc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,yc),o.getVertexPosition(m,Sc),o.getVertexPosition(p,Mc);const _=CS(o,t,i,r,yc,Sc,Mc,W_);if(_){const x=new nt;pi.getBarycoord(W_,yc,Sc,Mc,x),l&&(_.uv=pi.getInterpolatedAttribute(l,h,m,p,x,new xe)),u&&(_.uv1=pi.getInterpolatedAttribute(u,h,m,p,x,new xe)),d&&(_.normal=pi.getInterpolatedAttribute(d,h,m,p,x,new nt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new nt,materialIndex:0};pi.getNormal(yc,Sc,Mc,S.normal),_.face=S,_.barycoord=x}return _}class Jo extends Hn{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],x=[];let S=0,b=0;R("z","y","x",-1,-1,r,i,t,d,u,0),R("z","y","x",1,-1,r,i,-t,d,u,1),R("x","z","y",1,1,t,r,i,l,d,2),R("x","z","y",1,-1,t,r,-i,l,d,3),R("x","y","z",1,-1,t,i,r,l,u,4),R("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Yn(p,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(x,2));function R(D,M,g,A,B,L,F,w,V,tt,O){const T=L/V,q=F/tt,j=L/2,ht=F/2,lt=w/2,mt=V+1,I=tt+1;let at=0,K=0;const At=new nt;for(let N=0;N<I;N++){const it=N*q-ht;for(let Tt=0;Tt<mt;Tt++){const Rt=Tt*T-j;At[D]=Rt*A,At[M]=it*B,At[g]=lt,p.push(At.x,At.y,At.z),At[D]=0,At[M]=0,At[g]=w>0?1:-1,_.push(At.x,At.y,At.z),x.push(Tt/V),x.push(1-N/tt),at+=1}}for(let N=0;N<tt;N++)for(let it=0;it<V;it++){const Tt=S+it+mt*N,Rt=S+it+mt*(N+1),It=S+(it+1)+mt*(N+1),kt=S+(it+1)+mt*N;m.push(Tt,Rt,kt),m.push(Rt,It,kt),K+=6}h.addGroup(b,K,O),b+=K,S+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const r=Us(o[i]);for(const l in r)t[l]=r[l]}return t}function wS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function X0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const DS={clone:Us,merge:Fn};var US=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends Os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=US,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=wS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class W0 extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new nt,q_=new xe,j_=new xe;class Ei extends W0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Th*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Th*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,q_,j_),i.subVectors(j_,q_)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class NS extends On{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(gs,_s,t,i);l.layers=this.layers,this.add(l);const u=new Ei(gs,_s,t,i);u.layers=this.layers,this.add(u);const d=new Ei(gs,_s,t,i);d.layers=this.layers,this.add(d);const h=new Ei(gs,_s,t,i);h.layers=this.layers,this.add(h);const m=new Ei(gs,_s,t,i);m.layers=this.layers,this.add(m);const p=new Ei(gs,_s,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Vc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,x=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=D,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(x,S,b),t.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class q0 extends Nn{constructor(t=[],i=Cs,r,l,u,d,h,m,p,_){super(t,i,r,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class OS extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new q0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jo(5,5,5),u=new Xa({name:"CubemapFromEquirect",uniforms:Us(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Ha});u.uniforms.tEquirect.value=i;const d=new An(l,u),h=i.minFilter;return i.minFilter===yr&&(i.minFilter=Ti),new NS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class Vo extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PS={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const D of t.hand.values()){const M=i.getJointPose(D,r),g=this._getHandJoint(p,D);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=_.position.distanceTo(x.position),b=.02,R=.005;p.inputState.pinching&&S>b+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=b-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(PS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Vo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class BS extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new la,this.environmentIntensity=1,this.environmentRotation=new la,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class IS{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=bh,this.updateRanges=[],this.version=0,this.uuid=Va()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new nt;class Xc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.applyMatrix4(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.applyNormalMatrix(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.transformDirection(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Pi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=He(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Pi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Pi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Pi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Pi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),r=He(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array),u=He(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new jn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class j0 extends Os{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vs;const Bo=new nt,xs=new nt,ys=new nt,Ss=new xe,Io=new xe,Y0=new je,Ac=new nt,zo=new nt,Rc=new nt,Y_=new xe,Cd=new xe,Z_=new xe;class zS extends On{constructor(t=new j0){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Hn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new IS(i,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Xc(r,3,0,!1)),vs.setAttribute("uv",new Xc(r,2,3,!1))}this.geometry=vs,this.material=t,this.center=new xe(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Y0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-ys.z);const r=this.material.rotation;let l,u;r!==0&&(u=Math.cos(r),l=Math.sin(r));const d=this.center;Cc(Ac.set(-.5,-.5,0),ys,d,xs,l,u),Cc(zo.set(.5,-.5,0),ys,d,xs,l,u),Cc(Rc.set(.5,.5,0),ys,d,xs,l,u),Y_.set(0,0),Cd.set(1,0),Z_.set(1,1);let h=t.ray.intersectTriangle(Ac,zo,Rc,!1,Bo);if(h===null&&(Cc(zo.set(-.5,.5,0),ys,d,xs,l,u),Cd.set(0,1),h=t.ray.intersectTriangle(Ac,Rc,zo,!1,Bo),h===null))return;const m=t.ray.origin.distanceTo(Bo);m<t.near||m>t.far||i.push({distance:m,point:Bo.clone(),uv:pi.getInterpolation(Bo,Ac,zo,Rc,Y_,Cd,Z_,new xe),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cc(o,t,i,r,l,u){Ss.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Io.x=u*Ss.x-l*Ss.y,Io.y=l*Ss.x+u*Ss.y):Io.copy(Ss),o.copy(t),o.x+=Io.x,o.y+=Io.y,o.applyMatrix4(Y0)}class FS extends Nn{constructor(t=null,i=1,r=1,l,u,d,h,m,p=ai,_=ai,x,S){super(null,d,h,m,p,_,l,u,x,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K_ extends jn{constructor(t,i,r,l=1){super(t,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ms=new je,Q_=new je,wc=[],J_=new Er,HS=new je,Fo=new An,Ho=new Ns;class GS extends An{constructor(t,i,r){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new K_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,HS)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Er),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ms),J_.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(J_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ms),Ho.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(Ho)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=r.length+1,d=t*u+1;for(let h=0;h<r.length;h++)r[h]=l[d+h]}raycast(t,i){const r=this.matrixWorld,l=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(r),t.ray.intersectsSphere(Ho)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,Ms),Q_.multiplyMatrices(r,Ms),Fo.matrixWorld=Q_,Fo.raycast(t,wc);for(let d=0,h=wc.length;d<h;d++){const m=wc[d];m.instanceId=u,m.object=this,i.push(m)}wc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new K_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new FS(new Float32Array(l*this.count),l,this.count,Nh,Bi));const u=this.morphTexture.source.data.data;let d=0;for(let p=0;p<r.length;p++)d+=r[p];const h=this.geometry.morphTargetsRelative?1:1-d,m=l*t;u[m]=h,u.set(r,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wd=new nt,VS=new nt,kS=new de;class pr{constructor(t=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=wd.subVectors(r,i).cross(VS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(wd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||kS.getNormalMatrix(t),l=this.coplanarPoint(wd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Ns,XS=new xe(.5,.5),Dc=new nt;class Z0{constructor(t=new pr,i=new pr,r=new pr,l=new pr,u=new pr,d=new pr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ii,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],x=u[5],S=u[6],b=u[7],R=u[8],D=u[9],M=u[10],g=u[11],A=u[12],B=u[13],L=u[14],F=u[15];if(l[0].setComponents(p-d,b-_,g-R,F-A).normalize(),l[1].setComponents(p+d,b+_,g+R,F+A).normalize(),l[2].setComponents(p+h,b+x,g+D,F+B).normalize(),l[3].setComponents(p-h,b-x,g-D,F-B).normalize(),r)l[4].setComponents(m,S,M,L).normalize(),l[5].setComponents(p-m,b-S,g-M,F-L).normalize();else if(l[4].setComponents(p-m,b-S,g-M,F-L).normalize(),i===Ii)l[5].setComponents(p+m,b+S,g+M,F+L).normalize();else if(i===Vc)l[5].setComponents(m,S,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);const i=XS.distanceTo(t.center);return fr.radius=.7071067811865476+i,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Dc.x=l.normal.x>0?t.max.x:t.min.x,Dc.y=l.normal.y>0?t.max.y:t.min.y,Dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zo extends Os{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wc=new nt,qc=new nt,$_=new je,Go=new zh,Uc=new Ns,Dd=new nt,t0=new nt;class jc extends On{constructor(t=new Hn,i=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Wc.fromBufferAttribute(i,l-1),qc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Wc.distanceTo(qc);t.setAttribute("lineDistance",new Yn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=u,t.ray.intersectsSphere(Uc)===!1)return;$_.copy(l).invert(),Go.copy(t.ray).applyMatrix4($_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=r.index,S=r.attributes.position;if(_!==null){const b=Math.max(0,d.start),R=Math.min(_.count,d.start+d.count);for(let D=b,M=R-1;D<M;D+=p){const g=_.getX(D),A=_.getX(D+1),B=Lc(this,t,Go,m,g,A,D);B&&i.push(B)}if(this.isLineLoop){const D=_.getX(R-1),M=_.getX(b),g=Lc(this,t,Go,m,D,M,R-1);g&&i.push(g)}}else{const b=Math.max(0,d.start),R=Math.min(S.count,d.start+d.count);for(let D=b,M=R-1;D<M;D+=p){const g=Lc(this,t,Go,m,D,D+1,D);g&&i.push(g)}if(this.isLineLoop){const D=Lc(this,t,Go,m,R-1,b,R-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Lc(o,t,i,r,l,u,d){const h=o.geometry.attributes.position;if(Wc.fromBufferAttribute(h,l),qc.fromBufferAttribute(h,u),i.distanceSqToSegment(Wc,qc,Dd,t0)>r)return;Dd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Dd);if(!(p<t.near||p>t.far))return{distance:p,point:t0.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class WS extends jc{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class qS extends Nn{constructor(t,i,r,l,u,d,h,m,p){super(t,i,r,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class K0 extends Nn{constructor(t,i,r=Sr,l,u,d,h=ai,m=ai,p,_=qo,x=1){if(_!==qo&&_!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:x};super(S,l,u,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ih(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Q0 extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $o extends Hn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,x=t/h,S=i/m,b=[],R=[],D=[],M=[];for(let g=0;g<_;g++){const A=g*S-d;for(let B=0;B<p;B++){const L=B*x-u;R.push(L,-A,0),D.push(0,0,1),M.push(B/h),M.push(1-g/m)}}for(let g=0;g<m;g++)for(let A=0;A<h;A++){const B=A+p*g,L=A+p*(g+1),F=A+1+p*(g+1),w=A+1+p*g;b.push(B,L,w),b.push(L,F,w)}this.setIndex(b),this.setAttribute("position",new Yn(R,3)),this.setAttribute("normal",new Yn(D,3)),this.setAttribute("uv",new Yn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hh extends Hn{constructor(t=.5,i=1,r=32,l=1,u=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:d},r=Math.max(3,r),l=Math.max(1,l);const h=[],m=[],p=[],_=[];let x=t;const S=(i-t)/l,b=new nt,R=new xe;for(let D=0;D<=l;D++){for(let M=0;M<=r;M++){const g=u+M/r*d;b.x=x*Math.cos(g),b.y=x*Math.sin(g),m.push(b.x,b.y,b.z),p.push(0,0,1),R.x=(b.x/i+1)/2,R.y=(b.y/i+1)/2,_.push(R.x,R.y)}x+=S}for(let D=0;D<l;D++){const M=D*(r+1);for(let g=0;g<r;g++){const A=g+M,B=A,L=A+r+1,F=A+r+2,w=A+1;h.push(B,L,w),h.push(L,F,w)}}this.setIndex(h),this.setAttribute("position",new Yn(m,3)),this.setAttribute("normal",new Yn(p,3)),this.setAttribute("uv",new Yn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _r extends Hn{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const _=[],x=new nt,S=new nt,b=[],R=[],D=[],M=[];for(let g=0;g<=r;g++){const A=[],B=g/r;let L=0;g===0&&d===0?L=.5/i:g===r&&m===Math.PI&&(L=-.5/i);for(let F=0;F<=i;F++){const w=F/i;x.x=-t*Math.cos(l+w*u)*Math.sin(d+B*h),x.y=t*Math.cos(d+B*h),x.z=t*Math.sin(l+w*u)*Math.sin(d+B*h),R.push(x.x,x.y,x.z),S.copy(x).normalize(),D.push(S.x,S.y,S.z),M.push(w+L,1-B),A.push(p++)}_.push(A)}for(let g=0;g<r;g++)for(let A=0;A<i;A++){const B=_[g][A+1],L=_[g][A],F=_[g+1][A],w=_[g+1][A+1];(g!==0||d>0)&&b.push(B,L,w),(g!==r-1||m<Math.PI)&&b.push(L,F,w)}this.setIndex(b),this.setAttribute("position",new Yn(R,3)),this.setAttribute("normal",new Yn(D,3)),this.setAttribute("uv",new Yn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jS extends Os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YS extends Os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class J0 extends W0{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ZS extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const e0=new je;class KS{constructor(t,i,r=0,l=1/0){this.ray=new zh(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return e0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(e0),this}intersectObject(t,i=!0,r=[]){return Ah(t,this,r,i),r.sort(n0),r}intersectObjects(t,i=!0,r=[]){for(let l=0,u=t.length;l<u;l++)Ah(t[l],this,r,i);return r.sort(n0),r}}function n0(o,t){return o.distance-t.distance}function Ah(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const u=o.children;for(let d=0,h=u.length;d<h;d++)Ah(u[d],t,i,!0)}}function i0(o,t,i,r){const l=QS(r);switch(i){case P0:return o*t;case Nh:return o*t/l.components*l.byteLength;case Oh:return o*t/l.components*l.byteLength;case I0:return o*t*2/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case B0:return o*t*3/l.components*l.byteLength;case Ai:return o*t*4/l.components*l.byteLength;case Bh:return o*t*4/l.components*l.byteLength;case Bc:case Ic:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zc:case Fc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(t,8)/2;case th:case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case yh:case Sh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Mh:case Eh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function QS(o){switch(o){case oa:case U0:return{byteLength:1,components:1};case Xo:case L0:case Ko:return{byteLength:2,components:1};case Uh:case Lh:return{byteLength:2,components:4};case Sr:case Dh:case Bi:return{byteLength:4,components:1};case N0:case O0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $0(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function JS(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),h.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,_);else{x.sort((b,R)=>b.start-R.start);let S=0;for(let b=1;b<x.length;b++){const R=x[S],D=x[b];D.start<=R.start+R.count+1?R.count=Math.max(R.count,D.start+D.count-R.start):(++S,x[S]=D)}x.length=S+1;for(let b=0,R=x.length;b<R;b++){const D=x[b];o.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var $S=`#ifdef USE_ALPHAHASH
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
}`,me={alphahash_fragment:$S,alphahash_pars_fragment:tM,alphamap_fragment:eM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:aM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:fM,iridescence_fragment:dM,bumpmap_pars_fragment:hM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:yM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:bM,displacementmap_pars_vertex:TM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:wM,colorspace_pars_fragment:DM,envmap_fragment:UM,envmap_common_pars_fragment:LM,envmap_pars_fragment:NM,envmap_pars_vertex:OM,envmap_physical_pars_fragment:WM,envmap_vertex:PM,fog_vertex:BM,fog_pars_vertex:IM,fog_fragment:zM,fog_pars_fragment:FM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:kM,lights_pars_begin:XM,lights_toon_fragment:qM,lights_toon_pars_fragment:jM,lights_phong_fragment:YM,lights_phong_pars_fragment:ZM,lights_physical_fragment:KM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:$M,lights_fragment_end:tE,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:aE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:oE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:fE,morphcolor_vertex:dE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:_E,normal_pars_fragment:vE,normal_pars_vertex:xE,normal_vertex:yE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:TE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:wE,dithering_fragment:DE,dithering_pars_fragment:UE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:PE,shadowmap_vertex:BE,shadowmask_pars_fragment:IE,skinbase_vertex:zE,skinning_pars_vertex:FE,skinning_vertex:HE,skinnormal_vertex:GE,specularmap_fragment:VE,specularmap_pars_fragment:kE,tonemapping_fragment:XE,tonemapping_pars_fragment:WE,transmission_fragment:qE,transmission_pars_fragment:jE,uv_pars_fragment:YE,uv_pars_vertex:ZE,uv_vertex:KE,worldpos_vertex:QE,background_vert:JE,background_frag:$E,backgroundCube_vert:tb,backgroundCube_frag:eb,cube_vert:nb,cube_frag:ib,depth_vert:ab,depth_frag:rb,distanceRGBA_vert:sb,distanceRGBA_frag:ob,equirect_vert:lb,equirect_frag:cb,linedashed_vert:ub,linedashed_frag:fb,meshbasic_vert:db,meshbasic_frag:hb,meshlambert_vert:pb,meshlambert_frag:mb,meshmatcap_vert:gb,meshmatcap_frag:_b,meshnormal_vert:vb,meshnormal_frag:xb,meshphong_vert:yb,meshphong_frag:Sb,meshphysical_vert:Mb,meshphysical_frag:Eb,meshtoon_vert:bb,meshtoon_frag:Tb,points_vert:Ab,points_frag:Rb,shadow_vert:Cb,shadow_frag:wb,sprite_vert:Db,sprite_frag:Ub},Ht={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Oi={basic:{uniforms:Fn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Fn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ge(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Fn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Fn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Fn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ge(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Fn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Fn([Ht.points,Ht.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Fn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Fn([Ht.common,Ht.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Fn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Fn([Ht.sprite,Ht.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Fn([Ht.common,Ht.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Fn([Ht.lights,Ht.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Oi.physical={uniforms:Fn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Nc={r:0,b:0,g:0},dr=new la,Lb=new je;function Nb(o,t,i,r,l,u,d){const h=new ge(0);let m=u===!0?0:1,p,_,x=null,S=0,b=null;function R(B){let L=B.isScene===!0?B.background:null;return L&&L.isTexture&&(L=(B.backgroundBlurriness>0?i:t).get(L)),L}function D(B){let L=!1;const F=R(B);F===null?g(h,m):F&&F.isColor&&(g(F,1),L=!0);const w=o.xr.getEnvironmentBlendMode();w==="additive"?r.buffers.color.setClear(0,0,0,1,d):w==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(B,L){const F=R(L);F&&(F.isCubeTexture||F.mapping===Yc)?(_===void 0&&(_=new An(new Jo(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Us(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(w,V,tt){this.matrixWorld.copyPosition(tt.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),dr.copy(L.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(dr)),_.material.toneMapped=Ce.getTransfer(F.colorSpace)!==Fe,(x!==F||S!==F.version||b!==o.toneMapping)&&(_.material.needsUpdate=!0,x=F,S=F.version,b=o.toneMapping),_.layers.enableAll(),B.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new An(new $o(2,2),new Xa({name:"BackgroundMaterial",uniforms:Us(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(F.colorSpace)!==Fe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||S!==F.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,x=F,S=F.version,b=o.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function g(B,L){B.getRGB(Nc,X0(o)),r.buffers.color.setClear(Nc.r,Nc.g,Nc.b,L,d)}function A(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(B,L=1){h.set(B),m=L,g(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(B){m=B,g(h,m)},render:D,addToRenderList:M,dispose:A}}function Ob(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(T,q,j,ht,lt){let mt=!1;const I=x(ht,j,q);u!==I&&(u=I,p(u.object)),mt=b(T,ht,j,lt),mt&&R(T,ht,j,lt),lt!==null&&t.update(lt,o.ELEMENT_ARRAY_BUFFER),(mt||d)&&(d=!1,L(T,q,j,ht),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function m(){return o.createVertexArray()}function p(T){return o.bindVertexArray(T)}function _(T){return o.deleteVertexArray(T)}function x(T,q,j){const ht=j.wireframe===!0;let lt=r[T.id];lt===void 0&&(lt={},r[T.id]=lt);let mt=lt[q.id];mt===void 0&&(mt={},lt[q.id]=mt);let I=mt[ht];return I===void 0&&(I=S(m()),mt[ht]=I),I}function S(T){const q=[],j=[],ht=[];for(let lt=0;lt<i;lt++)q[lt]=0,j[lt]=0,ht[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:j,attributeDivisors:ht,object:T,attributes:{},index:null}}function b(T,q,j,ht){const lt=u.attributes,mt=q.attributes;let I=0;const at=j.getAttributes();for(const K in at)if(at[K].location>=0){const N=lt[K];let it=mt[K];if(it===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(it=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(it=T.instanceColor)),N===void 0||N.attribute!==it||it&&N.data!==it.data)return!0;I++}return u.attributesNum!==I||u.index!==ht}function R(T,q,j,ht){const lt={},mt=q.attributes;let I=0;const at=j.getAttributes();for(const K in at)if(at[K].location>=0){let N=mt[K];N===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(N=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(N=T.instanceColor));const it={};it.attribute=N,N&&N.data&&(it.data=N.data),lt[K]=it,I++}u.attributes=lt,u.attributesNum=I,u.index=ht}function D(){const T=u.newAttributes;for(let q=0,j=T.length;q<j;q++)T[q]=0}function M(T){g(T,0)}function g(T,q){const j=u.newAttributes,ht=u.enabledAttributes,lt=u.attributeDivisors;j[T]=1,ht[T]===0&&(o.enableVertexAttribArray(T),ht[T]=1),lt[T]!==q&&(o.vertexAttribDivisor(T,q),lt[T]=q)}function A(){const T=u.newAttributes,q=u.enabledAttributes;for(let j=0,ht=q.length;j<ht;j++)q[j]!==T[j]&&(o.disableVertexAttribArray(j),q[j]=0)}function B(T,q,j,ht,lt,mt,I){I===!0?o.vertexAttribIPointer(T,q,j,lt,mt):o.vertexAttribPointer(T,q,j,ht,lt,mt)}function L(T,q,j,ht){D();const lt=ht.attributes,mt=j.getAttributes(),I=q.defaultAttributeValues;for(const at in mt){const K=mt[at];if(K.location>=0){let At=lt[at];if(At===void 0&&(at==="instanceMatrix"&&T.instanceMatrix&&(At=T.instanceMatrix),at==="instanceColor"&&T.instanceColor&&(At=T.instanceColor)),At!==void 0){const N=At.normalized,it=At.itemSize,Tt=t.get(At);if(Tt===void 0)continue;const Rt=Tt.buffer,It=Tt.type,kt=Tt.bytesPerElement,st=It===o.INT||It===o.UNSIGNED_INT||At.gpuType===Dh;if(At.isInterleavedBufferAttribute){const St=At.data,Lt=St.stride,Qt=At.offset;if(St.isInstancedInterleavedBuffer){for(let Zt=0;Zt<K.locationSize;Zt++)g(K.location+Zt,St.meshPerAttribute);T.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Zt=0;Zt<K.locationSize;Zt++)M(K.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let Zt=0;Zt<K.locationSize;Zt++)B(K.location+Zt,it/K.locationSize,It,N,Lt*kt,(Qt+it/K.locationSize*Zt)*kt,st)}else{if(At.isInstancedBufferAttribute){for(let St=0;St<K.locationSize;St++)g(K.location+St,At.meshPerAttribute);T.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let St=0;St<K.locationSize;St++)M(K.location+St);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let St=0;St<K.locationSize;St++)B(K.location+St,it/K.locationSize,It,N,it*kt,it/K.locationSize*St*kt,st)}}else if(I!==void 0){const N=I[at];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(K.location,N);break;case 3:o.vertexAttrib3fv(K.location,N);break;case 4:o.vertexAttrib4fv(K.location,N);break;default:o.vertexAttrib1fv(K.location,N)}}}}A()}function F(){tt();for(const T in r){const q=r[T];for(const j in q){const ht=q[j];for(const lt in ht)_(ht[lt].object),delete ht[lt];delete q[j]}delete r[T]}}function w(T){if(r[T.id]===void 0)return;const q=r[T.id];for(const j in q){const ht=q[j];for(const lt in ht)_(ht[lt].object),delete ht[lt];delete q[j]}delete r[T.id]}function V(T){for(const q in r){const j=r[q];if(j[T.id]===void 0)continue;const ht=j[T.id];for(const lt in ht)_(ht[lt].object),delete ht[lt];delete j[T.id]}}function tt(){O(),d=!0,u!==l&&(u=l,p(u.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:tt,resetDefaultState:O,dispose:F,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:D,enableAttribute:M,disableUnusedAttributes:A}}function Pb(o,t,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,x){x!==0&&(o.drawArraysInstanced(r,p,_,x),i.update(_,r,x))}function h(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let b=0;for(let R=0;R<x;R++)b+=_[R];i.update(b,r,1)}function m(p,_,x,S){if(x===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let R=0;R<p.length;R++)d(p[R],_[R],S[R]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,x);let R=0;for(let D=0;D<x;D++)R+=_[D]*S[D];i.update(R,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Bb(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const V=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(V){return!(V!==Ai&&r.convert(V)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(V){const tt=V===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==oa&&r.convert(V)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Bi&&!tt)}function m(V){if(V==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=R>0,w=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:S,maxTextures:b,maxVertexTextures:R,maxTextureSize:D,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:A,maxVaryings:B,maxFragmentUniforms:L,vertexTextures:F,maxSamples:w}}function Ib(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new pr,h=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const b=x.length!==0||S||r!==0||l;return l=S,r=x.length,b},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=_(x,S,0)},this.setState=function(x,S,b){const R=x.clippingPlanes,D=x.clipIntersection,M=x.clipShadows,g=o.get(x);if(!l||R===null||R.length===0||u&&!M)u?_(null):p();else{const A=u?0:r,B=A*4;let L=g.clippingState||null;m.value=L,L=_(R,S,B,b);for(let F=0;F!==B;++F)L[F]=i[F];g.clippingState=L,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=A}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(x,S,b,R){const D=x!==null?x.length:0;let M=null;if(D!==0){if(M=m.value,R!==!0||M===null){const g=b+D*4,A=S.matrixWorldInverse;h.getNormalMatrix(A),(M===null||M.length<g)&&(M=new Float32Array(g));for(let B=0,L=b;B!==D;++B,L+=4)d.copy(x[B]).applyMatrix4(A,h),d.normal.toArray(M,L),M[L+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,M}}function zb(o){let t=new WeakMap;function i(d,h){return h===qd?d.mapping=Cs:h===jd&&(d.mapping=ws),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===qd||h===jd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new OS(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const bs=4,a0=[.125,.215,.35,.446,.526,.582],vr=20,Ud=new J0,r0=new ge;let Ld=null,Nd=0,Od=0,Pd=!1;const mr=(1+Math.sqrt(5))/2,Es=1/mr,s0=[new nt(-mr,Es,0),new nt(mr,Es,0),new nt(-Es,0,mr),new nt(Es,0,mr),new nt(0,mr,-Es),new nt(0,mr,Es),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],Fb=new nt;class o0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=Fb}=u;Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ld,Nd,Od),this._renderer.xr.enabled=Pd,t.scissorTest=!1,Oc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ko,format:Ai,colorSpace:Ds,depthBuffer:!1},l=l0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hb(u)),this._blurMaterial=Gb(u,t,i)}return l}_compileMaterial(t){const i=new An(this._lodPlanes[0],t);this._renderer.compile(i,Ud)}_sceneToCubeUV(t,i,r,l,u){const m=new Ei(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,S=x.autoClear,b=x.toneMapping;x.getClearColor(r0),x.toneMapping=Ga,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null));const D=new ra({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),M=new An(new Jo,D);let g=!1;const A=t.background;A?A.isColor&&(D.color.copy(A),t.background=null,g=!0):(D.color.copy(r0),g=!0);for(let B=0;B<6;B++){const L=B%3;L===0?(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[B],u.y,u.z)):L===1?(m.up.set(0,0,p[B]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[B],u.z)):(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[B]));const F=this._cubeSize;Oc(l,L*F,B>2?F:0,F,F),x.setRenderTarget(l),g&&x.render(M,m),x.render(t,m)}M.geometry.dispose(),M.material.dispose(),x.toneMapping=b,x.autoClear=S,t.background=A}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Cs||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c0());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new An(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Oc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Ud)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=s0[(l-u-1)%s0.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new An(this._lodPlanes[l],p),S=p.uniforms,b=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*vr-1),D=u/R,M=isFinite(u)?1+Math.floor(_*D):vr;M>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${vr}`);const g=[];let A=0;for(let V=0;V<vr;++V){const tt=V/D,O=Math.exp(-tt*tt/2);g.push(O),V===0?A+=O:V<M&&(A+=2*O)}for(let V=0;V<g.length;V++)g[V]=g[V]/A;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=g,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:B}=this;S.dTheta.value=R,S.mipInt.value=B-r;const L=this._sizeLods[l],F=3*L*(l>B-bs?l-B+bs:0),w=4*(this._cubeSize-L);Oc(i,F,w,3*L,2*L),m.setRenderTarget(i),m.render(x,Ud)}}function Hb(o){const t=[],i=[],r=[];let l=o;const u=o-bs+1+a0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-bs?m=a0[d-o+bs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),_=-p,x=1+p,S=[_,_,x,_,x,x,_,_,x,x,_,x],b=6,R=6,D=3,M=2,g=1,A=new Float32Array(D*R*b),B=new Float32Array(M*R*b),L=new Float32Array(g*R*b);for(let w=0;w<b;w++){const V=w%3*2/3-1,tt=w>2?0:-1,O=[V,tt,0,V+2/3,tt,0,V+2/3,tt+1,0,V,tt,0,V+2/3,tt+1,0,V,tt+1,0];A.set(O,D*R*w),B.set(S,M*R*w);const T=[w,w,w,w,w,w];L.set(T,g*R*w)}const F=new Hn;F.setAttribute("position",new jn(A,D)),F.setAttribute("uv",new jn(B,M)),F.setAttribute("faceIndex",new jn(L,g)),t.push(F),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function l0(o,t,i){const r=new Mr(o,t,i);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Oc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function Gb(o,t,i){const r=new Float32Array(vr),l=new nt(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Gh(),fragmentShader:`

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
	`}function Vb(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===qd||m===jd,_=m===Cs||m===ws;if(p||_){let x=t.get(h);const S=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new o0(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const b=h.image;return p&&b&&b.height>0||_&&b&&l(b)?(i===null&&(i=new o0(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function kb(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Yo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Xb(o,t,i,r){const l={},u=new WeakMap;function d(x){const S=x.target;S.index!==null&&t.remove(S.index);for(const R in S.attributes)t.remove(S.attributes[R]);S.removeEventListener("dispose",d),delete l[S.id];const b=u.get(S);b&&(t.remove(b),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(x,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const b in S)t.update(S[b],o.ARRAY_BUFFER)}function p(x){const S=[],b=x.index,R=x.attributes.position;let D=0;if(b!==null){const A=b.array;D=b.version;for(let B=0,L=A.length;B<L;B+=3){const F=A[B+0],w=A[B+1],V=A[B+2];S.push(F,w,w,V,V,F)}}else if(R!==void 0){const A=R.array;D=R.version;for(let B=0,L=A.length/3-1;B<L;B+=3){const F=B+0,w=B+1,V=B+2;S.push(F,w,w,V,V,F)}}else return;const M=new(F0(S)?k0:V0)(S,1);M.version=D;const g=u.get(x);g&&t.remove(g),u.set(x,M)}function _(x){const S=u.get(x);if(S){const b=x.index;b!==null&&S.version<b.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function Wb(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,b){o.drawElements(r,b,u,S*d),i.update(b,r,1)}function p(S,b,R){R!==0&&(o.drawElementsInstanced(r,b,u,S*d,R),i.update(b,r,R))}function _(S,b,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,u,S,0,R);let M=0;for(let g=0;g<R;g++)M+=b[g];i.update(M,r,1)}function x(S,b,R,D){if(R===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<S.length;g++)p(S[g]/d,b[g],D[g]);else{M.multiDrawElementsInstancedWEBGL(r,b,0,u,S,0,D,0,R);let g=0;for(let A=0;A<R;A++)g+=b[A]*D[A];i.update(g,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function qb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function jb(o,t,i){const r=new WeakMap,l=new sn;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let S=r.get(h);if(S===void 0||S.count!==x){let O=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",O)};S!==void 0&&S.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],g=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let B=0;b===!0&&(B=1),R===!0&&(B=2),D===!0&&(B=3);let L=h.attributes.position.count*B,F=1;L>t.maxTextureSize&&(F=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*F*4*x),V=new H0(w,L,F,x);V.type=Bi,V.needsUpdate=!0;const tt=B*4;for(let T=0;T<x;T++){const q=M[T],j=g[T],ht=A[T],lt=L*F*4*T;for(let mt=0;mt<q.count;mt++){const I=mt*tt;b===!0&&(l.fromBufferAttribute(q,mt),w[lt+I+0]=l.x,w[lt+I+1]=l.y,w[lt+I+2]=l.z,w[lt+I+3]=0),R===!0&&(l.fromBufferAttribute(j,mt),w[lt+I+4]=l.x,w[lt+I+5]=l.y,w[lt+I+6]=l.z,w[lt+I+7]=0),D===!0&&(l.fromBufferAttribute(ht,mt),w[lt+I+8]=l.x,w[lt+I+9]=l.y,w[lt+I+10]=l.z,w[lt+I+11]=ht.itemSize===4?l.w:1)}}S={count:x,texture:V,size:new xe(L,F)},r.set(h,S),h.addEventListener("dispose",O)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let D=0;D<p.length;D++)b+=p[D];const R=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function Yb(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const tv=new Nn,f0=new K0(1,1),ev=new H0,nv=new _S,iv=new q0,d0=[],h0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);function Ps(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=d0[l];if(u===void 0&&(u=new Float32Array(l),d0[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Zc(o,t){let i=h0[t];i===void 0&&(i=new Int32Array(t),h0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Zb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Kb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function Qb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function Jb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function $b(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;g0.set(r),o.uniformMatrix2fv(this.addr,!1,g0),gn(i,r)}}function tT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;m0.set(r),o.uniformMatrix3fv(this.addr,!1,m0),gn(i,r)}}function eT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;p0.set(r),o.uniformMatrix4fv(this.addr,!1,p0),gn(i,r)}}function nT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function iT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function sT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function uT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(f0.compareFunction=z0,u=f0):u=tv,i.setTexture2D(t||u,l)}function fT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||nv,l)}function dT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||iv,l)}function hT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||ev,l)}function pT(o){switch(o){case 5126:return Zb;case 35664:return Kb;case 35665:return Qb;case 35666:return Jb;case 35674:return $b;case 35675:return tT;case 35676:return eT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return hT}}function mT(o,t){o.uniform1fv(this.addr,t)}function gT(o,t){const i=Ps(t,this.size,2);o.uniform2fv(this.addr,i)}function _T(o,t){const i=Ps(t,this.size,3);o.uniform3fv(this.addr,i)}function vT(o,t){const i=Ps(t,this.size,4);o.uniform4fv(this.addr,i)}function xT(o,t){const i=Ps(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yT(o,t){const i=Ps(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ST(o,t){const i=Ps(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function MT(o,t){o.uniform1iv(this.addr,t)}function ET(o,t){o.uniform2iv(this.addr,t)}function bT(o,t){o.uniform3iv(this.addr,t)}function TT(o,t){o.uniform4iv(this.addr,t)}function AT(o,t){o.uniform1uiv(this.addr,t)}function RT(o,t){o.uniform2uiv(this.addr,t)}function CT(o,t){o.uniform3uiv(this.addr,t)}function wT(o,t){o.uniform4uiv(this.addr,t)}function DT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||tv,u[d])}function UT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||nv,u[d])}function LT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||iv,u[d])}function NT(o,t,i){const r=this.cache,l=t.length,u=Zc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||ev,u[d])}function OT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return bT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}class PT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class BT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class IT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function _0(o,t){o.seq.push(t),o.map[t.id]=t}function zT(o,t,i){const r=o.name,l=r.length;for(Bd.lastIndex=0;;){const u=Bd.exec(r),d=Bd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){_0(i,p===void 0?new PT(h,o,t):new BT(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new IT(h),_0(i,x)),i=x}}}class Hc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);zT(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function v0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const FT=37297;let HT=0;function GT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const x0=new de;function VT(o){Ce._getMatrix(x0,Ce.workingColorSpace,o);const t=`mat3( ${x0.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Gc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function y0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+GT(o.getShaderSource(t),h)}else return u}function kT(o,t){const i=VT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function XT(o,t){let i;switch(t){case Xy:i="Linear";break;case Wy:i="Reinhard";break;case qy:i="Cineon";break;case jy:i="ACESFilmic";break;case Zy:i="AgX";break;case Ky:i="Neutral";break;case Yy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new nt;function WT(){Ce.getLuminanceCoefficients(Pc);const o=Pc.x.toFixed(4),t=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function jT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function YT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function ko(o){return o!==""}function S0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function M0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(ZT,QT)}const KT=new Map;function QT(o,t){let i=me[t];if(i===void 0){const r=KT.get(t);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Rh(i)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E0(o){return o.replace(JT,$T)}function $T(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function b0(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function t1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===C0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ey?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function e1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Cs:case ws:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n1(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function i1(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case w0:t="ENVMAP_BLENDING_MULTIPLY";break;case Vy:t="ENVMAP_BLENDING_MIX";break;case ky:t="ENVMAP_BLENDING_ADD";break}return t}function a1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function r1(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=t1(i),p=e1(i),_=n1(i),x=i1(i),S=a1(i),b=qT(i),R=jT(u),D=l.createProgram();let M,g,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(ko).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(ko).join(`
`),g.length>0&&(g+=`
`)):(M=[b0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),g=[b0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?me.tonemapping_pars_fragment:"",i.toneMapping!==Ga?XT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,kT("linearToOutputTexel",i.outputColorSpace),WT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),d=Rh(d),d=S0(d,i),d=M0(d,i),h=Rh(h),h=S0(h,i),h=M0(h,i),d=E0(d),h=E0(h),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===D_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const B=A+M+d,L=A+g+h,F=v0(l,l.VERTEX_SHADER,B),w=v0(l,l.FRAGMENT_SHADER,L);l.attachShader(D,F),l.attachShader(D,w),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function V(q){if(o.debug.checkShaderErrors){const j=l.getProgramInfoLog(D)||"",ht=l.getShaderInfoLog(F)||"",lt=l.getShaderInfoLog(w)||"",mt=j.trim(),I=ht.trim(),at=lt.trim();let K=!0,At=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,F,w);else{const N=y0(l,F,"vertex"),it=y0(l,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+mt+`
`+N+`
`+it)}else mt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",mt):(I===""||at==="")&&(At=!1);At&&(q.diagnostics={runnable:K,programLog:mt,vertexShader:{log:I,prefix:M},fragmentShader:{log:at,prefix:g}})}l.deleteShader(F),l.deleteShader(w),tt=new Hc(l,D),O=YT(l,D)}let tt;this.getUniforms=function(){return tt===void 0&&V(this),tt};let O;this.getAttributes=function(){return O===void 0&&V(this),O};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(D,FT)),T},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=F,this.fragmentShader=w,this}let s1=0;class o1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new l1(t),i.set(t,r)),r}}class l1{constructor(t){this.id=s1++,this.code=t,this.usedTimes=0}}function c1(o,t,i,r,l,u,d){const h=new Fh,m=new o1,p=new Set,_=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let b=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(O){return p.add(O),O===0?"uv":`uv${O}`}function M(O,T,q,j,ht){const lt=j.fog,mt=ht.geometry,I=O.isMeshStandardMaterial?j.environment:null,at=(O.isMeshStandardMaterial?i:t).get(O.envMap||I),K=at&&at.mapping===Yc?at.image.height:null,At=R[O.type];O.precision!==null&&(b=l.getMaxPrecision(O.precision),b!==O.precision&&console.warn("THREE.WebGLProgram.getParameters:",O.precision,"not supported, using",b,"instead."));const N=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,it=N!==void 0?N.length:0;let Tt=0;mt.morphAttributes.position!==void 0&&(Tt=1),mt.morphAttributes.normal!==void 0&&(Tt=2),mt.morphAttributes.color!==void 0&&(Tt=3);let Rt,It,kt,st;if(At){const Te=Oi[At];Rt=Te.vertexShader,It=Te.fragmentShader}else Rt=O.vertexShader,It=O.fragmentShader,m.update(O),kt=m.getVertexShaderID(O),st=m.getFragmentShaderID(O);const St=o.getRenderTarget(),Lt=o.state.buffers.depth.getReversed(),Qt=ht.isInstancedMesh===!0,Zt=ht.isBatchedMesh===!0,ue=!!O.map,Je=!!O.matcap,G=!!at,we=!!O.aoMap,ce=!!O.lightMap,ee=!!O.bumpMap,Vt=!!O.normalMap,Oe=!!O.displacementMap,Wt=!!O.emissiveMap,oe=!!O.metalnessMap,We=!!O.roughnessMap,ke=O.anisotropy>0,v=O.clearcoat>0,y=O.dispersion>0,P=O.iridescence>0,W=O.sheen>0,k=O.transmission>0,X=ke&&!!O.anisotropyMap,pt=v&&!!O.clearcoatMap,ut=v&&!!O.clearcoatNormalMap,yt=v&&!!O.clearcoatRoughnessMap,_t=P&&!!O.iridescenceMap,gt=P&&!!O.iridescenceThicknessMap,Et=W&&!!O.sheenColorMap,Ut=W&&!!O.sheenRoughnessMap,Bt=!!O.specularMap,Nt=!!O.specularColorMap,ne=!!O.specularIntensityMap,Y=k&&!!O.transmissionMap,wt=k&&!!O.thicknessMap,Ot=!!O.gradientMap,Gt=!!O.alphaMap,Ct=O.alphaTest>0,Mt=!!O.alphaHash,jt=!!O.extensions;let le=Ga;O.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(le=o.toneMapping);const Ue={shaderID:At,shaderType:O.type,shaderName:O.name,vertexShader:Rt,fragmentShader:It,defines:O.defines,customVertexShaderID:kt,customFragmentShaderID:st,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:b,batching:Zt,batchingColor:Zt&&ht._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&ht.instanceColor!==null,instancingMorph:Qt&&ht.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ds,alphaToCoverage:!!O.alphaToCoverage,map:ue,matcap:Je,envMap:G,envMapMode:G&&at.mapping,envMapCubeUVHeight:K,aoMap:we,lightMap:ce,bumpMap:ee,normalMap:Vt,displacementMap:S&&Oe,emissiveMap:Wt,normalMapObjectSpace:Vt&&O.normalMapType===eS,normalMapTangentSpace:Vt&&O.normalMapType===tS,metalnessMap:oe,roughnessMap:We,anisotropy:ke,anisotropyMap:X,clearcoat:v,clearcoatMap:pt,clearcoatNormalMap:ut,clearcoatRoughnessMap:yt,dispersion:y,iridescence:P,iridescenceMap:_t,iridescenceThicknessMap:gt,sheen:W,sheenColorMap:Et,sheenRoughnessMap:Ut,specularMap:Bt,specularColorMap:Nt,specularIntensityMap:ne,transmission:k,transmissionMap:Y,thicknessMap:wt,gradientMap:Ot,opaque:O.transparent===!1&&O.blending===Ts&&O.alphaToCoverage===!1,alphaMap:Gt,alphaTest:Ct,alphaHash:Mt,combine:O.combine,mapUv:ue&&D(O.map.channel),aoMapUv:we&&D(O.aoMap.channel),lightMapUv:ce&&D(O.lightMap.channel),bumpMapUv:ee&&D(O.bumpMap.channel),normalMapUv:Vt&&D(O.normalMap.channel),displacementMapUv:Oe&&D(O.displacementMap.channel),emissiveMapUv:Wt&&D(O.emissiveMap.channel),metalnessMapUv:oe&&D(O.metalnessMap.channel),roughnessMapUv:We&&D(O.roughnessMap.channel),anisotropyMapUv:X&&D(O.anisotropyMap.channel),clearcoatMapUv:pt&&D(O.clearcoatMap.channel),clearcoatNormalMapUv:ut&&D(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&D(O.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&D(O.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&D(O.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&D(O.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&D(O.sheenRoughnessMap.channel),specularMapUv:Bt&&D(O.specularMap.channel),specularColorMapUv:Nt&&D(O.specularColorMap.channel),specularIntensityMapUv:ne&&D(O.specularIntensityMap.channel),transmissionMapUv:Y&&D(O.transmissionMap.channel),thicknessMapUv:wt&&D(O.thicknessMap.channel),alphaMapUv:Gt&&D(O.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(Vt||ke),vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:ht.isPoints===!0&&!!mt.attributes.uv&&(ue||Gt),fog:!!lt,useFog:O.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:O.flatShading===!0&&O.wireframe===!1,sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Lt,skinning:ht.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Tt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:O.dithering,shadowMapEnabled:o.shadowMap.enabled&&q.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,decodeVideoTexture:ue&&O.map.isVideoTexture===!0&&Ce.getTransfer(O.map.colorSpace)===Fe,decodeVideoTextureEmissive:Wt&&O.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(O.emissiveMap.colorSpace)===Fe,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===bi,flipSided:O.side===qn,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:jt&&O.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&O.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return Ue.vertexUv1s=p.has(1),Ue.vertexUv2s=p.has(2),Ue.vertexUv3s=p.has(3),p.clear(),Ue}function g(O){const T=[];if(O.shaderID?T.push(O.shaderID):(T.push(O.customVertexShaderID),T.push(O.customFragmentShaderID)),O.defines!==void 0)for(const q in O.defines)T.push(q),T.push(O.defines[q]);return O.isRawShaderMaterial===!1&&(A(T,O),B(T,O),T.push(o.outputColorSpace)),T.push(O.customProgramCacheKey),T.join()}function A(O,T){O.push(T.precision),O.push(T.outputColorSpace),O.push(T.envMapMode),O.push(T.envMapCubeUVHeight),O.push(T.mapUv),O.push(T.alphaMapUv),O.push(T.lightMapUv),O.push(T.aoMapUv),O.push(T.bumpMapUv),O.push(T.normalMapUv),O.push(T.displacementMapUv),O.push(T.emissiveMapUv),O.push(T.metalnessMapUv),O.push(T.roughnessMapUv),O.push(T.anisotropyMapUv),O.push(T.clearcoatMapUv),O.push(T.clearcoatNormalMapUv),O.push(T.clearcoatRoughnessMapUv),O.push(T.iridescenceMapUv),O.push(T.iridescenceThicknessMapUv),O.push(T.sheenColorMapUv),O.push(T.sheenRoughnessMapUv),O.push(T.specularMapUv),O.push(T.specularColorMapUv),O.push(T.specularIntensityMapUv),O.push(T.transmissionMapUv),O.push(T.thicknessMapUv),O.push(T.combine),O.push(T.fogExp2),O.push(T.sizeAttenuation),O.push(T.morphTargetsCount),O.push(T.morphAttributeCount),O.push(T.numDirLights),O.push(T.numPointLights),O.push(T.numSpotLights),O.push(T.numSpotLightMaps),O.push(T.numHemiLights),O.push(T.numRectAreaLights),O.push(T.numDirLightShadows),O.push(T.numPointLightShadows),O.push(T.numSpotLightShadows),O.push(T.numSpotLightShadowsWithMaps),O.push(T.numLightProbes),O.push(T.shadowMapType),O.push(T.toneMapping),O.push(T.numClippingPlanes),O.push(T.numClipIntersection),O.push(T.depthPacking)}function B(O,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),T.batchingColor&&h.enable(21),T.gradientMap&&h.enable(22),O.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.reversedDepthBuffer&&h.enable(4),T.skinning&&h.enable(5),T.morphTargets&&h.enable(6),T.morphNormals&&h.enable(7),T.morphColors&&h.enable(8),T.premultipliedAlpha&&h.enable(9),T.shadowMapEnabled&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.decodeVideoTextureEmissive&&h.enable(20),T.alphaToCoverage&&h.enable(21),O.push(h.mask)}function L(O){const T=R[O.type];let q;if(T){const j=Oi[T];q=DS.clone(j.uniforms)}else q=O.uniforms;return q}function F(O,T){let q;for(let j=0,ht=_.length;j<ht;j++){const lt=_[j];if(lt.cacheKey===T){q=lt,++q.usedTimes;break}}return q===void 0&&(q=new r1(o,T,O,u),_.push(q)),q}function w(O){if(--O.usedTimes===0){const T=_.indexOf(O);_[T]=_[_.length-1],_.pop(),O.destroy()}}function V(O){m.remove(O)}function tt(){m.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:L,acquireProgram:F,releaseProgram:w,releaseShaderCache:V,programs:_,dispose:tt}}function u1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function f1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function T0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function A0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(x,S,b,R,D,M){let g=o[t];return g===void 0?(g={id:x.id,object:x,geometry:S,material:b,groupOrder:R,renderOrder:x.renderOrder,z:D,group:M},o[t]=g):(g.id=x.id,g.object=x,g.geometry=S,g.material=b,g.groupOrder=R,g.renderOrder=x.renderOrder,g.z=D,g.group=M),t++,g}function h(x,S,b,R,D,M){const g=d(x,S,b,R,D,M);b.transmission>0?r.push(g):b.transparent===!0?l.push(g):i.push(g)}function m(x,S,b,R,D,M){const g=d(x,S,b,R,D,M);b.transmission>0?r.unshift(g):b.transparent===!0?l.unshift(g):i.unshift(g)}function p(x,S){i.length>1&&i.sort(x||f1),r.length>1&&r.sort(S||T0),l.length>1&&l.sort(S||T0)}function _(){for(let x=t,S=o.length;x<S;x++){const b=o[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function d1(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new A0,o.set(r,[d])):l>=u.length?(d=new A0,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function h1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new nt,color:new ge};break;case"SpotLight":i={position:new nt,direction:new nt,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[t.id]=i,i}}}function p1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let m1=0;function g1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _1(o){const t=new h1,i=p1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new nt);const l=new nt,u=new je,d=new je;function h(p){let _=0,x=0,S=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let b=0,R=0,D=0,M=0,g=0,A=0,B=0,L=0,F=0,w=0,V=0;p.sort(g1);for(let O=0,T=p.length;O<T;O++){const q=p[O],j=q.color,ht=q.intensity,lt=q.distance,mt=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)_+=j.r*ht,x+=j.g*ht,S+=j.b*ht;else if(q.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(q.sh.coefficients[I],ht);V++}else if(q.isDirectionalLight){const I=t.get(q);if(I.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const at=q.shadow,K=i.get(q);K.shadowIntensity=at.intensity,K.shadowBias=at.bias,K.shadowNormalBias=at.normalBias,K.shadowRadius=at.radius,K.shadowMapSize=at.mapSize,r.directionalShadow[b]=K,r.directionalShadowMap[b]=mt,r.directionalShadowMatrix[b]=q.shadow.matrix,A++}r.directional[b]=I,b++}else if(q.isSpotLight){const I=t.get(q);I.position.setFromMatrixPosition(q.matrixWorld),I.color.copy(j).multiplyScalar(ht),I.distance=lt,I.coneCos=Math.cos(q.angle),I.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),I.decay=q.decay,r.spot[D]=I;const at=q.shadow;if(q.map&&(r.spotLightMap[F]=q.map,F++,at.updateMatrices(q),q.castShadow&&w++),r.spotLightMatrix[D]=at.matrix,q.castShadow){const K=i.get(q);K.shadowIntensity=at.intensity,K.shadowBias=at.bias,K.shadowNormalBias=at.normalBias,K.shadowRadius=at.radius,K.shadowMapSize=at.mapSize,r.spotShadow[D]=K,r.spotShadowMap[D]=mt,L++}D++}else if(q.isRectAreaLight){const I=t.get(q);I.color.copy(j).multiplyScalar(ht),I.halfWidth.set(q.width*.5,0,0),I.halfHeight.set(0,q.height*.5,0),r.rectArea[M]=I,M++}else if(q.isPointLight){const I=t.get(q);if(I.color.copy(q.color).multiplyScalar(q.intensity),I.distance=q.distance,I.decay=q.decay,q.castShadow){const at=q.shadow,K=i.get(q);K.shadowIntensity=at.intensity,K.shadowBias=at.bias,K.shadowNormalBias=at.normalBias,K.shadowRadius=at.radius,K.shadowMapSize=at.mapSize,K.shadowCameraNear=at.camera.near,K.shadowCameraFar=at.camera.far,r.pointShadow[R]=K,r.pointShadowMap[R]=mt,r.pointShadowMatrix[R]=q.shadow.matrix,B++}r.point[R]=I,R++}else if(q.isHemisphereLight){const I=t.get(q);I.skyColor.copy(q.color).multiplyScalar(ht),I.groundColor.copy(q.groundColor).multiplyScalar(ht),r.hemi[g]=I,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ht.LTC_FLOAT_1,r.rectAreaLTC2=Ht.LTC_FLOAT_2):(r.rectAreaLTC1=Ht.LTC_HALF_1,r.rectAreaLTC2=Ht.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=S;const tt=r.hash;(tt.directionalLength!==b||tt.pointLength!==R||tt.spotLength!==D||tt.rectAreaLength!==M||tt.hemiLength!==g||tt.numDirectionalShadows!==A||tt.numPointShadows!==B||tt.numSpotShadows!==L||tt.numSpotMaps!==F||tt.numLightProbes!==V)&&(r.directional.length=b,r.spot.length=D,r.rectArea.length=M,r.point.length=R,r.hemi.length=g,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=L+F-w,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=V,tt.directionalLength=b,tt.pointLength=R,tt.spotLength=D,tt.rectAreaLength=M,tt.hemiLength=g,tt.numDirectionalShadows=A,tt.numPointShadows=B,tt.numSpotShadows=L,tt.numSpotMaps=F,tt.numLightProbes=V,r.version=m1++)}function m(p,_){let x=0,S=0,b=0,R=0,D=0;const M=_.matrixWorldInverse;for(let g=0,A=p.length;g<A;g++){const B=p[g];if(B.isDirectionalLight){const L=r.directional[x];L.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),x++}else if(B.isSpotLight){const L=r.spot[b];L.position.setFromMatrixPosition(B.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),b++}else if(B.isRectAreaLight){const L=r.rectArea[R];L.position.setFromMatrixPosition(B.matrixWorld),L.position.applyMatrix4(M),d.identity(),u.copy(B.matrixWorld),u.premultiply(M),d.extractRotation(u),L.halfWidth.set(B.width*.5,0,0),L.halfHeight.set(0,B.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),R++}else if(B.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(B.matrixWorld),L.position.applyMatrix4(M),S++}else if(B.isHemisphereLight){const L=r.hemi[D];L.direction.setFromMatrixPosition(B.matrixWorld),L.direction.transformDirection(M),D++}}}return{setup:h,setupView:m,state:r}}function R0(o){const t=new _1(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function v1(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new R0(o),t.set(l,[h])):u>=d.length?(h=new R0(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const x1=`void main() {
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
}`;function S1(o,t,i){let r=new Z0;const l=new xe,u=new xe,d=new sn,h=new jS({depthPacking:$y}),m=new YS,p={},_=i.maxTextureSize,x={[ka]:qn,[qn]:ka,[bi]:bi},S=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:x1,fragmentShader:y1}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const R=new Hn;R.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new An(R,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0;let g=this.type;this.render=function(w,V,tt){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||w.length===0)return;const O=o.getRenderTarget(),T=o.getActiveCubeFace(),q=o.getActiveMipmapLevel(),j=o.state;j.setBlending(Ha),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ht=g!==aa&&this.type===aa,lt=g===aa&&this.type!==aa;for(let mt=0,I=w.length;mt<I;mt++){const at=w[mt],K=at.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const At=K.getFrameExtents();if(l.multiply(At),u.copy(K.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/At.x),l.x=u.x*At.x,K.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/At.y),l.y=u.y*At.y,K.mapSize.y=u.y)),K.map===null||ht===!0||lt===!0){const it=this.type!==aa?{minFilter:ai,magFilter:ai}:{};K.map!==null&&K.map.dispose(),K.map=new Mr(l.x,l.y,it),K.map.texture.name=at.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const N=K.getViewportCount();for(let it=0;it<N;it++){const Tt=K.getViewport(it);d.set(u.x*Tt.x,u.y*Tt.y,u.x*Tt.z,u.y*Tt.w),j.viewport(d),K.updateMatrices(at,it),r=K.getFrustum(),L(V,tt,K.camera,at,this.type)}K.isPointLightShadow!==!0&&this.type===aa&&A(K,tt),K.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(O,T,q)};function A(w,V){const tt=t.update(D);S.defines.VSM_SAMPLES!==w.blurSamples&&(S.defines.VSM_SAMPLES=w.blurSamples,b.defines.VSM_SAMPLES=w.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Mr(l.x,l.y)),S.uniforms.shadow_pass.value=w.map.texture,S.uniforms.resolution.value=w.mapSize,S.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(V,null,tt,S,D,null),b.uniforms.shadow_pass.value=w.mapPass.texture,b.uniforms.resolution.value=w.mapSize,b.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(V,null,tt,b,D,null)}function B(w,V,tt,O){let T=null;const q=tt.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(q!==void 0)T=q;else if(T=tt.isPointLight===!0?m:h,o.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const j=T.uuid,ht=V.uuid;let lt=p[j];lt===void 0&&(lt={},p[j]=lt);let mt=lt[ht];mt===void 0&&(mt=T.clone(),lt[ht]=mt,V.addEventListener("dispose",F)),T=mt}if(T.visible=V.visible,T.wireframe=V.wireframe,O===aa?T.side=V.shadowSide!==null?V.shadowSide:V.side:T.side=V.shadowSide!==null?V.shadowSide:x[V.side],T.alphaMap=V.alphaMap,T.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,T.map=V.map,T.clipShadows=V.clipShadows,T.clippingPlanes=V.clippingPlanes,T.clipIntersection=V.clipIntersection,T.displacementMap=V.displacementMap,T.displacementScale=V.displacementScale,T.displacementBias=V.displacementBias,T.wireframeLinewidth=V.wireframeLinewidth,T.linewidth=V.linewidth,tt.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const j=o.properties.get(T);j.light=tt}return T}function L(w,V,tt,O,T){if(w.visible===!1)return;if(w.layers.test(V.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===aa)&&(!w.frustumCulled||r.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld);const ht=t.update(w),lt=w.material;if(Array.isArray(lt)){const mt=ht.groups;for(let I=0,at=mt.length;I<at;I++){const K=mt[I],At=lt[K.materialIndex];if(At&&At.visible){const N=B(w,At,O,T);w.onBeforeShadow(o,w,V,tt,ht,N,K),o.renderBufferDirect(tt,null,ht,N,w,K),w.onAfterShadow(o,w,V,tt,ht,N,K)}}}else if(lt.visible){const mt=B(w,lt,O,T);w.onBeforeShadow(o,w,V,tt,ht,mt,null),o.renderBufferDirect(tt,null,ht,mt,w,null),w.onAfterShadow(o,w,V,tt,ht,mt,null)}}const j=w.children;for(let ht=0,lt=j.length;ht<lt;ht++)L(j[ht],V,tt,O,T)}function F(w){w.target.removeEventListener("dispose",F);for(const tt in p){const O=p[tt],T=w.target.uuid;T in O&&(O[T].dispose(),delete O[T])}}}const M1={[Fd]:Hd,[Gd]:Xd,[Vd]:Wd,[Rs]:kd,[Hd]:Fd,[Xd]:Gd,[Wd]:Vd,[kd]:Rs};function E1(o,t){function i(){let Y=!1;const wt=new sn;let Ot=null;const Gt=new sn(0,0,0,0);return{setMask:function(Ct){Ot!==Ct&&!Y&&(o.colorMask(Ct,Ct,Ct,Ct),Ot=Ct)},setLocked:function(Ct){Y=Ct},setClear:function(Ct,Mt,jt,le,Ue){Ue===!0&&(Ct*=le,Mt*=le,jt*=le),wt.set(Ct,Mt,jt,le),Gt.equals(wt)===!1&&(o.clearColor(Ct,Mt,jt,le),Gt.copy(wt))},reset:function(){Y=!1,Ot=null,Gt.set(-1,0,0,0)}}}function r(){let Y=!1,wt=!1,Ot=null,Gt=null,Ct=null;return{setReversed:function(Mt){if(wt!==Mt){const jt=t.get("EXT_clip_control");Mt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),wt=Mt;const le=Ct;Ct=null,this.setClear(le)}},getReversed:function(){return wt},setTest:function(Mt){Mt?St(o.DEPTH_TEST):Lt(o.DEPTH_TEST)},setMask:function(Mt){Ot!==Mt&&!Y&&(o.depthMask(Mt),Ot=Mt)},setFunc:function(Mt){if(wt&&(Mt=M1[Mt]),Gt!==Mt){switch(Mt){case Fd:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Gd:o.depthFunc(o.LESS);break;case Rs:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case kd:o.depthFunc(o.GEQUAL);break;case Xd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Gt=Mt}},setLocked:function(Mt){Y=Mt},setClear:function(Mt){Ct!==Mt&&(wt&&(Mt=1-Mt),o.clearDepth(Mt),Ct=Mt)},reset:function(){Y=!1,Ot=null,Gt=null,Ct=null,wt=!1}}}function l(){let Y=!1,wt=null,Ot=null,Gt=null,Ct=null,Mt=null,jt=null,le=null,Ue=null;return{setTest:function(Te){Y||(Te?St(o.STENCIL_TEST):Lt(o.STENCIL_TEST))},setMask:function(Te){wt!==Te&&!Y&&(o.stencilMask(Te),wt=Te)},setFunc:function(Te,mi,fn){(Ot!==Te||Gt!==mi||Ct!==fn)&&(o.stencilFunc(Te,mi,fn),Ot=Te,Gt=mi,Ct=fn)},setOp:function(Te,mi,fn){(Mt!==Te||jt!==mi||le!==fn)&&(o.stencilOp(Te,mi,fn),Mt=Te,jt=mi,le=fn)},setLocked:function(Te){Y=Te},setClear:function(Te){Ue!==Te&&(o.clearStencil(Te),Ue=Te)},reset:function(){Y=!1,wt=null,Ot=null,Gt=null,Ct=null,Mt=null,jt=null,le=null,Ue=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},x={},S=new WeakMap,b=[],R=null,D=!1,M=null,g=null,A=null,B=null,L=null,F=null,w=null,V=new ge(0,0,0),tt=0,O=!1,T=null,q=null,j=null,ht=null,lt=null;const mt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,at=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(K)[1]),I=at>=1):K.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),I=at>=2);let At=null,N={};const it=o.getParameter(o.SCISSOR_BOX),Tt=o.getParameter(o.VIEWPORT),Rt=new sn().fromArray(it),It=new sn().fromArray(Tt);function kt(Y,wt,Ot,Gt){const Ct=new Uint8Array(4),Mt=o.createTexture();o.bindTexture(Y,Mt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<Ot;jt++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Gt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(wt+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Mt}const st={};st[o.TEXTURE_2D]=kt(o.TEXTURE_2D,o.TEXTURE_2D,1),st[o.TEXTURE_CUBE_MAP]=kt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[o.TEXTURE_2D_ARRAY]=kt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),st[o.TEXTURE_3D]=kt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),St(o.DEPTH_TEST),d.setFunc(Rs),ee(!1),Vt(T_),St(o.CULL_FACE),we(Ha);function St(Y){_[Y]!==!0&&(o.enable(Y),_[Y]=!0)}function Lt(Y){_[Y]!==!1&&(o.disable(Y),_[Y]=!1)}function Qt(Y,wt){return x[Y]!==wt?(o.bindFramebuffer(Y,wt),x[Y]=wt,Y===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=wt),Y===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function Zt(Y,wt){let Ot=b,Gt=!1;if(Y){Ot=S.get(wt),Ot===void 0&&(Ot=[],S.set(wt,Ot));const Ct=Y.textures;if(Ot.length!==Ct.length||Ot[0]!==o.COLOR_ATTACHMENT0){for(let Mt=0,jt=Ct.length;Mt<jt;Mt++)Ot[Mt]=o.COLOR_ATTACHMENT0+Mt;Ot.length=Ct.length,Gt=!0}}else Ot[0]!==o.BACK&&(Ot[0]=o.BACK,Gt=!0);Gt&&o.drawBuffers(Ot)}function ue(Y){return R!==Y?(o.useProgram(Y),R=Y,!0):!1}const Je={[gr]:o.FUNC_ADD,[Ty]:o.FUNC_SUBTRACT,[Ay]:o.FUNC_REVERSE_SUBTRACT};Je[Ry]=o.MIN,Je[Cy]=o.MAX;const G={[wy]:o.ZERO,[Dy]:o.ONE,[Uy]:o.SRC_COLOR,[Id]:o.SRC_ALPHA,[Iy]:o.SRC_ALPHA_SATURATE,[Py]:o.DST_COLOR,[Ny]:o.DST_ALPHA,[Ly]:o.ONE_MINUS_SRC_COLOR,[zd]:o.ONE_MINUS_SRC_ALPHA,[By]:o.ONE_MINUS_DST_COLOR,[Oy]:o.ONE_MINUS_DST_ALPHA,[zy]:o.CONSTANT_COLOR,[Fy]:o.ONE_MINUS_CONSTANT_COLOR,[Hy]:o.CONSTANT_ALPHA,[Gy]:o.ONE_MINUS_CONSTANT_ALPHA};function we(Y,wt,Ot,Gt,Ct,Mt,jt,le,Ue,Te){if(Y===Ha){D===!0&&(Lt(o.BLEND),D=!1);return}if(D===!1&&(St(o.BLEND),D=!0),Y!==by){if(Y!==M||Te!==O){if((g!==gr||L!==gr)&&(o.blendEquation(o.FUNC_ADD),g=gr,L=gr),Te)switch(Y){case Ts:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case A_:o.blendFunc(o.ONE,o.ONE);break;case R_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case C_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ts:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case A_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case R_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}A=null,B=null,F=null,w=null,V.set(0,0,0),tt=0,M=Y,O=Te}return}Ct=Ct||wt,Mt=Mt||Ot,jt=jt||Gt,(wt!==g||Ct!==L)&&(o.blendEquationSeparate(Je[wt],Je[Ct]),g=wt,L=Ct),(Ot!==A||Gt!==B||Mt!==F||jt!==w)&&(o.blendFuncSeparate(G[Ot],G[Gt],G[Mt],G[jt]),A=Ot,B=Gt,F=Mt,w=jt),(le.equals(V)===!1||Ue!==tt)&&(o.blendColor(le.r,le.g,le.b,Ue),V.copy(le),tt=Ue),M=Y,O=!1}function ce(Y,wt){Y.side===bi?Lt(o.CULL_FACE):St(o.CULL_FACE);let Ot=Y.side===qn;wt&&(Ot=!Ot),ee(Ot),Y.blending===Ts&&Y.transparent===!1?we(Ha):we(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const Gt=Y.stencilWrite;h.setTest(Gt),Gt&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Wt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Lt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(Y){T!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),T=Y)}function Vt(Y){Y!==Sy?(St(o.CULL_FACE),Y!==q&&(Y===T_?o.cullFace(o.BACK):Y===My?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Lt(o.CULL_FACE),q=Y}function Oe(Y){Y!==j&&(I&&o.lineWidth(Y),j=Y)}function Wt(Y,wt,Ot){Y?(St(o.POLYGON_OFFSET_FILL),(ht!==wt||lt!==Ot)&&(o.polygonOffset(wt,Ot),ht=wt,lt=Ot)):Lt(o.POLYGON_OFFSET_FILL)}function oe(Y){Y?St(o.SCISSOR_TEST):Lt(o.SCISSOR_TEST)}function We(Y){Y===void 0&&(Y=o.TEXTURE0+mt-1),At!==Y&&(o.activeTexture(Y),At=Y)}function ke(Y,wt,Ot){Ot===void 0&&(At===null?Ot=o.TEXTURE0+mt-1:Ot=At);let Gt=N[Ot];Gt===void 0&&(Gt={type:void 0,texture:void 0},N[Ot]=Gt),(Gt.type!==Y||Gt.texture!==wt)&&(At!==Ot&&(o.activeTexture(Ot),At=Ot),o.bindTexture(Y,wt||st[Y]),Gt.type=Y,Gt.texture=wt)}function v(){const Y=N[At];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function P(){try{o.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function W(){try{o.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function k(){try{o.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function X(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ut(){try{o.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function yt(){try{o.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{o.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gt(){try{o.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Et(Y){Rt.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),Rt.copy(Y))}function Ut(Y){It.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),It.copy(Y))}function Bt(Y,wt){let Ot=p.get(wt);Ot===void 0&&(Ot=new WeakMap,p.set(wt,Ot));let Gt=Ot.get(Y);Gt===void 0&&(Gt=o.getUniformBlockIndex(wt,Y.name),Ot.set(Y,Gt))}function Nt(Y,wt){const Gt=p.get(wt).get(Y);m.get(wt)!==Gt&&(o.uniformBlockBinding(wt,Gt,Y.__bindingPointIndex),m.set(wt,Gt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},At=null,N={},x={},S=new WeakMap,b=[],R=null,D=!1,M=null,g=null,A=null,B=null,L=null,F=null,w=null,V=new ge(0,0,0),tt=0,O=!1,T=null,q=null,j=null,ht=null,lt=null,Rt.set(0,0,o.canvas.width,o.canvas.height),It.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:St,disable:Lt,bindFramebuffer:Qt,drawBuffers:Zt,useProgram:ue,setBlending:we,setMaterial:ce,setFlipSided:ee,setCullFace:Vt,setLineWidth:Oe,setPolygonOffset:Wt,setScissorTest:oe,activeTexture:We,bindTexture:ke,unbindTexture:v,compressedTexImage2D:y,compressedTexImage3D:P,texImage2D:_t,texImage3D:gt,updateUBOMapping:Bt,uniformBlockBinding:Nt,texStorage2D:ut,texStorage3D:yt,texSubImage2D:W,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:pt,scissor:Et,viewport:Ut,reset:ne}}function b1(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new xe,_=new WeakMap;let x;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(v,y){return b?new OffscreenCanvas(v,y):kc("canvas")}function D(v,y,P){let W=1;const k=ke(v);if((k.width>P||k.height>P)&&(W=P/Math.max(k.width,k.height)),W<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const X=Math.floor(W*k.width),pt=Math.floor(W*k.height);x===void 0&&(x=R(X,pt));const ut=y?R(X,pt):x;return ut.width=X,ut.height=pt,ut.getContext("2d").drawImage(v,0,0,X,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+X+"x"+pt+")."),ut}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),v;return v}function M(v){return v.generateMipmaps}function g(v){o.generateMipmap(v)}function A(v){return v.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?o.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function B(v,y,P,W,k=!1){if(v!==null){if(o[v]!==void 0)return o[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let X=y;if(y===o.RED&&(P===o.FLOAT&&(X=o.R32F),P===o.HALF_FLOAT&&(X=o.R16F),P===o.UNSIGNED_BYTE&&(X=o.R8)),y===o.RED_INTEGER&&(P===o.UNSIGNED_BYTE&&(X=o.R8UI),P===o.UNSIGNED_SHORT&&(X=o.R16UI),P===o.UNSIGNED_INT&&(X=o.R32UI),P===o.BYTE&&(X=o.R8I),P===o.SHORT&&(X=o.R16I),P===o.INT&&(X=o.R32I)),y===o.RG&&(P===o.FLOAT&&(X=o.RG32F),P===o.HALF_FLOAT&&(X=o.RG16F),P===o.UNSIGNED_BYTE&&(X=o.RG8)),y===o.RG_INTEGER&&(P===o.UNSIGNED_BYTE&&(X=o.RG8UI),P===o.UNSIGNED_SHORT&&(X=o.RG16UI),P===o.UNSIGNED_INT&&(X=o.RG32UI),P===o.BYTE&&(X=o.RG8I),P===o.SHORT&&(X=o.RG16I),P===o.INT&&(X=o.RG32I)),y===o.RGB_INTEGER&&(P===o.UNSIGNED_BYTE&&(X=o.RGB8UI),P===o.UNSIGNED_SHORT&&(X=o.RGB16UI),P===o.UNSIGNED_INT&&(X=o.RGB32UI),P===o.BYTE&&(X=o.RGB8I),P===o.SHORT&&(X=o.RGB16I),P===o.INT&&(X=o.RGB32I)),y===o.RGBA_INTEGER&&(P===o.UNSIGNED_BYTE&&(X=o.RGBA8UI),P===o.UNSIGNED_SHORT&&(X=o.RGBA16UI),P===o.UNSIGNED_INT&&(X=o.RGBA32UI),P===o.BYTE&&(X=o.RGBA8I),P===o.SHORT&&(X=o.RGBA16I),P===o.INT&&(X=o.RGBA32I)),y===o.RGB&&(P===o.UNSIGNED_INT_5_9_9_9_REV&&(X=o.RGB9_E5),P===o.UNSIGNED_INT_10F_11F_11F_REV&&(X=o.R11F_G11F_B10F)),y===o.RGBA){const pt=k?Gc:Ce.getTransfer(W);P===o.FLOAT&&(X=o.RGBA32F),P===o.HALF_FLOAT&&(X=o.RGBA16F),P===o.UNSIGNED_BYTE&&(X=pt===Fe?o.SRGB8_ALPHA8:o.RGBA8),P===o.UNSIGNED_SHORT_4_4_4_4&&(X=o.RGBA4),P===o.UNSIGNED_SHORT_5_5_5_1&&(X=o.RGB5_A1)}return(X===o.R16F||X===o.R32F||X===o.RG16F||X===o.RG32F||X===o.RGBA16F||X===o.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function L(v,y){let P;return v?y===null||y===Sr||y===Wo?P=o.DEPTH24_STENCIL8:y===Bi?P=o.DEPTH32F_STENCIL8:y===Xo&&(P=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Sr||y===Wo?P=o.DEPTH_COMPONENT24:y===Bi?P=o.DEPTH_COMPONENT32F:y===Xo&&(P=o.DEPTH_COMPONENT16),P}function F(v,y){return M(v)===!0||v.isFramebufferTexture&&v.minFilter!==ai&&v.minFilter!==Ti?Math.log2(Math.max(y.width,y.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?y.mipmaps.length:1}function w(v){const y=v.target;y.removeEventListener("dispose",w),tt(y),y.isVideoTexture&&_.delete(y)}function V(v){const y=v.target;y.removeEventListener("dispose",V),T(y)}function tt(v){const y=r.get(v);if(y.__webglInit===void 0)return;const P=v.source,W=S.get(P);if(W){const k=W[y.__cacheKey];k.usedTimes--,k.usedTimes===0&&O(v),Object.keys(W).length===0&&S.delete(P)}r.remove(v)}function O(v){const y=r.get(v);o.deleteTexture(y.__webglTexture);const P=v.source,W=S.get(P);delete W[y.__cacheKey],d.memory.textures--}function T(v){const y=r.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),r.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let k=0;k<y.__webglFramebuffer[W].length;k++)o.deleteFramebuffer(y.__webglFramebuffer[W][k]);else o.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)o.deleteFramebuffer(y.__webglFramebuffer[W]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const P=v.textures;for(let W=0,k=P.length;W<k;W++){const X=r.get(P[W]);X.__webglTexture&&(o.deleteTexture(X.__webglTexture),d.memory.textures--),r.remove(P[W])}r.remove(v)}let q=0;function j(){q=0}function ht(){const v=q;return v>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l.maxTextures),q+=1,v}function lt(v){const y=[];return y.push(v.wrapS),y.push(v.wrapT),y.push(v.wrapR||0),y.push(v.magFilter),y.push(v.minFilter),y.push(v.anisotropy),y.push(v.internalFormat),y.push(v.format),y.push(v.type),y.push(v.generateMipmaps),y.push(v.premultiplyAlpha),y.push(v.flipY),y.push(v.unpackAlignment),y.push(v.colorSpace),y.join()}function mt(v,y){const P=r.get(v);if(v.isVideoTexture&&oe(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&P.__version!==v.version){const W=v.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(P,v,y);return}}else v.isExternalTexture&&(P.__webglTexture=v.sourceTexture?v.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,P.__webglTexture,o.TEXTURE0+y)}function I(v,y){const P=r.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){st(P,v,y);return}i.bindTexture(o.TEXTURE_2D_ARRAY,P.__webglTexture,o.TEXTURE0+y)}function at(v,y){const P=r.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){st(P,v,y);return}i.bindTexture(o.TEXTURE_3D,P.__webglTexture,o.TEXTURE0+y)}function K(v,y){const P=r.get(v);if(v.version>0&&P.__version!==v.version){St(P,v,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+y)}const At={[Yd]:o.REPEAT,[xr]:o.CLAMP_TO_EDGE,[Zd]:o.MIRRORED_REPEAT},N={[ai]:o.NEAREST,[Qy]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[Ti]:o.LINEAR,[ad]:o.LINEAR_MIPMAP_NEAREST,[yr]:o.LINEAR_MIPMAP_LINEAR},it={[nS]:o.NEVER,[lS]:o.ALWAYS,[iS]:o.LESS,[z0]:o.LEQUAL,[aS]:o.EQUAL,[oS]:o.GEQUAL,[rS]:o.GREATER,[sS]:o.NOTEQUAL};function Tt(v,y){if(y.type===Bi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ti||y.magFilter===ad||y.magFilter===cc||y.magFilter===yr||y.minFilter===Ti||y.minFilter===ad||y.minFilter===cc||y.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(v,o.TEXTURE_WRAP_S,At[y.wrapS]),o.texParameteri(v,o.TEXTURE_WRAP_T,At[y.wrapT]),(v===o.TEXTURE_3D||v===o.TEXTURE_2D_ARRAY)&&o.texParameteri(v,o.TEXTURE_WRAP_R,At[y.wrapR]),o.texParameteri(v,o.TEXTURE_MAG_FILTER,N[y.magFilter]),o.texParameteri(v,o.TEXTURE_MIN_FILTER,N[y.minFilter]),y.compareFunction&&(o.texParameteri(v,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(v,o.TEXTURE_COMPARE_FUNC,it[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ai||y.minFilter!==cc&&y.minFilter!==yr||y.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");o.texParameterf(v,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Rt(v,y){let P=!1;v.__webglInit===void 0&&(v.__webglInit=!0,y.addEventListener("dispose",w));const W=y.source;let k=S.get(W);k===void 0&&(k={},S.set(W,k));const X=lt(y);if(X!==v.__cacheKey){k[X]===void 0&&(k[X]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,P=!0),k[X].usedTimes++;const pt=k[v.__cacheKey];pt!==void 0&&(k[v.__cacheKey].usedTimes--,pt.usedTimes===0&&O(y)),v.__cacheKey=X,v.__webglTexture=k[X].texture}return P}function It(v,y,P){return Math.floor(Math.floor(v/P)/y)}function kt(v,y,P,W){const X=v.updateRanges;if(X.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,P,W,y.data);else{X.sort((gt,Et)=>gt.start-Et.start);let pt=0;for(let gt=1;gt<X.length;gt++){const Et=X[pt],Ut=X[gt],Bt=Et.start+Et.count,Nt=It(Ut.start,y.width,4),ne=It(Et.start,y.width,4);Ut.start<=Bt+1&&Nt===ne&&It(Ut.start+Ut.count-1,y.width,4)===Nt?Et.count=Math.max(Et.count,Ut.start+Ut.count-Et.start):(++pt,X[pt]=Ut)}X.length=pt+1;const ut=o.getParameter(o.UNPACK_ROW_LENGTH),yt=o.getParameter(o.UNPACK_SKIP_PIXELS),_t=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let gt=0,Et=X.length;gt<Et;gt++){const Ut=X[gt],Bt=Math.floor(Ut.start/4),Nt=Math.ceil(Ut.count/4),ne=Bt%y.width,Y=Math.floor(Bt/y.width),wt=Nt,Ot=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(o.TEXTURE_2D,0,ne,Y,wt,Ot,P,W,y.data)}v.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,yt),o.pixelStorei(o.UNPACK_SKIP_ROWS,_t)}}function st(v,y,P){let W=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=o.TEXTURE_3D);const k=Rt(v,y),X=y.source;i.bindTexture(W,v.__webglTexture,o.TEXTURE0+P);const pt=r.get(X);if(X.version!==pt.__version||k===!0){i.activeTexture(o.TEXTURE0+P);const ut=Ce.getPrimaries(Ce.workingColorSpace),yt=y.colorSpace===Fa?null:Ce.getPrimaries(y.colorSpace),_t=y.colorSpace===Fa||ut===yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let gt=D(y.image,!1,l.maxTextureSize);gt=We(y,gt);const Et=u.convert(y.format,y.colorSpace),Ut=u.convert(y.type);let Bt=B(y.internalFormat,Et,Ut,y.colorSpace,y.isVideoTexture);Tt(W,y);let Nt;const ne=y.mipmaps,Y=y.isVideoTexture!==!0,wt=pt.__version===void 0||k===!0,Ot=X.dataReady,Gt=F(y,gt);if(y.isDepthTexture)Bt=L(y.format===jo,y.type),wt&&(Y?i.texStorage2D(o.TEXTURE_2D,1,Bt,gt.width,gt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,gt.width,gt.height,0,Et,Ut,null));else if(y.isDataTexture)if(ne.length>0){Y&&wt&&i.texStorage2D(o.TEXTURE_2D,Gt,Bt,ne[0].width,ne[0].height);for(let Ct=0,Mt=ne.length;Ct<Mt;Ct++)Nt=ne[Ct],Y?Ot&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Nt.width,Nt.height,Et,Ut,Nt.data):i.texImage2D(o.TEXTURE_2D,Ct,Bt,Nt.width,Nt.height,0,Et,Ut,Nt.data);y.generateMipmaps=!1}else Y?(wt&&i.texStorage2D(o.TEXTURE_2D,Gt,Bt,gt.width,gt.height),Ot&&kt(y,gt,Et,Ut)):i.texImage2D(o.TEXTURE_2D,0,Bt,gt.width,gt.height,0,Et,Ut,gt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Y&&wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,Bt,ne[0].width,ne[0].height,gt.depth);for(let Ct=0,Mt=ne.length;Ct<Mt;Ct++)if(Nt=ne[Ct],y.format!==Ai)if(Et!==null)if(Y){if(Ot)if(y.layerUpdates.size>0){const jt=i0(Nt.width,Nt.height,y.format,y.type);for(const le of y.layerUpdates){const Ue=Nt.data.subarray(le*jt/Nt.data.BYTES_PER_ELEMENT,(le+1)*jt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,le,Nt.width,Nt.height,1,Et,Ue)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Nt.width,Nt.height,gt.depth,Et,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ct,Bt,Nt.width,Nt.height,gt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ot&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Nt.width,Nt.height,gt.depth,Et,Ut,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ct,Bt,Nt.width,Nt.height,gt.depth,0,Et,Ut,Nt.data)}else{Y&&wt&&i.texStorage2D(o.TEXTURE_2D,Gt,Bt,ne[0].width,ne[0].height);for(let Ct=0,Mt=ne.length;Ct<Mt;Ct++)Nt=ne[Ct],y.format!==Ai?Et!==null?Y?Ot&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ct,0,0,Nt.width,Nt.height,Et,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,Ct,Bt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ot&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Nt.width,Nt.height,Et,Ut,Nt.data):i.texImage2D(o.TEXTURE_2D,Ct,Bt,Nt.width,Nt.height,0,Et,Ut,Nt.data)}else if(y.isDataArrayTexture)if(Y){if(wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,Bt,gt.width,gt.height,gt.depth),Ot)if(y.layerUpdates.size>0){const Ct=i0(gt.width,gt.height,y.format,y.type);for(const Mt of y.layerUpdates){const jt=gt.data.subarray(Mt*Ct/gt.data.BYTES_PER_ELEMENT,(Mt+1)*Ct/gt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Mt,gt.width,gt.height,1,Et,Ut,jt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Et,Ut,gt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,gt.width,gt.height,gt.depth,0,Et,Ut,gt.data);else if(y.isData3DTexture)Y?(wt&&i.texStorage3D(o.TEXTURE_3D,Gt,Bt,gt.width,gt.height,gt.depth),Ot&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Et,Ut,gt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,gt.width,gt.height,gt.depth,0,Et,Ut,gt.data);else if(y.isFramebufferTexture){if(wt)if(Y)i.texStorage2D(o.TEXTURE_2D,Gt,Bt,gt.width,gt.height);else{let Ct=gt.width,Mt=gt.height;for(let jt=0;jt<Gt;jt++)i.texImage2D(o.TEXTURE_2D,jt,Bt,Ct,Mt,0,Et,Ut,null),Ct>>=1,Mt>>=1}}else if(ne.length>0){if(Y&&wt){const Ct=ke(ne[0]);i.texStorage2D(o.TEXTURE_2D,Gt,Bt,Ct.width,Ct.height)}for(let Ct=0,Mt=ne.length;Ct<Mt;Ct++)Nt=ne[Ct],Y?Ot&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Et,Ut,Nt):i.texImage2D(o.TEXTURE_2D,Ct,Bt,Et,Ut,Nt);y.generateMipmaps=!1}else if(Y){if(wt){const Ct=ke(gt);i.texStorage2D(o.TEXTURE_2D,Gt,Bt,Ct.width,Ct.height)}Ot&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,Ut,gt)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Et,Ut,gt);M(y)&&g(W),pt.__version=X.version,y.onUpdate&&y.onUpdate(y)}v.__version=y.version}function St(v,y,P){if(y.image.length!==6)return;const W=Rt(v,y),k=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,v.__webglTexture,o.TEXTURE0+P);const X=r.get(k);if(k.version!==X.__version||W===!0){i.activeTexture(o.TEXTURE0+P);const pt=Ce.getPrimaries(Ce.workingColorSpace),ut=y.colorSpace===Fa?null:Ce.getPrimaries(y.colorSpace),yt=y.colorSpace===Fa||pt===ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const _t=y.isCompressedTexture||y.image[0].isCompressedTexture,gt=y.image[0]&&y.image[0].isDataTexture,Et=[];for(let Mt=0;Mt<6;Mt++)!_t&&!gt?Et[Mt]=D(y.image[Mt],!0,l.maxCubemapSize):Et[Mt]=gt?y.image[Mt].image:y.image[Mt],Et[Mt]=We(y,Et[Mt]);const Ut=Et[0],Bt=u.convert(y.format,y.colorSpace),Nt=u.convert(y.type),ne=B(y.internalFormat,Bt,Nt,y.colorSpace),Y=y.isVideoTexture!==!0,wt=X.__version===void 0||W===!0,Ot=k.dataReady;let Gt=F(y,Ut);Tt(o.TEXTURE_CUBE_MAP,y);let Ct;if(_t){Y&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,ne,Ut.width,Ut.height);for(let Mt=0;Mt<6;Mt++){Ct=Et[Mt].mipmaps;for(let jt=0;jt<Ct.length;jt++){const le=Ct[jt];y.format!==Ai?Bt!==null?Y?Ot&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,jt,0,0,le.width,le.height,Bt,le.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,jt,ne,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,jt,0,0,le.width,le.height,Bt,Nt,le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,jt,ne,le.width,le.height,0,Bt,Nt,le.data)}}}else{if(Ct=y.mipmaps,Y&&wt){Ct.length>0&&Gt++;const Mt=ke(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,ne,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(gt){Y?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Et[Mt].width,Et[Mt].height,Bt,Nt,Et[Mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ne,Et[Mt].width,Et[Mt].height,0,Bt,Nt,Et[Mt].data);for(let jt=0;jt<Ct.length;jt++){const Ue=Ct[jt].image[Mt].image;Y?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,jt+1,0,0,Ue.width,Ue.height,Bt,Nt,Ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,jt+1,ne,Ue.width,Ue.height,0,Bt,Nt,Ue.data)}}else{Y?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Bt,Nt,Et[Mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ne,Bt,Nt,Et[Mt]);for(let jt=0;jt<Ct.length;jt++){const le=Ct[jt];Y?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,jt+1,0,0,Bt,Nt,le.image[Mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,jt+1,ne,Bt,Nt,le.image[Mt])}}}M(y)&&g(o.TEXTURE_CUBE_MAP),X.__version=k.version,y.onUpdate&&y.onUpdate(y)}v.__version=y.version}function Lt(v,y,P,W,k,X){const pt=u.convert(P.format,P.colorSpace),ut=u.convert(P.type),yt=B(P.internalFormat,pt,ut,P.colorSpace),_t=r.get(y),gt=r.get(P);if(gt.__renderTarget=y,!_t.__hasExternalTextures){const Et=Math.max(1,y.width>>X),Ut=Math.max(1,y.height>>X);k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?i.texImage3D(k,X,yt,Et,Ut,y.depth,0,pt,ut,null):i.texImage2D(k,X,yt,Et,Ut,0,pt,ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,v),Wt(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,W,k,gt.__webglTexture,0,Oe(y)):(k===o.TEXTURE_2D||k>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,W,k,gt.__webglTexture,X),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qt(v,y,P){if(o.bindRenderbuffer(o.RENDERBUFFER,v),y.depthBuffer){const W=y.depthTexture,k=W&&W.isDepthTexture?W.type:null,X=L(y.stencilBuffer,k),pt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=Oe(y);Wt(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,X,y.width,y.height):P?o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,X,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,X,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,v)}else{const W=y.textures;for(let k=0;k<W.length;k++){const X=W[k],pt=u.convert(X.format,X.colorSpace),ut=u.convert(X.type),yt=B(X.internalFormat,pt,ut,X.colorSpace),_t=Oe(y);P&&Wt(y)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,_t,yt,y.width,y.height):Wt(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_t,yt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,yt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Zt(v,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,v),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=r.get(y.depthTexture);W.__renderTarget=y,(!W.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),mt(y.depthTexture,0);const k=W.__webglTexture,X=Oe(y);if(y.depthTexture.format===qo)Wt(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,k,0,X):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,k,0);else if(y.depthTexture.format===jo)Wt(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,k,0,X):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function ue(v){const y=r.get(v),P=v.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==v.depthTexture){const W=v.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){const k=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",k)};W.addEventListener("dispose",k),y.__depthDisposeCallback=k}y.__boundDepthTexture=W}if(v.depthTexture&&!y.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const W=v.texture.mipmaps;W&&W.length>0?Zt(y.__webglFramebuffer[0],v):Zt(y.__webglFramebuffer,v)}else if(P){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=o.createRenderbuffer(),Qt(y.__webglDepthbuffer[W],v,!1);else{const k=v.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[W];o.bindRenderbuffer(o.RENDERBUFFER,X),o.framebufferRenderbuffer(o.FRAMEBUFFER,k,o.RENDERBUFFER,X)}}else{const W=v.texture.mipmaps;if(W&&W.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Qt(y.__webglDepthbuffer,v,!1);else{const k=v.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,X),o.framebufferRenderbuffer(o.FRAMEBUFFER,k,o.RENDERBUFFER,X)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(v,y,P){const W=r.get(v);y!==void 0&&Lt(W.__webglFramebuffer,v,v.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),P!==void 0&&ue(v)}function G(v){const y=v.texture,P=r.get(v),W=r.get(y);v.addEventListener("dispose",V);const k=v.textures,X=v.isWebGLCubeRenderTarget===!0,pt=k.length>1;if(pt||(W.__webglTexture===void 0&&(W.__webglTexture=o.createTexture()),W.__version=y.version,d.memory.textures++),X){P.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer[ut]=[];for(let yt=0;yt<y.mipmaps.length;yt++)P.__webglFramebuffer[ut][yt]=o.createFramebuffer()}else P.__webglFramebuffer[ut]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)P.__webglFramebuffer[ut]=o.createFramebuffer()}else P.__webglFramebuffer=o.createFramebuffer();if(pt)for(let ut=0,yt=k.length;ut<yt;ut++){const _t=r.get(k[ut]);_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture(),d.memory.textures++)}if(v.samples>0&&Wt(v)===!1){P.__webglMultisampledFramebuffer=o.createFramebuffer(),P.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ut=0;ut<k.length;ut++){const yt=k[ut];P.__webglColorRenderbuffer[ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,P.__webglColorRenderbuffer[ut]);const _t=u.convert(yt.format,yt.colorSpace),gt=u.convert(yt.type),Et=B(yt.internalFormat,_t,gt,yt.colorSpace,v.isXRRenderTarget===!0),Ut=Oe(v);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,Et,v.width,v.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ut,o.RENDERBUFFER,P.__webglColorRenderbuffer[ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),v.depthBuffer&&(P.__webglDepthRenderbuffer=o.createRenderbuffer(),Qt(P.__webglDepthRenderbuffer,v,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(X){i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture),Tt(o.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)Lt(P.__webglFramebuffer[ut][yt],v,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt);else Lt(P.__webglFramebuffer[ut],v,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);M(y)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(pt){for(let ut=0,yt=k.length;ut<yt;ut++){const _t=k[ut],gt=r.get(_t);let Et=o.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(Et=v.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,gt.__webglTexture),Tt(Et,_t),Lt(P.__webglFramebuffer,v,_t,o.COLOR_ATTACHMENT0+ut,Et,0),M(_t)&&g(Et)}i.unbindTexture()}else{let ut=o.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ut=v.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ut,W.__webglTexture),Tt(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)Lt(P.__webglFramebuffer[yt],v,y,o.COLOR_ATTACHMENT0,ut,yt);else Lt(P.__webglFramebuffer,v,y,o.COLOR_ATTACHMENT0,ut,0);M(y)&&g(ut),i.unbindTexture()}v.depthBuffer&&ue(v)}function we(v){const y=v.textures;for(let P=0,W=y.length;P<W;P++){const k=y[P];if(M(k)){const X=A(v),pt=r.get(k).__webglTexture;i.bindTexture(X,pt),g(X),i.unbindTexture()}}}const ce=[],ee=[];function Vt(v){if(v.samples>0){if(Wt(v)===!1){const y=v.textures,P=v.width,W=v.height;let k=o.COLOR_BUFFER_BIT;const X=v.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=r.get(v),ut=y.length>1;if(ut)for(let _t=0;_t<y.length;_t++)i.bindFramebuffer(o.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);const yt=v.texture.mipmaps;yt&&yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(k|=o.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(k|=o.STENCIL_BUFFER_BIT)),ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);const gt=r.get(y[_t]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,gt,0)}o.blitFramebuffer(0,0,P,W,0,0,P,W,k,o.NEAREST),m===!0&&(ce.length=0,ee.length=0,ce.push(o.COLOR_ATTACHMENT0+_t),v.depthBuffer&&v.resolveDepthBuffer===!1&&(ce.push(X),ee.push(X),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ce))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<y.length;_t++){i.bindFramebuffer(o.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);const gt=r.get(y[_t]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.TEXTURE_2D,gt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&m){const y=v.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function Oe(v){return Math.min(l.maxSamples,v.samples)}function Wt(v){const y=r.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function oe(v){const y=d.render.frame;_.get(v)!==y&&(_.set(v,y),v.update())}function We(v,y){const P=v.colorSpace,W=v.format,k=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||P!==Ds&&P!==Fa&&(Ce.getTransfer(P)===Fe?(W!==Ai||k!==oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),y}function ke(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(p.width=v.naturalWidth||v.width,p.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(p.width=v.displayWidth,p.height=v.displayHeight):(p.width=v.width,p.height=v.height),p}this.allocateTextureUnit=ht,this.resetTextureUnits=j,this.setTexture2D=mt,this.setTexture2DArray=I,this.setTexture3D=at,this.setTextureCube=K,this.rebindTextures=Je,this.setupRenderTarget=G,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Wt}function T1(o,t){function i(r,l=Fa){let u;const d=Ce.getTransfer(l);if(r===oa)return o.UNSIGNED_BYTE;if(r===Uh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Lh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===N0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===O0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===U0)return o.BYTE;if(r===L0)return o.SHORT;if(r===Xo)return o.UNSIGNED_SHORT;if(r===Dh)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===Ko)return o.HALF_FLOAT;if(r===P0)return o.ALPHA;if(r===B0)return o.RGB;if(r===Ai)return o.RGBA;if(r===qo)return o.DEPTH_COMPONENT;if(r===jo)return o.DEPTH_STENCIL;if(r===Nh)return o.RED;if(r===Oh)return o.RED_INTEGER;if(r===I0)return o.RG;if(r===Ph)return o.RG_INTEGER;if(r===Bh)return o.RGBA_INTEGER;if(r===Bc||r===Ic||r===zc||r===Fc)if(d===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Bc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Bc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===th||r===eh||r===nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===th||r===eh)return d===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===nh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ih)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_h||r===vh||r===xh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===_h)return d===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yh||r===Sh||r===Mh||r===Eh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===yh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Sh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const A1=`
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

}`;class C1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Q0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Xa({vertexShader:A1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new An(new $o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w1 extends Ls{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,x=null,S=null,b=null,R=null;const D=typeof XRWebGLBinding<"u",M=new C1,g={},A=i.getContextAttributes();let B=null,L=null;const F=[],w=[],V=new xe;let tt=null;const O=new Ei;O.viewport=new sn;const T=new Ei;T.viewport=new sn;const q=[O,T],j=new ZS;let ht=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let St=F[st];return St===void 0&&(St=new Rd,F[st]=St),St.getTargetRaySpace()},this.getControllerGrip=function(st){let St=F[st];return St===void 0&&(St=new Rd,F[st]=St),St.getGripSpace()},this.getHand=function(st){let St=F[st];return St===void 0&&(St=new Rd,F[st]=St),St.getHandSpace()};function mt(st){const St=w.indexOf(st.inputSource);if(St===-1)return;const Lt=F[St];Lt!==void 0&&(Lt.update(st.inputSource,st.frame,p||d),Lt.dispatchEvent({type:st.type,data:st.inputSource}))}function I(){l.removeEventListener("select",mt),l.removeEventListener("selectstart",mt),l.removeEventListener("selectend",mt),l.removeEventListener("squeeze",mt),l.removeEventListener("squeezestart",mt),l.removeEventListener("squeezeend",mt),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",at);for(let st=0;st<F.length;st++){const St=w[st];St!==null&&(w[st]=null,F[st].disconnect(St))}ht=null,lt=null,M.reset();for(const st in g)delete g[st];t.setRenderTarget(B),b=null,S=null,x=null,l=null,L=null,kt.stop(),r.isPresenting=!1,t.setPixelRatio(tt),t.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){u=st,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){h=st,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",mt),l.addEventListener("selectstart",mt),l.addEventListener("selectend",mt),l.addEventListener("squeeze",mt),l.addEventListener("squeezestart",mt),l.addEventListener("squeezeend",mt),l.addEventListener("end",I),l.addEventListener("inputsourceschange",at),A.xrCompatible!==!0&&await i.makeXRCompatible(),tt=t.getPixelRatio(),t.getSize(V),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Qt=null,Zt=null;A.depth&&(Zt=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=A.stencil?jo:qo,Qt=A.stencil?Wo:Sr);const ue={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:u};x=this.getBinding(),S=x.createProjectionLayer(ue),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),L=new Mr(S.textureWidth,S.textureHeight,{format:Ai,type:oa,depthTexture:new K0(S.textureWidth,S.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Lt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),L=new Mr(b.framebufferWidth,b.framebufferHeight,{format:Ai,type:oa,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),kt.setContext(l),kt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function at(st){for(let St=0;St<st.removed.length;St++){const Lt=st.removed[St],Qt=w.indexOf(Lt);Qt>=0&&(w[Qt]=null,F[Qt].disconnect(Lt))}for(let St=0;St<st.added.length;St++){const Lt=st.added[St];let Qt=w.indexOf(Lt);if(Qt===-1){for(let ue=0;ue<F.length;ue++)if(ue>=w.length){w.push(Lt),Qt=ue;break}else if(w[ue]===null){w[ue]=Lt,Qt=ue;break}if(Qt===-1)break}const Zt=F[Qt];Zt&&Zt.connect(Lt)}}const K=new nt,At=new nt;function N(st,St,Lt){K.setFromMatrixPosition(St.matrixWorld),At.setFromMatrixPosition(Lt.matrixWorld);const Qt=K.distanceTo(At),Zt=St.projectionMatrix.elements,ue=Lt.projectionMatrix.elements,Je=Zt[14]/(Zt[10]-1),G=Zt[14]/(Zt[10]+1),we=(Zt[9]+1)/Zt[5],ce=(Zt[9]-1)/Zt[5],ee=(Zt[8]-1)/Zt[0],Vt=(ue[8]+1)/ue[0],Oe=Je*ee,Wt=Je*Vt,oe=Qt/(-ee+Vt),We=oe*-ee;if(St.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(We),st.translateZ(oe),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Zt[10]===-1)st.projectionMatrix.copy(St.projectionMatrix),st.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const ke=Je+oe,v=G+oe,y=Oe-We,P=Wt+(Qt-We),W=we*G/v*ke,k=ce*G/v*ke;st.projectionMatrix.makePerspective(y,P,W,k,ke,v),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function it(st,St){St===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(St.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let St=st.near,Lt=st.far;M.texture!==null&&(M.depthNear>0&&(St=M.depthNear),M.depthFar>0&&(Lt=M.depthFar)),j.near=T.near=O.near=St,j.far=T.far=O.far=Lt,(ht!==j.near||lt!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),ht=j.near,lt=j.far),j.layers.mask=st.layers.mask|6,O.layers.mask=j.layers.mask&3,T.layers.mask=j.layers.mask&5;const Qt=st.parent,Zt=j.cameras;it(j,Qt);for(let ue=0;ue<Zt.length;ue++)it(Zt[ue],Qt);Zt.length===2?N(j,O,T):j.projectionMatrix.copy(O.projectionMatrix),Tt(st,j,Qt)};function Tt(st,St,Lt){Lt===null?st.matrix.copy(St.matrixWorld):(st.matrix.copy(Lt.matrixWorld),st.matrix.invert(),st.matrix.multiply(St.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(St.projectionMatrix),st.projectionMatrixInverse.copy(St.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Th*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(S===null&&b===null))return m},this.setFoveation=function(st){m=st,S!==null&&(S.fixedFoveation=st),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=st)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(st){return g[st]};let Rt=null;function It(st,St){if(_=St.getViewerPose(p||d),R=St,_!==null){const Lt=_.views;b!==null&&(t.setRenderTargetFramebuffer(L,b.framebuffer),t.setRenderTarget(L));let Qt=!1;Lt.length!==j.cameras.length&&(j.cameras.length=0,Qt=!0);for(let G=0;G<Lt.length;G++){const we=Lt[G];let ce=null;if(b!==null)ce=b.getViewport(we);else{const Vt=x.getViewSubImage(S,we);ce=Vt.viewport,G===0&&(t.setRenderTargetTextures(L,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(L))}let ee=q[G];ee===void 0&&(ee=new Ei,ee.layers.enable(G),ee.viewport=new sn,q[G]=ee),ee.matrix.fromArray(we.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(we.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ce.x,ce.y,ce.width,ce.height),G===0&&(j.matrix.copy(ee.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Qt===!0&&j.cameras.push(ee)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=r.getBinding();const G=x.getDepthInformation(Lt[0]);G&&G.isValid&&G.texture&&M.init(G,l.renderState)}if(Zt&&Zt.includes("camera-access")&&D){t.state.unbindTexture(),x=r.getBinding();for(let G=0;G<Lt.length;G++){const we=Lt[G].camera;if(we){let ce=g[we];ce||(ce=new Q0,g[we]=ce);const ee=x.getCameraImage(we);ce.sourceTexture=ee}}}}for(let Lt=0;Lt<F.length;Lt++){const Qt=w[Lt],Zt=F[Lt];Qt!==null&&Zt!==void 0&&Zt.update(Qt,St,p||d)}Rt&&Rt(st,St),St.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:St}),R=null}const kt=new $0;kt.setAnimationLoop(It),this.setAnimationLoop=function(st){Rt=st},this.dispose=function(){}}}const hr=new la,D1=new je;function U1(o,t){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function r(M,g){g.color.getRGB(M.fogColor.value,X0(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,A,B,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(M,g):g.isMeshToonMaterial?(u(M,g),x(M,g)):g.isMeshPhongMaterial?(u(M,g),_(M,g)):g.isMeshStandardMaterial?(u(M,g),S(M,g),g.isMeshPhysicalMaterial&&b(M,g,L)):g.isMeshMatcapMaterial?(u(M,g),R(M,g)):g.isMeshDepthMaterial?u(M,g):g.isMeshDistanceMaterial?(u(M,g),D(M,g)):g.isMeshNormalMaterial?u(M,g):g.isLineBasicMaterial?(d(M,g),g.isLineDashedMaterial&&h(M,g)):g.isPointsMaterial?m(M,g,A,B):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===qn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===qn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const A=t.get(g),B=A.envMap,L=A.envMapRotation;B&&(M.envMap.value=B,hr.copy(L),hr.x*=-1,hr.y*=-1,hr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),M.envMapRotation.value.setFromMatrix4(D1.makeRotationFromEuler(hr)),M.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function d(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function h(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function m(M,g,A,B){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*A,M.scale.value=B*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function x(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function S(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function b(M,g,A){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=A.texture,M.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,g){g.matcap&&(M.matcap.value=g.matcap)}function D(M,g){const A=t.get(g).light;M.referencePosition.value.setFromMatrixPosition(A.matrixWorld),M.nearDistance.value=A.shadow.camera.near,M.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function L1(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,B){const L=B.program;r.uniformBlockBinding(A,L)}function p(A,B){let L=l[A.id];L===void 0&&(R(A),L=_(A),l[A.id]=L,A.addEventListener("dispose",M));const F=B.program;r.updateUBOMapping(A,F);const w=t.render.frame;u[A.id]!==w&&(S(A),u[A.id]=w)}function _(A){const B=x();A.__bindingPointIndex=B;const L=o.createBuffer(),F=A.__size,w=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,F,w),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,B,L),L}function x(){for(let A=0;A<h;A++)if(d.indexOf(A)===-1)return d.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(A){const B=l[A.id],L=A.uniforms,F=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,B);for(let w=0,V=L.length;w<V;w++){const tt=Array.isArray(L[w])?L[w]:[L[w]];for(let O=0,T=tt.length;O<T;O++){const q=tt[O];if(b(q,w,O,F)===!0){const j=q.__offset,ht=Array.isArray(q.value)?q.value:[q.value];let lt=0;for(let mt=0;mt<ht.length;mt++){const I=ht[mt],at=D(I);typeof I=="number"||typeof I=="boolean"?(q.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,j+lt,q.__data)):I.isMatrix3?(q.__data[0]=I.elements[0],q.__data[1]=I.elements[1],q.__data[2]=I.elements[2],q.__data[3]=0,q.__data[4]=I.elements[3],q.__data[5]=I.elements[4],q.__data[6]=I.elements[5],q.__data[7]=0,q.__data[8]=I.elements[6],q.__data[9]=I.elements[7],q.__data[10]=I.elements[8],q.__data[11]=0):(I.toArray(q.__data,lt),lt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,q.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(A,B,L,F){const w=A.value,V=B+"_"+L;if(F[V]===void 0)return typeof w=="number"||typeof w=="boolean"?F[V]=w:F[V]=w.clone(),!0;{const tt=F[V];if(typeof w=="number"||typeof w=="boolean"){if(tt!==w)return F[V]=w,!0}else if(tt.equals(w)===!1)return tt.copy(w),!0}return!1}function R(A){const B=A.uniforms;let L=0;const F=16;for(let V=0,tt=B.length;V<tt;V++){const O=Array.isArray(B[V])?B[V]:[B[V]];for(let T=0,q=O.length;T<q;T++){const j=O[T],ht=Array.isArray(j.value)?j.value:[j.value];for(let lt=0,mt=ht.length;lt<mt;lt++){const I=ht[lt],at=D(I),K=L%F,At=K%at.boundary,N=K+At;L+=At,N!==0&&F-N<at.storage&&(L+=F-N),j.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=L,L+=at.storage}}}const w=L%F;return w>0&&(L+=F-w),A.__size=L,A.__cache={},this}function D(A){const B={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(B.boundary=4,B.storage=4):A.isVector2?(B.boundary=8,B.storage=8):A.isVector3||A.isColor?(B.boundary=16,B.storage=12):A.isVector4?(B.boundary=16,B.storage=16):A.isMatrix3?(B.boundary=48,B.storage=48):A.isMatrix4?(B.boundary=64,B.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),B}function M(A){const B=A.target;B.removeEventListener("dispose",M);const L=d.indexOf(B.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[B.id]),delete l[B.id],delete u[B.id]}function g(){for(const A in l)o.deleteBuffer(l[A]);d=[],l={},u={}}return{bind:m,update:p,dispose:g}}class N1{constructor(t={}){const{canvas:i=uS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const R=new Uint32Array(4),D=new Int32Array(4);let M=null,g=null;const A=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let F=!1;this._outputColorSpace=hi;let w=0,V=0,tt=null,O=-1,T=null;const q=new sn,j=new sn;let ht=null;const lt=new ge(0);let mt=0,I=i.width,at=i.height,K=1,At=null,N=null;const it=new sn(0,0,I,at),Tt=new sn(0,0,I,at);let Rt=!1;const It=new Z0;let kt=!1,st=!1;const St=new je,Lt=new nt,Qt=new sn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Je(){return tt===null?K:1}let G=r;function we(U,Q){return i.getContext(U,Q)}try{const U={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",Ot,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),G===null){const Q="webgl2";if(G=we(Q,U),G===null)throw we(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let ce,ee,Vt,Oe,Wt,oe,We,ke,v,y,P,W,k,X,pt,ut,yt,_t,gt,Et,Ut,Bt,Nt,ne;function Y(){ce=new kb(G),ce.init(),Bt=new T1(G,ce),ee=new Bb(G,ce,t,Bt),Vt=new E1(G,ce),ee.reversedDepthBuffer&&S&&Vt.buffers.depth.setReversed(!0),Oe=new qb(G),Wt=new u1,oe=new b1(G,ce,Vt,Wt,ee,Bt,Oe),We=new zb(L),ke=new Vb(L),v=new JS(G),Nt=new Ob(G,v),y=new Xb(G,v,Oe,Nt),P=new Yb(G,y,v,Oe),gt=new jb(G,ee,oe),ut=new Ib(Wt),W=new c1(L,We,ke,ce,ee,Nt,ut),k=new U1(L,Wt),X=new d1,pt=new v1(ce),_t=new Nb(L,We,ke,Vt,P,b,m),yt=new S1(L,P,ee),ne=new L1(G,Oe,ee,Vt),Et=new Pb(G,ce,Oe),Ut=new Wb(G,ce,Oe),Oe.programs=W.programs,L.capabilities=ee,L.extensions=ce,L.properties=Wt,L.renderLists=X,L.shadowMap=yt,L.state=Vt,L.info=Oe}Y();const wt=new w1(L,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const U=ce.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=ce.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(U){U!==void 0&&(K=U,this.setSize(I,at,!1))},this.getSize=function(U){return U.set(I,at)},this.setSize=function(U,Q,ft=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=U,at=Q,i.width=Math.floor(U*K),i.height=Math.floor(Q*K),ft===!0&&(i.style.width=U+"px",i.style.height=Q+"px"),this.setViewport(0,0,U,Q)},this.getDrawingBufferSize=function(U){return U.set(I*K,at*K).floor()},this.setDrawingBufferSize=function(U,Q,ft){I=U,at=Q,K=ft,i.width=Math.floor(U*ft),i.height=Math.floor(Q*ft),this.setViewport(0,0,U,Q)},this.getCurrentViewport=function(U){return U.copy(q)},this.getViewport=function(U){return U.copy(it)},this.setViewport=function(U,Q,ft,dt){U.isVector4?it.set(U.x,U.y,U.z,U.w):it.set(U,Q,ft,dt),Vt.viewport(q.copy(it).multiplyScalar(K).round())},this.getScissor=function(U){return U.copy(Tt)},this.setScissor=function(U,Q,ft,dt){U.isVector4?Tt.set(U.x,U.y,U.z,U.w):Tt.set(U,Q,ft,dt),Vt.scissor(j.copy(Tt).multiplyScalar(K).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(U){Vt.setScissorTest(Rt=U)},this.setOpaqueSort=function(U){At=U},this.setTransparentSort=function(U){N=U},this.getClearColor=function(U){return U.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(U=!0,Q=!0,ft=!0){let dt=0;if(U){let $=!1;if(tt!==null){const Dt=tt.texture.format;$=Dt===Bh||Dt===Ph||Dt===Oh}if($){const Dt=tt.texture.type,zt=Dt===oa||Dt===Sr||Dt===Xo||Dt===Wo||Dt===Uh||Dt===Lh,Xt=_t.getClearColor(),Ft=_t.getClearAlpha(),te=Xt.r,ae=Xt.g,Kt=Xt.b;zt?(R[0]=te,R[1]=ae,R[2]=Kt,R[3]=Ft,G.clearBufferuiv(G.COLOR,0,R)):(D[0]=te,D[1]=ae,D[2]=Kt,D[3]=Ft,G.clearBufferiv(G.COLOR,0,D))}else dt|=G.COLOR_BUFFER_BIT}Q&&(dt|=G.DEPTH_BUFFER_BIT),ft&&(dt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),_t.dispose(),X.dispose(),pt.dispose(),Wt.dispose(),We.dispose(),ke.dispose(),P.dispose(),Nt.dispose(),ne.dispose(),W.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",fn),wt.removeEventListener("sessionend",dn),$e.stop()};function Ot(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const U=Oe.autoReset,Q=yt.enabled,ft=yt.autoUpdate,dt=yt.needsUpdate,$=yt.type;Y(),Oe.autoReset=U,yt.enabled=Q,yt.autoUpdate=ft,yt.needsUpdate=dt,yt.type=$}function Ct(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Mt(U){const Q=U.target;Q.removeEventListener("dispose",Mt),jt(Q)}function jt(U){le(U),Wt.remove(U)}function le(U){const Q=Wt.get(U).programs;Q!==void 0&&(Q.forEach(function(ft){W.releaseProgram(ft)}),U.isShaderMaterial&&W.releaseShaderCache(U))}this.renderBufferDirect=function(U,Q,ft,dt,$,Dt){Q===null&&(Q=Zt);const zt=$.isMesh&&$.matrixWorld.determinant()<0,Xt=ca(U,Q,ft,dt,$);Vt.setMaterial(dt,zt);let Ft=ft.index,te=1;if(dt.wireframe===!0){if(Ft=y.getWireframeAttribute(ft),Ft===void 0)return;te=2}const ae=ft.drawRange,Kt=ft.attributes.position;let he=ae.start*te,Ae=(ae.start+ae.count)*te;Dt!==null&&(he=Math.max(he,Dt.start*te),Ae=Math.min(Ae,(Dt.start+Dt.count)*te)),Ft!==null?(he=Math.max(he,0),Ae=Math.min(Ae,Ft.count)):Kt!=null&&(he=Math.max(he,0),Ae=Math.min(Ae,Kt.count));const Ye=Ae-he;if(Ye<0||Ye===1/0)return;Nt.setup($,dt,Xt,ft,Ft);let Pe,pe=Et;if(Ft!==null&&(Pe=v.get(Ft),pe=Ut,pe.setIndex(Pe)),$.isMesh)dt.wireframe===!0?(Vt.setLineWidth(dt.wireframeLinewidth*Je()),pe.setMode(G.LINES)):pe.setMode(G.TRIANGLES);else if($.isLine){let $t=dt.linewidth;$t===void 0&&($t=1),Vt.setLineWidth($t*Je()),$.isLineSegments?pe.setMode(G.LINES):$.isLineLoop?pe.setMode(G.LINE_LOOP):pe.setMode(G.LINE_STRIP)}else $.isPoints?pe.setMode(G.POINTS):$.isSprite&&pe.setMode(G.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))pe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const $t=$._multiDrawStarts,qe=$._multiDrawCounts,ye=$._multiDrawCount,Rn=Ft?v.get(Ft).bytesPerElement:1,gi=Wt.get(dt).currentProgram.getUniforms();for(let Pn=0;Pn<ye;Pn++)gi.setValue(G,"_gl_DrawID",Pn),pe.render($t[Pn]/Rn,qe[Pn])}else if($.isInstancedMesh)pe.renderInstances(he,Ye,$.count);else if(ft.isInstancedBufferGeometry){const $t=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,qe=Math.min(ft.instanceCount,$t);pe.renderInstances(he,Ye,qe)}else pe.render(he,Ye)};function Ue(U,Q,ft){U.transparent===!0&&U.side===bi&&U.forceSinglePass===!1?(U.side=qn,U.needsUpdate=!0,Ci(U,Q,ft),U.side=ka,U.needsUpdate=!0,Ci(U,Q,ft),U.side=bi):Ci(U,Q,ft)}this.compile=function(U,Q,ft=null){ft===null&&(ft=U),g=pt.get(ft),g.init(Q),B.push(g),ft.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),U!==ft&&U.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights();const dt=new Set;return U.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Dt=$.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){const Xt=Dt[zt];Ue(Xt,ft,$),dt.add(Xt)}else Ue(Dt,ft,$),dt.add(Dt)}),g=B.pop(),dt},this.compileAsync=function(U,Q,ft=null){const dt=this.compile(U,Q,ft);return new Promise($=>{function Dt(){if(dt.forEach(function(zt){Wt.get(zt).currentProgram.isReady()&&dt.delete(zt)}),dt.size===0){$(U);return}setTimeout(Dt,10)}ce.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Te=null;function mi(U){Te&&Te(U)}function fn(){$e.stop()}function dn(){$e.start()}const $e=new $0;$e.setAnimationLoop(mi),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(U){Te=U,wt.setAnimationLoop(U),U===null?$e.stop():$e.start()},wt.addEventListener("sessionstart",fn),wt.addEventListener("sessionend",dn),this.render=function(U,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(Q),Q=wt.getCamera()),U.isScene===!0&&U.onBeforeRender(L,U,Q,tt),g=pt.get(U,B.length),g.init(Q),B.push(g),St.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),It.setFromProjectionMatrix(St,Ii,Q.reversedDepth),st=this.localClippingEnabled,kt=ut.init(this.clippingPlanes,st),M=X.get(U,A.length),M.init(),A.push(M),wt.enabled===!0&&wt.isPresenting===!0){const Dt=L.xr.getDepthSensingMesh();Dt!==null&&Ri(Dt,Q,-1/0,L.sortObjects)}Ri(U,Q,0,L.sortObjects),M.finish(),L.sortObjects===!0&&M.sort(At,N),ue=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ue&&_t.addToRenderList(M,U),this.info.render.frame++,kt===!0&&ut.beginShadows();const ft=g.state.shadowsArray;yt.render(ft,U,Q),kt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const dt=M.opaque,$=M.transmissive;if(g.setupLights(),Q.isArrayCamera){const Dt=Q.cameras;if($.length>0)for(let zt=0,Xt=Dt.length;zt<Xt;zt++){const Ft=Dt[zt];tl(dt,$,U,Ft)}ue&&_t.render(U);for(let zt=0,Xt=Dt.length;zt<Xt;zt++){const Ft=Dt[zt];br(M,U,Ft,Ft.viewport)}}else $.length>0&&tl(dt,$,U,Q),ue&&_t.render(U),br(M,U,Q);tt!==null&&V===0&&(oe.updateMultisampleRenderTarget(tt),oe.updateRenderTargetMipmap(tt)),U.isScene===!0&&U.onAfterRender(L,U,Q),Nt.resetDefaultState(),O=-1,T=null,B.pop(),B.length>0?(g=B[B.length-1],kt===!0&&ut.setGlobalState(L.clippingPlanes,g.state.camera)):g=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Ri(U,Q,ft,dt){if(U.visible===!1)return;if(U.layers.test(Q.layers)){if(U.isGroup)ft=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Q);else if(U.isLight)g.pushLight(U),U.castShadow&&g.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||It.intersectsSprite(U)){dt&&Qt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(St);const zt=P.update(U),Xt=U.material;Xt.visible&&M.push(U,zt,Xt,ft,Qt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||It.intersectsObject(U))){const zt=P.update(U),Xt=U.material;if(dt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Qt.copy(U.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Qt.copy(zt.boundingSphere.center)),Qt.applyMatrix4(U.matrixWorld).applyMatrix4(St)),Array.isArray(Xt)){const Ft=zt.groups;for(let te=0,ae=Ft.length;te<ae;te++){const Kt=Ft[te],he=Xt[Kt.materialIndex];he&&he.visible&&M.push(U,zt,he,ft,Qt.z,Kt)}}else Xt.visible&&M.push(U,zt,Xt,ft,Qt.z,null)}}const Dt=U.children;for(let zt=0,Xt=Dt.length;zt<Xt;zt++)Ri(Dt[zt],Q,ft,dt)}function br(U,Q,ft,dt){const $=U.opaque,Dt=U.transmissive,zt=U.transparent;g.setupLightsView(ft),kt===!0&&ut.setGlobalState(L.clippingPlanes,ft),dt&&Vt.viewport(q.copy(dt)),$.length>0&&Tr($,Q,ft),Dt.length>0&&Tr(Dt,Q,ft),zt.length>0&&Tr(zt,Q,ft),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function tl(U,Q,ft,dt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[dt.id]===void 0&&(g.state.transmissionRenderTarget[dt.id]=new Mr(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Ko:oa,minFilter:yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Dt=g.state.transmissionRenderTarget[dt.id],zt=dt.viewport||q;Dt.setSize(zt.z*L.transmissionResolutionScale,zt.w*L.transmissionResolutionScale);const Xt=L.getRenderTarget(),Ft=L.getActiveCubeFace(),te=L.getActiveMipmapLevel();L.setRenderTarget(Dt),L.getClearColor(lt),mt=L.getClearAlpha(),mt<1&&L.setClearColor(16777215,.5),L.clear(),ue&&_t.render(ft);const ae=L.toneMapping;L.toneMapping=Ga;const Kt=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),g.setupLightsView(dt),kt===!0&&ut.setGlobalState(L.clippingPlanes,dt),Tr(U,ft,dt),oe.updateMultisampleRenderTarget(Dt),oe.updateRenderTargetMipmap(Dt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Ae=0,Ye=Q.length;Ae<Ye;Ae++){const Pe=Q[Ae],pe=Pe.object,$t=Pe.geometry,qe=Pe.material,ye=Pe.group;if(qe.side===bi&&pe.layers.test(dt.layers)){const Rn=qe.side;qe.side=qn,qe.needsUpdate=!0,Bs(pe,ft,dt,$t,qe,ye),qe.side=Rn,qe.needsUpdate=!0,he=!0}}he===!0&&(oe.updateMultisampleRenderTarget(Dt),oe.updateRenderTargetMipmap(Dt))}L.setRenderTarget(Xt,Ft,te),L.setClearColor(lt,mt),Kt!==void 0&&(dt.viewport=Kt),L.toneMapping=ae}function Tr(U,Q,ft){const dt=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Dt=U.length;$<Dt;$++){const zt=U[$],Xt=zt.object,Ft=zt.geometry,te=zt.group;let ae=zt.material;ae.allowOverride===!0&&dt!==null&&(ae=dt),Xt.layers.test(ft.layers)&&Bs(Xt,Q,ft,Ft,ae,te)}}function Bs(U,Q,ft,dt,$,Dt){U.onBeforeRender(L,Q,ft,dt,$,Dt),U.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),$.onBeforeRender(L,Q,ft,dt,U,Dt),$.transparent===!0&&$.side===bi&&$.forceSinglePass===!1?($.side=qn,$.needsUpdate=!0,L.renderBufferDirect(ft,Q,dt,$,U,Dt),$.side=ka,$.needsUpdate=!0,L.renderBufferDirect(ft,Q,dt,$,U,Dt),$.side=bi):L.renderBufferDirect(ft,Q,dt,$,U,Dt),U.onAfterRender(L,Q,ft,dt,$,Dt)}function Ci(U,Q,ft){Q.isScene!==!0&&(Q=Zt);const dt=Wt.get(U),$=g.state.lights,Dt=g.state.shadowsArray,zt=$.state.version,Xt=W.getParameters(U,$.state,Dt,Q,ft),Ft=W.getProgramCacheKey(Xt);let te=dt.programs;dt.environment=U.isMeshStandardMaterial?Q.environment:null,dt.fog=Q.fog,dt.envMap=(U.isMeshStandardMaterial?ke:We).get(U.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&U.envMap===null?Q.environmentRotation:U.envMapRotation,te===void 0&&(U.addEventListener("dispose",Mt),te=new Map,dt.programs=te);let ae=te.get(Ft);if(ae!==void 0){if(dt.currentProgram===ae&&dt.lightsStateVersion===zt)return zi(U,Xt),ae}else Xt.uniforms=W.getUniforms(U),U.onBeforeCompile(Xt,L),ae=W.acquireProgram(Xt,Ft),te.set(Ft,ae),dt.uniforms=Xt.uniforms;const Kt=dt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Kt.clippingPlanes=ut.uniform),zi(U,Xt),dt.needsLights=ua(U),dt.lightsStateVersion=zt,dt.needsLights&&(Kt.ambientLightColor.value=$.state.ambient,Kt.lightProbe.value=$.state.probe,Kt.directionalLights.value=$.state.directional,Kt.directionalLightShadows.value=$.state.directionalShadow,Kt.spotLights.value=$.state.spot,Kt.spotLightShadows.value=$.state.spotShadow,Kt.rectAreaLights.value=$.state.rectArea,Kt.ltc_1.value=$.state.rectAreaLTC1,Kt.ltc_2.value=$.state.rectAreaLTC2,Kt.pointLights.value=$.state.point,Kt.pointLightShadows.value=$.state.pointShadow,Kt.hemisphereLights.value=$.state.hemi,Kt.directionalShadowMap.value=$.state.directionalShadowMap,Kt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Kt.spotShadowMap.value=$.state.spotShadowMap,Kt.spotLightMatrix.value=$.state.spotLightMatrix,Kt.spotLightMap.value=$.state.spotLightMap,Kt.pointShadowMap.value=$.state.pointShadowMap,Kt.pointShadowMatrix.value=$.state.pointShadowMatrix),dt.currentProgram=ae,dt.uniformsList=null,ae}function Ar(U){if(U.uniformsList===null){const Q=U.currentProgram.getUniforms();U.uniformsList=Hc.seqWithValue(Q.seq,U.uniforms)}return U.uniformsList}function zi(U,Q){const ft=Wt.get(U);ft.outputColorSpace=Q.outputColorSpace,ft.batching=Q.batching,ft.batchingColor=Q.batchingColor,ft.instancing=Q.instancing,ft.instancingColor=Q.instancingColor,ft.instancingMorph=Q.instancingMorph,ft.skinning=Q.skinning,ft.morphTargets=Q.morphTargets,ft.morphNormals=Q.morphNormals,ft.morphColors=Q.morphColors,ft.morphTargetsCount=Q.morphTargetsCount,ft.numClippingPlanes=Q.numClippingPlanes,ft.numIntersection=Q.numClipIntersection,ft.vertexAlphas=Q.vertexAlphas,ft.vertexTangents=Q.vertexTangents,ft.toneMapping=Q.toneMapping}function ca(U,Q,ft,dt,$){Q.isScene!==!0&&(Q=Zt),oe.resetTextureUnits();const Dt=Q.fog,zt=dt.isMeshStandardMaterial?Q.environment:null,Xt=tt===null?L.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ds,Ft=(dt.isMeshStandardMaterial?ke:We).get(dt.envMap||zt),te=dt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ae=!!ft.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),Kt=!!ft.morphAttributes.position,he=!!ft.morphAttributes.normal,Ae=!!ft.morphAttributes.color;let Ye=Ga;dt.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ye=L.toneMapping);const Pe=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,pe=Pe!==void 0?Pe.length:0,$t=Wt.get(dt),qe=g.state.lights;if(kt===!0&&(st===!0||U!==T)){const tn=U===T&&dt.id===O;ut.setState(dt,U,tn)}let ye=!1;dt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==qe.state.version||$t.outputColorSpace!==Xt||$.isBatchedMesh&&$t.batching===!1||!$.isBatchedMesh&&$t.batching===!0||$.isBatchedMesh&&$t.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&$t.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&$t.instancing===!1||!$.isInstancedMesh&&$t.instancing===!0||$.isSkinnedMesh&&$t.skinning===!1||!$.isSkinnedMesh&&$t.skinning===!0||$.isInstancedMesh&&$t.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$t.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&$t.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&$t.instancingMorph===!1&&$.morphTexture!==null||$t.envMap!==Ft||dt.fog===!0&&$t.fog!==Dt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==ut.numPlanes||$t.numIntersection!==ut.numIntersection)||$t.vertexAlphas!==te||$t.vertexTangents!==ae||$t.morphTargets!==Kt||$t.morphNormals!==he||$t.morphColors!==Ae||$t.toneMapping!==Ye||$t.morphTargetsCount!==pe)&&(ye=!0):(ye=!0,$t.__version=dt.version);let Rn=$t.currentProgram;ye===!0&&(Rn=Ci(dt,Q,$));let gi=!1,Pn=!1,_n=!1;const Ge=Rn.getUniforms(),Bn=$t.uniforms;if(Vt.useProgram(Rn.program)&&(gi=!0,Pn=!0,_n=!0),dt.id!==O&&(O=dt.id,Pn=!0),gi||T!==U){Vt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Ge.setValue(G,"projectionMatrix",U.projectionMatrix),Ge.setValue(G,"viewMatrix",U.matrixWorldInverse);const Mn=Ge.map.cameraPosition;Mn!==void 0&&Mn.setValue(G,Lt.setFromMatrixPosition(U.matrixWorld)),ee.logarithmicDepthBuffer&&Ge.setValue(G,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Ge.setValue(G,"isOrthographic",U.isOrthographicCamera===!0),T!==U&&(T=U,Pn=!0,_n=!0)}if($.isSkinnedMesh){Ge.setOptional(G,$,"bindMatrix"),Ge.setOptional(G,$,"bindMatrixInverse");const tn=$.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ge.setValue(G,"boneTexture",tn.boneTexture,oe))}$.isBatchedMesh&&(Ge.setOptional(G,$,"batchingTexture"),Ge.setValue(G,"batchingTexture",$._matricesTexture,oe),Ge.setOptional(G,$,"batchingIdTexture"),Ge.setValue(G,"batchingIdTexture",$._indirectTexture,oe),Ge.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&Ge.setValue(G,"batchingColorTexture",$._colorsTexture,oe));const Cn=ft.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&gt.update($,ft,Rn),(Pn||$t.receiveShadow!==$.receiveShadow)&&($t.receiveShadow=$.receiveShadow,Ge.setValue(G,"receiveShadow",$.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(Bn.envMap.value=Ft,Bn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&Q.environment!==null&&(Bn.envMapIntensity.value=Q.environmentIntensity),Pn&&(Ge.setValue(G,"toneMappingExposure",L.toneMappingExposure),$t.needsLights&&Wa(Bn,_n),Dt&&dt.fog===!0&&k.refreshFogUniforms(Bn,Dt),k.refreshMaterialUniforms(Bn,dt,K,at,g.state.transmissionRenderTarget[U.id]),Hc.upload(G,Ar($t),Bn,oe)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(Hc.upload(G,Ar($t),Bn,oe),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Ge.setValue(G,"center",$.center),Ge.setValue(G,"modelViewMatrix",$.modelViewMatrix),Ge.setValue(G,"normalMatrix",$.normalMatrix),Ge.setValue(G,"modelMatrix",$.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const tn=dt.uniformsGroups;for(let Mn=0,Rr=tn.length;Mn<Rr;Mn++){const Gn=tn[Mn];ne.update(Gn,Rn),ne.bind(Gn,Rn)}}return Rn}function Wa(U,Q){U.ambientLightColor.needsUpdate=Q,U.lightProbe.needsUpdate=Q,U.directionalLights.needsUpdate=Q,U.directionalLightShadows.needsUpdate=Q,U.pointLights.needsUpdate=Q,U.pointLightShadows.needsUpdate=Q,U.spotLights.needsUpdate=Q,U.spotLightShadows.needsUpdate=Q,U.rectAreaLights.needsUpdate=Q,U.hemisphereLights.needsUpdate=Q}function ua(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(U,Q,ft){const dt=Wt.get(U);dt.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),Wt.get(U.texture).__webglTexture=Q,Wt.get(U.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:ft,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,Q){const ft=Wt.get(U);ft.__webglFramebuffer=Q,ft.__useDefaultFramebuffer=Q===void 0};const on=G.createFramebuffer();this.setRenderTarget=function(U,Q=0,ft=0){tt=U,w=Q,V=ft;let dt=!0,$=null,Dt=!1,zt=!1;if(U){const Ft=Wt.get(U);if(Ft.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(G.FRAMEBUFFER,null),dt=!1;else if(Ft.__webglFramebuffer===void 0)oe.setupRenderTarget(U);else if(Ft.__hasExternalTextures)oe.rebindTextures(U,Wt.get(U.texture).__webglTexture,Wt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Kt=U.depthTexture;if(Ft.__boundDepthTexture!==Kt){if(Kt!==null&&Wt.has(Kt)&&(U.width!==Kt.image.width||U.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(U)}}const te=U.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(zt=!0);const ae=Wt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ae[Q])?$=ae[Q][ft]:$=ae[Q],Dt=!0):U.samples>0&&oe.useMultisampledRTT(U)===!1?$=Wt.get(U).__webglMultisampledFramebuffer:Array.isArray(ae)?$=ae[ft]:$=ae,q.copy(U.viewport),j.copy(U.scissor),ht=U.scissorTest}else q.copy(it).multiplyScalar(K).floor(),j.copy(Tt).multiplyScalar(K).floor(),ht=Rt;if(ft!==0&&($=on),Vt.bindFramebuffer(G.FRAMEBUFFER,$)&&dt&&Vt.drawBuffers(U,$),Vt.viewport(q),Vt.scissor(j),Vt.setScissorTest(ht),Dt){const Ft=Wt.get(U.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft.__webglTexture,ft)}else if(zt){const Ft=Q;for(let te=0;te<U.textures.length;te++){const ae=Wt.get(U.textures[te]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+te,ae.__webglTexture,ft,Ft)}}else if(U!==null&&ft!==0){const Ft=Wt.get(U.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ft.__webglTexture,ft)}O=-1},this.readRenderTargetPixels=function(U,Q,ft,dt,$,Dt,zt,Xt=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Wt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&zt!==void 0&&(Ft=Ft[zt]),Ft){Vt.bindFramebuffer(G.FRAMEBUFFER,Ft);try{const te=U.textures[Xt],ae=te.format,Kt=te.type;if(!ee.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=U.width-dt&&ft>=0&&ft<=U.height-$&&(U.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Xt),G.readPixels(Q,ft,dt,$,Bt.convert(ae),Bt.convert(Kt),Dt))}finally{const te=tt!==null?Wt.get(tt).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(U,Q,ft,dt,$,Dt,zt,Xt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Wt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&zt!==void 0&&(Ft=Ft[zt]),Ft)if(Q>=0&&Q<=U.width-dt&&ft>=0&&ft<=U.height-$){Vt.bindFramebuffer(G.FRAMEBUFFER,Ft);const te=U.textures[Xt],ae=te.format,Kt=te.type;if(!ee.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,he),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),U.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Xt),G.readPixels(Q,ft,dt,$,Bt.convert(ae),Bt.convert(Kt),0);const Ae=tt!==null?Wt.get(tt).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,Ae);const Ye=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await fS(G,Ye,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,he),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer(he),G.deleteSync(Ye),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,Q=null,ft=0){const dt=Math.pow(2,-ft),$=Math.floor(U.image.width*dt),Dt=Math.floor(U.image.height*dt),zt=Q!==null?Q.x:0,Xt=Q!==null?Q.y:0;oe.setTexture2D(U,0),G.copyTexSubImage2D(G.TEXTURE_2D,ft,0,0,zt,Xt,$,Dt),Vt.unbindTexture()};const el=G.createFramebuffer(),nl=G.createFramebuffer();this.copyTextureToTexture=function(U,Q,ft=null,dt=null,$=0,Dt=null){Dt===null&&($!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=$,$=0):Dt=0);let zt,Xt,Ft,te,ae,Kt,he,Ae,Ye;const Pe=U.isCompressedTexture?U.mipmaps[Dt]:U.image;if(ft!==null)zt=ft.max.x-ft.min.x,Xt=ft.max.y-ft.min.y,Ft=ft.isBox3?ft.max.z-ft.min.z:1,te=ft.min.x,ae=ft.min.y,Kt=ft.isBox3?ft.min.z:0;else{const Cn=Math.pow(2,-$);zt=Math.floor(Pe.width*Cn),Xt=Math.floor(Pe.height*Cn),U.isDataArrayTexture?Ft=Pe.depth:U.isData3DTexture?Ft=Math.floor(Pe.depth*Cn):Ft=1,te=0,ae=0,Kt=0}dt!==null?(he=dt.x,Ae=dt.y,Ye=dt.z):(he=0,Ae=0,Ye=0);const pe=Bt.convert(Q.format),$t=Bt.convert(Q.type);let qe;Q.isData3DTexture?(oe.setTexture3D(Q,0),qe=G.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(oe.setTexture2DArray(Q,0),qe=G.TEXTURE_2D_ARRAY):(oe.setTexture2D(Q,0),qe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment);const ye=G.getParameter(G.UNPACK_ROW_LENGTH),Rn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),gi=G.getParameter(G.UNPACK_SKIP_PIXELS),Pn=G.getParameter(G.UNPACK_SKIP_ROWS),_n=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Pe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,te),G.pixelStorei(G.UNPACK_SKIP_ROWS,ae),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Kt);const Ge=U.isDataArrayTexture||U.isData3DTexture,Bn=Q.isDataArrayTexture||Q.isData3DTexture;if(U.isDepthTexture){const Cn=Wt.get(U),tn=Wt.get(Q),Mn=Wt.get(Cn.__renderTarget),Rr=Wt.get(tn.__renderTarget);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Gn=0;Gn<Ft;Gn++)Ge&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Wt.get(U).__webglTexture,$,Kt+Gn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Wt.get(Q).__webglTexture,Dt,Ye+Gn)),G.blitFramebuffer(te,ae,zt,Xt,he,Ae,zt,Xt,G.DEPTH_BUFFER_BIT,G.NEAREST);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||U.isRenderTargetTexture||Wt.has(U)){const Cn=Wt.get(U),tn=Wt.get(Q);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,el),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,nl);for(let Mn=0;Mn<Ft;Mn++)Ge?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Cn.__webglTexture,$,Kt+Mn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Cn.__webglTexture,$),Bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tn.__webglTexture,Dt,Ye+Mn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,tn.__webglTexture,Dt),$!==0?G.blitFramebuffer(te,ae,zt,Xt,he,Ae,zt,Xt,G.COLOR_BUFFER_BIT,G.NEAREST):Bn?G.copyTexSubImage3D(qe,Dt,he,Ae,Ye+Mn,te,ae,zt,Xt):G.copyTexSubImage2D(qe,Dt,he,Ae,te,ae,zt,Xt);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Bn?U.isDataTexture||U.isData3DTexture?G.texSubImage3D(qe,Dt,he,Ae,Ye,zt,Xt,Ft,pe,$t,Pe.data):Q.isCompressedArrayTexture?G.compressedTexSubImage3D(qe,Dt,he,Ae,Ye,zt,Xt,Ft,pe,Pe.data):G.texSubImage3D(qe,Dt,he,Ae,Ye,zt,Xt,Ft,pe,$t,Pe):U.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,he,Ae,zt,Xt,pe,$t,Pe.data):U.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,he,Ae,Pe.width,Pe.height,pe,Pe.data):G.texSubImage2D(G.TEXTURE_2D,Dt,he,Ae,zt,Xt,pe,$t,Pe);G.pixelStorei(G.UNPACK_ROW_LENGTH,ye),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Rn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,gi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Pn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,_n),Dt===0&&Q.generateMipmaps&&G.generateMipmap(qe),Vt.unbindTexture()},this.initRenderTarget=function(U){Wt.get(U).__webglFramebuffer===void 0&&oe.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?oe.setTextureCube(U,0):U.isData3DTexture?oe.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?oe.setTexture2DArray(U,0):oe.setTexture2D(U,0),Vt.unbindTexture()},this.resetState=function(){w=0,V=0,tt=null,Vt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const av={xRange:[-2,2],yRange:[-1.5,1.5],gridDivisions:8,axisColor:8947848,gridColor:3355443},O1=o=>{const{xRange:t,yRange:i,gridDivisions:r,axisColor:l,gridColor:u}=av,[d,h]=t,[m,p]=i,_=(h-d)/r,x=(p-m)/r,S=new Vo;S.name="coordinate-system";for(let R=0;R<=r;R++){const D=d+R*_,M=Math.abs(D)<.01,g=[new nt(D,m,-.01),new nt(D,p,-.01)],A=new Hn().setFromPoints(g),B=new Zo({color:M?l:u,transparent:!0,opacity:M?1:.4}),L=new jc(A,B);L.userData.isGrid=!0,S.add(L)}for(let R=0;R<=r;R++){const D=m+R*x,M=Math.abs(D)<.01,g=[new nt(d,D,-.01),new nt(h,D,-.01)],A=new Hn().setFromPoints(g),B=new Zo({color:M?l:u,transparent:!0,opacity:M?1:.4}),L=new jc(A,B);L.userData.isGrid=!0,S.add(L)}const b=(R,D,M=.15)=>{const g=document.createElement("canvas"),A=g.getContext("2d");g.width=128,g.height=64,A.fillStyle="transparent",A.fillRect(0,0,g.width,g.height),A.font="Bold 32px Arial",A.fillStyle="#aaaaaa",A.textAlign="center",A.textBaseline="middle",A.fillText(R,g.width/2,g.height/2);const B=new qS(g);B.minFilter=Ti;const L=new j0({map:B,transparent:!0,depthTest:!1}),F=new zS(L);return F.position.copy(D),F.scale.set(M*2,M,1),F.userData.isGrid=!0,F};for(let R=0;R<=r;R++){const D=d+R*_;Math.abs(D)>.01&&S.add(b(D.toFixed(1),new nt(D,m-.15,0),.12))}for(let R=0;R<=r;R++){const D=m+R*x;Math.abs(D)>.01&&S.add(b(D.toFixed(1),new nt(d-.2,D,0),.12))}return S.add(b("x",new nt(h+.2,0,0),.18)),S.add(b("y",new nt(0,p+.15,0),.18)),S.add(b("0",new nt(-.12,-.12,0),.1)),o.add(S),S},Ke={period1:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period2:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period3:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period4:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period5:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},period6plus:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#eedf32"},trajectory:"#ff00ff",manifold:"#1e90ff",stableManifold:"#ffa500",attractor:"#27ae60",repeller:"#e74c3c",saddlePoint:"#eedf32",periodicBlue:"#3498db"},P1=()=>{const o=Yt.useRef(null),t=Yt.useRef(null),i=Yt.useRef(null),r=Yt.useRef(null),l=Yt.useRef(null),u=Yt.useRef(null),d=Yt.useRef(null),[h,m]=Yt.useState("henon"),[p,_]=Yt.useState({xEq:"1 - a * x^2 + y",yEq:"b * x"}),[x,S]=Yt.useState({xEq:"1 - a * x^2 + y",yEq:"b * x"}),[b,R]=Yt.useState(null),D=Yt.useRef(null),[M,g]=Yt.useState(null),[A,B]=Yt.useState({a:.4,b:.3,epsilon:.0625,startX:.1,startY:.1,maxIterations:1e3,maxPeriod:5}),[L,F]=Yt.useState({orbits:[],isReady:!1,showOrbits:!1}),[w,V]=Yt.useState({manifolds:[],stableManifolds:[],fixedPoints:[],intersections:[],isComputing:!1,isReady:!1,showOrbits:!0,showOrbitLines:!1,showUnstableManifold:!0,showStableManifold:!1,intersectionThreshold:.05,highlightedOrbitId:null,currentPoint:{x:.1,y:.1,nx:1,ny:0},trajectoryPoints:[],iteration:0,isRunning:!1,hasStarted:!1,showTrail:!0,startPoint:{x:.1,y:.1,nx:1,ny:0}}),[tt,O]=Yt.useState({period1:!0,period2:!0,period3:!0,period4:!0,period5:!0,period6plus:!1}),[T,q]=Yt.useState({gridBoxes:[],invariantMeasure:null,leftEigenvector:null,transitions:null,selectedBoxIndex:null,currentBoxIndex:-1,isComputing:!1,subdivisions:20,pointsPerBox:64,epsilon:.05,showUlamOverlay:!1,showTransitions:!0,showCurrentBox:!0,needsRecompute:!1}),[j,ht]=Yt.useState({isAnimating:!1,parameter:"a",rangeValue:.1,direction:1,steps:10,currentStep:0,baseValue:null,targetValue:null});Yt.useRef(null);const[lt,mt]=Yt.useState({isRecording:!1,isEncoding:!1,frameCount:0,recordingEnabled:!1,encodingProgress:0,error:null}),I=Yt.useRef([]),at=Yt.useRef(null),K=Yt.useRef(null),At=Yt.useRef(null),[N,it]=Yt.useState({visible:!1,x:0,y:0,data:null}),Tt=Yt.useRef(new KS),Rt=Yt.useRef(new xe);Yt.useEffect(()=>{if(!o.current)return;const v=new BS;v.background=new ge(657930),i.current=v;const[y,P]=av.yRange,W=P-y,k=.5,X=window.innerWidth*.75/window.innerHeight,pt=W+k*2,ut=pt*X,yt=new J0(-ut/2,ut/2,pt/2,-pt/2,.1,1e3);yt.position.z=5,r.current=yt;const _t=new N1({canvas:o.current,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});_t.setSize(window.innerWidth*.75,window.innerHeight),_t.setPixelRatio(window.devicePixelRatio),t.current=_t,O1(v);const gt=()=>{const Ut=window.innerWidth*.75/window.innerHeight,Bt=pt*Ut;yt.left=-Bt/2,yt.right=Bt/2,yt.updateProjectionMatrix(),_t.setSize(window.innerWidth*.75,window.innerHeight)};window.addEventListener("resize",gt);const Et=()=>{l.current=requestAnimationFrame(Et),_t.render(v,yt)};return Et(),()=>{window.removeEventListener("resize",gt),l.current&&cancelAnimationFrame(l.current),u.current&&cancelAnimationFrame(u.current),_t.dispose()}},[]),Yt.useEffect(()=>{(async()=>{try{const y=await yy(()=>import("./henon_periodic_orbits-DckJEOkG.js"),[]);await y.default(),g(y),console.log("WASM module loaded successfully")}catch(y){console.error("Failed to load WASM module:",y)}})()},[]),Yt.useEffect(()=>(D.current&&clearTimeout(D.current),D.current=setTimeout(()=>{if(!M||h!=="custom"){S(p),R(null);return}try{const v=M.evaluate_user_defined_map(.5,.5,p.xEq,p.yEq,1,.3,.01);v&&isFinite(v.x)&&isFinite(v.y)?(S(p),R(null)):R("Equations produce non-finite values")}catch(v){R(String(v).replace("Error: ",""))}},1e3),()=>{D.current&&clearTimeout(D.current)}),[p,M,h]),Yt.useEffect(()=>{B(h==="duffing"?v=>({...v,a:2.75,b:.2}):h==="custom"?v=>({...v,a:1.4,b:.3,maxPeriod:3}):v=>({...v,a:.4,b:.3}))},[h]);const It=Yt.useCallback((v,y)=>{const P=A.a,W=A.b,k=-2*P*v,X=1,pt=W,ut=0,yt=k+ut,_t=k*ut-X*pt;return{j11:k,j12:X,j21:pt,j22:ut,trace:yt,det:_t}},[A.a,A.b]),kt=Yt.useCallback(v=>{if(!o.current||!i.current||!r.current)return;const y=o.current.getBoundingClientRect();if(Rt.current.x=(v.clientX-y.left)/y.width*2-1,Rt.current.y=-((v.clientY-y.top)/y.height)*2+1,Tt.current.setFromCamera(Rt.current,r.current),T.showUlamOverlay&&T.gridBoxes.length>0){const k=i.current.getObjectByName("ulam-grid");if(k){const X=Tt.current.intersectObject(k);if(X.length>0&&X[0].instanceId!==void 0){const pt=X[0].instanceId,ut=T.gridBoxes[pt],yt=T.invariantMeasure?T.invariantMeasure[pt]:0,_t=T.invariantMeasure?Math.max(...T.invariantMeasure):1;let gt=0,Et=[];if(K.current)try{const Ut=K.current.get_transitions(pt);Ut&&Ut.length>0&&(gt=Ut.length,Et=Ut.sort((Bt,Nt)=>(Nt.probability||0)-(Bt.probability||0)).slice(0,3))}catch(Ut){console.error("Error getting transitions:",Ut)}it({visible:!0,x:v.clientX,y:v.clientY,data:{type:"Ulam Box",boxIndex:pt,pos:{x:ut.center[0],y:ut.center[1]},measure:yt,measurePercent:_t>0?yt/_t*100:0,numTransitions:gt,topTransitions:Et,isCurrentBox:pt===T.currentBoxIndex}});return}}}const P=[];i.current.traverse(k=>{k.isMesh&&(k.userData.type==="orbit"||k.userData.type==="fixedPoint")&&P.push(k)});const W=Tt.current.intersectObjects(P,!1);if(W.length>0){const X=W[0].object.userData,pt=It(X.pos.x,X.pos.y);X.type==="orbit"&&X.orbitId&&w.showOrbitLines&&V(ut=>ut.highlightedOrbitId!==X.orbitId?{...ut,highlightedOrbitId:X.orbitId}:ut),it({visible:!0,x:v.clientX,y:v.clientY,data:{type:X.type==="fixedPoint"?"Fixed Point":"Periodic Point",period:X.period,stability:X.stability,pos:X.pos,eigenvalues:X.eigenvalues,jacobian:pt,orbitSize:X.orbitPoints?.length||1}})}else it(k=>k.visible?{...k,visible:!1}:k),w.highlightedOrbitId!==null&&V(k=>k.highlightedOrbitId!==null?{...k,highlightedOrbitId:null}:k)},[It,T.showUlamOverlay,T.gridBoxes,T.invariantMeasure,T.currentBoxIndex,w.showOrbitLines,w.highlightedOrbitId]);Yt.useEffect(()=>{!o.current||!i.current||!r.current||o.current.getBoundingClientRect()},[kt]);const st=Yt.useCallback(v=>{if(!K.current)return;const y=K.current.get_transitions(v);q(P=>({...P,selectedBoxIndex:v,transitions:y}))},[]);Yt.useEffect(()=>{const v=o.current;if(!v)return;const y=P=>{if(!T.showUlamOverlay||!T.gridBoxes.length)return;const W=v.getBoundingClientRect(),k=(P.clientX-W.left)/W.width*2-1,X=-((P.clientY-W.top)/W.height)*2+1;Tt.current.setFromCamera(new xe(k,X),r.current);const ut=i.current.getObjectByName("ulam-grid");if(ut){const yt=Tt.current.intersectObject(ut);if(yt.length>0){const _t=yt[0].instanceId;_t!==void 0&&st(_t)}else q(_t=>({..._t,selectedBoxIndex:null,transitions:null}))}};return v.addEventListener("mousemove",kt),v.addEventListener("click",y),()=>{v.removeEventListener("mousemove",kt),v.removeEventListener("click",y)}},[kt,T.showUlamOverlay,T.gridBoxes.length,st]),Yt.useEffect(()=>{if(!M)return;let v=!1;if(h==="custom"){F(P=>({...P,isReady:!0,orbits:[]}));return}return F(P=>({...P,isReady:!1,orbits:[],showOrbits:!1})),(()=>{try{if(v)return;let P;if(h==="duffing"?P=new M.DuffingSystemWasm(A.a,A.b,A.maxPeriod):h==="custom"?P=new M.BoundaryUserDefinedSystemWasm(x.xEq,x.yEq,A.a,A.b,A.epsilon,A.maxPeriod):P=new M.BoundaryHenonSystemWasm(A.a,A.b,A.epsilon,A.maxPeriod),v){P.free();return}const W=P.getPeriodicOrbits();P.free(),F(k=>({...k,orbits:W,isReady:!0}))}catch(P){console.error("Failed to compute periodic orbits:",P),F(W=>({...W,isReady:!0,orbits:[]}))}})(),()=>{v=!0}},[M,h,A.a,A.b,A.epsilon,A.maxPeriod,A.startX,A.startY,x]),Yt.useEffect(()=>(d.current&&clearTimeout(d.current),V(v=>({...v,isComputing:!0})),d.current=setTimeout(()=>{if(M){if(h==="custom"){V(v=>({...v,isComputing:!1,isReady:!0,manifolds:[],stableManifolds:[],fixedPoints:[],intersections:[]}));return}try{if(h==="duffing"){console.log("Computing Duffing manifold");const v=M.compute_duffing_manifold_simple(A.a,A.b,A.epsilon);V(y=>({...y,manifolds:v.manifolds||[],fixedPoints:v.fixed_points||[],isComputing:!1,isReady:!0}))}else if(h==="custom")if(L.orbits&&L.orbits.length>0)if(w.showStableManifold){console.log("Computing custom stable AND unstable manifolds:",L.orbits.length,"orbits");const v=M.compute_stable_and_unstable_manifolds_user_defined(x.xEq,x.yEq,A.a,A.b,A.epsilon,L.orbits,w.intersectionThreshold);V(y=>({...y,manifolds:v.unstable_manifolds||[],stableManifolds:v.stable_manifolds||[],fixedPoints:v.fixed_points||[],intersections:v.intersections||[],isComputing:!1,isReady:!0}))}else{console.log("Computing custom manifold from orbits:",L.orbits.length,"orbits");const v=M.compute_manifold_from_orbits_user_defined(x.xEq,x.yEq,A.a,A.b,A.epsilon,L.orbits);V(y=>({...y,manifolds:v.manifolds||[],stableManifolds:[],fixedPoints:v.fixed_points||[],intersections:[],isComputing:!1,isReady:!0}))}else{console.log("No periodic orbits, using simple user-defined manifold");const v=M.compute_user_defined_manifold(x.xEq,x.yEq,A.a,A.b,A.epsilon);V(y=>({...y,manifolds:v.manifolds||[],stableManifolds:[],fixedPoints:v.fixed_points||[],intersections:[],isComputing:!1,isReady:!0}))}else if(L.orbits&&L.orbits.length>0)if(w.showStableManifold){console.log("Computing stable AND unstable manifolds:",L.orbits.length,"orbits");const v=M.compute_stable_and_unstable_manifolds(A.a,A.b,A.epsilon,L.orbits,w.intersectionThreshold);V(y=>({...y,manifolds:v.unstable_manifolds||[],stableManifolds:v.stable_manifolds||[],fixedPoints:v.fixed_points||[],intersections:v.intersections||[],isComputing:!1,isReady:!0}))}else{console.log("Using periodic orbits for manifold:",L.orbits.length,"orbits");const v=M.compute_manifold_from_orbits(A.a,A.b,A.epsilon,L.orbits);V(y=>({...y,manifolds:v.manifolds||[],stableManifolds:[],fixedPoints:v.fixed_points||[],intersections:[],isComputing:!1,isReady:!0}))}else{console.log("No periodic orbits available, using simple computation");const v=M.compute_manifold_simple(A.a,A.b,A.epsilon);V(y=>({...y,manifolds:v.manifolds||[],stableManifolds:[],fixedPoints:v.fixed_points||[],intersections:[],isComputing:!1,isReady:!0}))}}catch(v){console.error("Manifold computation error:",v),V(y=>({...y,isComputing:!1}))}}},500),()=>{d.current&&clearTimeout(d.current)}),[h,A.a,A.b,A.epsilon,L.orbits,M,w.showStableManifold,w.intersectionThreshold,x]),Yt.useEffect(()=>{if(!j.isAnimating||w.isComputing)return;const{parameter:v,rangeValue:y,direction:P,steps:W,currentStep:k,baseValue:X}=j;if(k>=W){ht(_t=>({..._t,isAnimating:!1}));return}const pt=y/W,ut=k+1,yt=X+P*pt*ut;B(_t=>({..._t,[v]:parseFloat(yt.toFixed(4))})),ht(_t=>({..._t,currentStep:ut}))},[j.isAnimating,j.currentStep,w.isComputing]);const St=Yt.useCallback(async()=>{const v=A[j.parameter],y=v+j.direction*j.rangeValue;if(lt.recordingEnabled&&o.current)try{const P=o.current,W=1280,k=720,X=new OffscreenCanvas(W,k),pt=X.getContext("2d");pt.drawImage(P,0,0,W,k);const ut=`a = ${A.a.toFixed(4)}  b = ${A.b.toFixed(4)}  ε = ${A.epsilon.toFixed(4)}`;pt.fillStyle="rgba(0, 0, 0, 0.7)",pt.fillRect(10,k-40,400,30),pt.font="bold 16px monospace",pt.fillStyle="#4CAF50",pt.fillText(ut,20,k-18);const yt=await createImageBitmap(X);I.current.push(yt),mt(_t=>({..._t,frameCount:1})),console.log("Initial frame captured")}catch(P){console.error("Initial frame capture error:",P)}ht(P=>({...P,isAnimating:!0,baseValue:v,targetValue:y,currentStep:0}))},[A,j.parameter,j.direction,j.rangeValue,lt.recordingEnabled]),Lt=Yt.useCallback(()=>{ht(v=>({...v,isAnimating:!1,currentStep:0}))},[]),Qt=Yt.useCallback(async()=>{if(!o.current||!lt.recordingEnabled)return null;const v=o.current,y=1280,P=720,W=new OffscreenCanvas(y,P),k=W.getContext("2d");k.drawImage(v,0,0,y,P);const X=`a = ${A.a.toFixed(4)}  b = ${A.b.toFixed(4)}  ε = ${A.epsilon.toFixed(4)}`;return k.fillStyle="rgba(0, 0, 0, 0.7)",k.fillRect(10,P-40,400,30),k.font="bold 16px monospace",k.fillStyle="#4CAF50",k.fillText(X,20,P-18),await createImageBitmap(W)},[A.a,A.b,A.epsilon,lt.recordingEnabled]),Zt=Yt.useCallback(()=>{at.current&&at.current.terminate();const v=new Worker(new URL("/assets/videoEncoder.worker-7mA2J84V.js",import.meta.url),{type:"classic"});return v.onmessage=y=>{const{type:P,blob:W,frameCount:k,error:X}=y.data;switch(P){case"ready":console.log("Encoder ready");break;case"progress":mt(_t=>({..._t,frameCount:k}));break;case"complete":const pt=URL.createObjectURL(W),ut=document.createElement("a"),yt=ue();ut.href=pt,ut.download=yt,document.body.appendChild(ut),ut.click(),document.body.removeChild(ut),URL.revokeObjectURL(pt),mt(_t=>({..._t,isEncoding:!1,isRecording:!1,recordingEnabled:!1})),I.current=[];break;case"error":console.error("Encoder error:",X),mt(_t=>({..._t,error:X,isEncoding:!1}));break}},at.current=v,v},[]),ue=Yt.useCallback(()=>{const v=A.a.toFixed(3).replace(".","p"),y=A.b.toFixed(3).replace(".","p"),P=A.epsilon.toFixed(4).replace(".","p"),W=j.parameter,k=(j.baseValue||0).toFixed(3).replace(".","p").replace("-","m"),X=(j.targetValue||0).toFixed(3).replace(".","p").replace("-","m");return`henon_${W}_a${v}_b${y}_eps${P}_${k}_to_${X}.mp4`},[A.a,A.b,A.epsilon,j.parameter,j.baseValue,j.targetValue]),Je=Yt.useCallback(async()=>{if(!o.current||!t.current||!i.current||!r.current)return;t.current.render(i.current,r.current);const v=o.current,y=1920,P=1080,W=new OffscreenCanvas(y,P),k=W.getContext("2d");k.drawImage(v,0,0,y,P),k.fillStyle="rgba(0, 0, 0, 0.8)",k.fillRect(10,P-80,500,70),k.font="bold 18px monospace",k.fillStyle="#4CAF50",k.fillText(`Set-Valued Dynamics | Iteration: ${w.iteration}`,20,P-55),k.font="14px monospace",k.fillStyle="#aaa";const X=w.manifolds.reduce((Nt,ne)=>Nt+(ne.points_positive?.length||0)+(ne.points_negative?.length||0),0),pt=L.orbits.length>0?`${L.orbits.length} orbits, `:"";k.fillText(`${pt}${w.fixedPoints.length} fixed pts, ${X} manifold pts`,20,P-32),k.font="bold 14px monospace",k.fillStyle="#4CAF50",k.fillText(`a = ${A.a.toFixed(4)}   b = ${A.b.toFixed(4)}   ε = ${A.epsilon.toFixed(4)}`,20,P-12);const ut=await W.convertToBlob({type:"image/png",quality:1}),yt=URL.createObjectURL(ut),_t=document.createElement("a"),gt=A.a.toFixed(3).replace(".","p"),Et=A.b.toFixed(3).replace(".","p"),Ut=A.epsilon.toFixed(4).replace(".","p"),Bt=w.hasStarted?`_iter${w.iteration}`:"";_t.href=yt,_t.download=`henon_a${gt}_b${Et}_eps${Ut}${Bt}.png`,document.body.appendChild(_t),_t.click(),document.body.removeChild(_t),URL.revokeObjectURL(yt)},[A,L.orbits.length,w.iteration,w.hasStarted,w.manifolds,w.fixedPoints]),G=Yt.useCallback(async()=>{if(I.current.length===0){console.warn("No frames to encode");return}mt(W=>({...W,isEncoding:!0,encodingProgress:0}));const v=Zt();v.postMessage({type:"init",data:{width:1280,height:720,fps:2,filename:ue()}}),await new Promise(W=>setTimeout(W,100));const P=1e6/2;for(let W=0;W<I.current.length;W++){const k=I.current[W];v.postMessage({type:"frame",data:{imageData:k,timestamp:W*P,duration:P}}),W%5===0&&await new Promise(X=>setTimeout(X,10))}v.postMessage({type:"finish"})},[Zt,ue]),we=Yt.useRef(!1);Yt.useEffect(()=>{const v=we.current,y=w.isComputing;we.current=y,!(!lt.recordingEnabled||!j.isAnimating)&&v&&!y&&(console.log(`[Recording] Manifold finished, capturing frame for step ${j.currentStep}...`),requestAnimationFrame(async()=>{try{const P=await Qt();P?(I.current.push(P),mt(W=>({...W,frameCount:I.current.length})),console.log(`[Recording] Frame ${I.current.length} captured`)):console.log("[Recording] captureFrame returned null")}catch(P){console.error("[Recording] Frame capture error:",P)}}))},[w.isComputing,j.isAnimating,lt.recordingEnabled,j.currentStep,Qt]),Yt.useEffect(()=>{!j.isAnimating&&lt.recordingEnabled&&I.current.length>0&&!lt.isEncoding&&(console.log(`[Recording] Animation finished with ${I.current.length} frames, starting encoding...`),G())},[j.isAnimating,lt.recordingEnabled,lt.isEncoding,G]);const ce=Yt.useCallback(()=>{lt.recordingEnabled?(mt(v=>({...v,recordingEnabled:!1})),I.current=[]):(mt(v=>({...v,recordingEnabled:!0,frameCount:0,error:null})),I.current=[])},[lt.recordingEnabled]);Yt.useEffect(()=>{if(!i.current)return;const v=i.current,y=[];if(v.traverse(P=>{(P.userData.type==="trajectory"||P.userData.type==="orbit"||P.userData.type==="orbitLine"||P.userData.type==="manifold"||P.userData.type==="fixedPoint")&&y.push(P)}),y.forEach(P=>{P.geometry&&P.geometry.dispose(),P.material&&P.material.dispose(),v.remove(P)}),w.showUnstableManifold&&w.manifolds.length>0&&w.manifolds.forEach(P=>{[P.plus,P.minus].forEach(W=>{W&&W.points&&W.points.length>1&&W.points.forEach(([k,X])=>{const pt=new _r(.008,6,6),ut=new ra({color:new ge(Ke.manifold)}),yt=new An(pt,ut);yt.position.set(k,X,.1),yt.userData.type="manifold",v.add(yt)})})}),w.showStableManifold&&w.stableManifolds.length>0&&w.stableManifolds.forEach(P=>{[P.plus,P.minus].forEach(W=>{if(W&&W.points&&W.points.length>1){const k=new Hn,X=new Float32Array(W.points.length*3);W.points.forEach(([yt,_t],gt)=>{X[gt*3]=yt,X[gt*3+1]=_t,X[gt*3+2]=.08}),k.setAttribute("position",new jn(X,3));const pt=new Zo({color:new ge(Ke.stableManifold),linewidth:2}),ut=new jc(k,pt);ut.userData.type="manifold",v.add(ut)}})}),w.fixedPoints.forEach(P=>{const W=(P.stability||"").toLowerCase(),k=W==="attractor"||W==="stable",ut=k?Ke.attractor:W==="repeller"||W==="unstable"||W==="saddle"?Ke.saddlePoint:Ke.periodicBlue,yt=k?.03:.025,_t=new _r(yt,12,12),gt=new ra({color:new ge(ut)}),Et=new An(_t,gt);Et.position.set(P.x,P.y,.2),Et.userData={type:"fixedPoint",period:1,stability:P.stability,pos:{x:P.x,y:P.y},eigenvalues:P.eigenvalues||null},v.add(Et)}),w.showTrail&&w.trajectoryPoints.length>0&&w.trajectoryPoints.forEach((P,W)=>{const k=W/w.trajectoryPoints.length,X=.022*(.4+.6*k),pt=new _r(X,8,8),ut=new ra({color:new ge(Ke.trajectory),opacity:.4+.6*k,transparent:!0}),yt=new An(pt,ut);yt.position.set(P.x,P.y,.25),yt.userData.type="trajectory",v.add(yt)}),w.hasStarted&&w.currentPoint){const P=new Hh(.05,.05,20),W=new ra({color:new ge(Ke.trajectory),opacity:.6,transparent:!0,side:bi}),k=new An(P,W);k.position.set(w.currentPoint.x,w.currentPoint.y,.3),k.userData.type="trajectory",v.add(k);const X=new _r(.02,16,16),pt=new ra({color:new ge("#ffffff")}),ut=new An(X,pt);ut.position.set(w.currentPoint.x,w.currentPoint.y,.3),ut.userData.type="trajectory",v.add(ut)}if(w.showOrbits&&L.orbits.length>0){const P=L.orbits.filter(k=>Vt(k)),W="#ff00ff";P.forEach((k,X)=>{const pt=`orbit-${k.period}-${X}`,ut=w.highlightedOrbitId===pt,yt=ut?W:ee(k);if(k.points.forEach((_t,gt)=>{const Et=new _r(ut?.04:.02,10,10),Ut=new ra({color:new ge(yt)}),Bt=new An(Et,Ut);Bt.position.set(_t[0],_t[1],ut?.15:.05),Bt.userData={type:"orbit",orbitId:pt,period:k.period,stability:k.stability,pointIndex:gt,pos:{x:_t[0],y:_t[1]},orbitPoints:k.points,eigenvalues:k.eigenvalues||null},v.add(Bt)}),w.showOrbitLines&&k.points.length>1){const _t=new Hn,gt=new Float32Array(k.points.length*3);k.points.forEach((ne,Y)=>{gt[Y*3]=ne[0],gt[Y*3+1]=ne[1],gt[Y*3+2]=ut?.15:.05}),_t.setAttribute("position",new jn(gt,3));const Et=ut?W:ee(k),Ut=ut?1:.4,Bt=new Zo({color:new ge(Et),opacity:Ut,transparent:!0,linewidth:ut?3:1}),Nt=new WS(_t,Bt);Nt.userData={type:"orbitLine",orbitId:pt},v.add(Nt)}})}},[L,w,tt]);const ee=v=>{const{stability:y}=v;return y.toLowerCase()==="stable"?Ke.attractor:y.toLowerCase()==="saddle"?Ke.saddlePoint:y.toLowerCase()==="unstable"?Ke.repeller:Ke.periodicBlue},Vt=v=>v.period===1?tt.period1:v.period===2?tt.period2:v.period===3?tt.period3:v.period===4?tt.period4:v.period===5?tt.period5:tt.period6plus,Oe=Yt.useCallback(()=>{if(!w.isReady||w.isRunning||!M)return;const{x:v,y,nx:P,ny:W}=w.currentPoint;if(!isFinite(v)||!isFinite(y)||Math.abs(v)>10||Math.abs(y)>10){V(X=>({...X,currentPoint:{...X.startPoint},trajectoryPoints:[],iteration:0,hasStarted:!1}));return}let k;if(h==="custom")k=M.boundary_map_user_defined(v,y,P,W,x.xEq,x.yEq,A.epsilon,A.a,A.b);else{const{boundary_map:X}=M;if(!X){console.error("boundary_map not found in WASM module");return}k=X(v,y,P,W,A.a,A.b,A.epsilon)}V(X=>({...X,currentPoint:{x:k.x,y:k.y,nx:k.nx,ny:k.ny},trajectoryPoints:[...X.trajectoryPoints,{x:v,y,nx:P,ny:W}],iteration:X.iteration+1,hasStarted:!0}))},[w.isReady,w.isRunning,w.currentPoint,M,A,h,x]),Wt=Yt.useCallback(()=>{if(!w.isReady||w.isRunning||!M)return;V(_t=>({..._t,isRunning:!0}));const v=(_t,gt,Et,Ut)=>{if(h==="custom")return M.boundary_map_user_defined(_t,gt,Et,Ut,x.xEq,x.yEq,A.epsilon,A.a,A.b);{const{boundary_map:Bt}=M;return Bt?Bt(_t,gt,Et,Ut,A.a,A.b,A.epsilon):null}};let y=w.currentPoint.x,P=w.currentPoint.y,W=w.currentPoint.nx,k=w.currentPoint.ny,X=w.iteration;const pt=[...w.trajectoryPoints],ut=5,yt=()=>{for(let _t=0;_t<ut&&X<A.maxIterations;_t++){if(!isFinite(y)||!isFinite(P)||Math.abs(y)>10||Math.abs(P)>10){V(Et=>({...Et,isRunning:!1,hasStarted:!0,trajectoryPoints:pt,currentPoint:{x:y,y:P,nx:W,ny:k},iteration:X}));return}pt.push({x:y,y:P,nx:W,ny:k});const gt=v(y,P,W,k);if(!gt){V(Et=>({...Et,isRunning:!1}));return}y=gt.x,P=gt.y,W=gt.nx,k=gt.ny,X++}V(_t=>({..._t,currentPoint:{x:y,y:P,nx:W,ny:k},trajectoryPoints:[...pt],iteration:X,hasStarted:!0})),X<A.maxIterations?u.current=requestAnimationFrame(yt):V(_t=>({..._t,isRunning:!1}))};u.current=requestAnimationFrame(yt)},[w,A,M,h,x]),oe=Yt.useCallback(()=>{u.current&&cancelAnimationFrame(u.current),V(v=>({...v,currentPoint:{...v.startPoint},trajectoryPoints:[],iteration:0,isRunning:!1,hasStarted:!1}))},[]);Yt.useEffect(()=>{oe()},[A.a,A.b,A.epsilon,oe]);const We=Yt.useMemo(()=>{let v=0;return w.manifolds.forEach(y=>{y.plus?.points&&(v+=y.plus.points.length),y.minus?.points&&(v+=y.minus.points.length)}),v},[w.manifolds]),ke=Yt.useCallback(async()=>{if(M){q(v=>({...v,isComputing:!0,needsRecompute:!1}));try{let v;if(h==="custom"){const{UlamComputerUserDefined:X}=M;if(!X)throw new Error("UlamComputerUserDefined definition missing");v=new X(x.xEq,x.yEq,A.a,A.b,T.subdivisions,T.pointsPerBox,T.epsilon)}else{const{UlamComputer:X}=M;if(!X)throw console.error("UlamComputer export is missing from WASM module!"),new Error("UlamComputer definition missing");v=new X(A.a,A.b,T.subdivisions,T.pointsPerBox,T.epsilon)}K.current=v;const y=v.get_grid_boxes(),P=v.get_invariant_measure(),W=v.get_left_eigenvector();let k=-1;w.hasStarted&&w.currentPoint&&(k=v.get_box_index(w.currentPoint.x,w.currentPoint.y)),q(X=>({...X,isComputing:!1,gridBoxes:y,invariantMeasure:P,leftEigenvector:W,currentBoxIndex:k,selectedBoxIndex:null,transitions:null}))}catch(v){console.error("Ulam computation failed:",v),q(y=>({...y,isComputing:!1}))}}},[M,A.a,A.b,T.subdivisions,T.pointsPerBox,T.epsilon,w.hasStarted,w.currentPoint,h,x]);return Yt.useEffect(()=>{q(v=>({...v,epsilon:A.epsilon}))},[A.epsilon]),Yt.useEffect(()=>{if(!(!T.showUlamOverlay||!M))return At.current&&clearTimeout(At.current),At.current=setTimeout(()=>{ke()},200),()=>{At.current&&clearTimeout(At.current)}},[T.showUlamOverlay,M,A.a,A.b,T.epsilon,T.subdivisions,T.pointsPerBox,ke]),Yt.useEffect(()=>{if(!(!K.current||!T.showUlamOverlay)&&w.hasStarted&&w.currentPoint){const v=K.current.get_box_index(w.currentPoint.x,w.currentPoint.y);if(v!==T.currentBoxIndex){const y=v>=0?K.current.get_transitions(v):null;q(P=>({...P,currentBoxIndex:v,transitions:P.showCurrentBox?y:P.transitions,selectedBoxIndex:P.showCurrentBox?v:P.selectedBoxIndex}))}}},[w.currentPoint,w.hasStarted,T.showUlamOverlay,T.currentBoxIndex]),Yt.useEffect(()=>{const v=i.current;if(!v)return;const y=()=>{const Et=v.getObjectByName("ulam-grid");Et&&(Et.geometry.dispose(),Et.material.dispose(),v.remove(Et))};if(!T.showUlamOverlay||!T.gridBoxes.length){y();return}y();const P=T.gridBoxes,W=P.length,k=new $o(1,1),X=new ra({color:16777215,transparent:!0,opacity:.5,side:bi,depthWrite:!1}),pt=new GS(k,X,W);pt.name="ulam-grid",pt.userData.type="ulamGrid";const ut=new On,yt=new ge,_t=new Map;T.selectedBoxIndex!==null&&T.transitions&&T.transitions.forEach(Et=>{_t.set(Et.index,Et.probability)});let gt=0;return T.invariantMeasure&&(gt=Math.max(...T.invariantMeasure)),P.forEach((Et,Ut)=>{const Bt=Et.center[0],Nt=Et.center[1],ne=Et.radius[0],Y=Et.radius[1];ut.position.set(Bt,Nt,-.05),ut.scale.set(ne*2*.95,Y*2*.95,1),ut.updateMatrix(),pt.setMatrixAt(Ut,ut.matrix);const wt=T.showCurrentBox&&Ut===T.currentBoxIndex,Ot=T.selectedBoxIndex!==null&&Ut===T.selectedBoxIndex;if(wt&&!Ot)yt.setHex(16711935),pt.setColorAt(Ut,yt);else if(T.selectedBoxIndex!==null)if(Ut===T.selectedBoxIndex)yt.setHex(65535),pt.setColorAt(Ut,yt);else if(_t.has(Ut)){const Gt=_t.get(Ut);yt.setHSL(.7-Gt*.7,1,.5),pt.setColorAt(Ut,yt)}else yt.setHex(2236962),pt.setColorAt(Ut,yt);else if(T.invariantMeasure&&T.invariantMeasure.length===W){const Gt=T.invariantMeasure[Ut];if(Gt>0){const Mt=.66-Gt/gt*.5;yt.setHSL(Mt,1,.5),pt.setColorAt(Ut,yt)}else yt.setHex(1118481),pt.setColorAt(Ut,yt)}else yt.setHex(3355443),pt.setColorAt(Ut,yt)}),pt.instanceMatrix.needsUpdate=!0,pt.instanceColor&&(pt.instanceColor.needsUpdate=!0),v.add(pt),y},[T.showUlamOverlay,T.gridBoxes,T.selectedBoxIndex,T.transitions,T.invariantMeasure,T.currentBoxIndex,T.showCurrentBox]),H.jsxs("div",{style:Pt.container,children:[H.jsxs("div",{style:Pt.sidebar,children:[H.jsxs("div",{style:Pt.section,children:[H.jsx("h3",{style:Pt.sectionTitle,children:"Dynamic System"}),H.jsxs("select",{value:h,onChange:v=>m(v.target.value),style:{width:"100%",padding:"8px 12px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"6px",fontSize:"14px",cursor:"pointer"},disabled:w.isRunning||j.isAnimating,children:[H.jsx("option",{value:"henon",children:"Hénon Map"}),H.jsx("option",{value:"duffing",children:"Duffing Map"}),H.jsx("option",{value:"custom",children:"Custom Equations"})]}),H.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:h==="henon"?"x' = 1 - ax² + y, y' = bx":h==="duffing"?"x' = y, y' = -bx + ay - y³":`x' = ${p.xEq}, y' = ${p.yEq}`}),h==="custom"&&H.jsxs("div",{style:{marginTop:"8px"},children:[H.jsxs("label",{style:{display:"block",marginBottom:"6px"},children:[H.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"x' ="}),H.jsx("input",{type:"text",value:p.xEq,onChange:v=>_(y=>({...y,xEq:v.target.value})),style:{width:"100%",padding:"6px 8px",marginTop:"2px",backgroundColor:"#1a1a2e",color:"#e0e0e0",border:"1px solid #444",borderRadius:"4px",fontSize:"13px",fontFamily:"monospace"},disabled:w.isRunning})]}),H.jsxs("label",{style:{display:"block",marginBottom:"6px"},children:[H.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"y' ="}),H.jsx("input",{type:"text",value:p.yEq,onChange:v=>_(y=>({...y,yEq:v.target.value})),style:{width:"100%",padding:"6px 8px",marginTop:"2px",backgroundColor:"#1a1a2e",color:"#e0e0e0",border:"1px solid #444",borderRadius:"4px",fontSize:"13px",fontFamily:"monospace"},disabled:w.isRunning})]}),H.jsx("div",{style:{fontSize:"10px",color:"#555",lineHeight:"1.4"},children:"Variables: x, y, a, b. Functions: sin, cos, tan, abs, sqrt, exp, ln. Power: ^. Absolute value: |expr| or abs(expr)"}),b&&H.jsx("div",{style:{fontSize:"11px",color:"#e74c3c",marginTop:"4px",padding:"4px 6px",backgroundColor:"#2a1a1a",borderRadius:"3px"},children:b})]})]}),H.jsxs("div",{style:Pt.section,children:[H.jsx("h3",{style:Pt.sectionTitle,children:"System Parameters"}),H.jsxs("label",{style:Pt.label,children:[H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"a ="}),H.jsx("input",{type:"number",step:"0.01",value:A.a,onChange:v=>B({...A,a:parseFloat(v.target.value)||.1}),style:Pt.numberInput,disabled:w.isRunning})]}),H.jsx("input",{type:"range",min:"0.1",max:h==="duffing"?3:2,step:"0.01",value:A.a,onChange:v=>B({...A,a:parseFloat(v.target.value)}),style:Pt.slider,disabled:w.isRunning})]}),H.jsxs("label",{style:Pt.label,children:[H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"b ="}),H.jsx("input",{type:"number",step:"0.01",value:A.b,onChange:v=>B({...A,b:parseFloat(v.target.value)||.1}),style:Pt.numberInput,disabled:w.isRunning})]}),H.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.01",value:A.b,onChange:v=>B({...A,b:parseFloat(v.target.value)}),style:Pt.slider,disabled:w.isRunning})]}),H.jsxs("label",{style:Pt.label,children:[H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"epsilon ="}),H.jsx("input",{type:"number",step:"0.001",value:A.epsilon,onChange:v=>B({...A,epsilon:parseFloat(v.target.value)||.01}),style:Pt.numberInput,disabled:w.isRunning})]}),H.jsx("input",{type:"range",min:"0.001",max:"0.2",step:"0.001",value:A.epsilon,onChange:v=>B({...A,epsilon:parseFloat(v.target.value)}),style:Pt.slider,disabled:w.isRunning})]}),H.jsxs("label",{style:Pt.label,children:[H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"Max Period ="}),H.jsx("input",{type:"number",step:"1",min:"1",max:"20",value:A.maxPeriod,onChange:v=>B({...A,maxPeriod:parseInt(v.target.value)||2}),style:Pt.numberInput,disabled:w.isRunning})]}),H.jsx("input",{type:"range",min:"2",max:"10",step:"1",value:A.maxPeriod,onChange:v=>B({...A,maxPeriod:parseInt(v.target.value)}),style:Pt.slider,disabled:w.isRunning})]}),H.jsxs("label",{style:Pt.label,children:[H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"Max Iterations ="}),H.jsx("input",{type:"number",step:"100",min:"100",max:"10000",value:A.maxIterations,onChange:v=>B({...A,maxIterations:parseInt(v.target.value)||100}),style:Pt.numberInput,disabled:w.isRunning})]}),H.jsx("input",{type:"range",min:"100",max:"5000",step:"100",value:A.maxIterations,onChange:v=>B({...A,maxIterations:parseInt(v.target.value)}),style:Pt.slider,disabled:w.isRunning})]}),h==="henon"&&H.jsxs("div",{style:{marginTop:"12px",borderTop:"1px solid #333",paddingTop:"12px"},children:[H.jsx("h4",{style:{fontSize:"12px",fontWeight:"600",marginBottom:"10px",color:"#888"},children:"Manifold Display"}),H.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",padding:"8px 10px",backgroundColor:w.showUnstableManifold?"rgba(30, 144, 255, 0.15)":"transparent",borderRadius:"6px",border:`1px solid ${w.showUnstableManifold?Ke.manifold:"#444"}`,cursor:"pointer",transition:"all 0.2s ease"},children:[H.jsx("input",{type:"checkbox",checked:w.showUnstableManifold,onChange:v=>V(y=>({...y,showUnstableManifold:v.target.checked})),style:{width:"16px",height:"16px",accentColor:Ke.manifold}}),H.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[H.jsx("div",{style:{width:"12px",height:"3px",backgroundColor:Ke.manifold,borderRadius:"2px"}}),H.jsx("span",{style:{color:"#ccc",fontSize:"13px"},children:"Unstable Manifold"})]})]}),H.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",padding:"8px 10px",backgroundColor:w.showStableManifold?"rgba(255, 165, 0, 0.15)":"transparent",borderRadius:"6px",border:`1px solid ${w.showStableManifold?Ke.stableManifold:"#444"}`,cursor:"pointer",transition:"all 0.2s ease"},children:[H.jsx("input",{type:"checkbox",checked:w.showStableManifold,onChange:v=>V(y=>({...y,showStableManifold:v.target.checked})),style:{width:"16px",height:"16px",accentColor:Ke.stableManifold}}),H.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[H.jsx("div",{style:{width:"12px",height:"3px",backgroundColor:Ke.stableManifold,borderRadius:"2px"}}),H.jsx("span",{style:{color:"#ccc",fontSize:"13px"},children:"Stable Manifold"})]})]}),w.showStableManifold&&H.jsxs("div",{style:{marginTop:"8px",padding:"10px",backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"6px",border:"1px solid #333"},children:[H.jsx("div",{style:{fontSize:"11px",fontWeight:"600",color:"#888",marginBottom:"8px"},children:"Intersection Detection"}),H.jsxs("label",{style:Pt.label,children:[H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"Threshold ε"}),H.jsx("input",{type:"number",step:"0.01",value:w.intersectionThreshold,onChange:v=>V(y=>({...y,intersectionThreshold:parseFloat(v.target.value)||.01})),style:Pt.numberInput})]}),H.jsx("input",{type:"range",min:"0.001",max:"0.2",step:"0.001",value:w.intersectionThreshold,onChange:v=>V(y=>({...y,intersectionThreshold:parseFloat(v.target.value)})),style:Pt.slider})]}),H.jsx("div",{style:{fontSize:"11px",marginTop:"6px"},children:(()=>{const v=w.intersections.filter(y=>y.has_intersection);if(v.length>0){const y=Math.min(...v.map(P=>P.min_distance));return H.jsxs("div",{style:{color:"#e74c3c",fontWeight:"bold"},children:[H.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[H.jsx("span",{style:{fontSize:"14px"},children:"⚠"}),H.jsx("span",{children:"Heteroclinic connection!"})]}),H.jsxs("div",{style:{fontSize:"10px",color:"#e74c3c",opacity:.8,marginTop:"4px"},children:[v.length," connection",v.length>1?"s":""," found (min d = ",y.toFixed(4),")"]})]})}else return w.intersections.length>0?H.jsxs("div",{style:{color:"#27ae60"},children:["✓ No heteroclinic connections (",w.intersections.length," pairs checked)"]}):H.jsx("div",{style:{color:"#888"},children:"Need ≥2 saddles for detection"})})()})]})]})]}),H.jsx("button",{onClick:Je,style:{...Pt.button,width:"100%",marginTop:"12px",backgroundColor:"#2d4a2d",borderColor:"#3a6a3a",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Save as PNG"}),H.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[H.jsx("h4",{style:{fontSize:"12px",fontWeight:"600",marginBottom:"12px",color:"#888"},children:"Parameter Animation"}),H.jsx("label",{style:Pt.label,children:H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"Animate:"}),H.jsxs("select",{value:j.parameter,onChange:v=>ht(y=>({...y,parameter:v.target.value})),style:{...Pt.numberInput,width:"100px"},disabled:j.isAnimating,children:[H.jsx("option",{value:"a",children:"a"}),H.jsx("option",{value:"b",children:"b"}),H.jsx("option",{value:"epsilon",children:"epsilon"})]})]})}),H.jsx("label",{style:Pt.label,children:H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"Direction:"}),H.jsxs("div",{style:{display:"flex",gap:"4px"},children:[H.jsx("button",{onClick:()=>ht(v=>({...v,direction:-1})),style:{...Pt.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:j.direction===-1?"#3d5afe":"#2d2d2d"},disabled:j.isAnimating,children:"−"}),H.jsx("button",{onClick:()=>ht(v=>({...v,direction:1})),style:{...Pt.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:j.direction===1?"#3d5afe":"#2d2d2d"},disabled:j.isAnimating,children:"+"})]})]})}),H.jsxs("label",{style:Pt.label,children:[H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"Range:"}),H.jsx("input",{type:"number",step:"0.05",min:"0.01",max:"1.0",value:j.rangeValue,onChange:v=>ht(y=>({...y,rangeValue:parseFloat(v.target.value)||.1})),style:Pt.numberInput,disabled:j.isAnimating})]}),H.jsx("input",{type:"range",min:"0.01",max:"0.5",step:"0.01",value:j.rangeValue,onChange:v=>ht(y=>({...y,rangeValue:parseFloat(v.target.value)})),style:Pt.slider,disabled:j.isAnimating})]}),H.jsxs("label",{style:Pt.label,children:[H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"Steps:"}),H.jsx("input",{type:"number",step:"1",min:"5",max:"30",value:j.steps,onChange:v=>ht(y=>({...y,steps:parseInt(v.target.value)||10})),style:Pt.numberInput,disabled:j.isAnimating})]}),H.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:j.steps,onChange:v=>ht(y=>({...y,steps:parseInt(v.target.value)})),style:Pt.slider,disabled:j.isAnimating})]}),H.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[H.jsxs("button",{onClick:j.isAnimating?Lt:St,disabled:w.isComputing&&!j.isAnimating||lt.isEncoding,style:{...Pt.button,flex:1,marginBottom:0,backgroundColor:j.isAnimating?"#8b0000":"#1a4a1a",borderColor:j.isAnimating?"#b22222":"#2a6a2a"},children:[j.isAnimating?"⏹ Stop":"▶ Play",lt.recordingEnabled&&!j.isAnimating&&" & Rec"]}),H.jsx("button",{onClick:ce,disabled:j.isAnimating||lt.isEncoding,style:{...Pt.button,width:"50px",marginBottom:0,backgroundColor:lt.recordingEnabled?"#b22222":"#2d2d2d",borderColor:lt.recordingEnabled?"#ff4444":"#444"},title:lt.recordingEnabled?"Recording enabled - will record next animation":"Enable recording",children:lt.recordingEnabled?"🔴":"⏺"})]}),lt.recordingEnabled&&!j.isAnimating&&!lt.isEncoding&&H.jsx("div",{style:{marginTop:"8px",padding:"6px",background:"#1a0a0a",borderRadius:"4px",border:"1px solid #b22222"},children:H.jsx("div",{style:{fontSize:"11px",color:"#ff6666"},children:"🔴 Recording armed - Press Play to start"})}),lt.isEncoding&&H.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"#0a0a1a",borderRadius:"4px",border:"1px solid #3d5afe"},children:[H.jsxs("div",{style:{fontSize:"11px",color:"#7986cb",marginBottom:"4px"},children:["🔄 Encoding video... (",lt.frameCount," frames)"]}),H.jsx("div",{style:{height:"4px",backgroundColor:"#1a1a2e",borderRadius:"2px",overflow:"hidden"},children:H.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#3d5afe",animation:"pulse 1s infinite"}})})]}),lt.error&&H.jsxs("div",{style:{marginTop:"8px",padding:"6px",background:"#1a0a0a",borderRadius:"4px",fontSize:"10px",color:"#ff6666"},children:["Error: ",lt.error]}),j.isAnimating&&H.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[H.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:[j.parameter,": ",j.baseValue?.toFixed(3)," → ",j.targetValue?.toFixed(3)]}),H.jsxs("div",{style:{fontSize:"11px",color:"#888"},children:["Current: ",H.jsx("span",{style:{color:"#4CAF50",fontWeight:"bold"},children:A[j.parameter].toFixed(4)}),lt.recordingEnabled&&H.jsxs("span",{style:{color:"#ff6666",marginLeft:"8px"},children:["📹 ",lt.frameCount," frames"]})]}),H.jsxs("div",{style:{fontSize:"10px",color:"#555",marginTop:"4px"},children:["Step ",j.currentStep," / ",j.steps,w.isComputing&&H.jsx("span",{style:{color:"#ff9800",marginLeft:"8px"},children:"Computing..."})]}),H.jsx("div",{style:{marginTop:"6px",height:"4px",backgroundColor:"#333",borderRadius:"2px",overflow:"hidden"},children:H.jsx("div",{style:{width:`${j.currentStep/j.steps*100}%`,height:"100%",backgroundColor:lt.recordingEnabled?"#ff6666":"#4CAF50",transition:"width 0.3s ease"}})})]})]}),H.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[H.jsxs("label",{style:Pt.checkboxLabel,children:[H.jsx("input",{type:"checkbox",checked:T.showUlamOverlay,onChange:v=>q({...T,showUlamOverlay:v.target.checked})}),"Show Ulam Grid"]}),T.showUlamOverlay&&H.jsxs(H.Fragment,{children:[H.jsxs("label",{style:Pt.checkboxLabel,children:[H.jsx("input",{type:"checkbox",checked:T.showTransitions,onChange:v=>q({...T,showTransitions:v.target.checked})}),"Show Transitions"]}),H.jsxs("label",{style:Pt.checkboxLabel,children:[H.jsx("input",{type:"checkbox",checked:T.showCurrentBox,onChange:v=>q({...T,showCurrentBox:v.target.checked})}),"Track Current Position"]}),H.jsxs("label",{style:Pt.label,children:[H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"Grid ="}),H.jsx("input",{type:"number",step:"1",min:"10",max:"80",value:T.subdivisions,onChange:v=>q({...T,subdivisions:parseInt(v.target.value)||10}),style:Pt.numberInput,disabled:T.isComputing})]}),H.jsx("input",{type:"range",min:"10",max:"60",step:"5",value:T.subdivisions,onChange:v=>q({...T,subdivisions:parseInt(v.target.value)}),style:Pt.slider,disabled:T.isComputing})]}),H.jsxs("label",{style:Pt.label,children:[H.jsxs("div",{style:Pt.paramRow,children:[H.jsx("span",{children:"Samples ="}),H.jsx("input",{type:"number",step:"16",min:"16",max:"256",value:T.pointsPerBox,onChange:v=>q({...T,pointsPerBox:parseInt(v.target.value)||64}),style:Pt.numberInput,disabled:T.isComputing})]}),H.jsx("input",{type:"range",min:"16",max:"256",step:"16",value:T.pointsPerBox,onChange:v=>q({...T,pointsPerBox:parseInt(v.target.value)}),style:Pt.slider,disabled:T.isComputing}),H.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Points per box (√n × √n grid)"})]}),H.jsx("div",{style:{marginTop:"8px",marginBottom:"8px",fontSize:"12px",color:T.isComputing?"#ff9800":"#4CAF50",display:"flex",alignItems:"center",gap:"6px"},children:T.isComputing?H.jsxs(H.Fragment,{children:[H.jsx("span",{className:"spinner",style:{width:"10px",height:"10px",border:"2px solid #ff9800",borderTop:"2px solid transparent",borderRadius:"50%",display:"inline-block",animation:"spin 1s linear infinite"}}),"Computing Ulam Grid..."]}):H.jsx("span",{children:"✓ Grid up to date"})}),H.jsx("style",{children:`
                                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                            `}),T.gridBoxes.length>0&&H.jsxs("div",{style:{marginTop:"12px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[H.jsx("div",{style:{fontSize:"11px",fontWeight:"600",color:"#888",marginBottom:"6px"},children:"Invariant Measure"}),H.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[H.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Low"}),H.jsx("div",{style:{flex:1,height:"12px",borderRadius:"2px",background:"linear-gradient(to right, hsl(238, 100%, 50%), hsl(180, 100%, 50%), hsl(100, 100%, 50%), hsl(60, 100%, 50%))"}}),H.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"High"})]}),H.jsx("div",{style:{fontSize:"9px",color:"#555",marginTop:"4px"},children:"Probability of trajectory visiting each region"})]}),T.currentBoxIndex>=0&&H.jsxs("div",{style:{fontSize:"11px",color:"#888",marginTop:"4px"},children:["Current box: ",T.currentBoxIndex]})]})]}),H.jsxs("div",{style:Pt.section,children:[H.jsx("h3",{style:Pt.sectionTitle,children:"Controls"}),H.jsx("button",{onClick:Oe,disabled:!w.isReady||w.isRunning,style:Pt.button,children:"Step Forward"}),H.jsx("button",{onClick:Wt,disabled:!w.isReady||w.isRunning,style:{...Pt.button,...Pt.runButton},children:w.isRunning?"Running...":"Run to Max Iterations"}),H.jsx("button",{onClick:oe,disabled:w.isRunning,style:{...Pt.button,...Pt.resetButton},children:"Reset"})]}),H.jsxs("div",{style:Pt.section,children:[H.jsx("h3",{style:Pt.sectionTitle,children:"Display"}),h==="henon"&&H.jsxs(H.Fragment,{children:[H.jsxs("label",{style:Pt.checkboxLabel,children:[H.jsx("input",{type:"checkbox",checked:w.showUnstableManifold,onChange:v=>V(y=>({...y,showUnstableManifold:v.target.checked})),style:{accentColor:Ke.manifold}}),H.jsx("span",{style:{...Pt.colorBox,backgroundColor:Ke.manifold,borderRadius:"50%"}}),"Unstable manifold"]}),H.jsxs("label",{style:Pt.checkboxLabel,children:[H.jsx("input",{type:"checkbox",checked:w.showStableManifold,onChange:v=>V(y=>({...y,showStableManifold:v.target.checked})),style:{accentColor:Ke.stableManifold}}),H.jsx("span",{style:{...Pt.colorBox,backgroundColor:Ke.stableManifold,borderRadius:"50%"}}),"Stable manifold"]})]}),H.jsxs("label",{style:Pt.checkboxLabel,children:[H.jsx("input",{type:"checkbox",checked:w.showTrail,onChange:v=>V({...w,showTrail:v.target.checked}),style:{accentColor:Ke.trajectory}}),H.jsx("span",{style:{...Pt.colorBox,backgroundColor:Ke.trajectory,borderRadius:"50%"}}),"Trajectory trail"]}),H.jsxs("label",{style:Pt.checkboxLabel,children:[H.jsx("input",{type:"checkbox",checked:w.showOrbits,onChange:v=>V({...w,showOrbits:v.target.checked})}),"Show orbit markers"]}),H.jsxs("label",{style:Pt.checkboxLabel,children:[H.jsx("input",{type:"checkbox",checked:w.showOrbitLines,onChange:v=>V({...w,showOrbitLines:v.target.checked})}),"Show orbit lines"]}),[1,2,3,4,5].map(v=>H.jsxs("label",{style:Pt.checkboxLabel,children:[H.jsx("input",{type:"checkbox",checked:tt[`period${v}`],onChange:y=>O({...tt,[`period${v}`]:y.target.checked})}),H.jsx("span",{style:{...Pt.colorBox,backgroundColor:Ke[`period${v}`].stable}}),"Period-",v," (",L.orbits.filter(y=>y.period===v).length,")"]},v))]}),w.fixedPoints.length>0&&H.jsxs("div",{style:Pt.section,children:[H.jsxs("h3",{style:Pt.sectionTitle,children:["Fixed Points (",w.fixedPoints.length,")"]}),w.fixedPoints.map((v,y)=>H.jsxs("div",{style:Pt.fixedPointItem,children:[H.jsx("span",{style:{fontWeight:"bold",color:v.stability==="Attractor"?"#00ff00":v.stability==="Repeller"?"#ff4444":"#ffaa00"},children:v.stability}),H.jsxs("span",{children:[" (",v.x.toFixed(3),", ",v.y.toFixed(3),")"]})]},y))]}),H.jsxs("div",{style:Pt.info,children:[H.jsx("div",{style:Pt.infoHeader,children:h==="henon"?"Hénon Map: x' = 1 - ax² + y, y' = bx":"Duffing Map: x' = y, y' = -bx + ay - y³"}),H.jsxs("div",{children:["Status: ",w.isComputing?"Computing...":w.isRunning?"Running...":"Ready"]}),H.jsxs("div",{children:["Orbits found: ",L.orbits.length]}),w.hasStarted&&H.jsxs(H.Fragment,{children:[H.jsxs("div",{children:["Iteration: ",w.iteration," / ",A.maxIterations]}),H.jsxs("div",{children:["Position: (",w.currentPoint.x.toFixed(4),", ",w.currentPoint.y.toFixed(4),")"]})]}),H.jsxs("div",{children:["Manifolds: ",w.manifolds.length]}),H.jsxs("div",{children:["Total Points: ",We.toLocaleString()]})]})]}),H.jsxs("div",{style:Pt.viewport,children:[H.jsx("canvas",{ref:o,style:Pt.canvas}),N.visible&&N.data&&H.jsxs("div",{style:{position:"absolute",left:N.x+15,top:N.y+15,backgroundColor:"rgba(20, 20, 20, 0.95)",border:"1px solid #444",borderRadius:"4px",padding:"12px",zIndex:1e3,pointerEvents:"none",minWidth:"180px",maxWidth:"280px",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",fontSize:"12px",fontFamily:"monospace"},children:[H.jsxs("div",{style:{fontWeight:"bold",color:"#fff",marginBottom:"8px",borderBottom:"1px solid #444",paddingBottom:"4px"},children:[N.data.type,N.data.isCurrentBox&&H.jsx("span",{style:{color:"#ff00ff",marginLeft:"8px"},children:"● Current"})]}),N.data.type==="Ulam Box"?H.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"6px 12px"},children:[H.jsx("span",{style:{color:"#888"},children:"Box #:"}),H.jsx("span",{style:{color:"#00ccff"},children:N.data.boxIndex}),H.jsx("span",{style:{color:"#888"},children:"Center:"}),H.jsxs("span",{style:{color:"#ddd"},children:["(",N.data.pos.x.toFixed(2),", ",N.data.pos.y.toFixed(2),")"]}),H.jsx("span",{style:{color:"#888"},children:"Measure:"}),H.jsxs("span",{style:{color:"#4CAF50"},children:[(N.data.measure*100).toFixed(2),"%",H.jsxs("span",{style:{color:"#666",marginLeft:"4px"},children:["(",N.data.measurePercent.toFixed(0),"% of max)"]})]}),H.jsx("span",{style:{color:"#888"},children:"Transitions:"}),H.jsxs("span",{style:{color:"#ddd"},children:[N.data.numTransitions," boxes"]}),N.data.topTransitions&&N.data.topTransitions.length>0&&H.jsxs(H.Fragment,{children:[H.jsx("span",{style:{color:"#888"},children:"Top targets:"}),H.jsx("div",{style:{fontSize:"10px"},children:N.data.topTransitions.map((v,y)=>H.jsxs("div",{style:{color:"#ff9800"},children:["→ Box ",v.index,": ",(v.probability*100).toFixed(1),"%"]},y))})]})]}):H.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"8px 16px"},children:[H.jsx("span",{style:{color:"#888"},children:"Position:"}),H.jsxs("span",{style:{color:"#00ccff"},children:["(",N.data.pos.x.toFixed(4),", ",N.data.pos.y.toFixed(4),")"]}),H.jsx("span",{style:{color:"#888"},children:"Stability:"}),H.jsx("span",{style:{color:N.data.stability?.toLowerCase()==="attractor"||N.data.stability?.toLowerCase()==="stable"?"#27ae60":(N.data.stability?.toLowerCase()==="repeller"||N.data.stability?.toLowerCase()==="unstable","#e74c3c")},children:N.data.stability||"Unknown"}),H.jsx("span",{style:{color:"#888"},children:"Period:"}),H.jsx("span",{style:{color:"#ddd"},children:N.data.period}),N.data.jacobian&&H.jsxs(H.Fragment,{children:[H.jsx("span",{style:{color:"#888"},children:"Jacobian:"}),H.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px",background:"#333",padding:"4px",borderRadius:"2px"},children:[H.jsx("span",{children:N.data.jacobian.j11?.toFixed(3)}),H.jsx("span",{children:N.data.jacobian.j12?.toFixed(3)}),H.jsx("span",{children:N.data.jacobian.j21?.toFixed(3)}),H.jsx("span",{children:N.data.jacobian.j22?.toFixed(3)})]}),H.jsx("span",{style:{color:"#888"},children:"Det/Trace:"}),H.jsxs("span",{style:{color:"#ddd"},children:["D=",N.data.jacobian.det?.toFixed(3),", Tr=",N.data.jacobian.trace?.toFixed(3)]})]})]})]})]})]})},Pt={container:{display:"flex",height:"100vh",width:"100vw",backgroundColor:"#0a0a0a",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0",overflow:"hidden"},sidebar:{width:"320px",minWidth:"320px",padding:"20px",backgroundColor:"#1a1a1a",borderRight:"1px solid #333",overflowY:"auto"},section:{marginBottom:"24px"},sectionTitle:{fontSize:"14px",fontWeight:"600",marginBottom:"12px",color:"#fff",textTransform:"uppercase",letterSpacing:"0.5px"},label:{display:"flex",flexDirection:"column",marginBottom:"12px",fontSize:"13px",color:"#b0b0b0"},paramRow:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"},numberInput:{width:"80px",padding:"4px 8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",fontSize:"13px",textAlign:"right"},slider:{marginTop:"6px",width:"100%"},checkboxLabel:{display:"flex",alignItems:"center",marginBottom:"10px",fontSize:"13px",cursor:"pointer",gap:"8px"},colorBox:{width:"14px",height:"14px",borderRadius:"2px",display:"inline-block"},button:{width:"100%",padding:"10px",marginBottom:"8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s"},runButton:{backgroundColor:"#1a4a1a",borderColor:"#2a6a2a"},resetButton:{backgroundColor:"#1a1a1a",borderColor:"#555"},fixedPointItem:{marginBottom:"6px",fontSize:"12px",padding:"6px",background:"#0f0f0f",borderRadius:"4px"},info:{marginTop:"16px",padding:"12px",backgroundColor:"#0f0f0f",borderRadius:"4px",fontSize:"11px",lineHeight:"1.6",color:"#888"},infoHeader:{fontSize:"12px",fontWeight:"600",color:"#4CAF50",marginBottom:"8px"},viewport:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},canvas:{display:"block"}};_y.createRoot(document.getElementById("root")).render(H.jsx(Yt.StrictMode,{children:H.jsx(P1,{})}));
