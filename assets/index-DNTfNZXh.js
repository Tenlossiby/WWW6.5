const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClickCounter-BJZev8XM.js","./FullCodeModal-Df-QwcgP.js","./FullCodeModal-B8zTykGt.css","./ClickCounter-cuEHdkTE.css","./SaveMyName-BZ808SLh.js","./SaveMyName-CAUeDGcC.css","./PollStation-Dcl-SXAs.js","./PollStation-DDaC2Lvn.css","./AuctionHouse-BqohSRdo.js","./AuctionHouse-Dx5megk6.css","./AdminOnly-vViSIIxB.js","./AdminOnly-BH42YLS5.css","./EtherPiggyBank-C1SCxijO.js","./EtherPiggyBank-B05u_Xb5.css","./SimpleIOUApp-CPEl9Pyo.js","./SimpleIOUApp-B-0TMH-R.css","./TipJar-Blk3bioW.js","./TipJar-BTmJuooz.css","./SmartCalculator-jkPkph7S.js","./SmartCalculator-CkF9VyiN.css","./ActivityTracker-BTFUQdCr.js","./ActivityTracker-C9WKbHU7.css","./MasterkeyContract-xMdZ7Dmd.js","./MasterkeyContract-BJXVKu_r.css","./ERC20Token-Cu-BN6aW.js","./ERC20Token-BvQRXJN9.css","./MyToken-BQMHeOI5.js","./MyToken-ChEwAHOo.css","./SafeDeposit-CsSNavPn.js","./SafeDeposit-CwL_tn9H.css","./GasEfficientVoting-CmAlvn7h.js","./GasEfficientVoting-DD9FOH7O.css","./PluginStore-D5-oLLJ-.js","./PluginStore-DEvKw2su.css","./UpgradeHub-DwcDuseR.js","./UpgradeHub-CYZ_ZIay.css","./OracleContract-Cj3DTPy4.js","./OracleContract-DDwHPvfl.css","./SignThis-CQ40y9kD.js","./SignThis-CQmgsfV9.css","./ReentryAttack-BpAdYaaP.js","./ReentryAttack-D9GH1P4l.css","./SimpleNFT-W3oQ3_tt.js","./SimpleNFT-Ca-fg8gX.css","./FairChainLottery-BmeVJ4Jk.js","./FairChainLottery-Bz1jVuYm.css","./SimpleLending-Bnlg7R6C.js","./SimpleLending-CZfhoQZR.css","./EnhancedSimpleEscrow-DIPOd9KQ.js","./EnhancedSimpleEscrow-BDfPF9qP.css","./AutomatedMarketMaker-BuN6NysU.js","./AutomatedMarketMaker-OnQhCEoN.css","./NFTMarketplace-Dswmcl7h.js","./NFTMarketplace-BtPFYrfl.css","./YieldFarming-DwSsk18g.js","./YieldFarming-DjpSXB88.css","./DecentralizedGovernance-BEspnZri.js","./DecentralizedGovernance-oaZBAed3.css","./SimpleStablecoin-w7tyMWhz.js","./SimpleStablecoin-BYJuh8lX.css"])))=>i.map(i=>d[i]);
var du=Object.defineProperty;var Ho=t=>{throw TypeError(t)};var fu=(t,e,n)=>e in t?du(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ee=(t,e,n)=>fu(t,typeof e!="symbol"?e+"":e,n),bi=(t,e,n)=>e.has(t)||Ho("Cannot "+n);var U=(t,e,n)=>(bi(t,e,"read from private field"),n?n.call(t):e.get(t)),ve=(t,e,n)=>e.has(t)?Ho("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ae=(t,e,n,r)=>(bi(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Te=(t,e,n)=>(bi(t,e,"access private method"),n);var Wo=(t,e,n,r)=>({set _(s){ae(t,e,s,n)},get _(){return U(t,e,r)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function co(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const we={},dr=[],zt=()=>{},pc=()=>!1,js=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),lo=t=>t.startsWith("onUpdate:"),qe=Object.assign,uo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pu=Object.prototype.hasOwnProperty,fe=(t,e)=>pu.call(t,e),re=Array.isArray,fr=t=>os(t)==="[object Map]",Ys=t=>os(t)==="[object Set]",zo=t=>os(t)==="[object Date]",oe=t=>typeof t=="function",Ie=t=>typeof t=="string",Kt=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",mc=t=>(be(t)||oe(t))&&oe(t.then)&&oe(t.catch),gc=Object.prototype.toString,os=t=>gc.call(t),mu=t=>os(t).slice(8,-1),hc=t=>os(t)==="[object Object]",Xs=t=>Ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Nr=co(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gu=/-\w/g,vt=Zs(t=>t.replace(gu,e=>e.slice(1).toUpperCase())),hu=/\B([A-Z])/g,On=Zs(t=>t.replace(hu,"-$1").toLowerCase()),Js=Zs(t=>t.charAt(0).toUpperCase()+t.slice(1)),vi=Zs(t=>t?`on${Js(t)}`:""),Dn=(t,e)=>!Object.is(t,e),xs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Qs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Go;const ei=()=>Go||(Go=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ti(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ie(r)?wu(r):ti(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ie(t)||be(t))return t}const yu=/;(?![^(]*\))/g,bu=/:([^]+)/,vu=/\/\*[^]*?\*\//g;function wu(t){const e={};return t.replace(vu,"").split(yu).forEach(n=>{if(n){const r=n.split(bu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function At(t){let e="";if(Ie(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=At(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _u="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ku=co(_u);function bc(t){return!!t||t===""}function xu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qn(t[r],e[r]);return n}function Qn(t,e){if(t===e)return!0;let n=zo(t),r=zo(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Kt(t),r=Kt(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?xu(t,e):!1;if(n=be(t),r=be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Qn(t[o],e[o]))return!1}}return String(t)===String(e)}function Au(t,e){return t.findIndex(n=>Qn(n,e))}const vc=t=>!!(t&&t.__v_isRef===!0),Re=t=>Ie(t)?t:t==null?"":re(t)||be(t)&&(t.toString===gc||!oe(t.toString))?vc(t)?Re(t.value):JSON.stringify(t,wc,2):String(t),wc=(t,e)=>vc(e)?wc(t,e.value):fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[wi(r,i)+" =>"]=s,n),{})}:Ys(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wi(n))}:Kt(e)?wi(e):be(e)&&!re(e)&&!hc(e)?String(e):e,wi=(t,e="")=>{var n;return Kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class _c{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ve,!e&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ve;try{return Ve=this,e()}finally{Ve=n}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){this._on>0&&--this._on===0&&(Ve=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function kc(t){return new _c(t)}function xc(){return Ve}function Tu(t,e=!1){Ve&&Ve.cleanups.push(t)}let ke;const _i=new WeakSet;class Ac{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_i.has(this)&&(_i.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ko(this),Ec(this);const e=ke,n=Tt;ke=this,Tt=!0;try{return this.fn()}finally{Sc(this),ke=e,Tt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mo(e);this.deps=this.depsTail=void 0,Ko(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_i.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Li(this)&&this.run()}get dirty(){return Li(this)}}let Tc=0,$r,qr;function Cc(t,e=!1){if(t.flags|=8,e){t.next=qr,qr=t;return}t.next=$r,$r=t}function fo(){Tc++}function po(){if(--Tc>0)return;if(qr){let e=qr;for(qr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$r;){let e=$r;for($r=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ec(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),mo(r),Cu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Li(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ic(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ic(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Yr)||(t.globalVersion=Yr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Li(t))))return;t.flags|=2;const e=t.dep,n=ke,r=Tt;ke=t,Tt=!0;try{Ec(t);const s=t.fn(t._value);(e.version===0||Dn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,Tt=r,Sc(t),t.flags&=-3}}function mo(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)mo(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Cu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Tt=!0;const Dc=[];function pn(){Dc.push(Tt),Tt=!1}function mn(){const t=Dc.pop();Tt=t===void 0?!0:t}function Ko(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let Yr=0;class Eu{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class go{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!Tt||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Eu(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,Rc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(e){this.version++,Yr++,this.notify(e)}notify(e){fo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{po()}}}function Rc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Rc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Bs=new WeakMap,Yn=Symbol(""),Fi=Symbol(""),Xr=Symbol("");function He(t,e,n){if(Tt&&ke){let r=Bs.get(t);r||Bs.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new go),s.map=r,s.key=n),s.track()}}function sn(t,e,n,r,s,i){const o=Bs.get(t);if(!o){Yr++;return}const a=c=>{c&&c.trigger()};if(fo(),e==="clear")o.forEach(a);else{const c=re(t),l=c&&Xs(n);if(c&&n==="length"){const u=Number(r);o.forEach((d,w)=>{(w==="length"||w===Xr||!Kt(w)&&w>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Xr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Yn)),fr(t)&&a(o.get(Fi)));break;case"delete":c||(a(o.get(Yn)),fr(t)&&a(o.get(Fi)));break;case"set":fr(t)&&a(o.get(Yn));break}}po()}function Su(t,e){const n=Bs.get(t);return n&&n.get(e)}function rr(t){const e=de(t);return e===t?e:(He(e,"iterate",Xr),ft(t)?e:e.map(Et))}function ni(t){return He(t=de(t),"iterate",Xr),t}function An(t,e){return gn(t)?vr(ln(t)?Et(e):e):Et(e)}const Iu={__proto__:null,[Symbol.iterator](){return ki(this,Symbol.iterator,t=>An(this,t))},concat(...t){return rr(this).concat(...t.map(e=>re(e)?rr(e):e))},entries(){return ki(this,"entries",t=>(t[1]=An(this,t[1]),t))},every(t,e){return Xt(this,"every",t,e,void 0,arguments)},filter(t,e){return Xt(this,"filter",t,e,n=>n.map(r=>An(this,r)),arguments)},find(t,e){return Xt(this,"find",t,e,n=>An(this,n),arguments)},findIndex(t,e){return Xt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xt(this,"findLast",t,e,n=>An(this,n),arguments)},findLastIndex(t,e){return Xt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xt(this,"forEach",t,e,void 0,arguments)},includes(...t){return xi(this,"includes",t)},indexOf(...t){return xi(this,"indexOf",t)},join(t){return rr(this).join(t)},lastIndexOf(...t){return xi(this,"lastIndexOf",t)},map(t,e){return Xt(this,"map",t,e,void 0,arguments)},pop(){return Rr(this,"pop")},push(...t){return Rr(this,"push",t)},reduce(t,...e){return jo(this,"reduce",t,e)},reduceRight(t,...e){return jo(this,"reduceRight",t,e)},shift(){return Rr(this,"shift")},some(t,e){return Xt(this,"some",t,e,void 0,arguments)},splice(...t){return Rr(this,"splice",t)},toReversed(){return rr(this).toReversed()},toSorted(t){return rr(this).toSorted(t)},toSpliced(...t){return rr(this).toSpliced(...t)},unshift(...t){return Rr(this,"unshift",t)},values(){return ki(this,"values",t=>An(this,t))}};function ki(t,e,n){const r=ni(t),s=r[e]();return r!==t&&!ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Du=Array.prototype;function Xt(t,e,n,r,s,i){const o=ni(t),a=o!==t&&!ft(t),c=o[e];if(c!==Du[e]){const d=c.apply(t,i);return a?Et(d):d}let l=n;o!==t&&(a?l=function(d,w){return n.call(this,An(t,d),w,t)}:n.length>2&&(l=function(d,w){return n.call(this,d,w,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function jo(t,e,n,r){const s=ni(t);let i=n;return s!==t&&(ft(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,An(t,a),c,t)}),s[e](i,...r)}function xi(t,e,n){const r=de(t);He(r,"iterate",Xr);const s=r[e](...n);return(s===-1||s===!1)&&si(n[0])?(n[0]=de(n[0]),r[e](...n)):s}function Rr(t,e,n=[]){pn(),fo();const r=de(t)[e].apply(t,n);return po(),mn(),r}const Ru=co("__proto__,__v_isRef,__isVue"),Oc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kt));function Ou(t){Kt(t)||(t=String(t));const e=de(this);return He(e,"has",t),e.hasOwnProperty(t)}class Pc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Vu:Nc:i?Fc:Lc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){let c;if(o&&(c=Iu[n]))return c;if(n==="hasOwnProperty")return Ou}const a=Reflect.get(e,n,Se(e)?e:r);if((Kt(n)?Oc.has(n):Ru(n))||(s||He(e,"get",n),i))return a;if(Se(a)){const c=o&&Xs(n)?a:a.value;return s&&be(c)?$i(c):c}return be(a)?s?$i(a):ri(a):a}}class Bc extends Pc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=re(e)&&Xs(n);if(!this._isShallow){const l=gn(i);if(!ft(r)&&!gn(r)&&(i=de(i),r=de(r)),!o&&Se(i)&&!Se(r))return l||(i.value=r),!0}const a=o?Number(n)<e.length:fe(e,n),c=Reflect.set(e,n,r,Se(e)?e:s);return e===de(s)&&(a?Dn(r,i)&&sn(e,"set",n,r):sn(e,"add",n,r)),c}deleteProperty(e,n){const r=fe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&sn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Kt(n)||!Oc.has(n))&&He(e,"has",n),r}ownKeys(e){return He(e,"iterate",re(e)?"length":Yn),Reflect.ownKeys(e)}}class Pu extends Pc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Bu=new Bc,Lu=new Pu,Fu=new Bc(!0);const Ni=t=>t,ps=t=>Reflect.getPrototypeOf(t);function Nu(t,e,n){return function(...r){const s=this.__v_raw,i=de(s),o=fr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ni:e?vr:Et;return!e&&He(i,"iterate",c?Fi:Yn),qe(Object.create(l),{next(){const{value:d,done:w}=l.next();return w?{value:d,done:w}:{value:a?[u(d[0]),u(d[1])]:u(d),done:w}}})}}function ms(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $u(t,e){const n={get(s){const i=this.__v_raw,o=de(i),a=de(s);t||(Dn(s,a)&&He(o,"get",s),He(o,"get",a));const{has:c}=ps(o),l=e?Ni:t?vr:Et;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&He(de(s),"iterate",Yn),s.size},has(s){const i=this.__v_raw,o=de(i),a=de(s);return t||(Dn(s,a)&&He(o,"has",s),He(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=de(a),l=e?Ni:t?vr:Et;return!t&&He(c,"iterate",Yn),a.forEach((u,d)=>s.call(i,l(u),l(d),o))}};return qe(n,t?{add:ms("add"),set:ms("set"),delete:ms("delete"),clear:ms("clear")}:{add(s){!e&&!ft(s)&&!gn(s)&&(s=de(s));const i=de(this);return ps(i).has.call(i,s)||(i.add(s),sn(i,"add",s,s)),this},set(s,i){!e&&!ft(i)&&!gn(i)&&(i=de(i));const o=de(this),{has:a,get:c}=ps(o);let l=a.call(o,s);l||(s=de(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Dn(i,u)&&sn(o,"set",s,i):sn(o,"add",s,i),this},delete(s){const i=de(this),{has:o,get:a}=ps(i);let c=o.call(i,s);c||(s=de(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&sn(i,"delete",s,void 0),l},clear(){const s=de(this),i=s.size!==0,o=s.clear();return i&&sn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Nu(s,t,e)}),n}function ho(t,e){const n=$u(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(fe(n,s)&&s in r?n:r,s,i)}const qu={get:ho(!1,!1)},Mu={get:ho(!1,!0)},Uu={get:ho(!0,!1)};const Lc=new WeakMap,Fc=new WeakMap,Nc=new WeakMap,Vu=new WeakMap;function Hu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wu(t){return t.__v_skip||!Object.isExtensible(t)?0:Hu(mu(t))}function ri(t){return gn(t)?t:yo(t,!1,Bu,qu,Lc)}function zu(t){return yo(t,!1,Fu,Mu,Fc)}function $i(t){return yo(t,!0,Lu,Uu,Nc)}function yo(t,e,n,r,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Wu(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function ln(t){return gn(t)?ln(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function ft(t){return!!(t&&t.__v_isShallow)}function si(t){return t?!!t.__v_raw:!1}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function bo(t){return!fe(t,"__v_skip")&&Object.isExtensible(t)&&yc(t,"__v_skip",!0),t}const Et=t=>be(t)?ri(t):t,vr=t=>be(t)?$i(t):t;function Se(t){return t?t.__v_isRef===!0:!1}function B(t){return Gu(t,!1)}function Gu(t,e){return Se(t)?t:new Ku(t,e)}class Ku{constructor(e,n){this.dep=new go,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:de(e),this._value=n?e:Et(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ft(e)||gn(e);e=r?e:de(e),Dn(e,n)&&(this._rawValue=e,this._value=r?e:Et(e),this.dep.trigger())}}function Zr(t){return Se(t)?t.value:t}const ju={get:(t,e,n)=>e==="__v_raw"?t:Zr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $c(t){return ln(t)?t:new Proxy(t,ju)}function Yu(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=Zu(t,n);return e}class Xu{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=de(e);let s=!0,i=e;if(!re(e)||!Xs(String(n)))do s=!si(i)||ft(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Zr(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Se(this._raw[this._key])){const n=this._object[this._key];if(Se(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Su(this._raw,this._key)}}function Zu(t,e,n){return new Xu(t,e,n)}class Ju{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new go(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return Cc(this,!0),!0}get value(){const e=this.dep.track();return Ic(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qu(t,e,n=!1){let r,s;return oe(t)?r=t:(r=t.get,s=t.set),new Ju(r,s,n)}const gs={},Ls=new WeakMap;let $n;function ed(t,e=!1,n=$n){if(n){let r=Ls.get(n);r||Ls.set(n,r=[]),r.push(t)}}function td(t,e,n=we){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=f=>s?f:ft(f)||s===!1||s===0?on(f,1):on(f);let u,d,w,y,T=!1,_=!1;if(Se(t)?(d=()=>t.value,T=ft(t)):ln(t)?(d=()=>l(t),T=!0):re(t)?(_=!0,T=t.some(f=>ln(f)||ft(f)),d=()=>t.map(f=>{if(Se(f))return f.value;if(ln(f))return l(f);if(oe(f))return c?c(f,2):f()})):oe(t)?e?d=c?()=>c(t,2):t:d=()=>{if(w){pn();try{w()}finally{mn()}}const f=$n;$n=u;try{return c?c(t,3,[y]):t(y)}finally{$n=f}}:d=zt,e&&s){const f=d,p=s===!0?1/0:s;d=()=>on(f(),p)}const I=xc(),S=()=>{u.stop(),I&&I.active&&uo(I.effects,u)};if(i&&e){const f=e;e=(...p)=>{f(...p),S()}}let b=_?new Array(t.length).fill(gs):gs;const g=f=>{if(!(!(u.flags&1)||!u.dirty&&!f))if(e){const p=u.run();if(s||T||(_?p.some((v,k)=>Dn(v,b[k])):Dn(p,b))){w&&w();const v=$n;$n=u;try{const k=[p,b===gs?void 0:_&&b[0]===gs?[]:b,y];b=p,c?c(e,3,k):e(...k)}finally{$n=v}}}else u.run()};return a&&a(g),u=new Ac(d),u.scheduler=o?()=>o(g,!1):g,y=f=>ed(f,!1,u),w=u.onStop=()=>{const f=Ls.get(u);if(f){if(c)c(f,4);else for(const p of f)p();Ls.delete(u)}},e?r?g(!0):b=u.run():o?o(g.bind(null,!0),!0):u.run(),S.pause=u.pause.bind(u),S.resume=u.resume.bind(u),S.stop=S,S}function on(t,e=1/0,n){if(e<=0||!be(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Se(t))on(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)on(t[r],e,n);else if(Ys(t)||fr(t))t.forEach(r=>{on(r,e,n)});else if(hc(t)){for(const r in t)on(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&on(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function as(t,e,n,r){try{return r?t(...r):t()}catch(s){cs(s,e,n)}}function jt(t,e,n,r){if(oe(t)){const s=as(t,e,n,r);return s&&mc(s)&&s.catch(i=>{cs(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(jt(t[i],e,n,r));return s}}function cs(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||we;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(i){pn(),as(i,null,10,[t,c,l]),mn();return}}nd(t,n,s,r,o)}function nd(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ke=[];let Ft=-1;const pr=[];let Tn=null,or=0;const qc=Promise.resolve();let Fs=null;function vo(t){const e=Fs||qc;return t?e.then(this?t.bind(this):t):e}function rd(t){let e=Ft+1,n=Ke.length;for(;e<n;){const r=e+n>>>1,s=Ke[r],i=Jr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function wo(t){if(!(t.flags&1)){const e=Jr(t),n=Ke[Ke.length-1];!n||!(t.flags&2)&&e>=Jr(n)?Ke.push(t):Ke.splice(rd(e),0,t),t.flags|=1,Mc()}}function Mc(){Fs||(Fs=qc.then(Vc))}function sd(t){re(t)?pr.push(...t):Tn&&t.id===-1?Tn.splice(or+1,0,t):t.flags&1||(pr.push(t),t.flags|=1),Mc()}function Yo(t,e,n=Ft+1){for(;n<Ke.length;n++){const r=Ke[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ke.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Uc(t){if(pr.length){const e=[...new Set(pr)].sort((n,r)=>Jr(n)-Jr(r));if(pr.length=0,Tn){Tn.push(...e);return}for(Tn=e,or=0;or<Tn.length;or++){const n=Tn[or];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tn=null,or=0}}const Jr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Vc(t){try{for(Ft=0;Ft<Ke.length;Ft++){const e=Ke[Ft];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),as(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ft<Ke.length;Ft++){const e=Ke[Ft];e&&(e.flags&=-2)}Ft=-1,Ke.length=0,Uc(),Fs=null,(Ke.length||pr.length)&&Vc()}}let ut=null,Hc=null;function Ns(t){const e=ut;return ut=t,Hc=t&&t.type.__scopeId||null,e}function id(t,e=ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&da(-1);const i=Ns(e);let o;try{o=t(...s)}finally{Ns(i),r._d&&da(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function t0(t,e){if(ut===null)return t;const n=ci(ut),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=we]=e[s];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&on(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Ln(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(pn(),jt(c,n,8,[t.el,a,t,e]),mn())}}function od(t,e){if(Fe){let n=Fe.provides;const r=Fe.parent&&Fe.parent.provides;r===n&&(n=Fe.provides=Object.create(r)),n[t]=e}}function Mr(t,e,n=!1){const r=hl();if(r||Xn){let s=Xn?Xn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}function ad(){return!!(hl()||Xn)}const cd=Symbol.for("v-scx"),ld=()=>Mr(cd);function As(t,e,n){return Wc(t,e,n)}function Wc(t,e,n=we){const{immediate:r,deep:s,flush:i,once:o}=n,a=qe({},n),c=e&&r||!e&&i!=="post";let l;if(_r){if(i==="sync"){const y=ld();l=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=zt,y.resume=zt,y.pause=zt,y}}const u=Fe;a.call=(y,T,_)=>jt(y,u,T,_);let d=!1;i==="post"?a.scheduler=y=>{Ue(y,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(y,T)=>{T?y():wo(y)}),a.augmentJob=y=>{e&&(y.flags|=4),d&&(y.flags|=2,u&&(y.id=u.uid,y.i=u))};const w=td(t,e,a);return _r&&(l?l.push(w):c&&w()),w}function ud(t,e,n){const r=this.proxy,s=Ie(t)?t.includes(".")?zc(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const o=ls(this),a=Wc(s,i.bind(r),n);return o(),a}function zc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Gc=Symbol("_vte"),dd=t=>t.__isTeleport,Ur=t=>t&&(t.disabled||t.disabled===""),Xo=t=>t&&(t.defer||t.defer===""),Zo=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Jo=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,qi=(t,e)=>{const n=t&&t.to;return Ie(n)?e?e(n):null:n},Kc={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:d,pbc:w,o:{insert:y,querySelector:T,createText:_,createComment:I}}=l,S=Ur(e.props);let{shapeFlag:b,children:g,dynamicChildren:f}=e;if(t==null){const p=e.el=_(""),v=e.anchor=_("");y(p,n,r),y(v,n,r);const k=(h,E)=>{b&16&&u(g,h,E,s,i,o,a,c)},A=()=>{const h=e.target=qi(e.props,T),E=Mi(h,e,_,y);h&&(o!=="svg"&&Zo(h)?o="svg":o!=="mathml"&&Jo(h)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(h),S||(k(h,E),Ts(e,!1)))};S&&(k(n,v),Ts(e,!0)),Xo(e.props)?(e.el.__isMounted=!1,Ue(()=>{A(),delete e.el.__isMounted},i)):A()}else{if(Xo(e.props)&&t.el.__isMounted===!1){Ue(()=>{Kc.process(t,e,n,r,s,i,o,a,c,l)},i);return}e.el=t.el,e.targetStart=t.targetStart;const p=e.anchor=t.anchor,v=e.target=t.target,k=e.targetAnchor=t.targetAnchor,A=Ur(t.props),h=A?n:v,E=A?p:k;if(o==="svg"||Zo(v)?o="svg":(o==="mathml"||Jo(v))&&(o="mathml"),f?(w(t.dynamicChildren,f,h,s,i,o,a),So(t,e,!0)):c||d(t,e,h,E,s,i,o,a,!1),S)A?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):hs(e,n,p,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const m=e.target=qi(e.props,T);m&&hs(e,m,null,l,0)}else A&&hs(e,v,k,l,1);Ts(e,S)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:l,targetAnchor:u,target:d,props:w}=t;if(d&&(s(l),s(u)),i&&s(c),o&16){const y=i||!Ur(w);for(let T=0;T<a.length;T++){const _=a[T];r(_,e,n,y,!!_.dynamicChildren)}}},move:hs,hydrate:fd};function hs(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,d=i===2;if(d&&r(o,e,n),(!d||Ur(u))&&c&16)for(let w=0;w<l.length;w++)s(l[w],e,n,2);d&&r(a,e,n)}function fd(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:l,createText:u}},d){function w(I,S){let b=S;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")e.targetStart=b;else if(b.data==="teleport anchor"){e.targetAnchor=b,I._lpa=e.targetAnchor&&o(e.targetAnchor);break}}b=o(b)}}function y(I,S){S.anchor=d(o(I),S,a(I),n,r,s,i)}const T=e.target=qi(e.props,c),_=Ur(e.props);if(T){const I=T._lpa||T.firstChild;e.shapeFlag&16&&(_?(y(t,e),w(T,I),e.targetAnchor||Mi(T,e,u,l,a(t)===T?t:null)):(e.anchor=o(t),w(T,I),e.targetAnchor||Mi(T,e,u,l),d(I&&o(I),e,T,n,r,s,i))),Ts(e,_)}else _&&e.shapeFlag&16&&(y(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const n0=Kc;function Ts(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Mi(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Gc]=o,t&&(r(i,t,s),r(o,t,s)),o}const pd=Symbol("_leaveCb");function _o(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_o(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function md(t,e){return oe(t)?qe({name:t.name},e,{setup:t}):t}function ko(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qo(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const $s=new WeakMap;function Vr(t,e,n,r,s=!1){if(re(t)){t.forEach((_,I)=>Vr(_,e&&(re(e)?e[I]:e),n,r,s));return}if(Hr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Vr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ci(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,d=a.setupState,w=de(d),y=d===we?pc:_=>Qo(u,_)?!1:fe(w,_),T=(_,I)=>!(I&&Qo(u,I));if(l!=null&&l!==c){if(ea(e),Ie(l))u[l]=null,y(l)&&(d[l]=null);else if(Se(l)){const _=e;T(l,_.k)&&(l.value=null),_.k&&(u[_.k]=null)}}if(oe(c))as(c,a,12,[o,u]);else{const _=Ie(c),I=Se(c);if(_||I){const S=()=>{if(t.f){const b=_?y(c)?d[c]:u[c]:T()||!t.k?c.value:u[t.k];if(s)re(b)&&uo(b,i);else if(re(b))b.includes(i)||b.push(i);else if(_)u[c]=[i],y(c)&&(d[c]=u[c]);else{const g=[i];T(c,t.k)&&(c.value=g),t.k&&(u[t.k]=g)}}else _?(u[c]=o,y(c)&&(d[c]=o)):I&&(T(c,t.k)&&(c.value=o),t.k&&(u[t.k]=o))};if(o){const b=()=>{S(),$s.delete(t)};b.id=-1,$s.set(t,b),Ue(b,n)}else ea(t),S()}}}function ea(t){const e=$s.get(t);e&&(e.flags|=8,$s.delete(t))}const ta=t=>t.nodeType===8;ei().requestIdleCallback;ei().cancelIdleCallback;function gd(t,e){if(ta(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(ta(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Hr=t=>!!t.type.__asyncLoader;function he(t){oe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let l=null,u,d=0;const w=()=>(d++,l=null,y()),y=()=>{let T;return l||(T=l=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),c)return new Promise((I,S)=>{c(_,()=>I(w()),()=>S(_),d+1)});throw _}).then(_=>T!==l&&l?l:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return md({name:"AsyncComponentWrapper",__asyncLoader:y,__asyncHydrate(T,_,I){let S=!1;(_.bu||(_.bu=[])).push(()=>S=!0);const b=()=>{S||I()},g=i?()=>{const f=i(b,p=>gd(T,p));f&&(_.bum||(_.bum=[])).push(f)}:b;u?g():y().then(()=>!_.isUnmounted&&g())},get __asyncResolved(){return u},setup(){const T=Fe;if(ko(T),u)return()=>ys(u,T);const _=g=>{l=null,cs(g,T,13,!r)};if(a&&T.suspense||_r)return y().then(g=>()=>ys(g,T)).catch(g=>(_(g),()=>r?Ne(r,{error:g}):null));const I=B(!1),S=B(),b=B(!!s);return s&&setTimeout(()=>{b.value=!1},s),o!=null&&setTimeout(()=>{if(!I.value&&!S.value){const g=new Error(`Async component timed out after ${o}ms.`);_(g),S.value=g}},o),y().then(()=>{I.value=!0,T.parent&&xo(T.parent.vnode)&&T.parent.update()}).catch(g=>{_(g),S.value=g}),()=>{if(I.value&&u)return ys(u,T);if(S.value&&r)return Ne(r,{error:S.value});if(n&&!b.value)return ys(n,T)}}})}function ys(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Ne(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const xo=t=>t.type.__isKeepAlive;function hd(t,e){jc(t,"a",e)}function yd(t,e){jc(t,"da",e)}function jc(t,e,n=Fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ii(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xo(s.parent.vnode)&&bd(r,e,n,s),s=s.parent}}function bd(t,e,n,r){const s=ii(e,t,r,!0);To(()=>{uo(r[e],s)},n)}function ii(t,e,n=Fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{pn();const a=ls(n),c=jt(e,n,t,o);return a(),mn(),c});return r?s.unshift(i):s.push(i),i}}const yn=t=>(e,n=Fe)=>{(!_r||t==="sp")&&ii(t,(...r)=>e(...r),n)},vd=yn("bm"),Ao=yn("m"),wd=yn("bu"),_d=yn("u"),kd=yn("bum"),To=yn("um"),xd=yn("sp"),Ad=yn("rtg"),Td=yn("rtc");function Cd(t,e=Fe){ii("ec",t,e)}const Ed="components",Yc=Symbol.for("v-ndc");function Sd(t){return Ie(t)?Id(Ed,t,!1)||t:t||Yc}function Id(t,e,n=!0,r=!1){const s=ut||Fe;if(s){const i=s.type;{const a=mf(i,!1);if(a&&(a===e||a===vt(e)||a===Js(vt(e))))return i}const o=na(s[t]||i[t],e)||na(s.appContext[t],e);return!o&&r?i:o}}function na(t,e){return t&&(t[e]||t[vt(e)]||t[Js(vt(e))])}function qs(t,e,n,r){let s;const i=n,o=re(t);if(o||Ie(t)){const a=o&&ln(t);let c=!1,l=!1;a&&(c=!ft(t),l=gn(t),t=ni(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?l?vr(Et(t[u])):Et(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(be(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}const Ui=t=>t?yl(t)?ci(t):Ui(t.parent):null,Wr=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ui(t.parent),$root:t=>Ui(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zc(t),$forceUpdate:t=>t.f||(t.f=()=>{wo(t.update)}),$nextTick:t=>t.n||(t.n=vo.bind(t.proxy)),$watch:t=>ud.bind(t)}),Ai=(t,e)=>t!==we&&!t.__isScriptSetup&&fe(t,e),Dd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ai(r,e))return o[e]=1,r[e];if(s!==we&&fe(s,e))return o[e]=2,s[e];if(fe(i,e))return o[e]=3,i[e];if(n!==we&&fe(n,e))return o[e]=4,n[e];Vi&&(o[e]=0)}}const l=Wr[e];let u,d;if(l)return e==="$attrs"&&He(t.attrs,"get",""),l(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==we&&fe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,fe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ai(s,e)?(s[e]=n,!0):r!==we&&fe(r,e)?(r[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},a){let c;return!!(n[a]||t!==we&&a[0]!=="$"&&fe(t,a)||Ai(e,a)||fe(i,a)||fe(r,a)||fe(Wr,a)||fe(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ra(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vi=!0;function Rd(t){const e=Zc(t),n=t.proxy,r=t.ctx;Vi=!1,e.beforeCreate&&sa(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:w,beforeUpdate:y,updated:T,activated:_,deactivated:I,beforeDestroy:S,beforeUnmount:b,destroyed:g,unmounted:f,render:p,renderTracked:v,renderTriggered:k,errorCaptured:A,serverPrefetch:h,expose:E,inheritAttrs:m,components:x,directives:L,filters:q}=e;if(l&&Od(l,r,null),o)for(const O in o){const P=o[O];oe(P)&&(r[O]=P.bind(n))}if(s){const O=s.call(n,n);be(O)&&(t.data=ri(O))}if(Vi=!0,i)for(const O in i){const P=i[O],z=oe(P)?P.bind(n,n):oe(P.get)?P.get.bind(n,n):zt,X=!oe(P)&&oe(P.set)?P.set.bind(n):zt,ie=R({get:z,set:X});Object.defineProperty(r,O,{enumerable:!0,configurable:!0,get:()=>ie.value,set:le=>ie.value=le})}if(a)for(const O in a)Xc(a[O],r,n,O);if(c){const O=oe(c)?c.call(n):c;Reflect.ownKeys(O).forEach(P=>{od(P,O[P])})}u&&sa(u,t,"c");function F(O,P){re(P)?P.forEach(z=>O(z.bind(n))):P&&O(P.bind(n))}if(F(vd,d),F(Ao,w),F(wd,y),F(_d,T),F(hd,_),F(yd,I),F(Cd,A),F(Td,v),F(Ad,k),F(kd,b),F(To,f),F(xd,h),re(E))if(E.length){const O=t.exposed||(t.exposed={});E.forEach(P=>{Object.defineProperty(O,P,{get:()=>n[P],set:z=>n[P]=z,enumerable:!0})})}else t.exposed||(t.exposed={});p&&t.render===zt&&(t.render=p),m!=null&&(t.inheritAttrs=m),x&&(t.components=x),L&&(t.directives=L),h&&ko(t)}function Od(t,e,n=zt){re(t)&&(t=Hi(t));for(const r in t){const s=t[r];let i;be(s)?"default"in s?i=Mr(s.from||r,s.default,!0):i=Mr(s.from||r):i=Mr(s),Se(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sa(t,e,n){jt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xc(t,e,n,r){let s=r.includes(".")?zc(n,r):()=>n[r];if(Ie(t)){const i=e[t];oe(i)&&As(s,i)}else if(oe(t))As(s,t.bind(n));else if(be(t))if(re(t))t.forEach(i=>Xc(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&As(s,i,t)}}function Zc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ms(c,l,o,!0)),Ms(c,e,o)),be(e)&&i.set(e,c),c}function Ms(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ms(t,i,n,!0),s&&s.forEach(o=>Ms(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Pd[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Pd={data:ia,props:oa,emits:oa,methods:Fr,computed:Fr,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Fr,directives:Fr,watch:Ld,provide:ia,inject:Bd};function ia(t,e){return e?t?function(){return qe(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function Bd(t,e){return Fr(Hi(t),Hi(e))}function Hi(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Fr(t,e){return t?qe(Object.create(null),t,e):e}function oa(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:qe(Object.create(null),ra(t),ra(e??{})):e}function Ld(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const r in e)n[r]=Ge(t[r],e[r]);return n}function Jc(){return{app:null,config:{isNativeTag:pc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fd=0;function Nd(t,e){return function(r,s=null){oe(r)||(r=qe({},r)),s!=null&&!be(s)&&(s=null);const i=Jc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Fd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&oe(u.install)?(o.add(u),u.install(l,...d)):oe(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,w){if(!c){const y=l._ceVNode||Ne(r,s);return y.appContext=i,w===!0?w="svg":w===!1&&(w=void 0),t(y,u,w),c=!0,l._container=u,u.__vue_app__=l,ci(y.component)}},onUnmount(u){a.push(u)},unmount(){c&&(jt(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=Xn;Xn=l;try{return u()}finally{Xn=d}}};return l}}let Xn=null;const $d=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vt(e)}Modifiers`]||t[`${On(e)}Modifiers`];function qd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&$d(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>Ie(u)?u.trim():u)),o.number&&(s=n.map(Qs)));let a,c=r[a=vi(e)]||r[a=vi(vt(e))];!c&&i&&(c=r[a=vi(On(e))]),c&&jt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jt(l,t,6,s)}}const Md=new WeakMap;function Qc(t,e,n=!1){const r=n?Md:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!oe(t)){const c=l=>{const u=Qc(l,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(be(t)&&r.set(t,null),null):(re(i)?i.forEach(c=>o[c]=null):qe(o,i),be(t)&&r.set(t,o),o)}function oi(t,e){return!t||!js(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,On(e))||fe(t,e))}function aa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:w,setupState:y,ctx:T,inheritAttrs:_}=t,I=Ns(t);let S,b;try{if(n.shapeFlag&4){const f=s||r,p=f;S=Ut(l.call(p,f,u,d,y,w,T)),b=a}else{const f=e;S=Ut(f.length>1?f(d,{attrs:a,slots:o,emit:c}):f(d,null)),b=e.props?a:Ud(a)}}catch(f){zr.length=0,cs(f,t,1),S=Ne(Rn)}let g=S;if(b&&_!==!1){const f=Object.keys(b),{shapeFlag:p}=g;f.length&&p&7&&(i&&f.some(lo)&&(b=Vd(b,i)),g=wr(g,b,!1,!0))}return n.dirs&&(g=wr(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&_o(g,n.transition),S=g,Ns(I),S}const Ud=t=>{let e;for(const n in t)(n==="class"||n==="style"||js(n))&&((e||(e={}))[n]=t[n]);return e},Vd=(t,e)=>{const n={};for(const r in t)(!lo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hd(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ca(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const w=u[d];if(el(o,r,w)&&!oi(l,w))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ca(r,o,l):!0:!!o;return!1}function ca(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(el(e,t,i)&&!oi(n,i))return!0}return!1}function el(t,e,n){const r=t[n],s=e[n];return n==="style"&&be(r)&&be(s)?!Qn(r,s):r!==s}function Wd({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const tl={},nl=()=>Object.create(tl),rl=t=>Object.getPrototypeOf(t)===tl;function zd(t,e,n,r=!1){const s={},i=nl();t.propsDefaults=Object.create(null),sl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:zu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Gd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=de(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let w=u[d];if(oi(t.emitsOptions,w))continue;const y=e[w];if(c)if(fe(i,w))y!==i[w]&&(i[w]=y,l=!0);else{const T=vt(w);s[T]=Wi(c,a,T,y,t,!1)}else y!==i[w]&&(i[w]=y,l=!0)}}}else{sl(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!fe(e,d)&&((u=On(d))===d||!fe(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Wi(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!fe(e,d))&&(delete i[d],l=!0)}l&&sn(t.attrs,"set","")}function sl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Nr(c))continue;const l=e[c];let u;s&&fe(s,u=vt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:oi(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=de(n),l=a||we;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Wi(s,c,d,l[d],t,!fe(l,d))}}return o}function Wi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&oe(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=ls(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===On(n))&&(r=!0))}return r}const Kd=new WeakMap;function il(t,e,n=!1){const r=n?Kd:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!oe(t)){const u=d=>{c=!0;const[w,y]=il(d,e,!0);qe(o,w),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return be(t)&&r.set(t,dr),dr;if(re(i))for(let u=0;u<i.length;u++){const d=vt(i[u]);la(d)&&(o[d]=we)}else if(i)for(const u in i){const d=vt(u);if(la(d)){const w=i[u],y=o[d]=re(w)||oe(w)?{type:w}:qe({},w),T=y.type;let _=!1,I=!0;if(re(T))for(let S=0;S<T.length;++S){const b=T[S],g=oe(b)&&b.name;if(g==="Boolean"){_=!0;break}else g==="String"&&(I=!1)}else _=oe(T)&&T.name==="Boolean";y[0]=_,y[1]=I,(_||fe(y,"default"))&&a.push(d)}}const l=[o,a];return be(t)&&r.set(t,l),l}function la(t){return t[0]!=="$"&&!Nr(t)}const Co=t=>t==="_"||t==="_ctx"||t==="$stable",Eo=t=>re(t)?t.map(Ut):[Ut(t)],jd=(t,e,n)=>{if(e._n)return e;const r=id((...s)=>Eo(e(...s)),n);return r._c=!1,r},ol=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Co(s))continue;const i=t[s];if(oe(i))e[s]=jd(s,i,r);else if(i!=null){const o=Eo(i);e[s]=()=>o}}},al=(t,e)=>{const n=Eo(e);t.slots.default=()=>n},cl=(t,e,n)=>{for(const r in e)(n||!Co(r))&&(t[r]=e[r])},Yd=(t,e,n)=>{const r=t.slots=nl();if(t.vnode.shapeFlag&32){const s=e._;s?(cl(r,e,n),n&&yc(r,"_",s,!0)):ol(e,r)}else e&&al(t,e)},Xd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:cl(s,e,n):(i=!e.$stable,ol(e,s)),o=e}else e&&(al(t,e),o={default:1});if(i)for(const a in s)!Co(a)&&o[a]==null&&delete s[a]},Ue=tf;function Zd(t){return Jd(t)}function Jd(t,e){const n=ei();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:w,setScopeId:y=zt,insertStaticContent:T}=t,_=(C,D,N,V=null,M=null,H=null,Y=void 0,K=null,G=!!D.dynamicChildren)=>{if(C===D)return;C&&!Or(C,D)&&(V=ot(C),le(C,M,H,!0),C=null),D.patchFlag===-2&&(G=!1,D.dynamicChildren=null);const{type:W,ref:ne,shapeFlag:Z}=D;switch(W){case ai:I(C,D,N,V);break;case Rn:S(C,D,N,V);break;case Cs:C==null&&b(D,N,V,Y);break;case lt:x(C,D,N,V,M,H,Y,K,G);break;default:Z&1?p(C,D,N,V,M,H,Y,K,G):Z&6?L(C,D,N,V,M,H,Y,K,G):(Z&64||Z&128)&&W.process(C,D,N,V,M,H,Y,K,G,mt)}ne!=null&&M?Vr(ne,C&&C.ref,H,D||C,!D):ne==null&&C&&C.ref!=null&&Vr(C.ref,null,H,C,!0)},I=(C,D,N,V)=>{if(C==null)r(D.el=a(D.children),N,V);else{const M=D.el=C.el;D.children!==C.children&&l(M,D.children)}},S=(C,D,N,V)=>{C==null?r(D.el=c(D.children||""),N,V):D.el=C.el},b=(C,D,N,V)=>{[C.el,C.anchor]=T(C.children,D,N,V,C.el,C.anchor)},g=({el:C,anchor:D},N,V)=>{let M;for(;C&&C!==D;)M=w(C),r(C,N,V),C=M;r(D,N,V)},f=({el:C,anchor:D})=>{let N;for(;C&&C!==D;)N=w(C),s(C),C=N;s(D)},p=(C,D,N,V,M,H,Y,K,G)=>{if(D.type==="svg"?Y="svg":D.type==="math"&&(Y="mathml"),C==null)v(D,N,V,M,H,Y,K,G);else{const W=C.el&&C.el._isVueCE?C.el:null;try{W&&W._beginPatch(),h(C,D,M,H,Y,K,G)}finally{W&&W._endPatch()}}},v=(C,D,N,V,M,H,Y,K)=>{let G,W;const{props:ne,shapeFlag:Z,transition:te,dirs:se}=C;if(G=C.el=o(C.type,H,ne&&ne.is,ne),Z&8?u(G,C.children):Z&16&&A(C.children,G,null,V,M,Ti(C,H),Y,K),se&&Ln(C,null,V,"created"),k(G,C,C.scopeId,Y,V),ne){for(const _e in ne)_e!=="value"&&!Nr(_e)&&i(G,_e,null,ne[_e],H,V);"value"in ne&&i(G,"value",null,ne.value,H),(W=ne.onVnodeBeforeMount)&&Bt(W,V,C)}se&&Ln(C,null,V,"beforeMount");const ce=Qd(M,te);ce&&te.beforeEnter(G),r(G,D,N),((W=ne&&ne.onVnodeMounted)||ce||se)&&Ue(()=>{W&&Bt(W,V,C),ce&&te.enter(G),se&&Ln(C,null,V,"mounted")},M)},k=(C,D,N,V,M)=>{if(N&&y(C,N),V)for(let H=0;H<V.length;H++)y(C,V[H]);if(M){let H=M.subTree;if(D===H||dl(H.type)&&(H.ssContent===D||H.ssFallback===D)){const Y=M.vnode;k(C,Y,Y.scopeId,Y.slotScopeIds,M.parent)}}},A=(C,D,N,V,M,H,Y,K,G=0)=>{for(let W=G;W<C.length;W++){const ne=C[W]=K?en(C[W]):Ut(C[W]);_(null,ne,D,N,V,M,H,Y,K)}},h=(C,D,N,V,M,H,Y)=>{const K=D.el=C.el;let{patchFlag:G,dynamicChildren:W,dirs:ne}=D;G|=C.patchFlag&16;const Z=C.props||we,te=D.props||we;let se;if(N&&Fn(N,!1),(se=te.onVnodeBeforeUpdate)&&Bt(se,N,D,C),ne&&Ln(D,C,N,"beforeUpdate"),N&&Fn(N,!0),(Z.innerHTML&&te.innerHTML==null||Z.textContent&&te.textContent==null)&&u(K,""),W?E(C.dynamicChildren,W,K,N,V,Ti(D,M),H):Y||P(C,D,K,null,N,V,Ti(D,M),H,!1),G>0){if(G&16)m(K,Z,te,N,M);else if(G&2&&Z.class!==te.class&&i(K,"class",null,te.class,M),G&4&&i(K,"style",Z.style,te.style,M),G&8){const ce=D.dynamicProps;for(let _e=0;_e<ce.length;_e++){const ge=ce[_e],Ze=Z[ge],Je=te[ge];(Je!==Ze||ge==="value")&&i(K,ge,Ze,Je,M,N)}}G&1&&C.children!==D.children&&u(K,D.children)}else!Y&&W==null&&m(K,Z,te,N,M);((se=te.onVnodeUpdated)||ne)&&Ue(()=>{se&&Bt(se,N,D,C),ne&&Ln(D,C,N,"updated")},V)},E=(C,D,N,V,M,H,Y)=>{for(let K=0;K<D.length;K++){const G=C[K],W=D[K],ne=G.el&&(G.type===lt||!Or(G,W)||G.shapeFlag&198)?d(G.el):N;_(G,W,ne,null,V,M,H,Y,!0)}},m=(C,D,N,V,M)=>{if(D!==N){if(D!==we)for(const H in D)!Nr(H)&&!(H in N)&&i(C,H,D[H],null,M,V);for(const H in N){if(Nr(H))continue;const Y=N[H],K=D[H];Y!==K&&H!=="value"&&i(C,H,K,Y,M,V)}"value"in N&&i(C,"value",D.value,N.value,M)}},x=(C,D,N,V,M,H,Y,K,G)=>{const W=D.el=C?C.el:a(""),ne=D.anchor=C?C.anchor:a("");let{patchFlag:Z,dynamicChildren:te,slotScopeIds:se}=D;se&&(K=K?K.concat(se):se),C==null?(r(W,N,V),r(ne,N,V),A(D.children||[],N,ne,M,H,Y,K,G)):Z>0&&Z&64&&te&&C.dynamicChildren&&C.dynamicChildren.length===te.length?(E(C.dynamicChildren,te,N,M,H,Y,K),(D.key!=null||M&&D===M.subTree)&&So(C,D,!0)):P(C,D,N,ne,M,H,Y,K,G)},L=(C,D,N,V,M,H,Y,K,G)=>{D.slotScopeIds=K,C==null?D.shapeFlag&512?M.ctx.activate(D,N,V,Y,G):q(D,N,V,M,H,Y,G):$(C,D,G)},q=(C,D,N,V,M,H,Y)=>{const K=C.component=lf(C,V,M);if(xo(C)&&(K.ctx.renderer=mt),uf(K,!1,Y),K.asyncDep){if(M&&M.registerDep(K,F,Y),!C.el){const G=K.subTree=Ne(Rn);S(null,G,D,N),C.placeholder=G.el}}else F(K,C,D,N,M,H,Y)},$=(C,D,N)=>{const V=D.component=C.component;if(Hd(C,D,N))if(V.asyncDep&&!V.asyncResolved){O(V,D,N);return}else V.next=D,V.update();else D.el=C.el,V.vnode=D},F=(C,D,N,V,M,H,Y)=>{const K=()=>{if(C.isMounted){let{next:Z,bu:te,u:se,parent:ce,vnode:_e}=C;{const Ot=ll(C);if(Ot){Z&&(Z.el=_e.el,O(C,Z,Y)),Ot.asyncDep.then(()=>{Ue(()=>{C.isUnmounted||W()},M)});return}}let ge=Z,Ze;Fn(C,!1),Z?(Z.el=_e.el,O(C,Z,Y)):Z=_e,te&&xs(te),(Ze=Z.props&&Z.props.onVnodeBeforeUpdate)&&Bt(Ze,ce,Z,_e),Fn(C,!0);const Je=aa(C),Rt=C.subTree;C.subTree=Je,_(Rt,Je,d(Rt.el),ot(Rt),C,M,H),Z.el=Je.el,ge===null&&Wd(C,Je.el),se&&Ue(se,M),(Ze=Z.props&&Z.props.onVnodeUpdated)&&Ue(()=>Bt(Ze,ce,Z,_e),M)}else{let Z;const{el:te,props:se}=D,{bm:ce,m:_e,parent:ge,root:Ze,type:Je}=C,Rt=Hr(D);Fn(C,!1),ce&&xs(ce),!Rt&&(Z=se&&se.onVnodeBeforeMount)&&Bt(Z,ge,D),Fn(C,!0);{Ze.ce&&Ze.ce._hasShadowRoot()&&Ze.ce._injectChildStyle(Je);const Ot=C.subTree=aa(C);_(null,Ot,N,V,C,M,H),D.el=Ot.el}if(_e&&Ue(_e,M),!Rt&&(Z=se&&se.onVnodeMounted)){const Ot=D;Ue(()=>Bt(Z,ge,Ot),M)}(D.shapeFlag&256||ge&&Hr(ge.vnode)&&ge.vnode.shapeFlag&256)&&C.a&&Ue(C.a,M),C.isMounted=!0,D=N=V=null}};C.scope.on();const G=C.effect=new Ac(K);C.scope.off();const W=C.update=G.run.bind(G),ne=C.job=G.runIfDirty.bind(G);ne.i=C,ne.id=C.uid,G.scheduler=()=>wo(ne),Fn(C,!0),W()},O=(C,D,N)=>{D.component=C;const V=C.vnode.props;C.vnode=D,C.next=null,Gd(C,D.props,V,N),Xd(C,D.children,N),pn(),Yo(C),mn()},P=(C,D,N,V,M,H,Y,K,G=!1)=>{const W=C&&C.children,ne=C?C.shapeFlag:0,Z=D.children,{patchFlag:te,shapeFlag:se}=D;if(te>0){if(te&128){X(W,Z,N,V,M,H,Y,K,G);return}else if(te&256){z(W,Z,N,V,M,H,Y,K,G);return}}se&8?(ne&16&&wt(W,M,H),Z!==W&&u(N,Z)):ne&16?se&16?X(W,Z,N,V,M,H,Y,K,G):wt(W,M,H,!0):(ne&8&&u(N,""),se&16&&A(Z,N,V,M,H,Y,K,G))},z=(C,D,N,V,M,H,Y,K,G)=>{C=C||dr,D=D||dr;const W=C.length,ne=D.length,Z=Math.min(W,ne);let te;for(te=0;te<Z;te++){const se=D[te]=G?en(D[te]):Ut(D[te]);_(C[te],se,N,null,M,H,Y,K,G)}W>ne?wt(C,M,H,!0,!1,Z):A(D,N,V,M,H,Y,K,G,Z)},X=(C,D,N,V,M,H,Y,K,G)=>{let W=0;const ne=D.length;let Z=C.length-1,te=ne-1;for(;W<=Z&&W<=te;){const se=C[W],ce=D[W]=G?en(D[W]):Ut(D[W]);if(Or(se,ce))_(se,ce,N,null,M,H,Y,K,G);else break;W++}for(;W<=Z&&W<=te;){const se=C[Z],ce=D[te]=G?en(D[te]):Ut(D[te]);if(Or(se,ce))_(se,ce,N,null,M,H,Y,K,G);else break;Z--,te--}if(W>Z){if(W<=te){const se=te+1,ce=se<ne?D[se].el:V;for(;W<=te;)_(null,D[W]=G?en(D[W]):Ut(D[W]),N,ce,M,H,Y,K,G),W++}}else if(W>te)for(;W<=Z;)le(C[W],M,H,!0),W++;else{const se=W,ce=W,_e=new Map;for(W=ce;W<=te;W++){const at=D[W]=G?en(D[W]):Ut(D[W]);at.key!=null&&_e.set(at.key,W)}let ge,Ze=0;const Je=te-ce+1;let Rt=!1,Ot=0;const Dr=new Array(Je);for(W=0;W<Je;W++)Dr[W]=0;for(W=se;W<=Z;W++){const at=C[W];if(Ze>=Je){le(at,M,H,!0);continue}let Pt;if(at.key!=null)Pt=_e.get(at.key);else for(ge=ce;ge<=te;ge++)if(Dr[ge-ce]===0&&Or(at,D[ge])){Pt=ge;break}Pt===void 0?le(at,M,H,!0):(Dr[Pt-ce]=W+1,Pt>=Ot?Ot=Pt:Rt=!0,_(at,D[Pt],N,null,M,H,Y,K,G),Ze++)}const Mo=Rt?ef(Dr):dr;for(ge=Mo.length-1,W=Je-1;W>=0;W--){const at=ce+W,Pt=D[at],Uo=D[at+1],Vo=at+1<ne?Uo.el||ul(Uo):V;Dr[W]===0?_(null,Pt,N,Vo,M,H,Y,K,G):Rt&&(ge<0||W!==Mo[ge]?ie(Pt,N,Vo,2):ge--)}}},ie=(C,D,N,V,M=null)=>{const{el:H,type:Y,transition:K,children:G,shapeFlag:W}=C;if(W&6){ie(C.component.subTree,D,N,V);return}if(W&128){C.suspense.move(D,N,V);return}if(W&64){Y.move(C,D,N,mt);return}if(Y===lt){r(H,D,N);for(let Z=0;Z<G.length;Z++)ie(G[Z],D,N,V);r(C.anchor,D,N);return}if(Y===Cs){g(C,D,N);return}if(V!==2&&W&1&&K)if(V===0)K.beforeEnter(H),r(H,D,N),Ue(()=>K.enter(H),M);else{const{leave:Z,delayLeave:te,afterLeave:se}=K,ce=()=>{C.ctx.isUnmounted?s(H):r(H,D,N)},_e=()=>{H._isLeaving&&H[pd](!0),Z(H,()=>{ce(),se&&se()})};te?te(H,ce,_e):_e()}else r(H,D,N)},le=(C,D,N,V=!1,M=!1)=>{const{type:H,props:Y,ref:K,children:G,dynamicChildren:W,shapeFlag:ne,patchFlag:Z,dirs:te,cacheIndex:se}=C;if(Z===-2&&(M=!1),K!=null&&(pn(),Vr(K,null,N,C,!0),mn()),se!=null&&(D.renderCache[se]=void 0),ne&256){D.ctx.deactivate(C);return}const ce=ne&1&&te,_e=!Hr(C);let ge;if(_e&&(ge=Y&&Y.onVnodeBeforeUnmount)&&Bt(ge,D,C),ne&6)vn(C.component,N,V);else{if(ne&128){C.suspense.unmount(N,V);return}ce&&Ln(C,null,D,"beforeUnmount"),ne&64?C.type.remove(C,D,N,mt,V):W&&!W.hasOnce&&(H!==lt||Z>0&&Z&64)?wt(W,D,N,!1,!0):(H===lt&&Z&384||!M&&ne&16)&&wt(G,D,N),V&&it(C)}(_e&&(ge=Y&&Y.onVnodeUnmounted)||ce)&&Ue(()=>{ge&&Bt(ge,D,C),ce&&Ln(C,null,D,"unmounted")},N)},it=C=>{const{type:D,el:N,anchor:V,transition:M}=C;if(D===lt){ze(N,V);return}if(D===Cs){f(C);return}const H=()=>{s(N),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(C.shapeFlag&1&&M&&!M.persisted){const{leave:Y,delayLeave:K}=M,G=()=>Y(N,H);K?K(C.el,H,G):G()}else H()},ze=(C,D)=>{let N;for(;C!==D;)N=w(C),s(C),C=N;s(D)},vn=(C,D,N)=>{const{bum:V,scope:M,job:H,subTree:Y,um:K,m:G,a:W}=C;ua(G),ua(W),V&&xs(V),M.stop(),H&&(H.flags|=8,le(Y,C,D,N)),K&&Ue(K,D),Ue(()=>{C.isUnmounted=!0},D)},wt=(C,D,N,V=!1,M=!1,H=0)=>{for(let Y=H;Y<C.length;Y++)le(C[Y],D,N,V,M)},ot=C=>{if(C.shapeFlag&6)return ot(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const D=w(C.anchor||C.el),N=D&&D[Gc];return N?w(N):D};let Bn=!1;const Dt=(C,D,N)=>{let V;C==null?D._vnode&&(le(D._vnode,null,null,!0),V=D._vnode.component):_(D._vnode||null,C,D,null,null,null,N),D._vnode=C,Bn||(Bn=!0,Yo(V),Uc(),Bn=!1)},mt={p:_,um:le,m:ie,r:it,mt:q,mc:A,pc:P,pbc:E,n:ot,o:t};return{render:Dt,hydrate:void 0,createApp:Nd(Dt)}}function Ti({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Fn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function So(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=en(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&So(o,a)),a.type===ai&&(a.patchFlag===-1&&(a=s[i]=en(a)),a.el=o.el),a.type===Rn&&!a.el&&(a.el=o.el)}}function ef(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ll(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ll(e)}function ua(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ul(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?ul(e.subTree):null}const dl=t=>t.__isSuspense;function tf(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):sd(t)}const lt=Symbol.for("v-fgt"),ai=Symbol.for("v-txt"),Rn=Symbol.for("v-cmt"),Cs=Symbol.for("v-stc"),zr=[];let dt=null;function xe(t=!1){zr.push(dt=t?null:[])}function nf(){zr.pop(),dt=zr[zr.length-1]||null}let Qr=1;function da(t,e=!1){Qr+=t,t<0&&dt&&e&&(dt.hasOnce=!0)}function fl(t){return t.dynamicChildren=Qr>0?dt||dr:null,nf(),Qr>0&&dt&&dt.push(t),t}function Ee(t,e,n,r,s,i){return fl(Q(t,e,n,r,s,i,!0))}function pl(t,e,n,r,s){return fl(Ne(t,e,n,r,s,!0))}function ml(t){return t?t.__v_isVNode===!0:!1}function Or(t,e){return t.type===e.type&&t.key===e.key}const gl=({key:t})=>t??null,Es=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ie(t)||Se(t)||oe(t)?{i:ut,r:t,k:e,f:!!n}:t:null);function Q(t,e=null,n=null,r=0,s=null,i=t===lt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gl(e),ref:e&&Es(e),scopeId:Hc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ut};return a?(Io(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ie(n)?8:16),Qr>0&&!o&&dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&dt.push(c),c}const Ne=rf;function rf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Yc)&&(t=Rn),ml(t)){const a=wr(t,e,!0);return n&&Io(a,n),Qr>0&&!i&&dt&&(a.shapeFlag&6?dt[dt.indexOf(t)]=a:dt.push(a)),a.patchFlag=-2,a}if(gf(t)&&(t=t.__vccOpts),e){e=sf(e);let{class:a,style:c}=e;a&&!Ie(a)&&(e.class=At(a)),be(c)&&(si(c)&&!re(c)&&(c=qe({},c)),e.style=ti(c))}const o=Ie(t)?1:dl(t)?128:dd(t)?64:be(t)?4:oe(t)?2:0;return Q(t,e,n,r,s,o,i,!0)}function sf(t){return t?si(t)||rl(t)?qe({},t):t:null}function wr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?of(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&gl(l),ref:e&&e.ref?n&&i?re(i)?i.concat(Es(e)):[i,Es(e)]:Es(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wr(t.ssContent),ssFallback:t.ssFallback&&wr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&_o(u,c.clone(u)),u}function Gr(t=" ",e=0){return Ne(ai,null,t,e)}function r0(t,e){const n=Ne(Cs,null,t);return n.staticCount=e,n}function Ss(t="",e=!1){return e?(xe(),pl(Rn,null,t)):Ne(Rn,null,t)}function Ut(t){return t==null||typeof t=="boolean"?Ne(Rn):re(t)?Ne(lt,null,t.slice()):ml(t)?en(t):Ne(ai,null,String(t))}function en(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wr(t)}function Io(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Io(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!rl(e)?e._ctx=ut:s===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),r&64?(n=16,e=[Gr(e)]):n=8);t.children=e,t.shapeFlag|=n}function of(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=At([e.class,r.class]));else if(s==="style")e.style=ti([e.style,r.style]);else if(js(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Bt(t,e,n,r=null){jt(t,e,7,[n,r])}const af=Jc();let cf=0;function lf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||af,i={uid:cf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:il(r,s),emitsOptions:Qc(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qd.bind(null,i),t.ce&&t.ce(i),i}let Fe=null;const hl=()=>Fe||ut;let Us,zi;{const t=ei(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Us=e("__VUE_INSTANCE_SETTERS__",n=>Fe=n),zi=e("__VUE_SSR_SETTERS__",n=>_r=n)}const ls=t=>{const e=Fe;return Us(t),t.scope.on(),()=>{t.scope.off(),Us(e)}},fa=()=>{Fe&&Fe.scope.off(),Us(null)};function yl(t){return t.vnode.shapeFlag&4}let _r=!1;function uf(t,e=!1,n=!1){e&&zi(e);const{props:r,children:s}=t.vnode,i=yl(t);zd(t,r,i,e),Yd(t,s,n||e);const o=i?df(t,e):void 0;return e&&zi(!1),o}function df(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Dd);const{setup:r}=n;if(r){pn();const s=t.setupContext=r.length>1?pf(t):null,i=ls(t),o=as(r,t,0,[t.props,s]),a=mc(o);if(mn(),i(),(a||t.sp)&&!Hr(t)&&ko(t),a){if(o.then(fa,fa),e)return o.then(c=>{pa(t,c)}).catch(c=>{cs(c,t,0)});t.asyncDep=o}else pa(t,o)}else bl(t)}function pa(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=$c(e)),bl(t)}function bl(t,e,n){const r=t.type;t.render||(t.render=r.render||zt);{const s=ls(t);pn();try{Rd(t)}finally{mn(),s()}}}const ff={get(t,e){return He(t,"get",""),t[e]}};function pf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ff),slots:t.slots,emit:t.emit,expose:e}}function ci(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($c(bo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wr)return Wr[n](t)},has(e,n){return n in e||n in Wr}})):t.proxy}function mf(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function gf(t){return oe(t)&&"__vccOpts"in t}const R=(t,e)=>Qu(t,e,_r),hf="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gi;const ma=typeof window<"u"&&window.trustedTypes;if(ma)try{Gi=ma.createPolicy("vue",{createHTML:t=>t})}catch{}const vl=Gi?t=>Gi.createHTML(t):t=>t,yf="http://www.w3.org/2000/svg",bf="http://www.w3.org/1998/Math/MathML",Zt=typeof document<"u"?document:null,ga=Zt&&Zt.createElement("template"),vf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Zt.createElementNS(yf,t):e==="mathml"?Zt.createElementNS(bf,t):n?Zt.createElement(t,{is:n}):Zt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Zt.createTextNode(t),createComment:t=>Zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ga.innerHTML=vl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=ga.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wf=Symbol("_vtc");function _f(t,e,n){const r=t[wf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Vs=Symbol("_vod"),wl=Symbol("_vsh"),s0={name:"show",beforeMount(t,{value:e},{transition:n}){t[Vs]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Pr(t,!0),r.enter(t)):r.leave(t,()=>{Pr(t,!1)}):Pr(t,e))},beforeUnmount(t,{value:e}){Pr(t,e)}};function Pr(t,e){t.style.display=e?t[Vs]:"none",t[wl]=!e}const kf=Symbol(""),xf=/(?:^|;)\s*display\s*:/;function Af(t,e,n){const r=t.style,s=Ie(n);let i=!1;if(n&&!s){if(e)if(Ie(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Is(r,a,"")}else for(const o in e)n[o]==null&&Is(r,o,"");for(const o in n)o==="display"&&(i=!0),Is(r,o,n[o])}else if(s){if(e!==n){const o=r[kf];o&&(n+=";"+o),r.cssText=n,i=xf.test(n)}}else e&&t.removeAttribute("style");Vs in t&&(t[Vs]=i?r.display:"",t[wl]&&(r.display="none"))}const ha=/\s*!important$/;function Is(t,e,n){if(re(n))n.forEach(r=>Is(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Tf(t,e);ha.test(n)?t.setProperty(On(r),n.replace(ha,""),"important"):t[r]=n}}const ya=["Webkit","Moz","ms"],Ci={};function Tf(t,e){const n=Ci[e];if(n)return n;let r=vt(e);if(r!=="filter"&&r in t)return Ci[e]=r;r=Js(r);for(let s=0;s<ya.length;s++){const i=ya[s]+r;if(i in t)return Ci[e]=i}return e}const ba="http://www.w3.org/1999/xlink";function va(t,e,n,r,s,i=ku(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ba,e.slice(6,e.length)):t.setAttributeNS(ba,e,n):n==null||i&&!bc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Kt(n)?String(n):n)}function wa(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vl(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=bc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Cn(t,e,n,r){t.addEventListener(e,n,r)}function Cf(t,e,n,r){t.removeEventListener(e,n,r)}const _a=Symbol("_vei");function Ef(t,e,n,r,s=null){const i=t[_a]||(t[_a]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Sf(e);if(r){const l=i[e]=Rf(r,s);Cn(t,a,l,c)}else o&&(Cf(t,a,o,c),i[e]=void 0)}}const ka=/(?:Once|Passive|Capture)$/;function Sf(t){let e;if(ka.test(t)){e={};let r;for(;r=t.match(ka);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):On(t.slice(2)),e]}let Ei=0;const If=Promise.resolve(),Df=()=>Ei||(If.then(()=>Ei=0),Ei=Date.now());function Rf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;jt(Of(r,n.value),e,5,[r])};return n.value=t,n.attached=Df(),n}function Of(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Pf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?_f(t,r,o):e==="style"?Af(t,n,r):js(e)?lo(e)||Ef(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bf(t,e,r,o))?(wa(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&va(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ie(r))?wa(t,vt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),va(t,e,r,o))};function Bf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xa(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xa(e)&&Ie(n)?!1:e in t}const kr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>xs(e,n):e};function Lf(t){t.target.composing=!0}function Aa(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const un=Symbol("_assign");function Ta(t,e,n){return e&&(t=t.trim()),n&&(t=Qs(t)),t}const i0={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[un]=kr(s);const i=r||s.props&&s.props.type==="number";Cn(t,e?"change":"input",o=>{o.target.composing||t[un](Ta(t.value,n,i))}),(n||i)&&Cn(t,"change",()=>{t.value=Ta(t.value,n,i)}),e||(Cn(t,"compositionstart",Lf),Cn(t,"compositionend",Aa),Cn(t,"change",Aa))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[un]=kr(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Qs(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},o0={created(t,{value:e},n){t.checked=Qn(e,n.props.value),t[un]=kr(n),Cn(t,"change",()=>{t[un](es(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[un]=kr(r),e!==n&&(t.checked=Qn(e,r.props.value))}},a0={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ys(e);Cn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Qs(es(o)):es(o));t[un](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,vo(()=>{t._assigning=!1})}),t[un]=kr(r)},mounted(t,{value:e}){Ca(t,e)},beforeUpdate(t,e,n){t[un]=kr(n)},updated(t,{value:e}){t._assigning||Ca(t,e)}};function Ca(t,e){const n=t.multiple,r=re(e);if(!(n&&!r&&!Ys(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=es(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=Au(e,a)>-1}else o.selected=e.has(a);else if(Qn(es(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function es(t){return"_value"in t?t._value:t.value}const Ff=["ctrl","shift","alt","meta"],Nf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ff.some(n=>t[`${n}Key`]&&!e.includes(n))},$f=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Nf[e[o]];if(a&&a(s,e))return}return t(s,...i)})},qf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},c0=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=On(s.key);if(e.some(o=>o===i||qf[o]===i))return t(s)})},Mf=qe({patchProp:Pf},vf);let Ea;function Uf(){return Ea||(Ea=Zd(Mf))}const Vf=(...t)=>{const e=Uf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Wf(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Hf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Hf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Wf(t){return Ie(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _l;const li=t=>_l=t,kl=Symbol();function Ki(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Kr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Kr||(Kr={}));function zf(){const t=kc(!0),e=t.run(()=>B({}));let n=[],r=[];const s=bo({install(i){li(s),s._a=i,i.provide(kl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const xl=()=>{};function Sa(t,e,n,r=xl){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&xc()&&Tu(s),s}function sr(t,...e){t.forEach(n=>{n(...e)})}const Gf=t=>t(),Ia=Symbol(),Si=Symbol();function ji(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ki(s)&&Ki(r)&&t.hasOwnProperty(n)&&!Se(r)&&!ln(r)?t[n]=ji(s,r):t[n]=r}return t}const Kf=Symbol();function jf(t){return!Ki(t)||!Object.prototype.hasOwnProperty.call(t,Kf)}const{assign:kn}=Object;function Yf(t){return!!(Se(t)&&t.effect)}function Xf(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Yu(n.state.value[t]);return kn(u,i,Object.keys(o||{}).reduce((d,w)=>(d[w]=bo(R(()=>{li(n);const y=n._s.get(t);return o[w].call(y,y)})),d),{}))}return c=Al(t,l,e,n,r,!0),c}function Al(t,e,n={},r,s,i){let o;const a=kn({actions:{}},n),c={deep:!0};let l,u,d=new Set,w=new Set,y;const T=r.state.value[t];!i&&!T&&(r.state.value[t]={});let _;function I(A){let h;l=u=!1,typeof A=="function"?(A(r.state.value[t]),h={type:Kr.patchFunction,storeId:t,events:y}):(ji(r.state.value[t],A),h={type:Kr.patchObject,payload:A,storeId:t,events:y});const E=_=Symbol();vo().then(()=>{_===E&&(l=!0)}),u=!0,sr(d,h,r.state.value[t])}const S=i?function(){const{state:h}=n,E=h?h():{};this.$patch(m=>{kn(m,E)})}:xl;function b(){o.stop(),d.clear(),w.clear(),r._s.delete(t)}const g=(A,h="")=>{if(Ia in A)return A[Si]=h,A;const E=function(){li(r);const m=Array.from(arguments),x=new Set,L=new Set;function q(O){x.add(O)}function $(O){L.add(O)}sr(w,{args:m,name:E[Si],store:p,after:q,onError:$});let F;try{F=A.apply(this&&this.$id===t?this:p,m)}catch(O){throw sr(L,O),O}return F instanceof Promise?F.then(O=>(sr(x,O),O)).catch(O=>(sr(L,O),Promise.reject(O))):(sr(x,F),F)};return E[Ia]=!0,E[Si]=h,E},f={_p:r,$id:t,$onAction:Sa.bind(null,w),$patch:I,$reset:S,$subscribe(A,h={}){const E=Sa(d,A,h.detached,()=>m()),m=o.run(()=>As(()=>r.state.value[t],x=>{(h.flush==="sync"?u:l)&&A({storeId:t,type:Kr.direct,events:y},x)},kn({},c,h)));return E},$dispose:b},p=ri(f);r._s.set(t,p);const k=(r._a&&r._a.runWithContext||Gf)(()=>r._e.run(()=>(o=kc()).run(()=>e({action:g}))));for(const A in k){const h=k[A];if(Se(h)&&!Yf(h)||ln(h))i||(T&&jf(h)&&(Se(h)?h.value=T[A]:ji(h,T[A])),r.state.value[t][A]=h);else if(typeof h=="function"){const E=g(h,A);k[A]=E,a.actions[A]=h}}return kn(p,k),kn(de(p),k),Object.defineProperty(p,"$state",{get:()=>r.state.value[t],set:A=>{I(h=>{kn(h,A)})}}),r._p.forEach(A=>{kn(p,o.run(()=>A({store:p,app:r._a,pinia:r,options:a})))}),T&&i&&n.hydrate&&n.hydrate(p.$state,T),l=!0,u=!0,p}/*! #__NO_SIDE_EFFECTS__ */function Do(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,a){const c=ad();return o=o||(c?Mr(kl,null):null),o&&li(o),o=_l,o._s.has(t)||(s?Al(t,e,r,o):Xf(t,r,o)),o._s.get(t)}return i.$id=t,i}const xr={1:{title:"Day 1 - 点击计数器",subtitle:"点击计数器/ClickCounter",concepts:["function","increment","uint256","contract"]},2:{title:"Day 2 - 保存名字",subtitle:"保存名字/SaveMyName",concepts:["string","private","memory","view","parameters","returns"]},3:{title:"Day 3 - 投票站",subtitle:"投票站/PollStation",concepts:["array","mapping","push","compound_assignment"]},4:{title:"Day 4 - 拍卖行",subtitle:"拍卖行/AuctionHouse",concepts:["constructor","msg_sender","block_timestamp","require","external","address_type","bool_type"]},5:{title:"Day 5 - 管理员权限",subtitle:"管理员权限/AdminOnly",concepts:["modifier","zero_address","return_statement"]},6:{title:"Day 6 - 以太坊银行",subtitle:"以太坊银行/EtherPiggyBank",concepts:["address_mapping_balance","payable","msg_value","wei_unit","ether_deposit_withdraw"]},7:{title:"Day 7 - 朋友借条",subtitle:"朋友借条/SimpleIOU",concepts:["nested_mapping","address_payable","debt_tracking","internal_transfer","transfer_method","call_method","withdraw_pattern"]},8:{title:"Day 8 - 打赏罐",subtitle:"打赏罐/TipJar",concepts:["modifier_onlyOwner","payable_tip","msg_value_tip","address_balance","call_withdraw","mapping_rates"]},9:{title:"Day 9 - 跨合约调用",subtitle:"跨合约调用/InterContract",concepts:["pure_function","view_function","cross_contract_call","interface_call","low_level_call","modifier_onlyOwner","newton_iteration","contract_composition"]},10:{title:"Day 10 - 健身追踪器",subtitle:"健身追踪器/ActivityTracker",concepts:["struct_definition","array_in_mapping","multiple_mappings","storage_keyword","event_logging","milestone_detection","timestamp_usage","onlyRegistered_modifier"]},11:{title:"Day 11 - 主密钥保险库",subtitle:"合约继承与所有权/MasterkeyVault",concepts:["inheritance","import_statement","constructor","private_visibility","event_logging","indexed_parameter","transfer_ownership","onlyOwner_modifier"]},12:{title:"Day 12 - ERC20 代币标准",subtitle:"ERC20代币/Web3Compass",concepts:["erc20_standard","mapping_nested","event","transfer","approve","allowance","transferFrom"]},13:{title:"Day 13 - MyToken 代币扩展",subtitle:"ERC20进阶/Virtual & Inheritance",concepts:["constructor_mint","zero_address_mint","internal_function","virtual_function"]},14:{title:"Day 14 - 安全存款盒",subtitle:"抽象合约、接口与工厂模式/Abstract, Interface & Factory",concepts:["interface_definition","abstract_contract","inheritance","override_keyword","virtual_function","super_keyword","modifier_combination","factory_pattern","metadata_storage","time_lock"]},15:{title:"Day 15 - Gas优化投票",subtitle:"高效节能投票/GasEfficientVoting",concepts:["compact_datatype","uint8_uint32","bytes32_string","storage_optimization","bit_operation","mapping_storage","mask_check","timestamp_block","event_logging"]},16:{title:"Day 16 - 插件存储系统",subtitle:"动态插件注册与低级别调用/PluginStore",concepts:["struct_definition","mapping_storage","plugin_registration","low_level_call","abi_encoding","staticcall","dynamic_delegation","contract_interop"]},17:{title:"Day 17",subtitle:"可升级合约/UpgradeHub",concepts:["proxy_pattern","delegatecall","storage_layout","upgrade_mechanism","logic_contract","fallback_function","data_persistence","version_control"]},18:{title:"Day 18 - 预言机与参数保险",subtitle:"预言机/OracleContract",concepts:["oracle_interface","eth_usd_oracle","random_generation","purchase_insurance","price_conversion","parametric_payout","cooldown_mechanism","contract_balance"]},19:{title:"Day 19 - 基于签名的活动参与",subtitle:"ECDSA签名验证/SignThis",concepts:["keccak256_hash","ecdsa_signature","signature_rsv","eip191_prefix","ecrecover","require_statement","mapping_storage","msg_sender"]},20:{title:"Day 20 - 重入攻击与防护",subtitle:"重入攻击/ReentrancyAttack",concepts:["reentrancy_attack","fallback_receive","vulnerable_withdraw","deposit_function","checks_effects_interactions","reentrancy_guard","contract_balance","code_comparison"]},21:{title:"Day 21 - NFT数字藏品",subtitle:"ERC721标准/SimpleNFT",concepts:["ierc721_interface","mint_function","token_id_counter","token_uri","balance_of","transfer_from","approve_mechanism","approval_for_all","safe_transfer"]},22:{title:"Day 22 - 公平链上彩票",subtitle:"公平链上彩票/FairChainLottery",concepts:["chainlink_vrf","random_number_generation","lottery_state_machine","time_lock","request_randomness","fulfill_random_words","prize_distribution","lottery_security"]},23:{title:"Day 23 - 借贷协议",subtitle:"去中心化借贷/SimpleLending",concepts:["lending_pool","collateral_deposit","borrow_mechanism","health_factor","liquidation_threshold","interest_calculation","repay_function","lending_security"]},24:{title:"Day 24 - 增强型托管",subtitle:"第三方托管/EnhancedSimpleEscrow",concepts:["escrow_contract","buyer_seller_arbitration","dispute_resolution","time_locked_release","mutual_cancellation","arbiter_role","multi_party_security","state_management"]},25:{title:"Day 25 - 自动化做市商",subtitle:"自动化做市商/AutomatedMarketMaker",concepts:["amm_formula","liquidity_pool","constant_product","add_liquidity","swap_mechanism","remove_liquidity","slippage_calculation","reserves_management"]},26:{title:"Day 26 - NFT市场",subtitle:"去中心化交易/NFTMarketplace",concepts:["nft_marketplace","listing_mechanism","royalty_payment","marketplace_security","buy_now_price","cancel_listing","nft_escrow","owner_revenue"]},27:{title:"Day 27 - 收益耕作",subtitle:"DeFi质押/YieldFarming",concepts:["reward_debt_pattern","staking_token_decimals","time_weighted_calculation","reentrancy_guard","stake_function","unstake_function","claim_rewards","emergency_withdraw"]},28:{title:"Day 28 - 去中心化治理",subtitle:"DAO治理/DecentralizedGovernance",concepts:["token_governance","timelock_mechanism","quorum_threshold","proposal_state_machine","proposal_struct","voting_function","finalize_function","low_level_call","reentrancy_guard"]},29:{title:"Day 29 - 简单稳定币",subtitle:"超额抵押稳定币/SimpleStablecoin",concepts:["over_collateralization","collateral_ratio","price_oracle","health_factor","decimal_conversion","deposit_collateral","mint_stablecoin","burn_stablecoin","withdraw_collateral","liquidation"]}},l0=t=>t===1?`//SPDx-License-Identifier:MIT

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
`:"",Zf=()=>Object.keys(xr).reduce((t,e)=>(t[e]={unlockedConcepts:[],totalConcepts:xr[e].concepts.length,interactionCount:0},t),{}),Pe=Do("progress",()=>{const t=B(Zf()),e=c=>String(c),n=(c,l)=>{const u=e(c),d=t.value[u];d&&!d.unlockedConcepts.includes(l)&&d.unlockedConcepts.push(l)},r=c=>{const l=e(c),u=t.value[l];u&&u.interactionCount++},s=c=>{const l=e(c);return t.value[l]},i=c=>{var u;const l=e(c);return((u=t.value[l])==null?void 0:u.unlockedConcepts)||[]};return{dayProgress:t,unlockConcept:n,incrementInteraction:r,getDayProgress:s,getUnlockedConcepts:i,isConceptUnlocked:(c,l)=>i(c).includes(l),getProgressPercentage:c=>{const l=e(c),u=t.value[l];return!u||u.totalConcepts===0?0:Math.floor(u.unlockedConcepts.length/u.totalConcepts*100)}}}),pt=Do("contract",()=>{const t=B({day1:{count:0,interactionCount:0},day2:{name:"",bio:"",interactionCount:0,hasStored:!1,hasRetrieved:!1},day3:{candidates:[],voteCount:{},interactionCount:0},day4:{owner:"",item:"",auctionEndTime:0,highestBidder:"",highestBid:0,ended:!1,bids:{},bidders:[],interactionCount:0},day5:{owner:"",treasureAmount:0,withdrawalAllowance:{},hasWithdrawn:{},userAddress:"0x"+Math.random().toString(16).substr(2,40),userAllowance:0,interactionCount:0},day6:{bankManager:"",members:[],registeredMembers:{},balance:{},userAddress:"0x"+Math.random().toString(16).substr(2,40),interactionCount:0,depositCount:0,withdrawCount:0},day7:{owner:"",userAddress:"",registeredFriends:{},friendList:[],balances:{},debts:{},interactionCount:0},day8:{owner:"",userAddress:"",isUserAdmin:!1,totalTipsReceived:0,tipPerPerson:{},tipsPerCurrency:{},supportedCurrencies:["USD","EUR","JPY","INR"],conversionRates:{USD:5e14,EUR:6e14,JPY:4e12,INR:7e12},interactionCount:0},day9:{owner:"",userAddress:"",isUserAdmin:!1,scientificCalculatorAddress:"",isAddressSet:!1,operationCount:0,operationHistory:[],interactionCount:0,challengeTasks:{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}},day10:{owner:"",userAddress:"",userProfile:{name:"",weight:0,isRegistered:!1},workoutHistory:[],totalWorkouts:0,totalDistance:0,milestones:{weightGoal:{achieved:!1,timestamp:0,title:"减重目标达成",icon:"⚖️"},workouts10:{achieved:!1,timestamp:0,title:"10次运动",icon:"🏃"},workouts50:{achieved:!1,timestamp:0,title:"50次运动大师",icon:"🏆"},distance100K:{achieved:!1,timestamp:0,title:"100公里里程碑",icon:"🌍"}},interactionCount:0},day11:{owner:"",userAddress:"",contractBalance:0,eventLog:[],interactionCount:0}}),e=()=>"0x"+Math.random().toString(16).substr(2,40),n=i=>{const o=`day${i}`,a=t.value[o];if(!a){console.warn(`Contract for day ${i} not found`);return}switch(i){case 5:a.owner||(a.owner=e()),a.userAddress||(a.userAddress=e());break;case 6:a.bankManager===""&&(a.bankManager=e(),a.members=[a.bankManager],a.registeredMembers={[a.bankManager]:!0,[a.userAddress]:!0},a.balance={[a.bankManager]:0,[a.userAddress]:0},a.members.push(a.userAddress));break;case 7:if(a.owner===""){const c=e();a.owner=c,a.userAddress=c,a.registeredFriends[c]=!0,a.friendList.push(c)}break;case 8:a.owner===""&&(a.owner=e(),a.userAddress=e());break;case 9:a.owner===""&&(a.owner=e(),a.userAddress=e(),a.isUserAdmin=!1);break;case 10:a.owner===""&&(a.owner=e(),a.userAddress=e());break;case 11:if(a.owner===""){const c=e();a.owner=c,a.userAddress=c,a.contractBalance=0,a.eventLog=[]}break}},r=i=>t.value[`day${i}`];return{contracts:t,initializeContract:n,getContract:r,updateContract:(i,o)=>{const a=r(i);a&&Object.assign(a,o)},generateAddress:e}}),tt={increment:21e3,reset:21e3,addData:4e4,retrieveData:0,addCandidate:5e4,vote:35e3,placeBid:45e3,endAuction:25e3,addTreasure:3e4,approveWithdrawal:4e4,withdrawTreasure:5e4,resetWithdrawalStatus:25e3,transferOwnership:35e3,getTreasureDetails:0,addMembers:45e3,depositAmountEther:35e3,withdrawAmount:4e4,getMembers:0,addFriend:45e3,depositIntoWallet:35e3,recordDebt:45e3,payFromWallet:5e4,transferEther:35e3,transferEtherViaCall:4e4,withdraw:35e3,checkBalance:0,addCurrency:45e3,tipInEth:4e4,tipInCurrency:5e4,withdrawTips:35e3,transferOwnership8:35e3,transfer13:35e3,approve13:3e4,transferFrom13:4e4,getBalance13:0,getAllowance13:0,createBasicBox:8e4,createPremiumBox:1e5,createTimeLockedBox:12e4,storeSecret:35e3,getSecret:0,transferOwnership14:4e4,setMetadata:3e4,getMetadata:0,getUnlockTime:0,getRemainingLockTime:0,completeOwnershipTransfer:45e3,createProposal15:6e4,vote15:4e4,executeProposal15:35e3,setProfile16:35e3,registerPlugin16:25e3,runPlugin16:45e3,runPluginView16:0,createPlan17:45e3,upgradeTo17:35e3,subscribe17:5e4,pauseSubscription17:3e4,resumeSubscription17:3e4,isSubscribed17:0,checkRainfall18:0,purchaseInsurance18:45e3,claimPayout18:5e4,fastForwardTime18:0,withdrawBalance18:35e3,generateSignature19:0,enterEvent19:65e3,checkEntered19:0,getParticipants19:0,deposit20:45e3,vulnerableWithdraw20:5e4,safeWithdraw20:35e3,checkVaultStatus20:0,mint21:15e4,transferFrom21:8e4,safeTransferFrom21:85e3,approve21:45e3,setApprovalForAll21:35e3,balanceOf21:0,getApproved21:0,ownerOf21:0,startLottery22:45e3,enter22:5e4,endLottery22:4e4,fulfillRandomWords22:55e3,listNFT26:65e3,buyNFT26:85e3,cancelListing26:45e3,stake27:45e3,unstake27:4e4,claimRewards27:5e4,emergencyWithdraw27:35e3,refillRewards27:3e4,createProposal28:15e4,vote28:5e4,finalize28:4e4,execute28:8e4,depositCollateral29:5e4,mintStablecoin29:6e4,burnStablecoin29:45e3,withdrawCollateral29:55e3,liquidate29:8e4},Da=4e-8,Jf={function:{name:"函数交互",icon:"🎯",unlockAt:1,message:"你刚刚调用了 Solidity 中的第一个函数！在区块链上，用户与合约的所有交互都是通过函数完成的。",code:`function click() public {
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
}`}},u0=t=>({function:"📖 这是函数的基本概念，它是智能合约的基本构建模块。",increment:"📖 自增操作是编程中常见的操作，用于快速增加数值。",uint256:"📖 uint256 是 Solidity 中最常用的整数类型，了解它很重要。",contract:"📖 智能合约是区块链上的自动执行代码，理解它的结构很关键。",string:"📖 string 类型用于存储文本数据，是智能合约中常用的数据类型之一。",private:"📖 private 关键字限制变量的访问范围，提高合约的安全性。",memory:"📖 memory 数据位置用于临时存储，只在函数执行期间存在。",view:"📖 view 函数不修改状态，不消耗 Gas，是优化合约性能的重要方法。",parameters:"📖 函数参数让函数能够接收外部数据，使函数更加灵活和可复用。",returns:"📖 returns 关键字定义函数返回值，让函数能够向调用者返回结果。",array:"📖 数组是存储多个相同类型数据的容器，在 Solidity 中广泛使用。",mapping:"📖 映射是 Solidity 中的键值对存储结构，通过键快速查找对应的值。",push:"📖 push 方法是数组的常用操作，可以在数组末尾动态添加元素。",compound_assignment:"📖 复合赋值运算符将运算和赋值结合在一起，使代码更加简洁。",constructor:"📖 构造函数只在合约部署时执行一次，用于初始化合约的状态变量。",msg_sender:"📖 msg.sender 表示当前调用合约的地址，是区块链交互的核心。",block_timestamp:"📖 block.timestamp 返回当前区块的时间戳，常用于时间相关的逻辑。",require:"📖 require 语句在条件不满足时回滚交易，是保证合约安全的重要机制。",external:"📖 external 函数只能从合约外部调用，比 public 更节省 Gas。",address_type:"📖 address 类型存储以太坊地址，是区块链交互的核心数据类型。",bool_type:"📖 bool 类型只有 true 或 false 两个值，用于标记状态。",modifier:"📖 修饰符用于为函数添加前置条件检查，是权限控制的重要机制。",zero_address:"📖 零地址 address(0) 表示一个无效的地址，通常用于检查地址参数是否有效。",return_statement:"📖 return 语句让函数返回指定的值给调用者，是函数输出结果的方式。",address_mapping_balance:"📖 地址映射 mapping(address => uint256) 是存储用户资产的核心数据结构，通过地址快速查找对应的余额。",payable:"📖 payable 关键字让函数能够接收以太币，这是处理资金交易的关键特性。",msg_value:"📖 msg.value 表示调用函数时发送的以太币数量（以wei为单位），是获取转账金额的标准方式。",wei_unit:"📖 wei 是以太币的最小单位，1 ETH = 10^18 wei，这是以太坊计价的基础单位。",ether_deposit_withdraw:"📖 存取逻辑包括检查余额、增减余额、验证输入，这是任何金融合约的基础。",nested_mapping:"📖 嵌套映射 mapping(A => mapping(B => C)) 允许你在 Solidity 中创建像多维数组或字典中嵌套字典的复杂数据结构。",address_payable:"📖 payable 地址类型拥有 transfer 和 call 方法来发送 Ether。没有 fallback 且非 payable 的地址无法接收以太币。",debt_tracking:"📖 债务追踪展示了区块链账本的不变性和透明性，确保每一笔债权和债务都在链上清晰可查的特性。",internal_transfer:"📖 内部账本系统(Internal Accounting)只改变合约内存的数字而不进行链上交易转账，是处理多高频微支付的最佳实操。",transfer_method:"📖 .transfer() 将转账可用 gas 固定为 2300 防止重入，但当目标接收方智能合约的 fallback 逻辑超过一定 gas 时会导致资金卡死。",call_method:"📖 .call() 提供低级别的外部调用功能，转账时能够转发所有剩余 gas 或自定义数量的 gas 以保证外部操作能顺利执行并返回回调状态。",withdraw_pattern:"📖 提现优于发送。要求用户主动调用 withdraw()，避免了遍历用户数组发钱（可能超出 block gas 限制）以及转账失败阻塞整个合约的风险。",modifier_onlyOwner:"📖 修饰符（Modifier）允许你在不重复编写核心检查逻辑的情况下，重用访问控制代码。`_` 符号代表了目标函数体的执行位置。",payable_tip:"📖 `payable` 是一个函数可见性/状态修饰符。如果没有它，任何尝试向该函数发送 Ether 的交易都会被以太坊虚拟机拒绝并回滚。",msg_value_tip:"📖 `msg.value` 是当前交易附带的以太币数量，以 wei 为单位。它是智能合约处理实时支付的桥梁。",address_balance:"📖 合约不仅可以操作别人的钱，还可以管理属于它自己的钱。`address(this).balance` 让你能实时掌控合约金库的‘水位’。",call_withdraw:"📖 `.call()` 是一个底层原语。在转账时，它能够处理复杂的 Fallback 逻辑，并明确返回一个成功/失败的布尔值，比旧的 `transfer` 更具鲁活性。",mapping_rates:"📖 虽然以太坊没有内置汇率，但我们可以通过合约内部的映射来手动维护一组兑换比例，从而实现'打赏 1 美元 = 支付 X 数量 ETH'的功能。",pure_function:"📖 pure 函数承诺不读取也不修改区块链的状态变量。这意味着它的执行结果完全取决于输入参数，可以在本地快速计算，不需要消耗 Gas。",view_function:"📖 view 函数可以读取状态变量但不修改它们。由于不修改状态，view 函数也可以在本地执行，不消耗 Gas，适合用于查询操作。",cross_contract_call:"📖 跨合约调用是 Solidity 的核心特性之一。通过合约地址，一个合约可以调用另一个合约的函数，实现功能的组合和复用，就像乐高积木一样。",interface_call:"📖 接口方式调用是最常用的跨合约调用方法。通过创建外部合约的接口实例，可以像调用本地函数一样调用外部合约，代码清晰易读。",low_level_call:"📖 底层 call 方法提供了最大的灵活性。它通过 abi.encodeWithSignature 编码函数调用，可以调用任何函数，即使接口未知。但使用起来更复杂，需要手动处理返回值。",newton_iteration:"📖 牛顿迭代法是一种快速逼近方程根的算法。在 Solidity 中，由于不支持浮点数运算，我们使用整数运算通过多次迭代来逼近真实值。限制迭代次数可以防止 Gas 耗尽。",contract_composition:"📖 合约组合是 Solidity 的重要设计理念。通过将功能拆分到多个合约，可以实现代码复用、降低复杂度、提高可维护性。这是构建复杂 DApp 的基础。",struct_definition:"📖 `struct` 结构体允许你定义自定义的数据类型，将多个不同类型的变量打包在一起。这是组织复杂数据的有效方式，让代码更加清晰和易于维护。",array_in_mapping:"📖 Solidity 允许将映射指向数组，如 `mapping(address => WorkoutActivity[])`。这样每个地址都有一个动态数组，非常适合存储用户的历史记录、交易列表等一对多的数据关系。",multiple_mappings:"📖 在实际应用中，经常使用多个 mapping 来存储不同维度的数据。比如一个 mapping 存用户资料，另一个存用户余额。通过同一个 key（如用户地址）可以关联访问多个数据结构。",storage_keyword:"📖 `storage` 和 `memory` 是 Solidity 中两个重要的数据位置关键字。`storage` 变量永久存储在区块链状态中，而 `memory` 变量只在函数执行期间临时存在。使用 `storage` 引用可以直接修改状态变量，节省 Gas。",event_logging:"📖 事件（Event）是 Solidity 的日志机制。通过 `emit` 触发事件，数据会被记录在区块链的交易日志中。前端可以监听事件来实现实时通知、记录历史等功能，事件是 DApp 前后端通信的重要桥梁。",milestone_detection:"📖 里程碑检测是游戏化应用的核心机制。通过条件判断（如 `if (count == 10)`）检测用户是否达成特定目标，并触发相应奖励或通知。这能激励用户持续使用产品。",timestamp_usage:"📖 `block.timestamp` 是当前区块的时间戳（Unix 时间，秒）。它常用于记录事件发生时间、设置时间限制、计算时间差等。注意它由矿工设置，存在约15秒的误差，不应用于精确计时。",onlyRegistered_modifier:"📖 修饰符（Modifier）是 Solidity 的复用机制，用于在函数执行前添加前置条件检查。`onlyRegistered` 确保只有满足条件的用户（已注册）才能调用函数。这简化了代码，避免了在每个函数中重复写检查逻辑。"})[t]||"📖 点击其他概念标签查看更多详细解释。",d0=t=>({inheritance:"📖 合约继承是 Solidity 的核心特性之一。通过 `contract VaultMaster is Ownable`，子合约可以继承父合约的所有状态变量和函数，实现代码复用和模块化设计。",import_statement:"📖 `import` 语句用于导入其他合约文件，让你可以在当前合约中使用外部定义的合约。这是实现合约组合和代码复用的基础。",constructor:"📖 构造函数 `constructor()` 在合约部署时自动执行一次，用于初始化合约的状态变量。在 Ownable 中，它将合约部署者设置为初始所有者。",private_visibility:"📖 `private` 可见性修饰符表示变量只能在当前合约内部访问，即使是子合约也无法直接访问。这提供了最强的封装性，保护敏感数据。",event_logging:"📖 事件（Event）用于记录重要的合约操作到区块链日志中。前端可以监听事件来实现实时通知。`DepositSuccessful` 和 `WithdrawSuccessful` 记录了资金流动。",indexed_parameter:"📖 `indexed` 关键字标记事件参数，允许前端按该参数过滤和搜索事件日志。这在处理大量事件时非常有用，可以快速找到特定地址相关的事件。",transfer_ownership:"📖 `transferOwnership()` 函数实现了合约所有权的转移。只有当前所有者可以调用此函数，并且通常会检查新地址是否有效（非零地址）。",onlyOwner_modifier:"📖 `onlyOwner` 修饰符是权限控制的核心机制。它检查 `msg.sender` 是否等于 `owner`，如果不是则回滚交易。这是保护敏感操作（如提款）的标准做法。"})[t]||"📖 点击其他概念标签查看更多详细解释。",tp={erc20_standard:{name:"ERC20 标准",icon:"🪙",unlockAt:1,message:"你了解了 ERC20 代币标准！它是以太坊上最通用的代币规范，定义了代币的基本功能接口。",code:`// ERC20 标准接口
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
}`}},f0=t=>({erc20_standard:"🪙 太棒了！你了解了 ERC20 代币标准！这是以太坊上最通用的代币规范。👉 查询 Alice 余额来学习 mapping 存储机制！",mapping_nested:"🗂️ 优秀！你了解了嵌套映射！这是 ERC20 授权机制的核心数据结构。👉 转账给 Bob 来学习事件和转账函数！",event:"📋 很好！你触发了事件日志！👉 继续探索更多功能！",transfer:"💸 太棒了！你使用了 transfer 函数！👉 授权给 Carol 来学习授权机制！",approve:"✅ 很好！你使用了 approve 函数！👉 查询 allowance 来学习授权额度查询！",allowance:"🔍 优秀！你了解了授权额度查询！👉 切换到 Carol 执行代转账来学习 transferFrom！",transferFrom:"🔄 太棒了！你使用了 transferFrom 函数！🎉 你已掌握 ERC20 全部核心功能！"})[t]||"📖 点击其他概念标签查看更多详细解释。",p0=t=>({constructor_mint:"📖 构造函数铸造是 ERC20 代币的常见模式。合约部署时，构造函数自动执行，创建所有代币并分配给部署者。Transfer(address(0), ...) 事件表示这是铸造操作。",zero_address_mint:"📖 零地址 address(0) 在 ERC20 中有特殊含义。Transfer 事件中 from=address(0) 表示铸造（创建新代币），to=address(0) 表示销毁（移除代币）。这是行业标准约定。",internal_function:"📖 internal 是 Solidity 的可见性修饰符之一。与 public/external 不同，internal 函数只能在当前合约内部调用，不能从外部访问。这是代码封装的重要手段，_transfer 就是典型的内部辅助函数。",virtual_function:"📖 virtual 关键字标记函数可以被继承合约重写（override）。这是实现可扩展 ERC20（如带手续费的代币、可暂停代币）的基础。子合约使用 override 关键字重写，并用 super 调用父合约函数。"})[t]||"📖 点击其他概念标签查看更多详细解释。",m0=t=>({erc20_standard:"📖 ERC20 是以太坊上最常用的代币标准，定义了代币的基本功能接口，包括转账、授权、查询余额等。所有符合 ERC20 标准的代币都可以在支持该标准的钱包和交易所中使用。",mapping_nested:"📖 嵌套映射 mapping(address => mapping(address => uint256)) 是 ERC20 中存储授权额度的核心数据结构。外层映射的 key 是代币持有者，内层映射的 key 是被授权者，value 是授权额度。",event:"📖 事件（Event）是 Solidity 的日志机制。ERC20 定义了 Transfer 和 Approval 两个标准事件，分别记录代币转移和授权操作。前端可以监听这些事件来实时更新界面。",transfer:"📖 transfer 函数是 ERC20 最核心的功能，允许代币持有者将自己的代币转给他人。函数会检查余额是否充足，然后更新双方余额并触发 Transfer 事件。",approve:"📖 approve 函数实现了授权机制，允许代币持有者授权他人使用自己的代币。这在 DeFi 应用中非常重要，比如授权 DEX 使用你的代币进行交易。",allowance:"📖 allowance 函数用于查询授权额度，返回被授权者还可以使用持有者的代币数量。在执行 transferFrom 之前，通常需要先检查 allowance 是否充足。",transferFrom:"📖 transferFrom 函数实现了代转账功能，允许被授权者代替持有者转账。这是 ERC20 的高级功能，常用于需要第三方代为执行转账的场景，如自动扣款、代理交易等。"})[t]||"📖 点击其他概念标签查看更多详细解释。",np={interface_definition:{name:"接口定义",icon:"🔌",unlockAt:1,message:"你了解了接口！接口定义了合约必须实现的功能规范，是实现多态和解耦的基础。",code:`// IDepositBox.sol - 定义存款盒的标准接口
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

// indexed 参数可被链下高效检索！`}},g0=t=>({compact_datatype:"📦 太棒了！你了解了紧凑数据类型优化！uint8、uint32 相比 uint256 节省大量存储！👆 点击上方「存储可视化」区域学习更多！",uint8_uint32:"🔢 优秀！你了解了 uint8 和 uint32！它们分别只需 1 字节和 4 字节，远小于 uint256 的 32 字节！👝 创建提案查看 bytes32！",bytes32_string:"📝 很好！你了解了 bytes32 vs string！bytes32 固定 32 字节，比动态 string 更省 Gas！👝 继续创建提案或尝试投票学习位运算！",storage_optimization:"💾 太棒了！你体验了存储优化！通过紧凑数据类型和合理结构，大幅降低存储成本！⚡ 现在尝试投票来学习位运算！",bit_operation:"⚡ 太棒了！你了解了位运算的强大！1 个 uint256 存储 256 个投票状态，节省约 40% Gas！🗺️ 映射高效存储选民数据！⏰ 使用时间戳验证投票窗口！👉 尝试重复投票体验掩码检查！",mapping_storage:"🗺️ 优秀！你了解了映射的高效存储！mapping 通过哈希表实现 O(1) 查找，是 Solidity 最常用的数据结构！👉 继续探索其他功能！",mask_check:"🎭 很好！你体验了掩码检查！通过与运算快速检查位状态，防止重复投票！👉 等待提案结束执行提案学习事件日志！",timestamp_block:"⏰ 不错！你了解了 block.timestamp 的使用！它提供当前区块时间戳，用于实现时间锁和投票截止！👉 尝试重复投票或执行提案！",event_logging:"📋 恭喜！你了解了事件日志！事件记录在链上日志中，可供链下应用索引和监听！🎉 你已掌握 Day 15 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",h0=t=>({compact_datatype:"📖 紧凑数据类型是 Solidity Gas 优化的基础。uint8 只占 1 字节（存储范围 0-255），uint32 只占 4 字节（0-42亿），而 uint256 占 32 字节。根据数据范围选择最小够用的类型，可以显著降低存储成本。",uint8_uint32:"📖 uint8、uint16、uint32 等小整数类型相比 uint256 可以节省大量存储空间。当变量值范围有限时，应该优先使用这些紧凑类型。例如：提案数量（uint8）、投票数（uint32）都不需要 uint256 的巨大范围。",bytes32_string:"📖 bytes32 是固定长度的字节数组，始终占用 32 字节。string 是动态长度，存储成本更高且引入额外的 Gas 消耗。对于固定长度的短文本（如提案名称、哈希值），bytes32 是更优的选择。",storage_optimization:"📖 存储优化是智能合约 Gas 优化的核心。技巧包括：1. 使用最小够用的整数类型（uint8 而非 uint256）；2. 将多个小变量打包到同一存储槽位；3. 使用位运算存储布尔数组。这些优化可节省 30-50% 的存储成本。",bit_operation:"📖 位运算利用整数类型的二进制位存储多个布尔值。1 个 uint256 有 256 个位，可以存储 256 个布尔状态（如是否对某提案投票）。相比使用 mapping(uint256 => bool)，位运算节省约 40% 的 Gas。关键操作：左移(1<<n)生成掩码、与(&)检查、或(|)设置。",mapping_storage:"📖 mapping 是 Solidity 的哈希表实现，提供 O(1) 时间复杂度的查找。mapping(address => uint256) 存储地址到数据的映射，mapping(uint256 => uint32) 存储索引到数据的映射。mapping 是状态变量最常用的数据结构，高效且灵活。",mask_check:"📖 掩码（Mask）是位运算的核心概念。掩码是一个二进制数，只有特定位为 1。通过 & 运算检查位：(data & mask) != 0 表示该位已设置。通过 | 运算设置位：data | mask 将对应位设为 1。这种方法快速且节省 Gas。",timestamp_block:"📖 block.timestamp 是当前区块的时间戳（秒级）。它由矿工/验证者提供，可能有少许偏差（几秒到几分钟），但适合大多数场景。常用于实现时间锁、投票截止、合约到期等需要时间判断的功能。",event_logging:"📖 事件（Event）是 Solidity 的日志机制，记录在链上日志中（不占用状态存储）。事件可以有 indexed 参数（最多 3 个），可被链下应用高效检索。事件是实现前端通知、链下索引、历史记录查询的基础，是 DApp 交互的关键。"})[t]||"📖 点击其他概念标签查看更多详细解释。",y0=t=>({interface_definition:"🔌 欢迎来到 Day 14！你了解了接口定义 - 它规定了所有存款盒必须实现的功能。👉 创建任意存款盒来解锁抽象合约！",abstract_contract:"🎭 太棒了！你了解了抽象合约 - 它实现了通用功能但不能直接部署。👉 创建 Basic 存款盒来学习合约继承！",inheritance:"🧬 优秀！你体验了合约继承！BasicDepositBox 继承了 BaseDepositBox 的所有功能。👉 创建 Premium 或 TimeLocked 来学习 override！",override_keyword:"📝 很好！你使用了 override 关键字重写父合约函数。👉 创建 TimeLocked 存款盒来学习 virtual 和修饰器组合！",virtual_function:"🔮 太棒了！你了解了 virtual 关键字 - 它允许子合约重写父函数。👉 在锁定期间尝试取秘密来体验修饰器组合！",super_keyword:"⬆️ 优秀！你使用了 super 调用父合约函数。👉 创建第2个存款盒来体验工厂模式！",modifier_combination:"🔗 太棒了！你体验了修饰器组合 - 需要同时满足 onlyOwner 和 timeUnlocked！👉 创建 Premium 存款盒来学习元数据存储！",factory_pattern:"🏭 优秀！你体验了工厂模式！VaultManager 负责创建和管理所有存款盒。👉 转移所有权并更新记录来完成体验！",metadata_storage:"🏷️ 很好！你使用了元数据功能！Premium 版本可以存储额外信息。👉 查看完整代码来复习所有知识点！",time_lock:"⏰ 太棒了！你创建了时间锁定存款盒！解锁前无法取出秘密。🎉 你已掌握抽象合约、接口与工厂模式！",store_secret:"🔐 太棒了！你成功存入了秘密！Secret 已被安全存储在合约中。👉 尝试取出秘密来体验访问控制！",get_secret:"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。👉 尝试设置元数据或创建更多存款盒！",transfer_ownership:"🔑 很好！你转移了存款盒的所有权！新的所有者现在可以管理这个存款盒。👉 切换到新所有者完成转移流程！"})[t]||"📖 点击其他概念标签查看更多详细解释。",b0=t=>({interface_definition:"📖 接口（Interface）是 Solidity 中定义合约规范的方式。它只声明函数签名，不包含实现。任何实现该接口的合约都必须提供所有函数的具体实现。接口实现了多态和解耦，让不同的合约可以以统一的方式交互。",abstract_contract:"📖 抽象合约（Abstract Contract）是不能被直接部署的合约，它通常包含一个或多个纯虚函数（没有实现的函数）。抽象合约用于定义子合约必须实现的接口，同时提供一些通用的实现代码，是代码复用的重要机制。",inheritance:"📖 合约继承是 Solidity 的核心特性之一。通过 `contract Child is Parent`，子合约可以继承父合约的所有状态变量和函数。继承实现了代码复用，让开发者可以基于现有合约构建更复杂的功能。",override_keyword:"📖 override 关键字用于显式声明子合约重写了父合约的虚函数。从 Solidity 0.6.0 开始，重写函数必须使用 override 关键字，这提高了代码的可读性和安全性，防止意外重写。",virtual_function:"📖 virtual 关键字标记函数可以被继承合约重写。父合约的函数默认不能被重写，必须显式标记为 virtual。这是 Solidity 的设计选择，防止意外的函数重写导致安全问题。",super_keyword:"📖 super 关键字用于调用父合约的函数。在重写函数时，super 让你可以复用父类的逻辑，然后添加或修改特定行为。这在需要扩展而非完全替换父类功能时非常有用。",modifier_combination:"📖 多个修饰器可以组合使用，函数必须同时满足所有修饰器的条件才能执行。修饰器按声明顺序执行，每个修饰器的 `_` 代表被修饰函数的代码。这是实现复杂权限控制的有效方式。",factory_pattern:"📖 工厂模式是一种创建型设计模式，使用专门的工厂合约来创建和管理其他合约。VaultManager 就是工厂合约，它负责创建存款盒并追踪所有权。工厂模式实现了创建逻辑与使用逻辑的分离。",metadata_storage:"📖 元数据存储展示了继承扩展的实际应用。PremiumDepositBox 在继承 BaseDepositBox 的基础上，添加了 metadata 状态变量和相关函数，实现了功能的扩展，而不影响基础功能。",time_lock:"📖 时间锁定是一种常见的 DeFi 安全机制。TimeLockedDepositBox 使用 block.timestamp 和修饰器实现时间锁，只有在指定时间后才能执行特定操作。这保护了用户资产，防止冲动操作。"})[t]||"📖 点击其他概念标签查看更多详细解释。",sp={struct_definition:{name:"结构体定义",icon:"🏗️",unlockAt:1,message:"你了解了结构体定义！struct 允许你将多个相关数据组合成一个自定义类型。",code:`// 定义玩家资料结构体
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

// 升级后，V1 和 V2 的数据格式兼容`}},v0=t=>({struct_definition:"🏗️ 你了解了结构体定义！PlayerProfile 将 name 和 avatar 组合在一起。👉 设置玩家资料来解锁映射存储！",mapping_storage:"🗺️ 你的资料已保存到 mapping！通过键值对高效存储。👉 注册 weapon 插件来学习插件系统！",plugin_registration:"🔌 插件注册成功！地址已存入 plugins[key]。👉 点击「调用」执行插件函数！",low_level_call:"⚡ 低级别调用成功！使用了 EVM 的 call 指令。👉 查看 ABI 编码可视化！",abi_encoding:"🔢 ABI 编码完成！函数选择器是 keccak256 哈希的前4字节。👉 切换 staticcall 模式查询数据！",staticcall:"👁️ 静态调用成功！不消耗 Gas 的只读操作。👉 尝试切换到 achievement 插件！",dynamic_delegation:"🔄 动态委托系统运行中！一个核心管理多个插件。👉 在不同插件间切换体验互操作！",contract_interop:"🌐 合约互操作掌握！多个合约无缝协作。🎉 你已掌握 Day 16 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",w0=t=>({struct_definition:"📖 结构体(struct)允许你将多个相关的变量组合成一个自定义类型。PlayerProfile 包含 name 和 avatar 两个字段，可以像单个变量一样传递和存储。结构体是组织复杂数据的基础。",mapping_storage:"📖 映射(mapping)是哈希表结构，提供 O(1) 的读写效率。profiles 用 address 作为键存储玩家资料，plugins 用 string 作为键存储插件地址。mapping 是 Solidity 最常用的状态变量类型。",plugin_registration:"📖 插件注册将字符串标识符映射到合约地址，实现动态插件管理。这种设计模式被称为注册表模式(Registry Pattern)，允许运行时添加新功能而无需修改核心合约代码。",low_level_call:"📖 call 是 EVM 的低级别调用指令，允许你动态调用任何函数。它返回 (bool, bytes) 元组表示成功状态和返回值。call 非常灵活但不如普通调用安全，需要仔细检查返回值。",abi_encoding:"📖 ABI(Application Binary Interface)编码将函数签名和参数转换为字节码。函数选择器是函数签名的 keccak256 哈希的前4字节。abi.encodeWithSignature 自动处理编码过程。",staticcall:"📖 staticcall 与 call 类似，但被调用的合约不能修改状态(发送ETH、写存储等)。它适合查询操作，更安全且通常不消耗 Gas。staticcall 是 view 函数的底层实现。",dynamic_delegation:"📖 动态委托允许核心合约将操作转发给不同的插件合约，实现功能的模块化扩展。这种架构让系统可以灵活添加新功能，无需修改核心代码，是插件系统的基础。",contract_interop:"📖 合约互操作是 DeFi 和 DApp 的基础。通过标准接口和动态调用，不同合约可以像乐高积木一样组合使用。PluginStore 展示了如何通过统一接口协调多个独立合约。"})[t]||"📖 点击其他概念标签查看更多详细解释。",_0=t=>({proxy_pattern:"📦 你了解了代理模式！这是可升级合约的核心架构。👉 点击 delegatecall 说明来学习委托调用！",delegatecall:"🔄 你了解了 delegatecall！它在代理合约的存储上下文中执行逻辑合约的代码。👉 点击存储布局说明了解变量顺序的重要性！",storage_layout:"🔀 你了解了存储布局！代理合约和逻辑合约必须使用相同的存储变量顺序。👉 切换到 Owner 身份，创建第一个订阅计划！",upgrade_mechanism:"🚀 你体验了合约升级！通过更新 logicContract 地址，可以替换业务逻辑而不丢失数据。👉 切换到 User 身份，执行订阅操作！",logic_contract:"⚙️ 你了解了逻辑合约！它只包含业务逻辑代码，不存储数据。👉 订阅后查看 fallback 如何工作！",fallback_function:"🔙 你了解了 fallback 函数！代理合约使用它捕获所有未匹配的函数调用。👉 升级合约后查看数据是否仍然存在！",data_persistence:"💾 你验证了数据持久化！升级合约后，之前的数据仍然保持不变。👉 使用 V2 新功能（暂停/恢复）来对比版本差异！",version_control:"📊 你体验了版本控制！V2 新增了暂停/恢复功能。🎉 你已掌握 Day 17 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",k0=t=>({proxy_pattern:"📖 代理模式(Proxy Pattern)是可升级合约的核心架构。代理合约负责存储所有数据和 ETH，逻辑合约只包含业务代码。用户始终与代理合约交互，代理通过 delegatecall 将调用转发给当前逻辑合约。",delegatecall:"📖 delegatecall 是 EVM 的特殊调用方式，它在调用者（代理合约）的存储上下文中执行被调用合约（逻辑合约）的代码。这意味着逻辑合约可以读写代理合约的存储，但代码来自逻辑合约。msg.sender 和 msg.value 保持不变。",storage_layout:"📖 存储布局一致性是可升级合约的关键。代理合约和逻辑合约必须继承相同的存储布局基础合约（如 SubscriptionStorageLayout），确保变量顺序完全一致。如果顺序不同，升级后数据会错位，导致严重错误。",upgrade_mechanism:"📖 升级机制通过更新代理合约中的 logicContract 地址实现。upgradeTo() 函数只有 owner 可以调用，更新后所有新调用都会使用新逻辑。旧数据保持不变，因为数据存储在代理合约中，不在逻辑合约里。",logic_contract:"📖 逻辑合约(Logic Contract)只包含业务逻辑代码，不存储任何状态数据。它可以被替换升级而不影响数据。V1 和 V2 都是逻辑合约，它们继承相同的存储布局，但实现不同的功能。",fallback_function:"📖 fallback 函数是代理合约的核心。当用户调用代理合约中不存在的函数时，fallback 会被触发。它使用 delegatecall 将调用转发给逻辑合约，并返回执行结果。这是实现透明代理的关键。",data_persistence:"📖 数据持久化是可升级合约的重要特性。由于所有数据都存储在代理合约中，升级逻辑合约不会影响已有数据。用户升级前创建的订阅、计划等数据在升级后仍然可以正常访问和使用。",version_control:"📖 版本控制展示了如何在升级中添加新功能。V2 在 V1 的基础上新增了 pauseSubscription 和 resumeSubscription 功能，但保持数据格式兼容。这展示了可升级合约的灵活性和扩展性。"})[t]||"📖 点击其他概念标签查看更多详细解释。",op={oracle_interface:{name:"Chainlink接口",icon:"🔌",unlockAt:1,message:"你了解了 Chainlink 预言机接口！AggregatorV3Interface 是 Chainlink 标准接口，让智能合约能够获取链外数据。",code:`interface AggregatorV3Interface {
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
// 在构造函数中，部署者成为组织者`}},x0=t=>({oracle_interface:"🔌 你了解了 Chainlink 预言机接口！AggregatorV3Interface 是标准接口。👉 查看 ETH/USD 价格面板学习价格预言机！",eth_usd_oracle:"💰 你使用了 ETH/USD 价格预言机！注意 Chainlink 返回 8 位小数精度。👉 购买保险体验价格转换！",random_generation:"🎲 你看到了伪随机数生成！使用区块信息生成随机降雨量。👉 更新天气数据体验随机性！",purchase_insurance:"🛡️ 保险购买成功！支付保费获得保障。👉 当干旱发生时申请赔付！",price_conversion:"🔄 你了解了价格转换！1e26 = 1e18 × 1e8 抵消 Chainlink 精度。👉 申请赔付体验参数化保险！",parametric_payout:"💸 赔付成功！参数化保险自动执行无需审核。👉 了解冷却期机制防止滥用！",cooldown_mechanism:"⏱️ 你了解了冷却期！24小时内只能索赔一次。👉 快进时间或查看合约余额！",contract_balance:"🏦 你查看了合约余额！管理员可提取保险池资金。🎉 你已掌握 Day 18 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",A0=t=>({oracle_interface:"📖 Chainlink 预言机接口(AggregatorV3Interface)是行业标准，定义了 latestRoundData() 等函数。它让智能合约能够安全地获取链外数据，如价格、天气等。接口标准化确保不同预言机可以互换使用。",eth_usd_oracle:"📖 ETH/USD 价格预言机返回的价格有 8 位小数精度。例如 $3000 返回 300000000000。这是因为金融数据通常需要高精度，而 Solidity 不支持浮点数。使用时需要注意精度转换。",random_generation:"📖 伪随机数生成使用区块信息（timestamp, coinbase, number）作为种子。这种方式适合测试和演示，但不适合生产环境，因为矿工可以影响结果。生产环境应使用 Chainlink VRF 等安全随机数方案。",purchase_insurance:"📖 购买保险函数检查用户支付足够的 ETH 且尚未投保。保费根据当前 ETH 价格动态计算，确保合约收到正确金额。投保状态存储在 hasInsurance 映射中，永久记录在区块链上。",price_conversion:"📖 价格转换公式 (USD × 1e26) / ETH价格 考虑了 Chainlink 的 8 位小数精度。1e26 = 1e18(wei精度) × 1e8(价格精度)。例如 $10 保费在 ETH $3000 时约为 0.0033 ETH。",parametric_payout:"📖 参数化保险(Parametric Insurance)是区块链保险的核心创新。传统保险需要人工审核理赔，而参数保险根据预设条件（如降雨量 < 500mm）自动赔付，无需信任第三方，大幅降低运营成本。",cooldown_mechanism:"📖 冷却期机制使用 block.timestamp 记录上次索赔时间，限制 24 小时内只能索赔一次。这是防止滥用的安全措施。在真实区块链上时间无法篡改，确保机制可靠。",contract_balance:"📖 合约余额管理是 DeFi 应用的基础。管理员可以提取合约中的 ETH，用于保险池资金管理。balance 操作需要注意重入攻击防护，使用 checks-effects-interactions 模式。"})[t]||"📖 点击其他概念标签查看更多详细解释。",T0=t=>({keccak256_hash:"🔐 你使用了 Keccak256 哈希算法！这是以太坊标准的哈希函数，将任意数据转换为 32 字节哈希值。👉 点击展开签名详情查看 R/S/V 组件！",ecdsa_signature:"🎯 你了解了 ECDSA 椭圆曲线签名！这是以太坊使用的数字签名算法，基于椭圆曲线密码学。👉 点击生成签名来体验完整流程！",signature_rsv:"📝 你分解了签名的 R/S/V 组件！以太坊签名由 65 字节组成：r(32) + s(32) + v(1)。👉 使用签名参与活动来解锁 ecrecover！",eip191_prefix:"📋 你了解了 EIP-191 签名前缀！\\x19Ethereum Signed Message:\\n32 是以太坊个人签名的标准，防止签名被滥用。👉 查看参与者列表完成所有概念！",ecrecover:"🔓 你使用了 ecrecover 函数！这是 Solidity 内置函数，通过签名恢复签名者地址。👉 查看参与者列表了解映射存储！",require_statement:"⚠️ 你使用了 require 验证语句！这是 Solidity 安全编程的基础，不满足条件时回滚交易。👉 查看参与者列表完成所有概念！",mapping_storage:"🗂️ 你使用了映射存储！mapping 是 Solidity 高效的键值对结构，用于存储用户参与状态。🎉 你已掌握 Day 19 所有核心概念！",msg_sender:"👤 你使用了 msg.sender！这是 Solidity 的全局变量，表示当前交易的发送者地址。👉 点击展开签名详情查看 R/S/V 组件！"})[t]||"📖 点击其他概念标签查看更多详细解释。",C0=t=>({keccak256_hash:"📖 Keccak256 是以太坊原生的哈希函数（SHA-3 算法变体）。它将任意长度的输入转换为 32 字节的固定长度输出。在签名验证中，我们需要先对用户地址进行哈希，生成唯一的消息标识。",ecdsa_signature:"📖 ECDSA（椭圆曲线数字签名算法）是以太坊使用的签名方案。它基于椭圆曲线密码学，使用私钥生成签名，任何人可以用公钥验证签名。签名过程不可逆，无法从签名推导出私钥。",signature_rsv:"📖 以太坊签名由 65 字节组成：r（32字节）+ s（32字节）+ v（1字节）。r 和 s 是签名曲线坐标，v 是恢复标识符（27 或 28）。通过 v 可以推导出对应的公钥地址。",eip191_prefix:"📖 EIP-191 定义了以太坊签名的标准格式：\\x19Ethereum Signed Message:\\n32 前缀。这个前缀确保签名只能用于以太坊消息，防止签名被滥用到其他区块链或应用中。",ecrecover:"📖 ecrecover 是 EVM 内置函数，用于从签名数据恢复签名者地址。它接受消息哈希和 r、s、v 作为参数，返回签名的公钥对应的地址。这是签名验证的核心函数。",require_statement:"📖 require 是 Solidity 中最常用的错误处理语句。第一个参数是布尔条件，第二个参数是可选的错误消息。当条件为 false 时，交易回滚，消耗所有 Gas。",mapping_storage:"📖 mapping 是 Solidity 中的键值对数据结构，类似于哈希表。mapping(address => bool) 表示地址到布尔值的映射。访问不存在的键会返回默认值（false），写入时会创建键值对。",msg_sender:"📖 msg.sender 是 Solidity 的全局变量，表示当前调用者的地址。在构造函数中，msg.sender 是合约的部署者，因此成为组织者。这是权限控制的基础。"})[t]||"📖 点击其他概念标签查看更多详细解释。",cp={reentrancy_attack:{name:"重入攻击",icon:"🔥",unlockAt:1,message:"你了解了重入攻击！这是最著名的智能合约漏洞，攻击者通过递归调用窃取资金。",code:`// 重入攻击原理:
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
(bool sent, ) = msg.sender.call{value: amount}("");`}},E0=t=>({reentrancy_attack:"🔥 你了解了重入攻击！这是最著名的智能合约漏洞。👉 存入ETH到金库开始攻击演示！",fallback_receive:"⚡ 你使用了回退函数！receive() 在接收ETH时触发，是重入攻击的入口点。👉 查看防护机制了解如何修复！",vulnerable_withdraw:"🔴 你发现了漏洞提款函数！它先发送ETH后更新余额。👉 查看防护机制了解如何修复！",deposit_function:"💰 你使用了存款函数！用户存入ETH增加余额。👉 现在尝试攻击漏洞版本！",checks_effects_interactions:"✅ 你了解了CEI模式！先更新状态再发送ETH是防止重入的关键。👉 尝试攻击安全版本！",reentrancy_guard:"🔒 你使用了重入锁！nonReentrant修饰符阻止函数重入调用。👉 查看代码对比巩固知识！",contract_balance:"🏦 你查看了合约余额！address(this).balance返回合约ETH数量。🎉 恭喜完成Day20全部学习！",code_comparison:"📜 你对比了漏洞代码和安全代码！理解差异是学习安全编程的关键。👉 切换到'金库管理员'查看金库状态！"})[t]||"📖 点击其他概念标签查看更多详细解释。",S0=t=>({reentrancy_attack:"📖 重入攻击(Reentrancy Attack)是智能合约最著名的漏洞。攻击者利用合约在发送ETH后、更新状态前的窗口期，通过递归调用重复提款。2016年的The DAO攻击就是利用此漏洞，损失360万ETH，导致以太坊硬分叉。",fallback_receive:"📖 receive() 是 Solidity 的特殊函数，当合约接收 ETH 且没有附带数据时触发。在重入攻击中，攻击者的 receive() 函数会再次调用目标合约的提款函数，形成递归调用链。这是重入攻击的核心机制。",vulnerable_withdraw:"📖 漏洞提款函数违反了 Checks-Effects-Interactions 模式。它先执行外部调用（发送ETH），后更新状态（清零余额）。当外部调用触发攻击者的 receive() 时，余额还未更新，攻击者可以再次提款。",deposit_function:"📖 存款函数是重入攻击的前提条件。攻击者必须先存入一定数量的 ETH，获得提款资格。deposit() 使用 payable 修饰符接收 ETH，并使用 require 验证金额大于0。",checks_effects_interactions:"📖 CEI模式是 Solidity 安全编程的黄金法则。Checks（检查条件）→ Effects（更新状态）→ Interactions（外部调用）。关键是先更新状态再外部调用，这样即使被重入，状态已经是最新的，攻击者无法重复获利。",reentrancy_guard:"📖 重入锁(Reentrancy Guard)使用状态变量跟踪函数执行状态。_NOT_ENTERED(1) 表示未锁定，_ENTERED(2) 表示已锁定。modifier 在函数执行前锁定，执行后解锁。如果函数被重入调用，require 会阻止执行。OpenZeppelin 提供了标准实现。",contract_balance:"📖 address(this).balance 返回合约当前持有的 ETH 数量（以 wei 为单位）。在攻击合约中，它用于判断目标金库是否还有资金可以继续攻击。在管理函数中，它用于查询和提取合约资金。",code_comparison:"📖 通过对比漏洞代码和安全代码，可以清晰看到修复方法：1) 调整代码顺序，先更新状态再外部调用；2) 添加 nonReentrant 修饰符作为双重保护。理解这种差异对编写安全智能合约至关重要。",ierc721_interface:"📖 IERC721 是 ERC721 代币标准的接口定义，规定了 NFT 合约必须实现的基本功能，包括 balanceOf、ownerOf、transferFrom、approve 等函数。符合此接口的合约可以在所有支持 ERC721 的平台上使用。",mint_function:"📖 铸造函数是创建新 NFT 的核心。它从 0 地址（address(0)）转移代币到新所有者，这是 ERC721 标准中表示铸造的特殊约定。每次铸造都会触发 Transfer 事件，from 为 0 地址。",token_id_counter:"📖 代币 ID 计数器用于生成唯一的 tokenId。通常从 1 开始递增，确保每个 NFT 都有唯一标识。计数器使用 uint256 类型，可以支持几乎无限数量的 NFT。",token_uri:"📖 Token URI 是 NFT 元数据的链接，通常指向 IPFS 上的 JSON 文件。元数据包含 NFT 的名称、描述、图片等信息。这使得 NFT 可以展示丰富的内容，而不仅仅是区块链上的数字。",balance_of:"📖 balanceOf 函数查询地址拥有的 NFT 数量。它使用 _balances 映射实现，时间复杂度为 O(1)。这是 ERC721 标准的基础查询功能，也是所有权管理的核心。",transfer_from:"📖 transferFrom 函数将 NFT 从一个地址转移到另一个地址。调用者必须是被授权者或代币所有者。转移时会清除原有的授权，防止授权滥用。",approve_mechanism:"📖 授权机制允许代币所有者授权其他地址管理特定代币。approve 授权单个代币，getApproved 查询授权状态。这是 NFT 交易市场的基础，允许第三方代为转移代币。",approval_for_all:"📖 操作员授权(setApprovalForAll)允许所有者一次性授权某个地址管理其所有代币。这比逐个授权更高效，常用于 NFT 交易平台的批量操作场景。",safe_transfer:"📖 安全转移(safeTransferFrom)在转移前检查接收方是否实现了 IERC721Receiver 接口。这防止 NFT 被意外发送到不支持 ERC721 的合约中而被锁定。这是 ERC721 标准的重要安全特性。"})[t]||"📖 点击其他概念标签查看更多详细解释。",lp={ierc721_interface:{name:"IERC721接口",icon:"🔌",unlockAt:1,message:"你了解了ERC721标准接口！这是NFT合约必须实现的基本功能规范。",code:`interface IERC721 {
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
}`}},I0=t=>({ierc721_interface:"🔌 你了解了ERC721标准接口！👉 点击铸造按钮创建你的第一个NFT！",mint_function:"🔨 你使用了铸造函数！👉 完成铸造查看计数器如何工作！",token_id_counter:"🔢 你了解了代币ID计数器！👉 查询地址余额了解持有情况！",token_uri:"🔗 你查看了Token URI！👉 尝试铸造或转移NFT！",balance_of:"📊 你查询了NFT余额！👉 查看代币授权状态了解approve机制！",transfer_from:"🔄 你执行了NFT转移！👉 尝试授权其他地址管理你的NFT！",approve_mechanism:"🔑 你使用了授权机制！👉 尝试设置操作员授权！",approval_for_all:"👥 你设置了操作员授权！👉 尝试使用安全转移功能！",safe_transfer:"🛡️ 你使用了安全转移！🎉 恭喜完成Day21所有学习！"})[t]||"📖 点击其他概念标签查看更多详细解释。",D0=t=>({ierc721_interface:"📖 IERC721 是 ERC721 代币标准的接口定义，规定了 NFT 合约必须实现的基本功能，包括 balanceOf、ownerOf、transferFrom、approve 等函数。符合此接口的合约可以在所有支持 ERC721 的平台上使用。",mint_function:"📖 铸造函数是创建新 NFT 的核心。它从 0 地址（address(0)）转移代币到新所有者，这是 ERC721 标准中表示铸造的特殊约定。每次铸造都会触发 Transfer 事件，from 为 0 地址。",token_id_counter:"📖 代币 ID 计数器用于生成唯一的 tokenId。通常从 1 开始递增，确保每个 NFT 都有唯一标识。计数器使用 uint256 类型，可以支持几乎无限数量的 NFT。",token_uri:"📖 Token URI 是 NFT 元数据的链接，通常指向 IPFS 上的 JSON 文件。元数据包含 NFT 的名称、描述、图片等信息。这使得 NFT 可以展示丰富的内容，而不仅仅是区块链上的数字。",balance_of:"📖 balanceOf 函数查询地址拥有的 NFT 数量。它使用 _balances 映射实现，时间复杂度为 O(1)。这是 ERC721 标准的基础查询功能，也是所有权管理的核心。",transfer_from:"📖 transferFrom 函数将 NFT 从一个地址转移到另一个地址。调用者必须是被授权者或代币所有者。转移时会清除原有的授权，防止授权滥用。",approve_mechanism:"📖 授权机制允许代币所有者授权其他地址管理特定代币。approve 授权单个代币，getApproved 查询授权状态。这是 NFT 交易市场的基础，允许第三方代为转移代币。",approval_for_all:"📖 操作员授权(setApprovalForAll)允许所有者一次性授权某个地址管理其所有代币。这比逐个授权更高效，常用于 NFT 交易平台的批量操作场景。",safe_transfer:"📖 安全转移(safeTransferFrom)在转移前检查接收方是否实现了 IERC721Receiver 接口。这防止 NFT 被意外发送到不支持 ERC721 的合约中而被锁定。这是 ERC721 标准的重要安全特性。"})[t]||"📖 点击其他概念标签查看更多详细解释。",up={chainlink_vrf:{name:"Chainlink VRF",icon:"🔢",unlockAt:1,message:"你了解了 Chainlink VRF！链下可验证随机函数，提供不可预测且可验证的随机数，解决链上随机数安全问题。",code:`interface VRFCoordinatorV2Interface {
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
}`}},dp={lending_pool:{name:"借贷池",icon:"🏦",unlockAt:1,message:"你了解了借贷池！DeFi借贷协议的核心，用户存入资产成为流动性提供者，借款人可以借出资产。",code:`contract SimpleLending {
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
}`}},fp={escrow_contract:{name:"托管合约",icon:"📜",unlockAt:1,message:"你了解了托管合约！买卖双方的资金托管在第三方合约中，满足条件后自动释放。",code:`contract EnhancedSimpleEscrow {
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
}`}},pp={amm_formula:{name:"AMM公式",icon:"📐",unlockAt:1,message:"你了解了AMM恒定乘积公式！x × y = k，保持储备乘积恒定，自动做市。",code:`// 恒定乘积公式 (x * y = k)
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
}`}},mp={nft_marketplace:{name:"NFT市场",icon:"🏪",unlockAt:1,message:"你了解了NFT市场！去中心化的NFT交易市场，允许用户买卖NFT。",code:`contract NFTMarketplace {
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
}`}},gp={reward_debt_pattern:{name:"奖励债务模式",icon:"📝",unlockAt:1,message:"你了解了奖励债务模式！这是DeFi收益耕作的核心机制，通过累积奖励债务来准确计算用户收益。",code:`struct StakerInfo {
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
}`}},hp={token_governance:{name:"代币治理模式",icon:"🗳️",unlockAt:1,message:"你了解了代币治理模式！在DAO中，代币持有量决定投票权，1代币=1票，实现去中心化决策。",code:`// 投票权重 = 代币持有量
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
// 4. 如果重入调用，_status == ENTERED，立即 revert`}},R0=t=>({chainlink_vrf:"🔢 你了解了 Chainlink VRF！📍 切换到 Owner 角色，点击「🚀 开启彩票」按钮开始新一轮彩票！",random_number_generation:"🎲 你了解了随机数生成！📍 继续参与彩票或切换到 Owner 角色结束彩票！",lottery_state_machine:"🎰 你了解了彩票状态机！📍 切换到 Owner 角色，点击「🚀 开启彩票」按钮开始彩票！",time_lock:"⏰ 你了解了时间锁机制！📍 点击「🎲 触发 VRF 回调」按钮模拟 Chainlink 返回随机数！",request_randomness:"📤 你了解了请求随机数！📍 等待更多玩家参与，或切换 Owner 点击「🏁 结束彩票」请求随机数！",fulfill_random_words:"📥 你了解了完成随机词！📍 点击「🏆 获胜者」区块查看奖品分配详情！",prize_distribution:"🏆 你了解了奖品分配！📍 点击「📜 事件日志」区块或「查看完整代码」了解完整实现！",lottery_security:"🛡️ 你了解了彩票安全机制！🎉 恭喜完成 Day 22 公平链上彩票学习！"})[t]||`🎲 欢迎来到 Day 22！📍 点击「🎰 彩票合约架构」区块了解状态机！
💡 提示：建议先切换到 Owner 角色开启彩票，然后 Player 参与。`,O0=t=>({chainlink_vrf:"🔢 Chainlink VRF（Verifiable Random Function）是一种链下可验证随机函数，提供不可预测且可验证的随机数。它解决了链上随机数生成不安全的问题（如区块哈希可被矿工操纵）。VRF 由 Chainlink 链下节点生成，并附带加密证明，确保随机性的真实性和不可预测性。",random_number_generation:"🎲 链上随机数生成是一个挑战！传统的随机数源（区块哈希、时间戳）可被矿工操纵。Chainlink VRF 提供安全的解决方案：随机数在链下生成，不可预测（请求时无法预知），可验证（可证明随机性来源），抗操纵（矿工无法影响结果）。",lottery_state_machine:"🎰 状态机确保彩票流程安全有序。Open（开放购买）→ Calculating（等待 VRF 随机数）→ Closed（已结束）。状态机防止非法操作，例如不能在 Calculating 状态购买彩票。状态转换由事件触发（如达到最大人数触发抽奖）。",time_lock:"⏰ 时间锁是防止抢跑攻击的重要机制。彩票结算后不能立即领取奖金，给所有参与者公平的准备时间。这防止 MEV（最大可提取价值）攻击者抢跑领取奖金。时间锁通常设置为 1 小时，确保安全性的同时不影响用户体验。",request_randomness:"📤 用户购买彩票时，合约调用 Chainlink VRF Coordinator 的 requestRandomWords 函数，请求随机数。这是一个异步过程：合约发送请求 → Chainlink 网络处理 → 回调 fulfillRandomWords 函数返回随机数。期间彩票进入 Calculating 状态。",fulfill_random_words:"📥 fulfillRandomWords 是 Chainlink VRF 的回调函数，只有 Coordinator 可调用。它接收随机数数组，使用随机数选出赢家（randomWords[0] % players.length），并将状态改为 Closed。onlyCoordinator 修饰符确保安全性。",prize_distribution:"🏆 赢家在时间锁后可以领取奖金。claimPrize 函数检查调用者是赢家且时间锁已过，然后转账奖金。合约 Owner 可以提取未中奖的资金（withdrawBalance）。领取奖金后合约可以重置，开始下一轮彩票。",lottery_security:"🛡️ 彩票安全包含多层防护：1️⃣ 非重入修饰符防止重入攻击 2️⃣ onlyOwner 访问控制保护管理函数 3️⃣ 紧急暂停机制（暂停合约） 4️⃣ Chainlink VRF 安全随机数 5️⃣ 时间锁防止抢跑 6️⃣ 状态机确保流程正确"})[t]||"暂无解释",P0=t=>({lending_pool:"🏦 你了解了借贷池！💰 存入资产成为流动性提供者，赚取利息收益。📍 切换到「💰 存款」标签页存入资产！",collateral_deposit:"💰 你了解了抵押存入！借款前需要存入抵押品。📍 切换到「🏦 抵押」标签页存入抵押！",borrow_mechanism:"🔓 你了解了借款机制！可以借出不超过抵押品价值的资产。📍 切换到「💸 借款」标签页继续借款！",health_factor:"❤️ 你了解了健康因子！HF < 1 时会被清算。📍 查看右上角「💸 当前债务」卡片中的健康因子指示器！",liquidation_threshold:"⚠️ 你了解了清算阈值！当债务达到抵押品价值80%时可清算。📍 继续借款超过抵押品50%触发此概念！",interest_calculation:"📊 你了解了利息计算！借款需要支付利息。📍 切换到「💸 借款」标签页点击「✅ 还款」按钮！",repay_function:"💸 你了解了还款功能！偿还债务提高健康因子。📍 点击右上角「📖 查看完整代码」了解借贷安全机制！",lending_security:"🛡️ 你了解了借贷安全！通过抵押、健康因子和清算保护协议。🎉 Day23 所有概念已解锁！"})[t]||"🏦 欢迎来到 Day23！📍 点击「📊 合约架构」区块了解 DeFi 借贷协议！",B0=t=>({lending_pool:"📖 借贷池是 DeFi 借贷协议的核心。用户存入资产成为流动性提供者，借款人可以借出资产。协议自动匹配借贷双方，并收取利息。",collateral_deposit:"📖 抵押存入是借贷的安全机制。借款人必须存入超额抵押品才能借款，通常抵押品价值需要大于借款金额的1.25倍。",borrow_mechanism:"📖 借款机制允许用户借出抵押品价值一定比例的资产。借款额度动态计算，需要维持健康的健康因子。",health_factor:"📖 健康因子 = (抵押品价值 × 清算阈值) / 债务金额。HF < 1 时有被清算风险，借款人应该增加抵押品或偿还债务。",liquidation_threshold:"📖 清算阈值定义了安全边界。通常设置为80%，意味着债务达到抵押品价值的80%时，健康因子=1，任何进一步借款都会导致清算。",interest_calculation:"📖 利息根据借款金额和借款时间计算。利息 = 本金 × 利率 × 时间。DeFi借贷通常采用复利计算。",repay_function:"📖 还款功能允许借款人偿还债务。还款后债务减少，健康因子提高，降低清算风险。可以部分或全部还款。",lending_security:"📖 DeFi借贷安全机制包括：1) 超额抵押 2) 健康因子监控 3) 自动清算 4) 利率调整。这些机制共同保护协议和用户资金安全。"})[t]||"📖 点击其他概念标签查看更多详细解释。",L0=t=>({escrow_contract:"📜 你了解了托管合约！资金由第三方托管，买卖双方安全交易。📍 向下滚动到「💰 存款」区块存入资金！",buyer_seller_arbitration:"⚖️ 你了解了买卖仲裁！第三方公正裁决争议。📍 买卖双方可以发起争议！",dispute_resolution:"🔨 你了解了争议解决！无法达成一致时可仲裁。📍 点击「👑 仲裁」区块查看仲裁机制！",time_locked_release:"⏰ 你了解了时间锁释放！买家可以确认收货或等待超时。📍 等待超时自动释放资金！",mutual_cancellation:"🤝 你了解了协商取消！双方一致同意可取消交易。📍 双方都同意后可以取消！",arbiter_role:"👑 你了解了仲裁者角色！可信第三方公正裁决。📍 仲裁者可以解决买卖双方争议！",multi_party_security:"🔐 你了解了多方安全！状态机、时间锁和仲裁保护多方。🎉 Day24 所有概念已解锁！",state_management:"📊 你了解了状态管理！枚举管理合约状态，确保流程正确。🎉 Day24 所有概念已解锁！"})[t]||"📜 欢迎来到 Day24！📍 点击「📜 托管合约」区块了解托管机制！",F0=t=>({escrow_contract:"📖 托管合约是保护买卖双方交易安全的智能合约。买家付款后资金托管在合约中，卖家发货后买家确认，合约自动释放资金。",buyer_seller_arbitration:"📖 买卖仲裁机制引入可信的第三方仲裁者。当买卖双方产生争议时，仲裁者可以根据证据公正裁决资金分配。",dispute_resolution:"📖 争议解决机制允许买卖双方在交易出现问题时发起争议。仲裁者审查证据后，可以决定将资金释放给买家、卖家或进行分配。",time_locked_release:"📖 时间锁释放保护买家利益。买家在规定时间内可以确认收货，如果卖家不发货或买家不响应，超时后资金自动退回买家。",mutual_cancellation:"📖 协商取消机制允许买卖双方达成一致后取消交易。双方都需要同意取消，合约将资金退回买家。",arbiter_role:"📖 仲裁者是托管合约中受信任的第三方。仲裁者的职责是：1) 审查争议 2) 公正裁决 3) 保护双方利益。",multi_party_security:"📖 托管合约的多方安全机制包括：1) 状态机管理交易流程 2) 时间锁保护买家权益 3) 协商取消提供灵活性 4) 仲裁解决争议。",state_management:"📖 状态管理使用枚举类型定义合约状态：Pending(待处理) → Released(已释放) / Refunded(已退款) / Disputed(争议中)。状态转换确保交易流程正确执行。"})[t]||"📖 点击其他概念标签查看更多详细解释。",N0=t=>({amm_formula:"📐 你了解了AMM公式！x × y = k 恒定乘积做市。📍 继续查看「💰 流动性池状态」区块了解流动性机制！",liquidity_pool:"💧 你了解了流动性池！存入两种代币获得LP代币。📍 点击「💧 添加流动性」按钮存入代币！",constant_product:"✖️ 你了解了恒定乘积！k值不变自动调整价格。📍 继续查看「📈 价格曲线」区块了解自动价格发现！",add_liquidity:"➕ 你使用了添加流动性！存入Token A和Token B获得LP代币。📍 切换到「🔄 交易」标签页进行代币交换！",swap_mechanism:"🔄 你了解了交易机制！根据恒定乘积自动计算输出。📍 尝试交换Token A和Token B！",remove_liquidity:"➖ 你了解了移除流动性！销毁LP代币取回代币。📍 点击「➖ 移除流动性」按钮取回代币！",slippage_calculation:"📉 你了解了滑点！交易量大时价格影响大。📍 继续交易查看滑点效果！",reserves_management:"🗄️ 你了解了储备管理！AMM自动管理储备。🎉 Day25 所有概念已解锁！"})[t]||"📐 欢迎来到 Day25！📍 点击「📊 AMM架构」区块了解恒定乘积公式！",$0=t=>({amm_formula:"📖 AMM恒定乘积公式 x × y = k 由Uniswap发明。交易前后k值保持不变，价格自动调整。这是去中心化交易所的核心算法。",liquidity_pool:"📖 流动性池包含两种代币的储备。流动性提供者(LP)存入代币获得LP代币，代表在池中的份额。LP代币可以兑换回底层代币。",constant_product:"📖 恒定乘积公式确保储备乘积恒定。当用户用Token A换Token B时，reserveA增加，reserveB减少，但k = reserveA × reserveB不变。",add_liquidity:"📖 添加流动性时按当前比例存入两种代币。LP代币数量 = sqrt(reserveA × reserveB) - 初始流动性。LP赚取交易手续费收益。",swap_mechanism:"📖 交易机制根据恒定乘积公式计算：输出 = (输入 × 输出储备) / (输入储备 + 输入 × (1-费率))。自动执行，无需订单簿。",remove_liquidity:"📖 移除流动性时按LP份额销毁LP代币，按比例取回两种代币。即使池中有交易，也能随时提取。",slippage_calculation:"📖 滑点是指实际价格与预期价格的差异。大额交易会产生更大滑点。设置最小输出保护：要求输出 >= 预期 × (1 - 滑点容忍度)。",reserves_management:"📖 AMM自动管理储备：1) 交易时更新储备 2) k值保持恒定 3) 流动性可随时添加/移除 4) 费率赚取收益。无需人工干预。"})[t]||"📖 点击其他概念标签查看更多详细解释。",q0=t=>({nft_marketplace:"🏪 你了解了NFT市场！去中心化NFT交易市场。📍 点击「📋 挂单」区块查看NFT挂单！",listing_mechanism:"📋 你了解了挂单机制！卖家设置固定价格，买家直接购买。📍 点击「📋 创建挂单」按钮挂售NFT！",royalty_payment:"💎 你了解了版税支付！每次转售创作者获得版税。📍 点击「🛡️ 安全机制」区块了解NFT托管！",marketplace_security:"🔒 你了解了市场安全！NFT托管机制保护交易安全。📍 点击「💰 资金分配流程」区块了解版税分配！",buy_now_price:"🏷️ 你了解了一口价！卖家设置固定价格买家购买。📍 在「🏪 NFT市场」区块购买NFT！",cancel_listing:"❌ 你了解了取消挂单！卖家随时可以取消。📍 点击「❌ 取消挂单」按钮取消挂单！",nft_escrow:"📦 你了解了NFT托管！挂单时NFT托管在合约中。🎉 Day26 所有概念已解锁！",owner_revenue:"💰 你了解了卖家收益！出售NFT获得收入。🎉 Day26 所有概念已解锁！"})[t]||"🏪 欢迎来到 Day26！📍 点击「🏪 NFT市场」区块了解去中心化交易！",M0=t=>({nft_marketplace:"📖 NFT市场是去中心化的NFT交易平台。无需中心化服务器，智能合约自动处理挂单、交易和结算。卖家获得更好的收益，买家享受更低的费用。",listing_mechanism:"📖 挂单机制：卖家授权NFT给市场，设置固定价格，NFT托管在合约中。买家支付价格后自动获得NFT。简单快捷，无需等待。",royalty_payment:"📖 版税机制确保原创作者从每次转售中获益。例如10%版税意味着二次销售价格的10%自动支付给创作者。通过ERC2981标准实现。",marketplace_security:"📖 NFT市场安全机制：1) 挂单前授权 2) NFT托管在合约 3) 只能卖家取消 4) 付款后NFT转移给买家 5) 版税自动分配。",buy_now_price:"📖 一口价(Now Price)是卖家设置的固定价格。买家可以直接购买，无需出价或等待。适合快速交易，价格由卖家根据市场情况决定。",cancel_listing:"📖 卖家可以随时取消挂单，NFT会退回卖家钱包。取消后需要重新挂单才能出售。买家看到的挂单是实时的。",nft_escrow:"📖 NFT托管流程：挂单时NFT从卖家转到合约托管，购买时NFT从合约转到买家，取消时NFT从合约退回卖家。整个过程由智能合约自动执行。",owner_revenue:"📖 卖家收益 = 售价 - 版税 - 手续费。例如：卖100 ETH，版税10%，手续费2.5%，卖家实际获得87.5 ETH。确保定价时考虑这些成本。"})[t]||"📖 点击其他概念标签查看更多详细解释。",U0=t=>{const e=t[t.length-1];return{reward_debt_pattern:"📊 已了解奖励债务模式！📍 点击「📊 合约状态与奖励计算」区块了解精度处理和时间加权！",staking_token_decimals:"🔢⏱️ 已了解精度处理和时间加权！📍 向下滚动到「👤 角色切换」区块，点击「👤 Staker」按钮开始质押！",time_weighted_calculation:"🔢⏱️ 已了解精度处理和时间加权！📍 向下滚动到「👤 角色切换」区块，点击「👤 Staker」按钮开始质押！",reentrancy_guard:"🛡️ 已了解重入保护！📍 在「🛡️ 安全防护机制」区块，点击「🚨 紧急提取」按钮（注意：会放弃所有奖励）！",stake_function:"💧 已质押成功！📍 点击「⏩ 快进1天」按钮查看奖励累积，然后点击「🎁 领取奖励」！",unstake_function:"💸 已取消质押！📍 继续领取奖励或点击「🛡️ 安全防护机制」区块了解重入保护！",claim_rewards:"🎁 已领取奖励！📍 点击「🛡️ 安全防护机制」区块了解重入保护！",emergency_withdraw:"🚨 已紧急提取！🎉 Day 27 所有概念已解锁！"}[e]||"🌾 欢迎来到 Day 27！📍 点击「🌾 收益耕作架构」区块了解奖励债务模式！"},V0=t=>({reward_debt_pattern:"📖 奖励债务模式是DeFi收益耕作的核心机制。每次质押、取消质押或领取奖励时，先更新奖励债务，确保用户获得准确的收益。",staking_token_decimals:"📖 精度处理通过10^decimals倍数将小数计算转换为整数计算。不同代币有不同小数位（如USDC是6位，ETH是18位），合约需要正确处理这些差异。",time_weighted_calculation:"📖 时间加权计算确保奖励按质押时间和数量公平分配。公式：新奖励 = 时间差 × 每秒奖励 × 质押量 / 10^decimals。质押时间越长、数量越多，奖励越多。",reentrancy_guard:"📖 ReentrancyGuard防止重入攻击。在stake、unstake、claimRewards等涉及外部调用的函数上使用nonReentrant修饰符，确保函数执行期间不能被重入调用。",stake_function:"📖 质押功能遵循Checks-Effects-Interactions模式：先验证条件，再更新状态，最后进行外部调用。这防止了重入攻击。",unstake_function:"📖 取消质押功能允许用户取回质押的代币。操作前会先更新奖励，确保用户获得所有应得奖励。可以部分或全部取消质押。",claim_rewards:"📖 领取奖励功能将累积的奖励债务转换为实际的奖励代币。领取后奖励债务清零，可以重新累积新的奖励。",emergency_withdraw:"📖 紧急提取功能允许用户在紧急情况下立即取回质押代币，但会放弃所有待领取奖励。这是保护用户资金的最后手段。"})[t]||"📖 点击其他概念标签查看更多详细解释。",H0=t=>({token_governance:"🗳️ 已了解代币治理模式！📍 点击「⚙️ 治理参数」区块了解时间锁和法定人数！",timelock_mechanism:"🔒 已了解时间锁机制！📍 再次点击「⚙️ 治理参数」区块了解法定人数！",quorum_threshold:"👥 已了解法定人数！📍 点击「📊 提案状态流转图」了解提案状态机！",proposal_state_machine:"📊 已了解提案状态机！📍 切换到「👤 TokenHolder」角色开始投票！",proposal_struct:"📝 已了解提案结构体！📍 切换到「👤 TokenHolder」角色参与投票！",voting_function:"🗳️ 已投票成功！📍 切换到「🔧 Executor」角色最终确定提案！",finalize_function:"✅ 已最终确定提案！📍 使用「⏱️ 时间控制」快进时间，然后执行提案！",low_level_call:"🔧 已执行提案！🎉 Day 28 所有概念已解锁！",reentrancy_guard:"🛡️ 已了解重入保护！📍 执行提案了解低级别调用！"})[t]||"🏛️ 欢迎来到 Day 28！📍 点击「🏛️ DAO治理架构」区块了解代币治理模式！",W0=t=>({token_governance:"📖 代币治理模式是DAO的核心机制。代币持有量决定投票权，1代币=1票。这种模式实现了去中心化决策，让代币持有者共同管理协议。",timelock_mechanism:"📖 时间锁机制是DAO的安全保障。提案通过后需要等待2天才能执行，给用户时间审查提案内容。如果不满意，可以在时间锁期间退出。",quorum_threshold:"📖 法定人数机制确保提案有足够关注度。需要至少10%的总代币供应量参与投票，防止少数人操纵决策。",proposal_state_machine:"📖 提案状态机管理提案的完整生命周期：Pending(待创建)→Active(投票中)→Succeeded(已通过)/Defeated(被否决)→Queued(时间锁中)→Executed(已执行)。",proposal_struct:"📖 提案结构体存储提案的所有信息：ID、创建者、描述、投票数据、执行信息等。mapping记录谁已经投过票，防止重复投票。",voting_function:"📖 投票功能允许代币持有者在投票期内投票。每个地址只能投一次，投票权重等于代币持有量。投票不可撤销或更改。",finalize_function:"📖 最终确定功能在投票结束后调用。检查法定人数和多数决，通过后设置执行时间进入时间锁。任何人都可以调用。",low_level_call:"📖 低级别调用使用call执行提案中的操作。可以执行任意合约调用，是DAO治理的核心能力。执行成功后退还提案押金。",reentrancy_guard:"📖 重入保护使用nonReentrant修饰符防止重入攻击。在执行低级别调用时尤为重要，因为外部合约可能尝试重入。"})[t]||"📖 点击其他概念标签查看更多详细解释。",yp={over_collateralization:{name:"超额抵押机制",icon:"🏦",unlockAt:1,message:"你了解了超额抵押稳定币的核心机制！每发行1美元稳定币，需要超过1美元的加密资产作为抵押，确保系统偿付能力。",code:`// 150% 抵押率意味着：
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
}`}},z0=t=>({over_collateralization:"🏦 你了解了超额抵押机制！每发行1美元稳定币需要1.5美元抵押品。👉 点击「📊 抵押率与数学原理」面板了解详细计算！",collateral_ratio:"📊 你掌握了抵押率计算！150%意味着50%安全缓冲。👉 继续点击同一面板了解价格预言机！",price_oracle:"🔮 你了解了价格预言机！Chainlink提供可靠的ETH/USD价格。👉 继续点击了解健康因子！",health_factor:"💚 你了解了健康因子！低于150%可被清算。👉 继续点击了解小数位转换！",decimal_conversion:"🔢 你掌握了精度转换！8位→18位需要乘以1e10。👉 现在存入ETH抵押品开始实践！",deposit_collateral:"💰 已存入抵押品！👉 切换到「🏦 铸造稳定币」标签铸造SUSD！",mint_stablecoin:"🏦 已铸造SUSD！👉 尝试销毁一些SUSD或提取部分抵押品！",burn_stablecoin:"🔥 已销毁SUSD减少债务！👉 尝试提取抵押品或降低ETH价格演示清算！",withdraw_collateral:"🏧 已提取抵押品！👉 降低ETH价格到$1400以下，然后执行清算！",liquidation:"⚔️ 已执行清算！清算人获得抵押品+5%奖励。🎉 恭喜完成Day 29所有概念学习！"})[t]||"🏦 欢迎来到Day 29！👉 点击「🏦 稳定币系统架构」了解超额抵押机制！",G0=t=>({over_collateralization:"📖 超额抵押是DeFi稳定币的核心机制。每发行1美元稳定币需要超过1美元的加密资产抵押，这种设计确保即使抵押品价格波动，系统也有足够的资产支撑所有流通的稳定币。",collateral_ratio:"📖 抵押率是稳定币系统的安全指标。150%意味着每100美元债务有150美元抵押品支撑，提供50%的价格下跌缓冲。当抵押率低于150%时，系统启动清算保护债权人利益。",price_oracle:"📖 价格预言机是连接链上和链下世界的桥梁。Chainlink通过去中心化网络聚合多个交易所的价格数据，提供可靠、抗操纵的价格喂价，是稳定币系统安全运行的基础设施。",health_factor:"📖 健康因子是用户头寸的风险指标。计算公式：健康因子 = 抵押品价值 / 债务价值 × 100%。≥150%为安全，<150%可被清算。用户应监控健康因子，避免被清算损失资产。",decimal_conversion:"📖 不同合约使用不同的小数精度。Chainlink返回8位小数，ERC20标准使用18位小数。转换时需要乘以10的幂次方，确保计算精度，避免整数除法导致的精度损失。",deposit_collateral:"📖 存入抵押品是进入稳定币系统的第一步。用户的ETH被锁定在合约中作为担保，可以随时提取（需满足抵押率要求）。抵押品是铸造稳定币的基础。",mint_stablecoin:"📖 铸造稳定币是系统的核心功能。用户根据抵押品价值获得相应数量的SUSD，债务记录在合约中。SUSD与美元1:1锚定，可在DeFi生态中自由流通使用。",burn_stablecoin:"📖 销毁稳定币减少用户债务。当用户想要提取抵押品或降低风险时，可以销毁SUSD。销毁后健康因子提高，被清算风险降低，是主动管理头寸的重要手段。",withdraw_collateral:"📖 提取抵押品允许用户取回ETH。系统强制要求提取后抵押率≥150%，保护系统安全。如果用户需要提取更多，必须先销毁部分SUSD降低债务。",liquidation:"📖 清算是系统的自我保护机制。当健康因子<150%时，任何人都可以清算该头寸。清算人偿还债务获得抵押品+5%奖励，系统移除不良债务，维护整体偿付能力。"})[t]||"📖 点击其他概念标签查看更多详细解释。",me=Do("operationLog",()=>{const t=B([]),e=B({}),n=B({}),r=(d,w,y,T=null)=>{const _=new Date().toLocaleTimeString("zh-CN",{hour12:!1});let I=0,S=0;T&&tt[T]&&(I=tt[T],S=I*Da,e.value[d]||(e.value[d]=0),e.value[d]+=I),n.value[d]||(n.value[d]=0),n.value[d]++;const b={id:`${d}-${Date.now()}-${Math.random()}`,day:d,timestamp:_,operation:w,details:y,gasUsed:I,ethCost:S};return t.value.unshift(b),b},s=d=>{t.value=t.value.filter(w=>w.day!==d)},i=()=>{t.value=[],e.value={},n.value={}},o=d=>t.value.filter(w=>w.day===d).slice(0,10),a=d=>e.value[d]||0,c=d=>(e.value[d]||0)*Da,l=d=>n.value[d]||0,u=R(()=>t.value.slice(0,20));return{logs:t,dayGasUsage:e,dayOperationCounts:n,recentLogs:u,addLog:r,clearDayLogs:s,clearAllLogs:i,getDayLogs:o,getDayGasUsage:a,getDayEthCost:c,getDayOperationCount:l}});function bp(){const t=pt(),e=Pe(),n=me(),r=t.contracts.day1,s=R(()=>r.count),i=R(()=>r.interactionCount),o=()=>{r.count++,r.interactionCount++,n.addLog(1,"点击计数器","Counter +1","increment"),e.incrementInteraction(1);const w=r.count;w===1?e.unlockConcept(1,"function"):w===2?e.unlockConcept(1,"increment"):w===3?e.unlockConcept(1,"uint256"):w===4&&e.unlockConcept(1,"contract")},a=()=>{r.count=0,n.addLog(1,"重置计数器","Counter reset to 0","reset")},c=R(()=>e.dayProgress[1]),l=R(()=>e.getProgressPercentage(1)),u=R(()=>e.dayProgress[1].unlockedConcepts),d=R(()=>({gasUsage:n.getDayGasUsage(1),ethCost:n.getDayEthCost(1),operationCount:n.getDayOperationCount(1)}));return{counter:s,interactionCount:i,progress:c,progressPercentage:l,unlockedConcepts:u,realtimeData:d,clickCounter:o,resetCounter:a}}function vp(){const t=pt(),e=Pe(),n=me(),r=t.contracts.day2,s=e.dayProgress[2],i=R(()=>r.name),o=R(()=>r.bio),a=R(()=>r.hasStored),c=R(()=>r.hasRetrieved),l=R(()=>r.interactionCount),u=(I,S)=>{r.name=I,r.bio=S,r.hasStored=!0,r.interactionCount++,s.interactionCount++,n.addLog(2,"存储数据",`存储: ${I}`,"addData"),["string","private","memory"].forEach(g=>{e.unlockConcept(2,g)})},d=()=>(r.hasRetrieved=!0,r.interactionCount++,s.interactionCount++,n.addLog(2,"检索数据",`查询: ${i.value}`),["view","parameters","returns"].forEach(S=>{e.unlockConcept(2,S)}),{name:i.value,bio:o.value}),w=R(()=>s),y=R(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),T=R(()=>s.unlockedConcepts),_=R(()=>({gasUsage:n.getDayGasUsage(2),ethCost:n.getDayEthCost(2),operationCount:n.getDayOperationCount(2)}));return{name:i,bio:o,hasStored:a,hasRetrieved:c,interactionCount:l,progress:w,progressPercentage:y,unlockedConcepts:T,realtimeData:_,storeData:u,retrieveData:d}}function wp(){const t=pt(),e=Pe(),n=me(),r=t.contracts.day3,s=R(()=>r.candidates),i=R(()=>r.voteCount),o=R(()=>r.interactionCount),a=y=>{if(!y||y.trim()==="")return;r.candidates.push(y),r.voteCount[y]=0,r.interactionCount++,e.incrementInteraction(3),n.addLog(3,"添加候选人",`候选人: ${y}`,"addCandidate");const T=r.candidates.length;T===1?e.unlockConcept(3,"array"):T===2?e.unlockConcept(3,"push"):T===3&&e.unlockConcept(3,"mapping")},c=y=>{r.voteCount[y]!==void 0&&(r.voteCount[y]++,r.interactionCount++,e.incrementInteraction(3),n.addLog(3,"投票",`投给 ${y}`,"vote"),e.unlockConcept(3,"compound_assignment"))},l=R(()=>e.dayProgress[3]),u=R(()=>e.getProgressPercentage(3)),d=R(()=>e.dayProgress[3].unlockedConcepts),w=R(()=>({gasUsage:n.getDayGasUsage(3),ethCost:n.getDayEthCost(3),operationCount:n.getDayOperationCount(3)}));return{candidates:s,voteCount:i,interactionCount:o,progress:l,progressPercentage:u,unlockedConcepts:d,realtimeData:w,addCandidate:a,voteCandidate:c}}function _p(){const t=pt(),e=Pe(),n=me(),r=t.contracts.day4,s=e.dayProgress[4],i=B(null),o=R(()=>r.owner),a=R(()=>r.item),c=R(()=>r.auctionEndTime),l=R(()=>r.highestBidder),u=R(()=>r.highestBid),d=R(()=>r.ended),w=R(()=>r.bids),y=R(()=>r.bidders),T=R(()=>r.interactionCount),_=(h,E)=>{r.owner=t.generateAddress(),r.item=h,r.auctionEndTime=Math.floor(Date.now()/1e3)+E,r.interactionCount++,s.interactionCount++,n.addLog(4,"初始化拍卖",`物品: ${h}, 时长: ${E}秒`),e.unlockConcept(4,"constructor"),e.unlockConcept(4,"block_timestamp")},I=(h,E)=>{if(r.ended||Math.floor(Date.now()/1e3)>=r.auctionEndTime||h<=0)return!1;const x=r.bids[E]||0;return h<=x?!1:(r.bids[E]=h,r.interactionCount++,s.interactionCount++,x===0&&r.bidders.push(E),h>r.highestBid&&(r.highestBid=h,r.highestBidder=E),n.addLog(4,"出价",`出价 ${h}`,"placeBid"),e.unlockConcept(4,"require"),r.bidders.length>=1&&e.unlockConcept(4,"msg_sender"),(r.bidders.length>=2||r.interactionCount>=2)&&e.unlockConcept(4,"external"),!0)},S=()=>Math.floor(Date.now()/1e3)<r.auctionEndTime||r.ended?!1:(r.ended=!0,r.interactionCount++,s.interactionCount++,n.addLog(4,"结束拍卖","拍卖已结束","endAuction"),e.unlockConcept(4,"bool_type"),!0),b=()=>r.ended?(r.interactionCount++,s.interactionCount++,n.addLog(4,"查看获胜者",`获胜者: ${r.highestBidder}`),e.unlockConcept(4,"address_type"),i.value={winner:r.highestBidder,bid:r.highestBid},i.value):null,g=h=>h?new Date(h*1e3).toLocaleString("zh-CN"):"未设置",f=()=>Math.floor(Date.now()/1e3)>=r.auctionEndTime,p=R(()=>s),v=R(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),k=R(()=>s.unlockedConcepts),A=R(()=>({gasUsage:n.getDayGasUsage(4),ethCost:n.getDayEthCost(4),operationCount:n.getDayOperationCount(4)}));return{owner:o,item:a,auctionEndTime:c,highestBidder:l,highestBid:u,ended:d,bids:w,bidders:y,interactionCount:T,winner:i,progress:p,progressPercentage:v,unlockedConcepts:k,realtimeData:A,initializeAuction:_,placeBid:I,endAuction:S,getWinner:b,formatTime:g,checkAuctionEnded:f}}function kp(){const t=pt(),e=Pe(),n=me(),r=B(""),s=B(""),i=B(""),o=B(""),a=B(""),c=R(()=>(t.initializeContract(5),t.getContract(5))),l=R(()=>{var A;return((A=c.value)==null?void 0:A.owner)||""}),u=R(()=>{var A;return((A=c.value)==null?void 0:A.treasureAmount)||0}),d=R(()=>{var A;return((A=c.value)==null?void 0:A.userAddress)||""}),w=R(()=>{var A;return((A=c.value)==null?void 0:A.userAllowance)||0}),y=R(()=>{var A;return(A=c.value)!=null&&A.hasWithdrawn?!!c.value.hasWithdrawn[d.value]:!1}),T=A=>!A||A<=0?!1:(c.value.treasureAmount+=A,c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"添加宝藏",`数量: ${A}`,"addTreasure"),e.unlockConcept(5,"modifier"),!0),_=(A,h)=>!A||!h||h<=0?!1:(h<=c.value.treasureAmount&&(c.value.withdrawalAllowance[A]=h,A===c.value.userAddress&&(c.value.userAllowance=h)),c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"批准提款",`批准 ${A}: ${h}`,"approveWithdrawal"),e.unlockConcept(5,"return_statement"),!0),I=(A,h)=>{if(!A||!h||h<=0)return!1;let E=!1;if(A===c.value.owner)h<=c.value.treasureAmount&&(c.value.treasureAmount-=h,E=!0);else{const m=c.value.withdrawalAllowance[A];m>0&&!c.value.hasWithdrawn[A]&&m<=c.value.treasureAmount&&m>=h&&(c.value.hasWithdrawn[A]=!0,c.value.treasureAmount-=m,c.value.withdrawalAllowance[A]=0,A===c.value.userAddress&&(c.value.userAllowance=0),E=!0)}return c.value.interactionCount++,e.incrementInteraction(5),E&&n.addLog(5,"提取宝藏",`提取: ${h}`,"withdrawTreasure"),!0},S=A=>(A||(A=c.value.userAddress),c.value.hasWithdrawn[A]=!1,c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"重置提款状态",`重置: ${A}`),!0),b=A=>!A||A==="0x0000000000000000000000000000000000000000"?!1:(c.value.owner=A,c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"转移所有权",`新所有者: ${A}`,"transferOwnership"),e.unlockConcept(5,"zero_address"),!0),g=()=>(c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"查询宝藏",`宝藏数量: ${c.value.treasureAmount}`),e.unlockConcept(5,"return_statement"),c.value.treasureAmount),f=R(()=>e.dayProgress[5]),p=R(()=>{const A=e.dayProgress[5];return!A||A.totalConcepts===0?0:Math.floor(A.unlockedConcepts.length/A.totalConcepts*100)}),v=R(()=>e.dayProgress[5].unlockedConcepts),k=R(()=>({gasUsage:n.getDayGasUsage(5),ethCost:n.getDayEthCost(5),operationCount:n.getDayOperationCount(5)}));return{inputTreasureAmount:r,inputRecipient:s,inputAllowance:i,inputWithdrawAmount:o,inputNewOwner:a,owner:l,treasureAmount:u,userAddress:d,userAllowance:w,hasWithdrawn:y,progress:f,progressPercentage:p,unlockedConcepts:v,realtimeData:k,addTreasure:T,approveWithdrawal:_,withdrawTreasure:I,resetWithdrawalStatus:S,transferOwnership:b,getTreasureDetails:g}}function xp(){const t=pt(),e=Pe(),n=me(),r=t.contracts.day6,s=e.dayProgress[6],i=B(null),o=B([]),a=R(()=>r.bankManager),c=R(()=>r.members),l=R(()=>r.userAddress),u=R(()=>r.balance[r.userAddress]||0),d=R(()=>r.interactionCount),w=v=>(t.initializeContract(6),v==="0x0000000000000000000000000000000000000000"||v===r.bankManager||r.registeredMembers[v]?!1:(r.registeredMembers[v]=!0,r.members.push(v),r.balance[v]=0,r.interactionCount++,s.interactionCount++,n.addLog(6,"添加会员",`会员: ${v}`,"addMembers"),e.unlockConcept(6,"address_mapping_balance"),!0)),y=v=>{t.initializeContract(6);const k=r.userAddress;if(!r.registeredMembers[k])return!1;const A=v*1e18;return r.balance[k]+=A,r.interactionCount++,s.interactionCount++,n.addLog(6,"存入ETH",`存入 ${v} ETH`,"depositAmountEther"),e.unlockConcept(6,"payable"),e.unlockConcept(6,"msg_value"),!0},T=v=>{t.initializeContract(6);const k=r.userAddress;if(!r.registeredMembers[k])return!1;const A=v*1e18;return r.balance[k]<A?!1:(r.balance[k]-=A,r.interactionCount++,s.interactionCount++,n.addLog(6,"提取ETH",`提取 ${v} ETH`,"withdrawAmount"),e.unlockConcept(6,"wei_unit"),e.unlockConcept(6,"ether_deposit_withdraw"),!0)},_=v=>(t.initializeContract(6),r.interactionCount++,s.interactionCount++,i.value=r.balance[v]||0,n.addLog(6,"查询余额",`查询: ${v}`),i.value),I=()=>(t.initializeContract(6),r.interactionCount++,s.interactionCount++,o.value=[...r.members],o.value),S=v=>(v/1e18).toFixed(4)+" ETH",b=R(()=>s),g=R(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),f=R(()=>s.unlockedConcepts),p=R(()=>({gasUsage:n.getDayGasUsage(6),ethCost:n.getDayEthCost(6),operationCount:n.getDayOperationCount(6)}));return{bankManager:a,members:c,userAddress:l,userBalance:u,interactionCount:d,queryBalance:i,membersList:o,progress:b,progressPercentage:g,unlockedConcepts:f,realtimeData:p,addMembers:w,depositEther:y,withdrawEth:T,getBalance:_,getMembers:I,formatBalance:S}}function Ap(){const t=pt(),e=Pe(),n=me(),r=t.contracts.day7,s=e.dayProgress[7],i=B(null),o=R(()=>r.owner),a=R(()=>r.userAddress),c=R(()=>r.friendList),l=R(()=>r.balances[r.userAddress]||0),u=R(()=>r.debts),d=R(()=>r.interactionCount),w=h=>(t.initializeContract(7),r.registeredFriends[h]?!1:(r.registeredFriends[h]=!0,r.friendList.push(h),r.balances[h]=0,r.interactionCount++,s.interactionCount++,n.addLog(7,"添加好友",`好友: ${h}`,"addFriend"),e.unlockConcept(7,"nested_mapping"),!0)),y=h=>{t.initializeContract(7);const E=r.userAddress;if(!r.registeredFriends[E])return!1;const m=h*1e18;return r.balances[E]=(r.balances[E]||0)+m,r.interactionCount++,s.interactionCount++,n.addLog(7,"存款",`存入 ${h} ETH`,"depositIntoWallet"),e.unlockConcept(7,"address_payable"),!0},T=(h,E)=>{t.initializeContract(7);const m=r.userAddress,x=E*1e18;return r.debts[h]||(r.debts[h]={}),r.debts[h][m]=(r.debts[h][m]||0)+x,r.interactionCount++,s.interactionCount++,n.addLog(7,"记录债务",`债务人: ${h}, 金额: ${E} ETH`,"recordDebt"),e.unlockConcept(7,"debt_tracking"),!0},_=(h,E)=>{t.initializeContract(7);const m=r.userAddress,x=E*1e18;return(r.balances[m]||0)<x?"余额不足：你的钱包可用余额小于还款金额！":(r.balances[m]-=x,r.balances[h]=(r.balances[h]||0)+x,r.debts[m]&&r.debts[m][h]&&(r.debts[m][h]-=x,r.debts[m][h]<0&&(r.debts[m][h]=0)),r.interactionCount++,s.interactionCount++,n.addLog(7,"还款",`债权人: ${h}, 金额: ${E} ETH`,"payFromWallet"),e.unlockConcept(7,"internal_transfer"),!0)},I=(h,E)=>{t.initializeContract(7);const m=r.userAddress,x=E*1e18;return(r.balances[m]||0)<x?"余额不足：试图转账的金额超过了你拥有的钱包余额！":(r.balances[m]-=x,r.balances[h]=(r.balances[h]||0)+x,r.interactionCount++,s.interactionCount++,n.addLog(7,"转账(transfer)",`收款方: ${h}, 金额: ${E} ETH`,"transferEther"),e.unlockConcept(7,"transfer_method"),!0)},S=(h,E)=>{t.initializeContract(7);const m=r.userAddress,x=E*1e18;return(r.balances[m]||0)<x?"余额不足：低级调用失败，因为你的钱包没有足够的以太币！":(r.balances[m]-=x,r.balances[h]=(r.balances[h]||0)+x,r.interactionCount++,s.interactionCount++,n.addLog(7,"转账call",`收款方: ${h}, 金额: ${E} ETH`,"transferEtherViaCall"),e.unlockConcept(7,"call_method"),!0)},b=h=>{t.initializeContract(7);const E=r.userAddress,m=h*1e18;return(r.balances[E]||0)<m?"余额不足：你无法提取超过拥有额度的资金！":(r.balances[E]-=m,r.interactionCount++,s.interactionCount++,n.addLog(7,"提款",`提取 ${h} ETH`,"withdraw"),e.unlockConcept(7,"withdraw_pattern"),!0)},g=()=>{t.initializeContract(7);const h=r.userAddress;return i.value=r.balances[h]||0,r.interactionCount++,s.interactionCount++,n.addLog(7,"查询余额",`余额: ${(i.value/1e18).toFixed(4)} ETH`),e.unlockConcept(7,"withdraw_pattern"),i.value},f=h=>(h/1e18).toFixed(4)+" ETH",p=R(()=>s),v=R(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),k=R(()=>s.unlockedConcepts),A=R(()=>({gasUsage:n.getDayGasUsage(7),ethCost:n.getDayEthCost(7),operationCount:n.getDayOperationCount(7)}));return{owner:o,userAddress:a,friendsList:c,userBalance:l,debts:u,interactionCount:d,checkedBalance:i,progress:p,progressPercentage:v,unlockedConcepts:k,realtimeData:A,iouAddFriend:w,iouDeposit:y,iouRecordDebt:T,iouPayDebt:_,iouTransferMethod:I,iouCallMethod:S,iouWithdraw:b,iouCheckBalance:g,formatBalance:f}}function Tp(){const t=pt(),e=Pe(),n=me(),r=t.contracts.day8,s=e.dayProgress[8],i=R(()=>r.owner),o=R(()=>r.userAddress),a=R(()=>r.isUserAdmin),c=R(()=>r.totalTipsReceived),l=R(()=>r.supportedCurrencies),u=R(()=>r.conversionRates),d=R(()=>r.interactionCount),w=()=>{t.initializeContract(8),r.isUserAdmin=!r.isUserAdmin,r.interactionCount++,s.interactionCount++,n.addLog(8,"切换管理员模式",r.isUserAdmin?"开启管理员模式":"关闭管理员模式"),e.unlockConcept(8,"modifier_onlyOwner")},y=v=>{t.initializeContract(8);const k=v*1e18;r.totalTipsReceived+=k;const A=r.userAddress;r.tipPerPerson[A]=(r.tipPerPerson[A]||0)+k,r.interactionCount++,s.interactionCount++,n.addLog(8,"打赏ETH",`打赏 ${v} ETH`,"tipInEth"),e.unlockConcept(8,"payable_tip")},T=(v,k)=>{t.initializeContract(8);const A=r.conversionRates[v];if(!A)return!1;const h=k*A;r.totalTipsReceived+=h;const E=r.userAddress;return r.tipPerPerson[E]=(r.tipPerPerson[E]||0)+h,r.tipsPerCurrency[v]||(r.tipsPerCurrency[v]=0),r.tipsPerCurrency[v]+=k,r.interactionCount++,s.interactionCount++,n.addLog(8,"打赏货币",`打赏 ${k} ${v}`,"tipInCurrency"),e.unlockConcept(8,"msg_value_tip"),e.unlockConcept(8,"mapping_rates"),!0},_=()=>(t.initializeContract(8),r.isUserAdmin?r.totalTipsReceived===0?"revert: No tips to withdraw":(r.totalTipsReceived=0,r.interactionCount++,s.interactionCount++,n.addLog(8,"提取小费","提取所有小费","withdrawTips"),e.unlockConcept(8,"address_balance"),e.unlockConcept(8,"call_withdraw"),!0):"revert: Only owner can perform this action"),I=()=>{const v=r.userAddress,k=r.tipPerPerson[v]||0;return n.addLog(8,"查询打赏",`累计打赏: ${(k/1e18).toFixed(4)} ETH`),k},S=v=>(v/1e18).toFixed(4)+" ETH",b=R(()=>s),g=R(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),f=R(()=>s.unlockedConcepts),p=R(()=>({gasUsage:n.getDayGasUsage(8),ethCost:n.getDayEthCost(8),operationCount:n.getDayOperationCount(8)}));return{owner:i,userAddress:o,isAdmin:a,totalTips:c,supportedCurrencies:l,conversionRates:u,interactionCount:d,progress:b,progressPercentage:g,unlockedConcepts:f,realtimeData:p,tipJarToggleAdmin:w,tipJarTipInEth:y,tipJarTipInCurrency:T,tipJarWithdraw:_,getUserTips:I,formatBalance:S}}function Cp(){const t=pt(),e=Pe(),n=me(),r=t.contracts.day9,s=e.dayProgress[9],i=R(()=>r.owner),o=R(()=>r.userAddress),a=R(()=>r.isUserAdmin),c=R(()=>r.scientificCalculatorAddress),l=R(()=>r.isAddressSet),u=R(()=>r.operationCount),d=R(()=>r.operationHistory),w=R(()=>r.interactionCount),y=R(()=>r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),T=()=>{t.initializeContract(9),r.isUserAdmin=!r.isUserAdmin,n.addLog(9,"切换身份",r.isUserAdmin?"切换为管理员":"切换为用户")},_=(m,x,L)=>{if(t.initializeContract(9),isNaN(x)||isNaN(L))throw new Error("请输入有效的数字");let q;switch(m){case"add":q=x+L;break;case"subtract":q=x-L;break;case"multiply":q=x*L;break;case"divide":if(L===0)throw new Error("不能除以零");q=x/L;break;default:throw new Error("未知运算符")}r.operationCount++,r.operationHistory.push({operator:m,a:x,b:L,result:q,timestamp:Date.now()}),r.interactionCount++,s.interactionCount++;const $={add:"加法",subtract:"减法",multiply:"乘法",divide:"除法"};return n.addLog(9,"基础运算",`${$[m]}: ${x} ${m==="add"?"+":m==="subtract"?"-":m==="multiply"?"×":"÷"} ${L} = ${q}`),r.operationCount>=3&&e.unlockConcept(9,"pure_function"),q},I=m=>{if(t.initializeContract(9),!r.isUserAdmin)throw new Error("Only owner can do this action");if(!m||m.length<3)throw new Error("请输入合约地址");if(!m.startsWith("0x"))throw new Error("合约地址必须以 0x 开头");return r.scientificCalculatorAddress=m,r.isAddressSet=!0,r.interactionCount++,s.interactionCount++,n.addLog(9,"设置合约地址",`科学计算器地址: ${m}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.setAddress=!0,e.unlockConcept(9,"modifier_onlyOwner"),!0},S=(m,x)=>{if(t.initializeContract(9),!r.isAddressSet)throw new Error("请先设置ScientificCalculator合约地址");if(isNaN(m)||isNaN(x))throw new Error("请输入有效的数字");let L=1;for(let q=0;q<x;q++)L*=m;return r.interactionCount++,s.interactionCount++,n.addLog(9,"指数运算",`${m}^${x} = ${L}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.powerCalc=!0,e.unlockConcept(9,"view_function"),e.unlockConcept(9,"cross_contract_call"),e.unlockConcept(9,"interface_call"),L},b=m=>{if(t.initializeContract(9),!r.isAddressSet)throw new Error("请先设置ScientificCalculator合约地址");if(isNaN(m)||m<0)throw new Error("请输入有效的非负数字");let x=m/2;const L=[];for(let q=0;q<10;q++){const $=x;x=(x+m/x)/2,L.push({round:q+1,value:x,prevValue:$,formula:`(${$.toFixed(4)} + ${m}/${$.toFixed(4)}) / 2 = ${x.toFixed(4)}`})}return r.interactionCount++,s.interactionCount++,n.addLog(9,"平方根计算",`√${m} ≈ ${Math.floor(x)}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.sqrtCalc=!0,e.unlockConcept(9,"low_level_call"),{result:Math.floor(x),steps:L}},g=async(m,x=!1)=>{if(t.initializeContract(9),isNaN(m)||m<0)throw new Error("请输入有效的非负数字");const L=[];let q=m/2;for(let $=0;$<10;$++){const F=q;q=(q+m/q)/2,L.push({round:$+1,value:q,prevValue:F,formula:`(${F.toFixed(4)} + ${m}/${F.toFixed(4)}) / 2 = ${q.toFixed(4)}`}),x&&await new Promise(O=>setTimeout(O,500))}return r.interactionCount++,s.interactionCount++,n.addLog(9,"牛顿迭代",`计算 √${m} 的迭代过程`),e.unlockConcept(9,"newton_iteration"),L},f=m=>(t.initializeContract(9),n.addLog(9,"权限验证",m?"以管理员身份验证":"以用户身份验证"),m?(r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.permissionCheck=!0,{success:!0,message:"验证通过：Owner权限确认"}):{success:!1,message:"验证失败：Only owner can do this action"}),p=()=>{t.initializeContract(9);const m=r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1},x=Object.values(m).filter(L=>L).length;return x===4?(e.unlockConcept(9,"contract_composition"),{success:!0,message:"🎉 恭喜！你已完成所有挑战任务！"}):{success:!1,message:`还有 ${4-x} 个任务未完成`}},v=R(()=>s),k=R(()=>e.getProgressPercentage(9)),A=R(()=>e.getUnlockedConcepts(9)),h=R(()=>{const m=r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1};return Object.values(m).filter(x=>x).length}),E=R(()=>({gasUsage:n.getDayGasUsage(9),ethCost:n.getDayEthCost(9),operationCount:n.getDayOperationCount(9)}));return{owner:i,userAddress:o,isOwner:a,scientificCalculatorAddress:c,isAddressSet:l,operationCount:u,operationHistory:d,interactionCount:w,challengeTasks:y,progress:v,progressPercentage:k,unlockedConcepts:A,completedChallengeCount:h,realtimeData:E,toggleIdentity:T,calculate:_,setScientificCalculator:I,calculatePower:S,calculateSquareRoot:b,runNewtonIteration:g,checkPermission:f,completeChallenge:p}}function Ep(){const t=pt(),e=Pe(),n=me(),r=t.contracts.day10,s=e.dayProgress[10],i=R(()=>r.owner),o=R(()=>r.userAddress),a=R(()=>r.userProfile),c=R(()=>r.workoutHistory),l=R(()=>r.totalWorkouts),u=R(()=>r.totalDistance),d=R(()=>r.milestones),w=R(()=>r.userProfile.isRegistered),y=()=>{t.initializeContract(10)},T=F=>({struct_definition:"📦 太棒了！你学会了使用结构体打包数据！👉 记录一次运动来看看时间戳如何工作！",event_logging:"📋 不错！你触发了事件日志！👉 记录运动来查看运动历史如何存储！",onlyRegistered_modifier:"🛡️ 太棒了！你了解了修饰符如何保护函数！👉 记录运动来解锁更多概念！",timestamp_usage:"⏰ 很好！你学会了记录时间戳！👉 查看运动历史来解锁 array_in_mapping！",array_in_mapping:"🗂️ 很好！你看到了映射到数组的用法！👉 查看统计数据来解锁 multiple_mappings！",multiple_mappings:"🗺️ 优秀！你了解了多个映射如何协同工作！👉 更新体重来解锁 storage_keyword！",storage_keyword:"💾 太棒了！你了解了 storage 的威力！👉 继续记录运动，达成里程碑来解锁 milestone_detection！",milestone_detection:"🏆 恭喜！你达成了里程碑！👉 查看完整代码来复习所有知识！"})[F]||"",_=(F,O)=>{if(y(),r.userProfile.isRegistered)return{success:!1,error:"User already registered"};r.userProfile={name:F,weight:O,isRegistered:!0},r.interactionCount++,s.interactionCount++,n.addLog(10,"注册用户",`用户: ${F}, 体重: ${O}kg`);const P=[];return e.unlockConcept(10,"struct_definition"),P.push(T("struct_definition")),e.unlockConcept(10,"event_logging"),P.push(T("event_logging")),e.unlockConcept(10,"onlyRegistered_modifier"),P.push(T("onlyRegistered_modifier")),{success:!0,unlockedHints:P}},I=(F,O,P)=>{if(y(),!r.userProfile.isRegistered)return{success:!1,error:"User not registered"};const z={activityType:F,duration:O,distance:P,timestamp:Date.now()};r.workoutHistory.unshift(z);const X=r.totalDistance;r.totalWorkouts++,r.totalDistance+=P,r.interactionCount++,s.interactionCount++,n.addLog(10,"记录运动",`${F} ${P}米 ${v(O)}`);const ie=!e.isConceptUnlocked(10,"timestamp_usage"),le=!e.isConceptUnlocked(10,"array_in_mapping");e.unlockConcept(10,"timestamp_usage"),e.unlockConcept(10,"array_in_mapping");const it=b(X),ze=[];return ie&&ze.push(T("timestamp_usage")),le&&ze.push(T("array_in_mapping")),it&&ze.push(T("milestone_detection")),{success:!0,unlockedHints:ze}},S=F=>{if(y(),!r.userProfile.isRegistered)return{success:!1,error:"User not registered"};const O=r.userProfile.weight;let P=!1;F<O&&O>0&&(O-F)*100/O>=5&&(g("weightGoal"),P=!0),r.userProfile.weight=F,r.interactionCount++,s.interactionCount++,n.addLog(10,"更新体重",`${O}kg → ${F}kg`);const z=!e.isConceptUnlocked(10,"storage_keyword"),X=!e.isConceptUnlocked(10,"multiple_mappings");e.unlockConcept(10,"storage_keyword"),e.unlockConcept(10,"multiple_mappings");const ie=[];return z&&ie.push(T("storage_keyword")),X&&ie.push(T("multiple_mappings")),P&&ie.push(T("milestone_detection")),{success:!0,unlockedHints:ie}},b=(F,O)=>{const P=r.totalWorkouts,z=r.totalDistance;let X=!1;return P===10?(g("workouts10"),X=!0):P===50&&(g("workouts50"),X=!0),z>=1e5&&F<1e5&&(g("distance100K"),X=!0),X},g=F=>{const O=r.milestones[F];O&&!O.achieved&&(O.achieved=!0,O.timestamp=Date.now(),e.unlockConcept(10,"milestone_detection"))},f=(F,O)=>O==="minutes"?F*60:O==="hours"?F*3600:F,p=(F,O)=>O==="kilometers"?F*1e3:F,v=F=>{if(F<60)return`${F}秒`;if(F<3600)return`${Math.floor(F/60)}分钟`;{const O=Math.floor(F/3600),P=Math.floor(F%3600/60);return P>0?`${O}小时${P}分钟`:`${O}小时`}},k=F=>F<1e3?`${F}米`:`${(F/1e3).toFixed(2)}公里`,A=F=>new Date(F).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),h=F=>({跑步:"🏃",Running:"🏃",骑行:"🚴",Cycling:"🚴",游泳:"🏊",Swimming:"🏊",步行:"🚶",Walking:"🚶",瑜伽:"🧘",Yoga:"🧘",篮球:"⛹️",Basketball:"⛹️"})[F]||"💪",E=()=>{const F=!e.isConceptUnlocked(10,"array_in_mapping");return e.unlockConcept(10,"array_in_mapping"),n.addLog(10,"查看运动历史",`共 ${r.workoutHistory.length} 条记录`),F?T("array_in_mapping"):null},m=()=>{const F=!e.isConceptUnlocked(10,"multiple_mappings");return e.unlockConcept(10,"multiple_mappings"),n.addLog(10,"查看统计",`总运动: ${r.totalWorkouts}次, 总距离: ${k(r.totalDistance)}`),F?T("multiple_mappings"):null},x=R(()=>s),L=R(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),q=R(()=>s.unlockedConcepts),$=R(()=>({gasUsage:n.getDayGasUsage(10),ethCost:n.getDayEthCost(10),operationCount:n.getDayOperationCount(10)}));return{owner:i,userAddress:o,userProfile:a,workoutHistory:c,totalWorkouts:l,totalDistance:u,milestones:d,isRegistered:w,progress:x,progressPercentage:L,unlockedConcepts:q,realtimeData:$,registerUser:_,logWorkout:I,updateWeight:S,convertToSeconds:f,convertToMeters:p,formatDuration:v,formatDistance:k,formatTimestamp:A,getActivityIcon:h,viewWorkoutHistory:E,viewStatistics:m,initializeContract:y}}function Sp(){const t=pt(),e=Pe(),n=me(),r=R(()=>(t.initializeContract(11),t.getContract(11))),s=R(()=>{var p;return((p=r.value)==null?void 0:p.owner)||""}),i=R(()=>{var p;return((p=r.value)==null?void 0:p.contractBalance)||0}),o=R(()=>{var p;return((p=r.value)==null?void 0:p.userAddress)||""}),a=R(()=>o.value===s.value),c=R(()=>{var p;return((p=r.value)==null?void 0:p.eventLog)||[]}),l=p=>({inheritance:"📦 太棒了！你看到 VaultMaster 继承了 Ownable 的功能！👉 存入 ETH 来学习 import 机制！",constructor:"🏗️ 太棒了！你了解了构造函数！👉 存入 ETH 来学习导入语句和私有变量！",import_statement:"📥 不错！你了解了导入语句！👉 继续存入 ETH 来学习事件日志！",event_logging:"📋 很好！你触发了事件日志！👉 尝试转移所有权来解锁更多概念！",private_visibility:"🔒 优秀！你学会了 private 变量的使用！合约余额等敏感数据都使用 private 保护！",transfer_ownership:"🔑 很好！你了解了所有权转移！👉 尝试以用户身份提取来学习修饰符！",indexed_parameter:"🏷️ 不错！你了解了索引参数！👉 切换到用户身份体验权限控制！",onlyOwner_modifier:"🛡️ 太棒了！你了解了 onlyOwner 修饰符！👉 查看完整代码来学习更多！"})[p]||"",u=p=>{var A;const v=e.dayProgress[11];return((A=v==null?void 0:v.unlockedConcepts)==null?void 0:A.includes(p))?null:(e.unlockConcept(11,p),l(p))},d=()=>"0x"+Array(40).fill(0).map(()=>Math.floor(Math.random()*16).toString(16)).join(""),w=()=>r.value?(r.value.userAddress=r.value.owner,e.incrementInteraction(11),n.addLog(11,"切换身份","切换为所有者身份"),{hint:"✅ 已切换到所有者身份！👉 现在可以转移所有权和提取资金了！"}):null,y=()=>{if(r.value){const p=d();return r.value.userAddress=p,e.incrementInteraction(11),n.addLog(11,"切换身份",`切换为用户身份: ${p.slice(0,10)}...`),{hint:"👤 已切换到用户身份！👉 现在尝试提取资金来体验权限控制！"}}return null},T=()=>{e.incrementInteraction(11),n.addLog(11,"查询所有者",`所有者: ${s.value.slice(0,10)}...`);const p=[],v=u("inheritance");v&&p.push(v);const k=u("constructor");return k&&p.push(k),{address:s.value,hint:p.length>0?p.join(`
`):null}},_=()=>(e.incrementInteraction(11),n.addLog(11,"查询余额",`合约余额: ${(i.value/1e18).toFixed(4)} ETH`),i.value),I=p=>{if(!p||p<=0)return{success:!1,error:"金额无效"};const v=Math.floor(p*1e18);r.value.contractBalance+=v,r.value.eventLog.push({name:"DepositSuccessful",icon:"💰",details:`存入 ${p} ETH (${v} wei)`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"存款",`存入 ${p} ETH`);const k=[],A=u("import_statement");A&&k.push(A);const h=u("event_logging");h&&k.push(h);const E=u("private_visibility");return E&&k.push(E),{success:!0,hints:k}},S=(p,v)=>{if(!p||!v||v<=0)return{success:!1,error:"参数无效"};if(!a.value)return u("onlyOwner_modifier"),e.incrementInteraction(11),n.addLog(11,"提取失败","权限不足：非所有者尝试提取"),{success:!1,error:"❌ 权限不足：只有所有者才能提取资金 🛡️ 解锁知识点：onlyOwner 修饰符！"};const k=Math.floor(v*1e18);return k>i.value?{success:!1,error:"余额不足"}:(r.value.contractBalance-=k,r.value.eventLog.push({name:"WithdrawSuccessful",icon:"💸",details:`提取 ${v} ETH 到 ${p.slice(0,6)}...${p.slice(-4)}`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"提取资金",`提取 ${v} ETH 到 ${p.slice(0,10)}...`),{success:!0})},b=p=>{var m;if(!p||p==="0x0000000000000000000000000000000000000000")return{success:!1,error:"无效地址"};if(!a.value)return{success:!1,error:"权限不足"};const v=r.value.owner;r.value.owner=p,r.value.userAddress===v&&(r.value.userAddress=p),r.value.eventLog.push({name:"OwnershipTransferred",icon:"🔑",details:`所有权从 ${v.slice(0,6)}... 转移到 ${p.slice(0,6)}...`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"转移所有权",`${v.slice(0,10)}... → ${p.slice(0,10)}...`);const k=[],A=u("transfer_ownership");A&&k.push(A);const h=u("indexed_parameter");h&&k.push(h);const E=e.dayProgress[11];return(m=E==null?void 0:E.unlockedConcepts)!=null&&m.includes("onlyOwner_modifier")||k.push('🛡️ 想体验权限控制吗？👉 切换到"用户"身份，尝试提取资金！'),{success:!0,hints:k}},g=()=>(e.incrementInteraction(11),n.addLog(11,"查看代码","查看完整合约代码"),{hints:["📖 你已了解所有核心概念！查看完整代码来巩固知识吧！"]}),f=R(()=>({gasUsage:n.getDayGasUsage(11),ethCost:n.getDayEthCost(11),operationCount:n.getDayOperationCount(11)}));return{owner:s,contractBalance:i,userAddress:o,isOwner:a,eventLog:c,realtimeData:f,getOwner:T,getBalance:_,deposit:I,withdraw:S,transferOwnership:b,setOwnerMode:w,setUserMode:y,viewFullCode:g,unlockConceptWithHint:u,getUnlockHint:l}}function Ip(){const t=me(),e=B({name:"Web3 Compass",symbol:"COM",decimals:18,totalSupply:1e6}),n={alice:"0xAlice7429aC95B2cF0e4b5F1F4E4e8e7D6c5B4A3210",bob:"0xBob8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",carol:"0xCarol5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},r=B({[n.alice]:1e6,[n.bob]:0,[n.carol]:0}),s=B({[n.alice]:{[n.carol]:0},[n.bob]:{},[n.carol]:{}}),i=B("alice"),o=B([{icon:"🟢",name:"Transfer",details:"从: 0x0000...0000 到: Alice 数量: 1,000,000 COM (铸币)",timestamp:Date.now()}]),a=R(()=>n[i.value]),c=b=>b===n.alice?"Alice":b===n.bob?"Bob":b===n.carol?"Carol":b.slice(0,6)+"..."+b.slice(-4),l=b=>b?b===n.alice?"Alice (0xAlice...3210)":b===n.bob?"Bob (0xBob...7E6F)":b===n.carol?"Carol (0xCarol...E2F)":b.slice(0,10)+"..."+b.slice(-8):"",u=b=>{i.value=b;const g={alice:"👑 已切换到 Alice（代币持有者）",bob:"👤 已切换到 Bob（普通用户）",carol:"🔑 已切换到 Carol（可被授权者）"};return t.addLog(12,"切换角色",g[b]),{success:!0,message:g[b],hints:[],nextStep:""}},d=b=>{const g=r.value[b]||0,f=c(b);return t.addLog(12,"查询余额",`${f}: ${g.toLocaleString()} COM`),{success:!0,balance:g,message:`📊 查询成功！${f} 余额: ${g.toLocaleString()} COM`,hints:[],nextStep:"💡 余额使用 mapping(address => uint256) 存储！👉 转账给 Bob 来学习事件机制！"}},w=(b,g)=>{const f=a.value,p=c(f),v=c(b);return r.value[f]<g?(t.addLog(12,"转账失败",`余额不足: ${p} → ${v}`),{success:!1,message:`❌ 转账失败！余额不足。当前余额: ${r.value[f].toLocaleString()} COM，尝试转账: ${g.toLocaleString()} COM`,hints:[],nextStep:""}):b==="0x0000000000000000000000000000000000000000"?(t.addLog(12,"转账失败","接收地址不能是零地址"),{success:!1,message:"❌ 转账失败！接收地址不能是零地址。",hints:[],nextStep:""}):f===b?(t.addLog(12,"转账失败","不能转账给自己"),{success:!1,message:"❌ 转账失败！不能转账给自己。",hints:[],nextStep:""}):(r.value[f]-=g,r.value[b]=(r.value[b]||0)+g,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${p} 到: ${v} 数量: ${g.toLocaleString()} COM`,timestamp:Date.now()}),t.addLog(12,"转账",`${p} → ${v}: ${g.toLocaleString()} COM`),{success:!0,message:`✅ 转账成功！${p} 向 ${v} 转账 ${g.toLocaleString()} COM 📋 恭喜解锁：事件日志！💸 恭喜解锁：转账函数！`,hints:["event","transfer"],nextStep:"👉 授权给 Carol 来学习授权机制！"})},y=(b,g)=>{const f=a.value,p=c(f),v=c(b);return i.value!=="alice"?(t.addLog(12,"授权失败","只有 Alice 才能授权"),{success:!1,message:"❌ 授权失败！只有代币持有者 Alice 才能授权。请切换到 Alice。",hints:[],nextStep:""}):f===b?(t.addLog(12,"授权失败","不能授权给自己"),{success:!1,message:"❌ 授权失败！不能授权给自己。",hints:[],nextStep:""}):(s.value[f]||(s.value[f]={}),s.value[f][b]=g,o.value.push({icon:"🟡",name:"Approval",details:`持有者: ${p} 被授权者: ${v} 额度: ${g.toLocaleString()} COM`,timestamp:Date.now()}),t.addLog(12,"授权",`${p} → ${v}: ${g.toLocaleString()} COM`),{success:!0,message:`✅ 授权成功！${p} 授权 ${v} 可以使用 ${g.toLocaleString()} COM ✅ 恭喜解锁：授权函数！`,hints:["approve"],nextStep:"👉 查询 allowance 来学习授权额度查询！"})},T=(b,g)=>{var k;const f=((k=s.value[b])==null?void 0:k[g])||0,p=c(b),v=c(g);return t.addLog(12,"查询授权额度",`${v} 可用 ${p}: ${f.toLocaleString()} COM`),{success:!0,allowance:f,message:`🔍 查询成功！${v} 可使用 ${p} 的额度: ${f.toLocaleString()} COM 🗂️ 恭喜解锁：嵌套映射！🔍 恭喜解锁：授权额度查询！`,hints:["mapping_nested","allowance"],nextStep:"👉 切换到 Carol 执行代转账来学习 transferFrom！"}},_=(b,g,f)=>{var E;const p=a.value,v=c(p),k=c(b),A=c(g);if(i.value!=="carol")return t.addLog(12,"代转账失败","只有 Carol 才能执行代转账"),{success:!1,message:"❌ 代转账失败！只有被授权者 Carol 才能执行代转账。请切换到 Carol。",hints:[],nextStep:""};if(b!==n.alice)return t.addLog(12,"代转账失败","Carol 只被 Alice 授权"),{success:!1,message:"❌ 代转账失败！Carol 只被 Alice 授权，只能从 Alice 账户代转账。",hints:[],nextStep:""};const h=((E=s.value[b])==null?void 0:E[p])||0;return h<f?(t.addLog(12,"代转账失败",`授权额度不足: ${h.toLocaleString()} COM`),{success:!1,message:`❌ 授权额度不足！Carol 只能使用 Alice 的 ${h.toLocaleString()} COM，尝试转账: ${f.toLocaleString()} COM`,hints:[],nextStep:""}):r.value[b]<f?(t.addLog(12,"代转账失败",`余额不足: ${k}`),{success:!1,message:`❌ 余额不足！${k} 当前余额: ${r.value[b].toLocaleString()} COM`,hints:[],nextStep:""}):(r.value[b]-=f,r.value[g]=(r.value[g]||0)+f,s.value[b][p]-=f,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${k} 到: ${A} 数量: ${f.toLocaleString()} COM (by ${v})`,timestamp:Date.now()}),t.addLog(12,"代转账",`${v} 代替 ${k} → ${A}: ${f.toLocaleString()} COM`),{success:!0,message:`✅ 代转账成功！${v} 代替 ${k} 向 ${A} 转账 ${f.toLocaleString()} COM 🔄 恭喜解锁：代转账函数！`,hints:["transferFrom"],nextStep:"🎉 你已掌握 ERC20 全部核心功能！"})},I=b=>new Date(b).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),S=R(()=>({gasUsage:t.getDayGasUsage(12),ethCost:t.getDayEthCost(12),operationCount:t.getDayOperationCount(12)}));return{tokenInfo:e,roles:n,balances:r,allowances:s,currentRole:i,currentAddress:a,eventLog:o,realtimeData:S,switchRole:u,getBalance:d,transfer:w,approve:y,getAllowance:T,transferFrom:_,getRoleName:c,formatAddress:l,formatTime:I}}function Dp(){const t=me(),e=B({name:"Web3 Compass",symbol:"WBT",decimals:18,totalSupply:1e6}),n={deployer:"0xDeployer7429aC95B2cF0e4b5F1F4E4e8e7D6c5B4A3210",alice:"0xAlice8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",bob:"0xBob5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},r=B({[n.deployer]:1e6,[n.alice]:0,[n.bob]:0}),s=B({[n.deployer]:{[n.alice]:0,[n.bob]:0},[n.alice]:{},[n.bob]:{}}),i=B("deployer"),o=B([{icon:"🪙",name:"Mint",details:"Transfer(address(0), Deployer, 1,000,000 WBT) - 合约部署时铸造",timestamp:Date.now(),type:"mint"}]),a=R(()=>n[i.value]),c=b=>b===n.deployer?"Deployer":b===n.alice?"Alice":b===n.bob?"Bob":b.slice(0,6)+"..."+b.slice(-4),l=b=>b?b===n.deployer?"Deployer (0xDeployer...3210)":b===n.alice?"Alice (0xAlice...7E6F)":b===n.bob?"Bob (0xBob...E2F)":b.slice(0,10)+"..."+b.slice(-8):"",u=b=>{i.value=b;const g={deployer:"✅ 已切换到 Deployer（合约部署者/代币持有者）！👉 执行转账操作来解锁 internal 和 virtual 函数！",alice:"✅ 已切换到 Alice（普通用户）！👉 让 Deployer 授权给你，然后执行代转账！",bob:"✅ 已切换到 Bob（可被授权者）！👉 让 Deployer 授权给你，然后执行代转账！"};return t.addLog(13,"切换角色",g[b]),{success:!0,message:g[b],hints:[],nextStep:""}},d=b=>{const g=r.value[b]||0,f=c(b);return t.addLog(13,"查询余额",`${f}: ${g.toLocaleString()} WBT`),{success:!0,balance:g,message:`📊 查询成功！${f} 余额: ${g.toLocaleString()} WBT 👉 执行转账来解锁 internal 和 virtual 函数！`,hints:[],nextStep:"💡 余额使用 mapping(address => uint256) 存储！👉 执行转账来解锁 internal 和 virtual 函数！"}},w=(b,g)=>{const f=a.value,p=c(f),v=c(b);return r.value[f]<g?(t.addLog(13,"转账失败",`余额不足: ${p} → ${v}`),{success:!1,message:`❌ 转账失败！余额不足。当前余额: ${r.value[f].toLocaleString()} WBT，尝试转账: ${g.toLocaleString()} WBT`,hints:[],nextStep:""}):b==="0x0000000000000000000000000000000000000000"?(t.addLog(13,"转账失败","接收地址不能是零地址"),{success:!1,message:"❌ 转账失败！接收地址不能是零地址。",hints:[],nextStep:""}):f===b?(t.addLog(13,"转账失败","不能转账给自己"),{success:!1,message:"❌ 转账失败！不能转账给自己。",hints:[],nextStep:""}):(r.value[f]-=g,r.value[b]=(r.value[b]||0)+g,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${p} 到: ${v} 数量: ${g.toLocaleString()} WBT`,timestamp:Date.now(),type:"transfer"}),t.addLog(13,"转账",`${p} → ${v}: ${g.toLocaleString()} WBT`,"transfer13"),{success:!0,message:`✅ 转账成功！${p} 向 ${v} 转账 ${g.toLocaleString()} WBT 🎉 恭喜解锁：internal 和 virtual 函数！👉 点击查看代码了解所有知识点！`,hints:["internal_function"],nextStep:"🔒 太棒了！transfer() 内部调用了 _transfer() 这个 internal 函数！同时解锁了 virtual 关键字！👉 点击查看代码了解所有知识点！"})},y=(b,g)=>{const f=a.value,p=c(f),v=c(b);return i.value!=="deployer"?(t.addLog(13,"授权失败","只有 Deployer 才能授权"),{success:!1,message:"❌ 授权失败！只有代币持有者 Deployer 才能授权。请切换到 Deployer。",hints:[],nextStep:""}):f===b?(t.addLog(13,"授权失败","不能授权给自己"),{success:!1,message:"❌ 授权失败！不能授权给自己。",hints:[],nextStep:""}):(s.value[f]||(s.value[f]={}),s.value[f][b]=g,o.value.push({icon:"🟡",name:"Approval",details:`持有者: ${p} 被授权者: ${v} 额度: ${g.toLocaleString()} WBT`,timestamp:Date.now(),type:"approval"}),t.addLog(13,"授权",`${p} → ${v}: ${g.toLocaleString()} WBT`,"approve13"),{success:!0,message:`✅ 授权成功！${p} 授权 ${v} 可以使用 ${g.toLocaleString()} WBT`,hints:[],nextStep:"👉 切换到 Bob 执行代转账来学习更多！"})},T=(b,g)=>{var k;const f=((k=s.value[b])==null?void 0:k[g])||0,p=c(b),v=c(g);return t.addLog(13,"查询授权额度",`${v} 可用 ${p}: ${f.toLocaleString()} WBT`),{success:!0,allowance:f,message:`🔍 查询成功！${v} 可使用 ${p} 的额度: ${f.toLocaleString()} WBT 👉 切换到 Bob 执行代转账！`,hints:[],nextStep:"👉 切换到 Bob 执行代转账来学习 transferFrom！"}},_=(b,g,f)=>{var E;const p=a.value,v=c(p),k=c(b),A=c(g);if(i.value!=="bob")return t.addLog(13,"代转账失败","只有 Bob 才能执行代转账"),{success:!1,message:"❌ 代转账失败！只有被授权者 Bob 才能执行代转账。请切换到 Bob。",hints:[],nextStep:""};if(b!==n.deployer)return t.addLog(13,"代转账失败","Bob 只被 Deployer 授权"),{success:!1,message:"❌ 代转账失败！Bob 只被 Deployer 授权，只能从 Deployer 账户代转账。",hints:[],nextStep:""};const h=((E=s.value[b])==null?void 0:E[p])||0;return h<f?(t.addLog(13,"代转账失败",`授权额度不足: ${h.toLocaleString()} WBT`),{success:!1,message:`❌ 授权额度不足！Bob 只能使用 Deployer 的 ${h.toLocaleString()} WBT，尝试转账: ${f.toLocaleString()} WBT`,hints:[],nextStep:""}):r.value[b]<f?(t.addLog(13,"代转账失败",`余额不足: ${k}`),{success:!1,message:`❌ 余额不足！${k} 当前余额: ${r.value[b].toLocaleString()} WBT`,hints:[],nextStep:""}):(r.value[b]-=f,r.value[g]=(r.value[g]||0)+f,s.value[b][p]-=f,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${k} 到: ${A} 数量: ${f.toLocaleString()} WBT (by ${v})`,timestamp:Date.now(),type:"transfer"}),t.addLog(13,"代转账",`${v} 代替 ${k} → ${A}: ${f.toLocaleString()} WBT`,"transferFrom13"),{success:!0,message:`✅ 代转账成功！${v} 代替 ${k} 向 ${A} 转账 ${f.toLocaleString()} WBT 👉 点击查看代码了解 virtual 关键字！`,hints:[],nextStep:"🎉 太棒了！你已掌握 MyToken 全部核心功能！👉 点击查看代码了解 virtual 关键字！"})},I=b=>new Date(b).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),S=R(()=>({gasUsage:t.getDayGasUsage(13),ethCost:t.getDayEthCost(13),operationCount:t.getDayOperationCount(13)}));return{tokenInfo:e,roles:n,balances:r,allowances:s,currentRole:i,currentAddress:a,eventLog:o,realtimeData:S,switchRole:u,getBalance:d,transfer:w,approve:y,getAllowance:T,transferFrom:_,getRoleName:c,formatAddress:l,formatTime:I}}function Rp(){const t=me(),e={alice:"0xAlice8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",bob:"0xBob5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},n=B("alice"),r=B(0),s=B([]),i=B([]),o=R(()=>e[n.value]),a=R(()=>s.value.filter(h=>h.owner===o.value)),c=h=>h===e.alice?"Alice":h===e.bob?"Bob":h.slice(0,6)+"..."+h.slice(-4),l=h=>h?h===e.alice?"Alice (0xAlice...7E6F)":h===e.bob?"Bob (0xBob...E2F)":h.slice(0,10)+"..."+h.slice(-8):"",u=h=>new Date(h).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),d=h=>{switch(h){case"Basic":return"📦";case"Premium":return"🏷️";case"TimeLocked":return"⏰";default:return"📦"}},w=h=>{n.value=h;const E={alice:"✅ 已切换到 Alice！👉 创建存款盒开始学习！",bob:"✅ 已切换到 Bob！👉 让 Alice 转移一个存款盒给你！"};return t.addLog(14,"切换角色",`切换到 ${h}`),{success:!0,message:E[h],hints:[],nextStep:""}},y=()=>{r.value++;const h=r.value,E=o.value,m=c(E),x={id:h,type:"Basic",owner:E,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:null,metadata:null};return s.value.push(x),i.value.push({icon:"📦",name:"BoxCreated",details:`${m} 创建了 Basic 存款盒 #${h}`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建Basic存款盒",`Box #${h} by ${m}`,"createBasicBox"),{success:!0,box:x,message:`✅ 创建 Basic 存款盒 #${h} 成功！🧬 恭喜解锁：合约继承！🎭 恭喜解锁：抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 创建 Premium 或 TimeLocked 来学习 override！`,hints:r.value>=2?["inheritance","abstract_contract","factory_pattern"]:["inheritance","abstract_contract"],nextStep:r.value>=2?"🧬 BasicDepositBox 继承了 BaseDepositBox 的所有功能！🎭 抽象合约定义了通用接口！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 创建 Premium 存款盒来学习 override 关键字！":"📦 BasicDepositBox 继承了 BaseDepositBox 的所有功能！🎭 抽象合约定义了通用接口！👉 创建 Premium 存款盒来学习 override 关键字！"}},T=()=>{r.value++;const h=r.value,E=o.value,m=c(E),x={id:h,type:"Premium",owner:E,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:null,metadata:""};return s.value.push(x),i.value.push({icon:"🏷️",name:"BoxCreated",details:`${m} 创建了 Premium 存款盒 #${h}`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建Premium存款盒",`Box #${h} by ${m}`,"createPremiumBox"),{success:!0,box:x,message:`✅ 创建 Premium 存款盒 #${h} 成功！📝 恭喜解锁：override 关键字和 virtual 函数！🎭 恭喜解锁：抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 设置元数据来学习更多！`,hints:r.value>=2?["override_keyword","virtual_function","abstract_contract","factory_pattern"]:["override_keyword","virtual_function","abstract_contract"],nextStep:r.value>=2?"🏷️ PremiumDepositBox 使用 override 重写了 getBoxType()！🎭 抽象合约定义了通用接口！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 设置元数据来学习 metadata_storage！":"🏷️ PremiumDepositBox 使用 override 重写了 getBoxType()！🎭 抽象合约定义了通用接口！👉 设置元数据来学习 metadata_storage！"}},_=h=>{r.value++;const E=r.value,m=o.value,x=c(m),L=Date.now()+h*1e3,q={id:E,type:"TimeLocked",owner:m,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:L,metadata:null};return s.value.push(q),i.value.push({icon:"⏰",name:"BoxCreated",details:`${x} 创建了 TimeLocked 存款盒 #${E}，锁定 ${h} 秒`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建TimeLocked存款盒",`Box #${E} by ${x}, 锁定 ${h}秒`,"createTimeLockedBox"),{success:!0,box:q,message:`✅ 创建 TimeLocked 存款盒 #${E} 成功！⏰ 恭喜解锁：时间锁定和抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 存入秘密并在锁定期间尝试取出！`,hints:r.value>=2?["abstract_contract","time_lock","factory_pattern"]:["abstract_contract","time_lock"],nextStep:r.value>=2?"⏰ TimeLockedDepositBox 使用修饰器组合保护 getSecret()！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 存入秘密并在锁定期间尝试取出！":"⏰ TimeLockedDepositBox 使用修饰器组合保护 getSecret()！👉 存入秘密并在锁定期间尝试取出！"}},I=(h,E)=>{const m=s.value.find(L=>L.id===h);if(!m)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(m.owner!==o.value)return t.addLog(14,"存入秘密失败",`无权操作 Box #${h}`),{success:!1,message:"❌ 只有所有者才能存入秘密！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试存入秘密！"};m.secret=E;const x=c(m.owner);return i.value.push({icon:"🔐",name:"SecretStored",details:`${x} 向 Box #${h} 存入了秘密`,timestamp:Date.now(),type:"store"}),t.addLog(14,"存入秘密",`Box #${h} by ${x}`,"storeSecret"),{success:!0,message:`✅ 秘密已存入 Box #${h}！👉 尝试取出秘密！`,hints:[],nextStep:"🔐 秘密已安全存储！👉 尝试取出秘密！"}},S=h=>{const E=s.value.find(x=>x.id===h);if(!E)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(E.owner!==o.value)return t.addLog(14,"取出秘密失败",`无权操作 Box #${h}`),{success:!1,message:"❌ 只有所有者才能取出秘密！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试取出秘密！"};if(E.type==="TimeLocked"&&E.unlockTime&&Date.now()<E.unlockTime){const x=Math.ceil((E.unlockTime-Date.now())/1e3);return t.addLog(14,"取出秘密失败",`Box #${h} 仍锁定，剩余 ${x} 秒`),{success:!1,message:`❌ Box #${h} 仍处于锁定状态！剩余 ${x} 秒。🔗 修饰器组合阻止了操作！`,hints:["modifier_combination","super_keyword"],nextStep:"🔗 修饰器组合 timeUnlocked 阻止了操作！👉 等待解锁或创建其他类型的存款盒！"}}const m=c(E.owner);return t.addLog(14,"取出秘密",`Box #${h} by ${m}`),{success:!0,secret:E.secret,message:`✅ 成功取出 Box #${h} 的秘密！`,hints:[],nextStep:E.type==="TimeLocked"?"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。TimeLocked 使用 super.getSecret() 调用父合约实现！👉 设置元数据或转移所有权来学习更多！":"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。👉 转移所有权给 Bob 来学习所有权转移流程！"}},b=(h,E)=>{const m=s.value.find(L=>L.id===h);if(!m)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(m.type!=="Premium")return{success:!1,message:"❌ 只有 Premium 存款盒支持元数据！",hints:[],nextStep:""};if(m.owner!==o.value)return t.addLog(14,"设置元数据失败",`无权操作 Box #${h}`),{success:!1,message:"❌ 只有所有者才能设置元数据！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到 Premium 存款盒的所有者角色来尝试设置元数据！"};m.metadata=E;const x=c(m.owner);return i.value.push({icon:"🏷️",name:"MetadataSet",details:`${x} 设置了 Box #${h} 的元数据`,timestamp:Date.now(),type:"metadata"}),t.addLog(14,"设置元数据",`Box #${h} by ${x}`,"setMetadata"),{success:!0,message:`✅ 元数据已设置到 Box #${h}！🏷️ 恭喜解锁：元数据存储！`,hints:["metadata_storage"],nextStep:"🏷️ Premium 版本通过继承扩展了功能！👉 创建第2个存款盒来体验工厂模式！"}},g=h=>{const E=s.value.find(m=>m.id===h);return!E||E.type!=="Premium"?{success:!1,metadata:""}:(t.addLog(14,"获取元数据",`Box #${h}`),{success:!0,metadata:E.metadata||""})},f=h=>{const E=s.value.find(x=>x.id===h);if(!E||E.type!=="TimeLocked")return{success:!1,unlockTime:0,remaining:0};const m=E.unlockTime?Math.max(0,Math.ceil((E.unlockTime-Date.now())/1e3)):0;return t.addLog(14,"查询解锁时间",`Box #${h}, 剩余 ${m} 秒`),{success:!0,unlockTime:E.unlockTime||0,remaining:m}},p=(h,E)=>{const m=s.value.find($=>$.id===h);if(!m)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(m.owner!==o.value)return t.addLog(14,"转移所有权失败",`无权操作 Box #${h}`),{success:!1,message:"❌ 只有所有者才能转移所有权！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试转移所有权！"};const x=m.owner,L=c(x),q=c(E);return m.owner=E,i.value.push({icon:"🔑",name:"OwnershipTransferred",details:`Box #${h} 从 ${L} 转移到 ${q}`,timestamp:Date.now(),type:"transfer"}),t.addLog(14,"转移所有权",`Box #${h} 从 ${L} 到 ${q}`,"transferOwnership14"),{success:!0,message:`✅ Box #${h} 所有权已从 ${L} 转移到 ${q}！👉 新所有者需要调用 completeOwnershipTransfer 来更新记录！`,hints:r.value>=2?["factory_pattern"]:[],nextStep:r.value>=2?"🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 切换到新所有者完成所有权转移！":"👉 切换到新所有者调用 completeOwnershipTransfer 来更新记录！"}},v=h=>{const E=s.value.find(x=>x.id===h);if(!E)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(E.owner!==o.value)return t.addLog(14,"完成所有权转移失败",`不是新所有者 Box #${h}`),{success:!1,message:"❌ 你不是该存款盒的新所有者！",hints:[],nextStep:""};const m=c(E.owner);return t.addLog(14,"完成所有权转移",`Box #${h} 新所有者 ${m}`,"completeOwnershipTransfer"),{success:!0,message:`✅ 所有权转移完成！${m} 现在拥有 Box #${h}！`,hints:[],nextStep:"👉 查看完整代码来复习所有知识点！"}},k=h=>f(h).remaining||0,A=R(()=>({gasUsage:t.getDayGasUsage(14),ethCost:t.getDayEthCost(14),operationCount:t.getDayOperationCount(14)}));return{roles:e,currentRole:n,depositBoxes:s,myBoxes:a,eventLog:i,boxCounter:r,currentAddress:o,realtimeData:A,switchRole:w,getRoleName:c,formatAddress:l,formatTime:u,getBoxIcon:d,createBasicBox:y,createPremiumBox:T,createTimeLockedBox:_,storeSecret:I,getSecret:S,setMetadata:b,getMetadata:g,getUnlockTime:f,getRemainingLockTime:k,transferOwnership:p,completeOwnershipTransfer:v}}function Op(){const t=me(),e=B(0),n=B([]),r=B({"0xUser1234567890abcdef":0n,"0xAlice1234567890abcdef":0n,"0xBob1234567890abcdef":0n}),s=B("0xUser1234567890abcdef"),i=B([]),o=R(()=>r.value[s.value]||0n),a=R(()=>{const f=Date.now();return n.value.filter(p=>p.endTime>f&&!p.executed)}),c=R(()=>{const f=Date.now();return n.value.filter(p=>p.endTime<=f&&!p.executed)}),l=R(()=>n.value.filter(f=>f.executed)),u=f=>f?f===s.value?"你 (0xUser...cdef)":f==="0xAlice1234567890abcdef"?"Alice (0xAl...cdef)":f==="0xBob1234567890abcdef"?"Bob (0xBob...cdef)":f.slice(0,10)+"..."+f.slice(-8):"",d=f=>new Date(f).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),w=f=>{const p=Date.now(),v=Math.max(0,f-p),k=Math.floor(v/1e3);return k<60?`${k}秒`:`${Math.floor(k/60)}分${k%60}秒`},y=f=>{const p=Date.now();return f.executed?{text:"已执行",class:"executed"}:f.endTime<=p?{text:"已结束",class:"ended"}:{text:"活跃",class:"active"}},T=(f,p)=>{if(!f||f.trim()==="")return{success:!1,error:"❌ 请输入提案名称！",hint:"👝 提案名称不能为空！"};if(!p||p<1)return{success:!1,error:"❌ 请输入有效的持续时间（至少1分钟）！",hint:"⏰ 持续时间必须大于0！"};e.value++;const v=e.value-1,k={id:v,name:f.trim(),voteCount:0,startTime:Date.now(),endTime:Date.now()+p*60*1e3,executed:!1,creator:s.value};n.value.push(k),i.value.unshift({icon:"📝",name:"ProposalCreated",details:`创建提案 "${k.name}" (ID: ${v})`,timestamp:Date.now(),type:"create"}),t.addLog(15,"创建提案",`Proposal #${v}: ${f}`,"createProposal15");const A=["bytes32_string"];e.value>=3&&A.push("storage_optimization");const h=e.value>=3?`✅ 创建提案 #${v} 成功！📝 恭喜解锁：bytes32 vs string！💾 恭喜解锁：存储优化！👉 现在尝试投票来学习位运算！`:`✅ 创建提案 #${v} 成功！📝 恭喜解锁：bytes32 vs string！👉 继续创建提案或尝试投票来学习位运算！`;return{success:!0,proposal:k,message:h,hints:A,nextStep:e.value>=3?"📝 bytes32 比 string 更省 Gas！💾 创建3个提案展示了 uint8 类型的存储优化！👉 现在尝试投票来学习位运算！":"📝 bytes32 比 string 更省 Gas！👉 继续创建提案或尝试投票来学习位运算！"}},_=f=>{const p=n.value[f];if(!p)return{success:!1,error:"❌ 提案不存在！",hint:"👝 请选择有效的提案！"};const v=Date.now();if(p.endTime<=v)return{success:!1,error:"❌ 提案已结束，无法投票！",hint:"⏰ 投票窗口已关闭！"};const k=1n<<BigInt(f),A=o.value;return(A&k)!==0n?{success:!1,error:"❌ 已经对此提案投过票了！",hint:"🎭 掩码检查防止重复投票！",hasVoted:!0}:(r.value[s.value]=A|k,p.voteCount++,i.value.unshift({icon:"🗳️",name:"Voted",details:`${u(s.value)} 对提案 #${f} 投票`,timestamp:Date.now(),type:"vote"}),t.addLog(15,"投票",`Proposal #${f}`,"vote15"),{success:!0,proposal:p,message:"✅ 投票成功！⚡ 恭喜解锁：位运算技巧！🗺️ 恭喜解锁：映射存储！⏰ 恭喜解锁：时间戳验证！👉 尝试重复投票来体验掩码检查！",hints:["bit_operation","mapping_storage","timestamp_block"],nextStep:"⚡ 位运算让1个uint256存储256个投票状态！🗺️ 映射高效存储选民数据！⏰ 使用block.timestamp进行时间验证！👉 尝试对同一提案再次投票来体验掩码检查！"})},I=f=>{const p=n.value[f];if(!p)return{success:!1,error:"❌ 提案不存在！",hint:"👝 请选择有效的提案！"};if(p.executed)return{success:!1,error:"❌ 提案已经执行过了！",hint:"✅ 该提案已执行！"};const v=Date.now();return p.endTime>v?{success:!1,error:"❌ 提案还在进行中，无法执行！",hint:"⏰ 请等待投票结束后再执行！"}:(p.executed=!0,i.value.unshift({icon:"✅",name:"ProposalExecuted",details:`执行提案 "${p.name}" (ID: ${f}, 得票: ${p.voteCount})`,timestamp:Date.now(),type:"execute"}),t.addLog(15,"执行提案",`Proposal #${f}`,"executeProposal15"),{success:!0,proposal:p,message:`✅ 执行提案 #${f} 成功！📋 恭喜解锁：事件日志！🎉 你已解锁所有知识点！`,hints:["event_logging"],nextStep:"📋 事件日志用于链下索引和前端监听！🎉 恭喜！你已掌握Day 15所有核心概念！"})},S=f=>{const p=1n<<BigInt(f),v=o.value,k=(v&p)!==0n;return{proposalId:f,mask:p.toString(2),voterData:v.toString(2),hasVoted:k,operation:k?"已投票 (AND检查)":"未投票 (OR设置)",gasSaving:"使用位运算，1个uint256可存储256个提案的投票状态，节省约40% Gas！"}},b=()=>({slots:[{slot:0,name:"proposalCount",type:"uint8",value:e.value,description:"提案总数（使用uint8节省存储）"},{slot:1,name:"proposals mapping",type:"mapping",value:`${n.value.length} 个提案`,description:"提案映射（每个提案使用紧凑数据类型）"},{slot:"X",name:"voterRegistry mapping",type:"mapping(uint256)",value:`${Object.keys(r.value).length} 个选民`,description:"选民投票位图（1个uint256存储256个投票状态）"},{slot:"Y",name:"proposalVoterCount",type:"mapping(uint32)",value:"按提案统计",description:"提案投票数（uint32足够大）"}]}),g=R(()=>({gasUsage:t.getDayGasUsage(15),ethCost:t.getDayEthCost(15),operationCount:t.getDayOperationCount(15)}));return{proposals:n,eventLog:i,currentAddress:s,proposalCounter:e,currentVoterData:o,activeProposals:a,endedProposals:c,executedProposals:l,createProposal:T,vote:_,executeProposal:I,getBitOperationDemo:S,getStorageVisualization:b,formatAddress:u,formatTime:d,formatRemainingTime:w,getProposalStatus:y,realtimeData:g}}const Pp="6.16.0";function Bp(t,e,n){const r=e.split("|").map(i=>i.trim());for(let i=0;i<r.length;i++)switch(e){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof t===e)return}const s=new Error(`invalid value for type ${e}`);throw s.code="INVALID_ARGUMENT",s.argument=`value.${n}`,s.value=t,s}function Ae(t,e,n){for(let r in e){let s=e[r];const i=n?n[r]:null;i&&Bp(s,i,r),Object.defineProperty(t,r,{enumerable:!0,value:s,writable:!1})}}function cr(t,e){if(t==null)return"null";if(e==null&&(e=new Set),typeof t=="object"){if(e.has(t))return"[Circular]";e.add(t)}if(Array.isArray(t))return"[ "+t.map(n=>cr(n,e)).join(", ")+" ]";if(t instanceof Uint8Array){const n="0123456789abcdef";let r="0x";for(let s=0;s<t.length;s++)r+=n[t[s]>>4],r+=n[t[s]&15];return r}if(typeof t=="object"&&typeof t.toJSON=="function")return cr(t.toJSON(),e);switch(typeof t){case"boolean":case"number":case"symbol":return t.toString();case"bigint":return BigInt(t).toString();case"string":return JSON.stringify(t);case"object":{const n=Object.keys(t);return n.sort(),"{ "+n.map(r=>`${cr(r,e)}: ${cr(t[r],e)}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function Ra(t,e){return t&&t.code===e}function Tl(t,e,n){let r=t;{const i=[];if(n){if("message"in n||"code"in n||"name"in n)throw new Error(`value will overwrite populated values: ${cr(n)}`);for(const o in n){if(o==="shortMessage")continue;const a=n[o];i.push(o+"="+cr(a))}}i.push(`code=${e}`),i.push(`version=${Pp}`),i.length&&(t+=" ("+i.join(", ")+")")}let s;switch(e){case"INVALID_ARGUMENT":s=new TypeError(t);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":s=new RangeError(t);break;default:s=new Error(t)}return Ae(s,{code:e}),n&&Object.assign(s,n),s.shortMessage==null&&Ae(s,{shortMessage:r}),s}function De(t,e,n,r){if(!t)throw Tl(e,n,r)}function j(t,e,n,r){De(t,e,"INVALID_ARGUMENT",{argument:n,value:r})}function Cl(t,e,n){n==null&&(n=""),n&&(n=": "+n),De(t>=e,"missing argument"+n,"MISSING_ARGUMENT",{count:t,expectedCount:e}),De(t<=e,"too many arguments"+n,"UNEXPECTED_ARGUMENT",{count:t,expectedCount:e})}["NFD","NFC","NFKD","NFKC"].reduce((t,e)=>{try{if("test".normalize(e)!=="test")throw new Error("bad");if(e==="NFD"&&"é".normalize("NFD")!=="é")throw new Error("broken");t.push(e)}catch{}return t},[]);function ui(t,e,n){if(n==null&&(n=""),t!==e){let r=n,s="new";n&&(r+=".",s+=" "+n),De(!1,`private constructor; use ${r}from* methods`,"UNSUPPORTED_OPERATION",{operation:s})}}function El(t,e,n){if(t instanceof Uint8Array)return n?new Uint8Array(t):t;if(typeof t=="string"&&t.length%2===0&&t.match(/^0x[0-9a-f]*$/i)){const r=new Uint8Array((t.length-2)/2);let s=2;for(let i=0;i<r.length;i++)r[i]=parseInt(t.substring(s,s+2),16),s+=2;return r}j(!1,"invalid BytesLike value",e||"value",t)}function We(t,e){return El(t,e,!1)}function je(t,e){return El(t,e,!0)}function Hn(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||typeof e=="number"&&t.length!==2+2*e||e===!0&&t.length%2!==0)}const Oa="0123456789abcdef";function pe(t){const e=We(t);let n="0x";for(let r=0;r<e.length;r++){const s=e[r];n+=Oa[(s&240)>>4]+Oa[s&15]}return n}function dn(t){return"0x"+t.map(e=>pe(e).substring(2)).join("")}function jr(t){return Hn(t,!0)?(t.length-2)/2:We(t).length}function ir(t,e,n){const r=We(t);return n!=null&&n>r.length&&De(!1,"cannot slice beyond data bounds","BUFFER_OVERRUN",{buffer:r,length:r.length,offset:n}),pe(r.slice(e??0,n??r.length))}function Sl(t,e,n){const r=We(t);De(e>=r.length,"padding exceeds data length","BUFFER_OVERRUN",{buffer:new Uint8Array(r),length:e,offset:e+1});const s=new Uint8Array(e);return s.fill(0),n?s.set(r,e-r.length):s.set(r,0),pe(s)}function Il(t,e){return Sl(t,e,!0)}function Lp(t,e){return Sl(t,e,!1)}const us=BigInt(0),xt=BigInt(1),lr=9007199254740991;function Fp(t,e){const n=di(t,"value"),r=BigInt(Ct(e,"width"));if(De(n>>r===us,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:t}),n>>r-xt){const s=(xt<<r)-xt;return-((~n&s)+xt)}return n}function Np(t,e){let n=Wt(t,"value");const r=BigInt(Ct(e,"width")),s=xt<<r-xt;if(n<us){n=-n,De(n<=s,"too low","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:t});const i=(xt<<r)-xt;return(~n&i)+xt}else De(n<s,"too high","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:t});return n}function bs(t,e){const n=di(t,"value"),r=BigInt(Ct(e,"bits"));return n&(xt<<r)-xt}function Wt(t,e){switch(typeof t){case"bigint":return t;case"number":return j(Number.isInteger(t),"underflow",e||"value",t),j(t>=-lr&&t<=lr,"overflow",e||"value",t),BigInt(t);case"string":try{if(t==="")throw new Error("empty string");return t[0]==="-"&&t[1]!=="-"?-BigInt(t.substring(1)):BigInt(t)}catch(n){j(!1,`invalid BigNumberish string: ${n.message}`,e||"value",t)}}j(!1,"invalid BigNumberish value",e||"value",t)}function di(t,e){const n=Wt(t,e);return De(n>=us,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:t}),n}const Pa="0123456789abcdef";function Dl(t){if(t instanceof Uint8Array){let e="0x0";for(const n of t)e+=Pa[n>>4],e+=Pa[n&15];return BigInt(e)}return Wt(t)}function Ct(t,e){switch(typeof t){case"bigint":return j(t>=-lr&&t<=lr,"overflow",e||"value",t),Number(t);case"number":return j(Number.isInteger(t),"underflow",e||"value",t),j(t>=-lr&&t<=lr,"overflow",e||"value",t),t;case"string":try{if(t==="")throw new Error("empty string");return Ct(BigInt(t),e)}catch(n){j(!1,`invalid numeric string: ${n.message}`,e||"value",t)}}j(!1,"invalid numeric value",e||"value",t)}function $p(t){return Ct(Dl(t))}function Hs(t,e){const n=di(t,"value");let r=n.toString(16);if(e==null)r.length%2&&(r="0"+r);else{const s=Ct(e,"width");if(s===0&&n===us)return"0x";for(De(s*2>=r.length,`value exceeds width (${s} bytes)`,"NUMERIC_FAULT",{operation:"toBeHex",fault:"overflow",value:t});r.length<s*2;)r="0"+r}return"0x"+r}function Rl(t,e){const n=di(t,"value");if(n===us)return new Uint8Array(0);let r=n.toString(16);r.length%2&&(r="0"+r);const s=new Uint8Array(r.length/2);for(let i=0;i<s.length;i++){const o=i*2;s[i]=parseInt(r.substring(o,o+2),16)}return s}function qp(t,e,n,r,s){j(!1,`invalid codepoint at offset ${e}; ${t}`,"bytes",n)}function Ol(t,e,n,r,s){if(t==="BAD_PREFIX"||t==="UNEXPECTED_CONTINUE"){let i=0;for(let o=e+1;o<n.length&&n[o]>>6===2;o++)i++;return i}return t==="OVERRUN"?n.length-e-1:0}function Mp(t,e,n,r,s){return t==="OVERLONG"?(j(typeof s=="number","invalid bad code point for replacement","badCodepoint",s),r.push(s),0):(r.push(65533),Ol(t,e,n))}const Up=Object.freeze({error:qp,ignore:Ol,replace:Mp});function Vp(t,e){e==null&&(e=Up.error);const n=We(t,"bytes"),r=[];let s=0;for(;s<n.length;){const i=n[s++];if(!(i>>7)){r.push(i);continue}let o=null,a=null;if((i&224)===192)o=1,a=127;else if((i&240)===224)o=2,a=2047;else if((i&248)===240)o=3,a=65535;else{(i&192)===128?s+=e("UNEXPECTED_CONTINUE",s-1,n,r):s+=e("BAD_PREFIX",s-1,n,r);continue}if(s-1+o>=n.length){s+=e("OVERRUN",s-1,n,r);continue}let c=i&(1<<8-o-1)-1;for(let l=0;l<o;l++){let u=n[s];if((u&192)!=128){s+=e("MISSING_CONTINUE",s,n,r),c=null;break}c=c<<6|u&63,s++}if(c!==null){if(c>1114111){s+=e("OUT_OF_RANGE",s-1-o,n,r,c);continue}if(c>=55296&&c<=57343){s+=e("UTF16_SURROGATE",s-1-o,n,r,c);continue}if(c<=a){s+=e("OVERLONG",s-1-o,n,r,c);continue}r.push(c)}}return r}function fi(t,e){j(typeof t=="string","invalid string value","str",t);let n=[];for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);if(s<128)n.push(s);else if(s<2048)n.push(s>>6|192),n.push(s&63|128);else if((s&64512)==55296){r++;const i=t.charCodeAt(r);j(r<t.length&&(i&64512)===56320,"invalid surrogate pair","str",t);const o=65536+((s&1023)<<10)+(i&1023);n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128)}else n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128)}return new Uint8Array(n)}function Hp(t){return t.map(e=>e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10&1023)+55296,(e&1023)+56320))).join("")}function Wp(t,e){return Hp(Vp(t,e))}const Ye=32,Yi=new Uint8Array(Ye),zp=["then"],vs={},Pl=new WeakMap;function qn(t){return Pl.get(t)}function Ba(t,e){Pl.set(t,e)}function Br(t,e){const n=new Error(`deferred error during ABI decoding triggered accessing ${t}`);throw n.error=e,n}function Xi(t,e,n){return t.indexOf(null)>=0?e.map((r,s)=>r instanceof Ar?Xi(qn(r),r,n):r):t.reduce((r,s,i)=>{let o=e.getValue(s);return s in r||(n&&o instanceof Ar&&(o=Xi(qn(o),o,n)),r[s]=o),r},{})}var mr;const ur=class ur extends Array{constructor(...n){const r=n[0];let s=n[1],i=(n[2]||[]).slice(),o=!0;r!==vs&&(s=n,i=[],o=!1);super(s.length);ve(this,mr);s.forEach((l,u)=>{this[u]=l});const a=i.reduce((l,u)=>(typeof u=="string"&&l.set(u,(l.get(u)||0)+1),l),new Map);if(Ba(this,Object.freeze(s.map((l,u)=>{const d=i[u];return d!=null&&a.get(d)===1?d:null}))),ae(this,mr,[]),U(this,mr)==null&&U(this,mr),!o)return;Object.freeze(this);const c=new Proxy(this,{get:(l,u,d)=>{if(typeof u=="string"){if(u.match(/^[0-9]+$/)){const y=Ct(u,"%index");if(y<0||y>=this.length)throw new RangeError("out of result range");const T=l[y];return T instanceof Error&&Br(`index ${y}`,T),T}if(zp.indexOf(u)>=0)return Reflect.get(l,u,d);const w=l[u];if(w instanceof Function)return function(...y){return w.apply(this===d?l:this,y)};if(!(u in l))return l.getValue.apply(this===d?l:this,[u])}return Reflect.get(l,u,d)}});return Ba(c,qn(this)),c}toArray(n){const r=[];return this.forEach((s,i)=>{s instanceof Error&&Br(`index ${i}`,s),n&&s instanceof ur&&(s=s.toArray(n)),r.push(s)}),r}toObject(n){const r=qn(this);return r.reduce((s,i,o)=>(De(i!=null,`value at index ${o} unnamed`,"UNSUPPORTED_OPERATION",{operation:"toObject()"}),Xi(r,this,n)),{})}slice(n,r){n==null&&(n=0),n<0&&(n+=this.length,n<0&&(n=0)),r==null&&(r=this.length),r<0&&(r+=this.length,r<0&&(r=0)),r>this.length&&(r=this.length);const s=qn(this),i=[],o=[];for(let a=n;a<r;a++)i.push(this[a]),o.push(s[a]);return new ur(vs,i,o)}filter(n,r){const s=qn(this),i=[],o=[];for(let a=0;a<this.length;a++){const c=this[a];c instanceof Error&&Br(`index ${a}`,c),n.call(r,c,a,this)&&(i.push(c),o.push(s[a]))}return new ur(vs,i,o)}map(n,r){const s=[];for(let i=0;i<this.length;i++){const o=this[i];o instanceof Error&&Br(`index ${i}`,o),s.push(n.call(r,o,i,this))}return s}getValue(n){const r=qn(this).indexOf(n);if(r===-1)return;const s=this[r];return s instanceof Error&&Br(`property ${JSON.stringify(n)}`,s.error),s}static fromItems(n,r){return new ur(vs,n,r)}};mr=new WeakMap;let Ar=ur;function La(t){let e=Rl(t);return De(e.length<=Ye,"value out-of-bounds","BUFFER_OVERRUN",{buffer:e,length:Ye,offset:e.length}),e.length!==Ye&&(e=je(dn([Yi.slice(e.length%Ye),e]))),e}class bn{constructor(e,n,r,s){ee(this,"name");ee(this,"type");ee(this,"localName");ee(this,"dynamic");Ae(this,{name:e,type:n,localName:r,dynamic:s},{name:"string",type:"string",localName:"string",dynamic:"boolean"})}_throwError(e,n){j(!1,e,this.localName,n)}}var nn,zn,gr,Ds;class Zi{constructor(){ve(this,gr);ve(this,nn);ve(this,zn);ae(this,nn,[]),ae(this,zn,0)}get data(){return dn(U(this,nn))}get length(){return U(this,zn)}appendWriter(e){return Te(this,gr,Ds).call(this,je(e.data))}writeBytes(e){let n=je(e);const r=n.length%Ye;return r&&(n=je(dn([n,Yi.slice(r)]))),Te(this,gr,Ds).call(this,n)}writeValue(e){return Te(this,gr,Ds).call(this,La(e))}writeUpdatableValue(){const e=U(this,nn).length;return U(this,nn).push(Yi),ae(this,zn,U(this,zn)+Ye),n=>{U(this,nn)[e]=La(n)}}}nn=new WeakMap,zn=new WeakMap,gr=new WeakSet,Ds=function(e){return U(this,nn).push(e),ae(this,zn,U(this,zn)+e.length),e.length};var Qe,ct,Gn,Kn,En,nr,Qi,Bl;const qo=class qo{constructor(e,n,r){ve(this,nr);ee(this,"allowLoose");ve(this,Qe);ve(this,ct);ve(this,Gn);ve(this,Kn);ve(this,En);Ae(this,{allowLoose:!!n}),ae(this,Qe,je(e)),ae(this,Gn,0),ae(this,Kn,null),ae(this,En,r??1024),ae(this,ct,0)}get data(){return pe(U(this,Qe))}get dataLength(){return U(this,Qe).length}get consumed(){return U(this,ct)}get bytes(){return new Uint8Array(U(this,Qe))}subReader(e){const n=new qo(U(this,Qe).slice(U(this,ct)+e),this.allowLoose,U(this,En));return ae(n,Kn,this),n}readBytes(e,n){let r=Te(this,nr,Bl).call(this,0,e,!!n);return Te(this,nr,Qi).call(this,e),ae(this,ct,U(this,ct)+r.length),r.slice(0,e)}readValue(){return Dl(this.readBytes(Ye))}readIndex(){return $p(this.readBytes(Ye))}};Qe=new WeakMap,ct=new WeakMap,Gn=new WeakMap,Kn=new WeakMap,En=new WeakMap,nr=new WeakSet,Qi=function(e){var n;if(U(this,Kn))return Te(n=U(this,Kn),nr,Qi).call(n,e);ae(this,Gn,U(this,Gn)+e),De(U(this,En)<1||U(this,Gn)<=U(this,En)*this.dataLength,`compressed ABI data exceeds inflation ratio of ${U(this,En)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`,"BUFFER_OVERRUN",{buffer:je(U(this,Qe)),offset:U(this,ct),length:e,info:{bytesRead:U(this,Gn),dataLength:this.dataLength}})},Bl=function(e,n,r){let s=Math.ceil(n/Ye)*Ye;return U(this,ct)+s>U(this,Qe).length&&(this.allowLoose&&r&&U(this,ct)+n<=U(this,Qe).length?s=n:De(!1,"data out-of-bounds","BUFFER_OVERRUN",{buffer:je(U(this,Qe)),length:U(this,Qe).length,offset:U(this,ct)+s})),U(this,Qe).slice(U(this,ct),U(this,ct)+s)};let Ji=qo;function Ws(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Ro(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function Gp(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ws(t.outputLen),Ws(t.blockLen)}function Tr(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Ll(t,e){Ro(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Ii=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Fl=t=>t instanceof Uint8Array,Kp=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),Di=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Lt=(t,e)=>t<<32-e|t>>>e,jp=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!jp)throw new Error("Non little-endian hardware is not supported");function Yp(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function pi(t){if(typeof t=="string"&&(t=Yp(t)),!Fl(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}function Xp(...t){const e=new Uint8Array(t.reduce((r,s)=>r+s.length,0));let n=0;return t.forEach(r=>{if(!Fl(r))throw new Error("Uint8Array expected");e.set(r,n),n+=r.length}),e}class Oo{clone(){return this._cloneInto()}}function Nl(t){const e=r=>t().update(pi(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function Zp(t=32){if(Ii&&typeof Ii.getRandomValues=="function")return Ii.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}class $l extends Oo{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,Gp(e);const r=pi(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const s=this.blockLen,i=new Uint8Array(s);i.set(r.length>s?e.create().update(r).digest():r);for(let o=0;o<i.length;o++)i[o]^=54;this.iHash.update(i),this.oHash=e.create();for(let o=0;o<i.length;o++)i[o]^=106;this.oHash.update(i),i.fill(0)}update(e){return Tr(this),this.iHash.update(e),this}digestInto(e){Tr(this),Ro(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:s,destroyed:i,blockLen:o,outputLen:a}=this;return e=e,e.finished=s,e.destroyed=i,e.blockLen=o,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const ql=(t,e,n)=>new $l(t,e).update(n).digest();ql.create=(t,e)=>new $l(t,e);function Jp(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const s=BigInt(32),i=BigInt(4294967295),o=Number(n>>s&i),a=Number(n&i),c=r?4:0,l=r?0:4;t.setUint32(e+c,o,r),t.setUint32(e+l,a,r)}class Qp extends Oo{constructor(e,n,r,s){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=s,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Di(this.buffer)}update(e){Tr(this);const{view:n,buffer:r,blockLen:s}=this;e=pi(e);const i=e.length;for(let o=0;o<i;){const a=Math.min(s-this.pos,i-o);if(a===s){const c=Di(e);for(;s<=i-o;o+=s)this.process(c,o);continue}r.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===s&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Tr(this),Ll(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:s,isLE:i}=this;let{pos:o}=this;n[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>s-o&&(this.process(r,0),o=0);for(let d=o;d<s;d++)n[d]=0;Jp(r,s-8,BigInt(this.length*8),i),this.process(r,0);const a=Di(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<l;d++)a.setUint32(4*d,u[d],i)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:s,finished:i,destroyed:o,pos:a}=this;return e.length=s,e.pos=a,e.finished=i,e.destroyed=o,s%n&&e.buffer.set(r),e}}const em=(t,e,n)=>t&e^~t&n,tm=(t,e,n)=>t&e^t&n^e&n,nm=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),wn=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),_n=new Uint32Array(64);class rm extends Qp{constructor(){super(64,32,8,!1),this.A=wn[0]|0,this.B=wn[1]|0,this.C=wn[2]|0,this.D=wn[3]|0,this.E=wn[4]|0,this.F=wn[5]|0,this.G=wn[6]|0,this.H=wn[7]|0}get(){const{A:e,B:n,C:r,D:s,E:i,F:o,G:a,H:c}=this;return[e,n,r,s,i,o,a,c]}set(e,n,r,s,i,o,a,c){this.A=e|0,this.B=n|0,this.C=r|0,this.D=s|0,this.E=i|0,this.F=o|0,this.G=a|0,this.H=c|0}process(e,n){for(let d=0;d<16;d++,n+=4)_n[d]=e.getUint32(n,!1);for(let d=16;d<64;d++){const w=_n[d-15],y=_n[d-2],T=Lt(w,7)^Lt(w,18)^w>>>3,_=Lt(y,17)^Lt(y,19)^y>>>10;_n[d]=_+_n[d-7]+T+_n[d-16]|0}let{A:r,B:s,C:i,D:o,E:a,F:c,G:l,H:u}=this;for(let d=0;d<64;d++){const w=Lt(a,6)^Lt(a,11)^Lt(a,25),y=u+w+em(a,c,l)+nm[d]+_n[d]|0,_=(Lt(r,2)^Lt(r,13)^Lt(r,22))+tm(r,s,i)|0;u=l,l=c,c=a,a=o+y|0,o=i,i=s,s=r,r=y+_|0}r=r+this.A|0,s=s+this.B|0,i=i+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(r,s,i,o,a,c,l,u)}roundClean(){_n.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const sm=Nl(()=>new rm),ws=BigInt(2**32-1),Fa=BigInt(32);function im(t,e=!1){return e?{h:Number(t&ws),l:Number(t>>Fa&ws)}:{h:Number(t>>Fa&ws)|0,l:Number(t&ws)|0}}function om(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:i,l:o}=im(t[s],e);[n[s],r[s]]=[i,o]}return[n,r]}const am=(t,e,n)=>t<<n|e>>>32-n,cm=(t,e,n)=>e<<n|t>>>32-n,lm=(t,e,n)=>e<<n-32|t>>>64-n,um=(t,e,n)=>t<<n-32|e>>>64-n,[Ml,Ul,Vl]=[[],[],[]],dm=BigInt(0),Lr=BigInt(1),fm=BigInt(2),pm=BigInt(7),mm=BigInt(256),gm=BigInt(113);for(let t=0,e=Lr,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],Ml.push(2*(5*r+n)),Ul.push((t+1)*(t+2)/2%64);let s=dm;for(let i=0;i<7;i++)e=(e<<Lr^(e>>pm)*gm)%mm,e&fm&&(s^=Lr<<(Lr<<BigInt(i))-Lr);Vl.push(s)}const[hm,ym]=om(Vl,!0),Na=(t,e,n)=>n>32?lm(t,e,n):am(t,e,n),$a=(t,e,n)=>n>32?um(t,e,n):cm(t,e,n);function bm(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let o=0;o<10;o++)n[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,c=(o+2)%10,l=n[c],u=n[c+1],d=Na(l,u,1)^n[a],w=$a(l,u,1)^n[a+1];for(let y=0;y<50;y+=10)t[o+y]^=d,t[o+y+1]^=w}let s=t[2],i=t[3];for(let o=0;o<24;o++){const a=Ul[o],c=Na(s,i,a),l=$a(s,i,a),u=Ml[o];s=t[u],i=t[u+1],t[u]=c,t[u+1]=l}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)n[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=hm[r],t[1]^=ym[r]}n.fill(0)}class Po extends Oo{constructor(e,n,r,s=!1,i=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=s,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Ws(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Kp(this.state)}keccak(){bm(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Tr(this);const{blockLen:n,state:r}=this;e=pi(e);const s=e.length;for(let i=0;i<s;){const o=Math.min(n-this.pos,s-i);for(let a=0;a<o;a++)r[this.pos++]^=e[i++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:s}=this;e[r]^=n,n&128&&r===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){Tr(this,!1),Ro(e),this.finish();const n=this.state,{blockLen:r}=this;for(let s=0,i=e.length;s<i;){this.posOut>=r&&this.keccak();const o=Math.min(r-this.posOut,i-s);e.set(n.subarray(this.posOut,this.posOut+o),s),this.posOut+=o,s+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Ws(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Ll(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:s,rounds:i,enableXOF:o}=this;return e||(e=new Po(n,r,s,o,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=s,e.enableXOF=o,e.destroyed=this.destroyed,e}}const vm=(t,e,n)=>Nl(()=>new Po(e,t,n)),wm=vm(1,136,256/8);let Hl=!1;const Wl=function(t){return wm(t)};let zl=Wl;function Yt(t){const e=We(t,"data");return pe(zl(e))}Yt._=Wl;Yt.lock=function(){Hl=!0};Yt.register=function(t){if(Hl)throw new TypeError("keccak256 is locked");zl=t};Object.freeze(Yt);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);const _m=BigInt(1),km=BigInt(2),mi=t=>t instanceof Uint8Array,xm=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Cr(t){if(!mi(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=xm[t[n]];return e}function Bo(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return BigInt(t===""?"0":`0x${t}`)}function ts(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let r=0;r<n.length;r++){const s=r*2,i=t.slice(s,s+2),o=Number.parseInt(i,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");n[r]=o}return n}function Zn(t){return Bo(Cr(t))}function Lo(t){if(!mi(t))throw new Error("Uint8Array expected");return Bo(Cr(Uint8Array.from(t).reverse()))}function Er(t,e){return ts(t.toString(16).padStart(e*2,"0"))}function Fo(t,e){return Er(t,e).reverse()}function _t(t,e,n){let r;if(typeof e=="string")try{r=ts(e)}catch(i){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${i}`)}else if(mi(e))r=Uint8Array.from(e);else throw new Error(`${t} must be hex string or Uint8Array`);const s=r.length;if(typeof n=="number"&&s!==n)throw new Error(`${t} expected ${n} bytes, got ${s}`);return r}function ns(...t){const e=new Uint8Array(t.reduce((r,s)=>r+s.length,0));let n=0;return t.forEach(r=>{if(!mi(r))throw new Error("Uint8Array expected");e.set(r,n),n+=r.length}),e}const No=t=>(km<<BigInt(t-1))-_m,Ri=t=>new Uint8Array(t),qa=t=>Uint8Array.from(t);function Gl(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let r=Ri(t),s=Ri(t),i=0;const o=()=>{r.fill(1),s.fill(0),i=0},a=(...d)=>n(s,r,...d),c=(d=Ri())=>{s=a(qa([0]),d),r=a(),d.length!==0&&(s=a(qa([1]),d),r=a())},l=()=>{if(i++>=1e3)throw new Error("drbg: tried 1000 values");let d=0;const w=[];for(;d<e;){r=a();const y=r.slice();w.push(y),d+=r.length}return ns(...w)};return(d,w)=>{o(),c(d);let y;for(;!(y=w(l()));)c();return o(),y}}const Am={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||t instanceof Uint8Array,isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function ds(t,e,n={}){const r=(s,i,o)=>{const a=Am[i];if(typeof a!="function")throw new Error(`Invalid validator "${i}", expected function`);const c=t[s];if(!(o&&c===void 0)&&!a(c,t))throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${i}`)};for(const[s,i]of Object.entries(e))r(s,i,!1);for(const[s,i]of Object.entries(n))r(s,i,!0);return t}const Tm=Object.freeze(Object.defineProperty({__proto__:null,bitMask:No,bytesToHex:Cr,bytesToNumberBE:Zn,bytesToNumberLE:Lo,concatBytes:ns,createHmacDrbg:Gl,ensureBytes:_t,hexToBytes:ts,hexToNumber:Bo,numberToBytesBE:Er,numberToBytesLE:Fo,validateObject:ds},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Be=BigInt(0),Oe=BigInt(1),Mn=BigInt(2),Cm=BigInt(3),eo=BigInt(4),Ma=BigInt(5),Ua=BigInt(8);BigInt(9);BigInt(16);function et(t,e){const n=t%e;return n>=Be?n:e+n}function Em(t,e,n){if(n<=Be||e<Be)throw new Error("Expected power/modulo > 0");if(n===Oe)return Be;let r=Oe;for(;e>Be;)e&Oe&&(r=r*t%n),t=t*t%n,e>>=Oe;return r}function gt(t,e,n){let r=t;for(;e-- >Be;)r*=r,r%=n;return r}function to(t,e){if(t===Be||e<=Be)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=et(t,e),r=e,s=Be,i=Oe;for(;n!==Be;){const a=r/n,c=r%n,l=s-i*a;r=n,n=c,s=i,i=l}if(r!==Oe)throw new Error("invert: does not exist");return et(s,e)}function Sm(t){const e=(t-Oe)/Mn;let n,r,s;for(n=t-Oe,r=0;n%Mn===Be;n/=Mn,r++);for(s=Mn;s<t&&Em(s,e,t)!==t-Oe;s++);if(r===1){const o=(t+Oe)/eo;return function(c,l){const u=c.pow(l,o);if(!c.eql(c.sqr(u),l))throw new Error("Cannot find square root");return u}}const i=(n+Oe)/Mn;return function(a,c){if(a.pow(c,e)===a.neg(a.ONE))throw new Error("Cannot find square root");let l=r,u=a.pow(a.mul(a.ONE,s),n),d=a.pow(c,i),w=a.pow(c,n);for(;!a.eql(w,a.ONE);){if(a.eql(w,a.ZERO))return a.ZERO;let y=1;for(let _=a.sqr(w);y<l&&!a.eql(_,a.ONE);y++)_=a.sqr(_);const T=a.pow(u,Oe<<BigInt(l-y-1));u=a.sqr(T),d=a.mul(d,T),w=a.mul(w,u),l=y}return d}}function Im(t){if(t%eo===Cm){const e=(t+Oe)/eo;return function(r,s){const i=r.pow(s,e);if(!r.eql(r.sqr(i),s))throw new Error("Cannot find square root");return i}}if(t%Ua===Ma){const e=(t-Ma)/Ua;return function(r,s){const i=r.mul(s,Mn),o=r.pow(i,e),a=r.mul(s,o),c=r.mul(r.mul(a,Mn),o),l=r.mul(a,r.sub(c,r.ONE));if(!r.eql(r.sqr(l),s))throw new Error("Cannot find square root");return l}}return Sm(t)}const Dm=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Rm(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=Dm.reduce((r,s)=>(r[s]="function",r),e);return ds(t,n)}function Om(t,e,n){if(n<Be)throw new Error("Expected power > 0");if(n===Be)return t.ONE;if(n===Oe)return e;let r=t.ONE,s=e;for(;n>Be;)n&Oe&&(r=t.mul(r,s)),s=t.sqr(s),n>>=Oe;return r}function Pm(t,e){const n=new Array(e.length),r=e.reduce((i,o,a)=>t.is0(o)?i:(n[a]=i,t.mul(i,o)),t.ONE),s=t.inv(r);return e.reduceRight((i,o,a)=>t.is0(o)?i:(n[a]=t.mul(i,n[a]),t.mul(i,o)),s),n}function Kl(t,e){const n=e!==void 0?e:t.toString(2).length,r=Math.ceil(n/8);return{nBitLength:n,nByteLength:r}}function Bm(t,e,n=!1,r={}){if(t<=Be)throw new Error(`Expected Field ORDER > 0, got ${t}`);const{nBitLength:s,nByteLength:i}=Kl(t,e);if(i>2048)throw new Error("Field lengths over 2048 bytes are not supported");const o=Im(t),a=Object.freeze({ORDER:t,BITS:s,BYTES:i,MASK:No(s),ZERO:Be,ONE:Oe,create:c=>et(c,t),isValid:c=>{if(typeof c!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);return Be<=c&&c<t},is0:c=>c===Be,isOdd:c=>(c&Oe)===Oe,neg:c=>et(-c,t),eql:(c,l)=>c===l,sqr:c=>et(c*c,t),add:(c,l)=>et(c+l,t),sub:(c,l)=>et(c-l,t),mul:(c,l)=>et(c*l,t),pow:(c,l)=>Om(a,c,l),div:(c,l)=>et(c*to(l,t),t),sqrN:c=>c*c,addN:(c,l)=>c+l,subN:(c,l)=>c-l,mulN:(c,l)=>c*l,inv:c=>to(c,t),sqrt:r.sqrt||(c=>o(a,c)),invertBatch:c=>Pm(a,c),cmov:(c,l,u)=>u?l:c,toBytes:c=>n?Fo(c,i):Er(c,i),fromBytes:c=>{if(c.length!==i)throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);return n?Lo(c):Zn(c)}});return Object.freeze(a)}function jl(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function Yl(t){const e=jl(t);return e+Math.ceil(e/2)}function Lm(t,e,n=!1){const r=t.length,s=jl(e),i=Yl(e);if(r<16||r<i||r>1024)throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);const o=n?Zn(t):Lo(t),a=et(o,e-Oe)+Oe;return n?Fo(a,s):Er(a,s)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Fm=BigInt(0),Oi=BigInt(1);function Nm(t,e){const n=(s,i)=>{const o=i.negate();return s?o:i},r=s=>{const i=Math.ceil(e/s)+1,o=2**(s-1);return{windows:i,windowSize:o}};return{constTimeNegate:n,unsafeLadder(s,i){let o=t.ZERO,a=s;for(;i>Fm;)i&Oi&&(o=o.add(a)),a=a.double(),i>>=Oi;return o},precomputeWindow(s,i){const{windows:o,windowSize:a}=r(i),c=[];let l=s,u=l;for(let d=0;d<o;d++){u=l,c.push(u);for(let w=1;w<a;w++)u=u.add(l),c.push(u);l=u.double()}return c},wNAF(s,i,o){const{windows:a,windowSize:c}=r(s);let l=t.ZERO,u=t.BASE;const d=BigInt(2**s-1),w=2**s,y=BigInt(s);for(let T=0;T<a;T++){const _=T*c;let I=Number(o&d);o>>=y,I>c&&(I-=w,o+=Oi);const S=_,b=_+Math.abs(I)-1,g=T%2!==0,f=I<0;I===0?u=u.add(n(g,i[S])):l=l.add(n(f,i[b]))}return{p:l,f:u}},wNAFCached(s,i,o,a){const c=s._WINDOW_SIZE||1;let l=i.get(s);return l||(l=this.precomputeWindow(s,c),c!==1&&i.set(s,a(l))),this.wNAF(c,l,o)}}}function Xl(t){return Rm(t.Fp),ds(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Kl(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function $m(t){const e=Xl(t);ds(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:r,a:s}=e;if(n){if(!r.eql(s,r.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:qm,hexToBytes:Mm}=Tm,Wn={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(t){const{Err:e}=Wn;if(t.length<2||t[0]!==2)throw new e("Invalid signature integer tag");const n=t[1],r=t.subarray(2,n+2);if(!n||r.length!==n)throw new e("Invalid signature integer: wrong length");if(r[0]&128)throw new e("Invalid signature integer: negative");if(r[0]===0&&!(r[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:qm(r),l:t.subarray(n+2)}},toSig(t){const{Err:e}=Wn,n=typeof t=="string"?Mm(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let r=n.length;if(r<2||n[0]!=48)throw new e("Invalid signature tag");if(n[1]!==r-2)throw new e("Invalid signature: incorrect length");const{d:s,l:i}=Wn._parseInt(n.subarray(2)),{d:o,l:a}=Wn._parseInt(i);if(a.length)throw new e("Invalid signature: left bytes after parsing");return{r:s,s:o}},hexFromSig(t){const e=l=>Number.parseInt(l[0],16)&8?"00"+l:l,n=l=>{const u=l.toString(16);return u.length&1?`0${u}`:u},r=e(n(t.s)),s=e(n(t.r)),i=r.length/2,o=s.length/2,a=n(i),c=n(o);return`30${n(o+i+4)}02${c}${s}02${a}${r}`}},an=BigInt(0),bt=BigInt(1);BigInt(2);const Va=BigInt(3);BigInt(4);function Um(t){const e=$m(t),{Fp:n}=e,r=e.toBytes||((T,_,I)=>{const S=_.toAffine();return ns(Uint8Array.from([4]),n.toBytes(S.x),n.toBytes(S.y))}),s=e.fromBytes||(T=>{const _=T.subarray(1),I=n.fromBytes(_.subarray(0,n.BYTES)),S=n.fromBytes(_.subarray(n.BYTES,2*n.BYTES));return{x:I,y:S}});function i(T){const{a:_,b:I}=e,S=n.sqr(T),b=n.mul(S,T);return n.add(n.add(b,n.mul(T,_)),I)}if(!n.eql(n.sqr(e.Gy),i(e.Gx)))throw new Error("bad generator point: equation left != right");function o(T){return typeof T=="bigint"&&an<T&&T<e.n}function a(T){if(!o(T))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function c(T){const{allowedPrivateKeyLengths:_,nByteLength:I,wrapPrivateKey:S,n:b}=e;if(_&&typeof T!="bigint"){if(T instanceof Uint8Array&&(T=Cr(T)),typeof T!="string"||!_.includes(T.length))throw new Error("Invalid key");T=T.padStart(I*2,"0")}let g;try{g=typeof T=="bigint"?T:Zn(_t("private key",T,I))}catch{throw new Error(`private key must be ${I} bytes, hex or bigint, not ${typeof T}`)}return S&&(g=et(g,b)),a(g),g}const l=new Map;function u(T){if(!(T instanceof d))throw new Error("ProjectivePoint expected")}class d{constructor(_,I,S){if(this.px=_,this.py=I,this.pz=S,_==null||!n.isValid(_))throw new Error("x required");if(I==null||!n.isValid(I))throw new Error("y required");if(S==null||!n.isValid(S))throw new Error("z required")}static fromAffine(_){const{x:I,y:S}=_||{};if(!_||!n.isValid(I)||!n.isValid(S))throw new Error("invalid affine point");if(_ instanceof d)throw new Error("projective point not allowed");const b=g=>n.eql(g,n.ZERO);return b(I)&&b(S)?d.ZERO:new d(I,S,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(_){const I=n.invertBatch(_.map(S=>S.pz));return _.map((S,b)=>S.toAffine(I[b])).map(d.fromAffine)}static fromHex(_){const I=d.fromAffine(s(_t("pointHex",_)));return I.assertValidity(),I}static fromPrivateKey(_){return d.BASE.multiply(c(_))}_setWindowSize(_){this._WINDOW_SIZE=_,l.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint&&!n.is0(this.py))return;throw new Error("bad point: ZERO")}const{x:_,y:I}=this.toAffine();if(!n.isValid(_)||!n.isValid(I))throw new Error("bad point: x or y not FE");const S=n.sqr(I),b=i(_);if(!n.eql(S,b))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:_}=this.toAffine();if(n.isOdd)return!n.isOdd(_);throw new Error("Field doesn't support isOdd")}equals(_){u(_);const{px:I,py:S,pz:b}=this,{px:g,py:f,pz:p}=_,v=n.eql(n.mul(I,p),n.mul(g,b)),k=n.eql(n.mul(S,p),n.mul(f,b));return v&&k}negate(){return new d(this.px,n.neg(this.py),this.pz)}double(){const{a:_,b:I}=e,S=n.mul(I,Va),{px:b,py:g,pz:f}=this;let p=n.ZERO,v=n.ZERO,k=n.ZERO,A=n.mul(b,b),h=n.mul(g,g),E=n.mul(f,f),m=n.mul(b,g);return m=n.add(m,m),k=n.mul(b,f),k=n.add(k,k),p=n.mul(_,k),v=n.mul(S,E),v=n.add(p,v),p=n.sub(h,v),v=n.add(h,v),v=n.mul(p,v),p=n.mul(m,p),k=n.mul(S,k),E=n.mul(_,E),m=n.sub(A,E),m=n.mul(_,m),m=n.add(m,k),k=n.add(A,A),A=n.add(k,A),A=n.add(A,E),A=n.mul(A,m),v=n.add(v,A),E=n.mul(g,f),E=n.add(E,E),A=n.mul(E,m),p=n.sub(p,A),k=n.mul(E,h),k=n.add(k,k),k=n.add(k,k),new d(p,v,k)}add(_){u(_);const{px:I,py:S,pz:b}=this,{px:g,py:f,pz:p}=_;let v=n.ZERO,k=n.ZERO,A=n.ZERO;const h=e.a,E=n.mul(e.b,Va);let m=n.mul(I,g),x=n.mul(S,f),L=n.mul(b,p),q=n.add(I,S),$=n.add(g,f);q=n.mul(q,$),$=n.add(m,x),q=n.sub(q,$),$=n.add(I,b);let F=n.add(g,p);return $=n.mul($,F),F=n.add(m,L),$=n.sub($,F),F=n.add(S,b),v=n.add(f,p),F=n.mul(F,v),v=n.add(x,L),F=n.sub(F,v),A=n.mul(h,$),v=n.mul(E,L),A=n.add(v,A),v=n.sub(x,A),A=n.add(x,A),k=n.mul(v,A),x=n.add(m,m),x=n.add(x,m),L=n.mul(h,L),$=n.mul(E,$),x=n.add(x,L),L=n.sub(m,L),L=n.mul(h,L),$=n.add($,L),m=n.mul(x,$),k=n.add(k,m),m=n.mul(F,$),v=n.mul(q,v),v=n.sub(v,m),m=n.mul(q,x),A=n.mul(F,A),A=n.add(A,m),new d(v,k,A)}subtract(_){return this.add(_.negate())}is0(){return this.equals(d.ZERO)}wNAF(_){return y.wNAFCached(this,l,_,I=>{const S=n.invertBatch(I.map(b=>b.pz));return I.map((b,g)=>b.toAffine(S[g])).map(d.fromAffine)})}multiplyUnsafe(_){const I=d.ZERO;if(_===an)return I;if(a(_),_===bt)return this;const{endo:S}=e;if(!S)return y.unsafeLadder(this,_);let{k1neg:b,k1:g,k2neg:f,k2:p}=S.splitScalar(_),v=I,k=I,A=this;for(;g>an||p>an;)g&bt&&(v=v.add(A)),p&bt&&(k=k.add(A)),A=A.double(),g>>=bt,p>>=bt;return b&&(v=v.negate()),f&&(k=k.negate()),k=new d(n.mul(k.px,S.beta),k.py,k.pz),v.add(k)}multiply(_){a(_);let I=_,S,b;const{endo:g}=e;if(g){const{k1neg:f,k1:p,k2neg:v,k2:k}=g.splitScalar(I);let{p:A,f:h}=this.wNAF(p),{p:E,f:m}=this.wNAF(k);A=y.constTimeNegate(f,A),E=y.constTimeNegate(v,E),E=new d(n.mul(E.px,g.beta),E.py,E.pz),S=A.add(E),b=h.add(m)}else{const{p:f,f:p}=this.wNAF(I);S=f,b=p}return d.normalizeZ([S,b])[0]}multiplyAndAddUnsafe(_,I,S){const b=d.BASE,g=(p,v)=>v===an||v===bt||!p.equals(b)?p.multiplyUnsafe(v):p.multiply(v),f=g(this,I).add(g(_,S));return f.is0()?void 0:f}toAffine(_){const{px:I,py:S,pz:b}=this,g=this.is0();_==null&&(_=g?n.ONE:n.inv(b));const f=n.mul(I,_),p=n.mul(S,_),v=n.mul(b,_);if(g)return{x:n.ZERO,y:n.ZERO};if(!n.eql(v,n.ONE))throw new Error("invZ was invalid");return{x:f,y:p}}isTorsionFree(){const{h:_,isTorsionFree:I}=e;if(_===bt)return!0;if(I)return I(d,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:_,clearCofactor:I}=e;return _===bt?this:I?I(d,this):this.multiplyUnsafe(e.h)}toRawBytes(_=!0){return this.assertValidity(),r(d,this,_)}toHex(_=!0){return Cr(this.toRawBytes(_))}}d.BASE=new d(e.Gx,e.Gy,n.ONE),d.ZERO=new d(n.ZERO,n.ONE,n.ZERO);const w=e.nBitLength,y=Nm(d,e.endo?Math.ceil(w/2):w);return{CURVE:e,ProjectivePoint:d,normPrivateKeyToScalar:c,weierstrassEquation:i,isWithinCurveOrder:o}}function Vm(t){const e=Xl(t);return ds(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function Hm(t){const e=Vm(t),{Fp:n,n:r}=e,s=n.BYTES+1,i=2*n.BYTES+1;function o($){return an<$&&$<n.ORDER}function a($){return et($,r)}function c($){return to($,r)}const{ProjectivePoint:l,normPrivateKeyToScalar:u,weierstrassEquation:d,isWithinCurveOrder:w}=Um({...e,toBytes($,F,O){const P=F.toAffine(),z=n.toBytes(P.x),X=ns;return O?X(Uint8Array.from([F.hasEvenY()?2:3]),z):X(Uint8Array.from([4]),z,n.toBytes(P.y))},fromBytes($){const F=$.length,O=$[0],P=$.subarray(1);if(F===s&&(O===2||O===3)){const z=Zn(P);if(!o(z))throw new Error("Point is not on curve");const X=d(z);let ie=n.sqrt(X);const le=(ie&bt)===bt;return(O&1)===1!==le&&(ie=n.neg(ie)),{x:z,y:ie}}else if(F===i&&O===4){const z=n.fromBytes(P.subarray(0,n.BYTES)),X=n.fromBytes(P.subarray(n.BYTES,2*n.BYTES));return{x:z,y:X}}else throw new Error(`Point of length ${F} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`)}}),y=$=>Cr(Er($,e.nByteLength));function T($){const F=r>>bt;return $>F}function _($){return T($)?a(-$):$}const I=($,F,O)=>Zn($.slice(F,O));class S{constructor(F,O,P){this.r=F,this.s=O,this.recovery=P,this.assertValidity()}static fromCompact(F){const O=e.nByteLength;return F=_t("compactSignature",F,O*2),new S(I(F,0,O),I(F,O,2*O))}static fromDER(F){const{r:O,s:P}=Wn.toSig(_t("DER",F));return new S(O,P)}assertValidity(){if(!w(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!w(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(F){return new S(this.r,this.s,F)}recoverPublicKey(F){const{r:O,s:P,recovery:z}=this,X=k(_t("msgHash",F));if(z==null||![0,1,2,3].includes(z))throw new Error("recovery id invalid");const ie=z===2||z===3?O+e.n:O;if(ie>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const le=z&1?"03":"02",it=l.fromHex(le+y(ie)),ze=c(ie),vn=a(-X*ze),wt=a(P*ze),ot=l.BASE.multiplyAndAddUnsafe(it,vn,wt);if(!ot)throw new Error("point at infinify");return ot.assertValidity(),ot}hasHighS(){return T(this.s)}normalizeS(){return this.hasHighS()?new S(this.r,a(-this.s),this.recovery):this}toDERRawBytes(){return ts(this.toDERHex())}toDERHex(){return Wn.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return ts(this.toCompactHex())}toCompactHex(){return y(this.r)+y(this.s)}}const b={isValidPrivateKey($){try{return u($),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{const $=Yl(e.n);return Lm(e.randomBytes($),e.n)},precompute($=8,F=l.BASE){return F._setWindowSize($),F.multiply(BigInt(3)),F}};function g($,F=!0){return l.fromPrivateKey($).toRawBytes(F)}function f($){const F=$ instanceof Uint8Array,O=typeof $=="string",P=(F||O)&&$.length;return F?P===s||P===i:O?P===2*s||P===2*i:$ instanceof l}function p($,F,O=!0){if(f($))throw new Error("first arg must be private key");if(!f(F))throw new Error("second arg must be public key");return l.fromHex(F).multiply(u($)).toRawBytes(O)}const v=e.bits2int||function($){const F=Zn($),O=$.length*8-e.nBitLength;return O>0?F>>BigInt(O):F},k=e.bits2int_modN||function($){return a(v($))},A=No(e.nBitLength);function h($){if(typeof $!="bigint")throw new Error("bigint expected");if(!(an<=$&&$<A))throw new Error(`bigint expected < 2^${e.nBitLength}`);return Er($,e.nByteLength)}function E($,F,O=m){if(["recovered","canonical"].some(Dt=>Dt in O))throw new Error("sign() legacy options not supported");const{hash:P,randomBytes:z}=e;let{lowS:X,prehash:ie,extraEntropy:le}=O;X==null&&(X=!0),$=_t("msgHash",$),ie&&($=_t("prehashed msgHash",P($)));const it=k($),ze=u(F),vn=[h(ze),h(it)];if(le!=null){const Dt=le===!0?z(n.BYTES):le;vn.push(_t("extraEntropy",Dt))}const wt=ns(...vn),ot=it;function Bn(Dt){const mt=v(Dt);if(!w(mt))return;const yi=c(mt),C=l.BASE.multiply(mt).toAffine(),D=a(C.x);if(D===an)return;const N=a(yi*a(ot+D*ze));if(N===an)return;let V=(C.x===D?0:2)|Number(C.y&bt),M=N;return X&&T(N)&&(M=_(N),V^=1),new S(D,M,V)}return{seed:wt,k2sig:Bn}}const m={lowS:e.lowS,prehash:!1},x={lowS:e.lowS,prehash:!1};function L($,F,O=m){const{seed:P,k2sig:z}=E($,F,O),X=e;return Gl(X.hash.outputLen,X.nByteLength,X.hmac)(P,z)}l.BASE._setWindowSize(8);function q($,F,O,P=x){var C;const z=$;if(F=_t("msgHash",F),O=_t("publicKey",O),"strict"in P)throw new Error("options.strict was renamed to lowS");const{lowS:X,prehash:ie}=P;let le,it;try{if(typeof z=="string"||z instanceof Uint8Array)try{le=S.fromDER(z)}catch(D){if(!(D instanceof Wn.Err))throw D;le=S.fromCompact(z)}else if(typeof z=="object"&&typeof z.r=="bigint"&&typeof z.s=="bigint"){const{r:D,s:N}=z;le=new S(D,N)}else throw new Error("PARSE");it=l.fromHex(O)}catch(D){if(D.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(X&&le.hasHighS())return!1;ie&&(F=e.hash(F));const{r:ze,s:vn}=le,wt=k(F),ot=c(vn),Bn=a(wt*ot),Dt=a(ze*ot),mt=(C=l.BASE.multiplyAndAddUnsafe(it,Bn,Dt))==null?void 0:C.toAffine();return mt?a(mt.x)===ze:!1}return{CURVE:e,getPublicKey:g,getSharedSecret:p,sign:L,verify:q,ProjectivePoint:l,Signature:S,utils:b}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Wm(t){return{hash:t,hmac:(e,...n)=>ql(t,e,Xp(...n)),randomBytes:Zp}}function zm(t,e){const n=r=>Hm({...t,...Wm(r)});return Object.freeze({...n(e),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Zl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Ha=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Gm=BigInt(1),no=BigInt(2),Wa=(t,e)=>(t+e/no)/e;function Km(t){const e=Zl,n=BigInt(3),r=BigInt(6),s=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=t*t*t%e,u=l*l*t%e,d=gt(u,n,e)*u%e,w=gt(d,n,e)*u%e,y=gt(w,no,e)*l%e,T=gt(y,s,e)*y%e,_=gt(T,i,e)*T%e,I=gt(_,a,e)*_%e,S=gt(I,c,e)*I%e,b=gt(S,a,e)*_%e,g=gt(b,n,e)*u%e,f=gt(g,o,e)*T%e,p=gt(f,r,e)*l%e,v=gt(p,no,e);if(!ro.eql(ro.sqr(v),t))throw new Error("Cannot find square root");return v}const ro=Bm(Zl,void 0,void 0,{sqrt:Km}),xn=zm({a:BigInt(0),b:BigInt(7),Fp:ro,n:Ha,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=Ha,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Gm*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),s=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=n,o=BigInt("0x100000000000000000000000000000000"),a=Wa(i*t,e),c=Wa(-r*t,e);let l=et(t-a*n-c*s,e),u=et(-a*r-c*i,e);const d=l>o,w=u>o;if(d&&(l=e-l),w&&(u=e-u),l>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:d,k1:l,k2neg:w,k2:u}}}},sm);BigInt(0);xn.ProjectivePoint;const za="0x0000000000000000000000000000000000000000000000000000000000000000",Ga=BigInt(0),Ka=BigInt(1),so=BigInt(2),ja=BigInt(27),Ya=BigInt(28),_s=BigInt(35),Jl=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),jm=Jl/so,Ym=Symbol.for("nodejs.util.inspect.custom"),Nn={};function Pi(t){return Il(Rl(t),32)}var hr,Nt,yr,Sn;const ht=class ht{constructor(e,n,r,s){ve(this,hr);ve(this,Nt);ve(this,yr);ve(this,Sn);ui(e,Nn,"Signature"),ae(this,hr,n),ae(this,Nt,r),ae(this,yr,s),ae(this,Sn,null)}get r(){return U(this,hr)}set r(e){j(jr(e)===32,"invalid r","value",e),ae(this,hr,pe(e))}get s(){return j(parseInt(U(this,Nt).substring(0,3))<8,"non-canonical s; use ._s","s",U(this,Nt)),U(this,Nt)}set s(e){j(jr(e)===32,"invalid s","value",e),ae(this,Nt,pe(e))}get _s(){return U(this,Nt)}isValid(){return BigInt(U(this,Nt))<=jm}get v(){return U(this,yr)}set v(e){const n=Ct(e,"value");j(n===27||n===28,"invalid v","v",e),ae(this,yr,n)}get networkV(){return U(this,Sn)}get legacyChainId(){const e=this.networkV;return e==null?null:ht.getChainId(e)}get yParity(){return this.v===27?0:1}get yParityAndS(){const e=We(this.s);return this.yParity&&(e[0]|=128),pe(e)}get compactSerialized(){return dn([this.r,this.yParityAndS])}get serialized(){return dn([this.r,this.s,this.yParity?"0x1c":"0x1b"])}getCanonical(){if(this.isValid())return this;const e=Jl-BigInt(this._s),n=55-this.v,r=new ht(Nn,this.r,Pi(e),n);return this.networkV&&ae(r,Sn,this.networkV),r}clone(){const e=new ht(Nn,this.r,this._s,this.v);return this.networkV&&ae(e,Sn,this.networkV),e}toJSON(){const e=this.networkV;return{_type:"signature",networkV:e!=null?e.toString():null,r:this.r,s:this._s,v:this.v}}[Ym](){return this.toString()}toString(){return this.isValid()?`Signature { r: ${this.r}, s: ${this._s}, v: ${this.v} }`:`Signature { r: ${this.r}, s: ${this._s}, v: ${this.v}, valid: false }`}static getChainId(e){const n=Wt(e,"v");return n==ja||n==Ya?Ga:(j(n>=_s,"invalid EIP-155 v","v",e),(n-_s)/so)}static getChainIdV(e,n){return Wt(e)*so+BigInt(35+n-27)}static getNormalizedV(e){const n=Wt(e);return n===Ga||n===ja?27:n===Ka||n===Ya?28:(j(n>=_s,"invalid v","v",e),n&Ka?27:28)}static from(e){function n(l,u){j(l,u,"signature",e)}if(e==null)return new ht(Nn,za,za,27);if(typeof e=="string"){const l=We(e,"signature");if(l.length===64){const u=pe(l.slice(0,32)),d=l.slice(32,64),w=d[0]&128?28:27;return d[0]&=127,new ht(Nn,u,pe(d),w)}if(l.length===65){const u=pe(l.slice(0,32)),d=pe(l.slice(32,64)),w=ht.getNormalizedV(l[64]);return new ht(Nn,u,d,w)}n(!1,"invalid raw signature length")}if(e instanceof ht)return e.clone();const r=e.r;n(r!=null,"missing r");const s=Pi(r),i=function(l,u){if(l!=null)return Pi(l);if(u!=null){n(Hn(u,32),"invalid yParityAndS");const d=We(u);return d[0]&=127,pe(d)}n(!1,"missing s")}(e.s,e.yParityAndS),{networkV:o,v:a}=function(l,u,d){if(l!=null){const w=Wt(l);return{networkV:w>=_s?w:void 0,v:ht.getNormalizedV(w)}}if(u!=null)return n(Hn(u,32),"invalid yParityAndS"),{v:We(u)[0]&128?28:27};if(d!=null){switch(Ct(d,"sig.yParity")){case 0:return{v:27};case 1:return{v:28}}n(!1,"invalid yParity")}n(!1,"missing v")}(e.v,e.yParityAndS,e.yParity),c=new ht(Nn,s,i,a);return o&&ae(c,Sn,o),n(e.yParity==null||Ct(e.yParity,"sig.yParity")===c.yParity,"yParity mismatch"),n(e.yParityAndS==null||e.yParityAndS===c.yParityAndS,"yParityAndS mismatch"),c}};hr=new WeakMap,Nt=new WeakMap,yr=new WeakMap,Sn=new WeakMap;let zs=ht;var rn;const Un=class Un{constructor(e){ve(this,rn);j(jr(e)===32,"invalid private key","privateKey","[REDACTED]"),ae(this,rn,pe(e))}get privateKey(){return U(this,rn)}get publicKey(){return Un.computePublicKey(U(this,rn))}get compressedPublicKey(){return Un.computePublicKey(U(this,rn),!0)}sign(e){j(jr(e)===32,"invalid digest length","digest",e);const n=xn.sign(je(e),je(U(this,rn)),{lowS:!0});return zs.from({r:Hs(n.r,32),s:Hs(n.s,32),v:n.recovery?28:27})}computeSharedSecret(e){const n=Un.computePublicKey(e);return pe(xn.getSharedSecret(je(U(this,rn)),We(n),!1))}static computePublicKey(e,n){let r=We(e,"key");if(r.length===32){const i=xn.getPublicKey(r,!!n);return pe(i)}if(r.length===64){const i=new Uint8Array(65);i[0]=4,i.set(r,1),r=i}const s=xn.ProjectivePoint.fromHex(r);return pe(s.toRawBytes(n))}static recoverPublicKey(e,n){j(jr(e)===32,"invalid digest length","digest",e);const r=zs.from(n);let s=xn.Signature.fromCompact(je(dn([r.r,r.s])));s=s.addRecoveryBit(r.yParity);const i=s.recoverPublicKey(je(e));return j(i!=null,"invalid signature for digest","signature",n),"0x"+i.toHex(!1)}static addPoints(e,n,r){const s=xn.ProjectivePoint.fromHex(Un.computePublicKey(e).substring(2)),i=xn.ProjectivePoint.fromHex(Un.computePublicKey(n).substring(2));return"0x"+s.add(i).toHex(!!r)}};rn=new WeakMap;let io=Un;const Xm=BigInt(0),Zm=BigInt(36);function Xa(t){t=t.toLowerCase();const e=t.substring(2).split(""),n=new Uint8Array(40);for(let s=0;s<40;s++)n[s]=e[s].charCodeAt(0);const r=We(Yt(n));for(let s=0;s<40;s+=2)r[s>>1]>>4>=8&&(e[s]=e[s].toUpperCase()),(r[s>>1]&15)>=8&&(e[s+1]=e[s+1].toUpperCase());return"0x"+e.join("")}const $o={};for(let t=0;t<10;t++)$o[String(t)]=String(t);for(let t=0;t<26;t++)$o[String.fromCharCode(65+t)]=String(10+t);const Za=15;function Jm(t){t=t.toUpperCase(),t=t.substring(4)+t.substring(0,2)+"00";let e=t.split("").map(r=>$o[r]).join("");for(;e.length>=Za;){let r=e.substring(0,Za);e=parseInt(r,10)%97+e.substring(r.length)}let n=String(98-parseInt(e,10)%97);for(;n.length<2;)n="0"+n;return n}const Qm=function(){const t={};for(let e=0;e<36;e++){const n="0123456789abcdefghijklmnopqrstuvwxyz"[e];t[n]=BigInt(e)}return t}();function eg(t){t=t.toLowerCase();let e=Xm;for(let n=0;n<t.length;n++)e=e*Zm+Qm[t[n]];return e}function Sr(t){if(j(typeof t=="string","invalid address","address",t),t.match(/^(0x)?[0-9a-fA-F]{40}$/)){t.startsWith("0x")||(t="0x"+t);const e=Xa(t);return j(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/)||e===t,"bad address checksum","address",t),e}if(t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){j(t.substring(2,4)===Jm(t),"bad icap checksum","address",t);let e=eg(t.substring(4)).toString(16);for(;e.length<40;)e="0"+e;return Xa("0x"+e)}j(!1,"invalid address","address",t)}const Jt={};function J(t,e){let n=!1;return e<0&&(n=!0,e*=-1),new rt(Jt,`${n?"":"u"}int${e}`,t,{signed:n,width:e})}function ue(t,e){return new rt(Jt,`bytes${e||""}`,t,{size:e})}const Ja=Symbol.for("_ethers_typed");var jn;const Qt=class Qt{constructor(e,n,r,s){ee(this,"type");ee(this,"value");ve(this,jn);ee(this,"_typedSymbol");s==null&&(s=null),ui(Jt,e,"Typed"),Ae(this,{_typedSymbol:Ja,type:n,value:r}),ae(this,jn,s),this.format()}format(){if(this.type==="array")throw new Error("");if(this.type==="dynamicArray")throw new Error("");return this.type==="tuple"?`tuple(${this.value.map(e=>e.format()).join(",")})`:this.type}defaultValue(){return 0}minValue(){return 0}maxValue(){return 0}isBigInt(){return!!this.type.match(/^u?int[0-9]+$/)}isData(){return this.type.startsWith("bytes")}isString(){return this.type==="string"}get tupleName(){if(this.type!=="tuple")throw TypeError("not a tuple");return U(this,jn)}get arrayLength(){if(this.type!=="array")throw TypeError("not an array");return U(this,jn)===!0?-1:U(this,jn)===!1?this.value.length:null}static from(e,n){return new Qt(Jt,e,n)}static uint8(e){return J(e,8)}static uint16(e){return J(e,16)}static uint24(e){return J(e,24)}static uint32(e){return J(e,32)}static uint40(e){return J(e,40)}static uint48(e){return J(e,48)}static uint56(e){return J(e,56)}static uint64(e){return J(e,64)}static uint72(e){return J(e,72)}static uint80(e){return J(e,80)}static uint88(e){return J(e,88)}static uint96(e){return J(e,96)}static uint104(e){return J(e,104)}static uint112(e){return J(e,112)}static uint120(e){return J(e,120)}static uint128(e){return J(e,128)}static uint136(e){return J(e,136)}static uint144(e){return J(e,144)}static uint152(e){return J(e,152)}static uint160(e){return J(e,160)}static uint168(e){return J(e,168)}static uint176(e){return J(e,176)}static uint184(e){return J(e,184)}static uint192(e){return J(e,192)}static uint200(e){return J(e,200)}static uint208(e){return J(e,208)}static uint216(e){return J(e,216)}static uint224(e){return J(e,224)}static uint232(e){return J(e,232)}static uint240(e){return J(e,240)}static uint248(e){return J(e,248)}static uint256(e){return J(e,256)}static uint(e){return J(e,256)}static int8(e){return J(e,-8)}static int16(e){return J(e,-16)}static int24(e){return J(e,-24)}static int32(e){return J(e,-32)}static int40(e){return J(e,-40)}static int48(e){return J(e,-48)}static int56(e){return J(e,-56)}static int64(e){return J(e,-64)}static int72(e){return J(e,-72)}static int80(e){return J(e,-80)}static int88(e){return J(e,-88)}static int96(e){return J(e,-96)}static int104(e){return J(e,-104)}static int112(e){return J(e,-112)}static int120(e){return J(e,-120)}static int128(e){return J(e,-128)}static int136(e){return J(e,-136)}static int144(e){return J(e,-144)}static int152(e){return J(e,-152)}static int160(e){return J(e,-160)}static int168(e){return J(e,-168)}static int176(e){return J(e,-176)}static int184(e){return J(e,-184)}static int192(e){return J(e,-192)}static int200(e){return J(e,-200)}static int208(e){return J(e,-208)}static int216(e){return J(e,-216)}static int224(e){return J(e,-224)}static int232(e){return J(e,-232)}static int240(e){return J(e,-240)}static int248(e){return J(e,-248)}static int256(e){return J(e,-256)}static int(e){return J(e,-256)}static bytes1(e){return ue(e,1)}static bytes2(e){return ue(e,2)}static bytes3(e){return ue(e,3)}static bytes4(e){return ue(e,4)}static bytes5(e){return ue(e,5)}static bytes6(e){return ue(e,6)}static bytes7(e){return ue(e,7)}static bytes8(e){return ue(e,8)}static bytes9(e){return ue(e,9)}static bytes10(e){return ue(e,10)}static bytes11(e){return ue(e,11)}static bytes12(e){return ue(e,12)}static bytes13(e){return ue(e,13)}static bytes14(e){return ue(e,14)}static bytes15(e){return ue(e,15)}static bytes16(e){return ue(e,16)}static bytes17(e){return ue(e,17)}static bytes18(e){return ue(e,18)}static bytes19(e){return ue(e,19)}static bytes20(e){return ue(e,20)}static bytes21(e){return ue(e,21)}static bytes22(e){return ue(e,22)}static bytes23(e){return ue(e,23)}static bytes24(e){return ue(e,24)}static bytes25(e){return ue(e,25)}static bytes26(e){return ue(e,26)}static bytes27(e){return ue(e,27)}static bytes28(e){return ue(e,28)}static bytes29(e){return ue(e,29)}static bytes30(e){return ue(e,30)}static bytes31(e){return ue(e,31)}static bytes32(e){return ue(e,32)}static address(e){return new Qt(Jt,"address",e)}static bool(e){return new Qt(Jt,"bool",!!e)}static bytes(e){return new Qt(Jt,"bytes",e)}static string(e){return new Qt(Jt,"string",e)}static array(e,n){throw new Error("not implemented yet")}static tuple(e,n){throw new Error("not implemented yet")}static overrides(e){return new Qt(Jt,"overrides",Object.assign({},e))}static isTyped(e){return e&&typeof e=="object"&&"_typedSymbol"in e&&e._typedSymbol===Ja}static dereference(e,n){if(Qt.isTyped(e)){if(e.type!==n)throw new Error(`invalid type: expecetd ${n}, got ${e.type}`);return e.value}return e}};jn=new WeakMap;let rt=Qt;class tg extends bn{constructor(e){super("address","address",e,!1)}defaultValue(){return"0x0000000000000000000000000000000000000000"}encode(e,n){let r=rt.dereference(n,"string");try{r=Sr(r)}catch(s){return this._throwError(s.message,n)}return e.writeValue(r)}decode(e){return Sr(Hs(e.readValue(),20))}}class ng extends bn{constructor(n){super(n.name,n.type,"_",n.dynamic);ee(this,"coder");this.coder=n}defaultValue(){return this.coder.defaultValue()}encode(n,r){return this.coder.encode(n,r)}decode(n){return this.coder.decode(n)}}function Ql(t,e,n){let r=[];if(Array.isArray(n))r=n;else if(n&&typeof n=="object"){let c={};r=e.map(l=>{const u=l.localName;return De(u,"cannot encode object for signature with missing names","INVALID_ARGUMENT",{argument:"values",info:{coder:l},value:n}),De(!c[u],"cannot encode object for signature with duplicate names","INVALID_ARGUMENT",{argument:"values",info:{coder:l},value:n}),c[u]=!0,n[u]})}else j(!1,"invalid tuple value","tuple",n);j(e.length===r.length,"types/value length mismatch","tuple",n);let s=new Zi,i=new Zi,o=[];e.forEach((c,l)=>{let u=r[l];if(c.dynamic){let d=i.length;c.encode(i,u);let w=s.writeUpdatableValue();o.push(y=>{w(y+d)})}else c.encode(s,u)}),o.forEach(c=>{c(s.length)});let a=t.appendWriter(s);return a+=t.appendWriter(i),a}function eu(t,e){let n=[],r=[],s=t.subReader(0);return e.forEach(i=>{let o=null;if(i.dynamic){let a=t.readIndex(),c=s.subReader(a);try{o=i.decode(c)}catch(l){if(Ra(l,"BUFFER_OVERRUN"))throw l;o=l,o.baseType=i.name,o.name=i.localName,o.type=i.type}}else try{o=i.decode(t)}catch(a){if(Ra(a,"BUFFER_OVERRUN"))throw a;o=a,o.baseType=i.name,o.name=i.localName,o.type=i.type}if(o==null)throw new Error("investigate");n.push(o),r.push(i.localName||null)}),Ar.fromItems(n,r)}class rg extends bn{constructor(n,r,s){const i=n.type+"["+(r>=0?r:"")+"]",o=r===-1||n.dynamic;super("array",i,s,o);ee(this,"coder");ee(this,"length");Ae(this,{coder:n,length:r})}defaultValue(){const n=this.coder.defaultValue(),r=[];for(let s=0;s<this.length;s++)r.push(n);return r}encode(n,r){const s=rt.dereference(r,"array");Array.isArray(s)||this._throwError("expected array value",s);let i=this.length;i===-1&&(i=s.length,n.writeValue(s.length)),Cl(s.length,i,"coder array"+(this.localName?" "+this.localName:""));let o=[];for(let a=0;a<s.length;a++)o.push(this.coder);return Ql(n,o,s)}decode(n){let r=this.length;r===-1&&(r=n.readIndex(),De(r*Ye<=n.dataLength,"insufficient data length","BUFFER_OVERRUN",{buffer:n.bytes,offset:r*Ye,length:n.dataLength}));let s=[];for(let i=0;i<r;i++)s.push(new ng(this.coder));return eu(n,s)}}class sg extends bn{constructor(e){super("bool","bool",e,!1)}defaultValue(){return!1}encode(e,n){const r=rt.dereference(n,"bool");return e.writeValue(r?1:0)}decode(e){return!!e.readValue()}}class tu extends bn{constructor(e,n){super(e,e,n,!0)}defaultValue(){return"0x"}encode(e,n){n=je(n);let r=e.writeValue(n.length);return r+=e.writeBytes(n),r}decode(e){return e.readBytes(e.readIndex(),!0)}}class ig extends tu{constructor(e){super("bytes",e)}decode(e){return pe(super.decode(e))}}class og extends bn{constructor(n,r){let s="bytes"+String(n);super(s,s,r,!1);ee(this,"size");Ae(this,{size:n},{size:"number"})}defaultValue(){return"0x0000000000000000000000000000000000000000000000000000000000000000".substring(0,2+this.size*2)}encode(n,r){let s=je(rt.dereference(r,this.type));return s.length!==this.size&&this._throwError("incorrect data length",r),n.writeBytes(s)}decode(n){return pe(n.readBytes(this.size))}}const ag=new Uint8Array([]);class cg extends bn{constructor(e){super("null","",e,!1)}defaultValue(){return null}encode(e,n){return n!=null&&this._throwError("not null",n),e.writeBytes(ag)}decode(e){return e.readBytes(0),null}}const lg=BigInt(0),ug=BigInt(1),dg=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");class fg extends bn{constructor(n,r,s){const i=(r?"int":"uint")+n*8;super(i,i,s,!1);ee(this,"size");ee(this,"signed");Ae(this,{size:n,signed:r},{size:"number",signed:"boolean"})}defaultValue(){return 0}encode(n,r){let s=Wt(rt.dereference(r,this.type)),i=bs(dg,Ye*8);if(this.signed){let o=bs(i,this.size*8-1);(s>o||s<-(o+ug))&&this._throwError("value out-of-bounds",r),s=Np(s,8*Ye)}else(s<lg||s>bs(i,this.size*8))&&this._throwError("value out-of-bounds",r);return n.writeValue(s)}decode(n){let r=bs(n.readValue(),this.size*8);return this.signed&&(r=Fp(r,this.size*8)),r}}class pg extends tu{constructor(e){super("string",e)}defaultValue(){return""}encode(e,n){return super.encode(e,fi(rt.dereference(n,"string")))}decode(e){return Wp(super.decode(e))}}class ks extends bn{constructor(n,r){let s=!1;const i=[];n.forEach(a=>{a.dynamic&&(s=!0),i.push(a.type)});const o="tuple("+i.join(",")+")";super("tuple",o,r,s);ee(this,"coders");Ae(this,{coders:Object.freeze(n.slice())})}defaultValue(){const n=[];this.coders.forEach(s=>{n.push(s.defaultValue())});const r=this.coders.reduce((s,i)=>{const o=i.localName;return o&&(s[o]||(s[o]=0),s[o]++),s},{});return this.coders.forEach((s,i)=>{let o=s.localName;!o||r[o]!==1||(o==="length"&&(o="_length"),n[o]==null&&(n[o]=n[i]))}),Object.freeze(n)}encode(n,r){const s=rt.dereference(r,"tuple");return Ql(n,this.coders,s)}decode(n){return eu(n,this.coders)}}function rs(t){return Yt(fi(t))}function Xe(t){const e=new Set;return t.forEach(n=>e.add(n)),Object.freeze(e)}const mg="external public payable override",gg=Xe(mg.split(" ")),nu="constant external internal payable private public pure view override",hg=Xe(nu.split(" ")),ru="constructor error event fallback function receive struct",su=Xe(ru.split(" ")),iu="calldata memory storage payable indexed",yg=Xe(iu.split(" ")),bg="tuple returns",vg=[ru,iu,bg,nu].join(" "),wg=Xe(vg.split(" ")),_g={"(":"OPEN_PAREN",")":"CLOSE_PAREN","[":"OPEN_BRACKET","]":"CLOSE_BRACKET",",":"COMMA","@":"AT"},kg=new RegExp("^(\\s*)"),xg=new RegExp("^([0-9]+)"),Ag=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),ou=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),au=new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");var Le,kt,is,oo;const Gs=class Gs{constructor(e){ve(this,is);ve(this,Le);ve(this,kt);ae(this,Le,0),ae(this,kt,e.slice())}get offset(){return U(this,Le)}get length(){return U(this,kt).length-U(this,Le)}clone(){return new Gs(U(this,kt))}reset(){ae(this,Le,0)}popKeyword(e){const n=this.peek();if(n.type!=="KEYWORD"||!e.has(n.text))throw new Error(`expected keyword ${n.text}`);return this.pop().text}popType(e){if(this.peek().type!==e){const n=this.peek();throw new Error(`expected ${e}; got ${n.type} ${JSON.stringify(n.text)}`)}return this.pop().text}popParen(){const e=this.peek();if(e.type!=="OPEN_PAREN")throw new Error("bad start");const n=Te(this,is,oo).call(this,U(this,Le)+1,e.match+1);return ae(this,Le,e.match+1),n}popParams(){const e=this.peek();if(e.type!=="OPEN_PAREN")throw new Error("bad start");const n=[];for(;U(this,Le)<e.match-1;){const r=this.peek().linkNext;n.push(Te(this,is,oo).call(this,U(this,Le)+1,r)),ae(this,Le,r)}return ae(this,Le,e.match+1),n}peek(){if(U(this,Le)>=U(this,kt).length)throw new Error("out-of-bounds");return U(this,kt)[U(this,Le)]}peekKeyword(e){const n=this.peekType("KEYWORD");return n!=null&&e.has(n)?n:null}peekType(e){if(this.length===0)return null;const n=this.peek();return n.type===e?n.text:null}pop(){const e=this.peek();return Wo(this,Le)._++,e}toString(){const e=[];for(let n=U(this,Le);n<U(this,kt).length;n++){const r=U(this,kt)[n];e.push(`${r.type}:${r.text}`)}return`<TokenString ${e.join(" ")}>`}};Le=new WeakMap,kt=new WeakMap,is=new WeakSet,oo=function(e=0,n=0){return new Gs(U(this,kt).slice(e,n).map(r=>Object.freeze(Object.assign({},r,{match:r.match-e,linkBack:r.linkBack-e,linkNext:r.linkNext-e}))))};let St=Gs;function Pn(t){const e=[],n=o=>{const a=i<t.length?JSON.stringify(t[i]):"$EOI";throw new Error(`invalid token ${a} at ${i}: ${o}`)};let r=[],s=[],i=0;for(;i<t.length;){let o=t.substring(i),a=o.match(kg);a&&(i+=a[1].length,o=t.substring(i));const c={depth:r.length,linkBack:-1,linkNext:-1,match:-1,type:"",text:"",offset:i,value:-1};e.push(c);let l=_g[o[0]]||"";if(l){if(c.type=l,c.text=o[0],i++,l==="OPEN_PAREN")r.push(e.length-1),s.push(e.length-1);else if(l=="CLOSE_PAREN")r.length===0&&n("no matching open bracket"),c.match=r.pop(),e[c.match].match=e.length-1,c.depth--,c.linkBack=s.pop(),e[c.linkBack].linkNext=e.length-1;else if(l==="COMMA")c.linkBack=s.pop(),e[c.linkBack].linkNext=e.length-1,s.push(e.length-1);else if(l==="OPEN_BRACKET")c.type="BRACKET";else if(l==="CLOSE_BRACKET"){let u=e.pop().text;if(e.length>0&&e[e.length-1].type==="NUMBER"){const d=e.pop().text;u=d+u,e[e.length-1].value=Ct(d)}if(e.length===0||e[e.length-1].type!=="BRACKET")throw new Error("missing opening bracket");e[e.length-1].text+=u}continue}if(a=o.match(Ag),a){if(c.text=a[1],i+=c.text.length,wg.has(c.text)){c.type="KEYWORD";continue}if(c.text.match(au)){c.type="TYPE";continue}c.type="ID";continue}if(a=o.match(xg),a){c.text=a[1],c.type="NUMBER",i+=c.text.length;continue}throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${i}`)}return new St(e.map(o=>Object.freeze(o)))}function Qa(t,e){let n=[];for(const r in e.keys())t.has(r)&&n.push(r);if(n.length>1)throw new Error(`conflicting types: ${n.join(", ")}`)}function gi(t,e){if(e.peekKeyword(su)){const n=e.pop().text;if(n!==t)throw new Error(`expected ${t}, got ${n}`)}return e.popType("ID")}function hn(t,e){const n=new Set;for(;;){const r=t.peekType("KEYWORD");if(r==null||e&&!e.has(r))break;if(t.pop(),n.has(r))throw new Error(`duplicate keywords: ${JSON.stringify(r)}`);n.add(r)}return Object.freeze(n)}function cu(t){let e=hn(t,hg);return Qa(e,Xe("constant payable nonpayable".split(" "))),Qa(e,Xe("pure view payable nonpayable".split(" "))),e.has("view")?"view":e.has("pure")?"pure":e.has("payable")?"payable":e.has("nonpayable")?"nonpayable":e.has("constant")?"view":"nonpayable"}function fn(t,e){return t.popParams().map(n=>$e.from(n,e))}function lu(t){if(t.peekType("AT")){if(t.pop(),t.peekType("NUMBER"))return Wt(t.pop().text);throw new Error("invalid gas")}return null}function er(t){if(t.length)throw new Error(`unexpected tokens at offset ${t.offset}: ${t.toString()}`)}const Tg=new RegExp(/^(.*)\[([0-9]*)\]$/);function ec(t){const e=t.match(au);if(j(e,"invalid type","type",t),t==="uint")return"uint256";if(t==="int")return"int256";if(e[2]){const n=parseInt(e[2]);j(n!==0&&n<=32,"invalid bytes length","type",t)}else if(e[3]){const n=parseInt(e[3]);j(n!==0&&n<=256&&n%8===0,"invalid numeric width","type",t)}return t}const Ce={},st=Symbol.for("_ethers_internal"),tc="_ParamTypeInternal",nc="_ErrorInternal",rc="_EventInternal",sc="_ConstructorInternal",ic="_FallbackInternal",oc="_FunctionInternal",ac="_StructInternal";var br,Rs;const yt=class yt{constructor(e,n,r,s,i,o,a,c){ve(this,br);ee(this,"name");ee(this,"type");ee(this,"baseType");ee(this,"indexed");ee(this,"components");ee(this,"arrayLength");ee(this,"arrayChildren");if(ui(e,Ce,"ParamType"),Object.defineProperty(this,st,{value:tc}),o&&(o=Object.freeze(o.slice())),s==="array"){if(a==null||c==null)throw new Error("")}else if(a!=null||c!=null)throw new Error("");if(s==="tuple"){if(o==null)throw new Error("")}else if(o!=null)throw new Error("");Ae(this,{name:n,type:r,baseType:s,indexed:i,components:o,arrayLength:a,arrayChildren:c})}format(e){if(e==null&&(e="sighash"),e==="json"){const r=this.name||"";if(this.isArray()){const i=JSON.parse(this.arrayChildren.format("json"));return i.name=r,i.type+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`,JSON.stringify(i)}const s={type:this.baseType==="tuple"?"tuple":this.type,name:r};return typeof this.indexed=="boolean"&&(s.indexed=this.indexed),this.isTuple()&&(s.components=this.components.map(i=>JSON.parse(i.format(e)))),JSON.stringify(s)}let n="";return this.isArray()?(n+=this.arrayChildren.format(e),n+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`):this.isTuple()?n+="("+this.components.map(r=>r.format(e)).join(e==="full"?", ":",")+")":n+=this.type,e!=="sighash"&&(this.indexed===!0&&(n+=" indexed"),e==="full"&&this.name&&(n+=" "+this.name)),n}isArray(){return this.baseType==="array"}isTuple(){return this.baseType==="tuple"}isIndexable(){return this.indexed!=null}walk(e,n){if(this.isArray()){if(!Array.isArray(e))throw new Error("invalid array value");if(this.arrayLength!==-1&&e.length!==this.arrayLength)throw new Error("array is wrong length");const r=this;return e.map(s=>r.arrayChildren.walk(s,n))}if(this.isTuple()){if(!Array.isArray(e))throw new Error("invalid tuple value");if(e.length!==this.components.length)throw new Error("array is wrong length");const r=this;return e.map((s,i)=>r.components[i].walk(s,n))}return n(this.type,e)}async walkAsync(e,n){const r=[],s=[e];return Te(this,br,Rs).call(this,r,e,n,i=>{s[0]=i}),r.length&&await Promise.all(r),s[0]}static from(e,n){if(yt.isParamType(e))return e;if(typeof e=="string")try{return yt.from(Pn(e),n)}catch{j(!1,"invalid param type","obj",e)}else if(e instanceof St){let a="",c="",l=null;hn(e,Xe(["tuple"])).has("tuple")||e.peekType("OPEN_PAREN")?(c="tuple",l=e.popParams().map(_=>yt.from(_)),a=`tuple(${l.map(_=>_.format()).join(",")})`):(a=ec(e.popType("TYPE")),c=a);let u=null,d=null;for(;e.length&&e.peekType("BRACKET");){const _=e.pop();u=new yt(Ce,"",a,c,null,l,d,u),d=_.value,a+=_.text,c="array",l=null}let w=null;if(hn(e,yg).has("indexed")){if(!n)throw new Error("");w=!0}const T=e.peekType("ID")?e.pop().text:"";if(e.length)throw new Error("leftover tokens");return new yt(Ce,T,a,c,w,l,d,u)}const r=e.name;j(!r||typeof r=="string"&&r.match(ou),"invalid name","obj.name",r);let s=e.indexed;s!=null&&(j(n,"parameter cannot be indexed","obj.indexed",e.indexed),s=!!s);let i=e.type,o=i.match(Tg);if(o){const a=parseInt(o[2]||"-1"),c=yt.from({type:o[1],components:e.components});return new yt(Ce,r||"",i,"array",s,null,a,c)}if(i==="tuple"||i.startsWith("tuple(")||i.startsWith("(")){const a=e.components!=null?e.components.map(l=>yt.from(l)):null;return new yt(Ce,r||"",i,"tuple",s,a,null,null)}return i=ec(e.type),new yt(Ce,r||"",i,i,s,null,null,null)}static isParamType(e){return e&&e[st]===tc}};br=new WeakSet,Rs=function(e,n,r,s){if(this.isArray()){if(!Array.isArray(n))throw new Error("invalid array value");if(this.arrayLength!==-1&&n.length!==this.arrayLength)throw new Error("array is wrong length");const o=this.arrayChildren,a=n.slice();a.forEach((c,l)=>{var u;Te(u=o,br,Rs).call(u,e,c,r,d=>{a[l]=d})}),s(a);return}if(this.isTuple()){const o=this.components;let a;if(Array.isArray(n))a=n.slice();else{if(n==null||typeof n!="object")throw new Error("invalid tuple value");a=o.map(c=>{if(!c.name)throw new Error("cannot use object value with unnamed components");if(!(c.name in n))throw new Error(`missing value for component ${c.name}`);return n[c.name]})}if(a.length!==this.components.length)throw new Error("array is wrong length");a.forEach((c,l)=>{var u;Te(u=o[l],br,Rs).call(u,e,c,r,d=>{a[l]=d})}),s(a);return}const i=r(this.type,n);i.then?e.push(async function(){s(await i)}()):s(i)};let $e=yt;class tr{constructor(e,n,r){ee(this,"type");ee(this,"inputs");ui(e,Ce,"Fragment"),r=Object.freeze(r.slice()),Ae(this,{type:n,inputs:r})}static from(e){if(typeof e=="string"){try{tr.from(JSON.parse(e))}catch{}return tr.from(Pn(e))}if(e instanceof St)switch(e.peekKeyword(su)){case"constructor":return cn.from(e);case"error":return nt.from(e);case"event":return Vt.from(e);case"fallback":case"receive":return tn.from(e);case"function":return Ht.from(e);case"struct":return Jn.from(e)}else if(typeof e=="object"){switch(e.type){case"constructor":return cn.from(e);case"error":return nt.from(e);case"event":return Vt.from(e);case"fallback":case"receive":return tn.from(e);case"function":return Ht.from(e);case"struct":return Jn.from(e)}De(!1,`unsupported type: ${e.type}`,"UNSUPPORTED_OPERATION",{operation:"Fragment.from"})}j(!1,"unsupported frgament object","obj",e)}static isConstructor(e){return cn.isFragment(e)}static isError(e){return nt.isFragment(e)}static isEvent(e){return Vt.isFragment(e)}static isFunction(e){return Ht.isFragment(e)}static isStruct(e){return Jn.isFragment(e)}}class hi extends tr{constructor(n,r,s,i){super(n,r,i);ee(this,"name");j(typeof s=="string"&&s.match(ou),"invalid identifier","name",s),i=Object.freeze(i.slice()),Ae(this,{name:s})}}function ss(t,e){return"("+e.map(n=>n.format(t)).join(t==="full"?", ":",")+")"}class nt extends hi{constructor(e,n,r){super(e,"error",n,r),Object.defineProperty(this,st,{value:nc})}get selector(){return rs(this.format("sighash")).substring(0,10)}format(e){if(e==null&&(e="sighash"),e==="json")return JSON.stringify({type:"error",name:this.name,inputs:this.inputs.map(r=>JSON.parse(r.format(e)))});const n=[];return e!=="sighash"&&n.push("error"),n.push(this.name+ss(e,this.inputs)),n.join(" ")}static from(e){if(nt.isFragment(e))return e;if(typeof e=="string")return nt.from(Pn(e));if(e instanceof St){const n=gi("error",e),r=fn(e);return er(e),new nt(Ce,n,r)}return new nt(Ce,e.name,e.inputs?e.inputs.map($e.from):[])}static isFragment(e){return e&&e[st]===nc}}class Vt extends hi{constructor(n,r,s,i){super(n,"event",r,s);ee(this,"anonymous");Object.defineProperty(this,st,{value:rc}),Ae(this,{anonymous:i})}get topicHash(){return rs(this.format("sighash"))}format(n){if(n==null&&(n="sighash"),n==="json")return JSON.stringify({type:"event",anonymous:this.anonymous,name:this.name,inputs:this.inputs.map(s=>JSON.parse(s.format(n)))});const r=[];return n!=="sighash"&&r.push("event"),r.push(this.name+ss(n,this.inputs)),n!=="sighash"&&this.anonymous&&r.push("anonymous"),r.join(" ")}static getTopicHash(n,r){return r=(r||[]).map(i=>$e.from(i)),new Vt(Ce,n,r,!1).topicHash}static from(n){if(Vt.isFragment(n))return n;if(typeof n=="string")try{return Vt.from(Pn(n))}catch{j(!1,"invalid event fragment","obj",n)}else if(n instanceof St){const r=gi("event",n),s=fn(n,!0),i=!!hn(n,Xe(["anonymous"])).has("anonymous");return er(n),new Vt(Ce,r,s,i)}return new Vt(Ce,n.name,n.inputs?n.inputs.map(r=>$e.from(r,!0)):[],!!n.anonymous)}static isFragment(n){return n&&n[st]===rc}}class cn extends tr{constructor(n,r,s,i,o){super(n,r,s);ee(this,"payable");ee(this,"gas");Object.defineProperty(this,st,{value:sc}),Ae(this,{payable:i,gas:o})}format(n){if(De(n!=null&&n!=="sighash","cannot format a constructor for sighash","UNSUPPORTED_OPERATION",{operation:"format(sighash)"}),n==="json")return JSON.stringify({type:"constructor",stateMutability:this.payable?"payable":"undefined",payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(s=>JSON.parse(s.format(n)))});const r=[`constructor${ss(n,this.inputs)}`];return this.payable&&r.push("payable"),this.gas!=null&&r.push(`@${this.gas.toString()}`),r.join(" ")}static from(n){if(cn.isFragment(n))return n;if(typeof n=="string")try{return cn.from(Pn(n))}catch{j(!1,"invalid constuctor fragment","obj",n)}else if(n instanceof St){hn(n,Xe(["constructor"]));const r=fn(n),s=!!hn(n,gg).has("payable"),i=lu(n);return er(n),new cn(Ce,"constructor",r,s,i)}return new cn(Ce,"constructor",n.inputs?n.inputs.map($e.from):[],!!n.payable,n.gas!=null?n.gas:null)}static isFragment(n){return n&&n[st]===sc}}class tn extends tr{constructor(n,r,s){super(n,"fallback",r);ee(this,"payable");Object.defineProperty(this,st,{value:ic}),Ae(this,{payable:s})}format(n){const r=this.inputs.length===0?"receive":"fallback";if(n==="json"){const s=this.payable?"payable":"nonpayable";return JSON.stringify({type:r,stateMutability:s})}return`${r}()${this.payable?" payable":""}`}static from(n){if(tn.isFragment(n))return n;if(typeof n=="string")try{return tn.from(Pn(n))}catch{j(!1,"invalid fallback fragment","obj",n)}else if(n instanceof St){const r=n.toString(),s=n.peekKeyword(Xe(["fallback","receive"]));if(j(s,"type must be fallback or receive","obj",r),n.popKeyword(Xe(["fallback","receive"]))==="receive"){const c=fn(n);return j(c.length===0,"receive cannot have arguments","obj.inputs",c),hn(n,Xe(["payable"])),er(n),new tn(Ce,[],!0)}let o=fn(n);o.length?j(o.length===1&&o[0].type==="bytes","invalid fallback inputs","obj.inputs",o.map(c=>c.format("minimal")).join(", ")):o=[$e.from("bytes")];const a=cu(n);if(j(a==="nonpayable"||a==="payable","fallback cannot be constants","obj.stateMutability",a),hn(n,Xe(["returns"])).has("returns")){const c=fn(n);j(c.length===1&&c[0].type==="bytes","invalid fallback outputs","obj.outputs",c.map(l=>l.format("minimal")).join(", "))}return er(n),new tn(Ce,o,a==="payable")}if(n.type==="receive")return new tn(Ce,[],!0);if(n.type==="fallback"){const r=[$e.from("bytes")],s=n.stateMutability==="payable";return new tn(Ce,r,s)}j(!1,"invalid fallback description","obj",n)}static isFragment(n){return n&&n[st]===ic}}class Ht extends hi{constructor(n,r,s,i,o,a){super(n,"function",r,i);ee(this,"constant");ee(this,"outputs");ee(this,"stateMutability");ee(this,"payable");ee(this,"gas");Object.defineProperty(this,st,{value:oc}),o=Object.freeze(o.slice()),Ae(this,{constant:s==="view"||s==="pure",gas:a,outputs:o,payable:s==="payable",stateMutability:s})}get selector(){return rs(this.format("sighash")).substring(0,10)}format(n){if(n==null&&(n="sighash"),n==="json")return JSON.stringify({type:"function",name:this.name,constant:this.constant,stateMutability:this.stateMutability!=="nonpayable"?this.stateMutability:void 0,payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(s=>JSON.parse(s.format(n))),outputs:this.outputs.map(s=>JSON.parse(s.format(n)))});const r=[];return n!=="sighash"&&r.push("function"),r.push(this.name+ss(n,this.inputs)),n!=="sighash"&&(this.stateMutability!=="nonpayable"&&r.push(this.stateMutability),this.outputs&&this.outputs.length&&(r.push("returns"),r.push(ss(n,this.outputs))),this.gas!=null&&r.push(`@${this.gas.toString()}`)),r.join(" ")}static getSelector(n,r){return r=(r||[]).map(i=>$e.from(i)),new Ht(Ce,n,"view",r,[],null).selector}static from(n){if(Ht.isFragment(n))return n;if(typeof n=="string")try{return Ht.from(Pn(n))}catch{j(!1,"invalid function fragment","obj",n)}else if(n instanceof St){const s=gi("function",n),i=fn(n),o=cu(n);let a=[];hn(n,Xe(["returns"])).has("returns")&&(a=fn(n));const c=lu(n);return er(n),new Ht(Ce,s,o,i,a,c)}let r=n.stateMutability;return r==null&&(r="payable",typeof n.constant=="boolean"?(r="view",n.constant||(r="payable",typeof n.payable=="boolean"&&!n.payable&&(r="nonpayable"))):typeof n.payable=="boolean"&&!n.payable&&(r="nonpayable")),new Ht(Ce,n.name,r,n.inputs?n.inputs.map($e.from):[],n.outputs?n.outputs.map($e.from):[],n.gas!=null?n.gas:null)}static isFragment(n){return n&&n[st]===oc}}class Jn extends hi{constructor(e,n,r){super(e,"struct",n,r),Object.defineProperty(this,st,{value:ac})}format(){throw new Error("@TODO")}static from(e){if(typeof e=="string")try{return Jn.from(Pn(e))}catch{j(!1,"invalid struct fragment","obj",e)}else if(e instanceof St){const n=gi("struct",e),r=fn(e);return er(e),new Jn(Ce,n,r)}return new Jn(Ce,e.name,e.inputs?e.inputs.map($e.from):[])}static isFragment(e){return e&&e[st]===ac}}const It=new Map;It.set(0,"GENERIC_PANIC");It.set(1,"ASSERT_FALSE");It.set(17,"OVERFLOW");It.set(18,"DIVIDE_BY_ZERO");It.set(33,"ENUM_RANGE_ERROR");It.set(34,"BAD_STORAGE_DATA");It.set(49,"STACK_UNDERFLOW");It.set(50,"ARRAY_RANGE_ERROR");It.set(65,"OUT_OF_MEMORY");It.set(81,"UNINITIALIZED_FUNCTION_CALL");const Cg=new RegExp(/^bytes([0-9]*)$/),Eg=new RegExp(/^(u?int)([0-9]*)$/);let Bi=null,cc=1024;function Sg(t,e,n,r){let s="missing revert data",i=null;const o=null;let a=null;if(n){s="execution reverted";const l=We(n);if(n=pe(n),l.length===0)s+=" (no data present; likely require(false) occurred",i="require(false)";else if(l.length%32!==4)s+=" (could not decode reason; invalid data length)";else if(pe(l.slice(0,4))==="0x08c379a0")try{i=r.decode(["string"],l.slice(4))[0],a={signature:"Error(string)",name:"Error",args:[i]},s+=`: ${JSON.stringify(i)}`}catch{s+=" (could not decode reason; invalid string data)"}else if(pe(l.slice(0,4))==="0x4e487b71")try{const u=Number(r.decode(["uint256"],l.slice(4))[0]);a={signature:"Panic(uint256)",name:"Panic",args:[u]},i=`Panic due to ${It.get(u)||"UNKNOWN"}(${u})`,s+=`: ${i}`}catch{s+=" (could not decode panic code)"}else s+=" (unknown custom error)"}const c={to:e.to?Sr(e.to):null,data:e.data||"0x"};return e.from&&(c.from=Sr(e.from)),Tl(s,"CALL_EXCEPTION",{action:t,data:n,reason:i,transaction:c,invocation:o,revert:a})}var In,ar;const Ks=class Ks{constructor(){ve(this,In)}getDefaultValue(e){const n=e.map(s=>Te(this,In,ar).call(this,$e.from(s)));return new ks(n,"_").defaultValue()}encode(e,n){Cl(n.length,e.length,"types/values length mismatch");const r=e.map(o=>Te(this,In,ar).call(this,$e.from(o))),s=new ks(r,"_"),i=new Zi;return s.encode(i,n),i.data}decode(e,n,r){const s=e.map(o=>Te(this,In,ar).call(this,$e.from(o)));return new ks(s,"_").decode(new Ji(n,r,cc))}static _setDefaultMaxInflation(e){j(typeof e=="number"&&Number.isInteger(e),"invalid defaultMaxInflation factor","value",e),cc=e}static defaultAbiCoder(){return Bi==null&&(Bi=new Ks),Bi}static getBuiltinCallException(e,n,r){return Sg(e,n,r,Ks.defaultAbiCoder())}};In=new WeakSet,ar=function(e){if(e.isArray())return new rg(Te(this,In,ar).call(this,e.arrayChildren),e.arrayLength,e.name);if(e.isTuple())return new ks(e.components.map(r=>Te(this,In,ar).call(this,r)),e.name);switch(e.baseType){case"address":return new tg(e.name);case"bool":return new sg(e.name);case"string":return new pg(e.name);case"bytes":return new ig(e.name);case"":return new cg(e.name)}let n=e.type.match(Eg);if(n){let r=parseInt(n[2]||"256");return j(r!==0&&r<=256&&r%8===0,"invalid "+n[1]+" bit length","param",e),new fg(r/8,n[1]==="int",e.name)}if(n=e.type.match(Cg),n){let r=parseInt(n[1]);return j(r!==0&&r<=32,"invalid bytes length","param",e),new og(r,e.name)}j(!1,"invalid type","type",e.type)};let Ir=Ks;class Ig{constructor(e,n,r){ee(this,"fragment");ee(this,"name");ee(this,"signature");ee(this,"topic");ee(this,"args");const s=e.name,i=e.format();Ae(this,{fragment:e,name:s,signature:i,topic:n,args:r})}}class Dg{constructor(e,n,r,s){ee(this,"fragment");ee(this,"name");ee(this,"args");ee(this,"signature");ee(this,"selector");ee(this,"value");const i=e.name,o=e.format();Ae(this,{fragment:e,name:i,args:r,signature:o,selector:n,value:s})}}class Rg{constructor(e,n,r){ee(this,"fragment");ee(this,"name");ee(this,"args");ee(this,"signature");ee(this,"selector");const s=e.name,i=e.format();Ae(this,{fragment:e,name:s,args:r,signature:i,selector:n})}}class lc{constructor(e){ee(this,"hash");ee(this,"_isIndexed");Ae(this,{hash:e,_isIndexed:!0})}static isIndexed(e){return!!(e&&e._isIndexed)}}const uc={0:"generic panic",1:"assert(false)",17:"arithmetic overflow",18:"division or modulo by zero",33:"enum overflow",34:"invalid encoded storage byte array accessed",49:"out-of-bounds array access; popping on an empty array",50:"out-of-bounds access of an array or bytesN",65:"out of memory",81:"uninitialized function"},dc={"0x08c379a0":{signature:"Error(string)",name:"Error",inputs:["string"],reason:t=>`reverted with reason string ${JSON.stringify(t)}`},"0x4e487b71":{signature:"Panic(uint256)",name:"Panic",inputs:["uint256"],reason:t=>{let e="unknown panic code";return t>=0&&t<=255&&uc[t.toString()]&&(e=uc[t.toString()]),`reverted with panic code 0x${t.toString(16)} (${e})`}}};var $t,qt,Mt,Me,Gt,Os,Ps;const Vn=class Vn{constructor(e){ve(this,Gt);ee(this,"fragments");ee(this,"deploy");ee(this,"fallback");ee(this,"receive");ve(this,$t);ve(this,qt);ve(this,Mt);ve(this,Me);let n=[];typeof e=="string"?n=JSON.parse(e):n=e,ae(this,Mt,new Map),ae(this,$t,new Map),ae(this,qt,new Map);const r=[];for(const o of n)try{r.push(tr.from(o))}catch(a){console.log(`[Warning] Invalid Fragment ${JSON.stringify(o)}:`,a.message)}Ae(this,{fragments:Object.freeze(r)});let s=null,i=!1;ae(this,Me,this.getAbiCoder()),this.fragments.forEach((o,a)=>{let c;switch(o.type){case"constructor":if(this.deploy){console.log("duplicate definition - constructor");return}Ae(this,{deploy:o});return;case"fallback":o.inputs.length===0?i=!0:(j(!s||o.payable!==s.payable,"conflicting fallback fragments",`fragments[${a}]`,o),s=o,i=s.payable);return;case"function":c=U(this,Mt);break;case"event":c=U(this,qt);break;case"error":c=U(this,$t);break;default:return}const l=o.format();c.has(l)||c.set(l,o)}),this.deploy||Ae(this,{deploy:cn.from("constructor()")}),Ae(this,{fallback:s,receive:i})}format(e){const n=e?"minimal":"full";return this.fragments.map(s=>s.format(n))}formatJson(){const e=this.fragments.map(n=>n.format("json"));return JSON.stringify(e.map(n=>JSON.parse(n)))}getAbiCoder(){return Ir.defaultAbiCoder()}getFunctionName(e){const n=Te(this,Gt,Os).call(this,e,null,!1);return j(n,"no matching function","key",e),n.name}hasFunction(e){return!!Te(this,Gt,Os).call(this,e,null,!1)}getFunction(e,n){return Te(this,Gt,Os).call(this,e,n||null,!0)}forEachFunction(e){const n=Array.from(U(this,Mt).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(U(this,Mt).get(s),r)}}getEventName(e){const n=Te(this,Gt,Ps).call(this,e,null,!1);return j(n,"no matching event","key",e),n.name}hasEvent(e){return!!Te(this,Gt,Ps).call(this,e,null,!1)}getEvent(e,n){return Te(this,Gt,Ps).call(this,e,n||null,!0)}forEachEvent(e){const n=Array.from(U(this,qt).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(U(this,qt).get(s),r)}}getError(e,n){if(Hn(e)){const s=e.toLowerCase();if(dc[s])return nt.from(dc[s].signature);for(const i of U(this,$t).values())if(s===i.selector)return i;return null}if(e.indexOf("(")===-1){const s=[];for(const[i,o]of U(this,$t))i.split("(")[0]===e&&s.push(o);if(s.length===0)return e==="Error"?nt.from("error Error(string)"):e==="Panic"?nt.from("error Panic(uint256)"):null;if(s.length>1){const i=s.map(o=>JSON.stringify(o.format())).join(", ");j(!1,`ambiguous error description (i.e. ${i})`,"name",e)}return s[0]}if(e=nt.from(e).format(),e==="Error(string)")return nt.from("error Error(string)");if(e==="Panic(uint256)")return nt.from("error Panic(uint256)");const r=U(this,$t).get(e);return r||null}forEachError(e){const n=Array.from(U(this,$t).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(U(this,$t).get(s),r)}}_decodeParams(e,n){return U(this,Me).decode(e,n)}_encodeParams(e,n){return U(this,Me).encode(e,n)}encodeDeploy(e){return this._encodeParams(this.deploy.inputs,e||[])}decodeErrorResult(e,n){if(typeof e=="string"){const r=this.getError(e);j(r,"unknown error","fragment",e),e=r}return j(ir(n,0,4)===e.selector,`data signature does not match error ${e.name}.`,"data",n),this._decodeParams(e.inputs,ir(n,4))}encodeErrorResult(e,n){if(typeof e=="string"){const r=this.getError(e);j(r,"unknown error","fragment",e),e=r}return dn([e.selector,this._encodeParams(e.inputs,n||[])])}decodeFunctionData(e,n){if(typeof e=="string"){const r=this.getFunction(e);j(r,"unknown function","fragment",e),e=r}return j(ir(n,0,4)===e.selector,`data signature does not match function ${e.name}.`,"data",n),this._decodeParams(e.inputs,ir(n,4))}encodeFunctionData(e,n){if(typeof e=="string"){const r=this.getFunction(e);j(r,"unknown function","fragment",e),e=r}return dn([e.selector,this._encodeParams(e.inputs,n||[])])}decodeFunctionResult(e,n){if(typeof e=="string"){const i=this.getFunction(e);j(i,"unknown function","fragment",e),e=i}let r="invalid length for result data";const s=je(n);if(s.length%32===0)try{return U(this,Me).decode(e.outputs,s)}catch{r="could not decode result data"}De(!1,r,"BAD_DATA",{value:pe(s),info:{method:e.name,signature:e.format()}})}makeError(e,n){const r=We(e,"data"),s=Ir.getBuiltinCallException("call",n,r);if(s.message.startsWith("execution reverted (unknown custom error)")){const a=pe(r.slice(0,4)),c=this.getError(a);if(c)try{const l=U(this,Me).decode(c.inputs,r.slice(4));s.revert={name:c.name,signature:c.format(),args:l},s.reason=s.revert.signature,s.message=`execution reverted: ${s.reason}`}catch{s.message="execution reverted (coult not decode custom error)"}}const o=this.parseTransaction(n);return o&&(s.invocation={method:o.name,signature:o.signature,args:o.args}),s}encodeFunctionResult(e,n){if(typeof e=="string"){const r=this.getFunction(e);j(r,"unknown function","fragment",e),e=r}return pe(U(this,Me).encode(e.outputs,n||[]))}encodeFilterTopics(e,n){if(typeof e=="string"){const i=this.getEvent(e);j(i,"unknown event","eventFragment",e),e=i}De(n.length<=e.inputs.length,`too many arguments for ${e.format()}`,"UNEXPECTED_ARGUMENT",{count:n.length,expectedCount:e.inputs.length});const r=[];e.anonymous||r.push(e.topicHash);const s=(i,o)=>i.type==="string"?rs(o):i.type==="bytes"?Yt(pe(o)):(i.type==="bool"&&typeof o=="boolean"?o=o?"0x01":"0x00":i.type.match(/^u?int/)?o=Hs(o):i.type.match(/^bytes/)?o=Lp(o,32):i.type==="address"&&U(this,Me).encode(["address"],[o]),Il(pe(o),32));for(n.forEach((i,o)=>{const a=e.inputs[o];if(!a.indexed){j(i==null,"cannot filter non-indexed parameters; must be null","contract."+a.name,i);return}i==null?r.push(null):a.baseType==="array"||a.baseType==="tuple"?j(!1,"filtering with tuples or arrays not supported","contract."+a.name,i):Array.isArray(i)?r.push(i.map(c=>s(a,c))):r.push(s(a,i))});r.length&&r[r.length-1]===null;)r.pop();return r}encodeEventLog(e,n){if(typeof e=="string"){const o=this.getEvent(e);j(o,"unknown event","eventFragment",e),e=o}const r=[],s=[],i=[];return e.anonymous||r.push(e.topicHash),j(n.length===e.inputs.length,"event arguments/values mismatch","values",n),e.inputs.forEach((o,a)=>{const c=n[a];if(o.indexed)if(o.type==="string")r.push(rs(c));else if(o.type==="bytes")r.push(Yt(c));else{if(o.baseType==="tuple"||o.baseType==="array")throw new Error("not implemented");r.push(U(this,Me).encode([o.type],[c]))}else s.push(o),i.push(c)}),{data:U(this,Me).encode(s,i),topics:r}}decodeEventLog(e,n,r){if(typeof e=="string"){const y=this.getEvent(e);j(y,"unknown event","eventFragment",e),e=y}if(r!=null&&!e.anonymous){const y=e.topicHash;j(Hn(r[0],32)&&r[0].toLowerCase()===y,"fragment/topic mismatch","topics[0]",r[0]),r=r.slice(1)}const s=[],i=[],o=[];e.inputs.forEach((y,T)=>{y.indexed?y.type==="string"||y.type==="bytes"||y.baseType==="tuple"||y.baseType==="array"?(s.push($e.from({type:"bytes32",name:y.name})),o.push(!0)):(s.push(y),o.push(!1)):(i.push(y),o.push(!1))});const a=r!=null?U(this,Me).decode(s,dn(r)):null,c=U(this,Me).decode(i,n,!0),l=[],u=[];let d=0,w=0;return e.inputs.forEach((y,T)=>{let _=null;if(y.indexed)if(a==null)_=new lc(null);else if(o[T])_=new lc(a[w++]);else try{_=a[w++]}catch(I){_=I}else try{_=c[d++]}catch(I){_=I}l.push(_),u.push(y.name||null)}),Ar.fromItems(l,u)}parseTransaction(e){const n=We(e.data,"tx.data"),r=Wt(e.value!=null?e.value:0,"tx.value"),s=this.getFunction(pe(n.slice(0,4)));if(!s)return null;const i=U(this,Me).decode(s.inputs,n.slice(4));return new Dg(s,s.selector,i,r)}parseCallResult(e){throw new Error("@TODO")}parseLog(e){const n=this.getEvent(e.topics[0]);return!n||n.anonymous?null:new Ig(n,n.topicHash,this.decodeEventLog(n,e.data,e.topics))}parseError(e){const n=pe(e),r=this.getError(ir(n,0,4));if(!r)return null;const s=U(this,Me).decode(r.inputs,ir(n,4));return new Rg(r,r.selector,s)}static from(e){return e instanceof Vn?e:typeof e=="string"?new Vn(JSON.parse(e)):typeof e.formatJson=="function"?new Vn(e.formatJson()):typeof e.format=="function"?new Vn(e.format("json")):new Vn(e)}};$t=new WeakMap,qt=new WeakMap,Mt=new WeakMap,Me=new WeakMap,Gt=new WeakSet,Os=function(e,n,r){if(Hn(e)){const i=e.toLowerCase();for(const o of U(this,Mt).values())if(i===o.selector)return o;return null}if(e.indexOf("(")===-1){const i=[];for(const[o,a]of U(this,Mt))o.split("(")[0]===e&&i.push(a);if(n){const o=n.length>0?n[n.length-1]:null;let a=n.length,c=!0;rt.isTyped(o)&&o.type==="overrides"&&(c=!1,a--);for(let l=i.length-1;l>=0;l--){const u=i[l].inputs.length;u!==a&&(!c||u!==a-1)&&i.splice(l,1)}for(let l=i.length-1;l>=0;l--){const u=i[l].inputs;for(let d=0;d<n.length;d++)if(rt.isTyped(n[d])){if(d>=u.length){if(n[d].type==="overrides")continue;i.splice(l,1);break}if(n[d].type!==u[d].baseType){i.splice(l,1);break}}}}if(i.length===1&&n&&n.length!==i[0].inputs.length){const o=n[n.length-1];(o==null||Array.isArray(o)||typeof o!="object")&&i.splice(0,1)}if(i.length===0)return null;if(i.length>1&&r){const o=i.map(a=>JSON.stringify(a.format())).join(", ");j(!1,`ambiguous function description (i.e. matches ${o})`,"key",e)}return i[0]}const s=U(this,Mt).get(Ht.from(e).format());return s||null},Ps=function(e,n,r){if(Hn(e)){const i=e.toLowerCase();for(const o of U(this,qt).values())if(i===o.topicHash)return o;return null}if(e.indexOf("(")===-1){const i=[];for(const[o,a]of U(this,qt))o.split("(")[0]===e&&i.push(a);if(n){for(let o=i.length-1;o>=0;o--)i[o].inputs.length<n.length&&i.splice(o,1);for(let o=i.length-1;o>=0;o--){const a=i[o].inputs;for(let c=0;c<n.length;c++)if(rt.isTyped(n[c])&&n[c].type!==a[c].baseType){i.splice(o,1);break}}}if(i.length===0)return null;if(i.length>1&&r){const o=i.map(a=>JSON.stringify(a.format())).join(", ");j(!1,`ambiguous event description (i.e. matches ${o})`,"key",e)}return i[0]}const s=U(this,qt).get(Vt.from(e).format());return s||null};let ao=Vn;function Og(){pt();const t=Pe(),e=me(),n=B({}),r=B({}),s=B(0),i=B("0xAb5801a7D398351b8bE11C439e05C5B9ebB6AA0c"),o=B(new Set),a={weapon:"0x1234567890123456789012345678901234567890",achievement:"0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"},c=B({weapon:{},achievement:{}}),l=(f,p)=>!f||!p?{success:!1,message:"❌ 请输入名称和头像！",hints:[],nextStep:"👉 填写名称和头像后点击保存",error:"EMPTY_INPUT"}:(n.value[i.value]={name:f,avatar:p},e.addLog(16,"设置资料",`名称: ${f}, 头像: ${p}`,"setProfile16"),{success:!0,message:"✅ 资料已保存！",hints:["mapping_storage"],nextStep:"🗺️ 你的资料已保存到 mapping！👉 注册 weapon 插件来学习插件系统！"}),u=f=>{const p=n.value[f];return e.addLog(16,"查询资料",`地址: ${S(f)}`),p||{name:"",avatar:""}},d=(f,p)=>{if(!f||!p)return{success:!1,message:"❌ 请输入插件标识符和地址！",hints:[],nextStep:"👉 填写插件标识符和合约地址",error:"EMPTY_INPUT"};if(r.value[f])return{success:!1,message:`❌ 插件 "${f}" 已存在！`,hints:[],nextStep:"👉 使用其他标识符或先注销现有插件",error:"PLUGIN_EXISTS"};r.value[f]=p,s.value++,e.addLog(16,"注册插件",`标识: ${f}, 地址: ${S(p)}`,"registerPlugin16");const v=["plugin_registration"];let k=`🔌 插件 "${f}" 注册成功！👉 点击「调用」执行插件函数！`;return s.value>=2&&(v.push("dynamic_delegation"),k="🔄 动态委托系统运行中！👉 在不同插件间切换体验互操作！"),{success:!0,message:`✅ 插件 "${f}" 注册成功！`,hints:v,nextStep:k,registeredAddress:p}},w=f=>r.value[f]||"",y=(f,p,v)=>{try{const k=f.split("(")[0],h=new ao([`function ${f}`]).getFunction(k).selector,E=new Ir,m=Sr(p),x=f.includes("string"),L=x?["address","string"]:["address"],q=x?[m,v||""]:[m],$=E.encode(L,q),F=h+$.slice(2),O=[{type:"selector",value:h,desc:"函数选择器 (4 bytes)",detail:`keccak256("${f}").slice(0,10)`},{type:"address",value:m,desc:"address 参数",detail:"zero-padded to 32 bytes"}];if(x){const P=v||"";O.push({type:"offset",value:"0x0000000000000000000000000000000000000000000000000000000000000040",desc:"string 偏移量 (64 bytes)"},{type:"length",value:"0x"+P.length.toString(16).padStart(64,"0"),desc:`string 长度 (${P.length})`},{type:"data",value:pe(fi(P)).slice(2).padEnd(64,"0"),desc:"string 数据 (padded)",detail:`"${P}"`})}return{selector:h,encodedParams:"0x"+$.slice(2),fullEncodedData:F,breakdown:O}}catch(k){return console.error("ABI编码错误:",k),console.error("参数:",{functionSignature:f,user:p,argument:v}),null}},T=(f,p,v,k)=>{if(!r.value[f])return{success:!1,message:`❌ 插件 "${f}" 未注册！`,hints:[],nextStep:`👉 先点击「插件管理中心」注册 ${f} 插件！`,error:"PLUGIN_NOT_REGISTERED"};const A=y(p,v,k);if(!A)return{success:!1,message:"❌ ABI编码失败！",hints:[],nextStep:"👉 检查函数签名格式，例如: setWeapon(address,string)",error:"ABI_ENCODE_FAILED"};if(Math.random()<.1)return{success:!1,message:"❌ 插件调用失败！（演示错误场景）",hints:[],nextStep:"👉 可能是 Gas 不足或函数 revert。检查参数是否满足插件要求。",error:"CALL_FAILED"};const h=p.split("(")[0];c.value[f]||(c.value[f]={}),c.value[f][v]=k,o.value.add(f),e.addLog(16,"执行插件",`插件: ${f}, 函数: ${h}, 参数: ${k}`,"runPlugin16");const E=["low_level_call","abi_encoding"];let m="⚡ 低级别调用成功！👉 查看 ABI 编码可视化或切换 staticcall 模式查询数据！";return o.value.size>=2&&(E.push("contract_interop"),m="🌐 合约互操作掌握！👉 查看完整代码了解所有实现细节！"),{success:!0,message:`✅ 调用 ${f}.${h} 成功！`,hints:E,nextStep:m,encoded:A.breakdown}},_=(f,p,v)=>{var h;if(!r.value[f])return{success:!1,message:`❌ 插件 "${f}" 未注册！`,hints:[],nextStep:`👉 先注册 ${f} 插件！`,error:"PLUGIN_NOT_REGISTERED"};const k=p.split("(")[0],A=((h=c.value[f])==null?void 0:h[v])||"";return e.addLog(16,"查询插件",`插件: ${f}, 函数: ${k}, 返回值: ${A||"(空)"}`),{success:!0,message:`✅ 查询 ${f}.${k} 成功！`,hints:["staticcall"],nextStep:A?`👁️ 返回值: "${A}" 👉 尝试切换到其他插件！`:"👁️ 查询成功但无数据 👉 先用 call 模式写入数据！",result:A}},I=(f,p)=>{var v;return((v=c.value[f])==null?void 0:v[p])||""},S=f=>!f||f.length<10?f:f.slice(0,6)+"..."+f.slice(-4),b=f=>{t.unlockConcept(16,f)},g=R(()=>({gasUsage:e.getDayGasUsage(16),ethCost:e.getDayEthCost(16),operationCount:e.getDayOperationCount(16)}));return{profiles:n,plugins:r,pluginCounter:s,currentUser:i,pluginData:c,interactedPlugins:o,predefinedPlugins:a,setProfile:l,getProfile:u,registerPlugin:d,getPlugin:w,runPlugin:T,runPluginView:_,getPluginData:I,encodeFunctionCall:y,unlockConcept:b,shortenAddress:S,realtimeData:g}}function Pg(){const t=pt(),e=Pe(),n=me();t.contracts.day17;const r=B("owner"),s=B("V1"),i=B(!1),o=B(!1),a=B(!1),c=B([]),l=B(1),u=B(.1),d=B(30),w=B(1),y=B(null),T=B("0xV1LogicContractAddress"),_=B("0xOwnerAddress"),I=R(()=>c.value.length),S=R(()=>y.value?1:0),b=R(()=>y.value!==null),g=R(()=>{const O=c.value.find(P=>P.id===w.value);return O?O.price:0}),f=R(()=>!y.value||!y.value.paused?0:y.value.expiry),p=R(()=>{if(!y.value)return"未订阅";if(y.value.paused)return"已暂停";const O=Math.floor(Date.now()/1e3);return y.value.expiry>O?"有效":"已过期"}),v=R(()=>{if(!y.value)return"status-inactive";if(y.value.paused)return"status-paused";const O=Math.floor(Date.now()/1e3);return y.value.expiry>O?"status-active":"status-expired"}),k=()=>{const O=l.value,P=parseFloat(u.value),z=d.value*24*60*60;return c.value.find(ie=>ie.id===O)?{success:!1,message:"❌ 计划 ID 已存在",hints:[],nextStep:""}:(c.value.push({id:O,price:P,duration:z,durationDays:d.value}),w.value=O,n.addLog(17,"创建计划",`计划 ${O}: ${P} ETH, ${d.value}天`,"createPlan17"),e.incrementInteraction(17),c.value.length===1?{success:!0,message:`✅ 计划 ${O} 创建成功！存储在 planPrices[${O}] 中！`,hints:[],nextStep:"📊 再创建 1 个计划即可解锁升级功能！👉 创建第2个计划！"}:{success:!0,message:`✅ 计划 ${O} 创建成功！`,hints:[],nextStep:'🎉 现在可以升级到 V2 了！👉 点击"升级到 V2"按钮，体验合约升级！'})},A=()=>i.value?{success:!1,message:"❌ 合约已经升级过了",hints:[],nextStep:""}:c.value.length<2?{success:!1,message:"❌ 需要至少 2 个计划才能升级",hints:[],nextStep:`💡 当前只有 ${c.value.length} 个计划，请再创建 ${2-c.value.length} 个！`}:(o.value=!0,setTimeout(()=>{i.value=!0,s.value="V2",T.value="0xV2LogicContractAddress",a.value=!0,o.value=!1,setTimeout(()=>{a.value=!1},3e3)},1e3),n.addLog(17,"升级合约","V1 → V2","upgradeTo17"),e.incrementInteraction(17),e.unlockConcept(17,"upgrade_mechanism"),e.unlockConcept(17,"logic_contract"),{success:!0,message:"🚀 合约已升级到 V2！逻辑合约地址已更新！",hints:["upgrade_mechanism","logic_contract"],nextStep:"⚡ 恭喜解锁：升级机制 + 逻辑合约！👉 切换到 User 身份，执行订阅操作！"}),h=()=>i.value?(s.value="V1",T.value="0xV1LogicContractAddress",{success:!0,message:"⚙️ 已切换到 V1 逻辑合约",hints:[],nextStep:""}):{success:!1,message:"❌ 合约尚未升级",hints:[],nextStep:""},E=()=>i.value?(s.value="V2",T.value="0xV2LogicContractAddress",{success:!0,message:"⚡ 已切换到 V2 逻辑合约",hints:[],nextStep:""}):{success:!1,message:"❌ 合约尚未升级",hints:[],nextStep:""},m=()=>{const O=w.value,P=c.value.find(le=>le.id===O);if(!P)return{success:!1,message:"❌ 计划不存在",hints:[],nextStep:""};const X=Math.floor(Date.now()/1e3)+P.duration;return y.value={planId:O,expiry:X,paused:!1},n.addLog(17,"订阅计划",`计划 ${O}: ${P.price} ETH`,"subscribe17"),e.incrementInteraction(17),e.getDayProgress(17).unlockedConcepts.includes("fallback_function")?{success:!0,message:`✅ 订阅成功！您已订阅计划 ${O}！`,hints:[],nextStep:""}:(e.unlockConcept(17,"fallback_function"),{success:!0,message:`✅ 订阅成功！您已订阅计划 ${O}！`,hints:["fallback_function"],nextStep:"🔒 恭喜解锁：回退函数！调用通过 fallback 委托给逻辑合约！👉 查询订阅状态，查看升级后数据是否仍然存在！"})},x=()=>{if(!y.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};if(y.value.paused)return{success:!1,message:"❌ 订阅已经处于暂停状态",hints:[],nextStep:""};const O=Math.floor(Date.now()/1e3);if(y.value.expiry<=O)return{success:!1,message:"❌ 订阅已过期",hints:[],nextStep:""};const P=y.value.expiry-O;return y.value.paused=!0,y.value.expiry=P,n.addLog(17,"暂停订阅",`剩余时间: ${P} 秒`,"pauseSubscription17"),e.incrementInteraction(17),e.getDayProgress(17).unlockedConcepts.includes("version_control")?{success:!0,message:"⏸️ 订阅已暂停！剩余时间已保存！",hints:[],nextStep:""}:(e.unlockConcept(17,"version_control"),{success:!0,message:"⏸️ 订阅已暂停！剩余时间已保存！",hints:["version_control"],nextStep:"🚀 恭喜解锁：版本控制！这是 V2 新增的功能！👉 恢复订阅来完成所有学习！"})},L=()=>{if(!y.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};if(!y.value.paused)return{success:!1,message:"❌ 订阅未处于暂停状态",hints:[],nextStep:""};const O=Math.floor(Date.now()/1e3),P=y.value.expiry;return y.value.paused=!1,y.value.expiry=O+P,n.addLog(17,"恢复订阅",`新的过期时间: ${y.value.expiry}`,"resumeSubscription17"),e.incrementInteraction(17),{success:!0,message:"▶️ 订阅已恢复！过期时间已重新计算！",hints:[],nextStep:"🎉 恭喜你已掌握 Day 17 全部核心功能！👉 查看完整代码来巩固知识！"}},q=()=>{if(!y.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};const O=Math.floor(Date.now()/1e3);let P="";if(y.value.paused)P=`已暂停，剩余 ${y.value.expiry} 秒`;else if(y.value.expiry>O){const X=y.value.expiry-O;P=`有效，剩余 ${Math.floor(X/86400)} 天 ${Math.floor(X%86400/3600)} 小时`}else P="已过期";n.addLog(17,"查询订阅",`计划 ${y.value.planId}: ${P}`,null),e.incrementInteraction(17);const z=e.getDayProgress(17).unlockedConcepts;return i.value&&!z.includes("data_persistence")?(e.unlockConcept(17,"data_persistence"),{success:!0,message:`📊 您的订阅状态: ${P}`,hints:["data_persistence"],nextStep:"🏗️ 恭喜解锁：数据持久化！升级后数据保持不变！👉 使用 V2 新功能（暂停/恢复）来对比版本差异！"}):{success:!0,message:`📊 您的订阅状态: ${P}`,hints:[],nextStep:""}},$=O=>(r.value=O,O==="owner"?{success:!0,message:"✅ 已切换到 Owner 身份！",hints:[],nextStep:"👉 创建订阅计划来体验数据存储！"}:{success:!0,message:"✅ 已切换到 User 身份！",hints:[],nextStep:"👉 选择计划并执行订阅，体验 fallback 委托调用！"}),F=R(()=>({gasUsage:n.getDayGasUsage(17),ethCost:n.getDayEthCost(17),operationCount:n.getDayOperationCount(17)}));return{currentRole:r,currentVersion:s,upgraded:i,isUpgrading:o,justUpgraded:a,plans:c,newPlanId:l,newPlanPrice:u,newPlanDuration:d,selectedPlanId:w,subscription:y,logicContractAddress:T,ownerAddress:_,plansCount:I,subscriptionsCount:S,hasSubscription:b,selectedPlanPrice:g,remainingTime:f,subscriptionStatusText:p,subscriptionStatusClass:v,createPlan:k,upgradeToV2:A,switchToV1:h,switchToV2:E,subscribe:m,pauseSubscription:x,resumeSubscription:L,checkSubscription:q,switchRole:$,realtimeData:F}}function Bg(){const t=me();Pe();const e=B("Alice"),n=B("farmer"),r=B(3e11),s=B(350),i=B({Alice:!1,Bob:!1,Carol:!1}),o=B({Alice:0,Bob:0,Carol:0}),a=B(5e18),c=B(0),l=B(0),u=500,d=10,w=50,y=24*60*60*1e3,T=R(()=>d*1e26/r.value),_=R(()=>w*1e26/r.value),I=R(()=>s.value<u),S=R(()=>{const O=e.value,P=o.value[O]||0,z=Date.now();return i.value[O]&&z-P>=y}),b=R(()=>{const O=e.value,P=o.value[O]||0,z=Date.now(),X=y-(z-P);return X>0?X:0}),g=R(()=>i.value[e.value]?S.value?{status:"available",text:"可索赔"}:{status:"cooldown",text:"冷却中"}:{status:"no_insurance",text:"未投保"}),f=O=>(O/1e18).toFixed(4),p=O=>(O/1e8).toFixed(2),v=O=>{if(O<=0)return"00:00:00";const P=Math.floor(O/(1e3*60*60)),z=Math.floor(O%(1e3*60*60)/(1e3*60)),X=Math.floor(O%(1e3*60)/1e3);return`${P.toString().padStart(2,"0")}:${z.toString().padStart(2,"0")}:${X.toString().padStart(2,"0")}`},k=()=>(s.value=Math.floor(Math.random()*1e3),t.addLog(18,"更新天气数据",`降雨量更新为 ${s.value}mm`,"checkRainfall18"),{success:!0,message:`🌧️ 天气数据已更新！当前降雨量: ${s.value}mm`,rainfall:s.value,hints:["random_generation"],nextStep:I.value?"⚠️ 干旱警报！降雨量低于阈值，可以申请赔付。":"✅ 天气正常，降雨量高于阈值。"}),A=()=>(t.addLog(18,"查询天气数据",`当前降雨量: ${s.value}mm`,"checkRainfall18"),{success:!0,message:`🔍 查询结果：当前降雨量 ${s.value}mm，阈值 ${u}mm`,rainfall:s.value,isDrought:I.value,nextStep:I.value?"⚠️ 干旱状态！符合索赔条件。":"✅ 正常状态，不符合索赔条件。"}),h=()=>{const O=e.value;if(i.value[O])return{success:!1,message:"❌ 您已经购买了保险！"};const P=T.value;return i.value[O]=!0,l.value+=P,a.value+=P,t.addLog(18,"购买保险",`支付保费 ${f(P)} ETH`,"purchaseInsurance18"),{success:!0,message:`🎉 保险购买成功！支付保费 ${f(P)} ETH ($${d})`,hints:["purchase_insurance","price_conversion"],nextStep:"👉 当降雨量低于500mm时，可以申请赔付。注意：24小时内只能索赔一次！"}},E=()=>{const O=e.value;if(!i.value[O])return{success:!1,message:"❌ 您尚未购买保险！请先购买保险。",nextStep:'👉 点击"购买保险"按钮购买保险。'};if(!I.value)return{success:!1,message:`❌ 当前降雨量 ${s.value}mm 高于阈值 ${u}mm，不符合索赔条件。`,nextStep:"👉 等待干旱发生或更新天气数据。"};const P=o.value[O]||0,z=Date.now();if(z-P<y){const ie=y-(z-P);return{success:!1,message:`⏱️ 冷却期中！剩余时间: ${v(ie)}`,hints:["cooldown_mechanism"],nextStep:'👉 使用"⏩ 快进24小时"按钮跳过冷却期，或等待时间结束。'}}const X=_.value;return a.value<X?{success:!1,message:"❌ 合约余额不足，无法赔付！"}:(o.value[O]=z,c.value+=X,a.value-=X,t.addLog(18,"申请赔付",`获得赔付 ${f(X)} ETH`,"claimPayout18"),{success:!0,message:`💸 赔付成功！获得 ${f(X)} ETH ($${w})`,hints:["parametric_payout"],nextStep:'⏱️ 已触发24小时冷却期！点击"了解冷却期机制"学习更多。'})},m=()=>{const O=e.value,P=o.value[O]||0;return P===0?{success:!1,message:"❌ 您还没有进行过索赔！"}:S.value?{success:!1,message:"✅ 您已经可以索赔了，无需快进！"}:(o.value[O]=P-y,t.addLog(18,"快进时间","跳过24小时冷却期","fastForwardTime18"),{success:!0,message:"⏩ 时间已快进24小时！冷却期已结束。",hints:["cooldown_mechanism"],nextStep:"👉 现在可以再次申请赔付了！"})},x=()=>{if(n.value!=="admin")return{success:!1,message:"❌ 只有管理员可以提取余额！"};const O=a.value;return a.value=0,t.addLog(18,"提取余额",`提取 ${f(O)} ETH`,"withdrawBalance18"),{success:!0,message:`💸 提取成功！共提取 ${f(O)} ETH`,hints:["contract_balance"],nextStep:"👉 合约余额已清零。"}},L=O=>{e.value=O,n.value="farmer"},q=()=>{n.value="admin",e.value="Owner"},$=()=>{const O=.95+Math.random()*.1;return r.value=Math.floor(3e11*O),{success:!0,message:`💰 ETH价格已更新！当前价格: $${p(r.value)}`}},F=R(()=>({gasUsage:t.getDayGasUsage(18),ethCost:t.getDayEthCost(18),operationCount:t.getDayOperationCount(18)}));return{currentUser:e,currentRole:n,ethPrice:r,rainfall:s,hasInsurance:i,lastClaimTimestamp:o,contractBalance:a,totalPayout:c,totalPremium:l,RAINFALL_THRESHOLD:u,INSURANCE_PREMIUM_USD:d,INSURANCE_PAYOUT_USD:w,premiumInEth:T,payoutInEth:_,isDrought:I,canClaim:S,cooldownRemaining:b,cooldownStatus:g,formatEth:f,formatUsd:p,formatTime:v,updateRainfall:k,checkRainfall:A,purchaseInsurance:h,claimPayout:E,fastForwardTime:m,withdrawBalance:x,switchUser:L,switchToAdmin:q,updateEthPrice:$,realtimeData:F}}function Lg(){const t=me();Pe();const e="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",n="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",r=B("organizer"),s=B("0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"),i=B({"0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc":!1,"0x976EA74026E726554dB657fA54763abd0C3a0aa9":!1,"0x14dC79964da2C08b23698B3d3cc7Ca32193d9955":!1}),o=B(null),a=B(!1),c=R(()=>n),l=R(()=>s.value),u=R(()=>i.value[s.value]||!1),d=R(()=>Object.entries(i.value).filter(([p,v])=>v).map(([p])=>p)),w=p=>p?p.substring(0,6)+"..."+p.substring(p.length-4):"",y=()=>{try{const p=s.value,v=Sr(p),A=new Ir().encode(["address"],[v]),h=Yt(A),m=Yt(fi(`Ethereum Signed Message:
32`+h.slice(2))),L=new io(e).sign(m);return o.value={r:L.r,s:L.s,v:L.v,full:L.serialized,messageHash:h,ethSignedMessageHash:m},t.addLog(19,"生成签名",`为用户 ${w(p)} 生成签名`,"generateSignature19"),{success:!0,message:`✅ 签名生成成功！
签名: ${L.serialized.substring(0,20)}...`,signature:L.serialized,hints:["keccak256_hash","msg_sender"],nextStep:"👉 点击展开签名详情，查看 R/S/V 组件！"}}catch(p){return{success:!1,message:`❌ 签名生成失败: ${p.message}`}}},T=()=>{const p=s.value;return o.value?i.value[p]?{success:!1,message:"❌ 你已经参与过此活动！"}:(i.value[p]=!0,t.addLog(19,"参与活动",`用户 ${w(p)} 使用签名参与活动`,"enterEvent19"),{success:!0,message:`🎉 参与成功！
你已使用签名成功参与活动！`,hints:["ecrecover","require_statement","eip191_prefix"],nextStep:"👉 点击参与者列表查看映射存储，完成所有概念解锁！"}):{success:!1,message:"❌ 请先生成签名！"}},_=()=>{const p=s.value,v=i.value[p]||!1;return t.addLog(19,"查询参与状态",`查询用户 ${w(p)} 参与状态: ${v}`,"checkEntered19"),{success:!0,message:v?"✅ 该用户已参与活动":"❌ 该用户尚未参与活动",entered:v}},I=()=>{const p=d.value;return t.addLog(19,"获取参与者列表",`当前参与者数量: ${p.length}`,"getParticipants19"),{success:!0,message:`📋 当前参与者数量: ${p.length}`,participants:p,hints:["mapping_storage"],nextStep:"🎉 你已掌握 Day 19 所有核心概念！"}},S=()=>(a.value=!a.value,a.value&&o.value?{success:!0,hints:["signature_rsv"],nextStep:"👉 使用签名参与活动来解锁 ecrecover！"}:{success:!1}),b=(p=null)=>(p?r.value=p:r.value=r.value==="organizer"?"participant":"organizer",r.value==="participant"?{success:!0,message:`👤 已切换为参与者角色
地址: ${w(s.value)}`}:{success:!0,message:`👤 已切换为组织者角色
地址: ${w(n)}`}),g=p=>{s.value=p,o.value=null},f=R(()=>({gasUsage:t.getDayGasUsage(19),ethCost:t.getDayEthCost(19),operationCount:t.getDayOperationCount(19)}));return{currentRole:r,currentUserAddress:s,organizer:c,hasEntered:i,generatedSignature:o,showSignatureDetails:a,participantAddress:l,isEntered:u,participantsList:d,formatAddress:w,generateSignature:y,enterEvent:T,checkEntered:_,getParticipants:I,toggleSignatureDetails:S,toggleRole:b,changeUserAddress:g,realtimeData:f}}function Fg(){const t=me(),e=Pe(),n=B(10),r=B({"0xAttacker":1,"0xUserA":5,"0xUserB":3}),s=B(1),i=B(0),o=B(0),a=B(!1),c=B([]),l=1,u=2,d=g=>r.value[g]||0,w=(g,f)=>{const p="deposit20";return f<=0?(t.addLog(20,"deposit","存款金额必须大于0",!1,p),{success:!1,message:"❌ 存款金额必须大于0",hints:[],nextStep:""}):(r.value[g]=(r.value[g]||0)+f,n.value+=f,t.addLog(20,"deposit",`用户 ${g} 存入 ${f} ETH`,!0,p),{success:!0,message:`✅ 成功存入 ${f} ETH！`,hints:["deposit_function"],nextStep:"👉 现在尝试攻击漏洞版本，观察重入攻击如何工作！"})},y=(g,f=5)=>{var x;const p="vulnerableWithdraw20",v=((x=e.getDayProgress(20))==null?void 0:x.unlockedConcepts)||[],k=r.value[g]||0;if(k<=0)return t.addLog(20,"vulnerableWithdraw","余额不足",!1,p),{success:!1,message:"❌ 余额不足，无法提款",hints:[],nextStep:""};a.value=!0;let A=0,h=0;const E=[];for(;h<f&&n.value>=k;)A+=k,n.value-=k,E.push({round:h+1,amount:k,vaultBalance:n.value}),h++;r.value[g]=0,i.value=h,o.value=A,c.value=E,setTimeout(()=>{a.value=!1},1e3),t.addLog(20,"vulnerableWithdraw",`重入攻击成功！${h}次调用，窃取${A}ETH`,!0,p);const m=["vulnerable_withdraw"];return v.includes("fallback_receive")||m.push("fallback_receive"),{success:!0,message:`🚨 重入攻击成功！通过 ${h} 次递归调用，窃取了 ${A} ETH！`,hints:m,nextStep:"💡 观察攻击如何重复提款！👉 查看防护机制了解如何修复！",attackDetails:{count:h,stolen:A,history:E}}},T=g=>{const f="safeWithdraw20",p=r.value[g]||0;return p<=0?(t.addLog(20,"safeWithdraw","余额不足",!1,f),{success:!1,message:"❌ 余额不足，无法提款",hints:[],nextStep:""}):(a.value=!0,s.value===u?(a.value=!1,t.addLog(20,"safeWithdraw","重入调用被阻止",!1,f),{success:!1,message:"🔒 重入调用被阻止！Reentrant call blocked",hints:["reentrancy_guard"],nextStep:"✅ 攻击被阻止！👉 查看代码对比巩固知识！",blocked:!0}):(s.value=u,r.value[g]=0,n.value-=p,s.value=l,t.addLog(20,"safeWithdraw",`安全提款成功！提取${p}ETH`,!0,f),a.value=!1,{success:!0,message:`✅ 安全提款成功！提取了 ${p} ETH（重入锁保护）`,hints:["reentrancy_guard"],nextStep:"✅ 攻击被阻止！👉 查看代码对比巩固知识！"}))},_=()=>{i.value=0,o.value=0,a.value=!1,c.value=[],s.value=l},I=()=>(n.value=10,r.value={"0xAttacker":1,"0xUserA":5,"0xUserB":3},_(),t.addLog(20,"reset","重置金库状态",!0,null),{success:!0,message:"✅ 金库状态已重置",hints:[],nextStep:""}),S=()=>({balance:n.value,userBalances:{...r.value},reentrancyStatus:s.value===u?"🔒 已锁定":"🔓 未锁定",isLocked:s.value===u}),b=R(()=>({gasUsage:t.getDayGasUsage(20),ethCost:t.getDayEthCost(20),operationCount:t.getDayOperationCount(20)}));return{vaultBalance:n,userBalances:r,reentrancyStatus:s,attackCount:i,stolenAmount:o,isAttacking:a,attackHistory:c,_NOT_ENTERED:l,_ENTERED:u,deposit:w,vulnerableWithdraw:y,safeWithdraw:T,resetAttack:_,resetVault:I,getVaultStatus:S,getUserBalance:d,realtimeData:b}}function Ng(){const t=me(),e=B([]),n=B(1),r=B({}),s=B({}),i=B({}),o=B({}),a=B({}),c=B(null),l=B({to:"",uri:""}),u=B({to:""}),d=B({to:""}),w=B({operator:"",approved:!0}),y=B({address:""}),T=B(""),_=B(!1),I=(x,L=!1)=>{T.value=x,_.value=L,setTimeout(()=>{T.value=""},3e3)},S=(x,L)=>{if(!x||!L)return I("请输入接收地址和元数据URI",!0),{success:!1,message:"请输入接收地址和元数据URI"};const q=n.value;return n.value++,r.value[q]=x,s.value[x]=(s.value[x]||0)+1,a.value[q]=L,e.value.push({tokenId:q,owner:x,uri:L}),t.addLog(21,"铸造NFT",`Token ID: ${q} 接收者: ${x}`,"mint21"),I(`🎉 NFT铸造成功！Token ID: ${q}`),{success:!0,message:`NFT铸造成功！Token ID: ${q}`,hints:["铸造函数从0地址创建新NFT","Token ID计数器自动递增"],nextStep:"查询地址余额了解持有情况"}},b=x=>{if(!x)return I("请输入查询地址",!0),{success:!1,message:"请输入查询地址"};const L=s.value[x]||0;return t.addLog(21,"查询余额",`地址: ${x} 持有: ${L} 个NFT`,"balanceOf21"),I(`✅ 查询成功！${x.slice(0,10)}... 持有 ${L} 个NFT`),{success:!0,message:`地址 ${x.slice(0,10)}... 持有 ${L} 个NFT`,balance:L,hints:["balanceOf使用_balances映射存储","映射查询时间复杂度为O(1)"],nextStep:'👉 1.在画廊点击NFT选中 → 2.切换到"授权"标签 → 3.输入授权地址 → 4.点击批准授权！'}},g=x=>{const L=r.value[x];return L?{success:!0,owner:L}:(I("Token不存在",!0),{success:!1,message:"Token不存在"})},f=(x,L,q)=>{if(!L)return I("请输入目标地址",!0),{success:!1,message:"请输入目标地址"};const $=r.value[q];if(!$)return I("Token不存在",!0),{success:!1,message:"Token不存在"};if($!==x)return I("你不是该NFT的所有者",!0),{success:!1,message:"你不是该NFT的所有者"};delete i.value[q],s.value[x]=(s.value[x]||0)-1,s.value[L]=(s.value[L]||0)+1,r.value[q]=L;const F=e.value.find(O=>O.tokenId===q);return F&&(F.owner=L),t.addLog(21,"转移NFT",`Token #${q} 从 ${x.slice(0,10)}... 到 ${L.slice(0,10)}...`,"transferFrom21"),I(`✅ NFT转移成功！Token #${q} 已转移到 ${L.slice(0,10)}...`),{success:!0,message:`NFT转移成功！Token #${q}`,hints:["transferFrom需要事先授权或自己是所有者","转移后清除原有授权"],nextStep:"尝试授权其他地址管理你的NFT"}},p=(x,L,q)=>{if(!L)return I("请输入目标地址",!0),{success:!1,message:"请输入目标地址"};if(L.length>20&&!(Math.random()>.3))return I("❌ 接收方合约不支持ERC721！转移被拒绝。",!0),{success:!1,message:"接收方合约不支持ERC721"};const F=f(x,L,q);return F.success?(t.addLog(21,"安全转移NFT",`Token #${q} 从 ${x.slice(0,10)}... 到 ${L.slice(0,10)}...`,"safeTransferFrom21"),I("🔒 安全转移完成！接收方支持ERC721！"),{success:!0,message:"安全转移成功！",hints:["safeTransferFrom检查接收方是否实现IERC721Receiver","防止代币被锁定在不支持的合约中"],nextStep:"尝试授权功能"}):F},v=(x,L)=>x?r.value[L]?(i.value[L]=x,t.addLog(21,"授权NFT",`Token #${L} 授权给 ${x.slice(0,10)}...`,"approve21"),I(`🔑 授权成功！Token #${L} 已授权给 ${x.slice(0,10)}...`),{success:!0,message:`授权成功！Token #${L}`,hints:["approve授权单个代币","被授权地址可以转移该代币"],nextStep:"尝试设置操作员授权"}):(I("Token不存在",!0),{success:!1,message:"Token不存在"}):(I("请输入授权地址",!0),{success:!1,message:"请输入授权地址"}),k=x=>({success:!0,approved:i.value[x]||""}),A=(x,L)=>x?(o.value.currentUser||(o.value.currentUser={}),o.value.currentUser[x]=L,t.addLog(21,"操作员授权",`${x.slice(0,10)}... ${L?"已授权":"已取消"}`,"setApprovalForAll21"),I(`${L?"✅":"❌"} 操作员授权${L?"已设置":"已取消"}！${x.slice(0,10)}...`),{success:!0,message:`操作员授权${L?"已设置":"已取消"}`,hints:["setApprovalForAll授权/取消操作员","操作员可以管理所有代币"],nextStep:"查看所有权追踪"}):(I("请输入操作员地址",!0),{success:!1,message:"请输入操作员地址"}),h=(x,L)=>{var q;return((q=o.value[x])==null?void 0:q[L])||!1},E=x=>e.value.filter(L=>L.owner===x),m=R(()=>({gasUsage:t.getDayGasUsage(21),ethCost:t.getDayEthCost(21),operationCount:t.getDayOperationCount(21)}));return{nfts:e,tokenIdCounter:n,owners:r,balances:s,tokenApprovals:i,operatorApprovals:o,tokenURIs:a,selectedTokenId:c,mintForm:l,transferForm:u,approveForm:d,operatorForm:w,queryForm:y,message:T,isError:_,showMessage:I,mintNFT:S,balanceOf:b,ownerOf:g,transferFrom:f,safeTransferFrom:p,approve:v,getApproved:k,setApprovalForAll:A,isApprovedForAll:h,getTokensByOwner:E,realtimeData:m}}function $g(){const t=me(),e=B("CLOSED"),n=B([]),r=B(""),s=B(0),i=B(0),o=B([]),a=B(0),c=B("player"),l=B({address:""}),u=B(""),d=B(!1),w=(p,v=!1)=>{u.value=p,d.value=v,setTimeout(()=>{u.value=""},3e3)},y=(p,v,k)=>{const A=new Date,h=`${A.getHours().toString().padStart(2,"0")}:${A.getMinutes().toString().padStart(2,"0")}:${A.getSeconds().toString().padStart(2,"0")}`;o.value.unshift({type:p,icon:v,message:k,time:h}),o.value.length>20&&(o.value=o.value.slice(0,20))},T=p=>{c.value=p},_=()=>e.value!=="CLOSED"?(w("彩票当前不是关闭状态，无法开启",!0),{success:!1,message:"彩票当前不是关闭状态"}):(e.value="OPEN",n.value=[],r.value="",a.value=0,t.addLog(22,"开启彩票","彩票已开启，玩家可以参与","startLottery22"),y("lottery-started","🚀","彩票已开启"),w("🚀 彩票已开启！玩家现在可以参与！"),{success:!0,message:"彩票已开启",hints:["startLottery() 仅 Owner 可调用","将状态从 CLOSED 改为 OPEN"],nextStep:"切换到 Player 角色参与彩票"}),I=p=>p?e.value!=="OPEN"?(w("彩票未开放，无法参与",!0),{success:!1,message:"彩票未开放"}):n.value.includes(p)?(w("该地址已经参与过了",!0),{success:!1,message:"地址已参与"}):(n.value.push(p),s.value+=.01,t.addLog(22,"参与彩票",`地址: ${p.slice(0,10)}... 支付: 0.01 ETH`,"enter22"),y("player-entered","🎫",`玩家 ${p.slice(0,10)}... 参与彩票`),w(`🎫 参与成功！${p.slice(0,10)}... 已加入彩票`),{success:!0,message:"参与成功",hints:["enter() 是 payable 函数","需要支付至少 entryFee (0.01 ETH)"],nextStep:"点击查看参与者列表了解动态数组"}):(w("请输入参与地址",!0),{success:!1,message:"请输入参与地址"}),S=()=>e.value!=="OPEN"?(w("彩票未开放，无法结束",!0),{success:!1,message:"彩票未开放"}):n.value.length===0?(w("没有参与者，无法结束",!0),{success:!1,message:"没有参与者"}):(e.value="CALCULATING",a.value=1,t.addLog(22,"结束彩票","彩票已结束，请求随机数","endLottery22"),y("lottery-ended","🏁","彩票结束，等待 VRF 回调"),w("🏁 彩票已结束！等待 VRF 随机数..."),{success:!0,message:"彩票已结束，请求随机数",hints:["endLottery() 向 VRF 协调器请求随机数","状态变为 CALCULATING"],nextStep:"点击「触发 VRF 回调」模拟 Chainlink VRF 返回随机数"}),b=()=>{if(e.value!=="CALCULATING")return w("彩票不在计算状态",!0),{success:!1,message:"彩票不在计算状态"};a.value=2;const p=[g()],v=p[0]%n.value.length,k=n.value[v];return i.value=s.value,a.value=3,r.value=k,t.addLog(22,"VRF回调",`随机数: ${p[0]} 获胜者: ${k.slice(0,10)}...`,"fulfillRandomWords22"),y("winner-picked","🏆",`获胜者: ${k.slice(0,10)}... 赢得 ${i.value} ETH`),setTimeout(()=>{e.value="CLOSED",n.value=[],s.value=0,a.value=0},3e3),w(`🏆 获胜者选出！${k.slice(0,10)}... 赢得 ${i.value} ETH`),{success:!0,message:`获胜者: ${k}`,hints:["randomWords[0] % players.length 计算获胜者索引","使用 call{value: ...} 发送奖金"],nextStep:"点击查看获胜者详情了解奖金发放机制"}},g=()=>Math.floor(Math.random()*1e6),f=R(()=>({gasUsage:t.getDayGasUsage(22),ethCost:t.getDayEthCost(22),operationCount:t.getDayOperationCount(22)}));return{lotteryState:e,players:n,recentWinner:r,contractBalance:s,lastPrizeAmount:i,events:o,vrfStep:a,currentRole:c,enterForm:l,message:u,isError:d,showMessage:w,toggleRole:T,startLottery:_,enter:I,endLottery:S,fulfillRandomWords:b,realtimeData:f}}function qg(){const t=me(),e=Pe(),n=B(10),r=B(0),s=B(0),i=B(0),o=B(Date.now()),a=500,c=7500,l=B(0),u=B([]),d=R(()=>{if(i.value===0)return 0;const m=(Date.now()-o.value)/1e3;return i.value*a*m/(1e4*365*24*60*60)}),w=R(()=>i.value+d.value),y=R(()=>s.value*c/1e4),T=R(()=>{const m=y.value-w.value;return m>0?m:0}),_=R(()=>w.value===0?999:s.value/w.value),I=R(()=>{const m=_.value;return m>=1.5?{status:"safe",label:"安全",color:"#22c55e",icon:"🟢"}:m>=1?{status:"warning",label:"警告",color:"#eab308",icon:"🟡"}:{status:"danger",label:"危险",color:"#ef4444",icon:"🔴"}}),S=(m,x)=>{const L=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u.value.unshift({timestamp:L,eventType:m,details:x}),u.value.length>20&&(u.value=u.value.slice(0,20))},b=m=>e.isConceptUnlocked(23,m)?!1:(e.unlockConcept(23,m),!0),g=m=>{var q;const x=((q=e.getDayProgress(23))==null?void 0:q.unlockedConcepts)||[];return x.length>=7&&!x.includes("lending_security")&&b("lending_security")&&m.push("lending_security"),m},f=m=>{if(m<=0)return{success:!1,message:"存款金额必须大于0"};if(m>n.value)return{success:!1,message:"钱包余额不足"};n.value-=m,r.value+=m,l.value+=m,t.addLog(23,"存款",`存入 ${m} ETH`,tt.deposit23||35e3),S("Deposit",`存入 ${m} ETH`);const x=["lending_pool"];return g(x),{success:!0,message:`✅ 成功存入 ${m} ETH`,hints:x,nextStep:"📍 切换到「🏦 抵押」标签页存入抵押品！"}},p=m=>m<=0?{success:!1,message:"取款金额必须大于0"}:m>r.value?{success:!1,message:"存款余额不足"}:(r.value-=m,n.value+=m,l.value-=m,t.addLog(23,"取款",`取出 ${m} ETH`,tt.withdraw23||35e3),S("Withdraw",`取出 ${m} ETH`),{success:!0,message:`✅ 成功取出 ${m} ETH`,hints:[],nextStep:"👉 继续探索其他功能！"}),v=m=>{if(m<=0)return{success:!1,message:"抵押金额必须大于0"};if(m>n.value)return{success:!1,message:"钱包余额不足"};n.value-=m,s.value+=m,t.addLog(23,"存入抵押",`存入 ${m} ETH 作为抵押品`,tt.depositCollateral23||45e3),S("CollateralDeposited",`存入 ${m} ETH 作为抵押品`);const x=["collateral_deposit"];return g(x),{success:!0,message:`✅ 成功存入 ${m} ETH 作为抵押品`,hints:x,nextStep:"📍 切换到「💸 借款」标签页尝试借款！"}},k=m=>{if(m<=0)return{success:!1,message:"取款金额必须大于0"};if(m>s.value)return{success:!1,message:"抵押品余额不足"};const x=w.value*1e4/c;return s.value-m<x?{success:!1,message:"❌ 取出后将低于最低抵押率要求，请先还款或减少取款金额"}:(s.value-=m,n.value+=m,t.addLog(23,"取出抵押",`取出 ${m} ETH 抵押品`,tt.withdrawCollateral23||35e3),S("CollateralWithdrawn",`取出 ${m} ETH 抵押品`),{success:!0,message:`✅ 成功取出 ${m} ETH 抵押品`,hints:[],nextStep:"👉 继续管理你的抵押品！"})},A=m=>{if(m<=0)return{success:!1,message:"借款金额必须大于0"};if(m>l.value)return{success:!1,message:"合约流动性不足"};if(w.value+m>y.value)return{success:!1,message:`❌ 超出最大可借额度。当前可借: ${T.value.toFixed(4)} ETH`};d.value,i.value=w.value+m,o.value=Date.now(),l.value-=m,n.value+=m,t.addLog(23,"借款",`借出 ${m} ETH`,tt.borrow23||45e3),S("Borrow",`借出 ${m} ETH`);const x=["borrow_mechanism"];return x.push("health_factor"),w.value/(s.value||1)>.3&&x.push("liquidation_threshold"),g(x),{success:!0,message:`✅ 成功借出 ${m} ETH`,hints:x,nextStep:"📍 查看健康因子变化！当健康因子低于1时会被清算。点击「💸 借款」标签页内的「✅ 还款」偿还债务！"}},h=m=>{if(m<=0)return{success:!1,message:"还款金额必须大于0"};if(w.value===0)return{success:!1,message:"没有债务需要偿还"};if(m>n.value)return{success:!1,message:"钱包余额不足"};const x=w.value;let L=m,q=0;m>x&&(q=m-x,L=x),n.value-=m,i.value=x-L,o.value=Date.now(),l.value+=L,q>0&&(n.value+=q),t.addLog(23,"还款",`偿还 ${L.toFixed(6)} ETH${q>0?`，退款 ${q.toFixed(6)} ETH`:""}`,tt.repay23||4e4),S("Repay",`偿还 ${L.toFixed(6)} ETH`);const $=["interest_calculation","repay_function"];return g($),{success:!0,message:`✅ 成功偿还 ${L.toFixed(6)} ETH${q>0?`，退款 ${q.toFixed(6)} ETH`:""}`,hints:$,nextStep:"📍 还款成功！健康因子已提升。继续借款体验清算机制，或查看完整代码了解借贷安全！"}},E=R(()=>{const m=t.getDayLogs(23),x=m.length,L=m.reduce(($,F)=>$+(F.gasUsed||0),0),q=m.reduce(($,F)=>$+(F.ethCost||0),0);return{operationCount:x,gasUsage:L,ethCost:q,walletBalance:n.value,depositBalance:r.value,collateralBalance:s.value,borrowBalance:i.value,currentDebt:w.value,maxBorrowAmount:y.value,healthFactor:_.value,contractLiquidity:l.value}});return{walletBalance:n,depositBalance:r,collateralBalance:s,borrowBalance:i,lastInterestAccrualTime:o,contractLiquidity:l,eventLogs:u,accruedInterest:d,currentDebt:w,maxBorrowAmount:y,remainingBorrowAmount:T,healthFactor:_,healthStatus:I,deposit:f,withdraw:p,depositCollateral:v,withdrawCollateral:k,borrow:A,repay:h,realtimeData:E}}function Mg(){const t=Pe(),e=me(),n=B("AWAITING_PAYMENT"),r=B("buyer"),s={buyer:"0xBuyer"+Math.random().toString(36).substring(2,10),seller:"0xSeller"+Math.random().toString(36).substring(2,10),arbiter:"0xArbiter"+Math.random().toString(36).substring(2,10)},i=B({buyerWallet:5,sellerWallet:2,escrowAmount:0,arbiterWallet:1}),o=B({amount:0,depositTime:null,deliveryTimeout:60,isDisputed:!1}),a=B([]),c=R(()=>{var k;return((k=t.getDayProgress(24))==null?void 0:k.unlockedConcepts)||[]}),l=R(()=>{if(n.value!=="AWAITING_DELIVERY")return 0;const k=(Date.now()-o.value.depositTime)/1e3;return Math.max(0,o.value.deliveryTimeout-k)}),u=R(()=>l.value===0),d=R(()=>{const k=t.getDayProgress(24);return!k||k.totalConcepts===0?0:Math.round(k.unlockedConcepts.length/k.totalConcepts*100)}),w=R(()=>({gasUsage:e.getDayGasUsage(24),ethCost:e.getDayEthCost(24),operationCount:e.getDayOperationCount(24)})),y=k=>c.value.includes(k)?!1:(t.unlockConcept(24,k),!0),T=k=>(c.value.length>=7&&!c.value.includes("state_management")&&y("state_management")&&k.push("state_management"),k);return{escrowState:n,currentRole:r,addresses:s,funds:i,escrowInfo:o,eventLog:a,unlockedConcepts:c,timeLeft:l,isTimeout:u,progressPercentage:d,realtimeData:w,deposit:k=>{const A=[];return i.value.buyerWallet-=k,i.value.escrowAmount=k,o.value.amount=k,o.value.depositTime=Date.now(),n.value="AWAITING_DELIVERY",a.value.unshift({type:"PaymentDeposited",buyer:s.buyer,amount:k,timestamp:new Date().toLocaleString()}),e.addLog(24,"存款",`存款 ${k} ETH`,"deposit24"),y("escrow_contract")&&A.push("escrow_contract"),T(A),{success:!0,message:"✅ 存款成功！🎉 恭喜解锁：托管合约！👉 点击「⏱️ 超时倒计时」区域学习区块时间戳！",hints:A,nextStep:"📝 你了解了托管合约！PaymentDeposited事件记录了买家存款。👉 点击「⏱️ 超时倒计时」区域学习区块时间戳！"}},confirmDelivery:()=>{const k=[],A=o.value.amount;return i.value.escrowAmount=0,i.value.sellerWallet+=A,n.value="COMPLETE",a.value.unshift({type:"DeliveryConfirmed",buyer:s.buyer,seller:s.seller,amount:A,timestamp:new Date().toLocaleString()}),e.addLog(24,"确认收货",`确认收货，转账 ${A} ETH`,"confirmDelivery24"),y("buyer_seller_arbitration")&&k.push("buyer_seller_arbitration"),T(k),{success:!0,message:"✅ 确认收货成功！🎉 恭喜解锁：买卖仲裁！👉 点击「🛡️ 安全防护」区域学习receive与revert！",hints:k,nextStep:"💸 你了解了买卖仲裁！合约使用call将资金发送给卖家。👉 点击「🛡️ 安全防护」区域学习receive与revert！"}},raiseDispute:()=>{var h;const k=[];return n.value="DISPUTED",o.value.isDisputed=!0,(((h=t.getDayProgress(24))==null?void 0:h.unlockedConcepts)||[]).includes("dispute_resolution")||k.push("dispute_resolution"),a.value.unshift({type:"DisputeRaised",initiator:r.value==="buyer"?s.buyer:s.seller,timestamp:new Date().toLocaleString()}),e.addLog(24,"发起争议","发起争议，等待仲裁","raiseDispute24"),T(k),{success:!0,message:"⚠️ 争议已发起！等待仲裁者裁决。",hints:k,nextStep:"⚖️ 争议已发起！现在只有仲裁者可以resolveDispute()解决争议。"}},resolveDispute:k=>{var x;const A=[],h=o.value.amount,E=k?"seller":"buyer";return i.value.escrowAmount=0,i.value[E+"Wallet"]+=h,n.value="COMPLETE",(((x=t.getDayProgress(24))==null?void 0:x.unlockedConcepts)||[]).includes("multi_party_security")||A.push("multi_party_security"),a.value.unshift({type:"DisputeResolved",arbiter:s.arbiter,recipient:s[E],amount:h,timestamp:new Date().toLocaleString()}),e.addLog(24,"仲裁裁决",`仲裁裁决，资金${k?"给卖家":"退买家"}`,"resolveDispute24"),T(A),{success:!0,message:`⚖️ 仲裁完成！资金已${k?"释放给卖家":"退回买家"}。`,hints:A,nextStep:"🔐 仲裁完成！多方安全机制保护了所有参与者的利益。"}},cancelAfterTimeout:()=>{var E;const k=[],A=o.value.amount;return i.value.escrowAmount=0,i.value.buyerWallet+=A,n.value="CANCELLED",(((E=t.getDayProgress(24))==null?void 0:E.unlockedConcepts)||[]).includes("time_locked_release")||k.push("time_locked_release"),a.value.unshift({type:"EscrowCancelled",initiator:s.buyer,reason:"timeout",timestamp:new Date().toLocaleString()}),e.addLog(24,"超时取消","超时取消，资金退回买家","cancelAfterTimeout24"),T(k),{success:!0,message:"⏱️ 超时取消成功！资金已退回买家。",hints:k,nextStep:"⏱️ 超时保护机制保护了买家权益！时间锁释放确保资金安全退回。"}},cancelMutual:()=>{var h;const k=[];if(n.value==="AWAITING_DELIVERY"){const E=o.value.amount;i.value.escrowAmount=0,i.value.buyerWallet+=E}return n.value="CANCELLED",a.value.unshift({type:"EscrowCancelled",initiator:r.value==="buyer"?s.buyer:s.seller,reason:"mutual",timestamp:new Date().toLocaleString()}),e.addLog(24,"协商取消","双方协商取消交易","cancelMutual24"),(((h=t.getDayProgress(24))==null?void 0:h.unlockedConcepts)||[]).includes("mutual_cancellation")||k.push("mutual_cancellation"),T(k),{success:!0,message:"❌ 协商取消成功！交易已取消。",hints:k,nextStep:"🤝 双方协商取消了交易。这展示了托管合约的灵活性！"}},switchRole:k=>{var m;r.value=k;const A=[];k==="arbiter"&&((((m=t.getDayProgress(24))==null?void 0:m.unlockedConcepts)||[]).includes("arbiter_role")||A.push("arbiter_role"));const h={buyer:"买家",seller:"卖家",arbiter:"仲裁者"},E={buyer:"🎭 已切换到买家身份！👉 点击「💰 存款 / Deposit」按钮存入ETH，体验托管流程！",seller:"🎭 已切换到卖家身份！等待买家确认收货后资金将转入你的钱包。",arbiter:"🎭 已切换到仲裁者身份！当发生争议时，你可以裁决资金归属。"};return T(A),{success:!0,message:`🎭 已切换到 ${h[k]}！`,hints:A,nextStep:E[k]}},resetEscrow:()=>{n.value="AWAITING_PAYMENT",i.value={buyerWallet:5,sellerWallet:2,escrowAmount:0,arbiterWallet:1},o.value={amount:0,depositTime:null,deliveryTimeout:60,isDisputed:!1},a.value=[]}}}function Ug(){const t=Pe(),e=me(),n=B(0),r=B(0),s=B(0),i=B({tokenA:1e3,tokenB:1e3,lpToken:0}),o=B([]),a=R(()=>r.value===0?0:n.value/r.value),c=S=>{if(S<=0)return 0;if(S<=3)return 1;let b=S,g=Math.floor(S/2)+1;for(;g<b;)b=g,g=Math.floor((Math.floor(S/g)+g)/2);return b},l=(S,b)=>S<b?S:b,u=(S,b)=>{var k;const g=[];let f="";if(S<=0||b<=0)return{success:!1,message:"❌ 添加数量必须大于 0"};if(i.value.tokenA<S||i.value.tokenB<b)return{success:!1,message:"❌ 余额不足"};let p;return s.value===0?p=c(S*b):p=l(Math.floor(S*s.value/n.value),Math.floor(b*s.value/r.value)),i.value.tokenA-=S,i.value.tokenB-=b,i.value.lpToken+=p,n.value+=S,r.value+=b,s.value+=p,o.value.unshift({type:"addLiquidity",amountA:S,amountB:b,liquidity:p,timestamp:Date.now()}),e.addLog(25,"添加流动性",`存入 ${S} Token A + ${b} Token B，获得 ${p.toFixed(2)} LP代币`,"addLiquidity25"),(((k=t.getDayProgress(25))==null?void 0:k.unlockedConcepts)||[]).includes("add_liquidity")||g.push("add_liquidity"),f="📍 向下滚动到「🔄 交易」区块进行代币交换！",{success:!0,message:`✅ 成功添加流动性！获得 ${p.toFixed(2)} LP代币`,liquidity:p,hints:g,nextStep:f}},d=(S,b)=>{var A;const g=[];let f="";if(S<=0)return{success:!1,message:"❌ 交换数量必须大于 0"};if(i.value.tokenA<S)return{success:!1,message:"❌ Token A 余额不足"};if(n.value===0||r.value===0)return{success:!1,message:"❌ 流动性池为空，请先添加流动性"};const p=Math.floor(S*997/1e3),v=Math.floor(r.value*p/(n.value+p));return v<b?{success:!1,message:`❌ 滑点过高！预计获得 ${v.toFixed(4)} Token B，但设置的最小值为 ${b}`}:(i.value.tokenA-=S,i.value.tokenB+=v,n.value+=p,r.value-=v,o.value.unshift({type:"swap",direction:"A->B",amountIn:S,amountOut:v,timestamp:Date.now()}),e.addLog(25,"代币交换",`支付 ${S} Token A，获得 ${v.toFixed(4)} Token B`,"swapAforB25"),(((A=t.getDayProgress(25))==null?void 0:A.unlockedConcepts)||[]).includes("swap_mechanism")||g.push("swap_mechanism"),f="📍 继续交换查看滑点效果，或点击「➖ 移除流动性」取回代币！",{success:!0,message:`✅ 交换成功！支付 ${S} Token A，获得 ${v.toFixed(4)} Token B`,amountBOut:v,hints:g,nextStep:f})},w=(S,b)=>{var A;const g=[];let f="";if(S<=0)return{success:!1,message:"❌ 交换数量必须大于 0"};if(i.value.tokenB<S)return{success:!1,message:"❌ Token B 余额不足"};if(n.value===0||r.value===0)return{success:!1,message:"❌ 流动性池为空，请先添加流动性"};const p=Math.floor(S*997/1e3),v=Math.floor(n.value*p/(r.value+p));return v<b?{success:!1,message:`❌ 滑点过高！预计获得 ${v.toFixed(4)} Token A，但设置的最小值为 ${b}`}:(i.value.tokenB-=S,i.value.tokenA+=v,r.value+=p,n.value-=v,o.value.unshift({type:"swap",direction:"B->A",amountIn:S,amountOut:v,timestamp:Date.now()}),e.addLog(25,"代币交换",`支付 ${S} Token B，获得 ${v.toFixed(4)} Token A`,"swapBforA25"),(((A=t.getDayProgress(25))==null?void 0:A.unlockedConcepts)||[]).includes("swap_mechanism")||g.push("swap_mechanism"),f="📍 继续交换查看滑点效果，或点击「➖ 移除流动性」取回代币！",{success:!0,message:`✅ 交换成功！支付 ${S} Token B，获得 ${v.toFixed(4)} Token A`,amountAOut:v,hints:g,nextStep:f})},y=S=>{var k;const b=[];let g="";if(S<=0)return{success:!1,message:"❌ 移除数量必须大于 0"};if(i.value.lpToken<S)return{success:!1,message:"❌ LP代币余额不足"};if(s.value===0)return{success:!1,message:"❌ 流动性池为空"};const f=Math.floor(S*n.value/s.value),p=Math.floor(S*r.value/s.value);i.value.lpToken-=S,i.value.tokenA+=f,i.value.tokenB+=p,n.value-=f,r.value-=p,s.value-=S,o.value.unshift({type:"removeLiquidity",liquidity:S,amountAOut:f,amountBOut:p,timestamp:Date.now()}),e.addLog(25,"移除流动性",`销毁 ${S.toFixed(2)} LP代币，获得 ${f} Token A + ${p} Token B`,"removeLiquidity25");const v=((k=t.getDayProgress(25))==null?void 0:k.unlockedConcepts)||[];return v.includes("remove_liquidity")||b.push("remove_liquidity"),v.includes("reserves_management")||b.push("reserves_management"),g="🎉 移除流动性成功！👉 点击滑点保护说明了解安全防护机制！",{success:!0,message:`✅ 成功移除流动性！获得 ${f} Token A + ${p} Token B`,amountAOut:f,amountBOut:p,hints:b,nextStep:g}},T=(S,b,g)=>{if(S<=0||b===0||g===0)return 0;const f=Math.floor(S*997/1e3);return Math.floor(g*f/(b+f))},_=(S,b)=>S<=0||b===0?0:S/b*100,I=R(()=>({gasUsage:e.getDayGasUsage(25),ethCost:e.getDayEthCost(25),operationCount:e.getDayOperationCount(25)}));return{reserveA:n,reserveB:r,totalSupply:s,userBalances:i,transactions:o,currentPrice:a,realtimeData:I,addLiquidity:u,swapAforB:d,swapBforA:w,removeLiquidity:y,calculateSwapOutput:T,calculatePriceImpact:_}}function Vg(){const t=Pe(),e=me(),n=B([]),r=B(250),s=B("0xMarketplaceOwner..."),i=B(0),o=B({nftAddress:"",tokenId:null,price:null,royaltyReceiver:"",royaltyPercent:0}),a=B(null),c=B([{tokenId:1,nftAddress:"0xNFTContract1...",name:"CryptoArt #1"},{tokenId:2,nftAddress:"0xNFTContract1...",name:"CryptoArt #2"},{tokenId:3,nftAddress:"0xNFTContract2...",name:"GameItem #1"}]),l=B(""),u=B(!1),d=(g,f=!1)=>{l.value=g,u.value=f,setTimeout(()=>{l.value=""},3e3)},w=R(()=>n.value.filter(g=>g.isListed)),y=R(()=>{const g="0xCurrentUser...";return n.value.filter(f=>f.seller===g&&f.isListed)}),T=g=>{var A;const f=[];let p="";if(!g.nftAddress||!g.tokenId||!g.price)return d("❌ 请填写完整的挂单信息",!0),{success:!1,message:"请填写完整的挂单信息"};if(g.price<=0)return d("❌ 价格必须大于 0",!0),{success:!1,message:"价格必须大于 0"};if(g.royaltyPercent>10)return d("❌ 版税比例不能超过 10%",!0),{success:!1,message:"版税比例不能超过 10%"};const v={id:Date.now(),seller:"0xCurrentUser...",nftAddress:g.nftAddress,tokenId:g.tokenId,price:parseFloat(g.price),royaltyReceiver:g.royaltyReceiver||"0xCreator...",royaltyPercent:g.royaltyPercent*100,isListed:!0,createdAt:new Date};return n.value.push(v),e.addLog(26,"挂单NFT",`Token #${g.tokenId} 售价 ${g.price} ETH`,"listNFT26"),(((A=t.getDayProgress(26))==null?void 0:A.unlockedConcepts)||[]).includes("listing_mechanism")?d(`✅ 挂单成功！Token #${g.tokenId} 已在市场上出售`):(f.push("listing_mechanism"),d(`✅ 挂单成功！Token #${g.tokenId} 已在市场上出售
🎉 恭喜解锁：挂单机制！📍 切换到「🏪 购买」标签页体验购买流程！`)),p="📍 切换到「🏪 购买」标签页体验购买流程！",{success:!0,message:`挂单成功！Token #${g.tokenId} 售价 ${g.price} ETH`,listing:v,hints:f,nextStep:p}},_=g=>{var m;const f=[];let p="";if(!g||!g.isListed)return d("❌ 该NFT未在出售中",!0),{success:!1,message:"该NFT未在出售中"};const v=g.price*r.value/1e4,k=g.price*g.royaltyPercent/1e4,A=g.price-v-k;g.isListed=!1,g.buyer="0xCurrentUser...",i.value+=g.price,e.addLog(26,"购买NFT",`Token #${g.tokenId} 价格 ${g.price} ETH`,"buyNFT26");const h=((m=t.getDayProgress(26))==null?void 0:m.unlockedConcepts)||[],E=[];if(h.includes("buy_now_price")||(f.push("buy_now_price"),E.push("一口价")),h.includes("owner_revenue")||(f.push("owner_revenue"),E.push("卖家收益")),E.length>0){const x=E.join("、");d(`✅ 购买成功！Token #${g.tokenId} 已转移到你的账户
🎉 恭喜解锁：${x}！📍 切换到「❌ 取消」标签页学习如何取消挂单！`)}else d(`✅ 购买成功！Token #${g.tokenId} 已转移到你的账户`);return p="📍 切换到「❌ 取消」标签页学习如何取消挂单！",{success:!0,message:`购买成功！Token #${g.tokenId} 已转移`,feeAmount:v,royaltyAmount:k,sellerAmount:A,hints:f,nextStep:p}},I=g=>{var k;const f=[];let p="";return!g||!g.isListed?(d("❌ 该挂单不存在或已取消",!0),{success:!1,message:"该挂单不存在或已取消"}):(g.isListed=!1,e.addLog(26,"取消挂单",`Token #${g.tokenId}`,"cancelListing26"),(((k=t.getDayProgress(26))==null?void 0:k.unlockedConcepts)||[]).includes("cancel_listing")?d(`✅ 挂单已取消！Token #${g.tokenId} 不再出售`):(f.push("cancel_listing"),d(`✅ 挂单已取消！Token #${g.tokenId} 不再出售
🎉 恭喜解锁：取消挂单！🎉 Day26 所有概念已解锁！`)),p="🎉 Day26 所有概念已解锁！",{success:!0,message:`挂单已取消！Token #${g.tokenId}`,hints:f,nextStep:p})},S=(g,f)=>{if(!g||g<=0)return{feeAmount:0,royaltyAmount:0,sellerAmount:0};const p=g*r.value/1e4,v=g*f/1e4,k=g-p-v;return{feeAmount:p,royaltyAmount:v,sellerAmount:k}},b=R(()=>({gasUsage:e.getDayGasUsage(26),ethCost:e.getDayEthCost(26),operationCount:e.getDayOperationCount(26)}));return{listings:n,marketplaceFeePercent:r,feeRecipient:s,totalVolume:i,listForm:o,selectedListing:a,userNFTs:c,activeListings:w,myListings:y,message:l,isError:u,listNFT:T,buyNFT:_,cancelListing:I,calculateDistribution:S,showMessage:d,realtimeData:b}}function Hg(){const t=me(),e=B(1e3),n=B(18),r=B(5e4),s=B(0),i=B({stakedAmount:0,rewardDebt:0,lastUpdate:Date.now()}),o=B({stake:5e3,reward:1e3}),a=B("staker"),c=B({amount:""}),l=B({amount:""}),u=B({amount:""}),d=B([]),w=B(""),y=B(!1),T=(E,m=!1)=>{w.value=E,y.value=m,setTimeout(()=>{w.value=""},3e3)},_=(E,m,x)=>{const L=new Date,q=`${L.getHours().toString().padStart(2,"0")}:${L.getMinutes().toString().padStart(2,"0")}:${L.getSeconds().toString().padStart(2,"0")}`;d.value.unshift({type:E,icon:m,message:x,time:q}),d.value.length>20&&(d.value=d.value.slice(0,20))},I=()=>{const E=Date.now(),m=Math.floor((E-i.value.lastUpdate)/1e3);if(m>0&&i.value.stakedAmount>0){const x=10**n.value,L=m*e.value*i.value.stakedAmount/x;i.value.rewardDebt+=L}i.value.lastUpdate=E},S=R(()=>{const E=Date.now(),m=Math.floor((E-i.value.lastUpdate)/1e3),x=10**n.value,L=m*e.value*i.value.stakedAmount/x;return i.value.rewardDebt+L}),b=E=>(a.value=E,E==="owner"?{success:!0,message:"👑 已切换到 Owner 身份！",nextStep:"📍 向下滚动到「👑 Owner 操作」区块，输入补充数量后点击「💰 补充奖励」按钮！"}:{success:!0,message:"👤 已切换到 Staker 身份！",nextStep:"📍 向下滚动到「🔄 质押操作」区块，在「💧 质押」标签页输入数量，然后点击「💧 质押代币」按钮！"}),g=E=>{const m=parseFloat(E);return!m||m<=0?(T("请输入有效的质押数量",!0),{success:!1,message:"无效的质押数量"}):o.value.stake<m?(T("STAKE 余额不足",!0),{success:!1,message:"余额不足"}):(I(),i.value.stakedAmount+=m,o.value.stake-=m,s.value+=m,t.addLog(27,"质押代币",`质押 ${m} STAKE`,"stake27"),_("staked","💧",`质押 ${m} STAKE`),T(`💧 质押成功！质押 ${m} STAKE`),{success:!0,message:`质押 ${m} STAKE 成功`,hints:["stake_function"],nextStep:'⏱️ 奖励正在实时累积中，点击"快进"按钮加速查看效果！'})},f=E=>{const m=parseFloat(E);return!m||m<=0?(T("请输入有效的取消质押数量",!0),{success:!1,message:"无效的取消质押数量"}):i.value.stakedAmount<m?(T("质押数量不足",!0),{success:!1,message:"质押数量不足"}):(I(),i.value.stakedAmount-=m,o.value.stake+=m,s.value-=m,t.addLog(27,"取消质押",`取消质押 ${m} STAKE`,"unstake27"),_("unstaked","💸",`取消质押 ${m} STAKE`),T(`💸 取消质押成功！取回 ${m} STAKE`),{success:!0,message:`取消质押 ${m} STAKE 成功`,hints:["unstake_function"],nextStep:"👉 点击安全防护区了解重入保护！"})},p=()=>{I();const E=i.value.rewardDebt;return E<=0?(T("没有可领取的奖励",!0),{success:!1,message:"没有可领取的奖励"}):r.value<E?(T("奖励池余额不足",!0),{success:!1,message:"奖励池余额不足"}):(i.value.rewardDebt=0,o.value.reward+=E,r.value-=E,t.addLog(27,"领取奖励",`领取 ${E.toFixed(4)} REWARD`,"claimRewards27"),_("reward_claimed","🎁",`领取 ${E.toFixed(4)} REWARD`),T(`🎁 奖励领取成功！获得 ${E.toFixed(4)} REWARD`),{success:!0,message:`领取 ${E.toFixed(4)} REWARD 成功`,hints:["claim_rewards"],nextStep:"👉 尝试取消质押部分代币！"})},v=()=>{const E=i.value.stakedAmount;if(E<=0)return T("没有可提取的质押",!0),{success:!1,message:"没有可提取的质押"};const m=i.value.rewardDebt;return i.value.stakedAmount=0,i.value.rewardDebt=0,i.value.lastUpdate=Date.now(),o.value.stake+=E,s.value-=E,t.addLog(27,"紧急提取",`紧急提取 ${E} STAKE，放弃 ${m.toFixed(4)} REWARD 奖励`,"emergencyWithdraw27"),_("emergency_withdraw","🚨",`紧急提取 ${E} STAKE，放弃奖励`),T(`🚨 紧急提取成功！取回 ${E} STAKE，放弃 ${m.toFixed(4)} REWARD 奖励`),{success:!0,message:`紧急提取 ${E} STAKE 成功`,hints:["emergency_withdraw"],nextStep:"🎉 恭喜完成 Day 27 学习！所有知识点已解锁！"}},k=E=>{const m=parseFloat(E);return!m||m<=0?(T("请输入有效的补充数量",!0),{success:!1,message:"无效的补充数量"}):(r.value+=m,t.addLog(27,"补充奖励",`补充 ${m} REWARD 到奖励池`,"refillRewards27"),_("reward_refilled","💰",`Owner 补充 ${m} REWARD 到奖励池`),T(`💰 奖励池已补充 ${m} REWARD`),{success:!0,message:`补充 ${m} REWARD 成功`,hints:[],nextStep:"👉 切换到 Staker 角色参与质押！"})},A=E=>{const m=E*3600*1e3;return i.value.lastUpdate-=m,T(`⏩ 时间快进${E}小时！奖励已累积！`),{success:!0,message:`⏩ 时间快进${E}小时！`,nextStep:"⏱️ 看到奖励增长了吗？这就是时间加权的魅力！📍 向下滚动到「🔄 质押操作」区，点击「🎁 领取奖励」标签页，然后点击「🎁 领取奖励」按钮！"}},h=R(()=>({gasUsage:t.getDayGasUsage(27),ethCost:t.getDayEthCost(27),operationCount:t.getDayOperationCount(27)}));return{rewardRatePerSecond:e,stakingTokenDecimals:n,rewardPoolBalance:r,totalStaked:s,stakerInfo:i,walletBalances:o,currentRole:a,stakeForm:c,unstakeForm:l,refillForm:u,events:d,message:w,isError:y,pendingRewards:S,realtimeData:h,showMessage:T,toggleRole:b,stake:g,unstake:f,claimRewards:p,emergencyWithdraw:v,refillRewards:k,fastForwardTime:A,updateRewards:I}}function Wg(){const t=me(),e=B("TokenHolder"),n=B(Date.now()),r=B(""),s=B(!1);let i=null;const o=(P,z=!1)=>{r.value=P,s.value=z,i&&clearTimeout(i),i=setTimeout(()=>{r.value="",s.value=!1},3e3)},a=B([{id:1,description:"升级协议版本",state:"Active",deadline:Date.now()+2*24*60*60*1e3,votesFor:3e4,votesAgainst:1e4,executionTime:null,executed:!1,proposer:"0x1234...5678",hasVoted:{}},{id:2,description:"调整手续费",state:"Queued",deadline:Date.now()-24*60*60*1e3,votesFor:45e3,votesAgainst:5e3,executionTime:Date.now()+1*24*60*60*1e3,executed:!1,proposer:"0xabcd...ef01",hasVoted:{}}]),c=B([]),l=B({balance:5e3,totalSupply:1e5,votingPower:5e3}),u=B(2),d=B(""),w=B(""),y=B(""),T=B(1),_=R(()=>a.value.filter(P=>P.state==="Active")),I=R(()=>a.value.filter(P=>P.state==="Queued")),S=R(()=>a.value.filter(P=>P.state==="Active"&&n.value>=P.deadline)),b=R(()=>a.value.filter(P=>P.state==="Queued"&&n.value>=P.executionTime&&!P.executed)),g=R(()=>a.value.find(P=>P.id===T.value)),f=R(()=>{const P=g.value;return P?P.state:"Unknown"}),p=R(()=>{const P=g.value;return P?P.state==="Active"&&n.value<P.deadline&&!P.hasVoted.currentUser&&l.value.votingPower>0:!1}),v=R(()=>{const P=g.value;return P?P.state==="Active"&&n.value>=P.deadline&&!P.executed:!1}),k=R(()=>{const P=g.value;return P?P.state==="Queued"&&n.value>=P.executionTime&&!P.executed:!1}),A=P=>(e.value=P,{success:!0,message:`已切换到 ${P} 角色`,hints:[],nextStep:h(P)}),h=P=>({TokenHolder:"👉 选择提案并投票！",Proposer:"👉 创建一个新提案！",Executor:"👉 最终确定或执行提案！"})[P]||"",E=P=>{const z=P*24*60*60*1e3;return n.value+=z,a.value.forEach(X=>{X.state==="Active"&&n.value>=X.deadline}),{success:!0,message:`⏩ 时间快进 ${P} 天！`,hints:[],nextStep:"👉 查看提案状态变化！"}},m=(P,z,X)=>{if(!P||!z)return{success:!1,message:"❌ 请填写完整的提案信息",hints:[],nextStep:""};if(l.value.balance<100)return{success:!1,message:"❌ 余额不足，需要100 GOVERN作为押金",hints:[],nextStep:""};u.value++;const ie={id:u.value,description:P,state:"Active",deadline:n.value+3*24*60*60*1e3,votesFor:0,votesAgainst:0,executionTime:null,executed:!1,proposer:"currentUser",hasVoted:{},target:z,data:X};return a.value.push(ie),l.value.balance-=100,t.addLog(28,"创建提案",`提案 #${ie.id}: ${P}`,"createProposal28"),{success:!0,message:`📝 提案 #${ie.id} 创建成功！`,hints:["proposal_struct"],nextStep:"👉 切换到 TokenHolder 角色参与投票！"}},x=(P,z)=>{const X=a.value.find(le=>le.id===P);if(!X)return{success:!1,message:"❌ 提案不存在",hints:[],nextStep:""};if(X.state!=="Active")return{success:!1,message:"❌ 提案不在投票期",hints:[],nextStep:""};if(n.value>=X.deadline)return{success:!1,message:"❌ 投票期已结束",hints:[],nextStep:""};if(X.hasVoted.currentUser)return{success:!1,message:"❌ 您已经投过票了",hints:[],nextStep:""};if(l.value.votingPower<=0)return{success:!1,message:"❌ 您没有投票权",hints:[],nextStep:""};const ie=l.value.votingPower;return X.hasVoted.currentUser=!0,z?X.votesFor+=ie:X.votesAgainst+=ie,t.addLog(28,"投票",`提案 #${P}: ${z?"赞成":"反对"} (${ie}票)`,"vote28"),{success:!0,message:`🗳️ 投票成功！${z?"赞成":"反对"} ${ie} 票`,hints:["voting_function"],nextStep:"👉 等待投票结束或切换到 Executor 角色！"}},L=P=>{const z=a.value.find(le=>le.id===P);if(!z)return{success:!1,message:"❌ 提案不存在",hints:[],nextStep:""};if(n.value<z.deadline)return{success:!1,message:"❌ 投票期尚未结束",hints:[],nextStep:"👉 使用快进时间功能加速！"};if(z.executed)return{success:!1,message:"❌ 提案已执行",hints:[],nextStep:""};const X=z.votesFor+z.votesAgainst,ie=l.value.totalSupply*10/100;return X<ie?(z.state="Defeated",{success:!1,message:"❌ 未达到法定人数，提案被否决",hints:[],nextStep:""}):z.votesFor<=z.votesAgainst?(z.state="Defeated",{success:!1,message:"❌ 赞成票未超过反对票，提案被否决",hints:[],nextStep:""}):(z.state="Queued",z.executionTime=n.value+2*24*60*60*1e3,t.addLog(28,"最终确定提案",`提案 #${P} 已通过，进入时间锁`,"finalize28"),{success:!0,message:"✅ 提案通过，进入时间锁！",hints:["finalize_function"],nextStep:"👉 等待时间锁过期后执行提案！"})},q=P=>{const z=a.value.find(X=>X.id===P);return z?z.state!=="Queued"?{success:!1,message:"❌ 提案不在时间锁中",hints:[],nextStep:""}:n.value<z.executionTime?{success:!1,message:"❌ 时间锁尚未过期",hints:[],nextStep:"👉 使用快进时间功能加速！"}:z.executed?{success:!1,message:"❌ 提案已执行",hints:[],nextStep:""}:(z.executed=!0,z.state="Executed",z.proposer==="currentUser"&&(l.value.balance+=100),t.addLog(28,"执行提案",`提案 #${P} 执行成功，押金已退还`,"execute28"),{success:!0,message:"🔧 提案执行成功！押金已退还",hints:["low_level_call"],nextStep:"🎉 恭喜完成 Day 28 学习！"}):{success:!1,message:"❌ 提案不存在",hints:[],nextStep:""}},$=P=>new Date(P).toLocaleString("zh-CN"),F=P=>{if(P<=0)return"已过期";const z=Math.floor(P/(24*60*60*1e3)),X=Math.floor(P%(24*60*60*1e3)/(60*60*1e3));return`${z}天 ${X}小时`},O=R(()=>({gasUsage:t.getDayGasUsage(28),ethCost:t.getDayEthCost(28),operationCount:t.getDayOperationCount(28)}));return{currentRole:e,currentTime:n,proposals:a,userTokenData:l,proposalCount:u,newProposalDescription:d,newProposalTarget:w,newProposalData:y,selectedProposalId:T,message:r,isError:s,events:c,activeProposals:_,queuedProposals:I,finalizedProposals:S,executableProposals:b,selectedProposal:g,currentProposalState:f,canVote:p,canFinalize:v,canExecute:k,realtimeData:O,switchRole:A,fastForwardTime:E,createProposal:m,vote:x,finalize:L,execute:q,formatTime:$,formatTimeLeft:F,showMessage:o}}function zg(){const t=me(),e=B(2e3*1e8),n=B(0),r=B(0),s=B(0),i=B(0),o=B(0),a=B([{address:"0xabcd...ef01",collateral:1e18,debt:1e21},{address:"0x9876...5432",collateral:5e17,debt:8e20}]),c=B([]),l=B(0),u=B(0),d=R(()=>e.value*1e10/1e18),w=R(()=>s.value*e.value*1e10/1e36),y=R(()=>i.value===0?999:w.value*100/i.value),T=R(()=>w.value*100/150*1e18),_=R(()=>Math.max(0,T.value-i.value)),I=R(()=>r.value===0?0:n.value*e.value*1e10/1e36*100/r.value),S=R(()=>a.value.filter(x=>{const L=x.collateral*e.value*1e10/1e36;return(x.debt>0?L*100/x.debt:999)<150&&x.debt>0}).map(x=>{const L=x.collateral*e.value*1e10/1e36,q=x.debt>0?L*100/x.debt:999,$=x.collateral*1.05;return{...x,collateralValue:L,healthFactor:q,liquidationReward:$}})),b=R(()=>({gasUsage:t.getDayGasUsage(29),ethCost:t.getDayEthCost(29),operationCount:t.getDayOperationCount(29)})),g=(x,L)=>{const q={type:x,timestamp:new Date().toLocaleString(),...L};c.value.unshift(q)},f=(x,L,q)=>{l.value++,u.value+=tt[q]||0,t.addLog(29,x,L,q)};return{ethPrice:e,totalCollateral:n,totalSupply:r,userCollateral:s,userDebt:i,userSUSDBalance:o,otherUsers:a,events:c,operationCount:l,totalGasUsed:u,ethPriceInUsd:d,userCollateralValue:w,userHealthFactor:y,maxMintable:T,remainingMintable:_,systemCollateralRatio:I,liquidationCandidates:S,realtimeData:b,depositCollateral:x=>{if(x<=0)return{success:!1,message:"❌ 存入金额必须大于0",hints:[],nextStep:""};s.value+=x,n.value+=x;const L=tt.depositCollateral29;return f("存入抵押品",`${x/1e18} ETH`,"depositCollateral29"),g("CollateralDeposited",{user:"currentUser",amount:x}),{success:!0,message:"✅ 存入抵押品成功！🎉 恭喜解锁：存入抵押品！将ETH等加密资产存入智能合约作为抵押，是DeFi借贷的第一步！👉 切换到「🏦 铸造稳定币」标签铸造SUSD！",hints:["deposit_collateral"],nextStep:"👉 切换到「🏦 铸造稳定币」标签铸造SUSD！",gasUsed:L}},mintStablecoin:x=>{if(x<=0)return{success:!1,message:"❌ 铸造金额必须大于0",hints:[],nextStep:""};if(i.value+x>T.value)return{success:!1,message:"❌ 抵押品不足！无法铸造这么多SUSD",hints:[],nextStep:"👉 先存入更多ETH抵押品，或减少铸造数量"};i.value+=x,o.value+=x,r.value+=x;const L=tt.mintStablecoin29;return f("铸造稳定币",`${x/1e18} SUSD`,"mintStablecoin29"),g("StablecoinMinted",{user:"currentUser",amount:x}),{success:!0,message:"✅ 铸造SUSD成功！🎉 恭喜解锁：铸造稳定币！根据存入的抵押品价值，按照抵押率铸造相应数量的稳定币，实现去中心化货币发行！👉 尝试销毁一些SUSD或提取部分抵押品！",hints:["mint_stablecoin"],nextStep:"👉 尝试销毁一些SUSD或提取部分抵押品！",gasUsed:L}},burnStablecoin:x=>{if(x<=0)return{success:!1,message:"❌ 销毁金额必须大于0",hints:[],nextStep:""};if(x>o.value)return{success:!1,message:"❌ SUSD余额不足",hints:[],nextStep:""};i.value-=x,o.value-=x,r.value-=x;const L=tt.burnStablecoin29;return f("销毁稳定币",`${x/1e18} SUSD`,"burnStablecoin29"),g("StablecoinBurned",{user:"currentUser",amount:x}),{success:!0,message:"✅ 销毁SUSD成功！🎉 恭喜解锁：销毁稳定币！销毁稳定币可以减少债务，提高健康因子，是管理抵押债务的重要操作！👉 尝试提取抵押品或降低ETH价格演示清算！",hints:["burn_stablecoin"],nextStep:"👉 尝试提取抵押品或降低ETH价格演示清算！",gasUsed:L}},withdrawCollateral:x=>{if(x<=0)return{success:!1,message:"❌ 提取金额必须大于0",hints:[],nextStep:""};if(x>s.value)return{success:!1,message:"❌ 抵押品余额不足",hints:[],nextStep:""};const L=s.value-x,q=L*e.value*1e10/1e36,$=i.value/1e18*150/100;if(q<$&&i.value>0)return{success:!1,message:"❌ 提取后健康因子过低！请先销毁部分SUSD",hints:[],nextStep:"👉 先销毁一些SUSD降低债务，再提取抵押品"};s.value=L,n.value-=x;const F=tt.withdrawCollateral29;return f("提取抵押品",`${x/1e18} ETH`,"withdrawCollateral29"),g("CollateralWithdrawn",{user:"currentUser",amount:x}),{success:!0,message:"✅ 提取抵押品成功！🎉 恭喜解锁：提取抵押品！在满足抵押率要求的前提下，可以提取部分抵押品，实现资金灵活使用！👉 降低ETH价格到$1400以下，然后执行清算！",hints:["withdraw_collateral"],nextStep:"👉 降低ETH价格到$1400以下，然后执行清算！",gasUsed:F}},updateEthPrice:x=>{e.value=x*1e8,g("PriceUpdated",{newPrice:x,timestamp:Date.now()});const L=S.value;return{success:!0,message:`✅ ETH价格已更新为 $${x}`,hints:[],nextStep:L.length>0?`👉 发现 ${L.length} 个可清算头寸！前往清算区执行清算！`:"👉 当前没有可清算头寸，尝试进一步降低价格",candidates:L.length}},liquidate:x=>{const L=a.value.findIndex(X=>X.address===x);if(L===-1)return{success:!1,message:"❌ 用户不存在",hints:[],nextStep:""};const q=a.value[L],$=q.collateral*e.value*1e10/1e36;if((q.debt>0?$*100/q.debt:999)>=150)return{success:!1,message:"❌ 该头寸健康，无法清算",hints:[],nextStep:"👉 降低ETH价格使健康因子低于150%"};const P=q.collateral*1.05;n.value-=q.collateral,r.value-=q.debt,a.value.splice(L,1);const z=tt.liquidate29;return f("清算",`清算用户 ${x}`,"liquidate29"),g("Liquidation",{liquidator:"currentUser",user:x,debtPaid:q.debt,collateralSeized:P}),{success:!0,message:"✅ 清算成功！🎉 恭喜解锁：清算机制！当抵押品价值下跌导致健康因子低于阈值时，清算人可以代还债务并获得抵押品加奖励，维护系统稳定！🎉 恭喜完成Day 29所有概念学习！",hints:["liquidation"],nextStep:"🎉 恭喜完成Day 29所有概念学习！",gasUsed:z,reward:P}},resetState:()=>{s.value=0,i.value=0,o.value=0,n.value=0,r.value=0,l.value=0,u.value=0,c.value=[],a.value=[{address:"0xabcd...ef01",collateral:1e18,debt:1e21},{address:"0x9876...5432",collateral:5e17,debt:8e20}]}}}function Gg(t){return{realtimeData:R(()=>{switch(t.value){case 1:return bp().realtimeData.value;case 2:return vp().realtimeData.value;case 3:return wp().realtimeData.value;case 4:return _p().realtimeData.value;case 5:return kp().realtimeData.value;case 6:return xp().realtimeData.value;case 7:return Ap().realtimeData.value;case 8:return Tp().realtimeData.value;case 9:return Cp().realtimeData.value;case 10:return Ep().realtimeData.value;case 11:return Sp().realtimeData.value;case 12:return Ip().realtimeData.value;case 13:return Dp().realtimeData.value;case 14:return Rp().realtimeData.value;case 15:return Op().realtimeData.value;case 16:return Og().realtimeData.value;case 17:return Pg().realtimeData.value;case 18:return Bg().realtimeData.value;case 19:return Lg().realtimeData.value;case 20:return Fg().realtimeData.value;case 21:return Ng().realtimeData.value;case 22:return $g().realtimeData.value;case 23:return qg().realtimeData.value;case 24:return Mg().realtimeData.value;case 25:return Ug().realtimeData.value;case 26:return Vg().realtimeData.value;case 27:return Hg().realtimeData.value;case 28:return Wg().realtimeData.value;case 29:return zg().realtimeData.value;default:return{gasUsage:0,ethCost:0,operationCount:0}}})}}const fs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Kg={class:"header"},jg={class:"header-center"},Yg={class:"main-title"},Xg={class:"easter-egg-container"},Zg={__name:"AppHeader",props:{showLeftSidebar:{type:Boolean,default:!0},showRightSidebar:{type:Boolean,default:!0}},emits:["toggle-left-sidebar","toggle-right-sidebar"],setup(t){const e=B(!1),n=()=>{e.value=!e.value,e.value?(document.documentElement.dataset.theme="dark",localStorage.setItem("theme","dark")):(document.documentElement.dataset.theme="light",localStorage.setItem("theme","light"))},r=B(!1),s=B(!1),i=B("");let o=null;const a=["In Code We Trust!","🔮 今日宜：部署主网；忌：未 Audit","⚠️ 注意你的 Reentrancy 漏洞！","Gas 费太高了，先在这练练手！","HODL! 到下一个牛市！","🎉 签运：大吉！编译一遍过","🚀 To the Moon!","智能合约，不可篡改！","🧐 别忘了测边缘情况"],c=()=>{if(r.value)return;r.value=!0,setTimeout(()=>{r.value=!1},600);const l=a[Math.floor(Math.random()*a.length)];i.value=l,s.value=!0,o&&clearTimeout(o),o=setTimeout(()=>{s.value=!1},3e3)};return Ao(()=>{(localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"))==="dark"&&(e.value=!0,document.documentElement.dataset.theme="dark")}),(l,u)=>(xe(),Ee("div",Kg,[Q("button",{class:At(["sidebar-toggle-btn left-toggle",{active:t.showLeftSidebar}]),onClick:u[0]||(u[0]=d=>l.$emit("toggle-left-sidebar"))}," 📅 日程 ",2),Q("div",jg,[Q("h1",Yg,[Q("div",Xg,[Q("button",{class:At(["easter-egg-btn",{animating:r.value}]),onClick:c,title:"点这里有惊喜"}," 🎓 ",2),Q("div",{class:At(["toast-message",{show:s.value}])},Re(i.value),3)]),u[2]||(u[2]=Q("span",null,"Solidity 学习互动演示",-1)),Q("button",{class:"theme-toggle-btn",onClick:n,title:"切换模式"},Re(e.value?"☀️":"🌙"),1)]),u[3]||(u[3]=Q("div",{class:"warning-banner"},[Q("span",null,"模拟环境，不消耗真实 Gas 或 ETH"),Q("span",{class:"author-credit"},[Gr("by "),Q("a",{href:"https://github.com/Tenlossiby",target:"_blank",rel:"noopener noreferrer"},"Tenlossiby")])],-1))]),Q("button",{class:At(["sidebar-toggle-btn right-toggle",{active:t.showRightSidebar}]),onClick:u[1]||(u[1]=d=>l.$emit("toggle-right-sidebar"))}," 📊 进度 ",2)]))}},Jg=fs(Zg,[["__scopeId","data-v-9217367d"]]),Qg={class:"left-sidebar"},eh={class:"sidebar-header"},th=["title"],nh=["onClick"],rh={class:"day-nav-header"},sh={class:"day-title"},ih={class:"day-subtitle"},oh={__name:"DayNavigation",props:{currentDay:{type:Number,required:!0}},emits:["switchDay"],setup(t){const e=B(!0),n=()=>{e.value=!e.value},r=R(()=>{const i=Object.keys(xr).map(Number);return e.value?i:i.reverse()}),s=i=>{var o;return i===14?"安全存款盒/SafeDeposit":((o=xr[i])==null?void 0:o.subtitle)||"待定内容"};return(i,o)=>(xe(),Ee("div",Qg,[Q("div",eh,[o[0]||(o[0]=Q("h3",null,"📚 学习导航",-1)),Q("button",{class:"sort-toggle-btn",onClick:n,title:e.value?"点击切换倒序":"点击切换正序"},Re(e.value?"🔼 正序":"🔽 倒序"),9,th)]),(xe(!0),Ee(lt,null,qs(r.value,a=>(xe(),Ee("div",{key:a,class:At(["day-nav-item",{active:t.currentDay===a}]),onClick:c=>i.$emit("switchDay",a)},[Q("div",rh,[Q("div",sh,"Day "+Re(a),1)]),Q("div",ih,Re(s(a)),1)],10,nh))),128))]))}},ah=fs(oh,[["__scopeId","data-v-6c23ceee"]]),ch="modulepreload",lh=function(t,e){return new URL(t,e).href},fc={},ye=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=lh(l,r),l in fc)return;fc[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!r)for(let T=o.length-1;T>=0;T--){const _=o[T];if(_.href===l&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const y=document.createElement("link");if(y.rel=u?"stylesheet":ch,u||(y.as="script"),y.crossOrigin="",y.href=l,c&&y.setAttribute("nonce",c),document.head.appendChild(y),u)return new Promise((T,_)=>{y.addEventListener("load",T),y.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},uh={class:"coming-soon-content"},dh={class:"coming-soon-card"},fh={class:"description"},ph={class:"suggestion"},mh={class:"available-days"},gh=["onClick"],hh={__name:"ComingSoon",props:{day:{type:Number,default:0}},emits:["switchDay"],setup(t,{emit:e}){const n=e,r=Object.keys(xr).map(Number).sort((i,o)=>i-o),s=i=>{n("switchDay",i)};return(i,o)=>(xe(),Ee("div",uh,[Q("div",dh,[o[1]||(o[1]=Q("div",{class:"icon"},"🚧",-1)),o[2]||(o[2]=Q("h2",null,"内容建设中",-1)),o[3]||(o[3]=Q("p",{class:"subtitle"},"Coming Soon",-1)),Q("p",fh," Day "+Re(t.day)+" 的内容正在开发中，敬请期待！ ",1),Q("div",ph,[o[0]||(o[0]=Q("p",null,"💡 提示：目前可用的学习内容：",-1)),Q("div",mh,[(xe(!0),Ee(lt,null,qs(Zr(r),a=>(xe(),Ee("span",{key:a,class:"day-tag",onClick:c=>s(a)}," Day "+Re(a),9,gh))),128))])])])]))}},yh=fs(hh,[["__scopeId","data-v-8b051cae"]]),bh={class:"center-content"},vh={__name:"DayContent",props:{currentDay:{type:Number,required:!0}},emits:["switchDay"],setup(t,{emit:e}){const n={1:he(()=>ye(()=>import("./ClickCounter-BJZev8XM.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),2:he(()=>ye(()=>import("./SaveMyName-BZ808SLh.js"),__vite__mapDeps([4,1,2,5]),import.meta.url)),3:he(()=>ye(()=>import("./PollStation-Dcl-SXAs.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)),4:he(()=>ye(()=>import("./AuctionHouse-BqohSRdo.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)),5:he(()=>ye(()=>import("./AdminOnly-vViSIIxB.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)),6:he(()=>ye(()=>import("./EtherPiggyBank-C1SCxijO.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)),7:he(()=>ye(()=>import("./SimpleIOUApp-CPEl9Pyo.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)),8:he(()=>ye(()=>import("./TipJar-Blk3bioW.js"),__vite__mapDeps([16,1,2,17]),import.meta.url)),9:he(()=>ye(()=>import("./SmartCalculator-jkPkph7S.js"),__vite__mapDeps([18,1,2,19]),import.meta.url)),10:he(()=>ye(()=>import("./ActivityTracker-BTFUQdCr.js"),__vite__mapDeps([20,1,2,21]),import.meta.url)),11:he(()=>ye(()=>import("./MasterkeyContract-xMdZ7Dmd.js"),__vite__mapDeps([22,1,2,23]),import.meta.url)),12:he(()=>ye(()=>import("./ERC20Token-Cu-BN6aW.js"),__vite__mapDeps([24,1,2,25]),import.meta.url)),13:he(()=>ye(()=>import("./MyToken-BQMHeOI5.js"),__vite__mapDeps([26,1,2,27]),import.meta.url)),14:he(()=>ye(()=>import("./SafeDeposit-CsSNavPn.js"),__vite__mapDeps([28,1,2,29]),import.meta.url)),15:he(()=>ye(()=>import("./GasEfficientVoting-CmAlvn7h.js"),__vite__mapDeps([30,1,2,31]),import.meta.url)),16:he(()=>ye(()=>import("./PluginStore-D5-oLLJ-.js"),__vite__mapDeps([32,1,2,33]),import.meta.url)),17:he(()=>ye(()=>import("./UpgradeHub-DwcDuseR.js"),__vite__mapDeps([34,1,2,35]),import.meta.url)),18:he(()=>ye(()=>import("./OracleContract-Cj3DTPy4.js"),__vite__mapDeps([36,1,2,37]),import.meta.url)),19:he(()=>ye(()=>import("./SignThis-CQ40y9kD.js"),__vite__mapDeps([38,1,2,39]),import.meta.url)),20:he(()=>ye(()=>import("./ReentryAttack-BpAdYaaP.js"),__vite__mapDeps([40,1,2,41]),import.meta.url)),21:he(()=>ye(()=>import("./SimpleNFT-W3oQ3_tt.js"),__vite__mapDeps([42,1,2,43]),import.meta.url)),22:he(()=>ye(()=>import("./FairChainLottery-BmeVJ4Jk.js"),__vite__mapDeps([44,1,2,45]),import.meta.url)),23:he(()=>ye(()=>import("./SimpleLending-Bnlg7R6C.js"),__vite__mapDeps([46,1,2,47]),import.meta.url)),24:he(()=>ye(()=>import("./EnhancedSimpleEscrow-DIPOd9KQ.js"),__vite__mapDeps([48,1,2,49]),import.meta.url)),25:he(()=>ye(()=>import("./AutomatedMarketMaker-BuN6NysU.js"),__vite__mapDeps([50,1,2,51]),import.meta.url)),26:he(()=>ye(()=>import("./NFTMarketplace-Dswmcl7h.js"),__vite__mapDeps([52,1,2,53]),import.meta.url)),27:he(()=>ye(()=>import("./YieldFarming-DwSsk18g.js"),__vite__mapDeps([54,1,2,55]),import.meta.url)),28:he(()=>ye(()=>import("./DecentralizedGovernance-BEspnZri.js"),__vite__mapDeps([56,1,2,57]),import.meta.url)),29:he(()=>ye(()=>import("./SimpleStablecoin-w7tyMWhz.js"),__vite__mapDeps([58,1,2,59]),import.meta.url))},r=t,s=e,i=R(()=>n[r.currentDay]||yh),o=a=>{s("switchDay",a)};return(a,c)=>(xe(),Ee("div",bh,[(xe(),pl(Sd(i.value),{key:t.currentDay,day:t.currentDay,onSwitchDay:o},null,40,["day"]))]))}},wh=fs(vh,[["__scopeId","data-v-cc22af73"]]),_h={class:"right-sidebar"},kh={class:"sidebar-card"},xh={class:"progress-bar"},Ah={class:"progress-stats"},Th={class:"sidebar-card"},Ch={class:"unlocked-list"},Eh={key:0,class:"locked"},Sh={class:"icon"},Ih={key:0,class:"sidebar-card"},Dh={class:"realtime-data"},Rh={key:0},Oh={class:"data-row"},Ph={class:"value"},Bh={class:"data-row"},Lh={class:"value"},Fh={class:"data-row"},Nh={class:"value"},$h={key:1,class:"no-operations"},qh={class:"sidebar-card"},Mh={class:"operation-log"},Uh={key:0,class:"no-operations"},Vh={key:1},Hh={class:"data-row"},Wh={class:"timestamp"},zh={key:0,class:"data-row gas-info"},Gh={class:"value"},Kh={class:"value"},jh={__name:"Sidebar",props:{realtimeData:{type:Object,default:null},dayProgress:{type:Object,required:!0},currentDay:{type:Number,required:!0}},setup(t){const e=t,n=me(),r=R(()=>n.getDayLogs(e.currentDay)),s=R(()=>{const c=e.dayProgress[e.currentDay];return!c||c.totalConcepts===0?0:Math.floor(c.unlockedConcepts.length/c.totalConcepts*100)}),i=R(()=>{const c=e.dayProgress[e.currentDay];return(c==null?void 0:c.unlockedConcepts.length)||0}),o=R(()=>{const c=e.dayProgress[e.currentDay];return(c==null?void 0:c.totalConcepts)||0}),a=R(()=>{const c=xr[e.currentDay];if(!c||!c.concepts)return[];const l=e.dayProgress[e.currentDay],u=(l==null?void 0:l.unlockedConcepts)||[];let d=Jf;return e.currentDay===11?d=Qf:e.currentDay===12?d=tp:e.currentDay===13?d=ep:e.currentDay===14?d=np:e.currentDay===15?d=rp:e.currentDay===16?d=sp:e.currentDay===17?d=ip:e.currentDay===18?d=op:e.currentDay===19?d=ap:e.currentDay===20?d=cp:e.currentDay===21?d=lp:e.currentDay===22?d=up:e.currentDay===23?d=dp:e.currentDay===24?d=fp:e.currentDay===25?d=pp:e.currentDay===26?d=mp:e.currentDay===27?d=gp:e.currentDay===28?d=hp:e.currentDay===29&&(d=yp),c.concepts.map(w=>{const y=d[w];return{key:w,name:(y==null?void 0:y.name)||w,icon:u.includes(w)?y==null?void 0:y.icon:"🔒",isUnlocked:u.includes(w)}})});return(c,l)=>(xe(),Ee("div",_h,[Q("div",kh,[l[0]||(l[0]=Q("h3",null,"🎓 学习进度",-1)),Q("div",xh,[Q("div",{class:"progress-fill",style:ti({width:s.value+"%"})},null,4)]),Q("div",Ah,[Q("span",null,"完成度 "+Re(s.value)+"%",1),Q("span",null,"已解锁 "+Re(i.value)+"/"+Re(o.value),1)])]),Q("div",Th,[l[2]||(l[2]=Q("h3",null,"✅ 已解锁概念",-1)),Q("ul",Ch,[a.value.length===0?(xe(),Ee("li",Eh,[...l[1]||(l[1]=[Q("span",{class:"icon"},"🚧",-1),Gr(" 内容开发中... ",-1)])])):Ss("",!0),(xe(!0),Ee(lt,null,qs(a.value,u=>(xe(),Ee("li",{key:u.key,class:At({locked:!u.isUnlocked})},[Q("span",Sh,Re(u.icon),1),Gr(" "+Re(u.name),1)],2))),128))])]),t.realtimeData?(xe(),Ee("div",Ih,[l[6]||(l[6]=Q("h3",null,"📊 实时数据",-1)),Q("div",Dh,[t.realtimeData.operationCount>0?(xe(),Ee("div",Rh,[Q("div",Oh,[l[3]||(l[3]=Q("span",{class:"label"},"操作次数：",-1)),Q("span",Ph,Re(t.realtimeData.operationCount),1)]),Q("div",Bh,[l[4]||(l[4]=Q("span",{class:"label"},"Gas 消耗：",-1)),Q("span",Lh,Re(t.realtimeData.gasUsage.toLocaleString()),1)]),Q("div",Fh,[l[5]||(l[5]=Q("span",{class:"label"},"ETH 费用：",-1)),Q("span",Nh,Re(t.realtimeData.ethCost.toFixed(6)),1)])])):(xe(),Ee("div",$h," 暂无操作记录 "))])])):Ss("",!0),Q("div",qh,[l[9]||(l[9]=Q("h3",null,"📋 操作日志",-1)),Q("div",Mh,[r.value.length===0?(xe(),Ee("p",Uh,"暂无操作记录")):(xe(),Ee("div",Vh,[(xe(!0),Ee(lt,null,qs(r.value.slice(0,10),u=>(xe(),Ee("div",{key:u.id,class:"log-entry"},[Q("div",Hh,[Q("span",Wh,Re(u.timestamp),1),Q("span",null,[Q("strong",null,Re(u.operation),1),Gr(" "+Re(u.details),1)])]),u.gasUsed>0?(xe(),Ee("div",zh,[l[7]||(l[7]=Q("span",{class:"label"},"Gas:",-1)),Q("span",Gh,Re(u.gasUsed.toLocaleString()),1),l[8]||(l[8]=Q("span",{class:"label",style:{"margin-left":"15px"}},"ETH:",-1)),Q("span",Kh,Re(u.ethCost.toFixed(6)),1)])):Ss("",!0)]))),128))]))])])]))}},Yh=fs(jh,[["__scopeId","data-v-1ea4e28e"]]),Xh={class:"app-container"},Zh={class:"main-layout"},Jh={__name:"App",setup(t){const e=Pe(),n=B(!0),r=B(!0),s=B(1),i=B(!1),{realtimeData:o}=Gg(s),a=()=>{const w=window.innerWidth<=1100;!i.value&&w&&(n.value=!1,r.value=!1),i.value&&!w&&(n.value=!0,r.value=!0),i.value=w},c=R(()=>i.value&&(n.value||r.value));Ao(()=>{a(),window.addEventListener("resize",a)}),To(()=>{window.removeEventListener("resize",a)});const l=d=>{s.value=d},u=()=>{n.value=!1,r.value=!1};return(d,w)=>(xe(),Ee("div",Xh,[Ne(Jg,{"show-left-sidebar":n.value,"show-right-sidebar":r.value,onToggleLeftSidebar:w[0]||(w[0]=y=>n.value=!n.value),onToggleRightSidebar:w[1]||(w[1]=y=>r.value=!r.value)},null,8,["show-left-sidebar","show-right-sidebar"]),c.value?(xe(),Ee("div",{key:0,class:"sidebar-overlay active",onClick:$f(u,["stop"])})):Ss("",!0),Q("div",Zh,[Ne(ah,{"current-day":s.value,onSwitchDay:l,class:At({hidden:!n.value&&!i.value,"mobile-visible":i.value&&n.value,show:n.value&&i.value})},null,8,["current-day","class"]),Ne(wh,{"current-day":s.value,onSwitchDay:l},null,8,["current-day"]),Ne(Yh,{"current-day":s.value,"day-progress":Zr(e).dayProgress,"realtime-data":Zr(o),class:At({hidden:!r.value&&!i.value,"mobile-visible":i.value&&r.value,show:r.value&&i.value})},null,8,["current-day","day-progress","realtime-data","class"])])]))}},uu=Vf(Jh),Qh=zf();uu.use(Qh);uu.mount("#app");export{$g as $,Ap as A,Tp as B,a0 as C,Cp as D,As as E,lt as F,Ao as G,r0 as H,ti as I,Ep as J,Sp as K,Ip as L,Dp as M,Rp as N,y0 as O,Op as P,g0 as Q,me as R,Og as S,o0 as T,s0 as U,Pg as V,Bg as W,Lg as X,Fg as Y,Ng as Z,fs as _,Q as a,n0 as a$,qg as a0,To as a1,Mg as a2,L0 as a3,fp as a4,Ug as a5,$0 as a6,N0 as a7,Vg as a8,M0 as a9,m0 as aA,p0 as aB,b0 as aC,h0 as aD,w0 as aE,k0 as aF,A0 as aG,C0 as aH,S0 as aI,D0 as aJ,B0 as aK,F0 as aL,V0 as aM,W0 as aN,G0 as aO,O0 as aP,u0 as aQ,ap as aR,cp as aS,lp as aT,up as aU,dp as aV,pp as aW,mp as aX,gp as aY,hp as aZ,yp as a_,Hg as aa,Wg as ab,zg as ac,z0 as ad,Qf as ae,tp as af,ep as ag,np as ah,rp as ai,sp as aj,ip as ak,op as al,Jf as am,f0 as an,v0 as ao,_0 as ap,x0 as aq,T0 as ar,E0 as as,I0 as at,R0 as au,P0 as av,q0 as aw,U0 as ax,H0 as ay,d0 as az,Zr as b,Ee as c,pl as d,Ss as e,Ne as f,vp as g,c0 as h,R as i,l0 as j,wp as k,qs as l,_p as m,At as n,xe as o,$f as p,Pe as q,B as r,kp as s,Re as t,bp as u,i0 as v,t0 as w,Se as x,Gr as y,xp as z};
