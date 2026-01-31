(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Jf={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function ly(){if(h_)return Do;h_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var p_;function uy(){return p_||(p_=1,Jf.exports=ly()),Jf.exports}var K=uy(),$f={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function cy(){if(m_)return he;m_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function M(L,it,Et){this.props=L,this.context=it,this.refs=A,this.updater=Et||x}M.prototype.isReactComponent={},M.prototype.setState=function(L,it){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,it,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=M.prototype;function F(L,it,Et){this.props=L,this.context=it,this.refs=A,this.updater=Et||x}var C=F.prototype=new _;C.constructor=F,E(C,M.prototype),C.isPureReactComponent=!0;var w=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function V(L,it,Et,Tt,B,ot){return Et=ot.ref,{$$typeof:o,type:L,key:it,ref:Et!==void 0?Et:null,props:ot}}function W(L,it){return V(L.type,it,void 0,void 0,void 0,L.props)}function U(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function D(L){var it={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Et){return it[Et]})}var X=/\/+/g;function rt(L,it){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):it.toString(36)}function dt(){}function xt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(dt,dt):(L.status="pending",L.then(function(it){L.status==="pending"&&(L.status="fulfilled",L.value=it)},function(it){L.status==="pending"&&(L.status="rejected",L.reason=it)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function pt(L,it,Et,Tt,B){var ot=typeof L;(ot==="undefined"||ot==="boolean")&&(L=null);var I=!1;if(L===null)I=!0;else switch(ot){case"bigint":case"string":case"number":I=!0;break;case"object":switch(L.$$typeof){case o:case t:I=!0;break;case v:return I=L._init,pt(I(L._payload),it,Et,Tt,B)}}if(I)return B=B(L),I=Tt===""?"."+rt(L,0):Tt,w(B)?(Et="",I!=null&&(Et=I.replace(X,"$&/")+"/"),pt(B,it,Et,"",function(At){return At})):B!=null&&(U(B)&&(B=W(B,Et+(B.key==null||L&&L.key===B.key?"":(""+B.key).replace(X,"$&/")+"/")+I)),it.push(B)),1;I=0;var Q=Tt===""?".":Tt+":";if(w(L))for(var ft=0;ft<L.length;ft++)Tt=L[ft],ot=Q+rt(Tt,ft),I+=pt(Tt,it,Et,ot,B);else if(ft=y(L),typeof ft=="function")for(L=ft.call(L),ft=0;!(Tt=L.next()).done;)Tt=Tt.value,ot=Q+rt(Tt,ft++),I+=pt(Tt,it,Et,ot,B);else if(ot==="object"){if(typeof L.then=="function")return pt(xt(L),it,Et,Tt,B);throw it=String(L),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return I}function H(L,it,Et){if(L==null)return L;var Tt=[],B=0;return pt(L,Tt,"","",function(ot){return it.call(Et,ot,B++)}),Tt}function J(L){if(L._status===-1){var it=L._result;it=it(),it.then(function(Et){(L._status===0||L._status===-1)&&(L._status=1,L._result=Et)},function(Et){(L._status===0||L._status===-1)&&(L._status=2,L._result=Et)}),L._status===-1&&(L._status=0,L._result=it)}if(L._status===1)return L._result.default;throw L._result}var j=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function bt(){}return he.Children={map:H,forEach:function(L,it,Et){H(L,function(){it.apply(this,arguments)},Et)},count:function(L){var it=0;return H(L,function(){it++}),it},toArray:function(L){return H(L,function(it){return it})||[]},only:function(L){if(!U(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},he.Component=M,he.Fragment=i,he.Profiler=l,he.PureComponent=F,he.StrictMode=r,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,he.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},he.cache=function(L){return function(){return L.apply(null,arguments)}},he.cloneElement=function(L,it,Et){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Tt=E({},L.props),B=L.key,ot=void 0;if(it!=null)for(I in it.ref!==void 0&&(ot=void 0),it.key!==void 0&&(B=""+it.key),it)!G.call(it,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&it.ref===void 0||(Tt[I]=it[I]);var I=arguments.length-2;if(I===1)Tt.children=Et;else if(1<I){for(var Q=Array(I),ft=0;ft<I;ft++)Q[ft]=arguments[ft+2];Tt.children=Q}return V(L.type,B,void 0,void 0,ot,Tt)},he.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},he.createElement=function(L,it,Et){var Tt,B={},ot=null;if(it!=null)for(Tt in it.key!==void 0&&(ot=""+it.key),it)G.call(it,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(B[Tt]=it[Tt]);var I=arguments.length-2;if(I===1)B.children=Et;else if(1<I){for(var Q=Array(I),ft=0;ft<I;ft++)Q[ft]=arguments[ft+2];B.children=Q}if(L&&L.defaultProps)for(Tt in I=L.defaultProps,I)B[Tt]===void 0&&(B[Tt]=I[Tt]);return V(L,ot,void 0,void 0,null,B)},he.createRef=function(){return{current:null}},he.forwardRef=function(L){return{$$typeof:h,render:L}},he.isValidElement=U,he.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:J}},he.memo=function(L,it){return{$$typeof:p,type:L,compare:it===void 0?null:it}},he.startTransition=function(L){var it=O.T,Et={};O.T=Et;try{var Tt=L(),B=O.S;B!==null&&B(Et,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(bt,j)}catch(ot){j(ot)}finally{O.T=it}},he.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},he.use=function(L){return O.H.use(L)},he.useActionState=function(L,it,Et){return O.H.useActionState(L,it,Et)},he.useCallback=function(L,it){return O.H.useCallback(L,it)},he.useContext=function(L){return O.H.useContext(L)},he.useDebugValue=function(){},he.useDeferredValue=function(L,it){return O.H.useDeferredValue(L,it)},he.useEffect=function(L,it,Et){var Tt=O.H;if(typeof Et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Tt.useEffect(L,it)},he.useId=function(){return O.H.useId()},he.useImperativeHandle=function(L,it,Et){return O.H.useImperativeHandle(L,it,Et)},he.useInsertionEffect=function(L,it){return O.H.useInsertionEffect(L,it)},he.useLayoutEffect=function(L,it){return O.H.useLayoutEffect(L,it)},he.useMemo=function(L,it){return O.H.useMemo(L,it)},he.useOptimistic=function(L,it){return O.H.useOptimistic(L,it)},he.useReducer=function(L,it,Et){return O.H.useReducer(L,it,Et)},he.useRef=function(L){return O.H.useRef(L)},he.useState=function(L){return O.H.useState(L)},he.useSyncExternalStore=function(L,it,Et){return O.H.useSyncExternalStore(L,it,Et)},he.useTransition=function(){return O.H.useTransition()},he.version="19.1.1",he}var g_;function Ch(){return g_||(g_=1,$f.exports=cy()),$f.exports}var de=Ch(),td={exports:{}},Uo={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function fy(){return __||(__=1,(function(o){function t(H,J){var j=H.length;H.push(J);t:for(;0<j;){var bt=j-1>>>1,L=H[bt];if(0<l(L,J))H[bt]=J,H[j]=L,j=bt;else break t}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var J=H[0],j=H.pop();if(j!==J){H[0]=j;t:for(var bt=0,L=H.length,it=L>>>1;bt<it;){var Et=2*(bt+1)-1,Tt=H[Et],B=Et+1,ot=H[B];if(0>l(Tt,j))B<L&&0>l(ot,Tt)?(H[bt]=ot,H[B]=j,bt=B):(H[bt]=Tt,H[Et]=j,bt=Et);else if(B<L&&0>l(ot,j))H[bt]=ot,H[B]=j,bt=B;else break t}}return J}function l(H,J){var j=H.sortIndex-J.sortIndex;return j!==0?j:H.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,y=3,x=!1,E=!1,A=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function w(H){for(var J=i(p);J!==null;){if(J.callback===null)r(p);else if(J.startTime<=H)r(p),J.sortIndex=J.expirationTime,t(m,J);else break;J=i(p)}}function O(H){if(A=!1,w(H),!E)if(i(m)!==null)E=!0,G||(G=!0,rt());else{var J=i(p);J!==null&&pt(O,J.startTime-H)}}var G=!1,V=-1,W=5,U=-1;function D(){return M?!0:!(o.unstable_now()-U<W)}function X(){if(M=!1,G){var H=o.unstable_now();U=H;var J=!0;try{t:{E=!1,A&&(A=!1,F(V),V=-1),x=!0;var j=y;try{e:{for(w(H),g=i(m);g!==null&&!(g.expirationTime>H&&D());){var bt=g.callback;if(typeof bt=="function"){g.callback=null,y=g.priorityLevel;var L=bt(g.expirationTime<=H);if(H=o.unstable_now(),typeof L=="function"){g.callback=L,w(H),J=!0;break e}g===i(m)&&r(m),w(H)}else r(m);g=i(m)}if(g!==null)J=!0;else{var it=i(p);it!==null&&pt(O,it.startTime-H),J=!1}}break t}finally{g=null,y=j,x=!1}J=void 0}}finally{J?rt():G=!1}}}var rt;if(typeof C=="function")rt=function(){C(X)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,xt=dt.port2;dt.port1.onmessage=X,rt=function(){xt.postMessage(null)}}else rt=function(){_(X,0)};function pt(H,J){V=_(function(){H(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(H){switch(y){case 1:case 2:case 3:var J=3;break;default:J=y}var j=y;y=J;try{return H()}finally{y=j}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var j=y;y=H;try{return J()}finally{y=j}},o.unstable_scheduleCallback=function(H,J,j){var bt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?bt+j:bt):j=bt,H){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=j+L,H={id:v++,callback:J,priorityLevel:H,startTime:j,expirationTime:L,sortIndex:-1},j>bt?(H.sortIndex=j,t(p,H),i(m)===null&&H===i(p)&&(A?(F(V),V=-1):A=!0,pt(O,j-bt))):(H.sortIndex=L,t(m,H),E||x||(E=!0,G||(G=!0,rt()))),H},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(H){var J=y;return function(){var j=y;y=J;try{return H.apply(this,arguments)}finally{y=j}}}})(nd)),nd}var v_;function dy(){return v_||(v_=1,ed.exports=fy()),ed.exports}var id={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function hy(){if(x_)return Cn;x_=1;var o=Ch();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Cn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:x}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.1.1",Cn}var y_;function py(){if(y_)return id.exports;y_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),id.exports=hy(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function my(){if(S_)return Uo;S_=1;var o=dy(),t=Ch(),i=py();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return h(u),e;if(f===s)return h(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,s=f;break}if(T===s){S=!0,s=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=u;break}if(T===s){S=!0,s=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),C=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var dt=Symbol.for("react.client.reference");function xt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case M:return"Profiler";case A:return"StrictMode";case O:return"Suspense";case G:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case C:return(e.displayName||"Context")+".Provider";case F:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return n=e.displayName||null,n!==null?n:xt(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return xt(e(n))}catch{}}return null}var pt=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},bt=[],L=-1;function it(e){return{current:e}}function Et(e){0>L||(e.current=bt[L],bt[L]=null,L--)}function Tt(e,n){L++,bt[L]=e.current,e.current=n}var B=it(null),ot=it(null),I=it(null),Q=it(null);function ft(e,n){switch(Tt(I,n),Tt(ot,e),Tt(B,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Gg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Gg(n),e=Vg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Et(B),Tt(B,e)}function At(){Et(B),Et(ot),Et(I)}function vt(e){e.memoizedState!==null&&Tt(Q,e);var n=B.current,a=Vg(n,e.type);n!==a&&(Tt(ot,e),Tt(B,a))}function zt(e){ot.current===e&&(Et(B),Et(ot)),Q.current===e&&(Et(Q),To._currentValue=j)}var kt=Object.prototype.hasOwnProperty,P=o.unstable_scheduleCallback,ce=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,Gt=o.unstable_requestPaint,Pt=o.unstable_now,Le=o.unstable_getCurrentPriorityLevel,Yt=o.unstable_ImmediatePriority,ue=o.unstable_UserBlockingPriority,We=o.unstable_NormalPriority,qe=o.unstable_LowPriority,N=o.unstable_IdlePriority,b=o.log,at=o.unstable_setDisableYieldValue,mt=null,yt=null;function ht(e){if(typeof b=="function"&&at(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(mt,e)}catch{}}var Vt=Math.clz32?Math.clz32:$t,Ut=Math.log,Qt=Math.LN2;function $t(e){return e>>>=0,e===0?32:31-(Ut(e)/Qt|0)|0}var Rt=256,It=4194304;function ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=ee(s):(S&=T,S!==0?u=ee(S):a||(a=T&~e,a!==0&&(u=ee(a))))):(T=s&~f,T!==0?u=ee(T):S!==0?u=ee(S):a||(a=s&~e,a!==0&&(u=ee(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ot(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=Rt;return Rt<<=1,(Rt&4194048)===0&&(Rt=256),e}function Dt(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Lt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Xt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ct(e,n,a,s,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,z=e.expirationTimes,nt=e.hiddenUpdates;for(a=S&~a;0<a;){var gt=31-Vt(a),St=1<<gt;T[gt]=0,z[gt]=-1;var st=nt[gt];if(st!==null)for(nt[gt]=null,gt=0;gt<st.length;gt++){var lt=st[gt];lt!==null&&(lt.lane&=-536870913)}a&=~St}s!==0&&Mt(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Mt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Vt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Zt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Vt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function le(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ne(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Re(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:o_(e.type))}function hi(e,n){var a=J.p;try{return J.p=e,n()}finally{J.p=a}}var cn=Math.random().toString(36).slice(2),fn="__reactFiber$"+cn,Je="__reactProps$"+cn,Ti="__reactContainer$"+cn,Er="__reactEvents$"+cn,tl="__reactListeners$"+cn,br="__reactHandles$"+cn,Bs="__reactResources$"+cn,Ai="__reactMarker$"+cn;function Tr(e){delete e[fn],delete e[Je],delete e[Er],delete e[tl],delete e[br]}function zi(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ti]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=qg(e);e!==null;){if(a=e[fn])return a;e=qg(e)}return n}e=a,a=e.parentNode}return null}function la(e){if(e=e[fn]||e[Ti]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Xa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ua(e){var n=e[Bs];return n||(n=e[Bs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[Ai]=!0}var el=new Set,nl={};function R(e,n){Y(e,n),Y(e+"Capture",n)}function Y(e,n){for(nl[e]=n,e=0;e<n.length;e++)el.add(n[e])}var ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},$={};function wt(e){return kt.call($,e)?!0:kt.call(ct,e)?!1:ut.test(e)?$[e]=!0:(ct[e]=!0,!1)}function Bt(e,n,a){if(wt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function qt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ft(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var ie,re;function Jt(e){if(ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ie=n&&n[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ie+e+re}var me=!1;function Ce(e,n){if(!e||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(lt){var st=lt}Reflect.construct(e,[],St)}else{try{St.call()}catch(lt){st=lt}e.call(St.prototype)}}else{try{throw Error()}catch(lt){st=lt}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var z=S.split(`
`),nt=T.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===nt.length)for(s=z.length-1,u=nt.length-1;1<=s&&0<=u&&z[s]!==nt[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==nt[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==nt[u]){var gt=`
`+z[s].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=s&&0<=u);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Jt(a):""}function Ze(e){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return Jt("Activity");default:return""}}function Be(e){try{var n="";do n+=Ze(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(e){var n=ne(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Se(e){e._valueTracker||(e._valueTracker=Ye(e))}function Tn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ne(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nn=/[\n"\\]/g;function gn(e){return e.replace(Nn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(e,n,a,s,u,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ge(n)):e.value!==""+ge(n)&&(e.value=""+ge(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?An(e,S,ge(n)):a!=null?An(e,S,ge(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ge(T):e.removeAttribute("name")}function On(e,n,a,s,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function An(e,n,a){n==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $e(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+ge(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ge(a):""}function Ar(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(pt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ge(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var rv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||rv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Gh(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Gh(e,f,n[f])}function Ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return ov.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qu=null;function Ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rr=null,Cr=null;function kh(e){var n=la(e);if(n&&(e=n.stateNode)){var a=e[Je]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ve(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[Je]||null;if(!u)throw Error(r(90));Ve(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Tn(s)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$e(e,!!a.multiple,n,!1)}}}var $u=!1;function Xh(e,n,a){if($u)return e(n,a);$u=!0;try{var s=e(n);return s}finally{if($u=!1,(Rr!==null||Cr!==null)&&(Vl(),Rr&&(n=Rr,e=Cr,Cr=Rr=null,kh(n),e)))for(n=0;n<e.length;n++)kh(e[n])}}function Is(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Je]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=!1;if(Fi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){tc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{tc=!1}var ca=null,ec=null,al=null;function Wh(){if(al)return al;var e,n=ec,a=n.length,s,u="value"in ca?ca.value:ca.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return al=u.slice(e,1<s?1-s:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function qh(){return!1}function Hn(e){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:qh,this.isPropagationStopped=qh,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Hn(Wa),Fs=v({},Wa,{view:0,detail:0}),lv=Hn(Fs),nc,ic,Hs,ll=v({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hs&&(Hs&&e.type==="mousemove"?(nc=e.screenX-Hs.screenX,ic=e.screenY-Hs.screenY):ic=nc=0,Hs=e),nc)},movementY:function(e){return"movementY"in e?e.movementY:ic}}),Yh=Hn(ll),uv=v({},ll,{dataTransfer:0}),cv=Hn(uv),fv=v({},Fs,{relatedTarget:0}),ac=Hn(fv),dv=v({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=Hn(dv),pv=v({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mv=Hn(pv),gv=v({},Wa,{data:0}),jh=Hn(gv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xv[e])?!!n[e]:!1}function rc(){return yv}var Sv=v({},Fs,{key:function(e){if(e.key){var n=_v[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mv=Hn(Sv),Ev=v({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=Hn(Ev),bv=v({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),Tv=Hn(bv),Av=v({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=Hn(Av),Cv=v({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Hn(Cv),Dv=v({},Wa,{newState:0,oldState:0}),Uv=Hn(Dv),Lv=[9,13,27,32],sc=Fi&&"CompositionEvent"in window,Gs=null;Fi&&"documentMode"in document&&(Gs=document.documentMode);var Nv=Fi&&"TextEvent"in window&&!Gs,Kh=Fi&&(!sc||Gs&&8<Gs&&11>=Gs),Qh=" ",Jh=!1;function $h(e,n){switch(e){case"keyup":return Lv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function Ov(e,n){switch(e){case"compositionend":return tp(n);case"keypress":return n.which!==32?null:(Jh=!0,Qh);case"textInput":return e=n.data,e===Qh&&Jh?null:e;default:return null}}function Pv(e,n){if(wr)return e==="compositionend"||!sc&&$h(e,n)?(e=Wh(),al=ec=ca=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kh&&n.locale!=="ko"?null:n.data;default:return null}}var Bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bv[e.type]:n==="textarea"}function np(e,n,a,s){Rr?Cr?Cr.push(s):Cr=[s]:Rr=s,n=jl(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Vs=null,ks=null;function Iv(e){Bg(e,0)}function ul(e){var n=Xa(e);if(Tn(n))return e}function ip(e,n){if(e==="change")return n}var ap=!1;if(Fi){var oc;if(Fi){var lc="oninput"in document;if(!lc){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),lc=typeof rp.oninput=="function"}oc=lc}else oc=!1;ap=oc&&(!document.documentMode||9<document.documentMode)}function sp(){Vs&&(Vs.detachEvent("onpropertychange",op),ks=Vs=null)}function op(e){if(e.propertyName==="value"&&ul(ks)){var n=[];np(n,ks,e,Ju(e)),Xh(Iv,n)}}function zv(e,n,a){e==="focusin"?(sp(),Vs=n,ks=a,Vs.attachEvent("onpropertychange",op)):e==="focusout"&&sp()}function Fv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(ks)}function Hv(e,n){if(e==="click")return ul(n)}function Gv(e,n){if(e==="input"||e==="change")return ul(n)}function Vv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Vv;function Xs(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!kt.call(n,u)||!Yn(e[u],n[u]))return!1}return!0}function lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function up(e,n){var a=lp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=lp(a)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pi(e.document)}return n}function uc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var kv=Fi&&"documentMode"in document&&11>=document.documentMode,Dr=null,cc=null,Ws=null,fc=!1;function dp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||Dr==null||Dr!==pi(s)||(s=Dr,"selectionStart"in s&&uc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ws&&Xs(Ws,s)||(Ws=s,s=jl(cc,"onSelect"),0<s.length&&(n=new ol("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Dr)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ur={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},dc={},hp={};Fi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Ya(e){if(dc[e])return dc[e];if(!Ur[e])return e;var n=Ur[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return dc[e]=n[a];return e}var pp=Ya("animationend"),mp=Ya("animationiteration"),gp=Ya("animationstart"),Xv=Ya("transitionrun"),Wv=Ya("transitionstart"),qv=Ya("transitioncancel"),_p=Ya("transitionend"),vp=new Map,hc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hc.push("scrollEnd");function mi(e,n){vp.set(e,n),R(n,[e])}var xp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=xp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Be(n)},xp.set(e,n),n)}return{value:e,source:n,stack:Be(n)}}var ai=[],Lr=0,pc=0;function cl(){for(var e=Lr,n=pc=Lr=0;n<e;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&yp(a,u,f)}}function fl(e,n,a,s){ai[Lr++]=e,ai[Lr++]=n,ai[Lr++]=a,ai[Lr++]=s,pc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function mc(e,n,a,s){return fl(e,n,a,s),dl(e)}function Nr(e,n){return fl(e,null,null,n),dl(e)}function yp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Vt(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function dl(e){if(50<_o)throw _o=0,Mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Or={};function Yv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,s){return new Yv(e,n,a,s)}function gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,s,u,f){var S=0;if(s=e,typeof e=="function")gc(e)&&(S=1);else if(typeof e=="string")S=Zx(e,a,B.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=jn(31,a,n,u),e.elementType=U,e.lanes=f,e;case E:return ja(a.children,u,f,n);case A:S=8,u|=24;break;case M:return e=jn(12,a,n,u|2),e.elementType=M,e.lanes=f,e;case O:return e=jn(13,a,n,u),e.elementType=O,e.lanes=f,e;case G:return e=jn(19,a,n,u),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case C:S=10;break t;case F:S=9;break t;case w:S=11;break t;case V:S=14;break t;case W:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=jn(S,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function ja(e,n,a,s){return e=jn(7,e,s,n),e.lanes=a,e}function _c(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function vc(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Pr=[],Br=0,pl=null,ml=0,ri=[],si=0,Za=null,Gi=1,Vi="";function Ka(e,n){Pr[Br++]=ml,Pr[Br++]=pl,pl=e,ml=n}function Mp(e,n,a){ri[si++]=Gi,ri[si++]=Vi,ri[si++]=Za,Za=e;var s=Gi;e=Vi;var u=32-Vt(s)-1;s&=~(1<<u),a+=1;var f=32-Vt(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Gi=1<<32-Vt(n)+u|a<<u|s,Vi=f+e}else Gi=1<<f|a<<u|s,Vi=e}function xc(e){e.return!==null&&(Ka(e,1),Mp(e,1,0))}function yc(e){for(;e===pl;)pl=Pr[--Br],Pr[Br]=null,ml=Pr[--Br],Pr[Br]=null;for(;e===Za;)Za=ri[--si],ri[si]=null,Vi=ri[--si],ri[si]=null,Gi=ri[--si],ri[si]=null}var Pn=null,tn=null,Ue=!1,Qa=null,Ri=!1,Sc=Error(r(519));function Ja(e){var n=Error(r(418,""));throw js(ii(n,e)),Sc}function Ep(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[fn]=e,n[Je]=s,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)Ee(xo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),On(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Se(n);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Ar(n,s.value,s.defaultValue,s.children),Se(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Hg(n.textContent,a)?(s.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),s.onScroll!=null&&Ee("scroll",n),s.onScrollEnd!=null&&Ee("scrollend",n),s.onClick!=null&&(n.onclick=Zl),n=!0):n=!1,n||Ja(e)}function bp(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Pn=Pn.return}}function qs(e){if(e!==Pn)return!1;if(!Ue)return bp(e),Ue=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&tn&&Ja(e),bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){tn=_i(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}tn=null}}else n===27?(n=tn,Aa(e.type)?(e=Vf,Vf=null,tn=e):tn=n):tn=Pn?_i(e.stateNode.nextSibling):null;return!0}function Ys(){tn=Pn=null,Ue=!1}function Tp(){var e=Qa;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),Qa=null),e}function js(e){Qa===null?Qa=[e]:Qa.push(e)}var Mc=it(null),$a=null,ki=null;function fa(e,n,a){Tt(Mc,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Mc.current,Et(Mc)}function Ec(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function bc(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var z=0;z<n.length;z++)if(T.context===n[z]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Ec(f.return,a,e),s||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Ec(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Zs(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;Yn(u.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(u===Q.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}u=u.return}e!==null&&bc(n,e,a,s),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tr(e){$a=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Ap($a,e)}function _l(e,n){return $a===null&&tr(e),Ap(e,n)}function Ap(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var jv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Zv=o.unstable_scheduleCallback,Kv=o.unstable_NormalPriority,dn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tc(){return{controller:new jv,data:new Map,refCount:0}}function Ks(e){e.refCount--,e.refCount===0&&Zv(Kv,function(){e.controller.abort()})}var Qs=null,Ac=0,Ir=0,zr=null;function Qv(e,n){if(Qs===null){var a=Qs=[];Ac=0,Ir=wf(),zr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Ac++,n.then(Rp,Rp),n}function Rp(){if(--Ac===0&&Qs!==null){zr!==null&&(zr.status="fulfilled");var e=Qs;Qs=null,Ir=0,zr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Cp=H.S;H.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qv(e,n),Cp!==null&&Cp(e,n)};var er=it(null);function Rc(){var e=er.current;return e!==null?e:Xe.pooledCache}function vl(e,n){n===null?Tt(er,er.current):Tt(er,n.pool)}function wp(){var e=Rc();return e===null?null:{parent:dn._currentValue,pool:e}}var Js=Error(r(460)),Dp=Error(r(474)),xl=Error(r(542)),Cc={then:function(){}};function Up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yl(){}function Lp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(yl,yl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e;default:if(typeof n.status=="string")n.then(yl,yl);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e}throw $s=n,Js}}var $s=null;function Np(){if($s===null)throw Error(r(459));var e=$s;return $s=null,e}function Op(e){if(e===Js||e===xl)throw Error(r(483))}var da=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=dl(e),yp(e,null,a),n}return fl(e,s,n,a),dl(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Zt(e,a)}}function Uc(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lc=!1;function eo(){if(Lc){var e=zr;if(e!==null)throw e}}function no(e,n,a,s){Lc=!1;var u=e.updateQueue;da=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var z=T,nt=z.next;z.next=null,S===null?f=nt:S.next=nt,S=z;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,T=gt.lastBaseUpdate,T!==S&&(T===null?gt.firstBaseUpdate=nt:T.next=nt,gt.lastBaseUpdate=z))}if(f!==null){var St=u.baseState;S=0,gt=nt=z=null,T=f;do{var st=T.lane&-536870913,lt=st!==T.lane;if(lt?(Ae&st)===st:(s&st)===st){st!==0&&st===Ir&&(Lc=!0),gt!==null&&(gt=gt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var oe=e,ae=T;st=n;var Fe=a;switch(ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){St=oe.call(Fe,St,st);break t}St=oe;break t;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,st=typeof oe=="function"?oe.call(Fe,St,st):oe,st==null)break t;St=v({},St,st);break t;case 2:da=!0}}st=T.callback,st!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:T.tag,payload:T.payload,callback:T.callback,next:null},gt===null?(nt=gt=lt,z=St):gt=gt.next=lt,S|=st;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);gt===null&&(z=St),u.baseState=z,u.firstBaseUpdate=nt,u.lastBaseUpdate=gt,f===null&&(u.shared.lanes=0),Ma|=S,e.lanes=S,e.memoizedState=St}}function Pp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Bp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pp(a[e],n)}var Fr=it(null),Sl=it(0);function Ip(e,n){e=Qi,Tt(Sl,e),Tt(Fr,n),Qi=e|n.baseLanes}function Nc(){Tt(Sl,Qi),Tt(Fr,Fr.current)}function Oc(){Qi=Sl.current,Et(Fr),Et(Sl)}var ma=0,ve=null,Ie=null,on=null,Ml=!1,Hr=!1,nr=!1,El=0,io=0,Gr=null,$v=0;function nn(){throw Error(r(321))}function Pc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Bc(e,n,a,s,u,f){return ma=f,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?ym:Sm,nr=!1,f=a(s,u),nr=!1,Hr&&(f=Fp(n,a,s,u)),zp(e),f}function zp(e){H.H=wl;var n=Ie!==null&&Ie.next!==null;if(ma=0,on=Ie=ve=null,Ml=!1,io=0,Gr=null,n)throw Error(r(300));e===null||_n||(e=e.dependencies,e!==null&&gl(e)&&(_n=!0))}function Fp(e,n,a,s){ve=e;var u=0;do{if(Hr&&(Gr=null),io=0,Hr=!1,25<=u)throw Error(r(301));if(u+=1,on=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=sx,f=n(a,s)}while(Hr);return f}function tx(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(ve.flags|=1024),n}function Ic(){var e=El!==0;return El=0,e}function zc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fc(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}ma=0,on=Ie=ve=null,Hr=!1,io=El=0,Gr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ve.memoizedState=on=e:on=on.next=e,on}function ln(){if(Ie===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=on===null?ve.memoizedState:on.next;if(n!==null)on=n,Ie=e;else{if(e===null)throw ve.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},on===null?ve.memoizedState=on=e:on=on.next=e}return on}function Hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,Gr===null&&(Gr=[]),e=Lp(Gr,e,n),n=ve,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?ym:Sm),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===C)return Rn(e)}throw Error(r(438,String(e)))}function Gc(e){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ve.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hc(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=D;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=ln();return Vc(n,Ie,e)}function Vc(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=S=null,z=null,nt=n,gt=!1;do{var St=nt.lane&-536870913;if(St!==nt.lane?(Ae&St)===St:(ma&St)===St){var st=nt.revertLane;if(st===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),St===Ir&&(gt=!0);else if((ma&st)===st){nt=nt.next,st===Ir&&(gt=!0);continue}else St={lane:0,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},z===null?(T=z=St,S=f):z=z.next=St,ve.lanes|=st,Ma|=st;St=nt.action,nr&&a(f,St),f=nt.hasEagerState?nt.eagerState:a(f,St)}else st={lane:St,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},z===null?(T=z=st,S=f):z=z.next=st,ve.lanes|=St,Ma|=St;nt=nt.next}while(nt!==null&&nt!==n);if(z===null?S=f:z.next=T,!Yn(f,e.memoizedState)&&(_n=!0,gt&&(a=zr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=z,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function kc(e){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Yn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Hp(e,n,a){var s=ve,u=ln(),f=Ue;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Yn((Ie||u).memoizedState,a);S&&(u.memoizedState=a,_n=!0),u=u.queue;var T=kp.bind(null,s,u,e);if(ro(2048,8,T,[e]),u.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Vr(9,Al(),Vp.bind(null,s,u,a,n),null),Xe===null)throw Error(r(349));f||(ma&124)!==0||Gp(s,n,a)}return a}function Gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=Hc(),ve.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Vp(e,n,a,s){n.value=a,n.getSnapshot=s,Xp(n)&&Wp(e)}function kp(e,n,a){return a(function(){Xp(n)&&Wp(e)})}function Xp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Wp(e){var n=Nr(e,2);n!==null&&$n(n,e,2)}function Xc(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),nr){ht(!0);try{a()}finally{ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function qp(e,n,a,s){return e.baseState=a,Vc(e,Ie,typeof s=="function"?s:Wi)}function ex(e,n,a,s,u){if(Cl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};H.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Yp(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=H.T,S={};H.T=S;try{var T=a(u,s),z=H.S;z!==null&&z(S,T),jp(e,n,T)}catch(nt){Wc(e,n,nt)}finally{H.T=f}}else try{f=a(u,s),jp(e,n,f)}catch(nt){Wc(e,n,nt)}}function jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Zp(e,n,s)},function(s){return Wc(e,n,s)}):Zp(e,n,a)}function Zp(e,n,a){n.status="fulfilled",n.value=a,Kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Yp(e,a)))}function Wc(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==s)}e.action=null}function Kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qp(e,n){return n}function Jp(e,n){if(Ue){var a=Xe.formState;if(a!==null){t:{var s=ve;if(Ue){if(tn){e:{for(var u=tn,f=Ri;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){tn=_i(u.nextSibling),s=u.data==="F!";break t}}Ja(s)}s=!1}s&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=s,a=_m.bind(null,ve,s),s.dispatch=a,s=Xc(!1),f=Kc.bind(null,ve,!1,s.queue),s=Gn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=ex.bind(null,ve,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function $p(e){var n=ln();return tm(n,Ie,e)}function tm(e,n,a){if(n=Vc(e,n,Qp)[0],e=Tl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ao(n)}catch(S){throw S===Js?xl:S}else s=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,Vr(9,Al(),nx.bind(null,u,a),null)),[s,f,e]}function nx(e,n){e.action=n}function em(e){var n=ln(),a=Ie;if(a!==null)return tm(n,a,e);ln(),n=n.memoizedState,a=ln();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Vr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ve.updateQueue,n===null&&(n=Hc(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Al(){return{destroy:void 0,resource:void 0}}function nm(){return ln().memoizedState}function Rl(e,n,a,s){var u=Gn();s=s===void 0?null:s,ve.flags|=e,u.memoizedState=Vr(1|n,Al(),a,s)}function ro(e,n,a,s){var u=ln();s=s===void 0?null:s;var f=u.memoizedState.inst;Ie!==null&&s!==null&&Pc(s,Ie.memoizedState.deps)?u.memoizedState=Vr(n,f,a,s):(ve.flags|=e,u.memoizedState=Vr(1|n,f,a,s))}function im(e,n){Rl(8390656,8,e,n)}function am(e,n){ro(2048,8,e,n)}function rm(e,n){return ro(4,2,e,n)}function sm(e,n){return ro(4,4,e,n)}function om(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lm(e,n,a){a=a!=null?a.concat([e]):null,ro(4,4,om.bind(null,n,e),a)}function qc(){}function um(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Pc(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function cm(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Pc(n,s[1]))return s[0];if(s=e(),nr){ht(!0);try{e()}finally{ht(!1)}}return a.memoizedState=[s,n],s}function Yc(e,n,a){return a===void 0||(ma&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=hg(),ve.lanes|=e,Ma|=e,a)}function fm(e,n,a,s){return Yn(a,n)?a:Fr.current!==null?(e=Yc(e,a,s),Yn(e,n)||(_n=!0),e):(ma&42)===0?(_n=!0,e.memoizedState=a):(e=hg(),ve.lanes|=e,Ma|=e,n)}function dm(e,n,a,s,u){var f=J.p;J.p=f!==0&&8>f?f:8;var S=H.T,T={};H.T=T,Kc(e,!1,n,a);try{var z=u(),nt=H.S;if(nt!==null&&nt(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var gt=Jv(z,s);so(e,n,gt,Jn(e))}else so(e,n,s,Jn(e))}catch(St){so(e,n,{then:function(){},status:"rejected",reason:St},Jn())}finally{J.p=f,H.T=S}}function ix(){}function jc(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=hm(e).queue;dm(e,u,n,j,a===null?ix:function(){return pm(e),a(s)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function pm(e){var n=hm(e).next.queue;so(e,n,{},Jn())}function Zc(){return Rn(To)}function mm(){return ln().memoizedState}function gm(){return ln().memoizedState}function ax(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=ha(a);var s=pa(n,e,a);s!==null&&($n(s,n,a),to(s,n,a)),n={cache:Tc()},e.payload=n;return}n=n.return}}function rx(e,n,a){var s=Jn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?vm(n,a):(a=mc(e,n,a,s),a!==null&&($n(a,e,s),xm(a,n,s)))}function _m(e,n,a){var s=Jn();so(e,n,a,s)}function so(e,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))vm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,Yn(T,S))return fl(e,n,u,0),Xe===null&&cl(),!1}catch{}finally{}if(a=mc(e,n,u,s),a!==null)return $n(a,e,s),xm(a,n,s),!0}return!1}function Kc(e,n,a,s){if(s={lane:2,revertLane:wf(),action:s,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(r(479))}else n=mc(e,a,s,2),n!==null&&$n(n,e,2)}function Cl(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function vm(e,n){Hr=Ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function xm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Zt(e,a)}}var wl={readContext:Rn,use:bl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},ym={readContext:Rn,use:bl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,om.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var s=e();if(nr){ht(!0);try{e()}finally{ht(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Gn();if(a!==void 0){var u=a(n);if(nr){ht(!0);try{a(n)}finally{ht(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=rx.bind(null,ve,e),[s.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xc(e);var n=e.queue,a=_m.bind(null,ve,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qc,useDeferredValue:function(e,n){var a=Gn();return Yc(a,e,n)},useTransition:function(){var e=Xc(!1);return e=dm.bind(null,ve,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ve,u=Gn();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(Ae&124)!==0||Gp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,im(kp.bind(null,s,f,e),[e]),s.flags|=2048,Vr(9,Al(),Vp.bind(null,s,f,a,n),null),a},useId:function(){var e=Gn(),n=Xe.identifierPrefix;if(Ue){var a=Vi,s=Gi;a=(s&~(1<<32-Vt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=$v++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Zc,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Kc.bind(null,ve,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gc,useCacheRefresh:function(){return Gn().memoizedState=ax.bind(null,ve)}},Sm={readContext:Rn,use:bl,useCallback:um,useContext:Rn,useEffect:am,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:cm,useReducer:Tl,useRef:nm,useState:function(){return Tl(Wi)},useDebugValue:qc,useDeferredValue:function(e,n){var a=ln();return fm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Tl(Wi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Zc,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=ln();return qp(a,Ie,e,n)},useMemoCache:Gc,useCacheRefresh:gm},sx={readContext:Rn,use:bl,useCallback:um,useContext:Rn,useEffect:am,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:cm,useReducer:kc,useRef:nm,useState:function(){return kc(Wi)},useDebugValue:qc,useDeferredValue:function(e,n){var a=ln();return Ie===null?Yc(a,e,n):fm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=kc(Wi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Zc,useFormState:em,useActionState:em,useOptimistic:function(e,n){var a=ln();return Ie!==null?qp(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:gm},kr=null,oo=0;function Dl(e){var n=oo;return oo+=1,kr===null&&(kr=[]),Lp(kr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Mm(e){var n=e._init;return n(e._payload)}function Em(e){function n(Z,k){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[k],Z.flags|=16):tt.push(k)}}function a(Z,k){if(!e)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function s(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=Hi(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<k?(Z.flags|=67108866,k):tt):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,k,tt,_t){return k===null||k.tag!==6?(k=_c(tt,Z.mode,_t),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function z(Z,k,tt,_t){var jt=tt.type;return jt===E?gt(Z,k,tt.props.children,_t,tt.key):k!==null&&(k.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===W&&Mm(jt)===k.type)?(k=u(k,tt.props),lo(k,tt),k.return=Z,k):(k=hl(tt.type,tt.key,tt.props,null,Z.mode,_t),lo(k,tt),k.return=Z,k)}function nt(Z,k,tt,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=vc(tt,Z.mode,_t),k.return=Z,k):(k=u(k,tt.children||[]),k.return=Z,k)}function gt(Z,k,tt,_t,jt){return k===null||k.tag!==7?(k=ja(tt,Z.mode,_t,jt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function St(Z,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=_c(""+k,Z.mode,tt),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return tt=hl(k.type,k.key,k.props,null,Z.mode,tt),lo(tt,k),tt.return=Z,tt;case x:return k=vc(k,Z.mode,tt),k.return=Z,k;case W:var _t=k._init;return k=_t(k._payload),St(Z,k,tt)}if(pt(k)||rt(k))return k=ja(k,Z.mode,tt,null),k.return=Z,k;if(typeof k.then=="function")return St(Z,Dl(k),tt);if(k.$$typeof===C)return St(Z,_l(Z,k),tt);Ul(Z,k)}return null}function st(Z,k,tt,_t){var jt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return jt!==null?null:T(Z,k,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===jt?z(Z,k,tt,_t):null;case x:return tt.key===jt?nt(Z,k,tt,_t):null;case W:return jt=tt._init,tt=jt(tt._payload),st(Z,k,tt,_t)}if(pt(tt)||rt(tt))return jt!==null?null:gt(Z,k,tt,_t,null);if(typeof tt.then=="function")return st(Z,k,Dl(tt),_t);if(tt.$$typeof===C)return st(Z,k,_l(Z,tt),_t);Ul(Z,tt)}return null}function lt(Z,k,tt,_t,jt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get(tt)||null,T(k,Z,""+_t,jt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Z=Z.get(_t.key===null?tt:_t.key)||null,z(k,Z,_t,jt);case x:return Z=Z.get(_t.key===null?tt:_t.key)||null,nt(k,Z,_t,jt);case W:var xe=_t._init;return _t=xe(_t._payload),lt(Z,k,tt,_t,jt)}if(pt(_t)||rt(_t))return Z=Z.get(tt)||null,gt(k,Z,_t,jt,null);if(typeof _t.then=="function")return lt(Z,k,tt,Dl(_t),jt);if(_t.$$typeof===C)return lt(Z,k,tt,_l(k,_t),jt);Ul(k,_t)}return null}function oe(Z,k,tt,_t){for(var jt=null,xe=null,te=k,se=k=0,xn=null;te!==null&&se<tt.length;se++){te.index>se?(xn=te,te=null):xn=te.sibling;var we=st(Z,te,tt[se],_t);if(we===null){te===null&&(te=xn);break}e&&te&&we.alternate===null&&n(Z,te),k=f(we,k,se),xe===null?jt=we:xe.sibling=we,xe=we,te=xn}if(se===tt.length)return a(Z,te),Ue&&Ka(Z,se),jt;if(te===null){for(;se<tt.length;se++)te=St(Z,tt[se],_t),te!==null&&(k=f(te,k,se),xe===null?jt=te:xe.sibling=te,xe=te);return Ue&&Ka(Z,se),jt}for(te=s(te);se<tt.length;se++)xn=lt(te,Z,se,tt[se],_t),xn!==null&&(e&&xn.alternate!==null&&te.delete(xn.key===null?se:xn.key),k=f(xn,k,se),xe===null?jt=xn:xe.sibling=xn,xe=xn);return e&&te.forEach(function(Ua){return n(Z,Ua)}),Ue&&Ka(Z,se),jt}function ae(Z,k,tt,_t){if(tt==null)throw Error(r(151));for(var jt=null,xe=null,te=k,se=k=0,xn=null,we=tt.next();te!==null&&!we.done;se++,we=tt.next()){te.index>se?(xn=te,te=null):xn=te.sibling;var Ua=st(Z,te,we.value,_t);if(Ua===null){te===null&&(te=xn);break}e&&te&&Ua.alternate===null&&n(Z,te),k=f(Ua,k,se),xe===null?jt=Ua:xe.sibling=Ua,xe=Ua,te=xn}if(we.done)return a(Z,te),Ue&&Ka(Z,se),jt;if(te===null){for(;!we.done;se++,we=tt.next())we=St(Z,we.value,_t),we!==null&&(k=f(we,k,se),xe===null?jt=we:xe.sibling=we,xe=we);return Ue&&Ka(Z,se),jt}for(te=s(te);!we.done;se++,we=tt.next())we=lt(te,Z,se,we.value,_t),we!==null&&(e&&we.alternate!==null&&te.delete(we.key===null?se:we.key),k=f(we,k,se),xe===null?jt=we:xe.sibling=we,xe=we);return e&&te.forEach(function(oy){return n(Z,oy)}),Ue&&Ka(Z,se),jt}function Fe(Z,k,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var jt=tt.key;k!==null;){if(k.key===jt){if(jt=tt.type,jt===E){if(k.tag===7){a(Z,k.sibling),_t=u(k,tt.props.children),_t.return=Z,Z=_t;break t}}else if(k.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===W&&Mm(jt)===k.type){a(Z,k.sibling),_t=u(k,tt.props),lo(_t,tt),_t.return=Z,Z=_t;break t}a(Z,k);break}else n(Z,k);k=k.sibling}tt.type===E?(_t=ja(tt.props.children,Z.mode,_t,tt.key),_t.return=Z,Z=_t):(_t=hl(tt.type,tt.key,tt.props,null,Z.mode,_t),lo(_t,tt),_t.return=Z,Z=_t)}return S(Z);case x:t:{for(jt=tt.key;k!==null;){if(k.key===jt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(Z,k.sibling),_t=u(k,tt.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}_t=vc(tt,Z.mode,_t),_t.return=Z,Z=_t}return S(Z);case W:return jt=tt._init,tt=jt(tt._payload),Fe(Z,k,tt,_t)}if(pt(tt))return oe(Z,k,tt,_t);if(rt(tt)){if(jt=rt(tt),typeof jt!="function")throw Error(r(150));return tt=jt.call(tt),ae(Z,k,tt,_t)}if(typeof tt.then=="function")return Fe(Z,k,Dl(tt),_t);if(tt.$$typeof===C)return Fe(Z,k,_l(Z,tt),_t);Ul(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(Z,k.sibling),_t=u(k,tt),_t.return=Z,Z=_t):(a(Z,k),_t=_c(tt,Z.mode,_t),_t.return=Z,Z=_t),S(Z)):a(Z,k)}return function(Z,k,tt,_t){try{oo=0;var jt=Fe(Z,k,tt,_t);return kr=null,jt}catch(te){if(te===Js||te===xl)throw te;var xe=jn(29,te,null,Z.mode);return xe.lanes=_t,xe.return=Z,xe}finally{}}}var Xr=Em(!0),bm=Em(!1),oi=it(null),Ci=null;function ga(e){var n=e.alternate;Tt(hn,hn.current&1),Tt(oi,e),Ci===null&&(n===null||Fr.current!==null||n.memoizedState!==null)&&(Ci=e)}function Tm(e){if(e.tag===22){if(Tt(hn,hn.current),Tt(oi,e),Ci===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ci=e)}}else _a()}function _a(){Tt(hn,hn.current),Tt(oi,oi.current)}function qi(e){Et(oi),Ci===e&&(Ci=null),Et(hn)}var hn=it(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Qc(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Jc={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Jn(),u=ha(s);u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,s),n!==null&&($n(n,e,s),to(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Jn(),u=ha(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,s),n!==null&&($n(n,e,s),to(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=pa(e,s,a),n!==null&&($n(n,e,a),to(n,e,a))}};function Am(e,n,a,s,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Xs(a,s)||!Xs(u,f):!0}function Rm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Jc.enqueueReplaceState(n,n.state,null)}function ir(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Cm(e){Nl(e)}function wm(e){console.error(e)}function Dm(e){Nl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Um(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $c(e,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function Lm(e){return e=ha(e),e.tag=3,e}function Nm(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){Um(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Um(n,a,s),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function ox(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Zs(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 13:return Ci===null?bf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Cc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Af(e,s,u)),!1;case 22:return a.flags|=65536,s===Cc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Af(e,s,u)),!1}throw Error(r(435,a.tag))}return Af(e,s,u),bf(),!1}if(Ue)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Sc&&(e=Error(r(422),{cause:s}),js(ii(e,a)))):(s!==Sc&&(n=Error(r(423),{cause:s}),js(ii(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=ii(s,a),u=$c(e.stateNode,s,u),Uc(e,u),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),go===null?go=[f]:go.push(f),en!==4&&(en=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=$c(a.stateNode,s,e),Uc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Lm(u),Nm(u,e,a,s),Uc(a,u),!1}a=a.return}while(a!==null);return!1}var Om=Error(r(461)),_n=!1;function Mn(e,n,a,s){n.child=e===null?bm(n,null,a,s):Xr(n,e.child,a,s)}function Pm(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return tr(n),s=Bc(e,n,a,S,f,u),T=Ic(),e!==null&&!_n?(zc(e,n,u),Yi(e,n,u)):(Ue&&T&&xc(n),n.flags|=1,Mn(e,n,s,u),n.child)}function Bm(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!gc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Im(e,n,f,s,u)):(e=hl(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xs,a(S,s)&&e.ref===n.ref)return Yi(e,n,u)}return n.flags|=1,e=Hi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Im(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Xs(f,s)&&e.ref===n.ref)if(_n=!1,n.pendingProps=s=f,lf(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Yi(e,n,u)}return tf(e,n,a,s,u)}function zm(e,n,a){var s=n.pendingProps,u=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Fm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,f!==null?f.cachePool:null),f!==null?Ip(n,f):Nc(),Tm(n);else return n.lanes=n.childLanes=536870912,Fm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(vl(n,f.cachePool),Ip(n,f),_a(),n.memoizedState=null):(e!==null&&vl(n,null),Nc(),_a());return Mn(e,n,u,a),n.child}function Fm(e,n,a,s){var u=Rc();return u=u===null?null:{parent:dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&vl(n,null),Nc(),Tm(n),e!==null&&Zs(e,n,s,!0),null}function Pl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,s,u){return tr(n),a=Bc(e,n,a,s,void 0,u),s=Ic(),e!==null&&!_n?(zc(e,n,u),Yi(e,n,u)):(Ue&&s&&xc(n),n.flags|=1,Mn(e,n,a,u),n.child)}function Hm(e,n,a,s,u,f){return tr(n),n.updateQueue=null,a=Fp(n,s,a,u),zp(e),s=Ic(),e!==null&&!_n?(zc(e,n,f),Yi(e,n,f)):(Ue&&s&&xc(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Gm(e,n,a,s,u){if(tr(n),n.stateNode===null){var f=Or,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Jc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},wc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Or,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Qc(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Jc.enqueueReplaceState(f,f.state,null),no(n,s,f,u),eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,z=ir(a,T);f.props=z;var nt=f.context,gt=a.contextType;S=Or,typeof gt=="object"&&gt!==null&&(S=Rn(gt));var St=a.getDerivedStateFromProps;gt=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||nt!==S)&&Rm(n,f,s,S),da=!1;var st=n.memoizedState;f.state=st,no(n,s,f,u),eo(),nt=n.memoizedState,T||st!==nt||da?(typeof St=="function"&&(Qc(n,a,St,s),nt=n.memoizedState),(z=da||Am(n,a,z,s,st,nt,S))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=S,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Dc(e,n),S=n.memoizedProps,gt=ir(a,S),f.props=gt,St=n.pendingProps,st=f.context,nt=a.contextType,z=Or,typeof nt=="object"&&nt!==null&&(z=Rn(nt)),T=a.getDerivedStateFromProps,(nt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==St||st!==z)&&Rm(n,f,s,z),da=!1,st=n.memoizedState,f.state=st,no(n,s,f,u),eo();var lt=n.memoizedState;S!==St||st!==lt||da||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof T=="function"&&(Qc(n,a,T,s),lt=n.memoizedState),(gt=da||Am(n,a,gt,s,st,lt,z)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=z,s=gt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Pl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Xr(n,e.child,null,u),n.child=Xr(n,null,a,u)):Mn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Yi(e,n,u),e}function Vm(e,n,a,s){return Ys(),n.flags|=256,Mn(e,n,a,s),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:wp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function km(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ue){if(u?ga(n):_a(),Ue){var T=tn,z;if(z=T){t:{for(z=T,T=Ri;z.nodeType!==8;){if(!T){T=null;break t}if(z=_i(z.nextSibling),z===null){T=null;break t}}T=z}T!==null?(n.memoizedState={dehydrated:T,treeContext:Za!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},z=jn(18,null,null,0),z.stateNode=T,z.return=n,n.child=z,Pn=n,tn=null,z=!0):z=!1}z||Ja(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Gf(T)?n.lanes=32:n.lanes=536870912,null;qi(n)}return T=s.children,s=s.fallback,u?(_a(),u=n.mode,T=Bl({mode:"hidden",children:T},u),s=ja(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,u=n.child,u.memoizedState=nf(a),u.childLanes=af(e,S,a),n.memoizedState=ef,s):(ga(n),rf(n,T))}if(z=e.memoizedState,z!==null&&(T=z.dehydrated,T!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(_a(),n.child=e.child,n.flags|=128,n=null):(_a(),u=s.fallback,T=n.mode,s=Bl({mode:"visible",children:s.children},T),u=ja(u,T,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Xr(n,e.child,null,a),s=n.child,s.memoizedState=nf(a),s.childLanes=af(e,S,a),n.memoizedState=ef,n=u);else if(ga(n),Gf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var nt=S.dgst;S=nt,s=Error(r(419)),s.stack="",s.digest=S,js({value:s,source:null,stack:null}),n=sf(e,n,a)}else if(_n||Zs(e,n,a,!1),S=(a&e.childLanes)!==0,_n||S){if(S=Xe,S!==null&&(s=a&-a,s=(s&42)!==0?1:le(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==z.retryLane))throw z.retryLane=s,Nr(e,s),$n(S,e,s),Om;T.data==="$?"||bf(),n=sf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,tn=_i(T.nextSibling),Pn=n,Ue=!0,Qa=null,Ri=!1,e!==null&&(ri[si++]=Gi,ri[si++]=Vi,ri[si++]=Za,Gi=e.id,Vi=e.overflow,Za=n),n=rf(n,s.children),n.flags|=4096);return n}return u?(_a(),u=s.fallback,T=n.mode,z=e.child,nt=z.sibling,s=Hi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,nt!==null?u=Hi(nt,u):(u=ja(u,T,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,T=e.child.memoizedState,T===null?T=nf(a):(z=T.cachePool,z!==null?(nt=dn._currentValue,z=z.parent!==nt?{parent:nt,pool:nt}:z):z=wp(),T={baseLanes:T.baseLanes|a,cachePool:z}),u.memoizedState=T,u.childLanes=af(e,S,a),n.memoizedState=ef,s):(ga(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=jn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sf(e,n,a){return Xr(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Xm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ec(e.return,n,a)}function of(e,n,a,s,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function Wm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(Mn(e,n,s.children,a),s=hn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xm(e,a,n);else if(e.tag===19)Xm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Tt(hn,s),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),of(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ll(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}of(n,!0,a,null,f);break;case"together":of(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function lx(e,n,a){switch(n.tag){case 3:ft(n,n.stateNode.containerInfo),fa(n,dn,e.memoizedState.cache),Ys();break;case 27:case 5:vt(n);break;case 4:ft(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?km(e,n,a):(ga(n),e=Yi(e,n,a),e!==null?e.sibling:null);ga(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Zs(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Wm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Tt(hn,hn.current),s)break;return null;case 22:case 23:return n.lanes=0,zm(e,n,a);case 24:fa(n,dn,e.memoizedState.cache)}return Yi(e,n,a)}function qm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return _n=!1,lx(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Ue&&(n.flags&1048576)!==0&&Mp(n,ml,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")gc(s)?(e=ir(s,e),n.tag=1,n=Gm(null,n,s,e,a)):(n.tag=0,n=tf(null,n,s,e,a));else{if(s!=null){if(u=s.$$typeof,u===w){n.tag=11,n=Pm(null,n,s,e,a);break t}else if(u===V){n.tag=14,n=Bm(null,n,s,e,a);break t}}throw n=xt(s)||s,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=ir(s,n.pendingProps),Gm(e,n,s,u,a);case 3:t:{if(ft(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Dc(e,n),no(n,s,null,a);var S=n.memoizedState;if(s=S.cache,fa(n,dn,s),s!==f.cache&&bc(n,[dn],a,!0),eo(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vm(e,n,s,a);break t}else if(s!==u){u=ii(Error(r(424)),n),js(u),n=Vm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=_i(e.firstChild),Pn=n,Ue=!0,Qa=null,Ri=!0,a=bm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ys(),s===u){n=Yi(e,n,a);break t}Mn(e,n,s,a)}n=n.child}return n;case 26:return Pl(e,n),e===null?(a=Kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ue||(a=n.type,e=n.pendingProps,s=Kl(I.current).createElement(a),s[fn]=n,s[Je]=e,bn(s,a,e),sn(s),n.stateNode=s):n.memoizedState=Kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return vt(n),e===null&&Ue&&(s=n.stateNode=Yg(n.type,n.pendingProps,I.current),Pn=n,Ri=!0,u=tn,Aa(n.type)?(Vf=u,tn=_i(s.firstChild)):tn=u),Mn(e,n,n.pendingProps.children,a),Pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ue&&((u=s=tn)&&(s=Bx(s,n.type,n.pendingProps,Ri),s!==null?(n.stateNode=s,Pn=n,tn=_i(s.firstChild),Ri=!1,u=!0):u=!1),u||Ja(n)),vt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,zf(u,f)?s=null:S!==null&&zf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Bc(e,n,tx,null,null,a),To._currentValue=u),Pl(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&Ue&&((e=a=tn)&&(a=Ix(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,Pn=n,tn=null,e=!0):e=!1),e||Ja(n)),null;case 13:return km(e,n,a);case 4:return ft(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Xr(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return Pm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),Mn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,tr(n),u=Rn(u),s=s(u),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return Bm(e,n,n.type,n.pendingProps,a);case 15:return Im(e,n,n.type,n.pendingProps,a);case 19:return Wm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Bl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return zm(e,n,a);case 24:return tr(n),s=Rn(dn),e===null?(u=Rc(),u===null&&(u=Xe,f=Tc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},wc(n),fa(n,dn,u)):((e.lanes&a)!==0&&(Dc(e,n),no(n,null,null,a),eo()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fa(n,dn,s)):(s=f.cache,fa(n,dn,s),s!==u.cache&&bc(n,[dn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(e){e.flags|=4}function Ym(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!e_(n)){if(n=oi.current,n!==null&&((Ae&4194048)===Ae?Ci!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||n!==Ci))throw $s=Cc,Dp;e.flags|=8192}}function Il(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Dt():536870912,e.lanes|=n,jr|=n)}function uo(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function ux(e,n,a){var s=n.pendingProps;switch(yc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Xi(dn),At(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qs(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tp())),Qe(n),null;case 26:return a=n.memoizedState,e===null?(ji(n),a!==null?(Qe(n),Ym(n,a)):(Qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ji(n),Qe(n),Ym(n,a)):(Qe(n),n.flags&=-16777217):(e.memoizedProps!==s&&ji(n),Qe(n),n.flags&=-16777217),null;case 27:zt(n),a=I.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}e=B.current,qs(n)?Ep(n):(e=Yg(u,s,a),n.stateNode=e,ji(n))}return Qe(n),null;case 5:if(zt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(e=B.current,qs(n))Ep(n);else{switch(u=Kl(I.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}e[fn]=n,e[Je]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(bn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(n)}}return Qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=I.current,qs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Hg(e.nodeValue,a)),e||Ja(n)}else e=Kl(e).createTextNode(s),e[fn]=n,n.stateNode=e}return Qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=qs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[fn]=n}else Ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=Tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Qe(n),null;case 4:return At(),e===null&&Nf(n.stateNode.containerInfo),Qe(n),null;case 10:return Xi(n.type),Qe(n),null;case 19:if(Et(hn),u=n.memoizedState,u===null)return Qe(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)uo(u,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ll(e),f!==null){for(n.flags|=128,uo(u,!1),e=f.updateQueue,n.updateQueue=e,Il(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return Tt(hn,hn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Pt()>Hl&&(n.flags|=128,s=!0,uo(u,!1),n.lanes=4194304)}else{if(!s)if(e=Ll(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Il(n,e),uo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ue)return Qe(n),null}else 2*Pt()-u.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,s=!0,uo(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Pt(),n.sibling=null,e=hn.current,Tt(hn,s?e&1|2:e&1),n):(Qe(n),null);case 22:case 23:return qi(n),Oc(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Et(er),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(dn),Qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function cx(e,n){switch(yc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(dn),At(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return zt(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Et(hn),null;case 4:return At(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),Oc(),e!==null&&Et(er),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(dn),null;case 25:return null;default:return null}}function jm(e,n){switch(yc(n),n.tag){case 3:Xi(dn),At();break;case 26:case 27:case 5:zt(n);break;case 4:At();break;case 13:qi(n);break;case 19:Et(hn);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),Oc(),e!==null&&Et(er);break;case 24:Xi(dn)}}function co(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(T){ke(n,n.return,T)}}function va(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var z=a,nt=T;try{nt()}catch(gt){ke(u,z,gt)}}}s=s.next}while(s!==f)}}catch(gt){ke(n,n.return,gt)}}function Zm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Bp(n,a)}catch(s){ke(e,e.return,s)}}}function Km(e,n,a){a.props=ir(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){ke(e,n,s)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){ke(e,n,u)}}function wi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ke(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ke(e,n,u)}else a.current=null}function Qm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ke(e,e.return,u)}}function uf(e,n,a){try{var s=e.stateNode;Ux(s,e.type,a,n),s[Je]=n}catch(u){ke(e,e.return,u)}}function Jm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zl));else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function zl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}function $m(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,s,a),n[fn]=e,n[Je]=a}catch(f){ke(e,e.return,f)}}var Zi=!1,an=!1,df=!1,tg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function fx(e,n){if(e=e.containerInfo,Bf=nu,e=fp(e),uc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,z=-1,nt=0,gt=0,St=e,st=null;e:for(;;){for(var lt;St!==a||u!==0&&St.nodeType!==3||(T=S+u),St!==f||s!==0&&St.nodeType!==3||(z=S+s),St.nodeType===3&&(S+=St.nodeValue.length),(lt=St.firstChild)!==null;)st=St,St=lt;for(;;){if(St===e)break e;if(st===a&&++nt===u&&(T=S),st===f&&++gt===s&&(z=S),(lt=St.nextSibling)!==null)break;St=st,st=St.parentNode}St=lt}a=T===-1||z===-1?null:{start:T,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},nu=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var oe=ir(a.type,u,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(oe,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ae){ke(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function eg(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),s&4&&co(5,a);break;case 1:if(xa(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){ke(a,a.return,S)}else{var u=ir(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){ke(a,a.return,S)}}s&64&&Zm(a),s&512&&fo(a,a.return);break;case 3:if(xa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bp(e,n)}catch(S){ke(a,a.return,S)}}break;case 27:n===null&&s&4&&$m(a);case 26:case 5:xa(e,a),n===null&&s&4&&Qm(a),s&512&&fo(a,a.return);break;case 12:xa(e,a);break;case 13:xa(e,a),s&4&&ag(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yx.bind(null,a),zx(e,a))));break;case 22:if(s=a.memoizedState!==null||Zi,!s){n=n!==null&&n.memoizedState!==null||an,u=Zi;var f=an;Zi=s,(an=n)&&!f?ya(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),Zi=u,an=f}break;case 30:break;default:xa(e,a)}}function ng(e){var n=e.alternate;n!==null&&(e.alternate=null,ng(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Tr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Vn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)ig(e,n,a),a=a.sibling}function ig(e,n,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(mt,a)}catch{}switch(a.tag){case 26:an||wi(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||wi(a,n);var s=Ke,u=Vn;Aa(a.type)&&(Ke=a.stateNode,Vn=!1),Ki(e,n,a),So(a.stateNode),Ke=s,Vn=u;break;case 5:an||wi(a,n);case 6:if(s=Ke,u=Vn,Ke=null,Ki(e,n,a),Ke=s,Vn=u,Ke!==null)if(Vn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){ke(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){ke(a,n,f)}break;case 18:Ke!==null&&(Vn?(e=Ke,Wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wo(e)):Wg(Ke,a.stateNode));break;case 4:s=Ke,u=Vn,Ke=a.stateNode.containerInfo,Vn=!0,Ki(e,n,a),Ke=s,Vn=u;break;case 0:case 11:case 14:case 15:an||va(2,a,n),an||va(4,a,n),Ki(e,n,a);break;case 1:an||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Km(a,n,s)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:an=(s=an)||a.memoizedState!==null,Ki(e,n,a),an=s;break;default:Ki(e,n,a)}}function ag(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wo(e)}catch(a){ke(n,n.return,a)}}function dx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new tg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new tg),n;default:throw Error(r(435,e.tag))}}function hf(e,n){var a=dx(e);n.forEach(function(s){var u=Sx.bind(null,e,s);a.has(s)||(a.add(s),s.then(u,u))})}function Zn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Aa(T.type)){Ke=T.stateNode,Vn=!1;break t}break;case 5:Ke=T.stateNode,Vn=!1;break t;case 3:case 4:Ke=T.stateNode.containerInfo,Vn=!0;break t}T=T.return}if(Ke===null)throw Error(r(160));ig(f,S,u),Ke=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)rg(n,e),n=n.sibling}var gi=null;function rg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(n,e),Kn(e),s&4&&(va(3,e,e.return),co(3,e),va(5,e,e.return));break;case 1:Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),s&64&&Zi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=gi;if(Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ai]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,s,a),f[fn]=e,sn(f),s=f;break t;case"link":var S=$g("link","href",u).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=u.createElement(s),bn(f,s,a),u.head.appendChild(f);break;case"meta":if(S=$g("meta","content",u).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=u.createElement(s),bn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[fn]=e,sn(f),s=f}e.stateNode=s}else t_(u,e.type,e.stateNode);else e.stateNode=Jg(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?t_(u,e.type,e.stateNode):Jg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),a!==null&&s&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,e),Kn(e),s&512&&(an||a===null||wi(a,a.return)),e.flags&32){u=e.stateNode;try{Fn(u,"")}catch(lt){ke(e,e.return,lt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,uf(e,u,a!==null?a.memoizedProps:u)),s&1024&&(df=!0);break;case 6:if(Zn(n,e),Kn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(lt){ke(e,e.return,lt)}}break;case 3:if($l=null,u=gi,gi=Ql(n.containerInfo),Zn(n,e),gi=u,Kn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(lt){ke(e,e.return,lt)}df&&(df=!1,sg(e));break;case 4:s=gi,gi=Ql(e.stateNode.containerInfo),Zn(n,e),Kn(e),gi=s;break;case 12:Zn(n,e),Kn(e);break;case 13:Zn(n,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=Pt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,nt=Zi,gt=an;if(Zi=nt||u,an=gt||z,Zn(n,e),an=gt,Zi=nt,Kn(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Zi||an||ar(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=z.stateNode;var St=z.memoizedProps.style,st=St!=null&&St.hasOwnProperty("display")?St.display:null;T.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(lt){ke(z,z.return,lt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(lt){ke(z,z.return,lt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,hf(e,a))));break;case 19:Zn(n,e),Kn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hf(e,s)));break;case 30:break;case 21:break;default:Zn(n,e),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Jm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=cf(e);zl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Fn(S,""),a.flags&=-33);var T=cf(e);zl(e,T,S);break;case 3:case 4:var z=a.stateNode.containerInfo,nt=cf(e);ff(e,nt,z);break;default:throw Error(r(161))}}catch(gt){ke(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eg(e,n.alternate,n),n=n.sibling}function ar(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),ar(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Km(n,n.return,a),ar(n);break;case 27:So(n.stateNode);case 26:case 5:wi(n,n.return),ar(n);break;case 22:n.memoizedState===null&&ar(n);break;case 30:ar(n);break;default:ar(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ya(u,f,a),co(4,f);break;case 1:if(ya(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){ke(s,s.return,nt)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Pp(z[u],T)}catch(nt){ke(s,s.return,nt)}}a&&S&64&&Zm(f),fo(f,f.return);break;case 27:$m(f);case 26:case 5:ya(u,f,a),a&&s===null&&S&4&&Qm(f),fo(f,f.return);break;case 12:ya(u,f,a);break;case 13:ya(u,f,a),a&&S&4&&ag(u,f);break;case 22:f.memoizedState===null&&ya(u,f,a),fo(f,f.return);break;case 30:break;default:ya(u,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ks(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e))}function Di(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)og(e,n,a,s),n=n.sibling}function og(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,s),u&2048&&co(9,n);break;case 1:Di(e,n,a,s);break;case 3:Di(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e)));break;case 12:if(u&2048){Di(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){ke(n,n.return,z)}}else Di(e,n,a,s);break;case 13:Di(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Di(e,n,a,s):ho(e,n):f._visibility&2?Di(e,n,a,s):(f._visibility|=2,Wr(e,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&pf(S,n);break;case 24:Di(e,n,a,s),u&2048&&mf(n.alternate,n);break;default:Di(e,n,a,s)}}function Wr(e,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,z=s,nt=S.flags;switch(S.tag){case 0:case 11:case 15:Wr(f,S,T,z,u),co(8,S);break;case 23:break;case 22:var gt=S.stateNode;S.memoizedState!==null?gt._visibility&2?Wr(f,S,T,z,u):ho(f,S):(gt._visibility|=2,Wr(f,S,T,z,u)),u&&nt&2048&&pf(S.alternate,S);break;case 24:Wr(f,S,T,z,u),u&&nt&2048&&mf(S.alternate,S);break;default:Wr(f,S,T,z,u)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:ho(a,s),u&2048&&pf(s.alternate,s);break;case 24:ho(a,s),u&2048&&mf(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function qr(e){if(e.subtreeFlags&po)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 26:qr(e),e.flags&po&&e.memoizedState!==null&&Qx(gi,e.memoizedState,e.memoizedProps);break;case 5:qr(e);break;case 3:case 4:var n=gi;gi=Ql(e.stateNode.containerInfo),qr(e),gi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,qr(e),po=n):qr(e));break;default:qr(e)}}function ug(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,fg(s,e)}ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&va(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):mo(e);break;default:mo(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,fg(s,e)}ug(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function fg(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ks(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,vn=s;else t:for(a=e;vn!==null;){s=vn;var u=s.sibling,f=s.return;if(ng(s),s===a){vn=null;break t}if(u!==null){u.return=f,vn=u;break t}vn=f}}}var hx={getCacheForType:function(e){var n=Rn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},px=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Xe=null,Me=null,Ae=0,Pe=0,Qn=null,Sa=!1,Yr=!1,gf=!1,Qi=0,en=0,Ma=0,rr=0,_f=0,li=0,jr=0,go=null,kn=null,vf=!1,xf=0,Hl=1/0,Gl=null,Ea=null,En=0,ba=null,Zr=null,Kr=0,yf=0,Sf=null,dg=null,_o=0,Mf=null;function Jn(){if((Oe&2)!==0&&Ae!==0)return Ae&-Ae;if(H.T!==null){var e=Ir;return e!==0?e:wf()}return Re()}function hg(){li===0&&(li=(Ae&536870912)===0||Ue?q():536870912);var e=oi.current;return e!==null&&(e.flags|=32),li}function $n(e,n,a){(e===Xe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),Ta(e,Ae,li,!1)),Xt(e,a),((Oe&2)===0||e!==Xe)&&(e===Xe&&((Oe&2)===0&&(rr|=a),en===4&&Ta(e,Ae,li,!1)),Ui(e))}function pg(e,n,a){if((Oe&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ot(e,n),u=s?_x(e,n):Tf(e,n,!0),f=s;do{if(u===0){Yr&&!s&&Ta(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!mx(a)){u=Tf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;u=go;var z=T.current.memoizedState.isDehydrated;if(z&&(Qr(T,S).flags|=256),S=Tf(T,S,!1),S!==2){if(gf&&!z){T.errorRecoveryDisabledLanes|=f,rr|=f,u=4;break t}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Qr(e,0),Ta(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,li,!Sa);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=xf+300-Pt(),10<u)){if(Ta(s,n,li,!Sa),Kt(s,0,!0)!==0)break t;s.timeoutHandle=kg(mg.bind(null,s,a,kn,Gl,vf,n,li,rr,jr,Sa,f,2,-0,0),u);break t}mg(s,a,kn,Gl,vf,n,li,rr,jr,Sa,f,0,-0,0)}}break}while(!0);Ui(e)}function mg(e,n,a,s,u,f,S,T,z,nt,gt,St,st,lt){if(e.timeoutHandle=-1,St=n.subtreeFlags,(St&8192||(St&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:Kx},lg(n),St=Jx(),St!==null)){e.cancelPendingCommit=St(Mg.bind(null,e,n,f,a,s,u,S,T,z,gt,1,st,lt)),Ta(e,f,S,!nt);return}Mg(e,n,f,a,s,u,S,T,z)}function mx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Yn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(e,n,a,s){n&=~_f,n&=~rr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Vt(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&Mt(e,a,n)}function Vl(){return(Oe&6)===0?(vo(0),!1):!0}function Ef(){if(Me!==null){if(Pe===0)var e=Me.return;else e=Me,ki=$a=null,Fc(e),kr=null,oo=0,e=Me;for(;e!==null;)jm(e.alternate,e),e=e.return;Me=null}}function Qr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Nx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ef(),Xe=e,Me=a=Hi(e.current,null),Ae=n,Pe=0,Qn=null,Sa=!1,Yr=Ot(e,n),gf=!1,jr=li=_f=rr=Ma=en=0,kn=go=null,vf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Vt(s),f=1<<u;n|=e[u],s&=~f}return Qi=n,cl(),a}function gg(e,n){ve=null,H.H=wl,n===Js||n===xl?(n=Np(),Pe=3):n===Dp?(n=Np(),Pe=4):Pe=n===Om?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,Me===null&&(en=1,Ol(e,ii(n,e.current)))}function _g(){var e=H.H;return H.H=wl,e===null?wl:e}function vg(){var e=H.A;return H.A=hx,e}function bf(){en=4,Sa||(Ae&4194048)!==Ae&&oi.current!==null||(Yr=!0),(Ma&134217727)===0&&(rr&134217727)===0||Xe===null||Ta(Xe,Ae,li,!1)}function Tf(e,n,a){var s=Oe;Oe|=2;var u=_g(),f=vg();(Xe!==e||Ae!==n)&&(Gl=null,Qr(e,n)),n=!1;var S=en;t:do try{if(Pe!==0&&Me!==null){var T=Me,z=Qn;switch(Pe){case 8:Ef(),S=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var nt=Pe;if(Pe=0,Qn=null,Jr(e,T,z,nt),a&&Yr){S=0;break t}break;default:nt=Pe,Pe=0,Qn=null,Jr(e,T,z,nt)}}gx(),S=en;break}catch(gt){gg(e,gt)}while(!0);return n&&e.shellSuspendCounter++,ki=$a=null,Oe=s,H.H=u,H.A=f,Me===null&&(Xe=null,Ae=0,cl()),S}function gx(){for(;Me!==null;)xg(Me)}function _x(e,n){var a=Oe;Oe|=2;var s=_g(),u=vg();Xe!==e||Ae!==n?(Gl=null,Hl=Pt()+500,Qr(e,n)):Yr=Ot(e,n);t:do try{if(Pe!==0&&Me!==null){n=Me;var f=Qn;e:switch(Pe){case 1:Pe=0,Qn=null,Jr(e,n,f,1);break;case 2:case 9:if(Up(f)){Pe=0,Qn=null,yg(n);break}n=function(){Pe!==2&&Pe!==9||Xe!==e||(Pe=7),Ui(e)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Up(f)?(Pe=0,Qn=null,yg(n)):(Pe=0,Qn=null,Jr(e,n,f,7));break;case 5:var S=null;switch(Me.tag){case 26:S=Me.memoizedState;case 5:case 27:var T=Me;if(!S||e_(S)){Pe=0,Qn=null;var z=T.sibling;if(z!==null)Me=z;else{var nt=T.return;nt!==null?(Me=nt,kl(nt)):Me=null}break e}}Pe=0,Qn=null,Jr(e,n,f,5);break;case 6:Pe=0,Qn=null,Jr(e,n,f,6);break;case 8:Ef(),en=6;break t;default:throw Error(r(462))}}vx();break}catch(gt){gg(e,gt)}while(!0);return ki=$a=null,H.H=s,H.A=u,Oe=a,Me!==null?0:(Xe=null,Ae=0,cl(),en)}function vx(){for(;Me!==null&&!Wt();)xg(Me)}function xg(e){var n=qm(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?kl(e):Me=n}function yg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hm(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=Hm(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Fc(n);default:jm(a,n),n=Me=Sp(n,Qi),n=qm(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?kl(e):Me=n}function Jr(e,n,a,s){ki=$a=null,Fc(n),kr=null,oo=0;var u=n.return;try{if(ox(e,u,n,a,Ae)){en=1,Ol(e,ii(a,e.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;en=1,Ol(e,ii(a,e.current)),Me=null;return}n.flags&32768?(Ue||s===1?e=!0:Yr||(Ae&536870912)!==0?e=!1:(Sa=e=!0,(s===2||s===9||s===3||s===6)&&(s=oi.current,s!==null&&s.tag===13&&(s.flags|=16384))),Sg(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){Sg(n,Sa);return}e=n.return;var a=ux(n.alternate,n,Qi);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);en===0&&(en=5)}function Sg(e,n){do{var a=cx(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);en=6,Me=null}function Mg(e,n,a,s,u,f,S,T,z){e.cancelPendingCommit=null;do Xl();while(En!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pc,Ct(e,a,f,S,T,z),e===Xe&&(Me=Xe=null,Ae=0),Zr=n,ba=e,Kr=a,yf=f,Sf=u,dg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mx(We,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=H.T,H.T=null,u=J.p,J.p=2,S=Oe,Oe|=4;try{fx(e,n,a)}finally{Oe=S,J.p=u,H.T=s}}En=1,Eg(),bg(),Tg()}}function Eg(){if(En===1){En=0;var e=ba,n=Zr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var s=J.p;J.p=2;var u=Oe;Oe|=4;try{rg(n,e);var f=If,S=fp(e.containerInfo),T=f.focusedElem,z=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&cp(T.ownerDocument.documentElement,T)){if(z!==null&&uc(T)){var nt=z.start,gt=z.end;if(gt===void 0&&(gt=nt),"selectionStart"in T)T.selectionStart=nt,T.selectionEnd=Math.min(gt,T.value.length);else{var St=T.ownerDocument||document,st=St&&St.defaultView||window;if(st.getSelection){var lt=st.getSelection(),oe=T.textContent.length,ae=Math.min(z.start,oe),Fe=z.end===void 0?ae:Math.min(z.end,oe);!lt.extend&&ae>Fe&&(S=Fe,Fe=ae,ae=S);var Z=up(T,ae),k=up(T,Fe);if(Z&&k&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var tt=St.createRange();tt.setStart(Z.node,Z.offset),lt.removeAllRanges(),ae>Fe?(lt.addRange(tt),lt.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),lt.addRange(tt))}}}}for(St=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&St.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<St.length;T++){var _t=St[T];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}nu=!!Bf,If=Bf=null}finally{Oe=u,J.p=s,H.T=a}}e.current=n,En=2}}function bg(){if(En===2){En=0;var e=ba,n=Zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var s=J.p;J.p=2;var u=Oe;Oe|=4;try{eg(e,n.alternate,n)}finally{Oe=u,J.p=s,H.T=a}}En=3}}function Tg(){if(En===4||En===3){En=0,Gt();var e=ba,n=Zr,a=Kr,s=dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Zr=ba=null,Ag(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ea=null),Ne(a),n=n.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(mt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=H.T,u=J.p,J.p=2,H.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{H.T=n,J.p=u}}(Kr&3)!==0&&Xl(),Ui(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Mf?_o++:(_o=0,Mf=e):_o=0,vo(0)}}function Ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ks(n)))}function Xl(e){return Eg(),bg(),Tg(),Rg()}function Rg(){if(En!==5)return!1;var e=ba,n=yf;yf=0;var a=Ne(Kr),s=H.T,u=J.p;try{J.p=32>a?32:a,H.T=null,a=Sf,Sf=null;var f=ba,S=Kr;if(En=0,Zr=ba=null,Kr=0,(Oe&6)!==0)throw Error(r(331));var T=Oe;if(Oe|=4,cg(f.current),og(f,f.current,S,a),Oe=T,vo(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(mt,f)}catch{}return!0}finally{J.p=u,H.T=s,Ag(e,n)}}function Cg(e,n,a){n=ii(a,n),n=$c(e.stateNode,n,2),e=pa(e,n,2),e!==null&&(Xt(e,2),Ui(e))}function ke(e,n,a){if(e.tag===3)Cg(e,e,a);else for(;n!==null;){if(n.tag===3){Cg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){e=ii(a,e),a=Lm(2),s=pa(n,a,2),s!==null&&(Nm(a,s,n,e),Xt(s,2),Ui(s));break}}n=n.return}}function Af(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new px;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(gf=!0,u.add(a),e=xx.bind(null,e,n,a),n.then(e,e))}function xx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Ae&a)===a&&(en===4||en===3&&(Ae&62914560)===Ae&&300>Pt()-xf?(Oe&2)===0&&Qr(e,0):_f|=a,jr===Ae&&(jr=0)),Ui(e)}function wg(e,n){n===0&&(n=Dt()),e=Nr(e,n),e!==null&&(Xt(e,n),Ui(e))}function yx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wg(e,a)}function Sx(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),wg(e,a)}function Mx(e,n){return P(e,n)}var Wl=null,$r=null,Rf=!1,ql=!1,Cf=!1,sr=0;function Ui(e){e!==$r&&e.next===null&&($r===null?Wl=$r=e:$r=$r.next=e),ql=!0,Rf||(Rf=!0,bx())}function vo(e,n){if(!Cf&&ql){Cf=!0;do for(var a=!1,s=Wl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Vt(42|e)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ng(s,f))}else f=Ae,f=Kt(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ot(s,f)||(a=!0,Ng(s,f));s=s.next}while(a);Cf=!1}}function Ex(){Dg()}function Dg(){ql=Rf=!1;var e=0;sr!==0&&(Lx()&&(e=sr),sr=0);for(var n=Pt(),a=null,s=Wl;s!==null;){var u=s.next,f=Ug(s,n);f===0?(s.next=null,a===null?Wl=u:a.next=u,u===null&&($r=a)):(a=s,(e!==0||(f&3)!==0)&&(ql=!0)),s=u}vo(e)}function Ug(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Vt(f),T=1<<S,z=u[S];z===-1?((T&a)===0||(T&s)!==0)&&(u[S]=fe(T,n)):z<=n&&(e.expiredLanes|=T),f&=~T}if(n=Xe,a=Ae,a=Kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&ce(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ot(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&ce(s),Ne(a)){case 2:case 8:a=ue;break;case 32:a=We;break;case 268435456:a=N;break;default:a=We}return s=Lg.bind(null,e),a=P(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&ce(s),e.callbackPriority=2,e.callbackNode=null,2}function Lg(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var s=Ae;return s=Kt(e,e===Xe?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(pg(e,s,n),Ug(e,Pt()),e.callbackNode!=null&&e.callbackNode===a?Lg.bind(null,e):null)}function Ng(e,n){if(Xl())return null;pg(e,n,!0)}function bx(){Ox(function(){(Oe&6)!==0?P(Yt,Ex):Dg()})}function wf(){return sr===0&&(sr=q()),sr}function Og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function Pg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Tx(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Og((u[Je]||null).action),S=s.submitter;S&&(n=(n=S[Je]||null)?Og(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new ol("action","action",null,s,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(sr!==0){var z=S?Pg(u,S):new FormData(u);jc(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(T.preventDefault(),z=S?Pg(u,S):new FormData(u),jc(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Df=0;Df<hc.length;Df++){var Uf=hc[Df],Ax=Uf.toLowerCase(),Rx=Uf[0].toUpperCase()+Uf.slice(1);mi(Ax,"on"+Rx)}mi(pp,"onAnimationEnd"),mi(mp,"onAnimationIteration"),mi(gp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Xv,"onTransitionRun"),mi(Wv,"onTransitionStart"),mi(qv,"onTransitionCancel"),mi(_p,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Bg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],z=T.instance,nt=T.currentTarget;if(T=T.listener,z!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=nt;try{f(u)}catch(gt){Nl(gt)}u.currentTarget=null,f=z}else for(S=0;S<s.length;S++){if(T=s[S],z=T.instance,nt=T.currentTarget,T=T.listener,z!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=nt;try{f(u)}catch(gt){Nl(gt)}u.currentTarget=null,f=z}}}}function Ee(e,n){var a=n[Er];a===void 0&&(a=n[Er]=new Set);var s=e+"__bubble";a.has(s)||(Ig(n,e,2,!1),a.add(s))}function Lf(e,n,a){var s=0;n&&(s|=4),Ig(a,e,s,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Yl]){e[Yl]=!0,el.forEach(function(a){a!=="selectionchange"&&(Cx.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Lf("selectionchange",!1,n))}}function Ig(e,n,a,s){switch(o_(n)){case 2:var u=ey;break;case 8:u=ny;break;default:u=Yf}a=u.bind(null,n,a,e),u=void 0,!tc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Of(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=s.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=zi(T),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){s=f=S;continue t}T=T.parentNode}}s=s.return}Xh(function(){var nt=f,gt=Ju(a),St=[];t:{var st=vp.get(e);if(st!==void 0){var lt=ol,oe=e;switch(e){case"keypress":if(rl(a)===0)break t;case"keydown":case"keyup":lt=Mv;break;case"focusin":oe="focus",lt=ac;break;case"focusout":oe="blur",lt=ac;break;case"beforeblur":case"afterblur":lt=ac;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Tv;break;case pp:case mp:case gp:lt=hv;break;case _p:lt=Rv;break;case"scroll":case"scrollend":lt=lv;break;case"wheel":lt=wv;break;case"copy":case"cut":case"paste":lt=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Zh;break;case"toggle":case"beforetoggle":lt=Uv}var ae=(n&4)!==0,Fe=!ae&&(e==="scroll"||e==="scrollend"),Z=ae?st!==null?st+"Capture":null:st;ae=[];for(var k=nt,tt;k!==null;){var _t=k;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||Z===null||(_t=Is(k,Z),_t!=null&&ae.push(yo(k,_t,tt))),Fe)break;k=k.return}0<ae.length&&(st=new lt(st,oe,null,a,gt),St.push({event:st,listeners:ae}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",st&&a!==Qu&&(oe=a.relatedTarget||a.fromElement)&&(zi(oe)||oe[Ti]))break t;if((lt||st)&&(st=gt.window===gt?gt:(st=gt.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(oe=a.relatedTarget||a.toElement,lt=nt,oe=oe?zi(oe):null,oe!==null&&(Fe=c(oe),ae=oe.tag,oe!==Fe||ae!==5&&ae!==27&&ae!==6)&&(oe=null)):(lt=null,oe=nt),lt!==oe)){if(ae=Yh,_t="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Zh,_t="onPointerLeave",Z="onPointerEnter",k="pointer"),Fe=lt==null?st:Xa(lt),tt=oe==null?st:Xa(oe),st=new ae(_t,k+"leave",lt,a,gt),st.target=Fe,st.relatedTarget=tt,_t=null,zi(gt)===nt&&(ae=new ae(Z,k+"enter",oe,a,gt),ae.target=tt,ae.relatedTarget=Fe,_t=ae),Fe=_t,lt&&oe)e:{for(ae=lt,Z=oe,k=0,tt=ae;tt;tt=ts(tt))k++;for(tt=0,_t=Z;_t;_t=ts(_t))tt++;for(;0<k-tt;)ae=ts(ae),k--;for(;0<tt-k;)Z=ts(Z),tt--;for(;k--;){if(ae===Z||Z!==null&&ae===Z.alternate)break e;ae=ts(ae),Z=ts(Z)}ae=null}else ae=null;lt!==null&&zg(St,st,lt,ae,!1),oe!==null&&Fe!==null&&zg(St,Fe,oe,ae,!0)}}t:{if(st=nt?Xa(nt):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var jt=ip;else if(ep(st))if(ap)jt=Gv;else{jt=Fv;var xe=zv}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&Ku(nt.elementType)&&(jt=ip):jt=Hv;if(jt&&(jt=jt(e,nt))){np(St,jt,a,gt);break t}xe&&xe(e,st,nt),e==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&An(st,"number",st.value)}switch(xe=nt?Xa(nt):window,e){case"focusin":(ep(xe)||xe.contentEditable==="true")&&(Dr=xe,cc=nt,Ws=null);break;case"focusout":Ws=cc=Dr=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,dp(St,a,gt);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":dp(St,a,gt)}var te;if(sc)t:{switch(e){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else wr?$h(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(Kh&&a.locale!=="ko"&&(wr||se!=="onCompositionStart"?se==="onCompositionEnd"&&wr&&(te=Wh()):(ca=gt,ec="value"in ca?ca.value:ca.textContent,wr=!0)),xe=jl(nt,se),0<xe.length&&(se=new jh(se,e,null,a,gt),St.push({event:se,listeners:xe}),te?se.data=te:(te=tp(a),te!==null&&(se.data=te)))),(te=Nv?Ov(e,a):Pv(e,a))&&(se=jl(nt,"onBeforeInput"),0<se.length&&(xe=new jh("onBeforeInput","beforeinput",null,a,gt),St.push({event:xe,listeners:se}),xe.data=te)),Tx(St,e,nt,a,gt)}Bg(St,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Is(e,a),u!=null&&s.unshift(yo(e,u,f)),u=Is(e,n),u!=null&&s.push(yo(e,u,f))),e.tag===3)return s;e=e.return}return[]}function ts(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zg(e,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,z=T.alternate,nt=T.stateNode;if(T=T.tag,z!==null&&z===s)break;T!==5&&T!==26&&T!==27||nt===null||(z=nt,u?(nt=Is(a,f),nt!=null&&S.unshift(yo(a,nt,z))):u||(nt=Is(a,f),nt!=null&&S.push(yo(a,nt,z)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var wx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function Fg(e){return(typeof e=="string"?e:""+e).replace(wx,`
`).replace(Dx,"")}function Hg(e,n){return n=Fg(n),Fg(e)===n}function Zl(){}function ze(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Fn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Fn(e,""+s);break;case"className":qt(e,"class",s);break;case"tabIndex":qt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(e,a,s);break;case"style":Vh(e,s,f);break;case"data":if(n!=="object"){qt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=il(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",u.name,u,null),ze(e,n,"formEncType",u.formEncType,u,null),ze(e,n,"formMethod",u.formMethod,u,null),ze(e,n,"formTarget",u.formTarget,u,null)):(ze(e,n,"encType",u.encType,u,null),ze(e,n,"method",u.method,u,null),ze(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=il(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Zl);break;case"onScroll":s!=null&&Ee("scroll",e);break;case"onScrollEnd":s!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=il(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Bt(e,"popover",s);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Bt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sv.get(a)||a,Bt(e,a,s))}}function Pf(e,n,a,s,u,f){switch(a){case"style":Vh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Fn(e,s):(typeof s=="number"||typeof s=="bigint")&&Fn(e,""+s);break;case"onScroll":s!=null&&Ee("scroll",e);break;case"onScrollEnd":s!=null&&Ee("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Je]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Bt(e,a,s)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,f,S,a,null)}}u&&ze(e,n,"srcSet",a.srcSet,a,null),s&&ze(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var T=f=S=u=null,z=null,nt=null;for(s in a)if(a.hasOwnProperty(s)){var gt=a[s];if(gt!=null)switch(s){case"name":u=gt;break;case"type":S=gt;break;case"checked":z=gt;break;case"defaultChecked":nt=gt;break;case"value":f=gt;break;case"defaultValue":T=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:ze(e,n,s,gt,a,null)}}On(e,f,T,z,nt,S,u,!1),Se(e);return;case"select":Ee("invalid",e),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:ze(e,n,u,T,a,null)}n=f,a=S,e.multiple=!!s,n!=null?$e(e,!!s,n,!1):a!=null&&$e(e,!!s,a,!0);return;case"textarea":Ee("invalid",e),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:ze(e,n,S,T,a,null)}Ar(e,s,u,f),Se(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ze(e,n,z,s,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(s=0;s<xo.length;s++)Ee(xo[s],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(s=a[nt],s!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,nt,s,a,null)}return;default:if(Ku(n)){for(gt in a)a.hasOwnProperty(gt)&&(s=a[gt],s!==void 0&&Pf(e,n,gt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&ze(e,n,T,s,a,null))}function Ux(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,z=null,nt=null,gt=null;for(lt in a){var St=a[lt];if(a.hasOwnProperty(lt)&&St!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":z=St;default:s.hasOwnProperty(lt)||ze(e,n,lt,null,s,St)}}for(var st in s){var lt=s[st];if(St=a[st],s.hasOwnProperty(st)&&(lt!=null||St!=null))switch(st){case"type":f=lt;break;case"name":u=lt;break;case"checked":nt=lt;break;case"defaultChecked":gt=lt;break;case"value":S=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==St&&ze(e,n,st,lt,s,St)}}Ve(e,S,T,z,nt,gt,f,u);return;case"select":lt=S=T=st=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":lt=z;default:s.hasOwnProperty(f)||ze(e,n,f,null,s,z)}for(u in s)if(f=s[u],z=a[u],s.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":st=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==z&&ze(e,n,u,f,s,z)}n=T,a=S,s=lt,st!=null?$e(e,!!a,st,!1):!!s!=!!a&&(n!=null?$e(e,!!a,n,!0):$e(e,!!a,a?[]:"",!1));return;case"textarea":lt=st=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ze(e,n,T,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":st=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&ze(e,n,S,u,s,f)}Sn(e,st,lt);return;case"option":for(var oe in a)if(st=a[oe],a.hasOwnProperty(oe)&&st!=null&&!s.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:ze(e,n,oe,null,s,st)}for(z in s)if(st=s[z],lt=a[z],s.hasOwnProperty(z)&&st!==lt&&(st!=null||lt!=null))switch(z){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:ze(e,n,z,st,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)st=a[ae],a.hasOwnProperty(ae)&&st!=null&&!s.hasOwnProperty(ae)&&ze(e,n,ae,null,s,st);for(nt in s)if(st=s[nt],lt=a[nt],s.hasOwnProperty(nt)&&st!==lt&&(st!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:ze(e,n,nt,st,s,lt)}return;default:if(Ku(n)){for(var Fe in a)st=a[Fe],a.hasOwnProperty(Fe)&&st!==void 0&&!s.hasOwnProperty(Fe)&&Pf(e,n,Fe,void 0,s,st);for(gt in s)st=s[gt],lt=a[gt],!s.hasOwnProperty(gt)||st===lt||st===void 0&&lt===void 0||Pf(e,n,gt,st,s,lt);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!s.hasOwnProperty(Z)&&ze(e,n,Z,null,s,st);for(St in s)st=s[St],lt=a[St],!s.hasOwnProperty(St)||st===lt||st==null&&lt==null||ze(e,n,St,st,s,lt)}var Bf=null,If=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Lx(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var kg=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(e){return Xg.resolve(null).then(e).catch(Px)}:kg;function Px(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Wg(e,n){var a=n,s=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=e.ownerDocument;if(a&1&&So(S.documentElement),a&2&&So(S.body),a&4)for(a=S.head,So(a),S=a.firstChild;S;){var T=S.nextSibling,z=S.nodeName;S[Ai]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(u===0){e.removeChild(f),wo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);wo(n)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),Tr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Bx(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ai])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function Ix(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function zx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Vf=null;function qg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Yg(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Tr(e)}var ui=new Map,jg=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=J.d;J.d={f:Fx,r:Hx,D:Gx,C:Vx,L:kx,m:Xx,X:qx,S:Wx,M:Yx};function Fx(){var e=Ji.f(),n=Vl();return e||n}function Hx(e){var n=la(e);n!==null&&n.tag===5&&n.type==="form"?pm(n):Ji.r(e)}var es=typeof document>"u"?null:document;function Zg(e,n,a){var s=es;if(s&&typeof n=="string"&&n){var u=gn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),jg.has(u)||(jg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),bn(n,"link",e),sn(n),s.head.appendChild(n)))}}function Gx(e){Ji.D(e),Zg("dns-prefetch",e,null)}function Vx(e,n){Ji.C(e,n),Zg("preconnect",e,n)}function kx(e,n,a){Ji.L(e,n,a);var s=es;if(s&&e&&n){var u='link[rel="preload"][as="'+gn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+gn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+gn(a.imageSizes)+'"]')):u+='[href="'+gn(e)+'"]';var f=u;switch(n){case"style":f=ns(e);break;case"script":f=is(e)}ui.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(Mo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),bn(n,"link",e),sn(n),s.head.appendChild(n)))}}function Xx(e,n){Ji.m(e,n);var a=es;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+gn(s)+'"][href="'+gn(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(e)}if(!ui.has(f)&&(e=v({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),bn(s,"link",e),sn(s),a.head.appendChild(s)}}}function Wx(e,n,a){Ji.S(e,n,a);var s=es;if(s&&e){var u=ua(s).hoistableStyles,f=ns(e);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(Mo(f)))T.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&kf(e,a);var z=S=s.createElement("link");sn(z),bn(z,"link",e),z._p=new Promise(function(nt,gt){z.onload=nt,z.onerror=gt}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Jl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function qx(e,n){Ji.X(e,n);var a=es;if(a&&e){var s=ua(a).hoistableScripts,u=is(e),f=s.get(u);f||(f=a.querySelector(Eo(u)),f||(e=v({src:e,async:!0},n),(n=ui.get(u))&&Xf(e,n),f=a.createElement("script"),sn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Yx(e,n){Ji.M(e,n);var a=es;if(a&&e){var s=ua(a).hoistableScripts,u=is(e),f=s.get(u);f||(f=a.querySelector(Eo(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=ui.get(u))&&Xf(e,n),f=a.createElement("script"),sn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Kg(e,n,a,s){var u=(u=I.current)?Ql(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=ua(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ns(a.href);var f=ua(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Mo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||jx(u,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=ua(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ns(e){return'href="'+gn(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function Qg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function jx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),sn(n),e.head.appendChild(n))}function is(e){return'[src="'+gn(e)+'"]'}function Eo(e){return"script[async]"+e}function Jg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+gn(a.href)+'"]');if(s)return n.instance=s,sn(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),sn(s),bn(s,"style",u),Jl(s,a.precedence,e),n.instance=s;case"stylesheet":u=ns(a.href);var f=e.querySelector(Mo(u));if(f)return n.state.loading|=4,n.instance=f,sn(f),f;s=Qg(a),(u=ui.get(u))&&kf(s,u),f=(e.ownerDocument||e).createElement("link"),sn(f);var S=f;return S._p=new Promise(function(T,z){S.onload=T,S.onerror=z}),bn(f,"link",s),n.state.loading|=4,Jl(f,a.precedence,e),n.instance=f;case"script":return f=is(a.src),(u=e.querySelector(Eo(f)))?(n.instance=u,sn(u),u):(s=a,(u=ui.get(f))&&(s=v({},a),Xf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),sn(u),bn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Jl(s,a.precedence,e));return n.instance}function Jl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function $g(e,n,a){if($l===null){var s=new Map,u=$l=new Map;u.set(a,s)}else u=$l,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ai]||f[fn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function t_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Zx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bo=null;function Kx(){}function Qx(e,n,a){if(bo===null)throw Error(r(475));var s=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ns(a.href),f=e.querySelector(Mo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=tu.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,sn(f);return}f=e.ownerDocument||e,a=Qg(a),(u=ui.get(u))&&kf(a,u),f=f.createElement("link"),sn(f);var S=f;S._p=new Promise(function(T,z){S.onload=T,S.onerror=z}),bn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=tu.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Jx(){if(bo===null)throw Error(r(475));var e=bo;return e.stylesheets&&e.count===0&&Wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function tu(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var eu=null;function Wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,eu=new Map,n.forEach($x,e),eu=null,tu.call(e))}function $x(e,n){if(!(n.state.loading&4)){var a=eu.get(e);if(a)var s=a.get(null);else{a=new Map,eu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=tu.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var To={$$typeof:C,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function ty(e,n,a,s,u,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lt(0),this.hiddenUpdates=Lt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function n_(e,n,a,s,u,f,S,T,z,nt,gt,St){return e=new ty(e,n,a,S,T,z,nt,St),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=Tc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},wc(f),e}function i_(e){return e?(e=Or,e):Or}function a_(e,n,a,s,u,f){u=i_(u),s.context===null?s.context=u:s.pendingContext=u,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(e,s,n),a!==null&&($n(a,e,n),to(a,e,n))}function r_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){r_(e,n),(e=e.alternate)&&r_(e,n)}function s_(e){if(e.tag===13){var n=Nr(e,67108864);n!==null&&$n(n,e,67108864),qf(e,67108864)}}var nu=!0;function ey(e,n,a,s){var u=H.T;H.T=null;var f=J.p;try{J.p=2,Yf(e,n,a,s)}finally{J.p=f,H.T=u}}function ny(e,n,a,s){var u=H.T;H.T=null;var f=J.p;try{J.p=8,Yf(e,n,a,s)}finally{J.p=f,H.T=u}}function Yf(e,n,a,s){if(nu){var u=jf(s);if(u===null)Of(e,n,s,iu,a),l_(e,s);else if(ay(u,e,n,a,s))s.stopPropagation();else if(l_(e,s),n&4&&-1<iy.indexOf(e)){for(;u!==null;){var f=la(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=ee(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var z=1<<31-Vt(S);T.entanglements[1]|=z,S&=~z}Ui(f),(Oe&6)===0&&(Hl=Pt()+500,vo(0))}}break;case 13:T=Nr(f,2),T!==null&&$n(T,f,2),Vl(),qf(f,2)}if(f=jf(s),f===null&&Of(e,n,s,iu,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Of(e,n,s,null,a)}}function jf(e){return e=Ju(e),Zf(e)}var iu=null;function Zf(e){if(iu=null,e=zi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return iu=e,null}function o_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Le()){case Yt:return 2;case ue:return 8;case We:case qe:return 32;case N:return 268435456;default:return 32}default:return 32}}var Kf=!1,Ra=null,Ca=null,wa=null,Ao=new Map,Ro=new Map,Da=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=la(n),n!==null&&s_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function ay(e,n,a,s,u){switch(n){case"focusin":return Ra=Co(Ra,e,n,a,s,u),!0;case"dragenter":return Ca=Co(Ca,e,n,a,s,u),!0;case"mouseover":return wa=Co(wa,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,s,u)),!0}return!1}function u_(e){var n=zi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,hi(e.priority,function(){if(a.tag===13){var s=Jn();s=le(s);var u=Nr(a,s);u!==null&&$n(u,a,s),qf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function au(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Qu=s,a.target.dispatchEvent(s),Qu=null}else return n=la(a),n!==null&&s_(n),e.blockedOn=a,!1;n.shift()}return!0}function c_(e,n,a){au(e)&&a.delete(n)}function ry(){Kf=!1,Ra!==null&&au(Ra)&&(Ra=null),Ca!==null&&au(Ca)&&(Ca=null),wa!==null&&au(wa)&&(wa=null),Ao.forEach(c_),Ro.forEach(c_)}function ru(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ry)))}var su=null;function f_(e){su!==e&&(su=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){su===e&&(su=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(Zf(s||a)===null)continue;break}var f=la(a);f!==null&&(e.splice(n,3),n-=3,jc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function wo(e){function n(z){return ru(z,e)}Ra!==null&&ru(Ra,e),Ca!==null&&ru(Ca,e),wa!==null&&ru(wa,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)u_(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[Je]||null;if(typeof f=="function")S||f_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Je]||null)T=S.formAction;else if(Zf(u)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),f_(a)}}}function Qf(e){this._internalRoot=e}ou.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();a_(a,s,e,n,null,null)},ou.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;a_(e.current,2,null,e,null,null),Vl(),n[Ti]=null}};function ou(e){this._internalRoot=e}ou.prototype.unstable_scheduleHydration=function(e){if(e){var n=Re();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&u_(e)}};var d_=t.version;if(d_!=="19.1.1")throw Error(r(527,d_,"19.1.1"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var sy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{mt=lu.inject(sy),yt=lu}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=Cm,f=wm,S=Dm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=n_(e,1,!1,null,null,a,s,u,f,S,T,null),e[Ti]=n.current,Nf(e),new Qf(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=Cm,S=wm,T=Dm,z=null,nt=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(nt=a.formState)),n=n_(e,1,!0,n,a??null,s,u,f,S,T,z,nt),n.context=i_(null),a=n.current,s=Jn(),s=le(s),u=ha(s),u.callback=null,pa(a,u,s),a=s,n.current.lanes=a,Xt(n,a),Ui(n),e[Ti]=n.current,Nf(e),new ou(n)},Uo.version="19.1.1",Uo}var M_;function gy(){if(M_)return td.exports;M_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),td.exports=my(),td.exports}var _y=gy();const vy="modulepreload",xy=function(o){return"/"+o},E_={},yy=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let p=function(v){return Promise.all(v.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};var d=p;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=h?.nonce||h?.getAttribute("nonce");l=p(i.map(v=>{if(v=xy(v),v in E_)return;E_[v]=!0;const g=v.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${y}`))return;const x=document.createElement("link");if(x.rel=g?"stylesheet":vy,g||(x.as="script"),x.crossOrigin="",x.href=v,m&&x.setAttribute("nonce",m),document.head.appendChild(x),g)return new Promise((E,A)=>{x.addEventListener("load",E),x.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${v}`)))})}))}function c(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return l.then(h=>{for(const m of h||[])m.status==="rejected"&&c(m.reason);return t().catch(c)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="180",Sy=0,b_=1,My=2,C0=1,Ey=2,aa=3,Va=0,Xn=1,Oi=2,Fa=0,Ts=1,T_=2,A_=3,R_=4,by=5,mr=100,Ty=101,Ay=102,Ry=103,Cy=104,wy=200,Dy=201,Uy=202,Ly=203,Id=204,zd=205,Ny=206,Oy=207,Py=208,By=209,Iy=210,zy=211,Fy=212,Hy=213,Gy=214,Fd=0,Hd=1,Gd=2,Rs=3,Vd=4,kd=5,Xd=6,Wd=7,w0=0,Vy=1,ky=2,Ha=0,Xy=1,Wy=2,qy=3,Yy=4,jy=5,Zy=6,Ky=7,D0=300,Cs=301,ws=302,qd=303,Yd=304,ju=306,jd=1e3,vr=1001,Zd=1002,ni=1003,Qy=1004,uu=1005,Mi=1006,ad=1007,xr=1008,sa=1009,U0=1010,L0=1011,Xo=1012,Dh=1013,yr=1014,Bi=1015,Ko=1016,Uh=1017,Lh=1018,Wo=1020,N0=35902,O0=35899,P0=1021,B0=1022,Ei=1023,qo=1026,Yo=1027,Nh=1028,Oh=1029,I0=1030,Ph=1031,Bh=1033,Bu=33776,Iu=33777,zu=33778,Fu=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,th=36196,eh=37492,nh=37496,ih=37808,ah=37809,rh=37810,sh=37811,oh=37812,lh=37813,uh=37814,ch=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,yh=36283,Sh=36284,Mh=36285,Eh=36286,Jy=3200,$y=3201,tS=0,eS=1,za="",fi="srgb",Ds="srgb-linear",Gu="linear",He="srgb",as=7680,C_=519,nS=512,iS=513,aS=514,z0=515,rS=516,sS=517,oS=518,lS=519,bh=35044,w_="300 es",Ii=2e3,Vu=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Th=180/Math.PI;function Ga(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Te(o,t,i){return Math.max(t,Math.min(i,o))}function uS(o,t){return(o%t+t)%t}function sd(o,t,i){return(1-i)*o+i*t}function Pi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ge(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class be{constructor(t=0,i=0){be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3];const y=c[d+0],x=c[d+1],E=c[d+2],A=c[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(h===1){t[i+0]=y,t[i+1]=x,t[i+2]=E,t[i+3]=A;return}if(g!==A||m!==y||p!==x||v!==E){let M=1-h;const _=m*y+p*x+v*E+g*A,F=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const O=Math.sqrt(C),G=Math.atan2(O,_*F);M=Math.sin(M*G)/O,h=Math.sin(h*G)/O}const w=h*F;if(m=m*M+y*w,p=p*M+x*w,v=v*M+E*w,g=g*M+A*w,M===1-h){const O=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=O,p*=O,v*=O,g*=O}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=c[d],y=c[d+1],x=c[d+2],E=c[d+3];return t[i]=h*E+v*g+m*x-p*y,t[i+1]=m*E+v*y+p*g-h*x,t[i+2]=p*E+v*x+h*y-m*g,t[i+3]=v*E-h*g-m*y-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(c/2),y=m(r/2),x=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=y*v*g+p*x*E,this._y=p*x*g-y*v*E,this._z=p*v*E+y*x*g,this._w=p*v*g-y*x*E;break;case"YXZ":this._x=y*v*g+p*x*E,this._y=p*x*g-y*v*E,this._z=p*v*E-y*x*g,this._w=p*v*g+y*x*E;break;case"ZXY":this._x=y*v*g-p*x*E,this._y=p*x*g+y*v*E,this._z=p*v*E+y*x*g,this._w=p*v*g-y*x*E;break;case"ZYX":this._x=y*v*g-p*x*E,this._y=p*x*g+y*v*E,this._z=p*v*E-y*x*g,this._w=p*v*g+y*x*E;break;case"YZX":this._x=y*v*g+p*x*E,this._y=p*x*g+y*v*E,this._z=p*v*E-y*x*g,this._w=p*v*g-y*x*E;break;case"XZY":this._x=y*v*g-p*x*E,this._y=p*x*g-y*v*E,this._z=p*v*E+y*x*g,this._w=p*v*g+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],y=r+h+g;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-m)*x,this._y=(c-p)*x,this._z=(d-l)*x}else if(r>h&&r>g){const x=2*Math.sqrt(1+r-h-g);this._w=(v-m)/x,this._x=.25*x,this._y=(l+d)/x,this._z=(c+p)/x}else if(h>g){const x=2*Math.sqrt(1+h-r-g);this._w=(c-p)/x,this._x=(l+d)/x,this._y=.25*x,this._z=(m+v)/x}else{const x=2*Math.sqrt(1+g-r-h);this._w=(d-l)/x,this._x=(c+p)/x,this._y=(m+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-c*m,this._y=l*v+d*m+c*h-r*p,this._z=c*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const x=1-i;return this._w=x*d+i*this._w,this._x=x*r+i*this._x,this._y=x*l+i*this._y,this._z=x*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,h),g=Math.sin((1-i)*v)/p,y=Math.sin(i*v)/p;return this._w=d*g+this._w*y,this._x=r*g+this._x*y,this._y=l*g+this._y*y,this._z=c*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(D_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(D_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),v=2*(h*i-c*l),g=2*(c*r-d*i);return this.x=i+m*p+d*g-h*v,this.y=r+m*v+h*p-c*g,this.z=l+m*g+c*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return od.copy(this).projectOnVector(t),this.sub(od)}reflect(t){return this.sub(od.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new et,D_=new Qo;class pe{constructor(t,i,r,l,c,d,h,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],y=r[2],x=r[5],E=r[8],A=l[0],M=l[3],_=l[6],F=l[1],C=l[4],w=l[7],O=l[2],G=l[5],V=l[8];return c[0]=d*A+h*F+m*O,c[3]=d*M+h*C+m*G,c[6]=d*_+h*w+m*V,c[1]=p*A+v*F+g*O,c[4]=p*M+v*C+g*G,c[7]=p*_+v*w+g*V,c[2]=y*A+x*F+E*O,c[5]=y*M+x*C+E*G,c[8]=y*_+x*w+E*V,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-r*c*v+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=v*d-h*p,y=h*m-v*c,x=p*c-d*m,E=i*g+r*y+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=g*A,t[1]=(l*p-v*r)*A,t[2]=(h*r-l*d)*A,t[3]=y*A,t[4]=(v*i-l*m)*A,t[5]=(l*c-h*i)*A,t[6]=x*A,t[7]=(r*m-p*i)*A,t[8]=(d*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ld.makeScale(t,i)),this}rotate(t){return this.premultiply(ld.makeRotation(-t)),this}translate(t,i){return this.premultiply(ld.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new pe;function F0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ku(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function cS(){const o=ku("canvas");return o.style.display="block",o}const U_={};function jo(o){o in U_||(U_[o]=!0,console.warn(o))}function fS(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const L_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dS(){const o={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===He&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===He&&(l.r=As(l.r),l.g=As(l.g),l.b=As(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Gu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return jo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return jo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ds]:{primaries:t,whitePoint:r,transfer:Gu,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:He,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const De=dS();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function As(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rs;class hS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{rs===void 0&&(rs=ku("canvas")),rs.width=t.width,rs.height=t.height;const l=rs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=rs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ku("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ra(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pS=0;class Ih{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Ga(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(ud(l[d].image)):c.push(ud(l[d]))}else c=ud(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function ud(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mS=0;const cd=new et;class Un extends Ls{constructor(t=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=vr,l=vr,c=Mi,d=xr,h=Ei,m=sa,p=Un.DEFAULT_ANISOTROPY,v=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Ga(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==D0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case vr:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case vr:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=D0;Un.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],y=m[1],x=m[5],E=m[9],A=m[2],M=m[6],_=m[10];if(Math.abs(v-y)<.01&&Math.abs(g-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+A)<.1&&Math.abs(E+M)<.1&&Math.abs(p+x+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,w=(x+1)/2,O=(_+1)/2,G=(v+y)/4,V=(g+A)/4,W=(E+M)/4;return C>w&&C>O?C<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(C),l=G/r,c=V/r):w>O?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=G/l,c=W/l):O<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),r=V/c,l=W/c),this.set(r,l,c,i),this}let F=Math.sqrt((M-E)*(M-E)+(g-A)*(g-A)+(y-v)*(y-v));return Math.abs(F)<.001&&(F=1),this.x=(M-E)/F,this.y=(g-A)/F,this.z=(y-v)/F,this.w=Math.acos((p+x+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this.w=Te(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this.w=Te(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gS extends Ls{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Un(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ih(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends gS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class H0 extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _S extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,vi):vi.fromBufferAttribute(c,d),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cu.copy(r.boundingBox)),cu.applyMatrix4(t.matrixWorld),this.union(cu)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),fu.subVectors(this.max,Lo),ss.subVectors(t.a,Lo),os.subVectors(t.b,Lo),ls.subVectors(t.c,Lo),La.subVectors(os,ss),Na.subVectors(ls,os),or.subVectors(ss,ls);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-or.z,or.y,La.z,0,-La.x,Na.z,0,-Na.x,or.z,0,-or.x,-La.y,La.x,0,-Na.y,Na.x,0,-or.y,or.x,0];return!fd(i,ss,os,ls,fu)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,ss,os,ls,fu))?!1:(du.crossVectors(La,Na),i=[du.x,du.y,du.z],fd(i,ss,os,ls,fu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new et,new et,new et,new et,new et,new et,new et,new et],vi=new et,cu=new Mr,ss=new et,os=new et,ls=new et,La=new et,Na=new et,or=new et,Lo=new et,fu=new et,du=new et,lr=new et;function fd(o,t,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){lr.fromArray(o,c);const h=l.x*Math.abs(lr.x)+l.y*Math.abs(lr.y)+l.z*Math.abs(lr.z),m=t.dot(lr),p=i.dot(lr),v=r.dot(lr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const vS=new Mr,No=new et,dd=new et;class Ns{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):vS.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(dd)),this.expandByPoint(No.copy(t.center).sub(dd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new et,hd=new et,hu=new et,Oa=new et,pd=new et,pu=new et,md=new et;class zh{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){hd.copy(t).add(i).multiplyScalar(.5),hu.copy(i).sub(t).normalize(),Oa.copy(this.origin).sub(hd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(hu),h=Oa.dot(this.direction),m=-Oa.dot(hu),p=Oa.lengthSq(),v=Math.abs(1-d*d);let g,y,x,E;if(v>0)if(g=d*m-h,y=d*h-m,E=c*v,g>=0)if(y>=-E)if(y<=E){const A=1/v;g*=A,y*=A,x=g*(g+d*y+2*h)+y*(d*g+y+2*m)+p}else y=c,g=Math.max(0,-(d*y+h)),x=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(d*y+h)),x=-g*g+y*(y+2*m)+p;else y<=-E?(g=Math.max(0,-(-d*c+h)),y=g>0?-c:Math.min(Math.max(-c,-m),c),x=-g*g+y*(y+2*m)+p):y<=E?(g=0,y=Math.min(Math.max(-c,-m),c),x=y*(y+2*m)+p):(g=Math.max(0,-(d*c+h)),y=g>0?c:Math.min(Math.max(-c,-m),c),x=-g*g+y*(y+2*m)+p);else y=d>0?-c:c,g=Math.max(0,-(d*y+h)),x=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(hd).addScaledVector(hu,y),x}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),v>=0?(c=(t.min.y-y.y)*v,d=(t.max.y-y.y)*v):(c=(t.max.y-y.y)*v,d=(t.min.y-y.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-y.z)*g,m=(t.max.z-y.z)*g):(h=(t.max.z-y.z)*g,m=(t.min.z-y.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,c){pd.subVectors(i,t),pu.subVectors(r,t),md.crossVectors(pd,pu);let d=this.direction.dot(md),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Oa.subVectors(this.origin,t);const m=h*this.direction.dot(pu.crossVectors(Oa,pu));if(m<0)return null;const p=h*this.direction.dot(pd.cross(Oa));if(p<0||m+p>d)return null;const v=-h*Oa.dot(md);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,c,d,h,m,p,v,g,y,x,E,A,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,v,g,y,x,E,A,M)}set(t,i,r,l,c,d,h,m,p,v,g,y,x,E,A,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=y,_[3]=x,_[7]=E,_[11]=A,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/us.setFromMatrixColumn(t,0).length(),c=1/us.setFromMatrixColumn(t,1).length(),d=1/us.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=d*v,x=d*g,E=h*v,A=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=x+E*p,i[5]=y-A*p,i[9]=-h*m,i[2]=A-y*p,i[6]=E+x*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*v,x=m*g,E=p*v,A=p*g;i[0]=y+A*h,i[4]=E*h-x,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=x*h-E,i[6]=A+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*v,x=m*g,E=p*v,A=p*g;i[0]=y-A*h,i[4]=-d*g,i[8]=E+x*h,i[1]=x+E*h,i[5]=d*v,i[9]=A-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*v,x=d*g,E=h*v,A=h*g;i[0]=m*v,i[4]=E*p-x,i[8]=y*p+A,i[1]=m*g,i[5]=A*p+y,i[9]=x*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,x=d*p,E=h*m,A=h*p;i[0]=m*v,i[4]=A-y*g,i[8]=E*g+x,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=x*g+E,i[10]=y-A*g}else if(t.order==="XZY"){const y=d*m,x=d*p,E=h*m,A=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=y*g+A,i[5]=d*v,i[9]=x*g-E,i[2]=E*g-x,i[6]=h*v,i[10]=A*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xS,t,yS)}lookAt(t,i,r){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Pa.crossVectors(r,ti),Pa.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Pa.crossVectors(r,ti)),Pa.normalize(),mu.crossVectors(ti,Pa),l[0]=Pa.x,l[4]=mu.x,l[8]=ti.x,l[1]=Pa.y,l[5]=mu.y,l[9]=ti.y,l[2]=Pa.z,l[6]=mu.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],y=r[9],x=r[13],E=r[2],A=r[6],M=r[10],_=r[14],F=r[3],C=r[7],w=r[11],O=r[15],G=l[0],V=l[4],W=l[8],U=l[12],D=l[1],X=l[5],rt=l[9],dt=l[13],xt=l[2],pt=l[6],H=l[10],J=l[14],j=l[3],bt=l[7],L=l[11],it=l[15];return c[0]=d*G+h*D+m*xt+p*j,c[4]=d*V+h*X+m*pt+p*bt,c[8]=d*W+h*rt+m*H+p*L,c[12]=d*U+h*dt+m*J+p*it,c[1]=v*G+g*D+y*xt+x*j,c[5]=v*V+g*X+y*pt+x*bt,c[9]=v*W+g*rt+y*H+x*L,c[13]=v*U+g*dt+y*J+x*it,c[2]=E*G+A*D+M*xt+_*j,c[6]=E*V+A*X+M*pt+_*bt,c[10]=E*W+A*rt+M*H+_*L,c[14]=E*U+A*dt+M*J+_*it,c[3]=F*G+C*D+w*xt+O*j,c[7]=F*V+C*X+w*pt+O*bt,c[11]=F*W+C*rt+w*H+O*L,c[15]=F*U+C*dt+w*J+O*it,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],g=t[6],y=t[10],x=t[14],E=t[3],A=t[7],M=t[11],_=t[15];return E*(+c*m*g-l*p*g-c*h*y+r*p*y+l*h*x-r*m*x)+A*(+i*m*x-i*p*y+c*d*y-l*d*x+l*p*v-c*m*v)+M*(+i*p*g-i*h*x-c*d*g+r*d*x+c*h*v-r*p*v)+_*(-l*h*v-i*m*g+i*h*y+l*d*g-r*d*y+r*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=t[9],y=t[10],x=t[11],E=t[12],A=t[13],M=t[14],_=t[15],F=g*M*p-A*y*p+A*m*x-h*M*x-g*m*_+h*y*_,C=E*y*p-v*M*p-E*m*x+d*M*x+v*m*_-d*y*_,w=v*A*p-E*g*p+E*h*x-d*A*x-v*h*_+d*g*_,O=E*g*m-v*A*m-E*h*y+d*A*y+v*h*M-d*g*M,G=i*F+r*C+l*w+c*O;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/G;return t[0]=F*V,t[1]=(A*y*c-g*M*c-A*l*x+r*M*x+g*l*_-r*y*_)*V,t[2]=(h*M*c-A*m*c+A*l*p-r*M*p-h*l*_+r*m*_)*V,t[3]=(g*m*c-h*y*c-g*l*p+r*y*p+h*l*x-r*m*x)*V,t[4]=C*V,t[5]=(v*M*c-E*y*c+E*l*x-i*M*x-v*l*_+i*y*_)*V,t[6]=(E*m*c-d*M*c-E*l*p+i*M*p+d*l*_-i*m*_)*V,t[7]=(d*y*c-v*m*c+v*l*p-i*y*p-d*l*x+i*m*x)*V,t[8]=w*V,t[9]=(E*g*c-v*A*c-E*r*x+i*A*x+v*r*_-i*g*_)*V,t[10]=(d*A*c-E*h*c+E*r*p-i*A*p-d*r*_+i*h*_)*V,t[11]=(v*h*c-d*g*c-v*r*p+i*g*p+d*r*x-i*h*x)*V,t[12]=O*V,t[13]=(v*A*l-E*g*l+E*r*y-i*A*y-v*r*M+i*g*M)*V,t[14]=(E*h*l-d*A*l-E*r*m+i*A*m+d*r*M-i*h*M)*V,t[15]=(d*g*l-v*h*l+v*r*m-i*g*m-d*r*y+i*h*y)*V,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,v=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,v=d+d,g=h+h,y=c*p,x=c*v,E=c*g,A=d*v,M=d*g,_=h*g,F=m*p,C=m*v,w=m*g,O=r.x,G=r.y,V=r.z;return l[0]=(1-(A+_))*O,l[1]=(x+w)*O,l[2]=(E-C)*O,l[3]=0,l[4]=(x-w)*G,l[5]=(1-(y+_))*G,l[6]=(M+F)*G,l[7]=0,l[8]=(E+C)*V,l[9]=(M-F)*V,l[10]=(1-(y+A))*V,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=us.set(l[0],l[1],l[2]).length();const d=us.set(l[4],l[5],l[6]).length(),h=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/c,v=1/d,g=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=v,xi.elements[5]*=v,xi.elements[6]*=v,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,i.setFromRotationMatrix(xi),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(r-l),y=(i+t)/(i-t),x=(r+l)/(r-l);let E,A;if(m)E=c/(d-c),A=d*c/(d-c);else if(h===Ii)E=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===Vu)E=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,v=2/(i-t),g=2/(r-l),y=-(i+t)/(i-t),x=-(r+l)/(r-l);let E,A;if(m)E=1/(d-c),A=d/(d-c);else if(h===Ii)E=-2/(d-c),A=-(d+c)/(d-c);else if(h===Vu)E=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const us=new et,xi=new je,xS=new et(0,0,0),yS=new et(1,1,1),Pa=new et,mu=new et,ti=new et,O_=new je,P_=new Qo;class oa{constructor(t=0,i=0,r=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return O_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(O_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return P_.setFromEuler(this),this.setFromQuaternion(P_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SS=0;const B_=new et,cs=new Qo,ea=new je,gu=new et,Oo=new et,MS=new et,ES=new Qo,I_=new et(1,0,0),z_=new et(0,1,0),F_=new et(0,0,1),H_={type:"added"},bS={type:"removed"},fs={type:"childadded",child:null},gd={type:"childremoved",child:null};class Ln extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new et,i=new oa,r=new Qo,l=new et(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new pe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return cs.setFromAxisAngle(t,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,i){return cs.setFromAxisAngle(t,i),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(I_,t)}rotateY(t){return this.rotateOnAxis(z_,t)}rotateZ(t){return this.rotateOnAxis(F_,t)}translateOnAxis(t,i){return B_.copy(t).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(I_,t)}translateY(t){return this.translateOnAxis(z_,t)}translateZ(t){return this.translateOnAxis(F_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?gu.copy(t):gu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Oo,gu,this.up):ea.lookAt(gu,Oo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),cs.setFromRotationMatrix(ea),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(H_),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bS),gd.child=t,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(H_),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,MS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,ES,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),g=d(t.shapes),y=d(t.skeletons),x=d(t.animations),E=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new et(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new et,na=new et,_d=new et,ia=new et,ds=new et,hs=new et,G_=new et,vd=new et,xd=new et,yd=new et,Sd=new rn,Md=new rn,Ed=new rn;class di{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),yi.subVectors(t,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){yi.subVectors(l,i),na.subVectors(r,i),_d.subVectors(t,i);const d=yi.dot(yi),h=yi.dot(na),m=yi.dot(_d),p=na.dot(na),v=na.dot(_d),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const y=1/g,x=(p*m-h*v)*y,E=(d*v-h*m)*y;return c.set(1-x-E,E,x)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Sd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(t,i),Md.fromBufferAttribute(t,r),Ed.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Sd,c.x),d.addScaledVector(Md,c.y),d.addScaledVector(Ed,c.z),d}static isFrontFacing(t,i,r,l){return yi.subVectors(r,i),na.subVectors(t,i),yi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),yi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return di.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return di.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;ds.subVectors(l,r),hs.subVectors(c,r),vd.subVectors(t,r);const m=ds.dot(vd),p=hs.dot(vd);if(m<=0&&p<=0)return i.copy(r);xd.subVectors(t,l);const v=ds.dot(xd),g=hs.dot(xd);if(v>=0&&g<=v)return i.copy(l);const y=m*g-v*p;if(y<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(ds,d);yd.subVectors(t,c);const x=ds.dot(yd),E=hs.dot(yd);if(E>=0&&x<=E)return i.copy(c);const A=x*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(hs,h);const M=v*E-x*g;if(M<=0&&g-v>=0&&x-E>=0)return G_.subVectors(c,l),h=(g-v)/(g-v+(x-E)),i.copy(l).addScaledVector(G_,h);const _=1/(M+A+y);return d=A*_,h=y*_,i.copy(r).addScaledVector(ds,d).addScaledVector(hs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const G0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},_u={h:0,s:0,l:0};function bd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ye{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=De.workingColorSpace){if(t=uS(t,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=bd(d,c,t+1/3),this.g=bd(d,c,t),this.b=bd(d,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=G0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return De.workingToColorSpace(Dn.copy(this),t),Math.round(Te(Dn.r*255,0,255))*65536+Math.round(Te(Dn.g*255,0,255))*256+Math.round(Te(Dn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,c=Dn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=fi){De.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,l=Dn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+i,Ba.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ba),t.getHSL(_u);const r=sd(Ba.h,_u.h,i),l=sd(Ba.s,_u.s,i),c=sd(Ba.l,_u.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new ye;ye.NAMES=G0;let TS=0;class Os extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=Ts,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=zd,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Id&&(r.blendSrc=this.blendSrc),this.blendDst!==zd&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gr extends Os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=w0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new et,vu=new be;let AS=0;class Wn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=bh,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vu.fromBufferAttribute(this,i),vu.applyMatrix3(t),this.setXY(i,vu.x,vu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Pi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ge(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Pi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Pi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Pi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Pi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ge(i,this.array),r=Ge(r,this.array),l=Ge(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Ge(i,this.array),r=Ge(r,this.array),l=Ge(l,this.array),c=Ge(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bh&&(t.usage=this.usage),t}}class V0 extends Wn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class k0 extends Wn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class bi extends Wn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let RS=0;const ci=new je,Td=new Ln,ps=new et,ei=new Mr,Po=new Mr,yn=new et;class qn extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(F0(t)?k0:V0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return Td.lookAt(t),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new bi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ei.min,Po.min),ei.expandByPoint(yn),yn.addVectors(ei.max,Po.max),ei.expandByPoint(yn)):(ei.expandByPoint(Po.min),ei.expandByPoint(Po.max))}ei.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)yn.fromBufferAttribute(h,p),m&&(ps.fromBufferAttribute(t,p),yn.add(ps)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<r.count;W++)h[W]=new et,m[W]=new et;const p=new et,v=new et,g=new et,y=new be,x=new be,E=new be,A=new et,M=new et;function _(W,U,D){p.fromBufferAttribute(r,W),v.fromBufferAttribute(r,U),g.fromBufferAttribute(r,D),y.fromBufferAttribute(c,W),x.fromBufferAttribute(c,U),E.fromBufferAttribute(c,D),v.sub(p),g.sub(p),x.sub(y),E.sub(y);const X=1/(x.x*E.y-E.x*x.y);isFinite(X)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(X),M.copy(g).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(X),h[W].add(A),h[U].add(A),h[D].add(A),m[W].add(M),m[U].add(M),m[D].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let W=0,U=F.length;W<U;++W){const D=F[W],X=D.start,rt=D.count;for(let dt=X,xt=X+rt;dt<xt;dt+=3)_(t.getX(dt+0),t.getX(dt+1),t.getX(dt+2))}const C=new et,w=new et,O=new et,G=new et;function V(W){O.fromBufferAttribute(l,W),G.copy(O);const U=h[W];C.copy(U),C.sub(O.multiplyScalar(O.dot(U))).normalize(),w.crossVectors(G,U);const X=w.dot(m[W])<0?-1:1;d.setXYZW(W,C.x,C.y,C.z,X)}for(let W=0,U=F.length;W<U;++W){const D=F[W],X=D.start,rt=D.count;for(let dt=X,xt=X+rt;dt<xt;dt+=3)V(t.getX(dt+0)),V(t.getX(dt+1)),V(t.getX(dt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const l=new et,c=new et,d=new et,h=new et,m=new et,p=new et,v=new et,g=new et;if(t)for(let y=0,x=t.count;y<x;y+=3){const E=t.getX(y+0),A=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,M),v.subVectors(d,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),h.add(v),m.add(v),p.add(v),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),v.subVectors(d,c),g.subVectors(l,c),v.cross(g),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,g=h.normalized,y=new p.constructor(m.length*v);let x=0,E=0;for(let A=0,M=m.length;A<M;A++){h.isInterleavedBufferAttribute?x=m[A]*h.data.stride+h.offset:x=m[A]*v;for(let _=0;_<v;_++)y[E++]=p[x++]}return new Wn(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const y=p[v],x=t(y,r);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,y=p.length;g<y;g++){const x=p[g];v.push(x.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let y=0,x=g.length;y<x;y++)v.push(g[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new je,ur=new zh,xu=new Ns,k_=new et,yu=new et,Su=new et,Mu=new et,Ad=new et,Eu=new et,X_=new et,bu=new et;class zn extends Ln{constructor(t=new qn,i=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Eu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(Ad.fromBufferAttribute(g,t),d?Eu.addScaledVector(Ad,v):Eu.addScaledVector(Ad.sub(i),v))}i.add(Eu)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xu.copy(r.boundingSphere),xu.applyMatrix4(c),ur.copy(t.ray).recast(t.near),!(xu.containsPoint(ur.origin)===!1&&(ur.intersectSphere(xu,k_)===null||ur.origin.distanceToSquared(k_)>(t.far-t.near)**2))&&(V_.copy(c).invert(),ur.copy(t.ray).applyMatrix4(V_),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,y=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,A=y.length;E<A;E++){const M=y[E],_=d[M.materialIndex],F=Math.max(M.start,x.start),C=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let w=F,O=C;w<O;w+=3){const G=h.getX(w),V=h.getX(w+1),W=h.getX(w+2);l=Tu(this,_,t,r,p,v,g,G,V,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let M=E,_=A;M<_;M+=3){const F=h.getX(M),C=h.getX(M+1),w=h.getX(M+2);l=Tu(this,d,t,r,p,v,g,F,C,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,A=y.length;E<A;E++){const M=y[E],_=d[M.materialIndex],F=Math.max(M.start,x.start),C=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let w=F,O=C;w<O;w+=3){const G=w,V=w+1,W=w+2;l=Tu(this,_,t,r,p,v,g,G,V,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),A=Math.min(m.count,x.start+x.count);for(let M=E,_=A;M<_;M+=3){const F=M,C=M+1,w=M+2;l=Tu(this,d,t,r,p,v,g,F,C,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function CS(o,t,i,r,l,c,d,h){let m;if(t.side===Xn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===Va,h),m===null)return null;bu.copy(h),bu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(bu);return p<i.near||p>i.far?null:{distance:p,point:bu.clone(),object:o}}function Tu(o,t,i,r,l,c,d,h,m,p){o.getVertexPosition(h,yu),o.getVertexPosition(m,Su),o.getVertexPosition(p,Mu);const v=CS(o,t,i,r,yu,Su,Mu,X_);if(v){const g=new et;di.getBarycoord(X_,yu,Su,Mu,g),l&&(v.uv=di.getInterpolatedAttribute(l,h,m,p,g,new be)),c&&(v.uv1=di.getInterpolatedAttribute(c,h,m,p,g,new be)),d&&(v.normal=di.getInterpolatedAttribute(d,h,m,p,g,new et),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new et,materialIndex:0};di.getNormal(yu,Su,Mu,y.normal),v.face=y,v.barycoord=g}return v}class Jo extends qn{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],g=[];let y=0,x=0;E("z","y","x",-1,-1,r,i,t,d,c,0),E("z","y","x",1,-1,r,i,-t,d,c,1),E("x","z","y",1,1,t,r,i,l,d,2),E("x","z","y",1,-1,t,r,-i,l,d,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(v,3)),this.setAttribute("uv",new bi(g,2));function E(A,M,_,F,C,w,O,G,V,W,U){const D=w/V,X=O/W,rt=w/2,dt=O/2,xt=G/2,pt=V+1,H=W+1;let J=0,j=0;const bt=new et;for(let L=0;L<H;L++){const it=L*X-dt;for(let Et=0;Et<pt;Et++){const Tt=Et*D-rt;bt[A]=Tt*F,bt[M]=it*C,bt[_]=xt,p.push(bt.x,bt.y,bt.z),bt[A]=0,bt[M]=0,bt[_]=G>0?1:-1,v.push(bt.x,bt.y,bt.z),g.push(Et/V),g.push(1-L/W),J+=1}}for(let L=0;L<W;L++)for(let it=0;it<V;it++){const Et=y+it+pt*L,Tt=y+it+pt*(L+1),B=y+(it+1)+pt*(L+1),ot=y+(it+1)+pt*L;m.push(Et,Tt,ot),m.push(Tt,B,ot),j+=6}h.addGroup(x,j,U),x+=j,y+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function In(o){const t={};for(let i=0;i<o.length;i++){const r=Us(o[i]);for(const l in r)t[l]=r[l]}return t}function wS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function X0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const DS={clone:Us,merge:In};var US=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=US,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=wS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class W0 extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new et,W_=new be,q_=new be;class Si extends W0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Th*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Th*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z)}getViewSize(t,i){return this.getViewBounds(t,W_,q_),i.subVectors(q_,W_)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,gs=1;class NS extends Ln{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(ms,gs,t,i);l.layers=this.layers,this.add(l);const c=new Si(ms,gs,t,i);c.layers=this.layers,this.add(c);const d=new Si(ms,gs,t,i);d.layers=this.layers,this.add(d);const h=new Si(ms,gs,t,i);h.layers=this.layers,this.add(h);const m=new Si(ms,gs,t,i);m.layers=this.layers,this.add(m);const p=new Si(ms,gs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Vu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,v]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(g,y,x),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class q0 extends Un{constructor(t=[],i=Cs,r,l,c,d,h,m,p,v){super(t,i,r,l,c,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class OS extends Sr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new q0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jo(5,5,5),c=new ka({name:"CubemapFromEquirect",uniforms:Us(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:Fa});c.uniforms.tEquirect.value=i;const d=new zn(l,c),h=i.minFilter;return i.minFilter===xr&&(i.minFilter=Mi),new NS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class Vo extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PS={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,r),_=this._getHandJoint(p,A);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=v.position.distanceTo(g.position),x=.02,E=.005;p.inputState.pinching&&y>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(PS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Vo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class BS extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class IS{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=bh,this.updateRanges=[],this.version=0,this.uuid=Ga()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ga()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ga()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new et;class Xu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Pi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ge(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Pi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Pi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Pi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Pi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ge(i,this.array),r=Ge(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ge(i,this.array),r=Ge(r,this.array),l=Ge(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ge(i,this.array),r=Ge(r,this.array),l=Ge(l,this.array),c=Ge(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Wn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Y0 extends Os{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _s;const Bo=new et,vs=new et,xs=new et,ys=new be,Io=new be,j0=new je,Au=new et,zo=new et,Ru=new et,Y_=new be,Cd=new be,j_=new be;class zS extends Ln{constructor(t=new Y0){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new qn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new IS(i,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new Xu(r,3,0,!1)),_s.setAttribute("uv",new Xu(r,2,3,!1))}this.geometry=_s,this.material=t,this.center=new be(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),j0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-xs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const d=this.center;Cu(Au.set(-.5,-.5,0),xs,d,vs,l,c),Cu(zo.set(.5,-.5,0),xs,d,vs,l,c),Cu(Ru.set(.5,.5,0),xs,d,vs,l,c),Y_.set(0,0),Cd.set(1,0),j_.set(1,1);let h=t.ray.intersectTriangle(Au,zo,Ru,!1,Bo);if(h===null&&(Cu(zo.set(-.5,.5,0),xs,d,vs,l,c),Cd.set(0,1),h=t.ray.intersectTriangle(Au,Ru,zo,!1,Bo),h===null))return;const m=t.ray.origin.distanceTo(Bo);m<t.near||m>t.far||i.push({distance:m,point:Bo.clone(),uv:di.getInterpolation(Bo,Au,zo,Ru,Y_,Cd,j_,new be),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cu(o,t,i,r,l,c){ys.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Io.x=c*ys.x-l*ys.y,Io.y=l*ys.x+c*ys.y):Io.copy(ys),o.copy(t),o.x+=Io.x,o.y+=Io.y,o.applyMatrix4(j0)}class FS extends Un{constructor(t=null,i=1,r=1,l,c,d,h,m,p=ni,v=ni,g,y){super(null,d,h,m,p,v,l,c,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Z_ extends Wn{constructor(t,i,r,l=1){super(t,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ss=new je,K_=new je,wu=[],Q_=new Mr,HS=new je,Fo=new zn,Ho=new Ns;class GS extends zn{constructor(t,i,r){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Z_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,HS)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Mr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ss),Q_.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Q_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ss),Ho.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(Ho)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=r.length+1,d=t*c+1;for(let h=0;h<r.length;h++)r[h]=l[d+h]}raycast(t,i){const r=this.matrixWorld,l=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(r),t.ray.intersectsSphere(Ho)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ss),K_.multiplyMatrices(r,Ss),Fo.matrixWorld=K_,Fo.raycast(t,wu);for(let d=0,h=wu.length;d<h;d++){const m=wu[d];m.instanceId=c,m.object=this,i.push(m)}wu.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Z_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new FS(new Float32Array(l*this.count),l,this.count,Nh,Bi));const c=this.morphTexture.source.data.data;let d=0;for(let p=0;p<r.length;p++)d+=r[p];const h=this.geometry.morphTargetsRelative?1:1-d,m=l*t;c[m]=h,c.set(r,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wd=new et,VS=new et,kS=new pe;class hr{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=wd.subVectors(r,i).cross(VS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(wd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||kS.getNormalMatrix(t),l=this.coplanarPoint(wd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Ns,XS=new be(.5,.5),Du=new et;class Z0{constructor(t=new hr,i=new hr,r=new hr,l=new hr,c=new hr,d=new hr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ii,r=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],y=c[6],x=c[7],E=c[8],A=c[9],M=c[10],_=c[11],F=c[12],C=c[13],w=c[14],O=c[15];if(l[0].setComponents(p-d,x-v,_-E,O-F).normalize(),l[1].setComponents(p+d,x+v,_+E,O+F).normalize(),l[2].setComponents(p+h,x+g,_+A,O+C).normalize(),l[3].setComponents(p-h,x-g,_-A,O-C).normalize(),r)l[4].setComponents(m,y,M,w).normalize(),l[5].setComponents(p-m,x-y,_-M,O-w).normalize();else if(l[4].setComponents(p-m,x-y,_-M,O-w).normalize(),i===Ii)l[5].setComponents(p+m,x+y,_+M,O+w).normalize();else if(i===Vu)l[5].setComponents(m,y,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){cr.center.set(0,0,0);const i=XS.distanceTo(t.center);return cr.radius=.7071067811865476+i,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Du.x=l.normal.x>0?t.max.x:t.min.x,Du.y=l.normal.y>0?t.max.y:t.min.y,Du.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Du)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zo extends Os{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wu=new et,qu=new et,J_=new je,Go=new zh,Uu=new Ns,Dd=new et,$_=new et;class Yu extends Ln{constructor(t=new qn,i=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Wu.fromBufferAttribute(i,l-1),qu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Wu.distanceTo(qu);t.setAttribute("lineDistance",new bi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Uu.copy(r.boundingSphere),Uu.applyMatrix4(l),Uu.radius+=c,t.ray.intersectsSphere(Uu)===!1)return;J_.copy(l).invert(),Go.copy(t.ray).applyMatrix4(J_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const x=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let A=x,M=E-1;A<M;A+=p){const _=v.getX(A),F=v.getX(A+1),C=Lu(this,t,Go,m,_,F,A);C&&i.push(C)}if(this.isLineLoop){const A=v.getX(E-1),M=v.getX(x),_=Lu(this,t,Go,m,A,M,E-1);_&&i.push(_)}}else{const x=Math.max(0,d.start),E=Math.min(y.count,d.start+d.count);for(let A=x,M=E-1;A<M;A+=p){const _=Lu(this,t,Go,m,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Lu(this,t,Go,m,E-1,x,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Lu(o,t,i,r,l,c,d){const h=o.geometry.attributes.position;if(Wu.fromBufferAttribute(h,l),qu.fromBufferAttribute(h,c),i.distanceSqToSegment(Wu,qu,Dd,$_)>r)return;Dd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Dd);if(!(p<t.near||p>t.far))return{distance:p,point:$_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class WS extends Yu{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class qS extends Un{constructor(t,i,r,l,c,d,h,m,p){super(t,i,r,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class K0 extends Un{constructor(t,i,r=yr,l,c,d,h=ni,m=ni,p,v=qo,g=1){if(v!==qo&&v!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ih(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Q0 extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $o extends qn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=t/h,y=i/m,x=[],E=[],A=[],M=[];for(let _=0;_<v;_++){const F=_*y-d;for(let C=0;C<p;C++){const w=C*g-c;E.push(w,-F,0),A.push(0,0,1),M.push(C/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let F=0;F<h;F++){const C=F+p*_,w=F+p*(_+1),O=F+1+p*(_+1),G=F+1+p*_;x.push(C,w,G),x.push(w,O,G)}this.setIndex(x),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(A,3)),this.setAttribute("uv",new bi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.widthSegments,t.heightSegments)}}class Es extends qn{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const v=[],g=new et,y=new et,x=[],E=[],A=[],M=[];for(let _=0;_<=r;_++){const F=[],C=_/r;let w=0;_===0&&d===0?w=.5/i:_===r&&m===Math.PI&&(w=-.5/i);for(let O=0;O<=i;O++){const G=O/i;g.x=-t*Math.cos(l+G*c)*Math.sin(d+C*h),g.y=t*Math.cos(d+C*h),g.z=t*Math.sin(l+G*c)*Math.sin(d+C*h),E.push(g.x,g.y,g.z),y.copy(g).normalize(),A.push(y.x,y.y,y.z),M.push(G+w,1-C),F.push(p++)}v.push(F)}for(let _=0;_<r;_++)for(let F=0;F<i;F++){const C=v[_][F+1],w=v[_][F],O=v[_+1][F],G=v[_+1][F+1];(_!==0||d>0)&&x.push(C,w,G),(_!==r-1||m<Math.PI)&&x.push(w,O,G)}this.setIndex(x),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(A,3)),this.setAttribute("uv",new bi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class YS extends Os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jS extends Os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class J0 extends W0{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ZS extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const t0=new je;class KS{constructor(t,i,r=0,l=1/0){this.ray=new zh(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return t0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(t0),this}intersectObject(t,i=!0,r=[]){return Ah(t,this,r,i),r.sort(e0),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Ah(t[l],this,r,i);return r.sort(e0),r}}function e0(o,t){return o.distance-t.distance}function Ah(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let d=0,h=c.length;d<h;d++)Ah(c[d],t,i,!0)}}function n0(o,t,i,r){const l=QS(r);switch(i){case P0:return o*t;case Nh:return o*t/l.components*l.byteLength;case Oh:return o*t/l.components*l.byteLength;case I0:return o*t*2/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case B0:return o*t*3/l.components*l.byteLength;case Ei:return o*t*4/l.components*l.byteLength;case Bh:return o*t*4/l.components*l.byteLength;case Bu:case Iu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zu:case Fu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(t,8)/2;case th:case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case yh:case Sh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Mh:case Eh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function QS(o){switch(o){case sa:case U0:return{byteLength:1,components:1};case Xo:case L0:case Ko:return{byteLength:2,components:1};case Uh:case Lh:return{byteLength:2,components:4};case yr:case Dh:case Bi:return{byteLength:4,components:1};case N0:case O0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $0(){let o=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function JS(o){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,v),h.onUploadCallback();let x;if(p instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=o.SHORT;else if(p instanceof Uint32Array)x=o.UNSIGNED_INT;else if(p instanceof Int32Array)x=o.INT;else if(p instanceof Int8Array)x=o.BYTE;else if(p instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,v);else{g.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<g.length;x++){const E=g[y],A=g[x];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++y,g[y]=A)}g.length=y+1;for(let x=0,E=g.length;x<E;x++){const A=g[x];o.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var $S=`#ifdef USE_ALPHAHASH
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
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
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
#endif`,uE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
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
}`,ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`uniform float scale;
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
}`,_e={alphahash_fragment:$S,alphahash_pars_fragment:tM,alphamap_fragment:eM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:aM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:uM,beginnormal_vertex:cM,bsdfs:fM,iridescence_fragment:dM,bumpmap_pars_fragment:hM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:yM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:bM,displacementmap_pars_vertex:TM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:wM,colorspace_pars_fragment:DM,envmap_fragment:UM,envmap_common_pars_fragment:LM,envmap_pars_fragment:NM,envmap_pars_vertex:OM,envmap_physical_pars_fragment:WM,envmap_vertex:PM,fog_vertex:BM,fog_pars_vertex:IM,fog_fragment:zM,fog_pars_fragment:FM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:kM,lights_pars_begin:XM,lights_toon_fragment:qM,lights_toon_pars_fragment:YM,lights_phong_fragment:jM,lights_phong_pars_fragment:ZM,lights_physical_fragment:KM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:$M,lights_fragment_end:tE,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:aE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:oE,map_particle_pars_fragment:lE,metalnessmap_fragment:uE,metalnessmap_pars_fragment:cE,morphinstance_vertex:fE,morphcolor_vertex:dE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:_E,normal_pars_fragment:vE,normal_pars_vertex:xE,normal_vertex:yE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:TE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:wE,dithering_fragment:DE,dithering_pars_fragment:UE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:PE,shadowmap_vertex:BE,shadowmask_pars_fragment:IE,skinbase_vertex:zE,skinning_pars_vertex:FE,skinning_vertex:HE,skinnormal_vertex:GE,specularmap_fragment:VE,specularmap_pars_fragment:kE,tonemapping_fragment:XE,tonemapping_pars_fragment:WE,transmission_fragment:qE,transmission_pars_fragment:YE,uv_pars_fragment:jE,uv_pars_vertex:ZE,uv_vertex:KE,worldpos_vertex:QE,background_vert:JE,background_frag:$E,backgroundCube_vert:tb,backgroundCube_frag:eb,cube_vert:nb,cube_frag:ib,depth_vert:ab,depth_frag:rb,distanceRGBA_vert:sb,distanceRGBA_frag:ob,equirect_vert:lb,equirect_frag:ub,linedashed_vert:cb,linedashed_frag:fb,meshbasic_vert:db,meshbasic_frag:hb,meshlambert_vert:pb,meshlambert_frag:mb,meshmatcap_vert:gb,meshmatcap_frag:_b,meshnormal_vert:vb,meshnormal_frag:xb,meshphong_vert:yb,meshphong_frag:Sb,meshphysical_vert:Mb,meshphysical_frag:Eb,meshtoon_vert:bb,meshtoon_frag:Tb,points_vert:Ab,points_frag:Rb,shadow_vert:Cb,shadow_frag:wb,sprite_vert:Db,sprite_frag:Ub},Ht={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ni={basic:{uniforms:In([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:In([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:In([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:In([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:In([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:In([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:In([Ht.points,Ht.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:In([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:In([Ht.common,Ht.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:In([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:In([Ht.sprite,Ht.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:In([Ht.common,Ht.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:In([Ht.lights,Ht.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Ni.physical={uniforms:In([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Nu={r:0,b:0,g:0},fr=new oa,Lb=new je;function Nb(o,t,i,r,l,c,d){const h=new ye(0);let m=c===!0?0:1,p,v,g=null,y=0,x=null;function E(C){let w=C.isScene===!0?C.background:null;return w&&w.isTexture&&(w=(C.backgroundBlurriness>0?i:t).get(w)),w}function A(C){let w=!1;const O=E(C);O===null?_(h,m):O&&O.isColor&&(_(O,1),w=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,d):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(C,w){const O=E(w);O&&(O.isCubeTexture||O.mapping===ju)?(v===void 0&&(v=new zn(new Jo(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Us(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,V,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),fr.copy(w.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),v.material.uniforms.envMap.value=O,v.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(fr)),v.material.toneMapped=De.getTransfer(O.colorSpace)!==He,(g!==O||y!==O.version||x!==o.toneMapping)&&(v.material.needsUpdate=!0,g=O,y=O.version,x=o.toneMapping),v.layers.enableAll(),C.unshift(v,v.geometry,v.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new zn(new $o(2,2),new ka({name:"BackgroundMaterial",uniforms:Us(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=De.getTransfer(O.colorSpace)!==He,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||y!==O.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,g=O,y=O.version,x=o.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function _(C,w){C.getRGB(Nu,X0(o)),r.buffers.color.setClear(Nu.r,Nu.g,Nu.b,w,d)}function F(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,w=1){h.set(C),m=w,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,_(h,m)},render:A,addToRenderList:M,dispose:F}}function Ob(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,d=!1;function h(D,X,rt,dt,xt){let pt=!1;const H=g(dt,rt,X);c!==H&&(c=H,p(c.object)),pt=x(D,dt,rt,xt),pt&&E(D,dt,rt,xt),xt!==null&&t.update(xt,o.ELEMENT_ARRAY_BUFFER),(pt||d)&&(d=!1,w(D,X,rt,dt),xt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(xt).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function v(D){return o.deleteVertexArray(D)}function g(D,X,rt){const dt=rt.wireframe===!0;let xt=r[D.id];xt===void 0&&(xt={},r[D.id]=xt);let pt=xt[X.id];pt===void 0&&(pt={},xt[X.id]=pt);let H=pt[dt];return H===void 0&&(H=y(m()),pt[dt]=H),H}function y(D){const X=[],rt=[],dt=[];for(let xt=0;xt<i;xt++)X[xt]=0,rt[xt]=0,dt[xt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:rt,attributeDivisors:dt,object:D,attributes:{},index:null}}function x(D,X,rt,dt){const xt=c.attributes,pt=X.attributes;let H=0;const J=rt.getAttributes();for(const j in J)if(J[j].location>=0){const L=xt[j];let it=pt[j];if(it===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),L===void 0||L.attribute!==it||it&&L.data!==it.data)return!0;H++}return c.attributesNum!==H||c.index!==dt}function E(D,X,rt,dt){const xt={},pt=X.attributes;let H=0;const J=rt.getAttributes();for(const j in J)if(J[j].location>=0){let L=pt[j];L===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(L=D.instanceColor));const it={};it.attribute=L,L&&L.data&&(it.data=L.data),xt[j]=it,H++}c.attributes=xt,c.attributesNum=H,c.index=dt}function A(){const D=c.newAttributes;for(let X=0,rt=D.length;X<rt;X++)D[X]=0}function M(D){_(D,0)}function _(D,X){const rt=c.newAttributes,dt=c.enabledAttributes,xt=c.attributeDivisors;rt[D]=1,dt[D]===0&&(o.enableVertexAttribArray(D),dt[D]=1),xt[D]!==X&&(o.vertexAttribDivisor(D,X),xt[D]=X)}function F(){const D=c.newAttributes,X=c.enabledAttributes;for(let rt=0,dt=X.length;rt<dt;rt++)X[rt]!==D[rt]&&(o.disableVertexAttribArray(rt),X[rt]=0)}function C(D,X,rt,dt,xt,pt,H){H===!0?o.vertexAttribIPointer(D,X,rt,xt,pt):o.vertexAttribPointer(D,X,rt,dt,xt,pt)}function w(D,X,rt,dt){A();const xt=dt.attributes,pt=rt.getAttributes(),H=X.defaultAttributeValues;for(const J in pt){const j=pt[J];if(j.location>=0){let bt=xt[J];if(bt===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor)),bt!==void 0){const L=bt.normalized,it=bt.itemSize,Et=t.get(bt);if(Et===void 0)continue;const Tt=Et.buffer,B=Et.type,ot=Et.bytesPerElement,I=B===o.INT||B===o.UNSIGNED_INT||bt.gpuType===Dh;if(bt.isInterleavedBufferAttribute){const Q=bt.data,ft=Q.stride,At=bt.offset;if(Q.isInstancedInterleavedBuffer){for(let vt=0;vt<j.locationSize;vt++)_(j.location+vt,Q.meshPerAttribute);D.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let vt=0;vt<j.locationSize;vt++)M(j.location+vt);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let vt=0;vt<j.locationSize;vt++)C(j.location+vt,it/j.locationSize,B,L,ft*ot,(At+it/j.locationSize*vt)*ot,I)}else{if(bt.isInstancedBufferAttribute){for(let Q=0;Q<j.locationSize;Q++)_(j.location+Q,bt.meshPerAttribute);D.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Q=0;Q<j.locationSize;Q++)M(j.location+Q);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let Q=0;Q<j.locationSize;Q++)C(j.location+Q,it/j.locationSize,B,L,it*ot,it/j.locationSize*Q*ot,I)}}else if(H!==void 0){const L=H[J];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(j.location,L);break;case 3:o.vertexAttrib3fv(j.location,L);break;case 4:o.vertexAttrib4fv(j.location,L);break;default:o.vertexAttrib1fv(j.location,L)}}}}F()}function O(){W();for(const D in r){const X=r[D];for(const rt in X){const dt=X[rt];for(const xt in dt)v(dt[xt].object),delete dt[xt];delete X[rt]}delete r[D]}}function G(D){if(r[D.id]===void 0)return;const X=r[D.id];for(const rt in X){const dt=X[rt];for(const xt in dt)v(dt[xt].object),delete dt[xt];delete X[rt]}delete r[D.id]}function V(D){for(const X in r){const rt=r[X];if(rt[D.id]===void 0)continue;const dt=rt[D.id];for(const xt in dt)v(dt[xt].object),delete dt[xt];delete rt[D.id]}}function W(){U(),d=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:U,dispose:O,releaseStatesOfGeometry:G,releaseStatesOfProgram:V,initAttributes:A,enableAttribute:M,disableUnusedAttributes:F}}function Pb(o,t,i){let r;function l(p){r=p}function c(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,g){g!==0&&(o.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let x=0;for(let E=0;E<g;E++)x+=v[E];i.update(x,r,1)}function m(p,v,g,y){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)d(p[E],v[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(r,p,0,v,0,y,0,g);let E=0;for(let A=0;A<g;A++)E+=v[A]*y[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Bb(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const V=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(V){return!(V!==Ei&&r.convert(V)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(V){const W=V===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==sa&&r.convert(V)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Bi&&!W)}function m(V){if(V==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:F,maxVaryings:C,maxFragmentUniforms:w,vertexTextures:O,maxSamples:G}}function Ib(o){const t=this;let i=null,r=0,l=!1,c=!1;const d=new hr,h=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const x=g.length!==0||y||r!==0||l;return l=y,r=g.length,x},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,x){const E=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?v(null):p();else{const F=c?0:r,C=F*4;let w=_.clippingState||null;m.value=w,w=v(E,y,C,x);for(let O=0;O!==C;++O)w[O]=i[O];_.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(g,y,x,E){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=m.value,E!==!0||M===null){const _=x+A*4,F=y.matrixWorldInverse;h.getNormalMatrix(F),(M===null||M.length<_)&&(M=new Float32Array(_));for(let C=0,w=x;C!==A;++C,w+=4)d.copy(g[C]).applyMatrix4(F,h),d.normal.toArray(M,w),M[w+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function zb(o){let t=new WeakMap;function i(d,h){return h===qd?d.mapping=Cs:h===Yd&&(d.mapping=ws),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===qd||h===Yd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new OS(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const bs=4,i0=[.125,.215,.35,.446,.526,.582],_r=20,Ud=new J0,a0=new ye;let Ld=null,Nd=0,Od=0,Pd=!1;const pr=(1+Math.sqrt(5))/2,Ms=1/pr,r0=[new et(-pr,Ms,0),new et(pr,Ms,0),new et(-Ms,0,pr),new et(Ms,0,pr),new et(0,pr,-Ms),new et(0,pr,Ms),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],Fb=new et;class s0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=Fb}=c;Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ld,Nd,Od),this._renderer.xr.enabled=Pd,t.scissorTest=!1,Ou(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Ko,format:Ei,colorSpace:Ds,depthBuffer:!1},l=o0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hb(c)),this._blurMaterial=Gb(c,t,i)}return l}_compileMaterial(t){const i=new zn(this._lodPlanes[0],t);this._renderer.compile(i,Ud)}_sceneToCubeUV(t,i,r,l,c){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(a0),g.toneMapping=Ha,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const A=new gr({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),M=new zn(new Jo,A);let _=!1;const F=t.background;F?F.isColor&&(A.color.copy(F),t.background=null,_=!0):(A.color.copy(a0),_=!0);for(let C=0;C<6;C++){const w=C%3;w===0?(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[C],c.y,c.z)):w===1?(m.up.set(0,0,p[C]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[C],c.z)):(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[C]));const O=this._cubeSize;Ou(l,w*O,C>2?O:0,O,O),g.setRenderTarget(l),_&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=y,t.background=F}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Cs||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l0());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new zn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ou(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Ud)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=r0[(l-c-1)%r0.length];this._blur(t,c-1,c,d,h)}i.autoClear=r}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new zn(this._lodPlanes[l],p),y=p.uniforms,x=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*_r-1),A=c/E,M=isFinite(c)?1+Math.floor(v*A):_r;M>_r&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${_r}`);const _=[];let F=0;for(let V=0;V<_r;++V){const W=V/A,U=Math.exp(-W*W/2);_.push(U),V===0?F+=U:V<M&&(F+=2*U)}for(let V=0;V<_.length;V++)_[V]=_[V]/F;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:C}=this;y.dTheta.value=E,y.mipInt.value=C-r;const w=this._sizeLods[l],O=3*w*(l>C-bs?l-C+bs:0),G=4*(this._cubeSize-w);Ou(i,O,G,3*w,2*w),m.setRenderTarget(i),m.render(g,Ud)}}function Hb(o){const t=[],i=[],r=[];let l=o;const c=o-bs+1+i0.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-bs?m=i0[d-o+bs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),v=-p,g=1+p,y=[v,v,g,v,g,g,v,v,g,g,v,g],x=6,E=6,A=3,M=2,_=1,F=new Float32Array(A*E*x),C=new Float32Array(M*E*x),w=new Float32Array(_*E*x);for(let G=0;G<x;G++){const V=G%3*2/3-1,W=G>2?0:-1,U=[V,W,0,V+2/3,W,0,V+2/3,W+1,0,V,W,0,V+2/3,W+1,0,V,W+1,0];F.set(U,A*E*G),C.set(y,M*E*G);const D=[G,G,G,G,G,G];w.set(D,_*E*G)}const O=new qn;O.setAttribute("position",new Wn(F,A)),O.setAttribute("uv",new Wn(C,M)),O.setAttribute("faceIndex",new Wn(w,_)),t.push(O),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function o0(o,t,i){const r=new Sr(o,t,i);return r.texture.mapping=ju,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ou(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function Gb(o,t,i){const r=new Float32Array(_r),l=new et(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function u0(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

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
	`}function Vb(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===qd||m===Yd,v=m===Cs||m===ws;if(p||v){let g=t.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new s0(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return p&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new s0(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function kb(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&jo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Xb(o,t,i,r){const l={},c=new WeakMap;function d(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",d),delete l[y.id];const x=c.get(y);x&&(t.remove(x),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(g,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const x in y)t.update(y[x],o.ARRAY_BUFFER)}function p(g){const y=[],x=g.index,E=g.attributes.position;let A=0;if(x!==null){const F=x.array;A=x.version;for(let C=0,w=F.length;C<w;C+=3){const O=F[C+0],G=F[C+1],V=F[C+2];y.push(O,G,G,V,V,O)}}else if(E!==void 0){const F=E.array;A=E.version;for(let C=0,w=F.length/3-1;C<w;C+=3){const O=C+0,G=C+1,V=C+2;y.push(O,G,G,V,V,O)}}else return;const M=new(F0(y)?k0:V0)(y,1);M.version=A;const _=c.get(g);_&&t.remove(_),c.set(g,M)}function v(g){const y=c.get(g);if(y){const x=g.index;x!==null&&y.version<x.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function Wb(o,t,i){let r;function l(y){r=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function m(y,x){o.drawElements(r,x,c,y*d),i.update(x,r,1)}function p(y,x,E){E!==0&&(o.drawElementsInstanced(r,x,c,y*d,E),i.update(x,r,E))}function v(y,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,c,y,0,E);let M=0;for(let _=0;_<E;_++)M+=x[_];i.update(M,r,1)}function g(y,x,E,A){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)p(y[_]/d,x[_],A[_]);else{M.multiDrawElementsInstancedWEBGL(r,x,0,c,y,0,A,0,E);let _=0;for(let F=0;F<E;F++)_+=x[F]*A[F];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function qb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Yb(o,t,i){const r=new WeakMap,l=new rn;function c(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let y=r.get(h);if(y===void 0||y.count!==g){let D=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var x=D;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),M===!0&&(w=3);let O=h.attributes.position.count*w,G=1;O>t.maxTextureSize&&(G=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const V=new Float32Array(O*G*4*g),W=new H0(V,O,G,g);W.type=Bi,W.needsUpdate=!0;const U=w*4;for(let X=0;X<g;X++){const rt=_[X],dt=F[X],xt=C[X],pt=O*G*4*X;for(let H=0;H<rt.count;H++){const J=H*U;E===!0&&(l.fromBufferAttribute(rt,H),V[pt+J+0]=l.x,V[pt+J+1]=l.y,V[pt+J+2]=l.z,V[pt+J+3]=0),A===!0&&(l.fromBufferAttribute(dt,H),V[pt+J+4]=l.x,V[pt+J+5]=l.y,V[pt+J+6]=l.z,V[pt+J+7]=0),M===!0&&(l.fromBufferAttribute(xt,H),V[pt+J+8]=l.x,V[pt+J+9]=l.y,V[pt+J+10]=l.z,V[pt+J+11]=xt.itemSize===4?l.w:1)}}y={count:g,texture:W,size:new be(O,G)},r.set(h,y),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function jb(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const tv=new Un,c0=new K0(1,1),ev=new H0,nv=new _S,iv=new q0,f0=[],d0=[],h0=new Float32Array(16),p0=new Float32Array(9),m0=new Float32Array(4);function Ps(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=f0[l];if(c===void 0&&(c=new Float32Array(l),f0[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function pn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function mn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Zu(o,t){let i=d0[t];i===void 0&&(i=new Int32Array(t),d0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Zb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Kb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2fv(this.addr,t),mn(i,t)}}function Qb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;o.uniform3fv(this.addr,t),mn(i,t)}}function Jb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4fv(this.addr,t),mn(i,t)}}function $b(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;m0.set(r),o.uniformMatrix2fv(this.addr,!1,m0),mn(i,r)}}function tT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;p0.set(r),o.uniformMatrix3fv(this.addr,!1,p0),mn(i,r)}}function eT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;h0.set(r),o.uniformMatrix4fv(this.addr,!1,h0),mn(i,r)}}function nT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function iT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2iv(this.addr,t),mn(i,t)}}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3iv(this.addr,t),mn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4iv(this.addr,t),mn(i,t)}}function sT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2uiv(this.addr,t),mn(i,t)}}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3uiv(this.addr,t),mn(i,t)}}function uT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4uiv(this.addr,t),mn(i,t)}}function cT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(c0.compareFunction=z0,c=c0):c=tv,i.setTexture2D(t||c,l)}function fT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||nv,l)}function dT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||iv,l)}function hT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||ev,l)}function pT(o){switch(o){case 5126:return Zb;case 35664:return Kb;case 35665:return Qb;case 35666:return Jb;case 35674:return $b;case 35675:return tT;case 35676:return eT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return lT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return hT}}function mT(o,t){o.uniform1fv(this.addr,t)}function gT(o,t){const i=Ps(t,this.size,2);o.uniform2fv(this.addr,i)}function _T(o,t){const i=Ps(t,this.size,3);o.uniform3fv(this.addr,i)}function vT(o,t){const i=Ps(t,this.size,4);o.uniform4fv(this.addr,i)}function xT(o,t){const i=Ps(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yT(o,t){const i=Ps(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ST(o,t){const i=Ps(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function MT(o,t){o.uniform1iv(this.addr,t)}function ET(o,t){o.uniform2iv(this.addr,t)}function bT(o,t){o.uniform3iv(this.addr,t)}function TT(o,t){o.uniform4iv(this.addr,t)}function AT(o,t){o.uniform1uiv(this.addr,t)}function RT(o,t){o.uniform2uiv(this.addr,t)}function CT(o,t){o.uniform3uiv(this.addr,t)}function wT(o,t){o.uniform4uiv(this.addr,t)}function DT(o,t,i){const r=this.cache,l=t.length,c=Zu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||tv,c[d])}function UT(o,t,i){const r=this.cache,l=t.length,c=Zu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||nv,c[d])}function LT(o,t,i){const r=this.cache,l=t.length,c=Zu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||iv,c[d])}function NT(o,t,i){const r=this.cache,l=t.length,c=Zu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||ev,c[d])}function OT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return bT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}class PT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class BT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class IT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function g0(o,t){o.seq.push(t),o.map[t.id]=t}function zT(o,t,i){const r=o.name,l=r.length;for(Bd.lastIndex=0;;){const c=Bd.exec(r),d=Bd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){g0(i,p===void 0?new PT(h,o,t):new BT(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new IT(h),g0(i,g)),i=g}}}class Hu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);zT(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function _0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const FT=37297;let HT=0;function GT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const v0=new pe;function VT(o){De._getMatrix(v0,De.workingColorSpace,o);const t=`mat3( ${v0.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Gu:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function x0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+GT(o.getShaderSource(t),h)}else return c}function kT(o,t){const i=VT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function XT(o,t){let i;switch(t){case Xy:i="Linear";break;case Wy:i="Reinhard";break;case qy:i="Cineon";break;case Yy:i="ACESFilmic";break;case Zy:i="AgX";break;case Ky:i="Neutral";break;case jy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pu=new et;function WT(){De.getLuminanceCoefficients(Pu);const o=Pu.x.toFixed(4),t=Pu.y.toFixed(4),i=Pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function YT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function jT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function ko(o){return o!==""}function y0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function S0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(ZT,QT)}const KT=new Map;function QT(o,t){let i=_e[t];if(i===void 0){const r=KT.get(t);if(r!==void 0)i=_e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Rh(i)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M0(o){return o.replace(JT,$T)}function $T(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function E0(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function tA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===C0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ey?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function eA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Cs:case ws:t="ENVMAP_TYPE_CUBE";break;case ju:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function iA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case w0:t="ENVMAP_BLENDING_MULTIPLY";break;case Vy:t="ENVMAP_BLENDING_MIX";break;case ky:t="ENVMAP_BLENDING_ADD";break}return t}function aA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function rA(o,t,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=tA(i),p=eA(i),v=nA(i),g=iA(i),y=aA(i),x=qT(i),E=YT(c),A=l.createProgram();let M,_,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ko).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(M=[E0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[E0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?_e.tonemapping_pars_fragment:"",i.toneMapping!==Ha?XT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,kT("linearToOutputTexel",i.outputColorSpace),WT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),d=Rh(d),d=y0(d,i),d=S0(d,i),h=Rh(h),h=y0(h,i),h=S0(h,i),d=M0(d),h=M0(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=F+M+d,w=F+_+h,O=_0(l,l.VERTEX_SHADER,C),G=_0(l,l.FRAGMENT_SHADER,w);l.attachShader(A,O),l.attachShader(A,G),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function V(X){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(A)||"",dt=l.getShaderInfoLog(O)||"",xt=l.getShaderInfoLog(G)||"",pt=rt.trim(),H=dt.trim(),J=xt.trim();let j=!0,bt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,O,G);else{const L=x0(l,O,"vertex"),it=x0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+pt+`
`+L+`
`+it)}else pt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pt):(H===""||J==="")&&(bt=!1);bt&&(X.diagnostics={runnable:j,programLog:pt,vertexShader:{log:H,prefix:M},fragmentShader:{log:J,prefix:_}})}l.deleteShader(O),l.deleteShader(G),W=new Hu(l,A),U=jT(l,A)}let W;this.getUniforms=function(){return W===void 0&&V(this),W};let U;this.getAttributes=function(){return U===void 0&&V(this),U};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(A,FT)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=O,this.fragmentShader=G,this}let sA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new lA(t),i.set(t,r)),r}}class lA{constructor(t){this.id=sA++,this.code=t,this.usedTimes=0}}function uA(o,t,i,r,l,c,d){const h=new Fh,m=new oA,p=new Set,v=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(U){return p.add(U),U===0?"uv":`uv${U}`}function M(U,D,X,rt,dt){const xt=rt.fog,pt=dt.geometry,H=U.isMeshStandardMaterial?rt.environment:null,J=(U.isMeshStandardMaterial?i:t).get(U.envMap||H),j=J&&J.mapping===ju?J.image.height:null,bt=E[U.type];U.precision!==null&&(x=l.getMaxPrecision(U.precision),x!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",x,"instead."));const L=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,it=L!==void 0?L.length:0;let Et=0;pt.morphAttributes.position!==void 0&&(Et=1),pt.morphAttributes.normal!==void 0&&(Et=2),pt.morphAttributes.color!==void 0&&(Et=3);let Tt,B,ot,I;if(bt){const Re=Ni[bt];Tt=Re.vertexShader,B=Re.fragmentShader}else Tt=U.vertexShader,B=U.fragmentShader,m.update(U),ot=m.getVertexShaderID(U),I=m.getFragmentShaderID(U);const Q=o.getRenderTarget(),ft=o.state.buffers.depth.getReversed(),At=dt.isInstancedMesh===!0,vt=dt.isBatchedMesh===!0,zt=!!U.map,kt=!!U.matcap,P=!!J,ce=!!U.aoMap,Wt=!!U.lightMap,Gt=!!U.bumpMap,Pt=!!U.normalMap,Le=!!U.displacementMap,Yt=!!U.emissiveMap,ue=!!U.metalnessMap,We=!!U.roughnessMap,qe=U.anisotropy>0,N=U.clearcoat>0,b=U.dispersion>0,at=U.iridescence>0,mt=U.sheen>0,yt=U.transmission>0,ht=qe&&!!U.anisotropyMap,Vt=N&&!!U.clearcoatMap,Ut=N&&!!U.clearcoatNormalMap,Qt=N&&!!U.clearcoatRoughnessMap,$t=at&&!!U.iridescenceMap,Rt=at&&!!U.iridescenceThicknessMap,It=mt&&!!U.sheenColorMap,ee=mt&&!!U.sheenRoughnessMap,Kt=!!U.specularMap,Ot=!!U.specularColorMap,fe=!!U.specularIntensityMap,q=yt&&!!U.transmissionMap,Dt=yt&&!!U.thicknessMap,Lt=!!U.gradientMap,Xt=!!U.alphaMap,Ct=U.alphaTest>0,Mt=!!U.alphaHash,Zt=!!U.extensions;let le=Ha;U.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(le=o.toneMapping);const Ne={shaderID:bt,shaderType:U.type,shaderName:U.name,vertexShader:Tt,fragmentShader:B,defines:U.defines,customVertexShaderID:ot,customFragmentShaderID:I,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:x,batching:vt,batchingColor:vt&&dt._colorsTexture!==null,instancing:At,instancingColor:At&&dt.instanceColor!==null,instancingMorph:At&&dt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Q===null?o.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ds,alphaToCoverage:!!U.alphaToCoverage,map:zt,matcap:kt,envMap:P,envMapMode:P&&J.mapping,envMapCubeUVHeight:j,aoMap:ce,lightMap:Wt,bumpMap:Gt,normalMap:Pt,displacementMap:y&&Le,emissiveMap:Yt,normalMapObjectSpace:Pt&&U.normalMapType===eS,normalMapTangentSpace:Pt&&U.normalMapType===tS,metalnessMap:ue,roughnessMap:We,anisotropy:qe,anisotropyMap:ht,clearcoat:N,clearcoatMap:Vt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Qt,dispersion:b,iridescence:at,iridescenceMap:$t,iridescenceThicknessMap:Rt,sheen:mt,sheenColorMap:It,sheenRoughnessMap:ee,specularMap:Kt,specularColorMap:Ot,specularIntensityMap:fe,transmission:yt,transmissionMap:q,thicknessMap:Dt,gradientMap:Lt,opaque:U.transparent===!1&&U.blending===Ts&&U.alphaToCoverage===!1,alphaMap:Xt,alphaTest:Ct,alphaHash:Mt,combine:U.combine,mapUv:zt&&A(U.map.channel),aoMapUv:ce&&A(U.aoMap.channel),lightMapUv:Wt&&A(U.lightMap.channel),bumpMapUv:Gt&&A(U.bumpMap.channel),normalMapUv:Pt&&A(U.normalMap.channel),displacementMapUv:Le&&A(U.displacementMap.channel),emissiveMapUv:Yt&&A(U.emissiveMap.channel),metalnessMapUv:ue&&A(U.metalnessMap.channel),roughnessMapUv:We&&A(U.roughnessMap.channel),anisotropyMapUv:ht&&A(U.anisotropyMap.channel),clearcoatMapUv:Vt&&A(U.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&A(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&A(U.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&A(U.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&A(U.iridescenceThicknessMap.channel),sheenColorMapUv:It&&A(U.sheenColorMap.channel),sheenRoughnessMapUv:ee&&A(U.sheenRoughnessMap.channel),specularMapUv:Kt&&A(U.specularMap.channel),specularColorMapUv:Ot&&A(U.specularColorMap.channel),specularIntensityMapUv:fe&&A(U.specularIntensityMap.channel),transmissionMapUv:q&&A(U.transmissionMap.channel),thicknessMapUv:Dt&&A(U.thicknessMap.channel),alphaMapUv:Xt&&A(U.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(Pt||qe),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:dt.isPoints===!0&&!!pt.attributes.uv&&(zt||Xt),fog:!!xt,useFog:U.fog===!0,fogExp2:!!xt&&xt.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ft,skinning:dt.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Et,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,decodeVideoTexture:zt&&U.map.isVideoTexture===!0&&De.getTransfer(U.map.colorSpace)===He,decodeVideoTextureEmissive:Yt&&U.emissiveMap.isVideoTexture===!0&&De.getTransfer(U.emissiveMap.colorSpace)===He,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Oi,flipSided:U.side===Xn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Zt&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&U.extensions.multiDraw===!0||vt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function _(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const X in U.defines)D.push(X),D.push(U.defines[X]);return U.isRawShaderMaterial===!1&&(F(D,U),C(D,U),D.push(o.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function F(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function C(U,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),U.push(h.mask)}function w(U){const D=E[U.type];let X;if(D){const rt=Ni[D];X=DS.clone(rt.uniforms)}else X=U.uniforms;return X}function O(U,D){let X;for(let rt=0,dt=v.length;rt<dt;rt++){const xt=v[rt];if(xt.cacheKey===D){X=xt,++X.usedTimes;break}}return X===void 0&&(X=new rA(o,D,U,c),v.push(X)),X}function G(U){if(--U.usedTimes===0){const D=v.indexOf(U);v[D]=v[v.length-1],v.pop(),U.destroy()}}function V(U){m.remove(U)}function W(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:w,acquireProgram:O,releaseProgram:G,releaseShaderCache:V,programs:v,dispose:W}}function cA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function fA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function b0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function T0(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(g,y,x,E,A,M){let _=o[t];return _===void 0?(_={id:g.id,object:g,geometry:y,material:x,groupOrder:E,renderOrder:g.renderOrder,z:A,group:M},o[t]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=x,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=A,_.group=M),t++,_}function h(g,y,x,E,A,M){const _=d(g,y,x,E,A,M);x.transmission>0?r.push(_):x.transparent===!0?l.push(_):i.push(_)}function m(g,y,x,E,A,M){const _=d(g,y,x,E,A,M);x.transmission>0?r.unshift(_):x.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,y){i.length>1&&i.sort(g||fA),r.length>1&&r.sort(y||b0),l.length>1&&l.sort(y||b0)}function v(){for(let g=t,y=o.length;g<y;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function dA(){let o=new WeakMap;function t(r,l){const c=o.get(r);let d;return c===void 0?(d=new T0,o.set(r,[d])):l>=c.length?(d=new T0,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function hA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new ye};break;case"SpotLight":i={position:new et,direction:new et,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new et,halfWidth:new et,halfHeight:new et};break}return o[t.id]=i,i}}}function pA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let mA=0;function gA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _A(o){const t=new hA,i=pA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new et);const l=new et,c=new je,d=new je;function h(p){let v=0,g=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,E=0,A=0,M=0,_=0,F=0,C=0,w=0,O=0,G=0,V=0;p.sort(gA);for(let U=0,D=p.length;U<D;U++){const X=p[U],rt=X.color,dt=X.intensity,xt=X.distance,pt=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)v+=rt.r*dt,g+=rt.g*dt,y+=rt.b*dt;else if(X.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(X.sh.coefficients[H],dt);V++}else if(X.isDirectionalLight){const H=t.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const J=X.shadow,j=i.get(X);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,r.directionalShadow[x]=j,r.directionalShadowMap[x]=pt,r.directionalShadowMatrix[x]=X.shadow.matrix,F++}r.directional[x]=H,x++}else if(X.isSpotLight){const H=t.get(X);H.position.setFromMatrixPosition(X.matrixWorld),H.color.copy(rt).multiplyScalar(dt),H.distance=xt,H.coneCos=Math.cos(X.angle),H.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),H.decay=X.decay,r.spot[A]=H;const J=X.shadow;if(X.map&&(r.spotLightMap[O]=X.map,O++,J.updateMatrices(X),X.castShadow&&G++),r.spotLightMatrix[A]=J.matrix,X.castShadow){const j=i.get(X);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,r.spotShadow[A]=j,r.spotShadowMap[A]=pt,w++}A++}else if(X.isRectAreaLight){const H=t.get(X);H.color.copy(rt).multiplyScalar(dt),H.halfWidth.set(X.width*.5,0,0),H.halfHeight.set(0,X.height*.5,0),r.rectArea[M]=H,M++}else if(X.isPointLight){const H=t.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity),H.distance=X.distance,H.decay=X.decay,X.castShadow){const J=X.shadow,j=i.get(X);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=pt,r.pointShadowMatrix[E]=X.shadow.matrix,C++}r.point[E]=H,E++}else if(X.isHemisphereLight){const H=t.get(X);H.skyColor.copy(X.color).multiplyScalar(dt),H.groundColor.copy(X.groundColor).multiplyScalar(dt),r.hemi[_]=H,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ht.LTC_FLOAT_1,r.rectAreaLTC2=Ht.LTC_FLOAT_2):(r.rectAreaLTC1=Ht.LTC_HALF_1,r.rectAreaLTC2=Ht.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==x||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==M||W.hemiLength!==_||W.numDirectionalShadows!==F||W.numPointShadows!==C||W.numSpotShadows!==w||W.numSpotMaps!==O||W.numLightProbes!==V)&&(r.directional.length=x,r.spot.length=A,r.rectArea.length=M,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+O-G,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=V,W.directionalLength=x,W.pointLength=E,W.spotLength=A,W.rectAreaLength=M,W.hemiLength=_,W.numDirectionalShadows=F,W.numPointShadows=C,W.numSpotShadows=w,W.numSpotMaps=O,W.numLightProbes=V,r.version=mA++)}function m(p,v){let g=0,y=0,x=0,E=0,A=0;const M=v.matrixWorldInverse;for(let _=0,F=p.length;_<F;_++){const C=p[_];if(C.isDirectionalLight){const w=r.directional[g];w.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),g++}else if(C.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),x++}else if(C.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(M),d.identity(),c.copy(C.matrixWorld),c.premultiply(M),d.extractRotation(c),w.halfWidth.set(C.width*.5,0,0),w.halfHeight.set(0,C.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),E++}else if(C.isPointLight){const w=r.point[y];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(M),y++}else if(C.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(C.matrixWorld),w.direction.transformDirection(M),A++}}}return{setup:h,setupView:m,state:r}}function A0(o){const t=new _A(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function d(v){r.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function vA(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new A0(o),t.set(l,[h])):c>=d.length?(h=new A0(o),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const xA=`void main() {
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
}`;function SA(o,t,i){let r=new Z0;const l=new be,c=new be,d=new rn,h=new YS({depthPacking:$y}),m=new jS,p={},v=i.maxTextureSize,g={[Va]:Xn,[Xn]:Va,[Oi]:Oi},y=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:xA,fragmentShader:yA}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new qn;E.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new zn(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0;let _=this.type;this.render=function(G,V,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const U=o.getRenderTarget(),D=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(Fa),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const dt=_!==aa&&this.type===aa,xt=_===aa&&this.type!==aa;for(let pt=0,H=G.length;pt<H;pt++){const J=G[pt],j=J.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const bt=j.getFrameExtents();if(l.multiply(bt),c.copy(j.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/bt.x),l.x=c.x*bt.x,j.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/bt.y),l.y=c.y*bt.y,j.mapSize.y=c.y)),j.map===null||dt===!0||xt===!0){const it=this.type!==aa?{minFilter:ni,magFilter:ni}:{};j.map!==null&&j.map.dispose(),j.map=new Sr(l.x,l.y,it),j.map.texture.name=J.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const L=j.getViewportCount();for(let it=0;it<L;it++){const Et=j.getViewport(it);d.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),rt.viewport(d),j.updateMatrices(J,it),r=j.getFrustum(),w(V,W,j.camera,J,this.type)}j.isPointLightShadow!==!0&&this.type===aa&&F(j,W),j.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(U,D,X)};function F(G,V){const W=t.update(A);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,x.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Sr(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(V,null,W,y,A,null),x.uniforms.shadow_pass.value=G.mapPass.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(V,null,W,x,A,null)}function C(G,V,W,U){let D=null;const X=W.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(X!==void 0)D=X;else if(D=W.isPointLight===!0?m:h,o.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const rt=D.uuid,dt=V.uuid;let xt=p[rt];xt===void 0&&(xt={},p[rt]=xt);let pt=xt[dt];pt===void 0&&(pt=D.clone(),xt[dt]=pt,V.addEventListener("dispose",O)),D=pt}if(D.visible=V.visible,D.wireframe=V.wireframe,U===aa?D.side=V.shadowSide!==null?V.shadowSide:V.side:D.side=V.shadowSide!==null?V.shadowSide:g[V.side],D.alphaMap=V.alphaMap,D.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,D.map=V.map,D.clipShadows=V.clipShadows,D.clippingPlanes=V.clippingPlanes,D.clipIntersection=V.clipIntersection,D.displacementMap=V.displacementMap,D.displacementScale=V.displacementScale,D.displacementBias=V.displacementBias,D.wireframeLinewidth=V.wireframeLinewidth,D.linewidth=V.linewidth,W.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const rt=o.properties.get(D);rt.light=W}return D}function w(G,V,W,U,D){if(G.visible===!1)return;if(G.layers.test(V.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&D===aa)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,G.matrixWorld);const dt=t.update(G),xt=G.material;if(Array.isArray(xt)){const pt=dt.groups;for(let H=0,J=pt.length;H<J;H++){const j=pt[H],bt=xt[j.materialIndex];if(bt&&bt.visible){const L=C(G,bt,U,D);G.onBeforeShadow(o,G,V,W,dt,L,j),o.renderBufferDirect(W,null,dt,L,G,j),G.onAfterShadow(o,G,V,W,dt,L,j)}}}else if(xt.visible){const pt=C(G,xt,U,D);G.onBeforeShadow(o,G,V,W,dt,pt,null),o.renderBufferDirect(W,null,dt,pt,G,null),G.onAfterShadow(o,G,V,W,dt,pt,null)}}const rt=G.children;for(let dt=0,xt=rt.length;dt<xt;dt++)w(rt[dt],V,W,U,D)}function O(G){G.target.removeEventListener("dispose",O);for(const W in p){const U=p[W],D=G.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const MA={[Fd]:Hd,[Gd]:Xd,[Vd]:Wd,[Rs]:kd,[Hd]:Fd,[Xd]:Gd,[Wd]:Vd,[kd]:Rs};function EA(o,t){function i(){let q=!1;const Dt=new rn;let Lt=null;const Xt=new rn(0,0,0,0);return{setMask:function(Ct){Lt!==Ct&&!q&&(o.colorMask(Ct,Ct,Ct,Ct),Lt=Ct)},setLocked:function(Ct){q=Ct},setClear:function(Ct,Mt,Zt,le,Ne){Ne===!0&&(Ct*=le,Mt*=le,Zt*=le),Dt.set(Ct,Mt,Zt,le),Xt.equals(Dt)===!1&&(o.clearColor(Ct,Mt,Zt,le),Xt.copy(Dt))},reset:function(){q=!1,Lt=null,Xt.set(-1,0,0,0)}}}function r(){let q=!1,Dt=!1,Lt=null,Xt=null,Ct=null;return{setReversed:function(Mt){if(Dt!==Mt){const Zt=t.get("EXT_clip_control");Mt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Dt=Mt;const le=Ct;Ct=null,this.setClear(le)}},getReversed:function(){return Dt},setTest:function(Mt){Mt?Q(o.DEPTH_TEST):ft(o.DEPTH_TEST)},setMask:function(Mt){Lt!==Mt&&!q&&(o.depthMask(Mt),Lt=Mt)},setFunc:function(Mt){if(Dt&&(Mt=MA[Mt]),Xt!==Mt){switch(Mt){case Fd:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Gd:o.depthFunc(o.LESS);break;case Rs:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case kd:o.depthFunc(o.GEQUAL);break;case Xd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xt=Mt}},setLocked:function(Mt){q=Mt},setClear:function(Mt){Ct!==Mt&&(Dt&&(Mt=1-Mt),o.clearDepth(Mt),Ct=Mt)},reset:function(){q=!1,Lt=null,Xt=null,Ct=null,Dt=!1}}}function l(){let q=!1,Dt=null,Lt=null,Xt=null,Ct=null,Mt=null,Zt=null,le=null,Ne=null;return{setTest:function(Re){q||(Re?Q(o.STENCIL_TEST):ft(o.STENCIL_TEST))},setMask:function(Re){Dt!==Re&&!q&&(o.stencilMask(Re),Dt=Re)},setFunc:function(Re,hi,cn){(Lt!==Re||Xt!==hi||Ct!==cn)&&(o.stencilFunc(Re,hi,cn),Lt=Re,Xt=hi,Ct=cn)},setOp:function(Re,hi,cn){(Mt!==Re||Zt!==hi||le!==cn)&&(o.stencilOp(Re,hi,cn),Mt=Re,Zt=hi,le=cn)},setLocked:function(Re){q=Re},setClear:function(Re){Ne!==Re&&(o.clearStencil(Re),Ne=Re)},reset:function(){q=!1,Dt=null,Lt=null,Xt=null,Ct=null,Mt=null,Zt=null,le=null,Ne=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},y=new WeakMap,x=[],E=null,A=!1,M=null,_=null,F=null,C=null,w=null,O=null,G=null,V=new ye(0,0,0),W=0,U=!1,D=null,X=null,rt=null,dt=null,xt=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=J>=2);let bt=null,L={};const it=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),Tt=new rn().fromArray(it),B=new rn().fromArray(Et);function ot(q,Dt,Lt,Xt){const Ct=new Uint8Array(4),Mt=o.createTexture();o.bindTexture(q,Mt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Zt=0;Zt<Lt;Zt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Dt+Zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Mt}const I={};I[o.TEXTURE_2D]=ot(o.TEXTURE_2D,o.TEXTURE_2D,1),I[o.TEXTURE_CUBE_MAP]=ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[o.TEXTURE_2D_ARRAY]=ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),I[o.TEXTURE_3D]=ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Q(o.DEPTH_TEST),d.setFunc(Rs),Gt(!1),Pt(b_),Q(o.CULL_FACE),ce(Fa);function Q(q){v[q]!==!0&&(o.enable(q),v[q]=!0)}function ft(q){v[q]!==!1&&(o.disable(q),v[q]=!1)}function At(q,Dt){return g[q]!==Dt?(o.bindFramebuffer(q,Dt),g[q]=Dt,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Dt),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function vt(q,Dt){let Lt=x,Xt=!1;if(q){Lt=y.get(Dt),Lt===void 0&&(Lt=[],y.set(Dt,Lt));const Ct=q.textures;if(Lt.length!==Ct.length||Lt[0]!==o.COLOR_ATTACHMENT0){for(let Mt=0,Zt=Ct.length;Mt<Zt;Mt++)Lt[Mt]=o.COLOR_ATTACHMENT0+Mt;Lt.length=Ct.length,Xt=!0}}else Lt[0]!==o.BACK&&(Lt[0]=o.BACK,Xt=!0);Xt&&o.drawBuffers(Lt)}function zt(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const kt={[mr]:o.FUNC_ADD,[Ty]:o.FUNC_SUBTRACT,[Ay]:o.FUNC_REVERSE_SUBTRACT};kt[Ry]=o.MIN,kt[Cy]=o.MAX;const P={[wy]:o.ZERO,[Dy]:o.ONE,[Uy]:o.SRC_COLOR,[Id]:o.SRC_ALPHA,[Iy]:o.SRC_ALPHA_SATURATE,[Py]:o.DST_COLOR,[Ny]:o.DST_ALPHA,[Ly]:o.ONE_MINUS_SRC_COLOR,[zd]:o.ONE_MINUS_SRC_ALPHA,[By]:o.ONE_MINUS_DST_COLOR,[Oy]:o.ONE_MINUS_DST_ALPHA,[zy]:o.CONSTANT_COLOR,[Fy]:o.ONE_MINUS_CONSTANT_COLOR,[Hy]:o.CONSTANT_ALPHA,[Gy]:o.ONE_MINUS_CONSTANT_ALPHA};function ce(q,Dt,Lt,Xt,Ct,Mt,Zt,le,Ne,Re){if(q===Fa){A===!0&&(ft(o.BLEND),A=!1);return}if(A===!1&&(Q(o.BLEND),A=!0),q!==by){if(q!==M||Re!==U){if((_!==mr||w!==mr)&&(o.blendEquation(o.FUNC_ADD),_=mr,w=mr),Re)switch(q){case Ts:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case T_:o.blendFunc(o.ONE,o.ONE);break;case A_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case R_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ts:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case T_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case A_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}F=null,C=null,O=null,G=null,V.set(0,0,0),W=0,M=q,U=Re}return}Ct=Ct||Dt,Mt=Mt||Lt,Zt=Zt||Xt,(Dt!==_||Ct!==w)&&(o.blendEquationSeparate(kt[Dt],kt[Ct]),_=Dt,w=Ct),(Lt!==F||Xt!==C||Mt!==O||Zt!==G)&&(o.blendFuncSeparate(P[Lt],P[Xt],P[Mt],P[Zt]),F=Lt,C=Xt,O=Mt,G=Zt),(le.equals(V)===!1||Ne!==W)&&(o.blendColor(le.r,le.g,le.b,Ne),V.copy(le),W=Ne),M=q,U=!1}function Wt(q,Dt){q.side===Oi?ft(o.CULL_FACE):Q(o.CULL_FACE);let Lt=q.side===Xn;Dt&&(Lt=!Lt),Gt(Lt),q.blending===Ts&&q.transparent===!1?ce(Fa):ce(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),c.setMask(q.colorWrite);const Xt=q.stencilWrite;h.setTest(Xt),Xt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Yt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Q(o.SAMPLE_ALPHA_TO_COVERAGE):ft(o.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(q){D!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),D=q)}function Pt(q){q!==Sy?(Q(o.CULL_FACE),q!==X&&(q===b_?o.cullFace(o.BACK):q===My?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ft(o.CULL_FACE),X=q}function Le(q){q!==rt&&(H&&o.lineWidth(q),rt=q)}function Yt(q,Dt,Lt){q?(Q(o.POLYGON_OFFSET_FILL),(dt!==Dt||xt!==Lt)&&(o.polygonOffset(Dt,Lt),dt=Dt,xt=Lt)):ft(o.POLYGON_OFFSET_FILL)}function ue(q){q?Q(o.SCISSOR_TEST):ft(o.SCISSOR_TEST)}function We(q){q===void 0&&(q=o.TEXTURE0+pt-1),bt!==q&&(o.activeTexture(q),bt=q)}function qe(q,Dt,Lt){Lt===void 0&&(bt===null?Lt=o.TEXTURE0+pt-1:Lt=bt);let Xt=L[Lt];Xt===void 0&&(Xt={type:void 0,texture:void 0},L[Lt]=Xt),(Xt.type!==q||Xt.texture!==Dt)&&(bt!==Lt&&(o.activeTexture(Lt),bt=Lt),o.bindTexture(q,Dt||I[q]),Xt.type=q,Xt.texture=Dt)}function N(){const q=L[bt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function at(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function mt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function yt(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Vt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $t(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function It(q){Tt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),Tt.copy(q))}function ee(q){B.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),B.copy(q))}function Kt(q,Dt){let Lt=p.get(Dt);Lt===void 0&&(Lt=new WeakMap,p.set(Dt,Lt));let Xt=Lt.get(q);Xt===void 0&&(Xt=o.getUniformBlockIndex(Dt,q.name),Lt.set(q,Xt))}function Ot(q,Dt){const Xt=p.get(Dt).get(q);m.get(Dt)!==Xt&&(o.uniformBlockBinding(Dt,Xt,q.__bindingPointIndex),m.set(Dt,Xt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},bt=null,L={},g={},y=new WeakMap,x=[],E=null,A=!1,M=null,_=null,F=null,C=null,w=null,O=null,G=null,V=new ye(0,0,0),W=0,U=!1,D=null,X=null,rt=null,dt=null,xt=null,Tt.set(0,0,o.canvas.width,o.canvas.height),B.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Q,disable:ft,bindFramebuffer:At,drawBuffers:vt,useProgram:zt,setBlending:ce,setMaterial:Wt,setFlipSided:Gt,setCullFace:Pt,setLineWidth:Le,setPolygonOffset:Yt,setScissorTest:ue,activeTexture:We,bindTexture:qe,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:at,texImage2D:$t,texImage3D:Rt,updateUBOMapping:Kt,uniformBlockBinding:Ot,texStorage2D:Ut,texStorage3D:Qt,texSubImage2D:mt,texSubImage3D:yt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Vt,scissor:It,viewport:ee,reset:fe}}function bA(o,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new be,v=new WeakMap;let g;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return x?new OffscreenCanvas(N,b):ku("canvas")}function A(N,b,at){let mt=1;const yt=qe(N);if((yt.width>at||yt.height>at)&&(mt=at/Math.max(yt.width,yt.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ht=Math.floor(mt*yt.width),Vt=Math.floor(mt*yt.height);g===void 0&&(g=E(ht,Vt));const Ut=b?E(ht,Vt):g;return Ut.width=ht,Ut.height=Vt,Ut.getContext("2d").drawImage(N,0,0,ht,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ht+"x"+Vt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),N;return N}function M(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function F(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(N,b,at,mt,yt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ht=b;if(b===o.RED&&(at===o.FLOAT&&(ht=o.R32F),at===o.HALF_FLOAT&&(ht=o.R16F),at===o.UNSIGNED_BYTE&&(ht=o.R8)),b===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(ht=o.R8UI),at===o.UNSIGNED_SHORT&&(ht=o.R16UI),at===o.UNSIGNED_INT&&(ht=o.R32UI),at===o.BYTE&&(ht=o.R8I),at===o.SHORT&&(ht=o.R16I),at===o.INT&&(ht=o.R32I)),b===o.RG&&(at===o.FLOAT&&(ht=o.RG32F),at===o.HALF_FLOAT&&(ht=o.RG16F),at===o.UNSIGNED_BYTE&&(ht=o.RG8)),b===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(ht=o.RG8UI),at===o.UNSIGNED_SHORT&&(ht=o.RG16UI),at===o.UNSIGNED_INT&&(ht=o.RG32UI),at===o.BYTE&&(ht=o.RG8I),at===o.SHORT&&(ht=o.RG16I),at===o.INT&&(ht=o.RG32I)),b===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),at===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),at===o.UNSIGNED_INT&&(ht=o.RGB32UI),at===o.BYTE&&(ht=o.RGB8I),at===o.SHORT&&(ht=o.RGB16I),at===o.INT&&(ht=o.RGB32I)),b===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),at===o.UNSIGNED_INT&&(ht=o.RGBA32UI),at===o.BYTE&&(ht=o.RGBA8I),at===o.SHORT&&(ht=o.RGBA16I),at===o.INT&&(ht=o.RGBA32I)),b===o.RGB&&(at===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),at===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),b===o.RGBA){const Vt=yt?Gu:De.getTransfer(mt);at===o.FLOAT&&(ht=o.RGBA32F),at===o.HALF_FLOAT&&(ht=o.RGBA16F),at===o.UNSIGNED_BYTE&&(ht=Vt===He?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function w(N,b){let at;return N?b===null||b===yr||b===Wo?at=o.DEPTH24_STENCIL8:b===Bi?at=o.DEPTH32F_STENCIL8:b===Xo&&(at=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yr||b===Wo?at=o.DEPTH_COMPONENT24:b===Bi?at=o.DEPTH_COMPONENT32F:b===Xo&&(at=o.DEPTH_COMPONENT16),at}function O(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==ni&&N.minFilter!==Mi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function G(N){const b=N.target;b.removeEventListener("dispose",G),W(b),b.isVideoTexture&&v.delete(b)}function V(N){const b=N.target;b.removeEventListener("dispose",V),D(b)}function W(N){const b=r.get(N);if(b.__webglInit===void 0)return;const at=N.source,mt=y.get(at);if(mt){const yt=mt[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&U(N),Object.keys(mt).length===0&&y.delete(at)}r.remove(N)}function U(N){const b=r.get(N);o.deleteTexture(b.__webglTexture);const at=N.source,mt=y.get(at);delete mt[b.__cacheKey],d.memory.textures--}function D(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let yt=0;yt<b.__webglFramebuffer[mt].length;yt++)o.deleteFramebuffer(b.__webglFramebuffer[mt][yt]);else o.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)o.deleteFramebuffer(b.__webglFramebuffer[mt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const at=N.textures;for(let mt=0,yt=at.length;mt<yt;mt++){const ht=r.get(at[mt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),d.memory.textures--),r.remove(at[mt])}r.remove(N)}let X=0;function rt(){X=0}function dt(){const N=X;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),X+=1,N}function xt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function pt(N,b){const at=r.get(N);if(N.isVideoTexture&&ue(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&at.__version!==N.version){const mt=N.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(at,N,b);return}}else N.isExternalTexture&&(at.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+b)}function H(N,b){const at=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){I(at,N,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+b)}function J(N,b){const at=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){I(at,N,b);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+b)}function j(N,b){const at=r.get(N);if(N.version>0&&at.__version!==N.version){Q(at,N,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+b)}const bt={[jd]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[Zd]:o.MIRRORED_REPEAT},L={[ni]:o.NEAREST,[Qy]:o.NEAREST_MIPMAP_NEAREST,[uu]:o.NEAREST_MIPMAP_LINEAR,[Mi]:o.LINEAR,[ad]:o.LINEAR_MIPMAP_NEAREST,[xr]:o.LINEAR_MIPMAP_LINEAR},it={[nS]:o.NEVER,[lS]:o.ALWAYS,[iS]:o.LESS,[z0]:o.LEQUAL,[aS]:o.EQUAL,[oS]:o.GEQUAL,[rS]:o.GREATER,[sS]:o.NOTEQUAL};function Et(N,b){if(b.type===Bi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Mi||b.magFilter===ad||b.magFilter===uu||b.magFilter===xr||b.minFilter===Mi||b.minFilter===ad||b.minFilter===uu||b.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,bt[b.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,bt[b.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,bt[b.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,L[b.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,it[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ni||b.minFilter!==uu&&b.minFilter!==xr||b.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Tt(N,b){let at=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",G));const mt=b.source;let yt=y.get(mt);yt===void 0&&(yt={},y.set(mt,yt));const ht=xt(b);if(ht!==N.__cacheKey){yt[ht]===void 0&&(yt[ht]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,at=!0),yt[ht].usedTimes++;const Vt=yt[N.__cacheKey];Vt!==void 0&&(yt[N.__cacheKey].usedTimes--,Vt.usedTimes===0&&U(b)),N.__cacheKey=ht,N.__webglTexture=yt[ht].texture}return at}function B(N,b,at){return Math.floor(Math.floor(N/at)/b)}function ot(N,b,at,mt){const ht=N.updateRanges;if(ht.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,at,mt,b.data);else{ht.sort((Rt,It)=>Rt.start-It.start);let Vt=0;for(let Rt=1;Rt<ht.length;Rt++){const It=ht[Vt],ee=ht[Rt],Kt=It.start+It.count,Ot=B(ee.start,b.width,4),fe=B(It.start,b.width,4);ee.start<=Kt+1&&Ot===fe&&B(ee.start+ee.count-1,b.width,4)===Ot?It.count=Math.max(It.count,ee.start+ee.count-It.start):(++Vt,ht[Vt]=ee)}ht.length=Vt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),$t=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Rt=0,It=ht.length;Rt<It;Rt++){const ee=ht[Rt],Kt=Math.floor(ee.start/4),Ot=Math.ceil(ee.count/4),fe=Kt%b.width,q=Math.floor(Kt/b.width),Dt=Ot,Lt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,fe,q,Dt,Lt,at,mt,b.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,$t)}}function I(N,b,at){let mt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=o.TEXTURE_3D);const yt=Tt(N,b),ht=b.source;i.bindTexture(mt,N.__webglTexture,o.TEXTURE0+at);const Vt=r.get(ht);if(ht.version!==Vt.__version||yt===!0){i.activeTexture(o.TEXTURE0+at);const Ut=De.getPrimaries(De.workingColorSpace),Qt=b.colorSpace===za?null:De.getPrimaries(b.colorSpace),$t=b.colorSpace===za||Ut===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Rt=A(b.image,!1,l.maxTextureSize);Rt=We(b,Rt);const It=c.convert(b.format,b.colorSpace),ee=c.convert(b.type);let Kt=C(b.internalFormat,It,ee,b.colorSpace,b.isVideoTexture);Et(mt,b);let Ot;const fe=b.mipmaps,q=b.isVideoTexture!==!0,Dt=Vt.__version===void 0||yt===!0,Lt=ht.dataReady,Xt=O(b,Rt);if(b.isDepthTexture)Kt=w(b.format===Yo,b.type),Dt&&(q?i.texStorage2D(o.TEXTURE_2D,1,Kt,Rt.width,Rt.height):i.texImage2D(o.TEXTURE_2D,0,Kt,Rt.width,Rt.height,0,It,ee,null));else if(b.isDataTexture)if(fe.length>0){q&&Dt&&i.texStorage2D(o.TEXTURE_2D,Xt,Kt,fe[0].width,fe[0].height);for(let Ct=0,Mt=fe.length;Ct<Mt;Ct++)Ot=fe[Ct],q?Lt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Ot.width,Ot.height,It,ee,Ot.data):i.texImage2D(o.TEXTURE_2D,Ct,Kt,Ot.width,Ot.height,0,It,ee,Ot.data);b.generateMipmaps=!1}else q?(Dt&&i.texStorage2D(o.TEXTURE_2D,Xt,Kt,Rt.width,Rt.height),Lt&&ot(b,Rt,It,ee)):i.texImage2D(o.TEXTURE_2D,0,Kt,Rt.width,Rt.height,0,It,ee,Rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Kt,fe[0].width,fe[0].height,Rt.depth);for(let Ct=0,Mt=fe.length;Ct<Mt;Ct++)if(Ot=fe[Ct],b.format!==Ei)if(It!==null)if(q){if(Lt)if(b.layerUpdates.size>0){const Zt=n0(Ot.width,Ot.height,b.format,b.type);for(const le of b.layerUpdates){const Ne=Ot.data.subarray(le*Zt/Ot.data.BYTES_PER_ELEMENT,(le+1)*Zt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,le,Ot.width,Ot.height,1,It,Ne)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Ot.width,Ot.height,Rt.depth,It,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ct,Kt,Ot.width,Ot.height,Rt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Lt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Ot.width,Ot.height,Rt.depth,It,ee,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ct,Kt,Ot.width,Ot.height,Rt.depth,0,It,ee,Ot.data)}else{q&&Dt&&i.texStorage2D(o.TEXTURE_2D,Xt,Kt,fe[0].width,fe[0].height);for(let Ct=0,Mt=fe.length;Ct<Mt;Ct++)Ot=fe[Ct],b.format!==Ei?It!==null?q?Lt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ct,0,0,Ot.width,Ot.height,It,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,Ct,Kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Lt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Ot.width,Ot.height,It,ee,Ot.data):i.texImage2D(o.TEXTURE_2D,Ct,Kt,Ot.width,Ot.height,0,It,ee,Ot.data)}else if(b.isDataArrayTexture)if(q){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Kt,Rt.width,Rt.height,Rt.depth),Lt)if(b.layerUpdates.size>0){const Ct=n0(Rt.width,Rt.height,b.format,b.type);for(const Mt of b.layerUpdates){const Zt=Rt.data.subarray(Mt*Ct/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*Ct/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Mt,Rt.width,Rt.height,1,It,ee,Zt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,It,ee,Rt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,Rt.width,Rt.height,Rt.depth,0,It,ee,Rt.data);else if(b.isData3DTexture)q?(Dt&&i.texStorage3D(o.TEXTURE_3D,Xt,Kt,Rt.width,Rt.height,Rt.depth),Lt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,It,ee,Rt.data)):i.texImage3D(o.TEXTURE_3D,0,Kt,Rt.width,Rt.height,Rt.depth,0,It,ee,Rt.data);else if(b.isFramebufferTexture){if(Dt)if(q)i.texStorage2D(o.TEXTURE_2D,Xt,Kt,Rt.width,Rt.height);else{let Ct=Rt.width,Mt=Rt.height;for(let Zt=0;Zt<Xt;Zt++)i.texImage2D(o.TEXTURE_2D,Zt,Kt,Ct,Mt,0,It,ee,null),Ct>>=1,Mt>>=1}}else if(fe.length>0){if(q&&Dt){const Ct=qe(fe[0]);i.texStorage2D(o.TEXTURE_2D,Xt,Kt,Ct.width,Ct.height)}for(let Ct=0,Mt=fe.length;Ct<Mt;Ct++)Ot=fe[Ct],q?Lt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,It,ee,Ot):i.texImage2D(o.TEXTURE_2D,Ct,Kt,It,ee,Ot);b.generateMipmaps=!1}else if(q){if(Dt){const Ct=qe(Rt);i.texStorage2D(o.TEXTURE_2D,Xt,Kt,Ct.width,Ct.height)}Lt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,ee,Rt)}else i.texImage2D(o.TEXTURE_2D,0,Kt,It,ee,Rt);M(b)&&_(mt),Vt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Q(N,b,at){if(b.image.length!==6)return;const mt=Tt(N,b),yt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+at);const ht=r.get(yt);if(yt.version!==ht.__version||mt===!0){i.activeTexture(o.TEXTURE0+at);const Vt=De.getPrimaries(De.workingColorSpace),Ut=b.colorSpace===za?null:De.getPrimaries(b.colorSpace),Qt=b.colorSpace===za||Vt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const $t=b.isCompressedTexture||b.image[0].isCompressedTexture,Rt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let Mt=0;Mt<6;Mt++)!$t&&!Rt?It[Mt]=A(b.image[Mt],!0,l.maxCubemapSize):It[Mt]=Rt?b.image[Mt].image:b.image[Mt],It[Mt]=We(b,It[Mt]);const ee=It[0],Kt=c.convert(b.format,b.colorSpace),Ot=c.convert(b.type),fe=C(b.internalFormat,Kt,Ot,b.colorSpace),q=b.isVideoTexture!==!0,Dt=ht.__version===void 0||mt===!0,Lt=yt.dataReady;let Xt=O(b,ee);Et(o.TEXTURE_CUBE_MAP,b);let Ct;if($t){q&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,fe,ee.width,ee.height);for(let Mt=0;Mt<6;Mt++){Ct=It[Mt].mipmaps;for(let Zt=0;Zt<Ct.length;Zt++){const le=Ct[Zt];b.format!==Ei?Kt!==null?q?Lt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,0,0,le.width,le.height,Kt,le.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,fe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,0,0,le.width,le.height,Kt,Ot,le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,fe,le.width,le.height,0,Kt,Ot,le.data)}}}else{if(Ct=b.mipmaps,q&&Dt){Ct.length>0&&Xt++;const Mt=qe(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,fe,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Rt){q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,It[Mt].width,It[Mt].height,Kt,Ot,It[Mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,fe,It[Mt].width,It[Mt].height,0,Kt,Ot,It[Mt].data);for(let Zt=0;Zt<Ct.length;Zt++){const Ne=Ct[Zt].image[Mt].image;q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,0,0,Ne.width,Ne.height,Kt,Ot,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,fe,Ne.width,Ne.height,0,Kt,Ot,Ne.data)}}else{q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Kt,Ot,It[Mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,fe,Kt,Ot,It[Mt]);for(let Zt=0;Zt<Ct.length;Zt++){const le=Ct[Zt];q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,0,0,Kt,Ot,le.image[Mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,fe,Kt,Ot,le.image[Mt])}}}M(b)&&_(o.TEXTURE_CUBE_MAP),ht.__version=yt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ft(N,b,at,mt,yt,ht){const Vt=c.convert(at.format,at.colorSpace),Ut=c.convert(at.type),Qt=C(at.internalFormat,Vt,Ut,at.colorSpace),$t=r.get(b),Rt=r.get(at);if(Rt.__renderTarget=b,!$t.__hasExternalTextures){const It=Math.max(1,b.width>>ht),ee=Math.max(1,b.height>>ht);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,ht,Qt,It,ee,b.depth,0,Vt,Ut,null):i.texImage2D(yt,ht,Qt,It,ee,0,Vt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Yt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,yt,Rt.__webglTexture,0,Le(b)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,yt,Rt.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function At(N,b,at){if(o.bindRenderbuffer(o.RENDERBUFFER,N),b.depthBuffer){const mt=b.depthTexture,yt=mt&&mt.isDepthTexture?mt.type:null,ht=w(b.stencilBuffer,yt),Vt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Le(b);Yt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ht,b.width,b.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ht,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ht,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,N)}else{const mt=b.textures;for(let yt=0;yt<mt.length;yt++){const ht=mt[yt],Vt=c.convert(ht.format,ht.colorSpace),Ut=c.convert(ht.type),Qt=C(ht.internalFormat,Vt,Ut,ht.colorSpace),$t=Le(b);at&&Yt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,Qt,b.width,b.height):Yt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$t,Qt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function vt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(b.depthTexture);mt.__renderTarget=b,(!mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pt(b.depthTexture,0);const yt=mt.__webglTexture,ht=Le(b);if(b.depthTexture.format===qo)Yt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(b.depthTexture.format===Yo)Yt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function zt(N){const b=r.get(N),at=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",yt)};mt.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=mt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const mt=N.texture.mipmaps;mt&&mt.length>0?vt(b.__webglFramebuffer[0],N):vt(b.__webglFramebuffer,N)}else if(at){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=o.createRenderbuffer(),At(b.__webglDepthbuffer[mt],N,!1);else{const yt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ht)}}else{const mt=N.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),At(b.__webglDepthbuffer,N,!1);else{const yt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(N,b,at){const mt=r.get(N);b!==void 0&&ft(mt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&zt(N)}function P(N){const b=N.texture,at=r.get(N),mt=r.get(b);N.addEventListener("dispose",V);const yt=N.textures,ht=N.isWebGLCubeRenderTarget===!0,Vt=yt.length>1;if(Vt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=b.version,d.memory.textures++),ht){at.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){at.__webglFramebuffer[Ut]=[];for(let Qt=0;Qt<b.mipmaps.length;Qt++)at.__webglFramebuffer[Ut][Qt]=o.createFramebuffer()}else at.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){at.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)at.__webglFramebuffer[Ut]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let Ut=0,Qt=yt.length;Ut<Qt;Ut++){const $t=r.get(yt[Ut]);$t.__webglTexture===void 0&&($t.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&Yt(N)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Ut=0;Ut<yt.length;Ut++){const Qt=yt[Ut];at.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[Ut]);const $t=c.convert(Qt.format,Qt.colorSpace),Rt=c.convert(Qt.type),It=C(Qt.internalFormat,$t,Rt,Qt.colorSpace,N.isXRRenderTarget===!0),ee=Le(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,It,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,at.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),At(at.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),Et(o.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)ft(at.__webglFramebuffer[Ut][Qt],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt);else ft(at.__webglFramebuffer[Ut],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(b)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Ut=0,Qt=yt.length;Ut<Qt;Ut++){const $t=yt[Ut],Rt=r.get($t);let It=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(It=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,Rt.__webglTexture),Et(It,$t),ft(at.__webglFramebuffer,N,$t,o.COLOR_ATTACHMENT0+Ut,It,0),M($t)&&_(It)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,mt.__webglTexture),Et(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)ft(at.__webglFramebuffer[Qt],N,b,o.COLOR_ATTACHMENT0,Ut,Qt);else ft(at.__webglFramebuffer,N,b,o.COLOR_ATTACHMENT0,Ut,0);M(b)&&_(Ut),i.unbindTexture()}N.depthBuffer&&zt(N)}function ce(N){const b=N.textures;for(let at=0,mt=b.length;at<mt;at++){const yt=b[at];if(M(yt)){const ht=F(N),Vt=r.get(yt).__webglTexture;i.bindTexture(ht,Vt),_(ht),i.unbindTexture()}}}const Wt=[],Gt=[];function Pt(N){if(N.samples>0){if(Yt(N)===!1){const b=N.textures,at=N.width,mt=N.height;let yt=o.COLOR_BUFFER_BIT;const ht=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=r.get(N),Ut=b.length>1;if(Ut)for(let $t=0;$t<b.length;$t++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const Qt=N.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let $t=0;$t<b.length;$t++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[$t]);const Rt=r.get(b[$t]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,at,mt,0,0,at,mt,yt,o.NEAREST),m===!0&&(Wt.length=0,Gt.length=0,Wt.push(o.COLOR_ATTACHMENT0+$t),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Wt.push(ht),Gt.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Gt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Wt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let $t=0;$t<b.length;$t++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[$t]);const Rt=r.get(b[$t]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,Rt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Le(N){return Math.min(l.maxSamples,N.samples)}function Yt(N){const b=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ue(N){const b=d.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function We(N,b){const at=N.colorSpace,mt=N.format,yt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||at!==Ds&&at!==za&&(De.getTransfer(at)===He?(mt!==Ei||yt!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),b}function qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=dt,this.resetTextureUnits=rt,this.setTexture2D=pt,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=kt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Yt}function TA(o,t){function i(r,l=za){let c;const d=De.getTransfer(l);if(r===sa)return o.UNSIGNED_BYTE;if(r===Uh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Lh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===N0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===O0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===U0)return o.BYTE;if(r===L0)return o.SHORT;if(r===Xo)return o.UNSIGNED_SHORT;if(r===Dh)return o.INT;if(r===yr)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===Ko)return o.HALF_FLOAT;if(r===P0)return o.ALPHA;if(r===B0)return o.RGB;if(r===Ei)return o.RGBA;if(r===qo)return o.DEPTH_COMPONENT;if(r===Yo)return o.DEPTH_STENCIL;if(r===Nh)return o.RED;if(r===Oh)return o.RED_INTEGER;if(r===I0)return o.RG;if(r===Ph)return o.RG_INTEGER;if(r===Bh)return o.RGBA_INTEGER;if(r===Bu||r===Iu||r===zu||r===Fu)if(d===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Bu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Bu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Kd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===th||r===eh||r===nh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===th||r===eh)return d===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===nh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===uh||r===ch||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ih)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ch)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_h||r===vh||r===xh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===_h)return d===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yh||r===Sh||r===Mh||r===Eh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===yh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Sh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const AA=`
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

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Q0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ka({vertexShader:AA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zn(new $o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wA extends Ls{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,y=null,x=null,E=null;const A=typeof XRWebGLBinding<"u",M=new CA,_={},F=i.getContextAttributes();let C=null,w=null;const O=[],G=[],V=new be;let W=null;const U=new Si;U.viewport=new rn;const D=new Si;D.viewport=new rn;const X=[U,D],rt=new ZS;let dt=null,xt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let Q=O[I];return Q===void 0&&(Q=new Rd,O[I]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(I){let Q=O[I];return Q===void 0&&(Q=new Rd,O[I]=Q),Q.getGripSpace()},this.getHand=function(I){let Q=O[I];return Q===void 0&&(Q=new Rd,O[I]=Q),Q.getHandSpace()};function pt(I){const Q=G.indexOf(I.inputSource);if(Q===-1)return;const ft=O[Q];ft!==void 0&&(ft.update(I.inputSource,I.frame,p||d),ft.dispatchEvent({type:I.type,data:I.inputSource}))}function H(){l.removeEventListener("select",pt),l.removeEventListener("selectstart",pt),l.removeEventListener("selectend",pt),l.removeEventListener("squeeze",pt),l.removeEventListener("squeezestart",pt),l.removeEventListener("squeezeend",pt),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",J);for(let I=0;I<O.length;I++){const Q=G[I];Q!==null&&(G[I]=null,O[I].disconnect(Q))}dt=null,xt=null,M.reset();for(const I in _)delete _[I];t.setRenderTarget(C),x=null,y=null,g=null,l=null,w=null,ot.stop(),r.isPresenting=!1,t.setPixelRatio(W),t.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){c=I,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){h=I,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(I){p=I},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(I){if(l=I,l!==null){if(C=t.getRenderTarget(),l.addEventListener("select",pt),l.addEventListener("selectstart",pt),l.addEventListener("selectend",pt),l.addEventListener("squeeze",pt),l.addEventListener("squeezestart",pt),l.addEventListener("squeezeend",pt),l.addEventListener("end",H),l.addEventListener("inputsourceschange",J),F.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(V),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,At=null,vt=null;F.depth&&(vt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=F.stencil?Yo:qo,At=F.stencil?Wo:yr);const zt={colorFormat:i.RGBA8,depthFormat:vt,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(zt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),w=new Sr(y.textureWidth,y.textureHeight,{format:Ei,type:sa,depthTexture:new K0(y.textureWidth,y.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ft={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Sr(x.framebufferWidth,x.framebufferHeight,{format:Ei,type:sa,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),ot.setContext(l),ot.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function J(I){for(let Q=0;Q<I.removed.length;Q++){const ft=I.removed[Q],At=G.indexOf(ft);At>=0&&(G[At]=null,O[At].disconnect(ft))}for(let Q=0;Q<I.added.length;Q++){const ft=I.added[Q];let At=G.indexOf(ft);if(At===-1){for(let zt=0;zt<O.length;zt++)if(zt>=G.length){G.push(ft),At=zt;break}else if(G[zt]===null){G[zt]=ft,At=zt;break}if(At===-1)break}const vt=O[At];vt&&vt.connect(ft)}}const j=new et,bt=new et;function L(I,Q,ft){j.setFromMatrixPosition(Q.matrixWorld),bt.setFromMatrixPosition(ft.matrixWorld);const At=j.distanceTo(bt),vt=Q.projectionMatrix.elements,zt=ft.projectionMatrix.elements,kt=vt[14]/(vt[10]-1),P=vt[14]/(vt[10]+1),ce=(vt[9]+1)/vt[5],Wt=(vt[9]-1)/vt[5],Gt=(vt[8]-1)/vt[0],Pt=(zt[8]+1)/zt[0],Le=kt*Gt,Yt=kt*Pt,ue=At/(-Gt+Pt),We=ue*-Gt;if(Q.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(We),I.translateZ(ue),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),vt[10]===-1)I.projectionMatrix.copy(Q.projectionMatrix),I.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const qe=kt+ue,N=P+ue,b=Le-We,at=Yt+(At-We),mt=ce*P/N*qe,yt=Wt*P/N*qe;I.projectionMatrix.makePerspective(b,at,mt,yt,qe,N),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function it(I,Q){Q===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(Q.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(l===null)return;let Q=I.near,ft=I.far;M.texture!==null&&(M.depthNear>0&&(Q=M.depthNear),M.depthFar>0&&(ft=M.depthFar)),rt.near=D.near=U.near=Q,rt.far=D.far=U.far=ft,(dt!==rt.near||xt!==rt.far)&&(l.updateRenderState({depthNear:rt.near,depthFar:rt.far}),dt=rt.near,xt=rt.far),rt.layers.mask=I.layers.mask|6,U.layers.mask=rt.layers.mask&3,D.layers.mask=rt.layers.mask&5;const At=I.parent,vt=rt.cameras;it(rt,At);for(let zt=0;zt<vt.length;zt++)it(vt[zt],At);vt.length===2?L(rt,U,D):rt.projectionMatrix.copy(U.projectionMatrix),Et(I,rt,At)};function Et(I,Q,ft){ft===null?I.matrix.copy(Q.matrixWorld):(I.matrix.copy(ft.matrixWorld),I.matrix.invert(),I.matrix.multiply(Q.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(Q.projectionMatrix),I.projectionMatrixInverse.copy(Q.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Th*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(y===null&&x===null))return m},this.setFoveation=function(I){m=I,y!==null&&(y.fixedFoveation=I),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=I)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(rt)},this.getCameraTexture=function(I){return _[I]};let Tt=null;function B(I,Q){if(v=Q.getViewerPose(p||d),E=Q,v!==null){const ft=v.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let At=!1;ft.length!==rt.cameras.length&&(rt.cameras.length=0,At=!0);for(let P=0;P<ft.length;P++){const ce=ft[P];let Wt=null;if(x!==null)Wt=x.getViewport(ce);else{const Pt=g.getViewSubImage(y,ce);Wt=Pt.viewport,P===0&&(t.setRenderTargetTextures(w,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(w))}let Gt=X[P];Gt===void 0&&(Gt=new Si,Gt.layers.enable(P),Gt.viewport=new rn,X[P]=Gt),Gt.matrix.fromArray(ce.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(ce.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),P===0&&(rt.matrix.copy(Gt.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),At===!0&&rt.cameras.push(Gt)}const vt=l.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const P=g.getDepthInformation(ft[0]);P&&P.isValid&&P.texture&&M.init(P,l.renderState)}if(vt&&vt.includes("camera-access")&&A){t.state.unbindTexture(),g=r.getBinding();for(let P=0;P<ft.length;P++){const ce=ft[P].camera;if(ce){let Wt=_[ce];Wt||(Wt=new Q0,_[ce]=Wt);const Gt=g.getCameraImage(ce);Wt.sourceTexture=Gt}}}}for(let ft=0;ft<O.length;ft++){const At=G[ft],vt=O[ft];At!==null&&vt!==void 0&&vt.update(At,Q,p||d)}Tt&&Tt(I,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),E=null}const ot=new $0;ot.setAnimationLoop(B),this.setAnimationLoop=function(I){Tt=I},this.dispose=function(){}}}const dr=new oa,DA=new je;function UA(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,X0(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,F,C,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),v(M,_)):_.isMeshStandardMaterial?(c(M,_),y(M,_),_.isMeshPhysicalMaterial&&x(M,_,w)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),A(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,F,C):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Xn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Xn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const F=t.get(_),C=F.envMap,w=F.envMapRotation;C&&(M.envMap.value=C,dr.copy(w),dr.x*=-1,dr.y*=-1,dr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),M.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(dr)),M.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,F,C){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*F,M.scale.value=C*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function x(M,_,F){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function A(M,_){const F=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function LA(o,t,i,r){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,C){const w=C.program;r.uniformBlockBinding(F,w)}function p(F,C){let w=l[F.id];w===void 0&&(E(F),w=v(F),l[F.id]=w,F.addEventListener("dispose",M));const O=C.program;r.updateUBOMapping(F,O);const G=t.render.frame;c[F.id]!==G&&(y(F),c[F.id]=G)}function v(F){const C=g();F.__bindingPointIndex=C;const w=o.createBuffer(),O=F.__size,G=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,O,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,w),w}function g(){for(let F=0;F<h;F++)if(d.indexOf(F)===-1)return d.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(F){const C=l[F.id],w=F.uniforms,O=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let G=0,V=w.length;G<V;G++){const W=Array.isArray(w[G])?w[G]:[w[G]];for(let U=0,D=W.length;U<D;U++){const X=W[U];if(x(X,G,U,O)===!0){const rt=X.__offset,dt=Array.isArray(X.value)?X.value:[X.value];let xt=0;for(let pt=0;pt<dt.length;pt++){const H=dt[pt],J=A(H);typeof H=="number"||typeof H=="boolean"?(X.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,rt+xt,X.__data)):H.isMatrix3?(X.__data[0]=H.elements[0],X.__data[1]=H.elements[1],X.__data[2]=H.elements[2],X.__data[3]=0,X.__data[4]=H.elements[3],X.__data[5]=H.elements[4],X.__data[6]=H.elements[5],X.__data[7]=0,X.__data[8]=H.elements[6],X.__data[9]=H.elements[7],X.__data[10]=H.elements[8],X.__data[11]=0):(H.toArray(X.__data,xt),xt+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(F,C,w,O){const G=F.value,V=C+"_"+w;if(O[V]===void 0)return typeof G=="number"||typeof G=="boolean"?O[V]=G:O[V]=G.clone(),!0;{const W=O[V];if(typeof G=="number"||typeof G=="boolean"){if(W!==G)return O[V]=G,!0}else if(W.equals(G)===!1)return W.copy(G),!0}return!1}function E(F){const C=F.uniforms;let w=0;const O=16;for(let V=0,W=C.length;V<W;V++){const U=Array.isArray(C[V])?C[V]:[C[V]];for(let D=0,X=U.length;D<X;D++){const rt=U[D],dt=Array.isArray(rt.value)?rt.value:[rt.value];for(let xt=0,pt=dt.length;xt<pt;xt++){const H=dt[xt],J=A(H),j=w%O,bt=j%J.boundary,L=j+bt;w+=bt,L!==0&&O-L<J.storage&&(w+=O-L),rt.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=w,w+=J.storage}}}const G=w%O;return G>0&&(w+=O-G),F.__size=w,F.__cache={},this}function A(F){const C={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(C.boundary=4,C.storage=4):F.isVector2?(C.boundary=8,C.storage=8):F.isVector3||F.isColor?(C.boundary=16,C.storage=12):F.isVector4?(C.boundary=16,C.storage=16):F.isMatrix3?(C.boundary=48,C.storage=48):F.isMatrix4?(C.boundary=64,C.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),C}function M(F){const C=F.target;C.removeEventListener("dispose",M);const w=d.indexOf(C.__bindingPointIndex);d.splice(w,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function _(){for(const F in l)o.deleteBuffer(l[F]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}class NA{constructor(t={}){const{canvas:i=cS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const E=new Uint32Array(4),A=new Int32Array(4);let M=null,_=null;const F=[],C=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=fi;let G=0,V=0,W=null,U=-1,D=null;const X=new rn,rt=new rn;let dt=null;const xt=new ye(0);let pt=0,H=i.width,J=i.height,j=1,bt=null,L=null;const it=new rn(0,0,H,J),Et=new rn(0,0,H,J);let Tt=!1;const B=new Z0;let ot=!1,I=!1;const Q=new je,ft=new et,At=new rn,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function kt(){return W===null?j:1}let P=r;function ce(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",Xt,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),P===null){const Y="webgl2";if(P=ce(Y,R),P===null)throw ce(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Wt,Gt,Pt,Le,Yt,ue,We,qe,N,b,at,mt,yt,ht,Vt,Ut,Qt,$t,Rt,It,ee,Kt,Ot,fe;function q(){Wt=new kb(P),Wt.init(),Kt=new TA(P,Wt),Gt=new Bb(P,Wt,t,Kt),Pt=new EA(P,Wt),Gt.reversedDepthBuffer&&y&&Pt.buffers.depth.setReversed(!0),Le=new qb(P),Yt=new cA,ue=new bA(P,Wt,Pt,Yt,Gt,Kt,Le),We=new zb(w),qe=new Vb(w),N=new JS(P),Ot=new Ob(P,N),b=new Xb(P,N,Le,Ot),at=new jb(P,b,N,Le),Rt=new Yb(P,Gt,ue),Ut=new Ib(Yt),mt=new uA(w,We,qe,Wt,Gt,Ot,Ut),yt=new UA(w,Yt),ht=new dA,Vt=new vA(Wt),$t=new Nb(w,We,qe,Pt,at,x,m),Qt=new SA(w,at,Gt),fe=new LA(P,Le,Gt,Pt),It=new Pb(P,Wt,Le),ee=new Wb(P,Wt,Le),Le.programs=mt.programs,w.capabilities=Gt,w.extensions=Wt,w.properties=Yt,w.renderLists=ht,w.shadowMap=Qt,w.state=Pt,w.info=Le}q();const Dt=new wA(w,P);this.xr=Dt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=Wt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Wt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(H,J,!1))},this.getSize=function(R){return R.set(H,J)},this.setSize=function(R,Y,ut=!0){if(Dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,J=Y,i.width=Math.floor(R*j),i.height=Math.floor(Y*j),ut===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(H*j,J*j).floor()},this.setDrawingBufferSize=function(R,Y,ut){H=R,J=Y,j=ut,i.width=Math.floor(R*ut),i.height=Math.floor(Y*ut),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(X)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,Y,ut,ct){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,Y,ut,ct),Pt.viewport(X.copy(it).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Et)},this.setScissor=function(R,Y,ut,ct){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,Y,ut,ct),Pt.scissor(rt.copy(Et).multiplyScalar(j).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){Pt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){bt=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ut=!0){let ct=0;if(R){let $=!1;if(W!==null){const wt=W.texture.format;$=wt===Bh||wt===Ph||wt===Oh}if($){const wt=W.texture.type,Bt=wt===sa||wt===yr||wt===Xo||wt===Wo||wt===Uh||wt===Lh,qt=$t.getClearColor(),Ft=$t.getClearAlpha(),ie=qt.r,re=qt.g,Jt=qt.b;Bt?(E[0]=ie,E[1]=re,E[2]=Jt,E[3]=Ft,P.clearBufferuiv(P.COLOR,0,E)):(A[0]=ie,A[1]=re,A[2]=Jt,A[3]=Ft,P.clearBufferiv(P.COLOR,0,A))}else ct|=P.COLOR_BUFFER_BIT}Y&&(ct|=P.DEPTH_BUFFER_BIT),ut&&(ct|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",Xt,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),$t.dispose(),ht.dispose(),Vt.dispose(),Yt.dispose(),We.dispose(),qe.dispose(),at.dispose(),Ot.dispose(),fe.dispose(),mt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",cn),Dt.removeEventListener("sessionend",fn),Je.stop()};function Lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const R=Le.autoReset,Y=Qt.enabled,ut=Qt.autoUpdate,ct=Qt.needsUpdate,$=Qt.type;q(),Le.autoReset=R,Qt.enabled=Y,Qt.autoUpdate=ut,Qt.needsUpdate=ct,Qt.type=$}function Ct(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Mt(R){const Y=R.target;Y.removeEventListener("dispose",Mt),Zt(Y)}function Zt(R){le(R),Yt.remove(R)}function le(R){const Y=Yt.get(R).programs;Y!==void 0&&(Y.forEach(function(ut){mt.releaseProgram(ut)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ut,ct,$,wt){Y===null&&(Y=vt);const Bt=$.isMesh&&$.matrixWorld.determinant()<0,qt=la(R,Y,ut,ct,$);Pt.setMaterial(ct,Bt);let Ft=ut.index,ie=1;if(ct.wireframe===!0){if(Ft=b.getWireframeAttribute(ut),Ft===void 0)return;ie=2}const re=ut.drawRange,Jt=ut.attributes.position;let me=re.start*ie,Ce=(re.start+re.count)*ie;wt!==null&&(me=Math.max(me,wt.start*ie),Ce=Math.min(Ce,(wt.start+wt.count)*ie)),Ft!==null?(me=Math.max(me,0),Ce=Math.min(Ce,Ft.count)):Jt!=null&&(me=Math.max(me,0),Ce=Math.min(Ce,Jt.count));const Ze=Ce-me;if(Ze<0||Ze===1/0)return;Ot.setup($,ct,qt,ut,Ft);let Be,ge=It;if(Ft!==null&&(Be=N.get(Ft),ge=ee,ge.setIndex(Be)),$.isMesh)ct.wireframe===!0?(Pt.setLineWidth(ct.wireframeLinewidth*kt()),ge.setMode(P.LINES)):ge.setMode(P.TRIANGLES);else if($.isLine){let ne=ct.linewidth;ne===void 0&&(ne=1),Pt.setLineWidth(ne*kt()),$.isLineSegments?ge.setMode(P.LINES):$.isLineLoop?ge.setMode(P.LINE_LOOP):ge.setMode(P.LINE_STRIP)}else $.isPoints?ge.setMode(P.POINTS):$.isSprite&&ge.setMode(P.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)jo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))ge.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ne=$._multiDrawStarts,Ye=$._multiDrawCounts,Se=$._multiDrawCount,Tn=Ft?N.get(Ft).bytesPerElement:1,pi=Yt.get(ct).currentProgram.getUniforms();for(let Nn=0;Nn<Se;Nn++)pi.setValue(P,"_gl_DrawID",Nn),ge.render(ne[Nn]/Tn,Ye[Nn])}else if($.isInstancedMesh)ge.renderInstances(me,Ze,$.count);else if(ut.isInstancedBufferGeometry){const ne=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Ye=Math.min(ut.instanceCount,ne);ge.renderInstances(me,Ze,Ye)}else ge.render(me,Ze)};function Ne(R,Y,ut){R.transparent===!0&&R.side===Oi&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Ai(R,Y,ut),R.side=Va,R.needsUpdate=!0,Ai(R,Y,ut),R.side=Oi):Ai(R,Y,ut)}this.compile=function(R,Y,ut=null){ut===null&&(ut=R),_=Vt.get(ut),_.init(Y),C.push(_),ut.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),R!==ut&&R.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights();const ct=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const wt=$.material;if(wt)if(Array.isArray(wt))for(let Bt=0;Bt<wt.length;Bt++){const qt=wt[Bt];Ne(qt,ut,$),ct.add(qt)}else Ne(wt,ut,$),ct.add(wt)}),_=C.pop(),ct},this.compileAsync=function(R,Y,ut=null){const ct=this.compile(R,Y,ut);return new Promise($=>{function wt(){if(ct.forEach(function(Bt){Yt.get(Bt).currentProgram.isReady()&&ct.delete(Bt)}),ct.size===0){$(R);return}setTimeout(wt,10)}Wt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Re=null;function hi(R){Re&&Re(R)}function cn(){Je.stop()}function fn(){Je.start()}const Je=new $0;Je.setAnimationLoop(hi),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(R){Re=R,Dt.setAnimationLoop(R),R===null?Je.stop():Je.start()},Dt.addEventListener("sessionstart",cn),Dt.addEventListener("sessionend",fn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(Y),Y=Dt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Y,W),_=Vt.get(R,C.length),_.init(Y),C.push(_),Q.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B.setFromProjectionMatrix(Q,Ii,Y.reversedDepth),I=this.localClippingEnabled,ot=Ut.init(this.clippingPlanes,I),M=ht.get(R,F.length),M.init(),F.push(M),Dt.enabled===!0&&Dt.isPresenting===!0){const wt=w.xr.getDepthSensingMesh();wt!==null&&Ti(wt,Y,-1/0,w.sortObjects)}Ti(R,Y,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(bt,L),zt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,zt&&$t.addToRenderList(M,R),this.info.render.frame++,ot===!0&&Ut.beginShadows();const ut=_.state.shadowsArray;Qt.render(ut,R,Y),ot===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=M.opaque,$=M.transmissive;if(_.setupLights(),Y.isArrayCamera){const wt=Y.cameras;if($.length>0)for(let Bt=0,qt=wt.length;Bt<qt;Bt++){const Ft=wt[Bt];tl(ct,$,R,Ft)}zt&&$t.render(R);for(let Bt=0,qt=wt.length;Bt<qt;Bt++){const Ft=wt[Bt];Er(M,R,Ft,Ft.viewport)}}else $.length>0&&tl(ct,$,R,Y),zt&&$t.render(R),Er(M,R,Y);W!==null&&V===0&&(ue.updateMultisampleRenderTarget(W),ue.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(w,R,Y),Ot.resetDefaultState(),U=-1,D=null,C.pop(),C.length>0?(_=C[C.length-1],ot===!0&&Ut.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function Ti(R,Y,ut,ct){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ut=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||B.intersectsSprite(R)){ct&&At.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Q);const Bt=at.update(R),qt=R.material;qt.visible&&M.push(R,Bt,qt,ut,At.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||B.intersectsObject(R))){const Bt=at.update(R),qt=R.material;if(ct&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),At.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),At.copy(Bt.boundingSphere.center)),At.applyMatrix4(R.matrixWorld).applyMatrix4(Q)),Array.isArray(qt)){const Ft=Bt.groups;for(let ie=0,re=Ft.length;ie<re;ie++){const Jt=Ft[ie],me=qt[Jt.materialIndex];me&&me.visible&&M.push(R,Bt,me,ut,At.z,Jt)}}else qt.visible&&M.push(R,Bt,qt,ut,At.z,null)}}const wt=R.children;for(let Bt=0,qt=wt.length;Bt<qt;Bt++)Ti(wt[Bt],Y,ut,ct)}function Er(R,Y,ut,ct){const $=R.opaque,wt=R.transmissive,Bt=R.transparent;_.setupLightsView(ut),ot===!0&&Ut.setGlobalState(w.clippingPlanes,ut),ct&&Pt.viewport(X.copy(ct)),$.length>0&&br($,Y,ut),wt.length>0&&br(wt,Y,ut),Bt.length>0&&br(Bt,Y,ut),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function tl(R,Y,ut,ct){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ct.id]===void 0&&(_.state.transmissionRenderTarget[ct.id]=new Sr(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Ko:sa,minFilter:xr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const wt=_.state.transmissionRenderTarget[ct.id],Bt=ct.viewport||X;wt.setSize(Bt.z*w.transmissionResolutionScale,Bt.w*w.transmissionResolutionScale);const qt=w.getRenderTarget(),Ft=w.getActiveCubeFace(),ie=w.getActiveMipmapLevel();w.setRenderTarget(wt),w.getClearColor(xt),pt=w.getClearAlpha(),pt<1&&w.setClearColor(16777215,.5),w.clear(),zt&&$t.render(ut);const re=w.toneMapping;w.toneMapping=Ha;const Jt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),_.setupLightsView(ct),ot===!0&&Ut.setGlobalState(w.clippingPlanes,ct),br(R,ut,ct),ue.updateMultisampleRenderTarget(wt),ue.updateRenderTargetMipmap(wt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Ce=0,Ze=Y.length;Ce<Ze;Ce++){const Be=Y[Ce],ge=Be.object,ne=Be.geometry,Ye=Be.material,Se=Be.group;if(Ye.side===Oi&&ge.layers.test(ct.layers)){const Tn=Ye.side;Ye.side=Xn,Ye.needsUpdate=!0,Bs(ge,ut,ct,ne,Ye,Se),Ye.side=Tn,Ye.needsUpdate=!0,me=!0}}me===!0&&(ue.updateMultisampleRenderTarget(wt),ue.updateRenderTargetMipmap(wt))}w.setRenderTarget(qt,Ft,ie),w.setClearColor(xt,pt),Jt!==void 0&&(ct.viewport=Jt),w.toneMapping=re}function br(R,Y,ut){const ct=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,wt=R.length;$<wt;$++){const Bt=R[$],qt=Bt.object,Ft=Bt.geometry,ie=Bt.group;let re=Bt.material;re.allowOverride===!0&&ct!==null&&(re=ct),qt.layers.test(ut.layers)&&Bs(qt,Y,ut,Ft,re,ie)}}function Bs(R,Y,ut,ct,$,wt){R.onBeforeRender(w,Y,ut,ct,$,wt),R.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(w,Y,ut,ct,R,wt),$.transparent===!0&&$.side===Oi&&$.forceSinglePass===!1?($.side=Xn,$.needsUpdate=!0,w.renderBufferDirect(ut,Y,ct,$,R,wt),$.side=Va,$.needsUpdate=!0,w.renderBufferDirect(ut,Y,ct,$,R,wt),$.side=Oi):w.renderBufferDirect(ut,Y,ct,$,R,wt),R.onAfterRender(w,Y,ut,ct,$,wt)}function Ai(R,Y,ut){Y.isScene!==!0&&(Y=vt);const ct=Yt.get(R),$=_.state.lights,wt=_.state.shadowsArray,Bt=$.state.version,qt=mt.getParameters(R,$.state,wt,Y,ut),Ft=mt.getProgramCacheKey(qt);let ie=ct.programs;ct.environment=R.isMeshStandardMaterial?Y.environment:null,ct.fog=Y.fog,ct.envMap=(R.isMeshStandardMaterial?qe:We).get(R.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ie===void 0&&(R.addEventListener("dispose",Mt),ie=new Map,ct.programs=ie);let re=ie.get(Ft);if(re!==void 0){if(ct.currentProgram===re&&ct.lightsStateVersion===Bt)return zi(R,qt),re}else qt.uniforms=mt.getUniforms(R),R.onBeforeCompile(qt,w),re=mt.acquireProgram(qt,Ft),ie.set(Ft,re),ct.uniforms=qt.uniforms;const Jt=ct.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=Ut.uniform),zi(R,qt),ct.needsLights=ua(R),ct.lightsStateVersion=Bt,ct.needsLights&&(Jt.ambientLightColor.value=$.state.ambient,Jt.lightProbe.value=$.state.probe,Jt.directionalLights.value=$.state.directional,Jt.directionalLightShadows.value=$.state.directionalShadow,Jt.spotLights.value=$.state.spot,Jt.spotLightShadows.value=$.state.spotShadow,Jt.rectAreaLights.value=$.state.rectArea,Jt.ltc_1.value=$.state.rectAreaLTC1,Jt.ltc_2.value=$.state.rectAreaLTC2,Jt.pointLights.value=$.state.point,Jt.pointLightShadows.value=$.state.pointShadow,Jt.hemisphereLights.value=$.state.hemi,Jt.directionalShadowMap.value=$.state.directionalShadowMap,Jt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Jt.spotShadowMap.value=$.state.spotShadowMap,Jt.spotLightMatrix.value=$.state.spotLightMatrix,Jt.spotLightMap.value=$.state.spotLightMap,Jt.pointShadowMap.value=$.state.pointShadowMap,Jt.pointShadowMatrix.value=$.state.pointShadowMatrix),ct.currentProgram=re,ct.uniformsList=null,re}function Tr(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Hu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function zi(R,Y){const ut=Yt.get(R);ut.outputColorSpace=Y.outputColorSpace,ut.batching=Y.batching,ut.batchingColor=Y.batchingColor,ut.instancing=Y.instancing,ut.instancingColor=Y.instancingColor,ut.instancingMorph=Y.instancingMorph,ut.skinning=Y.skinning,ut.morphTargets=Y.morphTargets,ut.morphNormals=Y.morphNormals,ut.morphColors=Y.morphColors,ut.morphTargetsCount=Y.morphTargetsCount,ut.numClippingPlanes=Y.numClippingPlanes,ut.numIntersection=Y.numClipIntersection,ut.vertexAlphas=Y.vertexAlphas,ut.vertexTangents=Y.vertexTangents,ut.toneMapping=Y.toneMapping}function la(R,Y,ut,ct,$){Y.isScene!==!0&&(Y=vt),ue.resetTextureUnits();const wt=Y.fog,Bt=ct.isMeshStandardMaterial?Y.environment:null,qt=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ds,Ft=(ct.isMeshStandardMaterial?qe:We).get(ct.envMap||Bt),ie=ct.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,re=!!ut.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Jt=!!ut.morphAttributes.position,me=!!ut.morphAttributes.normal,Ce=!!ut.morphAttributes.color;let Ze=Ha;ct.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ze=w.toneMapping);const Be=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,ge=Be!==void 0?Be.length:0,ne=Yt.get(ct),Ye=_.state.lights;if(ot===!0&&(I===!0||R!==D)){const $e=R===D&&ct.id===U;Ut.setState(ct,R,$e)}let Se=!1;ct.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ye.state.version||ne.outputColorSpace!==qt||$.isBatchedMesh&&ne.batching===!1||!$.isBatchedMesh&&ne.batching===!0||$.isBatchedMesh&&ne.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ne.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ne.instancing===!1||!$.isInstancedMesh&&ne.instancing===!0||$.isSkinnedMesh&&ne.skinning===!1||!$.isSkinnedMesh&&ne.skinning===!0||$.isInstancedMesh&&ne.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ne.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ne.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ne.instancingMorph===!1&&$.morphTexture!==null||ne.envMap!==Ft||ct.fog===!0&&ne.fog!==wt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Ut.numPlanes||ne.numIntersection!==Ut.numIntersection)||ne.vertexAlphas!==ie||ne.vertexTangents!==re||ne.morphTargets!==Jt||ne.morphNormals!==me||ne.morphColors!==Ce||ne.toneMapping!==Ze||ne.morphTargetsCount!==ge)&&(Se=!0):(Se=!0,ne.__version=ct.version);let Tn=ne.currentProgram;Se===!0&&(Tn=Ai(ct,Y,$));let pi=!1,Nn=!1,gn=!1;const Ve=Tn.getUniforms(),On=ne.uniforms;if(Pt.useProgram(Tn.program)&&(pi=!0,Nn=!0,gn=!0),ct.id!==U&&(U=ct.id,Nn=!0),pi||D!==R){Pt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ve.setValue(P,"projectionMatrix",R.projectionMatrix),Ve.setValue(P,"viewMatrix",R.matrixWorldInverse);const Sn=Ve.map.cameraPosition;Sn!==void 0&&Sn.setValue(P,ft.setFromMatrixPosition(R.matrixWorld)),Gt.logarithmicDepthBuffer&&Ve.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ve.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,Nn=!0,gn=!0)}if($.isSkinnedMesh){Ve.setOptional(P,$,"bindMatrix"),Ve.setOptional(P,$,"bindMatrixInverse");const $e=$.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Ve.setValue(P,"boneTexture",$e.boneTexture,ue))}$.isBatchedMesh&&(Ve.setOptional(P,$,"batchingTexture"),Ve.setValue(P,"batchingTexture",$._matricesTexture,ue),Ve.setOptional(P,$,"batchingIdTexture"),Ve.setValue(P,"batchingIdTexture",$._indirectTexture,ue),Ve.setOptional(P,$,"batchingColorTexture"),$._colorsTexture!==null&&Ve.setValue(P,"batchingColorTexture",$._colorsTexture,ue));const An=ut.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Rt.update($,ut,Tn),(Nn||ne.receiveShadow!==$.receiveShadow)&&(ne.receiveShadow=$.receiveShadow,Ve.setValue(P,"receiveShadow",$.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(On.envMap.value=Ft,On.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Y.environment!==null&&(On.envMapIntensity.value=Y.environmentIntensity),Nn&&(Ve.setValue(P,"toneMappingExposure",w.toneMappingExposure),ne.needsLights&&Xa(On,gn),wt&&ct.fog===!0&&yt.refreshFogUniforms(On,wt),yt.refreshMaterialUniforms(On,ct,j,J,_.state.transmissionRenderTarget[R.id]),Hu.upload(P,Tr(ne),On,ue)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Hu.upload(P,Tr(ne),On,ue),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ve.setValue(P,"center",$.center),Ve.setValue(P,"modelViewMatrix",$.modelViewMatrix),Ve.setValue(P,"normalMatrix",$.normalMatrix),Ve.setValue(P,"modelMatrix",$.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const $e=ct.uniformsGroups;for(let Sn=0,Ar=$e.length;Sn<Ar;Sn++){const Fn=$e[Sn];fe.update(Fn,Tn),fe.bind(Fn,Tn)}}return Tn}function Xa(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ua(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,Y,ut){const ct=Yt.get(R);ct.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Yt.get(R.texture).__webglTexture=Y,Yt.get(R.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:ut,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ut=Yt.get(R);ut.__webglFramebuffer=Y,ut.__useDefaultFramebuffer=Y===void 0};const sn=P.createFramebuffer();this.setRenderTarget=function(R,Y=0,ut=0){W=R,G=Y,V=ut;let ct=!0,$=null,wt=!1,Bt=!1;if(R){const Ft=Yt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(P.FRAMEBUFFER,null),ct=!1;else if(Ft.__webglFramebuffer===void 0)ue.setupRenderTarget(R);else if(Ft.__hasExternalTextures)ue.rebindTextures(R,Yt.get(R.texture).__webglTexture,Yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(Ft.__boundDepthTexture!==Jt){if(Jt!==null&&Yt.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(R)}}const ie=R.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Bt=!0);const re=Yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[Y])?$=re[Y][ut]:$=re[Y],wt=!0):R.samples>0&&ue.useMultisampledRTT(R)===!1?$=Yt.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?$=re[ut]:$=re,X.copy(R.viewport),rt.copy(R.scissor),dt=R.scissorTest}else X.copy(it).multiplyScalar(j).floor(),rt.copy(Et).multiplyScalar(j).floor(),dt=Tt;if(ut!==0&&($=sn),Pt.bindFramebuffer(P.FRAMEBUFFER,$)&&ct&&Pt.drawBuffers(R,$),Pt.viewport(X),Pt.scissor(rt),Pt.setScissorTest(dt),wt){const Ft=Yt.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,ut)}else if(Bt){const Ft=Y;for(let ie=0;ie<R.textures.length;ie++){const re=Yt.get(R.textures[ie]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ie,re.__webglTexture,ut,Ft)}}else if(R!==null&&ut!==0){const Ft=Yt.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ft.__webglTexture,ut)}U=-1},this.readRenderTargetPixels=function(R,Y,ut,ct,$,wt,Bt,qt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ft=Ft[Bt]),Ft){Pt.bindFramebuffer(P.FRAMEBUFFER,Ft);try{const ie=R.textures[qt],re=ie.format,Jt=ie.type;if(!Gt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ct&&ut>=0&&ut<=R.height-$&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+qt),P.readPixels(Y,ut,ct,$,Kt.convert(re),Kt.convert(Jt),wt))}finally{const ie=W!==null?Yt.get(W).__webglFramebuffer:null;Pt.bindFramebuffer(P.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ut,ct,$,wt,Bt,qt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ft=Ft[Bt]),Ft)if(Y>=0&&Y<=R.width-ct&&ut>=0&&ut<=R.height-$){Pt.bindFramebuffer(P.FRAMEBUFFER,Ft);const ie=R.textures[qt],re=ie.format,Jt=ie.type;if(!Gt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,me),P.bufferData(P.PIXEL_PACK_BUFFER,wt.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+qt),P.readPixels(Y,ut,ct,$,Kt.convert(re),Kt.convert(Jt),0);const Ce=W!==null?Yt.get(W).__webglFramebuffer:null;Pt.bindFramebuffer(P.FRAMEBUFFER,Ce);const Ze=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await fS(P,Ze,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,wt),P.deleteBuffer(me),P.deleteSync(Ze),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ut=0){const ct=Math.pow(2,-ut),$=Math.floor(R.image.width*ct),wt=Math.floor(R.image.height*ct),Bt=Y!==null?Y.x:0,qt=Y!==null?Y.y:0;ue.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,ut,0,0,Bt,qt,$,wt),Pt.unbindTexture()};const el=P.createFramebuffer(),nl=P.createFramebuffer();this.copyTextureToTexture=function(R,Y,ut=null,ct=null,$=0,wt=null){wt===null&&($!==0?(jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=$,$=0):wt=0);let Bt,qt,Ft,ie,re,Jt,me,Ce,Ze;const Be=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(ut!==null)Bt=ut.max.x-ut.min.x,qt=ut.max.y-ut.min.y,Ft=ut.isBox3?ut.max.z-ut.min.z:1,ie=ut.min.x,re=ut.min.y,Jt=ut.isBox3?ut.min.z:0;else{const An=Math.pow(2,-$);Bt=Math.floor(Be.width*An),qt=Math.floor(Be.height*An),R.isDataArrayTexture?Ft=Be.depth:R.isData3DTexture?Ft=Math.floor(Be.depth*An):Ft=1,ie=0,re=0,Jt=0}ct!==null?(me=ct.x,Ce=ct.y,Ze=ct.z):(me=0,Ce=0,Ze=0);const ge=Kt.convert(Y.format),ne=Kt.convert(Y.type);let Ye;Y.isData3DTexture?(ue.setTexture3D(Y,0),Ye=P.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ue.setTexture2DArray(Y,0),Ye=P.TEXTURE_2D_ARRAY):(ue.setTexture2D(Y,0),Ye=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment);const Se=P.getParameter(P.UNPACK_ROW_LENGTH),Tn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pi=P.getParameter(P.UNPACK_SKIP_PIXELS),Nn=P.getParameter(P.UNPACK_SKIP_ROWS),gn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Be.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Be.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ie),P.pixelStorei(P.UNPACK_SKIP_ROWS,re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Jt);const Ve=R.isDataArrayTexture||R.isData3DTexture,On=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const An=Yt.get(R),$e=Yt.get(Y),Sn=Yt.get(An.__renderTarget),Ar=Yt.get($e.__renderTarget);Pt.bindFramebuffer(P.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let Fn=0;Fn<Ft;Fn++)Ve&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yt.get(R).__webglTexture,$,Jt+Fn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yt.get(Y).__webglTexture,wt,Ze+Fn)),P.blitFramebuffer(ie,re,Bt,qt,me,Ce,Bt,qt,P.DEPTH_BUFFER_BIT,P.NEAREST);Pt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||Yt.has(R)){const An=Yt.get(R),$e=Yt.get(Y);Pt.bindFramebuffer(P.READ_FRAMEBUFFER,el),Pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,nl);for(let Sn=0;Sn<Ft;Sn++)Ve?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,An.__webglTexture,$,Jt+Sn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,An.__webglTexture,$),On?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$e.__webglTexture,wt,Ze+Sn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,$e.__webglTexture,wt),$!==0?P.blitFramebuffer(ie,re,Bt,qt,me,Ce,Bt,qt,P.COLOR_BUFFER_BIT,P.NEAREST):On?P.copyTexSubImage3D(Ye,wt,me,Ce,Ze+Sn,ie,re,Bt,qt):P.copyTexSubImage2D(Ye,wt,me,Ce,ie,re,Bt,qt);Pt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else On?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(Ye,wt,me,Ce,Ze,Bt,qt,Ft,ge,ne,Be.data):Y.isCompressedArrayTexture?P.compressedTexSubImage3D(Ye,wt,me,Ce,Ze,Bt,qt,Ft,ge,Be.data):P.texSubImage3D(Ye,wt,me,Ce,Ze,Bt,qt,Ft,ge,ne,Be):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,wt,me,Ce,Bt,qt,ge,ne,Be.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,wt,me,Ce,Be.width,Be.height,ge,Be.data):P.texSubImage2D(P.TEXTURE_2D,wt,me,Ce,Bt,qt,ge,ne,Be);P.pixelStorei(P.UNPACK_ROW_LENGTH,Se),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Nn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,gn),wt===0&&Y.generateMipmaps&&P.generateMipmap(Ye),Pt.unbindTexture()},this.initRenderTarget=function(R){Yt.get(R).__webglFramebuffer===void 0&&ue.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ue.setTextureCube(R,0):R.isData3DTexture?ue.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ue.setTexture2DArray(R,0):ue.setTexture2D(R,0),Pt.unbindTexture()},this.resetState=function(){G=0,V=0,W=null,Pt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const av={xRange:[-2,2],yRange:[-1.5,1.5],gridDivisions:8,axisColor:8947848,gridColor:3355443},R0=(o,t,i,r)=>({x:1-i*o*o+t,y:r*o}),OA=o=>{const{xRange:t,yRange:i,gridDivisions:r,axisColor:l,gridColor:c}=av,[d,h]=t,[m,p]=i,v=(h-d)/r,g=(p-m)/r,y=new Vo;y.name="coordinate-system";for(let E=0;E<=r;E++){const A=d+E*v,M=Math.abs(A)<.01,_=[new et(A,m,-.01),new et(A,p,-.01)],F=new qn().setFromPoints(_),C=new Zo({color:M?l:c,transparent:!0,opacity:M?1:.4}),w=new Yu(F,C);w.userData.isGrid=!0,y.add(w)}for(let E=0;E<=r;E++){const A=m+E*g,M=Math.abs(A)<.01,_=[new et(d,A,-.01),new et(h,A,-.01)],F=new qn().setFromPoints(_),C=new Zo({color:M?l:c,transparent:!0,opacity:M?1:.4}),w=new Yu(F,C);w.userData.isGrid=!0,y.add(w)}const x=(E,A,M=.15)=>{const _=document.createElement("canvas"),F=_.getContext("2d");_.width=128,_.height=64,F.fillStyle="transparent",F.fillRect(0,0,_.width,_.height),F.font="Bold 32px Arial",F.fillStyle="#aaaaaa",F.textAlign="center",F.textBaseline="middle",F.fillText(E,_.width/2,_.height/2);const C=new qS(_);C.minFilter=Mi;const w=new Y0({map:C,transparent:!0,depthTest:!1}),O=new zS(w);return O.position.copy(A),O.scale.set(M*2,M,1),O.userData.isGrid=!0,O};for(let E=0;E<=r;E++){const A=d+E*v;Math.abs(A)>.01&&y.add(x(A.toFixed(1),new et(A,m-.15,0),.12))}for(let E=0;E<=r;E++){const A=m+E*g;Math.abs(A)>.01&&y.add(x(A.toFixed(1),new et(d-.2,A,0),.12))}return y.add(x("x",new et(h+.2,0,0),.18)),y.add(x("y",new et(0,p+.15,0),.18)),y.add(x("0",new et(-.12,-.12,0),.1)),o.add(y),y},Li={period1:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},period2:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},period3:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},period4:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},period5:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},period6plus:{stable:"#27ae60",unstable:"#e74c3c",saddle:"#e74c3c"},trajectory:"#00ffff",manifold:"#1e90ff",attractor:"#27ae60",repeller:"#e74c3c",saddlePoint:"#e74c3c",periodicBlue:"#3498db"},PA=()=>{const o=de.useRef(null),t=de.useRef(null),i=de.useRef(null),r=de.useRef(null),l=de.useRef(null),c=de.useRef(null),d=de.useRef(null),[h,m]=de.useState("periodic"),[p,v]=de.useState(null),[g,y]=de.useState({a:.4,b:.3,epsilon:.0625,startX:.1,startY:.1,maxIterations:1e3,maxPeriod:5}),[x,E]=de.useState({orbits:[],trajectoryPoints:[],currentPoint:{x:.1,y:.1},iteration:0,isRunning:!1,isReady:!1,showOrbits:!1,showTrail:!0,hasStarted:!1}),[A,M]=de.useState({manifolds:[],fixedPoints:[],isComputing:!1,isReady:!1}),[_,F]=de.useState({period1:!0,period2:!0,period3:!0,period4:!0,period5:!0,period6plus:!1}),[C,w]=de.useState({gridBoxes:[],invariantMeasure:null,leftEigenvector:null,transitions:null,selectedBoxIndex:null,currentBoxIndex:-1,isComputing:!1,subdivisions:20,pointsPerBox:64,epsilon:.05,showUlamOverlay:!1,showTransitions:!0,showCurrentBox:!0,needsRecompute:!1}),[O,G]=de.useState({isAnimating:!1,parameter:"a",rangeValue:.1,direction:1,steps:10,currentStep:0,baseValue:null,targetValue:null});de.useRef(null);const V=de.useRef(null),[W,U]=de.useState({visible:!1,x:0,y:0,data:null}),D=de.useRef(new KS),X=de.useRef(new be);de.useEffect(()=>{if(!o.current)return;const B=new BS;B.background=new ye(657930),i.current=B;const[ot,I]=av.yRange,Q=I-ot,ft=.5,At=window.innerWidth*.75/window.innerHeight,vt=Q+ft*2,zt=vt*At,kt=new J0(-zt/2,zt/2,vt/2,-vt/2,.1,1e3);kt.position.z=5,r.current=kt;const P=new NA({canvas:o.current,antialias:!0,alpha:!0});P.setSize(window.innerWidth*.75,window.innerHeight),P.setPixelRatio(window.devicePixelRatio),t.current=P,OA(B);const ce=()=>{const Gt=window.innerWidth*.75/window.innerHeight,Pt=vt*Gt;kt.left=-Pt/2,kt.right=Pt/2,kt.updateProjectionMatrix(),P.setSize(window.innerWidth*.75,window.innerHeight)};window.addEventListener("resize",ce);const Wt=()=>{l.current=requestAnimationFrame(Wt),P.render(B,kt)};return Wt(),()=>{window.removeEventListener("resize",ce),l.current&&cancelAnimationFrame(l.current),c.current&&cancelAnimationFrame(c.current),P.dispose()}},[]),de.useEffect(()=>{(async()=>{try{const ot=await yy(()=>import("./henon_periodic_orbits-B8srkn0u.js"),[]);await ot.default(),v(ot),console.log("WASM module loaded successfully")}catch(ot){console.error("Failed to load WASM module:",ot)}})()},[]);const rt=de.useCallback((B,ot)=>{const I=g.a,Q=g.b,ft=-2*I*B,At=1,vt=Q,zt=0,kt=ft+zt,P=ft*zt-At*vt;return{j11:ft,j12:At,j21:vt,j22:zt,trace:kt,det:P}},[g.a,g.b]),dt=de.useCallback(B=>{if(!o.current||!i.current||!r.current)return;const ot=o.current.getBoundingClientRect();if(X.current.x=(B.clientX-ot.left)/ot.width*2-1,X.current.y=-((B.clientY-ot.top)/ot.height)*2+1,D.current.setFromCamera(X.current,r.current),C.showUlamOverlay&&C.gridBoxes.length>0){const ft=i.current.getObjectByName("ulam-grid");if(ft){const At=D.current.intersectObject(ft);if(At.length>0&&At[0].instanceId!==void 0){const vt=At[0].instanceId,zt=C.gridBoxes[vt],kt=C.invariantMeasure?C.invariantMeasure[vt]:0,P=C.invariantMeasure?Math.max(...C.invariantMeasure):1;let ce=0,Wt=[];if(V.current){const Gt=V.current.get_transitions(vt);Gt&&Gt.length>0&&(ce=Gt.length,Wt=Gt.sort((Pt,Le)=>Le.probability-Pt.probability).slice(0,3))}U({visible:!0,x:B.clientX,y:B.clientY,data:{type:"Ulam Box",boxIndex:vt,pos:{x:zt.center[0],y:zt.center[1]},measure:kt,measurePercent:P>0?kt/P*100:0,numTransitions:ce,topTransitions:Wt,isCurrentBox:vt===C.currentBoxIndex}});return}}}const I=[];i.current.traverse(ft=>{ft.isMesh&&(ft.userData.type==="orbit"||ft.userData.type==="fixedPoint")&&I.push(ft)});const Q=D.current.intersectObjects(I,!1);if(Q.length>0){const At=Q[0].object.userData,vt=rt(At.pos.x,At.pos.y);U({visible:!0,x:B.clientX,y:B.clientY,data:{type:At.type==="fixedPoint"?"Fixed Point":"Periodic Point",period:At.period,stability:At.stability,pos:At.pos,eigenvalues:At.eigenvalues,jacobian:vt,orbitSize:At.orbitPoints?.length||1}})}else U(ft=>ft.visible?{...ft,visible:!1}:ft)},[rt,C.showUlamOverlay,C.gridBoxes,C.invariantMeasure,C.currentBoxIndex]);de.useEffect(()=>{!o.current||!i.current||!r.current||o.current.getBoundingClientRect()},[dt]);const xt=de.useCallback(B=>{if(!V.current)return;const ot=V.current.get_transitions(B);w(I=>({...I,selectedBoxIndex:B,transitions:ot}))},[]);de.useEffect(()=>{const B=o.current;if(!B)return;const ot=I=>{if(!C.showUlamOverlay||!C.gridBoxes.length)return;const Q=B.getBoundingClientRect(),ft=(I.clientX-Q.left)/Q.width*2-1,At=-((I.clientY-Q.top)/Q.height)*2+1;D.current.setFromCamera(new be(ft,At),r.current);const zt=i.current.getObjectByName("ulam-grid");if(zt){const kt=D.current.intersectObject(zt);if(kt.length>0){const P=kt[0].instanceId;P!==void 0&&xt(P)}else w(P=>({...P,selectedBoxIndex:null,transitions:null}))}};return B.addEventListener("mousemove",dt),B.addEventListener("click",ot),()=>{B.removeEventListener("mousemove",dt),B.removeEventListener("click",ot)}},[dt,C.showUlamOverlay,C.gridBoxes.length,xt]),de.useEffect(()=>{if(!p)return;let B=!1;return E(I=>({...I,isReady:!1,orbits:[],trajectoryPoints:[],iteration:0,hasStarted:!1,showOrbits:!1})),(()=>{try{if(B)return;const I=new p.HenonSystemWasm(g.a,g.b,g.maxPeriod);if(B){I.free();return}const Q=I.getPeriodicOrbits();I.free(),E(ft=>({...ft,orbits:Q,isReady:!0,currentPoint:{x:g.startX,y:g.startY}}))}catch(I){console.error("Failed to compute periodic orbits:",I),E(Q=>({...Q,isReady:!0,orbits:[]}))}})(),()=>{B=!0}},[p,g.a,g.b,g.maxPeriod,g.startX,g.startY]),de.useEffect(()=>{if(h==="manifold")return d.current&&clearTimeout(d.current),M(B=>({...B,isComputing:!0})),d.current=setTimeout(()=>{if(p)try{if(x.orbits&&x.orbits.length>0){console.log("Using periodic orbits for manifold:",x.orbits.length,"orbits");const B=p.compute_manifold_from_orbits(g.a,g.b,g.epsilon,x.orbits);M({manifolds:B.manifolds||[],fixedPoints:B.fixed_points||[],isComputing:!1,isReady:!0})}else{console.log("No periodic orbits available, using simple computation");const B=p.compute_manifold_simple(g.a,g.b,g.epsilon);M({manifolds:B.manifolds||[],fixedPoints:B.fixed_points||[],isComputing:!1,isReady:!0})}}catch(B){console.error("Manifold computation error:",B),M(ot=>({...ot,isComputing:!1}))}},500),()=>{d.current&&clearTimeout(d.current)}},[h,g.a,g.b,g.epsilon,x.orbits,p]),de.useEffect(()=>{if(!O.isAnimating||h!=="manifold"||A.isComputing)return;const{parameter:B,rangeValue:ot,direction:I,steps:Q,currentStep:ft,baseValue:At}=O;if(ft>=Q){G(P=>({...P,isAnimating:!1}));return}const vt=ot/Q,zt=ft+1,kt=At+I*vt*zt;y(P=>({...P,[B]:parseFloat(kt.toFixed(4))})),G(P=>({...P,currentStep:zt}))},[O.isAnimating,O.currentStep,A.isComputing,h]);const pt=de.useCallback(()=>{const B=g[O.parameter],ot=B+O.direction*O.rangeValue;G(I=>({...I,isAnimating:!0,baseValue:B,targetValue:ot,currentStep:0}))},[g,O.parameter,O.direction,O.rangeValue]),H=de.useCallback(()=>{G(B=>({...B,isAnimating:!1,currentStep:0}))},[]);de.useEffect(()=>{if(!i.current)return;const B=i.current,ot=[];if(B.traverse(I=>{(I.userData.type==="trajectory"||I.userData.type==="orbit"||I.userData.type==="manifold"||I.userData.type==="fixedPoint")&&ot.push(I)}),ot.forEach(I=>{I.geometry&&I.geometry.dispose(),I.material&&I.material.dispose(),B.remove(I)}),h==="periodic"){if(x.showOrbits&&x.orbits.length>0&&x.orbits.filter(Q=>j(Q)).forEach(Q=>{if(Q.points.forEach((ft,At)=>{const vt=new Es(.03,12,12),zt=new gr({color:new ye(J(Q))}),kt=new zn(vt,zt);kt.position.set(ft[0],ft[1],.1),kt.userData={type:"orbit",period:Q.period,stability:Q.stability,pointIndex:At,pos:{x:ft[0],y:ft[1]},orbitPoints:Q.points,eigenvalues:Q.eigenvalues||null},B.add(kt)}),Q.points.length>1){const ft=new qn,At=new Float32Array(Q.points.length*3);Q.points.forEach((kt,P)=>{At[P*3]=kt[0],At[P*3+1]=kt[1],At[P*3+2]=.1}),ft.setAttribute("position",new Wn(At,3));const vt=new Zo({color:new ye(J(Q)),opacity:.5,transparent:!0}),zt=new WS(ft,vt);zt.userData.type="orbitLine",B.add(zt)}}),x.showTrail&&x.trajectoryPoints.length>0&&x.trajectoryPoints.forEach((I,Q)=>{const ft=Q/x.trajectoryPoints.length,At=.012*(.3+.7*ft),vt=new Es(At,6,6),zt=new gr({color:new ye(Li.trajectory),opacity:.2+.6*ft,transparent:!0}),kt=new zn(vt,zt);kt.position.set(I.x,I.y,.05),kt.userData.type="trajectory",B.add(kt)}),x.hasStarted&&x.currentPoint){const I=new Es(.04,16,16),Q=new gr({color:new ye("#ffffff")}),ft=new zn(I,Q);ft.position.set(x.currentPoint.x,x.currentPoint.y,.2),ft.userData.type="trajectory",B.add(ft)}}else A.manifolds.forEach(I=>{[I.plus,I.minus].forEach(Q=>{if(Q&&Q.points&&Q.points.length>1){const ft=new qn,At=new Float32Array(Q.points.length*3);Q.points.forEach(([kt,P],ce)=>{At[ce*3]=kt,At[ce*3+1]=P,At[ce*3+2]=.1}),ft.setAttribute("position",new Wn(At,3));const vt=new Zo({color:new ye(Li.manifold),linewidth:2}),zt=new Yu(ft,vt);zt.userData.type="manifold",B.add(zt)}})}),A.fixedPoints.forEach(I=>{const Q=(I.stability||"").toLowerCase(),ft=Q==="attractor"||Q==="stable",zt=ft?Li.attractor:Q==="repeller"||Q==="unstable"||Q==="saddle"?Li.saddlePoint:Li.periodicBlue,kt=ft?.06:.05,P=new Es(kt,16,16),ce=new gr({color:new ye(zt)}),Wt=new zn(P,ce);Wt.position.set(I.x,I.y,.2),Wt.userData={type:"fixedPoint",period:1,stability:I.stability,pos:{x:I.x,y:I.y},eigenvalues:I.eigenvalues||null},B.add(Wt)})},[h,x,A,_]);const J=B=>{const{stability:ot}=B;return ot.toLowerCase()==="stable"?Li.attractor:ot.toLowerCase()==="saddle"?Li.saddlePoint:ot.toLowerCase()==="unstable"?Li.repeller:Li.periodicBlue},j=B=>B.period===1?_.period1:B.period===2?_.period2:B.period===3?_.period3:B.period===4?_.period4:B.period===5?_.period5:_.period6plus,bt=de.useCallback(()=>{if(!x.isReady||x.isRunning)return;const{x:B,y:ot}=x.currentPoint;if(!isFinite(B)||!isFinite(ot)||Math.abs(B)>10||Math.abs(ot)>10){E(Q=>({...Q,currentPoint:{x:g.startX,y:g.startY},trajectoryPoints:[],iteration:0,hasStarted:!1}));return}const I=R0(B,ot,g.a,g.b);E(Q=>({...Q,currentPoint:I,trajectoryPoints:[...Q.trajectoryPoints,{x:B,y:ot}],iteration:Q.iteration+1,hasStarted:!0}))},[x.isReady,x.isRunning,x.currentPoint,g]),L=de.useCallback(()=>{if(!x.isReady||x.isRunning)return;E(vt=>({...vt,isRunning:!0}));let B=x.currentPoint.x,ot=x.currentPoint.y,I=x.iteration;const Q=[...x.trajectoryPoints],ft=5,At=()=>{for(let vt=0;vt<ft&&I<g.maxIterations;vt++){if(!isFinite(B)||!isFinite(ot)||Math.abs(B)>10||Math.abs(ot)>10){E(kt=>({...kt,isRunning:!1,showOrbits:!0,hasStarted:!0,trajectoryPoints:Q,currentPoint:{x:B,y:ot},iteration:I}));return}Q.push({x:B,y:ot});const zt=R0(B,ot,g.a,g.b);B=zt.x,ot=zt.y,I++}E(vt=>({...vt,currentPoint:{x:B,y:ot},trajectoryPoints:[...Q],iteration:I,hasStarted:!0})),I<g.maxIterations?c.current=requestAnimationFrame(At):E(vt=>({...vt,isRunning:!1,showOrbits:!0}))};c.current=requestAnimationFrame(At)},[x,g]),it=de.useCallback(()=>{c.current&&cancelAnimationFrame(c.current),E(B=>({...B,currentPoint:{x:g.startX,y:g.startY},trajectoryPoints:[],iteration:0,isRunning:!1,hasStarted:!1,showOrbits:!1}))},[g.startX,g.startY]),Et=de.useMemo(()=>{let B=0;return A.manifolds.forEach(ot=>{ot.plus?.points&&(B+=ot.plus.points.length),ot.minus?.points&&(B+=ot.minus.points.length)}),B},[A.manifolds]),Tt=de.useCallback(async()=>{if(p){w(B=>({...B,isComputing:!0,needsRecompute:!1}));try{const{UlamComputer:B}=p;if(!B)throw console.error("UlamComputer export is missing from WASM module!"),new Error("UlamComputer definition missing");const ot=new B(g.a,g.b,C.subdivisions,C.pointsPerBox,C.epsilon);V.current=ot;const I=ot.get_grid_boxes(),Q=ot.get_invariant_measure(),ft=ot.get_left_eigenvector();let At=-1;x.hasStarted&&x.currentPoint&&(At=ot.get_box_index(x.currentPoint.x,x.currentPoint.y)),w(vt=>({...vt,isComputing:!1,gridBoxes:I,invariantMeasure:Q,leftEigenvector:ft,currentBoxIndex:At,selectedBoxIndex:null,transitions:null}))}catch(B){console.error("Ulam computation failed:",B),w(ot=>({...ot,isComputing:!1}))}}},[p,g.a,g.b,C.subdivisions,C.pointsPerBox,C.epsilon,x.hasStarted,x.currentPoint]);return de.useEffect(()=>{C.showUlamOverlay&&p&&C.gridBoxes.length===0&&!C.isComputing&&Tt()},[C.showUlamOverlay,p,C.gridBoxes.length,C.isComputing,Tt]),de.useEffect(()=>{if(!(!V.current||!C.showUlamOverlay)&&x.hasStarted&&x.currentPoint){const B=V.current.get_box_index(x.currentPoint.x,x.currentPoint.y);if(B!==C.currentBoxIndex){const ot=B>=0?V.current.get_transitions(B):null;w(I=>({...I,currentBoxIndex:B,transitions:I.showCurrentBox?ot:I.transitions,selectedBoxIndex:I.showCurrentBox?B:I.selectedBoxIndex}))}}},[x.currentPoint,x.hasStarted,C.showUlamOverlay,C.currentBoxIndex]),de.useEffect(()=>{const B=i.current;if(!B)return;const ot=()=>{const Wt=B.getObjectByName("ulam-grid");Wt&&(Wt.geometry.dispose(),Wt.material.dispose(),B.remove(Wt))};if(!C.showUlamOverlay||!C.gridBoxes.length){ot();return}ot();const I=C.gridBoxes,Q=I.length,ft=new $o(1,1),At=new gr({color:16777215,transparent:!0,opacity:.5,side:Oi,depthWrite:!1}),vt=new GS(ft,At,Q);vt.name="ulam-grid",vt.userData.type="ulamGrid";const zt=new Ln,kt=new ye,P=new Map;C.selectedBoxIndex!==null&&C.transitions&&C.transitions.forEach(Wt=>{P.set(Wt.index,Wt.probability)});let ce=0;return C.invariantMeasure&&(ce=Math.max(...C.invariantMeasure)),I.forEach((Wt,Gt)=>{const Pt=Wt.center[0],Le=Wt.center[1],Yt=Wt.radius[0],ue=Wt.radius[1];zt.position.set(Pt,Le,-.05),zt.scale.set(Yt*2*.95,ue*2*.95,1),zt.updateMatrix(),vt.setMatrixAt(Gt,zt.matrix);const We=C.showCurrentBox&&Gt===C.currentBoxIndex,qe=C.selectedBoxIndex!==null&&Gt===C.selectedBoxIndex;if(We&&!qe)kt.setHex(16711935),vt.setColorAt(Gt,kt);else if(C.selectedBoxIndex!==null)if(Gt===C.selectedBoxIndex)kt.setHex(65535),vt.setColorAt(Gt,kt);else if(P.has(Gt)){const N=P.get(Gt);kt.setHSL(.7-N*.7,1,.5),vt.setColorAt(Gt,kt)}else kt.setHex(2236962),vt.setColorAt(Gt,kt);else if(C.invariantMeasure&&C.invariantMeasure.length===Q){const N=C.invariantMeasure[Gt];if(N>0){const at=.66-N/ce*.5;kt.setHSL(at,1,.5),vt.setColorAt(Gt,kt)}else kt.setHex(1118481),vt.setColorAt(Gt,kt)}else kt.setHex(3355443),vt.setColorAt(Gt,kt)}),vt.instanceMatrix.needsUpdate=!0,vt.instanceColor&&(vt.instanceColor.needsUpdate=!0),B.add(vt),ot},[C.showUlamOverlay,C.gridBoxes,C.selectedBoxIndex,C.transitions,C.invariantMeasure,C.currentBoxIndex,C.showCurrentBox]),de.useEffect(()=>{if(!i.current)return;const B=i.current,ot=[];B.traverse(I=>{h!=="periodic"&&(I.userData.type==="orbit"||I.userData.type==="trajectory"||I.userData.type==="orbitLine")&&ot.push(I),h!=="manifold"&&(I.userData.type==="manifold"||I.userData.type==="fixedPoint")&&ot.push(I),h!=="ulam"&&I.userData.type}),ot.forEach(I=>{I.geometry&&I.geometry.dispose(),I.material&&I.material.dispose(),B.remove(I)})},[h]),K.jsxs("div",{style:Nt.container,children:[K.jsxs("div",{style:Nt.sidebar,children:[K.jsxs("div",{style:Nt.section,children:[K.jsx("h3",{style:Nt.sectionTitle,children:"Mode"}),K.jsxs("div",{style:Nt.toggleContainer,children:[K.jsx("button",{onClick:()=>m("periodic"),style:{...Nt.toggleButton,...h==="periodic"?Nt.toggleActive:{}},children:"Periodic Orbits"}),K.jsx("button",{onClick:()=>m("manifold"),style:{...Nt.toggleButton,...h==="manifold"?Nt.toggleActive:{}},children:"Unstable Manifold"})]})]}),K.jsxs("div",{style:Nt.section,children:[K.jsx("h3",{style:Nt.sectionTitle,children:"System Parameters"}),K.jsxs("label",{style:Nt.label,children:[K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"a ="}),K.jsx("input",{type:"number",step:"0.01",value:g.a,onChange:B=>y({...g,a:parseFloat(B.target.value)||.1}),style:Nt.numberInput,disabled:x.isRunning})]}),K.jsx("input",{type:"range",min:"0.1",max:"2.0",step:"0.01",value:g.a,onChange:B=>y({...g,a:parseFloat(B.target.value)}),style:Nt.slider,disabled:x.isRunning})]}),K.jsxs("label",{style:Nt.label,children:[K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"b ="}),K.jsx("input",{type:"number",step:"0.01",value:g.b,onChange:B=>y({...g,b:parseFloat(B.target.value)||.1}),style:Nt.numberInput,disabled:x.isRunning})]}),K.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.01",value:g.b,onChange:B=>y({...g,b:parseFloat(B.target.value)}),style:Nt.slider,disabled:x.isRunning})]}),h==="manifold"&&K.jsxs("label",{style:Nt.label,children:[K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"epsilon ="}),K.jsx("input",{type:"number",step:"0.001",value:g.epsilon,onChange:B=>y({...g,epsilon:parseFloat(B.target.value)||.01}),style:Nt.numberInput})]}),K.jsx("input",{type:"range",min:"0.001",max:"0.2",step:"0.001",value:g.epsilon,onChange:B=>y({...g,epsilon:parseFloat(B.target.value)}),style:Nt.slider})]}),h==="manifold"&&K.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[K.jsx("h4",{style:{fontSize:"12px",fontWeight:"600",marginBottom:"12px",color:"#888"},children:"Parameter Animation"}),K.jsx("label",{style:Nt.label,children:K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"Animate:"}),K.jsxs("select",{value:O.parameter,onChange:B=>G(ot=>({...ot,parameter:B.target.value})),style:{...Nt.numberInput,width:"100px"},disabled:O.isAnimating,children:[K.jsx("option",{value:"a",children:"a"}),K.jsx("option",{value:"b",children:"b"}),K.jsx("option",{value:"epsilon",children:"epsilon"})]})]})}),K.jsx("label",{style:Nt.label,children:K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"Direction:"}),K.jsxs("div",{style:{display:"flex",gap:"4px"},children:[K.jsx("button",{onClick:()=>G(B=>({...B,direction:-1})),style:{...Nt.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:O.direction===-1?"#3d5afe":"#2d2d2d"},disabled:O.isAnimating,children:"−"}),K.jsx("button",{onClick:()=>G(B=>({...B,direction:1})),style:{...Nt.button,width:"40px",padding:"4px",marginBottom:0,backgroundColor:O.direction===1?"#3d5afe":"#2d2d2d"},disabled:O.isAnimating,children:"+"})]})]})}),K.jsxs("label",{style:Nt.label,children:[K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"Range:"}),K.jsx("input",{type:"number",step:"0.05",min:"0.01",max:"1.0",value:O.rangeValue,onChange:B=>G(ot=>({...ot,rangeValue:parseFloat(B.target.value)||.1})),style:Nt.numberInput,disabled:O.isAnimating})]}),K.jsx("input",{type:"range",min:"0.01",max:"0.5",step:"0.01",value:O.rangeValue,onChange:B=>G(ot=>({...ot,rangeValue:parseFloat(B.target.value)})),style:Nt.slider,disabled:O.isAnimating})]}),K.jsxs("label",{style:Nt.label,children:[K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"Steps:"}),K.jsx("input",{type:"number",step:"1",min:"5",max:"30",value:O.steps,onChange:B=>G(ot=>({...ot,steps:parseInt(B.target.value)||10})),style:Nt.numberInput,disabled:O.isAnimating})]}),K.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:O.steps,onChange:B=>G(ot=>({...ot,steps:parseInt(B.target.value)})),style:Nt.slider,disabled:O.isAnimating})]}),K.jsx("button",{onClick:O.isAnimating?H:pt,disabled:A.isComputing&&!O.isAnimating,style:{...Nt.button,backgroundColor:O.isAnimating?"#8b0000":"#1a4a1a",borderColor:O.isAnimating?"#b22222":"#2a6a2a"},children:O.isAnimating?"⏹ Stop":"▶ Play"}),O.isAnimating&&K.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[K.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:[O.parameter,": ",O.baseValue?.toFixed(3)," → ",O.targetValue?.toFixed(3)]}),K.jsxs("div",{style:{fontSize:"11px",color:"#888"},children:["Current: ",K.jsx("span",{style:{color:"#4CAF50",fontWeight:"bold"},children:g[O.parameter].toFixed(4)})]}),K.jsxs("div",{style:{fontSize:"10px",color:"#555",marginTop:"4px"},children:["Step ",O.currentStep," / ",O.steps,A.isComputing&&K.jsx("span",{style:{color:"#ff9800",marginLeft:"8px"},children:"Computing..."})]}),K.jsx("div",{style:{marginTop:"6px",height:"4px",backgroundColor:"#333",borderRadius:"2px",overflow:"hidden"},children:K.jsx("div",{style:{width:`${O.currentStep/O.steps*100}%`,height:"100%",backgroundColor:"#4CAF50",transition:"width 0.3s ease"}})})]})]}),K.jsxs("div",{style:{marginTop:"16px",borderTop:"1px solid #333",paddingTop:"16px"},children:[K.jsxs("label",{style:Nt.checkboxLabel,children:[K.jsx("input",{type:"checkbox",checked:C.showUlamOverlay,onChange:B=>w({...C,showUlamOverlay:B.target.checked})}),"Show Ulam Grid"]}),C.showUlamOverlay&&K.jsxs(K.Fragment,{children:[K.jsxs("label",{style:Nt.checkboxLabel,children:[K.jsx("input",{type:"checkbox",checked:C.showTransitions,onChange:B=>w({...C,showTransitions:B.target.checked})}),"Show Transitions"]}),h==="periodic"&&K.jsxs("label",{style:Nt.checkboxLabel,children:[K.jsx("input",{type:"checkbox",checked:C.showCurrentBox,onChange:B=>w({...C,showCurrentBox:B.target.checked})}),"Track Current Position"]}),K.jsxs("label",{style:Nt.label,children:[K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"Epsilon (ε) ="}),K.jsx("input",{type:"number",step:"0.01",min:"0.001",max:"0.5",value:C.epsilon,onChange:B=>w({...C,epsilon:parseFloat(B.target.value)||.05}),style:Nt.numberInput,disabled:C.isComputing})]}),K.jsx("input",{type:"range",min:"0.01",max:"0.3",step:"0.01",value:C.epsilon,onChange:B=>w({...C,epsilon:parseFloat(B.target.value)}),style:Nt.slider,disabled:C.isComputing}),K.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Ball radius for boundary detection"})]}),K.jsxs("label",{style:Nt.label,children:[K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"Grid ="}),K.jsx("input",{type:"number",step:"1",min:"10",max:"80",value:C.subdivisions,onChange:B=>w({...C,subdivisions:parseInt(B.target.value)||10}),style:Nt.numberInput,disabled:C.isComputing})]}),K.jsx("input",{type:"range",min:"10",max:"60",step:"5",value:C.subdivisions,onChange:B=>w({...C,subdivisions:parseInt(B.target.value)}),style:Nt.slider,disabled:C.isComputing})]}),K.jsxs("label",{style:Nt.label,children:[K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"Samples ="}),K.jsx("input",{type:"number",step:"16",min:"16",max:"256",value:C.pointsPerBox,onChange:B=>w({...C,pointsPerBox:parseInt(B.target.value)||64}),style:Nt.numberInput,disabled:C.isComputing})]}),K.jsx("input",{type:"range",min:"16",max:"256",step:"16",value:C.pointsPerBox,onChange:B=>w({...C,pointsPerBox:parseInt(B.target.value)}),style:Nt.slider,disabled:C.isComputing}),K.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Points per box (√n × √n grid)"})]}),K.jsx("button",{onClick:Tt,disabled:C.isComputing,style:Nt.button,children:C.isComputing?"Computing...":"Recompute Ulam Grid"}),C.gridBoxes.length>0&&K.jsxs("div",{style:{marginTop:"12px",padding:"8px",background:"#0f0f0f",borderRadius:"4px"},children:[K.jsx("div",{style:{fontSize:"11px",fontWeight:"600",color:"#888",marginBottom:"6px"},children:"Invariant Measure"}),K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[K.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"Low"}),K.jsx("div",{style:{flex:1,height:"12px",borderRadius:"2px",background:"linear-gradient(to right, hsl(238, 100%, 50%), hsl(180, 100%, 50%), hsl(100, 100%, 50%), hsl(60, 100%, 50%))"}}),K.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"High"})]}),K.jsx("div",{style:{fontSize:"9px",color:"#555",marginTop:"4px"},children:"Probability of trajectory visiting each region"})]}),C.currentBoxIndex>=0&&K.jsxs("div",{style:{fontSize:"11px",color:"#888",marginTop:"4px"},children:["Current box: ",C.currentBoxIndex]})]})]}),h==="periodic"&&K.jsxs(K.Fragment,{children:[K.jsxs("label",{style:Nt.label,children:[K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"Max Period ="}),K.jsx("input",{type:"number",step:"1",min:"1",max:"20",value:g.maxPeriod,onChange:B=>y({...g,maxPeriod:parseInt(B.target.value)||2}),style:Nt.numberInput,disabled:x.isRunning})]}),K.jsx("input",{type:"range",min:"2",max:"10",step:"1",value:g.maxPeriod,onChange:B=>y({...g,maxPeriod:parseInt(B.target.value)}),style:Nt.slider,disabled:x.isRunning})]}),K.jsxs("label",{style:Nt.label,children:[K.jsxs("div",{style:Nt.paramRow,children:[K.jsx("span",{children:"Max Iterations ="}),K.jsx("input",{type:"number",step:"100",min:"100",max:"10000",value:g.maxIterations,onChange:B=>y({...g,maxIterations:parseInt(B.target.value)||100}),style:Nt.numberInput,disabled:x.isRunning})]}),K.jsx("input",{type:"range",min:"100",max:"5000",step:"100",value:g.maxIterations,onChange:B=>y({...g,maxIterations:parseInt(B.target.value)}),style:Nt.slider,disabled:x.isRunning})]})]})]}),h==="periodic"&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{style:Nt.section,children:[K.jsx("h3",{style:Nt.sectionTitle,children:"Periodic Orbits"}),[1,2,3,4,5].map(B=>K.jsxs("label",{style:Nt.checkboxLabel,children:[K.jsx("input",{type:"checkbox",checked:_[`period${B}`],onChange:ot=>F({..._,[`period${B}`]:ot.target.checked})}),K.jsx("span",{style:{...Nt.colorBox,backgroundColor:Li[`period${B}`].stable}}),"Period-",B," (",x.orbits.filter(ot=>ot.period===B).length,")"]},B)),K.jsxs("label",{style:Nt.checkboxLabel,children:[K.jsx("input",{type:"checkbox",checked:x.showOrbits,onChange:B=>E({...x,showOrbits:B.target.checked})}),"Show orbit markers"]}),K.jsxs("label",{style:Nt.checkboxLabel,children:[K.jsx("input",{type:"checkbox",checked:x.showTrail,onChange:B=>E({...x,showTrail:B.target.checked})}),"Show trajectory trail"]})]}),K.jsxs("div",{style:Nt.section,children:[K.jsx("h3",{style:Nt.sectionTitle,children:"Controls"}),K.jsx("button",{onClick:bt,disabled:!x.isReady||x.isRunning,style:Nt.button,children:"Step Forward"}),K.jsx("button",{onClick:L,disabled:!x.isReady||x.isRunning,style:{...Nt.button,...Nt.runButton},children:x.isRunning?"Running...":"Run to Max Iterations"}),K.jsx("button",{onClick:it,disabled:x.isRunning,style:{...Nt.button,...Nt.resetButton},children:"Reset"})]})]}),h==="manifold"&&A.fixedPoints.length>0&&K.jsxs("div",{style:Nt.section,children:[K.jsxs("h3",{style:Nt.sectionTitle,children:["Fixed Points (",A.fixedPoints.length,")"]}),A.fixedPoints.map((B,ot)=>K.jsxs("div",{style:Nt.fixedPointItem,children:[K.jsx("span",{style:{fontWeight:"bold",color:B.stability==="Attractor"?"#00ff00":B.stability==="Repeller"?"#ff4444":"#ffaa00"},children:B.stability}),K.jsxs("span",{children:[" (",B.x.toFixed(3),", ",B.y.toFixed(3),")"]})]},ot))]}),K.jsxs("div",{style:Nt.info,children:[K.jsx("div",{style:Nt.infoHeader,children:"Henon Map: x' = 1 - ax² + y, y' = bx"}),h==="periodic"?K.jsxs(K.Fragment,{children:[K.jsxs("div",{children:["Status: ",x.isReady?x.isRunning?"Running...":"Ready":"Loading..."]}),K.jsxs("div",{children:["Iteration: ",x.iteration," / ",g.maxIterations]}),x.hasStarted&&K.jsxs("div",{children:["Position: (",x.currentPoint.x.toFixed(4),", ",x.currentPoint.y.toFixed(4),")"]}),K.jsxs("div",{children:["Orbits found: ",x.orbits.length]})]}):K.jsxs(K.Fragment,{children:[K.jsxs("div",{children:["Status: ",A.isComputing?"Computing...":"Ready"]}),K.jsxs("div",{children:["Manifolds: ",A.manifolds.length]}),K.jsxs("div",{children:["Total Points: ",Et.toLocaleString()]})]})]})]}),K.jsxs("div",{style:Nt.viewport,children:[K.jsx("canvas",{ref:o,style:Nt.canvas}),W.visible&&W.data&&K.jsxs("div",{style:{position:"absolute",left:W.x+15,top:W.y+15,backgroundColor:"rgba(20, 20, 20, 0.95)",border:"1px solid #444",borderRadius:"4px",padding:"12px",zIndex:1e3,pointerEvents:"none",minWidth:"180px",maxWidth:"280px",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",fontSize:"12px",fontFamily:"monospace"},children:[K.jsxs("div",{style:{fontWeight:"bold",color:"#fff",marginBottom:"8px",borderBottom:"1px solid #444",paddingBottom:"4px"},children:[W.data.type,W.data.isCurrentBox&&K.jsx("span",{style:{color:"#ff00ff",marginLeft:"8px"},children:"● Current"})]}),W.data.type==="Ulam Box"?K.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"6px 12px"},children:[K.jsx("span",{style:{color:"#888"},children:"Box #:"}),K.jsx("span",{style:{color:"#00ccff"},children:W.data.boxIndex}),K.jsx("span",{style:{color:"#888"},children:"Center:"}),K.jsxs("span",{style:{color:"#ddd"},children:["(",W.data.pos.x.toFixed(2),", ",W.data.pos.y.toFixed(2),")"]}),K.jsx("span",{style:{color:"#888"},children:"Measure:"}),K.jsxs("span",{style:{color:"#4CAF50"},children:[(W.data.measure*100).toFixed(2),"%",K.jsxs("span",{style:{color:"#666",marginLeft:"4px"},children:["(",W.data.measurePercent.toFixed(0),"% of max)"]})]}),K.jsx("span",{style:{color:"#888"},children:"Transitions:"}),K.jsxs("span",{style:{color:"#ddd"},children:[W.data.numTransitions," boxes"]}),W.data.topTransitions&&W.data.topTransitions.length>0&&K.jsxs(K.Fragment,{children:[K.jsx("span",{style:{color:"#888"},children:"Top targets:"}),K.jsx("div",{style:{fontSize:"10px"},children:W.data.topTransitions.map((B,ot)=>K.jsxs("div",{style:{color:"#ff9800"},children:["→ Box ",B.index,": ",(B.probability*100).toFixed(1),"%"]},ot))})]})]}):K.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"8px 16px"},children:[K.jsx("span",{style:{color:"#888"},children:"Position:"}),K.jsxs("span",{style:{color:"#00ccff"},children:["(",W.data.pos.x.toFixed(4),", ",W.data.pos.y.toFixed(4),")"]}),K.jsx("span",{style:{color:"#888"},children:"Stability:"}),K.jsx("span",{style:{color:W.data.stability?.toLowerCase()==="attractor"||W.data.stability?.toLowerCase()==="stable"?"#27ae60":(W.data.stability?.toLowerCase()==="repeller"||W.data.stability?.toLowerCase()==="unstable","#e74c3c")},children:W.data.stability||"Unknown"}),K.jsx("span",{style:{color:"#888"},children:"Period:"}),K.jsx("span",{style:{color:"#ddd"},children:W.data.period}),W.data.jacobian&&K.jsxs(K.Fragment,{children:[K.jsx("span",{style:{color:"#888"},children:"Jacobian:"}),K.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px",background:"#333",padding:"4px",borderRadius:"2px"},children:[K.jsx("span",{children:W.data.jacobian.j11?.toFixed(3)}),K.jsx("span",{children:W.data.jacobian.j12?.toFixed(3)}),K.jsx("span",{children:W.data.jacobian.j21?.toFixed(3)}),K.jsx("span",{children:W.data.jacobian.j22?.toFixed(3)})]}),K.jsx("span",{style:{color:"#888"},children:"Det/Trace:"}),K.jsxs("span",{style:{color:"#ddd"},children:["D=",W.data.jacobian.det?.toFixed(3),", Tr=",W.data.jacobian.trace?.toFixed(3)]})]})]})]})]})]})},Nt={container:{display:"flex",height:"100vh",width:"100vw",backgroundColor:"#0a0a0a",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0",overflow:"hidden"},sidebar:{width:"320px",minWidth:"320px",padding:"20px",backgroundColor:"#1a1a1a",borderRight:"1px solid #333",overflowY:"auto"},section:{marginBottom:"24px"},sectionTitle:{fontSize:"14px",fontWeight:"600",marginBottom:"12px",color:"#fff",textTransform:"uppercase",letterSpacing:"0.5px"},toggleContainer:{display:"flex",gap:"4px"},toggleButton:{flex:1,padding:"10px",backgroundColor:"#2d2d2d",color:"#888",border:"1px solid #444",borderRadius:"4px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},toggleActive:{backgroundColor:"#3d5afe",color:"#fff",borderColor:"#3d5afe"},label:{display:"flex",flexDirection:"column",marginBottom:"12px",fontSize:"13px",color:"#b0b0b0"},paramRow:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"},numberInput:{width:"80px",padding:"4px 8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",fontSize:"13px",textAlign:"right"},slider:{marginTop:"6px",width:"100%"},checkboxLabel:{display:"flex",alignItems:"center",marginBottom:"10px",fontSize:"13px",cursor:"pointer",gap:"8px"},colorBox:{width:"14px",height:"14px",borderRadius:"2px",display:"inline-block"},button:{width:"100%",padding:"10px",marginBottom:"8px",backgroundColor:"#2d2d2d",color:"#fff",border:"1px solid #444",borderRadius:"4px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s"},runButton:{backgroundColor:"#1a4a1a",borderColor:"#2a6a2a"},resetButton:{backgroundColor:"#1a1a1a",borderColor:"#555"},fixedPointItem:{marginBottom:"6px",fontSize:"12px",padding:"6px",background:"#0f0f0f",borderRadius:"4px"},info:{marginTop:"16px",padding:"12px",backgroundColor:"#0f0f0f",borderRadius:"4px",fontSize:"11px",lineHeight:"1.6",color:"#888"},infoHeader:{fontSize:"12px",fontWeight:"600",color:"#4CAF50",marginBottom:"8px"},viewport:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},canvas:{display:"block"}};_y.createRoot(document.getElementById("root")).render(K.jsx(de.StrictMode,{children:K.jsx(PA,{})}));
