const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClickCounter-CQv1Ix_L.js","./FullCodeModal-DkmnLepa.js","./FullCodeModal-Do0NWWzl.css","./ClickCounter-cuEHdkTE.css","./SaveMyName-CPxYn-4A.js","./SaveMyName-CAUeDGcC.css","./PollStation-DuCTGTRP.js","./PollStation-DDaC2Lvn.css","./AuctionHouse-sQn8VgdZ.js","./AuctionHouse-Dx5megk6.css","./AdminOnly-CZnGEt4s.js","./AdminOnly-BH42YLS5.css","./EtherPiggyBank-kOU_ZJrr.js","./EtherPiggyBank-B05u_Xb5.css","./SimpleIOUApp-DhBoIUb3.js","./SimpleIOUApp-B-0TMH-R.css","./TipJar-BgZbxVBO.js","./TipJar-BTmJuooz.css","./SmartCalculator-BwUbVncj.js","./SmartCalculator-CkF9VyiN.css","./ActivityTracker-BFXvCYWb.js","./ActivityTracker-C9WKbHU7.css","./MasterkeyContract-g742V79B.js","./MasterkeyContract-BJXVKu_r.css","./ERC20Token-CbzNn5CU.js","./ERC20Token-BvQRXJN9.css","./MyToken-DSMNJuFr.js","./MyToken-ChEwAHOo.css","./SafeDeposit-BrbtxZON.js","./SafeDeposit-CwL_tn9H.css","./GasEfficientVoting-imRFY8tx.js","./GasEfficientVoting-DD9FOH7O.css","./PluginStore-Clwf0iV1.js","./PluginStore-DEvKw2su.css","./UpgradeHub-BGeRh4WP.js","./UpgradeHub-CYZ_ZIay.css","./OracleContract-CXHl6e_X.js","./OracleContract-DDwHPvfl.css","./SignThis-Df1Tl63K.js","./SignThis-CQmgsfV9.css","./ReentryAttack-BvDrBYk0.js","./ReentryAttack-D9GH1P4l.css","./SimpleNFT-BZ99DE6-.js","./SimpleNFT-Ca-fg8gX.css"])))=>i.map(i=>d[i]);
var du=Object.defineProperty;var Vo=t=>{throw TypeError(t)};var fu=(t,e,n)=>e in t?du(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Q=(t,e,n)=>fu(t,typeof e!="symbol"?e+"":e,n),yi=(t,e,n)=>e.has(t)||Vo("Cannot "+n);var M=(t,e,n)=>(yi(t,e,"read from private field"),n?n.call(t):e.get(t)),he=(t,e,n)=>e.has(t)?Vo("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),oe=(t,e,n,r)=>(yi(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),xe=(t,e,n)=>(yi(t,e,"access private method"),n);var qo=(t,e,n,r)=>({set _(s){oe(t,e,s,n)},get _(){return M(t,e,r)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ao(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ye={},ur=[],Wt=()=>{},pc=()=>!1,Ks=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),co=t=>t.startsWith("onUpdate:"),Ue=Object.assign,lo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pu=Object.prototype.hasOwnProperty,de=(t,e)=>pu.call(t,e),re=Array.isArray,dr=t=>is(t)==="[object Map]",js=t=>is(t)==="[object Set]",Wo=t=>is(t)==="[object Date]",ie=t=>typeof t=="function",Se=t=>typeof t=="string",Gt=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",gc=t=>(me(t)||ie(t))&&ie(t.then)&&ie(t.catch),mc=Object.prototype.toString,is=t=>mc.call(t),gu=t=>is(t).slice(8,-1),hc=t=>is(t)==="[object Object]",Js=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Lr=ao(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mu=/-\w/g,bt=Xs(t=>t.replace(mu,e=>e.slice(1).toUpperCase())),hu=/\B([A-Z])/g,On=Xs(t=>t.replace(hu,"-$1").toLowerCase()),Ys=Xs(t=>t.charAt(0).toUpperCase()+t.slice(1)),bi=Xs(t=>t?`on${Ys(t)}`:""),In=(t,e)=>!Object.is(t,e),xs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Zs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zo;const Qs=()=>zo||(zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ei(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Se(r)?vu(r):ei(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Se(t)||me(t))return t}const yu=/;(?![^(]*\))/g,bu=/:([^]+)/,wu=/\/\*[^]*?\*\//g;function vu(t){const e={};return t.replace(wu,"").split(yu).forEach(n=>{if(n){const r=n.split(bu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ct(t){let e="";if(Se(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Ct(t[n]);r&&(e+=r+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _u="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xu=ao(_u);function bc(t){return!!t||t===""}function Cu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Zn(t[r],e[r]);return n}function Zn(t,e){if(t===e)return!0;let n=Wo(t),r=Wo(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Gt(t),r=Gt(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?Cu(t,e):!1;if(n=me(t),r=me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Zn(t[o],e[o]))return!1}}return String(t)===String(e)}function ku(t,e){return t.findIndex(n=>Zn(n,e))}const wc=t=>!!(t&&t.__v_isRef===!0),Oe=t=>Se(t)?t:t==null?"":re(t)||me(t)&&(t.toString===mc||!ie(t.toString))?wc(t)?Oe(t.value):JSON.stringify(t,vc,2):String(t),vc=(t,e)=>wc(e)?vc(t,e.value):dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[wi(r,i)+" =>"]=s,n),{})}:js(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wi(n))}:Gt(e)?wi(e):me(e)&&!re(e)&&!hc(e)?String(e):e,wi=(t,e="")=>{var n;return Gt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class _c{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ve,!e&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ve;try{return Ve=this,e()}finally{Ve=n}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){this._on>0&&--this._on===0&&(Ve=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function xc(t){return new _c(t)}function Cc(){return Ve}function Eu(t,e=!1){Ve&&Ve.cleanups.push(t)}let we;const vi=new WeakSet;class kc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vi.has(this)&&(vi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Go(this),Ac(this);const e=we,n=kt;we=this,kt=!0;try{return this.fn()}finally{Tc(this),we=e,kt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)po(e);this.deps=this.depsTail=void 0,Go(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ri(this)&&this.run()}get dirty(){return Ri(this)}}let Ec=0,Nr,Ur;function Sc(t,e=!1){if(t.flags|=8,e){t.next=Ur,Ur=t;return}t.next=Nr,Nr=t}function uo(){Ec++}function fo(){if(--Ec>0)return;if(Ur){let e=Ur;for(Ur=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Nr;){let e=Nr;for(Nr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ac(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),po(r),Su(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ri(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ic(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ic(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===jr)||(t.globalVersion=jr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ri(t))))return;t.flags|=2;const e=t.dep,n=we,r=kt;we=t,kt=!0;try{Ac(t);const s=t.fn(t._value);(e.version===0||In(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{we=n,kt=r,Tc(t),t.flags&=-3}}function po(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)po(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Su(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let kt=!0;const Dc=[];function fn(){Dc.push(kt),kt=!1}function pn(){const t=Dc.pop();kt=t===void 0?!0:t}function Go(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=we;we=void 0;try{e()}finally{we=n}}}let jr=0;class Au{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class go{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!we||!kt||we===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==we)n=this.activeLink=new Au(we,this),we.deps?(n.prevDep=we.depsTail,we.depsTail.nextDep=n,we.depsTail=n):we.deps=we.depsTail=n,Oc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=we.depsTail,n.nextDep=void 0,we.depsTail.nextDep=n,we.depsTail=n,we.deps===n&&(we.deps=r)}return n}trigger(e){this.version++,jr++,this.notify(e)}notify(e){uo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fo()}}}function Oc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Oc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ps=new WeakMap,jn=Symbol(""),$i=Symbol(""),Jr=Symbol("");function qe(t,e,n){if(kt&&we){let r=Ps.get(t);r||Ps.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new go),s.map=r,s.key=n),s.track()}}function rn(t,e,n,r,s,i){const o=Ps.get(t);if(!o){jr++;return}const a=c=>{c&&c.trigger()};if(uo(),e==="clear")o.forEach(a);else{const c=re(t),l=c&&Js(n);if(c&&n==="length"){const u=Number(r);o.forEach((d,w)=>{(w==="length"||w===Jr||!Gt(w)&&w>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Jr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(jn)),dr(t)&&a(o.get($i)));break;case"delete":c||(a(o.get(jn)),dr(t)&&a(o.get($i)));break;case"set":dr(t)&&a(o.get(jn));break}}fo()}function Tu(t,e){const n=Ps.get(t);return n&&n.get(e)}function nr(t){const e=ue(t);return e===t?e:(qe(e,"iterate",Jr),dt(t)?e:e.map(St))}function ti(t){return qe(t=ue(t),"iterate",Jr),t}function Cn(t,e){return gn(t)?br(cn(t)?St(e):e):St(e)}const Iu={__proto__:null,[Symbol.iterator](){return _i(this,Symbol.iterator,t=>Cn(this,t))},concat(...t){return nr(this).concat(...t.map(e=>re(e)?nr(e):e))},entries(){return _i(this,"entries",t=>(t[1]=Cn(this,t[1]),t))},every(t,e){return Jt(this,"every",t,e,void 0,arguments)},filter(t,e){return Jt(this,"filter",t,e,n=>n.map(r=>Cn(this,r)),arguments)},find(t,e){return Jt(this,"find",t,e,n=>Cn(this,n),arguments)},findIndex(t,e){return Jt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Jt(this,"findLast",t,e,n=>Cn(this,n),arguments)},findLastIndex(t,e){return Jt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Jt(this,"forEach",t,e,void 0,arguments)},includes(...t){return xi(this,"includes",t)},indexOf(...t){return xi(this,"indexOf",t)},join(t){return nr(this).join(t)},lastIndexOf(...t){return xi(this,"lastIndexOf",t)},map(t,e){return Jt(this,"map",t,e,void 0,arguments)},pop(){return Dr(this,"pop")},push(...t){return Dr(this,"push",t)},reduce(t,...e){return Ko(this,"reduce",t,e)},reduceRight(t,...e){return Ko(this,"reduceRight",t,e)},shift(){return Dr(this,"shift")},some(t,e){return Jt(this,"some",t,e,void 0,arguments)},splice(...t){return Dr(this,"splice",t)},toReversed(){return nr(this).toReversed()},toSorted(t){return nr(this).toSorted(t)},toSpliced(...t){return nr(this).toSpliced(...t)},unshift(...t){return Dr(this,"unshift",t)},values(){return _i(this,"values",t=>Cn(this,t))}};function _i(t,e,n){const r=ti(t),s=r[e]();return r!==t&&!dt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Du=Array.prototype;function Jt(t,e,n,r,s,i){const o=ti(t),a=o!==t&&!dt(t),c=o[e];if(c!==Du[e]){const d=c.apply(t,i);return a?St(d):d}let l=n;o!==t&&(a?l=function(d,w){return n.call(this,Cn(t,d),w,t)}:n.length>2&&(l=function(d,w){return n.call(this,d,w,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function Ko(t,e,n,r){const s=ti(t);let i=n;return s!==t&&(dt(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Cn(t,a),c,t)}),s[e](i,...r)}function xi(t,e,n){const r=ue(t);qe(r,"iterate",Jr);const s=r[e](...n);return(s===-1||s===!1)&&ri(n[0])?(n[0]=ue(n[0]),r[e](...n)):s}function Dr(t,e,n=[]){fn(),uo();const r=ue(t)[e].apply(t,n);return fo(),pn(),r}const Ou=ao("__proto__,__v_isRef,__isVue"),Bc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gt));function Bu(t){Gt(t)||(t=String(t));const e=ue(this);return qe(e,"has",t),e.hasOwnProperty(t)}class Pc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Vu:Nc:i?Lc:$c).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){let c;if(o&&(c=Iu[n]))return c;if(n==="hasOwnProperty")return Bu}const a=Reflect.get(e,n,Ee(e)?e:r);if((Gt(n)?Bc.has(n):Ou(n))||(s||qe(e,"get",n),i))return a;if(Ee(a)){const c=o&&Js(n)?a:a.value;return s&&me(c)?Ni(c):c}return me(a)?s?Ni(a):ni(a):a}}class Rc extends Pc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=re(e)&&Js(n);if(!this._isShallow){const l=gn(i);if(!dt(r)&&!gn(r)&&(i=ue(i),r=ue(r)),!o&&Ee(i)&&!Ee(r))return l||(i.value=r),!0}const a=o?Number(n)<e.length:de(e,n),c=Reflect.set(e,n,r,Ee(e)?e:s);return e===ue(s)&&(a?In(r,i)&&rn(e,"set",n,r):rn(e,"add",n,r)),c}deleteProperty(e,n){const r=de(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gt(n)||!Bc.has(n))&&qe(e,"has",n),r}ownKeys(e){return qe(e,"iterate",re(e)?"length":jn),Reflect.ownKeys(e)}}class Pu extends Pc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ru=new Rc,$u=new Pu,Lu=new Rc(!0);const Li=t=>t,fs=t=>Reflect.getPrototypeOf(t);function Nu(t,e,n){return function(...r){const s=this.__v_raw,i=ue(s),o=dr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Li:e?br:St;return!e&&qe(i,"iterate",c?$i:jn),Ue(Object.create(l),{next(){const{value:d,done:w}=l.next();return w?{value:d,done:w}:{value:a?[u(d[0]),u(d[1])]:u(d),done:w}}})}}function ps(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Uu(t,e){const n={get(s){const i=this.__v_raw,o=ue(i),a=ue(s);t||(In(s,a)&&qe(o,"get",s),qe(o,"get",a));const{has:c}=fs(o),l=e?Li:t?br:St;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&qe(ue(s),"iterate",jn),s.size},has(s){const i=this.__v_raw,o=ue(i),a=ue(s);return t||(In(s,a)&&qe(o,"has",s),qe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=ue(a),l=e?Li:t?br:St;return!t&&qe(c,"iterate",jn),a.forEach((u,d)=>s.call(i,l(u),l(d),o))}};return Ue(n,t?{add:ps("add"),set:ps("set"),delete:ps("delete"),clear:ps("clear")}:{add(s){!e&&!dt(s)&&!gn(s)&&(s=ue(s));const i=ue(this);return fs(i).has.call(i,s)||(i.add(s),rn(i,"add",s,s)),this},set(s,i){!e&&!dt(i)&&!gn(i)&&(i=ue(i));const o=ue(this),{has:a,get:c}=fs(o);let l=a.call(o,s);l||(s=ue(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?In(i,u)&&rn(o,"set",s,i):rn(o,"add",s,i),this},delete(s){const i=ue(this),{has:o,get:a}=fs(i);let c=o.call(i,s);c||(s=ue(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&rn(i,"delete",s,void 0),l},clear(){const s=ue(this),i=s.size!==0,o=s.clear();return i&&rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Nu(s,t,e)}),n}function mo(t,e){const n=Uu(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(de(n,s)&&s in r?n:r,s,i)}const Mu={get:mo(!1,!1)},Fu={get:mo(!1,!0)},Hu={get:mo(!0,!1)};const $c=new WeakMap,Lc=new WeakMap,Nc=new WeakMap,Vu=new WeakMap;function qu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wu(t){return t.__v_skip||!Object.isExtensible(t)?0:qu(gu(t))}function ni(t){return gn(t)?t:ho(t,!1,Ru,Mu,$c)}function zu(t){return ho(t,!1,Lu,Fu,Lc)}function Ni(t){return ho(t,!0,$u,Hu,Nc)}function ho(t,e,n,r,s){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Wu(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function cn(t){return gn(t)?cn(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function dt(t){return!!(t&&t.__v_isShallow)}function ri(t){return t?!!t.__v_raw:!1}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function yo(t){return!de(t,"__v_skip")&&Object.isExtensible(t)&&yc(t,"__v_skip",!0),t}const St=t=>me(t)?ni(t):t,br=t=>me(t)?Ni(t):t;function Ee(t){return t?t.__v_isRef===!0:!1}function F(t){return Gu(t,!1)}function Gu(t,e){return Ee(t)?t:new Ku(t,e)}class Ku{constructor(e,n){this.dep=new go,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ue(e),this._value=n?e:St(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||dt(e)||gn(e);e=r?e:ue(e),In(e,n)&&(this._rawValue=e,this._value=r?e:St(e),this.dep.trigger())}}function Xr(t){return Ee(t)?t.value:t}const ju={get:(t,e,n)=>e==="__v_raw"?t:Xr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Uc(t){return cn(t)?t:new Proxy(t,ju)}function Ju(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=Yu(t,n);return e}class Xu{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=ue(e);let s=!0,i=e;if(!re(e)||!Js(String(n)))do s=!ri(i)||dt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Xr(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ee(this._raw[this._key])){const n=this._object[this._key];if(Ee(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Tu(this._raw,this._key)}}function Yu(t,e,n){return new Xu(t,e,n)}class Zu{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new go(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return Sc(this,!0),!0}get value(){const e=this.dep.track();return Ic(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qu(t,e,n=!1){let r,s;return ie(t)?r=t:(r=t.get,s=t.set),new Zu(r,s,n)}const gs={},Rs=new WeakMap;let Nn;function ed(t,e=!1,n=Nn){if(n){let r=Rs.get(n);r||Rs.set(n,r=[]),r.push(t)}}function td(t,e,n=ye){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=f=>s?f:dt(f)||s===!1||s===0?sn(f,1):sn(f);let u,d,w,m,C=!1,h=!1;if(Ee(t)?(d=()=>t.value,C=dt(t)):cn(t)?(d=()=>l(t),C=!0):re(t)?(h=!0,C=t.some(f=>cn(f)||dt(f)),d=()=>t.map(f=>{if(Ee(f))return f.value;if(cn(f))return l(f);if(ie(f))return c?c(f,2):f()})):ie(t)?e?d=c?()=>c(t,2):t:d=()=>{if(w){fn();try{w()}finally{pn()}}const f=Nn;Nn=u;try{return c?c(t,3,[m]):t(m)}finally{Nn=f}}:d=Wt,e&&s){const f=d,p=s===!0?1/0:s;d=()=>sn(f(),p)}const E=Cc(),D=()=>{u.stop(),E&&E.active&&lo(E.effects,u)};if(i&&e){const f=e;e=(...p)=>{f(...p),D()}}let b=h?new Array(t.length).fill(gs):gs;const k=f=>{if(!(!(u.flags&1)||!u.dirty&&!f))if(e){const p=u.run();if(s||C||(h?p.some((v,A)=>In(v,b[A])):In(p,b))){w&&w();const v=Nn;Nn=u;try{const A=[p,b===gs?void 0:h&&b[0]===gs?[]:b,m];b=p,c?c(e,3,A):e(...A)}finally{Nn=v}}}else u.run()};return a&&a(k),u=new kc(d),u.scheduler=o?()=>o(k,!1):k,m=f=>ed(f,!1,u),w=u.onStop=()=>{const f=Rs.get(u);if(f){if(c)c(f,4);else for(const p of f)p();Rs.delete(u)}},e?r?k(!0):b=u.run():o?o(k.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function sn(t,e=1/0,n){if(e<=0||!me(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ee(t))sn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)sn(t[r],e,n);else if(js(t)||dr(t))t.forEach(r=>{sn(r,e,n)});else if(hc(t)){for(const r in t)sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function os(t,e,n,r){try{return r?t(...r):t()}catch(s){as(s,e,n)}}function Kt(t,e,n,r){if(ie(t)){const s=os(t,e,n,r);return s&&gc(s)&&s.catch(i=>{as(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Kt(t[i],e,n,r));return s}}function as(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ye;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(i){fn(),os(i,null,10,[t,c,l]),pn();return}}nd(t,n,s,r,o)}function nd(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ke=[];let $t=-1;const fr=[];let kn=null,ir=0;const Mc=Promise.resolve();let $s=null;function bo(t){const e=$s||Mc;return t?e.then(this?t.bind(this):t):e}function rd(t){let e=$t+1,n=Ke.length;for(;e<n;){const r=e+n>>>1,s=Ke[r],i=Yr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function wo(t){if(!(t.flags&1)){const e=Yr(t),n=Ke[Ke.length-1];!n||!(t.flags&2)&&e>=Yr(n)?Ke.push(t):Ke.splice(rd(e),0,t),t.flags|=1,Fc()}}function Fc(){$s||($s=Mc.then(Vc))}function sd(t){re(t)?fr.push(...t):kn&&t.id===-1?kn.splice(ir+1,0,t):t.flags&1||(fr.push(t),t.flags|=1),Fc()}function jo(t,e,n=$t+1){for(;n<Ke.length;n++){const r=Ke[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ke.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Hc(t){if(fr.length){const e=[...new Set(fr)].sort((n,r)=>Yr(n)-Yr(r));if(fr.length=0,kn){kn.push(...e);return}for(kn=e,ir=0;ir<kn.length;ir++){const n=kn[ir];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}kn=null,ir=0}}const Yr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Vc(t){try{for($t=0;$t<Ke.length;$t++){const e=Ke[$t];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),os(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$t<Ke.length;$t++){const e=Ke[$t];e&&(e.flags&=-2)}$t=-1,Ke.length=0,Hc(),$s=null,(Ke.length||fr.length)&&Vc()}}let lt=null,qc=null;function Ls(t){const e=lt;return lt=t,qc=t&&t.type.__scopeId||null,e}function id(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ua(-1);const i=Ls(e);let o;try{o=t(...s)}finally{Ls(i),r._d&&ua(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Mh(t,e){if(lt===null)return t;const n=ai(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ye]=e[s];i&&(ie(i)&&(i={mounted:i,updated:i}),i.deep&&sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Rn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(fn(),Kt(c,n,8,[t.el,a,t,e]),pn())}}function od(t,e){if($e){let n=$e.provides;const r=$e.parent&&$e.parent.provides;r===n&&(n=$e.provides=Object.create(r)),n[t]=e}}function Mr(t,e,n=!1){const r=hl();if(r||Jn){let s=Jn?Jn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}function ad(){return!!(hl()||Jn)}const cd=Symbol.for("v-scx"),ld=()=>Mr(cd);function Cs(t,e,n){return Wc(t,e,n)}function Wc(t,e,n=ye){const{immediate:r,deep:s,flush:i,once:o}=n,a=Ue({},n),c=e&&r||!e&&i!=="post";let l;if(vr){if(i==="sync"){const m=ld();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Wt,m.resume=Wt,m.pause=Wt,m}}const u=$e;a.call=(m,C,h)=>Kt(m,u,C,h);let d=!1;i==="post"?a.scheduler=m=>{He(m,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,C)=>{C?m():wo(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const w=td(t,e,a);return vr&&(l?l.push(w):c&&w()),w}function ud(t,e,n){const r=this.proxy,s=Se(t)?t.includes(".")?zc(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=cs(this),a=Wc(s,i.bind(r),n);return o(),a}function zc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Gc=Symbol("_vte"),dd=t=>t.__isTeleport,Fr=t=>t&&(t.disabled||t.disabled===""),Jo=t=>t&&(t.defer||t.defer===""),Xo=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Yo=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ui=(t,e)=>{const n=t&&t.to;return Se(n)?e?e(n):null:n},Kc={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:d,pbc:w,o:{insert:m,querySelector:C,createText:h,createComment:E}}=l,D=Fr(e.props);let{shapeFlag:b,children:k,dynamicChildren:f}=e;if(t==null){const p=e.el=h(""),v=e.anchor=h("");m(p,n,r),m(v,n,r);const A=(g,I)=>{b&16&&u(k,g,I,s,i,o,a,c)},_=()=>{const g=e.target=Ui(e.props,C),I=Mi(g,e,h,m);g&&(o!=="svg"&&Xo(g)?o="svg":o!=="mathml"&&Yo(g)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(g),D||(A(g,I),ks(e,!1)))};D&&(A(n,v),ks(e,!0)),Jo(e.props)?(e.el.__isMounted=!1,He(()=>{_(),delete e.el.__isMounted},i)):_()}else{if(Jo(e.props)&&t.el.__isMounted===!1){He(()=>{Kc.process(t,e,n,r,s,i,o,a,c,l)},i);return}e.el=t.el,e.targetStart=t.targetStart;const p=e.anchor=t.anchor,v=e.target=t.target,A=e.targetAnchor=t.targetAnchor,_=Fr(t.props),g=_?n:v,I=_?p:A;if(o==="svg"||Xo(v)?o="svg":(o==="mathml"||Yo(v))&&(o="mathml"),f?(w(t.dynamicChildren,f,g,s,i,o,a),Ao(t,e,!0)):c||d(t,e,g,I,s,i,o,a,!1),D)_?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ms(e,n,p,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const T=e.target=Ui(e.props,C);T&&ms(e,T,null,l,0)}else _&&ms(e,v,A,l,1);ks(e,D)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:l,targetAnchor:u,target:d,props:w}=t;if(d&&(s(l),s(u)),i&&s(c),o&16){const m=i||!Fr(w);for(let C=0;C<a.length;C++){const h=a[C];r(h,e,n,m,!!h.dynamicChildren)}}},move:ms,hydrate:fd};function ms(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,d=i===2;if(d&&r(o,e,n),(!d||Fr(u))&&c&16)for(let w=0;w<l.length;w++)s(l[w],e,n,2);d&&r(a,e,n)}function fd(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:l,createText:u}},d){function w(E,D){let b=D;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")e.targetStart=b;else if(b.data==="teleport anchor"){e.targetAnchor=b,E._lpa=e.targetAnchor&&o(e.targetAnchor);break}}b=o(b)}}function m(E,D){D.anchor=d(o(E),D,a(E),n,r,s,i)}const C=e.target=Ui(e.props,c),h=Fr(e.props);if(C){const E=C._lpa||C.firstChild;e.shapeFlag&16&&(h?(m(t,e),w(C,E),e.targetAnchor||Mi(C,e,u,l,a(t)===C?t:null)):(e.anchor=o(t),w(C,E),e.targetAnchor||Mi(C,e,u,l),d(E&&o(E),e,C,n,r,s,i))),ks(e,h)}else h&&e.shapeFlag&16&&(m(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Fh=Kc;function ks(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Mi(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Gc]=o,t&&(r(i,t,s),r(o,t,s)),o}const pd=Symbol("_leaveCb");function vo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,vo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function gd(t,e){return ie(t)?Ue({name:t.name},e,{setup:t}):t}function _o(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Zo(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ns=new WeakMap;function Hr(t,e,n,r,s=!1){if(re(t)){t.forEach((h,E)=>Hr(h,e&&(re(e)?e[E]:e),n,r,s));return}if(Vr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Hr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ai(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,d=a.setupState,w=ue(d),m=d===ye?pc:h=>Zo(u,h)?!1:de(w,h),C=(h,E)=>!(E&&Zo(u,E));if(l!=null&&l!==c){if(Qo(e),Se(l))u[l]=null,m(l)&&(d[l]=null);else if(Ee(l)){const h=e;C(l,h.k)&&(l.value=null),h.k&&(u[h.k]=null)}}if(ie(c))os(c,a,12,[o,u]);else{const h=Se(c),E=Ee(c);if(h||E){const D=()=>{if(t.f){const b=h?m(c)?d[c]:u[c]:C()||!t.k?c.value:u[t.k];if(s)re(b)&&lo(b,i);else if(re(b))b.includes(i)||b.push(i);else if(h)u[c]=[i],m(c)&&(d[c]=u[c]);else{const k=[i];C(c,t.k)&&(c.value=k),t.k&&(u[t.k]=k)}}else h?(u[c]=o,m(c)&&(d[c]=o)):E&&(C(c,t.k)&&(c.value=o),t.k&&(u[t.k]=o))};if(o){const b=()=>{D(),Ns.delete(t)};b.id=-1,Ns.set(t,b),He(b,n)}else Qo(t),D()}}}function Qo(t){const e=Ns.get(t);e&&(e.flags|=8,Ns.delete(t))}const ea=t=>t.nodeType===8;Qs().requestIdleCallback;Qs().cancelIdleCallback;function md(t,e){if(ea(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(ea(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Vr=t=>!!t.type.__asyncLoader;function Ie(t){ie(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let l=null,u,d=0;const w=()=>(d++,l=null,m()),m=()=>{let C;return l||(C=l=e().catch(h=>{if(h=h instanceof Error?h:new Error(String(h)),c)return new Promise((E,D)=>{c(h,()=>E(w()),()=>D(h),d+1)});throw h}).then(h=>C!==l&&l?l:(h&&(h.__esModule||h[Symbol.toStringTag]==="Module")&&(h=h.default),u=h,h)))};return gd({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(C,h,E){let D=!1;(h.bu||(h.bu=[])).push(()=>D=!0);const b=()=>{D||E()},k=i?()=>{const f=i(b,p=>md(C,p));f&&(h.bum||(h.bum=[])).push(f)}:b;u?k():m().then(()=>!h.isUnmounted&&k())},get __asyncResolved(){return u},setup(){const C=$e;if(_o(C),u)return()=>hs(u,C);const h=k=>{l=null,as(k,C,13,!r)};if(a&&C.suspense||vr)return m().then(k=>()=>hs(k,C)).catch(k=>(h(k),()=>r?Le(r,{error:k}):null));const E=F(!1),D=F(),b=F(!!s);return s&&setTimeout(()=>{b.value=!1},s),o!=null&&setTimeout(()=>{if(!E.value&&!D.value){const k=new Error(`Async component timed out after ${o}ms.`);h(k),D.value=k}},o),m().then(()=>{E.value=!0,C.parent&&xo(C.parent.vnode)&&C.parent.update()}).catch(k=>{h(k),D.value=k}),()=>{if(E.value&&u)return hs(u,C);if(D.value&&r)return Le(r,{error:D.value});if(n&&!b.value)return hs(n,C)}}})}function hs(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Le(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const xo=t=>t.type.__isKeepAlive;function hd(t,e){jc(t,"a",e)}function yd(t,e){jc(t,"da",e)}function jc(t,e,n=$e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(si(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xo(s.parent.vnode)&&bd(r,e,n,s),s=s.parent}}function bd(t,e,n,r){const s=si(e,t,r,!0);ko(()=>{lo(r[e],s)},n)}function si(t,e,n=$e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{fn();const a=cs(n),c=Kt(e,n,t,o);return a(),pn(),c});return r?s.unshift(i):s.push(i),i}}const hn=t=>(e,n=$e)=>{(!vr||t==="sp")&&si(t,(...r)=>e(...r),n)},wd=hn("bm"),Co=hn("m"),vd=hn("bu"),_d=hn("u"),xd=hn("bum"),ko=hn("um"),Cd=hn("sp"),kd=hn("rtg"),Ed=hn("rtc");function Sd(t,e=$e){si("ec",t,e)}const Ad="components",Jc=Symbol.for("v-ndc");function Td(t){return Se(t)?Id(Ad,t,!1)||t:t||Jc}function Id(t,e,n=!0,r=!1){const s=lt||$e;if(s){const i=s.type;{const a=gf(i,!1);if(a&&(a===e||a===bt(e)||a===Ys(bt(e))))return i}const o=ta(s[t]||i[t],e)||ta(s.appContext[t],e);return!o&&r?i:o}}function ta(t,e){return t&&(t[e]||t[bt(e)]||t[Ys(bt(e))])}function Us(t,e,n,r){let s;const i=n,o=re(t);if(o||Se(t)){const a=o&&cn(t);let c=!1,l=!1;a&&(c=!dt(t),l=gn(t),t=ti(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?l?br(St(t[u])):St(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(me(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}const Fi=t=>t?yl(t)?ai(t):Fi(t.parent):null,qr=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fi(t.parent),$root:t=>Fi(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Yc(t),$forceUpdate:t=>t.f||(t.f=()=>{wo(t.update)}),$nextTick:t=>t.n||(t.n=bo.bind(t.proxy)),$watch:t=>ud.bind(t)}),Ci=(t,e)=>t!==ye&&!t.__isScriptSetup&&de(t,e),Dd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ci(r,e))return o[e]=1,r[e];if(s!==ye&&de(s,e))return o[e]=2,s[e];if(de(i,e))return o[e]=3,i[e];if(n!==ye&&de(n,e))return o[e]=4,n[e];Hi&&(o[e]=0)}}const l=qr[e];let u,d;if(l)return e==="$attrs"&&qe(t.attrs,"get",""),l(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ye&&de(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ci(s,e)?(s[e]=n,!0):r!==ye&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},a){let c;return!!(n[a]||t!==ye&&a[0]!=="$"&&de(t,a)||Ci(e,a)||de(i,a)||de(r,a)||de(qr,a)||de(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function na(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hi=!0;function Od(t){const e=Yc(t),n=t.proxy,r=t.ctx;Hi=!1,e.beforeCreate&&ra(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:w,beforeUpdate:m,updated:C,activated:h,deactivated:E,beforeDestroy:D,beforeUnmount:b,destroyed:k,unmounted:f,render:p,renderTracked:v,renderTriggered:A,errorCaptured:_,serverPrefetch:g,expose:I,inheritAttrs:T,components:B,directives:$,filters:K}=e;if(l&&Bd(l,r,null),o)for(const S in o){const L=o[S];ie(L)&&(r[S]=L.bind(n))}if(s){const S=s.call(n,n);me(S)&&(t.data=ni(S))}if(Hi=!0,i)for(const S in i){const L=i[S],Z=ie(L)?L.bind(n,n):ie(L.get)?L.get.bind(n,n):Wt,ne=!ie(L)&&ie(L.set)?L.set.bind(n):Wt,ce=O({get:Z,set:ne});Object.defineProperty(r,S,{enumerable:!0,configurable:!0,get:()=>ce.value,set:pe=>ce.value=pe})}if(a)for(const S in a)Xc(a[S],r,n,S);if(c){const S=ie(c)?c.call(n):c;Reflect.ownKeys(S).forEach(L=>{od(L,S[L])})}u&&ra(u,t,"c");function P(S,L){re(L)?L.forEach(Z=>S(Z.bind(n))):L&&S(L.bind(n))}if(P(wd,d),P(Co,w),P(vd,m),P(_d,C),P(hd,h),P(yd,E),P(Sd,_),P(Ed,v),P(kd,A),P(xd,b),P(ko,f),P(Cd,g),re(I))if(I.length){const S=t.exposed||(t.exposed={});I.forEach(L=>{Object.defineProperty(S,L,{get:()=>n[L],set:Z=>n[L]=Z,enumerable:!0})})}else t.exposed||(t.exposed={});p&&t.render===Wt&&(t.render=p),T!=null&&(t.inheritAttrs=T),B&&(t.components=B),$&&(t.directives=$),g&&_o(t)}function Bd(t,e,n=Wt){re(t)&&(t=Vi(t));for(const r in t){const s=t[r];let i;me(s)?"default"in s?i=Mr(s.from||r,s.default,!0):i=Mr(s.from||r):i=Mr(s),Ee(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ra(t,e,n){Kt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xc(t,e,n,r){let s=r.includes(".")?zc(n,r):()=>n[r];if(Se(t)){const i=e[t];ie(i)&&Cs(s,i)}else if(ie(t))Cs(s,t.bind(n));else if(me(t))if(re(t))t.forEach(i=>Xc(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Cs(s,i,t)}}function Yc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ms(c,l,o,!0)),Ms(c,e,o)),me(e)&&i.set(e,c),c}function Ms(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ms(t,i,n,!0),s&&s.forEach(o=>Ms(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Pd[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Pd={data:sa,props:ia,emits:ia,methods:$r,computed:$r,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:$r,directives:$r,watch:$d,provide:sa,inject:Rd};function sa(t,e){return e?t?function(){return Ue(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function Rd(t,e){return $r(Vi(t),Vi(e))}function Vi(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function $r(t,e){return t?Ue(Object.create(null),t,e):e}function ia(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Ue(Object.create(null),na(t),na(e??{})):e}function $d(t,e){if(!t)return e;if(!e)return t;const n=Ue(Object.create(null),t);for(const r in e)n[r]=Ge(t[r],e[r]);return n}function Zc(){return{app:null,config:{isNativeTag:pc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ld=0;function Nd(t,e){return function(r,s=null){ie(r)||(r=Ue({},r)),s!=null&&!me(s)&&(s=null);const i=Zc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Ld++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(l,...d)):ie(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,w){if(!c){const m=l._ceVNode||Le(r,s);return m.appContext=i,w===!0?w="svg":w===!1&&(w=void 0),t(m,u,w),c=!0,l._container=u,u.__vue_app__=l,ai(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Kt(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=Jn;Jn=l;try{return u()}finally{Jn=d}}};return l}}let Jn=null;const Ud=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bt(e)}Modifiers`]||t[`${On(e)}Modifiers`];function Md(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ye;let s=n;const i=e.startsWith("update:"),o=i&&Ud(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>Se(u)?u.trim():u)),o.number&&(s=n.map(Zs)));let a,c=r[a=bi(e)]||r[a=bi(bt(e))];!c&&i&&(c=r[a=bi(On(e))]),c&&Kt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Kt(l,t,6,s)}}const Fd=new WeakMap;function Qc(t,e,n=!1){const r=n?Fd:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=l=>{const u=Qc(l,e,!0);u&&(a=!0,Ue(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(me(t)&&r.set(t,null),null):(re(i)?i.forEach(c=>o[c]=null):Ue(o,i),me(t)&&r.set(t,o),o)}function ii(t,e){return!t||!Ks(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,On(e))||de(t,e))}function oa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:w,setupState:m,ctx:C,inheritAttrs:h}=t,E=Ls(t);let D,b;try{if(n.shapeFlag&4){const f=s||r,p=f;D=Ft(l.call(p,f,u,d,m,w,C)),b=a}else{const f=e;D=Ft(f.length>1?f(d,{attrs:a,slots:o,emit:c}):f(d,null)),b=e.props?a:Hd(a)}}catch(f){Wr.length=0,as(f,t,1),D=Le(Dn)}let k=D;if(b&&h!==!1){const f=Object.keys(b),{shapeFlag:p}=k;f.length&&p&7&&(i&&f.some(co)&&(b=Vd(b,i)),k=wr(k,b,!1,!0))}return n.dirs&&(k=wr(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&vo(k,n.transition),D=k,Ls(E),D}const Hd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ks(n))&&((e||(e={}))[n]=t[n]);return e},Vd=(t,e)=>{const n={};for(const r in t)(!co(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function qd(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?aa(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const w=u[d];if(el(o,r,w)&&!ii(l,w))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?aa(r,o,l):!0:!!o;return!1}function aa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(el(e,t,i)&&!ii(n,i))return!0}return!1}function el(t,e,n){const r=t[n],s=e[n];return n==="style"&&me(r)&&me(s)?!Zn(r,s):r!==s}function Wd({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const tl={},nl=()=>Object.create(tl),rl=t=>Object.getPrototypeOf(t)===tl;function zd(t,e,n,r=!1){const s={},i=nl();t.propsDefaults=Object.create(null),sl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:zu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Gd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ue(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let w=u[d];if(ii(t.emitsOptions,w))continue;const m=e[w];if(c)if(de(i,w))m!==i[w]&&(i[w]=m,l=!0);else{const C=bt(w);s[C]=qi(c,a,C,m,t,!1)}else m!==i[w]&&(i[w]=m,l=!0)}}}else{sl(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!de(e,d)&&((u=On(d))===d||!de(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=qi(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!de(e,d))&&(delete i[d],l=!0)}l&&rn(t.attrs,"set","")}function sl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Lr(c))continue;const l=e[c];let u;s&&de(s,u=bt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ii(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ue(n),l=a||ye;for(let u=0;u<i.length;u++){const d=i[u];n[d]=qi(s,c,d,l[d],t,!de(l,d))}}return o}function qi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ie(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=cs(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===On(n))&&(r=!0))}return r}const Kd=new WeakMap;function il(t,e,n=!1){const r=n?Kd:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const u=d=>{c=!0;const[w,m]=il(d,e,!0);Ue(o,w),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return me(t)&&r.set(t,ur),ur;if(re(i))for(let u=0;u<i.length;u++){const d=bt(i[u]);ca(d)&&(o[d]=ye)}else if(i)for(const u in i){const d=bt(u);if(ca(d)){const w=i[u],m=o[d]=re(w)||ie(w)?{type:w}:Ue({},w),C=m.type;let h=!1,E=!0;if(re(C))for(let D=0;D<C.length;++D){const b=C[D],k=ie(b)&&b.name;if(k==="Boolean"){h=!0;break}else k==="String"&&(E=!1)}else h=ie(C)&&C.name==="Boolean";m[0]=h,m[1]=E,(h||de(m,"default"))&&a.push(d)}}const l=[o,a];return me(t)&&r.set(t,l),l}function ca(t){return t[0]!=="$"&&!Lr(t)}const Eo=t=>t==="_"||t==="_ctx"||t==="$stable",So=t=>re(t)?t.map(Ft):[Ft(t)],jd=(t,e,n)=>{if(e._n)return e;const r=id((...s)=>So(e(...s)),n);return r._c=!1,r},ol=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Eo(s))continue;const i=t[s];if(ie(i))e[s]=jd(s,i,r);else if(i!=null){const o=So(i);e[s]=()=>o}}},al=(t,e)=>{const n=So(e);t.slots.default=()=>n},cl=(t,e,n)=>{for(const r in e)(n||!Eo(r))&&(t[r]=e[r])},Jd=(t,e,n)=>{const r=t.slots=nl();if(t.vnode.shapeFlag&32){const s=e._;s?(cl(r,e,n),n&&yc(r,"_",s,!0)):ol(e,r)}else e&&al(t,e)},Xd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ye;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:cl(s,e,n):(i=!e.$stable,ol(e,s)),o=e}else e&&(al(t,e),o={default:1});if(i)for(const a in s)!Eo(a)&&o[a]==null&&delete s[a]},He=tf;function Yd(t){return Zd(t)}function Zd(t,e){const n=Qs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:w,setScopeId:m=Wt,insertStaticContent:C}=t,h=(y,x,R,H=null,U=null,V=null,j=void 0,z=null,W=!!x.dynamicChildren)=>{if(y===x)return;y&&!Or(y,x)&&(H=it(y),pe(y,U,V,!0),y=null),x.patchFlag===-2&&(W=!1,x.dynamicChildren=null);const{type:q,ref:te,shapeFlag:J}=x;switch(q){case oi:E(y,x,R,H);break;case Dn:D(y,x,R,H);break;case Es:y==null&&b(x,R,H,j);break;case ct:B(y,x,R,H,U,V,j,z,W);break;default:J&1?p(y,x,R,H,U,V,j,z,W):J&6?$(y,x,R,H,U,V,j,z,W):(J&64||J&128)&&q.process(y,x,R,H,U,V,j,z,W,pt)}te!=null&&U?Hr(te,y&&y.ref,V,x||y,!x):te==null&&y&&y.ref!=null&&Hr(y.ref,null,V,y,!0)},E=(y,x,R,H)=>{if(y==null)r(x.el=a(x.children),R,H);else{const U=x.el=y.el;x.children!==y.children&&l(U,x.children)}},D=(y,x,R,H)=>{y==null?r(x.el=c(x.children||""),R,H):x.el=y.el},b=(y,x,R,H)=>{[y.el,y.anchor]=C(y.children,x,R,H,y.el,y.anchor)},k=({el:y,anchor:x},R,H)=>{let U;for(;y&&y!==x;)U=w(y),r(y,R,H),y=U;r(x,R,H)},f=({el:y,anchor:x})=>{let R;for(;y&&y!==x;)R=w(y),s(y),y=R;s(x)},p=(y,x,R,H,U,V,j,z,W)=>{if(x.type==="svg"?j="svg":x.type==="math"&&(j="mathml"),y==null)v(x,R,H,U,V,j,z,W);else{const q=y.el&&y.el._isVueCE?y.el:null;try{q&&q._beginPatch(),g(y,x,U,V,j,z,W)}finally{q&&q._endPatch()}}},v=(y,x,R,H,U,V,j,z)=>{let W,q;const{props:te,shapeFlag:J,transition:ee,dirs:se}=y;if(W=y.el=o(y.type,V,te&&te.is,te),J&8?u(W,y.children):J&16&&_(y.children,W,null,H,U,ki(y,V),j,z),se&&Rn(y,null,H,"created"),A(W,y,y.scopeId,j,H),te){for(const be in te)be!=="value"&&!Lr(be)&&i(W,be,null,te[be],V,H);"value"in te&&i(W,"value",null,te.value,V),(q=te.onVnodeBeforeMount)&&Pt(q,H,y)}se&&Rn(y,null,H,"beforeMount");const ae=Qd(U,ee);ae&&ee.beforeEnter(W),r(W,x,R),((q=te&&te.onVnodeMounted)||ae||se)&&He(()=>{q&&Pt(q,H,y),ae&&ee.enter(W),se&&Rn(y,null,H,"mounted")},U)},A=(y,x,R,H,U)=>{if(R&&m(y,R),H)for(let V=0;V<H.length;V++)m(y,H[V]);if(U){let V=U.subTree;if(x===V||dl(V.type)&&(V.ssContent===x||V.ssFallback===x)){const j=U.vnode;A(y,j,j.scopeId,j.slotScopeIds,U.parent)}}},_=(y,x,R,H,U,V,j,z,W=0)=>{for(let q=W;q<y.length;q++){const te=y[q]=z?Qt(y[q]):Ft(y[q]);h(null,te,x,R,H,U,V,j,z)}},g=(y,x,R,H,U,V,j)=>{const z=x.el=y.el;let{patchFlag:W,dynamicChildren:q,dirs:te}=x;W|=y.patchFlag&16;const J=y.props||ye,ee=x.props||ye;let se;if(R&&$n(R,!1),(se=ee.onVnodeBeforeUpdate)&&Pt(se,R,x,y),te&&Rn(x,y,R,"beforeUpdate"),R&&$n(R,!0),(J.innerHTML&&ee.innerHTML==null||J.textContent&&ee.textContent==null)&&u(z,""),q?I(y.dynamicChildren,q,z,R,H,ki(x,U),V):j||L(y,x,z,null,R,H,ki(x,U),V,!1),W>0){if(W&16)T(z,J,ee,R,U);else if(W&2&&J.class!==ee.class&&i(z,"class",null,ee.class,U),W&4&&i(z,"style",J.style,ee.style,U),W&8){const ae=x.dynamicProps;for(let be=0;be<ae.length;be++){const ge=ae[be],Ye=J[ge],Ze=ee[ge];(Ze!==Ye||ge==="value")&&i(z,ge,Ye,Ze,U,R)}}W&1&&y.children!==x.children&&u(z,x.children)}else!j&&q==null&&T(z,J,ee,R,U);((se=ee.onVnodeUpdated)||te)&&He(()=>{se&&Pt(se,R,x,y),te&&Rn(x,y,R,"updated")},H)},I=(y,x,R,H,U,V,j)=>{for(let z=0;z<x.length;z++){const W=y[z],q=x[z],te=W.el&&(W.type===ct||!Or(W,q)||W.shapeFlag&198)?d(W.el):R;h(W,q,te,null,H,U,V,j,!0)}},T=(y,x,R,H,U)=>{if(x!==R){if(x!==ye)for(const V in x)!Lr(V)&&!(V in R)&&i(y,V,x[V],null,U,H);for(const V in R){if(Lr(V))continue;const j=R[V],z=x[V];j!==z&&V!=="value"&&i(y,V,z,j,U,H)}"value"in R&&i(y,"value",x.value,R.value,U)}},B=(y,x,R,H,U,V,j,z,W)=>{const q=x.el=y?y.el:a(""),te=x.anchor=y?y.anchor:a("");let{patchFlag:J,dynamicChildren:ee,slotScopeIds:se}=x;se&&(z=z?z.concat(se):se),y==null?(r(q,R,H),r(te,R,H),_(x.children||[],R,te,U,V,j,z,W)):J>0&&J&64&&ee&&y.dynamicChildren&&y.dynamicChildren.length===ee.length?(I(y.dynamicChildren,ee,R,U,V,j,z),(x.key!=null||U&&x===U.subTree)&&Ao(y,x,!0)):L(y,x,R,te,U,V,j,z,W)},$=(y,x,R,H,U,V,j,z,W)=>{x.slotScopeIds=z,y==null?x.shapeFlag&512?U.ctx.activate(x,R,H,j,W):K(x,R,H,U,V,j,W):N(y,x,W)},K=(y,x,R,H,U,V,j)=>{const z=y.component=lf(y,H,U);if(xo(y)&&(z.ctx.renderer=pt),uf(z,!1,j),z.asyncDep){if(U&&U.registerDep(z,P,j),!y.el){const W=z.subTree=Le(Dn);D(null,W,x,R),y.placeholder=W.el}}else P(z,y,x,R,U,V,j)},N=(y,x,R)=>{const H=x.component=y.component;if(qd(y,x,R))if(H.asyncDep&&!H.asyncResolved){S(H,x,R);return}else H.next=x,H.update();else x.el=y.el,H.vnode=x},P=(y,x,R,H,U,V,j)=>{const z=()=>{if(y.isMounted){let{next:J,bu:ee,u:se,parent:ae,vnode:be}=y;{const Ot=ll(y);if(Ot){J&&(J.el=be.el,S(y,J,j)),Ot.asyncDep.then(()=>{He(()=>{y.isUnmounted||q()},U)});return}}let ge=J,Ye;$n(y,!1),J?(J.el=be.el,S(y,J,j)):J=be,ee&&xs(ee),(Ye=J.props&&J.props.onVnodeBeforeUpdate)&&Pt(Ye,ae,J,be),$n(y,!0);const Ze=oa(y),Dt=y.subTree;y.subTree=Ze,h(Dt,Ze,d(Dt.el),it(Dt),y,U,V),J.el=Ze.el,ge===null&&Wd(y,Ze.el),se&&He(se,U),(Ye=J.props&&J.props.onVnodeUpdated)&&He(()=>Pt(Ye,ae,J,be),U)}else{let J;const{el:ee,props:se}=x,{bm:ae,m:be,parent:ge,root:Ye,type:Ze}=y,Dt=Vr(x);$n(y,!1),ae&&xs(ae),!Dt&&(J=se&&se.onVnodeBeforeMount)&&Pt(J,ge,x),$n(y,!0);{Ye.ce&&Ye.ce._hasShadowRoot()&&Ye.ce._injectChildStyle(Ze);const Ot=y.subTree=oa(y);h(null,Ot,R,H,y,U,V),x.el=Ot.el}if(be&&He(be,U),!Dt&&(J=se&&se.onVnodeMounted)){const Ot=x;He(()=>Pt(J,ge,Ot),U)}(x.shapeFlag&256||ge&&Vr(ge.vnode)&&ge.vnode.shapeFlag&256)&&y.a&&He(y.a,U),y.isMounted=!0,x=R=H=null}};y.scope.on();const W=y.effect=new kc(z);y.scope.off();const q=y.update=W.run.bind(W),te=y.job=W.runIfDirty.bind(W);te.i=y,te.id=y.uid,W.scheduler=()=>wo(te),$n(y,!0),q()},S=(y,x,R)=>{x.component=y;const H=y.vnode.props;y.vnode=x,y.next=null,Gd(y,x.props,H,R),Xd(y,x.children,R),fn(),jo(y),pn()},L=(y,x,R,H,U,V,j,z,W=!1)=>{const q=y&&y.children,te=y?y.shapeFlag:0,J=x.children,{patchFlag:ee,shapeFlag:se}=x;if(ee>0){if(ee&128){ne(q,J,R,H,U,V,j,z,W);return}else if(ee&256){Z(q,J,R,H,U,V,j,z,W);return}}se&8?(te&16&&wt(q,U,V),J!==q&&u(R,J)):te&16?se&16?ne(q,J,R,H,U,V,j,z,W):wt(q,U,V,!0):(te&8&&u(R,""),se&16&&_(J,R,H,U,V,j,z,W))},Z=(y,x,R,H,U,V,j,z,W)=>{y=y||ur,x=x||ur;const q=y.length,te=x.length,J=Math.min(q,te);let ee;for(ee=0;ee<J;ee++){const se=x[ee]=W?Qt(x[ee]):Ft(x[ee]);h(y[ee],se,R,null,U,V,j,z,W)}q>te?wt(y,U,V,!0,!1,J):_(x,R,H,U,V,j,z,W,J)},ne=(y,x,R,H,U,V,j,z,W)=>{let q=0;const te=x.length;let J=y.length-1,ee=te-1;for(;q<=J&&q<=ee;){const se=y[q],ae=x[q]=W?Qt(x[q]):Ft(x[q]);if(Or(se,ae))h(se,ae,R,null,U,V,j,z,W);else break;q++}for(;q<=J&&q<=ee;){const se=y[J],ae=x[ee]=W?Qt(x[ee]):Ft(x[ee]);if(Or(se,ae))h(se,ae,R,null,U,V,j,z,W);else break;J--,ee--}if(q>J){if(q<=ee){const se=ee+1,ae=se<te?x[se].el:H;for(;q<=ee;)h(null,x[q]=W?Qt(x[q]):Ft(x[q]),R,ae,U,V,j,z,W),q++}}else if(q>ee)for(;q<=J;)pe(y[q],U,V,!0),q++;else{const se=q,ae=q,be=new Map;for(q=ae;q<=ee;q++){const ot=x[q]=W?Qt(x[q]):Ft(x[q]);ot.key!=null&&be.set(ot.key,q)}let ge,Ye=0;const Ze=ee-ae+1;let Dt=!1,Ot=0;const Ir=new Array(Ze);for(q=0;q<Ze;q++)Ir[q]=0;for(q=se;q<=J;q++){const ot=y[q];if(Ye>=Ze){pe(ot,U,V,!0);continue}let Bt;if(ot.key!=null)Bt=be.get(ot.key);else for(ge=ae;ge<=ee;ge++)if(Ir[ge-ae]===0&&Or(ot,x[ge])){Bt=ge;break}Bt===void 0?pe(ot,U,V,!0):(Ir[Bt-ae]=q+1,Bt>=Ot?Ot=Bt:Dt=!0,h(ot,x[Bt],R,null,U,V,j,z,W),Ye++)}const Mo=Dt?ef(Ir):ur;for(ge=Mo.length-1,q=Ze-1;q>=0;q--){const ot=ae+q,Bt=x[ot],Fo=x[ot+1],Ho=ot+1<te?Fo.el||ul(Fo):H;Ir[q]===0?h(null,Bt,R,Ho,U,V,j,z,W):Dt&&(ge<0||q!==Mo[ge]?ce(Bt,R,Ho,2):ge--)}}},ce=(y,x,R,H,U=null)=>{const{el:V,type:j,transition:z,children:W,shapeFlag:q}=y;if(q&6){ce(y.component.subTree,x,R,H);return}if(q&128){y.suspense.move(x,R,H);return}if(q&64){j.move(y,x,R,pt);return}if(j===ct){r(V,x,R);for(let J=0;J<W.length;J++)ce(W[J],x,R,H);r(y.anchor,x,R);return}if(j===Es){k(y,x,R);return}if(H!==2&&q&1&&z)if(H===0)z.beforeEnter(V),r(V,x,R),He(()=>z.enter(V),U);else{const{leave:J,delayLeave:ee,afterLeave:se}=z,ae=()=>{y.ctx.isUnmounted?s(V):r(V,x,R)},be=()=>{V._isLeaving&&V[pd](!0),J(V,()=>{ae(),se&&se()})};ee?ee(V,ae,be):be()}else r(V,x,R)},pe=(y,x,R,H=!1,U=!1)=>{const{type:V,props:j,ref:z,children:W,dynamicChildren:q,shapeFlag:te,patchFlag:J,dirs:ee,cacheIndex:se}=y;if(J===-2&&(U=!1),z!=null&&(fn(),Hr(z,null,R,y,!0),pn()),se!=null&&(x.renderCache[se]=void 0),te&256){x.ctx.deactivate(y);return}const ae=te&1&&ee,be=!Vr(y);let ge;if(be&&(ge=j&&j.onVnodeBeforeUnmount)&&Pt(ge,x,y),te&6)bn(y.component,R,H);else{if(te&128){y.suspense.unmount(R,H);return}ae&&Rn(y,null,x,"beforeUnmount"),te&64?y.type.remove(y,x,R,pt,H):q&&!q.hasOnce&&(V!==ct||J>0&&J&64)?wt(q,x,R,!1,!0):(V===ct&&J&384||!U&&te&16)&&wt(W,x,R),H&&st(y)}(be&&(ge=j&&j.onVnodeUnmounted)||ae)&&He(()=>{ge&&Pt(ge,x,y),ae&&Rn(y,null,x,"unmounted")},R)},st=y=>{const{type:x,el:R,anchor:H,transition:U}=y;if(x===ct){ze(R,H);return}if(x===Es){f(y);return}const V=()=>{s(R),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(y.shapeFlag&1&&U&&!U.persisted){const{leave:j,delayLeave:z}=U,W=()=>j(R,V);z?z(y.el,V,W):W()}else V()},ze=(y,x)=>{let R;for(;y!==x;)R=w(y),s(y),y=R;s(x)},bn=(y,x,R)=>{const{bum:H,scope:U,job:V,subTree:j,um:z,m:W,a:q}=y;la(W),la(q),H&&xs(H),U.stop(),V&&(V.flags|=8,pe(j,y,x,R)),z&&He(z,x),He(()=>{y.isUnmounted=!0},x)},wt=(y,x,R,H=!1,U=!1,V=0)=>{for(let j=V;j<y.length;j++)pe(y[j],x,R,H,U)},it=y=>{if(y.shapeFlag&6)return it(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const x=w(y.anchor||y.el),R=x&&x[Gc];return R?w(R):x};let Pn=!1;const It=(y,x,R)=>{let H;y==null?x._vnode&&(pe(x._vnode,null,null,!0),H=x._vnode.component):h(x._vnode||null,y,x,null,null,null,R),x._vnode=y,Pn||(Pn=!0,jo(H),Hc(),Pn=!1)},pt={p:h,um:pe,m:ce,r:st,mt:K,mc:_,pc:L,pbc:I,n:it,o:t};return{render:It,hydrate:void 0,createApp:Nd(It)}}function ki({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $n({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ao(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Qt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ao(o,a)),a.type===oi&&(a.patchFlag===-1&&(a=s[i]=Qt(a)),a.el=o.el),a.type===Dn&&!a.el&&(a.el=o.el)}}function ef(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ll(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ll(e)}function la(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ul(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?ul(e.subTree):null}const dl=t=>t.__isSuspense;function tf(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):sd(t)}const ct=Symbol.for("v-fgt"),oi=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),Es=Symbol.for("v-stc"),Wr=[];let ut=null;function ve(t=!1){Wr.push(ut=t?null:[])}function nf(){Wr.pop(),ut=Wr[Wr.length-1]||null}let Zr=1;function ua(t,e=!1){Zr+=t,t<0&&ut&&e&&(ut.hasOnce=!0)}function fl(t){return t.dynamicChildren=Zr>0?ut||ur:null,nf(),Zr>0&&ut&&ut.push(t),t}function ke(t,e,n,r,s,i){return fl(Y(t,e,n,r,s,i,!0))}function pl(t,e,n,r,s){return fl(Le(t,e,n,r,s,!0))}function gl(t){return t?t.__v_isVNode===!0:!1}function Or(t,e){return t.type===e.type&&t.key===e.key}const ml=({key:t})=>t??null,Ss=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Se(t)||Ee(t)||ie(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function Y(t,e=null,n=null,r=0,s=null,i=t===ct?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ml(e),ref:e&&Ss(e),scopeId:qc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return a?(To(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Se(n)?8:16),Zr>0&&!o&&ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ut.push(c),c}const Le=rf;function rf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Jc)&&(t=Dn),gl(t)){const a=wr(t,e,!0);return n&&To(a,n),Zr>0&&!i&&ut&&(a.shapeFlag&6?ut[ut.indexOf(t)]=a:ut.push(a)),a.patchFlag=-2,a}if(mf(t)&&(t=t.__vccOpts),e){e=sf(e);let{class:a,style:c}=e;a&&!Se(a)&&(e.class=Ct(a)),me(c)&&(ri(c)&&!re(c)&&(c=Ue({},c)),e.style=ei(c))}const o=Se(t)?1:dl(t)?128:dd(t)?64:me(t)?4:ie(t)?2:0;return Y(t,e,n,r,s,o,i,!0)}function sf(t){return t?ri(t)||rl(t)?Ue({},t):t:null}function wr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?of(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ml(l),ref:e&&e.ref?n&&i?re(i)?i.concat(Ss(e)):[i,Ss(e)]:Ss(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wr(t.ssContent),ssFallback:t.ssFallback&&wr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&vo(u,c.clone(u)),u}function zr(t=" ",e=0){return Le(oi,null,t,e)}function Hh(t,e){const n=Le(Es,null,t);return n.staticCount=e,n}function As(t="",e=!1){return e?(ve(),pl(Dn,null,t)):Le(Dn,null,t)}function Ft(t){return t==null||typeof t=="boolean"?Le(Dn):re(t)?Le(ct,null,t.slice()):gl(t)?Qt(t):Le(oi,null,String(t))}function Qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wr(t)}function To(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),To(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!rl(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[zr(e)]):n=8);t.children=e,t.shapeFlag|=n}function of(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ct([e.class,r.class]));else if(s==="style")e.style=ei([e.style,r.style]);else if(Ks(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Pt(t,e,n,r=null){Kt(t,e,7,[n,r])}const af=Zc();let cf=0;function lf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||af,i={uid:cf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:il(r,s),emitsOptions:Qc(r,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:r.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Md.bind(null,i),t.ce&&t.ce(i),i}let $e=null;const hl=()=>$e||lt;let Fs,Wi;{const t=Qs(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Fs=e("__VUE_INSTANCE_SETTERS__",n=>$e=n),Wi=e("__VUE_SSR_SETTERS__",n=>vr=n)}const cs=t=>{const e=$e;return Fs(t),t.scope.on(),()=>{t.scope.off(),Fs(e)}},da=()=>{$e&&$e.scope.off(),Fs(null)};function yl(t){return t.vnode.shapeFlag&4}let vr=!1;function uf(t,e=!1,n=!1){e&&Wi(e);const{props:r,children:s}=t.vnode,i=yl(t);zd(t,r,i,e),Jd(t,s,n||e);const o=i?df(t,e):void 0;return e&&Wi(!1),o}function df(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Dd);const{setup:r}=n;if(r){fn();const s=t.setupContext=r.length>1?pf(t):null,i=cs(t),o=os(r,t,0,[t.props,s]),a=gc(o);if(pn(),i(),(a||t.sp)&&!Vr(t)&&_o(t),a){if(o.then(da,da),e)return o.then(c=>{fa(t,c)}).catch(c=>{as(c,t,0)});t.asyncDep=o}else fa(t,o)}else bl(t)}function fa(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=Uc(e)),bl(t)}function bl(t,e,n){const r=t.type;t.render||(t.render=r.render||Wt);{const s=cs(t);fn();try{Od(t)}finally{pn(),s()}}}const ff={get(t,e){return qe(t,"get",""),t[e]}};function pf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ff),slots:t.slots,emit:t.emit,expose:e}}function ai(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Uc(yo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qr)return qr[n](t)},has(e,n){return n in e||n in qr}})):t.proxy}function gf(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function mf(t){return ie(t)&&"__vccOpts"in t}const O=(t,e)=>Qu(t,e,vr),hf="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zi;const pa=typeof window<"u"&&window.trustedTypes;if(pa)try{zi=pa.createPolicy("vue",{createHTML:t=>t})}catch{}const wl=zi?t=>zi.createHTML(t):t=>t,yf="http://www.w3.org/2000/svg",bf="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,ga=Xt&&Xt.createElement("template"),wf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Xt.createElementNS(yf,t):e==="mathml"?Xt.createElementNS(bf,t):n?Xt.createElement(t,{is:n}):Xt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ga.innerHTML=wl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=ga.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vf=Symbol("_vtc");function _f(t,e,n){const r=t[vf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Hs=Symbol("_vod"),vl=Symbol("_vsh"),Vh={name:"show",beforeMount(t,{value:e},{transition:n}){t[Hs]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Br(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Br(t,!0),r.enter(t)):r.leave(t,()=>{Br(t,!1)}):Br(t,e))},beforeUnmount(t,{value:e}){Br(t,e)}};function Br(t,e){t.style.display=e?t[Hs]:"none",t[vl]=!e}const xf=Symbol(""),Cf=/(?:^|;)\s*display\s*:/;function kf(t,e,n){const r=t.style,s=Se(n);let i=!1;if(n&&!s){if(e)if(Se(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ts(r,a,"")}else for(const o in e)n[o]==null&&Ts(r,o,"");for(const o in n)o==="display"&&(i=!0),Ts(r,o,n[o])}else if(s){if(e!==n){const o=r[xf];o&&(n+=";"+o),r.cssText=n,i=Cf.test(n)}}else e&&t.removeAttribute("style");Hs in t&&(t[Hs]=i?r.display:"",t[vl]&&(r.display="none"))}const ma=/\s*!important$/;function Ts(t,e,n){if(re(n))n.forEach(r=>Ts(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ef(t,e);ma.test(n)?t.setProperty(On(r),n.replace(ma,""),"important"):t[r]=n}}const ha=["Webkit","Moz","ms"],Ei={};function Ef(t,e){const n=Ei[e];if(n)return n;let r=bt(e);if(r!=="filter"&&r in t)return Ei[e]=r;r=Ys(r);for(let s=0;s<ha.length;s++){const i=ha[s]+r;if(i in t)return Ei[e]=i}return e}const ya="http://www.w3.org/1999/xlink";function ba(t,e,n,r,s,i=xu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ya,e.slice(6,e.length)):t.setAttributeNS(ya,e,n):n==null||i&&!bc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Gt(n)?String(n):n)}function wa(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?wl(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=bc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function En(t,e,n,r){t.addEventListener(e,n,r)}function Sf(t,e,n,r){t.removeEventListener(e,n,r)}const va=Symbol("_vei");function Af(t,e,n,r,s=null){const i=t[va]||(t[va]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Tf(e);if(r){const l=i[e]=Of(r,s);En(t,a,l,c)}else o&&(Sf(t,a,o,c),i[e]=void 0)}}const _a=/(?:Once|Passive|Capture)$/;function Tf(t){let e;if(_a.test(t)){e={};let r;for(;r=t.match(_a);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):On(t.slice(2)),e]}let Si=0;const If=Promise.resolve(),Df=()=>Si||(If.then(()=>Si=0),Si=Date.now());function Of(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Kt(Bf(r,n.value),e,5,[r])};return n.value=t,n.attached=Df(),n}function Bf(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Pf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?_f(t,r,o):e==="style"?kf(t,n,r):Ks(e)?co(e)||Af(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rf(t,e,r,o))?(wa(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ba(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Se(r))?wa(t,bt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ba(t,e,r,o))};function Rf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xa(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xa(e)&&Se(n)?!1:e in t}const _r=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>xs(e,n):e};function $f(t){t.target.composing=!0}function Ca(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ln=Symbol("_assign");function ka(t,e,n){return e&&(t=t.trim()),n&&(t=Zs(t)),t}const qh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ln]=_r(s);const i=r||s.props&&s.props.type==="number";En(t,e?"change":"input",o=>{o.target.composing||t[ln](ka(t.value,n,i))}),(n||i)&&En(t,"change",()=>{t.value=ka(t.value,n,i)}),e||(En(t,"compositionstart",$f),En(t,"compositionend",Ca),En(t,"change",Ca))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ln]=_r(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Zs(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Wh={created(t,{value:e},n){t.checked=Zn(e,n.props.value),t[ln]=_r(n),En(t,"change",()=>{t[ln](Qr(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[ln]=_r(r),e!==n&&(t.checked=Zn(e,r.props.value))}},zh={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=js(e);En(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Zs(Qr(o)):Qr(o));t[ln](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,bo(()=>{t._assigning=!1})}),t[ln]=_r(r)},mounted(t,{value:e}){Ea(t,e)},beforeUpdate(t,e,n){t[ln]=_r(n)},updated(t,{value:e}){t._assigning||Ea(t,e)}};function Ea(t,e){const n=t.multiple,r=re(e);if(!(n&&!r&&!js(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=Qr(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=ku(e,a)>-1}else o.selected=e.has(a);else if(Zn(Qr(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Qr(t){return"_value"in t?t._value:t.value}const Lf=["ctrl","shift","alt","meta"],Nf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Lf.some(n=>t[`${n}Key`]&&!e.includes(n))},Uf=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Nf[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Mf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Gh=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=On(s.key);if(e.some(o=>o===i||Mf[o]===i))return t(s)})},Ff=Ue({patchProp:Pf},wf);let Sa;function Hf(){return Sa||(Sa=Yd(Ff))}const Vf=(...t)=>{const e=Hf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Wf(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,qf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Wf(t){return Se(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _l;const ci=t=>_l=t,xl=Symbol();function Gi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Gr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Gr||(Gr={}));function zf(){const t=xc(!0),e=t.run(()=>F({}));let n=[],r=[];const s=yo({install(i){ci(s),s._a=i,i.provide(xl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Cl=()=>{};function Aa(t,e,n,r=Cl){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&Cc()&&Eu(s),s}function rr(t,...e){t.forEach(n=>{n(...e)})}const Gf=t=>t(),Ta=Symbol(),Ai=Symbol();function Ki(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Gi(s)&&Gi(r)&&t.hasOwnProperty(n)&&!Ee(r)&&!cn(r)?t[n]=Ki(s,r):t[n]=r}return t}const Kf=Symbol();function jf(t){return!Gi(t)||!Object.prototype.hasOwnProperty.call(t,Kf)}const{assign:_n}=Object;function Jf(t){return!!(Ee(t)&&t.effect)}function Xf(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Ju(n.state.value[t]);return _n(u,i,Object.keys(o||{}).reduce((d,w)=>(d[w]=yo(O(()=>{ci(n);const m=n._s.get(t);return o[w].call(m,m)})),d),{}))}return c=kl(t,l,e,n,r,!0),c}function kl(t,e,n={},r,s,i){let o;const a=_n({actions:{}},n),c={deep:!0};let l,u,d=new Set,w=new Set,m;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={});let h;function E(_){let g;l=u=!1,typeof _=="function"?(_(r.state.value[t]),g={type:Gr.patchFunction,storeId:t,events:m}):(Ki(r.state.value[t],_),g={type:Gr.patchObject,payload:_,storeId:t,events:m});const I=h=Symbol();bo().then(()=>{h===I&&(l=!0)}),u=!0,rr(d,g,r.state.value[t])}const D=i?function(){const{state:g}=n,I=g?g():{};this.$patch(T=>{_n(T,I)})}:Cl;function b(){o.stop(),d.clear(),w.clear(),r._s.delete(t)}const k=(_,g="")=>{if(Ta in _)return _[Ai]=g,_;const I=function(){ci(r);const T=Array.from(arguments),B=new Set,$=new Set;function K(S){B.add(S)}function N(S){$.add(S)}rr(w,{args:T,name:I[Ai],store:p,after:K,onError:N});let P;try{P=_.apply(this&&this.$id===t?this:p,T)}catch(S){throw rr($,S),S}return P instanceof Promise?P.then(S=>(rr(B,S),S)).catch(S=>(rr($,S),Promise.reject(S))):(rr(B,P),P)};return I[Ta]=!0,I[Ai]=g,I},f={_p:r,$id:t,$onAction:Aa.bind(null,w),$patch:E,$reset:D,$subscribe(_,g={}){const I=Aa(d,_,g.detached,()=>T()),T=o.run(()=>Cs(()=>r.state.value[t],B=>{(g.flush==="sync"?u:l)&&_({storeId:t,type:Gr.direct,events:m},B)},_n({},c,g)));return I},$dispose:b},p=ni(f);r._s.set(t,p);const A=(r._a&&r._a.runWithContext||Gf)(()=>r._e.run(()=>(o=xc()).run(()=>e({action:k}))));for(const _ in A){const g=A[_];if(Ee(g)&&!Jf(g)||cn(g))i||(C&&jf(g)&&(Ee(g)?g.value=C[_]:Ki(g,C[_])),r.state.value[t][_]=g);else if(typeof g=="function"){const I=k(g,_);A[_]=I,a.actions[_]=g}}return _n(p,A),_n(ue(p),A),Object.defineProperty(p,"$state",{get:()=>r.state.value[t],set:_=>{E(g=>{_n(g,_)})}}),r._p.forEach(_=>{_n(p,o.run(()=>_({store:p,app:r._a,pinia:r,options:a})))}),C&&i&&n.hydrate&&n.hydrate(p.$state,C),l=!0,u=!0,p}/*! #__NO_SIDE_EFFECTS__ */function Io(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,a){const c=ad();return o=o||(c?Mr(xl,null):null),o&&ci(o),o=_l,o._s.has(t)||(s?kl(t,e,r,o):Xf(t,r,o)),o._s.get(t)}return i.$id=t,i}const xr={1:{title:"Day 1 - 点击计数器",subtitle:"点击计数器/ClickCounter",concepts:["function","increment","uint256","contract"]},2:{title:"Day 2 - 保存名字",subtitle:"保存名字/SaveMyName",concepts:["string","private","memory","view","parameters","returns"]},3:{title:"Day 3 - 投票站",subtitle:"投票站/PollStation",concepts:["array","mapping","push","compound_assignment"]},4:{title:"Day 4 - 拍卖行",subtitle:"拍卖行/AuctionHouse",concepts:["constructor","msg_sender","block_timestamp","require","external","address_type","bool_type"]},5:{title:"Day 5 - 管理员权限",subtitle:"管理员权限/AdminOnly",concepts:["modifier","zero_address","return_statement"]},6:{title:"Day 6 - 以太坊银行",subtitle:"以太坊银行/EtherPiggyBank",concepts:["address_mapping_balance","payable","msg_value","wei_unit","ether_deposit_withdraw"]},7:{title:"Day 7 - 朋友借条",subtitle:"朋友借条/SimpleIOU",concepts:["nested_mapping","address_payable","debt_tracking","internal_transfer","transfer_method","call_method","withdraw_pattern"]},8:{title:"Day 8 - 打赏罐",subtitle:"打赏罐/TipJar",concepts:["modifier_onlyOwner","payable_tip","msg_value_tip","address_balance","call_withdraw","mapping_rates"]},9:{title:"Day 9 - 跨合约调用",subtitle:"跨合约调用/InterContract",concepts:["pure_function","view_function","cross_contract_call","interface_call","low_level_call","modifier_onlyOwner","newton_iteration","contract_composition"]},10:{title:"Day 10 - 健身追踪器",subtitle:"健身追踪器/ActivityTracker",concepts:["struct_definition","array_in_mapping","multiple_mappings","storage_keyword","event_logging","milestone_detection","timestamp_usage","onlyRegistered_modifier"]},11:{title:"Day 11 - 主密钥保险库",subtitle:"合约继承与所有权/MasterkeyVault",concepts:["inheritance","import_statement","constructor","private_visibility","event_logging","indexed_parameter","transfer_ownership","onlyOwner_modifier"]},12:{title:"Day 12 - ERC20 代币标准",subtitle:"ERC20代币/Web3Compass",concepts:["erc20_standard","mapping_nested","event","transfer","approve","allowance","transferFrom"]},13:{title:"Day 13 - MyToken 代币扩展",subtitle:"ERC20进阶/Virtual & Inheritance",concepts:["constructor_mint","zero_address_mint","internal_function","virtual_function"]},14:{title:"Day 14 - 安全存款盒",subtitle:"抽象合约、接口与工厂模式/Abstract, Interface & Factory",concepts:["interface_definition","abstract_contract","inheritance","override_keyword","virtual_function","super_keyword","modifier_combination","factory_pattern","metadata_storage","time_lock"]},15:{title:"Day 15 - Gas优化投票",subtitle:"高效节能投票/GasEfficientVoting",concepts:["compact_datatype","uint8_uint32","bytes32_string","storage_optimization","bit_operation","mapping_storage","mask_check","timestamp_block","event_logging"]},16:{title:"Day 16 - 插件存储系统",subtitle:"动态插件注册与低级别调用/PluginStore",concepts:["struct_definition","mapping_storage","plugin_registration","low_level_call","abi_encoding","staticcall","dynamic_delegation","contract_interop"]},17:{title:"Day 17",subtitle:"可升级合约/UpgradeHub",concepts:["proxy_pattern","delegatecall","storage_layout","upgrade_mechanism","logic_contract","fallback_function","data_persistence","version_control"]},18:{title:"Day 18 - 预言机与参数保险",subtitle:"预言机/OracleContract",concepts:["oracle_interface","eth_usd_oracle","random_generation","purchase_insurance","price_conversion","parametric_payout","cooldown_mechanism","contract_balance"]},19:{title:"Day 19 - 基于签名的活动参与",subtitle:"ECDSA签名验证/SignThis",concepts:["keccak256_hash","ecdsa_signature","signature_rsv","eip191_prefix","ecrecover","require_statement","mapping_storage","msg_sender"]},20:{title:"Day 20 - 重入攻击与防护",subtitle:"重入攻击/ReentrancyAttack",concepts:["reentrancy_attack","fallback_receive","vulnerable_withdraw","deposit_function","checks_effects_interactions","reentrancy_guard","contract_balance","code_comparison"]},21:{title:"Day 21 - NFT数字藏品",subtitle:"ERC721标准/SimpleNFT",concepts:["ierc721_interface","mint_function","token_id_counter","token_uri","balance_of","transfer_from","approve_mechanism","approval_for_all","safe_transfer"]}},Kh=t=>t===1?`//SPDx-License-Identifier:MIT

// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为clickcounter的合约（相当于其他语言中的类）
contract clickcounter {
    // 声明一个无符号256位整数类型的状态变量counter
    // public关键字表示这个变量可以被外部访问，编译器会自动生成getter函数
    uint256 public counter;

    // 定义一个名为click的公共函数
    // public表示任何人都可以调用这个函数
    function click() public {
        // 将counter的值加1（自增操作）
        counter++;
    }
}`:t===2?`// SPDX-License-Identifier:MIT

// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为SaveMyName的合约，用于存储和检索姓名与简介
contract SaveMyName{
     
  // 声明一个字符串类型的私有状态变量name（默认私有）
  string name;
  
  // 声明一个字符串类型的私有状态变量bio（默认私有）
  string bio;

  // 定义一个名为add的公共函数，用于设置姓名和简介
  // memory关键字表示参数数据存储在内存中（临时存储）
  // _name 和 _bio 是函数参数（参数名通常用下划线前缀表示）
  function add (string memory _name, string memory _bio )public {
    // 将传入的_name值赋给状态变量name
    name = _name;
    
    // 将传入的_bio值赋给状态变量bio
    bio = _bio;
  }

  // 定义一个名为retrieve的公共函数，用于获取姓名和简介
  // view关键字表示该函数只读取状态变量，不修改任何状态（不消耗gas）
  // returns声明返回值类型为两个字符串
  function retrieve() public view returns(string memory, string memory){
    // 返回name和bio的值（以元组形式返回多个值）
    return (name,bio);
  }

}`:t===3?`// SPDX-License-Identifier:MIT

// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为PollStation的合约，用于管理投票
contract PollStation{
    // 声明一个公共字符串数组，用于存储候选人姓名
    // public关键字表示外部可以访问，编译器会自动生成getter函数
    string[] public candidateNames;
    
    // 声明一个映射，用于存储每个候选人的得票数
    // 映射类型：键是字符串（候选人姓名），值是uint256（票数）
    mapping(string => uint256) voteCount;

    // 定义一个名为addCandidateNames的公共函数，用于添加候选人
    // memory关键字表示参数数据存储在内存中（临时存储）
    function addCandidateNames(string memory _candidateNames) public{
        // 使用push方法将候选人姓名添加到数组末尾
        candidateNames.push(_candidateNames);
        
        // 初始化该候选人的票数为0
        voteCount[_candidateNames] = 0;
    }

    // 定义一个名为vote的公共函数，用于投票
    function vote(string memory _candidateNames) public{
        // 使用复合赋值运算符+=，将指定候选人的票数加1
        // 等同于：voteCount[_candidateNames] = voteCount[_candidateNames] + 1;
        voteCount[_candidateNames] += 1;
    }

    // 定义一个名为getVoteCount的公共视图函数，用于获取候选人的票数
    // view关键字表示该函数只读取状态变量，不修改任何状态（不消耗gas）
    function getVoteCount(string memory _candidateNames) public view returns (uint256){
        // 返回指定候选人的票数
        return voteCount[_candidateNames];
    }
}`:t===4?`// SPDX-License-Identifier: MIT
// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为AuctionHouse的合约，用于拍卖行功能
contract AuctionHouse {
    // 声明公共地址变量，存储拍卖行的所有者地址
    address public owner;
    
    // 声明公共字符串变量，存储拍卖物品的名称
    string public item;
    
    // 声明公共无符号整数，存储拍卖结束时间戳
    uint public auctionEndTime;
    
    // 声明私有地址变量，存储最高出价者的地址
    // private 表示只能在这个合约内部访问，外部无法直接读取
    address private highestBidder; // 获胜者是私有的，可以通过getWinner函数访问
    
    // 声明私有无符号整数，存储最高出价金额
    uint private highestBid;       // 最高出价是私有的，可以通过getWinner函数访问
    
    // 声明公共布尔变量，标记拍卖是否已结束
    bool public ended;

    // 声明映射，存储每个地址（竞拍者）的出价金额
    // 键是地址类型，值是无符号整数
    mapping(address => uint) public bids;
    
    // 声明地址数组，存储所有参与竞拍的地址
    address[] public bidders;

    // 构造函数：在合约部署时执行一次，用于初始化合约状态
    // 参数：_item是拍卖物品名称，_biddingTime是拍卖持续时间（秒）
    constructor(string memory _item, uint _biddingTime) {
        // 将部署合约的地址（发送者）设置为所有者
        owner = msg.sender;
        
        // 设置拍卖物品名称
        item = _item;
        
        // 设置拍卖结束时间：当前区块时间戳 + 拍卖持续时间
        // block.timestamp 是当前区块的时间戳（Unix时间，秒）
        auctionEndTime = block.timestamp + _biddingTime;
    }

    // 允许用户出价的函数
    // external 表示函数只能从合约外部调用（比public更省gas）
    function bid(uint amount) external {
        // require是条件检查函数，如果条件为false则回滚交易并显示错误信息
        // 检查当前时间是否早于拍卖结束时间，确保拍卖未结束
        require(block.timestamp < auctionEndTime, "Auction has already ended.");
        
        // 检查出价金额是否大于0
        require(amount > 0, "Bid amount must be greater than zero.");
        
        // 检查新出价是否高于该竞拍者当前的出价
        require(amount > bids[msg.sender], "New bid must be higher than your current bid.");

        // 如果该竞拍者之前没有出价（出价为0），则将其添加到竞拍者数组
        if (bids[msg.sender] == 0) {
            bidders.push(msg.sender);
        }

        // 更新该竞拍者的出价金额
        bids[msg.sender] = amount;

        // 如果新出价高于当前最高出价，则更新最高出价和最高出价者
        if (amount > highestBid) {
            highestBid = amount;
            highestBidder = msg.sender;
        }
    }

    // 结束拍卖的函数（只能在拍卖时间结束后调用）
    function endAuction() external {
        // 检查当前时间是否已达到或超过拍卖结束时间
        require(block.timestamp >= auctionEndTime, "Auction hasn't ended yet.");
        
        // 检查拍卖是否已经结束（防止重复调用）
        require(!ended, "Auction end already called.");

        // 将ended标记设置为true，表示拍卖已结束
        ended = true;
    }

    // 获取所有竞拍者列表的函数
    function getAllBidders() external view returns (address[] memory) {
        // 返回竞拍者地址数组
        return bidders;
    }

    // 获取拍卖获胜者和其出价的函数（仅在拍卖结束后可调用）
    function getWinner() external view returns (address, uint) {
        // 检查拍卖是否已结束
        require(ended, "Auction has not ended yet.");
        
        // 返回最高出价者的地址和最高出价金额
        return (highestBidder, highestBid);
    }
}`:t===5?`// SPDX-License-Identifier: MIT
// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为AdminOnly的合约，用于管理员权限控制的宝库管理
contract AdminOnly {
    // 状态变量区域
    
    // 声明公共地址变量，存储合约所有者的地址
    address public owner;
    
    // 声明公共无符号整数，存储宝库中的宝藏数量
    uint256 public treasureAmount;
    
    // 声明映射，存储每个地址的提款额度
    // 键是地址，值是该地址允许提取的宝藏数量
    mapping(address => uint256) public withdrawalAllowance;
    
    // 声明映射，记录每个地址是否已经提取过宝藏
    // 键是地址，值是布尔值（true表示已提取，false表示未提取）
    mapping(address => bool) public hasWithdrawn;
    
    // 构造函数：合约部署时执行一次，将部署者设置为所有者
    constructor() {
        owner = msg.sender;
    }
    
    // 修饰符：用于限制只有所有者才能调用某些函数
    // modifier 可以理解为函数的"前置条件检查"
    modifier onlyOwner() {
        // 检查调用者是否为所有者，如果不是则回滚交易并显示错误信息
        require(msg.sender == owner, "Access denied: Only the owner can perform this action");
        
        // _; 表示执行修饰符后的函数体
        // 这是修饰符的语法，表示"通过检查后，继续执行被修饰的函数"
        _;
    }
    
    // 添加宝藏函数：只有所有者可以调用
    // onlyOwner 修饰符确保只有所有者能执行此函数
    function addTreasure(uint256 amount) public onlyOwner {
        // 将指定数量的宝藏添加到宝库中
        treasureAmount += amount;
    }
    
    // 批准提款函数：只有所有者可以调用，用于给用户分配提款额度
    function approveWithdrawal(address recipient, uint256 amount) public onlyOwner {
        // 检查批准的额度是否不超过宝库中现有的宝藏数量
        require(amount <= treasureAmount, "Not enough treasure available");
        
        // 为指定地址设置提款额度
        withdrawalAllowance[recipient] = amount;
    }
    
    
    // 提取宝藏函数：任何人都可以调用，但只有有额度且未提取过的用户才能成功
    function withdrawTreasure(uint256 amount) public {

        // 如果调用者是所有者，允许直接提取任意数量（在宝库范围内）
        if(msg.sender == owner){
            // 检查提取数量是否不超过宝库现有数量
            require(amount <= treasureAmount, "Not enough treasury available for this action.");
            
            // 从宝库中扣除指定数量的宝藏
            treasureAmount-= amount;

            // 直接返回，不执行后面的普通用户提款逻辑
            return;
        }
        
        // 获取调用者的提款额度
        uint256 allowance = withdrawalAllowance[msg.sender];
        
        // 检查用户是否有提款额度（额度必须大于0）
        require(allowance > 0, "You don't have any treasure allowance");
        
        // 检查用户是否已经提取过宝藏（不能重复提取）
        require(!hasWithdrawn[msg.sender], "You have already withdrawn your treasure");
        
        // 检查宝库中是否有足够的宝藏
        require(allowance <= treasureAmount, "Not enough treasure in the chest");
        
        // 检查用户尝试提取的数量是否不超过其允许的额度
        require(allowance >= amount, "Cannot withdraw more than you are allowed");
        
        // 标记该用户已经提取过宝藏
        hasWithdrawn[msg.sender] = true;
        
        // 从宝库中扣除用户额度对应的宝藏数量
        treasureAmount -= allowance;
        
        // 将用户的提款额度清零
        withdrawalAllowance[msg.sender] = 0;
        
    }
    
    // 重置提款状态函数：只有所有者可以调用，用于重置某个用户的提款状态
    function resetWithdrawalStatus(address user) public onlyOwner {
        // 将指定用户的提款状态重置为false（允许再次提取）
        hasWithdrawn[user] = false;
    }
    
    // 转移所有权函数：只有所有者可以调用，用于将合约所有权转移给新所有者
    function transferOwnership(address newOwner) public onlyOwner {
        // 检查新所有者地址是否有效（不能是零地址）
        // address(0) 表示零地址，是一个无效的地址
        require(newOwner != address(0), "Invalid address");
        
        // 将所有者更新为新地址
        owner = newOwner;
    }
    
    // 获取宝藏详情函数：只有所有者可以调用，查看宝库中的宝藏数量
    function getTreasureDetails() public view onlyOwner returns (uint256) {
        // 返回宝库中的宝藏数量
        return treasureAmount;
    }
}`:t===6?`// SPDX-License-Identifier: MIT

// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为EtherPiggyBank的合约，用于以太坊存钱罐银行功能
contract EtherPiggyBank{

    // 状态变量区域
    
    // 声明银行管理员的地址
    // 银行管理员具有特殊权限，可以添加新成员
    address public bankManager;
    
    // 声明地址数组，存储所有已注册的会员地址
    address[] members;
    
    // 声明映射，记录每个地址是否已注册为会员
    // 键是地址，值是布尔值（true表示已注册，false表示未注册）
    mapping(address => bool) public registeredMembers;
    
    // 声明映射，记录每个地址的账户余额
    // 键是地址，值是该地址的余额（以wei为单位）
    mapping(address => uint256) balance;

    // 构造函数：合约部署时执行一次，初始化银行管理员
    constructor(){
        // 将部署合约的地址设置为银行管理员
        bankManager = msg.sender;
        
        // 将银行管理员添加到会员数组中（管理员默认是会员）
        members.push(msg.sender);
    }

    // 修饰符：限制只有银行管理员才能调用某些函数
    modifier onlyBankManager(){
        // 检查调用者是否为银行管理员，如果不是则回滚交易
        require(msg.sender == bankManager, "Only bank manager can perform this action");
        
        // 继续执行被修饰的函数
        _;
    }

    // 修饰符：限制只有已注册的会员才能调用某些函数
    modifier onlyRegisteredMember() {
        // 检查调用者是否为已注册的会员，如果不是则回滚交易
        require(registeredMembers[msg.sender], "Member not registered");
        
        // 继续执行被修饰的函数
        _;
    }
  
    // 添加会员函数：只有银行管理员可以调用，用于添加新会员
    function addMembers(address _member)public onlyBankManager{
        // 检查新会员地址是否有效（不能是零地址）
        require(_member != address(0), "Invalid address");
        
        // 检查是否尝试添加银行管理员本人（管理员已经是会员）
        require(_member != msg.sender, "Bank Manager is already a member");
        
        // 检查该地址是否已经是注册会员
        require(!registeredMembers[_member], "Member already registered");
        
        // 将该地址标记为已注册会员
        registeredMembers[_member] = true;
        
        // 将该地址添加到会员数组中
        members.push(_member);
    }

    // 获取会员列表函数：任何人都可以调用，返回所有会员地址
    function getMembers() public view returns(address[] memory){
        // 返回会员地址数组
        return members;
    }
    
    // 存入以太币函数：只有已注册会员可以调用
    // payable 关键字表示该函数可以接收以太币
    function depositAmountEther() public payable onlyRegisteredMember{  
        // 检查发送的以太币数量是否大于0
        // msg.value 是调用函数时发送的以太币数量（以wei为单位）
        require(msg.value > 0, "Invalid amount");
        
        // 将发送的以太币数量累加到调用者的余额中
        balance[msg.sender] = balance[msg.sender]+msg.value;
   
    }
    
    // 提取金额函数：只有已注册会员可以调用，用于提取余额
    function withdrawAmount(uint256 _amount) public onlyRegisteredMember{
        // 检查提取金额是否大于0
        require(_amount > 0, "Invalid amount");
        
        // 检查调用者的余额是否足够
        require(balance[msg.sender] >= _amount, "Insufficient balance");
        
        // 从调用者的余额中扣除提取的金额
        balance[msg.sender] = balance[msg.sender]-_amount;
   
    }

    // 获取余额函数：任何人都可以调用，查询指定会员的余额
    function getBalance(address _member) public view returns (uint256){
        // 检查查询的地址是否有效
        require(_member != address(0), "Invalid address");
        
        // 返回指定会员的余额
        return balance[_member];
    } 
}`:t===7?`//SPDX-License-Identifier: MIT

// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为SimpleIOU的合约，用于朋友间的借条（IOU）管理
contract SimpleIOU{
    // 声明合约所有者的地址
    address public owner;
    
    // 跟踪已注册的朋友
    // 映射：地址 -> 是否已注册（布尔值）
    mapping(address => bool) public registeredFriends;
    
    // 地址数组：存储所有已注册朋友的地址列表
    address[] public friendList;
    
    // 跟踪每个朋友的余额
    // 映射：地址 -> 余额（以太币数量）
    mapping(address => uint256) public balances;
    
    // 简单的债务跟踪系统
    // 嵌套映射：债务人地址 -> 债权人地址 -> 欠款金额
    // 映射结构：mapping(键1 => mapping(键2 => 值))
    mapping(address => mapping(address => uint256)) public debts; // 债务人 -> 债权人 -> 金额
    
    // 构造函数：合约部署时执行一次，初始化合约
    constructor() {
        // 将部署合约的地址设置为所有者
        owner = msg.sender;
        
        // 将所有者注册为朋友（所有者默认是已注册用户）
        registeredFriends[msg.sender] = true;
        
        // 将所有者添加到朋友列表中
        friendList.push(msg.sender);
    }
    
    // 修饰符：限制只有所有者才能调用某些函数
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    
    // 修饰符：限制只有已注册的朋友才能调用某些函数
    modifier onlyRegistered() {
        require(registeredFriends[msg.sender], "You are not registered");
        _;
    }
    
    // 添加新朋友函数：只有所有者可以调用，用于注册新朋友
    function addFriend(address _friend) public onlyOwner {
        // 检查朋友地址是否有效（不能是零地址）
        require(_friend != address(0), "Invalid address");
        
        // 检查该朋友是否已经注册
        require(!registeredFriends[_friend], "Friend already registered");
        
        // 将该地址标记为已注册朋友
        registeredFriends[_friend] = true;
        
        // 将该地址添加到朋友列表中
        friendList.push(_friend);
    }
    
    // 存款函数：将以太币存入你的钱包余额
    // payable 关键字表示该函数可以接收以太币
    function depositIntoWallet() public payable onlyRegistered {
        // 检查是否发送了以太币
        require(msg.value > 0, "Must send ETH");
        
        // 将发送的以太币数量累加到调用者的余额中
        balances[msg.sender] += msg.value;
    }
    
    // 记录债务函数：记录某人欠你钱
    function recordDebt(address _debtor, uint256 _amount) public onlyRegistered {
        // 检查债务人地址是否有效
        require(_debtor != address(0), "Invalid address");
        
        // 检查债务人是否已注册
        require(registeredFriends[_debtor], "Address not registered");
        
        // 检查金额是否大于0
        require(_amount > 0, "Amount must be greater than 0");
        
        // 记录债务：在嵌套映射中增加债务金额
        // 结构：debts[债务人][债权人] += 金额
        debts[_debtor][msg.sender] += _amount;
    }
    
    // 使用内部余额转账偿还债务
    function payFromWallet(address _creditor, uint256 _amount) public onlyRegistered {
        // 检查债权人地址是否有效
        require(_creditor != address(0), "Invalid address");
        
        // 检查债权人是否已注册
        require(registeredFriends[_creditor], "Creditor not registered");
        
        // 检查金额是否大于0
        require(_amount > 0, "Amount must be greater than 0");
        
        // 检查债务金额是否足够
        require(debts[msg.sender][_creditor] >= _amount, "Debt amount incorrect");
        
        // 检查余额是否足够
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        
        // 更新余额和债务
        // 从债务人的余额中扣除金额
        balances[msg.sender] -= _amount;
        
        // 将金额添加到债权人的余额中
        balances[_creditor] += _amount;
        
        // 从债务记录中减少债务金额
        debts[msg.sender][_creditor] -= _amount;
    }
    
    // 直接转账方法：使用 transfer() 方法进行以太币转账
    function transferEther(address payable _to, uint256 _amount) public onlyRegistered {
        // 检查接收者地址是否有效
        require(_to != address(0), "Invalid address");
        
        // 检查接收者是否已注册
        require(registeredFriends[_to], "Recipient not registered");
        
        // 检查余额是否足够
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        
        // 从发送者的余额中扣除金额
        balances[msg.sender] -= _amount;
        
        // 使用 transfer() 方法将以太币转账给接收者
        // transfer() 是一个安全的转账方法，会自动转发2300 gas
        _to.transfer(_amount);
        
        // 将金额添加到接收者的余额中
        balances[_to]+=_amount;
    }
    
    // 替代转账方法：使用 call() 方法进行以太币转账
    function transferEtherViaCall(address payable _to, uint256 _amount) public onlyRegistered {
        // 检查接收者地址是否有效
        require(_to != address(0), "Invalid address");
        
        // 检查接收者是否已注册
        require(registeredFriends[_to], "Recipient not registered");
        
        // 检查余额是否足够
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        
        // 从发送者的余额中扣除金额
        balances[msg.sender] -= _amount;
        
        // 使用 call() 方法进行低级调用
        // call() 方法更灵活，可以设置 gas 限制
        // 返回值：success (bool) 表示调用是否成功
        // 第二个返回值是返回数据（这里不需要，用 _ 忽略）
        (bool success, ) = _to.call{value: _amount}("");
        
        // 将金额添加到接收者的余额中
        balances[_to]+=_amount;
        
        // 检查转账是否成功
        require(success, "Transfer failed");
    }
    
    // 提取函数：提取你的余额到外部钱包
    function withdraw(uint256 _amount) public onlyRegistered {
        // 检查余额是否足够
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        
        // 从余额中扣除金额
        balances[msg.sender] -= _amount;
        
        // 使用 call() 方法将以太币转回给调用者
        // payable(msg.sender) 将地址转换为可支付地址
        (bool success, ) = payable(msg.sender).call{value: _amount}("");
        
        // 检查提取是否成功
        require(success, "Withdrawal failed");
    }
    
    // 查询余额函数：查看你的余额
    function checkBalance() public view onlyRegistered returns (uint256) {
        // 返回调用者的余额
        return balances[msg.sender];
    }
}`:t===8?`//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TipJar {
    // 合约的拥有者（管理员）地址
    address public owner;
    
    // 记录收到的打赏总金额
    uint256 public totalTipsReceived;
    
    // 汇率映射表：记录法币（如USD）到ETH的汇率
    mapping(string => uint256) public conversionRates;

    // 记录每个地址（人）打赏的金额
    mapping(address => uint256) public tipPerPerson;
    
    // 当前支持的代币/货币列表
    string[] public supportedCurrencies;
    
    // 记录每种货币收到的打赏总数
    mapping(string => uint256) public tipsPerCurrency;
    
    // 构造函数：初始化所有者和预设汇率
    constructor() {
        owner = msg.sender;
        addCurrency("USD", 5 * 10**14);  // 1 USD = 0.0005 ETH
        addCurrency("EUR", 6 * 10**14);
        addCurrency("JPY", 4 * 10**12);
        addCurrency("INR", 7 * 10**12);
    }
    
    // 自定义修饰符：限制只有管理员才能使用
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    
    // 增加或更新支持的币种以及对等汇率
    function addCurrency(string memory _currencyCode, uint256 _rateToEth) public onlyOwner {
        require(_rateToEth > 0, "Conversion rate must be greater than 0");
        bool currencyExists = false;
        for (uint i = 0; i < supportedCurrencies.length; i++) {
            if (keccak256(bytes(supportedCurrencies[i])) == keccak256(bytes(_currencyCode))) {
                currencyExists = true;
                break;
            }
        }
        if (!currencyExists) {
            supportedCurrencies.push(_currencyCode);
        }
        conversionRates[_currencyCode] = _rateToEth;
    }
    
    // 核心换算模块：计算法币金额对应的 ETH (wei)
    function convertToEth(string memory _currencyCode, uint256 _amount) public view returns (uint256) {
        require(conversionRates[_currencyCode] > 0, "Currency not supported");
        return _amount * conversionRates[_currencyCode];
    }
    
    // 直接发送 ETH 打赏
    function tipInEth() public payable {
        require(msg.value > 0, "Tip amount must be greater than 0");
        tipPerPerson[msg.sender] += msg.value;
        totalTipsReceived += msg.value;
        tipsPerCurrency["ETH"] += msg.value;
    }
    
    // 指定货法币进行打赏
    function tipInCurrency(string memory _currencyCode, uint256 _amount) public payable {
        require(conversionRates[_currencyCode] > 0, "Currency not supported");
        require(_amount > 0, "Amount must be greater than 0");
        
        uint256 ethAmount = convertToEth(_currencyCode, _amount);
        require(msg.value == ethAmount, "Sent ETH doesn't match the converted amount");
        
        tipPerPerson[msg.sender] += msg.value;
        totalTipsReceived += msg.value;
        tipsPerCurrency[_currencyCode] += _amount;
    }

    // 提现函数：管理员提取合约内的全部资金
    function withdrawTips() public onlyOwner {
        uint256 contractBalance = address(this).balance;
        require(contractBalance > 0, "No tips to withdraw");
        
        (bool success, ) = payable(owner).call{value: contractBalance}("");
        require(success, "Transfer failed");
        
        totalTipsReceived = 0;
    }
  
    // 权限转移
    function transferOwnership(address _newOwner) public onlyOwner {
        require(_newOwner != address(0), "Invalid address");
        owner = _newOwner;
    }

    function getSupportedCurrencies() public view returns (string[] memory) {
        return supportedCurrencies;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}`:t===9?`// ==================== 文件 1: day9-Calculator.sol ====================

//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./day9-ScientificCalculator.sol";

contract Calculator{

    address public owner; // 当前合约的创建者
    address public scientificCalculatorAddress; // 外部高级科学计算器(ScientificCalculator)合约所在的地址

    constructor(){
        owner = msg.sender; // 赋予创建者这所合约的主人权限
    }

    // 限定操作者必须是 owner 的修饰符
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can do this action");
         _;  // 指代原本应用此修改器的接下来的执行流
    }

    // 让系统知晓高级计算器究竟被部署在哪个地址。只要知道了对方合约的地址，才能对其进行外部通信调用
    function setScientificCalculator(address _address)public onlyOwner{
        scientificCalculatorAddress = _address;
        }

    // 基础的加法，pure的意思是说它是"纯"函数，既不消耗或修改区块链状态，又跟外界毫无联动。这类型的函数不仅执行快速而且不收Gas燃料费(本地查看时)
    function add(uint256 a, uint256 b)public pure returns(uint256){
        uint256 result = a+b;
        return result;
    }

    function subtract(uint256 a, uint256 b)public pure returns(uint256){
        uint256 result = a-b;
        return result;
    }

    function multiply(uint256 a, uint256 b)public pure returns(uint256){
        uint256 result = a*b;
        return result;
    }

    function divide(uint256 a, uint256 b)public pure returns(uint256){
        require(b!= 0, "Cannot divide by zero");
        uint256 result = a/b;
        return result;
    }

    // 计算指数功能：这是一个高级计算功能所以我们利用跨合约互调。这体现了区块链合约的组合式应用（所谓乐高积木）
    function calculatePower(uint256 base, uint256 exponent)public view returns(uint256){

    // 方法一（常规方法）：将外部合约视作对象进行实例对象的创建，然后按接口标准来调用
    ScientificCalculator scientificCalc = ScientificCalculator(scientificCalculatorAddress);

    // external call （对外发起合约调用）
    // 当前合约（Calculator）在背后会去请求被指定地址的（ScientificCalculator）完成这项计算
    uint256 result = scientificCalc.power(base, exponent);

    return result;

}

    // 获取平方运算的操作：这里演示了另外一种更基层的跨合约联调操作手段：底层 call 方法
    function calculateSquareRoot(uint256 number)public returns (uint256){
        require(number >= 0 , "Cannot calculate square root of negative nmber");

        // 使用 abi.encodeWithSignature 来明确编码函数名称和附带的具体传参变量
        // 这个生成的16进制短字符数据就是待发送请求的方法执行代号，(注意函数的签名内不准出现空格：squareRoot(int256))
        bytes memory data = abi.encodeWithSignature("squareRoot(int256)", number);
        
        // 对另外一个以太坊地址使用底层的 .call() 将参数打入进去尝试引动相应的执行功能
        // .call() 会始终返还两个值：调用情况的状态(布尔) 和如果它顺利返回带出的数据字节(returnData)
        (bool success, bytes memory returnData) = scientificCalculatorAddress.call(data);
        require(success, "External call failed"); // 安全编程习惯之一，处理它底层执行没有回弹失败并致使出错的情况
        
        // 最后通过利用 abi.decode 把取回的一串原始数据（returnData）解密成我们需要能阅读懂的具体数字 (uint256类型)
        uint256 result = abi.decode(returnData, (uint256));
        return result;
    }

    
}


// ==================== 文件 2: day9-ScientificCalculator.sol ====================

//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ScientificCalculator{

    // 求基数(base) 的给定指次数 (exponent) 的结果。pure同样表明只是本地的简单输出纯逻辑计算。
    function power(uint256 base, uint256 exponent)public pure returns(uint256){
        if(exponent == 0)return 1; // 零次方均为 1
        else return (base ** exponent); // '**' 在Solidity等价于指数的意思
    }

    // 以牛顿法逼近求取输入数的平方根 （Solidity 因为不具备浮点数运算支持这使这种开箱式求近似正变得常用）
    function squareRoot(int256 number)public pure returns(int256){
        require(number >= 0, "Cannot calculate square root of negative number"); // 数学要求被开方根必须不是负的
        if(number == 0)return 0;

        int256 result = number/2; // 原始预估近似值
        // 为保证它不仅消耗光所有的手续费且死锁(Gas exhausted), 人为限制让逼近只能进行 10 轮
        // 虽然轮次限制代表得不到精确数字，但足够反映逼近的过程
        for(uint256 i = 0; i<10; i++){
            result = (result + number / result)/2; // 牛顿迭代法的基础公约公式
        }

        return result; // 反馈出求取之后的收敛值
    }
}`:t===10?`//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ActivityTracker {
    // 合约所有者地址，用于权限管理
    address public owner;
    
    // 用户资料结构体：存储用户的基本信息
    struct UserProfile {
        string name;        // 用户姓名
        uint256 weight;     // 用户体重
        bool isRegistered;  // 是否已注册标记
    }
    
    // 运动活动结构体：存储单次运动的详细信息
    struct WorkoutActivity {
        string activityType; // 运动类型（如：跑步、游泳、骑行等）
        uint256 duration;    // in seconds / 运动时长（单位：秒）
        uint256 distance;    // in meters / 运动距离（单位：米）
        uint256 timestamp;   // 运动记录时间戳
    }
    
    // 用户地址 => 用户资料的映射，用于存储每个注册用户的基本信息
    mapping(address => UserProfile) public userProfiles;
    
    // 用户地址 => 运动历史数组的映射，存储每个用户的所有运动记录
    mapping(address => WorkoutActivity[]) private workoutHistory;
    
    // 用户地址 => 总运动次数的映射
    mapping(address => uint256) public totalWorkouts;
    
    // 用户地址 => 总运动距离的映射
    mapping(address => uint256) public totalDistance;
    
    // 事件定义：用于记录重要的合约操作，方便前端监听和日志查询
    event UserRegistered(address indexed userAddress, string name, uint256 timestamp);
    event ProfileUpdated(address indexed userAddress, uint256 newWeight, uint256 timestamp);
    event WorkoutLogged(
        address indexed userAddress, 
        string activityType, 
        uint256 duration, 
        uint256 distance, 
        uint256 timestamp
    );
    event MilestoneAchieved(address indexed userAddress, string milestone, uint256 timestamp);
    
    // 构造函数：在合约部署时执行，设置合约部署者为所有者
    constructor() {
        owner = msg.sender;
    }
    
    // 仅限已注册用户修饰器：确保调用函数的用户已经完成注册
    modifier onlyRegistered() {
        require(userProfiles[msg.sender].isRegistered, "User not registered");
        _;
    }
    
    // 用户注册函数：允许新用户注册到系统中
    function registerUser(string memory _name, uint256 _weight) public {
        // 检查用户是否已注册，防止重复注册
        require(!userProfiles[msg.sender].isRegistered, "User already registered");
        
        // 创建新的用户资料并存储
        userProfiles[msg.sender] = UserProfile({
            name: _name,
            weight: _weight,
            isRegistered: true
        });
        
        // 触发用户注册事件
        emit UserRegistered(msg.sender, _name, block.timestamp);
    }
    
    // 更新体重函数：允许已注册用户更新体重，并检测是否达成减重目标
    function updateWeight(uint256 _newWeight) public onlyRegistered {
        // 使用storage关键字获取存储引用，直接修改原数据
        UserProfile storage profile = userProfiles[msg.sender];
        
        // 检查是否达成显著减重目标（减重5%或以上）
        if (_newWeight < profile.weight && (profile.weight - _newWeight) * 100 / profile.weight >= 5) {
            emit MilestoneAchieved(msg.sender, "Weight Goal Reached", block.timestamp);
        }
        
        // 更新体重
        profile.weight = _newWeight;
        
        // 触发资料更新事件
        emit ProfileUpdated(msg.sender, _newWeight, block.timestamp);
    }
    
    // 记录运动函数：允许已注册用户记录新的运动活动
    function logWorkout(
        string memory _activityType,
        uint256 _duration,
        uint256 _distance
    ) public onlyRegistered {
        // 创建新的运动活动记录
        WorkoutActivity memory newWorkout = WorkoutActivity({
            activityType: _activityType,
            duration: _duration,
            distance: _distance,
            timestamp: block.timestamp
        });
        
        // 将新记录添加到用户的运动历史中
        workoutHistory[msg.sender].push(newWorkout);
        
        // 更新用户的统计数据
        totalWorkouts[msg.sender]++;
        totalDistance[msg.sender] += _distance;
        
        // 触发运动记录事件
        emit WorkoutLogged(
            msg.sender,
            _activityType,
            _duration,
            _distance,
            block.timestamp
        );
        
        // 检查运动次数里程碑（10次、50次）
        if (totalWorkouts[msg.sender] == 10) {
            emit MilestoneAchieved(msg.sender, "10 Workouts Completed", block.timestamp);
        } else if (totalWorkouts[msg.sender] == 50) {
            emit MilestoneAchieved(msg.sender, "50 Workouts Completed", block.timestamp);
        }
        
        // 检查距离里程碑（100公里 = 100000米）
        if (totalDistance[msg.sender] >= 100000 && totalDistance[msg.sender] - _distance < 100000) {
            emit MilestoneAchieved(msg.sender, "100K Total Distance", block.timestamp);
        }
    }
    
    // 获取用户运动次数函数：返回当前登录用户的运动记录数量
    function getUserWorkoutCount() public view onlyRegistered returns (uint256) {
        return workoutHistory[msg.sender].length;
    }
}`:t===11?`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// ==================== 父合约：Ownable.sol ====================
// 基础所有权管理合约，可被其他合约继承复用

contract Ownable {
    // private 可见性：只能在当前合约内部访问
    address private owner;
    
    // 构造函数：合约部署时执行一次，初始化所有者
    constructor() {
        owner = msg.sender;
    }
    
    // 事件日志：indexed 参数可以被过滤查询
    event OwnershipTransferred(
        address indexed previousOwner,  // indexed 允许按地址搜索事件
        address indexed newOwner
    );
    
    // 修饰符：限制只有所有者才能调用某些函数
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;  // 继续执行被修饰的函数
    }
    
    // 查看当前所有者
    function ownerAddress() public view returns (address) {
        return owner;
    }
    
    // 转移所有权（只有所有者可以调用）
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid address: cannot be zero address");
        address oldOwner = owner;
        owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

// ==================== 子合约：VaultMaster.sol ====================
// 资金保险库合约，继承 Ownable 的所有权管理功能

import "./Ownable.sol";

contract VaultMaster is Ownable {
    // 合约余额（实际上使用 address(this).balance）
    
    // 事件：记录成功的存款
    event DepositSuccessful(
        address indexed depositor,
        uint256 amount,
        uint256 timestamp
    );
    
    // 事件：记录成功的提款
    event WithdrawSuccessful(
        address indexed recipient,
        uint256 amount,
        uint256 timestamp
    );
    
    // 存款函数：任何人都可以存入 ETH
    function deposit() public payable {
        require(msg.value > 0, "Must send ETH to deposit");
        emit DepositSuccessful(msg.sender, msg.value, block.timestamp);
    }
    
    // 提款函数：只有所有者可以提取（继承的 onlyOwner 修饰符）
    function withdraw(address payable recipient, uint256 amount) public onlyOwner {
        require(recipient != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be greater than 0");
        require(address(this).balance >= amount, "Insufficient contract balance");
        
        // 转账到指定地址
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Transfer failed");
        
        emit WithdrawSuccessful(recipient, amount, block.timestamp);
    }
    
    // 查询合约余额
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}`:t===12?`// SPDX-License-Identifier: MIT
// SPDX许可证标识符，指定代码使用MIT开源许可证
pragma solidity ^0.8.20;
// 指定Solidity编译器版本为0.8.20及以上，但小于0.9.0

// 简化版ERC20代币合约：ERC20是以太坊上最常用的代币标准，功能包括转账、授权、查询余额等
contract SimpleERC20 {
    // 代币基本信息
    string public name = "Web3 Compass";  // 代币全称
    string public symbol = "COM";          // 代币符号（交易时使用）
    uint8 public decimals = 18;            // 小数位数（18是标准值，1代币 = 10^18最小单位）
    uint256 public totalSupply;            // 代币总供应量

    // 余额映射：记录每个地址持有的代币数量，address => uint256: 地址 => 余额
    mapping(address => uint256) public balanceOf;
    // 授权额度映射（双重映射）：记录每个地址授权给其他地址可以使用的代币数量
    // address => address => uint256: 代币持有者 => 被授权者 => 授权额度
    // 例如：allowance[A][B] = 100 表示A授权B可以使用A的100个代币
    mapping(address => mapping(address => uint256)) public allowance;

    // 转账事件：当代币从一个地址转移到另一个地址时触发
    event Transfer(address indexed from, address indexed to, uint256 value);
    // 授权事件：当代币持有者授权他人使用自己的代币时触发
    event Approval(address indexed owner, address indexed spender, uint256 value);

    // 构造函数：在合约部署时创建所有代币并分配给部署者
    // _initialSupply 是用户输入的值（不含小数位）
    constructor(uint256 _initialSupply) {
        // 计算实际总供应量：用户输入值 × 10^decimals
        // 例如：输入1000，decimals为18，则实际创建 1000 * 10^18 个最小单位
        totalSupply = _initialSupply * (10 ** uint256(decimals));
        // 将所有代币分配给合约部署者
        balanceOf[msg.sender] = totalSupply;
        // 触发转账事件，表示从0地址（代表铸币）转账给部署者
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    // 转账函数：调用者将自己的代币转给他人
    function transfer(address _to, uint256 _value) public returns (bool) {
        // 检查调用者余额是否足够
        require(balanceOf[msg.sender] >= _value, "Not enough balance");
        // 执行转账（内部函数）
        _transfer(msg.sender, _to, _value);
        return true;
    }

    // 授权函数：允许_spender从调用者账户中转走_value数量的代币
    function approve(address _spender, uint256 _value) public returns (bool) {
        // 设置授权额度
        allowance[msg.sender][_spender] = _value;
        // 触发授权事件
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    // 代转账函数（从他人账户转账）：调用者使用被授权的额度从_from地址向_to地址转账
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        // 检查_from地址的余额是否足够
        require(balanceOf[_from] >= _value, "Not enough balance");
        // 检查调用者被授权的额度是否足够
        require(allowance[_from][msg.sender] >= _value, "Allowance too low");

        // 减少授权额度（已使用的部分）
        allowance[_from][msg.sender] -= _value;
        // 执行转账
        _transfer(_from, _to, _value);
        return true;
    }

    // 内部转账函数：internal修饰符表示只能在合约内部调用，这是实际执行转账逻辑的核心函数
    function _transfer(address _from, address _to, uint256 _value) internal {
        // 检查收款地址是否有效（不能是零地址）
        require(_to != address(0), "Invalid address");
        // 减少转出地址的余额
        balanceOf[_from] -= _value;
        // 增加转入地址的余额
        balanceOf[_to] += _value;
        // 触发转账事件
        emit Transfer(_from, _to, _value);
    }
}`:t===13?`//SPDX-License-Identifier: MIT
// SPDX许可证标识符，指定代码使用MIT开源许可证

pragma solidity ^0.8.0;
// 指定Solidity编译器版本为0.8.0或更高，但不包括1.0.0

contract MyToken{
// 定义一个名为MyToken的合约，这是一个ERC20代币合约

    string public name = "Web3 Compass";
    // 代币名称，公开可读
    string public symbol = "WBT";
    // 代币符号（简称），公开可读
    uint8 public decimals = 18;
    // 代币小数位数，ERC20标准通常为18位，公开可读
    uint256 public totalSupply;
    // 代币总供应量，公开可读

    mapping(address => uint256) public balanceOf;
    // 地址到余额的映射，记录每个地址持有的代币数量
    mapping(address => mapping (address  => uint256)) public allowance;
    // 嵌套映射，记录授权额度：allowance[所有者][被授权者] = 授权金额

    event Transfer(address indexed from, address indexed to, uint256 value);
    // 转账事件，当代币被转移时触发，indexed表示可以按该字段搜索
    event Approval(address indexed owner, address indexed spender, uint256 value);
    // 授权事件，当所有者授权 spender 使用代币时触发

    constructor(uint256 _initialSupply){
    // 构造函数，合约部署时执行一次，传入初始供应量参数
        totalSupply = _initialSupply * (10 ** decimals);
        // 计算实际总供应量 = 初始值 × 10^18（考虑小数位）
        balanceOf[msg.sender] = totalSupply;
        // 将所有代币分配给合约部署者（创建者）
        emit Transfer(address(0), msg.sender, _initialSupply);
        // 触发转账事件，from地址为0表示这是新铸造的代币
    } 

    function _transfer(address _from, address _to, uint256 _value)internal virtual{
    // 内部转账函数，只能在合约内部调用，virtual表示可被重写
        require(_to != address(0), "Cannot transfer to the zero address");
        // 检查：不能转账到零地址（防止代币丢失）
        balanceOf[_from]-= _value;
        // 从发送者余额中扣除转账金额
        balanceOf[_to] += _value;
        // 向接收者余额中增加转账金额
        emit Transfer(_from, _to, _value);
        // 触发转账事件，记录这笔转账
    }
     function transfer(address _to, uint256 _value)public virtual returns (bool success){ 
     // 公共转账函数，允许用户直接转账自己的代币
        require(balanceOf[msg.sender] >= _value , "Not enough balance");
        // 检查：发送者余额必须足够
        _transfer(msg.sender, _to, _value);
        // 调用内部转账函数执行转账
        return true;
        // 返回true表示转账成功
    
    }

    function transferFrom(address _from, address _to, uint256 _value)public virtual returns(bool){
    // 代转账函数，用于被授权者代替所有者转账（如交易所、DApp等场景）
        require(balanceOf[_from] >= _value, "Not enough balance");
        // 检查：所有者余额必须足够
        require(allowance[_from][msg.sender]>= _value, "Not enough allowence");
        // 检查：调用者的授权额度必须足够
        allowance[_from][msg.sender]-= _value;
        // 减少调用者的授权额度
        _transfer(_from, _to, _value);
        // 执行转账
        return true;
        // 返回true表示转账成功

    }

    function approve(address _spender, uint256 _value)public returns(bool){
    // 授权函数，允许_spender使用调用者最多_value数量的代币
        allowance[msg.sender][_spender] = _value;
        // 设置授权额度
        emit Approval(msg.sender, _spender, _value);
        // 触发授权事件
        return true;
        // 返回true表示授权成功

    }
}`:t===14?`// ==================== 文件 1: IDepositBox.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 定义存款盒接口 - 规定所有存款盒必须实现的功能
interface IDepositBox {
    // 存入秘密的函数
    function storeSecret(string calldata secret) external;
    
    // 取出秘密的函数
    function getSecret() external view returns (string memory);
    
    // 转移所有权的函数
    function transferOwnership(address newOwner) external;
    
    // 获取盒子类型的函数
    function getBoxType() external view returns (string memory);
    
    // 获取当前所有者的函数
    function getOwner() external view returns (address);
}

// ==================== 文件 2: BaseDepositBox.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IDepositBox.sol";

// 抽象基础合约 - 实现通用功能，但不能直接部署
abstract contract BaseDepositBox is IDepositBox {
    // 状态变量
    string internal secret;
    address internal owner;
    uint256 internal createdAt;
    
    // 修饰器：只有所有者可以调用
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    // 构造函数
    constructor() {
        owner = msg.sender;
        createdAt = block.timestamp;
    }
    
    // 虚函数：存入秘密（子合约可以重写）
    function storeSecret(string calldata _secret) public virtual onlyOwner {
        secret = _secret;
    }
    
    // 虚函数：取出秘密（子合约可以重写）
    function getSecret() public view virtual onlyOwner returns (string memory) {
        return secret;
    }
    
    // 转移所有权
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "New owner cannot be zero address");
        owner = newOwner;
    }
    
    // 获取当前所有者
    function getOwner() public view returns (address) {
        return owner;
    }
    
    // 纯虚函数：获取盒子类型（必须由子合约实现）
    function getBoxType() public view virtual returns (string memory);
}

// ==================== 文件 3: BasicDepositBox.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BaseDepositBox.sol";

// 基础存款盒 - 简单继承，无额外功能
contract BasicDepositBox is BaseDepositBox {
    // 只继承父合约功能，不添加新功能
    
    function getBoxType() public view override returns (string memory) {
        return "Basic";
    }
}

// ==================== 文件 4: PremiumDepositBox.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BaseDepositBox.sol";

// 高级存款盒 - 增加 metadata 功能
contract PremiumDepositBox is BaseDepositBox {
    // 额外的状态变量
    string private metadata;
    
    // 设置元数据
    function setMetadata(string calldata _metadata) public onlyOwner {
        metadata = _metadata;
    }
    
    // 获取元数据
    function getMetadata() public view onlyOwner returns (string memory) {
        return metadata;
    }
    
    // 重写获取盒子类型
    function getBoxType() public view override returns (string memory) {
        return "Premium";
    }
}

// ==================== 文件 5: TimeLockedDepositBox.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BaseDepositBox.sol";

// 时间锁定存款盒 - 增加时间锁功能
contract TimeLockedDepositBox is BaseDepositBox {
    // 解锁时间戳
    uint256 private unlockTime;
    
    // 修饰器：检查是否已解锁
    modifier timeUnlocked() {
        require(block.timestamp >= unlockTime, "Box is still locked");
        _;
    }
    
    // 构造函数：设置锁定时间
    constructor(uint256 _lockDuration) {
        unlockTime = block.timestamp + _lockDuration;
    }
    
    // 重写存入秘密
    function storeSecret(string calldata _secret) public override onlyOwner {
        secret = _secret;
    }
    
    // 重写取出秘密：需要同时满足 onlyOwner 和 timeUnlocked
    function getSecret() public view override onlyOwner timeUnlocked returns (string memory) {
        return secret;
    }
    
    // 获取解锁时间
    function getUnlockTime() public view returns (uint256) {
        return unlockTime;
    }
    
    // 获取剩余锁定时间
    function getRemainingLockTime() public view returns (uint256) {
        if (block.timestamp >= unlockTime) {
            return 0;
        }
        return unlockTime - block.timestamp;
    }
    
    // 重写获取盒子类型
    function getBoxType() public view override returns (string memory) {
        return "TimeLocked";
    }
}

// ==================== 文件 6: VaultManager.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BasicDepositBox.sol";
import "./PremiumDepositBox.sol";
import "./TimeLockedDepositBox.sol";

// 保险库管理器 - 工厂模式 + 管理功能
contract VaultManager {
    // 存储所有创建的存款盒
    address[] public allBoxes;
    
    // 记录每个用户拥有的存款盒
    mapping(address => address[]) public userBoxes;
    
    // 事件
    event BoxCreated(address indexed owner, address indexed boxAddress, string boxType);
    
    // 创建基础存款盒
    function createBasicBox() public returns (address) {
        BasicDepositBox newBox = new BasicDepositBox();
        address boxAddress = address(newBox);
        
        allBoxes.push(boxAddress);
        userBoxes[msg.sender].push(boxAddress);
        
        emit BoxCreated(msg.sender, boxAddress, "Basic");
        return boxAddress;
    }
    
    // 创建高级存款盒
    function createPremiumBox() public returns (address) {
        PremiumDepositBox newBox = new PremiumDepositBox();
        address boxAddress = address(newBox);
        
        allBoxes.push(boxAddress);
        userBoxes[msg.sender].push(boxAddress);
        
        emit BoxCreated(msg.sender, boxAddress, "Premium");
        return boxAddress;
    }
    
    // 创建时间锁定存款盒
    function createTimeLockedBox(uint256 _lockDuration) public returns (address) {
        TimeLockedDepositBox newBox = new TimeLockedDepositBox(_lockDuration);
        address boxAddress = address(newBox);
        
        allBoxes.push(boxAddress);
        userBoxes[msg.sender].push(boxAddress);
        
        emit BoxCreated(msg.sender, boxAddress, "TimeLocked");
        return boxAddress;
    }
    
    // 获取用户的所有存款盒
    function getMyBoxes() public view returns (address[] memory) {
        return userBoxes[msg.sender];
    }
    
    // 获取所有存款盒数量
    function getTotalBoxes() public view returns (uint256) {
        return allBoxes.length;
    }
    
    // 完成所有权转移（新所有者调用）
    function completeOwnershipTransfer(address boxAddress) public {
        IDepositBox box = IDepositBox(boxAddress);
        require(box.getOwner() == msg.sender, "You are not the new owner");
        
        userBoxes[msg.sender].push(boxAddress);
    }
}`:t===15?` ==================== GasEfficientVoting.sol ====================
\\ SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Gas 优化投票合约
// 展示如何使用紧凑数据类型和位运算优化 Gas 消耗
contract GasEfficientVoting {

    // ==================== 紧凑数据类型优化 ====================

    // 使用 uint8 而非 uint256，节省 31 字节存储空间
    uint8 public proposalCount;  // 最多支持 255 个提案

    // 提案结构体 - 使用紧凑数据类型
    struct Proposal {
        uint32 id;           // 4 字节：提案 ID
        uint32 voteCount;    // 4 字节：投票数
        uint64 startTime;    // 8 字节：开始时间
        uint64 endTime;      // 8 字节：结束时间
        bool executed;       // 1 字节：是否已执行
        bytes32 name;        // 32 字节：固定长度名称（比 string 更省 Gas）
        address creator;     // 20 字节：创建者地址
    }

    // ==================== 映射存储 ====================

    // 提案 ID → 提案详情
    mapping(uint256 => Proposal) public proposals;

    // 地址 → 投票位图（1个 uint256 可存储 256 个提案的投票状态）
    mapping(address => uint256) public voterRegistry;

    // 提案 ID → 投票数（使用 uint32 足够大）
    mapping(uint256 => uint32) public proposalVoterCount;

    // ==================== 事件定义 ====================

    event ProposalCreated(uint256 indexed id, bytes32 name, uint256 endTime);
    event Voted(address indexed voter, uint256 indexed proposalId);
    event ProposalExecuted(uint256 indexed id, uint256 voteCount);

    // ==================== 核心功能 ====================

    // 创建提案
    function createProposal(bytes32 _name, uint256 _durationMinutes) public {
        uint256 proposalId = proposalCount;

        // 创建新提案
        proposals[proposalId] = Proposal({
            id: uint32(proposalId),
            voteCount: 0,
            startTime: uint64(block.timestamp),
            endTime: uint64(block.timestamp + _durationMinutes * 1 minutes),
            executed: false,
            name: _name,
            creator: msg.sender
        });

        proposalCount++;  // uint8 自动溢出检查

        emit ProposalCreated(proposalId, _name, block.timestamp + _durationMinutes * 1 minutes);
    }

    // 投票功能 - 使用位运算记录投票状态
    function vote(uint256 _proposalId) public {
        Proposal storage proposal = proposals[_proposalId];

        // 检查提案是否存在
        require(proposal.creator != address(0), "Proposal does not exist");
        require(!proposal.executed, "Proposal already executed");

        // 检查投票时间窗口
        require(block.timestamp >= proposal.startTime, "Voting not started");
        require(block.timestamp <= proposal.endTime, "Voting ended");

        // ==================== 位运算技巧 ====================

        // 生成掩码：1 左移 proposalId 位
        // 例如：proposalId = 5，mask = 0b100000 (二进制)
        uint256 mask = 1 << _proposalId;

        // 获取当前选民的投票位图
        uint256 voterData = voterRegistry[msg.sender];

        // 掩码检查：使用与运算检查是否已投票
        require((voterData & mask) == 0, "Already voted");

        // 记录投票：使用或运算设置对应位为 1
        voterRegistry[msg.sender] = voterData | mask;

        // 增加投票计数
        proposal.voteCount++;
        proposalVoterCount[_proposalId]++;

        emit Voted(msg.sender, _proposalId);
    }

    // 执行提案
    function executeProposal(uint256 _proposalId) public {
        Proposal storage proposal = proposals[_proposalId];

        // 检查提案是否存在
        require(proposal.creator != address(0), "Proposal does not exist");

        // 检查投票是否已结束
        require(block.timestamp > proposal.endTime, "Voting still in progress");

        // 检查是否已执行
        require(!proposal.executed, "Already executed");

        // 标记为已执行
        proposal.executed = true;

        emit ProposalExecuted(_proposalId, proposal.voteCount);
    }

    // ==================== 查询功能 ====================

    // 检查地址是否对某提案投过票
    function hasVoted(address _voter, uint256 _proposalId) public view returns (bool) {
        uint256 mask = 1 << _proposalId;
        uint256 voterData = voterRegistry[_voter];
        return (voterData & mask) != 0;
    }

    // 获取提案详情
    function getProposal(uint256 _proposalId) public view returns (
        uint32 id,
        bytes32 name,
        uint32 voteCount,
        uint64 startTime,
        uint64 endTime,
        bool executed,
        address creator
    ) {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.creator != address(0), "Proposal does not exist");

        return (
            proposal.id,
            proposal.name,
            proposal.voteCount,
            proposal.startTime,
            proposal.endTime,
            proposal.executed,
            proposal.creator
        );
    }

    // 获取选民的投票位图（用于调试）
    function getVoterBitmap(address _voter) public view returns (uint256) {
        return voterRegistry[_voter];
    }
}

\\ ==================== Gas 优化要点总结 ====================
\\
\\ 1. 紧凑数据类型：
\\    - uint8 (1 字节) 代替 uint256 (32 字节) 存储小范围数字
\\    - uint32 (4 字节) 存储投票数，最大值 42 亿
\\    - uint64 (8 字节) 存储时间戳，支持到公元 294,247 年
\\
\\ 2. 固定长度类型：
\\    - bytes32 (32 字节) 代替 string，避免动态存储开销
\\    - 适合存储固定长度的短文本和哈希值
\\
\\ 3. 位运算优化：
\\    - 1 个 uint256 (32 字节) 存储 256 个布尔值
\\    - 相比 mapping(uint256 => bool)，节省约 40% Gas
\\    - 关键操作：生成掩码(<<)、检查(&)、设置(|)
\\
\\ 4. 存储布局优化：
\\    - 将多个小变量打包到同一存储槽位
\\    - 减少存储读取次数，降低 Gas 消耗
\\
\\ 5. 事件日志：
\\    - 使用 indexed 参数实现链下高效检索
    - 事件不占用状态存储，只消耗少量 Gas`:t===16?`// ==================== PluginStore.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// PluginStore - 插件存储合约
// 这是一个插件系统的核心合约，允许注册和调用各种插件
// 支持玩家资料管理和插件的动态调用
contract PluginStore {

    // ==================== 结构体定义 ====================
    // 玩家资料结构体
    // name: 玩家名称
    // avatar: 玩家头像标识
    struct PlayerProfile {
        string name;
        string avatar;
    }

    // ==================== 映射存储 ====================
    // 存储每个地址的玩家资料
    mapping(address => PlayerProfile) public profiles;

    // 存储已注册的插件
    // key: 插件标识符（字符串）
    // value: 插件合约地址
    mapping(string => address) public plugins;

    // ==================== 玩家资料管理 ====================
    // 设置玩家资料
    function setProfile(string memory _name, string memory _avatar) external {
        profiles[msg.sender] = PlayerProfile(_name, _avatar);
    }

    // 获取玩家资料
    function getProfile(address user) external view returns (string memory, string memory) {
        PlayerProfile memory profile = profiles[user];
        return (profile.name, profile.avatar);
    }

    // ==================== 插件注册 ====================
    // 注册插件
    function registerPlugin(string memory key, address pluginAddress) external {
        plugins[key] = pluginAddress;
    }

    // 获取插件地址
    function getPlugin(string memory key) external view returns (address) {
        return plugins[key];
    }

    // ==================== 低级别调用 (call) ====================
    // 执行插件函数（状态改变）
    function runPlugin(
        string memory key, 
        string memory functionSignature, 
        address user, 
        string memory argument
    ) external {
        // 获取插件地址
        address plugin = plugins[key];
        require(plugin != address(0), "Plugin not registered");

        // ABI编码函数调用数据
        bytes memory data = abi.encodeWithSignature(functionSignature, user, argument);

        // 使用 low-level call 调用插件合约
        (bool success, ) = plugin.call(data);
        require(success, "Plugin execution failed");
    }

    // ==================== 静态调用 (staticcall) ====================
    // 执行插件函数（只读视图）
    function runPluginView(
        string memory key, 
        string memory functionSignature, 
        address user
    ) external view returns (string memory) {
        address plugin = plugins[key];
        require(plugin != address(0), "No plugin found");

        // ABI编码函数调用数据
        bytes memory data = abi.encodeWithSignature(functionSignature, user);

        // 使用 staticcall 调用插件合约（不修改状态）
        (bool success, bytes memory result) = plugin.staticcall(data);
        require(success, "Plugin execution failed");

        // 解码返回数据
        return abi.decode(result, (string));
    }
}

// ==================== WeaponStorePlugin.sol ====================
// 武器商店插件合约
contract WeaponStorePlugin {
    // 存储每个用户当前装备的武器
    mapping(address => string) public equippedWeapon;

    // 设置用户的装备武器
    function setWeapon(address user, string memory weapon) public {
        equippedWeapon[user] = weapon;
    }

    // 获取用户当前装备的武器
    function getWeapon(address user) public view returns (string memory) {
        return equippedWeapon[user];
    }
}

// ==================== AchievementsPlugin.sol ====================
// 成就插件合约
contract AchievementsPlugin {
    // 存储每个用户的最新成就
    mapping(address => string) public latestAchievement;

    // 设置用户的成就
    function setAchievement(address user, string memory achievement) public {
        latestAchievement[user] = achievement;
    }

    // 获取用户的最新成就
    function getAchievement(address user) public view returns (string memory) {
        return latestAchievement[user];
    }
}

// ==================== 使用示例 ====================
// pluginStore.runPlugin("weapon", "setWeapon(address,string)", msg.sender, "Golden Axe");
// 这将调用名为 "weapon" 的插件的 setWeapon 函数，为用户装备 "Golden Axe"

// ==================== 核心概念总结 ====================
//
// 1. 结构体 (struct):
//    - 将多个相关数据组合成自定义类型
//    - PlayerProfile 包含 name 和 avatar
//
// 2. 映射 (mapping):
//    - 键值对存储，O(1) 读写效率
//    - profiles: address => PlayerProfile
//    - plugins: string => address
//
// 3. 低级别调用 (call/staticcall):
//    - call: 可修改状态的动态调用
//    - staticcall: 只读调用，保证不修改状态
//    - 返回 (bool success, bytes result)
//
// 4. ABI编码:
//    - abi.encodeWithSignature: 编码函数调用
//    - abi.decode: 解码返回值
//    - 函数选择器: 函数签名的前4字节(keccak256哈希)
//
// 5. 插件架构:
//    - 核心合约管理插件注册表
//    - 插件合约实现具体功能
//    - 动态委托实现功能扩展`:t===17?`// ==================== day17-SubscriptionStorageLayout.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// SubscriptionStorageLayout - 订阅存储布局合约
// 这是可升级合约架构中的基础合约
// 定义了所有存储变量，确保代理合约和逻辑合约的存储布局一致
// 存储布局的一致性是可升级合约的关键！
contract SubscriptionStorageLayout {

    // 当前逻辑合约地址
    // 代理合约使用此地址进行 delegatecall
    address public logicContract;

    // 合约所有者地址
    // 拥有升级合约等特权操作权限
    address public owner;

    // 订阅信息结构体
    // planId: 订阅计划 ID（如 1=基础版, 2=高级版）
    // expiry: 订阅过期时间戳（秒）
    // paused: 是否处于暂停状态（V2 新增字段）
    struct Subscription {
        uint8 planId;
        uint256 expiry;
        bool paused;
    }

    // 用户地址到订阅信息的映射
    // 存储每个用户的订阅详情
    mapping(address => Subscription) public subscriptions;

    // 计划 ID 到价格的映射
    // 存储每个订阅计划的价格（wei）
    mapping(uint8 => uint256) public planPrices;

    // 计划 ID 到持续时间的映射
    // 存储每个订阅计划的有效期（秒）
    mapping(uint8 => uint256) public planDuration;

    // 安全间隙 - 防止未来升级时存储冲突
    // 这是一个预留的存储空间，用于未来的存储变量
    // 如果不预留，添加新变量可能会与继承合约的存储发生冲突
    // 50 个 uint256 槽位提供了充足的安全缓冲
    uint256[50] private __gap;
}

// ==================== day17-SubscriptionStorage.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 导入存储布局合约
import "./day17-SubscriptionStorageLayout.sol";

// SubscriptionStorage - 订阅存储代理合约
// 这是可升级合约架构中的代理合约（Proxy）
// 负责存储所有数据，并将函数调用委托给逻辑实现合约
// 使用 delegatecall 实现数据和逻辑的分离
contract SubscriptionStorage is SubscriptionStorageLayout {

    // 构造函数
    // _logicContract: 初始逻辑合约地址
    constructor(address _logicContract) {
        owner = msg.sender;           // 设置合约所有者
        logicContract = _logicContract;  // 设置初始逻辑合约
    }

    // 升级逻辑合约（仅合约所有者）
    // _newLogic: 新的逻辑合约地址
    // 这是可升级合约的核心功能
    function upgradeTo(address _newLogic) external {
        require(msg.sender == owner, "Not owner");
        logicContract = _newLogic;
    }

    // 回退函数（fallback）- 处理所有未匹配的函数调用
    // 使用 delegatecall 将调用委托给逻辑合约
    // delegatecall 会在当前合约的存储上下文中执行逻辑合约的代码
    fallback() external payable {
        // 获取当前逻辑合约地址
        address impl = logicContract;
        require(impl != address(0), "Implementation not set");

        // 使用内联汇编执行 delegatecall
        assembly {
            // 1. 将调用数据（calldata）复制到内存位置 0
            calldatacopy(0, 0, calldatasize())

            // 2. 执行 delegatecall
            // delegatecall(gas, target, inOffset, inSize, outOffset, outSize)
            // 这会在当前合约的存储上下文中执行 impl 合约的代码
            let result := delegatecall(gas(), impl, 0, calldatasize(), 0, 0)

            // 3. 将返回数据复制到内存
            returndatacopy(0, 0, returndatasize())

            // 4. 根据调用结果返回或回滚
            switch result
            case 0 {
                revert(0, returndatasize())
            }
            default {
                return(0, returndatasize())
            }
        }
    }

    // 接收函数（receive）- 处理纯 ETH 转账
    receive() external payable {}
}

// ==================== day17-SubscriptionLogicV1.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 导入存储布局合约
import "./day17-SubscriptionStorageLayout.sol";

// SubscriptionLogicV1 - 订阅逻辑合约 V1
// 这是可升级合约架构中的逻辑实现合约
// 使用代理模式（Proxy Pattern）实现合约升级
// 注意: 逻辑合约本身不存储数据，数据存储在代理合约中
contract SubscriptionLogicV1 is SubscriptionStorageLayout {

    // 初始化函数
    function initialize() external {
        // 可用于设置初始状态
    }

    // 创建订阅计划（仅合约所有者）
    function createPlan(uint8 planId, uint256 price, uint256 duration) external {
        require(msg.sender == owner, "Only owner");
        planPrices[planId] = price;
        planDuration[planId] = duration;
    }

    // 订阅计划
    function subscribe(uint8 planId) external payable {
        require(planPrices[planId] > 0, "Plan does not exist");
        require(msg.value == planPrices[planId], "Incorrect ETH amount");

        subscriptions[msg.sender] = Subscription({
            planId: planId,
            expiry: block.timestamp + planDuration[planId],
            paused: false
        });
    }

    // 检查用户是否处于有效订阅状态
    function isSubscribed(address user) external view returns (bool) {
        return subscriptions[user].expiry > block.timestamp;
    }
}

// ==================== day17-SubscriptionLogicV2.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 导入存储布局合约
import "./day17-SubscriptionStorageLayout.sol";

// SubscriptionLogicV2 - 订阅逻辑合约 V2
// 这是 V1 的升级版本，新增了暂停订阅功能
// 展示了可升级合约模式如何添加新功能而不丢失数据
contract SubscriptionLogicV2 is SubscriptionStorageLayout {

    // 创建订阅计划（仅合约所有者）
    function createPlan(uint8 planId, uint256 price, uint256 duration) external {
        require(msg.sender == owner, "Only owner");
        planPrices[planId] = price;
        planDuration[planId] = duration;
    }

    // 订阅计划
    function subscribe(uint8 planId) external payable {
        require(planPrices[planId] > 0, "Plan does not exist");
        require(msg.value == planPrices[planId], "Incorrect ETH amount");

        subscriptions[msg.sender] = Subscription({
            planId: planId,
            expiry: block.timestamp + planDuration[planId],
            paused: false
        });
    }

    // 暂停订阅（V2 新增功能）
    function pauseSubscription() external {
        Subscription storage sub = subscriptions[msg.sender];
        require(sub.expiry > block.timestamp, "Subscription expired");
        require(!sub.paused, "Already paused");

        sub.paused = true;
        // 计算并保存剩余时间
        sub.expiry = sub.expiry - block.timestamp;
    }

    // 恢复订阅（V2 新增功能）
    function resumeSubscription() external {
        Subscription storage sub = subscriptions[msg.sender];
        require(sub.paused, "Not paused");

        sub.paused = false;
        // 重新计算过期时间: 当前时间 + 之前保存的剩余时间
        sub.expiry = block.timestamp + sub.expiry;
    }

    // 检查用户是否处于有效订阅状态（V2 更新）
    function isSubscribed(address user) external view returns (bool) {
         Subscription memory sub = subscriptions[user];
         if (sub.paused) return false;
         return sub.expiry > block.timestamp;
    }
}

// ==================== 可升级合约架构说明 ====================
//
// 1. 代理合约（SubscriptionStorage）:
//    - 存储所有数据（subscriptions, planPrices 等）
//    - 持有用户的 ETH
//    - 通过 delegatecall 将函数调用转发给逻辑合约
//
// 2. 逻辑合约（SubscriptionLogicV1/V2）:
//    - 包含业务逻辑代码
//    - 不存储数据（数据存储在代理合约中）
//    - 可以被替换（升级）而不丢失数据
//
// 3. 升级流程:
//    - 部署新的逻辑合约（如 V2）
//    - 调用 upgradeTo() 更新 logicContract 地址
//    - 所有后续调用都会使用新的逻辑
//    - 数据保持不变
//
// 4. delegatecall 关键点:
//    - 在代理合约的存储上下文中执行
//    - msg.sender 保持为原始调用者
//    - msg.value 保持不变`:t===18?`// ==================== day18-MockWeatherOracle.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Chainlink 预言机接口定义 - 直接内联，无需外部依赖
interface AggregatorV3Interface {
    function decimals() external view returns (uint8);
    function description() external view returns (string memory);
    function version() external view returns (uint256);
    function getRoundData(uint80 _roundId) external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}

// 简单的所有权管理合约 - 直接内联，无需外部依赖
contract Ownable {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor(address initialOwner) {
        _transferOwnership(initialOwner);
    }

    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    function owner() public view virtual returns (address) {
        return _owner;
    }

    function _checkOwner() internal view virtual {
        require(owner() == msg.sender, "Ownable: caller is not the owner");
    }

    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

// MockWeatherOracle - 模拟天气预言机合约
// 实现了 Chainlink 的 AggregatorV3Interface 接口
// 用于开发和测试环境，模拟真实的天气数据预言机
contract MockWeatherOracle is AggregatorV3Interface, Ownable {
    uint8 private _decimals;
    string private _description;
    uint80 private _roundId;
    uint256 private _timestamp;
    uint256 private _lastUpdateBlock;

    constructor() Ownable(msg.sender) {
        _decimals = 0; // 降雨量以整毫米为单位
        _description = "MOCK/RAINFALL/USD";
        _roundId = 1;
        _timestamp = block.timestamp;
        _lastUpdateBlock = block.number;
    }

    function decimals() external view override returns (uint8) {
        return _decimals;
    }

    function description() external view override returns (string memory) {
        return _description;
    }

    function version() external pure override returns (uint256) {
        return 1;
    }

    function getRoundData(uint80 _roundId_)
        external
        view
        override
        returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
    {
        return (_roundId_, _rainfall(), _timestamp, _timestamp, _roundId);
    }

    function latestRoundData()
        external
        view
        override
        returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
    {
        return (_roundId, _rainfall(), _timestamp, _timestamp, _roundId);
    }

    // 计算当前降雨量（内部函数）
    // 使用区块信息生成伪随机数，模拟降雨量变化
    function _rainfall() public view returns (int256) {
        uint256 blocksSinceLastUpdate = block.number - _lastUpdateBlock;

        uint256 randomFactor = uint256(keccak256(abi.encodePacked(
            block.timestamp,
            block.coinbase,
            blocksSinceLastUpdate
        ))) % 1000;

        return int256(randomFactor);
    }

    function _updateRandomRainfall() private {
        _roundId++;
        _timestamp = block.timestamp;
        _lastUpdateBlock = block.number;
    }

    function updateRandomRainfall() external {
        _updateRandomRainfall();
    }
}

// ==================== day18-CropInsurance.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// CropInsurance - 农作物保险合约（升级版）
// 这是一个参数保险合约，使用 Chainlink 预言机获取降雨量和 ETH/USD 价格
// 当降雨量低于阈值时，自动向投保农民赔付
contract CropInsurance is Ownable {
    // 天气预言机接口，用于获取降雨量数据
    AggregatorV3Interface private weatherOracle;
    // ETH/USD 价格预言机，用于将美元金额转换为 ETH
    AggregatorV3Interface private ethUsdPriceFeed;

    // 常量定义
    uint256 public constant RAINFALL_THRESHOLD = 500;        // 降雨阈值（毫米）
    uint256 public constant INSURANCE_PREMIUM_USD = 10;      // 保险保费（美元）
    uint256 public constant INSURANCE_PAYOUT_USD = 50;       // 保险赔付金额（美元）

    // 存储每个地址的投保状态
    mapping(address => bool) public hasInsurance;
    // 存储每个地址上次索赔的时间戳，用于限制索赔频率
    mapping(address => uint256) public lastClaimTimestamp;

    // 事件定义
    event InsurancePurchased(address indexed farmer, uint256 amount);
    event ClaimSubmitted(address indexed farmer);
    event ClaimPaid(address indexed farmer, uint256 amount);
    event RainfallChecked(address indexed farmer, uint256 rainfall);

    // 构造函数
    constructor(address _weatherOracle, address _ethUsdPriceFeed) payable Ownable(msg.sender) {
        weatherOracle = AggregatorV3Interface(_weatherOracle);
        ethUsdPriceFeed = AggregatorV3Interface(_ethUsdPriceFeed);
    }

    // 购买保险函数
    // 农民支付保费购买保险，保费金额根据当前 ETH 价格动态计算
    function purchaseInsurance() external payable {
        uint256 ethPrice = getEthPrice();
        // 价格转换公式: (USD金额 × 1e26) / ETH价格 = ETH数量（wei）
        // 1e26 = 1e18(wei精度) × 1e8(Chainlink价格精度)
        uint256 premiumInEth = (INSURANCE_PREMIUM_USD * 1e26) / ethPrice;

        require(msg.value >= premiumInEth, "Insufficient premium amount");
        require(!hasInsurance[msg.sender], "Already insured");

        hasInsurance[msg.sender] = true;
        emit InsurancePurchased(msg.sender, msg.value);
    }

    // 检查降雨量并索赔函数
    // 农民调用此函数检查降雨量，如果低于阈值则自动获得赔付
    function checkRainfallAndClaim() external {
        require(hasInsurance[msg.sender], "No active insurance");
        // 24小时冷却期限制
        require(block.timestamp >= lastClaimTimestamp[msg.sender] + 1 days, "Must wait 24h between claims");

        (
            uint80 roundId,
            int256 rainfall,
            ,
            uint256 updatedAt,
            uint80 answeredInRound
        ) = weatherOracle.latestRoundData();

        require(updatedAt > 0, "Round not complete");
        require(answeredInRound >= roundId, "Stale data");

        uint256 currentRainfall = uint256(rainfall);
        emit RainfallChecked(msg.sender, currentRainfall);

        // 参数化赔付：自动检查条件并执行
        if (currentRainfall < RAINFALL_THRESHOLD) {
            lastClaimTimestamp[msg.sender] = block.timestamp;
            emit ClaimSubmitted(msg.sender);

            uint256 ethPrice = getEthPrice();
            uint256 payoutInEth = (INSURANCE_PAYOUT_USD * 1e26) / ethPrice;

            (bool success, ) = msg.sender.call{value: payoutInEth}("");
            require(success, "Transfer failed");

            emit ClaimPaid(msg.sender, payoutInEth);
        }
    }

    // 获取 ETH/USD 价格函数
    // 返回: ETH 价格（美元），精度为 8 位小数
    function getEthPrice() public view returns (uint256) {
        (, int256 price, , , ) = ethUsdPriceFeed.latestRoundData();
        return uint256(price);
    }

    // 获取当前降雨量函数
    function getCurrentRainfall() public view returns (uint256) {
        (, int256 rainfall, , , ) = weatherOracle.latestRoundData();
        return uint256(rainfall);
    }

    // 提取合约余额（仅合约所有者）
    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // 接收 ETH 函数
    receive() external payable {}

    // 获取合约余额函数
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

// ==================== 预言机与参数保险架构说明 ====================
//
// 1. 双预言机设计:
//    - Weather Oracle: 提供降雨量数据
//    - ETH/USD PriceFeed: 提供价格数据用于货币转换
//    - 两者都遵循 Chainlink 的 AggregatorV3Interface 标准
//
// 2. 价格转换机制:
//    - Chainlink 价格预言机返回 8 位小数精度的价格
//    - 公式: ETH数量 = (USD金额 × 1e26) / ETH价格
//    - 1e26 = 1e18(wei精度) × 1e8(Chainlink精度)
//
// 3. 参数保险特点:
//    - 自动触发：无需人工审核，条件满足自动赔付
//    - 透明可信：使用预言机数据，避免争议
//    - 高效低成本：无需理赔调查，降低运营成本
//
// 4. 冷却期机制:
//    - 24小时内只能索赔一次
//    - 防止滥用和频繁索赔
//    - 使用 block.timestamp 记录时间`:t===19?`// ==================== day19-SignThis.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SignThis {
    // 存储活动组织者地址
    address public organizer;

    // 记录用户是否已参加活动
    mapping(address => bool) public hasEntered;

    // 记录参与者列表
    address[] public participants;

    // 事件：用户参与活动
    event UserEntered(address indexed user);

    // 构造函数：设置组织者
    constructor() {
        organizer = msg.sender;
    }

    // 验证签名并记录参与者
    function enter(bytes memory signature) external {
        // 验证签名
        require(_verifySignature(msg.sender, signature), "Invalid signature");

        // 检查是否已参与（防止重入）
        require(!hasEntered[msg.sender], "Already entered");

        // 记录参与者
        hasEntered[msg.sender] = true;
        participants.push(msg.sender);

        // 触发事件
        emit UserEntered(msg.sender);
    }

    // 内部函数：验证签名
    function _verifySignature(address user, bytes memory signature) internal view returns (bool) {
        // 对用户地址进行哈希
        bytes32 messageHash = keccak256(abi.encodePacked(user));

        // 添加 EIP-191 前缀
        bytes32 ethSignedMessageHash = keccak256(
            abi.encodePacked("\\x19Ethereum Signed Message:\\n32", messageHash)
        );

        // 恢复签名者地址
        (bytes32 r, bytes32 s, uint8 v) = _splitSignature(signature);
        address recovered = ecrecover(ethSignedMessageHash, v, r, s);

        // 验证签名者是否为组织者
        return recovered == organizer;
    }

    // 拆分签名为 r, s, v 三个组件
    function _splitSignature(bytes memory sig) internal pure returns (bytes32 r, bytes32 s, uint8 v) {
        require(sig.length == 65, "Invalid signature length");

        assembly {
            r := mload(add(sig, 32))
            s := mload(add(sig, 64))
            v := byte(0, mload(add(sig, 96)))
        }
    }

    // 获取参与者数量
    function getParticipantCount() external view returns (uint256) {
        return participants.length;
    }

    // 检查特定地址是否已参与
    function checkEntered(address user) external view returns (bool) {
        return hasEntered[user];
    }
}

// ==================== 签名验证与无Gas空投说明 ====================
//
// 1. 签名验证原理:
//    - 组织者使用私钥对用户地址进行签名
//    - 用户调用合约时提供签名
//    - 合约使用 ecrecover 恢复签名者地址
//    - 验证恢复的地址是否为组织者
//
// 2. EIP-191 签名标准:
//    - 目的：防止签名被误用于其他场景
//    - 方法：在消息前添加 "\\x19Ethereum Signed Message:\\n32" 前缀
//    - 效果：签名的消息与普通文本签名不同
//
// 3. 无 Gas 空投优势:
//    - 用户无需持有 ETH 即可参与
//    - 组织者承担 Gas 费用
//    - 适用于代币空投、白名单、邀请奖励等场景
//
// 4. 安全考虑:
//    - 使用 nonce 防止重放攻击（可扩展）
//    - 验证签名长度
//    - 使用 require 进行输入验证`:t===20?`// ==================== day20-GoldVault.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// GoldVault - 金库合约
// 演示重入攻击漏洞及其防护措施
contract GoldVault {
    // 存储每个用户的黄金（ETH）余额
    mapping(address => uint256) public goldBalance;

    // 重入锁状态变量
    uint256 private _status;
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    // 构造函数 - 初始化重入锁状态
    constructor() {
        _status = _NOT_ENTERED;
    }

    // 自定义 nonReentrant 修饰符 - 防止重入攻击
    modifier nonReentrant() {
        require(_status != _ENTERED, "Reentrant call blocked");
        _status = _ENTERED;
        _;
        _status = _NOT_ENTERED;
    }

    // 存款函数
    function deposit() external payable {
        require(msg.value > 0, "Deposit must be more than 0");
        goldBalance[msg.sender] += msg.value;
    }

    // 有漏洞的提款函数 - 演示重入攻击风险
    function vulnerableWithdraw() external {
        uint256 amount = goldBalance[msg.sender];
        require(amount > 0, "Nothing to withdraw");

        // 漏洞所在: 先发送ETH（外部调用）
        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "ETH transfer failed");

        // 后更新余额 - 如果外部调用重入，余额还未更新！
        goldBalance[msg.sender] = 0;
    }

    // 安全的提款函数 - 使用重入锁保护
    function safeWithdraw() external nonReentrant {
        // 1. Checks: 验证条件
        uint256 amount = goldBalance[msg.sender];
        require(amount > 0, "Nothing to withdraw");

        // 2. Effects: 先更新状态
        goldBalance[msg.sender] = 0;

        // 3. Interactions: 最后进行外部调用
        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "ETH transfer failed");
    }
}

// ==================== day20-GoldThief.sol ====================
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IVault {
    function deposit() external payable;
    function vulnerableWithdraw() external;
    function safeWithdraw() external;
}

// GoldThief - 重入攻击演示合约
contract GoldThief {
    IVault public targetVault;
    address public owner;
    uint public attackCount;
    bool public attackingSafe;

    constructor(address _vaultAddress) {
        targetVault = IVault(_vaultAddress);
        owner = msg.sender;
    }

    // 攻击有漏洞的金库
    function attackVulnerable() external payable {
        require(msg.sender == owner, "Only owner");
        require(msg.value >= 1 ether, "Need at least 1 ETH");

        attackingSafe = false;
        attackCount = 0;

        targetVault.deposit{value: msg.value}();
        targetVault.vulnerableWithdraw();
    }

    // 攻击有防护的金库
    function attackSafe() external payable {
        require(msg.sender == owner, "Only owner");
        require(msg.value >= 1 ether, "Need at least 1 ETH");

        attackingSafe = true;
        attackCount = 0;

        targetVault.deposit{value: msg.value}();
        targetVault.safeWithdraw();
    }

    // 接收函数 - 重入攻击的核心
    receive() external payable {
        attackCount++;

        if (!attackingSafe && address(targetVault).balance >= 1 ether && attackCount < 5) {
            targetVault.vulnerableWithdraw();
        }

        if (attackingSafe) {
            targetVault.safeWithdraw();
        }
    }

    // 提取窃取的 ETH
    function stealLoot() external {
        require(msg.sender == owner, "Only owner");
        (bool success, ) = payable(owner).call{value: address(this).balance}("");
        require(success, "ETH transfer failed");
    }
}

// ==================== 安全最佳实践总结 ====================
//
// 1. Checks-Effects-Interactions 模式:
//    - Checks: 首先验证所有条件（require）
//    - Effects: 然后更新合约状态
//    - Interactions: 最后进行外部调用
//
// 2. 重入锁（Reentrancy Guard）:
//    - 使用布尔值或状态变量跟踪执行状态
//    - 在函数执行期间锁定合约
//
// 3. 实际案例 - The DAO 攻击:
//    - 2016年发生，损失360万ETH
//    - 攻击者利用递归调用漏洞
//    - 导致以太坊硬分叉（ETH/ETC）
//
// 4. 其他防护措施:
//    - 使用 transfer 或 send（2300 gas限制）
//    - 使用 pull 模式代替 push 模式
//    - 限制单次提款金额
//    - 进行专业的安全审计`:t===21?`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// IERC721 - ERC721 标准接口
// 定义了 NFT 合约必须实现的基本功能
// 符合以太坊改进提案 EIP-721
interface IERC721 {
    // 事件定义
    // 当代币被转移时触发
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    // 当代币授权给某个地址时触发
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    // 当设置或取消操作员授权时触发
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    // 查询某个地址拥有的代币数量
    function balanceOf(address owner) external view returns (uint256);
    // 查询代币的所有者
    function ownerOf(uint256 tokenId) external view returns (address);

    // 授权某个地址操作特定代币
    function approve(address to, uint256 tokenId) external;
    // 查询代币被授权给的地址
    function getApproved(uint256 tokenId) external view returns (address);

    // 设置或取消操作员授权（授权操作员管理所有代币）
    function setApprovalForAll(address operator, bool approved) external;
    // 查询是否授权了操作员
    function isApprovedForAll(address owner, address operator) external view returns (bool);

    // 转移代币（需要授权）
    function transferFrom(address from, address to, uint256 tokenId) external;
    // 安全转移代币（检查接收方是否支持 ERC721）
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    // 带数据的安全转移
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
}

// IERC721Receiver - ERC721 代币接收接口
// 合约必须实现此接口才能接收 ERC721 代币
// 防止代币被意外发送到不支持 ERC721 的合约
interface IERC721Receiver {
    // 当合约接收到 ERC721 代币时调用
    // 必须返回此函数的 selector（0x150b7a02）以确认接收
    function onERC721Received(address operator, address from, uint256 tokenId, bytes calldata data) external returns (bytes4);
}

// SimpleNFT - 简化版 ERC721 NFT 合约
// 实现了 ERC721 标准的基本功能
// 包含铸造、转移、授权等核心功能
contract SimpleNFT is IERC721 {
    // NFT 名称
    string public name;
    // NFT 符号（代币标识）
    string public symbol;

    // 代币 ID 计数器，从 1 开始
    uint256 private _tokenIdCounter = 1;

    // 代币 ID 到所有者的映射
    mapping(uint256 => address) private _owners;
    // 所有者地址到代币数量的映射
    mapping(address => uint256) private _balances;
    // 代币 ID 到被授权地址的映射
    mapping(uint256 => address) private _tokenApprovals;
    // 所有者到操作员授权的映射（嵌套映射）
    mapping(address => mapping(address => bool)) private _operatorApprovals;
    // 代币 ID 到元数据 URI 的映射
    mapping(uint256 => string) private _tokenURIs;

    // 构造函数 - 设置 NFT 名称和符号
    constructor(string memory name_, string memory symbol_) {
        name = name_;
        symbol = symbol_;
    }

    // 查询地址拥有的代币数量
    function balanceOf(address owner) public view override returns (uint256) {
        require(owner != address(0), "Zero address");
        return _balances[owner];
    }

    // 查询代币的所有者
    function ownerOf(uint256 tokenId) public view override returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "Token doesn't exist");
        return owner;
    }

    // 授权地址操作特定代币
    function approve(address to, uint256 tokenId) public override {
        address owner = ownerOf(tokenId);
        require(to != owner, "Already owner");
        // 验证调用者是代币所有者或已授权的操作员
        require(msg.sender == owner || isApprovedForAll(owner, msg.sender), "Not authorized");

        _tokenApprovals[tokenId] = to;
        emit Approval(owner, to, tokenId);
    }

    // 查询代币被授权给的地址
    function getApproved(uint256 tokenId) public view override returns (address) {
        require(_owners[tokenId] != address(0), "Token doesn't exist");
        return _tokenApprovals[tokenId];
    }

    // 设置或取消操作员授权
    function setApprovalForAll(address operator, bool approved) public override {
        require(operator != msg.sender, "Self approval");
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    // 查询是否授权了操作员
    function isApprovedForAll(address owner, address operator) public view override returns (bool) {
        return _operatorApprovals[owner][operator];
    }

    // 转移代币（需要授权）
    function transferFrom(address from, address to, uint256 tokenId) public override {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Not authorized");
        _transfer(from, to, tokenId);
    }

    // 安全转移代币
    function safeTransferFrom(address from, address to, uint256 tokenId) public override {
        safeTransferFrom(from, to, tokenId, "");
    }

    // 带数据的安全转移代币
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public override {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Not authorized");
        _safeTransfer(from, to, tokenId, data);
    }

    // 铸造新代币
    // to: 接收者地址
    // uri: 代币元数据 URI
    function mint(address to, string memory uri) public {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;

        // 设置代币所有者和余额
        _owners[tokenId] = to;
        _balances[to] += 1;
        _tokenURIs[tokenId] = uri;

        // 触发 Transfer 事件（from 为 0 地址表示铸造）
        emit Transfer(address(0), to, tokenId);
    }

    // 查询代币的元数据 URI
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        require(_owners[tokenId] != address(0), "Token doesn't exist");
        return _tokenURIs[tokenId];
    }

    // 内部转移函数
    function _transfer(address from, address to, uint256 tokenId) internal virtual {
        require(ownerOf(tokenId) == from, "Not owner");
        require(to != address(0), "Zero address");

        // 清除授权
        delete _tokenApprovals[tokenId];

        // 更新余额
        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }

    // 内部安全转移函数
    function _safeTransfer(address from, address to, uint256 tokenId, bytes memory data) internal virtual {
        _transfer(from, to, tokenId);
        // 检查接收方是否支持 ERC721
        require(_checkOnERC721Received(from, to, tokenId, data), "Not ERC721Receiver");
    }

    // 检查调用者是否被授权操作代币
    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view returns (bool) {
        address owner = ownerOf(tokenId);
        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));
    }

    // 检查接收方合约是否实现了 IERC721Receiver
    function _checkOnERC721Received(address from, address to, uint256 tokenId, bytes memory data) private returns (bool) {
        // 检查 to 是否是合约地址
        if (to.code.length > 0) {
            try IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, data) returns (bytes4 retval) {
                // 验证返回值是否正确
                return retval == IERC721Receiver.onERC721Received.selector;
            } catch {
                // 调用失败
                return false;
            }
        }
        // EOA（外部账户）总是可以接收
        return true;
    }
}

// ERC721 关键概念:
//
// 1. 代币标识:
//    - 每个代币有唯一的 tokenId（uint256）
//    - 从 0 地址铸造，转移到 0 地址销毁
//
// 2. 所有权管理:
//    - _owners: tokenId => owner
//    - _balances: owner => count
//
// 3. 授权机制:
//    - 单代币授权: approve()
//    - 操作员授权: setApprovalForAll()
//
// 4. 安全转移:
//    - 检查接收方是否支持 ERC721
//    - 防止代币被锁定在不支持的合约中
//
// 5. 元数据:
//    - tokenURI() 返回代币的元数据链接
//    - 通常指向 JSON 文件，包含名称、描述、图片等`:"",Yf=()=>Object.keys(xr).reduce((t,e)=>(t[e]={unlockedConcepts:[],totalConcepts:xr[e].concepts.length,interactionCount:0},t),{}),Me=Io("progress",()=>{const t=F(Yf()),e=c=>String(c),n=(c,l)=>{const u=e(c),d=t.value[u];d&&!d.unlockedConcepts.includes(l)&&d.unlockedConcepts.push(l)},r=c=>{const l=e(c),u=t.value[l];u&&u.interactionCount++},s=c=>{const l=e(c);return t.value[l]},i=c=>{var u;const l=e(c);return((u=t.value[l])==null?void 0:u.unlockedConcepts)||[]};return{dayProgress:t,unlockConcept:n,incrementInteraction:r,getDayProgress:s,getUnlockedConcepts:i,isConceptUnlocked:(c,l)=>i(c).includes(l),getProgressPercentage:c=>{const l=e(c),u=t.value[l];return!u||u.totalConcepts===0?0:Math.floor(u.unlockedConcepts.length/u.totalConcepts*100)}}}),ft=Io("contract",()=>{const t=F({day1:{count:0,interactionCount:0},day2:{name:"",bio:"",interactionCount:0,hasStored:!1,hasRetrieved:!1},day3:{candidates:[],voteCount:{},interactionCount:0},day4:{owner:"",item:"",auctionEndTime:0,highestBidder:"",highestBid:0,ended:!1,bids:{},bidders:[],interactionCount:0},day5:{owner:"",treasureAmount:0,withdrawalAllowance:{},hasWithdrawn:{},userAddress:"0x"+Math.random().toString(16).substr(2,40),userAllowance:0,interactionCount:0},day6:{bankManager:"",members:[],registeredMembers:{},balance:{},userAddress:"0x"+Math.random().toString(16).substr(2,40),interactionCount:0,depositCount:0,withdrawCount:0},day7:{owner:"",userAddress:"",registeredFriends:{},friendList:[],balances:{},debts:{},interactionCount:0},day8:{owner:"",userAddress:"",isUserAdmin:!1,totalTipsReceived:0,tipPerPerson:{},tipsPerCurrency:{},supportedCurrencies:["USD","EUR","JPY","INR"],conversionRates:{USD:5e14,EUR:6e14,JPY:4e12,INR:7e12},interactionCount:0},day9:{owner:"",userAddress:"",isUserAdmin:!1,scientificCalculatorAddress:"",isAddressSet:!1,operationCount:0,operationHistory:[],interactionCount:0,challengeTasks:{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}},day10:{owner:"",userAddress:"",userProfile:{name:"",weight:0,isRegistered:!1},workoutHistory:[],totalWorkouts:0,totalDistance:0,milestones:{weightGoal:{achieved:!1,timestamp:0,title:"减重目标达成",icon:"⚖️"},workouts10:{achieved:!1,timestamp:0,title:"10次运动",icon:"🏃"},workouts50:{achieved:!1,timestamp:0,title:"50次运动大师",icon:"🏆"},distance100K:{achieved:!1,timestamp:0,title:"100公里里程碑",icon:"🌍"}},interactionCount:0},day11:{owner:"",userAddress:"",contractBalance:0,eventLog:[],interactionCount:0}}),e=()=>"0x"+Math.random().toString(16).substr(2,40),n=i=>{const o=`day${i}`,a=t.value[o];if(!a){console.warn(`Contract for day ${i} not found`);return}switch(i){case 5:a.owner||(a.owner=e()),a.userAddress||(a.userAddress=e());break;case 6:a.bankManager===""&&(a.bankManager=e(),a.members=[a.bankManager],a.registeredMembers={[a.bankManager]:!0,[a.userAddress]:!0},a.balance={[a.bankManager]:0,[a.userAddress]:0},a.members.push(a.userAddress));break;case 7:if(a.owner===""){const c=e();a.owner=c,a.userAddress=c,a.registeredFriends[c]=!0,a.friendList.push(c)}break;case 8:a.owner===""&&(a.owner=e(),a.userAddress=e());break;case 9:a.owner===""&&(a.owner=e(),a.userAddress=e(),a.isUserAdmin=!1);break;case 10:a.owner===""&&(a.owner=e(),a.userAddress=e());break;case 11:if(a.owner===""){const c=e();a.owner=c,a.userAddress=c,a.contractBalance=0,a.eventLog=[]}break}},r=i=>t.value[`day${i}`];return{contracts:t,initializeContract:n,getContract:r,updateContract:(i,o)=>{const a=r(i);a&&Object.assign(a,o)},generateAddress:e}}),Ia={increment:21e3,reset:21e3,addData:4e4,retrieveData:0,addCandidate:5e4,vote:35e3,placeBid:45e3,endAuction:25e3,addTreasure:3e4,approveWithdrawal:4e4,withdrawTreasure:5e4,resetWithdrawalStatus:25e3,transferOwnership:35e3,getTreasureDetails:0,addMembers:45e3,depositAmountEther:35e3,withdrawAmount:4e4,getMembers:0,addFriend:45e3,depositIntoWallet:35e3,recordDebt:45e3,payFromWallet:5e4,transferEther:35e3,transferEtherViaCall:4e4,withdraw:35e3,checkBalance:0,addCurrency:45e3,tipInEth:4e4,tipInCurrency:5e4,withdrawTips:35e3,transferOwnership8:35e3,transfer13:35e3,approve13:3e4,transferFrom13:4e4,getBalance13:0,getAllowance13:0,createBasicBox:8e4,createPremiumBox:1e5,createTimeLockedBox:12e4,storeSecret:35e3,getSecret:0,transferOwnership14:4e4,setMetadata:3e4,getMetadata:0,getUnlockTime:0,getRemainingLockTime:0,completeOwnershipTransfer:45e3,createProposal15:6e4,vote15:4e4,executeProposal15:35e3,setProfile16:35e3,registerPlugin16:25e3,runPlugin16:45e3,runPluginView16:0,createPlan17:45e3,upgradeTo17:35e3,subscribe17:5e4,pauseSubscription17:3e4,resumeSubscription17:3e4,isSubscribed17:0,checkRainfall18:0,purchaseInsurance18:45e3,claimPayout18:5e4,fastForwardTime18:0,withdrawBalance18:35e3,generateSignature19:0,enterEvent19:65e3,checkEntered19:0,getParticipants19:0,deposit20:45e3,vulnerableWithdraw20:5e4,safeWithdraw20:35e3,checkVaultStatus20:0,mint21:15e4,transferFrom21:8e4,safeTransferFrom21:85e3,approve21:45e3,setApprovalForAll21:35e3,balanceOf21:0,getApproved21:0,ownerOf21:0},Da=4e-8,Zf={function:{name:"函数交互",icon:"🎯",unlockAt:1,message:"你刚刚调用了 Solidity 中的第一个函数！在区块链上，用户与合约的所有交互都是通过函数完成的。",code:`function click() public {
    // 你的点击在这里触发
}`},increment:{name:"自增操作",icon:"➕",unlockAt:2,message:'你发现了 `++` 这个操作符的作用！它的意思是"在原来的基础上加 1"。',code:"count++;  // 等同于 count = count + 1;"},uint256:{name:"uint256 变量",icon:"🔢",unlockAt:3,message:"你刚刚修改了一个 `uint256` 类型的变量。`uint` = 无符号整数（只能存正数），`256` = 能存超级大的数字。",code:"uint256 public count;  // 能存储超大数字"},contract:{name:"contract 结构",icon:"🏗️",unlockAt:4,message:'欢迎来到你的第一个 `contract`！你现在看到的交互界面，就是这个"合约"的前端。没有它，就没有智能合约世界！',code:`contract ClickCounter {
    uint256 public count;
    
    function click() public {
        count++;
    }
}`},string:{name:"string 类型",icon:"📝",unlockAt:1,message:"你刚刚使用了 `string` 类型！它可以存储文本数据，比如名字、描述等信息。",code:`string name;  // 存储文本数据
string bio;   // 存储简介`},private:{name:"private 变量",icon:"🔒",unlockAt:2,message:"你发现了 `private` 关键字！表示这个变量只能在合约内部访问，外部无法直接读取。",code:"string private name;  // 只能在合约内部访问"},memory:{name:"memory 存储",icon:"💾",unlockAt:3,message:"你使用了 `memory` 关键字！表示数据存储在内存中，只在函数执行期间存在，执行完毕后自动清除。",code:`function add(string memory _name) public {
    // _name 存储在内存中，临时使用
}`},view:{name:"view 函数",icon:"👁️",unlockAt:4,message:"你调用了 `view` 函数！它只读取数据不修改状态，因此不消耗 Gas，这是优化合约的重要方法。",code:`function retrieve() public view returns (string memory) {
    return name;  // 只读取，不修改
}`},parameters:{name:"函数参数",icon:"📥",unlockAt:5,message:"你使用了函数参数！参数让函数能够接收外部传入的数据，使函数更加灵活。",code:`function add(string memory _name, string memory _bio) public {
    // _name 和 _bio 是参数
}`},returns:{name:"返回值",icon:"📤",unlockAt:6,message:"你使用了 `returns` 关键字！它定义了函数返回的数据类型，让函数能够向调用者返回结果。",code:`function retrieve() public view returns (string memory, string memory) {
    return (name, bio);  // 返回多个值
}`},array:{name:"数组类型",icon:"📋",unlockAt:1,message:"你刚刚创建了数组！`candidateNames` 数组用来存储所有候选人的姓名。",code:`string[] public candidateNames;  // 声明字符串数组
candidateNames.push("Alice");  // 添加第一个候选人`},push:{name:"push 方法",icon:"➕",unlockAt:2,message:"你使用了 `push` 方法！它在数组末尾添加新元素，每次添加候选人都会用到它。",code:`candidateNames.push("Alice");  // 添加 Alice 到数组末尾
candidateNames.push("Bob");    // 添加 Bob 到数组末尾`},mapping:{name:"映射类型",icon:"🗺️",unlockAt:3,message:"你发现了 `mapping` 映射！它用候选人姓名作为键，票数作为值，存储投票结果。",code:`mapping(string => uint256) voteCount;  // 声明映射
voteCount["Alice"] = 0;  // 初始化票数为0`},compound_assignment:{name:"复合赋值",icon:"⚡",unlockAt:4,message:"你使用了 `+=` 复合赋值运算符！每次投票都会将候选人的票数加1。",code:'voteCount["Alice"] += 1;  // 票数加1，等同于 voteCount["Alice"] = voteCount["Alice"] + 1;'},constructor:{name:"构造函数",icon:"🏗️",unlockAt:1,message:"你刚刚调用了构造函数！它只在合约部署时执行一次，用于初始化合约的状态变量。",code:`constructor(string memory _item, uint _biddingTime) {
    owner = msg.sender;
    item = _item;
    auctionEndTime = block.timestamp + _biddingTime;
}`},msg_sender:{name:"msg.sender",icon:"📧",unlockAt:2,message:"你使用了 `msg.sender`！它表示当前调用合约的地址，可以是用户钱包或其他合约。",code:`address public owner = msg.sender;  // 部署者成为所有者
function bid() external {
    bids[msg.sender] = amount;  // 记录竞拍者出价
}`},block_timestamp:{name:"block.timestamp",icon:"⏰",unlockAt:3,message:"你使用了 `block.timestamp`！它返回当前区块的时间戳（Unix时间，秒），常用于时间相关的逻辑。",code:`uint public auctionEndTime = block.timestamp + _biddingTime;  // 设置拍卖结束时间
require(block.timestamp < auctionEndTime, "Auction has ended.");  // 检查时间`},require:{name:"条件检查",icon:"✅",unlockAt:4,message:"你使用了 `require` 语句！它在条件不满足时回滚交易，是合约安全的重要机制。",code:`require(amount > 0, "Bid amount must be greater than zero.");
require(block.timestamp < auctionEndTime, "Auction has already ended.");`},external:{name:"external 函数",icon:"🌐",unlockAt:5,message:"你使用了 `external` 函数！它只能从合约外部调用，比 `public` 更节省 Gas。",code:`function bid(uint amount) external {
    // 只能从外部调用，不能在合约内部调用
}`},address_type:{name:"地址类型",icon:"🏠",unlockAt:6,message:"你使用了 `address` 类型！它存储以太坊地址（钱包地址或合约地址），是区块链交互的核心。",code:`address public owner;  // 所有者地址
address private highestBidder;  // 最高出价者地址
mapping(address => uint) public bids;  // 地址到出价的映射`},bool_type:{name:"布尔类型",icon:"🔘",unlockAt:7,message:"你使用了 `bool` 类型！它只有 `true` 或 `false` 两个值，用于标记状态。",code:`bool public ended;  // 拍卖是否已结束
ended = true;  // 标记拍卖结束
require(!ended, "Auction already ended.");  // 检查状态`},modifier:{name:"修饰符",icon:"🛡️",unlockAt:1,message:"你使用了 `modifier`！它用于为函数添加前置条件检查，确保只有满足条件的调用者才能执行函数。",code:`modifier onlyOwner() {
    require(msg.sender == owner, "Only owner");
    _;  // 继续执行被修饰的函数
}`},zero_address:{name:"零地址检查",icon:"⚠️",unlockAt:2,message:"你检查了 `address(0)` 零地址！它表示一个无效的地址，通常用于检查地址参数是否有效。",code:`require(newOwner != address(0), "Invalid address");  // 确保不是零地址
address(0)  // 零地址，表示无效地址`},return_statement:{name:"返回语句",icon:"↩️",unlockAt:3,message:"你了解了返回语句的用法！继续解锁更多概念吧！",code:`function withdrawTreasure(uint256 amount) public {
    if (msg.sender == owner) {
        return;  // 所有者提前退出，不执行后续逻辑
    }
    
    require(allowance > 0, "No allowance");
    treasureAmount -= allowance;
}`},address_mapping_balance:{name:"地址映射余额",icon:"💰",unlockAt:1,message:"你刚刚使用了地址映射来存储每个用户的余额！mapping(address => uint256) 是存储用户资产的核心数据结构。",code:`mapping(address => uint256) balance;

balance[0x123...] = 1000000;  // 存储余额
uint256 amount = balance[msg.sender];  // 读取余额`},payable:{name:"可支付函数",icon:"💵",unlockAt:2,message:"你使用了 `payable` 关键字！它让函数能够接收以太币，这是处理资金交易的关键。",code:`function deposit() public payable {
    // 这个函数可以接收以太币
    require(msg.value > 0, "Must send ETH");
    balance[msg.sender] += msg.value;
}`},msg_value:{name:"发送金额",icon:"💳",unlockAt:3,message:"你使用了 `msg.value`！它表示调用函数时发送的以太币数量（以wei为单位），是获取转账金额的标准方式。",code:`function deposit() public payable {
    uint256 amount = msg.value;  // 获取发送的ETH数量
    balance[msg.sender] += amount;
}`},wei_unit:{name:"Wei 单位",icon:"⚖️",unlockAt:4,message:"你了解了以太币的最小单位 wei！1 ETH = 10^18 wei，这是以太坊计价的基础单位。",code:`// 以太币单位
1 wei = 0.000000000000000001 ETH
1 gwei = 0.000000001 ETH
1 ETH = 1000000000000000000 wei

balance[msg.sender] += 1000000000000000000;  // 增加 1 ETH`},ether_deposit_withdraw:{name:"存取逻辑",icon:"🏦",unlockAt:5,message:"你掌握了以太币的存取核心逻辑！检查余额、增减余额、验证输入，这是任何金融合约的基础。",code:`function deposit() public payable {
    require(msg.value > 0, "Invalid amount");
    balance[msg.sender] += msg.value;
}

function withdraw(uint256 amount) public {
    require(amount > 0, "Invalid amount");
    require(balance[msg.sender] >= amount, "Insufficient balance");
    balance[msg.sender] -= amount;
}`},withdraw_pattern:{name:"提现模式 (Withdraw)",icon:"🏧",unlockAt:7,message:"你掌握了提现模式！与其主动将资金发送给用户（易受攻击），不如让用户自己来提取他们的资金，这是智能合约安全的核心原则之一。",code:`function withdraw(uint256 _amount) public {
    require(balances[msg.sender] >= _amount);
    balances[msg.sender] -= _amount;
    (bool success, ) = payable(msg.sender).call{value: _amount}("");
    require(success);
}`},nested_mapping:{name:"嵌套映射",icon:"🗂️",unlockAt:1,message:"你掌握了如何使用嵌套映射 (mapping in mapping)！这是处理复杂关系（如“谁欠谁多少钱”）的终极武器。",code:"mapping(address => mapping(address => uint256)) public debts;"},address_payable:{name:"Payable 地址",icon:"💸",unlockAt:2,message:"你使用了 address payable！只有标记为 payable 的地址才能接收 Ether，否则编译器会报错保护资金安全。",code:"address payable user = payable(msg.sender);"},debt_tracking:{name:"债务追踪",icon:"📊",unlockAt:3,message:"区块链就是一本账本！你刚刚在链上永久记录了一笔债权关系，且任何人无法抵赖。",code:"debts[debtor][msg.sender] += amount;"},internal_transfer:{name:"内部记账转账",icon:"🔄",unlockAt:4,message:"你完成了一次“内部转账”！这并没有发生真实的链上交易，只是在合约账本里扣减了一个人的余额并增加给另一个人，非常省 Gas。",code:`balances[msg.sender] -= amount;
balances[creditor] += amount;`},transfer_method:{name:"transfer() 转账",icon:"📤",unlockAt:5,message:"你使用了经典的 .transfer() 方法。它会自动在转账失败时触发 revert，是最简单安全的转账方式。",code:"payable(to).transfer(amount);"},call_method:{name:"call() 转账",icon:"📡",unlockAt:6,message:"你使用了更强大的 .call() 方法！它是目前以太坊开发中最推荐的转账方式，因为它允许你灵活处理 Gas 限制和错误结果。",code:`(bool success, ) = to.call{value: amount}("");
require(success, "Transfer failed");`},modifier_onlyOwner:{name:"onlyOwner 修饰符",icon:"🛡️",unlockAt:1,message:"你发现了 `onlyOwner`！这是一个自定义修饰符，专门用来限制只有管理员（合约拥有者）才能执行特定的函数（如提现、改汇率）。",code:`modifier onlyOwner() {
    require(msg.sender == owner, "Only owner can perform this action");
    _;
}`},payable_tip:{name:"payable 支付关键字",icon:"💰",unlockAt:2,message:"你成功进行了一次带钱的交互！在 Solidity 中，只有标记为 `payable` 的函数才能接收随交易发送的以太币。",code:`function tipInEth() public payable {
    // 带有 payable 才能收钱
}`},msg_value_tip:{name:"msg.value 发送金额",icon:"💸",unlockAt:3,message:"你发送了 ETH！`msg.value` 是一个全局变量，代表了你在调用这个函数时额外付出的金钱（单位是 wei）。",code:`tipPerPerson[msg.sender] += msg.value;
totalTipsReceived += msg.value;`},address_balance:{name:"合约余额查询",icon:"🏦",unlockAt:4,message:"想要知道存钱柜里有多少钱？`address(this).balance` 会返回当前智能合约在链上的全部实时余额。",code:`uint256 contractBalance = address(this).balance;
require(contractBalance > 0, "No tips to withdraw");`},call_withdraw:{name:"底层 call 转账",icon:"📡",unlockAt:5,message:'管理员提现成功！使用 `.call{value: ...}("")` 是目前以太坊开发中推荐的由合约向外部地址转账的最灵活方式。',code:`(bool success, ) = payable(owner).call{value: contractBalance}("");
require(success, "Transfer failed");`},mapping_rates:{name:"法币汇率映射",icon:"💹",unlockAt:6,message:"智能合约也能换钱！这里使用了 `mapping(string => uint256)` 来存储不同法币（字符串）对应的 ETH 汇率（数字）。",code:`mapping(string => uint256) public conversionRates;

conversionRates["USD"] = 5 * 10**14;`},pure_function:{name:"Pure 纯函数",icon:"⚡",unlockAt:1,message:"你使用了 `pure` 函数！pure函数不读取也不修改区块链状态，执行快速且不消耗Gas，适合简单的数学计算。",code:`function add(uint256 a, uint256 b) public pure returns(uint256) {
    return a + b;  // 纯计算，不访问状态
}`},view_function:{name:"View 视图函数",icon:"👁️",unlockAt:2,message:"你使用了 `view` 函数！view函数可以读取状态变量但不修改它们，适合查询操作，不消耗Gas。",code:`function calculatePower(uint256 base, uint256 exponent) public view returns(uint256) {
    // 读取 scientificCalculatorAddress 状态变量
    ScientificCalculator calc = ScientificCalculator(scientificCalculatorAddress);
    return calc.power(base, exponent);
}`},cross_contract_call:{name:"跨合约调用",icon:"📡",unlockAt:3,message:"你完成了跨合约调用！一个合约可以通过地址调用另一个合约的函数，实现合约间的组合与协作。",code:`// Calculator合约调用ScientificCalculator合约
ScientificCalculator scientificCalc = 
    ScientificCalculator(scientificCalculatorAddress);
uint256 result = scientificCalc.power(base, exponent);`},interface_call:{name:"接口方式调用",icon:"🔌",unlockAt:4,message:"你使用了接口方式调用外部合约！通过创建接口实例，可以像调用本地函数一样调用外部合约。",code:`// 创建外部合约接口实例
ScientificCalculator scientificCalc = 
    ScientificCalculator(scientificCalculatorAddress);

// 调用外部合约函数
uint256 result = scientificCalc.power(base, exponent);`},low_level_call:{name:"底层 Call 调用",icon:"🔧",unlockAt:5,message:"你使用了底层 `call` 方法！这是最灵活的跨合约调用方式，通过 `abi.encodeWithSignature` 编码函数调用。",code:`// 编码函数签名
bytes memory data = abi.encodeWithSignature(
    "squareRoot(int256)", number
);

// 发起底层call调用
(bool success, bytes memory returnData) = 
    scientificCalculatorAddress.call(data);

// 解码返回数据
uint256 result = abi.decode(returnData, (uint256));`},newton_iteration:{name:"牛顿迭代法",icon:"📐",unlockAt:7,message:"你了解了牛顿迭代法！Solidity不支持浮点数，通过迭代逼近真实值是常用的数学算法实现方式。",code:`function squareRoot(int256 number) public pure returns(int256) {
    int256 result = number / 2;
    // 限制10轮，防止Gas耗尽
    for(uint256 i = 0; i < 10; i++) {
        result = (result + number / result) / 2;
    }
    return result;
}`},contract_composition:{name:"合约组合",icon:"🧩",unlockAt:8,message:"恭喜你掌握了合约组合！合约可以像乐高积木一样组合复用，构建复杂的去中心化应用。",code:`// Calculator合约组合了ScientificCalculator合约
contract Calculator {
    address public scientificCalculatorAddress;
    
    // 通过接口调用外部合约功能
    function calculatePower(uint256 base, uint256 exponent) 
        public view returns(uint256) {
        ScientificCalculator calc = 
            ScientificCalculator(scientificCalculatorAddress);
        return calc.power(base, exponent);
    }
}`},struct_definition:{name:"结构体定义",icon:"📦",unlockAt:1,message:"你刚刚使用了 `struct` 结构体！它可以打包多个不同类型的变量，创建自定义数据类型。",code:`struct UserProfile {
    string name;       // 用户姓名
    uint256 weight;    // 用户体重
    bool isRegistered; // 是否已注册
}

// 创建结构体实例
UserProfile memory newUser = UserProfile({
    name: "张三",
    weight: 70,
    isRegistered: true
});`},array_in_mapping:{name:"映射中的数组",icon:"🗂️",unlockAt:2,message:"你发现了 mapping 到数组的用法！这可以为每个用户存储一个运动记录列表。",code:`// mapping 到数组
mapping(address => WorkoutActivity[]) private workoutHistory;

// 添加新记录
workoutHistory[msg.sender].push(newWorkout);

// 获取记录数量
uint256 count = workoutHistory[msg.sender].length;`},multiple_mappings:{name:"多个映射组合",icon:"🗺️",unlockAt:3,message:"你看到了多个映射如何协同工作！userProfiles、totalWorkouts、totalDistance 分别存储不同维度的数据。",code:`// 多个映射协同工作
mapping(address => UserProfile) public userProfiles;        // 用户资料
mapping(address => WorkoutActivity[]) private workoutHistory;  // 运动历史
mapping(address => uint256) public totalWorkouts;            // 运动次数
mapping(address => uint256) public totalDistance;            // 总距离

// 它们共同构建了完整的数据视图`},storage_keyword:{name:"storage 关键字",icon:"💾",unlockAt:4,message:"你使用了 `storage` 关键字！它创建状态变量的引用，直接修改原数据而不是创建副本，非常节省 Gas。",code:`function updateWeight(uint256 _newWeight) public {
    // storage 关键字创建引用
    UserProfile storage profile = userProfiles[msg.sender];
    
    // 直接修改原数据，不创建副本
    profile.weight = _newWeight;
    
    // ❌ 如果用 memory，会创建副本，修改不会生效
    // UserProfile memory profile = userProfiles[msg.sender];
}`},event_logging:{name:"事件日志",icon:"📋",unlockAt:1,message:"你触发了事件！事件记录在区块链日志中，前端可以监听事件来获取实时通知。",code:`// 定义事件
event UserRegistered(address indexed userAddress, string name, uint256 timestamp);
event WorkoutLogged(address indexed user, string activityType, uint256 duration);

// 触发事件
emit UserRegistered(msg.sender, "张三", block.timestamp);
emit WorkoutLogged(msg.sender, "跑步", 1800);`},milestone_detection:{name:"里程碑检测",icon:"🏆",unlockAt:5,message:"你完成了里程碑检测！通过条件判断检测用户是否达成特定目标，并触发相应奖励。",code:`// 运动次数里程碑
if (totalWorkouts == 10) {
    emit MilestoneAchieved(msg.sender, "10次运动达成！");
} else if (totalWorkouts == 50) {
    emit MilestoneAchieved(msg.sender, "50次运动大师！");
}

// 距离里程碑（跨越检测）
if (totalDistance >= 100000 && totalDistance - distance < 100000) {
    emit MilestoneAchieved(msg.sender, "100公里里程碑！");
}`},timestamp_usage:{name:"时间戳使用",icon:"⏰",unlockAt:2,message:"你使用了 `block.timestamp`！它记录当前区块的时间戳，用于标记运动记录的时间。",code:`WorkoutActivity memory newWorkout = WorkoutActivity({
    activityType: "跑步",
    duration: 1800,
    distance: 5000,
    timestamp: block.timestamp  // 记录运动时间
});`},onlyRegistered_modifier:{name:"onlyRegistered 修饰符",icon:"🛡️",unlockAt:1,message:"你使用了 `onlyRegistered` 修饰符！它确保只有注册用户才能调用特定函数，保护合约安全。",code:`// 定义修饰符
modifier onlyRegistered() {
    require(userProfiles[msg.sender].isRegistered, "User not registered");
    _;  // 继续执行函数
}

// 使用修饰符
function logWorkout(...) public onlyRegistered {
    // 只有注册用户才能执行
}`}},Qf={inheritance:{name:"合约继承",icon:"🧬",unlockAt:1,message:"你刚刚体验了合约继承！VaultMaster 通过 `is Ownable` 继承了父合约的所有功能，这是代码复用的核心机制。",code:`// 父合约
contract Ownable {
    address private owner;
    // ...
}

// 子合约继承父合约
contract VaultMaster is Ownable {
    // 自动拥有 Ownable 的所有功能
    function withdraw() public onlyOwner {
        // 可以使用继承的 onlyOwner 修饰符
    }
}`},import_statement:{name:"导入语句",icon:"📥",unlockAt:2,message:"你了解了 `import` 语句！它允许合约引用其他文件中的合约定义，是模块化开发的基础。",code:`// 导入外部合约
import "./Ownable.sol";

// 现在可以使用 Ownable 合约了
contract VaultMaster is Ownable {
    // ...
}`},constructor:{name:"构造函数",icon:"🏗️",unlockAt:1,message:"你刚刚了解了构造函数！它在合约部署时自动执行一次，用于初始化关键状态变量。",code:`contract Ownable {
    address private owner;
    
    // 构造函数：部署时自动执行
    constructor() {
        owner = msg.sender;  // 设置部署者为所有者
    }
}`},private_visibility:{name:"私有可见性",icon:"🔒",unlockAt:2,message:"你了解了 `private` 可见性！它确保变量只能在当前合约内部访问，提供最强的封装保护。",code:`contract Ownable {
    // private：只有当前合约可以访问
    address private owner;
    
    // public：任何人都可以访问
    function ownerAddress() public view returns (address) {
        return owner;  // 通过函数间接访问
    }
}`},event_logging:{name:"事件日志",icon:"📋",unlockAt:1,message:"你触发了事件！事件是合约与前端通信的重要机制，记录关键操作到区块链日志中。",code:`// 定义事件
event DepositSuccessful(
    address indexed depositor,
    uint256 amount
);

// 触发事件
function deposit() public payable {
    emit DepositSuccessful(msg.sender, msg.value);
}`},indexed_parameter:{name:"索引参数",icon:"🏷️",unlockAt:2,message:"你了解了 `indexed` 关键字！它允许前端按特定参数过滤事件日志，提高查询效率。",code:`// indexed 参数可以被过滤查询
event OwnershipTransferred(
    address indexed previousOwner,
    address indexed newOwner
);

// 前端可以按地址过滤事件
// 例如：查找特定用户的所有转账记录`},transfer_ownership:{name:"所有权转移",icon:"🔑",unlockAt:1,message:"你刚刚完成了所有权转移！这是合约管理的核心功能，确保合约可以安全地更换管理者。",code:`function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0), "Invalid address");
    
    address oldOwner = owner;
    owner = newOwner;
    
    emit OwnershipTransferred(oldOwner, newOwner);
}`},onlyOwner_modifier:{name:"onlyOwner 修饰符",icon:"🛡️",unlockAt:1,message:"你体验了 `onlyOwner` 修饰符的权限控制！它确保只有合约所有者才能执行敏感操作。",code:`// 定义修饰符
modifier onlyOwner() {
    require(msg.sender == owner, "Only owner");
    _;  // 继续执行被修饰的函数
}

// 使用修饰符保护函数
function withdraw() public onlyOwner {
    // 只有所有者可以执行
}`}},ep={constructor_mint:{name:"构造函数铸造",icon:"🪙",unlockAt:1,message:"你了解了构造函数铸造机制！合约部署时，构造函数会自动执行，从 address(0) 铸造代币给部署者。",code:`constructor(uint256 _initialSupply){
    // 计算实际总供应量
    totalSupply = _initialSupply * (10 ** decimals);
    // 将所有代币分配给部署者
    balanceOf[msg.sender] = totalSupply;
    // 触发转账事件，from地址为0表示新铸造
    emit Transfer(address(0), msg.sender, _initialSupply);
}`},zero_address_mint:{name:"零地址铸造",icon:"📍",unlockAt:1,message:"你了解了零地址的特殊含义！在 ERC20 中，Transfer(address(0), to, amount) 表示铸造新代币，Transfer(from, address(0), amount) 表示销毁代币。",code:`// 从零地址转出 = 铸造（创建新代币）
emit Transfer(address(0), msg.sender, amount);

// 转入零地址 = 销毁（永久移除代币）
emit Transfer(msg.sender, address(0), amount);`},internal_function:{name:"internal 函数",icon:"🔒",unlockAt:2,message:"你了解了 internal 函数！它只能在合约内部调用，外部无法直接访问。这是代码封装的重要手段，_transfer 就是典型的内部函数。",code:`// internal 函数：只能在合约内部调用
function _transfer(address _from, address _to, uint256 _value) 
    internal virtual {
    // 实际执行转账逻辑
    balanceOf[_from] -= _value;
    balanceOf[_to] += _value;
    emit Transfer(_from, _to, _value);
}

// public 函数调用 internal 函数
function transfer(address _to, uint256 _value) public returns (bool) {
    _transfer(msg.sender, _to, _value);  // 内部调用
    return true;
}`},virtual_function:{name:"virtual 函数",icon:"🧬",unlockAt:3,message:"你了解了 virtual 关键字！它允许子合约重写（override）父合约的函数。这是实现 ERC20 扩展（如 ERC20Pausable、ERC20Votes）的基础机制。",code:`// 父合约：标记函数可被重写
contract MyToken {
    function _transfer(address _from, address _to, uint256 _value) 
        internal virtual {  // ← virtual 允许重写
        // 基础转账逻辑
    }
}

// 子合约：重写父合约函数
contract MyTokenWithFee is MyToken {
    function _transfer(address _from, address _to, uint256 _value) 
        internal override {  // ← override 重写
        // 自定义逻辑（如收取手续费）
        super._transfer(_from, _to, _value);  // 调用父函数
    }
}`}},jh=t=>({function:"📖 这是函数的基本概念，它是智能合约的基本构建模块。",increment:"📖 自增操作是编程中常见的操作，用于快速增加数值。",uint256:"📖 uint256 是 Solidity 中最常用的整数类型，了解它很重要。",contract:"📖 智能合约是区块链上的自动执行代码，理解它的结构很关键。",string:"📖 string 类型用于存储文本数据，是智能合约中常用的数据类型之一。",private:"📖 private 关键字限制变量的访问范围，提高合约的安全性。",memory:"📖 memory 数据位置用于临时存储，只在函数执行期间存在。",view:"📖 view 函数不修改状态，不消耗 Gas，是优化合约性能的重要方法。",parameters:"📖 函数参数让函数能够接收外部数据，使函数更加灵活和可复用。",returns:"📖 returns 关键字定义函数返回值，让函数能够向调用者返回结果。",array:"📖 数组是存储多个相同类型数据的容器，在 Solidity 中广泛使用。",mapping:"📖 映射是 Solidity 中的键值对存储结构，通过键快速查找对应的值。",push:"📖 push 方法是数组的常用操作，可以在数组末尾动态添加元素。",compound_assignment:"📖 复合赋值运算符将运算和赋值结合在一起，使代码更加简洁。",constructor:"📖 构造函数只在合约部署时执行一次，用于初始化合约的状态变量。",msg_sender:"📖 msg.sender 表示当前调用合约的地址，是区块链交互的核心。",block_timestamp:"📖 block.timestamp 返回当前区块的时间戳，常用于时间相关的逻辑。",require:"📖 require 语句在条件不满足时回滚交易，是保证合约安全的重要机制。",external:"📖 external 函数只能从合约外部调用，比 public 更节省 Gas。",address_type:"📖 address 类型存储以太坊地址，是区块链交互的核心数据类型。",bool_type:"📖 bool 类型只有 true 或 false 两个值，用于标记状态。",modifier:"📖 修饰符用于为函数添加前置条件检查，是权限控制的重要机制。",zero_address:"📖 零地址 address(0) 表示一个无效的地址，通常用于检查地址参数是否有效。",return_statement:"📖 return 语句让函数返回指定的值给调用者，是函数输出结果的方式。",address_mapping_balance:"📖 地址映射 mapping(address => uint256) 是存储用户资产的核心数据结构，通过地址快速查找对应的余额。",payable:"📖 payable 关键字让函数能够接收以太币，这是处理资金交易的关键特性。",msg_value:"📖 msg.value 表示调用函数时发送的以太币数量（以wei为单位），是获取转账金额的标准方式。",wei_unit:"📖 wei 是以太币的最小单位，1 ETH = 10^18 wei，这是以太坊计价的基础单位。",ether_deposit_withdraw:"📖 存取逻辑包括检查余额、增减余额、验证输入，这是任何金融合约的基础。",nested_mapping:"📖 嵌套映射 mapping(A => mapping(B => C)) 允许你在 Solidity 中创建像多维数组或字典中嵌套字典的复杂数据结构。",address_payable:"📖 payable 地址类型拥有 transfer 和 call 方法来发送 Ether。没有 fallback 且非 payable 的地址无法接收以太币。",debt_tracking:"📖 债务追踪展示了区块链账本的不变性和透明性，确保每一笔债权和债务都在链上清晰可查的特性。",internal_transfer:"📖 内部账本系统(Internal Accounting)只改变合约内存的数字而不进行链上交易转账，是处理多高频微支付的最佳实操。",transfer_method:"📖 .transfer() 将转账可用 gas 固定为 2300 防止重入，但当目标接收方智能合约的 fallback 逻辑超过一定 gas 时会导致资金卡死。",call_method:"📖 .call() 提供低级别的外部调用功能，转账时能够转发所有剩余 gas 或自定义数量的 gas 以保证外部操作能顺利执行并返回回调状态。",withdraw_pattern:"📖 提现优于发送。要求用户主动调用 withdraw()，避免了遍历用户数组发钱（可能超出 block gas 限制）以及转账失败阻塞整个合约的风险。",modifier_onlyOwner:"📖 修饰符（Modifier）允许你在不重复编写核心检查逻辑的情况下，重用访问控制代码。`_` 符号代表了目标函数体的执行位置。",payable_tip:"📖 `payable` 是一个函数可见性/状态修饰符。如果没有它，任何尝试向该函数发送 Ether 的交易都会被以太坊虚拟机拒绝并回滚。",msg_value_tip:"📖 `msg.value` 是当前交易附带的以太币数量，以 wei 为单位。它是智能合约处理实时支付的桥梁。",address_balance:"📖 合约不仅可以操作别人的钱，还可以管理属于它自己的钱。`address(this).balance` 让你能实时掌控合约金库的‘水位’。",call_withdraw:"📖 `.call()` 是一个底层原语。在转账时，它能够处理复杂的 Fallback 逻辑，并明确返回一个成功/失败的布尔值，比旧的 `transfer` 更具鲁活性。",mapping_rates:"📖 虽然以太坊没有内置汇率，但我们可以通过合约内部的映射来手动维护一组兑换比例，从而实现'打赏 1 美元 = 支付 X 数量 ETH'的功能。",pure_function:"📖 pure 函数承诺不读取也不修改区块链的状态变量。这意味着它的执行结果完全取决于输入参数，可以在本地快速计算，不需要消耗 Gas。",view_function:"📖 view 函数可以读取状态变量但不修改它们。由于不修改状态，view 函数也可以在本地执行，不消耗 Gas，适合用于查询操作。",cross_contract_call:"📖 跨合约调用是 Solidity 的核心特性之一。通过合约地址，一个合约可以调用另一个合约的函数，实现功能的组合和复用，就像乐高积木一样。",interface_call:"📖 接口方式调用是最常用的跨合约调用方法。通过创建外部合约的接口实例，可以像调用本地函数一样调用外部合约，代码清晰易读。",low_level_call:"📖 底层 call 方法提供了最大的灵活性。它通过 abi.encodeWithSignature 编码函数调用，可以调用任何函数，即使接口未知。但使用起来更复杂，需要手动处理返回值。",newton_iteration:"📖 牛顿迭代法是一种快速逼近方程根的算法。在 Solidity 中，由于不支持浮点数运算，我们使用整数运算通过多次迭代来逼近真实值。限制迭代次数可以防止 Gas 耗尽。",contract_composition:"📖 合约组合是 Solidity 的重要设计理念。通过将功能拆分到多个合约，可以实现代码复用、降低复杂度、提高可维护性。这是构建复杂 DApp 的基础。",struct_definition:"📖 `struct` 结构体允许你定义自定义的数据类型，将多个不同类型的变量打包在一起。这是组织复杂数据的有效方式，让代码更加清晰和易于维护。",array_in_mapping:"📖 Solidity 允许将映射指向数组，如 `mapping(address => WorkoutActivity[])`。这样每个地址都有一个动态数组，非常适合存储用户的历史记录、交易列表等一对多的数据关系。",multiple_mappings:"📖 在实际应用中，经常使用多个 mapping 来存储不同维度的数据。比如一个 mapping 存用户资料，另一个存用户余额。通过同一个 key（如用户地址）可以关联访问多个数据结构。",storage_keyword:"📖 `storage` 和 `memory` 是 Solidity 中两个重要的数据位置关键字。`storage` 变量永久存储在区块链状态中，而 `memory` 变量只在函数执行期间临时存在。使用 `storage` 引用可以直接修改状态变量，节省 Gas。",event_logging:"📖 事件（Event）是 Solidity 的日志机制。通过 `emit` 触发事件，数据会被记录在区块链的交易日志中。前端可以监听事件来实现实时通知、记录历史等功能，事件是 DApp 前后端通信的重要桥梁。",milestone_detection:"📖 里程碑检测是游戏化应用的核心机制。通过条件判断（如 `if (count == 10)`）检测用户是否达成特定目标，并触发相应奖励或通知。这能激励用户持续使用产品。",timestamp_usage:"📖 `block.timestamp` 是当前区块的时间戳（Unix 时间，秒）。它常用于记录事件发生时间、设置时间限制、计算时间差等。注意它由矿工设置，存在约15秒的误差，不应用于精确计时。",onlyRegistered_modifier:"📖 修饰符（Modifier）是 Solidity 的复用机制，用于在函数执行前添加前置条件检查。`onlyRegistered` 确保只有满足条件的用户（已注册）才能调用函数。这简化了代码，避免了在每个函数中重复写检查逻辑。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Jh=t=>({inheritance:"📖 合约继承是 Solidity 的核心特性之一。通过 `contract VaultMaster is Ownable`，子合约可以继承父合约的所有状态变量和函数，实现代码复用和模块化设计。",import_statement:"📖 `import` 语句用于导入其他合约文件，让你可以在当前合约中使用外部定义的合约。这是实现合约组合和代码复用的基础。",constructor:"📖 构造函数 `constructor()` 在合约部署时自动执行一次，用于初始化合约的状态变量。在 Ownable 中，它将合约部署者设置为初始所有者。",private_visibility:"📖 `private` 可见性修饰符表示变量只能在当前合约内部访问，即使是子合约也无法直接访问。这提供了最强的封装性，保护敏感数据。",event_logging:"📖 事件（Event）用于记录重要的合约操作到区块链日志中。前端可以监听事件来实现实时通知。`DepositSuccessful` 和 `WithdrawSuccessful` 记录了资金流动。",indexed_parameter:"📖 `indexed` 关键字标记事件参数，允许前端按该参数过滤和搜索事件日志。这在处理大量事件时非常有用，可以快速找到特定地址相关的事件。",transfer_ownership:"📖 `transferOwnership()` 函数实现了合约所有权的转移。只有当前所有者可以调用此函数，并且通常会检查新地址是否有效（非零地址）。",onlyOwner_modifier:"📖 `onlyOwner` 修饰符是权限控制的核心机制。它检查 `msg.sender` 是否等于 `owner`，如果不是则回滚交易。这是保护敏感操作（如提款）的标准做法。"})[t]||"📖 点击其他概念标签查看更多详细解释。",tp={erc20_standard:{name:"ERC20 标准",icon:"🪙",unlockAt:1,message:"你了解了 ERC20 代币标准！它是以太坊上最通用的代币规范，定义了代币的基本功能接口。",code:`// ERC20 标准接口
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}`},mapping_nested:{name:"嵌套映射",icon:"🗂️",unlockAt:2,message:"你发现了嵌套映射 mapping(address => mapping(address => uint256))！这是存储授权额度的核心数据结构。",code:`// 嵌套映射：记录每个地址授权给其他地址的额度
mapping(address => mapping(address => uint256)) public allowance;

// 示例：Alice 授权 Carol 使用 500 COM
allowance[Alice][Carol] = 500;  // Carol 可以使用 Alice 的 500 COM`},event:{name:"事件日志",icon:"📋",unlockAt:3,message:"你触发了事件！Transfer 和 Approval 事件记录了代币的转移和授权操作，前端可以监听这些事件。",code:`// 定义事件
event Transfer(address indexed from, address indexed to, uint256 value);
event Approval(address indexed owner, address indexed spender, uint256 value);

// 触发事件
emit Transfer(msg.sender, _to, _value);
emit Approval(msg.sender, _spender, _value);`},transfer:{name:"转账函数",icon:"💸",unlockAt:4,message:"你使用了 transfer 函数！它是 ERC20 最核心的功能，允许用户将自己的代币转给他人。",code:`// 转账函数：调用者将自己的代币转给他人
function transfer(address _to, uint256 _value) public returns (bool) {
    require(balanceOf[msg.sender] >= _value, "Not enough balance");
    _transfer(msg.sender, _to, _value);
    return true;
}`},approve:{name:"授权函数",icon:"✅",unlockAt:5,message:"你使用了 approve 函数！它允许你授权他人使用你的代币，这是 DeFi 应用的基础机制。",code:`// 授权函数：允许 spender 使用调用者的代币
function approve(address _spender, uint256 _value) public returns (bool) {
    allowance[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
}`},allowance:{name:"授权额度",icon:"🔍",unlockAt:6,message:"你查询了 allowance！它返回被授权者可以使用的代币数量，是授权机制的重要组成部分。",code:`// 查询授权额度
function allowance(address _owner, address _spender) 
    public view returns (uint256) {
    return allowance[_owner][_spender];
}

// 使用场景：检查 Carol 还能使用 Alice 多少代币
uint256 remaining = allowance(Alice, Carol);  // 返回剩余额度`},transferFrom:{name:"代转账函数",icon:"🔄",unlockAt:7,message:"你使用了 transferFrom 函数！它允许被授权者代替他人转账，实现了'第三方代付'功能。",code:`// 代转账函数：被授权者从他人账户转账
function transferFrom(address _from, address _to, uint256 _value) 
    public returns (bool) {
    require(balanceOf[_from] >= _value, "Not enough balance");
    require(allowance[_from][msg.sender] >= _value, "Allowance too low");
    
    allowance[_from][msg.sender] -= _value;  // 减少授权额度
    _transfer(_from, _to, _value);
    return true;
}`}},Xh=t=>({erc20_standard:"🪙 太棒了！你了解了 ERC20 代币标准！这是以太坊上最通用的代币规范。👉 查询 Alice 余额来学习 mapping 存储机制！",mapping_nested:"🗂️ 优秀！你了解了嵌套映射！这是 ERC20 授权机制的核心数据结构。👉 转账给 Bob 来学习事件和转账函数！",event:"📋 很好！你触发了事件日志！👉 继续探索更多功能！",transfer:"💸 太棒了！你使用了 transfer 函数！👉 授权给 Carol 来学习授权机制！",approve:"✅ 很好！你使用了 approve 函数！👉 查询 allowance 来学习授权额度查询！",allowance:"🔍 优秀！你了解了授权额度查询！👉 切换到 Carol 执行代转账来学习 transferFrom！",transferFrom:"🔄 太棒了！你使用了 transferFrom 函数！🎉 你已掌握 ERC20 全部核心功能！"})[t]||"📖 点击其他概念标签查看更多详细解释。",Yh=t=>({constructor_mint:"📖 构造函数铸造是 ERC20 代币的常见模式。合约部署时，构造函数自动执行，创建所有代币并分配给部署者。Transfer(address(0), ...) 事件表示这是铸造操作。",zero_address_mint:"📖 零地址 address(0) 在 ERC20 中有特殊含义。Transfer 事件中 from=address(0) 表示铸造（创建新代币），to=address(0) 表示销毁（移除代币）。这是行业标准约定。",internal_function:"📖 internal 是 Solidity 的可见性修饰符之一。与 public/external 不同，internal 函数只能在当前合约内部调用，不能从外部访问。这是代码封装的重要手段，_transfer 就是典型的内部辅助函数。",virtual_function:"📖 virtual 关键字标记函数可以被继承合约重写（override）。这是实现可扩展 ERC20（如带手续费的代币、可暂停代币）的基础。子合约使用 override 关键字重写，并用 super 调用父合约函数。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Zh=t=>({erc20_standard:"📖 ERC20 是以太坊上最常用的代币标准，定义了代币的基本功能接口，包括转账、授权、查询余额等。所有符合 ERC20 标准的代币都可以在支持该标准的钱包和交易所中使用。",mapping_nested:"📖 嵌套映射 mapping(address => mapping(address => uint256)) 是 ERC20 中存储授权额度的核心数据结构。外层映射的 key 是代币持有者，内层映射的 key 是被授权者，value 是授权额度。",event:"📖 事件（Event）是 Solidity 的日志机制。ERC20 定义了 Transfer 和 Approval 两个标准事件，分别记录代币转移和授权操作。前端可以监听这些事件来实时更新界面。",transfer:"📖 transfer 函数是 ERC20 最核心的功能，允许代币持有者将自己的代币转给他人。函数会检查余额是否充足，然后更新双方余额并触发 Transfer 事件。",approve:"📖 approve 函数实现了授权机制，允许代币持有者授权他人使用自己的代币。这在 DeFi 应用中非常重要，比如授权 DEX 使用你的代币进行交易。",allowance:"📖 allowance 函数用于查询授权额度，返回被授权者还可以使用持有者的代币数量。在执行 transferFrom 之前，通常需要先检查 allowance 是否充足。",transferFrom:"📖 transferFrom 函数实现了代转账功能，允许被授权者代替持有者转账。这是 ERC20 的高级功能，常用于需要第三方代为执行转账的场景，如自动扣款、代理交易等。"})[t]||"📖 点击其他概念标签查看更多详细解释。",np={interface_definition:{name:"接口定义",icon:"🔌",unlockAt:1,message:"你了解了接口！接口定义了合约必须实现的功能规范，是实现多态和解耦的基础。",code:`// IDepositBox.sol - 定义存款盒的标准接口
interface IDepositBox {
    function storeSecret(string calldata secret) external;
    function getSecret() external view returns (string memory);
    function transferOwnership(address newOwner) external;
    function getBoxType() external view returns (string memory);
    function getOwner() external view returns (address);
}`},abstract_contract:{name:"抽象合约",icon:"🎭",unlockAt:2,message:"你了解了抽象合约！抽象合约可以包含未实现的函数（纯虚函数），不能被直接部署，只能被继承。",code:`// BaseDepositBox.sol - 抽象基础合约
abstract contract BaseDepositBox is IDepositBox {
    string internal secret;
    address internal owner;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }
    
    // 纯虚函数：必须由子合约实现
    function getBoxType() public view virtual returns (string memory);
}`},inheritance:{name:"合约继承",icon:"🧬",unlockAt:3,message:"你体验了合约继承！BasicDepositBox 继承了 BaseDepositBox 的所有功能，无需额外代码。",code:`// BasicDepositBox.sol - 简单继承
contract BasicDepositBox is BaseDepositBox {
    // 只继承父合约，不添加新功能
    
    function getBoxType() public view override returns (string memory) {
        return "Basic";
    }
}`},override_keyword:{name:"重写关键字",icon:"📝",unlockAt:4,message:"你使用了 override 关键字！子合约使用 override 重写父合约的虚函数，实现自定义行为。",code:`// 父合约中的虚函数
function getBoxType() public view virtual returns (string memory);

// 子合约重写
function getBoxType() public view override returns (string memory) {
    return "Premium";  // 自定义实现
}`},virtual_function:{name:"虚函数",icon:"🔮",unlockAt:5,message:"你了解了 virtual 关键字！它标记函数可以被继承合约重写，是实现多态的基础。",code:`// 父合约：标记函数可被重写
function storeSecret(string calldata _secret) 
    public virtual onlyOwner {
    secret = _secret;
}

// 子合约：重写并扩展功能
function storeSecret(string calldata _secret) 
    public override onlyOwner {
    // 自定义逻辑...
    secret = _secret;
}`},super_keyword:{name:"父类调用",icon:"⬆️",unlockAt:6,message:"你使用了 super 关键字！super 调用父合约的函数，在重写时复用父类的逻辑。",code:`// TimeLocked 重写 getSecret
function getSecret() public view override onlyOwner timeUnlocked 
    returns (string memory) {
    // 可以在这里添加自定义逻辑
    return super.getSecret();  // 调用父合约的实现
}`},modifier_combination:{name:"修饰器组合",icon:"🔗",unlockAt:7,message:"你体验了修饰器组合！多个修饰器可以组合使用，函数必须同时满足所有条件才能执行。",code:`// 修饰器组合：同时检查所有者和时间
function getSecret() public view 
    onlyOwner           // 检查1：必须是所有者
    timeUnlocked        // 检查2：必须已解锁
    returns (string memory) {
    return secret;
}`},factory_pattern:{name:"工厂模式",icon:"🏭",unlockAt:8,message:"你体验了工厂模式！VaultManager 负责创建和管理所有存款盒，是创建型设计模式的经典应用。",code:`// VaultManager.sol - 工厂合约
contract VaultManager {
    function createBasicBox() public returns (address) {
        BasicDepositBox newBox = new BasicDepositBox();
        allBoxes.push(address(newBox));
        userBoxes[msg.sender].push(address(newBox));
        return address(newBox);
    }
}`},metadata_storage:{name:"元数据存储",icon:"🏷️",unlockAt:9,message:"你使用了元数据功能！Premium 版本可以存储额外信息，展示了继承扩展的实际应用。",code:`// PremiumDepositBox - 扩展功能
contract PremiumDepositBox is BaseDepositBox {
    string private metadata;  // 额外状态变量
    
    function setMetadata(string calldata _metadata) public onlyOwner {
        metadata = _metadata;
    }
    
    function getMetadata() public view onlyOwner returns (string memory) {
        return metadata;
    }
}`},time_lock:{name:"时间锁定",icon:"⏰",unlockAt:10,message:"你创建了时间锁定存款盒！解锁前无法取出秘密，展示了修饰器在权限控制中的强大作用。",code:`// TimeLockedDepositBox - 时间锁
contract TimeLockedDepositBox is BaseDepositBox {
    uint256 private unlockTime;
    
    modifier timeUnlocked() {
        require(block.timestamp >= unlockTime, "Still locked");
        _;
    }
    
    function getSecret() public view 
        override onlyOwner timeUnlocked returns (string memory) {
        return secret;
    }
}`}},rp={compact_datatype:{name:"紧凑数据类型",icon:"📦",unlockAt:1,message:"你了解了紧凑数据类型！uint8、uint32 等小整数类型相比 uint256 可以节省大量存储空间和 Gas。",code:`// 使用紧凑数据类型优化存储
uint8 public proposalCount;       // 只占 1 字节 (0-255)
uint32 public voteCount;          // 只占 4 字节 (0-42亿)
// 相比 uint256 的 32 字节，节省了大量存储！`},uint8_uint32:{name:"小整数类型",icon:"🔢",unlockAt:2,message:"你了解了 uint8 和 uint32！它们分别只需 1 字节和 4 字节，远小于 uint256 的 32 字节。",code:`// 紧凑整数类型对比
uint8  a;  // 1 字节:  0 - 255
uint16 b;  // 2 字节:  0 - 65535
uint32 c;  // 4 字节:  0 - 42亿
uint256 d; // 32 字节: 0 - 超大数字

// 根据需求选择合适的类型，节省 Gas！`},bytes32_string:{name:"bytes32 vs string",icon:"📝",unlockAt:3,message:"你了解了 bytes32 和 string 的区别！bytes32 使用固定存储，更节省 Gas，适合存储短文本和哈希值。",code:`// bytes32 vs string 对比
string public name;           // 动态长度，存储成本高
bytes32 public proposalHash;  // 固定 32 字节，更省 Gas

// 对于固定长度的短文本，bytes32 更优！`},storage_optimization:{name:"存储优化",icon:"💾",unlockAt:4,message:"你体验了存储优化！通过使用紧凑数据类型和合理的数据结构，可以大幅降低合约的存储成本。",code:`// 存储优化技巧
// 1. 使用最小够用的整数类型
uint8 count;  // 而非 uint256

// 2. 将多个小变量打包到同一槽位
uint8 a;  // 槽位 1 (前 1 字节)
uint8 b;  // 槽位 1 (第 2 字节)
address c;  // 槽位 1 (后 20 字节)

// 3. 使用位运算存储布尔数组
uint256 flags;  // 可存储 256 个布尔值`},bit_operation:{name:"位运算技巧",icon:"⚡",unlockAt:5,message:"你了解了位运算的强大之处！通过位运算，1 个 uint256 可以存储 256 个提案的投票状态，节省约 40% Gas！",code:`// 位运算存储投票状态
uint256 public voterData;  // 选民的投票位图

// 检查是否对提案 n 投票
uint256 mask = 1 << n;
bool hasVoted = (voterData & mask) != 0;

// 记录投票
voterData = voterData | mask;  // 设置对应位为 1

// 1 个 uint256 存储 256 个提案状态！`},mapping_storage:{name:"映射存储",icon:"🗺️",unlockAt:6,message:"你了解了映射的高效存储！mapping 是 Solidity 中最常用的数据结构，通过哈希表实现快速查找。",code:`// 映射存储投票记录
mapping(address => uint256) public voterRegistry;
// 地址 → 投票位图

mapping(uint256 => uint32) public proposalVotes;
// 提案ID → 投票数

// 映射提供 O(1) 时间复杂度的查找！`},mask_check:{name:"掩码检查",icon:"🎭",unlockAt:7,message:"你了解了掩码检查的机制！通过与运算，可以快速检查某个位是否已设置，防止重复投票。",code:`// 掩码检查防止重复投票
uint256 mask = 1 << proposalId;
uint256 voterData = voterRegistry[msg.sender];

// 检查是否已投票
if ((voterData & mask) != 0) {
    revert("Already voted");
}

// 位运算检查高效且节省 Gas！`},timestamp_block:{name:"时间戳使用",icon:"⏰",unlockAt:8,message:"你了解了 block.timestamp 的使用！它提供了当前区块的时间戳，常用于实现时间锁和投票截止。",code:`// 使用 block.timestamp 实现投票时间窗口
uint256 public startTime;
uint256 public duration;

modifier withinDeadline() {
    require(
        block.timestamp >= startTime &&
        block.timestamp <= startTime + duration,
        "Voting closed"
    );
    _;
}`},event_logging:{name:"事件日志",icon:"📋",unlockAt:9,message:"你了解了事件日志的作用！事件记录在链上日志中，可供链下应用索引和监听，是实现前端通知的基础。",code:`// 事件记录提案状态变化
event ProposalCreated(
    uint256 indexed id,
    string name,
    uint256 endTime
);

event Voted(
    address indexed voter,
    uint256 indexed proposalId
);

// indexed 参数可被链下高效检索！`}},Qh=t=>({compact_datatype:"📦 太棒了！你了解了紧凑数据类型优化！uint8、uint32 相比 uint256 节省大量存储！👆 点击上方「存储可视化」区域学习更多！",uint8_uint32:"🔢 优秀！你了解了 uint8 和 uint32！它们分别只需 1 字节和 4 字节，远小于 uint256 的 32 字节！👝 创建提案查看 bytes32！",bytes32_string:"📝 很好！你了解了 bytes32 vs string！bytes32 固定 32 字节，比动态 string 更省 Gas！👝 继续创建提案或尝试投票学习位运算！",storage_optimization:"💾 太棒了！你体验了存储优化！通过紧凑数据类型和合理结构，大幅降低存储成本！⚡ 现在尝试投票来学习位运算！",bit_operation:"⚡ 太棒了！你了解了位运算的强大！1 个 uint256 存储 256 个投票状态，节省约 40% Gas！🗺️ 映射高效存储选民数据！⏰ 使用时间戳验证投票窗口！👉 尝试重复投票体验掩码检查！",mapping_storage:"🗺️ 优秀！你了解了映射的高效存储！mapping 通过哈希表实现 O(1) 查找，是 Solidity 最常用的数据结构！👉 继续探索其他功能！",mask_check:"🎭 很好！你体验了掩码检查！通过与运算快速检查位状态，防止重复投票！👉 等待提案结束执行提案学习事件日志！",timestamp_block:"⏰ 不错！你了解了 block.timestamp 的使用！它提供当前区块时间戳，用于实现时间锁和投票截止！👉 尝试重复投票或执行提案！",event_logging:"📋 恭喜！你了解了事件日志！事件记录在链上日志中，可供链下应用索引和监听！🎉 你已掌握 Day 15 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",e0=t=>({compact_datatype:"📖 紧凑数据类型是 Solidity Gas 优化的基础。uint8 只占 1 字节（存储范围 0-255），uint32 只占 4 字节（0-42亿），而 uint256 占 32 字节。根据数据范围选择最小够用的类型，可以显著降低存储成本。",uint8_uint32:"📖 uint8、uint16、uint32 等小整数类型相比 uint256 可以节省大量存储空间。当变量值范围有限时，应该优先使用这些紧凑类型。例如：提案数量（uint8）、投票数（uint32）都不需要 uint256 的巨大范围。",bytes32_string:"📖 bytes32 是固定长度的字节数组，始终占用 32 字节。string 是动态长度，存储成本更高且引入额外的 Gas 消耗。对于固定长度的短文本（如提案名称、哈希值），bytes32 是更优的选择。",storage_optimization:"📖 存储优化是智能合约 Gas 优化的核心。技巧包括：1. 使用最小够用的整数类型（uint8 而非 uint256）；2. 将多个小变量打包到同一存储槽位；3. 使用位运算存储布尔数组。这些优化可节省 30-50% 的存储成本。",bit_operation:"📖 位运算利用整数类型的二进制位存储多个布尔值。1 个 uint256 有 256 个位，可以存储 256 个布尔状态（如是否对某提案投票）。相比使用 mapping(uint256 => bool)，位运算节省约 40% 的 Gas。关键操作：左移(1<<n)生成掩码、与(&)检查、或(|)设置。",mapping_storage:"📖 mapping 是 Solidity 的哈希表实现，提供 O(1) 时间复杂度的查找。mapping(address => uint256) 存储地址到数据的映射，mapping(uint256 => uint32) 存储索引到数据的映射。mapping 是状态变量最常用的数据结构，高效且灵活。",mask_check:"📖 掩码（Mask）是位运算的核心概念。掩码是一个二进制数，只有特定位为 1。通过 & 运算检查位：(data & mask) != 0 表示该位已设置。通过 | 运算设置位：data | mask 将对应位设为 1。这种方法快速且节省 Gas。",timestamp_block:"📖 block.timestamp 是当前区块的时间戳（秒级）。它由矿工/验证者提供，可能有少许偏差（几秒到几分钟），但适合大多数场景。常用于实现时间锁、投票截止、合约到期等需要时间判断的功能。",event_logging:"📖 事件（Event）是 Solidity 的日志机制，记录在链上日志中（不占用状态存储）。事件可以有 indexed 参数（最多 3 个），可被链下应用高效检索。事件是实现前端通知、链下索引、历史记录查询的基础，是 DApp 交互的关键。"})[t]||"📖 点击其他概念标签查看更多详细解释。",t0=t=>({interface_definition:"🔌 欢迎来到 Day 14！你了解了接口定义 - 它规定了所有存款盒必须实现的功能。👉 创建任意存款盒来解锁抽象合约！",abstract_contract:"🎭 太棒了！你了解了抽象合约 - 它实现了通用功能但不能直接部署。👉 创建 Basic 存款盒来学习合约继承！",inheritance:"🧬 优秀！你体验了合约继承！BasicDepositBox 继承了 BaseDepositBox 的所有功能。👉 创建 Premium 或 TimeLocked 来学习 override！",override_keyword:"📝 很好！你使用了 override 关键字重写父合约函数。👉 创建 TimeLocked 存款盒来学习 virtual 和修饰器组合！",virtual_function:"🔮 太棒了！你了解了 virtual 关键字 - 它允许子合约重写父函数。👉 在锁定期间尝试取秘密来体验修饰器组合！",super_keyword:"⬆️ 优秀！你使用了 super 调用父合约函数。👉 创建第2个存款盒来体验工厂模式！",modifier_combination:"🔗 太棒了！你体验了修饰器组合 - 需要同时满足 onlyOwner 和 timeUnlocked！👉 创建 Premium 存款盒来学习元数据存储！",factory_pattern:"🏭 优秀！你体验了工厂模式！VaultManager 负责创建和管理所有存款盒。👉 转移所有权并更新记录来完成体验！",metadata_storage:"🏷️ 很好！你使用了元数据功能！Premium 版本可以存储额外信息。👉 查看完整代码来复习所有知识点！",time_lock:"⏰ 太棒了！你创建了时间锁定存款盒！解锁前无法取出秘密。🎉 你已掌握抽象合约、接口与工厂模式！",store_secret:"🔐 太棒了！你成功存入了秘密！Secret 已被安全存储在合约中。👉 尝试取出秘密来体验访问控制！",get_secret:"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。👉 尝试设置元数据或创建更多存款盒！",transfer_ownership:"🔑 很好！你转移了存款盒的所有权！新的所有者现在可以管理这个存款盒。👉 切换到新所有者完成转移流程！"})[t]||"📖 点击其他概念标签查看更多详细解释。",n0=t=>({interface_definition:"📖 接口（Interface）是 Solidity 中定义合约规范的方式。它只声明函数签名，不包含实现。任何实现该接口的合约都必须提供所有函数的具体实现。接口实现了多态和解耦，让不同的合约可以以统一的方式交互。",abstract_contract:"📖 抽象合约（Abstract Contract）是不能被直接部署的合约，它通常包含一个或多个纯虚函数（没有实现的函数）。抽象合约用于定义子合约必须实现的接口，同时提供一些通用的实现代码，是代码复用的重要机制。",inheritance:"📖 合约继承是 Solidity 的核心特性之一。通过 `contract Child is Parent`，子合约可以继承父合约的所有状态变量和函数。继承实现了代码复用，让开发者可以基于现有合约构建更复杂的功能。",override_keyword:"📖 override 关键字用于显式声明子合约重写了父合约的虚函数。从 Solidity 0.6.0 开始，重写函数必须使用 override 关键字，这提高了代码的可读性和安全性，防止意外重写。",virtual_function:"📖 virtual 关键字标记函数可以被继承合约重写。父合约的函数默认不能被重写，必须显式标记为 virtual。这是 Solidity 的设计选择，防止意外的函数重写导致安全问题。",super_keyword:"📖 super 关键字用于调用父合约的函数。在重写函数时，super 让你可以复用父类的逻辑，然后添加或修改特定行为。这在需要扩展而非完全替换父类功能时非常有用。",modifier_combination:"📖 多个修饰器可以组合使用，函数必须同时满足所有修饰器的条件才能执行。修饰器按声明顺序执行，每个修饰器的 `_` 代表被修饰函数的代码。这是实现复杂权限控制的有效方式。",factory_pattern:"📖 工厂模式是一种创建型设计模式，使用专门的工厂合约来创建和管理其他合约。VaultManager 就是工厂合约，它负责创建存款盒并追踪所有权。工厂模式实现了创建逻辑与使用逻辑的分离。",metadata_storage:"📖 元数据存储展示了继承扩展的实际应用。PremiumDepositBox 在继承 BaseDepositBox 的基础上，添加了 metadata 状态变量和相关函数，实现了功能的扩展，而不影响基础功能。",time_lock:"📖 时间锁定是一种常见的 DeFi 安全机制。TimeLockedDepositBox 使用 block.timestamp 和修饰器实现时间锁，只有在指定时间后才能执行特定操作。这保护了用户资产，防止冲动操作。"})[t]||"📖 点击其他概念标签查看更多详细解释。",sp={struct_definition:{name:"结构体定义",icon:"🏗️",unlockAt:1,message:"你了解了结构体定义！struct 允许你将多个相关数据组合成一个自定义类型。",code:`// 定义玩家资料结构体
struct PlayerProfile {
    string name;    // 玩家名称
    string avatar;  // 头像标识
}

// 创建结构体实例
PlayerProfile memory profile = PlayerProfile("Alice", "avatar1");`},mapping_storage:{name:"映射存储",icon:"🗺️",unlockAt:2,message:"你了解了映射存储！mapping 是 Solidity 中最常用的键值对存储结构，提供 O(1) 查找效率。",code:`// 映射存储键值对
mapping(address => PlayerProfile) public profiles;
mapping(string => address) public plugins;

// 存储和读取
profiles[msg.sender] = PlayerProfile(name, avatar);
PlayerProfile memory p = profiles[user];`},plugin_registration:{name:"插件注册",icon:"🔌",unlockAt:3,message:"你体验了插件注册！通过 mapping 将字符串标识符映射到合约地址，实现动态插件管理。",code:`// 注册插件
function registerPlugin(string memory key, address pluginAddress) external {
    plugins[key] = pluginAddress;
}

// 使用示例
registerPlugin("weapon", 0x1234...);`},low_level_call:{name:"低级别调用",icon:"⚡",unlockAt:4,message:"你使用了低级别调用！call 是 EVM 的底层指令，允许动态调用任何合约函数。",code:`// 使用 call 动态调用插件
(bool success, ) = plugin.call(data);
require(success, "Plugin execution failed");

// call 可以修改状态，返回 (bool, bytes)`},abi_encoding:{name:"ABI编码",icon:"🔢",unlockAt:4,message:"你了解了 ABI 编码！Solidity 使用 ABI 标准将函数调用编码为字节码，函数选择器是前4字节。",code:`// ABI 编码函数调用
bytes memory data = abi.encodeWithSignature(
    "setWeapon(address,string)", 
    user, 
    weapon
);

// 函数选择器: keccak256("setWeapon(address,string)")[0:4]`},staticcall:{name:"静态调用",icon:"👁️",unlockAt:5,message:"你使用了静态调用！staticcall 保证被调用的合约不会修改状态，适合查询操作。",code:`// 使用 staticcall 进行只读调用
(bool success, bytes memory result) = plugin.staticcall(data);
require(success, "Call failed");

// 解码返回值
string memory value = abi.decode(result, (string));`},dynamic_delegation:{name:"动态委托",icon:"🔄",unlockAt:6,message:"你体验了动态委托！一个核心合约可以管理多个插件，实现功能的模块化扩展。",code:`// PluginStore 作为核心，动态委托给不同插件
pluginStore.runPlugin("weapon", ...);
pluginStore.runPlugin("achievement", ...);

// 新增插件无需修改核心合约代码`},contract_interop:{name:"合约互操作",icon:"🌐",unlockAt:7,message:"你掌握了合约互操作！多个合约通过标准接口无缝协作，构建复杂的去中心化应用。",code:`// 插件系统实现合约间的松耦合协作
// PluginStore (核心) → WeaponPlugin (功能)
//                    → AchievementPlugin (功能)

// 合约像乐高积木一样组合使用`}},ip={proxy_pattern:{name:"代理模式",icon:"📦",unlockAt:1,message:"你了解了代理模式！这是可升级合约的核心架构，将数据存储与逻辑执行分离。",code:`// 代理合约存储数据，逻辑合约执行业务逻辑
// 用户调用 Proxy → Proxy 通过 delegatecall 调用 Logic
// 数据存储在 Proxy 中，Logic 只包含代码`},delegatecall:{name:"委托调用",icon:"🔄",unlockAt:2,message:"你了解了 delegatecall！它在调用者（代理合约）的存储上下文中执行被调用合约（逻辑合约）的代码。",code:`// delegatecall 关键点：
// 1. 在代理合约的存储上下文中执行
// 2. msg.sender 保持为原始调用者
// 3. msg.value 保持不变
// 4. 代码在逻辑合约，数据在代理合约

assembly {
    let result := delegatecall(gas(), impl, 0, calldatasize(), 0, 0)
}`},storage_layout:{name:"存储布局",icon:"🔀",unlockAt:3,message:"你了解了存储布局！代理合约和逻辑合约必须使用完全相同的存储变量顺序，否则升级后数据会错乱。",code:`// 存储布局必须一致！
contract SubscriptionStorageLayout {
    address public logicContract;  // slot 0
    address public owner;          // slot 1
    mapping(address => Subscription) public subscriptions;  // slot 2
    mapping(uint8 => uint256) public planPrices;           // slot 3
    mapping(uint8 => uint256) public planDuration;         // slot 4
    uint256[50] private __gap;     // 预留空间，防止未来冲突
}`},upgrade_mechanism:{name:"升级机制",icon:"🚀",unlockAt:4,message:"你体验了合约升级！通过更新 logicContract 地址，可以替换业务逻辑而不丢失数据。",code:`// 升级逻辑合约
function upgradeTo(address _newLogic) external {
    require(msg.sender == owner, "Not owner");
    logicContract = _newLogic;  // 更新逻辑合约地址
}

// 升级后：
// - 数据保持不变（存储在代理合约）
// - 逻辑更新为新版本
// - 用户无感知切换`},logic_contract:{name:"逻辑合约",icon:"⚙️",unlockAt:4,message:"你了解了逻辑合约！它只包含业务逻辑代码，不存储数据，可以被替换升级。",code:`// 逻辑合约 V1
contract SubscriptionLogicV1 is SubscriptionStorageLayout {
    function subscribe(uint8 planId) external payable {
        // 业务逻辑...
    }
}

// 逻辑合约 V2（升级版本）
contract SubscriptionLogicV2 is SubscriptionStorageLayout {
    // 新增功能...
    function pauseSubscription() external { ... }
}`},fallback_function:{name:"回退函数",icon:"🔙",unlockAt:5,message:"你了解了 fallback 函数！代理合约使用它捕获所有未匹配的函数调用，并通过 delegatecall 转发给逻辑合约。",code:`// fallback 函数处理所有未匹配的调用
fallback() external payable {
    address impl = logicContract;
    require(impl != address(0), "Not set");
    
    assembly {
        calldatacopy(0, 0, calldatasize())
        let result := delegatecall(gas(), impl, 0, calldatasize(), 0, 0)
        returndatacopy(0, 0, returndatasize())
        switch result
        case 0 { revert(0, returndatasize()) }
        default { return(0, returndatasize()) }
    }
}`},data_persistence:{name:"数据持久化",icon:"💾",unlockAt:6,message:"你验证了数据持久化！升级合约后，之前创建的计划和订阅数据仍然保持不变。",code:`// 升级前：
// - 用户订阅了计划 1
// - 过期时间为 2024-12-31

// 升级后：
// - 订阅数据仍然存在
// - 过期时间不变
// - 可以查询到之前的订阅记录`},version_control:{name:"版本控制",icon:"📊",unlockAt:7,message:"你体验了版本控制！V2 新增了暂停/恢复功能，展示了如何在升级中添加新特性。",code:`// V1 功能：
// - createPlan
// - subscribe
// - isSubscribed

// V2 新增：
// - pauseSubscription  ⭐ 新功能
// - resumeSubscription ⭐ 新功能

// 升级后，V1 和 V2 的数据格式兼容`}},r0=t=>({struct_definition:"🏗️ 你了解了结构体定义！PlayerProfile 将 name 和 avatar 组合在一起。👉 设置玩家资料来解锁映射存储！",mapping_storage:"🗺️ 你的资料已保存到 mapping！通过键值对高效存储。👉 注册 weapon 插件来学习插件系统！",plugin_registration:"🔌 插件注册成功！地址已存入 plugins[key]。👉 点击「调用」执行插件函数！",low_level_call:"⚡ 低级别调用成功！使用了 EVM 的 call 指令。👉 查看 ABI 编码可视化！",abi_encoding:"🔢 ABI 编码完成！函数选择器是 keccak256 哈希的前4字节。👉 切换 staticcall 模式查询数据！",staticcall:"👁️ 静态调用成功！不消耗 Gas 的只读操作。👉 尝试切换到 achievement 插件！",dynamic_delegation:"🔄 动态委托系统运行中！一个核心管理多个插件。👉 在不同插件间切换体验互操作！",contract_interop:"🌐 合约互操作掌握！多个合约无缝协作。🎉 你已掌握 Day 16 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",s0=t=>({struct_definition:"📖 结构体(struct)允许你将多个相关的变量组合成一个自定义类型。PlayerProfile 包含 name 和 avatar 两个字段，可以像单个变量一样传递和存储。结构体是组织复杂数据的基础。",mapping_storage:"📖 映射(mapping)是哈希表结构，提供 O(1) 的读写效率。profiles 用 address 作为键存储玩家资料，plugins 用 string 作为键存储插件地址。mapping 是 Solidity 最常用的状态变量类型。",plugin_registration:"📖 插件注册将字符串标识符映射到合约地址，实现动态插件管理。这种设计模式被称为注册表模式(Registry Pattern)，允许运行时添加新功能而无需修改核心合约代码。",low_level_call:"📖 call 是 EVM 的低级别调用指令，允许你动态调用任何函数。它返回 (bool, bytes) 元组表示成功状态和返回值。call 非常灵活但不如普通调用安全，需要仔细检查返回值。",abi_encoding:"📖 ABI(Application Binary Interface)编码将函数签名和参数转换为字节码。函数选择器是函数签名的 keccak256 哈希的前4字节。abi.encodeWithSignature 自动处理编码过程。",staticcall:"📖 staticcall 与 call 类似，但被调用的合约不能修改状态(发送ETH、写存储等)。它适合查询操作，更安全且通常不消耗 Gas。staticcall 是 view 函数的底层实现。",dynamic_delegation:"📖 动态委托允许核心合约将操作转发给不同的插件合约，实现功能的模块化扩展。这种架构让系统可以灵活添加新功能，无需修改核心代码，是插件系统的基础。",contract_interop:"📖 合约互操作是 DeFi 和 DApp 的基础。通过标准接口和动态调用，不同合约可以像乐高积木一样组合使用。PluginStore 展示了如何通过统一接口协调多个独立合约。"})[t]||"📖 点击其他概念标签查看更多详细解释。",i0=t=>({proxy_pattern:"📦 你了解了代理模式！这是可升级合约的核心架构。👉 点击 delegatecall 说明来学习委托调用！",delegatecall:"🔄 你了解了 delegatecall！它在代理合约的存储上下文中执行逻辑合约的代码。👉 点击存储布局说明了解变量顺序的重要性！",storage_layout:"🔀 你了解了存储布局！代理合约和逻辑合约必须使用相同的存储变量顺序。👉 切换到 Owner 身份，创建第一个订阅计划！",upgrade_mechanism:"🚀 你体验了合约升级！通过更新 logicContract 地址，可以替换业务逻辑而不丢失数据。👉 切换到 User 身份，执行订阅操作！",logic_contract:"⚙️ 你了解了逻辑合约！它只包含业务逻辑代码，不存储数据。👉 订阅后查看 fallback 如何工作！",fallback_function:"🔙 你了解了 fallback 函数！代理合约使用它捕获所有未匹配的函数调用。👉 升级合约后查看数据是否仍然存在！",data_persistence:"💾 你验证了数据持久化！升级合约后，之前的数据仍然保持不变。👉 使用 V2 新功能（暂停/恢复）来对比版本差异！",version_control:"📊 你体验了版本控制！V2 新增了暂停/恢复功能。🎉 你已掌握 Day 17 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",o0=t=>({proxy_pattern:"📖 代理模式(Proxy Pattern)是可升级合约的核心架构。代理合约负责存储所有数据和 ETH，逻辑合约只包含业务代码。用户始终与代理合约交互，代理通过 delegatecall 将调用转发给当前逻辑合约。",delegatecall:"📖 delegatecall 是 EVM 的特殊调用方式，它在调用者（代理合约）的存储上下文中执行被调用合约（逻辑合约）的代码。这意味着逻辑合约可以读写代理合约的存储，但代码来自逻辑合约。msg.sender 和 msg.value 保持不变。",storage_layout:"📖 存储布局一致性是可升级合约的关键。代理合约和逻辑合约必须继承相同的存储布局基础合约（如 SubscriptionStorageLayout），确保变量顺序完全一致。如果顺序不同，升级后数据会错位，导致严重错误。",upgrade_mechanism:"📖 升级机制通过更新代理合约中的 logicContract 地址实现。upgradeTo() 函数只有 owner 可以调用，更新后所有新调用都会使用新逻辑。旧数据保持不变，因为数据存储在代理合约中，不在逻辑合约里。",logic_contract:"📖 逻辑合约(Logic Contract)只包含业务逻辑代码，不存储任何状态数据。它可以被替换升级而不影响数据。V1 和 V2 都是逻辑合约，它们继承相同的存储布局，但实现不同的功能。",fallback_function:"📖 fallback 函数是代理合约的核心。当用户调用代理合约中不存在的函数时，fallback 会被触发。它使用 delegatecall 将调用转发给逻辑合约，并返回执行结果。这是实现透明代理的关键。",data_persistence:"📖 数据持久化是可升级合约的重要特性。由于所有数据都存储在代理合约中，升级逻辑合约不会影响已有数据。用户升级前创建的订阅、计划等数据在升级后仍然可以正常访问和使用。",version_control:"📖 版本控制展示了如何在升级中添加新功能。V2 在 V1 的基础上新增了 pauseSubscription 和 resumeSubscription 功能，但保持数据格式兼容。这展示了可升级合约的灵活性和扩展性。"})[t]||"📖 点击其他概念标签查看更多详细解释。",op={oracle_interface:{name:"Chainlink接口",icon:"🔌",unlockAt:1,message:"你了解了 Chainlink 预言机接口！AggregatorV3Interface 是 Chainlink 标准接口，让智能合约能够获取链外数据。",code:`interface AggregatorV3Interface {
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}`},eth_usd_oracle:{name:"ETH/USD喂价",icon:"💰",unlockAt:2,message:"你使用了 ETH/USD 价格预言机！Chainlink 返回的价格有 8 位小数精度，需要正确处理。",code:`function getEthPrice() public view returns (uint256) {
    (, int256 price, , , ) = ethUsdPriceFeed.latestRoundData();
    // price = 300000000000 表示 $3000.00
    return uint256(price);
}`},random_generation:{name:"伪随机数生成",icon:"🎲",unlockAt:3,message:"你看到了伪随机数生成！使用区块信息生成随机数，适合测试但不适合生产环境。",code:`function _rainfall() public view returns (int256) {
    uint256 randomFactor = uint256(keccak256(abi.encodePacked(
        block.timestamp,
        block.coinbase,
        block.number
    ))) % 1000;
    return int256(randomFactor);
}`},purchase_insurance:{name:"购买保险",icon:"🛡️",unlockAt:4,message:"你购买了保险！支付保费后获得保障，当条件满足时可获得赔付。",code:`function purchaseInsurance() external payable {
    require(msg.value >= premiumInEth, "Insufficient premium");
    require(!hasInsurance[msg.sender], "Already insured");
    hasInsurance[msg.sender] = true;
    emit InsurancePurchased(msg.sender, msg.value);
}`},price_conversion:{name:"价格转换",icon:"🔄",unlockAt:5,message:"你了解了价格转换！Chainlink 价格有 8 位小数，需要使用 1e26 来正确计算 ETH 数量。",code:`uint256 premiumInEth = (INSURANCE_PREMIUM_USD * 1e26) / ethPrice;
// 1e26 = 1e18(wei精度) × 1e8(Chainlink精度)
// 例如: (10 * 1e26) / 300000000000 = 0.0033 ETH`},parametric_payout:{name:"参数化赔付",icon:"💸",unlockAt:6,message:"你体验了参数化赔付！无需人工审核，条件满足自动赔付，这是区块链保险的核心优势。",code:`if (currentRainfall < RAINFALL_THRESHOLD) {
    // 自动执行赔付
    (bool success, ) = msg.sender.call{value: payoutInEth}("");
    require(success, "Transfer failed");
    emit ClaimPaid(msg.sender, payoutInEth);
}`},cooldown_mechanism:{name:"冷却期机制",icon:"⏱️",unlockAt:7,message:"你了解了冷却期机制！24小时内只能索赔一次，防止滥用和频繁索赔。",code:`require(
    block.timestamp >= lastClaimTimestamp[msg.sender] + 1 days,
    "Must wait 24h between claims"
);
lastClaimTimestamp[msg.sender] = block.timestamp;`},contract_balance:{name:"合约余额",icon:"🏦",unlockAt:8,message:"你查看了合约余额！管理员可以提取合约中的 ETH，这是保险池资金管理的重要功能。",code:`function withdraw() external onlyOwner {
    payable(owner()).transfer(address(this).balance);
}

function getBalance() public view returns (uint256) {
    return address(this).balance;
}`}},ap={keccak256_hash:{name:"Keccak256哈希算法",icon:"🔐",unlockAt:1,message:"你使用了 Keccak256 哈希算法！这是以太坊标准的哈希函数，将任意数据转换为固定长度的哈希值。",code:`bytes32 messageHash = keccak256(abi.encodePacked(_user));
// Keccak256 是以太坊原生哈希函数
// 输入任意长度数据，输出 32 字节固定长度哈希`},ecdsa_signature:{name:"ECDSA椭圆曲线签名",icon:"🎯",unlockAt:2,message:"你了解了 ECDSA 椭圆曲线签名！这是以太坊使用的数字签名算法，基于椭圆曲线密码学实现身份验证。",code:`// ECDSA = Elliptic Curve Digital Signature Algorithm
// 使用私钥签名，公钥验证
// 签名后得到 r, s, v 三个值`},signature_rsv:{name:"签名组件R/S/V",icon:"📝",unlockAt:3,message:"你分解了签名的 R/S/V 组件！以太坊签名由 65 字节组成：r(32) + s(32) + v(1)。",code:`(bytes32 r, bytes32 s, uint8 v) = splitSignature(sig);
// r: 签名前32字节
// s: 签名中间32字节
// v: 最后1字节，用于恢复公钥`},eip191_prefix:{name:"EIP-191以太坊签名前缀",icon:"📋",unlockAt:5,message:"你了解了 EIP-191 签名前缀！\\x19Ethereum Signed Message:\\n32 是以太坊个人签名的标准前缀，防止签名被滥用。",code:`bytes32 ethSignedMessageHash = keccak256(
    abi.encodePacked(
        "\\x19Ethereum Signed Message:\\n32",
        messageHash
    )
);
// 前缀确保签名只能用于以太坊消息`},ecrecover:{name:"签名者恢复函数",icon:"🔓",unlockAt:5,message:"你使用了 ecrecover 函数！这是 Solidity 内置函数，通过签名数据恢复签名者的以太坊地址。",code:`address signer = ecrecover(
    ethSignedMessageHash,
    v,
    r,
    s
);
// ecrecover 是 EVM 内置函数
// 输入签名哈希和 r,s,v，返回签名者地址`},require_statement:{name:"Require验证语句",icon:"⚠️",unlockAt:6,message:"你使用了 require 验证语句！这是 Solidity 中最常用的条件检查，不满足时回滚交易并显示错误消息。",code:`require(!hasEntered[msg.sender], "Already entered");
// 第一个参数：条件表达式
// 第二个参数：错误消息（可选）
// 条件为 false 时，交易回滚`},mapping_storage:{name:"映射存储",icon:"🗂️",unlockAt:7,message:"你使用了映射存储！mapping 是 Solidity 中的键值对数据结构，用于高效存储用户状态。",code:`mapping(address => bool) public hasEntered;
// mapping(keyType => valueType)
// keyType: 地址类型
// valueType: 布尔类型（是否已参与）
hasEntered[userAddress] = true;  // 写入`},msg_sender:{name:"消息发送者",icon:"👤",unlockAt:8,message:"你使用了 msg.sender！这是 Solidity 中的全局变量，表示当前交易的发送者地址。",code:`constructor() {
    organizer = msg.sender;
}
// msg.sender: 当前调用者地址
// 在构造函数中，部署者成为组织者`}},a0=t=>({oracle_interface:"🔌 你了解了 Chainlink 预言机接口！AggregatorV3Interface 是标准接口。👉 查看 ETH/USD 价格面板学习价格预言机！",eth_usd_oracle:"💰 你使用了 ETH/USD 价格预言机！注意 Chainlink 返回 8 位小数精度。👉 购买保险体验价格转换！",random_generation:"🎲 你看到了伪随机数生成！使用区块信息生成随机降雨量。👉 更新天气数据体验随机性！",purchase_insurance:"🛡️ 保险购买成功！支付保费获得保障。👉 当干旱发生时申请赔付！",price_conversion:"🔄 你了解了价格转换！1e26 = 1e18 × 1e8 抵消 Chainlink 精度。👉 申请赔付体验参数化保险！",parametric_payout:"💸 赔付成功！参数化保险自动执行无需审核。👉 了解冷却期机制防止滥用！",cooldown_mechanism:"⏱️ 你了解了冷却期！24小时内只能索赔一次。👉 快进时间或查看合约余额！",contract_balance:"🏦 你查看了合约余额！管理员可提取保险池资金。🎉 你已掌握 Day 18 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",c0=t=>({oracle_interface:"📖 Chainlink 预言机接口(AggregatorV3Interface)是行业标准，定义了 latestRoundData() 等函数。它让智能合约能够安全地获取链外数据，如价格、天气等。接口标准化确保不同预言机可以互换使用。",eth_usd_oracle:"📖 ETH/USD 价格预言机返回的价格有 8 位小数精度。例如 $3000 返回 300000000000。这是因为金融数据通常需要高精度，而 Solidity 不支持浮点数。使用时需要注意精度转换。",random_generation:"📖 伪随机数生成使用区块信息（timestamp, coinbase, number）作为种子。这种方式适合测试和演示，但不适合生产环境，因为矿工可以影响结果。生产环境应使用 Chainlink VRF 等安全随机数方案。",purchase_insurance:"📖 购买保险函数检查用户支付足够的 ETH 且尚未投保。保费根据当前 ETH 价格动态计算，确保合约收到正确金额。投保状态存储在 hasInsurance 映射中，永久记录在区块链上。",price_conversion:"📖 价格转换公式 (USD × 1e26) / ETH价格 考虑了 Chainlink 的 8 位小数精度。1e26 = 1e18(wei精度) × 1e8(价格精度)。例如 $10 保费在 ETH $3000 时约为 0.0033 ETH。",parametric_payout:"📖 参数化保险(Parametric Insurance)是区块链保险的核心创新。传统保险需要人工审核理赔，而参数保险根据预设条件（如降雨量 < 500mm）自动赔付，无需信任第三方，大幅降低运营成本。",cooldown_mechanism:"📖 冷却期机制使用 block.timestamp 记录上次索赔时间，限制 24 小时内只能索赔一次。这是防止滥用的安全措施。在真实区块链上时间无法篡改，确保机制可靠。",contract_balance:"📖 合约余额管理是 DeFi 应用的基础。管理员可以提取合约中的 ETH，用于保险池资金管理。balance 操作需要注意重入攻击防护，使用 checks-effects-interactions 模式。"})[t]||"📖 点击其他概念标签查看更多详细解释。",l0=t=>({keccak256_hash:"🔐 你使用了 Keccak256 哈希算法！这是以太坊标准的哈希函数，将任意数据转换为 32 字节哈希值。👉 点击展开签名详情查看 R/S/V 组件！",ecdsa_signature:"🎯 你了解了 ECDSA 椭圆曲线签名！这是以太坊使用的数字签名算法，基于椭圆曲线密码学。👉 点击生成签名来体验完整流程！",signature_rsv:"📝 你分解了签名的 R/S/V 组件！以太坊签名由 65 字节组成：r(32) + s(32) + v(1)。👉 使用签名参与活动来解锁 ecrecover！",eip191_prefix:"📋 你了解了 EIP-191 签名前缀！\\x19Ethereum Signed Message:\\n32 是以太坊个人签名的标准，防止签名被滥用。👉 查看参与者列表完成所有概念！",ecrecover:"🔓 你使用了 ecrecover 函数！这是 Solidity 内置函数，通过签名恢复签名者地址。👉 查看参与者列表了解映射存储！",require_statement:"⚠️ 你使用了 require 验证语句！这是 Solidity 安全编程的基础，不满足条件时回滚交易。👉 查看参与者列表完成所有概念！",mapping_storage:"🗂️ 你使用了映射存储！mapping 是 Solidity 高效的键值对结构，用于存储用户参与状态。🎉 你已掌握 Day 19 所有核心概念！",msg_sender:"👤 你使用了 msg.sender！这是 Solidity 的全局变量，表示当前交易的发送者地址。👉 点击展开签名详情查看 R/S/V 组件！"})[t]||"📖 点击其他概念标签查看更多详细解释。",u0=t=>({keccak256_hash:"📖 Keccak256 是以太坊原生的哈希函数（SHA-3 算法变体）。它将任意长度的输入转换为 32 字节的固定长度输出。在签名验证中，我们需要先对用户地址进行哈希，生成唯一的消息标识。",ecdsa_signature:"📖 ECDSA（椭圆曲线数字签名算法）是以太坊使用的签名方案。它基于椭圆曲线密码学，使用私钥生成签名，任何人可以用公钥验证签名。签名过程不可逆，无法从签名推导出私钥。",signature_rsv:"📖 以太坊签名由 65 字节组成：r（32字节）+ s（32字节）+ v（1字节）。r 和 s 是签名曲线坐标，v 是恢复标识符（27 或 28）。通过 v 可以推导出对应的公钥地址。",eip191_prefix:"📖 EIP-191 定义了以太坊签名的标准格式：\\x19Ethereum Signed Message:\\n32 前缀。这个前缀确保签名只能用于以太坊消息，防止签名被滥用到其他区块链或应用中。",ecrecover:"📖 ecrecover 是 EVM 内置函数，用于从签名数据恢复签名者地址。它接受消息哈希和 r、s、v 作为参数，返回签名的公钥对应的地址。这是签名验证的核心函数。",require_statement:"📖 require 是 Solidity 中最常用的错误处理语句。第一个参数是布尔条件，第二个参数是可选的错误消息。当条件为 false 时，交易回滚，消耗所有 Gas。",mapping_storage:"📖 mapping 是 Solidity 中的键值对数据结构，类似于哈希表。mapping(address => bool) 表示地址到布尔值的映射。访问不存在的键会返回默认值（false），写入时会创建键值对。",msg_sender:"📖 msg.sender 是 Solidity 的全局变量，表示当前调用者的地址。在构造函数中，msg.sender 是合约的部署者，因此成为组织者。这是权限控制的基础。"})[t]||"📖 点击其他概念标签查看更多详细解释。",cp={reentrancy_attack:{name:"重入攻击",icon:"🔥",unlockAt:1,message:"你了解了重入攻击！这是最著名的智能合约漏洞，攻击者通过递归调用窃取资金。",code:`// 重入攻击原理:
// 1. 攻击者存入 1 ETH
// 2. 调用 withdraw() 提款
// 3. 合约发送 ETH，触发攻击者的 receive()
// 4. receive() 再次调用 withdraw()
// 5. 重复直到资金耗尽！
receive() external payable {
    if (attackCount < 5) {
        targetVault.vulnerableWithdraw(); // 递归调用！
    }
}`},fallback_receive:{name:"回退函数",icon:"⚡",unlockAt:2,message:"你使用了回退函数！receive() 在合约接收 ETH 时自动触发，是重入攻击的入口点。",code:`// receive() 函数 - 接收 ETH 时触发
receive() external payable {
    attackCount++;
    
    // 如果金库还有余额，继续攻击
    if (address(targetVault).balance >= 1 ether) {
        targetVault.vulnerableWithdraw(); // 再次提款！
    }
}`},vulnerable_withdraw:{name:"漏洞提款函数",icon:"🔴",unlockAt:3,message:"你发现了漏洞提款函数！它先发送 ETH 后更新余额，让攻击者有机可乘。",code:`// ❌ 有漏洞的代码
function vulnerableWithdraw() external {
    uint256 amount = goldBalance[msg.sender];
    require(amount > 0, "Nothing");

    // ⚠️ 漏洞: 先发送 ETH
    (bool sent, ) = msg.sender.call{value: amount}("");
    require(sent, "Failed");

    // ❌ 后更新余额 - 攻击者可以重入！
    goldBalance[msg.sender] = 0;
}`},deposit_function:{name:"存款函数",icon:"💰",unlockAt:4,message:"你使用了存款函数！用户存入 ETH 增加余额，是攻击的前提条件。",code:`// 存款函数
function deposit() external payable {
    require(msg.value > 0, "Deposit > 0");
    goldBalance[msg.sender] += msg.value;
}

// 调用方式:
// vault.deposit{value: 1 ether}();`},checks_effects_interactions:{name:"CEI模式",icon:"✅",unlockAt:5,message:"你了解了 CEI 模式！Checks-Effects-Interactions 是防止重入攻击的核心设计模式。",code:`// ✅ Checks-Effects-Interactions 模式
function safeWithdraw() external {
    // 1. Checks: 验证条件
    uint256 amount = goldBalance[msg.sender];
    require(amount > 0, "Nothing");

    // 2. Effects: 先更新状态 ✅
    goldBalance[msg.sender] = 0;

    // 3. Interactions: 最后外部调用 ✅
    (bool sent, ) = msg.sender.call{value: amount}("");
    require(sent, "Failed");
}`},reentrancy_guard:{name:"重入锁",icon:"🔒",unlockAt:6,message:"你使用了重入锁！nonReentrant 修饰符阻止函数在锁定期间被重入调用。",code:`// 重入锁实现
uint256 private _status;
uint256 private constant _NOT_ENTERED = 1;
uint256 private constant _ENTERED = 2;

modifier nonReentrant() {
    require(_status != _ENTERED, "Blocked!");
    _status = _ENTERED;      // 🔒 锁定
    _;
    _status = _NOT_ENTERED;  // 🔓 解锁
}

function safeWithdraw() external nonReentrant {
    // 函数体...
}`},contract_balance:{name:"合约余额",icon:"🏦",unlockAt:7,message:"你查看了合约余额！address(this).balance 返回合约持有的 ETH 数量。",code:`// 查询合约余额
function getBalance() public view returns (uint256) {
    return address(this).balance;
}

// 在攻击合约中检查目标余额
if (address(targetVault).balance >= 1 ether) {
    // 继续攻击...
}`},code_comparison:{name:"代码对比",icon:"📜",unlockAt:8,message:"你对比了漏洞代码和安全代码！理解差异是学习安全编程的关键。",code:`// ❌ 漏洞版本: 先发送 ETH，后更新余额
(bool sent, ) = msg.sender.call{value: amount}("");
goldBalance[msg.sender] = 0; // 攻击者已重入！

// ✅ 安全版本: 先更新余额，后发送 ETH
goldBalance[msg.sender] = 0; // 先更新！(nonReentrant 保护)
(bool sent, ) = msg.sender.call{value: amount}("");`}},d0=t=>({reentrancy_attack:"🔥 你了解了重入攻击！这是最著名的智能合约漏洞。👉 存入ETH到金库开始攻击演示！",fallback_receive:"⚡ 你使用了回退函数！receive() 在接收ETH时触发，是重入攻击的入口点。👉 查看防护机制了解如何修复！",vulnerable_withdraw:"🔴 你发现了漏洞提款函数！它先发送ETH后更新余额。👉 查看防护机制了解如何修复！",deposit_function:"💰 你使用了存款函数！用户存入ETH增加余额。👉 现在尝试攻击漏洞版本！",checks_effects_interactions:"✅ 你了解了CEI模式！先更新状态再发送ETH是防止重入的关键。👉 尝试攻击安全版本！",reentrancy_guard:"🔒 你使用了重入锁！nonReentrant修饰符阻止函数重入调用。👉 查看代码对比巩固知识！",contract_balance:"🏦 你查看了合约余额！address(this).balance返回合约ETH数量。🎉 恭喜完成Day20全部学习！",code_comparison:"📜 你对比了漏洞代码和安全代码！理解差异是学习安全编程的关键。👉 切换到'金库管理员'查看金库状态！"})[t]||"📖 点击其他概念标签查看更多详细解释。",f0=t=>({reentrancy_attack:"📖 重入攻击(Reentrancy Attack)是智能合约最著名的漏洞。攻击者利用合约在发送ETH后、更新状态前的窗口期，通过递归调用重复提款。2016年的The DAO攻击就是利用此漏洞，损失360万ETH，导致以太坊硬分叉。",fallback_receive:"📖 receive() 是 Solidity 的特殊函数，当合约接收 ETH 且没有附带数据时触发。在重入攻击中，攻击者的 receive() 函数会再次调用目标合约的提款函数，形成递归调用链。这是重入攻击的核心机制。",vulnerable_withdraw:"📖 漏洞提款函数违反了 Checks-Effects-Interactions 模式。它先执行外部调用（发送ETH），后更新状态（清零余额）。当外部调用触发攻击者的 receive() 时，余额还未更新，攻击者可以再次提款。",deposit_function:"📖 存款函数是重入攻击的前提条件。攻击者必须先存入一定数量的 ETH，获得提款资格。deposit() 使用 payable 修饰符接收 ETH，并使用 require 验证金额大于0。",checks_effects_interactions:"📖 CEI模式是 Solidity 安全编程的黄金法则。Checks（检查条件）→ Effects（更新状态）→ Interactions（外部调用）。关键是先更新状态再外部调用，这样即使被重入，状态已经是最新的，攻击者无法重复获利。",reentrancy_guard:"📖 重入锁(Reentrancy Guard)使用状态变量跟踪函数执行状态。_NOT_ENTERED(1) 表示未锁定，_ENTERED(2) 表示已锁定。modifier 在函数执行前锁定，执行后解锁。如果函数被重入调用，require 会阻止执行。OpenZeppelin 提供了标准实现。",contract_balance:"📖 address(this).balance 返回合约当前持有的 ETH 数量（以 wei 为单位）。在攻击合约中，它用于判断目标金库是否还有资金可以继续攻击。在管理函数中，它用于查询和提取合约资金。",code_comparison:"📖 通过对比漏洞代码和安全代码，可以清晰看到修复方法：1) 调整代码顺序，先更新状态再外部调用；2) 添加 nonReentrant 修饰符作为双重保护。理解这种差异对编写安全智能合约至关重要。",ierc721_interface:"📖 IERC721 是 ERC721 代币标准的接口定义，规定了 NFT 合约必须实现的基本功能，包括 balanceOf、ownerOf、transferFrom、approve 等函数。符合此接口的合约可以在所有支持 ERC721 的平台上使用。",mint_function:"📖 铸造函数是创建新 NFT 的核心。它从 0 地址（address(0)）转移代币到新所有者，这是 ERC721 标准中表示铸造的特殊约定。每次铸造都会触发 Transfer 事件，from 为 0 地址。",token_id_counter:"📖 代币 ID 计数器用于生成唯一的 tokenId。通常从 1 开始递增，确保每个 NFT 都有唯一标识。计数器使用 uint256 类型，可以支持几乎无限数量的 NFT。",token_uri:"📖 Token URI 是 NFT 元数据的链接，通常指向 IPFS 上的 JSON 文件。元数据包含 NFT 的名称、描述、图片等信息。这使得 NFT 可以展示丰富的内容，而不仅仅是区块链上的数字。",balance_of:"📖 balanceOf 函数查询地址拥有的 NFT 数量。它使用 _balances 映射实现，时间复杂度为 O(1)。这是 ERC721 标准的基础查询功能，也是所有权管理的核心。",transfer_from:"📖 transferFrom 函数将 NFT 从一个地址转移到另一个地址。调用者必须是被授权者或代币所有者。转移时会清除原有的授权，防止授权滥用。",approve_mechanism:"📖 授权机制允许代币所有者授权其他地址管理特定代币。approve 授权单个代币，getApproved 查询授权状态。这是 NFT 交易市场的基础，允许第三方代为转移代币。",approval_for_all:"📖 操作员授权(setApprovalForAll)允许所有者一次性授权某个地址管理其所有代币。这比逐个授权更高效，常用于 NFT 交易平台的批量操作场景。",safe_transfer:"📖 安全转移(safeTransferFrom)在转移前检查接收方是否实现了 IERC721Receiver 接口。这防止 NFT 被意外发送到不支持 ERC721 的合约中而被锁定。这是 ERC721 标准的重要安全特性。"})[t]||"📖 点击其他概念标签查看更多详细解释。",lp={ierc721_interface:{name:"IERC721接口",icon:"🔌",unlockAt:1,message:"你了解了ERC721标准接口！这是NFT合约必须实现的基本功能规范。",code:`interface IERC721 {
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    
    function balanceOf(address owner) external view returns (uint256);
    function ownerOf(uint256 tokenId) external view returns (address);
    function transferFrom(address from, address to, uint256 tokenId) external;
    function approve(address to, uint256 tokenId) external;
}`},mint_function:{name:"铸造函数",icon:"🔨",unlockAt:2,message:"你使用了铸造函数！它从0地址创建新NFT，是代币生命周期的起点。",code:`function mint(address to, string memory uri) public {
    uint256 tokenId = _tokenIdCounter;
    _tokenIdCounter++;
    
    _owners[tokenId] = to;
    _balances[to] += 1;
    _tokenURIs[tokenId] = uri;
    
    // from 0 address = 铸造
    emit Transfer(address(0), to, tokenId);
}`},token_id_counter:{name:"代币ID计数器",icon:"🔢",unlockAt:3,message:"你了解了代币ID计数器！它确保每个NFT都有唯一的标识符。",code:`uint256 private _tokenIdCounter = 1;

function mint(address to, string memory uri) public {
    uint256 tokenId = _tokenIdCounter;
    _tokenIdCounter++;  // 自动递增
    
    _owners[tokenId] = to;
    // ...
}`},token_uri:{name:"Token URI",icon:"🔗",unlockAt:4,message:"你查看了Token URI！它指向NFT的元数据，通常存储在IPFS上。",code:`mapping(uint256 => string) private _tokenURIs;

function tokenURI(uint256 tokenId) public view returns (string memory) {
    require(_owners[tokenId] != address(0), "Token doesn't exist");
    return _tokenURIs[tokenId];
    // 返回如: ipfs://Qm...
}`},balance_of:{name:"余额查询",icon:"📊",unlockAt:5,message:"你查询了NFT余额！balanceOf使用映射实现O(1)时间复杂度查询。",code:`mapping(address => uint256) private _balances;

function balanceOf(address owner) public view returns (uint256) {
    require(owner != address(0), "Zero address");
    return _balances[owner];  // O(1)查询
}`},transfer_from:{name:"代币转移",icon:"🔄",unlockAt:6,message:"你执行了NFT转移！transferFrom需要授权或所有权验证。",code:`function transferFrom(address from, address to, uint256 tokenId) public {
    require(_isApprovedOrOwner(msg.sender, tokenId), "Not authorized");
    
    _transfer(from, to, tokenId);
}

function _transfer(address from, address to, uint256 tokenId) internal {
    delete _tokenApprovals[tokenId];  // 清除授权
    _balances[from] -= 1;
    _balances[to] += 1;
    _owners[tokenId] = to;
    emit Transfer(from, to, tokenId);
}`},approve_mechanism:{name:"授权机制",icon:"🔑",unlockAt:7,message:"你使用了授权机制！approve允许其他地址管理你的特定代币。",code:`mapping(uint256 => address) private _tokenApprovals;

function approve(address to, uint256 tokenId) public {
    address owner = ownerOf(tokenId);
    require(msg.sender == owner || 
            isApprovedForAll(owner, msg.sender), "Not authorized");
    
    _tokenApprovals[tokenId] = to;
    emit Approval(owner, to, tokenId);
}`},approval_for_all:{name:"操作员授权",icon:"👥",unlockAt:8,message:"你设置了操作员授权！setApprovalForAll允许地址管理你的所有代币。",code:`mapping(address => mapping(address => bool)) private _operatorApprovals;

function setApprovalForAll(address operator, bool approved) public {
    require(operator != msg.sender, "Self approval");
    _operatorApprovals[msg.sender][operator] = approved;
    emit ApprovalForAll(msg.sender, operator, approved);
}`},safe_transfer:{name:"安全转移",icon:"🛡️",unlockAt:9,message:"你使用了安全转移！safeTransferFrom检查接收方是否支持ERC721。",code:`function safeTransferFrom(address from, address to, uint256 tokenId) public {
    require(_isApprovedOrOwner(msg.sender, tokenId), "Not authorized");
    _safeTransfer(from, to, tokenId, "");
}

function _safeTransfer(address from, address to, uint256 tokenId, bytes memory data) internal {
    _transfer(from, to, tokenId);
    // 检查接收方是否支持 ERC721
    require(_checkOnERC721Received(from, to, tokenId, data), "Not ERC721Receiver");
}`}},p0=t=>({ierc721_interface:"🔌 你了解了ERC721标准接口！👉 点击铸造按钮创建你的第一个NFT！",mint_function:"🔨 你使用了铸造函数！👉 完成铸造查看计数器如何工作！",token_id_counter:"🔢 你了解了代币ID计数器！👉 查询地址余额了解持有情况！",token_uri:"🔗 你查看了Token URI！👉 尝试铸造或转移NFT！",balance_of:"📊 你查询了NFT余额！👉 查看代币授权状态了解approve机制！",transfer_from:"🔄 你执行了NFT转移！👉 尝试授权其他地址管理你的NFT！",approve_mechanism:"🔑 你使用了授权机制！👉 尝试设置操作员授权！",approval_for_all:"👥 你设置了操作员授权！👉 尝试使用安全转移功能！",safe_transfer:"🛡️ 你使用了安全转移！🎉 恭喜完成Day21所有学习！"})[t]||"📖 点击其他概念标签查看更多详细解释。",g0=t=>({ierc721_interface:"📖 IERC721 是 ERC721 代币标准的接口定义，规定了 NFT 合约必须实现的基本功能，包括 balanceOf、ownerOf、transferFrom、approve 等函数。符合此接口的合约可以在所有支持 ERC721 的平台上使用。",mint_function:"📖 铸造函数是创建新 NFT 的核心。它从 0 地址（address(0)）转移代币到新所有者，这是 ERC721 标准中表示铸造的特殊约定。每次铸造都会触发 Transfer 事件，from 为 0 地址。",token_id_counter:"📖 代币 ID 计数器用于生成唯一的 tokenId。通常从 1 开始递增，确保每个 NFT 都有唯一标识。计数器使用 uint256 类型，可以支持几乎无限数量的 NFT。",token_uri:"📖 Token URI 是 NFT 元数据的链接，通常指向 IPFS 上的 JSON 文件。元数据包含 NFT 的名称、描述、图片等信息。这使得 NFT 可以展示丰富的内容，而不仅仅是区块链上的数字。",balance_of:"📖 balanceOf 函数查询地址拥有的 NFT 数量。它使用 _balances 映射实现，时间复杂度为 O(1)。这是 ERC721 标准的基础查询功能，也是所有权管理的核心。",transfer_from:"📖 transferFrom 函数将 NFT 从一个地址转移到另一个地址。调用者必须是被授权者或代币所有者。转移时会清除原有的授权，防止授权滥用。",approve_mechanism:"📖 授权机制允许代币所有者授权其他地址管理特定代币。approve 授权单个代币，getApproved 查询授权状态。这是 NFT 交易市场的基础，允许第三方代为转移代币。",approval_for_all:"📖 操作员授权(setApprovalForAll)允许所有者一次性授权某个地址管理其所有代币。这比逐个授权更高效，常用于 NFT 交易平台的批量操作场景。",safe_transfer:"📖 安全转移(safeTransferFrom)在转移前检查接收方是否实现了 IERC721Receiver 接口。这防止 NFT 被意外发送到不支持 ERC721 的合约中而被锁定。这是 ERC721 标准的重要安全特性。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Te=Io("operationLog",()=>{const t=F([]),e=F({}),n=F({}),r=(d,w,m,C=null)=>{const h=new Date().toLocaleTimeString("zh-CN",{hour12:!1});let E=0,D=0;C&&Ia[C]&&(E=Ia[C],D=E*Da,e.value[d]||(e.value[d]=0),e.value[d]+=E),n.value[d]||(n.value[d]=0),n.value[d]++;const b={id:`${d}-${Date.now()}-${Math.random()}`,day:d,timestamp:h,operation:w,details:m,gasUsed:E,ethCost:D};return t.value.unshift(b),b},s=d=>{t.value=t.value.filter(w=>w.day!==d)},i=()=>{t.value=[],e.value={},n.value={}},o=d=>t.value.filter(w=>w.day===d).slice(0,10),a=d=>e.value[d]||0,c=d=>(e.value[d]||0)*Da,l=d=>n.value[d]||0,u=O(()=>t.value.slice(0,20));return{logs:t,dayGasUsage:e,dayOperationCounts:n,recentLogs:u,addLog:r,clearDayLogs:s,clearAllLogs:i,getDayLogs:o,getDayGasUsage:a,getDayEthCost:c,getDayOperationCount:l}});function up(){const t=ft(),e=Me(),n=Te(),r=t.contracts.day1,s=O(()=>r.count),i=O(()=>r.interactionCount),o=()=>{r.count++,r.interactionCount++,n.addLog(1,"点击计数器","Counter +1","increment"),e.incrementInteraction(1);const w=r.count;w===1?e.unlockConcept(1,"function"):w===2?e.unlockConcept(1,"increment"):w===3?e.unlockConcept(1,"uint256"):w===4&&e.unlockConcept(1,"contract")},a=()=>{r.count=0,n.addLog(1,"重置计数器","Counter reset to 0","reset")},c=O(()=>e.dayProgress[1]),l=O(()=>e.getProgressPercentage(1)),u=O(()=>e.dayProgress[1].unlockedConcepts),d=O(()=>({gasUsage:n.getDayGasUsage(1),ethCost:n.getDayEthCost(1),operationCount:n.getDayOperationCount(1)}));return{counter:s,interactionCount:i,progress:c,progressPercentage:l,unlockedConcepts:u,realtimeData:d,clickCounter:o,resetCounter:a}}function dp(){const t=ft(),e=Me(),n=Te(),r=t.contracts.day2,s=e.dayProgress[2],i=O(()=>r.name),o=O(()=>r.bio),a=O(()=>r.hasStored),c=O(()=>r.hasRetrieved),l=O(()=>r.interactionCount),u=(E,D)=>{r.name=E,r.bio=D,r.hasStored=!0,r.interactionCount++,s.interactionCount++,n.addLog(2,"存储数据",`存储: ${E}`,"addData"),["string","private","memory"].forEach(k=>{e.unlockConcept(2,k)})},d=()=>(r.hasRetrieved=!0,r.interactionCount++,s.interactionCount++,n.addLog(2,"检索数据",`查询: ${i.value}`),["view","parameters","returns"].forEach(D=>{e.unlockConcept(2,D)}),{name:i.value,bio:o.value}),w=O(()=>s),m=O(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),C=O(()=>s.unlockedConcepts),h=O(()=>({gasUsage:n.getDayGasUsage(2),ethCost:n.getDayEthCost(2),operationCount:n.getDayOperationCount(2)}));return{name:i,bio:o,hasStored:a,hasRetrieved:c,interactionCount:l,progress:w,progressPercentage:m,unlockedConcepts:C,realtimeData:h,storeData:u,retrieveData:d}}function fp(){const t=ft(),e=Me(),n=Te(),r=t.contracts.day3,s=O(()=>r.candidates),i=O(()=>r.voteCount),o=O(()=>r.interactionCount),a=m=>{if(!m||m.trim()==="")return;r.candidates.push(m),r.voteCount[m]=0,r.interactionCount++,e.incrementInteraction(3),n.addLog(3,"添加候选人",`候选人: ${m}`,"addCandidate");const C=r.candidates.length;C===1?e.unlockConcept(3,"array"):C===2?e.unlockConcept(3,"push"):C===3&&e.unlockConcept(3,"mapping")},c=m=>{r.voteCount[m]!==void 0&&(r.voteCount[m]++,r.interactionCount++,e.incrementInteraction(3),n.addLog(3,"投票",`投给 ${m}`,"vote"),e.unlockConcept(3,"compound_assignment"))},l=O(()=>e.dayProgress[3]),u=O(()=>e.getProgressPercentage(3)),d=O(()=>e.dayProgress[3].unlockedConcepts),w=O(()=>({gasUsage:n.getDayGasUsage(3),ethCost:n.getDayEthCost(3),operationCount:n.getDayOperationCount(3)}));return{candidates:s,voteCount:i,interactionCount:o,progress:l,progressPercentage:u,unlockedConcepts:d,realtimeData:w,addCandidate:a,voteCandidate:c}}function pp(){const t=ft(),e=Me(),n=Te(),r=t.contracts.day4,s=e.dayProgress[4],i=F(null),o=O(()=>r.owner),a=O(()=>r.item),c=O(()=>r.auctionEndTime),l=O(()=>r.highestBidder),u=O(()=>r.highestBid),d=O(()=>r.ended),w=O(()=>r.bids),m=O(()=>r.bidders),C=O(()=>r.interactionCount),h=(g,I)=>{r.owner=t.generateAddress(),r.item=g,r.auctionEndTime=Math.floor(Date.now()/1e3)+I,r.interactionCount++,s.interactionCount++,n.addLog(4,"初始化拍卖",`物品: ${g}, 时长: ${I}秒`),e.unlockConcept(4,"constructor"),e.unlockConcept(4,"block_timestamp")},E=(g,I)=>{if(r.ended||Math.floor(Date.now()/1e3)>=r.auctionEndTime||g<=0)return!1;const B=r.bids[I]||0;return g<=B?!1:(r.bids[I]=g,r.interactionCount++,s.interactionCount++,B===0&&r.bidders.push(I),g>r.highestBid&&(r.highestBid=g,r.highestBidder=I),n.addLog(4,"出价",`出价 ${g}`,"placeBid"),e.unlockConcept(4,"require"),r.bidders.length>=1&&e.unlockConcept(4,"msg_sender"),(r.bidders.length>=2||r.interactionCount>=2)&&e.unlockConcept(4,"external"),!0)},D=()=>Math.floor(Date.now()/1e3)<r.auctionEndTime||r.ended?!1:(r.ended=!0,r.interactionCount++,s.interactionCount++,n.addLog(4,"结束拍卖","拍卖已结束","endAuction"),e.unlockConcept(4,"bool_type"),!0),b=()=>r.ended?(r.interactionCount++,s.interactionCount++,n.addLog(4,"查看获胜者",`获胜者: ${r.highestBidder}`),e.unlockConcept(4,"address_type"),i.value={winner:r.highestBidder,bid:r.highestBid},i.value):null,k=g=>g?new Date(g*1e3).toLocaleString("zh-CN"):"未设置",f=()=>Math.floor(Date.now()/1e3)>=r.auctionEndTime,p=O(()=>s),v=O(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),A=O(()=>s.unlockedConcepts),_=O(()=>({gasUsage:n.getDayGasUsage(4),ethCost:n.getDayEthCost(4),operationCount:n.getDayOperationCount(4)}));return{owner:o,item:a,auctionEndTime:c,highestBidder:l,highestBid:u,ended:d,bids:w,bidders:m,interactionCount:C,winner:i,progress:p,progressPercentage:v,unlockedConcepts:A,realtimeData:_,initializeAuction:h,placeBid:E,endAuction:D,getWinner:b,formatTime:k,checkAuctionEnded:f}}function gp(){const t=ft(),e=Me(),n=Te(),r=F(""),s=F(""),i=F(""),o=F(""),a=F(""),c=O(()=>(t.initializeContract(5),t.getContract(5))),l=O(()=>{var _;return((_=c.value)==null?void 0:_.owner)||""}),u=O(()=>{var _;return((_=c.value)==null?void 0:_.treasureAmount)||0}),d=O(()=>{var _;return((_=c.value)==null?void 0:_.userAddress)||""}),w=O(()=>{var _;return((_=c.value)==null?void 0:_.userAllowance)||0}),m=O(()=>{var _;return(_=c.value)!=null&&_.hasWithdrawn?!!c.value.hasWithdrawn[d.value]:!1}),C=_=>!_||_<=0?!1:(c.value.treasureAmount+=_,c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"添加宝藏",`数量: ${_}`,"addTreasure"),e.unlockConcept(5,"modifier"),!0),h=(_,g)=>!_||!g||g<=0?!1:(g<=c.value.treasureAmount&&(c.value.withdrawalAllowance[_]=g,_===c.value.userAddress&&(c.value.userAllowance=g)),c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"批准提款",`批准 ${_}: ${g}`,"approveWithdrawal"),e.unlockConcept(5,"return_statement"),!0),E=(_,g)=>{if(!_||!g||g<=0)return!1;let I=!1;if(_===c.value.owner)g<=c.value.treasureAmount&&(c.value.treasureAmount-=g,I=!0);else{const T=c.value.withdrawalAllowance[_];T>0&&!c.value.hasWithdrawn[_]&&T<=c.value.treasureAmount&&T>=g&&(c.value.hasWithdrawn[_]=!0,c.value.treasureAmount-=T,c.value.withdrawalAllowance[_]=0,_===c.value.userAddress&&(c.value.userAllowance=0),I=!0)}return c.value.interactionCount++,e.incrementInteraction(5),I&&n.addLog(5,"提取宝藏",`提取: ${g}`,"withdrawTreasure"),!0},D=_=>(_||(_=c.value.userAddress),c.value.hasWithdrawn[_]=!1,c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"重置提款状态",`重置: ${_}`),!0),b=_=>!_||_==="0x0000000000000000000000000000000000000000"?!1:(c.value.owner=_,c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"转移所有权",`新所有者: ${_}`,"transferOwnership"),e.unlockConcept(5,"zero_address"),!0),k=()=>(c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"查询宝藏",`宝藏数量: ${c.value.treasureAmount}`),e.unlockConcept(5,"return_statement"),c.value.treasureAmount),f=O(()=>e.dayProgress[5]),p=O(()=>{const _=e.dayProgress[5];return!_||_.totalConcepts===0?0:Math.floor(_.unlockedConcepts.length/_.totalConcepts*100)}),v=O(()=>e.dayProgress[5].unlockedConcepts),A=O(()=>({gasUsage:n.getDayGasUsage(5),ethCost:n.getDayEthCost(5),operationCount:n.getDayOperationCount(5)}));return{inputTreasureAmount:r,inputRecipient:s,inputAllowance:i,inputWithdrawAmount:o,inputNewOwner:a,owner:l,treasureAmount:u,userAddress:d,userAllowance:w,hasWithdrawn:m,progress:f,progressPercentage:p,unlockedConcepts:v,realtimeData:A,addTreasure:C,approveWithdrawal:h,withdrawTreasure:E,resetWithdrawalStatus:D,transferOwnership:b,getTreasureDetails:k}}function mp(){const t=ft(),e=Me(),n=Te(),r=t.contracts.day6,s=e.dayProgress[6],i=F(null),o=F([]),a=O(()=>r.bankManager),c=O(()=>r.members),l=O(()=>r.userAddress),u=O(()=>r.balance[r.userAddress]||0),d=O(()=>r.interactionCount),w=v=>(t.initializeContract(6),v==="0x0000000000000000000000000000000000000000"||v===r.bankManager||r.registeredMembers[v]?!1:(r.registeredMembers[v]=!0,r.members.push(v),r.balance[v]=0,r.interactionCount++,s.interactionCount++,n.addLog(6,"添加会员",`会员: ${v}`,"addMembers"),e.unlockConcept(6,"address_mapping_balance"),!0)),m=v=>{t.initializeContract(6);const A=r.userAddress;if(!r.registeredMembers[A])return!1;const _=v*1e18;return r.balance[A]+=_,r.interactionCount++,s.interactionCount++,n.addLog(6,"存入ETH",`存入 ${v} ETH`,"depositAmountEther"),e.unlockConcept(6,"payable"),e.unlockConcept(6,"msg_value"),!0},C=v=>{t.initializeContract(6);const A=r.userAddress;if(!r.registeredMembers[A])return!1;const _=v*1e18;return r.balance[A]<_?!1:(r.balance[A]-=_,r.interactionCount++,s.interactionCount++,n.addLog(6,"提取ETH",`提取 ${v} ETH`,"withdrawAmount"),e.unlockConcept(6,"wei_unit"),e.unlockConcept(6,"ether_deposit_withdraw"),!0)},h=v=>(t.initializeContract(6),r.interactionCount++,s.interactionCount++,i.value=r.balance[v]||0,n.addLog(6,"查询余额",`查询: ${v}`),i.value),E=()=>(t.initializeContract(6),r.interactionCount++,s.interactionCount++,o.value=[...r.members],o.value),D=v=>(v/1e18).toFixed(4)+" ETH",b=O(()=>s),k=O(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),f=O(()=>s.unlockedConcepts),p=O(()=>({gasUsage:n.getDayGasUsage(6),ethCost:n.getDayEthCost(6),operationCount:n.getDayOperationCount(6)}));return{bankManager:a,members:c,userAddress:l,userBalance:u,interactionCount:d,queryBalance:i,membersList:o,progress:b,progressPercentage:k,unlockedConcepts:f,realtimeData:p,addMembers:w,depositEther:m,withdrawEth:C,getBalance:h,getMembers:E,formatBalance:D}}function hp(){const t=ft(),e=Me(),n=Te(),r=t.contracts.day7,s=e.dayProgress[7],i=F(null),o=O(()=>r.owner),a=O(()=>r.userAddress),c=O(()=>r.friendList),l=O(()=>r.balances[r.userAddress]||0),u=O(()=>r.debts),d=O(()=>r.interactionCount),w=g=>(t.initializeContract(7),r.registeredFriends[g]?!1:(r.registeredFriends[g]=!0,r.friendList.push(g),r.balances[g]=0,r.interactionCount++,s.interactionCount++,n.addLog(7,"添加好友",`好友: ${g}`,"addFriend"),e.unlockConcept(7,"nested_mapping"),!0)),m=g=>{t.initializeContract(7);const I=r.userAddress;if(!r.registeredFriends[I])return!1;const T=g*1e18;return r.balances[I]=(r.balances[I]||0)+T,r.interactionCount++,s.interactionCount++,n.addLog(7,"存款",`存入 ${g} ETH`,"depositIntoWallet"),e.unlockConcept(7,"address_payable"),!0},C=(g,I)=>{t.initializeContract(7);const T=r.userAddress,B=I*1e18;return r.debts[g]||(r.debts[g]={}),r.debts[g][T]=(r.debts[g][T]||0)+B,r.interactionCount++,s.interactionCount++,n.addLog(7,"记录债务",`债务人: ${g}, 金额: ${I} ETH`,"recordDebt"),e.unlockConcept(7,"debt_tracking"),!0},h=(g,I)=>{t.initializeContract(7);const T=r.userAddress,B=I*1e18;return(r.balances[T]||0)<B?"余额不足：你的钱包可用余额小于还款金额！":(r.balances[T]-=B,r.balances[g]=(r.balances[g]||0)+B,r.debts[T]&&r.debts[T][g]&&(r.debts[T][g]-=B,r.debts[T][g]<0&&(r.debts[T][g]=0)),r.interactionCount++,s.interactionCount++,n.addLog(7,"还款",`债权人: ${g}, 金额: ${I} ETH`,"payFromWallet"),e.unlockConcept(7,"internal_transfer"),!0)},E=(g,I)=>{t.initializeContract(7);const T=r.userAddress,B=I*1e18;return(r.balances[T]||0)<B?"余额不足：试图转账的金额超过了你拥有的钱包余额！":(r.balances[T]-=B,r.balances[g]=(r.balances[g]||0)+B,r.interactionCount++,s.interactionCount++,n.addLog(7,"转账(transfer)",`收款方: ${g}, 金额: ${I} ETH`,"transferEther"),e.unlockConcept(7,"transfer_method"),!0)},D=(g,I)=>{t.initializeContract(7);const T=r.userAddress,B=I*1e18;return(r.balances[T]||0)<B?"余额不足：低级调用失败，因为你的钱包没有足够的以太币！":(r.balances[T]-=B,r.balances[g]=(r.balances[g]||0)+B,r.interactionCount++,s.interactionCount++,n.addLog(7,"转账call",`收款方: ${g}, 金额: ${I} ETH`,"transferEtherViaCall"),e.unlockConcept(7,"call_method"),!0)},b=g=>{t.initializeContract(7);const I=r.userAddress,T=g*1e18;return(r.balances[I]||0)<T?"余额不足：你无法提取超过拥有额度的资金！":(r.balances[I]-=T,r.interactionCount++,s.interactionCount++,n.addLog(7,"提款",`提取 ${g} ETH`,"withdraw"),e.unlockConcept(7,"withdraw_pattern"),!0)},k=()=>{t.initializeContract(7);const g=r.userAddress;return i.value=r.balances[g]||0,r.interactionCount++,s.interactionCount++,n.addLog(7,"查询余额",`余额: ${(i.value/1e18).toFixed(4)} ETH`),e.unlockConcept(7,"withdraw_pattern"),i.value},f=g=>(g/1e18).toFixed(4)+" ETH",p=O(()=>s),v=O(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),A=O(()=>s.unlockedConcepts),_=O(()=>({gasUsage:n.getDayGasUsage(7),ethCost:n.getDayEthCost(7),operationCount:n.getDayOperationCount(7)}));return{owner:o,userAddress:a,friendsList:c,userBalance:l,debts:u,interactionCount:d,checkedBalance:i,progress:p,progressPercentage:v,unlockedConcepts:A,realtimeData:_,iouAddFriend:w,iouDeposit:m,iouRecordDebt:C,iouPayDebt:h,iouTransferMethod:E,iouCallMethod:D,iouWithdraw:b,iouCheckBalance:k,formatBalance:f}}function yp(){const t=ft(),e=Me(),n=Te(),r=t.contracts.day8,s=e.dayProgress[8],i=O(()=>r.owner),o=O(()=>r.userAddress),a=O(()=>r.isUserAdmin),c=O(()=>r.totalTipsReceived),l=O(()=>r.supportedCurrencies),u=O(()=>r.conversionRates),d=O(()=>r.interactionCount),w=()=>{t.initializeContract(8),r.isUserAdmin=!r.isUserAdmin,r.interactionCount++,s.interactionCount++,n.addLog(8,"切换管理员模式",r.isUserAdmin?"开启管理员模式":"关闭管理员模式"),e.unlockConcept(8,"modifier_onlyOwner")},m=v=>{t.initializeContract(8);const A=v*1e18;r.totalTipsReceived+=A;const _=r.userAddress;r.tipPerPerson[_]=(r.tipPerPerson[_]||0)+A,r.interactionCount++,s.interactionCount++,n.addLog(8,"打赏ETH",`打赏 ${v} ETH`,"tipInEth"),e.unlockConcept(8,"payable_tip")},C=(v,A)=>{t.initializeContract(8);const _=r.conversionRates[v];if(!_)return!1;const g=A*_;r.totalTipsReceived+=g;const I=r.userAddress;return r.tipPerPerson[I]=(r.tipPerPerson[I]||0)+g,r.tipsPerCurrency[v]||(r.tipsPerCurrency[v]=0),r.tipsPerCurrency[v]+=A,r.interactionCount++,s.interactionCount++,n.addLog(8,"打赏货币",`打赏 ${A} ${v}`,"tipInCurrency"),e.unlockConcept(8,"msg_value_tip"),e.unlockConcept(8,"mapping_rates"),!0},h=()=>(t.initializeContract(8),r.isUserAdmin?r.totalTipsReceived===0?"revert: No tips to withdraw":(r.totalTipsReceived=0,r.interactionCount++,s.interactionCount++,n.addLog(8,"提取小费","提取所有小费","withdrawTips"),e.unlockConcept(8,"address_balance"),e.unlockConcept(8,"call_withdraw"),!0):"revert: Only owner can perform this action"),E=()=>{const v=r.userAddress,A=r.tipPerPerson[v]||0;return n.addLog(8,"查询打赏",`累计打赏: ${(A/1e18).toFixed(4)} ETH`),A},D=v=>(v/1e18).toFixed(4)+" ETH",b=O(()=>s),k=O(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),f=O(()=>s.unlockedConcepts),p=O(()=>({gasUsage:n.getDayGasUsage(8),ethCost:n.getDayEthCost(8),operationCount:n.getDayOperationCount(8)}));return{owner:i,userAddress:o,isAdmin:a,totalTips:c,supportedCurrencies:l,conversionRates:u,interactionCount:d,progress:b,progressPercentage:k,unlockedConcepts:f,realtimeData:p,tipJarToggleAdmin:w,tipJarTipInEth:m,tipJarTipInCurrency:C,tipJarWithdraw:h,getUserTips:E,formatBalance:D}}function bp(){const t=ft(),e=Me(),n=Te(),r=t.contracts.day9,s=e.dayProgress[9],i=O(()=>r.owner),o=O(()=>r.userAddress),a=O(()=>r.isUserAdmin),c=O(()=>r.scientificCalculatorAddress),l=O(()=>r.isAddressSet),u=O(()=>r.operationCount),d=O(()=>r.operationHistory),w=O(()=>r.interactionCount),m=O(()=>r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),C=()=>{t.initializeContract(9),r.isUserAdmin=!r.isUserAdmin,n.addLog(9,"切换身份",r.isUserAdmin?"切换为管理员":"切换为用户")},h=(T,B,$)=>{if(t.initializeContract(9),isNaN(B)||isNaN($))throw new Error("请输入有效的数字");let K;switch(T){case"add":K=B+$;break;case"subtract":K=B-$;break;case"multiply":K=B*$;break;case"divide":if($===0)throw new Error("不能除以零");K=B/$;break;default:throw new Error("未知运算符")}r.operationCount++,r.operationHistory.push({operator:T,a:B,b:$,result:K,timestamp:Date.now()}),r.interactionCount++,s.interactionCount++;const N={add:"加法",subtract:"减法",multiply:"乘法",divide:"除法"};return n.addLog(9,"基础运算",`${N[T]}: ${B} ${T==="add"?"+":T==="subtract"?"-":T==="multiply"?"×":"÷"} ${$} = ${K}`),r.operationCount>=3&&e.unlockConcept(9,"pure_function"),K},E=T=>{if(t.initializeContract(9),!r.isUserAdmin)throw new Error("Only owner can do this action");if(!T||T.length<3)throw new Error("请输入合约地址");if(!T.startsWith("0x"))throw new Error("合约地址必须以 0x 开头");return r.scientificCalculatorAddress=T,r.isAddressSet=!0,r.interactionCount++,s.interactionCount++,n.addLog(9,"设置合约地址",`科学计算器地址: ${T}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.setAddress=!0,e.unlockConcept(9,"modifier_onlyOwner"),!0},D=(T,B)=>{if(t.initializeContract(9),!r.isAddressSet)throw new Error("请先设置ScientificCalculator合约地址");if(isNaN(T)||isNaN(B))throw new Error("请输入有效的数字");let $=1;for(let K=0;K<B;K++)$*=T;return r.interactionCount++,s.interactionCount++,n.addLog(9,"指数运算",`${T}^${B} = ${$}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.powerCalc=!0,e.unlockConcept(9,"view_function"),e.unlockConcept(9,"cross_contract_call"),e.unlockConcept(9,"interface_call"),$},b=T=>{if(t.initializeContract(9),!r.isAddressSet)throw new Error("请先设置ScientificCalculator合约地址");if(isNaN(T)||T<0)throw new Error("请输入有效的非负数字");let B=T/2;const $=[];for(let K=0;K<10;K++){const N=B;B=(B+T/B)/2,$.push({round:K+1,value:B,prevValue:N,formula:`(${N.toFixed(4)} + ${T}/${N.toFixed(4)}) / 2 = ${B.toFixed(4)}`})}return r.interactionCount++,s.interactionCount++,n.addLog(9,"平方根计算",`√${T} ≈ ${Math.floor(B)}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.sqrtCalc=!0,e.unlockConcept(9,"low_level_call"),{result:Math.floor(B),steps:$}},k=async(T,B=!1)=>{if(t.initializeContract(9),isNaN(T)||T<0)throw new Error("请输入有效的非负数字");const $=[];let K=T/2;for(let N=0;N<10;N++){const P=K;K=(K+T/K)/2,$.push({round:N+1,value:K,prevValue:P,formula:`(${P.toFixed(4)} + ${T}/${P.toFixed(4)}) / 2 = ${K.toFixed(4)}`}),B&&await new Promise(S=>setTimeout(S,500))}return r.interactionCount++,s.interactionCount++,n.addLog(9,"牛顿迭代",`计算 √${T} 的迭代过程`),e.unlockConcept(9,"newton_iteration"),$},f=T=>(t.initializeContract(9),n.addLog(9,"权限验证",T?"以管理员身份验证":"以用户身份验证"),T?(r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.permissionCheck=!0,{success:!0,message:"验证通过：Owner权限确认"}):{success:!1,message:"验证失败：Only owner can do this action"}),p=()=>{t.initializeContract(9);const T=r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1},B=Object.values(T).filter($=>$).length;return B===4?(e.unlockConcept(9,"contract_composition"),{success:!0,message:"🎉 恭喜！你已完成所有挑战任务！"}):{success:!1,message:`还有 ${4-B} 个任务未完成`}},v=O(()=>s),A=O(()=>e.getProgressPercentage(9)),_=O(()=>e.getUnlockedConcepts(9)),g=O(()=>{const T=r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1};return Object.values(T).filter(B=>B).length}),I=O(()=>({gasUsage:n.getDayGasUsage(9),ethCost:n.getDayEthCost(9),operationCount:n.getDayOperationCount(9)}));return{owner:i,userAddress:o,isOwner:a,scientificCalculatorAddress:c,isAddressSet:l,operationCount:u,operationHistory:d,interactionCount:w,challengeTasks:m,progress:v,progressPercentage:A,unlockedConcepts:_,completedChallengeCount:g,realtimeData:I,toggleIdentity:C,calculate:h,setScientificCalculator:E,calculatePower:D,calculateSquareRoot:b,runNewtonIteration:k,checkPermission:f,completeChallenge:p}}function wp(){const t=ft(),e=Me(),n=Te(),r=t.contracts.day10,s=e.dayProgress[10],i=O(()=>r.owner),o=O(()=>r.userAddress),a=O(()=>r.userProfile),c=O(()=>r.workoutHistory),l=O(()=>r.totalWorkouts),u=O(()=>r.totalDistance),d=O(()=>r.milestones),w=O(()=>r.userProfile.isRegistered),m=()=>{t.initializeContract(10)},C=P=>({struct_definition:"📦 太棒了！你学会了使用结构体打包数据！👉 记录一次运动来看看时间戳如何工作！",event_logging:"📋 不错！你触发了事件日志！👉 记录运动来查看运动历史如何存储！",onlyRegistered_modifier:"🛡️ 太棒了！你了解了修饰符如何保护函数！👉 记录运动来解锁更多概念！",timestamp_usage:"⏰ 很好！你学会了记录时间戳！👉 查看运动历史来解锁 array_in_mapping！",array_in_mapping:"🗂️ 很好！你看到了映射到数组的用法！👉 查看统计数据来解锁 multiple_mappings！",multiple_mappings:"🗺️ 优秀！你了解了多个映射如何协同工作！👉 更新体重来解锁 storage_keyword！",storage_keyword:"💾 太棒了！你了解了 storage 的威力！👉 继续记录运动，达成里程碑来解锁 milestone_detection！",milestone_detection:"🏆 恭喜！你达成了里程碑！👉 查看完整代码来复习所有知识！"})[P]||"",h=(P,S)=>{if(m(),r.userProfile.isRegistered)return{success:!1,error:"User already registered"};r.userProfile={name:P,weight:S,isRegistered:!0},r.interactionCount++,s.interactionCount++,n.addLog(10,"注册用户",`用户: ${P}, 体重: ${S}kg`);const L=[];return e.unlockConcept(10,"struct_definition"),L.push(C("struct_definition")),e.unlockConcept(10,"event_logging"),L.push(C("event_logging")),e.unlockConcept(10,"onlyRegistered_modifier"),L.push(C("onlyRegistered_modifier")),{success:!0,unlockedHints:L}},E=(P,S,L)=>{if(m(),!r.userProfile.isRegistered)return{success:!1,error:"User not registered"};const Z={activityType:P,duration:S,distance:L,timestamp:Date.now()};r.workoutHistory.unshift(Z);const ne=r.totalDistance;r.totalWorkouts++,r.totalDistance+=L,r.interactionCount++,s.interactionCount++,n.addLog(10,"记录运动",`${P} ${L}米 ${v(S)}`);const ce=!e.isConceptUnlocked(10,"timestamp_usage"),pe=!e.isConceptUnlocked(10,"array_in_mapping");e.unlockConcept(10,"timestamp_usage"),e.unlockConcept(10,"array_in_mapping");const st=b(ne),ze=[];return ce&&ze.push(C("timestamp_usage")),pe&&ze.push(C("array_in_mapping")),st&&ze.push(C("milestone_detection")),{success:!0,unlockedHints:ze}},D=P=>{if(m(),!r.userProfile.isRegistered)return{success:!1,error:"User not registered"};const S=r.userProfile.weight;let L=!1;P<S&&S>0&&(S-P)*100/S>=5&&(k("weightGoal"),L=!0),r.userProfile.weight=P,r.interactionCount++,s.interactionCount++,n.addLog(10,"更新体重",`${S}kg → ${P}kg`);const Z=!e.isConceptUnlocked(10,"storage_keyword"),ne=!e.isConceptUnlocked(10,"multiple_mappings");e.unlockConcept(10,"storage_keyword"),e.unlockConcept(10,"multiple_mappings");const ce=[];return Z&&ce.push(C("storage_keyword")),ne&&ce.push(C("multiple_mappings")),L&&ce.push(C("milestone_detection")),{success:!0,unlockedHints:ce}},b=(P,S)=>{const L=r.totalWorkouts,Z=r.totalDistance;let ne=!1;return L===10?(k("workouts10"),ne=!0):L===50&&(k("workouts50"),ne=!0),Z>=1e5&&P<1e5&&(k("distance100K"),ne=!0),ne},k=P=>{const S=r.milestones[P];S&&!S.achieved&&(S.achieved=!0,S.timestamp=Date.now(),e.unlockConcept(10,"milestone_detection"))},f=(P,S)=>S==="minutes"?P*60:S==="hours"?P*3600:P,p=(P,S)=>S==="kilometers"?P*1e3:P,v=P=>{if(P<60)return`${P}秒`;if(P<3600)return`${Math.floor(P/60)}分钟`;{const S=Math.floor(P/3600),L=Math.floor(P%3600/60);return L>0?`${S}小时${L}分钟`:`${S}小时`}},A=P=>P<1e3?`${P}米`:`${(P/1e3).toFixed(2)}公里`,_=P=>new Date(P).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),g=P=>({跑步:"🏃",Running:"🏃",骑行:"🚴",Cycling:"🚴",游泳:"🏊",Swimming:"🏊",步行:"🚶",Walking:"🚶",瑜伽:"🧘",Yoga:"🧘",篮球:"⛹️",Basketball:"⛹️"})[P]||"💪",I=()=>{const P=!e.isConceptUnlocked(10,"array_in_mapping");return e.unlockConcept(10,"array_in_mapping"),n.addLog(10,"查看运动历史",`共 ${r.workoutHistory.length} 条记录`),P?C("array_in_mapping"):null},T=()=>{const P=!e.isConceptUnlocked(10,"multiple_mappings");return e.unlockConcept(10,"multiple_mappings"),n.addLog(10,"查看统计",`总运动: ${r.totalWorkouts}次, 总距离: ${A(r.totalDistance)}`),P?C("multiple_mappings"):null},B=O(()=>s),$=O(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),K=O(()=>s.unlockedConcepts),N=O(()=>({gasUsage:n.getDayGasUsage(10),ethCost:n.getDayEthCost(10),operationCount:n.getDayOperationCount(10)}));return{owner:i,userAddress:o,userProfile:a,workoutHistory:c,totalWorkouts:l,totalDistance:u,milestones:d,isRegistered:w,progress:B,progressPercentage:$,unlockedConcepts:K,realtimeData:N,registerUser:h,logWorkout:E,updateWeight:D,convertToSeconds:f,convertToMeters:p,formatDuration:v,formatDistance:A,formatTimestamp:_,getActivityIcon:g,viewWorkoutHistory:I,viewStatistics:T,initializeContract:m}}function vp(){const t=ft(),e=Me(),n=Te(),r=O(()=>(t.initializeContract(11),t.getContract(11))),s=O(()=>{var p;return((p=r.value)==null?void 0:p.owner)||""}),i=O(()=>{var p;return((p=r.value)==null?void 0:p.contractBalance)||0}),o=O(()=>{var p;return((p=r.value)==null?void 0:p.userAddress)||""}),a=O(()=>o.value===s.value),c=O(()=>{var p;return((p=r.value)==null?void 0:p.eventLog)||[]}),l=p=>({inheritance:"📦 太棒了！你看到 VaultMaster 继承了 Ownable 的功能！👉 存入 ETH 来学习 import 机制！",constructor:"🏗️ 太棒了！你了解了构造函数！👉 存入 ETH 来学习导入语句和私有变量！",import_statement:"📥 不错！你了解了导入语句！👉 继续存入 ETH 来学习事件日志！",event_logging:"📋 很好！你触发了事件日志！👉 尝试转移所有权来解锁更多概念！",private_visibility:"🔒 优秀！你学会了 private 变量的使用！合约余额等敏感数据都使用 private 保护！",transfer_ownership:"🔑 很好！你了解了所有权转移！👉 尝试以用户身份提取来学习修饰符！",indexed_parameter:"🏷️ 不错！你了解了索引参数！👉 切换到用户身份体验权限控制！",onlyOwner_modifier:"🛡️ 太棒了！你了解了 onlyOwner 修饰符！👉 查看完整代码来学习更多！"})[p]||"",u=p=>{var _;const v=e.dayProgress[11];return((_=v==null?void 0:v.unlockedConcepts)==null?void 0:_.includes(p))?null:(e.unlockConcept(11,p),l(p))},d=()=>"0x"+Array(40).fill(0).map(()=>Math.floor(Math.random()*16).toString(16)).join(""),w=()=>r.value?(r.value.userAddress=r.value.owner,e.incrementInteraction(11),n.addLog(11,"切换身份","切换为所有者身份"),{hint:"✅ 已切换到所有者身份！👉 现在可以转移所有权和提取资金了！"}):null,m=()=>{if(r.value){const p=d();return r.value.userAddress=p,e.incrementInteraction(11),n.addLog(11,"切换身份",`切换为用户身份: ${p.slice(0,10)}...`),{hint:"👤 已切换到用户身份！👉 现在尝试提取资金来体验权限控制！"}}return null},C=()=>{e.incrementInteraction(11),n.addLog(11,"查询所有者",`所有者: ${s.value.slice(0,10)}...`);const p=[],v=u("inheritance");v&&p.push(v);const A=u("constructor");return A&&p.push(A),{address:s.value,hint:p.length>0?p.join(`
`):null}},h=()=>(e.incrementInteraction(11),n.addLog(11,"查询余额",`合约余额: ${(i.value/1e18).toFixed(4)} ETH`),i.value),E=p=>{if(!p||p<=0)return{success:!1,error:"金额无效"};const v=Math.floor(p*1e18);r.value.contractBalance+=v,r.value.eventLog.push({name:"DepositSuccessful",icon:"💰",details:`存入 ${p} ETH (${v} wei)`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"存款",`存入 ${p} ETH`);const A=[],_=u("import_statement");_&&A.push(_);const g=u("event_logging");g&&A.push(g);const I=u("private_visibility");return I&&A.push(I),{success:!0,hints:A}},D=(p,v)=>{if(!p||!v||v<=0)return{success:!1,error:"参数无效"};if(!a.value)return u("onlyOwner_modifier"),e.incrementInteraction(11),n.addLog(11,"提取失败","权限不足：非所有者尝试提取"),{success:!1,error:"❌ 权限不足：只有所有者才能提取资金 🛡️ 解锁知识点：onlyOwner 修饰符！"};const A=Math.floor(v*1e18);return A>i.value?{success:!1,error:"余额不足"}:(r.value.contractBalance-=A,r.value.eventLog.push({name:"WithdrawSuccessful",icon:"💸",details:`提取 ${v} ETH 到 ${p.slice(0,6)}...${p.slice(-4)}`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"提取资金",`提取 ${v} ETH 到 ${p.slice(0,10)}...`),{success:!0})},b=p=>{var T;if(!p||p==="0x0000000000000000000000000000000000000000")return{success:!1,error:"无效地址"};if(!a.value)return{success:!1,error:"权限不足"};const v=r.value.owner;r.value.owner=p,r.value.userAddress===v&&(r.value.userAddress=p),r.value.eventLog.push({name:"OwnershipTransferred",icon:"🔑",details:`所有权从 ${v.slice(0,6)}... 转移到 ${p.slice(0,6)}...`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"转移所有权",`${v.slice(0,10)}... → ${p.slice(0,10)}...`);const A=[],_=u("transfer_ownership");_&&A.push(_);const g=u("indexed_parameter");g&&A.push(g);const I=e.dayProgress[11];return(T=I==null?void 0:I.unlockedConcepts)!=null&&T.includes("onlyOwner_modifier")||A.push('🛡️ 想体验权限控制吗？👉 切换到"用户"身份，尝试提取资金！'),{success:!0,hints:A}},k=()=>(e.incrementInteraction(11),n.addLog(11,"查看代码","查看完整合约代码"),{hints:["📖 你已了解所有核心概念！查看完整代码来巩固知识吧！"]}),f=O(()=>({gasUsage:n.getDayGasUsage(11),ethCost:n.getDayEthCost(11),operationCount:n.getDayOperationCount(11)}));return{owner:s,contractBalance:i,userAddress:o,isOwner:a,eventLog:c,realtimeData:f,getOwner:C,getBalance:h,deposit:E,withdraw:D,transferOwnership:b,setOwnerMode:w,setUserMode:m,viewFullCode:k,unlockConceptWithHint:u,getUnlockHint:l}}function _p(){const t=Te(),e=F({name:"Web3 Compass",symbol:"COM",decimals:18,totalSupply:1e6}),n={alice:"0xAlice7429aC95B2cF0e4b5F1F4E4e8e7D6c5B4A3210",bob:"0xBob8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",carol:"0xCarol5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},r=F({[n.alice]:1e6,[n.bob]:0,[n.carol]:0}),s=F({[n.alice]:{[n.carol]:0},[n.bob]:{},[n.carol]:{}}),i=F("alice"),o=F([{icon:"🟢",name:"Transfer",details:"从: 0x0000...0000 到: Alice 数量: 1,000,000 COM (铸币)",timestamp:Date.now()}]),a=O(()=>n[i.value]),c=b=>b===n.alice?"Alice":b===n.bob?"Bob":b===n.carol?"Carol":b.slice(0,6)+"..."+b.slice(-4),l=b=>b?b===n.alice?"Alice (0xAlice...3210)":b===n.bob?"Bob (0xBob...7E6F)":b===n.carol?"Carol (0xCarol...E2F)":b.slice(0,10)+"..."+b.slice(-8):"",u=b=>{i.value=b;const k={alice:"👑 已切换到 Alice（代币持有者）",bob:"👤 已切换到 Bob（普通用户）",carol:"🔑 已切换到 Carol（可被授权者）"};return t.addLog(12,"切换角色",k[b]),{success:!0,message:k[b],hints:[],nextStep:""}},d=b=>{const k=r.value[b]||0,f=c(b);return t.addLog(12,"查询余额",`${f}: ${k.toLocaleString()} COM`),{success:!0,balance:k,message:`📊 查询成功！${f} 余额: ${k.toLocaleString()} COM`,hints:[],nextStep:"💡 余额使用 mapping(address => uint256) 存储！👉 转账给 Bob 来学习事件机制！"}},w=(b,k)=>{const f=a.value,p=c(f),v=c(b);return r.value[f]<k?(t.addLog(12,"转账失败",`余额不足: ${p} → ${v}`),{success:!1,message:`❌ 转账失败！余额不足。当前余额: ${r.value[f].toLocaleString()} COM，尝试转账: ${k.toLocaleString()} COM`,hints:[],nextStep:""}):b==="0x0000000000000000000000000000000000000000"?(t.addLog(12,"转账失败","接收地址不能是零地址"),{success:!1,message:"❌ 转账失败！接收地址不能是零地址。",hints:[],nextStep:""}):f===b?(t.addLog(12,"转账失败","不能转账给自己"),{success:!1,message:"❌ 转账失败！不能转账给自己。",hints:[],nextStep:""}):(r.value[f]-=k,r.value[b]=(r.value[b]||0)+k,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${p} 到: ${v} 数量: ${k.toLocaleString()} COM`,timestamp:Date.now()}),t.addLog(12,"转账",`${p} → ${v}: ${k.toLocaleString()} COM`),{success:!0,message:`✅ 转账成功！${p} 向 ${v} 转账 ${k.toLocaleString()} COM 📋 恭喜解锁：事件日志！💸 恭喜解锁：转账函数！`,hints:["event","transfer"],nextStep:"👉 授权给 Carol 来学习授权机制！"})},m=(b,k)=>{const f=a.value,p=c(f),v=c(b);return i.value!=="alice"?(t.addLog(12,"授权失败","只有 Alice 才能授权"),{success:!1,message:"❌ 授权失败！只有代币持有者 Alice 才能授权。请切换到 Alice。",hints:[],nextStep:""}):f===b?(t.addLog(12,"授权失败","不能授权给自己"),{success:!1,message:"❌ 授权失败！不能授权给自己。",hints:[],nextStep:""}):(s.value[f]||(s.value[f]={}),s.value[f][b]=k,o.value.push({icon:"🟡",name:"Approval",details:`持有者: ${p} 被授权者: ${v} 额度: ${k.toLocaleString()} COM`,timestamp:Date.now()}),t.addLog(12,"授权",`${p} → ${v}: ${k.toLocaleString()} COM`),{success:!0,message:`✅ 授权成功！${p} 授权 ${v} 可以使用 ${k.toLocaleString()} COM ✅ 恭喜解锁：授权函数！`,hints:["approve"],nextStep:"👉 查询 allowance 来学习授权额度查询！"})},C=(b,k)=>{var A;const f=((A=s.value[b])==null?void 0:A[k])||0,p=c(b),v=c(k);return t.addLog(12,"查询授权额度",`${v} 可用 ${p}: ${f.toLocaleString()} COM`),{success:!0,allowance:f,message:`🔍 查询成功！${v} 可使用 ${p} 的额度: ${f.toLocaleString()} COM 🗂️ 恭喜解锁：嵌套映射！🔍 恭喜解锁：授权额度查询！`,hints:["mapping_nested","allowance"],nextStep:"👉 切换到 Carol 执行代转账来学习 transferFrom！"}},h=(b,k,f)=>{var I;const p=a.value,v=c(p),A=c(b),_=c(k);if(i.value!=="carol")return t.addLog(12,"代转账失败","只有 Carol 才能执行代转账"),{success:!1,message:"❌ 代转账失败！只有被授权者 Carol 才能执行代转账。请切换到 Carol。",hints:[],nextStep:""};if(b!==n.alice)return t.addLog(12,"代转账失败","Carol 只被 Alice 授权"),{success:!1,message:"❌ 代转账失败！Carol 只被 Alice 授权，只能从 Alice 账户代转账。",hints:[],nextStep:""};const g=((I=s.value[b])==null?void 0:I[p])||0;return g<f?(t.addLog(12,"代转账失败",`授权额度不足: ${g.toLocaleString()} COM`),{success:!1,message:`❌ 授权额度不足！Carol 只能使用 Alice 的 ${g.toLocaleString()} COM，尝试转账: ${f.toLocaleString()} COM`,hints:[],nextStep:""}):r.value[b]<f?(t.addLog(12,"代转账失败",`余额不足: ${A}`),{success:!1,message:`❌ 余额不足！${A} 当前余额: ${r.value[b].toLocaleString()} COM`,hints:[],nextStep:""}):(r.value[b]-=f,r.value[k]=(r.value[k]||0)+f,s.value[b][p]-=f,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${A} 到: ${_} 数量: ${f.toLocaleString()} COM (by ${v})`,timestamp:Date.now()}),t.addLog(12,"代转账",`${v} 代替 ${A} → ${_}: ${f.toLocaleString()} COM`),{success:!0,message:`✅ 代转账成功！${v} 代替 ${A} 向 ${_} 转账 ${f.toLocaleString()} COM 🔄 恭喜解锁：代转账函数！`,hints:["transferFrom"],nextStep:"🎉 你已掌握 ERC20 全部核心功能！"})},E=b=>new Date(b).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),D=O(()=>({gasUsage:t.getDayGasUsage(12),ethCost:t.getDayEthCost(12),operationCount:t.getDayOperationCount(12)}));return{tokenInfo:e,roles:n,balances:r,allowances:s,currentRole:i,currentAddress:a,eventLog:o,realtimeData:D,switchRole:u,getBalance:d,transfer:w,approve:m,getAllowance:C,transferFrom:h,getRoleName:c,formatAddress:l,formatTime:E}}function xp(){const t=Te(),e=F({name:"Web3 Compass",symbol:"WBT",decimals:18,totalSupply:1e6}),n={deployer:"0xDeployer7429aC95B2cF0e4b5F1F4E4e8e7D6c5B4A3210",alice:"0xAlice8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",bob:"0xBob5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},r=F({[n.deployer]:1e6,[n.alice]:0,[n.bob]:0}),s=F({[n.deployer]:{[n.alice]:0,[n.bob]:0},[n.alice]:{},[n.bob]:{}}),i=F("deployer"),o=F([{icon:"🪙",name:"Mint",details:"Transfer(address(0), Deployer, 1,000,000 WBT) - 合约部署时铸造",timestamp:Date.now(),type:"mint"}]),a=O(()=>n[i.value]),c=b=>b===n.deployer?"Deployer":b===n.alice?"Alice":b===n.bob?"Bob":b.slice(0,6)+"..."+b.slice(-4),l=b=>b?b===n.deployer?"Deployer (0xDeployer...3210)":b===n.alice?"Alice (0xAlice...7E6F)":b===n.bob?"Bob (0xBob...E2F)":b.slice(0,10)+"..."+b.slice(-8):"",u=b=>{i.value=b;const k={deployer:"✅ 已切换到 Deployer（合约部署者/代币持有者）！👉 执行转账操作来解锁 internal 和 virtual 函数！",alice:"✅ 已切换到 Alice（普通用户）！👉 让 Deployer 授权给你，然后执行代转账！",bob:"✅ 已切换到 Bob（可被授权者）！👉 让 Deployer 授权给你，然后执行代转账！"};return t.addLog(13,"切换角色",k[b]),{success:!0,message:k[b],hints:[],nextStep:""}},d=b=>{const k=r.value[b]||0,f=c(b);return t.addLog(13,"查询余额",`${f}: ${k.toLocaleString()} WBT`),{success:!0,balance:k,message:`📊 查询成功！${f} 余额: ${k.toLocaleString()} WBT 👉 执行转账来解锁 internal 和 virtual 函数！`,hints:[],nextStep:"💡 余额使用 mapping(address => uint256) 存储！👉 执行转账来解锁 internal 和 virtual 函数！"}},w=(b,k)=>{const f=a.value,p=c(f),v=c(b);return r.value[f]<k?(t.addLog(13,"转账失败",`余额不足: ${p} → ${v}`),{success:!1,message:`❌ 转账失败！余额不足。当前余额: ${r.value[f].toLocaleString()} WBT，尝试转账: ${k.toLocaleString()} WBT`,hints:[],nextStep:""}):b==="0x0000000000000000000000000000000000000000"?(t.addLog(13,"转账失败","接收地址不能是零地址"),{success:!1,message:"❌ 转账失败！接收地址不能是零地址。",hints:[],nextStep:""}):f===b?(t.addLog(13,"转账失败","不能转账给自己"),{success:!1,message:"❌ 转账失败！不能转账给自己。",hints:[],nextStep:""}):(r.value[f]-=k,r.value[b]=(r.value[b]||0)+k,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${p} 到: ${v} 数量: ${k.toLocaleString()} WBT`,timestamp:Date.now(),type:"transfer"}),t.addLog(13,"转账",`${p} → ${v}: ${k.toLocaleString()} WBT`,"transfer13"),{success:!0,message:`✅ 转账成功！${p} 向 ${v} 转账 ${k.toLocaleString()} WBT 🎉 恭喜解锁：internal 和 virtual 函数！👉 点击查看代码了解所有知识点！`,hints:["internal_function"],nextStep:"🔒 太棒了！transfer() 内部调用了 _transfer() 这个 internal 函数！同时解锁了 virtual 关键字！👉 点击查看代码了解所有知识点！"})},m=(b,k)=>{const f=a.value,p=c(f),v=c(b);return i.value!=="deployer"?(t.addLog(13,"授权失败","只有 Deployer 才能授权"),{success:!1,message:"❌ 授权失败！只有代币持有者 Deployer 才能授权。请切换到 Deployer。",hints:[],nextStep:""}):f===b?(t.addLog(13,"授权失败","不能授权给自己"),{success:!1,message:"❌ 授权失败！不能授权给自己。",hints:[],nextStep:""}):(s.value[f]||(s.value[f]={}),s.value[f][b]=k,o.value.push({icon:"🟡",name:"Approval",details:`持有者: ${p} 被授权者: ${v} 额度: ${k.toLocaleString()} WBT`,timestamp:Date.now(),type:"approval"}),t.addLog(13,"授权",`${p} → ${v}: ${k.toLocaleString()} WBT`,"approve13"),{success:!0,message:`✅ 授权成功！${p} 授权 ${v} 可以使用 ${k.toLocaleString()} WBT`,hints:[],nextStep:"👉 切换到 Bob 执行代转账来学习更多！"})},C=(b,k)=>{var A;const f=((A=s.value[b])==null?void 0:A[k])||0,p=c(b),v=c(k);return t.addLog(13,"查询授权额度",`${v} 可用 ${p}: ${f.toLocaleString()} WBT`),{success:!0,allowance:f,message:`🔍 查询成功！${v} 可使用 ${p} 的额度: ${f.toLocaleString()} WBT 👉 切换到 Bob 执行代转账！`,hints:[],nextStep:"👉 切换到 Bob 执行代转账来学习 transferFrom！"}},h=(b,k,f)=>{var I;const p=a.value,v=c(p),A=c(b),_=c(k);if(i.value!=="bob")return t.addLog(13,"代转账失败","只有 Bob 才能执行代转账"),{success:!1,message:"❌ 代转账失败！只有被授权者 Bob 才能执行代转账。请切换到 Bob。",hints:[],nextStep:""};if(b!==n.deployer)return t.addLog(13,"代转账失败","Bob 只被 Deployer 授权"),{success:!1,message:"❌ 代转账失败！Bob 只被 Deployer 授权，只能从 Deployer 账户代转账。",hints:[],nextStep:""};const g=((I=s.value[b])==null?void 0:I[p])||0;return g<f?(t.addLog(13,"代转账失败",`授权额度不足: ${g.toLocaleString()} WBT`),{success:!1,message:`❌ 授权额度不足！Bob 只能使用 Deployer 的 ${g.toLocaleString()} WBT，尝试转账: ${f.toLocaleString()} WBT`,hints:[],nextStep:""}):r.value[b]<f?(t.addLog(13,"代转账失败",`余额不足: ${A}`),{success:!1,message:`❌ 余额不足！${A} 当前余额: ${r.value[b].toLocaleString()} WBT`,hints:[],nextStep:""}):(r.value[b]-=f,r.value[k]=(r.value[k]||0)+f,s.value[b][p]-=f,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${A} 到: ${_} 数量: ${f.toLocaleString()} WBT (by ${v})`,timestamp:Date.now(),type:"transfer"}),t.addLog(13,"代转账",`${v} 代替 ${A} → ${_}: ${f.toLocaleString()} WBT`,"transferFrom13"),{success:!0,message:`✅ 代转账成功！${v} 代替 ${A} 向 ${_} 转账 ${f.toLocaleString()} WBT 👉 点击查看代码了解 virtual 关键字！`,hints:[],nextStep:"🎉 太棒了！你已掌握 MyToken 全部核心功能！👉 点击查看代码了解 virtual 关键字！"})},E=b=>new Date(b).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),D=O(()=>({gasUsage:t.getDayGasUsage(13),ethCost:t.getDayEthCost(13),operationCount:t.getDayOperationCount(13)}));return{tokenInfo:e,roles:n,balances:r,allowances:s,currentRole:i,currentAddress:a,eventLog:o,realtimeData:D,switchRole:u,getBalance:d,transfer:w,approve:m,getAllowance:C,transferFrom:h,getRoleName:c,formatAddress:l,formatTime:E}}function Cp(){const t=Te(),e={alice:"0xAlice8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",bob:"0xBob5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},n=F("alice"),r=F(0),s=F([]),i=F([]),o=O(()=>e[n.value]),a=O(()=>s.value.filter(g=>g.owner===o.value)),c=g=>g===e.alice?"Alice":g===e.bob?"Bob":g.slice(0,6)+"..."+g.slice(-4),l=g=>g?g===e.alice?"Alice (0xAlice...7E6F)":g===e.bob?"Bob (0xBob...E2F)":g.slice(0,10)+"..."+g.slice(-8):"",u=g=>new Date(g).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),d=g=>{switch(g){case"Basic":return"📦";case"Premium":return"🏷️";case"TimeLocked":return"⏰";default:return"📦"}},w=g=>{n.value=g;const I={alice:"✅ 已切换到 Alice！👉 创建存款盒开始学习！",bob:"✅ 已切换到 Bob！👉 让 Alice 转移一个存款盒给你！"};return t.addLog(14,"切换角色",`切换到 ${g}`),{success:!0,message:I[g],hints:[],nextStep:""}},m=()=>{r.value++;const g=r.value,I=o.value,T=c(I),B={id:g,type:"Basic",owner:I,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:null,metadata:null};return s.value.push(B),i.value.push({icon:"📦",name:"BoxCreated",details:`${T} 创建了 Basic 存款盒 #${g}`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建Basic存款盒",`Box #${g} by ${T}`,"createBasicBox"),{success:!0,box:B,message:`✅ 创建 Basic 存款盒 #${g} 成功！🧬 恭喜解锁：合约继承！🎭 恭喜解锁：抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 创建 Premium 或 TimeLocked 来学习 override！`,hints:r.value>=2?["inheritance","abstract_contract","factory_pattern"]:["inheritance","abstract_contract"],nextStep:r.value>=2?"🧬 BasicDepositBox 继承了 BaseDepositBox 的所有功能！🎭 抽象合约定义了通用接口！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 创建 Premium 存款盒来学习 override 关键字！":"📦 BasicDepositBox 继承了 BaseDepositBox 的所有功能！🎭 抽象合约定义了通用接口！👉 创建 Premium 存款盒来学习 override 关键字！"}},C=()=>{r.value++;const g=r.value,I=o.value,T=c(I),B={id:g,type:"Premium",owner:I,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:null,metadata:""};return s.value.push(B),i.value.push({icon:"🏷️",name:"BoxCreated",details:`${T} 创建了 Premium 存款盒 #${g}`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建Premium存款盒",`Box #${g} by ${T}`,"createPremiumBox"),{success:!0,box:B,message:`✅ 创建 Premium 存款盒 #${g} 成功！📝 恭喜解锁：override 关键字和 virtual 函数！🎭 恭喜解锁：抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 设置元数据来学习更多！`,hints:r.value>=2?["override_keyword","virtual_function","abstract_contract","factory_pattern"]:["override_keyword","virtual_function","abstract_contract"],nextStep:r.value>=2?"🏷️ PremiumDepositBox 使用 override 重写了 getBoxType()！🎭 抽象合约定义了通用接口！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 设置元数据来学习 metadata_storage！":"🏷️ PremiumDepositBox 使用 override 重写了 getBoxType()！🎭 抽象合约定义了通用接口！👉 设置元数据来学习 metadata_storage！"}},h=g=>{r.value++;const I=r.value,T=o.value,B=c(T),$=Date.now()+g*1e3,K={id:I,type:"TimeLocked",owner:T,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:$,metadata:null};return s.value.push(K),i.value.push({icon:"⏰",name:"BoxCreated",details:`${B} 创建了 TimeLocked 存款盒 #${I}，锁定 ${g} 秒`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建TimeLocked存款盒",`Box #${I} by ${B}, 锁定 ${g}秒`,"createTimeLockedBox"),{success:!0,box:K,message:`✅ 创建 TimeLocked 存款盒 #${I} 成功！⏰ 恭喜解锁：时间锁定和抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 存入秘密并在锁定期间尝试取出！`,hints:r.value>=2?["abstract_contract","time_lock","factory_pattern"]:["abstract_contract","time_lock"],nextStep:r.value>=2?"⏰ TimeLockedDepositBox 使用修饰器组合保护 getSecret()！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 存入秘密并在锁定期间尝试取出！":"⏰ TimeLockedDepositBox 使用修饰器组合保护 getSecret()！👉 存入秘密并在锁定期间尝试取出！"}},E=(g,I)=>{const T=s.value.find($=>$.id===g);if(!T)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(T.owner!==o.value)return t.addLog(14,"存入秘密失败",`无权操作 Box #${g}`),{success:!1,message:"❌ 只有所有者才能存入秘密！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试存入秘密！"};T.secret=I;const B=c(T.owner);return i.value.push({icon:"🔐",name:"SecretStored",details:`${B} 向 Box #${g} 存入了秘密`,timestamp:Date.now(),type:"store"}),t.addLog(14,"存入秘密",`Box #${g} by ${B}`,"storeSecret"),{success:!0,message:`✅ 秘密已存入 Box #${g}！👉 尝试取出秘密！`,hints:[],nextStep:"🔐 秘密已安全存储！👉 尝试取出秘密！"}},D=g=>{const I=s.value.find(B=>B.id===g);if(!I)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(I.owner!==o.value)return t.addLog(14,"取出秘密失败",`无权操作 Box #${g}`),{success:!1,message:"❌ 只有所有者才能取出秘密！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试取出秘密！"};if(I.type==="TimeLocked"&&I.unlockTime&&Date.now()<I.unlockTime){const B=Math.ceil((I.unlockTime-Date.now())/1e3);return t.addLog(14,"取出秘密失败",`Box #${g} 仍锁定，剩余 ${B} 秒`),{success:!1,message:`❌ Box #${g} 仍处于锁定状态！剩余 ${B} 秒。🔗 修饰器组合阻止了操作！`,hints:["modifier_combination","super_keyword"],nextStep:"🔗 修饰器组合 timeUnlocked 阻止了操作！👉 等待解锁或创建其他类型的存款盒！"}}const T=c(I.owner);return t.addLog(14,"取出秘密",`Box #${g} by ${T}`),{success:!0,secret:I.secret,message:`✅ 成功取出 Box #${g} 的秘密！`,hints:[],nextStep:I.type==="TimeLocked"?"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。TimeLocked 使用 super.getSecret() 调用父合约实现！👉 设置元数据或转移所有权来学习更多！":"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。👉 转移所有权给 Bob 来学习所有权转移流程！"}},b=(g,I)=>{const T=s.value.find($=>$.id===g);if(!T)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(T.type!=="Premium")return{success:!1,message:"❌ 只有 Premium 存款盒支持元数据！",hints:[],nextStep:""};if(T.owner!==o.value)return t.addLog(14,"设置元数据失败",`无权操作 Box #${g}`),{success:!1,message:"❌ 只有所有者才能设置元数据！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到 Premium 存款盒的所有者角色来尝试设置元数据！"};T.metadata=I;const B=c(T.owner);return i.value.push({icon:"🏷️",name:"MetadataSet",details:`${B} 设置了 Box #${g} 的元数据`,timestamp:Date.now(),type:"metadata"}),t.addLog(14,"设置元数据",`Box #${g} by ${B}`,"setMetadata"),{success:!0,message:`✅ 元数据已设置到 Box #${g}！🏷️ 恭喜解锁：元数据存储！`,hints:["metadata_storage"],nextStep:"🏷️ Premium 版本通过继承扩展了功能！👉 创建第2个存款盒来体验工厂模式！"}},k=g=>{const I=s.value.find(T=>T.id===g);return!I||I.type!=="Premium"?{success:!1,metadata:""}:(t.addLog(14,"获取元数据",`Box #${g}`),{success:!0,metadata:I.metadata||""})},f=g=>{const I=s.value.find(B=>B.id===g);if(!I||I.type!=="TimeLocked")return{success:!1,unlockTime:0,remaining:0};const T=I.unlockTime?Math.max(0,Math.ceil((I.unlockTime-Date.now())/1e3)):0;return t.addLog(14,"查询解锁时间",`Box #${g}, 剩余 ${T} 秒`),{success:!0,unlockTime:I.unlockTime||0,remaining:T}},p=(g,I)=>{const T=s.value.find(N=>N.id===g);if(!T)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(T.owner!==o.value)return t.addLog(14,"转移所有权失败",`无权操作 Box #${g}`),{success:!1,message:"❌ 只有所有者才能转移所有权！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试转移所有权！"};const B=T.owner,$=c(B),K=c(I);return T.owner=I,i.value.push({icon:"🔑",name:"OwnershipTransferred",details:`Box #${g} 从 ${$} 转移到 ${K}`,timestamp:Date.now(),type:"transfer"}),t.addLog(14,"转移所有权",`Box #${g} 从 ${$} 到 ${K}`,"transferOwnership14"),{success:!0,message:`✅ Box #${g} 所有权已从 ${$} 转移到 ${K}！👉 新所有者需要调用 completeOwnershipTransfer 来更新记录！`,hints:r.value>=2?["factory_pattern"]:[],nextStep:r.value>=2?"🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 切换到新所有者完成所有权转移！":"👉 切换到新所有者调用 completeOwnershipTransfer 来更新记录！"}},v=g=>{const I=s.value.find(B=>B.id===g);if(!I)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(I.owner!==o.value)return t.addLog(14,"完成所有权转移失败",`不是新所有者 Box #${g}`),{success:!1,message:"❌ 你不是该存款盒的新所有者！",hints:[],nextStep:""};const T=c(I.owner);return t.addLog(14,"完成所有权转移",`Box #${g} 新所有者 ${T}`,"completeOwnershipTransfer"),{success:!0,message:`✅ 所有权转移完成！${T} 现在拥有 Box #${g}！`,hints:[],nextStep:"👉 查看完整代码来复习所有知识点！"}},A=g=>f(g).remaining||0,_=O(()=>({gasUsage:t.getDayGasUsage(14),ethCost:t.getDayEthCost(14),operationCount:t.getDayOperationCount(14)}));return{roles:e,currentRole:n,depositBoxes:s,myBoxes:a,eventLog:i,boxCounter:r,currentAddress:o,realtimeData:_,switchRole:w,getRoleName:c,formatAddress:l,formatTime:u,getBoxIcon:d,createBasicBox:m,createPremiumBox:C,createTimeLockedBox:h,storeSecret:E,getSecret:D,setMetadata:b,getMetadata:k,getUnlockTime:f,getRemainingLockTime:A,transferOwnership:p,completeOwnershipTransfer:v}}function kp(){const t=Te(),e=F(0),n=F([]),r=F({"0xUser1234567890abcdef":0n,"0xAlice1234567890abcdef":0n,"0xBob1234567890abcdef":0n}),s=F("0xUser1234567890abcdef"),i=F([]),o=O(()=>r.value[s.value]||0n),a=O(()=>{const f=Date.now();return n.value.filter(p=>p.endTime>f&&!p.executed)}),c=O(()=>{const f=Date.now();return n.value.filter(p=>p.endTime<=f&&!p.executed)}),l=O(()=>n.value.filter(f=>f.executed)),u=f=>f?f===s.value?"你 (0xUser...cdef)":f==="0xAlice1234567890abcdef"?"Alice (0xAl...cdef)":f==="0xBob1234567890abcdef"?"Bob (0xBob...cdef)":f.slice(0,10)+"..."+f.slice(-8):"",d=f=>new Date(f).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),w=f=>{const p=Date.now(),v=Math.max(0,f-p),A=Math.floor(v/1e3);return A<60?`${A}秒`:`${Math.floor(A/60)}分${A%60}秒`},m=f=>{const p=Date.now();return f.executed?{text:"已执行",class:"executed"}:f.endTime<=p?{text:"已结束",class:"ended"}:{text:"活跃",class:"active"}},C=(f,p)=>{if(!f||f.trim()==="")return{success:!1,error:"❌ 请输入提案名称！",hint:"👝 提案名称不能为空！"};if(!p||p<1)return{success:!1,error:"❌ 请输入有效的持续时间（至少1分钟）！",hint:"⏰ 持续时间必须大于0！"};e.value++;const v=e.value-1,A={id:v,name:f.trim(),voteCount:0,startTime:Date.now(),endTime:Date.now()+p*60*1e3,executed:!1,creator:s.value};n.value.push(A),i.value.unshift({icon:"📝",name:"ProposalCreated",details:`创建提案 "${A.name}" (ID: ${v})`,timestamp:Date.now(),type:"create"}),t.addLog(15,"创建提案",`Proposal #${v}: ${f}`,"createProposal15");const _=["bytes32_string"];e.value>=3&&_.push("storage_optimization");const g=e.value>=3?`✅ 创建提案 #${v} 成功！📝 恭喜解锁：bytes32 vs string！💾 恭喜解锁：存储优化！👉 现在尝试投票来学习位运算！`:`✅ 创建提案 #${v} 成功！📝 恭喜解锁：bytes32 vs string！👉 继续创建提案或尝试投票来学习位运算！`;return{success:!0,proposal:A,message:g,hints:_,nextStep:e.value>=3?"📝 bytes32 比 string 更省 Gas！💾 创建3个提案展示了 uint8 类型的存储优化！👉 现在尝试投票来学习位运算！":"📝 bytes32 比 string 更省 Gas！👉 继续创建提案或尝试投票来学习位运算！"}},h=f=>{const p=n.value[f];if(!p)return{success:!1,error:"❌ 提案不存在！",hint:"👝 请选择有效的提案！"};const v=Date.now();if(p.endTime<=v)return{success:!1,error:"❌ 提案已结束，无法投票！",hint:"⏰ 投票窗口已关闭！"};const A=1n<<BigInt(f),_=o.value;return(_&A)!==0n?{success:!1,error:"❌ 已经对此提案投过票了！",hint:"🎭 掩码检查防止重复投票！",hasVoted:!0}:(r.value[s.value]=_|A,p.voteCount++,i.value.unshift({icon:"🗳️",name:"Voted",details:`${u(s.value)} 对提案 #${f} 投票`,timestamp:Date.now(),type:"vote"}),t.addLog(15,"投票",`Proposal #${f}`,"vote15"),{success:!0,proposal:p,message:"✅ 投票成功！⚡ 恭喜解锁：位运算技巧！🗺️ 恭喜解锁：映射存储！⏰ 恭喜解锁：时间戳验证！👉 尝试重复投票来体验掩码检查！",hints:["bit_operation","mapping_storage","timestamp_block"],nextStep:"⚡ 位运算让1个uint256存储256个投票状态！🗺️ 映射高效存储选民数据！⏰ 使用block.timestamp进行时间验证！👉 尝试对同一提案再次投票来体验掩码检查！"})},E=f=>{const p=n.value[f];if(!p)return{success:!1,error:"❌ 提案不存在！",hint:"👝 请选择有效的提案！"};if(p.executed)return{success:!1,error:"❌ 提案已经执行过了！",hint:"✅ 该提案已执行！"};const v=Date.now();return p.endTime>v?{success:!1,error:"❌ 提案还在进行中，无法执行！",hint:"⏰ 请等待投票结束后再执行！"}:(p.executed=!0,i.value.unshift({icon:"✅",name:"ProposalExecuted",details:`执行提案 "${p.name}" (ID: ${f}, 得票: ${p.voteCount})`,timestamp:Date.now(),type:"execute"}),t.addLog(15,"执行提案",`Proposal #${f}`,"executeProposal15"),{success:!0,proposal:p,message:`✅ 执行提案 #${f} 成功！📋 恭喜解锁：事件日志！🎉 你已解锁所有知识点！`,hints:["event_logging"],nextStep:"📋 事件日志用于链下索引和前端监听！🎉 恭喜！你已掌握Day 15所有核心概念！"})},D=f=>{const p=1n<<BigInt(f),v=o.value,A=(v&p)!==0n;return{proposalId:f,mask:p.toString(2),voterData:v.toString(2),hasVoted:A,operation:A?"已投票 (AND检查)":"未投票 (OR设置)",gasSaving:"使用位运算，1个uint256可存储256个提案的投票状态，节省约40% Gas！"}},b=()=>({slots:[{slot:0,name:"proposalCount",type:"uint8",value:e.value,description:"提案总数（使用uint8节省存储）"},{slot:1,name:"proposals mapping",type:"mapping",value:`${n.value.length} 个提案`,description:"提案映射（每个提案使用紧凑数据类型）"},{slot:"X",name:"voterRegistry mapping",type:"mapping(uint256)",value:`${Object.keys(r.value).length} 个选民`,description:"选民投票位图（1个uint256存储256个投票状态）"},{slot:"Y",name:"proposalVoterCount",type:"mapping(uint32)",value:"按提案统计",description:"提案投票数（uint32足够大）"}]}),k=O(()=>({gasUsage:t.getDayGasUsage(15),ethCost:t.getDayEthCost(15),operationCount:t.getDayOperationCount(15)}));return{proposals:n,eventLog:i,currentAddress:s,proposalCounter:e,currentVoterData:o,activeProposals:a,endedProposals:c,executedProposals:l,createProposal:C,vote:h,executeProposal:E,getBitOperationDemo:D,getStorageVisualization:b,formatAddress:u,formatTime:d,formatRemainingTime:w,getProposalStatus:m,realtimeData:k}}const Ep="6.16.0";function Sp(t,e,n){const r=e.split("|").map(i=>i.trim());for(let i=0;i<r.length;i++)switch(e){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof t===e)return}const s=new Error(`invalid value for type ${e}`);throw s.code="INVALID_ARGUMENT",s.argument=`value.${n}`,s.value=t,s}function _e(t,e,n){for(let r in e){let s=e[r];const i=n?n[r]:null;i&&Sp(s,i,r),Object.defineProperty(t,r,{enumerable:!0,value:s,writable:!1})}}function ar(t,e){if(t==null)return"null";if(e==null&&(e=new Set),typeof t=="object"){if(e.has(t))return"[Circular]";e.add(t)}if(Array.isArray(t))return"[ "+t.map(n=>ar(n,e)).join(", ")+" ]";if(t instanceof Uint8Array){const n="0123456789abcdef";let r="0x";for(let s=0;s<t.length;s++)r+=n[t[s]>>4],r+=n[t[s]&15];return r}if(typeof t=="object"&&typeof t.toJSON=="function")return ar(t.toJSON(),e);switch(typeof t){case"boolean":case"number":case"symbol":return t.toString();case"bigint":return BigInt(t).toString();case"string":return JSON.stringify(t);case"object":{const n=Object.keys(t);return n.sort(),"{ "+n.map(r=>`${ar(r,e)}: ${ar(t[r],e)}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function Oa(t,e){return t&&t.code===e}function El(t,e,n){let r=t;{const i=[];if(n){if("message"in n||"code"in n||"name"in n)throw new Error(`value will overwrite populated values: ${ar(n)}`);for(const o in n){if(o==="shortMessage")continue;const a=n[o];i.push(o+"="+ar(a))}}i.push(`code=${e}`),i.push(`version=${Ep}`),i.length&&(t+=" ("+i.join(", ")+")")}let s;switch(e){case"INVALID_ARGUMENT":s=new TypeError(t);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":s=new RangeError(t);break;default:s=new Error(t)}return _e(s,{code:e}),n&&Object.assign(s,n),s.shortMessage==null&&_e(s,{shortMessage:r}),s}function Ae(t,e,n,r){if(!t)throw El(e,n,r)}function G(t,e,n,r){Ae(t,e,"INVALID_ARGUMENT",{argument:n,value:r})}function Sl(t,e,n){n==null&&(n=""),n&&(n=": "+n),Ae(t>=e,"missing argument"+n,"MISSING_ARGUMENT",{count:t,expectedCount:e}),Ae(t<=e,"too many arguments"+n,"UNEXPECTED_ARGUMENT",{count:t,expectedCount:e})}["NFD","NFC","NFKD","NFKC"].reduce((t,e)=>{try{if("test".normalize(e)!=="test")throw new Error("bad");if(e==="NFD"&&"é".normalize("NFD")!=="é")throw new Error("broken");t.push(e)}catch{}return t},[]);function li(t,e,n){if(n==null&&(n=""),t!==e){let r=n,s="new";n&&(r+=".",s+=" "+n),Ae(!1,`private constructor; use ${r}from* methods`,"UNSUPPORTED_OPERATION",{operation:s})}}function Al(t,e,n){if(t instanceof Uint8Array)return n?new Uint8Array(t):t;if(typeof t=="string"&&t.length%2===0&&t.match(/^0x[0-9a-f]*$/i)){const r=new Uint8Array((t.length-2)/2);let s=2;for(let i=0;i<r.length;i++)r[i]=parseInt(t.substring(s,s+2),16),s+=2;return r}G(!1,"invalid BytesLike value",e||"value",t)}function We(t,e){return Al(t,e,!1)}function je(t,e){return Al(t,e,!0)}function Vn(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||typeof e=="number"&&t.length!==2+2*e||e===!0&&t.length%2!==0)}const Ba="0123456789abcdef";function fe(t){const e=We(t);let n="0x";for(let r=0;r<e.length;r++){const s=e[r];n+=Ba[(s&240)>>4]+Ba[s&15]}return n}function un(t){return"0x"+t.map(e=>fe(e).substring(2)).join("")}function Kr(t){return Vn(t,!0)?(t.length-2)/2:We(t).length}function sr(t,e,n){const r=We(t);return n!=null&&n>r.length&&Ae(!1,"cannot slice beyond data bounds","BUFFER_OVERRUN",{buffer:r,length:r.length,offset:n}),fe(r.slice(e??0,n??r.length))}function Tl(t,e,n){const r=We(t);Ae(e>=r.length,"padding exceeds data length","BUFFER_OVERRUN",{buffer:new Uint8Array(r),length:e,offset:e+1});const s=new Uint8Array(e);return s.fill(0),n?s.set(r,e-r.length):s.set(r,0),fe(s)}function Il(t,e){return Tl(t,e,!0)}function Ap(t,e){return Tl(t,e,!1)}const ls=BigInt(0),xt=BigInt(1),cr=9007199254740991;function Tp(t,e){const n=ui(t,"value"),r=BigInt(Et(e,"width"));if(Ae(n>>r===ls,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:t}),n>>r-xt){const s=(xt<<r)-xt;return-((~n&s)+xt)}return n}function Ip(t,e){let n=qt(t,"value");const r=BigInt(Et(e,"width")),s=xt<<r-xt;if(n<ls){n=-n,Ae(n<=s,"too low","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:t});const i=(xt<<r)-xt;return(~n&i)+xt}else Ae(n<s,"too high","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:t});return n}function ys(t,e){const n=ui(t,"value"),r=BigInt(Et(e,"bits"));return n&(xt<<r)-xt}function qt(t,e){switch(typeof t){case"bigint":return t;case"number":return G(Number.isInteger(t),"underflow",e||"value",t),G(t>=-cr&&t<=cr,"overflow",e||"value",t),BigInt(t);case"string":try{if(t==="")throw new Error("empty string");return t[0]==="-"&&t[1]!=="-"?-BigInt(t.substring(1)):BigInt(t)}catch(n){G(!1,`invalid BigNumberish string: ${n.message}`,e||"value",t)}}G(!1,"invalid BigNumberish value",e||"value",t)}function ui(t,e){const n=qt(t,e);return Ae(n>=ls,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:t}),n}const Pa="0123456789abcdef";function Dl(t){if(t instanceof Uint8Array){let e="0x0";for(const n of t)e+=Pa[n>>4],e+=Pa[n&15];return BigInt(e)}return qt(t)}function Et(t,e){switch(typeof t){case"bigint":return G(t>=-cr&&t<=cr,"overflow",e||"value",t),Number(t);case"number":return G(Number.isInteger(t),"underflow",e||"value",t),G(t>=-cr&&t<=cr,"overflow",e||"value",t),t;case"string":try{if(t==="")throw new Error("empty string");return Et(BigInt(t),e)}catch(n){G(!1,`invalid numeric string: ${n.message}`,e||"value",t)}}G(!1,"invalid numeric value",e||"value",t)}function Dp(t){return Et(Dl(t))}function Vs(t,e){const n=ui(t,"value");let r=n.toString(16);if(e==null)r.length%2&&(r="0"+r);else{const s=Et(e,"width");if(s===0&&n===ls)return"0x";for(Ae(s*2>=r.length,`value exceeds width (${s} bytes)`,"NUMERIC_FAULT",{operation:"toBeHex",fault:"overflow",value:t});r.length<s*2;)r="0"+r}return"0x"+r}function Ol(t,e){const n=ui(t,"value");if(n===ls)return new Uint8Array(0);let r=n.toString(16);r.length%2&&(r="0"+r);const s=new Uint8Array(r.length/2);for(let i=0;i<s.length;i++){const o=i*2;s[i]=parseInt(r.substring(o,o+2),16)}return s}function Op(t,e,n,r,s){G(!1,`invalid codepoint at offset ${e}; ${t}`,"bytes",n)}function Bl(t,e,n,r,s){if(t==="BAD_PREFIX"||t==="UNEXPECTED_CONTINUE"){let i=0;for(let o=e+1;o<n.length&&n[o]>>6===2;o++)i++;return i}return t==="OVERRUN"?n.length-e-1:0}function Bp(t,e,n,r,s){return t==="OVERLONG"?(G(typeof s=="number","invalid bad code point for replacement","badCodepoint",s),r.push(s),0):(r.push(65533),Bl(t,e,n))}const Pp=Object.freeze({error:Op,ignore:Bl,replace:Bp});function Rp(t,e){e==null&&(e=Pp.error);const n=We(t,"bytes"),r=[];let s=0;for(;s<n.length;){const i=n[s++];if(!(i>>7)){r.push(i);continue}let o=null,a=null;if((i&224)===192)o=1,a=127;else if((i&240)===224)o=2,a=2047;else if((i&248)===240)o=3,a=65535;else{(i&192)===128?s+=e("UNEXPECTED_CONTINUE",s-1,n,r):s+=e("BAD_PREFIX",s-1,n,r);continue}if(s-1+o>=n.length){s+=e("OVERRUN",s-1,n,r);continue}let c=i&(1<<8-o-1)-1;for(let l=0;l<o;l++){let u=n[s];if((u&192)!=128){s+=e("MISSING_CONTINUE",s,n,r),c=null;break}c=c<<6|u&63,s++}if(c!==null){if(c>1114111){s+=e("OUT_OF_RANGE",s-1-o,n,r,c);continue}if(c>=55296&&c<=57343){s+=e("UTF16_SURROGATE",s-1-o,n,r,c);continue}if(c<=a){s+=e("OVERLONG",s-1-o,n,r,c);continue}r.push(c)}}return r}function di(t,e){G(typeof t=="string","invalid string value","str",t);let n=[];for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);if(s<128)n.push(s);else if(s<2048)n.push(s>>6|192),n.push(s&63|128);else if((s&64512)==55296){r++;const i=t.charCodeAt(r);G(r<t.length&&(i&64512)===56320,"invalid surrogate pair","str",t);const o=65536+((s&1023)<<10)+(i&1023);n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128)}else n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128)}return new Uint8Array(n)}function $p(t){return t.map(e=>e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10&1023)+55296,(e&1023)+56320))).join("")}function Lp(t,e){return $p(Rp(t,e))}const Je=32,ji=new Uint8Array(Je),Np=["then"],bs={},Pl=new WeakMap;function Un(t){return Pl.get(t)}function Ra(t,e){Pl.set(t,e)}function Pr(t,e){const n=new Error(`deferred error during ABI decoding triggered accessing ${t}`);throw n.error=e,n}function Ji(t,e,n){return t.indexOf(null)>=0?e.map((r,s)=>r instanceof Cr?Ji(Un(r),r,n):r):t.reduce((r,s,i)=>{let o=e.getValue(s);return s in r||(n&&o instanceof Cr&&(o=Ji(Un(o),o,n)),r[s]=o),r},{})}var pr;const lr=class lr extends Array{constructor(...n){const r=n[0];let s=n[1],i=(n[2]||[]).slice(),o=!0;r!==bs&&(s=n,i=[],o=!1);super(s.length);he(this,pr);s.forEach((l,u)=>{this[u]=l});const a=i.reduce((l,u)=>(typeof u=="string"&&l.set(u,(l.get(u)||0)+1),l),new Map);if(Ra(this,Object.freeze(s.map((l,u)=>{const d=i[u];return d!=null&&a.get(d)===1?d:null}))),oe(this,pr,[]),M(this,pr)==null&&M(this,pr),!o)return;Object.freeze(this);const c=new Proxy(this,{get:(l,u,d)=>{if(typeof u=="string"){if(u.match(/^[0-9]+$/)){const m=Et(u,"%index");if(m<0||m>=this.length)throw new RangeError("out of result range");const C=l[m];return C instanceof Error&&Pr(`index ${m}`,C),C}if(Np.indexOf(u)>=0)return Reflect.get(l,u,d);const w=l[u];if(w instanceof Function)return function(...m){return w.apply(this===d?l:this,m)};if(!(u in l))return l.getValue.apply(this===d?l:this,[u])}return Reflect.get(l,u,d)}});return Ra(c,Un(this)),c}toArray(n){const r=[];return this.forEach((s,i)=>{s instanceof Error&&Pr(`index ${i}`,s),n&&s instanceof lr&&(s=s.toArray(n)),r.push(s)}),r}toObject(n){const r=Un(this);return r.reduce((s,i,o)=>(Ae(i!=null,`value at index ${o} unnamed`,"UNSUPPORTED_OPERATION",{operation:"toObject()"}),Ji(r,this,n)),{})}slice(n,r){n==null&&(n=0),n<0&&(n+=this.length,n<0&&(n=0)),r==null&&(r=this.length),r<0&&(r+=this.length,r<0&&(r=0)),r>this.length&&(r=this.length);const s=Un(this),i=[],o=[];for(let a=n;a<r;a++)i.push(this[a]),o.push(s[a]);return new lr(bs,i,o)}filter(n,r){const s=Un(this),i=[],o=[];for(let a=0;a<this.length;a++){const c=this[a];c instanceof Error&&Pr(`index ${a}`,c),n.call(r,c,a,this)&&(i.push(c),o.push(s[a]))}return new lr(bs,i,o)}map(n,r){const s=[];for(let i=0;i<this.length;i++){const o=this[i];o instanceof Error&&Pr(`index ${i}`,o),s.push(n.call(r,o,i,this))}return s}getValue(n){const r=Un(this).indexOf(n);if(r===-1)return;const s=this[r];return s instanceof Error&&Pr(`property ${JSON.stringify(n)}`,s.error),s}static fromItems(n,r){return new lr(bs,n,r)}};pr=new WeakMap;let Cr=lr;function $a(t){let e=Ol(t);return Ae(e.length<=Je,"value out-of-bounds","BUFFER_OVERRUN",{buffer:e,length:Je,offset:e.length}),e.length!==Je&&(e=je(un([ji.slice(e.length%Je),e]))),e}class yn{constructor(e,n,r,s){Q(this,"name");Q(this,"type");Q(this,"localName");Q(this,"dynamic");_e(this,{name:e,type:n,localName:r,dynamic:s},{name:"string",type:"string",localName:"string",dynamic:"boolean"})}_throwError(e,n){G(!1,e,this.localName,n)}}var tn,Wn,gr,Is;class Xi{constructor(){he(this,gr);he(this,tn);he(this,Wn);oe(this,tn,[]),oe(this,Wn,0)}get data(){return un(M(this,tn))}get length(){return M(this,Wn)}appendWriter(e){return xe(this,gr,Is).call(this,je(e.data))}writeBytes(e){let n=je(e);const r=n.length%Je;return r&&(n=je(un([n,ji.slice(r)]))),xe(this,gr,Is).call(this,n)}writeValue(e){return xe(this,gr,Is).call(this,$a(e))}writeUpdatableValue(){const e=M(this,tn).length;return M(this,tn).push(ji),oe(this,Wn,M(this,Wn)+Je),n=>{M(this,tn)[e]=$a(n)}}}tn=new WeakMap,Wn=new WeakMap,gr=new WeakSet,Is=function(e){return M(this,tn).push(e),oe(this,Wn,M(this,Wn)+e.length),e.length};var Qe,at,zn,Gn,Sn,tr,Zi,Rl;const Uo=class Uo{constructor(e,n,r){he(this,tr);Q(this,"allowLoose");he(this,Qe);he(this,at);he(this,zn);he(this,Gn);he(this,Sn);_e(this,{allowLoose:!!n}),oe(this,Qe,je(e)),oe(this,zn,0),oe(this,Gn,null),oe(this,Sn,r??1024),oe(this,at,0)}get data(){return fe(M(this,Qe))}get dataLength(){return M(this,Qe).length}get consumed(){return M(this,at)}get bytes(){return new Uint8Array(M(this,Qe))}subReader(e){const n=new Uo(M(this,Qe).slice(M(this,at)+e),this.allowLoose,M(this,Sn));return oe(n,Gn,this),n}readBytes(e,n){let r=xe(this,tr,Rl).call(this,0,e,!!n);return xe(this,tr,Zi).call(this,e),oe(this,at,M(this,at)+r.length),r.slice(0,e)}readValue(){return Dl(this.readBytes(Je))}readIndex(){return Dp(this.readBytes(Je))}};Qe=new WeakMap,at=new WeakMap,zn=new WeakMap,Gn=new WeakMap,Sn=new WeakMap,tr=new WeakSet,Zi=function(e){var n;if(M(this,Gn))return xe(n=M(this,Gn),tr,Zi).call(n,e);oe(this,zn,M(this,zn)+e),Ae(M(this,Sn)<1||M(this,zn)<=M(this,Sn)*this.dataLength,`compressed ABI data exceeds inflation ratio of ${M(this,Sn)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`,"BUFFER_OVERRUN",{buffer:je(M(this,Qe)),offset:M(this,at),length:e,info:{bytesRead:M(this,zn),dataLength:this.dataLength}})},Rl=function(e,n,r){let s=Math.ceil(n/Je)*Je;return M(this,at)+s>M(this,Qe).length&&(this.allowLoose&&r&&M(this,at)+n<=M(this,Qe).length?s=n:Ae(!1,"data out-of-bounds","BUFFER_OVERRUN",{buffer:je(M(this,Qe)),length:M(this,Qe).length,offset:M(this,at)+s})),M(this,Qe).slice(M(this,at),M(this,at)+s)};let Yi=Uo;function qs(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Do(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function Up(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");qs(t.outputLen),qs(t.blockLen)}function kr(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function $l(t,e){Do(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Ti=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ll=t=>t instanceof Uint8Array,Mp=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),Ii=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Rt=(t,e)=>t<<32-e|t>>>e,Fp=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Fp)throw new Error("Non little-endian hardware is not supported");function Hp(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function fi(t){if(typeof t=="string"&&(t=Hp(t)),!Ll(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}function Vp(...t){const e=new Uint8Array(t.reduce((r,s)=>r+s.length,0));let n=0;return t.forEach(r=>{if(!Ll(r))throw new Error("Uint8Array expected");e.set(r,n),n+=r.length}),e}class Oo{clone(){return this._cloneInto()}}function Nl(t){const e=r=>t().update(fi(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function qp(t=32){if(Ti&&typeof Ti.getRandomValues=="function")return Ti.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}class Ul extends Oo{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,Up(e);const r=fi(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const s=this.blockLen,i=new Uint8Array(s);i.set(r.length>s?e.create().update(r).digest():r);for(let o=0;o<i.length;o++)i[o]^=54;this.iHash.update(i),this.oHash=e.create();for(let o=0;o<i.length;o++)i[o]^=106;this.oHash.update(i),i.fill(0)}update(e){return kr(this),this.iHash.update(e),this}digestInto(e){kr(this),Do(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:s,destroyed:i,blockLen:o,outputLen:a}=this;return e=e,e.finished=s,e.destroyed=i,e.blockLen=o,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Ml=(t,e,n)=>new Ul(t,e).update(n).digest();Ml.create=(t,e)=>new Ul(t,e);function Wp(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const s=BigInt(32),i=BigInt(4294967295),o=Number(n>>s&i),a=Number(n&i),c=r?4:0,l=r?0:4;t.setUint32(e+c,o,r),t.setUint32(e+l,a,r)}class zp extends Oo{constructor(e,n,r,s){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=s,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Ii(this.buffer)}update(e){kr(this);const{view:n,buffer:r,blockLen:s}=this;e=fi(e);const i=e.length;for(let o=0;o<i;){const a=Math.min(s-this.pos,i-o);if(a===s){const c=Ii(e);for(;s<=i-o;o+=s)this.process(c,o);continue}r.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===s&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){kr(this),$l(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:s,isLE:i}=this;let{pos:o}=this;n[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>s-o&&(this.process(r,0),o=0);for(let d=o;d<s;d++)n[d]=0;Wp(r,s-8,BigInt(this.length*8),i),this.process(r,0);const a=Ii(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<l;d++)a.setUint32(4*d,u[d],i)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:s,finished:i,destroyed:o,pos:a}=this;return e.length=s,e.pos=a,e.finished=i,e.destroyed=o,s%n&&e.buffer.set(r),e}}const Gp=(t,e,n)=>t&e^~t&n,Kp=(t,e,n)=>t&e^t&n^e&n,jp=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),wn=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),vn=new Uint32Array(64);class Jp extends zp{constructor(){super(64,32,8,!1),this.A=wn[0]|0,this.B=wn[1]|0,this.C=wn[2]|0,this.D=wn[3]|0,this.E=wn[4]|0,this.F=wn[5]|0,this.G=wn[6]|0,this.H=wn[7]|0}get(){const{A:e,B:n,C:r,D:s,E:i,F:o,G:a,H:c}=this;return[e,n,r,s,i,o,a,c]}set(e,n,r,s,i,o,a,c){this.A=e|0,this.B=n|0,this.C=r|0,this.D=s|0,this.E=i|0,this.F=o|0,this.G=a|0,this.H=c|0}process(e,n){for(let d=0;d<16;d++,n+=4)vn[d]=e.getUint32(n,!1);for(let d=16;d<64;d++){const w=vn[d-15],m=vn[d-2],C=Rt(w,7)^Rt(w,18)^w>>>3,h=Rt(m,17)^Rt(m,19)^m>>>10;vn[d]=h+vn[d-7]+C+vn[d-16]|0}let{A:r,B:s,C:i,D:o,E:a,F:c,G:l,H:u}=this;for(let d=0;d<64;d++){const w=Rt(a,6)^Rt(a,11)^Rt(a,25),m=u+w+Gp(a,c,l)+jp[d]+vn[d]|0,h=(Rt(r,2)^Rt(r,13)^Rt(r,22))+Kp(r,s,i)|0;u=l,l=c,c=a,a=o+m|0,o=i,i=s,s=r,r=m+h|0}r=r+this.A|0,s=s+this.B|0,i=i+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(r,s,i,o,a,c,l,u)}roundClean(){vn.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Xp=Nl(()=>new Jp),ws=BigInt(2**32-1),La=BigInt(32);function Yp(t,e=!1){return e?{h:Number(t&ws),l:Number(t>>La&ws)}:{h:Number(t>>La&ws)|0,l:Number(t&ws)|0}}function Zp(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:i,l:o}=Yp(t[s],e);[n[s],r[s]]=[i,o]}return[n,r]}const Qp=(t,e,n)=>t<<n|e>>>32-n,eg=(t,e,n)=>e<<n|t>>>32-n,tg=(t,e,n)=>e<<n-32|t>>>64-n,ng=(t,e,n)=>t<<n-32|e>>>64-n,[Fl,Hl,Vl]=[[],[],[]],rg=BigInt(0),Rr=BigInt(1),sg=BigInt(2),ig=BigInt(7),og=BigInt(256),ag=BigInt(113);for(let t=0,e=Rr,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],Fl.push(2*(5*r+n)),Hl.push((t+1)*(t+2)/2%64);let s=rg;for(let i=0;i<7;i++)e=(e<<Rr^(e>>ig)*ag)%og,e&sg&&(s^=Rr<<(Rr<<BigInt(i))-Rr);Vl.push(s)}const[cg,lg]=Zp(Vl,!0),Na=(t,e,n)=>n>32?tg(t,e,n):Qp(t,e,n),Ua=(t,e,n)=>n>32?ng(t,e,n):eg(t,e,n);function ug(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let o=0;o<10;o++)n[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,c=(o+2)%10,l=n[c],u=n[c+1],d=Na(l,u,1)^n[a],w=Ua(l,u,1)^n[a+1];for(let m=0;m<50;m+=10)t[o+m]^=d,t[o+m+1]^=w}let s=t[2],i=t[3];for(let o=0;o<24;o++){const a=Hl[o],c=Na(s,i,a),l=Ua(s,i,a),u=Fl[o];s=t[u],i=t[u+1],t[u]=c,t[u+1]=l}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)n[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=cg[r],t[1]^=lg[r]}n.fill(0)}class Bo extends Oo{constructor(e,n,r,s=!1,i=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=s,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,qs(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Mp(this.state)}keccak(){ug(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){kr(this);const{blockLen:n,state:r}=this;e=fi(e);const s=e.length;for(let i=0;i<s;){const o=Math.min(n-this.pos,s-i);for(let a=0;a<o;a++)r[this.pos++]^=e[i++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:s}=this;e[r]^=n,n&128&&r===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){kr(this,!1),Do(e),this.finish();const n=this.state,{blockLen:r}=this;for(let s=0,i=e.length;s<i;){this.posOut>=r&&this.keccak();const o=Math.min(r-this.posOut,i-s);e.set(n.subarray(this.posOut,this.posOut+o),s),this.posOut+=o,s+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return qs(e),this.xofInto(new Uint8Array(e))}digestInto(e){if($l(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:s,rounds:i,enableXOF:o}=this;return e||(e=new Bo(n,r,s,o,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=s,e.enableXOF=o,e.destroyed=this.destroyed,e}}const dg=(t,e,n)=>Nl(()=>new Bo(e,t,n)),fg=dg(1,136,256/8);let ql=!1;const Wl=function(t){return fg(t)};let zl=Wl;function jt(t){const e=We(t,"data");return fe(zl(e))}jt._=Wl;jt.lock=function(){ql=!0};jt.register=function(t){if(ql)throw new TypeError("keccak256 is locked");zl=t};Object.freeze(jt);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);const pg=BigInt(1),gg=BigInt(2),pi=t=>t instanceof Uint8Array,mg=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Er(t){if(!pi(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=mg[t[n]];return e}function Po(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return BigInt(t===""?"0":`0x${t}`)}function es(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let r=0;r<n.length;r++){const s=r*2,i=t.slice(s,s+2),o=Number.parseInt(i,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");n[r]=o}return n}function Xn(t){return Po(Er(t))}function Ro(t){if(!pi(t))throw new Error("Uint8Array expected");return Po(Er(Uint8Array.from(t).reverse()))}function Sr(t,e){return es(t.toString(16).padStart(e*2,"0"))}function $o(t,e){return Sr(t,e).reverse()}function vt(t,e,n){let r;if(typeof e=="string")try{r=es(e)}catch(i){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${i}`)}else if(pi(e))r=Uint8Array.from(e);else throw new Error(`${t} must be hex string or Uint8Array`);const s=r.length;if(typeof n=="number"&&s!==n)throw new Error(`${t} expected ${n} bytes, got ${s}`);return r}function ts(...t){const e=new Uint8Array(t.reduce((r,s)=>r+s.length,0));let n=0;return t.forEach(r=>{if(!pi(r))throw new Error("Uint8Array expected");e.set(r,n),n+=r.length}),e}const Lo=t=>(gg<<BigInt(t-1))-pg,Di=t=>new Uint8Array(t),Ma=t=>Uint8Array.from(t);function Gl(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let r=Di(t),s=Di(t),i=0;const o=()=>{r.fill(1),s.fill(0),i=0},a=(...d)=>n(s,r,...d),c=(d=Di())=>{s=a(Ma([0]),d),r=a(),d.length!==0&&(s=a(Ma([1]),d),r=a())},l=()=>{if(i++>=1e3)throw new Error("drbg: tried 1000 values");let d=0;const w=[];for(;d<e;){r=a();const m=r.slice();w.push(m),d+=r.length}return ts(...w)};return(d,w)=>{o(),c(d);let m;for(;!(m=w(l()));)c();return o(),m}}const hg={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||t instanceof Uint8Array,isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function us(t,e,n={}){const r=(s,i,o)=>{const a=hg[i];if(typeof a!="function")throw new Error(`Invalid validator "${i}", expected function`);const c=t[s];if(!(o&&c===void 0)&&!a(c,t))throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${i}`)};for(const[s,i]of Object.entries(e))r(s,i,!1);for(const[s,i]of Object.entries(n))r(s,i,!0);return t}const yg=Object.freeze(Object.defineProperty({__proto__:null,bitMask:Lo,bytesToHex:Er,bytesToNumberBE:Xn,bytesToNumberLE:Ro,concatBytes:ts,createHmacDrbg:Gl,ensureBytes:vt,hexToBytes:es,hexToNumber:Po,numberToBytesBE:Sr,numberToBytesLE:$o,validateObject:us},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Pe=BigInt(0),Be=BigInt(1),Mn=BigInt(2),bg=BigInt(3),Qi=BigInt(4),Fa=BigInt(5),Ha=BigInt(8);BigInt(9);BigInt(16);function et(t,e){const n=t%e;return n>=Pe?n:e+n}function wg(t,e,n){if(n<=Pe||e<Pe)throw new Error("Expected power/modulo > 0");if(n===Be)return Pe;let r=Be;for(;e>Pe;)e&Be&&(r=r*t%n),t=t*t%n,e>>=Be;return r}function gt(t,e,n){let r=t;for(;e-- >Pe;)r*=r,r%=n;return r}function eo(t,e){if(t===Pe||e<=Pe)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=et(t,e),r=e,s=Pe,i=Be;for(;n!==Pe;){const a=r/n,c=r%n,l=s-i*a;r=n,n=c,s=i,i=l}if(r!==Be)throw new Error("invert: does not exist");return et(s,e)}function vg(t){const e=(t-Be)/Mn;let n,r,s;for(n=t-Be,r=0;n%Mn===Pe;n/=Mn,r++);for(s=Mn;s<t&&wg(s,e,t)!==t-Be;s++);if(r===1){const o=(t+Be)/Qi;return function(c,l){const u=c.pow(l,o);if(!c.eql(c.sqr(u),l))throw new Error("Cannot find square root");return u}}const i=(n+Be)/Mn;return function(a,c){if(a.pow(c,e)===a.neg(a.ONE))throw new Error("Cannot find square root");let l=r,u=a.pow(a.mul(a.ONE,s),n),d=a.pow(c,i),w=a.pow(c,n);for(;!a.eql(w,a.ONE);){if(a.eql(w,a.ZERO))return a.ZERO;let m=1;for(let h=a.sqr(w);m<l&&!a.eql(h,a.ONE);m++)h=a.sqr(h);const C=a.pow(u,Be<<BigInt(l-m-1));u=a.sqr(C),d=a.mul(d,C),w=a.mul(w,u),l=m}return d}}function _g(t){if(t%Qi===bg){const e=(t+Be)/Qi;return function(r,s){const i=r.pow(s,e);if(!r.eql(r.sqr(i),s))throw new Error("Cannot find square root");return i}}if(t%Ha===Fa){const e=(t-Fa)/Ha;return function(r,s){const i=r.mul(s,Mn),o=r.pow(i,e),a=r.mul(s,o),c=r.mul(r.mul(a,Mn),o),l=r.mul(a,r.sub(c,r.ONE));if(!r.eql(r.sqr(l),s))throw new Error("Cannot find square root");return l}}return vg(t)}const xg=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Cg(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=xg.reduce((r,s)=>(r[s]="function",r),e);return us(t,n)}function kg(t,e,n){if(n<Pe)throw new Error("Expected power > 0");if(n===Pe)return t.ONE;if(n===Be)return e;let r=t.ONE,s=e;for(;n>Pe;)n&Be&&(r=t.mul(r,s)),s=t.sqr(s),n>>=Be;return r}function Eg(t,e){const n=new Array(e.length),r=e.reduce((i,o,a)=>t.is0(o)?i:(n[a]=i,t.mul(i,o)),t.ONE),s=t.inv(r);return e.reduceRight((i,o,a)=>t.is0(o)?i:(n[a]=t.mul(i,n[a]),t.mul(i,o)),s),n}function Kl(t,e){const n=e!==void 0?e:t.toString(2).length,r=Math.ceil(n/8);return{nBitLength:n,nByteLength:r}}function Sg(t,e,n=!1,r={}){if(t<=Pe)throw new Error(`Expected Field ORDER > 0, got ${t}`);const{nBitLength:s,nByteLength:i}=Kl(t,e);if(i>2048)throw new Error("Field lengths over 2048 bytes are not supported");const o=_g(t),a=Object.freeze({ORDER:t,BITS:s,BYTES:i,MASK:Lo(s),ZERO:Pe,ONE:Be,create:c=>et(c,t),isValid:c=>{if(typeof c!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);return Pe<=c&&c<t},is0:c=>c===Pe,isOdd:c=>(c&Be)===Be,neg:c=>et(-c,t),eql:(c,l)=>c===l,sqr:c=>et(c*c,t),add:(c,l)=>et(c+l,t),sub:(c,l)=>et(c-l,t),mul:(c,l)=>et(c*l,t),pow:(c,l)=>kg(a,c,l),div:(c,l)=>et(c*eo(l,t),t),sqrN:c=>c*c,addN:(c,l)=>c+l,subN:(c,l)=>c-l,mulN:(c,l)=>c*l,inv:c=>eo(c,t),sqrt:r.sqrt||(c=>o(a,c)),invertBatch:c=>Eg(a,c),cmov:(c,l,u)=>u?l:c,toBytes:c=>n?$o(c,i):Sr(c,i),fromBytes:c=>{if(c.length!==i)throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);return n?Ro(c):Xn(c)}});return Object.freeze(a)}function jl(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function Jl(t){const e=jl(t);return e+Math.ceil(e/2)}function Ag(t,e,n=!1){const r=t.length,s=jl(e),i=Jl(e);if(r<16||r<i||r>1024)throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);const o=n?Xn(t):Ro(t),a=et(o,e-Be)+Be;return n?$o(a,s):Sr(a,s)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Tg=BigInt(0),Oi=BigInt(1);function Ig(t,e){const n=(s,i)=>{const o=i.negate();return s?o:i},r=s=>{const i=Math.ceil(e/s)+1,o=2**(s-1);return{windows:i,windowSize:o}};return{constTimeNegate:n,unsafeLadder(s,i){let o=t.ZERO,a=s;for(;i>Tg;)i&Oi&&(o=o.add(a)),a=a.double(),i>>=Oi;return o},precomputeWindow(s,i){const{windows:o,windowSize:a}=r(i),c=[];let l=s,u=l;for(let d=0;d<o;d++){u=l,c.push(u);for(let w=1;w<a;w++)u=u.add(l),c.push(u);l=u.double()}return c},wNAF(s,i,o){const{windows:a,windowSize:c}=r(s);let l=t.ZERO,u=t.BASE;const d=BigInt(2**s-1),w=2**s,m=BigInt(s);for(let C=0;C<a;C++){const h=C*c;let E=Number(o&d);o>>=m,E>c&&(E-=w,o+=Oi);const D=h,b=h+Math.abs(E)-1,k=C%2!==0,f=E<0;E===0?u=u.add(n(k,i[D])):l=l.add(n(f,i[b]))}return{p:l,f:u}},wNAFCached(s,i,o,a){const c=s._WINDOW_SIZE||1;let l=i.get(s);return l||(l=this.precomputeWindow(s,c),c!==1&&i.set(s,a(l))),this.wNAF(c,l,o)}}}function Xl(t){return Cg(t.Fp),us(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Kl(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Dg(t){const e=Xl(t);us(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:r,a:s}=e;if(n){if(!r.eql(s,r.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:Og,hexToBytes:Bg}=yg,qn={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(t){const{Err:e}=qn;if(t.length<2||t[0]!==2)throw new e("Invalid signature integer tag");const n=t[1],r=t.subarray(2,n+2);if(!n||r.length!==n)throw new e("Invalid signature integer: wrong length");if(r[0]&128)throw new e("Invalid signature integer: negative");if(r[0]===0&&!(r[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:Og(r),l:t.subarray(n+2)}},toSig(t){const{Err:e}=qn,n=typeof t=="string"?Bg(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let r=n.length;if(r<2||n[0]!=48)throw new e("Invalid signature tag");if(n[1]!==r-2)throw new e("Invalid signature: incorrect length");const{d:s,l:i}=qn._parseInt(n.subarray(2)),{d:o,l:a}=qn._parseInt(i);if(a.length)throw new e("Invalid signature: left bytes after parsing");return{r:s,s:o}},hexFromSig(t){const e=l=>Number.parseInt(l[0],16)&8?"00"+l:l,n=l=>{const u=l.toString(16);return u.length&1?`0${u}`:u},r=e(n(t.s)),s=e(n(t.r)),i=r.length/2,o=s.length/2,a=n(i),c=n(o);return`30${n(o+i+4)}02${c}${s}02${a}${r}`}},on=BigInt(0),yt=BigInt(1);BigInt(2);const Va=BigInt(3);BigInt(4);function Pg(t){const e=Dg(t),{Fp:n}=e,r=e.toBytes||((C,h,E)=>{const D=h.toAffine();return ts(Uint8Array.from([4]),n.toBytes(D.x),n.toBytes(D.y))}),s=e.fromBytes||(C=>{const h=C.subarray(1),E=n.fromBytes(h.subarray(0,n.BYTES)),D=n.fromBytes(h.subarray(n.BYTES,2*n.BYTES));return{x:E,y:D}});function i(C){const{a:h,b:E}=e,D=n.sqr(C),b=n.mul(D,C);return n.add(n.add(b,n.mul(C,h)),E)}if(!n.eql(n.sqr(e.Gy),i(e.Gx)))throw new Error("bad generator point: equation left != right");function o(C){return typeof C=="bigint"&&on<C&&C<e.n}function a(C){if(!o(C))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function c(C){const{allowedPrivateKeyLengths:h,nByteLength:E,wrapPrivateKey:D,n:b}=e;if(h&&typeof C!="bigint"){if(C instanceof Uint8Array&&(C=Er(C)),typeof C!="string"||!h.includes(C.length))throw new Error("Invalid key");C=C.padStart(E*2,"0")}let k;try{k=typeof C=="bigint"?C:Xn(vt("private key",C,E))}catch{throw new Error(`private key must be ${E} bytes, hex or bigint, not ${typeof C}`)}return D&&(k=et(k,b)),a(k),k}const l=new Map;function u(C){if(!(C instanceof d))throw new Error("ProjectivePoint expected")}class d{constructor(h,E,D){if(this.px=h,this.py=E,this.pz=D,h==null||!n.isValid(h))throw new Error("x required");if(E==null||!n.isValid(E))throw new Error("y required");if(D==null||!n.isValid(D))throw new Error("z required")}static fromAffine(h){const{x:E,y:D}=h||{};if(!h||!n.isValid(E)||!n.isValid(D))throw new Error("invalid affine point");if(h instanceof d)throw new Error("projective point not allowed");const b=k=>n.eql(k,n.ZERO);return b(E)&&b(D)?d.ZERO:new d(E,D,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(h){const E=n.invertBatch(h.map(D=>D.pz));return h.map((D,b)=>D.toAffine(E[b])).map(d.fromAffine)}static fromHex(h){const E=d.fromAffine(s(vt("pointHex",h)));return E.assertValidity(),E}static fromPrivateKey(h){return d.BASE.multiply(c(h))}_setWindowSize(h){this._WINDOW_SIZE=h,l.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint&&!n.is0(this.py))return;throw new Error("bad point: ZERO")}const{x:h,y:E}=this.toAffine();if(!n.isValid(h)||!n.isValid(E))throw new Error("bad point: x or y not FE");const D=n.sqr(E),b=i(h);if(!n.eql(D,b))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:h}=this.toAffine();if(n.isOdd)return!n.isOdd(h);throw new Error("Field doesn't support isOdd")}equals(h){u(h);const{px:E,py:D,pz:b}=this,{px:k,py:f,pz:p}=h,v=n.eql(n.mul(E,p),n.mul(k,b)),A=n.eql(n.mul(D,p),n.mul(f,b));return v&&A}negate(){return new d(this.px,n.neg(this.py),this.pz)}double(){const{a:h,b:E}=e,D=n.mul(E,Va),{px:b,py:k,pz:f}=this;let p=n.ZERO,v=n.ZERO,A=n.ZERO,_=n.mul(b,b),g=n.mul(k,k),I=n.mul(f,f),T=n.mul(b,k);return T=n.add(T,T),A=n.mul(b,f),A=n.add(A,A),p=n.mul(h,A),v=n.mul(D,I),v=n.add(p,v),p=n.sub(g,v),v=n.add(g,v),v=n.mul(p,v),p=n.mul(T,p),A=n.mul(D,A),I=n.mul(h,I),T=n.sub(_,I),T=n.mul(h,T),T=n.add(T,A),A=n.add(_,_),_=n.add(A,_),_=n.add(_,I),_=n.mul(_,T),v=n.add(v,_),I=n.mul(k,f),I=n.add(I,I),_=n.mul(I,T),p=n.sub(p,_),A=n.mul(I,g),A=n.add(A,A),A=n.add(A,A),new d(p,v,A)}add(h){u(h);const{px:E,py:D,pz:b}=this,{px:k,py:f,pz:p}=h;let v=n.ZERO,A=n.ZERO,_=n.ZERO;const g=e.a,I=n.mul(e.b,Va);let T=n.mul(E,k),B=n.mul(D,f),$=n.mul(b,p),K=n.add(E,D),N=n.add(k,f);K=n.mul(K,N),N=n.add(T,B),K=n.sub(K,N),N=n.add(E,b);let P=n.add(k,p);return N=n.mul(N,P),P=n.add(T,$),N=n.sub(N,P),P=n.add(D,b),v=n.add(f,p),P=n.mul(P,v),v=n.add(B,$),P=n.sub(P,v),_=n.mul(g,N),v=n.mul(I,$),_=n.add(v,_),v=n.sub(B,_),_=n.add(B,_),A=n.mul(v,_),B=n.add(T,T),B=n.add(B,T),$=n.mul(g,$),N=n.mul(I,N),B=n.add(B,$),$=n.sub(T,$),$=n.mul(g,$),N=n.add(N,$),T=n.mul(B,N),A=n.add(A,T),T=n.mul(P,N),v=n.mul(K,v),v=n.sub(v,T),T=n.mul(K,B),_=n.mul(P,_),_=n.add(_,T),new d(v,A,_)}subtract(h){return this.add(h.negate())}is0(){return this.equals(d.ZERO)}wNAF(h){return m.wNAFCached(this,l,h,E=>{const D=n.invertBatch(E.map(b=>b.pz));return E.map((b,k)=>b.toAffine(D[k])).map(d.fromAffine)})}multiplyUnsafe(h){const E=d.ZERO;if(h===on)return E;if(a(h),h===yt)return this;const{endo:D}=e;if(!D)return m.unsafeLadder(this,h);let{k1neg:b,k1:k,k2neg:f,k2:p}=D.splitScalar(h),v=E,A=E,_=this;for(;k>on||p>on;)k&yt&&(v=v.add(_)),p&yt&&(A=A.add(_)),_=_.double(),k>>=yt,p>>=yt;return b&&(v=v.negate()),f&&(A=A.negate()),A=new d(n.mul(A.px,D.beta),A.py,A.pz),v.add(A)}multiply(h){a(h);let E=h,D,b;const{endo:k}=e;if(k){const{k1neg:f,k1:p,k2neg:v,k2:A}=k.splitScalar(E);let{p:_,f:g}=this.wNAF(p),{p:I,f:T}=this.wNAF(A);_=m.constTimeNegate(f,_),I=m.constTimeNegate(v,I),I=new d(n.mul(I.px,k.beta),I.py,I.pz),D=_.add(I),b=g.add(T)}else{const{p:f,f:p}=this.wNAF(E);D=f,b=p}return d.normalizeZ([D,b])[0]}multiplyAndAddUnsafe(h,E,D){const b=d.BASE,k=(p,v)=>v===on||v===yt||!p.equals(b)?p.multiplyUnsafe(v):p.multiply(v),f=k(this,E).add(k(h,D));return f.is0()?void 0:f}toAffine(h){const{px:E,py:D,pz:b}=this,k=this.is0();h==null&&(h=k?n.ONE:n.inv(b));const f=n.mul(E,h),p=n.mul(D,h),v=n.mul(b,h);if(k)return{x:n.ZERO,y:n.ZERO};if(!n.eql(v,n.ONE))throw new Error("invZ was invalid");return{x:f,y:p}}isTorsionFree(){const{h,isTorsionFree:E}=e;if(h===yt)return!0;if(E)return E(d,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h,clearCofactor:E}=e;return h===yt?this:E?E(d,this):this.multiplyUnsafe(e.h)}toRawBytes(h=!0){return this.assertValidity(),r(d,this,h)}toHex(h=!0){return Er(this.toRawBytes(h))}}d.BASE=new d(e.Gx,e.Gy,n.ONE),d.ZERO=new d(n.ZERO,n.ONE,n.ZERO);const w=e.nBitLength,m=Ig(d,e.endo?Math.ceil(w/2):w);return{CURVE:e,ProjectivePoint:d,normPrivateKeyToScalar:c,weierstrassEquation:i,isWithinCurveOrder:o}}function Rg(t){const e=Xl(t);return us(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function $g(t){const e=Rg(t),{Fp:n,n:r}=e,s=n.BYTES+1,i=2*n.BYTES+1;function o(N){return on<N&&N<n.ORDER}function a(N){return et(N,r)}function c(N){return eo(N,r)}const{ProjectivePoint:l,normPrivateKeyToScalar:u,weierstrassEquation:d,isWithinCurveOrder:w}=Pg({...e,toBytes(N,P,S){const L=P.toAffine(),Z=n.toBytes(L.x),ne=ts;return S?ne(Uint8Array.from([P.hasEvenY()?2:3]),Z):ne(Uint8Array.from([4]),Z,n.toBytes(L.y))},fromBytes(N){const P=N.length,S=N[0],L=N.subarray(1);if(P===s&&(S===2||S===3)){const Z=Xn(L);if(!o(Z))throw new Error("Point is not on curve");const ne=d(Z);let ce=n.sqrt(ne);const pe=(ce&yt)===yt;return(S&1)===1!==pe&&(ce=n.neg(ce)),{x:Z,y:ce}}else if(P===i&&S===4){const Z=n.fromBytes(L.subarray(0,n.BYTES)),ne=n.fromBytes(L.subarray(n.BYTES,2*n.BYTES));return{x:Z,y:ne}}else throw new Error(`Point of length ${P} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`)}}),m=N=>Er(Sr(N,e.nByteLength));function C(N){const P=r>>yt;return N>P}function h(N){return C(N)?a(-N):N}const E=(N,P,S)=>Xn(N.slice(P,S));class D{constructor(P,S,L){this.r=P,this.s=S,this.recovery=L,this.assertValidity()}static fromCompact(P){const S=e.nByteLength;return P=vt("compactSignature",P,S*2),new D(E(P,0,S),E(P,S,2*S))}static fromDER(P){const{r:S,s:L}=qn.toSig(vt("DER",P));return new D(S,L)}assertValidity(){if(!w(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!w(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(P){return new D(this.r,this.s,P)}recoverPublicKey(P){const{r:S,s:L,recovery:Z}=this,ne=A(vt("msgHash",P));if(Z==null||![0,1,2,3].includes(Z))throw new Error("recovery id invalid");const ce=Z===2||Z===3?S+e.n:S;if(ce>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const pe=Z&1?"03":"02",st=l.fromHex(pe+m(ce)),ze=c(ce),bn=a(-ne*ze),wt=a(L*ze),it=l.BASE.multiplyAndAddUnsafe(st,bn,wt);if(!it)throw new Error("point at infinify");return it.assertValidity(),it}hasHighS(){return C(this.s)}normalizeS(){return this.hasHighS()?new D(this.r,a(-this.s),this.recovery):this}toDERRawBytes(){return es(this.toDERHex())}toDERHex(){return qn.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return es(this.toCompactHex())}toCompactHex(){return m(this.r)+m(this.s)}}const b={isValidPrivateKey(N){try{return u(N),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{const N=Jl(e.n);return Ag(e.randomBytes(N),e.n)},precompute(N=8,P=l.BASE){return P._setWindowSize(N),P.multiply(BigInt(3)),P}};function k(N,P=!0){return l.fromPrivateKey(N).toRawBytes(P)}function f(N){const P=N instanceof Uint8Array,S=typeof N=="string",L=(P||S)&&N.length;return P?L===s||L===i:S?L===2*s||L===2*i:N instanceof l}function p(N,P,S=!0){if(f(N))throw new Error("first arg must be private key");if(!f(P))throw new Error("second arg must be public key");return l.fromHex(P).multiply(u(N)).toRawBytes(S)}const v=e.bits2int||function(N){const P=Xn(N),S=N.length*8-e.nBitLength;return S>0?P>>BigInt(S):P},A=e.bits2int_modN||function(N){return a(v(N))},_=Lo(e.nBitLength);function g(N){if(typeof N!="bigint")throw new Error("bigint expected");if(!(on<=N&&N<_))throw new Error(`bigint expected < 2^${e.nBitLength}`);return Sr(N,e.nByteLength)}function I(N,P,S=T){if(["recovered","canonical"].some(It=>It in S))throw new Error("sign() legacy options not supported");const{hash:L,randomBytes:Z}=e;let{lowS:ne,prehash:ce,extraEntropy:pe}=S;ne==null&&(ne=!0),N=vt("msgHash",N),ce&&(N=vt("prehashed msgHash",L(N)));const st=A(N),ze=u(P),bn=[g(ze),g(st)];if(pe!=null){const It=pe===!0?Z(n.BYTES):pe;bn.push(vt("extraEntropy",It))}const wt=ts(...bn),it=st;function Pn(It){const pt=v(It);if(!w(pt))return;const hi=c(pt),y=l.BASE.multiply(pt).toAffine(),x=a(y.x);if(x===on)return;const R=a(hi*a(it+x*ze));if(R===on)return;let H=(y.x===x?0:2)|Number(y.y&yt),U=R;return ne&&C(R)&&(U=h(R),H^=1),new D(x,U,H)}return{seed:wt,k2sig:Pn}}const T={lowS:e.lowS,prehash:!1},B={lowS:e.lowS,prehash:!1};function $(N,P,S=T){const{seed:L,k2sig:Z}=I(N,P,S),ne=e;return Gl(ne.hash.outputLen,ne.nByteLength,ne.hmac)(L,Z)}l.BASE._setWindowSize(8);function K(N,P,S,L=B){var y;const Z=N;if(P=vt("msgHash",P),S=vt("publicKey",S),"strict"in L)throw new Error("options.strict was renamed to lowS");const{lowS:ne,prehash:ce}=L;let pe,st;try{if(typeof Z=="string"||Z instanceof Uint8Array)try{pe=D.fromDER(Z)}catch(x){if(!(x instanceof qn.Err))throw x;pe=D.fromCompact(Z)}else if(typeof Z=="object"&&typeof Z.r=="bigint"&&typeof Z.s=="bigint"){const{r:x,s:R}=Z;pe=new D(x,R)}else throw new Error("PARSE");st=l.fromHex(S)}catch(x){if(x.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(ne&&pe.hasHighS())return!1;ce&&(P=e.hash(P));const{r:ze,s:bn}=pe,wt=A(P),it=c(bn),Pn=a(wt*it),It=a(ze*it),pt=(y=l.BASE.multiplyAndAddUnsafe(st,Pn,It))==null?void 0:y.toAffine();return pt?a(pt.x)===ze:!1}return{CURVE:e,getPublicKey:k,getSharedSecret:p,sign:$,verify:K,ProjectivePoint:l,Signature:D,utils:b}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Lg(t){return{hash:t,hmac:(e,...n)=>Ml(t,e,Vp(...n)),randomBytes:qp}}function Ng(t,e){const n=r=>$g({...t,...Lg(r)});return Object.freeze({...n(e),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Yl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),qa=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Ug=BigInt(1),to=BigInt(2),Wa=(t,e)=>(t+e/to)/e;function Mg(t){const e=Yl,n=BigInt(3),r=BigInt(6),s=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=t*t*t%e,u=l*l*t%e,d=gt(u,n,e)*u%e,w=gt(d,n,e)*u%e,m=gt(w,to,e)*l%e,C=gt(m,s,e)*m%e,h=gt(C,i,e)*C%e,E=gt(h,a,e)*h%e,D=gt(E,c,e)*E%e,b=gt(D,a,e)*h%e,k=gt(b,n,e)*u%e,f=gt(k,o,e)*C%e,p=gt(f,r,e)*l%e,v=gt(p,to,e);if(!no.eql(no.sqr(v),t))throw new Error("Cannot find square root");return v}const no=Sg(Yl,void 0,void 0,{sqrt:Mg}),xn=Ng({a:BigInt(0),b:BigInt(7),Fp:no,n:qa,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=qa,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Ug*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),s=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=n,o=BigInt("0x100000000000000000000000000000000"),a=Wa(i*t,e),c=Wa(-r*t,e);let l=et(t-a*n-c*s,e),u=et(-a*r-c*i,e);const d=l>o,w=u>o;if(d&&(l=e-l),w&&(u=e-u),l>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:d,k1:l,k2neg:w,k2:u}}}},Xp);BigInt(0);xn.ProjectivePoint;const za="0x0000000000000000000000000000000000000000000000000000000000000000",Ga=BigInt(0),Ka=BigInt(1),ro=BigInt(2),ja=BigInt(27),Ja=BigInt(28),vs=BigInt(35),Zl=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Fg=Zl/ro,Hg=Symbol.for("nodejs.util.inspect.custom"),Ln={};function Bi(t){return Il(Ol(t),32)}var mr,Lt,hr,An;const mt=class mt{constructor(e,n,r,s){he(this,mr);he(this,Lt);he(this,hr);he(this,An);li(e,Ln,"Signature"),oe(this,mr,n),oe(this,Lt,r),oe(this,hr,s),oe(this,An,null)}get r(){return M(this,mr)}set r(e){G(Kr(e)===32,"invalid r","value",e),oe(this,mr,fe(e))}get s(){return G(parseInt(M(this,Lt).substring(0,3))<8,"non-canonical s; use ._s","s",M(this,Lt)),M(this,Lt)}set s(e){G(Kr(e)===32,"invalid s","value",e),oe(this,Lt,fe(e))}get _s(){return M(this,Lt)}isValid(){return BigInt(M(this,Lt))<=Fg}get v(){return M(this,hr)}set v(e){const n=Et(e,"value");G(n===27||n===28,"invalid v","v",e),oe(this,hr,n)}get networkV(){return M(this,An)}get legacyChainId(){const e=this.networkV;return e==null?null:mt.getChainId(e)}get yParity(){return this.v===27?0:1}get yParityAndS(){const e=We(this.s);return this.yParity&&(e[0]|=128),fe(e)}get compactSerialized(){return un([this.r,this.yParityAndS])}get serialized(){return un([this.r,this.s,this.yParity?"0x1c":"0x1b"])}getCanonical(){if(this.isValid())return this;const e=Zl-BigInt(this._s),n=55-this.v,r=new mt(Ln,this.r,Bi(e),n);return this.networkV&&oe(r,An,this.networkV),r}clone(){const e=new mt(Ln,this.r,this._s,this.v);return this.networkV&&oe(e,An,this.networkV),e}toJSON(){const e=this.networkV;return{_type:"signature",networkV:e!=null?e.toString():null,r:this.r,s:this._s,v:this.v}}[Hg](){return this.toString()}toString(){return this.isValid()?`Signature { r: ${this.r}, s: ${this._s}, v: ${this.v} }`:`Signature { r: ${this.r}, s: ${this._s}, v: ${this.v}, valid: false }`}static getChainId(e){const n=qt(e,"v");return n==ja||n==Ja?Ga:(G(n>=vs,"invalid EIP-155 v","v",e),(n-vs)/ro)}static getChainIdV(e,n){return qt(e)*ro+BigInt(35+n-27)}static getNormalizedV(e){const n=qt(e);return n===Ga||n===ja?27:n===Ka||n===Ja?28:(G(n>=vs,"invalid v","v",e),n&Ka?27:28)}static from(e){function n(l,u){G(l,u,"signature",e)}if(e==null)return new mt(Ln,za,za,27);if(typeof e=="string"){const l=We(e,"signature");if(l.length===64){const u=fe(l.slice(0,32)),d=l.slice(32,64),w=d[0]&128?28:27;return d[0]&=127,new mt(Ln,u,fe(d),w)}if(l.length===65){const u=fe(l.slice(0,32)),d=fe(l.slice(32,64)),w=mt.getNormalizedV(l[64]);return new mt(Ln,u,d,w)}n(!1,"invalid raw signature length")}if(e instanceof mt)return e.clone();const r=e.r;n(r!=null,"missing r");const s=Bi(r),i=function(l,u){if(l!=null)return Bi(l);if(u!=null){n(Vn(u,32),"invalid yParityAndS");const d=We(u);return d[0]&=127,fe(d)}n(!1,"missing s")}(e.s,e.yParityAndS),{networkV:o,v:a}=function(l,u,d){if(l!=null){const w=qt(l);return{networkV:w>=vs?w:void 0,v:mt.getNormalizedV(w)}}if(u!=null)return n(Vn(u,32),"invalid yParityAndS"),{v:We(u)[0]&128?28:27};if(d!=null){switch(Et(d,"sig.yParity")){case 0:return{v:27};case 1:return{v:28}}n(!1,"invalid yParity")}n(!1,"missing v")}(e.v,e.yParityAndS,e.yParity),c=new mt(Ln,s,i,a);return o&&oe(c,An,o),n(e.yParity==null||Et(e.yParity,"sig.yParity")===c.yParity,"yParity mismatch"),n(e.yParityAndS==null||e.yParityAndS===c.yParityAndS,"yParityAndS mismatch"),c}};mr=new WeakMap,Lt=new WeakMap,hr=new WeakMap,An=new WeakMap;let Ws=mt;var nn;const Fn=class Fn{constructor(e){he(this,nn);G(Kr(e)===32,"invalid private key","privateKey","[REDACTED]"),oe(this,nn,fe(e))}get privateKey(){return M(this,nn)}get publicKey(){return Fn.computePublicKey(M(this,nn))}get compressedPublicKey(){return Fn.computePublicKey(M(this,nn),!0)}sign(e){G(Kr(e)===32,"invalid digest length","digest",e);const n=xn.sign(je(e),je(M(this,nn)),{lowS:!0});return Ws.from({r:Vs(n.r,32),s:Vs(n.s,32),v:n.recovery?28:27})}computeSharedSecret(e){const n=Fn.computePublicKey(e);return fe(xn.getSharedSecret(je(M(this,nn)),We(n),!1))}static computePublicKey(e,n){let r=We(e,"key");if(r.length===32){const i=xn.getPublicKey(r,!!n);return fe(i)}if(r.length===64){const i=new Uint8Array(65);i[0]=4,i.set(r,1),r=i}const s=xn.ProjectivePoint.fromHex(r);return fe(s.toRawBytes(n))}static recoverPublicKey(e,n){G(Kr(e)===32,"invalid digest length","digest",e);const r=Ws.from(n);let s=xn.Signature.fromCompact(je(un([r.r,r.s])));s=s.addRecoveryBit(r.yParity);const i=s.recoverPublicKey(je(e));return G(i!=null,"invalid signature for digest","signature",n),"0x"+i.toHex(!1)}static addPoints(e,n,r){const s=xn.ProjectivePoint.fromHex(Fn.computePublicKey(e).substring(2)),i=xn.ProjectivePoint.fromHex(Fn.computePublicKey(n).substring(2));return"0x"+s.add(i).toHex(!!r)}};nn=new WeakMap;let so=Fn;const Vg=BigInt(0),qg=BigInt(36);function Xa(t){t=t.toLowerCase();const e=t.substring(2).split(""),n=new Uint8Array(40);for(let s=0;s<40;s++)n[s]=e[s].charCodeAt(0);const r=We(jt(n));for(let s=0;s<40;s+=2)r[s>>1]>>4>=8&&(e[s]=e[s].toUpperCase()),(r[s>>1]&15)>=8&&(e[s+1]=e[s+1].toUpperCase());return"0x"+e.join("")}const No={};for(let t=0;t<10;t++)No[String(t)]=String(t);for(let t=0;t<26;t++)No[String.fromCharCode(65+t)]=String(10+t);const Ya=15;function Wg(t){t=t.toUpperCase(),t=t.substring(4)+t.substring(0,2)+"00";let e=t.split("").map(r=>No[r]).join("");for(;e.length>=Ya;){let r=e.substring(0,Ya);e=parseInt(r,10)%97+e.substring(r.length)}let n=String(98-parseInt(e,10)%97);for(;n.length<2;)n="0"+n;return n}const zg=function(){const t={};for(let e=0;e<36;e++){const n="0123456789abcdefghijklmnopqrstuvwxyz"[e];t[n]=BigInt(e)}return t}();function Gg(t){t=t.toLowerCase();let e=Vg;for(let n=0;n<t.length;n++)e=e*qg+zg[t[n]];return e}function Ar(t){if(G(typeof t=="string","invalid address","address",t),t.match(/^(0x)?[0-9a-fA-F]{40}$/)){t.startsWith("0x")||(t="0x"+t);const e=Xa(t);return G(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/)||e===t,"bad address checksum","address",t),e}if(t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){G(t.substring(2,4)===Wg(t),"bad icap checksum","address",t);let e=Gg(t.substring(4)).toString(16);for(;e.length<40;)e="0"+e;return Xa("0x"+e)}G(!1,"invalid address","address",t)}const Yt={};function X(t,e){let n=!1;return e<0&&(n=!0,e*=-1),new nt(Yt,`${n?"":"u"}int${e}`,t,{signed:n,width:e})}function le(t,e){return new nt(Yt,`bytes${e||""}`,t,{size:e})}const Za=Symbol.for("_ethers_typed");var Kn;const Zt=class Zt{constructor(e,n,r,s){Q(this,"type");Q(this,"value");he(this,Kn);Q(this,"_typedSymbol");s==null&&(s=null),li(Yt,e,"Typed"),_e(this,{_typedSymbol:Za,type:n,value:r}),oe(this,Kn,s),this.format()}format(){if(this.type==="array")throw new Error("");if(this.type==="dynamicArray")throw new Error("");return this.type==="tuple"?`tuple(${this.value.map(e=>e.format()).join(",")})`:this.type}defaultValue(){return 0}minValue(){return 0}maxValue(){return 0}isBigInt(){return!!this.type.match(/^u?int[0-9]+$/)}isData(){return this.type.startsWith("bytes")}isString(){return this.type==="string"}get tupleName(){if(this.type!=="tuple")throw TypeError("not a tuple");return M(this,Kn)}get arrayLength(){if(this.type!=="array")throw TypeError("not an array");return M(this,Kn)===!0?-1:M(this,Kn)===!1?this.value.length:null}static from(e,n){return new Zt(Yt,e,n)}static uint8(e){return X(e,8)}static uint16(e){return X(e,16)}static uint24(e){return X(e,24)}static uint32(e){return X(e,32)}static uint40(e){return X(e,40)}static uint48(e){return X(e,48)}static uint56(e){return X(e,56)}static uint64(e){return X(e,64)}static uint72(e){return X(e,72)}static uint80(e){return X(e,80)}static uint88(e){return X(e,88)}static uint96(e){return X(e,96)}static uint104(e){return X(e,104)}static uint112(e){return X(e,112)}static uint120(e){return X(e,120)}static uint128(e){return X(e,128)}static uint136(e){return X(e,136)}static uint144(e){return X(e,144)}static uint152(e){return X(e,152)}static uint160(e){return X(e,160)}static uint168(e){return X(e,168)}static uint176(e){return X(e,176)}static uint184(e){return X(e,184)}static uint192(e){return X(e,192)}static uint200(e){return X(e,200)}static uint208(e){return X(e,208)}static uint216(e){return X(e,216)}static uint224(e){return X(e,224)}static uint232(e){return X(e,232)}static uint240(e){return X(e,240)}static uint248(e){return X(e,248)}static uint256(e){return X(e,256)}static uint(e){return X(e,256)}static int8(e){return X(e,-8)}static int16(e){return X(e,-16)}static int24(e){return X(e,-24)}static int32(e){return X(e,-32)}static int40(e){return X(e,-40)}static int48(e){return X(e,-48)}static int56(e){return X(e,-56)}static int64(e){return X(e,-64)}static int72(e){return X(e,-72)}static int80(e){return X(e,-80)}static int88(e){return X(e,-88)}static int96(e){return X(e,-96)}static int104(e){return X(e,-104)}static int112(e){return X(e,-112)}static int120(e){return X(e,-120)}static int128(e){return X(e,-128)}static int136(e){return X(e,-136)}static int144(e){return X(e,-144)}static int152(e){return X(e,-152)}static int160(e){return X(e,-160)}static int168(e){return X(e,-168)}static int176(e){return X(e,-176)}static int184(e){return X(e,-184)}static int192(e){return X(e,-192)}static int200(e){return X(e,-200)}static int208(e){return X(e,-208)}static int216(e){return X(e,-216)}static int224(e){return X(e,-224)}static int232(e){return X(e,-232)}static int240(e){return X(e,-240)}static int248(e){return X(e,-248)}static int256(e){return X(e,-256)}static int(e){return X(e,-256)}static bytes1(e){return le(e,1)}static bytes2(e){return le(e,2)}static bytes3(e){return le(e,3)}static bytes4(e){return le(e,4)}static bytes5(e){return le(e,5)}static bytes6(e){return le(e,6)}static bytes7(e){return le(e,7)}static bytes8(e){return le(e,8)}static bytes9(e){return le(e,9)}static bytes10(e){return le(e,10)}static bytes11(e){return le(e,11)}static bytes12(e){return le(e,12)}static bytes13(e){return le(e,13)}static bytes14(e){return le(e,14)}static bytes15(e){return le(e,15)}static bytes16(e){return le(e,16)}static bytes17(e){return le(e,17)}static bytes18(e){return le(e,18)}static bytes19(e){return le(e,19)}static bytes20(e){return le(e,20)}static bytes21(e){return le(e,21)}static bytes22(e){return le(e,22)}static bytes23(e){return le(e,23)}static bytes24(e){return le(e,24)}static bytes25(e){return le(e,25)}static bytes26(e){return le(e,26)}static bytes27(e){return le(e,27)}static bytes28(e){return le(e,28)}static bytes29(e){return le(e,29)}static bytes30(e){return le(e,30)}static bytes31(e){return le(e,31)}static bytes32(e){return le(e,32)}static address(e){return new Zt(Yt,"address",e)}static bool(e){return new Zt(Yt,"bool",!!e)}static bytes(e){return new Zt(Yt,"bytes",e)}static string(e){return new Zt(Yt,"string",e)}static array(e,n){throw new Error("not implemented yet")}static tuple(e,n){throw new Error("not implemented yet")}static overrides(e){return new Zt(Yt,"overrides",Object.assign({},e))}static isTyped(e){return e&&typeof e=="object"&&"_typedSymbol"in e&&e._typedSymbol===Za}static dereference(e,n){if(Zt.isTyped(e)){if(e.type!==n)throw new Error(`invalid type: expecetd ${n}, got ${e.type}`);return e.value}return e}};Kn=new WeakMap;let nt=Zt;class Kg extends yn{constructor(e){super("address","address",e,!1)}defaultValue(){return"0x0000000000000000000000000000000000000000"}encode(e,n){let r=nt.dereference(n,"string");try{r=Ar(r)}catch(s){return this._throwError(s.message,n)}return e.writeValue(r)}decode(e){return Ar(Vs(e.readValue(),20))}}class jg extends yn{constructor(n){super(n.name,n.type,"_",n.dynamic);Q(this,"coder");this.coder=n}defaultValue(){return this.coder.defaultValue()}encode(n,r){return this.coder.encode(n,r)}decode(n){return this.coder.decode(n)}}function Ql(t,e,n){let r=[];if(Array.isArray(n))r=n;else if(n&&typeof n=="object"){let c={};r=e.map(l=>{const u=l.localName;return Ae(u,"cannot encode object for signature with missing names","INVALID_ARGUMENT",{argument:"values",info:{coder:l},value:n}),Ae(!c[u],"cannot encode object for signature with duplicate names","INVALID_ARGUMENT",{argument:"values",info:{coder:l},value:n}),c[u]=!0,n[u]})}else G(!1,"invalid tuple value","tuple",n);G(e.length===r.length,"types/value length mismatch","tuple",n);let s=new Xi,i=new Xi,o=[];e.forEach((c,l)=>{let u=r[l];if(c.dynamic){let d=i.length;c.encode(i,u);let w=s.writeUpdatableValue();o.push(m=>{w(m+d)})}else c.encode(s,u)}),o.forEach(c=>{c(s.length)});let a=t.appendWriter(s);return a+=t.appendWriter(i),a}function eu(t,e){let n=[],r=[],s=t.subReader(0);return e.forEach(i=>{let o=null;if(i.dynamic){let a=t.readIndex(),c=s.subReader(a);try{o=i.decode(c)}catch(l){if(Oa(l,"BUFFER_OVERRUN"))throw l;o=l,o.baseType=i.name,o.name=i.localName,o.type=i.type}}else try{o=i.decode(t)}catch(a){if(Oa(a,"BUFFER_OVERRUN"))throw a;o=a,o.baseType=i.name,o.name=i.localName,o.type=i.type}if(o==null)throw new Error("investigate");n.push(o),r.push(i.localName||null)}),Cr.fromItems(n,r)}class Jg extends yn{constructor(n,r,s){const i=n.type+"["+(r>=0?r:"")+"]",o=r===-1||n.dynamic;super("array",i,s,o);Q(this,"coder");Q(this,"length");_e(this,{coder:n,length:r})}defaultValue(){const n=this.coder.defaultValue(),r=[];for(let s=0;s<this.length;s++)r.push(n);return r}encode(n,r){const s=nt.dereference(r,"array");Array.isArray(s)||this._throwError("expected array value",s);let i=this.length;i===-1&&(i=s.length,n.writeValue(s.length)),Sl(s.length,i,"coder array"+(this.localName?" "+this.localName:""));let o=[];for(let a=0;a<s.length;a++)o.push(this.coder);return Ql(n,o,s)}decode(n){let r=this.length;r===-1&&(r=n.readIndex(),Ae(r*Je<=n.dataLength,"insufficient data length","BUFFER_OVERRUN",{buffer:n.bytes,offset:r*Je,length:n.dataLength}));let s=[];for(let i=0;i<r;i++)s.push(new jg(this.coder));return eu(n,s)}}class Xg extends yn{constructor(e){super("bool","bool",e,!1)}defaultValue(){return!1}encode(e,n){const r=nt.dereference(n,"bool");return e.writeValue(r?1:0)}decode(e){return!!e.readValue()}}class tu extends yn{constructor(e,n){super(e,e,n,!0)}defaultValue(){return"0x"}encode(e,n){n=je(n);let r=e.writeValue(n.length);return r+=e.writeBytes(n),r}decode(e){return e.readBytes(e.readIndex(),!0)}}class Yg extends tu{constructor(e){super("bytes",e)}decode(e){return fe(super.decode(e))}}class Zg extends yn{constructor(n,r){let s="bytes"+String(n);super(s,s,r,!1);Q(this,"size");_e(this,{size:n},{size:"number"})}defaultValue(){return"0x0000000000000000000000000000000000000000000000000000000000000000".substring(0,2+this.size*2)}encode(n,r){let s=je(nt.dereference(r,this.type));return s.length!==this.size&&this._throwError("incorrect data length",r),n.writeBytes(s)}decode(n){return fe(n.readBytes(this.size))}}const Qg=new Uint8Array([]);class em extends yn{constructor(e){super("null","",e,!1)}defaultValue(){return null}encode(e,n){return n!=null&&this._throwError("not null",n),e.writeBytes(Qg)}decode(e){return e.readBytes(0),null}}const tm=BigInt(0),nm=BigInt(1),rm=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");class sm extends yn{constructor(n,r,s){const i=(r?"int":"uint")+n*8;super(i,i,s,!1);Q(this,"size");Q(this,"signed");_e(this,{size:n,signed:r},{size:"number",signed:"boolean"})}defaultValue(){return 0}encode(n,r){let s=qt(nt.dereference(r,this.type)),i=ys(rm,Je*8);if(this.signed){let o=ys(i,this.size*8-1);(s>o||s<-(o+nm))&&this._throwError("value out-of-bounds",r),s=Ip(s,8*Je)}else(s<tm||s>ys(i,this.size*8))&&this._throwError("value out-of-bounds",r);return n.writeValue(s)}decode(n){let r=ys(n.readValue(),this.size*8);return this.signed&&(r=Tp(r,this.size*8)),r}}class im extends tu{constructor(e){super("string",e)}defaultValue(){return""}encode(e,n){return super.encode(e,di(nt.dereference(n,"string")))}decode(e){return Lp(super.decode(e))}}class _s extends yn{constructor(n,r){let s=!1;const i=[];n.forEach(a=>{a.dynamic&&(s=!0),i.push(a.type)});const o="tuple("+i.join(",")+")";super("tuple",o,r,s);Q(this,"coders");_e(this,{coders:Object.freeze(n.slice())})}defaultValue(){const n=[];this.coders.forEach(s=>{n.push(s.defaultValue())});const r=this.coders.reduce((s,i)=>{const o=i.localName;return o&&(s[o]||(s[o]=0),s[o]++),s},{});return this.coders.forEach((s,i)=>{let o=s.localName;!o||r[o]!==1||(o==="length"&&(o="_length"),n[o]==null&&(n[o]=n[i]))}),Object.freeze(n)}encode(n,r){const s=nt.dereference(r,"tuple");return Ql(n,this.coders,s)}decode(n){return eu(n,this.coders)}}function ns(t){return jt(di(t))}function Xe(t){const e=new Set;return t.forEach(n=>e.add(n)),Object.freeze(e)}const om="external public payable override",am=Xe(om.split(" ")),nu="constant external internal payable private public pure view override",cm=Xe(nu.split(" ")),ru="constructor error event fallback function receive struct",su=Xe(ru.split(" ")),iu="calldata memory storage payable indexed",lm=Xe(iu.split(" ")),um="tuple returns",dm=[ru,iu,um,nu].join(" "),fm=Xe(dm.split(" ")),pm={"(":"OPEN_PAREN",")":"CLOSE_PAREN","[":"OPEN_BRACKET","]":"CLOSE_BRACKET",",":"COMMA","@":"AT"},gm=new RegExp("^(\\s*)"),mm=new RegExp("^([0-9]+)"),hm=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),ou=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),au=new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");var Re,_t,ss,io;const zs=class zs{constructor(e){he(this,ss);he(this,Re);he(this,_t);oe(this,Re,0),oe(this,_t,e.slice())}get offset(){return M(this,Re)}get length(){return M(this,_t).length-M(this,Re)}clone(){return new zs(M(this,_t))}reset(){oe(this,Re,0)}popKeyword(e){const n=this.peek();if(n.type!=="KEYWORD"||!e.has(n.text))throw new Error(`expected keyword ${n.text}`);return this.pop().text}popType(e){if(this.peek().type!==e){const n=this.peek();throw new Error(`expected ${e}; got ${n.type} ${JSON.stringify(n.text)}`)}return this.pop().text}popParen(){const e=this.peek();if(e.type!=="OPEN_PAREN")throw new Error("bad start");const n=xe(this,ss,io).call(this,M(this,Re)+1,e.match+1);return oe(this,Re,e.match+1),n}popParams(){const e=this.peek();if(e.type!=="OPEN_PAREN")throw new Error("bad start");const n=[];for(;M(this,Re)<e.match-1;){const r=this.peek().linkNext;n.push(xe(this,ss,io).call(this,M(this,Re)+1,r)),oe(this,Re,r)}return oe(this,Re,e.match+1),n}peek(){if(M(this,Re)>=M(this,_t).length)throw new Error("out-of-bounds");return M(this,_t)[M(this,Re)]}peekKeyword(e){const n=this.peekType("KEYWORD");return n!=null&&e.has(n)?n:null}peekType(e){if(this.length===0)return null;const n=this.peek();return n.type===e?n.text:null}pop(){const e=this.peek();return qo(this,Re)._++,e}toString(){const e=[];for(let n=M(this,Re);n<M(this,_t).length;n++){const r=M(this,_t)[n];e.push(`${r.type}:${r.text}`)}return`<TokenString ${e.join(" ")}>`}};Re=new WeakMap,_t=new WeakMap,ss=new WeakSet,io=function(e=0,n=0){return new zs(M(this,_t).slice(e,n).map(r=>Object.freeze(Object.assign({},r,{match:r.match-e,linkBack:r.linkBack-e,linkNext:r.linkNext-e}))))};let At=zs;function Bn(t){const e=[],n=o=>{const a=i<t.length?JSON.stringify(t[i]):"$EOI";throw new Error(`invalid token ${a} at ${i}: ${o}`)};let r=[],s=[],i=0;for(;i<t.length;){let o=t.substring(i),a=o.match(gm);a&&(i+=a[1].length,o=t.substring(i));const c={depth:r.length,linkBack:-1,linkNext:-1,match:-1,type:"",text:"",offset:i,value:-1};e.push(c);let l=pm[o[0]]||"";if(l){if(c.type=l,c.text=o[0],i++,l==="OPEN_PAREN")r.push(e.length-1),s.push(e.length-1);else if(l=="CLOSE_PAREN")r.length===0&&n("no matching open bracket"),c.match=r.pop(),e[c.match].match=e.length-1,c.depth--,c.linkBack=s.pop(),e[c.linkBack].linkNext=e.length-1;else if(l==="COMMA")c.linkBack=s.pop(),e[c.linkBack].linkNext=e.length-1,s.push(e.length-1);else if(l==="OPEN_BRACKET")c.type="BRACKET";else if(l==="CLOSE_BRACKET"){let u=e.pop().text;if(e.length>0&&e[e.length-1].type==="NUMBER"){const d=e.pop().text;u=d+u,e[e.length-1].value=Et(d)}if(e.length===0||e[e.length-1].type!=="BRACKET")throw new Error("missing opening bracket");e[e.length-1].text+=u}continue}if(a=o.match(hm),a){if(c.text=a[1],i+=c.text.length,fm.has(c.text)){c.type="KEYWORD";continue}if(c.text.match(au)){c.type="TYPE";continue}c.type="ID";continue}if(a=o.match(mm),a){c.text=a[1],c.type="NUMBER",i+=c.text.length;continue}throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${i}`)}return new At(e.map(o=>Object.freeze(o)))}function Qa(t,e){let n=[];for(const r in e.keys())t.has(r)&&n.push(r);if(n.length>1)throw new Error(`conflicting types: ${n.join(", ")}`)}function gi(t,e){if(e.peekKeyword(su)){const n=e.pop().text;if(n!==t)throw new Error(`expected ${t}, got ${n}`)}return e.popType("ID")}function mn(t,e){const n=new Set;for(;;){const r=t.peekType("KEYWORD");if(r==null||e&&!e.has(r))break;if(t.pop(),n.has(r))throw new Error(`duplicate keywords: ${JSON.stringify(r)}`);n.add(r)}return Object.freeze(n)}function cu(t){let e=mn(t,cm);return Qa(e,Xe("constant payable nonpayable".split(" "))),Qa(e,Xe("pure view payable nonpayable".split(" "))),e.has("view")?"view":e.has("pure")?"pure":e.has("payable")?"payable":e.has("nonpayable")?"nonpayable":e.has("constant")?"view":"nonpayable"}function dn(t,e){return t.popParams().map(n=>Ne.from(n,e))}function lu(t){if(t.peekType("AT")){if(t.pop(),t.peekType("NUMBER"))return qt(t.pop().text);throw new Error("invalid gas")}return null}function Qn(t){if(t.length)throw new Error(`unexpected tokens at offset ${t.offset}: ${t.toString()}`)}const ym=new RegExp(/^(.*)\[([0-9]*)\]$/);function ec(t){const e=t.match(au);if(G(e,"invalid type","type",t),t==="uint")return"uint256";if(t==="int")return"int256";if(e[2]){const n=parseInt(e[2]);G(n!==0&&n<=32,"invalid bytes length","type",t)}else if(e[3]){const n=parseInt(e[3]);G(n!==0&&n<=256&&n%8===0,"invalid numeric width","type",t)}return t}const Ce={},rt=Symbol.for("_ethers_internal"),tc="_ParamTypeInternal",nc="_ErrorInternal",rc="_EventInternal",sc="_ConstructorInternal",ic="_FallbackInternal",oc="_FunctionInternal",ac="_StructInternal";var yr,Ds;const ht=class ht{constructor(e,n,r,s,i,o,a,c){he(this,yr);Q(this,"name");Q(this,"type");Q(this,"baseType");Q(this,"indexed");Q(this,"components");Q(this,"arrayLength");Q(this,"arrayChildren");if(li(e,Ce,"ParamType"),Object.defineProperty(this,rt,{value:tc}),o&&(o=Object.freeze(o.slice())),s==="array"){if(a==null||c==null)throw new Error("")}else if(a!=null||c!=null)throw new Error("");if(s==="tuple"){if(o==null)throw new Error("")}else if(o!=null)throw new Error("");_e(this,{name:n,type:r,baseType:s,indexed:i,components:o,arrayLength:a,arrayChildren:c})}format(e){if(e==null&&(e="sighash"),e==="json"){const r=this.name||"";if(this.isArray()){const i=JSON.parse(this.arrayChildren.format("json"));return i.name=r,i.type+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`,JSON.stringify(i)}const s={type:this.baseType==="tuple"?"tuple":this.type,name:r};return typeof this.indexed=="boolean"&&(s.indexed=this.indexed),this.isTuple()&&(s.components=this.components.map(i=>JSON.parse(i.format(e)))),JSON.stringify(s)}let n="";return this.isArray()?(n+=this.arrayChildren.format(e),n+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`):this.isTuple()?n+="("+this.components.map(r=>r.format(e)).join(e==="full"?", ":",")+")":n+=this.type,e!=="sighash"&&(this.indexed===!0&&(n+=" indexed"),e==="full"&&this.name&&(n+=" "+this.name)),n}isArray(){return this.baseType==="array"}isTuple(){return this.baseType==="tuple"}isIndexable(){return this.indexed!=null}walk(e,n){if(this.isArray()){if(!Array.isArray(e))throw new Error("invalid array value");if(this.arrayLength!==-1&&e.length!==this.arrayLength)throw new Error("array is wrong length");const r=this;return e.map(s=>r.arrayChildren.walk(s,n))}if(this.isTuple()){if(!Array.isArray(e))throw new Error("invalid tuple value");if(e.length!==this.components.length)throw new Error("array is wrong length");const r=this;return e.map((s,i)=>r.components[i].walk(s,n))}return n(this.type,e)}async walkAsync(e,n){const r=[],s=[e];return xe(this,yr,Ds).call(this,r,e,n,i=>{s[0]=i}),r.length&&await Promise.all(r),s[0]}static from(e,n){if(ht.isParamType(e))return e;if(typeof e=="string")try{return ht.from(Bn(e),n)}catch{G(!1,"invalid param type","obj",e)}else if(e instanceof At){let a="",c="",l=null;mn(e,Xe(["tuple"])).has("tuple")||e.peekType("OPEN_PAREN")?(c="tuple",l=e.popParams().map(h=>ht.from(h)),a=`tuple(${l.map(h=>h.format()).join(",")})`):(a=ec(e.popType("TYPE")),c=a);let u=null,d=null;for(;e.length&&e.peekType("BRACKET");){const h=e.pop();u=new ht(Ce,"",a,c,null,l,d,u),d=h.value,a+=h.text,c="array",l=null}let w=null;if(mn(e,lm).has("indexed")){if(!n)throw new Error("");w=!0}const C=e.peekType("ID")?e.pop().text:"";if(e.length)throw new Error("leftover tokens");return new ht(Ce,C,a,c,w,l,d,u)}const r=e.name;G(!r||typeof r=="string"&&r.match(ou),"invalid name","obj.name",r);let s=e.indexed;s!=null&&(G(n,"parameter cannot be indexed","obj.indexed",e.indexed),s=!!s);let i=e.type,o=i.match(ym);if(o){const a=parseInt(o[2]||"-1"),c=ht.from({type:o[1],components:e.components});return new ht(Ce,r||"",i,"array",s,null,a,c)}if(i==="tuple"||i.startsWith("tuple(")||i.startsWith("(")){const a=e.components!=null?e.components.map(l=>ht.from(l)):null;return new ht(Ce,r||"",i,"tuple",s,a,null,null)}return i=ec(e.type),new ht(Ce,r||"",i,i,s,null,null,null)}static isParamType(e){return e&&e[rt]===tc}};yr=new WeakSet,Ds=function(e,n,r,s){if(this.isArray()){if(!Array.isArray(n))throw new Error("invalid array value");if(this.arrayLength!==-1&&n.length!==this.arrayLength)throw new Error("array is wrong length");const o=this.arrayChildren,a=n.slice();a.forEach((c,l)=>{var u;xe(u=o,yr,Ds).call(u,e,c,r,d=>{a[l]=d})}),s(a);return}if(this.isTuple()){const o=this.components;let a;if(Array.isArray(n))a=n.slice();else{if(n==null||typeof n!="object")throw new Error("invalid tuple value");a=o.map(c=>{if(!c.name)throw new Error("cannot use object value with unnamed components");if(!(c.name in n))throw new Error(`missing value for component ${c.name}`);return n[c.name]})}if(a.length!==this.components.length)throw new Error("array is wrong length");a.forEach((c,l)=>{var u;xe(u=o[l],yr,Ds).call(u,e,c,r,d=>{a[l]=d})}),s(a);return}const i=r(this.type,n);i.then?e.push(async function(){s(await i)}()):s(i)};let Ne=ht;class er{constructor(e,n,r){Q(this,"type");Q(this,"inputs");li(e,Ce,"Fragment"),r=Object.freeze(r.slice()),_e(this,{type:n,inputs:r})}static from(e){if(typeof e=="string"){try{er.from(JSON.parse(e))}catch{}return er.from(Bn(e))}if(e instanceof At)switch(e.peekKeyword(su)){case"constructor":return an.from(e);case"error":return tt.from(e);case"event":return Ht.from(e);case"fallback":case"receive":return en.from(e);case"function":return Vt.from(e);case"struct":return Yn.from(e)}else if(typeof e=="object"){switch(e.type){case"constructor":return an.from(e);case"error":return tt.from(e);case"event":return Ht.from(e);case"fallback":case"receive":return en.from(e);case"function":return Vt.from(e);case"struct":return Yn.from(e)}Ae(!1,`unsupported type: ${e.type}`,"UNSUPPORTED_OPERATION",{operation:"Fragment.from"})}G(!1,"unsupported frgament object","obj",e)}static isConstructor(e){return an.isFragment(e)}static isError(e){return tt.isFragment(e)}static isEvent(e){return Ht.isFragment(e)}static isFunction(e){return Vt.isFragment(e)}static isStruct(e){return Yn.isFragment(e)}}class mi extends er{constructor(n,r,s,i){super(n,r,i);Q(this,"name");G(typeof s=="string"&&s.match(ou),"invalid identifier","name",s),i=Object.freeze(i.slice()),_e(this,{name:s})}}function rs(t,e){return"("+e.map(n=>n.format(t)).join(t==="full"?", ":",")+")"}class tt extends mi{constructor(e,n,r){super(e,"error",n,r),Object.defineProperty(this,rt,{value:nc})}get selector(){return ns(this.format("sighash")).substring(0,10)}format(e){if(e==null&&(e="sighash"),e==="json")return JSON.stringify({type:"error",name:this.name,inputs:this.inputs.map(r=>JSON.parse(r.format(e)))});const n=[];return e!=="sighash"&&n.push("error"),n.push(this.name+rs(e,this.inputs)),n.join(" ")}static from(e){if(tt.isFragment(e))return e;if(typeof e=="string")return tt.from(Bn(e));if(e instanceof At){const n=gi("error",e),r=dn(e);return Qn(e),new tt(Ce,n,r)}return new tt(Ce,e.name,e.inputs?e.inputs.map(Ne.from):[])}static isFragment(e){return e&&e[rt]===nc}}class Ht extends mi{constructor(n,r,s,i){super(n,"event",r,s);Q(this,"anonymous");Object.defineProperty(this,rt,{value:rc}),_e(this,{anonymous:i})}get topicHash(){return ns(this.format("sighash"))}format(n){if(n==null&&(n="sighash"),n==="json")return JSON.stringify({type:"event",anonymous:this.anonymous,name:this.name,inputs:this.inputs.map(s=>JSON.parse(s.format(n)))});const r=[];return n!=="sighash"&&r.push("event"),r.push(this.name+rs(n,this.inputs)),n!=="sighash"&&this.anonymous&&r.push("anonymous"),r.join(" ")}static getTopicHash(n,r){return r=(r||[]).map(i=>Ne.from(i)),new Ht(Ce,n,r,!1).topicHash}static from(n){if(Ht.isFragment(n))return n;if(typeof n=="string")try{return Ht.from(Bn(n))}catch{G(!1,"invalid event fragment","obj",n)}else if(n instanceof At){const r=gi("event",n),s=dn(n,!0),i=!!mn(n,Xe(["anonymous"])).has("anonymous");return Qn(n),new Ht(Ce,r,s,i)}return new Ht(Ce,n.name,n.inputs?n.inputs.map(r=>Ne.from(r,!0)):[],!!n.anonymous)}static isFragment(n){return n&&n[rt]===rc}}class an extends er{constructor(n,r,s,i,o){super(n,r,s);Q(this,"payable");Q(this,"gas");Object.defineProperty(this,rt,{value:sc}),_e(this,{payable:i,gas:o})}format(n){if(Ae(n!=null&&n!=="sighash","cannot format a constructor for sighash","UNSUPPORTED_OPERATION",{operation:"format(sighash)"}),n==="json")return JSON.stringify({type:"constructor",stateMutability:this.payable?"payable":"undefined",payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(s=>JSON.parse(s.format(n)))});const r=[`constructor${rs(n,this.inputs)}`];return this.payable&&r.push("payable"),this.gas!=null&&r.push(`@${this.gas.toString()}`),r.join(" ")}static from(n){if(an.isFragment(n))return n;if(typeof n=="string")try{return an.from(Bn(n))}catch{G(!1,"invalid constuctor fragment","obj",n)}else if(n instanceof At){mn(n,Xe(["constructor"]));const r=dn(n),s=!!mn(n,am).has("payable"),i=lu(n);return Qn(n),new an(Ce,"constructor",r,s,i)}return new an(Ce,"constructor",n.inputs?n.inputs.map(Ne.from):[],!!n.payable,n.gas!=null?n.gas:null)}static isFragment(n){return n&&n[rt]===sc}}class en extends er{constructor(n,r,s){super(n,"fallback",r);Q(this,"payable");Object.defineProperty(this,rt,{value:ic}),_e(this,{payable:s})}format(n){const r=this.inputs.length===0?"receive":"fallback";if(n==="json"){const s=this.payable?"payable":"nonpayable";return JSON.stringify({type:r,stateMutability:s})}return`${r}()${this.payable?" payable":""}`}static from(n){if(en.isFragment(n))return n;if(typeof n=="string")try{return en.from(Bn(n))}catch{G(!1,"invalid fallback fragment","obj",n)}else if(n instanceof At){const r=n.toString(),s=n.peekKeyword(Xe(["fallback","receive"]));if(G(s,"type must be fallback or receive","obj",r),n.popKeyword(Xe(["fallback","receive"]))==="receive"){const c=dn(n);return G(c.length===0,"receive cannot have arguments","obj.inputs",c),mn(n,Xe(["payable"])),Qn(n),new en(Ce,[],!0)}let o=dn(n);o.length?G(o.length===1&&o[0].type==="bytes","invalid fallback inputs","obj.inputs",o.map(c=>c.format("minimal")).join(", ")):o=[Ne.from("bytes")];const a=cu(n);if(G(a==="nonpayable"||a==="payable","fallback cannot be constants","obj.stateMutability",a),mn(n,Xe(["returns"])).has("returns")){const c=dn(n);G(c.length===1&&c[0].type==="bytes","invalid fallback outputs","obj.outputs",c.map(l=>l.format("minimal")).join(", "))}return Qn(n),new en(Ce,o,a==="payable")}if(n.type==="receive")return new en(Ce,[],!0);if(n.type==="fallback"){const r=[Ne.from("bytes")],s=n.stateMutability==="payable";return new en(Ce,r,s)}G(!1,"invalid fallback description","obj",n)}static isFragment(n){return n&&n[rt]===ic}}class Vt extends mi{constructor(n,r,s,i,o,a){super(n,"function",r,i);Q(this,"constant");Q(this,"outputs");Q(this,"stateMutability");Q(this,"payable");Q(this,"gas");Object.defineProperty(this,rt,{value:oc}),o=Object.freeze(o.slice()),_e(this,{constant:s==="view"||s==="pure",gas:a,outputs:o,payable:s==="payable",stateMutability:s})}get selector(){return ns(this.format("sighash")).substring(0,10)}format(n){if(n==null&&(n="sighash"),n==="json")return JSON.stringify({type:"function",name:this.name,constant:this.constant,stateMutability:this.stateMutability!=="nonpayable"?this.stateMutability:void 0,payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(s=>JSON.parse(s.format(n))),outputs:this.outputs.map(s=>JSON.parse(s.format(n)))});const r=[];return n!=="sighash"&&r.push("function"),r.push(this.name+rs(n,this.inputs)),n!=="sighash"&&(this.stateMutability!=="nonpayable"&&r.push(this.stateMutability),this.outputs&&this.outputs.length&&(r.push("returns"),r.push(rs(n,this.outputs))),this.gas!=null&&r.push(`@${this.gas.toString()}`)),r.join(" ")}static getSelector(n,r){return r=(r||[]).map(i=>Ne.from(i)),new Vt(Ce,n,"view",r,[],null).selector}static from(n){if(Vt.isFragment(n))return n;if(typeof n=="string")try{return Vt.from(Bn(n))}catch{G(!1,"invalid function fragment","obj",n)}else if(n instanceof At){const s=gi("function",n),i=dn(n),o=cu(n);let a=[];mn(n,Xe(["returns"])).has("returns")&&(a=dn(n));const c=lu(n);return Qn(n),new Vt(Ce,s,o,i,a,c)}let r=n.stateMutability;return r==null&&(r="payable",typeof n.constant=="boolean"?(r="view",n.constant||(r="payable",typeof n.payable=="boolean"&&!n.payable&&(r="nonpayable"))):typeof n.payable=="boolean"&&!n.payable&&(r="nonpayable")),new Vt(Ce,n.name,r,n.inputs?n.inputs.map(Ne.from):[],n.outputs?n.outputs.map(Ne.from):[],n.gas!=null?n.gas:null)}static isFragment(n){return n&&n[rt]===oc}}class Yn extends mi{constructor(e,n,r){super(e,"struct",n,r),Object.defineProperty(this,rt,{value:ac})}format(){throw new Error("@TODO")}static from(e){if(typeof e=="string")try{return Yn.from(Bn(e))}catch{G(!1,"invalid struct fragment","obj",e)}else if(e instanceof At){const n=gi("struct",e),r=dn(e);return Qn(e),new Yn(Ce,n,r)}return new Yn(Ce,e.name,e.inputs?e.inputs.map(Ne.from):[])}static isFragment(e){return e&&e[rt]===ac}}const Tt=new Map;Tt.set(0,"GENERIC_PANIC");Tt.set(1,"ASSERT_FALSE");Tt.set(17,"OVERFLOW");Tt.set(18,"DIVIDE_BY_ZERO");Tt.set(33,"ENUM_RANGE_ERROR");Tt.set(34,"BAD_STORAGE_DATA");Tt.set(49,"STACK_UNDERFLOW");Tt.set(50,"ARRAY_RANGE_ERROR");Tt.set(65,"OUT_OF_MEMORY");Tt.set(81,"UNINITIALIZED_FUNCTION_CALL");const bm=new RegExp(/^bytes([0-9]*)$/),wm=new RegExp(/^(u?int)([0-9]*)$/);let Pi=null,cc=1024;function vm(t,e,n,r){let s="missing revert data",i=null;const o=null;let a=null;if(n){s="execution reverted";const l=We(n);if(n=fe(n),l.length===0)s+=" (no data present; likely require(false) occurred",i="require(false)";else if(l.length%32!==4)s+=" (could not decode reason; invalid data length)";else if(fe(l.slice(0,4))==="0x08c379a0")try{i=r.decode(["string"],l.slice(4))[0],a={signature:"Error(string)",name:"Error",args:[i]},s+=`: ${JSON.stringify(i)}`}catch{s+=" (could not decode reason; invalid string data)"}else if(fe(l.slice(0,4))==="0x4e487b71")try{const u=Number(r.decode(["uint256"],l.slice(4))[0]);a={signature:"Panic(uint256)",name:"Panic",args:[u]},i=`Panic due to ${Tt.get(u)||"UNKNOWN"}(${u})`,s+=`: ${i}`}catch{s+=" (could not decode panic code)"}else s+=" (unknown custom error)"}const c={to:e.to?Ar(e.to):null,data:e.data||"0x"};return e.from&&(c.from=Ar(e.from)),El(s,"CALL_EXCEPTION",{action:t,data:n,reason:i,transaction:c,invocation:o,revert:a})}var Tn,or;const Gs=class Gs{constructor(){he(this,Tn)}getDefaultValue(e){const n=e.map(s=>xe(this,Tn,or).call(this,Ne.from(s)));return new _s(n,"_").defaultValue()}encode(e,n){Sl(n.length,e.length,"types/values length mismatch");const r=e.map(o=>xe(this,Tn,or).call(this,Ne.from(o))),s=new _s(r,"_"),i=new Xi;return s.encode(i,n),i.data}decode(e,n,r){const s=e.map(o=>xe(this,Tn,or).call(this,Ne.from(o)));return new _s(s,"_").decode(new Yi(n,r,cc))}static _setDefaultMaxInflation(e){G(typeof e=="number"&&Number.isInteger(e),"invalid defaultMaxInflation factor","value",e),cc=e}static defaultAbiCoder(){return Pi==null&&(Pi=new Gs),Pi}static getBuiltinCallException(e,n,r){return vm(e,n,r,Gs.defaultAbiCoder())}};Tn=new WeakSet,or=function(e){if(e.isArray())return new Jg(xe(this,Tn,or).call(this,e.arrayChildren),e.arrayLength,e.name);if(e.isTuple())return new _s(e.components.map(r=>xe(this,Tn,or).call(this,r)),e.name);switch(e.baseType){case"address":return new Kg(e.name);case"bool":return new Xg(e.name);case"string":return new im(e.name);case"bytes":return new Yg(e.name);case"":return new em(e.name)}let n=e.type.match(wm);if(n){let r=parseInt(n[2]||"256");return G(r!==0&&r<=256&&r%8===0,"invalid "+n[1]+" bit length","param",e),new sm(r/8,n[1]==="int",e.name)}if(n=e.type.match(bm),n){let r=parseInt(n[1]);return G(r!==0&&r<=32,"invalid bytes length","param",e),new Zg(r,e.name)}G(!1,"invalid type","type",e.type)};let Tr=Gs;class _m{constructor(e,n,r){Q(this,"fragment");Q(this,"name");Q(this,"signature");Q(this,"topic");Q(this,"args");const s=e.name,i=e.format();_e(this,{fragment:e,name:s,signature:i,topic:n,args:r})}}class xm{constructor(e,n,r,s){Q(this,"fragment");Q(this,"name");Q(this,"args");Q(this,"signature");Q(this,"selector");Q(this,"value");const i=e.name,o=e.format();_e(this,{fragment:e,name:i,args:r,signature:o,selector:n,value:s})}}class Cm{constructor(e,n,r){Q(this,"fragment");Q(this,"name");Q(this,"args");Q(this,"signature");Q(this,"selector");const s=e.name,i=e.format();_e(this,{fragment:e,name:s,args:r,signature:i,selector:n})}}class lc{constructor(e){Q(this,"hash");Q(this,"_isIndexed");_e(this,{hash:e,_isIndexed:!0})}static isIndexed(e){return!!(e&&e._isIndexed)}}const uc={0:"generic panic",1:"assert(false)",17:"arithmetic overflow",18:"division or modulo by zero",33:"enum overflow",34:"invalid encoded storage byte array accessed",49:"out-of-bounds array access; popping on an empty array",50:"out-of-bounds access of an array or bytesN",65:"out of memory",81:"uninitialized function"},dc={"0x08c379a0":{signature:"Error(string)",name:"Error",inputs:["string"],reason:t=>`reverted with reason string ${JSON.stringify(t)}`},"0x4e487b71":{signature:"Panic(uint256)",name:"Panic",inputs:["uint256"],reason:t=>{let e="unknown panic code";return t>=0&&t<=255&&uc[t.toString()]&&(e=uc[t.toString()]),`reverted with panic code 0x${t.toString(16)} (${e})`}}};var Nt,Ut,Mt,Fe,zt,Os,Bs;const Hn=class Hn{constructor(e){he(this,zt);Q(this,"fragments");Q(this,"deploy");Q(this,"fallback");Q(this,"receive");he(this,Nt);he(this,Ut);he(this,Mt);he(this,Fe);let n=[];typeof e=="string"?n=JSON.parse(e):n=e,oe(this,Mt,new Map),oe(this,Nt,new Map),oe(this,Ut,new Map);const r=[];for(const o of n)try{r.push(er.from(o))}catch(a){console.log(`[Warning] Invalid Fragment ${JSON.stringify(o)}:`,a.message)}_e(this,{fragments:Object.freeze(r)});let s=null,i=!1;oe(this,Fe,this.getAbiCoder()),this.fragments.forEach((o,a)=>{let c;switch(o.type){case"constructor":if(this.deploy){console.log("duplicate definition - constructor");return}_e(this,{deploy:o});return;case"fallback":o.inputs.length===0?i=!0:(G(!s||o.payable!==s.payable,"conflicting fallback fragments",`fragments[${a}]`,o),s=o,i=s.payable);return;case"function":c=M(this,Mt);break;case"event":c=M(this,Ut);break;case"error":c=M(this,Nt);break;default:return}const l=o.format();c.has(l)||c.set(l,o)}),this.deploy||_e(this,{deploy:an.from("constructor()")}),_e(this,{fallback:s,receive:i})}format(e){const n=e?"minimal":"full";return this.fragments.map(s=>s.format(n))}formatJson(){const e=this.fragments.map(n=>n.format("json"));return JSON.stringify(e.map(n=>JSON.parse(n)))}getAbiCoder(){return Tr.defaultAbiCoder()}getFunctionName(e){const n=xe(this,zt,Os).call(this,e,null,!1);return G(n,"no matching function","key",e),n.name}hasFunction(e){return!!xe(this,zt,Os).call(this,e,null,!1)}getFunction(e,n){return xe(this,zt,Os).call(this,e,n||null,!0)}forEachFunction(e){const n=Array.from(M(this,Mt).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(M(this,Mt).get(s),r)}}getEventName(e){const n=xe(this,zt,Bs).call(this,e,null,!1);return G(n,"no matching event","key",e),n.name}hasEvent(e){return!!xe(this,zt,Bs).call(this,e,null,!1)}getEvent(e,n){return xe(this,zt,Bs).call(this,e,n||null,!0)}forEachEvent(e){const n=Array.from(M(this,Ut).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(M(this,Ut).get(s),r)}}getError(e,n){if(Vn(e)){const s=e.toLowerCase();if(dc[s])return tt.from(dc[s].signature);for(const i of M(this,Nt).values())if(s===i.selector)return i;return null}if(e.indexOf("(")===-1){const s=[];for(const[i,o]of M(this,Nt))i.split("(")[0]===e&&s.push(o);if(s.length===0)return e==="Error"?tt.from("error Error(string)"):e==="Panic"?tt.from("error Panic(uint256)"):null;if(s.length>1){const i=s.map(o=>JSON.stringify(o.format())).join(", ");G(!1,`ambiguous error description (i.e. ${i})`,"name",e)}return s[0]}if(e=tt.from(e).format(),e==="Error(string)")return tt.from("error Error(string)");if(e==="Panic(uint256)")return tt.from("error Panic(uint256)");const r=M(this,Nt).get(e);return r||null}forEachError(e){const n=Array.from(M(this,Nt).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(M(this,Nt).get(s),r)}}_decodeParams(e,n){return M(this,Fe).decode(e,n)}_encodeParams(e,n){return M(this,Fe).encode(e,n)}encodeDeploy(e){return this._encodeParams(this.deploy.inputs,e||[])}decodeErrorResult(e,n){if(typeof e=="string"){const r=this.getError(e);G(r,"unknown error","fragment",e),e=r}return G(sr(n,0,4)===e.selector,`data signature does not match error ${e.name}.`,"data",n),this._decodeParams(e.inputs,sr(n,4))}encodeErrorResult(e,n){if(typeof e=="string"){const r=this.getError(e);G(r,"unknown error","fragment",e),e=r}return un([e.selector,this._encodeParams(e.inputs,n||[])])}decodeFunctionData(e,n){if(typeof e=="string"){const r=this.getFunction(e);G(r,"unknown function","fragment",e),e=r}return G(sr(n,0,4)===e.selector,`data signature does not match function ${e.name}.`,"data",n),this._decodeParams(e.inputs,sr(n,4))}encodeFunctionData(e,n){if(typeof e=="string"){const r=this.getFunction(e);G(r,"unknown function","fragment",e),e=r}return un([e.selector,this._encodeParams(e.inputs,n||[])])}decodeFunctionResult(e,n){if(typeof e=="string"){const i=this.getFunction(e);G(i,"unknown function","fragment",e),e=i}let r="invalid length for result data";const s=je(n);if(s.length%32===0)try{return M(this,Fe).decode(e.outputs,s)}catch{r="could not decode result data"}Ae(!1,r,"BAD_DATA",{value:fe(s),info:{method:e.name,signature:e.format()}})}makeError(e,n){const r=We(e,"data"),s=Tr.getBuiltinCallException("call",n,r);if(s.message.startsWith("execution reverted (unknown custom error)")){const a=fe(r.slice(0,4)),c=this.getError(a);if(c)try{const l=M(this,Fe).decode(c.inputs,r.slice(4));s.revert={name:c.name,signature:c.format(),args:l},s.reason=s.revert.signature,s.message=`execution reverted: ${s.reason}`}catch{s.message="execution reverted (coult not decode custom error)"}}const o=this.parseTransaction(n);return o&&(s.invocation={method:o.name,signature:o.signature,args:o.args}),s}encodeFunctionResult(e,n){if(typeof e=="string"){const r=this.getFunction(e);G(r,"unknown function","fragment",e),e=r}return fe(M(this,Fe).encode(e.outputs,n||[]))}encodeFilterTopics(e,n){if(typeof e=="string"){const i=this.getEvent(e);G(i,"unknown event","eventFragment",e),e=i}Ae(n.length<=e.inputs.length,`too many arguments for ${e.format()}`,"UNEXPECTED_ARGUMENT",{count:n.length,expectedCount:e.inputs.length});const r=[];e.anonymous||r.push(e.topicHash);const s=(i,o)=>i.type==="string"?ns(o):i.type==="bytes"?jt(fe(o)):(i.type==="bool"&&typeof o=="boolean"?o=o?"0x01":"0x00":i.type.match(/^u?int/)?o=Vs(o):i.type.match(/^bytes/)?o=Ap(o,32):i.type==="address"&&M(this,Fe).encode(["address"],[o]),Il(fe(o),32));for(n.forEach((i,o)=>{const a=e.inputs[o];if(!a.indexed){G(i==null,"cannot filter non-indexed parameters; must be null","contract."+a.name,i);return}i==null?r.push(null):a.baseType==="array"||a.baseType==="tuple"?G(!1,"filtering with tuples or arrays not supported","contract."+a.name,i):Array.isArray(i)?r.push(i.map(c=>s(a,c))):r.push(s(a,i))});r.length&&r[r.length-1]===null;)r.pop();return r}encodeEventLog(e,n){if(typeof e=="string"){const o=this.getEvent(e);G(o,"unknown event","eventFragment",e),e=o}const r=[],s=[],i=[];return e.anonymous||r.push(e.topicHash),G(n.length===e.inputs.length,"event arguments/values mismatch","values",n),e.inputs.forEach((o,a)=>{const c=n[a];if(o.indexed)if(o.type==="string")r.push(ns(c));else if(o.type==="bytes")r.push(jt(c));else{if(o.baseType==="tuple"||o.baseType==="array")throw new Error("not implemented");r.push(M(this,Fe).encode([o.type],[c]))}else s.push(o),i.push(c)}),{data:M(this,Fe).encode(s,i),topics:r}}decodeEventLog(e,n,r){if(typeof e=="string"){const m=this.getEvent(e);G(m,"unknown event","eventFragment",e),e=m}if(r!=null&&!e.anonymous){const m=e.topicHash;G(Vn(r[0],32)&&r[0].toLowerCase()===m,"fragment/topic mismatch","topics[0]",r[0]),r=r.slice(1)}const s=[],i=[],o=[];e.inputs.forEach((m,C)=>{m.indexed?m.type==="string"||m.type==="bytes"||m.baseType==="tuple"||m.baseType==="array"?(s.push(Ne.from({type:"bytes32",name:m.name})),o.push(!0)):(s.push(m),o.push(!1)):(i.push(m),o.push(!1))});const a=r!=null?M(this,Fe).decode(s,un(r)):null,c=M(this,Fe).decode(i,n,!0),l=[],u=[];let d=0,w=0;return e.inputs.forEach((m,C)=>{let h=null;if(m.indexed)if(a==null)h=new lc(null);else if(o[C])h=new lc(a[w++]);else try{h=a[w++]}catch(E){h=E}else try{h=c[d++]}catch(E){h=E}l.push(h),u.push(m.name||null)}),Cr.fromItems(l,u)}parseTransaction(e){const n=We(e.data,"tx.data"),r=qt(e.value!=null?e.value:0,"tx.value"),s=this.getFunction(fe(n.slice(0,4)));if(!s)return null;const i=M(this,Fe).decode(s.inputs,n.slice(4));return new xm(s,s.selector,i,r)}parseCallResult(e){throw new Error("@TODO")}parseLog(e){const n=this.getEvent(e.topics[0]);return!n||n.anonymous?null:new _m(n,n.topicHash,this.decodeEventLog(n,e.data,e.topics))}parseError(e){const n=fe(e),r=this.getError(sr(n,0,4));if(!r)return null;const s=M(this,Fe).decode(r.inputs,sr(n,4));return new Cm(r,r.selector,s)}static from(e){return e instanceof Hn?e:typeof e=="string"?new Hn(JSON.parse(e)):typeof e.formatJson=="function"?new Hn(e.formatJson()):typeof e.format=="function"?new Hn(e.format("json")):new Hn(e)}};Nt=new WeakMap,Ut=new WeakMap,Mt=new WeakMap,Fe=new WeakMap,zt=new WeakSet,Os=function(e,n,r){if(Vn(e)){const i=e.toLowerCase();for(const o of M(this,Mt).values())if(i===o.selector)return o;return null}if(e.indexOf("(")===-1){const i=[];for(const[o,a]of M(this,Mt))o.split("(")[0]===e&&i.push(a);if(n){const o=n.length>0?n[n.length-1]:null;let a=n.length,c=!0;nt.isTyped(o)&&o.type==="overrides"&&(c=!1,a--);for(let l=i.length-1;l>=0;l--){const u=i[l].inputs.length;u!==a&&(!c||u!==a-1)&&i.splice(l,1)}for(let l=i.length-1;l>=0;l--){const u=i[l].inputs;for(let d=0;d<n.length;d++)if(nt.isTyped(n[d])){if(d>=u.length){if(n[d].type==="overrides")continue;i.splice(l,1);break}if(n[d].type!==u[d].baseType){i.splice(l,1);break}}}}if(i.length===1&&n&&n.length!==i[0].inputs.length){const o=n[n.length-1];(o==null||Array.isArray(o)||typeof o!="object")&&i.splice(0,1)}if(i.length===0)return null;if(i.length>1&&r){const o=i.map(a=>JSON.stringify(a.format())).join(", ");G(!1,`ambiguous function description (i.e. matches ${o})`,"key",e)}return i[0]}const s=M(this,Mt).get(Vt.from(e).format());return s||null},Bs=function(e,n,r){if(Vn(e)){const i=e.toLowerCase();for(const o of M(this,Ut).values())if(i===o.topicHash)return o;return null}if(e.indexOf("(")===-1){const i=[];for(const[o,a]of M(this,Ut))o.split("(")[0]===e&&i.push(a);if(n){for(let o=i.length-1;o>=0;o--)i[o].inputs.length<n.length&&i.splice(o,1);for(let o=i.length-1;o>=0;o--){const a=i[o].inputs;for(let c=0;c<n.length;c++)if(nt.isTyped(n[c])&&n[c].type!==a[c].baseType){i.splice(o,1);break}}}if(i.length===0)return null;if(i.length>1&&r){const o=i.map(a=>JSON.stringify(a.format())).join(", ");G(!1,`ambiguous event description (i.e. matches ${o})`,"key",e)}return i[0]}const s=M(this,Ut).get(Ht.from(e).format());return s||null};let oo=Hn;function km(){ft();const t=Me(),e=Te(),n=F({}),r=F({}),s=F(0),i=F("0xAb5801a7D398351b8bE11C439e05C5B9ebB6AA0c"),o=F(new Set),a={weapon:"0x1234567890123456789012345678901234567890",achievement:"0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"},c=F({weapon:{},achievement:{}}),l=(f,p)=>!f||!p?{success:!1,message:"❌ 请输入名称和头像！",hints:[],nextStep:"👉 填写名称和头像后点击保存",error:"EMPTY_INPUT"}:(n.value[i.value]={name:f,avatar:p},e.addLog(16,"设置资料",`名称: ${f}, 头像: ${p}`,"setProfile16"),{success:!0,message:"✅ 资料已保存！",hints:["mapping_storage"],nextStep:"🗺️ 你的资料已保存到 mapping！👉 注册 weapon 插件来学习插件系统！"}),u=f=>{const p=n.value[f];return e.addLog(16,"查询资料",`地址: ${D(f)}`),p||{name:"",avatar:""}},d=(f,p)=>{if(!f||!p)return{success:!1,message:"❌ 请输入插件标识符和地址！",hints:[],nextStep:"👉 填写插件标识符和合约地址",error:"EMPTY_INPUT"};if(r.value[f])return{success:!1,message:`❌ 插件 "${f}" 已存在！`,hints:[],nextStep:"👉 使用其他标识符或先注销现有插件",error:"PLUGIN_EXISTS"};r.value[f]=p,s.value++,e.addLog(16,"注册插件",`标识: ${f}, 地址: ${D(p)}`,"registerPlugin16");const v=["plugin_registration"];let A=`🔌 插件 "${f}" 注册成功！👉 点击「调用」执行插件函数！`;return s.value>=2&&(v.push("dynamic_delegation"),A="🔄 动态委托系统运行中！👉 在不同插件间切换体验互操作！"),{success:!0,message:`✅ 插件 "${f}" 注册成功！`,hints:v,nextStep:A,registeredAddress:p}},w=f=>r.value[f]||"",m=(f,p,v)=>{try{const A=f.split("(")[0],g=new oo([`function ${f}`]).getFunction(A).selector,I=new Tr,T=Ar(p),B=f.includes("string"),$=B?["address","string"]:["address"],K=B?[T,v||""]:[T],N=I.encode($,K),P=g+N.slice(2),S=[{type:"selector",value:g,desc:"函数选择器 (4 bytes)",detail:`keccak256("${f}").slice(0,10)`},{type:"address",value:T,desc:"address 参数",detail:"zero-padded to 32 bytes"}];if(B){const L=v||"";S.push({type:"offset",value:"0x0000000000000000000000000000000000000000000000000000000000000040",desc:"string 偏移量 (64 bytes)"},{type:"length",value:"0x"+L.length.toString(16).padStart(64,"0"),desc:`string 长度 (${L.length})`},{type:"data",value:fe(di(L)).slice(2).padEnd(64,"0"),desc:"string 数据 (padded)",detail:`"${L}"`})}return{selector:g,encodedParams:"0x"+N.slice(2),fullEncodedData:P,breakdown:S}}catch(A){return console.error("ABI编码错误:",A),console.error("参数:",{functionSignature:f,user:p,argument:v}),null}},C=(f,p,v,A)=>{if(!r.value[f])return{success:!1,message:`❌ 插件 "${f}" 未注册！`,hints:[],nextStep:`👉 先点击「插件管理中心」注册 ${f} 插件！`,error:"PLUGIN_NOT_REGISTERED"};const _=m(p,v,A);if(!_)return{success:!1,message:"❌ ABI编码失败！",hints:[],nextStep:"👉 检查函数签名格式，例如: setWeapon(address,string)",error:"ABI_ENCODE_FAILED"};if(Math.random()<.1)return{success:!1,message:"❌ 插件调用失败！（演示错误场景）",hints:[],nextStep:"👉 可能是 Gas 不足或函数 revert。检查参数是否满足插件要求。",error:"CALL_FAILED"};const g=p.split("(")[0];c.value[f]||(c.value[f]={}),c.value[f][v]=A,o.value.add(f),e.addLog(16,"执行插件",`插件: ${f}, 函数: ${g}, 参数: ${A}`,"runPlugin16");const I=["low_level_call","abi_encoding"];let T="⚡ 低级别调用成功！👉 查看 ABI 编码可视化或切换 staticcall 模式查询数据！";return o.value.size>=2&&(I.push("contract_interop"),T="🌐 合约互操作掌握！👉 查看完整代码了解所有实现细节！"),{success:!0,message:`✅ 调用 ${f}.${g} 成功！`,hints:I,nextStep:T,encoded:_.breakdown}},h=(f,p,v)=>{var g;if(!r.value[f])return{success:!1,message:`❌ 插件 "${f}" 未注册！`,hints:[],nextStep:`👉 先注册 ${f} 插件！`,error:"PLUGIN_NOT_REGISTERED"};const A=p.split("(")[0],_=((g=c.value[f])==null?void 0:g[v])||"";return e.addLog(16,"查询插件",`插件: ${f}, 函数: ${A}, 返回值: ${_||"(空)"}`),{success:!0,message:`✅ 查询 ${f}.${A} 成功！`,hints:["staticcall"],nextStep:_?`👁️ 返回值: "${_}" 👉 尝试切换到其他插件！`:"👁️ 查询成功但无数据 👉 先用 call 模式写入数据！",result:_}},E=(f,p)=>{var v;return((v=c.value[f])==null?void 0:v[p])||""},D=f=>!f||f.length<10?f:f.slice(0,6)+"..."+f.slice(-4),b=f=>{t.unlockConcept(16,f)},k=O(()=>({gasUsage:e.getDayGasUsage(16),ethCost:e.getDayEthCost(16),operationCount:e.getDayOperationCount(16)}));return{profiles:n,plugins:r,pluginCounter:s,currentUser:i,pluginData:c,interactedPlugins:o,predefinedPlugins:a,setProfile:l,getProfile:u,registerPlugin:d,getPlugin:w,runPlugin:C,runPluginView:h,getPluginData:E,encodeFunctionCall:m,unlockConcept:b,shortenAddress:D,realtimeData:k}}function Em(){const t=ft(),e=Me(),n=Te();t.contracts.day17;const r=F("owner"),s=F("V1"),i=F(!1),o=F(!1),a=F(!1),c=F([]),l=F(1),u=F(.1),d=F(30),w=F(1),m=F(null),C=F("0xV1LogicContractAddress"),h=F("0xOwnerAddress"),E=O(()=>c.value.length),D=O(()=>m.value?1:0),b=O(()=>m.value!==null),k=O(()=>{const S=c.value.find(L=>L.id===w.value);return S?S.price:0}),f=O(()=>!m.value||!m.value.paused?0:m.value.expiry),p=O(()=>{if(!m.value)return"未订阅";if(m.value.paused)return"已暂停";const S=Math.floor(Date.now()/1e3);return m.value.expiry>S?"有效":"已过期"}),v=O(()=>{if(!m.value)return"status-inactive";if(m.value.paused)return"status-paused";const S=Math.floor(Date.now()/1e3);return m.value.expiry>S?"status-active":"status-expired"}),A=()=>{const S=l.value,L=parseFloat(u.value),Z=d.value*24*60*60;return c.value.find(ce=>ce.id===S)?{success:!1,message:"❌ 计划 ID 已存在",hints:[],nextStep:""}:(c.value.push({id:S,price:L,duration:Z,durationDays:d.value}),w.value=S,n.addLog(17,"创建计划",`计划 ${S}: ${L} ETH, ${d.value}天`,"createPlan17"),e.incrementInteraction(17),c.value.length===1?{success:!0,message:`✅ 计划 ${S} 创建成功！存储在 planPrices[${S}] 中！`,hints:[],nextStep:"📊 再创建 1 个计划即可解锁升级功能！👉 创建第2个计划！"}:{success:!0,message:`✅ 计划 ${S} 创建成功！`,hints:[],nextStep:'🎉 现在可以升级到 V2 了！👉 点击"升级到 V2"按钮，体验合约升级！'})},_=()=>i.value?{success:!1,message:"❌ 合约已经升级过了",hints:[],nextStep:""}:c.value.length<2?{success:!1,message:"❌ 需要至少 2 个计划才能升级",hints:[],nextStep:`💡 当前只有 ${c.value.length} 个计划，请再创建 ${2-c.value.length} 个！`}:(o.value=!0,setTimeout(()=>{i.value=!0,s.value="V2",C.value="0xV2LogicContractAddress",a.value=!0,o.value=!1,setTimeout(()=>{a.value=!1},3e3)},1e3),n.addLog(17,"升级合约","V1 → V2","upgradeTo17"),e.incrementInteraction(17),e.unlockConcept(17,"upgrade_mechanism"),e.unlockConcept(17,"logic_contract"),{success:!0,message:"🚀 合约已升级到 V2！逻辑合约地址已更新！",hints:["upgrade_mechanism","logic_contract"],nextStep:"⚡ 恭喜解锁：升级机制 + 逻辑合约！👉 切换到 User 身份，执行订阅操作！"}),g=()=>i.value?(s.value="V1",C.value="0xV1LogicContractAddress",{success:!0,message:"⚙️ 已切换到 V1 逻辑合约",hints:[],nextStep:""}):{success:!1,message:"❌ 合约尚未升级",hints:[],nextStep:""},I=()=>i.value?(s.value="V2",C.value="0xV2LogicContractAddress",{success:!0,message:"⚡ 已切换到 V2 逻辑合约",hints:[],nextStep:""}):{success:!1,message:"❌ 合约尚未升级",hints:[],nextStep:""},T=()=>{const S=w.value,L=c.value.find(pe=>pe.id===S);if(!L)return{success:!1,message:"❌ 计划不存在",hints:[],nextStep:""};const ne=Math.floor(Date.now()/1e3)+L.duration;return m.value={planId:S,expiry:ne,paused:!1},n.addLog(17,"订阅计划",`计划 ${S}: ${L.price} ETH`,"subscribe17"),e.incrementInteraction(17),e.getDayProgress(17).unlockedConcepts.includes("fallback_function")?{success:!0,message:`✅ 订阅成功！您已订阅计划 ${S}！`,hints:[],nextStep:""}:(e.unlockConcept(17,"fallback_function"),{success:!0,message:`✅ 订阅成功！您已订阅计划 ${S}！`,hints:["fallback_function"],nextStep:"🔒 恭喜解锁：回退函数！调用通过 fallback 委托给逻辑合约！👉 查询订阅状态，查看升级后数据是否仍然存在！"})},B=()=>{if(!m.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};if(m.value.paused)return{success:!1,message:"❌ 订阅已经处于暂停状态",hints:[],nextStep:""};const S=Math.floor(Date.now()/1e3);if(m.value.expiry<=S)return{success:!1,message:"❌ 订阅已过期",hints:[],nextStep:""};const L=m.value.expiry-S;return m.value.paused=!0,m.value.expiry=L,n.addLog(17,"暂停订阅",`剩余时间: ${L} 秒`,"pauseSubscription17"),e.incrementInteraction(17),e.getDayProgress(17).unlockedConcepts.includes("version_control")?{success:!0,message:"⏸️ 订阅已暂停！剩余时间已保存！",hints:[],nextStep:""}:(e.unlockConcept(17,"version_control"),{success:!0,message:"⏸️ 订阅已暂停！剩余时间已保存！",hints:["version_control"],nextStep:"🚀 恭喜解锁：版本控制！这是 V2 新增的功能！👉 恢复订阅来完成所有学习！"})},$=()=>{if(!m.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};if(!m.value.paused)return{success:!1,message:"❌ 订阅未处于暂停状态",hints:[],nextStep:""};const S=Math.floor(Date.now()/1e3),L=m.value.expiry;return m.value.paused=!1,m.value.expiry=S+L,n.addLog(17,"恢复订阅",`新的过期时间: ${m.value.expiry}`,"resumeSubscription17"),e.incrementInteraction(17),{success:!0,message:"▶️ 订阅已恢复！过期时间已重新计算！",hints:[],nextStep:"🎉 恭喜你已掌握 Day 17 全部核心功能！👉 查看完整代码来巩固知识！"}},K=()=>{if(!m.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};const S=Math.floor(Date.now()/1e3);let L="";if(m.value.paused)L=`已暂停，剩余 ${m.value.expiry} 秒`;else if(m.value.expiry>S){const ne=m.value.expiry-S;L=`有效，剩余 ${Math.floor(ne/86400)} 天 ${Math.floor(ne%86400/3600)} 小时`}else L="已过期";n.addLog(17,"查询订阅",`计划 ${m.value.planId}: ${L}`,null),e.incrementInteraction(17);const Z=e.getDayProgress(17).unlockedConcepts;return i.value&&!Z.includes("data_persistence")?(e.unlockConcept(17,"data_persistence"),{success:!0,message:`📊 您的订阅状态: ${L}`,hints:["data_persistence"],nextStep:"🏗️ 恭喜解锁：数据持久化！升级后数据保持不变！👉 使用 V2 新功能（暂停/恢复）来对比版本差异！"}):{success:!0,message:`📊 您的订阅状态: ${L}`,hints:[],nextStep:""}},N=S=>(r.value=S,S==="owner"?{success:!0,message:"✅ 已切换到 Owner 身份！",hints:[],nextStep:"👉 创建订阅计划来体验数据存储！"}:{success:!0,message:"✅ 已切换到 User 身份！",hints:[],nextStep:"👉 选择计划并执行订阅，体验 fallback 委托调用！"}),P=O(()=>({gasUsage:n.getDayGasUsage(17),ethCost:n.getDayEthCost(17),operationCount:n.getDayOperationCount(17)}));return{currentRole:r,currentVersion:s,upgraded:i,isUpgrading:o,justUpgraded:a,plans:c,newPlanId:l,newPlanPrice:u,newPlanDuration:d,selectedPlanId:w,subscription:m,logicContractAddress:C,ownerAddress:h,plansCount:E,subscriptionsCount:D,hasSubscription:b,selectedPlanPrice:k,remainingTime:f,subscriptionStatusText:p,subscriptionStatusClass:v,createPlan:A,upgradeToV2:_,switchToV1:g,switchToV2:I,subscribe:T,pauseSubscription:B,resumeSubscription:$,checkSubscription:K,switchRole:N,realtimeData:P}}function Sm(){const t=Te();Me();const e=F("Alice"),n=F("farmer"),r=F(3e11),s=F(350),i=F({Alice:!1,Bob:!1,Carol:!1}),o=F({Alice:0,Bob:0,Carol:0}),a=F(5e18),c=F(0),l=F(0),u=500,d=10,w=50,m=24*60*60*1e3,C=O(()=>d*1e26/r.value),h=O(()=>w*1e26/r.value),E=O(()=>s.value<u),D=O(()=>{const S=e.value,L=o.value[S]||0,Z=Date.now();return i.value[S]&&Z-L>=m}),b=O(()=>{const S=e.value,L=o.value[S]||0,Z=Date.now(),ne=m-(Z-L);return ne>0?ne:0}),k=O(()=>i.value[e.value]?D.value?{status:"available",text:"可索赔"}:{status:"cooldown",text:"冷却中"}:{status:"no_insurance",text:"未投保"}),f=S=>(S/1e18).toFixed(4),p=S=>(S/1e8).toFixed(2),v=S=>{if(S<=0)return"00:00:00";const L=Math.floor(S/(1e3*60*60)),Z=Math.floor(S%(1e3*60*60)/(1e3*60)),ne=Math.floor(S%(1e3*60)/1e3);return`${L.toString().padStart(2,"0")}:${Z.toString().padStart(2,"0")}:${ne.toString().padStart(2,"0")}`},A=()=>(s.value=Math.floor(Math.random()*1e3),t.addLog(18,"更新天气数据",`降雨量更新为 ${s.value}mm`,"checkRainfall18"),{success:!0,message:`🌧️ 天气数据已更新！当前降雨量: ${s.value}mm`,rainfall:s.value,hints:["random_generation"],nextStep:E.value?"⚠️ 干旱警报！降雨量低于阈值，可以申请赔付。":"✅ 天气正常，降雨量高于阈值。"}),_=()=>(t.addLog(18,"查询天气数据",`当前降雨量: ${s.value}mm`,"checkRainfall18"),{success:!0,message:`🔍 查询结果：当前降雨量 ${s.value}mm，阈值 ${u}mm`,rainfall:s.value,isDrought:E.value,nextStep:E.value?"⚠️ 干旱状态！符合索赔条件。":"✅ 正常状态，不符合索赔条件。"}),g=()=>{const S=e.value;if(i.value[S])return{success:!1,message:"❌ 您已经购买了保险！"};const L=C.value;return i.value[S]=!0,l.value+=L,a.value+=L,t.addLog(18,"购买保险",`支付保费 ${f(L)} ETH`,"purchaseInsurance18"),{success:!0,message:`🎉 保险购买成功！支付保费 ${f(L)} ETH ($${d})`,hints:["purchase_insurance","price_conversion"],nextStep:"👉 当降雨量低于500mm时，可以申请赔付。注意：24小时内只能索赔一次！"}},I=()=>{const S=e.value;if(!i.value[S])return{success:!1,message:"❌ 您尚未购买保险！请先购买保险。",nextStep:'👉 点击"购买保险"按钮购买保险。'};if(!E.value)return{success:!1,message:`❌ 当前降雨量 ${s.value}mm 高于阈值 ${u}mm，不符合索赔条件。`,nextStep:"👉 等待干旱发生或更新天气数据。"};const L=o.value[S]||0,Z=Date.now();if(Z-L<m){const ce=m-(Z-L);return{success:!1,message:`⏱️ 冷却期中！剩余时间: ${v(ce)}`,hints:["cooldown_mechanism"],nextStep:'👉 使用"⏩ 快进24小时"按钮跳过冷却期，或等待时间结束。'}}const ne=h.value;return a.value<ne?{success:!1,message:"❌ 合约余额不足，无法赔付！"}:(o.value[S]=Z,c.value+=ne,a.value-=ne,t.addLog(18,"申请赔付",`获得赔付 ${f(ne)} ETH`,"claimPayout18"),{success:!0,message:`💸 赔付成功！获得 ${f(ne)} ETH ($${w})`,hints:["parametric_payout"],nextStep:'⏱️ 已触发24小时冷却期！点击"了解冷却期机制"学习更多。'})},T=()=>{const S=e.value,L=o.value[S]||0;return L===0?{success:!1,message:"❌ 您还没有进行过索赔！"}:D.value?{success:!1,message:"✅ 您已经可以索赔了，无需快进！"}:(o.value[S]=L-m,t.addLog(18,"快进时间","跳过24小时冷却期","fastForwardTime18"),{success:!0,message:"⏩ 时间已快进24小时！冷却期已结束。",hints:["cooldown_mechanism"],nextStep:"👉 现在可以再次申请赔付了！"})},B=()=>{if(n.value!=="admin")return{success:!1,message:"❌ 只有管理员可以提取余额！"};const S=a.value;return a.value=0,t.addLog(18,"提取余额",`提取 ${f(S)} ETH`,"withdrawBalance18"),{success:!0,message:`💸 提取成功！共提取 ${f(S)} ETH`,hints:["contract_balance"],nextStep:"👉 合约余额已清零。"}},$=S=>{e.value=S,n.value="farmer"},K=()=>{n.value="admin",e.value="Owner"},N=()=>{const S=.95+Math.random()*.1;return r.value=Math.floor(3e11*S),{success:!0,message:`💰 ETH价格已更新！当前价格: $${p(r.value)}`}},P=O(()=>({gasUsage:t.getDayGasUsage(18),ethCost:t.getDayEthCost(18),operationCount:t.getDayOperationCount(18)}));return{currentUser:e,currentRole:n,ethPrice:r,rainfall:s,hasInsurance:i,lastClaimTimestamp:o,contractBalance:a,totalPayout:c,totalPremium:l,RAINFALL_THRESHOLD:u,INSURANCE_PREMIUM_USD:d,INSURANCE_PAYOUT_USD:w,premiumInEth:C,payoutInEth:h,isDrought:E,canClaim:D,cooldownRemaining:b,cooldownStatus:k,formatEth:f,formatUsd:p,formatTime:v,updateRainfall:A,checkRainfall:_,purchaseInsurance:g,claimPayout:I,fastForwardTime:T,withdrawBalance:B,switchUser:$,switchToAdmin:K,updateEthPrice:N,realtimeData:P}}function Am(){const t=Te();Me();const e="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",n="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",r=F("organizer"),s=F("0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"),i=F({"0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc":!1,"0x976EA74026E726554dB657fA54763abd0C3a0aa9":!1,"0x14dC79964da2C08b23698B3d3cc7Ca32193d9955":!1}),o=F(null),a=F(!1),c=O(()=>n),l=O(()=>s.value),u=O(()=>i.value[s.value]||!1),d=O(()=>Object.entries(i.value).filter(([p,v])=>v).map(([p])=>p)),w=p=>p?p.substring(0,6)+"..."+p.substring(p.length-4):"",m=()=>{try{const p=s.value,v=Ar(p),_=new Tr().encode(["address"],[v]),g=jt(_),T=jt(di(`Ethereum Signed Message:
32`+g.slice(2))),$=new so(e).sign(T);return o.value={r:$.r,s:$.s,v:$.v,full:$.serialized,messageHash:g,ethSignedMessageHash:T},t.addLog(19,"生成签名",`为用户 ${w(p)} 生成签名`,"generateSignature19"),{success:!0,message:`✅ 签名生成成功！
签名: ${$.serialized.substring(0,20)}...`,signature:$.serialized,hints:["keccak256_hash","msg_sender"],nextStep:"👉 点击展开签名详情，查看 R/S/V 组件！"}}catch(p){return{success:!1,message:`❌ 签名生成失败: ${p.message}`}}},C=()=>{const p=s.value;return o.value?i.value[p]?{success:!1,message:"❌ 你已经参与过此活动！"}:(i.value[p]=!0,t.addLog(19,"参与活动",`用户 ${w(p)} 使用签名参与活动`,"enterEvent19"),{success:!0,message:`🎉 参与成功！
你已使用签名成功参与活动！`,hints:["ecrecover","require_statement","eip191_prefix"],nextStep:"👉 点击参与者列表查看映射存储，完成所有概念解锁！"}):{success:!1,message:"❌ 请先生成签名！"}},h=()=>{const p=s.value,v=i.value[p]||!1;return t.addLog(19,"查询参与状态",`查询用户 ${w(p)} 参与状态: ${v}`,"checkEntered19"),{success:!0,message:v?"✅ 该用户已参与活动":"❌ 该用户尚未参与活动",entered:v}},E=()=>{const p=d.value;return t.addLog(19,"获取参与者列表",`当前参与者数量: ${p.length}`,"getParticipants19"),{success:!0,message:`📋 当前参与者数量: ${p.length}`,participants:p,hints:["mapping_storage"],nextStep:"🎉 你已掌握 Day 19 所有核心概念！"}},D=()=>(a.value=!a.value,a.value&&o.value?{success:!0,hints:["signature_rsv"],nextStep:"👉 使用签名参与活动来解锁 ecrecover！"}:{success:!1}),b=(p=null)=>(p?r.value=p:r.value=r.value==="organizer"?"participant":"organizer",r.value==="participant"?{success:!0,message:`👤 已切换为参与者角色
地址: ${w(s.value)}`}:{success:!0,message:`👤 已切换为组织者角色
地址: ${w(n)}`}),k=p=>{s.value=p,o.value=null},f=O(()=>({gasUsage:t.getDayGasUsage(19),ethCost:t.getDayEthCost(19),operationCount:t.getDayOperationCount(19)}));return{currentRole:r,currentUserAddress:s,organizer:c,hasEntered:i,generatedSignature:o,showSignatureDetails:a,participantAddress:l,isEntered:u,participantsList:d,formatAddress:w,generateSignature:m,enterEvent:C,checkEntered:h,getParticipants:E,toggleSignatureDetails:D,toggleRole:b,changeUserAddress:k,realtimeData:f}}function Tm(){const t=Te(),e=Me(),n=F(10),r=F({"0xAttacker":1,"0xUserA":5,"0xUserB":3}),s=F(1),i=F(0),o=F(0),a=F(!1),c=F([]),l=1,u=2,d=k=>r.value[k]||0,w=(k,f)=>{const p="deposit20";return f<=0?(t.addLog(20,"deposit","存款金额必须大于0",!1,p),{success:!1,message:"❌ 存款金额必须大于0",hints:[],nextStep:""}):(r.value[k]=(r.value[k]||0)+f,n.value+=f,t.addLog(20,"deposit",`用户 ${k} 存入 ${f} ETH`,!0,p),{success:!0,message:`✅ 成功存入 ${f} ETH！`,hints:["deposit_function"],nextStep:"👉 现在尝试攻击漏洞版本，观察重入攻击如何工作！"})},m=(k,f=5)=>{var B;const p="vulnerableWithdraw20",v=((B=e.getDayProgress(20))==null?void 0:B.unlockedConcepts)||[],A=r.value[k]||0;if(A<=0)return t.addLog(20,"vulnerableWithdraw","余额不足",!1,p),{success:!1,message:"❌ 余额不足，无法提款",hints:[],nextStep:""};a.value=!0;let _=0,g=0;const I=[];for(;g<f&&n.value>=A;)_+=A,n.value-=A,I.push({round:g+1,amount:A,vaultBalance:n.value}),g++;r.value[k]=0,i.value=g,o.value=_,c.value=I,setTimeout(()=>{a.value=!1},1e3),t.addLog(20,"vulnerableWithdraw",`重入攻击成功！${g}次调用，窃取${_}ETH`,!0,p);const T=["vulnerable_withdraw"];return v.includes("fallback_receive")||T.push("fallback_receive"),{success:!0,message:`🚨 重入攻击成功！通过 ${g} 次递归调用，窃取了 ${_} ETH！`,hints:T,nextStep:"💡 观察攻击如何重复提款！👉 查看防护机制了解如何修复！",attackDetails:{count:g,stolen:_,history:I}}},C=k=>{const f="safeWithdraw20",p=r.value[k]||0;return p<=0?(t.addLog(20,"safeWithdraw","余额不足",!1,f),{success:!1,message:"❌ 余额不足，无法提款",hints:[],nextStep:""}):(a.value=!0,s.value===u?(a.value=!1,t.addLog(20,"safeWithdraw","重入调用被阻止",!1,f),{success:!1,message:"🔒 重入调用被阻止！Reentrant call blocked",hints:["reentrancy_guard"],nextStep:"✅ 攻击被阻止！👉 查看代码对比巩固知识！",blocked:!0}):(s.value=u,r.value[k]=0,n.value-=p,s.value=l,t.addLog(20,"safeWithdraw",`安全提款成功！提取${p}ETH`,!0,f),a.value=!1,{success:!0,message:`✅ 安全提款成功！提取了 ${p} ETH（重入锁保护）`,hints:["reentrancy_guard"],nextStep:"✅ 攻击被阻止！👉 查看代码对比巩固知识！"}))},h=()=>{i.value=0,o.value=0,a.value=!1,c.value=[],s.value=l},E=()=>(n.value=10,r.value={"0xAttacker":1,"0xUserA":5,"0xUserB":3},h(),t.addLog(20,"reset","重置金库状态",!0,null),{success:!0,message:"✅ 金库状态已重置",hints:[],nextStep:""}),D=()=>({balance:n.value,userBalances:{...r.value},reentrancyStatus:s.value===u?"🔒 已锁定":"🔓 未锁定",isLocked:s.value===u}),b=O(()=>({gasUsage:t.getDayGasUsage(20),ethCost:t.getDayEthCost(20),operationCount:t.getDayOperationCount(20)}));return{vaultBalance:n,userBalances:r,reentrancyStatus:s,attackCount:i,stolenAmount:o,isAttacking:a,attackHistory:c,_NOT_ENTERED:l,_ENTERED:u,deposit:w,vulnerableWithdraw:m,safeWithdraw:C,resetAttack:h,resetVault:E,getVaultStatus:D,getUserBalance:d,realtimeData:b}}function Im(){const t=Te(),e=F([]),n=F(1),r=F({}),s=F({}),i=F({}),o=F({}),a=F({}),c=F(null),l=F({to:"",uri:""}),u=F({to:""}),d=F({to:""}),w=F({operator:"",approved:!0}),m=F({address:""}),C=F(""),h=F(!1),E=(B,$=!1)=>{C.value=B,h.value=$,setTimeout(()=>{C.value=""},3e3)},D=(B,$)=>{if(!B||!$)return E("请输入接收地址和元数据URI",!0),{success:!1,message:"请输入接收地址和元数据URI"};const K=n.value;return n.value++,r.value[K]=B,s.value[B]=(s.value[B]||0)+1,a.value[K]=$,e.value.push({tokenId:K,owner:B,uri:$}),t.addLog(21,"铸造NFT",`Token ID: ${K} 接收者: ${B}`,"mint21"),E(`🎉 NFT铸造成功！Token ID: ${K}`),{success:!0,message:`NFT铸造成功！Token ID: ${K}`,hints:["铸造函数从0地址创建新NFT","Token ID计数器自动递增"],nextStep:"查询地址余额了解持有情况"}},b=B=>{if(!B)return E("请输入查询地址",!0),{success:!1,message:"请输入查询地址"};const $=s.value[B]||0;return t.addLog(21,"查询余额",`地址: ${B} 持有: ${$} 个NFT`,"balanceOf21"),E(`✅ 查询成功！${B.slice(0,10)}... 持有 ${$} 个NFT`),{success:!0,message:`地址 ${B.slice(0,10)}... 持有 ${$} 个NFT`,balance:$,hints:["balanceOf使用_balances映射存储","映射查询时间复杂度为O(1)"],nextStep:'👉 1.在画廊点击NFT选中 → 2.切换到"授权"标签 → 3.输入授权地址 → 4.点击批准授权！'}},k=B=>{const $=r.value[B];return $?{success:!0,owner:$}:(E("Token不存在",!0),{success:!1,message:"Token不存在"})},f=(B,$,K)=>{if(!$)return E("请输入目标地址",!0),{success:!1,message:"请输入目标地址"};const N=r.value[K];if(!N)return E("Token不存在",!0),{success:!1,message:"Token不存在"};if(N!==B)return E("你不是该NFT的所有者",!0),{success:!1,message:"你不是该NFT的所有者"};delete i.value[K],s.value[B]=(s.value[B]||0)-1,s.value[$]=(s.value[$]||0)+1,r.value[K]=$;const P=e.value.find(S=>S.tokenId===K);return P&&(P.owner=$),t.addLog(21,"转移NFT",`Token #${K} 从 ${B.slice(0,10)}... 到 ${$.slice(0,10)}...`,"transferFrom21"),E(`✅ NFT转移成功！Token #${K} 已转移到 ${$.slice(0,10)}...`),{success:!0,message:`NFT转移成功！Token #${K}`,hints:["transferFrom需要事先授权或自己是所有者","转移后清除原有授权"],nextStep:"尝试授权其他地址管理你的NFT"}},p=(B,$,K)=>{if(!$)return E("请输入目标地址",!0),{success:!1,message:"请输入目标地址"};if($.length>20&&!(Math.random()>.3))return E("❌ 接收方合约不支持ERC721！转移被拒绝。",!0),{success:!1,message:"接收方合约不支持ERC721"};const P=f(B,$,K);return P.success?(t.addLog(21,"安全转移NFT",`Token #${K} 从 ${B.slice(0,10)}... 到 ${$.slice(0,10)}...`,"safeTransferFrom21"),E("🔒 安全转移完成！接收方支持ERC721！"),{success:!0,message:"安全转移成功！",hints:["safeTransferFrom检查接收方是否实现IERC721Receiver","防止代币被锁定在不支持的合约中"],nextStep:"尝试授权功能"}):P},v=(B,$)=>B?r.value[$]?(i.value[$]=B,t.addLog(21,"授权NFT",`Token #${$} 授权给 ${B.slice(0,10)}...`,"approve21"),E(`🔑 授权成功！Token #${$} 已授权给 ${B.slice(0,10)}...`),{success:!0,message:`授权成功！Token #${$}`,hints:["approve授权单个代币","被授权地址可以转移该代币"],nextStep:"尝试设置操作员授权"}):(E("Token不存在",!0),{success:!1,message:"Token不存在"}):(E("请输入授权地址",!0),{success:!1,message:"请输入授权地址"}),A=B=>({success:!0,approved:i.value[B]||""}),_=(B,$)=>B?(o.value.currentUser||(o.value.currentUser={}),o.value.currentUser[B]=$,t.addLog(21,"操作员授权",`${B.slice(0,10)}... ${$?"已授权":"已取消"}`,"setApprovalForAll21"),E(`${$?"✅":"❌"} 操作员授权${$?"已设置":"已取消"}！${B.slice(0,10)}...`),{success:!0,message:`操作员授权${$?"已设置":"已取消"}`,hints:["setApprovalForAll授权/取消操作员","操作员可以管理所有代币"],nextStep:"查看所有权追踪"}):(E("请输入操作员地址",!0),{success:!1,message:"请输入操作员地址"}),g=(B,$)=>{var K;return((K=o.value[B])==null?void 0:K[$])||!1},I=B=>e.value.filter($=>$.owner===B),T=O(()=>({gasUsage:t.getDayGasUsage(21),ethCost:t.getDayEthCost(21),operationCount:t.getDayOperationCount(21)}));return{nfts:e,tokenIdCounter:n,owners:r,balances:s,tokenApprovals:i,operatorApprovals:o,tokenURIs:a,selectedTokenId:c,mintForm:l,transferForm:u,approveForm:d,operatorForm:w,queryForm:m,message:C,isError:h,showMessage:E,mintNFT:D,balanceOf:b,ownerOf:k,transferFrom:f,safeTransferFrom:p,approve:v,getApproved:A,setApprovalForAll:_,isApprovedForAll:g,getTokensByOwner:I,realtimeData:T}}function Dm(t){return{realtimeData:O(()=>{switch(t.value){case 1:return up().realtimeData.value;case 2:return dp().realtimeData.value;case 3:return fp().realtimeData.value;case 4:return pp().realtimeData.value;case 5:return gp().realtimeData.value;case 6:return mp().realtimeData.value;case 7:return hp().realtimeData.value;case 8:return yp().realtimeData.value;case 9:return bp().realtimeData.value;case 10:return wp().realtimeData.value;case 11:return vp().realtimeData.value;case 12:return _p().realtimeData.value;case 13:return xp().realtimeData.value;case 14:return Cp().realtimeData.value;case 15:return kp().realtimeData.value;case 16:return km().realtimeData.value;case 17:return Em().realtimeData.value;case 18:return Sm().realtimeData.value;case 19:return Am().realtimeData.value;case 20:return Tm().realtimeData.value;case 21:return Im().realtimeData.value;default:return{gasUsage:0,ethCost:0,operationCount:0}}})}}const ds=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Om={class:"header"},Bm={class:"header-center"},Pm={class:"main-title"},Rm={class:"easter-egg-container"},$m={__name:"AppHeader",props:{showLeftSidebar:{type:Boolean,default:!0},showRightSidebar:{type:Boolean,default:!0}},emits:["toggle-left-sidebar","toggle-right-sidebar"],setup(t){const e=F(!1),n=()=>{e.value=!e.value,e.value?(document.documentElement.dataset.theme="dark",localStorage.setItem("theme","dark")):(document.documentElement.dataset.theme="light",localStorage.setItem("theme","light"))},r=F(!1),s=F(!1),i=F("");let o=null;const a=["In Code We Trust!","🔮 今日宜：部署主网；忌：未 Audit","⚠️ 注意你的 Reentrancy 漏洞！","Gas 费太高了，先在这练练手！","HODL! 到下一个牛市！","🎉 签运：大吉！编译一遍过","🚀 To the Moon!","智能合约，不可篡改！","🧐 别忘了测边缘情况"],c=()=>{if(r.value)return;r.value=!0,setTimeout(()=>{r.value=!1},600);const l=a[Math.floor(Math.random()*a.length)];i.value=l,s.value=!0,o&&clearTimeout(o),o=setTimeout(()=>{s.value=!1},3e3)};return Co(()=>{(localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"))==="dark"&&(e.value=!0,document.documentElement.dataset.theme="dark")}),(l,u)=>(ve(),ke("div",Om,[Y("button",{class:Ct(["sidebar-toggle-btn left-toggle",{active:t.showLeftSidebar}]),onClick:u[0]||(u[0]=d=>l.$emit("toggle-left-sidebar"))}," 📅 日程 ",2),Y("div",Bm,[Y("h1",Pm,[Y("div",Rm,[Y("button",{class:Ct(["easter-egg-btn",{animating:r.value}]),onClick:c,title:"点这里有惊喜"}," 🎓 ",2),Y("div",{class:Ct(["toast-message",{show:s.value}])},Oe(i.value),3)]),u[2]||(u[2]=Y("span",null,"Solidity 学习互动演示",-1)),Y("button",{class:"theme-toggle-btn",onClick:n,title:"切换模式"},Oe(e.value?"☀️":"🌙"),1)]),u[3]||(u[3]=Y("div",{class:"warning-banner"},[Y("span",null,"模拟环境，不消耗真实 Gas 或 ETH"),Y("span",{class:"author-credit"},[zr("by "),Y("a",{href:"https://github.com/Tenlossiby",target:"_blank",rel:"noopener noreferrer"},"Tenlossiby")])],-1))]),Y("button",{class:Ct(["sidebar-toggle-btn right-toggle",{active:t.showRightSidebar}]),onClick:u[1]||(u[1]=d=>l.$emit("toggle-right-sidebar"))}," 📊 进度 ",2)]))}},Lm=ds($m,[["__scopeId","data-v-9217367d"]]),Nm={class:"left-sidebar"},Um={class:"sidebar-header"},Mm=["title"],Fm=["onClick"],Hm={class:"day-nav-header"},Vm={class:"day-title"},qm={class:"day-subtitle"},Wm={__name:"DayNavigation",props:{currentDay:{type:Number,required:!0}},emits:["switchDay"],setup(t){const e=F(!0),n=()=>{e.value=!e.value},r=O(()=>{const i=Object.keys(xr).map(Number);return e.value?i:i.reverse()}),s=i=>{var o;return i===14?"安全存款盒/SafeDeposit":((o=xr[i])==null?void 0:o.subtitle)||"待定内容"};return(i,o)=>(ve(),ke("div",Nm,[Y("div",Um,[o[0]||(o[0]=Y("h3",null,"📚 学习导航",-1)),Y("button",{class:"sort-toggle-btn",onClick:n,title:e.value?"点击切换倒序":"点击切换正序"},Oe(e.value?"🔼 正序":"🔽 倒序"),9,Mm)]),(ve(!0),ke(ct,null,Us(r.value,a=>(ve(),ke("div",{key:a,class:Ct(["day-nav-item",{active:t.currentDay===a}]),onClick:c=>i.$emit("switchDay",a)},[Y("div",Hm,[Y("div",Vm,"Day "+Oe(a),1)]),Y("div",qm,Oe(s(a)),1)],10,Fm))),128))]))}},zm=ds(Wm,[["__scopeId","data-v-6c23ceee"]]),Gm="modulepreload",Km=function(t,e){return new URL(t,e).href},fc={},De=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=Km(l,r),l in fc)return;fc[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!r)for(let C=o.length-1;C>=0;C--){const h=o[C];if(h.href===l&&(!u||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":Gm,u||(m.as="script"),m.crossOrigin="",m.href=l,c&&m.setAttribute("nonce",c),document.head.appendChild(m),u)return new Promise((C,h)=>{m.addEventListener("load",C),m.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},jm={class:"coming-soon-content"},Jm={class:"coming-soon-card"},Xm={class:"description"},Ym={class:"suggestion"},Zm={class:"available-days"},Qm=["onClick"],eh={__name:"ComingSoon",props:{day:{type:Number,default:0}},emits:["switchDay"],setup(t,{emit:e}){const n=e,r=Object.keys(xr).map(Number).sort((i,o)=>i-o),s=i=>{n("switchDay",i)};return(i,o)=>(ve(),ke("div",jm,[Y("div",Jm,[o[1]||(o[1]=Y("div",{class:"icon"},"🚧",-1)),o[2]||(o[2]=Y("h2",null,"内容建设中",-1)),o[3]||(o[3]=Y("p",{class:"subtitle"},"Coming Soon",-1)),Y("p",Xm," Day "+Oe(t.day)+" 的内容正在开发中，敬请期待！ ",1),Y("div",Ym,[o[0]||(o[0]=Y("p",null,"💡 提示：目前可用的学习内容：",-1)),Y("div",Zm,[(ve(!0),ke(ct,null,Us(Xr(r),a=>(ve(),ke("span",{key:a,class:"day-tag",onClick:c=>s(a)}," Day "+Oe(a),9,Qm))),128))])])])]))}},th=ds(eh,[["__scopeId","data-v-8b051cae"]]),nh={class:"center-content"},rh={__name:"DayContent",props:{currentDay:{type:Number,required:!0}},emits:["switchDay"],setup(t,{emit:e}){const n={1:Ie(()=>De(()=>import("./ClickCounter-CQv1Ix_L.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),2:Ie(()=>De(()=>import("./SaveMyName-CPxYn-4A.js"),__vite__mapDeps([4,1,2,5]),import.meta.url)),3:Ie(()=>De(()=>import("./PollStation-DuCTGTRP.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)),4:Ie(()=>De(()=>import("./AuctionHouse-sQn8VgdZ.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)),5:Ie(()=>De(()=>import("./AdminOnly-CZnGEt4s.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)),6:Ie(()=>De(()=>import("./EtherPiggyBank-kOU_ZJrr.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)),7:Ie(()=>De(()=>import("./SimpleIOUApp-DhBoIUb3.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)),8:Ie(()=>De(()=>import("./TipJar-BgZbxVBO.js"),__vite__mapDeps([16,1,2,17]),import.meta.url)),9:Ie(()=>De(()=>import("./SmartCalculator-BwUbVncj.js"),__vite__mapDeps([18,1,2,19]),import.meta.url)),10:Ie(()=>De(()=>import("./ActivityTracker-BFXvCYWb.js"),__vite__mapDeps([20,1,2,21]),import.meta.url)),11:Ie(()=>De(()=>import("./MasterkeyContract-g742V79B.js"),__vite__mapDeps([22,1,2,23]),import.meta.url)),12:Ie(()=>De(()=>import("./ERC20Token-CbzNn5CU.js"),__vite__mapDeps([24,1,2,25]),import.meta.url)),13:Ie(()=>De(()=>import("./MyToken-DSMNJuFr.js"),__vite__mapDeps([26,1,2,27]),import.meta.url)),14:Ie(()=>De(()=>import("./SafeDeposit-BrbtxZON.js"),__vite__mapDeps([28,1,2,29]),import.meta.url)),15:Ie(()=>De(()=>import("./GasEfficientVoting-imRFY8tx.js"),__vite__mapDeps([30,1,2,31]),import.meta.url)),16:Ie(()=>De(()=>import("./PluginStore-Clwf0iV1.js"),__vite__mapDeps([32,1,2,33]),import.meta.url)),17:Ie(()=>De(()=>import("./UpgradeHub-BGeRh4WP.js"),__vite__mapDeps([34,1,2,35]),import.meta.url)),18:Ie(()=>De(()=>import("./OracleContract-CXHl6e_X.js"),__vite__mapDeps([36,1,2,37]),import.meta.url)),19:Ie(()=>De(()=>import("./SignThis-Df1Tl63K.js"),__vite__mapDeps([38,1,2,39]),import.meta.url)),20:Ie(()=>De(()=>import("./ReentryAttack-BvDrBYk0.js"),__vite__mapDeps([40,1,2,41]),import.meta.url)),21:Ie(()=>De(()=>import("./SimpleNFT-BZ99DE6-.js"),__vite__mapDeps([42,1,2,43]),import.meta.url))},r=t,s=e,i=O(()=>n[r.currentDay]||th),o=a=>{s("switchDay",a)};return(a,c)=>(ve(),ke("div",nh,[(ve(),pl(Td(i.value),{key:t.currentDay,day:t.currentDay,onSwitchDay:o},null,40,["day"]))]))}},sh=ds(rh,[["__scopeId","data-v-d696ae5a"]]),ih={class:"right-sidebar"},oh={class:"sidebar-card"},ah={class:"progress-bar"},ch={class:"progress-stats"},lh={class:"sidebar-card"},uh={class:"unlocked-list"},dh={key:0,class:"locked"},fh={class:"icon"},ph={key:0,class:"sidebar-card"},gh={class:"realtime-data"},mh={key:0},hh={class:"data-row"},yh={class:"value"},bh={class:"data-row"},wh={class:"value"},vh={class:"data-row"},_h={class:"value"},xh={key:1,class:"no-operations"},Ch={class:"sidebar-card"},kh={class:"operation-log"},Eh={key:0,class:"no-operations"},Sh={key:1},Ah={class:"data-row"},Th={class:"timestamp"},Ih={key:0,class:"data-row gas-info"},Dh={class:"value"},Oh={class:"value"},Bh={__name:"Sidebar",props:{realtimeData:{type:Object,default:null},dayProgress:{type:Object,required:!0},currentDay:{type:Number,required:!0}},setup(t){const e=t,n=Te(),r=O(()=>n.getDayLogs(e.currentDay)),s=O(()=>{const c=e.dayProgress[e.currentDay];return!c||c.totalConcepts===0?0:Math.floor(c.unlockedConcepts.length/c.totalConcepts*100)}),i=O(()=>{const c=e.dayProgress[e.currentDay];return(c==null?void 0:c.unlockedConcepts.length)||0}),o=O(()=>{const c=e.dayProgress[e.currentDay];return(c==null?void 0:c.totalConcepts)||0}),a=O(()=>{const c=xr[e.currentDay];if(!c||!c.concepts)return[];const l=e.dayProgress[e.currentDay],u=(l==null?void 0:l.unlockedConcepts)||[];let d=Zf;return e.currentDay===11?d=Qf:e.currentDay===12?d=tp:e.currentDay===13?d=ep:e.currentDay===14?d=np:e.currentDay===15?d=rp:e.currentDay===16?d=sp:e.currentDay===17?d=ip:e.currentDay===18?d=op:e.currentDay===19?d=ap:e.currentDay===20?d=cp:e.currentDay===21&&(d=lp),c.concepts.map(w=>{const m=d[w];return{key:w,name:(m==null?void 0:m.name)||w,icon:u.includes(w)?m==null?void 0:m.icon:"🔒",isUnlocked:u.includes(w)}})});return(c,l)=>(ve(),ke("div",ih,[Y("div",oh,[l[0]||(l[0]=Y("h3",null,"🎓 学习进度",-1)),Y("div",ah,[Y("div",{class:"progress-fill",style:ei({width:s.value+"%"})},null,4)]),Y("div",ch,[Y("span",null,"完成度 "+Oe(s.value)+"%",1),Y("span",null,"已解锁 "+Oe(i.value)+"/"+Oe(o.value),1)])]),Y("div",lh,[l[2]||(l[2]=Y("h3",null,"✅ 已解锁概念",-1)),Y("ul",uh,[a.value.length===0?(ve(),ke("li",dh,[...l[1]||(l[1]=[Y("span",{class:"icon"},"🚧",-1),zr(" 内容开发中... ",-1)])])):As("",!0),(ve(!0),ke(ct,null,Us(a.value,u=>(ve(),ke("li",{key:u.key,class:Ct({locked:!u.isUnlocked})},[Y("span",fh,Oe(u.icon),1),zr(" "+Oe(u.name),1)],2))),128))])]),t.realtimeData?(ve(),ke("div",ph,[l[6]||(l[6]=Y("h3",null,"📊 实时数据",-1)),Y("div",gh,[t.realtimeData.operationCount>0?(ve(),ke("div",mh,[Y("div",hh,[l[3]||(l[3]=Y("span",{class:"label"},"操作次数：",-1)),Y("span",yh,Oe(t.realtimeData.operationCount),1)]),Y("div",bh,[l[4]||(l[4]=Y("span",{class:"label"},"Gas 消耗：",-1)),Y("span",wh,Oe(t.realtimeData.gasUsage.toLocaleString()),1)]),Y("div",vh,[l[5]||(l[5]=Y("span",{class:"label"},"ETH 费用：",-1)),Y("span",_h,Oe(t.realtimeData.ethCost.toFixed(6)),1)])])):(ve(),ke("div",xh," 暂无操作记录 "))])])):As("",!0),Y("div",Ch,[l[9]||(l[9]=Y("h3",null,"📋 操作日志",-1)),Y("div",kh,[r.value.length===0?(ve(),ke("p",Eh,"暂无操作记录")):(ve(),ke("div",Sh,[(ve(!0),ke(ct,null,Us(r.value.slice(0,10),u=>(ve(),ke("div",{key:u.id,class:"log-entry"},[Y("div",Ah,[Y("span",Th,Oe(u.timestamp),1),Y("span",null,[Y("strong",null,Oe(u.operation),1),zr(" "+Oe(u.details),1)])]),u.gasUsed>0?(ve(),ke("div",Ih,[l[7]||(l[7]=Y("span",{class:"label"},"Gas:",-1)),Y("span",Dh,Oe(u.gasUsed.toLocaleString()),1),l[8]||(l[8]=Y("span",{class:"label",style:{"margin-left":"15px"}},"ETH:",-1)),Y("span",Oh,Oe(u.ethCost.toFixed(6)),1)])):As("",!0)]))),128))]))])])]))}},Ph=ds(Bh,[["__scopeId","data-v-3b6816ad"]]),Rh={class:"app-container"},$h={class:"main-layout"},Lh={__name:"App",setup(t){const e=Me(),n=F(!0),r=F(!0),s=F(1),i=F(!1),{realtimeData:o}=Dm(s),a=()=>{const w=window.innerWidth<=1100;!i.value&&w&&(n.value=!1,r.value=!1),i.value&&!w&&(n.value=!0,r.value=!0),i.value=w},c=O(()=>i.value&&(n.value||r.value));Co(()=>{a(),window.addEventListener("resize",a)}),ko(()=>{window.removeEventListener("resize",a)});const l=d=>{s.value=d},u=()=>{n.value=!1,r.value=!1};return(d,w)=>(ve(),ke("div",Rh,[Le(Lm,{"show-left-sidebar":n.value,"show-right-sidebar":r.value,onToggleLeftSidebar:w[0]||(w[0]=m=>n.value=!n.value),onToggleRightSidebar:w[1]||(w[1]=m=>r.value=!r.value)},null,8,["show-left-sidebar","show-right-sidebar"]),c.value?(ve(),ke("div",{key:0,class:"sidebar-overlay active",onClick:Uf(u,["stop"])})):As("",!0),Y("div",$h,[Le(zm,{"current-day":s.value,onSwitchDay:l,class:Ct({hidden:!n.value&&!i.value,"mobile-visible":i.value&&n.value,show:n.value&&i.value})},null,8,["current-day","class"]),Le(sh,{"current-day":s.value,onSwitchDay:l},null,8,["current-day"]),Le(Ph,{"current-day":s.value,"day-progress":Xr(e).dayProgress,"realtime-data":Xr(o),class:Ct({hidden:!r.value&&!i.value,"mobile-visible":i.value&&r.value,show:r.value&&i.value})},null,8,["current-day","day-progress","realtime-data","class"])])]))}},uu=Vf(Lh),Nh=zf();uu.use(Nh);uu.mount("#app");export{Qf as $,hp as A,yp as B,zh as C,bp as D,Cs as E,ct as F,Co as G,Hh as H,ei as I,wp as J,vp as K,_p as L,xp as M,Cp as N,t0 as O,kp as P,Qh as Q,Te as R,km as S,Wh as T,Vh as U,Em as V,Sm as W,Am as X,Tm as Y,Im as Z,ds as _,Y as a,tp as a0,ep as a1,np as a2,rp as a3,sp as a4,ip as a5,op as a6,Zf as a7,Xh as a8,r0 as a9,i0 as aa,a0 as ab,l0 as ac,d0 as ad,p0 as ae,Jh as af,Zh as ag,Yh as ah,n0 as ai,e0 as aj,s0 as ak,o0 as al,c0 as am,u0 as an,f0 as ao,g0 as ap,jh as aq,ap as ar,cp as as,lp as at,Fh as au,Xr as b,ke as c,pl as d,As as e,Le as f,dp as g,Gh as h,O as i,Kh as j,fp as k,Us as l,pp as m,Ct as n,ve as o,Uf as p,Me as q,F as r,gp as s,Oe as t,up as u,qh as v,Mh as w,Ee as x,zr as y,mp as z};
