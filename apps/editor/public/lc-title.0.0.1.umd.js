(function(k,M){typeof exports=="object"&&typeof module<"u"?module.exports=M():typeof define=="function"&&define.amd?define(M):(k=typeof globalThis<"u"?globalThis:k||self,k.LcTitle=M())})(this,function(){"use strict";var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`.lc-title{width:100%;height:100%;overflow:hidden;text-overflow:ellipsis}
`;document.head.appendChild(__vite_style__);function k(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function M(e){if(d(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=y(r)?Yt(r):M(r);if(s)for(const o in s)t[o]=s[o]}return t}else{if(y(e))return e;if(N(e))return e}}const Lt=/;(?![^(]*\))/g,Gt=/:(.+)/;function Yt(e){const t={};return e.split(Lt).forEach(n=>{if(n){const r=n.split(Gt);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ve(e){let t="";if(y(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){const r=Ve(e[n]);r&&(t+=r+" ")}else if(N(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Xt=e=>y(e)?e:e==null?"":d(e)||N(e)&&(e.toString===Qe||!E(e.toString))?JSON.stringify(e,Ye,2):String(e),Ye=(e,t)=>t&&t.__v_isRef?Ye(e,t.value):z(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ze(t)?{[`Set(${t.size})`]:[...t.values()]}:N(t)&&!d(t)&&!et(t)?String(t):t,x=process.env.NODE_ENV!=="production"?Object.freeze({}):{},Zt=process.env.NODE_ENV!=="production"?Object.freeze([]):[],Xe=()=>{},Qt=()=>!1,kt=/^on[^a-z]/,en=e=>kt.test(e),C=Object.assign,tn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},nn=Object.prototype.hasOwnProperty,_=(e,t)=>nn.call(e,t),d=Array.isArray,z=e=>ie(e)==="[object Map]",Ze=e=>ie(e)==="[object Set]",E=e=>typeof e=="function",y=e=>typeof e=="string",xe=e=>typeof e=="symbol",N=e=>e!==null&&typeof e=="object",rn=e=>N(e)&&E(e.then)&&E(e.catch),Qe=Object.prototype.toString,ie=e=>Qe.call(e),ke=e=>ie(e).slice(8,-1),et=e=>ie(e)==="[object Object]",ye=e=>y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,sn=(e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))})(e=>e.charAt(0).toUpperCase()+e.slice(1)),ce=(e,t)=>!Object.is(e,t),on=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})};let tt;const cn=()=>tt||(tt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nt(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let ln;function un(e,t=ln){t&&t.active&&t.effects.push(e)}const De=e=>{const t=new Set(e);return t.w=0,t.n=0,t},rt=e=>(e.w&v)>0,st=e=>(e.n&v)>0,an=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},fn=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];rt(s)&&!st(s)?s.delete(e):t[n++]=s,s.w&=~v,s.n&=~v}t.length=n}},Re=new WeakMap;let ee=0,v=1;const Ce=30;let O;const H=Symbol(process.env.NODE_ENV!=="production"?"iterate":""),Ie=Symbol(process.env.NODE_ENV!=="production"?"Map key iterate":"");class pn{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,un(this,r)}run(){if(!this.active)return this.fn();let t=O,n=K;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=O,O=this,K=!0,v=1<<++ee,ee<=Ce?an(this):ot(this),this.fn()}finally{ee<=Ce&&fn(this),v=1<<--ee,O=this.parent,K=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){O===this?this.deferStop=!0:this.active&&(ot(this),this.onStop&&this.onStop(),this.active=!1)}}function ot(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let K=!0;const it=[];function ct(){it.push(K),K=!1}function lt(){const e=it.pop();K=e===void 0?!0:e}function D(e,t,n){if(K&&O){let r=Re.get(e);r||Re.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=De());const o=process.env.NODE_ENV!=="production"?{effect:O,target:e,type:t,key:n}:void 0;dn(s,o)}}function dn(e,t){let n=!1;ee<=Ce?st(e)||(e.n|=v,n=!rt(e)):n=!e.has(O),n&&(e.add(O),O.deps.push(e),process.env.NODE_ENV!=="production"&&O.onTrack&&O.onTrack(Object.assign({effect:O},t)))}function F(e,t,n,r,s,o){const i=Re.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&d(e))i.forEach((f,h)=>{(h==="length"||h>=r)&&c.push(f)});else switch(n!==void 0&&c.push(i.get(n)),t){case"add":d(e)?ye(n)&&c.push(i.get("length")):(c.push(i.get(H)),z(e)&&c.push(i.get(Ie)));break;case"delete":d(e)||(c.push(i.get(H)),z(e)&&c.push(i.get(Ie)));break;case"set":z(e)&&c.push(i.get(H));break}const u=process.env.NODE_ENV!=="production"?{target:e,type:t,key:n,newValue:r,oldValue:s,oldTarget:o}:void 0;if(c.length===1)c[0]&&(process.env.NODE_ENV!=="production"?le(c[0],u):le(c[0]));else{const f=[];for(const h of c)h&&f.push(...h);process.env.NODE_ENV!=="production"?le(De(f),u):le(De(f))}}function le(e,t){const n=d(e)?e:[...e];for(const r of n)r.computed&&ut(r,t);for(const r of n)r.computed||ut(r,t)}function ut(e,t){(e!==O||e.allowRecurse)&&(process.env.NODE_ENV!=="production"&&e.onTrigger&&e.onTrigger(C({effect:e},t)),e.scheduler?e.scheduler():e.run())}const hn=k("__proto__,__v_isRef,__isVue"),at=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xe)),_n=Te(),gn=Te(!0),mn=Te(!0,!0),ft=En();function En(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=p(this);for(let o=0,i=this.length;o<i;o++)D(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(p)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ct();const r=p(this)[t].apply(this,n);return lt(),r}}),e}function Te(e=!1,t=!1){return function(r,s,o){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&o===(e?t?Nt:wt:t?Mn:Et).get(r))return r;const i=d(r);if(!e&&i&&_(ft,s))return Reflect.get(ft,s,o);const c=Reflect.get(r,s,o);return(xe(s)?at.has(s):hn(s))||(e||D(r,"get",s),t)?c:S(c)?i&&ye(s)?c:c.value:N(c)?e?Ot(c):bt(c):c}}const wn=Nn();function Nn(e=!1){return function(n,r,s,o){let i=n[r];if(U(i)&&S(i)&&!S(s))return!1;if(!e&&!U(s)&&(ve(s)||(s=p(s),i=p(i)),!d(n)&&S(i)&&!S(s)))return i.value=s,!0;const c=d(n)&&ye(r)?Number(r)<n.length:_(n,r),u=Reflect.set(n,r,s,o);return n===p(o)&&(c?ce(s,i)&&F(n,"set",r,s,i):F(n,"add",r,s)),u}}function bn(e,t){const n=_(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&F(e,"delete",t,void 0,r),s}function On(e,t){const n=Reflect.has(e,t);return(!xe(t)||!at.has(t))&&D(e,"has",t),n}function Sn(e){return D(e,"iterate",d(e)?"length":H),Reflect.ownKeys(e)}const Vn={get:_n,set:wn,deleteProperty:bn,has:On,ownKeys:Sn},pt={get:gn,set(e,t){return process.env.NODE_ENV!=="production"&&nt(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return process.env.NODE_ENV!=="production"&&nt(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},xn=C({},pt,{get:mn}),Pe=e=>e,ue=e=>Reflect.getPrototypeOf(e);function ae(e,t,n=!1,r=!1){e=e.__v_raw;const s=p(e),o=p(t);n||(t!==o&&D(s,"get",t),D(s,"get",o));const{has:i}=ue(s),c=r?Pe:n?je:Ae;if(i.call(s,t))return c(e.get(t));if(i.call(s,o))return c(e.get(o));e!==s&&e.get(t)}function fe(e,t=!1){const n=this.__v_raw,r=p(n),s=p(e);return t||(e!==s&&D(r,"has",e),D(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function pe(e,t=!1){return e=e.__v_raw,!t&&D(p(e),"iterate",H),Reflect.get(e,"size",e)}function dt(e){e=p(e);const t=p(this);return ue(t).has.call(t,e)||(t.add(e),F(t,"add",e,e)),this}function ht(e,t){t=p(t);const n=p(this),{has:r,get:s}=ue(n);let o=r.call(n,e);o?process.env.NODE_ENV!=="production"&&mt(n,r,e):(e=p(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?ce(t,i)&&F(n,"set",e,t,i):F(n,"add",e,t),this}function _t(e){const t=p(this),{has:n,get:r}=ue(t);let s=n.call(t,e);s?process.env.NODE_ENV!=="production"&&mt(t,n,e):(e=p(e),s=n.call(t,e));const o=r?r.call(t,e):void 0,i=t.delete(e);return s&&F(t,"delete",e,void 0,o),i}function gt(){const e=p(this),t=e.size!==0,n=process.env.NODE_ENV!=="production"?z(e)?new Map(e):new Set(e):void 0,r=e.clear();return t&&F(e,"clear",void 0,void 0,n),r}function de(e,t){return function(r,s){const o=this,i=o.__v_raw,c=p(i),u=t?Pe:e?je:Ae;return!e&&D(c,"iterate",H),i.forEach((f,h)=>r.call(s,u(f),u(h),o))}}function he(e,t,n){return function(...r){const s=this.__v_raw,o=p(s),i=z(o),c=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,f=s[e](...r),h=n?Pe:t?je:Ae;return!t&&D(o,"iterate",u?Ie:H),{next(){const{value:l,done:a}=f.next();return a?{value:l,done:a}:{value:c?[h(l[0]),h(l[1])]:h(l),done:a}},[Symbol.iterator](){return this}}}}function A(e){return function(...t){if(process.env.NODE_ENV!=="production"){const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${sn(e)} operation ${n}failed: target is readonly.`,p(this))}return e==="delete"?!1:this}}function yn(){const e={get(o){return ae(this,o)},get size(){return pe(this)},has:fe,add:dt,set:ht,delete:_t,clear:gt,forEach:de(!1,!1)},t={get(o){return ae(this,o,!1,!0)},get size(){return pe(this)},has:fe,add:dt,set:ht,delete:_t,clear:gt,forEach:de(!1,!0)},n={get(o){return ae(this,o,!0)},get size(){return pe(this,!0)},has(o){return fe.call(this,o,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:de(!0,!1)},r={get(o){return ae(this,o,!0,!0)},get size(){return pe(this,!0)},has(o){return fe.call(this,o,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:de(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=he(o,!1,!1),n[o]=he(o,!0,!1),t[o]=he(o,!1,!0),r[o]=he(o,!0,!0)}),[e,n,t,r]}const[Dn,Rn,Cn,In]=yn();function $e(e,t){const n=t?e?In:Cn:e?Rn:Dn;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(_(n,s)&&s in r?n:r,s,o)}const Tn={get:$e(!1,!1)},Pn={get:$e(!0,!1)},$n={get:$e(!0,!0)};function mt(e,t,n){const r=p(n);if(r!==n&&t.call(e,r)){const s=ke(e);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Et=new WeakMap,Mn=new WeakMap,wt=new WeakMap,Nt=new WeakMap;function vn(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fn(e){return e.__v_skip||!Object.isExtensible(e)?0:vn(ke(e))}function bt(e){return U(e)?e:Me(e,!1,Vn,Tn,Et)}function Ot(e){return Me(e,!0,pt,Pn,wt)}function _e(e){return Me(e,!0,xn,$n,Nt)}function Me(e,t,n,r,s){if(!N(e))return process.env.NODE_ENV!=="production"&&console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=Fn(e);if(i===0)return e;const c=new Proxy(e,i===2?r:n);return s.set(e,c),c}function W(e){return U(e)?W(e.__v_raw):!!(e&&e.__v_isReactive)}function U(e){return!!(e&&e.__v_isReadonly)}function ve(e){return!!(e&&e.__v_isShallow)}function Fe(e){return W(e)||U(e)}function p(e){const t=e&&e.__v_raw;return t?p(t):e}function An(e){return on(e,"__v_skip",!0),e}const Ae=e=>N(e)?bt(e):e,je=e=>N(e)?Ot(e):e;function S(e){return!!(e&&e.__v_isRef===!0)}function jn(e){return S(e)?e.value:e}const zn={get:(e,t,n)=>jn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return S(s)&&!S(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Hn(e){return W(e)?e:new Proxy(e,zn)}const B=[];function Kn(e){B.push(e)}function Wn(){B.pop()}function V(e,...t){ct();const n=B.length?B[B.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=Un();if(r)q(r,n,11,[e+t.join(""),n&&n.proxy,s.map(({vnode:o})=>`at <${qt(n,o.type)}>`).join(`
`),s]);else{const o=[`[Vue warn]: ${e}`,...t];s.length&&o.push(`
`,...Bn(s)),console.warn(...o)}lt()}function Un(){let e=B[B.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function Bn(e){const t=[];return e.forEach((n,r)=>{t.push(...r===0?[]:[`
`],...qn(n))}),t}function qn({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=e.component?e.component.parent==null:!1,s=` at <${qt(e.component,e.type,r)}`,o=">"+n;return e.props?[s,...Jn(e.props),o]:[s+o]}function Jn(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(r=>{t.push(...St(r,e[r]))}),n.length>3&&t.push(" ..."),t}function St(e,t,n){return y(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:S(t)?(t=St(e,p(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):E(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=p(t),n?t:[`${e}=`,t])}const Vt={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function q(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){xt(o,t,n)}return s}function ze(e,t,n,r){if(E(e)){const o=q(e,t,n,r);return o&&rn(o)&&o.catch(i=>{xt(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(ze(e[o],t,n,r));return s}function xt(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,c=process.env.NODE_ENV!=="production"?Vt[n]:n;for(;o;){const f=o.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,i,c)===!1)return}o=o.parent}const u=t.appContext.config.errorHandler;if(u){q(u,null,10,[e,i,c]);return}}Ln(e,n,s,r)}function Ln(e,t,n,r=!0){if(process.env.NODE_ENV!=="production"){const s=Vt[t];if(n&&Kn(n),V(`Unhandled error${s?` during execution of ${s}`:""}`),n&&Wn(),r)throw e;console.error(e)}else console.error(e)}let ge=!1,He=!1;const I=[];let j=0;const te=[];let X=null,J=0;const ne=[];let $=null,L=0;const yt=Promise.resolve();let Ke=null,We=null;const Gn=100;function Yn(e){const t=Ke||yt;return e?t.then(this?e.bind(this):e):t}function Xn(e){let t=j+1,n=I.length;for(;t<n;){const r=t+n>>>1;re(I[r])<e?t=r+1:n=r}return t}function Dt(e){(!I.length||!I.includes(e,ge&&e.allowRecurse?j+1:j))&&e!==We&&(e.id==null?I.push(e):I.splice(Xn(e.id),0,e),Rt())}function Rt(){!ge&&!He&&(He=!0,Ke=yt.then(Tt))}function Ct(e,t,n,r){d(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Rt()}function Zn(e){Ct(e,X,te,J)}function It(e){Ct(e,$,ne,L)}function Ue(e,t=null){if(te.length){for(We=t,X=[...new Set(te)],te.length=0,process.env.NODE_ENV!=="production"&&(e=e||new Map),J=0;J<X.length;J++)process.env.NODE_ENV!=="production"&&Be(e,X[J])||X[J]();X=null,J=0,We=null,Ue(e,t)}}function Qn(e){if(Ue(),ne.length){const t=[...new Set(ne)];if(ne.length=0,$){$.push(...t);return}for($=t,process.env.NODE_ENV!=="production"&&(e=e||new Map),$.sort((n,r)=>re(n)-re(r)),L=0;L<$.length;L++)process.env.NODE_ENV!=="production"&&Be(e,$[L])||$[L]();$=null,L=0}}const re=e=>e.id==null?1/0:e.id;function Tt(e){He=!1,ge=!0,process.env.NODE_ENV!=="production"&&(e=e||new Map),Ue(e),I.sort((n,r)=>re(n)-re(r));const t=process.env.NODE_ENV!=="production"?n=>Be(e,n):Xe;try{for(j=0;j<I.length;j++){const n=I[j];if(n&&n.active!==!1){if(process.env.NODE_ENV!=="production"&&t(n))continue;q(n,null,14)}}}finally{j=0,I.length=0,Qn(e),ge=!1,Ke=null,(I.length||te.length||ne.length)&&Tt(e)}}function Be(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>Gn){const r=t.ownerInstance,s=r&&Bt(r.type);return V(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}const se=new Set;process.env.NODE_ENV!=="production"&&(cn().__VUE_HMR_RUNTIME__={createRecord:qe(kn),rerender:qe(er),reload:qe(tr)});const me=new Map;function kn(e,t){return me.has(e)?!1:(me.set(e,{initialDef:oe(t),instances:new Set}),!0)}function oe(e){return Jt(e)?e.__vccOpts:e}function er(e,t){const n=me.get(e);!n||(n.initialDef.render=t,[...n.instances].forEach(r=>{t&&(r.render=t,oe(r.type).render=t),r.renderCache=[],r.update()}))}function tr(e,t){const n=me.get(e);if(!n)return;t=oe(t),Pt(n.initialDef,t);const r=[...n.instances];for(const s of r){const o=oe(s.type);se.has(o)||(o!==n.initialDef&&Pt(o,t),se.add(o)),s.appContext.optionsCache.delete(s.type),s.ceReload?(se.add(o),s.ceReload(t.styles),se.delete(o)):s.parent?(Dt(s.parent.update),s.parent.type.__asyncLoader&&s.parent.ceReload&&s.parent.ceReload(t.styles)):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}It(()=>{for(const s of r)se.delete(oe(s.type))})}function Pt(e,t){C(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function qe(e){return(t,n)=>{try{return e(t,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let G=null,nr=null;function Kr(){}const rr=e=>e.__isSuspense;function sr(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):It(e)}const $t={};function or(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:i}=x){process.env.NODE_ENV!=="production"&&!t&&(n!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=g=>{V("Invalid watch source: ",g,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Q;let f,h=!1,l=!1;if(S(e)?(f=()=>e.value,h=ve(e)):W(e)?(f=()=>e,r=!0):d(e)?(l=!0,h=e.some(g=>W(g)||ve(g)),f=()=>e.map(g=>{if(S(g))return g.value;if(W(g))return Z(g);if(E(g))return q(g,u,2);process.env.NODE_ENV!=="production"&&c(g)})):E(e)?t?f=()=>q(e,u,2):f=()=>{if(!(u&&u.isUnmounted))return a&&a(),ze(e,u,3,[m])}:(f=Xe,process.env.NODE_ENV!=="production"&&c(e)),t&&r){const g=f;f=()=>Z(g())}let a,m=g=>{a=R.onStop=()=>{q(g,u,4)}},w=l?[]:$t;const P=()=>{if(!!R.active)if(t){const g=R.run();(r||h||(l?g.some((jr,zr)=>ce(jr,w[zr])):ce(g,w)))&&(a&&a(),ze(t,u,3,[g,w===$t?void 0:w,m]),w=g)}else R.run()};P.allowRecurse=!!t;let Se;s==="sync"?Se=P:s==="post"?Se=()=>Ft(P,u&&u.suspense):Se=()=>Zn(P);const R=new pn(f,Se);return process.env.NODE_ENV!=="production"&&(R.onTrack=o,R.onTrigger=i),t?n?P():w=R.run():s==="post"?Ft(R.run.bind(R),u&&u.suspense):R.run(),()=>{R.stop(),u&&u.scope&&tn(u.scope.effects,R)}}function ir(e,t,n){const r=this.proxy,s=y(e)?e.includes(".")?cr(r,e):()=>r[e]:e.bind(r,r);let o;E(t)?o=t:(o=t.handler,n=t);const i=Q;Ut(this);const c=or(s,o.bind(r),n);return i?Ut(i):Ir(),c}function cr(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Z(e,t){if(!N(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),S(e))Z(e.value,t);else if(d(e))for(let n=0;n<e.length;n++)Z(e[n],t);else if(Ze(e)||z(e))e.forEach(n=>{Z(n,t)});else if(et(e))for(const n in e)Z(e[n],t);return e}function lr(e){return E(e)?{setup:e,name:e.name}:e}const ur=Symbol(),Je=e=>e?Tr(e)?Pr(e)||e.proxy:Je(e.parent):null,Ee=C(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>process.env.NODE_ENV!=="production"?_e(e.props):e.props,$attrs:e=>process.env.NODE_ENV!=="production"?_e(e.attrs):e.attrs,$slots:e=>process.env.NODE_ENV!=="production"?_e(e.slots):e.slots,$refs:e=>process.env.NODE_ENV!=="production"?_e(e.refs):e.refs,$parent:e=>Je(e.parent),$root:e=>Je(e.root),$emit:e=>e.emit,$options:e=>pr(e),$forceUpdate:e=>e.f||(e.f=()=>Dt(e.update)),$nextTick:e=>e.n||(e.n=Yn.bind(e.proxy)),$watch:e=>ir.bind(e)}),ar=e=>e==="_"||e==="$",fr={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:c,appContext:u}=e;if(process.env.NODE_ENV!=="production"&&t==="__isVue")return!0;if(process.env.NODE_ENV!=="production"&&r!==x&&r.__isScriptSetup&&_(r,t))return r[t];let f;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(r!==x&&_(r,t))return i[t]=1,r[t];if(s!==x&&_(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&_(f,t))return i[t]=3,o[t];if(n!==x&&_(n,t))return i[t]=4,n[t];i[t]=0}}const h=Ee[t];let l,a;if(h)return t==="$attrs"&&(D(e,"get",t),process.env.NODE_ENV!=="production"&&void 0),h(e);if((l=c.__cssModules)&&(l=l[t]))return l;if(n!==x&&_(n,t))return i[t]=4,n[t];if(a=u.config.globalProperties,_(a,t))return a[t];process.env.NODE_ENV!=="production"&&G&&(!y(t)||t.indexOf("__v")!==0)&&(s!==x&&ar(t[0])&&_(s,t)?V(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===G&&V(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==x&&_(s,t)?(s[t]=n,!0):r!==x&&_(r,t)?(r[t]=n,!0):_(e.props,t)?(process.env.NODE_ENV!=="production"&&V(`Attempting to mutate prop "${t}". Props are readonly.`,e),!1):t[0]==="$"&&t.slice(1)in e?(process.env.NODE_ENV!=="production"&&V(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`,e),!1):(process.env.NODE_ENV!=="production"&&t in e.appContext.config.globalProperties?Object.defineProperty(o,t,{enumerable:!0,configurable:!0,value:n}):o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let c;return!!n[i]||e!==x&&_(e,i)||t!==x&&_(t,i)||(c=o[0])&&_(c,i)||_(r,i)||_(Ee,i)||_(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:_(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};process.env.NODE_ENV!=="production"&&(fr.ownKeys=e=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e)));function pr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,c=o.get(t);let u;return c?u=c:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(f=>we(u,f,i,!0)),we(u,t,i)),o.set(t,u),u}function we(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&we(e,o,n,!0),s&&s.forEach(i=>we(e,i,n,!0));for(const i in t)if(r&&i==="expose")process.env.NODE_ENV!=="production"&&V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=dr[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const dr={data:Mt,props:Y,emits:Y,methods:Y,computed:Y,beforeCreate:b,created:b,beforeMount:b,mounted:b,beforeUpdate:b,updated:b,beforeDestroy:b,beforeUnmount:b,destroyed:b,unmounted:b,activated:b,deactivated:b,errorCaptured:b,serverPrefetch:b,components:Y,directives:Y,watch:_r,provide:Mt,inject:hr};function Mt(e,t){return t?e?function(){return C(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function hr(e,t){return Y(vt(e),vt(t))}function vt(e){if(d(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function b(e,t){return e?[...new Set([].concat(e,t))]:t}function Y(e,t){return e?C(C(Object.create(null),e),t):t}function _r(e,t){if(!e)return t;if(!t)return e;const n=C(Object.create(null),e);for(const r in t)n[r]=b(e[r],t[r]);return n}function gr(){return{app:null,config:{isNativeTag:Qt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}const Ft=sr,mr=e=>e.__isTeleport,At=Symbol(process.env.NODE_ENV!=="production"?"Fragment":void 0),Er=Symbol(process.env.NODE_ENV!=="production"?"Text":void 0),wr=Symbol(process.env.NODE_ENV!=="production"?"Comment":void 0);Symbol(process.env.NODE_ENV!=="production"?"Static":void 0);const Ne=[];let T=null;function Nr(e=!1){Ne.push(T=e?null:[])}function br(){Ne.pop(),T=Ne[Ne.length-1]||null}function Or(e){return e.dynamicChildren=T||Zt,br(),T&&T.push(e),e}function Sr(e,t,n,r,s,o){return Or(Ht(e,t,n,r,s,o,!0))}function Vr(e){return e?e.__v_isVNode===!0:!1}const xr=(...e)=>Kt(...e),jt="__vInternal",zt=({key:e})=>e!=null?e:null,be=({ref:e,ref_key:t,ref_for:n})=>e!=null?y(e)||S(e)||E(e)?{i:G,r:e,k:t,f:!!n}:e:null;function Ht(e,t=null,n=null,r=0,s=null,o=e===At?0:1,i=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zt(t),ref:t&&be(t),scopeId:nr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Le(u,n),o&128&&e.normalize(u)):n&&(u.shapeFlag|=y(n)?8:16),process.env.NODE_ENV!=="production"&&u.key!==u.key&&V("VNode created with invalid key (NaN). VNode type:",u.type),!i&&T&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&T.push(u),u}const yr=process.env.NODE_ENV!=="production"?xr:Kt;function Kt(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===ur)&&(process.env.NODE_ENV!=="production"&&!e&&V(`Invalid vnode type when creating vnode: ${e}.`),e=wr),Vr(e)){const c=Oe(e,t,!0);return n&&Le(c,n),!o&&T&&(c.shapeFlag&6?T[T.indexOf(e)]=c:T.push(c)),c.patchFlag|=-2,c}if(Jt(e)&&(e=e.__vccOpts),t){t=Dr(t);let{class:c,style:u}=t;c&&!y(c)&&(t.class=Ve(c)),N(u)&&(Fe(u)&&!d(u)&&(u=C({},u)),t.style=M(u))}const i=y(e)?1:rr(e)?128:mr(e)?64:N(e)?4:E(e)?2:0;return process.env.NODE_ENV!=="production"&&i&4&&Fe(e)&&(e=p(e),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),Ht(e,t,n,r,s,i,o,!0)}function Dr(e){return e?Fe(e)||jt in e?C({},e):e:null}function Oe(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,c=t?Cr(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&zt(c),ref:t&&t.ref?n&&s?d(s)?s.concat(be(t)):[s,be(t)]:be(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:process.env.NODE_ENV!=="production"&&o===-1&&d(i)?i.map(Wt):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==At?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Oe(e.ssContent),ssFallback:e.ssFallback&&Oe(e.ssFallback),el:e.el,anchor:e.anchor}}function Wt(e){const t=Oe(e);return d(e.children)&&(t.children=e.children.map(Wt)),t}function Rr(e=" ",t=0){return yr(Er,null,e,t)}function Le(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Le(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(jt in t)?t._ctx=G:s===3&&G&&(G.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else E(t)?(t={default:t,_ctx:G},n=32):(t=String(t),r&64?(n=16,t=[Rr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ve([t.class,r.class]));else if(s==="style")t.style=M([t.style,r.style]);else if(en(s)){const o=t[s],i=r[s];i&&o!==i&&!(d(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}gr();let Q=null;const Ut=e=>{Q=e,e.scope.on()},Ir=()=>{Q&&Q.scope.off(),Q=null};function Tr(e){return e.vnode.shapeFlag&4}function Pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hn(An(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ee)return Ee[n](e)}}))}const $r=/(?:^|[-_])(\w)/g,Mr=e=>e.replace($r,t=>t.toUpperCase()).replace(/[-_]/g,"");function Bt(e,t=!0){return E(e)?e.displayName||e.name:e.name||t&&e.__name}function qt(e,t,n=!1){let r=Bt(t);if(!r&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&e&&e.parent){const s=o=>{for(const i in o)if(o[i]===t)return i};r=s(e.components||e.parent.type.components)||s(e.appContext.components)}return r?Mr(r):n?"App":"Anonymous"}function Jt(e){return E(e)&&"__vccOpts"in e}Symbol(process.env.NODE_ENV!=="production"?"ssrContext":"");function Ge(e){return!!(e&&e.__v_isShallow)}function vr(){if(process.env.NODE_ENV==="production"||typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(l){return N(l)?l.__isVue?["div",e,"VueInstance"]:S(l)?["div",{},["span",e,h(l)],"<",c(l.value),">"]:W(l)?["div",{},["span",e,Ge(l)?"ShallowReactive":"Reactive"],"<",c(l),`>${U(l)?" (readonly)":""}`]:U(l)?["div",{},["span",e,Ge(l)?"ShallowReadonly":"Readonly"],"<",c(l),">"]:null:null},hasBody(l){return l&&l.__isVue},body(l){if(l&&l.__isVue)return["div",{},...o(l.$)]}};function o(l){const a=[];l.type.props&&l.props&&a.push(i("props",p(l.props))),l.setupState!==x&&a.push(i("setup",l.setupState)),l.data!==x&&a.push(i("data",p(l.data)));const m=u(l,"computed");m&&a.push(i("computed",m));const w=u(l,"inject");return w&&a.push(i("injected",w)),a.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:l}]]),a}function i(l,a){return a=C({},a),Object.keys(a).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},l],["div",{style:"padding-left:1.25em"},...Object.keys(a).map(m=>["div",{},["span",r,m+": "],c(a[m],!1)])]]:["span",{}]}function c(l,a=!0){return typeof l=="number"?["span",t,l]:typeof l=="string"?["span",n,JSON.stringify(l)]:typeof l=="boolean"?["span",r,l]:N(l)?["object",{object:a?p(l):l}]:["span",n,String(l)]}function u(l,a){const m=l.type;if(E(m))return;const w={};for(const P in l.ctx)f(m,P,a)&&(w[P]=l.ctx[P]);return w}function f(l,a,m){const w=l[m];if(d(w)&&w.includes(a)||N(w)&&a in w||l.extends&&f(l.extends,a,m)||l.mixins&&l.mixins.some(P=>f(P,a,m)))return!0}function h(l){return Ge(l)?"ShallowRef":l.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}function Fr(){vr()}process.env.NODE_ENV!=="production"&&Fr();const Ar=lr({__name:"index",props:{title:null,color:null,size:null},setup(e){return(t,n)=>(Nr(),Sr("p",{style:M("font-size: "+e.size+"px; color: "+e.color),class:"lc-title"},Xt(e.title),5))}}),Wr="";return{render:Ar,editorProps:{title:{type:"string",defaultValue:"\u8BF7\u8F93\u5165\u6587\u5B57",display:"\u5185\u5BB9"},color:{type:"color",defaultValue:"#333",display:"\u989C\u8272"},size:{type:"number",defaultValue:16,display:"\u5927\u5C0F"}}}});
