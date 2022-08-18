(function(k,j){typeof exports=="object"&&typeof module<"u"?module.exports=j():typeof define=="function"&&define.amd?define(j):(k=typeof globalThis<"u"?globalThis:k||self,k.LcImage=j())})(this,function(){"use strict";var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`.lc-image{width:100%;height:100%;background-color:#eee}
`;document.head.appendChild(__vite_style__);function k(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function j(e){if(_(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=v(r)?qt(r):j(r);if(s)for(const o in s)t[o]=s[o]}return t}else{if(v(e))return e;if(x(e))return e}}const Ut=/;(?![^(]*\))/g,Bt=/:(.+)/;function qt(e){const t={};return e.split(Ut).forEach(n=>{if(n){const r=n.split(Bt);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ve(e){let t="";if(v(e))t=e;else if(_(e))for(let n=0;n<e.length;n++){const r=Ve(e[n]);r&&(t+=r+" ")}else if(x(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const V=process.env.NODE_ENV!=="production"?Object.freeze({}):{},Lt=process.env.NODE_ENV!=="production"?Object.freeze([]):[],Ye=()=>{},Jt=()=>!1,Gt=/^on[^a-z]/,Yt=e=>Gt.test(e),R=Object.assign,Xt=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Zt=Object.prototype.hasOwnProperty,h=(e,t)=>Zt.call(e,t),_=Array.isArray,Y=e=>ie(e)==="[object Map]",Qt=e=>ie(e)==="[object Set]",w=e=>typeof e=="function",v=e=>typeof e=="string",xe=e=>typeof e=="symbol",x=e=>e!==null&&typeof e=="object",kt=e=>x(e)&&w(e.then)&&w(e.catch),en=Object.prototype.toString,ie=e=>en.call(e),Xe=e=>ie(e).slice(8,-1),tn=e=>ie(e)==="[object Object]",ye=e=>v(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,nn=(e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))})(e=>e.charAt(0).toUpperCase()+e.slice(1)),ce=(e,t)=>!Object.is(e,t),rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})};let Ze;const sn=()=>Ze||(Ze=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qe(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let on;function cn(e,t=on){t&&t.active&&t.effects.push(e)}const De=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ke=e=>(e.w&$)>0,et=e=>(e.n&$)>0,ln=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=$},un=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];ke(s)&&!et(s)?s.delete(e):t[n++]=s,s.w&=~$,s.n&=~$}t.length=n}},Re=new WeakMap;let ee=0,$=1;const ve=30;let b;const z=Symbol(process.env.NODE_ENV!=="production"?"iterate":""),Ie=Symbol(process.env.NODE_ENV!=="production"?"Map key iterate":"");class an{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cn(this,r)}run(){if(!this.active)return this.fn();let t=b,n=H;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=b,b=this,H=!0,$=1<<++ee,ee<=ve?ln(this):tt(this),this.fn()}finally{ee<=ve&&un(this),$=1<<--ee,b=this.parent,H=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){b===this?this.deferStop=!0:this.active&&(tt(this),this.onStop&&this.onStop(),this.active=!1)}}function tt(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let H=!0;const nt=[];function rt(){nt.push(H),H=!1}function st(){const e=nt.pop();H=e===void 0?!0:e}function y(e,t,n){if(H&&b){let r=Re.get(e);r||Re.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=De());const o=process.env.NODE_ENV!=="production"?{effect:b,target:e,type:t,key:n}:void 0;fn(s,o)}}function fn(e,t){let n=!1;ee<=ve?et(e)||(e.n|=$,n=!ke(e)):n=!e.has(b),n&&(e.add(b),b.deps.push(e),process.env.NODE_ENV!=="production"&&b.onTrack&&b.onTrack(Object.assign({effect:b},t)))}function M(e,t,n,r,s,o){const i=Re.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&_(e))i.forEach((f,d)=>{(d==="length"||d>=r)&&c.push(f)});else switch(n!==void 0&&c.push(i.get(n)),t){case"add":_(e)?ye(n)&&c.push(i.get("length")):(c.push(i.get(z)),Y(e)&&c.push(i.get(Ie)));break;case"delete":_(e)||(c.push(i.get(z)),Y(e)&&c.push(i.get(Ie)));break;case"set":Y(e)&&c.push(i.get(z));break}const u=process.env.NODE_ENV!=="production"?{target:e,type:t,key:n,newValue:r,oldValue:s,oldTarget:o}:void 0;if(c.length===1)c[0]&&(process.env.NODE_ENV!=="production"?le(c[0],u):le(c[0]));else{const f=[];for(const d of c)d&&f.push(...d);process.env.NODE_ENV!=="production"?le(De(f),u):le(De(f))}}function le(e,t){const n=_(e)?e:[...e];for(const r of n)r.computed&&ot(r,t);for(const r of n)r.computed||ot(r,t)}function ot(e,t){(e!==b||e.allowRecurse)&&(process.env.NODE_ENV!=="production"&&e.onTrigger&&e.onTrigger(R({effect:e},t)),e.scheduler?e.scheduler():e.run())}const pn=k("__proto__,__v_isRef,__isVue"),it=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xe)),dn=Ce(),hn=Ce(!0),_n=Ce(!0,!0),ct=gn();function gn(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=p(this);for(let o=0,i=this.length;o<i;o++)y(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(p)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){rt();const r=p(this)[t].apply(this,n);return st(),r}}),e}function Ce(e=!1,t=!1){return function(r,s,o){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&o===(e?t?gt:_t:t?Tn:ht).get(r))return r;const i=_(r);if(!e&&i&&h(ct,s))return Reflect.get(ct,s,o);const c=Reflect.get(r,s,o);return(xe(s)?it.has(s):pn(s))||(e||y(r,"get",s),t)?c:O(c)?i&&ye(s)?c:c.value:x(c)?e?Et(c):mt(c):c}}const mn=En();function En(e=!1){return function(n,r,s,o){let i=n[r];if(W(i)&&O(i)&&!O(s))return!1;if(!e&&!W(s)&&(Me(s)||(s=p(s),i=p(i)),!_(n)&&O(i)&&!O(s)))return i.value=s,!0;const c=_(n)&&ye(r)?Number(r)<n.length:h(n,r),u=Reflect.set(n,r,s,o);return n===p(o)&&(c?ce(s,i)&&M(n,"set",r,s,i):M(n,"add",r,s)),u}}function wn(e,t){const n=h(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&M(e,"delete",t,void 0,r),s}function Nn(e,t){const n=Reflect.has(e,t);return(!xe(t)||!it.has(t))&&y(e,"has",t),n}function bn(e){return y(e,"iterate",_(e)?"length":z),Reflect.ownKeys(e)}const On={get:dn,set:mn,deleteProperty:wn,has:Nn,ownKeys:bn},lt={get:hn,set(e,t){return process.env.NODE_ENV!=="production"&&Qe(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return process.env.NODE_ENV!=="production"&&Qe(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Sn=R({},lt,{get:_n}),Te=e=>e,ue=e=>Reflect.getPrototypeOf(e);function ae(e,t,n=!1,r=!1){e=e.__v_raw;const s=p(e),o=p(t);n||(t!==o&&y(s,"get",t),y(s,"get",o));const{has:i}=ue(s),c=r?Te:n?je:Ae;if(i.call(s,t))return c(e.get(t));if(i.call(s,o))return c(e.get(o));e!==s&&e.get(t)}function fe(e,t=!1){const n=this.__v_raw,r=p(n),s=p(e);return t||(e!==s&&y(r,"has",e),y(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function pe(e,t=!1){return e=e.__v_raw,!t&&y(p(e),"iterate",z),Reflect.get(e,"size",e)}function ut(e){e=p(e);const t=p(this);return ue(t).has.call(t,e)||(t.add(e),M(t,"add",e,e)),this}function at(e,t){t=p(t);const n=p(this),{has:r,get:s}=ue(n);let o=r.call(n,e);o?process.env.NODE_ENV!=="production"&&dt(n,r,e):(e=p(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?ce(t,i)&&M(n,"set",e,t,i):M(n,"add",e,t),this}function ft(e){const t=p(this),{has:n,get:r}=ue(t);let s=n.call(t,e);s?process.env.NODE_ENV!=="production"&&dt(t,n,e):(e=p(e),s=n.call(t,e));const o=r?r.call(t,e):void 0,i=t.delete(e);return s&&M(t,"delete",e,void 0,o),i}function pt(){const e=p(this),t=e.size!==0,n=process.env.NODE_ENV!=="production"?Y(e)?new Map(e):new Set(e):void 0,r=e.clear();return t&&M(e,"clear",void 0,void 0,n),r}function de(e,t){return function(r,s){const o=this,i=o.__v_raw,c=p(i),u=t?Te:e?je:Ae;return!e&&y(c,"iterate",z),i.forEach((f,d)=>r.call(s,u(f),u(d),o))}}function he(e,t,n){return function(...r){const s=this.__v_raw,o=p(s),i=Y(o),c=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,f=s[e](...r),d=n?Te:t?je:Ae;return!t&&y(o,"iterate",u?Ie:z),{next(){const{value:l,done:a}=f.next();return a?{value:l,done:a}:{value:c?[d(l[0]),d(l[1])]:d(l),done:a}},[Symbol.iterator](){return this}}}}function F(e){return function(...t){if(process.env.NODE_ENV!=="production"){const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${nn(e)} operation ${n}failed: target is readonly.`,p(this))}return e==="delete"?!1:this}}function Vn(){const e={get(o){return ae(this,o)},get size(){return pe(this)},has:fe,add:ut,set:at,delete:ft,clear:pt,forEach:de(!1,!1)},t={get(o){return ae(this,o,!1,!0)},get size(){return pe(this)},has:fe,add:ut,set:at,delete:ft,clear:pt,forEach:de(!1,!0)},n={get(o){return ae(this,o,!0)},get size(){return pe(this,!0)},has(o){return fe.call(this,o,!0)},add:F("add"),set:F("set"),delete:F("delete"),clear:F("clear"),forEach:de(!0,!1)},r={get(o){return ae(this,o,!0,!0)},get size(){return pe(this,!0)},has(o){return fe.call(this,o,!0)},add:F("add"),set:F("set"),delete:F("delete"),clear:F("clear"),forEach:de(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=he(o,!1,!1),n[o]=he(o,!0,!1),t[o]=he(o,!1,!0),r[o]=he(o,!0,!0)}),[e,n,t,r]}const[xn,yn,Dn,Rn]=Vn();function Pe(e,t){const n=t?e?Rn:Dn:e?yn:xn;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(h(n,s)&&s in r?n:r,s,o)}const vn={get:Pe(!1,!1)},In={get:Pe(!0,!1)},Cn={get:Pe(!0,!0)};function dt(e,t,n){const r=p(n);if(r!==n&&t.call(e,r)){const s=Xe(e);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const ht=new WeakMap,Tn=new WeakMap,_t=new WeakMap,gt=new WeakMap;function Pn(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $n(e){return e.__v_skip||!Object.isExtensible(e)?0:Pn(Xe(e))}function mt(e){return W(e)?e:$e(e,!1,On,vn,ht)}function Et(e){return $e(e,!0,lt,In,_t)}function _e(e){return $e(e,!0,Sn,Cn,gt)}function $e(e,t,n,r,s){if(!x(e))return process.env.NODE_ENV!=="production"&&console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=$n(e);if(i===0)return e;const c=new Proxy(e,i===2?r:n);return s.set(e,c),c}function K(e){return W(e)?K(e.__v_raw):!!(e&&e.__v_isReactive)}function W(e){return!!(e&&e.__v_isReadonly)}function Me(e){return!!(e&&e.__v_isShallow)}function Fe(e){return K(e)||W(e)}function p(e){const t=e&&e.__v_raw;return t?p(t):e}function Mn(e){return rn(e,"__v_skip",!0),e}const Ae=e=>x(e)?mt(e):e,je=e=>x(e)?Et(e):e;function O(e){return!!(e&&e.__v_isRef===!0)}function Fn(e){return O(e)?e.value:e}const An={get:(e,t,n)=>Fn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return O(s)&&!O(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function jn(e){return K(e)?e:new Proxy(e,An)}const U=[];function zn(e){U.push(e)}function Hn(){U.pop()}function S(e,...t){rt();const n=U.length?U[U.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=Kn();if(r)B(r,n,11,[e+t.join(""),n&&n.proxy,s.map(({vnode:o})=>`at <${Kt(n,o.type)}>`).join(`
`),s]);else{const o=[`[Vue warn]: ${e}`,...t];s.length&&o.push(`
`,...Wn(s)),console.warn(...o)}st()}function Kn(){let e=U[U.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function Wn(e){const t=[];return e.forEach((n,r)=>{t.push(...r===0?[]:[`
`],...Un(n))}),t}function Un({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=e.component?e.component.parent==null:!1,s=` at <${Kt(e.component,e.type,r)}`,o=">"+n;return e.props?[s,...Bn(e.props),o]:[s+o]}function Bn(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(r=>{t.push(...wt(r,e[r]))}),n.length>3&&t.push(" ..."),t}function wt(e,t,n){return v(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:O(t)?(t=wt(e,p(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):w(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=p(t),n?t:[`${e}=`,t])}const Nt={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function B(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){bt(o,t,n)}return s}function ze(e,t,n,r){if(w(e)){const o=B(e,t,n,r);return o&&kt(o)&&o.catch(i=>{bt(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(ze(e[o],t,n,r));return s}function bt(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,c=process.env.NODE_ENV!=="production"?Nt[n]:n;for(;o;){const f=o.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,c)===!1)return}o=o.parent}const u=t.appContext.config.errorHandler;if(u){B(u,null,10,[e,i,c]);return}}qn(e,n,s,r)}function qn(e,t,n,r=!0){if(process.env.NODE_ENV!=="production"){const s=Nt[t];if(n&&zn(n),S(`Unhandled error${s?` during execution of ${s}`:""}`),n&&Hn(),r)throw e;console.error(e)}else console.error(e)}let ge=!1,He=!1;const I=[];let A=0;const te=[];let X=null,q=0;const ne=[];let P=null,L=0;const Ot=Promise.resolve();let Ke=null,We=null;const Ln=100;function Jn(e){const t=Ke||Ot;return e?t.then(this?e.bind(this):e):t}function Gn(e){let t=A+1,n=I.length;for(;t<n;){const r=t+n>>>1;re(I[r])<e?t=r+1:n=r}return t}function St(e){(!I.length||!I.includes(e,ge&&e.allowRecurse?A+1:A))&&e!==We&&(e.id==null?I.push(e):I.splice(Gn(e.id),0,e),Vt())}function Vt(){!ge&&!He&&(He=!0,Ke=Ot.then(Dt))}function xt(e,t,n,r){_(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Vt()}function Yn(e){xt(e,X,te,q)}function yt(e){xt(e,P,ne,L)}function Ue(e,t=null){if(te.length){for(We=t,X=[...new Set(te)],te.length=0,process.env.NODE_ENV!=="production"&&(e=e||new Map),q=0;q<X.length;q++)process.env.NODE_ENV!=="production"&&Be(e,X[q])||X[q]();X=null,q=0,We=null,Ue(e,t)}}function Xn(e){if(Ue(),ne.length){const t=[...new Set(ne)];if(ne.length=0,P){P.push(...t);return}for(P=t,process.env.NODE_ENV!=="production"&&(e=e||new Map),P.sort((n,r)=>re(n)-re(r)),L=0;L<P.length;L++)process.env.NODE_ENV!=="production"&&Be(e,P[L])||P[L]();P=null,L=0}}const re=e=>e.id==null?1/0:e.id;function Dt(e){He=!1,ge=!0,process.env.NODE_ENV!=="production"&&(e=e||new Map),Ue(e),I.sort((n,r)=>re(n)-re(r));const t=process.env.NODE_ENV!=="production"?n=>Be(e,n):Ye;try{for(A=0;A<I.length;A++){const n=I[A];if(n&&n.active!==!1){if(process.env.NODE_ENV!=="production"&&t(n))continue;B(n,null,14)}}}finally{A=0,I.length=0,Xn(e),ge=!1,Ke=null,(I.length||te.length||ne.length)&&Dt(e)}}function Be(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>Ln){const r=t.ownerInstance,s=r&&Ht(r.type);return S(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}const se=new Set;process.env.NODE_ENV!=="production"&&(sn().__VUE_HMR_RUNTIME__={createRecord:qe(Zn),rerender:qe(Qn),reload:qe(kn)});const me=new Map;function Zn(e,t){return me.has(e)?!1:(me.set(e,{initialDef:oe(t),instances:new Set}),!0)}function oe(e){return Wt(e)?e.__vccOpts:e}function Qn(e,t){const n=me.get(e);!n||(n.initialDef.render=t,[...n.instances].forEach(r=>{t&&(r.render=t,oe(r.type).render=t),r.renderCache=[],r.update()}))}function kn(e,t){const n=me.get(e);if(!n)return;t=oe(t),Rt(n.initialDef,t);const r=[...n.instances];for(const s of r){const o=oe(s.type);se.has(o)||(o!==n.initialDef&&Rt(o,t),se.add(o)),s.appContext.optionsCache.delete(s.type),s.ceReload?(se.add(o),s.ceReload(t.styles),se.delete(o)):s.parent?(St(s.parent.update),s.parent.type.__asyncLoader&&s.parent.ceReload&&s.parent.ceReload(t.styles)):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}yt(()=>{for(const s of r)se.delete(oe(s.type))})}function Rt(e,t){R(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function qe(e){return(t,n)=>{try{return e(t,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let J=null,er=null;function Hr(){}const tr=e=>e.__isSuspense;function nr(e,t){t&&t.pendingBranch?_(e)?t.effects.push(...e):t.effects.push(e):yt(e)}const vt={};function rr(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:i}=V){process.env.NODE_ENV!=="production"&&!t&&(n!==void 0&&S('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&S('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=g=>{S("Invalid watch source: ",g,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Q;let f,d=!1,l=!1;if(O(e)?(f=()=>e.value,d=Me(e)):K(e)?(f=()=>e,r=!0):_(e)?(l=!0,d=e.some(g=>K(g)||Me(g)),f=()=>e.map(g=>{if(O(g))return g.value;if(K(g))return Z(g);if(w(g))return B(g,u,2);process.env.NODE_ENV!=="production"&&c(g)})):w(e)?t?f=()=>B(e,u,2):f=()=>{if(!(u&&u.isUnmounted))return a&&a(),ze(e,u,3,[m])}:(f=Ye,process.env.NODE_ENV!=="production"&&c(e)),t&&r){const g=f;f=()=>Z(g())}let a,m=g=>{a=D.onStop=()=>{B(g,u,4)}},E=l?[]:vt;const T=()=>{if(!!D.active)if(t){const g=D.run();(r||d||(l?g.some((Ar,jr)=>ce(Ar,E[jr])):ce(g,E)))&&(a&&a(),ze(t,u,3,[g,E===vt?void 0:E,m]),E=g)}else D.run()};T.allowRecurse=!!t;let Se;s==="sync"?Se=T:s==="post"?Se=()=>Tt(T,u&&u.suspense):Se=()=>Yn(T);const D=new an(f,Se);return process.env.NODE_ENV!=="production"&&(D.onTrack=o,D.onTrigger=i),t?n?T():E=D.run():s==="post"?Tt(D.run.bind(D),u&&u.suspense):D.run(),()=>{D.stop(),u&&u.scope&&Xt(u.scope.effects,D)}}function sr(e,t,n){const r=this.proxy,s=v(e)?e.includes(".")?or(r,e):()=>r[e]:e.bind(r,r);let o;w(t)?o=t:(o=t.handler,n=t);const i=Q;zt(this);const c=rr(s,o.bind(r),n);return i?zt(i):Rr(),c}function or(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Z(e,t){if(!x(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),O(e))Z(e.value,t);else if(_(e))for(let n=0;n<e.length;n++)Z(e[n],t);else if(Qt(e)||Y(e))e.forEach(n=>{Z(n,t)});else if(tn(e))for(const n in e)Z(e[n],t);return e}function ir(e){return w(e)?{setup:e,name:e.name}:e}const cr=Symbol(),Le=e=>e?vr(e)?Ir(e)||e.proxy:Le(e.parent):null,Ee=R(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>process.env.NODE_ENV!=="production"?_e(e.props):e.props,$attrs:e=>process.env.NODE_ENV!=="production"?_e(e.attrs):e.attrs,$slots:e=>process.env.NODE_ENV!=="production"?_e(e.slots):e.slots,$refs:e=>process.env.NODE_ENV!=="production"?_e(e.refs):e.refs,$parent:e=>Le(e.parent),$root:e=>Le(e.root),$emit:e=>e.emit,$options:e=>ar(e),$forceUpdate:e=>e.f||(e.f=()=>St(e.update)),$nextTick:e=>e.n||(e.n=Jn.bind(e.proxy)),$watch:e=>sr.bind(e)}),lr=e=>e==="_"||e==="$",ur={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:c,appContext:u}=e;if(process.env.NODE_ENV!=="production"&&t==="__isVue")return!0;if(process.env.NODE_ENV!=="production"&&r!==V&&r.__isScriptSetup&&h(r,t))return r[t];let f;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(r!==V&&h(r,t))return i[t]=1,r[t];if(s!==V&&h(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&h(f,t))return i[t]=3,o[t];if(n!==V&&h(n,t))return i[t]=4,n[t];i[t]=0}}const d=Ee[t];let l,a;if(d)return t==="$attrs"&&(y(e,"get",t),process.env.NODE_ENV!=="production"&&void 0),d(e);if((l=c.__cssModules)&&(l=l[t]))return l;if(n!==V&&h(n,t))return i[t]=4,n[t];if(a=u.config.globalProperties,h(a,t))return a[t];process.env.NODE_ENV!=="production"&&J&&(!v(t)||t.indexOf("__v")!==0)&&(s!==V&&lr(t[0])&&h(s,t)?S(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===J&&S(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==V&&h(s,t)?(s[t]=n,!0):r!==V&&h(r,t)?(r[t]=n,!0):h(e.props,t)?(process.env.NODE_ENV!=="production"&&S(`Attempting to mutate prop "${t}". Props are readonly.`,e),!1):t[0]==="$"&&t.slice(1)in e?(process.env.NODE_ENV!=="production"&&S(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`,e),!1):(process.env.NODE_ENV!=="production"&&t in e.appContext.config.globalProperties?Object.defineProperty(o,t,{enumerable:!0,configurable:!0,value:n}):o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let c;return!!n[i]||e!==V&&h(e,i)||t!==V&&h(t,i)||(c=o[0])&&h(c,i)||h(r,i)||h(Ee,i)||h(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:h(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};process.env.NODE_ENV!=="production"&&(ur.ownKeys=e=>(S("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e)));function ar(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,c=o.get(t);let u;return c?u=c:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(f=>we(u,f,i,!0)),we(u,t,i)),o.set(t,u),u}function we(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&we(e,o,n,!0),s&&s.forEach(i=>we(e,i,n,!0));for(const i in t)if(r&&i==="expose")process.env.NODE_ENV!=="production"&&S('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=fr[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const fr={data:It,props:G,emits:G,methods:G,computed:G,beforeCreate:N,created:N,beforeMount:N,mounted:N,beforeUpdate:N,updated:N,beforeDestroy:N,beforeUnmount:N,destroyed:N,unmounted:N,activated:N,deactivated:N,errorCaptured:N,serverPrefetch:N,components:G,directives:G,watch:dr,provide:It,inject:pr};function It(e,t){return t?e?function(){return R(w(e)?e.call(this,this):e,w(t)?t.call(this,this):t)}:t:e}function pr(e,t){return G(Ct(e),Ct(t))}function Ct(e){if(_(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function N(e,t){return e?[...new Set([].concat(e,t))]:t}function G(e,t){return e?R(R(Object.create(null),e),t):t}function dr(e,t){if(!e)return t;if(!t)return e;const n=R(Object.create(null),e);for(const r in t)n[r]=N(e[r],t[r]);return n}function hr(){return{app:null,config:{isNativeTag:Jt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}const Tt=nr,_r=e=>e.__isTeleport,Pt=Symbol(process.env.NODE_ENV!=="production"?"Fragment":void 0),gr=Symbol(process.env.NODE_ENV!=="production"?"Text":void 0),mr=Symbol(process.env.NODE_ENV!=="production"?"Comment":void 0);Symbol(process.env.NODE_ENV!=="production"?"Static":void 0);const Ne=[];let C=null;function Er(e=!1){Ne.push(C=e?null:[])}function wr(){Ne.pop(),C=Ne[Ne.length-1]||null}function Nr(e){return e.dynamicChildren=C||Lt,wr(),C&&C.push(e),e}function br(e,t,n,r,s,o){return Nr(Ft(e,t,n,r,s,o,!0))}function Or(e){return e?e.__v_isVNode===!0:!1}const Sr=(...e)=>At(...e),$t="__vInternal",Mt=({key:e})=>e!=null?e:null,be=({ref:e,ref_key:t,ref_for:n})=>e!=null?v(e)||O(e)||w(e)?{i:J,r:e,k:t,f:!!n}:e:null;function Ft(e,t=null,n=null,r=0,s=null,o=e===Pt?0:1,i=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mt(t),ref:t&&be(t),scopeId:er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Je(u,n),o&128&&e.normalize(u)):n&&(u.shapeFlag|=v(n)?8:16),process.env.NODE_ENV!=="production"&&u.key!==u.key&&S("VNode created with invalid key (NaN). VNode type:",u.type),!i&&C&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&C.push(u),u}const Vr=process.env.NODE_ENV!=="production"?Sr:At;function At(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===cr)&&(process.env.NODE_ENV!=="production"&&!e&&S(`Invalid vnode type when creating vnode: ${e}.`),e=mr),Or(e)){const c=Oe(e,t,!0);return n&&Je(c,n),!o&&C&&(c.shapeFlag&6?C[C.indexOf(e)]=c:C.push(c)),c.patchFlag|=-2,c}if(Wt(e)&&(e=e.__vccOpts),t){t=xr(t);let{class:c,style:u}=t;c&&!v(c)&&(t.class=Ve(c)),x(u)&&(Fe(u)&&!_(u)&&(u=R({},u)),t.style=j(u))}const i=v(e)?1:tr(e)?128:_r(e)?64:x(e)?4:w(e)?2:0;return process.env.NODE_ENV!=="production"&&i&4&&Fe(e)&&(e=p(e),S("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),Ft(e,t,n,r,s,i,o,!0)}function xr(e){return e?Fe(e)||$t in e?R({},e):e:null}function Oe(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,c=t?Dr(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Mt(c),ref:t&&t.ref?n&&s?_(s)?s.concat(be(t)):[s,be(t)]:be(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:process.env.NODE_ENV!=="production"&&o===-1&&_(i)?i.map(jt):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Oe(e.ssContent),ssFallback:e.ssFallback&&Oe(e.ssFallback),el:e.el,anchor:e.anchor}}function jt(e){const t=Oe(e);return _(e.children)&&(t.children=e.children.map(jt)),t}function yr(e=" ",t=0){return Vr(gr,null,e,t)}function Je(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(_(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Je(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!($t in t)?t._ctx=J:s===3&&J&&(J.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else w(t)?(t={default:t,_ctx:J},n=32):(t=String(t),r&64?(n=16,t=[yr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Dr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ve([t.class,r.class]));else if(s==="style")t.style=j([t.style,r.style]);else if(Yt(s)){const o=t[s],i=r[s];i&&o!==i&&!(_(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}hr();let Q=null;const zt=e=>{Q=e,e.scope.on()},Rr=()=>{Q&&Q.scope.off(),Q=null};function vr(e){return e.vnode.shapeFlag&4}function Ir(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(jn(Mn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ee)return Ee[n](e)}}))}const Cr=/(?:^|[-_])(\w)/g,Tr=e=>e.replace(Cr,t=>t.toUpperCase()).replace(/[-_]/g,"");function Ht(e,t=!0){return w(e)?e.displayName||e.name:e.name||t&&e.__name}function Kt(e,t,n=!1){let r=Ht(t);if(!r&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&e&&e.parent){const s=o=>{for(const i in o)if(o[i]===t)return i};r=s(e.components||e.parent.type.components)||s(e.appContext.components)}return r?Tr(r):n?"App":"Anonymous"}function Wt(e){return w(e)&&"__vccOpts"in e}Symbol(process.env.NODE_ENV!=="production"?"ssrContext":"");function Ge(e){return!!(e&&e.__v_isShallow)}function Pr(){if(process.env.NODE_ENV==="production"||typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(l){return x(l)?l.__isVue?["div",e,"VueInstance"]:O(l)?["div",{},["span",e,d(l)],"<",c(l.value),">"]:K(l)?["div",{},["span",e,Ge(l)?"ShallowReactive":"Reactive"],"<",c(l),`>${W(l)?" (readonly)":""}`]:W(l)?["div",{},["span",e,Ge(l)?"ShallowReadonly":"Readonly"],"<",c(l),">"]:null:null},hasBody(l){return l&&l.__isVue},body(l){if(l&&l.__isVue)return["div",{},...o(l.$)]}};function o(l){const a=[];l.type.props&&l.props&&a.push(i("props",p(l.props))),l.setupState!==V&&a.push(i("setup",l.setupState)),l.data!==V&&a.push(i("data",p(l.data)));const m=u(l,"computed");m&&a.push(i("computed",m));const E=u(l,"inject");return E&&a.push(i("injected",E)),a.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:l}]]),a}function i(l,a){return a=R({},a),Object.keys(a).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},l],["div",{style:"padding-left:1.25em"},...Object.keys(a).map(m=>["div",{},["span",r,m+": "],c(a[m],!1)])]]:["span",{}]}function c(l,a=!0){return typeof l=="number"?["span",t,l]:typeof l=="string"?["span",n,JSON.stringify(l)]:typeof l=="boolean"?["span",r,l]:x(l)?["object",{object:a?p(l):l}]:["span",n,String(l)]}function u(l,a){const m=l.type;if(w(m))return;const E={};for(const T in l.ctx)f(m,T,a)&&(E[T]=l.ctx[T]);return E}function f(l,a,m){const E=l[m];if(_(E)&&E.includes(a)||x(E)&&a in E||l.extends&&f(l.extends,a,m)||l.mixins&&l.mixins.some(T=>f(T,a,m)))return!0}function d(l){return Ge(l)?"ShallowRef":l.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}function $r(){Pr()}process.env.NODE_ENV!=="production"&&$r();const Mr=["src"],Fr=ir({__name:"index",props:{src:null,events:null},setup(e){const t=e;function n(){window.globalEmitter.emit("common:link",t.events["common:link"])}return(r,s)=>(Er(),br("img",{src:t.src,class:"lc-image",onClick:n},null,8,Mr))}}),Kr="";return{render:Fr,editorProps:{src:{type:"string",defaultValue:"https://picsum.photos/200",display:"URL"}}}});
