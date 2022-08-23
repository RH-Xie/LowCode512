(function(k,M){typeof exports=="object"&&typeof module<"u"?module.exports=M():typeof define=="function"&&define.amd?define(M):(k=typeof globalThis<"u"?globalThis:k||self,k.LcRadio=M())})(this,function(){"use strict";var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`.lc-radio{width:100%;height:100%;overflow:hidden;text-overflow:ellipsis;border-radius:2px;border:none}
`;document.head.appendChild(__vite_style__);function k(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}function M(e){if(d(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=y(r)?Xt(r):M(r);if(o)for(const s in o)t[s]=o[s]}return t}else{if(y(e))return e;if(N(e))return e}}const Gt=/;(?![^(]*\))/g,Yt=/:(.+)/;function Xt(e){const t={};return e.split(Gt).forEach(n=>{if(n){const r=n.split(Yt);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function xe(e){let t="";if(y(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){const r=xe(e[n]);r&&(t+=r+" ")}else if(N(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Zt=e=>y(e)?e:e==null?"":d(e)||N(e)&&(e.toString===et||!E(e.toString))?JSON.stringify(e,Ze,2):String(e),Ze=(e,t)=>t&&t.__v_isRef?Ze(e,t.value):z(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:ke(t)?{[`Set(${t.size})`]:[...t.values()]}:N(t)&&!d(t)&&!nt(t)?String(t):t,x=process.env.NODE_ENV!=="production"?Object.freeze({}):{},Qt=process.env.NODE_ENV!=="production"?Object.freeze([]):[],Qe=()=>{},kt=()=>!1,en=/^on[^a-z]/,tn=e=>en.test(e),R=Object.assign,nn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rn=Object.prototype.hasOwnProperty,g=(e,t)=>rn.call(e,t),d=Array.isArray,z=e=>ie(e)==="[object Map]",ke=e=>ie(e)==="[object Set]",E=e=>typeof e=="function",y=e=>typeof e=="string",ye=e=>typeof e=="symbol",N=e=>e!==null&&typeof e=="object",on=e=>N(e)&&E(e.then)&&E(e.catch),et=Object.prototype.toString,ie=e=>et.call(e),tt=e=>ie(e).slice(8,-1),nt=e=>ie(e)==="[object Object]",Ce=e=>y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,sn=(e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))})(e=>e.charAt(0).toUpperCase()+e.slice(1)),ce=(e,t)=>!Object.is(e,t),cn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})};let rt;const ln=()=>rt||(rt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ot(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let un;function an(e,t=un){t&&t.active&&t.effects.push(e)}const De=e=>{const t=new Set(e);return t.w=0,t.n=0,t},st=e=>(e.w&v)>0,it=e=>(e.n&v)>0,fn=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},pn=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];st(o)&&!it(o)?o.delete(e):t[n++]=o,o.w&=~v,o.n&=~v}t.length=n}},Re=new WeakMap;let ee=0,v=1;const Ie=30;let O;const H=Symbol(process.env.NODE_ENV!=="production"?"iterate":""),Te=Symbol(process.env.NODE_ENV!=="production"?"Map key iterate":"");class dn{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,an(this,r)}run(){if(!this.active)return this.fn();let t=O,n=K;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=O,O=this,K=!0,v=1<<++ee,ee<=Ie?fn(this):ct(this),this.fn()}finally{ee<=Ie&&pn(this),v=1<<--ee,O=this.parent,K=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){O===this?this.deferStop=!0:this.active&&(ct(this),this.onStop&&this.onStop(),this.active=!1)}}function ct(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let K=!0;const lt=[];function ut(){lt.push(K),K=!1}function at(){const e=lt.pop();K=e===void 0?!0:e}function C(e,t,n){if(K&&O){let r=Re.get(e);r||Re.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=De());const s=process.env.NODE_ENV!=="production"?{effect:O,target:e,type:t,key:n}:void 0;hn(o,s)}}function hn(e,t){let n=!1;ee<=Ie?it(e)||(e.n|=v,n=!st(e)):n=!e.has(O),n&&(e.add(O),O.deps.push(e),process.env.NODE_ENV!=="production"&&O.onTrack&&O.onTrack(Object.assign({effect:O},t)))}function F(e,t,n,r,o,s){const i=Re.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&d(e))i.forEach((f,h)=>{(h==="length"||h>=r)&&c.push(f)});else switch(n!==void 0&&c.push(i.get(n)),t){case"add":d(e)?Ce(n)&&c.push(i.get("length")):(c.push(i.get(H)),z(e)&&c.push(i.get(Te)));break;case"delete":d(e)||(c.push(i.get(H)),z(e)&&c.push(i.get(Te)));break;case"set":z(e)&&c.push(i.get(H));break}const u=process.env.NODE_ENV!=="production"?{target:e,type:t,key:n,newValue:r,oldValue:o,oldTarget:s}:void 0;if(c.length===1)c[0]&&(process.env.NODE_ENV!=="production"?le(c[0],u):le(c[0]));else{const f=[];for(const h of c)h&&f.push(...h);process.env.NODE_ENV!=="production"?le(De(f),u):le(De(f))}}function le(e,t){const n=d(e)?e:[...e];for(const r of n)r.computed&&ft(r,t);for(const r of n)r.computed||ft(r,t)}function ft(e,t){(e!==O||e.allowRecurse)&&(process.env.NODE_ENV!=="production"&&e.onTrigger&&e.onTrigger(R({effect:e},t)),e.scheduler?e.scheduler():e.run())}const gn=k("__proto__,__v_isRef,__isVue"),pt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ye)),_n=Pe(),mn=Pe(!0),En=Pe(!0,!0),dt=wn();function wn(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=p(this);for(let s=0,i=this.length;s<i;s++)C(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(p)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ut();const r=p(this)[t].apply(this,n);return at(),r}}),e}function Pe(e=!1,t=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Ot:bt:t?vn:Nt).get(r))return r;const i=d(r);if(!e&&i&&g(dt,o))return Reflect.get(dt,o,s);const c=Reflect.get(r,o,s);return(ye(o)?pt.has(o):gn(o))||(e||C(r,"get",o),t)?c:S(c)?i&&Ce(o)?c:c.value:N(c)?e?Vt(c):St(c):c}}const Nn=bn();function bn(e=!1){return function(n,r,o,s){let i=n[r];if(B(i)&&S(i)&&!S(o))return!1;if(!e&&!B(o)&&(Fe(o)||(o=p(o),i=p(i)),!d(n)&&S(i)&&!S(o)))return i.value=o,!0;const c=d(n)&&Ce(r)?Number(r)<n.length:g(n,r),u=Reflect.set(n,r,o,s);return n===p(s)&&(c?ce(o,i)&&F(n,"set",r,o,i):F(n,"add",r,o)),u}}function On(e,t){const n=g(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&F(e,"delete",t,void 0,r),o}function Sn(e,t){const n=Reflect.has(e,t);return(!ye(t)||!pt.has(t))&&C(e,"has",t),n}function Vn(e){return C(e,"iterate",d(e)?"length":H),Reflect.ownKeys(e)}const xn={get:_n,set:Nn,deleteProperty:On,has:Sn,ownKeys:Vn},ht={get:mn,set(e,t){return process.env.NODE_ENV!=="production"&&ot(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return process.env.NODE_ENV!=="production"&&ot(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},yn=R({},ht,{get:En}),$e=e=>e,ue=e=>Reflect.getPrototypeOf(e);function ae(e,t,n=!1,r=!1){e=e.__v_raw;const o=p(e),s=p(t);n||(t!==s&&C(o,"get",t),C(o,"get",s));const{has:i}=ue(o),c=r?$e:n?ze:je;if(i.call(o,t))return c(e.get(t));if(i.call(o,s))return c(e.get(s));e!==o&&e.get(t)}function fe(e,t=!1){const n=this.__v_raw,r=p(n),o=p(e);return t||(e!==o&&C(r,"has",e),C(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function pe(e,t=!1){return e=e.__v_raw,!t&&C(p(e),"iterate",H),Reflect.get(e,"size",e)}function gt(e){e=p(e);const t=p(this);return ue(t).has.call(t,e)||(t.add(e),F(t,"add",e,e)),this}function _t(e,t){t=p(t);const n=p(this),{has:r,get:o}=ue(n);let s=r.call(n,e);s?process.env.NODE_ENV!=="production"&&wt(n,r,e):(e=p(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?ce(t,i)&&F(n,"set",e,t,i):F(n,"add",e,t),this}function mt(e){const t=p(this),{has:n,get:r}=ue(t);let o=n.call(t,e);o?process.env.NODE_ENV!=="production"&&wt(t,n,e):(e=p(e),o=n.call(t,e));const s=r?r.call(t,e):void 0,i=t.delete(e);return o&&F(t,"delete",e,void 0,s),i}function Et(){const e=p(this),t=e.size!==0,n=process.env.NODE_ENV!=="production"?z(e)?new Map(e):new Set(e):void 0,r=e.clear();return t&&F(e,"clear",void 0,void 0,n),r}function de(e,t){return function(r,o){const s=this,i=s.__v_raw,c=p(i),u=t?$e:e?ze:je;return!e&&C(c,"iterate",H),i.forEach((f,h)=>r.call(o,u(f),u(h),s))}}function he(e,t,n){return function(...r){const o=this.__v_raw,s=p(o),i=z(s),c=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,f=o[e](...r),h=n?$e:t?ze:je;return!t&&C(s,"iterate",u?Te:H),{next(){const{value:l,done:a}=f.next();return a?{value:l,done:a}:{value:c?[h(l[0]),h(l[1])]:h(l),done:a}},[Symbol.iterator](){return this}}}}function A(e){return function(...t){if(process.env.NODE_ENV!=="production"){const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${sn(e)} operation ${n}failed: target is readonly.`,p(this))}return e==="delete"?!1:this}}function Cn(){const e={get(s){return ae(this,s)},get size(){return pe(this)},has:fe,add:gt,set:_t,delete:mt,clear:Et,forEach:de(!1,!1)},t={get(s){return ae(this,s,!1,!0)},get size(){return pe(this)},has:fe,add:gt,set:_t,delete:mt,clear:Et,forEach:de(!1,!0)},n={get(s){return ae(this,s,!0)},get size(){return pe(this,!0)},has(s){return fe.call(this,s,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:de(!0,!1)},r={get(s){return ae(this,s,!0,!0)},get size(){return pe(this,!0)},has(s){return fe.call(this,s,!0)},add:A("add"),set:A("set"),delete:A("delete"),clear:A("clear"),forEach:de(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=he(s,!1,!1),n[s]=he(s,!0,!1),t[s]=he(s,!1,!0),r[s]=he(s,!0,!0)}),[e,n,t,r]}const[Dn,Rn,In,Tn]=Cn();function Me(e,t){const n=t?e?Tn:In:e?Rn:Dn;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(g(n,o)&&o in r?n:r,o,s)}const Pn={get:Me(!1,!1)},$n={get:Me(!0,!1)},Mn={get:Me(!0,!0)};function wt(e,t,n){const r=p(n);if(r!==n&&t.call(e,r)){const o=tt(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Nt=new WeakMap,vn=new WeakMap,bt=new WeakMap,Ot=new WeakMap;function Fn(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function An(e){return e.__v_skip||!Object.isExtensible(e)?0:Fn(tt(e))}function St(e){return B(e)?e:ve(e,!1,xn,Pn,Nt)}function Vt(e){return ve(e,!0,ht,$n,bt)}function ge(e){return ve(e,!0,yn,Mn,Ot)}function ve(e,t,n,r,o){if(!N(e))return process.env.NODE_ENV!=="production"&&console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=An(e);if(i===0)return e;const c=new Proxy(e,i===2?r:n);return o.set(e,c),c}function W(e){return B(e)?W(e.__v_raw):!!(e&&e.__v_isReactive)}function B(e){return!!(e&&e.__v_isReadonly)}function Fe(e){return!!(e&&e.__v_isShallow)}function Ae(e){return W(e)||B(e)}function p(e){const t=e&&e.__v_raw;return t?p(t):e}function jn(e){return cn(e,"__v_skip",!0),e}const je=e=>N(e)?St(e):e,ze=e=>N(e)?Vt(e):e;function S(e){return!!(e&&e.__v_isRef===!0)}function He(e){return S(e)?e.value:e}const zn={get:(e,t,n)=>He(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return S(o)&&!S(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Hn(e){return W(e)?e:new Proxy(e,zn)}const U=[];function Kn(e){U.push(e)}function Wn(){U.pop()}function V(e,...t){ut();const n=U.length?U[U.length-1].component:null,r=n&&n.appContext.config.warnHandler,o=Bn();if(r)q(r,n,11,[e+t.join(""),n&&n.proxy,o.map(({vnode:s})=>`at <${Jt(n,s.type)}>`).join(`
`),o]);else{const s=[`[Vue warn]: ${e}`,...t];o.length&&s.push(`
`,...Un(o)),console.warn(...s)}at()}function Bn(){let e=U[U.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function Un(e){const t=[];return e.forEach((n,r)=>{t.push(...r===0?[]:[`
`],...qn(n))}),t}function qn({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=e.component?e.component.parent==null:!1,o=` at <${Jt(e.component,e.type,r)}`,s=">"+n;return e.props?[o,...Jn(e.props),s]:[o+s]}function Jn(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(r=>{t.push(...xt(r,e[r]))}),n.length>3&&t.push(" ..."),t}function xt(e,t,n){return y(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:S(t)?(t=xt(e,p(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):E(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=p(t),n?t:[`${e}=`,t])}const yt={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function q(e,t,n,r){let o;try{o=r?e(...r):e()}catch(s){Ct(s,t,n)}return o}function Ke(e,t,n,r){if(E(e)){const s=q(e,t,n,r);return s&&on(s)&&s.catch(i=>{Ct(i,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(Ke(e[s],t,n,r));return o}function Ct(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,c=process.env.NODE_ENV!=="production"?yt[n]:n;for(;s;){const f=s.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,i,c)===!1)return}s=s.parent}const u=t.appContext.config.errorHandler;if(u){q(u,null,10,[e,i,c]);return}}Ln(e,n,o,r)}function Ln(e,t,n,r=!0){if(process.env.NODE_ENV!=="production"){const o=yt[t];if(n&&Kn(n),V(`Unhandled error${o?` during execution of ${o}`:""}`),n&&Wn(),r)throw e;console.error(e)}else console.error(e)}let _e=!1,We=!1;const I=[];let j=0;const te=[];let X=null,J=0;const ne=[];let $=null,L=0;const Dt=Promise.resolve();let Be=null,Ue=null;const Gn=100;function Yn(e){const t=Be||Dt;return e?t.then(this?e.bind(this):e):t}function Xn(e){let t=j+1,n=I.length;for(;t<n;){const r=t+n>>>1;re(I[r])<e?t=r+1:n=r}return t}function Rt(e){(!I.length||!I.includes(e,_e&&e.allowRecurse?j+1:j))&&e!==Ue&&(e.id==null?I.push(e):I.splice(Xn(e.id),0,e),It())}function It(){!_e&&!We&&(We=!0,Be=Dt.then($t))}function Tt(e,t,n,r){d(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),It()}function Zn(e){Tt(e,X,te,J)}function Pt(e){Tt(e,$,ne,L)}function qe(e,t=null){if(te.length){for(Ue=t,X=[...new Set(te)],te.length=0,process.env.NODE_ENV!=="production"&&(e=e||new Map),J=0;J<X.length;J++)process.env.NODE_ENV!=="production"&&Je(e,X[J])||X[J]();X=null,J=0,Ue=null,qe(e,t)}}function Qn(e){if(qe(),ne.length){const t=[...new Set(ne)];if(ne.length=0,$){$.push(...t);return}for($=t,process.env.NODE_ENV!=="production"&&(e=e||new Map),$.sort((n,r)=>re(n)-re(r)),L=0;L<$.length;L++)process.env.NODE_ENV!=="production"&&Je(e,$[L])||$[L]();$=null,L=0}}const re=e=>e.id==null?1/0:e.id;function $t(e){We=!1,_e=!0,process.env.NODE_ENV!=="production"&&(e=e||new Map),qe(e),I.sort((n,r)=>re(n)-re(r));const t=process.env.NODE_ENV!=="production"?n=>Je(e,n):Qe;try{for(j=0;j<I.length;j++){const n=I[j];if(n&&n.active!==!1){if(process.env.NODE_ENV!=="production"&&t(n))continue;q(n,null,14)}}}finally{j=0,I.length=0,Qn(e),_e=!1,Be=null,(I.length||te.length||ne.length)&&$t(e)}}function Je(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>Gn){const r=t.ownerInstance,o=r&&qt(r.type);return V(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}const oe=new Set;process.env.NODE_ENV!=="production"&&(ln().__VUE_HMR_RUNTIME__={createRecord:Le(kn),rerender:Le(er),reload:Le(tr)});const me=new Map;function kn(e,t){return me.has(e)?!1:(me.set(e,{initialDef:se(t),instances:new Set}),!0)}function se(e){return Lt(e)?e.__vccOpts:e}function er(e,t){const n=me.get(e);!n||(n.initialDef.render=t,[...n.instances].forEach(r=>{t&&(r.render=t,se(r.type).render=t),r.renderCache=[],r.update()}))}function tr(e,t){const n=me.get(e);if(!n)return;t=se(t),Mt(n.initialDef,t);const r=[...n.instances];for(const o of r){const s=se(o.type);oe.has(s)||(s!==n.initialDef&&Mt(s,t),oe.add(s)),o.appContext.optionsCache.delete(o.type),o.ceReload?(oe.add(s),o.ceReload(t.styles),oe.delete(s)):o.parent?(Rt(o.parent.update),o.parent.type.__asyncLoader&&o.parent.ceReload&&o.parent.ceReload(t.styles)):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Pt(()=>{for(const o of r)oe.delete(se(o.type))})}function Mt(e,t){R(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function Le(e){return(t,n)=>{try{return e(t,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let G=null,nr=null;function qr(){}const rr=e=>e.__isSuspense;function or(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):Pt(e)}const vt={};function sr(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:i}=x){process.env.NODE_ENV!=="production"&&!t&&(n!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=_=>{V("Invalid watch source: ",_,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Q;let f,h=!1,l=!1;if(S(e)?(f=()=>e.value,h=Fe(e)):W(e)?(f=()=>e,r=!0):d(e)?(l=!0,h=e.some(_=>W(_)||Fe(_)),f=()=>e.map(_=>{if(S(_))return _.value;if(W(_))return Z(_);if(E(_))return q(_,u,2);process.env.NODE_ENV!=="production"&&c(_)})):E(e)?t?f=()=>q(e,u,2):f=()=>{if(!(u&&u.isUnmounted))return a&&a(),Ke(e,u,3,[m])}:(f=Qe,process.env.NODE_ENV!=="production"&&c(e)),t&&r){const _=f;f=()=>Z(_())}let a,m=_=>{a=D.onStop=()=>{q(_,u,4)}},w=l?[]:vt;const P=()=>{if(!!D.active)if(t){const _=D.run();(r||h||(l?_.some((Wr,Br)=>ce(Wr,w[Br])):ce(_,w)))&&(a&&a(),Ke(t,u,3,[_,w===vt?void 0:w,m]),w=_)}else D.run()};P.allowRecurse=!!t;let Ve;o==="sync"?Ve=P:o==="post"?Ve=()=>jt(P,u&&u.suspense):Ve=()=>Zn(P);const D=new dn(f,Ve);return process.env.NODE_ENV!=="production"&&(D.onTrack=s,D.onTrigger=i),t?n?P():w=D.run():o==="post"?jt(D.run.bind(D),u&&u.suspense):D.run(),()=>{D.stop(),u&&u.scope&&nn(u.scope.effects,D)}}function ir(e,t,n){const r=this.proxy,o=y(e)?e.includes(".")?cr(r,e):()=>r[e]:e.bind(r,r);let s;E(t)?s=t:(s=t.handler,n=t);const i=Q;Ut(this);const c=sr(o,s.bind(r),n);return i?Ut(i):Ir(),c}function cr(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function Z(e,t){if(!N(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),S(e))Z(e.value,t);else if(d(e))for(let n=0;n<e.length;n++)Z(e[n],t);else if(ke(e)||z(e))e.forEach(n=>{Z(n,t)});else if(nt(e))for(const n in e)Z(e[n],t);return e}function lr(e){return E(e)?{setup:e,name:e.name}:e}const ur=Symbol(),Ge=e=>e?Tr(e)?Pr(e)||e.proxy:Ge(e.parent):null,Ee=R(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>process.env.NODE_ENV!=="production"?ge(e.props):e.props,$attrs:e=>process.env.NODE_ENV!=="production"?ge(e.attrs):e.attrs,$slots:e=>process.env.NODE_ENV!=="production"?ge(e.slots):e.slots,$refs:e=>process.env.NODE_ENV!=="production"?ge(e.refs):e.refs,$parent:e=>Ge(e.parent),$root:e=>Ge(e.root),$emit:e=>e.emit,$options:e=>pr(e),$forceUpdate:e=>e.f||(e.f=()=>Rt(e.update)),$nextTick:e=>e.n||(e.n=Yn.bind(e.proxy)),$watch:e=>ir.bind(e)}),ar=e=>e==="_"||e==="$",fr={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:c,appContext:u}=e;if(process.env.NODE_ENV!=="production"&&t==="__isVue")return!0;if(process.env.NODE_ENV!=="production"&&r!==x&&r.__isScriptSetup&&g(r,t))return r[t];let f;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(r!==x&&g(r,t))return i[t]=1,r[t];if(o!==x&&g(o,t))return i[t]=2,o[t];if((f=e.propsOptions[0])&&g(f,t))return i[t]=3,s[t];if(n!==x&&g(n,t))return i[t]=4,n[t];i[t]=0}}const h=Ee[t];let l,a;if(h)return t==="$attrs"&&(C(e,"get",t),process.env.NODE_ENV!=="production"&&void 0),h(e);if((l=c.__cssModules)&&(l=l[t]))return l;if(n!==x&&g(n,t))return i[t]=4,n[t];if(a=u.config.globalProperties,g(a,t))return a[t];process.env.NODE_ENV!=="production"&&G&&(!y(t)||t.indexOf("__v")!==0)&&(o!==x&&ar(t[0])&&g(o,t)?V(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===G&&V(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return o!==x&&g(o,t)?(o[t]=n,!0):r!==x&&g(r,t)?(r[t]=n,!0):g(e.props,t)?(process.env.NODE_ENV!=="production"&&V(`Attempting to mutate prop "${t}". Props are readonly.`,e),!1):t[0]==="$"&&t.slice(1)in e?(process.env.NODE_ENV!=="production"&&V(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`,e),!1):(process.env.NODE_ENV!=="production"&&t in e.appContext.config.globalProperties?Object.defineProperty(s,t,{enumerable:!0,configurable:!0,value:n}):s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let c;return!!n[i]||e!==x&&g(e,i)||t!==x&&g(t,i)||(c=s[0])&&g(c,i)||g(r,i)||g(Ee,i)||g(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:g(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};process.env.NODE_ENV!=="production"&&(fr.ownKeys=e=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e)));function pr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,c=s.get(t);let u;return c?u=c:!o.length&&!n&&!r?u=t:(u={},o.length&&o.forEach(f=>we(u,f,i,!0)),we(u,t,i)),s.set(t,u),u}function we(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&we(e,s,n,!0),o&&o.forEach(i=>we(e,i,n,!0));for(const i in t)if(r&&i==="expose")process.env.NODE_ENV!=="production"&&V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=dr[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const dr={data:Ft,props:Y,emits:Y,methods:Y,computed:Y,beforeCreate:b,created:b,beforeMount:b,mounted:b,beforeUpdate:b,updated:b,beforeDestroy:b,beforeUnmount:b,destroyed:b,unmounted:b,activated:b,deactivated:b,errorCaptured:b,serverPrefetch:b,components:Y,directives:Y,watch:gr,provide:Ft,inject:hr};function Ft(e,t){return t?e?function(){return R(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function hr(e,t){return Y(At(e),At(t))}function At(e){if(d(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function b(e,t){return e?[...new Set([].concat(e,t))]:t}function Y(e,t){return e?R(R(Object.create(null),e),t):t}function gr(e,t){if(!e)return t;if(!t)return e;const n=R(Object.create(null),e);for(const r in t)n[r]=b(e[r],t[r]);return n}function _r(){return{app:null,config:{isNativeTag:kt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}const jt=or,mr=e=>e.__isTeleport,zt=Symbol(process.env.NODE_ENV!=="production"?"Fragment":void 0),Er=Symbol(process.env.NODE_ENV!=="production"?"Text":void 0),wr=Symbol(process.env.NODE_ENV!=="production"?"Comment":void 0);Symbol(process.env.NODE_ENV!=="production"?"Static":void 0);const Ne=[];let T=null;function Nr(e=!1){Ne.push(T=e?null:[])}function br(){Ne.pop(),T=Ne[Ne.length-1]||null}function Or(e){return e.dynamicChildren=T||Qt,br(),T&&T.push(e),e}function Sr(e,t,n,r,o,s){return Or(Oe(e,t,n,r,o,s,!0))}function Vr(e){return e?e.__v_isVNode===!0:!1}const xr=(...e)=>Wt(...e),Ht="__vInternal",Kt=({key:e})=>e!=null?e:null,be=({ref:e,ref_key:t,ref_for:n})=>e!=null?y(e)||S(e)||E(e)?{i:G,r:e,k:t,f:!!n}:e:null;function Oe(e,t=null,n=null,r=0,o=null,s=e===zt?0:1,i=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kt(t),ref:t&&be(t),scopeId:nr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(Ye(u,n),s&128&&e.normalize(u)):n&&(u.shapeFlag|=y(n)?8:16),process.env.NODE_ENV!=="production"&&u.key!==u.key&&V("VNode created with invalid key (NaN). VNode type:",u.type),!i&&T&&(u.patchFlag>0||s&6)&&u.patchFlag!==32&&T.push(u),u}const yr=process.env.NODE_ENV!=="production"?xr:Wt;function Wt(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===ur)&&(process.env.NODE_ENV!=="production"&&!e&&V(`Invalid vnode type when creating vnode: ${e}.`),e=wr),Vr(e)){const c=Se(e,t,!0);return n&&Ye(c,n),!s&&T&&(c.shapeFlag&6?T[T.indexOf(e)]=c:T.push(c)),c.patchFlag|=-2,c}if(Lt(e)&&(e=e.__vccOpts),t){t=Cr(t);let{class:c,style:u}=t;c&&!y(c)&&(t.class=xe(c)),N(u)&&(Ae(u)&&!d(u)&&(u=R({},u)),t.style=M(u))}const i=y(e)?1:rr(e)?128:mr(e)?64:N(e)?4:E(e)?2:0;return process.env.NODE_ENV!=="production"&&i&4&&Ae(e)&&(e=p(e),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),Oe(e,t,n,r,o,i,s,!0)}function Cr(e){return e?Ae(e)||Ht in e?R({},e):e:null}function Se(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=e,c=t?Rr(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Kt(c),ref:t&&t.ref?n&&o?d(o)?o.concat(be(t)):[o,be(t)]:be(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:process.env.NODE_ENV!=="production"&&s===-1&&d(i)?i.map(Bt):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==zt?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Se(e.ssContent),ssFallback:e.ssFallback&&Se(e.ssFallback),el:e.el,anchor:e.anchor}}function Bt(e){const t=Se(e);return d(e.children)&&(t.children=e.children.map(Bt)),t}function Dr(e=" ",t=0){return yr(Er,null,e,t)}function Ye(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Ye(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Ht in t)?t._ctx=G:o===3&&G&&(G.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else E(t)?(t={default:t,_ctx:G},n=32):(t=String(t),r&64?(n=16,t=[Dr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=xe([t.class,r.class]));else if(o==="style")t.style=M([t.style,r.style]);else if(tn(o)){const s=t[o],i=r[o];i&&s!==i&&!(d(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}_r();let Q=null;const Ut=e=>{Q=e,e.scope.on()},Ir=()=>{Q&&Q.scope.off(),Q=null};function Tr(e){return e.vnode.shapeFlag&4}function Pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hn(jn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ee)return Ee[n](e)}}))}const $r=/(?:^|[-_])(\w)/g,Mr=e=>e.replace($r,t=>t.toUpperCase()).replace(/[-_]/g,"");function qt(e,t=!0){return E(e)?e.displayName||e.name:e.name||t&&e.__name}function Jt(e,t,n=!1){let r=qt(t);if(!r&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(r=o[1])}if(!r&&e&&e.parent){const o=s=>{for(const i in s)if(s[i]===t)return i};r=o(e.components||e.parent.type.components)||o(e.appContext.components)}return r?Mr(r):n?"App":"Anonymous"}function Lt(e){return E(e)&&"__vccOpts"in e}Symbol(process.env.NODE_ENV!=="production"?"ssrContext":"");function Xe(e){return!!(e&&e.__v_isShallow)}function vr(){if(process.env.NODE_ENV==="production"||typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},o={header(l){return N(l)?l.__isVue?["div",e,"VueInstance"]:S(l)?["div",{},["span",e,h(l)],"<",c(l.value),">"]:W(l)?["div",{},["span",e,Xe(l)?"ShallowReactive":"Reactive"],"<",c(l),`>${B(l)?" (readonly)":""}`]:B(l)?["div",{},["span",e,Xe(l)?"ShallowReadonly":"Readonly"],"<",c(l),">"]:null:null},hasBody(l){return l&&l.__isVue},body(l){if(l&&l.__isVue)return["div",{},...s(l.$)]}};function s(l){const a=[];l.type.props&&l.props&&a.push(i("props",p(l.props))),l.setupState!==x&&a.push(i("setup",l.setupState)),l.data!==x&&a.push(i("data",p(l.data)));const m=u(l,"computed");m&&a.push(i("computed",m));const w=u(l,"inject");return w&&a.push(i("injected",w)),a.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:l}]]),a}function i(l,a){return a=R({},a),Object.keys(a).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},l],["div",{style:"padding-left:1.25em"},...Object.keys(a).map(m=>["div",{},["span",r,m+": "],c(a[m],!1)])]]:["span",{}]}function c(l,a=!0){return typeof l=="number"?["span",t,l]:typeof l=="string"?["span",n,JSON.stringify(l)]:typeof l=="boolean"?["span",r,l]:N(l)?["object",{object:a?p(l):l}]:["span",n,String(l)]}function u(l,a){const m=l.type;if(E(m))return;const w={};for(const P in l.ctx)f(m,P,a)&&(w[P]=l.ctx[P]);return w}function f(l,a,m){const w=l[m];if(d(w)&&w.includes(a)||N(w)&&a in w||l.extends&&f(l.extends,a,m)||l.mixins&&l.mixins.some(P=>f(P,a,m)))return!0}function h(l){return Xe(l)?"ShallowRef":l.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}function Fr(){vr()}process.env.NODE_ENV!=="production"&&Fr();let Ar=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const jr={class:"lc-radio"},zr=["group","name"],Hr=["for"],Kr=lr({__name:"index",props:{title:null,color:null,size:null,bold:{type:Boolean},italic:{type:Boolean},backgroundColor:null,group:null,events:null},setup(e){const t=e,n=Ar();return(r,o)=>(Nr(),Sr("div",jr,[Oe("input",{group:e.group,type:"radio",name:He(n)},null,8,zr),Oe("label",{for:He(n),style:M({fontSize:e.size+"px",color:e.color,backgroundColor:e.backgroundColor,fontWeight:e.bold?"bold":"normal",fontStyle:e.italic?"italic":"normal"})},Zt(t.title),13,Hr)]))}}),Jr="";return{render:Kr,editorProps:{title:{type:"string",defaultValue:"\u8BF7\u8F93\u5165\u6587\u5B57",display:"\u5185\u5BB9"},color:{type:"color",defaultValue:"#333",display:"\u989C\u8272"},size:{type:"number",defaultValue:16,display:"\u5B57\u4F53\u5927\u5C0F"},group:{type:"group",defaultValue:2,display:"\u7EC4\u522B"}}}});