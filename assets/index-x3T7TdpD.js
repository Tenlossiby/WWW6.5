const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClickCounter-CPh9DGpy.js","./FullCodeModal-fk2OH5Pl.js","./FullCodeModal-CVgjM1tz.css","./ClickCounter-cuEHdkTE.css","./SaveMyName-DpqgrsUA.js","./SaveMyName-CAUeDGcC.css","./PollStation-DnuhcrZE.js","./PollStation-DDaC2Lvn.css","./AuctionHouse-BHBGpHP-.js","./AuctionHouse-Dx5megk6.css","./AdminOnly-pPjrF7F6.js","./AdminOnly-BH42YLS5.css","./EtherPiggyBank-BMEEbyfp.js","./EtherPiggyBank-B05u_Xb5.css","./SimpleIOUApp-BSfDoCe-.js","./SimpleIOUApp-B-0TMH-R.css","./TipJar-guCFk7gU.js","./TipJar-BTmJuooz.css","./SmartCalculator-bd-w3gXp.js","./SmartCalculator-CkF9VyiN.css","./ActivityTracker-H-XbYM6S.js","./ActivityTracker-C9WKbHU7.css","./MasterkeyContract-D53Bgy9Z.js","./MasterkeyContract-BJXVKu_r.css","./ERC20Token-C3lGnR9V.js","./ERC20Token-BvQRXJN9.css","./MyToken-DqKs6g-9.js","./MyToken-ChEwAHOo.css","./SafeDeposit-Iz6ZcXXu.js","./SafeDeposit-CwL_tn9H.css","./GasEfficientVoting-DsyLFxe4.js","./GasEfficientVoting-DD9FOH7O.css","./PluginStore-QM_gs2Fg.js","./PluginStore-DEvKw2su.css","./UpgradeHub-5a4dlh1r.js","./UpgradeHub-CYZ_ZIay.css","./OracleContract-BA699Yma.js","./OracleContract-DDwHPvfl.css","./SignThis-BH_rM0s9.js","./SignThis-CQmgsfV9.css","./ReentryAttack-CmwTOPBN.js","./ReentryAttack-CH4FmMww.css","./SimpleNFT-Dy375FDw.js","./SimpleNFT-Ca-fg8gX.css","./FairChainLottery-CqATyDA1.js","./FairChainLottery-Bz1jVuYm.css","./SimpleLending-CR5SLWbI.js","./SimpleLending-CZfhoQZR.css","./EnhancedSimpleEscrow-B8UM5f0c.js","./EnhancedSimpleEscrow-BDfPF9qP.css","./AutomatedMarketMaker-BTfla_pO.js","./AutomatedMarketMaker-OnQhCEoN.css","./NFTMarketplace-BKA7Bo42.js","./NFTMarketplace-BtPFYrfl.css","./YieldFarming-DVCFD-Na.js","./YieldFarming-DjpSXB88.css","./DecentralizedGovernance-CXyGMWTi.js","./DecentralizedGovernance-oaZBAed3.css","./SimpleStablecoin-ZDA5ZBC2.js","./SimpleStablecoin-BYJuh8lX.css","./MiniDex-pWpAHGlS.js","./MiniDex-DLVrwEef.css"])))=>i.map(i=>d[i]);
var dl=Object.defineProperty;var Va=t=>{throw TypeError(t)};var pl=(t,e,n)=>e in t?dl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var te=(t,e,n)=>pl(t,typeof e!="symbol"?e+"":e,n),vi=(t,e,n)=>e.has(t)||Va("Cannot "+n);var H=(t,e,n)=>(vi(t,e,"read from private field"),n?n.call(t):e.get(t)),_e=(t,e,n)=>e.has(t)?Va("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ue=(t,e,n,r)=>(vi(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Ee=(t,e,n)=>(vi(t,e,"access private method"),n);var Ha=(t,e,n,r)=>({set _(s){ue(t,e,s,n)},get _(){return H(t,e,r)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ua(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},dr=[],Gt=()=>{},fu=()=>!1,js=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ca=t=>t.startsWith("onUpdate:"),Ue=Object.assign,la=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fl=Object.prototype.hasOwnProperty,ge=(t,e)=>fl.call(t,e),ie=Array.isArray,pr=t=>as(t)==="[object Map]",Ys=t=>as(t)==="[object Set]",Wa=t=>as(t)==="[object Date]",oe=t=>typeof t=="function",Re=t=>typeof t=="string",jt=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",mu=t=>(we(t)||oe(t))&&oe(t.then)&&oe(t.catch),gu=Object.prototype.toString,as=t=>gu.call(t),ml=t=>as(t).slice(8,-1),hu=t=>as(t)==="[object Object]",Xs=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Nr=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gl=/-\w/g,wt=Zs(t=>t.replace(gl,e=>e.slice(1).toUpperCase())),hl=/\B([A-Z])/g,On=Zs(t=>t.replace(hl,"-$1").toLowerCase()),Js=Zs(t=>t.charAt(0).toUpperCase()+t.slice(1)),bi=Zs(t=>t?`on${Js(t)}`:""),Dn=(t,e)=>!Object.is(t,e),xs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yu=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Qs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let za;const ei=()=>za||(za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ti(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Re(r)?wl(r):ti(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Re(t)||we(t))return t}const yl=/;(?![^(]*\))/g,vl=/:([^]+)/,bl=/\/\*[^]*?\*\//g;function wl(t){const e={};return t.replace(bl,"").split(yl).forEach(n=>{if(n){const r=n.split(vl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ct(t){let e="";if(Re(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Ct(t[n]);r&&(e+=r+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kl=ua(_l);function vu(t){return!!t||t===""}function xl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qn(t[r],e[r]);return n}function Qn(t,e){if(t===e)return!0;let n=Wa(t),r=Wa(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=jt(t),r=jt(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?xl(t,e):!1;if(n=we(t),r=we(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const o=t.hasOwnProperty(a),u=e.hasOwnProperty(a);if(o&&!u||!o&&u||!Qn(t[a],e[a]))return!1}}return String(t)===String(e)}function Al(t,e){return t.findIndex(n=>Qn(n,e))}const bu=t=>!!(t&&t.__v_isRef===!0),Pe=t=>Re(t)?t:t==null?"":ie(t)||we(t)&&(t.toString===gu||!oe(t.toString))?bu(t)?Pe(t.value):JSON.stringify(t,wu,2):String(t),wu=(t,e)=>bu(e)?wu(t,e.value):pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[wi(r,i)+" =>"]=s,n),{})}:Ys(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wi(n))}:jt(e)?wi(e):we(e)&&!ie(e)&&!hu(e)?String(e):e,wi=(t,e="")=>{var n;return jt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let We;class _u{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=We,!e&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=We;try{return We=this,e()}finally{We=n}}}on(){++this._on===1&&(this.prevScope=We,We=this)}off(){this._on>0&&--this._on===0&&(We=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ku(t){return new _u(t)}function xu(){return We}function Cl(t,e=!1){We&&We.cleanups.push(t)}let Ae;const _i=new WeakSet;class Au{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&We.active&&We.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_i.has(this)&&(_i.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ga(this),Eu(this);const e=Ae,n=Tt;Ae=this,Tt=!0;try{return this.fn()}finally{Su(this),Ae=e,Tt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fa(e);this.deps=this.depsTail=void 0,Ga(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_i.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bi(this)&&this.run()}get dirty(){return Bi(this)}}let Cu=0,$r,qr;function Tu(t,e=!1){if(t.flags|=8,e){t.next=qr,qr=t;return}t.next=$r,$r=t}function da(){Cu++}function pa(){if(--Cu>0)return;if(qr){let e=qr;for(qr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$r;){let e=$r;for($r=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Eu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Su(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),fa(r),Tl(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Bi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Iu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Iu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Yr)||(t.globalVersion=Yr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Bi(t))))return;t.flags|=2;const e=t.dep,n=Ae,r=Tt;Ae=t,Tt=!0;try{Eu(t);const s=t.fn(t._value);(e.version===0||Dn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ae=n,Tt=r,Su(t),t.flags&=-3}}function fa(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)fa(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Tl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Tt=!0;const Du=[];function mn(){Du.push(Tt),Tt=!1}function gn(){const t=Du.pop();Tt=t===void 0?!0:t}function Ga(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ae;Ae=void 0;try{e()}finally{Ae=n}}}let Yr=0;class El{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ma{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ae||!Tt||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new El(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,Ru(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(e){this.version++,Yr++,this.notify(e)}notify(e){da();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pa()}}}function Ru(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ru(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ls=new WeakMap,Yn=Symbol(""),Fi=Symbol(""),Xr=Symbol("");function ze(t,e,n){if(Tt&&Ae){let r=Ls.get(t);r||Ls.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ma),s.map=r,s.key=n),s.track()}}function an(t,e,n,r,s,i){const a=Ls.get(t);if(!a){Yr++;return}const o=u=>{u&&u.trigger()};if(da(),e==="clear")a.forEach(o);else{const u=ie(t),c=u&&Xs(n);if(u&&n==="length"){const l=Number(r);a.forEach((d,b)=>{(b==="length"||b===Xr||!jt(b)&&b>=l)&&o(d)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(Xr)),e){case"add":u?c&&o(a.get("length")):(o(a.get(Yn)),pr(t)&&o(a.get(Fi)));break;case"delete":u||(o(a.get(Yn)),pr(t)&&o(a.get(Fi)));break;case"set":pr(t)&&o(a.get(Yn));break}}pa()}function Sl(t,e){const n=Ls.get(t);return n&&n.get(e)}function rr(t){const e=de(t);return e===t?e:(ze(e,"iterate",Xr),ft(t)?e:e.map(St))}function ni(t){return ze(t=de(t),"iterate",Xr),t}function An(t,e){return hn(t)?br(ln(t)?St(e):e):St(e)}const Il={__proto__:null,[Symbol.iterator](){return ki(this,Symbol.iterator,t=>An(this,t))},concat(...t){return rr(this).concat(...t.map(e=>ie(e)?rr(e):e))},entries(){return ki(this,"entries",t=>(t[1]=An(this,t[1]),t))},every(t,e){return Zt(this,"every",t,e,void 0,arguments)},filter(t,e){return Zt(this,"filter",t,e,n=>n.map(r=>An(this,r)),arguments)},find(t,e){return Zt(this,"find",t,e,n=>An(this,n),arguments)},findIndex(t,e){return Zt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Zt(this,"findLast",t,e,n=>An(this,n),arguments)},findLastIndex(t,e){return Zt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Zt(this,"forEach",t,e,void 0,arguments)},includes(...t){return xi(this,"includes",t)},indexOf(...t){return xi(this,"indexOf",t)},join(t){return rr(this).join(t)},lastIndexOf(...t){return xi(this,"lastIndexOf",t)},map(t,e){return Zt(this,"map",t,e,void 0,arguments)},pop(){return Rr(this,"pop")},push(...t){return Rr(this,"push",t)},reduce(t,...e){return Ka(this,"reduce",t,e)},reduceRight(t,...e){return Ka(this,"reduceRight",t,e)},shift(){return Rr(this,"shift")},some(t,e){return Zt(this,"some",t,e,void 0,arguments)},splice(...t){return Rr(this,"splice",t)},toReversed(){return rr(this).toReversed()},toSorted(t){return rr(this).toSorted(t)},toSpliced(...t){return rr(this).toSpliced(...t)},unshift(...t){return Rr(this,"unshift",t)},values(){return ki(this,"values",t=>An(this,t))}};function ki(t,e,n){const r=ni(t),s=r[e]();return r!==t&&!ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Dl=Array.prototype;function Zt(t,e,n,r,s,i){const a=ni(t),o=a!==t&&!ft(t),u=a[e];if(u!==Dl[e]){const d=u.apply(t,i);return o?St(d):d}let c=n;a!==t&&(o?c=function(d,b){return n.call(this,An(t,d),b,t)}:n.length>2&&(c=function(d,b){return n.call(this,d,b,t)}));const l=u.call(a,c,r);return o&&s?s(l):l}function Ka(t,e,n,r){const s=ni(t);let i=n;return s!==t&&(ft(t)?n.length>3&&(i=function(a,o,u){return n.call(this,a,o,u,t)}):i=function(a,o,u){return n.call(this,a,An(t,o),u,t)}),s[e](i,...r)}function xi(t,e,n){const r=de(t);ze(r,"iterate",Xr);const s=r[e](...n);return(s===-1||s===!1)&&si(n[0])?(n[0]=de(n[0]),r[e](...n)):s}function Rr(t,e,n=[]){mn(),da();const r=de(t)[e].apply(t,n);return pa(),gn(),r}const Rl=ua("__proto__,__v_isRef,__isVue"),Ou=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jt));function Ol(t){jt(t)||(t=String(t));const e=de(this);return ze(e,"has",t),e.hasOwnProperty(t)}class Pu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Vl:Nu:i?Fu:Bu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!s){let u;if(a&&(u=Il[n]))return u;if(n==="hasOwnProperty")return Ol}const o=Reflect.get(e,n,De(e)?e:r);if((jt(n)?Ou.has(n):Rl(n))||(s||ze(e,"get",n),i))return o;if(De(o)){const u=a&&Xs(n)?o:o.value;return s&&we(u)?$i(u):u}return we(o)?s?$i(o):ri(o):o}}class Lu extends Pu{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const a=ie(e)&&Xs(n);if(!this._isShallow){const c=hn(i);if(!ft(r)&&!hn(r)&&(i=de(i),r=de(r)),!a&&De(i)&&!De(r))return c||(i.value=r),!0}const o=a?Number(n)<e.length:ge(e,n),u=Reflect.set(e,n,r,De(e)?e:s);return e===de(s)&&(o?Dn(r,i)&&an(e,"set",n,r):an(e,"add",n,r)),u}deleteProperty(e,n){const r=ge(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&an(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jt(n)||!Ou.has(n))&&ze(e,"has",n),r}ownKeys(e){return ze(e,"iterate",ie(e)?"length":Yn),Reflect.ownKeys(e)}}class Pl extends Pu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ll=new Lu,Bl=new Pl,Fl=new Lu(!0);const Ni=t=>t,fs=t=>Reflect.getPrototypeOf(t);function Nl(t,e,n){return function(...r){const s=this.__v_raw,i=de(s),a=pr(i),o=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,c=s[t](...r),l=n?Ni:e?br:St;return!e&&ze(i,"iterate",u?Fi:Yn),Ue(Object.create(c),{next(){const{value:d,done:b}=c.next();return b?{value:d,done:b}:{value:o?[l(d[0]),l(d[1])]:l(d),done:b}}})}}function ms(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $l(t,e){const n={get(s){const i=this.__v_raw,a=de(i),o=de(s);t||(Dn(s,o)&&ze(a,"get",s),ze(a,"get",o));const{has:u}=fs(a),c=e?Ni:t?br:St;if(u.call(a,s))return c(i.get(s));if(u.call(a,o))return c(i.get(o));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ze(de(s),"iterate",Yn),s.size},has(s){const i=this.__v_raw,a=de(i),o=de(s);return t||(Dn(s,o)&&ze(a,"has",s),ze(a,"has",o)),s===o?i.has(s):i.has(s)||i.has(o)},forEach(s,i){const a=this,o=a.__v_raw,u=de(o),c=e?Ni:t?br:St;return!t&&ze(u,"iterate",Yn),o.forEach((l,d)=>s.call(i,c(l),c(d),a))}};return Ue(n,t?{add:ms("add"),set:ms("set"),delete:ms("delete"),clear:ms("clear")}:{add(s){!e&&!ft(s)&&!hn(s)&&(s=de(s));const i=de(this);return fs(i).has.call(i,s)||(i.add(s),an(i,"add",s,s)),this},set(s,i){!e&&!ft(i)&&!hn(i)&&(i=de(i));const a=de(this),{has:o,get:u}=fs(a);let c=o.call(a,s);c||(s=de(s),c=o.call(a,s));const l=u.call(a,s);return a.set(s,i),c?Dn(i,l)&&an(a,"set",s,i):an(a,"add",s,i),this},delete(s){const i=de(this),{has:a,get:o}=fs(i);let u=a.call(i,s);u||(s=de(s),u=a.call(i,s)),o&&o.call(i,s);const c=i.delete(s);return u&&an(i,"delete",s,void 0),c},clear(){const s=de(this),i=s.size!==0,a=s.clear();return i&&an(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Nl(s,t,e)}),n}function ga(t,e){const n=$l(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const ql={get:ga(!1,!1)},Ml={get:ga(!1,!0)},Ul={get:ga(!0,!1)};const Bu=new WeakMap,Fu=new WeakMap,Nu=new WeakMap,Vl=new WeakMap;function Hl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wl(t){return t.__v_skip||!Object.isExtensible(t)?0:Hl(ml(t))}function ri(t){return hn(t)?t:ha(t,!1,Ll,ql,Bu)}function zl(t){return ha(t,!1,Fl,Ml,Fu)}function $i(t){return ha(t,!0,Bl,Ul,Nu)}function ha(t,e,n,r,s){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Wl(t);if(i===0)return t;const a=s.get(t);if(a)return a;const o=new Proxy(t,i===2?r:n);return s.set(t,o),o}function ln(t){return hn(t)?ln(t.__v_raw):!!(t&&t.__v_isReactive)}function hn(t){return!!(t&&t.__v_isReadonly)}function ft(t){return!!(t&&t.__v_isShallow)}function si(t){return t?!!t.__v_raw:!1}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function ya(t){return!ge(t,"__v_skip")&&Object.isExtensible(t)&&yu(t,"__v_skip",!0),t}const St=t=>we(t)?ri(t):t,br=t=>we(t)?$i(t):t;function De(t){return t?t.__v_isRef===!0:!1}function O(t){return Gl(t,!1)}function Gl(t,e){return De(t)?t:new Kl(t,e)}class Kl{constructor(e,n){this.dep=new ma,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:de(e),this._value=n?e:St(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ft(e)||hn(e);e=r?e:de(e),Dn(e,n)&&(this._rawValue=e,this._value=r?e:St(e),this.dep.trigger())}}function Zr(t){return De(t)?t.value:t}const jl={get:(t,e,n)=>e==="__v_raw"?t:Zr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return De(s)&&!De(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $u(t){return ln(t)?t:new Proxy(t,jl)}function Yl(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=Zl(t,n);return e}class Xl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=de(e);let s=!0,i=e;if(!ie(e)||!Xs(String(n)))do s=!si(i)||ft(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Zr(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&De(this._raw[this._key])){const n=this._object[this._key];if(De(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Sl(this._raw,this._key)}}function Zl(t,e,n){return new Xl(t,e,n)}class Jl{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ma(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Tu(this,!0),!0}get value(){const e=this.dep.track();return Iu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ql(t,e,n=!1){let r,s;return oe(t)?r=t:(r=t.get,s=t.set),new Jl(r,s,n)}const gs={},Bs=new WeakMap;let $n;function ed(t,e=!1,n=$n){if(n){let r=Bs.get(n);r||Bs.set(n,r=[]),r.push(t)}}function td(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:o,call:u}=n,c=p=>s?p:ft(p)||s===!1||s===0?on(p,1):on(p);let l,d,b,h,C=!1,_=!1;if(De(t)?(d=()=>t.value,C=ft(t)):ln(t)?(d=()=>c(t),C=!0):ie(t)?(_=!0,C=t.some(p=>ln(p)||ft(p)),d=()=>t.map(p=>{if(De(p))return p.value;if(ln(p))return c(p);if(oe(p))return u?u(p,2):p()})):oe(t)?e?d=u?()=>u(t,2):t:d=()=>{if(b){mn();try{b()}finally{gn()}}const p=$n;$n=l;try{return u?u(t,3,[h]):t(h)}finally{$n=p}}:d=Gt,e&&s){const p=d,f=s===!0?1/0:s;d=()=>on(p(),f)}const D=xu(),S=()=>{l.stop(),D&&D.active&&la(D.effects,l)};if(i&&e){const p=e;e=(...f)=>{p(...f),S()}}let v=_?new Array(t.length).fill(gs):gs;const g=p=>{if(!(!(l.flags&1)||!l.dirty&&!p))if(e){const f=l.run();if(s||C||(_?f.some((w,k)=>Dn(w,v[k])):Dn(f,v))){b&&b();const w=$n;$n=l;try{const k=[f,v===gs?void 0:_&&v[0]===gs?[]:v,h];v=f,u?u(e,3,k):e(...k)}finally{$n=w}}}else l.run()};return o&&o(g),l=new Au(d),l.scheduler=a?()=>a(g,!1):g,h=p=>ed(p,!1,l),b=l.onStop=()=>{const p=Bs.get(l);if(p){if(u)u(p,4);else for(const f of p)f();Bs.delete(l)}},e?r?g(!0):v=l.run():a?a(g.bind(null,!0),!0):l.run(),S.pause=l.pause.bind(l),S.resume=l.resume.bind(l),S.stop=S,S}function on(t,e=1/0,n){if(e<=0||!we(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,De(t))on(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)on(t[r],e,n);else if(Ys(t)||pr(t))t.forEach(r=>{on(r,e,n)});else if(hu(t)){for(const r in t)on(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&on(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function os(t,e,n,r){try{return r?t(...r):t()}catch(s){us(s,e,n)}}function Yt(t,e,n,r){if(oe(t)){const s=os(t,e,n,r);return s&&mu(s)&&s.catch(i=>{us(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Yt(t[i],e,n,r));return s}}function us(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ke;if(e){let o=e.parent;const u=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const l=o.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](t,u,c)===!1)return}o=o.parent}if(i){mn(),os(i,null,10,[t,u,c]),gn();return}}nd(t,n,s,r,a)}function nd(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ye=[];let Nt=-1;const fr=[];let Cn=null,ar=0;const qu=Promise.resolve();let Fs=null;function va(t){const e=Fs||qu;return t?e.then(this?t.bind(this):t):e}function rd(t){let e=Nt+1,n=Ye.length;for(;e<n;){const r=e+n>>>1,s=Ye[r],i=Jr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ba(t){if(!(t.flags&1)){const e=Jr(t),n=Ye[Ye.length-1];!n||!(t.flags&2)&&e>=Jr(n)?Ye.push(t):Ye.splice(rd(e),0,t),t.flags|=1,Mu()}}function Mu(){Fs||(Fs=qu.then(Vu))}function sd(t){ie(t)?fr.push(...t):Cn&&t.id===-1?Cn.splice(ar+1,0,t):t.flags&1||(fr.push(t),t.flags|=1),Mu()}function ja(t,e,n=Nt+1){for(;n<Ye.length;n++){const r=Ye[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ye.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Uu(t){if(fr.length){const e=[...new Set(fr)].sort((n,r)=>Jr(n)-Jr(r));if(fr.length=0,Cn){Cn.push(...e);return}for(Cn=e,ar=0;ar<Cn.length;ar++){const n=Cn[ar];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Cn=null,ar=0}}const Jr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Vu(t){try{for(Nt=0;Nt<Ye.length;Nt++){const e=Ye[Nt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),os(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nt<Ye.length;Nt++){const e=Ye[Nt];e&&(e.flags&=-2)}Nt=-1,Ye.length=0,Uu(),Fs=null,(Ye.length||fr.length)&&Vu()}}let dt=null,Hu=null;function Ns(t){const e=dt;return dt=t,Hu=t&&t.type.__scopeId||null,e}function id(t,e=dt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&lo(-1);const i=Ns(e);let a;try{a=t(...s)}finally{Ns(i),r._d&&lo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function rh(t,e){if(dt===null)return t;const n=ui(dt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,o,u=ke]=e[s];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&on(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:u}))}return t}function Bn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];i&&(o.oldValue=i[a].value);let u=o.dir[r];u&&(mn(),Yt(u,n,8,[t.el,o,t,e]),gn())}}function ad(t,e){if($e){let n=$e.provides;const r=$e.parent&&$e.parent.provides;r===n&&(n=$e.provides=Object.create(r)),n[t]=e}}function Mr(t,e,n=!1){const r=hc();if(r||Xn){let s=Xn?Xn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}function od(){return!!(hc()||Xn)}const ud=Symbol.for("v-scx"),cd=()=>Mr(ud);function As(t,e,n){return Wu(t,e,n)}function Wu(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:a}=n,o=Ue({},n),u=e&&r||!e&&i!=="post";let c;if(_r){if(i==="sync"){const h=cd();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!u){const h=()=>{};return h.stop=Gt,h.resume=Gt,h.pause=Gt,h}}const l=$e;o.call=(h,C,_)=>Yt(h,l,C,_);let d=!1;i==="post"?o.scheduler=h=>{He(h,l&&l.suspense)}:i!=="sync"&&(d=!0,o.scheduler=(h,C)=>{C?h():ba(h)}),o.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,l&&(h.id=l.uid,h.i=l))};const b=td(t,e,o);return _r&&(c?c.push(b):u&&b()),b}function ld(t,e,n){const r=this.proxy,s=Re(t)?t.includes(".")?zu(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const a=cs(this),o=Wu(s,i.bind(r),n);return a(),o}function zu(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Gu=Symbol("_vte"),dd=t=>t.__isTeleport,Ur=t=>t&&(t.disabled||t.disabled===""),Ya=t=>t&&(t.defer||t.defer===""),Xa=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Za=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,qi=(t,e)=>{const n=t&&t.to;return Re(n)?e?e(n):null:n},Ku={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,a,o,u,c){const{mc:l,pc:d,pbc:b,o:{insert:h,querySelector:C,createText:_,createComment:D}}=c,S=Ur(e.props);let{shapeFlag:v,children:g,dynamicChildren:p}=e;if(t==null){const f=e.el=_(""),w=e.anchor=_("");h(f,n,r),h(w,n,r);const k=(y,E)=>{v&16&&l(g,y,E,s,i,a,o,u)},A=()=>{const y=e.target=qi(e.props,C),E=Mi(y,e,_,h);y&&(a!=="svg"&&Xa(y)?a="svg":a!=="mathml"&&Za(y)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),S||(k(y,E),Cs(e,!1)))};S&&(k(n,w),Cs(e,!0)),Ya(e.props)?(e.el.__isMounted=!1,He(()=>{A(),delete e.el.__isMounted},i)):A()}else{if(Ya(e.props)&&t.el.__isMounted===!1){He(()=>{Ku.process(t,e,n,r,s,i,a,o,u,c)},i);return}e.el=t.el,e.targetStart=t.targetStart;const f=e.anchor=t.anchor,w=e.target=t.target,k=e.targetAnchor=t.targetAnchor,A=Ur(t.props),y=A?n:w,E=A?f:k;if(a==="svg"||Xa(w)?a="svg":(a==="mathml"||Za(w))&&(a="mathml"),p?(b(t.dynamicChildren,p,y,s,i,a,o),Ea(t,e,!0)):u||d(t,e,y,E,s,i,a,o,!1),S)A?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):hs(e,n,f,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const m=e.target=qi(e.props,C);m&&hs(e,m,null,c,0)}else A&&hs(e,w,k,c,1);Cs(e,S)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:a,children:o,anchor:u,targetStart:c,targetAnchor:l,target:d,props:b}=t;if(d&&(s(c),s(l)),i&&s(u),a&16){const h=i||!Ur(b);for(let C=0;C<o.length;C++){const _=o[C];r(_,e,n,h,!!_.dynamicChildren)}}},move:hs,hydrate:pd};function hs(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:a,anchor:o,shapeFlag:u,children:c,props:l}=t,d=i===2;if(d&&r(a,e,n),(!d||Ur(l))&&u&16)for(let b=0;b<c.length;b++)s(c[b],e,n,2);d&&r(o,e,n)}function pd(t,e,n,r,s,i,{o:{nextSibling:a,parentNode:o,querySelector:u,insert:c,createText:l}},d){function b(D,S){let v=S;for(;v;){if(v&&v.nodeType===8){if(v.data==="teleport start anchor")e.targetStart=v;else if(v.data==="teleport anchor"){e.targetAnchor=v,D._lpa=e.targetAnchor&&a(e.targetAnchor);break}}v=a(v)}}function h(D,S){S.anchor=d(a(D),S,o(D),n,r,s,i)}const C=e.target=qi(e.props,u),_=Ur(e.props);if(C){const D=C._lpa||C.firstChild;e.shapeFlag&16&&(_?(h(t,e),b(C,D),e.targetAnchor||Mi(C,e,l,c,o(t)===C?t:null)):(e.anchor=a(t),b(C,D),e.targetAnchor||Mi(C,e,l,c),d(D&&a(D),e,C,n,r,s,i))),Cs(e,_)}else _&&e.shapeFlag&16&&(h(t,e),e.targetStart=t,e.targetAnchor=a(t));return e.anchor&&a(e.anchor)}const sh=Ku;function Cs(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Mi(t,e,n,r,s=null){const i=e.targetStart=n(""),a=e.targetAnchor=n("");return i[Gu]=a,t&&(r(i,t,s),r(a,t,s)),a}const fd=Symbol("_leaveCb");function wa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,wa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function md(t,e){return oe(t)?Ue({name:t.name},e,{setup:t}):t}function _a(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ja(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const $s=new WeakMap;function Vr(t,e,n,r,s=!1){if(ie(t)){t.forEach((_,D)=>Vr(_,e&&(ie(e)?e[D]:e),n,r,s));return}if(Hr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Vr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ui(r.component):r.el,a=s?null:i,{i:o,r:u}=t,c=e&&e.r,l=o.refs===ke?o.refs={}:o.refs,d=o.setupState,b=de(d),h=d===ke?fu:_=>Ja(l,_)?!1:ge(b,_),C=(_,D)=>!(D&&Ja(l,D));if(c!=null&&c!==u){if(Qa(e),Re(c))l[c]=null,h(c)&&(d[c]=null);else if(De(c)){const _=e;C(c,_.k)&&(c.value=null),_.k&&(l[_.k]=null)}}if(oe(u))os(u,o,12,[a,l]);else{const _=Re(u),D=De(u);if(_||D){const S=()=>{if(t.f){const v=_?h(u)?d[u]:l[u]:C()||!t.k?u.value:l[t.k];if(s)ie(v)&&la(v,i);else if(ie(v))v.includes(i)||v.push(i);else if(_)l[u]=[i],h(u)&&(d[u]=l[u]);else{const g=[i];C(u,t.k)&&(u.value=g),t.k&&(l[t.k]=g)}}else _?(l[u]=a,h(u)&&(d[u]=a)):D&&(C(u,t.k)&&(u.value=a),t.k&&(l[t.k]=a))};if(a){const v=()=>{S(),$s.delete(t)};v.id=-1,$s.set(t,v),He(v,n)}else Qa(t),S()}}}function Qa(t){const e=$s.get(t);e&&(e.flags|=8,$s.delete(t))}const eo=t=>t.nodeType===8;ei().requestIdleCallback;ei().cancelIdleCallback;function gd(t,e){if(eo(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(eo(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Hr=t=>!!t.type.__asyncLoader;function fe(t){oe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:a,suspensible:o=!0,onError:u}=t;let c=null,l,d=0;const b=()=>(d++,c=null,h()),h=()=>{let C;return c||(C=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),u)return new Promise((D,S)=>{u(_,()=>D(b()),()=>S(_),d+1)});throw _}).then(_=>C!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),l=_,_)))};return md({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(C,_,D){let S=!1;(_.bu||(_.bu=[])).push(()=>S=!0);const v=()=>{S||D()},g=i?()=>{const p=i(v,f=>gd(C,f));p&&(_.bum||(_.bum=[])).push(p)}:v;l?g():h().then(()=>!_.isUnmounted&&g())},get __asyncResolved(){return l},setup(){const C=$e;if(_a(C),l)return()=>ys(l,C);const _=g=>{c=null,us(g,C,13,!r)};if(o&&C.suspense||_r)return h().then(g=>()=>ys(g,C)).catch(g=>(_(g),()=>r?qe(r,{error:g}):null));const D=O(!1),S=O(),v=O(!!s);return s&&setTimeout(()=>{v.value=!1},s),a!=null&&setTimeout(()=>{if(!D.value&&!S.value){const g=new Error(`Async component timed out after ${a}ms.`);_(g),S.value=g}},a),h().then(()=>{D.value=!0,C.parent&&ka(C.parent.vnode)&&C.parent.update()}).catch(g=>{_(g),S.value=g}),()=>{if(D.value&&l)return ys(l,C);if(S.value&&r)return qe(r,{error:S.value});if(n&&!v.value)return ys(n,C)}}})}function ys(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,a=qe(t,r,s);return a.ref=n,a.ce=i,delete e.vnode.ce,a}const ka=t=>t.type.__isKeepAlive;function hd(t,e){ju(t,"a",e)}function yd(t,e){ju(t,"da",e)}function ju(t,e,n=$e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ii(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ka(s.parent.vnode)&&vd(r,e,n,s),s=s.parent}}function vd(t,e,n,r){const s=ii(e,t,r,!0);Aa(()=>{la(r[e],s)},n)}function ii(t,e,n=$e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{mn();const o=cs(n),u=Yt(e,n,t,a);return o(),gn(),u});return r?s.unshift(i):s.push(i),i}}const vn=t=>(e,n=$e)=>{(!_r||t==="sp")&&ii(t,(...r)=>e(...r),n)},bd=vn("bm"),xa=vn("m"),wd=vn("bu"),_d=vn("u"),kd=vn("bum"),Aa=vn("um"),xd=vn("sp"),Ad=vn("rtg"),Cd=vn("rtc");function Td(t,e=$e){ii("ec",t,e)}const Ed="components",Yu=Symbol.for("v-ndc");function Sd(t){return Re(t)?Id(Ed,t,!1)||t:t||Yu}function Id(t,e,n=!0,r=!1){const s=dt||$e;if(s){const i=s.type;{const o=fp(i,!1);if(o&&(o===e||o===wt(e)||o===Js(wt(e))))return i}const a=to(s[t]||i[t],e)||to(s.appContext[t],e);return!a&&r?i:a}}function to(t,e){return t&&(t[e]||t[wt(e)]||t[Js(wt(e))])}function qs(t,e,n,r){let s;const i=n,a=ie(t);if(a||Re(t)){const o=a&&ln(t);let u=!1,c=!1;o&&(u=!ft(t),c=hn(t),t=ni(t)),s=new Array(t.length);for(let l=0,d=t.length;l<d;l++)s[l]=e(u?c?br(St(t[l])):St(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(we(t))if(t[Symbol.iterator])s=Array.from(t,(o,u)=>e(o,u,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let u=0,c=o.length;u<c;u++){const l=o[u];s[u]=e(t[l],l,u,i)}}else s=[];return s}const Ui=t=>t?yc(t)?ui(t):Ui(t.parent):null,Wr=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ui(t.parent),$root:t=>Ui(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zu(t),$forceUpdate:t=>t.f||(t.f=()=>{ba(t.update)}),$nextTick:t=>t.n||(t.n=va.bind(t.proxy)),$watch:t=>ld.bind(t)}),Ai=(t,e)=>t!==ke&&!t.__isScriptSetup&&ge(t,e),Dd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:o,appContext:u}=t;if(e[0]!=="$"){const b=a[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ai(r,e))return a[e]=1,r[e];if(s!==ke&&ge(s,e))return a[e]=2,s[e];if(ge(i,e))return a[e]=3,i[e];if(n!==ke&&ge(n,e))return a[e]=4,n[e];Vi&&(a[e]=0)}}const c=Wr[e];let l,d;if(c)return e==="$attrs"&&ze(t.attrs,"get",""),c(t);if((l=o.__cssModules)&&(l=l[e]))return l;if(n!==ke&&ge(n,e))return a[e]=4,n[e];if(d=u.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ai(s,e)?(s[e]=n,!0):r!==ke&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:a}},o){let u;return!!(n[o]||t!==ke&&o[0]!=="$"&&ge(t,o)||Ai(e,o)||ge(i,o)||ge(r,o)||ge(Wr,o)||ge(s.config.globalProperties,o)||(u=a.__cssModules)&&u[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function no(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vi=!0;function Rd(t){const e=Zu(t),n=t.proxy,r=t.ctx;Vi=!1,e.beforeCreate&&ro(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:o,provide:u,inject:c,created:l,beforeMount:d,mounted:b,beforeUpdate:h,updated:C,activated:_,deactivated:D,beforeDestroy:S,beforeUnmount:v,destroyed:g,unmounted:p,render:f,renderTracked:w,renderTriggered:k,errorCaptured:A,serverPrefetch:y,expose:E,inheritAttrs:m,components:x,directives:B,filters:M}=e;if(c&&Od(c,r,null),a)for(const P in a){const L=a[P];oe(L)&&(r[P]=L.bind(n))}if(s){const P=s.call(n,n);we(P)&&(t.data=ri(P))}if(Vi=!0,i)for(const P in i){const L=i[P],N=oe(L)?L.bind(n,n):oe(L.get)?L.get.bind(n,n):Gt,U=!oe(L)&&oe(L.set)?L.set.bind(n):Gt,K=I({get:N,set:U});Object.defineProperty(r,P,{enumerable:!0,configurable:!0,get:()=>K.value,set:ne=>K.value=ne})}if(o)for(const P in o)Xu(o[P],r,n,P);if(u){const P=oe(u)?u.call(n):u;Reflect.ownKeys(P).forEach(L=>{ad(L,P[L])})}l&&ro(l,t,"c");function F(P,L){ie(L)?L.forEach(N=>P(N.bind(n))):L&&P(L.bind(n))}if(F(bd,d),F(xa,b),F(wd,h),F(_d,C),F(hd,_),F(yd,D),F(Td,A),F(Cd,w),F(Ad,k),F(kd,v),F(Aa,p),F(xd,y),ie(E))if(E.length){const P=t.exposed||(t.exposed={});E.forEach(L=>{Object.defineProperty(P,L,{get:()=>n[L],set:N=>n[L]=N,enumerable:!0})})}else t.exposed||(t.exposed={});f&&t.render===Gt&&(t.render=f),m!=null&&(t.inheritAttrs=m),x&&(t.components=x),B&&(t.directives=B),y&&_a(t)}function Od(t,e,n=Gt){ie(t)&&(t=Hi(t));for(const r in t){const s=t[r];let i;we(s)?"default"in s?i=Mr(s.from||r,s.default,!0):i=Mr(s.from||r):i=Mr(s),De(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ro(t,e,n){Yt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xu(t,e,n,r){let s=r.includes(".")?zu(n,r):()=>n[r];if(Re(t)){const i=e[t];oe(i)&&As(s,i)}else if(oe(t))As(s,t.bind(n));else if(we(t))if(ie(t))t.forEach(i=>Xu(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&As(s,i,t)}}function Zu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,o=i.get(e);let u;return o?u=o:!s.length&&!n&&!r?u=e:(u={},s.length&&s.forEach(c=>Ms(u,c,a,!0)),Ms(u,e,a)),we(e)&&i.set(e,u),u}function Ms(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ms(t,i,n,!0),s&&s.forEach(a=>Ms(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const o=Pd[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const Pd={data:so,props:io,emits:io,methods:Fr,computed:Fr,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:Fr,directives:Fr,watch:Bd,provide:so,inject:Ld};function so(t,e){return e?t?function(){return Ue(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function Ld(t,e){return Fr(Hi(t),Hi(e))}function Hi(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function je(t,e){return t?[...new Set([].concat(t,e))]:e}function Fr(t,e){return t?Ue(Object.create(null),t,e):e}function io(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:Ue(Object.create(null),no(t),no(e??{})):e}function Bd(t,e){if(!t)return e;if(!e)return t;const n=Ue(Object.create(null),t);for(const r in e)n[r]=je(t[r],e[r]);return n}function Ju(){return{app:null,config:{isNativeTag:fu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fd=0;function Nd(t,e){return function(r,s=null){oe(r)||(r=Ue({},r)),s!=null&&!we(s)&&(s=null);const i=Ju(),a=new WeakSet,o=[];let u=!1;const c=i.app={_uid:Fd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:gp,get config(){return i.config},set config(l){},use(l,...d){return a.has(l)||(l&&oe(l.install)?(a.add(l),l.install(c,...d)):oe(l)&&(a.add(l),l(c,...d))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,d){return d?(i.components[l]=d,c):i.components[l]},directive(l,d){return d?(i.directives[l]=d,c):i.directives[l]},mount(l,d,b){if(!u){const h=c._ceVNode||qe(r,s);return h.appContext=i,b===!0?b="svg":b===!1&&(b=void 0),t(h,l,b),u=!0,c._container=l,l.__vue_app__=c,ui(h.component)}},onUnmount(l){o.push(l)},unmount(){u&&(Yt(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(l,d){return i.provides[l]=d,c},runWithContext(l){const d=Xn;Xn=c;try{return l()}finally{Xn=d}}};return c}}let Xn=null;const $d=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${wt(e)}Modifiers`]||t[`${On(e)}Modifiers`];function qd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),a=i&&$d(r,e.slice(7));a&&(a.trim&&(s=n.map(l=>Re(l)?l.trim():l)),a.number&&(s=n.map(Qs)));let o,u=r[o=bi(e)]||r[o=bi(wt(e))];!u&&i&&(u=r[o=bi(On(e))]),u&&Yt(u,t,6,s);const c=r[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Yt(c,t,6,s)}}const Md=new WeakMap;function Qu(t,e,n=!1){const r=n?Md:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},o=!1;if(!oe(t)){const u=c=>{const l=Qu(c,e,!0);l&&(o=!0,Ue(a,l))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!o?(we(t)&&r.set(t,null),null):(ie(i)?i.forEach(u=>a[u]=null):Ue(a,i),we(t)&&r.set(t,a),a)}function ai(t,e){return!t||!js(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,On(e))||ge(t,e))}function ao(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:o,emit:u,render:c,renderCache:l,props:d,data:b,setupState:h,ctx:C,inheritAttrs:_}=t,D=Ns(t);let S,v;try{if(n.shapeFlag&4){const p=s||r,f=p;S=Vt(c.call(f,p,l,d,h,b,C)),v=o}else{const p=e;S=Vt(p.length>1?p(d,{attrs:o,slots:a,emit:u}):p(d,null)),v=e.props?o:Ud(o)}}catch(p){zr.length=0,us(p,t,1),S=qe(Rn)}let g=S;if(v&&_!==!1){const p=Object.keys(v),{shapeFlag:f}=g;p.length&&f&7&&(i&&p.some(ca)&&(v=Vd(v,i)),g=wr(g,v,!1,!0))}return n.dirs&&(g=wr(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&wa(g,n.transition),S=g,Ns(D),S}const Ud=t=>{let e;for(const n in t)(n==="class"||n==="style"||js(n))&&((e||(e={}))[n]=t[n]);return e},Vd=(t,e)=>{const n={};for(const r in t)(!ca(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hd(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:o,patchFlag:u}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?oo(r,a,c):!!a;if(u&8){const l=e.dynamicProps;for(let d=0;d<l.length;d++){const b=l[d];if(ec(a,r,b)&&!ai(c,b))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?oo(r,a,c):!0:!!a;return!1}function oo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(ec(e,t,i)&&!ai(n,i))return!0}return!1}function ec(t,e,n){const r=t[n],s=e[n];return n==="style"&&we(r)&&we(s)?!Qn(r,s):r!==s}function Wd({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const tc={},nc=()=>Object.create(tc),rc=t=>Object.getPrototypeOf(t)===tc;function zd(t,e,n,r=!1){const s={},i=nc();t.propsDefaults=Object.create(null),sc(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:zl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Gd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,o=de(s),[u]=t.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const l=t.vnode.dynamicProps;for(let d=0;d<l.length;d++){let b=l[d];if(ai(t.emitsOptions,b))continue;const h=e[b];if(u)if(ge(i,b))h!==i[b]&&(i[b]=h,c=!0);else{const C=wt(b);s[C]=Wi(u,o,C,h,t,!1)}else h!==i[b]&&(i[b]=h,c=!0)}}}else{sc(t,e,s,i)&&(c=!0);let l;for(const d in o)(!e||!ge(e,d)&&((l=On(d))===d||!ge(e,l)))&&(u?n&&(n[d]!==void 0||n[l]!==void 0)&&(s[d]=Wi(u,o,d,void 0,t,!0)):delete s[d]);if(i!==o)for(const d in i)(!e||!ge(e,d))&&(delete i[d],c=!0)}c&&an(t.attrs,"set","")}function sc(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,o;if(e)for(let u in e){if(Nr(u))continue;const c=e[u];let l;s&&ge(s,l=wt(u))?!i||!i.includes(l)?n[l]=c:(o||(o={}))[l]=c:ai(t.emitsOptions,u)||(!(u in r)||c!==r[u])&&(r[u]=c,a=!0)}if(i){const u=de(n),c=o||ke;for(let l=0;l<i.length;l++){const d=i[l];n[d]=Wi(s,u,d,c[d],t,!ge(c,d))}}return a}function Wi(t,e,n,r,s,i){const a=t[n];if(a!=null){const o=ge(a,"default");if(o&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&oe(u)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const l=cs(s);r=c[n]=u.call(null,e),l()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!o?r=!1:a[1]&&(r===""||r===On(n))&&(r=!0))}return r}const Kd=new WeakMap;function ic(t,e,n=!1){const r=n?Kd:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},o=[];let u=!1;if(!oe(t)){const l=d=>{u=!0;const[b,h]=ic(d,e,!0);Ue(a,b),h&&o.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!u)return we(t)&&r.set(t,dr),dr;if(ie(i))for(let l=0;l<i.length;l++){const d=wt(i[l]);uo(d)&&(a[d]=ke)}else if(i)for(const l in i){const d=wt(l);if(uo(d)){const b=i[l],h=a[d]=ie(b)||oe(b)?{type:b}:Ue({},b),C=h.type;let _=!1,D=!0;if(ie(C))for(let S=0;S<C.length;++S){const v=C[S],g=oe(v)&&v.name;if(g==="Boolean"){_=!0;break}else g==="String"&&(D=!1)}else _=oe(C)&&C.name==="Boolean";h[0]=_,h[1]=D,(_||ge(h,"default"))&&o.push(d)}}const c=[a,o];return we(t)&&r.set(t,c),c}function uo(t){return t[0]!=="$"&&!Nr(t)}const Ca=t=>t==="_"||t==="_ctx"||t==="$stable",Ta=t=>ie(t)?t.map(Vt):[Vt(t)],jd=(t,e,n)=>{if(e._n)return e;const r=id((...s)=>Ta(e(...s)),n);return r._c=!1,r},ac=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ca(s))continue;const i=t[s];if(oe(i))e[s]=jd(s,i,r);else if(i!=null){const a=Ta(i);e[s]=()=>a}}},oc=(t,e)=>{const n=Ta(e);t.slots.default=()=>n},uc=(t,e,n)=>{for(const r in e)(n||!Ca(r))&&(t[r]=e[r])},Yd=(t,e,n)=>{const r=t.slots=nc();if(t.vnode.shapeFlag&32){const s=e._;s?(uc(r,e,n),n&&yu(r,"_",s,!0)):ac(e,r)}else e&&oc(t,e)},Xd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=ke;if(r.shapeFlag&32){const o=e._;o?n&&o===1?i=!1:uc(s,e,n):(i=!e.$stable,ac(e,s)),a=e}else e&&(oc(t,e),a={default:1});if(i)for(const o in s)!Ca(o)&&a[o]==null&&delete s[o]},He=tp;function Zd(t){return Jd(t)}function Jd(t,e){const n=ei();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:o,createComment:u,setText:c,setElementText:l,parentNode:d,nextSibling:b,setScopeId:h=Gt,insertStaticContent:C}=t,_=(T,R,$,W=null,V=null,z=null,Z=void 0,Y=null,j=!!R.dynamicChildren)=>{if(T===R)return;T&&!Or(T,R)&&(W=ot(T),ne(T,V,z,!0),T=null),R.patchFlag===-2&&(j=!1,R.dynamicChildren=null);const{type:G,ref:se,shapeFlag:J}=R;switch(G){case oi:D(T,R,$,W);break;case Rn:S(T,R,$,W);break;case Ts:T==null&&v(R,$,W,Z);break;case lt:x(T,R,$,W,V,z,Z,Y,j);break;default:J&1?f(T,R,$,W,V,z,Z,Y,j):J&6?B(T,R,$,W,V,z,Z,Y,j):(J&64||J&128)&&G.process(T,R,$,W,V,z,Z,Y,j,gt)}se!=null&&V?Vr(se,T&&T.ref,z,R||T,!R):se==null&&T&&T.ref!=null&&Vr(T.ref,null,z,T,!0)},D=(T,R,$,W)=>{if(T==null)r(R.el=o(R.children),$,W);else{const V=R.el=T.el;R.children!==T.children&&c(V,R.children)}},S=(T,R,$,W)=>{T==null?r(R.el=u(R.children||""),$,W):R.el=T.el},v=(T,R,$,W)=>{[T.el,T.anchor]=C(T.children,R,$,W,T.el,T.anchor)},g=({el:T,anchor:R},$,W)=>{let V;for(;T&&T!==R;)V=b(T),r(T,$,W),T=V;r(R,$,W)},p=({el:T,anchor:R})=>{let $;for(;T&&T!==R;)$=b(T),s(T),T=$;s(R)},f=(T,R,$,W,V,z,Z,Y,j)=>{if(R.type==="svg"?Z="svg":R.type==="math"&&(Z="mathml"),T==null)w(R,$,W,V,z,Z,Y,j);else{const G=T.el&&T.el._isVueCE?T.el:null;try{G&&G._beginPatch(),y(T,R,V,z,Z,Y,j)}finally{G&&G._endPatch()}}},w=(T,R,$,W,V,z,Z,Y)=>{let j,G;const{props:se,shapeFlag:J,transition:re,dirs:ae}=T;if(j=T.el=a(T.type,z,se&&se.is,se),J&8?l(j,T.children):J&16&&A(T.children,j,null,W,V,Ci(T,z),Z,Y),ae&&Bn(T,null,W,"created"),k(j,T,T.scopeId,Z,W),se){for(const xe in se)xe!=="value"&&!Nr(xe)&&i(j,xe,null,se[xe],z,W);"value"in se&&i(j,"value",null,se.value,z),(G=se.onVnodeBeforeMount)&&Bt(G,W,T)}ae&&Bn(T,null,W,"beforeMount");const ce=Qd(V,re);ce&&re.beforeEnter(j),r(j,R,$),((G=se&&se.onVnodeMounted)||ce||ae)&&He(()=>{G&&Bt(G,W,T),ce&&re.enter(j),ae&&Bn(T,null,W,"mounted")},V)},k=(T,R,$,W,V)=>{if($&&h(T,$),W)for(let z=0;z<W.length;z++)h(T,W[z]);if(V){let z=V.subTree;if(R===z||dc(z.type)&&(z.ssContent===R||z.ssFallback===R)){const Z=V.vnode;k(T,Z,Z.scopeId,Z.slotScopeIds,V.parent)}}},A=(T,R,$,W,V,z,Z,Y,j=0)=>{for(let G=j;G<T.length;G++){const se=T[G]=Y?tn(T[G]):Vt(T[G]);_(null,se,R,$,W,V,z,Z,Y)}},y=(T,R,$,W,V,z,Z)=>{const Y=R.el=T.el;let{patchFlag:j,dynamicChildren:G,dirs:se}=R;j|=T.patchFlag&16;const J=T.props||ke,re=R.props||ke;let ae;if($&&Fn($,!1),(ae=re.onVnodeBeforeUpdate)&&Bt(ae,$,R,T),se&&Bn(R,T,$,"beforeUpdate"),$&&Fn($,!0),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&l(Y,""),G?E(T.dynamicChildren,G,Y,$,W,Ci(R,V),z):Z||L(T,R,Y,null,$,W,Ci(R,V),z,!1),j>0){if(j&16)m(Y,J,re,$,V);else if(j&2&&J.class!==re.class&&i(Y,"class",null,re.class,V),j&4&&i(Y,"style",J.style,re.style,V),j&8){const ce=R.dynamicProps;for(let xe=0;xe<ce.length;xe++){const ve=ce[xe],Qe=J[ve],et=re[ve];(et!==Qe||ve==="value")&&i(Y,ve,Qe,et,V,$)}}j&1&&T.children!==R.children&&l(Y,R.children)}else!Z&&G==null&&m(Y,J,re,$,V);((ae=re.onVnodeUpdated)||se)&&He(()=>{ae&&Bt(ae,$,R,T),se&&Bn(R,T,$,"updated")},W)},E=(T,R,$,W,V,z,Z)=>{for(let Y=0;Y<R.length;Y++){const j=T[Y],G=R[Y],se=j.el&&(j.type===lt||!Or(j,G)||j.shapeFlag&198)?d(j.el):$;_(j,G,se,null,W,V,z,Z,!0)}},m=(T,R,$,W,V)=>{if(R!==$){if(R!==ke)for(const z in R)!Nr(z)&&!(z in $)&&i(T,z,R[z],null,V,W);for(const z in $){if(Nr(z))continue;const Z=$[z],Y=R[z];Z!==Y&&z!=="value"&&i(T,z,Y,Z,V,W)}"value"in $&&i(T,"value",R.value,$.value,V)}},x=(T,R,$,W,V,z,Z,Y,j)=>{const G=R.el=T?T.el:o(""),se=R.anchor=T?T.anchor:o("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:ae}=R;ae&&(Y=Y?Y.concat(ae):ae),T==null?(r(G,$,W),r(se,$,W),A(R.children||[],$,se,V,z,Z,Y,j)):J>0&&J&64&&re&&T.dynamicChildren&&T.dynamicChildren.length===re.length?(E(T.dynamicChildren,re,$,V,z,Z,Y),(R.key!=null||V&&R===V.subTree)&&Ea(T,R,!0)):L(T,R,$,se,V,z,Z,Y,j)},B=(T,R,$,W,V,z,Z,Y,j)=>{R.slotScopeIds=Y,T==null?R.shapeFlag&512?V.ctx.activate(R,$,W,Z,j):M(R,$,W,V,z,Z,j):q(T,R,j)},M=(T,R,$,W,V,z,Z)=>{const Y=T.component=up(T,W,V);if(ka(T)&&(Y.ctx.renderer=gt),cp(Y,!1,Z),Y.asyncDep){if(V&&V.registerDep(Y,F,Z),!T.el){const j=Y.subTree=qe(Rn);S(null,j,R,$),T.placeholder=j.el}}else F(Y,T,R,$,V,z,Z)},q=(T,R,$)=>{const W=R.component=T.component;if(Hd(T,R,$))if(W.asyncDep&&!W.asyncResolved){P(W,R,$);return}else W.next=R,W.update();else R.el=T.el,W.vnode=R},F=(T,R,$,W,V,z,Z)=>{const Y=()=>{if(T.isMounted){let{next:J,bu:re,u:ae,parent:ce,vnode:xe}=T;{const Pt=cc(T);if(Pt){J&&(J.el=xe.el,P(T,J,Z)),Pt.asyncDep.then(()=>{He(()=>{T.isUnmounted||G()},V)});return}}let ve=J,Qe;Fn(T,!1),J?(J.el=xe.el,P(T,J,Z)):J=xe,re&&xs(re),(Qe=J.props&&J.props.onVnodeBeforeUpdate)&&Bt(Qe,ce,J,xe),Fn(T,!0);const et=ao(T),Ot=T.subTree;T.subTree=et,_(Ot,et,d(Ot.el),ot(Ot),T,V,z),J.el=et.el,ve===null&&Wd(T,et.el),ae&&He(ae,V),(Qe=J.props&&J.props.onVnodeUpdated)&&He(()=>Bt(Qe,ce,J,xe),V)}else{let J;const{el:re,props:ae}=R,{bm:ce,m:xe,parent:ve,root:Qe,type:et}=T,Ot=Hr(R);Fn(T,!1),ce&&xs(ce),!Ot&&(J=ae&&ae.onVnodeBeforeMount)&&Bt(J,ve,R),Fn(T,!0);{Qe.ce&&Qe.ce._hasShadowRoot()&&Qe.ce._injectChildStyle(et);const Pt=T.subTree=ao(T);_(null,Pt,$,W,T,V,z),R.el=Pt.el}if(xe&&He(xe,V),!Ot&&(J=ae&&ae.onVnodeMounted)){const Pt=R;He(()=>Bt(J,ve,Pt),V)}(R.shapeFlag&256||ve&&Hr(ve.vnode)&&ve.vnode.shapeFlag&256)&&T.a&&He(T.a,V),T.isMounted=!0,R=$=W=null}};T.scope.on();const j=T.effect=new Au(Y);T.scope.off();const G=T.update=j.run.bind(j),se=T.job=j.runIfDirty.bind(j);se.i=T,se.id=T.uid,j.scheduler=()=>ba(se),Fn(T,!0),G()},P=(T,R,$)=>{R.component=T;const W=T.vnode.props;T.vnode=R,T.next=null,Gd(T,R.props,W,$),Xd(T,R.children,$),mn(),ja(T),gn()},L=(T,R,$,W,V,z,Z,Y,j=!1)=>{const G=T&&T.children,se=T?T.shapeFlag:0,J=R.children,{patchFlag:re,shapeFlag:ae}=R;if(re>0){if(re&128){U(G,J,$,W,V,z,Z,Y,j);return}else if(re&256){N(G,J,$,W,V,z,Z,Y,j);return}}ae&8?(se&16&&_t(G,V,z),J!==G&&l($,J)):se&16?ae&16?U(G,J,$,W,V,z,Z,Y,j):_t(G,V,z,!0):(se&8&&l($,""),ae&16&&A(J,$,W,V,z,Z,Y,j))},N=(T,R,$,W,V,z,Z,Y,j)=>{T=T||dr,R=R||dr;const G=T.length,se=R.length,J=Math.min(G,se);let re;for(re=0;re<J;re++){const ae=R[re]=j?tn(R[re]):Vt(R[re]);_(T[re],ae,$,null,V,z,Z,Y,j)}G>se?_t(T,V,z,!0,!1,J):A(R,$,W,V,z,Z,Y,j,J)},U=(T,R,$,W,V,z,Z,Y,j)=>{let G=0;const se=R.length;let J=T.length-1,re=se-1;for(;G<=J&&G<=re;){const ae=T[G],ce=R[G]=j?tn(R[G]):Vt(R[G]);if(Or(ae,ce))_(ae,ce,$,null,V,z,Z,Y,j);else break;G++}for(;G<=J&&G<=re;){const ae=T[J],ce=R[re]=j?tn(R[re]):Vt(R[re]);if(Or(ae,ce))_(ae,ce,$,null,V,z,Z,Y,j);else break;J--,re--}if(G>J){if(G<=re){const ae=re+1,ce=ae<se?R[ae].el:W;for(;G<=re;)_(null,R[G]=j?tn(R[G]):Vt(R[G]),$,ce,V,z,Z,Y,j),G++}}else if(G>re)for(;G<=J;)ne(T[G],V,z,!0),G++;else{const ae=G,ce=G,xe=new Map;for(G=ce;G<=re;G++){const ut=R[G]=j?tn(R[G]):Vt(R[G]);ut.key!=null&&xe.set(ut.key,G)}let ve,Qe=0;const et=re-ce+1;let Ot=!1,Pt=0;const Dr=new Array(et);for(G=0;G<et;G++)Dr[G]=0;for(G=ae;G<=J;G++){const ut=T[G];if(Qe>=et){ne(ut,V,z,!0);continue}let Lt;if(ut.key!=null)Lt=xe.get(ut.key);else for(ve=ce;ve<=re;ve++)if(Dr[ve-ce]===0&&Or(ut,R[ve])){Lt=ve;break}Lt===void 0?ne(ut,V,z,!0):(Dr[Lt-ce]=G+1,Lt>=Pt?Pt=Lt:Ot=!0,_(ut,R[Lt],$,null,V,z,Z,Y,j),Qe++)}const qa=Ot?ep(Dr):dr;for(ve=qa.length-1,G=et-1;G>=0;G--){const ut=ce+G,Lt=R[ut],Ma=R[ut+1],Ua=ut+1<se?Ma.el||lc(Ma):W;Dr[G]===0?_(null,Lt,$,Ua,V,z,Z,Y,j):Ot&&(ve<0||G!==qa[ve]?K(Lt,$,Ua,2):ve--)}}},K=(T,R,$,W,V=null)=>{const{el:z,type:Z,transition:Y,children:j,shapeFlag:G}=T;if(G&6){K(T.component.subTree,R,$,W);return}if(G&128){T.suspense.move(R,$,W);return}if(G&64){Z.move(T,R,$,gt);return}if(Z===lt){r(z,R,$);for(let J=0;J<j.length;J++)K(j[J],R,$,W);r(T.anchor,R,$);return}if(Z===Ts){g(T,R,$);return}if(W!==2&&G&1&&Y)if(W===0)Y.beforeEnter(z),r(z,R,$),He(()=>Y.enter(z),V);else{const{leave:J,delayLeave:re,afterLeave:ae}=Y,ce=()=>{T.ctx.isUnmounted?s(z):r(z,R,$)},xe=()=>{z._isLeaving&&z[fd](!0),J(z,()=>{ce(),ae&&ae()})};re?re(z,ce,xe):xe()}else r(z,R,$)},ne=(T,R,$,W=!1,V=!1)=>{const{type:z,props:Z,ref:Y,children:j,dynamicChildren:G,shapeFlag:se,patchFlag:J,dirs:re,cacheIndex:ae}=T;if(J===-2&&(V=!1),Y!=null&&(mn(),Vr(Y,null,$,T,!0),gn()),ae!=null&&(R.renderCache[ae]=void 0),se&256){R.ctx.deactivate(T);return}const ce=se&1&&re,xe=!Hr(T);let ve;if(xe&&(ve=Z&&Z.onVnodeBeforeUnmount)&&Bt(ve,R,T),se&6)Ke(T.component,$,W);else{if(se&128){T.suspense.unmount($,W);return}ce&&Bn(T,null,R,"beforeUnmount"),se&64?T.type.remove(T,R,$,gt,W):G&&!G.hasOnce&&(z!==lt||J>0&&J&64)?_t(G,R,$,!1,!0):(z===lt&&J&384||!V&&se&16)&&_t(j,R,$),W&&ye(T)}(xe&&(ve=Z&&Z.onVnodeUnmounted)||ce)&&He(()=>{ve&&Bt(ve,R,T),ce&&Bn(T,null,R,"unmounted")},$)},ye=T=>{const{type:R,el:$,anchor:W,transition:V}=T;if(R===lt){be($,W);return}if(R===Ts){p(T);return}const z=()=>{s($),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(T.shapeFlag&1&&V&&!V.persisted){const{leave:Z,delayLeave:Y}=V,j=()=>Z($,z);Y?Y(T.el,z,j):j()}else z()},be=(T,R)=>{let $;for(;T!==R;)$=b(T),s(T),T=$;s(R)},Ke=(T,R,$)=>{const{bum:W,scope:V,job:z,subTree:Z,um:Y,m:j,a:G}=T;co(j),co(G),W&&xs(W),V.stop(),z&&(z.flags|=8,ne(Z,T,R,$)),Y&&He(Y,R),He(()=>{T.isUnmounted=!0},R)},_t=(T,R,$,W=!1,V=!1,z=0)=>{for(let Z=z;Z<T.length;Z++)ne(T[Z],R,$,W,V)},ot=T=>{if(T.shapeFlag&6)return ot(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const R=b(T.anchor||T.el),$=R&&R[Gu];return $?b($):R};let Ln=!1;const Rt=(T,R,$)=>{let W;T==null?R._vnode&&(ne(R._vnode,null,null,!0),W=R._vnode.component):_(R._vnode||null,T,R,null,null,null,$),R._vnode=T,Ln||(Ln=!0,ja(W),Uu(),Ln=!1)},gt={p:_,um:ne,m:K,r:ye,mt:M,mc:A,pc:L,pbc:E,n:ot,o:t};return{render:Rt,hydrate:void 0,createApp:Nd(Rt)}}function Ci({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Fn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ea(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const a=r[i];let o=s[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[i]=tn(s[i]),o.el=a.el),!n&&o.patchFlag!==-2&&Ea(a,o)),o.type===oi&&(o.patchFlag===-1&&(o=s[i]=tn(o)),o.el=a.el),o.type===Rn&&!o.el&&(o.el=a.el)}}function ep(t){const e=t.slice(),n=[0];let r,s,i,a,o;const u=t.length;for(r=0;r<u;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)o=i+a>>1,t[n[o]]<c?i=o+1:a=o;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function cc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cc(e)}function co(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function lc(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?lc(e.subTree):null}const dc=t=>t.__isSuspense;function tp(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):sd(t)}const lt=Symbol.for("v-fgt"),oi=Symbol.for("v-txt"),Rn=Symbol.for("v-cmt"),Ts=Symbol.for("v-stc"),zr=[];let pt=null;function Ce(t=!1){zr.push(pt=t?null:[])}function np(){zr.pop(),pt=zr[zr.length-1]||null}let Qr=1;function lo(t,e=!1){Qr+=t,t<0&&pt&&e&&(pt.hasOnce=!0)}function pc(t){return t.dynamicChildren=Qr>0?pt||dr:null,np(),Qr>0&&pt&&pt.push(t),t}function Ie(t,e,n,r,s,i){return pc(ee(t,e,n,r,s,i,!0))}function fc(t,e,n,r,s){return pc(qe(t,e,n,r,s,!0))}function mc(t){return t?t.__v_isVNode===!0:!1}function Or(t,e){return t.type===e.type&&t.key===e.key}const gc=({key:t})=>t??null,Es=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||De(t)||oe(t)?{i:dt,r:t,k:e,f:!!n}:t:null);function ee(t,e=null,n=null,r=0,s=null,i=t===lt?0:1,a=!1,o=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gc(e),ref:e&&Es(e),scopeId:Hu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dt};return o?(Sa(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=Re(n)?8:16),Qr>0&&!a&&pt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&pt.push(u),u}const qe=rp;function rp(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Yu)&&(t=Rn),mc(t)){const o=wr(t,e,!0);return n&&Sa(o,n),Qr>0&&!i&&pt&&(o.shapeFlag&6?pt[pt.indexOf(t)]=o:pt.push(o)),o.patchFlag=-2,o}if(mp(t)&&(t=t.__vccOpts),e){e=sp(e);let{class:o,style:u}=e;o&&!Re(o)&&(e.class=Ct(o)),we(u)&&(si(u)&&!ie(u)&&(u=Ue({},u)),e.style=ti(u))}const a=Re(t)?1:dc(t)?128:dd(t)?64:we(t)?4:oe(t)?2:0;return ee(t,e,n,r,s,a,i,!0)}function sp(t){return t?si(t)||rc(t)?Ue({},t):t:null}function wr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:o,transition:u}=t,c=e?ip(s||{},e):s,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&gc(c),ref:e&&e.ref?n&&i?ie(i)?i.concat(Es(e)):[i,Es(e)]:Es(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wr(t.ssContent),ssFallback:t.ssFallback&&wr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&wa(l,u.clone(l)),l}function Gr(t=" ",e=0){return qe(oi,null,t,e)}function ih(t,e){const n=qe(Ts,null,t);return n.staticCount=e,n}function Ss(t="",e=!1){return e?(Ce(),fc(Rn,null,t)):qe(Rn,null,t)}function Vt(t){return t==null||typeof t=="boolean"?qe(Rn):ie(t)?qe(lt,null,t.slice()):mc(t)?tn(t):qe(oi,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wr(t)}function Sa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!rc(e)?e._ctx=dt:s===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),r&64?(n=16,e=[Gr(e)]):n=8);t.children=e,t.shapeFlag|=n}function ip(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ct([e.class,r.class]));else if(s==="style")e.style=ti([e.style,r.style]);else if(js(s)){const i=e[s],a=r[s];a&&i!==a&&!(ie(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Bt(t,e,n,r=null){Yt(t,e,7,[n,r])}const ap=Ju();let op=0;function up(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ap,i={uid:op++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _u(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ic(r,s),emitsOptions:Qu(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qd.bind(null,i),t.ce&&t.ce(i),i}let $e=null;const hc=()=>$e||dt;let Us,zi;{const t=ei(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Us=e("__VUE_INSTANCE_SETTERS__",n=>$e=n),zi=e("__VUE_SSR_SETTERS__",n=>_r=n)}const cs=t=>{const e=$e;return Us(t),t.scope.on(),()=>{t.scope.off(),Us(e)}},po=()=>{$e&&$e.scope.off(),Us(null)};function yc(t){return t.vnode.shapeFlag&4}let _r=!1;function cp(t,e=!1,n=!1){e&&zi(e);const{props:r,children:s}=t.vnode,i=yc(t);zd(t,r,i,e),Yd(t,s,n||e);const a=i?lp(t,e):void 0;return e&&zi(!1),a}function lp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Dd);const{setup:r}=n;if(r){mn();const s=t.setupContext=r.length>1?pp(t):null,i=cs(t),a=os(r,t,0,[t.props,s]),o=mu(a);if(gn(),i(),(o||t.sp)&&!Hr(t)&&_a(t),o){if(a.then(po,po),e)return a.then(u=>{fo(t,u)}).catch(u=>{us(u,t,0)});t.asyncDep=a}else fo(t,a)}else vc(t)}function fo(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=$u(e)),vc(t)}function vc(t,e,n){const r=t.type;t.render||(t.render=r.render||Gt);{const s=cs(t);mn();try{Rd(t)}finally{gn(),s()}}}const dp={get(t,e){return ze(t,"get",""),t[e]}};function pp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,dp),slots:t.slots,emit:t.emit,expose:e}}function ui(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($u(ya(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wr)return Wr[n](t)},has(e,n){return n in e||n in Wr}})):t.proxy}function fp(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function mp(t){return oe(t)&&"__vccOpts"in t}const I=(t,e)=>Ql(t,e,_r),gp="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gi;const mo=typeof window<"u"&&window.trustedTypes;if(mo)try{Gi=mo.createPolicy("vue",{createHTML:t=>t})}catch{}const bc=Gi?t=>Gi.createHTML(t):t=>t,hp="http://www.w3.org/2000/svg",yp="http://www.w3.org/1998/Math/MathML",Jt=typeof document<"u"?document:null,go=Jt&&Jt.createElement("template"),vp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Jt.createElementNS(hp,t):e==="mathml"?Jt.createElementNS(yp,t):n?Jt.createElement(t,{is:n}):Jt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{go.innerHTML=bc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const o=go.content;if(r==="svg"||r==="mathml"){const u=o.firstChild;for(;u.firstChild;)o.appendChild(u.firstChild);o.removeChild(u)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bp=Symbol("_vtc");function wp(t,e,n){const r=t[bp];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Vs=Symbol("_vod"),wc=Symbol("_vsh"),ah={name:"show",beforeMount(t,{value:e},{transition:n}){t[Vs]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Pr(t,!0),r.enter(t)):r.leave(t,()=>{Pr(t,!1)}):Pr(t,e))},beforeUnmount(t,{value:e}){Pr(t,e)}};function Pr(t,e){t.style.display=e?t[Vs]:"none",t[wc]=!e}const _p=Symbol(""),kp=/(?:^|;)\s*display\s*:/;function xp(t,e,n){const r=t.style,s=Re(n);let i=!1;if(n&&!s){if(e)if(Re(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Is(r,o,"")}else for(const a in e)n[a]==null&&Is(r,a,"");for(const a in n)a==="display"&&(i=!0),Is(r,a,n[a])}else if(s){if(e!==n){const a=r[_p];a&&(n+=";"+a),r.cssText=n,i=kp.test(n)}}else e&&t.removeAttribute("style");Vs in t&&(t[Vs]=i?r.display:"",t[wc]&&(r.display="none"))}const ho=/\s*!important$/;function Is(t,e,n){if(ie(n))n.forEach(r=>Is(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ap(t,e);ho.test(n)?t.setProperty(On(r),n.replace(ho,""),"important"):t[r]=n}}const yo=["Webkit","Moz","ms"],Ti={};function Ap(t,e){const n=Ti[e];if(n)return n;let r=wt(e);if(r!=="filter"&&r in t)return Ti[e]=r;r=Js(r);for(let s=0;s<yo.length;s++){const i=yo[s]+r;if(i in t)return Ti[e]=i}return e}const vo="http://www.w3.org/1999/xlink";function bo(t,e,n,r,s,i=kl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vo,e.slice(6,e.length)):t.setAttributeNS(vo,e,n):n==null||i&&!vu(n)?t.removeAttribute(e):t.setAttribute(e,i?"":jt(n)?String(n):n)}function wo(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?bc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(o!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=vu(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Tn(t,e,n,r){t.addEventListener(e,n,r)}function Cp(t,e,n,r){t.removeEventListener(e,n,r)}const _o=Symbol("_vei");function Tp(t,e,n,r,s=null){const i=t[_o]||(t[_o]={}),a=i[e];if(r&&a)a.value=r;else{const[o,u]=Ep(e);if(r){const c=i[e]=Dp(r,s);Tn(t,o,c,u)}else a&&(Cp(t,o,a,u),i[e]=void 0)}}const ko=/(?:Once|Passive|Capture)$/;function Ep(t){let e;if(ko.test(t)){e={};let r;for(;r=t.match(ko);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):On(t.slice(2)),e]}let Ei=0;const Sp=Promise.resolve(),Ip=()=>Ei||(Sp.then(()=>Ei=0),Ei=Date.now());function Dp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Yt(Rp(r,n.value),e,5,[r])};return n.value=t,n.attached=Ip(),n}function Rp(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Op=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?wp(t,r,a):e==="style"?xp(t,n,r):js(e)?ca(e)||Tp(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pp(t,e,r,a))?(wo(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bo(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Re(r))?wo(t,wt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bo(t,e,r,a))};function Pp(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xo(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xo(e)&&Re(n)?!1:e in t}const kr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>xs(e,n):e};function Lp(t){t.target.composing=!0}function Ao(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dn=Symbol("_assign");function Co(t,e,n){return e&&(t=t.trim()),n&&(t=Qs(t)),t}const oh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[dn]=kr(s);const i=r||s.props&&s.props.type==="number";Tn(t,e?"change":"input",a=>{a.target.composing||t[dn](Co(t.value,n,i))}),(n||i)&&Tn(t,"change",()=>{t.value=Co(t.value,n,i)}),e||(Tn(t,"compositionstart",Lp),Tn(t,"compositionend",Ao),Tn(t,"change",Ao))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[dn]=kr(a),t.composing)return;const o=(i||t.type==="number")&&!/^0\d/.test(t.value)?Qs(t.value):t.value,u=e??"";o!==u&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===u)||(t.value=u))}},uh={created(t,{value:e},n){t.checked=Qn(e,n.props.value),t[dn]=kr(n),Tn(t,"change",()=>{t[dn](es(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[dn]=kr(r),e!==n&&(t.checked=Qn(e,r.props.value))}},ch={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ys(e);Tn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?Qs(es(a)):es(a));t[dn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,va(()=>{t._assigning=!1})}),t[dn]=kr(r)},mounted(t,{value:e}){To(t,e)},beforeUpdate(t,e,n){t[dn]=kr(n)},updated(t,{value:e}){t._assigning||To(t,e)}};function To(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!Ys(e))){for(let s=0,i=t.options.length;s<i;s++){const a=t.options[s],o=es(a);if(n)if(r){const u=typeof o;u==="string"||u==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=Al(e,o)>-1}else a.selected=e.has(o);else if(Qn(es(a),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function es(t){return"_value"in t?t._value:t.value}const Bp=["ctrl","shift","alt","meta"],Fp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Bp.some(n=>t[`${n}Key`]&&!e.includes(n))},Np=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const o=Fp[e[a]];if(o&&o(s,e))return}return t(s,...i)})},$p={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lh=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=On(s.key);if(e.some(a=>a===i||$p[a]===i))return t(s)})},qp=Ue({patchProp:Op},vp);let Eo;function Mp(){return Eo||(Eo=Zd(qp))}const Up=(...t)=>{const e=Mp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Hp(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Vp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Vp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Hp(t){return Re(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _c;const ci=t=>_c=t,kc=Symbol();function Ki(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Kr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Kr||(Kr={}));function Wp(){const t=ku(!0),e=t.run(()=>O({}));let n=[],r=[];const s=ya({install(i){ci(s),s._a=i,i.provide(kc,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const xc=()=>{};function So(t,e,n,r=xc){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&xu()&&Cl(s),s}function sr(t,...e){t.forEach(n=>{n(...e)})}const zp=t=>t(),Io=Symbol(),Si=Symbol();function ji(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ki(s)&&Ki(r)&&t.hasOwnProperty(n)&&!De(r)&&!ln(r)?t[n]=ji(s,r):t[n]=r}return t}const Gp=Symbol();function Kp(t){return!Ki(t)||!Object.prototype.hasOwnProperty.call(t,Gp)}const{assign:kn}=Object;function jp(t){return!!(De(t)&&t.effect)}function Yp(t,e,n,r){const{state:s,actions:i,getters:a}=e,o=n.state.value[t];let u;function c(){o||(n.state.value[t]=s?s():{});const l=Yl(n.state.value[t]);return kn(l,i,Object.keys(a||{}).reduce((d,b)=>(d[b]=ya(I(()=>{ci(n);const h=n._s.get(t);return a[b].call(h,h)})),d),{}))}return u=Ac(t,c,e,n,r,!0),u}function Ac(t,e,n={},r,s,i){let a;const o=kn({actions:{}},n),u={deep:!0};let c,l,d=new Set,b=new Set,h;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={});let _;function D(A){let y;c=l=!1,typeof A=="function"?(A(r.state.value[t]),y={type:Kr.patchFunction,storeId:t,events:h}):(ji(r.state.value[t],A),y={type:Kr.patchObject,payload:A,storeId:t,events:h});const E=_=Symbol();va().then(()=>{_===E&&(c=!0)}),l=!0,sr(d,y,r.state.value[t])}const S=i?function(){const{state:y}=n,E=y?y():{};this.$patch(m=>{kn(m,E)})}:xc;function v(){a.stop(),d.clear(),b.clear(),r._s.delete(t)}const g=(A,y="")=>{if(Io in A)return A[Si]=y,A;const E=function(){ci(r);const m=Array.from(arguments),x=new Set,B=new Set;function M(P){x.add(P)}function q(P){B.add(P)}sr(b,{args:m,name:E[Si],store:f,after:M,onError:q});let F;try{F=A.apply(this&&this.$id===t?this:f,m)}catch(P){throw sr(B,P),P}return F instanceof Promise?F.then(P=>(sr(x,P),P)).catch(P=>(sr(B,P),Promise.reject(P))):(sr(x,F),F)};return E[Io]=!0,E[Si]=y,E},p={_p:r,$id:t,$onAction:So.bind(null,b),$patch:D,$reset:S,$subscribe(A,y={}){const E=So(d,A,y.detached,()=>m()),m=a.run(()=>As(()=>r.state.value[t],x=>{(y.flush==="sync"?l:c)&&A({storeId:t,type:Kr.direct,events:h},x)},kn({},u,y)));return E},$dispose:v},f=ri(p);r._s.set(t,f);const k=(r._a&&r._a.runWithContext||zp)(()=>r._e.run(()=>(a=ku()).run(()=>e({action:g}))));for(const A in k){const y=k[A];if(De(y)&&!jp(y)||ln(y))i||(C&&Kp(y)&&(De(y)?y.value=C[A]:ji(y,C[A])),r.state.value[t][A]=y);else if(typeof y=="function"){const E=g(y,A);k[A]=E,o.actions[A]=y}}return kn(f,k),kn(de(f),k),Object.defineProperty(f,"$state",{get:()=>r.state.value[t],set:A=>{D(y=>{kn(y,A)})}}),r._p.forEach(A=>{kn(f,a.run(()=>A({store:f,app:r._a,pinia:r,options:o})))}),C&&i&&n.hydrate&&n.hydrate(f.$state,C),c=!0,l=!0,f}/*! #__NO_SIDE_EFFECTS__ */function Ia(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,o){const u=od();return a=a||(u?Mr(kc,null):null),a&&ci(a),a=_c,a._s.has(t)||(s?Ac(t,e,r,a):Yp(t,r,a)),a._s.get(t)}return i.$id=t,i}const xr={1:{title:"Day 1 - 点击计数器",subtitle:"点击计数器/ClickCounter",concepts:["function","increment","uint256","contract"]},2:{title:"Day 2 - 保存名字",subtitle:"保存名字/SaveMyName",concepts:["string","private","memory","view","parameters","returns"]},3:{title:"Day 3 - 投票站",subtitle:"投票站/PollStation",concepts:["array","mapping","push","compound_assignment"]},4:{title:"Day 4 - 拍卖行",subtitle:"拍卖行/AuctionHouse",concepts:["constructor","msg_sender","block_timestamp","require","external","address_type","bool_type"]},5:{title:"Day 5 - 管理员权限",subtitle:"管理员权限/AdminOnly",concepts:["modifier","zero_address","return_statement"]},6:{title:"Day 6 - 以太坊银行",subtitle:"以太坊银行/EtherPiggyBank",concepts:["address_mapping_balance","payable","msg_value","wei_unit","ether_deposit_withdraw"]},7:{title:"Day 7 - 朋友借条",subtitle:"朋友借条/SimpleIOU",concepts:["nested_mapping","address_payable","debt_tracking","internal_transfer","transfer_method","call_method","withdraw_pattern"]},8:{title:"Day 8 - 打赏罐",subtitle:"打赏罐/TipJar",concepts:["modifier_onlyOwner","payable_tip","msg_value_tip","address_balance","call_withdraw","mapping_rates"]},9:{title:"Day 9 - 跨合约调用",subtitle:"跨合约调用/InterContract",concepts:["pure_function","view_function","cross_contract_call","interface_call","low_level_call","modifier_onlyOwner","newton_iteration","contract_composition"]},10:{title:"Day 10 - 健身追踪器",subtitle:"健身追踪器/ActivityTracker",concepts:["struct_definition","array_in_mapping","multiple_mappings","storage_keyword","event_logging","milestone_detection","timestamp_usage","onlyRegistered_modifier"]},11:{title:"Day 11 - 主密钥保险库",subtitle:"合约继承与所有权/MasterkeyVault",concepts:["inheritance","import_statement","constructor","private_visibility","event_logging","indexed_parameter","transfer_ownership","onlyOwner_modifier"]},12:{title:"Day 12 - ERC20 代币标准",subtitle:"ERC20代币/Web3Compass",concepts:["erc20_standard","mapping_nested","event","transfer","approve","allowance","transferFrom"]},13:{title:"Day 13 - MyToken 代币扩展",subtitle:"ERC20进阶/Virtual & Inheritance",concepts:["constructor_mint","zero_address_mint","internal_function","virtual_function"]},14:{title:"Day 14 - 安全存款盒",subtitle:"抽象合约、接口与工厂模式/Abstract, Interface & Factory",concepts:["interface_definition","abstract_contract","inheritance","override_keyword","virtual_function","super_keyword","modifier_combination","factory_pattern","metadata_storage","time_lock"]},15:{title:"Day 15 - Gas优化投票",subtitle:"高效节能投票/GasEfficientVoting",concepts:["compact_datatype","uint8_uint32","bytes32_string","storage_optimization","bit_operation","mapping_storage","mask_check","timestamp_block","event_logging"]},16:{title:"Day 16 - 插件存储系统",subtitle:"动态插件注册与低级别调用/PluginStore",concepts:["struct_definition","mapping_storage","plugin_registration","low_level_call","abi_encoding","staticcall","dynamic_delegation","contract_interop"]},17:{title:"Day 17",subtitle:"可升级合约/UpgradeHub",concepts:["proxy_pattern","delegatecall","storage_layout","upgrade_mechanism","logic_contract","fallback_function","data_persistence","version_control"]},18:{title:"Day 18 - 预言机与参数保险",subtitle:"预言机/OracleContract",concepts:["oracle_interface","eth_usd_oracle","random_generation","purchase_insurance","price_conversion","parametric_payout","cooldown_mechanism","contract_balance"]},19:{title:"Day 19 - 基于签名的活动参与",subtitle:"ECDSA签名验证/SignThis",concepts:["keccak256_hash","ecdsa_signature","signature_rsv","eip191_prefix","ecrecover","require_statement","mapping_storage","msg_sender"]},20:{title:"Day 20 - 重入攻击与防护",subtitle:"重入攻击/ReentrancyAttack",concepts:["reentrancy_attack","fallback_receive","vulnerable_withdraw","deposit_function","checks_effects_interactions","reentrancy_guard","contract_balance","code_comparison"]},21:{title:"Day 21 - NFT数字藏品",subtitle:"ERC721标准/SimpleNFT",concepts:["ierc721_interface","mint_function","token_id_counter","token_uri","balance_of","transfer_from","approve_mechanism","approval_for_all","safe_transfer"]},22:{title:"Day 22 - 公平链上彩票",subtitle:"公平链上彩票/FairChainLottery",concepts:["chainlink_vrf","random_number_generation","lottery_state_machine","time_lock","request_randomness","fulfill_random_words","prize_distribution","lottery_security"]},23:{title:"Day 23 - 借贷协议",subtitle:"去中心化借贷/SimpleLending",concepts:["lending_pool","collateral_deposit","borrow_mechanism","health_factor","liquidation_threshold","interest_calculation","repay_function","lending_security"]},24:{title:"Day 24 - 增强型托管",subtitle:"第三方托管/EnhancedSimpleEscrow",concepts:["escrow_contract","buyer_seller_arbitration","dispute_resolution","time_locked_release","mutual_cancellation","arbiter_role","multi_party_security","state_management"]},25:{title:"Day 25 - 自动化做市商",subtitle:"自动化做市商/AutomatedMarketMaker",concepts:["amm_formula","liquidity_pool","constant_product","add_liquidity","swap_mechanism","remove_liquidity","slippage_calculation","reserves_management"]},26:{title:"Day 26 - NFT市场",subtitle:"去中心化交易/NFTMarketplace",concepts:["nft_marketplace","listing_mechanism","royalty_payment","marketplace_security","buy_now_price","cancel_listing","nft_escrow","owner_revenue"]},27:{title:"Day 27 - 收益耕作",subtitle:"DeFi质押/YieldFarming",concepts:["reward_debt_pattern","staking_token_decimals","time_weighted_calculation","reentrancy_guard","stake_function","unstake_function","claim_rewards","emergency_withdraw"]},28:{title:"Day 28 - 去中心化治理",subtitle:"DAO治理/DecentralizedGovernance",concepts:["token_governance","timelock_mechanism","quorum_threshold","proposal_state_machine","proposal_struct","voting_function","finalize_function","low_level_call","reentrancy_guard"]},29:{title:"Day 29 - 简单稳定币",subtitle:"超额抵押稳定币/SimpleStablecoin",concepts:["over_collateralization","collateral_ratio","price_oracle","health_factor","decimal_conversion","deposit_collateral","mint_stablecoin","burn_stablecoin","withdraw_collateral","liquidation"]},30:{title:"Day 30 - MiniDex",subtitle:"迷你去中心化交易所 / Mini DEX",concepts:["factory_pattern","constant_product","price_discovery","liquidity_calculation","sqrt_calculation","address_sorting","double_mapping","add_liquidity","remove_liquidity","swap_function"]}},dh=t=>t===1?`//SPDx-License-Identifier:MIT

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
//    - 通常指向 JSON 文件，包含名称、描述、图片等`:t===22?`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// ==================== 内联 Ownable 合约 ====================
// 直接内联，无需外部依赖
// 实现了基本的访问控制功能，只有合约所有者能执行特定操作
contract Ownable {
    // 存储合约所有者地址，private 表示只有本合约内部可以访问
    address private _owner;

    // 所有权转移事件，indexed 可以让前端按地址筛选事件
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    // 构造函数：部署时设置初始所有者
    // initialOwner: 初始所有者地址
    constructor(address initialOwner) {
        _transferOwnership(initialOwner);
    }

    // 修饰器：限制只有所有者可以调用
    // _ 表示被修饰函数的代码将插入到这里
    modifier onlyOwner() {
        _checkOwner();  // 检查调用者是否是所有者
        _;              // 执行被修饰的函数体
    }

    // 获取当前所有者地址
    // public: 任何人都可以调用
    // view: 不修改状态，只读取
    // virtual: 允许子合约重写
    function owner() public view virtual returns (address) {
        return _owner;
    }

    // 内部函数：检查调用者是否是所有者
    // internal: 只能在本合约和子合约中调用
    function _checkOwner() internal view virtual {
        // require 检查条件，不满足则回滚交易并返回错误信息
        require(owner() == msg.sender, "Ownable: caller is not the owner");
    }

    // 内部函数：转移所有权
    // newOwner: 新所有者地址
    function _transferOwnership(address newOwner) internal virtual {
        // 记录旧所有者地址
        address oldOwner = _owner;
        // 更新所有者
        _owner = newOwner;
        // 触发所有权转移事件
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

// ==================== Mock VRF 协调器接口 ====================
// 模拟 Chainlink VRF Coordinator 接口
// 用于本地测试环境，无需连接真实的 Chainlink 网络
interface IMockVRFCoordinator {
    // 请求随机数（模拟 VRF 请求）
    // keyHash: VRF 密钥哈希，用于标识 VRF 服务
    // subId: 订阅 ID，用于计费
    // requestConfirmations: 请求确认数，等待多少个区块确认
    // callbackGasLimit: 回调函数 gas 限制
    // numWords: 请求的随机数数量
    // 返回: requestId 请求 ID，用于追踪
    function requestRandomWords(
        bytes32 keyHash,
        uint256 subId,
        uint16 requestConfirmations,
        uint32 callbackGasLimit,
        uint32 numWords
    ) external returns (uint256 requestId);
}

// ==================== VRF 消费者接口 ====================
// 定义 VRF 回调函数接口
// 任何想要接收 VRF 随机数的合约都必须实现此接口
interface IVRFConsumer {
    // VRF 回调函数
    // requestId: 请求 ID
    // randomWords: 随机数数组
    function fulfillRandomWords(uint256 requestId, uint256[] calldata randomWords) external;
}

// ==================== Mock VRF 协调器实现 ====================
// 模拟 Chainlink VRF Coordinator 的行为
// 注意：此合约仅用于本地测试，使用伪随机数生成，不安全！
contract MockVRFCoordinator is IMockVRFCoordinator {
    // 请求 ID 计数器，每次请求时递增
    uint256 private _requestIdCounter;
    
    // 记录请求对应的消费者合约地址
    // mapping: 键值对存储，key 是 requestId，value 是消费者地址
    mapping(uint256 => address) public requestToConsumer;
    
    // 随机数请求事件，前端可以监听此事件
    event RandomWordsRequested(
        bytes32 keyHash,
        uint256 requestId,
        uint256 preSeed,
        uint256 subId,
        uint16 minimumRequestConfirmations,
        uint32 callbackGasLimit,
        uint32 numWords,
        address sender
    );
    
    // 请求随机数
    // 这是模拟的 VRF 请求，不会真正调用 Chainlink 网络
    function requestRandomWords(
        bytes32 keyHash,
        uint256 subId,
        uint16 requestConfirmations,
        uint32 callbackGasLimit,
        uint32 numWords
    ) external override returns (uint256 requestId) {
        // 递增请求 ID 计数器
        requestId = ++_requestIdCounter;
        // 记录哪个合约发起了请求
        requestToConsumer[requestId] = msg.sender;
        
        // 触发事件，通知前端有随机数请求
        emit RandomWordsRequested(
            keyHash,
            requestId,
            uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))), // 预种子
            subId,
            requestConfirmations,
            callbackGasLimit,
            numWords,
            msg.sender
        );
        
        return requestId;
    }
    
    // 模拟 VRF 回调 - 任何人都可以调用此函数来触发随机数回调
    // 在真实环境中，这是由 Chainlink 节点自动调用的
    // requestId: 请求 ID
    // randomWords: 随机数数组
    function fulfillRandomWords(uint256 requestId, uint256[] calldata randomWords) external {
        // 查找发起请求的消费者合约
        address consumer = requestToConsumer[requestId];
        // 确保请求存在
        require(consumer != address(0), "Request not found");
        
        // 调用消费者的回调函数，传入随机数
        IVRFConsumer(consumer).fulfillRandomWords(requestId, randomWords);
    }
    
    // 生成伪随机数数组（仅用于测试）
    // numWords: 需要生成的随机数数量
    // seed: 种子值
    // 返回: 随机数数组
    function generateRandomWords(uint32 numWords, uint256 seed) public view returns (uint256[] memory) {
        // 创建动态数组，长度为 numWords
        uint256[] memory randomWords = new uint256[](numWords);
        // 循环生成随机数
        for (uint32 i = 0; i < numWords; i++) {
            // 使用 keccak256 哈希多个区块参数生成伪随机数
            // 注意：这种方式不安全，矿工可以操控
            randomWords[i] = uint256(keccak256(abi.encodePacked(
                block.timestamp,      // 当前区块时间戳
                block.number,         // 当前区块号
                msg.sender,           // 调用者地址
                seed,                 // 种子
                i                     // 索引
            )));
        }
        return randomWords;
    }
}

// ==================== FairChainLottery 彩票合约 ====================
// 去中心化彩票合约 - Mock VRF 版本
// 用于本地测试环境，演示彩票逻辑
// 注意：此合约使用伪随机数，仅用于学习和测试！
contract FairChainLottery is Ownable, IVRFConsumer {
    // 彩票状态枚举
    // OPEN: 开放参与
    // CLOSED: 关闭，等待开启
    // CALCULATING: 正在计算获胜者
    enum LOTTERY_STATE { OPEN, CLOSED, CALCULATING }
    
    // 当前彩票状态，public 自动生成 getter 函数
    LOTTERY_STATE public lotteryState;

    // 参与者数组，payable 表示可以接收 ETH
    // 存储所有参与彩票的地址
    address payable[] public players;
    
    // 最近的获胜者地址
    address public recentWinner;
    
    // 参与费用（wei 单位）
    uint256 public entryFee;

    // Mock VRF 配置参数
    uint256 public subscriptionId;        // 订阅 ID
    bytes32 public keyHash;               // VRF 密钥哈希
    uint32 public callbackGasLimit = 100000;  // 回调 gas 限制，默认 100000
    uint16 public requestConfirmations = 3;   // 确认数，默认 3 个区块
    uint32 public numWords = 1;               // 请求的随机数数量，默认 1 个
    uint256 public latestRequestId;           // 最新的请求 ID
    
    // VRF 协调器合约接口
    IMockVRFCoordinator public vrfCoordinator;

    // 事件定义，前端可以监听这些事件
    event LotteryStarted();                                    // 彩票开启事件
    event LotteryEnded(uint256 requestId);                     // 彩票结束事件
    event WinnerPicked(address indexed winner, uint256 amount); // 获胜者选出事件
    event PlayerEntered(address indexed player, uint256 amount); // 玩家参与事件

    // 构造函数：初始化合约
    // _vrfCoordinator: VRF 协调器合约地址
    // _subscriptionId: 订阅 ID
    // _keyHash: VRF 密钥哈希
    // _entryFee: 参与费用
    constructor(
        address _vrfCoordinator,
        uint256 _subscriptionId,
        bytes32 _keyHash,
        uint256 _entryFee
    ) Ownable(msg.sender) {  // 调用父合约构造函数，设置所有者为部署者
        // 初始化 VRF 协调器接口
        vrfCoordinator = IMockVRFCoordinator(_vrfCoordinator);
        subscriptionId = _subscriptionId;
        keyHash = _keyHash;
        entryFee = _entryFee;
        // 初始状态为关闭
        lotteryState = LOTTERY_STATE.CLOSED;
    }

    // 参与彩票函数
    // payable: 允许接收 ETH
    function enter() public payable {
        // 检查彩票是否开放
        require(lotteryState == LOTTERY_STATE.OPEN, "Lottery not open");
        // 检查发送的 ETH 是否足够
        require(msg.value >= entryFee, "Not enough ETH");
        // 将参与者添加到数组
        players.push(payable(msg.sender));
        // 触发参与事件
        emit PlayerEntered(msg.sender, msg.value);
    }

    // 开始彩票（仅所有者可以调用）
    // onlyOwner 修饰器限制只有所有者可以调用
    function startLottery() external onlyOwner {
        // 检查当前状态是否为关闭
        require(lotteryState == LOTTERY_STATE.CLOSED, "Can't start yet");
        // 设置状态为开放
        lotteryState = LOTTERY_STATE.OPEN;
        // 触发开启事件
        emit LotteryStarted();
    }

    // 结束彩票并请求随机数（仅所有者可以调用）
    function endLottery() external onlyOwner {
        // 检查彩票是否开放
        require(lotteryState == LOTTERY_STATE.OPEN, "Lottery not open");
        // 检查是否有参与者
        require(players.length > 0, "No players in lottery");
        // 设置状态为计算中
        lotteryState = LOTTERY_STATE.CALCULATING;

        // 向 VRF 协调器请求随机数
        latestRequestId = vrfCoordinator.requestRandomWords(
            keyHash,
            subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        
        // 触发结束事件
        emit LotteryEnded(latestRequestId);
    }

    // VRF 回调函数 - 由 MockVRFCoordinator 调用
    // 这是 VRF 返回随机数时调用的函数
    // 第一个参数是 requestId，这里用 _ 表示我们不使用它
    function fulfillRandomWords(uint256, uint256[] calldata randomWords) external override {
        // 检查状态是否为计算中
        require(lotteryState == LOTTERY_STATE.CALCULATING, "Not ready to pick winner");
        // 检查调用者是否是 VRF 协调器（防止恶意调用）
        require(msg.sender == address(vrfCoordinator), "Only coordinator can fulfill");

        // 使用随机数计算获胜者索引
        // randomWords[0] % players.length 确保索引在有效范围内
        uint256 winnerIndex = randomWords[0] % players.length;
        // 获取获胜者地址
        address payable winner = players[winnerIndex];
        // 记录获胜者
        recentWinner = winner;

        // 获取合约当前余额（即奖金总额）
        uint256 prizeAmount = address(this).balance;
        
        // 重置参与者数组，清空所有参与者
        players = new address payable[](0);
        // 设置状态为关闭，准备下一轮
        lotteryState = LOTTERY_STATE.CLOSED;

        // 发送奖金给获胜者
        // call{value: ...} 是推荐的 ETH 发送方式
        (bool sent, ) = winner.call{value: prizeAmount}("");
        // 确保发送成功
        require(sent, "Failed to send ETH to winner");
        
        // 触发获胜者事件
        emit WinnerPicked(winner, prizeAmount);
    }

    // 获取所有参与者地址
    // view: 不修改状态
    // returns (address payable[] memory): 返回参与者数组
    function getPlayers() external view returns (address payable[] memory) {
        return players;
    }
    
    // 获取合约当前余额
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
    
    // 获取参与者数量
    function getPlayerCount() external view returns (uint256) {
        return players.length;
    }
}`:t===23?`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title SimpleLending
 * @dev 一个基础的 DeFi 借贷平台合约
 * 功能：存款、取款、抵押、借款、还款、利息计算
 */
contract SimpleLending {
    
    // ==================== 重入锁 ====================
    // 防止重入攻击的简单机制
    // 当 _locked 为 true 时，不允许再次进入受保护的函数
    bool private _locked;
    
    // 重入锁修饰器
    // 确保函数执行期间不能被重入调用
    modifier nonReentrant() {
        require(!_locked, "Reentrant call");
        _locked = true;
        _;
        _locked = false;
    }
    
    // ==================== 状态变量 ====================
    
    // 用户的存款余额
    // key: 用户地址, value: 存款金额（wei）
    mapping(address => uint256) public depositBalances;

    // 用户的借款余额（本金）
    // key: 用户地址, value: 借款金额（wei）
    mapping(address => uint256) public borrowBalances;

    // 用户的抵押品余额
    // key: 用户地址, value: 抵押品金额（wei）
    mapping(address => uint256) public collateralBalances;

    // 利率，以基点（basis points）表示
    // 1 基点 = 0.01% = 1/10000
    // 500 基点 = 5% 年利率
    uint256 public interestRateBasisPoints = 500;

    // 抵押率，以基点表示
    // 7500 基点 = 75%，表示可以借出抵押品价值的 75%
    // 例如：抵押 1 ETH，最多可以借 0.75 ETH
    uint256 public collateralFactorBasisPoints = 7500;

    // 用户上次计算利息的时间戳
    // key: 用户地址, value: 时间戳（秒）
    mapping(address => uint256) public lastInterestAccrualTimestamp;

    // ==================== 事件 ====================
    // 事件用于前端监听，记录重要操作
    
    // 存款事件
    // indexed: 可以通过用户地址筛选事件
    event Deposit(address indexed user, uint256 amount);
    
    // 取款事件
    event Withdraw(address indexed user, uint256 amount);
    
    // 借款事件
    event Borrow(address indexed user, uint256 amount);
    
    // 还款事件
    event Repay(address indexed user, uint256 amount);
    
    // 存入抵押品事件
    event CollateralDeposited(address indexed user, uint256 amount);
    
    // 取出抵押品事件
    event CollateralWithdrawn(address indexed user, uint256 amount);

    // ==================== 存款功能 ====================
    
    /**
     * @dev 存款函数 - 用户向合约存入 ETH 获取利息收益
     * payable: 允许函数接收 ETH
     */
    function deposit() external payable {
        // 检查存入金额必须大于 0
        require(msg.value > 0, "Must deposit a positive amount");
        
        // 将存入金额加到用户的存款余额中
        // msg.sender: 调用此函数的地址
        // msg.value: 随交易发送的 ETH 数量
        depositBalances[msg.sender] += msg.value;
        
        // 触发存款事件，通知前端
        emit Deposit(msg.sender, msg.value);
    }

    /**
     * @dev 取款函数 - 用户取回存款
     * @param amount 要取出的金额（wei）
     * nonReentrant: 防止重入攻击
     */
    function withdraw(uint256 amount) external nonReentrant {
        // 检查取款金额必须大于 0
        require(amount > 0, "Must withdraw a positive amount");
        
        // 检查用户存款余额是否足够
        require(depositBalances[msg.sender] >= amount, "Insufficient balance");
        
        // 先从余额中扣除（防止重入攻击）
        depositBalances[msg.sender] -= amount;
        
        // 将 ETH 转给用户
        // 使用 call{value: ...} 替代 transfer()，这是现代 Solidity 推荐的方式
        // call 更灵活，可以处理更多 gas，但需要检查返回值
        (bool sent, ) = payable(msg.sender).call{value: amount}("");
        require(sent, "ETH transfer failed");
        
        // 触发取款事件
        emit Withdraw(msg.sender, amount);
    }

    // ==================== 抵押品功能 ====================
    
    /**
     * @dev 存入抵押品 - 用户存入 ETH 作为借款的抵押
     * 抵押品和存款是分开的，抵押品用于担保借款
     */
    function depositCollateral() external payable {
        // 检查存入金额必须大于 0
        require(msg.value > 0, "Must deposit a positive amount as collateral");
        
        // 增加用户的抵押品余额
        collateralBalances[msg.sender] += msg.value;
        
        // 触发抵押品存入事件
        emit CollateralDeposited(msg.sender, msg.value);
    }

    /**
     * @dev 取出抵押品 - 用户取回部分或全部抵押品
     * @param amount 要取出的抵押品金额（wei）
     * 限制：取出后必须保持足够的抵押率来覆盖借款
     * nonReentrant: 防止重入攻击
     */
    function withdrawCollateral(uint256 amount) external nonReentrant {
        // 检查取款金额必须大于 0
        require(amount > 0, "Must withdraw a positive amount");
        
        // 检查抵押品余额是否足够
        require(collateralBalances[msg.sender] >= amount, "Insufficient collateral");

        // 计算用户当前的债务（本金 + 累积利息）
        uint256 borrowedAmount = calculateInterestAccrued(msg.sender);
        
        // 计算所需的最低抵押品金额
        // 公式：所需抵押品 = 债务 / 抵押率
        // 例如：债务 0.75 ETH，抵押率 75%，则需要 1 ETH 抵押品
        uint256 requiredCollateral = (borrowedAmount * 10000) / collateralFactorBasisPoints;

        // 检查取出后是否仍满足抵押率要求
        // 剩余抵押品必须 >= 所需抵押品
        require(
            collateralBalances[msg.sender] - amount >= requiredCollateral,
            "Withdrawal would break collateral ratio"
        );

        // 扣除抵押品余额
        collateralBalances[msg.sender] -= amount;
        
        // 将 ETH 转给用户
        (bool sent, ) = payable(msg.sender).call{value: amount}("");
        require(sent, "ETH transfer failed");
        
        // 触发抵押品取出事件
        emit CollateralWithdrawn(msg.sender, amount);
    }

    // ==================== 借款功能 ====================
    
    /**
     * @dev 借款函数 - 用户根据抵押品借出 ETH
     * @param amount 要借出的金额（wei）
     * 限制：
     * 1. 合约必须有足够的流动性
     * 2. 借款金额不能超过抵押品允许的最大额度
     * nonReentrant: 防止重入攻击
     */
    function borrow(uint256 amount) external nonReentrant {
        // 检查借款金额必须大于 0
        require(amount > 0, "Must borrow a positive amount");
        
        // 检查合约是否有足够的 ETH 可以借出
        require(address(this).balance >= amount, "Not enough liquidity in the pool");

        // 计算用户最多可以借的金额
        // 公式：最大借款 = 抵押品价值 * 抵押率
        // 例如：抵押 1 ETH，抵押率 75%，则最多借 0.75 ETH
        uint256 maxBorrowAmount = (collateralBalances[msg.sender] * collateralFactorBasisPoints) / 10000;
        
        // 计算用户当前的债务（包括累积的利息）
        uint256 currentDebt = calculateInterestAccrued(msg.sender);

        // 检查借款后是否超过最大额度
        // 当前债务 + 新借款 <= 最大可借额度
        require(currentDebt + amount <= maxBorrowAmount, "Exceeds allowed borrow amount");

        // 更新借款余额（旧债务 + 新借款）
        borrowBalances[msg.sender] = currentDebt + amount;
        
        // 更新利息计算时间戳为当前时间
        lastInterestAccrualTimestamp[msg.sender] = block.timestamp;

        // 将 ETH 转给用户
        (bool sent, ) = payable(msg.sender).call{value: amount}("");
        require(sent, "ETH transfer failed");
        
        // 触发借款事件
        emit Borrow(msg.sender, amount);
    }

    // ==================== 还款功能 ====================
    
    /**
     * @dev 还款函数 - 用户偿还借款（附带利息）
     * payable: 允许函数接收 ETH 作为还款
     * 如果还款金额超过债务，多余部分会退回
     * 
     * 安全考虑：
     * 1. 使用 Checks-Effects-Interactions 模式防止重入攻击
     * 2. 使用 nonReentrant 修饰符提供额外保护
     */
    function repay() external payable nonReentrant {
        // ========== Checks ==========
        // 检查还款金额必须大于 0
        require(msg.value > 0, "Must repay a positive amount");

        // 计算用户当前的债务（本金 + 累积利息）
        uint256 currentDebt = calculateInterestAccrued(msg.sender);
        
        // 检查是否有债务需要偿还
        require(currentDebt > 0, "No debt to repay");

        // 确定实际还款金额和退款金额
        uint256 amountToRepay = msg.value;
        uint256 refundAmount = 0;
        
        // 如果还款金额超过债务，计算退款金额
        if (amountToRepay > currentDebt) {
            refundAmount = msg.value - currentDebt;
            amountToRepay = currentDebt;
        }

        // ========== Effects ==========
        // 先更新状态，防止重入攻击
        // 更新借款余额（剩余债务）
        borrowBalances[msg.sender] = currentDebt - amountToRepay;
        
        // 更新利息计算时间戳
        lastInterestAccrualTimestamp[msg.sender] = block.timestamp;

        // ========== Interactions ==========
        // 最后进行外部调用（转账）
        // 如果有退款，先退款
        if (refundAmount > 0) {
            (bool sent, ) = payable(msg.sender).call{value: refundAmount}("");
            require(sent, "ETH refund failed");
        }

        // 触发还款事件
        emit Repay(msg.sender, amountToRepay);
    }

    // ==================== 利息计算 ====================
    
    /**
     * @dev 计算用户的累积债务（本金 + 利息）
     * @param user 用户地址
     * @return 总债务金额（wei）
     * 
     * 利息计算公式：
     * 利息 = 本金 * 年利率 * 时间（年）
     * 
     * 注意：这里使用简单利息计算，不是复利
     */
    function calculateInterestAccrued(address user) public view returns (uint256) {
        // 如果没有借款，返回 0
        if (borrowBalances[user] == 0) {
            return 0;
        }

        // 计算距离上次计息经过的时间（秒）
        uint256 timeElapsed = block.timestamp - lastInterestAccrualTimestamp[user];
        
        // 计算利息
        // 公式：利息 = 本金 * 利率基点 * 时间 / (10000 * 365天)
        // 10000 是因为利率以基点表示
        // 365 days 将秒转换为年
        uint256 interest = (borrowBalances[user] * interestRateBasisPoints * timeElapsed) / (10000 * 365 days);

        // 返回本金 + 利息
        return borrowBalances[user] + interest;
    }

    // ==================== 查询函数 ====================
    
    /**
     * @dev 获取用户的最大可借金额
     * @param user 用户地址
     * @return 最大可借金额（wei）
     */
    function getMaxBorrowAmount(address user) external view returns (uint256) {
        return (collateralBalances[user] * collateralFactorBasisPoints) / 10000;
    }

    /**
     * @dev 获取合约的总流动性（合约持有的 ETH 总量）
     * @return 合约余额（wei）
     */
    function getTotalLiquidity() external view returns (uint256) {
        return address(this).balance;
    }
}`:t===24?`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title EnhancedSimpleEscrow - 具有超时、取消和事件的安全托管合约
/// @dev 这是一个增强版的托管合约，支持超时取消、争议仲裁和双方协商取消
/// 用于买卖双方在不信任对方的情况下安全交易
contract EnhancedSimpleEscrow {
    
    // ==================== 枚举：托管状态 ====================
    /// @dev 定义托管合约的各种状态
    enum EscrowState { 
        AWAITING_PAYMENT,   // 等待买家付款
        AWAITING_DELIVERY,  // 等待卖家发货/买家确认收货
        COMPLETE,           // 交易完成
        DISPUTED,           // 争议中
        CANCELLED           // 已取消
    }

    // ==================== 状态变量 ====================
    
    /// @notice 买家地址
    /// @dev immutable: 只能在构造函数中设置，之后不可更改，节省 gas
    address public immutable buyer;
    
    /// @notice 卖家地址
    /// @dev immutable: 只能在构造函数中设置
    address public immutable seller;
    
    /// @notice 仲裁者地址
    /// @dev 当买卖双方发生争议时，由仲裁者决定资金归属
    address public immutable arbiter;

    /// @notice 托管金额（wei）
    /// @dev 买家存入的金额，在交易完成或取消时释放
    uint256 public amount;
    
    /// @notice 当前托管状态
    /// @dev 使用枚举跟踪交易进度
    EscrowState public state;
    
    /// @notice 存款时间戳
    /// @dev 记录买家存款的时间，用于计算超时
    uint256 public depositTime;
    
    /// @notice 发货超时时间（秒）
    /// @dev 从存款开始计算，超过此时间买家可以取消交易
    uint256 public deliveryTimeout;

    // ==================== 事件 ====================
    /// @dev 事件用于前端监听，记录重要状态变更
    
    /// @notice 买家已存款事件
    /// @param buyer 买家地址
    /// @param amount 存款金额
    event PaymentDeposited(address indexed buyer, uint256 amount);
    
    /// @notice 买家确认收货事件
    /// @param buyer 买家地址
    /// @param seller 卖家地址
    /// @param amount 释放给卖家的金额
    event DeliveryConfirmed(address indexed buyer, address indexed seller, uint256 amount);
    
    /// @notice 争议发起事件
    /// @param initiator 发起争议的地址（买家或卖家）
    event DisputeRaised(address indexed initiator);
    
    /// @notice 争议解决事件
    /// @param arbiter 仲裁者地址
    /// @param recipient 资金接收方
    /// @param amount 释放金额
    event DisputeResolved(address indexed arbiter, address recipient, uint256 amount);
    
    /// @notice 托管取消事件
    /// @param initiator 发起取消的地址
    event EscrowCancelled(address indexed initiator);
    
    /// @notice 发货超时事件
    /// @param buyer 买家地址
    event DeliveryTimeoutReached(address indexed buyer);

    // ==================== 构造函数 ====================
    
    /// @notice 创建托管合约
    /// @param _seller 卖家地址
    /// @param _arbiter 仲裁者地址（可以是第三方服务或可信地址）
    /// @param _deliveryTimeout 发货超时时间（秒），必须大于 0
    /// @dev 买家是调用构造函数的地址（msg.sender）
    constructor(address _seller, address _arbiter, uint256 _deliveryTimeout) {
        // 检查超时时间必须大于 0
        require(_deliveryTimeout > 0, "Delivery timeout must be greater than zero");
        
        // 设置各方地址
        buyer = msg.sender;     // 调用者就是买家
        seller = _seller;       // 指定的卖家
        arbiter = _arbiter;     // 指定的仲裁者
        
        // 初始状态：等待付款
        state = EscrowState.AWAITING_PAYMENT;
        
        // 设置超时时间
        deliveryTimeout = _deliveryTimeout;
    }

    // ==================== 接收函数 ====================
    
    /// @notice 拒绝直接转账
    /// @dev 防止用户误操作直接转账到合约，必须通过 deposit() 函数存款
    receive() external payable {
        revert("Direct payments not allowed");
    }

    // ==================== 核心功能函数 ====================
    
    /// @notice 买家存款到托管合约
    /// @dev 买家调用此函数并发送 ETH，进入等待发货状态
    /// 要求：
    /// - 只有买家可以调用
    /// - 状态必须是 AWAITING_PAYMENT
    /// - 金额必须大于 0
    function deposit() external payable {
        // 检查调用者是否是买家
        require(msg.sender == buyer, "Only buyer can deposit");
        
        // 检查当前状态是否是等待付款
        require(state == EscrowState.AWAITING_PAYMENT, "Already paid");
        
        // 检查存款金额是否大于 0
        require(msg.value > 0, "Amount must be greater than zero");

        // 记录存款金额
        amount = msg.value;
        
        // 更新状态为等待发货
        state = EscrowState.AWAITING_DELIVERY;
        
        // 记录存款时间（用于计算超时）
        depositTime = block.timestamp;
        
        // 触发存款事件
        emit PaymentDeposited(buyer, amount);
    }

    /// @notice 买家确认收货，释放资金给卖家
    /// @dev 买家收到商品后调用此函数，资金转给卖家，交易完成
    /// 要求：
    /// - 只有买家可以调用
    /// - 状态必须是 AWAITING_DELIVERY
    function confirmDelivery() external {
        // 检查调用者是否是买家
        require(msg.sender == buyer, "Only buyer can confirm");
        
        // 检查状态是否是等待发货
        require(state == EscrowState.AWAITING_DELIVERY, "Not in delivery state");

        // 更新状态为完成
        state = EscrowState.COMPLETE;
        
        // 将资金转给卖家
        (bool sent, ) = payable(seller).call{value: amount}("");
        require(sent, "ETH transfer to seller failed");
        
        // 触发确认收货事件
        emit DeliveryConfirmed(buyer, seller, amount);
    }

    /// @notice 发起争议
    /// @dev 当买卖双方发生纠纷时，任何一方可以发起争议，进入仲裁流程
    /// 要求：
    /// - 买家或卖家可以发起
    /// - 状态必须是 AWAITING_DELIVERY
    function raiseDispute() external {
        // 检查调用者是否是买家或卖家
        require(msg.sender == buyer || msg.sender == seller, "Not authorized");
        
        // 检查状态是否是等待发货
        require(state == EscrowState.AWAITING_DELIVERY, "Can't dispute now");

        // 更新状态为争议中
        state = EscrowState.DISPUTED;
        
        // 触发争议事件
        emit DisputeRaised(msg.sender);
    }

    /// @notice 仲裁者解决争议
    /// @param _releaseToSeller 是否将资金释放给卖家
    /// @dev 仲裁者根据证据决定资金归属
    /// true: 资金给卖家（买家已收货或不诚信）
    /// false: 资金退回买家（卖家未发货或商品有问题）
    /// 要求：
    /// - 只有仲裁者可以调用
    /// - 状态必须是 DISPUTED
    function resolveDispute(bool _releaseToSeller) external {
        // 检查调用者是否是仲裁者
        require(msg.sender == arbiter, "Only arbiter can resolve");
        
        // 检查状态是否是争议中
        require(state == EscrowState.DISPUTED, "No dispute to resolve");

        // 更新状态为完成
        state = EscrowState.COMPLETE;
        
        // 根据仲裁结果释放资金
        if (_releaseToSeller) {
            // 资金给卖家
            (bool sent, ) = payable(seller).call{value: amount}("");
            require(sent, "ETH transfer to seller failed");
            emit DisputeResolved(arbiter, seller, amount);
        } else {
            // 资金退回买家
            (bool sent, ) = payable(buyer).call{value: amount}("");
            require(sent, "ETH transfer to buyer failed");
            emit DisputeResolved(arbiter, buyer, amount);
        }
    }

    /// @notice 超时后买家取消交易
    /// @dev 如果卖家在超时时间内未发货，买家可以取消并取回资金
    /// 要求：
    /// - 只有买家可以调用
    /// - 状态必须是 AWAITING_DELIVERY
    /// - 当前时间必须超过 depositTime + deliveryTimeout
    function cancelAfterTimeout() external {
        // 检查调用者是否是买家
        require(msg.sender == buyer, "Only buyer can trigger timeout cancellation");
        
        // 检查状态是否是等待发货
        require(state == EscrowState.AWAITING_DELIVERY, "Cannot cancel in current state");
        
        // 检查是否已超过超时时间
        require(block.timestamp >= depositTime + deliveryTimeout, "Timeout not reached");

        // 更新状态为已取消
        state = EscrowState.CANCELLED;
        
        // 将合约余额退回买家
        (bool sent, ) = payable(buyer).call{value: address(this).balance}("");
        require(sent, "ETH refund to buyer failed");
        
        // 触发取消事件
        emit EscrowCancelled(buyer);
        
        // 触发超时事件
        emit DeliveryTimeoutReached(buyer);
    }

    /// @notice 双方协商取消交易
    /// @dev 买卖双方同意取消交易，资金退回买家
    /// 适用场景：
    /// - 交易还未完成，双方同意取消
    /// - 买家还未付款，决定不买了
    /// 要求：
    /// - 买家或卖家可以发起
    /// - 状态必须是 AWAITING_DELIVERY 或 AWAITING_PAYMENT
    function cancelMutual() external {
        // 检查调用者是否是买家或卖家
        require(msg.sender == buyer || msg.sender == seller, "Not authorized");
        
        // 检查状态是否可以取消
        require(
            state == EscrowState.AWAITING_DELIVERY || state == EscrowState.AWAITING_PAYMENT,
            "Cannot cancel now"
        );

        // 记录之前的状态
        EscrowState previousState = state;
        
        // 更新状态为已取消
        state = EscrowState.CANCELLED;

        // 如果已经存款，退回资金
        if (previousState == EscrowState.AWAITING_DELIVERY) {
            (bool sent, ) = payable(buyer).call{value: address(this).balance}("");
            require(sent, "ETH refund to buyer failed");
        }

        // 触发取消事件
        emit EscrowCancelled(msg.sender);
    }

    // ==================== 查询函数 ====================
    
    /// @notice 获取剩余超时时间
    /// @return 剩余秒数，如果已超时或不在等待发货状态则返回 0
    /// @dev 用于前端显示倒计时
    function getTimeLeft() external view returns (uint256) {
        // 如果不在等待发货状态，返回 0
        if (state != EscrowState.AWAITING_DELIVERY) return 0;
        
        // 如果已超时，返回 0
        if (block.timestamp >= depositTime + deliveryTimeout) return 0;
        
        // 返回剩余时间
        return (depositTime + deliveryTimeout) - block.timestamp;
    }
}`:t===25?`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 导入 OpenZeppelin 的 ERC20 合约
// 使用 GitHub 链接导入，方便在 Remix 中直接使用
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/IERC20.sol";

/// @title Automated Market Maker with Liquidity Token
/// @title 自动化做市商（AMM）合约
/// @dev 这是一个简化的 Uniswap V1 风格的 AMM 合约
/// @dev 实现了流动性提供、流动性移除和代币交换功能
/// @dev 使用恒定乘积公式：x * y = k
contract AutomatedMarketMaker is ERC20 {
    
    // ==================== 状态变量 ====================
    
    /// @notice 代币 A 的合约接口
    /// @dev 使用 IERC20 接口与任意 ERC20 代币交互
    IERC20 public tokenA;
    
    /// @notice 代币 B 的合约接口
    IERC20 public tokenB;

    /// @notice 代币 A 的储备量
    /// @dev 记录在合约中的 tokenA 数量
    uint256 public reserveA;
    
    /// @notice 代币 B 的储备量
    /// @dev 记录在合约中的 tokenB 数量
    uint256 public reserveB;

    /// @notice 合约所有者地址
    /// @dev 这里虽然记录了 owner，但代码中没有使用 onlyOwner 修饰符
    address public owner;

    // ==================== 事件 ====================
    
    /// @notice 添加流动性事件
    /// @param provider 流动性提供者地址
    /// @param amountA 添加的 tokenA 数量
    /// @param amountB 添加的 tokenB 数量
    /// @param liquidity 铸造的流动性代币数量
    event LiquidityAdded(address indexed provider, uint256 amountA, uint256 amountB, uint256 liquidity);
    
    /// @notice 移除流动性事件
    /// @param provider 流动性提供者地址
    /// @param amountA 取出的 tokenA 数量
    /// @param amountB 取出的 tokenB 数量
    /// @param liquidity 销毁的流动性代币数量
    event LiquidityRemoved(address indexed provider, uint256 amountA, uint256 amountB, uint256 liquidity);
    
    /// @notice 代币交换事件
    /// @param trader 交易者地址
    /// @param tokenIn 输入代币地址
    /// @param amountIn 输入数量
    /// @param tokenOut 输出代币地址
    /// @param amountOut 输出数量
    event TokensSwapped(address indexed trader, address tokenIn, uint256 amountIn, address tokenOut, uint256 amountOut);

    // ==================== 构造函数 ====================
    
    /// @notice 创建 AMM 合约
    /// @param _tokenA 代币 A 的合约地址
    /// @param _tokenB 代币 B 的合约地址
    /// @param _name 流动性代币的名称
    /// @param _symbol 流动性代币的符号
    /// @dev 继承 ERC20 合约，流动性提供者会收到 LP 代币作为凭证
    constructor(
        address _tokenA, 
        address _tokenB, 
        string memory _name, 
        string memory _symbol
    ) ERC20(_name, _symbol) {
        tokenA = IERC20(_tokenA);  // 初始化 tokenA 接口
        tokenB = IERC20(_tokenB);  // 初始化 tokenB 接口
        owner = msg.sender;         // 记录部署者为所有者
    }

    // ==================== 流动性管理 ====================
    
    /// @notice 向流动性池添加流动性
    /// @param amountA 要添加的 tokenA 数量
    /// @param amountB 要添加的 tokenB 数量
    /// @dev 流动性提供者需要提前授权（approve）合约使用其代币
    /// @dev 首次添加流动性决定代币的初始价格比例
    function addLiquidity(uint256 amountA, uint256 amountB) external {
        // 检查输入金额必须大于 0
        require(amountA > 0 && amountB > 0, "Amounts must be > 0");

        // 从用户账户转移 tokenA 到合约
        // transferFrom 需要用户提前 approve
        tokenA.transferFrom(msg.sender, address(this), amountA);
        tokenB.transferFrom(msg.sender, address(this), amountB);

        // 计算应该铸造的流动性代币数量
        uint256 liquidity;
        if (totalSupply() == 0) {
            // 首次添加流动性：使用几何平均数
            // 公式：liquidity = sqrt(amountA * amountB)
            // 这样可以确保不同比例的池子有公平的 LP 代币分配
            liquidity = sqrt(amountA * amountB);
        } else {
            // 后续添加流动性：按比例分配
            // 取两个代币按比例计算的最小值，防止套利
            liquidity = min(
                amountA * totalSupply() / reserveA,
                amountB * totalSupply() / reserveB
            );
        }

        // 铸造流动性代币给提供者
        // LP 代币代表提供者在池子中的份额
        _mint(msg.sender, liquidity);

        // 更新储备量记录
        reserveA += amountA;
        reserveB += amountB;

        // 触发添加流动性事件
        emit LiquidityAdded(msg.sender, amountA, amountB, liquidity);
    }

    /// @notice 从流动性池移除流动性
    /// @param liquidityToRemove 要移除的流动性代币数量
    /// @return amountAOut 取出的 tokenA 数量
    /// @return amountBOut 取出的 tokenB 数量
    /// @dev 用户需要持有 LP 代币才能移除流动性
    function removeLiquidity(uint256 liquidityToRemove) 
        external 
        returns (uint256 amountAOut, uint256 amountBOut) 
    {
        // 检查要移除的流动性大于 0
        require(liquidityToRemove > 0, "Liquidity to remove must be > 0");
        
        // 检查用户有足够的 LP 代币
        require(balanceOf(msg.sender) >= liquidityToRemove, "Insufficient liquidity tokens");

        // 获取总流动性供应量
        uint256 totalLiquidity = totalSupply();
        require(totalLiquidity > 0, "No liquidity in the pool");

        // 计算用户可以取出的代币数量
        // 公式：取出数量 = (移除的流动性 / 总流动性) * 储备量
        amountAOut = liquidityToRemove * reserveA / totalLiquidity;
        amountBOut = liquidityToRemove * reserveB / totalLiquidity;

        // 检查计算出的数量大于 0
        require(amountAOut > 0 && amountBOut > 0, "Insufficient reserves for requested liquidity");

        // 更新储备量（先更新状态，防止重入攻击）
        reserveA -= amountAOut;
        reserveB -= amountBOut;

        // 销毁用户的 LP 代币
        _burn(msg.sender, liquidityToRemove);

        // 将代币转还给用户
        tokenA.transfer(msg.sender, amountAOut);
        tokenB.transfer(msg.sender, amountBOut);

        // 触发移除流动性事件
        emit LiquidityRemoved(msg.sender, amountAOut, amountBOut, liquidityToRemove);
        
        return (amountAOut, amountBOut);
    }

    // ==================== 代币交换 ====================
    
    /// @notice 用 tokenA 交换 tokenB
    /// @param amountAIn 输入的 tokenA 数量
    /// @param minBOut 最小输出的 tokenB 数量（滑点保护）
    /// @dev 使用恒定乘积公式计算交换数量
    /// @dev 收取 0.3% 的手续费（997/1000）
    function swapAforB(uint256 amountAIn, uint256 minBOut) external {
        // 检查输入金额大于 0
        require(amountAIn > 0, "Amount must be > 0");
        
        // 检查池子有足够的流动性
        require(reserveA > 0 && reserveB > 0, "Insufficient reserves");

        // 计算扣除手续费后的输入金额
        // 手续费 0.3%：amountAIn * 997 / 1000
        uint256 amountAInWithFee = amountAIn * 997 / 1000;
        
        // 使用恒定乘积公式计算输出数量
        // 公式：amountOut = (reserveOut * amountInWithFee) / (reserveIn + amountInWithFee)
        // 这是 AMM 的核心算法，保持 x * y = k 的恒定乘积
        uint256 amountBOut = reserveB * amountAInWithFee / (reserveA + amountAInWithFee);

        // 检查输出数量满足最小要求（滑点保护）
        // 如果实际输出小于 minBOut，交易回滚，保护用户免受大额滑点损失
        require(amountBOut >= minBOut, "Slippage too high");

        // 从用户账户收取 tokenA
        tokenA.transferFrom(msg.sender, address(this), amountAIn);
        
        // 向用户发送 tokenB
        tokenB.transfer(msg.sender, amountBOut);

        // 更新储备量
        // 注意：reserveA 增加的是扣除手续费后的金额
        reserveA += amountAInWithFee;
        reserveB -= amountBOut;

        // 触发交换事件
        emit TokensSwapped(msg.sender, address(tokenA), amountAIn, address(tokenB), amountBOut);
    }

    /// @notice 用 tokenB 交换 tokenA
    /// @param amountBIn 输入的 tokenB 数量
    /// @param minAOut 最小输出的 tokenA 数量（滑点保护）
    /// @dev 与 swapAforB 对称，只是方向相反
    function swapBforA(uint256 amountBIn, uint256 minAOut) external {
        // 检查输入金额大于 0
        require(amountBIn > 0, "Amount must be > 0");
        
        // 检查池子有足够的流动性
        require(reserveA > 0 && reserveB > 0, "Insufficient reserves");

        // 计算扣除手续费后的输入金额
        uint256 amountBInWithFee = amountBIn * 997 / 1000;
        
        // 使用恒定乘积公式计算输出数量
        uint256 amountAOut = reserveA * amountBInWithFee / (reserveB + amountBInWithFee);

        // 检查滑点
        require(amountAOut >= minAOut, "Slippage too high");

        // 收取 tokenB，发送 tokenA
        tokenB.transferFrom(msg.sender, address(this), amountBIn);
        tokenA.transfer(msg.sender, amountAOut);

        // 更新储备量
        reserveB += amountBInWithFee;
        reserveA -= amountAOut;

        // 触发交换事件
        emit TokensSwapped(msg.sender, address(tokenB), amountBIn, address(tokenA), amountAOut);
    }

    // ==================== 查询函数 ====================
    
    /// @notice 查看当前储备量
    /// @return 代币 A 的储备量
    /// @return 代币 B 的储备量
    /// @dev view 函数，不消耗 gas，用于前端查询
    function getReserves() external view returns (uint256, uint256) {
        return (reserveA, reserveB);
    }

    // ==================== 工具函数 ====================
    
    /// @notice 返回两个数中的较小值
    /// @param a 第一个数
    /// @param b 第二个数
    /// @return 较小的那个数
    /// @dev internal pure: 内部纯函数，不读取状态
    function min(uint256 a, uint256 b) internal pure returns (uint256) {
        return a < b ? a : b;
    }

    /// @notice 计算平方根（巴比伦算法）
    /// @param y 输入值
    /// @return z 平方根结果
    /// @dev 使用牛顿迭代法计算整数平方根
    /// @dev 用于首次添加流动性时计算 LP 代币数量
    function sqrt(uint256 y) internal pure returns (uint256 z) {
        if (y > 3) {
            z = y;
            uint256 x = y / 2 + 1;
            // 牛顿迭代：x_{n+1} = (y / x_n + x_n) / 2
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
        // 如果 y == 0，z 保持为 0
    }
}`:t===26?`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 使用 GitHub 链接导入 OpenZeppelin 合约，方便在 Remix 中直接使用
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC721/IERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/ReentrancyGuard.sol";

/// @title NFT 市场合约
/// @title NFT Marketplace
/// @dev 一个简单的 NFT 交易市场合约，支持挂单、购买、版税和市场费用
/// @dev 继承 ReentrancyGuard 防止重入攻击
contract NFTMarketplace is ReentrancyGuard {
    
    // ==================== 状态变量 ====================
    
    /// @notice 合约所有者地址
    /// @dev 拥有管理权限，可以修改市场费用等
    address public owner;
    
    /// @notice 市场手续费比例（以基点为单位）
    /// @dev 100 = 1%，10000 = 100%
    /// @dev 例如：250 表示 2.5% 的手续费
    uint256 public marketplaceFeePercent;
    
    /// @notice 市场手续费接收地址
    /// @dev 平台收取的手续费会发送到这个地址
    address public feeRecipient;

    /// @notice NFT 挂单信息结构体
    /// @dev 存储每个 NFT 的挂单详情
    struct Listing {
        address seller;           // 卖家地址
        address nftAddress;       // NFT 合约地址
        uint256 tokenId;          // NFT 代币 ID
        uint256 price;            // 售价（以 wei 为单位）
        address royaltyReceiver;  // 版税接收地址（通常是创作者）
        uint256 royaltyPercent;   // 版税比例（基点）
        bool isListed;            // 是否正在挂单中
    }

    /// @notice 挂单映射表
    /// @dev NFT合约地址 => TokenID => 挂单信息
    /// @dev 使用双重映射来定位每个 NFT 的挂单
    mapping(address => mapping(uint256 => Listing)) public listings;

    // ==================== 事件 ====================
    
    /// @notice NFT 挂单事件
    /// @param seller 卖家地址
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @param price 售价
    /// @param royaltyReceiver 版税接收地址
    /// @param royaltyPercent 版税比例
    event Listed(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 price,
        address royaltyReceiver,
        uint256 royaltyPercent
    );

    /// @notice NFT 购买事件
    /// @param buyer 买家地址
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @param price 成交价格
    /// @param seller 卖家地址
    /// @param royaltyReceiver 版税接收地址
    /// @param royaltyAmount 版税金额
    /// @param marketplaceFeeAmount 市场手续费金额
    event Purchase(
        address indexed buyer,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 price,
        address seller,
        address royaltyReceiver,
        uint256 royaltyAmount,
        uint256 marketplaceFeeAmount
    );

    /// @notice 取消挂单事件
    /// @param seller 卖家地址
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    event Unlisted(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId
    );

    /// @notice 费用更新事件
    /// @param newMarketplaceFee 新的市场手续费比例
    /// @param newFeeRecipient 新的手续费接收地址
    event FeeUpdated(
        uint256 newMarketplaceFee,
        address newFeeRecipient
    );

    // ==================== 构造函数 ====================
    
    /// @notice 创建 NFT 市场合约
    /// @param _marketplaceFeePercent 市场手续费比例（基点）
    /// @param _feeRecipient 手续费接收地址
    /// @dev 初始化合约时设置手续费参数
    constructor(uint256 _marketplaceFeePercent, address _feeRecipient) {
        // 检查手续费不超过 10%（1000 基点）
        require(_marketplaceFeePercent <= 1000, "Marketplace fee too high (max 10%)");
        // 检查手续费接收地址不为零地址
        require(_feeRecipient != address(0), "Fee recipient cannot be zero");

        owner = msg.sender;  // 设置合约所有者为部署者
        marketplaceFeePercent = _marketplaceFeePercent;
        feeRecipient = _feeRecipient;
    }

    // ==================== 修饰符 ====================
    
    /// @notice 仅所有者修饰符
    /// @dev 限制只有合约所有者可以调用某些函数
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    // ==================== 管理函数 ====================
    
    /// @notice 设置市场手续费比例
    /// @param _newFee 新的手续费比例（基点）
    /// @dev 只有合约所有者可以调用
    /// @dev 手续费不能超过 10%
    function setMarketplaceFeePercent(uint256 _newFee) external onlyOwner {
        require(_newFee <= 1000, "Marketplace fee too high");
        marketplaceFeePercent = _newFee;
        emit FeeUpdated(_newFee, feeRecipient);
    }

    /// @notice 设置手续费接收地址
    /// @param _newRecipient 新的接收地址
    /// @dev 只有合约所有者可以调用
    function setFeeRecipient(address _newRecipient) external onlyOwner {
        require(_newRecipient != address(0), "Invalid fee recipient");
        feeRecipient = _newRecipient;
        emit FeeUpdated(marketplaceFeePercent, _newRecipient);
    }

    // ==================== 核心功能 ====================
    
    /// @notice 挂单出售 NFT
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @param price 售价（wei）
    /// @param royaltyReceiver 版税接收地址
    /// @param royaltyPercent 版税比例（基点）
    /// @dev 卖家需要提前授权市场合约转移其 NFT
    function listNFT(
        address nftAddress,
        uint256 tokenId,
        uint256 price,
        address royaltyReceiver,
        uint256 royaltyPercent
    ) external {
        // 检查价格大于 0
        require(price > 0, "Price must be above zero");
        // 检查版税不超过 10%
        require(royaltyPercent <= 1000, "Max 10% royalty allowed");
        // 检查该 NFT 尚未挂单
        require(!listings[nftAddress][tokenId].isListed, "Already listed");

        // 获取 NFT 合约接口
        IERC721 nft = IERC721(nftAddress);
        // 检查调用者是 NFT 的所有者
        require(nft.ownerOf(tokenId) == msg.sender, "Not the owner");
        // 检查市场合约是否被授权转移该 NFT
        require(
            nft.getApproved(tokenId) == address(this) || nft.isApprovedForAll(msg.sender, address(this)),
            "Marketplace not approved"
        );

        // 创建挂单信息
        listings[nftAddress][tokenId] = Listing({
            seller: msg.sender,
            nftAddress: nftAddress,
            tokenId: tokenId,
            price: price,
            royaltyReceiver: royaltyReceiver,
            royaltyPercent: royaltyPercent,
            isListed: true
        });

        // 触发挂单事件
        emit Listed(msg.sender, nftAddress, tokenId, price, royaltyReceiver, royaltyPercent);
    }

    /// @notice 购买 NFT
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @dev 买家需要发送正确的 ETH 金额
    /// @dev 使用 nonReentrant 防止重入攻击
    function buyNFT(address nftAddress, uint256 tokenId) external payable nonReentrant {
        // 获取挂单信息
        Listing memory item = listings[nftAddress][tokenId];
        // 检查 NFT 正在挂单中
        require(item.isListed, "Not listed");
        // 检查发送的 ETH 金额正确
        require(msg.value == item.price, "Incorrect ETH sent");
        // 检查版税 + 市场费不超过 100%
        require(
            item.royaltyPercent + marketplaceFeePercent <= 10000,
            "Fees exceed 100%"
        );

        // 计算市场手续费
        uint256 feeAmount = (msg.value * marketplaceFeePercent) / 10000;
        // 计算版税金额
        uint256 royaltyAmount = (msg.value * item.royaltyPercent) / 10000;
        // 计算卖家实际收到的金额
        uint256 sellerAmount = msg.value - feeAmount - royaltyAmount;

        // ========== 资金分配 ==========
        
        // 1. 支付市场手续费
        // 使用 call 替代已弃用的 transfer
        if (feeAmount > 0) {
            (bool sent, ) = payable(feeRecipient).call{value: feeAmount}("");
            require(sent, "Fee transfer failed");
        }

        // 2. 支付创作者版税
        if (royaltyAmount > 0 && item.royaltyReceiver != address(0)) {
            (bool sent, ) = payable(item.royaltyReceiver).call{value: royaltyAmount}("");
            require(sent, "Royalty transfer failed");
        }

        // 3. 支付卖家
        (bool sent, ) = payable(item.seller).call{value: sellerAmount}("");
        require(sent, "Seller transfer failed");

        // ========== NFT 转移 ==========
        
        // 将 NFT 从卖家转移给买家
        IERC721(item.nftAddress).safeTransferFrom(item.seller, msg.sender, item.tokenId);

        // 删除挂单记录
        delete listings[nftAddress][tokenId];

        // 触发购买事件
        emit Purchase(
            msg.sender,
            nftAddress,
            tokenId,
            msg.value,
            item.seller,
            item.royaltyReceiver,
            royaltyAmount,
            feeAmount
        );
    }

    /// @notice 取消挂单
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @dev 只有卖家本人可以取消自己的挂单
    function cancelListing(address nftAddress, uint256 tokenId) external {
        Listing memory item = listings[nftAddress][tokenId];
        // 检查 NFT 正在挂单中
        require(item.isListed, "Not listed");
        // 检查调用者是卖家
        require(item.seller == msg.sender, "Not the seller");

        // 删除挂单记录
        delete listings[nftAddress][tokenId];
        // 触发取消挂单事件
        emit Unlisted(msg.sender, nftAddress, tokenId);
    }

    // ==================== 查询函数 ====================
    
    /// @notice 获取 NFT 的挂单信息
    /// @param nftAddress NFT 合约地址
    /// @param tokenId NFT 代币 ID
    /// @return 挂单信息结构体
    /// @dev view 函数，不消耗 gas
    function getListing(address nftAddress, uint256 tokenId) external view returns (Listing memory) {
        return listings[nftAddress][tokenId];
    }

    // ==================== 回退函数 ====================
    
    /// @notice 接收 ETH 的回退函数
    /// @dev 拒绝直接接收 ETH，必须通过 buyNFT 函数
    receive() external payable {
        revert("Direct ETH not accepted");
    }

    /// @notice 未知函数调用的回退函数
    /// @dev 拒绝所有未知函数调用
    fallback() external payable {
        revert("Unknown function");
    }
}`:t===27?`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 使用 GitHub 链接导入 OpenZeppelin 合约，方便在 Remix 中直接使用
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/math/SafeCast.sol";

// ==================== 自定义接口 ====================

/// @title ERC20 元数据接口
/// @dev 用于获取代币的小数位数、名称和符号
/// @dev 标准 IERC20 不包含这些信息，需要扩展接口
interface IERC20Metadata is IERC20 {
    /// @notice 获取代币小数位数
    /// @return 小数位数（通常为 18）
    function decimals() external view returns (uint8);
    
    /// @notice 获取代币名称
    /// @return 代币全称
    function name() external view returns (string memory);
    
    /// @notice 获取代币符号
    /// @return 代币简称（如 ETH、USDC）
    function symbol() external view returns (string memory);
}

/// @title 收益耕作合约
/// @title Yield Farming Platform
/// @dev 用户质押代币以随时间赚取奖励
/// @dev 支持紧急提取和管理员补充奖励
/// @dev 使用奖励债务（reward debt）模式计算收益
contract YieldFarming is ReentrancyGuard {
    
    // 使用 SafeCast 库进行安全的类型转换
    using SafeCast for uint256;

    // ==================== 状态变量 ====================
    
    /// @notice 质押代币合约接口
    /// @dev 用户质押的这种代币
    IERC20 public stakingToken;
    
    /// @notice 奖励代币合约接口
    /// @dev 用户获得的奖励是这种代币
    IERC20 public rewardToken;

    /// @notice 每秒分配的奖励数量
    /// @dev 这是全局奖励速率，不是每用户的
    /// @dev 实际奖励按质押比例分配
    uint256 public rewardRatePerSecond;

    /// @notice 合约所有者地址
    /// @dev 拥有管理权限，可以补充奖励
    address public owner;

    /// @notice 质押代币的小数位数
    /// @dev 用于计算奖励时的精度调整
    /// @dev 通常为 18，但某些代币可能不同（如 USDC 是 6）
    uint8 public stakingTokenDecimals;

    /// @notice 质押者信息结构体
    /// @dev 记录每个用户的质押状态和奖励信息
    struct StakerInfo {
        uint256 stakedAmount;    // 已质押的代币数量
        uint256 rewardDebt;      // 已累积但尚未领取的奖励
        uint256 lastUpdate;      // 上次更新奖励的时间戳
    }

    /// @notice 质押者信息映射
    /// @dev 用户地址 => 质押信息
    mapping(address => StakerInfo) public stakers;

    // ==================== 事件 ====================
    
    /// @notice 质押事件
    /// @param user 用户地址
    /// @param amount 质押数量
    event Staked(address indexed user, uint256 amount);
    
    /// @notice 取消质押事件
    /// @param user 用户地址
    /// @param amount 取消质押数量
    event Unstaked(address indexed user, uint256 amount);
    
    /// @notice 领取奖励事件
    /// @param user 用户地址
    /// @param amount 奖励数量
    event RewardClaimed(address indexed user, uint256 amount);
    
    /// @notice 紧急提取事件
    /// @param user 用户地址
    /// @param amount 提取数量
    event EmergencyWithdraw(address indexed user, uint256 amount);
    
    /// @notice 补充奖励事件
    /// @param owner 管理员地址
    /// @param amount 补充的奖励数量
    event RewardRefilled(address indexed owner, uint256 amount);

    // ==================== 修饰符 ====================
    
    /// @notice 仅所有者修饰符
    /// @dev 限制只有合约所有者可以调用
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    // ==================== 构造函数 ====================
    
    /// @notice 创建收益耕作合约
    /// @param _stakingToken 质押代币合约地址
    /// @param _rewardToken 奖励代币合约地址
    /// @param _rewardRatePerSecond 每秒奖励数量
    /// @dev 尝试获取质押代币的小数位数，失败则默认为 18
    constructor(
        address _stakingToken,
        address _rewardToken,
        uint256 _rewardRatePerSecond
    ) {
        stakingToken = IERC20(_stakingToken);
        rewardToken = IERC20(_rewardToken);
        rewardRatePerSecond = _rewardRatePerSecond;
        owner = msg.sender;

        // 尝试获取质押代币的小数位数
        // 使用 try-catch 防止某些代币没有实现 decimals()
        try IERC20Metadata(_stakingToken).decimals() returns (uint8 decimals) {
            stakingTokenDecimals = decimals;
        } catch (bytes memory) {
            // 如果获取失败，默认为 18 位小数（标准 ERC20）
            stakingTokenDecimals = 18;
        }
    }

    // ==================== 核心功能 ====================
    
    /// @notice 质押代币
    /// @param amount 要质押的数量
    /// @dev 用户需要提前授权合约使用其代币
    /// @dev 质押后开始累积奖励
    function stake(uint256 amount) external nonReentrant {
        // 检查质押数量大于 0
        require(amount > 0, "Cannot stake 0");

        // 更新用户奖励（计算从上次更新到现在的奖励）
        updateRewards(msg.sender);

        // 从用户账户转移质押代币到合约
        stakingToken.transferFrom(msg.sender, address(this), amount);
        
        // 增加用户的质押数量
        stakers[msg.sender].stakedAmount += amount;

        // 触发质押事件
        emit Staked(msg.sender, amount);
    }

    /// @notice 取消质押代币
    /// @param amount 要取消质押的数量
    /// @dev 取消质押时会自动更新奖励
    function unstake(uint256 amount) external nonReentrant {
        // 检查取消质押数量大于 0
        require(amount > 0, "Cannot unstake 0");
        // 检查用户有足够的质押数量
        require(stakers[msg.sender].stakedAmount >= amount, "Not enough staked");

        // 更新用户奖励
        updateRewards(msg.sender);

        // 减少用户的质押数量
        stakers[msg.sender].stakedAmount -= amount;
        
        // 将质押代币返还给用户
        stakingToken.transfer(msg.sender, amount);

        // 触发取消质押事件
        emit Unstaked(msg.sender, amount);
    }

    /// @notice 领取累积的奖励
    /// @dev 将 rewardDebt 中累积的奖励转给用户
    function claimRewards() external nonReentrant {
        // 更新用户奖励（计算最新奖励）
        updateRewards(msg.sender);

        // 获取可领取的奖励数量
        uint256 reward = stakers[msg.sender].rewardDebt;
        
        // 检查有奖励可领取
        require(reward > 0, "No rewards to claim");
        // 检查合约有足够的奖励代币余额
        require(rewardToken.balanceOf(address(this)) >= reward, "Insufficient reward token balance");

        // 清空用户的奖励债务
        stakers[msg.sender].rewardDebt = 0;
        
        // 将奖励代币转给用户
        rewardToken.transfer(msg.sender, reward);

        // 触发领取奖励事件
        emit RewardClaimed(msg.sender, reward);
    }

    /// @notice 紧急提取质押代币
    /// @dev 紧急情况下可以不领取奖励直接取回质押
    /// @dev 这会清空用户的所有奖励
    function emergencyWithdraw() external nonReentrant {
        // 获取用户的质押数量
        uint256 amount = stakers[msg.sender].stakedAmount;
        
        // 检查有质押可取
        require(amount > 0, "Nothing staked");

        // 清空用户的所有状态（放弃奖励）
        stakers[msg.sender].stakedAmount = 0;
        stakers[msg.sender].rewardDebt = 0;
        stakers[msg.sender].lastUpdate = block.timestamp;

        // 将质押代币返还给用户
        stakingToken.transfer(msg.sender, amount);

        // 触发紧急提取事件
        emit EmergencyWithdraw(msg.sender, amount);
    }

    // ==================== 管理功能 ====================
    
    /// @notice 补充奖励代币
    /// @param amount 要补充的奖励数量
    /// @dev 只有合约所有者可以调用
    /// @dev 需要提前授权合约使用奖励代币
    function refillRewards(uint256 amount) external onlyOwner {
        // 从所有者账户转移奖励代币到合约
        rewardToken.transferFrom(msg.sender, address(this), amount);

        // 触发补充奖励事件
        emit RewardRefilled(msg.sender, amount);
    }

    // ==================== 内部函数 ====================
    
    /// @notice 更新用户的奖励
    /// @param user 用户地址
    /// @dev 内部函数，在质押、取消质押、领取奖励时调用
    /// @dev 计算从 lastUpdate 到现在应得的奖励
    function updateRewards(address user) internal {
        StakerInfo storage staker = stakers[user];

        // 只有当用户有质押时才计算奖励
        if (staker.stakedAmount > 0) {
            // 计算时间差（秒）
            uint256 timeDiff = block.timestamp - staker.lastUpdate;
            
            // 计算奖励倍数（用于精度调整）
            // 10^decimals 用于将计算结果标准化
            uint256 rewardMultiplier = 10 ** stakingTokenDecimals;
            
            // 计算待领取的奖励
            // 公式：时间差 * 每秒奖励 * 质押数量 / 精度倍数
            uint256 pendingReward = (timeDiff * rewardRatePerSecond * staker.stakedAmount) / rewardMultiplier;
            
            // 累加到用户的奖励债务
            staker.rewardDebt += pendingReward;
        }

        // 更新上次计算时间
        staker.lastUpdate = block.timestamp;
    }

    // ==================== 查询函数 ====================
    
    /// @notice 查看用户的待领取奖励
    /// @param user 用户地址
    /// @return 待领取的奖励数量
    /// @dev view 函数，不消耗 gas
    /// @dev 包含已累积的 rewardDebt 和当前正在累积的奖励
    function pendingRewards(address user) external view returns (uint256) {
        StakerInfo memory staker = stakers[user];

        // 从 rewardDebt 开始
        uint256 pendingReward = staker.rewardDebt;

        // 如果用户有质押，计算从 lastUpdate 到现在的奖励
        if (staker.stakedAmount > 0) {
            uint256 timeDiff = block.timestamp - staker.lastUpdate;
            uint256 rewardMultiplier = 10 ** stakingTokenDecimals;
            pendingReward += (timeDiff * rewardRatePerSecond * staker.stakedAmount) / rewardMultiplier;
        }

        return pendingReward;
    }

    /// @notice 查看质押代币的小数位数
    /// @return 小数位数
    /// @dev view 函数，不消耗 gas
    function getStakingTokenDecimals() external view returns (uint8) {
        return stakingTokenDecimals;
    }
}`:t===28?`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 使用 GitHub 链接导入 OpenZeppelin 合约，方便在 Remix 中直接使用
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/IERC20.sol";

/// @title 去中心化治理合约
/// @title Decentralized Governance
/// @dev 一个基于代币持有量的 DAO 治理合约
/// @dev 支持创建提案、投票、执行提案等功能
/// @dev 包含时间锁机制，确保提案有足够时间被审查
contract DecentralizedGovernance is ReentrancyGuard {
    
    // ==================== 状态变量 ====================
    
    /// @notice 治理代币合约接口
    /// @dev 用于确定投票权（1 代币 = 1 票）
    IERC20 public governanceToken;
    
    /// @notice 提案总数计数器
    /// @dev 每次创建新提案时递增
    uint256 public proposalCount;

    // ==================== 常量配置 ====================
    
    /// @notice 投票期时长
    /// @dev 提案创建后的投票持续时间
    uint256 public constant VOTING_PERIOD = 3 days;
    
    /// @notice 时间锁定期时长
    /// @dev 提案通过后到可以执行的等待时间
    /// @dev 给用户时间审查通过的提案并采取行动
    uint256 public constant TIMELOCK_PERIOD = 2 days;
    
    /// @notice 法定人数百分比
    /// @dev 提案通过所需的最小投票参与率
    /// @dev 10 表示需要至少 10% 的总代币供应量参与投票
    uint256 public constant QUORUM_PERCENTAGE = 10;
    
    /// @notice 创建提案所需的押金
    /// @dev 100 个代币（假设 18 位小数）
    /// @dev 用于防止垃圾提案，提案成功执行后退还
    uint256 public constant PROPOSAL_DEPOSIT = 100 * 10**18;

    // ==================== 数据结构 ====================
    
    /// @notice 提案结构体
    /// @dev 存储提案的所有信息
    struct Proposal {
        uint256 id;                    // 提案唯一标识符
        address proposer;              // 提案创建者地址
        string description;            // 提案描述文本
        uint256 deadline;              // 投票截止时间戳
        uint256 votesFor;              // 赞成票总数
        uint256 votesAgainst;          // 反对票总数
        bool executed;                 // 是否已执行
        bool cancelled;                // 是否已取消
        uint256 executionTime;         // 可执行时间（通过 + 时间锁）
        bytes[] executionData;         // 要执行的调用数据数组
        address[] executionTargets;    // 要调用的目标合约地址数组
        mapping(address => bool) hasVoted;  // 记录谁已经投过票
    }
    
    /// @notice 提案映射表
    /// @dev 提案 ID => 提案信息
    mapping(uint256 => Proposal) public proposals;

    // ==================== 事件 ====================
    
    /// @notice 提案创建事件
    /// @param proposalId 提案 ID
    /// @param proposer 提案创建者
    /// @param description 提案描述
    event ProposalCreated(uint256 indexed proposalId, address indexed proposer, string description);
    
    /// @notice 投票事件
    /// @param proposalId 提案 ID
    /// @param voter 投票者地址
    /// @param support 是否赞成（true=赞成，false=反对）
    /// @param weight 投票权重（代币数量）
    event Voted(uint256 indexed proposalId, address indexed voter, bool support, uint256 weight);
    
    /// @notice 提案执行事件
    /// @param proposalId 被执行的提案 ID
    event ProposalExecuted(uint256 indexed proposalId);
    
    /// @notice 提案取消事件
    /// @param proposalId 被取消的提案 ID
    event ProposalCancelled(uint256 indexed proposalId);

    // ==================== 构造函数 ====================
    
    /// @notice 创建治理合约
    /// @param _governanceToken 治理代币合约地址
    /// @dev 治理代币用于确定投票权
    constructor(address _governanceToken) {
        governanceToken = IERC20(_governanceToken);
    }

    // ==================== 核心功能 ====================
    
    /// @notice 创建新提案
    /// @param _description 提案描述
    /// @param _targets 要调用的目标合约地址数组
    /// @param _data 每个目标合约的调用数据数组
    /// @return 新创建的提案 ID
    /// @dev 需要支付 PROPOSAL_DEPOSIT 押金防止垃圾提案
    /// @dev targets 和 data 数组长度必须相同
    function createProposal(
        string memory _description,
        address[] memory _targets,
        bytes[] memory _data
    ) external returns (uint256) {
        // 1. 收取押金防止垃圾提案
        // 提案者需要授权合约转移其代币
        require(
            governanceToken.transferFrom(msg.sender, address(this), PROPOSAL_DEPOSIT),
            "Deposit failed"
        );
        
        // 2. 创建提案
        proposalCount++;
        Proposal storage newProposal = proposals[proposalCount];
        newProposal.id = proposalCount;
        newProposal.proposer = msg.sender;
        newProposal.description = _description;
        // 设置投票截止时间为当前时间 + 投票期
        newProposal.deadline = block.timestamp + VOTING_PERIOD;
        newProposal.executionTargets = _targets;
        newProposal.executionData = _data;
        
        // 触发提案创建事件
        emit ProposalCreated(proposalCount, msg.sender, _description);
        return proposalCount;
    }

    /// @notice 对提案进行投票
    /// @param _proposalId 要投票的提案 ID
    /// @param _support 是否赞成（true=赞成，false=反对）
    /// @dev 投票权重 = 投票者持有的治理代币数量
    /// @dev 每个地址只能投一次票
    function vote(uint256 _proposalId, bool _support) external {
        Proposal storage proposal = proposals[_proposalId];
        
        // 1. 验证检查
        // 检查投票期是否未结束
        require(block.timestamp < proposal.deadline, "Voting period ended");
        // 检查用户是否未投过票
        require(!proposal.hasVoted[msg.sender], "Already voted");
        // 检查提案是否未被执行
        require(!proposal.executed, "Already executed");
        
        // 2. 获取投票者的代币余额作为投票权重
        // 1 代币 = 1 票，代币越多投票权越大
        uint256 weight = governanceToken.balanceOf(msg.sender);
        require(weight > 0, "No voting power");
        
        // 3. 记录投票
        proposal.hasVoted[msg.sender] = true;
        
        // 根据支持/反对分别累加票数
        if (_support) {
            proposal.votesFor += weight;
        } else {
            proposal.votesAgainst += weight;
        }
        
        // 触发投票事件
        emit Voted(_proposalId, msg.sender, _support, weight);
    }

    /// @notice 最终确定提案（进入时间锁）
    /// @param _proposalId 要最终确定的提案 ID
    /// @dev 任何人都可以调用，不限于提案创建者
    /// @dev 检查投票结果和法定人数
    function finalize(uint256 _proposalId) external {
        Proposal storage proposal = proposals[_proposalId];
        
        // 检查投票期已结束
        require(block.timestamp >= proposal.deadline, "Voting still active");
        // 检查提案未被执行
        require(!proposal.executed, "Already executed");
        
        // 计算法定人数
        // 法定人数 = 总供应量 × 法定人数百分比 / 100
        uint256 totalSupply = governanceToken.totalSupply();
        uint256 quorumRequired = (totalSupply * QUORUM_PERCENTAGE) / 100;
        uint256 totalVotes = proposal.votesFor + proposal.votesAgainst;
        
        // 检查是否达到法定人数（足够多的人参与了投票）
        require(totalVotes >= quorumRequired, "Quorum not met");
        // 检查赞成票是否多于反对票
        require(proposal.votesFor > proposal.votesAgainst, "Proposal rejected");
        
        // 设置执行时间（当前时间 + 时间锁定期）
        proposal.executionTime = block.timestamp + TIMELOCK_PERIOD;
    }

    /// @notice 执行已通过时间锁的提案
    /// @param _proposalId 要执行的提案 ID
    /// @dev 使用 nonReentrant 防止重入攻击
    /// @dev 执行所有预设的合约调用
    function execute(uint256 _proposalId) external nonReentrant {
        Proposal storage proposal = proposals[_proposalId];
        
        // 检查提案已通过 finalize（executionTime > 0）
        require(proposal.executionTime > 0, "Not finalized");
        // 检查时间锁已过期
        require(block.timestamp >= proposal.executionTime, "Timelock active");
        // 检查提案未被执行
        require(!proposal.executed, "Already executed");
        
        // 标记提案为已执行
        proposal.executed = true;
        
        // 执行所有预设的调用
        // 遍历所有目标地址和调用数据
        for (uint256 i = 0; i < proposal.executionTargets.length; i++) {
            // 使用 low-level call 执行调用
            (bool success, ) = proposal.executionTargets[i].call(proposal.executionData[i]);
            require(success, "Execution failed");
        }
        
        // 将押金退还给提案创建者
        governanceToken.transfer(proposal.proposer, PROPOSAL_DEPOSIT);
        
        // 触发提案执行事件
        emit ProposalExecuted(_proposalId);
    }
}

// ==================== 合约设计要点说明 ====================
//
// 1. DAO 治理核心概念:
//    - 去中心化自治组织（DAO）: 由代码和代币持有者共同管理的组织
//    - 提案（Proposal）: 社区成员提出的改进或行动建议
//    - 投票权（Voting Power）: 由治理代币持有量决定
//    - 法定人数（Quorum）: 提案通过所需的最小参与率
//    - 时间锁（Timelock）: 提案通过后到执行的延迟期
//
// 2. 提案生命周期:
//    
//    创建提案 → 投票期（3天） → 最终确定 → 时间锁（2天） → 执行
//       ↓
//    支付押金
//
//    各阶段说明:
//    - 创建: 支付押金，设置提案内容和执行操作
//    - 投票期: 代币持有者投票（赞成/反对）
//    - 最终确定: 检查是否达到法定人数和多数赞成
//    - 时间锁: 给用户时间审查和准备（如需要退出）
//    - 执行: 执行提案中的操作，退还押金
//
// 3. 投票机制:
//    - 1 代币 = 1 票（线性投票）
//    - 代币余额快照在投票时获取
//    - 每个地址只能投一次票
//    - 投票不可撤销或更改
//
// 4. 使用流程:
//    创建提案:
//    1. 准备提案描述和执行操作（targets + data）
//    2. 授权合约使用押金: governanceToken.approve(govAddress, 100e18)
//    3. 调用 createProposal(description, targets, data)
//    
//    投票:
//    1. 持有治理代币
//    2. 调用 vote(proposalId, support) 投票
//    
//    执行提案:
//    1. 等待投票期结束
//    2. 任何人调用 finalize(proposalId) 进入时间锁
//    3. 等待时间锁过期（2天）
//    4. 任何人调用 execute(proposalId) 执行
//
// 5. 安全机制:
//    - ReentrancyGuard: 防止执行阶段的重入攻击
//    - 时间锁: 给用户时间审查通过的提案
//    - 押金机制: 防止垃圾提案
//    - 法定人数: 确保足够参与度
//    - 多数决: 需要赞成票多于反对票
//
// 6. 与真实 DAO 的区别:
//    - 本合约使用简单的时间锁
//    - 真实 DAO（如 Compound、Uniswap）有更复杂的委托投票机制
//    - 真实 DAO 通常有提案阈值（需要持有一定数量代币才能提案）
//    - 真实 DAO 可能有投票委托（delegation）功能
//
// 7. 潜在问题:
//    - 没有取消提案的功能
//    - 投票期间代币转移不影响已投票数（可能被利用）
//    - 没有紧急暂停功能
//    - 执行失败时押金仍会被退还
//
// 8. 关键知识点:
//    - DAO 治理模型
//    - 时间锁安全机制
//    - 低级别调用（low-level call）
//    - 代币治理模式
//`:t===29?`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 使用 GitHub 链接导入 OpenZeppelin 合约，方便在 Remix 中直接使用
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/access/Ownable.sol";

// ==================== Mock Chainlink 预言机 ====================

/// @title Mock Chainlink 价格预言机
/// @dev 模拟 Chainlink AggregatorV3Interface 接口
/// @dev 用于本地测试，管理员可以手动设置价格
contract MockPriceFeed {
    /// @notice 价格数据结构
    struct RoundData {
        uint80 roundId;
        int256 answer;
        uint256 startedAt;
        uint256 updatedAt;
        uint80 answeredInRound;
    }
    
    RoundData public latestRoundDataStored;
    uint8 public decimals = 8;
    address public admin;
    
    constructor(int256 _initialPrice) {
        admin = msg.sender;
        updatePrice(_initialPrice);
    }
    
    function updatePrice(int256 _price) public {
        require(msg.sender == admin, "Only admin");
        latestRoundDataStored = RoundData({
            roundId: latestRoundDataStored.roundId + 1,
            answer: _price,
            startedAt: block.timestamp,
            updatedAt: block.timestamp,
            answeredInRound: latestRoundDataStored.roundId + 1
        });
    }
    
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    ) {
        return (
            latestRoundDataStored.roundId,
            latestRoundDataStored.answer,
            latestRoundDataStored.startedAt,
            latestRoundDataStored.updatedAt,
            latestRoundDataStored.answeredInRound
        );
    }
}

interface AggregatorV3Interface {
    function decimals() external view returns (uint8);
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}

// ==================== 稳定币合约 ====================

/// @title 简单稳定币合约
/// @dev 一个超额抵押的稳定币系统，以 ETH 作为抵押品
/// @dev 抵押率要求 150%，即每铸造 1 美元稳定币需要 1.5 美元 ETH 抵押
contract SimpleStablecoin is ERC20, ReentrancyGuard, Ownable {
    
    AggregatorV3Interface internal priceFeed;
    uint256 public constant COLLATERAL_RATIO = 150;
    uint256 public constant LIQUIDATION_BONUS = 5;
    mapping(address => uint256) public collateralDeposited;

    event CollateralDeposited(address indexed user, uint256 amount);
    event StablecoinMinted(address indexed user, uint256 amount);
    event StablecoinBurned(address indexed user, uint256 amount);
    event CollateralWithdrawn(address indexed user, uint256 amount);
    event Liquidation(address indexed liquidator, address indexed user, uint256 debtPaid, uint256 collateralSeized);

    constructor(address _priceFeedAddress) 
        ERC20("StableUSD", "SUSD") 
        Ownable(msg.sender) 
    {
        priceFeed = AggregatorV3Interface(_priceFeedAddress);
    }

    /// @notice 存入 ETH 作为抵押品
    function depositCollateral() external payable {
        require(msg.value > 0, "Must deposit some ETH");
        collateralDeposited[msg.sender] += msg.value;
        emit CollateralDeposited(msg.sender, msg.value);
    }

    /// @notice 铸造稳定币
    /// @param amountToMint 要铸造的稳定币数量
    function mintStablecoin(uint256 amountToMint) external nonReentrant {
        uint256 currentEthValue = getCollateralValueInUsd(msg.sender);
        uint256 currentDebt = balanceOf(msg.sender);
        uint256 maxMintable = (currentEthValue * 100) / COLLATERAL_RATIO;
        
        require(currentDebt + amountToMint <= maxMintable, "Not enough collateral!");
        _mint(msg.sender, amountToMint);
        emit StablecoinMinted(msg.sender, amountToMint);
    }

    /// @notice 销毁稳定币
    function burnStablecoin(uint256 amountToBurn) external nonReentrant {
        _burn(msg.sender, amountToBurn);
        emit StablecoinBurned(msg.sender, amountToBurn);
    }

    /// @notice 提取抵押品
    function withdrawCollateral(uint256 amount) external nonReentrant {
        uint256 currentDebt = balanceOf(msg.sender);
        uint256 remainingCollateral = collateralDeposited[msg.sender] - amount;
        uint256 remainingValue = (remainingCollateral * getEthPrice()) / 1e18;
        uint256 requiredCollateralValue = (currentDebt * COLLATERAL_RATIO) / 100;

        require(remainingValue >= requiredCollateralValue, "Health factor too low");
        collateralDeposited[msg.sender] -= amount;
        
        (bool sent, ) = payable(msg.sender).call{value: amount}("");
        require(sent, "ETH transfer failed");
        emit CollateralWithdrawn(msg.sender, amount);
    }

    /// @notice 清算不健康的头寸
    function liquidate(address user) external nonReentrant {
        uint256 collateralValue = getCollateralValueInUsd(user);
        uint256 debtValue = balanceOf(user);
        
        if (debtValue == 0) return;

        uint256 healthFactor = (collateralValue * 100) / debtValue;
        require(healthFactor < COLLATERAL_RATIO, "Position is healthy");
        
        _burn(msg.sender, debtValue);
        uint256 collateralToTransfer = collateralDeposited[user];
        collateralDeposited[user] = 0;
        
        (bool sent, ) = payable(msg.sender).call{value: collateralToTransfer * (100 + LIQUIDATION_BONUS) / 100}("");
        require(sent, "Collateral transfer failed");
        emit Liquidation(msg.sender, user, debtValue, collateralToTransfer);
    }

    /// @notice 获取 ETH 当前价格（18位小数）
    function getEthPrice() public view returns (uint256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();
        if (price < 0) return 0;
        return uint256(price) * 1e10; // 8位 -> 18位
    }

    /// @notice 获取用户抵押品的美元价值
    function getCollateralValueInUsd(address user) public view returns (uint256) {
        uint256 ethAmount = collateralDeposited[user];
        uint256 ethPrice = getEthPrice();
        return (ethAmount * ethPrice) / 1e18;
    }
    
    /// @notice 获取用户的健康因子
    function getHealthFactor(address user) external view returns (uint256) {
        uint256 collateralValue = getCollateralValueInUsd(user);
        uint256 debtValue = balanceOf(user);
        if (debtValue == 0) return type(uint256).max;
        return (collateralValue * 100) / debtValue;
    }
    
    /// @notice 获取最大可铸造金额
    function getMaxMintable(address user) external view returns (uint256) {
        uint256 collateralValue = getCollateralValueInUsd(user);
        return (collateralValue * 100) / COLLATERAL_RATIO;
    }
}

// ==================== 合约设计要点 ====================
// 1. 超额抵押: 抵押品价值 > 铸造的稳定币价值
// 2. 抵押率: 抵押品价值 / 债务价值（要求 150%）
// 3. 清算机制: 健康因子 < 150% 时可被清算
// 4. 预言机: 使用 Chainlink 获取 ETH/USD 价格
// 5. 小数转换: 8位 -> 18位需要乘以 1e10
`:t===30?`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 使用 GitHub 链接导入 OpenZeppelin 合约，方便在 Remix 中直接使用
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.0/contracts/utils/ReentrancyGuard.sol";

/// @title Mini DEX 交易对合约
/// @dev 一个简化的 Uniswap V2 风格 AMM 交易对合约
/// @dev 实现恒定乘积做市商（CPMM）算法
/// @dev 继承 ERC20 作为流动性代币（LP Token）
contract MiniDexPair is ERC20, ReentrancyGuard {
    
    // ==================== 状态变量 ====================
    
    /// @notice 代币 0 的合约地址
    /// @dev 按地址排序后较小的那个代币
    address public token0;
    
    /// @notice 代币 1 的合约地址
    /// @dev 按地址排序后较大的那个代币
    address public token1;

    /// @notice 代币 0 的储备量
    /// @dev 记录在合约中的 token0 数量
    uint256 public reserve0;
    
    /// @notice 代币 1 的储备量
    /// @dev 记录在合约中的 token1 数量
    uint256 public reserve1;

    // ==================== 事件 ====================
    
    /// @notice 储备量更新事件
    /// @param reserve0 新的 token0 储备量
    /// @param reserve1 新的 token1 储备量
    event Sync(uint256 reserve0, uint256 reserve1);
    
    /// @notice 交换事件
    /// @param sender 调用者地址
    /// @param amount0In 输入的 token0 数量
    /// @param amount1In 输入的 token1 数量
    /// @param amount0Out 输出的 token0 数量
    /// @param amount1Out 输出的 token1 数量
    /// @param to 接收代币的地址
    event Swap(
        address indexed sender,
        uint256 amount0In,
        uint256 amount1In,
        uint256 amount0Out,
        uint256 amount1Out,
        address indexed to
    );

    // ==================== 构造函数 ====================
    
    /// @notice 创建交易对合约
    /// @param _token0 代币 0 地址（排序后较小）
    /// @param _token1 代币 1 地址（排序后较大）
    /// @dev 初始化 ERC20 作为 LP 代币，名称为 "MiniDex-LP"，符号为 "MDX-LP"
    constructor(address _token0, address _token1) ERC20("MiniDex-LP", "MDX-LP") {
        token0 = _token0;
        token1 = _token1;
    }

    // ==================== 流动性管理 ====================
    
    /// @notice 添加流动性
    /// @param amount0 要添加的 token0 数量
    /// @param amount1 要添加的 token1 数量
    /// @return liquidity 铸造的 LP 代币数量
    /// @dev 用户需要提前授权合约使用其代币
    function addLiquidity(uint256 amount0, uint256 amount1) external returns (uint256 liquidity) {
        // 从用户账户转移代币到合约
        // transferFrom 需要用户提前 approve
        IERC20(token0).transferFrom(msg.sender, address(this), amount0);
        IERC20(token1).transferFrom(msg.sender, address(this), amount1);

        // 获取当前 LP 代币总供应量
        uint256 totalSupply = totalSupply();
        
        if (totalSupply == 0) {
            // 首次添加流动性：使用几何平均数
            // 公式：liquidity = sqrt(amount0 * amount1)
            // 这样可以确保不同比例的池子有公平的 LP 代币分配
            liquidity = sqrt(amount0 * amount1);
        } else {
            // 后续添加流动性：按比例分配
            // 取两个代币按比例计算的最小值，防止套利
            // 公式：liquidity = min(amount0/reserve0, amount1/reserve1) * totalSupply
            liquidity = min(
                (amount0 * totalSupply) / reserve0,
                (amount1 * totalSupply) / reserve1
            );
        }

        // 检查铸造的流动性大于 0
        require(liquidity > 0, "Insufficient liquidity minted");
        
        // 铸造 LP 代币给提供者
        _mint(msg.sender, liquidity);
        
        // 更新储备量
        _update(IERC20(token0).balanceOf(address(this)), IERC20(token1).balanceOf(address(this)));
    }

    /// @notice 移除流动性
    /// @param liquidity 要销毁的 LP 代币数量
    /// @return amount0 取出的 token0 数量
    /// @return amount1 取出的 token1 数量
    /// @dev 用户需要持有 LP 代币才能移除流动性
    function removeLiquidity(uint256 liquidity) external returns (uint256 amount0, uint256 amount1) {
        // 获取合约当前的代币余额
        uint256 balance0 = IERC20(token0).balanceOf(address(this));
        uint256 balance1 = IERC20(token1).balanceOf(address(this));
        
        // 获取 LP 代币总供应量
        uint256 totalSupply = totalSupply();

        // 计算用户可以取出的代币数量
        // 公式：取出数量 = (LP 数量 / 总 LP 数量) * 合约余额
        amount0 = (liquidity * balance0) / totalSupply;
        amount1 = (liquidity * balance1) / totalSupply;

        // 检查计算出的数量大于 0
        require(amount0 > 0 && amount1 > 0, "Insufficient amount");

        // 销毁用户的 LP 代币
        _burn(msg.sender, liquidity);
        
        // 将代币转还给用户
        IERC20(token0).transfer(msg.sender, amount0);
        IERC20(token1).transfer(msg.sender, amount1);

        // 更新储备量
        _update(IERC20(token0).balanceOf(address(this)), IERC20(token1).balanceOf(address(this)));
    }

    // ==================== 代币交换 ====================
    
    /// @notice 交换代币
    /// @param amount0Out 要输出的 token0 数量
    /// @param amount1Out 要输出的 token1 数量
    /// @param to 接收输出代币的地址
    /// @dev 使用恒定乘积公式：x * y = k
    /// @dev 至少一个输出数量必须大于 0
    function swap(uint256 amount0Out, uint256 amount1Out, address to) external nonReentrant {
        // 检查至少有一个输出数量大于 0
        require(amount0Out > 0 || amount1Out > 0, "Insufficient output amount");
        
        // 检查输出数量不超过储备量
        require(amount0Out < reserve0 && amount1Out < reserve1, "Insufficient liquidity");

        // 发送输出代币给接收者
        if (amount0Out > 0) IERC20(token0).transfer(to, amount0Out);
        if (amount1Out > 0) IERC20(token1).transfer(to, amount1Out);

        // 获取转账后的合约余额
        uint256 balance0 = IERC20(token0).balanceOf(address(this));
        uint256 balance1 = IERC20(token1).balanceOf(address(this));

        // 恒定乘积公式检查：x * y >= k
        // 注意：这个简化版本没有收取手续费
        // 真实 Uniswap 会在这里计算并扣除手续费
        require(balance0 * balance1 >= reserve0 * reserve1, "K");

        // 更新储备量
        _update(balance0, balance1);
        
        // 触发交换事件
        emit Swap(
            msg.sender,
            balance0 > reserve0 ? balance0 - reserve0 : 0,
            balance1 > reserve1 ? balance1 - reserve1 : 0,
            amount0Out,
            amount1Out,
            to
        );
    }

    // ==================== 内部函数 ====================
    
    /// @notice 更新储备量
    /// @param balance0 新的 token0 余额
    /// @param balance1 新的 token1 余额
    /// @dev 私有函数，在流动性变化或交换后调用
    function _update(uint256 balance0, uint256 balance1) private {
        reserve0 = balance0;
        reserve1 = balance1;
        emit Sync(reserve0, reserve1);
    }

    // ==================== 数学工具函数 ====================
    
    /// @notice 计算平方根（巴比伦算法）
    /// @param y 输入值
    /// @return z 平方根结果
    /// @dev 使用牛顿迭代法计算整数平方根
    function sqrt(uint256 y) internal pure returns (uint256 z) {
        if (y > 3) {
            z = y;
            uint256 x = y / 2 + 1;
            // 牛顿迭代：x_{n+1} = (y / x_n + x_n) / 2
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
        // 如果 y == 0，z 保持为 0
    }

    /// @notice 返回两个数中的较小值
    /// @param a 第一个数
    /// @param b 第二个数
    /// @return 较小的那个数
    function min(uint256 a, uint256 b) internal pure returns (uint256) {
        return a < b ? a : b;
    }
}

// ==================== MiniDexFactory.sol ====================

/// @title Mini DEX 工厂合约
/// @dev 用于创建和管理交易对的工厂合约
/// @dev 每个代币对只能创建一个交易对，避免重复
contract MiniDexFactory {
    
    // ==================== 状态变量 ====================
    
    /// @notice 交易对映射表
    /// @dev tokenA => tokenB => Pair 地址
    /// @dev 使用双重映射来查找两个代币组成的交易对
    mapping(address => mapping(address => address)) public getPair;
    
    /// @notice 所有交易对地址列表
    /// @dev 存储所有已创建的交易对地址，便于遍历
    address[] public allPairs;

    // ==================== 事件 ====================
    
    /// @notice 交易对创建事件
    /// @param token0 代币 0 地址（排序后较小）
    /// @param token1 代币 1 地址（排序后较大）
    /// @param pair 新创建的交易对合约地址
    /// @param pairIndex 交易对在 allPairs 数组中的索引
    event PairCreated(
        address indexed token0,
        address indexed token1,
        address pair,
        uint256 pairIndex
    );

    // ==================== 核心功能 ====================
    
    /// @notice 创建新的交易对
    /// @param tokenA 第一个代币地址
    /// @param tokenB 第二个代币地址
    /// @return pair 新创建的交易对合约地址
    /// @dev 对代币地址进行排序，确保 token0 < token1
    /// @dev 防止创建重复的交易对
    function createPair(address tokenA, address tokenB) external returns (address pair) {
        // 检查两个地址不相同
        require(tokenA != tokenB, "Identical addresses");
        
        // 检查地址不为零地址
        require(tokenA != address(0) && tokenB != address(0), "Zero address");
        
        // 检查交易对尚未创建
        require(getPair[tokenA][tokenB] == address(0), "Pair already exists");

        // 对代币地址进行排序，确保 token0 < token1
        // 这样可以避免 A-B 和 B-A 被认为是不同的交易对
        // 使用三元运算符进行排序
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);

        // 部署新的交易对合约
        // 注意：在生产环境中通常使用 create2 来生成确定性地址
        // 但在本教程中使用 new 关键字更简单易理解
        MiniDexPair newPair = new MiniDexPair(token0, token1);
        pair = address(newPair);

        // 更新映射表
        // 存储正向映射：token0 => token1 => pair
        getPair[token0][token1] = pair;
        // 存储反向映射：token1 => token0 => pair
        // 这样无论用户以什么顺序传入代币，都能找到交易对
        getPair[token1][token0] = pair;
        
        // 将新交易对添加到列表
        allPairs.push(pair);

        // 触发交易对创建事件
        emit PairCreated(token0, token1, pair, allPairs.length);
    }
    
    /// @notice 获取所有交易对的数量
    /// @return 交易对总数
    /// @dev view 函数，不消耗 gas
    function allPairsLength() external view returns (uint256) {
        return allPairs.length;
    }
}

// ==================== 合约设计要点说明 ====================
//
// 1. DEX 交易对核心概念:
//    - 交易对（Pair）: 两种代币组成的流动性池
//    - 恒定乘积公式: x * y = k，保持两种代币储备的乘积不变
//    - LP 代币: 流动性证明，代表提供者在池子中的份额
//    - 储备量（Reserves）: 记录在合约中的代币数量
//
// 2. 数学原理:
//    恒定乘积公式: reserve0 * reserve1 = k（常数）
//    
//    交换计算:
//    - 用户输入 amountIn，想要 amountOut
//    - 新储备量: reserve0' = reserve0 + amountIn, reserve1' = reserve1 - amountOut
//    - 必须满足: reserve0' * reserve1' >= reserve0 * reserve1
//    
//    价格发现:
//    - 代币 0 的价格 = reserve1 / reserve0
//    - 代币 1 的价格 = reserve0 / reserve1
//
// 3. 使用流程:
//    添加流动性:
//    1. 用户 approve 两种代币给 Pair 合约
//    2. 调用 addLiquidity(amount0, amount1)
//    3. 获得 LP 代币
//    
//    交换代币:
//    1. 用户计算想要获得的输出数量
//    2. 调用 swap(amount0Out, amount1Out, to)
//    3. 合约自动计算需要输入的数量
//    
//    移除流动性:
//    1. 用户持有 LP 代币
//    2. 调用 removeLiquidity(liquidity)
//    3. 按比例取回两种代币
//
// 4. 与 Uniswap V2 的区别:
//    - 本合约是简化版，没有收取交易手续费
//    - Uniswap V2 收取 0.3% 手续费，分配给 LP 持有者
//    - Uniswap V2 有更复杂的价格预言机功能
//    - Uniswap V2 使用 create2 部署交易对
//
// 5. 安全机制:
//    - ReentrancyGuard: 防止交换时的重入攻击
//    - 恒定乘积检查: 确保交换符合 AMM 规则
//    - 储备量更新: 每次操作后更新储备量
//
// 6. 关键知识点:
//    - AMM（自动化做市商）原理
//    - 恒定乘积公式（x * y = k）
//    - LP 代币机制
//    - 价格发现机制
//    - 平方根计算（牛顿迭代法）
//`:"",Xp=()=>Object.keys(xr).reduce((t,e)=>(t[e]={unlockedConcepts:[],totalConcepts:xr[e].concepts.length,interactionCount:0},t),{}),Be=Ia("progress",()=>{const t=O(Xp()),e=u=>String(u),n=(u,c)=>{const l=e(u),d=t.value[l];d&&!d.unlockedConcepts.includes(c)&&d.unlockedConcepts.push(c)},r=u=>{const c=e(u),l=t.value[c];l&&l.interactionCount++},s=u=>{const c=e(u);return t.value[c]},i=u=>{var l;const c=e(u);return((l=t.value[c])==null?void 0:l.unlockedConcepts)||[]};return{dayProgress:t,unlockConcept:n,incrementInteraction:r,getDayProgress:s,getUnlockedConcepts:i,isConceptUnlocked:(u,c)=>i(u).includes(c),getProgressPercentage:u=>{const c=e(u),l=t.value[c];return!l||l.totalConcepts===0?0:Math.floor(l.unlockedConcepts.length/l.totalConcepts*100)}}}),mt=Ia("contract",()=>{const t=O({day1:{count:0,interactionCount:0},day2:{name:"",bio:"",interactionCount:0,hasStored:!1,hasRetrieved:!1},day3:{candidates:[],voteCount:{},interactionCount:0},day4:{owner:"",item:"",auctionEndTime:0,highestBidder:"",highestBid:0,ended:!1,bids:{},bidders:[],interactionCount:0},day5:{owner:"",treasureAmount:0,withdrawalAllowance:{},hasWithdrawn:{},userAddress:"0x"+Math.random().toString(16).substr(2,40),userAllowance:0,interactionCount:0},day6:{bankManager:"",members:[],registeredMembers:{},balance:{},userAddress:"0x"+Math.random().toString(16).substr(2,40),interactionCount:0,depositCount:0,withdrawCount:0},day7:{owner:"",userAddress:"",registeredFriends:{},friendList:[],balances:{},debts:{},interactionCount:0},day8:{owner:"",userAddress:"",isUserAdmin:!1,totalTipsReceived:0,tipPerPerson:{},tipsPerCurrency:{},supportedCurrencies:["USD","EUR","JPY","INR"],conversionRates:{USD:5e14,EUR:6e14,JPY:4e12,INR:7e12},interactionCount:0},day9:{owner:"",userAddress:"",isUserAdmin:!1,scientificCalculatorAddress:"",isAddressSet:!1,operationCount:0,operationHistory:[],interactionCount:0,challengeTasks:{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}},day10:{owner:"",userAddress:"",userProfile:{name:"",weight:0,isRegistered:!1},workoutHistory:[],totalWorkouts:0,totalDistance:0,milestones:{weightGoal:{achieved:!1,timestamp:0,title:"减重目标达成",icon:"⚖️"},workouts10:{achieved:!1,timestamp:0,title:"10次运动",icon:"🏃"},workouts50:{achieved:!1,timestamp:0,title:"50次运动大师",icon:"🏆"},distance100K:{achieved:!1,timestamp:0,title:"100公里里程碑",icon:"🌍"}},interactionCount:0},day11:{owner:"",userAddress:"",contractBalance:0,eventLog:[],interactionCount:0}}),e=()=>"0x"+Math.random().toString(16).substr(2,40),n=i=>{const a=`day${i}`,o=t.value[a];if(!o){console.warn(`Contract for day ${i} not found`);return}switch(i){case 5:o.owner||(o.owner=e()),o.userAddress||(o.userAddress=e());break;case 6:o.bankManager===""&&(o.bankManager=e(),o.members=[o.bankManager],o.registeredMembers={[o.bankManager]:!0,[o.userAddress]:!0},o.balance={[o.bankManager]:0,[o.userAddress]:0},o.members.push(o.userAddress));break;case 7:if(o.owner===""){const u=e();o.owner=u,o.userAddress=u,o.registeredFriends[u]=!0,o.friendList.push(u)}break;case 8:o.owner===""&&(o.owner=e(),o.userAddress=e());break;case 9:o.owner===""&&(o.owner=e(),o.userAddress=e(),o.isUserAdmin=!1);break;case 10:o.owner===""&&(o.owner=e(),o.userAddress=e());break;case 11:if(o.owner===""){const u=e();o.owner=u,o.userAddress=u,o.contractBalance=0,o.eventLog=[]}break}},r=i=>t.value[`day${i}`];return{contracts:t,initializeContract:n,getContract:r,updateContract:(i,a)=>{const o=r(i);o&&Object.assign(o,a)},generateAddress:e}}),rt={increment:21e3,reset:21e3,addData:4e4,retrieveData:0,addCandidate:5e4,vote:35e3,placeBid:45e3,endAuction:25e3,addTreasure:3e4,approveWithdrawal:4e4,withdrawTreasure:5e4,resetWithdrawalStatus:25e3,transferOwnership:35e3,getTreasureDetails:0,addMembers:45e3,depositAmountEther:35e3,withdrawAmount:4e4,getMembers:0,addFriend:45e3,depositIntoWallet:35e3,recordDebt:45e3,payFromWallet:5e4,transferEther:35e3,transferEtherViaCall:4e4,withdraw:35e3,checkBalance:0,addCurrency:45e3,tipInEth:4e4,tipInCurrency:5e4,withdrawTips:35e3,transferOwnership8:35e3,transfer13:35e3,approve13:3e4,transferFrom13:4e4,getBalance13:0,getAllowance13:0,createBasicBox:8e4,createPremiumBox:1e5,createTimeLockedBox:12e4,storeSecret:35e3,getSecret:0,transferOwnership14:4e4,setMetadata:3e4,getMetadata:0,getUnlockTime:0,getRemainingLockTime:0,completeOwnershipTransfer:45e3,createProposal15:6e4,vote15:4e4,executeProposal15:35e3,setProfile16:35e3,registerPlugin16:25e3,runPlugin16:45e3,runPluginView16:0,createPlan17:45e3,upgradeTo17:35e3,subscribe17:5e4,pauseSubscription17:3e4,resumeSubscription17:3e4,isSubscribed17:0,checkRainfall18:0,purchaseInsurance18:45e3,claimPayout18:5e4,fastForwardTime18:0,withdrawBalance18:35e3,generateSignature19:0,enterEvent19:65e3,checkEntered19:0,getParticipants19:0,deposit20:45e3,vulnerableWithdraw20:5e4,safeWithdraw20:35e3,checkVaultStatus20:0,mint21:15e4,transferFrom21:8e4,safeTransferFrom21:85e3,approve21:45e3,setApprovalForAll21:35e3,balanceOf21:0,getApproved21:0,ownerOf21:0,startLottery22:45e3,enter22:5e4,endLottery22:4e4,fulfillRandomWords22:55e3,listNFT26:65e3,buyNFT26:85e3,cancelListing26:45e3,stake27:45e3,unstake27:4e4,claimRewards27:5e4,emergencyWithdraw27:35e3,refillRewards27:3e4,createProposal28:15e4,vote28:5e4,finalize28:4e4,execute28:8e4,depositCollateral29:5e4,mintStablecoin29:6e4,burnStablecoin29:45e3,withdrawCollateral29:55e3,liquidate29:8e4,createPair30:12e4,addLiquidity30:8e4,removeLiquidity30:75e3,swap30:65e3},Do=4e-8,Zp={function:{name:"函数交互",icon:"🎯",unlockAt:1,message:"你刚刚调用了 Solidity 中的第一个函数！在区块链上，用户与合约的所有交互都是通过函数完成的。",code:`function click() public {
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
}`}},Jp={inheritance:{name:"合约继承",icon:"🧬",unlockAt:1,message:"你刚刚体验了合约继承！VaultMaster 通过 `is Ownable` 继承了父合约的所有功能，这是代码复用的核心机制。",code:`// 父合约
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
}`}},Qp={constructor_mint:{name:"构造函数铸造",icon:"🪙",unlockAt:1,message:"你了解了构造函数铸造机制！合约部署时，构造函数会自动执行，从 address(0) 铸造代币给部署者。",code:`constructor(uint256 _initialSupply){
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
}`}},ph=t=>({function:"📖 这是函数的基本概念，它是智能合约的基本构建模块。",increment:"📖 自增操作是编程中常见的操作，用于快速增加数值。",uint256:"📖 uint256 是 Solidity 中最常用的整数类型，了解它很重要。",contract:"📖 智能合约是区块链上的自动执行代码，理解它的结构很关键。",string:"📖 string 类型用于存储文本数据，是智能合约中常用的数据类型之一。",private:"📖 private 关键字限制变量的访问范围，提高合约的安全性。",memory:"📖 memory 数据位置用于临时存储，只在函数执行期间存在。",view:"📖 view 函数不修改状态，不消耗 Gas，是优化合约性能的重要方法。",parameters:"📖 函数参数让函数能够接收外部数据，使函数更加灵活和可复用。",returns:"📖 returns 关键字定义函数返回值，让函数能够向调用者返回结果。",array:"📖 数组是存储多个相同类型数据的容器，在 Solidity 中广泛使用。",mapping:"📖 映射是 Solidity 中的键值对存储结构，通过键快速查找对应的值。",push:"📖 push 方法是数组的常用操作，可以在数组末尾动态添加元素。",compound_assignment:"📖 复合赋值运算符将运算和赋值结合在一起，使代码更加简洁。",constructor:"📖 构造函数只在合约部署时执行一次，用于初始化合约的状态变量。",msg_sender:"📖 msg.sender 表示当前调用合约的地址，是区块链交互的核心。",block_timestamp:"📖 block.timestamp 返回当前区块的时间戳，常用于时间相关的逻辑。",require:"📖 require 语句在条件不满足时回滚交易，是保证合约安全的重要机制。",external:"📖 external 函数只能从合约外部调用，比 public 更节省 Gas。",address_type:"📖 address 类型存储以太坊地址，是区块链交互的核心数据类型。",bool_type:"📖 bool 类型只有 true 或 false 两个值，用于标记状态。",modifier:"📖 修饰符用于为函数添加前置条件检查，是权限控制的重要机制。",zero_address:"📖 零地址 address(0) 表示一个无效的地址，通常用于检查地址参数是否有效。",return_statement:"📖 return 语句让函数返回指定的值给调用者，是函数输出结果的方式。",address_mapping_balance:"📖 地址映射 mapping(address => uint256) 是存储用户资产的核心数据结构，通过地址快速查找对应的余额。",payable:"📖 payable 关键字让函数能够接收以太币，这是处理资金交易的关键特性。",msg_value:"📖 msg.value 表示调用函数时发送的以太币数量（以wei为单位），是获取转账金额的标准方式。",wei_unit:"📖 wei 是以太币的最小单位，1 ETH = 10^18 wei，这是以太坊计价的基础单位。",ether_deposit_withdraw:"📖 存取逻辑包括检查余额、增减余额、验证输入，这是任何金融合约的基础。",nested_mapping:"📖 嵌套映射 mapping(A => mapping(B => C)) 允许你在 Solidity 中创建像多维数组或字典中嵌套字典的复杂数据结构。",address_payable:"📖 payable 地址类型拥有 transfer 和 call 方法来发送 Ether。没有 fallback 且非 payable 的地址无法接收以太币。",debt_tracking:"📖 债务追踪展示了区块链账本的不变性和透明性，确保每一笔债权和债务都在链上清晰可查的特性。",internal_transfer:"📖 内部账本系统(Internal Accounting)只改变合约内存的数字而不进行链上交易转账，是处理多高频微支付的最佳实操。",transfer_method:"📖 .transfer() 将转账可用 gas 固定为 2300 防止重入，但当目标接收方智能合约的 fallback 逻辑超过一定 gas 时会导致资金卡死。",call_method:"📖 .call() 提供低级别的外部调用功能，转账时能够转发所有剩余 gas 或自定义数量的 gas 以保证外部操作能顺利执行并返回回调状态。",withdraw_pattern:"📖 提现优于发送。要求用户主动调用 withdraw()，避免了遍历用户数组发钱（可能超出 block gas 限制）以及转账失败阻塞整个合约的风险。",modifier_onlyOwner:"📖 修饰符（Modifier）允许你在不重复编写核心检查逻辑的情况下，重用访问控制代码。`_` 符号代表了目标函数体的执行位置。",payable_tip:"📖 `payable` 是一个函数可见性/状态修饰符。如果没有它，任何尝试向该函数发送 Ether 的交易都会被以太坊虚拟机拒绝并回滚。",msg_value_tip:"📖 `msg.value` 是当前交易附带的以太币数量，以 wei 为单位。它是智能合约处理实时支付的桥梁。",address_balance:"📖 合约不仅可以操作别人的钱，还可以管理属于它自己的钱。`address(this).balance` 让你能实时掌控合约金库的‘水位’。",call_withdraw:"📖 `.call()` 是一个底层原语。在转账时，它能够处理复杂的 Fallback 逻辑，并明确返回一个成功/失败的布尔值，比旧的 `transfer` 更具鲁活性。",mapping_rates:"📖 虽然以太坊没有内置汇率，但我们可以通过合约内部的映射来手动维护一组兑换比例，从而实现'打赏 1 美元 = 支付 X 数量 ETH'的功能。",pure_function:"📖 pure 函数承诺不读取也不修改区块链的状态变量。这意味着它的执行结果完全取决于输入参数，可以在本地快速计算，不需要消耗 Gas。",view_function:"📖 view 函数可以读取状态变量但不修改它们。由于不修改状态，view 函数也可以在本地执行，不消耗 Gas，适合用于查询操作。",cross_contract_call:"📖 跨合约调用是 Solidity 的核心特性之一。通过合约地址，一个合约可以调用另一个合约的函数，实现功能的组合和复用，就像乐高积木一样。",interface_call:"📖 接口方式调用是最常用的跨合约调用方法。通过创建外部合约的接口实例，可以像调用本地函数一样调用外部合约，代码清晰易读。",low_level_call:"📖 底层 call 方法提供了最大的灵活性。它通过 abi.encodeWithSignature 编码函数调用，可以调用任何函数，即使接口未知。但使用起来更复杂，需要手动处理返回值。",newton_iteration:"📖 牛顿迭代法是一种快速逼近方程根的算法。在 Solidity 中，由于不支持浮点数运算，我们使用整数运算通过多次迭代来逼近真实值。限制迭代次数可以防止 Gas 耗尽。",contract_composition:"📖 合约组合是 Solidity 的重要设计理念。通过将功能拆分到多个合约，可以实现代码复用、降低复杂度、提高可维护性。这是构建复杂 DApp 的基础。",struct_definition:"📖 `struct` 结构体允许你定义自定义的数据类型，将多个不同类型的变量打包在一起。这是组织复杂数据的有效方式，让代码更加清晰和易于维护。",array_in_mapping:"📖 Solidity 允许将映射指向数组，如 `mapping(address => WorkoutActivity[])`。这样每个地址都有一个动态数组，非常适合存储用户的历史记录、交易列表等一对多的数据关系。",multiple_mappings:"📖 在实际应用中，经常使用多个 mapping 来存储不同维度的数据。比如一个 mapping 存用户资料，另一个存用户余额。通过同一个 key（如用户地址）可以关联访问多个数据结构。",storage_keyword:"📖 `storage` 和 `memory` 是 Solidity 中两个重要的数据位置关键字。`storage` 变量永久存储在区块链状态中，而 `memory` 变量只在函数执行期间临时存在。使用 `storage` 引用可以直接修改状态变量，节省 Gas。",event_logging:"📖 事件（Event）是 Solidity 的日志机制。通过 `emit` 触发事件，数据会被记录在区块链的交易日志中。前端可以监听事件来实现实时通知、记录历史等功能，事件是 DApp 前后端通信的重要桥梁。",milestone_detection:"📖 里程碑检测是游戏化应用的核心机制。通过条件判断（如 `if (count == 10)`）检测用户是否达成特定目标，并触发相应奖励或通知。这能激励用户持续使用产品。",timestamp_usage:"📖 `block.timestamp` 是当前区块的时间戳（Unix 时间，秒）。它常用于记录事件发生时间、设置时间限制、计算时间差等。注意它由矿工设置，存在约15秒的误差，不应用于精确计时。",onlyRegistered_modifier:"📖 修饰符（Modifier）是 Solidity 的复用机制，用于在函数执行前添加前置条件检查。`onlyRegistered` 确保只有满足条件的用户（已注册）才能调用函数。这简化了代码，避免了在每个函数中重复写检查逻辑。"})[t]||"📖 点击其他概念标签查看更多详细解释。",fh=t=>({inheritance:"📖 合约继承是 Solidity 的核心特性之一。通过 `contract VaultMaster is Ownable`，子合约可以继承父合约的所有状态变量和函数，实现代码复用和模块化设计。",import_statement:"📖 `import` 语句用于导入其他合约文件，让你可以在当前合约中使用外部定义的合约。这是实现合约组合和代码复用的基础。",constructor:"📖 构造函数 `constructor()` 在合约部署时自动执行一次，用于初始化合约的状态变量。在 Ownable 中，它将合约部署者设置为初始所有者。",private_visibility:"📖 `private` 可见性修饰符表示变量只能在当前合约内部访问，即使是子合约也无法直接访问。这提供了最强的封装性，保护敏感数据。",event_logging:"📖 事件（Event）用于记录重要的合约操作到区块链日志中。前端可以监听事件来实现实时通知。`DepositSuccessful` 和 `WithdrawSuccessful` 记录了资金流动。",indexed_parameter:"📖 `indexed` 关键字标记事件参数，允许前端按该参数过滤和搜索事件日志。这在处理大量事件时非常有用，可以快速找到特定地址相关的事件。",transfer_ownership:"📖 `transferOwnership()` 函数实现了合约所有权的转移。只有当前所有者可以调用此函数，并且通常会检查新地址是否有效（非零地址）。",onlyOwner_modifier:"📖 `onlyOwner` 修饰符是权限控制的核心机制。它检查 `msg.sender` 是否等于 `owner`，如果不是则回滚交易。这是保护敏感操作（如提款）的标准做法。"})[t]||"📖 点击其他概念标签查看更多详细解释。",ef={erc20_standard:{name:"ERC20 标准",icon:"🪙",unlockAt:1,message:"你了解了 ERC20 代币标准！它是以太坊上最通用的代币规范，定义了代币的基本功能接口。",code:`// ERC20 标准接口
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
}`}},mh=t=>({erc20_standard:"🪙 太棒了！你了解了 ERC20 代币标准！这是以太坊上最通用的代币规范。👉 查询 Alice 余额来学习 mapping 存储机制！",mapping_nested:"🗂️ 优秀！你了解了嵌套映射！这是 ERC20 授权机制的核心数据结构。👉 转账给 Bob 来学习事件和转账函数！",event:"📋 很好！你触发了事件日志！👉 继续探索更多功能！",transfer:"💸 太棒了！你使用了 transfer 函数！👉 授权给 Carol 来学习授权机制！",approve:"✅ 很好！你使用了 approve 函数！👉 查询 allowance 来学习授权额度查询！",allowance:"🔍 优秀！你了解了授权额度查询！👉 切换到 Carol 执行代转账来学习 transferFrom！",transferFrom:"🔄 太棒了！你使用了 transferFrom 函数！🎉 你已掌握 ERC20 全部核心功能！"})[t]||"📖 点击其他概念标签查看更多详细解释。",gh=t=>({constructor_mint:"📖 构造函数铸造是 ERC20 代币的常见模式。合约部署时，构造函数自动执行，创建所有代币并分配给部署者。Transfer(address(0), ...) 事件表示这是铸造操作。",zero_address_mint:"📖 零地址 address(0) 在 ERC20 中有特殊含义。Transfer 事件中 from=address(0) 表示铸造（创建新代币），to=address(0) 表示销毁（移除代币）。这是行业标准约定。",internal_function:"📖 internal 是 Solidity 的可见性修饰符之一。与 public/external 不同，internal 函数只能在当前合约内部调用，不能从外部访问。这是代码封装的重要手段，_transfer 就是典型的内部辅助函数。",virtual_function:"📖 virtual 关键字标记函数可以被继承合约重写（override）。这是实现可扩展 ERC20（如带手续费的代币、可暂停代币）的基础。子合约使用 override 关键字重写，并用 super 调用父合约函数。"})[t]||"📖 点击其他概念标签查看更多详细解释。",hh=t=>({erc20_standard:"📖 ERC20 是以太坊上最常用的代币标准，定义了代币的基本功能接口，包括转账、授权、查询余额等。所有符合 ERC20 标准的代币都可以在支持该标准的钱包和交易所中使用。",mapping_nested:"📖 嵌套映射 mapping(address => mapping(address => uint256)) 是 ERC20 中存储授权额度的核心数据结构。外层映射的 key 是代币持有者，内层映射的 key 是被授权者，value 是授权额度。",event:"📖 事件（Event）是 Solidity 的日志机制。ERC20 定义了 Transfer 和 Approval 两个标准事件，分别记录代币转移和授权操作。前端可以监听这些事件来实时更新界面。",transfer:"📖 transfer 函数是 ERC20 最核心的功能，允许代币持有者将自己的代币转给他人。函数会检查余额是否充足，然后更新双方余额并触发 Transfer 事件。",approve:"📖 approve 函数实现了授权机制，允许代币持有者授权他人使用自己的代币。这在 DeFi 应用中非常重要，比如授权 DEX 使用你的代币进行交易。",allowance:"📖 allowance 函数用于查询授权额度，返回被授权者还可以使用持有者的代币数量。在执行 transferFrom 之前，通常需要先检查 allowance 是否充足。",transferFrom:"📖 transferFrom 函数实现了代转账功能，允许被授权者代替持有者转账。这是 ERC20 的高级功能，常用于需要第三方代为执行转账的场景，如自动扣款、代理交易等。"})[t]||"📖 点击其他概念标签查看更多详细解释。",tf={interface_definition:{name:"接口定义",icon:"🔌",unlockAt:1,message:"你了解了接口！接口定义了合约必须实现的功能规范，是实现多态和解耦的基础。",code:`// IDepositBox.sol - 定义存款盒的标准接口
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
}`}},nf={compact_datatype:{name:"紧凑数据类型",icon:"📦",unlockAt:1,message:"你了解了紧凑数据类型！uint8、uint32 等小整数类型相比 uint256 可以节省大量存储空间和 Gas。",code:`// 使用紧凑数据类型优化存储
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

// indexed 参数可被链下高效检索！`}},yh=t=>({compact_datatype:"📦 太棒了！你了解了紧凑数据类型优化！uint8、uint32 相比 uint256 节省大量存储！👆 点击上方「存储可视化」区域学习更多！",uint8_uint32:"🔢 优秀！你了解了 uint8 和 uint32！它们分别只需 1 字节和 4 字节，远小于 uint256 的 32 字节！👝 创建提案查看 bytes32！",bytes32_string:"📝 很好！你了解了 bytes32 vs string！bytes32 固定 32 字节，比动态 string 更省 Gas！👝 继续创建提案或尝试投票学习位运算！",storage_optimization:"💾 太棒了！你体验了存储优化！通过紧凑数据类型和合理结构，大幅降低存储成本！⚡ 现在尝试投票来学习位运算！",bit_operation:"⚡ 太棒了！你了解了位运算的强大！1 个 uint256 存储 256 个投票状态，节省约 40% Gas！🗺️ 映射高效存储选民数据！⏰ 使用时间戳验证投票窗口！👉 尝试重复投票体验掩码检查！",mapping_storage:"🗺️ 优秀！你了解了映射的高效存储！mapping 通过哈希表实现 O(1) 查找，是 Solidity 最常用的数据结构！👉 继续探索其他功能！",mask_check:"🎭 很好！你体验了掩码检查！通过与运算快速检查位状态，防止重复投票！👉 等待提案结束执行提案学习事件日志！",timestamp_block:"⏰ 不错！你了解了 block.timestamp 的使用！它提供当前区块时间戳，用于实现时间锁和投票截止！👉 尝试重复投票或执行提案！",event_logging:"📋 恭喜！你了解了事件日志！事件记录在链上日志中，可供链下应用索引和监听！🎉 你已掌握 Day 15 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",vh=t=>({compact_datatype:"📖 紧凑数据类型是 Solidity Gas 优化的基础。uint8 只占 1 字节（存储范围 0-255），uint32 只占 4 字节（0-42亿），而 uint256 占 32 字节。根据数据范围选择最小够用的类型，可以显著降低存储成本。",uint8_uint32:"📖 uint8、uint16、uint32 等小整数类型相比 uint256 可以节省大量存储空间。当变量值范围有限时，应该优先使用这些紧凑类型。例如：提案数量（uint8）、投票数（uint32）都不需要 uint256 的巨大范围。",bytes32_string:"📖 bytes32 是固定长度的字节数组，始终占用 32 字节。string 是动态长度，存储成本更高且引入额外的 Gas 消耗。对于固定长度的短文本（如提案名称、哈希值），bytes32 是更优的选择。",storage_optimization:"📖 存储优化是智能合约 Gas 优化的核心。技巧包括：1. 使用最小够用的整数类型（uint8 而非 uint256）；2. 将多个小变量打包到同一存储槽位；3. 使用位运算存储布尔数组。这些优化可节省 30-50% 的存储成本。",bit_operation:"📖 位运算利用整数类型的二进制位存储多个布尔值。1 个 uint256 有 256 个位，可以存储 256 个布尔状态（如是否对某提案投票）。相比使用 mapping(uint256 => bool)，位运算节省约 40% 的 Gas。关键操作：左移(1<<n)生成掩码、与(&)检查、或(|)设置。",mapping_storage:"📖 mapping 是 Solidity 的哈希表实现，提供 O(1) 时间复杂度的查找。mapping(address => uint256) 存储地址到数据的映射，mapping(uint256 => uint32) 存储索引到数据的映射。mapping 是状态变量最常用的数据结构，高效且灵活。",mask_check:"📖 掩码（Mask）是位运算的核心概念。掩码是一个二进制数，只有特定位为 1。通过 & 运算检查位：(data & mask) != 0 表示该位已设置。通过 | 运算设置位：data | mask 将对应位设为 1。这种方法快速且节省 Gas。",timestamp_block:"📖 block.timestamp 是当前区块的时间戳（秒级）。它由矿工/验证者提供，可能有少许偏差（几秒到几分钟），但适合大多数场景。常用于实现时间锁、投票截止、合约到期等需要时间判断的功能。",event_logging:"📖 事件（Event）是 Solidity 的日志机制，记录在链上日志中（不占用状态存储）。事件可以有 indexed 参数（最多 3 个），可被链下应用高效检索。事件是实现前端通知、链下索引、历史记录查询的基础，是 DApp 交互的关键。"})[t]||"📖 点击其他概念标签查看更多详细解释。",bh=t=>({interface_definition:"🔌 欢迎来到 Day 14！你了解了接口定义 - 它规定了所有存款盒必须实现的功能。👉 创建任意存款盒来解锁抽象合约！",abstract_contract:"🎭 太棒了！你了解了抽象合约 - 它实现了通用功能但不能直接部署。👉 创建 Basic 存款盒来学习合约继承！",inheritance:"🧬 优秀！你体验了合约继承！BasicDepositBox 继承了 BaseDepositBox 的所有功能。👉 创建 Premium 或 TimeLocked 来学习 override！",override_keyword:"📝 很好！你使用了 override 关键字重写父合约函数。👉 创建 TimeLocked 存款盒来学习 virtual 和修饰器组合！",virtual_function:"🔮 太棒了！你了解了 virtual 关键字 - 它允许子合约重写父函数。👉 在锁定期间尝试取秘密来体验修饰器组合！",super_keyword:"⬆️ 优秀！你使用了 super 调用父合约函数。👉 创建第2个存款盒来体验工厂模式！",modifier_combination:"🔗 太棒了！你体验了修饰器组合 - 需要同时满足 onlyOwner 和 timeUnlocked！👉 创建 Premium 存款盒来学习元数据存储！",factory_pattern:"🏭 优秀！你体验了工厂模式！VaultManager 负责创建和管理所有存款盒。👉 转移所有权并更新记录来完成体验！",metadata_storage:"🏷️ 很好！你使用了元数据功能！Premium 版本可以存储额外信息。👉 查看完整代码来复习所有知识点！",time_lock:"⏰ 太棒了！你创建了时间锁定存款盒！解锁前无法取出秘密。🎉 你已掌握抽象合约、接口与工厂模式！",store_secret:"🔐 太棒了！你成功存入了秘密！Secret 已被安全存储在合约中。👉 尝试取出秘密来体验访问控制！",get_secret:"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。👉 尝试设置元数据或创建更多存款盒！",transfer_ownership:"🔑 很好！你转移了存款盒的所有权！新的所有者现在可以管理这个存款盒。👉 切换到新所有者完成转移流程！"})[t]||"📖 点击其他概念标签查看更多详细解释。",wh=t=>({interface_definition:"📖 接口（Interface）是 Solidity 中定义合约规范的方式。它只声明函数签名，不包含实现。任何实现该接口的合约都必须提供所有函数的具体实现。接口实现了多态和解耦，让不同的合约可以以统一的方式交互。",abstract_contract:"📖 抽象合约（Abstract Contract）是不能被直接部署的合约，它通常包含一个或多个纯虚函数（没有实现的函数）。抽象合约用于定义子合约必须实现的接口，同时提供一些通用的实现代码，是代码复用的重要机制。",inheritance:"📖 合约继承是 Solidity 的核心特性之一。通过 `contract Child is Parent`，子合约可以继承父合约的所有状态变量和函数。继承实现了代码复用，让开发者可以基于现有合约构建更复杂的功能。",override_keyword:"📖 override 关键字用于显式声明子合约重写了父合约的虚函数。从 Solidity 0.6.0 开始，重写函数必须使用 override 关键字，这提高了代码的可读性和安全性，防止意外重写。",virtual_function:"📖 virtual 关键字标记函数可以被继承合约重写。父合约的函数默认不能被重写，必须显式标记为 virtual。这是 Solidity 的设计选择，防止意外的函数重写导致安全问题。",super_keyword:"📖 super 关键字用于调用父合约的函数。在重写函数时，super 让你可以复用父类的逻辑，然后添加或修改特定行为。这在需要扩展而非完全替换父类功能时非常有用。",modifier_combination:"📖 多个修饰器可以组合使用，函数必须同时满足所有修饰器的条件才能执行。修饰器按声明顺序执行，每个修饰器的 `_` 代表被修饰函数的代码。这是实现复杂权限控制的有效方式。",factory_pattern:"📖 工厂模式是一种创建型设计模式，使用专门的工厂合约来创建和管理其他合约。VaultManager 就是工厂合约，它负责创建存款盒并追踪所有权。工厂模式实现了创建逻辑与使用逻辑的分离。",metadata_storage:"📖 元数据存储展示了继承扩展的实际应用。PremiumDepositBox 在继承 BaseDepositBox 的基础上，添加了 metadata 状态变量和相关函数，实现了功能的扩展，而不影响基础功能。",time_lock:"📖 时间锁定是一种常见的 DeFi 安全机制。TimeLockedDepositBox 使用 block.timestamp 和修饰器实现时间锁，只有在指定时间后才能执行特定操作。这保护了用户资产，防止冲动操作。"})[t]||"📖 点击其他概念标签查看更多详细解释。",rf={struct_definition:{name:"结构体定义",icon:"🏗️",unlockAt:1,message:"你了解了结构体定义！struct 允许你将多个相关数据组合成一个自定义类型。",code:`// 定义玩家资料结构体
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

// 合约像乐高积木一样组合使用`}},sf={proxy_pattern:{name:"代理模式",icon:"📦",unlockAt:1,message:"你了解了代理模式！这是可升级合约的核心架构，将数据存储与逻辑执行分离。",code:`// 代理合约存储数据，逻辑合约执行业务逻辑
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

// 升级后，V1 和 V2 的数据格式兼容`}},_h=t=>({struct_definition:"🏗️ 你了解了结构体定义！PlayerProfile 将 name 和 avatar 组合在一起。👉 设置玩家资料来解锁映射存储！",mapping_storage:"🗺️ 你的资料已保存到 mapping！通过键值对高效存储。👉 注册 weapon 插件来学习插件系统！",plugin_registration:"🔌 插件注册成功！地址已存入 plugins[key]。👉 点击「调用」执行插件函数！",low_level_call:"⚡ 低级别调用成功！使用了 EVM 的 call 指令。👉 查看 ABI 编码可视化！",abi_encoding:"🔢 ABI 编码完成！函数选择器是 keccak256 哈希的前4字节。👉 切换 staticcall 模式查询数据！",staticcall:"👁️ 静态调用成功！不消耗 Gas 的只读操作。👉 尝试切换到 achievement 插件！",dynamic_delegation:"🔄 动态委托系统运行中！一个核心管理多个插件。👉 在不同插件间切换体验互操作！",contract_interop:"🌐 合约互操作掌握！多个合约无缝协作。🎉 你已掌握 Day 16 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",kh=t=>({struct_definition:"📖 结构体(struct)允许你将多个相关的变量组合成一个自定义类型。PlayerProfile 包含 name 和 avatar 两个字段，可以像单个变量一样传递和存储。结构体是组织复杂数据的基础。",mapping_storage:"📖 映射(mapping)是哈希表结构，提供 O(1) 的读写效率。profiles 用 address 作为键存储玩家资料，plugins 用 string 作为键存储插件地址。mapping 是 Solidity 最常用的状态变量类型。",plugin_registration:"📖 插件注册将字符串标识符映射到合约地址，实现动态插件管理。这种设计模式被称为注册表模式(Registry Pattern)，允许运行时添加新功能而无需修改核心合约代码。",low_level_call:"📖 call 是 EVM 的低级别调用指令，允许你动态调用任何函数。它返回 (bool, bytes) 元组表示成功状态和返回值。call 非常灵活但不如普通调用安全，需要仔细检查返回值。",abi_encoding:"📖 ABI(Application Binary Interface)编码将函数签名和参数转换为字节码。函数选择器是函数签名的 keccak256 哈希的前4字节。abi.encodeWithSignature 自动处理编码过程。",staticcall:"📖 staticcall 与 call 类似，但被调用的合约不能修改状态(发送ETH、写存储等)。它适合查询操作，更安全且通常不消耗 Gas。staticcall 是 view 函数的底层实现。",dynamic_delegation:"📖 动态委托允许核心合约将操作转发给不同的插件合约，实现功能的模块化扩展。这种架构让系统可以灵活添加新功能，无需修改核心代码，是插件系统的基础。",contract_interop:"📖 合约互操作是 DeFi 和 DApp 的基础。通过标准接口和动态调用，不同合约可以像乐高积木一样组合使用。PluginStore 展示了如何通过统一接口协调多个独立合约。"})[t]||"📖 点击其他概念标签查看更多详细解释。",xh=t=>({proxy_pattern:"📦 你了解了代理模式！这是可升级合约的核心架构。👉 点击 delegatecall 说明来学习委托调用！",delegatecall:"🔄 你了解了 delegatecall！它在代理合约的存储上下文中执行逻辑合约的代码。👉 点击存储布局说明了解变量顺序的重要性！",storage_layout:"🔀 你了解了存储布局！代理合约和逻辑合约必须使用相同的存储变量顺序。👉 切换到 Owner 身份，创建第一个订阅计划！",upgrade_mechanism:"🚀 你体验了合约升级！通过更新 logicContract 地址，可以替换业务逻辑而不丢失数据。👉 切换到 User 身份，执行订阅操作！",logic_contract:"⚙️ 你了解了逻辑合约！它只包含业务逻辑代码，不存储数据。👉 订阅后查看 fallback 如何工作！",fallback_function:"🔙 你了解了 fallback 函数！代理合约使用它捕获所有未匹配的函数调用。👉 升级合约后查看数据是否仍然存在！",data_persistence:"💾 你验证了数据持久化！升级合约后，之前的数据仍然保持不变。👉 使用 V2 新功能（暂停/恢复）来对比版本差异！",version_control:"📊 你体验了版本控制！V2 新增了暂停/恢复功能。🎉 你已掌握 Day 17 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",Ah=t=>({proxy_pattern:"📖 代理模式(Proxy Pattern)是可升级合约的核心架构。代理合约负责存储所有数据和 ETH，逻辑合约只包含业务代码。用户始终与代理合约交互，代理通过 delegatecall 将调用转发给当前逻辑合约。",delegatecall:"📖 delegatecall 是 EVM 的特殊调用方式，它在调用者（代理合约）的存储上下文中执行被调用合约（逻辑合约）的代码。这意味着逻辑合约可以读写代理合约的存储，但代码来自逻辑合约。msg.sender 和 msg.value 保持不变。",storage_layout:"📖 存储布局一致性是可升级合约的关键。代理合约和逻辑合约必须继承相同的存储布局基础合约（如 SubscriptionStorageLayout），确保变量顺序完全一致。如果顺序不同，升级后数据会错位，导致严重错误。",upgrade_mechanism:"📖 升级机制通过更新代理合约中的 logicContract 地址实现。upgradeTo() 函数只有 owner 可以调用，更新后所有新调用都会使用新逻辑。旧数据保持不变，因为数据存储在代理合约中，不在逻辑合约里。",logic_contract:"📖 逻辑合约(Logic Contract)只包含业务逻辑代码，不存储任何状态数据。它可以被替换升级而不影响数据。V1 和 V2 都是逻辑合约，它们继承相同的存储布局，但实现不同的功能。",fallback_function:"📖 fallback 函数是代理合约的核心。当用户调用代理合约中不存在的函数时，fallback 会被触发。它使用 delegatecall 将调用转发给逻辑合约，并返回执行结果。这是实现透明代理的关键。",data_persistence:"📖 数据持久化是可升级合约的重要特性。由于所有数据都存储在代理合约中，升级逻辑合约不会影响已有数据。用户升级前创建的订阅、计划等数据在升级后仍然可以正常访问和使用。",version_control:"📖 版本控制展示了如何在升级中添加新功能。V2 在 V1 的基础上新增了 pauseSubscription 和 resumeSubscription 功能，但保持数据格式兼容。这展示了可升级合约的灵活性和扩展性。"})[t]||"📖 点击其他概念标签查看更多详细解释。",af={oracle_interface:{name:"Chainlink接口",icon:"🔌",unlockAt:1,message:"你了解了 Chainlink 预言机接口！AggregatorV3Interface 是 Chainlink 标准接口，让智能合约能够获取链外数据。",code:`interface AggregatorV3Interface {
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
}`}},of={keccak256_hash:{name:"Keccak256哈希算法",icon:"🔐",unlockAt:1,message:"你使用了 Keccak256 哈希算法！这是以太坊标准的哈希函数，将任意数据转换为固定长度的哈希值。",code:`bytes32 messageHash = keccak256(abi.encodePacked(_user));
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
// 在构造函数中，部署者成为组织者`}},Ch=t=>({oracle_interface:"🔌 你了解了 Chainlink 预言机接口！AggregatorV3Interface 是标准接口。👉 查看 ETH/USD 价格面板学习价格预言机！",eth_usd_oracle:"💰 你使用了 ETH/USD 价格预言机！注意 Chainlink 返回 8 位小数精度。👉 购买保险体验价格转换！",random_generation:"🎲 你看到了伪随机数生成！使用区块信息生成随机降雨量。👉 更新天气数据体验随机性！",purchase_insurance:"🛡️ 保险购买成功！支付保费获得保障。👉 当干旱发生时申请赔付！",price_conversion:"🔄 你了解了价格转换！1e26 = 1e18 × 1e8 抵消 Chainlink 精度。👉 申请赔付体验参数化保险！",parametric_payout:"💸 赔付成功！参数化保险自动执行无需审核。👉 了解冷却期机制防止滥用！",cooldown_mechanism:"⏱️ 你了解了冷却期！24小时内只能索赔一次。👉 快进时间或查看合约余额！",contract_balance:"🏦 你查看了合约余额！管理员可提取保险池资金。🎉 你已掌握 Day 18 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",Th=t=>({oracle_interface:"📖 Chainlink 预言机接口(AggregatorV3Interface)是行业标准，定义了 latestRoundData() 等函数。它让智能合约能够安全地获取链外数据，如价格、天气等。接口标准化确保不同预言机可以互换使用。",eth_usd_oracle:"📖 ETH/USD 价格预言机返回的价格有 8 位小数精度。例如 $3000 返回 300000000000。这是因为金融数据通常需要高精度，而 Solidity 不支持浮点数。使用时需要注意精度转换。",random_generation:"📖 伪随机数生成使用区块信息（timestamp, coinbase, number）作为种子。这种方式适合测试和演示，但不适合生产环境，因为矿工可以影响结果。生产环境应使用 Chainlink VRF 等安全随机数方案。",purchase_insurance:"📖 购买保险函数检查用户支付足够的 ETH 且尚未投保。保费根据当前 ETH 价格动态计算，确保合约收到正确金额。投保状态存储在 hasInsurance 映射中，永久记录在区块链上。",price_conversion:"📖 价格转换公式 (USD × 1e26) / ETH价格 考虑了 Chainlink 的 8 位小数精度。1e26 = 1e18(wei精度) × 1e8(价格精度)。例如 $10 保费在 ETH $3000 时约为 0.0033 ETH。",parametric_payout:"📖 参数化保险(Parametric Insurance)是区块链保险的核心创新。传统保险需要人工审核理赔，而参数保险根据预设条件（如降雨量 < 500mm）自动赔付，无需信任第三方，大幅降低运营成本。",cooldown_mechanism:"📖 冷却期机制使用 block.timestamp 记录上次索赔时间，限制 24 小时内只能索赔一次。这是防止滥用的安全措施。在真实区块链上时间无法篡改，确保机制可靠。",contract_balance:"📖 合约余额管理是 DeFi 应用的基础。管理员可以提取合约中的 ETH，用于保险池资金管理。balance 操作需要注意重入攻击防护，使用 checks-effects-interactions 模式。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Eh=t=>({keccak256_hash:"🔐 你使用了 Keccak256 哈希算法！这是以太坊标准的哈希函数，将任意数据转换为 32 字节哈希值。👉 点击展开签名详情查看 R/S/V 组件！",ecdsa_signature:"🎯 你了解了 ECDSA 椭圆曲线签名！这是以太坊使用的数字签名算法，基于椭圆曲线密码学。👉 点击生成签名来体验完整流程！",signature_rsv:"📝 你分解了签名的 R/S/V 组件！以太坊签名由 65 字节组成：r(32) + s(32) + v(1)。👉 使用签名参与活动来解锁 ecrecover！",eip191_prefix:"📋 你了解了 EIP-191 签名前缀！\\x19Ethereum Signed Message:\\n32 是以太坊个人签名的标准，防止签名被滥用。👉 查看参与者列表完成所有概念！",ecrecover:"🔓 你使用了 ecrecover 函数！这是 Solidity 内置函数，通过签名恢复签名者地址。👉 查看参与者列表了解映射存储！",require_statement:"⚠️ 你使用了 require 验证语句！这是 Solidity 安全编程的基础，不满足条件时回滚交易。👉 查看参与者列表完成所有概念！",mapping_storage:"🗂️ 你使用了映射存储！mapping 是 Solidity 高效的键值对结构，用于存储用户参与状态。🎉 你已掌握 Day 19 所有核心概念！",msg_sender:"👤 你使用了 msg.sender！这是 Solidity 的全局变量，表示当前交易的发送者地址。👉 点击展开签名详情查看 R/S/V 组件！"})[t]||"📖 点击其他概念标签查看更多详细解释。",Sh=t=>({keccak256_hash:"📖 Keccak256 是以太坊原生的哈希函数（SHA-3 算法变体）。它将任意长度的输入转换为 32 字节的固定长度输出。在签名验证中，我们需要先对用户地址进行哈希，生成唯一的消息标识。",ecdsa_signature:"📖 ECDSA（椭圆曲线数字签名算法）是以太坊使用的签名方案。它基于椭圆曲线密码学，使用私钥生成签名，任何人可以用公钥验证签名。签名过程不可逆，无法从签名推导出私钥。",signature_rsv:"📖 以太坊签名由 65 字节组成：r（32字节）+ s（32字节）+ v（1字节）。r 和 s 是签名曲线坐标，v 是恢复标识符（27 或 28）。通过 v 可以推导出对应的公钥地址。",eip191_prefix:"📖 EIP-191 定义了以太坊签名的标准格式：\\x19Ethereum Signed Message:\\n32 前缀。这个前缀确保签名只能用于以太坊消息，防止签名被滥用到其他区块链或应用中。",ecrecover:"📖 ecrecover 是 EVM 内置函数，用于从签名数据恢复签名者地址。它接受消息哈希和 r、s、v 作为参数，返回签名的公钥对应的地址。这是签名验证的核心函数。",require_statement:"📖 require 是 Solidity 中最常用的错误处理语句。第一个参数是布尔条件，第二个参数是可选的错误消息。当条件为 false 时，交易回滚，消耗所有 Gas。",mapping_storage:"📖 mapping 是 Solidity 中的键值对数据结构，类似于哈希表。mapping(address => bool) 表示地址到布尔值的映射。访问不存在的键会返回默认值（false），写入时会创建键值对。",msg_sender:"📖 msg.sender 是 Solidity 的全局变量，表示当前调用者的地址。在构造函数中，msg.sender 是合约的部署者，因此成为组织者。这是权限控制的基础。"})[t]||"📖 点击其他概念标签查看更多详细解释。",uf={reentrancy_attack:{name:"重入攻击",icon:"🔥",unlockAt:1,message:"你了解了重入攻击！这是最著名的智能合约漏洞，攻击者通过递归调用窃取资金。",code:`// 重入攻击原理:
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
(bool sent, ) = msg.sender.call{value: amount}("");`}},Ih=t=>({reentrancy_attack:"🔥 你了解了重入攻击！这是最著名的智能合约漏洞。👉 存入ETH到金库开始攻击演示！",fallback_receive:"⚡ 你使用了回退函数！receive() 在接收ETH时触发，是重入攻击的入口点。👉 查看防护机制了解如何修复！",vulnerable_withdraw:"🔴 你发现了漏洞提款函数！它先发送ETH后更新余额。👉 查看防护机制了解如何修复！",deposit_function:"💰 你使用了存款函数！用户存入ETH增加余额。👉 现在尝试攻击漏洞版本！",checks_effects_interactions:"✅ 你了解了CEI模式！先更新状态再发送ETH是防止重入的关键。👉 尝试攻击安全版本！",reentrancy_guard:"🔒 你使用了重入锁！nonReentrant修饰符阻止函数重入调用。👉 查看代码对比巩固知识！",contract_balance:"🏦 你查看了合约余额！address(this).balance返回合约ETH数量。🎉 恭喜完成Day20全部学习！",code_comparison:"📜 你对比了漏洞代码和安全代码！理解差异是学习安全编程的关键。👉 切换到'金库管理员'查看金库状态！"})[t]||"📖 点击其他概念标签查看更多详细解释。",Dh=t=>({reentrancy_attack:"📖 重入攻击(Reentrancy Attack)是智能合约最著名的漏洞。攻击者利用合约在发送ETH后、更新状态前的窗口期，通过递归调用重复提款。2016年的The DAO攻击就是利用此漏洞，损失360万ETH，导致以太坊硬分叉。",fallback_receive:"📖 receive() 是 Solidity 的特殊函数，当合约接收 ETH 且没有附带数据时触发。在重入攻击中，攻击者的 receive() 函数会再次调用目标合约的提款函数，形成递归调用链。这是重入攻击的核心机制。",vulnerable_withdraw:"📖 漏洞提款函数违反了 Checks-Effects-Interactions 模式。它先执行外部调用（发送ETH），后更新状态（清零余额）。当外部调用触发攻击者的 receive() 时，余额还未更新，攻击者可以再次提款。",deposit_function:"📖 存款函数是重入攻击的前提条件。攻击者必须先存入一定数量的 ETH，获得提款资格。deposit() 使用 payable 修饰符接收 ETH，并使用 require 验证金额大于0。",checks_effects_interactions:"📖 CEI模式是 Solidity 安全编程的黄金法则。Checks（检查条件）→ Effects（更新状态）→ Interactions（外部调用）。关键是先更新状态再外部调用，这样即使被重入，状态已经是最新的，攻击者无法重复获利。",reentrancy_guard:"📖 重入锁(Reentrancy Guard)使用状态变量跟踪函数执行状态。_NOT_ENTERED(1) 表示未锁定，_ENTERED(2) 表示已锁定。modifier 在函数执行前锁定，执行后解锁。如果函数被重入调用，require 会阻止执行。OpenZeppelin 提供了标准实现。",contract_balance:"📖 address(this).balance 返回合约当前持有的 ETH 数量（以 wei 为单位）。在攻击合约中，它用于判断目标金库是否还有资金可以继续攻击。在管理函数中，它用于查询和提取合约资金。",code_comparison:"📖 通过对比漏洞代码和安全代码，可以清晰看到修复方法：1) 调整代码顺序，先更新状态再外部调用；2) 添加 nonReentrant 修饰符作为双重保护。理解这种差异对编写安全智能合约至关重要。",ierc721_interface:"📖 IERC721 是 ERC721 代币标准的接口定义，规定了 NFT 合约必须实现的基本功能，包括 balanceOf、ownerOf、transferFrom、approve 等函数。符合此接口的合约可以在所有支持 ERC721 的平台上使用。",mint_function:"📖 铸造函数是创建新 NFT 的核心。它从 0 地址（address(0)）转移代币到新所有者，这是 ERC721 标准中表示铸造的特殊约定。每次铸造都会触发 Transfer 事件，from 为 0 地址。",token_id_counter:"📖 代币 ID 计数器用于生成唯一的 tokenId。通常从 1 开始递增，确保每个 NFT 都有唯一标识。计数器使用 uint256 类型，可以支持几乎无限数量的 NFT。",token_uri:"📖 Token URI 是 NFT 元数据的链接，通常指向 IPFS 上的 JSON 文件。元数据包含 NFT 的名称、描述、图片等信息。这使得 NFT 可以展示丰富的内容，而不仅仅是区块链上的数字。",balance_of:"📖 balanceOf 函数查询地址拥有的 NFT 数量。它使用 _balances 映射实现，时间复杂度为 O(1)。这是 ERC721 标准的基础查询功能，也是所有权管理的核心。",transfer_from:"📖 transferFrom 函数将 NFT 从一个地址转移到另一个地址。调用者必须是被授权者或代币所有者。转移时会清除原有的授权，防止授权滥用。",approve_mechanism:"📖 授权机制允许代币所有者授权其他地址管理特定代币。approve 授权单个代币，getApproved 查询授权状态。这是 NFT 交易市场的基础，允许第三方代为转移代币。",approval_for_all:"📖 操作员授权(setApprovalForAll)允许所有者一次性授权某个地址管理其所有代币。这比逐个授权更高效，常用于 NFT 交易平台的批量操作场景。",safe_transfer:"📖 安全转移(safeTransferFrom)在转移前检查接收方是否实现了 IERC721Receiver 接口。这防止 NFT 被意外发送到不支持 ERC721 的合约中而被锁定。这是 ERC721 标准的重要安全特性。"})[t]||"📖 点击其他概念标签查看更多详细解释。",cf={ierc721_interface:{name:"IERC721接口",icon:"🔌",unlockAt:1,message:"你了解了ERC721标准接口！这是NFT合约必须实现的基本功能规范。",code:`interface IERC721 {
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
}`}},Rh=t=>({ierc721_interface:"🔌 你了解了ERC721标准接口！👉 点击铸造按钮创建你的第一个NFT！",mint_function:"🔨 你使用了铸造函数！👉 完成铸造查看计数器如何工作！",token_id_counter:"🔢 你了解了代币ID计数器！👉 查询地址余额了解持有情况！",token_uri:"🔗 你查看了Token URI！👉 尝试铸造或转移NFT！",balance_of:"📊 你查询了NFT余额！👉 查看代币授权状态了解approve机制！",transfer_from:"🔄 你执行了NFT转移！👉 尝试授权其他地址管理你的NFT！",approve_mechanism:"🔑 你使用了授权机制！👉 尝试设置操作员授权！",approval_for_all:"👥 你设置了操作员授权！👉 尝试使用安全转移功能！",safe_transfer:"🛡️ 你使用了安全转移！🎉 恭喜完成Day21所有学习！"})[t]||"📖 点击其他概念标签查看更多详细解释。",Oh=t=>({ierc721_interface:"📖 IERC721 是 ERC721 代币标准的接口定义，规定了 NFT 合约必须实现的基本功能，包括 balanceOf、ownerOf、transferFrom、approve 等函数。符合此接口的合约可以在所有支持 ERC721 的平台上使用。",mint_function:"📖 铸造函数是创建新 NFT 的核心。它从 0 地址（address(0)）转移代币到新所有者，这是 ERC721 标准中表示铸造的特殊约定。每次铸造都会触发 Transfer 事件，from 为 0 地址。",token_id_counter:"📖 代币 ID 计数器用于生成唯一的 tokenId。通常从 1 开始递增，确保每个 NFT 都有唯一标识。计数器使用 uint256 类型，可以支持几乎无限数量的 NFT。",token_uri:"📖 Token URI 是 NFT 元数据的链接，通常指向 IPFS 上的 JSON 文件。元数据包含 NFT 的名称、描述、图片等信息。这使得 NFT 可以展示丰富的内容，而不仅仅是区块链上的数字。",balance_of:"📖 balanceOf 函数查询地址拥有的 NFT 数量。它使用 _balances 映射实现，时间复杂度为 O(1)。这是 ERC721 标准的基础查询功能，也是所有权管理的核心。",transfer_from:"📖 transferFrom 函数将 NFT 从一个地址转移到另一个地址。调用者必须是被授权者或代币所有者。转移时会清除原有的授权，防止授权滥用。",approve_mechanism:"📖 授权机制允许代币所有者授权其他地址管理特定代币。approve 授权单个代币，getApproved 查询授权状态。这是 NFT 交易市场的基础，允许第三方代为转移代币。",approval_for_all:"📖 操作员授权(setApprovalForAll)允许所有者一次性授权某个地址管理其所有代币。这比逐个授权更高效，常用于 NFT 交易平台的批量操作场景。",safe_transfer:"📖 安全转移(safeTransferFrom)在转移前检查接收方是否实现了 IERC721Receiver 接口。这防止 NFT 被意外发送到不支持 ERC721 的合约中而被锁定。这是 ERC721 标准的重要安全特性。"})[t]||"📖 点击其他概念标签查看更多详细解释。",lf={chainlink_vrf:{name:"Chainlink VRF",icon:"🔢",unlockAt:1,message:"你了解了 Chainlink VRF！链下可验证随机函数，提供不可预测且可验证的随机数，解决链上随机数安全问题。",code:`interface VRFCoordinatorV2Interface {
    function requestRandomWords(
        bytes32 keyHash,
        uint64 subscriptionId,
        uint16 requestConfirmations,
        uint32 callbackGasLimit,
        uint32 numWords
    ) external returns (uint256 requestId);
}

contract FairChainLottery {
    VRFCoordinatorV2Interface COORDINATOR;
    bytes32 keyHash;
    uint64 subscriptionId;

    // 请求随机数
    function requestRandomness() internal {
        uint256 requestId = COORDINATOR.requestRandomWords(
            keyHash,
            subscriptionId,
            3, // requestConfirmations
            100000, // callbackGasLimit
            1 // numWords
        );
    }
}`},random_number_generation:{name:"随机数生成",icon:"🎲",unlockAt:2,message:"你了解了链上随机数生成的挑战！区块哈希、时间戳等链上数据可被矿工操纵，Chainlink VRF 提供安全解决方案。",code:`// ❌ 不安全的随机数（可被操纵）
uint256 randomNumber = uint256(keccak256(abi.encodePacked(
    block.timestamp,
    block.prevrandao,
    msg.sender
)));

// ✅ 安全的 Chainlink VRF 随机数
uint256 randomNumber = randomWords[0]; // 由 Chainlink 铂下节点生成
// - 不可预测：请求时无法预知结果
// - 可验证：可证明随机性来源
// - 抗操纵：矿工无法影响结果`},lottery_state_machine:{name:"彩票状态机",icon:"🎰",unlockAt:3,message:"你了解了彩票状态机！Open（开放购买）→ Calculating（计算中）→ Closed（已结束），确保流程安全有序。",code:`enum LotteryState {
    Open,        // 开放购买彩票
    Calculating, // 等待 VRF 随机数
    Closed       // 彩票结束，可领取奖金
}

LotteryState public state;

modifier onlyState(LotteryState _state) {
    require(state == _state, "Invalid state");
    _;
}

function buyTicket() public payable onlyState(LotteryState.Open) {
    // 购买彩票逻辑
}

function openLottery() public onlyState(LotteryState.Closed) {
    state = LotteryState.Open;
    // 重置彩票数据
}`},time_lock:{name:"时间锁",icon:"⏰",unlockAt:4,message:"你了解了时间锁机制！彩票结算后不能立即领取，防止抢跑攻击，给所有参与者公平的准备时间。",code:`uint256 public prizeLockTime = 1 hours;
uint256 public lotteryEndTime;

function claimPrize() public {
    require(
        block.timestamp >= lotteryEndTime + prizeLockTime,
        "Prize is still locked"
    );

    // 领取奖金逻辑
    payable(winner).transfer(prizePool);
}

// 时间锁的好处：
// 1. 防止抢跑攻击（Front-running）
// 2. 给所有参与者公平的准备时间
// 3. 防止 MEV（最大可提取价值）攻击`},request_randomness:{name:"请求随机数",icon:"📤",unlockAt:5,message:"你使用了请求随机数！用户购买彩票时触发 VRF 请求，Chainlink 网络将异步返回随机数。",code:`function buyTicket() public payable onlyState(LotteryState.Open) {
    require(msg.value >= ticketPrice, "Insufficient payment");

    players.push(msg.sender);
    ticketPrice += msg.value; // 累积奖金池

    // 达到目标人数或时间截止，开始抽奖
    if (players.length >= maxPlayers || block.timestamp >= lotteryEndTime) {
        startLottery();
    }
}

function startLottery() internal {
    state = LotteryState.Calculating;
    lotteryEndTime = block.timestamp;

    // 请求 Chainlink VRF 随机数
    requestId = COORDINATOR.requestRandomWords(
        keyHash,
        subscriptionId,
        3,
        100000,
        1
    );
}`},fulfill_random_words:{name:"完成随机词",icon:"📥",unlockAt:6,message:"你了解了完成随机词！Chainlink 回调函数，接收随机数并选出赢家，确保随机数不可预测。",code:`function fulfillRandomWords(
    uint256, /* requestId */
    uint256[] memory randomWords
) internal onlyCoordinator {
    require(state == LotteryState.Calculating, "Not calculating");

    // 使用随机数选出赢家
    uint256 winningIndex = randomWords[0] % players.length;
    winner = players[winningIndex];

    state = LotteryState.Closed;
    emit WinnerSelected(winner, requestId);
}

// onlyCoordinator 修饰符确保只有 Chainlink 可调用
modifier onlyCoordinator() {
    require(
        msg.sender == address(COORDINATOR),
        "Only coordinator can call"
    );
    _;
}`},prize_distribution:{name:"奖品分配",icon:"🏆",unlockAt:7,message:"你使用了奖品分配！赢家在时间锁后领取奖金，合约重置，准备下一轮彩票。",code:`function claimPrize() public onlyState(LotteryState.Closed) {
    require(msg.sender == winner, "Not the winner");

    // 检查时间锁
    require(
        block.timestamp >= lotteryEndTime + prizeLockTime,
        "Prize is still locked"
    );

    // 转账奖金
    uint256 prize = prizePool;
    prizePool = 0;
    payable(winner).transfer(prize);

    emit PrizeClaimed(winner, prize);
}

// 合约 Owner 可以提取未中奖的资金
function withdrawBalance() public onlyOwner {
    payable(owner()).transfer(address(this).balance);
}`},lottery_security:{name:"彩票安全",icon:"🛡️",unlockAt:8,message:"你了解了彩票安全！重入攻击防护、访问控制、紧急暂停机制，确保合约安全可靠。",code:`// 1. 重入攻击防护
bool private locked;

modifier nonReentrant() {
    require(!locked, "Reentrant call");
    locked = true;
    _;
    locked = false;
}

// 2. 访问控制
address public owner;
modifier onlyOwner() {
    require(msg.sender == owner, "Not owner");
    _;
}

// 3. 紧急暂停
bool public paused;

modifier whenNotPaused() {
    require(!paused, "Contract is paused");
    _;
}

function pause() public onlyOwner {
    paused = true;
}

// 4. 安全的随机数（使用 VRF）
// 5. 时间锁防止抢跑
// 6. 状态机确保流程正确`},lottery_state_enum:{name:"彩票状态枚举",icon:"🎰",unlockAt:1,message:"你了解了彩票状态枚举！Open（开放购买）→ Calculating（计算中）→ Closed（已结束），确保流程安全有序。",code:`enum LotteryState {
    Open,        // 开放购买彩票
    Calculating, // 等待 VRF 随机数
    Closed       // 彩票结束，可领取奖金
}

LotteryState public state;`},ownable_contract:{name:"Ownable 所有权",icon:"👑",unlockAt:2,message:"你了解了 Ownable 所有权模式！只有合约 Owner 可以执行管理操作，如开启/结束彩票。",code:`contract FairChainLottery is Ownable {
    address public owner;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
}`},entry_fee:{name:"参与费用",icon:"💰",unlockAt:3,message:"你了解了参与费用！玩家需要支付 ETH 参与彩票，费用累积到奖金池。",code:`uint256 public ticketPrice = 0.01 ether;

function enter() public payable {
    require(msg.value >= ticketPrice, "Insufficient payment");
    players.push(msg.sender);
    prizePool += msg.value;
}`},dynamic_array:{name:"动态数组",icon:"📋",unlockAt:4,message:"你了解了动态数组！用于存储所有参与者地址，支持动态添加元素。",code:`address[] public players;

function enter() public payable {
    players.push(msg.sender); // 动态添加参与者
}`},mock_vrf:{name:"Mock VRF",icon:"🎲",unlockAt:5,message:"你了解了 Mock VRF！本地测试用的模拟随机数生成器，模拟 Chainlink VRF 的行为。",code:`// Mock VRF 协调器（用于本地测试）
contract MockVRFCoordinator {
    function requestRandomWords(...) external returns (uint256 requestId) {
        // 模拟返回随机数
        uint256[] memory randomWords = new uint256[](numWords);
        randomWords[0] = uint256(keccak256(abi.encodePacked(block.timestamp)));
        fulfillRandomWords(requestId, randomWords);
    }
}`},random_winner:{name:"随机数选获胜者",icon:"🏆",unlockAt:6,message:"你了解了随机数选获胜者！使用 Chainlink VRF 返回的随机数，通过取模运算公平选出赢家。",code:`function fulfillRandomWords(uint256, uint256[] memory randomWords) internal {
    uint256 winningIndex = randomWords[0] % players.length;
    winner = players[winningIndex];
    emit WinnerSelected(winner, prizePool);
}`},call_transfer:{name:"call 转账",icon:"💸",unlockAt:7,message:"你了解了 call 转账！使用 call 方法发送奖金，比 transfer 更灵活，可指定 gas 限制。",code:`function claimPrize() public {
    require(msg.sender == winner, "Not winner");
    (bool success, ) = payable(winner).call{value: prizePool}("");
    require(success, "Transfer failed");
    prizePool = 0;
}`},event_logging:{name:"事件日志",icon:"📜",unlockAt:8,message:"你了解了事件日志！记录关键操作，让前端可以监听合约状态变化，实现实时更新。",code:`event TicketBought(address indexed player, uint256 amount);
event WinnerSelected(address indexed winner, uint256 prize);

function enter() public payable {
    players.push(msg.sender);
    emit TicketBought(msg.sender, msg.value);
}`}},df={lending_pool:{name:"借贷池",icon:"🏦",unlockAt:1,message:"你了解了借贷池！DeFi借贷协议的核心，用户存入资产成为流动性提供者，借款人可以借出资产。",code:`contract SimpleLending {
    mapping(address => uint256) public deposits;
    uint256 public totalDeposits;

    // 用户存入资产
    function deposit() public payable {
        deposits[msg.sender] += msg.value;
        totalDeposits += msg.value;
    }
}`},collateral_deposit:{name:"抵押存入",icon:"💰",unlockAt:2,message:"你了解了抵押存入！借款人需要存入抵押品才能借款，这是DeFi借贷的安全机制。",code:`function depositCollateral() public payable {
    collateral[msg.sender] += msg.value;
    // 更新借款额度
    updateBorrowLimit(msg.sender);
}`},borrow_mechanism:{name:"借款机制",icon:"🔓",unlockAt:3,message:"你了解了借款机制！借款人可以借出不超过抵押品价值的资产，需要维持健康的健康因子。",code:`function borrow(uint256 amount) public {
    uint256 borrowLimit = (collateral[msg.sender] * collateralFactor) / 100;
    require(borrows[msg.sender] + amount <= borrowLimit, "Insufficient collateral");

    borrows[msg.sender] += amount;
    require(token.transfer(msg.sender, amount), "Transfer failed");
}`},health_factor:{name:"健康因子",icon:"❤️",unlockAt:4,message:"你了解了健康因子！健康因子 = (抵押品价值 × 清算阈值) / 债务金额，低于1时会被清算。",code:`function getHealthFactor(address user) public view returns (uint256) {
    uint256 collateralValue = getCollateralValue(collateral[user]);
    uint256 debtValue = getDebtValue(borrows[user]);
    uint256 healthFactor = (collateralValue * liquidationThreshold) / debtValue;
    return healthFactor;
}`},liquidation_threshold:{name:"清算阈值",icon:"⚠️",unlockAt:5,message:"你了解了清算阈值！当健康因子低于阈值时，任何人都可以触发清算来保护协议。",code:`uint256 public constant liquidationThreshold = 80; // 80%
// 清算阈值 = 80% 意味着当债务达到抵押品价值的 80% 时，健康因子 = 1`},interest_calculation:{name:"利息计算",icon:"📊",unlockAt:6,message:"你了解了利息计算！借贷需要支付利息，通常基于借款金额和时间计算。",code:`function calculateInterest(address user) public view returns (uint256) {
    uint256 principal = borrows[user];
    uint256 timeElapsed = block.timestamp - lastUpdateTime[user];
    uint256 interest = (principal * interestRate * timeElapsed) / 1e18;
    return interest;
}`},repay_function:{name:"还款功能",icon:"💸",unlockAt:7,message:"你使用了还款功能！偿还借款后会减少债务，提高健康因子。",code:`function repay(uint256 amount) public {
    require(borrows[msg.sender] >= amount, "Repay amount exceeds debt");

    require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");
    borrows[msg.sender] -= amount;
    emit Repaid(msg.sender, amount);
}`},lending_security:{name:"借贷安全",icon:"🛡️",unlockAt:8,message:"你了解了借贷安全机制！通过抵押、健康因子和清算机制来保护协议资金安全。",code:`// 借贷安全机制包括：
// 1. 抵押品存入 - 超额抵押
// 2. 健康因子监控 - 实时监控风险
// 3. 清算机制 - 自动平仓保护
// 4. 借款额度限制 - 防止过度借贷`},deposit_function:{name:"存款功能",icon:"💰",unlockAt:1,message:"你了解了存款功能！用户存入资产成为流动性提供者，可以随时取出本金和利息。",code:`function deposit() public payable {
    deposits[msg.sender] += msg.value;
    totalDeposits += msg.value;
    emit Deposited(msg.sender, msg.value);
}`},collateral_mechanism:{name:"抵押机制",icon:"🔒",unlockAt:2,message:"你了解了抵押机制！借款人需要存入抵押品，这是DeFi借贷的安全保障。",code:`function depositCollateral() public payable {
    collateral[msg.sender] += msg.value;
    updateBorrowLimit(msg.sender);
    emit CollateralDeposited(msg.sender, msg.value);
}`},collateral_factor:{name:"抵押因子",icon:"📊",unlockAt:3,message:"你了解了抵押因子！决定用户可以借出多少资产，通常为抵押品价值的50-75%。",code:`uint256 public collateralFactor = 75; // 75%

function getBorrowLimit(address user) public view returns (uint256) {
    return (collateral[user] * collateralFactor) / 100;
}`},borrow_function:{name:"借款功能",icon:"💸",unlockAt:4,message:"你了解了借款功能！用户可以借出不超过抵押品价值的资产，需要支付利息。",code:`function borrow(uint256 amount) public {
    require(amount <= getBorrowLimit(msg.sender), "Exceeds borrow limit");
    borrows[msg.sender] += amount;
    payable(msg.sender).transfer(amount);
}`},checks_effects_interactions:{name:"CEI 安全模式",icon:"🛡️",unlockAt:7,message:"你了解了 CEI 安全模式！Checks-Effects-Interactions 模式防止重入攻击。",code:`function repay(uint256 amount) public {
    // 1. Checks: 验证条件
    require(borrows[msg.sender] >= amount, "Repay amount exceeds debt");
    
    // 2. Effects: 更新状态
    borrows[msg.sender] -= amount;
    
    // 3. Interactions: 外部调用
    require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");
}`},reentrancy_guard:{name:"重入保护",icon:"🔐",unlockAt:8,message:"你了解了重入保护！使用 nonReentrant 修饰符防止重入攻击，保护资金安全。",code:`bool private locked;

modifier nonReentrant() {
    require(!locked, "Reentrant call");
    locked = true;
    _;
    locked = false;
}

function withdraw() public nonReentrant {
    uint256 amount = deposits[msg.sender];
    deposits[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
}`}},pf={escrow_contract:{name:"托管合约",icon:"📜",unlockAt:1,message:"你了解了托管合约！买卖双方的资金托管在第三方合约中，满足条件后自动释放。",code:`contract EnhancedSimpleEscrow {
    enum State { Pending, Released, Refunded, Disputed }

    struct Deposit {
        address buyer;
        address seller;
        uint256 amount;
        State state;
    }

    mapping(uint256 => Deposit) public deposits;
}`},buyer_seller_arbitration:{name:"买卖仲裁",icon:"⚖️",unlockAt:2,message:"你了解了买卖仲裁！第三方仲裁者可以处理买卖双方的争议，保护双方利益。",code:`function resolveDispute(uint256 depositId, bool favorBuyer) public onlyArbiter {
    Deposit storage deposit = deposits[depositId];

    if (favorBuyer) {
        // 退款给买家
        deposit.state = State.Refunded;
        payable(deposit.buyer).transfer(deposit.amount);
    } else {
        // 释放给卖家
        deposit.state = State.Released;
        payable(deposit.seller).transfer(deposit.amount);
    }
}`},dispute_resolution:{name:"争议解决",icon:"🔨",unlockAt:3,message:"你了解了争议解决！买卖双方可以发起争议，由仲裁者公正裁决。",code:`function raiseDispute(uint256 depositId) public {
    Deposit storage deposit = deposits[depositId];
    require(msg.sender == deposit.buyer || msg.sender == deposit.seller, "Not a party");
    require(deposit.state == State.Pending, "Invalid state");

    deposit.state = State.Disputed;
    emit DisputeRaised(depositId);
}`},time_locked_release:{name:"时间锁释放",icon:"⏰",unlockAt:4,message:"你了解了时间锁释放！买家可以在一定时间内确认收货，超时自动释放资金。",code:`function confirmDelivery(uint256 depositId) public {
    Deposit storage deposit = deposits[depositId];
    require(msg.sender == deposit.buyer, "Not buyer");
    require(block.timestamp >= releaseTime[depositId], "Too early");
    require(deposit.state == State.Pending, "Already processed");

    deposit.state = State.Released;
    payable(deposit.seller).transfer(deposit.amount);
}`},mutual_cancellation:{name:"协商取消",icon:"🤝",unlockAt:5,message:"你了解了协商取消！买卖双方可以协商一致取消交易，资金退回买家。",code:`function cancelMutual(uint256 depositId) public {
    Deposit storage deposit = deposits[depositId];
    require(deposit.state == State.Pending, "Invalid state");
    require(
        msg.sender == deposit.buyer && deposit.sellerApprovedCancel[depositId] ||
        msg.sender == deposit.seller && deposit.buyerApprovedCancel[depositId],
        "Both parties must approve"
    );

    deposit.state = State.Refunded;
    payable(deposit.buyer).transfer(deposit.amount);
}`},arbiter_role:{name:"仲裁者角色",icon:"👑",unlockAt:6,message:"你了解了仲裁者角色！仲裁者是可信的第三方，负责公正裁决争议。",code:`contract EnhancedSimpleEscrow {
    address public arbiter;

    modifier onlyArbiter() {
        require(msg.sender == arbiter, "Only arbiter");
        _;
    }

    constructor(address _arbiter) {
        arbiter = _arbiter;
    }
}`},multi_party_security:{name:"多方安全",icon:"🔐",unlockAt:7,message:"你了解了多方安全机制！通过状态机、时间锁和仲裁机制保护多方利益。",code:`// 多方安全机制：
// 1. 状态机管理 - Pending -> Released/Refunded/Disputed
// 2. 时间锁 - 防止卖家过早提取
// 3. 双方同意取消 - 需要买卖双方都同意
// 4. 仲裁介入 - 争议由第三方公正裁决`},state_management:{name:"状态管理",icon:"📊",unlockAt:8,message:"你了解了状态管理！使用枚举管理合约状态，确保交易流程的正确执行。",code:`enum State {
    Pending,      // 待处理
    Released,     // 已释放
    Refunded,     // 已退款
    Disputed      // 争议中
}

// 状态转换规则：
// Pending -> Released: 买家确认收货
// Pending -> Refunded: 协商取消或超时
// Pending -> Disputed: 发起争议
// Disputed -> Released/Refunded: 仲裁裁决`},enum_state_machine:{name:"枚举与状态机",icon:"🎰",unlockAt:1,message:"你了解了枚举与状态机！使用 enum 定义交易状态，确保流程按正确顺序执行。",code:`enum State { Pending, Confirmed, Disputed, Resolved, Cancelled }
State public state;

modifier onlyState(State _state) {
    require(state == _state, "Invalid state");
    _;
}`},immutable_access:{name:"Immutable 访问控制",icon:"🔐",unlockAt:2,message:"你了解了 Immutable 访问控制！使用 immutable 关键字定义不可变的地址变量，节省 gas。",code:`address public immutable buyer;
address public immutable seller;
address public immutable arbiter;

constructor(address _seller, address _arbiter) {
    buyer = msg.sender; // 部署者为买家
    seller = _seller;
    arbiter = _arbiter;
}`},block_timestamp:{name:"区块时间戳",icon:"⏰",unlockAt:3,message:"你了解了区块时间戳！使用 block.timestamp 实现时间锁功能，保护交易安全。",code:`uint256 public constant TIMEOUT = 7 days;
uint256 public createdAt;

constructor() {
    createdAt = block.timestamp;
}

function isTimeout() public view returns (bool) {
    return block.timestamp >= createdAt + TIMEOUT;
}`},receive_revert:{name:"Receive 与 Revert",icon:"📥",unlockAt:4,message:"你了解了 Receive 与 Revert！使用 receive() 接收 ETH，使用 revert() 拒绝非法操作。",code:`receive() external payable {
    // 接收 ETH
    emit PaymentReceived(msg.sender, msg.value);
}

modifier onlyBuyer() {
    require(msg.sender == buyer, "Only buyer");
    _;
}`},event_logging:{name:"事件日志",icon:"📜",unlockAt:5,message:"你了解了事件日志！记录关键操作，让前端可以监听合约状态变化。",code:`event PaymentDeposited(address indexed sender, uint256 amount);
event PaymentReleased(address indexed recipient, uint256 amount);
event DisputeRaised(address indexed by, string reason);

function deposit() public payable onlyBuyer {
    emit PaymentDeposited(msg.sender, msg.value);
}`},call_transfer:{name:"Call 转账",icon:"💸",unlockAt:6,message:"你了解了 Call 转账！使用 call 方法发送 ETH，比 transfer 更灵活安全。",code:`function releasePayment() public onlyState(State.Confirmed) {
    state = State.Released;
    (bool success, ) = payable(seller).call{value: address(this).balance}("");
    require(success, "Transfer failed");
    emit PaymentReleased(seller, address(this).balance);
}`}},ff={amm_formula:{name:"AMM公式",icon:"📐",unlockAt:1,message:"你了解了AMM恒定乘积公式！x × y = k，保持储备乘积恒定，自动做市。",code:`// 恒定乘积公式 (x * y = k)
function getOutput(uint256 inputAmount, uint256 inputReserve, uint256 outputReserve) public pure returns (uint256) {
    require(inputReserve > 0 && outputReserve > 0, "Invalid reserves");

    uint256 inputAmountWithFee = inputAmount * 997; // 0.3% fee
    uint256 numerator = inputAmountWithFee * outputReserve;
    uint256 denominator = (inputReserve * 1000) + inputAmountWithFee;

    return numerator / denominator;
}`},liquidity_pool:{name:"流动性池",icon:"💧",unlockAt:2,message:"你了解了流动性池！LP代币代表流动性提供者的份额，可以赚取交易手续费。",code:`struct LiquidityPool {
    uint256 reserveA;      // Token A 储备
    uint256 reserveB;      // Token B 储备
    uint256 totalSupply;   // LP 代币总供应
    mapping(address => uint256) balance;
}

// LP 代币数量 = sqrt(reserveA * reserveB) - 初始流动性`},constant_product:{name:"恒定乘积",icon:"✖️",unlockAt:3,message:"你了解了恒定乘积！x × y = k，交易前后k值不变，自动调整价格。",code:`// 恒定乘积不变量
uint256 constant k = reserveA * reserveB;

// 交易前: 1000 * 1000 = 1,000,000
// 交易后: 900 * 1111.11 ≈ 1,000,000 (k保持不变)

// 价格 = y / x
// 价格随储备变化自动调整`},add_liquidity:{name:"添加流动性",icon:"➕",unlockAt:4,message:"你使用了添加流动性！存入两种代币，获得LP代币作为流动性提供凭证。",code:`function addLiquidity(uint256 amountA, uint256 amountB) public {
    require(amountA > 0 && amountB > 0, "Invalid amounts");

    // 转入代币
    tokenA.transferFrom(msg.sender, address(this), amountA);
    tokenB.transferFrom(msg.sender, address(this), amountB);

    // 铸造 LP 代币
    uint256 liquidity = Math.sqrt(amountA * amountB);
    _mint(msg.sender, liquidity);

    reserveA += amountA;
    reserveB += amountB;
}`},swap_mechanism:{name:"交易机制",icon:"🔄",unlockAt:5,message:"你了解了交易机制！根据恒定乘积公式自动计算输出，无滑点限制。",code:`function swapAforB(uint256 amountIn) public {
    uint256 amountOut = getOutput(amountIn, reserveA, reserveB);

    // 更新储备
    reserveA += amountIn;
    reserveB -= amountOut;

    // 执行转账
    tokenA.transferFrom(msg.sender, address(this), amountIn);
    tokenB.transfer(msg.sender, amountOut);
}`},remove_liquidity:{name:"移除流动性",icon:"➖",unlockAt:6,message:"你了解了移除流动性！销毁LP代币，按比例取回两种代币。",code:`function removeLiquidity(uint256 liquidity) public {
    require(balanceOf(msg.sender) >= liquidity, "Insufficient balance");

    uint256 amountA = (liquidity * reserveA) / totalSupply;
    uint256 amountB = (liquidity * reserveB) / totalSupply;

    _burn(msg.sender, liquidity);

    reserveA -= amountA;
    reserveB -= amountB;

    tokenA.transfer(msg.sender, amountA);
    tokenB.transfer(msg.sender, amountB);
}`},slippage_calculation:{name:"滑点计算",icon:"📉",unlockAt:7,message:"你了解了滑点！交易量大时价格影响大，实际获得代币会少于理论值。",code:`// 滑点 = 预期价格 - 实际价格
// 最小输出 = 预期输出 * (1 - 滑点容忍度)

function swap(uint256 amountIn, uint256 minOut) public {
    uint256 amountOut = getOutput(amountIn, reserveA, reserveB);
    require(amountOut >= minOut, "Slippage exceeded");
    // ... 执行交易
}`},reserves_management:{name:"储备管理",icon:"🗄️",unlockAt:8,message:"你了解了储备管理！AMM自动管理两种代币的储备，确保流动性充足。",code:`// 储备管理规则：
// 1. 交易后自动更新储备
// 2. k = reserveA * reserveB 保持恒定
// 3. 任何人都可以添加/移除流动性
// 4. 流动性提供者赚取手续费收益`},constant_product_formula:{name:"恒定乘积公式",icon:"📐",unlockAt:1,message:"你了解了恒定乘积公式！x × y = k，自动做市商的核心算法。",code:`// 恒定乘积公式: x * y = k
uint256 public constant K = 1000000;

function getPrice(uint256 x, uint256 y) public pure returns (uint256) {
    return (y * 1e18) / x; // 价格 = y / x
}

// 交易时保持 k 不变
function swap(uint256 dx) public {
    uint256 dy = (y * dx) / (x + dx);
    x += dx;
    y -= dy;
}`},liquidity_pool:{name:"流动性池",icon:"💧",unlockAt:2,message:"你了解了流动性池！用户存入两种代币，提供流动性赚取手续费。",code:`mapping(address => uint256) public liquidity;
uint256 public totalLiquidity;

function addLiquidity(uint256 amountA, uint256 amountB) public {
    tokenA.transferFrom(msg.sender, address(this), amountA);
    tokenB.transferFrom(msg.sender, address(this), amountB);
    
    uint256 lpTokens = calculateLPTokens(amountA, amountB);
    liquidity[msg.sender] += lpTokens;
    totalLiquidity += lpTokens;
}`},price_discovery:{name:"价格发现",icon:"📊",unlockAt:3,message:"你了解了价格发现！AMM 通过算法自动确定代币价格，无需订单簿。",code:`// AMM 自动价格发现
function getTokenAPrice() public view returns (uint256) {
    return (reserveB * 1e18) / reserveA;
}

// 交易影响价格
function swapAForB(uint256 amountA) public {
    uint256 amountB = getAmountOut(amountA, reserveA, reserveB);
    // 交易后价格自动调整
}`},slippage_protection:{name:"滑点保护",icon:"🛡️",unlockAt:4,message:"你了解了滑点保护！设置最大可接受滑点，防止大额交易导致价格剧烈波动。",code:`uint256 public constant MAX_SLIPPAGE = 50; // 0.5%

function swapWithSlippageProtection(uint256 amountIn, uint256 minAmountOut) public {
    uint256 amountOut = getAmountOut(amountIn);
    uint256 expectedOut = getExpectedOut(amountIn);
    
    // 检查滑点
    require(amountOut >= expectedOut * (1000 - MAX_SLIPPAGE) / 1000, "Slippage too high");
    require(amountOut >= minAmountOut, "Insufficient output");
    
    // 执行交易
}`}},mf={nft_marketplace:{name:"NFT市场",icon:"🏪",unlockAt:1,message:"你了解了NFT市场！去中心化的NFT交易市场，允许用户买卖NFT。",code:`contract NFTMarketplace {
    struct Listing {
        uint256 tokenId;
        address seller;
        uint256 price;
        bool active;
    }

    mapping(uint256 => Listing) public listings;

    IERC721 public nft;
    IERC20 public token;
}`},listing_mechanism:{name:"挂单机制",icon:"📋",unlockAt:2,message:"你了解了挂单机制！卖家可以设置NFT的价格，买家可以按价格购买。",code:`function listItem(uint256 tokenId, uint256 price) public {
    require(nft.ownerOf(tokenId) == msg.sender, "Not owner");
    require(nft.getApproved(tokenId) == address(this), "Market not approved");

    listings[tokenId] = Listing({
        tokenId: tokenId,
        seller: msg.sender,
        price: price,
        active: true
    });

    emit ItemListed(tokenId, price);
}`},royalty_payment:{name:"版税支付",icon:"💎",unlockAt:3,message:"你了解了版税支付！每次转售时，原创作者可以获得一定比例的版税。",code:`function _distributeRoyalty(uint256 tokenId, uint256 salePrice) internal {
    address creator = nft.getCreator(tokenId);
    uint256 royalty = (salePrice * royaltyRate) / 10000; // basis points
    if (royalty > 0) {
        token.transfer(creator, royalty);
    }
}`},marketplace_security:{name:"市场安全",icon:"🔒",unlockAt:4,message:"你了解了市场安全！使用托管机制保护NFT，确保交易安全。",code:`// 市场安全机制：
// 1. 挂单前需要授权 (approve)
// 2. NFT托管在合约中
// 3. 只有卖家可以取消挂单
// 4. 付款后NFT转移给买家`},buy_now_price:{name:"一口价",icon:"🏷️",unlockAt:5,message:"你使用了一口价购买！卖家设置固定价格，买家可以直接购买。",code:`function buyItem(uint256 tokenId) public payable {
    Listing storage listing = listings[tokenId];
    require(listing.active, "Not for sale");
    require(msg.value >= listing.price, "Insufficient payment");

    listing.active = false;

    _distributeRoyalty(tokenId, listing.price);
    nft.transferFrom(listing.seller, msg.sender, tokenId);

    if (msg.value > listing.price) {
        payable(listing.seller).send(msg.value - listing.price);
    }
}`},cancel_listing:{name:"取消挂单",icon:"❌",unlockAt:6,message:"你了解了取消挂单！卖家可以随时取消挂单，NFT会退回卖家。",code:`function cancelListing(uint256 tokenId) public {
    Listing storage listing = listings[tokenId];
    require(listing.active, "Not for sale");
    require(listing.seller == msg.sender, "Not seller");

    listing.active = false;
    emit ItemCancelled(tokenId);
}`},nft_escrow:{name:"NFT托管",icon:"📦",unlockAt:7,message:"你了解了NFT托管！挂单时NFT托管在合约中，交易完成后转移给买家。",code:`// NFT托管流程：
// 1. 卖家授权合约 approve(market, tokenId)
// 2. 调用 listItem - NFT转到合约托管
// 3. 买家购买 - NFT从合约转到买家
// 4. 取消挂单 - NFT退回卖家`},owner_revenue:{name:"卖家收益",icon:"💰",unlockAt:8,message:"你了解了卖家收益！卖家获得出售NFT的收入，合约收取手续费。",code:`function buyItem(uint256 tokenId) public payable {
    Listing storage listing = listings[tokenId];
    uint256 salePrice = listing.price;

    // 收益分配：
    // 1. 版税给创作者
    uint256 royalty = (salePrice * royaltyRate) / 10000;
    // 2. 卖家获得剩余
    uint256 sellerRevenue = salePrice - royalty;
    // 3. 手续费（可选）

    payable(listing.seller).transfer(sellerRevenue);
}`},struct_listing:{name:"挂单结构体",icon:"📋",unlockAt:1,message:"你了解了挂单结构体！使用 struct 定义 NFT 挂单信息，包含价格、卖家等字段。",code:`struct Listing {
    uint256 tokenId;
    uint256 price;
    address seller;
    bool active;
}

mapping(uint256 => Listing) public listings;

function listNFT(uint256 tokenId, uint256 price) public {
    listings[tokenId] = Listing(tokenId, price, msg.sender, true);
}`},double_mapping:{name:"双重映射",icon:"🔗",unlockAt:2,message:"你了解了双重映射！使用 mapping(address => mapping(uint256 => bool)) 追踪用户拥有的 NFT。",code:`// 双重映射: 用户 => TokenID => 是否拥有
mapping(address => mapping(uint256 => bool)) public userNFTs;

function buyNFT(uint256 tokenId) public payable {
    Listing memory listing = listings[tokenId];
    require(msg.value >= listing.price, "Insufficient payment");
    
    // 更新所有权
    userNFTs[listing.seller][tokenId] = false;
    userNFTs[msg.sender][tokenId] = true;
}`},fund_distribution:{name:"资金分配",icon:"💰",unlockAt:3,message:"你了解了资金分配！购买 NFT 时自动分配资金给卖家和平台。",code:`uint256 public constant PLATFORM_FEE = 250; // 2.5%

function distributeFunds(uint256 amount, address seller) internal {
    uint256 platformFee = (amount * PLATFORM_FEE) / 10000;
    uint256 sellerRevenue = amount - platformFee;
    
    payable(platform).transfer(platformFee);
    payable(seller).transfer(sellerRevenue);
}`},reentrancy_guard:{name:"重入保护",icon:"🔐",unlockAt:4,message:"你了解了重入保护！使用 nonReentrant 修饰符防止重入攻击，保护资金安全。",code:`bool private locked;

modifier nonReentrant() {
    require(!locked, "Reentrant call");
    locked = true;
    _;
    locked = false;
}

function buyNFT(uint256 tokenId) public payable nonReentrant {
    // 安全执行购买
}`},list_function:{name:"挂单功能",icon:"📤",unlockAt:5,message:"你了解了挂单功能！卖家可以创建 NFT 挂单，设置价格和数量。",code:`function listNFT(uint256 tokenId, uint256 price) public {
    require(nft.ownerOf(tokenId) == msg.sender, "Not owner");
    require(price > 0, "Price must be positive");
    
    listings[tokenId] = Listing(tokenId, price, msg.sender, true);
    nft.transferFrom(msg.sender, address(this), tokenId);
    
    emit NFTListed(tokenId, price, msg.sender);
}`},buy_function:{name:"购买功能",icon:"🛒",unlockAt:6,message:"你了解了购买功能！买家可以购买挂单中的 NFT，自动转移所有权。",code:`function buyNFT(uint256 tokenId) public payable nonReentrant {
    Listing memory listing = listings[tokenId];
    require(listing.active, "Not for sale");
    require(msg.value >= listing.price, "Insufficient payment");
    
    // 转移 NFT
    nft.transferFrom(address(this), msg.sender, tokenId);
    listing.active = false;
    
    // 分配资金
    distributeFunds(msg.value, listing.seller);
    
    emit NFTSold(tokenId, listing.price, msg.sender);
}`},event_logging:{name:"事件日志",icon:"📜",unlockAt:7,message:"你了解了事件日志！记录挂单、购买、取消等关键操作，便于前端监听。",code:`event NFTListed(uint256 indexed tokenId, uint256 price, address indexed seller);
event NFTSold(uint256 indexed tokenId, uint256 price, address indexed buyer);
event ListingCancelled(uint256 indexed tokenId);

function listNFT(uint256 tokenId, uint256 price) public {
    // ... 挂单逻辑
    emit NFTListed(tokenId, price, msg.sender);
}`},cancel_function:{name:"取消功能",icon:"❌",unlockAt:8,message:"你了解了取消功能！卖家可以取消挂单，取回自己的 NFT。",code:`function cancelListing(uint256 tokenId) public {
    Listing storage listing = listings[tokenId];
    require(listing.seller == msg.sender, "Not seller");
    require(listing.active, "Not active");
    
    listing.active = false;
    nft.transferFrom(address(this), msg.sender, tokenId);
    
    emit ListingCancelled(tokenId);
}`}},gf={reward_debt_pattern:{name:"奖励债务模式",icon:"📝",unlockAt:1,message:"你了解了奖励债务模式！这是DeFi收益耕作的核心机制，通过累积奖励债务来准确计算用户收益。",code:`struct StakerInfo {
    uint256 stakedAmount;    // 已质押数量
    uint256 rewardDebt;      // 累积奖励债务
    uint256 lastUpdate;      // 上次更新时间
}

// 每次操作前先更新奖励
function updateRewards(address staker) internal {
    uint256 timeDiff = block.timestamp - stakerInfo[staker].lastUpdate;
    if (timeDiff > 0 && stakerInfo[staker].stakedAmount > 0) {
        uint256 newReward = (timeDiff * rewardRatePerSecond * stakerInfo[staker].stakedAmount) / rewardMultiplier;
        stakerInfo[staker].rewardDebt += newReward;
    }
    stakerInfo[staker].lastUpdate = block.timestamp;
}`},staking_token_decimals:{name:"精度处理",icon:"🔢",unlockAt:2,message:"你了解了精度处理！通过10^decimals倍数将小数计算转换为整数计算，避免Solidity中的精度丢失。",code:`// 精度处理示例
uint256 constant stakingTokenDecimals = 18;
uint256 constant rewardMultiplier = 10 ** stakingTokenDecimals;

// 计算奖励时使用精度倍数
function calculateReward(uint256 timeDiff, uint256 stakedAmount) public pure returns (uint256) {
    return (timeDiff * rewardRatePerSecond * stakedAmount) / rewardMultiplier;
}`},time_weighted_calculation:{name:"时间加权计算",icon:"⏱️",unlockAt:3,message:"你了解了时间加权计算！奖励按质押时间和数量线性累积，质押时间越长、数量越多，奖励越多。",code:`// 时间加权奖励计算
// 公式：奖励 = 时间差 × 每秒奖励 × 质押量 / 精度倍数

function updateRewards(address staker) internal {
    StakerInfo storage info = stakerInfo[staker];

    // 计算时间差（秒）
    uint256 timeDiff = block.timestamp - info.lastUpdate;

    // 线性累积奖励
    if (timeDiff > 0 && info.stakedAmount > 0) {
        uint256 pendingReward = (timeDiff * rewardRatePerSecond * info.stakedAmount) / 1e18;
        info.rewardDebt += pendingReward;
    }

    info.lastUpdate = block.timestamp;
}`},reentrancy_guard:{name:"重入保护",icon:"🛡️",unlockAt:4,message:"你了解了重入保护！ReentrancyGuard防止函数被重入调用，保护DeFi合约的资金安全。",code:`// OpenZeppelin ReentrancyGuard
abstract contract ReentrancyGuard {
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;
    uint256 private _status;

    modifier nonReentrant() {
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");
        _status = _ENTERED;
        _;
        _status = _NOT_ENTERED;
    }
}

// 使用重入保护
function emergencyWithdraw() public nonReentrant {
    // 函数体
}`},stake_function:{name:"质押功能",icon:"💧",unlockAt:5,message:"你使用了质押功能！遵循Checks-Effects-Interactions模式，先验证条件，再更新状态，最后进行外部调用。",code:`function stake(uint256 amount) public nonReentrant {
    // Checks: 验证条件
    require(amount > 0, "Amount must be greater than 0");
    require(stakingToken.balanceOf(msg.sender) >= amount, "Insufficient balance");

    // Effects: 更新状态
    updateRewards(msg.sender);  // 先更新奖励
    stakerInfo[msg.sender].stakedAmount += amount;
    totalStaked += amount;

    // Interactions: 外部调用
    require(stakingToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");

    emit Staked(msg.sender, amount);
}`},unstake_function:{name:"取消质押",icon:"💸",unlockAt:6,message:"你使用了取消质押功能！可以部分或全部取消质押，操作前会先更新奖励确保用户获得所有应得奖励。",code:`function unstake(uint256 amount) public nonReentrant {
    // Checks
    require(amount > 0, "Amount must be greater than 0");
    require(stakerInfo[msg.sender].stakedAmount >= amount, "Insufficient staked amount");

    // Effects
    updateRewards(msg.sender);  // 先更新奖励
    stakerInfo[msg.sender].stakedAmount -= amount;
    totalStaked -= amount;

    // Interactions
    stakingToken.transfer(msg.sender, amount);

    emit Unstaked(msg.sender, amount);
}`},claim_rewards:{name:"领取奖励",icon:"🎁",unlockAt:7,message:"你使用了领取奖励功能！将累积的奖励债务转换为实际的奖励代币，领取后可以重新累积新的奖励。",code:`function claimRewards() public nonReentrant {
    updateRewards(msg.sender);

    uint256 reward = stakerInfo[msg.sender].rewardDebt;
    require(reward > 0, "No rewards to claim");
    require(rewardToken.balanceOf(address(this)) >= reward, "Insufficient reward balance");

    // 清空奖励债务
    stakerInfo[msg.sender].rewardDebt = 0;

    // 转移奖励代币
    require(rewardToken.transfer(msg.sender, reward), "Transfer failed");

    emit RewardsClaimed(msg.sender, reward);
}`},emergency_withdraw:{name:"紧急提取",icon:"🚨",unlockAt:8,message:"你了解了紧急提取功能！紧急情况下可以立即取回质押代币，但会放弃所有待领取奖励，这是保护用户资金的最后手段。",code:`function emergencyWithdraw() public nonReentrant {
    StakerInfo storage info = stakerInfo[msg.sender];
    uint256 amount = info.stakedAmount;

    require(amount > 0, "No staked amount");

    // 清空所有状态（放弃奖励）
    info.stakedAmount = 0;
    info.rewardDebt = 0;
    info.lastUpdate = block.timestamp;
    totalStaked -= amount;

    // 立即返还质押代币
    stakingToken.transfer(msg.sender, amount);

    emit EmergencyWithdraw(msg.sender, amount);
}`}},hf={token_governance:{name:"代币治理模式",icon:"🗳️",unlockAt:1,message:"你了解了代币治理模式！在DAO中，代币持有量决定投票权，1代币=1票，实现去中心化决策。",code:`// 投票权重 = 代币持有量
function vote(uint256 _proposalId, bool _support) external {
    uint256 weight = governanceToken.balanceOf(msg.sender);
    require(weight > 0, "No voting power");
    
    if (_support) {
        proposal.votesFor += weight;
    } else {
        proposal.votesAgainst += weight;
    }
}`},timelock_mechanism:{name:"时间锁机制",icon:"🔒",unlockAt:2,message:"你掌握了时间锁机制！提案通过后需要等待2天才能执行，给用户时间审查和准备。",code:`uint256 public constant TIMELOCK_PERIOD = 2 days;

function finalize(uint256 _proposalId) external {
    // ... 检查投票结果
    // 设置执行时间（当前时间 + 时间锁定期）
    proposal.executionTime = block.timestamp + TIMELOCK_PERIOD;
}

function execute(uint256 _proposalId) external nonReentrant {
    // 检查时间锁已过期
    require(block.timestamp >= proposal.executionTime, "Timelock active");
    // ... 执行提案
}`},quorum_threshold:{name:"法定人数",icon:"👥",unlockAt:3,message:"你了解了法定人数机制！需要至少10%的总代币供应量参与投票，确保提案有足够关注度。",code:`uint256 public constant QUORUM_PERCENTAGE = 10;

function finalize(uint256 _proposalId) external {
    // ...
    uint256 totalSupply = governanceToken.totalSupply();
    uint256 quorumRequired = (totalSupply * QUORUM_PERCENTAGE) / 100;
    uint256 totalVotes = proposal.votesFor + proposal.votesAgainst;
    
    // 检查是否达到法定人数
    require(totalVotes >= quorumRequired, "Quorum not met");
    // ...
}`},proposal_state_machine:{name:"提案状态机",icon:"📊",unlockAt:4,message:"你掌握了提案状态机！提案经历Pending→Active→Succeeded/Defeated→Queued→Executed的完整生命周期。",code:`// 提案生命周期:
// Pending → Active → Succeeded → Queued → Executed
//              ↓
//           Defeated

// 状态转换条件:
// 1. createProposal(): Pending → Active
// 2. finalize() + 通过: Active → Succeeded → Queued
// 3. finalize() + 失败: Active → Defeated
// 4. execute(): Queued → Executed`},proposal_struct:{name:"提案结构体",icon:"📝",unlockAt:5,message:"你了解了提案结构体！每个提案包含ID、创建者、描述、投票数据、执行信息等完整字段。",code:`struct Proposal {
    uint256 id;                    // 提案唯一标识符
    address proposer;              // 提案创建者地址
    string description;            // 提案描述文本
    uint256 deadline;              // 投票截止时间戳
    uint256 votesFor;              // 赞成票总数
    uint256 votesAgainst;          // 反对票总数
    bool executed;                 // 是否已执行
    bool cancelled;                // 是否已取消
    uint256 executionTime;         // 可执行时间
    bytes[] executionData;         // 要执行的调用数据数组
    address[] executionTargets;    // 要调用的目标合约地址
    mapping(address => bool) hasVoted;  // 记录谁已经投过票
}`},voting_function:{name:"投票功能",icon:"🗳️",unlockAt:6,message:"你成功执行了投票操作！代币持有者可以在投票期内投赞成或反对票，每个地址只能投一次。",code:`function vote(uint256 _proposalId, bool _support) external {
    Proposal storage proposal = proposals[_proposalId];
    
    // 验证检查
    require(block.timestamp < proposal.deadline, "Voting period ended");
    require(!proposal.hasVoted[msg.sender], "Already voted");
    require(!proposal.executed, "Already executed");
    
    // 获取投票者的代币余额作为投票权重
    uint256 weight = governanceToken.balanceOf(msg.sender);
    require(weight > 0, "No voting power");
    
    // 记录投票
    proposal.hasVoted[msg.sender] = true;
    
    if (_support) {
        proposal.votesFor += weight;
    } else {
        proposal.votesAgainst += weight;
    }
    
    emit Voted(_proposalId, msg.sender, _support, weight);
}`},finalize_function:{name:"最终确定功能",icon:"✅",unlockAt:7,message:"你成功执行了最终确定操作！任何人都可以在投票结束后调用，检查法定人数和多数决，通过后进入时间锁。",code:`function finalize(uint256 _proposalId) external {
    Proposal storage proposal = proposals[_proposalId];
    
    // 检查投票期已结束
    require(block.timestamp >= proposal.deadline, "Voting still active");
    require(!proposal.executed, "Already executed");
    
    // 计算法定人数
    uint256 totalSupply = governanceToken.totalSupply();
    uint256 quorumRequired = (totalSupply * QUORUM_PERCENTAGE) / 100;
    uint256 totalVotes = proposal.votesFor + proposal.votesAgainst;
    
    // 检查是否达到法定人数
    require(totalVotes >= quorumRequired, "Quorum not met");
    // 检查赞成票是否多于反对票
    require(proposal.votesFor > proposal.votesAgainst, "Proposal rejected");
    
    // 设置执行时间（当前时间 + 时间锁定期）
    proposal.executionTime = block.timestamp + TIMELOCK_PERIOD;
}`},low_level_call:{name:"低级别调用",icon:"🔧",unlockAt:8,message:"你了解了低级别调用！提案执行时使用call进行低级别调用，可以执行任意合约操作，是DAO治理的核心能力。",code:`function execute(uint256 _proposalId) external nonReentrant {
    // ... 检查时间锁等条件
    
    // 执行所有预设的调用
    for (uint256 i = 0; i < proposal.executionTargets.length; i++) {
        // 使用 low-level call 执行调用
        (bool success, ) = proposal.executionTargets[i].call(
            proposal.executionData[i]
        );
        require(success, "Execution failed");
    }
    
    // 将押金退还给提案创建者
    governanceToken.transfer(proposal.proposer, PROPOSAL_DEPOSIT);
    
    emit ProposalExecuted(_proposalId);
}`},reentrancy_guard:{name:"重入保护",icon:"🛡️",unlockAt:9,message:"你了解了重入保护机制！execute函数使用nonReentrant修饰符，防止在执行低级别调用时被重入攻击。",code:`contract DecentralizedGovernance is ReentrancyGuard {
    
    function execute(uint256 _proposalId) external nonReentrant {
        // ... 执行提案中的调用
        // nonReentrant 防止重入攻击
    }
}

// ReentrancyGuard 原理:
// 1. 进入函数时设置 _status = ENTERED
// 2. 执行函数逻辑
// 3. 退出函数时设置 _status = NOT_ENTERED
// 4. 如果重入调用，_status == ENTERED，立即 revert`}},Ph=t=>({chainlink_vrf:"🔢 你了解了 Chainlink VRF！📍 切换到 Owner 角色，点击「🚀 开启彩票」按钮开始新一轮彩票！",random_number_generation:"🎲 你了解了随机数生成！📍 继续参与彩票或切换到 Owner 角色结束彩票！",lottery_state_machine:"🎰 你了解了彩票状态机！📍 切换到 Owner 角色，点击「🚀 开启彩票」按钮开始彩票！",time_lock:"⏰ 你了解了时间锁机制！📍 点击「🎲 触发 VRF 回调」按钮模拟 Chainlink 返回随机数！",request_randomness:"📤 你了解了请求随机数！📍 等待更多玩家参与，或切换 Owner 点击「🏁 结束彩票」请求随机数！",fulfill_random_words:"📥 你了解了完成随机词！📍 点击「🏆 获胜者」区块查看奖品分配详情！",prize_distribution:"🏆 你了解了奖品分配！📍 点击「📜 事件日志」区块或「查看完整代码」了解完整实现！",lottery_security:"🛡️ 你了解了彩票安全机制！🎉 恭喜完成 Day 22 公平链上彩票学习！"})[t]||`🎲 欢迎来到 Day 22！📍 点击「🎰 彩票合约架构」区块了解状态机！
💡 提示：建议先切换到 Owner 角色开启彩票，然后 Player 参与。`,Lh=t=>({chainlink_vrf:"🔢 Chainlink VRF（Verifiable Random Function）是一种链下可验证随机函数，提供不可预测且可验证的随机数。它解决了链上随机数生成不安全的问题（如区块哈希可被矿工操纵）。VRF 由 Chainlink 链下节点生成，并附带加密证明，确保随机性的真实性和不可预测性。",random_number_generation:"🎲 链上随机数生成是一个挑战！传统的随机数源（区块哈希、时间戳）可被矿工操纵。Chainlink VRF 提供安全的解决方案：随机数在链下生成，不可预测（请求时无法预知），可验证（可证明随机性来源），抗操纵（矿工无法影响结果）。",lottery_state_machine:"🎰 状态机确保彩票流程安全有序。Open（开放购买）→ Calculating（等待 VRF 随机数）→ Closed（已结束）。状态机防止非法操作，例如不能在 Calculating 状态购买彩票。状态转换由事件触发（如达到最大人数触发抽奖）。",time_lock:"⏰ 时间锁是防止抢跑攻击的重要机制。彩票结算后不能立即领取奖金，给所有参与者公平的准备时间。这防止 MEV（最大可提取价值）攻击者抢跑领取奖金。时间锁通常设置为 1 小时，确保安全性的同时不影响用户体验。",request_randomness:"📤 用户购买彩票时，合约调用 Chainlink VRF Coordinator 的 requestRandomWords 函数，请求随机数。这是一个异步过程：合约发送请求 → Chainlink 网络处理 → 回调 fulfillRandomWords 函数返回随机数。期间彩票进入 Calculating 状态。",fulfill_random_words:"📥 fulfillRandomWords 是 Chainlink VRF 的回调函数，只有 Coordinator 可调用。它接收随机数数组，使用随机数选出赢家（randomWords[0] % players.length），并将状态改为 Closed。onlyCoordinator 修饰符确保安全性。",prize_distribution:"🏆 赢家在时间锁后可以领取奖金。claimPrize 函数检查调用者是赢家且时间锁已过，然后转账奖金。合约 Owner 可以提取未中奖的资金（withdrawBalance）。领取奖金后合约可以重置，开始下一轮彩票。",lottery_security:"🛡️ 彩票安全包含多层防护：1️⃣ 非重入修饰符防止重入攻击 2️⃣ onlyOwner 访问控制保护管理函数 3️⃣ 紧急暂停机制（暂停合约） 4️⃣ Chainlink VRF 安全随机数 5️⃣ 时间锁防止抢跑 6️⃣ 状态机确保流程正确"})[t]||"暂无解释",Bh=t=>({lending_pool:"🏦 你了解了借贷池！💰 存入资产成为流动性提供者，赚取利息收益。📍 切换到「💰 存款」标签页存入资产！",collateral_deposit:"💰 你了解了抵押存入！借款前需要存入抵押品。📍 切换到「🏦 抵押」标签页存入抵押！",borrow_mechanism:"🔓 你了解了借款机制！可以借出不超过抵押品价值的资产。📍 切换到「💸 借款」标签页继续借款！",health_factor:"❤️ 你了解了健康因子！HF < 1 时会被清算。📍 查看右上角「💸 当前债务」卡片中的健康因子指示器！",liquidation_threshold:"⚠️ 你了解了清算阈值！当债务达到抵押品价值80%时可清算。📍 继续借款超过抵押品50%触发此概念！",interest_calculation:"📊 你了解了利息计算！借款需要支付利息。📍 切换到「💸 借款」标签页点击「✅ 还款」按钮！",repay_function:"💸 你了解了还款功能！偿还债务提高健康因子。📍 点击右上角「📖 查看完整代码」了解借贷安全机制！",lending_security:"🛡️ 你了解了借贷安全！通过抵押、健康因子和清算保护协议。🎉 Day23 所有概念已解锁！"})[t]||"🏦 欢迎来到 Day23！📍 点击「📊 合约架构」区块了解 DeFi 借贷协议！",Fh=t=>({lending_pool:"📖 借贷池是 DeFi 借贷协议的核心。用户存入资产成为流动性提供者，借款人可以借出资产。协议自动匹配借贷双方，并收取利息。",collateral_deposit:"📖 抵押存入是借贷的安全机制。借款人必须存入超额抵押品才能借款，通常抵押品价值需要大于借款金额的1.25倍。",borrow_mechanism:"📖 借款机制允许用户借出抵押品价值一定比例的资产。借款额度动态计算，需要维持健康的健康因子。",health_factor:"📖 健康因子 = (抵押品价值 × 清算阈值) / 债务金额。HF < 1 时有被清算风险，借款人应该增加抵押品或偿还债务。",liquidation_threshold:"📖 清算阈值定义了安全边界。通常设置为80%，意味着债务达到抵押品价值的80%时，健康因子=1，任何进一步借款都会导致清算。",interest_calculation:"📖 利息根据借款金额和借款时间计算。利息 = 本金 × 利率 × 时间。DeFi借贷通常采用复利计算。",repay_function:"📖 还款功能允许借款人偿还债务。还款后债务减少，健康因子提高，降低清算风险。可以部分或全部还款。",lending_security:"📖 DeFi借贷安全机制包括：1) 超额抵押 2) 健康因子监控 3) 自动清算 4) 利率调整。这些机制共同保护协议和用户资金安全。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Nh=t=>({escrow_contract:"📜 你了解了托管合约！资金由第三方托管，买卖双方安全交易。📍 向下滚动到「💰 存款」区块存入资金！",buyer_seller_arbitration:"⚖️ 你了解了买卖仲裁！第三方公正裁决争议。📍 买卖双方可以发起争议！",dispute_resolution:"🔨 你了解了争议解决！无法达成一致时可仲裁。📍 点击「👑 仲裁」区块查看仲裁机制！",time_locked_release:"⏰ 你了解了时间锁释放！买家可以确认收货或等待超时。📍 等待超时自动释放资金！",mutual_cancellation:"🤝 你了解了协商取消！双方一致同意可取消交易。📍 双方都同意后可以取消！",arbiter_role:"👑 你了解了仲裁者角色！可信第三方公正裁决。📍 仲裁者可以解决买卖双方争议！",multi_party_security:"🔐 你了解了多方安全！状态机、时间锁和仲裁保护多方。🎉 Day24 所有概念已解锁！",state_management:"📊 你了解了状态管理！枚举管理合约状态，确保流程正确。🎉 Day24 所有概念已解锁！"})[t]||"📜 欢迎来到 Day24！📍 点击「📜 托管合约」区块了解托管机制！",$h=t=>({escrow_contract:"📖 托管合约是保护买卖双方交易安全的智能合约。买家付款后资金托管在合约中，卖家发货后买家确认，合约自动释放资金。",buyer_seller_arbitration:"📖 买卖仲裁机制引入可信的第三方仲裁者。当买卖双方产生争议时，仲裁者可以根据证据公正裁决资金分配。",dispute_resolution:"📖 争议解决机制允许买卖双方在交易出现问题时发起争议。仲裁者审查证据后，可以决定将资金释放给买家、卖家或进行分配。",time_locked_release:"📖 时间锁释放保护买家利益。买家在规定时间内可以确认收货，如果卖家不发货或买家不响应，超时后资金自动退回买家。",mutual_cancellation:"📖 协商取消机制允许买卖双方达成一致后取消交易。双方都需要同意取消，合约将资金退回买家。",arbiter_role:"📖 仲裁者是托管合约中受信任的第三方。仲裁者的职责是：1) 审查争议 2) 公正裁决 3) 保护双方利益。",multi_party_security:"📖 托管合约的多方安全机制包括：1) 状态机管理交易流程 2) 时间锁保护买家权益 3) 协商取消提供灵活性 4) 仲裁解决争议。",state_management:"📖 状态管理使用枚举类型定义合约状态：Pending(待处理) → Released(已释放) / Refunded(已退款) / Disputed(争议中)。状态转换确保交易流程正确执行。"})[t]||"📖 点击其他概念标签查看更多详细解释。",qh=t=>({amm_formula:"📐 你了解了AMM公式！x × y = k 恒定乘积做市。📍 继续查看「💰 流动性池状态」区块了解流动性机制！",liquidity_pool:"💧 你了解了流动性池！存入两种代币获得LP代币。📍 点击「💧 添加流动性」按钮存入代币！",constant_product:"✖️ 你了解了恒定乘积！k值不变自动调整价格。📍 继续查看「📈 价格曲线」区块了解自动价格发现！",add_liquidity:"➕ 你使用了添加流动性！存入Token A和Token B获得LP代币。📍 切换到「🔄 交易」标签页进行代币交换！",swap_mechanism:"🔄 你了解了交易机制！根据恒定乘积自动计算输出。📍 尝试交换Token A和Token B！",remove_liquidity:"➖ 你了解了移除流动性！销毁LP代币取回代币。📍 点击「➖ 移除流动性」按钮取回代币！",slippage_calculation:"📉 你了解了滑点！交易量大时价格影响大。📍 继续交易查看滑点效果！",reserves_management:"🗄️ 你了解了储备管理！AMM自动管理储备。🎉 Day25 所有概念已解锁！"})[t]||"📐 欢迎来到 Day25！📍 点击「📊 AMM架构」区块了解恒定乘积公式！",Mh=t=>({amm_formula:"📖 AMM恒定乘积公式 x × y = k 由Uniswap发明。交易前后k值保持不变，价格自动调整。这是去中心化交易所的核心算法。",liquidity_pool:"📖 流动性池包含两种代币的储备。流动性提供者(LP)存入代币获得LP代币，代表在池中的份额。LP代币可以兑换回底层代币。",constant_product:"📖 恒定乘积公式确保储备乘积恒定。当用户用Token A换Token B时，reserveA增加，reserveB减少，但k = reserveA × reserveB不变。",add_liquidity:"📖 添加流动性时按当前比例存入两种代币。LP代币数量 = sqrt(reserveA × reserveB) - 初始流动性。LP赚取交易手续费收益。",swap_mechanism:"📖 交易机制根据恒定乘积公式计算：输出 = (输入 × 输出储备) / (输入储备 + 输入 × (1-费率))。自动执行，无需订单簿。",remove_liquidity:"📖 移除流动性时按LP份额销毁LP代币，按比例取回两种代币。即使池中有交易，也能随时提取。",slippage_calculation:"📖 滑点是指实际价格与预期价格的差异。大额交易会产生更大滑点。设置最小输出保护：要求输出 >= 预期 × (1 - 滑点容忍度)。",reserves_management:"📖 AMM自动管理储备：1) 交易时更新储备 2) k值保持恒定 3) 流动性可随时添加/移除 4) 费率赚取收益。无需人工干预。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Uh=t=>({nft_marketplace:"🏪 你了解了NFT市场！去中心化NFT交易市场。📍 点击「📋 挂单」区块查看NFT挂单！",listing_mechanism:"📋 你了解了挂单机制！卖家设置固定价格，买家直接购买。📍 点击「📋 创建挂单」按钮挂售NFT！",royalty_payment:"💎 你了解了版税支付！每次转售创作者获得版税。📍 点击「🛡️ 安全机制」区块了解NFT托管！",marketplace_security:"🔒 你了解了市场安全！NFT托管机制保护交易安全。📍 点击「💰 资金分配流程」区块了解版税分配！",buy_now_price:"🏷️ 你了解了一口价！卖家设置固定价格买家购买。📍 在「🏪 NFT市场」区块购买NFT！",cancel_listing:"❌ 你了解了取消挂单！卖家随时可以取消。📍 点击「❌ 取消挂单」按钮取消挂单！",nft_escrow:"📦 你了解了NFT托管！挂单时NFT托管在合约中。🎉 Day26 所有概念已解锁！",owner_revenue:"💰 你了解了卖家收益！出售NFT获得收入。🎉 Day26 所有概念已解锁！"})[t]||"🏪 欢迎来到 Day26！📍 点击「🏪 NFT市场」区块了解去中心化交易！",Vh=t=>({nft_marketplace:"📖 NFT市场是去中心化的NFT交易平台。无需中心化服务器，智能合约自动处理挂单、交易和结算。卖家获得更好的收益，买家享受更低的费用。",listing_mechanism:"📖 挂单机制：卖家授权NFT给市场，设置固定价格，NFT托管在合约中。买家支付价格后自动获得NFT。简单快捷，无需等待。",royalty_payment:"📖 版税机制确保原创作者从每次转售中获益。例如10%版税意味着二次销售价格的10%自动支付给创作者。通过ERC2981标准实现。",marketplace_security:"📖 NFT市场安全机制：1) 挂单前授权 2) NFT托管在合约 3) 只能卖家取消 4) 付款后NFT转移给买家 5) 版税自动分配。",buy_now_price:"📖 一口价(Now Price)是卖家设置的固定价格。买家可以直接购买，无需出价或等待。适合快速交易，价格由卖家根据市场情况决定。",cancel_listing:"📖 卖家可以随时取消挂单，NFT会退回卖家钱包。取消后需要重新挂单才能出售。买家看到的挂单是实时的。",nft_escrow:"📖 NFT托管流程：挂单时NFT从卖家转到合约托管，购买时NFT从合约转到买家，取消时NFT从合约退回卖家。整个过程由智能合约自动执行。",owner_revenue:"📖 卖家收益 = 售价 - 版税 - 手续费。例如：卖100 ETH，版税10%，手续费2.5%，卖家实际获得87.5 ETH。确保定价时考虑这些成本。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Hh=t=>{const e=t[t.length-1];return{reward_debt_pattern:"📊 已了解奖励债务模式！📍 点击「📊 合约状态与奖励计算」区块了解精度处理和时间加权！",staking_token_decimals:"🔢⏱️ 已了解精度处理和时间加权！📍 向下滚动到「👤 角色切换」区块，点击「👤 Staker」按钮开始质押！",time_weighted_calculation:"🔢⏱️ 已了解精度处理和时间加权！📍 向下滚动到「👤 角色切换」区块，点击「👤 Staker」按钮开始质押！",reentrancy_guard:"🛡️ 已了解重入保护！📍 在「🛡️ 安全防护机制」区块，点击「🚨 紧急提取」按钮（注意：会放弃所有奖励）！",stake_function:"💧 已质押成功！📍 点击「⏩ 快进1天」按钮查看奖励累积，然后点击「🎁 领取奖励」！",unstake_function:"💸 已取消质押！📍 继续领取奖励或点击「🛡️ 安全防护机制」区块了解重入保护！",claim_rewards:"🎁 已领取奖励！📍 点击「🛡️ 安全防护机制」区块了解重入保护！",emergency_withdraw:"🚨 已紧急提取！🎉 Day 27 所有概念已解锁！"}[e]||"🌾 欢迎来到 Day 27！📍 点击「🌾 收益耕作架构」区块了解奖励债务模式！"},Wh=t=>({reward_debt_pattern:"📖 奖励债务模式是DeFi收益耕作的核心机制。每次质押、取消质押或领取奖励时，先更新奖励债务，确保用户获得准确的收益。",staking_token_decimals:"📖 精度处理通过10^decimals倍数将小数计算转换为整数计算。不同代币有不同小数位（如USDC是6位，ETH是18位），合约需要正确处理这些差异。",time_weighted_calculation:"📖 时间加权计算确保奖励按质押时间和数量公平分配。公式：新奖励 = 时间差 × 每秒奖励 × 质押量 / 10^decimals。质押时间越长、数量越多，奖励越多。",reentrancy_guard:"📖 ReentrancyGuard防止重入攻击。在stake、unstake、claimRewards等涉及外部调用的函数上使用nonReentrant修饰符，确保函数执行期间不能被重入调用。",stake_function:"📖 质押功能遵循Checks-Effects-Interactions模式：先验证条件，再更新状态，最后进行外部调用。这防止了重入攻击。",unstake_function:"📖 取消质押功能允许用户取回质押的代币。操作前会先更新奖励，确保用户获得所有应得奖励。可以部分或全部取消质押。",claim_rewards:"📖 领取奖励功能将累积的奖励债务转换为实际的奖励代币。领取后奖励债务清零，可以重新累积新的奖励。",emergency_withdraw:"📖 紧急提取功能允许用户在紧急情况下立即取回质押代币，但会放弃所有待领取奖励。这是保护用户资金的最后手段。"})[t]||"📖 点击其他概念标签查看更多详细解释。",zh=t=>({token_governance:"🗳️ 已了解代币治理模式！📍 点击「⚙️ 治理参数」区块了解时间锁和法定人数！",timelock_mechanism:"🔒 已了解时间锁机制！📍 再次点击「⚙️ 治理参数」区块了解法定人数！",quorum_threshold:"👥 已了解法定人数！📍 点击「📊 提案状态流转图」了解提案状态机！",proposal_state_machine:"📊 已了解提案状态机！📍 切换到「👤 TokenHolder」角色开始投票！",proposal_struct:"📝 已了解提案结构体！📍 切换到「👤 TokenHolder」角色参与投票！",voting_function:"🗳️ 已投票成功！📍 切换到「🔧 Executor」角色最终确定提案！",finalize_function:"✅ 已最终确定提案！📍 使用「⏱️ 时间控制」快进时间，然后执行提案！",low_level_call:"🔧 已执行提案！🎉 Day 28 所有概念已解锁！",reentrancy_guard:"🛡️ 已了解重入保护！📍 执行提案了解低级别调用！"})[t]||"🏛️ 欢迎来到 Day 28！📍 点击「🏛️ DAO治理架构」区块了解代币治理模式！",Gh=t=>({token_governance:"📖 代币治理模式是DAO的核心机制。代币持有量决定投票权，1代币=1票。这种模式实现了去中心化决策，让代币持有者共同管理协议。",timelock_mechanism:"📖 时间锁机制是DAO的安全保障。提案通过后需要等待2天才能执行，给用户时间审查提案内容。如果不满意，可以在时间锁期间退出。",quorum_threshold:"📖 法定人数机制确保提案有足够关注度。需要至少10%的总代币供应量参与投票，防止少数人操纵决策。",proposal_state_machine:"📖 提案状态机管理提案的完整生命周期：Pending(待创建)→Active(投票中)→Succeeded(已通过)/Defeated(被否决)→Queued(时间锁中)→Executed(已执行)。",proposal_struct:"📖 提案结构体存储提案的所有信息：ID、创建者、描述、投票数据、执行信息等。mapping记录谁已经投过票，防止重复投票。",voting_function:"📖 投票功能允许代币持有者在投票期内投票。每个地址只能投一次，投票权重等于代币持有量。投票不可撤销或更改。",finalize_function:"📖 最终确定功能在投票结束后调用。检查法定人数和多数决，通过后设置执行时间进入时间锁。任何人都可以调用。",low_level_call:"📖 低级别调用使用call执行提案中的操作。可以执行任意合约调用，是DAO治理的核心能力。执行成功后退还提案押金。",reentrancy_guard:"📖 重入保护使用nonReentrant修饰符防止重入攻击。在执行低级别调用时尤为重要，因为外部合约可能尝试重入。"})[t]||"📖 点击其他概念标签查看更多详细解释。",yf={over_collateralization:{name:"超额抵押机制",icon:"🏦",unlockAt:1,message:"你了解了超额抵押稳定币的核心机制！每发行1美元稳定币，需要超过1美元的加密资产作为抵押，确保系统偿付能力。",code:`// 150% 抵押率意味着：
// 要铸造 $100 SUSD，需要 $150 ETH 抵押
uint256 public constant COLLATERAL_RATIO = 150;

function mintStablecoin(uint256 amountToMint) external nonReentrant {
    uint256 maxMintable = (collateralValue * 100) / COLLATERAL_RATIO;
    require(currentDebt + amountToMint <= maxMintable, "Not enough collateral!");
    _mint(msg.sender, amountToMint);
}`},collateral_ratio:{name:"抵押率计算",icon:"📊",unlockAt:2,message:"你掌握了抵押率的计算方法！抵押率 = 抵押品价值 / 债务价值 × 100%。150%意味着有50%的安全缓冲。",code:`// 最大可铸造金额计算
uint256 maxMintable = (collateralValue * 100) / COLLATERAL_RATIO;

// 示例: $3000 抵押品 → 最多铸造 $2000 SUSD
// 计算公式: 3000 * 100 / 150 = 2000`},price_oracle:{name:"价格预言机",icon:"🔮",unlockAt:3,message:"你了解了价格预言机的作用！Chainlink预言机提供可靠的ETH/USD价格数据，是稳定币系统安全运行的核心组件。",code:`// Chainlink 价格预言机接口
interface AggregatorV3Interface {
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,  // 价格（8位小数）
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}

function getEthPrice() public view returns (uint256) {
    (, int256 price, , , ) = priceFeed.latestRoundData();
    return uint256(price) * 1e10;  // 8位 → 18位小数
}`},health_factor:{name:"健康因子",icon:"💚",unlockAt:4,message:"你了解了健康因子！它是衡量头寸安全性的核心指标，低于150%时头寸可被清算，系统通过清算维护偿付能力。",code:`// 健康因子计算
uint256 healthFactor = (collateralValue * 100) / debtValue;

// healthFactor >= 150%: 安全 ✅
// healthFactor < 150%: 可被清算 ⚠️

function getHealthFactor(address user) external view returns (uint256) {
    uint256 collateralValue = getCollateralValueInUsd(user);
    uint256 debtValue = balanceOf(user);
    if (debtValue == 0) return type(uint256).max;
    return (collateralValue * 100) / debtValue;
}`},decimal_conversion:{name:"小数位转换",icon:"🔢",unlockAt:5,message:"你掌握了价格数据的精度转换！Chainlink返回8位小数，合约使用18位小数，需要乘以1e10进行转换。",code:`// 8位小数 → 18位小数
function getEthPrice() public view returns (uint256) {
    (, int256 price, , , ) = priceFeed.latestRoundData();
    // Chainlink返回: 2000_00000000 (8位小数)
    // 转换为18位: 2000_00000000 * 1e10
    // 结果: 2000_000000000000000000
    return uint256(price) * 1e10;
}`},deposit_collateral:{name:"存入抵押品",icon:"💰",unlockAt:6,message:"你成功存入了ETH抵押品！这是进入DeFi世界的第一步，你的ETH被锁定在合约中作为铸造稳定币的担保。",code:`function depositCollateral() external payable {
    require(msg.value > 0, "Must deposit some ETH");
    collateralDeposited[msg.sender] += msg.value;
    emit CollateralDeposited(msg.sender, msg.value);
}`},mint_stablecoin:{name:"铸造稳定币",icon:"🏦",unlockAt:7,message:"你成功铸造了SUSD稳定币！你的债务增加了，同时获得了与美元挂钩的稳定币流动性，可以在DeFi生态中使用。",code:`function mintStablecoin(uint256 amountToMint) external nonReentrant {
    uint256 currentEthValue = getCollateralValueInUsd(msg.sender);
    uint256 currentDebt = balanceOf(msg.sender);
    uint256 maxMintable = (currentEthValue * 100) / COLLATERAL_RATIO;
    
    require(currentDebt + amountToMint <= maxMintable, "Not enough collateral!");
    _mint(msg.sender, amountToMint);
    emit StablecoinMinted(msg.sender, amountToMint);
}`},burn_stablecoin:{name:"销毁稳定币",icon:"🔥",unlockAt:8,message:"你销毁了SUSD减少了债务！销毁稳定币可以提高健康因子，降低被清算的风险，是管理头寸的重要手段。",code:`function burnStablecoin(uint256 amountToBurn) external nonReentrant {
    _burn(msg.sender, amountToBurn);
    emit StablecoinBurned(msg.sender, amountToBurn);
}`},withdraw_collateral:{name:"提取抵押品",icon:"🏧",unlockAt:9,message:"你成功提取了ETH抵押品！提取后仍需保持150%的最低抵押率，系统会自动检查确保头寸安全。",code:`function withdrawCollateral(uint256 amount) external nonReentrant {
    uint256 remainingCollateral = collateralDeposited[msg.sender] - amount;
    uint256 remainingValue = (remainingCollateral * getEthPrice()) / 1e18;
    uint256 requiredCollateralValue = (balanceOf(msg.sender) * COLLATERAL_RATIO) / 100;
    
    require(remainingValue >= requiredCollateralValue, 
            "Cannot withdraw, health factor too low");
    
    collateralDeposited[msg.sender] -= amount;
    (bool sent, ) = payable(msg.sender).call{value: amount}("");
    require(sent, "ETH transfer failed");
    emit CollateralWithdrawn(msg.sender, amount);
}`},liquidation:{name:"清算机制",icon:"⚔️",unlockAt:10,message:"你执行了清算！清算人通过偿还债务获得抵押品+5%奖励，既维护了系统健康，又获得了经济激励。",code:`function liquidate(address user) external nonReentrant {
    uint256 healthFactor = (collateralValue * 100) / debtValue;
    require(healthFactor < COLLATERAL_RATIO, "Position is healthy");
    
    _burn(msg.sender, debtValue);  // 清算人偿还债务
    
    // 清算人获得抵押品 + 5% 奖励
    uint256 bonusCollateral = collateralToTransfer * (100 + LIQUIDATION_BONUS) / 100;
    (bool sent, ) = payable(msg.sender).call{value: bonusCollateral}("");
    require(sent, "Collateral transfer failed");
    
    emit Liquidation(msg.sender, user, debtValue, collateralToTransfer);
}`}},Kh=t=>({over_collateralization:"🏦 你了解了超额抵押机制！每发行1美元稳定币需要1.5美元抵押品。👉 点击「📊 抵押率与数学原理」面板了解详细计算！",collateral_ratio:"📊 你掌握了抵押率计算！150%意味着50%安全缓冲。👉 继续点击同一面板了解价格预言机！",price_oracle:"🔮 你了解了价格预言机！Chainlink提供可靠的ETH/USD价格。👉 继续点击了解健康因子！",health_factor:"💚 你了解了健康因子！低于150%可被清算。👉 继续点击了解小数位转换！",decimal_conversion:"🔢 你掌握了精度转换！8位→18位需要乘以1e10。👉 现在存入ETH抵押品开始实践！",deposit_collateral:"💰 已存入抵押品！👉 切换到「🏦 铸造稳定币」标签铸造SUSD！",mint_stablecoin:"🏦 已铸造SUSD！👉 尝试销毁一些SUSD或提取部分抵押品！",burn_stablecoin:"🔥 已销毁SUSD减少债务！👉 尝试提取抵押品或降低ETH价格演示清算！",withdraw_collateral:"🏧 已提取抵押品！👉 降低ETH价格到$1400以下，然后执行清算！",liquidation:"⚔️ 已执行清算！清算人获得抵押品+5%奖励。🎉 恭喜完成Day 29所有概念学习！"})[t]||"🏦 欢迎来到Day 29！👉 点击「🏦 稳定币系统架构」了解超额抵押机制！",jh=t=>({over_collateralization:"📖 超额抵押是DeFi稳定币的核心机制。每发行1美元稳定币需要超过1美元的加密资产抵押，这种设计确保即使抵押品价格波动，系统也有足够的资产支撑所有流通的稳定币。",collateral_ratio:"📖 抵押率是稳定币系统的安全指标。150%意味着每100美元债务有150美元抵押品支撑，提供50%的价格下跌缓冲。当抵押率低于150%时，系统启动清算保护债权人利益。",price_oracle:"📖 价格预言机是连接链上和链下世界的桥梁。Chainlink通过去中心化网络聚合多个交易所的价格数据，提供可靠、抗操纵的价格喂价，是稳定币系统安全运行的基础设施。",health_factor:"📖 健康因子是用户头寸的风险指标。计算公式：健康因子 = 抵押品价值 / 债务价值 × 100%。≥150%为安全，<150%可被清算。用户应监控健康因子，避免被清算损失资产。",decimal_conversion:"📖 不同合约使用不同的小数精度。Chainlink返回8位小数，ERC20标准使用18位小数。转换时需要乘以10的幂次方，确保计算精度，避免整数除法导致的精度损失。",deposit_collateral:"📖 存入抵押品是进入稳定币系统的第一步。用户的ETH被锁定在合约中作为担保，可以随时提取（需满足抵押率要求）。抵押品是铸造稳定币的基础。",mint_stablecoin:"📖 铸造稳定币是系统的核心功能。用户根据抵押品价值获得相应数量的SUSD，债务记录在合约中。SUSD与美元1:1锚定，可在DeFi生态中自由流通使用。",burn_stablecoin:"📖 销毁稳定币减少用户债务。当用户想要提取抵押品或降低风险时，可以销毁SUSD。销毁后健康因子提高，被清算风险降低，是主动管理头寸的重要手段。",withdraw_collateral:"📖 提取抵押品允许用户取回ETH。系统强制要求提取后抵押率≥150%，保护系统安全。如果用户需要提取更多，必须先销毁部分SUSD降低债务。",liquidation:"📖 清算是系统的自我保护机制。当健康因子<150%时，任何人都可以清算该头寸。清算人偿还债务获得抵押品+5%奖励，系统移除不良债务，维护整体偿付能力。"})[t]||"📖 点击其他概念标签查看更多详细解释。",vf={factory_pattern:{name:"工厂模式",icon:"🏭",unlockAt:1,message:"你了解了工厂模式！Factory合约统一创建和管理交易对，是创建型设计模式的经典应用。",code:`// MiniDexFactory.sol - 工厂合约
contract MiniDexFactory {
    mapping(address => mapping(address => address)) public getPair;
    address[] public allPairs;
    
    function createPair(address tokenA, address tokenB) 
        external returns (address pair) {
        // 排序地址避免重复
        (address token0, address token1) = tokenA < tokenB 
            ? (tokenA, tokenB) : (tokenB, tokenA);
        
        // 部署新的交易对合约
        MiniDexPair newPair = new MiniDexPair(token0, token1);
        pair = address(newPair);
        
        // 更新映射
        getPair[token0][token1] = pair;
        getPair[token1][token0] = pair;
        allPairs.push(pair);
        
        emit PairCreated(token0, token1, pair, allPairs.length);
    }
}`},constant_product:{name:"恒定乘积公式",icon:"📐",unlockAt:2,message:"你了解了恒定乘积公式 x*y=k！这是AMM的核心算法，保持两种代币储备的乘积不变。",code:`// 恒定乘积公式: x * y = k
// reserve0 * reserve1 = k (常数)

// 交换计算:
// 用户输入 amountIn，想要 amountOut
// 新储备量: reserve0' = reserve0 + amountIn
//           reserve1' = reserve1 - amountOut
// 必须满足: reserve0' * reserve1' >= reserve0 * reserve1

function swap(uint256 amount0Out, uint256 amount1Out, address to) 
    external nonReentrant {
    // ... 发送输出代币
    
    uint256 balance0 = IERC20(token0).balanceOf(address(this));
    uint256 balance1 = IERC20(token1).balanceOf(address(this));
    
    // 恒定乘积检查
    require(balance0 * balance1 >= reserve0 * reserve1, "K");
    
    _update(balance0, balance1);
}`},price_discovery:{name:"价格发现机制",icon:"💰",unlockAt:3,message:"你了解了价格发现机制！价格由储备比例自动决定，无需订单簿，实现去中心化自动定价。",code:`// 价格发现机制
// 代币价格由储备比例自动决定

// Token0 价格 = reserve1 / reserve0
// Token1 价格 = reserve0 / reserve1

// 示例:
// reserve0 = 100,000 USDC
// reserve1 = 50 WETH
// 1 WETH 价格 = 100,000 / 50 = 2,000 USDC

// 交换时自动调整价格
// 大额交易会导致价格滑点
// 滑点 = (实际价格 - 预期价格) / 预期价格`},liquidity_calculation:{name:"流动性计算",icon:"🧮",unlockAt:4,message:"你了解了流动性计算！首次添加用几何平均，后续按比例分配，确保公平性。",code:`// 流动性计算
function addLiquidity(uint256 amount0, uint256 amount1) 
    external returns (uint256 liquidity) {
    uint256 totalSupply = totalSupply();
    
    if (totalSupply == 0) {
        // 首次添加：几何平均数
        // liquidity = √(amount0 * amount1)
        liquidity = sqrt(amount0 * amount1);
    } else {
        // 后续添加：按比例分配
        // 取最小值防止套利
        liquidity = min(
            (amount0 * totalSupply) / reserve0,
            (amount1 * totalSupply) / reserve1
        );
    }
    
    require(liquidity > 0, "Insufficient liquidity minted");
    _mint(msg.sender, liquidity);
}`},sqrt_calculation:{name:"平方根计算",icon:"🔢",unlockAt:5,message:"你了解了平方根计算！使用牛顿迭代法计算整数平方根，liquidity = √(amount0 × amount1)。",code:`// 牛顿迭代法计算平方根
function sqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
        z = y;
        uint256 x = y / 2 + 1;
        // 牛顿迭代: x_{n+1} = (y / x_n + x_n) / 2
        while (x < z) {
            z = x;
            x = (y / x + x) / 2;
        }
    } else if (y != 0) {
        z = 1;
    }
    // y == 0 时，z 保持为 0
}

// 使用示例:
// amount0 = 1000, amount1 = 4000
// liquidity = sqrt(1000 * 4000) = sqrt(4,000,000) = 2000`},address_sorting:{name:"地址排序",icon:"📋",unlockAt:6,message:"你了解了地址排序！系统自动将地址较小的作为token0，避免重复创建交易对。",code:`// 地址排序机制
function createPair(address tokenA, address tokenB) 
    external returns (address pair) {
    // 对代币地址进行排序，确保 token0 < token1
    // 这样可以避免 A-B 和 B-A 被认为是不同的交易对
    (address token0, address token1) = tokenA < tokenB 
        ? (tokenA, tokenB) 
        : (tokenB, tokenA);
    
    // 检查交易对尚未创建
    require(getPair[token0][token1] == address(0), "Pair exists");
    
    // 创建交易对...
}

// 示例:
// USDC = 0xa0b8... (较小)
// WETH = 0xc02a... (较大)
// → token0 = USDC, token1 = WETH`},double_mapping:{name:"双重映射",icon:"🗺️",unlockAt:7,message:"你了解了双重映射！getPair[A][B]=getPair[B][A]，无论以什么顺序查询都能找到同一交易对。",code:`// 双重映射机制
mapping(address => mapping(address => address)) public getPair;

function createPair(address tokenA, address tokenB) 
    external returns (address pair) {
    // ... 创建交易对
    
    // 存储正向映射
    getPair[token0][token1] = pair;
    
    // 存储反向映射
    // 这样无论用户以什么顺序传入代币，都能找到交易对
    getPair[token1][token0] = pair;
}

// 查询示例:
// getPair[USDC][WETH] = 0x1234...5678
// getPair[WETH][USDC] = 0x1234...5678  // 同一地址！`},add_liquidity:{name:"添加流动性",icon:"💧",unlockAt:8,message:"你成功添加了流动性！存入两种代币获得LP代币，成为流动性提供者享受交易手续费分成。",code:`function addLiquidity(uint256 amount0, uint256 amount1) 
    external returns (uint256 liquidity) {
    // 从用户转移代币到合约
    IERC20(token0).transferFrom(msg.sender, address(this), amount0);
    IERC20(token1).transferFrom(msg.sender, address(this), amount1);
    
    // 计算LP代币数量
    uint256 totalSupply = totalSupply();
    if (totalSupply == 0) {
        liquidity = sqrt(amount0 * amount1);
    } else {
        liquidity = min(
            (amount0 * totalSupply) / reserve0,
            (amount1 * totalSupply) / reserve1
        );
    }
    
    // 铸造LP代币
    _mint(msg.sender, liquidity);
    _update(reserve0 + amount0, reserve1 + amount1);
}`},remove_liquidity:{name:"移除流动性",icon:"🔥",unlockAt:9,message:"你成功移除了流动性！销毁LP代币按比例取回两种代币，完成流动性提供周期。",code:`function removeLiquidity(uint256 liquidity) 
    external returns (uint256 amount0, uint256 amount1) {
    uint256 balance0 = IERC20(token0).balanceOf(address(this));
    uint256 balance1 = IERC20(token1).balanceOf(address(this));
    uint256 totalSupply = totalSupply();
    
    // 计算可取出的代币数量
    // 公式: (LP数量 / 总LP数量) * 合约余额
    amount0 = (liquidity * balance0) / totalSupply;
    amount1 = (liquidity * balance1) / totalSupply;
    
    require(amount0 > 0 && amount1 > 0, "Insufficient amount");
    
    // 销毁LP代币并返还代币
    _burn(msg.sender, liquidity);
    IERC20(token0).transfer(msg.sender, amount0);
    IERC20(token1).transfer(msg.sender, amount1);
}`},swap_function:{name:"交换功能",icon:"🔄",unlockAt:10,message:"你成功执行了代币交换！恒定乘积公式保证了交易的公平性，自动价格发现无需订单簿。",code:`function swap(uint256 amount0Out, uint256 amount1Out, address to) 
    external nonReentrant {
    require(amount0Out > 0 || amount1Out > 0, "Insufficient output");
    require(amount0Out < reserve0 && amount1Out < reserve1, "Insufficient liquidity");
    
    // 发送输出代币
    if (amount0Out > 0) IERC20(token0).transfer(to, amount0Out);
    if (amount1Out > 0) IERC20(token1).transfer(to, amount1Out);
    
    // 获取新余额
    uint256 balance0 = IERC20(token0).balanceOf(address(this));
    uint256 balance1 = IERC20(token1).balanceOf(address(this));
    
    // 恒定乘积检查: x * y >= k
    require(balance0 * balance1 >= reserve0 * reserve1, "K");
    
    _update(balance0, balance1);
    emit Swap(msg.sender, amount0In, amount1In, amount0Out, amount1Out, to);
}`}},Yh=t=>({factory_pattern:"🏭 你了解了工厂模式！Factory合约统一创建和管理交易对。👉 点击数学原理面板了解CPMM！",constant_product:"📐 你了解了恒定乘积公式 x*y=k！这是AMM的核心算法。👉 再次点击了解价格发现！",price_discovery:"💰 太棒了！价格由储备比例自动决定，无需订单簿。👉 再次点击了解流动性计算！",liquidity_calculation:"🧮 优秀！首次添加用几何平均，后续按比例分配。👉 再次点击了解平方根计算！",sqrt_calculation:"🔢 牛顿迭代法计算平方根！liquidity = √(amount0 × amount1)。👉 去工厂创建交易对！",address_sorting:"📋 地址排序确保token0<token1，避免重复创建交易对！👉 选择交易对了解双重映射！",double_mapping:"🗺️ 双重映射getPair[A][B]=getPair[B][A]，查询更方便！👉 添加流动性体验LP代币！",add_liquidity:"💧 成功添加流动性！你获得了LP代币作为流动性证明。👉 尝试代币交换！",remove_liquidity:"🔥 成功移除流动性！按比例取回了两种代币。👉 查看完整代码了解实现细节！",swap_function:"🔄 交换成功！恒定乘积公式保证了交易的公平性。🎉 恭喜完成所有概念！"})[t]||"🏭 欢迎来到Day 30！👉 点击「🏭 DEX系统架构」了解工厂模式！",Xh=t=>({factory_pattern:"📖 工厂模式是创建型设计模式的经典应用。MiniDexFactory统一创建和管理交易对，确保每个代币对只有一个交易对，避免流动性分散。地址排序机制保证无论传入A-B还是B-A，都指向同一交易对。",constant_product:"📖 恒定乘积公式 x*y=k 是AMM的核心算法。它保持两种代币储备的乘积不变，确保交易前后系统总价值守恒。这个公式自动实现价格发现，无需传统订单簿，是DeFi革命性的创新。",price_discovery:"📖 价格发现是AMM的核心功能。代币价格由储备比例自动决定：token0价格=reserve1/reserve0。大额交易会导致价格滑点，滑点大小与交易规模成正比，这 incentivizes 套利者维持价格平衡。",liquidity_calculation:"📖 流动性计算确保LP代币公平分配。首次添加使用几何平均数√(amount0*amount1)，后续添加按比例min(amount0/reserve0, amount1/reserve1)*totalSupply。取最小值防止套利者利用比例差异获利。",sqrt_calculation:"📖 平方根计算使用牛顿迭代法（巴比伦算法），通过反复逼近计算整数平方根。算法收敛速度快，每次迭代精度翻倍。Solidity不支持浮点数，整数平方根是计算LP代币数量的必要工具。",address_sorting:"📖 地址排序是防止重复创建交易对的关键。以太坊地址是20字节十六进制数，可以比较大小。Factory自动将较小地址作为token0，这样无论用户传入USDC-WETH还是WETH-USDC，都创建同一交易对。",double_mapping:"📖 双重映射mapping(address=>mapping(address=>address))实现双向查询。getPair[token0][token1]和getPair[token1][token0]指向同一地址，用户无需记忆代币顺序，提升用户体验。",add_liquidity:"📖 添加流动性是成为LP的第一步。用户存入两种代币，按当前比例或任意比例（首次）获得LP代币。LP代币代表用户在池子中的份额，可以随时移除流动性取回代币。",remove_liquidity:"📖 移除流动性允许LP随时退出。销毁LP代币按比例取回两种代币，比例基于当前储备。LP可能面临无常损失，即相比持有代币，提供流动性可能获得更少收益，这是AMM的风险之一。",swap_function:"📖 交换功能是DEX的核心。用户指定输出数量，合约计算需要的输入数量，确保恒定乘积公式成立。简化版不收取手续费，真实Uniswap收取0.3%分配给LP，激励流动性提供。"})[t]||"📖 点击其他概念标签查看更多详细解释。",pe=Ia("operationLog",()=>{const t=O([]),e=O({}),n=O({}),r=(d,b,h,C=null)=>{const _=new Date().toLocaleTimeString("zh-CN",{hour12:!1});let D=0,S=0;C&&rt[C]&&(D=rt[C],S=D*Do,e.value[d]||(e.value[d]=0),e.value[d]+=D),n.value[d]||(n.value[d]=0),n.value[d]++;const v={id:`${d}-${Date.now()}-${Math.random()}`,day:d,timestamp:_,operation:b,details:h,gasUsed:D,ethCost:S};return t.value.unshift(v),v},s=d=>{t.value=t.value.filter(b=>b.day!==d)},i=()=>{t.value=[],e.value={},n.value={}},a=d=>t.value.filter(b=>b.day===d).slice(0,10),o=d=>e.value[d]||0,u=d=>(e.value[d]||0)*Do,c=d=>n.value[d]||0,l=I(()=>t.value.slice(0,20));return{logs:t,dayGasUsage:e,dayOperationCounts:n,recentLogs:l,addLog:r,clearDayLogs:s,clearAllLogs:i,getDayLogs:a,getDayGasUsage:o,getDayEthCost:u,getDayOperationCount:c}});function bf(){const t=mt(),e=Be(),n=pe(),r=t.contracts.day1,s=I(()=>r.count),i=I(()=>r.interactionCount),a=()=>{r.count++,r.interactionCount++,n.addLog(1,"点击计数器","Counter +1","increment"),e.incrementInteraction(1);const b=r.count;b===1?e.unlockConcept(1,"function"):b===2?e.unlockConcept(1,"increment"):b===3?e.unlockConcept(1,"uint256"):b===4&&e.unlockConcept(1,"contract")},o=()=>{r.count=0,n.addLog(1,"重置计数器","Counter reset to 0","reset")},u=I(()=>e.dayProgress[1]),c=I(()=>e.getProgressPercentage(1)),l=I(()=>e.dayProgress[1].unlockedConcepts),d=I(()=>({gasUsage:n.getDayGasUsage(1),ethCost:n.getDayEthCost(1),operationCount:n.getDayOperationCount(1)}));return{counter:s,interactionCount:i,progress:u,progressPercentage:c,unlockedConcepts:l,realtimeData:d,clickCounter:a,resetCounter:o}}function wf(){const t=mt(),e=Be(),n=pe(),r=t.contracts.day2,s=e.dayProgress[2],i=I(()=>r.name),a=I(()=>r.bio),o=I(()=>r.hasStored),u=I(()=>r.hasRetrieved),c=I(()=>r.interactionCount),l=(D,S)=>{r.name=D,r.bio=S,r.hasStored=!0,r.interactionCount++,s.interactionCount++,n.addLog(2,"存储数据",`存储: ${D}`,"addData"),["string","private","memory"].forEach(g=>{e.unlockConcept(2,g)})},d=()=>(r.hasRetrieved=!0,r.interactionCount++,s.interactionCount++,n.addLog(2,"检索数据",`查询: ${i.value}`),["view","parameters","returns"].forEach(S=>{e.unlockConcept(2,S)}),{name:i.value,bio:a.value}),b=I(()=>s),h=I(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),C=I(()=>s.unlockedConcepts),_=I(()=>({gasUsage:n.getDayGasUsage(2),ethCost:n.getDayEthCost(2),operationCount:n.getDayOperationCount(2)}));return{name:i,bio:a,hasStored:o,hasRetrieved:u,interactionCount:c,progress:b,progressPercentage:h,unlockedConcepts:C,realtimeData:_,storeData:l,retrieveData:d}}function _f(){const t=mt(),e=Be(),n=pe(),r=t.contracts.day3,s=I(()=>r.candidates),i=I(()=>r.voteCount),a=I(()=>r.interactionCount),o=h=>{if(!h||h.trim()==="")return;r.candidates.push(h),r.voteCount[h]=0,r.interactionCount++,e.incrementInteraction(3),n.addLog(3,"添加候选人",`候选人: ${h}`,"addCandidate");const C=r.candidates.length;C===1?e.unlockConcept(3,"array"):C===2?e.unlockConcept(3,"push"):C===3&&e.unlockConcept(3,"mapping")},u=h=>{r.voteCount[h]!==void 0&&(r.voteCount[h]++,r.interactionCount++,e.incrementInteraction(3),n.addLog(3,"投票",`投给 ${h}`,"vote"),e.unlockConcept(3,"compound_assignment"))},c=I(()=>e.dayProgress[3]),l=I(()=>e.getProgressPercentage(3)),d=I(()=>e.dayProgress[3].unlockedConcepts),b=I(()=>({gasUsage:n.getDayGasUsage(3),ethCost:n.getDayEthCost(3),operationCount:n.getDayOperationCount(3)}));return{candidates:s,voteCount:i,interactionCount:a,progress:c,progressPercentage:l,unlockedConcepts:d,realtimeData:b,addCandidate:o,voteCandidate:u}}function kf(){const t=mt(),e=Be(),n=pe(),r=t.contracts.day4,s=e.dayProgress[4],i=O(null),a=I(()=>r.owner),o=I(()=>r.item),u=I(()=>r.auctionEndTime),c=I(()=>r.highestBidder),l=I(()=>r.highestBid),d=I(()=>r.ended),b=I(()=>r.bids),h=I(()=>r.bidders),C=I(()=>r.interactionCount),_=(y,E)=>{r.owner=t.generateAddress(),r.item=y,r.auctionEndTime=Math.floor(Date.now()/1e3)+E,r.interactionCount++,s.interactionCount++,n.addLog(4,"初始化拍卖",`物品: ${y}, 时长: ${E}秒`),e.unlockConcept(4,"constructor"),e.unlockConcept(4,"block_timestamp")},D=(y,E)=>{if(r.ended||Math.floor(Date.now()/1e3)>=r.auctionEndTime||y<=0)return!1;const x=r.bids[E]||0;return y<=x?!1:(r.bids[E]=y,r.interactionCount++,s.interactionCount++,x===0&&r.bidders.push(E),y>r.highestBid&&(r.highestBid=y,r.highestBidder=E),n.addLog(4,"出价",`出价 ${y}`,"placeBid"),e.unlockConcept(4,"require"),r.bidders.length>=1&&e.unlockConcept(4,"msg_sender"),(r.bidders.length>=2||r.interactionCount>=2)&&e.unlockConcept(4,"external"),!0)},S=()=>Math.floor(Date.now()/1e3)<r.auctionEndTime||r.ended?!1:(r.ended=!0,r.interactionCount++,s.interactionCount++,n.addLog(4,"结束拍卖","拍卖已结束","endAuction"),e.unlockConcept(4,"bool_type"),!0),v=()=>r.ended?(r.interactionCount++,s.interactionCount++,n.addLog(4,"查看获胜者",`获胜者: ${r.highestBidder}`),e.unlockConcept(4,"address_type"),i.value={winner:r.highestBidder,bid:r.highestBid},i.value):null,g=y=>y?new Date(y*1e3).toLocaleString("zh-CN"):"未设置",p=()=>Math.floor(Date.now()/1e3)>=r.auctionEndTime,f=I(()=>s),w=I(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),k=I(()=>s.unlockedConcepts),A=I(()=>({gasUsage:n.getDayGasUsage(4),ethCost:n.getDayEthCost(4),operationCount:n.getDayOperationCount(4)}));return{owner:a,item:o,auctionEndTime:u,highestBidder:c,highestBid:l,ended:d,bids:b,bidders:h,interactionCount:C,winner:i,progress:f,progressPercentage:w,unlockedConcepts:k,realtimeData:A,initializeAuction:_,placeBid:D,endAuction:S,getWinner:v,formatTime:g,checkAuctionEnded:p}}function xf(){const t=mt(),e=Be(),n=pe(),r=O(""),s=O(""),i=O(""),a=O(""),o=O(""),u=I(()=>(t.initializeContract(5),t.getContract(5))),c=I(()=>{var A;return((A=u.value)==null?void 0:A.owner)||""}),l=I(()=>{var A;return((A=u.value)==null?void 0:A.treasureAmount)||0}),d=I(()=>{var A;return((A=u.value)==null?void 0:A.userAddress)||""}),b=I(()=>{var A;return((A=u.value)==null?void 0:A.userAllowance)||0}),h=I(()=>{var A;return(A=u.value)!=null&&A.hasWithdrawn?!!u.value.hasWithdrawn[d.value]:!1}),C=A=>!A||A<=0?!1:(u.value.treasureAmount+=A,u.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"添加宝藏",`数量: ${A}`,"addTreasure"),e.unlockConcept(5,"modifier"),!0),_=(A,y)=>!A||!y||y<=0?!1:(y<=u.value.treasureAmount&&(u.value.withdrawalAllowance[A]=y,A===u.value.userAddress&&(u.value.userAllowance=y)),u.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"批准提款",`批准 ${A}: ${y}`,"approveWithdrawal"),e.unlockConcept(5,"return_statement"),!0),D=(A,y)=>{if(!A||!y||y<=0)return!1;let E=!1;if(A===u.value.owner)y<=u.value.treasureAmount&&(u.value.treasureAmount-=y,E=!0);else{const m=u.value.withdrawalAllowance[A];m>0&&!u.value.hasWithdrawn[A]&&m<=u.value.treasureAmount&&m>=y&&(u.value.hasWithdrawn[A]=!0,u.value.treasureAmount-=m,u.value.withdrawalAllowance[A]=0,A===u.value.userAddress&&(u.value.userAllowance=0),E=!0)}return u.value.interactionCount++,e.incrementInteraction(5),E&&n.addLog(5,"提取宝藏",`提取: ${y}`,"withdrawTreasure"),!0},S=A=>(A||(A=u.value.userAddress),u.value.hasWithdrawn[A]=!1,u.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"重置提款状态",`重置: ${A}`),!0),v=A=>!A||A==="0x0000000000000000000000000000000000000000"?!1:(u.value.owner=A,u.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"转移所有权",`新所有者: ${A}`,"transferOwnership"),e.unlockConcept(5,"zero_address"),!0),g=()=>(u.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"查询宝藏",`宝藏数量: ${u.value.treasureAmount}`),e.unlockConcept(5,"return_statement"),u.value.treasureAmount),p=I(()=>e.dayProgress[5]),f=I(()=>{const A=e.dayProgress[5];return!A||A.totalConcepts===0?0:Math.floor(A.unlockedConcepts.length/A.totalConcepts*100)}),w=I(()=>e.dayProgress[5].unlockedConcepts),k=I(()=>({gasUsage:n.getDayGasUsage(5),ethCost:n.getDayEthCost(5),operationCount:n.getDayOperationCount(5)}));return{inputTreasureAmount:r,inputRecipient:s,inputAllowance:i,inputWithdrawAmount:a,inputNewOwner:o,owner:c,treasureAmount:l,userAddress:d,userAllowance:b,hasWithdrawn:h,progress:p,progressPercentage:f,unlockedConcepts:w,realtimeData:k,addTreasure:C,approveWithdrawal:_,withdrawTreasure:D,resetWithdrawalStatus:S,transferOwnership:v,getTreasureDetails:g}}function Af(){const t=mt(),e=Be(),n=pe(),r=t.contracts.day6,s=e.dayProgress[6],i=O(null),a=O([]),o=I(()=>r.bankManager),u=I(()=>r.members),c=I(()=>r.userAddress),l=I(()=>r.balance[r.userAddress]||0),d=I(()=>r.interactionCount),b=w=>(t.initializeContract(6),w==="0x0000000000000000000000000000000000000000"||w===r.bankManager||r.registeredMembers[w]?!1:(r.registeredMembers[w]=!0,r.members.push(w),r.balance[w]=0,r.interactionCount++,s.interactionCount++,n.addLog(6,"添加会员",`会员: ${w}`,"addMembers"),e.unlockConcept(6,"address_mapping_balance"),!0)),h=w=>{t.initializeContract(6);const k=r.userAddress;if(!r.registeredMembers[k])return!1;const A=w*1e18;return r.balance[k]+=A,r.interactionCount++,s.interactionCount++,n.addLog(6,"存入ETH",`存入 ${w} ETH`,"depositAmountEther"),e.unlockConcept(6,"payable"),e.unlockConcept(6,"msg_value"),!0},C=w=>{t.initializeContract(6);const k=r.userAddress;if(!r.registeredMembers[k])return!1;const A=w*1e18;return r.balance[k]<A?!1:(r.balance[k]-=A,r.interactionCount++,s.interactionCount++,n.addLog(6,"提取ETH",`提取 ${w} ETH`,"withdrawAmount"),e.unlockConcept(6,"wei_unit"),e.unlockConcept(6,"ether_deposit_withdraw"),!0)},_=w=>(t.initializeContract(6),r.interactionCount++,s.interactionCount++,i.value=r.balance[w]||0,n.addLog(6,"查询余额",`查询: ${w}`),i.value),D=()=>(t.initializeContract(6),r.interactionCount++,s.interactionCount++,a.value=[...r.members],a.value),S=w=>(w/1e18).toFixed(4)+" ETH",v=I(()=>s),g=I(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),p=I(()=>s.unlockedConcepts),f=I(()=>({gasUsage:n.getDayGasUsage(6),ethCost:n.getDayEthCost(6),operationCount:n.getDayOperationCount(6)}));return{bankManager:o,members:u,userAddress:c,userBalance:l,interactionCount:d,queryBalance:i,membersList:a,progress:v,progressPercentage:g,unlockedConcepts:p,realtimeData:f,addMembers:b,depositEther:h,withdrawEth:C,getBalance:_,getMembers:D,formatBalance:S}}function Cf(){const t=mt(),e=Be(),n=pe(),r=t.contracts.day7,s=e.dayProgress[7],i=O(null),a=I(()=>r.owner),o=I(()=>r.userAddress),u=I(()=>r.friendList),c=I(()=>r.balances[r.userAddress]||0),l=I(()=>r.debts),d=I(()=>r.interactionCount),b=y=>(t.initializeContract(7),r.registeredFriends[y]?!1:(r.registeredFriends[y]=!0,r.friendList.push(y),r.balances[y]=0,r.interactionCount++,s.interactionCount++,n.addLog(7,"添加好友",`好友: ${y}`,"addFriend"),e.unlockConcept(7,"nested_mapping"),!0)),h=y=>{t.initializeContract(7);const E=r.userAddress;if(!r.registeredFriends[E])return!1;const m=y*1e18;return r.balances[E]=(r.balances[E]||0)+m,r.interactionCount++,s.interactionCount++,n.addLog(7,"存款",`存入 ${y} ETH`,"depositIntoWallet"),e.unlockConcept(7,"address_payable"),!0},C=(y,E)=>{t.initializeContract(7);const m=r.userAddress,x=E*1e18;return r.debts[y]||(r.debts[y]={}),r.debts[y][m]=(r.debts[y][m]||0)+x,r.interactionCount++,s.interactionCount++,n.addLog(7,"记录债务",`债务人: ${y}, 金额: ${E} ETH`,"recordDebt"),e.unlockConcept(7,"debt_tracking"),!0},_=(y,E)=>{t.initializeContract(7);const m=r.userAddress,x=E*1e18;return(r.balances[m]||0)<x?"余额不足：你的钱包可用余额小于还款金额！":(r.balances[m]-=x,r.balances[y]=(r.balances[y]||0)+x,r.debts[m]&&r.debts[m][y]&&(r.debts[m][y]-=x,r.debts[m][y]<0&&(r.debts[m][y]=0)),r.interactionCount++,s.interactionCount++,n.addLog(7,"还款",`债权人: ${y}, 金额: ${E} ETH`,"payFromWallet"),e.unlockConcept(7,"internal_transfer"),!0)},D=(y,E)=>{t.initializeContract(7);const m=r.userAddress,x=E*1e18;return(r.balances[m]||0)<x?"余额不足：试图转账的金额超过了你拥有的钱包余额！":(r.balances[m]-=x,r.balances[y]=(r.balances[y]||0)+x,r.interactionCount++,s.interactionCount++,n.addLog(7,"转账(transfer)",`收款方: ${y}, 金额: ${E} ETH`,"transferEther"),e.unlockConcept(7,"transfer_method"),!0)},S=(y,E)=>{t.initializeContract(7);const m=r.userAddress,x=E*1e18;return(r.balances[m]||0)<x?"余额不足：低级调用失败，因为你的钱包没有足够的以太币！":(r.balances[m]-=x,r.balances[y]=(r.balances[y]||0)+x,r.interactionCount++,s.interactionCount++,n.addLog(7,"转账call",`收款方: ${y}, 金额: ${E} ETH`,"transferEtherViaCall"),e.unlockConcept(7,"call_method"),!0)},v=y=>{t.initializeContract(7);const E=r.userAddress,m=y*1e18;return(r.balances[E]||0)<m?"余额不足：你无法提取超过拥有额度的资金！":(r.balances[E]-=m,r.interactionCount++,s.interactionCount++,n.addLog(7,"提款",`提取 ${y} ETH`,"withdraw"),e.unlockConcept(7,"withdraw_pattern"),!0)},g=()=>{t.initializeContract(7);const y=r.userAddress;return i.value=r.balances[y]||0,r.interactionCount++,s.interactionCount++,n.addLog(7,"查询余额",`余额: ${(i.value/1e18).toFixed(4)} ETH`),e.unlockConcept(7,"withdraw_pattern"),i.value},p=y=>(y/1e18).toFixed(4)+" ETH",f=I(()=>s),w=I(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),k=I(()=>s.unlockedConcepts),A=I(()=>({gasUsage:n.getDayGasUsage(7),ethCost:n.getDayEthCost(7),operationCount:n.getDayOperationCount(7)}));return{owner:a,userAddress:o,friendsList:u,userBalance:c,debts:l,interactionCount:d,checkedBalance:i,progress:f,progressPercentage:w,unlockedConcepts:k,realtimeData:A,iouAddFriend:b,iouDeposit:h,iouRecordDebt:C,iouPayDebt:_,iouTransferMethod:D,iouCallMethod:S,iouWithdraw:v,iouCheckBalance:g,formatBalance:p}}function Tf(){const t=mt(),e=Be(),n=pe(),r=t.contracts.day8,s=e.dayProgress[8],i=I(()=>r.owner),a=I(()=>r.userAddress),o=I(()=>r.isUserAdmin),u=I(()=>r.totalTipsReceived),c=I(()=>r.supportedCurrencies),l=I(()=>r.conversionRates),d=I(()=>r.interactionCount),b=()=>{t.initializeContract(8),r.isUserAdmin=!r.isUserAdmin,r.interactionCount++,s.interactionCount++,n.addLog(8,"切换管理员模式",r.isUserAdmin?"开启管理员模式":"关闭管理员模式"),e.unlockConcept(8,"modifier_onlyOwner")},h=w=>{t.initializeContract(8);const k=w*1e18;r.totalTipsReceived+=k;const A=r.userAddress;r.tipPerPerson[A]=(r.tipPerPerson[A]||0)+k,r.interactionCount++,s.interactionCount++,n.addLog(8,"打赏ETH",`打赏 ${w} ETH`,"tipInEth"),e.unlockConcept(8,"payable_tip")},C=(w,k)=>{t.initializeContract(8);const A=r.conversionRates[w];if(!A)return!1;const y=k*A;r.totalTipsReceived+=y;const E=r.userAddress;return r.tipPerPerson[E]=(r.tipPerPerson[E]||0)+y,r.tipsPerCurrency[w]||(r.tipsPerCurrency[w]=0),r.tipsPerCurrency[w]+=k,r.interactionCount++,s.interactionCount++,n.addLog(8,"打赏货币",`打赏 ${k} ${w}`,"tipInCurrency"),e.unlockConcept(8,"msg_value_tip"),e.unlockConcept(8,"mapping_rates"),!0},_=()=>(t.initializeContract(8),r.isUserAdmin?r.totalTipsReceived===0?"revert: No tips to withdraw":(r.totalTipsReceived=0,r.interactionCount++,s.interactionCount++,n.addLog(8,"提取小费","提取所有小费","withdrawTips"),e.unlockConcept(8,"address_balance"),e.unlockConcept(8,"call_withdraw"),!0):"revert: Only owner can perform this action"),D=()=>{const w=r.userAddress,k=r.tipPerPerson[w]||0;return n.addLog(8,"查询打赏",`累计打赏: ${(k/1e18).toFixed(4)} ETH`),k},S=w=>(w/1e18).toFixed(4)+" ETH",v=I(()=>s),g=I(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),p=I(()=>s.unlockedConcepts),f=I(()=>({gasUsage:n.getDayGasUsage(8),ethCost:n.getDayEthCost(8),operationCount:n.getDayOperationCount(8)}));return{owner:i,userAddress:a,isAdmin:o,totalTips:u,supportedCurrencies:c,conversionRates:l,interactionCount:d,progress:v,progressPercentage:g,unlockedConcepts:p,realtimeData:f,tipJarToggleAdmin:b,tipJarTipInEth:h,tipJarTipInCurrency:C,tipJarWithdraw:_,getUserTips:D,formatBalance:S}}function Ef(){const t=mt(),e=Be(),n=pe(),r=t.contracts.day9,s=e.dayProgress[9],i=I(()=>r.owner),a=I(()=>r.userAddress),o=I(()=>r.isUserAdmin),u=I(()=>r.scientificCalculatorAddress),c=I(()=>r.isAddressSet),l=I(()=>r.operationCount),d=I(()=>r.operationHistory),b=I(()=>r.interactionCount),h=I(()=>r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),C=()=>{t.initializeContract(9),r.isUserAdmin=!r.isUserAdmin,n.addLog(9,"切换身份",r.isUserAdmin?"切换为管理员":"切换为用户")},_=(m,x,B)=>{if(t.initializeContract(9),isNaN(x)||isNaN(B))throw new Error("请输入有效的数字");let M;switch(m){case"add":M=x+B;break;case"subtract":M=x-B;break;case"multiply":M=x*B;break;case"divide":if(B===0)throw new Error("不能除以零");M=x/B;break;default:throw new Error("未知运算符")}r.operationCount++,r.operationHistory.push({operator:m,a:x,b:B,result:M,timestamp:Date.now()}),r.interactionCount++,s.interactionCount++;const q={add:"加法",subtract:"减法",multiply:"乘法",divide:"除法"};return n.addLog(9,"基础运算",`${q[m]}: ${x} ${m==="add"?"+":m==="subtract"?"-":m==="multiply"?"×":"÷"} ${B} = ${M}`),r.operationCount>=3&&e.unlockConcept(9,"pure_function"),M},D=m=>{if(t.initializeContract(9),!r.isUserAdmin)throw new Error("Only owner can do this action");if(!m||m.length<3)throw new Error("请输入合约地址");if(!m.startsWith("0x"))throw new Error("合约地址必须以 0x 开头");return r.scientificCalculatorAddress=m,r.isAddressSet=!0,r.interactionCount++,s.interactionCount++,n.addLog(9,"设置合约地址",`科学计算器地址: ${m}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.setAddress=!0,e.unlockConcept(9,"modifier_onlyOwner"),!0},S=(m,x)=>{if(t.initializeContract(9),!r.isAddressSet)throw new Error("请先设置ScientificCalculator合约地址");if(isNaN(m)||isNaN(x))throw new Error("请输入有效的数字");let B=1;for(let M=0;M<x;M++)B*=m;return r.interactionCount++,s.interactionCount++,n.addLog(9,"指数运算",`${m}^${x} = ${B}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.powerCalc=!0,e.unlockConcept(9,"view_function"),e.unlockConcept(9,"cross_contract_call"),e.unlockConcept(9,"interface_call"),B},v=m=>{if(t.initializeContract(9),!r.isAddressSet)throw new Error("请先设置ScientificCalculator合约地址");if(isNaN(m)||m<0)throw new Error("请输入有效的非负数字");let x=m/2;const B=[];for(let M=0;M<10;M++){const q=x;x=(x+m/x)/2,B.push({round:M+1,value:x,prevValue:q,formula:`(${q.toFixed(4)} + ${m}/${q.toFixed(4)}) / 2 = ${x.toFixed(4)}`})}return r.interactionCount++,s.interactionCount++,n.addLog(9,"平方根计算",`√${m} ≈ ${Math.floor(x)}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.sqrtCalc=!0,e.unlockConcept(9,"low_level_call"),{result:Math.floor(x),steps:B}},g=async(m,x=!1)=>{if(t.initializeContract(9),isNaN(m)||m<0)throw new Error("请输入有效的非负数字");const B=[];let M=m/2;for(let q=0;q<10;q++){const F=M;M=(M+m/M)/2,B.push({round:q+1,value:M,prevValue:F,formula:`(${F.toFixed(4)} + ${m}/${F.toFixed(4)}) / 2 = ${M.toFixed(4)}`}),x&&await new Promise(P=>setTimeout(P,500))}return r.interactionCount++,s.interactionCount++,n.addLog(9,"牛顿迭代",`计算 √${m} 的迭代过程`),e.unlockConcept(9,"newton_iteration"),B},p=m=>(t.initializeContract(9),n.addLog(9,"权限验证",m?"以管理员身份验证":"以用户身份验证"),m?(r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.permissionCheck=!0,{success:!0,message:"验证通过：Owner权限确认"}):{success:!1,message:"验证失败：Only owner can do this action"}),f=()=>{t.initializeContract(9);const m=r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1},x=Object.values(m).filter(B=>B).length;return x===4?(e.unlockConcept(9,"contract_composition"),{success:!0,message:"🎉 恭喜！你已完成所有挑战任务！"}):{success:!1,message:`还有 ${4-x} 个任务未完成`}},w=I(()=>s),k=I(()=>e.getProgressPercentage(9)),A=I(()=>e.getUnlockedConcepts(9)),y=I(()=>{const m=r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1};return Object.values(m).filter(x=>x).length}),E=I(()=>({gasUsage:n.getDayGasUsage(9),ethCost:n.getDayEthCost(9),operationCount:n.getDayOperationCount(9)}));return{owner:i,userAddress:a,isOwner:o,scientificCalculatorAddress:u,isAddressSet:c,operationCount:l,operationHistory:d,interactionCount:b,challengeTasks:h,progress:w,progressPercentage:k,unlockedConcepts:A,completedChallengeCount:y,realtimeData:E,toggleIdentity:C,calculate:_,setScientificCalculator:D,calculatePower:S,calculateSquareRoot:v,runNewtonIteration:g,checkPermission:p,completeChallenge:f}}function Sf(){const t=mt(),e=Be(),n=pe(),r=t.contracts.day10,s=e.dayProgress[10],i=I(()=>r.owner),a=I(()=>r.userAddress),o=I(()=>r.userProfile),u=I(()=>r.workoutHistory),c=I(()=>r.totalWorkouts),l=I(()=>r.totalDistance),d=I(()=>r.milestones),b=I(()=>r.userProfile.isRegistered),h=()=>{t.initializeContract(10)},C=F=>({struct_definition:"📦 太棒了！你学会了使用结构体打包数据！👉 记录一次运动来看看时间戳如何工作！",event_logging:"📋 不错！你触发了事件日志！👉 记录运动来查看运动历史如何存储！",onlyRegistered_modifier:"🛡️ 太棒了！你了解了修饰符如何保护函数！👉 记录运动来解锁更多概念！",timestamp_usage:"⏰ 很好！你学会了记录时间戳！👉 查看运动历史来解锁 array_in_mapping！",array_in_mapping:"🗂️ 很好！你看到了映射到数组的用法！👉 查看统计数据来解锁 multiple_mappings！",multiple_mappings:"🗺️ 优秀！你了解了多个映射如何协同工作！👉 更新体重来解锁 storage_keyword！",storage_keyword:"💾 太棒了！你了解了 storage 的威力！👉 继续记录运动，达成里程碑来解锁 milestone_detection！",milestone_detection:"🏆 恭喜！你达成了里程碑！👉 查看完整代码来复习所有知识！"})[F]||"",_=(F,P)=>{if(h(),r.userProfile.isRegistered)return{success:!1,error:"User already registered"};r.userProfile={name:F,weight:P,isRegistered:!0},r.interactionCount++,s.interactionCount++,n.addLog(10,"注册用户",`用户: ${F}, 体重: ${P}kg`);const L=[];return e.unlockConcept(10,"struct_definition"),L.push(C("struct_definition")),e.unlockConcept(10,"event_logging"),L.push(C("event_logging")),e.unlockConcept(10,"onlyRegistered_modifier"),L.push(C("onlyRegistered_modifier")),{success:!0,unlockedHints:L}},D=(F,P,L)=>{if(h(),!r.userProfile.isRegistered)return{success:!1,error:"User not registered"};const N={activityType:F,duration:P,distance:L,timestamp:Date.now()};r.workoutHistory.unshift(N);const U=r.totalDistance;r.totalWorkouts++,r.totalDistance+=L,r.interactionCount++,s.interactionCount++,n.addLog(10,"记录运动",`${F} ${L}米 ${w(P)}`);const K=!e.isConceptUnlocked(10,"timestamp_usage"),ne=!e.isConceptUnlocked(10,"array_in_mapping");e.unlockConcept(10,"timestamp_usage"),e.unlockConcept(10,"array_in_mapping");const ye=v(U),be=[];return K&&be.push(C("timestamp_usage")),ne&&be.push(C("array_in_mapping")),ye&&be.push(C("milestone_detection")),{success:!0,unlockedHints:be}},S=F=>{if(h(),!r.userProfile.isRegistered)return{success:!1,error:"User not registered"};const P=r.userProfile.weight;let L=!1;F<P&&P>0&&(P-F)*100/P>=5&&(g("weightGoal"),L=!0),r.userProfile.weight=F,r.interactionCount++,s.interactionCount++,n.addLog(10,"更新体重",`${P}kg → ${F}kg`);const N=!e.isConceptUnlocked(10,"storage_keyword"),U=!e.isConceptUnlocked(10,"multiple_mappings");e.unlockConcept(10,"storage_keyword"),e.unlockConcept(10,"multiple_mappings");const K=[];return N&&K.push(C("storage_keyword")),U&&K.push(C("multiple_mappings")),L&&K.push(C("milestone_detection")),{success:!0,unlockedHints:K}},v=(F,P)=>{const L=r.totalWorkouts,N=r.totalDistance;let U=!1;return L===10?(g("workouts10"),U=!0):L===50&&(g("workouts50"),U=!0),N>=1e5&&F<1e5&&(g("distance100K"),U=!0),U},g=F=>{const P=r.milestones[F];P&&!P.achieved&&(P.achieved=!0,P.timestamp=Date.now(),e.unlockConcept(10,"milestone_detection"))},p=(F,P)=>P==="minutes"?F*60:P==="hours"?F*3600:F,f=(F,P)=>P==="kilometers"?F*1e3:F,w=F=>{if(F<60)return`${F}秒`;if(F<3600)return`${Math.floor(F/60)}分钟`;{const P=Math.floor(F/3600),L=Math.floor(F%3600/60);return L>0?`${P}小时${L}分钟`:`${P}小时`}},k=F=>F<1e3?`${F}米`:`${(F/1e3).toFixed(2)}公里`,A=F=>new Date(F).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),y=F=>({跑步:"🏃",Running:"🏃",骑行:"🚴",Cycling:"🚴",游泳:"🏊",Swimming:"🏊",步行:"🚶",Walking:"🚶",瑜伽:"🧘",Yoga:"🧘",篮球:"⛹️",Basketball:"⛹️"})[F]||"💪",E=()=>{const F=!e.isConceptUnlocked(10,"array_in_mapping");return e.unlockConcept(10,"array_in_mapping"),n.addLog(10,"查看运动历史",`共 ${r.workoutHistory.length} 条记录`),F?C("array_in_mapping"):null},m=()=>{const F=!e.isConceptUnlocked(10,"multiple_mappings");return e.unlockConcept(10,"multiple_mappings"),n.addLog(10,"查看统计",`总运动: ${r.totalWorkouts}次, 总距离: ${k(r.totalDistance)}`),F?C("multiple_mappings"):null},x=I(()=>s),B=I(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),M=I(()=>s.unlockedConcepts),q=I(()=>({gasUsage:n.getDayGasUsage(10),ethCost:n.getDayEthCost(10),operationCount:n.getDayOperationCount(10)}));return{owner:i,userAddress:a,userProfile:o,workoutHistory:u,totalWorkouts:c,totalDistance:l,milestones:d,isRegistered:b,progress:x,progressPercentage:B,unlockedConcepts:M,realtimeData:q,registerUser:_,logWorkout:D,updateWeight:S,convertToSeconds:p,convertToMeters:f,formatDuration:w,formatDistance:k,formatTimestamp:A,getActivityIcon:y,viewWorkoutHistory:E,viewStatistics:m,initializeContract:h}}function If(){const t=mt(),e=Be(),n=pe(),r=I(()=>(t.initializeContract(11),t.getContract(11))),s=I(()=>{var f;return((f=r.value)==null?void 0:f.owner)||""}),i=I(()=>{var f;return((f=r.value)==null?void 0:f.contractBalance)||0}),a=I(()=>{var f;return((f=r.value)==null?void 0:f.userAddress)||""}),o=I(()=>a.value===s.value),u=I(()=>{var f;return((f=r.value)==null?void 0:f.eventLog)||[]}),c=f=>({inheritance:"📦 太棒了！你看到 VaultMaster 继承了 Ownable 的功能！👉 存入 ETH 来学习 import 机制！",constructor:"🏗️ 太棒了！你了解了构造函数！👉 存入 ETH 来学习导入语句和私有变量！",import_statement:"📥 不错！你了解了导入语句！👉 继续存入 ETH 来学习事件日志！",event_logging:"📋 很好！你触发了事件日志！👉 尝试转移所有权来解锁更多概念！",private_visibility:"🔒 优秀！你学会了 private 变量的使用！合约余额等敏感数据都使用 private 保护！",transfer_ownership:"🔑 很好！你了解了所有权转移！👉 尝试以用户身份提取来学习修饰符！",indexed_parameter:"🏷️ 不错！你了解了索引参数！👉 切换到用户身份体验权限控制！",onlyOwner_modifier:"🛡️ 太棒了！你了解了 onlyOwner 修饰符！👉 查看完整代码来学习更多！"})[f]||"",l=f=>{var A;const w=e.dayProgress[11];return((A=w==null?void 0:w.unlockedConcepts)==null?void 0:A.includes(f))?null:(e.unlockConcept(11,f),c(f))},d=()=>"0x"+Array(40).fill(0).map(()=>Math.floor(Math.random()*16).toString(16)).join(""),b=()=>r.value?(r.value.userAddress=r.value.owner,e.incrementInteraction(11),n.addLog(11,"切换身份","切换为所有者身份"),{hint:"✅ 已切换到所有者身份！👉 现在可以转移所有权和提取资金了！"}):null,h=()=>{if(r.value){const f=d();return r.value.userAddress=f,e.incrementInteraction(11),n.addLog(11,"切换身份",`切换为用户身份: ${f.slice(0,10)}...`),{hint:"👤 已切换到用户身份！👉 现在尝试提取资金来体验权限控制！"}}return null},C=()=>{e.incrementInteraction(11),n.addLog(11,"查询所有者",`所有者: ${s.value.slice(0,10)}...`);const f=[],w=l("inheritance");w&&f.push(w);const k=l("constructor");return k&&f.push(k),{address:s.value,hint:f.length>0?f.join(`
`):null}},_=()=>(e.incrementInteraction(11),n.addLog(11,"查询余额",`合约余额: ${(i.value/1e18).toFixed(4)} ETH`),i.value),D=f=>{if(!f||f<=0)return{success:!1,error:"金额无效"};const w=Math.floor(f*1e18);r.value.contractBalance+=w,r.value.eventLog.push({name:"DepositSuccessful",icon:"💰",details:`存入 ${f} ETH (${w} wei)`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"存款",`存入 ${f} ETH`);const k=[],A=l("import_statement");A&&k.push(A);const y=l("event_logging");y&&k.push(y);const E=l("private_visibility");return E&&k.push(E),{success:!0,hints:k}},S=(f,w)=>{if(!f||!w||w<=0)return{success:!1,error:"参数无效"};if(!o.value)return l("onlyOwner_modifier"),e.incrementInteraction(11),n.addLog(11,"提取失败","权限不足：非所有者尝试提取"),{success:!1,error:"❌ 权限不足：只有所有者才能提取资金 🛡️ 解锁知识点：onlyOwner 修饰符！"};const k=Math.floor(w*1e18);return k>i.value?{success:!1,error:"余额不足"}:(r.value.contractBalance-=k,r.value.eventLog.push({name:"WithdrawSuccessful",icon:"💸",details:`提取 ${w} ETH 到 ${f.slice(0,6)}...${f.slice(-4)}`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"提取资金",`提取 ${w} ETH 到 ${f.slice(0,10)}...`),{success:!0})},v=f=>{var m;if(!f||f==="0x0000000000000000000000000000000000000000")return{success:!1,error:"无效地址"};if(!o.value)return{success:!1,error:"权限不足"};const w=r.value.owner;r.value.owner=f,r.value.userAddress===w&&(r.value.userAddress=f),r.value.eventLog.push({name:"OwnershipTransferred",icon:"🔑",details:`所有权从 ${w.slice(0,6)}... 转移到 ${f.slice(0,6)}...`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"转移所有权",`${w.slice(0,10)}... → ${f.slice(0,10)}...`);const k=[],A=l("transfer_ownership");A&&k.push(A);const y=l("indexed_parameter");y&&k.push(y);const E=e.dayProgress[11];return(m=E==null?void 0:E.unlockedConcepts)!=null&&m.includes("onlyOwner_modifier")||k.push('🛡️ 想体验权限控制吗？👉 切换到"用户"身份，尝试提取资金！'),{success:!0,hints:k}},g=()=>(e.incrementInteraction(11),n.addLog(11,"查看代码","查看完整合约代码"),{hints:["📖 你已了解所有核心概念！查看完整代码来巩固知识吧！"]}),p=I(()=>({gasUsage:n.getDayGasUsage(11),ethCost:n.getDayEthCost(11),operationCount:n.getDayOperationCount(11)}));return{owner:s,contractBalance:i,userAddress:a,isOwner:o,eventLog:u,realtimeData:p,getOwner:C,getBalance:_,deposit:D,withdraw:S,transferOwnership:v,setOwnerMode:b,setUserMode:h,viewFullCode:g,unlockConceptWithHint:l,getUnlockHint:c}}function Df(){const t=pe(),e=O({name:"Web3 Compass",symbol:"COM",decimals:18,totalSupply:1e6}),n={alice:"0xAlice7429aC95B2cF0e4b5F1F4E4e8e7D6c5B4A3210",bob:"0xBob8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",carol:"0xCarol5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},r=O({[n.alice]:1e6,[n.bob]:0,[n.carol]:0}),s=O({[n.alice]:{[n.carol]:0},[n.bob]:{},[n.carol]:{}}),i=O("alice"),a=O([{icon:"🟢",name:"Transfer",details:"从: 0x0000...0000 到: Alice 数量: 1,000,000 COM (铸币)",timestamp:Date.now()}]),o=I(()=>n[i.value]),u=v=>v===n.alice?"Alice":v===n.bob?"Bob":v===n.carol?"Carol":v.slice(0,6)+"..."+v.slice(-4),c=v=>v?v===n.alice?"Alice (0xAlice...3210)":v===n.bob?"Bob (0xBob...7E6F)":v===n.carol?"Carol (0xCarol...E2F)":v.slice(0,10)+"..."+v.slice(-8):"",l=v=>{i.value=v;const g={alice:"👑 已切换到 Alice（代币持有者）",bob:"👤 已切换到 Bob（普通用户）",carol:"🔑 已切换到 Carol（可被授权者）"};return t.addLog(12,"切换角色",g[v]),{success:!0,message:g[v],hints:[],nextStep:""}},d=v=>{const g=r.value[v]||0,p=u(v);return t.addLog(12,"查询余额",`${p}: ${g.toLocaleString()} COM`),{success:!0,balance:g,message:`📊 查询成功！${p} 余额: ${g.toLocaleString()} COM`,hints:[],nextStep:"💡 余额使用 mapping(address => uint256) 存储！👉 转账给 Bob 来学习事件机制！"}},b=(v,g)=>{const p=o.value,f=u(p),w=u(v);return r.value[p]<g?(t.addLog(12,"转账失败",`余额不足: ${f} → ${w}`),{success:!1,message:`❌ 转账失败！余额不足。当前余额: ${r.value[p].toLocaleString()} COM，尝试转账: ${g.toLocaleString()} COM`,hints:[],nextStep:""}):v==="0x0000000000000000000000000000000000000000"?(t.addLog(12,"转账失败","接收地址不能是零地址"),{success:!1,message:"❌ 转账失败！接收地址不能是零地址。",hints:[],nextStep:""}):p===v?(t.addLog(12,"转账失败","不能转账给自己"),{success:!1,message:"❌ 转账失败！不能转账给自己。",hints:[],nextStep:""}):(r.value[p]-=g,r.value[v]=(r.value[v]||0)+g,a.value.push({icon:"🟢",name:"Transfer",details:`从: ${f} 到: ${w} 数量: ${g.toLocaleString()} COM`,timestamp:Date.now()}),t.addLog(12,"转账",`${f} → ${w}: ${g.toLocaleString()} COM`),{success:!0,message:`✅ 转账成功！${f} 向 ${w} 转账 ${g.toLocaleString()} COM 📋 恭喜解锁：事件日志！💸 恭喜解锁：转账函数！`,hints:["event","transfer"],nextStep:"👉 授权给 Carol 来学习授权机制！"})},h=(v,g)=>{const p=o.value,f=u(p),w=u(v);return i.value!=="alice"?(t.addLog(12,"授权失败","只有 Alice 才能授权"),{success:!1,message:"❌ 授权失败！只有代币持有者 Alice 才能授权。请切换到 Alice。",hints:[],nextStep:""}):p===v?(t.addLog(12,"授权失败","不能授权给自己"),{success:!1,message:"❌ 授权失败！不能授权给自己。",hints:[],nextStep:""}):(s.value[p]||(s.value[p]={}),s.value[p][v]=g,a.value.push({icon:"🟡",name:"Approval",details:`持有者: ${f} 被授权者: ${w} 额度: ${g.toLocaleString()} COM`,timestamp:Date.now()}),t.addLog(12,"授权",`${f} → ${w}: ${g.toLocaleString()} COM`),{success:!0,message:`✅ 授权成功！${f} 授权 ${w} 可以使用 ${g.toLocaleString()} COM ✅ 恭喜解锁：授权函数！`,hints:["approve"],nextStep:"👉 查询 allowance 来学习授权额度查询！"})},C=(v,g)=>{var k;const p=((k=s.value[v])==null?void 0:k[g])||0,f=u(v),w=u(g);return t.addLog(12,"查询授权额度",`${w} 可用 ${f}: ${p.toLocaleString()} COM`),{success:!0,allowance:p,message:`🔍 查询成功！${w} 可使用 ${f} 的额度: ${p.toLocaleString()} COM 🗂️ 恭喜解锁：嵌套映射！🔍 恭喜解锁：授权额度查询！`,hints:["mapping_nested","allowance"],nextStep:"👉 切换到 Carol 执行代转账来学习 transferFrom！"}},_=(v,g,p)=>{var E;const f=o.value,w=u(f),k=u(v),A=u(g);if(i.value!=="carol")return t.addLog(12,"代转账失败","只有 Carol 才能执行代转账"),{success:!1,message:"❌ 代转账失败！只有被授权者 Carol 才能执行代转账。请切换到 Carol。",hints:[],nextStep:""};if(v!==n.alice)return t.addLog(12,"代转账失败","Carol 只被 Alice 授权"),{success:!1,message:"❌ 代转账失败！Carol 只被 Alice 授权，只能从 Alice 账户代转账。",hints:[],nextStep:""};const y=((E=s.value[v])==null?void 0:E[f])||0;return y<p?(t.addLog(12,"代转账失败",`授权额度不足: ${y.toLocaleString()} COM`),{success:!1,message:`❌ 授权额度不足！Carol 只能使用 Alice 的 ${y.toLocaleString()} COM，尝试转账: ${p.toLocaleString()} COM`,hints:[],nextStep:""}):r.value[v]<p?(t.addLog(12,"代转账失败",`余额不足: ${k}`),{success:!1,message:`❌ 余额不足！${k} 当前余额: ${r.value[v].toLocaleString()} COM`,hints:[],nextStep:""}):(r.value[v]-=p,r.value[g]=(r.value[g]||0)+p,s.value[v][f]-=p,a.value.push({icon:"🟢",name:"Transfer",details:`从: ${k} 到: ${A} 数量: ${p.toLocaleString()} COM (by ${w})`,timestamp:Date.now()}),t.addLog(12,"代转账",`${w} 代替 ${k} → ${A}: ${p.toLocaleString()} COM`),{success:!0,message:`✅ 代转账成功！${w} 代替 ${k} 向 ${A} 转账 ${p.toLocaleString()} COM 🔄 恭喜解锁：代转账函数！`,hints:["transferFrom"],nextStep:"🎉 你已掌握 ERC20 全部核心功能！"})},D=v=>new Date(v).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),S=I(()=>({gasUsage:t.getDayGasUsage(12),ethCost:t.getDayEthCost(12),operationCount:t.getDayOperationCount(12)}));return{tokenInfo:e,roles:n,balances:r,allowances:s,currentRole:i,currentAddress:o,eventLog:a,realtimeData:S,switchRole:l,getBalance:d,transfer:b,approve:h,getAllowance:C,transferFrom:_,getRoleName:u,formatAddress:c,formatTime:D}}function Rf(){const t=pe(),e=O({name:"Web3 Compass",symbol:"WBT",decimals:18,totalSupply:1e6}),n={deployer:"0xDeployer7429aC95B2cF0e4b5F1F4E4e8e7D6c5B4A3210",alice:"0xAlice8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",bob:"0xBob5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},r=O({[n.deployer]:1e6,[n.alice]:0,[n.bob]:0}),s=O({[n.deployer]:{[n.alice]:0,[n.bob]:0},[n.alice]:{},[n.bob]:{}}),i=O("deployer"),a=O([{icon:"🪙",name:"Mint",details:"Transfer(address(0), Deployer, 1,000,000 WBT) - 合约部署时铸造",timestamp:Date.now(),type:"mint"}]),o=I(()=>n[i.value]),u=v=>v===n.deployer?"Deployer":v===n.alice?"Alice":v===n.bob?"Bob":v.slice(0,6)+"..."+v.slice(-4),c=v=>v?v===n.deployer?"Deployer (0xDeployer...3210)":v===n.alice?"Alice (0xAlice...7E6F)":v===n.bob?"Bob (0xBob...E2F)":v.slice(0,10)+"..."+v.slice(-8):"",l=v=>{i.value=v;const g={deployer:"✅ 已切换到 Deployer（合约部署者/代币持有者）！👉 执行转账操作来解锁 internal 和 virtual 函数！",alice:"✅ 已切换到 Alice（普通用户）！👉 让 Deployer 授权给你，然后执行代转账！",bob:"✅ 已切换到 Bob（可被授权者）！👉 让 Deployer 授权给你，然后执行代转账！"};return t.addLog(13,"切换角色",g[v]),{success:!0,message:g[v],hints:[],nextStep:""}},d=v=>{const g=r.value[v]||0,p=u(v);return t.addLog(13,"查询余额",`${p}: ${g.toLocaleString()} WBT`),{success:!0,balance:g,message:`📊 查询成功！${p} 余额: ${g.toLocaleString()} WBT 👉 执行转账来解锁 internal 和 virtual 函数！`,hints:[],nextStep:"💡 余额使用 mapping(address => uint256) 存储！👉 执行转账来解锁 internal 和 virtual 函数！"}},b=(v,g)=>{const p=o.value,f=u(p),w=u(v);return r.value[p]<g?(t.addLog(13,"转账失败",`余额不足: ${f} → ${w}`),{success:!1,message:`❌ 转账失败！余额不足。当前余额: ${r.value[p].toLocaleString()} WBT，尝试转账: ${g.toLocaleString()} WBT`,hints:[],nextStep:""}):v==="0x0000000000000000000000000000000000000000"?(t.addLog(13,"转账失败","接收地址不能是零地址"),{success:!1,message:"❌ 转账失败！接收地址不能是零地址。",hints:[],nextStep:""}):p===v?(t.addLog(13,"转账失败","不能转账给自己"),{success:!1,message:"❌ 转账失败！不能转账给自己。",hints:[],nextStep:""}):(r.value[p]-=g,r.value[v]=(r.value[v]||0)+g,a.value.push({icon:"🟢",name:"Transfer",details:`从: ${f} 到: ${w} 数量: ${g.toLocaleString()} WBT`,timestamp:Date.now(),type:"transfer"}),t.addLog(13,"转账",`${f} → ${w}: ${g.toLocaleString()} WBT`,"transfer13"),{success:!0,message:`✅ 转账成功！${f} 向 ${w} 转账 ${g.toLocaleString()} WBT 🎉 恭喜解锁：internal 和 virtual 函数！👉 点击查看代码了解所有知识点！`,hints:["internal_function"],nextStep:"🔒 太棒了！transfer() 内部调用了 _transfer() 这个 internal 函数！同时解锁了 virtual 关键字！👉 点击查看代码了解所有知识点！"})},h=(v,g)=>{const p=o.value,f=u(p),w=u(v);return i.value!=="deployer"?(t.addLog(13,"授权失败","只有 Deployer 才能授权"),{success:!1,message:"❌ 授权失败！只有代币持有者 Deployer 才能授权。请切换到 Deployer。",hints:[],nextStep:""}):p===v?(t.addLog(13,"授权失败","不能授权给自己"),{success:!1,message:"❌ 授权失败！不能授权给自己。",hints:[],nextStep:""}):(s.value[p]||(s.value[p]={}),s.value[p][v]=g,a.value.push({icon:"🟡",name:"Approval",details:`持有者: ${f} 被授权者: ${w} 额度: ${g.toLocaleString()} WBT`,timestamp:Date.now(),type:"approval"}),t.addLog(13,"授权",`${f} → ${w}: ${g.toLocaleString()} WBT`,"approve13"),{success:!0,message:`✅ 授权成功！${f} 授权 ${w} 可以使用 ${g.toLocaleString()} WBT`,hints:[],nextStep:"👉 切换到 Bob 执行代转账来学习更多！"})},C=(v,g)=>{var k;const p=((k=s.value[v])==null?void 0:k[g])||0,f=u(v),w=u(g);return t.addLog(13,"查询授权额度",`${w} 可用 ${f}: ${p.toLocaleString()} WBT`),{success:!0,allowance:p,message:`🔍 查询成功！${w} 可使用 ${f} 的额度: ${p.toLocaleString()} WBT 👉 切换到 Bob 执行代转账！`,hints:[],nextStep:"👉 切换到 Bob 执行代转账来学习 transferFrom！"}},_=(v,g,p)=>{var E;const f=o.value,w=u(f),k=u(v),A=u(g);if(i.value!=="bob")return t.addLog(13,"代转账失败","只有 Bob 才能执行代转账"),{success:!1,message:"❌ 代转账失败！只有被授权者 Bob 才能执行代转账。请切换到 Bob。",hints:[],nextStep:""};if(v!==n.deployer)return t.addLog(13,"代转账失败","Bob 只被 Deployer 授权"),{success:!1,message:"❌ 代转账失败！Bob 只被 Deployer 授权，只能从 Deployer 账户代转账。",hints:[],nextStep:""};const y=((E=s.value[v])==null?void 0:E[f])||0;return y<p?(t.addLog(13,"代转账失败",`授权额度不足: ${y.toLocaleString()} WBT`),{success:!1,message:`❌ 授权额度不足！Bob 只能使用 Deployer 的 ${y.toLocaleString()} WBT，尝试转账: ${p.toLocaleString()} WBT`,hints:[],nextStep:""}):r.value[v]<p?(t.addLog(13,"代转账失败",`余额不足: ${k}`),{success:!1,message:`❌ 余额不足！${k} 当前余额: ${r.value[v].toLocaleString()} WBT`,hints:[],nextStep:""}):(r.value[v]-=p,r.value[g]=(r.value[g]||0)+p,s.value[v][f]-=p,a.value.push({icon:"🟢",name:"Transfer",details:`从: ${k} 到: ${A} 数量: ${p.toLocaleString()} WBT (by ${w})`,timestamp:Date.now(),type:"transfer"}),t.addLog(13,"代转账",`${w} 代替 ${k} → ${A}: ${p.toLocaleString()} WBT`,"transferFrom13"),{success:!0,message:`✅ 代转账成功！${w} 代替 ${k} 向 ${A} 转账 ${p.toLocaleString()} WBT 👉 点击查看代码了解 virtual 关键字！`,hints:[],nextStep:"🎉 太棒了！你已掌握 MyToken 全部核心功能！👉 点击查看代码了解 virtual 关键字！"})},D=v=>new Date(v).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),S=I(()=>({gasUsage:t.getDayGasUsage(13),ethCost:t.getDayEthCost(13),operationCount:t.getDayOperationCount(13)}));return{tokenInfo:e,roles:n,balances:r,allowances:s,currentRole:i,currentAddress:o,eventLog:a,realtimeData:S,switchRole:l,getBalance:d,transfer:b,approve:h,getAllowance:C,transferFrom:_,getRoleName:u,formatAddress:c,formatTime:D}}function Of(){const t=pe(),e={alice:"0xAlice8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",bob:"0xBob5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},n=O("alice"),r=O(0),s=O([]),i=O([]),a=I(()=>e[n.value]),o=I(()=>s.value.filter(y=>y.owner===a.value)),u=y=>y===e.alice?"Alice":y===e.bob?"Bob":y.slice(0,6)+"..."+y.slice(-4),c=y=>y?y===e.alice?"Alice (0xAlice...7E6F)":y===e.bob?"Bob (0xBob...E2F)":y.slice(0,10)+"..."+y.slice(-8):"",l=y=>new Date(y).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),d=y=>{switch(y){case"Basic":return"📦";case"Premium":return"🏷️";case"TimeLocked":return"⏰";default:return"📦"}},b=y=>{n.value=y;const E={alice:"✅ 已切换到 Alice！👉 创建存款盒开始学习！",bob:"✅ 已切换到 Bob！👉 让 Alice 转移一个存款盒给你！"};return t.addLog(14,"切换角色",`切换到 ${y}`),{success:!0,message:E[y],hints:[],nextStep:""}},h=()=>{r.value++;const y=r.value,E=a.value,m=u(E),x={id:y,type:"Basic",owner:E,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:null,metadata:null};return s.value.push(x),i.value.push({icon:"📦",name:"BoxCreated",details:`${m} 创建了 Basic 存款盒 #${y}`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建Basic存款盒",`Box #${y} by ${m}`,"createBasicBox"),{success:!0,box:x,message:`✅ 创建 Basic 存款盒 #${y} 成功！🧬 恭喜解锁：合约继承！🎭 恭喜解锁：抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 创建 Premium 或 TimeLocked 来学习 override！`,hints:r.value>=2?["inheritance","abstract_contract","factory_pattern"]:["inheritance","abstract_contract"],nextStep:r.value>=2?"🧬 BasicDepositBox 继承了 BaseDepositBox 的所有功能！🎭 抽象合约定义了通用接口！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 创建 Premium 存款盒来学习 override 关键字！":"📦 BasicDepositBox 继承了 BaseDepositBox 的所有功能！🎭 抽象合约定义了通用接口！👉 创建 Premium 存款盒来学习 override 关键字！"}},C=()=>{r.value++;const y=r.value,E=a.value,m=u(E),x={id:y,type:"Premium",owner:E,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:null,metadata:""};return s.value.push(x),i.value.push({icon:"🏷️",name:"BoxCreated",details:`${m} 创建了 Premium 存款盒 #${y}`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建Premium存款盒",`Box #${y} by ${m}`,"createPremiumBox"),{success:!0,box:x,message:`✅ 创建 Premium 存款盒 #${y} 成功！📝 恭喜解锁：override 关键字和 virtual 函数！🎭 恭喜解锁：抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 设置元数据来学习更多！`,hints:r.value>=2?["override_keyword","virtual_function","abstract_contract","factory_pattern"]:["override_keyword","virtual_function","abstract_contract"],nextStep:r.value>=2?"🏷️ PremiumDepositBox 使用 override 重写了 getBoxType()！🎭 抽象合约定义了通用接口！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 设置元数据来学习 metadata_storage！":"🏷️ PremiumDepositBox 使用 override 重写了 getBoxType()！🎭 抽象合约定义了通用接口！👉 设置元数据来学习 metadata_storage！"}},_=y=>{r.value++;const E=r.value,m=a.value,x=u(m),B=Date.now()+y*1e3,M={id:E,type:"TimeLocked",owner:m,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:B,metadata:null};return s.value.push(M),i.value.push({icon:"⏰",name:"BoxCreated",details:`${x} 创建了 TimeLocked 存款盒 #${E}，锁定 ${y} 秒`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建TimeLocked存款盒",`Box #${E} by ${x}, 锁定 ${y}秒`,"createTimeLockedBox"),{success:!0,box:M,message:`✅ 创建 TimeLocked 存款盒 #${E} 成功！⏰ 恭喜解锁：时间锁定和抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 存入秘密并在锁定期间尝试取出！`,hints:r.value>=2?["abstract_contract","time_lock","factory_pattern"]:["abstract_contract","time_lock"],nextStep:r.value>=2?"⏰ TimeLockedDepositBox 使用修饰器组合保护 getSecret()！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 存入秘密并在锁定期间尝试取出！":"⏰ TimeLockedDepositBox 使用修饰器组合保护 getSecret()！👉 存入秘密并在锁定期间尝试取出！"}},D=(y,E)=>{const m=s.value.find(B=>B.id===y);if(!m)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(m.owner!==a.value)return t.addLog(14,"存入秘密失败",`无权操作 Box #${y}`),{success:!1,message:"❌ 只有所有者才能存入秘密！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试存入秘密！"};m.secret=E;const x=u(m.owner);return i.value.push({icon:"🔐",name:"SecretStored",details:`${x} 向 Box #${y} 存入了秘密`,timestamp:Date.now(),type:"store"}),t.addLog(14,"存入秘密",`Box #${y} by ${x}`,"storeSecret"),{success:!0,message:`✅ 秘密已存入 Box #${y}！👉 尝试取出秘密！`,hints:[],nextStep:"🔐 秘密已安全存储！👉 尝试取出秘密！"}},S=y=>{const E=s.value.find(x=>x.id===y);if(!E)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(E.owner!==a.value)return t.addLog(14,"取出秘密失败",`无权操作 Box #${y}`),{success:!1,message:"❌ 只有所有者才能取出秘密！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试取出秘密！"};if(E.type==="TimeLocked"&&E.unlockTime&&Date.now()<E.unlockTime){const x=Math.ceil((E.unlockTime-Date.now())/1e3);return t.addLog(14,"取出秘密失败",`Box #${y} 仍锁定，剩余 ${x} 秒`),{success:!1,message:`❌ Box #${y} 仍处于锁定状态！剩余 ${x} 秒。🔗 修饰器组合阻止了操作！`,hints:["modifier_combination","super_keyword"],nextStep:"🔗 修饰器组合 timeUnlocked 阻止了操作！👉 等待解锁或创建其他类型的存款盒！"}}const m=u(E.owner);return t.addLog(14,"取出秘密",`Box #${y} by ${m}`),{success:!0,secret:E.secret,message:`✅ 成功取出 Box #${y} 的秘密！`,hints:[],nextStep:E.type==="TimeLocked"?"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。TimeLocked 使用 super.getSecret() 调用父合约实现！👉 设置元数据或转移所有权来学习更多！":"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。👉 转移所有权给 Bob 来学习所有权转移流程！"}},v=(y,E)=>{const m=s.value.find(B=>B.id===y);if(!m)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(m.type!=="Premium")return{success:!1,message:"❌ 只有 Premium 存款盒支持元数据！",hints:[],nextStep:""};if(m.owner!==a.value)return t.addLog(14,"设置元数据失败",`无权操作 Box #${y}`),{success:!1,message:"❌ 只有所有者才能设置元数据！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到 Premium 存款盒的所有者角色来尝试设置元数据！"};m.metadata=E;const x=u(m.owner);return i.value.push({icon:"🏷️",name:"MetadataSet",details:`${x} 设置了 Box #${y} 的元数据`,timestamp:Date.now(),type:"metadata"}),t.addLog(14,"设置元数据",`Box #${y} by ${x}`,"setMetadata"),{success:!0,message:`✅ 元数据已设置到 Box #${y}！🏷️ 恭喜解锁：元数据存储！`,hints:["metadata_storage"],nextStep:"🏷️ Premium 版本通过继承扩展了功能！👉 创建第2个存款盒来体验工厂模式！"}},g=y=>{const E=s.value.find(m=>m.id===y);return!E||E.type!=="Premium"?{success:!1,metadata:""}:(t.addLog(14,"获取元数据",`Box #${y}`),{success:!0,metadata:E.metadata||""})},p=y=>{const E=s.value.find(x=>x.id===y);if(!E||E.type!=="TimeLocked")return{success:!1,unlockTime:0,remaining:0};const m=E.unlockTime?Math.max(0,Math.ceil((E.unlockTime-Date.now())/1e3)):0;return t.addLog(14,"查询解锁时间",`Box #${y}, 剩余 ${m} 秒`),{success:!0,unlockTime:E.unlockTime||0,remaining:m}},f=(y,E)=>{const m=s.value.find(q=>q.id===y);if(!m)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(m.owner!==a.value)return t.addLog(14,"转移所有权失败",`无权操作 Box #${y}`),{success:!1,message:"❌ 只有所有者才能转移所有权！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试转移所有权！"};const x=m.owner,B=u(x),M=u(E);return m.owner=E,i.value.push({icon:"🔑",name:"OwnershipTransferred",details:`Box #${y} 从 ${B} 转移到 ${M}`,timestamp:Date.now(),type:"transfer"}),t.addLog(14,"转移所有权",`Box #${y} 从 ${B} 到 ${M}`,"transferOwnership14"),{success:!0,message:`✅ Box #${y} 所有权已从 ${B} 转移到 ${M}！👉 新所有者需要调用 completeOwnershipTransfer 来更新记录！`,hints:r.value>=2?["factory_pattern"]:[],nextStep:r.value>=2?"🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 切换到新所有者完成所有权转移！":"👉 切换到新所有者调用 completeOwnershipTransfer 来更新记录！"}},w=y=>{const E=s.value.find(x=>x.id===y);if(!E)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(E.owner!==a.value)return t.addLog(14,"完成所有权转移失败",`不是新所有者 Box #${y}`),{success:!1,message:"❌ 你不是该存款盒的新所有者！",hints:[],nextStep:""};const m=u(E.owner);return t.addLog(14,"完成所有权转移",`Box #${y} 新所有者 ${m}`,"completeOwnershipTransfer"),{success:!0,message:`✅ 所有权转移完成！${m} 现在拥有 Box #${y}！`,hints:[],nextStep:"👉 查看完整代码来复习所有知识点！"}},k=y=>p(y).remaining||0,A=I(()=>({gasUsage:t.getDayGasUsage(14),ethCost:t.getDayEthCost(14),operationCount:t.getDayOperationCount(14)}));return{roles:e,currentRole:n,depositBoxes:s,myBoxes:o,eventLog:i,boxCounter:r,currentAddress:a,realtimeData:A,switchRole:b,getRoleName:u,formatAddress:c,formatTime:l,getBoxIcon:d,createBasicBox:h,createPremiumBox:C,createTimeLockedBox:_,storeSecret:D,getSecret:S,setMetadata:v,getMetadata:g,getUnlockTime:p,getRemainingLockTime:k,transferOwnership:f,completeOwnershipTransfer:w}}function Pf(){const t=pe(),e=O(0),n=O([]),r=O({"0xUser1234567890abcdef":0n,"0xAlice1234567890abcdef":0n,"0xBob1234567890abcdef":0n}),s=O("0xUser1234567890abcdef"),i=O([]),a=I(()=>r.value[s.value]||0n),o=I(()=>{const p=Date.now();return n.value.filter(f=>f.endTime>p&&!f.executed)}),u=I(()=>{const p=Date.now();return n.value.filter(f=>f.endTime<=p&&!f.executed)}),c=I(()=>n.value.filter(p=>p.executed)),l=p=>p?p===s.value?"你 (0xUser...cdef)":p==="0xAlice1234567890abcdef"?"Alice (0xAl...cdef)":p==="0xBob1234567890abcdef"?"Bob (0xBob...cdef)":p.slice(0,10)+"..."+p.slice(-8):"",d=p=>new Date(p).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),b=p=>{const f=Date.now(),w=Math.max(0,p-f),k=Math.floor(w/1e3);return k<60?`${k}秒`:`${Math.floor(k/60)}分${k%60}秒`},h=p=>{const f=Date.now();return p.executed?{text:"已执行",class:"executed"}:p.endTime<=f?{text:"已结束",class:"ended"}:{text:"活跃",class:"active"}},C=(p,f)=>{if(!p||p.trim()==="")return{success:!1,error:"❌ 请输入提案名称！",hint:"👝 提案名称不能为空！"};if(!f||f<1)return{success:!1,error:"❌ 请输入有效的持续时间（至少1分钟）！",hint:"⏰ 持续时间必须大于0！"};e.value++;const w=e.value-1,k={id:w,name:p.trim(),voteCount:0,startTime:Date.now(),endTime:Date.now()+f*60*1e3,executed:!1,creator:s.value};n.value.push(k),i.value.unshift({icon:"📝",name:"ProposalCreated",details:`创建提案 "${k.name}" (ID: ${w})`,timestamp:Date.now(),type:"create"}),t.addLog(15,"创建提案",`Proposal #${w}: ${p}`,"createProposal15");const A=["bytes32_string"];e.value>=3&&A.push("storage_optimization");const y=e.value>=3?`✅ 创建提案 #${w} 成功！📝 恭喜解锁：bytes32 vs string！💾 恭喜解锁：存储优化！👉 现在尝试投票来学习位运算！`:`✅ 创建提案 #${w} 成功！📝 恭喜解锁：bytes32 vs string！👉 继续创建提案或尝试投票来学习位运算！`;return{success:!0,proposal:k,message:y,hints:A,nextStep:e.value>=3?"📝 bytes32 比 string 更省 Gas！💾 创建3个提案展示了 uint8 类型的存储优化！👉 现在尝试投票来学习位运算！":"📝 bytes32 比 string 更省 Gas！👉 继续创建提案或尝试投票来学习位运算！"}},_=p=>{const f=n.value[p];if(!f)return{success:!1,error:"❌ 提案不存在！",hint:"👝 请选择有效的提案！"};const w=Date.now();if(f.endTime<=w)return{success:!1,error:"❌ 提案已结束，无法投票！",hint:"⏰ 投票窗口已关闭！"};const k=1n<<BigInt(p),A=a.value;return(A&k)!==0n?{success:!1,error:"❌ 已经对此提案投过票了！",hint:"🎭 掩码检查防止重复投票！",hasVoted:!0}:(r.value[s.value]=A|k,f.voteCount++,i.value.unshift({icon:"🗳️",name:"Voted",details:`${l(s.value)} 对提案 #${p} 投票`,timestamp:Date.now(),type:"vote"}),t.addLog(15,"投票",`Proposal #${p}`,"vote15"),{success:!0,proposal:f,message:"✅ 投票成功！⚡ 恭喜解锁：位运算技巧！🗺️ 恭喜解锁：映射存储！⏰ 恭喜解锁：时间戳验证！👉 尝试重复投票来体验掩码检查！",hints:["bit_operation","mapping_storage","timestamp_block"],nextStep:"⚡ 位运算让1个uint256存储256个投票状态！🗺️ 映射高效存储选民数据！⏰ 使用block.timestamp进行时间验证！👉 尝试对同一提案再次投票来体验掩码检查！"})},D=p=>{const f=n.value[p];if(!f)return{success:!1,error:"❌ 提案不存在！",hint:"👝 请选择有效的提案！"};if(f.executed)return{success:!1,error:"❌ 提案已经执行过了！",hint:"✅ 该提案已执行！"};const w=Date.now();return f.endTime>w?{success:!1,error:"❌ 提案还在进行中，无法执行！",hint:"⏰ 请等待投票结束后再执行！"}:(f.executed=!0,i.value.unshift({icon:"✅",name:"ProposalExecuted",details:`执行提案 "${f.name}" (ID: ${p}, 得票: ${f.voteCount})`,timestamp:Date.now(),type:"execute"}),t.addLog(15,"执行提案",`Proposal #${p}`,"executeProposal15"),{success:!0,proposal:f,message:`✅ 执行提案 #${p} 成功！📋 恭喜解锁：事件日志！🎉 你已解锁所有知识点！`,hints:["event_logging"],nextStep:"📋 事件日志用于链下索引和前端监听！🎉 恭喜！你已掌握Day 15所有核心概念！"})},S=p=>{const f=1n<<BigInt(p),w=a.value,k=(w&f)!==0n;return{proposalId:p,mask:f.toString(2),voterData:w.toString(2),hasVoted:k,operation:k?"已投票 (AND检查)":"未投票 (OR设置)",gasSaving:"使用位运算，1个uint256可存储256个提案的投票状态，节省约40% Gas！"}},v=()=>({slots:[{slot:0,name:"proposalCount",type:"uint8",value:e.value,description:"提案总数（使用uint8节省存储）"},{slot:1,name:"proposals mapping",type:"mapping",value:`${n.value.length} 个提案`,description:"提案映射（每个提案使用紧凑数据类型）"},{slot:"X",name:"voterRegistry mapping",type:"mapping(uint256)",value:`${Object.keys(r.value).length} 个选民`,description:"选民投票位图（1个uint256存储256个投票状态）"},{slot:"Y",name:"proposalVoterCount",type:"mapping(uint32)",value:"按提案统计",description:"提案投票数（uint32足够大）"}]}),g=I(()=>({gasUsage:t.getDayGasUsage(15),ethCost:t.getDayEthCost(15),operationCount:t.getDayOperationCount(15)}));return{proposals:n,eventLog:i,currentAddress:s,proposalCounter:e,currentVoterData:a,activeProposals:o,endedProposals:u,executedProposals:c,createProposal:C,vote:_,executeProposal:D,getBitOperationDemo:S,getStorageVisualization:v,formatAddress:l,formatTime:d,formatRemainingTime:b,getProposalStatus:h,realtimeData:g}}const Lf="6.16.0";function Bf(t,e,n){const r=e.split("|").map(i=>i.trim());for(let i=0;i<r.length;i++)switch(e){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof t===e)return}const s=new Error(`invalid value for type ${e}`);throw s.code="INVALID_ARGUMENT",s.argument=`value.${n}`,s.value=t,s}function Te(t,e,n){for(let r in e){let s=e[r];const i=n?n[r]:null;i&&Bf(s,i,r),Object.defineProperty(t,r,{enumerable:!0,value:s,writable:!1})}}function ur(t,e){if(t==null)return"null";if(e==null&&(e=new Set),typeof t=="object"){if(e.has(t))return"[Circular]";e.add(t)}if(Array.isArray(t))return"[ "+t.map(n=>ur(n,e)).join(", ")+" ]";if(t instanceof Uint8Array){const n="0123456789abcdef";let r="0x";for(let s=0;s<t.length;s++)r+=n[t[s]>>4],r+=n[t[s]&15];return r}if(typeof t=="object"&&typeof t.toJSON=="function")return ur(t.toJSON(),e);switch(typeof t){case"boolean":case"number":case"symbol":return t.toString();case"bigint":return BigInt(t).toString();case"string":return JSON.stringify(t);case"object":{const n=Object.keys(t);return n.sort(),"{ "+n.map(r=>`${ur(r,e)}: ${ur(t[r],e)}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function Ro(t,e){return t&&t.code===e}function Cc(t,e,n){let r=t;{const i=[];if(n){if("message"in n||"code"in n||"name"in n)throw new Error(`value will overwrite populated values: ${ur(n)}`);for(const a in n){if(a==="shortMessage")continue;const o=n[a];i.push(a+"="+ur(o))}}i.push(`code=${e}`),i.push(`version=${Lf}`),i.length&&(t+=" ("+i.join(", ")+")")}let s;switch(e){case"INVALID_ARGUMENT":s=new TypeError(t);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":s=new RangeError(t);break;default:s=new Error(t)}return Te(s,{code:e}),n&&Object.assign(s,n),s.shortMessage==null&&Te(s,{shortMessage:r}),s}function Oe(t,e,n,r){if(!t)throw Cc(e,n,r)}function X(t,e,n,r){Oe(t,e,"INVALID_ARGUMENT",{argument:n,value:r})}function Tc(t,e,n){n==null&&(n=""),n&&(n=": "+n),Oe(t>=e,"missing argument"+n,"MISSING_ARGUMENT",{count:t,expectedCount:e}),Oe(t<=e,"too many arguments"+n,"UNEXPECTED_ARGUMENT",{count:t,expectedCount:e})}["NFD","NFC","NFKD","NFKC"].reduce((t,e)=>{try{if("test".normalize(e)!=="test")throw new Error("bad");if(e==="NFD"&&"é".normalize("NFD")!=="é")throw new Error("broken");t.push(e)}catch{}return t},[]);function li(t,e,n){if(n==null&&(n=""),t!==e){let r=n,s="new";n&&(r+=".",s+=" "+n),Oe(!1,`private constructor; use ${r}from* methods`,"UNSUPPORTED_OPERATION",{operation:s})}}function Ec(t,e,n){if(t instanceof Uint8Array)return n?new Uint8Array(t):t;if(typeof t=="string"&&t.length%2===0&&t.match(/^0x[0-9a-f]*$/i)){const r=new Uint8Array((t.length-2)/2);let s=2;for(let i=0;i<r.length;i++)r[i]=parseInt(t.substring(s,s+2),16),s+=2;return r}X(!1,"invalid BytesLike value",e||"value",t)}function Ge(t,e){return Ec(t,e,!1)}function Xe(t,e){return Ec(t,e,!0)}function Hn(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||typeof e=="number"&&t.length!==2+2*e||e===!0&&t.length%2!==0)}const Oo="0123456789abcdef";function he(t){const e=Ge(t);let n="0x";for(let r=0;r<e.length;r++){const s=e[r];n+=Oo[(s&240)>>4]+Oo[s&15]}return n}function pn(t){return"0x"+t.map(e=>he(e).substring(2)).join("")}function jr(t){return Hn(t,!0)?(t.length-2)/2:Ge(t).length}function ir(t,e,n){const r=Ge(t);return n!=null&&n>r.length&&Oe(!1,"cannot slice beyond data bounds","BUFFER_OVERRUN",{buffer:r,length:r.length,offset:n}),he(r.slice(e??0,n??r.length))}function Sc(t,e,n){const r=Ge(t);Oe(e>=r.length,"padding exceeds data length","BUFFER_OVERRUN",{buffer:new Uint8Array(r),length:e,offset:e+1});const s=new Uint8Array(e);return s.fill(0),n?s.set(r,e-r.length):s.set(r,0),he(s)}function Ic(t,e){return Sc(t,e,!0)}function Ff(t,e){return Sc(t,e,!1)}const ls=BigInt(0),At=BigInt(1),cr=9007199254740991;function Nf(t,e){const n=di(t,"value"),r=BigInt(Et(e,"width"));if(Oe(n>>r===ls,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:t}),n>>r-At){const s=(At<<r)-At;return-((~n&s)+At)}return n}function $f(t,e){let n=zt(t,"value");const r=BigInt(Et(e,"width")),s=At<<r-At;if(n<ls){n=-n,Oe(n<=s,"too low","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:t});const i=(At<<r)-At;return(~n&i)+At}else Oe(n<s,"too high","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:t});return n}function vs(t,e){const n=di(t,"value"),r=BigInt(Et(e,"bits"));return n&(At<<r)-At}function zt(t,e){switch(typeof t){case"bigint":return t;case"number":return X(Number.isInteger(t),"underflow",e||"value",t),X(t>=-cr&&t<=cr,"overflow",e||"value",t),BigInt(t);case"string":try{if(t==="")throw new Error("empty string");return t[0]==="-"&&t[1]!=="-"?-BigInt(t.substring(1)):BigInt(t)}catch(n){X(!1,`invalid BigNumberish string: ${n.message}`,e||"value",t)}}X(!1,"invalid BigNumberish value",e||"value",t)}function di(t,e){const n=zt(t,e);return Oe(n>=ls,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:t}),n}const Po="0123456789abcdef";function Dc(t){if(t instanceof Uint8Array){let e="0x0";for(const n of t)e+=Po[n>>4],e+=Po[n&15];return BigInt(e)}return zt(t)}function Et(t,e){switch(typeof t){case"bigint":return X(t>=-cr&&t<=cr,"overflow",e||"value",t),Number(t);case"number":return X(Number.isInteger(t),"underflow",e||"value",t),X(t>=-cr&&t<=cr,"overflow",e||"value",t),t;case"string":try{if(t==="")throw new Error("empty string");return Et(BigInt(t),e)}catch(n){X(!1,`invalid numeric string: ${n.message}`,e||"value",t)}}X(!1,"invalid numeric value",e||"value",t)}function qf(t){return Et(Dc(t))}function Hs(t,e){const n=di(t,"value");let r=n.toString(16);if(e==null)r.length%2&&(r="0"+r);else{const s=Et(e,"width");if(s===0&&n===ls)return"0x";for(Oe(s*2>=r.length,`value exceeds width (${s} bytes)`,"NUMERIC_FAULT",{operation:"toBeHex",fault:"overflow",value:t});r.length<s*2;)r="0"+r}return"0x"+r}function Rc(t,e){const n=di(t,"value");if(n===ls)return new Uint8Array(0);let r=n.toString(16);r.length%2&&(r="0"+r);const s=new Uint8Array(r.length/2);for(let i=0;i<s.length;i++){const a=i*2;s[i]=parseInt(r.substring(a,a+2),16)}return s}function Mf(t,e,n,r,s){X(!1,`invalid codepoint at offset ${e}; ${t}`,"bytes",n)}function Oc(t,e,n,r,s){if(t==="BAD_PREFIX"||t==="UNEXPECTED_CONTINUE"){let i=0;for(let a=e+1;a<n.length&&n[a]>>6===2;a++)i++;return i}return t==="OVERRUN"?n.length-e-1:0}function Uf(t,e,n,r,s){return t==="OVERLONG"?(X(typeof s=="number","invalid bad code point for replacement","badCodepoint",s),r.push(s),0):(r.push(65533),Oc(t,e,n))}const Vf=Object.freeze({error:Mf,ignore:Oc,replace:Uf});function Hf(t,e){e==null&&(e=Vf.error);const n=Ge(t,"bytes"),r=[];let s=0;for(;s<n.length;){const i=n[s++];if(!(i>>7)){r.push(i);continue}let a=null,o=null;if((i&224)===192)a=1,o=127;else if((i&240)===224)a=2,o=2047;else if((i&248)===240)a=3,o=65535;else{(i&192)===128?s+=e("UNEXPECTED_CONTINUE",s-1,n,r):s+=e("BAD_PREFIX",s-1,n,r);continue}if(s-1+a>=n.length){s+=e("OVERRUN",s-1,n,r);continue}let u=i&(1<<8-a-1)-1;for(let c=0;c<a;c++){let l=n[s];if((l&192)!=128){s+=e("MISSING_CONTINUE",s,n,r),u=null;break}u=u<<6|l&63,s++}if(u!==null){if(u>1114111){s+=e("OUT_OF_RANGE",s-1-a,n,r,u);continue}if(u>=55296&&u<=57343){s+=e("UTF16_SURROGATE",s-1-a,n,r,u);continue}if(u<=o){s+=e("OVERLONG",s-1-a,n,r,u);continue}r.push(u)}}return r}function pi(t,e){X(typeof t=="string","invalid string value","str",t);let n=[];for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);if(s<128)n.push(s);else if(s<2048)n.push(s>>6|192),n.push(s&63|128);else if((s&64512)==55296){r++;const i=t.charCodeAt(r);X(r<t.length&&(i&64512)===56320,"invalid surrogate pair","str",t);const a=65536+((s&1023)<<10)+(i&1023);n.push(a>>18|240),n.push(a>>12&63|128),n.push(a>>6&63|128),n.push(a&63|128)}else n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128)}return new Uint8Array(n)}function Wf(t){return t.map(e=>e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10&1023)+55296,(e&1023)+56320))).join("")}function zf(t,e){return Wf(Hf(t,e))}const Ze=32,Yi=new Uint8Array(Ze),Gf=["then"],bs={},Pc=new WeakMap;function qn(t){return Pc.get(t)}function Lo(t,e){Pc.set(t,e)}function Lr(t,e){const n=new Error(`deferred error during ABI decoding triggered accessing ${t}`);throw n.error=e,n}function Xi(t,e,n){return t.indexOf(null)>=0?e.map((r,s)=>r instanceof Ar?Xi(qn(r),r,n):r):t.reduce((r,s,i)=>{let a=e.getValue(s);return s in r||(n&&a instanceof Ar&&(a=Xi(qn(a),a,n)),r[s]=a),r},{})}var mr;const lr=class lr extends Array{constructor(...n){const r=n[0];let s=n[1],i=(n[2]||[]).slice(),a=!0;r!==bs&&(s=n,i=[],a=!1);super(s.length);_e(this,mr);s.forEach((c,l)=>{this[l]=c});const o=i.reduce((c,l)=>(typeof l=="string"&&c.set(l,(c.get(l)||0)+1),c),new Map);if(Lo(this,Object.freeze(s.map((c,l)=>{const d=i[l];return d!=null&&o.get(d)===1?d:null}))),ue(this,mr,[]),H(this,mr)==null&&H(this,mr),!a)return;Object.freeze(this);const u=new Proxy(this,{get:(c,l,d)=>{if(typeof l=="string"){if(l.match(/^[0-9]+$/)){const h=Et(l,"%index");if(h<0||h>=this.length)throw new RangeError("out of result range");const C=c[h];return C instanceof Error&&Lr(`index ${h}`,C),C}if(Gf.indexOf(l)>=0)return Reflect.get(c,l,d);const b=c[l];if(b instanceof Function)return function(...h){return b.apply(this===d?c:this,h)};if(!(l in c))return c.getValue.apply(this===d?c:this,[l])}return Reflect.get(c,l,d)}});return Lo(u,qn(this)),u}toArray(n){const r=[];return this.forEach((s,i)=>{s instanceof Error&&Lr(`index ${i}`,s),n&&s instanceof lr&&(s=s.toArray(n)),r.push(s)}),r}toObject(n){const r=qn(this);return r.reduce((s,i,a)=>(Oe(i!=null,`value at index ${a} unnamed`,"UNSUPPORTED_OPERATION",{operation:"toObject()"}),Xi(r,this,n)),{})}slice(n,r){n==null&&(n=0),n<0&&(n+=this.length,n<0&&(n=0)),r==null&&(r=this.length),r<0&&(r+=this.length,r<0&&(r=0)),r>this.length&&(r=this.length);const s=qn(this),i=[],a=[];for(let o=n;o<r;o++)i.push(this[o]),a.push(s[o]);return new lr(bs,i,a)}filter(n,r){const s=qn(this),i=[],a=[];for(let o=0;o<this.length;o++){const u=this[o];u instanceof Error&&Lr(`index ${o}`,u),n.call(r,u,o,this)&&(i.push(u),a.push(s[o]))}return new lr(bs,i,a)}map(n,r){const s=[];for(let i=0;i<this.length;i++){const a=this[i];a instanceof Error&&Lr(`index ${i}`,a),s.push(n.call(r,a,i,this))}return s}getValue(n){const r=qn(this).indexOf(n);if(r===-1)return;const s=this[r];return s instanceof Error&&Lr(`property ${JSON.stringify(n)}`,s.error),s}static fromItems(n,r){return new lr(bs,n,r)}};mr=new WeakMap;let Ar=lr;function Bo(t){let e=Rc(t);return Oe(e.length<=Ze,"value out-of-bounds","BUFFER_OVERRUN",{buffer:e,length:Ze,offset:e.length}),e.length!==Ze&&(e=Xe(pn([Yi.slice(e.length%Ze),e]))),e}class bn{constructor(e,n,r,s){te(this,"name");te(this,"type");te(this,"localName");te(this,"dynamic");Te(this,{name:e,type:n,localName:r,dynamic:s},{name:"string",type:"string",localName:"string",dynamic:"boolean"})}_throwError(e,n){X(!1,e,this.localName,n)}}var rn,zn,gr,Ds;class Zi{constructor(){_e(this,gr);_e(this,rn);_e(this,zn);ue(this,rn,[]),ue(this,zn,0)}get data(){return pn(H(this,rn))}get length(){return H(this,zn)}appendWriter(e){return Ee(this,gr,Ds).call(this,Xe(e.data))}writeBytes(e){let n=Xe(e);const r=n.length%Ze;return r&&(n=Xe(pn([n,Yi.slice(r)]))),Ee(this,gr,Ds).call(this,n)}writeValue(e){return Ee(this,gr,Ds).call(this,Bo(e))}writeUpdatableValue(){const e=H(this,rn).length;return H(this,rn).push(Yi),ue(this,zn,H(this,zn)+Ze),n=>{H(this,rn)[e]=Bo(n)}}}rn=new WeakMap,zn=new WeakMap,gr=new WeakSet,Ds=function(e){return H(this,rn).push(e),ue(this,zn,H(this,zn)+e.length),e.length};var tt,ct,Gn,Kn,En,nr,Qi,Lc;const $a=class $a{constructor(e,n,r){_e(this,nr);te(this,"allowLoose");_e(this,tt);_e(this,ct);_e(this,Gn);_e(this,Kn);_e(this,En);Te(this,{allowLoose:!!n}),ue(this,tt,Xe(e)),ue(this,Gn,0),ue(this,Kn,null),ue(this,En,r??1024),ue(this,ct,0)}get data(){return he(H(this,tt))}get dataLength(){return H(this,tt).length}get consumed(){return H(this,ct)}get bytes(){return new Uint8Array(H(this,tt))}subReader(e){const n=new $a(H(this,tt).slice(H(this,ct)+e),this.allowLoose,H(this,En));return ue(n,Kn,this),n}readBytes(e,n){let r=Ee(this,nr,Lc).call(this,0,e,!!n);return Ee(this,nr,Qi).call(this,e),ue(this,ct,H(this,ct)+r.length),r.slice(0,e)}readValue(){return Dc(this.readBytes(Ze))}readIndex(){return qf(this.readBytes(Ze))}};tt=new WeakMap,ct=new WeakMap,Gn=new WeakMap,Kn=new WeakMap,En=new WeakMap,nr=new WeakSet,Qi=function(e){var n;if(H(this,Kn))return Ee(n=H(this,Kn),nr,Qi).call(n,e);ue(this,Gn,H(this,Gn)+e),Oe(H(this,En)<1||H(this,Gn)<=H(this,En)*this.dataLength,`compressed ABI data exceeds inflation ratio of ${H(this,En)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`,"BUFFER_OVERRUN",{buffer:Xe(H(this,tt)),offset:H(this,ct),length:e,info:{bytesRead:H(this,Gn),dataLength:this.dataLength}})},Lc=function(e,n,r){let s=Math.ceil(n/Ze)*Ze;return H(this,ct)+s>H(this,tt).length&&(this.allowLoose&&r&&H(this,ct)+n<=H(this,tt).length?s=n:Oe(!1,"data out-of-bounds","BUFFER_OVERRUN",{buffer:Xe(H(this,tt)),length:H(this,tt).length,offset:H(this,ct)+s})),H(this,tt).slice(H(this,ct),H(this,ct)+s)};let Ji=$a;function Ws(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Da(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function Kf(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ws(t.outputLen),Ws(t.blockLen)}function Cr(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Bc(t,e){Da(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Ii=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Fc=t=>t instanceof Uint8Array,jf=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),Di=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Ft=(t,e)=>t<<32-e|t>>>e,Yf=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Yf)throw new Error("Non little-endian hardware is not supported");function Xf(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function fi(t){if(typeof t=="string"&&(t=Xf(t)),!Fc(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}function Zf(...t){const e=new Uint8Array(t.reduce((r,s)=>r+s.length,0));let n=0;return t.forEach(r=>{if(!Fc(r))throw new Error("Uint8Array expected");e.set(r,n),n+=r.length}),e}class Ra{clone(){return this._cloneInto()}}function Nc(t){const e=r=>t().update(fi(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function Jf(t=32){if(Ii&&typeof Ii.getRandomValues=="function")return Ii.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}class $c extends Ra{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,Kf(e);const r=fi(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const s=this.blockLen,i=new Uint8Array(s);i.set(r.length>s?e.create().update(r).digest():r);for(let a=0;a<i.length;a++)i[a]^=54;this.iHash.update(i),this.oHash=e.create();for(let a=0;a<i.length;a++)i[a]^=106;this.oHash.update(i),i.fill(0)}update(e){return Cr(this),this.iHash.update(e),this}digestInto(e){Cr(this),Da(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:s,destroyed:i,blockLen:a,outputLen:o}=this;return e=e,e.finished=s,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const qc=(t,e,n)=>new $c(t,e).update(n).digest();qc.create=(t,e)=>new $c(t,e);function Qf(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const s=BigInt(32),i=BigInt(4294967295),a=Number(n>>s&i),o=Number(n&i),u=r?4:0,c=r?0:4;t.setUint32(e+u,a,r),t.setUint32(e+c,o,r)}class em extends Ra{constructor(e,n,r,s){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=s,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Di(this.buffer)}update(e){Cr(this);const{view:n,buffer:r,blockLen:s}=this;e=fi(e);const i=e.length;for(let a=0;a<i;){const o=Math.min(s-this.pos,i-a);if(o===s){const u=Di(e);for(;s<=i-a;a+=s)this.process(u,a);continue}r.set(e.subarray(a,a+o),this.pos),this.pos+=o,a+=o,this.pos===s&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Cr(this),Bc(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:s,isLE:i}=this;let{pos:a}=this;n[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>s-a&&(this.process(r,0),a=0);for(let d=a;d<s;d++)n[d]=0;Qf(r,s-8,BigInt(this.length*8),i),this.process(r,0);const o=Di(e),u=this.outputLen;if(u%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=u/4,l=this.get();if(c>l.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<c;d++)o.setUint32(4*d,l[d],i)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:s,finished:i,destroyed:a,pos:o}=this;return e.length=s,e.pos=o,e.finished=i,e.destroyed=a,s%n&&e.buffer.set(r),e}}const tm=(t,e,n)=>t&e^~t&n,nm=(t,e,n)=>t&e^t&n^e&n,rm=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),wn=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),_n=new Uint32Array(64);class sm extends em{constructor(){super(64,32,8,!1),this.A=wn[0]|0,this.B=wn[1]|0,this.C=wn[2]|0,this.D=wn[3]|0,this.E=wn[4]|0,this.F=wn[5]|0,this.G=wn[6]|0,this.H=wn[7]|0}get(){const{A:e,B:n,C:r,D:s,E:i,F:a,G:o,H:u}=this;return[e,n,r,s,i,a,o,u]}set(e,n,r,s,i,a,o,u){this.A=e|0,this.B=n|0,this.C=r|0,this.D=s|0,this.E=i|0,this.F=a|0,this.G=o|0,this.H=u|0}process(e,n){for(let d=0;d<16;d++,n+=4)_n[d]=e.getUint32(n,!1);for(let d=16;d<64;d++){const b=_n[d-15],h=_n[d-2],C=Ft(b,7)^Ft(b,18)^b>>>3,_=Ft(h,17)^Ft(h,19)^h>>>10;_n[d]=_+_n[d-7]+C+_n[d-16]|0}let{A:r,B:s,C:i,D:a,E:o,F:u,G:c,H:l}=this;for(let d=0;d<64;d++){const b=Ft(o,6)^Ft(o,11)^Ft(o,25),h=l+b+tm(o,u,c)+rm[d]+_n[d]|0,_=(Ft(r,2)^Ft(r,13)^Ft(r,22))+nm(r,s,i)|0;l=c,c=u,u=o,o=a+h|0,a=i,i=s,s=r,r=h+_|0}r=r+this.A|0,s=s+this.B|0,i=i+this.C|0,a=a+this.D|0,o=o+this.E|0,u=u+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(r,s,i,a,o,u,c,l)}roundClean(){_n.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const im=Nc(()=>new sm),ws=BigInt(2**32-1),Fo=BigInt(32);function am(t,e=!1){return e?{h:Number(t&ws),l:Number(t>>Fo&ws)}:{h:Number(t>>Fo&ws)|0,l:Number(t&ws)|0}}function om(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:i,l:a}=am(t[s],e);[n[s],r[s]]=[i,a]}return[n,r]}const um=(t,e,n)=>t<<n|e>>>32-n,cm=(t,e,n)=>e<<n|t>>>32-n,lm=(t,e,n)=>e<<n-32|t>>>64-n,dm=(t,e,n)=>t<<n-32|e>>>64-n,[Mc,Uc,Vc]=[[],[],[]],pm=BigInt(0),Br=BigInt(1),fm=BigInt(2),mm=BigInt(7),gm=BigInt(256),hm=BigInt(113);for(let t=0,e=Br,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],Mc.push(2*(5*r+n)),Uc.push((t+1)*(t+2)/2%64);let s=pm;for(let i=0;i<7;i++)e=(e<<Br^(e>>mm)*hm)%gm,e&fm&&(s^=Br<<(Br<<BigInt(i))-Br);Vc.push(s)}const[ym,vm]=om(Vc,!0),No=(t,e,n)=>n>32?lm(t,e,n):um(t,e,n),$o=(t,e,n)=>n>32?dm(t,e,n):cm(t,e,n);function bm(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let a=0;a<10;a++)n[a]=t[a]^t[a+10]^t[a+20]^t[a+30]^t[a+40];for(let a=0;a<10;a+=2){const o=(a+8)%10,u=(a+2)%10,c=n[u],l=n[u+1],d=No(c,l,1)^n[o],b=$o(c,l,1)^n[o+1];for(let h=0;h<50;h+=10)t[a+h]^=d,t[a+h+1]^=b}let s=t[2],i=t[3];for(let a=0;a<24;a++){const o=Uc[a],u=No(s,i,o),c=$o(s,i,o),l=Mc[a];s=t[l],i=t[l+1],t[l]=u,t[l+1]=c}for(let a=0;a<50;a+=10){for(let o=0;o<10;o++)n[o]=t[a+o];for(let o=0;o<10;o++)t[a+o]^=~n[(o+2)%10]&n[(o+4)%10]}t[0]^=ym[r],t[1]^=vm[r]}n.fill(0)}class Oa extends Ra{constructor(e,n,r,s=!1,i=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=s,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Ws(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=jf(this.state)}keccak(){bm(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Cr(this);const{blockLen:n,state:r}=this;e=fi(e);const s=e.length;for(let i=0;i<s;){const a=Math.min(n-this.pos,s-i);for(let o=0;o<a;o++)r[this.pos++]^=e[i++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:s}=this;e[r]^=n,n&128&&r===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){Cr(this,!1),Da(e),this.finish();const n=this.state,{blockLen:r}=this;for(let s=0,i=e.length;s<i;){this.posOut>=r&&this.keccak();const a=Math.min(r-this.posOut,i-s);e.set(n.subarray(this.posOut,this.posOut+a),s),this.posOut+=a,s+=a}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Ws(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Bc(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:s,rounds:i,enableXOF:a}=this;return e||(e=new Oa(n,r,s,a,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=s,e.enableXOF=a,e.destroyed=this.destroyed,e}}const wm=(t,e,n)=>Nc(()=>new Oa(e,t,n)),_m=wm(1,136,256/8);let Hc=!1;const Wc=function(t){return _m(t)};let zc=Wc;function Xt(t){const e=Ge(t,"data");return he(zc(e))}Xt._=Wc;Xt.lock=function(){Hc=!0};Xt.register=function(t){if(Hc)throw new TypeError("keccak256 is locked");zc=t};Object.freeze(Xt);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);const km=BigInt(1),xm=BigInt(2),mi=t=>t instanceof Uint8Array,Am=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Tr(t){if(!mi(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=Am[t[n]];return e}function Pa(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return BigInt(t===""?"0":`0x${t}`)}function ts(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let r=0;r<n.length;r++){const s=r*2,i=t.slice(s,s+2),a=Number.parseInt(i,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");n[r]=a}return n}function Zn(t){return Pa(Tr(t))}function La(t){if(!mi(t))throw new Error("Uint8Array expected");return Pa(Tr(Uint8Array.from(t).reverse()))}function Er(t,e){return ts(t.toString(16).padStart(e*2,"0"))}function Ba(t,e){return Er(t,e).reverse()}function kt(t,e,n){let r;if(typeof e=="string")try{r=ts(e)}catch(i){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${i}`)}else if(mi(e))r=Uint8Array.from(e);else throw new Error(`${t} must be hex string or Uint8Array`);const s=r.length;if(typeof n=="number"&&s!==n)throw new Error(`${t} expected ${n} bytes, got ${s}`);return r}function ns(...t){const e=new Uint8Array(t.reduce((r,s)=>r+s.length,0));let n=0;return t.forEach(r=>{if(!mi(r))throw new Error("Uint8Array expected");e.set(r,n),n+=r.length}),e}const Fa=t=>(xm<<BigInt(t-1))-km,Ri=t=>new Uint8Array(t),qo=t=>Uint8Array.from(t);function Gc(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let r=Ri(t),s=Ri(t),i=0;const a=()=>{r.fill(1),s.fill(0),i=0},o=(...d)=>n(s,r,...d),u=(d=Ri())=>{s=o(qo([0]),d),r=o(),d.length!==0&&(s=o(qo([1]),d),r=o())},c=()=>{if(i++>=1e3)throw new Error("drbg: tried 1000 values");let d=0;const b=[];for(;d<e;){r=o();const h=r.slice();b.push(h),d+=r.length}return ns(...b)};return(d,b)=>{a(),u(d);let h;for(;!(h=b(c()));)u();return a(),h}}const Cm={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||t instanceof Uint8Array,isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function ds(t,e,n={}){const r=(s,i,a)=>{const o=Cm[i];if(typeof o!="function")throw new Error(`Invalid validator "${i}", expected function`);const u=t[s];if(!(a&&u===void 0)&&!o(u,t))throw new Error(`Invalid param ${String(s)}=${u} (${typeof u}), expected ${i}`)};for(const[s,i]of Object.entries(e))r(s,i,!1);for(const[s,i]of Object.entries(n))r(s,i,!0);return t}const Tm=Object.freeze(Object.defineProperty({__proto__:null,bitMask:Fa,bytesToHex:Tr,bytesToNumberBE:Zn,bytesToNumberLE:La,concatBytes:ns,createHmacDrbg:Gc,ensureBytes:kt,hexToBytes:ts,hexToNumber:Pa,numberToBytesBE:Er,numberToBytesLE:Ba,validateObject:ds},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Fe=BigInt(0),Le=BigInt(1),Mn=BigInt(2),Em=BigInt(3),ea=BigInt(4),Mo=BigInt(5),Uo=BigInt(8);BigInt(9);BigInt(16);function nt(t,e){const n=t%e;return n>=Fe?n:e+n}function Sm(t,e,n){if(n<=Fe||e<Fe)throw new Error("Expected power/modulo > 0");if(n===Le)return Fe;let r=Le;for(;e>Fe;)e&Le&&(r=r*t%n),t=t*t%n,e>>=Le;return r}function ht(t,e,n){let r=t;for(;e-- >Fe;)r*=r,r%=n;return r}function ta(t,e){if(t===Fe||e<=Fe)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=nt(t,e),r=e,s=Fe,i=Le;for(;n!==Fe;){const o=r/n,u=r%n,c=s-i*o;r=n,n=u,s=i,i=c}if(r!==Le)throw new Error("invert: does not exist");return nt(s,e)}function Im(t){const e=(t-Le)/Mn;let n,r,s;for(n=t-Le,r=0;n%Mn===Fe;n/=Mn,r++);for(s=Mn;s<t&&Sm(s,e,t)!==t-Le;s++);if(r===1){const a=(t+Le)/ea;return function(u,c){const l=u.pow(c,a);if(!u.eql(u.sqr(l),c))throw new Error("Cannot find square root");return l}}const i=(n+Le)/Mn;return function(o,u){if(o.pow(u,e)===o.neg(o.ONE))throw new Error("Cannot find square root");let c=r,l=o.pow(o.mul(o.ONE,s),n),d=o.pow(u,i),b=o.pow(u,n);for(;!o.eql(b,o.ONE);){if(o.eql(b,o.ZERO))return o.ZERO;let h=1;for(let _=o.sqr(b);h<c&&!o.eql(_,o.ONE);h++)_=o.sqr(_);const C=o.pow(l,Le<<BigInt(c-h-1));l=o.sqr(C),d=o.mul(d,C),b=o.mul(b,l),c=h}return d}}function Dm(t){if(t%ea===Em){const e=(t+Le)/ea;return function(r,s){const i=r.pow(s,e);if(!r.eql(r.sqr(i),s))throw new Error("Cannot find square root");return i}}if(t%Uo===Mo){const e=(t-Mo)/Uo;return function(r,s){const i=r.mul(s,Mn),a=r.pow(i,e),o=r.mul(s,a),u=r.mul(r.mul(o,Mn),a),c=r.mul(o,r.sub(u,r.ONE));if(!r.eql(r.sqr(c),s))throw new Error("Cannot find square root");return c}}return Im(t)}const Rm=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Om(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=Rm.reduce((r,s)=>(r[s]="function",r),e);return ds(t,n)}function Pm(t,e,n){if(n<Fe)throw new Error("Expected power > 0");if(n===Fe)return t.ONE;if(n===Le)return e;let r=t.ONE,s=e;for(;n>Fe;)n&Le&&(r=t.mul(r,s)),s=t.sqr(s),n>>=Le;return r}function Lm(t,e){const n=new Array(e.length),r=e.reduce((i,a,o)=>t.is0(a)?i:(n[o]=i,t.mul(i,a)),t.ONE),s=t.inv(r);return e.reduceRight((i,a,o)=>t.is0(a)?i:(n[o]=t.mul(i,n[o]),t.mul(i,a)),s),n}function Kc(t,e){const n=e!==void 0?e:t.toString(2).length,r=Math.ceil(n/8);return{nBitLength:n,nByteLength:r}}function Bm(t,e,n=!1,r={}){if(t<=Fe)throw new Error(`Expected Field ORDER > 0, got ${t}`);const{nBitLength:s,nByteLength:i}=Kc(t,e);if(i>2048)throw new Error("Field lengths over 2048 bytes are not supported");const a=Dm(t),o=Object.freeze({ORDER:t,BITS:s,BYTES:i,MASK:Fa(s),ZERO:Fe,ONE:Le,create:u=>nt(u,t),isValid:u=>{if(typeof u!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof u}`);return Fe<=u&&u<t},is0:u=>u===Fe,isOdd:u=>(u&Le)===Le,neg:u=>nt(-u,t),eql:(u,c)=>u===c,sqr:u=>nt(u*u,t),add:(u,c)=>nt(u+c,t),sub:(u,c)=>nt(u-c,t),mul:(u,c)=>nt(u*c,t),pow:(u,c)=>Pm(o,u,c),div:(u,c)=>nt(u*ta(c,t),t),sqrN:u=>u*u,addN:(u,c)=>u+c,subN:(u,c)=>u-c,mulN:(u,c)=>u*c,inv:u=>ta(u,t),sqrt:r.sqrt||(u=>a(o,u)),invertBatch:u=>Lm(o,u),cmov:(u,c,l)=>l?c:u,toBytes:u=>n?Ba(u,i):Er(u,i),fromBytes:u=>{if(u.length!==i)throw new Error(`Fp.fromBytes: expected ${i}, got ${u.length}`);return n?La(u):Zn(u)}});return Object.freeze(o)}function jc(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function Yc(t){const e=jc(t);return e+Math.ceil(e/2)}function Fm(t,e,n=!1){const r=t.length,s=jc(e),i=Yc(e);if(r<16||r<i||r>1024)throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);const a=n?Zn(t):La(t),o=nt(a,e-Le)+Le;return n?Ba(o,s):Er(o,s)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Nm=BigInt(0),Oi=BigInt(1);function $m(t,e){const n=(s,i)=>{const a=i.negate();return s?a:i},r=s=>{const i=Math.ceil(e/s)+1,a=2**(s-1);return{windows:i,windowSize:a}};return{constTimeNegate:n,unsafeLadder(s,i){let a=t.ZERO,o=s;for(;i>Nm;)i&Oi&&(a=a.add(o)),o=o.double(),i>>=Oi;return a},precomputeWindow(s,i){const{windows:a,windowSize:o}=r(i),u=[];let c=s,l=c;for(let d=0;d<a;d++){l=c,u.push(l);for(let b=1;b<o;b++)l=l.add(c),u.push(l);c=l.double()}return u},wNAF(s,i,a){const{windows:o,windowSize:u}=r(s);let c=t.ZERO,l=t.BASE;const d=BigInt(2**s-1),b=2**s,h=BigInt(s);for(let C=0;C<o;C++){const _=C*u;let D=Number(a&d);a>>=h,D>u&&(D-=b,a+=Oi);const S=_,v=_+Math.abs(D)-1,g=C%2!==0,p=D<0;D===0?l=l.add(n(g,i[S])):c=c.add(n(p,i[v]))}return{p:c,f:l}},wNAFCached(s,i,a,o){const u=s._WINDOW_SIZE||1;let c=i.get(s);return c||(c=this.precomputeWindow(s,u),u!==1&&i.set(s,o(c))),this.wNAF(u,c,a)}}}function Xc(t){return Om(t.Fp),ds(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Kc(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function qm(t){const e=Xc(t);ds(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:r,a:s}=e;if(n){if(!r.eql(s,r.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:Mm,hexToBytes:Um}=Tm,Wn={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(t){const{Err:e}=Wn;if(t.length<2||t[0]!==2)throw new e("Invalid signature integer tag");const n=t[1],r=t.subarray(2,n+2);if(!n||r.length!==n)throw new e("Invalid signature integer: wrong length");if(r[0]&128)throw new e("Invalid signature integer: negative");if(r[0]===0&&!(r[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:Mm(r),l:t.subarray(n+2)}},toSig(t){const{Err:e}=Wn,n=typeof t=="string"?Um(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let r=n.length;if(r<2||n[0]!=48)throw new e("Invalid signature tag");if(n[1]!==r-2)throw new e("Invalid signature: incorrect length");const{d:s,l:i}=Wn._parseInt(n.subarray(2)),{d:a,l:o}=Wn._parseInt(i);if(o.length)throw new e("Invalid signature: left bytes after parsing");return{r:s,s:a}},hexFromSig(t){const e=c=>Number.parseInt(c[0],16)&8?"00"+c:c,n=c=>{const l=c.toString(16);return l.length&1?`0${l}`:l},r=e(n(t.s)),s=e(n(t.r)),i=r.length/2,a=s.length/2,o=n(i),u=n(a);return`30${n(a+i+4)}02${u}${s}02${o}${r}`}},un=BigInt(0),bt=BigInt(1);BigInt(2);const Vo=BigInt(3);BigInt(4);function Vm(t){const e=qm(t),{Fp:n}=e,r=e.toBytes||((C,_,D)=>{const S=_.toAffine();return ns(Uint8Array.from([4]),n.toBytes(S.x),n.toBytes(S.y))}),s=e.fromBytes||(C=>{const _=C.subarray(1),D=n.fromBytes(_.subarray(0,n.BYTES)),S=n.fromBytes(_.subarray(n.BYTES,2*n.BYTES));return{x:D,y:S}});function i(C){const{a:_,b:D}=e,S=n.sqr(C),v=n.mul(S,C);return n.add(n.add(v,n.mul(C,_)),D)}if(!n.eql(n.sqr(e.Gy),i(e.Gx)))throw new Error("bad generator point: equation left != right");function a(C){return typeof C=="bigint"&&un<C&&C<e.n}function o(C){if(!a(C))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function u(C){const{allowedPrivateKeyLengths:_,nByteLength:D,wrapPrivateKey:S,n:v}=e;if(_&&typeof C!="bigint"){if(C instanceof Uint8Array&&(C=Tr(C)),typeof C!="string"||!_.includes(C.length))throw new Error("Invalid key");C=C.padStart(D*2,"0")}let g;try{g=typeof C=="bigint"?C:Zn(kt("private key",C,D))}catch{throw new Error(`private key must be ${D} bytes, hex or bigint, not ${typeof C}`)}return S&&(g=nt(g,v)),o(g),g}const c=new Map;function l(C){if(!(C instanceof d))throw new Error("ProjectivePoint expected")}class d{constructor(_,D,S){if(this.px=_,this.py=D,this.pz=S,_==null||!n.isValid(_))throw new Error("x required");if(D==null||!n.isValid(D))throw new Error("y required");if(S==null||!n.isValid(S))throw new Error("z required")}static fromAffine(_){const{x:D,y:S}=_||{};if(!_||!n.isValid(D)||!n.isValid(S))throw new Error("invalid affine point");if(_ instanceof d)throw new Error("projective point not allowed");const v=g=>n.eql(g,n.ZERO);return v(D)&&v(S)?d.ZERO:new d(D,S,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(_){const D=n.invertBatch(_.map(S=>S.pz));return _.map((S,v)=>S.toAffine(D[v])).map(d.fromAffine)}static fromHex(_){const D=d.fromAffine(s(kt("pointHex",_)));return D.assertValidity(),D}static fromPrivateKey(_){return d.BASE.multiply(u(_))}_setWindowSize(_){this._WINDOW_SIZE=_,c.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint&&!n.is0(this.py))return;throw new Error("bad point: ZERO")}const{x:_,y:D}=this.toAffine();if(!n.isValid(_)||!n.isValid(D))throw new Error("bad point: x or y not FE");const S=n.sqr(D),v=i(_);if(!n.eql(S,v))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:_}=this.toAffine();if(n.isOdd)return!n.isOdd(_);throw new Error("Field doesn't support isOdd")}equals(_){l(_);const{px:D,py:S,pz:v}=this,{px:g,py:p,pz:f}=_,w=n.eql(n.mul(D,f),n.mul(g,v)),k=n.eql(n.mul(S,f),n.mul(p,v));return w&&k}negate(){return new d(this.px,n.neg(this.py),this.pz)}double(){const{a:_,b:D}=e,S=n.mul(D,Vo),{px:v,py:g,pz:p}=this;let f=n.ZERO,w=n.ZERO,k=n.ZERO,A=n.mul(v,v),y=n.mul(g,g),E=n.mul(p,p),m=n.mul(v,g);return m=n.add(m,m),k=n.mul(v,p),k=n.add(k,k),f=n.mul(_,k),w=n.mul(S,E),w=n.add(f,w),f=n.sub(y,w),w=n.add(y,w),w=n.mul(f,w),f=n.mul(m,f),k=n.mul(S,k),E=n.mul(_,E),m=n.sub(A,E),m=n.mul(_,m),m=n.add(m,k),k=n.add(A,A),A=n.add(k,A),A=n.add(A,E),A=n.mul(A,m),w=n.add(w,A),E=n.mul(g,p),E=n.add(E,E),A=n.mul(E,m),f=n.sub(f,A),k=n.mul(E,y),k=n.add(k,k),k=n.add(k,k),new d(f,w,k)}add(_){l(_);const{px:D,py:S,pz:v}=this,{px:g,py:p,pz:f}=_;let w=n.ZERO,k=n.ZERO,A=n.ZERO;const y=e.a,E=n.mul(e.b,Vo);let m=n.mul(D,g),x=n.mul(S,p),B=n.mul(v,f),M=n.add(D,S),q=n.add(g,p);M=n.mul(M,q),q=n.add(m,x),M=n.sub(M,q),q=n.add(D,v);let F=n.add(g,f);return q=n.mul(q,F),F=n.add(m,B),q=n.sub(q,F),F=n.add(S,v),w=n.add(p,f),F=n.mul(F,w),w=n.add(x,B),F=n.sub(F,w),A=n.mul(y,q),w=n.mul(E,B),A=n.add(w,A),w=n.sub(x,A),A=n.add(x,A),k=n.mul(w,A),x=n.add(m,m),x=n.add(x,m),B=n.mul(y,B),q=n.mul(E,q),x=n.add(x,B),B=n.sub(m,B),B=n.mul(y,B),q=n.add(q,B),m=n.mul(x,q),k=n.add(k,m),m=n.mul(F,q),w=n.mul(M,w),w=n.sub(w,m),m=n.mul(M,x),A=n.mul(F,A),A=n.add(A,m),new d(w,k,A)}subtract(_){return this.add(_.negate())}is0(){return this.equals(d.ZERO)}wNAF(_){return h.wNAFCached(this,c,_,D=>{const S=n.invertBatch(D.map(v=>v.pz));return D.map((v,g)=>v.toAffine(S[g])).map(d.fromAffine)})}multiplyUnsafe(_){const D=d.ZERO;if(_===un)return D;if(o(_),_===bt)return this;const{endo:S}=e;if(!S)return h.unsafeLadder(this,_);let{k1neg:v,k1:g,k2neg:p,k2:f}=S.splitScalar(_),w=D,k=D,A=this;for(;g>un||f>un;)g&bt&&(w=w.add(A)),f&bt&&(k=k.add(A)),A=A.double(),g>>=bt,f>>=bt;return v&&(w=w.negate()),p&&(k=k.negate()),k=new d(n.mul(k.px,S.beta),k.py,k.pz),w.add(k)}multiply(_){o(_);let D=_,S,v;const{endo:g}=e;if(g){const{k1neg:p,k1:f,k2neg:w,k2:k}=g.splitScalar(D);let{p:A,f:y}=this.wNAF(f),{p:E,f:m}=this.wNAF(k);A=h.constTimeNegate(p,A),E=h.constTimeNegate(w,E),E=new d(n.mul(E.px,g.beta),E.py,E.pz),S=A.add(E),v=y.add(m)}else{const{p,f}=this.wNAF(D);S=p,v=f}return d.normalizeZ([S,v])[0]}multiplyAndAddUnsafe(_,D,S){const v=d.BASE,g=(f,w)=>w===un||w===bt||!f.equals(v)?f.multiplyUnsafe(w):f.multiply(w),p=g(this,D).add(g(_,S));return p.is0()?void 0:p}toAffine(_){const{px:D,py:S,pz:v}=this,g=this.is0();_==null&&(_=g?n.ONE:n.inv(v));const p=n.mul(D,_),f=n.mul(S,_),w=n.mul(v,_);if(g)return{x:n.ZERO,y:n.ZERO};if(!n.eql(w,n.ONE))throw new Error("invZ was invalid");return{x:p,y:f}}isTorsionFree(){const{h:_,isTorsionFree:D}=e;if(_===bt)return!0;if(D)return D(d,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:_,clearCofactor:D}=e;return _===bt?this:D?D(d,this):this.multiplyUnsafe(e.h)}toRawBytes(_=!0){return this.assertValidity(),r(d,this,_)}toHex(_=!0){return Tr(this.toRawBytes(_))}}d.BASE=new d(e.Gx,e.Gy,n.ONE),d.ZERO=new d(n.ZERO,n.ONE,n.ZERO);const b=e.nBitLength,h=$m(d,e.endo?Math.ceil(b/2):b);return{CURVE:e,ProjectivePoint:d,normPrivateKeyToScalar:u,weierstrassEquation:i,isWithinCurveOrder:a}}function Hm(t){const e=Xc(t);return ds(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function Wm(t){const e=Hm(t),{Fp:n,n:r}=e,s=n.BYTES+1,i=2*n.BYTES+1;function a(q){return un<q&&q<n.ORDER}function o(q){return nt(q,r)}function u(q){return ta(q,r)}const{ProjectivePoint:c,normPrivateKeyToScalar:l,weierstrassEquation:d,isWithinCurveOrder:b}=Vm({...e,toBytes(q,F,P){const L=F.toAffine(),N=n.toBytes(L.x),U=ns;return P?U(Uint8Array.from([F.hasEvenY()?2:3]),N):U(Uint8Array.from([4]),N,n.toBytes(L.y))},fromBytes(q){const F=q.length,P=q[0],L=q.subarray(1);if(F===s&&(P===2||P===3)){const N=Zn(L);if(!a(N))throw new Error("Point is not on curve");const U=d(N);let K=n.sqrt(U);const ne=(K&bt)===bt;return(P&1)===1!==ne&&(K=n.neg(K)),{x:N,y:K}}else if(F===i&&P===4){const N=n.fromBytes(L.subarray(0,n.BYTES)),U=n.fromBytes(L.subarray(n.BYTES,2*n.BYTES));return{x:N,y:U}}else throw new Error(`Point of length ${F} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`)}}),h=q=>Tr(Er(q,e.nByteLength));function C(q){const F=r>>bt;return q>F}function _(q){return C(q)?o(-q):q}const D=(q,F,P)=>Zn(q.slice(F,P));class S{constructor(F,P,L){this.r=F,this.s=P,this.recovery=L,this.assertValidity()}static fromCompact(F){const P=e.nByteLength;return F=kt("compactSignature",F,P*2),new S(D(F,0,P),D(F,P,2*P))}static fromDER(F){const{r:P,s:L}=Wn.toSig(kt("DER",F));return new S(P,L)}assertValidity(){if(!b(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!b(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(F){return new S(this.r,this.s,F)}recoverPublicKey(F){const{r:P,s:L,recovery:N}=this,U=k(kt("msgHash",F));if(N==null||![0,1,2,3].includes(N))throw new Error("recovery id invalid");const K=N===2||N===3?P+e.n:P;if(K>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const ne=N&1?"03":"02",ye=c.fromHex(ne+h(K)),be=u(K),Ke=o(-U*be),_t=o(L*be),ot=c.BASE.multiplyAndAddUnsafe(ye,Ke,_t);if(!ot)throw new Error("point at infinify");return ot.assertValidity(),ot}hasHighS(){return C(this.s)}normalizeS(){return this.hasHighS()?new S(this.r,o(-this.s),this.recovery):this}toDERRawBytes(){return ts(this.toDERHex())}toDERHex(){return Wn.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return ts(this.toCompactHex())}toCompactHex(){return h(this.r)+h(this.s)}}const v={isValidPrivateKey(q){try{return l(q),!0}catch{return!1}},normPrivateKeyToScalar:l,randomPrivateKey:()=>{const q=Yc(e.n);return Fm(e.randomBytes(q),e.n)},precompute(q=8,F=c.BASE){return F._setWindowSize(q),F.multiply(BigInt(3)),F}};function g(q,F=!0){return c.fromPrivateKey(q).toRawBytes(F)}function p(q){const F=q instanceof Uint8Array,P=typeof q=="string",L=(F||P)&&q.length;return F?L===s||L===i:P?L===2*s||L===2*i:q instanceof c}function f(q,F,P=!0){if(p(q))throw new Error("first arg must be private key");if(!p(F))throw new Error("second arg must be public key");return c.fromHex(F).multiply(l(q)).toRawBytes(P)}const w=e.bits2int||function(q){const F=Zn(q),P=q.length*8-e.nBitLength;return P>0?F>>BigInt(P):F},k=e.bits2int_modN||function(q){return o(w(q))},A=Fa(e.nBitLength);function y(q){if(typeof q!="bigint")throw new Error("bigint expected");if(!(un<=q&&q<A))throw new Error(`bigint expected < 2^${e.nBitLength}`);return Er(q,e.nByteLength)}function E(q,F,P=m){if(["recovered","canonical"].some(Rt=>Rt in P))throw new Error("sign() legacy options not supported");const{hash:L,randomBytes:N}=e;let{lowS:U,prehash:K,extraEntropy:ne}=P;U==null&&(U=!0),q=kt("msgHash",q),K&&(q=kt("prehashed msgHash",L(q)));const ye=k(q),be=l(F),Ke=[y(be),y(ye)];if(ne!=null){const Rt=ne===!0?N(n.BYTES):ne;Ke.push(kt("extraEntropy",Rt))}const _t=ns(...Ke),ot=ye;function Ln(Rt){const gt=w(Rt);if(!b(gt))return;const yi=u(gt),T=c.BASE.multiply(gt).toAffine(),R=o(T.x);if(R===un)return;const $=o(yi*o(ot+R*be));if($===un)return;let W=(T.x===R?0:2)|Number(T.y&bt),V=$;return U&&C($)&&(V=_($),W^=1),new S(R,V,W)}return{seed:_t,k2sig:Ln}}const m={lowS:e.lowS,prehash:!1},x={lowS:e.lowS,prehash:!1};function B(q,F,P=m){const{seed:L,k2sig:N}=E(q,F,P),U=e;return Gc(U.hash.outputLen,U.nByteLength,U.hmac)(L,N)}c.BASE._setWindowSize(8);function M(q,F,P,L=x){var T;const N=q;if(F=kt("msgHash",F),P=kt("publicKey",P),"strict"in L)throw new Error("options.strict was renamed to lowS");const{lowS:U,prehash:K}=L;let ne,ye;try{if(typeof N=="string"||N instanceof Uint8Array)try{ne=S.fromDER(N)}catch(R){if(!(R instanceof Wn.Err))throw R;ne=S.fromCompact(N)}else if(typeof N=="object"&&typeof N.r=="bigint"&&typeof N.s=="bigint"){const{r:R,s:$}=N;ne=new S(R,$)}else throw new Error("PARSE");ye=c.fromHex(P)}catch(R){if(R.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(U&&ne.hasHighS())return!1;K&&(F=e.hash(F));const{r:be,s:Ke}=ne,_t=k(F),ot=u(Ke),Ln=o(_t*ot),Rt=o(be*ot),gt=(T=c.BASE.multiplyAndAddUnsafe(ye,Ln,Rt))==null?void 0:T.toAffine();return gt?o(gt.x)===be:!1}return{CURVE:e,getPublicKey:g,getSharedSecret:f,sign:B,verify:M,ProjectivePoint:c,Signature:S,utils:v}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function zm(t){return{hash:t,hmac:(e,...n)=>qc(t,e,Zf(...n)),randomBytes:Jf}}function Gm(t,e){const n=r=>Wm({...t,...zm(r)});return Object.freeze({...n(e),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Zc=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Ho=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Km=BigInt(1),na=BigInt(2),Wo=(t,e)=>(t+e/na)/e;function jm(t){const e=Zc,n=BigInt(3),r=BigInt(6),s=BigInt(11),i=BigInt(22),a=BigInt(23),o=BigInt(44),u=BigInt(88),c=t*t*t%e,l=c*c*t%e,d=ht(l,n,e)*l%e,b=ht(d,n,e)*l%e,h=ht(b,na,e)*c%e,C=ht(h,s,e)*h%e,_=ht(C,i,e)*C%e,D=ht(_,o,e)*_%e,S=ht(D,u,e)*D%e,v=ht(S,o,e)*_%e,g=ht(v,n,e)*l%e,p=ht(g,a,e)*C%e,f=ht(p,r,e)*c%e,w=ht(f,na,e);if(!ra.eql(ra.sqr(w),t))throw new Error("Cannot find square root");return w}const ra=Bm(Zc,void 0,void 0,{sqrt:jm}),xn=Gm({a:BigInt(0),b:BigInt(7),Fp:ra,n:Ho,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=Ho,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Km*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),s=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=n,a=BigInt("0x100000000000000000000000000000000"),o=Wo(i*t,e),u=Wo(-r*t,e);let c=nt(t-o*n-u*s,e),l=nt(-o*r-u*i,e);const d=c>a,b=l>a;if(d&&(c=e-c),b&&(l=e-l),c>a||l>a)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:d,k1:c,k2neg:b,k2:l}}}},im);BigInt(0);xn.ProjectivePoint;const zo="0x0000000000000000000000000000000000000000000000000000000000000000",Go=BigInt(0),Ko=BigInt(1),sa=BigInt(2),jo=BigInt(27),Yo=BigInt(28),_s=BigInt(35),Jc=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Ym=Jc/sa,Xm=Symbol.for("nodejs.util.inspect.custom"),Nn={};function Pi(t){return Ic(Rc(t),32)}var hr,$t,yr,Sn;const yt=class yt{constructor(e,n,r,s){_e(this,hr);_e(this,$t);_e(this,yr);_e(this,Sn);li(e,Nn,"Signature"),ue(this,hr,n),ue(this,$t,r),ue(this,yr,s),ue(this,Sn,null)}get r(){return H(this,hr)}set r(e){X(jr(e)===32,"invalid r","value",e),ue(this,hr,he(e))}get s(){return X(parseInt(H(this,$t).substring(0,3))<8,"non-canonical s; use ._s","s",H(this,$t)),H(this,$t)}set s(e){X(jr(e)===32,"invalid s","value",e),ue(this,$t,he(e))}get _s(){return H(this,$t)}isValid(){return BigInt(H(this,$t))<=Ym}get v(){return H(this,yr)}set v(e){const n=Et(e,"value");X(n===27||n===28,"invalid v","v",e),ue(this,yr,n)}get networkV(){return H(this,Sn)}get legacyChainId(){const e=this.networkV;return e==null?null:yt.getChainId(e)}get yParity(){return this.v===27?0:1}get yParityAndS(){const e=Ge(this.s);return this.yParity&&(e[0]|=128),he(e)}get compactSerialized(){return pn([this.r,this.yParityAndS])}get serialized(){return pn([this.r,this.s,this.yParity?"0x1c":"0x1b"])}getCanonical(){if(this.isValid())return this;const e=Jc-BigInt(this._s),n=55-this.v,r=new yt(Nn,this.r,Pi(e),n);return this.networkV&&ue(r,Sn,this.networkV),r}clone(){const e=new yt(Nn,this.r,this._s,this.v);return this.networkV&&ue(e,Sn,this.networkV),e}toJSON(){const e=this.networkV;return{_type:"signature",networkV:e!=null?e.toString():null,r:this.r,s:this._s,v:this.v}}[Xm](){return this.toString()}toString(){return this.isValid()?`Signature { r: ${this.r}, s: ${this._s}, v: ${this.v} }`:`Signature { r: ${this.r}, s: ${this._s}, v: ${this.v}, valid: false }`}static getChainId(e){const n=zt(e,"v");return n==jo||n==Yo?Go:(X(n>=_s,"invalid EIP-155 v","v",e),(n-_s)/sa)}static getChainIdV(e,n){return zt(e)*sa+BigInt(35+n-27)}static getNormalizedV(e){const n=zt(e);return n===Go||n===jo?27:n===Ko||n===Yo?28:(X(n>=_s,"invalid v","v",e),n&Ko?27:28)}static from(e){function n(c,l){X(c,l,"signature",e)}if(e==null)return new yt(Nn,zo,zo,27);if(typeof e=="string"){const c=Ge(e,"signature");if(c.length===64){const l=he(c.slice(0,32)),d=c.slice(32,64),b=d[0]&128?28:27;return d[0]&=127,new yt(Nn,l,he(d),b)}if(c.length===65){const l=he(c.slice(0,32)),d=he(c.slice(32,64)),b=yt.getNormalizedV(c[64]);return new yt(Nn,l,d,b)}n(!1,"invalid raw signature length")}if(e instanceof yt)return e.clone();const r=e.r;n(r!=null,"missing r");const s=Pi(r),i=function(c,l){if(c!=null)return Pi(c);if(l!=null){n(Hn(l,32),"invalid yParityAndS");const d=Ge(l);return d[0]&=127,he(d)}n(!1,"missing s")}(e.s,e.yParityAndS),{networkV:a,v:o}=function(c,l,d){if(c!=null){const b=zt(c);return{networkV:b>=_s?b:void 0,v:yt.getNormalizedV(b)}}if(l!=null)return n(Hn(l,32),"invalid yParityAndS"),{v:Ge(l)[0]&128?28:27};if(d!=null){switch(Et(d,"sig.yParity")){case 0:return{v:27};case 1:return{v:28}}n(!1,"invalid yParity")}n(!1,"missing v")}(e.v,e.yParityAndS,e.yParity),u=new yt(Nn,s,i,o);return a&&ue(u,Sn,a),n(e.yParity==null||Et(e.yParity,"sig.yParity")===u.yParity,"yParity mismatch"),n(e.yParityAndS==null||e.yParityAndS===u.yParityAndS,"yParityAndS mismatch"),u}};hr=new WeakMap,$t=new WeakMap,yr=new WeakMap,Sn=new WeakMap;let zs=yt;var sn;const Un=class Un{constructor(e){_e(this,sn);X(jr(e)===32,"invalid private key","privateKey","[REDACTED]"),ue(this,sn,he(e))}get privateKey(){return H(this,sn)}get publicKey(){return Un.computePublicKey(H(this,sn))}get compressedPublicKey(){return Un.computePublicKey(H(this,sn),!0)}sign(e){X(jr(e)===32,"invalid digest length","digest",e);const n=xn.sign(Xe(e),Xe(H(this,sn)),{lowS:!0});return zs.from({r:Hs(n.r,32),s:Hs(n.s,32),v:n.recovery?28:27})}computeSharedSecret(e){const n=Un.computePublicKey(e);return he(xn.getSharedSecret(Xe(H(this,sn)),Ge(n),!1))}static computePublicKey(e,n){let r=Ge(e,"key");if(r.length===32){const i=xn.getPublicKey(r,!!n);return he(i)}if(r.length===64){const i=new Uint8Array(65);i[0]=4,i.set(r,1),r=i}const s=xn.ProjectivePoint.fromHex(r);return he(s.toRawBytes(n))}static recoverPublicKey(e,n){X(jr(e)===32,"invalid digest length","digest",e);const r=zs.from(n);let s=xn.Signature.fromCompact(Xe(pn([r.r,r.s])));s=s.addRecoveryBit(r.yParity);const i=s.recoverPublicKey(Xe(e));return X(i!=null,"invalid signature for digest","signature",n),"0x"+i.toHex(!1)}static addPoints(e,n,r){const s=xn.ProjectivePoint.fromHex(Un.computePublicKey(e).substring(2)),i=xn.ProjectivePoint.fromHex(Un.computePublicKey(n).substring(2));return"0x"+s.add(i).toHex(!!r)}};sn=new WeakMap;let ia=Un;const Zm=BigInt(0),Jm=BigInt(36);function Xo(t){t=t.toLowerCase();const e=t.substring(2).split(""),n=new Uint8Array(40);for(let s=0;s<40;s++)n[s]=e[s].charCodeAt(0);const r=Ge(Xt(n));for(let s=0;s<40;s+=2)r[s>>1]>>4>=8&&(e[s]=e[s].toUpperCase()),(r[s>>1]&15)>=8&&(e[s+1]=e[s+1].toUpperCase());return"0x"+e.join("")}const Na={};for(let t=0;t<10;t++)Na[String(t)]=String(t);for(let t=0;t<26;t++)Na[String.fromCharCode(65+t)]=String(10+t);const Zo=15;function Qm(t){t=t.toUpperCase(),t=t.substring(4)+t.substring(0,2)+"00";let e=t.split("").map(r=>Na[r]).join("");for(;e.length>=Zo;){let r=e.substring(0,Zo);e=parseInt(r,10)%97+e.substring(r.length)}let n=String(98-parseInt(e,10)%97);for(;n.length<2;)n="0"+n;return n}const eg=function(){const t={};for(let e=0;e<36;e++){const n="0123456789abcdefghijklmnopqrstuvwxyz"[e];t[n]=BigInt(e)}return t}();function tg(t){t=t.toLowerCase();let e=Zm;for(let n=0;n<t.length;n++)e=e*Jm+eg[t[n]];return e}function Sr(t){if(X(typeof t=="string","invalid address","address",t),t.match(/^(0x)?[0-9a-fA-F]{40}$/)){t.startsWith("0x")||(t="0x"+t);const e=Xo(t);return X(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/)||e===t,"bad address checksum","address",t),e}if(t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){X(t.substring(2,4)===Qm(t),"bad icap checksum","address",t);let e=tg(t.substring(4)).toString(16);for(;e.length<40;)e="0"+e;return Xo("0x"+e)}X(!1,"invalid address","address",t)}const Qt={};function Q(t,e){let n=!1;return e<0&&(n=!0,e*=-1),new it(Qt,`${n?"":"u"}int${e}`,t,{signed:n,width:e})}function le(t,e){return new it(Qt,`bytes${e||""}`,t,{size:e})}const Jo=Symbol.for("_ethers_typed");var jn;const en=class en{constructor(e,n,r,s){te(this,"type");te(this,"value");_e(this,jn);te(this,"_typedSymbol");s==null&&(s=null),li(Qt,e,"Typed"),Te(this,{_typedSymbol:Jo,type:n,value:r}),ue(this,jn,s),this.format()}format(){if(this.type==="array")throw new Error("");if(this.type==="dynamicArray")throw new Error("");return this.type==="tuple"?`tuple(${this.value.map(e=>e.format()).join(",")})`:this.type}defaultValue(){return 0}minValue(){return 0}maxValue(){return 0}isBigInt(){return!!this.type.match(/^u?int[0-9]+$/)}isData(){return this.type.startsWith("bytes")}isString(){return this.type==="string"}get tupleName(){if(this.type!=="tuple")throw TypeError("not a tuple");return H(this,jn)}get arrayLength(){if(this.type!=="array")throw TypeError("not an array");return H(this,jn)===!0?-1:H(this,jn)===!1?this.value.length:null}static from(e,n){return new en(Qt,e,n)}static uint8(e){return Q(e,8)}static uint16(e){return Q(e,16)}static uint24(e){return Q(e,24)}static uint32(e){return Q(e,32)}static uint40(e){return Q(e,40)}static uint48(e){return Q(e,48)}static uint56(e){return Q(e,56)}static uint64(e){return Q(e,64)}static uint72(e){return Q(e,72)}static uint80(e){return Q(e,80)}static uint88(e){return Q(e,88)}static uint96(e){return Q(e,96)}static uint104(e){return Q(e,104)}static uint112(e){return Q(e,112)}static uint120(e){return Q(e,120)}static uint128(e){return Q(e,128)}static uint136(e){return Q(e,136)}static uint144(e){return Q(e,144)}static uint152(e){return Q(e,152)}static uint160(e){return Q(e,160)}static uint168(e){return Q(e,168)}static uint176(e){return Q(e,176)}static uint184(e){return Q(e,184)}static uint192(e){return Q(e,192)}static uint200(e){return Q(e,200)}static uint208(e){return Q(e,208)}static uint216(e){return Q(e,216)}static uint224(e){return Q(e,224)}static uint232(e){return Q(e,232)}static uint240(e){return Q(e,240)}static uint248(e){return Q(e,248)}static uint256(e){return Q(e,256)}static uint(e){return Q(e,256)}static int8(e){return Q(e,-8)}static int16(e){return Q(e,-16)}static int24(e){return Q(e,-24)}static int32(e){return Q(e,-32)}static int40(e){return Q(e,-40)}static int48(e){return Q(e,-48)}static int56(e){return Q(e,-56)}static int64(e){return Q(e,-64)}static int72(e){return Q(e,-72)}static int80(e){return Q(e,-80)}static int88(e){return Q(e,-88)}static int96(e){return Q(e,-96)}static int104(e){return Q(e,-104)}static int112(e){return Q(e,-112)}static int120(e){return Q(e,-120)}static int128(e){return Q(e,-128)}static int136(e){return Q(e,-136)}static int144(e){return Q(e,-144)}static int152(e){return Q(e,-152)}static int160(e){return Q(e,-160)}static int168(e){return Q(e,-168)}static int176(e){return Q(e,-176)}static int184(e){return Q(e,-184)}static int192(e){return Q(e,-192)}static int200(e){return Q(e,-200)}static int208(e){return Q(e,-208)}static int216(e){return Q(e,-216)}static int224(e){return Q(e,-224)}static int232(e){return Q(e,-232)}static int240(e){return Q(e,-240)}static int248(e){return Q(e,-248)}static int256(e){return Q(e,-256)}static int(e){return Q(e,-256)}static bytes1(e){return le(e,1)}static bytes2(e){return le(e,2)}static bytes3(e){return le(e,3)}static bytes4(e){return le(e,4)}static bytes5(e){return le(e,5)}static bytes6(e){return le(e,6)}static bytes7(e){return le(e,7)}static bytes8(e){return le(e,8)}static bytes9(e){return le(e,9)}static bytes10(e){return le(e,10)}static bytes11(e){return le(e,11)}static bytes12(e){return le(e,12)}static bytes13(e){return le(e,13)}static bytes14(e){return le(e,14)}static bytes15(e){return le(e,15)}static bytes16(e){return le(e,16)}static bytes17(e){return le(e,17)}static bytes18(e){return le(e,18)}static bytes19(e){return le(e,19)}static bytes20(e){return le(e,20)}static bytes21(e){return le(e,21)}static bytes22(e){return le(e,22)}static bytes23(e){return le(e,23)}static bytes24(e){return le(e,24)}static bytes25(e){return le(e,25)}static bytes26(e){return le(e,26)}static bytes27(e){return le(e,27)}static bytes28(e){return le(e,28)}static bytes29(e){return le(e,29)}static bytes30(e){return le(e,30)}static bytes31(e){return le(e,31)}static bytes32(e){return le(e,32)}static address(e){return new en(Qt,"address",e)}static bool(e){return new en(Qt,"bool",!!e)}static bytes(e){return new en(Qt,"bytes",e)}static string(e){return new en(Qt,"string",e)}static array(e,n){throw new Error("not implemented yet")}static tuple(e,n){throw new Error("not implemented yet")}static overrides(e){return new en(Qt,"overrides",Object.assign({},e))}static isTyped(e){return e&&typeof e=="object"&&"_typedSymbol"in e&&e._typedSymbol===Jo}static dereference(e,n){if(en.isTyped(e)){if(e.type!==n)throw new Error(`invalid type: expecetd ${n}, got ${e.type}`);return e.value}return e}};jn=new WeakMap;let it=en;class ng extends bn{constructor(e){super("address","address",e,!1)}defaultValue(){return"0x0000000000000000000000000000000000000000"}encode(e,n){let r=it.dereference(n,"string");try{r=Sr(r)}catch(s){return this._throwError(s.message,n)}return e.writeValue(r)}decode(e){return Sr(Hs(e.readValue(),20))}}class rg extends bn{constructor(n){super(n.name,n.type,"_",n.dynamic);te(this,"coder");this.coder=n}defaultValue(){return this.coder.defaultValue()}encode(n,r){return this.coder.encode(n,r)}decode(n){return this.coder.decode(n)}}function Qc(t,e,n){let r=[];if(Array.isArray(n))r=n;else if(n&&typeof n=="object"){let u={};r=e.map(c=>{const l=c.localName;return Oe(l,"cannot encode object for signature with missing names","INVALID_ARGUMENT",{argument:"values",info:{coder:c},value:n}),Oe(!u[l],"cannot encode object for signature with duplicate names","INVALID_ARGUMENT",{argument:"values",info:{coder:c},value:n}),u[l]=!0,n[l]})}else X(!1,"invalid tuple value","tuple",n);X(e.length===r.length,"types/value length mismatch","tuple",n);let s=new Zi,i=new Zi,a=[];e.forEach((u,c)=>{let l=r[c];if(u.dynamic){let d=i.length;u.encode(i,l);let b=s.writeUpdatableValue();a.push(h=>{b(h+d)})}else u.encode(s,l)}),a.forEach(u=>{u(s.length)});let o=t.appendWriter(s);return o+=t.appendWriter(i),o}function el(t,e){let n=[],r=[],s=t.subReader(0);return e.forEach(i=>{let a=null;if(i.dynamic){let o=t.readIndex(),u=s.subReader(o);try{a=i.decode(u)}catch(c){if(Ro(c,"BUFFER_OVERRUN"))throw c;a=c,a.baseType=i.name,a.name=i.localName,a.type=i.type}}else try{a=i.decode(t)}catch(o){if(Ro(o,"BUFFER_OVERRUN"))throw o;a=o,a.baseType=i.name,a.name=i.localName,a.type=i.type}if(a==null)throw new Error("investigate");n.push(a),r.push(i.localName||null)}),Ar.fromItems(n,r)}class sg extends bn{constructor(n,r,s){const i=n.type+"["+(r>=0?r:"")+"]",a=r===-1||n.dynamic;super("array",i,s,a);te(this,"coder");te(this,"length");Te(this,{coder:n,length:r})}defaultValue(){const n=this.coder.defaultValue(),r=[];for(let s=0;s<this.length;s++)r.push(n);return r}encode(n,r){const s=it.dereference(r,"array");Array.isArray(s)||this._throwError("expected array value",s);let i=this.length;i===-1&&(i=s.length,n.writeValue(s.length)),Tc(s.length,i,"coder array"+(this.localName?" "+this.localName:""));let a=[];for(let o=0;o<s.length;o++)a.push(this.coder);return Qc(n,a,s)}decode(n){let r=this.length;r===-1&&(r=n.readIndex(),Oe(r*Ze<=n.dataLength,"insufficient data length","BUFFER_OVERRUN",{buffer:n.bytes,offset:r*Ze,length:n.dataLength}));let s=[];for(let i=0;i<r;i++)s.push(new rg(this.coder));return el(n,s)}}class ig extends bn{constructor(e){super("bool","bool",e,!1)}defaultValue(){return!1}encode(e,n){const r=it.dereference(n,"bool");return e.writeValue(r?1:0)}decode(e){return!!e.readValue()}}class tl extends bn{constructor(e,n){super(e,e,n,!0)}defaultValue(){return"0x"}encode(e,n){n=Xe(n);let r=e.writeValue(n.length);return r+=e.writeBytes(n),r}decode(e){return e.readBytes(e.readIndex(),!0)}}class ag extends tl{constructor(e){super("bytes",e)}decode(e){return he(super.decode(e))}}class og extends bn{constructor(n,r){let s="bytes"+String(n);super(s,s,r,!1);te(this,"size");Te(this,{size:n},{size:"number"})}defaultValue(){return"0x0000000000000000000000000000000000000000000000000000000000000000".substring(0,2+this.size*2)}encode(n,r){let s=Xe(it.dereference(r,this.type));return s.length!==this.size&&this._throwError("incorrect data length",r),n.writeBytes(s)}decode(n){return he(n.readBytes(this.size))}}const ug=new Uint8Array([]);class cg extends bn{constructor(e){super("null","",e,!1)}defaultValue(){return null}encode(e,n){return n!=null&&this._throwError("not null",n),e.writeBytes(ug)}decode(e){return e.readBytes(0),null}}const lg=BigInt(0),dg=BigInt(1),pg=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");class fg extends bn{constructor(n,r,s){const i=(r?"int":"uint")+n*8;super(i,i,s,!1);te(this,"size");te(this,"signed");Te(this,{size:n,signed:r},{size:"number",signed:"boolean"})}defaultValue(){return 0}encode(n,r){let s=zt(it.dereference(r,this.type)),i=vs(pg,Ze*8);if(this.signed){let a=vs(i,this.size*8-1);(s>a||s<-(a+dg))&&this._throwError("value out-of-bounds",r),s=$f(s,8*Ze)}else(s<lg||s>vs(i,this.size*8))&&this._throwError("value out-of-bounds",r);return n.writeValue(s)}decode(n){let r=vs(n.readValue(),this.size*8);return this.signed&&(r=Nf(r,this.size*8)),r}}class mg extends tl{constructor(e){super("string",e)}defaultValue(){return""}encode(e,n){return super.encode(e,pi(it.dereference(n,"string")))}decode(e){return zf(super.decode(e))}}class ks extends bn{constructor(n,r){let s=!1;const i=[];n.forEach(o=>{o.dynamic&&(s=!0),i.push(o.type)});const a="tuple("+i.join(",")+")";super("tuple",a,r,s);te(this,"coders");Te(this,{coders:Object.freeze(n.slice())})}defaultValue(){const n=[];this.coders.forEach(s=>{n.push(s.defaultValue())});const r=this.coders.reduce((s,i)=>{const a=i.localName;return a&&(s[a]||(s[a]=0),s[a]++),s},{});return this.coders.forEach((s,i)=>{let a=s.localName;!a||r[a]!==1||(a==="length"&&(a="_length"),n[a]==null&&(n[a]=n[i]))}),Object.freeze(n)}encode(n,r){const s=it.dereference(r,"tuple");return Qc(n,this.coders,s)}decode(n){return el(n,this.coders)}}function rs(t){return Xt(pi(t))}function Je(t){const e=new Set;return t.forEach(n=>e.add(n)),Object.freeze(e)}const gg="external public payable override",hg=Je(gg.split(" ")),nl="constant external internal payable private public pure view override",yg=Je(nl.split(" ")),rl="constructor error event fallback function receive struct",sl=Je(rl.split(" ")),il="calldata memory storage payable indexed",vg=Je(il.split(" ")),bg="tuple returns",wg=[rl,il,bg,nl].join(" "),_g=Je(wg.split(" ")),kg={"(":"OPEN_PAREN",")":"CLOSE_PAREN","[":"OPEN_BRACKET","]":"CLOSE_BRACKET",",":"COMMA","@":"AT"},xg=new RegExp("^(\\s*)"),Ag=new RegExp("^([0-9]+)"),Cg=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),al=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),ol=new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");var Ne,xt,is,aa;const Gs=class Gs{constructor(e){_e(this,is);_e(this,Ne);_e(this,xt);ue(this,Ne,0),ue(this,xt,e.slice())}get offset(){return H(this,Ne)}get length(){return H(this,xt).length-H(this,Ne)}clone(){return new Gs(H(this,xt))}reset(){ue(this,Ne,0)}popKeyword(e){const n=this.peek();if(n.type!=="KEYWORD"||!e.has(n.text))throw new Error(`expected keyword ${n.text}`);return this.pop().text}popType(e){if(this.peek().type!==e){const n=this.peek();throw new Error(`expected ${e}; got ${n.type} ${JSON.stringify(n.text)}`)}return this.pop().text}popParen(){const e=this.peek();if(e.type!=="OPEN_PAREN")throw new Error("bad start");const n=Ee(this,is,aa).call(this,H(this,Ne)+1,e.match+1);return ue(this,Ne,e.match+1),n}popParams(){const e=this.peek();if(e.type!=="OPEN_PAREN")throw new Error("bad start");const n=[];for(;H(this,Ne)<e.match-1;){const r=this.peek().linkNext;n.push(Ee(this,is,aa).call(this,H(this,Ne)+1,r)),ue(this,Ne,r)}return ue(this,Ne,e.match+1),n}peek(){if(H(this,Ne)>=H(this,xt).length)throw new Error("out-of-bounds");return H(this,xt)[H(this,Ne)]}peekKeyword(e){const n=this.peekType("KEYWORD");return n!=null&&e.has(n)?n:null}peekType(e){if(this.length===0)return null;const n=this.peek();return n.type===e?n.text:null}pop(){const e=this.peek();return Ha(this,Ne)._++,e}toString(){const e=[];for(let n=H(this,Ne);n<H(this,xt).length;n++){const r=H(this,xt)[n];e.push(`${r.type}:${r.text}`)}return`<TokenString ${e.join(" ")}>`}};Ne=new WeakMap,xt=new WeakMap,is=new WeakSet,aa=function(e=0,n=0){return new Gs(H(this,xt).slice(e,n).map(r=>Object.freeze(Object.assign({},r,{match:r.match-e,linkBack:r.linkBack-e,linkNext:r.linkNext-e}))))};let It=Gs;function Pn(t){const e=[],n=a=>{const o=i<t.length?JSON.stringify(t[i]):"$EOI";throw new Error(`invalid token ${o} at ${i}: ${a}`)};let r=[],s=[],i=0;for(;i<t.length;){let a=t.substring(i),o=a.match(xg);o&&(i+=o[1].length,a=t.substring(i));const u={depth:r.length,linkBack:-1,linkNext:-1,match:-1,type:"",text:"",offset:i,value:-1};e.push(u);let c=kg[a[0]]||"";if(c){if(u.type=c,u.text=a[0],i++,c==="OPEN_PAREN")r.push(e.length-1),s.push(e.length-1);else if(c=="CLOSE_PAREN")r.length===0&&n("no matching open bracket"),u.match=r.pop(),e[u.match].match=e.length-1,u.depth--,u.linkBack=s.pop(),e[u.linkBack].linkNext=e.length-1;else if(c==="COMMA")u.linkBack=s.pop(),e[u.linkBack].linkNext=e.length-1,s.push(e.length-1);else if(c==="OPEN_BRACKET")u.type="BRACKET";else if(c==="CLOSE_BRACKET"){let l=e.pop().text;if(e.length>0&&e[e.length-1].type==="NUMBER"){const d=e.pop().text;l=d+l,e[e.length-1].value=Et(d)}if(e.length===0||e[e.length-1].type!=="BRACKET")throw new Error("missing opening bracket");e[e.length-1].text+=l}continue}if(o=a.match(Cg),o){if(u.text=o[1],i+=u.text.length,_g.has(u.text)){u.type="KEYWORD";continue}if(u.text.match(ol)){u.type="TYPE";continue}u.type="ID";continue}if(o=a.match(Ag),o){u.text=o[1],u.type="NUMBER",i+=u.text.length;continue}throw new Error(`unexpected token ${JSON.stringify(a[0])} at position ${i}`)}return new It(e.map(a=>Object.freeze(a)))}function Qo(t,e){let n=[];for(const r in e.keys())t.has(r)&&n.push(r);if(n.length>1)throw new Error(`conflicting types: ${n.join(", ")}`)}function gi(t,e){if(e.peekKeyword(sl)){const n=e.pop().text;if(n!==t)throw new Error(`expected ${t}, got ${n}`)}return e.popType("ID")}function yn(t,e){const n=new Set;for(;;){const r=t.peekType("KEYWORD");if(r==null||e&&!e.has(r))break;if(t.pop(),n.has(r))throw new Error(`duplicate keywords: ${JSON.stringify(r)}`);n.add(r)}return Object.freeze(n)}function ul(t){let e=yn(t,yg);return Qo(e,Je("constant payable nonpayable".split(" "))),Qo(e,Je("pure view payable nonpayable".split(" "))),e.has("view")?"view":e.has("pure")?"pure":e.has("payable")?"payable":e.has("nonpayable")?"nonpayable":e.has("constant")?"view":"nonpayable"}function fn(t,e){return t.popParams().map(n=>Me.from(n,e))}function cl(t){if(t.peekType("AT")){if(t.pop(),t.peekType("NUMBER"))return zt(t.pop().text);throw new Error("invalid gas")}return null}function er(t){if(t.length)throw new Error(`unexpected tokens at offset ${t.offset}: ${t.toString()}`)}const Tg=new RegExp(/^(.*)\[([0-9]*)\]$/);function eu(t){const e=t.match(ol);if(X(e,"invalid type","type",t),t==="uint")return"uint256";if(t==="int")return"int256";if(e[2]){const n=parseInt(e[2]);X(n!==0&&n<=32,"invalid bytes length","type",t)}else if(e[3]){const n=parseInt(e[3]);X(n!==0&&n<=256&&n%8===0,"invalid numeric width","type",t)}return t}const Se={},at=Symbol.for("_ethers_internal"),tu="_ParamTypeInternal",nu="_ErrorInternal",ru="_EventInternal",su="_ConstructorInternal",iu="_FallbackInternal",au="_FunctionInternal",ou="_StructInternal";var vr,Rs;const vt=class vt{constructor(e,n,r,s,i,a,o,u){_e(this,vr);te(this,"name");te(this,"type");te(this,"baseType");te(this,"indexed");te(this,"components");te(this,"arrayLength");te(this,"arrayChildren");if(li(e,Se,"ParamType"),Object.defineProperty(this,at,{value:tu}),a&&(a=Object.freeze(a.slice())),s==="array"){if(o==null||u==null)throw new Error("")}else if(o!=null||u!=null)throw new Error("");if(s==="tuple"){if(a==null)throw new Error("")}else if(a!=null)throw new Error("");Te(this,{name:n,type:r,baseType:s,indexed:i,components:a,arrayLength:o,arrayChildren:u})}format(e){if(e==null&&(e="sighash"),e==="json"){const r=this.name||"";if(this.isArray()){const i=JSON.parse(this.arrayChildren.format("json"));return i.name=r,i.type+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`,JSON.stringify(i)}const s={type:this.baseType==="tuple"?"tuple":this.type,name:r};return typeof this.indexed=="boolean"&&(s.indexed=this.indexed),this.isTuple()&&(s.components=this.components.map(i=>JSON.parse(i.format(e)))),JSON.stringify(s)}let n="";return this.isArray()?(n+=this.arrayChildren.format(e),n+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`):this.isTuple()?n+="("+this.components.map(r=>r.format(e)).join(e==="full"?", ":",")+")":n+=this.type,e!=="sighash"&&(this.indexed===!0&&(n+=" indexed"),e==="full"&&this.name&&(n+=" "+this.name)),n}isArray(){return this.baseType==="array"}isTuple(){return this.baseType==="tuple"}isIndexable(){return this.indexed!=null}walk(e,n){if(this.isArray()){if(!Array.isArray(e))throw new Error("invalid array value");if(this.arrayLength!==-1&&e.length!==this.arrayLength)throw new Error("array is wrong length");const r=this;return e.map(s=>r.arrayChildren.walk(s,n))}if(this.isTuple()){if(!Array.isArray(e))throw new Error("invalid tuple value");if(e.length!==this.components.length)throw new Error("array is wrong length");const r=this;return e.map((s,i)=>r.components[i].walk(s,n))}return n(this.type,e)}async walkAsync(e,n){const r=[],s=[e];return Ee(this,vr,Rs).call(this,r,e,n,i=>{s[0]=i}),r.length&&await Promise.all(r),s[0]}static from(e,n){if(vt.isParamType(e))return e;if(typeof e=="string")try{return vt.from(Pn(e),n)}catch{X(!1,"invalid param type","obj",e)}else if(e instanceof It){let o="",u="",c=null;yn(e,Je(["tuple"])).has("tuple")||e.peekType("OPEN_PAREN")?(u="tuple",c=e.popParams().map(_=>vt.from(_)),o=`tuple(${c.map(_=>_.format()).join(",")})`):(o=eu(e.popType("TYPE")),u=o);let l=null,d=null;for(;e.length&&e.peekType("BRACKET");){const _=e.pop();l=new vt(Se,"",o,u,null,c,d,l),d=_.value,o+=_.text,u="array",c=null}let b=null;if(yn(e,vg).has("indexed")){if(!n)throw new Error("");b=!0}const C=e.peekType("ID")?e.pop().text:"";if(e.length)throw new Error("leftover tokens");return new vt(Se,C,o,u,b,c,d,l)}const r=e.name;X(!r||typeof r=="string"&&r.match(al),"invalid name","obj.name",r);let s=e.indexed;s!=null&&(X(n,"parameter cannot be indexed","obj.indexed",e.indexed),s=!!s);let i=e.type,a=i.match(Tg);if(a){const o=parseInt(a[2]||"-1"),u=vt.from({type:a[1],components:e.components});return new vt(Se,r||"",i,"array",s,null,o,u)}if(i==="tuple"||i.startsWith("tuple(")||i.startsWith("(")){const o=e.components!=null?e.components.map(c=>vt.from(c)):null;return new vt(Se,r||"",i,"tuple",s,o,null,null)}return i=eu(e.type),new vt(Se,r||"",i,i,s,null,null,null)}static isParamType(e){return e&&e[at]===tu}};vr=new WeakSet,Rs=function(e,n,r,s){if(this.isArray()){if(!Array.isArray(n))throw new Error("invalid array value");if(this.arrayLength!==-1&&n.length!==this.arrayLength)throw new Error("array is wrong length");const a=this.arrayChildren,o=n.slice();o.forEach((u,c)=>{var l;Ee(l=a,vr,Rs).call(l,e,u,r,d=>{o[c]=d})}),s(o);return}if(this.isTuple()){const a=this.components;let o;if(Array.isArray(n))o=n.slice();else{if(n==null||typeof n!="object")throw new Error("invalid tuple value");o=a.map(u=>{if(!u.name)throw new Error("cannot use object value with unnamed components");if(!(u.name in n))throw new Error(`missing value for component ${u.name}`);return n[u.name]})}if(o.length!==this.components.length)throw new Error("array is wrong length");o.forEach((u,c)=>{var l;Ee(l=a[c],vr,Rs).call(l,e,u,r,d=>{o[c]=d})}),s(o);return}const i=r(this.type,n);i.then?e.push(async function(){s(await i)}()):s(i)};let Me=vt;class tr{constructor(e,n,r){te(this,"type");te(this,"inputs");li(e,Se,"Fragment"),r=Object.freeze(r.slice()),Te(this,{type:n,inputs:r})}static from(e){if(typeof e=="string"){try{tr.from(JSON.parse(e))}catch{}return tr.from(Pn(e))}if(e instanceof It)switch(e.peekKeyword(sl)){case"constructor":return cn.from(e);case"error":return st.from(e);case"event":return Ht.from(e);case"fallback":case"receive":return nn.from(e);case"function":return Wt.from(e);case"struct":return Jn.from(e)}else if(typeof e=="object"){switch(e.type){case"constructor":return cn.from(e);case"error":return st.from(e);case"event":return Ht.from(e);case"fallback":case"receive":return nn.from(e);case"function":return Wt.from(e);case"struct":return Jn.from(e)}Oe(!1,`unsupported type: ${e.type}`,"UNSUPPORTED_OPERATION",{operation:"Fragment.from"})}X(!1,"unsupported frgament object","obj",e)}static isConstructor(e){return cn.isFragment(e)}static isError(e){return st.isFragment(e)}static isEvent(e){return Ht.isFragment(e)}static isFunction(e){return Wt.isFragment(e)}static isStruct(e){return Jn.isFragment(e)}}class hi extends tr{constructor(n,r,s,i){super(n,r,i);te(this,"name");X(typeof s=="string"&&s.match(al),"invalid identifier","name",s),i=Object.freeze(i.slice()),Te(this,{name:s})}}function ss(t,e){return"("+e.map(n=>n.format(t)).join(t==="full"?", ":",")+")"}class st extends hi{constructor(e,n,r){super(e,"error",n,r),Object.defineProperty(this,at,{value:nu})}get selector(){return rs(this.format("sighash")).substring(0,10)}format(e){if(e==null&&(e="sighash"),e==="json")return JSON.stringify({type:"error",name:this.name,inputs:this.inputs.map(r=>JSON.parse(r.format(e)))});const n=[];return e!=="sighash"&&n.push("error"),n.push(this.name+ss(e,this.inputs)),n.join(" ")}static from(e){if(st.isFragment(e))return e;if(typeof e=="string")return st.from(Pn(e));if(e instanceof It){const n=gi("error",e),r=fn(e);return er(e),new st(Se,n,r)}return new st(Se,e.name,e.inputs?e.inputs.map(Me.from):[])}static isFragment(e){return e&&e[at]===nu}}class Ht extends hi{constructor(n,r,s,i){super(n,"event",r,s);te(this,"anonymous");Object.defineProperty(this,at,{value:ru}),Te(this,{anonymous:i})}get topicHash(){return rs(this.format("sighash"))}format(n){if(n==null&&(n="sighash"),n==="json")return JSON.stringify({type:"event",anonymous:this.anonymous,name:this.name,inputs:this.inputs.map(s=>JSON.parse(s.format(n)))});const r=[];return n!=="sighash"&&r.push("event"),r.push(this.name+ss(n,this.inputs)),n!=="sighash"&&this.anonymous&&r.push("anonymous"),r.join(" ")}static getTopicHash(n,r){return r=(r||[]).map(i=>Me.from(i)),new Ht(Se,n,r,!1).topicHash}static from(n){if(Ht.isFragment(n))return n;if(typeof n=="string")try{return Ht.from(Pn(n))}catch{X(!1,"invalid event fragment","obj",n)}else if(n instanceof It){const r=gi("event",n),s=fn(n,!0),i=!!yn(n,Je(["anonymous"])).has("anonymous");return er(n),new Ht(Se,r,s,i)}return new Ht(Se,n.name,n.inputs?n.inputs.map(r=>Me.from(r,!0)):[],!!n.anonymous)}static isFragment(n){return n&&n[at]===ru}}class cn extends tr{constructor(n,r,s,i,a){super(n,r,s);te(this,"payable");te(this,"gas");Object.defineProperty(this,at,{value:su}),Te(this,{payable:i,gas:a})}format(n){if(Oe(n!=null&&n!=="sighash","cannot format a constructor for sighash","UNSUPPORTED_OPERATION",{operation:"format(sighash)"}),n==="json")return JSON.stringify({type:"constructor",stateMutability:this.payable?"payable":"undefined",payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(s=>JSON.parse(s.format(n)))});const r=[`constructor${ss(n,this.inputs)}`];return this.payable&&r.push("payable"),this.gas!=null&&r.push(`@${this.gas.toString()}`),r.join(" ")}static from(n){if(cn.isFragment(n))return n;if(typeof n=="string")try{return cn.from(Pn(n))}catch{X(!1,"invalid constuctor fragment","obj",n)}else if(n instanceof It){yn(n,Je(["constructor"]));const r=fn(n),s=!!yn(n,hg).has("payable"),i=cl(n);return er(n),new cn(Se,"constructor",r,s,i)}return new cn(Se,"constructor",n.inputs?n.inputs.map(Me.from):[],!!n.payable,n.gas!=null?n.gas:null)}static isFragment(n){return n&&n[at]===su}}class nn extends tr{constructor(n,r,s){super(n,"fallback",r);te(this,"payable");Object.defineProperty(this,at,{value:iu}),Te(this,{payable:s})}format(n){const r=this.inputs.length===0?"receive":"fallback";if(n==="json"){const s=this.payable?"payable":"nonpayable";return JSON.stringify({type:r,stateMutability:s})}return`${r}()${this.payable?" payable":""}`}static from(n){if(nn.isFragment(n))return n;if(typeof n=="string")try{return nn.from(Pn(n))}catch{X(!1,"invalid fallback fragment","obj",n)}else if(n instanceof It){const r=n.toString(),s=n.peekKeyword(Je(["fallback","receive"]));if(X(s,"type must be fallback or receive","obj",r),n.popKeyword(Je(["fallback","receive"]))==="receive"){const u=fn(n);return X(u.length===0,"receive cannot have arguments","obj.inputs",u),yn(n,Je(["payable"])),er(n),new nn(Se,[],!0)}let a=fn(n);a.length?X(a.length===1&&a[0].type==="bytes","invalid fallback inputs","obj.inputs",a.map(u=>u.format("minimal")).join(", ")):a=[Me.from("bytes")];const o=ul(n);if(X(o==="nonpayable"||o==="payable","fallback cannot be constants","obj.stateMutability",o),yn(n,Je(["returns"])).has("returns")){const u=fn(n);X(u.length===1&&u[0].type==="bytes","invalid fallback outputs","obj.outputs",u.map(c=>c.format("minimal")).join(", "))}return er(n),new nn(Se,a,o==="payable")}if(n.type==="receive")return new nn(Se,[],!0);if(n.type==="fallback"){const r=[Me.from("bytes")],s=n.stateMutability==="payable";return new nn(Se,r,s)}X(!1,"invalid fallback description","obj",n)}static isFragment(n){return n&&n[at]===iu}}class Wt extends hi{constructor(n,r,s,i,a,o){super(n,"function",r,i);te(this,"constant");te(this,"outputs");te(this,"stateMutability");te(this,"payable");te(this,"gas");Object.defineProperty(this,at,{value:au}),a=Object.freeze(a.slice()),Te(this,{constant:s==="view"||s==="pure",gas:o,outputs:a,payable:s==="payable",stateMutability:s})}get selector(){return rs(this.format("sighash")).substring(0,10)}format(n){if(n==null&&(n="sighash"),n==="json")return JSON.stringify({type:"function",name:this.name,constant:this.constant,stateMutability:this.stateMutability!=="nonpayable"?this.stateMutability:void 0,payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(s=>JSON.parse(s.format(n))),outputs:this.outputs.map(s=>JSON.parse(s.format(n)))});const r=[];return n!=="sighash"&&r.push("function"),r.push(this.name+ss(n,this.inputs)),n!=="sighash"&&(this.stateMutability!=="nonpayable"&&r.push(this.stateMutability),this.outputs&&this.outputs.length&&(r.push("returns"),r.push(ss(n,this.outputs))),this.gas!=null&&r.push(`@${this.gas.toString()}`)),r.join(" ")}static getSelector(n,r){return r=(r||[]).map(i=>Me.from(i)),new Wt(Se,n,"view",r,[],null).selector}static from(n){if(Wt.isFragment(n))return n;if(typeof n=="string")try{return Wt.from(Pn(n))}catch{X(!1,"invalid function fragment","obj",n)}else if(n instanceof It){const s=gi("function",n),i=fn(n),a=ul(n);let o=[];yn(n,Je(["returns"])).has("returns")&&(o=fn(n));const u=cl(n);return er(n),new Wt(Se,s,a,i,o,u)}let r=n.stateMutability;return r==null&&(r="payable",typeof n.constant=="boolean"?(r="view",n.constant||(r="payable",typeof n.payable=="boolean"&&!n.payable&&(r="nonpayable"))):typeof n.payable=="boolean"&&!n.payable&&(r="nonpayable")),new Wt(Se,n.name,r,n.inputs?n.inputs.map(Me.from):[],n.outputs?n.outputs.map(Me.from):[],n.gas!=null?n.gas:null)}static isFragment(n){return n&&n[at]===au}}class Jn extends hi{constructor(e,n,r){super(e,"struct",n,r),Object.defineProperty(this,at,{value:ou})}format(){throw new Error("@TODO")}static from(e){if(typeof e=="string")try{return Jn.from(Pn(e))}catch{X(!1,"invalid struct fragment","obj",e)}else if(e instanceof It){const n=gi("struct",e),r=fn(e);return er(e),new Jn(Se,n,r)}return new Jn(Se,e.name,e.inputs?e.inputs.map(Me.from):[])}static isFragment(e){return e&&e[at]===ou}}const Dt=new Map;Dt.set(0,"GENERIC_PANIC");Dt.set(1,"ASSERT_FALSE");Dt.set(17,"OVERFLOW");Dt.set(18,"DIVIDE_BY_ZERO");Dt.set(33,"ENUM_RANGE_ERROR");Dt.set(34,"BAD_STORAGE_DATA");Dt.set(49,"STACK_UNDERFLOW");Dt.set(50,"ARRAY_RANGE_ERROR");Dt.set(65,"OUT_OF_MEMORY");Dt.set(81,"UNINITIALIZED_FUNCTION_CALL");const Eg=new RegExp(/^bytes([0-9]*)$/),Sg=new RegExp(/^(u?int)([0-9]*)$/);let Li=null,uu=1024;function Ig(t,e,n,r){let s="missing revert data",i=null;const a=null;let o=null;if(n){s="execution reverted";const c=Ge(n);if(n=he(n),c.length===0)s+=" (no data present; likely require(false) occurred",i="require(false)";else if(c.length%32!==4)s+=" (could not decode reason; invalid data length)";else if(he(c.slice(0,4))==="0x08c379a0")try{i=r.decode(["string"],c.slice(4))[0],o={signature:"Error(string)",name:"Error",args:[i]},s+=`: ${JSON.stringify(i)}`}catch{s+=" (could not decode reason; invalid string data)"}else if(he(c.slice(0,4))==="0x4e487b71")try{const l=Number(r.decode(["uint256"],c.slice(4))[0]);o={signature:"Panic(uint256)",name:"Panic",args:[l]},i=`Panic due to ${Dt.get(l)||"UNKNOWN"}(${l})`,s+=`: ${i}`}catch{s+=" (could not decode panic code)"}else s+=" (unknown custom error)"}const u={to:e.to?Sr(e.to):null,data:e.data||"0x"};return e.from&&(u.from=Sr(e.from)),Cc(s,"CALL_EXCEPTION",{action:t,data:n,reason:i,transaction:u,invocation:a,revert:o})}var In,or;const Ks=class Ks{constructor(){_e(this,In)}getDefaultValue(e){const n=e.map(s=>Ee(this,In,or).call(this,Me.from(s)));return new ks(n,"_").defaultValue()}encode(e,n){Tc(n.length,e.length,"types/values length mismatch");const r=e.map(a=>Ee(this,In,or).call(this,Me.from(a))),s=new ks(r,"_"),i=new Zi;return s.encode(i,n),i.data}decode(e,n,r){const s=e.map(a=>Ee(this,In,or).call(this,Me.from(a)));return new ks(s,"_").decode(new Ji(n,r,uu))}static _setDefaultMaxInflation(e){X(typeof e=="number"&&Number.isInteger(e),"invalid defaultMaxInflation factor","value",e),uu=e}static defaultAbiCoder(){return Li==null&&(Li=new Ks),Li}static getBuiltinCallException(e,n,r){return Ig(e,n,r,Ks.defaultAbiCoder())}};In=new WeakSet,or=function(e){if(e.isArray())return new sg(Ee(this,In,or).call(this,e.arrayChildren),e.arrayLength,e.name);if(e.isTuple())return new ks(e.components.map(r=>Ee(this,In,or).call(this,r)),e.name);switch(e.baseType){case"address":return new ng(e.name);case"bool":return new ig(e.name);case"string":return new mg(e.name);case"bytes":return new ag(e.name);case"":return new cg(e.name)}let n=e.type.match(Sg);if(n){let r=parseInt(n[2]||"256");return X(r!==0&&r<=256&&r%8===0,"invalid "+n[1]+" bit length","param",e),new fg(r/8,n[1]==="int",e.name)}if(n=e.type.match(Eg),n){let r=parseInt(n[1]);return X(r!==0&&r<=32,"invalid bytes length","param",e),new og(r,e.name)}X(!1,"invalid type","type",e.type)};let Ir=Ks;class Dg{constructor(e,n,r){te(this,"fragment");te(this,"name");te(this,"signature");te(this,"topic");te(this,"args");const s=e.name,i=e.format();Te(this,{fragment:e,name:s,signature:i,topic:n,args:r})}}class Rg{constructor(e,n,r,s){te(this,"fragment");te(this,"name");te(this,"args");te(this,"signature");te(this,"selector");te(this,"value");const i=e.name,a=e.format();Te(this,{fragment:e,name:i,args:r,signature:a,selector:n,value:s})}}class Og{constructor(e,n,r){te(this,"fragment");te(this,"name");te(this,"args");te(this,"signature");te(this,"selector");const s=e.name,i=e.format();Te(this,{fragment:e,name:s,args:r,signature:i,selector:n})}}class cu{constructor(e){te(this,"hash");te(this,"_isIndexed");Te(this,{hash:e,_isIndexed:!0})}static isIndexed(e){return!!(e&&e._isIndexed)}}const lu={0:"generic panic",1:"assert(false)",17:"arithmetic overflow",18:"division or modulo by zero",33:"enum overflow",34:"invalid encoded storage byte array accessed",49:"out-of-bounds array access; popping on an empty array",50:"out-of-bounds access of an array or bytesN",65:"out of memory",81:"uninitialized function"},du={"0x08c379a0":{signature:"Error(string)",name:"Error",inputs:["string"],reason:t=>`reverted with reason string ${JSON.stringify(t)}`},"0x4e487b71":{signature:"Panic(uint256)",name:"Panic",inputs:["uint256"],reason:t=>{let e="unknown panic code";return t>=0&&t<=255&&lu[t.toString()]&&(e=lu[t.toString()]),`reverted with panic code 0x${t.toString(16)} (${e})`}}};var qt,Mt,Ut,Ve,Kt,Os,Ps;const Vn=class Vn{constructor(e){_e(this,Kt);te(this,"fragments");te(this,"deploy");te(this,"fallback");te(this,"receive");_e(this,qt);_e(this,Mt);_e(this,Ut);_e(this,Ve);let n=[];typeof e=="string"?n=JSON.parse(e):n=e,ue(this,Ut,new Map),ue(this,qt,new Map),ue(this,Mt,new Map);const r=[];for(const a of n)try{r.push(tr.from(a))}catch(o){console.log(`[Warning] Invalid Fragment ${JSON.stringify(a)}:`,o.message)}Te(this,{fragments:Object.freeze(r)});let s=null,i=!1;ue(this,Ve,this.getAbiCoder()),this.fragments.forEach((a,o)=>{let u;switch(a.type){case"constructor":if(this.deploy){console.log("duplicate definition - constructor");return}Te(this,{deploy:a});return;case"fallback":a.inputs.length===0?i=!0:(X(!s||a.payable!==s.payable,"conflicting fallback fragments",`fragments[${o}]`,a),s=a,i=s.payable);return;case"function":u=H(this,Ut);break;case"event":u=H(this,Mt);break;case"error":u=H(this,qt);break;default:return}const c=a.format();u.has(c)||u.set(c,a)}),this.deploy||Te(this,{deploy:cn.from("constructor()")}),Te(this,{fallback:s,receive:i})}format(e){const n=e?"minimal":"full";return this.fragments.map(s=>s.format(n))}formatJson(){const e=this.fragments.map(n=>n.format("json"));return JSON.stringify(e.map(n=>JSON.parse(n)))}getAbiCoder(){return Ir.defaultAbiCoder()}getFunctionName(e){const n=Ee(this,Kt,Os).call(this,e,null,!1);return X(n,"no matching function","key",e),n.name}hasFunction(e){return!!Ee(this,Kt,Os).call(this,e,null,!1)}getFunction(e,n){return Ee(this,Kt,Os).call(this,e,n||null,!0)}forEachFunction(e){const n=Array.from(H(this,Ut).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(H(this,Ut).get(s),r)}}getEventName(e){const n=Ee(this,Kt,Ps).call(this,e,null,!1);return X(n,"no matching event","key",e),n.name}hasEvent(e){return!!Ee(this,Kt,Ps).call(this,e,null,!1)}getEvent(e,n){return Ee(this,Kt,Ps).call(this,e,n||null,!0)}forEachEvent(e){const n=Array.from(H(this,Mt).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(H(this,Mt).get(s),r)}}getError(e,n){if(Hn(e)){const s=e.toLowerCase();if(du[s])return st.from(du[s].signature);for(const i of H(this,qt).values())if(s===i.selector)return i;return null}if(e.indexOf("(")===-1){const s=[];for(const[i,a]of H(this,qt))i.split("(")[0]===e&&s.push(a);if(s.length===0)return e==="Error"?st.from("error Error(string)"):e==="Panic"?st.from("error Panic(uint256)"):null;if(s.length>1){const i=s.map(a=>JSON.stringify(a.format())).join(", ");X(!1,`ambiguous error description (i.e. ${i})`,"name",e)}return s[0]}if(e=st.from(e).format(),e==="Error(string)")return st.from("error Error(string)");if(e==="Panic(uint256)")return st.from("error Panic(uint256)");const r=H(this,qt).get(e);return r||null}forEachError(e){const n=Array.from(H(this,qt).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(H(this,qt).get(s),r)}}_decodeParams(e,n){return H(this,Ve).decode(e,n)}_encodeParams(e,n){return H(this,Ve).encode(e,n)}encodeDeploy(e){return this._encodeParams(this.deploy.inputs,e||[])}decodeErrorResult(e,n){if(typeof e=="string"){const r=this.getError(e);X(r,"unknown error","fragment",e),e=r}return X(ir(n,0,4)===e.selector,`data signature does not match error ${e.name}.`,"data",n),this._decodeParams(e.inputs,ir(n,4))}encodeErrorResult(e,n){if(typeof e=="string"){const r=this.getError(e);X(r,"unknown error","fragment",e),e=r}return pn([e.selector,this._encodeParams(e.inputs,n||[])])}decodeFunctionData(e,n){if(typeof e=="string"){const r=this.getFunction(e);X(r,"unknown function","fragment",e),e=r}return X(ir(n,0,4)===e.selector,`data signature does not match function ${e.name}.`,"data",n),this._decodeParams(e.inputs,ir(n,4))}encodeFunctionData(e,n){if(typeof e=="string"){const r=this.getFunction(e);X(r,"unknown function","fragment",e),e=r}return pn([e.selector,this._encodeParams(e.inputs,n||[])])}decodeFunctionResult(e,n){if(typeof e=="string"){const i=this.getFunction(e);X(i,"unknown function","fragment",e),e=i}let r="invalid length for result data";const s=Xe(n);if(s.length%32===0)try{return H(this,Ve).decode(e.outputs,s)}catch{r="could not decode result data"}Oe(!1,r,"BAD_DATA",{value:he(s),info:{method:e.name,signature:e.format()}})}makeError(e,n){const r=Ge(e,"data"),s=Ir.getBuiltinCallException("call",n,r);if(s.message.startsWith("execution reverted (unknown custom error)")){const o=he(r.slice(0,4)),u=this.getError(o);if(u)try{const c=H(this,Ve).decode(u.inputs,r.slice(4));s.revert={name:u.name,signature:u.format(),args:c},s.reason=s.revert.signature,s.message=`execution reverted: ${s.reason}`}catch{s.message="execution reverted (coult not decode custom error)"}}const a=this.parseTransaction(n);return a&&(s.invocation={method:a.name,signature:a.signature,args:a.args}),s}encodeFunctionResult(e,n){if(typeof e=="string"){const r=this.getFunction(e);X(r,"unknown function","fragment",e),e=r}return he(H(this,Ve).encode(e.outputs,n||[]))}encodeFilterTopics(e,n){if(typeof e=="string"){const i=this.getEvent(e);X(i,"unknown event","eventFragment",e),e=i}Oe(n.length<=e.inputs.length,`too many arguments for ${e.format()}`,"UNEXPECTED_ARGUMENT",{count:n.length,expectedCount:e.inputs.length});const r=[];e.anonymous||r.push(e.topicHash);const s=(i,a)=>i.type==="string"?rs(a):i.type==="bytes"?Xt(he(a)):(i.type==="bool"&&typeof a=="boolean"?a=a?"0x01":"0x00":i.type.match(/^u?int/)?a=Hs(a):i.type.match(/^bytes/)?a=Ff(a,32):i.type==="address"&&H(this,Ve).encode(["address"],[a]),Ic(he(a),32));for(n.forEach((i,a)=>{const o=e.inputs[a];if(!o.indexed){X(i==null,"cannot filter non-indexed parameters; must be null","contract."+o.name,i);return}i==null?r.push(null):o.baseType==="array"||o.baseType==="tuple"?X(!1,"filtering with tuples or arrays not supported","contract."+o.name,i):Array.isArray(i)?r.push(i.map(u=>s(o,u))):r.push(s(o,i))});r.length&&r[r.length-1]===null;)r.pop();return r}encodeEventLog(e,n){if(typeof e=="string"){const a=this.getEvent(e);X(a,"unknown event","eventFragment",e),e=a}const r=[],s=[],i=[];return e.anonymous||r.push(e.topicHash),X(n.length===e.inputs.length,"event arguments/values mismatch","values",n),e.inputs.forEach((a,o)=>{const u=n[o];if(a.indexed)if(a.type==="string")r.push(rs(u));else if(a.type==="bytes")r.push(Xt(u));else{if(a.baseType==="tuple"||a.baseType==="array")throw new Error("not implemented");r.push(H(this,Ve).encode([a.type],[u]))}else s.push(a),i.push(u)}),{data:H(this,Ve).encode(s,i),topics:r}}decodeEventLog(e,n,r){if(typeof e=="string"){const h=this.getEvent(e);X(h,"unknown event","eventFragment",e),e=h}if(r!=null&&!e.anonymous){const h=e.topicHash;X(Hn(r[0],32)&&r[0].toLowerCase()===h,"fragment/topic mismatch","topics[0]",r[0]),r=r.slice(1)}const s=[],i=[],a=[];e.inputs.forEach((h,C)=>{h.indexed?h.type==="string"||h.type==="bytes"||h.baseType==="tuple"||h.baseType==="array"?(s.push(Me.from({type:"bytes32",name:h.name})),a.push(!0)):(s.push(h),a.push(!1)):(i.push(h),a.push(!1))});const o=r!=null?H(this,Ve).decode(s,pn(r)):null,u=H(this,Ve).decode(i,n,!0),c=[],l=[];let d=0,b=0;return e.inputs.forEach((h,C)=>{let _=null;if(h.indexed)if(o==null)_=new cu(null);else if(a[C])_=new cu(o[b++]);else try{_=o[b++]}catch(D){_=D}else try{_=u[d++]}catch(D){_=D}c.push(_),l.push(h.name||null)}),Ar.fromItems(c,l)}parseTransaction(e){const n=Ge(e.data,"tx.data"),r=zt(e.value!=null?e.value:0,"tx.value"),s=this.getFunction(he(n.slice(0,4)));if(!s)return null;const i=H(this,Ve).decode(s.inputs,n.slice(4));return new Rg(s,s.selector,i,r)}parseCallResult(e){throw new Error("@TODO")}parseLog(e){const n=this.getEvent(e.topics[0]);return!n||n.anonymous?null:new Dg(n,n.topicHash,this.decodeEventLog(n,e.data,e.topics))}parseError(e){const n=he(e),r=this.getError(ir(n,0,4));if(!r)return null;const s=H(this,Ve).decode(r.inputs,ir(n,4));return new Og(r,r.selector,s)}static from(e){return e instanceof Vn?e:typeof e=="string"?new Vn(JSON.parse(e)):typeof e.formatJson=="function"?new Vn(e.formatJson()):typeof e.format=="function"?new Vn(e.format("json")):new Vn(e)}};qt=new WeakMap,Mt=new WeakMap,Ut=new WeakMap,Ve=new WeakMap,Kt=new WeakSet,Os=function(e,n,r){if(Hn(e)){const i=e.toLowerCase();for(const a of H(this,Ut).values())if(i===a.selector)return a;return null}if(e.indexOf("(")===-1){const i=[];for(const[a,o]of H(this,Ut))a.split("(")[0]===e&&i.push(o);if(n){const a=n.length>0?n[n.length-1]:null;let o=n.length,u=!0;it.isTyped(a)&&a.type==="overrides"&&(u=!1,o--);for(let c=i.length-1;c>=0;c--){const l=i[c].inputs.length;l!==o&&(!u||l!==o-1)&&i.splice(c,1)}for(let c=i.length-1;c>=0;c--){const l=i[c].inputs;for(let d=0;d<n.length;d++)if(it.isTyped(n[d])){if(d>=l.length){if(n[d].type==="overrides")continue;i.splice(c,1);break}if(n[d].type!==l[d].baseType){i.splice(c,1);break}}}}if(i.length===1&&n&&n.length!==i[0].inputs.length){const a=n[n.length-1];(a==null||Array.isArray(a)||typeof a!="object")&&i.splice(0,1)}if(i.length===0)return null;if(i.length>1&&r){const a=i.map(o=>JSON.stringify(o.format())).join(", ");X(!1,`ambiguous function description (i.e. matches ${a})`,"key",e)}return i[0]}const s=H(this,Ut).get(Wt.from(e).format());return s||null},Ps=function(e,n,r){if(Hn(e)){const i=e.toLowerCase();for(const a of H(this,Mt).values())if(i===a.topicHash)return a;return null}if(e.indexOf("(")===-1){const i=[];for(const[a,o]of H(this,Mt))a.split("(")[0]===e&&i.push(o);if(n){for(let a=i.length-1;a>=0;a--)i[a].inputs.length<n.length&&i.splice(a,1);for(let a=i.length-1;a>=0;a--){const o=i[a].inputs;for(let u=0;u<n.length;u++)if(it.isTyped(n[u])&&n[u].type!==o[u].baseType){i.splice(a,1);break}}}if(i.length===0)return null;if(i.length>1&&r){const a=i.map(o=>JSON.stringify(o.format())).join(", ");X(!1,`ambiguous event description (i.e. matches ${a})`,"key",e)}return i[0]}const s=H(this,Mt).get(Ht.from(e).format());return s||null};let oa=Vn;function Pg(){mt();const t=Be(),e=pe(),n=O({}),r=O({}),s=O(0),i=O("0xAb5801a7D398351b8bE11C439e05C5B9ebB6AA0c"),a=O(new Set),o={weapon:"0x1234567890123456789012345678901234567890",achievement:"0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"},u=O({weapon:{},achievement:{}}),c=(p,f)=>!p||!f?{success:!1,message:"❌ 请输入名称和头像！",hints:[],nextStep:"👉 填写名称和头像后点击保存",error:"EMPTY_INPUT"}:(n.value[i.value]={name:p,avatar:f},e.addLog(16,"设置资料",`名称: ${p}, 头像: ${f}`,"setProfile16"),{success:!0,message:"✅ 资料已保存！",hints:["mapping_storage"],nextStep:"🗺️ 你的资料已保存到 mapping！👉 注册 weapon 插件来学习插件系统！"}),l=p=>{const f=n.value[p];return e.addLog(16,"查询资料",`地址: ${S(p)}`),f||{name:"",avatar:""}},d=(p,f)=>{if(!p||!f)return{success:!1,message:"❌ 请输入插件标识符和地址！",hints:[],nextStep:"👉 填写插件标识符和合约地址",error:"EMPTY_INPUT"};if(r.value[p])return{success:!1,message:`❌ 插件 "${p}" 已存在！`,hints:[],nextStep:"👉 使用其他标识符或先注销现有插件",error:"PLUGIN_EXISTS"};r.value[p]=f,s.value++,e.addLog(16,"注册插件",`标识: ${p}, 地址: ${S(f)}`,"registerPlugin16");const w=["plugin_registration"];let k=`🔌 插件 "${p}" 注册成功！👉 点击「调用」执行插件函数！`;return s.value>=2&&(w.push("dynamic_delegation"),k="🔄 动态委托系统运行中！👉 在不同插件间切换体验互操作！"),{success:!0,message:`✅ 插件 "${p}" 注册成功！`,hints:w,nextStep:k,registeredAddress:f}},b=p=>r.value[p]||"",h=(p,f,w)=>{try{const k=p.split("(")[0],y=new oa([`function ${p}`]).getFunction(k).selector,E=new Ir,m=Sr(f),x=p.includes("string"),B=x?["address","string"]:["address"],M=x?[m,w||""]:[m],q=E.encode(B,M),F=y+q.slice(2),P=[{type:"selector",value:y,desc:"函数选择器 (4 bytes)",detail:`keccak256("${p}").slice(0,10)`},{type:"address",value:m,desc:"address 参数",detail:"zero-padded to 32 bytes"}];if(x){const L=w||"";P.push({type:"offset",value:"0x0000000000000000000000000000000000000000000000000000000000000040",desc:"string 偏移量 (64 bytes)"},{type:"length",value:"0x"+L.length.toString(16).padStart(64,"0"),desc:`string 长度 (${L.length})`},{type:"data",value:he(pi(L)).slice(2).padEnd(64,"0"),desc:"string 数据 (padded)",detail:`"${L}"`})}return{selector:y,encodedParams:"0x"+q.slice(2),fullEncodedData:F,breakdown:P}}catch(k){return console.error("ABI编码错误:",k),console.error("参数:",{functionSignature:p,user:f,argument:w}),null}},C=(p,f,w,k)=>{if(!r.value[p])return{success:!1,message:`❌ 插件 "${p}" 未注册！`,hints:[],nextStep:`👉 先点击「插件管理中心」注册 ${p} 插件！`,error:"PLUGIN_NOT_REGISTERED"};const A=h(f,w,k);if(!A)return{success:!1,message:"❌ ABI编码失败！",hints:[],nextStep:"👉 检查函数签名格式，例如: setWeapon(address,string)",error:"ABI_ENCODE_FAILED"};if(Math.random()<.1)return{success:!1,message:"❌ 插件调用失败！（演示错误场景）",hints:[],nextStep:"👉 可能是 Gas 不足或函数 revert。检查参数是否满足插件要求。",error:"CALL_FAILED"};const y=f.split("(")[0];u.value[p]||(u.value[p]={}),u.value[p][w]=k,a.value.add(p),e.addLog(16,"执行插件",`插件: ${p}, 函数: ${y}, 参数: ${k}`,"runPlugin16");const E=["low_level_call","abi_encoding"];let m="⚡ 低级别调用成功！👉 查看 ABI 编码可视化或切换 staticcall 模式查询数据！";return a.value.size>=2&&(E.push("contract_interop"),m="🌐 合约互操作掌握！👉 查看完整代码了解所有实现细节！"),{success:!0,message:`✅ 调用 ${p}.${y} 成功！`,hints:E,nextStep:m,encoded:A.breakdown}},_=(p,f,w)=>{var y;if(!r.value[p])return{success:!1,message:`❌ 插件 "${p}" 未注册！`,hints:[],nextStep:`👉 先注册 ${p} 插件！`,error:"PLUGIN_NOT_REGISTERED"};const k=f.split("(")[0],A=((y=u.value[p])==null?void 0:y[w])||"";return e.addLog(16,"查询插件",`插件: ${p}, 函数: ${k}, 返回值: ${A||"(空)"}`),{success:!0,message:`✅ 查询 ${p}.${k} 成功！`,hints:["staticcall"],nextStep:A?`👁️ 返回值: "${A}" 👉 尝试切换到其他插件！`:"👁️ 查询成功但无数据 👉 先用 call 模式写入数据！",result:A}},D=(p,f)=>{var w;return((w=u.value[p])==null?void 0:w[f])||""},S=p=>!p||p.length<10?p:p.slice(0,6)+"..."+p.slice(-4),v=p=>{t.unlockConcept(16,p)},g=I(()=>({gasUsage:e.getDayGasUsage(16),ethCost:e.getDayEthCost(16),operationCount:e.getDayOperationCount(16)}));return{profiles:n,plugins:r,pluginCounter:s,currentUser:i,pluginData:u,interactedPlugins:a,predefinedPlugins:o,setProfile:c,getProfile:l,registerPlugin:d,getPlugin:b,runPlugin:C,runPluginView:_,getPluginData:D,encodeFunctionCall:h,unlockConcept:v,shortenAddress:S,realtimeData:g}}function Lg(){const t=mt(),e=Be(),n=pe();t.contracts.day17;const r=O("owner"),s=O("V1"),i=O(!1),a=O(!1),o=O(!1),u=O([]),c=O(1),l=O(.1),d=O(30),b=O(1),h=O(null),C=O("0xV1LogicContractAddress"),_=O("0xOwnerAddress"),D=I(()=>u.value.length),S=I(()=>h.value?1:0),v=I(()=>h.value!==null),g=I(()=>{const P=u.value.find(L=>L.id===b.value);return P?P.price:0}),p=I(()=>!h.value||!h.value.paused?0:h.value.expiry),f=I(()=>{if(!h.value)return"未订阅";if(h.value.paused)return"已暂停";const P=Math.floor(Date.now()/1e3);return h.value.expiry>P?"有效":"已过期"}),w=I(()=>{if(!h.value)return"status-inactive";if(h.value.paused)return"status-paused";const P=Math.floor(Date.now()/1e3);return h.value.expiry>P?"status-active":"status-expired"}),k=()=>{const P=c.value,L=parseFloat(l.value),N=d.value*24*60*60;return u.value.find(K=>K.id===P)?{success:!1,message:"❌ 计划 ID 已存在",hints:[],nextStep:""}:(u.value.push({id:P,price:L,duration:N,durationDays:d.value}),b.value=P,n.addLog(17,"创建计划",`计划 ${P}: ${L} ETH, ${d.value}天`,"createPlan17"),e.incrementInteraction(17),u.value.length===1?{success:!0,message:`✅ 计划 ${P} 创建成功！存储在 planPrices[${P}] 中！`,hints:[],nextStep:"📊 再创建 1 个计划即可解锁升级功能！👉 创建第2个计划！"}:{success:!0,message:`✅ 计划 ${P} 创建成功！`,hints:[],nextStep:'🎉 现在可以升级到 V2 了！👉 点击"升级到 V2"按钮，体验合约升级！'})},A=()=>i.value?{success:!1,message:"❌ 合约已经升级过了",hints:[],nextStep:""}:u.value.length<2?{success:!1,message:"❌ 需要至少 2 个计划才能升级",hints:[],nextStep:`💡 当前只有 ${u.value.length} 个计划，请再创建 ${2-u.value.length} 个！`}:(a.value=!0,setTimeout(()=>{i.value=!0,s.value="V2",C.value="0xV2LogicContractAddress",o.value=!0,a.value=!1,setTimeout(()=>{o.value=!1},3e3)},1e3),n.addLog(17,"升级合约","V1 → V2","upgradeTo17"),e.incrementInteraction(17),e.unlockConcept(17,"upgrade_mechanism"),e.unlockConcept(17,"logic_contract"),{success:!0,message:"🚀 合约已升级到 V2！逻辑合约地址已更新！",hints:["upgrade_mechanism","logic_contract"],nextStep:"⚡ 恭喜解锁：升级机制 + 逻辑合约！👉 切换到 User 身份，执行订阅操作！"}),y=()=>i.value?(s.value="V1",C.value="0xV1LogicContractAddress",{success:!0,message:"⚙️ 已切换到 V1 逻辑合约",hints:[],nextStep:""}):{success:!1,message:"❌ 合约尚未升级",hints:[],nextStep:""},E=()=>i.value?(s.value="V2",C.value="0xV2LogicContractAddress",{success:!0,message:"⚡ 已切换到 V2 逻辑合约",hints:[],nextStep:""}):{success:!1,message:"❌ 合约尚未升级",hints:[],nextStep:""},m=()=>{const P=b.value,L=u.value.find(ne=>ne.id===P);if(!L)return{success:!1,message:"❌ 计划不存在",hints:[],nextStep:""};const U=Math.floor(Date.now()/1e3)+L.duration;return h.value={planId:P,expiry:U,paused:!1},n.addLog(17,"订阅计划",`计划 ${P}: ${L.price} ETH`,"subscribe17"),e.incrementInteraction(17),e.getDayProgress(17).unlockedConcepts.includes("fallback_function")?{success:!0,message:`✅ 订阅成功！您已订阅计划 ${P}！`,hints:[],nextStep:""}:(e.unlockConcept(17,"fallback_function"),{success:!0,message:`✅ 订阅成功！您已订阅计划 ${P}！`,hints:["fallback_function"],nextStep:"🔒 恭喜解锁：回退函数！调用通过 fallback 委托给逻辑合约！👉 查询订阅状态，查看升级后数据是否仍然存在！"})},x=()=>{if(!h.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};if(h.value.paused)return{success:!1,message:"❌ 订阅已经处于暂停状态",hints:[],nextStep:""};const P=Math.floor(Date.now()/1e3);if(h.value.expiry<=P)return{success:!1,message:"❌ 订阅已过期",hints:[],nextStep:""};const L=h.value.expiry-P;return h.value.paused=!0,h.value.expiry=L,n.addLog(17,"暂停订阅",`剩余时间: ${L} 秒`,"pauseSubscription17"),e.incrementInteraction(17),e.getDayProgress(17).unlockedConcepts.includes("version_control")?{success:!0,message:"⏸️ 订阅已暂停！剩余时间已保存！",hints:[],nextStep:""}:(e.unlockConcept(17,"version_control"),{success:!0,message:"⏸️ 订阅已暂停！剩余时间已保存！",hints:["version_control"],nextStep:"🚀 恭喜解锁：版本控制！这是 V2 新增的功能！👉 恢复订阅来完成所有学习！"})},B=()=>{if(!h.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};if(!h.value.paused)return{success:!1,message:"❌ 订阅未处于暂停状态",hints:[],nextStep:""};const P=Math.floor(Date.now()/1e3),L=h.value.expiry;return h.value.paused=!1,h.value.expiry=P+L,n.addLog(17,"恢复订阅",`新的过期时间: ${h.value.expiry}`,"resumeSubscription17"),e.incrementInteraction(17),{success:!0,message:"▶️ 订阅已恢复！过期时间已重新计算！",hints:[],nextStep:"🎉 恭喜你已掌握 Day 17 全部核心功能！👉 查看完整代码来巩固知识！"}},M=()=>{if(!h.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};const P=Math.floor(Date.now()/1e3);let L="";if(h.value.paused)L=`已暂停，剩余 ${h.value.expiry} 秒`;else if(h.value.expiry>P){const U=h.value.expiry-P;L=`有效，剩余 ${Math.floor(U/86400)} 天 ${Math.floor(U%86400/3600)} 小时`}else L="已过期";n.addLog(17,"查询订阅",`计划 ${h.value.planId}: ${L}`,null),e.incrementInteraction(17);const N=e.getDayProgress(17).unlockedConcepts;return i.value&&!N.includes("data_persistence")?(e.unlockConcept(17,"data_persistence"),{success:!0,message:`📊 您的订阅状态: ${L}`,hints:["data_persistence"],nextStep:"🏗️ 恭喜解锁：数据持久化！升级后数据保持不变！👉 使用 V2 新功能（暂停/恢复）来对比版本差异！"}):{success:!0,message:`📊 您的订阅状态: ${L}`,hints:[],nextStep:""}},q=P=>(r.value=P,P==="owner"?{success:!0,message:"✅ 已切换到 Owner 身份！",hints:[],nextStep:"👉 创建订阅计划来体验数据存储！"}:{success:!0,message:"✅ 已切换到 User 身份！",hints:[],nextStep:"👉 选择计划并执行订阅，体验 fallback 委托调用！"}),F=I(()=>({gasUsage:n.getDayGasUsage(17),ethCost:n.getDayEthCost(17),operationCount:n.getDayOperationCount(17)}));return{currentRole:r,currentVersion:s,upgraded:i,isUpgrading:a,justUpgraded:o,plans:u,newPlanId:c,newPlanPrice:l,newPlanDuration:d,selectedPlanId:b,subscription:h,logicContractAddress:C,ownerAddress:_,plansCount:D,subscriptionsCount:S,hasSubscription:v,selectedPlanPrice:g,remainingTime:p,subscriptionStatusText:f,subscriptionStatusClass:w,createPlan:k,upgradeToV2:A,switchToV1:y,switchToV2:E,subscribe:m,pauseSubscription:x,resumeSubscription:B,checkSubscription:M,switchRole:q,realtimeData:F}}function Bg(){const t=pe();Be();const e=O("Alice"),n=O("farmer"),r=O(3e11),s=O(350),i=O({Alice:!1,Bob:!1,Carol:!1}),a=O({Alice:0,Bob:0,Carol:0}),o=O(5e18),u=O(0),c=O(0),l=500,d=10,b=50,h=24*60*60*1e3,C=I(()=>d*1e26/r.value),_=I(()=>b*1e26/r.value),D=I(()=>s.value<l),S=I(()=>{const P=e.value,L=a.value[P]||0,N=Date.now();return i.value[P]&&N-L>=h}),v=I(()=>{const P=e.value,L=a.value[P]||0,N=Date.now(),U=h-(N-L);return U>0?U:0}),g=I(()=>i.value[e.value]?S.value?{status:"available",text:"可索赔"}:{status:"cooldown",text:"冷却中"}:{status:"no_insurance",text:"未投保"}),p=P=>(P/1e18).toFixed(4),f=P=>(P/1e8).toFixed(2),w=P=>{if(P<=0)return"00:00:00";const L=Math.floor(P/(1e3*60*60)),N=Math.floor(P%(1e3*60*60)/(1e3*60)),U=Math.floor(P%(1e3*60)/1e3);return`${L.toString().padStart(2,"0")}:${N.toString().padStart(2,"0")}:${U.toString().padStart(2,"0")}`},k=()=>(s.value=Math.floor(Math.random()*1e3),t.addLog(18,"更新天气数据",`降雨量更新为 ${s.value}mm`,"checkRainfall18"),{success:!0,message:`🌧️ 天气数据已更新！当前降雨量: ${s.value}mm`,rainfall:s.value,hints:["random_generation"],nextStep:D.value?"⚠️ 干旱警报！降雨量低于阈值，可以申请赔付。":"✅ 天气正常，降雨量高于阈值。"}),A=()=>(t.addLog(18,"查询天气数据",`当前降雨量: ${s.value}mm`,"checkRainfall18"),{success:!0,message:`🔍 查询结果：当前降雨量 ${s.value}mm，阈值 ${l}mm`,rainfall:s.value,isDrought:D.value,nextStep:D.value?"⚠️ 干旱状态！符合索赔条件。":"✅ 正常状态，不符合索赔条件。"}),y=()=>{const P=e.value;if(i.value[P])return{success:!1,message:"❌ 您已经购买了保险！"};const L=C.value;return i.value[P]=!0,c.value+=L,o.value+=L,t.addLog(18,"购买保险",`支付保费 ${p(L)} ETH`,"purchaseInsurance18"),{success:!0,message:`🎉 保险购买成功！支付保费 ${p(L)} ETH ($${d})`,hints:["purchase_insurance","price_conversion"],nextStep:"👉 当降雨量低于500mm时，可以申请赔付。注意：24小时内只能索赔一次！"}},E=()=>{const P=e.value;if(!i.value[P])return{success:!1,message:"❌ 您尚未购买保险！请先购买保险。",nextStep:'👉 点击"购买保险"按钮购买保险。'};if(!D.value)return{success:!1,message:`❌ 当前降雨量 ${s.value}mm 高于阈值 ${l}mm，不符合索赔条件。`,nextStep:"👉 等待干旱发生或更新天气数据。"};const L=a.value[P]||0,N=Date.now();if(N-L<h){const K=h-(N-L);return{success:!1,message:`⏱️ 冷却期中！剩余时间: ${w(K)}`,hints:["cooldown_mechanism"],nextStep:'👉 使用"⏩ 快进24小时"按钮跳过冷却期，或等待时间结束。'}}const U=_.value;return o.value<U?{success:!1,message:"❌ 合约余额不足，无法赔付！"}:(a.value[P]=N,u.value+=U,o.value-=U,t.addLog(18,"申请赔付",`获得赔付 ${p(U)} ETH`,"claimPayout18"),{success:!0,message:`💸 赔付成功！获得 ${p(U)} ETH ($${b})`,hints:["parametric_payout"],nextStep:'⏱️ 已触发24小时冷却期！点击"了解冷却期机制"学习更多。'})},m=()=>{const P=e.value,L=a.value[P]||0;return L===0?{success:!1,message:"❌ 您还没有进行过索赔！"}:S.value?{success:!1,message:"✅ 您已经可以索赔了，无需快进！"}:(a.value[P]=L-h,t.addLog(18,"快进时间","跳过24小时冷却期","fastForwardTime18"),{success:!0,message:"⏩ 时间已快进24小时！冷却期已结束。",hints:["cooldown_mechanism"],nextStep:"👉 现在可以再次申请赔付了！"})},x=()=>{if(n.value!=="admin")return{success:!1,message:"❌ 只有管理员可以提取余额！"};const P=o.value;return o.value=0,t.addLog(18,"提取余额",`提取 ${p(P)} ETH`,"withdrawBalance18"),{success:!0,message:`💸 提取成功！共提取 ${p(P)} ETH`,hints:["contract_balance"],nextStep:"👉 合约余额已清零。"}},B=P=>{e.value=P,n.value="farmer"},M=()=>{n.value="admin",e.value="Owner"},q=()=>{const P=.95+Math.random()*.1;return r.value=Math.floor(3e11*P),{success:!0,message:`💰 ETH价格已更新！当前价格: $${f(r.value)}`}},F=I(()=>({gasUsage:t.getDayGasUsage(18),ethCost:t.getDayEthCost(18),operationCount:t.getDayOperationCount(18)}));return{currentUser:e,currentRole:n,ethPrice:r,rainfall:s,hasInsurance:i,lastClaimTimestamp:a,contractBalance:o,totalPayout:u,totalPremium:c,RAINFALL_THRESHOLD:l,INSURANCE_PREMIUM_USD:d,INSURANCE_PAYOUT_USD:b,premiumInEth:C,payoutInEth:_,isDrought:D,canClaim:S,cooldownRemaining:v,cooldownStatus:g,formatEth:p,formatUsd:f,formatTime:w,updateRainfall:k,checkRainfall:A,purchaseInsurance:y,claimPayout:E,fastForwardTime:m,withdrawBalance:x,switchUser:B,switchToAdmin:M,updateEthPrice:q,realtimeData:F}}function Fg(){const t=pe();Be();const e="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",n="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",r=O("organizer"),s=O("0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"),i=O({"0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc":!1,"0x976EA74026E726554dB657fA54763abd0C3a0aa9":!1,"0x14dC79964da2C08b23698B3d3cc7Ca32193d9955":!1}),a=O(null),o=O(!1),u=I(()=>n),c=I(()=>s.value),l=I(()=>i.value[s.value]||!1),d=I(()=>Object.entries(i.value).filter(([f,w])=>w).map(([f])=>f)),b=f=>f?f.substring(0,6)+"..."+f.substring(f.length-4):"",h=()=>{try{const f=s.value,w=Sr(f),A=new Ir().encode(["address"],[w]),y=Xt(A),m=Xt(pi(`Ethereum Signed Message:
32`+y.slice(2))),B=new ia(e).sign(m);return a.value={r:B.r,s:B.s,v:B.v,full:B.serialized,messageHash:y,ethSignedMessageHash:m},t.addLog(19,"生成签名",`为用户 ${b(f)} 生成签名`,"generateSignature19"),{success:!0,message:`✅ 签名生成成功！
签名: ${B.serialized.substring(0,20)}...`,signature:B.serialized,hints:["keccak256_hash","msg_sender"],nextStep:"👉 点击展开签名详情，查看 R/S/V 组件！"}}catch(f){return{success:!1,message:`❌ 签名生成失败: ${f.message}`}}},C=()=>{const f=s.value;return a.value?i.value[f]?{success:!1,message:"❌ 你已经参与过此活动！"}:(i.value[f]=!0,t.addLog(19,"参与活动",`用户 ${b(f)} 使用签名参与活动`,"enterEvent19"),{success:!0,message:`🎉 参与成功！
你已使用签名成功参与活动！`,hints:["ecrecover","require_statement","eip191_prefix"],nextStep:"👉 点击参与者列表查看映射存储，完成所有概念解锁！"}):{success:!1,message:"❌ 请先生成签名！"}},_=()=>{const f=s.value,w=i.value[f]||!1;return t.addLog(19,"查询参与状态",`查询用户 ${b(f)} 参与状态: ${w}`,"checkEntered19"),{success:!0,message:w?"✅ 该用户已参与活动":"❌ 该用户尚未参与活动",entered:w}},D=()=>{const f=d.value;return t.addLog(19,"获取参与者列表",`当前参与者数量: ${f.length}`,"getParticipants19"),{success:!0,message:`📋 当前参与者数量: ${f.length}`,participants:f,hints:["mapping_storage"],nextStep:"🎉 你已掌握 Day 19 所有核心概念！"}},S=()=>(o.value=!o.value,o.value&&a.value?{success:!0,hints:["signature_rsv"],nextStep:"👉 使用签名参与活动来解锁 ecrecover！"}:{success:!1}),v=(f=null)=>(f?r.value=f:r.value=r.value==="organizer"?"participant":"organizer",r.value==="participant"?{success:!0,message:`👤 已切换为参与者角色
地址: ${b(s.value)}`}:{success:!0,message:`👤 已切换为组织者角色
地址: ${b(n)}`}),g=f=>{s.value=f,a.value=null},p=I(()=>({gasUsage:t.getDayGasUsage(19),ethCost:t.getDayEthCost(19),operationCount:t.getDayOperationCount(19)}));return{currentRole:r,currentUserAddress:s,organizer:u,hasEntered:i,generatedSignature:a,showSignatureDetails:o,participantAddress:c,isEntered:l,participantsList:d,formatAddress:b,generateSignature:h,enterEvent:C,checkEntered:_,getParticipants:D,toggleSignatureDetails:S,toggleRole:v,changeUserAddress:g,realtimeData:p}}function Ng(){const t=pe(),e=Be(),n=O(10),r=O({"0xAttacker":1,"0xUserA":5,"0xUserB":3}),s=O(1),i=O(0),a=O(0),o=O(!1),u=O([]),c=1,l=2,d=g=>r.value[g]||0,b=(g,p)=>{const f="deposit20";return p<=0?(t.addLog(20,"deposit","存款金额必须大于0",!1,f),{success:!1,message:"❌ 存款金额必须大于0",hints:[],nextStep:""}):(r.value[g]=(r.value[g]||0)+p,n.value+=p,t.addLog(20,"deposit",`用户 ${g} 存入 ${p} ETH`,!0,f),{success:!0,message:`✅ 成功存入 ${p} ETH！`,hints:["deposit_function"],nextStep:"👉 现在尝试攻击漏洞版本，观察重入攻击如何工作！"})},h=(g,p=5)=>{var x;const f="vulnerableWithdraw20",w=((x=e.getDayProgress(20))==null?void 0:x.unlockedConcepts)||[],k=r.value[g]||0;if(k<=0)return t.addLog(20,"vulnerableWithdraw","余额不足",!1,f),{success:!1,message:"❌ 余额不足，无法提款",hints:[],nextStep:""};o.value=!0;let A=0,y=0;const E=[];for(;y<p&&n.value>=k;)A+=k,n.value-=k,E.push({round:y+1,amount:k,vaultBalance:n.value}),y++;r.value[g]=0,i.value=y,a.value=A,u.value=E,setTimeout(()=>{o.value=!1},1e3),t.addLog(20,"vulnerableWithdraw",`重入攻击成功！${y}次调用，窃取${A}ETH`,!0,f);const m=["vulnerable_withdraw"];return w.includes("fallback_receive")||m.push("fallback_receive"),{success:!0,message:`🚨 重入攻击成功！通过 ${y} 次递归调用，窃取了 ${A} ETH！`,hints:m,nextStep:"💡 观察攻击如何重复提款！👉 查看防护机制了解如何修复！",attackDetails:{count:y,stolen:A,history:E}}},C=g=>{const p="safeWithdraw20",f=r.value[g]||0;return f<=0?(t.addLog(20,"safeWithdraw","余额不足",!1,p),{success:!1,message:"❌ 余额不足，无法提款",hints:[],nextStep:""}):(o.value=!0,s.value===l?(o.value=!1,t.addLog(20,"safeWithdraw","重入调用被阻止",!1,p),{success:!1,message:"🔒 重入调用被阻止！Reentrant call blocked",hints:["reentrancy_guard"],nextStep:"✅ 攻击被阻止！👉 查看代码对比巩固知识！",blocked:!0}):(s.value=l,r.value[g]=0,n.value-=f,s.value=c,t.addLog(20,"safeWithdraw",`安全提款成功！提取${f}ETH`,!0,p),o.value=!1,{success:!0,message:`✅ 安全提款成功！提取了 ${f} ETH（重入锁保护）`,hints:["reentrancy_guard"],nextStep:"✅ 攻击被阻止！👉 查看代码对比巩固知识！"}))},_=()=>{i.value=0,a.value=0,o.value=!1,u.value=[],s.value=c},D=()=>(n.value=10,r.value={"0xAttacker":1,"0xUserA":5,"0xUserB":3},_(),t.addLog(20,"reset","重置金库状态",!0,null),{success:!0,message:"✅ 金库状态已重置",hints:[],nextStep:""}),S=()=>({balance:n.value,userBalances:{...r.value},reentrancyStatus:s.value===l?"🔒 已锁定":"🔓 未锁定",isLocked:s.value===l}),v=I(()=>({gasUsage:t.getDayGasUsage(20),ethCost:t.getDayEthCost(20),operationCount:t.getDayOperationCount(20)}));return{vaultBalance:n,userBalances:r,reentrancyStatus:s,attackCount:i,stolenAmount:a,isAttacking:o,attackHistory:u,_NOT_ENTERED:c,_ENTERED:l,deposit:b,vulnerableWithdraw:h,safeWithdraw:C,resetAttack:_,resetVault:D,getVaultStatus:S,getUserBalance:d,realtimeData:v}}function $g(){const t=pe(),e=O([]),n=O(1),r=O({}),s=O({}),i=O({}),a=O({}),o=O({}),u=O(null),c=O({to:"",uri:""}),l=O({to:""}),d=O({to:""}),b=O({operator:"",approved:!0}),h=O({address:""}),C=O(""),_=O(!1),D=(x,B=!1)=>{C.value=x,_.value=B,setTimeout(()=>{C.value=""},3e3)},S=(x,B)=>{if(!x||!B)return D("请输入接收地址和元数据URI",!0),{success:!1,message:"请输入接收地址和元数据URI"};const M=n.value;return n.value++,r.value[M]=x,s.value[x]=(s.value[x]||0)+1,o.value[M]=B,e.value.push({tokenId:M,owner:x,uri:B}),t.addLog(21,"铸造NFT",`Token ID: ${M} 接收者: ${x}`,"mint21"),D(`🎉 NFT铸造成功！Token ID: ${M}`),{success:!0,message:`NFT铸造成功！Token ID: ${M}`,hints:["铸造函数从0地址创建新NFT","Token ID计数器自动递增"],nextStep:"查询地址余额了解持有情况"}},v=x=>{if(!x)return D("请输入查询地址",!0),{success:!1,message:"请输入查询地址"};const B=s.value[x]||0;return t.addLog(21,"查询余额",`地址: ${x} 持有: ${B} 个NFT`,"balanceOf21"),D(`✅ 查询成功！${x.slice(0,10)}... 持有 ${B} 个NFT`),{success:!0,message:`地址 ${x.slice(0,10)}... 持有 ${B} 个NFT`,balance:B,hints:["balanceOf使用_balances映射存储","映射查询时间复杂度为O(1)"],nextStep:'👉 1.在画廊点击NFT选中 → 2.切换到"授权"标签 → 3.输入授权地址 → 4.点击批准授权！'}},g=x=>{const B=r.value[x];return B?{success:!0,owner:B}:(D("Token不存在",!0),{success:!1,message:"Token不存在"})},p=(x,B,M)=>{if(!B)return D("请输入目标地址",!0),{success:!1,message:"请输入目标地址"};const q=r.value[M];if(!q)return D("Token不存在",!0),{success:!1,message:"Token不存在"};if(q!==x)return D("你不是该NFT的所有者",!0),{success:!1,message:"你不是该NFT的所有者"};delete i.value[M],s.value[x]=(s.value[x]||0)-1,s.value[B]=(s.value[B]||0)+1,r.value[M]=B;const F=e.value.find(P=>P.tokenId===M);return F&&(F.owner=B),t.addLog(21,"转移NFT",`Token #${M} 从 ${x.slice(0,10)}... 到 ${B.slice(0,10)}...`,"transferFrom21"),D(`✅ NFT转移成功！Token #${M} 已转移到 ${B.slice(0,10)}...`),{success:!0,message:`NFT转移成功！Token #${M}`,hints:["transferFrom需要事先授权或自己是所有者","转移后清除原有授权"],nextStep:"尝试授权其他地址管理你的NFT"}},f=(x,B,M)=>{if(!B)return D("请输入目标地址",!0),{success:!1,message:"请输入目标地址"};if(B.length>20&&!(Math.random()>.3))return D("❌ 接收方合约不支持ERC721！转移被拒绝。",!0),{success:!1,message:"接收方合约不支持ERC721"};const F=p(x,B,M);return F.success?(t.addLog(21,"安全转移NFT",`Token #${M} 从 ${x.slice(0,10)}... 到 ${B.slice(0,10)}...`,"safeTransferFrom21"),D("🔒 安全转移完成！接收方支持ERC721！"),{success:!0,message:"安全转移成功！",hints:["safeTransferFrom检查接收方是否实现IERC721Receiver","防止代币被锁定在不支持的合约中"],nextStep:"尝试授权功能"}):F},w=(x,B)=>x?r.value[B]?(i.value[B]=x,t.addLog(21,"授权NFT",`Token #${B} 授权给 ${x.slice(0,10)}...`,"approve21"),D(`🔑 授权成功！Token #${B} 已授权给 ${x.slice(0,10)}...`),{success:!0,message:`授权成功！Token #${B}`,hints:["approve授权单个代币","被授权地址可以转移该代币"],nextStep:"尝试设置操作员授权"}):(D("Token不存在",!0),{success:!1,message:"Token不存在"}):(D("请输入授权地址",!0),{success:!1,message:"请输入授权地址"}),k=x=>({success:!0,approved:i.value[x]||""}),A=(x,B)=>x?(a.value.currentUser||(a.value.currentUser={}),a.value.currentUser[x]=B,t.addLog(21,"操作员授权",`${x.slice(0,10)}... ${B?"已授权":"已取消"}`,"setApprovalForAll21"),D(`${B?"✅":"❌"} 操作员授权${B?"已设置":"已取消"}！${x.slice(0,10)}...`),{success:!0,message:`操作员授权${B?"已设置":"已取消"}`,hints:["setApprovalForAll授权/取消操作员","操作员可以管理所有代币"],nextStep:"查看所有权追踪"}):(D("请输入操作员地址",!0),{success:!1,message:"请输入操作员地址"}),y=(x,B)=>{var M;return((M=a.value[x])==null?void 0:M[B])||!1},E=x=>e.value.filter(B=>B.owner===x),m=I(()=>({gasUsage:t.getDayGasUsage(21),ethCost:t.getDayEthCost(21),operationCount:t.getDayOperationCount(21)}));return{nfts:e,tokenIdCounter:n,owners:r,balances:s,tokenApprovals:i,operatorApprovals:a,tokenURIs:o,selectedTokenId:u,mintForm:c,transferForm:l,approveForm:d,operatorForm:b,queryForm:h,message:C,isError:_,showMessage:D,mintNFT:S,balanceOf:v,ownerOf:g,transferFrom:p,safeTransferFrom:f,approve:w,getApproved:k,setApprovalForAll:A,isApprovedForAll:y,getTokensByOwner:E,realtimeData:m}}function qg(){const t=pe(),e=O("CLOSED"),n=O([]),r=O(""),s=O(0),i=O(0),a=O([]),o=O(0),u=O("player"),c=O({address:""}),l=O(""),d=O(!1),b=(f,w=!1)=>{l.value=f,d.value=w,setTimeout(()=>{l.value=""},3e3)},h=(f,w,k)=>{const A=new Date,y=`${A.getHours().toString().padStart(2,"0")}:${A.getMinutes().toString().padStart(2,"0")}:${A.getSeconds().toString().padStart(2,"0")}`;a.value.unshift({type:f,icon:w,message:k,time:y}),a.value.length>20&&(a.value=a.value.slice(0,20))},C=f=>{u.value=f},_=()=>e.value!=="CLOSED"?(b("彩票当前不是关闭状态，无法开启",!0),{success:!1,message:"彩票当前不是关闭状态"}):(e.value="OPEN",n.value=[],r.value="",o.value=0,t.addLog(22,"开启彩票","彩票已开启，玩家可以参与","startLottery22"),h("lottery-started","🚀","彩票已开启"),b("🚀 彩票已开启！玩家现在可以参与！"),{success:!0,message:"彩票已开启",hints:["startLottery() 仅 Owner 可调用","将状态从 CLOSED 改为 OPEN"],nextStep:"切换到 Player 角色参与彩票"}),D=f=>f?e.value!=="OPEN"?(b("彩票未开放，无法参与",!0),{success:!1,message:"彩票未开放"}):n.value.includes(f)?(b("该地址已经参与过了",!0),{success:!1,message:"地址已参与"}):(n.value.push(f),s.value+=.01,t.addLog(22,"参与彩票",`地址: ${f.slice(0,10)}... 支付: 0.01 ETH`,"enter22"),h("player-entered","🎫",`玩家 ${f.slice(0,10)}... 参与彩票`),b(`🎫 参与成功！${f.slice(0,10)}... 已加入彩票`),{success:!0,message:"参与成功",hints:["enter() 是 payable 函数","需要支付至少 entryFee (0.01 ETH)"],nextStep:"点击查看参与者列表了解动态数组"}):(b("请输入参与地址",!0),{success:!1,message:"请输入参与地址"}),S=()=>e.value!=="OPEN"?(b("彩票未开放，无法结束",!0),{success:!1,message:"彩票未开放"}):n.value.length===0?(b("没有参与者，无法结束",!0),{success:!1,message:"没有参与者"}):(e.value="CALCULATING",o.value=1,t.addLog(22,"结束彩票","彩票已结束，请求随机数","endLottery22"),h("lottery-ended","🏁","彩票结束，等待 VRF 回调"),b("🏁 彩票已结束！等待 VRF 随机数..."),{success:!0,message:"彩票已结束，请求随机数",hints:["endLottery() 向 VRF 协调器请求随机数","状态变为 CALCULATING"],nextStep:"点击「触发 VRF 回调」模拟 Chainlink VRF 返回随机数"}),v=()=>{if(e.value!=="CALCULATING")return b("彩票不在计算状态",!0),{success:!1,message:"彩票不在计算状态"};o.value=2;const f=[g()],w=f[0]%n.value.length,k=n.value[w];return i.value=s.value,o.value=3,r.value=k,t.addLog(22,"VRF回调",`随机数: ${f[0]} 获胜者: ${k.slice(0,10)}...`,"fulfillRandomWords22"),h("winner-picked","🏆",`获胜者: ${k.slice(0,10)}... 赢得 ${i.value} ETH`),setTimeout(()=>{e.value="CLOSED",n.value=[],s.value=0,o.value=0},3e3),b(`🏆 获胜者选出！${k.slice(0,10)}... 赢得 ${i.value} ETH`),{success:!0,message:`获胜者: ${k}`,hints:["randomWords[0] % players.length 计算获胜者索引","使用 call{value: ...} 发送奖金"],nextStep:"点击查看获胜者详情了解奖金发放机制"}},g=()=>Math.floor(Math.random()*1e6),p=I(()=>({gasUsage:t.getDayGasUsage(22),ethCost:t.getDayEthCost(22),operationCount:t.getDayOperationCount(22)}));return{lotteryState:e,players:n,recentWinner:r,contractBalance:s,lastPrizeAmount:i,events:a,vrfStep:o,currentRole:u,enterForm:c,message:l,isError:d,showMessage:b,toggleRole:C,startLottery:_,enter:D,endLottery:S,fulfillRandomWords:v,realtimeData:p}}function Mg(){const t=pe(),e=Be(),n=O(10),r=O(0),s=O(0),i=O(0),a=O(Date.now()),o=500,u=7500,c=O(0),l=O([]),d=I(()=>{if(i.value===0)return 0;const m=(Date.now()-a.value)/1e3;return i.value*o*m/(1e4*365*24*60*60)}),b=I(()=>i.value+d.value),h=I(()=>s.value*u/1e4),C=I(()=>{const m=h.value-b.value;return m>0?m:0}),_=I(()=>b.value===0?999:s.value/b.value),D=I(()=>{const m=_.value;return m>=1.5?{status:"safe",label:"安全",color:"#22c55e",icon:"🟢"}:m>=1?{status:"warning",label:"警告",color:"#eab308",icon:"🟡"}:{status:"danger",label:"危险",color:"#ef4444",icon:"🔴"}}),S=(m,x)=>{const B=new Date().toLocaleTimeString("zh-CN",{hour12:!1});l.value.unshift({timestamp:B,eventType:m,details:x}),l.value.length>20&&(l.value=l.value.slice(0,20))},v=m=>e.isConceptUnlocked(23,m)?!1:(e.unlockConcept(23,m),!0),g=m=>{var M;const x=((M=e.getDayProgress(23))==null?void 0:M.unlockedConcepts)||[];return x.length>=7&&!x.includes("lending_security")&&v("lending_security")&&m.push("lending_security"),m},p=m=>{if(m<=0)return{success:!1,message:"存款金额必须大于0"};if(m>n.value)return{success:!1,message:"钱包余额不足"};n.value-=m,r.value+=m,c.value+=m,t.addLog(23,"存款",`存入 ${m} ETH`,rt.deposit23||35e3),S("Deposit",`存入 ${m} ETH`);const x=["lending_pool"];return g(x),{success:!0,message:`✅ 成功存入 ${m} ETH`,hints:x,nextStep:"📍 切换到「🏦 抵押」标签页存入抵押品！"}},f=m=>m<=0?{success:!1,message:"取款金额必须大于0"}:m>r.value?{success:!1,message:"存款余额不足"}:(r.value-=m,n.value+=m,c.value-=m,t.addLog(23,"取款",`取出 ${m} ETH`,rt.withdraw23||35e3),S("Withdraw",`取出 ${m} ETH`),{success:!0,message:`✅ 成功取出 ${m} ETH`,hints:[],nextStep:"👉 继续探索其他功能！"}),w=m=>{if(m<=0)return{success:!1,message:"抵押金额必须大于0"};if(m>n.value)return{success:!1,message:"钱包余额不足"};n.value-=m,s.value+=m,t.addLog(23,"存入抵押",`存入 ${m} ETH 作为抵押品`,rt.depositCollateral23||45e3),S("CollateralDeposited",`存入 ${m} ETH 作为抵押品`);const x=["collateral_deposit"];return g(x),{success:!0,message:`✅ 成功存入 ${m} ETH 作为抵押品`,hints:x,nextStep:"📍 切换到「💸 借款」标签页尝试借款！"}},k=m=>{if(m<=0)return{success:!1,message:"取款金额必须大于0"};if(m>s.value)return{success:!1,message:"抵押品余额不足"};const x=b.value*1e4/u;return s.value-m<x?{success:!1,message:"❌ 取出后将低于最低抵押率要求，请先还款或减少取款金额"}:(s.value-=m,n.value+=m,t.addLog(23,"取出抵押",`取出 ${m} ETH 抵押品`,rt.withdrawCollateral23||35e3),S("CollateralWithdrawn",`取出 ${m} ETH 抵押品`),{success:!0,message:`✅ 成功取出 ${m} ETH 抵押品`,hints:[],nextStep:"👉 继续管理你的抵押品！"})},A=m=>{if(m<=0)return{success:!1,message:"借款金额必须大于0"};if(m>c.value)return{success:!1,message:"合约流动性不足"};if(b.value+m>h.value)return{success:!1,message:`❌ 超出最大可借额度。当前可借: ${C.value.toFixed(4)} ETH`};d.value,i.value=b.value+m,a.value=Date.now(),c.value-=m,n.value+=m,t.addLog(23,"借款",`借出 ${m} ETH`,rt.borrow23||45e3),S("Borrow",`借出 ${m} ETH`);const x=["borrow_mechanism"];return x.push("health_factor"),b.value/(s.value||1)>.3&&x.push("liquidation_threshold"),g(x),{success:!0,message:`✅ 成功借出 ${m} ETH`,hints:x,nextStep:"📍 查看健康因子变化！当健康因子低于1时会被清算。点击「💸 借款」标签页内的「✅ 还款」偿还债务！"}},y=m=>{if(m<=0)return{success:!1,message:"还款金额必须大于0"};if(b.value===0)return{success:!1,message:"没有债务需要偿还"};if(m>n.value)return{success:!1,message:"钱包余额不足"};const x=b.value;let B=m,M=0;m>x&&(M=m-x,B=x),n.value-=m,i.value=x-B,a.value=Date.now(),c.value+=B,M>0&&(n.value+=M),t.addLog(23,"还款",`偿还 ${B.toFixed(6)} ETH${M>0?`，退款 ${M.toFixed(6)} ETH`:""}`,rt.repay23||4e4),S("Repay",`偿还 ${B.toFixed(6)} ETH`);const q=["interest_calculation","repay_function"];return g(q),{success:!0,message:`✅ 成功偿还 ${B.toFixed(6)} ETH${M>0?`，退款 ${M.toFixed(6)} ETH`:""}`,hints:q,nextStep:"📍 还款成功！健康因子已提升。继续借款体验清算机制，或查看完整代码了解借贷安全！"}},E=I(()=>{const m=t.getDayLogs(23),x=m.length,B=m.reduce((q,F)=>q+(F.gasUsed||0),0),M=m.reduce((q,F)=>q+(F.ethCost||0),0);return{operationCount:x,gasUsage:B,ethCost:M,walletBalance:n.value,depositBalance:r.value,collateralBalance:s.value,borrowBalance:i.value,currentDebt:b.value,maxBorrowAmount:h.value,healthFactor:_.value,contractLiquidity:c.value}});return{walletBalance:n,depositBalance:r,collateralBalance:s,borrowBalance:i,lastInterestAccrualTime:a,contractLiquidity:c,eventLogs:l,accruedInterest:d,currentDebt:b,maxBorrowAmount:h,remainingBorrowAmount:C,healthFactor:_,healthStatus:D,deposit:p,withdraw:f,depositCollateral:w,withdrawCollateral:k,borrow:A,repay:y,realtimeData:E}}function Ug(){const t=Be(),e=pe(),n=O("AWAITING_PAYMENT"),r=O("buyer"),s={buyer:"0xBuyer"+Math.random().toString(36).substring(2,10),seller:"0xSeller"+Math.random().toString(36).substring(2,10),arbiter:"0xArbiter"+Math.random().toString(36).substring(2,10)},i=O({buyerWallet:5,sellerWallet:2,escrowAmount:0,arbiterWallet:1}),a=O({amount:0,depositTime:null,deliveryTimeout:60,isDisputed:!1}),o=O([]),u=I(()=>{var k;return((k=t.getDayProgress(24))==null?void 0:k.unlockedConcepts)||[]}),c=I(()=>{if(n.value!=="AWAITING_DELIVERY")return 0;const k=(Date.now()-a.value.depositTime)/1e3;return Math.max(0,a.value.deliveryTimeout-k)}),l=I(()=>c.value===0),d=I(()=>{const k=t.getDayProgress(24);return!k||k.totalConcepts===0?0:Math.round(k.unlockedConcepts.length/k.totalConcepts*100)}),b=I(()=>({gasUsage:e.getDayGasUsage(24),ethCost:e.getDayEthCost(24),operationCount:e.getDayOperationCount(24)})),h=k=>u.value.includes(k)?!1:(t.unlockConcept(24,k),!0),C=k=>(u.value.length>=7&&!u.value.includes("state_management")&&h("state_management")&&k.push("state_management"),k);return{escrowState:n,currentRole:r,addresses:s,funds:i,escrowInfo:a,eventLog:o,unlockedConcepts:u,timeLeft:c,isTimeout:l,progressPercentage:d,realtimeData:b,deposit:k=>{const A=[];return i.value.buyerWallet-=k,i.value.escrowAmount=k,a.value.amount=k,a.value.depositTime=Date.now(),n.value="AWAITING_DELIVERY",o.value.unshift({type:"PaymentDeposited",buyer:s.buyer,amount:k,timestamp:new Date().toLocaleString()}),e.addLog(24,"存款",`存款 ${k} ETH`,"deposit24"),h("escrow_contract")&&A.push("escrow_contract"),C(A),{success:!0,message:"✅ 存款成功！🎉 恭喜解锁：托管合约！👉 点击「⏱️ 超时倒计时」区域学习区块时间戳！",hints:A,nextStep:"📝 你了解了托管合约！PaymentDeposited事件记录了买家存款。👉 点击「⏱️ 超时倒计时」区域学习区块时间戳！"}},confirmDelivery:()=>{const k=[],A=a.value.amount;return i.value.escrowAmount=0,i.value.sellerWallet+=A,n.value="COMPLETE",o.value.unshift({type:"DeliveryConfirmed",buyer:s.buyer,seller:s.seller,amount:A,timestamp:new Date().toLocaleString()}),e.addLog(24,"确认收货",`确认收货，转账 ${A} ETH`,"confirmDelivery24"),h("buyer_seller_arbitration")&&k.push("buyer_seller_arbitration"),C(k),{success:!0,message:"✅ 确认收货成功！🎉 恭喜解锁：买卖仲裁！👉 点击「🛡️ 安全防护」区域学习receive与revert！",hints:k,nextStep:"💸 你了解了买卖仲裁！合约使用call将资金发送给卖家。👉 点击「🛡️ 安全防护」区域学习receive与revert！"}},raiseDispute:()=>{var y;const k=[];return n.value="DISPUTED",a.value.isDisputed=!0,(((y=t.getDayProgress(24))==null?void 0:y.unlockedConcepts)||[]).includes("dispute_resolution")||k.push("dispute_resolution"),o.value.unshift({type:"DisputeRaised",initiator:r.value==="buyer"?s.buyer:s.seller,timestamp:new Date().toLocaleString()}),e.addLog(24,"发起争议","发起争议，等待仲裁","raiseDispute24"),C(k),{success:!0,message:"⚠️ 争议已发起！等待仲裁者裁决。",hints:k,nextStep:"⚖️ 争议已发起！现在只有仲裁者可以resolveDispute()解决争议。"}},resolveDispute:k=>{var x;const A=[],y=a.value.amount,E=k?"seller":"buyer";return i.value.escrowAmount=0,i.value[E+"Wallet"]+=y,n.value="COMPLETE",(((x=t.getDayProgress(24))==null?void 0:x.unlockedConcepts)||[]).includes("multi_party_security")||A.push("multi_party_security"),o.value.unshift({type:"DisputeResolved",arbiter:s.arbiter,recipient:s[E],amount:y,timestamp:new Date().toLocaleString()}),e.addLog(24,"仲裁裁决",`仲裁裁决，资金${k?"给卖家":"退买家"}`,"resolveDispute24"),C(A),{success:!0,message:`⚖️ 仲裁完成！资金已${k?"释放给卖家":"退回买家"}。`,hints:A,nextStep:"🔐 仲裁完成！多方安全机制保护了所有参与者的利益。"}},cancelAfterTimeout:()=>{var E;const k=[],A=a.value.amount;return i.value.escrowAmount=0,i.value.buyerWallet+=A,n.value="CANCELLED",(((E=t.getDayProgress(24))==null?void 0:E.unlockedConcepts)||[]).includes("time_locked_release")||k.push("time_locked_release"),o.value.unshift({type:"EscrowCancelled",initiator:s.buyer,reason:"timeout",timestamp:new Date().toLocaleString()}),e.addLog(24,"超时取消","超时取消，资金退回买家","cancelAfterTimeout24"),C(k),{success:!0,message:"⏱️ 超时取消成功！资金已退回买家。",hints:k,nextStep:"⏱️ 超时保护机制保护了买家权益！时间锁释放确保资金安全退回。"}},cancelMutual:()=>{var y;const k=[];if(n.value==="AWAITING_DELIVERY"){const E=a.value.amount;i.value.escrowAmount=0,i.value.buyerWallet+=E}return n.value="CANCELLED",o.value.unshift({type:"EscrowCancelled",initiator:r.value==="buyer"?s.buyer:s.seller,reason:"mutual",timestamp:new Date().toLocaleString()}),e.addLog(24,"协商取消","双方协商取消交易","cancelMutual24"),(((y=t.getDayProgress(24))==null?void 0:y.unlockedConcepts)||[]).includes("mutual_cancellation")||k.push("mutual_cancellation"),C(k),{success:!0,message:"❌ 协商取消成功！交易已取消。",hints:k,nextStep:"🤝 双方协商取消了交易。这展示了托管合约的灵活性！"}},switchRole:k=>{var m;r.value=k;const A=[];k==="arbiter"&&((((m=t.getDayProgress(24))==null?void 0:m.unlockedConcepts)||[]).includes("arbiter_role")||A.push("arbiter_role"));const y={buyer:"买家",seller:"卖家",arbiter:"仲裁者"},E={buyer:"🎭 已切换到买家身份！👉 点击「💰 存款 / Deposit」按钮存入ETH，体验托管流程！",seller:"🎭 已切换到卖家身份！等待买家确认收货后资金将转入你的钱包。",arbiter:"🎭 已切换到仲裁者身份！当发生争议时，你可以裁决资金归属。"};return C(A),{success:!0,message:`🎭 已切换到 ${y[k]}！`,hints:A,nextStep:E[k]}},resetEscrow:()=>{n.value="AWAITING_PAYMENT",i.value={buyerWallet:5,sellerWallet:2,escrowAmount:0,arbiterWallet:1},a.value={amount:0,depositTime:null,deliveryTimeout:60,isDisputed:!1},o.value=[]}}}function Vg(){const t=Be(),e=pe(),n=O(0),r=O(0),s=O(0),i=O({tokenA:1e3,tokenB:1e3,lpToken:0}),a=O([]),o=I(()=>r.value===0?0:n.value/r.value),u=S=>{if(S<=0)return 0;if(S<=3)return 1;let v=S,g=Math.floor(S/2)+1;for(;g<v;)v=g,g=Math.floor((Math.floor(S/g)+g)/2);return v},c=(S,v)=>S<v?S:v,l=(S,v)=>{var k;const g=[];let p="";if(S<=0||v<=0)return{success:!1,message:"❌ 添加数量必须大于 0"};if(i.value.tokenA<S||i.value.tokenB<v)return{success:!1,message:"❌ 余额不足"};let f;return s.value===0?f=u(S*v):f=c(Math.floor(S*s.value/n.value),Math.floor(v*s.value/r.value)),i.value.tokenA-=S,i.value.tokenB-=v,i.value.lpToken+=f,n.value+=S,r.value+=v,s.value+=f,a.value.unshift({type:"addLiquidity",amountA:S,amountB:v,liquidity:f,timestamp:Date.now()}),e.addLog(25,"添加流动性",`存入 ${S} Token A + ${v} Token B，获得 ${f.toFixed(2)} LP代币`,"addLiquidity25"),(((k=t.getDayProgress(25))==null?void 0:k.unlockedConcepts)||[]).includes("add_liquidity")||g.push("add_liquidity"),p="📍 向下滚动到「🔄 交易」区块进行代币交换！",{success:!0,message:`✅ 成功添加流动性！获得 ${f.toFixed(2)} LP代币`,liquidity:f,hints:g,nextStep:p}},d=(S,v)=>{var A;const g=[];let p="";if(S<=0)return{success:!1,message:"❌ 交换数量必须大于 0"};if(i.value.tokenA<S)return{success:!1,message:"❌ Token A 余额不足"};if(n.value===0||r.value===0)return{success:!1,message:"❌ 流动性池为空，请先添加流动性"};const f=Math.floor(S*997/1e3),w=Math.floor(r.value*f/(n.value+f));return w<v?{success:!1,message:`❌ 滑点过高！预计获得 ${w.toFixed(4)} Token B，但设置的最小值为 ${v}`}:(i.value.tokenA-=S,i.value.tokenB+=w,n.value+=f,r.value-=w,a.value.unshift({type:"swap",direction:"A->B",amountIn:S,amountOut:w,timestamp:Date.now()}),e.addLog(25,"代币交换",`支付 ${S} Token A，获得 ${w.toFixed(4)} Token B`,"swapAforB25"),(((A=t.getDayProgress(25))==null?void 0:A.unlockedConcepts)||[]).includes("swap_mechanism")||g.push("swap_mechanism"),p="📍 继续交换查看滑点效果，或点击「➖ 移除流动性」取回代币！",{success:!0,message:`✅ 交换成功！支付 ${S} Token A，获得 ${w.toFixed(4)} Token B`,amountBOut:w,hints:g,nextStep:p})},b=(S,v)=>{var A;const g=[];let p="";if(S<=0)return{success:!1,message:"❌ 交换数量必须大于 0"};if(i.value.tokenB<S)return{success:!1,message:"❌ Token B 余额不足"};if(n.value===0||r.value===0)return{success:!1,message:"❌ 流动性池为空，请先添加流动性"};const f=Math.floor(S*997/1e3),w=Math.floor(n.value*f/(r.value+f));return w<v?{success:!1,message:`❌ 滑点过高！预计获得 ${w.toFixed(4)} Token A，但设置的最小值为 ${v}`}:(i.value.tokenB-=S,i.value.tokenA+=w,r.value+=f,n.value-=w,a.value.unshift({type:"swap",direction:"B->A",amountIn:S,amountOut:w,timestamp:Date.now()}),e.addLog(25,"代币交换",`支付 ${S} Token B，获得 ${w.toFixed(4)} Token A`,"swapBforA25"),(((A=t.getDayProgress(25))==null?void 0:A.unlockedConcepts)||[]).includes("swap_mechanism")||g.push("swap_mechanism"),p="📍 继续交换查看滑点效果，或点击「➖ 移除流动性」取回代币！",{success:!0,message:`✅ 交换成功！支付 ${S} Token B，获得 ${w.toFixed(4)} Token A`,amountAOut:w,hints:g,nextStep:p})},h=S=>{var k;const v=[];let g="";if(S<=0)return{success:!1,message:"❌ 移除数量必须大于 0"};if(i.value.lpToken<S)return{success:!1,message:"❌ LP代币余额不足"};if(s.value===0)return{success:!1,message:"❌ 流动性池为空"};const p=Math.floor(S*n.value/s.value),f=Math.floor(S*r.value/s.value);i.value.lpToken-=S,i.value.tokenA+=p,i.value.tokenB+=f,n.value-=p,r.value-=f,s.value-=S,a.value.unshift({type:"removeLiquidity",liquidity:S,amountAOut:p,amountBOut:f,timestamp:Date.now()}),e.addLog(25,"移除流动性",`销毁 ${S.toFixed(2)} LP代币，获得 ${p} Token A + ${f} Token B`,"removeLiquidity25");const w=((k=t.getDayProgress(25))==null?void 0:k.unlockedConcepts)||[];return w.includes("remove_liquidity")||v.push("remove_liquidity"),w.includes("reserves_management")||v.push("reserves_management"),g="🎉 移除流动性成功！👉 点击滑点保护说明了解安全防护机制！",{success:!0,message:`✅ 成功移除流动性！获得 ${p} Token A + ${f} Token B`,amountAOut:p,amountBOut:f,hints:v,nextStep:g}},C=(S,v,g)=>{if(S<=0||v===0||g===0)return 0;const p=Math.floor(S*997/1e3);return Math.floor(g*p/(v+p))},_=(S,v)=>S<=0||v===0?0:S/v*100,D=I(()=>({gasUsage:e.getDayGasUsage(25),ethCost:e.getDayEthCost(25),operationCount:e.getDayOperationCount(25)}));return{reserveA:n,reserveB:r,totalSupply:s,userBalances:i,transactions:a,currentPrice:o,realtimeData:D,addLiquidity:l,swapAforB:d,swapBforA:b,removeLiquidity:h,calculateSwapOutput:C,calculatePriceImpact:_}}function Hg(){const t=Be(),e=pe(),n=O([]),r=O(250),s=O("0xMarketplaceOwner..."),i=O(0),a=O({nftAddress:"",tokenId:null,price:null,royaltyReceiver:"",royaltyPercent:0}),o=O(null),u=O([{tokenId:1,nftAddress:"0xNFTContract1...",name:"CryptoArt #1"},{tokenId:2,nftAddress:"0xNFTContract1...",name:"CryptoArt #2"},{tokenId:3,nftAddress:"0xNFTContract2...",name:"GameItem #1"}]),c=O(""),l=O(!1),d=(g,p=!1)=>{c.value=g,l.value=p,setTimeout(()=>{c.value=""},3e3)},b=I(()=>n.value.filter(g=>g.isListed)),h=I(()=>{const g="0xCurrentUser...";return n.value.filter(p=>p.seller===g&&p.isListed)}),C=g=>{var A;const p=[];let f="";if(!g.nftAddress||!g.tokenId||!g.price)return d("❌ 请填写完整的挂单信息",!0),{success:!1,message:"请填写完整的挂单信息"};if(g.price<=0)return d("❌ 价格必须大于 0",!0),{success:!1,message:"价格必须大于 0"};if(g.royaltyPercent>10)return d("❌ 版税比例不能超过 10%",!0),{success:!1,message:"版税比例不能超过 10%"};const w={id:Date.now(),seller:"0xCurrentUser...",nftAddress:g.nftAddress,tokenId:g.tokenId,price:parseFloat(g.price),royaltyReceiver:g.royaltyReceiver||"0xCreator...",royaltyPercent:g.royaltyPercent*100,isListed:!0,createdAt:new Date};return n.value.push(w),e.addLog(26,"挂单NFT",`Token #${g.tokenId} 售价 ${g.price} ETH`,"listNFT26"),(((A=t.getDayProgress(26))==null?void 0:A.unlockedConcepts)||[]).includes("listing_mechanism")?d(`✅ 挂单成功！Token #${g.tokenId} 已在市场上出售`):(p.push("listing_mechanism"),d(`✅ 挂单成功！Token #${g.tokenId} 已在市场上出售
🎉 恭喜解锁：挂单机制！📍 切换到「🏪 购买」标签页体验购买流程！`)),f="📍 切换到「🏪 购买」标签页体验购买流程！",{success:!0,message:`挂单成功！Token #${g.tokenId} 售价 ${g.price} ETH`,listing:w,hints:p,nextStep:f}},_=g=>{var m;const p=[];let f="";if(!g||!g.isListed)return d("❌ 该NFT未在出售中",!0),{success:!1,message:"该NFT未在出售中"};const w=g.price*r.value/1e4,k=g.price*g.royaltyPercent/1e4,A=g.price-w-k;g.isListed=!1,g.buyer="0xCurrentUser...",i.value+=g.price,e.addLog(26,"购买NFT",`Token #${g.tokenId} 价格 ${g.price} ETH`,"buyNFT26");const y=((m=t.getDayProgress(26))==null?void 0:m.unlockedConcepts)||[],E=[];if(y.includes("buy_now_price")||(p.push("buy_now_price"),E.push("一口价")),y.includes("owner_revenue")||(p.push("owner_revenue"),E.push("卖家收益")),E.length>0){const x=E.join("、");d(`✅ 购买成功！Token #${g.tokenId} 已转移到你的账户
🎉 恭喜解锁：${x}！📍 切换到「❌ 取消」标签页学习如何取消挂单！`)}else d(`✅ 购买成功！Token #${g.tokenId} 已转移到你的账户`);return f="📍 切换到「❌ 取消」标签页学习如何取消挂单！",{success:!0,message:`购买成功！Token #${g.tokenId} 已转移`,feeAmount:w,royaltyAmount:k,sellerAmount:A,hints:p,nextStep:f}},D=g=>{var k;const p=[];let f="";return!g||!g.isListed?(d("❌ 该挂单不存在或已取消",!0),{success:!1,message:"该挂单不存在或已取消"}):(g.isListed=!1,e.addLog(26,"取消挂单",`Token #${g.tokenId}`,"cancelListing26"),(((k=t.getDayProgress(26))==null?void 0:k.unlockedConcepts)||[]).includes("cancel_listing")?d(`✅ 挂单已取消！Token #${g.tokenId} 不再出售`):(p.push("cancel_listing"),d(`✅ 挂单已取消！Token #${g.tokenId} 不再出售
🎉 恭喜解锁：取消挂单！🎉 Day26 所有概念已解锁！`)),f="🎉 Day26 所有概念已解锁！",{success:!0,message:`挂单已取消！Token #${g.tokenId}`,hints:p,nextStep:f})},S=(g,p)=>{if(!g||g<=0)return{feeAmount:0,royaltyAmount:0,sellerAmount:0};const f=g*r.value/1e4,w=g*p/1e4,k=g-f-w;return{feeAmount:f,royaltyAmount:w,sellerAmount:k}},v=I(()=>({gasUsage:e.getDayGasUsage(26),ethCost:e.getDayEthCost(26),operationCount:e.getDayOperationCount(26)}));return{listings:n,marketplaceFeePercent:r,feeRecipient:s,totalVolume:i,listForm:a,selectedListing:o,userNFTs:u,activeListings:b,myListings:h,message:c,isError:l,listNFT:C,buyNFT:_,cancelListing:D,calculateDistribution:S,showMessage:d,realtimeData:v}}function Wg(){const t=pe(),e=O(1e3),n=O(18),r=O(5e4),s=O(0),i=O({stakedAmount:0,rewardDebt:0,lastUpdate:Date.now()}),a=O({stake:5e3,reward:1e3}),o=O("staker"),u=O({amount:""}),c=O({amount:""}),l=O({amount:""}),d=O([]),b=O(""),h=O(!1),C=(E,m=!1)=>{b.value=E,h.value=m,setTimeout(()=>{b.value=""},3e3)},_=(E,m,x)=>{const B=new Date,M=`${B.getHours().toString().padStart(2,"0")}:${B.getMinutes().toString().padStart(2,"0")}:${B.getSeconds().toString().padStart(2,"0")}`;d.value.unshift({type:E,icon:m,message:x,time:M}),d.value.length>20&&(d.value=d.value.slice(0,20))},D=()=>{const E=Date.now(),m=Math.floor((E-i.value.lastUpdate)/1e3);if(m>0&&i.value.stakedAmount>0){const x=10**n.value,B=m*e.value*i.value.stakedAmount/x;i.value.rewardDebt+=B}i.value.lastUpdate=E},S=I(()=>{const E=Date.now(),m=Math.floor((E-i.value.lastUpdate)/1e3),x=10**n.value,B=m*e.value*i.value.stakedAmount/x;return i.value.rewardDebt+B}),v=E=>(o.value=E,E==="owner"?{success:!0,message:"👑 已切换到 Owner 身份！",nextStep:"📍 向下滚动到「👑 Owner 操作」区块，输入补充数量后点击「💰 补充奖励」按钮！"}:{success:!0,message:"👤 已切换到 Staker 身份！",nextStep:"📍 向下滚动到「🔄 质押操作」区块，在「💧 质押」标签页输入数量，然后点击「💧 质押代币」按钮！"}),g=E=>{const m=parseFloat(E);return!m||m<=0?(C("请输入有效的质押数量",!0),{success:!1,message:"无效的质押数量"}):a.value.stake<m?(C("STAKE 余额不足",!0),{success:!1,message:"余额不足"}):(D(),i.value.stakedAmount+=m,a.value.stake-=m,s.value+=m,t.addLog(27,"质押代币",`质押 ${m} STAKE`,"stake27"),_("staked","💧",`质押 ${m} STAKE`),C(`💧 质押成功！质押 ${m} STAKE`),{success:!0,message:`质押 ${m} STAKE 成功`,hints:["stake_function"],nextStep:'⏱️ 奖励正在实时累积中，点击"快进"按钮加速查看效果！'})},p=E=>{const m=parseFloat(E);return!m||m<=0?(C("请输入有效的取消质押数量",!0),{success:!1,message:"无效的取消质押数量"}):i.value.stakedAmount<m?(C("质押数量不足",!0),{success:!1,message:"质押数量不足"}):(D(),i.value.stakedAmount-=m,a.value.stake+=m,s.value-=m,t.addLog(27,"取消质押",`取消质押 ${m} STAKE`,"unstake27"),_("unstaked","💸",`取消质押 ${m} STAKE`),C(`💸 取消质押成功！取回 ${m} STAKE`),{success:!0,message:`取消质押 ${m} STAKE 成功`,hints:["unstake_function"],nextStep:"👉 点击安全防护区了解重入保护！"})},f=()=>{D();const E=i.value.rewardDebt;return E<=0?(C("没有可领取的奖励",!0),{success:!1,message:"没有可领取的奖励"}):r.value<E?(C("奖励池余额不足",!0),{success:!1,message:"奖励池余额不足"}):(i.value.rewardDebt=0,a.value.reward+=E,r.value-=E,t.addLog(27,"领取奖励",`领取 ${E.toFixed(4)} REWARD`,"claimRewards27"),_("reward_claimed","🎁",`领取 ${E.toFixed(4)} REWARD`),C(`🎁 奖励领取成功！获得 ${E.toFixed(4)} REWARD`),{success:!0,message:`领取 ${E.toFixed(4)} REWARD 成功`,hints:["claim_rewards"],nextStep:"👉 尝试取消质押部分代币！"})},w=()=>{const E=i.value.stakedAmount;if(E<=0)return C("没有可提取的质押",!0),{success:!1,message:"没有可提取的质押"};const m=i.value.rewardDebt;return i.value.stakedAmount=0,i.value.rewardDebt=0,i.value.lastUpdate=Date.now(),a.value.stake+=E,s.value-=E,t.addLog(27,"紧急提取",`紧急提取 ${E} STAKE，放弃 ${m.toFixed(4)} REWARD 奖励`,"emergencyWithdraw27"),_("emergency_withdraw","🚨",`紧急提取 ${E} STAKE，放弃奖励`),C(`🚨 紧急提取成功！取回 ${E} STAKE，放弃 ${m.toFixed(4)} REWARD 奖励`),{success:!0,message:`紧急提取 ${E} STAKE 成功`,hints:["emergency_withdraw"],nextStep:"🎉 恭喜完成 Day 27 学习！所有知识点已解锁！"}},k=E=>{const m=parseFloat(E);return!m||m<=0?(C("请输入有效的补充数量",!0),{success:!1,message:"无效的补充数量"}):(r.value+=m,t.addLog(27,"补充奖励",`补充 ${m} REWARD 到奖励池`,"refillRewards27"),_("reward_refilled","💰",`Owner 补充 ${m} REWARD 到奖励池`),C(`💰 奖励池已补充 ${m} REWARD`),{success:!0,message:`补充 ${m} REWARD 成功`,hints:[],nextStep:"👉 切换到 Staker 角色参与质押！"})},A=E=>{const m=E*3600*1e3;return i.value.lastUpdate-=m,C(`⏩ 时间快进${E}小时！奖励已累积！`),{success:!0,message:`⏩ 时间快进${E}小时！`,nextStep:"⏱️ 看到奖励增长了吗？这就是时间加权的魅力！📍 向下滚动到「🔄 质押操作」区，点击「🎁 领取奖励」标签页，然后点击「🎁 领取奖励」按钮！"}},y=I(()=>({gasUsage:t.getDayGasUsage(27),ethCost:t.getDayEthCost(27),operationCount:t.getDayOperationCount(27)}));return{rewardRatePerSecond:e,stakingTokenDecimals:n,rewardPoolBalance:r,totalStaked:s,stakerInfo:i,walletBalances:a,currentRole:o,stakeForm:u,unstakeForm:c,refillForm:l,events:d,message:b,isError:h,pendingRewards:S,realtimeData:y,showMessage:C,toggleRole:v,stake:g,unstake:p,claimRewards:f,emergencyWithdraw:w,refillRewards:k,fastForwardTime:A,updateRewards:D}}function zg(){const t=pe(),e=O("TokenHolder"),n=O(Date.now()),r=O(""),s=O(!1);let i=null;const a=(L,N=!1)=>{r.value=L,s.value=N,i&&clearTimeout(i),i=setTimeout(()=>{r.value="",s.value=!1},3e3)},o=O([{id:1,description:"升级协议版本",state:"Active",deadline:Date.now()+2*24*60*60*1e3,votesFor:3e4,votesAgainst:1e4,executionTime:null,executed:!1,proposer:"0x1234...5678",hasVoted:{}},{id:2,description:"调整手续费",state:"Queued",deadline:Date.now()-24*60*60*1e3,votesFor:45e3,votesAgainst:5e3,executionTime:Date.now()+1*24*60*60*1e3,executed:!1,proposer:"0xabcd...ef01",hasVoted:{}}]),u=O([]),c=O({balance:5e3,totalSupply:1e5,votingPower:5e3}),l=O(2),d=O(""),b=O(""),h=O(""),C=O(1),_=I(()=>o.value.filter(L=>L.state==="Active")),D=I(()=>o.value.filter(L=>L.state==="Queued")),S=I(()=>o.value.filter(L=>L.state==="Active"&&n.value>=L.deadline)),v=I(()=>o.value.filter(L=>L.state==="Queued"&&n.value>=L.executionTime&&!L.executed)),g=I(()=>o.value.find(L=>L.id===C.value)),p=I(()=>{const L=g.value;return L?L.state:"Unknown"}),f=I(()=>{const L=g.value;return L?L.state==="Active"&&n.value<L.deadline&&!L.hasVoted.currentUser&&c.value.votingPower>0:!1}),w=I(()=>{const L=g.value;return L?L.state==="Active"&&n.value>=L.deadline&&!L.executed:!1}),k=I(()=>{const L=g.value;return L?L.state==="Queued"&&n.value>=L.executionTime&&!L.executed:!1}),A=L=>(e.value=L,{success:!0,message:`已切换到 ${L} 角色`,hints:[],nextStep:y(L)}),y=L=>({TokenHolder:"👉 选择提案并投票！",Proposer:"👉 创建一个新提案！",Executor:"👉 最终确定或执行提案！"})[L]||"",E=L=>{const N=L*24*60*60*1e3;return n.value+=N,o.value.forEach(U=>{U.state==="Active"&&n.value>=U.deadline}),{success:!0,message:`⏩ 时间快进 ${L} 天！`,hints:[],nextStep:"👉 查看提案状态变化！"}},m=(L,N,U)=>{if(!L||!N)return{success:!1,message:"❌ 请填写完整的提案信息",hints:[],nextStep:""};if(c.value.balance<100)return{success:!1,message:"❌ 余额不足，需要100 GOVERN作为押金",hints:[],nextStep:""};l.value++;const K={id:l.value,description:L,state:"Active",deadline:n.value+3*24*60*60*1e3,votesFor:0,votesAgainst:0,executionTime:null,executed:!1,proposer:"currentUser",hasVoted:{},target:N,data:U};return o.value.push(K),c.value.balance-=100,t.addLog(28,"创建提案",`提案 #${K.id}: ${L}`,"createProposal28"),{success:!0,message:`📝 提案 #${K.id} 创建成功！`,hints:["proposal_struct"],nextStep:"👉 切换到 TokenHolder 角色参与投票！"}},x=(L,N)=>{const U=o.value.find(ne=>ne.id===L);if(!U)return{success:!1,message:"❌ 提案不存在",hints:[],nextStep:""};if(U.state!=="Active")return{success:!1,message:"❌ 提案不在投票期",hints:[],nextStep:""};if(n.value>=U.deadline)return{success:!1,message:"❌ 投票期已结束",hints:[],nextStep:""};if(U.hasVoted.currentUser)return{success:!1,message:"❌ 您已经投过票了",hints:[],nextStep:""};if(c.value.votingPower<=0)return{success:!1,message:"❌ 您没有投票权",hints:[],nextStep:""};const K=c.value.votingPower;return U.hasVoted.currentUser=!0,N?U.votesFor+=K:U.votesAgainst+=K,t.addLog(28,"投票",`提案 #${L}: ${N?"赞成":"反对"} (${K}票)`,"vote28"),{success:!0,message:`🗳️ 投票成功！${N?"赞成":"反对"} ${K} 票`,hints:["voting_function"],nextStep:"👉 等待投票结束或切换到 Executor 角色！"}},B=L=>{const N=o.value.find(ne=>ne.id===L);if(!N)return{success:!1,message:"❌ 提案不存在",hints:[],nextStep:""};if(n.value<N.deadline)return{success:!1,message:"❌ 投票期尚未结束",hints:[],nextStep:"👉 使用快进时间功能加速！"};if(N.executed)return{success:!1,message:"❌ 提案已执行",hints:[],nextStep:""};const U=N.votesFor+N.votesAgainst,K=c.value.totalSupply*10/100;return U<K?(N.state="Defeated",{success:!1,message:"❌ 未达到法定人数，提案被否决",hints:[],nextStep:""}):N.votesFor<=N.votesAgainst?(N.state="Defeated",{success:!1,message:"❌ 赞成票未超过反对票，提案被否决",hints:[],nextStep:""}):(N.state="Queued",N.executionTime=n.value+2*24*60*60*1e3,t.addLog(28,"最终确定提案",`提案 #${L} 已通过，进入时间锁`,"finalize28"),{success:!0,message:"✅ 提案通过，进入时间锁！",hints:["finalize_function"],nextStep:"👉 等待时间锁过期后执行提案！"})},M=L=>{const N=o.value.find(U=>U.id===L);return N?N.state!=="Queued"?{success:!1,message:"❌ 提案不在时间锁中",hints:[],nextStep:""}:n.value<N.executionTime?{success:!1,message:"❌ 时间锁尚未过期",hints:[],nextStep:"👉 使用快进时间功能加速！"}:N.executed?{success:!1,message:"❌ 提案已执行",hints:[],nextStep:""}:(N.executed=!0,N.state="Executed",N.proposer==="currentUser"&&(c.value.balance+=100),t.addLog(28,"执行提案",`提案 #${L} 执行成功，押金已退还`,"execute28"),{success:!0,message:"🔧 提案执行成功！押金已退还",hints:["low_level_call"],nextStep:"🎉 恭喜完成 Day 28 学习！"}):{success:!1,message:"❌ 提案不存在",hints:[],nextStep:""}},q=L=>new Date(L).toLocaleString("zh-CN"),F=L=>{if(L<=0)return"已过期";const N=Math.floor(L/(24*60*60*1e3)),U=Math.floor(L%(24*60*60*1e3)/(60*60*1e3));return`${N}天 ${U}小时`},P=I(()=>({gasUsage:t.getDayGasUsage(28),ethCost:t.getDayEthCost(28),operationCount:t.getDayOperationCount(28)}));return{currentRole:e,currentTime:n,proposals:o,userTokenData:c,proposalCount:l,newProposalDescription:d,newProposalTarget:b,newProposalData:h,selectedProposalId:C,message:r,isError:s,events:u,activeProposals:_,queuedProposals:D,finalizedProposals:S,executableProposals:v,selectedProposal:g,currentProposalState:p,canVote:f,canFinalize:w,canExecute:k,realtimeData:P,switchRole:A,fastForwardTime:E,createProposal:m,vote:x,finalize:B,execute:M,formatTime:q,formatTimeLeft:F,showMessage:a}}function Gg(){const t=pe(),e=O(2e3*1e8),n=O(0),r=O(0),s=O(0),i=O(0),a=O(0),o=O([{address:"0xabcd...ef01",collateral:1e18,debt:1e21},{address:"0x9876...5432",collateral:5e17,debt:8e20}]),u=O([]),c=O(0),l=O(0),d=I(()=>e.value*1e10/1e18),b=I(()=>s.value*e.value*1e10/1e36),h=I(()=>i.value===0?999:b.value*100/i.value),C=I(()=>b.value*100/150*1e18),_=I(()=>Math.max(0,C.value-i.value)),D=I(()=>r.value===0?0:n.value*e.value*1e10/1e36*100/r.value),S=I(()=>o.value.filter(x=>{const B=x.collateral*e.value*1e10/1e36;return(x.debt>0?B*100/x.debt:999)<150&&x.debt>0}).map(x=>{const B=x.collateral*e.value*1e10/1e36,M=x.debt>0?B*100/x.debt:999,q=x.collateral*1.05;return{...x,collateralValue:B,healthFactor:M,liquidationReward:q}})),v=I(()=>({gasUsage:t.getDayGasUsage(29),ethCost:t.getDayEthCost(29),operationCount:t.getDayOperationCount(29)})),g=(x,B)=>{const M={type:x,timestamp:new Date().toLocaleString(),...B};u.value.unshift(M)},p=(x,B,M)=>{c.value++,l.value+=rt[M]||0,t.addLog(29,x,B,M)};return{ethPrice:e,totalCollateral:n,totalSupply:r,userCollateral:s,userDebt:i,userSUSDBalance:a,otherUsers:o,events:u,operationCount:c,totalGasUsed:l,ethPriceInUsd:d,userCollateralValue:b,userHealthFactor:h,maxMintable:C,remainingMintable:_,systemCollateralRatio:D,liquidationCandidates:S,realtimeData:v,depositCollateral:x=>{if(x<=0)return{success:!1,message:"❌ 存入金额必须大于0",hints:[],nextStep:""};s.value+=x,n.value+=x;const B=rt.depositCollateral29;return p("存入抵押品",`${x/1e18} ETH`,"depositCollateral29"),g("CollateralDeposited",{user:"currentUser",amount:x}),{success:!0,message:"✅ 存入抵押品成功！🎉 恭喜解锁：存入抵押品！将ETH等加密资产存入智能合约作为抵押，是DeFi借贷的第一步！👉 切换到「🏦 铸造稳定币」标签铸造SUSD！",hints:["deposit_collateral"],nextStep:"👉 切换到「🏦 铸造稳定币」标签铸造SUSD！",gasUsed:B}},mintStablecoin:x=>{if(x<=0)return{success:!1,message:"❌ 铸造金额必须大于0",hints:[],nextStep:""};if(i.value+x>C.value)return{success:!1,message:"❌ 抵押品不足！无法铸造这么多SUSD",hints:[],nextStep:"👉 先存入更多ETH抵押品，或减少铸造数量"};i.value+=x,a.value+=x,r.value+=x;const B=rt.mintStablecoin29;return p("铸造稳定币",`${x/1e18} SUSD`,"mintStablecoin29"),g("StablecoinMinted",{user:"currentUser",amount:x}),{success:!0,message:"✅ 铸造SUSD成功！🎉 恭喜解锁：铸造稳定币！根据存入的抵押品价值，按照抵押率铸造相应数量的稳定币，实现去中心化货币发行！👉 尝试销毁一些SUSD或提取部分抵押品！",hints:["mint_stablecoin"],nextStep:"👉 尝试销毁一些SUSD或提取部分抵押品！",gasUsed:B}},burnStablecoin:x=>{if(x<=0)return{success:!1,message:"❌ 销毁金额必须大于0",hints:[],nextStep:""};if(x>a.value)return{success:!1,message:"❌ SUSD余额不足",hints:[],nextStep:""};i.value-=x,a.value-=x,r.value-=x;const B=rt.burnStablecoin29;return p("销毁稳定币",`${x/1e18} SUSD`,"burnStablecoin29"),g("StablecoinBurned",{user:"currentUser",amount:x}),{success:!0,message:"✅ 销毁SUSD成功！🎉 恭喜解锁：销毁稳定币！销毁稳定币可以减少债务，提高健康因子，是管理抵押债务的重要操作！👉 尝试提取抵押品或降低ETH价格演示清算！",hints:["burn_stablecoin"],nextStep:"👉 尝试提取抵押品或降低ETH价格演示清算！",gasUsed:B}},withdrawCollateral:x=>{if(x<=0)return{success:!1,message:"❌ 提取金额必须大于0",hints:[],nextStep:""};if(x>s.value)return{success:!1,message:"❌ 抵押品余额不足",hints:[],nextStep:""};const B=s.value-x,M=B*e.value*1e10/1e36,q=i.value/1e18*150/100;if(M<q&&i.value>0)return{success:!1,message:"❌ 提取后健康因子过低！请先销毁部分SUSD",hints:[],nextStep:"👉 先销毁一些SUSD降低债务，再提取抵押品"};s.value=B,n.value-=x;const F=rt.withdrawCollateral29;return p("提取抵押品",`${x/1e18} ETH`,"withdrawCollateral29"),g("CollateralWithdrawn",{user:"currentUser",amount:x}),{success:!0,message:"✅ 提取抵押品成功！🎉 恭喜解锁：提取抵押品！在满足抵押率要求的前提下，可以提取部分抵押品，实现资金灵活使用！👉 降低ETH价格到$1400以下，然后执行清算！",hints:["withdraw_collateral"],nextStep:"👉 降低ETH价格到$1400以下，然后执行清算！",gasUsed:F}},updateEthPrice:x=>{e.value=x*1e8,g("PriceUpdated",{newPrice:x,timestamp:Date.now()});const B=S.value;return{success:!0,message:`✅ ETH价格已更新为 $${x}`,hints:[],nextStep:B.length>0?`👉 发现 ${B.length} 个可清算头寸！前往清算区执行清算！`:"👉 当前没有可清算头寸，尝试进一步降低价格",candidates:B.length}},liquidate:x=>{const B=o.value.findIndex(U=>U.address===x);if(B===-1)return{success:!1,message:"❌ 用户不存在",hints:[],nextStep:""};const M=o.value[B],q=M.collateral*e.value*1e10/1e36;if((M.debt>0?q*100/M.debt:999)>=150)return{success:!1,message:"❌ 该头寸健康，无法清算",hints:[],nextStep:"👉 降低ETH价格使健康因子低于150%"};const L=M.collateral*1.05;n.value-=M.collateral,r.value-=M.debt,o.value.splice(B,1);const N=rt.liquidate29;return p("清算",`清算用户 ${x}`,"liquidate29"),g("Liquidation",{liquidator:"currentUser",user:x,debtPaid:M.debt,collateralSeized:L}),{success:!0,message:"✅ 清算成功！🎉 恭喜解锁：清算机制！当抵押品价值下跌导致健康因子低于阈值时，清算人可以代还债务并获得抵押品加奖励，维护系统稳定！🎉 恭喜完成Day 29所有概念学习！",hints:["liquidation"],nextStep:"🎉 恭喜完成Day 29所有概念学习！",gasUsed:N,reward:L}},resetState:()=>{s.value=0,i.value=0,a.value=0,n.value=0,r.value=0,c.value=0,l.value=0,u.value=[],o.value=[{address:"0xabcd...ef01",collateral:1e18,debt:1e21},{address:"0x9876...5432",collateral:5e17,debt:8e20}]}}}function Kg(){const t=pe(),e=O([]),n=O(null),r=O({token0:0,token1:0}),s=O(0),i=O(0),a=O(1e4),o=O(50),u=O("add"),c=O("0to1"),l=O(""),d=O(""),b=O(""),h=O(""),C=O(""),_=O(0),D=I(()=>r.value.token0===0||r.value.token1===0?0:r.value.token1/r.value.token0),S=I(()=>r.value.token0===0||r.value.token1===0?0:r.value.token0/r.value.token1),v=I(()=>r.value.token0===0||r.value.token1===0?0:r.value.token1/r.value.token0),g=I(()=>{if(!h.value||r.value.token0===0)return 0;const N=parseFloat(h.value);return isNaN(N)||N===0?0:N/(r.value.token0+N)*100}),p=I(()=>s.value===0?0:i.value/s.value*100),f=I(()=>{const N=parseFloat(l.value)||0,U=parseFloat(d.value)||0;if(N===0||U===0)return 0;if(s.value===0)return Math.sqrt(N*U);{const K=N*s.value/r.value.token0,ne=U*s.value/r.value.token1;return Math.min(K,ne)}}),w=I(()=>{const N=parseFloat(b.value)||0;return N===0||s.value===0?{token0:0,token1:0}:{token0:N*r.value.token0/s.value,token1:N*r.value.token1/s.value}}),k=I(()=>{const N=parseFloat(h.value)||0;if(N===0)return 0;const U=c.value==="0to1"?r.value.token0:r.value.token1,K=c.value==="0to1"?r.value.token1:r.value.token0;return U===0||K===0?0:N*K/(U+N)}),A=(N,U)=>{const K={address:`0x${Math.random().toString(16).slice(2,42)}`,token0:N,token1:U,reserve0:0,reserve1:0,totalSupply:0};return e.value.push(K),t.addLog(30,"创建交易对",`${N.symbol}-${U.symbol}`,"createPair30"),K},y=N=>{n.value=N,r.value={token0:N.reserve0,token1:N.reserve1},s.value=N.totalSupply},E=(N,U)=>{const K=parseFloat(N),ne=parseFloat(U);if(isNaN(K)||isNaN(ne)||K<=0||ne<=0)return null;a.value-=K,o.value-=ne;let ye;if(s.value===0)ye=Math.sqrt(K*ne);else{const be=K*s.value/r.value.token0,Ke=ne*s.value/r.value.token1;ye=Math.min(be,Ke)}return r.value.token0+=K,r.value.token1+=ne,s.value+=ye,i.value+=ye,n.value&&(n.value.reserve0=r.value.token0,n.value.reserve1=r.value.token1,n.value.totalSupply=s.value),t.addLog(30,"添加流动性",`存入 ${K} Token0, ${ne} Token1`,"addLiquidity30"),ye},m=N=>{const U=parseFloat(N);if(isNaN(U)||U<=0||U>i.value)return null;const K=U*r.value.token0/s.value,ne=U*r.value.token1/s.value;return r.value.token0-=K,r.value.token1-=ne,s.value-=U,i.value-=U,a.value+=K,o.value+=ne,n.value&&(n.value.reserve0=r.value.token0,n.value.reserve1=r.value.token1,n.value.totalSupply=s.value),t.addLog(30,"移除流动性",`移除 ${U} LP代币`,"removeLiquidity30"),{amount0:K,amount1:ne}},x=(N,U)=>{const K=parseFloat(N);if(isNaN(K)||K<=0)return null;const ne=U==="0to1"?r.value.token0:r.value.token1,ye=U==="0to1"?r.value.token1:r.value.token0;if(ne===0||ye===0)return null;const be=K*ye/(ne+K);U==="0to1"?(r.value.token0+=K,r.value.token1-=be,a.value-=K,o.value+=be):(r.value.token1+=K,r.value.token0-=be,o.value-=K,a.value+=be),n.value&&(n.value.reserve0=r.value.token0,n.value.reserve1=r.value.token1);const Ke=U==="0to1"?"Token0 → Token1":"Token1 → Token0";return t.addLog(30,"代币交换",`${Ke} 交换 ${K}`,"swap30"),be},B=(N,U)=>{const K=parseFloat(N)||0;if(K===0)return 0;const ne=U==="0to1"?r.value.token0:r.value.token1,ye=U==="0to1"?r.value.token1:r.value.token0;return ne===0||ye===0?0:K*ye/(ne+K)},M=(N,U)=>{const K=parseFloat(N)||0,ne=parseFloat(U)||0;if(K===0||ne===0)return{valid:!1,ratio:0};const ye=ne/K,be=v.value;if(be===0)return{valid:!0,ratio:ye};const Ke=Math.abs(ye-be)/be;return{valid:Ke<.01,ratio:ye,poolRatio:be,diff:Ke*100}},q=(N,U)=>{const K=N.toLowerCase()<U.toLowerCase();return{token0:K?N:U,token1:K?U:N}},F=()=>{e.value=[],n.value=null,r.value={token0:0,token1:0},s.value=0,i.value=0,a.value=1e4,o.value=50,u.value="add",c.value="0to1",l.value="",d.value="",b.value="",h.value="",C.value="",_.value=0},P=(N,U=2)=>N==null?"0":new Intl.NumberFormat("en-US",{minimumFractionDigits:U,maximumFractionDigits:U}).format(N),L=I(()=>({gasUsage:t.getDayGasUsage(30),ethCost:t.getDayEthCost(30),operationCount:t.getDayOperationCount(30)}));return{allPairs:e,selectedPair:n,reserves:r,totalSupply:s,userLPBalance:i,userToken0Balance:a,userToken1Balance:o,activeTab:u,swapDirection:c,addAmount0:l,addAmount1:d,removeAmount:b,swapAmountIn:h,swapAmountOut:C,mathPanelClicks:_,currentPrice:D,reversePrice:S,liquidityRatio:v,priceImpact:g,userLPShare:p,calculatedLPTokens:f,calculatedRemoveTokens:w,calculatedSwapOutput:k,createPair:A,selectPair:y,addLiquidity:E,removeLiquidity:m,swap:x,calculateSwapOutput:B,checkLiquidityRatio:M,demonstrateAddressSorting:q,resetState:F,formatNumber:P,realtimeData:L}}function jg(t){return{realtimeData:I(()=>{switch(t.value){case 1:return bf().realtimeData.value;case 2:return wf().realtimeData.value;case 3:return _f().realtimeData.value;case 4:return kf().realtimeData.value;case 5:return xf().realtimeData.value;case 6:return Af().realtimeData.value;case 7:return Cf().realtimeData.value;case 8:return Tf().realtimeData.value;case 9:return Ef().realtimeData.value;case 10:return Sf().realtimeData.value;case 11:return If().realtimeData.value;case 12:return Df().realtimeData.value;case 13:return Rf().realtimeData.value;case 14:return Of().realtimeData.value;case 15:return Pf().realtimeData.value;case 16:return Pg().realtimeData.value;case 17:return Lg().realtimeData.value;case 18:return Bg().realtimeData.value;case 19:return Fg().realtimeData.value;case 20:return Ng().realtimeData.value;case 21:return $g().realtimeData.value;case 22:return qg().realtimeData.value;case 23:return Mg().realtimeData.value;case 24:return Ug().realtimeData.value;case 25:return Vg().realtimeData.value;case 26:return Hg().realtimeData.value;case 27:return Wg().realtimeData.value;case 28:return zg().realtimeData.value;case 29:return Gg().realtimeData.value;case 30:return Kg().realtimeData.value;default:return{gasUsage:0,ethCost:0,operationCount:0}}})}}const ps=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Yg={class:"header"},Xg={class:"header-center"},Zg={class:"main-title"},Jg={class:"easter-egg-container"},Qg={__name:"AppHeader",props:{showLeftSidebar:{type:Boolean,default:!0},showRightSidebar:{type:Boolean,default:!0}},emits:["toggle-left-sidebar","toggle-right-sidebar"],setup(t){const e=O(!1),n=()=>{e.value=!e.value,e.value?(document.documentElement.dataset.theme="dark",localStorage.setItem("theme","dark")):(document.documentElement.dataset.theme="light",localStorage.setItem("theme","light"))},r=O(!1),s=O(!1),i=O("");let a=null;const o=["In Code We Trust!","🔮 今日宜：部署主网；忌：未 Audit","⚠️ 注意你的 Reentrancy 漏洞！","Gas 费太高了，先在这练练手！","HODL! 到下一个牛市！","🎉 签运：大吉！编译一遍过","🚀 To the Moon!","智能合约，不可篡改！","🧐 别忘了测边缘情况"],u=()=>{if(r.value)return;r.value=!0,setTimeout(()=>{r.value=!1},600);const c=o[Math.floor(Math.random()*o.length)];i.value=c,s.value=!0,a&&clearTimeout(a),a=setTimeout(()=>{s.value=!1},3e3)};return xa(()=>{(localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"))==="dark"&&(e.value=!0,document.documentElement.dataset.theme="dark")}),(c,l)=>(Ce(),Ie("div",Yg,[ee("button",{class:Ct(["sidebar-toggle-btn left-toggle",{active:t.showLeftSidebar}]),onClick:l[0]||(l[0]=d=>c.$emit("toggle-left-sidebar"))}," 📅 日程 ",2),ee("div",Xg,[ee("h1",Zg,[ee("div",Jg,[ee("button",{class:Ct(["easter-egg-btn",{animating:r.value}]),onClick:u,title:"点这里有惊喜"}," 🎓 ",2),ee("div",{class:Ct(["toast-message",{show:s.value}])},Pe(i.value),3)]),l[2]||(l[2]=ee("span",null,"Solidity 学习互动演示",-1)),ee("button",{class:"theme-toggle-btn",onClick:n,title:"切换模式"},Pe(e.value?"☀️":"🌙"),1)]),l[3]||(l[3]=ee("div",{class:"warning-banner"},[ee("span",null,"模拟环境，不消耗真实 Gas 或 ETH"),ee("span",{class:"author-credit"},[Gr("by "),ee("a",{href:"https://github.com/Tenlossiby",target:"_blank",rel:"noopener noreferrer"},"Tenlossiby")])],-1))]),ee("button",{class:Ct(["sidebar-toggle-btn right-toggle",{active:t.showRightSidebar}]),onClick:l[1]||(l[1]=d=>c.$emit("toggle-right-sidebar"))}," 📊 进度 ",2)]))}},e0=ps(Qg,[["__scopeId","data-v-9217367d"]]),t0={class:"left-sidebar"},n0={class:"sidebar-header"},r0=["title"],s0=["onClick"],i0={class:"day-nav-header"},a0={class:"day-title"},o0={class:"day-subtitle"},u0={__name:"DayNavigation",props:{currentDay:{type:Number,required:!0}},emits:["switchDay"],setup(t){const e=O(!0),n=()=>{e.value=!e.value},r=I(()=>{const i=Object.keys(xr).map(Number);return e.value?i:i.reverse()}),s=i=>{var a;return i===14?"安全存款盒/SafeDeposit":((a=xr[i])==null?void 0:a.subtitle)||"待定内容"};return(i,a)=>(Ce(),Ie("div",t0,[ee("div",n0,[a[0]||(a[0]=ee("h3",null,"📚 学习导航",-1)),ee("button",{class:"sort-toggle-btn",onClick:n,title:e.value?"点击切换倒序":"点击切换正序"},Pe(e.value?"🔼 正序":"🔽 倒序"),9,r0)]),(Ce(!0),Ie(lt,null,qs(r.value,o=>(Ce(),Ie("div",{key:o,class:Ct(["day-nav-item",{active:t.currentDay===o}]),onClick:u=>i.$emit("switchDay",o)},[ee("div",i0,[ee("div",a0,"Day "+Pe(o),1)]),ee("div",o0,Pe(s(o)),1)],10,s0))),128))]))}},c0=ps(u0,[["__scopeId","data-v-6c23ceee"]]),l0="modulepreload",d0=function(t,e){return new URL(t,e).href},pu={},me=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),u=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=d0(c,r),c in pu)return;pu[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!r)for(let C=a.length-1;C>=0;C--){const _=a[C];if(_.href===c&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":l0,l||(h.as="script"),h.crossOrigin="",h.href=c,u&&h.setAttribute("nonce",u),document.head.appendChild(h),l)return new Promise((C,_)=>{h.addEventListener("load",C),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&i(o.reason);return e().catch(i)})},p0={class:"coming-soon-content"},f0={class:"coming-soon-card"},m0={class:"description"},g0={class:"suggestion"},h0={class:"available-days"},y0=["onClick"],v0={__name:"ComingSoon",props:{day:{type:Number,default:0}},emits:["switchDay"],setup(t,{emit:e}){const n=e,r=Object.keys(xr).map(Number).sort((i,a)=>i-a),s=i=>{n("switchDay",i)};return(i,a)=>(Ce(),Ie("div",p0,[ee("div",f0,[a[1]||(a[1]=ee("div",{class:"icon"},"🚧",-1)),a[2]||(a[2]=ee("h2",null,"内容建设中",-1)),a[3]||(a[3]=ee("p",{class:"subtitle"},"Coming Soon",-1)),ee("p",m0," Day "+Pe(t.day)+" 的内容正在开发中，敬请期待！ ",1),ee("div",g0,[a[0]||(a[0]=ee("p",null,"💡 提示：目前可用的学习内容：",-1)),ee("div",h0,[(Ce(!0),Ie(lt,null,qs(Zr(r),o=>(Ce(),Ie("span",{key:o,class:"day-tag",onClick:u=>s(o)}," Day "+Pe(o),9,y0))),128))])])])]))}},b0=ps(v0,[["__scopeId","data-v-8b051cae"]]),w0={class:"center-content"},_0={__name:"DayContent",props:{currentDay:{type:Number,required:!0}},emits:["switchDay"],setup(t,{emit:e}){const n={1:fe(()=>me(()=>import("./ClickCounter-CPh9DGpy.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),2:fe(()=>me(()=>import("./SaveMyName-DpqgrsUA.js"),__vite__mapDeps([4,1,2,5]),import.meta.url)),3:fe(()=>me(()=>import("./PollStation-DnuhcrZE.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)),4:fe(()=>me(()=>import("./AuctionHouse-BHBGpHP-.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)),5:fe(()=>me(()=>import("./AdminOnly-pPjrF7F6.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)),6:fe(()=>me(()=>import("./EtherPiggyBank-BMEEbyfp.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)),7:fe(()=>me(()=>import("./SimpleIOUApp-BSfDoCe-.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)),8:fe(()=>me(()=>import("./TipJar-guCFk7gU.js"),__vite__mapDeps([16,1,2,17]),import.meta.url)),9:fe(()=>me(()=>import("./SmartCalculator-bd-w3gXp.js"),__vite__mapDeps([18,1,2,19]),import.meta.url)),10:fe(()=>me(()=>import("./ActivityTracker-H-XbYM6S.js"),__vite__mapDeps([20,1,2,21]),import.meta.url)),11:fe(()=>me(()=>import("./MasterkeyContract-D53Bgy9Z.js"),__vite__mapDeps([22,1,2,23]),import.meta.url)),12:fe(()=>me(()=>import("./ERC20Token-C3lGnR9V.js"),__vite__mapDeps([24,1,2,25]),import.meta.url)),13:fe(()=>me(()=>import("./MyToken-DqKs6g-9.js"),__vite__mapDeps([26,1,2,27]),import.meta.url)),14:fe(()=>me(()=>import("./SafeDeposit-Iz6ZcXXu.js"),__vite__mapDeps([28,1,2,29]),import.meta.url)),15:fe(()=>me(()=>import("./GasEfficientVoting-DsyLFxe4.js"),__vite__mapDeps([30,1,2,31]),import.meta.url)),16:fe(()=>me(()=>import("./PluginStore-QM_gs2Fg.js"),__vite__mapDeps([32,1,2,33]),import.meta.url)),17:fe(()=>me(()=>import("./UpgradeHub-5a4dlh1r.js"),__vite__mapDeps([34,1,2,35]),import.meta.url)),18:fe(()=>me(()=>import("./OracleContract-BA699Yma.js"),__vite__mapDeps([36,1,2,37]),import.meta.url)),19:fe(()=>me(()=>import("./SignThis-BH_rM0s9.js"),__vite__mapDeps([38,1,2,39]),import.meta.url)),20:fe(()=>me(()=>import("./ReentryAttack-CmwTOPBN.js"),__vite__mapDeps([40,1,2,41]),import.meta.url)),21:fe(()=>me(()=>import("./SimpleNFT-Dy375FDw.js"),__vite__mapDeps([42,1,2,43]),import.meta.url)),22:fe(()=>me(()=>import("./FairChainLottery-CqATyDA1.js"),__vite__mapDeps([44,1,2,45]),import.meta.url)),23:fe(()=>me(()=>import("./SimpleLending-CR5SLWbI.js"),__vite__mapDeps([46,1,2,47]),import.meta.url)),24:fe(()=>me(()=>import("./EnhancedSimpleEscrow-B8UM5f0c.js"),__vite__mapDeps([48,1,2,49]),import.meta.url)),25:fe(()=>me(()=>import("./AutomatedMarketMaker-BTfla_pO.js"),__vite__mapDeps([50,1,2,51]),import.meta.url)),26:fe(()=>me(()=>import("./NFTMarketplace-BKA7Bo42.js"),__vite__mapDeps([52,1,2,53]),import.meta.url)),27:fe(()=>me(()=>import("./YieldFarming-DVCFD-Na.js"),__vite__mapDeps([54,1,2,55]),import.meta.url)),28:fe(()=>me(()=>import("./DecentralizedGovernance-CXyGMWTi.js"),__vite__mapDeps([56,1,2,57]),import.meta.url)),29:fe(()=>me(()=>import("./SimpleStablecoin-ZDA5ZBC2.js"),__vite__mapDeps([58,1,2,59]),import.meta.url)),30:fe(()=>me(()=>import("./MiniDex-pWpAHGlS.js"),__vite__mapDeps([60,1,2,61]),import.meta.url))},r=t,s=e,i=I(()=>n[r.currentDay]||b0),a=o=>{s("switchDay",o)};return(o,u)=>(Ce(),Ie("div",w0,[(Ce(),fc(Sd(i.value),{key:t.currentDay,day:t.currentDay,onSwitchDay:a},null,40,["day"]))]))}},k0=ps(_0,[["__scopeId","data-v-7d246ecb"]]),x0={class:"right-sidebar"},A0={class:"sidebar-card"},C0={class:"progress-bar"},T0={class:"progress-stats"},E0={class:"sidebar-card"},S0={class:"unlocked-list"},I0={key:0,class:"locked"},D0={class:"icon"},R0={key:0,class:"sidebar-card"},O0={class:"realtime-data"},P0={key:0},L0={class:"data-row"},B0={class:"value"},F0={class:"data-row"},N0={class:"value"},$0={class:"data-row"},q0={class:"value"},M0={key:1,class:"no-operations"},U0={class:"sidebar-card"},V0={class:"operation-log"},H0={key:0,class:"no-operations"},W0={key:1},z0={class:"data-row"},G0={class:"timestamp"},K0={key:0,class:"data-row gas-info"},j0={class:"value"},Y0={class:"value"},X0={__name:"Sidebar",props:{realtimeData:{type:Object,default:null},dayProgress:{type:Object,required:!0},currentDay:{type:Number,required:!0}},setup(t){const e=t,n=pe(),r=I(()=>n.getDayLogs(e.currentDay)),s=I(()=>{const u=e.dayProgress[e.currentDay];return!u||u.totalConcepts===0?0:Math.floor(u.unlockedConcepts.length/u.totalConcepts*100)}),i=I(()=>{const u=e.dayProgress[e.currentDay];return(u==null?void 0:u.unlockedConcepts.length)||0}),a=I(()=>{const u=e.dayProgress[e.currentDay];return(u==null?void 0:u.totalConcepts)||0}),o=I(()=>{const u=xr[e.currentDay];if(!u||!u.concepts)return[];const c=e.dayProgress[e.currentDay],l=(c==null?void 0:c.unlockedConcepts)||[];let d=Zp;return e.currentDay===11?d=Jp:e.currentDay===12?d=ef:e.currentDay===13?d=Qp:e.currentDay===14?d=tf:e.currentDay===15?d=nf:e.currentDay===16?d=rf:e.currentDay===17?d=sf:e.currentDay===18?d=af:e.currentDay===19?d=of:e.currentDay===20?d=uf:e.currentDay===21?d=cf:e.currentDay===22?d=lf:e.currentDay===23?d=df:e.currentDay===24?d=pf:e.currentDay===25?d=ff:e.currentDay===26?d=mf:e.currentDay===27?d=gf:e.currentDay===28?d=hf:e.currentDay===29?d=yf:e.currentDay===30&&(d=vf),u.concepts.map(b=>{const h=d[b];return{key:b,name:(h==null?void 0:h.name)||b,icon:l.includes(b)?h==null?void 0:h.icon:"🔒",isUnlocked:l.includes(b)}})});return(u,c)=>(Ce(),Ie("div",x0,[ee("div",A0,[c[0]||(c[0]=ee("h3",null,"🎓 学习进度",-1)),ee("div",C0,[ee("div",{class:"progress-fill",style:ti({width:s.value+"%"})},null,4)]),ee("div",T0,[ee("span",null,"完成度 "+Pe(s.value)+"%",1),ee("span",null,"已解锁 "+Pe(i.value)+"/"+Pe(a.value),1)])]),ee("div",E0,[c[2]||(c[2]=ee("h3",null,"✅ 已解锁概念",-1)),ee("ul",S0,[o.value.length===0?(Ce(),Ie("li",I0,[...c[1]||(c[1]=[ee("span",{class:"icon"},"🚧",-1),Gr(" 内容开发中... ",-1)])])):Ss("",!0),(Ce(!0),Ie(lt,null,qs(o.value,l=>(Ce(),Ie("li",{key:l.key,class:Ct({locked:!l.isUnlocked})},[ee("span",D0,Pe(l.icon),1),Gr(" "+Pe(l.name),1)],2))),128))])]),t.realtimeData?(Ce(),Ie("div",R0,[c[6]||(c[6]=ee("h3",null,"📊 实时数据",-1)),ee("div",O0,[t.realtimeData.operationCount>0?(Ce(),Ie("div",P0,[ee("div",L0,[c[3]||(c[3]=ee("span",{class:"label"},"操作次数：",-1)),ee("span",B0,Pe(t.realtimeData.operationCount),1)]),ee("div",F0,[c[4]||(c[4]=ee("span",{class:"label"},"Gas 消耗：",-1)),ee("span",N0,Pe(t.realtimeData.gasUsage.toLocaleString()),1)]),ee("div",$0,[c[5]||(c[5]=ee("span",{class:"label"},"ETH 费用：",-1)),ee("span",q0,Pe(t.realtimeData.ethCost.toFixed(6)),1)])])):(Ce(),Ie("div",M0," 暂无操作记录 "))])])):Ss("",!0),ee("div",U0,[c[9]||(c[9]=ee("h3",null,"📋 操作日志",-1)),ee("div",V0,[r.value.length===0?(Ce(),Ie("p",H0,"暂无操作记录")):(Ce(),Ie("div",W0,[(Ce(!0),Ie(lt,null,qs(r.value.slice(0,10),l=>(Ce(),Ie("div",{key:l.id,class:"log-entry"},[ee("div",z0,[ee("span",G0,Pe(l.timestamp),1),ee("span",null,[ee("strong",null,Pe(l.operation),1),Gr(" "+Pe(l.details),1)])]),l.gasUsed>0?(Ce(),Ie("div",K0,[c[7]||(c[7]=ee("span",{class:"label"},"Gas:",-1)),ee("span",j0,Pe(l.gasUsed.toLocaleString()),1),c[8]||(c[8]=ee("span",{class:"label",style:{"margin-left":"15px"}},"ETH:",-1)),ee("span",Y0,Pe(l.ethCost.toFixed(6)),1)])):Ss("",!0)]))),128))]))])])]))}},Z0=ps(X0,[["__scopeId","data-v-08db9160"]]),J0={class:"app-container"},Q0={class:"main-layout"},eh={__name:"App",setup(t){const e=Be(),n=O(!0),r=O(!0),s=O(1),i=O(!1),{realtimeData:a}=jg(s),o=()=>{const b=window.innerWidth<=1100;!i.value&&b&&(n.value=!1,r.value=!1),i.value&&!b&&(n.value=!0,r.value=!0),i.value=b},u=I(()=>i.value&&(n.value||r.value));xa(()=>{o(),window.addEventListener("resize",o)}),Aa(()=>{window.removeEventListener("resize",o)});const c=d=>{s.value=d},l=()=>{n.value=!1,r.value=!1};return(d,b)=>(Ce(),Ie("div",J0,[qe(e0,{"show-left-sidebar":n.value,"show-right-sidebar":r.value,onToggleLeftSidebar:b[0]||(b[0]=h=>n.value=!n.value),onToggleRightSidebar:b[1]||(b[1]=h=>r.value=!r.value)},null,8,["show-left-sidebar","show-right-sidebar"]),u.value?(Ce(),Ie("div",{key:0,class:"sidebar-overlay active",onClick:Np(l,["stop"])})):Ss("",!0),ee("div",Q0,[qe(c0,{"current-day":s.value,onSwitchDay:c,class:Ct({hidden:!n.value&&!i.value,"mobile-visible":i.value&&n.value,show:n.value&&i.value})},null,8,["current-day","class"]),qe(k0,{"current-day":s.value,onSwitchDay:c},null,8,["current-day"]),qe(Z0,{"current-day":s.value,"day-progress":Zr(e).dayProgress,"realtime-data":Zr(a),class:Ct({hidden:!r.value&&!i.value,"mobile-visible":i.value&&r.value,show:r.value&&i.value})},null,8,["current-day","day-progress","realtime-data","class"])])]))}},ll=Up(eh),th=Wp();ll.use(th);ll.mount("#app");export{qg as $,Cf as A,Tf as B,ch as C,Ef as D,As as E,lt as F,xa as G,ih as H,ti as I,Sf as J,If as K,Df as L,Rf as M,Of as N,bh as O,Pf as P,yh as Q,pe as R,Pg as S,uh as T,ah as U,Lg as V,Bg as W,Fg as X,Ng as Y,$g as Z,ps as _,ee as a,df as a$,Mg as a0,Aa as a1,Ug as a2,Nh as a3,pf as a4,Vg as a5,Mh as a6,qh as a7,Hg as a8,Vh as a9,Bh as aA,Uh as aB,Hh as aC,zh as aD,fh as aE,hh as aF,gh as aG,wh as aH,vh as aI,kh as aJ,Ah as aK,Th as aL,Sh as aM,Dh as aN,Oh as aO,Fh as aP,$h as aQ,Wh as aR,Gh as aS,jh as aT,Xh as aU,Lh as aV,ph as aW,of as aX,uf as aY,cf as aZ,lf as a_,Wg as aa,zg as ab,Gg as ac,Kh as ad,ri as ae,Kg as af,Yl as ag,Yh as ah,vf as ai,Jp as aj,ef as ak,Qp as al,tf as am,nf as an,rf as ao,sf as ap,af as aq,Zp as ar,mh as as,_h as at,xh as au,Ch as av,Eh as aw,Ih as ax,Rh as ay,Ph as az,Zr as b,ff as b0,mf as b1,gf as b2,hf as b3,yf as b4,sh as b5,Ie as c,fc as d,Ss as e,qe as f,wf as g,lh as h,I as i,dh as j,_f as k,qs as l,kf as m,Ct as n,Ce as o,Np as p,Be as q,O as r,xf as s,Pe as t,bf as u,oh as v,rh as w,De as x,Gr as y,Af as z};
