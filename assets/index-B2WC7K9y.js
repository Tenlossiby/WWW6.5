const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClickCounter-B5adN3gZ.js","./FullCodeModal-CT1nlW0O.js","./FullCodeModal-CaO-zTFj.css","./ClickCounter-cuEHdkTE.css","./SaveMyName-Bg-5KDa_.js","./SaveMyName-CAUeDGcC.css","./PollStation-BnDpDs6i.js","./PollStation-DDaC2Lvn.css","./AuctionHouse-C9FQWmIK.js","./AuctionHouse-Dx5megk6.css","./AdminOnly-BEHCx42V.js","./AdminOnly-BH42YLS5.css","./EtherPiggyBank-D6uGOD9c.js","./EtherPiggyBank-B05u_Xb5.css","./SimpleIOUApp-Dijdw6eR.js","./SimpleIOUApp-B-0TMH-R.css","./TipJar-B6kv3eH2.js","./TipJar-BTmJuooz.css","./SmartCalculator-D3e1PSyn.js","./SmartCalculator-CkF9VyiN.css","./ActivityTracker-a_G_Lpks.js","./ActivityTracker-C9WKbHU7.css","./MasterkeyContract-DMC4tbtx.js","./MasterkeyContract-BJXVKu_r.css","./ERC20Token-BY8b418S.js","./ERC20Token-BvQRXJN9.css","./MyToken-Dlw1dYrw.js","./MyToken-ChEwAHOo.css","./SafeDeposit-BCLBY-VY.js","./SafeDeposit-CwL_tn9H.css","./GasEfficientVoting-BJ1DXS5f.js","./GasEfficientVoting-DD9FOH7O.css","./PluginStore--dnN8l40.js","./PluginStore-DEvKw2su.css","./UpgradeHub-DGqZEmoX.js","./UpgradeHub-4lZy40HS.css"])))=>i.map(i=>d[i]);
var Gc=Object.defineProperty;var Vi=t=>{throw TypeError(t)};var Kc=(t,e,n)=>e in t?Gc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var J=(t,e,n)=>Kc(t,typeof e!="symbol"?e+"":e,n),Os=(t,e,n)=>e.has(t)||Vi("Cannot "+n);var R=(t,e,n)=>(Os(t,e,"read from private field"),n?n.call(t):e.get(t)),be=(t,e,n)=>e.has(t)?Vi("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),de=(t,e,n,r)=>(Os(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),he=(t,e,n)=>(Os(t,e,"access private method"),n);var Wi=(t,e,n,r)=>({set _(s){de(t,e,s,n)},get _(){return R(t,e,r)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ui(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const le={},In=[],kt=()=>{},sa=()=>!1,ds=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),di=t=>t.startsWith("onUpdate:"),Le=Object.assign,fi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jc=Object.prototype.hasOwnProperty,oe=(t,e)=>jc.call(t,e),Z=Array.isArray,Ln=t=>kr(t)==="[object Map]",fs=t=>kr(t)==="[object Set]",Hi=t=>kr(t)==="[object Date]",te=t=>typeof t=="function",ve=t=>typeof t=="string",Et=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",ia=t=>(ce(t)||te(t))&&te(t.then)&&te(t.catch),oa=Object.prototype.toString,kr=t=>oa.call(t),Jc=t=>kr(t).slice(8,-1),aa=t=>kr(t)==="[object Object]",ps=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rr=ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xc=/-\w/g,ot=gs(t=>t.replace(Xc,e=>e.slice(1).toUpperCase())),Yc=/\B([A-Z])/g,on=gs(t=>t.replace(Yc,"-$1").toLowerCase()),ms=gs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bs=gs(t=>t?`on${ms(t)}`:""),nn=(t,e)=>!Object.is(t,e),Hr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ca=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},hs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qi;const ys=()=>qi||(qi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bs(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ve(r)?tl(r):bs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ve(t)||ce(t))return t}const Zc=/;(?![^(]*\))/g,Qc=/:([^]+)/,el=/\/\*[^]*?\*\//g;function tl(t){const e={};return t.replace(el,"").split(Zc).forEach(n=>{if(n){const r=n.split(Qc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function lt(t){let e="";if(ve(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=lt(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rl=ui(nl);function la(t){return!!t||t===""}function sl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=vn(t[r],e[r]);return n}function vn(t,e){if(t===e)return!0;let n=Hi(t),r=Hi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Et(t),r=Et(e),n||r)return t===e;if(n=Z(t),r=Z(e),n||r)return n&&r?sl(t,e):!1;if(n=ce(t),r=ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!vn(t[o],e[o]))return!1}}return String(t)===String(e)}function il(t,e){return t.findIndex(n=>vn(n,e))}const ua=t=>!!(t&&t.__v_isRef===!0),Ce=t=>ve(t)?t:t==null?"":Z(t)||ce(t)&&(t.toString===oa||!te(t.toString))?ua(t)?Ce(t.value):JSON.stringify(t,da,2):String(t),da=(t,e)=>ua(e)?da(t,e.value):Ln(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[$s(r,i)+" =>"]=s,n),{})}:fs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$s(n))}:Et(e)?$s(e):ce(e)&&!Z(e)&&!aa(e)?String(e):e,$s=(t,e="")=>{var n;return Et(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class fa{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ne;try{return Ne=this,e()}finally{Ne=n}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){this._on>0&&--this._on===0&&(Ne=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pa(t){return new fa(t)}function ga(){return Ne}function ol(t,e=!1){Ne&&Ne.cleanups.push(t)}let fe;const Is=new WeakSet;class ma{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Is.has(this)&&(Is.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ya(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zi(this),ba(this);const e=fe,n=ut;fe=this,ut=!0;try{return this.fn()}finally{_a(this),fe=e,ut=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mi(e);this.deps=this.depsTail=void 0,zi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Is.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hs(this)&&this.run()}get dirty(){return Hs(this)}}let ha=0,sr,ir;function ya(t,e=!1){if(t.flags|=8,e){t.next=ir,ir=t;return}t.next=sr,sr=t}function pi(){ha++}function gi(){if(--ha>0)return;if(ir){let e=ir;for(ir=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;sr;){let e=sr;for(sr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ba(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _a(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),mi(r),al(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Hs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function wa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===gr)||(t.globalVersion=gr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Hs(t))))return;t.flags|=2;const e=t.dep,n=fe,r=ut;fe=t,ut=!0;try{ba(t);const s=t.fn(t._value);(e.version===0||nn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{fe=n,ut=r,_a(t),t.flags&=-3}}function mi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)mi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function al(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ut=!0;const va=[];function Ht(){va.push(ut),ut=!1}function qt(){const t=va.pop();ut=t===void 0?!0:t}function zi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=fe;fe=void 0;try{e()}finally{fe=n}}}let gr=0;class cl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!fe||!ut||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new cl(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,xa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=r)}return n}trigger(e){this.version++,gr++,this.notify(e)}notify(e){pi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gi()}}}function xa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)xa(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const es=new WeakMap,bn=Symbol(""),qs=Symbol(""),mr=Symbol("");function Ue(t,e,n){if(ut&&fe){let r=es.get(t);r||es.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new hi),s.map=r,s.key=n),s.track()}}function Mt(t,e,n,r,s,i){const o=es.get(t);if(!o){gr++;return}const a=c=>{c&&c.trigger()};if(pi(),e==="clear")o.forEach(a);else{const c=Z(t),u=c&&ps(n);if(c&&n==="length"){const l=Number(r);o.forEach((d,_)=>{(_==="length"||_===mr||!Et(_)&&_>=l)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(mr)),e){case"add":c?u&&a(o.get("length")):(a(o.get(bn)),Ln(t)&&a(o.get(qs)));break;case"delete":c||(a(o.get(bn)),Ln(t)&&a(o.get(qs)));break;case"set":Ln(t)&&a(o.get(bn));break}}gi()}function ll(t,e){const n=es.get(t);return n&&n.get(e)}function An(t){const e=ie(t);return e===t?e:(Ue(e,"iterate",mr),rt(t)?e:e.map(dt))}function _s(t){return Ue(t=ie(t),"iterate",mr),t}function Yt(t,e){return zt(t)?Vn(Ft(t)?dt(e):e):dt(e)}const ul={__proto__:null,[Symbol.iterator](){return Ls(this,Symbol.iterator,t=>Yt(this,t))},concat(...t){return An(this).concat(...t.map(e=>Z(e)?An(e):e))},entries(){return Ls(this,"entries",t=>(t[1]=Yt(this,t[1]),t))},every(t,e){return Pt(this,"every",t,e,void 0,arguments)},filter(t,e){return Pt(this,"filter",t,e,n=>n.map(r=>Yt(this,r)),arguments)},find(t,e){return Pt(this,"find",t,e,n=>Yt(this,n),arguments)},findIndex(t,e){return Pt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Pt(this,"findLast",t,e,n=>Yt(this,n),arguments)},findLastIndex(t,e){return Pt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Pt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Rs(this,"includes",t)},indexOf(...t){return Rs(this,"indexOf",t)},join(t){return An(this).join(t)},lastIndexOf(...t){return Rs(this,"lastIndexOf",t)},map(t,e){return Pt(this,"map",t,e,void 0,arguments)},pop(){return Yn(this,"pop")},push(...t){return Yn(this,"push",t)},reduce(t,...e){return Gi(this,"reduce",t,e)},reduceRight(t,...e){return Gi(this,"reduceRight",t,e)},shift(){return Yn(this,"shift")},some(t,e){return Pt(this,"some",t,e,void 0,arguments)},splice(...t){return Yn(this,"splice",t)},toReversed(){return An(this).toReversed()},toSorted(t){return An(this).toSorted(t)},toSpliced(...t){return An(this).toSpliced(...t)},unshift(...t){return Yn(this,"unshift",t)},values(){return Ls(this,"values",t=>Yt(this,t))}};function Ls(t,e,n){const r=_s(t),s=r[e]();return r!==t&&!rt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const dl=Array.prototype;function Pt(t,e,n,r,s,i){const o=_s(t),a=o!==t&&!rt(t),c=o[e];if(c!==dl[e]){const d=c.apply(t,i);return a?dt(d):d}let u=n;o!==t&&(a?u=function(d,_){return n.call(this,Yt(t,d),_,t)}:n.length>2&&(u=function(d,_){return n.call(this,d,_,t)}));const l=c.call(o,u,r);return a&&s?s(l):l}function Gi(t,e,n,r){const s=_s(t);let i=n;return s!==t&&(rt(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Yt(t,a),c,t)}),s[e](i,...r)}function Rs(t,e,n){const r=ie(t);Ue(r,"iterate",mr);const s=r[e](...n);return(s===-1||s===!1)&&vs(n[0])?(n[0]=ie(n[0]),r[e](...n)):s}function Yn(t,e,n=[]){Ht(),pi();const r=ie(t)[e].apply(t,n);return gi(),qt(),r}const fl=ui("__proto__,__v_isRef,__isVue"),Ca=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Et));function pl(t){Et(t)||(t=String(t));const e=ie(this);return Ue(e,"has",t),e.hasOwnProperty(t)}class Sa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Cl:Ea:i?Ta:Aa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Z(e);if(!s){let c;if(o&&(c=ul[n]))return c;if(n==="hasOwnProperty")return pl}const a=Reflect.get(e,n,we(e)?e:r);if((Et(n)?Ca.has(n):fl(n))||(s||Ue(e,"get",n),i))return a;if(we(a)){const c=o&&ps(n)?a:a.value;return s&&ce(c)?Gs(c):c}return ce(a)?s?Gs(a):ws(a):a}}class ka extends Sa{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=Z(e)&&ps(n);if(!this._isShallow){const u=zt(i);if(!rt(r)&&!zt(r)&&(i=ie(i),r=ie(r)),!o&&we(i)&&!we(r))return u||(i.value=r),!0}const a=o?Number(n)<e.length:oe(e,n),c=Reflect.set(e,n,r,we(e)?e:s);return e===ie(s)&&(a?nn(r,i)&&Mt(e,"set",n,r):Mt(e,"add",n,r)),c}deleteProperty(e,n){const r=oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Mt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Et(n)||!Ca.has(n))&&Ue(e,"has",n),r}ownKeys(e){return Ue(e,"iterate",Z(e)?"length":bn),Reflect.ownKeys(e)}}class gl extends Sa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ml=new ka,hl=new gl,yl=new ka(!0);const zs=t=>t,$r=t=>Reflect.getPrototypeOf(t);function bl(t,e,n){return function(...r){const s=this.__v_raw,i=ie(s),o=Ln(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?zs:e?Vn:dt;return!e&&Ue(i,"iterate",c?qs:bn),Le(Object.create(u),{next(){const{value:d,done:_}=u.next();return _?{value:d,done:_}:{value:a?[l(d[0]),l(d[1])]:l(d),done:_}}})}}function Ir(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _l(t,e){const n={get(s){const i=this.__v_raw,o=ie(i),a=ie(s);t||(nn(s,a)&&Ue(o,"get",s),Ue(o,"get",a));const{has:c}=$r(o),u=e?zs:t?Vn:dt;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ue(ie(s),"iterate",bn),s.size},has(s){const i=this.__v_raw,o=ie(i),a=ie(s);return t||(nn(s,a)&&Ue(o,"has",s),Ue(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=ie(a),u=e?zs:t?Vn:dt;return!t&&Ue(c,"iterate",bn),a.forEach((l,d)=>s.call(i,u(l),u(d),o))}};return Le(n,t?{add:Ir("add"),set:Ir("set"),delete:Ir("delete"),clear:Ir("clear")}:{add(s){!e&&!rt(s)&&!zt(s)&&(s=ie(s));const i=ie(this);return $r(i).has.call(i,s)||(i.add(s),Mt(i,"add",s,s)),this},set(s,i){!e&&!rt(i)&&!zt(i)&&(i=ie(i));const o=ie(this),{has:a,get:c}=$r(o);let u=a.call(o,s);u||(s=ie(s),u=a.call(o,s));const l=c.call(o,s);return o.set(s,i),u?nn(i,l)&&Mt(o,"set",s,i):Mt(o,"add",s,i),this},delete(s){const i=ie(this),{has:o,get:a}=$r(i);let c=o.call(i,s);c||(s=ie(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&Mt(i,"delete",s,void 0),u},clear(){const s=ie(this),i=s.size!==0,o=s.clear();return i&&Mt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=bl(s,t,e)}),n}function yi(t,e){const n=_l(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(oe(n,s)&&s in r?n:r,s,i)}const wl={get:yi(!1,!1)},vl={get:yi(!1,!0)},xl={get:yi(!0,!1)};const Aa=new WeakMap,Ta=new WeakMap,Ea=new WeakMap,Cl=new WeakMap;function Sl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kl(t){return t.__v_skip||!Object.isExtensible(t)?0:Sl(Jc(t))}function ws(t){return zt(t)?t:bi(t,!1,ml,wl,Aa)}function Al(t){return bi(t,!1,yl,vl,Ta)}function Gs(t){return bi(t,!0,hl,xl,Ea)}function bi(t,e,n,r,s){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=kl(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Ft(t){return zt(t)?Ft(t.__v_raw):!!(t&&t.__v_isReactive)}function zt(t){return!!(t&&t.__v_isReadonly)}function rt(t){return!!(t&&t.__v_isShallow)}function vs(t){return t?!!t.__v_raw:!1}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function _i(t){return!oe(t,"__v_skip")&&Object.isExtensible(t)&&ca(t,"__v_skip",!0),t}const dt=t=>ce(t)?ws(t):t,Vn=t=>ce(t)?Gs(t):t;function we(t){return t?t.__v_isRef===!0:!1}function K(t){return Tl(t,!1)}function Tl(t,e){return we(t)?t:new El(t,e)}class El{constructor(e,n){this.dep=new hi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ie(e),this._value=n?e:dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||rt(e)||zt(e);e=r?e:ie(e),nn(e,n)&&(this._rawValue=e,this._value=r?e:dt(e),this.dep.trigger())}}function hr(t){return we(t)?t.value:t}const Dl={get:(t,e,n)=>e==="__v_raw"?t:hr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Da(t){return Ft(t)?t:new Proxy(t,Dl)}function Pl(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=Bl(t,n);return e}class Ol{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=ie(e);let s=!0,i=e;if(!Z(e)||!ps(String(n)))do s=!vs(i)||rt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=hr(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&we(this._raw[this._key])){const n=this._object[this._key];if(we(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return ll(this._raw,this._key)}}function Bl(t,e,n){return new Ol(t,e,n)}class $l{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return ya(this,!0),!0}get value(){const e=this.dep.track();return wa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Il(t,e,n=!1){let r,s;return te(t)?r=t:(r=t.get,s=t.set),new $l(r,s,n)}const Lr={},ts=new WeakMap;let dn;function Ll(t,e=!1,n=dn){if(n){let r=ts.get(n);r||ts.set(n,r=[]),r.push(t)}}function Rl(t,e,n=le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=p=>s?p:rt(p)||s===!1||s===0?Nt(p,1):Nt(p);let l,d,_,m,S=!1,C=!1;if(we(t)?(d=()=>t.value,S=rt(t)):Ft(t)?(d=()=>u(t),S=!0):Z(t)?(C=!0,S=t.some(p=>Ft(p)||rt(p)),d=()=>t.map(p=>{if(we(p))return p.value;if(Ft(p))return u(p);if(te(p))return c?c(p,2):p()})):te(t)?e?d=c?()=>c(t,2):t:d=()=>{if(_){Ht();try{_()}finally{qt()}}const p=dn;dn=l;try{return c?c(t,3,[m]):t(m)}finally{dn=p}}:d=kt,e&&s){const p=d,h=s===!0?1/0:s;d=()=>Nt(p(),h)}const N=ga(),M=()=>{l.stop(),N&&N.active&&fi(N.effects,l)};if(i&&e){const p=e;e=(...h)=>{p(...h),M()}}let b=C?new Array(t.length).fill(Lr):Lr;const k=p=>{if(!(!(l.flags&1)||!l.dirty&&!p))if(e){const h=l.run();if(s||S||(C?h.some((w,D)=>nn(w,b[D])):nn(h,b))){_&&_();const w=dn;dn=l;try{const D=[h,b===Lr?void 0:C&&b[0]===Lr?[]:b,m];b=h,c?c(e,3,D):e(...D)}finally{dn=w}}}else l.run()};return a&&a(k),l=new ma(d),l.scheduler=o?()=>o(k,!1):k,m=p=>Ll(p,!1,l),_=l.onStop=()=>{const p=ts.get(l);if(p){if(c)c(p,4);else for(const h of p)h();ts.delete(l)}},e?r?k(!0):b=l.run():o?o(k.bind(null,!0),!0):l.run(),M.pause=l.pause.bind(l),M.resume=l.resume.bind(l),M.stop=M,M}function Nt(t,e=1/0,n){if(e<=0||!ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,we(t))Nt(t.value,e,n);else if(Z(t))for(let r=0;r<t.length;r++)Nt(t[r],e,n);else if(fs(t)||Ln(t))t.forEach(r=>{Nt(r,e,n)});else if(aa(t)){for(const r in t)Nt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Nt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ar(t,e,n,r){try{return r?t(...r):t()}catch(s){Tr(s,e,n)}}function Dt(t,e,n,r){if(te(t)){const s=Ar(t,e,n,r);return s&&ia(s)&&s.catch(i=>{Tr(i,e,n)}),s}if(Z(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Dt(t[i],e,n,r));return s}}function Tr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||le;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](t,c,u)===!1)return}a=a.parent}if(i){Ht(),Ar(i,null,10,[t,c,u]),qt();return}}Ml(t,n,s,r,o)}function Ml(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const We=[];let bt=-1;const Rn=[];let Zt=null,Dn=0;const Pa=Promise.resolve();let ns=null;function wi(t){const e=ns||Pa;return t?e.then(this?t.bind(this):t):e}function Nl(t){let e=bt+1,n=We.length;for(;e<n;){const r=e+n>>>1,s=We[r],i=yr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function vi(t){if(!(t.flags&1)){const e=yr(t),n=We[We.length-1];!n||!(t.flags&2)&&e>=yr(n)?We.push(t):We.splice(Nl(e),0,t),t.flags|=1,Oa()}}function Oa(){ns||(ns=Pa.then($a))}function Ul(t){Z(t)?Rn.push(...t):Zt&&t.id===-1?Zt.splice(Dn+1,0,t):t.flags&1||(Rn.push(t),t.flags|=1),Oa()}function Ki(t,e,n=bt+1){for(;n<We.length;n++){const r=We[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;We.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ba(t){if(Rn.length){const e=[...new Set(Rn)].sort((n,r)=>yr(n)-yr(r));if(Rn.length=0,Zt){Zt.push(...e);return}for(Zt=e,Dn=0;Dn<Zt.length;Dn++){const n=Zt[Dn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Zt=null,Dn=0}}const yr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $a(t){try{for(bt=0;bt<We.length;bt++){const e=We[bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ar(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bt<We.length;bt++){const e=We[bt];e&&(e.flags&=-2)}bt=-1,We.length=0,Ba(),ns=null,(We.length||Rn.length)&&$a()}}let tt=null,Ia=null;function rs(t){const e=tt;return tt=t,Ia=t&&t.type.__scopeId||null,e}function Fl(t,e=tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&lo(-1);const i=rs(e);let o;try{o=t(...s)}finally{rs(i),r._d&&lo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ig(t,e){if(tt===null)return t;const n=ks(tt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=le]=e[s];i&&(te(i)&&(i={mounted:i,updated:i}),i.deep&&Nt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ln(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ht(),Dt(c,n,8,[t.el,a,t,e]),qt())}}function Vl(t,e){if(Be){let n=Be.provides;const r=Be.parent&&Be.parent.provides;r===n&&(n=Be.provides=Object.create(r)),n[t]=e}}function or(t,e,n=!1){const r=ac();if(r||_n){let s=_n?_n._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&te(e)?e.call(r&&r.proxy):e}}function Wl(){return!!(ac()||_n)}const Hl=Symbol.for("v-scx"),ql=()=>or(Hl);function qr(t,e,n){return La(t,e,n)}function La(t,e,n=le){const{immediate:r,deep:s,flush:i,once:o}=n,a=Le({},n),c=e&&r||!e&&i!=="post";let u;if(Hn){if(i==="sync"){const m=ql();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=kt,m.resume=kt,m.pause=kt,m}}const l=Be;a.call=(m,S,C)=>Dt(m,l,S,C);let d=!1;i==="post"?a.scheduler=m=>{Me(m,l&&l.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,S)=>{S?m():vi(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,l&&(m.id=l.uid,m.i=l))};const _=Rl(t,e,a);return Hn&&(u?u.push(_):c&&_()),_}function zl(t,e,n){const r=this.proxy,s=ve(t)?t.includes(".")?Ra(r,t):()=>r[t]:t.bind(r,r);let i;te(e)?i=e:(i=e.handler,n=e);const o=Er(this),a=La(s,i.bind(r),n);return o(),a}function Ra(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ma=Symbol("_vte"),Gl=t=>t.__isTeleport,ar=t=>t&&(t.disabled||t.disabled===""),ji=t=>t&&(t.defer||t.defer===""),Ji=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Xi=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ks=(t,e)=>{const n=t&&t.to;return ve(n)?e?e(n):null:n},Na={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,u){const{mc:l,pc:d,pbc:_,o:{insert:m,querySelector:S,createText:C,createComment:N}}=u,M=ar(e.props);let{shapeFlag:b,children:k,dynamicChildren:p}=e;if(t==null){const h=e.el=C(""),w=e.anchor=C("");m(h,n,r),m(w,n,r);const D=(g,A)=>{b&16&&l(k,g,A,s,i,o,a,c)},v=()=>{const g=e.target=Ks(e.props,S),A=js(g,e,C,m);g&&(o!=="svg"&&Ji(g)?o="svg":o!=="mathml"&&Xi(g)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(g),M||(D(g,A),zr(e,!1)))};M&&(D(n,w),zr(e,!0)),ji(e.props)?(e.el.__isMounted=!1,Me(()=>{v(),delete e.el.__isMounted},i)):v()}else{if(ji(e.props)&&t.el.__isMounted===!1){Me(()=>{Na.process(t,e,n,r,s,i,o,a,c,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const h=e.anchor=t.anchor,w=e.target=t.target,D=e.targetAnchor=t.targetAnchor,v=ar(t.props),g=v?n:w,A=v?h:D;if(o==="svg"||Ji(w)?o="svg":(o==="mathml"||Xi(w))&&(o="mathml"),p?(_(t.dynamicChildren,p,g,s,i,o,a),Di(t,e,!0)):c||d(t,e,g,A,s,i,o,a,!1),M)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Rr(e,n,h,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const T=e.target=Ks(e.props,S);T&&Rr(e,T,null,u,0)}else v&&Rr(e,w,D,u,1);zr(e,M)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:u,targetAnchor:l,target:d,props:_}=t;if(d&&(s(u),s(l)),i&&s(c),o&16){const m=i||!ar(_);for(let S=0;S<a.length;S++){const C=a[S];r(C,e,n,m,!!C.dynamicChildren)}}},move:Rr,hydrate:Kl};function Rr(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=t,d=i===2;if(d&&r(o,e,n),(!d||ar(l))&&c&16)for(let _=0;_<u.length;_++)s(u[_],e,n,2);d&&r(a,e,n)}function Kl(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:u,createText:l}},d){function _(N,M){let b=M;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")e.targetStart=b;else if(b.data==="teleport anchor"){e.targetAnchor=b,N._lpa=e.targetAnchor&&o(e.targetAnchor);break}}b=o(b)}}function m(N,M){M.anchor=d(o(N),M,a(N),n,r,s,i)}const S=e.target=Ks(e.props,c),C=ar(e.props);if(S){const N=S._lpa||S.firstChild;e.shapeFlag&16&&(C?(m(t,e),_(S,N),e.targetAnchor||js(S,e,l,u,a(t)===S?t:null)):(e.anchor=o(t),_(S,N),e.targetAnchor||js(S,e,l,u),d(N&&o(N),e,S,n,r,s,i))),zr(e,C)}else C&&e.shapeFlag&16&&(m(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Lg=Na;function zr(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function js(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Ma]=o,t&&(r(i,t,s),r(o,t,s)),o}const jl=Symbol("_leaveCb");function xi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Jl(t,e){return te(t)?Le({name:t.name},e,{setup:t}):t}function Ci(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Yi(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ss=new WeakMap;function cr(t,e,n,r,s=!1){if(Z(t)){t.forEach((C,N)=>cr(C,e&&(Z(e)?e[N]:e),n,r,s));return}if(lr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&cr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ks(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===le?a.refs={}:a.refs,d=a.setupState,_=ie(d),m=d===le?sa:C=>Yi(l,C)?!1:oe(_,C),S=(C,N)=>!(N&&Yi(l,N));if(u!=null&&u!==c){if(Zi(e),ve(u))l[u]=null,m(u)&&(d[u]=null);else if(we(u)){const C=e;S(u,C.k)&&(u.value=null),C.k&&(l[C.k]=null)}}if(te(c))Ar(c,a,12,[o,l]);else{const C=ve(c),N=we(c);if(C||N){const M=()=>{if(t.f){const b=C?m(c)?d[c]:l[c]:S()||!t.k?c.value:l[t.k];if(s)Z(b)&&fi(b,i);else if(Z(b))b.includes(i)||b.push(i);else if(C)l[c]=[i],m(c)&&(d[c]=l[c]);else{const k=[i];S(c,t.k)&&(c.value=k),t.k&&(l[t.k]=k)}}else C?(l[c]=o,m(c)&&(d[c]=o)):N&&(S(c,t.k)&&(c.value=o),t.k&&(l[t.k]=o))};if(o){const b=()=>{M(),ss.delete(t)};b.id=-1,ss.set(t,b),Me(b,n)}else Zi(t),M()}}}function Zi(t){const e=ss.get(t);e&&(e.flags|=8,ss.delete(t))}const Qi=t=>t.nodeType===8;ys().requestIdleCallback;ys().cancelIdleCallback;function Xl(t,e){if(Qi(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(Qi(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const lr=t=>!!t.type.__asyncLoader;function De(t){te(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,l,d=0;const _=()=>(d++,u=null,m()),m=()=>{let S;return u||(S=u=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),c)return new Promise((N,M)=>{c(C,()=>N(_()),()=>M(C),d+1)});throw C}).then(C=>S!==u&&u?u:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),l=C,C)))};return Jl({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(S,C,N){let M=!1;(C.bu||(C.bu=[])).push(()=>M=!0);const b=()=>{M||N()},k=i?()=>{const p=i(b,h=>Xl(S,h));p&&(C.bum||(C.bum=[])).push(p)}:b;l?k():m().then(()=>!C.isUnmounted&&k())},get __asyncResolved(){return l},setup(){const S=Be;if(Ci(S),l)return()=>Mr(l,S);const C=k=>{u=null,Tr(k,S,13,!r)};if(a&&S.suspense||Hn)return m().then(k=>()=>Mr(k,S)).catch(k=>(C(k),()=>r?$e(r,{error:k}):null));const N=K(!1),M=K(),b=K(!!s);return s&&setTimeout(()=>{b.value=!1},s),o!=null&&setTimeout(()=>{if(!N.value&&!M.value){const k=new Error(`Async component timed out after ${o}ms.`);C(k),M.value=k}},o),m().then(()=>{N.value=!0,S.parent&&Si(S.parent.vnode)&&S.parent.update()}).catch(k=>{C(k),M.value=k}),()=>{if(N.value&&l)return Mr(l,S);if(M.value&&r)return $e(r,{error:M.value});if(n&&!b.value)return Mr(n,S)}}})}function Mr(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=$e(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Si=t=>t.type.__isKeepAlive;function Yl(t,e){Ua(t,"a",e)}function Zl(t,e){Ua(t,"da",e)}function Ua(t,e,n=Be){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Si(s.parent.vnode)&&Ql(r,e,n,s),s=s.parent}}function Ql(t,e,n,r){const s=xs(e,t,r,!0);Ai(()=>{fi(r[e],s)},n)}function xs(t,e,n=Be,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ht();const a=Er(n),c=Dt(e,n,t,o);return a(),qt(),c});return r?s.unshift(i):s.push(i),i}}const jt=t=>(e,n=Be)=>{(!Hn||t==="sp")&&xs(t,(...r)=>e(...r),n)},eu=jt("bm"),ki=jt("m"),tu=jt("bu"),nu=jt("u"),ru=jt("bum"),Ai=jt("um"),su=jt("sp"),iu=jt("rtg"),ou=jt("rtc");function au(t,e=Be){xs("ec",t,e)}const cu="components",Fa=Symbol.for("v-ndc");function lu(t){return ve(t)?uu(cu,t,!1)||t:t||Fa}function uu(t,e,n=!0,r=!1){const s=tt||Be;if(s){const i=s.type;{const a=ju(i,!1);if(a&&(a===e||a===ot(e)||a===ms(ot(e))))return i}const o=eo(s[t]||i[t],e)||eo(s.appContext[t],e);return!o&&r?i:o}}function eo(t,e){return t&&(t[e]||t[ot(e)]||t[ms(ot(e))])}function is(t,e,n,r){let s;const i=n,o=Z(t);if(o||ve(t)){const a=o&&Ft(t);let c=!1,u=!1;a&&(c=!rt(t),u=zt(t),t=_s(t)),s=new Array(t.length);for(let l=0,d=t.length;l<d;l++)s[l]=e(c?u?Vn(dt(t[l])):dt(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ce(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const l=a[c];s[c]=e(t[l],l,c,i)}}else s=[];return s}const Js=t=>t?cc(t)?ks(t):Js(t.parent):null,ur=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Js(t.parent),$root:t=>Js(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Wa(t),$forceUpdate:t=>t.f||(t.f=()=>{vi(t.update)}),$nextTick:t=>t.n||(t.n=wi.bind(t.proxy)),$watch:t=>zl.bind(t)}),Ms=(t,e)=>t!==le&&!t.__isScriptSetup&&oe(t,e),du={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ms(r,e))return o[e]=1,r[e];if(s!==le&&oe(s,e))return o[e]=2,s[e];if(oe(i,e))return o[e]=3,i[e];if(n!==le&&oe(n,e))return o[e]=4,n[e];Xs&&(o[e]=0)}}const u=ur[e];let l,d;if(u)return e==="$attrs"&&Ue(t.attrs,"get",""),u(t);if((l=a.__cssModules)&&(l=l[e]))return l;if(n!==le&&oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,oe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ms(s,e)?(s[e]=n,!0):r!==le&&oe(r,e)?(r[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},a){let c;return!!(n[a]||t!==le&&a[0]!=="$"&&oe(t,a)||Ms(e,a)||oe(i,a)||oe(r,a)||oe(ur,a)||oe(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function to(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xs=!0;function fu(t){const e=Wa(t),n=t.proxy,r=t.ctx;Xs=!1,e.beforeCreate&&no(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:_,beforeUpdate:m,updated:S,activated:C,deactivated:N,beforeDestroy:M,beforeUnmount:b,destroyed:k,unmounted:p,render:h,renderTracked:w,renderTriggered:D,errorCaptured:v,serverPrefetch:g,expose:A,inheritAttrs:T,components:L,directives:Q,filters:ne}=e;if(u&&pu(u,r,null),o)for(const P in o){const H=o[P];te(H)&&(r[P]=H.bind(n))}if(s){const P=s.call(n,n);ce(P)&&(t.data=ws(P))}if(Xs=!0,i)for(const P in i){const H=i[P],Se=te(H)?H.bind(n,n):te(H.get)?H.get.bind(n,n):kt,ke=!te(H)&&te(H.set)?H.set.bind(n):kt,Ee=x({get:Se,set:ke});Object.defineProperty(r,P,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Fe=>Ee.value=Fe})}if(a)for(const P in a)Va(a[P],r,n,P);if(c){const P=te(c)?c.call(n):c;Reflect.ownKeys(P).forEach(H=>{Vl(H,P[H])})}l&&no(l,t,"c");function W(P,H){Z(H)?H.forEach(Se=>P(Se.bind(n))):H&&P(H.bind(n))}if(W(eu,d),W(ki,_),W(tu,m),W(nu,S),W(Yl,C),W(Zl,N),W(au,v),W(ou,w),W(iu,D),W(ru,b),W(Ai,p),W(su,g),Z(A))if(A.length){const P=t.exposed||(t.exposed={});A.forEach(H=>{Object.defineProperty(P,H,{get:()=>n[H],set:Se=>n[H]=Se,enumerable:!0})})}else t.exposed||(t.exposed={});h&&t.render===kt&&(t.render=h),T!=null&&(t.inheritAttrs=T),L&&(t.components=L),Q&&(t.directives=Q),g&&Ci(t)}function pu(t,e,n=kt){Z(t)&&(t=Ys(t));for(const r in t){const s=t[r];let i;ce(s)?"default"in s?i=or(s.from||r,s.default,!0):i=or(s.from||r):i=or(s),we(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function no(t,e,n){Dt(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Va(t,e,n,r){let s=r.includes(".")?Ra(n,r):()=>n[r];if(ve(t)){const i=e[t];te(i)&&qr(s,i)}else if(te(t))qr(s,t.bind(n));else if(ce(t))if(Z(t))t.forEach(i=>Va(i,e,n,r));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&qr(s,i,t)}}function Wa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>os(c,u,o,!0)),os(c,e,o)),ce(e)&&i.set(e,c),c}function os(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&os(t,i,n,!0),s&&s.forEach(o=>os(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=gu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gu={data:ro,props:so,emits:so,methods:nr,computed:nr,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:nr,directives:nr,watch:hu,provide:ro,inject:mu};function ro(t,e){return e?t?function(){return Le(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function mu(t,e){return nr(Ys(t),Ys(e))}function Ys(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function nr(t,e){return t?Le(Object.create(null),t,e):e}function so(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:Le(Object.create(null),to(t),to(e??{})):e}function hu(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const r in e)n[r]=Ve(t[r],e[r]);return n}function Ha(){return{app:null,config:{isNativeTag:sa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yu=0;function bu(t,e){return function(r,s=null){te(r)||(r=Le({},r)),s!=null&&!ce(s)&&(s=null);const i=Ha(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:yu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Xu,get config(){return i.config},set config(l){},use(l,...d){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(u,...d)):te(l)&&(o.add(l),l(u,...d))),u},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),u},component(l,d){return d?(i.components[l]=d,u):i.components[l]},directive(l,d){return d?(i.directives[l]=d,u):i.directives[l]},mount(l,d,_){if(!c){const m=u._ceVNode||$e(r,s);return m.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),t(m,l,_),c=!0,u._container=l,l.__vue_app__=u,ks(m.component)}},onUnmount(l){a.push(l)},unmount(){c&&(Dt(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(l,d){return i.provides[l]=d,u},runWithContext(l){const d=_n;_n=u;try{return l()}finally{_n=d}}};return u}}let _n=null;const _u=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ot(e)}Modifiers`]||t[`${on(e)}Modifiers`];function wu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||le;let s=n;const i=e.startsWith("update:"),o=i&&_u(r,e.slice(7));o&&(o.trim&&(s=n.map(l=>ve(l)?l.trim():l)),o.number&&(s=n.map(hs)));let a,c=r[a=Bs(e)]||r[a=Bs(ot(e))];!c&&i&&(c=r[a=Bs(on(e))]),c&&Dt(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Dt(u,t,6,s)}}const vu=new WeakMap;function qa(t,e,n=!1){const r=n?vu:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!te(t)){const c=u=>{const l=qa(u,e,!0);l&&(a=!0,Le(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ce(t)&&r.set(t,null),null):(Z(i)?i.forEach(c=>o[c]=null):Le(o,i),ce(t)&&r.set(t,o),o)}function Cs(t,e){return!t||!ds(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,on(e))||oe(t,e))}function io(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:l,props:d,data:_,setupState:m,ctx:S,inheritAttrs:C}=t,N=rs(t);let M,b;try{if(n.shapeFlag&4){const p=s||r,h=p;M=xt(u.call(h,p,l,d,m,_,S)),b=a}else{const p=e;M=xt(p.length>1?p(d,{attrs:a,slots:o,emit:c}):p(d,null)),b=e.props?a:xu(a)}}catch(p){dr.length=0,Tr(p,t,1),M=$e(rn)}let k=M;if(b&&C!==!1){const p=Object.keys(b),{shapeFlag:h}=k;p.length&&h&7&&(i&&p.some(di)&&(b=Cu(b,i)),k=Wn(k,b,!1,!0))}return n.dirs&&(k=Wn(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&xi(k,n.transition),M=k,rs(N),M}const xu=t=>{let e;for(const n in t)(n==="class"||n==="style"||ds(n))&&((e||(e={}))[n]=t[n]);return e},Cu=(t,e)=>{const n={};for(const r in t)(!di(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Su(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?oo(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let d=0;d<l.length;d++){const _=l[d];if(za(o,r,_)&&!Cs(u,_))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?oo(r,o,u):!0:!!o;return!1}function oo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(za(e,t,i)&&!Cs(n,i))return!0}return!1}function za(t,e,n){const r=t[n],s=e[n];return n==="style"&&ce(r)&&ce(s)?!vn(r,s):r!==s}function ku({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ga={},Ka=()=>Object.create(Ga),ja=t=>Object.getPrototypeOf(t)===Ga;function Au(t,e,n,r=!1){const s={},i=Ka();t.propsDefaults=Object.create(null),Ja(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Al(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Tu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ie(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let d=0;d<l.length;d++){let _=l[d];if(Cs(t.emitsOptions,_))continue;const m=e[_];if(c)if(oe(i,_))m!==i[_]&&(i[_]=m,u=!0);else{const S=ot(_);s[S]=Zs(c,a,S,m,t,!1)}else m!==i[_]&&(i[_]=m,u=!0)}}}else{Ja(t,e,s,i)&&(u=!0);let l;for(const d in a)(!e||!oe(e,d)&&((l=on(d))===d||!oe(e,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(s[d]=Zs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!oe(e,d))&&(delete i[d],u=!0)}u&&Mt(t.attrs,"set","")}function Ja(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(rr(c))continue;const u=e[c];let l;s&&oe(s,l=ot(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Cs(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ie(n),u=a||le;for(let l=0;l<i.length;l++){const d=i[l];n[d]=Zs(s,c,d,u[d],t,!oe(u,d))}}return o}function Zs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&te(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=Er(s);r=u[n]=c.call(null,e),l()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===on(n))&&(r=!0))}return r}const Eu=new WeakMap;function Xa(t,e,n=!1){const r=n?Eu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const l=d=>{c=!0;const[_,m]=Xa(d,e,!0);Le(o,_),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return ce(t)&&r.set(t,In),In;if(Z(i))for(let l=0;l<i.length;l++){const d=ot(i[l]);ao(d)&&(o[d]=le)}else if(i)for(const l in i){const d=ot(l);if(ao(d)){const _=i[l],m=o[d]=Z(_)||te(_)?{type:_}:Le({},_),S=m.type;let C=!1,N=!0;if(Z(S))for(let M=0;M<S.length;++M){const b=S[M],k=te(b)&&b.name;if(k==="Boolean"){C=!0;break}else k==="String"&&(N=!1)}else C=te(S)&&S.name==="Boolean";m[0]=C,m[1]=N,(C||oe(m,"default"))&&a.push(d)}}const u=[o,a];return ce(t)&&r.set(t,u),u}function ao(t){return t[0]!=="$"&&!rr(t)}const Ti=t=>t==="_"||t==="_ctx"||t==="$stable",Ei=t=>Z(t)?t.map(xt):[xt(t)],Du=(t,e,n)=>{if(e._n)return e;const r=Fl((...s)=>Ei(e(...s)),n);return r._c=!1,r},Ya=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ti(s))continue;const i=t[s];if(te(i))e[s]=Du(s,i,r);else if(i!=null){const o=Ei(i);e[s]=()=>o}}},Za=(t,e)=>{const n=Ei(e);t.slots.default=()=>n},Qa=(t,e,n)=>{for(const r in e)(n||!Ti(r))&&(t[r]=e[r])},Pu=(t,e,n)=>{const r=t.slots=Ka();if(t.vnode.shapeFlag&32){const s=e._;s?(Qa(r,e,n),n&&ca(r,"_",s,!0)):Ya(e,r)}else e&&Za(t,e)},Ou=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=le;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Qa(s,e,n):(i=!e.$stable,Ya(e,s)),o=e}else e&&(Za(t,e),o={default:1});if(i)for(const a in s)!Ti(a)&&o[a]==null&&delete s[a]},Me=Ru;function Bu(t){return $u(t)}function $u(t,e){const n=ys();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:_,setScopeId:m=kt,insertStaticContent:S}=t,C=(f,y,E,I=null,O=null,B=null,V=void 0,F=null,U=!!y.dynamicChildren)=>{if(f===y)return;f&&!Zn(f,y)&&(I=Br(f),Fe(f,O,B,!0),f=null),y.patchFlag===-2&&(U=!1,y.dynamicChildren=null);const{type:$,ref:Y,shapeFlag:q}=y;switch($){case Ss:N(f,y,E,I);break;case rn:M(f,y,E,I);break;case Gr:f==null&&b(y,E,I,V);break;case et:L(f,y,E,I,O,B,V,F,U);break;default:q&1?h(f,y,E,I,O,B,V,F,U):q&6?Q(f,y,E,I,O,B,V,F,U):(q&64||q&128)&&$.process(f,y,E,I,O,B,V,F,U,Jn)}Y!=null&&O?cr(Y,f&&f.ref,B,y||f,!y):Y==null&&f&&f.ref!=null&&cr(f.ref,null,B,f,!0)},N=(f,y,E,I)=>{if(f==null)r(y.el=a(y.children),E,I);else{const O=y.el=f.el;y.children!==f.children&&u(O,y.children)}},M=(f,y,E,I)=>{f==null?r(y.el=c(y.children||""),E,I):y.el=f.el},b=(f,y,E,I)=>{[f.el,f.anchor]=S(f.children,y,E,I,f.el,f.anchor)},k=({el:f,anchor:y},E,I)=>{let O;for(;f&&f!==y;)O=_(f),r(f,E,I),f=O;r(y,E,I)},p=({el:f,anchor:y})=>{let E;for(;f&&f!==y;)E=_(f),s(f),f=E;s(y)},h=(f,y,E,I,O,B,V,F,U)=>{if(y.type==="svg"?V="svg":y.type==="math"&&(V="mathml"),f==null)w(y,E,I,O,B,V,F,U);else{const $=f.el&&f.el._isVueCE?f.el:null;try{$&&$._beginPatch(),g(f,y,O,B,V,F,U)}finally{$&&$._endPatch()}}},w=(f,y,E,I,O,B,V,F)=>{let U,$;const{props:Y,shapeFlag:q,transition:X,dirs:ee}=f;if(U=f.el=o(f.type,B,Y&&Y.is,Y),q&8?l(U,f.children):q&16&&v(f.children,U,null,I,O,Ns(f,B),V,F),ee&&ln(f,null,I,"created"),D(U,f,f.scopeId,V,I),Y){for(const ue in Y)ue!=="value"&&!rr(ue)&&i(U,ue,null,Y[ue],B,I);"value"in Y&&i(U,"value",null,Y.value,B),($=Y.onVnodeBeforeMount)&&yt($,I,f)}ee&&ln(f,null,I,"beforeMount");const re=Iu(O,X);re&&X.beforeEnter(U),r(U,y,E),(($=Y&&Y.onVnodeMounted)||re||ee)&&Me(()=>{$&&yt($,I,f),re&&X.enter(U),ee&&ln(f,null,I,"mounted")},O)},D=(f,y,E,I,O)=>{if(E&&m(f,E),I)for(let B=0;B<I.length;B++)m(f,I[B]);if(O){let B=O.subTree;if(y===B||nc(B.type)&&(B.ssContent===y||B.ssFallback===y)){const V=O.vnode;D(f,V,V.scopeId,V.slotScopeIds,O.parent)}}},v=(f,y,E,I,O,B,V,F,U=0)=>{for(let $=U;$<f.length;$++){const Y=f[$]=F?It(f[$]):xt(f[$]);C(null,Y,y,E,I,O,B,V,F)}},g=(f,y,E,I,O,B,V)=>{const F=y.el=f.el;let{patchFlag:U,dynamicChildren:$,dirs:Y}=y;U|=f.patchFlag&16;const q=f.props||le,X=y.props||le;let ee;if(E&&un(E,!1),(ee=X.onVnodeBeforeUpdate)&&yt(ee,E,y,f),Y&&ln(y,f,E,"beforeUpdate"),E&&un(E,!0),(q.innerHTML&&X.innerHTML==null||q.textContent&&X.textContent==null)&&l(F,""),$?A(f.dynamicChildren,$,F,E,I,Ns(y,O),B):V||H(f,y,F,null,E,I,Ns(y,O),B,!1),U>0){if(U&16)T(F,q,X,E,O);else if(U&2&&q.class!==X.class&&i(F,"class",null,X.class,O),U&4&&i(F,"style",q.style,X.style,O),U&8){const re=y.dynamicProps;for(let ue=0;ue<re.length;ue++){const ae=re[ue],ze=q[ae],Ge=X[ae];(Ge!==ze||ae==="value")&&i(F,ae,ze,Ge,O,E)}}U&1&&f.children!==y.children&&l(F,y.children)}else!V&&$==null&&T(F,q,X,E,O);((ee=X.onVnodeUpdated)||Y)&&Me(()=>{ee&&yt(ee,E,y,f),Y&&ln(y,f,E,"updated")},I)},A=(f,y,E,I,O,B,V)=>{for(let F=0;F<y.length;F++){const U=f[F],$=y[F],Y=U.el&&(U.type===et||!Zn(U,$)||U.shapeFlag&198)?d(U.el):E;C(U,$,Y,null,I,O,B,V,!0)}},T=(f,y,E,I,O)=>{if(y!==E){if(y!==le)for(const B in y)!rr(B)&&!(B in E)&&i(f,B,y[B],null,O,I);for(const B in E){if(rr(B))continue;const V=E[B],F=y[B];V!==F&&B!=="value"&&i(f,B,F,V,O,I)}"value"in E&&i(f,"value",y.value,E.value,O)}},L=(f,y,E,I,O,B,V,F,U)=>{const $=y.el=f?f.el:a(""),Y=y.anchor=f?f.anchor:a("");let{patchFlag:q,dynamicChildren:X,slotScopeIds:ee}=y;ee&&(F=F?F.concat(ee):ee),f==null?(r($,E,I),r(Y,E,I),v(y.children||[],E,Y,O,B,V,F,U)):q>0&&q&64&&X&&f.dynamicChildren&&f.dynamicChildren.length===X.length?(A(f.dynamicChildren,X,E,O,B,V,F),(y.key!=null||O&&y===O.subTree)&&Di(f,y,!0)):H(f,y,E,Y,O,B,V,F,U)},Q=(f,y,E,I,O,B,V,F,U)=>{y.slotScopeIds=F,f==null?y.shapeFlag&512?O.ctx.activate(y,E,I,V,U):ne(y,E,I,O,B,V,U):me(f,y,U)},ne=(f,y,E,I,O,B,V)=>{const F=f.component=Hu(f,I,O);if(Si(f)&&(F.ctx.renderer=Jn),qu(F,!1,V),F.asyncDep){if(O&&O.registerDep(F,W,V),!f.el){const U=F.subTree=$e(rn);M(null,U,y,E),f.placeholder=U.el}}else W(F,f,y,E,O,B,V)},me=(f,y,E)=>{const I=y.component=f.component;if(Su(f,y,E))if(I.asyncDep&&!I.asyncResolved){P(I,y,E);return}else I.next=y,I.update();else y.el=f.el,I.vnode=y},W=(f,y,E,I,O,B,V)=>{const F=()=>{if(f.isMounted){let{next:q,bu:X,u:ee,parent:re,vnode:ue}=f;{const mt=ec(f);if(mt){q&&(q.el=ue.el,P(f,q,V)),mt.asyncDep.then(()=>{Me(()=>{f.isUnmounted||$()},O)});return}}let ae=q,ze;un(f,!1),q?(q.el=ue.el,P(f,q,V)):q=ue,X&&Hr(X),(ze=q.props&&q.props.onVnodeBeforeUpdate)&&yt(ze,re,q,ue),un(f,!0);const Ge=io(f),gt=f.subTree;f.subTree=Ge,C(gt,Ge,d(gt.el),Br(gt),f,O,B),q.el=Ge.el,ae===null&&ku(f,Ge.el),ee&&Me(ee,O),(ze=q.props&&q.props.onVnodeUpdated)&&Me(()=>yt(ze,re,q,ue),O)}else{let q;const{el:X,props:ee}=y,{bm:re,m:ue,parent:ae,root:ze,type:Ge}=f,gt=lr(y);un(f,!1),re&&Hr(re),!gt&&(q=ee&&ee.onVnodeBeforeMount)&&yt(q,ae,y),un(f,!0);{ze.ce&&ze.ce._hasShadowRoot()&&ze.ce._injectChildStyle(Ge);const mt=f.subTree=io(f);C(null,mt,E,I,f,O,B),y.el=mt.el}if(ue&&Me(ue,O),!gt&&(q=ee&&ee.onVnodeMounted)){const mt=y;Me(()=>yt(q,ae,mt),O)}(y.shapeFlag&256||ae&&lr(ae.vnode)&&ae.vnode.shapeFlag&256)&&f.a&&Me(f.a,O),f.isMounted=!0,y=E=I=null}};f.scope.on();const U=f.effect=new ma(F);f.scope.off();const $=f.update=U.run.bind(U),Y=f.job=U.runIfDirty.bind(U);Y.i=f,Y.id=f.uid,U.scheduler=()=>vi(Y),un(f,!0),$()},P=(f,y,E)=>{y.component=f;const I=f.vnode.props;f.vnode=y,f.next=null,Tu(f,y.props,I,E),Ou(f,y.children,E),Ht(),Ki(f),qt()},H=(f,y,E,I,O,B,V,F,U=!1)=>{const $=f&&f.children,Y=f?f.shapeFlag:0,q=y.children,{patchFlag:X,shapeFlag:ee}=y;if(X>0){if(X&128){ke($,q,E,I,O,B,V,F,U);return}else if(X&256){Se($,q,E,I,O,B,V,F,U);return}}ee&8?(Y&16&&jn($,O,B),q!==$&&l(E,q)):Y&16?ee&16?ke($,q,E,I,O,B,V,F,U):jn($,O,B,!0):(Y&8&&l(E,""),ee&16&&v(q,E,I,O,B,V,F,U))},Se=(f,y,E,I,O,B,V,F,U)=>{f=f||In,y=y||In;const $=f.length,Y=y.length,q=Math.min($,Y);let X;for(X=0;X<q;X++){const ee=y[X]=U?It(y[X]):xt(y[X]);C(f[X],ee,E,null,O,B,V,F,U)}$>Y?jn(f,O,B,!0,!1,q):v(y,E,I,O,B,V,F,U,q)},ke=(f,y,E,I,O,B,V,F,U)=>{let $=0;const Y=y.length;let q=f.length-1,X=Y-1;for(;$<=q&&$<=X;){const ee=f[$],re=y[$]=U?It(y[$]):xt(y[$]);if(Zn(ee,re))C(ee,re,E,null,O,B,V,F,U);else break;$++}for(;$<=q&&$<=X;){const ee=f[q],re=y[X]=U?It(y[X]):xt(y[X]);if(Zn(ee,re))C(ee,re,E,null,O,B,V,F,U);else break;q--,X--}if($>q){if($<=X){const ee=X+1,re=ee<Y?y[ee].el:I;for(;$<=X;)C(null,y[$]=U?It(y[$]):xt(y[$]),E,re,O,B,V,F,U),$++}}else if($>X)for(;$<=q;)Fe(f[$],O,B,!0),$++;else{const ee=$,re=$,ue=new Map;for($=re;$<=X;$++){const Ze=y[$]=U?It(y[$]):xt(y[$]);Ze.key!=null&&ue.set(Ze.key,$)}let ae,ze=0;const Ge=X-re+1;let gt=!1,mt=0;const Xn=new Array(Ge);for($=0;$<Ge;$++)Xn[$]=0;for($=ee;$<=q;$++){const Ze=f[$];if(ze>=Ge){Fe(Ze,O,B,!0);continue}let ht;if(Ze.key!=null)ht=ue.get(Ze.key);else for(ae=re;ae<=X;ae++)if(Xn[ae-re]===0&&Zn(Ze,y[ae])){ht=ae;break}ht===void 0?Fe(Ze,O,B,!0):(Xn[ht-re]=$+1,ht>=mt?mt=ht:gt=!0,C(Ze,y[ht],E,null,O,B,V,F,U),ze++)}const Ni=gt?Lu(Xn):In;for(ae=Ni.length-1,$=Ge-1;$>=0;$--){const Ze=re+$,ht=y[Ze],Ui=y[Ze+1],Fi=Ze+1<Y?Ui.el||tc(Ui):I;Xn[$]===0?C(null,ht,E,Fi,O,B,V,F,U):gt&&(ae<0||$!==Ni[ae]?Ee(ht,E,Fi,2):ae--)}}},Ee=(f,y,E,I,O=null)=>{const{el:B,type:V,transition:F,children:U,shapeFlag:$}=f;if($&6){Ee(f.component.subTree,y,E,I);return}if($&128){f.suspense.move(y,E,I);return}if($&64){V.move(f,y,E,Jn);return}if(V===et){r(B,y,E);for(let q=0;q<U.length;q++)Ee(U[q],y,E,I);r(f.anchor,y,E);return}if(V===Gr){k(f,y,E);return}if(I!==2&&$&1&&F)if(I===0)F.beforeEnter(B),r(B,y,E),Me(()=>F.enter(B),O);else{const{leave:q,delayLeave:X,afterLeave:ee}=F,re=()=>{f.ctx.isUnmounted?s(B):r(B,y,E)},ue=()=>{B._isLeaving&&B[jl](!0),q(B,()=>{re(),ee&&ee()})};X?X(B,re,ue):ue()}else r(B,y,E)},Fe=(f,y,E,I=!1,O=!1)=>{const{type:B,props:V,ref:F,children:U,dynamicChildren:$,shapeFlag:Y,patchFlag:q,dirs:X,cacheIndex:ee}=f;if(q===-2&&(O=!1),F!=null&&(Ht(),cr(F,null,E,f,!0),qt()),ee!=null&&(y.renderCache[ee]=void 0),Y&256){y.ctx.deactivate(f);return}const re=Y&1&&X,ue=!lr(f);let ae;if(ue&&(ae=V&&V.onVnodeBeforeUnmount)&&yt(ae,y,f),Y&6)zc(f.component,E,I);else{if(Y&128){f.suspense.unmount(E,I);return}re&&ln(f,null,y,"beforeUnmount"),Y&64?f.type.remove(f,y,E,Jn,I):$&&!$.hasOnce&&(B!==et||q>0&&q&64)?jn($,y,E,!1,!0):(B===et&&q&384||!O&&Y&16)&&jn(U,y,E),I&&Or(f)}(ue&&(ae=V&&V.onVnodeUnmounted)||re)&&Me(()=>{ae&&yt(ae,y,f),re&&ln(f,null,y,"unmounted")},E)},Or=f=>{const{type:y,el:E,anchor:I,transition:O}=f;if(y===et){kn(E,I);return}if(y===Gr){p(f);return}const B=()=>{s(E),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(f.shapeFlag&1&&O&&!O.persisted){const{leave:V,delayLeave:F}=O,U=()=>V(E,B);F?F(f.el,B,U):U()}else B()},kn=(f,y)=>{let E;for(;f!==y;)E=_(f),s(f),f=E;s(y)},zc=(f,y,E)=>{const{bum:I,scope:O,job:B,subTree:V,um:F,m:U,a:$}=f;co(U),co($),I&&Hr(I),O.stop(),B&&(B.flags|=8,Fe(V,f,y,E)),F&&Me(F,y),Me(()=>{f.isUnmounted=!0},y)},jn=(f,y,E,I=!1,O=!1,B=0)=>{for(let V=B;V<f.length;V++)Fe(f[V],y,E,I,O)},Br=f=>{if(f.shapeFlag&6)return Br(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const y=_(f.anchor||f.el),E=y&&y[Ma];return E?_(E):y};let Ps=!1;const Mi=(f,y,E)=>{let I;f==null?y._vnode&&(Fe(y._vnode,null,null,!0),I=y._vnode.component):C(y._vnode||null,f,y,null,null,null,E),y._vnode=f,Ps||(Ps=!0,Ki(I),Ba(),Ps=!1)},Jn={p:C,um:Fe,m:Ee,r:Or,mt:ne,mc:v,pc:H,pbc:A,n:Br,o:t};return{render:Mi,hydrate:void 0,createApp:bu(Mi)}}function Ns({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function un({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Iu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Di(t,e,n=!1){const r=t.children,s=e.children;if(Z(r)&&Z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=It(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Di(o,a)),a.type===Ss&&(a.patchFlag===-1&&(a=s[i]=It(a)),a.el=o.el),a.type===rn&&!a.el&&(a.el=o.el)}}function Lu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ec(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ec(e)}function co(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function tc(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?tc(e.subTree):null}const nc=t=>t.__isSuspense;function Ru(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):Ul(t)}const et=Symbol.for("v-fgt"),Ss=Symbol.for("v-txt"),rn=Symbol.for("v-cmt"),Gr=Symbol.for("v-stc"),dr=[];let nt=null;function pe(t=!1){dr.push(nt=t?null:[])}function Mu(){dr.pop(),nt=dr[dr.length-1]||null}let br=1;function lo(t,e=!1){br+=t,t<0&&nt&&e&&(nt.hasOnce=!0)}function rc(t){return t.dynamicChildren=br>0?nt||In:null,Mu(),br>0&&nt&&nt.push(t),t}function _e(t,e,n,r,s,i){return rc(j(t,e,n,r,s,i,!0))}function sc(t,e,n,r,s){return rc($e(t,e,n,r,s,!0))}function ic(t){return t?t.__v_isVNode===!0:!1}function Zn(t,e){return t.type===e.type&&t.key===e.key}const oc=({key:t})=>t??null,Kr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ve(t)||we(t)||te(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,r=0,s=null,i=t===et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&oc(e),ref:e&&Kr(e),scopeId:Ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tt};return a?(Pi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),br>0&&!o&&nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&nt.push(c),c}const $e=Nu;function Nu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Fa)&&(t=rn),ic(t)){const a=Wn(t,e,!0);return n&&Pi(a,n),br>0&&!i&&nt&&(a.shapeFlag&6?nt[nt.indexOf(t)]=a:nt.push(a)),a.patchFlag=-2,a}if(Ju(t)&&(t=t.__vccOpts),e){e=Uu(e);let{class:a,style:c}=e;a&&!ve(a)&&(e.class=lt(a)),ce(c)&&(vs(c)&&!Z(c)&&(c=Le({},c)),e.style=bs(c))}const o=ve(t)?1:nc(t)?128:Gl(t)?64:ce(t)?4:te(t)?2:0;return j(t,e,n,r,s,o,i,!0)}function Uu(t){return t?vs(t)||ja(t)?Le({},t):t:null}function Wn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?Fu(s||{},e):s,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&oc(u),ref:e&&e.ref?n&&i?Z(i)?i.concat(Kr(e)):[i,Kr(e)]:Kr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&xi(l,c.clone(l)),l}function fr(t=" ",e=0){return $e(Ss,null,t,e)}function Rg(t,e){const n=$e(Gr,null,t);return n.staticCount=e,n}function jr(t="",e=!1){return e?(pe(),sc(rn,null,t)):$e(rn,null,t)}function xt(t){return t==null||typeof t=="boolean"?$e(rn):Z(t)?$e(et,null,t.slice()):ic(t)?It(t):$e(Ss,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Wn(t)}function Pi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Pi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ja(e)?e._ctx=tt:s===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),r&64?(n=16,e=[fr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=lt([e.class,r.class]));else if(s==="style")e.style=bs([e.style,r.style]);else if(ds(s)){const i=e[s],o=r[s];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function yt(t,e,n,r=null){Dt(t,e,7,[n,r])}const Vu=Ha();let Wu=0;function Hu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Vu,i={uid:Wu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xa(r,s),emitsOptions:qa(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wu.bind(null,i),t.ce&&t.ce(i),i}let Be=null;const ac=()=>Be||tt;let as,Qs;{const t=ys(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};as=e("__VUE_INSTANCE_SETTERS__",n=>Be=n),Qs=e("__VUE_SSR_SETTERS__",n=>Hn=n)}const Er=t=>{const e=Be;return as(t),t.scope.on(),()=>{t.scope.off(),as(e)}},uo=()=>{Be&&Be.scope.off(),as(null)};function cc(t){return t.vnode.shapeFlag&4}let Hn=!1;function qu(t,e=!1,n=!1){e&&Qs(e);const{props:r,children:s}=t.vnode,i=cc(t);Au(t,r,i,e),Pu(t,s,n||e);const o=i?zu(t,e):void 0;return e&&Qs(!1),o}function zu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,du);const{setup:r}=n;if(r){Ht();const s=t.setupContext=r.length>1?Ku(t):null,i=Er(t),o=Ar(r,t,0,[t.props,s]),a=ia(o);if(qt(),i(),(a||t.sp)&&!lr(t)&&Ci(t),a){if(o.then(uo,uo),e)return o.then(c=>{fo(t,c)}).catch(c=>{Tr(c,t,0)});t.asyncDep=o}else fo(t,o)}else lc(t)}function fo(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Da(e)),lc(t)}function lc(t,e,n){const r=t.type;t.render||(t.render=r.render||kt);{const s=Er(t);Ht();try{fu(t)}finally{qt(),s()}}}const Gu={get(t,e){return Ue(t,"get",""),t[e]}};function Ku(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Gu),slots:t.slots,emit:t.emit,expose:e}}function ks(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Da(_i(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ur)return ur[n](t)},has(e,n){return n in e||n in ur}})):t.proxy}function ju(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function Ju(t){return te(t)&&"__vccOpts"in t}const x=(t,e)=>Il(t,e,Hn),Xu="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ei;const po=typeof window<"u"&&window.trustedTypes;if(po)try{ei=po.createPolicy("vue",{createHTML:t=>t})}catch{}const uc=ei?t=>ei.createHTML(t):t=>t,Yu="http://www.w3.org/2000/svg",Zu="http://www.w3.org/1998/Math/MathML",Ot=typeof document<"u"?document:null,go=Ot&&Ot.createElement("template"),Qu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ot.createElementNS(Yu,t):e==="mathml"?Ot.createElementNS(Zu,t):n?Ot.createElement(t,{is:n}):Ot.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{go.innerHTML=uc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=go.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ed=Symbol("_vtc");function td(t,e,n){const r=t[ed];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cs=Symbol("_vod"),dc=Symbol("_vsh"),Mg={name:"show",beforeMount(t,{value:e},{transition:n}){t[cs]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Qn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Qn(t,!0),r.enter(t)):r.leave(t,()=>{Qn(t,!1)}):Qn(t,e))},beforeUnmount(t,{value:e}){Qn(t,e)}};function Qn(t,e){t.style.display=e?t[cs]:"none",t[dc]=!e}const nd=Symbol(""),rd=/(?:^|;)\s*display\s*:/;function sd(t,e,n){const r=t.style,s=ve(n);let i=!1;if(n&&!s){if(e)if(ve(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Jr(r,a,"")}else for(const o in e)n[o]==null&&Jr(r,o,"");for(const o in n)o==="display"&&(i=!0),Jr(r,o,n[o])}else if(s){if(e!==n){const o=r[nd];o&&(n+=";"+o),r.cssText=n,i=rd.test(n)}}else e&&t.removeAttribute("style");cs in t&&(t[cs]=i?r.display:"",t[dc]&&(r.display="none"))}const mo=/\s*!important$/;function Jr(t,e,n){if(Z(n))n.forEach(r=>Jr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=id(t,e);mo.test(n)?t.setProperty(on(r),n.replace(mo,""),"important"):t[r]=n}}const ho=["Webkit","Moz","ms"],Us={};function id(t,e){const n=Us[e];if(n)return n;let r=ot(e);if(r!=="filter"&&r in t)return Us[e]=r;r=ms(r);for(let s=0;s<ho.length;s++){const i=ho[s]+r;if(i in t)return Us[e]=i}return e}const yo="http://www.w3.org/1999/xlink";function bo(t,e,n,r,s,i=rl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(yo,e.slice(6,e.length)):t.setAttributeNS(yo,e,n):n==null||i&&!la(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Et(n)?String(n):n)}function _o(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?uc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=la(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Qt(t,e,n,r){t.addEventListener(e,n,r)}function od(t,e,n,r){t.removeEventListener(e,n,r)}const wo=Symbol("_vei");function ad(t,e,n,r,s=null){const i=t[wo]||(t[wo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=cd(e);if(r){const u=i[e]=dd(r,s);Qt(t,a,u,c)}else o&&(od(t,a,o,c),i[e]=void 0)}}const vo=/(?:Once|Passive|Capture)$/;function cd(t){let e;if(vo.test(t)){e={};let r;for(;r=t.match(vo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):on(t.slice(2)),e]}let Fs=0;const ld=Promise.resolve(),ud=()=>Fs||(ld.then(()=>Fs=0),Fs=Date.now());function dd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Dt(fd(r,n.value),e,5,[r])};return n.value=t,n.attached=ud(),n}function fd(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?td(t,r,o):e==="style"?sd(t,n,r):ds(e)?di(e)||ad(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gd(t,e,r,o))?(_o(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bo(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ve(r))?_o(t,ot(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bo(t,e,r,o))};function gd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xo(e)&&te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xo(e)&&ve(n)?!1:e in t}const qn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>Hr(e,n):e};function md(t){t.target.composing=!0}function Co(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vt=Symbol("_assign");function So(t,e,n){return e&&(t=t.trim()),n&&(t=hs(t)),t}const Ng={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Vt]=qn(s);const i=r||s.props&&s.props.type==="number";Qt(t,e?"change":"input",o=>{o.target.composing||t[Vt](So(t.value,n,i))}),(n||i)&&Qt(t,"change",()=>{t.value=So(t.value,n,i)}),e||(Qt(t,"compositionstart",md),Qt(t,"compositionend",Co),Qt(t,"change",Co))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Vt]=qn(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?hs(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Ug={created(t,{value:e},n){t.checked=vn(e,n.props.value),t[Vt]=qn(n),Qt(t,"change",()=>{t[Vt](_r(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Vt]=qn(r),e!==n&&(t.checked=vn(e,r.props.value))}},Fg={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=fs(e);Qt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?hs(_r(o)):_r(o));t[Vt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,wi(()=>{t._assigning=!1})}),t[Vt]=qn(r)},mounted(t,{value:e}){ko(t,e)},beforeUpdate(t,e,n){t[Vt]=qn(n)},updated(t,{value:e}){t._assigning||ko(t,e)}};function ko(t,e){const n=t.multiple,r=Z(e);if(!(n&&!r&&!fs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=_r(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=il(e,a)>-1}else o.selected=e.has(a);else if(vn(_r(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function _r(t){return"_value"in t?t._value:t.value}const hd=["ctrl","shift","alt","meta"],yd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hd.some(n=>t[`${n}Key`]&&!e.includes(n))},bd=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=yd[e[o]];if(a&&a(s,e))return}return t(s,...i)})},_d={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Vg=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=on(s.key);if(e.some(o=>o===i||_d[o]===i))return t(s)})},wd=Le({patchProp:pd},Qu);let Ao;function vd(){return Ao||(Ao=Bu(wd))}const xd=(...t)=>{const e=vd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Sd(r);if(!s)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Cd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Cd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Sd(t){return ve(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let fc;const As=t=>fc=t,pc=Symbol();function ti(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var pr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(pr||(pr={}));function kd(){const t=pa(!0),e=t.run(()=>K({}));let n=[],r=[];const s=_i({install(i){As(s),s._a=i,i.provide(pc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const gc=()=>{};function To(t,e,n,r=gc){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&ga()&&ol(s),s}function Tn(t,...e){t.forEach(n=>{n(...e)})}const Ad=t=>t(),Eo=Symbol(),Vs=Symbol();function ni(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ti(s)&&ti(r)&&t.hasOwnProperty(n)&&!we(r)&&!Ft(r)?t[n]=ni(s,r):t[n]=r}return t}const Td=Symbol();function Ed(t){return!ti(t)||!Object.prototype.hasOwnProperty.call(t,Td)}const{assign:Xt}=Object;function Dd(t){return!!(we(t)&&t.effect)}function Pd(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const l=Pl(n.state.value[t]);return Xt(l,i,Object.keys(o||{}).reduce((d,_)=>(d[_]=_i(x(()=>{As(n);const m=n._s.get(t);return o[_].call(m,m)})),d),{}))}return c=mc(t,u,e,n,r,!0),c}function mc(t,e,n={},r,s,i){let o;const a=Xt({actions:{}},n),c={deep:!0};let u,l,d=new Set,_=new Set,m;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={});let C;function N(v){let g;u=l=!1,typeof v=="function"?(v(r.state.value[t]),g={type:pr.patchFunction,storeId:t,events:m}):(ni(r.state.value[t],v),g={type:pr.patchObject,payload:v,storeId:t,events:m});const A=C=Symbol();wi().then(()=>{C===A&&(u=!0)}),l=!0,Tn(d,g,r.state.value[t])}const M=i?function(){const{state:g}=n,A=g?g():{};this.$patch(T=>{Xt(T,A)})}:gc;function b(){o.stop(),d.clear(),_.clear(),r._s.delete(t)}const k=(v,g="")=>{if(Eo in v)return v[Vs]=g,v;const A=function(){As(r);const T=Array.from(arguments),L=new Set,Q=new Set;function ne(P){L.add(P)}function me(P){Q.add(P)}Tn(_,{args:T,name:A[Vs],store:h,after:ne,onError:me});let W;try{W=v.apply(this&&this.$id===t?this:h,T)}catch(P){throw Tn(Q,P),P}return W instanceof Promise?W.then(P=>(Tn(L,P),P)).catch(P=>(Tn(Q,P),Promise.reject(P))):(Tn(L,W),W)};return A[Eo]=!0,A[Vs]=g,A},p={_p:r,$id:t,$onAction:To.bind(null,_),$patch:N,$reset:M,$subscribe(v,g={}){const A=To(d,v,g.detached,()=>T()),T=o.run(()=>qr(()=>r.state.value[t],L=>{(g.flush==="sync"?l:u)&&v({storeId:t,type:pr.direct,events:m},L)},Xt({},c,g)));return A},$dispose:b},h=ws(p);r._s.set(t,h);const D=(r._a&&r._a.runWithContext||Ad)(()=>r._e.run(()=>(o=pa()).run(()=>e({action:k}))));for(const v in D){const g=D[v];if(we(g)&&!Dd(g)||Ft(g))i||(S&&Ed(g)&&(we(g)?g.value=S[v]:ni(g,S[v])),r.state.value[t][v]=g);else if(typeof g=="function"){const A=k(g,v);D[v]=A,a.actions[v]=g}}return Xt(h,D),Xt(ie(h),D),Object.defineProperty(h,"$state",{get:()=>r.state.value[t],set:v=>{N(g=>{Xt(g,v)})}}),r._p.forEach(v=>{Xt(h,o.run(()=>v({store:h,app:r._a,pinia:r,options:a})))}),S&&i&&n.hydrate&&n.hydrate(h.$state,S),u=!0,l=!0,h}/*! #__NO_SIDE_EFFECTS__ */function Oi(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,a){const c=Wl();return o=o||(c?or(pc,null):null),o&&As(o),o=fc,o._s.has(t)||(s?mc(t,e,r,o):Pd(t,r,o)),o._s.get(t)}return i.$id=t,i}const zn={1:{title:"Day 1 - 点击计数器",subtitle:"点击计数器/ClickCounter",concepts:["function","increment","uint256","contract"]},2:{title:"Day 2 - 保存名字",subtitle:"保存名字/SaveMyName",concepts:["string","private","memory","view","parameters","returns"]},3:{title:"Day 3 - 投票站",subtitle:"投票站/PollStation",concepts:["array","mapping","push","compound_assignment"]},4:{title:"Day 4 - 拍卖行",subtitle:"拍卖行/AuctionHouse",concepts:["constructor","msg_sender","block_timestamp","require","external","address_type","bool_type"]},5:{title:"Day 5 - 管理员权限",subtitle:"管理员权限/AdminOnly",concepts:["modifier","zero_address","return_statement"]},6:{title:"Day 6 - 以太坊银行",subtitle:"以太坊银行/EtherPiggyBank",concepts:["address_mapping_balance","payable","msg_value","wei_unit","ether_deposit_withdraw"]},7:{title:"Day 7 - 朋友借条",subtitle:"朋友借条/SimpleIOU",concepts:["nested_mapping","address_payable","debt_tracking","internal_transfer","transfer_method","call_method","withdraw_pattern"]},8:{title:"Day 8 - 打赏罐",subtitle:"打赏罐/TipJar",concepts:["modifier_onlyOwner","payable_tip","msg_value_tip","address_balance","call_withdraw","mapping_rates"]},9:{title:"Day 9 - 跨合约调用",subtitle:"跨合约调用/InterContract",concepts:["pure_function","view_function","cross_contract_call","interface_call","low_level_call","modifier_onlyOwner","newton_iteration","contract_composition"]},10:{title:"Day 10 - 健身追踪器",subtitle:"健身追踪器/ActivityTracker",concepts:["struct_definition","array_in_mapping","multiple_mappings","storage_keyword","event_logging","milestone_detection","timestamp_usage","onlyRegistered_modifier"]},11:{title:"Day 11 - 主密钥保险库",subtitle:"合约继承与所有权/MasterkeyVault",concepts:["inheritance","import_statement","constructor","private_visibility","event_logging","indexed_parameter","transfer_ownership","onlyOwner_modifier"]},12:{title:"Day 12 - ERC20 代币标准",subtitle:"ERC20代币/Web3Compass",concepts:["erc20_standard","mapping_nested","event","transfer","approve","allowance","transferFrom"]},13:{title:"Day 13 - MyToken 代币扩展",subtitle:"ERC20进阶/Virtual & Inheritance",concepts:["constructor_mint","zero_address_mint","internal_function","virtual_function"]},14:{title:"Day 14 - 安全存款盒",subtitle:"抽象合约、接口与工厂模式/Abstract, Interface & Factory",concepts:["interface_definition","abstract_contract","inheritance","override_keyword","virtual_function","super_keyword","modifier_combination","factory_pattern","metadata_storage","time_lock"]},15:{title:"Day 15 - Gas优化投票",subtitle:"高效节能投票/GasEfficientVoting",concepts:["compact_datatype","uint8_uint32","bytes32_string","storage_optimization","bit_operation","mapping_storage","mask_check","timestamp_block","event_logging"]},16:{title:"Day 16 - 插件存储系统",subtitle:"动态插件注册与低级别调用/PluginStore",concepts:["struct_definition","mapping_storage","plugin_registration","low_level_call","abi_encoding","staticcall","dynamic_delegation","contract_interop"]},17:{title:"Day 17",subtitle:"可升级合约/UpgradeHub",concepts:["proxy_pattern","delegatecall","storage_layout","upgrade_mechanism","logic_contract","fallback_function","data_persistence","version_control"]}},Wg=t=>t===1?`//SPDx-License-Identifier:MIT

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
//    - msg.value 保持不变`:"",Od=()=>Object.keys(zn).reduce((t,e)=>(t[e]={unlockedConcepts:[],totalConcepts:zn[e].concepts.length,interactionCount:0},t),{}),Ye=Oi("progress",()=>{const t=K(Od()),e=c=>String(c),n=(c,u)=>{const l=e(c),d=t.value[l];d&&!d.unlockedConcepts.includes(u)&&d.unlockedConcepts.push(u)},r=c=>{const u=e(c),l=t.value[u];l&&l.interactionCount++},s=c=>{const u=e(c);return t.value[u]},i=c=>{var l;const u=e(c);return((l=t.value[u])==null?void 0:l.unlockedConcepts)||[]};return{dayProgress:t,unlockConcept:n,incrementInteraction:r,getDayProgress:s,getUnlockedConcepts:i,isConceptUnlocked:(c,u)=>i(c).includes(u),getProgressPercentage:c=>{const u=e(c),l=t.value[u];return!l||l.totalConcepts===0?0:Math.floor(l.unlockedConcepts.length/l.totalConcepts*100)}}}),st=Oi("contract",()=>{const t=K({day1:{count:0,interactionCount:0},day2:{name:"",bio:"",interactionCount:0,hasStored:!1,hasRetrieved:!1},day3:{candidates:[],voteCount:{},interactionCount:0},day4:{owner:"",item:"",auctionEndTime:0,highestBidder:"",highestBid:0,ended:!1,bids:{},bidders:[],interactionCount:0},day5:{owner:"",treasureAmount:0,withdrawalAllowance:{},hasWithdrawn:{},userAddress:"0x"+Math.random().toString(16).substr(2,40),userAllowance:0,interactionCount:0},day6:{bankManager:"",members:[],registeredMembers:{},balance:{},userAddress:"0x"+Math.random().toString(16).substr(2,40),interactionCount:0,depositCount:0,withdrawCount:0},day7:{owner:"",userAddress:"",registeredFriends:{},friendList:[],balances:{},debts:{},interactionCount:0},day8:{owner:"",userAddress:"",isUserAdmin:!1,totalTipsReceived:0,tipPerPerson:{},tipsPerCurrency:{},supportedCurrencies:["USD","EUR","JPY","INR"],conversionRates:{USD:5e14,EUR:6e14,JPY:4e12,INR:7e12},interactionCount:0},day9:{owner:"",userAddress:"",isUserAdmin:!1,scientificCalculatorAddress:"",isAddressSet:!1,operationCount:0,operationHistory:[],interactionCount:0,challengeTasks:{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}},day10:{owner:"",userAddress:"",userProfile:{name:"",weight:0,isRegistered:!1},workoutHistory:[],totalWorkouts:0,totalDistance:0,milestones:{weightGoal:{achieved:!1,timestamp:0,title:"减重目标达成",icon:"⚖️"},workouts10:{achieved:!1,timestamp:0,title:"10次运动",icon:"🏃"},workouts50:{achieved:!1,timestamp:0,title:"50次运动大师",icon:"🏆"},distance100K:{achieved:!1,timestamp:0,title:"100公里里程碑",icon:"🌍"}},interactionCount:0},day11:{owner:"",userAddress:"",contractBalance:0,eventLog:[],interactionCount:0}}),e=()=>"0x"+Math.random().toString(16).substr(2,40),n=i=>{const o=`day${i}`,a=t.value[o];if(!a){console.warn(`Contract for day ${i} not found`);return}switch(i){case 5:a.owner||(a.owner=e()),a.userAddress||(a.userAddress=e());break;case 6:a.bankManager===""&&(a.bankManager=e(),a.members=[a.bankManager],a.registeredMembers={[a.bankManager]:!0,[a.userAddress]:!0},a.balance={[a.bankManager]:0,[a.userAddress]:0},a.members.push(a.userAddress));break;case 7:if(a.owner===""){const c=e();a.owner=c,a.userAddress=c,a.registeredFriends[c]=!0,a.friendList.push(c)}break;case 8:a.owner===""&&(a.owner=e(),a.userAddress=e());break;case 9:a.owner===""&&(a.owner=e(),a.userAddress=e(),a.isUserAdmin=!1);break;case 10:a.owner===""&&(a.owner=e(),a.userAddress=e());break;case 11:if(a.owner===""){const c=e();a.owner=c,a.userAddress=c,a.contractBalance=0,a.eventLog=[]}break}},r=i=>t.value[`day${i}`];return{contracts:t,initializeContract:n,getContract:r,updateContract:(i,o)=>{const a=r(i);a&&Object.assign(a,o)},generateAddress:e}}),Do={increment:21e3,reset:21e3,addData:4e4,retrieveData:0,addCandidate:5e4,vote:35e3,placeBid:45e3,endAuction:25e3,addTreasure:3e4,approveWithdrawal:4e4,withdrawTreasure:5e4,resetWithdrawalStatus:25e3,transferOwnership:35e3,getTreasureDetails:0,addMembers:45e3,depositAmountEther:35e3,withdrawAmount:4e4,getMembers:0,addFriend:45e3,depositIntoWallet:35e3,recordDebt:45e3,payFromWallet:5e4,transferEther:35e3,transferEtherViaCall:4e4,withdraw:35e3,checkBalance:0,addCurrency:45e3,tipInEth:4e4,tipInCurrency:5e4,withdrawTips:35e3,transferOwnership8:35e3,transfer13:35e3,approve13:3e4,transferFrom13:4e4,getBalance13:0,getAllowance13:0,createBasicBox:8e4,createPremiumBox:1e5,createTimeLockedBox:12e4,storeSecret:35e3,getSecret:0,transferOwnership14:4e4,setMetadata:3e4,getMetadata:0,getUnlockTime:0,getRemainingLockTime:0,completeOwnershipTransfer:45e3,createProposal15:6e4,vote15:4e4,executeProposal15:35e3,setProfile16:35e3,registerPlugin16:25e3,runPlugin16:45e3,runPluginView16:0,createPlan17:45e3,upgradeTo17:35e3,subscribe17:5e4,pauseSubscription17:3e4,resumeSubscription17:3e4,isSubscribed17:0},Po=4e-8,Bd={function:{name:"函数交互",icon:"🎯",unlockAt:1,message:"你刚刚调用了 Solidity 中的第一个函数！在区块链上，用户与合约的所有交互都是通过函数完成的。",code:`function click() public {
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
}`}},$d={inheritance:{name:"合约继承",icon:"🧬",unlockAt:1,message:"你刚刚体验了合约继承！VaultMaster 通过 `is Ownable` 继承了父合约的所有功能，这是代码复用的核心机制。",code:`// 父合约
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
}`}},Id={constructor_mint:{name:"构造函数铸造",icon:"🪙",unlockAt:1,message:"你了解了构造函数铸造机制！合约部署时，构造函数会自动执行，从 address(0) 铸造代币给部署者。",code:`constructor(uint256 _initialSupply){
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
}`}},Hg=t=>({function:"📖 这是函数的基本概念，它是智能合约的基本构建模块。",increment:"📖 自增操作是编程中常见的操作，用于快速增加数值。",uint256:"📖 uint256 是 Solidity 中最常用的整数类型，了解它很重要。",contract:"📖 智能合约是区块链上的自动执行代码，理解它的结构很关键。",string:"📖 string 类型用于存储文本数据，是智能合约中常用的数据类型之一。",private:"📖 private 关键字限制变量的访问范围，提高合约的安全性。",memory:"📖 memory 数据位置用于临时存储，只在函数执行期间存在。",view:"📖 view 函数不修改状态，不消耗 Gas，是优化合约性能的重要方法。",parameters:"📖 函数参数让函数能够接收外部数据，使函数更加灵活和可复用。",returns:"📖 returns 关键字定义函数返回值，让函数能够向调用者返回结果。",array:"📖 数组是存储多个相同类型数据的容器，在 Solidity 中广泛使用。",mapping:"📖 映射是 Solidity 中的键值对存储结构，通过键快速查找对应的值。",push:"📖 push 方法是数组的常用操作，可以在数组末尾动态添加元素。",compound_assignment:"📖 复合赋值运算符将运算和赋值结合在一起，使代码更加简洁。",constructor:"📖 构造函数只在合约部署时执行一次，用于初始化合约的状态变量。",msg_sender:"📖 msg.sender 表示当前调用合约的地址，是区块链交互的核心。",block_timestamp:"📖 block.timestamp 返回当前区块的时间戳，常用于时间相关的逻辑。",require:"📖 require 语句在条件不满足时回滚交易，是保证合约安全的重要机制。",external:"📖 external 函数只能从合约外部调用，比 public 更节省 Gas。",address_type:"📖 address 类型存储以太坊地址，是区块链交互的核心数据类型。",bool_type:"📖 bool 类型只有 true 或 false 两个值，用于标记状态。",modifier:"📖 修饰符用于为函数添加前置条件检查，是权限控制的重要机制。",zero_address:"📖 零地址 address(0) 表示一个无效的地址，通常用于检查地址参数是否有效。",return_statement:"📖 return 语句让函数返回指定的值给调用者，是函数输出结果的方式。",address_mapping_balance:"📖 地址映射 mapping(address => uint256) 是存储用户资产的核心数据结构，通过地址快速查找对应的余额。",payable:"📖 payable 关键字让函数能够接收以太币，这是处理资金交易的关键特性。",msg_value:"📖 msg.value 表示调用函数时发送的以太币数量（以wei为单位），是获取转账金额的标准方式。",wei_unit:"📖 wei 是以太币的最小单位，1 ETH = 10^18 wei，这是以太坊计价的基础单位。",ether_deposit_withdraw:"📖 存取逻辑包括检查余额、增减余额、验证输入，这是任何金融合约的基础。",nested_mapping:"📖 嵌套映射 mapping(A => mapping(B => C)) 允许你在 Solidity 中创建像多维数组或字典中嵌套字典的复杂数据结构。",address_payable:"📖 payable 地址类型拥有 transfer 和 call 方法来发送 Ether。没有 fallback 且非 payable 的地址无法接收以太币。",debt_tracking:"📖 债务追踪展示了区块链账本的不变性和透明性，确保每一笔债权和债务都在链上清晰可查的特性。",internal_transfer:"📖 内部账本系统(Internal Accounting)只改变合约内存的数字而不进行链上交易转账，是处理多高频微支付的最佳实操。",transfer_method:"📖 .transfer() 将转账可用 gas 固定为 2300 防止重入，但当目标接收方智能合约的 fallback 逻辑超过一定 gas 时会导致资金卡死。",call_method:"📖 .call() 提供低级别的外部调用功能，转账时能够转发所有剩余 gas 或自定义数量的 gas 以保证外部操作能顺利执行并返回回调状态。",withdraw_pattern:"📖 提现优于发送。要求用户主动调用 withdraw()，避免了遍历用户数组发钱（可能超出 block gas 限制）以及转账失败阻塞整个合约的风险。",modifier_onlyOwner:"📖 修饰符（Modifier）允许你在不重复编写核心检查逻辑的情况下，重用访问控制代码。`_` 符号代表了目标函数体的执行位置。",payable_tip:"📖 `payable` 是一个函数可见性/状态修饰符。如果没有它，任何尝试向该函数发送 Ether 的交易都会被以太坊虚拟机拒绝并回滚。",msg_value_tip:"📖 `msg.value` 是当前交易附带的以太币数量，以 wei 为单位。它是智能合约处理实时支付的桥梁。",address_balance:"📖 合约不仅可以操作别人的钱，还可以管理属于它自己的钱。`address(this).balance` 让你能实时掌控合约金库的‘水位’。",call_withdraw:"📖 `.call()` 是一个底层原语。在转账时，它能够处理复杂的 Fallback 逻辑，并明确返回一个成功/失败的布尔值，比旧的 `transfer` 更具鲁活性。",mapping_rates:"📖 虽然以太坊没有内置汇率，但我们可以通过合约内部的映射来手动维护一组兑换比例，从而实现'打赏 1 美元 = 支付 X 数量 ETH'的功能。",pure_function:"📖 pure 函数承诺不读取也不修改区块链的状态变量。这意味着它的执行结果完全取决于输入参数，可以在本地快速计算，不需要消耗 Gas。",view_function:"📖 view 函数可以读取状态变量但不修改它们。由于不修改状态，view 函数也可以在本地执行，不消耗 Gas，适合用于查询操作。",cross_contract_call:"📖 跨合约调用是 Solidity 的核心特性之一。通过合约地址，一个合约可以调用另一个合约的函数，实现功能的组合和复用，就像乐高积木一样。",interface_call:"📖 接口方式调用是最常用的跨合约调用方法。通过创建外部合约的接口实例，可以像调用本地函数一样调用外部合约，代码清晰易读。",low_level_call:"📖 底层 call 方法提供了最大的灵活性。它通过 abi.encodeWithSignature 编码函数调用，可以调用任何函数，即使接口未知。但使用起来更复杂，需要手动处理返回值。",newton_iteration:"📖 牛顿迭代法是一种快速逼近方程根的算法。在 Solidity 中，由于不支持浮点数运算，我们使用整数运算通过多次迭代来逼近真实值。限制迭代次数可以防止 Gas 耗尽。",contract_composition:"📖 合约组合是 Solidity 的重要设计理念。通过将功能拆分到多个合约，可以实现代码复用、降低复杂度、提高可维护性。这是构建复杂 DApp 的基础。",struct_definition:"📖 `struct` 结构体允许你定义自定义的数据类型，将多个不同类型的变量打包在一起。这是组织复杂数据的有效方式，让代码更加清晰和易于维护。",array_in_mapping:"📖 Solidity 允许将映射指向数组，如 `mapping(address => WorkoutActivity[])`。这样每个地址都有一个动态数组，非常适合存储用户的历史记录、交易列表等一对多的数据关系。",multiple_mappings:"📖 在实际应用中，经常使用多个 mapping 来存储不同维度的数据。比如一个 mapping 存用户资料，另一个存用户余额。通过同一个 key（如用户地址）可以关联访问多个数据结构。",storage_keyword:"📖 `storage` 和 `memory` 是 Solidity 中两个重要的数据位置关键字。`storage` 变量永久存储在区块链状态中，而 `memory` 变量只在函数执行期间临时存在。使用 `storage` 引用可以直接修改状态变量，节省 Gas。",event_logging:"📖 事件（Event）是 Solidity 的日志机制。通过 `emit` 触发事件，数据会被记录在区块链的交易日志中。前端可以监听事件来实现实时通知、记录历史等功能，事件是 DApp 前后端通信的重要桥梁。",milestone_detection:"📖 里程碑检测是游戏化应用的核心机制。通过条件判断（如 `if (count == 10)`）检测用户是否达成特定目标，并触发相应奖励或通知。这能激励用户持续使用产品。",timestamp_usage:"📖 `block.timestamp` 是当前区块的时间戳（Unix 时间，秒）。它常用于记录事件发生时间、设置时间限制、计算时间差等。注意它由矿工设置，存在约15秒的误差，不应用于精确计时。",onlyRegistered_modifier:"📖 修饰符（Modifier）是 Solidity 的复用机制，用于在函数执行前添加前置条件检查。`onlyRegistered` 确保只有满足条件的用户（已注册）才能调用函数。这简化了代码，避免了在每个函数中重复写检查逻辑。"})[t]||"📖 点击其他概念标签查看更多详细解释。",qg=t=>({inheritance:"📖 合约继承是 Solidity 的核心特性之一。通过 `contract VaultMaster is Ownable`，子合约可以继承父合约的所有状态变量和函数，实现代码复用和模块化设计。",import_statement:"📖 `import` 语句用于导入其他合约文件，让你可以在当前合约中使用外部定义的合约。这是实现合约组合和代码复用的基础。",constructor:"📖 构造函数 `constructor()` 在合约部署时自动执行一次，用于初始化合约的状态变量。在 Ownable 中，它将合约部署者设置为初始所有者。",private_visibility:"📖 `private` 可见性修饰符表示变量只能在当前合约内部访问，即使是子合约也无法直接访问。这提供了最强的封装性，保护敏感数据。",event_logging:"📖 事件（Event）用于记录重要的合约操作到区块链日志中。前端可以监听事件来实现实时通知。`DepositSuccessful` 和 `WithdrawSuccessful` 记录了资金流动。",indexed_parameter:"📖 `indexed` 关键字标记事件参数，允许前端按该参数过滤和搜索事件日志。这在处理大量事件时非常有用，可以快速找到特定地址相关的事件。",transfer_ownership:"📖 `transferOwnership()` 函数实现了合约所有权的转移。只有当前所有者可以调用此函数，并且通常会检查新地址是否有效（非零地址）。",onlyOwner_modifier:"📖 `onlyOwner` 修饰符是权限控制的核心机制。它检查 `msg.sender` 是否等于 `owner`，如果不是则回滚交易。这是保护敏感操作（如提款）的标准做法。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Ld={erc20_standard:{name:"ERC20 标准",icon:"🪙",unlockAt:1,message:"你了解了 ERC20 代币标准！它是以太坊上最通用的代币规范，定义了代币的基本功能接口。",code:`// ERC20 标准接口
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
}`}},zg=t=>({erc20_standard:"🪙 太棒了！你了解了 ERC20 代币标准！这是以太坊上最通用的代币规范。👉 查询 Alice 余额来学习 mapping 存储机制！",mapping_nested:"🗂️ 优秀！你了解了嵌套映射！这是 ERC20 授权机制的核心数据结构。👉 转账给 Bob 来学习事件和转账函数！",event:"📋 很好！你触发了事件日志！👉 继续探索更多功能！",transfer:"💸 太棒了！你使用了 transfer 函数！👉 授权给 Carol 来学习授权机制！",approve:"✅ 很好！你使用了 approve 函数！👉 查询 allowance 来学习授权额度查询！",allowance:"🔍 优秀！你了解了授权额度查询！👉 切换到 Carol 执行代转账来学习 transferFrom！",transferFrom:"🔄 太棒了！你使用了 transferFrom 函数！🎉 你已掌握 ERC20 全部核心功能！"})[t]||"📖 点击其他概念标签查看更多详细解释。",Gg=t=>({constructor_mint:"📖 构造函数铸造是 ERC20 代币的常见模式。合约部署时，构造函数自动执行，创建所有代币并分配给部署者。Transfer(address(0), ...) 事件表示这是铸造操作。",zero_address_mint:"📖 零地址 address(0) 在 ERC20 中有特殊含义。Transfer 事件中 from=address(0) 表示铸造（创建新代币），to=address(0) 表示销毁（移除代币）。这是行业标准约定。",internal_function:"📖 internal 是 Solidity 的可见性修饰符之一。与 public/external 不同，internal 函数只能在当前合约内部调用，不能从外部访问。这是代码封装的重要手段，_transfer 就是典型的内部辅助函数。",virtual_function:"📖 virtual 关键字标记函数可以被继承合约重写（override）。这是实现可扩展 ERC20（如带手续费的代币、可暂停代币）的基础。子合约使用 override 关键字重写，并用 super 调用父合约函数。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Kg=t=>({erc20_standard:"📖 ERC20 是以太坊上最常用的代币标准，定义了代币的基本功能接口，包括转账、授权、查询余额等。所有符合 ERC20 标准的代币都可以在支持该标准的钱包和交易所中使用。",mapping_nested:"📖 嵌套映射 mapping(address => mapping(address => uint256)) 是 ERC20 中存储授权额度的核心数据结构。外层映射的 key 是代币持有者，内层映射的 key 是被授权者，value 是授权额度。",event:"📖 事件（Event）是 Solidity 的日志机制。ERC20 定义了 Transfer 和 Approval 两个标准事件，分别记录代币转移和授权操作。前端可以监听这些事件来实时更新界面。",transfer:"📖 transfer 函数是 ERC20 最核心的功能，允许代币持有者将自己的代币转给他人。函数会检查余额是否充足，然后更新双方余额并触发 Transfer 事件。",approve:"📖 approve 函数实现了授权机制，允许代币持有者授权他人使用自己的代币。这在 DeFi 应用中非常重要，比如授权 DEX 使用你的代币进行交易。",allowance:"📖 allowance 函数用于查询授权额度，返回被授权者还可以使用持有者的代币数量。在执行 transferFrom 之前，通常需要先检查 allowance 是否充足。",transferFrom:"📖 transferFrom 函数实现了代转账功能，允许被授权者代替持有者转账。这是 ERC20 的高级功能，常用于需要第三方代为执行转账的场景，如自动扣款、代理交易等。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Rd={interface_definition:{name:"接口定义",icon:"🔌",unlockAt:1,message:"你了解了接口！接口定义了合约必须实现的功能规范，是实现多态和解耦的基础。",code:`// IDepositBox.sol - 定义存款盒的标准接口
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
}`}},Md={compact_datatype:{name:"紧凑数据类型",icon:"📦",unlockAt:1,message:"你了解了紧凑数据类型！uint8、uint32 等小整数类型相比 uint256 可以节省大量存储空间和 Gas。",code:`// 使用紧凑数据类型优化存储
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

// indexed 参数可被链下高效检索！`}},jg=t=>({compact_datatype:"📦 太棒了！你了解了紧凑数据类型优化！uint8、uint32 相比 uint256 节省大量存储！👆 点击上方「存储可视化」区域学习更多！",uint8_uint32:"🔢 优秀！你了解了 uint8 和 uint32！它们分别只需 1 字节和 4 字节，远小于 uint256 的 32 字节！👝 创建提案查看 bytes32！",bytes32_string:"📝 很好！你了解了 bytes32 vs string！bytes32 固定 32 字节，比动态 string 更省 Gas！👝 继续创建提案或尝试投票学习位运算！",storage_optimization:"💾 太棒了！你体验了存储优化！通过紧凑数据类型和合理结构，大幅降低存储成本！⚡ 现在尝试投票来学习位运算！",bit_operation:"⚡ 太棒了！你了解了位运算的强大！1 个 uint256 存储 256 个投票状态，节省约 40% Gas！🗺️ 映射高效存储选民数据！⏰ 使用时间戳验证投票窗口！👉 尝试重复投票体验掩码检查！",mapping_storage:"🗺️ 优秀！你了解了映射的高效存储！mapping 通过哈希表实现 O(1) 查找，是 Solidity 最常用的数据结构！👉 继续探索其他功能！",mask_check:"🎭 很好！你体验了掩码检查！通过与运算快速检查位状态，防止重复投票！👉 等待提案结束执行提案学习事件日志！",timestamp_block:"⏰ 不错！你了解了 block.timestamp 的使用！它提供当前区块时间戳，用于实现时间锁和投票截止！👉 尝试重复投票或执行提案！",event_logging:"📋 恭喜！你了解了事件日志！事件记录在链上日志中，可供链下应用索引和监听！🎉 你已掌握 Day 15 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",Jg=t=>({compact_datatype:"📖 紧凑数据类型是 Solidity Gas 优化的基础。uint8 只占 1 字节（存储范围 0-255），uint32 只占 4 字节（0-42亿），而 uint256 占 32 字节。根据数据范围选择最小够用的类型，可以显著降低存储成本。",uint8_uint32:"📖 uint8、uint16、uint32 等小整数类型相比 uint256 可以节省大量存储空间。当变量值范围有限时，应该优先使用这些紧凑类型。例如：提案数量（uint8）、投票数（uint32）都不需要 uint256 的巨大范围。",bytes32_string:"📖 bytes32 是固定长度的字节数组，始终占用 32 字节。string 是动态长度，存储成本更高且引入额外的 Gas 消耗。对于固定长度的短文本（如提案名称、哈希值），bytes32 是更优的选择。",storage_optimization:"📖 存储优化是智能合约 Gas 优化的核心。技巧包括：1. 使用最小够用的整数类型（uint8 而非 uint256）；2. 将多个小变量打包到同一存储槽位；3. 使用位运算存储布尔数组。这些优化可节省 30-50% 的存储成本。",bit_operation:"📖 位运算利用整数类型的二进制位存储多个布尔值。1 个 uint256 有 256 个位，可以存储 256 个布尔状态（如是否对某提案投票）。相比使用 mapping(uint256 => bool)，位运算节省约 40% 的 Gas。关键操作：左移(1<<n)生成掩码、与(&)检查、或(|)设置。",mapping_storage:"📖 mapping 是 Solidity 的哈希表实现，提供 O(1) 时间复杂度的查找。mapping(address => uint256) 存储地址到数据的映射，mapping(uint256 => uint32) 存储索引到数据的映射。mapping 是状态变量最常用的数据结构，高效且灵活。",mask_check:"📖 掩码（Mask）是位运算的核心概念。掩码是一个二进制数，只有特定位为 1。通过 & 运算检查位：(data & mask) != 0 表示该位已设置。通过 | 运算设置位：data | mask 将对应位设为 1。这种方法快速且节省 Gas。",timestamp_block:"📖 block.timestamp 是当前区块的时间戳（秒级）。它由矿工/验证者提供，可能有少许偏差（几秒到几分钟），但适合大多数场景。常用于实现时间锁、投票截止、合约到期等需要时间判断的功能。",event_logging:"📖 事件（Event）是 Solidity 的日志机制，记录在链上日志中（不占用状态存储）。事件可以有 indexed 参数（最多 3 个），可被链下应用高效检索。事件是实现前端通知、链下索引、历史记录查询的基础，是 DApp 交互的关键。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Xg=t=>({interface_definition:"🔌 欢迎来到 Day 14！你了解了接口定义 - 它规定了所有存款盒必须实现的功能。👉 创建任意存款盒来解锁抽象合约！",abstract_contract:"🎭 太棒了！你了解了抽象合约 - 它实现了通用功能但不能直接部署。👉 创建 Basic 存款盒来学习合约继承！",inheritance:"🧬 优秀！你体验了合约继承！BasicDepositBox 继承了 BaseDepositBox 的所有功能。👉 创建 Premium 或 TimeLocked 来学习 override！",override_keyword:"📝 很好！你使用了 override 关键字重写父合约函数。👉 创建 TimeLocked 存款盒来学习 virtual 和修饰器组合！",virtual_function:"🔮 太棒了！你了解了 virtual 关键字 - 它允许子合约重写父函数。👉 在锁定期间尝试取秘密来体验修饰器组合！",super_keyword:"⬆️ 优秀！你使用了 super 调用父合约函数。👉 创建第2个存款盒来体验工厂模式！",modifier_combination:"🔗 太棒了！你体验了修饰器组合 - 需要同时满足 onlyOwner 和 timeUnlocked！👉 创建 Premium 存款盒来学习元数据存储！",factory_pattern:"🏭 优秀！你体验了工厂模式！VaultManager 负责创建和管理所有存款盒。👉 转移所有权并更新记录来完成体验！",metadata_storage:"🏷️ 很好！你使用了元数据功能！Premium 版本可以存储额外信息。👉 查看完整代码来复习所有知识点！",time_lock:"⏰ 太棒了！你创建了时间锁定存款盒！解锁前无法取出秘密。🎉 你已掌握抽象合约、接口与工厂模式！",store_secret:"🔐 太棒了！你成功存入了秘密！Secret 已被安全存储在合约中。👉 尝试取出秘密来体验访问控制！",get_secret:"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。👉 尝试设置元数据或创建更多存款盒！",transfer_ownership:"🔑 很好！你转移了存款盒的所有权！新的所有者现在可以管理这个存款盒。👉 切换到新所有者完成转移流程！"})[t]||"📖 点击其他概念标签查看更多详细解释。",Yg=t=>({interface_definition:"📖 接口（Interface）是 Solidity 中定义合约规范的方式。它只声明函数签名，不包含实现。任何实现该接口的合约都必须提供所有函数的具体实现。接口实现了多态和解耦，让不同的合约可以以统一的方式交互。",abstract_contract:"📖 抽象合约（Abstract Contract）是不能被直接部署的合约，它通常包含一个或多个纯虚函数（没有实现的函数）。抽象合约用于定义子合约必须实现的接口，同时提供一些通用的实现代码，是代码复用的重要机制。",inheritance:"📖 合约继承是 Solidity 的核心特性之一。通过 `contract Child is Parent`，子合约可以继承父合约的所有状态变量和函数。继承实现了代码复用，让开发者可以基于现有合约构建更复杂的功能。",override_keyword:"📖 override 关键字用于显式声明子合约重写了父合约的虚函数。从 Solidity 0.6.0 开始，重写函数必须使用 override 关键字，这提高了代码的可读性和安全性，防止意外重写。",virtual_function:"📖 virtual 关键字标记函数可以被继承合约重写。父合约的函数默认不能被重写，必须显式标记为 virtual。这是 Solidity 的设计选择，防止意外的函数重写导致安全问题。",super_keyword:"📖 super 关键字用于调用父合约的函数。在重写函数时，super 让你可以复用父类的逻辑，然后添加或修改特定行为。这在需要扩展而非完全替换父类功能时非常有用。",modifier_combination:"📖 多个修饰器可以组合使用，函数必须同时满足所有修饰器的条件才能执行。修饰器按声明顺序执行，每个修饰器的 `_` 代表被修饰函数的代码。这是实现复杂权限控制的有效方式。",factory_pattern:"📖 工厂模式是一种创建型设计模式，使用专门的工厂合约来创建和管理其他合约。VaultManager 就是工厂合约，它负责创建存款盒并追踪所有权。工厂模式实现了创建逻辑与使用逻辑的分离。",metadata_storage:"📖 元数据存储展示了继承扩展的实际应用。PremiumDepositBox 在继承 BaseDepositBox 的基础上，添加了 metadata 状态变量和相关函数，实现了功能的扩展，而不影响基础功能。",time_lock:"📖 时间锁定是一种常见的 DeFi 安全机制。TimeLockedDepositBox 使用 block.timestamp 和修饰器实现时间锁，只有在指定时间后才能执行特定操作。这保护了用户资产，防止冲动操作。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Nd={struct_definition:{name:"结构体定义",icon:"🏗️",unlockAt:1,message:"你了解了结构体定义！struct 允许你将多个相关数据组合成一个自定义类型。",code:`// 定义玩家资料结构体
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

// 合约像乐高积木一样组合使用`}},Ud={proxy_pattern:{name:"代理模式",icon:"📦",unlockAt:1,message:"你了解了代理模式！这是可升级合约的核心架构，将数据存储与逻辑执行分离。",code:`// 代理合约存储数据，逻辑合约执行业务逻辑
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

// 升级后，V1 和 V2 的数据格式兼容`}},Zg=t=>({struct_definition:"🏗️ 你了解了结构体定义！PlayerProfile 将 name 和 avatar 组合在一起。👉 设置玩家资料来解锁映射存储！",mapping_storage:"🗺️ 你的资料已保存到 mapping！通过键值对高效存储。👉 注册 weapon 插件来学习插件系统！",plugin_registration:"🔌 插件注册成功！地址已存入 plugins[key]。👉 点击「调用」执行插件函数！",low_level_call:"⚡ 低级别调用成功！使用了 EVM 的 call 指令。👉 查看 ABI 编码可视化！",abi_encoding:"🔢 ABI 编码完成！函数选择器是 keccak256 哈希的前4字节。👉 切换 staticcall 模式查询数据！",staticcall:"👁️ 静态调用成功！不消耗 Gas 的只读操作。👉 尝试切换到 achievement 插件！",dynamic_delegation:"🔄 动态委托系统运行中！一个核心管理多个插件。👉 在不同插件间切换体验互操作！",contract_interop:"🌐 合约互操作掌握！多个合约无缝协作。🎉 你已掌握 Day 16 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",Qg=t=>({struct_definition:"📖 结构体(struct)允许你将多个相关的变量组合成一个自定义类型。PlayerProfile 包含 name 和 avatar 两个字段，可以像单个变量一样传递和存储。结构体是组织复杂数据的基础。",mapping_storage:"📖 映射(mapping)是哈希表结构，提供 O(1) 的读写效率。profiles 用 address 作为键存储玩家资料，plugins 用 string 作为键存储插件地址。mapping 是 Solidity 最常用的状态变量类型。",plugin_registration:"📖 插件注册将字符串标识符映射到合约地址，实现动态插件管理。这种设计模式被称为注册表模式(Registry Pattern)，允许运行时添加新功能而无需修改核心合约代码。",low_level_call:"📖 call 是 EVM 的低级别调用指令，允许你动态调用任何函数。它返回 (bool, bytes) 元组表示成功状态和返回值。call 非常灵活但不如普通调用安全，需要仔细检查返回值。",abi_encoding:"📖 ABI(Application Binary Interface)编码将函数签名和参数转换为字节码。函数选择器是函数签名的 keccak256 哈希的前4字节。abi.encodeWithSignature 自动处理编码过程。",staticcall:"📖 staticcall 与 call 类似，但被调用的合约不能修改状态(发送ETH、写存储等)。它适合查询操作，更安全且通常不消耗 Gas。staticcall 是 view 函数的底层实现。",dynamic_delegation:"📖 动态委托允许核心合约将操作转发给不同的插件合约，实现功能的模块化扩展。这种架构让系统可以灵活添加新功能，无需修改核心代码，是插件系统的基础。",contract_interop:"📖 合约互操作是 DeFi 和 DApp 的基础。通过标准接口和动态调用，不同合约可以像乐高积木一样组合使用。PluginStore 展示了如何通过统一接口协调多个独立合约。"})[t]||"📖 点击其他概念标签查看更多详细解释。",em=t=>({proxy_pattern:"📦 你了解了代理模式！这是可升级合约的核心架构。👉 点击 delegatecall 说明来学习委托调用！",delegatecall:"🔄 你了解了 delegatecall！它在代理合约的存储上下文中执行逻辑合约的代码。👉 点击存储布局说明了解变量顺序的重要性！",storage_layout:"🔀 你了解了存储布局！代理合约和逻辑合约必须使用相同的存储变量顺序。👉 切换到 Owner 身份，创建第一个订阅计划！",upgrade_mechanism:"🚀 你体验了合约升级！通过更新 logicContract 地址，可以替换业务逻辑而不丢失数据。👉 切换到 User 身份，执行订阅操作！",logic_contract:"⚙️ 你了解了逻辑合约！它只包含业务逻辑代码，不存储数据。👉 订阅后查看 fallback 如何工作！",fallback_function:"🔙 你了解了 fallback 函数！代理合约使用它捕获所有未匹配的函数调用。👉 升级合约后查看数据是否仍然存在！",data_persistence:"💾 你验证了数据持久化！升级合约后，之前的数据仍然保持不变。👉 使用 V2 新功能（暂停/恢复）来对比版本差异！",version_control:"📊 你体验了版本控制！V2 新增了暂停/恢复功能。🎉 你已掌握 Day 17 所有核心概念！"})[t]||"📖 点击其他概念标签查看更多详细解释。",tm=t=>({proxy_pattern:"📖 代理模式(Proxy Pattern)是可升级合约的核心架构。代理合约负责存储所有数据和 ETH，逻辑合约只包含业务代码。用户始终与代理合约交互，代理通过 delegatecall 将调用转发给当前逻辑合约。",delegatecall:"📖 delegatecall 是 EVM 的特殊调用方式，它在调用者（代理合约）的存储上下文中执行被调用合约（逻辑合约）的代码。这意味着逻辑合约可以读写代理合约的存储，但代码来自逻辑合约。msg.sender 和 msg.value 保持不变。",storage_layout:"📖 存储布局一致性是可升级合约的关键。代理合约和逻辑合约必须继承相同的存储布局基础合约（如 SubscriptionStorageLayout），确保变量顺序完全一致。如果顺序不同，升级后数据会错位，导致严重错误。",upgrade_mechanism:"📖 升级机制通过更新代理合约中的 logicContract 地址实现。upgradeTo() 函数只有 owner 可以调用，更新后所有新调用都会使用新逻辑。旧数据保持不变，因为数据存储在代理合约中，不在逻辑合约里。",logic_contract:"📖 逻辑合约(Logic Contract)只包含业务逻辑代码，不存储任何状态数据。它可以被替换升级而不影响数据。V1 和 V2 都是逻辑合约，它们继承相同的存储布局，但实现不同的功能。",fallback_function:"📖 fallback 函数是代理合约的核心。当用户调用代理合约中不存在的函数时，fallback 会被触发。它使用 delegatecall 将调用转发给逻辑合约，并返回执行结果。这是实现透明代理的关键。",data_persistence:"📖 数据持久化是可升级合约的重要特性。由于所有数据都存储在代理合约中，升级逻辑合约不会影响已有数据。用户升级前创建的订阅、计划等数据在升级后仍然可以正常访问和使用。",version_control:"📖 版本控制展示了如何在升级中添加新功能。V2 在 V1 的基础上新增了 pauseSubscription 和 resumeSubscription 功能，但保持数据格式兼容。这展示了可升级合约的灵活性和扩展性。"})[t]||"📖 点击其他概念标签查看更多详细解释。",Te=Oi("operationLog",()=>{const t=K([]),e=K({}),n=K({}),r=(d,_,m,S=null)=>{const C=new Date().toLocaleTimeString("zh-CN",{hour12:!1});let N=0,M=0;S&&Do[S]&&(N=Do[S],M=N*Po,e.value[d]||(e.value[d]=0),e.value[d]+=N),n.value[d]||(n.value[d]=0),n.value[d]++;const b={id:`${d}-${Date.now()}-${Math.random()}`,day:d,timestamp:C,operation:_,details:m,gasUsed:N,ethCost:M};return t.value.unshift(b),b},s=d=>{t.value=t.value.filter(_=>_.day!==d)},i=()=>{t.value=[],e.value={},n.value={}},o=d=>t.value.filter(_=>_.day===d).slice(0,10),a=d=>e.value[d]||0,c=d=>(e.value[d]||0)*Po,u=d=>n.value[d]||0,l=x(()=>t.value.slice(0,20));return{logs:t,dayGasUsage:e,dayOperationCounts:n,recentLogs:l,addLog:r,clearDayLogs:s,clearAllLogs:i,getDayLogs:o,getDayGasUsage:a,getDayEthCost:c,getDayOperationCount:u}});function Fd(){const t=st(),e=Ye(),n=Te(),r=t.contracts.day1,s=x(()=>r.count),i=x(()=>r.interactionCount),o=()=>{r.count++,r.interactionCount++,n.addLog(1,"点击计数器","Counter +1","increment"),e.incrementInteraction(1);const _=r.count;_===1?e.unlockConcept(1,"function"):_===2?e.unlockConcept(1,"increment"):_===3?e.unlockConcept(1,"uint256"):_===4&&e.unlockConcept(1,"contract")},a=()=>{r.count=0,n.addLog(1,"重置计数器","Counter reset to 0","reset")},c=x(()=>e.dayProgress[1]),u=x(()=>e.getProgressPercentage(1)),l=x(()=>e.dayProgress[1].unlockedConcepts),d=x(()=>({gasUsage:n.getDayGasUsage(1),ethCost:n.getDayEthCost(1),operationCount:n.getDayOperationCount(1)}));return{counter:s,interactionCount:i,progress:c,progressPercentage:u,unlockedConcepts:l,realtimeData:d,clickCounter:o,resetCounter:a}}function Vd(){const t=st(),e=Ye(),n=Te(),r=t.contracts.day2,s=e.dayProgress[2],i=x(()=>r.name),o=x(()=>r.bio),a=x(()=>r.hasStored),c=x(()=>r.hasRetrieved),u=x(()=>r.interactionCount),l=(N,M)=>{r.name=N,r.bio=M,r.hasStored=!0,r.interactionCount++,s.interactionCount++,n.addLog(2,"存储数据",`存储: ${N}`,"addData"),["string","private","memory"].forEach(k=>{e.unlockConcept(2,k)})},d=()=>(r.hasRetrieved=!0,r.interactionCount++,s.interactionCount++,n.addLog(2,"检索数据",`查询: ${i.value}`),["view","parameters","returns"].forEach(M=>{e.unlockConcept(2,M)}),{name:i.value,bio:o.value}),_=x(()=>s),m=x(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),S=x(()=>s.unlockedConcepts),C=x(()=>({gasUsage:n.getDayGasUsage(2),ethCost:n.getDayEthCost(2),operationCount:n.getDayOperationCount(2)}));return{name:i,bio:o,hasStored:a,hasRetrieved:c,interactionCount:u,progress:_,progressPercentage:m,unlockedConcepts:S,realtimeData:C,storeData:l,retrieveData:d}}function Wd(){const t=st(),e=Ye(),n=Te(),r=t.contracts.day3,s=x(()=>r.candidates),i=x(()=>r.voteCount),o=x(()=>r.interactionCount),a=m=>{if(!m||m.trim()==="")return;r.candidates.push(m),r.voteCount[m]=0,r.interactionCount++,e.incrementInteraction(3),n.addLog(3,"添加候选人",`候选人: ${m}`,"addCandidate");const S=r.candidates.length;S===1?e.unlockConcept(3,"array"):S===2?e.unlockConcept(3,"push"):S===3&&e.unlockConcept(3,"mapping")},c=m=>{r.voteCount[m]!==void 0&&(r.voteCount[m]++,r.interactionCount++,e.incrementInteraction(3),n.addLog(3,"投票",`投给 ${m}`,"vote"),e.unlockConcept(3,"compound_assignment"))},u=x(()=>e.dayProgress[3]),l=x(()=>e.getProgressPercentage(3)),d=x(()=>e.dayProgress[3].unlockedConcepts),_=x(()=>({gasUsage:n.getDayGasUsage(3),ethCost:n.getDayEthCost(3),operationCount:n.getDayOperationCount(3)}));return{candidates:s,voteCount:i,interactionCount:o,progress:u,progressPercentage:l,unlockedConcepts:d,realtimeData:_,addCandidate:a,voteCandidate:c}}function Hd(){const t=st(),e=Ye(),n=Te(),r=t.contracts.day4,s=e.dayProgress[4],i=K(null),o=x(()=>r.owner),a=x(()=>r.item),c=x(()=>r.auctionEndTime),u=x(()=>r.highestBidder),l=x(()=>r.highestBid),d=x(()=>r.ended),_=x(()=>r.bids),m=x(()=>r.bidders),S=x(()=>r.interactionCount),C=(g,A)=>{r.owner=t.generateAddress(),r.item=g,r.auctionEndTime=Math.floor(Date.now()/1e3)+A,r.interactionCount++,s.interactionCount++,n.addLog(4,"初始化拍卖",`物品: ${g}, 时长: ${A}秒`),e.unlockConcept(4,"constructor"),e.unlockConcept(4,"block_timestamp")},N=(g,A)=>{if(r.ended||Math.floor(Date.now()/1e3)>=r.auctionEndTime||g<=0)return!1;const L=r.bids[A]||0;return g<=L?!1:(r.bids[A]=g,r.interactionCount++,s.interactionCount++,L===0&&r.bidders.push(A),g>r.highestBid&&(r.highestBid=g,r.highestBidder=A),n.addLog(4,"出价",`出价 ${g}`,"placeBid"),e.unlockConcept(4,"require"),r.bidders.length>=1&&e.unlockConcept(4,"msg_sender"),(r.bidders.length>=2||r.interactionCount>=2)&&e.unlockConcept(4,"external"),!0)},M=()=>Math.floor(Date.now()/1e3)<r.auctionEndTime||r.ended?!1:(r.ended=!0,r.interactionCount++,s.interactionCount++,n.addLog(4,"结束拍卖","拍卖已结束","endAuction"),e.unlockConcept(4,"bool_type"),!0),b=()=>r.ended?(r.interactionCount++,s.interactionCount++,n.addLog(4,"查看获胜者",`获胜者: ${r.highestBidder}`),e.unlockConcept(4,"address_type"),i.value={winner:r.highestBidder,bid:r.highestBid},i.value):null,k=g=>g?new Date(g*1e3).toLocaleString("zh-CN"):"未设置",p=()=>Math.floor(Date.now()/1e3)>=r.auctionEndTime,h=x(()=>s),w=x(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),D=x(()=>s.unlockedConcepts),v=x(()=>({gasUsage:n.getDayGasUsage(4),ethCost:n.getDayEthCost(4),operationCount:n.getDayOperationCount(4)}));return{owner:o,item:a,auctionEndTime:c,highestBidder:u,highestBid:l,ended:d,bids:_,bidders:m,interactionCount:S,winner:i,progress:h,progressPercentage:w,unlockedConcepts:D,realtimeData:v,initializeAuction:C,placeBid:N,endAuction:M,getWinner:b,formatTime:k,checkAuctionEnded:p}}function qd(){const t=st(),e=Ye(),n=Te(),r=K(""),s=K(""),i=K(""),o=K(""),a=K(""),c=x(()=>(t.initializeContract(5),t.getContract(5))),u=x(()=>{var v;return((v=c.value)==null?void 0:v.owner)||""}),l=x(()=>{var v;return((v=c.value)==null?void 0:v.treasureAmount)||0}),d=x(()=>{var v;return((v=c.value)==null?void 0:v.userAddress)||""}),_=x(()=>{var v;return((v=c.value)==null?void 0:v.userAllowance)||0}),m=x(()=>{var v;return(v=c.value)!=null&&v.hasWithdrawn?!!c.value.hasWithdrawn[d.value]:!1}),S=v=>!v||v<=0?!1:(c.value.treasureAmount+=v,c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"添加宝藏",`数量: ${v}`,"addTreasure"),e.unlockConcept(5,"modifier"),!0),C=(v,g)=>!v||!g||g<=0?!1:(g<=c.value.treasureAmount&&(c.value.withdrawalAllowance[v]=g,v===c.value.userAddress&&(c.value.userAllowance=g)),c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"批准提款",`批准 ${v}: ${g}`,"approveWithdrawal"),e.unlockConcept(5,"return_statement"),!0),N=(v,g)=>{if(!v||!g||g<=0)return!1;let A=!1;if(v===c.value.owner)g<=c.value.treasureAmount&&(c.value.treasureAmount-=g,A=!0);else{const T=c.value.withdrawalAllowance[v];T>0&&!c.value.hasWithdrawn[v]&&T<=c.value.treasureAmount&&T>=g&&(c.value.hasWithdrawn[v]=!0,c.value.treasureAmount-=T,c.value.withdrawalAllowance[v]=0,v===c.value.userAddress&&(c.value.userAllowance=0),A=!0)}return c.value.interactionCount++,e.incrementInteraction(5),A&&n.addLog(5,"提取宝藏",`提取: ${g}`,"withdrawTreasure"),!0},M=v=>(v||(v=c.value.userAddress),c.value.hasWithdrawn[v]=!1,c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"重置提款状态",`重置: ${v}`),!0),b=v=>!v||v==="0x0000000000000000000000000000000000000000"?!1:(c.value.owner=v,c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"转移所有权",`新所有者: ${v}`,"transferOwnership"),e.unlockConcept(5,"zero_address"),!0),k=()=>(c.value.interactionCount++,e.incrementInteraction(5),n.addLog(5,"查询宝藏",`宝藏数量: ${c.value.treasureAmount}`),e.unlockConcept(5,"return_statement"),c.value.treasureAmount),p=x(()=>e.dayProgress[5]),h=x(()=>{const v=e.dayProgress[5];return!v||v.totalConcepts===0?0:Math.floor(v.unlockedConcepts.length/v.totalConcepts*100)}),w=x(()=>e.dayProgress[5].unlockedConcepts),D=x(()=>({gasUsage:n.getDayGasUsage(5),ethCost:n.getDayEthCost(5),operationCount:n.getDayOperationCount(5)}));return{inputTreasureAmount:r,inputRecipient:s,inputAllowance:i,inputWithdrawAmount:o,inputNewOwner:a,owner:u,treasureAmount:l,userAddress:d,userAllowance:_,hasWithdrawn:m,progress:p,progressPercentage:h,unlockedConcepts:w,realtimeData:D,addTreasure:S,approveWithdrawal:C,withdrawTreasure:N,resetWithdrawalStatus:M,transferOwnership:b,getTreasureDetails:k}}function zd(){const t=st(),e=Ye(),n=Te(),r=t.contracts.day6,s=e.dayProgress[6],i=K(null),o=K([]),a=x(()=>r.bankManager),c=x(()=>r.members),u=x(()=>r.userAddress),l=x(()=>r.balance[r.userAddress]||0),d=x(()=>r.interactionCount),_=w=>(t.initializeContract(6),w==="0x0000000000000000000000000000000000000000"||w===r.bankManager||r.registeredMembers[w]?!1:(r.registeredMembers[w]=!0,r.members.push(w),r.balance[w]=0,r.interactionCount++,s.interactionCount++,n.addLog(6,"添加会员",`会员: ${w}`,"addMembers"),e.unlockConcept(6,"address_mapping_balance"),!0)),m=w=>{t.initializeContract(6);const D=r.userAddress;if(!r.registeredMembers[D])return!1;const v=w*1e18;return r.balance[D]+=v,r.interactionCount++,s.interactionCount++,n.addLog(6,"存入ETH",`存入 ${w} ETH`,"depositAmountEther"),e.unlockConcept(6,"payable"),e.unlockConcept(6,"msg_value"),!0},S=w=>{t.initializeContract(6);const D=r.userAddress;if(!r.registeredMembers[D])return!1;const v=w*1e18;return r.balance[D]<v?!1:(r.balance[D]-=v,r.interactionCount++,s.interactionCount++,n.addLog(6,"提取ETH",`提取 ${w} ETH`,"withdrawAmount"),e.unlockConcept(6,"wei_unit"),e.unlockConcept(6,"ether_deposit_withdraw"),!0)},C=w=>(t.initializeContract(6),r.interactionCount++,s.interactionCount++,i.value=r.balance[w]||0,n.addLog(6,"查询余额",`查询: ${w}`),i.value),N=()=>(t.initializeContract(6),r.interactionCount++,s.interactionCount++,o.value=[...r.members],o.value),M=w=>(w/1e18).toFixed(4)+" ETH",b=x(()=>s),k=x(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),p=x(()=>s.unlockedConcepts),h=x(()=>({gasUsage:n.getDayGasUsage(6),ethCost:n.getDayEthCost(6),operationCount:n.getDayOperationCount(6)}));return{bankManager:a,members:c,userAddress:u,userBalance:l,interactionCount:d,queryBalance:i,membersList:o,progress:b,progressPercentage:k,unlockedConcepts:p,realtimeData:h,addMembers:_,depositEther:m,withdrawEth:S,getBalance:C,getMembers:N,formatBalance:M}}function Gd(){const t=st(),e=Ye(),n=Te(),r=t.contracts.day7,s=e.dayProgress[7],i=K(null),o=x(()=>r.owner),a=x(()=>r.userAddress),c=x(()=>r.friendList),u=x(()=>r.balances[r.userAddress]||0),l=x(()=>r.debts),d=x(()=>r.interactionCount),_=g=>(t.initializeContract(7),r.registeredFriends[g]?!1:(r.registeredFriends[g]=!0,r.friendList.push(g),r.balances[g]=0,r.interactionCount++,s.interactionCount++,n.addLog(7,"添加好友",`好友: ${g}`,"addFriend"),e.unlockConcept(7,"nested_mapping"),!0)),m=g=>{t.initializeContract(7);const A=r.userAddress;if(!r.registeredFriends[A])return!1;const T=g*1e18;return r.balances[A]=(r.balances[A]||0)+T,r.interactionCount++,s.interactionCount++,n.addLog(7,"存款",`存入 ${g} ETH`,"depositIntoWallet"),e.unlockConcept(7,"address_payable"),!0},S=(g,A)=>{t.initializeContract(7);const T=r.userAddress,L=A*1e18;return r.debts[g]||(r.debts[g]={}),r.debts[g][T]=(r.debts[g][T]||0)+L,r.interactionCount++,s.interactionCount++,n.addLog(7,"记录债务",`债务人: ${g}, 金额: ${A} ETH`,"recordDebt"),e.unlockConcept(7,"debt_tracking"),!0},C=(g,A)=>{t.initializeContract(7);const T=r.userAddress,L=A*1e18;return(r.balances[T]||0)<L?"余额不足：你的钱包可用余额小于还款金额！":(r.balances[T]-=L,r.balances[g]=(r.balances[g]||0)+L,r.debts[T]&&r.debts[T][g]&&(r.debts[T][g]-=L,r.debts[T][g]<0&&(r.debts[T][g]=0)),r.interactionCount++,s.interactionCount++,n.addLog(7,"还款",`债权人: ${g}, 金额: ${A} ETH`,"payFromWallet"),e.unlockConcept(7,"internal_transfer"),!0)},N=(g,A)=>{t.initializeContract(7);const T=r.userAddress,L=A*1e18;return(r.balances[T]||0)<L?"余额不足：试图转账的金额超过了你拥有的钱包余额！":(r.balances[T]-=L,r.balances[g]=(r.balances[g]||0)+L,r.interactionCount++,s.interactionCount++,n.addLog(7,"转账(transfer)",`收款方: ${g}, 金额: ${A} ETH`,"transferEther"),e.unlockConcept(7,"transfer_method"),!0)},M=(g,A)=>{t.initializeContract(7);const T=r.userAddress,L=A*1e18;return(r.balances[T]||0)<L?"余额不足：低级调用失败，因为你的钱包没有足够的以太币！":(r.balances[T]-=L,r.balances[g]=(r.balances[g]||0)+L,r.interactionCount++,s.interactionCount++,n.addLog(7,"转账call",`收款方: ${g}, 金额: ${A} ETH`,"transferEtherViaCall"),e.unlockConcept(7,"call_method"),!0)},b=g=>{t.initializeContract(7);const A=r.userAddress,T=g*1e18;return(r.balances[A]||0)<T?"余额不足：你无法提取超过拥有额度的资金！":(r.balances[A]-=T,r.interactionCount++,s.interactionCount++,n.addLog(7,"提款",`提取 ${g} ETH`,"withdraw"),e.unlockConcept(7,"withdraw_pattern"),!0)},k=()=>{t.initializeContract(7);const g=r.userAddress;return i.value=r.balances[g]||0,r.interactionCount++,s.interactionCount++,n.addLog(7,"查询余额",`余额: ${(i.value/1e18).toFixed(4)} ETH`),e.unlockConcept(7,"withdraw_pattern"),i.value},p=g=>(g/1e18).toFixed(4)+" ETH",h=x(()=>s),w=x(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),D=x(()=>s.unlockedConcepts),v=x(()=>({gasUsage:n.getDayGasUsage(7),ethCost:n.getDayEthCost(7),operationCount:n.getDayOperationCount(7)}));return{owner:o,userAddress:a,friendsList:c,userBalance:u,debts:l,interactionCount:d,checkedBalance:i,progress:h,progressPercentage:w,unlockedConcepts:D,realtimeData:v,iouAddFriend:_,iouDeposit:m,iouRecordDebt:S,iouPayDebt:C,iouTransferMethod:N,iouCallMethod:M,iouWithdraw:b,iouCheckBalance:k,formatBalance:p}}function Kd(){const t=st(),e=Ye(),n=Te(),r=t.contracts.day8,s=e.dayProgress[8],i=x(()=>r.owner),o=x(()=>r.userAddress),a=x(()=>r.isUserAdmin),c=x(()=>r.totalTipsReceived),u=x(()=>r.supportedCurrencies),l=x(()=>r.conversionRates),d=x(()=>r.interactionCount),_=()=>{t.initializeContract(8),r.isUserAdmin=!r.isUserAdmin,r.interactionCount++,s.interactionCount++,n.addLog(8,"切换管理员模式",r.isUserAdmin?"开启管理员模式":"关闭管理员模式"),e.unlockConcept(8,"modifier_onlyOwner")},m=w=>{t.initializeContract(8);const D=w*1e18;r.totalTipsReceived+=D;const v=r.userAddress;r.tipPerPerson[v]=(r.tipPerPerson[v]||0)+D,r.interactionCount++,s.interactionCount++,n.addLog(8,"打赏ETH",`打赏 ${w} ETH`,"tipInEth"),e.unlockConcept(8,"payable_tip")},S=(w,D)=>{t.initializeContract(8);const v=r.conversionRates[w];if(!v)return!1;const g=D*v;r.totalTipsReceived+=g;const A=r.userAddress;return r.tipPerPerson[A]=(r.tipPerPerson[A]||0)+g,r.tipsPerCurrency[w]||(r.tipsPerCurrency[w]=0),r.tipsPerCurrency[w]+=D,r.interactionCount++,s.interactionCount++,n.addLog(8,"打赏货币",`打赏 ${D} ${w}`,"tipInCurrency"),e.unlockConcept(8,"msg_value_tip"),e.unlockConcept(8,"mapping_rates"),!0},C=()=>(t.initializeContract(8),r.isUserAdmin?r.totalTipsReceived===0?"revert: No tips to withdraw":(r.totalTipsReceived=0,r.interactionCount++,s.interactionCount++,n.addLog(8,"提取小费","提取所有小费","withdrawTips"),e.unlockConcept(8,"address_balance"),e.unlockConcept(8,"call_withdraw"),!0):"revert: Only owner can perform this action"),N=()=>{const w=r.userAddress,D=r.tipPerPerson[w]||0;return n.addLog(8,"查询打赏",`累计打赏: ${(D/1e18).toFixed(4)} ETH`),D},M=w=>(w/1e18).toFixed(4)+" ETH",b=x(()=>s),k=x(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),p=x(()=>s.unlockedConcepts),h=x(()=>({gasUsage:n.getDayGasUsage(8),ethCost:n.getDayEthCost(8),operationCount:n.getDayOperationCount(8)}));return{owner:i,userAddress:o,isAdmin:a,totalTips:c,supportedCurrencies:u,conversionRates:l,interactionCount:d,progress:b,progressPercentage:k,unlockedConcepts:p,realtimeData:h,tipJarToggleAdmin:_,tipJarTipInEth:m,tipJarTipInCurrency:S,tipJarWithdraw:C,getUserTips:N,formatBalance:M}}function jd(){const t=st(),e=Ye(),n=Te(),r=t.contracts.day9,s=e.dayProgress[9],i=x(()=>r.owner),o=x(()=>r.userAddress),a=x(()=>r.isUserAdmin),c=x(()=>r.scientificCalculatorAddress),u=x(()=>r.isAddressSet),l=x(()=>r.operationCount),d=x(()=>r.operationHistory),_=x(()=>r.interactionCount),m=x(()=>r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),S=()=>{t.initializeContract(9),r.isUserAdmin=!r.isUserAdmin,n.addLog(9,"切换身份",r.isUserAdmin?"切换为管理员":"切换为用户")},C=(T,L,Q)=>{if(t.initializeContract(9),isNaN(L)||isNaN(Q))throw new Error("请输入有效的数字");let ne;switch(T){case"add":ne=L+Q;break;case"subtract":ne=L-Q;break;case"multiply":ne=L*Q;break;case"divide":if(Q===0)throw new Error("不能除以零");ne=L/Q;break;default:throw new Error("未知运算符")}r.operationCount++,r.operationHistory.push({operator:T,a:L,b:Q,result:ne,timestamp:Date.now()}),r.interactionCount++,s.interactionCount++;const me={add:"加法",subtract:"减法",multiply:"乘法",divide:"除法"};return n.addLog(9,"基础运算",`${me[T]}: ${L} ${T==="add"?"+":T==="subtract"?"-":T==="multiply"?"×":"÷"} ${Q} = ${ne}`),r.operationCount>=3&&e.unlockConcept(9,"pure_function"),ne},N=T=>{if(t.initializeContract(9),!r.isUserAdmin)throw new Error("Only owner can do this action");if(!T||T.length<3)throw new Error("请输入合约地址");if(!T.startsWith("0x"))throw new Error("合约地址必须以 0x 开头");return r.scientificCalculatorAddress=T,r.isAddressSet=!0,r.interactionCount++,s.interactionCount++,n.addLog(9,"设置合约地址",`科学计算器地址: ${T}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.setAddress=!0,e.unlockConcept(9,"modifier_onlyOwner"),!0},M=(T,L)=>{if(t.initializeContract(9),!r.isAddressSet)throw new Error("请先设置ScientificCalculator合约地址");if(isNaN(T)||isNaN(L))throw new Error("请输入有效的数字");let Q=1;for(let ne=0;ne<L;ne++)Q*=T;return r.interactionCount++,s.interactionCount++,n.addLog(9,"指数运算",`${T}^${L} = ${Q}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.powerCalc=!0,e.unlockConcept(9,"view_function"),e.unlockConcept(9,"cross_contract_call"),e.unlockConcept(9,"interface_call"),Q},b=T=>{if(t.initializeContract(9),!r.isAddressSet)throw new Error("请先设置ScientificCalculator合约地址");if(isNaN(T)||T<0)throw new Error("请输入有效的非负数字");let L=T/2;const Q=[];for(let ne=0;ne<10;ne++){const me=L;L=(L+T/L)/2,Q.push({round:ne+1,value:L,prevValue:me,formula:`(${me.toFixed(4)} + ${T}/${me.toFixed(4)}) / 2 = ${L.toFixed(4)}`})}return r.interactionCount++,s.interactionCount++,n.addLog(9,"平方根计算",`√${T} ≈ ${Math.floor(L)}`),r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.sqrtCalc=!0,e.unlockConcept(9,"low_level_call"),{result:Math.floor(L),steps:Q}},k=async(T,L=!1)=>{if(t.initializeContract(9),isNaN(T)||T<0)throw new Error("请输入有效的非负数字");const Q=[];let ne=T/2;for(let me=0;me<10;me++){const W=ne;ne=(ne+T/ne)/2,Q.push({round:me+1,value:ne,prevValue:W,formula:`(${W.toFixed(4)} + ${T}/${W.toFixed(4)}) / 2 = ${ne.toFixed(4)}`}),L&&await new Promise(P=>setTimeout(P,500))}return r.interactionCount++,s.interactionCount++,n.addLog(9,"牛顿迭代",`计算 √${T} 的迭代过程`),e.unlockConcept(9,"newton_iteration"),Q},p=T=>(t.initializeContract(9),n.addLog(9,"权限验证",T?"以管理员身份验证":"以用户身份验证"),T?(r.challengeTasks||(r.challengeTasks={setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1}),r.challengeTasks.permissionCheck=!0,{success:!0,message:"验证通过：Owner权限确认"}):{success:!1,message:"验证失败：Only owner can do this action"}),h=()=>{t.initializeContract(9);const T=r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1},L=Object.values(T).filter(Q=>Q).length;return L===4?(e.unlockConcept(9,"contract_composition"),{success:!0,message:"🎉 恭喜！你已完成所有挑战任务！"}):{success:!1,message:`还有 ${4-L} 个任务未完成`}},w=x(()=>s),D=x(()=>e.getProgressPercentage(9)),v=x(()=>e.getUnlockedConcepts(9)),g=x(()=>{const T=r.challengeTasks||{setAddress:!1,powerCalc:!1,sqrtCalc:!1,permissionCheck:!1};return Object.values(T).filter(L=>L).length}),A=x(()=>({gasUsage:n.getDayGasUsage(9),ethCost:n.getDayEthCost(9),operationCount:n.getDayOperationCount(9)}));return{owner:i,userAddress:o,isOwner:a,scientificCalculatorAddress:c,isAddressSet:u,operationCount:l,operationHistory:d,interactionCount:_,challengeTasks:m,progress:w,progressPercentage:D,unlockedConcepts:v,completedChallengeCount:g,realtimeData:A,toggleIdentity:S,calculate:C,setScientificCalculator:N,calculatePower:M,calculateSquareRoot:b,runNewtonIteration:k,checkPermission:p,completeChallenge:h}}function Jd(){const t=st(),e=Ye(),n=Te(),r=t.contracts.day10,s=e.dayProgress[10],i=x(()=>r.owner),o=x(()=>r.userAddress),a=x(()=>r.userProfile),c=x(()=>r.workoutHistory),u=x(()=>r.totalWorkouts),l=x(()=>r.totalDistance),d=x(()=>r.milestones),_=x(()=>r.userProfile.isRegistered),m=()=>{t.initializeContract(10)},S=W=>({struct_definition:"📦 太棒了！你学会了使用结构体打包数据！👉 记录一次运动来看看时间戳如何工作！",event_logging:"📋 不错！你触发了事件日志！👉 记录运动来查看运动历史如何存储！",onlyRegistered_modifier:"🛡️ 太棒了！你了解了修饰符如何保护函数！👉 记录运动来解锁更多概念！",timestamp_usage:"⏰ 很好！你学会了记录时间戳！👉 查看运动历史来解锁 array_in_mapping！",array_in_mapping:"🗂️ 很好！你看到了映射到数组的用法！👉 查看统计数据来解锁 multiple_mappings！",multiple_mappings:"🗺️ 优秀！你了解了多个映射如何协同工作！👉 更新体重来解锁 storage_keyword！",storage_keyword:"💾 太棒了！你了解了 storage 的威力！👉 继续记录运动，达成里程碑来解锁 milestone_detection！",milestone_detection:"🏆 恭喜！你达成了里程碑！👉 查看完整代码来复习所有知识！"})[W]||"",C=(W,P)=>{if(m(),r.userProfile.isRegistered)return{success:!1,error:"User already registered"};r.userProfile={name:W,weight:P,isRegistered:!0},r.interactionCount++,s.interactionCount++,n.addLog(10,"注册用户",`用户: ${W}, 体重: ${P}kg`);const H=[];return e.unlockConcept(10,"struct_definition"),H.push(S("struct_definition")),e.unlockConcept(10,"event_logging"),H.push(S("event_logging")),e.unlockConcept(10,"onlyRegistered_modifier"),H.push(S("onlyRegistered_modifier")),{success:!0,unlockedHints:H}},N=(W,P,H)=>{if(m(),!r.userProfile.isRegistered)return{success:!1,error:"User not registered"};const Se={activityType:W,duration:P,distance:H,timestamp:Date.now()};r.workoutHistory.unshift(Se);const ke=r.totalDistance;r.totalWorkouts++,r.totalDistance+=H,r.interactionCount++,s.interactionCount++,n.addLog(10,"记录运动",`${W} ${H}米 ${w(P)}`);const Ee=!e.isConceptUnlocked(10,"timestamp_usage"),Fe=!e.isConceptUnlocked(10,"array_in_mapping");e.unlockConcept(10,"timestamp_usage"),e.unlockConcept(10,"array_in_mapping");const Or=b(ke),kn=[];return Ee&&kn.push(S("timestamp_usage")),Fe&&kn.push(S("array_in_mapping")),Or&&kn.push(S("milestone_detection")),{success:!0,unlockedHints:kn}},M=W=>{if(m(),!r.userProfile.isRegistered)return{success:!1,error:"User not registered"};const P=r.userProfile.weight;let H=!1;W<P&&P>0&&(P-W)*100/P>=5&&(k("weightGoal"),H=!0),r.userProfile.weight=W,r.interactionCount++,s.interactionCount++,n.addLog(10,"更新体重",`${P}kg → ${W}kg`);const Se=!e.isConceptUnlocked(10,"storage_keyword"),ke=!e.isConceptUnlocked(10,"multiple_mappings");e.unlockConcept(10,"storage_keyword"),e.unlockConcept(10,"multiple_mappings");const Ee=[];return Se&&Ee.push(S("storage_keyword")),ke&&Ee.push(S("multiple_mappings")),H&&Ee.push(S("milestone_detection")),{success:!0,unlockedHints:Ee}},b=(W,P)=>{const H=r.totalWorkouts,Se=r.totalDistance;let ke=!1;return H===10?(k("workouts10"),ke=!0):H===50&&(k("workouts50"),ke=!0),Se>=1e5&&W<1e5&&(k("distance100K"),ke=!0),ke},k=W=>{const P=r.milestones[W];P&&!P.achieved&&(P.achieved=!0,P.timestamp=Date.now(),e.unlockConcept(10,"milestone_detection"))},p=(W,P)=>P==="minutes"?W*60:P==="hours"?W*3600:W,h=(W,P)=>P==="kilometers"?W*1e3:W,w=W=>{if(W<60)return`${W}秒`;if(W<3600)return`${Math.floor(W/60)}分钟`;{const P=Math.floor(W/3600),H=Math.floor(W%3600/60);return H>0?`${P}小时${H}分钟`:`${P}小时`}},D=W=>W<1e3?`${W}米`:`${(W/1e3).toFixed(2)}公里`,v=W=>new Date(W).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),g=W=>({跑步:"🏃",Running:"🏃",骑行:"🚴",Cycling:"🚴",游泳:"🏊",Swimming:"🏊",步行:"🚶",Walking:"🚶",瑜伽:"🧘",Yoga:"🧘",篮球:"⛹️",Basketball:"⛹️"})[W]||"💪",A=()=>{const W=!e.isConceptUnlocked(10,"array_in_mapping");return e.unlockConcept(10,"array_in_mapping"),n.addLog(10,"查看运动历史",`共 ${r.workoutHistory.length} 条记录`),W?S("array_in_mapping"):null},T=()=>{const W=!e.isConceptUnlocked(10,"multiple_mappings");return e.unlockConcept(10,"multiple_mappings"),n.addLog(10,"查看统计",`总运动: ${r.totalWorkouts}次, 总距离: ${D(r.totalDistance)}`),W?S("multiple_mappings"):null},L=x(()=>s),Q=x(()=>!s||s.totalConcepts===0?0:Math.floor(s.unlockedConcepts.length/s.totalConcepts*100)),ne=x(()=>s.unlockedConcepts),me=x(()=>({gasUsage:n.getDayGasUsage(10),ethCost:n.getDayEthCost(10),operationCount:n.getDayOperationCount(10)}));return{owner:i,userAddress:o,userProfile:a,workoutHistory:c,totalWorkouts:u,totalDistance:l,milestones:d,isRegistered:_,progress:L,progressPercentage:Q,unlockedConcepts:ne,realtimeData:me,registerUser:C,logWorkout:N,updateWeight:M,convertToSeconds:p,convertToMeters:h,formatDuration:w,formatDistance:D,formatTimestamp:v,getActivityIcon:g,viewWorkoutHistory:A,viewStatistics:T,initializeContract:m}}function Xd(){const t=st(),e=Ye(),n=Te(),r=x(()=>(t.initializeContract(11),t.getContract(11))),s=x(()=>{var h;return((h=r.value)==null?void 0:h.owner)||""}),i=x(()=>{var h;return((h=r.value)==null?void 0:h.contractBalance)||0}),o=x(()=>{var h;return((h=r.value)==null?void 0:h.userAddress)||""}),a=x(()=>o.value===s.value),c=x(()=>{var h;return((h=r.value)==null?void 0:h.eventLog)||[]}),u=h=>({inheritance:"📦 太棒了！你看到 VaultMaster 继承了 Ownable 的功能！👉 存入 ETH 来学习 import 机制！",constructor:"🏗️ 太棒了！你了解了构造函数！👉 存入 ETH 来学习导入语句和私有变量！",import_statement:"📥 不错！你了解了导入语句！👉 继续存入 ETH 来学习事件日志！",event_logging:"📋 很好！你触发了事件日志！👉 尝试转移所有权来解锁更多概念！",private_visibility:"🔒 优秀！你学会了 private 变量的使用！合约余额等敏感数据都使用 private 保护！",transfer_ownership:"🔑 很好！你了解了所有权转移！👉 尝试以用户身份提取来学习修饰符！",indexed_parameter:"🏷️ 不错！你了解了索引参数！👉 切换到用户身份体验权限控制！",onlyOwner_modifier:"🛡️ 太棒了！你了解了 onlyOwner 修饰符！👉 查看完整代码来学习更多！"})[h]||"",l=h=>{var v;const w=e.dayProgress[11];return((v=w==null?void 0:w.unlockedConcepts)==null?void 0:v.includes(h))?null:(e.unlockConcept(11,h),u(h))},d=()=>"0x"+Array(40).fill(0).map(()=>Math.floor(Math.random()*16).toString(16)).join(""),_=()=>r.value?(r.value.userAddress=r.value.owner,e.incrementInteraction(11),n.addLog(11,"切换身份","切换为所有者身份"),{hint:"✅ 已切换到所有者身份！👉 现在可以转移所有权和提取资金了！"}):null,m=()=>{if(r.value){const h=d();return r.value.userAddress=h,e.incrementInteraction(11),n.addLog(11,"切换身份",`切换为用户身份: ${h.slice(0,10)}...`),{hint:"👤 已切换到用户身份！👉 现在尝试提取资金来体验权限控制！"}}return null},S=()=>{e.incrementInteraction(11),n.addLog(11,"查询所有者",`所有者: ${s.value.slice(0,10)}...`);const h=[],w=l("inheritance");w&&h.push(w);const D=l("constructor");return D&&h.push(D),{address:s.value,hint:h.length>0?h.join(`
`):null}},C=()=>(e.incrementInteraction(11),n.addLog(11,"查询余额",`合约余额: ${(i.value/1e18).toFixed(4)} ETH`),i.value),N=h=>{if(!h||h<=0)return{success:!1,error:"金额无效"};const w=Math.floor(h*1e18);r.value.contractBalance+=w,r.value.eventLog.push({name:"DepositSuccessful",icon:"💰",details:`存入 ${h} ETH (${w} wei)`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"存款",`存入 ${h} ETH`);const D=[],v=l("import_statement");v&&D.push(v);const g=l("event_logging");g&&D.push(g);const A=l("private_visibility");return A&&D.push(A),{success:!0,hints:D}},M=(h,w)=>{if(!h||!w||w<=0)return{success:!1,error:"参数无效"};if(!a.value)return l("onlyOwner_modifier"),e.incrementInteraction(11),n.addLog(11,"提取失败","权限不足：非所有者尝试提取"),{success:!1,error:"❌ 权限不足：只有所有者才能提取资金 🛡️ 解锁知识点：onlyOwner 修饰符！"};const D=Math.floor(w*1e18);return D>i.value?{success:!1,error:"余额不足"}:(r.value.contractBalance-=D,r.value.eventLog.push({name:"WithdrawSuccessful",icon:"💸",details:`提取 ${w} ETH 到 ${h.slice(0,6)}...${h.slice(-4)}`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"提取资金",`提取 ${w} ETH 到 ${h.slice(0,10)}...`),{success:!0})},b=h=>{var T;if(!h||h==="0x0000000000000000000000000000000000000000")return{success:!1,error:"无效地址"};if(!a.value)return{success:!1,error:"权限不足"};const w=r.value.owner;r.value.owner=h,r.value.userAddress===w&&(r.value.userAddress=h),r.value.eventLog.push({name:"OwnershipTransferred",icon:"🔑",details:`所有权从 ${w.slice(0,6)}... 转移到 ${h.slice(0,6)}...`,timestamp:Date.now()}),r.value.interactionCount++,e.incrementInteraction(11),n.addLog(11,"转移所有权",`${w.slice(0,10)}... → ${h.slice(0,10)}...`);const D=[],v=l("transfer_ownership");v&&D.push(v);const g=l("indexed_parameter");g&&D.push(g);const A=e.dayProgress[11];return(T=A==null?void 0:A.unlockedConcepts)!=null&&T.includes("onlyOwner_modifier")||D.push('🛡️ 想体验权限控制吗？👉 切换到"用户"身份，尝试提取资金！'),{success:!0,hints:D}},k=()=>(e.incrementInteraction(11),n.addLog(11,"查看代码","查看完整合约代码"),{hints:["📖 你已了解所有核心概念！查看完整代码来巩固知识吧！"]}),p=x(()=>({gasUsage:n.getDayGasUsage(11),ethCost:n.getDayEthCost(11),operationCount:n.getDayOperationCount(11)}));return{owner:s,contractBalance:i,userAddress:o,isOwner:a,eventLog:c,realtimeData:p,getOwner:S,getBalance:C,deposit:N,withdraw:M,transferOwnership:b,setOwnerMode:_,setUserMode:m,viewFullCode:k,unlockConceptWithHint:l,getUnlockHint:u}}function Yd(){const t=Te(),e=K({name:"Web3 Compass",symbol:"COM",decimals:18,totalSupply:1e6}),n={alice:"0xAlice7429aC95B2cF0e4b5F1F4E4e8e7D6c5B4A3210",bob:"0xBob8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",carol:"0xCarol5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},r=K({[n.alice]:1e6,[n.bob]:0,[n.carol]:0}),s=K({[n.alice]:{[n.carol]:0},[n.bob]:{},[n.carol]:{}}),i=K("alice"),o=K([{icon:"🟢",name:"Transfer",details:"从: 0x0000...0000 到: Alice 数量: 1,000,000 COM (铸币)",timestamp:Date.now()}]),a=x(()=>n[i.value]),c=b=>b===n.alice?"Alice":b===n.bob?"Bob":b===n.carol?"Carol":b.slice(0,6)+"..."+b.slice(-4),u=b=>b?b===n.alice?"Alice (0xAlice...3210)":b===n.bob?"Bob (0xBob...7E6F)":b===n.carol?"Carol (0xCarol...E2F)":b.slice(0,10)+"..."+b.slice(-8):"",l=b=>{i.value=b;const k={alice:"👑 已切换到 Alice（代币持有者）",bob:"👤 已切换到 Bob（普通用户）",carol:"🔑 已切换到 Carol（可被授权者）"};return t.addLog(12,"切换角色",k[b]),{success:!0,message:k[b],hints:[],nextStep:""}},d=b=>{const k=r.value[b]||0,p=c(b);return t.addLog(12,"查询余额",`${p}: ${k.toLocaleString()} COM`),{success:!0,balance:k,message:`📊 查询成功！${p} 余额: ${k.toLocaleString()} COM`,hints:[],nextStep:"💡 余额使用 mapping(address => uint256) 存储！👉 转账给 Bob 来学习事件机制！"}},_=(b,k)=>{const p=a.value,h=c(p),w=c(b);return r.value[p]<k?(t.addLog(12,"转账失败",`余额不足: ${h} → ${w}`),{success:!1,message:`❌ 转账失败！余额不足。当前余额: ${r.value[p].toLocaleString()} COM，尝试转账: ${k.toLocaleString()} COM`,hints:[],nextStep:""}):b==="0x0000000000000000000000000000000000000000"?(t.addLog(12,"转账失败","接收地址不能是零地址"),{success:!1,message:"❌ 转账失败！接收地址不能是零地址。",hints:[],nextStep:""}):p===b?(t.addLog(12,"转账失败","不能转账给自己"),{success:!1,message:"❌ 转账失败！不能转账给自己。",hints:[],nextStep:""}):(r.value[p]-=k,r.value[b]=(r.value[b]||0)+k,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${h} 到: ${w} 数量: ${k.toLocaleString()} COM`,timestamp:Date.now()}),t.addLog(12,"转账",`${h} → ${w}: ${k.toLocaleString()} COM`),{success:!0,message:`✅ 转账成功！${h} 向 ${w} 转账 ${k.toLocaleString()} COM 📋 恭喜解锁：事件日志！💸 恭喜解锁：转账函数！`,hints:["event","transfer"],nextStep:"👉 授权给 Carol 来学习授权机制！"})},m=(b,k)=>{const p=a.value,h=c(p),w=c(b);return i.value!=="alice"?(t.addLog(12,"授权失败","只有 Alice 才能授权"),{success:!1,message:"❌ 授权失败！只有代币持有者 Alice 才能授权。请切换到 Alice。",hints:[],nextStep:""}):p===b?(t.addLog(12,"授权失败","不能授权给自己"),{success:!1,message:"❌ 授权失败！不能授权给自己。",hints:[],nextStep:""}):(s.value[p]||(s.value[p]={}),s.value[p][b]=k,o.value.push({icon:"🟡",name:"Approval",details:`持有者: ${h} 被授权者: ${w} 额度: ${k.toLocaleString()} COM`,timestamp:Date.now()}),t.addLog(12,"授权",`${h} → ${w}: ${k.toLocaleString()} COM`),{success:!0,message:`✅ 授权成功！${h} 授权 ${w} 可以使用 ${k.toLocaleString()} COM ✅ 恭喜解锁：授权函数！`,hints:["approve"],nextStep:"👉 查询 allowance 来学习授权额度查询！"})},S=(b,k)=>{var D;const p=((D=s.value[b])==null?void 0:D[k])||0,h=c(b),w=c(k);return t.addLog(12,"查询授权额度",`${w} 可用 ${h}: ${p.toLocaleString()} COM`),{success:!0,allowance:p,message:`🔍 查询成功！${w} 可使用 ${h} 的额度: ${p.toLocaleString()} COM 🗂️ 恭喜解锁：嵌套映射！🔍 恭喜解锁：授权额度查询！`,hints:["mapping_nested","allowance"],nextStep:"👉 切换到 Carol 执行代转账来学习 transferFrom！"}},C=(b,k,p)=>{var A;const h=a.value,w=c(h),D=c(b),v=c(k);if(i.value!=="carol")return t.addLog(12,"代转账失败","只有 Carol 才能执行代转账"),{success:!1,message:"❌ 代转账失败！只有被授权者 Carol 才能执行代转账。请切换到 Carol。",hints:[],nextStep:""};if(b!==n.alice)return t.addLog(12,"代转账失败","Carol 只被 Alice 授权"),{success:!1,message:"❌ 代转账失败！Carol 只被 Alice 授权，只能从 Alice 账户代转账。",hints:[],nextStep:""};const g=((A=s.value[b])==null?void 0:A[h])||0;return g<p?(t.addLog(12,"代转账失败",`授权额度不足: ${g.toLocaleString()} COM`),{success:!1,message:`❌ 授权额度不足！Carol 只能使用 Alice 的 ${g.toLocaleString()} COM，尝试转账: ${p.toLocaleString()} COM`,hints:[],nextStep:""}):r.value[b]<p?(t.addLog(12,"代转账失败",`余额不足: ${D}`),{success:!1,message:`❌ 余额不足！${D} 当前余额: ${r.value[b].toLocaleString()} COM`,hints:[],nextStep:""}):(r.value[b]-=p,r.value[k]=(r.value[k]||0)+p,s.value[b][h]-=p,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${D} 到: ${v} 数量: ${p.toLocaleString()} COM (by ${w})`,timestamp:Date.now()}),t.addLog(12,"代转账",`${w} 代替 ${D} → ${v}: ${p.toLocaleString()} COM`),{success:!0,message:`✅ 代转账成功！${w} 代替 ${D} 向 ${v} 转账 ${p.toLocaleString()} COM 🔄 恭喜解锁：代转账函数！`,hints:["transferFrom"],nextStep:"🎉 你已掌握 ERC20 全部核心功能！"})},N=b=>new Date(b).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),M=x(()=>({gasUsage:t.getDayGasUsage(12),ethCost:t.getDayEthCost(12),operationCount:t.getDayOperationCount(12)}));return{tokenInfo:e,roles:n,balances:r,allowances:s,currentRole:i,currentAddress:a,eventLog:o,realtimeData:M,switchRole:l,getBalance:d,transfer:_,approve:m,getAllowance:S,transferFrom:C,getRoleName:c,formatAddress:u,formatTime:N}}function Zd(){const t=Te(),e=K({name:"Web3 Compass",symbol:"WBT",decimals:18,totalSupply:1e6}),n={deployer:"0xDeployer7429aC95B2cF0e4b5F1F4E4e8e7D6c5B4A3210",alice:"0xAlice8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",bob:"0xBob5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},r=K({[n.deployer]:1e6,[n.alice]:0,[n.bob]:0}),s=K({[n.deployer]:{[n.alice]:0,[n.bob]:0},[n.alice]:{},[n.bob]:{}}),i=K("deployer"),o=K([{icon:"🪙",name:"Mint",details:"Transfer(address(0), Deployer, 1,000,000 WBT) - 合约部署时铸造",timestamp:Date.now(),type:"mint"}]),a=x(()=>n[i.value]),c=b=>b===n.deployer?"Deployer":b===n.alice?"Alice":b===n.bob?"Bob":b.slice(0,6)+"..."+b.slice(-4),u=b=>b?b===n.deployer?"Deployer (0xDeployer...3210)":b===n.alice?"Alice (0xAlice...7E6F)":b===n.bob?"Bob (0xBob...E2F)":b.slice(0,10)+"..."+b.slice(-8):"",l=b=>{i.value=b;const k={deployer:"✅ 已切换到 Deployer（合约部署者/代币持有者）！👉 执行转账操作来解锁 internal 和 virtual 函数！",alice:"✅ 已切换到 Alice（普通用户）！👉 让 Deployer 授权给你，然后执行代转账！",bob:"✅ 已切换到 Bob（可被授权者）！👉 让 Deployer 授权给你，然后执行代转账！"};return t.addLog(13,"切换角色",k[b]),{success:!0,message:k[b],hints:[],nextStep:""}},d=b=>{const k=r.value[b]||0,p=c(b);return t.addLog(13,"查询余额",`${p}: ${k.toLocaleString()} WBT`),{success:!0,balance:k,message:`📊 查询成功！${p} 余额: ${k.toLocaleString()} WBT 👉 执行转账来解锁 internal 和 virtual 函数！`,hints:[],nextStep:"💡 余额使用 mapping(address => uint256) 存储！👉 执行转账来解锁 internal 和 virtual 函数！"}},_=(b,k)=>{const p=a.value,h=c(p),w=c(b);return r.value[p]<k?(t.addLog(13,"转账失败",`余额不足: ${h} → ${w}`),{success:!1,message:`❌ 转账失败！余额不足。当前余额: ${r.value[p].toLocaleString()} WBT，尝试转账: ${k.toLocaleString()} WBT`,hints:[],nextStep:""}):b==="0x0000000000000000000000000000000000000000"?(t.addLog(13,"转账失败","接收地址不能是零地址"),{success:!1,message:"❌ 转账失败！接收地址不能是零地址。",hints:[],nextStep:""}):p===b?(t.addLog(13,"转账失败","不能转账给自己"),{success:!1,message:"❌ 转账失败！不能转账给自己。",hints:[],nextStep:""}):(r.value[p]-=k,r.value[b]=(r.value[b]||0)+k,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${h} 到: ${w} 数量: ${k.toLocaleString()} WBT`,timestamp:Date.now(),type:"transfer"}),t.addLog(13,"转账",`${h} → ${w}: ${k.toLocaleString()} WBT`,"transfer13"),{success:!0,message:`✅ 转账成功！${h} 向 ${w} 转账 ${k.toLocaleString()} WBT 🎉 恭喜解锁：internal 和 virtual 函数！👉 点击查看代码了解所有知识点！`,hints:["internal_function"],nextStep:"🔒 太棒了！transfer() 内部调用了 _transfer() 这个 internal 函数！同时解锁了 virtual 关键字！👉 点击查看代码了解所有知识点！"})},m=(b,k)=>{const p=a.value,h=c(p),w=c(b);return i.value!=="deployer"?(t.addLog(13,"授权失败","只有 Deployer 才能授权"),{success:!1,message:"❌ 授权失败！只有代币持有者 Deployer 才能授权。请切换到 Deployer。",hints:[],nextStep:""}):p===b?(t.addLog(13,"授权失败","不能授权给自己"),{success:!1,message:"❌ 授权失败！不能授权给自己。",hints:[],nextStep:""}):(s.value[p]||(s.value[p]={}),s.value[p][b]=k,o.value.push({icon:"🟡",name:"Approval",details:`持有者: ${h} 被授权者: ${w} 额度: ${k.toLocaleString()} WBT`,timestamp:Date.now(),type:"approval"}),t.addLog(13,"授权",`${h} → ${w}: ${k.toLocaleString()} WBT`,"approve13"),{success:!0,message:`✅ 授权成功！${h} 授权 ${w} 可以使用 ${k.toLocaleString()} WBT`,hints:[],nextStep:"👉 切换到 Bob 执行代转账来学习更多！"})},S=(b,k)=>{var D;const p=((D=s.value[b])==null?void 0:D[k])||0,h=c(b),w=c(k);return t.addLog(13,"查询授权额度",`${w} 可用 ${h}: ${p.toLocaleString()} WBT`),{success:!0,allowance:p,message:`🔍 查询成功！${w} 可使用 ${h} 的额度: ${p.toLocaleString()} WBT 👉 切换到 Bob 执行代转账！`,hints:[],nextStep:"👉 切换到 Bob 执行代转账来学习 transferFrom！"}},C=(b,k,p)=>{var A;const h=a.value,w=c(h),D=c(b),v=c(k);if(i.value!=="bob")return t.addLog(13,"代转账失败","只有 Bob 才能执行代转账"),{success:!1,message:"❌ 代转账失败！只有被授权者 Bob 才能执行代转账。请切换到 Bob。",hints:[],nextStep:""};if(b!==n.deployer)return t.addLog(13,"代转账失败","Bob 只被 Deployer 授权"),{success:!1,message:"❌ 代转账失败！Bob 只被 Deployer 授权，只能从 Deployer 账户代转账。",hints:[],nextStep:""};const g=((A=s.value[b])==null?void 0:A[h])||0;return g<p?(t.addLog(13,"代转账失败",`授权额度不足: ${g.toLocaleString()} WBT`),{success:!1,message:`❌ 授权额度不足！Bob 只能使用 Deployer 的 ${g.toLocaleString()} WBT，尝试转账: ${p.toLocaleString()} WBT`,hints:[],nextStep:""}):r.value[b]<p?(t.addLog(13,"代转账失败",`余额不足: ${D}`),{success:!1,message:`❌ 余额不足！${D} 当前余额: ${r.value[b].toLocaleString()} WBT`,hints:[],nextStep:""}):(r.value[b]-=p,r.value[k]=(r.value[k]||0)+p,s.value[b][h]-=p,o.value.push({icon:"🟢",name:"Transfer",details:`从: ${D} 到: ${v} 数量: ${p.toLocaleString()} WBT (by ${w})`,timestamp:Date.now(),type:"transfer"}),t.addLog(13,"代转账",`${w} 代替 ${D} → ${v}: ${p.toLocaleString()} WBT`,"transferFrom13"),{success:!0,message:`✅ 代转账成功！${w} 代替 ${D} 向 ${v} 转账 ${p.toLocaleString()} WBT 👉 点击查看代码了解 virtual 关键字！`,hints:[],nextStep:"🎉 太棒了！你已掌握 MyToken 全部核心功能！👉 点击查看代码了解 virtual 关键字！"})},N=b=>new Date(b).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),M=x(()=>({gasUsage:t.getDayGasUsage(13),ethCost:t.getDayEthCost(13),operationCount:t.getDayOperationCount(13)}));return{tokenInfo:e,roles:n,balances:r,allowances:s,currentRole:i,currentAddress:a,eventLog:o,realtimeData:M,switchRole:l,getBalance:d,transfer:_,approve:m,getAllowance:S,transferFrom:C,getRoleName:c,formatAddress:u,formatTime:N}}function Qd(){const t=Te(),e={alice:"0xAlice8F3a2B1c0D9e8F7A6B5C4D3E2F1A0B9C8D7E6F",bob:"0xBob5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F"},n=K("alice"),r=K(0),s=K([]),i=K([]),o=x(()=>e[n.value]),a=x(()=>s.value.filter(g=>g.owner===o.value)),c=g=>g===e.alice?"Alice":g===e.bob?"Bob":g.slice(0,6)+"..."+g.slice(-4),u=g=>g?g===e.alice?"Alice (0xAlice...7E6F)":g===e.bob?"Bob (0xBob...E2F)":g.slice(0,10)+"..."+g.slice(-8):"",l=g=>new Date(g).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),d=g=>{switch(g){case"Basic":return"📦";case"Premium":return"🏷️";case"TimeLocked":return"⏰";default:return"📦"}},_=g=>{n.value=g;const A={alice:"✅ 已切换到 Alice！👉 创建存款盒开始学习！",bob:"✅ 已切换到 Bob！👉 让 Alice 转移一个存款盒给你！"};return t.addLog(14,"切换角色",`切换到 ${g}`),{success:!0,message:A[g],hints:[],nextStep:""}},m=()=>{r.value++;const g=r.value,A=o.value,T=c(A),L={id:g,type:"Basic",owner:A,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:null,metadata:null};return s.value.push(L),i.value.push({icon:"📦",name:"BoxCreated",details:`${T} 创建了 Basic 存款盒 #${g}`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建Basic存款盒",`Box #${g} by ${T}`,"createBasicBox"),{success:!0,box:L,message:`✅ 创建 Basic 存款盒 #${g} 成功！🧬 恭喜解锁：合约继承！🎭 恭喜解锁：抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 创建 Premium 或 TimeLocked 来学习 override！`,hints:r.value>=2?["inheritance","abstract_contract","factory_pattern"]:["inheritance","abstract_contract"],nextStep:r.value>=2?"🧬 BasicDepositBox 继承了 BaseDepositBox 的所有功能！🎭 抽象合约定义了通用接口！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 创建 Premium 存款盒来学习 override 关键字！":"📦 BasicDepositBox 继承了 BaseDepositBox 的所有功能！🎭 抽象合约定义了通用接口！👉 创建 Premium 存款盒来学习 override 关键字！"}},S=()=>{r.value++;const g=r.value,A=o.value,T=c(A),L={id:g,type:"Premium",owner:A,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:null,metadata:""};return s.value.push(L),i.value.push({icon:"🏷️",name:"BoxCreated",details:`${T} 创建了 Premium 存款盒 #${g}`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建Premium存款盒",`Box #${g} by ${T}`,"createPremiumBox"),{success:!0,box:L,message:`✅ 创建 Premium 存款盒 #${g} 成功！📝 恭喜解锁：override 关键字和 virtual 函数！🎭 恭喜解锁：抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 设置元数据来学习更多！`,hints:r.value>=2?["override_keyword","virtual_function","abstract_contract","factory_pattern"]:["override_keyword","virtual_function","abstract_contract"],nextStep:r.value>=2?"🏷️ PremiumDepositBox 使用 override 重写了 getBoxType()！🎭 抽象合约定义了通用接口！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 设置元数据来学习 metadata_storage！":"🏷️ PremiumDepositBox 使用 override 重写了 getBoxType()！🎭 抽象合约定义了通用接口！👉 设置元数据来学习 metadata_storage！"}},C=g=>{r.value++;const A=r.value,T=o.value,L=c(T),Q=Date.now()+g*1e3,ne={id:A,type:"TimeLocked",owner:T,createdBy:n.value,secret:"",createdAt:Date.now(),unlockTime:Q,metadata:null};return s.value.push(ne),i.value.push({icon:"⏰",name:"BoxCreated",details:`${L} 创建了 TimeLocked 存款盒 #${A}，锁定 ${g} 秒`,timestamp:Date.now(),type:"create"}),t.addLog(14,"创建TimeLocked存款盒",`Box #${A} by ${L}, 锁定 ${g}秒`,"createTimeLockedBox"),{success:!0,box:ne,message:`✅ 创建 TimeLocked 存款盒 #${A} 成功！⏰ 恭喜解锁：时间锁定和抽象合约！${r.value>=2?"🏭 恭喜解锁：工厂模式！":""}👉 存入秘密并在锁定期间尝试取出！`,hints:r.value>=2?["abstract_contract","time_lock","factory_pattern"]:["abstract_contract","time_lock"],nextStep:r.value>=2?"⏰ TimeLockedDepositBox 使用修饰器组合保护 getSecret()！🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 存入秘密并在锁定期间尝试取出！":"⏰ TimeLockedDepositBox 使用修饰器组合保护 getSecret()！👉 存入秘密并在锁定期间尝试取出！"}},N=(g,A)=>{const T=s.value.find(Q=>Q.id===g);if(!T)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(T.owner!==o.value)return t.addLog(14,"存入秘密失败",`无权操作 Box #${g}`),{success:!1,message:"❌ 只有所有者才能存入秘密！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试存入秘密！"};T.secret=A;const L=c(T.owner);return i.value.push({icon:"🔐",name:"SecretStored",details:`${L} 向 Box #${g} 存入了秘密`,timestamp:Date.now(),type:"store"}),t.addLog(14,"存入秘密",`Box #${g} by ${L}`,"storeSecret"),{success:!0,message:`✅ 秘密已存入 Box #${g}！👉 尝试取出秘密！`,hints:[],nextStep:"🔐 秘密已安全存储！👉 尝试取出秘密！"}},M=g=>{const A=s.value.find(L=>L.id===g);if(!A)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(A.owner!==o.value)return t.addLog(14,"取出秘密失败",`无权操作 Box #${g}`),{success:!1,message:"❌ 只有所有者才能取出秘密！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试取出秘密！"};if(A.type==="TimeLocked"&&A.unlockTime&&Date.now()<A.unlockTime){const L=Math.ceil((A.unlockTime-Date.now())/1e3);return t.addLog(14,"取出秘密失败",`Box #${g} 仍锁定，剩余 ${L} 秒`),{success:!1,message:`❌ Box #${g} 仍处于锁定状态！剩余 ${L} 秒。🔗 修饰器组合阻止了操作！`,hints:["modifier_combination","super_keyword"],nextStep:"🔗 修饰器组合 timeUnlocked 阻止了操作！👉 等待解锁或创建其他类型的存款盒！"}}const T=c(A.owner);return t.addLog(14,"取出秘密",`Box #${g} by ${T}`),{success:!0,secret:A.secret,message:`✅ 成功取出 Box #${g} 的秘密！`,hints:[],nextStep:A.type==="TimeLocked"?"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。TimeLocked 使用 super.getSecret() 调用父合约实现！👉 设置元数据或转移所有权来学习更多！":"🔓 不错！你取出了秘密！只有所有者才能访问存储的秘密。👉 转移所有权给 Bob 来学习所有权转移流程！"}},b=(g,A)=>{const T=s.value.find(Q=>Q.id===g);if(!T)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(T.type!=="Premium")return{success:!1,message:"❌ 只有 Premium 存款盒支持元数据！",hints:[],nextStep:""};if(T.owner!==o.value)return t.addLog(14,"设置元数据失败",`无权操作 Box #${g}`),{success:!1,message:"❌ 只有所有者才能设置元数据！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到 Premium 存款盒的所有者角色来尝试设置元数据！"};T.metadata=A;const L=c(T.owner);return i.value.push({icon:"🏷️",name:"MetadataSet",details:`${L} 设置了 Box #${g} 的元数据`,timestamp:Date.now(),type:"metadata"}),t.addLog(14,"设置元数据",`Box #${g} by ${L}`,"setMetadata"),{success:!0,message:`✅ 元数据已设置到 Box #${g}！🏷️ 恭喜解锁：元数据存储！`,hints:["metadata_storage"],nextStep:"🏷️ Premium 版本通过继承扩展了功能！👉 创建第2个存款盒来体验工厂模式！"}},k=g=>{const A=s.value.find(T=>T.id===g);return!A||A.type!=="Premium"?{success:!1,metadata:""}:(t.addLog(14,"获取元数据",`Box #${g}`),{success:!0,metadata:A.metadata||""})},p=g=>{const A=s.value.find(L=>L.id===g);if(!A||A.type!=="TimeLocked")return{success:!1,unlockTime:0,remaining:0};const T=A.unlockTime?Math.max(0,Math.ceil((A.unlockTime-Date.now())/1e3)):0;return t.addLog(14,"查询解锁时间",`Box #${g}, 剩余 ${T} 秒`),{success:!0,unlockTime:A.unlockTime||0,remaining:T}},h=(g,A)=>{const T=s.value.find(me=>me.id===g);if(!T)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(T.owner!==o.value)return t.addLog(14,"转移所有权失败",`无权操作 Box #${g}`),{success:!1,message:"❌ 只有所有者才能转移所有权！🔒 这展示了修饰器在权限控制中的作用！",hints:[],nextStep:"👉 切换到存款盒的所有者角色来尝试转移所有权！"};const L=T.owner,Q=c(L),ne=c(A);return T.owner=A,i.value.push({icon:"🔑",name:"OwnershipTransferred",details:`Box #${g} 从 ${Q} 转移到 ${ne}`,timestamp:Date.now(),type:"transfer"}),t.addLog(14,"转移所有权",`Box #${g} 从 ${Q} 到 ${ne}`,"transferOwnership14"),{success:!0,message:`✅ Box #${g} 所有权已从 ${Q} 转移到 ${ne}！👉 新所有者需要调用 completeOwnershipTransfer 来更新记录！`,hints:r.value>=2?["factory_pattern"]:[],nextStep:r.value>=2?"🏭 你体验了工厂模式！VaultManager 负责创建和管理所有存款盒！👉 切换到新所有者完成所有权转移！":"👉 切换到新所有者调用 completeOwnershipTransfer 来更新记录！"}},w=g=>{const A=s.value.find(L=>L.id===g);if(!A)return{success:!1,message:"❌ 存款盒不存在！",hints:[],nextStep:""};if(A.owner!==o.value)return t.addLog(14,"完成所有权转移失败",`不是新所有者 Box #${g}`),{success:!1,message:"❌ 你不是该存款盒的新所有者！",hints:[],nextStep:""};const T=c(A.owner);return t.addLog(14,"完成所有权转移",`Box #${g} 新所有者 ${T}`,"completeOwnershipTransfer"),{success:!0,message:`✅ 所有权转移完成！${T} 现在拥有 Box #${g}！`,hints:[],nextStep:"👉 查看完整代码来复习所有知识点！"}},D=g=>p(g).remaining||0,v=x(()=>({gasUsage:t.getDayGasUsage(14),ethCost:t.getDayEthCost(14),operationCount:t.getDayOperationCount(14)}));return{roles:e,currentRole:n,depositBoxes:s,myBoxes:a,eventLog:i,boxCounter:r,currentAddress:o,realtimeData:v,switchRole:_,getRoleName:c,formatAddress:u,formatTime:l,getBoxIcon:d,createBasicBox:m,createPremiumBox:S,createTimeLockedBox:C,storeSecret:N,getSecret:M,setMetadata:b,getMetadata:k,getUnlockTime:p,getRemainingLockTime:D,transferOwnership:h,completeOwnershipTransfer:w}}function ef(){const t=Te(),e=K(0),n=K([]),r=K({"0xUser1234567890abcdef":0n,"0xAlice1234567890abcdef":0n,"0xBob1234567890abcdef":0n}),s=K("0xUser1234567890abcdef"),i=K([]),o=x(()=>r.value[s.value]||0n),a=x(()=>{const p=Date.now();return n.value.filter(h=>h.endTime>p&&!h.executed)}),c=x(()=>{const p=Date.now();return n.value.filter(h=>h.endTime<=p&&!h.executed)}),u=x(()=>n.value.filter(p=>p.executed)),l=p=>p?p===s.value?"你 (0xUser...cdef)":p==="0xAlice1234567890abcdef"?"Alice (0xAl...cdef)":p==="0xBob1234567890abcdef"?"Bob (0xBob...cdef)":p.slice(0,10)+"..."+p.slice(-8):"",d=p=>new Date(p).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),_=p=>{const h=Date.now(),w=Math.max(0,p-h),D=Math.floor(w/1e3);return D<60?`${D}秒`:`${Math.floor(D/60)}分${D%60}秒`},m=p=>{const h=Date.now();return p.executed?{text:"已执行",class:"executed"}:p.endTime<=h?{text:"已结束",class:"ended"}:{text:"活跃",class:"active"}},S=(p,h)=>{if(!p||p.trim()==="")return{success:!1,error:"❌ 请输入提案名称！",hint:"👝 提案名称不能为空！"};if(!h||h<1)return{success:!1,error:"❌ 请输入有效的持续时间（至少1分钟）！",hint:"⏰ 持续时间必须大于0！"};e.value++;const w=e.value-1,D={id:w,name:p.trim(),voteCount:0,startTime:Date.now(),endTime:Date.now()+h*60*1e3,executed:!1,creator:s.value};n.value.push(D),i.value.unshift({icon:"📝",name:"ProposalCreated",details:`创建提案 "${D.name}" (ID: ${w})`,timestamp:Date.now(),type:"create"}),t.addLog(15,"创建提案",`Proposal #${w}: ${p}`,"createProposal15");const v=["bytes32_string"];e.value>=3&&v.push("storage_optimization");const g=e.value>=3?`✅ 创建提案 #${w} 成功！📝 恭喜解锁：bytes32 vs string！💾 恭喜解锁：存储优化！👉 现在尝试投票来学习位运算！`:`✅ 创建提案 #${w} 成功！📝 恭喜解锁：bytes32 vs string！👉 继续创建提案或尝试投票来学习位运算！`;return{success:!0,proposal:D,message:g,hints:v,nextStep:e.value>=3?"📝 bytes32 比 string 更省 Gas！💾 创建3个提案展示了 uint8 类型的存储优化！👉 现在尝试投票来学习位运算！":"📝 bytes32 比 string 更省 Gas！👉 继续创建提案或尝试投票来学习位运算！"}},C=p=>{const h=n.value[p];if(!h)return{success:!1,error:"❌ 提案不存在！",hint:"👝 请选择有效的提案！"};const w=Date.now();if(h.endTime<=w)return{success:!1,error:"❌ 提案已结束，无法投票！",hint:"⏰ 投票窗口已关闭！"};const D=1n<<BigInt(p),v=o.value;return(v&D)!==0n?{success:!1,error:"❌ 已经对此提案投过票了！",hint:"🎭 掩码检查防止重复投票！",hasVoted:!0}:(r.value[s.value]=v|D,h.voteCount++,i.value.unshift({icon:"🗳️",name:"Voted",details:`${l(s.value)} 对提案 #${p} 投票`,timestamp:Date.now(),type:"vote"}),t.addLog(15,"投票",`Proposal #${p}`,"vote15"),{success:!0,proposal:h,message:"✅ 投票成功！⚡ 恭喜解锁：位运算技巧！🗺️ 恭喜解锁：映射存储！⏰ 恭喜解锁：时间戳验证！👉 尝试重复投票来体验掩码检查！",hints:["bit_operation","mapping_storage","timestamp_block"],nextStep:"⚡ 位运算让1个uint256存储256个投票状态！🗺️ 映射高效存储选民数据！⏰ 使用block.timestamp进行时间验证！👉 尝试对同一提案再次投票来体验掩码检查！"})},N=p=>{const h=n.value[p];if(!h)return{success:!1,error:"❌ 提案不存在！",hint:"👝 请选择有效的提案！"};if(h.executed)return{success:!1,error:"❌ 提案已经执行过了！",hint:"✅ 该提案已执行！"};const w=Date.now();return h.endTime>w?{success:!1,error:"❌ 提案还在进行中，无法执行！",hint:"⏰ 请等待投票结束后再执行！"}:(h.executed=!0,i.value.unshift({icon:"✅",name:"ProposalExecuted",details:`执行提案 "${h.name}" (ID: ${p}, 得票: ${h.voteCount})`,timestamp:Date.now(),type:"execute"}),t.addLog(15,"执行提案",`Proposal #${p}`,"executeProposal15"),{success:!0,proposal:h,message:`✅ 执行提案 #${p} 成功！📋 恭喜解锁：事件日志！🎉 你已解锁所有知识点！`,hints:["event_logging"],nextStep:"📋 事件日志用于链下索引和前端监听！🎉 恭喜！你已掌握Day 15所有核心概念！"})},M=p=>{const h=1n<<BigInt(p),w=o.value,D=(w&h)!==0n;return{proposalId:p,mask:h.toString(2),voterData:w.toString(2),hasVoted:D,operation:D?"已投票 (AND检查)":"未投票 (OR设置)",gasSaving:"使用位运算，1个uint256可存储256个提案的投票状态，节省约40% Gas！"}},b=()=>({slots:[{slot:0,name:"proposalCount",type:"uint8",value:e.value,description:"提案总数（使用uint8节省存储）"},{slot:1,name:"proposals mapping",type:"mapping",value:`${n.value.length} 个提案`,description:"提案映射（每个提案使用紧凑数据类型）"},{slot:"X",name:"voterRegistry mapping",type:"mapping(uint256)",value:`${Object.keys(r.value).length} 个选民`,description:"选民投票位图（1个uint256存储256个投票状态）"},{slot:"Y",name:"proposalVoterCount",type:"mapping(uint32)",value:"按提案统计",description:"提案投票数（uint32足够大）"}]}),k=x(()=>({gasUsage:t.getDayGasUsage(15),ethCost:t.getDayEthCost(15),operationCount:t.getDayOperationCount(15)}));return{proposals:n,eventLog:i,currentAddress:s,proposalCounter:e,currentVoterData:o,activeProposals:a,endedProposals:c,executedProposals:u,createProposal:S,vote:C,executeProposal:N,getBitOperationDemo:M,getStorageVisualization:b,formatAddress:l,formatTime:d,formatRemainingTime:_,getProposalStatus:m,realtimeData:k}}const tf="6.16.0";function nf(t,e,n){const r=e.split("|").map(i=>i.trim());for(let i=0;i<r.length;i++)switch(e){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof t===e)return}const s=new Error(`invalid value for type ${e}`);throw s.code="INVALID_ARGUMENT",s.argument=`value.${n}`,s.value=t,s}function ge(t,e,n){for(let r in e){let s=e[r];const i=n?n[r]:null;i&&nf(s,i,r),Object.defineProperty(t,r,{enumerable:!0,value:s,writable:!1})}}function On(t,e){if(t==null)return"null";if(e==null&&(e=new Set),typeof t=="object"){if(e.has(t))return"[Circular]";e.add(t)}if(Array.isArray(t))return"[ "+t.map(n=>On(n,e)).join(", ")+" ]";if(t instanceof Uint8Array){const n="0123456789abcdef";let r="0x";for(let s=0;s<t.length;s++)r+=n[t[s]>>4],r+=n[t[s]&15];return r}if(typeof t=="object"&&typeof t.toJSON=="function")return On(t.toJSON(),e);switch(typeof t){case"boolean":case"number":case"symbol":return t.toString();case"bigint":return BigInt(t).toString();case"string":return JSON.stringify(t);case"object":{const n=Object.keys(t);return n.sort(),"{ "+n.map(r=>`${On(r,e)}: ${On(t[r],e)}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function Oo(t,e){return t&&t.code===e}function hc(t,e,n){let r=t;{const i=[];if(n){if("message"in n||"code"in n||"name"in n)throw new Error(`value will overwrite populated values: ${On(n)}`);for(const o in n){if(o==="shortMessage")continue;const a=n[o];i.push(o+"="+On(a))}}i.push(`code=${e}`),i.push(`version=${tf}`),i.length&&(t+=" ("+i.join(", ")+")")}let s;switch(e){case"INVALID_ARGUMENT":s=new TypeError(t);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":s=new RangeError(t);break;default:s=new Error(t)}return ge(s,{code:e}),n&&Object.assign(s,n),s.shortMessage==null&&ge(s,{shortMessage:r}),s}function xe(t,e,n,r){if(!t)throw hc(e,n,r)}function G(t,e,n,r){xe(t,e,"INVALID_ARGUMENT",{argument:n,value:r})}function yc(t,e,n){n==null&&(n=""),n&&(n=": "+n),xe(t>=e,"missing argument"+n,"MISSING_ARGUMENT",{count:t,expectedCount:e}),xe(t<=e,"too many arguments"+n,"UNEXPECTED_ARGUMENT",{count:t,expectedCount:e})}["NFD","NFC","NFKD","NFKC"].reduce((t,e)=>{try{if("test".normalize(e)!=="test")throw new Error("bad");if(e==="NFD"&&"é".normalize("NFD")!=="é")throw new Error("broken");t.push(e)}catch{}return t},[]);function Bi(t,e,n){if(n==null&&(n=""),t!==e){let r=n,s="new";n&&(r+=".",s+=" "+n),xe(!1,`private constructor; use ${r}from* methods`,"UNSUPPORTED_OPERATION",{operation:s})}}function bc(t,e,n){if(t instanceof Uint8Array)return n?new Uint8Array(t):t;if(typeof t=="string"&&t.length%2===0&&t.match(/^0x[0-9a-f]*$/i)){const r=new Uint8Array((t.length-2)/2);let s=2;for(let i=0;i<r.length;i++)r[i]=parseInt(t.substring(s,s+2),16),s+=2;return r}G(!1,"invalid BytesLike value",e||"value",t)}function Gt(t,e){return bc(t,e,!1)}function At(t,e){return bc(t,e,!0)}function Nr(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||typeof e=="number"&&t.length!==2+2*e||e===!0&&t.length%2!==0)}const Bo="0123456789abcdef";function Ae(t){const e=Gt(t);let n="0x";for(let r=0;r<e.length;r++){const s=e[r];n+=Bo[(s&240)>>4]+Bo[s&15]}return n}function Mn(t){return"0x"+t.map(e=>Ae(e).substring(2)).join("")}function En(t,e,n){const r=Gt(t);return n!=null&&n>r.length&&xe(!1,"cannot slice beyond data bounds","BUFFER_OVERRUN",{buffer:r,length:r.length,offset:n}),Ae(r.slice(e??0,n??r.length))}function _c(t,e,n){const r=Gt(t);xe(e>=r.length,"padding exceeds data length","BUFFER_OVERRUN",{buffer:new Uint8Array(r),length:e,offset:e+1});const s=new Uint8Array(e);return s.fill(0),n?s.set(r,e-r.length):s.set(r,0),Ae(s)}function rf(t,e){return _c(t,e,!0)}function sf(t,e){return _c(t,e,!1)}const Dr=BigInt(0),ct=BigInt(1),Bn=9007199254740991;function of(t,e){const n=Ts(t,"value"),r=BigInt(an(e,"width"));if(xe(n>>r===Dr,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:t}),n>>r-ct){const s=(ct<<r)-ct;return-((~n&s)+ct)}return n}function af(t,e){let n=Kn(t,"value");const r=BigInt(an(e,"width")),s=ct<<r-ct;if(n<Dr){n=-n,xe(n<=s,"too low","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:t});const i=(ct<<r)-ct;return(~n&i)+ct}else xe(n<s,"too high","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:t});return n}function Ur(t,e){const n=Ts(t,"value"),r=BigInt(an(e,"bits"));return n&(ct<<r)-ct}function Kn(t,e){switch(typeof t){case"bigint":return t;case"number":return G(Number.isInteger(t),"underflow",e||"value",t),G(t>=-Bn&&t<=Bn,"overflow",e||"value",t),BigInt(t);case"string":try{if(t==="")throw new Error("empty string");return t[0]==="-"&&t[1]!=="-"?-BigInt(t.substring(1)):BigInt(t)}catch(n){G(!1,`invalid BigNumberish string: ${n.message}`,e||"value",t)}}G(!1,"invalid BigNumberish value",e||"value",t)}function Ts(t,e){const n=Kn(t,e);return xe(n>=Dr,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:t}),n}const $o="0123456789abcdef";function wc(t){if(t instanceof Uint8Array){let e="0x0";for(const n of t)e+=$o[n>>4],e+=$o[n&15];return BigInt(e)}return Kn(t)}function an(t,e){switch(typeof t){case"bigint":return G(t>=-Bn&&t<=Bn,"overflow",e||"value",t),Number(t);case"number":return G(Number.isInteger(t),"underflow",e||"value",t),G(t>=-Bn&&t<=Bn,"overflow",e||"value",t),t;case"string":try{if(t==="")throw new Error("empty string");return an(BigInt(t),e)}catch(n){G(!1,`invalid numeric string: ${n.message}`,e||"value",t)}}G(!1,"invalid numeric value",e||"value",t)}function cf(t){return an(wc(t))}function vc(t,e){const n=Ts(t,"value");let r=n.toString(16);if(e==null)r.length%2&&(r="0"+r);else{const s=an(e,"width");if(s===0&&n===Dr)return"0x";for(xe(s*2>=r.length,`value exceeds width (${s} bytes)`,"NUMERIC_FAULT",{operation:"toBeHex",fault:"overflow",value:t});r.length<s*2;)r="0"+r}return"0x"+r}function lf(t,e){const n=Ts(t,"value");if(n===Dr)return new Uint8Array(0);let r=n.toString(16);r.length%2&&(r="0"+r);const s=new Uint8Array(r.length/2);for(let i=0;i<s.length;i++){const o=i*2;s[i]=parseInt(r.substring(o,o+2),16)}return s}function uf(t,e,n,r,s){G(!1,`invalid codepoint at offset ${e}; ${t}`,"bytes",n)}function xc(t,e,n,r,s){if(t==="BAD_PREFIX"||t==="UNEXPECTED_CONTINUE"){let i=0;for(let o=e+1;o<n.length&&n[o]>>6===2;o++)i++;return i}return t==="OVERRUN"?n.length-e-1:0}function df(t,e,n,r,s){return t==="OVERLONG"?(G(typeof s=="number","invalid bad code point for replacement","badCodepoint",s),r.push(s),0):(r.push(65533),xc(t,e,n))}const ff=Object.freeze({error:uf,ignore:xc,replace:df});function pf(t,e){e==null&&(e=ff.error);const n=Gt(t,"bytes"),r=[];let s=0;for(;s<n.length;){const i=n[s++];if(!(i>>7)){r.push(i);continue}let o=null,a=null;if((i&224)===192)o=1,a=127;else if((i&240)===224)o=2,a=2047;else if((i&248)===240)o=3,a=65535;else{(i&192)===128?s+=e("UNEXPECTED_CONTINUE",s-1,n,r):s+=e("BAD_PREFIX",s-1,n,r);continue}if(s-1+o>=n.length){s+=e("OVERRUN",s-1,n,r);continue}let c=i&(1<<8-o-1)-1;for(let u=0;u<o;u++){let l=n[s];if((l&192)!=128){s+=e("MISSING_CONTINUE",s,n,r),c=null;break}c=c<<6|l&63,s++}if(c!==null){if(c>1114111){s+=e("OUT_OF_RANGE",s-1-o,n,r,c);continue}if(c>=55296&&c<=57343){s+=e("UTF16_SURROGATE",s-1-o,n,r,c);continue}if(c<=a){s+=e("OVERLONG",s-1-o,n,r,c);continue}r.push(c)}}return r}function $i(t,e){G(typeof t=="string","invalid string value","str",t);let n=[];for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);if(s<128)n.push(s);else if(s<2048)n.push(s>>6|192),n.push(s&63|128);else if((s&64512)==55296){r++;const i=t.charCodeAt(r);G(r<t.length&&(i&64512)===56320,"invalid surrogate pair","str",t);const o=65536+((s&1023)<<10)+(i&1023);n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128)}else n.push(s>>12|224),n.push(s>>6&63|128),n.push(s&63|128)}return new Uint8Array(n)}function gf(t){return t.map(e=>e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10&1023)+55296,(e&1023)+56320))).join("")}function mf(t,e){return gf(pf(t,e))}const He=32,ri=new Uint8Array(He),hf=["then"],Fr={},Cc=new WeakMap;function fn(t){return Cc.get(t)}function Io(t,e){Cc.set(t,e)}function er(t,e){const n=new Error(`deferred error during ABI decoding triggered accessing ${t}`);throw n.error=e,n}function si(t,e,n){return t.indexOf(null)>=0?e.map((r,s)=>r instanceof Gn?si(fn(r),r,n):r):t.reduce((r,s,i)=>{let o=e.getValue(s);return s in r||(n&&o instanceof Gn&&(o=si(fn(o),o,n)),r[s]=o),r},{})}var Nn;const $n=class $n extends Array{constructor(...n){const r=n[0];let s=n[1],i=(n[2]||[]).slice(),o=!0;r!==Fr&&(s=n,i=[],o=!1);super(s.length);be(this,Nn);s.forEach((u,l)=>{this[l]=u});const a=i.reduce((u,l)=>(typeof l=="string"&&u.set(l,(u.get(l)||0)+1),u),new Map);if(Io(this,Object.freeze(s.map((u,l)=>{const d=i[l];return d!=null&&a.get(d)===1?d:null}))),de(this,Nn,[]),R(this,Nn)==null&&R(this,Nn),!o)return;Object.freeze(this);const c=new Proxy(this,{get:(u,l,d)=>{if(typeof l=="string"){if(l.match(/^[0-9]+$/)){const m=an(l,"%index");if(m<0||m>=this.length)throw new RangeError("out of result range");const S=u[m];return S instanceof Error&&er(`index ${m}`,S),S}if(hf.indexOf(l)>=0)return Reflect.get(u,l,d);const _=u[l];if(_ instanceof Function)return function(...m){return _.apply(this===d?u:this,m)};if(!(l in u))return u.getValue.apply(this===d?u:this,[l])}return Reflect.get(u,l,d)}});return Io(c,fn(this)),c}toArray(n){const r=[];return this.forEach((s,i)=>{s instanceof Error&&er(`index ${i}`,s),n&&s instanceof $n&&(s=s.toArray(n)),r.push(s)}),r}toObject(n){const r=fn(this);return r.reduce((s,i,o)=>(xe(i!=null,`value at index ${o} unnamed`,"UNSUPPORTED_OPERATION",{operation:"toObject()"}),si(r,this,n)),{})}slice(n,r){n==null&&(n=0),n<0&&(n+=this.length,n<0&&(n=0)),r==null&&(r=this.length),r<0&&(r+=this.length,r<0&&(r=0)),r>this.length&&(r=this.length);const s=fn(this),i=[],o=[];for(let a=n;a<r;a++)i.push(this[a]),o.push(s[a]);return new $n(Fr,i,o)}filter(n,r){const s=fn(this),i=[],o=[];for(let a=0;a<this.length;a++){const c=this[a];c instanceof Error&&er(`index ${a}`,c),n.call(r,c,a,this)&&(i.push(c),o.push(s[a]))}return new $n(Fr,i,o)}map(n,r){const s=[];for(let i=0;i<this.length;i++){const o=this[i];o instanceof Error&&er(`index ${i}`,o),s.push(n.call(r,o,i,this))}return s}getValue(n){const r=fn(this).indexOf(n);if(r===-1)return;const s=this[r];return s instanceof Error&&er(`property ${JSON.stringify(n)}`,s.error),s}static fromItems(n,r){return new $n(Fr,n,r)}};Nn=new WeakMap;let Gn=$n;function Lo(t){let e=lf(t);return xe(e.length<=He,"value out-of-bounds","BUFFER_OVERRUN",{buffer:e,length:He,offset:e.length}),e.length!==He&&(e=At(Mn([ri.slice(e.length%He),e]))),e}class Jt{constructor(e,n,r,s){J(this,"name");J(this,"type");J(this,"localName");J(this,"dynamic");ge(this,{name:e,type:n,localName:r,dynamic:s},{name:"string",type:"string",localName:"string",dynamic:"boolean"})}_throwError(e,n){G(!1,e,this.localName,n)}}var Rt,gn,Un,Xr;class ii{constructor(){be(this,Un);be(this,Rt);be(this,gn);de(this,Rt,[]),de(this,gn,0)}get data(){return Mn(R(this,Rt))}get length(){return R(this,gn)}appendWriter(e){return he(this,Un,Xr).call(this,At(e.data))}writeBytes(e){let n=At(e);const r=n.length%He;return r&&(n=At(Mn([n,ri.slice(r)]))),he(this,Un,Xr).call(this,n)}writeValue(e){return he(this,Un,Xr).call(this,Lo(e))}writeUpdatableValue(){const e=R(this,Rt).length;return R(this,Rt).push(ri),de(this,gn,R(this,gn)+He),n=>{R(this,Rt)[e]=Lo(n)}}}Rt=new WeakMap,gn=new WeakMap,Un=new WeakSet,Xr=function(e){return R(this,Rt).push(e),de(this,gn,R(this,gn)+e.length),e.length};var Ke,Qe,mn,hn,en,Sn,ai,Sc;const Ri=class Ri{constructor(e,n,r){be(this,Sn);J(this,"allowLoose");be(this,Ke);be(this,Qe);be(this,mn);be(this,hn);be(this,en);ge(this,{allowLoose:!!n}),de(this,Ke,At(e)),de(this,mn,0),de(this,hn,null),de(this,en,r??1024),de(this,Qe,0)}get data(){return Ae(R(this,Ke))}get dataLength(){return R(this,Ke).length}get consumed(){return R(this,Qe)}get bytes(){return new Uint8Array(R(this,Ke))}subReader(e){const n=new Ri(R(this,Ke).slice(R(this,Qe)+e),this.allowLoose,R(this,en));return de(n,hn,this),n}readBytes(e,n){let r=he(this,Sn,Sc).call(this,0,e,!!n);return he(this,Sn,ai).call(this,e),de(this,Qe,R(this,Qe)+r.length),r.slice(0,e)}readValue(){return wc(this.readBytes(He))}readIndex(){return cf(this.readBytes(He))}};Ke=new WeakMap,Qe=new WeakMap,mn=new WeakMap,hn=new WeakMap,en=new WeakMap,Sn=new WeakSet,ai=function(e){var n;if(R(this,hn))return he(n=R(this,hn),Sn,ai).call(n,e);de(this,mn,R(this,mn)+e),xe(R(this,en)<1||R(this,mn)<=R(this,en)*this.dataLength,`compressed ABI data exceeds inflation ratio of ${R(this,en)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`,"BUFFER_OVERRUN",{buffer:At(R(this,Ke)),offset:R(this,Qe),length:e,info:{bytesRead:R(this,mn),dataLength:this.dataLength}})},Sc=function(e,n,r){let s=Math.ceil(n/He)*He;return R(this,Qe)+s>R(this,Ke).length&&(this.allowLoose&&r&&R(this,Qe)+n<=R(this,Ke).length?s=n:xe(!1,"data out-of-bounds","BUFFER_OVERRUN",{buffer:At(R(this,Ke)),length:R(this,Ke).length,offset:R(this,Qe)+s})),R(this,Ke).slice(R(this,Qe),R(this,Qe)+s)};let oi=Ri;function Ro(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function kc(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function Mo(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function yf(t,e){kc(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const bf=t=>t instanceof Uint8Array,_f=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),wf=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!wf)throw new Error("Non little-endian hardware is not supported");function vf(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function Ac(t){if(typeof t=="string"&&(t=vf(t)),!bf(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class xf{clone(){return this._cloneInto()}}function Cf(t){const e=r=>t().update(Ac(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}const Vr=BigInt(2**32-1),No=BigInt(32);function Sf(t,e=!1){return e?{h:Number(t&Vr),l:Number(t>>No&Vr)}:{h:Number(t>>No&Vr)|0,l:Number(t&Vr)|0}}function kf(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:i,l:o}=Sf(t[s],e);[n[s],r[s]]=[i,o]}return[n,r]}const Af=(t,e,n)=>t<<n|e>>>32-n,Tf=(t,e,n)=>e<<n|t>>>32-n,Ef=(t,e,n)=>e<<n-32|t>>>64-n,Df=(t,e,n)=>t<<n-32|e>>>64-n,[Tc,Ec,Dc]=[[],[],[]],Pf=BigInt(0),tr=BigInt(1),Of=BigInt(2),Bf=BigInt(7),$f=BigInt(256),If=BigInt(113);for(let t=0,e=tr,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],Tc.push(2*(5*r+n)),Ec.push((t+1)*(t+2)/2%64);let s=Pf;for(let i=0;i<7;i++)e=(e<<tr^(e>>Bf)*If)%$f,e&Of&&(s^=tr<<(tr<<BigInt(i))-tr);Dc.push(s)}const[Lf,Rf]=kf(Dc,!0),Uo=(t,e,n)=>n>32?Ef(t,e,n):Af(t,e,n),Fo=(t,e,n)=>n>32?Df(t,e,n):Tf(t,e,n);function Mf(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let o=0;o<10;o++)n[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,c=(o+2)%10,u=n[c],l=n[c+1],d=Uo(u,l,1)^n[a],_=Fo(u,l,1)^n[a+1];for(let m=0;m<50;m+=10)t[o+m]^=d,t[o+m+1]^=_}let s=t[2],i=t[3];for(let o=0;o<24;o++){const a=Ec[o],c=Uo(s,i,a),u=Fo(s,i,a),l=Tc[o];s=t[l],i=t[l+1],t[l]=c,t[l+1]=u}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)n[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=Lf[r],t[1]^=Rf[r]}n.fill(0)}class Ii extends xf{constructor(e,n,r,s=!1,i=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=s,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Ro(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=_f(this.state)}keccak(){Mf(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Mo(this);const{blockLen:n,state:r}=this;e=Ac(e);const s=e.length;for(let i=0;i<s;){const o=Math.min(n-this.pos,s-i);for(let a=0;a<o;a++)r[this.pos++]^=e[i++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:s}=this;e[r]^=n,n&128&&r===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){Mo(this,!1),kc(e),this.finish();const n=this.state,{blockLen:r}=this;for(let s=0,i=e.length;s<i;){this.posOut>=r&&this.keccak();const o=Math.min(r-this.posOut,i-s);e.set(n.subarray(this.posOut,this.posOut+o),s),this.posOut+=o,s+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Ro(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(yf(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:s,rounds:i,enableXOF:o}=this;return e||(e=new Ii(n,r,s,o,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=s,e.enableXOF=o,e.destroyed=this.destroyed,e}}const Nf=(t,e,n)=>Cf(()=>new Ii(e,t,n)),Uf=Nf(1,136,256/8);let Pc=!1;const Oc=function(t){return Uf(t)};let Bc=Oc;function sn(t){const e=Gt(t,"data");return Ae(Bc(e))}sn._=Oc;sn.lock=function(){Pc=!0};sn.register=function(t){if(Pc)throw new TypeError("keccak256 is locked");Bc=t};Object.freeze(sn);const Ff=BigInt(0),Vf=BigInt(36);function Vo(t){t=t.toLowerCase();const e=t.substring(2).split(""),n=new Uint8Array(40);for(let s=0;s<40;s++)n[s]=e[s].charCodeAt(0);const r=Gt(sn(n));for(let s=0;s<40;s+=2)r[s>>1]>>4>=8&&(e[s]=e[s].toUpperCase()),(r[s>>1]&15)>=8&&(e[s+1]=e[s+1].toUpperCase());return"0x"+e.join("")}const Li={};for(let t=0;t<10;t++)Li[String(t)]=String(t);for(let t=0;t<26;t++)Li[String.fromCharCode(65+t)]=String(10+t);const Wo=15;function Wf(t){t=t.toUpperCase(),t=t.substring(4)+t.substring(0,2)+"00";let e=t.split("").map(r=>Li[r]).join("");for(;e.length>=Wo;){let r=e.substring(0,Wo);e=parseInt(r,10)%97+e.substring(r.length)}let n=String(98-parseInt(e,10)%97);for(;n.length<2;)n="0"+n;return n}const Hf=function(){const t={};for(let e=0;e<36;e++){const n="0123456789abcdefghijklmnopqrstuvwxyz"[e];t[n]=BigInt(e)}return t}();function qf(t){t=t.toLowerCase();let e=Ff;for(let n=0;n<t.length;n++)e=e*Vf+Hf[t[n]];return e}function wr(t){if(G(typeof t=="string","invalid address","address",t),t.match(/^(0x)?[0-9a-fA-F]{40}$/)){t.startsWith("0x")||(t="0x"+t);const e=Vo(t);return G(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/)||e===t,"bad address checksum","address",t),e}if(t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){G(t.substring(2,4)===Wf(t),"bad icap checksum","address",t);let e=qf(t.substring(4)).toString(16);for(;e.length<40;)e="0"+e;return Vo("0x"+e)}G(!1,"invalid address","address",t)}const Bt={};function z(t,e){let n=!1;return e<0&&(n=!0,e*=-1),new Je(Bt,`${n?"":"u"}int${e}`,t,{signed:n,width:e})}function se(t,e){return new Je(Bt,`bytes${e||""}`,t,{size:e})}const Ho=Symbol.for("_ethers_typed");var yn;const $t=class $t{constructor(e,n,r,s){J(this,"type");J(this,"value");be(this,yn);J(this,"_typedSymbol");s==null&&(s=null),Bi(Bt,e,"Typed"),ge(this,{_typedSymbol:Ho,type:n,value:r}),de(this,yn,s),this.format()}format(){if(this.type==="array")throw new Error("");if(this.type==="dynamicArray")throw new Error("");return this.type==="tuple"?`tuple(${this.value.map(e=>e.format()).join(",")})`:this.type}defaultValue(){return 0}minValue(){return 0}maxValue(){return 0}isBigInt(){return!!this.type.match(/^u?int[0-9]+$/)}isData(){return this.type.startsWith("bytes")}isString(){return this.type==="string"}get tupleName(){if(this.type!=="tuple")throw TypeError("not a tuple");return R(this,yn)}get arrayLength(){if(this.type!=="array")throw TypeError("not an array");return R(this,yn)===!0?-1:R(this,yn)===!1?this.value.length:null}static from(e,n){return new $t(Bt,e,n)}static uint8(e){return z(e,8)}static uint16(e){return z(e,16)}static uint24(e){return z(e,24)}static uint32(e){return z(e,32)}static uint40(e){return z(e,40)}static uint48(e){return z(e,48)}static uint56(e){return z(e,56)}static uint64(e){return z(e,64)}static uint72(e){return z(e,72)}static uint80(e){return z(e,80)}static uint88(e){return z(e,88)}static uint96(e){return z(e,96)}static uint104(e){return z(e,104)}static uint112(e){return z(e,112)}static uint120(e){return z(e,120)}static uint128(e){return z(e,128)}static uint136(e){return z(e,136)}static uint144(e){return z(e,144)}static uint152(e){return z(e,152)}static uint160(e){return z(e,160)}static uint168(e){return z(e,168)}static uint176(e){return z(e,176)}static uint184(e){return z(e,184)}static uint192(e){return z(e,192)}static uint200(e){return z(e,200)}static uint208(e){return z(e,208)}static uint216(e){return z(e,216)}static uint224(e){return z(e,224)}static uint232(e){return z(e,232)}static uint240(e){return z(e,240)}static uint248(e){return z(e,248)}static uint256(e){return z(e,256)}static uint(e){return z(e,256)}static int8(e){return z(e,-8)}static int16(e){return z(e,-16)}static int24(e){return z(e,-24)}static int32(e){return z(e,-32)}static int40(e){return z(e,-40)}static int48(e){return z(e,-48)}static int56(e){return z(e,-56)}static int64(e){return z(e,-64)}static int72(e){return z(e,-72)}static int80(e){return z(e,-80)}static int88(e){return z(e,-88)}static int96(e){return z(e,-96)}static int104(e){return z(e,-104)}static int112(e){return z(e,-112)}static int120(e){return z(e,-120)}static int128(e){return z(e,-128)}static int136(e){return z(e,-136)}static int144(e){return z(e,-144)}static int152(e){return z(e,-152)}static int160(e){return z(e,-160)}static int168(e){return z(e,-168)}static int176(e){return z(e,-176)}static int184(e){return z(e,-184)}static int192(e){return z(e,-192)}static int200(e){return z(e,-200)}static int208(e){return z(e,-208)}static int216(e){return z(e,-216)}static int224(e){return z(e,-224)}static int232(e){return z(e,-232)}static int240(e){return z(e,-240)}static int248(e){return z(e,-248)}static int256(e){return z(e,-256)}static int(e){return z(e,-256)}static bytes1(e){return se(e,1)}static bytes2(e){return se(e,2)}static bytes3(e){return se(e,3)}static bytes4(e){return se(e,4)}static bytes5(e){return se(e,5)}static bytes6(e){return se(e,6)}static bytes7(e){return se(e,7)}static bytes8(e){return se(e,8)}static bytes9(e){return se(e,9)}static bytes10(e){return se(e,10)}static bytes11(e){return se(e,11)}static bytes12(e){return se(e,12)}static bytes13(e){return se(e,13)}static bytes14(e){return se(e,14)}static bytes15(e){return se(e,15)}static bytes16(e){return se(e,16)}static bytes17(e){return se(e,17)}static bytes18(e){return se(e,18)}static bytes19(e){return se(e,19)}static bytes20(e){return se(e,20)}static bytes21(e){return se(e,21)}static bytes22(e){return se(e,22)}static bytes23(e){return se(e,23)}static bytes24(e){return se(e,24)}static bytes25(e){return se(e,25)}static bytes26(e){return se(e,26)}static bytes27(e){return se(e,27)}static bytes28(e){return se(e,28)}static bytes29(e){return se(e,29)}static bytes30(e){return se(e,30)}static bytes31(e){return se(e,31)}static bytes32(e){return se(e,32)}static address(e){return new $t(Bt,"address",e)}static bool(e){return new $t(Bt,"bool",!!e)}static bytes(e){return new $t(Bt,"bytes",e)}static string(e){return new $t(Bt,"string",e)}static array(e,n){throw new Error("not implemented yet")}static tuple(e,n){throw new Error("not implemented yet")}static overrides(e){return new $t(Bt,"overrides",Object.assign({},e))}static isTyped(e){return e&&typeof e=="object"&&"_typedSymbol"in e&&e._typedSymbol===Ho}static dereference(e,n){if($t.isTyped(e)){if(e.type!==n)throw new Error(`invalid type: expecetd ${n}, got ${e.type}`);return e.value}return e}};yn=new WeakMap;let Je=$t;class zf extends Jt{constructor(e){super("address","address",e,!1)}defaultValue(){return"0x0000000000000000000000000000000000000000"}encode(e,n){let r=Je.dereference(n,"string");try{r=wr(r)}catch(s){return this._throwError(s.message,n)}return e.writeValue(r)}decode(e){return wr(vc(e.readValue(),20))}}class Gf extends Jt{constructor(n){super(n.name,n.type,"_",n.dynamic);J(this,"coder");this.coder=n}defaultValue(){return this.coder.defaultValue()}encode(n,r){return this.coder.encode(n,r)}decode(n){return this.coder.decode(n)}}function $c(t,e,n){let r=[];if(Array.isArray(n))r=n;else if(n&&typeof n=="object"){let c={};r=e.map(u=>{const l=u.localName;return xe(l,"cannot encode object for signature with missing names","INVALID_ARGUMENT",{argument:"values",info:{coder:u},value:n}),xe(!c[l],"cannot encode object for signature with duplicate names","INVALID_ARGUMENT",{argument:"values",info:{coder:u},value:n}),c[l]=!0,n[l]})}else G(!1,"invalid tuple value","tuple",n);G(e.length===r.length,"types/value length mismatch","tuple",n);let s=new ii,i=new ii,o=[];e.forEach((c,u)=>{let l=r[u];if(c.dynamic){let d=i.length;c.encode(i,l);let _=s.writeUpdatableValue();o.push(m=>{_(m+d)})}else c.encode(s,l)}),o.forEach(c=>{c(s.length)});let a=t.appendWriter(s);return a+=t.appendWriter(i),a}function Ic(t,e){let n=[],r=[],s=t.subReader(0);return e.forEach(i=>{let o=null;if(i.dynamic){let a=t.readIndex(),c=s.subReader(a);try{o=i.decode(c)}catch(u){if(Oo(u,"BUFFER_OVERRUN"))throw u;o=u,o.baseType=i.name,o.name=i.localName,o.type=i.type}}else try{o=i.decode(t)}catch(a){if(Oo(a,"BUFFER_OVERRUN"))throw a;o=a,o.baseType=i.name,o.name=i.localName,o.type=i.type}if(o==null)throw new Error("investigate");n.push(o),r.push(i.localName||null)}),Gn.fromItems(n,r)}class Kf extends Jt{constructor(n,r,s){const i=n.type+"["+(r>=0?r:"")+"]",o=r===-1||n.dynamic;super("array",i,s,o);J(this,"coder");J(this,"length");ge(this,{coder:n,length:r})}defaultValue(){const n=this.coder.defaultValue(),r=[];for(let s=0;s<this.length;s++)r.push(n);return r}encode(n,r){const s=Je.dereference(r,"array");Array.isArray(s)||this._throwError("expected array value",s);let i=this.length;i===-1&&(i=s.length,n.writeValue(s.length)),yc(s.length,i,"coder array"+(this.localName?" "+this.localName:""));let o=[];for(let a=0;a<s.length;a++)o.push(this.coder);return $c(n,o,s)}decode(n){let r=this.length;r===-1&&(r=n.readIndex(),xe(r*He<=n.dataLength,"insufficient data length","BUFFER_OVERRUN",{buffer:n.bytes,offset:r*He,length:n.dataLength}));let s=[];for(let i=0;i<r;i++)s.push(new Gf(this.coder));return Ic(n,s)}}class jf extends Jt{constructor(e){super("bool","bool",e,!1)}defaultValue(){return!1}encode(e,n){const r=Je.dereference(n,"bool");return e.writeValue(r?1:0)}decode(e){return!!e.readValue()}}class Lc extends Jt{constructor(e,n){super(e,e,n,!0)}defaultValue(){return"0x"}encode(e,n){n=At(n);let r=e.writeValue(n.length);return r+=e.writeBytes(n),r}decode(e){return e.readBytes(e.readIndex(),!0)}}class Jf extends Lc{constructor(e){super("bytes",e)}decode(e){return Ae(super.decode(e))}}class Xf extends Jt{constructor(n,r){let s="bytes"+String(n);super(s,s,r,!1);J(this,"size");ge(this,{size:n},{size:"number"})}defaultValue(){return"0x0000000000000000000000000000000000000000000000000000000000000000".substring(0,2+this.size*2)}encode(n,r){let s=At(Je.dereference(r,this.type));return s.length!==this.size&&this._throwError("incorrect data length",r),n.writeBytes(s)}decode(n){return Ae(n.readBytes(this.size))}}const Yf=new Uint8Array([]);class Zf extends Jt{constructor(e){super("null","",e,!1)}defaultValue(){return null}encode(e,n){return n!=null&&this._throwError("not null",n),e.writeBytes(Yf)}decode(e){return e.readBytes(0),null}}const Qf=BigInt(0),ep=BigInt(1),tp=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");class np extends Jt{constructor(n,r,s){const i=(r?"int":"uint")+n*8;super(i,i,s,!1);J(this,"size");J(this,"signed");ge(this,{size:n,signed:r},{size:"number",signed:"boolean"})}defaultValue(){return 0}encode(n,r){let s=Kn(Je.dereference(r,this.type)),i=Ur(tp,He*8);if(this.signed){let o=Ur(i,this.size*8-1);(s>o||s<-(o+ep))&&this._throwError("value out-of-bounds",r),s=af(s,8*He)}else(s<Qf||s>Ur(i,this.size*8))&&this._throwError("value out-of-bounds",r);return n.writeValue(s)}decode(n){let r=Ur(n.readValue(),this.size*8);return this.signed&&(r=of(r,this.size*8)),r}}class rp extends Lc{constructor(e){super("string",e)}defaultValue(){return""}encode(e,n){return super.encode(e,$i(Je.dereference(n,"string")))}decode(e){return mf(super.decode(e))}}class Wr extends Jt{constructor(n,r){let s=!1;const i=[];n.forEach(a=>{a.dynamic&&(s=!0),i.push(a.type)});const o="tuple("+i.join(",")+")";super("tuple",o,r,s);J(this,"coders");ge(this,{coders:Object.freeze(n.slice())})}defaultValue(){const n=[];this.coders.forEach(s=>{n.push(s.defaultValue())});const r=this.coders.reduce((s,i)=>{const o=i.localName;return o&&(s[o]||(s[o]=0),s[o]++),s},{});return this.coders.forEach((s,i)=>{let o=s.localName;!o||r[o]!==1||(o==="length"&&(o="_length"),n[o]==null&&(n[o]=n[i]))}),Object.freeze(n)}encode(n,r){const s=Je.dereference(r,"tuple");return $c(n,this.coders,s)}decode(n){return Ic(n,this.coders)}}function vr(t){return sn($i(t))}function qe(t){const e=new Set;return t.forEach(n=>e.add(n)),Object.freeze(e)}const sp="external public payable override",ip=qe(sp.split(" ")),Rc="constant external internal payable private public pure view override",op=qe(Rc.split(" ")),Mc="constructor error event fallback function receive struct",Nc=qe(Mc.split(" ")),Uc="calldata memory storage payable indexed",ap=qe(Uc.split(" ")),cp="tuple returns",lp=[Mc,Uc,cp,Rc].join(" "),up=qe(lp.split(" ")),dp={"(":"OPEN_PAREN",")":"CLOSE_PAREN","[":"OPEN_BRACKET","]":"CLOSE_BRACKET",",":"COMMA","@":"AT"},fp=new RegExp("^(\\s*)"),pp=new RegExp("^([0-9]+)"),gp=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),Fc=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),Vc=new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");var Oe,at,Sr,ci;const ls=class ls{constructor(e){be(this,Sr);be(this,Oe);be(this,at);de(this,Oe,0),de(this,at,e.slice())}get offset(){return R(this,Oe)}get length(){return R(this,at).length-R(this,Oe)}clone(){return new ls(R(this,at))}reset(){de(this,Oe,0)}popKeyword(e){const n=this.peek();if(n.type!=="KEYWORD"||!e.has(n.text))throw new Error(`expected keyword ${n.text}`);return this.pop().text}popType(e){if(this.peek().type!==e){const n=this.peek();throw new Error(`expected ${e}; got ${n.type} ${JSON.stringify(n.text)}`)}return this.pop().text}popParen(){const e=this.peek();if(e.type!=="OPEN_PAREN")throw new Error("bad start");const n=he(this,Sr,ci).call(this,R(this,Oe)+1,e.match+1);return de(this,Oe,e.match+1),n}popParams(){const e=this.peek();if(e.type!=="OPEN_PAREN")throw new Error("bad start");const n=[];for(;R(this,Oe)<e.match-1;){const r=this.peek().linkNext;n.push(he(this,Sr,ci).call(this,R(this,Oe)+1,r)),de(this,Oe,r)}return de(this,Oe,e.match+1),n}peek(){if(R(this,Oe)>=R(this,at).length)throw new Error("out-of-bounds");return R(this,at)[R(this,Oe)]}peekKeyword(e){const n=this.peekType("KEYWORD");return n!=null&&e.has(n)?n:null}peekType(e){if(this.length===0)return null;const n=this.peek();return n.type===e?n.text:null}pop(){const e=this.peek();return Wi(this,Oe)._++,e}toString(){const e=[];for(let n=R(this,Oe);n<R(this,at).length;n++){const r=R(this,at)[n];e.push(`${r.type}:${r.text}`)}return`<TokenString ${e.join(" ")}>`}};Oe=new WeakMap,at=new WeakMap,Sr=new WeakSet,ci=function(e=0,n=0){return new ls(R(this,at).slice(e,n).map(r=>Object.freeze(Object.assign({},r,{match:r.match-e,linkBack:r.linkBack-e,linkNext:r.linkNext-e}))))};let ft=ls;function cn(t){const e=[],n=o=>{const a=i<t.length?JSON.stringify(t[i]):"$EOI";throw new Error(`invalid token ${a} at ${i}: ${o}`)};let r=[],s=[],i=0;for(;i<t.length;){let o=t.substring(i),a=o.match(fp);a&&(i+=a[1].length,o=t.substring(i));const c={depth:r.length,linkBack:-1,linkNext:-1,match:-1,type:"",text:"",offset:i,value:-1};e.push(c);let u=dp[o[0]]||"";if(u){if(c.type=u,c.text=o[0],i++,u==="OPEN_PAREN")r.push(e.length-1),s.push(e.length-1);else if(u=="CLOSE_PAREN")r.length===0&&n("no matching open bracket"),c.match=r.pop(),e[c.match].match=e.length-1,c.depth--,c.linkBack=s.pop(),e[c.linkBack].linkNext=e.length-1;else if(u==="COMMA")c.linkBack=s.pop(),e[c.linkBack].linkNext=e.length-1,s.push(e.length-1);else if(u==="OPEN_BRACKET")c.type="BRACKET";else if(u==="CLOSE_BRACKET"){let l=e.pop().text;if(e.length>0&&e[e.length-1].type==="NUMBER"){const d=e.pop().text;l=d+l,e[e.length-1].value=an(d)}if(e.length===0||e[e.length-1].type!=="BRACKET")throw new Error("missing opening bracket");e[e.length-1].text+=l}continue}if(a=o.match(gp),a){if(c.text=a[1],i+=c.text.length,up.has(c.text)){c.type="KEYWORD";continue}if(c.text.match(Vc)){c.type="TYPE";continue}c.type="ID";continue}if(a=o.match(pp),a){c.text=a[1],c.type="NUMBER",i+=c.text.length;continue}throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${i}`)}return new ft(e.map(o=>Object.freeze(o)))}function qo(t,e){let n=[];for(const r in e.keys())t.has(r)&&n.push(r);if(n.length>1)throw new Error(`conflicting types: ${n.join(", ")}`)}function Es(t,e){if(e.peekKeyword(Nc)){const n=e.pop().text;if(n!==t)throw new Error(`expected ${t}, got ${n}`)}return e.popType("ID")}function Kt(t,e){const n=new Set;for(;;){const r=t.peekType("KEYWORD");if(r==null||e&&!e.has(r))break;if(t.pop(),n.has(r))throw new Error(`duplicate keywords: ${JSON.stringify(r)}`);n.add(r)}return Object.freeze(n)}function Wc(t){let e=Kt(t,op);return qo(e,qe("constant payable nonpayable".split(" "))),qo(e,qe("pure view payable nonpayable".split(" "))),e.has("view")?"view":e.has("pure")?"pure":e.has("payable")?"payable":e.has("nonpayable")?"nonpayable":e.has("constant")?"view":"nonpayable"}function Wt(t,e){return t.popParams().map(n=>Ie.from(n,e))}function Hc(t){if(t.peekType("AT")){if(t.pop(),t.peekType("NUMBER"))return Kn(t.pop().text);throw new Error("invalid gas")}return null}function xn(t){if(t.length)throw new Error(`unexpected tokens at offset ${t.offset}: ${t.toString()}`)}const mp=new RegExp(/^(.*)\[([0-9]*)\]$/);function zo(t){const e=t.match(Vc);if(G(e,"invalid type","type",t),t==="uint")return"uint256";if(t==="int")return"int256";if(e[2]){const n=parseInt(e[2]);G(n!==0&&n<=32,"invalid bytes length","type",t)}else if(e[3]){const n=parseInt(e[3]);G(n!==0&&n<=256&&n%8===0,"invalid numeric width","type",t)}return t}const ye={},Xe=Symbol.for("_ethers_internal"),Go="_ParamTypeInternal",Ko="_ErrorInternal",jo="_EventInternal",Jo="_ConstructorInternal",Xo="_FallbackInternal",Yo="_FunctionInternal",Zo="_StructInternal";var Fn,Yr;const it=class it{constructor(e,n,r,s,i,o,a,c){be(this,Fn);J(this,"name");J(this,"type");J(this,"baseType");J(this,"indexed");J(this,"components");J(this,"arrayLength");J(this,"arrayChildren");if(Bi(e,ye,"ParamType"),Object.defineProperty(this,Xe,{value:Go}),o&&(o=Object.freeze(o.slice())),s==="array"){if(a==null||c==null)throw new Error("")}else if(a!=null||c!=null)throw new Error("");if(s==="tuple"){if(o==null)throw new Error("")}else if(o!=null)throw new Error("");ge(this,{name:n,type:r,baseType:s,indexed:i,components:o,arrayLength:a,arrayChildren:c})}format(e){if(e==null&&(e="sighash"),e==="json"){const r=this.name||"";if(this.isArray()){const i=JSON.parse(this.arrayChildren.format("json"));return i.name=r,i.type+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`,JSON.stringify(i)}const s={type:this.baseType==="tuple"?"tuple":this.type,name:r};return typeof this.indexed=="boolean"&&(s.indexed=this.indexed),this.isTuple()&&(s.components=this.components.map(i=>JSON.parse(i.format(e)))),JSON.stringify(s)}let n="";return this.isArray()?(n+=this.arrayChildren.format(e),n+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`):this.isTuple()?n+="("+this.components.map(r=>r.format(e)).join(e==="full"?", ":",")+")":n+=this.type,e!=="sighash"&&(this.indexed===!0&&(n+=" indexed"),e==="full"&&this.name&&(n+=" "+this.name)),n}isArray(){return this.baseType==="array"}isTuple(){return this.baseType==="tuple"}isIndexable(){return this.indexed!=null}walk(e,n){if(this.isArray()){if(!Array.isArray(e))throw new Error("invalid array value");if(this.arrayLength!==-1&&e.length!==this.arrayLength)throw new Error("array is wrong length");const r=this;return e.map(s=>r.arrayChildren.walk(s,n))}if(this.isTuple()){if(!Array.isArray(e))throw new Error("invalid tuple value");if(e.length!==this.components.length)throw new Error("array is wrong length");const r=this;return e.map((s,i)=>r.components[i].walk(s,n))}return n(this.type,e)}async walkAsync(e,n){const r=[],s=[e];return he(this,Fn,Yr).call(this,r,e,n,i=>{s[0]=i}),r.length&&await Promise.all(r),s[0]}static from(e,n){if(it.isParamType(e))return e;if(typeof e=="string")try{return it.from(cn(e),n)}catch{G(!1,"invalid param type","obj",e)}else if(e instanceof ft){let a="",c="",u=null;Kt(e,qe(["tuple"])).has("tuple")||e.peekType("OPEN_PAREN")?(c="tuple",u=e.popParams().map(C=>it.from(C)),a=`tuple(${u.map(C=>C.format()).join(",")})`):(a=zo(e.popType("TYPE")),c=a);let l=null,d=null;for(;e.length&&e.peekType("BRACKET");){const C=e.pop();l=new it(ye,"",a,c,null,u,d,l),d=C.value,a+=C.text,c="array",u=null}let _=null;if(Kt(e,ap).has("indexed")){if(!n)throw new Error("");_=!0}const S=e.peekType("ID")?e.pop().text:"";if(e.length)throw new Error("leftover tokens");return new it(ye,S,a,c,_,u,d,l)}const r=e.name;G(!r||typeof r=="string"&&r.match(Fc),"invalid name","obj.name",r);let s=e.indexed;s!=null&&(G(n,"parameter cannot be indexed","obj.indexed",e.indexed),s=!!s);let i=e.type,o=i.match(mp);if(o){const a=parseInt(o[2]||"-1"),c=it.from({type:o[1],components:e.components});return new it(ye,r||"",i,"array",s,null,a,c)}if(i==="tuple"||i.startsWith("tuple(")||i.startsWith("(")){const a=e.components!=null?e.components.map(u=>it.from(u)):null;return new it(ye,r||"",i,"tuple",s,a,null,null)}return i=zo(e.type),new it(ye,r||"",i,i,s,null,null,null)}static isParamType(e){return e&&e[Xe]===Go}};Fn=new WeakSet,Yr=function(e,n,r,s){if(this.isArray()){if(!Array.isArray(n))throw new Error("invalid array value");if(this.arrayLength!==-1&&n.length!==this.arrayLength)throw new Error("array is wrong length");const o=this.arrayChildren,a=n.slice();a.forEach((c,u)=>{var l;he(l=o,Fn,Yr).call(l,e,c,r,d=>{a[u]=d})}),s(a);return}if(this.isTuple()){const o=this.components;let a;if(Array.isArray(n))a=n.slice();else{if(n==null||typeof n!="object")throw new Error("invalid tuple value");a=o.map(c=>{if(!c.name)throw new Error("cannot use object value with unnamed components");if(!(c.name in n))throw new Error(`missing value for component ${c.name}`);return n[c.name]})}if(a.length!==this.components.length)throw new Error("array is wrong length");a.forEach((c,u)=>{var l;he(l=o[u],Fn,Yr).call(l,e,c,r,d=>{a[u]=d})}),s(a);return}const i=r(this.type,n);i.then?e.push(async function(){s(await i)}()):s(i)};let Ie=it;class Cn{constructor(e,n,r){J(this,"type");J(this,"inputs");Bi(e,ye,"Fragment"),r=Object.freeze(r.slice()),ge(this,{type:n,inputs:r})}static from(e){if(typeof e=="string"){try{Cn.from(JSON.parse(e))}catch{}return Cn.from(cn(e))}if(e instanceof ft)switch(e.peekKeyword(Nc)){case"constructor":return Ut.from(e);case"error":return je.from(e);case"event":return Ct.from(e);case"fallback":case"receive":return Lt.from(e);case"function":return St.from(e);case"struct":return wn.from(e)}else if(typeof e=="object"){switch(e.type){case"constructor":return Ut.from(e);case"error":return je.from(e);case"event":return Ct.from(e);case"fallback":case"receive":return Lt.from(e);case"function":return St.from(e);case"struct":return wn.from(e)}xe(!1,`unsupported type: ${e.type}`,"UNSUPPORTED_OPERATION",{operation:"Fragment.from"})}G(!1,"unsupported frgament object","obj",e)}static isConstructor(e){return Ut.isFragment(e)}static isError(e){return je.isFragment(e)}static isEvent(e){return Ct.isFragment(e)}static isFunction(e){return St.isFragment(e)}static isStruct(e){return wn.isFragment(e)}}class Ds extends Cn{constructor(n,r,s,i){super(n,r,i);J(this,"name");G(typeof s=="string"&&s.match(Fc),"invalid identifier","name",s),i=Object.freeze(i.slice()),ge(this,{name:s})}}function xr(t,e){return"("+e.map(n=>n.format(t)).join(t==="full"?", ":",")+")"}class je extends Ds{constructor(e,n,r){super(e,"error",n,r),Object.defineProperty(this,Xe,{value:Ko})}get selector(){return vr(this.format("sighash")).substring(0,10)}format(e){if(e==null&&(e="sighash"),e==="json")return JSON.stringify({type:"error",name:this.name,inputs:this.inputs.map(r=>JSON.parse(r.format(e)))});const n=[];return e!=="sighash"&&n.push("error"),n.push(this.name+xr(e,this.inputs)),n.join(" ")}static from(e){if(je.isFragment(e))return e;if(typeof e=="string")return je.from(cn(e));if(e instanceof ft){const n=Es("error",e),r=Wt(e);return xn(e),new je(ye,n,r)}return new je(ye,e.name,e.inputs?e.inputs.map(Ie.from):[])}static isFragment(e){return e&&e[Xe]===Ko}}class Ct extends Ds{constructor(n,r,s,i){super(n,"event",r,s);J(this,"anonymous");Object.defineProperty(this,Xe,{value:jo}),ge(this,{anonymous:i})}get topicHash(){return vr(this.format("sighash"))}format(n){if(n==null&&(n="sighash"),n==="json")return JSON.stringify({type:"event",anonymous:this.anonymous,name:this.name,inputs:this.inputs.map(s=>JSON.parse(s.format(n)))});const r=[];return n!=="sighash"&&r.push("event"),r.push(this.name+xr(n,this.inputs)),n!=="sighash"&&this.anonymous&&r.push("anonymous"),r.join(" ")}static getTopicHash(n,r){return r=(r||[]).map(i=>Ie.from(i)),new Ct(ye,n,r,!1).topicHash}static from(n){if(Ct.isFragment(n))return n;if(typeof n=="string")try{return Ct.from(cn(n))}catch{G(!1,"invalid event fragment","obj",n)}else if(n instanceof ft){const r=Es("event",n),s=Wt(n,!0),i=!!Kt(n,qe(["anonymous"])).has("anonymous");return xn(n),new Ct(ye,r,s,i)}return new Ct(ye,n.name,n.inputs?n.inputs.map(r=>Ie.from(r,!0)):[],!!n.anonymous)}static isFragment(n){return n&&n[Xe]===jo}}class Ut extends Cn{constructor(n,r,s,i,o){super(n,r,s);J(this,"payable");J(this,"gas");Object.defineProperty(this,Xe,{value:Jo}),ge(this,{payable:i,gas:o})}format(n){if(xe(n!=null&&n!=="sighash","cannot format a constructor for sighash","UNSUPPORTED_OPERATION",{operation:"format(sighash)"}),n==="json")return JSON.stringify({type:"constructor",stateMutability:this.payable?"payable":"undefined",payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(s=>JSON.parse(s.format(n)))});const r=[`constructor${xr(n,this.inputs)}`];return this.payable&&r.push("payable"),this.gas!=null&&r.push(`@${this.gas.toString()}`),r.join(" ")}static from(n){if(Ut.isFragment(n))return n;if(typeof n=="string")try{return Ut.from(cn(n))}catch{G(!1,"invalid constuctor fragment","obj",n)}else if(n instanceof ft){Kt(n,qe(["constructor"]));const r=Wt(n),s=!!Kt(n,ip).has("payable"),i=Hc(n);return xn(n),new Ut(ye,"constructor",r,s,i)}return new Ut(ye,"constructor",n.inputs?n.inputs.map(Ie.from):[],!!n.payable,n.gas!=null?n.gas:null)}static isFragment(n){return n&&n[Xe]===Jo}}class Lt extends Cn{constructor(n,r,s){super(n,"fallback",r);J(this,"payable");Object.defineProperty(this,Xe,{value:Xo}),ge(this,{payable:s})}format(n){const r=this.inputs.length===0?"receive":"fallback";if(n==="json"){const s=this.payable?"payable":"nonpayable";return JSON.stringify({type:r,stateMutability:s})}return`${r}()${this.payable?" payable":""}`}static from(n){if(Lt.isFragment(n))return n;if(typeof n=="string")try{return Lt.from(cn(n))}catch{G(!1,"invalid fallback fragment","obj",n)}else if(n instanceof ft){const r=n.toString(),s=n.peekKeyword(qe(["fallback","receive"]));if(G(s,"type must be fallback or receive","obj",r),n.popKeyword(qe(["fallback","receive"]))==="receive"){const c=Wt(n);return G(c.length===0,"receive cannot have arguments","obj.inputs",c),Kt(n,qe(["payable"])),xn(n),new Lt(ye,[],!0)}let o=Wt(n);o.length?G(o.length===1&&o[0].type==="bytes","invalid fallback inputs","obj.inputs",o.map(c=>c.format("minimal")).join(", ")):o=[Ie.from("bytes")];const a=Wc(n);if(G(a==="nonpayable"||a==="payable","fallback cannot be constants","obj.stateMutability",a),Kt(n,qe(["returns"])).has("returns")){const c=Wt(n);G(c.length===1&&c[0].type==="bytes","invalid fallback outputs","obj.outputs",c.map(u=>u.format("minimal")).join(", "))}return xn(n),new Lt(ye,o,a==="payable")}if(n.type==="receive")return new Lt(ye,[],!0);if(n.type==="fallback"){const r=[Ie.from("bytes")],s=n.stateMutability==="payable";return new Lt(ye,r,s)}G(!1,"invalid fallback description","obj",n)}static isFragment(n){return n&&n[Xe]===Xo}}class St extends Ds{constructor(n,r,s,i,o,a){super(n,"function",r,i);J(this,"constant");J(this,"outputs");J(this,"stateMutability");J(this,"payable");J(this,"gas");Object.defineProperty(this,Xe,{value:Yo}),o=Object.freeze(o.slice()),ge(this,{constant:s==="view"||s==="pure",gas:a,outputs:o,payable:s==="payable",stateMutability:s})}get selector(){return vr(this.format("sighash")).substring(0,10)}format(n){if(n==null&&(n="sighash"),n==="json")return JSON.stringify({type:"function",name:this.name,constant:this.constant,stateMutability:this.stateMutability!=="nonpayable"?this.stateMutability:void 0,payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(s=>JSON.parse(s.format(n))),outputs:this.outputs.map(s=>JSON.parse(s.format(n)))});const r=[];return n!=="sighash"&&r.push("function"),r.push(this.name+xr(n,this.inputs)),n!=="sighash"&&(this.stateMutability!=="nonpayable"&&r.push(this.stateMutability),this.outputs&&this.outputs.length&&(r.push("returns"),r.push(xr(n,this.outputs))),this.gas!=null&&r.push(`@${this.gas.toString()}`)),r.join(" ")}static getSelector(n,r){return r=(r||[]).map(i=>Ie.from(i)),new St(ye,n,"view",r,[],null).selector}static from(n){if(St.isFragment(n))return n;if(typeof n=="string")try{return St.from(cn(n))}catch{G(!1,"invalid function fragment","obj",n)}else if(n instanceof ft){const s=Es("function",n),i=Wt(n),o=Wc(n);let a=[];Kt(n,qe(["returns"])).has("returns")&&(a=Wt(n));const c=Hc(n);return xn(n),new St(ye,s,o,i,a,c)}let r=n.stateMutability;return r==null&&(r="payable",typeof n.constant=="boolean"?(r="view",n.constant||(r="payable",typeof n.payable=="boolean"&&!n.payable&&(r="nonpayable"))):typeof n.payable=="boolean"&&!n.payable&&(r="nonpayable")),new St(ye,n.name,r,n.inputs?n.inputs.map(Ie.from):[],n.outputs?n.outputs.map(Ie.from):[],n.gas!=null?n.gas:null)}static isFragment(n){return n&&n[Xe]===Yo}}class wn extends Ds{constructor(e,n,r){super(e,"struct",n,r),Object.defineProperty(this,Xe,{value:Zo})}format(){throw new Error("@TODO")}static from(e){if(typeof e=="string")try{return wn.from(cn(e))}catch{G(!1,"invalid struct fragment","obj",e)}else if(e instanceof ft){const n=Es("struct",e),r=Wt(e);return xn(e),new wn(ye,n,r)}return new wn(ye,e.name,e.inputs?e.inputs.map(Ie.from):[])}static isFragment(e){return e&&e[Xe]===Zo}}const pt=new Map;pt.set(0,"GENERIC_PANIC");pt.set(1,"ASSERT_FALSE");pt.set(17,"OVERFLOW");pt.set(18,"DIVIDE_BY_ZERO");pt.set(33,"ENUM_RANGE_ERROR");pt.set(34,"BAD_STORAGE_DATA");pt.set(49,"STACK_UNDERFLOW");pt.set(50,"ARRAY_RANGE_ERROR");pt.set(65,"OUT_OF_MEMORY");pt.set(81,"UNINITIALIZED_FUNCTION_CALL");const hp=new RegExp(/^bytes([0-9]*)$/),yp=new RegExp(/^(u?int)([0-9]*)$/);let Ws=null,Qo=1024;function bp(t,e,n,r){let s="missing revert data",i=null;const o=null;let a=null;if(n){s="execution reverted";const u=Gt(n);if(n=Ae(n),u.length===0)s+=" (no data present; likely require(false) occurred",i="require(false)";else if(u.length%32!==4)s+=" (could not decode reason; invalid data length)";else if(Ae(u.slice(0,4))==="0x08c379a0")try{i=r.decode(["string"],u.slice(4))[0],a={signature:"Error(string)",name:"Error",args:[i]},s+=`: ${JSON.stringify(i)}`}catch{s+=" (could not decode reason; invalid string data)"}else if(Ae(u.slice(0,4))==="0x4e487b71")try{const l=Number(r.decode(["uint256"],u.slice(4))[0]);a={signature:"Panic(uint256)",name:"Panic",args:[l]},i=`Panic due to ${pt.get(l)||"UNKNOWN"}(${l})`,s+=`: ${i}`}catch{s+=" (could not decode panic code)"}else s+=" (unknown custom error)"}const c={to:e.to?wr(e.to):null,data:e.data||"0x"};return e.from&&(c.from=wr(e.from)),hc(s,"CALL_EXCEPTION",{action:t,data:n,reason:i,transaction:c,invocation:o,revert:a})}var tn,Pn;const us=class us{constructor(){be(this,tn)}getDefaultValue(e){const n=e.map(s=>he(this,tn,Pn).call(this,Ie.from(s)));return new Wr(n,"_").defaultValue()}encode(e,n){yc(n.length,e.length,"types/values length mismatch");const r=e.map(o=>he(this,tn,Pn).call(this,Ie.from(o))),s=new Wr(r,"_"),i=new ii;return s.encode(i,n),i.data}decode(e,n,r){const s=e.map(o=>he(this,tn,Pn).call(this,Ie.from(o)));return new Wr(s,"_").decode(new oi(n,r,Qo))}static _setDefaultMaxInflation(e){G(typeof e=="number"&&Number.isInteger(e),"invalid defaultMaxInflation factor","value",e),Qo=e}static defaultAbiCoder(){return Ws==null&&(Ws=new us),Ws}static getBuiltinCallException(e,n,r){return bp(e,n,r,us.defaultAbiCoder())}};tn=new WeakSet,Pn=function(e){if(e.isArray())return new Kf(he(this,tn,Pn).call(this,e.arrayChildren),e.arrayLength,e.name);if(e.isTuple())return new Wr(e.components.map(r=>he(this,tn,Pn).call(this,r)),e.name);switch(e.baseType){case"address":return new zf(e.name);case"bool":return new jf(e.name);case"string":return new rp(e.name);case"bytes":return new Jf(e.name);case"":return new Zf(e.name)}let n=e.type.match(yp);if(n){let r=parseInt(n[2]||"256");return G(r!==0&&r<=256&&r%8===0,"invalid "+n[1]+" bit length","param",e),new np(r/8,n[1]==="int",e.name)}if(n=e.type.match(hp),n){let r=parseInt(n[1]);return G(r!==0&&r<=32,"invalid bytes length","param",e),new Xf(r,e.name)}G(!1,"invalid type","type",e.type)};let Cr=us;class _p{constructor(e,n,r){J(this,"fragment");J(this,"name");J(this,"signature");J(this,"topic");J(this,"args");const s=e.name,i=e.format();ge(this,{fragment:e,name:s,signature:i,topic:n,args:r})}}class wp{constructor(e,n,r,s){J(this,"fragment");J(this,"name");J(this,"args");J(this,"signature");J(this,"selector");J(this,"value");const i=e.name,o=e.format();ge(this,{fragment:e,name:i,args:r,signature:o,selector:n,value:s})}}class vp{constructor(e,n,r){J(this,"fragment");J(this,"name");J(this,"args");J(this,"signature");J(this,"selector");const s=e.name,i=e.format();ge(this,{fragment:e,name:s,args:r,signature:i,selector:n})}}class ea{constructor(e){J(this,"hash");J(this,"_isIndexed");ge(this,{hash:e,_isIndexed:!0})}static isIndexed(e){return!!(e&&e._isIndexed)}}const ta={0:"generic panic",1:"assert(false)",17:"arithmetic overflow",18:"division or modulo by zero",33:"enum overflow",34:"invalid encoded storage byte array accessed",49:"out-of-bounds array access; popping on an empty array",50:"out-of-bounds access of an array or bytesN",65:"out of memory",81:"uninitialized function"},na={"0x08c379a0":{signature:"Error(string)",name:"Error",inputs:["string"],reason:t=>`reverted with reason string ${JSON.stringify(t)}`},"0x4e487b71":{signature:"Panic(uint256)",name:"Panic",inputs:["uint256"],reason:t=>{let e="unknown panic code";return t>=0&&t<=255&&ta[t.toString()]&&(e=ta[t.toString()]),`reverted with panic code 0x${t.toString(16)} (${e})`}}};var _t,wt,vt,Re,Tt,Zr,Qr;const pn=class pn{constructor(e){be(this,Tt);J(this,"fragments");J(this,"deploy");J(this,"fallback");J(this,"receive");be(this,_t);be(this,wt);be(this,vt);be(this,Re);let n=[];typeof e=="string"?n=JSON.parse(e):n=e,de(this,vt,new Map),de(this,_t,new Map),de(this,wt,new Map);const r=[];for(const o of n)try{r.push(Cn.from(o))}catch(a){console.log(`[Warning] Invalid Fragment ${JSON.stringify(o)}:`,a.message)}ge(this,{fragments:Object.freeze(r)});let s=null,i=!1;de(this,Re,this.getAbiCoder()),this.fragments.forEach((o,a)=>{let c;switch(o.type){case"constructor":if(this.deploy){console.log("duplicate definition - constructor");return}ge(this,{deploy:o});return;case"fallback":o.inputs.length===0?i=!0:(G(!s||o.payable!==s.payable,"conflicting fallback fragments",`fragments[${a}]`,o),s=o,i=s.payable);return;case"function":c=R(this,vt);break;case"event":c=R(this,wt);break;case"error":c=R(this,_t);break;default:return}const u=o.format();c.has(u)||c.set(u,o)}),this.deploy||ge(this,{deploy:Ut.from("constructor()")}),ge(this,{fallback:s,receive:i})}format(e){const n=e?"minimal":"full";return this.fragments.map(s=>s.format(n))}formatJson(){const e=this.fragments.map(n=>n.format("json"));return JSON.stringify(e.map(n=>JSON.parse(n)))}getAbiCoder(){return Cr.defaultAbiCoder()}getFunctionName(e){const n=he(this,Tt,Zr).call(this,e,null,!1);return G(n,"no matching function","key",e),n.name}hasFunction(e){return!!he(this,Tt,Zr).call(this,e,null,!1)}getFunction(e,n){return he(this,Tt,Zr).call(this,e,n||null,!0)}forEachFunction(e){const n=Array.from(R(this,vt).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(R(this,vt).get(s),r)}}getEventName(e){const n=he(this,Tt,Qr).call(this,e,null,!1);return G(n,"no matching event","key",e),n.name}hasEvent(e){return!!he(this,Tt,Qr).call(this,e,null,!1)}getEvent(e,n){return he(this,Tt,Qr).call(this,e,n||null,!0)}forEachEvent(e){const n=Array.from(R(this,wt).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(R(this,wt).get(s),r)}}getError(e,n){if(Nr(e)){const s=e.toLowerCase();if(na[s])return je.from(na[s].signature);for(const i of R(this,_t).values())if(s===i.selector)return i;return null}if(e.indexOf("(")===-1){const s=[];for(const[i,o]of R(this,_t))i.split("(")[0]===e&&s.push(o);if(s.length===0)return e==="Error"?je.from("error Error(string)"):e==="Panic"?je.from("error Panic(uint256)"):null;if(s.length>1){const i=s.map(o=>JSON.stringify(o.format())).join(", ");G(!1,`ambiguous error description (i.e. ${i})`,"name",e)}return s[0]}if(e=je.from(e).format(),e==="Error(string)")return je.from("error Error(string)");if(e==="Panic(uint256)")return je.from("error Panic(uint256)");const r=R(this,_t).get(e);return r||null}forEachError(e){const n=Array.from(R(this,_t).keys());n.sort((r,s)=>r.localeCompare(s));for(let r=0;r<n.length;r++){const s=n[r];e(R(this,_t).get(s),r)}}_decodeParams(e,n){return R(this,Re).decode(e,n)}_encodeParams(e,n){return R(this,Re).encode(e,n)}encodeDeploy(e){return this._encodeParams(this.deploy.inputs,e||[])}decodeErrorResult(e,n){if(typeof e=="string"){const r=this.getError(e);G(r,"unknown error","fragment",e),e=r}return G(En(n,0,4)===e.selector,`data signature does not match error ${e.name}.`,"data",n),this._decodeParams(e.inputs,En(n,4))}encodeErrorResult(e,n){if(typeof e=="string"){const r=this.getError(e);G(r,"unknown error","fragment",e),e=r}return Mn([e.selector,this._encodeParams(e.inputs,n||[])])}decodeFunctionData(e,n){if(typeof e=="string"){const r=this.getFunction(e);G(r,"unknown function","fragment",e),e=r}return G(En(n,0,4)===e.selector,`data signature does not match function ${e.name}.`,"data",n),this._decodeParams(e.inputs,En(n,4))}encodeFunctionData(e,n){if(typeof e=="string"){const r=this.getFunction(e);G(r,"unknown function","fragment",e),e=r}return Mn([e.selector,this._encodeParams(e.inputs,n||[])])}decodeFunctionResult(e,n){if(typeof e=="string"){const i=this.getFunction(e);G(i,"unknown function","fragment",e),e=i}let r="invalid length for result data";const s=At(n);if(s.length%32===0)try{return R(this,Re).decode(e.outputs,s)}catch{r="could not decode result data"}xe(!1,r,"BAD_DATA",{value:Ae(s),info:{method:e.name,signature:e.format()}})}makeError(e,n){const r=Gt(e,"data"),s=Cr.getBuiltinCallException("call",n,r);if(s.message.startsWith("execution reverted (unknown custom error)")){const a=Ae(r.slice(0,4)),c=this.getError(a);if(c)try{const u=R(this,Re).decode(c.inputs,r.slice(4));s.revert={name:c.name,signature:c.format(),args:u},s.reason=s.revert.signature,s.message=`execution reverted: ${s.reason}`}catch{s.message="execution reverted (coult not decode custom error)"}}const o=this.parseTransaction(n);return o&&(s.invocation={method:o.name,signature:o.signature,args:o.args}),s}encodeFunctionResult(e,n){if(typeof e=="string"){const r=this.getFunction(e);G(r,"unknown function","fragment",e),e=r}return Ae(R(this,Re).encode(e.outputs,n||[]))}encodeFilterTopics(e,n){if(typeof e=="string"){const i=this.getEvent(e);G(i,"unknown event","eventFragment",e),e=i}xe(n.length<=e.inputs.length,`too many arguments for ${e.format()}`,"UNEXPECTED_ARGUMENT",{count:n.length,expectedCount:e.inputs.length});const r=[];e.anonymous||r.push(e.topicHash);const s=(i,o)=>i.type==="string"?vr(o):i.type==="bytes"?sn(Ae(o)):(i.type==="bool"&&typeof o=="boolean"?o=o?"0x01":"0x00":i.type.match(/^u?int/)?o=vc(o):i.type.match(/^bytes/)?o=sf(o,32):i.type==="address"&&R(this,Re).encode(["address"],[o]),rf(Ae(o),32));for(n.forEach((i,o)=>{const a=e.inputs[o];if(!a.indexed){G(i==null,"cannot filter non-indexed parameters; must be null","contract."+a.name,i);return}i==null?r.push(null):a.baseType==="array"||a.baseType==="tuple"?G(!1,"filtering with tuples or arrays not supported","contract."+a.name,i):Array.isArray(i)?r.push(i.map(c=>s(a,c))):r.push(s(a,i))});r.length&&r[r.length-1]===null;)r.pop();return r}encodeEventLog(e,n){if(typeof e=="string"){const o=this.getEvent(e);G(o,"unknown event","eventFragment",e),e=o}const r=[],s=[],i=[];return e.anonymous||r.push(e.topicHash),G(n.length===e.inputs.length,"event arguments/values mismatch","values",n),e.inputs.forEach((o,a)=>{const c=n[a];if(o.indexed)if(o.type==="string")r.push(vr(c));else if(o.type==="bytes")r.push(sn(c));else{if(o.baseType==="tuple"||o.baseType==="array")throw new Error("not implemented");r.push(R(this,Re).encode([o.type],[c]))}else s.push(o),i.push(c)}),{data:R(this,Re).encode(s,i),topics:r}}decodeEventLog(e,n,r){if(typeof e=="string"){const m=this.getEvent(e);G(m,"unknown event","eventFragment",e),e=m}if(r!=null&&!e.anonymous){const m=e.topicHash;G(Nr(r[0],32)&&r[0].toLowerCase()===m,"fragment/topic mismatch","topics[0]",r[0]),r=r.slice(1)}const s=[],i=[],o=[];e.inputs.forEach((m,S)=>{m.indexed?m.type==="string"||m.type==="bytes"||m.baseType==="tuple"||m.baseType==="array"?(s.push(Ie.from({type:"bytes32",name:m.name})),o.push(!0)):(s.push(m),o.push(!1)):(i.push(m),o.push(!1))});const a=r!=null?R(this,Re).decode(s,Mn(r)):null,c=R(this,Re).decode(i,n,!0),u=[],l=[];let d=0,_=0;return e.inputs.forEach((m,S)=>{let C=null;if(m.indexed)if(a==null)C=new ea(null);else if(o[S])C=new ea(a[_++]);else try{C=a[_++]}catch(N){C=N}else try{C=c[d++]}catch(N){C=N}u.push(C),l.push(m.name||null)}),Gn.fromItems(u,l)}parseTransaction(e){const n=Gt(e.data,"tx.data"),r=Kn(e.value!=null?e.value:0,"tx.value"),s=this.getFunction(Ae(n.slice(0,4)));if(!s)return null;const i=R(this,Re).decode(s.inputs,n.slice(4));return new wp(s,s.selector,i,r)}parseCallResult(e){throw new Error("@TODO")}parseLog(e){const n=this.getEvent(e.topics[0]);return!n||n.anonymous?null:new _p(n,n.topicHash,this.decodeEventLog(n,e.data,e.topics))}parseError(e){const n=Ae(e),r=this.getError(En(n,0,4));if(!r)return null;const s=R(this,Re).decode(r.inputs,En(n,4));return new vp(r,r.selector,s)}static from(e){return e instanceof pn?e:typeof e=="string"?new pn(JSON.parse(e)):typeof e.formatJson=="function"?new pn(e.formatJson()):typeof e.format=="function"?new pn(e.format("json")):new pn(e)}};_t=new WeakMap,wt=new WeakMap,vt=new WeakMap,Re=new WeakMap,Tt=new WeakSet,Zr=function(e,n,r){if(Nr(e)){const i=e.toLowerCase();for(const o of R(this,vt).values())if(i===o.selector)return o;return null}if(e.indexOf("(")===-1){const i=[];for(const[o,a]of R(this,vt))o.split("(")[0]===e&&i.push(a);if(n){const o=n.length>0?n[n.length-1]:null;let a=n.length,c=!0;Je.isTyped(o)&&o.type==="overrides"&&(c=!1,a--);for(let u=i.length-1;u>=0;u--){const l=i[u].inputs.length;l!==a&&(!c||l!==a-1)&&i.splice(u,1)}for(let u=i.length-1;u>=0;u--){const l=i[u].inputs;for(let d=0;d<n.length;d++)if(Je.isTyped(n[d])){if(d>=l.length){if(n[d].type==="overrides")continue;i.splice(u,1);break}if(n[d].type!==l[d].baseType){i.splice(u,1);break}}}}if(i.length===1&&n&&n.length!==i[0].inputs.length){const o=n[n.length-1];(o==null||Array.isArray(o)||typeof o!="object")&&i.splice(0,1)}if(i.length===0)return null;if(i.length>1&&r){const o=i.map(a=>JSON.stringify(a.format())).join(", ");G(!1,`ambiguous function description (i.e. matches ${o})`,"key",e)}return i[0]}const s=R(this,vt).get(St.from(e).format());return s||null},Qr=function(e,n,r){if(Nr(e)){const i=e.toLowerCase();for(const o of R(this,wt).values())if(i===o.topicHash)return o;return null}if(e.indexOf("(")===-1){const i=[];for(const[o,a]of R(this,wt))o.split("(")[0]===e&&i.push(a);if(n){for(let o=i.length-1;o>=0;o--)i[o].inputs.length<n.length&&i.splice(o,1);for(let o=i.length-1;o>=0;o--){const a=i[o].inputs;for(let c=0;c<n.length;c++)if(Je.isTyped(n[c])&&n[c].type!==a[c].baseType){i.splice(o,1);break}}}if(i.length===0)return null;if(i.length>1&&r){const o=i.map(a=>JSON.stringify(a.format())).join(", ");G(!1,`ambiguous event description (i.e. matches ${o})`,"key",e)}return i[0]}const s=R(this,wt).get(Ct.from(e).format());return s||null};let li=pn;function xp(){st();const t=Ye(),e=Te(),n=K({}),r=K({}),s=K(0),i=K("0xAb5801a7D398351b8bE11C439e05C5B9ebB6AA0c"),o=K(new Set),a={weapon:"0x1234567890123456789012345678901234567890",achievement:"0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"},c=K({weapon:{},achievement:{}}),u=(p,h)=>!p||!h?{success:!1,message:"❌ 请输入名称和头像！",hints:[],nextStep:"👉 填写名称和头像后点击保存",error:"EMPTY_INPUT"}:(n.value[i.value]={name:p,avatar:h},e.addLog(16,"设置资料",`名称: ${p}, 头像: ${h}`,"setProfile16"),{success:!0,message:"✅ 资料已保存！",hints:["mapping_storage"],nextStep:"🗺️ 你的资料已保存到 mapping！👉 注册 weapon 插件来学习插件系统！"}),l=p=>{const h=n.value[p];return e.addLog(16,"查询资料",`地址: ${M(p)}`),h||{name:"",avatar:""}},d=(p,h)=>{if(!p||!h)return{success:!1,message:"❌ 请输入插件标识符和地址！",hints:[],nextStep:"👉 填写插件标识符和合约地址",error:"EMPTY_INPUT"};if(r.value[p])return{success:!1,message:`❌ 插件 "${p}" 已存在！`,hints:[],nextStep:"👉 使用其他标识符或先注销现有插件",error:"PLUGIN_EXISTS"};r.value[p]=h,s.value++,e.addLog(16,"注册插件",`标识: ${p}, 地址: ${M(h)}`,"registerPlugin16");const w=["plugin_registration"];let D=`🔌 插件 "${p}" 注册成功！👉 点击「调用」执行插件函数！`;return s.value>=2&&(w.push("dynamic_delegation"),D="🔄 动态委托系统运行中！👉 在不同插件间切换体验互操作！"),{success:!0,message:`✅ 插件 "${p}" 注册成功！`,hints:w,nextStep:D,registeredAddress:h}},_=p=>r.value[p]||"",m=(p,h,w)=>{try{const D=p.split("(")[0],g=new li([`function ${p}`]).getFunction(D).selector,A=new Cr,T=wr(h),L=p.includes("string"),Q=L?["address","string"]:["address"],ne=L?[T,w||""]:[T],me=A.encode(Q,ne),W=g+me.slice(2),P=[{type:"selector",value:g,desc:"函数选择器 (4 bytes)",detail:`keccak256("${p}").slice(0,10)`},{type:"address",value:T,desc:"address 参数",detail:"zero-padded to 32 bytes"}];if(L){const H=w||"";P.push({type:"offset",value:"0x0000000000000000000000000000000000000000000000000000000000000040",desc:"string 偏移量 (64 bytes)"},{type:"length",value:"0x"+H.length.toString(16).padStart(64,"0"),desc:`string 长度 (${H.length})`},{type:"data",value:Ae($i(H)).slice(2).padEnd(64,"0"),desc:"string 数据 (padded)",detail:`"${H}"`})}return{selector:g,encodedParams:"0x"+me.slice(2),fullEncodedData:W,breakdown:P}}catch(D){return console.error("ABI编码错误:",D),console.error("参数:",{functionSignature:p,user:h,argument:w}),null}},S=(p,h,w,D)=>{if(!r.value[p])return{success:!1,message:`❌ 插件 "${p}" 未注册！`,hints:[],nextStep:`👉 先点击「插件管理中心」注册 ${p} 插件！`,error:"PLUGIN_NOT_REGISTERED"};const v=m(h,w,D);if(!v)return{success:!1,message:"❌ ABI编码失败！",hints:[],nextStep:"👉 检查函数签名格式，例如: setWeapon(address,string)",error:"ABI_ENCODE_FAILED"};if(Math.random()<.1)return{success:!1,message:"❌ 插件调用失败！（演示错误场景）",hints:[],nextStep:"👉 可能是 Gas 不足或函数 revert。检查参数是否满足插件要求。",error:"CALL_FAILED"};const g=h.split("(")[0];c.value[p]||(c.value[p]={}),c.value[p][w]=D,o.value.add(p),e.addLog(16,"执行插件",`插件: ${p}, 函数: ${g}, 参数: ${D}`,"runPlugin16");const A=["low_level_call","abi_encoding"];let T="⚡ 低级别调用成功！👉 查看 ABI 编码可视化或切换 staticcall 模式查询数据！";return o.value.size>=2&&(A.push("contract_interop"),T="🌐 合约互操作掌握！👉 查看完整代码了解所有实现细节！"),{success:!0,message:`✅ 调用 ${p}.${g} 成功！`,hints:A,nextStep:T,encoded:v.breakdown}},C=(p,h,w)=>{var g;if(!r.value[p])return{success:!1,message:`❌ 插件 "${p}" 未注册！`,hints:[],nextStep:`👉 先注册 ${p} 插件！`,error:"PLUGIN_NOT_REGISTERED"};const D=h.split("(")[0],v=((g=c.value[p])==null?void 0:g[w])||"";return e.addLog(16,"查询插件",`插件: ${p}, 函数: ${D}, 返回值: ${v||"(空)"}`),{success:!0,message:`✅ 查询 ${p}.${D} 成功！`,hints:["staticcall"],nextStep:v?`👁️ 返回值: "${v}" 👉 尝试切换到其他插件！`:"👁️ 查询成功但无数据 👉 先用 call 模式写入数据！",result:v}},N=(p,h)=>{var w;return((w=c.value[p])==null?void 0:w[h])||""},M=p=>!p||p.length<10?p:p.slice(0,6)+"..."+p.slice(-4),b=p=>{t.unlockConcept(16,p)},k=x(()=>({gasUsage:e.getDayGasUsage(16),ethCost:e.getDayEthCost(16),operationCount:e.getDayOperationCount(16)}));return{profiles:n,plugins:r,pluginCounter:s,currentUser:i,pluginData:c,interactedPlugins:o,predefinedPlugins:a,setProfile:u,getProfile:l,registerPlugin:d,getPlugin:_,runPlugin:S,runPluginView:C,getPluginData:N,encodeFunctionCall:m,unlockConcept:b,shortenAddress:M,realtimeData:k}}function Cp(){const t=st(),e=Ye(),n=Te();t.contracts.day17;const r=K("owner"),s=K("V1"),i=K(!1),o=K(!1),a=K(!1),c=K([]),u=K(1),l=K(.1),d=K(30),_=K(1),m=K(null),S=K("0xV1LogicContractAddress"),C=K("0xOwnerAddress"),N=x(()=>c.value.length),M=x(()=>m.value?1:0),b=x(()=>m.value!==null),k=x(()=>{const P=c.value.find(H=>H.id===_.value);return P?P.price:0}),p=x(()=>!m.value||!m.value.paused?0:m.value.expiry),h=x(()=>{if(!m.value)return"未订阅";if(m.value.paused)return"已暂停";const P=Math.floor(Date.now()/1e3);return m.value.expiry>P?"有效":"已过期"}),w=x(()=>{if(!m.value)return"status-inactive";if(m.value.paused)return"status-paused";const P=Math.floor(Date.now()/1e3);return m.value.expiry>P?"status-active":"status-expired"}),D=()=>{const P=u.value,H=parseFloat(l.value),Se=d.value*24*60*60;return c.value.find(Ee=>Ee.id===P)?{success:!1,message:"❌ 计划 ID 已存在",hints:[],nextStep:""}:(c.value.push({id:P,price:H,duration:Se,durationDays:d.value}),_.value=P,n.addLog(17,"创建计划",`计划 ${P}: ${H} ETH, ${d.value}天`,"createPlan17"),e.incrementInteraction(17),c.value.length===1?{success:!0,message:`✅ 计划 ${P} 创建成功！存储在 planPrices[${P}] 中！`,hints:[],nextStep:"📊 再创建 1 个计划即可解锁升级功能！👉 创建第2个计划！"}:{success:!0,message:`✅ 计划 ${P} 创建成功！`,hints:[],nextStep:'🎉 现在可以升级到 V2 了！👉 点击"升级到 V2"按钮，体验合约升级！'})},v=()=>i.value?{success:!1,message:"❌ 合约已经升级过了",hints:[],nextStep:""}:c.value.length<2?{success:!1,message:"❌ 需要至少 2 个计划才能升级",hints:[],nextStep:`💡 当前只有 ${c.value.length} 个计划，请再创建 ${2-c.value.length} 个！`}:(o.value=!0,setTimeout(()=>{i.value=!0,s.value="V2",S.value="0xV2LogicContractAddress",a.value=!0,o.value=!1,setTimeout(()=>{a.value=!1},3e3)},1e3),n.addLog(17,"升级合约","V1 → V2","upgradeTo17"),e.incrementInteraction(17),e.unlockConcept(17,"upgrade_mechanism"),e.unlockConcept(17,"logic_contract"),{success:!0,message:"🚀 合约已升级到 V2！逻辑合约地址已更新！",hints:["upgrade_mechanism","logic_contract"],nextStep:"⚡ 恭喜解锁：升级机制 + 逻辑合约！👉 切换到 User 身份，执行订阅操作！"}),g=()=>i.value?(s.value="V1",S.value="0xV1LogicContractAddress",{success:!0,message:"⚙️ 已切换到 V1 逻辑合约",hints:[],nextStep:""}):{success:!1,message:"❌ 合约尚未升级",hints:[],nextStep:""},A=()=>i.value?(s.value="V2",S.value="0xV2LogicContractAddress",{success:!0,message:"⚡ 已切换到 V2 逻辑合约",hints:[],nextStep:""}):{success:!1,message:"❌ 合约尚未升级",hints:[],nextStep:""},T=()=>{const P=_.value,H=c.value.find(Fe=>Fe.id===P);if(!H)return{success:!1,message:"❌ 计划不存在",hints:[],nextStep:""};const ke=Math.floor(Date.now()/1e3)+H.duration;return m.value={planId:P,expiry:ke,paused:!1},n.addLog(17,"订阅计划",`计划 ${P}: ${H.price} ETH`,"subscribe17"),e.incrementInteraction(17),e.getDayProgress(17).unlockedConcepts.includes("fallback_function")?{success:!0,message:`✅ 订阅成功！您已订阅计划 ${P}！`,hints:[],nextStep:""}:(e.unlockConcept(17,"fallback_function"),{success:!0,message:`✅ 订阅成功！您已订阅计划 ${P}！`,hints:["fallback_function"],nextStep:"🔒 恭喜解锁：回退函数！调用通过 fallback 委托给逻辑合约！👉 查询订阅状态，查看升级后数据是否仍然存在！"})},L=()=>{if(!m.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};if(m.value.paused)return{success:!1,message:"❌ 订阅已经处于暂停状态",hints:[],nextStep:""};const P=Math.floor(Date.now()/1e3);if(m.value.expiry<=P)return{success:!1,message:"❌ 订阅已过期",hints:[],nextStep:""};const H=m.value.expiry-P;return m.value.paused=!0,m.value.expiry=H,n.addLog(17,"暂停订阅",`剩余时间: ${H} 秒`,"pauseSubscription17"),e.incrementInteraction(17),e.getDayProgress(17).unlockedConcepts.includes("version_control")?{success:!0,message:"⏸️ 订阅已暂停！剩余时间已保存！",hints:[],nextStep:""}:(e.unlockConcept(17,"version_control"),{success:!0,message:"⏸️ 订阅已暂停！剩余时间已保存！",hints:["version_control"],nextStep:"🚀 恭喜解锁：版本控制！这是 V2 新增的功能！👉 恢复订阅来完成所有学习！"})},Q=()=>{if(!m.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};if(!m.value.paused)return{success:!1,message:"❌ 订阅未处于暂停状态",hints:[],nextStep:""};const P=Math.floor(Date.now()/1e3),H=m.value.expiry;return m.value.paused=!1,m.value.expiry=P+H,n.addLog(17,"恢复订阅",`新的过期时间: ${m.value.expiry}`,"resumeSubscription17"),e.incrementInteraction(17),{success:!0,message:"▶️ 订阅已恢复！过期时间已重新计算！",hints:[],nextStep:"🎉 恭喜你已掌握 Day 17 全部核心功能！👉 查看完整代码来巩固知识！"}},ne=()=>{if(!m.value)return{success:!1,message:"❌ 您没有订阅",hints:[],nextStep:""};const P=Math.floor(Date.now()/1e3);let H="";if(m.value.paused)H=`已暂停，剩余 ${m.value.expiry} 秒`;else if(m.value.expiry>P){const ke=m.value.expiry-P;H=`有效，剩余 ${Math.floor(ke/86400)} 天 ${Math.floor(ke%86400/3600)} 小时`}else H="已过期";n.addLog(17,"查询订阅",`计划 ${m.value.planId}: ${H}`,null),e.incrementInteraction(17);const Se=e.getDayProgress(17).unlockedConcepts;return i.value&&!Se.includes("data_persistence")?(e.unlockConcept(17,"data_persistence"),{success:!0,message:`📊 您的订阅状态: ${H}`,hints:["data_persistence"],nextStep:"🏗️ 恭喜解锁：数据持久化！升级后数据保持不变！👉 使用 V2 新功能（暂停/恢复）来对比版本差异！"}):{success:!0,message:`📊 您的订阅状态: ${H}`,hints:[],nextStep:""}},me=P=>(r.value=P,P==="owner"?{success:!0,message:"✅ 已切换到 Owner 身份！",hints:[],nextStep:"👉 创建订阅计划来体验数据存储！"}:{success:!0,message:"✅ 已切换到 User 身份！",hints:[],nextStep:"👉 选择计划并执行订阅，体验 fallback 委托调用！"}),W=x(()=>({gasUsage:n.getDayGasUsage(17),ethCost:n.getDayEthCost(17),operationCount:n.getDayOperationCount(17)}));return{currentRole:r,currentVersion:s,upgraded:i,isUpgrading:o,justUpgraded:a,plans:c,newPlanId:u,newPlanPrice:l,newPlanDuration:d,selectedPlanId:_,subscription:m,logicContractAddress:S,ownerAddress:C,plansCount:N,subscriptionsCount:M,hasSubscription:b,selectedPlanPrice:k,remainingTime:p,subscriptionStatusText:h,subscriptionStatusClass:w,createPlan:D,upgradeToV2:v,switchToV1:g,switchToV2:A,subscribe:T,pauseSubscription:L,resumeSubscription:Q,checkSubscription:ne,switchRole:me,realtimeData:W}}function Sp(t){return{realtimeData:x(()=>{switch(t.value){case 1:return Fd().realtimeData.value;case 2:return Vd().realtimeData.value;case 3:return Wd().realtimeData.value;case 4:return Hd().realtimeData.value;case 5:return qd().realtimeData.value;case 6:return zd().realtimeData.value;case 7:return Gd().realtimeData.value;case 8:return Kd().realtimeData.value;case 9:return jd().realtimeData.value;case 10:return Jd().realtimeData.value;case 11:return Xd().realtimeData.value;case 12:return Yd().realtimeData.value;case 13:return Zd().realtimeData.value;case 14:return Qd().realtimeData.value;case 15:return ef().realtimeData.value;case 16:return xp().realtimeData.value;case 17:return Cp().realtimeData.value;default:return{gasUsage:0,ethCost:0,operationCount:0}}})}}const Pr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},kp={class:"header"},Ap={class:"header-center"},Tp={class:"main-title"},Ep={class:"easter-egg-container"},Dp={__name:"AppHeader",props:{showLeftSidebar:{type:Boolean,default:!0},showRightSidebar:{type:Boolean,default:!0}},emits:["toggle-left-sidebar","toggle-right-sidebar"],setup(t){const e=K(!1),n=()=>{e.value=!e.value,e.value?(document.documentElement.dataset.theme="dark",localStorage.setItem("theme","dark")):(document.documentElement.dataset.theme="light",localStorage.setItem("theme","light"))},r=K(!1),s=K(!1),i=K("");let o=null;const a=["In Code We Trust!","🔮 今日宜：部署主网；忌：未 Audit","⚠️ 注意你的 Reentrancy 漏洞！","Gas 费太高了，先在这练练手！","HODL! 到下一个牛市！","🎉 签运：大吉！编译一遍过","🚀 To the Moon!","智能合约，不可篡改！","🧐 别忘了测边缘情况"],c=()=>{if(r.value)return;r.value=!0,setTimeout(()=>{r.value=!1},600);const u=a[Math.floor(Math.random()*a.length)];i.value=u,s.value=!0,o&&clearTimeout(o),o=setTimeout(()=>{s.value=!1},3e3)};return ki(()=>{(localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"))==="dark"&&(e.value=!0,document.documentElement.dataset.theme="dark")}),(u,l)=>(pe(),_e("div",kp,[j("button",{class:lt(["sidebar-toggle-btn left-toggle",{active:t.showLeftSidebar}]),onClick:l[0]||(l[0]=d=>u.$emit("toggle-left-sidebar"))}," 📅 日程 ",2),j("div",Ap,[j("h1",Tp,[j("div",Ep,[j("button",{class:lt(["easter-egg-btn",{animating:r.value}]),onClick:c,title:"点这里有惊喜"}," 🎓 ",2),j("div",{class:lt(["toast-message",{show:s.value}])},Ce(i.value),3)]),l[2]||(l[2]=j("span",null,"Solidity 学习互动演示",-1)),j("button",{class:"theme-toggle-btn",onClick:n,title:"切换模式"},Ce(e.value?"☀️":"🌙"),1)]),l[3]||(l[3]=j("div",{class:"warning-banner"},[j("span",null,"模拟环境，不消耗真实 Gas 或 ETH"),j("span",{class:"author-credit"},[fr("by "),j("a",{href:"https://github.com/Tenlossiby",target:"_blank",rel:"noopener noreferrer"},"Tenlossiby")])],-1))]),j("button",{class:lt(["sidebar-toggle-btn right-toggle",{active:t.showRightSidebar}]),onClick:l[1]||(l[1]=d=>u.$emit("toggle-right-sidebar"))}," 📊 进度 ",2)]))}},Pp=Pr(Dp,[["__scopeId","data-v-9217367d"]]),Op={class:"left-sidebar"},Bp={class:"sidebar-header"},$p=["title"],Ip=["onClick"],Lp={class:"day-nav-header"},Rp={class:"day-title"},Mp={class:"day-subtitle"},Np={__name:"DayNavigation",props:{currentDay:{type:Number,required:!0}},emits:["switchDay"],setup(t){const e=K(!0),n=()=>{e.value=!e.value},r=x(()=>{const i=Object.keys(zn).map(Number);return e.value?i:i.reverse()}),s=i=>{var o;return i===14?"安全存款盒/SafeDeposit":((o=zn[i])==null?void 0:o.subtitle)||"待定内容"};return(i,o)=>(pe(),_e("div",Op,[j("div",Bp,[o[0]||(o[0]=j("h3",null,"📚 学习导航",-1)),j("button",{class:"sort-toggle-btn",onClick:n,title:e.value?"点击切换倒序":"点击切换正序"},Ce(e.value?"🔼 正序":"🔽 倒序"),9,$p)]),(pe(!0),_e(et,null,is(r.value,a=>(pe(),_e("div",{key:a,class:lt(["day-nav-item",{active:t.currentDay===a}]),onClick:c=>i.$emit("switchDay",a)},[j("div",Lp,[j("div",Rp,"Day "+Ce(a),1)]),j("div",Mp,Ce(s(a)),1)],10,Ip))),128))]))}},Up=Pr(Np,[["__scopeId","data-v-6c23ceee"]]),Fp="modulepreload",Vp=function(t,e){return new URL(t,e).href},ra={},Pe=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=Vp(u,r),u in ra)return;ra[u]=!0;const l=u.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!r)for(let S=o.length-1;S>=0;S--){const C=o[S];if(C.href===u&&(!l||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":Fp,l||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),l)return new Promise((S,C)=>{m.addEventListener("load",S),m.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},Wp={class:"coming-soon-content"},Hp={class:"coming-soon-card"},qp={class:"description"},zp={class:"suggestion"},Gp={class:"available-days"},Kp=["onClick"],jp={__name:"ComingSoon",props:{day:{type:Number,default:0}},emits:["switchDay"],setup(t,{emit:e}){const n=e,r=Object.keys(zn).map(Number).sort((i,o)=>i-o),s=i=>{n("switchDay",i)};return(i,o)=>(pe(),_e("div",Wp,[j("div",Hp,[o[1]||(o[1]=j("div",{class:"icon"},"🚧",-1)),o[2]||(o[2]=j("h2",null,"内容建设中",-1)),o[3]||(o[3]=j("p",{class:"subtitle"},"Coming Soon",-1)),j("p",qp," Day "+Ce(t.day)+" 的内容正在开发中，敬请期待！ ",1),j("div",zp,[o[0]||(o[0]=j("p",null,"💡 提示：目前可用的学习内容：",-1)),j("div",Gp,[(pe(!0),_e(et,null,is(hr(r),a=>(pe(),_e("span",{key:a,class:"day-tag",onClick:c=>s(a)}," Day "+Ce(a),9,Kp))),128))])])])]))}},Jp=Pr(jp,[["__scopeId","data-v-8b051cae"]]),Xp={class:"center-content"},Yp={__name:"DayContent",props:{currentDay:{type:Number,required:!0}},emits:["switchDay"],setup(t,{emit:e}){const n={1:De(()=>Pe(()=>import("./ClickCounter-B5adN3gZ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),2:De(()=>Pe(()=>import("./SaveMyName-Bg-5KDa_.js"),__vite__mapDeps([4,1,2,5]),import.meta.url)),3:De(()=>Pe(()=>import("./PollStation-BnDpDs6i.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)),4:De(()=>Pe(()=>import("./AuctionHouse-C9FQWmIK.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)),5:De(()=>Pe(()=>import("./AdminOnly-BEHCx42V.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)),6:De(()=>Pe(()=>import("./EtherPiggyBank-D6uGOD9c.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)),7:De(()=>Pe(()=>import("./SimpleIOUApp-Dijdw6eR.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)),8:De(()=>Pe(()=>import("./TipJar-B6kv3eH2.js"),__vite__mapDeps([16,1,2,17]),import.meta.url)),9:De(()=>Pe(()=>import("./SmartCalculator-D3e1PSyn.js"),__vite__mapDeps([18,1,2,19]),import.meta.url)),10:De(()=>Pe(()=>import("./ActivityTracker-a_G_Lpks.js"),__vite__mapDeps([20,1,2,21]),import.meta.url)),11:De(()=>Pe(()=>import("./MasterkeyContract-DMC4tbtx.js"),__vite__mapDeps([22,1,2,23]),import.meta.url)),12:De(()=>Pe(()=>import("./ERC20Token-BY8b418S.js"),__vite__mapDeps([24,1,2,25]),import.meta.url)),13:De(()=>Pe(()=>import("./MyToken-Dlw1dYrw.js"),__vite__mapDeps([26,1,2,27]),import.meta.url)),14:De(()=>Pe(()=>import("./SafeDeposit-BCLBY-VY.js"),__vite__mapDeps([28,1,2,29]),import.meta.url)),15:De(()=>Pe(()=>import("./GasEfficientVoting-BJ1DXS5f.js"),__vite__mapDeps([30,1,2,31]),import.meta.url)),16:De(()=>Pe(()=>import("./PluginStore--dnN8l40.js"),__vite__mapDeps([32,1,2,33]),import.meta.url)),17:De(()=>Pe(()=>import("./UpgradeHub-DGqZEmoX.js"),__vite__mapDeps([34,1,2,35]),import.meta.url))},r=t,s=e,i=x(()=>n[r.currentDay]||Jp),o=a=>{s("switchDay",a)};return(a,c)=>(pe(),_e("div",Xp,[(pe(),sc(lu(i.value),{key:t.currentDay,day:t.currentDay,onSwitchDay:o},null,40,["day"]))]))}},Zp=Pr(Yp,[["__scopeId","data-v-c8e2b28a"]]),Qp={class:"right-sidebar"},eg={class:"sidebar-card"},tg={class:"progress-bar"},ng={class:"progress-stats"},rg={class:"sidebar-card"},sg={class:"unlocked-list"},ig={key:0,class:"locked"},og={class:"icon"},ag={key:0,class:"sidebar-card"},cg={class:"realtime-data"},lg={key:0},ug={class:"data-row"},dg={class:"value"},fg={class:"data-row"},pg={class:"value"},gg={class:"data-row"},mg={class:"value"},hg={key:1,class:"no-operations"},yg={class:"sidebar-card"},bg={class:"operation-log"},_g={key:0,class:"no-operations"},wg={key:1},vg={class:"data-row"},xg={class:"timestamp"},Cg={key:0,class:"data-row gas-info"},Sg={class:"value"},kg={class:"value"},Ag={__name:"Sidebar",props:{realtimeData:{type:Object,default:null},dayProgress:{type:Object,required:!0},currentDay:{type:Number,required:!0}},setup(t){const e=t,n=Te(),r=x(()=>n.getDayLogs(e.currentDay)),s=x(()=>{const c=e.dayProgress[e.currentDay];return!c||c.totalConcepts===0?0:Math.floor(c.unlockedConcepts.length/c.totalConcepts*100)}),i=x(()=>{const c=e.dayProgress[e.currentDay];return(c==null?void 0:c.unlockedConcepts.length)||0}),o=x(()=>{const c=e.dayProgress[e.currentDay];return(c==null?void 0:c.totalConcepts)||0}),a=x(()=>{const c=zn[e.currentDay];if(!c||!c.concepts)return[];const u=e.dayProgress[e.currentDay],l=(u==null?void 0:u.unlockedConcepts)||[];let d=Bd;return e.currentDay===11?d=$d:e.currentDay===12?d=Ld:e.currentDay===13?d=Id:e.currentDay===14?d=Rd:e.currentDay===15?d=Md:e.currentDay===16?d=Nd:e.currentDay===17&&(d=Ud),c.concepts.map(_=>{const m=d[_];return{key:_,name:(m==null?void 0:m.name)||_,icon:l.includes(_)?m==null?void 0:m.icon:"🔒",isUnlocked:l.includes(_)}})});return(c,u)=>(pe(),_e("div",Qp,[j("div",eg,[u[0]||(u[0]=j("h3",null,"🎓 学习进度",-1)),j("div",tg,[j("div",{class:"progress-fill",style:bs({width:s.value+"%"})},null,4)]),j("div",ng,[j("span",null,"完成度 "+Ce(s.value)+"%",1),j("span",null,"已解锁 "+Ce(i.value)+"/"+Ce(o.value),1)])]),j("div",rg,[u[2]||(u[2]=j("h3",null,"✅ 已解锁概念",-1)),j("ul",sg,[a.value.length===0?(pe(),_e("li",ig,[...u[1]||(u[1]=[j("span",{class:"icon"},"🚧",-1),fr(" 内容开发中... ",-1)])])):jr("",!0),(pe(!0),_e(et,null,is(a.value,l=>(pe(),_e("li",{key:l.key,class:lt({locked:!l.isUnlocked})},[j("span",og,Ce(l.icon),1),fr(" "+Ce(l.name),1)],2))),128))])]),t.realtimeData?(pe(),_e("div",ag,[u[6]||(u[6]=j("h3",null,"📊 实时数据",-1)),j("div",cg,[t.realtimeData.operationCount>0?(pe(),_e("div",lg,[j("div",ug,[u[3]||(u[3]=j("span",{class:"label"},"操作次数：",-1)),j("span",dg,Ce(t.realtimeData.operationCount),1)]),j("div",fg,[u[4]||(u[4]=j("span",{class:"label"},"Gas 消耗：",-1)),j("span",pg,Ce(t.realtimeData.gasUsage.toLocaleString()),1)]),j("div",gg,[u[5]||(u[5]=j("span",{class:"label"},"ETH 费用：",-1)),j("span",mg,Ce(t.realtimeData.ethCost.toFixed(6)),1)])])):(pe(),_e("div",hg," 暂无操作记录 "))])])):jr("",!0),j("div",yg,[u[9]||(u[9]=j("h3",null,"📋 操作日志",-1)),j("div",bg,[r.value.length===0?(pe(),_e("p",_g,"暂无操作记录")):(pe(),_e("div",wg,[(pe(!0),_e(et,null,is(r.value.slice(0,10),l=>(pe(),_e("div",{key:l.id,class:"log-entry"},[j("div",vg,[j("span",xg,Ce(l.timestamp),1),j("span",null,[j("strong",null,Ce(l.operation),1),fr(" "+Ce(l.details),1)])]),l.gasUsed>0?(pe(),_e("div",Cg,[u[7]||(u[7]=j("span",{class:"label"},"Gas:",-1)),j("span",Sg,Ce(l.gasUsed.toLocaleString()),1),u[8]||(u[8]=j("span",{class:"label",style:{"margin-left":"15px"}},"ETH:",-1)),j("span",kg,Ce(l.ethCost.toFixed(6)),1)])):jr("",!0)]))),128))]))])])]))}},Tg=Pr(Ag,[["__scopeId","data-v-c07748ba"]]),Eg={class:"app-container"},Dg={class:"main-layout"},Pg={__name:"App",setup(t){const e=Ye(),n=K(!0),r=K(!0),s=K(1),i=K(!1),{realtimeData:o}=Sp(s),a=()=>{const _=window.innerWidth<=1100;!i.value&&_&&(n.value=!1,r.value=!1),i.value&&!_&&(n.value=!0,r.value=!0),i.value=_},c=x(()=>i.value&&(n.value||r.value));ki(()=>{a(),window.addEventListener("resize",a)}),Ai(()=>{window.removeEventListener("resize",a)});const u=d=>{s.value=d},l=()=>{n.value=!1,r.value=!1};return(d,_)=>(pe(),_e("div",Eg,[$e(Pp,{"show-left-sidebar":n.value,"show-right-sidebar":r.value,onToggleLeftSidebar:_[0]||(_[0]=m=>n.value=!n.value),onToggleRightSidebar:_[1]||(_[1]=m=>r.value=!r.value)},null,8,["show-left-sidebar","show-right-sidebar"]),c.value?(pe(),_e("div",{key:0,class:"sidebar-overlay active",onClick:bd(l,["stop"])})):jr("",!0),j("div",Dg,[$e(Up,{"current-day":s.value,onSwitchDay:u,class:lt({hidden:!n.value&&!i.value,"mobile-visible":i.value&&n.value,show:n.value&&i.value})},null,8,["current-day","class"]),$e(Zp,{"current-day":s.value,onSwitchDay:u},null,8,["current-day"]),$e(Tg,{"current-day":s.value,"day-progress":hr(e).dayProgress,"realtime-data":hr(o),class:lt({hidden:!r.value&&!i.value,"mobile-visible":i.value&&r.value,show:r.value&&i.value})},null,8,["current-day","day-progress","realtime-data","class"])])]))}},qc=xd(Pg),Og=kd();qc.use(Og);qc.mount("#app");export{Md as $,Gd as A,Kd as B,Fg as C,jd as D,qr as E,et as F,ki as G,Rg as H,bs as I,Jd as J,Xd as K,Yd as L,Zd as M,Qd as N,Xg as O,ef as P,jg as Q,Te as R,xp as S,Ug as T,Mg as U,Cp as V,$d as W,Ld as X,Id as Y,Rd as Z,Pr as _,j as a,Nd as a0,Bd as a1,zg as a2,Zg as a3,em as a4,qg as a5,Kg as a6,Gg as a7,Yg as a8,Jg as a9,Qg as aa,tm as ab,Hg as ac,Ud as ad,Lg as ae,hr as b,_e as c,sc as d,jr as e,$e as f,Vd as g,Vg as h,x as i,Wg as j,Wd as k,is as l,Hd as m,lt as n,pe as o,bd as p,Ye as q,K as r,qd as s,Ce as t,Fd as u,Ng as v,Ig as w,we as x,fr as y,zd as z};
