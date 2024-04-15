/*! RapiDoc 9.3.5-beta | Author - Mrinmoy Majumdar | License information can be found in rapidoc-min.js.LICENSE.txt  */
(()=>{var e,t,r={687:(e,t,r)=>{"use strict";const n=window,s=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class a{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(t,e))}return e}toString(){return this.cssText}}const l=e=>new a("string"==typeof e?e:e+"",void 0,i),c=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new a(r,e,i)},p=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return l(t)})(e):e;var u;const d=window,h=d.trustedTypes,f=h?h.emptyScript:"",m=d.reactiveElementPolyfillSupport,y={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},g=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:g},b="finalized";class x extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const n=this._$Ep(r,t);void 0!==n&&(this._$Ev.set(n,r),e.push(n))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(p(e))}else void 0!==e&&t.push(p(e));return t}static _$Ep(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{s?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),s=n.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=t.cssText,e.appendChild(r)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=v){var n;const s=this.constructor._$Ep(e,r);if(void 0!==s&&!0===r.reflect){const i=(void 0!==(null===(n=r.converter)||void 0===n?void 0:n.toAttribute)?r.converter:y).toAttribute(t,r.type);this._$El=e,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$El=null}}_$AK(e,t){var r;const n=this.constructor,s=n._$Ev.get(e);if(void 0!==s&&this._$El!==s){const e=n.getPropertyOptions(s),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:y;this._$El=s,this[s]=i.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,r){let n=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||g)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var w;x[b]=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:x}),(null!==(u=d.reactiveElementVersions)&&void 0!==u?u:d.reactiveElementVersions=[]).push("1.6.2");const $=window,S=$.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,j="?"+O,A=`<${j}>`,P=document,T=()=>P.createComment(""),C=e=>null===e||"object"!=typeof e&&"function"!=typeof e,I=Array.isArray,R=e=>I(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),_="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,M=/>/g,q=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,B=/"/g,N=/^(?:script|style|textarea|title)$/i,U=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),z=U(1),H=(U(2),Symbol.for("lit-noChange")),V=Symbol.for("lit-nothing"),W=new WeakMap,G=P.createTreeWalker(P,129,null,!1),J=(e,t)=>{const r=e.length-1,n=[];let s,i=2===t?"<svg>":"",o=F;for(let t=0;t<r;t++){const r=e[t];let a,l,c=-1,p=0;for(;p<r.length&&(o.lastIndex=p,l=o.exec(r),null!==l);)p=o.lastIndex,o===F?"!--"===l[1]?o=D:void 0!==l[1]?o=M:void 0!==l[2]?(N.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=q):void 0!==l[3]&&(o=q):o===q?">"===l[0]?(o=null!=s?s:F,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?q:'"'===l[3]?B:L):o===B||o===L?o=q:o===D||o===M?o=F:(o=q,s=void 0);const u=o===q&&e[t+1].startsWith("/>")?" ":"";i+=o===F?r+A:c>=0?(n.push(a),r.slice(0,c)+k+r.slice(c)+O+u):r+O+(-2===c?(n.push(void 0),t):u)}const a=i+(e[r]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==E?E.createHTML(a):a,n]};class K{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,i=0;const o=e.length-1,a=this.parts,[l,c]=J(e,t);if(this.el=K.createElement(l,r),G.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=G.nextNode())&&a.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(k)||t.startsWith(O)){const r=c[i++];if(e.push(t),void 0!==r){const e=n.getAttribute(r.toLowerCase()+k).split(O),t=/([.?@])?(.*)/.exec(r);a.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?ee:"?"===t[1]?re:"@"===t[1]?ne:Q})}else a.push({type:6,index:s})}for(const t of e)n.removeAttribute(t)}if(N.test(n.tagName)){const e=n.textContent.split(O),t=e.length-1;if(t>0){n.textContent=S?S.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],T()),G.nextNode(),a.push({type:2,index:++s});n.append(e[t],T())}}}else if(8===n.nodeType)if(n.data===j)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(O,e+1));)a.push({type:7,index:s}),e+=O.length-1}s++}}static createElement(e,t){const r=P.createElement("template");return r.innerHTML=e,r}}function Z(e,t,r=e,n){var s,i,o,a;if(t===H)return t;let l=void 0!==n?null===(s=r._$Co)||void 0===s?void 0:s[n]:r._$Cl;const c=C(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,r,n)),void 0!==n?(null!==(o=(a=r)._$Co)&&void 0!==o?o:a._$Co=[])[n]=l:r._$Cl=l),void 0!==l&&(t=Z(e,l._$AS(e,t.values),l,n)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:n}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:P).importNode(r,!0);G.currentNode=s;let i=G.nextNode(),o=0,a=0,l=n[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new X(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new se(i,this,e)),this._$AV.push(t),l=n[++a]}o!==(null==l?void 0:l.index)&&(i=G.nextNode(),o++)}return G.currentNode=P,s}v(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class X{constructor(e,t,r,n){var s;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),C(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==H&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):R(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==V&&C(this._$AH)?this._$AA.nextSibling.data=e:this.$(P.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:n}=e,s="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=K.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.v(r);else{const e=new Y(s,this),t=e.u(this.options);e.v(r),this.$(t),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new K(e)),t}T(e){I(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const s of e)n===t.length?t.push(r=new X(this.k(T()),this.k(T()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Q{constructor(e,t,r,n,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const s=this.strings;let i=!1;if(void 0===s)e=Z(this,e,t,0),i=!C(e)||e!==this._$AH&&e!==H,i&&(this._$AH=e);else{const n=e;let o,a;for(e=s[0],o=0;o<s.length-1;o++)a=Z(this,n[r+o],t,o),a===H&&(a=this._$AH[o]),i||(i=!C(a)||a!==this._$AH[o]),a===V?e=V:e!==V&&(e+=(null!=a?a:"")+s[o+1]),this._$AH[o]=a}i&&!n&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class ee extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}const te=S?S.emptyScript:"";class re extends Q{constructor(){super(...arguments),this.type=4}j(e){e&&e!==V?this.element.setAttribute(this.name,te):this.element.removeAttribute(this.name)}}class ne extends Q{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=Z(this,e,t,0))&&void 0!==r?r:V)===H)return;const n=this._$AH,s=e===V&&n!==V||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==V&&(n===V||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ie={O:k,P:O,A:j,C:1,M:J,L:Y,D:R,R:Z,I:X,V:Q,H:re,N:ne,U:ee,F:se},oe=$.litHtmlPolyfillSupport;null==oe||oe(K,X),(null!==(w=$.litHtmlVersions)&&void 0!==w?w:$.litHtmlVersions=[]).push("2.7.4");var ae,le;class ce extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{var n,s;const i=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:t;let o=i._$litPart$;if(void 0===o){const e=null!==(s=null==r?void 0:r.renderBefore)&&void 0!==s?s:null;i._$litPart$=o=new X(t.insertBefore(T(),e),e,void 0,null!=r?r:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return H}}ce.finalized=!0,ce._$litElement$=!0,null===(ae=globalThis.litElementHydrateSupport)||void 0===ae||ae.call(globalThis,{LitElement:ce});const pe=globalThis.litElementPolyfillSupport;null==pe||pe({LitElement:ce});function ue(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}(null!==(le=globalThis.litElementVersions)&&void 0!==le?le:globalThis.litElementVersions=[]).push("3.3.2");let de={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};function he(e){de=e}const fe=/[&<>"']/,me=new RegExp(fe.source,"g"),ye=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ge=new RegExp(ye.source,"g"),ve={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},be=e=>ve[e];function xe(e,t){if(t){if(fe.test(e))return e.replace(me,be)}else if(ye.test(e))return e.replace(ge,be);return e}const we=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function $e(e){return e.replace(we,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Se=/(^|[^\[])\^/g;function Ee(e,t){e="string"==typeof e?e:e.source,t=t||"";const r={replace:(t,n)=>(n=(n=n.source||n).replace(Se,"$1"),e=e.replace(t,n),r),getRegex:()=>new RegExp(e,t)};return r}const ke=/[^\w:]/g,Oe=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function je(e,t,r){if(e){let e;try{e=decodeURIComponent($e(r)).replace(ke,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!Oe.test(r)&&(r=function(e,t){Ae[" "+e]||(Pe.test(e)?Ae[" "+e]=e+"/":Ae[" "+e]=_e(e,"/",!0));e=Ae[" "+e];const r=-1===e.indexOf(":");return"//"===t.substring(0,2)?r?t:e.replace(Te,"$1")+t:"/"===t.charAt(0)?r?t:e.replace(Ce,"$1")+t:e+t}(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}const Ae={},Pe=/^[^:]+:\/*[^/]*$/,Te=/^([^:]+:)[\s\S]*$/,Ce=/^([^:]+:\/*[^/]*)[\s\S]*$/;const Ie={exec:function(){}};function Re(e,t){const r=e.replace(/\|/g,((e,t,r)=>{let n=!1,s=t;for(;--s>=0&&"\\"===r[s];)n=!n;return n?"|":" |"})).split(/ \|/);let n=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function _e(e,t,r){const n=e.length;if(0===n)return"";let s=0;for(;s<n;){const i=e.charAt(n-s-1);if(i!==t||r){if(i===t||!r)break;s++}else s++}return e.slice(0,n-s)}function Fe(e,t,r,n){const s=t.href,i=t.title?xe(t.title):null,o=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){n.state.inLink=!0;const e={type:"link",raw:r,href:s,title:i,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,e}return{type:"image",raw:r,href:s,title:i,text:xe(o)}}class De{constructor(e){this.options=e||de}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:_e(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],r=function(e,t){const r=e.match(/^(\s+)(?:```)/);if(null===r)return t;const n=r[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[r]=t;return r.length>=n.length?e.slice(n.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=_e(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;const n=this.lexer.blockTokens(e);return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:n,text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,n,s,i,o,a,l,c,p,u,d,h,f=t[1].trim();const m=f.length>1,y={type:"list",raw:"",ordered:m,start:m?+f.slice(0,-1):"",loose:!1,items:[]};f=m?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=m?f:"[*+-]");const g=new RegExp(`^( {0,3}${f})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(h=!1,t=g.exec(e))&&!this.rules.block.hr.test(e);){if(r=t[0],e=e.substring(r.length),c=t[2].split("\n",1)[0].replace(/^\t+/,(e=>" ".repeat(3*e.length))),p=e.split("\n",1)[0],this.options.pedantic?(i=2,d=c.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,d=c.slice(i),i+=t[1].length),a=!1,!c&&/^ *$/.test(p)&&(r+=p+"\n",e=e.substring(p.length+1),h=!0),!h){const t=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),n=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),s=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),o=new RegExp(`^ {0,${Math.min(3,i-1)}}#`);for(;e&&(u=e.split("\n",1)[0],p=u,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!s.test(p))&&!o.test(p)&&!t.test(p)&&!n.test(e);){if(p.search(/[^ ]/)>=i||!p.trim())d+="\n"+p.slice(i);else{if(a)break;if(c.search(/[^ ]/)>=4)break;if(s.test(c))break;if(o.test(c))break;if(n.test(c))break;d+="\n"+p}a||p.trim()||(a=!0),r+=u+"\n",e=e.substring(u.length+1),c=p.slice(i)}}y.loose||(l?y.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(d),n&&(s="[ ] "!==n[0],d=d.replace(/^\[[ xX]\] +/,""))),y.items.push({type:"list_item",raw:r,task:!!n,checked:s,loose:!1,text:d}),y.raw+=r}y.items[y.items.length-1].raw=r.trimRight(),y.items[y.items.length-1].text=d.trimRight(),y.raw=y.raw.trimRight();const v=y.items.length;for(o=0;o<v;o++)if(this.lexer.state.top=!1,y.items[o].tokens=this.lexer.blockTokens(y.items[o].text,[]),!y.loose){const e=y.items[o].tokens.filter((e=>"space"===e.type)),t=e.length>0&&e.some((e=>/\n.*\n/.test(e.raw)));y.loose=t}if(y.loose)for(o=0;o<v;o++)y.items[o].loose=!0;return y}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",block:!0,raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};if(this.options.sanitize){const r=this.options.sanitizer?this.options.sanitizer(t[0]):xe(t[0]);e.type="paragraph",e.text=r,e.tokens=this.lexer.inline(r)}return e}}def(e){const t=this.rules.block.def.exec(e);if(t){const e=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:r,title:n}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:Re(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let r,n,s,i,o=e.align.length;for(r=0;r<o;r++)/^ *-+: *$/.test(e.align[r])?e.align[r]="right":/^ *:-+: *$/.test(e.align[r])?e.align[r]="center":/^ *:-+ *$/.test(e.align[r])?e.align[r]="left":e.align[r]=null;for(o=e.rows.length,r=0;r<o;r++)e.rows[r]=Re(e.rows[r],e.header.length).map((e=>({text:e})));for(o=e.header.length,n=0;n<o;n++)e.header[n].tokens=this.lexer.inline(e.header[n].text);for(o=e.rows.length,n=0;n<o;n++)for(i=e.rows[n],s=0;s<i.length;s++)i[s].tokens=this.lexer.inline(i[s].text);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:xe(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):xe(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=_e(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const r=e.length;let n=0,s=0;for(;s<r;s++)if("\\"===e[s])s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return-1}(t[2],"()");if(e>-1){const r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],n="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);e&&(r=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(e)?r.slice(1):r.slice(1,-1)),Fe(t,{href:r?r.replace(this.rules.inline._escapes,"$1"):r,title:n?n.replace(this.rules.inline._escapes,"$1"):n},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=(r[2]||r[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e){const e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return Fe(r,e,r[0],this.lexer)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrong.lDelim.exec(e);if(!n)return;if(n[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(n[1]||n[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const r=n[0].length-1;let s,i,o=r,a=0;const l="*"===n[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+r);null!=(n=l.exec(t));){if(s=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!s)continue;if(i=s.length,n[3]||n[4]){o+=i;continue}if((n[5]||n[6])&&r%3&&!((r+i)%3)){a+=i;continue}if(o-=i,o>0)continue;i=Math.min(i,i+o+a);const t=e.slice(0,r+n.index+i+1);if(Math.min(r,i)%2){const e=t.slice(1,-1);return{type:"em",raw:t,text:e,tokens:this.lexer.inlineTokens(e)}}const l=t.slice(2,-2);return{type:"strong",raw:t,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const r=/[^ ]/.test(e),n=/^ /.test(e)&&/ $/.test(e);return r&&n&&(e=e.substring(1,e.length-1)),e=xe(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let e,n;return"@"===r[2]?(e=xe(this.options.mangle?t(r[1]):r[1]),n="mailto:"+e):(e=xe(r[1]),n=e),{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let e,n;if("@"===r[2])e=xe(this.options.mangle?t(r[0]):r[0]),n="mailto:"+e;else{let t;do{t=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0]}while(t!==r[0]);e=xe(r[0]),n="www."===r[1]?"http://"+r[0]:r[0]}return{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):xe(r[0]):r[0]:xe(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}}const Me={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ie,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Me.def=Ee(Me.def).replace("label",Me._label).replace("title",Me._title).getRegex(),Me.bullet=/(?:[*+-]|\d{1,9}[.)])/,Me.listItemStart=Ee(/^( *)(bull) */).replace("bull",Me.bullet).getRegex(),Me.list=Ee(Me.list).replace(/bull/g,Me.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Me.def.source+")").getRegex(),Me._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Me._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Me.html=Ee(Me.html,"i").replace("comment",Me._comment).replace("tag",Me._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Me.lheading=Ee(Me.lheading).replace(/bull/g,Me.bullet).getRegex(),Me.paragraph=Ee(Me._paragraph).replace("hr",Me.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Me._tag).getRegex(),Me.blockquote=Ee(Me.blockquote).replace("paragraph",Me.paragraph).getRegex(),Me.normal={...Me},Me.gfm={...Me.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},Me.gfm.table=Ee(Me.gfm.table).replace("hr",Me.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Me._tag).getRegex(),Me.gfm.paragraph=Ee(Me._paragraph).replace("hr",Me.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Me.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Me._tag).getRegex(),Me.pedantic={...Me.normal,html:Ee("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Me._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ie,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ee(Me.normal._paragraph).replace("hr",Me.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Me.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const qe={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ie,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ie,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};function Le(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Be(e){let t,r,n="";const s=e.length;for(t=0;t<s;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),n+="&#"+r+";";return n}qe._punctuation="\\p{P}$+<=>`^|~",qe.punctuation=Ee(qe.punctuation,"u").replace(/punctuation/g,qe._punctuation).getRegex(),qe.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,qe.anyPunctuation=/\\[punct]/g,qe._escapes=/\\([punct])/g,qe._comment=Ee(Me._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),qe.emStrong.lDelim=Ee(qe.emStrong.lDelim,"u").replace(/punct/g,qe._punctuation).getRegex(),qe.emStrong.rDelimAst=Ee(qe.emStrong.rDelimAst,"gu").replace(/punct/g,qe._punctuation).getRegex(),qe.emStrong.rDelimUnd=Ee(qe.emStrong.rDelimUnd,"gu").replace(/punct/g,qe._punctuation).getRegex(),qe.anyPunctuation=Ee(qe.anyPunctuation,"gu").replace(/punct/g,qe._punctuation).getRegex(),qe._escapes=Ee(qe._escapes,"gu").replace(/punct/g,qe._punctuation).getRegex(),qe._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,qe._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,qe.autolink=Ee(qe.autolink).replace("scheme",qe._scheme).replace("email",qe._email).getRegex(),qe._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,qe.tag=Ee(qe.tag).replace("comment",qe._comment).replace("attribute",qe._attribute).getRegex(),qe._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,qe._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,qe._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,qe.link=Ee(qe.link).replace("label",qe._label).replace("href",qe._href).replace("title",qe._title).getRegex(),qe.reflink=Ee(qe.reflink).replace("label",qe._label).replace("ref",Me._label).getRegex(),qe.nolink=Ee(qe.nolink).replace("ref",Me._label).getRegex(),qe.reflinkSearch=Ee(qe.reflinkSearch,"g").replace("reflink",qe.reflink).replace("nolink",qe.nolink).getRegex(),qe.normal={...qe},qe.pedantic={...qe.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ee(/^!?\[(label)\]\((.*?)\)/).replace("label",qe._label).getRegex(),reflink:Ee(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",qe._label).getRegex()},qe.gfm={...qe.normal,escape:Ee(qe.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},qe.gfm.url=Ee(qe.gfm.url,"i").replace("email",qe.gfm._extended_email).getRegex(),qe.breaks={...qe.gfm,br:Ee(qe.br).replace("{2,}","*").getRegex(),text:Ee(qe.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Ne{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||de,this.options.tokenizer=this.options.tokenizer||new De,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Me.normal,inline:qe.normal};this.options.pedantic?(t.block=Me.pedantic,t.inline=qe.pedantic):this.options.gfm&&(t.block=Me.gfm,this.options.breaks?t.inline=qe.breaks:t.inline=qe.gfm),this.tokenizer.rules=t}static get rules(){return{block:Me,inline:qe}}static lex(e,t){return new Ne(t).lex(e)}static lexInline(e,t){return new Ne(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let r,n,s,i;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,((e,t,r)=>t+"    ".repeat(r.length)));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),1===r.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),n=t[t.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?t.push(r):(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),n=t[t.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(n.raw+="\n"+r.raw,n.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else{if(s=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const r=e.slice(1);let n;this.options.extensions.startBlock.forEach((function(e){n=e.call({lexer:this},r),"number"==typeof n&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(s)))n=t[t.length-1],i&&"paragraph"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),i=s.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r,n,s,i,o,a,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.anyPunctuation.exec(l));)l=l.slice(0,i.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(o||(a=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.emStrong(e,l,a))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.autolink(e,Be))e=e.substring(r.raw.length),t.push(r);else if(this.state.inLink||!(r=this.tokenizer.url(e,Be))){if(s=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const r=e.slice(1);let n;this.options.extensions.startInline.forEach((function(e){n=e.call({lexer:this},r),"number"==typeof n&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(s,Le))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(a=r.raw.slice(-1)),o=!0,n=t[t.length-1],n&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(r.raw.length),t.push(r);return t}}class Ue{constructor(e){this.options=e||de}code(e,t,r){const n=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,n);null!=t&&t!==e&&(r=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+xe(n)+'">'+(r?e:xe(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:xe(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e,t){return e}heading(e,t,r,n){if(this.options.headerIds){return`<h${t} id="${this.options.headerPrefix+n.slug(r)}">${e}</h${t}>\n`}return`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,r){const n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(null===(e=je(this.options.sanitize,this.options.baseUrl,e)))return r;let n='<a href="'+e+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>",n}image(e,t,r){if(null===(e=je(this.options.sanitize,this.options.baseUrl,e)))return r;let n=`<img src="${e}" alt="${r}"`;return t&&(n+=` title="${t}"`),n+=this.options.xhtml?"/>":">",n}text(e){return e}}class ze{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class He{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,n=0;if(this.seen.hasOwnProperty(r)){n=this.seen[e];do{n++,r=e+"-"+n}while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=n,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class Ve{constructor(e){this.options=e||de,this.options.renderer=this.options.renderer||new Ue,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ze,this.slugger=new He}static parse(e,t){return new Ve(t).parse(e)}static parseInline(e,t){return new Ve(t).parseInline(e)}parse(e,t=!0){let r,n,s,i,o,a,l,c,p,u,d,h,f,m,y,g,v,b,x,w="";const $=e.length;for(r=0;r<$;r++)if(u=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(x=this.options.extensions.renderers[u.type].call({parser:this},u),!1!==x||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))w+=x||"";else switch(u.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(u.tokens),u.depth,$e(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",l="",i=u.header.length,n=0;n<i;n++)l+=this.renderer.tablecell(this.parseInline(u.header[n].tokens),{header:!0,align:u.align[n]});for(c+=this.renderer.tablerow(l),p="",i=u.rows.length,n=0;n<i;n++){for(a=u.rows[n],l="",o=a.length,s=0;s<o;s++)l+=this.renderer.tablecell(this.parseInline(a[s].tokens),{header:!1,align:u.align[s]});p+=this.renderer.tablerow(l)}w+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(u.tokens),w+=this.renderer.blockquote(p);continue;case"list":for(d=u.ordered,h=u.start,f=u.loose,i=u.items.length,p="",n=0;n<i;n++)y=u.items[n],g=y.checked,v=y.task,m="",y.task&&(b=this.renderer.checkbox(g),f?y.tokens.length>0&&"paragraph"===y.tokens[0].type?(y.tokens[0].text=b+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&"text"===y.tokens[0].tokens[0].type&&(y.tokens[0].tokens[0].text=b+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:b}):m+=b),m+=this.parse(y.tokens,f),p+=this.renderer.listitem(m,v,g);w+=this.renderer.list(p,d,h);continue;case"html":w+=this.renderer.html(u.text,u.block);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;r+1<$&&"text"===e[r+1].type;)u=e[++r],p+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);w+=t?this.renderer.paragraph(p):p;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return w}parseInline(e,t){t=t||this.renderer;let r,n,s,i="";const o=e.length;for(r=0;r<o;r++)if(n=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]&&(s=this.options.extensions.renderers[n.type].call({parser:this},n),!1!==s||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)))i+=s||"";else switch(n.type){case"escape":case"text":i+=t.text(n.text);break;case"html":i+=t.html(n.text);break;case"link":i+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":i+=t.image(n.href,n.title,n.text);break;case"strong":i+=t.strong(this.parseInline(n.tokens,t));break;case"em":i+=t.em(this.parseInline(n.tokens,t));break;case"codespan":i+=t.codespan(n.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(n.tokens,t));break;default:{const e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return i}}class We{constructor(e){this.options=e||de}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}const Ge=new class{defaults={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};options=this.setOptions;parse=this.#e(Ne.lex,Ve.parse);parseInline=this.#e(Ne.lexInline,Ve.parseInline);Parser=Ve;parser=Ve.parse;Renderer=Ue;TextRenderer=ze;Lexer=Ne;lexer=Ne.lex;Tokenizer=De;Slugger=He;Hooks=We;constructor(...e){this.use(...e)}walkTokens(e,t){let r=[];for(const n of e)switch(r=r.concat(t.call(this,n)),n.type){case"table":for(const e of n.header)r=r.concat(this.walkTokens(e.tokens,t));for(const e of n.rows)for(const n of e)r=r.concat(this.walkTokens(n.tokens,t));break;case"list":r=r.concat(this.walkTokens(n.items,t));break;default:this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[n.type]?this.defaults.extensions.childTokens[n.type].forEach((e=>{r=r.concat(this.walkTokens(n[e],t))})):n.tokens&&(r=r.concat(this.walkTokens(n.tokens,t)))}return r}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach((e=>{const r={...e};if(r.async=this.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const r=t.renderers[e.name];t.renderers[e.name]=r?function(...t){let n=e.renderer.apply(this,t);return!1===n&&(n=r.apply(this,t)),n}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");t[e.level]?t[e.level].unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}e.childTokens&&(t.childTokens[e.name]=e.childTokens)})),r.extensions=t),e.renderer){const t=this.defaults.renderer||new Ue(this.defaults);for(const r in e.renderer){const n=t[r];t[r]=(...s)=>{let i=e.renderer[r].apply(t,s);return!1===i&&(i=n.apply(t,s)),i}}r.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new De(this.defaults);for(const r in e.tokenizer){const n=t[r];t[r]=(...s)=>{let i=e.tokenizer[r].apply(t,s);return!1===i&&(i=n.apply(t,s)),i}}r.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new We;for(const r in e.hooks){const n=t[r];We.passThroughHooks.has(r)?t[r]=s=>{if(this.defaults.async)return Promise.resolve(e.hooks[r].call(t,s)).then((e=>n.call(t,e)));const i=e.hooks[r].call(t,s);return n.call(t,i)}:t[r]=(...s)=>{let i=e.hooks[r].apply(t,s);return!1===i&&(i=n.apply(t,s)),i}}r.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens;r.walkTokens=function(r){let n=[];return n.push(e.walkTokens.call(this,r)),t&&(n=n.concat(t.call(this,r))),n}}this.defaults={...this.defaults,...r}})),this}setOptions(e){return this.defaults={...this.defaults,...e},this}#e(e,t){return(r,n,s)=>{"function"==typeof n&&(s=n,n=null);const i={...n};n={...this.defaults,...i};const o=this.#t(n.silent,n.async,s);if(null==r)return o(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof r)return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(function(e,t){e&&!e.silent&&(t&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(e.sanitize||e.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(e.highlight||"language-"!==e.langPrefix)&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),e.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),e.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),e.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),e.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(e.headerIds||e.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}(n,s),n.hooks&&(n.hooks.options=n),s){const i=n.highlight;let a;try{n.hooks&&(r=n.hooks.preprocess(r)),a=e(r,n)}catch(e){return o(e)}const l=e=>{let r;if(!e)try{n.walkTokens&&this.walkTokens(a,n.walkTokens),r=t(a,n),n.hooks&&(r=n.hooks.postprocess(r))}catch(t){e=t}return n.highlight=i,e?o(e):s(null,r)};if(!i||i.length<3)return l();if(delete n.highlight,!a.length)return l();let c=0;return this.walkTokens(a,(e=>{"code"===e.type&&(c++,setTimeout((()=>{i(e.text,e.lang,((t,r)=>{if(t)return l(t);null!=r&&r!==e.text&&(e.text=r,e.escaped=!0),c--,0===c&&l()}))}),0))})),void(0===c&&l())}if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(r):r).then((t=>e(t,n))).then((e=>n.walkTokens?Promise.all(this.walkTokens(e,n.walkTokens)).then((()=>e)):e)).then((e=>t(e,n))).then((e=>n.hooks?n.hooks.postprocess(e):e)).catch(o);try{n.hooks&&(r=n.hooks.preprocess(r));const s=e(r,n);n.walkTokens&&this.walkTokens(s,n.walkTokens);let i=t(s,n);return n.hooks&&(i=n.hooks.postprocess(i)),i}catch(e){return o(e)}}}#t(e,t,r){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/this.",e){const e="<p>An error occurred:</p><pre>"+xe(n.message+"",!0)+"</pre>";return t?Promise.resolve(e):r?void r(null,e):e}if(t)return Promise.reject(n);if(!r)throw n;r(n)}}}(de);function Je(e,t,r){return Ge.parse(e,t,r)}Je.options=Je.setOptions=function(e){return Ge.setOptions(e),Je.defaults=Ge.defaults,he(Je.defaults),Je},Je.getDefaults=ue,Je.defaults=de,Je.use=function(...e){return Ge.use(...e),Je.defaults=Ge.defaults,he(Je.defaults),Je},Je.walkTokens=function(e,t){return Ge.walkTokens(e,t)},Je.parseInline=Ge.parseInline,Je.Parser=Ve,Je.parser=Ve.parse,Je.Renderer=Ue,Je.TextRenderer=ze,Je.Lexer=Ne,Je.lexer=Ne.lex,Je.Tokenizer=De,Je.Slugger=He,Je.Hooks=We,Je.parse=Je;Je.options,Je.setOptions,Je.use,Je.walkTokens,Je.parseInline;var Ke=r(271);typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"&&self;function Ze(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ye={exports:{}};!function(e){!function(e,t,r){function n(e){var t=this,r=function(){var e=4022871197,t=function(t){t=String(t);for(var r=0;r<t.length;r++){var n=.02519603282416938*(e+=t.charCodeAt(r));n-=e=n>>>0,e=(n*=e)>>>0,e+=4294967296*(n-=e)}return 2.3283064365386963e-10*(e>>>0)};return t}();t.next=function(){var e=2091639*t.s0+2.3283064365386963e-10*t.c;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=0|e)},t.c=1,t.s0=r(" "),t.s1=r(" "),t.s2=r(" "),t.s0-=r(e),t.s0<0&&(t.s0+=1),t.s1-=r(e),t.s1<0&&(t.s1+=1),t.s2-=r(e),t.s2<0&&(t.s2+=1),r=null}function s(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function i(e,t){var r=new n(e),i=t&&t.state,o=r.next;return o.int32=function(){return 4294967296*r.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,i&&("object"==typeof i&&s(i,r),o.state=function(){return s(r,{})}),o}t&&t.exports?t.exports=i:this.alea=i}(0,e)}(Ye);const Xe=Ze(Ye.exports),Qe=Ke.compile({WhiteSpace:{match:/[\t\v\f\ufeff\p{Zs}]+/u,lineBreaks:!0},Lines:{match:/\r?\n|[\r\u2028\u2029]/u,lineBreaks:!0},ObjectKey:/\[?(?:\x23)?(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+\]?(?=:)/u,Punctuator:/--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/u,BooleanLiteral:/true|false/u,NumericLiteral:/(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/u,StringLiteral:{match:/(?:'(?:(?!')[^\\\n\r]|\\(?:\r\n|[^]))*')|(?:"(?:(?!")[^\\\n\r]|\\(?:\r\n|[^]))*")/u,value:e=>`"${e.slice(1,-1)}"`},Identifier:/(?:\x23)?(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/u});const et=new RegExp("(?<==)(?:true|false)"),tt=new RegExp("(?<==)-?(?:(?:0[xX][\\da-fA-F](?:_?[\\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|-?0n|-?[1-9](?:_?\\d)*n|(?:(?:0(?!\\d)|0\\d*[89]\\d*|[1-9](?:_?\\d)*)(?:\\.(?:\\d(?:_?\\d)*)?)?|\\.\\d(?:_?\\d)*)(?:[eE][+-]?\\d(?:_?\\d)*)?|-?0[0-7]+)"),rt=new RegExp("(?<==)'(?!.*&[0-9a-zA-Z]+;)[^'\\\\]*(?:\\\\.|\\\\n[^\"\\\\]*|&[^0-9a-zA-Z;]*)*'"),nt=new RegExp('(?<==)"(?!.*&[0-9a-zA-Z]+;)[^"\\\\]*(?:\\\\.|\\\\n[^"\\\\]*|&[^0-9a-zA-Z;]*)*"'),st=new RegExp("(?<==)[^\"\\s'`=<>\\x00]+");function it(e){const t="string"==typeof e&&/^(['"]).*?\1$/.test(e)?e.slice(1,-1):e;return t.startsWith("[")&&t.endsWith("]")||t.startsWith("{")&&t.endsWith("}")?JSON.parse(function(e,t={}){const r=e.trim().replace(/[\,]+$/,"");if(""===r)return"{}";if(!function(e){return e.startsWith("{")&&e.endsWith("}")||e.startsWith("[")&&e.endsWith("]")}(r))throw new TypeError("Unexpected input format");let n="";Qe.reset(r);for(const e of Qe)if("WhiteSpace"!==e.type&&"Lines"!==e.type){switch(e.type){case"Identifier":e.value=`"${t[e.value]||e.value}"`;break;case"ObjectKey":"["===e.value.slice(0,1)&&"]"===e.value.slice(-1)?e.value=`"${t[e.value.slice(1,-1)]||e.value.slice(1,-1)}"`:e.value=`"${e.value}"`}n+=e.value}return n.replace(/\,([\}\]])/g,"$1")}(t)):t}const ot=Ke.states({main:{WhiteSpace:/[ \t\v\f\ufeff]+/,AttributeShorthand:/[\.#](?:(?!-?\d)(?:[a-zA-Z0-9\xA0-\uFFFF_-])+)/,BooleanLiteral:{match:et,value:e=>"true"===e},NumericLiteral:{match:tt,value(e){const t=Number(e);return Number.isNaN(t)?Number(e.replace(/_|n$/g,"")):Number(e)}},SingleQuotedValue:{match:rt,value:it,type:()=>"StringLiteral"},DoubleQuotedLiteral:{match:nt,value:it,type:()=>"StringLiteral"},UnquotedLiteral:{match:st,value:it,type:()=>"StringLiteral"},AttributeName:/(?:(?![\s\x00\x22\x27\x3E\x2F\x3D\x00-\x1F\x7F-\x9F])[^\s\x00-\x1F\x7F-\x9F\x22\x27\x3E\x2F\x3D])+/,Separator:"="}});function at(e){let t=null;const r=ot.reset(e),n={};Object.defineProperties(n,{toString:{writable:!1,enumerable:!1,configurable:!1,value:()=>function(e){let t="";for(const r in e){const n=e[r];switch(typeof n){case"object":t+=` ${r}='${JSON.stringify(n)}'`;break;case"string":t+=` ${r}="${n}"`;break;case"number":case"boolean":t+=` ${r}=${n}`}}return t.slice(1)}(n)},getTokens:{writable:!1,enumerable:!1,configurable:!1,value:()=>Array.from(ot.reset(e))}});const s=[];for(const{type:e,value:i}of r)switch(e){case"AttributeName":t=i,n[t]=t;break;case"AttributeShorthand":const e=i[0];"."===e?s.push(i.slice(1)):"#"===e&&(n.id=i.slice(1));break;case"BooleanLiteral":case"NumericLiteral":case"StringLiteral":t&&("class"===t&&s.push(i),n[t]=i,t=null)}return s.length&&(n.class=s.join(" ")),n}const lt=Ke.compile({spaces:/[\t\v\f\ufeff ]+/,name:/[a-zA-Z][\w-]*/,attrs:{match:/\{.*\}/,value:e=>at(e.slice(1,-1))},text:{match:/\[.*\]/,value:e=>e.slice(1,-1)},blockText:{match:/[\s\S]+/,lineBreaks:!0}});function ct(e){const{type:t,level:r,raw:n,content:s,marker:i,tag:o}=e,a=lt.reset(s);let l,c,p="",u=[];for(const{type:e,value:t}of a)switch(e){case"name":l=t;break;case"attrs":c=t;break;case"text":case"blockText":p=t,u="container"===r?this.lexer.blockTokens(t):this.lexer.inlineTokens(t)}return{type:t,raw:n,meta:{level:r,marker:i,tag:o,name:l},attrs:c,text:p,tokens:u}}function pt(e){return["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"].includes(e)}function ut(e){const{meta:t,attrs:r,tokens:n=[]}=e,s=t.name||t.tag;let i=`<${s}`;return i+=r?" "+r.toString():"",i+=pt(s)?" />":">",i+="container"===t.level?"\n":"",pt(s)||(i+="container"===t.level?this.parser.parse(n):this.parser.parseInline(n),i+=`</${s}>`),i+="inline"===t.level?"":"\n",i}const dt=[{level:"container",marker:":::"},{level:"block",marker:"::"},{level:"inline",marker:":"}];function ht(e=dt){return{extensions:e.map((({level:e,marker:t,tag:r,renderer:n})=>{const s=Xe(t).int32(),i=`directive${function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}(e)}${s}`;return{name:i,level:"inline"===e?"inline":"block",start:e=>{var r;return null==(r=e.match(new RegExp(t)))?void 0:r.index},tokenizer(n){const s=function(e,t){switch(e){case"container":return`^${t}([\\s\\S]*?)\\n${t}`;case"block":return`^${t}((?:[a-zA-Z][\\w-]*|[\\{\\[].*?[\\}\\]])+)`;case"inline":return`^${t}((?:[a-zA-Z][\\w-]*|[\\{].*?[\\}]+|[\\[].*?[\\]])+)`}}(e,t),o=n.match(new RegExp(s));if(o){const[n,s=""]=o;return ct.call(this,{type:i,level:e,raw:n,content:s,marker:t,tag:r||("inline"===e?"span":"div")})}},renderer:n||ut}}))}}var ft=r(660),mt=r.n(ft);r(251),r(358),r(46),r(503),r(277),r(874),r(366),r(57),r(16);const yt=c`
  .hover-bg:hover {
    background: var(--bg3);
  }
  ::selection {
    background: var(--selection-bg);
    color: var(--selection-fg);
  }
  .regular-font {
    font-family: var(--font-regular);
  }
  .mono-font {
    font-family: var(--font-mono);
  }
  .title {
    font-size: calc(var(--font-size-small) + 18px);
    font-weight: normal;
  }
  .sub-title {
    font-size: 20px;
  }
  .req-res-title {
    font-family: var(--font-regular);
    font-size: calc(var(--font-size-small) + 4px);
    font-weight: bold;
    margin-bottom: 8px;
    text-align: left;
  }
  .tiny-title {
    font-size: calc(var(--font-size-small) + 1px);
    font-weight: bold;
  }
  .regular-font-size {
    font-size: var(--font-size-regular);
  }
  .small-font-size {
    font-size: var(--font-size-small);
  }
  .upper {
    text-transform: uppercase;
  }
  .primary-text {
    color: var(--primary-color);
  }
  .bold-text {
    font-weight: bold;
  }
  .gray-text {
    color: var(--light-fg);
  }
  .red-text {
    color: var(--red);
  }
  .blue-text {
    color: var(--blue);
  }
  .multiline {
    overflow: scroll;
    max-height: var(--resp-area-height, 400px);
    color: var(--fg3);
  }
  .method-fg.put {
    color: var(--orange);
  }
  .method-fg.post {
    color: var(--green);
  }
  .method-fg.get {
    color: var(--blue);
  }
  .method-fg.delete {
    color: var(--red);
  }
  .method-fg.options,
  .method-fg.head,
  .method-fg.patch {
    color: var(--yellow);
  }

  h1 {
    font-family: var(--font-regular);
    font-size: 28px;
    padding-top: 10px;
    letter-spacing: normal;
    font-weight: normal;
  }
  h2 {
    font-family: var(--font-regular);
    font-size: 24px;
    padding-top: 10px;
    letter-spacing: normal;
    font-weight: normal;
  }
  h3 {
    font-family: var(--font-regular);
    font-size: 18px;
    padding-top: 10px;
    letter-spacing: normal;
    font-weight: normal;
  }
  h4 {
    font-family: var(--font-regular);
    font-size: 16px;
    padding-top: 10px;
    letter-spacing: normal;
    font-weight: normal;
  }
  h5 {
    font-family: var(--font-regular);
    font-size: 14px;
    padding-top: 10px;
    letter-spacing: normal;
    font-weight: normal;
  }
  h6 {
    font-family: var(--font-regular);
    font-size: 14px;
    padding-top: 10px;
    letter-spacing: normal;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h5 {
    margin-block-end: 0.2em;
  }
  p {
    margin-block-start: 0.5em;
  }
  a {
    color: var(--blue);
    cursor: pointer;
  }
  a.inactive-link {
    color: var(--fg);
    text-decoration: none;
    cursor: text;
  }

  code,
  pre {
    margin: 0px;
    font-family: var(--font-mono);
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown,
  .m-markdown-small {
    display: block;
  }

  .m-markdown p,
  .m-markdown span {
    font-size: var(--font-size-regular);
    line-height: calc(var(--font-size-regular) + 8px);
  }
  .m-markdown li {
    font-size: var(--font-size-regular);
    line-height: calc(var(--font-size-regular) + 10px);
  }

  .m-markdown-small p,
  .m-markdown-small span,
  .m-markdown-small li {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 6px);
  }
  .m-markdown-small li {
    line-height: calc(var(--font-size-small) + 8px);
  }

  .m-markdown p:not(:first-child) {
    margin-block-start: 24px;
  }

  .m-markdown-small p:not(:first-child) {
    margin-block-start: 12px;
  }
  .m-markdown-small p:first-child {
    margin-block-start: 0;
  }

  .m-markdown p,
  .m-markdown-small p {
    margin-block-end: 0;
  }

  .m-markdown code span {
    font-size: var(--font-size-mono);
  }

  .m-markdown-small code,
  .m-markdown code {
    padding: 1px 6px;
    border-radius: 2px;
    color: var(--inline-code-fg);
    background-color: var(--bg3);
    font-size: calc(var(--font-size-mono));
    line-height: 1.2;
  }

  .m-markdown-small code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown-small pre,
  .m-markdown pre {
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid var(--code-border-color);
  }

  .m-markdown pre {
    padding: 12px;
    background-color: var(--code-bg);
    color: var(--code-fg);
  }

  .m-markdown-small pre {
    margin-top: 4px;
    padding: 2px 4px;
    background-color: var(--bg3);
    color: var(--fg2);
  }

  .m-markdown-small pre code,
  .m-markdown pre code {
    border: none;
    padding: 0;
  }

  .m-markdown pre code {
    color: var(--code-fg);
    background-color: var(--code-bg);
    background-color: transparent;
  }

  .m-markdown-small pre code {
    color: var(--fg2);
    background-color: var(--bg3);
  }

  .m-markdown ul,
  .m-markdown ol {
    padding-inline-start: 30px;
  }

  .m-markdown-small ul,
  .m-markdown-small ol {
    padding-inline-start: 20px;
  }

  .m-markdown-small a,
  .m-markdown a {
    color: var(--blue);
  }

  .m-markdown-small img,
  .m-markdown img {
    max-width: 100%;
  }

  /* Markdown table */

  .m-markdown-small table,
  .m-markdown table {
    border-spacing: 0;
    margin: 10px 0;
    border-collapse: separate;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: calc(var(--font-size-small) + 1px);
    line-height: calc(var(--font-size-small) + 4px);
    max-width: 100%;
  }

  .m-markdown-small table {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 2px);
    margin: 8px 0;
  }

  .m-markdown-small td,
  .m-markdown-small th,
  .m-markdown td,
  .m-markdown th {
    vertical-align: top;
    border-top: 1px solid var(--border-color);
    line-height: calc(var(--font-size-small) + 4px);
  }

  .m-markdown-small tr:first-child th,
  .m-markdown tr:first-child th {
    border-top: 0 none;
  }

  .m-markdown th,
  .m-markdown td {
    padding: 10px 12px;
  }

  .m-markdown-small th,
  .m-markdown-small td {
    padding: 8px 8px;
  }

  .m-markdown th,
  .m-markdown-small th {
    font-weight: 600;
    background-color: var(--bg2);
    vertical-align: middle;
  }

  .m-markdown-small table code {
    font-size: calc(var(--font-size-mono) - 2px);
  }

  .m-markdown table code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown blockquote,
  .m-markdown-small blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 3px solid var(--border-color);
    padding: 6px 0 6px 6px;
  }
  .m-markdown hr {
    border: 1px solid var(--border-color);
  }

  aside {
    padding-top: 1em;
    padding-bottom: 1em;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    line-height: 1.6;
    padding-left: 28px;
    position: relative;
  }
  aside:before {
    position: absolute;
    left: 0.5em;
    top: 1.3em;
    vertical-align: middle;
    padding-right: 0.5em;
    font-size: 14px;
    font-weight: bold;
    display: inline;
  }
  .notice {
    background: #8fbcd4;
  }
  .notice:before {
    content: '\\24D8';
  }
  .danger {
    background: #e58fa9;
  }
  .danger:before {
    content: '\\26A0';
  }
`,gt=c`
  /* Button */
  .m-btn {
    border-radius: var(--border-radius);
    font-weight: 600;
    display: inline-block;
    padding: 6px 16px;
    font-size: var(--font-size-small);
    outline: 0;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    border: 2px solid var(--primary-color);
    background-color: transparent;
    transition: background-color 0.2s;
    user-select: none;
    cursor: pointer;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .m-btn.primary {
    background-color: var(--primary-color);
    color: var(--primary-color-invert);
  }
  .m-btn.thin-border {
    border-width: 1px;
  }
  .m-btn.large {
    padding: 8px 14px;
  }
  .m-btn.small {
    padding: 5px 12px;
  }
  .m-btn.tiny {
    padding: 5px 6px;
  }
  .m-btn.circle {
    border-radius: 50%;
  }
  .m-btn:hover {
    background-color: var(--primary-color);
    color: var(--primary-color-invert);
  }
  .m-btn.nav {
    border: 2px solid var(--nav-accent-color);
  }
  .m-btn.nav:hover {
    background-color: var(--nav-accent-color);
  }
  .m-btn:disabled {
    background-color: var(--bg3);
    color: var(--fg3);
    border-color: var(--fg3);
    cursor: not-allowed;
    opacity: 0.4;
  }
  .toolbar-btn {
    cursor: pointer;
    padding: 4px;
    margin: 0 2px;
    font-size: var(--font-size-small);
    min-width: 50px;
    color: var(--primary-color-invert);
    border-radius: 2px;
    border: none;
    background-color: var(--primary-color);
  }

  input,
  textarea,
  select,
  button,
  pre {
    color: var(--fg);
    outline: none;
    background-color: var(--input-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
  }
  button {
    font-family: var(--font-regular);
  }

  /* Form Inputs */
  pre,
  select,
  textarea,
  input[type='file'],
  input[type='text'],
  input[type='password'] {
    font-family: var(--font-mono);
    font-weight: 400;
    font-size: var(--font-size-small);
    transition: border 0.2s;
    padding: 6px 5px;
  }

  select {
    font-family: var(--font-regular);
    padding: 5px 30px 5px 5px;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%3Cpath%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3A1%201%200%2000.3%204.7l5%205a1%201%200%20001.4%200l5-5a1%201%200%2010-1.4-1.4z%22%20fill%3D%22%23777777%22%2F%3E%3C%2Fsvg%3E');
    background-position: calc(100% - 5px) center;
    background-repeat: no-repeat;
    background-size: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }

  select:hover {
    border-color: var(--primary-color);
  }

  textarea::placeholder,
  input[type='text']::placeholder,
  input[type='password']::placeholder {
    color: var(--placeholder-color);
    opacity: 1;
  }

  input[type='file'] {
    font-family: var(--font-regular);
    padding: 2px;
    cursor: pointer;
    border: 1px solid var(--primary-color);
    min-height: calc(var(--font-size-small) + 18px);
  }

  input[type='file']::-webkit-file-upload-button {
    font-family: var(--font-regular);
    font-size: var(--font-size-small);
    outline: none;
    cursor: pointer;
    padding: 3px 8px;
    border: 1px solid var(--primary-color);
    background-color: var(--primary-color);
    color: var(--primary-color-invert);
    border-radius: var(--border-radius);
    -webkit-appearance: none;
  }

  pre,
  textarea {
    scrollbar-width: thin;
    scrollbar-color: var(--border-color) var(--input-bg);
  }

  pre::-webkit-scrollbar,
  textarea::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  pre::-webkit-scrollbar-track,
  textarea::-webkit-scrollbar-track {
    background: var(--input-bg);
  }

  pre::-webkit-scrollbar-thumb,
  textarea::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: var(--border-color);
  }

  .link {
    font-size: var(--font-size-small);
    text-decoration: underline;
    color: var(--blue);
    font-family: var(--font-mono);
    margin-bottom: 2px;
  }

  /* Toggle Body */
  input[type='checkbox'] {
    appearance: none;
    display: inline-block;
    background-color: var(--light-bg);
    border: 1px solid var(--light-bg);
    border-radius: 9px;
    cursor: pointer;
    height: 18px;
    position: relative;
    transition:
      border 0.25s 0.15s,
      box-shadow 0.25s 0.3s,
      padding 0.25s;
    min-width: 36px;
    width: 36px;
    vertical-align: top;
  }
  /* Toggle Thumb */
  input[type='checkbox']:after {
    position: absolute;
    background-color: var(--bg);
    border: 1px solid var(--light-bg);
    border-radius: 8px;
    content: '';
    top: 0px;
    left: 0px;
    right: 16px;
    display: block;
    height: 16px;
    transition:
      border 0.25s 0.15s,
      left 0.25s 0.1s,
      right 0.15s 0.175s;
  }

  /* Toggle Body - Checked */
  input[type='checkbox']:checked {
    background-color: var(--green);
    border-color: var(--green);
  }
  /* Toggle Thumb - Checked*/
  input[type='checkbox']:checked:after {
    border: 1px solid var(--green);
    left: 16px;
    right: 1px;
    transition:
      border 0.25s,
      left 0.15s 0.25s,
      right 0.25s 0.175s;
  }
`,vt=c`
  .row,
  .col {
    display: flex;
  }
  .row {
    align-items: center;
    flex-direction: row;
  }
  .col {
    align-items: stretch;
    flex-direction: column;
  }
`,bt=c`
  .m-table {
    border-spacing: 0;
    border-collapse: separate;
    border: 1px solid var(--light-border-color);
    border-radius: var(--border-radius);
    margin: 0;
    max-width: 100%;
    direction: ltr;
  }
  .m-table tr:first-child td,
  .m-table tr:first-child th {
    border-top: 0 none;
  }
  .m-table td,
  .m-table th {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 4px);
    padding: 4px 5px 4px;
    vertical-align: top;
  }

  .m-table.padded-12 td,
  .m-table.padded-12 th {
    padding: 12px;
  }

  .m-table td:not([align]),
  .m-table th:not([align]) {
    text-align: left;
  }

  .m-table th {
    color: var(--fg2);
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 18px);
    font-weight: 600;
    letter-spacing: normal;
    background-color: var(--bg2);
    vertical-align: bottom;
    border-bottom: 1px solid var(--light-border-color);
  }

  .m-table > tbody > tr > td,
  .m-table > tr > td {
    border-top: 1px solid var(--light-border-color);
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .table-title {
    font-size: var(--font-size-small);
    font-weight: bold;
    vertical-align: middle;
    margin: 12px 0 4px 0;
  }
`,xt=c`
  .only-large-screen {
    display: none;
  }
  .endpoint-head .path {
    display: flex;
    font-family: var(--font-mono);
    font-size: var(--font-size-small);
    align-items: center;
    overflow-wrap: break-word;
    word-break: break-all;
  }

  .endpoint-head .descr {
    font-size: var(--font-size-small);
    color: var(--light-fg);
    font-weight: 400;
    align-items: center;
    overflow-wrap: break-word;
    word-break: break-all;
    display: none;
  }

  .m-endpoint.expanded {
    margin-bottom: 16px;
  }
  .m-endpoint > .endpoint-head {
    border-width: 1px 1px 1px 5px;
    border-style: solid;
    border-color: transparent;
    border-top-color: var(--light-border-color);
    display: flex;
    padding: 6px 16px;
    align-items: center;
    cursor: pointer;
  }
  .m-endpoint > .endpoint-head.put:hover,
  .m-endpoint > .endpoint-head.put.expanded {
    border-color: var(--orange);
    background-color: var(--light-orange);
  }
  .m-endpoint > .endpoint-head.post:hover,
  .m-endpoint > .endpoint-head.post.expanded {
    border-color: var(--green);
    background-color: var(--light-green);
  }
  .m-endpoint > .endpoint-head.get:hover,
  .m-endpoint > .endpoint-head.get.expanded {
    border-color: var(--blue);
    background-color: var(--light-blue);
  }
  .m-endpoint > .endpoint-head.delete:hover,
  .m-endpoint > .endpoint-head.delete.expanded {
    border-color: var(--red);
    background-color: var(--light-red);
  }

  .m-endpoint > .endpoint-head.head:hover,
  .m-endpoint > .endpoint-head.head.expanded,
  .m-endpoint > .endpoint-head.patch:hover,
  .m-endpoint > .endpoint-head.patch.expanded,
  .m-endpoint > .endpoint-head.options:hover,
  .m-endpoint > .endpoint-head.options.expanded {
    border-color: var(--yellow);
    background-color: var(--light-yellow);
  }

  .m-endpoint > .endpoint-head.deprecated:hover,
  .m-endpoint > .endpoint-head.deprecated.expanded {
    border-color: var(--border-color);
    filter: opacity(0.6);
  }

  .m-endpoint .endpoint-body {
    flex-wrap: wrap;
    padding: 16px 0px 0 0px;
    border-width: 0px 1px 1px 5px;
    border-style: solid;
    box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.15);
  }
  .m-endpoint .endpoint-body.delete {
    border-color: var(--red);
  }
  .m-endpoint .endpoint-body.put {
    border-color: var(--orange);
  }
  .m-endpoint .endpoint-body.post {
    border-color: var(--green);
  }
  .m-endpoint .endpoint-body.get {
    border-color: var(--blue);
  }
  .m-endpoint .endpoint-body.head,
  .m-endpoint .endpoint-body.patch,
  .m-endpoint .endpoint-body.options {
    border-color: var(--yellow);
  }

  .m-endpoint .endpoint-body.deprecated {
    border-color: var(--border-color);
    filter: opacity(0.6);
  }

  .endpoint-head .deprecated {
    color: var(--light-fg);
    filter: opacity(0.6);
  }

  .summary {
    padding: 8px 8px;
  }
  .summary .title {
    font-size: calc(var(--font-size-regular) + 2px);
    margin-bottom: 6px;
    word-break: break-all;
  }

  .endpoint-head .method {
    padding: 2px 5px;
    vertical-align: middle;
    font-size: var(--font-size-small);
    height: calc(var(--font-size-small) + 16px);
    line-height: calc(var(--font-size-small) + 8px);
    width: 60px;
    border-radius: 2px;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 5px;
  }
  .endpoint-head .method.delete {
    border: 2px solid var(--red);
  }
  .endpoint-head .method.put {
    border: 2px solid var(--orange);
  }
  .endpoint-head .method.post {
    border: 2px solid var(--green);
  }
  .endpoint-head .method.get {
    border: 2px solid var(--blue);
  }
  .endpoint-head .method.get.deprecated {
    border: 2px solid var(--border-color);
  }
  .endpoint-head .method.head,
  .endpoint-head .method.patch,
  .endpoint-head .method.options {
    border: 2px solid var(--yellow);
  }

  .req-resp-container {
    display: flex;
    margin-top: 16px;
    align-items: stretch;
    flex-wrap: wrap;
    flex-direction: column;
    border-top: 1px solid var(--light-border-color);
  }

  .view-mode-request,
  api-response.view-mode {
    flex: 1;
    min-height: 100px;
    padding: 16px 8px;
    overflow: hidden;
  }
  .view-mode-request {
    border-width: 0 0 1px 0;
    border-style: dashed;
  }

  .head .view-mode-request,
  .patch .view-mode-request,
  .options .view-mode-request {
    border-color: var(--yellow);
  }
  .put .view-mode-request {
    border-color: var(--orange);
  }
  .post .view-mode-request {
    border-color: var(--green);
  }
  .get .view-mode-request {
    border-color: var(--blue);
  }
  .delete .view-mode-request {
    border-color: var(--red);
  }

  @media only screen and (min-width: 1024px) {
    .only-large-screen {
      display: block;
    }
    .endpoint-head .path {
      font-size: var(--font-size-regular);
    }
    .endpoint-head .descr {
      display: flex;
    }
    .endpoint-head .m-markdown-small,
    .descr .m-markdown-small {
      display: block;
    }
    .req-resp-container {
      flex-direction: var(--layout, row);
      flex-wrap: nowrap;
    }
    api-response.view-mode {
      padding: 16px;
    }
    .view-mode-request.row-layout {
      border-width: 0 1px 0 0;
      padding: 16px;
    }
    .summary {
      padding: 8px 16px;
    }
  }
`,wt=c`
  code[class*='language-'],
  pre[class*='language-'] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    white-space: normal;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: var(--light-fg);
  }

  .token.punctuation {
    color: var(--fg);
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: var(--pink);
  }

  .token.function-name {
    color: var(--blue);
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: var(--red);
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: var(--code-property-color);
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: var(--code-keyword-color);
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: var(--green);
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: var(--code-operator-color);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`,$t=c`
  .tab-panel {
    border: none;
  }
  .tab-buttons {
    height: 30px;
    padding: 4px 4px 0 4px;
    border-bottom: 1px solid var(--light-border-color);
    align-items: stretch;
    overflow-y: hidden;
    overflow-x: auto;
    scrollbar-width: thin;
  }
  .tab-buttons::-webkit-scrollbar {
    height: 1px;
    background-color: var(--border-color);
  }
  .tab-btn {
    border: none;
    border-bottom: 3px solid transparent;
    color: var(--light-fg);
    background-color: transparent;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    font-family: var(--font-regular);
    font-size: var(--font-size-small);
    margin-right: 16px;
    padding: 1px;
  }
  .tab-btn.active {
    border-bottom: 3px solid var(--primary-color);
    font-weight: bold;
    color: var(--primary-color);
  }

  .tab-btn:hover {
    color: var(--primary-color);
  }
  .tab-content {
    margin: -1px 0 0 0;
    position: relative;
    min-height: 50px;
  }
`,St=c`
  .nav-bar-info:focus-visible,
  .nav-bar-tag:focus-visible,
  .nav-bar-path:focus-visible {
    outline: 1px solid;
    box-shadow: none;
    outline-offset: -4px;
  }
  .nav-bar-expand-all:focus-visible,
  .nav-bar-collapse-all:focus-visible,
  .nav-bar-tag-icon:focus-visible {
    outline: 1px solid;
    box-shadow: none;
    outline-offset: 2px;
  }
  .nav-bar {
    width: 0;
    height: 100%;
    overflow: hidden;
    color: var(--nav-text-color);
    background-color: var(--nav-bg-color);
    background-blend-mode: multiply;
    line-height: calc(var(--font-size-small) + 4px);
    display: none;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    word-break: break-word;
  }
  ::slotted([slot='nav-logo']) {
    padding: 16px 16px 0 16px;
  }
  .nav-scroll {
    overflow-x: hidden;
    overflow-y: auto;
    overflow-y: overlay;
    scrollbar-width: thin;
    scrollbar-color: var(--nav-hover-bg-color) transparent;
  }

  .nav-bar-tag {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
  .nav-bar.read .nav-bar-tag-icon {
    display: none;
  }
  .nav-bar-paths-under-tag {
    overflow: hidden;
    transition:
      max-height 0.2s ease-out,
      visibility 0.3s;
  }
  .collapsed .nav-bar-paths-under-tag {
    visibility: hidden;
  }

  .nav-bar-expand-all {
    transform: rotate(90deg);
    cursor: pointer;
    margin-right: 10px;
  }
  .nav-bar-collapse-all {
    transform: rotate(270deg);
    cursor: pointer;
  }
  .nav-bar-expand-all:hover,
  .nav-bar-collapse-all:hover {
    color: var(--primary-color);
  }

  .nav-bar-tag-icon {
    color: var(--nav-text-color);
    font-size: 20px;
  }
  .nav-bar-tag-icon:hover {
    color: var(--nav-hover-text-color);
  }
  .nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-tag-icon::after {
    content: '⌵';
    width: 16px;
    height: 16px;
    text-align: center;
    display: inline-block;
    transform: rotate(-90deg);
    transition: transform 0.2s ease-out 0s;
  }
  .nav-bar.focused .nav-bar-tag-and-paths.expanded .nav-bar-tag-icon::after {
    content: '⌵';
    width: 16px;
    height: 16px;
    text-align: center;
    display: inline-block;
    transition: transform 0.2s ease-out 0s;
  }
  .nav-scroll::-webkit-scrollbar {
    width: var(--scroll-bar-width, 8px);
  }
  .nav-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  .nav-scroll::-webkit-scrollbar-thumb {
    background-color: var(--nav-hover-bg-color);
  }

  .nav-bar-tag {
    font-size: var(--font-size-regular);
    color: var(--nav-accent-color);
    border-left: 4px solid transparent;
    font-weight: bold;
    padding: 15px 15px 15px 10px;
    text-transform: capitalize;
  }

  .nav-bar-components,
  .nav-bar-h1,
  .nav-bar-h2,
  .nav-bar-info,
  .nav-bar-tag,
  .nav-bar-path {
    display: flex;
    cursor: pointer;
    width: 100%;
    border: none;
    border-radius: 4px;
    color: var(--nav-text-color);
    background: transparent;
    border-left: 4px solid transparent;
  }

  .nav-bar-h1,
  .nav-bar-h2,
  .nav-bar-path {
    font-size: calc(var(--font-size-small) + 1px);
    padding: var(--nav-item-padding);
  }
  .nav-bar-path.small-font {
    font-size: var(--font-size-small);
  }

  .nav-bar-info {
    font-size: var(--font-size-regular);
    padding: 16px 10px;
    font-weight: bold;
  }
  .nav-bar-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: var(--font-size-small);
    color: var(--nav-text-color);
    padding: var(--nav-item-padding);
    font-weight: bold;
  }
  .nav-bar-section.operations {
    cursor: pointer;
  }
  .nav-bar-section.operations:hover {
    color: var(--nav-hover-text-color);
    background-color: var(--nav-hover-bg-color);
  }

  .nav-bar-section:first-child {
    display: none;
  }
  .nav-bar-h2 {
    margin-left: 12px;
  }

  .nav-bar-h1.left-bar.active,
  .nav-bar-h2.left-bar.active,
  .nav-bar-info.left-bar.active,
  .nav-bar-tag.left-bar.active,
  .nav-bar-path.left-bar.active,
  .nav-bar-section.left-bar.operations.active {
    border-left: 4px solid var(--nav-accent-color);
    color: var(--nav-hover-text-color);
  }

  .nav-bar-h1.colored-block.active,
  .nav-bar-h2.colored-block.active,
  .nav-bar-info.colored-block.active,
  .nav-bar-tag.colored-block.active,
  .nav-bar-path.colored-block.active,
  .nav-bar-section.colored-block.operations.active {
    background-color: var(--nav-accent-color);
    color: var(--nav-accent-text-color);
    border-radius: 0;
  }

  .nav-bar-h1:hover,
  .nav-bar-h2:hover,
  .nav-bar-info:hover,
  .nav-bar-tag:hover,
  .nav-bar-path:hover {
    color: var(--nav-hover-text-color);
    background-color: var(--nav-hover-bg-color);
  }
`,Et=c`
  #api-info {
    font-size: calc(var(--font-size-regular) - 1px);
    margin-top: 8px;
    margin-left: -15px;
  }

  #api-info span:before {
    content: '|';
    display: inline-block;
    opacity: 0.5;
    width: 15px;
    text-align: center;
  }
  #api-info span:first-child:before {
    content: '';
    width: 0px;
  }
`,kt=c``;const Ot=/[\s#:?&={}]/g,jt="_rapidoc_api_key";function At(e){return new Promise((t=>setTimeout(t,e)))}function Pt(e,t){const r=t.target,n=document.createElement("textarea");n.value=e,n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy"),r.innerText="Copied",setTimeout((()=>{r.innerText="Copy"}),5e3)}catch(e){console.error("Unable to copy",e)}document.body.removeChild(n)}function Tt(e,t,r="includes"){if("includes"===r){return`${t.method} ${t.path} ${t.summary||t.description||""} ${t.operationId||""}`.toLowerCase().includes(e.toLowerCase())}return new RegExp(e,"i").test(`${t.method} ${t.path}`)}function Ct(e,t=new Set){return e?(Object.keys(e).forEach((r=>{var n;if(t.add(r),e[r].properties)Ct(e[r].properties,t);else if(null!==(n=e[r].items)&&void 0!==n&&n.properties){var s;Ct(null===(s=e[r].items)||void 0===s?void 0:s.properties,t)}})),t):t}function It(e,t){if(e){const r=document.createElement("a");document.body.appendChild(r),r.style="display: none",r.href=e,r.download=t,r.click(),r.remove()}}function Rt(e){if(e){const t=document.createElement("a");document.body.appendChild(t),t.style="display: none",t.href=e,t.target="_blank",t.click(),t.remove()}}function _t(e){return e&&e.t&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ft=function(e){return e&&e.Math==Math&&e},Dt=Ft("object"==typeof globalThis&&globalThis)||Ft("object"==typeof window&&window)||Ft("object"==typeof self&&self)||Ft("object"==typeof Dt&&Dt)||function(){return this}()||globalThis||Function("return this")(),Mt=function(e){try{return!!e()}catch(e){return!0}},qt=!Mt((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})),Lt=qt,Bt=Function.prototype,Nt=Bt.apply,Ut=Bt.call,zt="object"==typeof Reflect&&Reflect.apply||(Lt?Ut.bind(Nt):function(){return Ut.apply(Nt,arguments)}),Ht=qt,Vt=Function.prototype,Wt=Vt.call,Gt=Ht&&Vt.bind.bind(Wt,Wt),Jt=Ht?Gt:function(e){return function(){return Wt.apply(e,arguments)}},Kt=Jt,Zt=Kt({}.toString),Yt=Kt("".slice),Xt=function(e){return Yt(Zt(e),8,-1)},Qt=Xt,er=Jt,tr=function(e){if("Function"===Qt(e))return er(e)},rr="object"==typeof document&&document.all,nr={all:rr,IS_HTMLDDA:void 0===rr&&void 0!==rr},sr=nr.all,ir=nr.IS_HTMLDDA?function(e){return"function"==typeof e||e===sr}:function(e){return"function"==typeof e},or={},ar=!Mt((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),lr=qt,cr=Function.prototype.call,pr=lr?cr.bind(cr):function(){return cr.apply(cr,arguments)},ur={},dr={}.propertyIsEnumerable,hr=Object.getOwnPropertyDescriptor,fr=hr&&!dr.call({1:2},1);ur.f=fr?function(e){var t=hr(this,e);return!!t&&t.enumerable}:dr;var mr,yr,gr=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},vr=Mt,br=Xt,xr=Object,wr=Jt("".split),$r=vr((function(){return!xr("z").propertyIsEnumerable(0)}))?function(e){return"String"==br(e)?wr(e,""):xr(e)}:xr,Sr=function(e){return null==e},Er=Sr,kr=TypeError,Or=function(e){if(Er(e))throw kr("Can't call method on "+e);return e},jr=$r,Ar=Or,Pr=function(e){return jr(Ar(e))},Tr=ir,Cr=nr.all,Ir=nr.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:Tr(e)||e===Cr}:function(e){return"object"==typeof e?null!==e:Tr(e)},Rr={},_r=Rr,Fr=Dt,Dr=ir,Mr=function(e){return Dr(e)?e:void 0},qr=function(e,t){return arguments.length<2?Mr(_r[e])||Mr(Fr[e]):_r[e]&&_r[e][t]||Fr[e]&&Fr[e][t]},Lr=Jt({}.isPrototypeOf),Br=Dt,Nr="undefined"!=typeof navigator&&String(navigator.userAgent)||"",Ur=Br.process,zr=Br.Deno,Hr=Ur&&Ur.versions||zr&&zr.version,Vr=Hr&&Hr.v8;Vr&&(yr=(mr=Vr.split("."))[0]>0&&mr[0]<4?1:+(mr[0]+mr[1])),!yr&&Nr&&(!(mr=Nr.match(/Edge\/(\d+)/))||mr[1]>=74)&&(mr=Nr.match(/Chrome\/(\d+)/))&&(yr=+mr[1]);var Wr=yr,Gr=Wr,Jr=Mt,Kr=Dt.String,Zr=!!Object.getOwnPropertySymbols&&!Jr((function(){var e=Symbol();return!Kr(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Gr&&Gr<41})),Yr=Zr&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Xr=qr,Qr=ir,en=Lr,tn=Object,rn=Yr?function(e){return"symbol"==typeof e}:function(e){var t=Xr("Symbol");return Qr(t)&&en(t.prototype,tn(e))},nn=String,sn=function(e){try{return nn(e)}catch(e){return"Object"}},on=ir,an=sn,ln=TypeError,cn=function(e){if(on(e))return e;throw ln(an(e)+" is not a function")},pn=cn,un=Sr,dn=pr,hn=ir,fn=Ir,mn=TypeError,yn={exports:{}},gn=Dt,vn=Object.defineProperty,bn=Dt.u||function(e,t){try{vn(gn,e,{value:t,configurable:!0,writable:!0})}catch(r){gn[e]=t}return t}("__core-js_shared__",{}),xn=bn;(yn.exports=function(e,t){return xn[e]||(xn[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.31.0",mode:"pure",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",source:"https://github.com/zloirock/core-js"});var wn=yn.exports,$n=Or,Sn=Object,En=function(e){return Sn($n(e))},kn=En,On=Jt({}.hasOwnProperty),jn=Object.hasOwn||function(e,t){return On(kn(e),t)},An=Jt,Pn=0,Tn=Math.random(),Cn=An(1..toString),In=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Cn(++Pn+Tn,36)},Rn=wn,_n=jn,Fn=In,Dn=Zr,Mn=Yr,qn=Dt.Symbol,Ln=Rn("wks"),Bn=Mn?qn.for||qn:qn&&qn.withoutSetter||Fn,Nn=function(e){return _n(Ln,e)||(Ln[e]=Dn&&_n(qn,e)?qn[e]:Bn("Symbol."+e)),Ln[e]},Un=pr,zn=Ir,Hn=rn,Vn=TypeError,Wn=Nn("toPrimitive"),Gn=function(e,t){if(!zn(e)||Hn(e))return e;var r,n=function(e,t){var r=e[t];return un(r)?void 0:pn(r)}(e,Wn);if(n){if(void 0===t&&(t="default"),r=Un(n,e,t),!zn(r)||Hn(r))return r;throw Vn("Can't convert object to primitive value")}return void 0===t&&(t="number"),function(e,t){var r,n;if("string"===t&&hn(r=e.toString)&&!fn(n=dn(r,e)))return n;if(hn(r=e.valueOf)&&!fn(n=dn(r,e)))return n;if("string"!==t&&hn(r=e.toString)&&!fn(n=dn(r,e)))return n;throw mn("Can't convert object to primitive value")}(e,t)},Jn=rn,Kn=function(e){var t=Gn(e,"string");return Jn(t)?t:t+""},Zn=Ir,Yn=Dt.document,Xn=Zn(Yn)&&Zn(Yn.createElement),Qn=function(e){return Xn?Yn.createElement(e):{}},es=Qn,ts=!ar&&!Mt((function(){return 7!=Object.defineProperty(es("div"),"a",{get:function(){return 7}}).a})),rs=ar,ns=pr,ss=ur,is=gr,os=Pr,as=Kn,ls=jn,cs=ts,ps=Object.getOwnPropertyDescriptor;or.f=rs?ps:function(e,t){if(e=os(e),t=as(t),cs)try{return ps(e,t)}catch(e){}if(ls(e,t))return is(!ns(ss.f,e,t),e[t])};var us=Mt,ds=ir,hs=/#|\.prototype\./,fs=function(e,t){var r=ys[ms(e)];return r==vs||r!=gs&&(ds(t)?us(t):!!t)},ms=fs.normalize=function(e){return String(e).replace(hs,".").toLowerCase()},ys=fs.data={},gs=fs.NATIVE="N",vs=fs.POLYFILL="P",bs=fs,xs=cn,ws=qt,$s=tr(tr.bind),Ss=function(e,t){return xs(e),void 0===t?e:ws?$s(e,t):function(){return e.apply(t,arguments)}},Es={},ks=ar&&Mt((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Os=Ir,js=String,As=TypeError,Ps=function(e){if(Os(e))return e;throw As(js(e)+" is not an object")},Ts=ar,Cs=ts,Is=ks,Rs=Ps,_s=Kn,Fs=TypeError,Ds=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor;Es.f=Ts?Is?function(e,t,r){if(Rs(e),t=_s(t),Rs(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=Ms(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return Ds(e,t,r)}:Ds:function(e,t,r){if(Rs(e),t=_s(t),Rs(r),Cs)try{return Ds(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Fs("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var qs=Es,Ls=gr,Bs=ar?function(e,t,r){return qs.f(e,t,Ls(1,r))}:function(e,t,r){return e[t]=r,e},Ns=Dt,Us=zt,zs=tr,Hs=ir,Vs=or.f,Ws=bs,Gs=Rr,Js=Ss,Ks=Bs,Zs=jn,Ys=function(e){var t=function(r,n,s){if(this instanceof t){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,s)}return Us(e,this,arguments)};return t.prototype=e.prototype,t},Xs=function(e,t){var r,n,s,i,o,a,l,c,p,u=e.target,d=e.global,h=e.stat,f=e.proto,m=d?Ns:h?Ns[u]:(Ns[u]||{}).prototype,y=d?Gs:Gs[u]||Ks(Gs,u,{})[u],g=y.prototype;for(i in t)n=!(r=Ws(d?i:u+(h?".":"#")+i,e.forced))&&m&&Zs(m,i),a=y[i],n&&(l=e.dontCallGetSet?(p=Vs(m,i))&&p.value:m[i]),o=n&&l?l:t[i],n&&typeof a==typeof o||(c=e.bind&&n?Js(o,Ns):e.wrap&&n?Ys(o):f&&Hs(o)?zs(o):o,(e.sham||o&&o.sham||a&&a.sham)&&Ks(c,"sham",!0),Ks(y,i,c),f&&(Zs(Gs,s=u+"Prototype")||Ks(Gs,s,{}),Ks(Gs[s],i,o),e.real&&g&&(r||!g[i])&&Ks(g,i,o)))},Qs=Math.ceil,ei=Math.floor,ti=Math.trunc||function(e){var t=+e;return(t>0?ei:Qs)(t)},ri=function(e){var t=+e;return t!=t||0===t?0:ti(t)},ni=ri,si=Math.max,ii=Math.min,oi=function(e,t){var r=ni(e);return r<0?si(r+t,0):ii(r,t)},ai=ri,li=Math.min,ci=function(e){return function(e){return e>0?li(ai(e),9007199254740991):0}(e.length)},pi=Pr,ui=oi,di=ci,hi=function(e){return function(t,r,n){var s,i=pi(t),o=di(i),a=ui(n,o);if(e&&r!=r){for(;o>a;)if((s=i[a++])!=s)return!0}else for(;o>a;a++)if((e||a in i)&&i[a]===r)return e||a||0;return!e&&-1}},fi={includes:hi(!0),indexOf:hi(!1)},mi={},yi=jn,gi=Pr,vi=fi.indexOf,bi=mi,xi=Jt([].push),wi=function(e,t){var r,n=gi(e),s=0,i=[];for(r in n)!yi(bi,r)&&yi(n,r)&&xi(i,r);for(;t.length>s;)yi(n,r=t[s++])&&(~vi(i,r)||xi(i,r));return i},$i=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Si=wi,Ei=$i,ki=Object.keys||function(e){return Si(e,Ei)},Oi=En,ji=ki;Xs({target:"Object",stat:!0,forced:Mt((function(){ji(1)}))},{keys:function(e){return ji(Oi(e))}});const Ai=_t(Rr.Object.keys);var Pi={};Pi[Nn("toStringTag")]="z";var Ti="[object z]"===String(Pi),Ci=Ti,Ii=ir,Ri=Xt,_i=Nn("toStringTag"),Fi=Object,Di="Arguments"==Ri(function(){return arguments}()),Mi=Ci?Ri:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Fi(e),_i))?r:Di?Ri(t):"Object"==(n=Ri(t))&&Ii(t.callee)?"Arguments":n},qi=Mi,Li=String,Bi=function(e){if("Symbol"===qi(e))throw TypeError("Cannot convert a Symbol value to a string");return Li(e)},Ni={},Ui=ar,zi=ks,Hi=Es,Vi=Ps,Wi=Pr,Gi=ki;Ni.f=Ui&&!zi?Object.defineProperties:function(e,t){Vi(e);for(var r,n=Wi(t),s=Gi(t),i=s.length,o=0;i>o;)Hi.f(e,r=s[o++],n[r]);return e};var Ji,Ki=qr("document","documentElement"),Zi=In,Yi=wn("keys"),Xi=function(e){return Yi[e]||(Yi[e]=Zi(e))},Qi=Ps,eo=Ni,to=$i,ro=mi,no=Ki,so=Qn,io=Xi("IE_PROTO"),oo=function(){},ao=function(e){return"<script>"+e+"<\/script>"},lo=function(e){e.write(ao("")),e.close();var t=e.parentWindow.Object;return e=null,t},co=function(){try{Ji=new ActiveXObject("htmlfile")}catch(e){}var e,t;co="undefined"!=typeof document?document.domain&&Ji?lo(Ji):((t=so("iframe")).style.display="none",no.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(ao("document.F=Object")),e.close(),e.F):lo(Ji);for(var r=to.length;r--;)delete co.prototype[to[r]];return co()};ro[io]=!0;var po=Object.create||function(e,t){var r;return null!==e?(oo.prototype=Qi(e),r=new oo,oo.prototype=null,r[io]=e):r=co(),void 0===t?r:eo.f(r,t)},uo={},ho=wi,fo=$i.concat("length","prototype");uo.f=Object.getOwnPropertyNames||function(e){return ho(e,fo)};var mo={},yo=Kn,go=Es,vo=gr,bo=function(e,t,r){var n=yo(t);n in e?go.f(e,n,vo(0,r)):e[n]=r},xo=oi,wo=ci,$o=bo,So=Array,Eo=Math.max,ko=Xt,Oo=Pr,jo=uo.f,Ao="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];mo.f=function(e){return Ao&&"Window"==ko(e)?function(e){try{return jo(e)}catch(e){return function(e,t,r){for(var n=wo(e),s=xo(t,n),i=xo(void 0===r?n:r,n),o=So(Eo(i-s,0)),a=0;s<i;s++,a++)$o(o,a,e[s]);return o.length=a,o}(Ao)}}(e):jo(Oo(e))};var Po={};Po.f=Object.getOwnPropertySymbols;var To=Bs,Co=function(e,t,r,n){return n&&n.enumerable?e[t]=r:To(e,t,r),e},Io=Es,Ro={},_o=Nn;Ro.f=_o;var Fo,Do,Mo,qo=Rr,Lo=jn,Bo=Ro,No=Es.f,Uo=function(e){var t=qo.Symbol||(qo.Symbol={});Lo(t,e)||No(t,e,{value:Bo.f(e)})},zo=pr,Ho=qr,Vo=Nn,Wo=Co,Go=function(){var e=Ho("Symbol"),t=e&&e.prototype,r=t&&t.valueOf,n=Vo("toPrimitive");t&&!t[n]&&Wo(t,n,(function(e){return zo(r,this)}),{arity:1})},Jo=Mi,Ko=Ti?{}.toString:function(){return"[object "+Jo(this)+"]"},Zo=Ti,Yo=Es.f,Xo=Bs,Qo=jn,ea=Ko,ta=Nn("toStringTag"),ra=function(e,t,r,n){if(e){var s=r?e:e.prototype;Qo(s,ta)||Yo(s,ta,{configurable:!0,value:t}),n&&!Zo&&Xo(s,"toString",ea)}},na=ir,sa=Dt.WeakMap,ia=na(sa)&&/native code/.test(String(sa)),oa=Dt,aa=Ir,la=Bs,ca=jn,pa=bn,ua=Xi,da=mi,ha=oa.TypeError,fa=oa.WeakMap;if(ia||pa.state){var ma=pa.state||(pa.state=new fa);ma.get=ma.get,ma.has=ma.has,ma.set=ma.set,Fo=function(e,t){if(ma.has(e))throw ha("Object already initialized");return t.facade=e,ma.set(e,t),t},Do=function(e){return ma.get(e)||{}},Mo=function(e){return ma.has(e)}}else{var ya=ua("state");da[ya]=!0,Fo=function(e,t){if(ca(e,ya))throw ha("Object already initialized");return t.facade=e,la(e,ya,t),t},Do=function(e){return ca(e,ya)?e[ya]:{}},Mo=function(e){return ca(e,ya)}}var ga={set:Fo,get:Do,has:Mo,enforce:function(e){return Mo(e)?Do(e):Fo(e,{})},getterFor:function(e){return function(t){var r;if(!aa(t)||(r=Do(t)).type!==e)throw ha("Incompatible receiver, "+e+" required");return r}}},va=Xt,ba=Array.isArray||function(e){return"Array"==va(e)},xa=ir,wa=bn,$a=Jt(Function.toString);xa(wa.inspectSource)||(wa.inspectSource=function(e){return $a(e)});var Sa=wa.inspectSource,Ea=Jt,ka=Mt,Oa=ir,ja=Mi,Aa=Sa,Pa=function(){},Ta=[],Ca=qr("Reflect","construct"),Ia=/^\s*(?:class|function)\b/,Ra=Ea(Ia.exec),_a=!Ia.exec(Pa),Fa=function(e){if(!Oa(e))return!1;try{return Ca(Pa,Ta,e),!0}catch(e){return!1}},Da=function(e){if(!Oa(e))return!1;switch(ja(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return _a||!!Ra(Ia,Aa(e))}catch(e){return!0}};Da.sham=!0;var Ma=!Ca||ka((function(){var e;return Fa(Fa.call)||!Fa(Object)||!Fa((function(){e=!0}))||e}))?Da:Fa,qa=ba,La=Ma,Ba=Ir,Na=Nn("species"),Ua=Array,za=function(e,t){return new(function(e){var t;return qa(e)&&(t=e.constructor,(La(t)&&(t===Ua||qa(t.prototype))||Ba(t)&&null===(t=t[Na]))&&(t=void 0)),void 0===t?Ua:t}(e))(0===t?0:t)},Ha=Ss,Va=$r,Wa=En,Ga=ci,Ja=za,Ka=Jt([].push),Za=function(e){var t=1==e,r=2==e,n=3==e,s=4==e,i=6==e,o=7==e,a=5==e||i;return function(l,c,p,u){for(var d,h,f=Wa(l),m=Va(f),y=Ha(c,p),g=Ga(m),v=0,b=u||Ja,x=t?b(l,g):r||o?b(l,0):void 0;g>v;v++)if((a||v in m)&&(h=y(d=m[v],v,f),e))if(t)x[v]=h;else if(h)switch(e){case 3:return!0;case 5:return d;case 6:return v;case 2:Ka(x,d)}else switch(e){case 4:return!1;case 7:Ka(x,d)}return i?-1:n||s?s:x}},Ya={forEach:Za(0),map:Za(1),filter:Za(2),some:Za(3),every:Za(4),find:Za(5),findIndex:Za(6),filterReject:Za(7)},Xa=Xs,Qa=Dt,el=pr,tl=Jt,rl=ar,nl=Zr,sl=Mt,il=jn,ol=Lr,al=Ps,ll=Pr,cl=Kn,pl=Bi,ul=gr,dl=po,hl=ki,fl=uo,ml=mo,yl=Po,gl=or,vl=Es,bl=Ni,xl=ur,wl=Co,$l=wn,Sl=mi,El=In,kl=Nn,Ol=Ro,jl=Uo,Al=Go,Pl=ra,Tl=ga,Cl=Ya.forEach,Il=Xi("hidden"),Rl=Tl.set,_l=Tl.getterFor("Symbol"),Fl=Object.prototype,Dl=Qa.Symbol,Ml=Dl&&Dl.prototype,ql=Qa.TypeError,Ll=Qa.QObject,Bl=gl.f,Nl=vl.f,Ul=ml.f,zl=xl.f,Hl=tl([].push),Vl=$l("symbols"),Wl=$l("op-symbols"),Gl=$l("wks"),Jl=!Ll||!Ll.prototype||!Ll.prototype.findChild,Kl=rl&&sl((function(){return 7!=dl(Nl({},"a",{get:function(){return Nl(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=Bl(Fl,t);n&&delete Fl[t],Nl(e,t,r),n&&e!==Fl&&Nl(Fl,t,n)}:Nl,Zl=function(e,t){var r=Vl[e]=dl(Ml);return Rl(r,{type:"Symbol",tag:e,description:t}),rl||(r.description=t),r},Yl=function(e,t,r){e===Fl&&Yl(Wl,t,r),al(e);var n=cl(t);return al(r),il(Vl,n)?(r.enumerable?(il(e,Il)&&e[Il][n]&&(e[Il][n]=!1),r=dl(r,{enumerable:ul(0,!1)})):(il(e,Il)||Nl(e,Il,ul(1,{})),e[Il][n]=!0),Kl(e,n,r)):Nl(e,n,r)},Xl=function(e,t){al(e);var r=ll(t),n=hl(r).concat(rc(r));return Cl(n,(function(t){rl&&!el(Ql,r,t)||Yl(e,t,r[t])})),e},Ql=function(e){var t=cl(e),r=el(zl,this,t);return!(this===Fl&&il(Vl,t)&&!il(Wl,t))&&(!(r||!il(this,t)||!il(Vl,t)||il(this,Il)&&this[Il][t])||r)},ec=function(e,t){var r=ll(e),n=cl(t);if(r!==Fl||!il(Vl,n)||il(Wl,n)){var s=Bl(r,n);return!s||!il(Vl,n)||il(r,Il)&&r[Il][n]||(s.enumerable=!0),s}},tc=function(e){var t=Ul(ll(e)),r=[];return Cl(t,(function(e){il(Vl,e)||il(Sl,e)||Hl(r,e)})),r},rc=function(e){var t=e===Fl,r=Ul(t?Wl:ll(e)),n=[];return Cl(r,(function(e){!il(Vl,e)||t&&!il(Fl,e)||Hl(n,Vl[e])})),n};nl||(wl(Ml=(Dl=function(){if(ol(Ml,this))throw ql("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?pl(arguments[0]):void 0,t=El(e),r=function(e){this===Fl&&el(r,Wl,e),il(this,Il)&&il(this[Il],t)&&(this[Il][t]=!1),Kl(this,t,ul(1,e))};return rl&&Jl&&Kl(Fl,t,{configurable:!0,set:r}),Zl(t,e)}).prototype,"toString",(function(){return _l(this).tag})),wl(Dl,"withoutSetter",(function(e){return Zl(El(e),e)})),xl.f=Ql,vl.f=Yl,bl.f=Xl,gl.f=ec,fl.f=ml.f=tc,yl.f=rc,Ol.f=function(e){return Zl(kl(e),e)},rl&&function(e,t,r){Io.f(e,t,r)}(Ml,"description",{configurable:!0,get:function(){return _l(this).description}})),Xa({global:!0,constructor:!0,wrap:!0,forced:!nl,sham:!nl},{Symbol:Dl}),Cl(hl(Gl),(function(e){jl(e)})),Xa({target:"Symbol",stat:!0,forced:!nl},{useSetter:function(){Jl=!0},useSimple:function(){Jl=!1}}),Xa({target:"Object",stat:!0,forced:!nl,sham:!rl},{create:function(e,t){return void 0===t?dl(e):Xl(dl(e),t)},defineProperty:Yl,defineProperties:Xl,getOwnPropertyDescriptor:ec}),Xa({target:"Object",stat:!0,forced:!nl},{getOwnPropertyNames:tc}),Al(),Pl(Dl,"Symbol"),Sl[Il]=!0;var nc=Zr&&!!Symbol.for&&!!Symbol.keyFor,sc=Xs,ic=qr,oc=jn,ac=Bi,lc=wn,cc=nc,pc=lc("string-to-symbol-registry"),uc=lc("symbol-to-string-registry");sc({target:"Symbol",stat:!0,forced:!cc},{for:function(e){var t=ac(e);if(oc(pc,t))return pc[t];var r=ic("Symbol")(t);return pc[t]=r,uc[r]=t,r}});var dc=Xs,hc=jn,fc=rn,mc=sn,yc=nc,gc=wn("symbol-to-string-registry");dc({target:"Symbol",stat:!0,forced:!yc},{keyFor:function(e){if(!fc(e))throw TypeError(mc(e)+" is not a symbol");if(hc(gc,e))return gc[e]}});var vc=Jt([].slice),bc=ba,xc=ir,wc=Xt,$c=Bi,Sc=Jt([].push),Ec=Xs,kc=qr,Oc=zt,jc=pr,Ac=Jt,Pc=Mt,Tc=ir,Cc=rn,Ic=vc,Rc=Zr,_c=String,Fc=kc("JSON","stringify"),Dc=Ac(/./.exec),Mc=Ac("".charAt),qc=Ac("".charCodeAt),Lc=Ac("".replace),Bc=Ac(1..toString),Nc=/[\uD800-\uDFFF]/g,Uc=/^[\uD800-\uDBFF]$/,zc=/^[\uDC00-\uDFFF]$/,Hc=!Rc||Pc((function(){var e=kc("Symbol")();return"[null]"!=Fc([e])||"{}"!=Fc({a:e})||"{}"!=Fc(Object(e))})),Vc=Pc((function(){return'"\\udf06\\ud834"'!==Fc("\udf06\ud834")||'"\\udead"'!==Fc("\udead")})),Wc=function(e,t){var r=Ic(arguments),n=function(e){if(xc(e))return e;if(bc(e)){for(var t=e.length,r=[],n=0;n<t;n++){var s=e[n];"string"==typeof s?Sc(r,s):"number"!=typeof s&&"Number"!=wc(s)&&"String"!=wc(s)||Sc(r,$c(s))}var i=r.length,o=!0;return function(e,t){if(o)return o=!1,t;if(bc(this))return t;for(var n=0;n<i;n++)if(r[n]===e)return t}}}(t);if(Tc(n)||void 0!==e&&!Cc(e))return r[1]=function(e,t){if(Tc(n)&&(t=jc(n,this,_c(e),t)),!Cc(t))return t},Oc(Fc,null,r)},Gc=function(e,t,r){var n=Mc(r,t-1),s=Mc(r,t+1);return Dc(Uc,e)&&!Dc(zc,s)||Dc(zc,e)&&!Dc(Uc,n)?"\\u"+Bc(qc(e,0),16):e};Fc&&Ec({target:"JSON",stat:!0,arity:3,forced:Hc||Vc},{stringify:function(e,t,r){var n=Ic(arguments),s=Oc(Hc?Wc:Fc,null,n);return Vc&&"string"==typeof s?Lc(s,Nc,Gc):s}});var Jc=Po,Kc=En;Xs({target:"Object",stat:!0,forced:!Zr||Mt((function(){Jc.f(1)}))},{getOwnPropertySymbols:function(e){var t=Jc.f;return t?t(Kc(e)):[]}});const Zc=_t(Rr.Object.getOwnPropertySymbols);var Yc=Mt,Xc=Wr,Qc=Nn("species"),ep=function(e){return Xc>=51||!Yc((function(){var t=[];return(t.constructor={})[Qc]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},tp=Ya.filter;Xs({target:"Array",proto:!0,forced:!ep("filter")},{filter:function(e){return tp(this,e,arguments.length>1?arguments[1]:void 0)}});var rp=Rr,np=function(e){return rp[e+"Prototype"]},sp=np("Array").filter,ip=Lr,op=sp,ap=Array.prototype;const lp=_t((function(e){var t=e.filter;return e===ap||ip(ap,e)&&t===ap.filter?op:t}));var cp={exports:{}},pp=Xs,up=Mt,dp=Pr,hp=or.f,fp=ar;pp({target:"Object",stat:!0,forced:!fp||up((function(){hp(1)})),sham:!fp},{getOwnPropertyDescriptor:function(e,t){return hp(dp(e),t)}});var mp=Rr.Object,yp=cp.exports=function(e,t){return mp.getOwnPropertyDescriptor(e,t)};mp.getOwnPropertyDescriptor.sham&&(yp.sham=!0);const gp=_t(cp.exports);var vp=ar,bp=ba,xp=TypeError,wp=Object.getOwnPropertyDescriptor,$p=vp&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}(),Sp=TypeError,Ep=function(e){if(e>9007199254740991)throw Sp("Maximum allowed index exceeded");return e},kp=En,Op=ci,jp=$p?function(e,t){if(bp(e)&&!wp(e,"length").writable)throw xp("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t},Ap=Ep;Xs({target:"Array",proto:!0,arity:1,forced:Mt((function(){return 4294967297!==[].push.call({length:4294967296},1)}))||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}()},{push:function(e){var t=kp(this),r=Op(t),n=arguments.length;Ap(r+n);for(var s=0;s<n;s++)t[r]=arguments[s],r++;return jp(t,r),r}});var Pp=np("Array").push,Tp=Lr,Cp=Pp,Ip=Array.prototype;const Rp=_t((function(e){var t=e.push;return e===Ip||Tp(Ip,e)&&t===Ip.push?Cp:t}));var _p,Fp,Dp,Mp={},qp=ar,Lp=jn,Bp=Function.prototype,Np=qp&&Object.getOwnPropertyDescriptor,Up=Lp(Bp,"name"),zp={EXISTS:Up,PROPER:Up&&"something"===function(){}.name,CONFIGURABLE:Up&&(!qp||qp&&Np(Bp,"name").configurable)},Hp=!Mt((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),Vp=jn,Wp=ir,Gp=En,Jp=Hp,Kp=Xi("IE_PROTO"),Zp=Object,Yp=Zp.prototype,Xp=Jp?Zp.getPrototypeOf:function(e){var t=Gp(e);if(Vp(t,Kp))return t[Kp];var r=t.constructor;return Wp(r)&&t instanceof r?r.prototype:t instanceof Zp?Yp:null},Qp=Mt,eu=ir,tu=Ir,ru=po,nu=Xp,su=Co,iu=Nn("iterator"),ou=!1;[].keys&&("next"in(Dp=[].keys())?(Fp=nu(nu(Dp)))!==Object.prototype&&(_p=Fp):ou=!0);var au=!tu(_p)||Qp((function(){var e={};return _p[iu].call(e)!==e}));eu((_p=au?{}:ru(_p))[iu])||su(_p,iu,(function(){return this}));var lu={IteratorPrototype:_p,BUGGY_SAFARI_ITERATORS:ou},cu=lu.IteratorPrototype,pu=po,uu=gr,du=ra,hu=Mp,fu=function(){return this},mu=Xs,yu=pr,gu=Xp,vu=ra,bu=Co,xu=Mp,wu=zp.PROPER,$u=lu.BUGGY_SAFARI_ITERATORS,Su=Nn("iterator"),Eu=function(){return this},ku=function(e,t,r,n,s,i,o){!function(e,t,r,n){var s=t+" Iterator";e.prototype=pu(cu,{next:uu(+!n,r)}),du(e,s,!1,!0),hu[s]=fu}(r,t,n);var a,l,c,p=function(e){if(e===s&&m)return m;if(!$u&&e in h)return h[e];switch(e){case"keys":case"values":case"entries":return function(){return new r(this,e)}}return function(){return new r(this)}},u=t+" Iterator",d=!1,h=e.prototype,f=h[Su]||h["@@iterator"]||s&&h[s],m=!$u&&f||p(s),y="Array"==t&&h.entries||f;if(y&&(a=gu(y.call(new e)))!==Object.prototype&&a.next&&(vu(a,u,!0,!0),xu[u]=Eu),wu&&"values"==s&&f&&"values"!==f.name&&(d=!0,m=function(){return yu(f,this)}),s)if(l={values:p("values"),keys:i?m:p("keys"),entries:p("entries")},o)for(c in l)($u||d||!(c in h))&&bu(h,c,l[c]);else mu({target:t,proto:!0,forced:$u||d},l);return o&&h[Su]!==m&&bu(h,Su,m,{name:s}),xu[t]=m,l},Ou=function(e,t){return{value:e,done:t}},ju=Pr,Au=Mp,Pu=ga;Es.f;var Tu=ku,Cu=Ou,Iu=Pu.set,Ru=Pu.getterFor("Array Iterator");Tu(Array,"Array",(function(e,t){Iu(this,{type:"Array Iterator",target:ju(e),index:0,kind:t})}),(function(){var e=Ru(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,Cu(void 0,!0)):Cu("keys"==r?n:"values"==r?t[n]:[n,t[n]],!1)}),"values"),Au.Arguments=Au.Array;var _u=Dt,Fu=Mi,Du=Bs,Mu=Mp,qu=Nn("toStringTag");for(var Lu in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Bu=_u[Lu],Nu=Bu&&Bu.prototype;Nu&&Fu(Nu)!==qu&&Du(Nu,qu,Lu),Mu[Lu]=Mu.Array}var Uu=Mt,zu=function(e,t){var r=[][e];return!!r&&Uu((function(){r.call(null,t||function(){return 1},1)}))},Hu=Ya.forEach,Vu=zu("forEach")?[].forEach:function(e){return Hu(this,e,arguments.length>1?arguments[1]:void 0)};Xs({target:"Array",proto:!0,forced:[].forEach!=Vu},{forEach:Vu});var Wu=np("Array").forEach,Gu=Mi,Ju=jn,Ku=Lr,Zu=Wu,Yu=Array.prototype,Xu={DOMTokenList:!0,NodeList:!0};const Qu=_t((function(e){var t=e.forEach;return e===Yu||Ku(Yu,e)&&t===Yu.forEach||Ju(Xu,Gu(e))?Zu:t}));var ed=qr,td=uo,rd=Po,nd=Ps,sd=Jt([].concat),id=ed("Reflect","ownKeys")||function(e){var t=td.f(nd(e)),r=rd.f;return r?sd(t,r(e)):t},od=id,ad=Pr,ld=or,cd=bo;Xs({target:"Object",stat:!0,sham:!ar},{getOwnPropertyDescriptors:function(e){for(var t,r,n=ad(e),s=ld.f,i=od(n),o={},a=0;i.length>a;)void 0!==(r=s(n,t=i[a++]))&&cd(o,t,r);return o}});const pd=_t(Rr.Object.getOwnPropertyDescriptors);var ud={exports:{}},dd=Xs,hd=ar,fd=Ni.f;dd({target:"Object",stat:!0,forced:Object.defineProperties!==fd,sham:!hd},{defineProperties:fd});var md=Rr.Object,yd=ud.exports=function(e,t){return md.defineProperties(e,t)};md.defineProperties.sham&&(yd.sham=!0);const gd=_t(ud.exports);var vd={exports:{}},bd=Xs,xd=ar,wd=Es.f;bd({target:"Object",stat:!0,forced:Object.defineProperty!==wd,sham:!xd},{defineProperty:wd});var $d=Rr.Object,Sd=vd.exports=function(e,t,r){return $d.defineProperty(e,t,r)};$d.defineProperty.sham&&(Sd.sham=!0);const Ed=_t(vd.exports);var kd=Xs,Od=Mt,jd=ba,Ad=Ir,Pd=En,Td=ci,Cd=Ep,Id=bo,Rd=za,_d=ep,Fd=Wr,Dd=Nn("isConcatSpreadable"),Md=Fd>=51||!Od((function(){var e=[];return e[Dd]=!1,e.concat()[0]!==e})),qd=function(e){if(!Ad(e))return!1;var t=e[Dd];return void 0!==t?!!t:jd(e)};kd({target:"Array",proto:!0,arity:1,forced:!Md||!_d("concat")},{concat:function(e){var t,r,n,s,i,o=Pd(this),a=Rd(o,0),l=0;for(t=-1,n=arguments.length;t<n;t++)if(qd(i=-1===t?o:arguments[t]))for(s=Td(i),Cd(l+s),r=0;r<s;r++,l++)r in i&&Id(a,l,i[r]);else Cd(l+1),Id(a,l++,i);return a.length=l,a}}),Uo("asyncIterator"),Uo("hasInstance"),Uo("isConcatSpreadable"),Uo("iterator"),Uo("match"),Uo("matchAll"),Uo("replace"),Uo("search"),Uo("species"),Uo("split");var Ld=Go;Uo("toPrimitive"),Ld();var Bd=qr,Nd=ra;Uo("toStringTag"),Nd(Bd("Symbol"),"Symbol"),Uo("unscopables"),ra(Dt.JSON,"JSON",!0);var Ud=Rr.Symbol,zd=Nn,Hd=Es.f,Vd=zd("metadata"),Wd=Function.prototype;void 0===Wd[Vd]&&Hd(Wd,Vd,{value:null}),Uo("dispose"),Uo("metadata");var Gd=Ud;Uo("asyncDispose");var Jd=Jt,Kd=qr("Symbol"),Zd=Kd.keyFor,Yd=Jd(Kd.prototype.valueOf),Xd=Kd.isRegisteredSymbol||function(e){try{return void 0!==Zd(Yd(e))}catch(e){return!1}};Xs({target:"Symbol",stat:!0},{isRegisteredSymbol:Xd});for(var Qd=wn,eh=qr,th=Jt,rh=rn,nh=Nn,sh=eh("Symbol"),ih=sh.isWellKnownSymbol,oh=eh("Object","getOwnPropertyNames"),ah=th(sh.prototype.valueOf),lh=Qd("wks"),ch=0,ph=oh(sh),uh=ph.length;ch<uh;ch++)try{var dh=ph[ch];rh(sh[dh])&&nh(dh)}catch(s){}var hh=function(e){if(ih&&ih(e))return!0;try{for(var t=ah(e),r=0,n=oh(lh),s=n.length;r<s;r++)if(lh[n[r]]==t)return!0}catch(e){}return!1};Xs({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:hh}),Uo("matcher"),Uo("observable"),Xs({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:Xd}),Xs({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:hh}),Uo("metadataKey"),Uo("patternMatch"),Uo("replaceAll");const fh=_t(Gd);var mh=Jt,yh=ri,gh=Bi,vh=Or,bh=mh("".charAt),xh=mh("".charCodeAt),wh=mh("".slice),$h=function(e){return function(t,r){var n,s,i=gh(vh(t)),o=yh(r),a=i.length;return o<0||o>=a?e?"":void 0:(n=xh(i,o))<55296||n>56319||o+1===a||(s=xh(i,o+1))<56320||s>57343?e?bh(i,o):n:e?wh(i,o,o+2):s-56320+(n-55296<<10)+65536}},Sh=($h(!1),$h(!0)),Eh=Bi,kh=ga,Oh=ku,jh=Ou,Ah=kh.set,Ph=kh.getterFor("String Iterator");Oh(String,"String",(function(e){Ah(this,{type:"String Iterator",string:Eh(e),index:0})}),(function(){var e,t=Ph(this),r=t.string,n=t.index;return n>=r.length?jh(void 0,!0):(e=Sh(r,n),t.index+=e.length,jh(e,!1))}));const Th=_t(Ro.f("iterator"));function Ch(e){return Ch="function"==typeof fh&&"symbol"==typeof Th?function(e){return typeof e}:function(e){return e&&"function"==typeof fh&&e.constructor===fh&&e!==fh.prototype?"symbol":typeof e},Ch(e)}const Ih=_t(Ro.f("toPrimitive"));function Rh(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==Ch(e)||null===e)return e;var r=e[Ih];if(void 0!==r){var n=r.call(e,"string");if("object"!==Ch(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Ch(t)?t:String(t)}(t))in e?Ed(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _h(e,t){var r=Ai(e);if(Zc){var n=Zc(e);t&&(n=lp(n).call(n,(function(t){return gp(e,t).enumerable}))),Rp(r).apply(r,n)}return r}function Fh(e){for(var t=1;t<arguments.length;t++){var r,n,s=null!=arguments[t]?arguments[t]:{};t%2?Qu(r=_h(Object(s),!0)).call(r,(function(t){Rh(e,t,s[t])})):pd?gd(e,pd(s)):Qu(n=_h(Object(s))).call(n,(function(t){Ed(e,t,gp(s,t))}))}return e}var Dh={},Mh={exports:{}};!function(e,t){!function(r){var n=t&&!t.nodeType&&t,s=e&&!e.nodeType&&e,i="object"==typeof global&&global;i.global!==i&&i.window!==i&&i.self!==i||(r=i);var o,a,l=2147483647,c=36,p=/^xn--/,u=/[^\x20-\x7E]/,d=/[\x2E\u3002\uFF0E\uFF61]/g,h={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},f=Math.floor,m=String.fromCharCode;function y(e){throw RangeError(h[e])}function g(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function v(e,t){var r=e.split("@"),n="";return r.length>1&&(n=r[0]+"@",e=r[1]),n+g((e=e.replace(d,".")).split("."),t).join(".")}function b(e){for(var t,r,n=[],s=0,i=e.length;s<i;)(t=e.charCodeAt(s++))>=55296&&t<=56319&&s<i?56320==(64512&(r=e.charCodeAt(s++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),s--):n.push(t);return n}function x(e){return g(e,(function(e){var t="";return e>65535&&(t+=m((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+m(e)})).join("")}function w(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function $(e,t,r){var n=0;for(e=r?f(e/700):e>>1,e+=f(e/t);e>455;n+=c)e=f(e/35);return f(n+36*e/(e+38))}function S(e){var t,r,n,s,i,o,a,p,u,d,h,m=[],g=e.length,v=0,b=128,w=72;for((r=e.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)e.charCodeAt(n)>=128&&y("not-basic"),m.push(e.charCodeAt(n));for(s=r>0?r+1:0;s<g;){for(i=v,o=1,a=c;s>=g&&y("invalid-input"),((p=(h=e.charCodeAt(s++))-48<10?h-22:h-65<26?h-65:h-97<26?h-97:c)>=c||p>f((l-v)/o))&&y("overflow"),v+=p*o,!(p<(u=a<=w?1:a>=w+26?26:a-w));a+=c)o>f(l/(d=c-u))&&y("overflow"),o*=d;w=$(v-i,t=m.length+1,0==i),f(v/t)>l-b&&y("overflow"),b+=f(v/t),v%=t,m.splice(v++,0,b)}return x(m)}function E(e){var t,r,n,s,i,o,a,p,u,d,h,g,v,x,S,E=[];for(g=(e=b(e)).length,t=128,r=0,i=72,o=0;o<g;++o)(h=e[o])<128&&E.push(m(h));for(n=s=E.length,s&&E.push("-");n<g;){for(a=l,o=0;o<g;++o)(h=e[o])>=t&&h<a&&(a=h);for(a-t>f((l-r)/(v=n+1))&&y("overflow"),r+=(a-t)*v,t=a,o=0;o<g;++o)if((h=e[o])<t&&++r>l&&y("overflow"),h==t){for(p=r,u=c;!(p<(d=u<=i?1:u>=i+26?26:u-i));u+=c)S=p-d,x=c-d,E.push(m(w(d+S%x,0))),p=f(S/x);E.push(m(w(p,0))),i=$(r,v,n==s),r=0,++n}++r,++t}return E.join("")}if(o={version:"1.3.2",ucs2:{decode:b,encode:x},decode:S,encode:E,toASCII:function(e){return v(e,(function(e){return u.test(e)?"xn--"+E(e):e}))},toUnicode:function(e){return v(e,(function(e){return p.test(e)?S(e.slice(4).toLowerCase()):e}))}},n&&s)if(e.exports==n)s.exports=o;else for(a in o)o.hasOwnProperty(a)&&(n[a]=o[a]);else r.punycode=o}(this)}(Mh,Mh.exports);var qh=Mh.exports,Lh={};function Bh(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Nh=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};Lh.decode=Lh.parse=function(e,t,r,n){t=t||"&",r=r||"=";var s={};if("string"!=typeof e||0===e.length)return s;var i=/\+/g;e=e.split(t);var o=1e3;n&&"number"==typeof n.maxKeys&&(o=n.maxKeys);var a=e.length;o>0&&a>o&&(a=o);for(var l=0;l<a;++l){var c,p,u,d,h=e[l].replace(i,"%20"),f=h.indexOf(r);f>=0?(c=h.substr(0,f),p=h.substr(f+1)):(c=h,p=""),u=decodeURIComponent(c),d=decodeURIComponent(p),Bh(s,u)?Array.isArray(s[u])?s[u].push(d):s[u]=[s[u],d]:s[u]=d}return s},Lh.encode=Lh.stringify=function(e,t,r,n){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(n){var s=encodeURIComponent(Nh(n))+r;return Array.isArray(e[n])?e[n].map((function(e){return s+encodeURIComponent(Nh(e))})).join(t):s+encodeURIComponent(Nh(e[n]))})).join(t):n?encodeURIComponent(Nh(n))+r+encodeURIComponent(Nh(e)):""};var Uh=qh,zh=function(e){return"string"==typeof e},Hh=function(e){return"object"==typeof e&&null!==e},Vh=function(e){return null===e},Wh=function(e){return null==e};function Gh(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}Dh.parse=lf,Dh.resolve=function(e,t){return lf(e,!1,!0).resolve(t)},Dh.resolveObject=function(e,t){return e?lf(e,!1,!0).resolveObject(t):t},Dh.format=function(e){return zh(e)&&(e=lf(e)),e instanceof Gh?e.format():Gh.prototype.format.call(e)},Dh.Url=Gh;var Jh=/^([a-z0-9.+-]+:)/i,Kh=/:[0-9]*$/,Zh=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Yh=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),Xh=["'"].concat(Yh),Qh=["%","/","?",";","#"].concat(Xh),ef=["/","?","#"],tf=/^[+a-z0-9A-Z_-]{0,63}$/,rf=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,nf={javascript:!0,"javascript:":!0},sf={javascript:!0,"javascript:":!0},of={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},af=Lh;function lf(e,t,r){if(e&&Hh(e)&&e instanceof Gh)return e;var n=new Gh;return n.parse(e,t,r),n}Gh.prototype.parse=function(e,t,r){if(!zh(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),s=-1!==n&&n<e.indexOf("#")?"?":"#",i=e.split(s);i[0]=i[0].replace(/\\/g,"/");var o=e=i.join(s);if(o=o.trim(),!r&&1===e.split("#").length){var a=Zh.exec(o);if(a)return this.path=o,this.href=o,this.pathname=a[1],a[2]?(this.search=a[2],this.query=t?af.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var l=Jh.exec(o);if(l){var c=(l=l[0]).toLowerCase();this.protocol=c,o=o.substr(l.length)}if(r||l||o.match(/^\/\/[^@\/]+@[^@\/]+/)){var p="//"===o.substr(0,2);!p||l&&sf[l]||(o=o.substr(2),this.slashes=!0)}if(!sf[l]&&(p||l&&!of[l])){for(var u,d,h=-1,f=0;f<ef.length;f++)-1!==(m=o.indexOf(ef[f]))&&(-1===h||m<h)&&(h=m);for(-1!==(d=-1===h?o.lastIndexOf("@"):o.lastIndexOf("@",h))&&(u=o.slice(0,d),o=o.slice(d+1),this.auth=decodeURIComponent(u)),h=-1,f=0;f<Qh.length;f++){var m;-1!==(m=o.indexOf(Qh[f]))&&(-1===h||m<h)&&(h=m)}-1===h&&(h=o.length),this.host=o.slice(0,h),o=o.slice(h),this.parseHost(),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y)for(var g=this.hostname.split(/\./),v=(f=0,g.length);f<v;f++){var b=g[f];if(b&&!b.match(tf)){for(var x="",w=0,$=b.length;w<$;w++)b.charCodeAt(w)>127?x+="x":x+=b[w];if(!x.match(tf)){var S=g.slice(0,f),E=g.slice(f+1),k=b.match(rf);k&&(S.push(k[1]),E.unshift(k[2])),E.length&&(o="/"+E.join(".")+o),this.hostname=S.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),y||(this.hostname=Uh.toASCII(this.hostname));var O=this.port?":"+this.port:"",j=this.hostname||"";this.host=j+O,this.href+=this.host,y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==o[0]&&(o="/"+o))}if(!nf[c])for(f=0,v=Xh.length;f<v;f++){var A=Xh[f];if(-1!==o.indexOf(A)){var P=encodeURIComponent(A);P===A&&(P=escape(A)),o=o.split(A).join(P)}}var T=o.indexOf("#");-1!==T&&(this.hash=o.substr(T),o=o.slice(0,T));var C=o.indexOf("?");if(-1!==C?(this.search=o.substr(C),this.query=o.substr(C+1),t&&(this.query=af.parse(this.query)),o=o.slice(0,C)):t&&(this.search="",this.query={}),o&&(this.pathname=o),of[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){O=this.pathname||"";var I=this.search||"";this.path=O+I}return this.href=this.format(),this},Gh.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",s=!1,i="";this.host?s=e+this.host:this.hostname&&(s=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&Hh(this.query)&&Object.keys(this.query).length&&(i=af.stringify(this.query));var o=this.search||i&&"?"+i||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||of[t])&&!1!==s?(s="//"+(s||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):s||(s=""),n&&"#"!==n.charAt(0)&&(n="#"+n),o&&"?"!==o.charAt(0)&&(o="?"+o),r=r.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})),t+s+r+(o=o.replace("#","%23"))+n},Gh.prototype.resolve=function(e){return this.resolveObject(lf(e,!1,!0)).format()},Gh.prototype.resolveObject=function(e){if(zh(e)){var t=new Gh;t.parse(e,!1,!0),e=t}for(var r=new Gh,n=Object.keys(this),s=0;s<n.length;s++){var i=n[s];r[i]=this[i]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var o=Object.keys(e),a=0;a<o.length;a++){var l=o[a];"protocol"!==l&&(r[l]=e[l])}return of[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!of[e.protocol]){for(var c=Object.keys(e),p=0;p<c.length;p++){var u=c[p];r[u]=e[u]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||sf[e.protocol])r.pathname=e.pathname;else{for(var d=(e.pathname||"").split("/");d.length&&!(e.host=d.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),r.pathname=d.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var h=r.pathname||"",f=r.search||"";r.path=h+f}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var m=r.pathname&&"/"===r.pathname.charAt(0),y=e.host||e.pathname&&"/"===e.pathname.charAt(0),g=y||m||r.host&&e.pathname,v=g,b=r.pathname&&r.pathname.split("/")||[],x=(d=e.pathname&&e.pathname.split("/")||[],r.protocol&&!of[r.protocol]);if(x&&(r.hostname="",r.port=null,r.host&&(""===b[0]?b[0]=r.host:b.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host=null),g=g&&(""===d[0]||""===b[0])),y)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,b=d;else if(d.length)b||(b=[]),b.pop(),b=b.concat(d),r.search=e.search,r.query=e.query;else if(!Wh(e.search))return x&&(r.hostname=r.host=b.shift(),(k=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=k.shift(),r.host=r.hostname=k.shift())),r.search=e.search,r.query=e.query,Vh(r.pathname)&&Vh(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r;if(!b.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var w=b.slice(-1)[0],$=(r.host||e.host||b.length>1)&&("."===w||".."===w)||""===w,S=0,E=b.length;E>=0;E--)"."===(w=b[E])?b.splice(E,1):".."===w?(b.splice(E,1),S++):S&&(b.splice(E,1),S--);if(!g&&!v)for(;S--;S)b.unshift("..");!g||""===b[0]||b[0]&&"/"===b[0].charAt(0)||b.unshift(""),$&&"/"!==b.join("/").substr(-1)&&b.push("");var k,O=""===b[0]||b[0]&&"/"===b[0].charAt(0);return x&&(r.hostname=r.host=O?"":b.length?b.shift():"",(k=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=k.shift(),r.host=r.hostname=k.shift())),(g=g||r.host&&b.length)&&!O&&b.unshift(""),b.length?r.pathname=b.join("/"):(r.pathname=null,r.path=null),Vh(r.pathname)&&Vh(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},Gh.prototype.parseHost=function(){var e=this.host,t=Kh.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)},function(){!function(e){!function(t){var r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,s="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),i="FormData"in e,o="ArrayBuffer"in e;if(o)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function p(e){return"string"!=typeof e&&(e=String(e)),e}function u(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function h(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function f(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=f(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:s&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:i&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():o&&s&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e,t,r,n=h(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,r=f(t=new FileReader),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(e,t){e=c(e),t=p(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},d.prototype.delete=function(e){delete this.map[c(e)]},d.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},d.prototype.set=function(e,t){this.map[c(e)]=p(t)},d.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),u(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),u(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),u(e)},n&&(d.prototype[Symbol.iterator]=d.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e,t){var r=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=function(e){var t=e.toUpperCase();return v.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function x(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),s=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(s))}})),t}function w(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},g.call(b.prototype),g.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var $=[301,302,303,307,308];w.redirect=function(e,t){if(-1===$.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function S(e,r){return new Promise((function(n,i){var o=new b(e,r);if(o.signal&&o.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function l(){a.abort()}a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new d,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var s=r.join(":").trim();t.append(n,s)}})),t)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var s="response"in a?a.response:a.responseText;n(new w(s,r))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},a.open(o.method,o.url,!0),"include"===o.credentials?a.withCredentials=!0:"omit"===o.credentials&&(a.withCredentials=!1),"responseType"in a&&s&&(a.responseType="blob"),o.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),o.signal&&(o.signal.addEventListener("abort",l),a.onreadystatechange=function(){4===a.readyState&&o.signal.removeEventListener("abort",l)}),a.send(void 0===o._bodyInit?null:o._bodyInit)}))}S.polyfill=!0,e.fetch||(e.fetch=S,e.Headers=d,e.Request=b,e.Response=w),t.Headers=d,t.Request=b,t.Response=w,t.fetch=S,Object.defineProperty(t,"t",{value:!0})}({})}("undefined"!=typeof self?self:this)}();var cf="undefined"!=typeof Symbol&&Symbol,pf=Array.prototype.slice,uf=Object.prototype.toString,df=Function.prototype.bind||function(e){var t=this;if("function"!=typeof t||"[object Function]"!==uf.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var r,n=pf.call(arguments,1),s=Math.max(0,t.length-n.length),i=[],o=0;o<s;o++)i.push("$"+o);if(r=Function("binder","return function ("+i.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof r){var s=t.apply(this,n.concat(pf.call(arguments)));return Object(s)===s?s:this}return t.apply(e,n.concat(pf.call(arguments)))})),t.prototype){var a=function(){};a.prototype=t.prototype,r.prototype=new a,a.prototype=null}return r},hf=df.call(Function.call,Object.prototype.hasOwnProperty),ff=SyntaxError,mf=Function,yf=TypeError,gf=function(e){try{return mf('"use strict"; return ('+e+").constructor;")()}catch(e){}},vf=Object.getOwnPropertyDescriptor;if(vf)try{vf({},"")}catch(s){vf=null}var bf=function(){throw new yf},xf=vf?function(){try{return bf}catch(e){try{return vf(arguments,"callee").get}catch(e){return bf}}}():bf,wf="function"==typeof cf&&"function"==typeof Symbol&&"symbol"==typeof cf("foo")&&"symbol"==typeof Symbol("bar")&&function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var s=Object.getOwnPropertyDescriptor(e,t);if(42!==s.value||!0!==s.enumerable)return!1}return!0}(),$f=Object.getPrototypeOf||function(e){return e.__proto__},Sf={},Ef="undefined"==typeof Uint8Array?void 0:$f(Uint8Array),kf={"%AggregateError%":"undefined"==typeof AggregateError?void 0:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":wf?$f([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":Sf,"%AsyncGenerator%":Sf,"%AsyncGeneratorFunction%":Sf,"%AsyncIteratorPrototype%":Sf,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%BigInt%":"undefined"==typeof BigInt?void 0:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry,"%Function%":mf,"%GeneratorFunction%":Sf,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":wf?$f($f([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&wf?$f((new Map)[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&wf?$f((new Set)[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":wf?$f(""[Symbol.iterator]()):void 0,"%Symbol%":wf?Symbol:void 0,"%SyntaxError%":ff,"%ThrowTypeError%":xf,"%TypedArray%":Ef,"%TypeError%":yf,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?void 0:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet},Of=function e(t){var r;if("%AsyncFunction%"===t)r=gf("async function () {}");else if("%GeneratorFunction%"===t)r=gf("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=gf("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var s=e("%AsyncGenerator%");s&&(r=$f(s.prototype))}return kf[t]=r,r},jf={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Af=df,Pf=hf,Tf=Af.call(Function.call,Array.prototype.concat),Cf=Af.call(Function.apply,Array.prototype.splice),If=Af.call(Function.call,String.prototype.replace),Rf=Af.call(Function.call,String.prototype.slice),_f=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Ff=/\\(\\)?/g,Df=function(e,t){var r,n=e;if(Pf(jf,n)&&(n="%"+(r=jf[n])[0]+"%"),Pf(kf,n)){var s=kf[n];if(s===Sf&&(s=Of(n)),void 0===s&&!t)throw new yf("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:s}}throw new ff("intrinsic "+e+" does not exist!")},Mf=function(e,t){if("string"!=typeof e||0===e.length)throw new yf("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new yf('"allowMissing" argument must be a boolean');var r=function(e){var t=Rf(e,0,1),r=Rf(e,-1);if("%"===t&&"%"!==r)throw new ff("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new ff("invalid intrinsic syntax, expected opening `%`");var n=[];return If(e,_f,(function(e,t,r,s){n[n.length]=r?If(s,Ff,"$1"):t||e})),n}(e),n=r.length>0?r[0]:"",s=Df("%"+n+"%",t),i=s.name,o=s.value,a=!1,l=s.alias;l&&(n=l[0],Cf(r,Tf([0,1],l)));for(var c=1,p=!0;c<r.length;c+=1){var u=r[c],d=Rf(u,0,1),h=Rf(u,-1);if(('"'===d||"'"===d||"`"===d||'"'===h||"'"===h||"`"===h)&&d!==h)throw new ff("property names with quotes must have matching quotes");if("constructor"!==u&&p||(a=!0),Pf(kf,i="%"+(n+="."+u)+"%"))o=kf[i];else if(null!=o){if(!(u in o)){if(!t)throw new yf("base intrinsic for "+e+" exists, but the property is not available.");return}if(vf&&c+1>=r.length){var f=vf(o,u);o=(p=!!f)&&"get"in f&&!("originalValue"in f.get)?f.get:o[u]}else p=Pf(o,u),o=o[u];p&&!a&&(kf[i]=o)}}return o},qf={exports:{}};!function(e){var t=df,r=Mf,n=r("%Function.prototype.apply%"),s=r("%Function.prototype.call%"),i=r("%Reflect.apply%",!0)||t.call(s,n),o=r("%Object.getOwnPropertyDescriptor%",!0),a=r("%Object.defineProperty%",!0),l=r("%Math.max%");if(a)try{a({},"a",{value:1})}catch(e){a=null}e.exports=function(e){var r=i(t,s,arguments);o&&a&&(o(r,"length").configurable&&a(r,"length",{value:1+l(0,e.length-(arguments.length-1))}));return r};var c=function(){return i(t,n,arguments)};a?a(e.exports,"apply",{value:c}):e.exports.apply=c}(qf);var Lf=Mf,Bf=qf.exports,Nf=Bf(Lf("String.prototype.indexOf"));const Uf=function(e){if(e.t)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];return r.push.apply(r,arguments),new(Function.bind.apply(t,r))}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"t",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var zf="function"==typeof Map&&Map.prototype,Hf=Object.getOwnPropertyDescriptor&&zf?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Vf=zf&&Hf&&"function"==typeof Hf.get?Hf.get:null,Wf=zf&&Map.prototype.forEach,Gf="function"==typeof Set&&Set.prototype,Jf=Object.getOwnPropertyDescriptor&&Gf?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Kf=Gf&&Jf&&"function"==typeof Jf.get?Jf.get:null,Zf=Gf&&Set.prototype.forEach,Yf="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,Xf="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,Qf="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,em=Boolean.prototype.valueOf,tm=Object.prototype.toString,rm=Function.prototype.toString,nm=String.prototype.match,sm=String.prototype.slice,im=String.prototype.replace,om=String.prototype.toUpperCase,am=String.prototype.toLowerCase,lm=RegExp.prototype.test,cm=Array.prototype.concat,pm=Array.prototype.join,um=Array.prototype.slice,dm=Math.floor,hm="function"==typeof BigInt?BigInt.prototype.valueOf:null,fm=Object.getOwnPropertySymbols,mm="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,ym="function"==typeof Symbol&&"object"==typeof Symbol.iterator,gm="function"==typeof Symbol&&Symbol.toStringTag&&(Symbol.toStringTag,1)?Symbol.toStringTag:null,vm=Object.prototype.propertyIsEnumerable,bm=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function xm(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||lm.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var n=e<0?-dm(-e):dm(e);if(n!==e){var s=String(n),i=sm.call(t,s.length+1);return im.call(s,r,"$&_")+"."+im.call(im.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return im.call(t,r,"$&_")}var wm=Uf.custom,$m=wm&&Om(wm)?wm:null;function Sm(e,t,r){var n="double"===(r.quoteStyle||t)?'"':"'";return n+e+n}function Em(e){return im.call(String(e),/"/g,"&quot;")}function km(e){return!("[object Array]"!==Pm(e)||gm&&"object"==typeof e&&gm in e)}function Om(e){if(ym)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return!0;if(!e||"object"!=typeof e||!mm)return!1;try{return mm.call(e),!0}catch(e){}return!1}var jm=Object.prototype.hasOwnProperty||function(e){return e in this};function Am(e,t){return jm.call(e,t)}function Pm(e){return tm.call(e)}function Tm(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function Cm(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return Cm(sm.call(e,0,t.maxStringLength),t)+n}return Sm(im.call(im.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Im),"single",t)}function Im(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+om.call(t.toString(16))}function Rm(e){return"Object("+e+")"}function _m(e){return e+" { ? }"}function Fm(e,t,r,n){return e+" ("+t+") {"+(n?Dm(r,n):pm.call(r,", "))+"}"}function Dm(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+pm.call(e,","+r)+"\n"+t.prev}function Mm(e,t){var r=km(e),n=[];if(r){n.length=e.length;for(var s=0;s<e.length;s++)n[s]=Am(e,s)?t(e[s],e):""}var i,o="function"==typeof fm?fm(e):[];if(ym){i={};for(var a=0;a<o.length;a++)i["$"+o[a]]=o[a]}for(var l in e)Am(e,l)&&(r&&String(Number(l))===l&&l<e.length||ym&&i["$"+l]instanceof Symbol||(lm.call(/[^\w$]/,l)?n.push(t(l,e)+": "+t(e[l],e)):n.push(l+": "+t(e[l],e))));if("function"==typeof fm)for(var c=0;c<o.length;c++)vm.call(e,o[c])&&n.push("["+t(o[c])+"]: "+t(e[o[c]],e));return n}var qm=Mf,Lm=function(e,t){var r=Lf(e,!!t);return"function"==typeof r&&Nf(e,".prototype.")>-1?Bf(r):r},Bm=function e(t,r,n,s){var i=r||{};if(Am(i,"quoteStyle")&&"single"!==i.quoteStyle&&"double"!==i.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(Am(i,"maxStringLength")&&("number"==typeof i.maxStringLength?i.maxStringLength<0&&i.maxStringLength!==1/0:null!==i.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var o=!Am(i,"customInspect")||i.customInspect;if("boolean"!=typeof o&&"symbol"!==o)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Am(i,"indent")&&null!==i.indent&&"\t"!==i.indent&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Am(i,"numericSeparator")&&"boolean"!=typeof i.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var a=i.numericSeparator;if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return Cm(t,i);if("number"==typeof t){if(0===t)return 1/0/t>0?"0":"-0";var l=String(t);return a?xm(t,l):l}if("bigint"==typeof t){var c=String(t)+"n";return a?xm(t,c):c}var p=void 0===i.depth?5:i.depth;if(void 0===n&&(n=0),n>=p&&p>0&&"object"==typeof t)return km(t)?"[Array]":"[Object]";var u=function(e,t){var r;if("\t"===e.indent)r="\t";else{if(!("number"==typeof e.indent&&e.indent>0))return null;r=pm.call(Array(e.indent+1)," ")}return{base:r,prev:pm.call(Array(t+1),r)}}(i,n);if(void 0===s)s=[];else if(Tm(s,t)>=0)return"[Circular]";function d(t,r,o){if(r&&(s=um.call(s)).push(r),o){var a={depth:i.depth};return Am(i,"quoteStyle")&&(a.quoteStyle=i.quoteStyle),e(t,a,n+1,s)}return e(t,i,n+1,s)}if("function"==typeof t){var h=function(e){if(e.name)return e.name;var t=nm.call(rm.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),f=Mm(t,d);return"[Function"+(h?": "+h:" (anonymous)")+"]"+(f.length>0?" { "+pm.call(f,", ")+" }":"")}if(Om(t)){var m=ym?im.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):mm.call(t);return"object"!=typeof t||ym?m:Rm(m)}if(function(e){return!(!e||"object"!=typeof e)&&("undefined"!=typeof HTMLElement&&e instanceof HTMLElement||"string"==typeof e.nodeName&&"function"==typeof e.getAttribute)}(t)){for(var y="<"+am.call(String(t.nodeName)),g=t.attributes||[],v=0;v<g.length;v++)y+=" "+g[v].name+"="+Sm(Em(g[v].value),"double",i);return y+=">",t.childNodes&&t.childNodes.length&&(y+="..."),y+"</"+am.call(String(t.nodeName))+">"}if(km(t)){if(0===t.length)return"[]";var b=Mm(t,d);return u&&!function(e){for(var t=0;t<e.length;t++)if(Tm(e[t],"\n")>=0)return!1;return!0}(b)?"["+Dm(b,u)+"]":"[ "+pm.call(b,", ")+" ]"}if(function(e){return!("[object Error]"!==Pm(e)||gm&&"object"==typeof e&&gm in e)}(t)){var x=Mm(t,d);return"cause"in t&&!vm.call(t,"cause")?"{ ["+String(t)+"] "+pm.call(cm.call("[cause]: "+d(t.cause),x),", ")+" }":0===x.length?"["+String(t)+"]":"{ ["+String(t)+"] "+pm.call(x,", ")+" }"}if("object"==typeof t&&o){if($m&&"function"==typeof t[$m])return t[$m]();if("symbol"!==o&&"function"==typeof t.inspect)return t.inspect()}if(function(e){if(!Vf||!e||"object"!=typeof e)return!1;try{Vf.call(e);try{Kf.call(e)}catch(e){return!0}return e instanceof Map}catch(e){}return!1}(t)){var w=[];return Wf.call(t,(function(e,r){w.push(d(r,t,!0)+" => "+d(e,t))})),Fm("Map",Vf.call(t),w,u)}if(function(e){if(!Kf||!e||"object"!=typeof e)return!1;try{Kf.call(e);try{Vf.call(e)}catch(e){return!0}return e instanceof Set}catch(e){}return!1}(t)){var $=[];return Zf.call(t,(function(e){$.push(d(e,t))})),Fm("Set",Kf.call(t),$,u)}if(function(e){if(!Yf||!e||"object"!=typeof e)return!1;try{Yf.call(e,Yf);try{Xf.call(e,Xf)}catch(e){return!0}return e instanceof WeakMap}catch(e){}return!1}(t))return _m("WeakMap");if(function(e){if(!Xf||!e||"object"!=typeof e)return!1;try{Xf.call(e,Xf);try{Yf.call(e,Yf)}catch(e){return!0}return e instanceof WeakSet}catch(e){}return!1}(t))return _m("WeakSet");if(function(e){if(!Qf||!e||"object"!=typeof e)return!1;try{return Qf.call(e),!0}catch(e){}return!1}(t))return _m("WeakRef");if(function(e){return!("[object Number]"!==Pm(e)||gm&&"object"==typeof e&&gm in e)}(t))return Rm(d(Number(t)));if(function(e){if(!e||"object"!=typeof e||!hm)return!1;try{return hm.call(e),!0}catch(e){}return!1}(t))return Rm(d(hm.call(t)));if(function(e){return!("[object Boolean]"!==Pm(e)||gm&&"object"==typeof e&&gm in e)}(t))return Rm(em.call(t));if(function(e){return!("[object String]"!==Pm(e)||gm&&"object"==typeof e&&gm in e)}(t))return Rm(d(String(t)));if(!function(e){return!("[object Date]"!==Pm(e)||gm&&"object"==typeof e&&gm in e)}(t)&&!function(e){return!("[object RegExp]"!==Pm(e)||gm&&"object"==typeof e&&gm in e)}(t)){var S=Mm(t,d),E=bm?bm(t)===Object.prototype:t instanceof Object||t.constructor===Object,k=t instanceof Object?"":"null prototype",O=!E&&gm&&Object(t)===t&&gm in t?sm.call(Pm(t),8,-1):k?"Object":"",j=(E||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(O||k?"["+pm.call(cm.call([],O||[],k||[]),": ")+"] ":"");return 0===S.length?j+"{}":u?j+"{"+Dm(S,u)+"}":j+"{ "+pm.call(S,", ")+" }"}return String(t)},Nm=qm("%TypeError%"),Um=qm("%WeakMap%",!0),zm=qm("%Map%",!0),Hm=Lm("WeakMap.prototype.get",!0),Vm=Lm("WeakMap.prototype.set",!0),Wm=Lm("WeakMap.prototype.has",!0),Gm=Lm("Map.prototype.get",!0),Jm=Lm("Map.prototype.set",!0),Km=Lm("Map.prototype.has",!0),Zm=function(e,t){for(var r,n=e;null!==(r=n.next);n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r},Ym=String.prototype.replace,Xm=/%20/g,Qm="RFC3986",ey={default:Qm,formatters:{RFC1738:function(e){return Ym.call(e,Xm,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:Qm},ty=ey,ry=Object.prototype.hasOwnProperty,ny=Array.isArray,sy=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),iy=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r},oy={arrayToObject:iy,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var s=t[n],i=s.obj[s.prop],o=Object.keys(i),a=0;a<o.length;++a){var l=o[a],c=i[l];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:i,prop:l}),r.push(c))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(ny(r)){for(var n=[],s=0;s<r.length;++s)void 0!==r[s]&&n.push(r[s]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,n,s){if(0===e.length)return e;var i=e;if("symbol"==typeof e?i=Symbol.prototype.toString.call(e):"string"!=typeof e&&(i=String(e)),"iso-8859-1"===r)return escape(i).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",a=0;a<i.length;++a){var l=i.charCodeAt(a);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||s===ty.RFC1738&&(40===l||41===l)?o+=i.charAt(a):l<128?o+=sy[l]:l<2048?o+=sy[192|l>>6]+sy[128|63&l]:l<55296||l>=57344?o+=sy[224|l>>12]+sy[128|l>>6&63]+sy[128|63&l]:(a+=1,l=65536+((1023&l)<<10|1023&i.charCodeAt(a)),o+=sy[240|l>>18]+sy[128|l>>12&63]+sy[128|l>>6&63]+sy[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(ny(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(ny(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!ry.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var s=t;return ny(t)&&!ny(r)&&(s=iy(t,n)),ny(t)&&ny(r)?(r.forEach((function(r,s){if(ry.call(t,s)){var i=t[s];i&&"object"==typeof i&&r&&"object"==typeof r?t[s]=e(i,r,n):t.push(r)}else t[s]=r})),t):Object.keys(r).reduce((function(t,s){var i=r[s];return ry.call(t,s)?t[s]=e(t[s],i,n):t[s]=i,t}),s)}},ay=function(){var e,t,r,n={assert:function(e){if(!n.has(e))throw new Nm("Side channel does not contain "+Bm(e))},get:function(n){if(Um&&n&&("object"==typeof n||"function"==typeof n)){if(e)return Hm(e,n)}else if(zm){if(t)return Gm(t,n)}else if(r)return function(e,t){var r=Zm(e,t);return r&&r.value}(r,n)},has:function(n){if(Um&&n&&("object"==typeof n||"function"==typeof n)){if(e)return Wm(e,n)}else if(zm){if(t)return Km(t,n)}else if(r)return function(e,t){return!!Zm(e,t)}(r,n);return!1},set:function(n,s){Um&&n&&("object"==typeof n||"function"==typeof n)?(e||(e=new Um),Vm(e,n,s)):zm?(t||(t=new zm),Jm(t,n,s)):(r||(r={key:{},next:null}),function(e,t,r){var n=Zm(e,t);n?n.value=r:e.next={key:t,next:e.next,value:r}}(r,n,s))}};return n},ly=oy,cy=ey,py=Object.prototype.hasOwnProperty,uy={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},dy=Array.isArray,hy=String.prototype.split,fy=Array.prototype.push,my=function(e,t){fy.apply(e,dy(t)?t:[t])},yy=Date.prototype.toISOString,gy=cy.default,vy={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:ly.encode,encodeValuesOnly:!1,format:gy,formatter:cy.formatters[gy],indices:!1,serializeDate:function(e){return yy.call(e)},skipNulls:!1,strictNullHandling:!1},by={},xy=function e(t,r,n,s,i,o,a,l,c,p,u,d,h,f,m){for(var y,g=t,v=m,b=0,x=!1;void 0!==(v=v.get(by))&&!x;){var w=v.get(t);if(b+=1,void 0!==w){if(w===b)throw new RangeError("Cyclic object value");x=!0}void 0===v.get(by)&&(b=0)}if("function"==typeof a?g=a(r,g):g instanceof Date?g=p(g):"comma"===n&&dy(g)&&(g=ly.maybeMap(g,(function(e){return e instanceof Date?p(e):e}))),null===g){if(s)return o&&!h?o(r,vy.encoder,f,"key",u):r;g=""}if("string"==typeof(y=g)||"number"==typeof y||"boolean"==typeof y||"symbol"==typeof y||"bigint"==typeof y||ly.isBuffer(g)){if(o){var $=h?r:o(r,vy.encoder,f,"key",u);if("comma"===n&&h){for(var S=hy.call(String(g),","),E="",k=0;k<S.length;++k)E+=(0===k?"":",")+d(o(S[k],vy.encoder,f,"value",u));return[d($)+"="+E]}return[d($)+"="+d(o(g,vy.encoder,f,"value",u))]}return[d(r)+"="+d(String(g))]}var O,j=[];if(void 0===g)return j;if("comma"===n&&dy(g))O=[{value:g.length>0?g.join(",")||null:void 0}];else if(dy(a))O=a;else{var A=Object.keys(g);O=l?A.sort(l):A}for(var P=0;P<O.length;++P){var T=O[P],C="object"==typeof T&&void 0!==T.value?T.value:g[T];if(!i||null!==C){var I=dy(g)?"function"==typeof n?n(r,T):r:r+(c?"."+T:"["+T+"]");m.set(t,b);var R=ay();R.set(by,m),my(j,e(C,I,n,s,i,o,a,l,c,p,u,d,h,f,R))}}return j},wy=oy,$y=Object.prototype.hasOwnProperty,Sy=Array.isArray,Ey={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:wy.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},ky=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},Oy=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},jy=function(e,t,r,n){if(e){var s=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,o=r.depth>0&&/(\[[^[\]]*])/.exec(s),a=o?s.slice(0,o.index):s,l=[];if(a){if(!r.plainObjects&&$y.call(Object.prototype,a)&&!r.allowPrototypes)return;l.push(a)}for(var c=0;r.depth>0&&null!==(o=i.exec(s))&&c<r.depth;){if(c+=1,!r.plainObjects&&$y.call(Object.prototype,o[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(o[1])}return o&&l.push("["+s.slice(o.index)+"]"),function(e,t,r,n){for(var s=n?t:Oy(t,r),i=e.length-1;i>=0;--i){var o,a=e[i];if("[]"===a&&r.parseArrays)o=[].concat(s);else{o=r.plainObjects?Object.create(null):{};var l="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,c=parseInt(l,10);r.parseArrays||""!==l?!isNaN(c)&&a!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(o=[])[c]=s:"__proto__"!==l&&(o[l]=s):o={0:s}}s=o}return s}(l,t,r,n)}};const Ay=_t({formats:ey,parse:function(e,t){var r=function(e){if(!e)return Ey;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?Ey.charset:e.charset;return{allowDots:void 0===e.allowDots?Ey.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:Ey.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:Ey.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:Ey.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:Ey.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:Ey.comma,decoder:"function"==typeof e.decoder?e.decoder:Ey.decoder,delimiter:"string"==typeof e.delimiter||wy.isRegExp(e.delimiter)?e.delimiter:Ey.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:Ey.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:Ey.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:Ey.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:Ey.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:Ey.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof e?function(e,t){var r,n={},s=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,o=s.split(t.delimiter,i),a=-1,l=t.charset;if(t.charsetSentinel)for(r=0;r<o.length;++r)0===o[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===o[r]?l="utf-8":"utf8=%26%2310003%3B"===o[r]&&(l="iso-8859-1"),a=r,r=o.length);for(r=0;r<o.length;++r)if(r!==a){var c,p,u=o[r],d=u.indexOf("]="),h=-1===d?u.indexOf("="):d+1;-1===h?(c=t.decoder(u,Ey.decoder,l,"key"),p=t.strictNullHandling?null:""):(c=t.decoder(u.slice(0,h),Ey.decoder,l,"key"),p=wy.maybeMap(Oy(u.slice(h+1),t),(function(e){return t.decoder(e,Ey.decoder,l,"value")}))),p&&t.interpretNumericEntities&&"iso-8859-1"===l&&(p=ky(p)),u.indexOf("[]=")>-1&&(p=Sy(p)?[p]:p),$y.call(n,c)?n[c]=wy.combine(n[c],p):n[c]=p}return n}(e,r):e,s=r.plainObjects?Object.create(null):{},i=Object.keys(n),o=0;o<i.length;++o){var a=i[o],l=jy(a,n[a],r,"string"==typeof e);s=wy.merge(s,l,r)}return!0===r.allowSparse?s:wy.compact(s)},stringify:function(e,t){var r,n=e,s=function(e){if(!e)return vy;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||vy.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=cy.default;if(void 0!==e.format){if(!py.call(cy.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=cy.formatters[r],s=vy.filter;return("function"==typeof e.filter||dy(e.filter))&&(s=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:vy.addQueryPrefix,allowDots:void 0===e.allowDots?vy.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:vy.charsetSentinel,delimiter:void 0===e.delimiter?vy.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:vy.encode,encoder:"function"==typeof e.encoder?e.encoder:vy.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:vy.encodeValuesOnly,filter:s,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:vy.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:vy.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:vy.strictNullHandling}}(t);"function"==typeof s.filter?n=(0,s.filter)("",n):dy(s.filter)&&(r=s.filter);var i,o=[];if("object"!=typeof n||null===n)return"";i=t&&t.arrayFormat in uy?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var a=uy[i];r||(r=Object.keys(n)),s.sort&&r.sort(s.sort);for(var l=ay(),c=0;c<r.length;++c){var p=r[c];s.skipNulls&&null===n[p]||my(o,xy(n[p],p,a,s.strictNullHandling,s.skipNulls,s.encode?s.encoder:null,s.filter,s.sort,s.allowDots,s.serializeDate,s.format,s.formatter,s.encodeValuesOnly,s.charset,l))}var u=o.join(s.delimiter),d=!0===s.addQueryPrefix?"?":"";return s.charsetSentinel&&("iso-8859-1"===s.charset?d+="utf8=%26%2310003%3B&":d+="utf8=%E2%9C%93&"),u.length>0?d+u:""}});function Py(e){return null==e}var Ty={isNothing:Py,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:Py(e)?[]:[e]},repeat:function(e,t){var r,n="";for(r=0;r<t;r+=1)n+=e;return n},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var r,n,s,i;if(t)for(r=0,n=(i=Object.keys(t)).length;r<n;r+=1)e[s=i[r]]=t[s];return e}};function Cy(e,t){var r="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+="\n\n"+e.mark.snippet),n+" "+r):n}function Iy(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Cy(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}Iy.prototype=Object.create(Error.prototype),Iy.prototype.constructor=Iy,Iy.prototype.toString=function(e){return this.name+": "+Cy(this,e)};var Ry=Iy;function _y(e,t,r,n,s){var i="",o="",a=Math.floor(s/2)-1;return n-t>a&&(t=n-a+(i=" ... ").length),r-n>a&&(r=n+a-(o=" ...").length),{str:i+e.slice(t,r).replace(/\t/g,"→")+o,pos:n-t+i.length}}function Fy(e,t){return Ty.repeat(" ",t-e.length)+e}var Dy=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var r,n=/\r?\n|\r|\0/g,s=[0],i=[],o=-1;r=n.exec(e.buffer);)i.push(r.index),s.push(r.index+r[0].length),e.position<=r.index&&o<0&&(o=s.length-2);o<0&&(o=s.length-1);var a,l,c="",p=Math.min(e.line+t.linesAfter,i.length).toString().length,u=t.maxLength-(t.indent+p+3);for(a=1;a<=t.linesBefore&&!(o-a<0);a++)l=_y(e.buffer,s[o-a],i[o-a],e.position-(s[o]-s[o-a]),u),c=Ty.repeat(" ",t.indent)+Fy((e.line-a+1).toString(),p)+" | "+l.str+"\n"+c;for(l=_y(e.buffer,s[o],i[o],e.position,u),c+=Ty.repeat(" ",t.indent)+Fy((e.line+1).toString(),p)+" | "+l.str+"\n",c+=Ty.repeat("-",t.indent+p+3+l.pos)+"^\n",a=1;a<=t.linesAfter&&!(o+a>=i.length);a++)l=_y(e.buffer,s[o+a],i[o+a],e.position-(s[o]-s[o+a]),u),c+=Ty.repeat(" ",t.indent)+Fy((e.line+a+1).toString(),p)+" | "+l.str+"\n";return c.replace(/\n$/,"")},My=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],qy=["scalar","sequence","mapping"],Ly=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===My.indexOf(t))throw new Ry('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach((function(r){e[r].forEach((function(e){t[String(e)]=r}))})),t}(t.styleAliases||null),-1===qy.indexOf(this.kind))throw new Ry('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function By(e,t){var r=[];return e[t].forEach((function(e){var t=r.length;r.forEach((function(r,n){r.tag===e.tag&&r.kind===e.kind&&r.multi===e.multi&&(t=n)})),r[t]=e})),r}function Ny(e){return this.extend(e)}Ny.prototype.extend=function(e){var t=[],r=[];if(e instanceof Ly)r.push(e);else if(Array.isArray(e))r=r.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new Ry("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(r=r.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof Ly))throw new Ry("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new Ry("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new Ry("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),r.forEach((function(e){if(!(e instanceof Ly))throw new Ry("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var n=Object.create(Ny.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(r),n.compiledImplicit=By(n,"implicit"),n.compiledExplicit=By(n,"explicit"),n.compiledTypeMap=function(){var e,t,r={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(e){e.multi?(r.multi[e.kind].push(e),r.multi.fallback.push(e)):r[e.kind][e.tag]=r.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(n);return r}(n.compiledImplicit,n.compiledExplicit),n};var Uy=Ny,zy=new Ly("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),Hy=new Ly("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),Vy=new Ly("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),Wy=new Uy({explicit:[zy,Hy,Vy]}),Gy=new Ly("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Jy=new Ly("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Ky(e){return 48<=e&&e<=55}function Zy(e){return 48<=e&&e<=57}var Yy=new Ly("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r,n=e.length,s=0,i=!1;if(!n)return!1;if("-"!==(t=e[s])&&"+"!==t||(t=e[++s]),"0"===t){if(s+1===n)return!0;if("b"===(t=e[++s])){for(s++;s<n;s++)if("_"!==(t=e[s])){if("0"!==t&&"1"!==t)return!1;i=!0}return i&&"_"!==t}if("x"===t){for(s++;s<n;s++)if("_"!==(t=e[s])){if(!(48<=(r=e.charCodeAt(s))&&r<=57||65<=r&&r<=70||97<=r&&r<=102))return!1;i=!0}return i&&"_"!==t}if("o"===t){for(s++;s<n;s++)if("_"!==(t=e[s])){if(!Ky(e.charCodeAt(s)))return!1;i=!0}return i&&"_"!==t}}if("_"===t)return!1;for(;s<n;s++)if("_"!==(t=e[s])){if(!Zy(e.charCodeAt(s)))return!1;i=!0}return!(!i||"_"===t)},construct:function(e){var t,r=e,n=1;if(-1!==r.indexOf("_")&&(r=r.replace(/_/g,"")),"-"!==(t=r[0])&&"+"!==t||("-"===t&&(n=-1),t=(r=r.slice(1))[0]),"0"===r)return 0;if("0"===t){if("b"===r[1])return n*parseInt(r.slice(2),2);if("x"===r[1])return n*parseInt(r.slice(2),16);if("o"===r[1])return n*parseInt(r.slice(2),8)}return n*parseInt(r,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!Ty.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Xy=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),Qy=/^[-+]?[0-9]+e/,eg=new Ly("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!Xy.test(e)||"_"===e[e.length-1])},construct:function(e){var t,r;return r="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===r?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:r*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||Ty.isNegativeZero(e))},represent:function(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ty.isNegativeZero(e))return"-0.0";return r=e.toString(10),Qy.test(r)?r.replace("e",".e"):r},defaultStyle:"lowercase"}),tg=Wy.extend({implicit:[Gy,Jy,Yy,eg]}),rg=tg,ng=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),sg=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),ig=new Ly("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==ng.exec(e)||null!==sg.exec(e))},construct:function(e){var t,r,n,s,i,o,a,l,c=0,p=null;if(null===(t=ng.exec(e))&&(t=sg.exec(e)),null===t)throw new Error("Date resolve error");if(r=+t[1],n=+t[2]-1,s=+t[3],!t[4])return new Date(Date.UTC(r,n,s));if(i=+t[4],o=+t[5],a=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(p=-p)),l=new Date(Date.UTC(r,n,s,i,o,a,c)),p&&l.setTime(l.getTime()-p),l},instanceOf:Date,represent:function(e){return e.toISOString()}}),og=new Ly("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),ag="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r",lg=new Ly("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r,n=0,s=e.length,i=ag;for(r=0;r<s;r++)if(!((t=i.indexOf(e.charAt(r)))>64)){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){var t,r,n=e.replace(/[\r\n=]/g,""),s=n.length,i=ag,o=0,a=[];for(t=0;t<s;t++)t%4==0&&t&&(a.push(o>>16&255),a.push(o>>8&255),a.push(255&o)),o=o<<6|i.indexOf(n.charAt(t));return 0==(r=s%4*6)?(a.push(o>>16&255),a.push(o>>8&255),a.push(255&o)):18===r?(a.push(o>>10&255),a.push(o>>2&255)):12===r&&a.push(o>>4&255),new Uint8Array(a)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,r,n="",s=0,i=e.length,o=ag;for(t=0;t<i;t++)t%3==0&&t&&(n+=o[s>>18&63],n+=o[s>>12&63],n+=o[s>>6&63],n+=o[63&s]),s=(s<<8)+e[t];return 0==(r=i%3)?(n+=o[s>>18&63],n+=o[s>>12&63],n+=o[s>>6&63],n+=o[63&s]):2===r?(n+=o[s>>10&63],n+=o[s>>4&63],n+=o[s<<2&63],n+=o[64]):1===r&&(n+=o[s>>2&63],n+=o[s<<4&63],n+=o[64],n+=o[64]),n}}),cg=Object.prototype.hasOwnProperty,pg=Object.prototype.toString,ug=new Ly("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,r,n,s,i,o=[],a=e;for(t=0,r=a.length;t<r;t+=1){if(n=a[t],i=!1,"[object Object]"!==pg.call(n))return!1;for(s in n)if(cg.call(n,s)){if(i)return!1;i=!0}if(!i)return!1;if(-1!==o.indexOf(s))return!1;o.push(s)}return!0},construct:function(e){return null!==e?e:[]}}),dg=Object.prototype.toString,hg=new Ly("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,r,n,s,i,o=e;for(i=new Array(o.length),t=0,r=o.length;t<r;t+=1){if(n=o[t],"[object Object]"!==dg.call(n))return!1;if(1!==(s=Object.keys(n)).length)return!1;i[t]=[s[0],n[s[0]]]}return!0},construct:function(e){if(null===e)return[];var t,r,n,s,i,o=e;for(i=new Array(o.length),t=0,r=o.length;t<r;t+=1)n=o[t],s=Object.keys(n),i[t]=[s[0],n[s[0]]];return i}}),fg=Object.prototype.hasOwnProperty,mg=new Ly("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,r=e;for(t in r)if(fg.call(r,t)&&null!==r[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),yg=rg.extend({implicit:[ig,og],explicit:[lg,ug,hg,mg]}),gg=Object.prototype.hasOwnProperty,vg=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,bg=/[\x85\u2028\u2029]/,xg=/[,\[\]\{\}]/,wg=/^(?:!|!!|![a-z\-]+!)$/i,$g=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Sg(e){return Object.prototype.toString.call(e)}function Eg(e){return 10===e||13===e}function kg(e){return 9===e||32===e}function Og(e){return 9===e||32===e||10===e||13===e}function jg(e){return 44===e||91===e||93===e||123===e||125===e}function Ag(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function Pg(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function Tg(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var Cg=new Array(256),Ig=new Array(256),Rg=0;Rg<256;Rg++)Cg[Rg]=Pg(Rg)?1:0,Ig[Rg]=Pg(Rg);function _g(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||yg,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Fg(e,t){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return r.snippet=Dy(r),new Ry(t,r)}function Dg(e,t){throw Fg(e,t)}function Mg(e,t){e.onWarning&&e.onWarning.call(null,Fg(e,t))}var qg={YAML:function(e,t,r){var n,s,i;null!==e.version&&Dg(e,"duplication of %YAML directive"),1!==r.length&&Dg(e,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(r[0]))&&Dg(e,"ill-formed argument of the YAML directive"),s=parseInt(n[1],10),i=parseInt(n[2],10),1!==s&&Dg(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=i<2,1!==i&&2!==i&&Mg(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var n,s;2!==r.length&&Dg(e,"TAG directive accepts exactly two arguments"),n=r[0],s=r[1],wg.test(n)||Dg(e,"ill-formed tag handle (first argument) of the TAG directive"),gg.call(e.tagMap,n)&&Dg(e,'there is a previously declared suffix for "'+n+'" tag handle'),$g.test(s)||Dg(e,"ill-formed tag prefix (second argument) of the TAG directive");try{s=decodeURIComponent(s)}catch(t){Dg(e,"tag prefix is malformed: "+s)}e.tagMap[n]=s}};function Lg(e,t,r,n){var s,i,o,a;if(t<r){if(a=e.input.slice(t,r),n)for(s=0,i=a.length;s<i;s+=1)9===(o=a.charCodeAt(s))||32<=o&&o<=1114111||Dg(e,"expected valid JSON character");else vg.test(a)&&Dg(e,"the stream contains non-printable characters");e.result+=a}}function Bg(e,t,r,n){var s,i,o,a;for(Ty.isObject(r)||Dg(e,"cannot merge mappings; the provided source object is unacceptable"),o=0,a=(s=Object.keys(r)).length;o<a;o+=1)i=s[o],gg.call(t,i)||(t[i]=r[i],n[i]=!0)}function Ng(e,t,r,n,s,i,o,a,l){var c,p;if(Array.isArray(s))for(c=0,p=(s=Array.prototype.slice.call(s)).length;c<p;c+=1)Array.isArray(s[c])&&Dg(e,"nested arrays are not supported inside keys"),"object"==typeof s&&"[object Object]"===Sg(s[c])&&(s[c]="[object Object]");if("object"==typeof s&&"[object Object]"===Sg(s)&&(s="[object Object]"),s=String(s),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(i))for(c=0,p=i.length;c<p;c+=1)Bg(e,t,i[c],r);else Bg(e,t,i,r);else e.json||gg.call(r,s)||!gg.call(t,s)||(e.line=o||e.line,e.lineStart=a||e.lineStart,e.position=l||e.position,Dg(e,"duplicated mapping key")),"__proto__"===s?Object.defineProperty(t,s,{configurable:!0,enumerable:!0,writable:!0,value:i}):t[s]=i,delete r[s];return t}function Ug(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):Dg(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function zg(e,t,r){for(var n=0,s=e.input.charCodeAt(e.position);0!==s;){for(;kg(s);)9===s&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),s=e.input.charCodeAt(++e.position);if(t&&35===s)do{s=e.input.charCodeAt(++e.position)}while(10!==s&&13!==s&&0!==s);if(!Eg(s))break;for(Ug(e),s=e.input.charCodeAt(e.position),n++,e.lineIndent=0;32===s;)e.lineIndent++,s=e.input.charCodeAt(++e.position)}return-1!==r&&0!==n&&e.lineIndent<r&&Mg(e,"deficient indentation"),n}function Hg(e){var t,r=e.position;return!(45!==(t=e.input.charCodeAt(r))&&46!==t||t!==e.input.charCodeAt(r+1)||t!==e.input.charCodeAt(r+2)||(r+=3,0!==(t=e.input.charCodeAt(r))&&!Og(t)))}function Vg(e,t){1===t?e.result+=" ":t>1&&(e.result+=Ty.repeat("\n",t-1))}function Wg(e,t){var r,n,s=e.tag,i=e.anchor,o=[],a=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=o),n=e.input.charCodeAt(e.position);0!==n&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,Dg(e,"tab characters must not be used in indentation")),45===n)&&Og(e.input.charCodeAt(e.position+1));)if(a=!0,e.position++,zg(e,!0,-1)&&e.lineIndent<=t)o.push(null),n=e.input.charCodeAt(e.position);else if(r=e.line,Kg(e,t,3,!1,!0),o.push(e.result),zg(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&0!==n)Dg(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!a&&(e.tag=s,e.anchor=i,e.kind="sequence",e.result=o,!0)}function Gg(e){var t,r,n,s,i=!1,o=!1;if(33!==(s=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&Dg(e,"duplication of a tag property"),60===(s=e.input.charCodeAt(++e.position))?(i=!0,s=e.input.charCodeAt(++e.position)):33===s?(o=!0,r="!!",s=e.input.charCodeAt(++e.position)):r="!",t=e.position,i){do{s=e.input.charCodeAt(++e.position)}while(0!==s&&62!==s);e.position<e.length?(n=e.input.slice(t,e.position),s=e.input.charCodeAt(++e.position)):Dg(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==s&&!Og(s);)33===s&&(o?Dg(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),wg.test(r)||Dg(e,"named tag handle cannot contain such characters"),o=!0,t=e.position+1)),s=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),xg.test(n)&&Dg(e,"tag suffix cannot contain flow indicator characters")}n&&!$g.test(n)&&Dg(e,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(t){Dg(e,"tag name is malformed: "+n)}return i?e.tag=n:gg.call(e.tagMap,r)?e.tag=e.tagMap[r]+n:"!"===r?e.tag="!"+n:"!!"===r?e.tag="tag:yaml.org,2002:"+n:Dg(e,'undeclared tag handle "'+r+'"'),!0}function Jg(e){var t,r;if(38!==(r=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&Dg(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!Og(r)&&!jg(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&Dg(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function Kg(e,t,r,n,s){var i,o,a,l,c,p,u,d,h,f=1,m=!1,y=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,i=o=a=4===r||3===r,n&&zg(e,!0,-1)&&(m=!0,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)),1===f)for(;Gg(e)||Jg(e);)zg(e,!0,-1)?(m=!0,a=i,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)):a=!1;if(a&&(a=m||s),1!==f&&4!==r||(d=1===r||2===r?t:t+1,h=e.position-e.lineStart,1===f?a&&(Wg(e,h)||function(e,t,r){var n,s,i,o,a,l,c,p=e.tag,u=e.anchor,d={},h=Object.create(null),f=null,m=null,y=null,g=!1,v=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=d),c=e.input.charCodeAt(e.position);0!==c;){if(g||-1===e.firstTabInLine||(e.position=e.firstTabInLine,Dg(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),i=e.line,63!==c&&58!==c||!Og(n)){if(o=e.line,a=e.lineStart,l=e.position,!Kg(e,r,2,!1,!0))break;if(e.line===i){for(c=e.input.charCodeAt(e.position);kg(c);)c=e.input.charCodeAt(++e.position);if(58===c)Og(c=e.input.charCodeAt(++e.position))||Dg(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(Ng(e,d,h,f,m,null,o,a,l),f=m=y=null),v=!0,g=!1,s=!1,f=e.tag,m=e.result;else{if(!v)return e.tag=p,e.anchor=u,!0;Dg(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return e.tag=p,e.anchor=u,!0;Dg(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(g&&(Ng(e,d,h,f,m,null,o,a,l),f=m=y=null),v=!0,g=!0,s=!0):g?(g=!1,s=!0):Dg(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=n;if((e.line===i||e.lineIndent>t)&&(g&&(o=e.line,a=e.lineStart,l=e.position),Kg(e,t,4,!0,s)&&(g?m=e.result:y=e.result),g||(Ng(e,d,h,f,m,y,o,a,l),f=m=y=null),zg(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===i||e.lineIndent>t)&&0!==c)Dg(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&Ng(e,d,h,f,m,null,o,a,l),v&&(e.tag=p,e.anchor=u,e.kind="mapping",e.result=d),v}(e,h,d))||function(e,t){var r,n,s,i,o,a,l,c,p,u,d,h,f=!0,m=e.tag,y=e.anchor,g=Object.create(null);if(91===(h=e.input.charCodeAt(e.position)))o=93,c=!1,i=[];else{if(123!==h)return!1;o=125,c=!0,i={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),h=e.input.charCodeAt(++e.position);0!==h;){if(zg(e,!0,t),(h=e.input.charCodeAt(e.position))===o)return e.position++,e.tag=m,e.anchor=y,e.kind=c?"mapping":"sequence",e.result=i,!0;f?44===h&&Dg(e,"expected the node content, but found ','"):Dg(e,"missed comma between flow collection entries"),d=null,a=l=!1,63===h&&Og(e.input.charCodeAt(e.position+1))&&(a=l=!0,e.position++,zg(e,!0,t)),r=e.line,n=e.lineStart,s=e.position,Kg(e,t,1,!1,!0),u=e.tag,p=e.result,zg(e,!0,t),h=e.input.charCodeAt(e.position),!l&&e.line!==r||58!==h||(a=!0,h=e.input.charCodeAt(++e.position),zg(e,!0,t),Kg(e,t,1,!1,!0),d=e.result),c?Ng(e,i,g,u,p,d,r,n,s):a?i.push(Ng(e,null,g,u,p,d,r,n,s)):i.push(p),zg(e,!0,t),44===(h=e.input.charCodeAt(e.position))?(f=!0,h=e.input.charCodeAt(++e.position)):f=!1}Dg(e,"unexpected end of the stream within a flow collection")}(e,d)?y=!0:(o&&function(e,t){var r,n,s,i,o,a=1,l=!1,c=!1,p=t,u=0,d=!1;if(124===(i=e.input.charCodeAt(e.position)))n=!1;else{if(62!==i)return!1;n=!0}for(e.kind="scalar",e.result="";0!==i;)if(43===(i=e.input.charCodeAt(++e.position))||45===i)1===a?a=43===i?3:2:Dg(e,"repeat of a chomping mode identifier");else{if(!((s=48<=(o=i)&&o<=57?o-48:-1)>=0))break;0===s?Dg(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):c?Dg(e,"repeat of an indentation width identifier"):(p=t+s-1,c=!0)}if(kg(i)){do{i=e.input.charCodeAt(++e.position)}while(kg(i));if(35===i)do{i=e.input.charCodeAt(++e.position)}while(!Eg(i)&&0!==i)}for(;0!==i;){for(Ug(e),e.lineIndent=0,i=e.input.charCodeAt(e.position);(!c||e.lineIndent<p)&&32===i;)e.lineIndent++,i=e.input.charCodeAt(++e.position);if(!c&&e.lineIndent>p&&(p=e.lineIndent),Eg(i))u++;else{if(e.lineIndent<p){3===a?e.result+=Ty.repeat("\n",l?1+u:u):1===a&&l&&(e.result+="\n");break}for(n?kg(i)?(d=!0,e.result+=Ty.repeat("\n",l?1+u:u)):d?(d=!1,e.result+=Ty.repeat("\n",u+1)):0===u?l&&(e.result+=" "):e.result+=Ty.repeat("\n",u):e.result+=Ty.repeat("\n",l?1+u:u),l=!0,c=!0,u=0,r=e.position;!Eg(i)&&0!==i;)i=e.input.charCodeAt(++e.position);Lg(e,r,e.position,!1)}}return!0}(e,d)||function(e,t){var r,n,s;if(39!==(r=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=s=e.position;0!==(r=e.input.charCodeAt(e.position));)if(39===r){if(Lg(e,n,e.position,!0),39!==(r=e.input.charCodeAt(++e.position)))return!0;n=e.position,e.position++,s=e.position}else Eg(r)?(Lg(e,n,s,!0),Vg(e,zg(e,!1,t)),n=s=e.position):e.position===e.lineStart&&Hg(e)?Dg(e,"unexpected end of the document within a single quoted scalar"):(e.position++,s=e.position);Dg(e,"unexpected end of the stream within a single quoted scalar")}(e,d)||function(e,t){var r,n,s,i,o,a,l;if(34!==(a=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,r=n=e.position;0!==(a=e.input.charCodeAt(e.position));){if(34===a)return Lg(e,r,e.position,!0),e.position++,!0;if(92===a){if(Lg(e,r,e.position,!0),Eg(a=e.input.charCodeAt(++e.position)))zg(e,!1,t);else if(a<256&&Cg[a])e.result+=Ig[a],e.position++;else if((o=120===(l=a)?2:117===l?4:85===l?8:0)>0){for(s=o,i=0;s>0;s--)(o=Ag(a=e.input.charCodeAt(++e.position)))>=0?i=(i<<4)+o:Dg(e,"expected hexadecimal character");e.result+=Tg(i),e.position++}else Dg(e,"unknown escape sequence");r=n=e.position}else Eg(a)?(Lg(e,r,n,!0),Vg(e,zg(e,!1,t)),r=n=e.position):e.position===e.lineStart&&Hg(e)?Dg(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}Dg(e,"unexpected end of the stream within a double quoted scalar")}(e,d)?y=!0:function(e){var t,r,n;if(42!==(n=e.input.charCodeAt(e.position)))return!1;for(n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!Og(n)&&!jg(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&Dg(e,"name of an alias node must contain at least one character"),r=e.input.slice(t,e.position),gg.call(e.anchorMap,r)||Dg(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],zg(e,!0,-1),!0}(e)?(y=!0,null===e.tag&&null===e.anchor||Dg(e,"alias node should not have any properties")):function(e,t,r){var n,s,i,o,a,l,c,p,u=e.kind,d=e.result;if(Og(p=e.input.charCodeAt(e.position))||jg(p)||35===p||38===p||42===p||33===p||124===p||62===p||39===p||34===p||37===p||64===p||96===p)return!1;if((63===p||45===p)&&(Og(n=e.input.charCodeAt(e.position+1))||r&&jg(n)))return!1;for(e.kind="scalar",e.result="",s=i=e.position,o=!1;0!==p;){if(58===p){if(Og(n=e.input.charCodeAt(e.position+1))||r&&jg(n))break}else if(35===p){if(Og(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&Hg(e)||r&&jg(p))break;if(Eg(p)){if(a=e.line,l=e.lineStart,c=e.lineIndent,zg(e,!1,-1),e.lineIndent>=t){o=!0,p=e.input.charCodeAt(e.position);continue}e.position=i,e.line=a,e.lineStart=l,e.lineIndent=c;break}}o&&(Lg(e,s,i,!1),Vg(e,e.line-a),s=i=e.position,o=!1),kg(p)||(i=e.position+1),p=e.input.charCodeAt(++e.position)}return Lg(e,s,i,!1),!!e.result||(e.kind=u,e.result=d,!1)}(e,d,1===r)&&(y=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===f&&(y=a&&Wg(e,h))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&Dg(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((u=e.implicitTypes[l]).resolve(e.result)){e.result=u.construct(e.result),e.tag=u.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(gg.call(e.typeMap[e.kind||"fallback"],e.tag))u=e.typeMap[e.kind||"fallback"][e.tag];else for(u=null,l=0,c=(p=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,p[l].tag.length)===p[l].tag){u=p[l];break}u||Dg(e,"unknown tag !<"+e.tag+">"),null!==e.result&&u.kind!==e.kind&&Dg(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+u.kind+'", not "'+e.kind+'"'),u.resolve(e.result,e.tag)?(e.result=u.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):Dg(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||y}function Zg(e){var t,r,n,s,i=e.position,o=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(s=e.input.charCodeAt(e.position))&&(zg(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==s));){for(o=!0,s=e.input.charCodeAt(++e.position),t=e.position;0!==s&&!Og(s);)s=e.input.charCodeAt(++e.position);for(n=[],(r=e.input.slice(t,e.position)).length<1&&Dg(e,"directive name must not be less than one character in length");0!==s;){for(;kg(s);)s=e.input.charCodeAt(++e.position);if(35===s){do{s=e.input.charCodeAt(++e.position)}while(0!==s&&!Eg(s));break}if(Eg(s))break;for(t=e.position;0!==s&&!Og(s);)s=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}0!==s&&Ug(e),gg.call(qg,r)?qg[r](e,r,n):Mg(e,'unknown document directive "'+r+'"')}zg(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,zg(e,!0,-1)):o&&Dg(e,"directives end mark is expected"),Kg(e,e.lineIndent-1,4,!1,!0),zg(e,!0,-1),e.checkLineBreaks&&bg.test(e.input.slice(i,e.position))&&Mg(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Hg(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,zg(e,!0,-1)):e.position<e.length-1&&Dg(e,"end of the stream or a document separator is expected")}function Yg(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var r=new _g(e,t),n=e.indexOf("\0");for(-1!==n&&(r.position=n,Dg(r,"null byte is not allowed in input")),r.input+="\0";32===r.input.charCodeAt(r.position);)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)Zg(r);return r.documents}var Xg=function(e,t,r){null!==t&&"object"==typeof t&&void 0===r&&(r=t,t=null);var n=Yg(e,r);if("function"!=typeof t)return n;for(var s=0,i=n.length;s<i;s+=1)t(n[s])},Qg=function(e,t){var r=Yg(e,t);if(0!==r.length){if(1===r.length)return r[0];throw new Ry("expected a single document in the stream, but found more")}},ev=Object.prototype.toString,tv=Object.prototype.hasOwnProperty,rv={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},nv=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],sv=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function iv(e){var t,r,n;if(t=e.toString(16).toUpperCase(),e<=255)r="x",n=2;else if(e<=65535)r="u",n=4;else{if(!(e<=4294967295))throw new Ry("code point within a string may not be greater than 0xFFFFFFFF");r="U",n=8}return"\\"+r+Ty.repeat("0",n-t.length)+t}function ov(e){this.schema=e.schema||yg,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Ty.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var r,n,s,i,o,a,l;if(null===t)return{};for(r={},s=0,i=(n=Object.keys(t)).length;s<i;s+=1)o=n[s],a=String(t[o]),"!!"===o.slice(0,2)&&(o="tag:yaml.org,2002:"+o.slice(2)),(l=e.compiledTypeMap.fallback[o])&&tv.call(l.styleAliases,a)&&(a=l.styleAliases[a]),r[o]=a;return r}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function av(e,t){for(var r,n=Ty.repeat(" ",t),s=0,i=-1,o="",a=e.length;s<a;)-1===(i=e.indexOf("\n",s))?(r=e.slice(s),s=a):(r=e.slice(s,i+1),s=i+1),r.length&&"\n"!==r&&(o+=n),o+=r;return o}function lv(e,t){return"\n"+Ty.repeat(" ",e.indent*t)}function cv(e){return 32===e||9===e}function pv(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function uv(e){return pv(e)&&65279!==e&&13!==e&&10!==e}function dv(e,t,r){var n=uv(e),s=n&&!cv(e);return(r?n:n&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!s)||uv(t)&&!cv(t)&&35===e||58===t&&s}function hv(e,t){var r,n=e.charCodeAt(t);return n>=55296&&n<=56319&&t+1<e.length&&(r=e.charCodeAt(t+1))>=56320&&r<=57343?1024*(n-55296)+r-56320+65536:n}function fv(e){return/^\n* /.test(e)}function mv(e,t,r,n,s){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==nv.indexOf(t)||sv.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var i=e.indent*Math.max(1,r),o=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-i),a=n||e.flowLevel>-1&&r>=e.flowLevel;switch(function(e,t,r,n,s,i,o,a){var l,c,p=0,u=null,d=!1,h=!1,f=-1!==n,m=-1,y=pv(c=hv(e,0))&&65279!==c&&!cv(c)&&45!==c&&63!==c&&58!==c&&44!==c&&91!==c&&93!==c&&123!==c&&125!==c&&35!==c&&38!==c&&42!==c&&33!==c&&124!==c&&61!==c&&62!==c&&39!==c&&34!==c&&37!==c&&64!==c&&96!==c&&function(e){return!cv(e)&&58!==e}(hv(e,e.length-1));if(t||o)for(l=0;l<e.length;p>=65536?l+=2:l++){if(!pv(p=hv(e,l)))return 5;y=y&&dv(p,u,a),u=p}else{for(l=0;l<e.length;p>=65536?l+=2:l++){if(10===(p=hv(e,l)))d=!0,f&&(h=h||l-m-1>n&&" "!==e[m+1],m=l);else if(!pv(p))return 5;y=y&&dv(p,u,a),u=p}h=h||f&&l-m-1>n&&" "!==e[m+1]}return d||h?r>9&&fv(e)?5:o?2===i?5:2:h?4:3:!y||o||s(e)?2===i?5:2:1}(t,a,e.indent,o,(function(t){return function(e,t){var r,n;for(r=0,n=e.implicitTypes.length;r<n;r+=1)if(e.implicitTypes[r].resolve(t))return!0;return!1}(e,t)}),e.quotingType,e.forceQuotes&&!n,s)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+yv(t,e.indent)+gv(av(t,i));case 4:return">"+yv(t,e.indent)+gv(av(function(e,t){for(var r,n,s,i=/(\n+)([^\n]*)/g,o=(s=-1!==(s=e.indexOf("\n"))?s:e.length,i.lastIndex=s,vv(e.slice(0,s),t)),a="\n"===e[0]||" "===e[0];n=i.exec(e);){var l=n[1],c=n[2];r=" "===c[0],o+=l+(a||r||""===c?"":"\n")+vv(c,t),a=r}return o}(t,o),i));case 5:return'"'+function(e){for(var t,r="",n=0,s=0;s<e.length;n>=65536?s+=2:s++)n=hv(e,s),!(t=rv[n])&&pv(n)?(r+=e[s],n>=65536&&(r+=e[s+1])):r+=t||iv(n);return r}(t)+'"';default:throw new Ry("impossible error: invalid scalar style")}}()}function yv(e,t){var r=fv(e)?String(t):"",n="\n"===e[e.length-1];return r+(!n||"\n"!==e[e.length-2]&&"\n"!==e?n?"":"-":"+")+"\n"}function gv(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function vv(e,t){if(""===e||" "===e[0])return e;for(var r,n,s=/ [^ ]/g,i=0,o=0,a=0,l="";r=s.exec(e);)(a=r.index)-i>t&&(n=o>i?o:a,l+="\n"+e.slice(i,n),i=n+1),o=a;return l+="\n",e.length-i>t&&o>i?l+=e.slice(i,o)+"\n"+e.slice(o+1):l+=e.slice(i),l.slice(1)}function bv(e,t,r,n){var s,i,o,a="",l=e.tag;for(s=0,i=r.length;s<i;s+=1)o=r[s],e.replacer&&(o=e.replacer.call(r,String(s),o)),(wv(e,t+1,o,!0,!0,!1,!0)||void 0===o&&wv(e,t+1,null,!0,!0,!1,!0))&&(n&&""===a||(a+=lv(e,t)),e.dump&&10===e.dump.charCodeAt(0)?a+="-":a+="- ",a+=e.dump);e.tag=l,e.dump=a||"[]"}function xv(e,t,r){var n,s,i,o,a,l;for(i=0,o=(s=r?e.explicitTypes:e.implicitTypes).length;i<o;i+=1)if(((a=s[i]).instanceOf||a.predicate)&&(!a.instanceOf||"object"==typeof t&&t instanceof a.instanceOf)&&(!a.predicate||a.predicate(t))){if(r?a.multi&&a.representName?e.tag=a.representName(t):e.tag=a.tag:e.tag="?",a.represent){if(l=e.styleMap[a.tag]||a.defaultStyle,"[object Function]"===ev.call(a.represent))n=a.represent(t,l);else{if(!tv.call(a.represent,l))throw new Ry("!<"+a.tag+'> tag resolver accepts not "'+l+'" style');n=a.represent[l](t,l)}e.dump=n}return!0}return!1}function wv(e,t,r,n,s,i,o){e.tag=null,e.dump=r,xv(e,r,!1)||xv(e,r,!0);var a,l=ev.call(e.dump),c=n;n&&(n=e.flowLevel<0||e.flowLevel>t);var p,u,d="[object Object]"===l||"[object Array]"===l;if(d&&(u=-1!==(p=e.duplicates.indexOf(r))),(null!==e.tag&&"?"!==e.tag||u||2!==e.indent&&t>0)&&(s=!1),u&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&u&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),"[object Object]"===l)n&&0!==Object.keys(e.dump).length?(function(e,t,r,n){var s,i,o,a,l,c,p="",u=e.tag,d=Object.keys(r);if(!0===e.sortKeys)d.sort();else if("function"==typeof e.sortKeys)d.sort(e.sortKeys);else if(e.sortKeys)throw new Ry("sortKeys must be a boolean or a function");for(s=0,i=d.length;s<i;s+=1)c="",n&&""===p||(c+=lv(e,t)),a=r[o=d[s]],e.replacer&&(a=e.replacer.call(r,o,a)),wv(e,t+1,o,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?c+="?":c+="? "),c+=e.dump,l&&(c+=lv(e,t)),wv(e,t+1,a,!0,l)&&(e.dump&&10===e.dump.charCodeAt(0)?c+=":":c+=": ",p+=c+=e.dump));e.tag=u,e.dump=p||"{}"}(e,t,e.dump,s),u&&(e.dump="&ref_"+p+e.dump)):(function(e,t,r){var n,s,i,o,a,l="",c=e.tag,p=Object.keys(r);for(n=0,s=p.length;n<s;n+=1)a="",""!==l&&(a+=", "),e.condenseFlow&&(a+='"'),o=r[i=p[n]],e.replacer&&(o=e.replacer.call(r,i,o)),wv(e,t,i,!1,!1)&&(e.dump.length>1024&&(a+="? "),a+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),wv(e,t,o,!1,!1)&&(l+=a+=e.dump));e.tag=c,e.dump="{"+l+"}"}(e,t,e.dump),u&&(e.dump="&ref_"+p+" "+e.dump));else if("[object Array]"===l)n&&0!==e.dump.length?(e.noArrayIndent&&!o&&t>0?bv(e,t-1,e.dump,s):bv(e,t,e.dump,s),u&&(e.dump="&ref_"+p+e.dump)):(function(e,t,r){var n,s,i,o="",a=e.tag;for(n=0,s=r.length;n<s;n+=1)i=r[n],e.replacer&&(i=e.replacer.call(r,String(n),i)),(wv(e,t,i,!1,!1)||void 0===i&&wv(e,t,null,!1,!1))&&(""!==o&&(o+=","+(e.condenseFlow?"":" ")),o+=e.dump);e.tag=a,e.dump="["+o+"]"}(e,t,e.dump),u&&(e.dump="&ref_"+p+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(e.skipInvalid)return!1;throw new Ry("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&mv(e,e.dump,t,i,c)}null!==e.tag&&"?"!==e.tag&&(a=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),a="!"===e.tag[0]?"!"+a:"tag:yaml.org,2002:"===a.slice(0,18)?"!!"+a.slice(18):"!<"+a+">",e.dump=a+" "+e.dump)}return!0}function $v(e,t){var r,n,s=[],i=[];for(Sv(e,s,i),r=0,n=i.length;r<n;r+=1)t.duplicates.push(s[i[r]]);t.usedDuplicates=new Array(n)}function Sv(e,t,r){var n,s,i;if(null!==e&&"object"==typeof e)if(-1!==(s=t.indexOf(e)))-1===r.indexOf(s)&&r.push(s);else if(t.push(e),Array.isArray(e))for(s=0,i=e.length;s<i;s+=1)Sv(e[s],t,r);else for(s=0,i=(n=Object.keys(e)).length;s<i;s+=1)Sv(e[n[s]],t,r)}function Ev(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var kv=Ly,Ov=Uy,jv=Wy,Av=tg,Pv=rg,Tv=yg,Cv=Qg,Iv=Xg,Rv=function(e,t){var r=new ov(t=t||{});r.noRefs||$v(e,r);var n=e;return r.replacer&&(n=r.replacer.call({"":n},"",n)),wv(r,0,n,!0,!0)?r.dump+"\n":""},_v=Ry,Fv={binary:lg,float:eg,map:Vy,null:Gy,pairs:hg,set:mg,timestamp:ig,bool:Jy,int:Yy,merge:og,omap:ug,seq:Hy,str:zy},Dv=Ev("safeLoad","load"),Mv=Ev("safeLoadAll","loadAll"),qv=Ev("safeDump","dump"),Lv={Type:kv,Schema:Ov,FAILSAFE_SCHEMA:jv,JSON_SCHEMA:Av,CORE_SCHEMA:Pv,DEFAULT_SCHEMA:Tv,load:Cv,loadAll:Iv,dump:Rv,YAMLException:_v,types:Fv,safeLoad:Dv,safeLoadAll:Mv,safeDump:qv};const Bv="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window,{FormData:Nv,Blob:Uv,File:zv}=Bv,Hv=e=>":/?#[]@!$&'()*+,;=".indexOf(e)>-1,Vv=e=>/^[a-z0-9\-._~]+$/i.test(e);function Wv(e){let{escape:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;return"number"==typeof e&&(e=e.toString()),"string"==typeof e&&e.length&&t?r?JSON.parse(e):[...e].map((e=>{if(Vv(e))return e;if(Hv(e)&&"unsafe"===t)return e;const r=new TextEncoder;return Array.from(r.encode(e)).map((e=>`0${e.toString(16).toUpperCase()}`.slice(-2))).map((e=>`%${e}`)).join("")})).join(""):e}function Gv(e){const{value:t}=e;return Array.isArray(t)?function(e){let{key:t,value:r,style:n,explode:s,escape:i}=e;const o=e=>Wv(e,{escape:i});if("simple"===n)return r.map((e=>o(e))).join(",");if("label"===n)return`.${r.map((e=>o(e))).join(".")}`;if("matrix"===n)return r.map((e=>o(e))).reduce(((e,r)=>!e||s?`${e||""};${t}=${r}`:`${e},${r}`),"");if("form"===n){const e=s?`&${t}=`:",";return r.map((e=>o(e))).join(e)}if("spaceDelimited"===n){const e=s?`${t}=`:"";return r.map((e=>o(e))).join(` ${e}`)}if("pipeDelimited"===n){const e=s?`${t}=`:"";return r.map((e=>o(e))).join(`|${e}`)}}(e):"object"==typeof t?function(e){let{key:t,value:r,style:n,explode:s,escape:i}=e;const o=e=>Wv(e,{escape:i}),a=Object.keys(r);return"simple"===n?a.reduce(((e,t)=>{const n=o(r[t]);return`${e?`${e},`:""}${t}${s?"=":","}${n}`}),""):"label"===n?a.reduce(((e,t)=>{const n=o(r[t]);return`${e?`${e}.`:"."}${t}${s?"=":"."}${n}`}),""):"matrix"===n&&s?a.reduce(((e,t)=>`${e?`${e};`:";"}${t}=${o(r[t])}`),""):"matrix"===n?a.reduce(((e,n)=>{const s=o(r[n]);return`${e?`${e},`:`;${t}=`}${n},${s}`}),""):"form"===n?a.reduce(((e,t)=>{const n=o(r[t]);return`${e?`${e}${s?"&":","}`:""}${t}${s?"=":","}${n}`}),""):void 0}(e):function(e){let{key:t,value:r,style:n,escape:s}=e;const i=e=>Wv(e,{escape:s});return"simple"===n?i(r):"label"===n?`.${i(r)}`:"matrix"===n?`;${t}=${i(r)}`:"form"===n||"deepObject"===n?i(r):void 0}(e)}const Jv=(e,t)=>{t.body=e},Kv={serializeRes:Xv,mergeInQueryOrForm:ab};async function Zv(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"==typeof e&&(t=e,e=t.url),t.headers=t.headers||{},Kv.mergeInQueryOrForm(t),t.headers&&Object.keys(t.headers).forEach((e=>{const r=t.headers[e];"string"==typeof r&&(t.headers[e]=r.replace(/\n+/g," "))})),t.requestInterceptor&&(t=await t.requestInterceptor(t)||t);const r=t.headers["content-type"]||t.headers["Content-Type"];let n;/multipart\/form-data/i.test(r)&&t.body instanceof Nv&&(delete t.headers["content-type"],delete t.headers["Content-Type"]);try{n=await(t.userFetch||fetch)(t.url,t),n=await Kv.serializeRes(n,e,t),t.responseInterceptor&&(n=await t.responseInterceptor(n)||n)}catch(e){if(!n)throw e;const t=new Error(n.statusText||`response status is ${n.status}`);throw t.status=n.status,t.statusCode=n.status,t.responseError=e,t}if(!n.ok){const e=new Error(n.statusText||`response status is ${n.status}`);throw e.status=n.status,e.statusCode=n.status,e.response=n,e}return n}const Yv=function(){return/(json|xml|yaml|text)\b/.test(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")};function Xv(e,t){let{loadSpec:r=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n={ok:e.ok,url:e.url||t,status:e.status,statusText:e.statusText,headers:Qv(e.headers)},s=n.headers["content-type"],i=r||Yv(s);return(i?e.text:e.blob||e.buffer).call(e).then((e=>{if(n.text=e,n.data=e,i)try{const t=function(e,t){return t&&(0===t.indexOf("application/json")||t.indexOf("+json")>0)?JSON.parse(e):Lv.load(e)}(e,s);n.body=t,n.obj=t}catch(e){n.parseError=e}return n}))}function Qv(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"function"!=typeof e.entries?{}:Array.from(e.entries()).reduce(((e,t)=>{let[r,n]=t;return e[r]=function(e){return e.includes(", ")?e.split(", "):e}(n),e}),{})}function eb(e,t){return t||"undefined"==typeof navigator||(t=navigator),t&&"ReactNative"===t.product?!(!e||"object"!=typeof e||"string"!=typeof e.uri):void 0!==zv&&e instanceof zv||void 0!==Uv&&e instanceof Uv||!!ArrayBuffer.isView(e)||null!==e&&"object"==typeof e&&"function"==typeof e.pipe}function tb(e,t){return Array.isArray(e)&&e.some((e=>eb(e,t)))}const rb={form:",",spaceDelimited:"%20",pipeDelimited:"|"},nb={csv:",",ssv:"%20",tsv:"%09",pipes:"|"};function sb(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{collectionFormat:n,allowEmptyValue:s,serializationOption:i,encoding:o}=t,a="object"!=typeof t||Array.isArray(t)?t:t.value,l=r?e=>e.toString():e=>encodeURIComponent(e),c=l(e);if(void 0===a&&s)return[[c,""]];if(eb(a)||tb(a))return[[c,a]];if(i)return ib(e,a,r,i);if(o){if([typeof o.style,typeof o.explode,typeof o.allowReserved].some((e=>"undefined"!==e))){const{style:t,explode:n,allowReserved:s}=o;return ib(e,a,r,{style:t,explode:n,allowReserved:s})}return o.contentType?"application/json"===o.contentType?[[c,l("string"==typeof a?a:JSON.stringify(a))]]:[[c,l(a.toString())]]:"object"!=typeof a?[[c,l(a)]]:Array.isArray(a)&&a.every((e=>"object"!=typeof e))?[[c,a.map(l).join(",")]]:[[c,l(JSON.stringify(a))]]}return"object"!=typeof a?[[c,l(a)]]:Array.isArray(a)?"multi"===n?[[c,a.map(l)]]:[[c,a.map(l).join(nb[n||"csv"])]]:[[c,""]]}function ib(e,t,r,n){const s=n.style||"form",i=void 0===n.explode?"form"===s:n.explode,o=!r&&(n&&n.allowReserved?"unsafe":"reserved"),a=e=>Wv(e,{escape:o}),l=r?e=>e:e=>Wv(e,{escape:o});return"object"!=typeof t?[[l(e),a(t)]]:Array.isArray(t)?i?[[l(e),t.map(a)]]:[[l(e),t.map(a).join(rb[s])]]:"deepObject"===s?Object.keys(t).map((r=>[l(`${e}[${r}]`),a(t[r])])):i?Object.keys(t).map((e=>[l(e),a(t[e])])):[[l(e),Object.keys(t).map((e=>[`${l(e)},${a(t[e])}`])).join(",")]]}function ob(e){const t=Object.keys(e).reduce(((t,r)=>{for(const[n,s]of sb(r,e[r]))t[n]=s;return t}),{});return Ay.stringify(t,{encode:!1,indices:!1})||""}function ab(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{url:t="",query:r,form:n}=e;if(n){const t=Object.keys(n).some((e=>{const{value:t}=n[e];return eb(t)||tb(t)})),r=e.headers["content-type"]||e.headers["Content-Type"];if(t||/multipart\/form-data/i.test(r)){const t=function(e){return Object.entries(e).reduce(((e,t)=>{let[r,n]=t;for(const[t,s]of sb(r,n,!0))if(Array.isArray(s))for(const r of s)if(ArrayBuffer.isView(r)){const n=new Uv([r]);e.append(t,n)}else e.append(t,r);else if(ArrayBuffer.isView(s)){const r=new Uv([s]);e.append(t,r)}else e.append(t,s);return e}),new Nv)}(e.form);Jv(t,e)}else e.body=ob(n);delete e.form}if(r){const[n,s]=t.split("?");let i="";if(s){const e=Ay.parse(s);Object.keys(r).forEach((t=>delete e[t])),i=Ay.stringify(e,{encode:!0})}const o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const n=t.filter((e=>e)).join("&");return n?`?${n}`:""}(i,ob(r));e.url=n+o,delete e.query}return e}function lb(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{requestInterceptor:r,responseInterceptor:n}=t,s=e.withCredentials?"include":"same-origin";return t=>e({url:t,loadSpec:!0,requestInterceptor:r,responseInterceptor:n,headers:{Accept:"application/json, application/yaml"},credentials:s}).then((e=>e.body))}const cb=e=>{const{baseDoc:t,url:r}=e;return t||r||""},pb=e=>{const{fetch:t,http:r}=e;return t||r||Zv};var ub,db=globalThis&&globalThis.__extends||(ub=function(e,t){return ub=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},ub(e,t)},function(e,t){function r(){this.constructor=e}ub(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),hb=Object.prototype.hasOwnProperty;function fb(e,t){return hb.call(e,t)}function mb(e){if(Array.isArray(e)){for(var t=new Array(e.length),r=0;r<t.length;r++)t[r]=""+r;return t}if(Object.keys)return Object.keys(e);var n=[];for(var s in e)fb(e,s)&&n.push(s);return n}function yb(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}}function gb(e){for(var t,r=0,n=e.length;r<n;){if(!((t=e.charCodeAt(r))>=48&&t<=57))return!1;r++}return!0}function vb(e){return-1===e.indexOf("/")&&-1===e.indexOf("~")?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function bb(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function xb(e){if(void 0===e)return!0;if(e)if(Array.isArray(e)){for(var t=0,r=e.length;t<r;t++)if(xb(e[t]))return!0}else if("object"==typeof e)for(var n=mb(e),s=n.length,i=0;i<s;i++)if(xb(e[n[i]]))return!0;return!1}function wb(e,t){var r=[e];for(var n in t){var s="object"==typeof t[n]?JSON.stringify(t[n],null,2):t[n];void 0!==s&&r.push(n+": "+s)}return r.join("\n")}var $b=function(e){function t(t,r,n,s,i){var o=this.constructor,a=e.call(this,wb(t,{name:r,index:n,operation:s,tree:i}))||this;return a.name=r,a.index=n,a.operation=s,a.tree=i,Object.setPrototypeOf(a,o.prototype),a.message=wb(t,{name:r,index:n,operation:s,tree:i}),a}return db(t,e),t}(Error),Sb=$b,Eb=yb,kb={add:function(e,t,r){return e[t]=this.value,{newDocument:r}},remove:function(e,t,r){var n=e[t];return delete e[t],{newDocument:r,removed:n}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:function(e,t,r){var n=jb(r,this.path);n&&(n=yb(n));var s=Ab(r,{op:"remove",path:this.from}).removed;return Ab(r,{op:"add",path:this.path,value:s}),{newDocument:r,removed:n}},copy:function(e,t,r){var n=jb(r,this.from);return Ab(r,{op:"add",path:this.path,value:yb(n)}),{newDocument:r}},test:function(e,t,r){return{newDocument:r,test:Ib(e[t],this.value)}},_get:function(e,t,r){return this.value=e[t],{newDocument:r}}},Ob={add:function(e,t,r){return gb(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:r,index:t}},remove:function(e,t,r){return{newDocument:r,removed:e.splice(t,1)[0]}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:kb.move,copy:kb.copy,test:kb.test,_get:kb._get};function jb(e,t){if(""==t)return e;var r={op:"_get",path:t};return Ab(e,r),r.value}function Ab(e,t,r,n,s,i){if(void 0===r&&(r=!1),void 0===n&&(n=!0),void 0===s&&(s=!0),void 0===i&&(i=0),r&&("function"==typeof r?r(t,0,e,t.path):Tb(t,0)),""===t.path){var o={newDocument:e};if("add"===t.op)return o.newDocument=t.value,o;if("replace"===t.op)return o.newDocument=t.value,o.removed=e,o;if("move"===t.op||"copy"===t.op)return o.newDocument=jb(e,t.from),"move"===t.op&&(o.removed=e),o;if("test"===t.op){if(o.test=Ib(e,t.value),!1===o.test)throw new Sb("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return o.newDocument=e,o}if("remove"===t.op)return o.removed=e,o.newDocument=null,o;if("_get"===t.op)return t.value=e,o;if(r)throw new Sb("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,t,e);return o}n||(e=yb(e));var a=(t.path||"").split("/"),l=e,c=1,p=a.length,u=void 0,d=void 0,h=void 0;for(h="function"==typeof r?r:Tb;;){if((d=a[c])&&-1!=d.indexOf("~")&&(d=bb(d)),s&&("__proto__"==d||"prototype"==d&&c>0&&"constructor"==a[c-1]))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(r&&void 0===u&&(void 0===l[d]?u=a.slice(0,c).join("/"):c==p-1&&(u=t.path),void 0!==u&&h(t,0,e,u)),c++,Array.isArray(l)){if("-"===d)d=l.length;else{if(r&&!gb(d))throw new Sb("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,t,e);gb(d)&&(d=~~d)}if(c>=p){if(r&&"add"===t.op&&d>l.length)throw new Sb("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,t,e);if(!1===(o=Ob[t.op].call(t,l,d,e)).test)throw new Sb("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return o}}else if(c>=p){if(!1===(o=kb[t.op].call(t,l,d,e)).test)throw new Sb("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return o}if(l=l[d],r&&c<p&&(!l||"object"!=typeof l))throw new Sb("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,t,e)}}function Pb(e,t,r,n,s){if(void 0===n&&(n=!0),void 0===s&&(s=!0),r&&!Array.isArray(t))throw new Sb("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");n||(e=yb(e));for(var i=new Array(t.length),o=0,a=t.length;o<a;o++)i[o]=Ab(e,t[o],r,!0,s,o),e=i[o].newDocument;return i.newDocument=e,i}function Tb(e,t,r,n){if("object"!=typeof e||null===e||Array.isArray(e))throw new Sb("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,r);if(!kb[e.op])throw new Sb("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,r);if("string"!=typeof e.path)throw new Sb("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,r);if(0!==e.path.indexOf("/")&&e.path.length>0)throw new Sb('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,r);if(("move"===e.op||"copy"===e.op)&&"string"!=typeof e.from)throw new Sb("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,r);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&void 0===e.value)throw new Sb("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,r);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&xb(e.value))throw new Sb("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,r);if(r)if("add"==e.op){var s=e.path.split("/").length,i=n.split("/").length;if(s!==i+1&&s!==i)throw new Sb("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,r)}else if("replace"===e.op||"remove"===e.op||"_get"===e.op){if(e.path!==n)throw new Sb("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,r)}else if("move"===e.op||"copy"===e.op){var o=Cb([{op:"_get",path:e.from,value:void 0}],r);if(o&&"OPERATION_PATH_UNRESOLVABLE"===o.name)throw new Sb("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,r)}}function Cb(e,t,r){try{if(!Array.isArray(e))throw new Sb("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(t)Pb(yb(t),yb(e),r||!0);else{r=r||Tb;for(var n=0;n<e.length;n++)r(e[n],n,t,void 0)}}catch(e){if(e instanceof Sb)return e;throw e}}function Ib(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var r,n,s,i=Array.isArray(e),o=Array.isArray(t);if(i&&o){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!Ib(e[r],t[r]))return!1;return!0}if(i!=o)return!1;var a=Object.keys(e);if((n=a.length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!t.hasOwnProperty(a[r]))return!1;for(r=n;0!=r--;)if(!Ib(e[s=a[r]],t[s]))return!1;return!0}return e!=e&&t!=t}const Rb=Object.freeze(Object.defineProperty({__proto__:null,JsonPatchError:Sb,_areEquals:Ib,applyOperation:Ab,applyPatch:Pb,applyReducer:function(e,t,r){var n=Ab(e,t);if(!1===n.test)throw new Sb("Test operation failed","TEST_OPERATION_FAILED",r,t,e);return n.newDocument},deepClone:Eb,getValueByPointer:jb,validate:Cb,validator:Tb},Symbol.toStringTag,{value:"Module"}));var _b=new WeakMap,Fb=function(e){this.observers=new Map,this.obj=e},Db=function(e,t){this.callback=e,this.observer=t};function Mb(e,t){void 0===t&&(t=!1);var r=_b.get(e.object);qb(r.value,e.object,e.patches,"",t),e.patches.length&&Pb(r.value,e.patches);var n=e.patches;return n.length>0&&(e.patches=[],e.callback&&e.callback(n)),n}function qb(e,t,r,n,s){if(t!==e){"function"==typeof t.toJSON&&(t=t.toJSON());for(var i=mb(t),o=mb(e),a=!1,l=o.length-1;l>=0;l--){var c=e[u=o[l]];if(!fb(t,u)||void 0===t[u]&&void 0!==c&&!1===Array.isArray(t))Array.isArray(e)===Array.isArray(t)?(s&&r.push({op:"test",path:n+"/"+vb(u),value:yb(c)}),r.push({op:"remove",path:n+"/"+vb(u)}),a=!0):(s&&r.push({op:"test",path:n,value:e}),r.push({op:"replace",path:n,value:t}));else{var p=t[u];"object"==typeof c&&null!=c&&"object"==typeof p&&null!=p&&Array.isArray(c)===Array.isArray(p)?qb(c,p,r,n+"/"+vb(u),s):c!==p&&(s&&r.push({op:"test",path:n+"/"+vb(u),value:yb(c)}),r.push({op:"replace",path:n+"/"+vb(u),value:yb(p)}))}}if(a||i.length!=o.length)for(l=0;l<i.length;l++){var u;fb(e,u=i[l])||void 0===t[u]||r.push({op:"add",path:n+"/"+vb(u),value:yb(t[u])})}}}const Lb=Object.freeze(Object.defineProperty({__proto__:null,compare:function(e,t,r){void 0===r&&(r=!1);var n=[];return qb(e,t,n,"",r),n},generate:Mb,observe:function(e,t){var r,n=function(e){return _b.get(e)}(e);if(n){var s=function(e,t){return e.observers.get(t)}(n,t);r=s&&s.observer}else n=new Fb(e),_b.set(e,n);if(r)return r;if(r={},n.value=yb(e),t){r.callback=t,r.next=null;var i=function(){Mb(r)},o=function(){clearTimeout(r.next),r.next=setTimeout(i)};"undefined"!=typeof window&&(window.addEventListener("mouseup",o),window.addEventListener("keyup",o),window.addEventListener("mousedown",o),window.addEventListener("keydown",o),window.addEventListener("change",o))}return r.patches=[],r.object=e,r.unobserve=function(){Mb(r),clearTimeout(r.next),function(e,t){e.observers.delete(t.callback)}(n,r),"undefined"!=typeof window&&(window.removeEventListener("mouseup",o),window.removeEventListener("keyup",o),window.removeEventListener("mousedown",o),window.removeEventListener("keydown",o),window.removeEventListener("change",o))},n.observers.set(t,new Db(t,r)),r},unobserve:function(e,t){t.unobserve()}},Symbol.toStringTag,{value:"Module"}));Object.assign({},Rb,Lb,{JsonPatchError:$b,deepClone:yb,escapePathComponent:vb,unescapePathComponent:bb});var Bb=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===Nb}(e)}(e)},Nb="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Ub(e,t){return!1!==t.clone&&t.isMergeableObject(e)?Wb((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function zb(e,t,r){return e.concat(t).map((function(e){return Ub(e,r)}))}function Hb(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function Vb(e,t){try{return t in e}catch(e){return!1}}function Wb(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||zb,r.isMergeableObject=r.isMergeableObject||Bb,r.cloneUnlessOtherwiseSpecified=Ub;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):function(e,t,r){var n={};return r.isMergeableObject(e)&&Hb(e).forEach((function(t){n[t]=Ub(e[t],r)})),Hb(t).forEach((function(s){(function(e,t){return Vb(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,s)||(Vb(e,s)&&r.isMergeableObject(t[s])?n[s]=function(e,t){if(!t.customMerge)return Wb;var r=t.customMerge(e);return"function"==typeof r?r:Wb}(s,r)(e[s],t[s],r):n[s]=Ub(t[s],r))})),n}(e,t,r):Ub(t,r)}Wb.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return Wb(e,r,t)}),{})};const Gb=_t(Wb),Jb={add:function(e,t){return{op:"add",path:e,value:t}},replace:Zb,remove:function(e){return{op:"remove",path:e}},merge:function(e,t){return{type:"mutation",op:"merge",path:e,value:t}},mergeDeep:function(e,t){return{type:"mutation",op:"mergeDeep",path:e,value:t}},context:function(e,t){return{type:"context",path:e,value:t}},getIn:function(e,t){return t.reduce(((e,t)=>void 0!==t&&e?e[t]:e),e)},applyPatch:function(e,t,r){if(r=r||{},"merge"===(t=Fh(Fh({},t),{},{path:t.path&&Kb(t.path)})).op){const r=cx(e,t.path);Object.assign(r,t.value),Pb(e,[Zb(t.path,r)])}else if("mergeDeep"===t.op){const r=cx(e,t.path),n=Gb(r,t.value);e=Pb(e,[Zb(t.path,n)]).newDocument}else if("add"===t.op&&""===t.path&&nx(t.value)){const r=Object.keys(t.value).reduce(((e,r)=>(e.push({op:"add",path:`/${Kb(r)}`,value:t.value[r]}),e)),[]);Pb(e,r)}else if("replace"===t.op&&""===t.path){let{value:n}=t;r.allowMetaPatches&&t.meta&&ax(t)&&(Array.isArray(t.value)||nx(t.value))&&(n=Fh(Fh({},n),t.meta)),e=n}else if(Pb(e,[t]),r.allowMetaPatches&&t.meta&&ax(t)&&(Array.isArray(t.value)||nx(t.value))){const r=Fh(Fh({},cx(e,t.path)),t.meta);Pb(e,[Zb(t.path,r)])}return e},parentPathMatch:function(e,t){if(!Array.isArray(t))return!1;for(let r=0,n=t.length;r<n;r+=1)if(t[r]!==e[r])return!1;return!0},flatten:tx,fullyNormalizeArray:function(e){return rx(tx(ex(e)))},normalizeArray:ex,isPromise:function(e){return nx(e)&&sx(e.then)},forEachNew:function(e,t){try{return Yb(e,Qb,t)}catch(e){return e}},forEachNewPrimitive:function(e,t){try{return Yb(e,Xb,t)}catch(e){return e}},isJsonPatch:ix,isContextPatch:function(e){return lx(e)&&"context"===e.type},isPatch:lx,isMutation:ox,isAdditiveMutation:ax,isGenerator:function(e){return"[object GeneratorFunction]"===Object.prototype.toString.call(e)},isFunction:sx,isObject:nx,isError:function(e){return e instanceof Error}};function Kb(e){return Array.isArray(e)?e.length<1?"":`/${e.map((e=>(e+"").replace(/~/g,"~0").replace(/\//g,"~1"))).join("/")}`:e}function Zb(e,t,r){return{op:"replace",path:e,value:t,meta:r}}function Yb(e,t,r){return rx(tx(e.filter(ax).map((e=>t(e.value,r,e.path)))||[]))}function Xb(e,t,r){return r=r||[],Array.isArray(e)?e.map(((e,n)=>Xb(e,t,r.concat(n)))):nx(e)?Object.keys(e).map((n=>Xb(e[n],t,r.concat(n)))):t(e,r[r.length-1],r)}function Qb(e,t,r){let n=[];if((r=r||[]).length>0){const s=t(e,r[r.length-1],r);s&&(n=n.concat(s))}if(Array.isArray(e)){const s=e.map(((e,n)=>Qb(e,t,r.concat(n))));s&&(n=n.concat(s))}else if(nx(e)){const s=Object.keys(e).map((n=>Qb(e[n],t,r.concat(n))));s&&(n=n.concat(s))}return n=tx(n),n}function ex(e){return Array.isArray(e)?e:[e]}function tx(e){return[].concat(...e.map((e=>Array.isArray(e)?tx(e):e)))}function rx(e){return e.filter((e=>void 0!==e))}function nx(e){return e&&"object"==typeof e}function sx(e){return e&&"function"==typeof e}function ix(e){if(lx(e)){const{op:t}=e;return"add"===t||"remove"===t||"replace"===t}return!1}function ox(e){return ix(e)||lx(e)&&"mutation"===e.type}function ax(e){return ox(e)&&("add"===e.op||"replace"===e.op||"merge"===e.op||"mergeDeep"===e.op)}function lx(e){return e&&"object"==typeof e}function cx(e,t){try{return jb(e,t)}catch(e){return console.error(e),{}}}function px(e,t){function r(){Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack;for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];[this.message]=r,t&&t.apply(this,r)}return r.prototype=new Error,r.prototype.name=e,r.prototype.constructor=r,r}var ux={exports:{}},dx=ux.exports=function(e){return new hx(e)};function hx(e){this.value=e}function fx(e,t,r){var n=[],s=[],i=!0;return function e(o){var a=r?mx(o):o,l={},c=!0,p={node:a,node_:o,path:[].concat(n),parent:s[s.length-1],parents:s,key:n.slice(-1)[0],isRoot:0===n.length,level:n.length,circular:null,update:function(e,t){p.isRoot||(p.parent.node[p.key]=e),p.node=e,t&&(c=!1)},delete:function(e){delete p.parent.node[p.key],e&&(c=!1)},remove:function(e){vx(p.parent.node)?p.parent.node.splice(p.key,1):delete p.parent.node[p.key],e&&(c=!1)},keys:null,before:function(e){l.before=e},after:function(e){l.after=e},pre:function(e){l.pre=e},post:function(e){l.post=e},stop:function(){i=!1},block:function(){c=!1}};if(!i)return p;function u(){if("object"==typeof p.node&&null!==p.node){p.keys&&p.node_===p.node||(p.keys=yx(p.node)),p.isLeaf=0==p.keys.length;for(var e=0;e<s.length;e++)if(s[e].node_===o){p.circular=s[e];break}}else p.isLeaf=!0,p.keys=null;p.notLeaf=!p.isLeaf,p.notRoot=!p.isRoot}u();var d=t.call(p,p.node);return void 0!==d&&p.update&&p.update(d),l.before&&l.before.call(p,p.node),c?("object"!=typeof p.node||null===p.node||p.circular||(s.push(p),u(),bx(p.keys,(function(t,s){n.push(t),l.pre&&l.pre.call(p,p.node[t],t);var i=e(p.node[t]);r&&xx.call(p.node,t)&&(p.node[t]=i.node),i.isLast=s==p.keys.length-1,i.isFirst=0==s,l.post&&l.post.call(p,i),n.pop()})),s.pop()),l.after&&l.after.call(p,p.node),p):p}(e).node}function mx(e){if("object"==typeof e&&null!==e){var t;if(vx(e))t=[];else if("[object Date]"===gx(e))t=new Date(e.getTime?e.getTime():e);else if(function(e){return"[object RegExp]"===gx(e)}(e))t=new RegExp(e);else if(function(e){return"[object Error]"===gx(e)}(e))t={message:e.message};else if(function(e){return"[object Boolean]"===gx(e)}(e))t=new Boolean(e);else if(function(e){return"[object Number]"===gx(e)}(e))t=new Number(e);else if(function(e){return"[object String]"===gx(e)}(e))t=new String(e);else if(Object.create&&Object.getPrototypeOf)t=Object.create(Object.getPrototypeOf(e));else if(e.constructor===Object)t={};else{var r=e.constructor&&e.constructor.prototype||e.__proto__||{},n=function(){};n.prototype=r,t=new n}return bx(yx(e),(function(r){t[r]=e[r]})),t}return e}hx.prototype.get=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!xx.call(t,n)){t=void 0;break}t=t[n]}return t},hx.prototype.has=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!xx.call(t,n))return!1;t=t[n]}return!0},hx.prototype.set=function(e,t){for(var r=this.value,n=0;n<e.length-1;n++){var s=e[n];xx.call(r,s)||(r[s]={}),r=r[s]}return r[e[n]]=t,t},hx.prototype.map=function(e){return fx(this.value,e,!0)},hx.prototype.forEach=function(e){return this.value=fx(this.value,e,!1),this.value},hx.prototype.reduce=function(e,t){var r=1===arguments.length,n=r?this.value:t;return this.forEach((function(t){this.isRoot&&r||(n=e.call(this,n,t))})),n},hx.prototype.paths=function(){var e=[];return this.forEach((function(t){e.push(this.path)})),e},hx.prototype.nodes=function(){var e=[];return this.forEach((function(t){e.push(this.node)})),e},hx.prototype.clone=function(){var e=[],t=[];return function r(n){for(var s=0;s<e.length;s++)if(e[s]===n)return t[s];if("object"==typeof n&&null!==n){var i=mx(n);return e.push(n),t.push(i),bx(yx(n),(function(e){i[e]=r(n[e])})),e.pop(),t.pop(),i}return n}(this.value)};var yx=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};function gx(e){return Object.prototype.toString.call(e)}var vx=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},bx=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)};bx(yx(hx.prototype),(function(e){dx[e]=function(t){var r=[].slice.call(arguments,1),n=new hx(t);return n[e].apply(n,r)}}));var xx=Object.hasOwnProperty||function(e,t){return t in e};const wx=_t(ux.exports),$x=["properties"],Sx=["properties"],Ex=["definitions","parameters","responses","securityDefinitions","components/schemas","components/responses","components/parameters","components/securitySchemes"],kx=["schema/example","items/example"];function Ox(e){const t=e[e.length-1],r=e[e.length-2],n=e.join("/");return $x.indexOf(t)>-1&&-1===Sx.indexOf(r)||Ex.indexOf(n)>-1||kx.some((e=>n.indexOf(e)>-1))}function jx(e,t){const[r,n]=e.split("#"),s=Dh.resolve(r||"",t||"");return n?`${s}#${n}`:s}const Ax=/^([a-z]+:\/\/|\/\/)/i,Px=px("JSONRefError",(function(e,t,r){this.originalError=r,Object.assign(this,t||{})})),Tx={},Cx=new WeakMap,Ix=[e=>"paths"===e[0]&&"responses"===e[3]&&"examples"===e[5],e=>"paths"===e[0]&&"responses"===e[3]&&"content"===e[5]&&"example"===e[7],e=>"paths"===e[0]&&"responses"===e[3]&&"content"===e[5]&&"examples"===e[7]&&"value"===e[9],e=>"paths"===e[0]&&"requestBody"===e[3]&&"content"===e[4]&&"example"===e[6],e=>"paths"===e[0]&&"requestBody"===e[3]&&"content"===e[4]&&"examples"===e[6]&&"value"===e[8],e=>"paths"===e[0]&&"parameters"===e[2]&&"example"===e[4],e=>"paths"===e[0]&&"parameters"===e[3]&&"example"===e[5],e=>"paths"===e[0]&&"parameters"===e[2]&&"examples"===e[4]&&"value"===e[6],e=>"paths"===e[0]&&"parameters"===e[3]&&"examples"===e[5]&&"value"===e[7],e=>"paths"===e[0]&&"parameters"===e[2]&&"content"===e[4]&&"example"===e[6],e=>"paths"===e[0]&&"parameters"===e[2]&&"content"===e[4]&&"examples"===e[6]&&"value"===e[8],e=>"paths"===e[0]&&"parameters"===e[3]&&"content"===e[4]&&"example"===e[7],e=>"paths"===e[0]&&"parameters"===e[3]&&"content"===e[5]&&"examples"===e[7]&&"value"===e[9]],Rx={key:"$ref",plugin:(e,t,r,n)=>{const s=n.getInstance(),i=r.slice(0,-1);if(Ox(i)||(e=>Ix.some((t=>t(e))))(i))return;const{baseDoc:o}=n.getContext(r);if("string"!=typeof e)return new Px("$ref: must be a string (JSON-Ref)",{$ref:e,baseDoc:o,fullPath:r});const a=Mx(e),l=a[0],c=a[1]||"";let p,u,d;try{p=o||l?Fx(l,o):null}catch(t){return Dx(t,{pointer:c,$ref:e,basePath:p,fullPath:r})}if(function(e,t,r,n){let s=Cx.get(n);s||(s={},Cx.set(n,s));const i=function(e){return 0===e.length?"":`/${e.map(zx).join("/")}`}(r),o=`${t||"<specmap-base>"}#${e}`,a=i.replace(/allOf\/\d+\/?/g,"");if(t===n.contextTree.get([]).baseDoc&&Hx(a,e))return!0;let l="";const c=r.some((e=>(l=`${l}/${zx(e)}`,s[l]&&s[l].some((e=>Hx(e,o)||Hx(o,e))))));if(c)return!0;s[a]=(s[a]||[]).concat(o)}(c,p,i,n)&&!s.useCircularStructures){const t=jx(e,p);return e===t?null:Jb.replace(r,t)}if(null==p?(d=Nx(c),u=n.get(d),void 0===u&&(u=new Px(`Could not resolve reference: ${e}`,{pointer:c,$ref:e,baseDoc:o,fullPath:r}))):(u=qx(p,c),u=null!=u.l?u.l:u.catch((t=>{throw Dx(t,{pointer:c,$ref:e,baseDoc:o,fullPath:r})}))),u instanceof Error)return[Jb.remove(r),u];const h=jx(e,p),f=Jb.replace(i,u,{$$ref:h});if(p&&p!==o)return[f,Jb.context(i,{baseDoc:p})];try{if(!function(e,t){const r=[e];return t.path.reduce(((e,t)=>(r.push(e[t]),e[t])),e),function e(t){return Jb.isObject(t)&&(r.indexOf(t)>=0||Object.keys(t).some((r=>e(t[r]))))}(t.value)}(n.state,f)||s.useCircularStructures)return f}catch(e){return null}}},_x=Object.assign(Rx,{docCache:Tx,absoluteify:Fx,clearCache:function(e){void 0!==e?delete Tx[e]:Object.keys(Tx).forEach((e=>{delete Tx[e]}))},JSONRefError:Px,wrapError:Dx,getDoc:Lx,split:Mx,extractFromDoc:qx,fetchJSON:function(e){return fetch(e,{headers:{Accept:"application/json, application/yaml"},loadSpec:!0}).then((e=>e.text())).then((e=>Lv.load(e)))},extract:Bx,jsonPointerToArray:Nx,unescapeJsonPointerToken:Ux});function Fx(e,t){if(!Ax.test(e)){if(!t)throw new Px(`Tried to resolve a relative URL, without having a basePath. path: '${e}' basePath: '${t}'`);return Dh.resolve(t,e)}return e}function Dx(e,t){let r;return r=e&&e.response&&e.response.body?`${e.response.body.code} ${e.response.body.message}`:e.message,new Px(`Could not resolve reference: ${r}`,t,e)}function Mx(e){return(e+"").split("#")}function qx(e,t){const r=Tx[e];if(r&&!Jb.isPromise(r))try{const e=Bx(t,r);return Object.assign(Promise.resolve(e),{l:e})}catch(e){return Promise.reject(e)}return Lx(e).then((e=>Bx(t,e)))}function Lx(e){const t=Tx[e];return t?Jb.isPromise(t)?t:Promise.resolve(t):(Tx[e]=_x.fetchJSON(e).then((t=>(Tx[e]=t,t))),Tx[e])}function Bx(e,t){const r=Nx(e);if(r.length<1)return t;const n=Jb.getIn(t,r);if(void 0===n)throw new Px(`Could not resolve pointer: ${e} does not exist in document`,{pointer:e});return n}function Nx(e){if("string"!=typeof e)throw new TypeError("Expected a string, got a "+typeof e);return"/"===e[0]&&(e=e.substr(1)),""===e?[]:e.split("/").map(Ux)}function Ux(e){return"string"!=typeof e?e:new URLSearchParams(`=${e.replace(/~1/g,"/").replace(/~0/g,"~")}`).get("")}function zx(e){return new URLSearchParams([["",e.replace(/~/g,"~0").replace(/\//g,"~1")]]).toString().slice(1)}function Hx(e,t){if(!(r=t)||"/"===r||"#"===r)return!0;var r;const n=e.charAt(t.length),s=t.slice(-1);return 0===e.indexOf(t)&&(!n||"/"===n||"#"===n)&&"#"!==s}const Vx={key:"allOf",plugin:(e,t,r,n,s)=>{if(s.meta&&s.meta.$$ref)return;const i=r.slice(0,-1);if(Ox(i))return;if(!Array.isArray(e)){const e=new TypeError("allOf must be an array");return e.fullPath=r,e}let o=!1,a=s.value;if(i.forEach((e=>{a&&(a=a[e])})),a=Fh({},a),0===Object.keys(a).length)return;delete a.allOf;const l=[];return l.push(n.replace(i,{})),e.forEach(((e,t)=>{if(!n.isObject(e)){if(o)return null;o=!0;const e=new TypeError("Elements in allOf must be objects");return e.fullPath=r,l.push(e)}l.push(n.mergeDeep(i,e));const s=function(e,t){let{specmap:r,getBaseUrlForNodePath:n=(e=>r.getContext([...t,...e]).baseDoc),targetKeys:s=["$ref","$$ref"]}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=[];return wx(e).forEach((function(){if(s.includes(this.key)&&"string"==typeof this.node){const e=this.path,s=t.concat(this.path),o=jx(this.node,n(e));i.push(r.replace(s,o))}})),i}(e,r.slice(0,-1),{getBaseUrlForNodePath:e=>n.getContext([...r,t,...e]).baseDoc,specmap:n});l.push(...s)})),a.example&&l.push(n.remove([].concat(i,"example"))),l.push(n.mergeDeep(i,a)),a.$$ref||l.push(n.remove([].concat(i,"$$ref"))),l}},Wx={key:"parameters",plugin:(e,t,r,n)=>{if(Array.isArray(e)&&e.length){const t=Object.assign([],e),s=r.slice(0,-1),i=Fh({},Jb.getIn(n.spec,s));for(let s=0;s<e.length;s+=1){const o=e[s];try{t[s].default=n.parameterMacro(i,o)}catch(e){const t=new Error(e);return t.fullPath=r,t}}return Jb.replace(r,t)}return Jb.replace(r,e)}},Gx={key:"properties",plugin:(e,t,r,n)=>{const s=Fh({},e);for(const t in e)try{s[t].default=n.modelPropertyMacro(s[t])}catch(e){const t=new Error(e);return t.fullPath=r,t}return Jb.replace(r,s)}};class Jx{constructor(e){this.root=Kx(e||{})}set(e,t){const r=this.getParent(e,!0);if(!r)return void Zx(this.root,t,null);const n=e[e.length-1],{children:s}=r;s[n]?Zx(s[n],t,r):s[n]=Kx(t,r)}get(e){if((e=e||[]).length<1)return this.root.value;let t,r,n=this.root;for(let s=0;s<e.length&&(r=e[s],t=n.children,t[r]);s+=1)n=t[r];return n&&n.protoValue}getParent(e,t){return!e||e.length<1?null:e.length<2?this.root:e.slice(0,-1).reduce(((e,r)=>{if(!e)return e;const{children:n}=e;return!n[r]&&t&&(n[r]=Kx(null,e)),n[r]}),this.root)}}function Kx(e,t){return Zx({children:{}},e,t)}function Zx(e,t,r){return e.value=t||{},e.protoValue=r?Fh(Fh({},r.protoValue),e.value):e.value,Object.keys(e.children).forEach((t=>{const r=e.children[t];e.children[t]=Zx(r,r.value,e)})),e}const Yx=()=>{};class Xx{static getPluginName(e){return e.pluginName}static getPatchesOfType(e,t){return e.filter(t)}constructor(e){Object.assign(this,{spec:"",debugLevel:"info",plugins:[],pluginHistory:{},errors:[],mutations:[],promisedPatches:[],state:{},patches:[],context:{},contextTree:new Jx,showDebug:!1,allPatches:[],pluginProp:"specMap",libMethods:Object.assign(Object.create(this),Jb,{getInstance:()=>this}),allowMetaPatches:!1},e),this.get=this._get.bind(this),this.getContext=this._getContext.bind(this),this.hasRun=this._hasRun.bind(this),this.wrappedPlugins=this.plugins.map(this.wrapPlugin.bind(this)).filter(Jb.isFunction),this.patches.push(Jb.add([],this.spec)),this.patches.push(Jb.context([],this.context)),this.updatePatches(this.patches)}debug(e){if(this.debugLevel===e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];console.log(...r)}}verbose(e){if("verbose"===this.debugLevel){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];console.log(`[${e}]   `,...r)}}wrapPlugin(e,t){const{pathDiscriminator:r}=this;let n,s=null;return e[this.pluginProp]?(s=e,n=e[this.pluginProp]):Jb.isFunction(e)?n=e:Jb.isObject(e)&&(n=function(e){const t=(e,t)=>!Array.isArray(e)||e.every(((e,r)=>e===t[r]));return function*(n,s){const i={};for(const e of n.filter(Jb.isAdditiveMutation))yield*o(e.value,e.path,e);function*o(n,a,l){if(Jb.isObject(n)){const c=a.length-1,p=a[c],u=a.indexOf("properties"),d="properties"===p&&c===u,h=s.allowMetaPatches&&i[n.$$ref];for(const c of Object.keys(n)){const p=n[c],u=a.concat(c),f=Jb.isObject(p),m=n.$$ref;if(h||f&&(s.allowMetaPatches&&m&&(i[m]=!0),yield*o(p,u,l)),!d&&c===e.key){const n=t(r,a);r&&!n||(yield e.plugin(p,c,u,s,l))}}}else e.key===a[a.length-1]&&(yield e.plugin(n,e.key,a,s))}}}(e)),Object.assign(n.bind(s),{pluginName:e.name||t,isGenerator:Jb.isGenerator(n)})}nextPlugin(){return this.wrappedPlugins.find((e=>this.getMutationsForPlugin(e).length>0))}nextPromisedPatch(){if(this.promisedPatches.length>0)return Promise.race(this.promisedPatches.map((e=>e.value)))}getPluginHistory(e){const t=this.constructor.getPluginName(e);return this.pluginHistory[t]||[]}getPluginRunCount(e){return this.getPluginHistory(e).length}getPluginHistoryTip(e){const t=this.getPluginHistory(e);return t&&t[t.length-1]||{}}getPluginMutationIndex(e){const t=this.getPluginHistoryTip(e).mutationIndex;return"number"!=typeof t?-1:t}updatePluginHistory(e,t){const r=this.constructor.getPluginName(e);this.pluginHistory[r]=this.pluginHistory[r]||[],this.pluginHistory[r].push(t)}updatePatches(e){Jb.normalizeArray(e).forEach((e=>{if(e instanceof Error)this.errors.push(e);else try{if(!Jb.isObject(e))return void this.debug("updatePatches","Got a non-object patch",e);if(this.showDebug&&this.allPatches.push(e),Jb.isPromise(e.value))return this.promisedPatches.push(e),void this.promisedPatchThen(e);if(Jb.isContextPatch(e))return void this.setContext(e.path,e.value);Jb.isMutation(e)&&this.updateMutations(e)}catch(e){console.error(e),this.errors.push(e)}}))}updateMutations(e){"object"==typeof e.value&&!Array.isArray(e.value)&&this.allowMetaPatches&&(e.value=Fh({},e.value));const t=Jb.applyPatch(this.state,e,{allowMetaPatches:this.allowMetaPatches});t&&(this.mutations.push(e),this.state=t)}removePromisedPatch(e){const t=this.promisedPatches.indexOf(e);t<0?this.debug("Tried to remove a promisedPatch that isn't there!"):this.promisedPatches.splice(t,1)}promisedPatchThen(e){return e.value=e.value.then((t=>{const r=Fh(Fh({},e),{},{value:t});this.removePromisedPatch(e),this.updatePatches(r)})).catch((t=>{this.removePromisedPatch(e),this.updatePatches(t)})),e.value}getMutations(e,t){return e=e||0,"number"!=typeof t&&(t=this.mutations.length),this.mutations.slice(e,t)}getCurrentMutations(){return this.getMutationsForPlugin(this.getCurrentPlugin())}getMutationsForPlugin(e){const t=this.getPluginMutationIndex(e);return this.getMutations(t+1)}getCurrentPlugin(){return this.currentPlugin}getLib(){return this.libMethods}_get(e){return Jb.getIn(this.state,e)}_getContext(e){return this.contextTree.get(e)}setContext(e,t){return this.contextTree.set(e,t)}_hasRun(e){return this.getPluginRunCount(this.getCurrentPlugin())>(e||0)}dispatch(){const e=this,t=this.nextPlugin();if(!t){const e=this.nextPromisedPatch();if(e)return e.then((()=>this.dispatch())).catch((()=>this.dispatch()));const t={spec:this.state,errors:this.errors};return this.showDebug&&(t.patches=this.allPatches),Promise.resolve(t)}if(e.pluginCount=e.pluginCount||{},e.pluginCount[t]=(e.pluginCount[t]||0)+1,e.pluginCount[t]>100)return Promise.resolve({spec:e.state,errors:e.errors.concat(new Error("We've reached a hard limit of 100 plugin runs"))});if(t!==this.currentPlugin&&this.promisedPatches.length){const e=this.promisedPatches.map((e=>e.value));return Promise.all(e.map((e=>e.then(Yx,Yx)))).then((()=>this.dispatch()))}return function(){e.currentPlugin=t;const n=e.getCurrentMutations(),s=e.mutations.length-1;try{if(t.isGenerator)for(const s of t(n,e.getLib()))r(s);else r(t(n,e.getLib()))}catch(e){console.error(e),r([Object.assign(Object.create(e),{plugin:t})])}finally{e.updatePluginHistory(t,{mutationIndex:s})}return e.dispatch()}();function r(r){r&&(r=Jb.fullyNormalizeArray(r),e.updatePatches(r,t))}}}const Qx={refs:_x,allOf:Vx,parameters:Wx,properties:Gx},ew=e=>e.replace(/\W/gi,"_");function tw(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",{v2OperationIdCompatibilityMode:n}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!e||"object"!=typeof e)return null;return(e.operationId||"").replace(/\s/g,"").length?ew(e.operationId):function(e,t){let{v2OperationIdCompatibilityMode:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(r){let r=`${t.toLowerCase()}_${e}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g,"_");return r=r||`${e.substring(1)}_${t}`,r.replace(/((_){2,})/g,"_").replace(/^(_)*/g,"").replace(/([_])*$/g,"")}return`${t.toLowerCase()}${ew(e)}`}(t,r,{v2OperationIdCompatibilityMode:n})}function rw(e){const{spec:t}=e,{paths:r}=t,n={};if(!r||t.$$normalized)return e;for(const e in r){const s=r[e];if(null==s||!["object","function"].includes(typeof s))continue;const i=s.parameters;for(const r in s){const o=s[r];if(null==o||!["object","function"].includes(typeof o))continue;const a=tw(o,e,r);if(a){n[a]?n[a].push(o):n[a]=[o];const e=n[a];if(e.length>1)e.forEach(((e,t)=>{e.h=e.h||e.operationId,e.operationId=`${a}${t+1}`}));else if(void 0!==o.operationId){const t=e[0];t.h=t.h||o.operationId,t.operationId=a}}if("parameters"!==r){const e=[],r={};for(const n in t)"produces"!==n&&"consumes"!==n&&"security"!==n||(r[n]=t[n],e.push(r));if(i&&(r.parameters=i,e.push(r)),e.length)for(const t of e)for(const e in t)if(o[e]){if("parameters"===e)for(const r of t[e])o[e].some((e=>e.name&&e.name===r.name||e.$ref&&e.$ref===r.$ref||e.$$ref&&e.$$ref===r.$$ref||e===r))||o[e].push(r)}else o[e]=t[e]}}}return t.$$normalized=!0,e}async function nw(e){const{spec:t,mode:r,allowMetaPatches:n=!0,pathDiscriminator:s,modelPropertyMacro:i,parameterMacro:o,requestInterceptor:a,responseInterceptor:l,skipNormalization:c,useCircularStructures:p}=e,u=cb(e),d=pb(e);return function(e){u&&(Qx.refs.docCache[u]=e),Qx.refs.fetchJSON=lb(d,{requestInterceptor:a,responseInterceptor:l});const t=[Qx.refs];return"function"==typeof o&&t.push(Qx.parameters),"function"==typeof i&&t.push(Qx.properties),"strict"!==r&&t.push(Qx.allOf),(h={spec:e,context:{baseDoc:u},plugins:t,allowMetaPatches:n,pathDiscriminator:s,parameterMacro:o,modelPropertyMacro:i,useCircularStructures:p},new Xx(h).dispatch()).then(c?async e=>e:rw);var h}(t)}const sw={name:"generic",match:()=>!0,normalize(e){let{spec:t}=e;const{spec:r}=rw({spec:t});return r},resolve:async e=>nw(e)},iw=e=>{try{const{openapi:t}=e;return"string"==typeof t&&/^3\.0\.([0123])(?:-rc[012])?$/.test(t)}catch{return!1}},ow=e=>{try{const{openapi:t}=e;return"string"==typeof t&&/^3\.1\.(?:[1-9]\d*|0)$/.test(t)}catch{return!1}},aw=e=>iw(e)||ow(e),lw={name:"openapi-2",match(e){let{spec:t}=e;return(e=>{try{const{swagger:t}=e;return"2.0"===t}catch{return!1}})(t)},normalize(e){let{spec:t}=e;const{spec:r}=rw({spec:t});return r},resolve:async e=>async function(e){return nw(e)}(e)},cw={name:"openapi-3-0",match(e){let{spec:t}=e;return iw(t)},normalize(e){let{spec:t}=e;const{spec:r}=rw({spec:t});return r},resolve:async e=>async function(e){return nw(e)}(e)},pw=e=>async t=>(async e=>{const{spec:t,requestInterceptor:r,responseInterceptor:n}=e,s=cb(e),i=pb(e),o=t||await lb(i,{requestInterceptor:r,responseInterceptor:n})(s),a=Fh(Fh({},e),{},{spec:o});return e.strategies.find((e=>e.match(a))).resolve(a)})(Fh(Fh({},e),t)),uw=pw({strategies:[cw,lw,sw]});var dw=Array.isArray,hw="object"==typeof global&&global&&global.Object===Object&&global,fw=hw,mw="object"==typeof self&&self&&self.Object===Object&&self,yw=fw||mw||Function("return this")(),gw=yw.Symbol,vw=gw,bw=Object.prototype,xw=bw.hasOwnProperty,ww=bw.toString,$w=vw?vw.toStringTag:void 0,Sw=Object.prototype.toString,Ew=function(e){var t=xw.call(e,$w),r=e[$w];try{e[$w]=void 0;var n=!0}catch(e){}var s=ww.call(e);return n&&(t?e[$w]=r:delete e[$w]),s},kw=gw?gw.toStringTag:void 0,Ow=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":kw&&kw in Object(e)?Ew(e):function(e){return Sw.call(e)}(e)},jw=function(e){return null!=e&&"object"==typeof e},Aw=Ow,Pw=jw,Tw=function(e){return"symbol"==typeof e||Pw(e)&&"[object Symbol]"==Aw(e)},Cw=dw,Iw=Tw,Rw=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_w=/^\w*$/,Fw=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Dw=Ow,Mw=Fw,qw=function(e){if(!Mw(e))return!1;var t=Dw(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Lw=yw.u,Bw=function(){var e=/[^.]+$/.exec(Lw&&Lw.keys&&Lw.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Nw=Function.prototype.toString,Uw=function(e){if(null!=e){try{return Nw.call(e)}catch(e){}try{return e+""}catch(e){}}return""},zw=qw,Hw=function(e){return!!Bw&&Bw in e},Vw=Fw,Ww=Uw,Gw=/^\[object .+?Constructor\]$/,Jw=Function.prototype,Kw=Object.prototype,Zw=Jw.toString,Yw=Kw.hasOwnProperty,Xw=RegExp("^"+Zw.call(Yw).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Qw=function(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return function(e){return!(!Vw(e)||Hw(e))&&(zw(e)?Xw:Gw).test(Ww(e))}(r)?r:void 0},e$=Qw(Object,"create"),t$=e$,r$=e$,n$=Object.prototype.hasOwnProperty,s$=e$,i$=Object.prototype.hasOwnProperty,o$=e$,a$=function(){this.p=t$?t$(null):{},this.size=0},l$=function(e){var t=this.has(e)&&delete this.p[e];return this.size-=t?1:0,t},c$=function(e){var t=this.p;if(r$){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return n$.call(t,e)?t[e]:void 0},p$=function(e){var t=this.p;return s$?void 0!==t[e]:i$.call(t,e)},u$=function(e,t){var r=this.p;return this.size+=this.has(e)?0:1,r[e]=o$&&void 0===t?"__lodash_hash_undefined__":t,this};function d$(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}d$.prototype.clear=a$,d$.prototype.delete=l$,d$.prototype.get=c$,d$.prototype.has=p$,d$.prototype.set=u$;var h$=d$,f$=function(e,t){return e===t||e!=e&&t!=t},m$=f$,y$=function(e,t){for(var r=e.length;r--;)if(m$(e[r][0],t))return r;return-1},g$=y$,v$=Array.prototype.splice,b$=y$,x$=y$,w$=y$,$$=function(){this.p=[],this.size=0},S$=function(e){var t=this.p,r=g$(t,e);return!(r<0||(r==t.length-1?t.pop():v$.call(t,r,1),--this.size,0))},E$=function(e){var t=this.p,r=b$(t,e);return r<0?void 0:t[r][1]},k$=function(e,t){var r=this.p,n=w$(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function O$(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}O$.prototype.clear=$$,O$.prototype.delete=S$,O$.prototype.get=E$,O$.prototype.has=function(e){return x$(this.p,e)>-1},O$.prototype.set=k$;var j$=O$,A$=Qw(yw,"Map"),P$=h$,T$=j$,C$=A$,I$=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},R$=function(e,t){var r=e.p;return I$(t)?r["string"==typeof t?"string":"hash"]:r.map},_$=R$,F$=R$,D$=R$,M$=R$,q$=function(e,t){var r=M$(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function L$(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}L$.prototype.clear=function(){this.size=0,this.p={hash:new P$,map:new(C$||T$),string:new P$}},L$.prototype.delete=function(e){var t=_$(this,e).delete(e);return this.size-=t?1:0,t},L$.prototype.get=function(e){return F$(this,e).get(e)},L$.prototype.has=function(e){return D$(this,e).has(e)},L$.prototype.set=q$;var B$=L$,N$=B$;function U$(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,s=t?t.apply(this,n):n[0],i=r.cache;if(i.has(s))return i.get(s);var o=e.apply(this,n);return r.cache=i.set(s,o)||i,o};return r.cache=new(U$.Cache||N$),r}U$.Cache=N$;var z$=U$,H$=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,V$=/\\(\\)?/g,W$=function(e){var t=z$((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(H$,(function(e,r,n,s){t.push(n?s.replace(V$,"$1"):r||e)})),t}),(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}(),G$=W$,J$=function(e,t){for(var r=-1,n=null==e?0:e.length,s=Array(n);++r<n;)s[r]=t(e[r],r,e);return s},K$=dw,Z$=Tw,Y$=gw?gw.prototype:void 0,X$=Y$?Y$.toString:void 0,Q$=function e(t){if("string"==typeof t)return t;if(K$(t))return J$(t,e)+"";if(Z$(t))return X$?X$.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},eS=dw,tS=function(e,t){if(Cw(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Iw(e))||_w.test(e)||!Rw.test(e)||null!=t&&e in Object(t)},rS=G$,nS=Tw,sS=function(e,t){return eS(e)?e:tS(e,t)?[e]:rS(function(e){return null==e?"":Q$(e)}(e))},iS=function(e){if("string"==typeof e||nS(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},oS=function(e,t){for(var r=0,n=(t=sS(t,e)).length;null!=e&&r<n;)e=e[iS(t[r++])];return r&&r==n?e:void 0};const aS=_t((function(e,t,r){var n=null==e?void 0:oS(e,t);return void 0===n?r:n})),lS=function(){return!1},cS=function(){return!0};function pS(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function uS(e){return function t(r){return 0===arguments.length||pS(r)?t:e.apply(this,arguments)}}function dS(e){return function t(r,n){switch(arguments.length){case 0:return t;case 1:return pS(r)?t:uS((function(t){return e(r,t)}));default:return pS(r)&&pS(n)?t:pS(r)?uS((function(t){return e(t,n)})):pS(n)?uS((function(t){return e(r,t)})):e(r,n)}}}function hS(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,r){return t.apply(this,arguments)};case 3:return function(e,r,n){return t.apply(this,arguments)};case 4:return function(e,r,n,s){return t.apply(this,arguments)};case 5:return function(e,r,n,s,i){return t.apply(this,arguments)};case 6:return function(e,r,n,s,i,o){return t.apply(this,arguments)};case 7:return function(e,r,n,s,i,o,a){return t.apply(this,arguments)};case 8:return function(e,r,n,s,i,o,a,l){return t.apply(this,arguments)};case 9:return function(e,r,n,s,i,o,a,l,c){return t.apply(this,arguments)};case 10:return function(e,r,n,s,i,o,a,l,c,p){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function fS(e,t,r){return function(){for(var n=[],s=0,i=e,o=0;o<t.length||s<arguments.length;){var a;o<t.length&&(!pS(t[o])||s>=arguments.length)?a=t[o]:(a=arguments[s],s+=1),n[o]=a,pS(a)||(i-=1),o+=1}return i<=0?r.apply(this,n):hS(i,fS(e,n,r))}}const mS=dS((function(e,t){return 1===e?uS(t):hS(e,fS(e,[],t))}));function yS(e){return function t(r,n,s){switch(arguments.length){case 0:return t;case 1:return pS(r)?t:dS((function(t,n){return e(r,t,n)}));case 2:return pS(r)&&pS(n)?t:pS(r)?dS((function(t,r){return e(t,n,r)})):pS(n)?dS((function(t,n){return e(r,t,n)})):uS((function(t){return e(r,n,t)}));default:return pS(r)&&pS(n)&&pS(s)?t:pS(r)&&pS(n)?dS((function(t,r){return e(t,r,s)})):pS(r)&&pS(s)?dS((function(t,r){return e(t,n,r)})):pS(n)&&pS(s)?dS((function(t,n){return e(r,t,n)})):pS(r)?uS((function(t){return e(t,n,s)})):pS(n)?uS((function(t){return e(r,t,s)})):pS(s)?uS((function(t){return e(r,n,t)})):e(r,n,s)}}}const gS=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};function vS(e,t,r){return function(){if(0===arguments.length)return r();var n=arguments[arguments.length-1];if(!gS(n)){for(var s=0;s<e.length;){if("function"==typeof n[e[s]])return n[e[s]].apply(n,Array.prototype.slice.call(arguments,0,-1));s+=1}if(function(e){return null!=e&&"function"==typeof e["@@transducer/step"]}(n))return t.apply(null,Array.prototype.slice.call(arguments,0,-1))(n)}return r.apply(this,arguments)}}function bS(e){return e&&e["@@transducer/reduced"]?e:{"@@transducer/value":e,"@@transducer/reduced":!0}}const xS=function(){return this.xf["@@transducer/init"]()},wS=function(e){return this.xf["@@transducer/result"](e)};var $S=function(){function e(e,t){this.xf=t,this.f=e,this.all=!0}return e.prototype["@@transducer/init"]=xS,e.prototype["@@transducer/result"]=function(e){return this.all&&(e=this.xf["@@transducer/step"](e,!0)),this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){return this.f(t)||(this.all=!1,e=bS(this.xf["@@transducer/step"](e,!1))),e},e}();const SS=dS(vS(["all"],(function(e){return function(t){return new $S(e,t)}}),(function(e,t){for(var r=0;r<t.length;){if(!e(t[r]))return!1;r+=1}return!0})));function ES(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}function kS(e,t,r){for(var n=0,s=r.length;n<s;){if(e(t,r[n]))return!0;n+=1}return!1}function OS(e,t){return Object.prototype.hasOwnProperty.call(t,e)}const jS="function"==typeof Object.is?Object.is:function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};var AS=Object.prototype.toString,PS=function(){return"[object Arguments]"===AS.call(arguments)?function(e){return"[object Arguments]"===AS.call(e)}:function(e){return OS("callee",e)}}(),TS=!{toString:null}.propertyIsEnumerable("toString"),CS=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],IS=function(){return arguments.propertyIsEnumerable("length")}(),RS=function(e,t){for(var r=0;r<e.length;){if(e[r]===t)return!0;r+=1}return!1},_S="function"!=typeof Object.keys||IS?uS((function(e){if(Object(e)!==e)return[];var t,r,n=[],s=IS&&PS(e);for(t in e)!OS(t,e)||s&&"length"===t||(n[n.length]=t);if(TS)for(r=CS.length-1;r>=0;)OS(t=CS[r],e)&&!RS(n,t)&&(n[n.length]=t),r-=1;return n})):uS((function(e){return Object(e)!==e?[]:Object.keys(e)}));const FS=uS((function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}));function DS(e,t,r,n){var s=ES(e);function i(e,t){return MS(e,t,r.slice(),n.slice())}return!kS((function(e,t){return!kS(i,t,e)}),ES(t),s)}function MS(e,t,r,n){if(jS(e,t))return!0;var s=FS(e);if(s!==FS(t))return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof t["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof t.equals)return"function"==typeof e.equals&&e.equals(t)&&"function"==typeof t.equals&&t.equals(e);switch(s){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===function(e){var t=String(e).match(/^function (\w*)/);return null==t?"":t[1]}(e.constructor))return e===t;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof t||!jS(e.valueOf(),t.valueOf()))return!1;break;case"Date":if(!jS(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(e.source!==t.source||e.global!==t.global||e.ignoreCase!==t.ignoreCase||e.multiline!==t.multiline||e.sticky!==t.sticky||e.unicode!==t.unicode)return!1}for(var i=r.length-1;i>=0;){if(r[i]===e)return n[i]===t;i-=1}switch(s){case"Map":return e.size===t.size&&DS(e.entries(),t.entries(),r.concat([e]),n.concat([t]));case"Set":return e.size===t.size&&DS(e.values(),t.values(),r.concat([e]),n.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var o=_S(e);if(o.length!==_S(t).length)return!1;var a=r.concat([e]),l=n.concat([t]);for(i=o.length-1;i>=0;){var c=o[i];if(!OS(c,t)||!MS(t[c],e[c],a,l))return!1;i-=1}return!0}const qS=dS((function(e,t){return MS(e,t,[],[])}));function LS(e,t){return function(e,t,r){var n,s;if("function"==typeof e.indexOf)switch(typeof t){case"number":if(0===t){for(n=1/t;r<e.length;){if(0===(s=e[r])&&1/s===n)return r;r+=1}return-1}if(t!=t){for(;r<e.length;){if("number"==typeof(s=e[r])&&s!=s)return r;r+=1}return-1}return e.indexOf(t,r);case"string":case"boolean":case"function":case"undefined":return e.indexOf(t,r);case"object":if(null===t)return e.indexOf(t,r)}for(;r<e.length;){if(qS(e[r],t))return r;r+=1}return-1}(t,e,0)>=0}function BS(e,t){for(var r=0,n=t.length,s=Array(n);r<n;)s[r]=e(t[r]),r+=1;return s}function NS(e){return'"'+e.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}var US=function(e){return(e<10?"0":"")+e},zS="function"==typeof Date.prototype.toISOString?function(e){return e.toISOString()}:function(e){return e.getUTCFullYear()+"-"+US(e.getUTCMonth()+1)+"-"+US(e.getUTCDate())+"T"+US(e.getUTCHours())+":"+US(e.getUTCMinutes())+":"+US(e.getUTCSeconds())+"."+(e.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};function HS(e){return function(){return!e.apply(this,arguments)}}function VS(e,t,r){for(var n=0,s=r.length;n<s;)t=e(t,r[n]),n+=1;return t}function WS(e){return"[object Object]"===Object.prototype.toString.call(e)}var GS=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=xS,e.prototype["@@transducer/result"]=wS,e.prototype["@@transducer/step"]=function(e,t){return this.f(t)?this.xf["@@transducer/step"](e,t):e},e}();var JS=dS(vS(["fantasy-land/filter","filter"],(function(e){return function(t){return new GS(e,t)}}),(function(e,t){return WS(t)?VS((function(r,n){return e(t[n])&&(r[n]=t[n]),r}),{},_S(t)):function(e,t){for(var r=0,n=t.length,s=[];r<n;)e(t[r])&&(s[s.length]=t[r]),r+=1;return s}(e,t)}))),KS=dS((function(e,t){return JS(HS(e),t)}));function ZS(e,t){var r=function(r){var n=t.concat([e]);return LS(r,n)?"<Circular>":ZS(r,n)},n=function(e,t){return BS((function(t){return NS(t)+": "+r(e[t])}),t.slice().sort())};switch(Object.prototype.toString.call(e)){case"[object Arguments]":return"(function() { return arguments; }("+BS(r,e).join(", ")+"))";case"[object Array]":return"["+BS(r,e).concat(n(e,KS((function(e){return/^\d+$/.test(e)}),_S(e)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof e?"new Boolean("+r(e.valueOf())+")":e.toString();case"[object Date]":return"new Date("+(isNaN(e.valueOf())?r(NaN):NS(zS(e)))+")";case"[object Map]":return"new Map("+r(Array.from(e))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof e?"new Number("+r(e.valueOf())+")":1/e==-1/0?"-0":e.toString(10);case"[object Set]":return"new Set("+r(Array.from(e).sort())+")";case"[object String]":return"object"==typeof e?"new String("+r(e.valueOf())+")":NS(e);case"[object Undefined]":return"undefined";default:if("function"==typeof e.toString){var s=e.toString();if("[object Object]"!==s)return s}return"{"+n(e,_S(e)).join(", ")+"}"}}const YS=uS((function(e){return ZS(e,[])}));var XS=dS((function(e,t){if(e===t)return t;function r(e,t){if(e>t!=t>e)return t>e?t:e}var n=r(e,t);if(void 0!==n)return n;var s=r(typeof e,typeof t);if(void 0!==s)return s===typeof e?e:t;var i=YS(e),o=r(i,YS(t));return void 0!==o&&o===i?e:t})),QS=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=xS,e.prototype["@@transducer/result"]=wS,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}();const eE=dS(vS(["fantasy-land/map","map"],(function(e){return function(t){return new QS(e,t)}}),(function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return mS(t.length,(function(){return e.call(this,t.apply(this,arguments))}));case"[object Object]":return VS((function(r,n){return r[n]=e(t[n]),r}),{},_S(t));default:return BS(e,t)}}))),tE=Number.isInteger||function(e){return e<<0===e};function rE(e){return"[object String]"===Object.prototype.toString.call(e)}const nE=dS((function(e,t){var r=e<0?t.length+e:e;return rE(t)?t.charAt(r):t[r]}));var sE=dS((function(e,t){if(null!=t)return tE(e)?nE(e,t):t[e]})),iE=dS((function(e,t){return eE(sE(e),t)})),oE=uS((function(e){return!!gS(e)||!!e&&"object"==typeof e&&!rE(e)&&(0===e.length||e.length>0&&e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1))})),aE="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function lE(e,t,r){return function(n,s,i){if(oE(i))return e(n,s,i);if(null==i)return s;if("function"==typeof i["fantasy-land/reduce"])return t(n,s,i,"fantasy-land/reduce");if(null!=i[aE])return r(n,s,i[aE]());if("function"==typeof i.next)return r(n,s,i);if("function"==typeof i.reduce)return t(n,s,i,"reduce");throw new TypeError("reduce: list must be array or iterable")}}var cE=dS((function(e,t){return hS(e.length,(function(){return e.apply(t,arguments)}))}));var pE=lE((function(e,t,r){for(var n=0,s=r.length;n<s;){if((t=e["@@transducer/step"](t,r[n]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}n+=1}return e["@@transducer/result"](t)}),(function(e,t,r,n){return e["@@transducer/result"](r[n](cE(e["@@transducer/step"],e),t))}),(function(e,t,r){for(var n=r.next();!n.done;){if((t=e["@@transducer/step"](t,n.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}n=r.next()}return e["@@transducer/result"](t)})),uE=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},e}();function dE(e){return new uE(e)}const hE=yS((function(e,t,r){return pE("function"==typeof e?dE(e):e,t,r)})),fE=uS((function(e){return mS(hE(XS,0,iE("length",e)),(function(){for(var t=0,r=e.length;t<r;){if(!e[t].apply(this,arguments))return!1;t+=1}return!0}))})),mE=uS((function(e){return function(){return e}}));var yE=dS((function(e,t){return e&&t}));const gE=uS((function(e){return mS(hE(XS,0,iE("length",e)),(function(){for(var t=0,r=e.length;t<r;){if(e[t].apply(this,arguments))return!0;t+=1}return!1}))}));var vE=lE(VS,(function(e,t,r,n){return r[n](e,t)}),(function(e,t,r){for(var n=r.next();!n.done;)t=e(t,n.value),n=r.next();return t})),bE=dS((function(e,t){return"function"==typeof t["fantasy-land/ap"]?t["fantasy-land/ap"](e):"function"==typeof e.ap?e.ap(t):"function"==typeof e?function(r){return e(r)(t(r))}:vE((function(e,r){return function(e,t){var r;t=t||[];var n=(e=e||[]).length,s=t.length,i=[];for(r=0;r<n;)i[i.length]=e[r],r+=1;for(r=0;r<s;)i[i.length]=t[r],r+=1;return i}(e,eE(r,t))}),[],e)}));const xE=dS((function(e,t){return e.apply(this,t)})),wE=uS((function(e){for(var t=_S(e),r=t.length,n=[],s=0;s<r;)n[s]=e[t[s]],s+=1;return n}));var $E=uS((function(e){return null==e})),SE=yS((function e(t,r,n){if(0===t.length)return r;var s=t[0];if(t.length>1){var i=!$E(n)&&OS(s,n)&&"object"==typeof n[s]?n[s]:tE(t[1])?[]:{};r=e(Array.prototype.slice.call(t,1),r,i)}return function(e,t,r){if(tE(e)&&gS(r)){var n=[].concat(r);return n[e]=t,n}var s={};for(var i in r)s[i]=r[i];return s[e]=t,s}(s,r,n)}));const EE=SE;function kE(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object AsyncGeneratorFunction]"===t}var OE=dS((function(e,t){var r=mS(e,t);return mS(e,(function(){return VS(bE,eE(r,arguments[0]),Array.prototype.slice.call(arguments,1))}))}));const jE=uS((function(e){return OE(e.length,e)})),AE=dS((function(e,t){return kE(e)?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:jE(yE)(e,t)}));function PE(e){return new RegExp(e.source,e.flags?e.flags:(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.sticky?"y":"")+(e.unicode?"u":"")+(e.dotAll?"s":""))}function TE(e,t,r){if(r||(r=new CE),function(e){var t=typeof e;return null==e||"object"!=t&&"function"!=t}(e))return e;var n=function(n){var s=r.get(e);if(s)return s;for(var i in r.set(e,n),e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=t?TE(e[i],!0,r):e[i]);return n};switch(FS(e)){case"Object":return n(Object.create(Object.getPrototypeOf(e)));case"Array":return n([]);case"Date":return new Date(e.valueOf());case"RegExp":return PE(e);case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":return e.slice();default:return e}}var CE=function(){function e(){this.map={},this.length=0}return e.prototype.set=function(e,t){const r=this.hash(e);let n=this.map[r];n||(this.map[r]=n=[]),n.push([e,t]),this.length+=1},e.prototype.hash=function(e){let t=[];for(var r in e)t.push(Object.prototype.toString.call(e[r]));return t.join()},e.prototype.get=function(e){if(this.length<=180){for(const t in this.map){const r=this.map[t];for(let t=0;t<r.length;t+=1){const n=r[t];if(n[0]===e)return n[1]}}return}const t=this.hash(e),r=this.map[t];if(r)for(let t=0;t<r.length;t+=1){const n=r[t];if(n[0]===e)return n[1]}},e}();const IE=uS((function(e){return function(t,r){return e(t,r)?-1:e(r,t)?1:0}})),RE=jE(uS((function(e){return!e})));function _E(e,t){return function(){return t.call(this,e.apply(this,arguments))}}function FE(e,t){return function(){var r=arguments.length;if(0===r)return t();var n=arguments[r-1];return gS(n)||"function"!=typeof n[e]?t.apply(this,arguments):n[e].apply(n,Array.prototype.slice.call(arguments,0,r-1))}}var DE=yS(FE("slice",(function(e,t,r){return Array.prototype.slice.call(r,e,t)})));const ME=uS(FE("tail",DE(1,1/0)));function qE(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return hS(arguments[0].length,hE(_E,arguments[0],ME(arguments)))}const LE=nE(0);const BE=uS((function(e){return e})),NE=uS((function(e){return mS(e.length,e)}));var UE=dS((function(e,t){return mS(hE(XS,0,iE("length",t)),(function(){var r=arguments,n=this;return e.apply(n,BS((function(e){return e.apply(n,r)}),t))}))}));const zE=UE;var HE=function(){function e(e,t,r,n){this.valueFn=e,this.valueAcc=t,this.keyFn=r,this.xf=n,this.inputs={}}return e.prototype["@@transducer/init"]=xS,e.prototype["@@transducer/result"]=function(e){var t;for(t in this.inputs)if(OS(t,this.inputs)&&(e=this.xf["@@transducer/step"](e,this.inputs[t]))["@@transducer/reduced"]){e=e["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){var r=this.keyFn(t);return this.inputs[r]=this.inputs[r]||[r,TE(this.valueAcc,!1)],this.inputs[r][1]=this.valueFn(this.inputs[r][1],t),e},e}();var VE=fS(4,[],vS([],(function(e,t,r){return function(n){return new HE(e,t,r,n)}}),(function(e,t,r,n){var s=dE((function(n,s){var i=r(s),o=e(OS(i,n)?n[i]:TE(t,!1),s);return o&&o["@@transducer/reduced"]?bS(n):(n[i]=o,n)}));return pE(s,{},n)})));const WE=dS((function(e,t){return null==t||t!=t?e:t}));var GE=function(){function e(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return e.prototype.add=function(e){return!JE(e,!0,this)},e.prototype.has=function(e){return JE(e,!1,this)},e}();function JE(e,t,r){var n,s=typeof e;switch(s){case"string":case"number":return 0===e&&1/e==-1/0?!!r._items["-0"]||(t&&(r._items["-0"]=!0),!1):null!==r._nativeSet?t?(n=r._nativeSet.size,r._nativeSet.add(e),r._nativeSet.size===n):r._nativeSet.has(e):s in r._items?e in r._items[s]||(t&&(r._items[s][e]=!0),!1):(t&&(r._items[s]={},r._items[s][e]=!0),!1);case"boolean":if(s in r._items){var i=e?1:0;return!!r._items[s][i]||(t&&(r._items[s][i]=!0),!1)}return t&&(r._items[s]=e?[!1,!0]:[!0,!1]),!1;case"function":return null!==r._nativeSet?t?(n=r._nativeSet.size,r._nativeSet.add(e),r._nativeSet.size===n):r._nativeSet.has(e):s in r._items?!!LS(e,r._items[s])||(t&&r._items[s].push(e),!1):(t&&(r._items[s]=[e]),!1);case"undefined":return!!r._items[s]||(t&&(r._items[s]=!0),!1);case"object":if(null===e)return!!r._items.null||(t&&(r._items.null=!0),!1);default:return(s=Object.prototype.toString.call(e))in r._items?!!LS(e,r._items[s])||(t&&r._items[s].push(e),!1):(t&&(r._items[s]=[e]),!1)}}var KE=dS((function(e,t){for(var r=[],n=0,s=e.length,i=t.length,o=new GE,a=0;a<i;a+=1)o.add(t[a]);for(;n<s;)o.add(e[n])&&(r[r.length]=e[n]),n+=1;return r}));const ZE=KE;var YE=function(){function e(e,t){this.xf=t,this.n=e,this.i=0}return e.prototype["@@transducer/init"]=xS,e.prototype["@@transducer/result"]=wS,e.prototype["@@transducer/step"]=function(e,t){this.i+=1;var r=0===this.n?e:this.xf["@@transducer/step"](e,t);return this.n>=0&&this.i>=this.n?bS(r):r},e}();var XE=dS(vS(["take"],(function(e){return function(t){return new YE(e,t)}}),(function(e,t){return DE(0,e<0?1/0:e,t)})));var QE=function(){function e(e,t){this.f=e,this.retained=[],this.xf=t}return e.prototype["@@transducer/init"]=xS,e.prototype["@@transducer/result"]=function(e){return this.retained=null,this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){return this.f(t)?this.retain(e,t):this.flush(e,t)},e.prototype.flush=function(e,t){return e=pE(this.xf,e,this.retained),this.retained=[],this.xf["@@transducer/step"](e,t)},e.prototype.retain=function(e,t){return this.retained.push(t),e},e}();const ek=dS(vS([],(function(e){return function(t){return new QE(e,t)}}),(function(e,t){for(var r=t.length-1;r>=0&&e(t[r]);)r-=1;return DE(0,r+1,t)}))),tk=nE(-1);var rk=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=xS,e.prototype["@@transducer/result"]=wS,e.prototype["@@transducer/step"]=function(e,t){if(this.f){if(this.f(t))return e;this.f=null}return this.xf["@@transducer/step"](e,t)},e}();const nk=dS(vS(["dropWhile"],(function(e){return function(t){return new rk(e,t)}}),(function(e,t){for(var r=0,n=t.length;r<n&&e(t[r]);)r+=1;return DE(r,1/0,t)})));var sk=dS((function(e,t){return e||t}));const ik=dS((function(e,t){return kE(e)?function(){return e.apply(this,arguments)||t.apply(this,arguments)}:jE(sk)(e,t)}));var ok=uS((function(e){return null!=e&&"function"==typeof e["fantasy-land/empty"]?e["fantasy-land/empty"]():null!=e&&null!=e.constructor&&"function"==typeof e.constructor["fantasy-land/empty"]?e.constructor["fantasy-land/empty"]():null!=e&&"function"==typeof e.empty?e.empty():null!=e&&null!=e.constructor&&"function"==typeof e.constructor.empty?e.constructor.empty():gS(e)?[]:rE(e)?"":WS(e)?{}:PS(e)?function(){return arguments}():function(e){var t=Object.prototype.toString.call(e);return"[object Uint8ClampedArray]"===t||"[object Int8Array]"===t||"[object Uint8Array]"===t||"[object Int16Array]"===t||"[object Uint16Array]"===t||"[object Int32Array]"===t||"[object Uint32Array]"===t||"[object Float32Array]"===t||"[object Float64Array]"===t||"[object BigInt64Array]"===t||"[object BigUint64Array]"===t}(e)?e.constructor.from(""):void 0}));const ak=uS((function(e){return mS(e.length,(function(t,r){var n=Array.prototype.slice.call(arguments,0);return n[0]=r,n[1]=t,e.apply(this,n)}))})),lk=dS(FE("groupBy",VE((function(e,t){return e.push(t),e}),[])));var ck=dS((function(e,t){if(0===e.length||$E(t))return!1;for(var r=t,n=0;n<e.length;){if($E(r)||!OS(e[n],r))return!1;r=r[e[n]],n+=1}return!0})),pk=dS((function(e,t){return ck([e],t)}));const uk=pk;var dk=dS((function(e,t){return!$E(t)&&e in t}));const hk=dk;var fk=function(e,t){switch(arguments.length){case 0:return fk;case 1:return function t(r){return 0===arguments.length?t:jS(e,r)};default:return jS(e,t)}};const mk=fk,yk=yS((function(e,t,r){return mS(Math.max(e.length,t.length,r.length),(function(){return e.apply(this,arguments)?t.apply(this,arguments):r.apply(this,arguments)}))})),gk=dS(LS),vk=DE(0,-1);var bk=dS((function(e,t){return mS(e+1,(function(){var r=arguments[e];if(null!=r&&kE(r[t]))return r[t].apply(r,Array.prototype.slice.call(arguments,0,e));throw new TypeError(YS(r)+' does not have a method named "'+t+'"')}))}));const xk=bk,wk=uS((function(e){return null!=e&&qS(e,ok(e))})),$k=xk(1,"join");function Sk(e){return"[object Number]"===Object.prototype.toString.call(e)}const Ek=dS((function(e,t){return function(r){return function(n){return eE((function(e){return t(e,n)}),r(e(n)))}}}));var kk=dS((function(e,t){return e.map((function(e){for(var r,n=t,s=0;s<e.length;){if(null==n)return;r=e[s],n=tE(r)?nE(r,n):n[r],s+=1}return n}))})),Ok=dS((function(e,t){return kk([e],t)[0]}));const jk=dS((function(e,t){return VS((function(r,n){return r[n]=e(t[n],n,t),r}),{},_S(t))}));var Ak=yS((function(e,t,r){var n,s={};for(n in r=r||{},t=t||{})OS(n,t)&&(s[n]=OS(n,r)?e(n,t[n],r[n]):t[n]);for(n in r)OS(n,r)&&!OS(n,s)&&(s[n]=r[n]);return s})),Pk=yS((function e(t,r,n){return Ak((function(r,n,s){return WS(n)&&WS(s)?e(t,n,s):t(r,n,s)}),r,n)}));const Tk=dS((function(e,t){return Pk((function(e,t,r){return r}),e,t)})),Ck=dS((function(e,t){return SS(HS(e),t)}));var Ik=function(e){return{value:e,map:function(t){return Ik(t(e))}}},Rk=yS((function(e,t,r){return e((function(e){return Ik(t(e))}))(r).value}));const _k=Rk,Fk=yS((function(e,t,r){return WE(e,Ok(t,r))})),Dk=yS((function(e,t,r){return e(Ok(t,r))})),Mk=dS((function(e,t){for(var r={},n=0;n<e.length;)e[n]in t&&(r[e[n]]=t[e[n]]),n+=1;return r})),qk=yS((function(e,t,r){return qS(e,sE(t,r))})),Lk=yS((function(e,t,r){return WE(e,sE(t,r))})),Bk=yS((function(e,t,r){return e(sE(t,r))}));var Nk=dS((function(e,t){if(!Sk(e)||!Sk(t))throw new TypeError("Both arguments to range must be numbers");for(var r=[],n=e;n<t;)r.push(n),n+=1;return r}));const Uk=Nk,zk=uS(bS);var Hk=yS((function(e,t,r){return r.replace(e,t)}));const Vk=Hk;var Wk=dS((function(e,t){return Array.prototype.slice.call(t,0).sort(e)}));const Gk=Wk,Jk=xk(1,"split"),Kk=dS((function(e,t){return qS(XE(e.length,t),e)}));var Zk=dS((function(e,t){if(r=e,"[object RegExp]"!==Object.prototype.toString.call(r))throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received "+YS(e));var r;return PE(e).test(t)}));const Yk=Zk;var Xk=function(){function e(e,t){this.xf=t,this.pred=e,this.items=[]}return e.prototype["@@transducer/init"]=xS,e.prototype["@@transducer/result"]=wS,e.prototype["@@transducer/step"]=function(e,t){return kS(this.pred,t,this.items)?e:(this.items.push(t),this.xf["@@transducer/step"](e,t))},e}();const Qk=dS(vS([],(function(e){return function(t){return new Xk(e,t)}}),(function(e,t){for(var r,n=0,s=t.length,i=[];n<s;)kS(e,r=t[n],i)||(i[i.length]=r),n+=1;return i}))),eO=yS((function(e,t,r){return e(r)?t(r):r})),tO=mE(void 0),rO=qS(tO()),nO=RE(rO),sO=qS(null),iO=RE(sO),oO=RE($E),aO=mS(1,qE(FS,mk("GeneratorFunction"))),lO=mS(1,qE(FS,mk("AsyncFunction"))),cO=gE([qE(FS,mk("Function")),aO,lO]),pO=mS(1,cO(Array.isArray)?Array.isArray:qE(FS,mk("Array"))),uO=AE(pO,wk),dO=RE(wk),hO=AE(pO,dO),fO=mS(1,qE(FS,mk("String"))),mO=qS("");function yO(e){return yO="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yO(e)}const gO=function(e){return"object"===yO(e)};var vO=RE(mS(1,AE(iO,ik(gO,cO))));const bO=fE([fO,vO,dO]),xO=RE(cO),wO=mS(1,AE(iO,gO));var $O=qE(FS,mk("Object")),SO=qE(YS,qS(YS(Object))),EO=Dk(AE(cO,SO),["constructor"]);const kO=mS(1,(function(e){if(!wO(e)||!$O(e))return!1;var t=Object.getPrototypeOf(e);return!!sO(t)||EO(t)}));var OO=AE(mS(1,qE(FS,mk("Number"))),isFinite),jO=mS(1,OO),AO=AE(cO(Number.isFinite)?mS(1,cE(Number.isFinite,Number)):jO,zE(qS,[Math.floor,BE])),PO=mS(1,AO);const TO=cO(Number.isInteger)?mS(1,cE(Number.isInteger,Number)):PO,CO=mS(1,qE(FS,mk("RegExp"))),IO=mE(tO()),RO=mS(1,cE(Promise.all,Promise));function _O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var FO=qE(Gk(IE((function(e,t){return e.length>t.length}))),LE,sE("length")),DO=NE((function(e,t,r){var n=r.apply(void 0,function(e){return function(e){if(Array.isArray(e))return _O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_O(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e));return oO(n)?zk(n):t}));const MO=yk(hO,(function(e){var t=FO(e);return mS(t,(function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return hE(DO(r),void 0,e)}))}),tO),qO=ak(gk);var LO=mS(3,(function(e,t,r){var n=Ok(e,r),s=Ok(vk(e),r);if(!xO(n)&&!uO(e)){var i=cE(n,s);return xE(i,t)}}));const BO=LO,NO=eO(fO,Vk(/[.*+?^${}()|[\]\\-]/g,"\\$&"));var UO=function(e,t){if("string"!=typeof e&&!(e instanceof String))throw TypeError("`".concat(t,"` must be a string"))};var zO=mS(3,(function(e,t,r){!function(e,t,r){if(null==r||null==e||null==t)throw TypeError("Input values must not be `null` or `undefined`")}(e,t,r),UO(r,"str"),UO(t,"replaceValue"),function(e){if(!("string"==typeof e||e instanceof String||e instanceof RegExp))throw TypeError("`searchValue` must be a string or an regexp")}(e);var n=new RegExp(CO(e)?e:NO(e),"g");return Vk(n,t,r)})),HO=xk(2,"replaceAll");const VO=cO(String.prototype.replaceAll)?HO:zO,WO=NE((function(e,t){return qE(Jk(""),ek(qO(e)),$k(""))(t)})),GO=NE((function(e,t){return qE(Jk(""),nk(qO(e)),$k(""))(t)}));var JO=Ow,KO=dw,ZO=jw,YO=Ow,XO=jw,QO=Ow,ej=jw,tj=j$,rj=j$,nj=A$,sj=B$,ij=j$,oj=function(e){var t=this.p,r=t.delete(e);return this.size=t.size,r},aj=function(e,t){var r=this.p;if(r instanceof rj){var n=r.p;if(!nj||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.p=new sj(n)}return r.set(e,t),this.size=r.size,this};function lj(e){var t=this.p=new ij(e);this.size=t.size}lj.prototype.clear=function(){this.p=new tj,this.size=0},lj.prototype.delete=oj,lj.prototype.get=function(e){return this.p.get(e)},lj.prototype.has=function(e){return this.p.has(e)},lj.prototype.set=aj;var cj=lj,pj=B$;function uj(e){var t=-1,r=null==e?0:e.length;for(this.p=new pj;++t<r;)this.add(e[t])}uj.prototype.add=uj.prototype.push=function(e){return this.p.set(e,"__lodash_hash_undefined__"),this},uj.prototype.has=function(e){return this.p.has(e)};var dj=uj,hj=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},fj=function(e,t){return e.has(t)},mj=function(e,t,r,n,s,i){var o=1&r,a=e.length,l=t.length;if(a!=l&&!(o&&l>a))return!1;var c=i.get(e),p=i.get(t);if(c&&p)return c==t&&p==e;var u=-1,d=!0,h=2&r?new dj:void 0;for(i.set(e,t),i.set(t,e);++u<a;){var f=e[u],m=t[u];if(n)var y=o?n(m,f,u,t,e,i):n(f,m,u,e,t,i);if(void 0!==y){if(y)continue;d=!1;break}if(h){if(!hj(t,(function(e,t){if(!fj(h,t)&&(f===e||s(f,e,r,n,i)))return h.push(t)}))){d=!1;break}}else if(f!==m&&!s(f,m,r,n,i)){d=!1;break}}return i.delete(e),i.delete(t),d},yj=yw.Uint8Array,gj=f$,vj=mj,bj=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},xj=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},wj=gw?gw.prototype:void 0,$j=wj?wj.valueOf:void 0,Sj=function(e,t){for(var r=-1,n=t.length,s=e.length;++r<n;)e[s+r]=t[r];return e},Ej=dw,kj=function(e,t){for(var r=-1,n=null==e?0:e.length,s=0,i=[];++r<n;){var o=e[r];t(o,r,e)&&(i[s++]=o)}return i},Oj=Object.prototype.propertyIsEnumerable,jj=Object.getOwnPropertySymbols,Aj=jj?function(e){return null==e?[]:(e=Object(e),kj(jj(e),(function(t){return Oj.call(e,t)})))}:function(){return[]},Pj=Aj,Tj=Ow,Cj=jw,Ij=function(e){return Cj(e)&&"[object Arguments]"==Tj(e)},Rj=jw,_j=Object.prototype,Fj=_j.hasOwnProperty,Dj=_j.propertyIsEnumerable,Mj=Ij(function(){return arguments}())?Ij:function(e){return Rj(e)&&Fj.call(e,"callee")&&!Dj.call(e,"callee")},qj={exports:{}},Lj=function(){return!1};!function(e,t){var r=yw,n=Lj,s=t&&!t.nodeType&&t,i=s&&e&&!e.nodeType&&e,o=i&&i.exports===s?r.Buffer:void 0,a=(o?o.isBuffer:void 0)||n;e.exports=a}(qj,qj.exports);var Bj=qj.exports,Nj=/^(?:0|[1-9]\d*)$/,Uj=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},zj=Ow,Hj=Uj,Vj=jw,Wj={};Wj["[object Float32Array]"]=Wj["[object Float64Array]"]=Wj["[object Int8Array]"]=Wj["[object Int16Array]"]=Wj["[object Int32Array]"]=Wj["[object Uint8Array]"]=Wj["[object Uint8ClampedArray]"]=Wj["[object Uint16Array]"]=Wj["[object Uint32Array]"]=!0,Wj["[object Arguments]"]=Wj["[object Array]"]=Wj["[object ArrayBuffer]"]=Wj["[object Boolean]"]=Wj["[object DataView]"]=Wj["[object Date]"]=Wj["[object Error]"]=Wj["[object Function]"]=Wj["[object Map]"]=Wj["[object Number]"]=Wj["[object Object]"]=Wj["[object RegExp]"]=Wj["[object Set]"]=Wj["[object String]"]=Wj["[object WeakMap]"]=!1;var Gj={exports:{}};!function(e,t){var r=hw,n=t&&!t.nodeType&&t,s=n&&e&&!e.nodeType&&e,i=s&&s.exports===n&&r.process,o=function(){try{return s&&s.require&&s.require("util").types||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}(Gj,Gj.exports);var Jj=Gj.exports,Kj=function(e){return Vj(e)&&Hj(e.length)&&!!Wj[zj(e)]},Zj=function(e){return function(t){return e(t)}},Yj=Jj&&Jj.isTypedArray,Xj=Yj?Zj(Yj):Kj,Qj=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},eA=Mj,tA=dw,rA=Bj,nA=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Nj.test(e))&&e>-1&&e%1==0&&e<t},sA=Xj,iA=Object.prototype.hasOwnProperty,oA=Object.prototype,aA=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),lA=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||oA)},cA=aA,pA=Object.prototype.hasOwnProperty,uA=qw,dA=Uj,hA=function(e,t){var r=tA(e),n=!r&&eA(e),s=!r&&!n&&rA(e),i=!r&&!n&&!s&&sA(e),o=r||n||s||i,a=o?Qj(e.length,String):[],l=a.length;for(var c in e)!t&&!iA.call(e,c)||o&&("length"==c||s&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||nA(c,l))||a.push(c);return a},fA=function(e,t,r){var n=t(e);return Ej(e)?n:Sj(n,r(e))},mA=Pj,yA=function(e){return function(e){return null!=e&&dA(e.length)&&!uA(e)}(e)?hA(e):function(e){if(!lA(e))return cA(e);var t=[];for(var r in Object(e))pA.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)},gA=function(e){return fA(e,yA,mA)},vA=Object.prototype.hasOwnProperty,bA=Qw(yw,"DataView"),xA=A$,wA=Qw(yw,"Promise"),$A=Qw(yw,"Set"),SA=Qw(yw,"WeakMap"),EA=Ow,kA=Uw,OA=kA(bA),jA=kA(xA),AA=kA(wA),PA=kA($A),TA=kA(SA),CA=EA;(bA&&"[object DataView]"!=CA(new bA(new ArrayBuffer(1)))||xA&&"[object Map]"!=CA(new xA)||wA&&"[object Promise]"!=CA(wA.resolve())||$A&&"[object Set]"!=CA(new $A)||SA&&"[object WeakMap]"!=CA(new SA))&&(CA=function(e){var t=EA(e),r="[object Object]"==t?e.constructor:void 0,n=r?kA(r):"";if(n)switch(n){case OA:return"[object DataView]";case jA:return"[object Map]";case AA:return"[object Promise]";case PA:return"[object Set]";case TA:return"[object WeakMap]"}return t});var IA=cj,RA=mj,_A=function(e,t,r,n,s,i,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new yj(e),new yj(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return gj(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=bj;case"[object Set]":var l=1&n;if(a||(a=xj),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var p=vj(a(e),a(t),n,s,i,o);return o.delete(e),p;case"[object Symbol]":if($j)return $j.call(e)==$j.call(t)}return!1},FA=function(e,t,r,n,s,i){var o=1&r,a=gA(e),l=a.length;if(l!=gA(t).length&&!o)return!1;for(var c=l;c--;){var p=a[c];if(!(o?p in t:vA.call(t,p)))return!1}var u=i.get(e),d=i.get(t);if(u&&d)return u==t&&d==e;var h=!0;i.set(e,t),i.set(t,e);for(var f=o;++c<l;){var m=e[p=a[c]],y=t[p];if(n)var g=o?n(y,m,p,t,e,i):n(m,y,p,e,t,i);if(!(void 0===g?m===y||s(m,y,r,n,i):g)){h=!1;break}f||(f="constructor"==p)}if(h&&!f){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h},DA=CA,MA=dw,qA=Bj,LA=Xj,BA="[object Object]",NA=Object.prototype.hasOwnProperty,UA=jw,zA=function e(t,r,n,s,i){return t===r||(null==t||null==r||!UA(t)&&!UA(r)?t!=t&&r!=r:function(e,t,r,n,s,i){var o=MA(e),a=MA(t),l=o?"[object Array]":DA(e),c=a?"[object Array]":DA(t),p=(l="[object Arguments]"==l?BA:l)==BA,u=(c="[object Arguments]"==c?BA:c)==BA,d=l==c;if(d&&qA(e)){if(!qA(t))return!1;o=!0,p=!1}if(d&&!p)return i||(i=new IA),o||LA(e)?RA(e,t,r,n,s,i):_A(e,t,l,r,n,s,i);if(!(1&r)){var h=p&&NA.call(e,"__wrapped__"),f=u&&NA.call(t,"__wrapped__");if(h||f){var m=h?e.value():e,y=f?t.value():t;return i||(i=new IA),s(m,y,r,n,i)}}return!!d&&(i||(i=new IA),FA(e,t,r,n,s,i))}(t,r,n,s,e,i))},HA=class e{constructor(e,t){this.key=e,this.value=t}clone(){const t=new e;return this.key&&(t.key=this.key.clone()),this.value&&(t.value=this.value.clone()),t}},VA=function(e){if("function"!=typeof e)throw new TypeError("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}};const WA=VA;function GA(e){return"string"==typeof e?t=>t.element===e:e.constructor&&e.extend?t=>t instanceof e:e}let JA=class e{constructor(e){this.elements=e||[]}toValue(){return this.elements.map((e=>e.toValue()))}map(e,t){return this.elements.map(e,t)}flatMap(e,t){return this.map(e,t).reduce(((e,t)=>e.concat(t)),[])}compactMap(e,t){const r=[];return this.forEach((n=>{const s=e.bind(t)(n);s&&r.push(s)})),r}filter(t,r){return t=GA(t),new e(this.elements.filter(t,r))}reject(t,r){return t=GA(t),new e(this.elements.filter(WA(t),r))}find(e,t){return e=GA(e),this.elements.find(e,t)}forEach(e,t){this.elements.forEach(e,t)}reduce(e,t){return this.elements.reduce(e,t)}includes(e){return this.elements.some((t=>t.equals(e)))}shift(){return this.elements.shift()}unshift(e){this.elements.unshift(this.refract(e))}push(e){return this.elements.push(this.refract(e)),this}add(e){this.push(e)}get(e){return this.elements[e]}getValue(e){const t=this.elements[e];if(t)return t.toValue()}get length(){return this.elements.length}get isEmpty(){return 0===this.elements.length}get first(){return this.elements[0]}};"undefined"!=typeof Symbol&&(JA.prototype[Symbol.iterator]=function(){return this.elements[Symbol.iterator]()});var KA=JA;const ZA=function(e,t){return zA(e,t)},YA=HA,XA=KA;var QA=class e{constructor(e,t,r){t&&(this.meta=t),r&&(this.attributes=r),this.content=e}freeze(){Object.isFrozen(this)||(this._meta&&(this.meta.parent=this,this.meta.freeze()),this._attributes&&(this.attributes.parent=this,this.attributes.freeze()),this.children.forEach((e=>{e.parent=this,e.freeze()}),this),this.content&&Array.isArray(this.content)&&Object.freeze(this.content),Object.freeze(this))}primitive(){}clone(){const e=new this.constructor;return e.element=this.element,this.meta.length&&(e._meta=this.meta.clone()),this.attributes.length&&(e._attributes=this.attributes.clone()),this.content?this.content.clone?e.content=this.content.clone():Array.isArray(this.content)?e.content=this.content.map((e=>e.clone())):e.content=this.content:e.content=this.content,e}toValue(){return this.content instanceof e?this.content.toValue():this.content instanceof YA?{key:this.content.key.toValue(),value:this.content.value?this.content.value.toValue():void 0}:this.content&&this.content.map?this.content.map((e=>e.toValue()),this):this.content}toRef(e){if(""===this.id.toValue())throw Error("Cannot create reference to an element that does not contain an ID");const t=new this.RefElement(this.id.toValue());return e&&(t.path=e),t}findRecursive(...e){if(arguments.length>1&&!this.isFrozen)throw new Error("Cannot find recursive with multiple element names without first freezing the element. Call `element.freeze()`");const t=e.pop();let r=new XA;const n=(e,t)=>(e.push(t),e),s=(e,r)=>{r.element===t&&e.push(r);const i=r.findRecursive(t);return i&&i.reduce(n,e),r.content instanceof YA&&(r.content.key&&s(e,r.content.key),r.content.value&&s(e,r.content.value)),e};return this.content&&(this.content.element&&s(r,this.content),Array.isArray(this.content)&&this.content.reduce(s,r)),e.isEmpty||(r=r.filter((t=>{let r=t.parents.map((e=>e.element));for(const t in e){const n=e[t],s=r.indexOf(n);if(-1===s)return!1;r=r.splice(0,s)}return!0}))),r}set(e){return this.content=e,this}equals(e){return ZA(this.toValue(),e)}getMetaProperty(e,t){if(!this.meta.hasKey(e)){if(this.isFrozen){const e=this.refract(t);return e.freeze(),e}this.meta.set(e,t)}return this.meta.get(e)}setMetaProperty(e,t){this.meta.set(e,t)}get element(){return this._storedElement||"element"}set element(e){this._storedElement=e}get content(){return this._content}set content(t){if(t instanceof e)this._content=t;else if(t instanceof XA)this.content=t.elements;else if("string"==typeof t||"number"==typeof t||"boolean"==typeof t||"null"===t||null==t)this._content=t;else if(t instanceof YA)this._content=t;else if(Array.isArray(t))this._content=t.map(this.refract);else{if("object"!=typeof t)throw new Error("Cannot set content to given value");this._content=Object.keys(t).map((e=>new this.MemberElement(e,t[e])))}}get meta(){if(!this._meta){if(this.isFrozen){const e=new this.ObjectElement;return e.freeze(),e}this._meta=new this.ObjectElement}return this._meta}set meta(e){e instanceof this.ObjectElement?this._meta=e:this.meta.set(e||{})}get attributes(){if(!this._attributes){if(this.isFrozen){const e=new this.ObjectElement;return e.freeze(),e}this._attributes=new this.ObjectElement}return this._attributes}set attributes(e){e instanceof this.ObjectElement?this._attributes=e:this.attributes.set(e||{})}get id(){return this.getMetaProperty("id","")}set id(e){this.setMetaProperty("id",e)}get classes(){return this.getMetaProperty("classes",[])}set classes(e){this.setMetaProperty("classes",e)}get title(){return this.getMetaProperty("title","")}set title(e){this.setMetaProperty("title",e)}get description(){return this.getMetaProperty("description","")}set description(e){this.setMetaProperty("description",e)}get links(){return this.getMetaProperty("links",[])}set links(e){this.setMetaProperty("links",e)}get isFrozen(){return Object.isFrozen(this)}get parents(){let{parent:e}=this;const t=new XA;for(;e;)t.push(e),e=e.parent;return t}get children(){if(Array.isArray(this.content))return new XA(this.content);if(this.content instanceof YA){const e=new XA([this.content.key]);return this.content.value&&e.push(this.content.value),e}return this.content instanceof e?new XA([this.content]):new XA}get recursiveChildren(){const e=new XA;return this.children.forEach((t=>{e.push(t),t.recursiveChildren.forEach((t=>{e.push(t)}))})),e}};const eP=QA;const tP=QA,rP=QA,nP=QA,sP=VA,iP=QA,oP=KA;let aP=class extends iP{constructor(e,t,r){super(e||[],t,r),this.element="array"}primitive(){return"array"}get(e){return this.content[e]}getValue(e){const t=this.get(e);if(t)return t.toValue()}getIndex(e){return this.content[e]}set(e,t){return this.content[e]=this.refract(t),this}remove(e){const t=this.content.splice(e,1);return t.length?t[0]:null}map(e,t){return this.content.map(e,t)}flatMap(e,t){return this.map(e,t).reduce(((e,t)=>e.concat(t)),[])}compactMap(e,t){const r=[];return this.forEach((n=>{const s=e.bind(t)(n);s&&r.push(s)})),r}filter(e,t){return new oP(this.content.filter(e,t))}reject(e,t){return this.filter(sP(e),t)}reduce(e,t){let r,n;void 0!==t?(r=0,n=this.refract(t)):(r=1,n="object"===this.primitive()?this.first.value:this.first);for(let t=r;t<this.length;t+=1){const r=this.content[t];n="object"===this.primitive()?this.refract(e(n,r.value,r.key,r,this)):this.refract(e(n,r,t,this))}return n}forEach(e,t){this.content.forEach(((r,n)=>{e.bind(t)(r,this.refract(n))}))}shift(){return this.content.shift()}unshift(e){this.content.unshift(this.refract(e))}push(e){return this.content.push(this.refract(e)),this}add(e){this.push(e)}findElements(e,t){const r=t||{},n=!!r.recursive,s=void 0===r.results?[]:r.results;return this.forEach(((t,r,i)=>{n&&void 0!==t.findElements&&t.findElements(e,{results:s,recursive:n}),e(t,r,i)&&s.push(t)})),s}find(e){return new oP(this.findElements(e,{recursive:!0}))}findByElement(e){return this.find((t=>t.element===e))}findByClass(e){return this.find((t=>t.classes.includes(e)))}getById(e){return this.find((t=>t.id.toValue()===e)).first}includes(e){return this.content.some((t=>t.equals(e)))}contains(e){return this.includes(e)}empty(){return new this.constructor([])}"fantasy-land/empty"(){return this.empty()}concat(e){return new this.constructor(this.content.concat(e.content))}"fantasy-land/concat"(e){return this.concat(e)}"fantasy-land/map"(e){return new this.constructor(this.map(e))}"fantasy-land/chain"(e){return this.map((t=>e(t)),this).reduce(((e,t)=>e.concat(t)),this.empty())}"fantasy-land/filter"(e){return new this.constructor(this.content.filter(e))}"fantasy-land/reduce"(e,t){return this.content.reduce(e,t)}get length(){return this.content.length}get isEmpty(){return 0===this.content.length}get first(){return this.getIndex(0)}get second(){return this.getIndex(1)}get last(){return this.getIndex(this.length-1)}};aP.empty=function(){return new this},aP["fantasy-land/empty"]=aP.empty,"undefined"!=typeof Symbol&&(aP.prototype[Symbol.iterator]=function(){return this.content[Symbol.iterator]()});var lP=aP;const cP=HA,pP=QA;var uP=class extends pP{constructor(e,t,r,n){super(new cP,r,n),this.element="member",this.key=e,this.value=t}get key(){return this.content.key}set key(e){this.content.key=this.refract(e)}get value(){return this.content.value}set value(e){this.content.value=this.refract(e)}};const dP=VA,hP=KA;var fP=class e extends hP{map(e,t){return this.elements.map((r=>e.bind(t)(r.value,r.key,r)))}filter(t,r){return new e(this.elements.filter((e=>t.bind(r)(e.value,e.key,e))))}reject(e,t){return this.filter(dP(e.bind(t)))}forEach(e,t){return this.elements.forEach(((r,n)=>{e.bind(t)(r.value,r.key,r,n)}))}keys(){return this.map(((e,t)=>t.toValue()))}values(){return this.map((e=>e.toValue()))}};const mP=VA,yP=Fw,gP=lP,vP=uP,bP=fP;const xP=QA,wP=QA,$P=QA,SP=class extends eP{constructor(e,t,r){super(e||null,t,r),this.element="null"}primitive(){return"null"}set(){return new Error("Cannot set the value of null")}},EP=class extends tP{constructor(e,t,r){super(e,t,r),this.element="string"}primitive(){return"string"}get length(){return this.content.length}},kP=class extends rP{constructor(e,t,r){super(e,t,r),this.element="number"}primitive(){return"number"}},OP=class extends nP{constructor(e,t,r){super(e,t,r),this.element="boolean"}primitive(){return"boolean"}},jP=lP,AP=uP,PP=class extends gP{constructor(e,t,r){super(e||[],t,r),this.element="object"}primitive(){return"object"}toValue(){return this.content.reduce(((e,t)=>(e[t.key.toValue()]=t.value?t.value.toValue():void 0,e)),{})}get(e){const t=this.getMember(e);if(t)return t.value}getMember(e){if(void 0!==e)return this.content.find((t=>t.key.toValue()===e))}remove(e){let t=null;return this.content=this.content.filter((r=>r.key.toValue()!==e||(t=r,!1))),t}getKey(e){const t=this.getMember(e);if(t)return t.key}set(e,t){if(yP(e))return Object.keys(e).forEach((t=>{this.set(t,e[t])})),this;const r=e,n=this.getMember(r);return n?n.value=t:this.content.push(new vP(r,t)),this}keys(){return this.content.map((e=>e.key.toValue()))}values(){return this.content.map((e=>e.value.toValue()))}hasKey(e){return this.content.some((t=>t.key.equals(e)))}items(){return this.content.map((e=>[e.key.toValue(),e.value.toValue()]))}map(e,t){return this.content.map((r=>e.bind(t)(r.value,r.key,r)))}compactMap(e,t){const r=[];return this.forEach(((n,s,i)=>{const o=e.bind(t)(n,s,i);o&&r.push(o)})),r}filter(e,t){return new bP(this.content).filter(e,t)}reject(e,t){return this.filter(mP(e),t)}forEach(e,t){return this.content.forEach((r=>e.bind(t)(r.value,r.key,r)))}},TP=class extends wP{constructor(e,t,r){super(e||[],t,r),this.element="ref",this.path||(this.path="element")}get path(){return this.attributes.get("path")}set path(e){this.attributes.set("path",e)}},CP=KA,IP=fP,RP=HA;function _P(e){return e instanceof $P?e:"string"==typeof e?new EP(e):"number"==typeof e?new kP(e):"boolean"==typeof e?new OP(e):null===e?new SP:Array.isArray(e)?new jP(e.map(_P)):"object"==typeof e?new PP(e):e}$P.prototype.ObjectElement=PP,$P.prototype.RefElement=TP,$P.prototype.MemberElement=AP,$P.prototype.refract=_P,CP.prototype.refract=_P;var FP={Element:$P,NullElement:SP,StringElement:EP,NumberElement:kP,BooleanElement:OP,ArrayElement:jP,MemberElement:AP,ObjectElement:PP,LinkElement:class extends xP{constructor(e,t,r){super(e||[],t,r),this.element="link"}get relation(){return this.attributes.get("relation")}set relation(e){this.attributes.set("relation",e)}get href(){return this.attributes.get("href")}set href(e){this.attributes.set("href",e)}},RefElement:TP,refract:_P,ArraySlice:CP,ObjectSlice:IP,KeyValuePair:RP};const DP=function(e){return null===e},MP=function(e){return"string"==typeof e||!KO(e)&&ZO(e)&&"[object String]"==JO(e)},qP=function(e){return"number"==typeof e||XO(e)&&"[object Number]"==YO(e)},LP=function(e){return!0===e||!1===e||ej(e)&&"[object Boolean]"==QO(e)},BP=Fw,NP=class{constructor(e){this.namespace=e||new this.Namespace}serialise(e){if(!(e instanceof this.namespace.elements.Element))throw new TypeError(`Given element \`${e}\` is not an Element instance`);const t={element:e.element};e._meta&&e._meta.length>0&&(t.meta=this.serialiseObject(e.meta)),e._attributes&&e._attributes.length>0&&(t.attributes=this.serialiseObject(e.attributes));const r=this.serialiseContent(e.content);return void 0!==r&&(t.content=r),t}deserialise(e){if(!e.element)throw new Error("Given value is not an object containing an element name");const t=new(this.namespace.getElementClass(e.element));t.element!==e.element&&(t.element=e.element),e.meta&&this.deserialiseObject(e.meta,t.meta),e.attributes&&this.deserialiseObject(e.attributes,t.attributes);const r=this.deserialiseContent(e.content);return void 0===r&&null!==t.content||(t.content=r),t}serialiseContent(e){if(e instanceof this.namespace.elements.Element)return this.serialise(e);if(e instanceof this.namespace.KeyValuePair){const t={key:this.serialise(e.key)};return e.value&&(t.value=this.serialise(e.value)),t}if(e&&e.map){if(0===e.length)return;return e.map(this.serialise,this)}return e}deserialiseContent(e){if(e){if(e.element)return this.deserialise(e);if(e.key){const t=new this.namespace.KeyValuePair(this.deserialise(e.key));return e.value&&(t.value=this.deserialise(e.value)),t}if(e.map)return e.map(this.deserialise,this)}return e}serialiseObject(e){const t={};if(e.forEach(((e,r)=>{e&&(t[r.toValue()]=this.serialise(e))})),0!==Object.keys(t).length)return t}deserialiseObject(e,t){Object.keys(e).forEach((r=>{t.set(r,this.deserialise(e[r]))}))}},UP=FP;let zP=class{constructor(e){this.elementMap={},this.elementDetection=[],this.Element=UP.Element,this.KeyValuePair=UP.KeyValuePair,e&&e.noDefault||this.useDefault(),this._attributeElementKeys=[],this._attributeElementArrayKeys=[]}use(e){return e.namespace&&e.namespace({base:this}),e.load&&e.load({base:this}),this}useDefault(){return this.register("null",UP.NullElement).register("string",UP.StringElement).register("number",UP.NumberElement).register("boolean",UP.BooleanElement).register("array",UP.ArrayElement).register("object",UP.ObjectElement).register("member",UP.MemberElement).register("ref",UP.RefElement).register("link",UP.LinkElement),this.detect(DP,UP.NullElement,!1).detect(MP,UP.StringElement,!1).detect(qP,UP.NumberElement,!1).detect(LP,UP.BooleanElement,!1).detect(Array.isArray,UP.ArrayElement,!1).detect(BP,UP.ObjectElement,!1),this}register(e,t){return this._elements=void 0,this.elementMap[e]=t,this}unregister(e){return this._elements=void 0,delete this.elementMap[e],this}detect(e,t,r){return void 0===r||r?this.elementDetection.unshift([e,t]):this.elementDetection.push([e,t]),this}toElement(e){if(e instanceof this.Element)return e;let t;for(let r=0;r<this.elementDetection.length;r+=1){const n=this.elementDetection[r][0],s=this.elementDetection[r][1];if(n(e)){t=new s(e);break}}return t}getElementClass(e){const t=this.elementMap[e];return void 0===t?this.Element:t}fromRefract(e){return this.serialiser.deserialise(e)}toRefract(e){return this.serialiser.serialise(e)}get elements(){return void 0===this._elements&&(this._elements={Element:this.Element},Object.keys(this.elementMap).forEach((e=>{const t=e[0].toUpperCase()+e.substr(1);this._elements[t]=this.elementMap[e]}))),this._elements}get serialiser(){return new NP(this)}};NP.prototype.Namespace=zP;var HP=zP,VP=FP.ArraySlice,WP=FP.Element,GP=FP.StringElement,JP=FP.NumberElement,KP=FP.BooleanElement,ZP=FP.NullElement,YP=FP.ArrayElement,XP=FP.ObjectElement,QP=FP.MemberElement,eT=FP.RefElement,tT=FP.LinkElement,rT=FP.refract;const nT=class extends GP{constructor(e,t,r){super(e,t,r),this.element="annotation"}get code(){return this.attributes.get("code")}set code(e){this.attributes.set("code",e)}},sT=class extends GP{constructor(e,t,r){super(e,t,r),this.element="comment"}},iT=class extends YP{constructor(e,t,r){super(e,t,r),this.element="parseResult"}get api(){return this.children.filter((e=>e.classes.contains("api"))).first}get results(){return this.children.filter((e=>e.classes.contains("result")))}get result(){return this.results.first}get annotations(){return this.children.filter((e=>"annotation"===e.element))}get warnings(){return this.children.filter((e=>"annotation"===e.element&&e.classes.contains("warning")))}get errors(){return this.children.filter((e=>"annotation"===e.element&&e.classes.contains("error")))}get isEmpty(){return this.children.reject((e=>"annotation"===e.element)).isEmpty}replaceResult(e){const{result:t}=this;if(rO(t))return!1;const r=this.content.findIndex((e=>e===t));return-1!==r&&(this.content[r]=e,!0)}},oT=class extends YP{constructor(e,t,r){super(e,t,r),this.element="sourceMap"}get positionStart(){return this.children.filter((e=>e.classes.contains("position"))).get(0)}get positionEnd(){return this.children.filter((e=>e.classes.contains("position"))).get(1)}set position(e){if(null===e)return;const t=new YP([e.start.row,e.start.column,e.start.char]),r=new YP([e.end.row,e.end.column,e.end.char]);t.classes.push("position"),r.classes.push("position"),this.push(t).push(r)}};class aT extends HP{constructor(){super(),this.register("annotation",nT),this.register("comment",sT),this.register("parseResult",iT),this.register("sourceMap",oT)}}const lT=new aT,cT=e=>{const t=new aT;return kO(e)&&t.use(e),t};var pT,uT={exports:{}};pT=uT,function(){var e,t,r,n,s,i="properties",o="deepProperties",a="propertyDescriptors",l="staticProperties",c="staticDeepProperties",p="staticPropertyDescriptors",u="configuration",d="deepConfiguration",h="deepProps",f="deepStatics",m="deepConf",y="initializers",g="methods",v="composers",b="compose";function x(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[])}function w(e,t){return Array.prototype.slice.call(arguments,2).reduce(e,t)}var $=w.bind(0,(function(e,t){if(t)for(var r=x(t),n=0;n<r.length;n+=1)Object.defineProperty(e,r[n],Object.getOwnPropertyDescriptor(t,r[n]));return e}));function S(e){return"function"==typeof e}function E(e){return e&&"object"==typeof e||S(e)}function k(e){return e&&"object"==typeof e&&e.__proto__==Object.prototype}var O=w.bind(0,(function t(r,n){if(n===e)return r;if(Array.isArray(n))return(Array.isArray(r)?r:[]).concat(n);if(!k(n))return n;for(var s,i,o=x(n),a=0;a<o.length;)s=o[a++],(i=Object.getOwnPropertyDescriptor(n,s)).hasOwnProperty("value")?i.value!==e&&(r[s]=t(k(r[s])||Array.isArray(n[s])?r[s]:{},n[s])):Object.defineProperty(r,s,i);return r}));function j(){return(t=Array.prototype.concat.apply([],arguments).filter((function(e,t,r){return S(e)&&r.indexOf(e)===t}))).length?t:e}function A(e,r){function n(t,n){E(r[t])&&(E(e[t])||(e[t]={}),(n||$)(e[t],r[t]))}function s(n){(t=j(e[n],r[n]))&&(e[n]=t)}return r&&E(r=r[b]||r)&&(n(g),n(i),n(o,O),n(a),n(l),n(c,O),n(p),n(u),n(d,O),s(y),s(v)),e}function P(){return function(n){return t=function t(r){var n,s,l=t[b]||{},c={__proto__:l[g]},p=l[y],u=Array.prototype.slice.apply(arguments),d=l[o];if(d&&O(c,d),(d=l[i])&&$(c,d),(d=l[a])&&Object.defineProperties(c,d),!p||!p.length)return c;for(r===e&&(r={}),l=0;l<p.length;)S(n=p[l++])&&(c=(s=n.call(c,r,{instance:c,stamp:t,args:u}))===e?c:s);return c},(r=n[c])&&O(t,r),(r=n[l])&&$(t,r),(r=n[p])&&Object.defineProperties(t,r),r=S(t[b])?t[b]:P,$(t[b]=function(){return r.apply(this,arguments)},n),t}(Array.prototype.concat.apply([this],arguments).reduce(A,{}))}function T(e){return S(e)&&S(e[b])}var C={};function I(s,i){return function(){return(n={})[s]=i.apply(e,Array.prototype.concat.apply([{}],arguments)),((t=this)&&t[b]||r).call(t,n)}}C[g]=I(g,$),C[i]=C.props=I(i,$),C[y]=C.init=I(y,j),C[v]=I(v,j),C[o]=C[h]=I(o,O),C[l]=C.statics=I(l,$),C[c]=C[f]=I(c,O),C[u]=C.conf=I(u,$),C[d]=C[m]=I(d,O),C[a]=I(a,$),C[p]=I(p,$),r=C[b]=$((function(){for(var x,w,S=0,k=[],A=arguments,C=this;S<A.length;)E(x=A[S++])&&k.push(T(x)?x:((n={})[g]=(w=x)[g]||e,r=w.props,n[i]=E((t=w[i])||r)?$({},r,t):e,n[y]=j(w.init,w[y]),n[v]=j(w[v]),r=w[h],n[o]=E((t=w[o])||r)?O({},r,t):e,n[a]=w[a],r=w.statics,n[l]=E((t=w[l])||r)?$({},r,t):e,r=w[f],n[c]=E((t=w[c])||r)?O({},r,t):e,t=w[p],n[p]=E((r=w.name&&{name:{value:w.name}})||t)?$({},t,r):e,r=w.conf,n[u]=E((t=w[u])||r)?$({},r,t):e,r=w[m],n[d]=E((t=w[d])||r)?O({},r,t):e,n));if(x=P.apply(C||s,k),C&&k.unshift(C),Array.isArray(A=x[b][v]))for(S=0;S<A.length;)x=T(C=A[S++]({stamp:x,composables:k}))?C:x;return x}),C),C.create=function(){return this.apply(e,arguments)},(n={})[l]=C,s=P(n),r[b]=r.bind(),r.version="4.3.2",pT.exports=r}();const dT=_t(uT.exports);var hT=Xs,fT=fi.indexOf,mT=zu,yT=tr([].indexOf),gT=!!yT&&1/yT([1],1,-0)<0;hT({target:"Array",proto:!0,forced:gT||!mT("indexOf")},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return gT?yT(this,e,t)||0:fT(this,e,t)}});var vT=np("Array").indexOf,bT=Lr,xT=vT,wT=Array.prototype;const $T=_t((function(e){var t=e.indexOf;return e===wT||bT(wT,e)&&t===wT.indexOf?xT:t}));function ST(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Ai(e);for(n=0;n<i.length;n++)r=i[n],$T(t).call(t,r)>=0||(s[r]=e[r]);return s}(e,t);if(Zc){var i=Zc(e);for(n=0;n<i.length;n++)r=i[n],$T(t).call(t,r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const ET=(e,t,r)=>{const n=e[t];if(null!=n){if(!r&&"function"==typeof n)return n;const e=r?n.leave:n.enter;if("function"==typeof e)return e}else{const n=r?e.leave:e.enter;if(null!=n){if("function"==typeof n)return n;const e=n[t];if("function"==typeof e)return e}}return null},kT={},OT=e=>null==e?void 0:e.type,jT=e=>"string"==typeof OT(e),AT=(e,{visitFnGetter:t=ET,nodeTypeGetter:r=OT}={})=>{const n=new Array(e.length);return{enter(s,...i){for(let o=0;o<e.length;o+=1)if(null==n[o]){const a=t(e[o],r(s),!1);if("function"==typeof a){const t=a.call(e[o],s,...i);if(!1===t)n[o]=s;else if(t===kT)n[o]=kT;else if(void 0!==t)return t}}},leave(s,...i){for(let o=0;o<e.length;o+=1)if(null==n[o]){const a=t(e[o],r(s),!0);if("function"==typeof a){const t=a.call(e[o],s,...i);if(t===kT)n[o]=kT;else if(void 0!==t&&!1!==t)return t}}else n[o]===s&&(n[o]=null)}}},PT=(e,t,{keyMap:r=null,state:n={},breakSymbol:s=kT,deleteNodeSymbol:i=null,skipVisitingNodeSymbol:o=!1,visitFnGetter:a=ET,nodeTypeGetter:l=OT,nodePredicate:c=jT,detectCycles:p=!0}={})=>{const u=r||{};let d,h,f=Array.isArray(e),m=[e],y=-1,g=[];const v=[],b=[];let x=e;do{y+=1;const e=y===m.length;let r,w;const $=e&&0!==g.length;if(e){if(r=0===b.length?void 0:v.pop(),w=h,h=b.pop(),$){w=f?w.slice():Object.create(Object.getPrototypeOf(w),Object.getOwnPropertyDescriptors(w));let e=0;for(let t=0;t<g.length;t+=1){let r=g[t][0];const n=g[t][1];f&&(r-=e),f&&n===i?(w.splice(r,1),e+=1):w[r]=n}}y=d.index,m=d.keys,g=d.edits,f=d.inArray,d=d.prev}else{if(r=h?f?y:m[y]:void 0,w=h?h[r]:x,w===i||void 0===w)continue;h&&v.push(r)}if(b.includes(w))continue;let S;if(!Array.isArray(w)){if(!c(w))throw new Error(`Invalid AST Node:  ${JSON.stringify(w)}`);if(p&&b.includes(w)){v.pop();continue}const i=a(t,l(w),e);if(i){for(const[e,r]of Object.entries(n))t[e]=r;if(S=i.call(t,w,r,h,v,b),S===s)break;if(S===o){if(!e){v.pop();continue}}else if(void 0!==S&&(g.push([r,S]),!e)){if(!c(S)){v.pop();continue}w=S}}}void 0===S&&$&&g.push([r,w]),e||(d={inArray:f,index:y,keys:m,edits:g,prev:d},f=Array.isArray(w),m=f?w:u[l(w)]||[],y=-1,g=[],h&&b.push(h),h=w)}while(void 0!==d);return 0!==g.length&&([,x]=g[g.length-1]),x};PT[Symbol.for("nodejs.util.promisify.custom")]=async(e,t,{keyMap:r=null,state:n={},breakSymbol:s=kT,deleteNodeSymbol:i=null,skipVisitingNodeSymbol:o=!1,visitFnGetter:a=ET,nodeTypeGetter:l=OT,nodePredicate:c=jT,detectCycles:p=!0}={})=>{const u=r||{};let d,h,f=Array.isArray(e),m=[e],y=-1,g=[];const v=[],b=[];let x=e;do{y+=1;const e=y===m.length;let r,w;const $=e&&0!==g.length;if(e){if(r=0===b.length?void 0:v.pop(),w=h,h=b.pop(),$){w=f?w.slice():Object.create(Object.getPrototypeOf(w),Object.getOwnPropertyDescriptors(w));let e=0;for(let t=0;t<g.length;t+=1){let r=g[t][0];const n=g[t][1];f&&(r-=e),f&&n===i?(w.splice(r,1),e+=1):w[r]=n}}y=d.index,m=d.keys,g=d.edits,f=d.inArray,d=d.prev}else{if(r=h?f?y:m[y]:void 0,w=h?h[r]:x,w===i||void 0===w)continue;h&&v.push(r)}let S;if(!Array.isArray(w)){if(!c(w))throw new Error(`Invalid AST Node:  ${JSON.stringify(w)}`);if(p&&b.includes(w)){v.pop();continue}const i=a(t,l(w),e);if(i){for(const[e,r]of Object.entries(n))t[e]=r;if(S=await i.call(t,w,r,h,v,b),S===s)break;if(S===o){if(!e){v.pop();continue}}else if(void 0!==S&&(g.push([r,S]),!e)){if(!c(S)){v.pop();continue}w=S}}}void 0===S&&$&&g.push([r,w]),e||(d={inArray:f,index:y,keys:m,edits:g,prev:d},f=Array.isArray(w),m=f?w:u[l(w)]||[],y=-1,g=[],h&&b.push(h),h=w)}while(void 0!==d);return 0!==g.length&&([,x]=g[g.length-1]),x};const TT=(e,t)=>"function"==typeof(null==t?void 0:t[e]),CT=e=>null!=e&&Object.prototype.hasOwnProperty.call(e,"_storedElement")&&Object.prototype.hasOwnProperty.call(e,"_content"),IT=(e,t)=>{var r;return(null==t||null===(r=t.primitive)||void 0===r?void 0:r.call(t))===e},RT=(e,t)=>{var r,n;return(null==t||null===(r=t.classes)||void 0===r||null===(n=r.includes)||void 0===n?void 0:n.call(r,e))||!1},_T=(e,t)=>(null==t?void 0:t.element)===e,FT=e=>e({hasMethod:TT,hasBasicElementProps:CT,primitiveEq:IT,isElementType:_T,hasClass:RT}),DT=FT((({hasBasicElementProps:e,primitiveEq:t})=>r=>r instanceof WP||e(r)&&t(void 0,r))),MT=FT((({hasBasicElementProps:e,primitiveEq:t})=>r=>r instanceof GP||e(r)&&t("string",r))),qT=FT((({hasBasicElementProps:e,primitiveEq:t})=>r=>r instanceof JP||e(r)&&t("number",r))),LT=FT((({hasBasicElementProps:e,primitiveEq:t})=>r=>r instanceof ZP||e(r)&&t("null",r))),BT=FT((({hasBasicElementProps:e,primitiveEq:t})=>r=>r instanceof KP||e(r)&&t("boolean",r))),NT=FT((({hasBasicElementProps:e,primitiveEq:t,hasMethod:r})=>n=>n instanceof XP||e(n)&&t("object",n)&&r("keys",n)&&r("values",n)&&r("items",n))),UT=FT((({hasBasicElementProps:e,primitiveEq:t,hasMethod:r})=>n=>n instanceof YP&&!(n instanceof XP)||e(n)&&t("array",n)&&r("push",n)&&r("unshift",n)&&r("map",n)&&r("reduce",n))),zT=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof QP||e(n)&&t("member",n)&&r(void 0,n))),HT=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof tT||e(n)&&t("link",n)&&r(void 0,n))),VT=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof eT||e(n)&&t("ref",n)&&r(void 0,n))),WT=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof nT||e(n)&&t("annotation",n)&&r("array",n))),GT=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof sT||e(n)&&t("comment",n)&&r("string",n))),JT=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof iT||e(n)&&t("parseResult",n)&&r("array",n))),KT=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof oT||e(n)&&t("sourceMap",n)&&r("array",n))),ZT=e=>_T("object",e)||_T("array",e)||_T("boolean",e)||_T("number",e)||_T("string",e)||_T("null",e)||_T("member",e),YT=e=>{var t,r;return KT(null==e||null===(t=e.meta)||void 0===t||null===(r=t.get)||void 0===r?void 0:r.call(t,"sourceMap"))},XT=(e,t)=>0===e.length||SS(qO(t.classes.toValue()),e),QT=Object.freeze(Object.defineProperty({__proto__:null,hasElementSourceMap:YT,includesClasses:XT,includesSymbols:(e,t)=>{if(0===e.length)return!0;const r=t.attributes.get("symbols");return!!UT(r)&&SS(qO(r.toValue()),e)},isAnnotationElement:WT,isArrayElement:UT,isBooleanElement:BT,isCommentElement:GT,isElement:DT,isLinkElement:HT,isMemberElement:zT,isNullElement:LT,isNumberElement:qT,isObjectElement:NT,isParseResultElement:JT,isPrimitiveElement:ZT,isRefElement:VT,isSourceMapElement:KT,isStringElement:MT},Symbol.toStringTag,{value:"Module"})),eC=["keyMap"],tC=["keyMap"];function rC(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function nC(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?rC(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rC(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const sC=e=>NT(e)?"ObjectElement":UT(e)?"ArrayElement":zT(e)?"MemberElement":MT(e)?"StringElement":BT(e)?"BooleanElement":qT(e)?"NumberElement":LT(e)?"NullElement":HT(e)?"LinkElement":VT(e)?"RefElement":void 0,iC=qE(sC,fO),oC={ObjectElement:["content"],ArrayElement:["content"],MemberElement:["key","value"],StringElement:[],BooleanElement:[],NumberElement:[],NullElement:[],RefElement:[],LinkElement:[],Annotation:[],Comment:[],ParseResultElement:["content"],SourceMap:["content"]},aC=dT({props:{result:[],predicate:lS,returnOnTrue:void 0,returnOnFalse:void 0},init({predicate:e=this.predicate,returnOnTrue:t=this.returnOnTrue,returnOnFalse:r=this.returnOnFalse}={}){this.result=[],this.predicate=e,this.returnOnTrue=t,this.returnOnFalse=r},methods:{enter(e){return this.predicate(e)?(this.result.push(e),this.returnOnTrue):this.returnOnFalse}}}),lC=(e,t,r={})=>{let{keyMap:n=oC}=r,s=ST(r,eC);return PT(e,t,nC({keyMap:n,nodeTypeGetter:sC,nodePredicate:iC},s))};lC[Symbol.for("nodejs.util.promisify.custom")]=async(e,t,r={})=>{let{keyMap:n=oC}=r,s=ST(r,tC);return PT[Symbol.for("nodejs.util.promisify.custom")](e,t,nC({keyMap:n,nodeTypeGetter:sC,nodePredicate:iC},s))};const cC=["keyMap"],pC=["keyMap"];function uC(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function dC(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?uC(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):uC(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const hC=e=>"string"==typeof(null==e?void 0:e.type)?e.type:sC(e),fC=dC({EphemeralObject:["content"],EphemeralArray:["content"]},oC),mC=(e,t,r={})=>{let{keyMap:n=fC}=r,s=ST(r,cC);return lC(e,t,dC({keyMap:n,nodeTypeGetter:hC,nodePredicate:cS,detectCycles:!1,deleteNodeSymbol:Symbol.for("delete-node"),skipVisitingNodeSymbol:Symbol.for("skip-visiting-node")},s))};mC[Symbol.for("nodejs.util.promisify.custom")]=async(e,t={})=>{let{keyMap:r=fC}=t,n=ST(t,pC);return lC[Symbol.for("nodejs.util.promisify.custom")](e,visitor,dC({keyMap:r,nodeTypeGetter:hC,nodePredicate:cS,detectCycles:!1,deleteNodeSymbol:Symbol.for("delete-node"),skipVisitingNodeSymbol:Symbol.for("skip-visiting-node")},n))};const yC=dT.init((function(){const e=new WeakMap;this.BooleanElement=function(e){return e.toValue()},this.NumberElement=function(e){return e.toValue()},this.StringElement=function(e){return e.toValue()},this.NullElement=function(){return null},this.ObjectElement={enter(t){if(e.has(t))return e.get(t).toReference();const r=new class{constructor(e){Rh(this,"type","EphemeralObject"),Rh(this,"content",[]),Rh(this,"reference",void 0),this.content=e,this.reference={}}toReference(){return this.reference}toObject(){return Object.assign(this.reference,Object.fromEntries(this.content))}}(t.content);return e.set(t,r),r}},this.EphemeralObject={leave:e=>e.toObject()},this.MemberElement={enter:e=>[e.key,e.value]},this.ArrayElement={enter(t){if(e.has(t))return e.get(t).toReference();const r=new class{constructor(e){Rh(this,"type","EphemeralArray"),Rh(this,"content",[]),Rh(this,"reference",void 0),this.content=e,this.reference=[]}toReference(){return this.reference}toArray(){return this.reference.push(...this.content),this.reference}}(t.content);return e.set(t,r),r}},this.EphemeralArray={leave:e=>e.toArray()}}));function gC(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const vC=()=>{const e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?gC(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gC(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},QT);return{predicates:e,namespace:lT}},bC=(e,t,r={})=>{if(0===t.length)return e;const n=Lk(vC,"toolboxCreator",r),s=Lk({},"visitorOptions",r),i=Lk(sC,"nodeTypeGetter",s),o=n(),a=t.map((e=>e(o))),l=AT(a.map(Lk({},"visitor")),{nodeTypeGetter:i});a.forEach(BO(["pre"],[]));const c=lC(e,l,s);return a.forEach(BO(["post"],[])),c},xC=class extends Array{constructor(...e){super(...e),Rh(this,"unknownMediaType","application/octet-stream")}filterByFormat(){throw new Error("Not implemented!")}findBy(){throw new Error("Not implemented")}latest(){throw new Error("Not implemented!")}};function wC(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?wC(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wC(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const SC=e=>(t,r={})=>((e,{Type:t,plugins:r=[]})=>{const n=new t(e);return bC(n,r,{toolboxCreator:vC,visitorOptions:{nodeTypeGetter:sC}})})(t,$C($C({},r),{},{Type:e}));XP.refract=SC(XP),YP.refract=SC(YP),GP.refract=SC(GP),KP.refract=SC(KP),ZP.refract=SC(ZP),JP.refract=SC(JP),tT.refract=SC(tT),eT.refract=SC(eT),nT.refract=SC(nT),sT.refract=SC(sT),iT.refract=SC(iT),oT.refract=SC(oT);const EC=(e,t)=>{const r=aC({predicate:e,returnOnTrue:kT});return lC(t,r),Fk(void 0,[0],r.result)},kC=(e,t=new WeakMap)=>(zT(e)?(t.set(e.key,e),kC(e.key,t),t.set(e.value,e),kC(e.value,t)):e.children.forEach((r=>{t.set(r,e),kC(r,t)})),t),OC=dT.init((function({element:e}){let t;this.transclude=function(r,n){var s;if(r===e)return n;if(r===n)return e;t=null!==(s=t)&&void 0!==s?s:kC(e);const i=t.get(r);return rO(i)?void 0:(NT(i)?((e,t,r)=>{const n=r.get(e);NT(n)&&(n.content=n.map(((s,i,o)=>o===e?(r.delete(e),r.set(t,n),t):o)))})(r,n,t):UT(i)?((e,t,r)=>{const n=r.get(e);UT(n)&&(n.content=n.map((s=>s===e?(r.delete(e),r.set(t,n),t):s)))})(r,n,t):zT(i)&&((e,t,r)=>{const n=r.get(e);zT(n)&&(n.key===e&&(n.key=t,r.delete(e),r.set(t,n)),n.value===e&&(n.value=t,r.delete(e),r.set(t,n)))})(r,n,t),e)}})),jC=OC,AC=(e,t)=>{const r=WE(e,t);return jk((e=>{if(kO(e)&&uk("$ref",e)&&Bk(fO,"$ref",e)){const t=Ok(["$ref"],e),n=GO("#/",t);return Ok(n.split("/"),r)}return kO(e)?AC(e,r):e}),e)};function PC(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function TC(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?PC(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):PC(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const CC=e=>{const t=e.meta.clone(),r=e.attributes.clone();return new e.constructor(void 0,t,r)},IC=e=>new QP(e.key,e.value,e.meta.clone(),e.attributes.clone()),RC=(e,t)=>t.clone&&t.isMergeableElement(e)?DC(CC(e),e,t):e,_C=(e,t,r)=>e.concat(t)["fantasy-land/map"]((e=>RC(e,r))),FC=(e,t,r)=>{const n=NT(e)?CC(e):CC(t);return NT(e)&&e.forEach(((e,t,s)=>{const i=IC(s);i.value=RC(e,r),n.content.push(i)})),t.forEach(((t,s,i)=>{const o=s.toValue();let a;if(NT(e)&&e.hasKey(o)&&r.isMergeableElement(t)){const n=e.get(o);a=IC(i),a.value=((e,t)=>{if("function"!=typeof t.customMerge)return DC;const r=t.customMerge(e,t);return"function"==typeof r?r:DC})(s,r)(n,t)}else a=IC(i),a.value=RC(t,r);n.remove(o),n.content.push(a)})),n};function DC(e,t,r){var n,s,i;const o={clone:!0,isMergeableElement:e=>NT(e)||UT(e),arrayElementMerge:_C,objectElementMerge:FC,customMerge:void 0},a=TC(TC({},o),r);a.isMergeableElement=null!==(n=a.isMergeableElement)&&void 0!==n?n:o.isMergeableElement,a.arrayElementMerge=null!==(s=a.arrayElementMerge)&&void 0!==s?s:o.arrayElementMerge,a.objectElementMerge=null!==(i=a.objectElementMerge)&&void 0!==i?i:o.objectElementMerge;const l=UT(t);return l===UT(e)?l&&"function"==typeof a.arrayElementMerge?a.arrayElementMerge(e,t,a):a.objectElementMerge(e,t,a):RC(t,a)}DC.all=(e,t)=>{if(!Array.isArray(e))throw new Error("first argument should be an array");return 0===e.length?new XP:e.reduce(((e,r)=>DC(e,r,t)),CC(e[0]))};const MC=(e,t=lT)=>{if(fO(e))try{return t.fromRefract(JSON.parse(e))}catch{}return kO(e)&&uk("element",e)?t.fromRefract(e):t.toElement(e)},qC=e=>mC(e,yC());class LC extends Error{constructor(e){super(e),this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}}class BC extends Error{constructor(e){super(`Invalid $ref pointer "${e}". Pointers must begin with "/"`),this.name=this.constructor.name,this.message=`Invalid $ref pointer "${e}". Pointers must begin with "/"`,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(`Invalid $ref pointer "${e}". Pointers must begin with "/"`).stack}}const NC=qE(Vk(/~/g,"~0"),Vk(/\//g,"~1"),encodeURIComponent),UC=qE(Vk(/~1/g,"/"),Vk(/~0/g,"~"),(e=>{try{return decodeURIComponent(e)}catch{return e}})),zC=(e,t)=>{const r=(e=>{if(mO(e))return[];if(!Kk("/",e))throw new BC(e);const t=qE(Jk("/"),eE(UC))(e);return ME(t)})(e);return r.reduce(((e,t)=>{if(NT(e)){if(!e.hasKey(t))throw new LC(`Evaluation failed on token: "${t}"`);return e.get(t)}if(UT(e)){if(!(t in e.content)||!TO(Number(t)))throw new LC(`Evaluation failed on token: "${t}"`);return e.get(Number(t))}throw new LC(`Evaluation failed on token: "${t}"`)}),t)},HC=e=>{const t=(e=>{const t=e.indexOf("#");return-1!==t?e.substring(t):"#"})(e);return GO("#",t)};class VC extends xC{filterByFormat(e="generic"){const t="generic"===e?"openapi;version":e;return this.filter((e=>e.includes(t)))}findBy(e="3.1.0",t="generic"){const r="generic"===t?`vnd.oai.openapi;version=${e}`:`vnd.oai.openapi+${t};version=${e}`;return this.find((e=>e.includes(r)))||this.unknownMediaType}latest(e="generic"){return tk(this.filterByFormat(e))}}const WC=new VC("application/vnd.oai.openapi;version=3.1.0","application/vnd.oai.openapi+json;version=3.1.0","application/vnd.oai.openapi+yaml;version=3.1.0"),GC=class extends XP{constructor(e,t,r){super(e,t,r),this.element="callback"}},JC=class extends XP{constructor(e,t,r){super(e,t,r),this.element="components"}get schemas(){return this.get("schemas")}set schemas(e){this.set("schemas",e)}get responses(){return this.get("responses")}set responses(e){this.set("responses",e)}get parameters(){return this.get("parameters")}set parameters(e){this.set("parameters",e)}get examples(){return this.get("examples")}set examples(e){this.set("examples",e)}get requestBodies(){return this.get("requestBodies")}set requestBodies(e){this.set("requestBodies",e)}get headers(){return this.get("headers")}set headers(e){this.set("headers",e)}get securitySchemes(){return this.get("securitySchemes")}set securitySchemes(e){this.set("securitySchemes",e)}get links(){return this.get("links")}set links(e){this.set("links",e)}get callbacks(){return this.get("callbacks")}set callbacks(e){this.set("callbacks",e)}},KC=class extends XP{constructor(e,t,r){super(e,t,r),this.element="contact"}get name(){return this.get("name")}set name(e){this.set("name",e)}get url(){return this.get("url")}set url(e){this.set("url",e)}get email(){return this.get("email")}set email(e){this.set("email",e)}},ZC=class extends XP{constructor(e,t,r){super(e,t,r),this.element="discriminator"}get propertyName(){return this.get("propertyName")}set propertyName(e){this.set("propertyName",e)}get mapping(){return this.get("mapping")}set mapping(e){this.set("mapping",e)}},YC=class extends XP{constructor(e,t,r){super(e,t,r),this.element="encoding"}get contentType(){return this.get("contentType")}set contentType(e){this.set("contentType",e)}get headers(){return this.get("headers")}set headers(e){this.set("headers",e)}get style(){return this.get("style")}set style(e){this.set("style",e)}get explode(){return this.get("explode")}set explode(e){this.set("explode",e)}get allowedReserved(){return this.get("allowedReserved")}set allowedReserved(e){this.set("allowedReserved",e)}},XC=class extends XP{constructor(e,t,r){super(e,t,r),this.element="example"}get summary(){return this.get("summary")}set summary(e){this.set("summary",e)}get description(){return this.get("description")}set description(e){this.set("description",e)}get value(){return this.get("value")}set value(e){this.set("value",e)}get externalValue(){return this.get("externalValue")}set externalValue(e){this.set("externalValue",e)}},QC=class extends XP{constructor(e,t,r){super(e,t,r),this.element="externalDocumentation"}get description(){return this.get("description")}set description(e){this.set("description",e)}get url(){return this.get("url")}set url(e){this.set("url",e)}};let eI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="header"}get required(){return this.hasKey("required")?this.get("required"):new KP(!1)}set required(e){this.set("required",e)}get deprecated(){return this.hasKey("deprecated")?this.get("deprecated"):new KP(!1)}set deprecated(e){this.set("deprecated",e)}get allowEmptyValue(){return this.get("allowEmptyValue")}set allowEmptyValue(e){this.set("allowEmptyValue",e)}get style(){return this.get("style")}set style(e){this.set("style",e)}get explode(){return this.get("explode")}set explode(e){this.set("explode",e)}get allowReserved(){return this.get("allowReserved")}set allowReserved(e){this.set("allowReserved",e)}get schema(){return this.get("schema")}set schema(e){this.set("schema",e)}get example(){return this.get("example")}set example(e){this.set("example",e)}get examples(){return this.get("examples")}set examples(e){this.set("examples",e)}get contentProp(){return this.get("content")}set contentProp(e){this.set("content",e)}};Object.defineProperty(eI.prototype,"description",{get(){return this.get("description")},set(e){this.set("description",e)},enumerable:!0});const tI=eI,rI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="info",this.classes.push("info")}get title(){return this.get("title")}set title(e){this.set("title",e)}get description(){return this.get("description")}set description(e){this.set("description",e)}get termsOfService(){return this.get("termsOfService")}set termsOfService(e){this.set("termsOfService",e)}get contact(){return this.get("contact")}set contact(e){this.set("contact",e)}get license(){return this.get("license")}set license(e){this.set("license",e)}get version(){return this.get("version")}set version(e){this.set("version",e)}},nI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="license"}get name(){return this.get("name")}set name(e){this.set("name",e)}get url(){return this.get("url")}set url(e){this.set("url",e)}},sI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="link"}get operationRef(){return this.get("operationRef")}set operationRef(e){this.set("operationRef",e)}get operationId(){return this.get("operationId")}set operationId(e){this.set("operationId",e)}get operation(){var e,t;return MT(this.operationRef)?null===(e=this.operationRef)||void 0===e?void 0:e.meta.get("operation"):MT(this.operationId)?null===(t=this.operationId)||void 0===t?void 0:t.meta.get("operation"):void 0}set operation(e){this.set("operation",e)}get parameters(){return this.get("parameters")}set parameters(e){this.set("parameters",e)}get requestBody(){return this.get("requestBody")}set requestBody(e){this.set("requestBody",e)}get description(){return this.get("description")}set description(e){this.set("description",e)}get server(){return this.get("server")}set server(e){this.set("server",e)}},iI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="mediaType"}get schema(){return this.get("schema")}set schema(e){this.set("schema",e)}get example(){return this.get("example")}set example(e){this.set("example",e)}get examples(){return this.get("examples")}set examples(e){this.set("examples",e)}get encoding(){return this.get("encoding")}set encoding(e){this.set("encoding",e)}},oI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="oAuthFlow"}get authorizationUrl(){return this.get("authorizationUrl")}set authorizationUrl(e){this.set("authorizationUrl",e)}get tokenUrl(){return this.get("tokenUrl")}set tokenUrl(e){this.set("tokenUrl",e)}get refreshUrl(){return this.get("refreshUrl")}set refreshUrl(e){this.set("refreshUrl",e)}get scopes(){return this.get("scopes")}set scopes(e){this.set("scopes",e)}},aI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="oAuthFlows"}get implicit(){return this.get("implicit")}set implicit(e){this.set("implicit",e)}get password(){return this.get("password")}set password(e){this.set("password",e)}get clientCredentials(){return this.get("clientCredentials")}set clientCredentials(e){this.set("clientCredentials",e)}get authorizationCode(){return this.get("authorizationCode")}set authorizationCode(e){this.set("authorizationCode",e)}},lI=class extends GP{constructor(e,t,r){super(e,t,r),this.element="openapi",this.classes.push("spec-version"),this.classes.push("version")}},cI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="openApi3_0",this.classes.push("api")}get openapi(){return this.get("openapi")}set openapi(e){this.set("openapi",e)}get info(){return this.get("info")}set info(e){this.set("info",e)}get servers(){return this.get("servers")}set servers(e){this.set("servers",e)}get paths(){return this.get("paths")}set paths(e){this.set("paths",e)}get components(){return this.get("components")}set components(e){this.set("components",e)}get security(){return this.get("security")}set security(e){this.set("security",e)}get tags(){return this.get("tags")}set tags(e){this.set("tags",e)}get externalDocs(){return this.get("externalDocs")}set externalDocs(e){this.set("externalDocs",e)}},pI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="operation"}get tags(){return this.get("tags")}set tags(e){this.set("tags",e)}get summary(){return this.get("summary")}set summary(e){this.set("summary",e)}get description(){return this.get("description")}set description(e){this.set("description",e)}set externalDocs(e){this.set("externalDocs",e)}get externalDocs(){return this.get("externalDocs")}get operationId(){return this.get("operationId")}set operationId(e){this.set("operationId",e)}get parameters(){return this.get("parameters")}set parameters(e){this.set("parameters",e)}get requestBody(){return this.get("requestBody")}set requestBody(e){this.set("requestBody",e)}get responses(){return this.get("responses")}set responses(e){this.set("responses",e)}get callbacks(){return this.get("callbacks")}set callbacks(e){this.set("callbacks",e)}get deprecated(){return this.hasKey("deprecated")?this.get("deprecated"):new KP(!1)}set deprecated(e){this.set("deprecated",e)}get security(){return this.get("security")}set security(e){this.set("security",e)}get servers(){return this.get("severs")}set servers(e){this.set("servers",e)}};let uI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="parameter"}get name(){return this.get("name")}set name(e){this.set("name",e)}get in(){return this.get("in")}set in(e){this.set("in",e)}get required(){return this.hasKey("required")?this.get("required"):new KP(!1)}set required(e){this.set("required",e)}get deprecated(){return this.hasKey("deprecated")?this.get("deprecated"):new KP(!1)}set deprecated(e){this.set("deprecated",e)}get allowEmptyValue(){return this.get("allowEmptyValue")}set allowEmptyValue(e){this.set("allowEmptyValue",e)}get style(){return this.get("style")}set style(e){this.set("style",e)}get explode(){return this.get("explode")}set explode(e){this.set("explode",e)}get allowReserved(){return this.get("allowReserved")}set allowReserved(e){this.set("allowReserved",e)}get schema(){return this.get("schema")}set schema(e){this.set("schema",e)}get example(){return this.get("example")}set example(e){this.set("example",e)}get examples(){return this.get("examples")}set examples(e){this.set("examples",e)}get contentProp(){return this.get("content")}set contentProp(e){this.set("content",e)}};Object.defineProperty(uI.prototype,"description",{get(){return this.get("description")},set(e){this.set("description",e)},enumerable:!0});const dI=uI,hI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="pathItem"}get $ref(){return this.get("$ref")}set $ref(e){this.set("$ref",e)}get summary(){return this.get("summary")}set summary(e){this.set("summary",e)}get description(){return this.get("description")}set description(e){this.set("description",e)}get GET(){return this.get("get")}set GET(e){this.set("GET",e)}get PUT(){return this.get("put")}set PUT(e){this.set("PUT",e)}get POST(){return this.get("post")}set POST(e){this.set("POST",e)}get DELETE(){return this.get("delete")}set DELETE(e){this.set("DELETE",e)}get OPTIONS(){return this.get("options")}set OPTIONS(e){this.set("OPTIONS",e)}get HEAD(){return this.get("head")}set HEAD(e){this.set("HEAD",e)}get PATCH(){return this.get("patch")}set PATCH(e){this.set("PATCH",e)}get TRACE(){return this.get("trace")}set TRACE(e){this.set("TRACE",e)}get servers(){return this.get("servers")}set servers(e){this.set("servers",e)}get parameters(){return this.get("parameters")}set parameters(e){this.set("parameters",e)}},fI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="paths"}},mI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="reference",this.classes.push("openapi-reference")}get $ref(){return this.get("$ref")}set $ref(e){this.set("$ref",e)}},yI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="requestBody"}get description(){return this.get("description")}set description(e){this.set("description",e)}get contentProp(){return this.get("content")}set contentProp(e){this.set("content",e)}get required(){return this.hasKey("required")?this.get("required"):new KP(!1)}set required(e){this.set("required",e)}},gI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="response"}get description(){return this.get("description")}set description(e){this.set("description",e)}get headers(){return this.get("headers")}set headers(e){this.set("headers",e)}get contentProp(){return this.get("content")}set contentProp(e){this.set("content",e)}get links(){return this.get("links")}set links(e){this.set("links",e)}},vI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="responses"}get default(){return this.get("default")}set default(e){this.set("default",e)}},bI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="JSONSchemaDraft4"}get idProp(){return this.get("id")}set idProp(e){this.set("id",e)}get $schema(){return this.get("$schema")}set $schema(e){this.set("idProp",e)}get multipleOf(){return this.get("multipleOf")}set multipleOf(e){this.set("multipleOf",e)}get maximum(){return this.get("maximum")}set maximum(e){this.set("maximum",e)}get exclusiveMaximum(){return this.get("exclusiveMaximum")}set exclusiveMaximum(e){this.set("exclusiveMaximum",e)}get minimum(){return this.get("minimum")}set minimum(e){this.set("minimum",e)}get exclusiveMinimum(){return this.get("exclusiveMinimum")}set exclusiveMinimum(e){this.set("exclusiveMinimum",e)}get maxLength(){return this.get("maxLength")}set maxLength(e){this.set("maxLength",e)}get minLength(){return this.get("minLength")}set minLength(e){this.set("minLength",e)}get pattern(){return this.get("pattern")}set pattern(e){this.set("pattern",e)}get additionalItems(){return this.get("additionalItems")}set additionalItems(e){this.set("additionalItems",e)}get items(){return this.get("items")}set items(e){this.set("items",e)}get maxItems(){return this.get("maxItems")}set maxItems(e){this.set("maxItems",e)}get minItems(){return this.get("minItems")}set minItems(e){this.set("minItems",e)}get uniqueItems(){return this.get("uniqueItems")}set uniqueItems(e){this.set("uniqueItems",e)}get maxProperties(){return this.get("maxProperties")}set maxProperties(e){this.set("maxProperties",e)}get minProperties(){return this.get("minProperties")}set minProperties(e){this.set("minProperties",e)}get required(){return this.get("required")}set required(e){this.set("required",e)}get properties(){return this.get("properties")}set properties(e){this.set("properties",e)}get additionalProperties(){return this.get("additionalProperties")}set additionalProperties(e){this.set("additionalProperties",e)}get patternProperties(){return this.get("patternProperties")}set patternProperties(e){this.set("patternProperties",e)}get dependencies(){return this.get("dependencies")}set dependencies(e){this.set("dependencies",e)}get enum(){return this.get("enum")}set enum(e){this.set("enum",e)}get type(){return this.get("type")}set type(e){this.set("type",e)}get allOf(){return this.get("allOf")}set allOf(e){this.set("allOf",e)}get anyOf(){return this.get("anyOf")}set anyOf(e){this.set("anyOf",e)}get oneOf(){return this.get("oneOf")}set oneOf(e){this.set("oneOf",e)}get not(){return this.get("not")}set not(e){this.set("not",e)}get definitions(){return this.get("definitions")}set definitions(e){this.set("definitions",e)}get title(){return this.get("title")}set title(e){this.set("title",e)}get description(){return this.get("description")}set description(e){this.set("description",e)}get default(){return this.get("default")}set default(e){this.set("default",e)}get format(){return this.get("format")}set format(e){this.set("format",e)}get base(){return this.get("base")}set base(e){this.set("base",e)}get links(){return this.get("links")}set links(e){this.set("links",e)}get media(){return this.get("media")}set media(e){this.set("media",e)}get readOnly(){return this.get("readOnly")}set readOnly(e){this.set("readOnly",e)}},xI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="JSONReference",this.classes.push("json-reference")}get $ref(){return this.get("$ref")}set $ref(e){this.set("$ref",e)}},wI=class extends XP{constructor(e,t,r){super(e,t,r),this.element="media"}get binaryEncoding(){return this.get("binaryEncoding")}set binaryEncoding(e){this.set("binaryEncoding",e)}get type(){return this.get("type")}set type(e){this.set("type",e)}},$I=class extends XP{constructor(e,t,r){super(e,t,r),this.element="linkDescription"}get href(){return this.get("href")}set href(e){this.set("href",e)}get rel(){return this.get("rel")}set rel(e){this.set("rel",e)}get title(){return this.get("title")}set title(e){this.set("title",e)}get targetSchema(){return this.get("targetSchema")}set targetSchema(e){this.set("targetSchema",e)}get mediaType(){return this.get("mediaType")}set mediaType(e){this.set("mediaType",e)}get method(){return this.get("method")}set method(e){this.set("method",e)}get encType(){return this.get("encType")}set encType(e){this.set("encType",e)}get schema(){return this.get("schema")}set schema(e){this.set("schema",e)}},SI={namespace:e=>{const{base:t}=e;return t.register("jSONSchemaDraft4",bI),t.register("jSONReference",xI),t.register("media",wI),t.register("linkDescription",$I),t}};function EI(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const kI=e=>{if(DT(e))return`${e.element.charAt(0).toUpperCase()+e.element.slice(1)}Element`},OI=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?EI(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):EI(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({JSONSchemaDraft4Element:["content"],JSONReferenceElement:["content"],MediaElement:["content"],LinkDescriptionElement:["content"]},oC),jI=dT({props:{element:null},methods:{copyMetaAndAttributes(e,t){YT(e)&&t.meta.set("sourceMap",e.meta.get("sourceMap"))}}}),AI=jI,PI=dT(AI,{methods:{enter(e){return this.element=e.clone(),kT}}});function TI(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function CI(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?TI(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):TI(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const II=dT(AI,{props:{specObj:null,passingOptionsNames:["specObj"]},init({specObj:e=this.specObj}){this.specObj=e},methods:{retrievePassingOptions(){return Mk(this.passingOptionsNames,this)},retrieveFixedFields(e){return qE(Ok(["visitors",...e,"fixedFields"]),_S)(this.specObj)},retrieveVisitor(e){return Dk(cO,["visitors",...e],this.specObj)?Ok(["visitors",...e],this.specObj):Ok(["visitors",...e,"$visitor"],this.specObj)},retrieveVisitorInstance(e,t={}){const r=this.retrievePassingOptions();return this.retrieveVisitor(e)(CI(CI({},r),t))},toRefractedElement(e,t,r={}){const n=this.retrieveVisitorInstance(e,r),s=Object.getPrototypeOf(n);return rO(this.fallbackVisitorPrototype)&&(this.fallbackVisitorPrototype=Object.getPrototypeOf(this.retrieveVisitorInstance(["value"]))),this.fallbackVisitorPrototype===s?t.clone():(lC(t,n,CI({keyMap:OI,nodeTypeGetter:kI},r)),n.element)}}}),RI=dT(II,{props:{specPath:IO,ignoredFields:[]},init({specPath:e=this.specPath,ignoredFields:t=this.ignoredFields}={}){this.specPath=e,this.ignoredFields=t},methods:{ObjectElement(e){const t=this.specPath(e),r=this.retrieveFixedFields(t);return e.forEach(((e,n,s)=>{if(MT(n)&&r.includes(n.toValue())&&!this.ignoredFields.includes(n.toValue())){const r=this.toRefractedElement([...t,"fixedFields",n.toValue()],e),i=new QP(n.clone(),r);this.copyMetaAndAttributes(s,i),i.classes.push("fixed-field"),this.element.content.push(i)}else this.ignoredFields.includes(n.toValue())||this.element.content.push(s.clone())})),this.copyMetaAndAttributes(e,this.element),kT}}}),_I=dT(RI,PI,{props:{specPath:mE(["document","objects","JSONSchema"])},init(){this.element=new bI}}),FI=PI,DI=PI,MI=PI,qI=PI,LI=PI,BI=PI,NI=PI,UI=PI,zI=PI,HI=PI,VI=dT({props:{parent:null},init({parent:e=this.parent}){this.parent=e,this.passingOptionsNames=[...this.passingOptionsNames,"parent"]}}),WI=VI,GI=e=>NT(e)&&e.hasKey("$ref"),JI=dT(II,WI,PI,{methods:{ObjectElement(e){const t=GI(e)?["document","objects","JSONReference"]:["document","objects","JSONSchema"];return this.element=this.toRefractedElement(t,e),kT},ArrayElement(e){return this.element=new YP,this.element.classes.push("json-schema-items"),e.forEach((e=>{const t=GI(e)?["document","objects","JSONReference"]:["document","objects","JSONSchema"],r=this.toRefractedElement(t,e);this.element.push(r)})),this.copyMetaAndAttributes(e,this.element),kT}}}),KI=PI,ZI=PI,YI=PI,XI=PI,QI=PI,eR=dT(PI,{methods:{ArrayElement(e){return this.element=e.clone(),this.element.classes.push("json-schema-required"),kT}}}),tR=dT(II,{props:{fieldPatternPredicate:lS,specPath:IO,ignoredFields:[]},init({specPath:e=this.specPath,ignoredFields:t=this.ignoredFields}={}){this.specPath=e,this.ignoredFields=t},methods:{ObjectElement(e){return e.forEach(((e,t,r)=>{if(!this.ignoredFields.includes(t.toValue())&&this.fieldPatternPredicate(t.toValue())){const n=this.specPath(e),s=this.toRefractedElement(n,e),i=new QP(t.clone(),s);this.copyMetaAndAttributes(r,i),i.classes.push("patterned-field"),this.element.content.push(i)}else this.ignoredFields.includes(t.toValue())||this.element.content.push(r.clone())})),this.copyMetaAndAttributes(e,this.element),kT}}}),rR=dT(tR,{props:{fieldPatternPredicate:bO}}),nR=dT(rR,WI,PI,{props:{specPath:e=>GI(e)?["document","objects","JSONReference"]:["document","objects","JSONSchema"]},init(){this.element=new XP,this.element.classes.push("json-schema-properties")}}),sR=dT(rR,WI,PI,{props:{specPath:e=>GI(e)?["document","objects","JSONReference"]:["document","objects","JSONSchema"]},init(){this.element=new XP,this.element.classes.push("json-schema-patternProperties")}}),iR=dT(rR,WI,PI,{props:{specPath:e=>GI(e)?["document","objects","JSONReference"]:["document","objects","JSONSchema"]},init(){this.element=new XP,this.element.classes.push("json-schema-dependencies")}}),oR=dT(PI,{methods:{ArrayElement(e){return this.element=e.clone(),this.element.classes.push("json-schema-enum"),kT}}}),aR=dT(PI,{methods:{StringElement(e){return this.element=e.clone(),this.element.classes.push("json-schema-type"),kT},ArrayElement(e){return this.element=e.clone(),this.element.classes.push("json-schema-type"),kT}}}),lR=dT(II,WI,PI,{init(){this.element=new YP,this.element.classes.push("json-schema-allOf")},methods:{ArrayElement(e){return e.forEach((e=>{const t=GI(e)?["document","objects","JSONReference"]:["document","objects","JSONSchema"],r=this.toRefractedElement(t,e);this.element.push(r)})),this.copyMetaAndAttributes(e,this.element),kT}}}),cR=dT(II,WI,PI,{init(){this.element=new YP,this.element.classes.push("json-schema-anyOf")},methods:{ArrayElement(e){return e.forEach((e=>{const t=GI(e)?["document","objects","JSONReference"]:["document","objects","JSONSchema"],r=this.toRefractedElement(t,e);this.element.push(r)})),this.copyMetaAndAttributes(e,this.element),kT}}}),pR=dT(II,WI,PI,{init(){this.element=new YP,this.element.classes.push("json-schema-oneOf")},methods:{ArrayElement(e){return e.forEach((e=>{const t=GI(e)?["document","objects","JSONReference"]:["document","objects","JSONSchema"],r=this.toRefractedElement(t,e);this.element.push(r)})),this.copyMetaAndAttributes(e,this.element),kT}}}),uR=dT(rR,WI,PI,{props:{specPath:e=>GI(e)?["document","objects","JSONReference"]:["document","objects","JSONSchema"]},init(){this.element=new XP,this.element.classes.push("json-schema-definitions")}}),dR=PI,hR=PI,fR=PI,mR=PI,yR=PI,gR=dT(II,WI,PI,{init(){this.element=new YP,this.element.classes.push("json-schema-links")},methods:{ArrayElement(e){return e.forEach((e=>{const t=this.toRefractedElement(["document","objects","LinkDescription"],e);this.element.push(t)})),this.copyMetaAndAttributes(e,this.element),kT}}}),vR=PI,bR=dT(RI,PI,{props:{specPath:mE(["document","objects","JSONReference"])},init(){this.element=new xI},methods:{ObjectElement(e){const t=RI.compose.methods.ObjectElement.call(this,e);return MT(this.element.$ref)&&this.element.classes.push("reference-element"),t}}}),xR=dT(PI,{methods:{StringElement(e){return this.element=e.clone(),this.element.classes.push("reference-value"),kT}}}),wR=dT(II,{props:{alternator:[]},methods:{enter(e){const t=this.alternator.map((({predicate:e,specPath:t})=>yk(e,mE(t),tO))),r=MO(t)(e);return this.element=this.toRefractedElement(r,e),kT}}}),$R=dT(wR,{props:{alternator:[{predicate:GI,specPath:["document","objects","JSONReference"]},{predicate:cS,specPath:["document","objects","JSONSchema"]}]}}),SR={visitors:{value:PI,JSONSchemaOrJSONReferenceVisitor:$R,document:{objects:{JSONSchema:{$visitor:_I,fixedFields:{id:FI,$schema:DI,multipleOf:MI,maximum:qI,exclusiveMaximum:LI,minimum:BI,exclusiveMinimum:NI,maxLength:UI,minLength:zI,pattern:HI,additionalItems:$R,items:JI,maxItems:KI,minItems:ZI,uniqueItems:YI,maxProperties:XI,minProperties:QI,required:eR,properties:nR,additionalProperties:$R,patternProperties:sR,dependencies:iR,enum:oR,type:aR,allOf:lR,anyOf:cR,oneOf:pR,not:$R,definitions:uR,title:dR,description:hR,default:fR,format:mR,base:yR,links:gR,media:{$ref:"#/visitors/document/objects/Media"},readOnly:vR}},JSONReference:{$visitor:bR,fixedFields:{$ref:xR}},Media:{$visitor:dT(RI,PI,{props:{specPath:mE(["document","objects","Media"])},init(){this.element=new wI}}),fixedFields:{binaryEncoding:PI,type:PI}},LinkDescription:{$visitor:dT(RI,PI,{props:{specPath:mE(["document","objects","LinkDescription"])},init(){this.element=new $I}}),fixedFields:{href:PI,rel:PI,title:PI,targetSchema:$R,mediaType:PI,method:PI,encType:PI,schema:$R}}}}}},ER=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof bI||e(n)&&t("JSONSchemaDraft4",n)&&r("object",n))),kR=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof xI||e(n)&&t("JSONReference",n)&&r("object",n))),OR=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof wI||e(n)&&t("media",n)&&r("object",n))),jR=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof $I||e(n)&&t("linkDescription",n)&&r("object",n))),AR=Object.freeze(Object.defineProperty({__proto__:null,isJSONReferenceElement:kR,isJSONSchemaElement:ER,isLinkDescriptionElement:jR,isMediaElement:OR},Symbol.toStringTag,{value:"Module"}));function PR(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function TR(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?PR(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):PR(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const CR=()=>{const e=cT(SI);return{predicates:TR(TR({},AR),{},{isStringElement:MT}),namespace:e}};function IR(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const RR=e=>(t,r={})=>((e,{specPath:t=["visitors","document","objects","JSONSchema","$visitor"],plugins:r=[],specificationObj:n=SR}={})=>{const s=rT(e),i=AC(n),o=BO(t,[],i);return lC(s,o,{state:{specObj:i}}),bC(o.element,r,{toolboxCreator:CR,visitorOptions:{keyMap:OI,nodeTypeGetter:kI}})})(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?IR(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):IR(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({specPath:e},r));bI.refract=RR(["visitors","document","objects","JSONSchema","$visitor"]),xI.refract=RR(["visitors","document","objects","JSONReference","$visitor"]),wI.refract=RR(["visitors","document","objects","Media","$visitor"]),$I.refract=RR(["visitors","document","objects","LinkDescription","$visitor"]);const _R=class extends bI{constructor(e,t,r){super(e,t,r),this.element="schema",this.classes.push("json-schema-draft-4")}get additionalItems(){return this.get("additionalItems")}set additionalItems(e){this.set("additionalItems",e)}get items(){return this.get("items")}set items(e){this.set("items",e)}get additionalProperties(){return this.get("additionalProperties")}set additionalProperties(e){this.set("additionalProperties",e)}get type(){return this.get("type")}set type(e){this.set("type",e)}get not(){return this.get("not")}set not(e){this.set("not",e)}get nullable(){return this.get("nullable")}set nullable(e){this.set("nullable",e)}get discriminator(){return this.get("discriminator")}set discriminator(e){this.set("discriminator",e)}get writeOnly(){return this.get("writeOnly")}set writeOnly(e){this.set("writeOnly",e)}get xml(){return this.get("xml")}set xml(e){this.set("xml",e)}get externalDocs(){return this.get("externalDocs")}set externalDocs(e){this.set("externalDocs",e)}get example(){return this.get("example")}set example(e){this.set("example",e)}get deprecated(){return this.get("deprecated")}set deprecated(e){this.set("deprecated",e)}},FR=class extends XP{constructor(e,t,r){super(e,t,r),this.element="securityRequirement"}},DR=class extends XP{constructor(e,t,r){super(e,t,r),this.element="securityScheme"}get type(){return this.get("type")}set type(e){this.set("type",e)}get description(){return this.get("description")}set description(e){this.set("description",e)}get name(){return this.get("name")}set name(e){this.set("name",e)}get in(){return this.get("in")}set in(e){this.set("in",e)}get scheme(){return this.get("scheme")}set scheme(e){this.set("scheme",e)}get bearerFormat(){return this.get("bearerFormat")}set bearerFormat(e){this.set("bearerFormat",e)}get flows(){return this.get("flows")}set flows(e){this.set("flows",e)}get openIdConnectUrl(){return this.get("openIdConnectUrl")}set openIdConnectUrl(e){this.set("openIdConnectUrl",e)}},MR=class extends XP{constructor(e,t,r){super(e,t,r),this.element="server"}get url(){return this.get("url")}set url(e){this.set("url",e)}get description(){return this.get("description")}set description(e){this.set("description",e)}get variables(){return this.get("variables")}set variables(e){this.set("variables",e)}},qR=class extends XP{constructor(e,t,r){super(e,t,r),this.element="serverVariable"}get enum(){return this.get("enum")}set enum(e){this.set("enum",e)}get default(){return this.get("default")}set default(e){this.set("default",e)}get description(){return this.get("description")}set description(e){this.set("description",e)}},LR=class extends XP{constructor(e,t,r){super(e,t,r),this.element="tag"}get name(){return this.get("name")}set name(e){this.set("name",e)}get description(){return this.get("description")}set description(e){this.set("description",e)}get externalDocs(){return this.get("externalDocs")}set externalDocs(e){this.set("externalDocs",e)}},BR=class extends XP{constructor(e,t,r){super(e,t,r),this.element="xml"}get name(){return this.get("name")}set name(e){this.set("name",e)}get namespace(){return this.get("namespace")}set namespace(e){this.set("namespace",e)}get prefix(){return this.get("prefix")}set prefix(e){this.set("prefix",e)}get attribute(){return this.get("attribute")}set attribute(e){this.set("attribute",e)}get wrapped(){return this.get("wrapped")}set wrapped(e){this.set("wrapped",e)}},NR={namespace:e=>{const{base:t}=e;return t.register("callback",GC),t.register("components",JC),t.register("contact",KC),t.register("discriminator",ZC),t.register("encoding",YC),t.register("example",XC),t.register("externalDocumentation",QC),t.register("header",tI),t.register("info",rI),t.register("license",nI),t.register("link",sI),t.register("mediaType",iI),t.register("oAuthFlow",oI),t.register("oAuthFlows",aI),t.register("openapi",lI),t.register("openApi3_0",cI),t.register("operation",pI),t.register("parameter",dI),t.register("pathItem",hI),t.register("paths",fI),t.register("reference",mI),t.register("requestBody",yI),t.register("response",gI),t.register("responses",vI),t.register("schema",_R),t.register("securityRequirement",FR),t.register("securityScheme",DR),t.register("server",MR),t.register("serverVariable",qR),t.register("tag",LR),t.register("xml",BR),t}};class UR extends YP{constructor(e,t,r){super(e,t,r),this.classes.push(UR.primaryClass)}}Rh(UR,"primaryClass","servers");const zR=UR;class HR extends YP{constructor(e,t,r){super(e,t,r),this.classes.push(HR.primaryClass)}}Rh(HR,"primaryClass","security");const VR=HR;class WR extends YP{constructor(e,t,r){super(e,t,r),this.classes.push(WR.primaryClass)}}Rh(WR,"primaryClass","tags");const GR=WR;class JR extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(JR.primaryClass)}}Rh(JR,"primaryClass","server-variables");const KR=JR;class ZR extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(ZR.primaryClass)}}Rh(ZR,"primaryClass","components-schemas");const YR=ZR;class XR extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(XR.primaryClass)}}Rh(XR,"primaryClass","components-responses");const QR=XR;class e_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(e_.primaryClass),this.classes.push("parameters")}}Rh(e_,"primaryClass","components-parameters");const t_=e_;class r_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(r_.primaryClass),this.classes.push("examples")}}Rh(r_,"primaryClass","components-examples");const n_=r_;class s_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(s_.primaryClass)}}Rh(s_,"primaryClass","components-request-bodies");const i_=s_;class o_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(o_.primaryClass)}}Rh(o_,"primaryClass","components-headers");const a_=o_;class l_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(l_.primaryClass)}}Rh(l_,"primaryClass","components-security-schemes");const c_=l_;class p_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(p_.primaryClass)}}Rh(p_,"primaryClass","components-links");const u_=p_;class d_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(d_.primaryClass)}}Rh(d_,"primaryClass","components-callbacks");const h_=d_;class f_ extends YP{constructor(e,t,r){super(e,t,r),this.classes.push(f_.primaryClass),this.classes.push("servers")}}Rh(f_,"primaryClass","path-item-servers");const m_=f_;class y_ extends YP{constructor(e,t,r){super(e,t,r),this.classes.push(y_.primaryClass),this.classes.push("parameters")}}Rh(y_,"primaryClass","path-item-parameters");const g_=y_;class v_ extends YP{constructor(e,t,r){super(e,t,r),this.classes.push(v_.primaryClass),this.classes.push("parameters")}}Rh(v_,"primaryClass","operation-parameters");const b_=v_;class x_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(x_.primaryClass),this.classes.push("examples")}}Rh(x_,"primaryClass","parameter-examples");const w_=x_;class $_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push($_.primaryClass),this.classes.push("content")}}Rh($_,"primaryClass","parameter-content");const S_=$_;class E_ extends YP{constructor(e,t,r){super(e,t,r),this.classes.push(E_.primaryClass)}}Rh(E_,"primaryClass","operation-tags");const k_=E_;class O_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(O_.primaryClass)}}Rh(O_,"primaryClass","operation-callbacks");const j_=O_;class A_ extends YP{constructor(e,t,r){super(e,t,r),this.classes.push(A_.primaryClass),this.classes.push("security")}}Rh(A_,"primaryClass","operation-security");const P_=A_;class T_ extends YP{constructor(e,t,r){super(e,t,r),this.classes.push(T_.primaryClass),this.classes.push("servers")}}Rh(T_,"primaryClass","operation-servers");const C_=T_;class I_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(I_.primaryClass),this.classes.push("content")}}Rh(I_,"primaryClass","request-body-content");const R_=I_;class __ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(__.primaryClass),this.classes.push("examples")}}Rh(__,"primaryClass","media-type-examples");const F_=__;class D_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(D_.primaryClass)}}Rh(D_,"primaryClass","media-type-encoding");const M_=D_;class q_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(q_.primaryClass)}}Rh(q_,"primaryClass","encoding-headers");const L_=q_;class B_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(B_.primaryClass)}}Rh(B_,"primaryClass","response-headers");const N_=B_;class U_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(U_.primaryClass),this.classes.push("content")}}Rh(U_,"primaryClass","response-content");const z_=U_;class H_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(H_.primaryClass)}}Rh(H_,"primaryClass","response-links");const V_=H_;class W_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(W_.primaryClass)}}Rh(W_,"primaryClass","discriminator-mapping");const G_=W_;class J_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(J_.primaryClass)}}Rh(J_,"primaryClass","oauth-flow-scopes");const K_=J_;class Z_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(Z_.primaryClass)}}Rh(Z_,"primaryClass","link-parameters");const Y_=Z_;class X_ extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(X_.primaryClass),this.classes.push("examples")}}Rh(X_,"primaryClass","header-examples");const Q_=X_;class eF extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(eF.primaryClass),this.classes.push("content")}}Rh(eF,"primaryClass","header-content");const tF=eF;function rF(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const nF=e=>{if(DT(e))return`${e.element.charAt(0).toUpperCase()+e.element.slice(1)}Element`},sF=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?rF(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rF(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({CallbackElement:["content"],ComponentsElement:["content"],ContactElement:["content"],DiscriminatorElement:["content"],Encoding:["content"],Example:["content"],ExternalDocumentationElement:["content"],HeaderElement:["content"],InfoElement:["content"],LicenseElement:["content"],MediaTypeElement:["content"],OAuthFlowElement:["content"],OAuthFlowsElement:["content"],OpenApi3_0Element:["content"],OperationElement:["content"],ParameterElement:["content"],PathItemElement:["content"],PathsElement:["content"],ReferenceElement:["content"],RequestBodyElement:["content"],ResponseElement:["content"],ResponsesElement:["content"],SchemaElement:["content"],SecurityRequirementElement:["content"],SecuritySchemeElement:["content"],ServerElement:["content"],ServerVariableElement:["content"],TagElement:["content"]},oC),iF=dT({props:{element:null},methods:{copyMetaAndAttributes(e,t){YT(e)&&t.meta.set("sourceMap",e.meta.get("sourceMap"))}}}),oF=iF;function aF(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function lF(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?aF(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):aF(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const cF=dT(oF,{props:{passingOptionsNames:["specObj","openApiGenericElement","openApiSemanticElement"],specObj:null,openApiGenericElement:null,openApiSemanticElement:null},init({specObj:e=this.specObj,openApiGenericElement:t=this.openApiGenericElement,openApiSemanticElement:r=this.openApiSemanticElement}){this.specObj=e,this.openApiGenericElement=t,this.openApiSemanticElement=r},methods:{retrievePassingOptions(){return Mk(this.passingOptionsNames,this)},retrieveFixedFields(e){return qE(Ok(["visitors",...e,"fixedFields"]),_S)(this.specObj)},retrieveVisitor(e){return Dk(cO,["visitors",...e],this.specObj)?Ok(["visitors",...e],this.specObj):Ok(["visitors",...e,"$visitor"],this.specObj)},retrieveVisitorInstance(e,t={}){const r=this.retrievePassingOptions();return this.retrieveVisitor(e)(lF(lF({},r),t))},toRefractedElement(e,t,r={}){const n=this.retrieveVisitorInstance(e,r),s=Object.getPrototypeOf(n);return rO(this.fallbackVisitorPrototype)&&(this.fallbackVisitorPrototype=Object.getPrototypeOf(this.retrieveVisitorInstance(["value"]))),this.fallbackVisitorPrototype===s?t.clone():(lC(t,n,lF({keyMap:sF,nodeTypeGetter:nF},r)),n.element)}}}),pF=cF,uF=e=>NT(e)&&e.hasKey("$ref"),dF=NT,hF=NT,fF=e=>MT(e.key)&&Kk("x-",e.key.toValue()),mF=Object.freeze(Object.defineProperty({__proto__:null,isOpenApi3_0LikeElement:e=>NT(e)&&e.hasKey("openapi")&&e.hasKey("info"),isOpenApiExtension:fF,isParameterLikeElement:e=>NT(e)&&e.hasKey("name")&&e.hasKey("in"),isReferenceLikeElement:uF,isRequestBodyLikeElement:e=>NT(e)&&e.hasKey("content"),isResponseLikeElement:e=>NT(e)&&e.hasKey("description"),isServerLikeElement:dF,isTagLikeElement:hF},Symbol.toStringTag,{value:"Module"})),yF=dT(pF,{props:{specPath:IO,ignoredFields:[],canSupportSpecificationExtensions:!0,specificationExtensionPredicate:fF},init({specPath:e=this.specPath,ignoredFields:t=this.ignoredFields,canSupportSpecificationExtensions:r=this.canSupportSpecificationExtensions,specificationExtensionPredicate:n=this.specificationExtensionPredicate}={}){this.specPath=e,this.ignoredFields=t,this.canSupportSpecificationExtensions=r,this.specificationExtensionPredicate=n},methods:{ObjectElement(e){const t=this.specPath(e),r=this.retrieveFixedFields(t);return e.forEach(((e,n,s)=>{if(MT(n)&&r.includes(n.toValue())&&!this.ignoredFields.includes(n.toValue())){const r=this.toRefractedElement([...t,"fixedFields",n.toValue()],e),i=new QP(n.clone(),r);this.copyMetaAndAttributes(s,i),i.classes.push("fixed-field"),this.element.content.push(i)}else if(this.canSupportSpecificationExtensions&&this.specificationExtensionPredicate(s)){const e=this.toRefractedElement(["document","extension"],s);this.element.content.push(e)}else this.ignoredFields.includes(n.toValue())||this.element.content.push(s.clone())})),this.copyMetaAndAttributes(e,this.element),kT}}}),gF=yF,vF=dT(oF,{methods:{enter(e){return this.element=e.clone(),kT}}}),bF=vF,xF=dT(gF,bF,{props:{specPath:mE(["document","objects","OpenApi"]),canSupportSpecificationExtensions:!0},init(){this.element=new cI},methods:{ObjectElement(e){return this.unrefractedElement=e,gF.compose.methods.ObjectElement.call(this,e)}}}),wF=xF,$F=dT(pF,bF,{methods:{StringElement(e){const t=new lI(e.toValue());return this.copyMetaAndAttributes(e,t),this.element=t,kT}}}),SF=$F,EF=dT(pF,{methods:{MemberElement(e){return this.element=e.clone(),this.element.classes.push("specification-extension"),kT}}}),kF=EF,OF=dT(gF,bF,{props:{specPath:mE(["document","objects","Info"]),canSupportSpecificationExtensions:!0},init(){this.element=new rI}}),jF=OF,AF=bF,PF=AF,TF=bF,CF=TF,IF=bF,RF=IF,_F=dT(bF,{methods:{StringElement(e){return this.element=e.clone(),this.element.classes.push("api-version"),this.element.classes.push("version"),kT}}}),FF=_F,DF=dT(gF,bF,{props:{specPath:mE(["document","objects","Contact"]),canSupportSpecificationExtensions:!0},init(){this.element=new KC}}),MF=DF,qF=bF,LF=qF,BF=bF,NF=BF,UF=bF,zF=UF,HF=dT(gF,bF,{props:{specPath:mE(["document","objects","License"]),canSupportSpecificationExtensions:!0},init(){this.element=new nI}}),VF=HF,WF=bF,GF=WF,JF=bF,KF=JF,ZF=dT(gF,bF,{props:{specPath:mE(["document","objects","Link"]),canSupportSpecificationExtensions:!0},init(){this.element=new sI},methods:{ObjectElement(e){const t=gF.compose.methods.ObjectElement.call(this,e);return(MT(this.element.operationId)||MT(this.element.operationRef))&&this.element.classes.push("reference-element"),t}}}),YF=ZF,XF=dT(bF,{methods:{StringElement(e){return this.element=e.clone(),this.element.classes.push("reference-value"),kT}}}),QF=XF,eD=dT(bF,{methods:{StringElement(e){return this.element=e.clone(),this.element.classes.push("reference-value"),kT}}}),tD=eD,rD=dT(pF,{props:{fieldPatternPredicate:lS,specPath:IO,ignoredFields:[],canSupportSpecificationExtensions:!1,specificationExtensionPredicate:fF},init({specPath:e=this.specPath,ignoredFields:t=this.ignoredFields,canSupportSpecificationExtensions:r=this.canSupportSpecificationExtensions,specificationExtensionPredicate:n=this.specificationExtensionPredicate}={}){this.specPath=e,this.ignoredFields=t,this.canSupportSpecificationExtensions=r,this.specificationExtensionPredicate=n},methods:{ObjectElement(e){return e.forEach(((e,t,r)=>{if(this.canSupportSpecificationExtensions&&this.specificationExtensionPredicate(r)){const e=this.toRefractedElement(["document","extension"],r);this.element.content.push(e)}else if(!this.ignoredFields.includes(t.toValue())&&this.fieldPatternPredicate(t.toValue())){const n=this.specPath(e),s=this.toRefractedElement(n,e),i=new QP(t.clone(),s);this.copyMetaAndAttributes(r,i),i.classes.push("patterned-field"),this.element.content.push(i)}else this.ignoredFields.includes(t.toValue())||this.element.content.push(r.clone())})),this.copyMetaAndAttributes(e,this.element),kT}}}),nD=rD,sD=dT(nD,{props:{fieldPatternPredicate:bO}}),iD=sD,oD=dT(iD,bF,{props:{specPath:mE(["value"])},init(){this.element=new Y_}}),aD=oD,lD=bF,cD=lD,pD=bF,uD=pD,dD=dT(gF,bF,{props:{specPath:mE(["document","objects","Server"]),canSupportSpecificationExtensions:!0},init(){this.element=new MR}}),hD=dD,fD=dT(bF,{methods:{StringElement(e){return this.element=e.clone(),this.element.classes.push("server-url"),kT}}}),mD=fD,yD=bF,gD=yD,vD=dT(pF,bF,{init(){this.element=new zR},methods:{ArrayElement(e){return e.forEach((e=>{const t=dF(e)?["document","objects","Server"]:["value"],r=this.toRefractedElement(t,e);this.element.push(r)})),this.copyMetaAndAttributes(e,this.element),kT}}}),bD=vD,xD=dT(gF,bF,{props:{specPath:mE(["document","objects","ServerVariable"]),canSupportSpecificationExtensions:!0},init(){this.element=new qR}}),wD=xD,$D=bF,SD=$D,ED=bF,kD=bF,OD=dT(iD,bF,{props:{specPath:mE(["document","objects","ServerVariable"])},init(){this.element=new KR}}),jD=dT(gF,bF,{props:{specPath:mE(["document","objects","MediaType"]),canSupportSpecificationExtensions:!0},init(){this.element=new iI}}),AD=dT(pF,{props:{alternator:[]},methods:{enter(e){const t=this.alternator.map((({predicate:e,specPath:t})=>yk(e,mE(t),tO))),r=MO(t)(e);return this.element=this.toRefractedElement(r,e),kT}}}),PD=AD,TD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof GC||e(n)&&t("callback",n)&&r("object",n))),CD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof JC||e(n)&&t("components",n)&&r("object",n))),ID=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof KC||e(n)&&t("contact",n)&&r("object",n))),RD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof XC||e(n)&&t("example",n)&&r("object",n))),_D=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof QC||e(n)&&t("externalDocumentation",n)&&r("object",n))),FD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof tI||e(n)&&t("header",n)&&r("object",n))),DD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof rI||e(n)&&t("info",n)&&r("object",n))),MD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof nI||e(n)&&t("license",n)&&r("object",n))),qD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof sI||e(n)&&t("link",n)&&r("object",n))),LD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof lI||e(n)&&t("openapi",n)&&r("string",n))),BD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r,hasClass:n})=>s=>s instanceof cI||e(s)&&t("openApi3_0",s)&&r("object",s)&&n("api",s))),ND=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof pI||e(n)&&t("operation",n)&&r("object",n))),UD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof dI||e(n)&&t("parameter",n)&&r("object",n))),zD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof hI||e(n)&&t("pathItem",n)&&r("object",n))),HD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof fI||e(n)&&t("paths",n)&&r("object",n))),VD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof mI||e(n)&&t("reference",n)&&r("object",n))),WD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof yI||e(n)&&t("requestBody",n)&&r("object",n))),GD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof gI||e(n)&&t("response",n)&&r("object",n))),JD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof vI||e(n)&&t("responses",n)&&r("object",n))),KD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof _R||e(n)&&t("schema",n)&&r("object",n))),ZD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof FR||e(n)&&t("securityRequirement",n)&&r("object",n))),YD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof MR||e(n)&&t("server",n)&&r("object",n))),XD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof qR||e(n)&&t("serverVariable",n)&&r("object",n))),QD=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof iI||e(n)&&t("mediaType",n)&&r("object",n))),eM=Object.freeze(Object.defineProperty({__proto__:null,isBooleanJsonSchemaElement:e=>BT(e)&&e.classes.includes("boolean-json-schema"),isCallbackElement:TD,isComponentsElement:CD,isContactElement:ID,isExampleElement:RD,isExternalDocumentationElement:_D,isHeaderElement:FD,isInfoElement:DD,isLicenseElement:MD,isLinkElement:qD,isLinkElementExternal:e=>{if(!qD(e))return!1;if(!MT(e.operationRef))return!1;const t=e.operationRef.toValue();return"string"==typeof t&&t.length>0&&!t.startsWith("#")},isMediaTypeElement:QD,isOpenApi3_0Element:BD,isOpenapiElement:LD,isOperationElement:ND,isParameterElement:UD,isPathItemElement:zD,isPathItemElementExternal:e=>{if(!zD(e))return!1;if(!MT(e.$ref))return!1;const t=e.$ref.toValue();return"string"==typeof t&&t.length>0&&!t.startsWith("#")},isPathsElement:HD,isReferenceElement:VD,isReferenceElementExternal:e=>{if(!VD(e))return!1;if(!MT(e.$ref))return!1;const t=e.$ref.toValue();return"string"==typeof t&&t.length>0&&!t.startsWith("#")},isRequestBodyElement:WD,isResponseElement:GD,isResponsesElement:JD,isSchemaElement:KD,isSecurityRequirementElement:ZD,isServerElement:YD,isServerVariableElement:XD},Symbol.toStringTag,{value:"Module"})),tM=dT(PD,bF,{props:{alternator:[{predicate:uF,specPath:["document","objects","Reference"]},{predicate:cS,specPath:["document","objects","Schema"]}]},methods:{ObjectElement(e){const t=PD.compose.methods.enter.call(this,e);return VD(this.element)&&this.element.setMetaProperty("referenced-element","schema"),t}}}),rM=tM,nM=bF,sM=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Example"],canSupportSpecificationExtensions:!0},init(){this.element=new XP,this.element.classes.push("examples")},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","example")})),t}}}),iM=sM,oM=dT(iM,{init(){this.element=new F_}}),aM=dT(iD,bF,{props:{specPath:mE(["document","objects","Encoding"])},init(){this.element=new M_}}),lM=dT(iD,bF,{props:{specPath:mE(["value"])},init(){this.element=new FR}}),cM=dT(pF,bF,{init(){this.element=new VR},methods:{ArrayElement(e){return e.forEach((e=>{if(NT(e)){const t=this.toRefractedElement(["document","objects","SecurityRequirement"],e);this.element.push(t)}else this.element.push(e.clone())})),this.copyMetaAndAttributes(e,this.element),kT}}}),pM=cM,uM=dT(gF,bF,{props:{specPath:mE(["document","objects","Components"]),canSupportSpecificationExtensions:!0},init(){this.element=new JC}}),dM=dT(gF,bF,{props:{specPath:mE(["document","objects","Tag"]),canSupportSpecificationExtensions:!0},init(){this.element=new LR}}),hM=bF,fM=bF,mM=dT(gF,bF,{props:{specPath:mE(["document","objects","Reference"]),canSupportSpecificationExtensions:!1},init(){this.element=new mI},methods:{ObjectElement(e){const t=gF.compose.methods.ObjectElement.call(this,e);return MT(this.element.$ref)&&this.element.classes.push("reference-element"),t}}}),yM=mM,gM=dT(bF,{methods:{StringElement(e){return this.element=e.clone(),this.element.classes.push("reference-value"),kT}}}),vM=gM,bM=dT(gF,bF,{props:{specPath:mE(["document","objects","Parameter"]),canSupportSpecificationExtensions:!0},init(){this.element=new dI},methods:{ObjectElement(e){const t=gF.compose.methods.ObjectElement.call(this,e);return NT(this.element.contentProp)&&this.element.contentProp.filter(QD).forEach(((e,t)=>{e.setMetaProperty("media-type",t.toValue())})),t}}}),xM=bM,wM=bF,$M=bF,SM=bF,EM=bF,kM=bF,OM=bF,jM=bF,AM=bF,PM=bF,TM=dT(PD,bF,{props:{alternator:[{predicate:uF,specPath:["document","objects","Reference"]},{predicate:cS,specPath:["document","objects","Schema"]}]},methods:{ObjectElement(e){const t=PD.compose.methods.enter.call(this,e);return VD(this.element)&&this.element.setMetaProperty("referenced-element","schema"),t}}}),CM=TM,IM=dT(gF,bF,{props:{specPath:mE(["document","objects","Header"]),canSupportSpecificationExtensions:!0},init(){this.element=new tI}}),RM=bF,_M=bF,FM=bF,DM=bF,MM=bF,qM=bF,LM=bF,BM=dT(PD,bF,{props:{alternator:[{predicate:uF,specPath:["document","objects","Reference"]},{predicate:cS,specPath:["document","objects","Schema"]}]},methods:{ObjectElement(e){const t=PD.compose.methods.enter.call(this,e);return VD(this.element)&&this.element.setMetaProperty("referenced-element","schema"),t}}}),NM=bF,UM=dT(iM,{init(){this.element=new Q_}}),zM=dT(iD,bF,{props:{specPath:mE(["document","objects","MediaType"])},init(){this.element=new XP,this.element.classes.push("content")}}),HM=dT(zM,{init(){this.element=new tF}}),VM=dT(gF,bF,{props:{specPath:mE(["document","objects","Schema"]),canSupportSpecificationExtensions:!0},init(){this.element=new _R}}),{items:WM}=SR.visitors.document.objects.JSONSchema.fixedFields,GM=dT(WM,{methods:{ObjectElement(e){const t=WM.compose.methods.ObjectElement.call(this,e);return VD(this.element)&&this.element.setMetaProperty("referenced-element","schema"),t},ArrayElement(e){return this.element=e.clone(),kT}}}),{properties:JM}=SR.visitors.document.objects.JSONSchema.fixedFields,KM=dT(JM,{methods:{ObjectElement(e){const t=JM.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","schema")})),t}}}),{type:ZM}=SR.visitors.document.objects.JSONSchema.fixedFields,YM=dT(ZM,{methods:{ArrayElement(e){return this.element=e.clone(),kT}}}),XM=bF,QM=bF,eq=bF,tq=bF,{JSONSchemaOrJSONReferenceVisitor:rq}=SR.visitors,nq=dT(rq,{methods:{ObjectElement(e){const t=rq.compose.methods.enter.call(this,e);return VD(this.element)&&this.element.setMetaProperty("referenced-element","schema"),t}}}),sq=Object.fromEntries(Object.entries(SR.visitors.document.objects.JSONSchema.fixedFields).map((([e,t])=>t===SR.visitors.JSONSchemaOrJSONReferenceVisitor?[e,nq]:[e,t]))),iq=dT(gF,bF,{props:{specPath:mE(["document","objects","Discriminator"]),canSupportSpecificationExtensions:!1},init(){this.element=new ZC}}),oq=bF,aq=dT(iD,bF,{props:{specPath:mE(["value"])},init(){this.element=new G_}}),lq=dT(gF,bF,{props:{specPath:mE(["document","objects","XML"]),canSupportSpecificationExtensions:!0},init(){this.element=new BR}}),cq=bF,pq=bF,uq=bF,dq=bF,hq=bF,fq=bF,mq=dT(iM,{init(){this.element=new w_}}),yq=dT(zM,{init(){this.element=new S_}}),gq=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Schema"]},init(){this.element=new YR},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","schema")})),t}}}),vq=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Response"]},init(){this.element=new QR},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","response")})),this.element.filter(GD).forEach(((e,t)=>{e.setMetaProperty("http-status-code",t.toValue())})),t}}}),bq=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Parameter"]},init(){this.element=new t_},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","parameter")})),t}}}),xq=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Example"]},init(){this.element=new n_},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","example")})),t}}}),wq=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","RequestBody"]},init(){this.element=new i_},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","requestBody")})),t}}}),$q=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Header"]},init(){this.element=new a_},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","header")})),this.element.filter(FD).forEach(((e,t)=>{e.setMetaProperty("header-name",t.toValue())})),t}}}),Sq=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","SecurityScheme"]},init(){this.element=new c_},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","securityScheme")})),t}}}),Eq=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Link"]},init(){this.element=new u_},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","link")})),t}}}),kq=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Callback"]},init(){this.element=new h_},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","callback")})),t}}}),Oq=dT(gF,bF,{props:{specPath:mE(["document","objects","Example"]),canSupportSpecificationExtensions:!0},init(){this.element=new XC},methods:{ObjectElement(e){const t=gF.compose.methods.ObjectElement.call(this,e);return MT(this.element.externalValue)&&this.element.classes.push("reference-element"),t}}}),jq=bF,Aq=bF,Pq=bF,Tq=dT(bF,{methods:{StringElement(e){return this.element=e.clone(),this.element.classes.push("reference-value"),kT}}}),Cq=dT(gF,bF,{props:{specPath:mE(["document","objects","ExternalDocumentation"]),canSupportSpecificationExtensions:!0},init(){this.element=new QC}}),Iq=bF,Rq=bF,_q=dT(gF,bF,{props:{specPath:mE(["document","objects","Encoding"]),canSupportSpecificationExtensions:!0},init(){this.element=new YC},methods:{ObjectElement(e){const t=gF.compose.methods.ObjectElement.call(this,e);return NT(this.element.headers)&&this.element.headers.filter(FD).forEach(((e,t)=>{e.setMetaProperty("header-name",t.toValue())})),t}}}),Fq=bF,Dq=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Header"]},init(){this.element=new L_},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","header")})),this.element.forEach(((e,t)=>{if(!FD(e))return;const r=t.toValue();e.setMetaProperty("headerName",r)})),t}}}),Mq=bF,qq=bF,Lq=bF,Bq=dT(nD,bF,{props:{fieldPatternPredicate:Yk(/^\/(?<path>.*)$/),specPath:mE(["document","objects","PathItem"]),canSupportSpecificationExtensions:!0},init(){this.element=new fI},methods:{ObjectElement(e){const t=nD.compose.methods.ObjectElement.call(this,e);return this.element.filter(zD).forEach(((e,t)=>{e.setMetaProperty("path",t.clone())})),t}}}),Nq=dT(gF,bF,{props:{specPath:mE(["document","objects","RequestBody"])},init(){this.element=new yI},methods:{ObjectElement(e){const t=gF.compose.methods.ObjectElement.call(this,e);return NT(this.element.contentProp)&&this.element.contentProp.filter(QD).forEach(((e,t)=>{e.setMetaProperty("media-type",t.toValue())})),t}}}),Uq=bF,zq=dT(zM,{init(){this.element=new R_}}),Hq=bF,Vq=dT(nD,bF,{props:{fieldPatternPredicate:Yk(/{(?<expression>.*)}/),specPath:mE(["document","objects","PathItem"]),canSupportSpecificationExtensions:!0},init(){this.element=new GC},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(zD).forEach(((e,t)=>{e.setMetaProperty("runtime-expression",t.toValue())})),t}}}),Wq=dT(gF,bF,{props:{specPath:mE(["document","objects","Response"])},init(){this.element=new gI},methods:{ObjectElement(e){const t=gF.compose.methods.ObjectElement.call(this,e);return NT(this.element.contentProp)&&this.element.contentProp.filter(QD).forEach(((e,t)=>{e.setMetaProperty("media-type",t.toValue())})),NT(this.element.headers)&&this.element.headers.filter(FD).forEach(((e,t)=>{e.setMetaProperty("header-name",t.toValue())})),t}}}),Gq=bF,Jq=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Header"]},init(){this.element=new N_},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","header")})),this.element.forEach(((e,t)=>{if(!FD(e))return;const r=t.toValue();e.setMetaProperty("header-name",r)})),t}}}),Kq=dT(zM,{init(){this.element=new z_}}),Zq=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Link"]},init(){this.element=new V_},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","link")})),t}}}),Yq=dT(gF,nD,{props:{specPathFixedFields:IO,specPathPatternedFields:IO},methods:{ObjectElement(e){const{specPath:t,ignoredFields:r}=this;try{this.specPath=this.specPathFixedFields;const t=this.retrieveFixedFields(this.specPath(e));this.ignoredFields=[...r,...ZE(e.keys(),t)],gF.compose.methods.ObjectElement.call(this,e),this.specPath=this.specPathPatternedFields,this.ignoredFields=t,nD.compose.methods.ObjectElement.call(this,e)}catch(e){throw this.specPath=t,e}return kT}}}),Xq=dT(Yq,bF,{props:{specPathFixedFields:mE(["document","objects","Responses"]),specPathPatternedFields:e=>uF(e)?["document","objects","Reference"]:["document","objects","Response"],fieldPatternPredicate:Yk(new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${Uk(100,600).join("|")})$`)),canSupportSpecificationExtensions:!0},init(){this.element=new vI},methods:{ObjectElement(e){const t=Yq.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","response")})),this.element.filter(GD).forEach(((e,t)=>{const r=t.clone();this.fieldPatternPredicate(r.toValue())&&e.setMetaProperty("http-status-code",r)})),t}}}),Qq=dT(PD,bF,{props:{alternator:[{predicate:uF,specPath:["document","objects","Reference"]},{predicate:cS,specPath:["document","objects","Response"]}]},methods:{ObjectElement(e){const t=PD.compose.methods.enter.call(this,e);return VD(this.element)?this.element.setMetaProperty("referenced-element","response"):GD(this.element)&&this.element.setMetaProperty("http-status-code","default"),t}}}),eL=dT(gF,bF,{props:{specPath:mE(["document","objects","Operation"])},init(){this.element=new pI}}),tL=dT(bF,{init(){this.element=new k_},methods:{ArrayElement(e){return this.element=this.element.concat(e.clone()),kT}}}),rL=bF,nL=bF,sL=bF,iL=dT(pF,bF,{init(){this.element=new YP,this.element.classes.push("parameters")},methods:{ArrayElement(e){return e.forEach((e=>{const t=uF(e)?["document","objects","Reference"]:["document","objects","Parameter"],r=this.toRefractedElement(t,e);VD(r)&&r.setMetaProperty("referenced-element","parameter"),this.element.push(r)})),this.copyMetaAndAttributes(e,this.element),kT}}}),oL=dT(iL,{init(){this.element=new b_}}),aL=dT(PD,{props:{alternator:[{predicate:uF,specPath:["document","objects","Reference"]},{predicate:cS,specPath:["document","objects","RequestBody"]}]},methods:{ObjectElement(e){const t=PD.compose.methods.enter.call(this,e);return VD(this.element)&&this.element.setMetaProperty("referenced-element","requestBody"),t}}}),lL=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","Callback"]},init(){this.element=new j_},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(VD).forEach((e=>{e.setMetaProperty("referenced-element","callback")})),t}}}),cL=bF,pL=dT(pF,bF,{init(){this.element=new P_},methods:{ArrayElement(e){return e.forEach((e=>{const t=NT(e)?["document","objects","SecurityRequirement"]:["value"],r=this.toRefractedElement(t,e);this.element.push(r)})),this.copyMetaAndAttributes(e,this.element),kT}}}),uL=dT(bD,{init(){this.element=new C_}}),dL=dT(gF,bF,{props:{specPath:mE(["document","objects","PathItem"])},init(){this.element=new hI},methods:{ObjectElement(e){const t=gF.compose.methods.ObjectElement.call(this,e);return this.element.filter(ND).forEach(((e,t)=>{const r=t.clone();r.content=r.toValue().toUpperCase(),e.setMetaProperty("http-method",r)})),MT(this.element.$ref)&&this.element.classes.push("reference-element"),t}}}),hL=dT(bF,{methods:{StringElement(e){return this.element=e.clone(),this.element.classes.push("reference-value"),kT}}}),fL=bF,mL=bF,yL=dT(bD,{init(){this.element=new m_}}),gL=dT(iL,{init(){this.element=new g_}}),vL=dT(gF,bF,{props:{specPath:mE(["document","objects","SecurityScheme"]),canSupportSpecificationExtensions:!0},init(){this.element=new DR}}),bL=bF,xL=bF,wL=bF,$L=bF,SL=bF,EL=bF,kL=bF,OL=dT(gF,bF,{props:{specPath:mE(["document","objects","OAuthFlows"]),canSupportSpecificationExtensions:!0},init(){this.element=new aI}}),jL=dT(gF,bF,{props:{specPath:mE(["document","objects","OAuthFlow"]),canSupportSpecificationExtensions:!0},init(){this.element=new oI}}),AL=bF,PL=bF,TL=bF,CL=dT(iD,bF,{props:{specPath:mE(["value"])},init(){this.element=new K_}}),IL=dT(pF,bF,{init(){this.element=new GR},methods:{ArrayElement(e){return e.forEach((e=>{const t=hF(e)?["document","objects","Tag"]:["value"],r=this.toRefractedElement(t,e);this.element.push(r)})),this.copyMetaAndAttributes(e,this.element),kT}}});function RL(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?RL(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):RL(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const FL={$visitor:yM,fixedFields:{$ref:vM}},DL={$visitor:VM,fixedFields:_L(_L({},sq),{},{items:GM,properties:KM,type:YM,nullable:XM,discriminator:{$ref:"#/visitors/document/objects/Discriminator"},writeOnly:QM,xml:{$ref:"#/visitors/document/objects/XML"},externalDocs:{$ref:"#/visitors/document/objects/ExternalDocumentation"},example:eq,deprecated:tq})},ML={visitors:{value:bF,document:{objects:{OpenApi:{$visitor:wF,fixedFields:{openapi:SF,info:{$ref:"#/visitors/document/objects/Info"},servers:bD,paths:{$ref:"#/visitors/document/objects/Paths"},components:{$ref:"#/visitors/document/objects/Components"},security:pM,tags:IL,externalDocs:{$ref:"#/visitors/document/objects/ExternalDocumentation"}}},Info:{$visitor:jF,fixedFields:{title:PF,description:CF,termsOfService:RF,contact:{$ref:"#/visitors/document/objects/Contact"},license:{$ref:"#/visitors/document/objects/License"},version:FF}},Contact:{$visitor:MF,fixedFields:{name:LF,url:NF,email:zF}},License:{$visitor:VF,fixedFields:{name:GF,url:KF}},Server:{$visitor:hD,fixedFields:{url:mD,description:gD,variables:OD}},ServerVariable:{$visitor:wD,fixedFields:{enum:SD,default:ED,description:kD}},Components:{$visitor:uM,fixedFields:{schemas:gq,responses:vq,parameters:bq,examples:xq,requestBodies:wq,headers:$q,securitySchemes:Sq,links:Eq,callbacks:kq}},Paths:{$visitor:Bq},PathItem:{$visitor:dL,fixedFields:{$ref:hL,summary:fL,description:mL,get:{$ref:"#/visitors/document/objects/Operation"},put:{$ref:"#/visitors/document/objects/Operation"},post:{$ref:"#/visitors/document/objects/Operation"},delete:{$ref:"#/visitors/document/objects/Operation"},options:{$ref:"#/visitors/document/objects/Operation"},head:{$ref:"#/visitors/document/objects/Operation"},patch:{$ref:"#/visitors/document/objects/Operation"},trace:{$ref:"#/visitors/document/objects/Operation"},servers:yL,parameters:gL}},Operation:{$visitor:eL,fixedFields:{tags:tL,summary:rL,description:nL,externalDocs:{$ref:"#/visitors/document/objects/ExternalDocumentation"},operationId:sL,parameters:oL,requestBody:aL,responses:{$ref:"#/visitors/document/objects/Responses"},callbacks:lL,deprecated:cL,security:pL,servers:uL}},ExternalDocumentation:{$visitor:Cq,fixedFields:{description:Iq,url:Rq}},Parameter:{$visitor:xM,fixedFields:{name:wM,in:$M,description:SM,required:EM,deprecated:kM,allowEmptyValue:OM,style:jM,explode:AM,allowReserved:PM,schema:CM,example:fq,examples:mq,content:yq}},RequestBody:{$visitor:Nq,fixedFields:{description:Uq,content:zq,required:Hq}},MediaType:{$visitor:jD,fixedFields:{schema:rM,example:nM,examples:oM,encoding:aM}},Encoding:{$visitor:_q,fixedFields:{contentType:Fq,headers:Dq,style:Mq,explode:qq,allowReserved:Lq}},Responses:{$visitor:Xq,fixedFields:{default:Qq}},Response:{$visitor:Wq,fixedFields:{description:Gq,headers:Jq,content:Kq,links:Zq}},Callback:{$visitor:Vq},Example:{$visitor:Oq,fixedFields:{summary:jq,description:Aq,value:Pq,externalValue:Tq}},Link:{$visitor:YF,fixedFields:{operationRef:QF,operationId:tD,parameters:aD,requestBody:cD,description:uD,server:{$ref:"#/visitors/document/objects/Server"}}},Header:{$visitor:IM,fixedFields:{description:RM,required:_M,deprecated:FM,allowEmptyValue:DM,style:MM,explode:qM,allowReserved:LM,schema:BM,example:NM,examples:UM,content:HM}},Tag:{$visitor:dM,fixedFields:{name:hM,description:fM,externalDocs:{$ref:"#/visitors/document/objects/ExternalDocumentation"}}},JSONReference:FL,Reference:FL,JSONSchema:DL,Schema:DL,LinkDescription:SR.visitors.document.objects.LinkDescription,Media:SR.visitors.document.objects.Media,Discriminator:{$visitor:iq,fixedFields:{propertyName:oq,mapping:aq}},XML:{$visitor:lq,fixedFields:{name:cq,namespace:pq,prefix:uq,attribute:dq,wrapped:hq}},SecurityScheme:{$visitor:vL,fixedFields:{type:bL,description:xL,name:wL,in:$L,scheme:SL,bearerFormat:EL,flows:{$ref:"#/visitors/document/objects/OAuthFlows"},openIdConnectUrl:kL}},OAuthFlows:{$visitor:OL,fixedFields:{implicit:{$ref:"#/visitors/document/objects/OAuthFlow"},password:{$ref:"#/visitors/document/objects/OAuthFlow"},clientCredentials:{$ref:"#/visitors/document/objects/OAuthFlow"},authorizationCode:{$ref:"#/visitors/document/objects/OAuthFlow"}}},OAuthFlow:{$visitor:jL,fixedFields:{authorizationUrl:AL,tokenUrl:PL,refreshUrl:TL,scopes:CL}},SecurityRequirement:{$visitor:lM}},extension:{$visitor:kF}}}};function qL(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function LL(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?qL(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qL(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const BL=()=>{const e=cT(NR);return{predicates:LL(LL(LL({},mF),eM),{},{isStringElement:MT}),namespace:e}};function NL(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const UL=e=>(t,r={})=>((e,{specPath:t=["visitors","document","objects","OpenApi","$visitor"],plugins:r=[]}={})=>{const n=rT(e),s=AC(ML),i=BO(t,[],s);return lC(n,i,{state:{specObj:s}}),bC(i.element,r,{toolboxCreator:BL,visitorOptions:{keyMap:sF,nodeTypeGetter:nF}})})(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?NL(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):NL(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({specPath:e},r));GC.refract=UL(["visitors","document","objects","Callback","$visitor"]),JC.refract=UL(["visitors","document","objects","Components","$visitor"]),KC.refract=UL(["visitors","document","objects","Contact","$visitor"]),XC.refract=UL(["visitors","document","objects","Example","$visitor"]),ZC.refract=UL(["visitors","document","objects","Discriminator","$visitor"]),YC.refract=UL(["visitors","document","objects","Encoding","$visitor"]),QC.refract=UL(["visitors","document","objects","ExternalDocumentation","$visitor"]),tI.refract=UL(["visitors","document","objects","Header","$visitor"]),rI.refract=UL(["visitors","document","objects","Info","$visitor"]),nI.refract=UL(["visitors","document","objects","License","$visitor"]),sI.refract=UL(["visitors","document","objects","Link","$visitor"]),iI.refract=UL(["visitors","document","objects","MediaType","$visitor"]),oI.refract=UL(["visitors","document","objects","OAuthFlow","$visitor"]),aI.refract=UL(["visitors","document","objects","OAuthFlows","$visitor"]),lI.refract=UL(["visitors","document","objects","OpenApi","fixedFields","openapi"]),cI.refract=UL(["visitors","document","objects","OpenApi","$visitor"]),pI.refract=UL(["visitors","document","objects","Operation","$visitor"]),dI.refract=UL(["visitors","document","objects","Parameter","$visitor"]),hI.refract=UL(["visitors","document","objects","PathItem","$visitor"]),fI.refract=UL(["visitors","document","objects","Paths","$visitor"]),mI.refract=UL(["visitors","document","objects","Reference","$visitor"]),yI.refract=UL(["visitors","document","objects","RequestBody","$visitor"]),gI.refract=UL(["visitors","document","objects","Response","$visitor"]),vI.refract=UL(["visitors","document","objects","Responses","$visitor"]),_R.refract=UL(["visitors","document","objects","Schema","$visitor"]),FR.refract=UL(["visitors","document","objects","SecurityRequirement","$visitor"]),DR.refract=UL(["visitors","document","objects","SecurityScheme","$visitor"]),MR.refract=UL(["visitors","document","objects","Server","$visitor"]),qR.refract=UL(["visitors","document","objects","ServerVariable","$visitor"]),LR.refract=UL(["visitors","document","objects","Tag","$visitor"]),BR.refract=UL(["visitors","document","objects","XML","$visitor"]);const zL=class extends GC{},HL=class extends JC{get pathItems(){return this.get("pathItems")}set pathItems(e){this.set("pathItems",e)}},VL=class extends KC{},WL=class extends ZC{},GL=class extends YC{},JL=class extends XC{},KL=class extends QC{},ZL=class extends tI{get schema(){return this.get("schema")}set schema(e){this.set("schema",e)}},YL=class extends rI{get license(){return this.get("license")}set license(e){this.set("license",e)}get summary(){return this.get("summary")}set summary(e){this.set("summary",e)}};class XL extends GP{constructor(e,t,r){super(e,t,r),this.element="jsonSchemaDialect"}}Rh(XL,"default",new XL("https://spec.openapis.org/oas/3.1/dialect/base"));const QL=XL,eB=class extends nI{get identifier(){return this.get("identifier")}set identifier(e){this.set("identifier",e)}},tB=class extends sI{},rB=class extends iI{get schema(){return this.get("schema")}set schema(e){this.set("schema",e)}},nB=class extends oI{},sB=class extends aI{},iB=class extends lI{},oB=class extends XP{constructor(e,t,r){super(e,t,r),this.element="openApi3_1",this.classes.push("api")}get openapi(){return this.get("openapi")}set openapi(e){this.set("openapi",e)}get info(){return this.get("info")}set info(e){this.set("info",e)}get jsonSchemaDialect(){return this.get("jsonSchemaDialect")}set jsonSchemaDialect(e){this.set("jsonSchemaDialect",e)}get servers(){return this.get("servers")}set servers(e){this.set("servers",e)}get paths(){return this.get("paths")}set paths(e){this.set("paths",e)}get components(){return this.get("components")}set components(e){this.set("components",e)}get security(){return this.get("security")}set security(e){this.set("security",e)}get tags(){return this.get("tags")}set tags(e){this.set("tags",e)}get externalDocs(){return this.get("externalDocs")}set externalDocs(e){this.set("externalDocs",e)}get webhooks(){return this.get("webhooks")}set webhooks(e){this.set("webhooks",e)}},aB=class extends pI{get requestBody(){return this.get("requestBody")}set requestBody(e){this.set("requestBody",e)}},lB=class extends dI{get schema(){return this.get("schema")}set schema(e){this.set("schema",e)}},cB=class extends hI{get GET(){return this.get("get")}set GET(e){this.set("GET",e)}get PUT(){return this.get("put")}set PUT(e){this.set("PUT",e)}get POST(){return this.get("post")}set POST(e){this.set("POST",e)}get DELETE(){return this.get("delete")}set DELETE(e){this.set("DELETE",e)}get OPTIONS(){return this.get("options")}set OPTIONS(e){this.set("OPTIONS",e)}get HEAD(){return this.get("head")}set HEAD(e){this.set("HEAD",e)}get PATCH(){return this.get("patch")}set PATCH(e){this.set("PATCH",e)}get TRACE(){return this.get("trace")}set TRACE(e){this.set("TRACE",e)}},pB=class extends fI{};let uB=class extends mI{};Object.defineProperty(uB.prototype,"description",{get(){return this.get("description")},set(e){this.set("description",e)},enumerable:!0}),Object.defineProperty(uB.prototype,"summary",{get(){return this.get("summary")},set(e){this.set("summary",e)},enumerable:!0});const dB=uB,hB=class extends yI{},fB=class extends gI{},mB=class extends vI{},yB=class extends XP{constructor(e,t,r){super(e,t,r),this.element="schema"}get $schema(){return this.get("$schema")}set $schema(e){this.set("$schema",e)}get $vocabulary(){return this.get("$vocabulary")}set $vocabulary(e){this.set("$vocabulary",e)}get $id(){return this.get("$id")}set $id(e){this.set("$id",e)}get $anchor(){return this.get("$anchor")}set $anchor(e){this.set("$anchor",e)}get $dynamicAnchor(){return this.get("$dynamicAnchor")}set $dynamicAnchor(e){this.set("$dynamicAnchor",e)}get $dynamicRef(){return this.get("$dynamicRef")}set $dynamicRef(e){this.set("$dynamicRef",e)}get $ref(){return this.get("$ref")}set $ref(e){this.set("$ref",e)}get $defs(){return this.get("$defs")}set $defs(e){this.set("$defs",e)}get $comment(){return this.get("$comment")}set $comment(e){this.set("$comment",e)}get allOf(){return this.get("allOf")}set allOf(e){this.set("allOf",e)}get anyOf(){return this.get("anyOf")}set anyOf(e){this.set("anyOf",e)}get oneOf(){return this.get("oneOf")}set oneOf(e){this.set("oneOf",e)}get not(){return this.get("not")}set not(e){this.set("not",e)}get if(){return this.get("if")}set if(e){this.set("if",e)}get then(){return this.get("then")}set then(e){this.set("then",e)}get else(){return this.get("else")}set else(e){this.set("else",e)}get dependentSchemas(){return this.get("dependentSchemas")}set dependentSchemas(e){this.set("dependentSchemas",e)}get prefixItems(){return this.get("prefixItems")}set prefixItems(e){this.set("prefixItems",e)}get items(){return this.get("items")}set items(e){this.set("items",e)}get containsProp(){return this.get("contains")}set containsProp(e){this.set("contains",e)}get properties(){return this.get("properties")}set properties(e){this.set("properties",e)}get patternProperties(){return this.get("patternProperties")}set patternProperties(e){this.set("patternProperties",e)}get additionalProperties(){return this.get("additionalProperties")}set additionalProperties(e){this.set("additionalProperties",e)}get propertyNames(){return this.get("propertyNames")}set propertyNames(e){this.set("propertyNames",e)}get unevaluatedItems(){return this.get("unevaluatedItems")}set unevaluatedItems(e){this.set("unevaluatedItems",e)}get unevaluatedProperties(){return this.get("unevaluatedProperties")}set unevaluatedProperties(e){this.set("unevaluatedProperties",e)}get type(){return this.get("type")}set type(e){this.set("type",e)}get enum(){return this.get("enum")}set enum(e){this.set("enum",e)}get const(){return this.get("const")}set const(e){this.set("const",e)}get multipleOf(){return this.get("multipleOf")}set multipleOf(e){this.set("multipleOf",e)}get maximum(){return this.get("maximum")}set maximum(e){this.set("maximum",e)}get exclusiveMaximum(){return this.get("exclusiveMaximum")}set exclusiveMaximum(e){this.set("exclusiveMaximum",e)}get minimum(){return this.get("minimum")}set minimum(e){this.set("minimum",e)}get exclusiveMinimum(){return this.get("exclusiveMinimum")}set exclusiveMinimum(e){this.set("exclusiveMinimum",e)}get maxLength(){return this.get("maxLength")}set maxLength(e){this.set("maxLength",e)}get minLength(){return this.get("minLength")}set minLength(e){this.set("minLength",e)}get pattern(){return this.get("pattern")}set pattern(e){this.set("pattern",e)}get maxItems(){return this.get("maxItems")}set maxItems(e){this.set("maxItems",e)}get minItems(){return this.get("minItems")}set minItems(e){this.set("minItems",e)}get uniqueItems(){return this.get("uniqueItems")}set uniqueItems(e){this.set("uniqueItems",e)}get maxContains(){return this.get("maxContains")}set maxContains(e){this.set("maxContains",e)}get minContains(){return this.get("minContains")}set minContains(e){this.set("minContains",e)}get maxProperties(){return this.get("maxProperties")}set maxProperties(e){this.set("maxProperties",e)}get minProperties(){return this.get("minProperties")}set minProperties(e){this.set("minProperties",e)}get required(){return this.get("required")}set required(e){this.set("required",e)}get dependentRequired(){return this.get("dependentRequired")}set dependentRequired(e){this.set("dependentRequired",e)}get title(){return this.get("title")}set title(e){this.set("title",e)}get description(){return this.get("description")}set description(e){this.set("description",e)}get default(){return this.get("default")}set default(e){this.set("default",e)}get deprecated(){return this.get("deprecated")}set deprecated(e){this.set("deprecated",e)}get readOnly(){return this.get("readOnly")}set readOnly(e){this.set("readOnly",e)}get writeOnly(){return this.get("writeOnly")}set writeOnly(e){this.set("writeOnly",e)}get examples(){return this.get("examples")}set examples(e){this.set("examples",e)}get format(){return this.get("format")}set format(e){this.set("format",e)}get contentEncoding(){return this.get("contentEncoding")}set contentEncoding(e){this.set("contentEncoding",e)}get contentMediaType(){return this.get("contentMediaType")}set contentMediaType(e){this.set("contentMediaType",e)}get contentSchema(){return this.get("contentSchema")}set contentSchema(e){this.set("contentSchema",e)}get discriminator(){return this.get("discriminator")}set discriminator(e){this.set("discriminator",e)}get xml(){return this.get("xml")}set xml(e){this.set("xml",e)}get externalDocs(){return this.get("externalDocs")}set externalDocs(e){this.set("externalDocs",e)}get example(){return this.get("example")}set example(e){this.set("example",e)}},gB=class extends FR{},vB=class extends DR{},bB=class extends MR{},xB=class extends qR{},wB=class extends LR{},$B=class extends BR{},SB={namespace:e=>{const{base:t}=e;return t.register("callback",zL),t.register("components",HL),t.register("contact",VL),t.register("discriminator",WL),t.register("encoding",GL),t.register("example",JL),t.register("externalDocumentation",KL),t.register("header",ZL),t.register("info",YL),t.register("jsonSchemaDialect",QL),t.register("license",eB),t.register("link",tB),t.register("mediaType",rB),t.register("oAuthFlow",nB),t.register("oAuthFlows",sB),t.register("openapi",iB),t.register("openApi3_1",oB),t.register("operation",aB),t.register("parameter",lB),t.register("pathItem",cB),t.register("paths",pB),t.register("reference",dB),t.register("requestBody",hB),t.register("response",fB),t.register("responses",mB),t.register("schema",yB),t.register("securityRequirement",gB),t.register("securityScheme",vB),t.register("server",bB),t.register("serverVariable",xB),t.register("tag",wB),t.register("xml",$B),t}};class EB extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(EB.primaryClass)}}Rh(EB,"primaryClass","components-path-items");const kB=EB;class OB extends XP{constructor(e,t,r){super(e,t,r),this.classes.push(OB.primaryClass)}}Rh(OB,"primaryClass","webhooks");const jB=OB;function AB(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const PB=e=>{if(DT(e))return`${e.element.charAt(0).toUpperCase()+e.element.slice(1)}Element`},TB=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?AB(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):AB(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({CallbackElement:["content"],ComponentsElement:["content"],ContactElement:["content"],DiscriminatorElement:["content"],Encoding:["content"],Example:["content"],ExternalDocumentationElement:["content"],HeaderElement:["content"],InfoElement:["content"],LicenseElement:["content"],MediaTypeElement:["content"],OAuthFlowElement:["content"],OAuthFlowsElement:["content"],OpenApi3_1Element:["content"],OperationElement:["content"],ParameterElement:["content"],PathItemElement:["content"],PathsElement:["content"],ReferenceElement:["content"],RequestBodyElement:["content"],ResponseElement:["content"],ResponsesElement:["content"],SchemaElement:["content"],SecurityRequirementElement:["content"],SecuritySchemeElement:["content"],ServerElement:["content"],ServerVariableElement:["content"],TagElement:["content"]},oC),CB=e=>e.replace(/\s/g,""),IB=e=>e.replace(/\W/gi,"_"),RB=(e,t,r)=>{const n=CB(e);return n.length>0?IB(n):((e,t)=>`${IB(CB(t.toLowerCase()))}${IB(CB(e))}`)(t,r)},_B=({operationIdNormalizer:e=RB}={})=>({predicates:t,namespace:r})=>{const n=[],s=[],i=[];return{visitor:{OpenApi3_1Element:{leave(){const e=lk((e=>qC(e.operationId)),s);Object.entries(e).forEach((([e,t])=>{t.length<=1||t.forEach(((t,n)=>{const s=`${e}${n+1}`;t.operationId=new r.elements.String(s)}))})),i.forEach((e=>{var t;if(void 0===e.operationId)return;const r=String(qC(e.operationId)),n=s.find((e=>qC(e.meta.get("originalOperationId"))===r));void 0!==n&&(e.operationId=null===(t=n.operationId)||void 0===t?void 0:t.clone(),e.meta.set("originalOperationId",r),e.set("__originalOperationId",r))})),s.length=0,i.length=0}},PathItemElement:{enter(e){const t=WE("path",qC(e.meta.get("path")));n.push(t)},leave(){n.pop()}},OperationElement:{enter(t){if(void 0===t.operationId)return;const i=String(qC(t.operationId)),o=tk(n),a=WE("method",qC(t.meta.get("http-method"))),l=e(i,o,a);i!==l&&(t.operationId=new r.elements.String(l),t.set("__originalOperationId",i),t.meta.set("originalOperationId",i),s.push(t))}},LinkElement:{leave(e){t.isLinkElement(e)&&void 0!==e.operationId&&i.push(e)}}}}},FB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof zL||e(n)&&t("callback",n)&&r("object",n))),DB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof HL||e(n)&&t("components",n)&&r("object",n))),MB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof VL||e(n)&&t("contact",n)&&r("object",n))),qB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof JL||e(n)&&t("example",n)&&r("object",n))),LB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof KL||e(n)&&t("externalDocumentation",n)&&r("object",n))),BB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof ZL||e(n)&&t("header",n)&&r("object",n))),NB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof YL||e(n)&&t("info",n)&&r("object",n))),UB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof QL||e(n)&&t("jsonSchemaDialect",n)&&r("string",n))),zB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof eB||e(n)&&t("license",n)&&r("object",n))),HB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof tB||e(n)&&t("link",n)&&r("object",n))),VB=e=>{if(!HB(e))return!1;if(!MT(e.operationRef))return!1;const t=e.operationRef.toValue();return"string"==typeof t&&t.length>0&&!t.startsWith("#")},WB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof iB||e(n)&&t("openapi",n)&&r("string",n))),GB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r,hasClass:n})=>s=>s instanceof oB||e(s)&&t("openApi3_1",s)&&r("object",s)&&n("api",s))),JB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof aB||e(n)&&t("operation",n)&&r("object",n))),KB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof lB||e(n)&&t("parameter",n)&&r("object",n))),ZB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof cB||e(n)&&t("pathItem",n)&&r("object",n))),YB=e=>{if(!ZB(e))return!1;if(!MT(e.$ref))return!1;const t=e.$ref.toValue();return"string"==typeof t&&t.length>0&&!t.startsWith("#")},XB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof pB||e(n)&&t("paths",n)&&r("object",n))),QB=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof dB||e(n)&&t("reference",n)&&r("object",n))),eN=e=>{if(!QB(e))return!1;if(!MT(e.$ref))return!1;const t=e.$ref.toValue();return"string"==typeof t&&t.length>0&&!t.startsWith("#")},tN=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof hB||e(n)&&t("requestBody",n)&&r("object",n))),rN=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof fB||e(n)&&t("response",n)&&r("object",n))),nN=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof mB||e(n)&&t("responses",n)&&r("object",n))),sN=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof yB||e(n)&&t("schema",n)&&r("object",n))),iN=e=>BT(e)&&e.classes.includes("boolean-json-schema"),oN=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof gB||e(n)&&t("securityRequirement",n)&&r("object",n))),aN=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof bB||e(n)&&t("server",n)&&r("object",n))),lN=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof xB||e(n)&&t("serverVariable",n)&&r("object",n))),cN=FT((({hasBasicElementProps:e,isElementType:t,primitiveEq:r})=>n=>n instanceof rB||e(n)&&t("mediaType",n)&&r("object",n))),pN=Object.freeze(Object.defineProperty({__proto__:null,isBooleanJsonSchemaElement:iN,isCallbackElement:FB,isComponentsElement:DB,isContactElement:MB,isExampleElement:qB,isExternalDocumentationElement:LB,isHeaderElement:BB,isInfoElement:NB,isJsonSchemaDialectElement:UB,isLicenseElement:zB,isLinkElement:HB,isLinkElementExternal:VB,isMediaTypeElement:cN,isOpenApi3_1Element:GB,isOpenapiElement:WB,isOperationElement:JB,isParameterElement:KB,isPathItemElement:ZB,isPathItemElementExternal:YB,isPathsElement:XB,isReferenceElement:QB,isReferenceElementExternal:eN,isRequestBodyElement:tN,isResponseElement:rN,isResponsesElement:nN,isSchemaElement:sN,isSecurityRequirementElement:oN,isServerElement:aN,isServerVariableElement:lN},Symbol.toStringTag,{value:"Module"}));function uN(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function dN(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?uN(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):uN(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const hN=()=>{const e=cT(SB);return{predicates:dN(dN({},pN),{},{isStringElement:MT,isArrayElement:UT,isObjectElement:NT,includesClasses:XT}),namespace:e}},fN=dT(gF,bF,{props:{specPath:mE(["document","objects","OpenApi"]),canSupportSpecificationExtensions:!0},init(){this.element=new oB,this.openApiSemanticElement=this.element},methods:{ObjectElement(e){return this.openApiGenericElement=e,gF.compose.methods.ObjectElement.call(this,e)}}}),mN=fN,{visitors:{document:{objects:{Info:{$visitor:yN}}}}}=ML,gN=dT(yN,{init(){this.element=new YL}}),vN=bF,{visitors:{document:{objects:{Contact:{$visitor:bN}}}}}=ML,xN=dT(bN,{init(){this.element=new VL}}),{visitors:{document:{objects:{License:{$visitor:wN}}}}}=ML,$N=dT(wN,{init(){this.element=new eB}}),SN=bF,{visitors:{document:{objects:{Link:{$visitor:EN}}}}}=ML,kN=dT(EN,{init(){this.element=new tB}}),ON=dT(pF,bF,{methods:{StringElement(e){const t=new QL(e.toValue());return this.copyMetaAndAttributes(e,t),this.element=t,kT}}}),{visitors:{document:{objects:{Server:{$visitor:jN}}}}}=ML,AN=dT(jN,{init(){this.element=new bB}}),{visitors:{document:{objects:{ServerVariable:{$visitor:PN}}}}}=ML,TN=dT(PN,{init(){this.element=new xB}}),{visitors:{document:{objects:{MediaType:{$visitor:CN}}}}}=ML,IN=dT(CN,{init(){this.element=new rB}}),{visitors:{document:{objects:{SecurityRequirement:{$visitor:RN}}}}}=ML,_N=dT(RN,{init(){this.element=new gB}}),{visitors:{document:{objects:{Components:{$visitor:FN}}}}}=ML,DN=dT(FN,{init(){this.element=new HL}}),{visitors:{document:{objects:{Tag:{$visitor:MN}}}}}=ML,qN=dT(MN,{init(){this.element=new wB}}),{visitors:{document:{objects:{Reference:{$visitor:LN}}}}}=ML,BN=dT(LN,{init(){this.element=new dB}}),NN=bF,UN=bF,{visitors:{document:{objects:{Parameter:{$visitor:zN}}}}}=ML,HN=dT(zN,{init(){this.element=new lB}}),{visitors:{document:{objects:{Header:{$visitor:VN}}}}}=ML,WN=dT(VN,{init(){this.element=new ZL}}),GN=dT({props:{parent:null},init({parent:e=this.parent}){this.parent=e,this.passingOptionsNames=[...this.passingOptionsNames,"parent"]}}),JN=GN,KN=dT(gF,JN,bF,{props:{specPath:mE(["document","objects","Schema"]),canSupportSpecificationExtensions:!0},init(){const e=()=>{let e;return e=null!==this.openApiSemanticElement&&UB(this.openApiSemanticElement.jsonSchemaDialect)?this.openApiSemanticElement.jsonSchemaDialect.toValue():null!==this.openApiGenericElement&&MT(this.openApiGenericElement.get("jsonSchemaDialect"))?this.openApiGenericElement.get("jsonSchemaDialect").toValue():QL.default.toValue(),e},t=t=>{if(sO(this.parent)&&!MT(t.get("$schema")))this.element.setMetaProperty("inherited$schema",e());else if(sN(this.parent)&&!MT(t.get("$schema"))){var r,n;const e=WE(null===(r=this.parent.meta.get("inherited$schema"))||void 0===r?void 0:r.toValue(),null===(n=this.parent.$schema)||void 0===n?void 0:n.toValue());this.element.setMetaProperty("inherited$schema",e)}},r=e=>{var t;const r=null!==this.parent?this.parent.getMetaProperty("inherited$id",[]).clone():new YP,n=null===(t=e.get("$id"))||void 0===t?void 0:t.toValue();bO(n)&&r.push(n),this.element.setMetaProperty("inherited$id",r)};this.ObjectElement=function(e){this.element=new yB,t(e),r(e),this.parent=this.element;const n=gF.compose.methods.ObjectElement.call(this,e);return MT(this.element.$ref)&&(this.element.classes.push("reference-element"),this.element.setMetaProperty("referenced-element","schema")),n},this.BooleanElement=function(e){return this.element=e.clone(),this.element.classes.push("boolean-json-schema"),kT}}}),ZN=bF,YN=dT(bF,{methods:{ObjectElement(e){return this.element=e.clone(),this.element.classes.push("json-schema-$vocabulary"),kT}}}),XN=bF,QN=bF,eU=bF,tU=bF,rU=dT(bF,{methods:{StringElement(e){return this.element=e.clone(),this.element.classes.push("reference-value"),kT}}}),nU=dT(iD,JN,bF,{props:{specPath:mE(["document","objects","Schema"])},init(){this.element=new XP,this.element.classes.push("json-schema-$defs")}}),sU=bF,iU=dT(pF,JN,bF,{init(){this.element=new YP,this.element.classes.push("json-schema-allOf")},methods:{ArrayElement(e){return e.forEach((e=>{if(NT(e)){const t=this.toRefractedElement(["document","objects","Schema"],e);this.element.push(t)}else{const t=e.clone();this.element.push(t)}})),this.copyMetaAndAttributes(e,this.element),kT}}}),oU=dT(pF,JN,bF,{init(){this.element=new YP,this.element.classes.push("json-schema-anyOf")},methods:{ArrayElement(e){return e.forEach((e=>{if(NT(e)){const t=this.toRefractedElement(["document","objects","Schema"],e);this.element.push(t)}else{const t=e.clone();this.element.push(t)}})),this.copyMetaAndAttributes(e,this.element),kT}}}),aU=dT(pF,JN,bF,{init(){this.element=new YP,this.element.classes.push("json-schema-oneOf")},methods:{ArrayElement(e){return e.forEach((e=>{if(NT(e)){const t=this.toRefractedElement(["document","objects","Schema"],e);this.element.push(t)}else{const t=e.clone();this.element.push(t)}})),this.copyMetaAndAttributes(e,this.element),kT}}}),lU=dT(iD,JN,bF,{props:{specPath:mE(["document","objects","Schema"])},init(){this.element=new XP,this.element.classes.push("json-schema-dependentSchemas")}}),cU=dT(pF,JN,bF,{init(){this.element=new YP,this.element.classes.push("json-schema-prefixItems")},methods:{ArrayElement(e){return e.forEach((e=>{if(NT(e)){const t=this.toRefractedElement(["document","objects","Schema"],e);this.element.push(t)}else{const t=e.clone();this.element.push(t)}})),this.copyMetaAndAttributes(e,this.element),kT}}}),pU=dT(iD,JN,bF,{props:{specPath:mE(["document","objects","Schema"])},init(){this.element=new XP,this.element.classes.push("json-schema-properties")}}),uU=dT(iD,JN,bF,{props:{specPath:mE(["document","objects","Schema"])},init(){this.element=new XP,this.element.classes.push("json-schema-patternProperties")}}),dU=dT(bF,{methods:{StringElement(e){return this.element=e.clone(),this.element.classes.push("json-schema-type"),kT},ArrayElement(e){return this.element=e.clone(),this.element.classes.push("json-schema-type"),kT}}}),hU=dT(bF,{methods:{ArrayElement(e){return this.element=e.clone(),this.element.classes.push("json-schema-enum"),kT}}}),fU=bF,mU=bF,yU=bF,gU=bF,vU=bF,bU=bF,xU=bF,wU=bF,$U=bF,SU=bF,EU=bF,kU=bF,OU=bF,jU=bF,AU=bF,PU=bF,TU=dT(bF,{methods:{ArrayElement(e){return this.element=e.clone(),this.element.classes.push("json-schema-required"),kT}}}),CU=dT(bF,{methods:{ObjectElement(e){return this.element=e.clone(),this.element.classes.push("json-schema-dependentRequired"),kT}}}),IU=bF,RU=bF,_U=bF,FU=bF,DU=bF,MU=bF,qU=dT(bF,{methods:{ArrayElement(e){return this.element=e.clone(),this.element.classes.push("json-schema-examples"),kT}}}),LU=bF,BU=bF,NU=bF,UU=bF,{visitors:{document:{objects:{Discriminator:{$visitor:zU}}}}}=ML,HU=dT(zU,{props:{canSupportSpecificationExtensions:!0},init(){this.element=new WL}}),{visitors:{document:{objects:{XML:{$visitor:VU}}}}}=ML,WU=dT(VU,{init(){this.element=new $B}}),GU=dT(iD,bF,{props:{specPath:mE(["document","objects","Schema"])},init(){this.element=new YR}}),JU=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","PathItem"]},init(){this.element=new kB},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(QB).forEach((e=>{e.setMetaProperty("referenced-element","pathItem")})),t}}}),{visitors:{document:{objects:{Example:{$visitor:KU}}}}}=ML,ZU=dT(KU,{init(){this.element=new JL}}),{visitors:{document:{objects:{ExternalDocumentation:{$visitor:YU}}}}}=ML,XU=dT(YU,{init(){this.element=new KL}}),{visitors:{document:{objects:{Encoding:{$visitor:QU}}}}}=ML,ez=dT(QU,{init(){this.element=new GL}}),{visitors:{document:{objects:{Paths:{$visitor:tz}}}}}=ML,rz=dT(tz,{init(){this.element=new pB}}),{visitors:{document:{objects:{RequestBody:{$visitor:nz}}}}}=ML,sz=dT(nz,{init(){this.element=new hB}}),{visitors:{document:{objects:{Callback:{$visitor:iz}}}}}=ML,oz=dT(iz,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","PathItem"]},init(){this.element=new zL},methods:{ObjectElement(e){const t=iz.compose.methods.ObjectElement.call(this,e);return this.element.filter(QB).forEach((e=>{e.setMetaProperty("referenced-element","pathItem")})),t}}}),{visitors:{document:{objects:{Response:{$visitor:az}}}}}=ML,lz=dT(az,{init(){this.element=new fB}}),{visitors:{document:{objects:{Responses:{$visitor:cz}}}}}=ML,pz=dT(cz,{init(){this.element=new mB}}),{visitors:{document:{objects:{Operation:{$visitor:uz}}}}}=ML,dz=dT(uz,{init(){this.element=new aB}}),{visitors:{document:{objects:{PathItem:{$visitor:hz}}}}}=ML,fz=dT(hz,{init(){this.element=new cB}}),{visitors:{document:{objects:{SecurityScheme:{$visitor:mz}}}}}=ML,yz=dT(mz,{init(){this.element=new vB}}),{visitors:{document:{objects:{OAuthFlows:{$visitor:gz}}}}}=ML,vz=dT(gz,{init(){this.element=new sB}}),{visitors:{document:{objects:{OAuthFlow:{$visitor:bz}}}}}=ML,xz=dT(bz,{init(){this.element=new nB}}),wz=dT(iD,bF,{props:{specPath:e=>uF(e)?["document","objects","Reference"]:["document","objects","PathItem"]},init(){this.element=new jB},methods:{ObjectElement(e){const t=iD.compose.methods.ObjectElement.call(this,e);return this.element.filter(QB).forEach((e=>{e.setMetaProperty("referenced-element","pathItem")})),this.element.filter(ZB).forEach(((e,t)=>{e.setMetaProperty("webhook-name",t.toValue())})),t}}}),$z={visitors:{value:ML.visitors.value,document:{objects:{OpenApi:{$visitor:mN,fixedFields:{openapi:ML.visitors.document.objects.OpenApi.fixedFields.openapi,info:{$ref:"#/visitors/document/objects/Info"},jsonSchemaDialect:ON,servers:ML.visitors.document.objects.OpenApi.fixedFields.servers,paths:{$ref:"#/visitors/document/objects/Paths"},webhooks:wz,components:{$ref:"#/visitors/document/objects/Components"},security:ML.visitors.document.objects.OpenApi.fixedFields.security,tags:ML.visitors.document.objects.OpenApi.fixedFields.tags,externalDocs:{$ref:"#/visitors/document/objects/ExternalDocumentation"}}},Info:{$visitor:gN,fixedFields:{title:ML.visitors.document.objects.Info.fixedFields.title,description:ML.visitors.document.objects.Info.fixedFields.description,summary:vN,termsOfService:ML.visitors.document.objects.Info.fixedFields.termsOfService,contact:{$ref:"#/visitors/document/objects/Contact"},license:{$ref:"#/visitors/document/objects/License"},version:ML.visitors.document.objects.Info.fixedFields.version}},Contact:{$visitor:xN,fixedFields:{name:ML.visitors.document.objects.Contact.fixedFields.name,url:ML.visitors.document.objects.Contact.fixedFields.url,email:ML.visitors.document.objects.Contact.fixedFields.email}},License:{$visitor:$N,fixedFields:{name:ML.visitors.document.objects.License.fixedFields.name,identifier:SN,url:ML.visitors.document.objects.License.fixedFields.url}},Server:{$visitor:AN,fixedFields:{url:ML.visitors.document.objects.Server.fixedFields.url,description:ML.visitors.document.objects.Server.fixedFields.description,variables:ML.visitors.document.objects.Server.fixedFields.variables}},ServerVariable:{$visitor:TN,fixedFields:{enum:ML.visitors.document.objects.ServerVariable.fixedFields.enum,default:ML.visitors.document.objects.ServerVariable.fixedFields.default,description:ML.visitors.document.objects.ServerVariable.fixedFields.description}},Components:{$visitor:DN,fixedFields:{schemas:GU,responses:ML.visitors.document.objects.Components.fixedFields.responses,parameters:ML.visitors.document.objects.Components.fixedFields.parameters,examples:ML.visitors.document.objects.Components.fixedFields.examples,requestBodies:ML.visitors.document.objects.Components.fixedFields.requestBodies,headers:ML.visitors.document.objects.Components.fixedFields.headers,securitySchemes:ML.visitors.document.objects.Components.fixedFields.securitySchemes,links:ML.visitors.document.objects.Components.fixedFields.links,callbacks:ML.visitors.document.objects.Components.fixedFields.callbacks,pathItems:JU}},Paths:{$visitor:rz},PathItem:{$visitor:fz,fixedFields:{$ref:ML.visitors.document.objects.PathItem.fixedFields.$ref,summary:ML.visitors.document.objects.PathItem.fixedFields.summary,description:ML.visitors.document.objects.PathItem.fixedFields.description,get:{$ref:"#/visitors/document/objects/Operation"},put:{$ref:"#/visitors/document/objects/Operation"},post:{$ref:"#/visitors/document/objects/Operation"},delete:{$ref:"#/visitors/document/objects/Operation"},options:{$ref:"#/visitors/document/objects/Operation"},head:{$ref:"#/visitors/document/objects/Operation"},patch:{$ref:"#/visitors/document/objects/Operation"},trace:{$ref:"#/visitors/document/objects/Operation"},servers:ML.visitors.document.objects.PathItem.fixedFields.servers,parameters:ML.visitors.document.objects.PathItem.fixedFields.parameters}},Operation:{$visitor:dz,fixedFields:{tags:ML.visitors.document.objects.Operation.fixedFields.tags,summary:ML.visitors.document.objects.Operation.fixedFields.summary,description:ML.visitors.document.objects.Operation.fixedFields.description,externalDocs:{$ref:"#/visitors/document/objects/ExternalDocumentation"},operationId:ML.visitors.document.objects.Operation.fixedFields.operationId,parameters:ML.visitors.document.objects.Operation.fixedFields.parameters,requestBody:ML.visitors.document.objects.Operation.fixedFields.requestBody,responses:{$ref:"#/visitors/document/objects/Responses"},callbacks:ML.visitors.document.objects.Operation.fixedFields.callbacks,deprecated:ML.visitors.document.objects.Operation.fixedFields.deprecated,security:ML.visitors.document.objects.Operation.fixedFields.security,servers:ML.visitors.document.objects.Operation.fixedFields.servers}},ExternalDocumentation:{$visitor:XU,fixedFields:{description:ML.visitors.document.objects.ExternalDocumentation.fixedFields.description,url:ML.visitors.document.objects.ExternalDocumentation.fixedFields.url}},Parameter:{$visitor:HN,fixedFields:{name:ML.visitors.document.objects.Parameter.fixedFields.name,in:ML.visitors.document.objects.Parameter.fixedFields.in,description:ML.visitors.document.objects.Parameter.fixedFields.description,required:ML.visitors.document.objects.Parameter.fixedFields.required,deprecated:ML.visitors.document.objects.Parameter.fixedFields.deprecated,allowEmptyValue:ML.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,style:ML.visitors.document.objects.Parameter.fixedFields.style,explode:ML.visitors.document.objects.Parameter.fixedFields.explode,allowReserved:ML.visitors.document.objects.Parameter.fixedFields.allowReserved,schema:{$ref:"#/visitors/document/objects/Schema"},example:ML.visitors.document.objects.Parameter.fixedFields.example,examples:ML.visitors.document.objects.Parameter.fixedFields.examples,content:ML.visitors.document.objects.Parameter.fixedFields.content}},RequestBody:{$visitor:sz,fixedFields:{description:ML.visitors.document.objects.RequestBody.fixedFields.description,content:ML.visitors.document.objects.RequestBody.fixedFields.content,required:ML.visitors.document.objects.RequestBody.fixedFields.required}},MediaType:{$visitor:IN,fixedFields:{schema:{$ref:"#/visitors/document/objects/Schema"},example:ML.visitors.document.objects.MediaType.fixedFields.example,examples:ML.visitors.document.objects.MediaType.fixedFields.examples,encoding:ML.visitors.document.objects.MediaType.fixedFields.encoding}},Encoding:{$visitor:ez,fixedFields:{contentType:ML.visitors.document.objects.Encoding.fixedFields.contentType,headers:ML.visitors.document.objects.Encoding.fixedFields.headers,style:ML.visitors.document.objects.Encoding.fixedFields.style,explode:ML.visitors.document.objects.Encoding.fixedFields.explode,allowReserved:ML.visitors.document.objects.Encoding.fixedFields.allowReserved}},Responses:{$visitor:pz,fixedFields:{default:ML.visitors.document.objects.Responses.fixedFields.default}},Response:{$visitor:lz,fixedFields:{description:ML.visitors.document.objects.Response.fixedFields.description,headers:ML.visitors.document.objects.Response.fixedFields.headers,content:ML.visitors.document.objects.Response.fixedFields.content,links:ML.visitors.document.objects.Response.fixedFields.links}},Callback:{$visitor:oz},Example:{$visitor:ZU,fixedFields:{summary:ML.visitors.document.objects.Example.fixedFields.summary,description:ML.visitors.document.objects.Example.fixedFields.description,value:ML.visitors.document.objects.Example.fixedFields.value,externalValue:ML.visitors.document.objects.Example.fixedFields.externalValue}},Link:{$visitor:kN,fixedFields:{operationRef:ML.visitors.document.objects.Link.fixedFields.operationRef,operationId:ML.visitors.document.objects.Link.fixedFields.operationId,parameters:ML.visitors.document.objects.Link.fixedFields.parameters,requestBody:ML.visitors.document.objects.Link.fixedFields.requestBody,description:ML.visitors.document.objects.Link.fixedFields.description,server:{$ref:"#/visitors/document/objects/Server"}}},Header:{$visitor:WN,fixedFields:{description:ML.visitors.document.objects.Header.fixedFields.description,required:ML.visitors.document.objects.Header.fixedFields.required,deprecated:ML.visitors.document.objects.Header.fixedFields.deprecated,allowEmptyValue:ML.visitors.document.objects.Header.fixedFields.allowEmptyValue,style:ML.visitors.document.objects.Header.fixedFields.style,explode:ML.visitors.document.objects.Header.fixedFields.explode,allowReserved:ML.visitors.document.objects.Header.fixedFields.allowReserved,schema:{$ref:"#/visitors/document/objects/Schema"},example:ML.visitors.document.objects.Header.fixedFields.example,examples:ML.visitors.document.objects.Header.fixedFields.examples,content:ML.visitors.document.objects.Header.fixedFields.content}},Tag:{$visitor:qN,fixedFields:{name:ML.visitors.document.objects.Tag.fixedFields.name,description:ML.visitors.document.objects.Tag.fixedFields.description,externalDocs:{$ref:"#/visitors/document/objects/ExternalDocumentation"}}},Reference:{$visitor:BN,fixedFields:{$ref:ML.visitors.document.objects.Reference.fixedFields.$ref,summary:NN,description:UN}},Schema:{$visitor:KN,fixedFields:{$schema:ZN,$vocabulary:YN,$id:XN,$anchor:QN,$dynamicAnchor:eU,$dynamicRef:tU,$ref:rU,$defs:nU,$comment:sU,allOf:iU,anyOf:oU,oneOf:aU,not:{$ref:"#/visitors/document/objects/Schema"},if:{$ref:"#/visitors/document/objects/Schema"},then:{$ref:"#/visitors/document/objects/Schema"},else:{$ref:"#/visitors/document/objects/Schema"},dependentSchemas:lU,prefixItems:cU,items:{$ref:"#/visitors/document/objects/Schema"},contains:{$ref:"#/visitors/document/objects/Schema"},properties:pU,patternProperties:uU,additionalProperties:{$ref:"#/visitors/document/objects/Schema"},propertyNames:{$ref:"#/visitors/document/objects/Schema"},unevaluatedItems:{$ref:"#/visitors/document/objects/Schema"},unevaluatedProperties:{$ref:"#/visitors/document/objects/Schema"},type:dU,enum:hU,const:fU,multipleOf:mU,maximum:yU,exclusiveMaximum:gU,minimum:vU,exclusiveMinimum:bU,maxLength:xU,minLength:wU,pattern:$U,maxItems:SU,minItems:EU,uniqueItems:kU,maxContains:OU,minContains:jU,maxProperties:AU,minProperties:PU,required:TU,dependentRequired:CU,title:IU,description:RU,default:_U,deprecated:FU,readOnly:DU,writeOnly:MU,examples:qU,format:LU,contentEncoding:BU,contentMediaType:NU,contentSchema:{$ref:"#/visitors/document/objects/Schema"},discriminator:{$ref:"#/visitors/document/objects/Discriminator"},xml:{$ref:"#/visitors/document/objects/XML"},externalDocs:{$ref:"#/visitors/document/objects/ExternalDocumentation"},example:UU}},Discriminator:{$visitor:HU,fixedFields:{propertyName:ML.visitors.document.objects.Discriminator.fixedFields.propertyName,mapping:ML.visitors.document.objects.Discriminator.fixedFields.mapping}},XML:{$visitor:WU,fixedFields:{name:ML.visitors.document.objects.XML.fixedFields.name,namespace:ML.visitors.document.objects.XML.fixedFields.namespace,prefix:ML.visitors.document.objects.XML.fixedFields.prefix,attribute:ML.visitors.document.objects.XML.fixedFields.attribute,wrapped:ML.visitors.document.objects.XML.fixedFields.wrapped}},SecurityScheme:{$visitor:yz,fixedFields:{type:ML.visitors.document.objects.SecurityScheme.fixedFields.type,description:ML.visitors.document.objects.SecurityScheme.fixedFields.description,name:ML.visitors.document.objects.SecurityScheme.fixedFields.name,in:ML.visitors.document.objects.SecurityScheme.fixedFields.in,scheme:ML.visitors.document.objects.SecurityScheme.fixedFields.scheme,bearerFormat:ML.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,flows:{$ref:"#/visitors/document/objects/OAuthFlows"},openIdConnectUrl:ML.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl}},OAuthFlows:{$visitor:vz,fixedFields:{implicit:{$ref:"#/visitors/document/objects/OAuthFlow"},password:{$ref:"#/visitors/document/objects/OAuthFlow"},clientCredentials:{$ref:"#/visitors/document/objects/OAuthFlow"},authorizationCode:{$ref:"#/visitors/document/objects/OAuthFlow"}}},OAuthFlow:{$visitor:xz,fixedFields:{authorizationUrl:ML.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,tokenUrl:ML.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,refreshUrl:ML.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,scopes:ML.visitors.document.objects.OAuthFlow.fixedFields.scopes}},SecurityRequirement:{$visitor:_N}},extension:{$visitor:ML.visitors.document.extension.$visitor}}}};function Sz(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const Ez=e=>(t,r={})=>((e,{specPath:t=["visitors","document","objects","OpenApi","$visitor"],plugins:r=[]}={})=>{const n=rT(e),s=AC($z),i=BO(t,[],s);return lC(n,i,{state:{specObj:s}}),bC(i.element,r,{toolboxCreator:hN,visitorOptions:{keyMap:TB,nodeTypeGetter:PB}})})(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Sz(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Sz(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({specPath:e},r));zL.refract=Ez(["visitors","document","objects","Callback","$visitor"]),HL.refract=Ez(["visitors","document","objects","Components","$visitor"]),VL.refract=Ez(["visitors","document","objects","Contact","$visitor"]),JL.refract=Ez(["visitors","document","objects","Example","$visitor"]),WL.refract=Ez(["visitors","document","objects","Discriminator","$visitor"]),GL.refract=Ez(["visitors","document","objects","Encoding","$visitor"]),KL.refract=Ez(["visitors","document","objects","ExternalDocumentation","$visitor"]),ZL.refract=Ez(["visitors","document","objects","Header","$visitor"]),YL.refract=Ez(["visitors","document","objects","Info","$visitor"]),QL.refract=Ez(["visitors","document","objects","OpenApi","fixedFields","jsonSchemaDialect"]),eB.refract=Ez(["visitors","document","objects","License","$visitor"]),tB.refract=Ez(["visitors","document","objects","Link","$visitor"]),rB.refract=Ez(["visitors","document","objects","MediaType","$visitor"]),nB.refract=Ez(["visitors","document","objects","OAuthFlow","$visitor"]),sB.refract=Ez(["visitors","document","objects","OAuthFlows","$visitor"]),iB.refract=Ez(["visitors","document","objects","OpenApi","fixedFields","openapi"]),oB.refract=Ez(["visitors","document","objects","OpenApi","$visitor"]),aB.refract=Ez(["visitors","document","objects","Operation","$visitor"]),lB.refract=Ez(["visitors","document","objects","Parameter","$visitor"]),cB.refract=Ez(["visitors","document","objects","PathItem","$visitor"]),pB.refract=Ez(["visitors","document","objects","Paths","$visitor"]),dB.refract=Ez(["visitors","document","objects","Reference","$visitor"]),hB.refract=Ez(["visitors","document","objects","RequestBody","$visitor"]),fB.refract=Ez(["visitors","document","objects","Response","$visitor"]),mB.refract=Ez(["visitors","document","objects","Responses","$visitor"]),yB.refract=Ez(["visitors","document","objects","Schema","$visitor"]),gB.refract=Ez(["visitors","document","objects","SecurityRequirement","$visitor"]),vB.refract=Ez(["visitors","document","objects","SecurityScheme","$visitor"]),bB.refract=Ez(["visitors","document","objects","Server","$visitor"]),xB.refract=Ez(["visitors","document","objects","ServerVariable","$visitor"]),wB.refract=Ez(["visitors","document","objects","Tag","$visitor"]),$B.refract=Ez(["visitors","document","objects","XML","$visitor"]);var kz,Oz,jz={exports:{}},Az=jz.exports={};function Pz(){throw new Error("setTimeout has not been defined")}function Tz(){throw new Error("clearTimeout has not been defined")}function Cz(e){if(kz===setTimeout)return setTimeout(e,0);if((kz===Pz||!kz)&&setTimeout)return kz=setTimeout,setTimeout(e,0);try{return kz(e,0)}catch(t){try{return kz.call(null,e,0)}catch(t){return kz.call(this,e,0)}}}!function(){try{kz="function"==typeof setTimeout?setTimeout:Pz}catch(e){kz=Pz}try{Oz="function"==typeof clearTimeout?clearTimeout:Tz}catch(e){Oz=Tz}}();var Iz,Rz=[],_z=!1,Fz=-1;function Dz(){_z&&Iz&&(_z=!1,Iz.length?Rz=Iz.concat(Rz):Fz=-1,Rz.length&&Mz())}function Mz(){if(!_z){var e=Cz(Dz);_z=!0;for(var t=Rz.length;t;){for(Iz=Rz,Rz=[];++Fz<t;)Iz&&Iz[Fz].run();Fz=-1,t=Rz.length}Iz=null,_z=!1,function(e){if(Oz===clearTimeout)return clearTimeout(e);if((Oz===Tz||!Oz)&&clearTimeout)return Oz=clearTimeout,clearTimeout(e);try{Oz(e)}catch(t){try{return Oz.call(null,e)}catch(t){return Oz.call(this,e)}}}(e)}}function qz(e,t){this.fun=e,this.array=t}function Lz(){}Az.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];Rz.push(new qz(e,t)),1!==Rz.length||_z||Cz(Mz)},qz.prototype.run=function(){this.fun.apply(null,this.array)},Az.title="browser",Az.browser=!0,Az.env={},Az.argv=[],Az.version="",Az.versions={},Az.on=Lz,Az.addListener=Lz,Az.once=Lz,Az.off=Lz,Az.removeListener=Lz,Az.removeAllListeners=Lz,Az.emit=Lz,Az.prependListener=Lz,Az.prependOnceListener=Lz,Az.listeners=function(e){return[]},Az.binding=function(e){throw new Error("process.binding is not supported")},Az.cwd=function(){return"/"},Az.chdir=function(e){throw new Error("process.chdir is not supported")},Az.umask=function(){return 0};const Bz=_t(jz.exports),Nz=()=>Dk(Yk(/^win/),["platform"],Bz),Uz=e=>{try{const t=new URL(e);return WO(":",t.protocol)}catch{return}};qE(Uz,nO);const zz=e=>{if(Bz.browser)return!1;const t=Uz(e);return rO(t)||"file"===t||/^[a-zA-Z]$/.test(t)},Hz=e=>{const t=Uz(e);return"http"===t||"https"===t},Vz=(e,t)=>{const r=[/%23/g,"#",/%24/g,"$",/%26/g,"&",/%2C/g,",",/%40/g,"@"],n=Lk(!1,"keepFileProtocol",t),s=Lk(Nz,"isWindows",t);let i=decodeURI(e);for(let e=0;e<r.length;e+=2)i=i.replace(r[e],r[e+1]);let o="file://"===i.substr(0,7).toLowerCase();return o&&(i="/"===i[7]?i.substr(8):i.substr(7),s()&&"/"===i[1]&&(i=`${i[0]}:${i.substr(1)}`),n?i=`file:///${i}`:(o=!1,i=s()?i:`/${i}`)),s()&&!o&&(i=VO("/","\\",i),":\\"===i.substr(1,2)&&(i=i[0].toUpperCase()+i.substr(1))),i},Wz=e=>{const t=e.indexOf("#");return-1!==t?e.substr(t):"#"},Gz=e=>{const t=e.indexOf("#");let r=e;return t>=0&&(r=e.substr(0,t)),r},Jz=()=>{if(Bz.browser)return Gz(globalThis.location.href);const e=Bz.cwd(),t=tk(e);return["/","\\"].includes(t)?e:e+(Nz()?"\\":"/")},Kz=(e,t)=>{const r=new URL(t,new URL(e,"resolve://"));if("resolve:"===r.protocol){const{pathname:e,search:t,hash:n}=r;return e+t+n}return r.toString()},Zz=e=>zz(e)?(e=>{const t=[/\?/g,"%3F",/#/g,"%23"];let r=e;Nz()&&(r=r.replace(/\\/g,"/")),r=encodeURI(r);for(let e=0;e<t.length;e+=2)r=r.replace(t[e],t[e+1]);return r})(Vz(e)):encodeURI(decodeURI(e)).replace(/%5B/g,"[").replace(/%5D/g,"]"),Yz=e=>zz(e)?Vz(e):decodeURI(e),Xz=dT({props:{uri:null,mediaType:"text/plain",data:null,parseResult:null},init({uri:e=this.uri,mediaType:t=this.mediaType,data:r=this.data,parseResult:n=this.parseResult}={}){this.uri=e,this.mediaType=t,this.data=r,this.parseResult=n},methods:{get extension(){return fO(this.uri)?(e=>{const t=e.lastIndexOf(".");return t>=0?e.substr(t).toLowerCase():""})(this.uri):""},toString(){return"string"==typeof this.data?this.data:this.data instanceof ArrayBuffer||["ArrayBuffer"].includes(FS(this.data))||ArrayBuffer.isView(this.data)?new TextDecoder("utf-8").decode(this.data):String(this.data)}}}),Qz=Xz,eH={parse:{mediaType:"text/plain",parsers:[],parserOpts:{}},resolve:{baseURI:"",resolvers:[],resolverOpts:{},strategies:[],external:!0,maxDepth:1/0},dereference:{strategies:[],refSet:null,maxDepth:1/0}},tH=Ek(Ok(["resolve","baseURI"]),EE(["resolve","baseURI"])),rH=e=>mO(e)?Jz():e;class nH extends Error{constructor(e,t){if(super(e),this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack,kO(t)&&hk("cause",t)&&!hk("cause",this)){const{cause:e}=t;this.cause=e,hk("stack",e)&&(this.stack=`${this.stack}\nCAUSE: ${null==e?void 0:e.stack}`)}}}const sH=nH,iH=class extends sH{constructor(e="Not Implemented",t){super(e,t)}},oH=class extends sH{},aH=class extends oH{},lH=class extends sH{},cH=class extends sH{constructor(e,t){super(e,{cause:t.cause}),Rh(this,"plugin",void 0),this.plugin=t.plugin}},pH=class extends sH{},uH=class extends oH{},dH=class extends sH{},hH=class extends lH{},fH=class extends dH{},mH=async(e,t,r)=>{const n=await Promise.all(r.map(BO([e],[t])));return r.filter(((e,t)=>n[t]))},yH=async(e,t,r)=>{let n;for(const s of r)try{const r=await s[e].call(s,...t);return{plugin:s,result:r}}catch(e){n=new cH("Error while running plugin",{cause:e,plugin:s})}return Promise.reject(n)};function gH(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function vH(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?gH(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gH(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const bH=async(e,t)=>{const r=Qz({uri:Zz(Gz(e)),mediaType:t.parse.mediaType}),n=await(async(e,t)=>{const r=t.resolve.resolvers.map((e=>{const r=Object.create(e);return Object.assign(r,t.resolve.resolverOpts)})),n=await mH("canRead",e,r);if(wk(n))throw new aH(e.uri);try{const{result:t}=await yH("read",[e],n);return t}catch(t){throw new oH(`Error while reading file "${e.uri}"`,{cause:t})}})(r,t);return(async(e,t)=>{const r=t.parse.parsers.map((e=>{const r=Object.create(e);return Object.assign(r,t.parse.parserOpts)})),n=await mH("canParse",e,r);if(wk(n))throw new aH(e.uri);try{const{plugin:t,result:r}=await yH("parse",[e],n);return!t.allowEmpty&&r.isEmpty?Promise.reject(new lH(`Error while parsing file "${e.uri}". File is empty.`)):r}catch(t){throw new lH(`Error while parsing file "${e.uri}"`,{cause:t})}})(Qz(vH(vH({},r),{},{data:n})),t)},xH=dT({props:{name:"",allowEmpty:!0,sourceMap:!1,fileExtensions:[],mediaTypes:[]},init({allowEmpty:e=this.allowEmpty,sourceMap:t=this.sourceMap,fileExtensions:r=this.fileExtensions,mediaTypes:n=this.mediaTypes}={}){this.allowEmpty=e,this.sourceMap=t,this.fileExtensions=r,this.mediaTypes=n},methods:{async canParse(){throw new iH},async parse(){throw new iH}}}),wH=xH,$H=dT({props:{name:null},methods:{canRead:()=>!1,async read(){throw new iH}}}),SH=dT($H,{props:{timeout:5e3,redirects:5,withCredentials:!1},init({timeout:e=this.timeout,redirects:t=this.redirects,withCredentials:r=this.withCredentials}={}){this.timeout=e,this.redirects=t,this.withCredentials=r},methods:{canRead:e=>Hz(e.uri),async read(){throw new iH},getHttpClient(){throw new iH}}}),EH=dT({props:{name:null},methods:{canResolve:()=>!1,async resolve(){throw new iH}}}),kH=dT({props:{name:null},methods:{canDereference:()=>!1,async dereference(){throw new iH}}}),OH=dT({props:{uri:"",value:null,depth:0,refSet:null,errors:[]},init({depth:e=this.depth,refSet:t=this.refSet,uri:r=this.uri,value:n=this.value}={}){this.uri=r,this.value=n,this.depth=e,this.refSet=t,this.errors=[]}}),jH=dT({props:{rootRef:null,refs:[],circular:!1},init({refs:e=[]}={}){this.refs=[],e.forEach((e=>this.add(e)))},methods:{get size(){return this.refs.length},add(e){return this.has(e)||(this.refs.push(e),this.rootRef=null===this.rootRef?e:this.rootRef,e.refSet=this),this},merge(e){for(const t of e.values())this.add(t);return this},has(e){const t=fO(e)?e:e.uri;return nO(this.find(qk(t,"uri")))},find(e){return this.refs.find(e)},*values(){yield*this.refs},clean(){this.refs.forEach((e=>{e.refSet=null})),this.refs=[]}}}),AH=dT(wH,{props:{name:"binary"},methods:{async canParse(e){return 0===this.fileExtensions.length||this.fileExtensions.includes(e.extension)},async parse(e){try{const t=unescape(encodeURIComponent(e.toString())),r=btoa(t),n=new iT;if(0!==r.length){const e=new GP(r);e.classes.push("result"),n.push(e)}return n}catch(t){throw new lH(`Error parsing "${e.uri}"`,{cause:t})}}}});class PH extends Error{constructor(e){super(e),this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}}class TH extends Error{constructor(e){super(e),this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}}class CH extends pH{constructor(e){super(`Invalid JSON Schema $anchor "${e}".`)}}const IH=e=>/^[A-Za-z_][A-Za-z_0-9.-]*$/.test(e),RH=e=>{const t=Wz(e);return GO("#",t)},_H=(e,t)=>{const r=(e=>{if(!IH(e))throw new CH(e);return e})(e),n=EC((e=>{var t;return sN(e)&&(null===(t=e.$anchor)||void 0===t?void 0:t.toValue())===r}),t);if(rO(n))throw new TH(`Evaluation failed on token: "${r}"`);return n},FH=(e,t)=>{if(void 0===t.$ref)return;const r=Wz(t.$ref.toValue()),n=t.meta.get("inherited$id").toValue();return`${hE(((e,t)=>Kz(e,Zz(Gz(t)))),e,[...n,t.$ref.toValue()])}${"#"===r?"":r}`},DH=e=>{if(DH.cache.has(e))return DH.cache.get(e);const t=yB.refract(e);return DH.cache.set(e,t),t};DH.cache=new WeakMap;const MH=e=>ZT(e)?DH(e):e,qH=(e,t)=>{const{cache:r}=qH,n=Gz(e),s=e=>sN(e)&&void 0!==e.$id;if(!r.has(t)){const e=((e,t)=>{const r=aC({predicate:e});return lC(t,r),new VP(r.result)})(s,t);r.set(t,Array.from(e))}const i=r.get(t).find((e=>((e,t)=>{if(void 0===t.$id)return;const r=t.meta.get("inherited$id").toValue();return hE(((e,t)=>Kz(e,Zz(Gz(t)))),e,[...r,t.$id.toValue()])})(n,e)===n));if(rO(i))throw new PH(`Evaluation failed on URI: "${e}"`);let o,a;return IH(RH(e))?(o=_H,a=RH(e)):(o=zC,a=HC(e)),o(a,i)};function LH(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function BH(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?LH(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):LH(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}qH.cache=new WeakMap;const NH=lC[Symbol.for("nodejs.util.promisify.custom")],UH=dT({props:{indirections:[],namespace:null,reference:null,crawledElements:null,crawlingMap:null,visited:null,options:null},init({reference:e,namespace:t,indirections:r=[],visited:n=new WeakSet,options:s}){this.indirections=r,this.namespace=t,this.reference=e,this.crawledElements=[],this.crawlingMap={},this.visited=n,this.options=s},methods:{toBaseURI(e){return Kz(this.reference.uri,Zz(Gz(e)))},async toReference(e){if(this.reference.depth>=this.options.resolve.maxDepth)throw new uH(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);const t=this.toBaseURI(e),{refSet:r}=this.reference;if(r.has(t))return r.find(qk(t,"uri"));const n=await bH(Yz(t),BH(BH({},this.options),{},{parse:BH(BH({},this.options.parse),{},{mediaType:"text/plain"})})),s=OH({uri:t,value:n,depth:this.reference.depth+1});return r.add(s),s},ReferenceElement(e){var t;if(!this.options.resolve.external&&eN(e))return!1;const r=null===(t=e.$ref)||void 0===t?void 0:t.toValue(),n=this.toBaseURI(r);uk(n,this.crawlingMap)||(this.crawlingMap[n]=this.toReference(r)),this.crawledElements.push(e)},PathItemElement(e){var t;if(!MT(e.$ref))return;if(!this.options.resolve.external&&YB(e))return;const r=null===(t=e.$ref)||void 0===t?void 0:t.toValue(),n=this.toBaseURI(r);uk(n,this.crawlingMap)||(this.crawlingMap[n]=this.toReference(r)),this.crawledElements.push(e)},LinkElement(e){if((MT(e.operationRef)||MT(e.operationId))&&(this.options.resolve.external||!VB(e))){if(MT(e.operationRef)&&MT(e.operationId))throw new Error("LinkElement operationRef and operationId are mutually exclusive.");if(VB(e)){var t;const r=null===(t=e.operationRef)||void 0===t?void 0:t.toValue(),n=this.toBaseURI(r);uk(n,this.crawlingMap)||(this.crawlingMap[n]=this.toReference(r))}}},ExampleElement(e){var t;if(!MT(e.externalValue))return;if(!this.options.resolve.external&&MT(e.externalValue))return;if(e.hasKey("value")&&MT(e.externalValue))throw new Error("ExampleElement value and externalValue fields are mutually exclusive.");const r=null===(t=e.externalValue)||void 0===t?void 0:t.toValue(),n=this.toBaseURI(r);uk(n,this.crawlingMap)||(this.crawlingMap[n]=this.toReference(r))},SchemaElement(e){if(this.visited.has(e))return!1;if(!MT(e.$ref))return void this.visited.add(e);const t=this.reference.uri,r=FH(t,e),n=Gz(r),s=Qz({uri:n}),i=Ck((e=>e.canRead(s)),this.options.resolve.resolvers),o=!i,a=!i&&this.reference.uri!==n;if(this.options.resolve.external||!a){if(!uk(n,this.crawlingMap))try{this.crawlingMap[n]=i||o?this.reference:this.toReference(Yz(r))}catch(e){if(!(o&&e instanceof PH))throw e;this.crawlingMap[n]=this.toReference(Yz(r))}this.crawledElements.push(e)}else this.visited.add(e)},async crawlReferenceElement(e){var t;const r=await this.toReference(e.$ref.toValue());this.indirections.push(e);const n=HC(null===(t=e.$ref)||void 0===t?void 0:t.toValue());let s=zC(n,r.value.result);if(ZT(s)){const t=e.meta.get("referenced-element").toValue();uF(s)?(s=dB.refract(s),s.setMetaProperty("referenced-element",t)):s=this.namespace.getElementClass(t).refract(s)}if(this.indirections.includes(s))throw new Error("Recursive Reference Object detected");if(this.indirections.length>this.options.dereference.maxDepth)throw new fH(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);const i=UH({reference:r,namespace:this.namespace,indirections:[...this.indirections],options:this.options});await NH(s,i,{keyMap:TB,nodeTypeGetter:PB}),await i.crawl(),this.indirections.pop()},async crawlPathItemElement(e){var t;const r=await this.toReference(e.$ref.toValue());this.indirections.push(e);const n=HC(null===(t=e.$ref)||void 0===t?void 0:t.toValue());let s=zC(n,r.value.result);if(ZT(s)&&(s=cB.refract(s)),this.indirections.includes(s))throw new Error("Recursive Path Item Object reference detected");if(this.indirections.length>this.options.dereference.maxDepth)throw new fH(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);const i=UH({reference:r,namespace:this.namespace,indirections:[...this.indirections],options:this.options});await NH(s,i,{keyMap:TB,nodeTypeGetter:PB}),await i.crawl(),this.indirections.pop()},async crawlSchemaElement(e){const t=this.reference.uri,r=FH(t,e),n=Gz(r),s=Qz({uri:n}),i=Ck((e=>e.canRead(s)),this.options.resolve.resolvers),o=!i;let a,l;this.indirections.push(e);try{if(i||o)a=this.reference,l=qH(r,MH(a.value.result));else{a=await this.toReference(Yz(r));const e=HC(r);l=MH(zC(e,a.value.result))}}catch(e){if(!(o&&e instanceof PH))throw e;if(IH(RH(r))){a=await this.toReference(Yz(r));const e=RH(r);l=_H(e,MH(a.value.result))}else{a=await this.toReference(Yz(r));const e=HC(r);l=MH(zC(e,a.value.result))}}if(this.visited.add(e),this.indirections.includes(l))throw new Error("Recursive Schema Object reference detected");if(this.indirections.length>this.options.dereference.maxDepth)throw new fH(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);const c=UH({reference:a,namespace:this.namespace,indirections:[...this.indirections],options:this.options,visited:this.visited});await NH(l,c,{keyMap:TB,nodeTypeGetter:PB}),await c.crawl(),this.indirections.pop()},async crawl(){await qE(wE,RO)(this.crawlingMap),this.crawlingMap=null;for(const e of this.crawledElements)QB(e)?await this.crawlReferenceElement(e):sN(e)?await this.crawlSchemaElement(e):ZB(e)&&await this.crawlPathItemElement(e)}}}),zH=UH,HH=lC[Symbol.for("nodejs.util.promisify.custom")],VH=dT(EH,{init(){this.name="openapi-3-1"},methods:{canResolve(e){var t;return"text/plain"!==e.mediaType?WC.includes(e.mediaType):GB(null===(t=e.parseResult)||void 0===t?void 0:t.result)},async resolve(e,t){const r=cT(SB),n=OH({uri:e.uri,value:e.parseResult}),s=zH({reference:n,namespace:r,options:t}),i=jH();return i.add(n),await HH(i.rootRef.value,s,{keyMap:TB,nodeTypeGetter:PB}),await s.crawl(),i}}}),WH=VH,GH=e=>{if(!NT(e))return e;if(e.hasKey("$$normalized"))return e;const t=[_B({operationIdNormalizer:(e,t,r)=>tw({operationId:e},t,r,{v2OperationIdCompatibilityMode:!1})}),({predicates:e})=>{const t=(t,r)=>!!(e.isParameterElement(t)&&e.isParameterElement(r)&&e.isStringElement(t.name)&&e.isStringElement(t.in)&&e.isStringElement(r.name)&&e.isStringElement(r.in)&&qC(t.name)===qC(r.name)&&qC(t.in)===qC(r.in)),r=[];return{visitor:{PathItemElement:{enter(t,n,s,i,o){if(o.some(e.isComponentsElement))return;const{parameters:a}=t;e.isArrayElement(a)?r.push([...a.content]):r.push([])},leave(){r.pop()}},OperationElement:{leave(e){const n=tk(r);if(!Array.isArray(n)||0===n.length)return;const s=Fk([],["parameters","content"],e),i=Qk(t,[...s,...n]);e.parameters=new b_(i)}}}}},({predicates:e})=>{let t;return{visitor:{OpenApi3_1Element:{enter(r){e.isArrayElement(r.security)&&(t=r.security)},leave(){t=void 0}},OperationElement:{leave(r,n,s,i,o){var a;o.some(e.isComponentsElement)||void 0===r.security&&void 0!==t&&(r.security=new P_(null===(a=t)||void 0===a?void 0:a.content))}}}}},({predicates:e})=>{let t;const r=[];return{visitor:{OpenApi3_1Element:{enter(r){var n;e.isArrayElement(r.servers)&&(t=null===(n=r.servers)||void 0===n?void 0:n.content)},leave(){t=void 0}},PathItemElement:{enter(n,s,i,o,a){if(a.some(e.isComponentsElement))return;void 0===n.servers&&void 0!==t&&(n.servers=new m_(t));const{servers:l}=n;void 0!==l&&e.isArrayElement(l)?r.push([...l.content]):r.push(void 0)},leave(){r.pop()}},OperationElement:{enter(t){const n=tk(r);void 0!==n&&(e.isArrayElement(t.servers)||(t.servers=new C_(n)))}}}}},({predicates:e})=>({visitor:{ParameterElement:{leave(t,r,n,s,i){var o,a;if(!i.some(e.isComponentsElement)&&void 0!==t.schema&&e.isSchemaElement(t.schema)&&(void 0!==(null===(o=t.schema)||void 0===o?void 0:o.example)||void 0!==(null===(a=t.schema)||void 0===a?void 0:a.examples))){if(void 0!==t.examples&&e.isObjectElement(t.examples)){const e=t.examples.map((e=>{var t;return null===(t=e.value)||void 0===t?void 0:t.clone()}));return void 0!==t.schema.examples&&t.schema.set("examples",e),void(void 0!==t.schema.example&&t.schema.set("example",e))}void 0!==t.example&&(void 0!==t.schema.examples&&t.schema.set("examples",[t.example.clone()]),void 0!==t.schema.example&&t.schema.set("example",t.example.clone()))}}}}}),({predicates:e})=>({visitor:{HeaderElement:{leave(t,r,n,s,i){var o,a;if(!i.some(e.isComponentsElement)&&void 0!==t.schema&&e.isSchemaElement(t.schema)&&(void 0!==(null===(o=t.schema)||void 0===o?void 0:o.example)||void 0!==(null===(a=t.schema)||void 0===a?void 0:a.examples))){if(void 0!==t.examples&&e.isObjectElement(t.examples)){const e=t.examples.map((e=>{var t;return null===(t=e.value)||void 0===t?void 0:t.clone()}));return void 0!==t.schema.examples&&t.schema.set("examples",e),void(void 0!==t.schema.example&&t.schema.set("example",e))}void 0!==t.example&&(void 0!==t.schema.examples&&t.schema.set("examples",[t.example.clone()]),void 0!==t.schema.example&&t.schema.set("example",t.example.clone()))}}}}})],r=bC(e,t,{toolboxCreator:hN,visitorOptions:{keyMap:TB,nodeTypeGetter:PB}});return r.set("$$normalized",!0),r},JH=e=>t=>{if(t?.$$normalized)return t;if(JH.cache.has(t))return t;const r=oB.refract(t),n=e(r),s=qC(n);return JH.cache.set(t,s),s};JH.cache=new WeakMap;const KH=SH.compose({props:{name:"http-swagger-client",swaggerHTTPClient:Zv,swaggerHTTPClientConfig:{}},init(){let{swaggerHTTPClient:e=this.swaggerHTTPClient}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.swaggerHTTPClient=e},methods:{getHttpClient(){return this.swaggerHTTPClient},async read(e){const t=this.getHttpClient(),r=new AbortController,{signal:n}=r,s=setTimeout((()=>{r.abort()}),this.timeout),i=this.getHttpClient().withCredentials||this.withCredentials?"include":"same-origin",o=0===this.redirects?"error":"follow",a=this.redirects>0?this.redirects:void 0;try{return(await t(Fh({url:e.uri,signal:n,userFetch:async(e,t)=>{let r=await fetch(e,t);try{r.headers.delete("Content-Type")}catch{r=new Response(r.body,Fh(Fh({},r),{},{headers:new Headers(r.headers)})),r.headers.delete("Content-Type")}return r},credentials:i,redirects:o,follow:a},this.swaggerHTTPClientConfig))).text.arrayBuffer()}catch(t){throw new oH(`Error downloading "${e.uri}"`,{cause:t})}finally{clearTimeout(s)}}}}),ZH=wH.compose({props:{name:"json-swagger-client",fileExtensions:[".json"],mediaTypes:["application/json"]},methods:{async canParse(e){const t=0===this.fileExtensions.length||this.fileExtensions.includes(e.extension),r=this.mediaTypes.includes(e.mediaType);if(!t)return!1;if(r)return!0;if(!r)try{return JSON.parse(e.toString()),!0}catch(e){return!1}return!1},async parse(e){if(this.sourceMap)throw new lH("json-swagger-client parser plugin doesn't support sourceMaps option");const t=new iT,r=e.toString();if(this.allowEmpty&&""===r.trim())return t;try{const e=MC(JSON.parse(r));return e.classes.push("result"),t.push(e),t}catch(t){throw new lH(`Error parsing "${e.uri}"`,{cause:t})}}}}),YH=wH.compose({props:{name:"yaml-1-2-swagger-client",fileExtensions:[".yaml",".yml"],mediaTypes:["text/yaml","application/yaml"]},methods:{async canParse(e){const t=0===this.fileExtensions.length||this.fileExtensions.includes(e.extension),r=this.mediaTypes.includes(e.mediaType);if(!t)return!1;if(r)return!0;if(!r)try{return Lv.load(e.toString(),{schema:Av}),!0}catch(e){return!1}return!1},async parse(e){if(this.sourceMap)throw new lH("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");const t=new iT,r=e.toString();try{const e=Lv.load(r,{schema:Av});if(this.allowEmpty&&void 0===e)return t;const n=MC(e);return n.classes.push("result"),t.push(n),t}catch(t){throw new lH(`Error parsing "${e.uri}"`,{cause:t})}}}}),XH=wH.compose({props:{name:"openapi-json-3-1-swagger-client",fileExtensions:[".json"],mediaTypes:new VC(...WC.filterByFormat("generic"),...WC.filterByFormat("json")),detectionRegExp:/"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/},methods:{async canParse(e){const t=0===this.fileExtensions.length||this.fileExtensions.includes(e.extension),r=this.mediaTypes.includes(e.mediaType);if(!t)return!1;if(r)return!0;if(!r)try{const t=e.toString();return JSON.parse(t),this.detectionRegExp.test(t)}catch(e){return!1}return!1},async parse(e){if(this.sourceMap)throw new lH("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");const t=new iT,r=e.toString();if(this.allowEmpty&&""===r.trim())return t;try{const e=JSON.parse(r),n=oB.refract(e,this.refractorOpts);return n.classes.push("result"),t.push(n),t}catch(t){throw new lH(`Error parsing "${e.uri}"`,{cause:t})}}}}),QH=wH.compose({props:{name:"openapi-yaml-3-1-swagger-client",fileExtensions:[".yaml",".yml"],mediaTypes:new VC(...WC.filterByFormat("generic"),...WC.filterByFormat("yaml")),detectionRegExp:/(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m},methods:{async canParse(e){const t=0===this.fileExtensions.length||this.fileExtensions.includes(e.extension),r=this.mediaTypes.includes(e.mediaType);if(!t)return!1;if(r)return!0;if(!r)try{const t=e.toString();return Lv.load(t),this.detectionRegExp.test(t)}catch(e){return!1}return!1},async parse(e){if(this.sourceMap)throw new lH("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");const t=new iT,r=e.toString();try{const e=Lv.load(r,{schema:Av});if(this.allowEmpty&&void 0===e)return t;const n=oB.refract(e,this.refractorOpts);return n.classes.push("result"),t.push(n),t}catch(t){throw new lH(`Error parsing "${e.uri}"`,{cause:t})}}}});function eV(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function tV(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eV(Object(r),!0).forEach((function(t){Rh(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eV(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const rV=lC[Symbol.for("nodejs.util.promisify.custom")],nV=dT({props:{indirections:null,namespace:null,reference:null,options:null,ancestors:null},init({indirections:e=[],reference:t,namespace:r,options:n,ancestors:s=[]}){this.indirections=e,this.namespace=r,this.reference=t,this.options=n,this.ancestors=[...s]},methods:{toBaseURI(e){return Kz(this.reference.uri,Zz(Gz(e)))},toAncestorLineage(e){const t=new WeakSet(e.filter(DT));return[[...this.ancestors,t],t]},async toReference(e){if(this.reference.depth>=this.options.resolve.maxDepth)throw new uH(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);const t=this.toBaseURI(e),{refSet:r}=this.reference;if(r.has(t))return r.find(qk(t,"uri"));const n=await bH(Yz(t),tV(tV({},this.options),{},{parse:tV(tV({},this.options.parse),{},{mediaType:"text/plain"})})),s=OH({uri:t,value:n,depth:this.reference.depth+1});return r.add(s),s},async ReferenceElement(e,t,r,n,s){var i,o,a,l,c;const[p,u]=this.toAncestorLineage([...s,r]);if(p.some((t=>t.has(e))))return!1;if(!this.options.resolve.external&&eN(e))return!1;const d=await this.toReference(null===(i=e.$ref)||void 0===i?void 0:i.toValue()),h=d.uri,f=Kz(h,null===(o=e.$ref)||void 0===o?void 0:o.toValue());this.indirections.push(e);const m=HC(f);let y=zC(m,d.value.result);if(ZT(y)){const t=e.meta.get("referenced-element").toValue();uF(y)?(y=dB.refract(y),y.setMetaProperty("referenced-element",t)):y=this.namespace.getElementClass(t).refract(y)}if(this.indirections.includes(y))throw new Error("Recursive Reference Object detected");if(this.indirections.length>this.options.dereference.maxDepth)throw new fH(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);u.add(e);const g=nV({reference:d,namespace:this.namespace,indirections:[...this.indirections],options:this.options,ancestors:p});y=await rV(y,g,{keyMap:TB,nodeTypeGetter:PB}),u.delete(e),this.indirections.pop(),y=y.clone(),y.setMetaProperty("ref-fields",{$ref:null===(a=e.$ref)||void 0===a?void 0:a.toValue(),description:null===(l=e.description)||void 0===l?void 0:l.toValue(),summary:null===(c=e.summary)||void 0===c?void 0:c.toValue()}),y.setMetaProperty("ref-origin",d.uri);const v=Dk(nO,["description"],e),b=Dk(nO,["summary"],e);return v&&hk("description",y)&&(y.description=e.description),b&&hk("summary",y)&&(y.summary=e.summary),this.indirections.pop(),y},async PathItemElement(e,t,r,n,s){var i,o,a;const[l,c]=this.toAncestorLineage([...s,r]);if(!MT(e.$ref))return;if(l.some((t=>t.has(e))))return!1;if(!this.options.resolve.external&&YB(e))return;const p=await this.toReference(null===(i=e.$ref)||void 0===i?void 0:i.toValue()),u=p.uri,d=Kz(u,null===(o=e.$ref)||void 0===o?void 0:o.toValue());this.indirections.push(e);const h=HC(d);let f=zC(h,p.value.result);if(ZT(f)&&(f=cB.refract(f)),this.indirections.includes(f))throw new Error("Recursive Path Item Object reference detected");if(this.indirections.length>this.options.dereference.maxDepth)throw new fH(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);c.add(e);const m=nV({reference:p,namespace:this.namespace,indirections:[...this.indirections],options:this.options,ancestors:l});f=await rV(f,m,{keyMap:TB,nodeTypeGetter:PB}),c.delete(e),this.indirections.pop();const y=new cB([...f.content],f.meta.clone(),f.attributes.clone());return e.forEach(((e,t,r)=>{y.remove(t.toValue()),y.content.push(r)})),y.remove("$ref"),y.setMetaProperty("ref-fields",{$ref:null===(a=e.$ref)||void 0===a?void 0:a.toValue()}),y.setMetaProperty("ref-origin",p.uri),y},async LinkElement(e){if(!MT(e.operationRef)&&!MT(e.operationId))return;if(!this.options.resolve.external&&VB(e))return;if(MT(e.operationRef)&&MT(e.operationId))throw new Error("LinkElement operationRef and operationId fields are mutually exclusive.");let t;if(MT(e.operationRef)){var r,n,s;const i=HC(null===(r=e.operationRef)||void 0===r?void 0:r.toValue()),o=await this.toReference(null===(n=e.operationRef)||void 0===n?void 0:n.toValue());t=zC(i,o.value.result),ZT(t)&&(t=aB.refract(t)),t=new aB([...t.content],t.meta.clone(),t.attributes.clone()),t.setMetaProperty("ref-origin",o.uri),null===(s=e.operationRef)||void 0===s||s.meta.set("operation",t)}else if(MT(e.operationId)){var i,o;const r=null===(i=e.operationId)||void 0===i?void 0:i.toValue();if(t=EC((e=>JB(e)&&e.operationId.equals(r)),this.reference.value.result),rO(t))throw new Error(`OperationElement(operationId=${r}) not found.`);null===(o=e.operationId)||void 0===o||o.meta.set("operation",t)}},async ExampleElement(e){var t;if(!MT(e.externalValue))return;if(!this.options.resolve.external&&MT(e.externalValue))return;if(e.hasKey("value")&&MT(e.externalValue))throw new Error("ExampleElement value and externalValue fields are mutually exclusive.");const r=await this.toReference(null===(t=e.externalValue)||void 0===t?void 0:t.toValue()),n=new r.value.result.constructor(r.value.result.content,r.value.result.meta.clone(),r.value.result.attributes.clone());n.setMetaProperty("ref-origin",r.uri),e.value=n},async SchemaElement(e,t,r,n,s){var i;const[o,a]=this.toAncestorLineage([...s,r]);if(!MT(e.$ref))return;if(o.some((t=>t.has(e))))return!1;let{reference:l}=this,{uri:c}=l;const p=FH(c,e),u=Gz(p),d=Qz({uri:u}),h=Ck((e=>e.canRead(d)),this.options.resolve.resolvers),f=!h,m=f&&c!==u;if(!this.options.resolve.external&&m)return;let y;this.indirections.push(e);try{if(h||f)y=qH(p,MH(l.value.result));else{l=await this.toReference(Yz(p));const e=HC(p);y=MH(zC(e,l.value.result))}}catch(e){if(!(f&&e instanceof PH))throw e;if(IH(RH(p))){l=await this.toReference(Yz(p)),c=l.uri;const e=RH(p);y=_H(e,MH(l.value.result))}else{l=await this.toReference(Yz(p)),c=l.uri;const e=HC(p);y=MH(zC(e,l.value.result))}}if(this.indirections.includes(y))throw new Error("Recursive Schema Object reference detected");if(this.indirections.length>this.options.dereference.maxDepth)throw new fH(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);a.add(e);const g=nV({reference:l,namespace:this.namespace,indirections:[...this.indirections],options:this.options,ancestors:o});if(y=await rV(y,g,{keyMap:TB,nodeTypeGetter:PB}),a.delete(e),this.indirections.pop(),iN(y)){var v;const t=y.clone();return t.setMetaProperty("ref-fields",{$ref:null===(v=e.$ref)||void 0===v?void 0:v.toValue()}),t.setMetaProperty("ref-origin",l.uri),t}const b=new yB([...y.content],y.meta.clone(),y.attributes.clone());return e.forEach(((e,t,r)=>{b.remove(t.toValue()),b.content.push(r)})),b.remove("$ref"),b.setMetaProperty("ref-fields",{$ref:null===(i=e.$ref)||void 0===i?void 0:i.toValue()}),b.setMetaProperty("ref-origin",l.uri),b}}}),sV=nV,iV=lC[Symbol.for("nodejs.util.promisify.custom")],oV=dT(kH,{init(){this.name="openapi-3-1"},methods:{canDereference(e){var t;return"text/plain"!==e.mediaType?WC.includes(e.mediaType):GB(null===(t=e.parseResult)||void 0===t?void 0:t.result)},async dereference(e,t){const r=cT(SB),n=WE(jH(),t.dereference.refSet);let s;n.has(e.uri)?s=n.find(qk(e.uri,"uri")):(s=OH({uri:e.uri,value:e.parseResult}),n.add(s));const i=sV({reference:s,namespace:r,options:t}),o=await iV(n.rootRef.value,i,{keyMap:TB,nodeTypeGetter:PB});return null===t.dereference.refSet&&n.clean(),o}}}),aV=oV,lV=e=>{const t=(e=>e.slice(2))(e);return t.reduce(((e,r,n)=>{if(zT(r)){const t=String(r.key.toValue());e.push(t)}else if(UT(t[n-2])){const s=t[n-2].content.indexOf(r);e.push(s)}return e}),[])},cV=e=>{if(null==e.cause)return e;let{cause:t}=e;for(;null!=t.cause;)t=t.cause;return t},pV=px("SchemaRefError",(function(e,t,r){this.originalError=r,Object.assign(this,t||{})})),{wrapError:uV}=_x,dV=lC[Symbol.for("nodejs.util.promisify.custom")],hV=sV.compose({props:{useCircularStructures:!0,allowMetaPatches:!1,basePath:null},init(e){let{allowMetaPatches:t=this.allowMetaPatches,useCircularStructures:r=this.useCircularStructures,basePath:n=this.basePath}=e;this.allowMetaPatches=t,this.useCircularStructures=r,this.basePath=n},methods:{async ReferenceElement(e,t,r,n,s){try{const[t,n]=this.toAncestorLineage([...s,r]);if(XT(["cycle"],e.$ref))return!1;if(t.some((t=>t.has(e))))return!1;if(!this.options.resolve.external&&eN(e))return!1;const i=await this.toReference(e.$ref.toValue()),o=i.uri,a=Kz(o,e.$ref.toValue());this.indirections.push(e);const l=HC(a);let c=zC(l,i.value.result);if(ZT(c)){const t=e.meta.get("referenced-element").toValue();if(uF(c))c=dB.refract(c),c.setMetaProperty("referenced-element",t);else{const e=this.namespace.getElementClass(t);c=e.refract(c)}}if(this.indirections.includes(c))throw new Error("Recursive JSON Pointer detected");if(this.indirections.length>this.options.dereference.maxDepth)throw new fH(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);if(!this.useCircularStructures&&t.some((e=>e.has(c)))){if(Hz(o)||zz(o)){const t=new dB({$ref:a},e.meta.clone(),e.attributes.clone());return t.get("$ref").classes.push("cycle"),t}return!1}n.add(e);const p=hV({reference:i,namespace:this.namespace,indirections:[...this.indirections],options:this.options,ancestors:t,allowMetaPatches:this.allowMetaPatches,useCircularStructures:this.useCircularStructures,basePath:this.basePath??[...lV([...s,r,e]),"$ref"]});c=await dV(c,p,{keyMap:TB,nodeTypeGetter:PB}),n.delete(e),this.indirections.pop(),c=c.clone(),c.setMetaProperty("ref-fields",{$ref:e.$ref?.toValue(),description:e.description?.toValue(),summary:e.summary?.toValue()}),c.setMetaProperty("ref-origin",i.uri);const u=void 0!==e.description,d=void 0!==e.summary;if(u&&"description"in c&&(c.description=e.description),d&&"summary"in c&&(c.summary=e.summary),this.allowMetaPatches&&NT(c)){const e=c;if(void 0===e.get("$$ref")){const t=Kz(o,a);e.set("$$ref",t)}}return c}catch(t){const n=cV(t),i=uV(n,{baseDoc:this.reference.uri,$ref:e.$ref.toValue(),pointer:HC(e.$ref.toValue()),fullPath:this.basePath??[...lV([...s,r,e]),"$ref"]});return void this.options.dereference.dereferenceOpts?.errors?.push?.(i)}},async PathItemElement(e,t,r,n,s){try{const[t,n]=this.toAncestorLineage([...s,r]);if(!MT(e.$ref))return;if(XT(["cycle"],e.$ref))return!1;if(t.some((t=>t.has(e))))return!1;if(!this.options.resolve.external&&YB(e))return;const i=await this.toReference(e.$ref.toValue()),o=i.uri,a=Kz(o,e.$ref.toValue());this.indirections.push(e);const l=HC(a);let c=zC(l,i.value.result);if(ZT(c)&&(c=cB.refract(c)),this.indirections.includes(c))throw new Error("Recursive JSON Pointer detected");if(this.indirections.length>this.options.dereference.maxDepth)throw new fH(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);if(!this.useCircularStructures&&t.some((e=>e.has(c)))){if(Hz(o)||zz(o)){const t=new cB({$ref:a},e.meta.clone(),e.attributes.clone());return t.get("$ref").classes.push("cycle"),t}return!1}n.add(e);const p=hV({reference:i,namespace:this.namespace,indirections:[...this.indirections],options:this.options,ancestors:t,allowMetaPatches:this.allowMetaPatches,useCircularStructures:this.useCircularStructures,basePath:this.basePath??[...lV([...s,r,e]),"$ref"]});c=await dV(c,p,{keyMap:TB,nodeTypeGetter:PB}),n.delete(e),this.indirections.pop();const u=new cB([...c.content],c.meta.clone(),c.attributes.clone());if(e.forEach(((e,t,r)=>{u.remove(t.toValue()),u.content.push(r)})),u.remove("$ref"),u.setMetaProperty("ref-fields",{$ref:e.$ref?.toValue()}),u.setMetaProperty("ref-origin",i.uri),this.allowMetaPatches&&void 0===u.get("$$ref")){const e=Kz(o,a);u.set("$$ref",e)}return u}catch(t){const n=cV(t),i=uV(n,{baseDoc:this.reference.uri,$ref:e.$ref.toValue(),pointer:HC(e.$ref.toValue()),fullPath:this.basePath??[...lV([...s,r,e]),"$ref"]});return void this.options.dereference.dereferenceOpts?.errors?.push?.(i)}},async SchemaElement(e,t,r,n,s){try{const[t,n]=this.toAncestorLineage([...s,r]);if(!MT(e.$ref))return;if(XT(["cycle"],e.$ref))return!1;if(t.some((t=>t.has(e))))return!1;let{reference:i}=this,{uri:o}=i;const a=FH(o,e),l=Gz(a),c=Qz({uri:l}),p=!this.options.resolve.resolvers.some((e=>e.canRead(c))),u=!p,d=u&&o!==l;if(!this.options.resolve.external&&d)return;let h;this.indirections.push(e);try{if(p||u)h=qH(a,MH(i.value.result));else{i=await this.toReference(Yz(a)),o=i.uri;const e=HC(a);h=MH(zC(e,i.value.result))}}catch(e){if(!(u&&e instanceof PH))throw e;if(IH(RH(a))){i=await this.toReference(Yz(a)),o=i.uri;const e=RH(a);h=_H(e,MH(i.value.result))}else{i=await this.toReference(Yz(a)),o=i.uri;const e=HC(a);h=MH(zC(e,i.value.result))}}if(this.indirections.includes(h))throw new Error("Recursive Schema Object reference detected");if(this.indirections.length>this.options.dereference.maxDepth)throw new fH(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);if(!this.useCircularStructures&&t.some((e=>e.has(h)))){if(Hz(o)||zz(o)){const t=Kz(o,a),r=new yB({$ref:t},e.meta.clone(),e.attributes.clone());return r.get("$ref").classes.push("cycle"),r}return!1}n.add(e);const f=hV({reference:i,namespace:this.namespace,indirections:[...this.indirections],options:this.options,useCircularStructures:this.useCircularStructures,allowMetaPatches:this.allowMetaPatches,ancestors:t,basePath:this.basePath??[...lV([...s,r,e]),"$ref"]});if(h=await dV(h,f,{keyMap:TB,nodeTypeGetter:PB}),n.delete(e),this.indirections.pop(),iN(h)){const t=h.clone();return t.setMetaProperty("ref-fields",{$ref:e.$ref?.toValue()}),t.setMetaProperty("ref-origin",o),t}const m=new yB([...h.content],h.meta.clone(),h.attributes.clone());if(e.forEach(((e,t,r)=>{m.remove(t.toValue()),m.content.push(r)})),m.remove("$ref"),m.setMetaProperty("ref-fields",{$ref:e.$ref?.toValue()}),m.setMetaProperty("ref-origin",o),this.allowMetaPatches&&void 0===m.get("$$ref")){const e=Kz(o,a);m.set("$$ref",e)}return m}catch(t){const n=cV(t),i=new pV(`Could not resolve reference: ${n.message}`,{baseDoc:this.reference.uri,$ref:e.$ref.toValue(),fullPath:this.basePath??[...lV([...s,r,e]),"$ref"]},n);return void this.options.dereference.dereferenceOpts?.errors?.push?.(i)}},async LinkElement(){},async ExampleElement(e,t,r,n,s){try{return await sV.compose.methods.ExampleElement.call(this,e,t,r,n,s)}catch(t){const n=cV(t),i=uV(n,{baseDoc:this.reference.uri,externalValue:e.externalValue?.toValue(),fullPath:this.basePath??[...lV([...s,r,e]),"externalValue"]});return void this.options.dereference.dereferenceOpts?.errors?.push?.(i)}}}}),fV=aV.compose.bind(),mV=fV({init(e){let{parameterMacro:t,options:r}=e;this.parameterMacro=t,this.options=r},props:{parameterMacro:null,options:null,macroOperation:null,OperationElement:{enter(e){this.macroOperation=e},leave(){this.macroOperation=null}},ParameterElement:{leave(e,t,r,n,s){const i=null===this.macroOperation?null:qC(this.macroOperation),o=qC(e);try{const t=this.parameterMacro(i,o);e.set("default",t)}catch(e){const t=new Error(e,{cause:e});t.fullPath=lV([...s,r]),this.options.dereference.dereferenceOpts?.errors?.push?.(t)}}}}}),yV=fV({init(e){let{modelPropertyMacro:t,options:r}=e;this.modelPropertyMacro=t,this.options=r},props:{modelPropertyMacro:null,options:null,SchemaElement:{leave(e,t,r,n,s){void 0!==e.properties&&NT(e.properties)&&e.properties.forEach((t=>{if(NT(t))try{const e=this.modelPropertyMacro(qC(t));t.set("default",e)}catch(t){const n=new Error(t,{cause:t});n.fullPath=[...lV([...s,r,e]),"properties"],this.options.dereference.dereferenceOpts?.errors?.push?.(n)}}))}}}}),gV=fV({init(e){let{options:t}=e;this.options=t},props:{options:null,SchemaElement:{leave(e,t,r,n,s){if(void 0===e.allOf)return;if(!UT(e.allOf)){const t=new TypeError("allOf must be an array");return t.fullPath=[...lV([...s,r,e]),"allOf"],void this.options.dereference.dereferenceOpts?.errors?.push?.(t)}if(e.allOf.isEmpty)return new yB(e.content.filter((e=>"allOf"!==e.key.toValue())),e.meta.clone(),e.attributes.clone());if(!e.allOf.content.every(sN)){const t=new TypeError("Elements in allOf must be objects");return t.fullPath=[...lV([...s,r,e]),"allOf"],void this.options.dereference.dereferenceOpts?.errors?.push?.(t)}const i=DC.all([...e.allOf.content,e]);return e.hasKey("$$ref")||i.remove("$$ref"),e.hasKey("example")&&(i.getMember("example").value=e.get("example")),e.hasKey("examples")&&(i.getMember("examples").value=e.get("examples")),i.remove("allOf"),i}}}}),vV=lC[Symbol.for("nodejs.util.promisify.custom")],bV=aV.compose({props:{useCircularStructures:!0,allowMetaPatches:!1,parameterMacro:null,modelPropertyMacro:null,mode:"non-strict",ancestors:null},init(){let{useCircularStructures:e=this.useCircularStructures,allowMetaPatches:t=this.allowMetaPatches,parameterMacro:r=this.parameterMacro,modelPropertyMacro:n=this.modelPropertyMacro,mode:s=this.mode,ancestors:i=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.name="openapi-3-1-swagger-client",this.useCircularStructures=e,this.allowMetaPatches=t,this.parameterMacro=r,this.modelPropertyMacro=n,this.mode=s,this.ancestors=[...i]},methods:{async dereference(e,t){const r=[],n=cT(SB),s=t.dereference.refSet??jH();let i;s.has(e.uri)?i=s.find((t=>t.uri===e.uri)):(i=OH({uri:e.uri,value:e.parseResult}),s.add(i));const o=hV({reference:i,namespace:n,options:t,useCircularStructures:this.useCircularStructures,allowMetaPatches:this.allowMetaPatches,ancestors:this.ancestors});if(r.push(o),"function"==typeof this.parameterMacro){const e=mV({parameterMacro:this.parameterMacro,options:t});r.push(e)}if("function"==typeof this.modelPropertyMacro){const e=yV({modelPropertyMacro:this.modelPropertyMacro,options:t});r.push(e)}if("strict"!==this.mode){const e=gV({options:t});r.push(e)}const a=AT(r,{nodeTypeGetter:PB}),l=await vV(s.rootRef.value,a,{keyMap:TB,nodeTypeGetter:PB});return null===t.dereference.refSet&&s.clean(),l}}}),xV=async e=>{const{spec:t,timeout:r,redirects:n,requestInterceptor:s,responseInterceptor:i,pathDiscriminator:o=[],allowMetaPatches:a=!1,useCircularStructures:l=!1,skipNormalization:c=!1,parameterMacro:p=null,modelPropertyMacro:u=null,mode:d="non-strict"}=e;try{const{cache:f}=xV,m=Hz(Jz())?Jz():"https://smartbear.com/",y=cb(e),g=Kz(m,y);let v;f.has(t)?v=f.get(t):(v=oB.refract(t),v.classes.push("result"),f.set(t,v));const b=new iT([v]),x=0===(h=o).length?"":`/${h.map(NC).join("/")}`,w=""===x?"":`#${x}`,$=zC(x,v),S=OH({uri:g,value:b}),E=jH({refs:[S]});""!==x&&(E.rootRef=null);const k=[new WeakSet([$])],O=[],j=((e,t,r)=>jC({element:r}).transclude(e,t))($,await(async(e,t={})=>(async(e,t)=>{let r=e,n=!1;if(!JT(e)){const t=new e.constructor(e.content,e.meta.clone(),e.attributes);t.classes.push("result"),r=new iT([t]),n=!0}const s=Qz({uri:t.resolve.baseURI,parseResult:r,mediaType:t.parse.mediaType}),i=await mH("canDereference",s,t.dereference.strategies);if(wk(i))throw new hH(s.uri);try{const{result:e}=await yH("dereference",[s,t],i);return n?e.get(0):e}catch(e){throw new dH(`Error while dereferencing file "${s.uri}"`,{cause:e})}})(e,((e,t)=>{const r=Tk(e,t);return _k(tH,rH,r)})(eH,t)))($,{resolve:{baseURI:`${g}${w}`,resolvers:[KH({timeout:r||1e4,redirects:n||10})],resolverOpts:{swaggerHTTPClientConfig:{requestInterceptor:s,responseInterceptor:i}},strategies:[WH()]},parse:{mediaType:WC.latest(),parsers:[XH({allowEmpty:!1,sourceMap:!1}),QH({allowEmpty:!1,sourceMap:!1}),ZH({allowEmpty:!1,sourceMap:!1}),YH({allowEmpty:!1,sourceMap:!1}),AH({allowEmpty:!1,sourceMap:!1})]},dereference:{maxDepth:100,strategies:[bV({allowMetaPatches:a,useCircularStructures:l,parameterMacro:p,modelPropertyMacro:u,mode:d,ancestors:k})],refSet:E,dereferenceOpts:{errors:O}}}),v),A=c?j:GH(j);return{spec:qC(A),errors:O}}catch(e){if(e instanceof BC||e instanceof LC)return{spec:null,errors:[]};throw e}var h};xV.cache=new WeakMap;const wV={name:"openapi-3-1-apidom",match(e){let{spec:t}=e;return ow(t)},normalize(e){let{spec:t}=e;return JH(GH)(t)},resolve:async e=>xV(e)};function $V(e,t,r){if(!e||"object"!=typeof e||!e.paths||"object"!=typeof e.paths)return null;const{paths:n}=e;for(const s in n)for(const i in n[s]){if("PARAMETERS"===i.toUpperCase())continue;const o=n[s][i];if(!o||"object"!=typeof o)continue;const a={spec:e,pathName:s,method:i.toUpperCase(),operation:o},l=t(a);if(r&&l)return a}}function SV(e,t){return`${t.toLowerCase()}-${e}`}const EV=()=>null,kV=function(e){let{spec:t,cb:r=EV,defaultTag:n="default",v2OperationIdCompatibilityMode:s}=e;const i={},o={};return $V(t,(e=>{let{pathName:a,method:l,operation:c}=e;var p;(c.tags?(p=c.tags,Array.isArray(p)?p:[p]):[n]).forEach((e=>{if("string"!=typeof e)return;o[e]=o[e]||{};const n=o[e],p=tw(c,a,l,{v2OperationIdCompatibilityMode:s}),u=r({spec:t,pathName:a,method:l,operation:c,operationId:p});if(i[p])i[p]+=1,n[`${p}${i[p]}`]=u;else if(void 0!==n[p]){const e=i[p]||1;i[p]=e+1,n[`${p}${i[p]}`]=u;const t=n[p];delete n[p],n[`${p}${e}`]=t}else n[p]=u}))})),o},OV=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=>{let{pathName:r,method:n,operationId:s}=t;return function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{requestInterceptor:o,responseInterceptor:a,userFetch:l}=e;return e.execute(Fh({spec:e.spec,requestInterceptor:o,responseInterceptor:a,userFetch:l,pathName:r,method:n,parameters:t,operationId:s},i))}}};var jV=function(e,t,r){var n=r||{},s=n.encode||TV;if("function"!=typeof s)throw new TypeError("option encode is invalid");if(!PV.test(e))throw new TypeError("argument name is invalid");var i=s(t);if(i&&!PV.test(i))throw new TypeError("argument val is invalid");var o=e+"="+i;if(null!=n.maxAge){var a=n.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(n.domain){if(!PV.test(n.domain))throw new TypeError("option domain is invalid");o+="; Domain="+n.domain}if(n.path){if(!PV.test(n.path))throw new TypeError("option path is invalid");o+="; Path="+n.path}if(n.expires){var l=n.expires;if(!function(e){return"[object Date]"===AV.call(e)||e instanceof Date}(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+l.toUTCString()}if(n.httpOnly&&(o+="; HttpOnly"),n.secure&&(o+="; Secure"),n.priority)switch("string"==typeof n.priority?n.priority.toLowerCase():n.priority){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o},AV=Object.prototype.toString,PV=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function TV(e){return encodeURIComponent(e)}function CV(e){return"[object Object]"===Object.prototype.toString.call(e)}function IV(e){var t,r;return!1!==CV(e)&&(void 0===(t=e.constructor)||!1!==CV(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf"))}const RV={body:function(e){let{req:t,value:r}=e;t.body=r},header:function(e){let{req:t,parameter:r,value:n}=e;t.headers=t.headers||{},void 0!==n&&(t.headers[r.name]=n)},query:function(e){let{req:t,value:r,parameter:n}=e;if(t.query=t.query||{},!1===r&&"boolean"===n.type&&(r="false"),0===r&&["number","integer"].indexOf(n.type)>-1&&(r="0"),r)t.query[n.name]={collectionFormat:n.collectionFormat,value:r};else if(n.allowEmptyValue&&void 0!==r){const e=n.name;t.query[e]=t.query[e]||{},t.query[e].allowEmptyValue=!0}},path:function(e){let{req:t,value:r,parameter:n}=e;t.url=t.url.split(`{${n.name}}`).join(encodeURIComponent(r))},formData:function(e){let{req:t,value:r,parameter:n}=e;(r||n.allowEmptyValue)&&(t.form=t.form||{},t.form[n.name]={value:r,allowEmptyValue:n.allowEmptyValue,collectionFormat:n.collectionFormat})}};function _V(e,t){return t.includes("application/json")?"string"==typeof e?e:JSON.stringify(e):e.toString()}const FV=["accept","authorization","content-type"],DV=Object.freeze(Object.defineProperty({__proto__:null,cookie:function(e){let{req:t,parameter:r,value:n}=e;t.headers=t.headers||{};const s=typeof n;if(r.content){const e=Object.keys(r.content)[0];t.headers.Cookie=`${r.name}=${_V(n,e)}`}else if("undefined"!==s){const e="object"===s&&!Array.isArray(n)&&r.explode?"":`${r.name}=`;t.headers.Cookie=e+Gv({key:r.name,value:n,escape:!1,style:r.style||"form",explode:void 0!==r.explode&&r.explode})}},header:function(e){let{req:t,parameter:r,value:n}=e;if(t.headers=t.headers||{},!(FV.indexOf(r.name.toLowerCase())>-1))if(r.content){const e=Object.keys(r.content)[0];t.headers[r.name]=_V(n,e)}else void 0!==n&&(t.headers[r.name]=Gv({key:r.name,value:n,style:r.style||"simple",explode:void 0!==r.explode&&r.explode,escape:!1}))},path:function(e){let{req:t,value:r,parameter:n}=e;const{name:s,style:i,explode:o,content:a}=n;if(a){const e=Object.keys(a)[0];return void(t.url=t.url.split(`{${s}}`).join(Wv(_V(r,e),{escape:!0})))}const l=Gv({key:n.name,value:r,style:i||"simple",explode:o||!1,escape:!0});t.url=t.url.split(`{${s}}`).join(l)},query:function(e){let{req:t,value:r,parameter:n}=e;if(t.query=t.query||{},n.content){const e=_V(r,Object.keys(n.content)[0]);if(e)t.query[n.name]=e;else if(n.allowEmptyValue&&void 0!==r){const e=n.name;t.query[e]=t.query[e]||{},t.query[e].allowEmptyValue=!0}}else if(!1===r&&(r="false"),0===r&&(r="0"),r){const{style:e,explode:s,allowReserved:i}=n;t.query[n.name]={value:r,serializationOption:{style:e,explode:s,allowReserved:i}}}else if(n.allowEmptyValue&&void 0!==r){const e=n.name;t.query[e]=t.query[e]||{},t.query[e].allowEmptyValue=!0}}},Symbol.toStringTag,{value:"Module"})),MV="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window,{btoa:qV}=MV;const LV=["http","fetch","spec","operationId","pathName","method","parameters","securities"],BV=e=>Array.isArray(e)?e:[],NV=px("OperationNotFoundError",(function(e,t,r){this.originalError=r,Object.assign(this,t||{})})),UV={buildRequest:zV};function zV(e){const{spec:t,operationId:r,responseContentType:n,scheme:s,requestInterceptor:i,responseInterceptor:o,contextUrl:a,userFetch:l,server:c,serverVariables:p,http:u,signal:d}=e;let{parameters:h,parameterBuilders:f}=e;const m=aw(t);f||(f=m?DV:RV);let y={url:"",credentials:u&&u.withCredentials?"include":"same-origin",headers:{},cookies:{}};d&&(y.signal=d),i&&(y.requestInterceptor=i),o&&(y.responseInterceptor=o),l&&(y.userFetch=l);const g=function(e,t){return e&&e.paths?function(e,t){return $V(e,t,!0)||null}(e,(e=>{let{pathName:r,method:n,operation:s}=e;if(!s||"object"!=typeof s)return!1;const i=s.operationId;return[tw(s,r,n),SV(r,n),i].some((e=>e&&e===t))})):null}(t,r);if(!g)throw new NV(`Operation ${r} not found`);const{operation:v={},method:b,pathName:x}=g;if(y.url+=VV({spec:t,scheme:s,contextUrl:a,server:c,serverVariables:p,pathName:x,method:b}),!r)return delete y.cookies,y;y.url+=x,y.method=`${b}`.toUpperCase(),h=h||{};const w=t.paths[x]||{};n&&(y.headers.accept=n);const $=(e=>{const t={};e.forEach((e=>{t[e.in]||(t[e.in]={}),t[e.in][e.name]=e}));const r=[];return Object.keys(t).forEach((e=>{Object.keys(t[e]).forEach((n=>{r.push(t[e][n])}))})),r})([].concat(BV(v.parameters)).concat(BV(w.parameters)));$.forEach((e=>{const r=f[e.in];let n;if("body"===e.in&&e.schema&&e.schema.properties&&(n=h),n=e&&e.name&&h[e.name],void 0===n?n=e&&e.name&&h[`${e.in}.${e.name}`]:((e,t)=>t.filter((t=>t.name===e)))(e.name,$).length>1&&console.warn(`Parameter '${e.name}' is ambiguous because the defined spec has more than one parameter with the name: '${e.name}' and the passed-in parameter values did not define an 'in' value.`),null!==n){if(void 0!==e.default&&void 0===n&&(n=e.default),void 0===n&&e.required&&!e.allowEmptyValue)throw new Error(`Required parameter ${e.name} is not provided`);if(m&&e.schema&&"object"===e.schema.type&&"string"==typeof n)try{n=JSON.parse(n)}catch(e){throw new Error("Could not parse object parameter value string as JSON")}r&&r({req:y,parameter:e,value:n,operation:v,spec:t})}}));const S=Fh(Fh({},e),{},{operation:v});if(y=m?function(e,t){const{operation:r,requestBody:n,securities:s,spec:i,attachContentTypeForEmptyPayload:o}=e;let{requestContentType:a}=e;t=function(e){let{request:t,securities:r={},operation:n={},spec:s}=e;const i=Fh({},t),{authorized:o={}}=r,a=n.security||s.security||[],l=o&&!!Object.keys(o).length,c=aS(s,["components","securitySchemes"])||{};return i.headers=i.headers||{},i.query=i.query||{},Object.keys(r).length&&l&&a&&(!Array.isArray(n.security)||n.security.length)?(a.forEach((e=>{Object.keys(e).forEach((e=>{const t=o[e],r=c[e];if(!t)return;const n=t.value||t,{type:s}=r;if(t)if("apiKey"===s)"query"===r.in&&(i.query[r.name]=n),"header"===r.in&&(i.headers[r.name]=n),"cookie"===r.in&&(i.cookies[r.name]=n);else if("http"===s){if(/^basic$/i.test(r.scheme)){const e=n.username||"",t=n.password||"",r=qV(`${e}:${t}`);i.headers.Authorization=`Basic ${r}`}/^bearer$/i.test(r.scheme)&&(i.headers.Authorization=`Bearer ${n}`)}else if("oauth2"===s||"openIdConnect"===s){const e=t.token||{},n=e[r["x-tokenName"]||"access_token"];let s=e.token_type;s&&"bearer"!==s.toLowerCase()||(s="Bearer"),i.headers.Authorization=`${s} ${n}`}}))})),i):t}({request:t,securities:s,operation:r,spec:i});const l=r.requestBody||{},c=Object.keys(l.content||{}),p=a&&c.indexOf(a)>-1;if(n||o){if(a&&p)t.headers["Content-Type"]=a;else if(!a){const e=c[0];e&&(t.headers["Content-Type"]=e,a=e)}}else a&&p&&(t.headers["Content-Type"]=a);if(!e.responseContentType&&r.responses){const e=Object.entries(r.responses).filter((e=>{let[t,r]=e;const n=parseInt(t,10);return n>=200&&n<300&&IV(r.content)})).reduce(((e,t)=>{let[,r]=t;return e.concat(Object.keys(r.content))}),[]);e.length>0&&(t.headers.accept=e.join(", "))}if(n)if(a){if(c.indexOf(a)>-1)if("application/x-www-form-urlencoded"===a||"multipart/form-data"===a)if("object"==typeof n){const e=(l.content[a]||{}).encoding||{};t.form={},Object.keys(n).forEach((r=>{t.form[r]={value:n[r],encoding:e[r]||{}}}))}else t.form=n;else t.body=n}else t.body=n;return t}(S,y):function(e,t){const{spec:r,operation:n,securities:s,requestContentType:i,responseContentType:o,attachContentTypeForEmptyPayload:a}=e;if(t=function(e){let{request:t,securities:r={},operation:n={},spec:s}=e;const i=Fh({},t),{authorized:o={},specSecurity:a=[]}=r,l=n.security||a,c=o&&!!Object.keys(o).length,p=s.securityDefinitions;return i.headers=i.headers||{},i.query=i.query||{},Object.keys(r).length&&c&&l&&(!Array.isArray(n.security)||n.security.length)?(l.forEach((e=>{Object.keys(e).forEach((e=>{const t=o[e];if(!t)return;const{token:r}=t,n=t.value||t,s=p[e],{type:a}=s,l=s["x-tokenName"]||"access_token",c=r&&r[l];let u=r&&r.token_type;if(t)if("apiKey"===a){const e="query"===s.in?"query":"headers";i[e]=i[e]||{},i[e][s.name]=n}else if("basic"===a)if(n.header)i.headers.authorization=n.header;else{const e=n.username||"",t=n.password||"";n.base64=qV(`${e}:${t}`),i.headers.authorization=`Basic ${n.base64}`}else"oauth2"===a&&c&&(u=u&&"bearer"!==u.toLowerCase()?u:"Bearer",i.headers.authorization=`${u} ${c}`)}))})),i):t}({request:t,securities:s,operation:n,spec:r}),t.body||t.form||a)i?t.headers["Content-Type"]=i:Array.isArray(n.consumes)?[t.headers["Content-Type"]]=n.consumes:Array.isArray(r.consumes)?[t.headers["Content-Type"]]=r.consumes:n.parameters&&n.parameters.filter((e=>"file"===e.type)).length?t.headers["Content-Type"]="multipart/form-data":n.parameters&&n.parameters.filter((e=>"formData"===e.in)).length&&(t.headers["Content-Type"]="application/x-www-form-urlencoded");else if(i){const e=n.parameters&&n.parameters.filter((e=>"body"===e.in)).length>0,r=n.parameters&&n.parameters.filter((e=>"formData"===e.in)).length>0;(e||r)&&(t.headers["Content-Type"]=i)}return!o&&Array.isArray(n.produces)&&n.produces.length>0&&(t.headers.accept=n.produces.join(", ")),t}(S,y),y.cookies&&Object.keys(y.cookies).length){const e=Object.keys(y.cookies).reduce(((e,t)=>{const r=y.cookies[t];return e+(e?"&":"")+jV(t,r)}),"");y.headers.Cookie=e}return y.cookies&&delete y.cookies,ab(y),y}const HV=e=>e?e.replace(/\W/g,""):null;function VV(e){return aw(e.spec)?function(e){let{spec:t,pathName:r,method:n,server:s,contextUrl:i,serverVariables:o={}}=e;const a=aS(t,["paths",r,(n||"").toLowerCase(),"servers"])||aS(t,["paths",r,"servers"])||aS(t,["servers"]);let l="",c=null;if(s&&a&&a.length){const e=a.map((e=>e.url));e.indexOf(s)>-1&&(l=s,c=a[e.indexOf(s)])}if(!l&&a&&a.length&&(l=a[0].url,[c]=a),l.indexOf("{")>-1){const e=function(e){const t=[],r=/{([^}]+)}/g;let n;for(;n=r.exec(e);)t.push(n[1]);return t}(l);e.forEach((e=>{if(c.variables&&c.variables[e]){const t=c.variables[e],r=o[e]||t.default,n=new RegExp(`{${e}}`,"g");l=l.replace(n,r)}}))}return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=e&&t?Dh.parse(Dh.resolve(t,e)):Dh.parse(e),n=Dh.parse(t),s=HV(r.protocol)||HV(n.protocol)||"",i=r.host||n.host,o=r.pathname||"";let a;return a=s&&i?`${s}://${i+o}`:o,"/"===a[a.length-1]?a.slice(0,-1):a}(l,i)}(e):function(e){let{spec:t,scheme:r,contextUrl:n=""}=e;const s=Dh.parse(n),i=Array.isArray(t.schemes)?t.schemes[0]:null,o=r||i||HV(s.protocol)||"http",a=t.host||s.host||"",l=t.basePath||"";let c;return c=o&&a?`${o}://${a+l}`:l,"/"===c[c.length-1]?c.slice(0,-1):c}(e)}function WV(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e?t.url=e:t=e,!(this instanceof WV))return new WV(t);Object.assign(this,t);const r=this.resolve().then((()=>(this.disableInterfaces||Object.assign(this,WV.makeApisTagOperation(this)),this)));return r.client=this,r}function GV(e){const t=(e=e.replace("[]","Array")).split("/");return t[0]=t[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm,"_"),t.join("/")}WV.http=Zv,WV.makeHttp=function(e,t,r){return r=r||(e=>e),t=t||(e=>e),n=>("string"==typeof n&&(n={url:n}),Kv.mergeInQueryOrForm(n),n=t(n),r(e(n)))}.bind(null,WV.http),WV.resolveStrategies={"openapi-3-1-apidom":wV,"openapi-3-0":cw,"openapi-2-0":lw,generic:sw},WV.resolve=pw({strategies:[WV.resolveStrategies["openapi-3-1-apidom"],WV.resolveStrategies["openapi-3-0"],WV.resolveStrategies["openapi-2-0"],WV.resolveStrategies.generic]}),WV.resolveSubtree=(e=>async function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{returnEntireTree:n,baseDoc:s,requestInterceptor:i,responseInterceptor:o,parameterMacro:a,modelPropertyMacro:l,useCircularStructures:c,strategies:p}=r,u={spec:e,pathDiscriminator:t,baseDoc:s,requestInterceptor:i,responseInterceptor:o,parameterMacro:a,modelPropertyMacro:l,useCircularStructures:c,strategies:p},d=p.find((e=>e.match(u))),h=d.normalize(u),f=await uw(Fh(Fh({},u),{},{spec:h,allowMetaPatches:!0,skipNormalization:!0}));return!n&&Array.isArray(t)&&t.length&&(f.spec=aS(f.spec,t)||null),f}(t,r,Fh(Fh({},e),n))})({strategies:[WV.resolveStrategies["openapi-3-1-apidom"],WV.resolveStrategies["openapi-3-0"],WV.resolveStrategies["openapi-2-0"],WV.resolveStrategies.generic]}),WV.execute=function(e){let{http:t,fetch:r,spec:n,operationId:s,pathName:i,method:o,parameters:a,securities:l}=e,c=ST(e,LV);const p=t||r||Zv;i&&o&&!s&&(s=SV(i,o));const u=UV.buildRequest(Fh({spec:n,operationId:s,parameters:a,securities:l,http:p},c));return u.body&&(IV(u.body)||Array.isArray(u.body))&&(u.body=JSON.stringify(u.body)),p(u)},WV.serializeRes=Xv,WV.serializeHeaders=Qv,WV.clearCache=function(){Qx.refs.clearCache()},WV.makeApisTagOperation=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=OV(e);return{apis:kV({v2OperationIdCompatibilityMode:e.v2OperationIdCompatibilityMode,spec:e.spec,cb:t})}},WV.buildRequest=zV,WV.helpers={opId:tw},WV.getBaseUrl=VV,WV.apidom={resolve:{resolvers:{HttpResolverSwaggerClient:KH}},parse:{parsers:{JsonParser:ZH,YamlParser:YH,OpenApiJson3_1Parser:XH,OpenApiYaml3_1Parser:QH}},dereference:{strategies:{OpenApi3_1SwaggerClientDereferenceStrategy:bV}}},WV.prototype={http:Zv,execute(e){return this.applyDefaults(),WV.execute(Fh({spec:this.spec,http:this.http,securities:{authorized:this.authorizations},contextUrl:"string"==typeof this.url?this.url:void 0,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null},e))},resolve(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return WV.resolve(Fh({spec:this.spec,url:this.url,http:this.http||this.fetch,allowMetaPatches:this.allowMetaPatches,useCircularStructures:this.useCircularStructures,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null,skipNormalization:this.skipNormalization||!1},e)).then((e=>(this.originalSpec=this.spec,this.spec=e.spec,this.errors=e.errors,this)))}},WV.prototype.applyDefaults=function(){const{spec:e}=this,t=this.url;if(t&&t.startsWith("http")){const r=Dh.parse(t);e.host||(e.host=r.host),e.schemes||(e.schemes=[r.protocol.replace(":","")]),e.basePath||(e.basePath="/")}};const JV={parameterTypeProperties:["format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","minLength","maxLength","multipleOf","minItems","maxItems","uniqueItems","minProperties","maxProperties","additionalProperties","pattern","enum","default"],arrayProperties:["items","minItems","maxItems","uniqueItems"],httpMethods:["get","post","put","delete","patch","head","options","trace"],uniqueOnly:function(e,t,r){return r.indexOf(e)===t},createHash:function(e){let t,r=0;if(0===e.length)return r;for(let n=0;n<e.length;n++)t=e.charCodeAt(n),r=(r<<5)-r+t,r|=0;return r},sanitise:GV,sanitiseAll:function(e){return GV(e.split("/").join("_"))},camelize:function(e){return e.toLowerCase().replace(/[-_ \/\.](.)/g,((e,t)=>t.toUpperCase()))},clone:function(e){return JSON.parse(JSON.stringify(e))},circularClone:function e(t,r=null){if(r||(r=new WeakMap),Object(t)!==t||t instanceof Function)return t;if(r.has(t))return r.get(t);let n;try{n=new t.constructor}catch(e){n=Object.create(Object.getPrototypeOf(t))}return r.set(t,n),Object.assign(n,...Object.keys(t).map((n=>({[n]:e(t[n],r)}))))}};function KV(){return{depth:0,seen:new WeakMap,top:!0,combine:!1,allowRefSiblings:!1}}const ZV={getDefaultState:KV,walkSchema:function e(t,r,n,s){if(void 0===n.depth&&(n=KV()),null==t)return t;if(n.combine&&(t.allOf&&Array.isArray(t.allOf)&&1===t.allOf.length&&delete(t={...t.allOf[0],...t})?.allOf,t?.anyOf&&Array.isArray(t.anyOf)&&1===t.anyOf.length&&delete(t={...t.anyOf[0],...t})?.anyOf,t?.oneOf&&Array.isArray(t.oneOf)&&1===t.oneOf.length&&delete(t={...t.oneOf[0],...t})?.oneOf),s(t,r,n),n.seen.has(t))return t;if("object"==typeof t&&null!==t&&n.seen.set(t,!0),n.top=!1,n.depth++,void 0!==t?.items&&(n.property="items",e(t.items,t,n,s)),t?.additionalItems&&"object"==typeof t.additionalItems&&(n.property="additionalItems",e(t.additionalItems,t,n,s)),t?.additionalProperties&&"object"==typeof t.additionalProperties&&(n.property="additionalProperties",e(t.additionalProperties,t,n,s)),t?.properties)for(const r in t.properties){const i=t.properties[r];n.property=`properties/${r}`,e(i,t,n,s)}if(t?.patternProperties)for(const r in t.patternProperties){const i=t.patternProperties[r];n.property=`patternProperties/${r}`,e(i,t,n,s)}if(t?.allOf)for(const r in t.allOf){const i=t.allOf[r];n.property=`allOf/${r}`,e(i,t,n,s)}if(t?.anyOf)for(const r in t.anyOf){const i=t.anyOf[r];n.property=`anyOf/${r}`,e(i,t,n,s)}if(t?.oneOf)for(const r in t.oneOf){const i=t.oneOf[r];n.property=`oneOf/${r}`,e(i,t,n,s)}return t?.not&&(n.property="not",e(t.not,t,n,s)),n.depth--,t}};function YV(e,t,r){if(t||(t={depth:0}),t.depth||(t={path:"#",depth:0,pkey:"",parent:{},payload:{},seen:new WeakMap,identity:!1,identityDetection:!1,...t}),"object"!=typeof e)return;const n=t.path;for(const s in e){if(t.key=s,t.path=`${t.path}/${encodeURIComponent(s)}`,t.identityPath=t.seen.get(e[s]),t.identity=void 0!==t.identityPath,e.hasOwnProperty(s)&&r(e,s,t),"object"==typeof e[s]&&!t.identity){t.identityDetection&&!Array.isArray(e[s])&&null!==e[s]&&t.seen.set(e[s],t.path);const n={};n.parent=e,n.path=t.path,n.depth=t.depth?t.depth+1:1,n.pkey=s,n.payload=t.payload,n.seen=t.seen,n.identity=!1,n.identityDetection=t.identityDetection,YV(e[s],n,r)}t.path=n}}let XV;function QV(e,t){for(const r in e)r.startsWith("x-")&&!r.startsWith("x-s2o")&&(t[r]=e[r])}function eW(e,t){ZV.walkSchema(e,{},{},((e,r)=>{!function(e){if(e["x-required"]&&Array.isArray(e["x-required"])&&(e.required||(e.required=[]),e.required=e.required.concat(e["x-required"]),delete e["x-required"]),e["x-anyOf"]&&(e.anyOf=e["x-anyOf"],delete e["x-anyOf"]),e["x-oneOf"]&&(e.oneOf=e["x-oneOf"],delete e["x-oneOf"]),e["x-not"]&&(e.not=e["x-not"],delete e["x-not"]),"boolean"==typeof e["x-nullable"]&&(e.nullable=e["x-nullable"],delete e["x-nullable"]),"object"==typeof e["x-discriminator"]&&"string"==typeof e["x-discriminator"].propertyName){e.discriminator=e["x-discriminator"],delete e["x-discriminator"];for(const t in e.discriminator.mapping){const r=e.discriminator.mapping[t];r.startsWith("#/definitions/")&&(e.discriminator.mapping[t]=r.replace("#/definitions/","#/components/schemas/"))}}}(e),function(e,t,r){if(e.nullable&&r.patches++,e.discriminator&&"string"==typeof e.discriminator&&(e.discriminator={propertyName:e.discriminator}),e.items&&Array.isArray(e.items)&&(0===e.items.length?e.items={}:1===e.items.length?e.items=e.items[0]:e.items={anyOf:e.items}),e.type&&Array.isArray(e.type)){if(r.patches++,r.warnings.push("(Patchable) schema type must not be an array"),0===e.type.length)delete e.type;else{e.oneOf||(e.oneOf=[]);for(const t of e.type){const r={};if("null"===t)e.nullable=!0;else{r.type=t;for(const t of JV.arrayProperties)void 0!==e.prop&&(r[t]=e[t],delete e[t])}r.type&&e.oneOf.push(r)}delete e.type,0===e.oneOf.length?delete e.oneOf:e.oneOf.length<2&&(e.type=e.oneOf[0].type,Object.keys(e.oneOf[0]).length>1&&(r.patches++,r.warnings.push("Lost properties from oneOf")),delete e.oneOf)}e.type&&Array.isArray(e.type)&&1===e.type.length&&(e.type=e.type[0])}e.type&&"null"===e.type&&(delete e.type,e.nullable=!0),"array"!==e.type||e.items||(e.items={}),"file"===e.type&&(e.type="string",e.format="binary"),"boolean"==typeof e.required&&(e.required&&e.name&&(void 0===t.required&&(t.required=[]),Array.isArray(t.required)&&t.required.push(e.name)),delete e.required),e.xml&&"string"==typeof e.xml.namespace&&(e.xml.namespace||delete e.xml.namespace),e.allowEmptyValue&&(delete e.allowEmptyValue,r.patches++,r.warnings.push("(Patchable): deleted schema.allowEmptyValue"))}(e,r,t)}))}function tW(e){for(const t in e)for(const r in e[t]){const n=JV.sanitise(r);r!==n&&(e[t][n]=e[t][r],delete e[t][r])}}function rW(e,t){if("basic"===e.type&&(e.type="http",e.scheme="basic"),"oauth2"===e.type){const r={};let n=e.flow;"application"===e.flow&&(n="clientCredentials"),"accessCode"===e.flow&&(n="authorizationCode"),"string"==typeof e.authorizationUrl&&(r.authorizationUrl=e.authorizationUrl.split("?")[0].trim()||"/"),"string"==typeof e.tokenUrl&&(r.tokenUrl=e.tokenUrl.split("?")[0].trim()||"/"),r.scopes=e.scopes||{},e.flows={},e.flows[n]=r,delete e.flow,delete e.authorizationUrl,delete e.tokenUrl,delete e.scopes,e.name&&(delete e.name,t.patches++,t.warnings.push("(Patchable) oauth2 securitySchemes should not have name property"))}}function nW(e){return e&&!e["x-s2o-delete"]}function sW(e,t){if(e.type&&!e.schema&&(e.schema={}),e.type&&(e.schema.type=e.type),e.items&&"array"!==e.items.type){if(e.items.collectionFormat!==e.collectionFormat)return t.errCount++,void t.errors.push({message:"Nested collectionFormats are not supported",pointer:"/.../responses/header"});delete e.items.collectionFormat}"array"===e.type?("ssv"===e.collectionFormat?(t.patches++,t.warnings.push("collectionFormat:ssv is no longer supported for headers")):"pipes"===e.collectionFormat?(t.patches++,t.warnings.push("collectionFormat:pipes is no longer supported for headers")):"multi"===e.collectionFormat?e.explode=!0:"tsv"===e.collectionFormat?(e["x-collectionFormat"]="tsv",t.patches++,t.warnings.push("collectionFormat:tsv is no longer supported")):e.style="simple",delete e.collectionFormat):e.collectionFormat&&(delete e.collectionFormat,t.patches++,t.warnings.push("(Patchable) collectionFormat is only applicable to header.type array")),delete e.type;for(const t of JV.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t]);for(const t of JV.arrayProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t])}function iW(e,t,r,n,s,i,o){const a={};let l,c=!0;t&&t.consumes&&"string"==typeof t.consumes&&(t.consumes=[t.consumes],o.patches++,o.warnings.push("(Patchable) operation.consumes must be an array")),Array.isArray(i.consumes)||delete i.consumes;const p=((t?t.consumes:null)||i.consumes||[]).filter(JV.uniqueOnly);if(e&&(e.name||e.in)){"boolean"==typeof e["x-deprecated"]&&(e.deprecated=e["x-deprecated"],delete e["x-deprecated"]),void 0!==e["x-example"]&&(e.example=e["x-example"],delete e["x-example"]),"body"===e.in||e.type||(e.type="string",o.patches++,o.warnings.push("(Patchable) parameter.type is mandatory for non-body parameters")),"file"===e.type&&(e["x-s2o-originalType"]=e.type,l=e.type),null===e.description&&delete e.description;let t=e.collectionFormat;if("array"!==e.type||t||(t="csv"),t&&("array"!==e.type&&(delete e.collectionFormat,o.patches++,o.warnings.push("(Patchable) collectionFormat is only applicable to param.type array")),"csv"!==t||"query"!==e.in&&"cookie"!==e.in||(e.style="form",e.explode=!1),"csv"!==t||"path"!==e.in&&"header"!==e.in||(e.style="simple"),"ssv"===t&&("query"===e.in?e.style="spaceDelimited":o.warnings.push(`${e.name} collectionFormat:ssv is no longer supported except for in:query parameters`)),"pipes"===t&&("query"===e.in?e.style="pipeDelimited":o.warnings.push(`${e.name} collectionFormat:pipes is no longer supported except for in:query parameters`)),"multi"===t&&(e.explode=!0),"tsv"===t&&(o.warnings.push("collectionFormat:tsv is no longer supported"),e["x-collectionFormat"]="tsv"),delete e.collectionFormat),e.type&&"body"!==e.type&&"formData"!==e.in)if(e.items&&e.schema)o.warnings.push(`${e.name} parameter has array,items and schema`);else{e.schema&&o.patches++,e.schema&&"object"==typeof e.schema||(e.schema={}),e.schema.type=e.type,e.items&&(e.schema.items=e.items,delete e.items,YV(e.schema.items,null,((r,n)=>{"collectionFormat"===n&&"string"==typeof r[n]&&(t&&r[n]!==t&&o.warnings.push(`${e.name} Nested collectionFormats are not supported`),delete r[n])})));for(const t of JV.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t]),delete e[t]}e.schema&&eW(e.schema,o),e["x-ms-skip-url-encoding"]&&"query"===e.in&&(e.allowReserved=!0,delete e["x-ms-skip-url-encoding"])}if(e&&"formData"===e.in){c=!1,a.content={};let t="application/x-www-form-urlencoded";if(p.length&&p.indexOf("multipart/form-data")>=0&&(t="multipart/form-data"),a.content[t]={},e.schema)a.content[t].schema=e.schema;else{a.content[t].schema={},a.content[t].schema.type="object",a.content[t].schema.properties={},a.content[t].schema.properties[e.name]={};const r=a.content[t].schema,n=a.content[t].schema.properties[e.name];e.description&&(n.description=e.description),e.example&&(n.example=e.example),e.type&&(n.type=e.type);for(const t of JV.parameterTypeProperties)void 0!==e[t]&&(n[t]=e[t]);!0===e.required&&(r.required||(r.required=[]),r.required.push(e.name),a.required=!0),void 0!==e.default&&(n.default=e.default),n.properties&&(n.properties=e.properties),e.allOf&&(n.allOf=e.allOf),"array"===e.type&&e.items&&(n.items=e.items,n.items.collectionFormat&&delete n.items.collectionFormat),"file"!==l&&"file"!==e["x-s2o-originalType"]||(n.type="string",n.format="binary"),QV(e,n)}}else e&&"file"===e.type&&(e.required&&(a.required=e.required),a.content={},a.content["application/octet-stream"]={},a.content["application/octet-stream"].schema={},a.content["application/octet-stream"].schema.type="string",a.content["application/octet-stream"].schema.format="binary",QV(e,a));if(e&&"body"===e.in){a.content={},e.name&&(a["x-s2o-name"]=(t&&t.operationId?JV.sanitiseAll(t.operationId):"")+JV.camelize(`_${e.name}`)),e.description&&(a.description=e.description),e.required&&(a.required=e.required),p.length||p.push("application/json");for(const t of p)a.content[t]={},a.content[t].schema=JV.clone(e.schema||{}),eW(a.content[t].schema,o);QV(e,a)}if(Object.keys(a).length>0&&(e["x-s2o-delete"]=!0,t))if(t.requestBody&&c){t.requestBody["x-s2o-overloaded"]=!0;const e=t.operationId||s;o.warnings.push(`Operation ${e} has multiple requestBodies`)}else t.requestBody||(t=function(e,t){const r={};for(const n of Object.keys(e))r[n]=e[n],"parameters"===n&&(r.requestBody={},t.rbname&&(r[t.rbname]=""));return r.requestBody={},r}(t,o),r[n]=t),t.requestBody.content&&t.requestBody.content["multipart/form-data"]&&t.requestBody.content["multipart/form-data"].schema&&t.requestBody.content["multipart/form-data"].schema.properties&&a.content["multipart/form-data"]&&a.content["multipart/form-data"].schema&&a.content["multipart/form-data"].schema.properties?(t.requestBody.content["multipart/form-data"].schema.properties=Object.assign(t.requestBody.content["multipart/form-data"].schema.properties,a.content["multipart/form-data"].schema.properties),t.requestBody.content["multipart/form-data"].schema.required=(t.requestBody.content["multipart/form-data"].schema.required||[]).concat(a.content["multipart/form-data"].schema.required||[]),t.requestBody.content["multipart/form-data"].schema.required.length||delete t.requestBody.content["multipart/form-data"].schema.required):t.requestBody.content&&t.requestBody.content["application/x-www-form-urlencoded"]&&t.requestBody.content["application/x-www-form-urlencoded"].schema&&t.requestBody.content["application/x-www-form-urlencoded"].schema.properties&&a.content["application/x-www-form-urlencoded"]&&a.content["application/x-www-form-urlencoded"].schema&&a.content["application/x-www-form-urlencoded"].schema.properties?(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties=Object.assign(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties,a.content["application/x-www-form-urlencoded"].schema.properties),t.requestBody.content["application/x-www-form-urlencoded"].schema.required=(t.requestBody.content["application/x-www-form-urlencoded"].schema.required||[]).concat(a.content["application/x-www-form-urlencoded"].schema.required||[]),t.requestBody.content["application/x-www-form-urlencoded"].schema.required.length||delete t.requestBody.content["application/x-www-form-urlencoded"].schema.required):(t.requestBody=Object.assign(t.requestBody,a),t.requestBody["x-s2o-name"]||t.operationId&&(t.requestBody["x-s2o-name"]=JV.sanitiseAll(t.operationId)));if(e&&!e["x-s2o-delete"]){delete e.type;for(const t of JV.parameterTypeProperties)delete e[t];"path"!==e.in||void 0!==e.required&&!0===e.required||(e.required=!0,o.patches++,o.warnings.push(`(Patchable) path parameters must be required:true [${e.name} in ${s}]`))}return t}function oW(e,t,r,n){if(!e)return!1;if(e.description||"object"!=typeof e||Array.isArray(e)||(n.patches++,n.warnings.push("(Patchable) response.description is mandatory")),void 0!==e.schema){eW(e.schema,n),t&&t.produces&&"string"==typeof t.produces&&(t.produces=[t.produces],n.patches++,n.warnings.push("(Patchable) operation.produces must be an array")),r.produces&&!Array.isArray(r.produces)&&delete r.produces;const s=((t?t.produces:null)||r.produces||[]).filter(JV.uniqueOnly);s.length||s.push("*/*"),e.content={};for(const t of s){if(e.content[t]={},e.content[t].schema=JV.clone(e.schema),e.examples&&e.examples[t]){const r={};r.value=e.examples[t],e.content[t].examples={},e.content[t].examples.response=r,delete e.examples[t]}"file"===e.content[t].schema.type&&(e.content[t].schema={type:"string",format:"binary"})}delete e.schema}for(const t in e.examples)e.content||(e.content={}),e.content[t]||(e.content[t]={}),e.content[t].examples={},e.content[t].examples.response={},e.content[t].examples.response.value=e.examples[t];if(delete e.examples,e.headers)for(const t in e.headers)"status code"===t.toLowerCase()?(delete e.headers[t],n.patches++,n.warnings.push('(Patchable) "Status Code" is not a valid header')):sW(e.headers[t],n)}function aW(e,t,r,n,s){for(const i in e){const o=e[i];o&&o["x-trace"]&&"object"==typeof o["x-trace"]&&(o.trace=o["x-trace"],delete o["x-trace"]),o&&o["x-summary"]&&"string"==typeof o["x-summary"]&&(o.summary=o["x-summary"],delete o["x-summary"]),o&&o["x-description"]&&"string"==typeof o["x-description"]&&(o.description=o["x-description"],delete o["x-description"]),o&&o["x-servers"]&&Array.isArray(o["x-servers"])&&(o.servers=o["x-servers"],delete o["x-servers"]);for(const e in o)if(JV.httpMethods.indexOf(e)>=0||"x-amazon-apigateway-any-method"===e){let a=o[e];if(a&&a.parameters&&Array.isArray(a.parameters)){if(o.parameters)for(const t of o.parameters)a.parameters.find((e=>e.name===t.name&&e.in===t.in))||"formData"!==t.in&&"body"!==t.in&&"file"!==t.type||(a=iW(t,a,o,e,i,s,r));for(const t of a.parameters)a=iW(t,a,o,e,`${e}: ${i}`,s,r);a.parameters&&(a.parameters=a.parameters.filter(nW))}if(a&&a.security&&tW(a.security),"object"==typeof a){if(!a.responses){const e={description:"Default response"};a.responses={default:e}}for(const e in a.responses)oW(a.responses[e],a,s,r)}if(a&&a["x-servers"]&&Array.isArray(a["x-servers"]))a.servers=a["x-servers"],delete a["x-servers"];else if(a&&a.schemes&&a.schemes.length)for(const e of a.schemes)if((!s.schemes||s.schemes.indexOf(e)<0)&&(a.servers||(a.servers=[]),Array.isArray(s.servers)))for(const e of s.servers){const t=JV.clone(e);a.servers.push(t)}if(a){if(delete a.consumes,delete a.produces,delete a.schemes,a["x-ms-examples"]){for(const e in a["x-ms-examples"]){const t=a["x-ms-examples"][e],r=JV.sanitiseAll(e);if(t.parameters)for(const r in t.parameters){const n=t.parameters[r];for(const t of(a.parameters||[]).concat(o.parameters||[]))t.name!==r||t.example||(t.examples||(t.examples={}),t.examples[e]={value:n})}if(t.responses)for(const n in t.responses){if(t.responses[n].headers)for(const e in t.responses[n].headers){const r=t.responses[n].headers[e];for(const t in a.responses[n].headers)t===e&&(a.responses[n].headers[t].example=r)}if(t.responses[n].body&&(s.components.examples[r]={value:JV.clone(t.responses[n].body)},a.responses[n]&&a.responses[n].content))for(const t in a.responses[n].content){const s=a.responses[n].content[t];s.examples||(s.examples={}),s.examples[e]={$ref:`#/components/examples/${r}`}}}}delete a["x-ms-examples"]}if(a.parameters&&0===a.parameters.length&&delete a.parameters,a.requestBody){const r=a.operationId?JV.sanitiseAll(a.operationId):JV.camelize(JV.sanitiseAll(e+i)),s=JV.sanitise(a.requestBody["x-s2o-name"]||r||"");delete a.requestBody["x-s2o-name"];const o=JSON.stringify(a.requestBody),l=JV.createHash(o);if(!n[l]){const e={};e.name=s,e.body=a.requestBody,e.refs=[],n[l]=e}const c=`#/${t}/${encodeURIComponent(i)}/${e}/requestBody`;n[l].refs.push(c)}}}if(o&&o.parameters){for(const e in o.parameters)iW(o.parameters[e],null,o,null,i,s,r);Array.isArray(o.parameters)&&(o.parameters=o.parameters.filter(nW))}}}function lW(e){return e&&e.url&&"string"==typeof e.url?(e.url=e.url.split("{{").join("{"),e.url=e.url.split("}}").join("}"),e.url.replace(/\{(.+?)\}/g,((t,r)=>{e.variables||(e.variables={}),e.variables[r]={default:"unknown"}})),e):e}function cW(e,t){void 0!==e.info&&null!==e.info||(e.info={version:"",title:""},t.patches++,t.warnings.push("(Patchable) info object is mandatory")),("object"!=typeof e.info||Array.isArray(e.info))&&(t.errCount++,t.errors.push({message:"info must be an object",pointer:"/info"})),e.info&&(void 0===e.info.title&&(t.patches++,e.info.title="",t.warnings.push({message:"(Patchable) info.title cannot be null",pointer:"/info/title",patchable:!0})),void 0===e.info.version?(t.patches++,e.info.version="",t.warnings.push("(Patchable) info.version cannot be null")):"string"!=typeof e.info.version&&(t.patches++,e.info.version=e.info.version.toString(),t.warnings.push("(Patchable) info.version must be a string")))}function pW(e,t){e.paths||(t.patches++,e.paths={},t.warnings.push("(Patchable) paths object is mandatory"))}function uW(e={}){const t={original:e,openapi:{},patches:0,warnings:[],errCount:0,errors:[]};if(e.openapi&&"string"==typeof e.openapi&&e.openapi.startsWith("3."))return t.openapi=JV.circularClone(e),cW(t.openapi,t),pW(t.openapi,t),t;if("2.0"!==e.swagger)return t.errCount++,t.errors.push({message:`Unsupported swagger/OpenAPI version: ${e.openapi?e.openapi:e.swagger}`,pointer:"/swagger"}),t;if(t.openapi=JV.circularClone(e),t.openapi.openapi="3.0.0",delete t.openapi.swagger,YV(t.openapi,{},((e,t,r)=>{null===e[t]&&!t.startsWith("x-")&&"default"!==t&&r.path.indexOf("/example")<0&&delete e[t]})),e.host)(e.schemes||[]).forEach((r=>{const n={},s=(e.basePath||"").replace(/\/$/,"");n.url=`${r?`${r}:`:""}//${e.host}${s}`,lW(n),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(n)}));else if(e.basePath){const r={};r.url=e.basePath,lW(r),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(r)}if(delete t.openapi.host,delete t.openapi.basePath,e["x-ms-parameterized-host"]){const r=e["x-ms-parameterized-host"],n={};n.url=r.hostTemplate+(e.basePath?e.basePath:""),n.variables={};const s=n.url.match(/\{\w+\}/g);for(const e in r.parameters){const t=r.parameters[e];e.startsWith("x-")||(delete t.required,delete t.type,delete t.in,void 0===t.default&&(t.enum?t.default=t.enum[0]:t.default="none"),t.name||(t.name=s[e].replace("{","").replace("}","")),n.variables[t.name]=t,delete t.name)}t.openapi.servers||(t.openapi.servers=[]),!1===r.useSchemePrefix?t.openapi.servers.push(n):e.schemes.forEach((e=>{t.openapi.servers.push({...n,url:`${e}://${n.url}`})})),delete t.openapi["x-ms-parameterized-host"]}return cW(t.openapi,t),pW(t.openapi,t),"string"==typeof t.openapi.consumes&&(t.openapi.consumes=[t.openapi.consumes]),"string"==typeof t.openapi.produces&&(t.openapi.produces=[t.openapi.produces]),t.openapi.components={},t.openapi["x-callbacks"]&&(t.openapi.components.callbacks=t.openapi["x-callbacks"],delete t.openapi["x-callbacks"]),t.openapi.components.examples={},t.openapi.components.headers={},t.openapi["x-links"]&&(t.openapi.components.links=t.openapi["x-links"],delete t.openapi["x-links"]),t.openapi.components.parameters=t.openapi.parameters||{},t.openapi.components.responses=t.openapi.responses||{},t.openapi.components.requestBodies={},t.openapi.components.securitySchemes=t.openapi.securityDefinitions||{},t.openapi.components.schemas=t.openapi.definitions||{},delete t.openapi.definitions,delete t.openapi.responses,delete t.openapi.parameters,delete t.openapi.securityDefinitions,function(e){const t=e.openapi,r={};XV={schemas:{}},t.security&&tW(t.security);for(const r in t.components.securitySchemes){const n=JV.sanitise(r);if(r!==n){if(t.components.securitySchemes[n])return e.errCount++,e.errors.push({message:`Duplicate sanitised securityScheme name ${n}`,pointer:`/components/securitySchemes/${n}`}),e;t.components.securitySchemes[n]=t.components.securitySchemes[r],delete t.components.securitySchemes[r]}rW(t.components.securitySchemes[n],e)}for(const r in t.components.schemas){const n=JV.sanitiseAll(r);let s=0;if(r!==n){for(;t.components.schemas[n+s];)s=s?++s:2;t.components.schemas[n+s]=t.components.schemas[r],delete t.components.schemas[r]}XV.schemas[r]=n+s,eW(t.components.schemas[`${n}${s}`],e)}for(const r in t.components.parameters){const n=JV.sanitise(r);if(r!==n){if(t.components.parameters[n])return e.errCount++,e.errors.push({message:`Duplicate sanitised parameter name ${n}`,pointer:`/components/parameters/${n}`}),e;t.components.parameters[n]=t.components.parameters[r],delete t.components.parameters[r]}iW(t.components.parameters[n],null,null,null,n,t,e)}for(const r in t.components.responses){const n=JV.sanitise(r);if(r!==n){if(t.components.responses[n])return e.errCount++,e.errors.push({message:`Duplicate sanitised response name ${n}`,pointer:`/components/responses/${n}`}),e;t.components.responses[n]=t.components.responses[r],delete t.components.responses[r]}const s=t.components.responses[n];if(oW(s,null,t,e),s.headers)for(const t in s.headers)"status code"===t.toLowerCase()?(delete s.headers[t],e.patches++,e.warnings.push('(Patchable) "Status Code" is not a valid header')):sW(s.headers[t],e)}for(const e in t.components.requestBodies){const n=t.components.requestBodies[e],s=JSON.stringify(n),i=JV.createHash(s),o={};o.name=e,o.body=n,o.refs=[],r[i]=o}aW(t.paths,"paths",e,r,t),t["x-ms-paths"]&&aW(t["x-ms-paths"],"x-ms-paths",e,r,t);for(const e in t.components.parameters)t.components.parameters[e]["x-s2o-delete"]&&delete t.components.parameters[e];return delete t.consumes,delete t.produces,delete t.schemes,t.components.requestBodies={},t.components.responses&&0===Object.keys(t.components.responses).length&&delete t.components.responses,t.components.parameters&&0===Object.keys(t.components.parameters).length&&delete t.components.parameters,t.components.examples&&0===Object.keys(t.components.examples).length&&delete t.components.examples,t.components.requestBodies&&0===Object.keys(t.components.requestBodies).length&&delete t.components.requestBodies,t.components.securitySchemes&&0===Object.keys(t.components.securitySchemes).length&&delete t.components.securitySchemes,t.components.headers&&0===Object.keys(t.components.headers).length&&delete t.components.headers,t.components.schemas&&0===Object.keys(t.components.schemas).length&&delete t.components.schemas,t.components&&0===Object.keys(t.components).length&&delete t.components,e}(t)}function dW(e){return e.ok&&e.text&&e.parseError&&"YAMLException"===e.parseError.name&&(!e.headers["content-type"]||e.headers["content-type"].match("text/plain"))&&(e.body=e.text),e}const hW=function(e){return new Promise((async t=>{try{const r=await WV.resolve(e,dW);if(r.errors&&r.errors.length>0)t(r);else{r.spec.openapi&&(r.resolvedSpec=r.spec,t(r));const e=uW(r.spec);e.errors&&e.errors.length>0&&(Array.isArray(r.errors)?r.errors.concat(r.errors):r.errors=e.errors),e.warnings&&e.warnings.length>0&&(r.warnings=e.warnings),r.resolvedSpec=r.spec,r.spec=e.openapi,t(r)}}catch(e){t(e)}}))};async function fW(e,t=!1,r=!1,n="",s="",i="",o="",a=""){var l,c;let p;try{var u,d;let t;if(this.requestUpdate(),t="string"==typeof e?await hW({url:e,allowMetaPatches:!1}):await hW({spec:e,allowMetaPatches:!1}),await At(0),null!==(u=t.resolvedSpec)&&void 0!==u&&u.jsonSchemaViewer&&null!==(d=t.resolvedSpec)&&void 0!==d&&d.schemaAndExamples){this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:t.resolvedSpec}}));const e=Object.entries(t.resolvedSpec.schemaAndExamples).map((e=>({show:!0,expanded:!0,selectedExample:null,name:e[0],elementId:e[0].replace(Ot,"-"),...e[1]})));return{specLoadError:!1,isSpecLoading:!1,info:t.resolvedSpec.info,schemaAndExamples:e}}var h,f,m,y;if(!t.spec||!(t.spec.components||t.spec.info||t.spec.servers||t.spec.tags||t.spec.paths))return console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",t),{specLoadError:!0,isSpecLoading:!1,info:{title:"Error loading the spec",description:null!==(h=t.response)&&void 0!==h&&h.url?`${null===(f=t.response)||void 0===f?void 0:f.url} ┃ ${null===(m=t.response)||void 0===m?void 0:m.status}  ${null===(y=t.response)||void 0===y?void 0:y.statusText}`:"Unable to load the Spec",version:" "},tags:[]};p=t.spec,this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:p}}))}catch(e){console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",e)}const g=function(e,t,r=!1,n=!1){const s=["get","put","post","delete","patch","head","options"],i=e.tags&&Array.isArray(e.tags)?e.tags.map((e=>({show:!0,elementId:`tag--${e.name.replace(Ot,"-")}`,name:e.name,description:e.description||"",headers:e.description?mW(e.description):[],paths:[],expanded:!1!==e["x-tag-expanded"]}))):[],o=e.paths||{};if(e.webhooks)for(const[t,r]of Object.entries(e.webhooks))r._type="webhook",o[t]=r;for(const t in o){const n=o[t].parameters,a={servers:o[t].servers||[],parameters:o[t].parameters||[]},l="webhook"===o[t]._type;s.forEach((s=>{if(o[t][s]){const o=e.paths[t][s],c=o.tags||[];if(0===c.length)if(r){const e=t.replace(/^\/+|\/+$/g,""),r=e.indexOf("/");-1===r?c.push(e):c.push(e.substr(0,r))}else c.push("General ⦂");c.forEach((r=>{let c,p;var u,d;(e.tags&&(p=e.tags.find((e=>e.name.toLowerCase()===r.toLowerCase()))),c=i.find((e=>e.name===r)),c)||(c={show:!0,elementId:`tag--${r.replace(Ot,"-")}`,name:r,description:(null===(u=p)||void 0===u?void 0:u.description)||"",headers:null!==(d=p)&&void 0!==d&&d.description?mW(p.description):[],paths:[],expanded:!p||!1!==p["x-tag-expanded"]},i.push(c));let h=(o.summary||o.description||`${s.toUpperCase()} ${t}`).trim();h.length>100&&([h]=h.split(/[.|!|?]\s|[\r?\n]/));let f=[];if(f=n?o.parameters?n.filter((e=>{if(!o.parameters.some((t=>e.name===t.name&&e.in===t.in)))return e})).concat(o.parameters):n.slice(0):o.parameters?o.parameters.slice(0):[],o.callbacks)for(const[e,t]of Object.entries(o.callbacks)){const r=Object.entries(t).filter((e=>"object"==typeof e[1]))||[];o.callbacks[e]=Object.fromEntries(r)}c.paths.push({show:!0,expanded:!1,isWebhook:l,expandedAtLeastOnce:!1,summary:o.summary||"",description:o.description||"",externalDocs:o.externalDocs,shortSummary:h,method:s,path:t,operationId:o.operationId,elementId:`${s}-${t.replace(Ot,"-")}`,servers:o.servers?a.servers.concat(o.servers):a.servers,parameters:f,requestBody:o.requestBody,responses:o.responses,callbacks:o.callbacks,deprecated:o.deprecated,security:o.security,xBadges:o["x-badges"]||void 0,xCodeSamples:o["x-codeSamples"]||o["x-code-samples"]||""})}))}}))}const a=i.filter((e=>e.paths&&e.paths.length>0));return a.forEach((e=>{"method"===t?e.paths.sort(((e,t)=>s.indexOf(e.method).toString().localeCompare(s.indexOf(t.method)))):"summary"===t?e.paths.sort(((e,t)=>e.shortSummary.localeCompare(t.shortSummary))):"path"===t&&e.paths.sort(((e,t)=>e.path.localeCompare(t.path))),e.firstPathId=e.paths[0].elementId})),n?a.sort(((e,t)=>e.name.localeCompare(t.name))):a}(p,n,t,r),v=function(e){if(!e.components)return[];const t=[];for(const r in e.components){const n=[];for(const t in e.components[r]){const s={show:!0,id:`${r.toLowerCase()}-${t.toLowerCase()}`.replace(Ot,"-"),name:t,component:e.components[r][t]};n.push(s)}let s=r,i=r;switch(r){case"schemas":i="Schemas",s="Schemas allows the definition of input and output data types. These types can be objects, but also primitives and arrays.";break;case"responses":i="Responses",s="Describes responses from an API Operation, including design-time, static links to operations based on the response.";break;case"parameters":i="Parameters",s="Describes operation parameters. A unique parameter is defined by a combination of a name and location.";break;case"examples":i="Examples",s="List of Examples for operations, can be requests, responses and objects examples.";break;case"requestBodies":i="Request Bodies",s="Describes common request bodies that are used across the API operations.";break;case"headers":i="Headers",s='Headers follows the structure of the Parameters but they are explicitly in "header"';break;case"securitySchemes":i="Security Schemes",s="Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows(implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.";break;case"links":i="Links",s="Links represent a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.";break;case"callbacks":i="Callbacks",s="A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.";break;default:i=r,s=r}const o={show:!0,name:i,description:s,subComponents:n};t.push(o)}return t||[]}(p),b=null!==(l=p.info)&&void 0!==l&&l.description?mW(p.info.description):[],x=[];if(null!==(c=p.components)&&void 0!==c&&c.securitySchemes){const e=new Set;Object.entries(p.components.securitySchemes).forEach((t=>{if(!e.has(t[0])){e.add(t[0]);const r={securitySchemeId:t[0],...t[1]};r.value="",r.finalKeyValue="","apiKey"===t[1].type||"http"===t[1].type?(r.in=t[1].in||"header",r.name=t[1].name||"Authorization",r.user="",r.password=""):"oauth2"===t[1].type&&(r.in="header",r.name="Authorization",r.clientId="",r.clientSecret=""),x.push(r)}}))}s&&i&&o&&x.push({securitySchemeId:jt,description:"api-key provided in rapidoc element attributes",type:"apiKey",oAuthFlow:"",name:s,in:i,value:o,finalKeyValue:o}),x.forEach((e=>{"http"===e.type?e.typeDisplay="basic"===e.scheme?"HTTP Basic":"HTTP Bearer":"apiKey"===e.type?e.typeDisplay=`API Key (${e.name})`:"oauth2"===e.type?e.typeDisplay=`OAuth (${e.securitySchemeId})`:e.typeDisplay=e.type||"None"}));let w=[];p.servers&&Array.isArray(p.servers)?(p.servers.forEach((e=>{let t=e.url.trim();t.startsWith("http")||t.startsWith("//")||t.startsWith("{")||window.location.origin.startsWith("http")&&(e.url=window.location.origin+e.url,t=e.url),e.variables&&Object.entries(e.variables).forEach((e=>{const r=new RegExp(`{${e[0]}}`,"g");t=t.replace(r,e[1].default||""),e[1].value=e[1].default||""})),e.computedUrl=t})),a&&p.servers.push({url:a,computedUrl:a})):a?p.servers=[{url:a,computedUrl:a}]:window.location.origin.startsWith("http")?p.servers=[{url:window.location.origin,computedUrl:window.location.origin}]:p.servers=[{url:"http://localhost",computedUrl:"http://localhost"}],w=p.servers;return{specLoadError:!1,isSpecLoading:!1,info:p.info,infoDescriptionHeaders:b,tags:g,components:v,externalDocs:p.externalDocs,securitySchemes:x,servers:w}}function mW(e){const t=Je.lexer(e).filter((e=>"heading"===e.type&&e.depth<=2));return t||[]}const yW=1,gW=2,vW=3,bW=4,xW=e=>(...t)=>({_$litDirective$:e,values:t});class wW{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class $W extends wW{constructor(e){if(super(e),this.et=V,e.type!==gW)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===V||null==e)return this.ft=void 0,this.et=e;if(e===H)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}$W.directiveName="unsafeHTML",$W.resultType=1;const SW=xW($W),{I:EW}=ie,kW=e=>void 0===e.strings,OW={},jW=(e,t)=>{var r,n;const s=e._$AN;if(void 0===s)return!1;for(const e of s)null===(n=(r=e)._$AO)||void 0===n||n.call(r,t,!1),jW(e,t);return!0},AW=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===(null==r?void 0:r.size))},PW=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),IW(t)}};function TW(e){void 0!==this._$AN?(AW(this),this._$AM=e,PW(this)):this._$AM=e}function CW(e,t=!1,r=0){const n=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(n))for(let e=r;e<n.length;e++)jW(n[e],!1),AW(n[e]);else null!=n&&(jW(n,!1),AW(n));else jW(this,e)}const IW=e=>{var t,r,n,s;e.type==gW&&(null!==(t=(n=e)._$AP)&&void 0!==t||(n._$AP=CW),null!==(r=(s=e)._$AQ)&&void 0!==r||(s._$AQ=TW))};class RW extends wW{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),PW(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,n;e!==this.isConnected&&(this.isConnected=e,e?null===(r=this.reconnected)||void 0===r||r.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(jW(this,e),AW(this))}setValue(e){if(kW(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class _W{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class FW{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.Z=e)))}resume(){var e;null===(e=this.Z)||void 0===e||e.call(this),this.Y=this.Z=void 0}}const DW=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,MW=1073741823;const qW=xW(class extends RW{constructor(){super(...arguments),this._$C_t=MW,this._$Cwt=[],this._$Cq=new _W(this),this._$CK=new FW}render(...e){var t;return null!==(t=e.find((e=>!DW(e))))&&void 0!==t?t:H}update(e,t){const r=this._$Cwt;let n=r.length;this._$Cwt=t;const s=this._$Cq,i=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$C_t);e++){const o=t[e];if(!DW(o))return this._$C_t=e,o;e<n&&o===r[e]||(this._$C_t=MW,n=0,Promise.resolve(o).then((async e=>{for(;i.get();)await i.get();const t=s.deref();if(void 0!==t){const r=t._$Cwt.indexOf(o);r>-1&&r<t._$C_t&&(t._$C_t=r,t.setValue(e))}})))}return H}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}});var LW=r(764).lW;const BW="731DB1C3F7EA533B85E29492D26AA-1234567890-1234567890",NW="4FatVDBJKPAo4JgLLaaQFMUcQPn5CrPRvLlaob9PTYc",UW="rapidoc";function zW(e,t="",r="",n=""){var s,i;const o=null===(s=this.resolvedSpec.securitySchemes)||void 0===s?void 0:s.find((t=>t.securitySchemeId===e));if(!o)return!1;let a="";if("basic"===(null===(i=o.scheme)||void 0===i?void 0:i.toLowerCase()))t&&(a=`Basic ${LW.from(`${t}:${r}`,"utf8").toString("base64")}`);else if(n){var l;o.value=n,a=`${"bearer"===(null===(l=o.scheme)||void 0===l?void 0:l.toLowerCase())?"Bearer ":""}${n}`}return!!a&&(o.finalKeyValue=a,this.requestUpdate(),!0)}function HW(){var e;null===(e=this.resolvedSpec.securitySchemes)||void 0===e||e.forEach((e=>{e.user="",e.password="",e.value="",e.finalKeyValue=""})),this.requestUpdate()}function VW(){return JSON.parse(localStorage.getItem(UW))||{}}function WW(e){localStorage.setItem(UW,JSON.stringify(e))}function GW(){const e=VW.call(this);Object.values(e).forEach((e=>{zW.call(this,e.securitySchemeId,e.username,e.password,e.value)}))}function JW(e){let t="";const r=this.resolvedSpec.securitySchemes.find((t=>t.securitySchemeId===e));if(r){const n=this.shadowRoot.getElementById(`security-scheme-${e}`);if(n){if(r.type&&r.scheme&&"http"===r.type&&"basic"===r.scheme.toLowerCase()){const t=n.querySelector(".api-key-user").value.trim(),r=n.querySelector(".api-key-password").value.trim();zW.call(this,e,t,r)}else t=n.querySelector(".api-key-input").value.trim(),zW.call(this,e,"","",t);if("true"===this.persistAuth){const t=VW.call(this);t[e]=r,WW.call(this,t)}}}}function KW(e,t,r="Bearer"){const n=this.resolvedSpec.securitySchemes.find((t=>t.securitySchemeId===e));n.finalKeyValue=`${"bearer"===r.toLowerCase()?"Bearer":"mac"===r.toLowerCase()?"MAC":r} ${t}`,this.requestUpdate()}async function ZW(e,t,r,n,s,i,o,a,l="header",c=null,p=null,u=null){const d=a?a.querySelector(".oauth-resp-display"):void 0,h=new URLSearchParams,f=new Headers;h.append("grant_type",s),"authorization_code"===s&&(h.append("client_id",t),h.append("client_secret",r)),"client_credentials"!==s&&"password"!==s&&h.append("redirect_uri",n),i&&(h.append("code",i),h.append("code_verifier",BW)),"header"===l?f.set("Authorization",`Basic ${LW.from(`${t}:${r}`,"utf8").toString("base64")}`):"authorization_code"!==s&&(h.append("client_id",t),h.append("client_secret",r)),"password"===s&&(h.append("username",p),h.append("password",u)),c&&h.append("scope",c);try{const t=await fetch(e,{method:"POST",headers:f,body:h}),r=await t.json();if(!t.ok)return d&&(d.innerHTML=`<span style="color:var(--red)">${r.error_description||r.error_description||"Unable to get access token"}</span>`),!1;if(r.token_type&&r.access_token)return KW.call(this,o,r.access_token,r.token_type),d&&(d.innerHTML='<span style="color:var(--green)">Access Token Received</span>'),!0}catch(e){return d&&(d.innerHTML='<span style="color:var(--red)">Failed to get access token</span>'),!1}}async function YW(e,t,r,n,s,i,o,a,l,c){sessionStorage.removeItem("winMessageEventActive"),t.close(),e.data.fake||(e.data||console.warn("RapiDoc: Received no data with authorization message"),e.data.error&&console.warn("RapiDoc: Error while receiving data"),e.data&&("code"===e.data.responseType?ZW.call(this,r,n,s,i,o,e.data.code,l,c,a):"token"===e.data.responseType&&KW.call(this,l,e.data.access_token,e.data.token_type)))}async function XW(e,t,r,n,s){const i=s.target.closest(".oauth-flow"),o=i.querySelector(".oauth-client-id")?i.querySelector(".oauth-client-id").value.trim():"",a=i.querySelector(".oauth-client-secret")?i.querySelector(".oauth-client-secret").value.trim():"",l=i.querySelector(".api-key-user")?i.querySelector(".api-key-user").value.trim():"",c=i.querySelector(".api-key-password")?i.querySelector(".api-key-password").value.trim():"",p=i.querySelector(".oauth-send-client-secret-in")?i.querySelector(".oauth-send-client-secret-in").value.trim():"header",u=[...i.querySelectorAll(".scope-checkbox:checked")],d=i.querySelector(`#${e}-pkce`),h=`${Math.random().toString(36).slice(2,9)}random${Math.random().toString(36).slice(2,9)}`,f=`${Math.random().toString(36).slice(2,9)}random${Math.random().toString(36).slice(2,9)}`,m=new URL(`${window.location.origin}${window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))}/${this.oauthReceiver}`);let y,g="",v="";if([...i.parentNode.querySelectorAll(".oauth-resp-display")].forEach((e=>{e.innerHTML=""})),"authorizationCode"===t||"implicit"===t){const s=new URL(r);"authorizationCode"===t?(g="authorization_code",v="code"):"implicit"===t&&(v="token");const l=new URLSearchParams(s.search),c=u.map((e=>e.value)).join(" ");c&&l.set("scope",c),l.set("client_id",o),l.set("redirect_uri",m.toString()),l.set("response_type",v),l.set("state",h),l.set("nonce",f),d&&d.checked&&(l.set("code_challenge",NW),l.set("code_challenge_method","S256")),l.set("show_dialog",!0),s.search=l.toString(),"true"===sessionStorage.getItem("winMessageEventActive")&&window.postMessage({fake:!0},this),setTimeout((()=>{y=window.open(s.toString()),y?(sessionStorage.setItem("winMessageEventActive","true"),window.addEventListener("message",(t=>YW.call(this,t,y,n,o,a,m.toString(),g,p,e,i)),{once:!0})):console.error(`RapiDoc: Unable to open ${s.toString()} in a new window`)}),10)}else if("clientCredentials"===t){g="client_credentials";const t=u.map((e=>e.value)).join(" ");ZW.call(this,n,o,a,m.toString(),g,"",e,i,p,t)}else if("password"===t){g="password";const t=u.map((e=>e.value)).join(" ");ZW.call(this,n,o,a,m.toString(),g,"",e,i,p,t,l,c)}}function QW(e,t,r,n,s,i=[],o="header",a=void 0){let{authorizationUrl:l,tokenUrl:c,refreshUrl:p}=s;const u=s["x-pkce-only"]||!1,d=e=>e.indexOf("://")>0||0===e.indexOf("//"),h=new URL(this.selectedServer.computedUrl).origin;let f;return p&&!d(p)&&(p=`${h}/${p.replace(/^\//,"")}`),c&&!d(c)&&(c=`${h}/${c.replace(/^\//,"")}`),l&&!d(l)&&(l=`${h}/${l.replace(/^\//,"")}`),f="authorizationCode"===e?"Authorization Code Flow":"clientCredentials"===e?"Client Credentials Flow":"implicit"===e?"Implicit Flow":"password"===e?"Password Flow":e,z`
    <div
      class="oauth-flow ${e}"
      style="padding: 12px 0; margin-bottom:12px;"
    >
      <div class="tiny-title upper" style="margin-bottom:8px;">
        ${f}
      </div>
      ${l?z`<div style="margin-bottom:5px">
            <span style="width:75px; display: inline-block;">Auth URL</span>
            <span class="mono-font"> ${l} </span>
          </div>`:""}
      ${c?z`<div style="margin-bottom:5px">
            <span style="width:75px; display: inline-block;">Token URL</span>
            <span class="mono-font">${c}</span>
          </div>`:""}
      ${p?z`<div style="margin-bottom:5px">
            <span style="width:75px; display: inline-block;">Refresh URL</span>
            <span class="mono-font">${p}</span>
          </div>`:""}
      ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?z`
            ${s.scopes?z`
                  <span> Scopes </span>
                  <div
                    class="oauth-scopes"
                    part="section-auth-scopes"
                    style="width:100%; display:flex; flex-direction:column; flex-wrap:wrap; margin:0 0 10px 24px"
                  >
                    ${Object.entries(s.scopes).map(((t,r)=>z`
                        <div
                          class="m-checkbox"
                          style="display:inline-flex; align-items:center"
                        >
                          <input
                            type="checkbox"
                            part="checkbox checkbox-auth-scope"
                            class="scope-checkbox"
                            id="${n}${e}${r}"
                            ?checked="${i.includes(t[0])}"
                            value="${t[0]}"
                          />
                          <label
                            for="${n}${e}${r}"
                            style="margin-left:5px; cursor:pointer"
                          >
                            <span class="mono-font">${t[0]}</span>
                            ${t[0]!==t[1]?` - ${t[1]||""}`:""}
                          </label>
                        </div>
                      `))}
                  </div>
                `:""}
            ${"password"===e?z` <div style="margin:5px 0">
                  <input
                    type="text"
                    value=""
                    placeholder="username"
                    spellcheck="false"
                    class="oauth2 ${e} ${n} api-key-user"
                    part="textbox textbox-username"
                  />
                  <input
                    type="password"
                    value=""
                    placeholder="password"
                    spellcheck="false"
                    class="oauth2 ${e} ${n} api-key-password"
                    style="margin:0 5px;"
                    part="textbox textbox-password"
                  />
                </div>`:""}
            <div>
              ${"authorizationCode"===e?z`
                    <div style="margin: 16px 0 4px">
                      <input
                        type="checkbox"
                        part="checkbox checkbox-auth-scope"
                        id="${n}-pkce"
                        checked
                        ?disabled=${u}
                      />
                      <label
                        for="${n}-pkce"
                        style="margin:0 16px 0 4px; line-height:24px; cursor:pointer"
                      >
                        Send Proof Key for Code Exchange (PKCE)
                      </label>
                    </div>
                  `:""}
              <input
                type="text"
                part="textbox textbox-auth-client-id"
                value="${t||""}"
                placeholder="client-id"
                spellcheck="false"
                class="oauth2 ${e} ${n} oauth-client-id"
              />
              ${"authorizationCode"===e||"clientCredentials"===e||"password"===e?z` <input
                      type="password"
                      part="textbox textbox-auth-client-secret"
                      value="${r||""}"
                      placeholder="client-secret"
                      spellcheck="false"
                      class="oauth2 ${e} ${n}
                  oauth-client-secret"
                      style="margin:0 5px;${u?"display:none;":""}"
                    />
                    <select
                      style="margin-right:5px;${u?"display:none;":""}"
                      class="${e} ${n} oauth-send-client-secret-in"
                    >
                      ${!a||a.includes("header")?z`<option
                            value="header"
                            .selected=${"header"===o}
                          >
                            Authorization Header
                          </option>`:""}
                      ${!a||a.includes("request-body")?z` <option
                            value="request-body"
                            .selected=${"request-body"===o}
                          >
                            Request Body
                          </option>`:""}
                    </select>`:""}
              ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?z` <button
                    class="m-btn thin-border"
                    part="btn btn-outline"
                    @click="${t=>{XW.call(this,n,e,l,c,t)}}"
                  >
                    GET TOKEN
                  </button>`:""}
            </div>
            <div class="oauth-resp-display red-text small-font-size"></div>
          `:""}
    </div>
  `}function eG(e){var t;const r=null===(t=this.resolvedSpec.securitySchemes)||void 0===t?void 0:t.find((t=>t.securitySchemeId===e));if(r.user="",r.password="",r.value="",r.finalKeyValue="","true"===this.persistAuth){const e=VW.call(this);delete e[r.securitySchemeId],WW.call(this,e)}this.requestUpdate()}function tG(){var e;if(!this.resolvedSpec)return"";const t=null===(e=this.resolvedSpec.securitySchemes)||void 0===e?void 0:e.filter((e=>e.finalKeyValue));return t?z`
    <section
      id="auth"
      part="section-auth"
      style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;"
      class="observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap "}"
    >
      <div class="sub-title regular-font">AUTHENTICATION</div>

      <div
        class="small-font-size"
        style="display:flex; align-items: center; min-height:30px"
      >
        ${t.length>0?z` <div class="blue-text">
                ${t.length} API key applied
              </div>
              <div style="flex:1"></div>
              <button
                class="m-btn thin-border"
                part="btn btn-outline"
                @click=${()=>{HW.call(this)}}
              >
                CLEAR ALL API KEYS
              </button>`:z`<div class="red-text">No API key applied</div>`}
      </div>
      ${this.resolvedSpec.securitySchemes&&this.resolvedSpec.securitySchemes.length>0?z` <table
            role="presentation"
            id="auth-table"
            class="m-table padded-12"
            style="width:100%;"
          >
            ${this.resolvedSpec.securitySchemes.map((e=>z`
                <tr
                  id="security-scheme-${e.securitySchemeId}"
                  class="${e.type.toLowerCase()}"
                >
                  <td style="max-width:500px; overflow-wrap: break-word;">
                    <div style="line-height:28px; margin-bottom:5px;">
                      <span
                        style="font-weight:bold; font-size:var(--font-size-regular)"
                        >${e.typeDisplay}</span
                      >
                      ${e.finalKeyValue?z`
                            <span class="blue-text">
                              ${e.finalKeyValue?"Key Applied":""}
                            </span>
                            <button
                              class="m-btn thin-border small"
                              part="btn btn-outline"
                              @click=${()=>{eG.call(this,e.securitySchemeId)}}
                            >
                              REMOVE
                            </button>
                          `:""}
                    </div>
                    ${e.description?z` <div class="m-markdown">
                          ${SW(Je(e.description||""))}
                        </div>`:""}
                    ${"apikey"===e.type.toLowerCase()||"http"===e.type.toLowerCase()&&"bearer"===e.scheme.toLowerCase()?z` <div style="margin-bottom:5px">
                            ${"apikey"===e.type.toLowerCase()?z`Send <code>${e.name}</code> in
                                  <code>${e.in}</code>`:z`Send <code>Authorization</code> in
                                  <code>header</code> containing the word
                                  <code>Bearer</code> followed by a space and a
                                  Token String.`}
                          </div>
                          <div style="max-height:28px;">
                            ${"cookie"!==e.in?z` <input
                                    type="text"
                                    value="${e.value}"
                                    class="${e.type} ${e.securitySchemeId} api-key-input"
                                    placeholder="api-token"
                                    spellcheck="false"
                                  />
                                  <button
                                    class="m-btn thin-border"
                                    style="margin-left:5px;"
                                    part="btn btn-outline"
                                    @click="${t=>{JW.call(this,e.securitySchemeId,t)}}"
                                  >
                                    ${e.finalKeyValue?"UPDATE":"SET"}
                                  </button>`:z`<span
                                  class="gray-text"
                                  style="font-size::var(--font-size-small)"
                                >
                                  cookies cannot be set from here</span
                                >`}
                          </div>`:""}
                    ${"http"===e.type.toLowerCase()&&"basic"===e.scheme.toLowerCase()?z` <div style="margin-bottom:5px">
                            Send <code>Authorization</code> in
                            <code>header</code> containing the word
                            <code>Basic</code> followed by a space and a base64
                            encoded string of <code>username:password</code>.
                          </div>
                          <div>
                            <input
                              type="text"
                              value="${e.user}"
                              placeholder="username"
                              spellcheck="false"
                              class="${e.type} ${e.securitySchemeId} api-key-user"
                              style="width:100px"
                            />
                            <input
                              type="password"
                              value="${e.password}"
                              placeholder="password"
                              spellcheck="false"
                              class="${e.type} ${e.securitySchemeId} api-key-password"
                              style="width:100px; margin:0 5px;"
                            />
                            <button
                              class="m-btn thin-border"
                              @click="${t=>{JW.call(this,e.securitySchemeId,t)}}"
                              part="btn btn-outline"
                            >
                              ${e.finalKeyValue?"UPDATE":"SET"}
                            </button>
                          </div>`:""}
                  </td>
                </tr>
                ${"oauth2"===e.type.toLowerCase()?z`
                      <tr>
                        <td style="border:none; padding-left:48px">
                          ${Object.keys(e.flows).map((t=>QW.call(this,t,e.flows[t]["x-client-id"]||e["x-client-id"]||"",e.flows[t]["x-client-secret"]||e["x-client-secret"]||"",e.securitySchemeId,e.flows[t],e.flows[t]["x-default-scopes"]||e["x-default-scopes"],e.flows[t]["x-receive-token-in"]||e["x-receive-token-in"],e.flows[t]["x-receive-token-in-options"]||e["x-receive-token-in-options"])))}
                        </td>
                      </tr>
                    `:""}
              `))}
          </table>`:""}
      <slot name="auth"></slot>
    </section>
  `:void 0}function rG(e){if(this.resolvedSpec.securitySchemes&&e){const t=[];return Array.isArray(e)?0===e.length?"":(e.forEach((e=>{const r=[],n=[];0===Object.keys(e).length?t.push({securityTypes:"None",securityDefs:[]}):(Object.keys(e).forEach((t=>{let s="";const i=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===t));e[t]&&Array.isArray(e[t])&&(s=e[t].join(", ")),i&&(n.push(i.typeDisplay),r.push({...i,scopes:s}))})),t.push({securityTypes:n.length>1?`${n[0]} + ${n.length-1} more`:n[0],securityDefs:r}))})),z`<div
      style="position:absolute; top:3px; right:2px; font-size:var(--font-size-small); line-height: 1.5;"
    >
      <div
        style="position:relative; display:flex; min-width:350px; max-width:700px; justify-content: flex-end;"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="none"
          style="stroke:var(--fg3)"
        >
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
        </svg>
        ${t.map(((e,t)=>z`
            ${e.securityTypes?z`
                  ${0!==t?z`<div style="padding:3px 4px;">OR</div>`:""}
                  <div class="tooltip">
                    <div
                      style="padding:2px 4px; white-space:nowrap; text-overflow:ellipsis;max-width:150px; overflow:hidden;"
                    >
                      ${"true"===this.updateRoute&&"true"===this.allowAuthentication?z`<a
                            part="anchor anchor-operation-security"
                            href="#auth"
                          >
                            ${e.securityTypes}
                          </a>`:z`${e.securityTypes}`}
                    </div>
                    <div
                      class="tooltip-text"
                      style="position:absolute; color: var(--fg); top:26px; right:0; border:1px solid var(--border-color);padding:2px 4px; display:block;"
                    >
                      ${e.securityDefs.length>1?z`<div>Requires <b>all</b> of the following</div>`:""}
                      <div style="padding-left: 8px">
                        ${e.securityDefs.map(((t,r)=>{const n=z`${""!==t.scopes?z` <div>
                                  <b>Required scopes:</b>
                                  <br />
                                  <div style="margin-left:8px">
                                    ${t.scopes.split(",").map(((e,t)=>z`${0===t?"":"┃"}<span
                                              >${e}</span
                                            >`))}
                                  </div>
                                </div>`:""}`;return z` ${"oauth2"===t.type?z` <div>
                                  ${e.securityDefs.length>1?z`<b>${r+1}.</b> &nbsp;`:"Needs"}
                                  OAuth Token
                                  <span
                                    style="font-family:var(--font-mono); color:var(--primary-color);"
                                    >${t.securitySchemeId}</span
                                  >
                                  in <b>Authorization header</b>
                                  ${n}
                                </div>`:"http"===t.type?z` <div>
                                    ${e.securityDefs.length>1?z`<b>${r+1}.</b> &nbsp;`:z`Requires`}
                                    ${"basic"===t.scheme?"Base 64 encoded username:password":"Bearer Token"}
                                    in <b>Authorization header</b>
                                    ${n}
                                  </div>`:z` <div>
                                    ${e.securityDefs.length>1?z`<b>${r+1}.</b> &nbsp;`:z`Requires`}
                                    Token in
                                    <b
                                      >${t.name}
                                      ${t.in}</b
                                    >
                                    ${n}
                                  </div>`}`}))}
                      </div>
                    </div>
                  </div>
                `:""}
          `))}
      </div>
    </div> `):""}return""}function nG(e){return z`
  <section class="table-title" style="margin-top:24px;">CODE SAMPLES</div>
  <div class="tab-panel col"
    @click="${e=>{if(!e.target.classList.contains("tab-btn"))return;const t=e.target.dataset.tab,r=[...e.currentTarget.querySelectorAll(".tab-btn")],n=[...e.currentTarget.querySelectorAll(".tab-content")];r.forEach((e=>e.classList[e.dataset.tab===t?"add":"remove"]("active"))),n.forEach((e=>{e.style.display=e.dataset.tab===t?"block":"none"}))}}">
    <div class="tab-buttons row" style="width:100; overflow">
      ${e.map(((e,t)=>z`<button class="tab-btn ${0===t?"active":""}" data-tab="${e.lang}${t}">${e.label||e.lang}</button>`))}
    </div>
    ${e.map(((e,t)=>{var r,n,s;return z` <div
          class="tab-content m-markdown"
          style="display:${0===t?"block":"none"}"
          data-tab="${e.lang}${t}"
        >
          <button
            class="toolbar-btn"
            style="position:absolute; top:12px; right:8px"
            @click="${t=>{Pt(e.source,t)}}"
          >
            Copy
          </button>
          <pre><code class="language">${mt().languages[null===(r=e.lang)||void 0===r?void 0:r.toLowerCase()]?SW(mt().highlight(e.source,mt().languages[null===(n=e.lang)||void 0===n?void 0:n.toLowerCase()],null===(s=e.lang)||void 0===s?void 0:s.toLowerCase())):e.source}</code></pre>
        </div>`}))}
  </div>  
  </section>`}function sG(e){return z`
    <div class="req-res-title" style="margin-top:12px">CALLBACKS</div>
    ${Object.entries(e).map((e=>z`
        <div
          class="tiny-title"
          style="padding: 12px; border:1px solid var(--light-border-color)"
        >
          ${e[0]}
          ${Object.entries(e[1]).map((e=>z`
              <div
                class="mono-font small-font-size"
                style="display:flex; margin-left:16px;"
              >
                <div style="width:100%">
                  ${Object.entries(e[1]).map((t=>{var r,n,s;return z`
                      <div>
                        <div style="margin-top:12px;">
                          <div
                            class="method method-fg ${t[0]}"
                            style="width:70px; border:none; margin:0; padding:0; line-height:20px; vertical-align: baseline;text-align:left"
                          >
                            <span style="font-size:20px;"> &#x2944; </span>
                            ${t[0]}
                          </div>
                          <span
                            style="line-height:20px; vertical-align: baseline;"
                            >${e[0]}
                          </span>
                        </div>
                        <div class="expanded-req-resp-container">
                          <api-request
                            class="${this.renderStyle}-mode callback"
                            style="width:100%;"
                            callback="true"
                            method="${t[0]||""}"
                            ,
                            path="${e[0]||""}"
                            .parameters="${(null===(r=t[1])||void 0===r?void 0:r.parameters)||""}"
                            .request_body="${(null===(n=t[1])||void 0===n?void 0:n.requestBody)||""}"
                            fill-request-fields-with-example="${this.fillRequestFieldsWithExample}"
                            allow-try="false"
                            render-style="${this.renderStyle}"
                            schema-style="${this.schemaStyle}"
                            active-schema-tab="${this.defaultSchemaTab}"
                            schema-expand-level="${this.schemaExpandLevel}"
                            schema-description-expanded="${this.schemaDescriptionExpanded}"
                            allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
                            schema-hide-read-only="false"
                            schema-hide-write-only="${"never"===this.schemaHideWriteOnly?"false":"true"}"
                            fetch-credentials="${this.fetchCredentials}"
                            exportparts="wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                        file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                        anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                          >
                          </api-request>

                          <api-response
                            style="width:100%;"
                            class="${this.renderStyle}-mode"
                            callback="true"
                            .responses="${null===(s=t[1])||void 0===s?void 0:s.responses}"
                            render-style="${this.renderStyle}"
                            schema-style="${this.schemaStyle}"
                            active-schema-tab="${this.defaultSchemaTab}"
                            schema-expand-level="${this.schemaExpandLevel}"
                            schema-description-expanded="${this.schemaDescriptionExpanded}"
                            allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
                            schema-hide-read-only="${"never"===this.schemaHideReadOnly?"false":"true"}"
                            schema-hide-write-only="false"
                            exportparts="btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
                      schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                          >
                          </api-response>
                        </div>
                      </div>
                    `}))}
                </div>
              </div>
            `))}
        </div>
      `))}
  `}const iG={},oG=xW(class extends wW{constructor(){super(...arguments),this.st=iG}render(e,t){return t()}update(e,[t,r]){if(Array.isArray(t)){if(Array.isArray(this.st)&&this.st.length===t.length&&t.every(((e,t)=>e===this.st[t])))return H}else if(this.st===t)return H;return this.st=Array.isArray(t)?Array.from(t):t,this.render(t,r)}}),aG=xW(class extends wW{constructor(e){if(super(e),e.type!==vW&&e.type!==yW&&e.type!==bW)throw Error("The `live` directive is not allowed on child or event bindings");if(!kW(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===H||t===V)return t;const r=e.element,n=e.name;if(e.type===vW){if(t===r[n])return H}else if(e.type===bW){if(!!t===r.hasAttribute(n))return H}else if(e.type===yW&&r.getAttribute(n)===t+"")return H;return((e,t=OW)=>{e._$AH=t})(e),t}});var lG=r(131),cG=r.n(lG);const pG=c`
  .border-top {
    border-top: 1px solid var(--border-color);
  }
  .border {
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
  }
  .light-border {
    border: 1px solid var(--light-border-color);
    border-radius: var(--border-radius);
  }
  .pad-8-16 {
    padding: 8px 16px;
  }
  .pad-top-8 {
    padding-top: 8px;
  }
  .mar-top-8 {
    margin-top: 8px;
  }
`;function uG(e){if(void 0===e)return"";if(null===e)return"null";if(""===e)return"∅";if("boolean"==typeof e||"number"==typeof e)return`${e}`;if(Array.isArray(e))return e.map((e=>null===e?"null":""===e?"∅":e.toString().replace(/^ +| +$/g,(e=>"●".repeat(e.length)))||"")).join(", ");if("object"==typeof e){const t=Object.keys(e);return`{ ${t[0]}:${e[t[0]]}${t.length>1?",":""} ... }`}return e.toString().replace(/^ +| +$/g,(e=>"●".repeat(e.length)))||""}function dG(e){if(!e)return;let t="",r="";if(e.$ref){const r=e.$ref.lastIndexOf("/");t=`{recursive: ${e.$ref.substring(r+1)}} `}else e.type?(t=Array.isArray(e.type)?e.type.join(2===e.length?" or ":"┃"):e.type,(e.format||e.enum||e.const)&&(t=t.replace("string",e.enum?"enum":e.const?"const":e.format)),e.nullable&&(t+="┃null")):t=e.const?"const":0===Object.keys(e).length?"any":"{missing-type-info}";const n={type:t,format:e.format||"",pattern:e.pattern&&!e.enum?e.pattern:"",readOrWriteOnly:e.readOnly?"🆁":e.writeOnly?"🆆":"",deprecated:e.deprecated?"❌":"",examples:e.examples||e.example,default:uG(e.default),description:e.description||"",constrain:"",allowedValues:"",arrayType:"",html:""};if("{recursive}"===n.type?n.description=e.$ref.substring(e.$ref.lastIndexOf("/")+1):"{missing-type-info}"!==n.type&&"any"!==n.type||(n.description=n.description||""),n.allowedValues=function(e){return e.const?e.const:Array.isArray(e.enum)?"x-ms-enum"in e?`| Name | Value | Description |\n| ---- | ----- | ----------- |\n${e["x-ms-enum"].values.map((e=>`| ${e.name} | ${uG(e.value)} | ${e.description} |`)).join("\n")}`:e.enum.map((e=>uG(e))).join("┃"):""}(e),"array"===t&&e.items){var s,i;const t=null===(s=e.items)||void 0===s?void 0:s.type,r=uG(e.items.default);n.arrayType=`${e.type} of ${Array.isArray(t)?t.join(""):t}`,n.default=r,n.allowedValues=e.items.const?e.const:Array.isArray(null===(i=e.items)||void 0===i?void 0:i.enum)?e.items.enum.map((e=>uG(e))).join("┃"):""}return t.match(/integer|number/g)&&(void 0===e.minimum&&void 0===e.exclusiveMinimum||(r+=void 0!==e.minimum?`Min ${e.minimum}`:`More than ${e.exclusiveMinimum}`),void 0===e.maximum&&void 0===e.exclusiveMaximum||(r+=void 0!==e.maximum?`${r?"┃":""}Max ${e.maximum}`:`${r?"┃":""}Less than ${e.exclusiveMaximum}`),void 0!==e.multipleOf&&(r+=`${r?"┃":""} multiple of ${e.multipleOf}`)),t.match(/string/g)&&(void 0!==e.minLength&&void 0!==e.maxLength?r+=`${r?"┃":""}${e.minLength} to ${e.maxLength} chars`:void 0!==e.minLength?r+=`${r?"┃":""}Min ${e.minLength} chars`:void 0!==e.maxLength&&(r+=`Max ${r?"┃":""}${e.maxLength} chars`)),n.constrain=r,n.html=`${n.type}~|~${n.readOrWriteOnly}~|~${n.constrain}~|~${n.default}~|~${n.allowedValues}~|~${n.pattern}~|~${n.description}~|~${e.title||""}~|~${n.deprecated?"deprecated":""}`,n}function hG(e){return"boolean"==typeof e||"number"==typeof e?{Example:{value:`${e}`}}:""===e?{Example:{value:""}}:e?{Example:{value:e}}:e}function fG(e,t="string"){if(!e)return{exampleVal:"",exampleList:[]};if(e.constructor===Object){const t=Object.values(e).filter((e=>!1!==e["x-example-show-value"])).map((e=>({value:"boolean"==typeof e.value||"number"==typeof e.value?`${e.value}`:e.value||"",printableValue:uG(e.value),summary:e.summary||"",description:e.description||""})));return{exampleVal:t.length>0?t[0].value:"",exampleList:t}}if(Array.isArray(e)||(e=e?[e]:[]),0===e.length)return{exampleVal:"",exampleList:[]};if("array"===t){const[t]=e,r=e.map((e=>({value:e,printableValue:uG(e)})));return{exampleVal:t,exampleList:r}}const r=e[0].toString(),n=e.map((e=>({value:e.toString(),printableValue:uG(e)})));return{exampleVal:r,exampleList:n}}function mG(e){const t=e.examples?e.examples[0]:null===e.example?null:e.example||void 0;if(""===t)return"";if(null===t)return null;if(0===t)return 0;if(!1===t)return!1;if(t instanceof Date)switch(e.format.toLowerCase()){case"date":return t.toISOString().split("T")[0];case"time":return t.toISOString().split("T")[1];default:return t.toISOString()}if(t)return t;if(0===Object.keys(e).length)return null;if(e.$ref)return e.$ref;if(!1===e.const||0===e.const||null===e.const||""===e.const)return e.const;if(e.const)return e.const;const r=Array.isArray(e.type)?e.type[0]:e.type;if(!r)return"?";if(r.match(/^integer|^number/g)){const t=Number.isNaN(Number(e.multipleOf))?void 0:Number(e.multipleOf),n=Number.isNaN(Number(e.maximum))?void 0:Number(e.maximum),s=Number.isNaN(Number(e.minimum))?Number.isNaN(Number(e.exclusiveMinimum))?n||0:Number(e.exclusiveMinimum)+(r.startsWith("integer")?1:.001):Number(e.minimum);return t?t>=s?t:s%t==0?s:Math.ceil(s/t)*t:s}if(r.match(/^boolean/g))return!1;if(r.match(/^null/g))return null;if(r.match(/^string/g)){if(e.enum)return e.enum[0];if(e.const)return e.const;if(e.pattern)return e.pattern;if(!e.format){const t=Number.isNaN(e.minLength)?void 0:Number(e.minLength),r=Number.isNaN(e.maxLength)?void 0:Number(e.maxLength),n=t||(r>6?6:r||void 0);return n?"A".repeat(n):"string"}{const t=`${Date.now().toString(16)}${Math.random().toString(16)}0`.repeat(16);switch(e.format.toLowerCase()){case"url":case"uri":return"http://example.com";case"date":return new Date(0).toISOString().split("T")[0];case"time":return new Date(0).toISOString().split("T")[1];case"date-time":return new Date(0).toISOString();case"duration":return"P3Y6M4DT12H30M5S";case"email":case"idn-email":return"user@example.com";case"hostname":case"idn-hostname":return"www.example.com";case"ipv4":return"198.51.100.42";case"ipv6":return"2001:0db8:5b96:0000:0000:426f:8e17:642a";case"uuid":return[t.substr(0,8),t.substr(8,4),`4000-8${t.substr(13,3)}`,t.substr(16,12)].join("-");case"byte":return"ZXhhbXBsZQ==";default:return""}}}return"?"}function yG(e,t=1){const r="  ".repeat(t);let n="";if(1===t&&"object"!=typeof e)return`\n${r}${e.toString()}`;for(const s in e){const i=e[s]["::XML_TAG"]||s;let o="";o=Array.isArray(e[s])?i[0]["::XML_TAG"]||`${s}`:i,s.startsWith("::")||(n=Array.isArray(e[s])||"object"==typeof e[s]?`${n}\n${r}<${o}>${yG(e[s],t+1)}\n${r}</${o}>`:`${n}\n${r}<${o}>${e[s].toString()}</${o}>`)}return n}function gG(e,t){var r,n;if("object"==typeof t&&null!==t){var s,i;if(e.title&&(t["::TITLE"]=e.title),e.description&&(t["::DESCRIPTION"]=e.description),null!==(r=e.xml)&&void 0!==r&&r.name)t["::XML_TAG"]=null===(s=e.xml)||void 0===s?void 0:s.name;if(null!==(n=e.xml)&&void 0!==n&&n.wrapped)t["::XML_WRAP"]=null===(i=e.xml)||void 0===i?void 0:i.wrapped.toString()}}function vG(e){if("object"==typeof e&&null!==e){delete e["::TITLE"],delete e["::DESCRIPTION"],delete e["::XML_TAG"],delete e["::XML_WRAP"];for(const t in e)vG(e[t])}}function bG(e,t,r){for(const n in t)t[n][r]=e}function xG(e,t,r){let n=0;const s={};for(const i in e){for(const o in r)if(s[`example-${n}`]={...e[i]},s[`example-${n}`][t]=r[o],n++,n>=10)break;if(n>=10)break}return s}function wG(e,t={}){let r={};if(e){if(e.allOf){var n,s;const i={};if(!(1!==e.allOf.length||null!==(n=e.allOf[0])&&void 0!==n&&n.properties||null!==(s=e.allOf[0])&&void 0!==s&&s.items)){if(e.allOf[0].$ref)return"{  }";if(e.allOf[0].readOnly&&t.includeReadOnly){return mG(e.allOf[0])}return}e.allOf.forEach((e=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const r=wG(e,t);Object.assign(i,r)}else if("array"===e.type||e.items){const r=[wG(e,t)];Object.assign(i,r)}else{if(!e.type)return"";{const t=`prop${Object.keys(i).length}`;i[t]=mG(e)}}})),r=i}else if(e.oneOf){const n={};if(e.properties)for(const r in e.properties){var i;e.properties[r].properties||null!==(i=e.properties[r].properties)&&void 0!==i&&i.items?n[r]=wG(e.properties[r],t):n[r]=mG(e.properties[r])}if(e.oneOf.length>0){let s=0;for(const i in e.oneOf){const o=wG(e.oneOf[i],t);for(const t in o){let a;if(Object.keys(n).length>0){if(null===o[t]||"object"!=typeof o[t])continue;a=Object.assign(o[t],n)}else a=o[t];r[`example-${s}`]=a,gG(e.oneOf[i],r[`example-${s}`]),s++}}}}else if(e.anyOf){let n;if("object"===e.type||e.properties){n={"example-0":{}};for(const r in e.properties){if(e.example){n=e;break}e.properties[r].deprecated&&!t.includeDeprecated||(e.properties[r].readOnly&&!t.includeReadOnly||e.properties[r].writeOnly&&!t.includeWriteOnly||(n=xG(n,r,wG(e.properties[r],t))))}}let s=0;for(const i in e.anyOf){const o=wG(e.anyOf[i],t);for(const t in o){if(void 0!==n)for(const e in n)r[`example-${s}`]={...n[e],...o[t]};else r[`example-${s}`]=o[t];gG(e.anyOf[i],r[`example-${s}`]),s++}}}else if("object"===e.type||e.properties)if(r["example-0"]={},gG(e,r["example-0"]),e.example)r["example-0"]=e.example;else for(const n in e.properties){var o,a,l,c,p,u,d;if(null===(o=e.properties[n])||void 0===o||!o.deprecated||t.includeDeprecated)if(null===(a=e.properties[n])||void 0===a||!a.readOnly||t.includeReadOnly)if(null===(l=e.properties[n])||void 0===l||!l.writeOnly||t.includeWriteOnly)if("array"===(null===(c=e.properties[n])||void 0===c?void 0:c.type)||null!==(p=e.properties[n])&&void 0!==p&&p.items)if(e.properties[n].example)bG(e.properties[n].example,r,n);else if(null!==(u=e.properties[n])&&void 0!==u&&null!==(d=u.items)&&void 0!==d&&d.example)bG([e.properties[n].items.example],r,n);else{const s=wG(e.properties[n].items,t);if(t.useXmlTagForProp){var h,f;const t=(null===(h=e.properties[n].xml)||void 0===h?void 0:h.name)||n;if(null!==(f=e.properties[n].xml)&&void 0!==f&&f.wrapped){r=xG(r,t,JSON.parse(`{ "${t}" : { "${t}" : ${JSON.stringify(s["example-0"])} } }`))}else r=xG(r,t,s)}else{const e=[];for(const t in s)e[t]=[s[t]];r=xG(r,n,e)}}else r=xG(r,n,wG(e.properties[n],t))}else{if("array"!==e.type&&!e.items)return{"example-0":mG(e)};var m;if(e.items||e.example)if(e.example)r["example-0"]=e.example;else if(null!==(m=e.items)&&void 0!==m&&m.example)r["example-0"]=[e.items.example];else{const n=wG(e.items,t);let s=0;for(const t in n)r[`example-${s}`]=[n[t]],gG(e.items,r[`example-${s}`]),s++}else r["example-0"]=[]}return r}}function $G(e,t=0){var r;let n=(e.description||e.title)&&(e.minItems||e.maxItems)?'<span class="descr-expand-toggle">➔</span>':"";if(e.title?n=e.description?`${n} <b>${e.title}:</b> ${e.description}<br/>`:`${n} ${e.title}<br/>`:e.description&&(n=`${n} ${e.description}<br/>`),e.minItems&&(n=`${n} <b>Min Items:</b> ${e.minItems}`),e.maxItems&&(n=`${n} <b>Max Items:</b> ${e.maxItems}`),t>0&&null!==(r=e.items)&&void 0!==r&&r.description){let t="";e.items.minProperties&&(t=`<b>Min Properties:</b> ${e.items.minProperties}`),e.items.maxProperties&&(t=`${t} <b>Max Properties:</b> ${e.items.maxProperties}`),n=`${n} ⮕ ${t} [ ${e.items.description} ] `}return n}function SG(e,t,r=0,n=""){if(e){if(e.allOf){const n={};if(1===e.allOf.length&&!e.allOf[0].properties&&!e.allOf[0].items){return`${dG(e.allOf[0]).html}`}e.allOf.map(((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const s=(e.anyOf||e.oneOf)&&t>0?t:"",i=SG(e,{},r+1,s);Object.assign(n,i)}else if("array"===e.type||e.items){const t=SG(e,{},r+1);Object.assign(n,t)}else{if(!e.type)return"";{const t=`prop${Object.keys(n).length}`,r=dG(e);n[t]=`${r.html}`}}})),t=n}else if(e.anyOf||e.oneOf){if(t["::description"]=e.description||"","object"===e.type||e.properties){t["::description"]=e.description||"",t["::type"]="object";for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=SG(e.properties[n],{},r+1):t[n]=SG(e.properties[n],{},r+1)}const s={},i=e.anyOf?"anyOf":"oneOf";e[i].forEach(((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const r=SG(e,{});s[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]=r,s[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]["::readwrite"]="",s["::type"]="xxx-of-option"}else if("array"===e.type||e.items){const r=SG(e,{});s[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]=r,s[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]["::readwrite"]="",s["::type"]="xxx-of-array"}else{const r=`::OPTION~${t+1}${e.title?`~${e.title}`:""}`;s[r]=`${dG(e).html}`,s["::type"]="xxx-of-option"}})),t[e.anyOf?`::ANY~OF ${n}`:`::ONE~OF ${n}`]=s,t["::type"]="object"}else if(Array.isArray(e.type)){const n=JSON.parse(JSON.stringify(e)),o=[],a=[];let l;var s;if(n.type.forEach((e=>{var t,r;e.match(/integer|number|string|null|boolean/g)?o.push(e):"array"===e&&"string"==typeof(null===(t=n.items)||void 0===t?void 0:t.type)&&null!==(r=n.items)&&void 0!==r&&r.type.match(/integer|number|string|null|boolean/g)?"string"===n.items.type&&n.items.format?o.push(`[${n.items.format}]`):o.push(`[${n.items.type}]`):a.push(e)})),o.length>0)if(n.type=o.join(2===o.length?" or ":"┃"),l=dG(n),0===a.length)return`${(null===(s=l)||void 0===s?void 0:s.html)||""}`;if(a.length>0){var i;t["::type"]="object";const s={"::type":"xxx-of-option"};a.forEach(((t,i)=>{if("null"===t)s[`::OPTION~${i+1}`]="NULL~|~~|~~|~~|~~|~~|~~|~~|~";else if("integer, number, string, boolean,".includes(`${t},`)){n.type=Array.isArray(t)?t.join("┃"):t;const e=dG(n);s[`::OPTION~${i+1}`]=e.html}else if("object"===t){const t={"::title":e.title||"","::description":e.description||"","::type":"object","::deprecated":e.deprecated||!1};for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=SG(e.properties[n],{},r+1):t[n]=SG(e.properties[n],{},r+1);s[`::OPTION~${i+1}`]=t}else"array"===t&&(s[`::OPTION~${i+1}`]={"::title":e.title||"","::description":e.description||"","::type":"array","::props":SG(e.items,{},r+1)})})),s[`::OPTION~${a.length+1}`]=(null===(i=l)||void 0===i?void 0:i.html)||"",t["::ONE~OF"]=s}}else if("object"===e.type||e.properties){t["::title"]=e.title||"",t["::description"]=$G(e,r),t["::type"]="object",(Array.isArray(e.type)&&e.type.includes("null")||e.nullable)&&(t["::dataTypeLabel"]="object or null",t["::nullable"]=!0),t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"";for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=SG(e.properties[n],{},r+1):t[n]=SG(e.properties[n],{},r+1);for(const n in e.patternProperties)t[`[pattern: ${n}]`]=SG(e.patternProperties[n],t,r+1);e.additionalProperties&&(t["[any-key]"]=SG(e.additionalProperties,{}))}else{if("array"!==e.type&&!e.items){const t=dG(e);return null!=t&&t.html?`${t.html}`:""}var o;t["::title"]=e.title||"",t["::description"]=$G(e,r),t["::type"]="array",(Array.isArray(e.type)&&e.type.includes("null")||e.nullable)&&(t["::dataTypeLabel"]="array or null",t["::nullable"]=!0),t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"",null!==(o=e.items)&&void 0!==o&&o.items&&(t["::array-type"]=e.items.items.type),t["::props"]=SG(e.items,{},r+1)}return t}}function EG(e,t,r="",n="",s=!0,i=!0,o="json",a=!1){const l=[];if(r)for(const e in r){let n="",s="json";if(null!=t&&t.toLowerCase().includes("json")){if("text"===o)n="string"==typeof r[e].value?r[e].value:JSON.stringify(r[e].value,void 0,2),s="text";else if(n=r[e].value,"string"==typeof r[e].value)try{const t=r[e].value;n=JSON.parse(t),s="json"}catch(t){s="text",n=r[e].value}}else n=r[e].value,s="text";l.push({exampleId:e,exampleSummary:r[e].summary||e,exampleDescription:r[e].description||"",exampleType:t,exampleValue:n,exampleFormat:s})}else if(n){let e="",r="json";if(null!=t&&t.toLowerCase().includes("json")){if("text"===o)e="string"==typeof n?n:JSON.stringify(n,void 0,2),r="text";else if("object"==typeof n)e=n,r="json";else if("string"==typeof n)try{e=JSON.parse(n),r="json"}catch(t){r="text",e=n}}else e=n,r="text";l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e,exampleFormat:r})}if(0===l.length||!0===a)if(e)if(e.example)l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e.example,exampleFormat:null!=t&&t.toLowerCase().includes("json")&&"object"==typeof e.example?"json":"text"});else if(null!=t&&t.toLowerCase().includes("json")||null!=t&&t.toLowerCase().includes("text")||null!=t&&t.toLowerCase().includes("*/*")||null!=t&&t.toLowerCase().includes("xml")){let r="",n="",a="",u="";var c,p;if(null!=t&&t.toLowerCase().includes("xml"))r=null!==(c=e.xml)&&void 0!==c&&c.name?`<${e.xml.name} ${e.xml.namespace?`xmlns="${e.xml.namespace}"`:""}>`:"<root>",n=null!==(p=e.xml)&&void 0!==p&&p.name?`</${e.xml.name}>`:"</root>",a="text";else a=o;const d=wG(e,{includeReadOnly:s,includeWriteOnly:i,deprecated:!0,useXmlTagForProp:null==t?void 0:t.toLowerCase().includes("xml")});let h=0;for(const e in d){if(!d[e])continue;const s=d[e]["::TITLE"]||"Example "+ ++h,i=d[e]["::DESCRIPTION"]||"";null!=t&&t.toLowerCase().includes("xml")?u=`<?xml version="1.0" encoding="UTF-8"?>\n${r}${yG(d[e],1)}\n${n}`:(vG(d[e]),u="text"===o?JSON.stringify(d[e],null,2):d[e]),l.push({exampleId:e,exampleSummary:s,exampleDescription:i,exampleType:t,exampleFormat:a,exampleValue:u})}}else null!=t&&t.toLowerCase().includes("jose")?l.push({exampleId:"Example",exampleSummary:"Base64 Encoded",exampleDescription:"",exampleType:t,exampleValue:e.pattern||"bXJpbg==",exampleFormat:"text"}):l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});else l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});return l}function kG(e){return"application/json"===e?"json":"application/xml"===e?"xml":null}function OG(e){if(e.schema)return[e.schema,null,null];if(e.content)for(const t of Object.keys(e.content))if(e.content[t].schema)return[e.content[t].schema,kG(t),e.content[t]];return[null,null,null]}customElements.define("json-tree",class extends ce{static get properties(){return{data:{type:Object},renderStyle:{type:String,attribute:"render-style"}}}static get styles(){return[yt,pG,gt,c`
        :host {
          display: flex;
        }
        :where(button, input[type='checkbox'], [tabindex='0']):focus-visible {
          box-shadow: var(--focus-shadow);
        }
        :where(
            input[type='text'],
            input[type='password'],
            select,
            textarea
          ):focus-visible {
          border-color: var(--primary-color);
        }
        .json-tree {
          position: relative;
          font-family: var(--font-mono);
          font-size: var(--font-size-small);
          display: inline-block;
          overflow: hidden;
          word-break: break-all;
          flex: 1;
          line-height: calc(var(--font-size-small) + 6px);
          min-height: 40px;
          direction: ltr;
          text-align: left;
        }

        .open-bracket {
          display: inline-block;
          padding: 0 20px 0 0;
          cursor: pointer;
          border: 1px solid transparent;
          border-radius: 3px;
        }
        .close-bracket {
          border: 1px solid transparent;
          border-radius: 3px;
          display: inline-block;
        }
        .open-bracket:hover {
          color: var(--primary-color);
          background-color: var(--hover-color);
          border: 1px solid var(--border-color);
        }
        .open-bracket.expanded:hover ~ .inside-bracket {
          border-left: 1px solid var(--fg3);
        }
        .open-bracket.expanded:hover ~ .close-bracket {
          color: var(--primary-color);
        }
        .inside-bracket {
          padding-left: 12px;
          overflow: hidden;
          border-left: 1px dotted var(--border-color);
        }
        .open-bracket.collapsed + .inside-bracket,
        .open-bracket.collapsed + .inside-bracket + .close-bracket {
          display: none;
        }

        .string {
          color: var(--green);
        }
        .number {
          color: var(--blue);
        }
        .null {
          color: var(--red);
        }
        .boolean {
          color: var(--purple);
        }
        .object {
          color: var(--fg);
        }
        .toolbar {
          position: absolute;
          top: 5px;
          right: 6px;
          display: flex;
          padding: 2px;
          align-items: center;
        }
      `,kt]}render(){return z`
      <div
        class="json-tree"
        @click="${e=>{e.target.classList.contains("btn-copy")?Pt(JSON.stringify(this.data,null,2),e):this.toggleExpand(e)}}"
      >
        <div class="toolbar">
          <button class="toolbar-btn btn-copy" part="btn btn-fill btn-copy">
            Copy
          </button>
        </div>
        ${this.generateTree(this.data,!0)}
      </div>
    `}generateTree(e,t=!1){if(null===e)return z`<div class="null" style="display:inline;">null</div>`;if("object"==typeof e&&e instanceof Date==!1){const r=Array.isArray(e)?"array":"pure_object";return 0===Object.keys(e).length?z`${Array.isArray(e)?"[ ],":"{ },"}`:z`
        <div
          class="open-bracket expanded ${"array"===r?"array":"object"}"
        >
          ${"array"===r?"[":"{"}
        </div>
        <div class="inside-bracket">
          ${Object.keys(e).map(((t,n,s)=>z` <div class="item">
                ${"pure_object"===r?z`"${t}":`:""}
                ${this.generateTree(e[t],n===s.length-1)}
              </div>`))}
        </div>
        <div class="close-bracket">
          ${"array"===r?"]":"}"}${t?"":","}
        </div>
      `}return"string"==typeof e||e instanceof Date?z`<span class="${typeof e}">"${e}"</span>${t?"":","}`:z`<span class="${typeof e}">${e}</span>${t?"":","}`}toggleExpand(e){const t=e.target;e.target.classList.contains("open-bracket")&&(t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array")?"[":"{"))}});const jG=c`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  .tr {
    display: flex;
    flex: none;
    width: 100%;
    box-sizing: content-box;
    border-bottom: 1px dotted transparent;
    transition: max-height 0.3s ease-out;
  }
  .td {
    display: block;
    flex: 0 0 auto;
  }
  .key {
    font-family: var(--font-mono);
    white-space: normal;
    word-break: break-all;
  }

  .collapsed-all-descr .key {
    overflow: hidden;
  }
  .expanded-all-descr .key-descr .descr-expand-toggle {
    display: none;
  }

  .key-descr .descr-expand-toggle {
    display: inline-block;
    user-select: none;
    color: var(--fg);
    cursor: pointer;
    transform: rotate(45deg);
    transition: transform 0.2s ease;
  }

  .expanded-descr .key-descr .descr-expand-toggle {
    transform: rotate(270deg);
  }

  .key-descr .descr-expand-toggle:hover {
    color: var(--primary-color);
  }

  .expanded-descr .more-content {
    display: none;
  }

  .key-descr {
    font-family: var(--font-regular);
    color: var(--light-fg);
    flex-shrink: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    display: none;
  }
  .expanded-descr .key-descr {
    max-height: auto;
    overflow: hidden;
    display: none;
  }

  .xxx-of-key {
    font-size: calc(var(--font-size-small) - 2px);
    font-weight: bold;
    background-color: var(--primary-color);
    color: var(--primary-color-invert);
    border-radius: 2px;
    line-height: calc(var(--font-size-small) + 6px);
    padding: 0px 5px;
    margin-bottom: 1px;
    display: inline-block;
  }

  .xxx-of-descr {
    font-family: var(--font-regular);
    color: var(--primary-color);
    font-size: calc(var(--font-size-small) - 1px);
    margin-left: 2px;
  }

  .stri,
  .string,
  .uri,
  .url,
  .byte,
  .bina,
  .date,
  .pass,
  .ipv4,
  .ipv4,
  .uuid,
  .emai,
  .host {
    color: var(--green);
  }
  .inte,
  .numb,
  .number,
  .int6,
  .int3,
  .floa,
  .doub,
  .deci .blue {
    color: var(--blue);
  }
  .null {
    color: var(--red);
  }
  .bool,
  .boolean {
    color: var(--orange);
  }
  .enum {
    color: var(--purple);
  }
  .cons {
    color: var(--purple);
  }
  .recu {
    color: var(--brown);
  }
  .toolbar {
    display: flex;
    width: 100%;
    padding: 2px 0;
    color: var(--primary-color);
  }
  .toolbar-item {
    cursor: pointer;
    padding: 5px 0;
    margin: 0 2px;
  }
  .schema-root-type {
    cursor: auto;
    color: var(--fg2);
    font-weight: bold;
    text-transform: uppercase;
  }
  .toolbar-item:first-of-type {
    margin: 0 2px 0 0;
  }

  @media only screen and (min-width: 500px) {
    .key-descr {
      display: block;
    }
    .expanded-descr .key-descr {
      display: block;
    }
  }
`;function AG(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}customElements.define("schema-tree",class extends ce{constructor(...e){super(...e),AG(this,"::deprecated",!1),AG(this,"::description",""),AG(this,"::readwrite",""),AG(this,"::title",""),AG(this,"::type","")}static get properties(){return{data:{type:Object},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[yt,jG,pG,c`
        .tree {
          font-size: var(--font-size-small);
          text-align: left;
          direction: ltr;
          line-height: calc(var(--font-size-small) + 6px);
        }
        .tree .tr:hover {
          background-color: var(--hover-color);
        }
        .collapsed-all-descr .tr:not(.expanded-descr) {
          overflow: hidden;
          max-height: calc(var(--font-size-small) + 8px);
        }
        .tree .key {
          max-width: 300px;
        }
        .key.deprecated .key-label {
          color: var(--red);
        }
        .tr.expanded:hover > .td.key > .open-bracket {
          color: var(--primary-color);
        }
        .tr.expanded:hover + .inside-bracket {
          border-left: 1px solid var(--fg3);
        }
        .tr.expanded:hover + .inside-bracket + .close-bracket {
          color: var(--primary-color);
        }
        .inside-bracket.xxx-of-option {
          border-left: 1px solid transparent;
        }
        .open-bracket {
          display: inline-block;
          padding: 0 20px 0 0;
          cursor: pointer;
          border: 1px solid transparent;
          border-radius: 3px;
        }
        .open-bracket:hover {
          color: var(--primary-color);
          background-color: var(--hover-color);
          border: 1px solid var(--border-color);
        }
        .close-bracket {
          display: inline-block;
          font-family: var(--font-mono);
        }
        .tr.collapsed + .inside-bracket,
        .tr.collapsed + .inside-bracket + .close-bracket {
          overflow: hidden;
          display: none;
        }
        .inside-bracket.object,
        .inside-bracket.array {
          border-left: 1px dotted var(--border-color);
        }
      `,kt]}render(){var e,t,r;return z`
      <div
        class="tree ${"true"===this.schemaDescriptionExpanded?"expanded-all-descr":"collapsed-all-descr"}"
        @click="${e=>this.handleAllEvents(e)}"
      >
        <div class="toolbar">
          <div
            class="toolbar-item schema-root-type ${(null===(e=this.data)||void 0===e?void 0:e["::type"])||""} "
          >
            ${(null===(t=this.data)||void 0===t?void 0:t["::type"])||""}
          </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?z` <div style="flex:1"></div>
                <div
                  part="schema-toolbar-item schema-multiline-toggle"
                  class="toolbar-item schema-multiline-toggle"
                >
                  ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
                </div>`:""}
        </div>
        <span part="schema-description" class="m-markdown">
          ${SW(Je((null===(r=this.data)||void 0===r?void 0:r["::description"])||""))}</span
        >
        ${this.data?z` ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"]||"")}`:z`<span class="mono-font" style="color:var(--red)">
              Schema not found
            </span>`}
      </div>
    `}generateTree(e,t="object",r="",n="",s="",i=0,o=0,a=""){var l;if("true"===this.schemaHideReadOnly){if("array"===t&&"readonly"===a)return;if("readonly"===(null==e?void 0:e["::readwrite"]))return}if("true"===this.schemaHideWriteOnly){if("array"===t&&"writeonly"===a)return;if("writeonly"===(null==e?void 0:e["::readwrite"]))return}if(!e)return z`<div class="null" style="display:inline;">
        <span class="key-label xxx-of-key">
          ${n.replace("::OPTION~","")}</span
        >
        ${"array"===t?z`<span class="mono-font"> [ ] </span>`:"object"===t?z`<span class="mono-font"> { } </span>`:z`<span class="mono-font"> schema undefined </span>`}
      </div>`;if(0===Object.keys(e).length)return z`<span class="key object">${n}:{ }</span>`;let c="",p="";if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))c=n.replace("::","").replace("~"," ");else if(n.startsWith("::OPTION")){const e=n.split("~");[,c,p]=e}else c=n;const u=400-12*o;let d="",h="";const f=null!==(l=e["::type"])&&void 0!==l&&l.startsWith("xxx-of")?i:i+1,m="xxx-of-option"===t||"xxx-of-option"===e["::type"]||n.startsWith("::OPTION")?o:o+1;if("object"===e["::type"])"array"===t?(d=i<this.schemaExpandLevel?z`<span class="open-bracket array-of-object"
            >[{</span
          >`:z`<span class="open-bracket array-of-object"
            >[{...}]</span
          >`,h="}]"):(d=i<this.schemaExpandLevel?z`<span class="open-bracket object"
            >${e["::nullable"]?"null┃":""}{</span
          >`:z`<span class="open-bracket object"
            >${e["::nullable"]?"null┃":""}{...}</span
          >`,h="}");else if("array"===e["::type"])if("array"===t){const e="object"!==r?r:"";d=i<this.schemaExpandLevel?z`<span
            class="open-bracket array-of-array"
            data-array-type="${e}"
            >[[ ${e}
          </span>`:z`<span
            class="open-bracket array-of-array"
            data-array-type="${e}"
            >[[...]]</span
          >`,h="]]"}else d=i<this.schemaExpandLevel?z`<span class="open-bracket array">[</span>`:z`<span class="open-bracket array">[...]</span>`,h="]";var y;if("object"==typeof e)return z`
        <div
          class="tr ${i<this.schemaExpandLevel||null!==(y=e["::type"])&&void 0!==y&&y.startsWith("xxx-of")?"expanded":"collapsed"} ${e["::type"]||"no-type-info"}${e["::nullable"]?" nullable":""}"
          title="${e["::deprecated"]?"Deprecated":""}"
        >
          <div
            class="td key ${e["::deprecated"]?"deprecated":""}"
            style="min-width:${u}px"
          >
            ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||n.startsWith("::OPTION")?z`<span class="key-label xxx-of-key"> ${c}</span
                  ><span class="xxx-of-descr">${p}</span>`:"::props"===c||"::ARRAY~OF"===c?"":i>0?z`<span
                      class="key-label"
                      title="${"readonly"===a?"Read-Only":"writeonly"===a?"Write-Only":""}"
                    >
                      ${e["::deprecated"]?"✗":""}
                      ${c.replace(/\*$/,"")}${c.endsWith("*")?z`<span style="color:var(--red)">*</span>`:""}${"readonly"===a?z` 🆁`:"writeonly"===a?z` 🆆`:a}:
                    </span>`:""}
            ${d}
          </div>
          <div class="td key-descr m-markdown-small">
            ${SW(Je(s||""))}
          </div>
        </div>
        <div
          class="inside-bracket ${e["::type"]||"no-type-info"}"
          style="padding-left:${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]?0:12}px;"
        >
          ${Array.isArray(e)&&e[0]?z`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",f,m,e[0]["::readwrite"])}`:z`
                ${Object.keys(e).map((t=>{var r;return z`
                    ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite","::dataTypeLabel","::nullable"].includes(t)?"array"===e[t]["::type"]||"object"===e[t]["::type"]?z`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],f,m,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`:"":z`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,(null===(r=e[t])||void 0===r?void 0:r["::description"])||"",f,m,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`}
                  `}))}
              `}
        </div>
        ${e["::type"]&&e["::type"].includes("xxx-of")?"":z`<div class="close-bracket">${h}</div>`}
      `;const[g,v,b,x,w,$,S,E,k]=e.split("~|~");if("🆁"===v&&"true"===this.schemaHideReadOnly)return;if("🆆"===v&&"true"===this.schemaHideWriteOnly)return;const O=g.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase(),j=""+(b||x||w||$?`<span class="descr-expand-toggle ${"true"===this.schemaDescriptionExpanded?"expanded-descr":""}">➔</span>`:"");let A="",P="";return"array"===t?"readonly"===a?(A="🆁",P="Read-Only"):"writeonly"===a&&(A="🆆",P="Write-Only"):"🆁"===v?(A="🆁",P="Read-Only"):"🆆"===v&&(A="🆆",P="Write-Only"),z`
      <div class="tr primitive" title="${k?"Deprecated":""}">
        <div
          class="td key ${k}"
          style="min-width:${u}px"
        >
          ${k?z`<span style="color:var(--red);">✗</span>`:""}
          ${c.endsWith("*")?z`<span class="key-label"
                  >${c.substring(0,c.length-1)}</span
                ><span style="color:var(--red);">*</span>:`:n.startsWith("::OPTION")?z`<span class="key-label xxx-of-key">${c}</span
                  ><span class="xxx-of-descr">${p}</span>`:z`<span class="key-label">${c}:</span>`}
          <span class="${O}" title="${P}">
            ${"array"===t?`[${g}]`:`${g}`}
            ${A}
          </span>
        </div>
        <div class="td key-descr">
          ${s||E||S?z`${z`<span class="m-markdown-small">
                ${SW(Je("array"===t||"enum"===t?`${j} ${s}`:E?`${j} <b>${E}:</b> ${S}`:`${j} ${S}`))}
              </span>`}`:""}
          ${b?z`<div
                style="display:inline-block; line-break:anywhere; margin-right:8px"
              >
                <span class="bold-text">Constraints: </span>${b}
              </div>`:""}
          ${x?z`<div
                style="display:inline-block; line-break:anywhere; margin-right:8px"
              >
                <span class="bold-text">Default: </span>${x}
              </div>`:""}
          ${w?z`<div
                style="display:inline-block; line-break:anywhere; margin-right:8px"
              >
                <span class="bold-text"
                  >${"const"===g?"Value":"Allowed"}: </span
                >${SW(Je(w))}
              </div>`:""}
          ${$?z`<div
                style="display:inline-block; line-break: anywhere; margin-right:8px"
              >
                <span class="bold-text">Pattern: </span>${$}
              </div>`:""}
        </div>
      </div>
    `}handleAllEvents(e){if(e.target.classList.contains("open-bracket"))this.toggleObjectExpand(e);else if(e.target.classList.contains("schema-multiline-toggle"))this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true";else if(e.target.classList.contains("descr-expand-toggle")){const t=e.target.closest(".tr");t&&(t.classList.toggle("expanded-descr"),t.style.maxHeight=t.scrollHeight)}}toggleObjectExpand(e){const t=e.target.closest(".tr"),r=t.classList.contains("nullable");t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{...}]":e.target.classList.contains("array-of-array")?"[[...]]":e.target.classList.contains("array")?"[...]":(r?"null┃":"")+"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{":e.target.classList.contains("array-of-array")?`[[ ${e.target.dataset.arrayType}`:e.target.classList.contains("object")?(r?"null┃":"")+"{":"[")}});customElements.define("tag-input",class extends ce{render(){let e="";return Array.isArray(this.value)&&(e=z`${this.value.filter((e=>"string"==typeof e&&""!==e.trim())).map((e=>z`<span class="tag">${e}</span>`))}`),z`
      <div class="tags">
        ${e}
        <input
          type="text"
          class="editor"
          @paste="${e=>this.afterPaste(e)}"
          @keydown="${this.afterKeyDown}"
          @blur="${this.onBlur}"
          placeholder="${this.placeholder||""}"
        />
      </div>
    `}static get properties(){return{placeholder:{type:String},value:{type:Array,attribute:"value"}}}attributeChangedCallback(e,t,r){"value"===e&&r&&t!==r&&(this.value=r.split(",").filter((e=>""!==e.trim()))),super.attributeChangedCallback(e,t,r)}afterPaste(e){const t=(e.clipboardData||window.clipboardData).getData("Text"),r=t?t.split(",").filter((e=>""!==e.trim())):"";r&&(Array.isArray(this.value)?this.value=[...this.value,...r]:this.value=r),e.preventDefault()}afterKeyDown(e){13===e.keyCode?(e.stopPropagation(),e.preventDefault(),e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")):8===e.keyCode&&0===e.target.value.length&&Array.isArray(this.value)&&this.value.length>0&&(this.value.splice(-1),this.value=[...this.value])}onBlur(e){e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")}static get styles(){return[c`
        .tags {
          display: flex;
          flex-wrap: wrap;
          outline: none;
          padding: 0;
          border-radius: var(--border-radius);
          border: 1px solid var(--border-color);
          cursor: text;
          overflow: hidden;
          background: var(--input-bg);
        }
        .tag,
        .editor {
          padding: 3px;
          margin: 2px;
        }
        .tag {
          border: 1px solid var(--border-color);
          background-color: var(--bg3);
          color: var(--fg3);
          border-radius: var(--border-radius);
          word-break: break-all;
          font-size: var(--font-size-small);
        }
        .tag:hover ~ #cursor {
          display: block;
        }
        .editor {
          flex: 1;
          border: 1px solid transparent;
          color: var(--fg);
          min-width: 60px;
          outline: none;
          line-height: inherit;
          font-family: inherit;
          background: transparent;
          font-size: calc(var(--font-size-small) + 1px);
        }
        .editor:focus-visible {
          outline: 1px solid;
        }
        .editor::placeholder {
          color: var(--placeholder-color);
          opacity: 1;
        }
      `]}});customElements.define("api-request",class extends ce{constructor(){super(),this.responseMessage="",this.responseStatus="success",this.responseHeaders="",this.responseText="",this.responseUrl="",this.curlSyntax="",this.activeResponseTab="response",this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.activeParameterSchemaTabs={}}static get properties(){return{serverUrl:{type:String,attribute:"server-url"},servers:{type:Array},method:{type:String},path:{type:String},security:{type:Array},parameters:{type:Array},request_body:{type:Object},api_keys:{type:Array},parser:{type:Object},accept:{type:String},callback:{type:String},webhook:{type:String},responseMessage:{type:String,attribute:!1},responseText:{type:String,attribute:!1},responseHeaders:{type:String,attribute:!1},responseStatus:{type:String,attribute:!1},responseUrl:{type:String,attribute:!1},curlSyntax:{type:String,attribute:!1},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},allowTry:{type:String,attribute:"allow-try"},showCurlBeforeTry:{type:String,attribute:"show-curl-before-try"},renderStyle:{type:String,attribute:"render-style"},schemaStyle:{type:String,attribute:"schema-style"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},activeParameterSchemaTabs:{type:Object,converter:{fromAttribute:e=>JSON.parse(e),toAttribute:e=>JSON.stringify(e)},attribute:"active-parameter-schema-tabs"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},fetchCredentials:{type:String,attribute:"fetch-credentials"},activeResponseTab:{type:String},selectedRequestBodyType:{type:String,attribute:"selected-request-body-type"},selectedRequestBodyExample:{type:String,attribute:"selected-request-body-example"}}}static get styles(){return[bt,gt,yt,vt,pG,$t,wt,c`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        :where(button, input[type='checkbox'], [tabindex='0']):focus-visible {
          box-shadow: var(--focus-shadow);
        }
        :where(
            input[type='text'],
            input[type='password'],
            select,
            textarea
          ):focus-visible {
          border-color: var(--primary-color);
        }
        tag-input:focus-within {
          outline: 1px solid;
        }
        .read-mode {
          margin-top: 24px;
        }
        .param-name,
        .param-type {
          margin: 1px 0;
          text-align: right;
          line-height: var(--font-size-small);
        }
        .param-name {
          color: var(--fg);
          font-family: var(--font-mono);
        }
        .param-name.deprecated {
          color: var(--red);
        }
        .param-type {
          color: var(--light-fg);
          font-family: var(--font-regular);
        }
        .param-constraint {
          min-width: 100px;
        }
        .param-constraint:empty {
          display: none;
        }
        .top-gap {
          margin-top: 24px;
        }

        .textarea {
          min-height: 220px;
          padding: 5px;
          resize: vertical;
          direction: ltr;
        }
        .example:first-child {
          margin-top: -9px;
        }

        .response-message {
          font-weight: bold;
          text-overflow: ellipsis;
        }
        .response-message.error {
          color: var(--red);
        }
        .response-message.success {
          color: var(--blue);
        }

        .file-input-container {
          align-items: flex-end;
        }
        .file-input-container .input-set:first-child .file-input-remove-btn {
          visibility: hidden;
        }

        .file-input-remove-btn {
          font-size: 16px;
          color: var(--red);
          outline: none;
          border: none;
          background: none;
          cursor: pointer;
        }

        .v-tab-btn {
          font-size: var(--smal-font-size);
          height: 24px;
          border: none;
          background: none;
          opacity: 0.3;
          cursor: pointer;
          padding: 4px 8px;
        }
        .v-tab-btn.active {
          font-weight: bold;
          background: var(--bg);
          opacity: 1;
        }

        @media only screen and (min-width: 768px) {
          .textarea {
            padding: 8px;
          }
        }

        @media only screen and (max-width: 470px) {
          .hide-in-small-screen {
            display: none;
          }
        }
      `,kt]}render(){return z`
      <div
        class="col regular-font request-panel ${"read focused".includes(this.renderStyle)||"true"===this.callback?"read-mode":"view-mode"}"
      >
        <div
          class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "
        >
          ${"true"===this.callback?"CALLBACK REQUEST":"REQUEST"}
        </div>
        <div>
          ${oG([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("path")))}
          ${oG([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("query")))}
          ${this.requestBodyTemplate()}
          ${oG([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("header")))}
          ${oG([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("cookie")))}
          ${"false"===this.allowTry?"":z`${this.apiCallTemplate()}`}
        </div>
      </div>
    `}async updated(){"true"===this.showCurlBeforeTry&&this.applyCURLSyntax(this.shadowRoot),"true"===this.webhook&&(this.allowTry="false")}async saveExampleState(){if("focused"===this.renderStyle){[...this.shadowRoot.querySelectorAll("textarea.request-body-param-user-input")].forEach((e=>{e.dataset.user_example=e.value}));[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach((e=>{e.dataset.user_example=e.value})),this.requestUpdate()}}async updateExamplesFromDataAttr(){if("focused"===this.renderStyle){[...this.shadowRoot.querySelectorAll("textarea.request-body-param-user-input")].forEach((e=>{e.value=e.dataset.user_example||e.dataset.example}));[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach((e=>{e.value=e.dataset.user_example||e.dataset.example})),this.requestUpdate()}}renderExample(e,t,r){var n,s;return z`
      ${"array"===t?"[":""}
      <a
        part="anchor anchor-param-example"
        style="display:inline-block; min-width:24px; text-align:center"
        class="${"true"===this.allowTry?"":"inactive-link"}"
        data-example-type="${"array"===t?t:"string"}"
        data-example="${e.value&&Array.isArray(e.value)?null===(n=e.value)||void 0===n?void 0:n.join("~|~"):("object"==typeof e.value?JSON.stringify(e.value,null,2):e.value)||""}"
        title="${e.value&&Array.isArray(e.value)?null===(s=e.value)||void 0===s?void 0:s.join("~|~"):("object"==typeof e.value?JSON.stringify(e.value,null,2):e.value)||""}"
        @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r}"]`);t&&(t.value="array"===e.target.dataset.exampleType?e.target.dataset.example.split("~|~"):e.target.dataset.example)}}"
      >
        ${e.printableValue||e.value}
      </a>
      ${"array"===t?"] ":""}
    `}renderShortFormatExamples(e,t,r){return z`${e.map(((e,n)=>z` ${0===n?"":"┃"}
        ${this.renderExample(e,t,r)}`))}`}renderLongFormatExamples(e,t,r){return z` <ul style="list-style-type: disclosure-closed;">
      ${e.map((e=>{var n,s;return z`
          <li>
            ${this.renderExample(e,t,r)}
            ${(null===(n=e.summary)||void 0===n?void 0:n.length)>0?z`<span>&lpar;${e.summary}&rpar;</span>`:""}
            ${(null===(s=e.description)||void 0===s?void 0:s.length)>0?z`<p>${SW(Je(e.description))}</p>`:""}
          </li>
        `}))}
    </ul>`}exampleListTemplate(e,t,r=[]){return z` ${r.length>0?z`<span style="font-weight:bold">Examples: </span>
          ${n=r,n.some((e=>{var t,r;return(null===(t=e.summary)||void 0===t?void 0:t.length)>0||(null===(r=e.description)||void 0===r?void 0:r.length)>0}))?this.renderLongFormatExamples(r,t,e):this.renderShortFormatExamples(r,t,e)}`:""}`;var n}inputParametersTemplate(e){const t=this.parameters?this.parameters.filter((t=>t.in===e)):[];if(0===t.length)return"";let r="";"path"===e?r="PATH PARAMETERS":"query"===e?r="QUERY-STRING PARAMETERS":"header"===e?r="REQUEST HEADERS":"cookie"===e&&(r="COOKIES");const n=[];for(const r of t){const[t,s,i]=OG(r);if(!t)continue;const o=dG(t);if(!o)continue;const a=SG(t,{});let l="form",c=!0,p=!1;"query"===e&&(r.style&&"form spaceDelimited pipeDelimited".includes(r.style)?l=r.style:s&&(l=s),"boolean"==typeof r.explode&&(c=r.explode),"boolean"==typeof r.allowReserved&&(p=r.allowReserved));const u=fG(r.examples||hG(r.example)||hG(null==i?void 0:i.example)||(null==i?void 0:i.examples)||hG(o.examples)||hG(o.example),o.type);u.exampleVal||"object"!==o.type||(u.exampleVal=EG(t,s||"json","","","true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,!0,"text")[0].exampleValue);const d="read focused".includes(this.renderStyle)?"200px":"160px";n.push(z`
        <tr title="${r.deprecated?"Deprecated":""}">
          <td
            rowspan="${"true"===this.allowTry?"1":"2"}"
            style="width:${d}; min-width:100px;"
          >
            <div class="param-name ${r.deprecated?"deprecated":""}">
              ${r.deprecated?z`<span style="color:var(--red);">✗</span>`:""}
              ${r.required?z`<span style="color:var(--red)">*</span>`:""}
              ${r.name}
            </div>
            <div class="param-type">
              ${"array"===o.type?`${o.arrayType}`:`${o.format?o.format:o.type}`}
            </div>
          </td>
          ${"true"===this.allowTry?z` <td
                style="min-width:100px;"
                colspan="${o.default||o.constrain||o.allowedValues||o.pattern?"1":"2"}"
              >
                ${"array"===o.type?z` <tag-input
                      class="request-param"
                      style="width:100%"
                      data-ptype="${e}"
                      data-pname="${r.name}"
                      data-example="${Array.isArray(u.exampleVal)?u.exampleVal.join("~|~"):u.exampleVal}"
                      data-param-serialize-style="${l}"
                      data-param-serialize-explode="${c}"
                      data-param-allow-reserved="${p}"
                      data-x-fill-example="${r["x-fill-example"]||"yes"}"
                      data-array="true"
                      placeholder="add-multiple &#x21a9;"
                      .value="${"no"===r["x-fill-example"]?[]:aG("true"===this.fillRequestFieldsWithExample?Array.isArray(u.exampleVal)?u.exampleVal:[u.exampleVal]:[])}"
                    >
                    </tag-input>`:"object"===o.type?z` <div
                        class="tab-panel col"
                        style="border-width:0 0 1px 0;"
                      >
                        <div
                          class="tab-buttons row"
                          @click="${e=>{if("button"===e.target.tagName.toLowerCase()){const t={...this.activeParameterSchemaTabs};t[r.name]=e.target.dataset.tab,this.activeParameterSchemaTabs=t}}}"
                        >
                          <button
                            class="tab-btn ${"example"===this.activeParameterSchemaTabs[r.name]?"active":""}"
                            data-tab="example"
                          >
                            EXAMPLE
                          </button>
                          <button
                            class="tab-btn ${"example"!==this.activeParameterSchemaTabs[r.name]?"active":""}"
                            data-tab="schema"
                          >
                            SCHEMA
                          </button>
                        </div>
                        ${"example"===this.activeParameterSchemaTabs[r.name]?z`<div class="tab-content col">
                              <textarea
                                class="textarea request-param"
                                part="textarea textarea-param"
                                data-ptype="${e}-object"
                                data-pname="${r.name}"
                                data-example="${u.exampleVal}"
                                data-param-serialize-style="${l}"
                                data-param-serialize-explode="${c}"
                                data-param-allow-reserved="${p}"
                                data-x-fill-example="${r["x-fill-example"]||"yes"}"
                                spellcheck="false"
                                .textContent="${"no"===r["x-fill-example"]?"":aG("true"===this.fillRequestFieldsWithExample?"object"==typeof u.exampleVal?JSON.stringify(u.exampleVal,null,2):u.exampleVal:"")}"
                                style="resize:vertical; width:100%; height: ${"read focused".includes(this.renderStyle)?"180px":"120px"};"
                                @input=${e=>{const t=this.getRequestPanel(e);this.liveCURLSyntaxUpdate(t)}}
                              ></textarea>
                            </div>`:z` <div class="tab-content col">
                              <schema-tree
                                class="json"
                                style="display: block"
                                .data="${a}"
                                schema-expand-level="${this.schemaExpandLevel}"
                                schema-description-expanded="${this.schemaDescriptionExpanded}"
                                allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
                                schema-hide-read-only="${this.schemaHideReadOnly.includes(this.method)}"
                                schema-hide-write-only="${this.schemaHideWriteOnly.includes(this.method)}"
                                exportparts="wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                                file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                                anchor:anchor, anchor-param-example:anchor-param-example"
                              >
                              </schema-tree>
                            </div>`}
                      </div>`:z` <input
                        type="${"password"===o.format?"password":"text"}"
                        spellcheck="false"
                        style="width:100%"
                        class="request-param"
                        part="textbox textbox-param"
                        data-ptype="${e}"
                        data-pname="${r.name}"
                        data-example="${Array.isArray(u.exampleVal)?u.exampleVal.join("~|~"):u.exampleVal}"
                        data-param-allow-reserved="${p}"
                        data-x-fill-example="${r["x-fill-example"]||"yes"}"
                        data-array="false"
                        .value="${"no"===r["x-fill-example"]?"":aG("true"===this.fillRequestFieldsWithExample?u.exampleVal:"")}"
                        @input=${e=>{const t=this.getRequestPanel(e);this.liveCURLSyntaxUpdate(t)}}
                      />`}
              </td>`:""}
          ${o.default||o.constrain||o.allowedValues||o.pattern?z` <td colspan="${"true"===this.allowTry?"1":"2"}">
                <div class="param-constraint">
                  ${o.default?z`<span style="font-weight:bold">Default: </span
                        >${o.default}<br />`:""}
                  ${o.pattern?z`<span style="font-weight:bold">Pattern: </span
                        >${o.pattern}<br />`:""}
                  ${o.constrain?z`${o.constrain}<br />`:""}
                  ${o.allowedValues&&o.allowedValues.split("┃").map(((e,t)=>z` ${t>0?"┃":z`<span style="font-weight:bold">Allowed: </span>`}
                      ${z` <a
                        part="anchor anchor-param-constraint"
                        class="${"true"===this.allowTry?"":"inactive-link"}"
                        data-type="${"array"===o.type?o.type:"string"}"
                        data-enum="${e.trim()}"
                        @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r.name}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                        >${e}</a
                      >`}`))}
                </div>
              </td>`:z`<td></td>`}
        </tr>
        <tr>
          ${"true"===this.allowTry?z`<td style="border:none"></td>`:""}
          <td colspan="2" style="border:none">
            <span class="m-markdown-small"
              >${SW(Je(r.description||""))}</span
            >
            ${this.exampleListTemplate.call(this,r.name,o.type,u.exampleList)}
          </td>
        </tr>
      `)}return z` <div class="table-title top-gap">${r}</div>
      <div style="display:block; overflow-x:auto; max-width:100%;">
        <table
          role="presentation"
          class="m-table"
          style="width:100%; word-break:break-word;"
        >
          ${n}
        </table>
      </div>`}async beforeNavigationFocusedMode(){}async afterNavigationFocusedMode(){this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.updateExamplesFromDataAttr(),this.clearResponseData()}onSelectExample(e){this.selectedRequestBodyExample=e.target.value;const t=e.target;window.setTimeout((e=>{const t=e.closest(".example-panel").querySelector(".request-body-param");e.closest(".example-panel").querySelector(".request-body-param-user-input").value=t.innerText;const r=this.getRequestPanel({target:e});this.liveCURLSyntaxUpdate(r)}),0,t)}onMimeTypeChange(e){this.selectedRequestBodyType=e.target.value;const t=e.target;this.selectedRequestBodyExample="",window.setTimeout((e=>{const t=e.closest(".request-body-container").querySelector(".request-body-param");if(t){e.closest(".request-body-container").querySelector(".request-body-param-user-input").value=t.innerText}}),0,t)}requestBodyTemplate(){if(!this.request_body)return"";if(0===Object.keys(this.request_body).length)return"";let e="",t="",r="",n="",s="";const i=[],{content:o}=this.request_body;for(const e in o)i.push({mimeType:e,schema:o[e].schema,example:o[e].example,examples:o[e].examples}),this.selectedRequestBodyType||(this.selectedRequestBodyType=e);return e=1===i.length?"":z`
            <select
              style="min-width:100px; max-width:100%;  margin-bottom:-1px;"
              @change="${e=>this.onMimeTypeChange(e)}"
            >
              ${i.map((e=>z`
                  <option
                    value="${e.mimeType}"
                    ?selected="${e.mimeType===this.selectedRequestBodyType}"
                  >
                    ${e.mimeType}
                  </option>
                `))}
            </select>
          `,i.forEach((e=>{let i,o=[];if(this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose"))e.mimeType===this.selectedRequestBodyType&&(o=EG(e.schema,e.mimeType,e.examples,e.example,"true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,"text",!1),this.selectedRequestBodyExample||(this.selectedRequestBodyExample=o.length>0?o[0].exampleId:""),s=z`
            ${s}
            <div class="example-panel border-top pad-top-8">
              ${1===o.length?"":z`
                    <select
                      style="min-width:100px; max-width:100%;  margin-bottom:-1px;"
                      @change="${e=>this.onSelectExample(e)}"
                    >
                      ${o.map((e=>z`<option
                            value="${e.exampleId}"
                            ?selected=${e.exampleId===this.selectedRequestBodyExample}
                          >
                            ${e.exampleSummary.length>80?e.exampleId:e.exampleSummary?e.exampleSummary:e.exampleId}
                          </option>`))}
                    </select>
                  `}
              ${o.filter((e=>e.exampleId===this.selectedRequestBodyExample)).map((t=>z`
                    <div
                      class="example ${t.exampleId===this.selectedRequestBodyExample?"example-selected":""}"
                      data-example="${t.exampleId}"
                    >
                      ${t.exampleSummary&&t.exampleSummary.length>80?z`<div style="padding: 4px 0">
                            ${t.exampleSummary}
                          </div>`:""}
                      ${t.exampleDescription?z`<div
                            class="m-markdown-small"
                            style="padding: 4px 0"
                          >
                            ${SW(Je(t.exampleDescription||""))}
                          </div>`:""}
                      <!-- This pre(hidden) is to store the original example value, this will remain unchanged when users switches from one example to another, its is used to populate the editable textarea -->
                      <pre
                        class="textarea is-hidden request-body-param ${e.mimeType.substring(e.mimeType.indexOf("/")+1)}"
                        spellcheck="false"
                        data-ptype="${e.mimeType}"
                        style="width:100%; resize:vertical; display:none"
                      >
${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}</pre
                      >

                      <!-- this textarea is for user to edit the example -->
                      <textarea
                        class="textarea request-body-param-user-input"
                        part="textarea textarea-param"
                        spellcheck="false"
                        data-ptype="${e.mimeType}"
                        data-example="${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}"
                        data-example-format="${t.exampleFormat}"
                        style="width:100%; resize:vertical;"
                        .textContent="${"true"===this.fillRequestFieldsWithExample?"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2):""}"
                        @input=${e=>{const t=this.getRequestPanel(e);this.liveCURLSyntaxUpdate(t)}}
                      ></textarea>
                    </div>
                  `))}
            </div>
          `);else if(this.selectedRequestBodyType.includes("form-urlencoded")||this.selectedRequestBodyType.includes("form-data")){if(e.mimeType===this.selectedRequestBodyType){const t=EG(e.schema,e.mimeType,e.examples,e.example,"true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,"text",!1);e.schema&&(r=this.formDataTemplate(e.schema,e.mimeType,t[0]?t[0].exampleValue:""))}}else/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(this.selectedRequestBodyType)&&e.mimeType===this.selectedRequestBodyType&&(t=z`
            <div class="small-font-size bold-text row">
              <input
                type="file"
                part="file-input"
                style="max-width:100%"
                class="request-body-param-file"
                data-ptype="${e.mimeType}"
                spellcheck="false"
              />
            </div>
          `);(e.mimeType.includes("json")||e.mimeType.includes("xml")||e.mimeType.includes("text")||this.selectedRequestBodyType.includes("jose"))&&(i=SG(e.schema,{}),"table"===this.schemaStyle?n=z`
            ${n}
            <schema-table
              class="${e.mimeType.substring(e.mimeType.indexOf("/")+1)}"
              style="display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};"
              .data="${i}"
              schema-expand-level="${this.schemaExpandLevel}"
              schema-description-expanded="${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
              schema-hide-read-only="${this.schemaHideReadOnly}"
              schema-hide-write-only="${this.schemaHideWriteOnly}"
              exportparts="schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            >
            </schema-table>
          `:"tree"===this.schemaStyle&&(n=z`
            ${n}
            <schema-tree
              class="${e.mimeType.substring(e.mimeType.indexOf("/")+1)}"
              style="display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};"
              .data="${i}"
              schema-expand-level="${this.schemaExpandLevel}"
              schema-description-expanded="${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
              schema-hide-read-only="${this.schemaHideReadOnly}"
              schema-hide-write-only="${this.schemaHideWriteOnly}"
              exportparts="schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            >
            </schema-tree>
          `))})),z`
      <div
        class="request-body-container"
        data-selected-request-body-type="${this.selectedRequestBodyType}"
      >
        <div class="table-title top-gap row">
          REQUEST BODY
          ${this.request_body.required?z`<span class="mono-font" style="color:var(--red)">*</span>`:""}
          <span style="font-weight:normal; margin-left:5px">
            ${this.selectedRequestBodyType}</span
          >
          <span style="flex:1"></span>
          ${e}
        </div>
        ${this.request_body.description?z`<div class="m-markdown" style="margin-bottom:12px">
              ${SW(Je(this.request_body.description))}
            </div>`:""}
        ${this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose")?z` <div class="tab-panel col" style="border-width:0 0 1px 0;">
              <div
                class="tab-buttons row"
                @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}"
              >
                <button
                  class="tab-btn ${"example"===this.activeSchemaTab?"active":""}"
                  data-tab="example"
                >
                  EXAMPLE
                </button>
                <button
                  class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}"
                  data-tab="schema"
                >
                  SCHEMA
                </button>
              </div>
              ${z`<div
                class="tab-content col"
                style="display:${"example"===this.activeSchemaTab?"block":"none"};"
              >
                ${s}
              </div>`}
              ${z`<div
                class="tab-content col"
                style="display:${"example"===this.activeSchemaTab?"none":"block"};"
              >
                ${n}
              </div>`}
            </div>`:z` ${t} ${r}`}
      </div>
    `}formDataParamAsObjectTemplate(e,t,r){var n;const s=SG(t,{}),i=EG(t,"json",t.examples,t.example,"true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,"text",!1);return z`
      <div
        class="tab-panel row"
        style="min-height:220px; border-left: 6px solid var(--light-border-color); align-items: stretch;"
      >
        <div style="width:24px; background-color:var(--light-border-color)">
          <div
            class="row"
            style="flex-direction:row-reverse; width:160px; height:24px; transform:rotate(270deg) translateX(-160px); transform-origin:top left; display:block;"
            @click="${e=>{if(e.target.classList.contains("v-tab-btn")){const{tab:t}=e.target.dataset;if(t){const r=e.target.closest(".tab-panel"),n=r.querySelector(`.v-tab-btn[data-tab="${t}"]`),s=[...r.querySelectorAll(`.v-tab-btn:not([data-tab="${t}"])`)],i=r.querySelector(`.tab-content[data-tab="${t}"]`),o=[...r.querySelectorAll(`.tab-content:not([data-tab="${t}"])`)];n.classList.add("active"),i.style.display="block",s.forEach((e=>{e.classList.remove("active")})),o.forEach((e=>{e.style.display="none"}))}}"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}"
          >
            <button
              class="v-tab-btn ${"example"===this.activeSchemaTab?"active":""}"
              data-tab="example"
            >
              EXAMPLE
            </button>
            <button
              class="v-tab-btn ${"example"!==this.activeSchemaTab?"active":""}"
              data-tab="schema"
            >
              SCHEMA
            </button>
          </div>
        </div>
        ${z` <div
          class="tab-content col"
          data-tab="example"
          style="display:${"example"===this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%"
        >
          <textarea
            class="textarea"
            part="textarea textarea-param"
            style="width:100%; border:none; resize:vertical;"
            data-array="false"
            data-ptype="${r.includes("form-urlencode")?"form-urlencode":"form-data"}"
            data-pname="${e}"
            data-example="${(null===(n=i[0])||void 0===n?void 0:n.exampleValue)||""}"
            .textContent="${"true"===this.fillRequestFieldsWithExample?i[0].exampleValue:""}"
            spellcheck="false"
          ></textarea>
        </div>`}
        ${z` <div
          class="tab-content col"
          data-tab="schema"
          style="display:${"example"!==this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%;"
        >
          <schema-tree
            .data="${s}"
            schema-expand-level="${this.schemaExpandLevel}"
            schema-description-expanded="${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
            ,
          >
          </schema-tree>
        </div>`}
      </div>
    `}formDataTemplate(e,t,r=""){const n=[];if(e.properties){for(const r in e.properties){var s,i;const o=e.properties[r];if(o.readOnly)continue;const a=o.examples||o.example||"",l=o.type,c=dG(o),p="read focused".includes(this.renderStyle)?"200px":"160px",u=fG(c.examples||c.example,c.type);n.push(z` <tr title="${o.deprecated?"Deprecated":""}">
              <td style="width:${p}; min-width:100px;">
                <div
                  class="param-name ${o.deprecated?"deprecated":""}"
                >
                  ${r}${null!==(s=e.required)&&void 0!==s&&s.includes(r)||o.required?z`<span style="color:var(--red);">*</span>`:""}
                </div>
                <div class="param-type">${c.type}</div>
              </td>
              <td
                style="${"object"===l?"width:100%; padding:0;":"true"===this.allowTry?"":"display:none;"} min-width:100px;"
                colspan="${"object"===l?2:1}"
              >
                ${"array"===l?"binary"===(null===(i=o.items)||void 0===i?void 0:i.format)?z`
                        <div
                          class="file-input-container col"
                          style="align-items:flex-end;"
                          @click="${e=>this.onAddRemoveFileInput(e,r,t)}"
                        >
                          <div class="input-set row">
                            <input
                              type="file"
                              part="file-input"
                              style="width:100%"
                              data-pname="${r}"
                              data-ptype="${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                              data-array="false"
                              data-file-array="true"
                            />
                            <button class="file-input-remove-btn">
                              &#x2715;
                            </button>
                          </div>
                          <button
                            class="m-btn primary file-input-add-btn"
                            part="btn btn-fill"
                            style="margin:2px 25px 0 0; padding:2px 6px;"
                          >
                            ADD
                          </button>
                        </div>
                      `:z`
                        <tag-input
                          style="width:100%"
                          data-ptype="${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                          data-pname="${r}"
                          data-example="${Array.isArray(a)?a.join("~|~"):a}"
                          data-array="true"
                          placeholder="add-multiple &#x21a9;"
                          .value="${Array.isArray(a)?Array.isArray(a[0])?a[0]:a:[]}"
                        >
                        </tag-input>
                      `:z` ${"object"===l?this.formDataParamAsObjectTemplate.call(this,r,o,t):z`
                          ${"true"===this.allowTry?z`<input
                                .value="${"true"===this.fillRequestFieldsWithExample?u.exampleVal:""}"
                                spellcheck="false"
                                type="${"binary"===o.format?"file":"password"===o.format?"password":"text"}"
                                part="textbox textbox-param"
                                style="width:100%"
                                data-ptype="${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                                data-pname="${r}"
                                data-example="${Array.isArray(a)?a[0]:a}"
                                data-array="false"
                              />`:""}
                        `}`}
              </td>
              ${"object"===l?"":z` <td>
                    ${c.default||c.constrain||c.allowedValues||c.pattern?z` <div class="param-constraint">
                          ${c.default?z`<span style="font-weight:bold"
                                  >Default: </span
                                >${c.default}<br />`:""}
                          ${c.pattern?z`<span style="font-weight:bold"
                                  >Pattern: </span
                                >${c.pattern}<br />`:""}
                          ${c.constrain?z`${c.constrain}<br />`:""}
                          ${c.allowedValues&&c.allowedValues.split("┃").map(((e,t)=>z` ${t>0?"┃":z`<span style="font-weight:bold"
                                    >Allowed:
                                  </span>`}
                              ${z` <a
                                part="anchor anchor-param-constraint"
                                class="${"true"===this.allowTry?"":"inactive-link"}"
                                data-type="${"array"===c.type?c.type:"string"}"
                                data-enum="${e.trim()}"
                                @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                              >
                                ${e}
                              </a>`}`))}
                        </div>`:""}
                  </td>`}
            </tr>
            ${"object"===l?"":z`
                  <tr>
                    <td style="border:none"></td>
                    <td
                      colspan="2"
                      style="border:none; margin-top:0; padding:0 5px 8px 5px;"
                    >
                      <span class="m-markdown-small"
                        >${SW(Je(o.description||""))}</span
                      >
                      ${this.exampleListTemplate.call(this,r,c.type,u.exampleList)}
                    </td>
                  </tr>
                `}`)}return z`
        <table role="presentation" style="width:100%;" class="m-table">
          ${n}
        </table>
      `}return z`
      <textarea
        class="textarea dynamic-form-param ${t}"
        part="textarea textarea-param"
        spellcheck="false"
        data-pname="dynamic-form"
        data-ptype="${t}"
        .textContent="${r}"
        style="width:100%"
      ></textarea>
      ${e.description?z`<span class="m-markdown-small"
            >${SW(Je(e.description))}</span
          >`:""}
    `}curlSyntaxTemplate(e="flex"){return z`
      <div
        class="col m-markdown"
        style="flex:1; display:${e}; position:relative; max-width: 100%;"
      >
        <div style="position:absolute; top:12px; right:8px; display: flex;">
          <button
            class="toolbar-btn"
            @click="${this.onGenerateCURLClick}"
            part="btn btn-fill"
          >
            Regenerate
          </button>
          <button
            class="toolbar-btn"
            @click="${e=>{Pt(this.curlSyntax.replace(/\\$/,""),e)}}"
            part="btn btn-fill"
          >
            Copy
          </button>
        </div>
        <pre style="white-space:pre"><code>${SW(mt().highlight(this.curlSyntax.trim().replace(/\\$/,""),mt().languages.shell,"shell"))}</code></pre>
      </div>
    `}apiResponseTabTemplate(){let e="",t="";if(!this.responseIsBlob)if(this.responseHeaders.includes("application/x-ndjson")){e="json";const r=this.responseText.split("\n").map((t=>mt().highlight(t,mt().languages[e],e))).join("\n");t=z`<code>${SW(r)}</code>`}else this.responseHeaders.includes("json")?(e="json",t=z`<code
          >${SW(mt().highlight(this.responseText,mt().languages[e],e))}</code
        >`):this.responseHeaders.includes("html")||this.responseHeaders.includes("xml")?(e="html",t=z`<code
          >${SW(mt().highlight(this.responseText,mt().languages[e],e))}</code
        >`):(e="text",t=z`<code>${this.responseText}</code>`);return z` <div
        class="row"
        style="font-size:var(--font-size-small); margin:5px 0"
      >
        <div class="response-message ${this.responseStatus}">
          Response Status: ${this.responseMessage}
        </div>
        <div style="flex:1"></div>
        <button
          class="m-btn"
          part="btn btn-outline btn-clear-response"
          @click="${this.clearResponseData}"
        >
          CLEAR RESPONSE
        </button>
      </div>
      <div class="tab-panel col" style="border-width:0 0 1px 0;">
        <div
          id="tab_buttons"
          class="tab-buttons row"
          @click="${e=>{!1!==e.target.classList.contains("tab-btn")&&(this.activeResponseTab=e.target.dataset.tab)}}"
        >
          <button
            class="tab-btn ${"response"===this.activeResponseTab?"active":""}"
            data-tab="response"
          >
            RESPONSE
          </button>
          <button
            class="tab-btn ${"headers"===this.activeResponseTab?"active":""}"
            data-tab="headers"
          >
            RESPONSE HEADERS
          </button>
          ${"true"===this.showCurlBeforeTry?"":z`<button
                class="tab-btn ${"curl"===this.activeResponseTab?"active":""}"
                data-tab="curl"
              >
                CURL
              </button>`}
        </div>
        ${this.responseIsBlob?z` <div
              class="tab-content col"
              style="flex:1; display:${"response"===this.activeResponseTab?"flex":"none"};"
            >
              ${"image"===this.responseBlobType?z`<img style="max-height:var(--resp-area-height, 400px); object-fit:contain;" class="mar-top-8" src="${this.responseBlobUrl}"></img>`:""}
              <button
                class="m-btn thin-border mar-top-8"
                style="width:135px"
                @click="${e=>{It(this.responseBlobUrl,this.respContentDisposition)}}"
                part="btn btn-outline"
              >
                DOWNLOAD
              </button>
              ${"view"===this.responseBlobType||"image"===this.responseBlobType?z`<button
                    class="m-btn thin-border mar-top-8"
                    style="width:135px"
                    @click="${e=>{Rt(this.responseBlobUrl)}}"
                    part="btn btn-outline"
                  >
                    VIEW (NEW TAB)
                  </button>`:""}
            </div>`:z` <div
              class="tab-content col m-markdown"
              style="flex:1; display:${"response"===this.activeResponseTab?"flex":"none"};"
            >
              <button
                class="toolbar-btn"
                style="position:absolute; top:12px; right:8px"
                @click="${e=>{Pt(this.responseText,e)}}"
                part="btn btn-fill"
              >
                Copy
              </button>
              <pre
                style="white-space:pre; min-height:50px; height:var(--resp-area-height, 400px); resize:vertical; overflow:auto"
              >
${t}</pre
              >
            </div>`}
        <div
          class="tab-content col m-markdown"
          style="flex:1; display:${"headers"===this.activeResponseTab?"flex":"none"};"
        >
          <button
            class="toolbar-btn"
            style="position:absolute; top:12px; right:8px"
            @click="${e=>{Pt(this.responseHeaders,e)}}"
            part="btn btn-fill"
          >
            Copy
          </button>
          <pre style="white-space:pre"><code>${SW(mt().highlight(this.responseHeaders,mt().languages.css,"css"))}</code></pre>
        </div>
        ${"true"===this.showCurlBeforeTry?"":this.curlSyntaxTemplate("curl"===this.activeResponseTab?"flex":"none")}
      </div>`}apiCallTemplate(){var e,t;let r="";this.servers&&this.servers.length>0&&(r=z`
        <select
          style="min-width:100px;"
          @change="${e=>{this.serverUrl=e.target.value}}"
        >
          ${this.servers.map((e=>z`<option value="${e.url}">
                ${e.url} - ${e.description}
              </option>`))}
        </select>
      `);const n=z`
      <div style="display:flex; flex-direction:column;">
        ${r}
        ${this.serverUrl?z`
              <div style="display:flex; align-items:baseline;">
                <div style="font-weight:bold; padding-right:5px;">
                  API Server
                </div>
                <span class="gray-text"> ${this.serverUrl} </span>
              </div>
            `:""}
      </div>
    `;return z`
      <div
        style="display:flex; align-items:flex-end; margin:16px 0; font-size:var(--font-size-small);"
        part="wrap-request-btn"
      >
        <div
          class="hide-in-small-screen"
          style="flex-direction:column; margin:0; width:calc(100% - 60px);"
        >
          <div
            style="display:flex; flex-direction:row; align-items:center; overflow:hidden;"
          >
            ${n}
          </div>
          <div style="display:flex;">
            <div style="font-weight:bold; padding-right:5px;">
              Authentication
            </div>
            ${(null===(e=this.security)||void 0===e?void 0:e.length)>0?z` ${this.api_keys.length>0?z`<div style="color:var(--blue); overflow:hidden;">
                      ${1===this.api_keys.length?`${null===(t=this.api_keys[0])||void 0===t?void 0:t.typeDisplay} in ${this.api_keys[0].in}`:`${this.api_keys.length} API keys applied`}
                    </div>`:z`<div class="gray-text">
                      Required
                      <span style="color:var(--red)">(None Applied)</span>
                    </div>`}`:z`<span class="gray-text"> Not Required </span>`}
          </div>
        </div>
        ${this.parameters.length>0||this.request_body?z` <button
                class="m-btn thin-border"
                part="btn btn-outline btn-fill"
                style="margin-right:5px;"
                @click="${this.onFillRequestData}"
                title="Fills with example data (if provided)"
              >
                FILL EXAMPLE
              </button>
              <button
                class="m-btn thin-border"
                part="btn btn-outline btn-clear"
                style="margin-right:5px;"
                @click="${this.onClearRequestData}"
              >
                CLEAR
              </button>`:""}
        <button
          class="m-btn primary thin-border"
          part="btn btn-try"
          @click="${this.onTryClick}"
        >
          TRY
        </button>
      </div>
      <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
        ${"true"===this.showCurlBeforeTry?this.curlSyntaxTemplate():""}
      </div>
      ${""===this.responseMessage?"":this.apiResponseTabTemplate()}
    `}async onFillRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach((e=>{e.dataset.example&&("TAG-INPUT"===e.tagName.toUpperCase()?e.value=e.dataset.example.split("~|~"):e.value=e.dataset.example)}))}async onClearRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach((e=>{e.value=""}))}buildFetchURL(e){let t;const r=[...e.querySelectorAll("[data-ptype='path']")],n=[...e.querySelectorAll("[data-ptype='query']")],s=[...e.querySelectorAll("[data-ptype='query-object']")];t=this.path,r.map((e=>{t=t.replace(`{${e.dataset.pname}}`,encodeURIComponent(e.value))}));const i=new Map,o=[];n.length>0&&n.forEach((e=>{const t=new URLSearchParams;if("true"===e.dataset.paramAllowReserved&&o.push(e.dataset.pname),"false"===e.dataset.array)""!==e.value&&t.append(e.dataset.pname,e.value);else{const{paramSerializeStyle:r,paramSerializeExplode:n}=e.dataset;let s=e.value&&Array.isArray(e.value)?e.value:[];s=Array.isArray(s)?s.filter((e=>""!==e)):[],s.length>0&&("spaceDelimited"===r?t.append(e.dataset.pname,s.join(" ").replace(/^\s|\s$/g,"")):"pipeDelimited"===r?t.append(e.dataset.pname,s.join("|").replace(/^\||\|$/g,"")):"true"===n?s.forEach((r=>{t.append(e.dataset.pname,r)})):t.append(e.dataset.pname,s.join(",").replace(/^,|,$/g,"")))}t.toString()&&i.set(e.dataset.pname,t)})),s.length>0&&s.map((e=>{const t=new URLSearchParams;try{let r={};const{paramSerializeStyle:n,paramSerializeExplode:s,pname:i}=e.dataset;if(r=Object.assign(r,JSON.parse(e.value.replace(/\s+/g," "))),"true"===e.dataset.paramAllowReserved&&o.push(e.dataset.pname),"json xml".includes(n))"json"===n?t.append(e.dataset.pname,JSON.stringify(r)):"xml"===n&&t.append(e.dataset.pname,yG(r));else for(const e in r){const o=`${i}[${e}]`;"object"==typeof r[e]?Array.isArray(r[e])&&("spaceDelimited"===n?t.append(o,r[e].join(" ")):"pipeDelimited"===n?t.append(o,r[e].join("|")):"true"===s?r[e].forEach((e=>{t.append(o,e)})):t.append(o,r[e])):t.append(o,r[e])}}catch(t){console.error("RapiDoc: unable to parse %s into object",e.value)}t.toString()&&i.set(e.dataset.pname,t)}));let a="";return i.size&&(i.forEach(((e,t)=>{o.includes(t)?(a+=`${t}=`,a+=e.getAll(t).join(`&${t}=`),a+="&"):a+=`${e.toString()}&`})),a=a.slice(0,-1)),0!==a.length&&(t=`${t}${t.includes("?")?"&":"?"}${a}`),this.api_keys.filter((e=>"query"===e.in)).forEach((e=>{t=`${t}${t.includes("?")?"&":"?"}${e.name}=${encodeURIComponent(e.finalKeyValue)}`})),t=`${this.serverUrl.replace(/\/$/,"")}${t}`,t}buildFetchHeaders(e){var t;const r=null===(t=this.closest(".expanded-req-resp-container, .req-resp-container"))||void 0===t?void 0:t.getElementsByTagName("api-response")[0],n=[...e.querySelectorAll("[data-ptype='header']")],s=e.querySelector(".request-body-container"),i=null==r?void 0:r.selectedMimeType,o=new Headers;if(i?o.append("Accept",i):this.accept&&o.append("Accept",this.accept),this.api_keys.filter((e=>"header"===e.in)).forEach((e=>{o.append(e.name,e.finalKeyValue)})),n.map((e=>{e.value&&o.append(e.dataset.pname,e.value)})),s){const e=s.dataset.selectedRequestBodyType;e.includes("form-data")||o.append("Content-Type",e)}return o}buildFetchBodyOptions(e){const t=e.querySelector(".request-body-container"),r={method:this.method.toUpperCase()};if(t){const n=t.dataset.selectedRequestBodyType;if(n.includes("form-urlencoded")){const t=e.querySelector("[data-ptype='dynamic-form']");if(t){const e=t.value,n=new URLSearchParams;let s,i=!0;if(e)try{s=JSON.parse(e)}catch(e){i=!1,console.warn("RapiDoc: Invalid JSON provided",e)}else i=!1;if(i){for(const e in s)n.append(e,JSON.stringify(s[e]));r.body=n}}else{const t=[...e.querySelectorAll("[data-ptype='form-urlencode']")],n=new URLSearchParams;t.filter((e=>"file"!==e.type)).forEach((e=>{if("false"===e.dataset.array)e.value&&n.append(e.dataset.pname,e.value);else{const t=e.value&&Array.isArray(e.value)?e.value.join(","):"";n.append(e.dataset.pname,t)}})),r.body=n}}else if(n.includes("form-data")){const t=new FormData;[...e.querySelectorAll("[data-ptype='form-data']")].forEach((e=>{"false"===e.dataset.array?"file"===e.type&&e.files[0]?t.append(e.dataset.pname,e.files[0],e.files[0].name):e.value&&t.append(e.dataset.pname,e.value):e.value&&Array.isArray(e.value)&&t.append(e.dataset.pname,e.value.join(","))})),r.body=t}else if(/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(n)){const t=e.querySelector(".request-body-param-file");null!=t&&t.files[0]&&(r.body=t.files[0])}else if(n.includes("json")||n.includes("xml")||n.includes("text")){const t=e.querySelector(".request-body-param-user-input");null!=t&&t.value&&(r.body=t.value)}}return r}async onTryClick(e){const t=e.target,r=t.closest(".request-panel"),n=this.buildFetchURL(r),s=this.buildFetchBodyOptions(r),i=this.buildFetchHeaders(r);this.responseUrl="",this.responseHeaders=[],this.responseStatus="success",this.responseIsBlob=!1,this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),this.fetchCredentials&&(s.credentials=this.fetchCredentials);const o=new AbortController,{signal:a}=o;s.headers=i;const l={url:n,...s},c=new CustomEvent("before-try",{bubbles:!0,composed:!0,detail:{request:l,controller:o,promises:[]}});this.dispatchEvent(c),await Promise.all(c.detail.promises);const p={method:l.method,headers:l.headers,credentials:l.credentials,body:l.body};this.curlSyntax=this.generateCURLSyntax(l.url,l.headers,p,r);const u=new Request(l.url,p);let d,h;try{let e,r,n;t.disabled=!0,this.responseText="⌛",this.responseMessage="",this.requestUpdate();const s=performance.now();d=await fetch(u,{signal:a});const i=performance.now();let o;const l=new Promise((e=>{o=e}));this.dispatchEvent(new CustomEvent("fetched-try",{bubbles:!0,composed:!0,detail:{request:u,response:d,resolveModifiedResponse:o}})),d=await l,h=d.clone(),t.disabled=!1,this.responseMessage=z`${d.statusText?`${d.statusText}:${d.status}`:d.status}
        <div style="color:var(--light-fg)">
          Took ${Math.round(i-s)} milliseconds
        </div>`,this.responseUrl=d.url;const c={};d.headers.forEach(((e,t)=>{c[t]=e,this.responseHeaders=`${this.responseHeaders}${t}: ${e}\n`}));const p=d.headers.get("content-type");if(0===(await d.clone().text()).length)this.responseText="";else if(p){if("application/x-ndjson"===p)this.responseText=await d.text();else if(p.includes("json"))if(/charset=[^"']+/.test(p)){const e=p.split("charset=")[1],t=await d.arrayBuffer();try{n=new TextDecoder(e).decode(t)}catch{n=new TextDecoder("utf-8").decode(t)}try{r=JSON.parse(n),this.responseText=JSON.stringify(r,null,2)}catch{this.responseText=n}}else r=await d.json(),this.responseText=JSON.stringify(r,null,2);else/^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$|^application\/vnd\./.test(p)?(this.responseIsBlob=!0,this.responseBlobType="download"):/^image/.test(p)?(this.responseIsBlob=!0,this.responseBlobType="image"):/^audio|^image|^video/.test(p)?(this.responseIsBlob=!0,this.responseBlobType="view"):(n=await d.text(),p.includes("xml")?this.responseText=cG()(n,{textNodesOnSameLine:!0,indentor:"  "}):this.responseText=n);if(this.responseIsBlob){const t=d.headers.get("content-disposition");this.respContentDisposition=t?t.split("filename=")[1].replace(/"|'/g,""):"filename",e=await d.blob(),this.responseBlobUrl=URL.createObjectURL(e)}}else n=await d.text(),this.responseText=n;this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{request:u,response:h,responseHeaders:c,responseBody:r||n||e,responseStatus:h.ok}}))}catch(e){t.disabled=!1,"AbortError"===e.name?(this.dispatchEvent(new CustomEvent("request-aborted",{bubbles:!0,composed:!0,detail:{err:e,request:u}})),this.responseMessage="Request Aborted",this.responseText="Request Aborted"):(this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{err:e,request:u}})),this.responseMessage=`${e.message} (CORS or Network Issue)`)}this.requestUpdate()}async liveCURLSyntaxUpdate(e){await this.applyCURLSyntax(e),this.requestUpdate()}onGenerateCURLClick(e){const t=this.getRequestPanel(e);this.applyCURLSyntax(t)}getRequestPanel(e){return e.target.closest(".request-panel")}async applyCURLSyntax(e){const t=this.buildFetchURL(e),r=this.buildFetchBodyOptions(e),n=this.buildFetchHeaders(e);this.fetchCredentials&&(r.credentials=this.fetchCredentials),r.headers=n;const s={url:t,...r},i=new CustomEvent("before-try",{bubbles:!0,composed:!0,detail:{request:s,promises:[]}});this.dispatchEvent(i),await Promise.all(i.detail.promises);const o={method:s.method,headers:s.headers,credentials:s.credentials,body:s.body};this.curlSyntax=this.generateCURLSyntax(s.url,s.headers,o,e)}generateCURLSyntax(e,t,r,n){let s,i="",o="",a="",l="";const c=n.querySelector(".request-body-container");if(!1===e.startsWith("http")){s=new URL(e,window.location.href).href}else s=e;if(i=`curl -X ${this.method.toUpperCase()} "${s}" \\\n`,o=Array.from(t).map((([e,t])=>` -H "${e}: ${t}"`)).join("\\\n"),o&&(o=`${o} \\\n`),r.body instanceof URLSearchParams)a=` -d ${r.body.toString()} \\\n`;else if(r.body instanceof File)a=` --data-binary @${r.body.name} \\\n`;else if(r.body instanceof FormData)l=Array.from(r.body).reduce(((e,[t,r])=>{if(r instanceof File)return[...e,` -F "${t}=@${r.name}"`];const n=r.match(/([^,],)/gm);if(n){const r=n.map((e=>`-F "${t}[]=${e}"`));return[...e,...r]}return[...e,` -F "${t}=${r}"`]}),[]).join("\\\n");else if(c&&c.dataset.selectedRequestBodyType){const e=c.dataset.selectedRequestBodyType,t=n.querySelector(".request-body-param-user-input");if(null!=t&&t.value){if(r.body=t.value,e.includes("json"))try{a=` -d '${JSON.stringify(JSON.parse(t.value))}' \\\n`}catch(e){}a||(a=` -d '${t.value.replace(/'/g,"'\"'\"'")}' \\\n`)}}return`${i}${o}${a}${l}`}onAddRemoveFileInput(e,t,r){if("button"!==e.target.tagName.toLowerCase())return;if(e.target.classList.contains("file-input-remove-btn")){return void e.target.closest(".input-set").remove()}const n=e.target.closest(".file-input-container"),s=document.createElement("div");s.setAttribute("class","input-set row");const i=document.createElement("input");i.type="file",i.style="width:200px; margin-top:2px;",i.setAttribute("data-pname",t),i.setAttribute("data-ptype",r.includes("form-urlencode")?"form-urlencode":"form-data"),i.setAttribute("data-array","false"),i.setAttribute("data-file-array","true");const o=document.createElement("button");o.setAttribute("class","file-input-remove-btn"),o.innerHTML="&#x2715;",s.appendChild(i),s.appendChild(o),n.insertBefore(s,e.target)}clearResponseData(){this.responseUrl="",this.responseHeaders="",this.responseText="",this.responseStatus="success",this.responseMessage="",this.responseIsBlob=!1,this.responseBlobType="",this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl="")}disconnectedCallback(){this.curlSyntax="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),super.disconnectedCallback()}});customElements.define("schema-table",class extends ce{static get properties(){return{schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},data:{type:Object}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[yt,jG,c`
        .table {
          font-size: var(--font-size-small);
          text-align: left;
          line-height: calc(var(--font-size-small) + 6px);
        }
        .table .tr {
          width: calc(100% - 5px);
          padding: 0 0 0 5px;
          border-bottom: 1px dotted var(--light-border-color);
        }
        .table .td {
          padding: 4px 0;
        }
        .table .key {
          width: 240px;
        }
        .key .key-label {
          font-size: var(--font-size-mono);
        }
        .key.deprecated .key-label {
          color: var(--red);
        }

        .table .key-type {
          white-space: normal;
          width: 150px;
        }
        .collapsed-all-descr .tr:not(.expanded-descr) {
          max-height: calc(var(--font-size-small) + var(--font-size-small));
        }

        .obj-toggle {
          padding: 0 2px;
          border-radius: 2px;
          border: 1px solid transparent;
          display: inline-block;
          margin-left: -16px;
          color: var(--primary-color);
          cursor: pointer;
          font-size: calc(var(--font-size-small) + 4px);
          font-family: var(--font-mono);
          background-clip: border-box;
        }
        .obj-toggle:hover {
          border-color: var(--primary-color);
        }
        .tr.expanded + .object-body {
          display: block;
        }
        .tr.collapsed + .object-body {
          display: none;
        }
      `,kt]}render(){var e,t,r;return z`
      <div
        class="table ${"true"===this.schemaDescriptionExpanded?"expanded-all-descr":"collapsed-all-descr"}"
        @click="${e=>this.handleAllEvents(e)}"
      >
        <div class="toolbar">
          <div
            class="toolbar-item schema-root-type ${(null===(e=this.data)||void 0===e?void 0:e["::type"])||""} "
          >
            ${(null===(t=this.data)||void 0===t?void 0:t["::type"])||""}
          </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?z`
                <div style="flex:1"></div>
                <div
                  part="schema-multiline-toggle"
                  class="toolbar-item schema-multiline-toggle"
                >
                  ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
                </div>
              `:""}
        </div>
        <span part="schema-description" class="m-markdown">
          ${SW(Je((null===(r=this.data)||void 0===r?void 0:r["::description"])||""))}
        </span>
        <div style="border:1px solid var(--light-border-color)">
          <div
            style="display:flex; background-color: var(--bg2); padding:8px 4px; border-bottom:1px solid var(--light-border-color);"
          >
            <div
              class="key"
              style="font-family:var(--font-regular); font-weight:bold; color:var(--fg);"
            >
              Field
            </div>
            <div
              class="key-type"
              style="font-family:var(--font-regular); font-weight:bold; color:var(--fg);"
            >
              Type
            </div>
            <div
              class="key-descr"
              style="font-family:var(--font-regular); font-weight:bold; color:var(--fg);"
            >
              Description
            </div>
          </div>
          ${this.data?z` ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"])}`:""}
        </div>
      </div>
    `}generateTree(e,t="object",r="",n="",s="",i=0,o=0,a=""){var l,c;if("true"===this.schemaHideReadOnly){if("array"===t&&"readonly"===a)return;if(e&&"readonly"===e["::readwrite"])return}if("true"===this.schemaHideWriteOnly){if("array"===t&&"writeonly"===a)return;if(e&&"writeonly"===e["::readwrite"])return}if(!e)return z`<div class="null" style="display:inline;">
        <span style="margin-left:${16*(i+1)}px"> &nbsp; </span>
        <span class="key-label xxx-of-key">
          ${n.replace("::OPTION~","")}</span
        >
        ${"array"===t?z`<span class="mono-font"> [ ] </span>`:"object"===t?z`<span class="mono-font"> { } </span>`:z`<span class="mono-font"> schema undefined </span>`}
      </div>`;const p=null!==(l=e["::type"])&&void 0!==l&&l.startsWith("xxx-of")?i:i+1,u="xxx-of-option"===t||"xxx-of-option"===e["::type"]||n.startsWith("::OPTION")?o:o+1,d=16*u;if(0===Object.keys(e).length)return z`<span
        class="td key object"
        style="padding-left:${d}px"
        >${n}</span
      >`;let h="",f="",m=!1;if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))h=n.replace("::","").replace("~"," "),m=!0;else if(n.startsWith("::OPTION")){const e=n.split("~");h=e[1],f=e[2]}else h=n;let y="";if("object"===e["::type"]?y="array"===t?"array of object":e["::dataTypeLabel"]||e["::type"]:"array"===e["::type"]&&(y="array"===t?"array of array "+("object"!==r?`of ${r}`:""):e["::dataTypeLabel"]||e["::type"]),"object"==typeof e)return z`
        ${p>=0&&n?z` <div
              class="tr ${p<=this.schemaExpandLevel?"expanded":"collapsed"} ${e["::type"]}"
              data-obj="${h}"
              title="${e["::deprecated"]?"Deprecated":""}"
            >
              <div
                class="td key ${e["::deprecated"]?"deprecated":""}"
                style="padding-left:${d}px"
              >
                ${h||f?z` <span
                      class="obj-toggle ${p<this.schemaExpandLevel?"expanded":"collapsed"}"
                      data-obj="${h}"
                    >
                      ${i<this.schemaExpandLevel?"-":"+"}
                    </span>`:""}
                ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||n.startsWith("::OPTION")?z`<span class="xxx-of-key" style="margin-left:-6px"
                        >${h}</span
                      ><span
                        class="${m?"xxx-of-key":"xxx-of-descr"}"
                        >${f}</span
                      >`:h.endsWith("*")?z`<span
                          class="key-label"
                          style="display:inline-block; margin-left:-6px;"
                          >${e["::deprecated"]?"✗":""}
                          ${h.substring(0,h.length-1)}</span
                        ><span style="color:var(--red);">*</span>`:z`<span
                        class="key-label"
                        style="display:inline-block; margin-left:-6px;"
                        >${e["::deprecated"]?"✗":""}
                        ${"::props"===h?"":h}</span
                      >`}
                ${"xxx-of"===e["::type"]&&"array"===t?z`<span style="color:var(--primary-color)">ARRAY</span>`:""}
              </div>
              <div
                class="td key-type"
                title="${"readonly"===e["::readwrite"]?"Read-Only":"writeonly"===e["::readwrite"]?"Write-Only":""}"
              >
                ${(e["::type"]||"").includes("xxx-of")?"":y}
                ${"readonly"===e["::readwrite"]?" 🆁":"writeonly"===e["::readwrite"]?" 🆆":""}
              </div>
              <div
                class="td key-descr m-markdown-small"
                style="line-height:1.7"
              >
                ${SW(Je(s||""))}
              </div>
            </div>`:z` ${"array"===e["::type"]&&"array"===t?z` <div class="tr">
                  <div class="td key"></div>
                  <div class="td key-type">
                    ${r&&"object"!==r?`${t} of ${r}`:t}
                  </div>
                  <div class="td key-descr"></div>
                </div>`:""}`}
        <div class="object-body">
          ${Array.isArray(e)&&e[0]?z`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",p,u,"")}`:z`
                ${Object.keys(e).map((t=>{var r;return z`
                    ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite","::dataTypeLabel","::nullable"].includes(t)?"array"===e[t]["::type"]||"object"===e[t]["::type"]?z`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],p,u,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`:"":z`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,(null===(r=e[t])||void 0===r?void 0:r["::description"])||"",p,u,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`}
                  `}))}
              `}
          <div></div>
        </div>
      `;const[g,v,b,x,w,$,S,E,k]=e.split("~|~");if("🆁"===v&&"true"===this.schemaHideReadOnly)return;if("🆆"===v&&"true"===this.schemaHideWriteOnly)return;const O=g.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase(),j=""+(b||x||w||$?'<span class="descr-expand-toggle">➔</span>':"");let A="";return A="array"===t?z` <div
        class="td key-type ${O}"
        title="${"readonly"===a?"Read-Only":"writeonly"===v?"Write-Only":""}"
      >
        [${g}]
        ${"readonly"===a?"🆁":"writeonly"===a?"🆆":""}
      </div>`:z` <div
        class="td key-type ${O}"
        title="${"🆁"===v?"Read-Only":"🆆"===v?"Write-Only":""}"
      >
        ${g} ${v}
      </div>`,z`
      <div class="tr primitive" title="${k?"Deprecated":""}">
        <div class="td key ${k}" style="padding-left:${d}px">
          ${k?z`<span style="color:var(--red);">✗</span>`:""}
          ${null!==(c=h)&&void 0!==c&&c.endsWith("*")?z` <span class="key-label"
                  >${h.substring(0,h.length-1)}</span
                >
                <span style="color:var(--red);">*</span>`:n.startsWith("::OPTION")?z`<span class="xxx-of-key">${h}</span
                  ><span class="xxx-of-descr">${f}</span>`:z`${h?z`<span class="key-label"> ${h}</span>`:z`<span class="xxx-of-descr">${E}</span>`}`}
        </div>
        ${A}
        <div class="td key-descr" style="font-size: var(--font-size-small)">
          ${z`<span class="m-markdown-small">
            ${SW(Je("array"===t?`${j} ${s}`:E?`${j} <b>${E}:</b> ${S}`:`${j} ${S}`))}
          </span>`}
          ${b?z`<div
                class=""
                style="display:inline-block; line-break:anywhere; margin-right:8px;"
              >
                <span class="bold-text">Constraints: </span> ${b}
              </div>`:""}
          ${x?z`<div
                style="display:inline-block; line-break:anywhere; margin-right:8px;"
              >
                <span class="bold-text">Default: </span>${x}
              </div>`:""}
          ${w?z`<div
                style="display:inline-block; line-break:anywhere; margin-right:8px;"
              >
                <span class="bold-text"
                  >${"const"===g?"Value":"Allowed"}: </span
                >${SW(Je(w))}
              </div>`:""}
          ${$?z`<div
                style="display:inline-block; line-break:anywhere; margin-right:8px;"
              >
                <span class="bold-text">Pattern: </span>${$}
              </div>`:""}
        </div>
      </div>
    `}handleAllEvents(e){if(e.target.classList.contains("obj-toggle"))this.toggleObjectExpand(e);else if(e.target.classList.contains("schema-multiline-toggle"))this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true";else if(e.target.classList.contains("descr-expand-toggle")){const t=e.target.closest(".tr");t&&(t.classList.toggle("expanded-descr"),t.style.maxHeight=t.scrollHeight)}}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.add("collapsed"),t.classList.remove("expanded"),e.target.innerText="+"):(t.classList.remove("collapsed"),t.classList.add("expanded"),e.target.innerText="-")}});function PG(e){const t=new Je.Renderer;return t.heading=(t,r,n,s)=>`<h${r} class="observe-me" id="${e}--${s.slug(n)}">${t}</h${r}>`,t}function TG(e){const t=e.target.closest(".tag-container").querySelector(".tag-description"),r=e.target.closest(".tag-container").querySelector(".tag-icon");if(t&&r){t.classList.contains("expanded")?(t.style.maxHeight=0,t.classList.replace("expanded","collapsed"),r.classList.replace("expanded","collapsed")):(t.style.maxHeight=`${t.scrollHeight}px`,t.classList.replace("collapsed","expanded"),r.classList.replace("collapsed","expanded"))}}function CG(e,t="",r=""){var n,s,i,o,a,l,c,p,u;const d=new Set;for(const t in e.responses)for(const r in null===(h=e.responses[t])||void 0===h?void 0:h.content){var h;d.add(r.trim())}const f=[...d].join(", "),m=this.resolvedSpec.securitySchemes.filter((t=>{var r;return t.finalKeyValue&&(null===(r=e.security)||void 0===r?void 0:r.some((e=>t.securitySchemeId in e)))}))||[],y=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===jt&&"-"!==e.value));y&&m.push(y);const g=e.xCodeSamples?nG.call(this,e.xCodeSamples):"";return z`
    ${"read"===this.renderStyle?z`<div class="divider" part="operation-divider"></div>`:""}
    <div
      class="expanded-endpoint-body observe-me ${e.method} ${e.deprecated?"deprecated":""} "
      part="section-operation ${e.elementId}"
      id="${e.elementId}"
    >
      ${"focused"===this.renderStyle&&"General ⦂"!==t?z`
            <div class="tag-container" part="section-operation-tag">
              <span class="upper" style="font-weight:bold; font-size:18px;">
                ${t}
              </span>
              ${r?z` <svg
                      class="tag-icon collapsed"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      fill="none"
                      style="stroke:var(--primary-color); vertical-align:top; cursor:pointer"
                      @click="${e=>{TG.call(this,e)}}"
                    >
                      <path
                        d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"
                      ></path>
                      <path d="M18 4v17"></path>
                      <path d="M15 18l3 3l3 -3"></path>
                    </svg>
                    <div
                      class="tag-description collapsed"
                      style="max-height:0px; overflow:hidden; margin-top:16px; border:1px solid var(--border-color)"
                    >
                      <div class="m-markdown" style="padding:8px">
                        ${SW(Je(r))}
                      </div>
                    </div>`:""}
            </div>
          `:""}
      ${e.deprecated?z`<div class="bold-text red-text">DEPRECATED</div>`:""}
      ${z` ${e.xBadges&&(null===(n=e.xBadges)||void 0===n?void 0:n.length)>0?z`
              <div
                style="display:flex; flex-wrap:wrap; margin-bottom: -24px; font-size: var(--font-size-small);"
              >
                ${e.xBadges.map((e=>z`<span
                      style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})"
                      >${e.label}</span
                    >`))}
              </div>
            `:""}
        <h2 part="section-operation-summary">
          ${e.shortSummary||`${e.method.toUpperCase()} ${e.path}`}
        </h2>
        ${e.isWebhook?z`<span
              part="section-operation-webhook"
              style="color:var(--primary-color); font-weight:bold; font-size: var(--font-size-regular);"
            >
              WEBHOOK
            </span>`:z`
              <div
                part="section-operation-webhook-method"
                class="mono-font regular-font-size"
                style="text-align:left; direction:ltr; padding: 8px 0; color:var(--fg3)"
              >
                <span
                  part="label-operation-method"
                  class="regular-font upper method-fg bold-text ${e.method}"
                  >${e.method}</span
                >
                <span part="label-operation-path">${e.path}</span>
              </div>
            `}
        <slot name="${e.elementId}"></slot>`}
      ${e.description?z`<div class="m-markdown">
            ${SW(Je(e.description))}
          </div>`:""}
      ${rG.call(this,e.security)}
      ${null!==(s=e.externalDocs)&&void 0!==s&&s.url||null!==(i=e.externalDocs)&&void 0!==i&&i.description?z`<div
            style="background-color:var(--bg3); padding:2px 8px 8px 8px; margin:8px 0; border-radius:var(--border-radius)"
          >
            <div class="m-markdown">
              ${SW(Je((null===(o=e.externalDocs)||void 0===o?void 0:o.description)||""))}
            </div>
            ${null!==(a=e.externalDocs)&&void 0!==a&&a.url?z`<a
                  style="font-family:var(--font-mono); font-size:var(--font-size-small)"
                  href="${null===(l=e.externalDocs)||void 0===l?void 0:l.url}"
                  target="_blank"
                >
                  ${null===(c=e.externalDocs)||void 0===c?void 0:c.url}
                  <div
                    style="transform: rotate(270deg) scale(1.5); display: inline-block; margin-left:5px"
                  >
                    ⇲
                  </div>
                </a>`:""}
          </div>`:""}
      ${g}
      <div class="expanded-req-resp-container">
        <api-request
          class="${this.renderStyle}-mode"
          style="width:100%;"
          webhook="${e.isWebhook}"
          method="${e.method}"
          path="${e.path}"
          .security="${e.security}"
          .parameters="${e.parameters}"
          .request_body="${e.requestBody}"
          .api_keys="${m}"
          .servers="${e.servers}"
          server-url="${(null===(p=e.servers)||void 0===p||null===(u=p[0])||void 0===u?void 0:u.url)||this.selectedServer.computedUrl}"
          fill-request-fields-with-example="${this.fillRequestFieldsWithExample}"
          allow-try="${this.allowTry}"
          show-curl-before-try="${this.showCurlBeforeTry}"
          accept="${f}"
          render-style="${this.renderStyle}"
          schema-style="${this.schemaStyle}"
          active-schema-tab="${this.defaultSchemaTab}"
          schema-expand-level="${this.schemaExpandLevel}"
          schema-description-expanded="${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only="${"never"===this.schemaHideReadOnly||e.isWebhook?"false":"true"}"
          schema-hide-write-only="${"never"===this.schemaHideWriteOnly?"false":e.isWebhook?"true":"false"}"
          fetch-credentials="${this.fetchCredentials}"
          exportparts="wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        >
        </api-request>

        ${e.callbacks?sG.call(this,e.callbacks):""}

        <api-response
          class="${this.renderStyle}-mode"
          style="width:100%;"
          webhook="${e.isWebhook}"
          .responses="${e.responses}"
          render-style="${this.renderStyle}"
          schema-style="${this.schemaStyle}"
          active-schema-tab="${this.defaultSchemaTab}"
          schema-expand-level="${this.schemaExpandLevel}"
          schema-description-expanded="${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only="${"never"===this.schemaHideReadOnly?"false":e.isWebhook?"true":"false"}"
          schema-hide-write-only="${"never"===this.schemaHideWriteOnly||e.isWebhook?"false":"true"}"
          selected-status="${Object.keys(e.responses||{})[0]||""}"
          exportparts="btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        >
        </api-response>
      </div>
    </div>
  `}function IG(){return this.resolvedSpec?z`
    ${this.resolvedSpec.tags.map((e=>z`
        <section
          id="${e.elementId}"
          part="section-tag"
          class="regular-font section-gap--read-mode observe-me"
          style="border-top:1px solid var(--primary-color);"
        >
          <div class="title tag" part="section-tag-title label-tag-title">
            ${e.name}
          </div>
          <slot name="${e.elementId}"></slot>
          <div class="regular-font-size">
            ${SW(`\n          <div class="m-markdown regular-font">\n          ${qW(Je(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:PG(e.elementId)}:void 0),z``)}\n        </div>`)}
          </div>
        </section>
        <section
          class="regular-font section-gap--read-mode"
          part="section-operations-in-tag"
        >
          ${e.paths.map((e=>CG.call(this,e)))}
        </section>
      `))}
  `:""}function RG(e){return z` <div class="divider"></div>
    <div
      class="expanded-endpoint-body observe-me ${e.name}"
      id="cmp--${e.id}"
    >
      <div style="font-weight:bold">
        ${e.name}
        <span
          style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400;"
        >
          Schema
        </span>
      </div>
      ${"table"===this.schemaStyle?z` <schema-table
            .data="${SG(e.component,{})}"
            schema-expand-level="${this.schemaExpandLevel}"
            schema-description-expanded="${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
            schema-hide-read-only="false"
            schema-hide-write-only="${this.schemaHideWriteOnly}"
            exportparts="schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          >
          </schema-table>`:z` <schema-tree
            .data="${SG(e.component,{})}"
            schema-expand-level="${this.schemaExpandLevel}"
            schema-description-expanded="${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
            schema-hide-read-only="false"
            schema-hide-write-only="${this.schemaHideWriteOnly}"
            exportparts="schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          >
          </schema-tree>`}
    </div>`}function _G(e,t){return-1!==e.id.indexOf("schemas-")?RG.call(this,e):z`
    <div class="divider"></div>
    <div
      class="expanded-endpoint-body observe-me ${e.name}"
      id="cmp--${e.id}"
    >
      ${z`
        <div style="font-weight:bold">
          ${e.name}
          <span
            style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400"
          >
            ${t}
          </span>
        </div>
        ${e.component?z` <div
              class="mono-font regular-font-size"
              style="padding: 8px 0; color:var(--fg2)"
            >
              <json-tree
                class="border tree"
                render-style="${this.renderStyle}"
                .data="${e.component}"
              >
              </json-tree>
            </div>`:""}
      `}
    </div>
  `}function FG(){return this.resolvedSpec?z`
    ${this.resolvedSpec.components.map((e=>z`
        <div
          id="cmp--${e.name.toLowerCase()}"
          class="regular-font section-gap--read-mode observe-me"
          style="border-top:1px solid var(--primary-color);"
        >
          <div class="title tag">${e.name}</div>
          <div class="regular-font-size">
            ${SW(`<div class='m-markdown regular-font'>${qW(Je(e.description?e.description:""),z``)}</div>`)}
          </div>
        </div>
        <div class="regular-font section-gap--read-mode">
          ${e.subComponents.filter((e=>!1!==e.expanded)).map((t=>_G.call(this,t,e.name)))}
        </div>
      `))}
  `:""}function DG(){const e=new Je.Renderer;return e.heading=(e,t,r,n)=>`<h${t} class="observe-me" id="overview--${n.slug(r)}">${e}</h${t}>`,e}function MG(){var e,t,r,n;return z`
    <section
      id="overview"
      part="section-overview"
      class="observe-me ${"view"===this.renderStyle?"section-gap":"section-gap--read-mode"}"
    >
      ${null!==(e=this.resolvedSpec)&&void 0!==e&&e.info?z`
            <div
              id="api-title"
              part="section-overview-title"
              style="font-size:32px"
            >
              ${this.resolvedSpec.info.title}
              ${this.resolvedSpec.info.version?z` <span
                    style="font-size:var(--font-size-small);font-weight:bold"
                  >
                    ${this.resolvedSpec.info.version}
                  </span>`:""}
            </div>
            <div
              id="api-info"
              style="font-size:calc(var(--font-size-regular) - 1px); margin-top:8px;"
            >
              ${null!==(t=this.resolvedSpec.info.contact)&&void 0!==t&&t.email?z`<span
                    >${this.resolvedSpec.info.contact.name||"Email"}:
                    <a
                      href="mailto:${this.resolvedSpec.info.contact.email}"
                      part="anchor anchor-overview"
                      >${this.resolvedSpec.info.contact.email}</a
                    >
                  </span>`:""}
              ${null!==(r=this.resolvedSpec.info.contact)&&void 0!==r&&r.url?z`<span
                    >URL:
                    <a
                      href="${this.resolvedSpec.info.contact.url}"
                      part="anchor anchor-overview"
                      >${this.resolvedSpec.info.contact.url}</a
                    ></span
                  >`:""}
              ${this.resolvedSpec.info.license?z`<span
                    >License:
                    ${this.resolvedSpec.info.license.url?z`<a
                          href="${this.resolvedSpec.info.license.url}"
                          part="anchor anchor-overview"
                          >${this.resolvedSpec.info.license.name}</a
                        >`:this.resolvedSpec.info.license.name}
                  </span>`:""}
              ${this.resolvedSpec.info.termsOfService?z`<span
                    ><a
                      href="${this.resolvedSpec.info.termsOfService}"
                      part="anchor anchor-overview"
                      >Terms of Service</a
                    ></span
                  >`:""}
              ${this.specUrl&&"true"===this.allowSpecFileDownload?z` <div
                    style="display:flex; margin:12px 0; gap:8px; justify-content: start;"
                  >
                    <button
                      class="m-btn thin-border"
                      style="min-width:170px"
                      part="btn btn-outline"
                      @click="${e=>{It(this.specUrl,"openapi-spec")}}"
                    >
                      Download OpenAPI spec
                    </button>
                    ${null!==(n=this.specUrl)&&void 0!==n&&n.trim().toLowerCase().endsWith("json")?z`<button
                          class="m-btn thin-border"
                          style="width:200px"
                          part="btn btn-outline"
                          @click="${e=>{Rt(this.specUrl)}}"
                        >
                          View OpenAPI spec (New Tab)
                        </button>`:""}
                  </div>`:""}
            </div>
            <slot name="overview"></slot>
            <div id="api-description">
              ${this.resolvedSpec.info.description?qW(Promise.resolve(Je(this.resolvedSpec.info.description,"true"===this.infoDescriptionHeadingsInNavBar?{renderer:DG()}:void 0)).then((e=>SW(`<div class="m-markdown regular-font">${e}</div>`))),z`<div class="m-markdown regular-font"></div>`):""}
            </div>
          `:""}
    </section>
  `}function qG(e){var t;const r=null===(t=this.resolvedSpec)||void 0===t?void 0:t.servers.find((t=>t.url===e));return!!r&&(this.selectedServer=r,this.requestUpdate(),this.dispatchEvent(new CustomEvent("api-server-change",{bubbles:!0,composed:!0,detail:{selectedServer:r}})),!0)}function LG(e,t){const r=[...e.currentTarget.closest("table").querySelectorAll("input, select")];let n=t.url;r.forEach((e=>{const t=new RegExp(`{${e.dataset.var}}`,"g");n=n.replace(t,e.value)})),t.computedUrl=n,this.requestUpdate()}function BG(){return this.selectedServer&&this.selectedServer.variables?z`
        <div class="table-title">SERVER VARIABLES</div>
        <table class="m-table" role="presentation">
          ${Object.entries(this.selectedServer.variables).map((e=>z`
              <tr>
                <td style="vertical-align: middle;">${e[0]}</td>
                <td>
                  ${e[1].enum?z` <select
                        data-var="${e[0]}"
                        @input=${e=>{LG.call(this,e,this.selectedServer)}}
                      >
                        ${Object.entries(e[1].enum).map((t=>e[1].default===t[1]?z` <option
                                selected
                                label=${t[1]}
                                value=${t[1]}
                              />`:z` <option label=${t[1]} value=${t[1]} />`))}
                      </select>`:z` <input
                        type="text"
                        part="textbox textbox-server-var"
                        spellcheck="false"
                        data-var="${e[0]}"
                        value="${e[1].default}"
                        @input=${e=>{LG.call(this,e,this.selectedServer)}}
                      />`}
                </td>
              </tr>
              ${e[1].description?z`<tr>
                    <td colspan="2" style="border:none">
                      <span class="m-markdown-small">
                        ${SW(Je(e[1].description))}
                      </span>
                    </td>
                  </tr>`:""}
            `))}
        </table>
      `:""}function NG(){var e,t,r;return!this.resolvedSpec||this.resolvedSpec.specLoadError?"":z` <section
    id="servers"
    part="section-servers"
    style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;"
    class="regular-font observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap"}"
  >
    <div part="section-servers-title" class="sub-title">API SERVER</div>
    <div
      class="mono-font"
      style="margin: 12px 0; font-size:calc(var(--font-size-small) + 1px);"
    >
      ${this.resolvedSpec.servers&&0!==(null===(e=this.resolvedSpec.servers)||void 0===e?void 0:e.length)?z`
            ${null===(t=this.resolvedSpec)||void 0===t?void 0:t.servers.map(((e,t)=>z`
                <input
                  type="radio"
                  name="api_server"
                  id="srvr-opt-${t}"
                  value="${e.url}"
                  @change=${()=>{qG.call(this,e.url)}}
                  .checked="${this.selectedServer.url===e.url}"
                  style="margin:4px 0; cursor:pointer"
                />
                <label style="cursor:pointer" for="srvr-opt-${t}">
                  ${e.url}
                  ${e.description?z`-
                        <span class="regular-font"
                          >${e.description}
                        </span>`:""}
                </label>
                <br />
              `))}
          `:""}
      <div class="table-title primary-text" part="label-selected-server">
        SELECTED: ${(null===(r=this.selectedServer)||void 0===r?void 0:r.computedUrl)||"none"}
      </div>
    </div>
    <slot name="servers"></slot>
    ${BG.call(this)}
  </section>`}function UG(e,t="toggle"){const r=null==e?void 0:e.closest(".nav-bar-tag-and-paths"),n=null==r?void 0:r.querySelector(".nav-bar-paths-under-tag");if(r){const e=r.classList.contains("expanded");!e||"toggle"!==t&&"collapse"!==t?e||"toggle"!==t&&"expand"!==t||(r.classList.replace("collapsed","expanded"),n.style.maxHeight=`${n.scrollHeight}px`):(n.style.maxHeight=0,r.classList.replace("expanded","collapsed"))}}function zG(e){var t,r,n,s;if("click"!==e.type&&("keyup"!==e.type||13!==e.keyCode))return;const i=e.target;e.stopPropagation(),"navigate"===(null===(t=i.dataset)||void 0===t?void 0:t.action)?this.scrollToEventTarget(e,!1):"expand-all"===(null===(r=i.dataset)||void 0===r?void 0:r.action)||"collapse-all"===(null===(n=i.dataset)||void 0===n?void 0:n.action)?function(e,t="expand-all"){if("click"!==e.type&&("keyup"!==e.type||13!==e.keyCode))return;const r=[...e.target.closest(".nav-scroll").querySelectorAll(".nav-bar-tag-and-paths")];"expand-all"===t?r.forEach((e=>{const t=e.querySelector(".nav-bar-paths-under-tag");e.classList.replace("collapsed","expanded"),t.style.maxHeight=`${null==t?void 0:t.scrollHeight}px`})):r.forEach((e=>{e.classList.replace("expanded","collapsed"),e.querySelector(".nav-bar-paths-under-tag").style.maxHeight=0}))}(e,i.dataset.action):"expand-collapse-tag"===(null===(s=i.dataset)||void 0===s?void 0:s.action)&&UG(i,"toggle")}function HG(){var e,t,r,n;return!this.resolvedSpec||this.resolvedSpec.specLoadError?z`
      <nav class="nav-bar" part="section-navbar">
        <slot name="nav-logo" class="logo"></slot>
      </nav>
    `:z`
    <nav class="nav-bar ${this.renderStyle}" part="section-navbar">
      <slot name="nav-logo" class="logo"></slot>
      ${"false"===this.allowSearch&&"false"===this.allowAdvancedSearch?"":z`
            <div
              style="display:flex; flex-direction:row; justify-content:center; align-items:stretch; padding:8px 24px 12px 24px; ${"false"===this.allowAdvancedSearch?"border-bottom: 1px solid var(--nav-hover-bg-color)":""}"
              part="section-navbar-search"
            >
              ${"false"===this.allowSearch?"":z`
                    <div style="display:flex; flex:1; line-height:22px;">
                      <input
                        id="nav-bar-search"
                        part="textbox textbox-nav-filter"
                        style="width:100%; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)"
                        type="text"
                        placeholder="Filter"
                        @change="${this.onSearchChange}"
                        spellcheck="false"
                      />
                      <div
                        style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;"
                      >
                        &#x21a9;
                      </div>
                    </div>
                    ${this.matchPaths?z` <button
                          @click="${this.onClearSearch}"
                          class="m-btn thin-border"
                          style="margin-left:5px; color:var(--nav-text-color); width:75px; padding:6px 8px;"
                          part="btn btn-outline btn-clear-filter"
                        >
                          CLEAR
                        </button>`:""}
                  `}
              ${"false"===this.allowAdvancedSearch||this.matchPaths?"":z`
                    <button
                      class="m-btn primary"
                      part="btn btn-fill btn-search"
                      style="margin-left:5px; padding:6px 8px; width:75px"
                      @click="${this.onShowSearchModalClicked}"
                    >
                      SEARCH
                    </button>
                  `}
            </div>
          `}
      ${z`<nav
        class="nav-scroll"
        tabindex="-1"
        part="section-navbar-scroll"
        @click="${e=>zG.call(this,e)}"
        @keyup="${e=>zG.call(this,e)}"
      >
        ${"false"!==this.showInfo&&this.resolvedSpec.info?z`
              ${"true"===this.infoDescriptionHeadingsInNavBar?z`
                    ${this.resolvedSpec.infoDescriptionHeaders.length>0?z`<div
                          class="nav-bar-info ${this.navActiveItemMarker}"
                          id="link-overview"
                          data-content-id="overview"
                          data-action="navigate"
                          tabindex="0"
                          part="section-navbar-item section-navbar-overview"
                        >
                          ${(null===(e=this.resolvedSpec.info)||void 0===e||null===(t=e.title)||void 0===t?void 0:t.trim())||"Overview"}
                        </div>`:""}
                    <div class="overview-headers">
                      ${this.resolvedSpec.infoDescriptionHeaders.map((e=>z` <div
                            class="nav-bar-h${e.depth} ${this.navActiveItemMarker}"
                            id="link-overview--${(new Je.Slugger).slug(e.text)}"
                            data-action="navigate"
                            data-content-id="overview--${(new Je.Slugger).slug(e.text)}"
                          >
                            ${e.text}
                          </div>`))}
                    </div>
                    ${this.resolvedSpec.infoDescriptionHeaders.length>0?z`<hr
                          style="border-top: 1px solid var(--nav-hover-bg-color); border-width:1px 0 0 0; margin: 15px 0 0 0"
                        />`:""}
                  `:z`<div
                    class="nav-bar-info ${this.navActiveItemMarker}"
                    id="link-overview"
                    data-action="navigate"
                    data-content-id="overview"
                    tabindex="0"
                  >
                    ${(null===(r=this.resolvedSpec.info)||void 0===r||null===(n=r.title)||void 0===n?void 0:n.trim())||"Overview"}
                  </div>`}
            `:""}
        ${"false"===this.allowServerSelection?"":z`<div
              class="nav-bar-info ${this.navActiveItemMarker}"
              id="link-servers"
              data-action="navigate"
              data-content-id="servers"
              tabindex="0"
              part="section-navbar-item section-navbar-servers"
            >
              API Servers
            </div>`}
        ${"false"!==this.allowAuthentication&&this.resolvedSpec.securitySchemes?z`<div
              class="nav-bar-info ${this.navActiveItemMarker}"
              id="link-auth"
              data-action="navigate"
              data-content-id="auth"
              tabindex="0"
              part="section-navbar-item section-navbar-auth"
            >
              Authentication
            </div>`:""}

        <div
          id="link-operations-top"
          class="nav-bar-section operations"
          data-action="navigate"
          data-content-id="${"focused"===this.renderStyle?"":"operations-top"}"
          part="section-navbar-item section-navbar-operations-top"
        >
          <div style="font-size:16px; display:flex; margin-left:10px;">
            ${"focused"===this.renderStyle?z` <div
                    class="nav-bar-expand-all"
                    data-action="expand-all"
                    tabindex="0"
                    title="Expand all"
                  >
                    ▸
                  </div>
                  <div
                    class="nav-bar-collapse-all"
                    data-action="collapse-all"
                    tabindex="0"
                    title="Collapse all"
                  >
                    ▸
                  </div>`:""}
          </div>
          <div class="nav-bar-section-title">OPERATIONS</div>
        </div>

        <!-- TAGS AND PATHS-->
        ${this.resolvedSpec.tags.filter((e=>e.paths.filter((e=>Tt(this.matchPaths,e,this.matchType))).length)).map((e=>{var t;return z`
              <div
                class="nav-bar-tag-and-paths ${"read"===this.renderStyle||e.expanded?"expanded":"collapsed"}"
              >
                ${"General ⦂"===e.name?z`<hr
                      style="border:none; border-top: 1px dotted var(--nav-text-color); opacity:0.3; margin:-1px 0 0 0;"
                    />`:z`
                      <div
                        class="nav-bar-tag ${this.navActiveItemMarker}"
                        part="section-navbar-item section-navbar-tag"
                        id="link-${e.elementId}"
                        data-action="${"read"===this.renderStyle||"show-description"===this.onNavTagClick?"navigate":"expand-collapse-tag"}"
                        data-content-id="${("read"===this.renderStyle?`${e.elementId}`:"show-description"===this.onNavTagClick)?`${e.elementId}`:""}"
                        data-first-path-id="${e.firstPathId}"
                        tabindex="0"
                      >
                        <div style="pointer-events:none;">${e.name}</div>
                        <div
                          class="nav-bar-tag-icon"
                          tabindex="0"
                          data-action="expand-collapse-tag"
                        ></div>
                      </div>
                    `}
                ${"true"===this.infoDescriptionHeadingsInNavBar?z` ${"focused"===this.renderStyle&&"expand-collapse"===this.onNavTagClick?"":z` <div class="tag-headers">
                          ${e.headers.map((t=>z` <div
                                class="nav-bar-h${t.depth} ${this.navActiveItemMarker}"
                                part="section-navbar-item section-navbar-h${t.depth}"
                                id="link-${e.elementId}--${(new Je.Slugger).slug(t.text)}"
                                data-action="navigate"
                                data-content-id="${e.elementId}--${(new Je.Slugger).slug(t.text)}"
                                tabindex="0"
                              >
                                ${t.text}
                              </div>`))}
                        </div>`}`:""}
                <div
                  class="nav-bar-paths-under-tag"
                  style="max-height:${e.expanded||"read"===this.renderStyle?50*((null===(t=e.paths)||void 0===t?void 0:t.length)||1):0}px;"
                >
                  <!-- Paths in each tag (endpoints) -->
                  ${e.paths.filter((e=>!this.matchPaths||Tt(this.matchPaths,e,this.matchType))).map((e=>z` <div
                          class="nav-bar-path ${this.navActiveItemMarker} ${"true"===this.usePathInNavBar?"small-font":""}"
                          part="section-navbar-item section-navbar-path"
                          data-action="navigate"
                          data-content-id="${e.elementId}"
                          id="link-${e.elementId}"
                          tabindex="0"
                        >
                          <span
                            style="display:flex; pointer-events: none; align-items:start; ${e.deprecated?"filter:opacity(0.5)":""}"
                          >
                            ${z`<span
                              class="nav-method ${this.showMethodInNavBar} ${e.method}"
                              style="pointer-events: none;"
                            >
                              ${"as-colored-block"===this.showMethodInNavBar?e.method.substring(0,3).toUpperCase():e.method.toUpperCase()}
                            </span>`}
                            ${e.isWebhook?z`<span
                                  style="font-weight:bold; pointer-events: none; margin-right:8px; font-size: calc(var(--font-size-small) - 2px)"
                                  >WEBHOOK</span
                                >`:""}
                            ${"true"===this.usePathInNavBar?z`<span
                                  style="pointer-events: none;"
                                  class="mono-font"
                                  >${e.path}</span
                                >`:e.summary||e.shortSummary}
                          </span>
                        </div>`))}
                </div>
              </div>
            `}))}

        <!-- COMPONENTS -->
        ${this.resolvedSpec.components&&"true"===this.showComponents&&"focused"===this.renderStyle?z` <div id="link-components" class="nav-bar-section components">
                <div></div>
                <div class="nav-bar-section-title">COMPONENTS</div>
              </div>
              ${this.resolvedSpec.components.map((e=>e.subComponents.length?z` <div
                        class="nav-bar-tag"
                        part="section-navbar-item section-navbar-tag"
                        data-action="navigate"
                        data-content-id="cmp--${e.name.toLowerCase()}"
                        id="link-cmp--${e.name.toLowerCase()}"
                      >
                        ${e.name}
                      </div>
                      ${e.subComponents.filter((e=>!1!==e.expanded)).map((e=>z` <div
                              class="nav-bar-path"
                              data-action="navigate"
                              data-content-id="cmp--${e.id}"
                              id="link-cmp--${e.id}"
                            >
                              <span style="pointer-events: none;">
                                ${e.name}
                              </span>
                            </div>`))}`:""))}`:""}
      </nav>`}
    </nav>
  `}function VG(e){const t=new Je.Renderer;return t.heading=(t,r,n,s)=>`<h${r} class="observe-me" id="${e}--${s.slug(n)}">${t}</h${r}>`,t}function WG(e){return z` <div
    class="regular-font section-gap--focused-mode"
    part="section-operations-in-tag"
  >
    ${e}
  </div>`}function GG(){var e;if("true"===this.showInfo)return WG(MG.call(this));const t=this.resolvedSpec.tags[0],r=null===(e=this.resolvedSpec.tags[0])||void 0===e?void 0:e.paths[0];return WG(t&&r?CG.call(this,r,t.name):"")}function JG(e){return z`
    <h1 id="${e.elementId}">${e.name}</h1>
    ${"show-description"===this.onNavTagClick&&e.description?z` <div class="m-markdown">
          ${SW(`\n            <div class="m-markdown regular-font">\n              ${Je(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:VG(e.elementId)}:void 0)}\n            </div>`)}
        </div>`:""}
  `}function KG(){if(!this.focusedElementId||!this.resolvedSpec)return;const e=this.focusedElementId;let t,r=null,n=null,s=0;if(e.startsWith("overview")&&"true"===this.showInfo)t=MG.call(this);else if("auth"===e&&"true"===this.allowAuthentication)t=tG.call(this);else if("servers"===e&&"true"===this.allowServerSelection)t=NG.call(this);else if("operations-top"===e)t=z` <div id="operations-top" class="observe-me">
      <slot name="operations-top"></slot>
    </div>`;else if(e.startsWith("cmp--")&&"true"===this.showComponents)t=FG.call(this);else if(e.startsWith("tag--")){const r=e.indexOf("--",4)>0?e.substring(0,e.indexOf("--",5)):e;n=this.resolvedSpec.tags.find((e=>e.elementId===r)),t=n?WG.call(this,JG.call(this,n)):GG.call(this)}else{for(s=0;s<this.resolvedSpec.tags.length&&(n=this.resolvedSpec.tags[s],r=this.resolvedSpec.tags[s].paths.find((t=>`${t.elementId}`===e)),!r);s+=1);if(r){UG(this.shadowRoot.getElementById(`link-${e}`),"expand"),t=WG.call(this,CG.call(this,r,n.name||"",n.description||""))}else t=GG.call(this)}return t}function ZG(e){if(e.expanded)e.expanded=!1,"true"===this.updateRoute&&this.replaceHistoryState("");else if(e.expanded=!0,"true"===this.updateRoute){const t=`${this.routePrefix||"#"}${e.elementId}`;window.location.hash!==t&&this.replaceHistoryState(e.elementId)}this.requestUpdate()}function YG(e,t="expand-all"){const r=[...e.querySelectorAll(".section-tag")];"expand-all"===t?r.map((e=>{e.classList.replace("collapsed","expanded")})):r.map((e=>{e.classList.replace("expanded","collapsed")}))}function XG(e,t="expand-all"){YG.call(this,e.target.closest(".operations-root"),t)}function QG(e,t=!1){return z`
    <summary
      @click="${t=>{ZG.call(this,e,t)}}"
      part="section-endpoint-head-${e.expanded?"expanded":"collapsed"}"
      class="endpoint-head ${e.method} ${e.deprecated?"deprecated":""} ${t||e.expanded?"expanded":"collapsed"}"
    >
      <div
        part="section-endpoint-head-method"
        class="method ${e.method} ${e.deprecated?"deprecated":""}"
      >
        ${e.method}
      </div>
      <div
        part="section-endpoint-head-path"
        class="path ${e.deprecated?"deprecated":""}"
      >
        ${e.path}
        ${e.isWebhook?z`<span
              style="font-family: var(--font-regular); font-size: var(--); font-size: var(--font-size-small); color:var(--primary-color); margin-left: 16px"
            >
              Webhook</span
            >`:""}
      </div>
      ${e.deprecated?z` <span
            style="font-size:var(--font-size-small); text-transform:uppercase; font-weight:bold; color:var(--red); margin:2px 0 0 5px;"
          >
            deprecated
          </span>`:""}
      ${this.showSummaryWhenCollapsed?z` <div
              class="only-large-screen"
              style="min-width:60px; flex:1"
            ></div>
            <div part="section-endpoint-head-description" class="descr">
              ${e.summary||e.shortSummary}
            </div>`:""}
    </summary>
  `}function eJ(e){var t,r,n,s,i,o,a;const l=new Set;for(const t in e.responses)for(const r in null===(c=e.responses[t])||void 0===c?void 0:c.content){var c;l.add(r.trim())}const p=[...l].join(", "),u=this.resolvedSpec.securitySchemes.filter((t=>{var r;return t.finalKeyValue&&(null===(r=e.security)||void 0===r?void 0:r.some((e=>t.securitySchemeId in e)))}))||[],d=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===jt&&"-"!==e.value));d&&u.push(d);const h=e.xCodeSamples?nG(e.xCodeSamples):"";return z` <div
    part="section-endpoint-body-${e.expanded?"expanded":"collapsed"}"
    class="endpoint-body ${e.method} ${e.deprecated?"deprecated":""}"
  >
    <div class="summary">
      ${e.summary?z`<div class="title" part="section-endpoint-body-title">
            ${e.summary}
            <div></div>
          </div>`:e.shortSummary!==e.description?z`<div class="title" part="section-endpoint-body-title">
              ${e.shortSummary}
            </div>`:""}
      ${e.xBadges&&(null===(t=e.xBadges)||void 0===t?void 0:t.length)>0?z`
            <div
              style="display:flex; flex-wrap:wrap;font-size: var(--font-size-small);"
            >
              ${e.xBadges.map((e=>z`<span
                    part="endpoint-badge"
                    style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})"
                    >${e.label}</span
                  >`))}
            </div>
          `:""}
      ${e.description?z`<div part="section-endpoint-body-description" class="m-markdown">
            ${SW(Je(e.description))}
          </div>`:""}
      ${null!==(r=e.externalDocs)&&void 0!==r&&r.url||null!==(n=e.externalDocs)&&void 0!==n&&n.description?z`<div
            style="background-color:var(--bg3); padding:2px 8px 8px 8px; margin:8px 0; border-radius:var(--border-radius)"
          >
            <div class="m-markdown">
              ${SW(Je((null===(s=e.externalDocs)||void 0===s?void 0:s.description)||""))}
            </div>
            ${null!==(i=e.externalDocs)&&void 0!==i&&i.url?z`<a
                  style="font-family:var(--font-mono); font-size:var(--font-size-small)"
                  href="${null===(o=e.externalDocs)||void 0===o?void 0:o.url}"
                  target="_blank"
                >
                  ${null===(a=e.externalDocs)||void 0===a?void 0:a.url}
                  <div
                    style="transform: rotate(270deg) scale(1.5); display: inline-block; margin-left:5px"
                  >
                    ⇲
                  </div>
                </a>`:""}
          </div>`:""}
      <slot name="${e.elementId}"></slot>
      ${rG.call(this,e.security)} ${h}
    </div>
    <div class="req-resp-container">
      <div
        style="display:flex; flex-direction:column"
        class="view-mode-request ${this.layout}-layout"
      >
        <api-request
          class="${this.renderStyle}-mode ${this.layout}-layout"
          style="width:100%;"
          webhook="${e.isWebhook}"
          method="${e.method}"
          path="${e.path}"
          .security="${e.security}"
          .parameters="${e.parameters}"
          .request_body="${e.requestBody}"
          .api_keys="${u}"
          .servers="${e.servers}"
          server-url="${e.servers&&e.servers.length>0?e.servers[0].url:this.selectedServer.computedUrl}"
          active-schema-tab="${this.defaultSchemaTab}"
          fill-request-fields-with-example="${this.fillRequestFieldsWithExample}"
          allow-try="${this.allowTry}"
          show-curl-before-try="${this.showCurlBeforeTry}"
          accept="${p}"
          render-style="${this.renderStyle}"
          schema-style="${this.schemaStyle}"
          schema-expand-level="${this.schemaExpandLevel}"
          schema-description-expanded="${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only="${"never"===this.schemaHideReadOnly||e.isWebhook?"false":"true"}"
          schema-hide-write-only="${"never"===this.schemaHideWriteOnly?"false":e.isWebhook?"true":"false"}"
          fetch-credentials="${this.fetchCredentials}"
          exportparts="wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        >
        </api-request>

        ${e.callbacks?sG.call(this,e.callbacks):""}
      </div>

      <api-response
        class="${this.renderStyle}-mode"
        style="width:100%;"
        webhook="${e.isWebhook}"
        .responses="${e.responses}"
        active-schema-tab="${this.defaultSchemaTab}"
        render-style="${this.renderStyle}"
        schema-style="${this.schemaStyle}"
        schema-expand-level="${this.schemaExpandLevel}"
        schema-description-expanded="${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only="${"never"===this.schemaHideReadOnly?"false":e.isWebhook?"true":"false"}"
        schema-hide-write-only="${"never"===this.schemaHideWriteOnly||e.isWebhook?"false":"true"}"
        selected-status="${Object.keys(e.responses||{})[0]||""}"
        exportparts="btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, file-input:file-input, 
          textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, anchor:anchor, anchor-param-example:anchor-param-example, btn-clear-resp:btn-clear-resp,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      >
      </api-response>
    </div>
  </div>`}function tJ(e=!0,t=!0,r=!1){return this.resolvedSpec?z` ${e?z` <div style="display:flex; justify-content:flex-end;">
        <span
          @click="${e=>XG(e,"expand-all")}"
          style="color:var(--primary-color); cursor:pointer;"
        >
          Expand all
        </span>
        &nbsp;|&nbsp;
        <span
          @click="${e=>XG(e,"collapse-all")}"
          style="color:var(--primary-color); cursor:pointer;"
        >
          Collapse all
        </span>
        &nbsp; sections
      </div>`:""}
  ${this.resolvedSpec.tags.map((e=>z`
      ${t?z` <div
            class="regular-font section-gap section-tag ${e.expanded?"expanded":"collapsed"}"
          >
            <div
              class="section-tag-header"
              @click="${()=>{e.expanded=!e.expanded,this.requestUpdate()}}"
            >
              <div
                id="${e.elementId}"
                class="sub-title tag"
                style="color:var(--primary-color)"
              >
                ${e.name}
              </div>
            </div>
            <div class="section-tag-body">
              <slot name="${e.elementId}"></slot>
              <div
                class="regular-font regular-font-size m-markdown"
                style="padding-bottom:12px"
              >
                ${SW(Je(e.description||""))}
              </div>
              ${e.paths.filter((e=>!this.matchPaths||Tt(this.matchPaths,e,this.matchType))).map((e=>z` <section
                      part="section-endpoint"
                      id="${e.elementId}"
                      class="m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}"
                    >
                      ${QG.call(this,e,r)}
                      ${r||e.expanded?eJ.call(this,e):""}
                    </section>`))}
            </div>
          </div>`:z`
            <div class="section-tag-body">
              ${e.paths.filter((e=>!this.matchPaths||Tt(this.matchPaths,e,this.matchType))).map((e=>z` <section
                      id="${e.elementId}"
                      class="m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}"
                    >
                      ${QG.call(this,e,r)}
                      ${r||e.expanded?eJ.call(this,e):""}
                    </section>`))}
            </div>
          `}
    `))}`:""}function rJ(){return z` <header
    class="row main-header regular-font"
    part="section-header"
    style="padding:8px 4px 8px 4px;min-height:48px;"
  >
    <div class="only-large-screen-flex" style="align-items: center;">
      <slot name="logo" class="logo" part="section-logo">
        ${e="height:36px;width:36px;margin-left:5px",z`
    <div style=${e}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511 512">
        <path
          d="M351 411a202 202 0 01-350 0 203 203 0 01333-24 203 203 0 0117 24zm0 0"
          fill="#adc165"
        />
        <path
          d="M334 387a202 202 0 01-216-69 202 202 0 01216 69zm78 32H85a8 8 0 01-8-8 8 8 0 018-8h327a8 8 0 017 8 8 8 0 01-7 8zm0 0"
          fill="#99aa52"
        />
        <path
          d="M374 338l-5 30a202 202 0 01-248-248 203 203 0 01253 218zm0 0"
          fill="#ffc73b"
        />
        <path
          d="M374 338a202 202 0 01-100-197 203 203 0 01100 197zm38 81l-6-2-231-231a8 8 0 0111-11l231 230a8 8 0 01-5 14zm0 0"
          fill="#efb025"
        />
        <path
          d="M311 175c0 75 40 140 101 175a202 202 0 000-350 202 202 0 00-101 175zm0 0"
          fill="#ff903e"
        />
        <path
          d="M412 419a8 8 0 01-8-8V85a8 8 0 0115 0v326a8 8 0 01-7 8zm0 0"
          fill="#e87425"
        />
      </svg>
    </div>
  `}
        <!-- m-logo style="height:36px;width:36px;margin-left:5px"></m-logo -->
      </slot>
      <div class="header-title" part="label-header-title">
        ${this.headingText}
      </div>
    </div>
    <div style="margin: 0px 8px;display:flex;flex:1">
      ${"false"===this.allowSpecUrlLoad?"":z`
            <input
              id="spec-url"
              type="text"
              style="font-size:var(--font-size-small)"
              class="header-input mono-font"
              part="textbox textbox-spec-url"
              placeholder="Spec URL"
              value="${this.specUrl||""}"
              @change="${this.onSpecUrlChange}"
              spellcheck="false"
            />
            <div
              style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;"
            >
              &#x21a9;
            </div>
          `}
      ${"false"===this.allowSpecFileLoad?"":z`
            <input
              id="spec-file"
              part="file-input"
              type="file"
              style="display:none"
              value="${this.specFile||""}"
              @change="${this.onSpecFileChange}"
              spellcheck="false"
            />
            <button
              class="m-btn primary only-large-screen"
              style="margin-left:10px;"
              part="btn btn-fill"
              @click="${this.onFileLoadClick}"
            >
              LOCAL JSON FILE
            </button>
          `}
      <slot name="header"></slot>
      ${"false"===this.allowSearch||"read focused".includes(this.renderStyle)?"":z`
            <input
              id="search"
              class="header-input"
              type="text"
              part="textbox textbox-header-filter"
              placeholder="Filter"
              @change="${this.onSearchChange}"
              style="max-width:130px;margin-left:10px;"
              spellcheck="false"
            />
            <div
              style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;"
            >
              &#x21a9;
            </div>
          `}
      ${"false"===this.allowAdvancedSearch||"read focused".includes(this.renderStyle)?"":z`
            <button
              class="m-btn primary only-large-screen"
              part="btn btn-fill btn-search"
              style="margin-left:10px;"
              @click="${this.onShowSearchModalClicked}"
            >
              Search
            </button>
          `}
    </div>
  </header>`;var e}customElements.define("api-response",class extends ce{constructor(){super(),this.selectedStatus="",this.headersForEachRespStatus={},this.mimeResponsesForEachStatus={},this.activeSchemaTab="schema"}static get properties(){return{callback:{type:String},webhook:{type:String},responses:{type:Object},parser:{type:Object},schemaStyle:{type:String,attribute:"schema-style"},renderStyle:{type:String,attribute:"render-style"},selectedStatus:{type:String,attribute:"selected-status"},selectedMimeType:{type:String,attribute:"selected-mime-type"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}static get styles(){return[yt,vt,$t,bt,gt,pG,c`
        :where(button, input[type='checkbox'], [tabindex='0']):focus-visible {
          box-shadow: var(--focus-shadow);
        }
        :where(
            input[type='text'],
            input[type='password'],
            select,
            textarea
          ):focus-visible {
          border-color: var(--primary-color);
        }
        .resp-head {
          vertical-align: middle;
          padding: 16px 0 8px;
        }
        .resp-head.divider {
          border-top: 1px solid var(--border-color);
          margin-top: 10px;
        }
        .resp-status {
          font-weight: bold;
          font-size: calc(var(--font-size-small) + 1px);
        }
        .resp-descr {
          font-size: calc(var(--font-size-small) + 1px);
          color: var(--light-fg);
          text-align: left;
        }
        .top-gap {
          margin-top: 16px;
        }
        .example-panel {
          font-size: var(--font-size-small);
          margin: 0;
        }
        .focused-mode,
        .read-mode {
          padding-top: 24px;
          margin-top: 12px;
          border-top: 1px dashed var(--border-color);
        }
      `,kt]}render(){return z`
      <div class="col regular-font response-panel ${this.renderStyle}-mode">
        <div
          class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "
        >
          ${"true"===this.callback?"CALLBACK RESPONSE":"RESPONSE"}
        </div>
        <div>
          ${this.responseTemplate()}
          <div></div>
        </div>
      </div>
    `}resetSelection(){this.selectedStatus="",this.selectedMimeType=""}responseTemplate(){if(!this.responses)return"";for(const n in this.responses){this.selectedStatus||(this.selectedStatus=n);const s={};for(const r in null===(e=this.responses[n])||void 0===e?void 0:e.content){var e,t;const i=this.responses[n].content[r];this.selectedMimeType||(this.selectedMimeType=r);const o=SG(i.schema,{}),a=EG(i.schema,r,i.examples,i.example,"true"!==this.callback&&"true"!==this.webhook,"true"===this.callback||"true"===this.webhook,r.includes("json")?"json":"text");s[r]={description:this.responses[n].description,examples:a,selectedExample:(null===(t=a[0])||void 0===t?void 0:t.exampleId)||"",schemaTree:o}}const i=[];for(const e in null===(r=this.responses[n])||void 0===r?void 0:r.headers){var r;i.push({name:e,...this.responses[n].headers[e]})}this.headersForEachRespStatus[n]=i,this.mimeResponsesForEachStatus[n]=s}return z`
      ${Object.keys(this.responses).length>1?z`<div class="row" style="flex-wrap:wrap">
              ${Object.keys(this.responses).map((e=>z` ${"$$ref"===e?"":z` <button
                        @click="${()=>{this.selectedStatus=e,this.responses[e].content&&Object.keys(this.responses[e].content)[0]?this.selectedMimeType=Object.keys(this.responses[e].content)[0]:this.selectedMimeType=void 0}}"
                        class="m-btn small ${this.selectedStatus===e?"primary":""}"
                        part="btn ${this.selectedStatus===e?"btn-response-status btn-selected-response-status":" btn-response-status"}"
                        style="margin: 8px 4px 0 0"
                      >
                        ${e}
                      </button>`}`))}
            </div>`:z`<span>${Object.keys(this.responses)[0]}</span>`}
      </div>

      ${Object.keys(this.responses).map((e=>{var t,r;return z` <div
            style="display: ${e===this.selectedStatus?"block":"none"}"
          >
            <div class="top-gap">
              <span class="resp-descr m-markdown "
                >${SW(Je((null===(t=this.responses[e])||void 0===t?void 0:t.description)||""))}</span
              >
              ${this.headersForEachRespStatus[e]&&(null===(r=this.headersForEachRespStatus[e])||void 0===r?void 0:r.length)>0?z`${this.responseHeaderListTemplate(this.headersForEachRespStatus[e])}`:""}
            </div>
            ${0===Object.keys(this.mimeResponsesForEachStatus[e]).length?"":z`
                  <div class="tab-panel col">
                    <div
                      class="tab-buttons row"
                      @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}"
                    >
                      <button
                        class="tab-btn ${"example"===this.activeSchemaTab?"active":""}"
                        data-tab="example"
                      >
                        EXAMPLE
                      </button>
                      <button
                        class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}"
                        data-tab="schema"
                      >
                        SCHEMA
                      </button>
                      <div style="flex:1"></div>
                      ${1===Object.keys(this.mimeResponsesForEachStatus[e]).length?z`<span
                            class="small-font-size gray-text"
                            style="align-self:center; margin-top:8px;"
                          >
                            ${Object.keys(this.mimeResponsesForEachStatus[e])[0]}
                          </span>`:z`${this.mimeTypeDropdownTemplate(Object.keys(this.mimeResponsesForEachStatus[e]))}`}
                    </div>
                    ${"example"===this.activeSchemaTab?z`<div class="tab-content col" style="flex:1;">
                          ${this.mimeExampleTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                        </div>`:z`<div class="tab-content col" style="flex:1;">
                          ${this.mimeSchemaTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                        </div>`}
                  </div>
                `}
          </div>`}))}
    `}responseHeaderListTemplate(e){return z` <div
        style="padding:16px 0 8px 0"
        class="resp-headers small-font-size bold-text"
      >
        RESPONSE HEADERS
      </div>
      <table
        role="presentation"
        style="border-collapse: collapse; margin-bottom:16px; border:1px solid var(--border-color); border-radius: var(--border-radius)"
        class="small-font-size mono-font"
      >
        ${e.map((e=>{var t,r;return z`
            <tr>
              <td
                style="padding:8px; vertical-align: baseline; min-width:120px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;"
              >
                ${e.name||""}
              </td>
              <td
                style="padding:4px; vertical-align: baseline; padding:0 5px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;"
              >
                ${(null===(t=e.schema)||void 0===t?void 0:t.type)||""}
              </td>
              <td
                style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color);text-overflow: ellipsis;"
              >
                <div class="m-markdown-small regular-font">
                  ${SW(Je(e.description||""))}
                </div>
              </td>
              <td
                style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;"
              >
                ${(null===(r=e.schema)||void 0===r?void 0:r.example)||""}
              </td>
            </tr>
          `}))}
      </table>`}mimeTypeDropdownTemplate(e){return z` <select
      aria-label="mime types"
      @change="${e=>{this.selectedMimeType=e.target.value}}"
      style="margin-bottom: -1px; z-index:1"
    >
      ${e.map((e=>z`<option
            value="${e}"
            ?selected="${e===this.selectedMimeType}"
          >
            ${e}
          </option>`))}
    </select>`}onSelectExample(e){[...e.target.closest(".example-panel").querySelectorAll(".example")].forEach((t=>{t.style.display=t.dataset.example===e.target.value?"block":"none"}))}mimeExampleTemplate(e){return e?z`
      ${1===e.examples.length?z` ${"json"===e.examples[0].exampleFormat?z` ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?z`<div style="padding: 4px 0">
                      ${e.examples[0].exampleSummary}
                    </div>`:""}
                ${e.examples[0].exampleDescription?z`<div class="m-markdown-small" style="padding: 4px 0">
                      ${SW(Je(e.examples[0].exampleDescription||""))}
                    </div>`:""}
                <json-tree
                  render-style="${this.renderStyle}"
                  .data="${e.examples[0].exampleValue}"
                  class="example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}"
                  exportparts="btn:btn, btn-fill:btn-fill, btn-copy:btn-copy"
                ></json-tree>`:z`
                ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?z`<div style="padding: 4px 0">
                      ${e.examples[0].exampleSummary}
                    </div>`:""}
                ${e.examples[0].exampleDescription?z`<div class="m-markdown-small" style="padding: 4px 0">
                      ${SW(Je(e.examples[0].exampleDescription||""))}
                    </div>`:""}
                <pre
                  class="example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}"
                >
${e.examples[0].exampleValue}</pre
                >
              `}`:z`
            <span
              class="example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}"
            >
              <select
                aria-label="response examples"
                style="min-width:100px; max-width:100%"
                @change="${e=>this.onSelectExample(e)}"
              >
                ${e.examples.map((t=>z`<option
                      value="${t.exampleId}"
                      ?selected=${t.exampleId===e.selectedExample}
                    >
                      ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary}
                    </option>`))}
              </select>
              ${e.examples.map((t=>z`
                  <div
                    class="example"
                    data-example="${t.exampleId}"
                    style="display: ${t.exampleId===e.selectedExample?"block":"none"}"
                  >
                    ${t.exampleSummary&&t.exampleSummary.length>80?z`<div style="padding: 4px 0">
                          ${t.exampleSummary}
                        </div>`:""}
                    ${t.exampleDescription?z`<div
                          class="m-markdown-small"
                          style="padding: 4px 0"
                        >
                          ${SW(Je(t.exampleDescription||""))}
                        </div>`:""}
                    ${"json"===t.exampleFormat?z` <json-tree
                          render-style="${this.renderStyle}"
                          .data="${t.exampleValue}"
                          exportparts="btn:btn, btn-fill:btn-fill, btn-copy:btn-copy"
                        ></json-tree>`:z`<pre>${t.exampleValue}</pre>`}
                  </div>
                `))}
            </span>
          `}
    `:z`
        <pre
          style="color:var(--red)"
          class="${"read"===this.renderStyle?"read example-panel border pad-8-16":"example-panel border-top"}"
        >
 No example provided </pre
        >
      `}mimeSchemaTemplate(e){return e?z` ${"table"===this.schemaStyle?z`
          <schema-table
            .data="${e.schemaTree}"
            schema-expand-level="${this.schemaExpandLevel}"
            schema-description-expanded="${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
            schema-hide-read-only="${this.schemaHideReadOnly}"
            schema-hide-write-only="${this.schemaHideWriteOnly}"
            exportparts="schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          >
          </schema-table>
        `:z` <schema-tree
          .data="${e.schemaTree}"
          schema-expand-level="${this.schemaExpandLevel}"
          schema-description-expanded="${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only="${this.schemaHideReadOnly}"
          schema-hide-write-only="${this.schemaHideWriteOnly}"
          exportparts="schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        >
        </schema-tree>`}`:z`
        <pre
          style="color:var(--red)"
          class="${"read"===this.renderStyle?"border pad-8-16":"border-top"}"
        >
 Schema not found</pre
        >
      `}});const nJ=c`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  .dialog-box-overlay {
    background-color: var(--overlay-bg);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: var(--dialog-z-index);
  }

  .dialog-box {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: var(--bg2);
    color: var(--fg2);
    border-radius: 4px;
    max-height: 500px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .dialog-box-header {
    position: sticky;
    top: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    min-height: 60px;
    max-height: 60px;
    border-bottom: 1px solid var(--light-border-color);
    overflow: hidden;
  }

  .dialog-box-header button {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--fg);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: -8px;
  }
  .dialog-box-header button:hover {
    border-color: var(--primary-color);
  }

  .dialog-box-content {
    padding: 16px;
    display: block;
    overflow: auto;
    height: 100%;
  }

  .dialog-box-title {
    flex-grow: 1;
    font-size: 24px;
  }
`;function sJ(){var e;return document.addEventListener("close",(()=>{this.showAdvancedSearchDialog=!1})),document.addEventListener("open",this.onOpenSearchDialog),z`
    <dialog-box heading="Search" show="${!!this.showAdvancedSearchDialog}">
      <span class="advanced-search-options">
        <input
          style="width:100%; padding-right:20px;"
          type="text"
          part="textbox textbox-search-dialog"
          placeholder="search text..."
          spellcheck="false"
          @keyup="${e=>this.onAdvancedSearch(e,400)}"
        />
        <div style="display:flex; margin:8px 0 24px;">
          <div>
            <input
              style="cursor:pointer;"
              type="checkbox"
              part="checkbox checkbox-search-dialog"
              id="search-api-path"
              checked
              @change="${e=>this.onAdvancedSearch(e,0)}"
            />
            <label for="search-api-path" style="cursor:pointer;">
              API Path
            </label>
          </div>
          <div style="margin-left: 16px;">
            <input
              style="cursor:pointer;"
              type="checkbox"
              part="checkbox checkbox-search-dialog"
              id="search-api-descr"
              checked
              @change="${e=>this.onAdvancedSearch(e,0)}"
            />
            <label style="cursor:pointer;" for="search-api-descr">
              API Description
            </label>
          </div>
          <div style="margin-left: 16px;">
            <input
              style="cursor:pointer;"
              type="checkbox"
              part="checkbox checkbox-search-dialog"
              id="search-api-params"
              @change="${e=>this.onAdvancedSearch(e,0)}"
            />
            <label style="cursor:pointer;" for="search-api-params">
              API Parameters
            </label>
          </div>
          <div style="margin-left: 16px;">
            <input
              style="cursor:pointer;"
              type="checkbox"
              part="checkbox checkbox-search-dialog"
              id="search-api-request-body"
              @change="${e=>this.onAdvancedSearch(e,0)}"
            />
            <label style="cursor:pointer;" for="search-api-request-body">
              Request Body Parameters
            </label>
          </div>
          <div style="margin-left: 16px;">
            <input
              style="cursor:pointer;"
              type="checkbox"
              part="checkbox checkbox-search-dialog"
              id="search-api-resp-descr"
              @change="${e=>this.onAdvancedSearch(e,0)}"
            />
            <label style="cursor:pointer;" for="search-api-resp-descr">
              Response Description
            </label>
          </div>
        </div>
      </span>

      ${null===(e=this.advancedSearchMatches)||void 0===e?void 0:e.map((e=>z`
          <div
            class="mono-font small-font-size hover-bg"
            style="padding: 5px; cursor: pointer; border-bottom: 1px solid var(--light-border-color); ${e.deprecated?"filter:opacity(0.5);":""}"
            data-content-id="${e.elementId}"
            tabindex="0"
            @click="${e=>{this.matchPaths="",this.showAdvancedSearchDialog=!1,this.requestUpdate(),this.scrollToEventTarget(e,!0)}}"
          >
            <span class="upper bold-text method-fg ${e.method}"
              >${e.method}</span
            >
            <span>${e.path}</span>
            <span class="regular-font gray-text">${e.summary}</span>
          </div>
        `))}
    </dialog-box>
  `}customElements.define("dialog-box",class extends ce{static get properties(){return{heading:{type:String,attribute:"heading"},show:{type:String,attribute:"show"}}}static get styles(){return[nJ]}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",(e=>{"Escape"===e.code&&this.onClose()}))}attributeChangedCallback(e,t,r){t!==r&&("heading"===e&&(this.heading=r),"show"===e&&(this.show=r,"true"===r&&document.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0,detail:this})))),super.attributeChangedCallback(e,t,r)}render(){return z` ${"true"===this.show?z` <div class="dialog-box-overlay">
          <div class="dialog-box">
            <header class="dialog-box-header">
              <span class="dialog-box-title">${this.heading}</span>
              <button type="button" @click="${this.onClose}">&times;</button>
            </header>
            <div class="dialog-box-content">
              <slot></slot>
            </div>
          </div>
        </div>`:""}`}onClose(){document.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}});const iJ={color:{inputReverseFg:"#fff",inputReverseBg:"#333",headerBg:"#444",getRgb(e){if(0===e.indexOf("#")&&(e=e.slice(1,7)),3!==e.length&&4!==e.length||(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}},luminanace(e){const t=this.getRgb(e);return.299*t.r+.587*t.g+.114*t.b},invert(e){return this.luminanace(e)>135?"#000":"#fff"},opacity(e,t){const r=this.getRgb(e);return`rgba(${r.r}, ${r.g}, ${r.b}, ${t})`},brightness(e,t){const r=this.getRgb(e);return r.r+=t,r.g+=t,r.b+=t,r.r>255?r.r=255:r.r<0&&(r.r=0),r.g>255?r.g=255:r.g<0&&(r.g=0),r.b>255?r.b=255:r.b<0&&(r.b=0),`#${r.r.toString(16).padStart(2,"0")}${r.g.toString(16).padStart(2,"0")}${r.b.toString(16).padStart(2,"0")}`},hasGoodContrast(e,t){return this.luminanace(e)-this.luminanace(t)}}};function oJ(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/i.test(e)}function aJ(e,t={}){let r={};const n=t.primaryColor?t.primaryColor:"dark"===e?"#f76b39":"#ff591e",s=iJ.color.invert(n),i=iJ.color.opacity(n,"0.4");if("dark"===e){const e=t.bg1?t.bg1:"#2a2b2c",o=t.fg1?t.fg1:"#bbb",a=t.bg2?t.bg2:iJ.color.brightness(e,5),l=t.bg3?t.bg3:iJ.color.brightness(e,17),c=t.bg3?t.bg3:iJ.color.brightness(e,35),p=t.fg2?t.fg2:iJ.color.brightness(o,-15),u=t.fg3?t.fg3:iJ.color.brightness(o,-20),d=t.fg3?t.fg3:iJ.color.brightness(o,-65),h=t.inlineCodeFg?t.inlineCodeFg:"#aaa",f="#bbb",m="#eee",y=t.headerColor?t.headerColor:iJ.color.brightness(e,10),g=t.navBgColor?t.navBgColor:iJ.color.brightness(e,10),v=t.navTextColor?t.navTextColor:iJ.color.opacity(iJ.color.invert(g),"0.50"),b=t.navHoverBgColor?t.navHoverBgColor:iJ.color.brightness(g,-15),x=t.navHoverTextColor?t.navHoverTextColor:iJ.color.invert(g),w=t.navAccentColor?t.navAccentColor:iJ.color.brightness(n,25);r={bg1:e,bg2:a,bg3:l,lightBg:c,fg1:o,fg2:p,fg3:u,lightFg:d,inlineCodeFg:h,primaryColor:n,primaryColorTrans:i,primaryColorInvert:s,selectionBg:f,selectionFg:m,overlayBg:"rgba(80, 80, 80, 0.4)",navBgColor:g,navTextColor:v,navHoverBgColor:b,navHoverTextColor:x,navAccentColor:w,navAccentTextColor:t.navAccentTextColor?t.navAccenttextColor:iJ.color.invert(w),headerColor:y,headerColorInvert:iJ.color.invert(y),headerColorDarker:iJ.color.brightness(y,-20),headerColorBorder:iJ.color.brightness(y,10),borderColor:t.borderColor||iJ.color.brightness(e,20),lightBorderColor:t.lightBorderColor||iJ.color.brightness(e,15),codeBorderColor:t.codeBorderColor||iJ.color.brightness(e,30),inputBg:t.inputBg||iJ.color.brightness(e,-5),placeHolder:t.placeHolder||iJ.color.opacity(o,"0.3"),hoverColor:t.hoverColor||iJ.color.brightness(e,-10),red:t.red?t.red:"#F06560",lightRed:t.lightRed?t.lightRed:iJ.color.brightness(e,-10),pink:t.pink?t.pink:"#ffb2b2",lightPink:t.lightPink||iJ.color.brightness(e,-10),green:t.green||"#7ec699",lightGreen:t.lightGreen||iJ.color.brightness(e,-10),blue:t.blue||"#71b7ff",lightBlue:t.lightBlue||iJ.color.brightness(e,-10),orange:t.orange?t.orange:"#f08d49",lightOrange:t.lightOrange||iJ.color.brightness(e,-10),yellow:t.yellow||"#827717",lightYellow:t.lightYellow||iJ.color.brightness(e,-10),purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||iJ.color.opacity(iJ.color.brightness(e,-15),.7),codeFg:t.codeFg||"#aaa",codePropertyColor:t.codePropertyColor||"#f8c555",codeKeywordColor:t.codeKeywordColor||"#cc99cd",codeOperatorColor:t.codeOperatorColor||"#67cdcc"}}else{const e=t.bg1?t.bg1:"#fafbfc",o=t.fg1?t.fg1:"#444444",a=t.bg2?t.bg2:iJ.color.brightness(e,-5),l=t.bg3?t.bg3:iJ.color.brightness(e,-15),c=t.bg3?t.bg3:iJ.color.brightness(e,-45),p=t.fg2?t.fg2:iJ.color.brightness(o,17),u=t.fg3?t.fg3:iJ.color.brightness(o,30),d=t.fg3?t.fg3:iJ.color.brightness(o,70),h=t.inlineCodeFg?t.inlineCodeFg:"brown",f="#444",m="#eee",y=t.headerColor?t.headerColor:iJ.color.brightness(e,-180),g=t.navBgColor?t.navBgColor:iJ.color.brightness(e,-200),v=t.navTextColor?t.navTextColor:iJ.color.opacity(iJ.color.invert(g),"0.65"),b=t.navHoverBgColor?t.navHoverBgColor:iJ.color.brightness(g,-15),x=t.navHoverTextColor?t.navHoverTextColor:iJ.color.invert(g),w=t.navAccentColor?t.navAccentColor:iJ.color.brightness(n,25);r={bg1:e,bg2:a,bg3:l,lightBg:c,fg1:o,fg2:p,fg3:u,lightFg:d,inlineCodeFg:h,primaryColor:n,primaryColorTrans:i,primaryColorInvert:s,selectionBg:f,selectionFg:m,overlayBg:"rgba(0, 0, 0, 0.4)",navBgColor:g,navTextColor:v,navHoverBgColor:b,navHoverTextColor:x,navAccentColor:w,navAccentTextColor:t.navAccentTextColor?t.navAccenttextColor:iJ.color.invert(w),headerColor:y,headerColorInvert:iJ.color.invert(y),headerColorDarker:iJ.color.brightness(y,-20),headerColorBorder:iJ.color.brightness(y,10),borderColor:t.borderColor||iJ.color.brightness(e,-38),lightBorderColor:t.lightBorderColor||iJ.color.brightness(e,-23),codeBorderColor:t.codeBorderColor||"transparent",inputBg:t.inputBg||iJ.color.brightness(e,10),placeHolder:t.placeHolder||iJ.color.brightness(d,20),hoverColor:t.hoverColor||iJ.color.brightness(e,-5),red:t.red||"#F06560",lightRed:t.lightRed||"#fff0f0",pink:t.pink?t.pink:"#990055",lightPink:t.lightPink?t.lightPink:"#ffb2b2",green:t.green||"#690",lightGreen:t.lightGreen||"#fbfff0",blue:t.blue||"#47AFE8",lightBlue:t.lightBlue||"#eff8fd",orange:t.orange||"#FF9900",lightOrange:t.lightOrange||"#fff5e6",yellow:t.yellow||"#827717",lightYellow:t.lightYellow||"#fff5cc",purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||iJ.color.opacity(iJ.color.brightness(e,-15),.7),codeFg:t.codeFg||"#666",codePropertyColor:t.codePropertyColor||"#905",codeKeywordColor:t.codeKeywordColor||"#07a",codeOperatorColor:t.codeOperatorColor||"#9a6e3a"}}return z` <style>
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    :host {
      /* Common Styles - irrespective of themes */
      --border-radius: 2px;
      --layout: ${this.layout||"row"};
      --font-mono: ${this.monoFont||'Monaco, "Andale Mono", "Roboto Mono", Consolas, monospace'};
      --font-regular: ${this.regularFont||'"Open Sans", Avenir, "Segoe UI", Arial, sans-serif'};
      --scroll-bar-width: 8px;
      --nav-item-padding: ${"relaxed"===this.navItemSpacing?"10px 16px 10px 10px":"compact"===this.navItemSpacing?"5px 16px 5px 10px":"7px 16px 7px 10px"};

      --resp-area-height: ${this.responseAreaHeight};
      --font-size-small: ${"default"===this.fontSize?"12px":"large"===this.fontSize?"13px":"14px"};
      --font-size-mono: ${"default"===this.fontSize?"13px":"large"===this.fontSize?"14px":"15px"};
      --font-size-regular: ${"default"===this.fontSize?"14px":"large"===this.fontSize?"15px":"16px"};
      --dialog-z-index: 1000;

      --focus-shadow: 0 0 0 1px transparent,
        0 0 0 3px ${r.primaryColorTrans};

      /* Theme specific styles */
      --bg: ${r.bg1};
      --bg2: ${r.bg2};
      --bg3: ${r.bg3};
      --light-bg: ${r.lightBg};
      --fg: ${r.fg1};
      --fg2: ${r.fg2};
      --fg3: ${r.fg3};
      --light-fg: ${r.lightFg};
      --selection-bg: ${r.selectionBg};
      --selection-fg: ${r.selectionFg};
      --overlay-bg: ${r.overlayBg};

      /* Border Colors */
      --border-color: ${r.borderColor};
      --light-border-color: ${r.lightBorderColor};
      --code-border-color: ${r.codeBorderColor};

      --input-bg: ${r.inputBg};
      --placeholder-color: ${r.placeHolder};
      --hover-color: ${r.hoverColor};
      --red: ${r.red};
      --light-red: ${r.lightRed};
      --pink: ${r.pink};
      --light-pink: ${r.lightPink};
      --green: ${r.green};
      --light-green: ${r.lightGreen};
      --blue: ${r.blue};
      --light-blue: ${r.lightBlue};
      --orange: ${r.orange};
      --light-orange: ${r.lightOrange};
      --yellow: ${r.yellow};
      --light-yellow: ${r.lightYellow};
      --purple: ${r.purple};
      --brown: ${r.brown};

      /* Header Color */
      --header-bg: ${r.headerColor};
      --header-fg: ${r.headerColorInvert};
      --header-color-darker: ${r.headerColorDarker};
      --header-color-border: ${r.headerColorBorder};

      /* Nav Colors */
      --nav-bg-color: ${r.navBgColor};
      --nav-text-color: ${r.navTextColor};
      --nav-hover-bg-color: ${r.navHoverBgColor};
      --nav-hover-text-color: ${r.navHoverTextColor};
      --nav-accent-color: ${r.navAccentColor};
      --nav-accent-text-color: ${r.navAccentTextColor};

      /* Nav API Method Colors*/
      --nav-get-color: ${r.blue};
      --nav-put-color: ${r.orange};
      --nav-post-color: ${r.green};
      --nav-delete-color: ${r.red};
      --nav-head-color: ${r.yellow};

      /* Primary Colors */
      --primary-color: ${r.primaryColor};
      --primary-color-invert: ${r.primaryColorInvert};
      --primary-color-trans: ${r.primaryColorTrans};

      /*Code Syntax Color*/
      --code-bg: ${r.codeBg};
      --code-fg: ${r.codeFg};
      --inline-code-fg: ${r.inlineCodeFg};
      --code-property-color: ${r.codePropertyColor};
      --code-keyword-color: ${r.codeKeywordColor};
      --code-operator-color: ${r.codeOperatorColor};
    }
  </style>`}function lJ(e=!1,t=!0,r=!0,n=!1){if(!this.resolvedSpec)return"";"true"===this.persistAuth&&GW.call(this);const s={bg1:oJ(this.bgColor)?this.bgColor:"",fg1:oJ(this.textColor)?this.textColor:"",headerColor:oJ(this.headerColor)?this.headerColor:"",primaryColor:oJ(this.primaryColor)?this.primaryColor:"",navBgColor:oJ(this.navBgColor)?this.navBgColor:"",navTextColor:oJ(this.navTextColor)?this.navTextColor:"",navHoverBgColor:oJ(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:oJ(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:oJ(this.navAccentColor)?this.navAccentColor:"",navAccentTextColor:oJ(this.navAccentTextColor)?this.navAccentTextColor:""};return this.resolvedSpec.specLoadError?e?z`
        ${"dark"===this.theme?aJ.call(this,"dark",s):aJ.call(this,"light",s)}
        <div
          style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"
        >
          ${this.resolvedSpec.info.description}
        </div>
      `:z`
      ${"dark"===this.theme?aJ.call(this,"dark",s):aJ.call(this,"light",s)}
      <!-- Header -->
      ${rJ.call(this)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)">${this.resolvedSpec.info.title}</h1>
          <div style="font-family:var(--font-mono)">
            ${this.resolvedSpec.info.description}
          </div>
        </div>
      </main>
    `:this.resolvedSpec.isSpecLoading?z`
      ${"dark"===this.theme?aJ.call(this,"dark",s):aJ.call(this,"light",s)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>
    `:z`
    ${"dark"===this.theme?aJ.call(this,"dark",s):aJ.call(this,"light",s)}

    <!-- Header -->
    ${"false"===this.showHeader?"":rJ.call(this)}

    <!-- Advanced Search -->
    ${"false"===this.allowAdvancedSearch?"":sJ.call(this)}

    <div
      id="the-main-body"
      class="body ${this.cssClasses}"
      dir="${this.pageDirection}"
    >
      <!-- Side Nav -->
      ${"read"!==this.renderStyle&&"focused"!==this.renderStyle||"true"!==this.showSideNav||!this.resolvedSpec?"":HG.call(this)}

      <!-- Main Content -->
      <main
        class="main-content regular-font"
        tabindex="-1"
        part="section-main-content"
      >
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${!0===this.loading?z`<div class="loader"></div>`:z` ${!0===this.loadFailed?z`<div style="text-align: center;margin: 16px;">
                    Unable to load the Spec
                  </div>`:z`
                    <div
                      class="operations-root"
                      @click="${e=>{this.handleHref(e)}}"
                    >
                      ${"focused"===this.renderStyle?z`${KG.call(this)}`:z`
                            ${"true"===this.showInfo?MG.call(this):""}
                            ${"true"===this.allowServerSelection?NG.call(this):""}
                            ${"true"===this.allowAuthentication?tG.call(this):""}
                            <div id="operations-top" class="observe-me">
                              <slot name="operations-top"></slot>
                            </div>
                            ${"read"===this.renderStyle?IG.call(this):tJ.call(this,t,r,n)}
                          `}
                    </div>
                  `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>
  `}const cJ={level:"container",marker:":::",renderer(e){return!!/notice|info|warning|danger/.test(e.meta.name)&&`<aside class="${e.meta.name}">${this.parser.parse(e.tokens)}</aside>`}};class pJ extends ce{constructor(){super();const e={root:this.getRootNode().host,rootMargin:"-50px 0px -50px 0px",threshold:0};this.showSummaryWhenCollapsed=!0,this.isIntersectionObserverActive=!1,this.intersectionObserver=new IntersectionObserver((e=>{this.onIntersect(e)}),e)}static get properties(){return{headingText:{type:String,attribute:"heading-text"},gotoPath:{type:String,attribute:"goto-path"},updateRoute:{type:String,attribute:"update-route"},routePrefix:{type:String,attribute:"route-prefix"},specUrl:{type:String,attribute:"spec-url"},sortTags:{type:String,attribute:"sort-tags"},generateMissingTags:{type:String,attribute:"generate-missing-tags"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},specFile:{type:String,attribute:!1},layout:{type:String},renderStyle:{type:String,attribute:"render-style"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},onNavTagClick:{type:String,attribute:"on-nav-tag-click"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowAuthentication:{type:String,attribute:"allow-authentication"},allowTry:{type:String,attribute:"allow-try"},showCurlBeforeTry:{type:String,attribute:"show-curl-before-try"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},allowAdvancedSearch:{type:String,attribute:"allow-advanced-search"},allowServerSelection:{type:String,attribute:"allow-server-selection"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showComponents:{type:String,attribute:"show-components"},pageDirection:{type:String,attribute:"page-direction"},scrollBehavior:{type:String,attribute:"scroll-behavior"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},headerColor:{type:String,attribute:"header-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},cssFile:{type:String,attribute:"css-file"},cssClasses:{type:String,attribute:"css-classes"},navBgColor:{type:String,attribute:"nav-bg-color"},navTextColor:{type:String,attribute:"nav-text-color"},navHoverBgColor:{type:String,attribute:"nav-hover-bg-color"},navHoverTextColor:{type:String,attribute:"nav-hover-text-color"},navAccentColor:{type:String,attribute:"nav-accent-color"},navAccentTextColor:{type:String,attribute:"nav-accent-text-color"},navActiveItemMarker:{type:String,attribute:"nav-active-item-marker"},navItemSpacing:{type:String,attribute:"nav-item-spacing"},showMethodInNavBar:{type:String,attribute:"show-method-in-nav-bar"},usePathInNavBar:{type:String,attribute:"use-path-in-nav-bar"},infoDescriptionHeadingsInNavBar:{type:String,attribute:"info-description-headings-in-navbar"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean},focusedElementId:{type:String},showAdvancedSearchDialog:{type:Boolean},advancedSearchMatches:{type:Object}}}static get styles(){return[yt,gt,vt,bt,xt,wt,$t,St,Et,c`
        :host {
          display: flex;
          flex-direction: column;
          min-width: 360px;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          letter-spacing: normal;
          color: var(--fg);
          background-color: var(--bg);
          font-family: var(--font-regular);
        }
        :where(button, input[type='checkbox'], [tabindex='0']):focus-visible {
          box-shadow: var(--focus-shadow);
        }
        :where(
            input[type='text'],
            input[type='password'],
            select,
            textarea
          ):focus-visible {
          border-color: var(--primary-color);
        }
        .body {
          display: flex;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        .main-content {
          margin: 0;
          padding: 0;
          display: block;
          flex: 1;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: thin;
          scrollbar-color: var(--border-color) transparent;
        }

        .main-content-inner--view-mode {
          padding: 0 8px;
        }
        .main-content::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .main-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .main-content::-webkit-scrollbar-thumb {
          background-color: var(--border-color);
        }

        .section-gap.section-tag {
          border-bottom: 1px solid var(--border-color);
        }
        .section-gap,
        .section-gap--focused-mode,
        .section-gap--read-mode {
          padding: 0px 4px;
        }
        .section-tag-header {
          position: relative;
          cursor: n-resize;
          padding: 12px 0;
        }
        .collapsed .section-tag-header:hover {
          cursor: s-resize;
        }

        .section-tag-header:hover {
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            var(--border-color),
            rgba(0, 0, 0, 0)
          );
        }

        .section-tag-header:hover::after {
          position: absolute;
          margin-left: -24px;
          font-size: 20px;
          top: calc(50% - 14px);
          color: var(--primary-color);
          content: '⬆';
        }

        .collapsed .section-tag-header::after {
          position: absolute;
          margin-left: -24px;
          font-size: 20px;
          top: calc(50% - 14px);
          color: var(--border-color);
          content: '⬇';
        }
        .collapsed .section-tag-header:hover::after {
          color: var(--primary-color);
        }

        .collapsed .section-tag-body {
          display: none;
        }

        .logo {
          height: 36px;
          width: 36px;
          margin-left: 5px;
        }
        .only-large-screen-flex,
        .only-large-screen {
          display: none;
        }
        .tag.title {
          text-transform: uppercase;
        }
        .main-header {
          background-color: var(--header-bg);
          color: var(--header-fg);
          width: 100%;
        }
        .header-title {
          font-size: calc(var(--font-size-regular) + 8px);
          padding: 0 8px;
        }
        input.header-input {
          background: var(--header-color-darker);
          color: var(--header-fg);
          border: 1px solid var(--header-color-border);
          flex: 1;
          padding-right: 24px;
          border-radius: 3px;
        }
        input.header-input::placeholder {
          opacity: 0.4;
        }
        .loader {
          margin: 16px auto 16px auto;
          border: 4px solid var(--bg3);
          border-radius: 50%;
          border-top: 4px solid var(--primary-color);
          width: 36px;
          height: 36px;
          animation: spin 2s linear infinite;
        }
        .expanded-endpoint-body {
          position: relative;
          padding: 6px 0px;
        }
        .expanded-endpoint-body .tag-description {
          background: var(--code-bg);
          border-radius: var(--border-radius);
          transition: max-height 0.2s ease-out;
        }
        .expanded-endpoint-body .tag-icon {
          transition: transform 0.2s ease-out;
        }
        .expanded-endpoint-body .tag-icon.expanded {
          transform: rotate(180deg);
        }
        .divider {
          border-top: 2px solid var(--border-color);
          margin: 24px 0;
          width: 100%;
        }

        .tooltip {
          cursor: pointer;
          border: 1px solid var(--border-color);
          border-left-width: 4px;
          margin-left: 2px;
        }
        .tooltip a {
          color: var(--fg2);
          text-decoration: none;
        }
        .tooltip-text {
          color: var(--fg2);
          max-width: 400px;
          position: absolute;
          z-index: 1;
          background-color: var(--bg2);
          visibility: hidden;

          overflow-wrap: break-word;
        }
        .tooltip:hover {
          color: var(--primary-color);
          border-color: var(--primary-color);
        }
        .tooltip:hover a:hover {
          color: var(--primary-color);
        }

        .tooltip:hover .tooltip-text {
          visibility: visible;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .nav-method {
          font-weight: bold;
          margin-right: 4px;
          font-size: calc(var(--font-size-small) - 2px);
          white-space: nowrap;
        }
        .nav-method.false {
          display: none;
        }

        .nav-method.as-colored-text.get {
          color: var(--nav-get-color);
        }
        .nav-method.as-colored-text.put {
          color: var(--nav-put-color);
        }
        .nav-method.as-colored-text.post {
          color: var(--nav-post-color);
        }
        .nav-method.as-colored-text.delete {
          color: var(--nav-delete-color);
        }
        .nav-method.as-colored-text.head,
        .nav-method.as-colored-text.patch,
        .nav-method.as-colored-text.options {
          color: var(--nav-head-color);
        }

        .nav-method.as-colored-block {
          padding: 1px 4px;
          min-width: 30px;
          border-radius: 4px 0 0 4px;
          color: #000;
        }
        .colored-block .nav-method.as-colored-block {
          outline: 1px solid;
        }

        .nav-method.as-colored-block.get {
          background-color: var(--blue);
        }
        .nav-method.as-colored-block.put {
          background-color: var(--orange);
        }
        .nav-method.as-colored-block.post {
          background-color: var(--green);
        }
        .nav-method.as-colored-block.delete {
          background-color: var(--red);
        }
        .nav-method.as-colored-block.head,
        .nav-method.as-colored-block.patch,
        .nav-method.as-colored-block.options {
          background-color: var(--yellow);
        }

        @media only screen and (min-width: 768px) {
          .nav-bar {
            width: 260px;
            display: flex;
          }
          .only-large-screen {
            display: block;
          }
          .only-large-screen-flex {
            display: flex;
          }
          .section-gap {
            padding: 0 0 0 24px;
          }
          .section-gap--focused-mode {
            padding: 24px 8px;
          }
          .section-gap--read-mode {
            padding: 24px 8px;
          }
          .endpoint-body {
            position: relative;
            padding: 36px 0 48px 0;
          }
        }

        @media only screen and (min-width: 1024px) {
          .nav-bar {
            width: ${l("default"===this.fontSize?"300px":"large"===this.fontSize?"315px":"330px")};
            display: flex;
          }
          .section-gap--focused-mode {
            padding: 12px 80px 12px 80px;
          }
          .section-gap--read-mode {
            padding: 24px 80px 12px 80px;
          }
        }
      `,kt]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.renderStyle&&"read, view, focused,".includes(`${this.renderStyle},`)||(this.renderStyle="focused"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"default, never,".includes(`${this.schemaHideReadOnly},`)||(this.schemaHideReadOnly="default"),this.schemaHideWriteOnly&&"default, never,".includes(`${this.schemaHideWriteOnly},`)||(this.schemaHideWriteOnly="default"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.responseAreaHeight||(this.responseAreaHeight="400px"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),this.allowAdvancedSearch&&"true, false,".includes(`${this.allowAdvancedSearch},`)||(this.allowAdvancedSearch="true"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.updateRoute&&"true, false,".includes(`${this.updateRoute},`)||(this.updateRoute="true"),this.routePrefix||(this.routePrefix="#"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.generateMissingTags&&"true, false,".includes(`${this.generateMissingTags},`)||(this.generateMissingTags="false"),this.sortEndpointsBy&&"method, path, summary, none,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.onNavTagClick&&"expand-collapse, show-description,".includes(`${this.onNavTagClick},`)||(this.onNavTagClick="expand-collapse"),this.navItemSpacing&&"compact, relaxed, default,".includes(`${this.navItemSpacing},`)||(this.navItemSpacing="default"),this.showMethodInNavBar&&"false, as-plain-text, as-colored-text, as-colored-block,".includes(`${this.showMethodInNavBar},`)||(this.showMethodInNavBar="false"),this.usePathInNavBar&&"true, false,".includes(`${this.usePathInNavBar},`)||(this.usePathInNavBar="false"),this.navActiveItemMarker&&"left-bar, colored-block".includes(`${this.navActiveItemMarker},`)||(this.navActiveItemMarker="left-bar"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.allowServerSelection&&"true, false,".includes(`${this.allowServerSelection},`)||(this.allowServerSelection="true"),this.allowAuthentication&&"true, false,".includes(`${this.allowAuthentication},`)||(this.allowAuthentication="true"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showComponents&&"true false".includes(this.showComponents)||(this.showComponents="false"),this.infoDescriptionHeadingsInNavBar&&"true, false,".includes(`${this.infoDescriptionHeadingsInNavBar},`)||(this.infoDescriptionHeadingsInNavBar="false"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.scrollBehavior&&"smooth, auto,".includes(`${this.scrollBehavior},`)||(this.scrollBehavior="auto"),this.showAdvancedSearchDialog||(this.showAdvancedSearchDialog=!1),this.cssFile||(this.cssFile=null),this.cssClasses||(this.cssClasses=""),Je.setOptions({highlight:(e,t)=>mt().languages[t]?mt().highlight(e,mt().languages[t],t):e}).use(ht([...dt,cJ])),window.addEventListener("hashchange",(()=>{this.scrollToPath(this.getElementIDFromURL())}),!0)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}infoDescriptionHeadingRenderer(){const e=new Je.Renderer;return e.heading=(e,t,r,n)=>`<h${t} class="observe-me" id="${n.slug(r)}">${e}</h${t}>`,e}render(){const e=document.querySelector(`link[href*="${this.cssFile}"]`);return e&&this.shadowRoot.appendChild(e.cloneNode()),lJ.call(this)}observeExpandedContent(){this.shadowRoot.querySelectorAll(".observe-me").forEach((e=>{this.intersectionObserver.observe(e)}))}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r),this.gotoPath&&!window.location.hash&&this.scrollToPath(this.gotoPath)}),0),"render-style"===e&&("read"===r?window.setTimeout((()=>{this.observeExpandedContent()}),100):this.intersectionObserver.disconnect()),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,n="",s="",i="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(n=r,s=this.getAttribute("api-key-location"),i=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(s=r,n=this.getAttribute("api-key-name"),i=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(i=r,s=this.getAttribute("api-key-location"),n=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){const e=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===jt));e?(e.name=n,e.in=s,e.value=i,e.finalKeyValue=i):this.resolvedSpec.securitySchemes.push({securitySchemeId:jt,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:n,in:s,value:i,finalKeyValue:i}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSpecUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSpecFileChange(e){this.setAttribute("spec-file",this.shadowRoot.getElementById("spec-file").value);const t=e.target.files[0],r=new FileReader;r.onload=()=>{try{const e=JSON.parse(r.result);this.loadSpec(e),this.shadowRoot.getElementById("spec-url").value=""}catch(e){console.error("RapiDoc: Unable to read or parse json")}},r.readAsText(t)}onFileLoadClick(){this.shadowRoot.getElementById("spec-file").click()}onSearchChange(e){this.matchPaths=e.target.value,this.resolvedSpec.tags.forEach((e=>e.paths.filter((t=>{this.matchPaths&&Tt(this.matchPaths,t,this.matchType)&&(e.expanded=!0)})))),this.resolvedSpec.components.forEach((e=>e.subComponents.filter((e=>{e.expanded=!1,this.matchPaths&&!function(e,t){return t.name.toLowerCase().includes(e.toLowerCase())}(this.matchPaths,e)||(e.expanded=!0)})))),this.requestUpdate()}onClearSearch(){this.shadowRoot.getElementById("nav-bar-search").value="",this.matchPaths="",this.resolvedSpec.components.forEach((e=>e.subComponents.filter((e=>{e.expanded=!0}))))}onShowSearchModalClicked(){this.showAdvancedSearchDialog=!0}async onOpenSearchDialog(e){const t=e.detail.querySelector("input");await At(0),t&&t.focus()}async loadSpec(e){if(e){this.matchPaths="";try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1;const t=await fW.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}}async afterSpecParsedAndValidated(e){for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find((e=>e.url===this.defaultApiServerUrl)))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t),this.intersectionObserver.disconnect(),"read"===this.renderStyle&&(await At(100),this.observeExpandedContent()),this.isIntersectionObserverActive=!0;const r=this.getElementIDFromURL();if(r)"view"===this.renderStyle?this.expandAndGotoOperation(r,!0,!0):this.scrollToPath(r);else if("focused"===this.renderStyle&&!this.gotoPath){var n;const e=this.showInfo?"overview":null===(n=this.resolvedSpec.tags[0])||void 0===n?void 0:n.paths[0];this.scrollToPath(e)}}getComponentBaseURL(){const{href:e}=window.location,t=this.routePrefix.replace(/(#|\/)$/,"");if(!t)return e.split("#")[0];const r=e.lastIndexOf(t);return-1===r?e:e.slice(0,r)}getElementIDFromURL(){const e=this.getComponentBaseURL();return window.location.href.replace(e+this.routePrefix,"")}replaceHistoryState(e){const t=this.getComponentBaseURL();window.history.replaceState(null,null,`${t}${this.routePrefix||"#"}${e}`)}expandAndGotoOperation(e,t=!0){if(!this.resolvedSpec)return;let r=!0;const n=-1===e.indexOf("#")?e:e.substring(1);if(n.startsWith("overview")||"servers"===n||"auth"===n)r=!1;else for(let t=0;t<(null===(s=this.resolvedSpec.tags)||void 0===s?void 0:s.length);t++){var s,i;const n=this.resolvedSpec.tags[t],o=null===(i=n.paths)||void 0===i?void 0:i.find((t=>t.elementId===e));o&&(o.expanded&&n.expanded?r=!1:(o.expanded=!0,n.expanded=!0))}t&&(r&&this.requestUpdate(),window.setTimeout((()=>{const e=this.shadowRoot.getElementById(n);e&&(e.scrollIntoView({behavior:this.scrollBehavior,block:"start"}),"true"===this.updateRoute&&this.replaceHistoryState(n))}),r?150:0))}isValidTopId(e){return e.startsWith("overview")||"servers"===e||"auth"===e}isValidPathId(e){var t,r,n,s;return!("overview"!==e||!this.showInfo)||(!("servers"!==e||!this.allowServerSelection)||(!("auth"!==e||!this.allowAuthentication)||(e.startsWith("tag--")?null===(n=this.resolvedSpec)||void 0===n||null===(s=n.tags)||void 0===s?void 0:s.find((t=>t.elementId===e)):null===(t=this.resolvedSpec)||void 0===t||null===(r=t.tags)||void 0===r?void 0:r.find((t=>t.paths.find((t=>t.elementId===e)))))))}onIntersect(e){!1!==this.isIntersectionObserverActive&&e.forEach((e=>{if(e.isIntersecting&&e.intersectionRatio>0){const t=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active"),r=this.shadowRoot.getElementById(`link-${e.target.id}`);r&&("true"===this.updateRoute&&this.replaceHistoryState(e.target.id),r.scrollIntoView({behavior:this.scrollBehavior,block:"center"}),r.classList.add("active"),r.part.add("section-navbar-active-item")),t&&t!==r&&(t.classList.remove("active"),t.part.remove("section-navbar-active-item"))}}))}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:this.scrollBehavior,block:"start"})}}async scrollToEventTarget(e,t=!0){if("click"!==e.type&&("keyup"!==e.type||13!==e.keyCode))return;const r=e.target;if(r.dataset.contentId){if(this.isIntersectionObserverActive=!1,"focused"===this.renderStyle){const e=this.shadowRoot.querySelector("api-request");e&&e.beforeNavigationFocusedMode()}this.scrollToPath(r.dataset.contentId,!0,t),setTimeout((()=>{this.isIntersectionObserverActive=!0}),300)}}async scrollToPath(e,t=!0,r=!0){if("focused"===this.renderStyle&&(this.focusedElementId=e,await At(0)),"view"===this.renderStyle)this.expandAndGotoOperation(e,t,!0);else{let t=!1;const n=this.shadowRoot.getElementById(e);if(n?(t=!0,n.scrollIntoView({behavior:this.scrollBehavior,block:"start"})):t=!1,t){if("focused"===this.renderStyle){const e=this.shadowRoot.querySelector("api-request");e&&e.afterNavigationFocusedMode();const t=this.shadowRoot.querySelector("api-response");t&&t.resetSelection()}"true"===this.updateRoute&&this.replaceHistoryState(e);const t=this.shadowRoot.getElementById(`link-${e}`);if(t){r&&t.scrollIntoView({behavior:this.scrollBehavior,block:"center"}),await At(0);const e=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active");e&&(e.classList.remove("active"),e.part.remove("active"),e.part.remove("section-navbar-active-item")),t.classList.add("active"),t.part.add("section-navbar-active-item")}}}}setHttpUserNameAndPassword(e,t,r){return zW.call(this,e,t,r)}setApiKey(e,t){return zW.call(this,e,"","",t)}removeAllSecurityKeys(){return HW.call(this)}setApiServer(e){return qG.call(this,e)}onAdvancedSearch(e,t){const r=e.target;clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>{let e;e="text"===r.type?r:r.closest(".advanced-search-options").querySelector("input[type=text]");const t=[...r.closest(".advanced-search-options").querySelectorAll("input:checked")].map((e=>e.id));this.advancedSearchMatches=function(e,t,r=[]){if(!e.trim()||0===r.length)return;const n=[];return t.forEach((t=>{t.paths.forEach((t=>{let s="";var i;if(r.includes("search-api-path")&&(s=t.path),r.includes("search-api-descr")&&(s=`${s} ${t.summary||t.description||""}`),r.includes("search-api-params")&&(s=`${s} ${(null===(i=t.parameters)||void 0===i?void 0:i.map((e=>e.name)).join(" "))||""}`),r.includes("search-api-request-body")&&t.requestBody){let e=new Set;for(const r in null===(o=t.requestBody)||void 0===o?void 0:o.content){var o,a,l;null!==(a=t.requestBody.content[r].schema)&&void 0!==a&&a.properties&&(e=Ct(null===(l=t.requestBody.content[r].schema)||void 0===l?void 0:l.properties)),s=`${s} ${[...e].join(" ")}`}}r.includes("search-api-resp-descr")&&(s=`${s} ${Object.values(t.responses).map((e=>e.description||"")).join(" ")}`),s.toLowerCase().includes(e.trim().toLowerCase())&&n.push({elementId:t.elementId,method:t.method,path:t.path,summary:t.summary||t.description||"",deprecated:t.deprecated})}))})),n}(e.value,this.resolvedSpec.tags,t)}),t)}}customElements.define("rapi-doc",pJ);customElements.define("rapi-doc-mini",class extends ce{constructor(){super(),this.isMini=!0,this.updateRoute="false",this.renderStyle="view",this.showHeader="false",this.allowAdvancedSearch="false"}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},layout:{type:String},pathsExpanded:{type:String,attribute:"paths-expanded"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},showSummaryWhenCollapsed:{type:String,attribute:"show-summary-when-collapsed"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},allowTry:{type:String,attribute:"allow-try"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean}}}static get styles(){return[yt,gt,vt,bt,xt,wt,$t,St,Et,c`
        :host {
          display: flex;
          flex-direction: column;
          min-width: 360px;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          letter-spacing: normal;
          color: var(--fg);
          background-color: var(--bg);
          font-family: var(--font-regular);
        }

        @media only screen and (min-width: 768px) {
          .only-large-screen {
            display: block;
          }
          .only-large-screen-flex {
            display: flex;
          }
        }
      `]}connectedCallback(){if(super.connectedCallback(),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.showSummaryWhenCollapsed&&"true, false,".includes(`${this.showSummaryWhenCollapsed},`)||(this.showSummaryWhenCollapsed="true"),this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",this.pathsExpanded="true"===this.pathsExpanded,(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.sortEndpointsBy&&"method, path, summary,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),Je.setOptions({highlight:(e,t)=>mt().languages[t]?mt().highlight(e,mt().languages[t],t):e})}render(){return lJ.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r)}),0),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,n="",s="",i="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(n=r,s=this.getAttribute("api-key-location"),i=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(s=r,n=this.getAttribute("api-key-name"),i=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(i=r,s=this.getAttribute("api-key-location"),n=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){const e=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===jt));e?(e.name=n,e.in=s,e.value=i,e.finalKeyValue=i):this.resolvedSpec.securitySchemes.push({apiKeyId:jt,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:n,in:s,value:i,finalKeyValue:i}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSpecUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await fW.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}setHttpUserNameAndPassword(e,t,r){return zW.call(this,e,t,r)}setApiKey(e,t){return zW.call(this,e,"","",t)}removeAllSecurityKeys(){return HW.call(this)}setApiServer(e){return qG.call(this,e)}async afterSpecParsedAndValidated(e){for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find((e=>e.url===this.defaultApiServerUrl)))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}});class uJ extends HTMLElement{connectedCallback(){this.receiveAuthParms(),window.addEventListener("storage",(e=>this.receiveStorage(e)),!0)}receiveAuthParms(){let e={};if(document.location.search){const t=new URLSearchParams(document.location.search);e={code:t.get("code"),error:t.get("error"),state:t.get("state"),responseType:"code"}}else if(window.location.hash){e={token_type:this.parseQueryString(window.location.hash.substring(1),"token_type"),access_token:this.parseQueryString(window.location.hash.substring(1),"access_token"),responseType:"token"}}window.opener?window.opener.postMessage(e,this.target):sessionStorage.setItem("rapidoc-oauth-data",JSON.stringify(e))}relayAuthParams(e){if(window.parent&&"rapidoc-oauth-data"===e.key){const t=JSON.parse(e.newValue);window.parent.postMessage(t,this.target)}}parseQueryString(e,t){const r=e.split("&");for(let e=0;e<r.length;e++){const n=r[e].split("=");if(decodeURIComponent(n[0])===t)return decodeURIComponent(n[1])}}}function dJ(){return z`
    <nav class="nav-bar" part="section-navbar">
      <slot name="nav-logo" class="logo"></slot>
      <div style="display:flex;line-height:22px; padding:8px">
        <input
          id="nav-bar-search"
          part="textbox textbox-nav-filter"
          style="width:100%; height: 26px; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)"
          type="text"
          placeholder="Filter"
          @change="${this.onSearchChange}"
          spellcheck="false"
        />
        <div
          style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;"
        >
          &#x21a9;
        </div>
      </div>
      <nav style="flex:1" class="nav-scroll" part="section-navbar-scroll">
        ${this.resolvedSpec.schemaAndExamples.map((e=>z` <div
              class="nav-bar-path"
              data-content-id="${e.elementId}"
              id="link-${e.elementId}"
              @click="${e=>{this.scrollToEventTarget(e,!1)}}"
            >
              ${e.name}
            </div>`))}
      </nav>
    </nav>
  `}function hJ(){return z`
    ${"true"===this.showInfo?MG.call(this):""}
    <div style="font-size:var(--font-size-regular);">
      ${this.resolvedSpec.schemaAndExamples.map((e=>{var t;const r=EG(e.schema,"json",e.examples,e.example,!0,!1,"json",!0);return e.selectedExample=null===(t=r[0])||void 0===t?void 0:t.exampleId,z` <section
          id="${e.elementId}"
          class="json-schema-and-example regular-font"
          style="display:flex; flex-direction: column; border:1px solid var(--border-color); margin-bottom:32px; border-top: 5px solid var(--border-color)"
        >
          <div
            style="padding:16px; border-bottom: 1px solid var(--border-color)"
          >
            <div style="font-size:var(--font-size-small); font-weight:bold">
              ${e.name}
            </div>
            <span class="json-schema-description m-markdown "
              >${SW(Je(e.description||""))}</span
            >
          </div>
          <div style="display:flex; flex-direction: row; gap:16px;">
            <div
              class="json-schema-def"
              style="flex:1; padding:16px 0 16px 16px; "
            >
              <schema-tree
                .data="${SG(e.schema,{})}"
                schema-expand-level="${this.schemaExpandLevel}"
                schema-description-expanded="${this.schemaDescriptionExpanded}"
                allow-schema-description-expand-toggle="${this.allowSchemaDescriptionExpandToggle}"
                schema-hide-read-only="false"
                schema-hide-write-only="false"
              >
              </schema-tree>
            </div>
            <div
              class="json-schema-example-panel"
              style="width:400px; background-color: var(--input-bg); padding:16px 0 16px 16px; border-left: 1px dashed var(--border-color);"
            >
              ${r.length>1?z`<select
                    style="min-width:100px; max-width:100%"
                    @change="${t=>this.onSelectExample(t,e)}"
                  >
                    ${r.map((t=>z` <option
                          value="${t.exampleId}"
                          ?selected=${t.exampleId===e.selectedExample}
                        >
                          ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary}
                        </option>`))}
                  </select>`:z`<div
                    style="font-size: var(--font-size-small);font-weight:700; margin:5px 0"
                  >
                    ${r[0].exampleSummary}
                  </div>`}
              ${r.map((t=>z` <json-tree
                    .data="${t.exampleValue}"
                    data-example="${t.exampleId}"
                    class="example"
                    style="margin-top:16px; display: ${t.exampleId===e.selectedExample?"flex":"none"}"
                  ></json-tree>`))}
            </div>
          </div>
        </section>`}))}
    </div>
  `}function fJ(e=!1){if(!this.resolvedSpec)return"";const t={bg1:oJ(this.bgColor)?this.bgColor:"",fg1:oJ(this.textColor)?this.textColor:"",headerColor:oJ(this.headerColor)?this.headerColor:"",primaryColor:oJ(this.primaryColor)?this.primaryColor:"",navBgColor:oJ(this.navBgColor)?this.navBgColor:"",navTextColor:oJ(this.navTextColor)?this.navTextColor:"",navHoverBgColor:oJ(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:oJ(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:oJ(this.navAccentColor)?this.navAccentColor:"",navAccenttextColor:oJ(this.navAccentTextColor)?this.navAccentTextColor:""};return this.resolvedSpec.specLoadError?e?z`
        ${"dark"===this.theme?aJ.call(this,"dark",t):aJ.call(this,"light",t)}
        <div
          style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"
        >
          ${this.resolvedSpec.info.description}
        </div>
      `:z`
      ${"dark"===this.theme?aJ.call(this,"dark",t):aJ.call(this,"light",t)}
      <!-- Header -->
      ${rJ.call(this)}
      <h1>Header</h1>
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)">${this.resolvedSpec.info.title}</h1>
          <div style="font-family:var(--font-mono)">
            ${this.resolvedSpec.info.description}
          </div>
        </div>
      </main>
    `:this.resolvedSpec.isSpecLoading?z`
      ${"dark"===this.theme?aJ.call(this,"dark",t):aJ.call(this,"light",t)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>
    `:z`
    ${"dark"===this.theme?aJ.call(this,"dark",t):aJ.call(this,"light",t)}

    <!-- Header -->
    ${"false"===this.showHeader?"":rJ.call(this)}

    <div
      id="the-main-body"
      class="body ${this.cssClasses}"
      dir=${this.pageDirection}
    >
      <!-- Side Nav -->
      ${dJ.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${!0===this.loading?z`<div class="loader"></div>`:z` ${!0===this.loadFailed?z`<div style="text-align: center;margin: 16px;">
                    Unable to load the Spec
                  </div>`:z`
                    <div
                      class="operations-root"
                      @click="${e=>{this.handleHref(e)}}"
                    >
                      ${hJ.call(this)}
                    </div>
                  `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>
  `}customElements.define("oauth-receiver",uJ);customElements.define("json-schema-viewer",class extends ce{constructor(){super(),this.isMini=!1,this.updateRoute="false",this.renderStyle="focused",this.showHeader="true",this.allowAdvancedSearch="false",this.selectedExampleForEachSchema={}}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},loading:{type:Boolean}}}static get styles(){return[yt,gt,vt,bt,xt,wt,$t,St,Et,c`
        :host {
          display: flex;
          flex-direction: column;
          min-width: 360px;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          letter-spacing: normal;
          color: var(--fg);
          background-color: var(--bg);
          font-family: var(--font-regular);
        }
        .body {
          display: flex;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        .nav-bar {
          width: 230px;
          display: flex;
        }

        .main-content {
          margin: 0;
          padding: 16px;
          display: block;
          flex: 1;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: thin;
          scrollbar-color: var(--border-color) transparent;
        }
        .main-content-inner--view-mode {
          padding: 0 8px;
        }
        .main-content::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .main-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .main-content::-webkit-scrollbar-thumb {
          background-color: var(--border-color);
        }
        .main-header {
          background-color: var(--header-bg);
          color: var(--header-fg);
          width: 100%;
        }
        .header-title {
          font-size: calc(var(--font-size-regular) + 8px);
          padding: 0 8px;
        }
        input.header-input {
          background: var(--header-color-darker);
          color: var(--header-fg);
          border: 1px solid var(--header-color-border);
          flex: 1;
          padding-right: 24px;
          border-radius: 3px;
        }
        input.header-input::placeholder {
          opacity: 0.4;
        }
        .loader {
          margin: 16px auto 16px auto;
          border: 4px solid var(--bg3);
          border-radius: 50%;
          border-top: 4px solid var(--primary-color);
          width: 36px;
          height: 36px;
          animation: spin 2s linear infinite;
        }
        @media only screen and (min-width: 768px) {
          .only-large-screen {
            display: block;
          }
          .only-large-screen-flex {
            display: flex;
          }
        }
      `]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.renderStyle="focused",this.pathsExpanded="true"===this.pathsExpanded,this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showHeader&&"true, false,".includes(`${this.showHeader},`)||(this.showHeader="true"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),Je.setOptions({highlight:(e,t)=>mt().languages[t]?mt().highlight(e,mt().languages[t],t):e})}render(){return fJ.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){"spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r)}),0),super.attributeChangedCallback(e,t,r)}onSpecUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSearchChange(e){this.matchPaths=e.target.value}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await fW.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}async afterSpecParsedAndValidated(e){this.resolvedSpec=e;const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}onSelectExample(e){[...e.target.closest(".json-schema-example-panel").querySelectorAll(".example")].forEach((t=>{t.style.display=t.dataset.example===e.target.value?"flex":"none"}))}async scrollToEventTarget(e){const t=e.currentTarget;if(!t.dataset.contentId)return;const r=this.shadowRoot.getElementById(t.dataset.contentId);r&&r.scrollIntoView({behavior:"auto",block:"start"})}})},742:(e,t)=>{"use strict";t.byteLength=function(e){var t=a(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,i=a(e),o=i[0],l=i[1],c=new s(function(e,t,r){return 3*(t+r)/4-r}(0,o,l)),p=0,u=l>0?o-4:o;for(r=0;r<u;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[p++]=t>>16&255,c[p++]=t>>8&255,c[p++]=255&t;2===l&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[p++]=255&t);1===l&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[p++]=t>>8&255,c[p++]=255&t);return c},t.fromByteArray=function(e){for(var t,n=e.length,s=n%3,i=[],o=16383,a=0,c=n-s;a<c;a+=o)i.push(l(e,a,a+o>c?c:a+o));1===s?(t=e[n-1],i.push(r[t>>2]+r[t<<4&63]+"==")):2===s&&(t=(e[n-2]<<8)+e[n-1],i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return i.join("")};for(var r=[],n=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0;o<64;++o)r[o]=i[o],n[i.charCodeAt(o)]=o;function a(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function l(e,t,n){for(var s,i,o=[],a=t;a<n;a+=3)s=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(r[(i=s)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return o.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},764:(e,t,r)=>{"use strict";const n=r(742),s=r(645),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.lW=l,t.h2=50;const o=2147483647;function a(e){if(e>o)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return u(e)}return c(e,t,r)}function c(e,t,r){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!l.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|m(e,t);let n=a(r);const s=n.write(e,t);s!==r&&(n=n.slice(0,s));return n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(K(e,Uint8Array)){const t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(K(e,ArrayBuffer)||e&&K(e.buffer,ArrayBuffer))return h(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(K(e,SharedArrayBuffer)||e&&K(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return l.from(n,t,r);const s=function(e){if(l.isBuffer(e)){const t=0|f(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?a(0):d(e);if("Buffer"===e.type&&Array.isArray(e.data))return d(e.data)}(e);if(s)return s;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function p(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return p(e),a(e<0?0:0|f(e))}function d(e){const t=e.length<0?0:0|f(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function h(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,l.prototype),n}function f(e){if(e>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|e}function m(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||K(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let s=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return W(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(e).length;default:if(s)return n?-1:W(e).length;t=(""+t).toLowerCase(),s=!0}}function y(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return T(this,t,r);case"utf8":case"utf-8":return O(this,t,r);case"ascii":return A(this,t,r);case"latin1":case"binary":return P(this,t,r);case"base64":return k(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function g(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function v(e,t,r,n,s){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Z(r=+r)&&(r=s?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(s)return-1;r=e.length-1}else if(r<0){if(!s)return-1;r=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:b(e,t,r,n,s);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?s?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,n,s);throw new TypeError("val must be string, number or Buffer")}function b(e,t,r,n,s){let i,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(s){let n=-1;for(i=r;i<a;i++)if(c(e,i)===c(t,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===l)return n*o}else-1!==n&&(i-=i-n),n=-1}else for(r+l>a&&(r=a-l),i=r;i>=0;i--){let r=!0;for(let n=0;n<l;n++)if(c(e,i+n)!==c(t,n)){r=!1;break}if(r)return i}return-1}function x(e,t,r,n){r=Number(r)||0;const s=e.length-r;n?(n=Number(n))>s&&(n=s):n=s;const i=t.length;let o;for(n>i/2&&(n=i/2),o=0;o<n;++o){const n=parseInt(t.substr(2*o,2),16);if(Z(n))return o;e[r+o]=n}return o}function w(e,t,r,n){return J(W(t,e.length-r),e,r,n)}function $(e,t,r,n){return J(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function S(e,t,r,n){return J(G(t),e,r,n)}function E(e,t,r,n){return J(function(e,t){let r,n,s;const i=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)r=e.charCodeAt(o),n=r>>8,s=r%256,i.push(s),i.push(n);return i}(t,e.length-r),e,r,n)}function k(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function O(e,t,r){r=Math.min(e.length,r);const n=[];let s=t;for(;s<r;){const t=e[s];let i=null,o=t>239?4:t>223?3:t>191?2:1;if(s+o<=r){let r,n,a,l;switch(o){case 1:t<128&&(i=t);break;case 2:r=e[s+1],128==(192&r)&&(l=(31&t)<<6|63&r,l>127&&(i=l));break;case 3:r=e[s+1],n=e[s+2],128==(192&r)&&128==(192&n)&&(l=(15&t)<<12|(63&r)<<6|63&n,l>2047&&(l<55296||l>57343)&&(i=l));break;case 4:r=e[s+1],n=e[s+2],a=e[s+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a,l>65535&&l<1114112&&(i=l))}}null===i?(i=65533,o=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),s+=o}return function(e){const t=e.length;if(t<=j)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=j));return r}(n)}l.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return c(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return function(e,t,r){return p(e),e<=0?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)}(e,t,r)},l.allocUnsafe=function(e){return u(e)},l.allocUnsafeSlow=function(e){return u(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(K(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),K(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let s=0,i=Math.min(r,n);s<i;++s)if(e[s]!==t[s]){r=e[s],n=t[s];break}return r<n?-1:n<r?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=l.allocUnsafe(t);let s=0;for(r=0;r<e.length;++r){let t=e[r];if(K(t,Uint8Array))s+t.length>n.length?(l.isBuffer(t)||(t=l.from(t)),t.copy(n,s)):Uint8Array.prototype.set.call(n,t,s);else{if(!l.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,s)}s+=t.length}return n},l.byteLength=m,l.prototype._isBuffer=!0,l.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)g(this,t,t+1);return this},l.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},l.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},l.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?O(this,0,e):y.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){let e="";const r=t.h2;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(l.prototype[i]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,s){if(K(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===s&&(s=this.length),t<0||r>e.length||n<0||s>this.length)throw new RangeError("out of range index");if(n>=s&&t>=r)return 0;if(n>=s)return-1;if(t>=r)return 1;if(this===e)return 0;let i=(s>>>=0)-(n>>>=0),o=(r>>>=0)-(t>>>=0);const a=Math.min(i,o),c=this.slice(n,s),p=e.slice(t,r);for(let e=0;e<a;++e)if(c[e]!==p[e]){i=c[e],o=p[e];break}return i<o?-1:o<i?1:0},l.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return v(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return v(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const s=this.length-t;if((void 0===r||r>s)&&(r=s),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return x(this,e,t,r);case"utf8":case"utf-8":return w(this,e,t,r);case"ascii":case"latin1":case"binary":return $(this,e,t,r);case"base64":return S(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const j=4096;function A(e,t,r){let n="";r=Math.min(e.length,r);for(let s=t;s<r;++s)n+=String.fromCharCode(127&e[s]);return n}function P(e,t,r){let n="";r=Math.min(e.length,r);for(let s=t;s<r;++s)n+=String.fromCharCode(e[s]);return n}function T(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let s="";for(let n=t;n<r;++n)s+=Y[e[n]];return s}function C(e,t,r){const n=e.slice(t,r);let s="";for(let e=0;e<n.length-1;e+=2)s+=String.fromCharCode(n[e]+256*n[e+1]);return s}function I(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function R(e,t,r,n,s,i){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>s||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function _(e,t,r,n,s){U(t,n,s,e,r,7);let i=Number(t&BigInt(4294967295));e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function F(e,t,r,n,s){U(t,n,s,e,r,7);let i=Number(t&BigInt(4294967295));e[r+7]=i,i>>=8,e[r+6]=i,i>>=8,e[r+5]=i,i>>=8,e[r+4]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function D(e,t,r,n,s,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function M(e,t,r,n,i){return t=+t,r>>>=0,i||D(e,0,r,4),s.write(e,t,r,n,23,4),r+4}function q(e,t,r,n,i){return t=+t,r>>>=0,i||D(e,0,r,8),s.write(e,t,r,n,52,8),r+8}l.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e],s=1,i=0;for(;++i<t&&(s*=256);)n+=this[e+i]*s;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e+--t],s=1;for(;t>0&&(s*=256);)n+=this[e+--t]*s;return n},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||I(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=X((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,s=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(s)<<BigInt(32))})),l.prototype.readBigUInt64BE=X((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],s=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(s)})),l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e],s=1,i=0;for(;++i<t&&(s*=256);)n+=this[e+i]*s;return s*=128,n>=s&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=t,s=1,i=this[e+--n];for(;n>0&&(s*=256);)i+=this[e+--n]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},l.prototype.readInt8=function(e,t){return e>>>=0,t||I(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||I(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||I(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=X((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),l.prototype.readBigInt64BE=X((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),l.prototype.readFloatLE=function(e,t){return e>>>=0,t||I(e,4,this.length),s.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||I(e,4,this.length),s.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||I(e,8,this.length),s.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||I(e,8,this.length),s.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){R(this,e,t,r,Math.pow(2,8*r)-1,0)}let s=1,i=0;for(this[t]=255&e;++i<r&&(s*=256);)this[t+i]=e/s&255;return t+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){R(this,e,t,r,Math.pow(2,8*r)-1,0)}let s=r-1,i=1;for(this[t+s]=255&e;--s>=0&&(i*=256);)this[t+s]=e/i&255;return t+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||R(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||R(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigUInt64LE=X((function(e,t=0){return _(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeBigUInt64BE=X((function(e,t=0){return F(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);R(this,e,t,r,n-1,-n)}let s=0,i=1,o=0;for(this[t]=255&e;++s<r&&(i*=256);)e<0&&0===o&&0!==this[t+s-1]&&(o=1),this[t+s]=(e/i>>0)-o&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);R(this,e,t,r,n-1,-n)}let s=r-1,i=1,o=0;for(this[t+s]=255&e;--s>=0&&(i*=256);)e<0&&0===o&&0!==this[t+s+1]&&(o=1),this[t+s]=(e/i>>0)-o&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||R(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||R(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigInt64LE=X((function(e,t=0){return _(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeBigInt64BE=X((function(e,t=0){return F(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeFloatLE=function(e,t,r){return M(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return M(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return q(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return q(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const s=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),s},l.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let s;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(s=t;s<r;++s)this[s]=e;else{const i=l.isBuffer(e)?e:l.from(e,n),o=i.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-t;++s)this[s+t]=i[s%o]}return this};const L={};function B(e,t,r){L[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function N(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function U(e,t,r,n,s,i){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let s;throw s=i>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new L.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,r){z(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||H(t,e.length-(r+1))}(n,s,i)}function z(e,t){if("number"!=typeof e)throw new L.ERR_INVALID_ARG_TYPE(t,"number",e)}function H(e,t,r){if(Math.floor(e)!==e)throw z(e,r),new L.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new L.ERR_BUFFER_OUT_OF_BOUNDS;throw new L.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}B("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),B("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),B("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,s=r;return Number.isInteger(r)&&Math.abs(r)>2**32?s=N(String(r)):"bigint"==typeof r&&(s=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(s=N(s)),s+="n"),n+=` It must be ${t}. Received ${s}`,n}),RangeError);const V=/[^+/0-9A-Za-z-_]/g;function W(e,t){let r;t=t||1/0;const n=e.length;let s=null;const i=[];for(let o=0;o<n;++o){if(r=e.charCodeAt(o),r>55295&&r<57344){if(!s){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&i.push(239,191,189);continue}s=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),s=r;continue}r=65536+(s-55296<<10|r-56320)}else s&&(t-=3)>-1&&i.push(239,191,189);if(s=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function G(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(V,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function J(e,t,r,n){let s;for(s=0;s<n&&!(s+r>=t.length||s>=e.length);++s)t[s+r]=e[s];return s}function K(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const Y=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let s=0;s<16;++s)t[n+s]=e[r]+e[s]}return t}();function X(e){return"undefined"==typeof BigInt?Q:e}function Q(){throw new Error("BigInt not supported")}},645:(e,t)=>{t.read=function(e,t,r,n,s){var i,o,a=8*s-n-1,l=(1<<a)-1,c=l>>1,p=-7,u=r?s-1:0,d=r?-1:1,h=e[t+u];for(u+=d,i=h&(1<<-p)-1,h>>=-p,p+=a;p>0;i=256*i+e[t+u],u+=d,p-=8);for(o=i&(1<<-p)-1,i>>=-p,p+=n;p>0;o=256*o+e[t+u],u+=d,p-=8);if(0===i)i=1-c;else{if(i===l)return o?NaN:1/0*(h?-1:1);o+=Math.pow(2,n),i-=c}return(h?-1:1)*o*Math.pow(2,i-n)},t.write=function(e,t,r,n,s,i){var o,a,l,c=8*i-s-1,p=(1<<c)-1,u=p>>1,d=23===s?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:i-1,f=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=p):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(o++,l/=2),o+u>=p?(a=0,o=p):o+u>=1?(a=(t*l-1)*Math.pow(2,s),o+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,s),o=0));s>=8;e[r+h]=255&a,h+=f,a/=256,s-=8);for(o=o<<s|a,c+=s;c>0;e[r+h]=255&o,h+=f,o/=256,c-=8);e[r+h-f]|=128*m}},271:function(e,t){var r,n,s;n=[],void 0===(s="function"==typeof(r=function(){"use strict";var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,r="boolean"==typeof(new RegExp).sticky;function n(e){return e&&"[object RegExp]"===t.call(e)}function s(e){return e&&"object"==typeof e&&!n(e)&&!Array.isArray(e)}function i(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function o(e){return new RegExp("|"+e).exec("").length-1}function a(e){return"("+e+")"}function l(e){return e.length?"(?:"+e.map((function(e){return"(?:"+e+")"})).join("|")+")":"(?!)"}function c(e){if("string"==typeof e)return"(?:"+i(e)+")";if(n(e)){if(e.ignoreCase)throw new Error("RegExp /i flag not allowed");if(e.global)throw new Error("RegExp /g flag is implied");if(e.sticky)throw new Error("RegExp /y flag is implied");if(e.multiline)throw new Error("RegExp /m flag is implied");return e.source}throw new Error("Not a pattern: "+e)}function p(e,t){return e.length>t?e:Array(t-e.length+1).join(" ")+e}function u(e,t){for(var r=e.length,n=0;;){var s=e.lastIndexOf("\n",r-1);if(-1===s)break;if(r=s,++n===t)break;if(0===r)break}var i=n<t?0:r+1;return e.substring(i).split("\n")}function d(e){for(var t=Object.getOwnPropertyNames(e),r=[],n=0;n<t.length;n++){var i=t[n],o=e[i],a=[].concat(o);if("include"!==i){var l=[];a.forEach((function(e){s(e)?(l.length&&r.push(f(i,l)),r.push(f(i,e)),l=[]):l.push(e)})),l.length&&r.push(f(i,l))}else for(var c=0;c<a.length;c++)r.push({include:a[c]})}return r}function h(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];if(n.include)for(var s=[].concat(n.include),i=0;i<s.length;i++)t.push({include:s[i]});else{if(!n.type)throw new Error("Rule has no type: "+JSON.stringify(n));t.push(f(n.type,n))}}return t}function f(t,r){if(s(r)||(r={match:r}),r.include)throw new Error("Matching rules cannot also include states");var i={defaultType:t,lineBreaks:!!r.error||!!r.fallback,pop:!1,next:null,push:null,error:!1,fallback:!1,value:null,type:null,shouldThrow:!1};for(var o in r)e.call(r,o)&&(i[o]=r[o]);if("string"==typeof i.type&&t!==i.type)throw new Error("Type transform cannot be a string (type '"+i.type+"' for token '"+t+"')");var a=i.match;return i.match=Array.isArray(a)?a:a?[a]:[],i.match.sort((function(e,t){return n(e)&&n(t)?0:n(t)?-1:n(e)?1:t.length-e.length})),i}function m(e){return Array.isArray(e)?h(e):d(e)}var y=f("error",{lineBreaks:!0,shouldThrow:!0});function g(e,t){for(var s=null,i=Object.create(null),p=!0,u=null,d=[],h=[],f=0;f<e.length;f++)e[f].fallback&&(p=!1);for(f=0;f<e.length;f++){var m=e[f];if(m.include)throw new Error("Inheritance is not allowed in stateless lexers");if(m.error||m.fallback){if(s)throw!m.fallback==!s.fallback?new Error("Multiple "+(m.fallback?"fallback":"error")+" rules not allowed (for token '"+m.defaultType+"')"):new Error("fallback and error are mutually exclusive (for token '"+m.defaultType+"')");s=m}var g=m.match.slice();if(p)for(;g.length&&"string"==typeof g[0]&&1===g[0].length;)i[g.shift().charCodeAt(0)]=m;if(m.pop||m.push||m.next){if(!t)throw new Error("State-switching options are not allowed in stateless lexers (for token '"+m.defaultType+"')");if(m.fallback)throw new Error("State-switching options are not allowed on fallback tokens (for token '"+m.defaultType+"')")}if(0!==g.length){p=!1,d.push(m);for(var v=0;v<g.length;v++){var b=g[v];if(n(b))if(null===u)u=b.unicode;else if(u!==b.unicode&&!1===m.fallback)throw new Error("If one rule is /u then all must be")}var x=l(g.map(c)),w=new RegExp(x);if(w.test(""))throw new Error("RegExp matches empty string: "+w);if(o(x)>0)throw new Error("RegExp has capture groups: "+w+"\nUse (?: … ) instead");if(!m.lineBreaks&&w.test("\n"))throw new Error("Rule should declare lineBreaks: "+w);h.push(a(x))}}var $=s&&s.fallback,S=r&&!$?"ym":"gm",E=r||$?"":"|";return!0===u&&(S+="u"),{regexp:new RegExp(l(h)+E,S),groups:d,fast:i,error:s||y}}function v(e){var t=g(m(e));return new $({start:t},"start")}function b(e,t,r){var n=e&&(e.push||e.next);if(n&&!r[n])throw new Error("Missing state '"+n+"' (in token '"+e.defaultType+"' of state '"+t+"')");if(e&&e.pop&&1!=+e.pop)throw new Error("pop must be 1 (in token '"+e.defaultType+"' of state '"+t+"')")}function x(e,t){var r=e.$all?m(e.$all):[];delete e.$all;var n=Object.getOwnPropertyNames(e);t||(t=n[0]);for(var s=Object.create(null),i=0;i<n.length;i++)s[y=n[i]]=m(e[y]).concat(r);for(i=0;i<n.length;i++)for(var o=s[y=n[i]],a=Object.create(null),l=0;l<o.length;l++){var c=o[l];if(c.include){var p=[l,1];if(c.include!==y&&!a[c.include]){a[c.include]=!0;var u=s[c.include];if(!u)throw new Error("Cannot include nonexistent state '"+c.include+"' (in state '"+y+"')");for(var d=0;d<u.length;d++){var h=u[d];-1===o.indexOf(h)&&p.push(h)}}o.splice.apply(o,p),l--}}var f=Object.create(null);for(i=0;i<n.length;i++){var y;f[y=n[i]]=g(s[y],!0)}for(i=0;i<n.length;i++){var v=n[i],x=f[v],w=x.groups;for(l=0;l<w.length;l++)b(w[l],v,f);var S=Object.getOwnPropertyNames(x.fast);for(l=0;l<S.length;l++)b(x.fast[S[l]],v,f)}return new $(f,t)}function w(e){for(var t="undefined"!=typeof Map,r=t?new Map:Object.create(null),n=Object.getOwnPropertyNames(e),s=0;s<n.length;s++){var i=n[s],o=e[i];(Array.isArray(o)?o:[o]).forEach((function(e){if("string"!=typeof e)throw new Error("keyword must be string (in keyword '"+i+"')");t?r.set(e,i):r[e]=i}))}return function(e){return t?r.get(e):r[e]}}var $=function(e,t){this.startState=t,this.states=e,this.buffer="",this.stack=[],this.reset()};$.prototype.reset=function(e,t){return this.buffer=e||"",this.index=0,this.line=t?t.line:1,this.col=t?t.col:1,this.queuedToken=t?t.queuedToken:null,this.queuedText=t?t.queuedText:"",this.queuedThrow=t?t.queuedThrow:null,this.setState(t?t.state:this.startState),this.stack=t&&t.stack?t.stack.slice():[],this},$.prototype.save=function(){return{line:this.line,col:this.col,state:this.state,stack:this.stack.slice(),queuedToken:this.queuedToken,queuedText:this.queuedText,queuedThrow:this.queuedThrow}},$.prototype.setState=function(e){if(e&&this.state!==e){this.state=e;var t=this.states[e];this.groups=t.groups,this.error=t.error,this.re=t.regexp,this.fast=t.fast}},$.prototype.popState=function(){this.setState(this.stack.pop())},$.prototype.pushState=function(e){this.stack.push(this.state),this.setState(e)};var S=r?function(e,t){return e.exec(t)}:function(e,t){var r=e.exec(t);return 0===r[0].length?null:r};function E(){return this.value}if($.prototype._getGroup=function(e){for(var t=this.groups.length,r=0;r<t;r++)if(void 0!==e[r+1])return this.groups[r];throw new Error("Cannot find token type for matched text")},$.prototype.next=function(){var e=this.index;if(this.queuedGroup){var t=this._token(this.queuedGroup,this.queuedText,e);return this.queuedGroup=null,this.queuedText="",t}var r=this.buffer;if(e!==r.length){if(o=this.fast[r.charCodeAt(e)])return this._token(o,r.charAt(e),e);var n=this.re;n.lastIndex=e;var s=S(n,r),i=this.error;if(null==s)return this._token(i,r.slice(e,r.length),e);var o=this._getGroup(s),a=s[0];return i.fallback&&s.index!==e?(this.queuedGroup=o,this.queuedText=a,this._token(i,r.slice(e,s.index),e)):this._token(o,a,e)}},$.prototype._token=function(e,t,r){var n=0;if(e.lineBreaks){var s=/\n/g,i=1;if("\n"===t)n=1;else for(;s.exec(t);)n++,i=s.lastIndex}var o={type:"function"==typeof e.type&&e.type(t)||e.defaultType,value:"function"==typeof e.value?e.value(t):t,text:t,toString:E,offset:r,lineBreaks:n,line:this.line,col:this.col},a=t.length;if(this.index+=a,this.line+=n,0!==n?this.col=a-i+1:this.col+=a,e.shouldThrow)throw new Error(this.formatError(o,"invalid syntax"));return e.pop?this.popState():e.push?this.pushState(e.push):e.next&&this.setState(e.next),o},"undefined"!=typeof Symbol&&Symbol.iterator){var k=function(e){this.lexer=e};k.prototype.next=function(){var e=this.lexer.next();return{value:e,done:!e}},k.prototype[Symbol.iterator]=function(){return this},$.prototype[Symbol.iterator]=function(){return new k(this)}}return $.prototype.formatError=function(e,t){if(null==e){var r=this.buffer.slice(this.index);e={text:r,offset:this.index,lineBreaks:-1===r.indexOf("\n")?0:1,line:this.line,col:this.col}}var n=2,s=Math.max(e.line-n,1),i=e.line+n,o=String(i).length,a=u(this.buffer,this.line-e.line+n+1).slice(0,5),l=[];l.push(t+" at line "+e.line+" col "+e.col+":"),l.push("");for(var c=0;c<a.length;c++){var d=a[c],h=s+c;l.push(p(String(h),o)+"  "+d),h===e.line&&l.push(p("",o+e.col+1)+"^")}return l.join("\n")},$.prototype.clone=function(){return new $(this.states,this.state)},$.prototype.has=function(e){return!0},{compile:v,states:x,error:Object.freeze({error:!0}),fallback:Object.freeze({fallback:!0}),keywords:w}})?r.apply(t,n):r)||(e.exports=s)},874:()=>{!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:r,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=n.variable[1].inside,o=0;o<s.length;o++)i[s[o]]=e.languages.bash[s[o]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism)},16:()=>{!function(e){function t(e,t){return e.replace(/<<(\d+)>>/g,(function(e,r){return"(?:"+t[+r]+")"}))}function r(e,r,n){return RegExp(t(e,r),n||"")}function n(e,t){for(var r=0;r<t;r++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var s="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",i="class enum interface record struct",o="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",a="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var c=l(i),p=RegExp(l(s+" "+i+" "+o+" "+a)),u=l(i+" "+o+" "+a),d=l(s+" "+i+" "+a),h=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),f=n(/\((?:[^()]|<<self>>)*\)/.source,2),m=/@?\b[A-Za-z_]\w*\b/.source,y=t(/<<0>>(?:\s*<<1>>)?/.source,[m,h]),g=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[u,y]),v=/\[\s*(?:,\s*)*\]/.source,b=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[g,v]),x=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[h,f,v]),w=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[x]),$=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[w,g,v]),S={keyword:p,punctuation:/[<>()?,.:[\]]/},E=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,k=/"(?:\\.|[^\\"\r\n])*"/.source,O=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[O]),lookbehind:!0,greedy:!0},{pattern:r(/(^|[^@$\\])<<0>>/.source,[k]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[g]),lookbehind:!0,inside:S},{pattern:r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[m,$]),lookbehind:!0,inside:S},{pattern:r(/(\busing\s+)<<0>>(?=\s*=)/.source,[m]),lookbehind:!0},{pattern:r(/(\b<<0>>\s+)<<1>>/.source,[c,y]),lookbehind:!0,inside:S},{pattern:r(/(\bcatch\s*\(\s*)<<0>>/.source,[g]),lookbehind:!0,inside:S},{pattern:r(/(\bwhere\s+)<<0>>/.source,[m]),lookbehind:!0},{pattern:r(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[b]),lookbehind:!0,inside:S},{pattern:r(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[$,d,m]),inside:S}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:r(/([(,]\s*)<<0>>(?=\s*:)/.source,[m]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:r(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[m]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:r(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[f]),lookbehind:!0,alias:"class-name",inside:S},"return-type":{pattern:r(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[$,g]),inside:S,alias:"class-name"},"constructor-invocation":{pattern:r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[$]),lookbehind:!0,inside:S,alias:"class-name"},"generic-method":{pattern:r(/<<0>>\s*<<1>>(?=\s*\()/.source,[m,h]),inside:{function:r(/^<<0>>/.source,[m]),generic:{pattern:RegExp(h),alias:"class-name",inside:S}}},"type-list":{pattern:r(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[c,y,m,$,p.source,f,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:r(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[y,f]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:p,"class-name":{pattern:RegExp($),greedy:!0,inside:S},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var j=k+"|"+E,A=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[j]),P=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[A]),2),T=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,C=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[g,P]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:r(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[T,C]),lookbehind:!0,greedy:!0,inside:{target:{pattern:r(/^<<0>>(?=\s*:)/.source,[T]),alias:"keyword"},"attribute-arguments":{pattern:r(/\(<<0>>*\)/.source,[P]),inside:e.languages.csharp},"class-name":{pattern:RegExp(g),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var I=/:[^}\r\n]+/.source,R=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[A]),2),_=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[R,I]),F=n(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[j]),2),D=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[F,I]);function M(t,n){return{interpolation:{pattern:r(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[t]),lookbehind:!0,inside:{"format-string":{pattern:r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[n,I]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:r(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[_]),lookbehind:!0,greedy:!0,inside:M(_,R)},{pattern:r(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[D]),lookbehind:!0,greedy:!0,inside:M(D,F)}],char:{pattern:RegExp(E),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(Prism)},251:()=>{!function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(Prism)},46:()=>{Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go["class-name"]},57:()=>{!function(e){function t(e){return RegExp("(^(?:"+e+"):[ \t]*(?![ \t]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:t(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:t(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:t(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:t(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var r,n=e.languages,s={"application/javascript":n.javascript,"application/json":n.json||n.javascript,"application/xml":n.xml,"text/xml":n.xml,"text/html":n.html,"text/css":n.css,"text/plain":n.plain},i={"application/json":!0,"application/xml":!0};function o(e){var t=e.replace(/^[a-z]+\//,"");return"(?:"+e+"|"+("\\w+/(?:[\\w.-]+\\+)+"+t+"(?![+\\w.-])")+")"}for(var a in s)if(s[a]){r=r||{};var l=i[a]?o(a):a;r[a.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:s[a]}}r&&e.languages.insertBefore("http","header",r)}(Prism)},503:()=>{!function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,r=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,n={pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[n,{pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:n.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+r+/[A-Z]\w*\b/.source),lookbehind:!0,inside:n.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":n,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+r+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:n.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+r+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:n.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)},277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},366:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},358:()=>{!function(e){var t=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+r.source+"(?:[ \t]+"+t.source+")?|"+t.source+"(?:[ \t]+"+r.source+")?)",s=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,(function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source})),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function o(e,t){t=(t||"").replace(/m/g,"")+"m";var r=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,(function(){return n})).replace(/<<value>>/g,(function(){return e}));return RegExp(r,t)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,(function(){return n}))),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,(function(){return n})).replace(/<<key>>/g,(function(){return"(?:"+s+"|"+i+")"}))),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:o(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:o(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:o(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:o(i),lookbehind:!0,greedy:!0},number:{pattern:o(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(Prism)},660:(e,t,r)=>{var n=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,n={},s={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++r}),e.__id},clone:function e(t,r){var n,i;switch(r=r||{},s.util.type(t)){case"Object":if(i=s.util.objId(t),r[i])return r[i];for(var o in n={},r[i]=n,t)t.hasOwnProperty(o)&&(n[o]=e(t[o],r));return n;case"Array":return i=s.util.objId(t),r[i]?r[i]:(n=[],r[i]=n,t.forEach((function(t,s){n[s]=e(t,r)})),n);default:return t}},getLanguage:function(e){for(;e;){var r=t.exec(e.className);if(r)return r[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,r){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+r)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==e)return t[r]}return null}},isActive:function(e,t,r){for(var n="no-"+t;e;){var s=e.classList;if(s.contains(t))return!0;if(s.contains(n))return!1;e=e.parentElement}return!!r}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var r=s.util.clone(s.languages[e]);for(var n in t)r[n]=t[n];return r},insertBefore:function(e,t,r,n){var i=(n=n||s.languages)[e],o={};for(var a in i)if(i.hasOwnProperty(a)){if(a==t)for(var l in r)r.hasOwnProperty(l)&&(o[l]=r[l]);r.hasOwnProperty(a)||(o[a]=i[a])}var c=n[e];return n[e]=o,s.languages.DFS(s.languages,(function(t,r){r===c&&t!=e&&(this[t]=o)})),o},DFS:function e(t,r,n,i){i=i||{};var o=s.util.objId;for(var a in t)if(t.hasOwnProperty(a)){r.call(t,a,t[a],n||a);var l=t[a],c=s.util.type(l);"Object"!==c||i[o(l)]?"Array"!==c||i[o(l)]||(i[o(l)]=!0,e(l,r,a,i)):(i[o(l)]=!0,e(l,r,null,i))}}},plugins:{},highlightAll:function(e,t){s.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var n={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),s.hooks.run("before-all-elements-highlight",n);for(var i,o=0;i=n.elements[o++];)s.highlightElement(i,!0===t,n.callback)},highlightElement:function(t,r,n){var i=s.util.getLanguage(t),o=s.languages[i];s.util.setLanguage(t,i);var a=t.parentElement;a&&"pre"===a.nodeName.toLowerCase()&&s.util.setLanguage(a,i);var l={element:t,language:i,grammar:o,code:t.textContent};function c(e){l.highlightedCode=e,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,s.hooks.run("after-highlight",l),s.hooks.run("complete",l),n&&n.call(l.element)}if(s.hooks.run("before-sanity-check",l),(a=l.element.parentElement)&&"pre"===a.nodeName.toLowerCase()&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!l.code)return s.hooks.run("complete",l),void(n&&n.call(l.element));if(s.hooks.run("before-highlight",l),l.grammar)if(r&&e.Worker){var p=new Worker(s.filename);p.onmessage=function(e){c(e.data)},p.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(s.highlight(l.code,l.grammar,l.language));else c(s.util.encode(l.code))},highlight:function(e,t,r){var n={code:e,grammar:t,language:r};if(s.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=s.tokenize(n.code,n.grammar),s.hooks.run("after-tokenize",n),i.stringify(s.util.encode(n.tokens),n.language)},tokenize:function(e,t){var r=t.rest;if(r){for(var n in r)t[n]=r[n];delete t.rest}var s=new l;return c(s,s.head,e),a(e,s,t,s.head,0),function(e){var t=[],r=e.head.next;for(;r!==e.tail;)t.push(r.value),r=r.next;return t}(s)},hooks:{all:{},add:function(e,t){var r=s.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=s.hooks.all[e];if(r&&r.length)for(var n,i=0;n=r[i++];)n(t)}},Token:i};function i(e,t,r,n){this.type=e,this.content=t,this.alias=r,this.length=0|(n||"").length}function o(e,t,r,n){e.lastIndex=t;var s=e.exec(r);if(s&&n&&s[1]){var i=s[1].length;s.index+=i,s[0]=s[0].slice(i)}return s}function a(e,t,r,n,l,u){for(var d in r)if(r.hasOwnProperty(d)&&r[d]){var h=r[d];h=Array.isArray(h)?h:[h];for(var f=0;f<h.length;++f){if(u&&u.cause==d+","+f)return;var m=h[f],y=m.inside,g=!!m.lookbehind,v=!!m.greedy,b=m.alias;if(v&&!m.pattern.global){var x=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,x+"g")}for(var w=m.pattern||m,$=n.next,S=l;$!==t.tail&&!(u&&S>=u.reach);S+=$.value.length,$=$.next){var E=$.value;if(t.length>e.length)return;if(!(E instanceof i)){var k,O=1;if(v){if(!(k=o(w,S,e,g))||k.index>=e.length)break;var j=k.index,A=k.index+k[0].length,P=S;for(P+=$.value.length;j>=P;)P+=($=$.next).value.length;if(S=P-=$.value.length,$.value instanceof i)continue;for(var T=$;T!==t.tail&&(P<A||"string"==typeof T.value);T=T.next)O++,P+=T.value.length;O--,E=e.slice(S,P),k.index-=S}else if(!(k=o(w,0,E,g)))continue;j=k.index;var C=k[0],I=E.slice(0,j),R=E.slice(j+C.length),_=S+E.length;u&&_>u.reach&&(u.reach=_);var F=$.prev;if(I&&(F=c(t,F,I),S+=I.length),p(t,F,O),$=c(t,F,new i(d,y?s.tokenize(C,y):C,b,C)),R&&c(t,$,R),O>1){var D={cause:d+","+f,reach:_};a(e,t,r,$.prev,S,D),u&&D.reach>u.reach&&(u.reach=D.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,r){var n=t.next,s={value:r,prev:t,next:n};return t.next=s,n.prev=s,e.length++,s}function p(e,t,r){for(var n=t.next,s=0;s<r&&n!==e.tail;s++)n=n.next;t.next=n,n.prev=t,e.length-=s}if(e.Prism=s,i.stringify=function e(t,r){if("string"==typeof t)return t;if(Array.isArray(t)){var n="";return t.forEach((function(t){n+=e(t,r)})),n}var i={type:t.type,content:e(t.content,r),tag:"span",classes:["token",t.type],attributes:{},language:r},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),s.hooks.run("wrap",i);var a="";for(var l in i.attributes)a+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+a+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(s.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var r=JSON.parse(t.data),n=r.language,i=r.code,o=r.immediateClose;e.postMessage(s.highlight(i,s.languages[n],n)),o&&e.close()}),!1),s):s;var u=s.util.currentScript();function d(){s.manual||s.highlightAll()}if(u&&(s.filename=u.src,u.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var h=document.readyState;"loading"===h||"interactive"===h&&u&&u.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return s}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==r.g&&(r.g.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(void 0!==n&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",r="loading",s="loaded",i="pre[data-src]:not(["+t+'="'+s+'"]):not(['+t+'="'+r+'"])';n.hooks.add("before-highlightall",(function(e){e.selector+=", "+i})),n.hooks.add("before-sanity-check",(function(o){var a=o.element;if(a.matches(i)){o.code="",a.setAttribute(t,r);var l=a.appendChild(document.createElement("CODE"));l.textContent="Loading…";var c=a.getAttribute("data-src"),p=o.language;if("none"===p){var u=(/\.(\w+)$/.exec(c)||[,"none"])[1];p=e[u]||u}n.util.setLanguage(l,p),n.util.setLanguage(a,p);var d=n.plugins.autoloader;d&&d.loadLanguages(p),function(e,t,r){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){4==n.readyState&&(n.status<400&&n.responseText?t(n.responseText):n.status>=400?r("✖ Error "+n.status+" while fetching file: "+n.statusText):r("✖ Error: File does not exist or is empty"))},n.send(null)}(c,(function(e){a.setAttribute(t,s);var r=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var r=Number(t[1]),n=t[2],s=t[3];return n?s?[r,Number(s)]:[r,void 0]:[r,r]}}(a.getAttribute("data-range"));if(r){var i=e.split(/\r\n?|\n/g),o=r[0],c=null==r[1]?i.length:r[1];o<0&&(o+=i.length),o=Math.max(0,Math.min(o-1,i.length)),c<0&&(c+=i.length),c=Math.max(0,Math.min(c,i.length)),e=i.slice(o,c).join("\n"),a.hasAttribute("data-start")||a.setAttribute("data-start",String(o+1))}l.textContent=e,n.highlightElement(l)}),(function(e){a.setAttribute(t,"failed"),l.textContent=e}))}})),n.plugins.fileHighlight={highlight:function(e){for(var t,r=(e||document).querySelectorAll(i),s=0;t=r[s++];)n.highlightElement(t)}};var o=!1;n.fileHighlight=function(){o||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),o=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}}()},464:e=>{"use strict";var t,r="";e.exports=function(e,n){if("string"!=typeof e)throw new TypeError("expected a string");if(1===n)return e;if(2===n)return e+e;var s=e.length*n;if(t!==e||void 0===t)t=e,r="";else if(r.length>=s)return r.substr(0,s);for(;s>r.length&&n>1;)1&n&&(r+=e),n>>=1,e+=e;return r=(r+=e).substr(0,s)}},131:(e,t,r)=>{"use strict";var n=r(464),s=function(e){return/<\/+[^>]+>/.test(e)},i=function(e){return/<[^>]+\/>/.test(e)},o=function(e){return function(e){return/<[^>!]+>/.test(e)}(e)&&!s(e)&&!i(e)};function a(e){return s(e)?"ClosingTag":o(e)?"OpeningTag":i(e)?"SelfClosingTag":"Text"}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.indentor,s=t.textNodesOnSameLine,i=0,o=[];r=r||"    ";var l,c,p=(l=e,(c=l,c.split(/(<\/?[^>]+>)/g).filter((function(e){return""!==e.trim()}))).map((function(e){return{value:e,type:a(e)}}))).map((function(e,t,a){var l=e.value,c=e.type;"ClosingTag"===c&&i--;var p=n(r,i),u=p+l;if("OpeningTag"===c&&i++,s){var d=a[t-1],h=a[t-2];"ClosingTag"===c&&"Text"===d.type&&"OpeningTag"===h.type&&(u=""+p+h.value+d.value+l,o.push(t-2,t-1))}return u}));return o.forEach((function(e){return p[e]=null})),p.filter((function(e){return!!e})).join("\n")}}},n={};function s(e){var t=n[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var i=n[e]={exports:{}};try{var o={id:e,module:i,factory:r[e],require:s};s.i.forEach((function(e){e(o)})),i=o.module,o.factory.call(i.exports,i,i.exports,o.require)}catch(e){throw i.error=e,e}return i.exports}s.m=r,s.c=n,s.i=[],s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.hu=e=>e+"."+s.h()+".hot-update.js",s.hmrF=()=>"main."+s.h()+".hot-update.json",s.h=()=>"30b03e8e142339b49ce1",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="rapidoc:",s.l=(r,n,i,o)=>{if(e[r])e[r].push(n);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var u=c[p];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+i){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[n];var d=(t,n)=>{a.onerror=a.onload=null,clearTimeout(h);var s=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((e=>e(n))),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}},(()=>{var e,t,r,n={},i=s.c,o=[],a=[],l="idle",c=0,p=[];function u(e){l=e;for(var t=[],r=0;r<a.length;r++)t[r]=a[r].call(null,e);return Promise.all(t)}function d(){0==--c&&u("ready").then((function(){if(0===c){var e=p;p=[];for(var t=0;t<e.length;t++)e[t]()}}))}function h(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return u("check").then(s.hmrM).then((function(r){return r?u("prepare").then((function(){var n=[];return t=[],Promise.all(Object.keys(s.hmrC).reduce((function(e,i){return s.hmrC[i](r.c,r.r,r.m,e,t,n),e}),[])).then((function(){return t=function(){return e?m(e):u("ready").then((function(){return n}))},0===c?t():new Promise((function(e){p.push((function(){e(t())}))}));var t}))})):u(y()?"ready":"idle").then((function(){return null}))}))}function f(e){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+l+")")})):m(e)}function m(e){e=e||{},y();var n=t.map((function(t){return t(e)}));t=void 0;var s=n.map((function(e){return e.error})).filter(Boolean);if(s.length>0)return u("abort").then((function(){throw s[0]}));var i=u("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var o,a=u("apply"),l=function(e){o||(o=e)},c=[];return n.forEach((function(e){if(e.apply){var t=e.apply(l);if(t)for(var r=0;r<t.length;r++)c.push(t[r])}})),Promise.all([i,a]).then((function(){return o?u("fail").then((function(){throw o})):r?m(e).then((function(e){return c.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):u("idle").then((function(){return c}))}))}function y(){if(r)return t||(t=[]),Object.keys(s.hmrI).forEach((function(e){r.forEach((function(r){s.hmrI[e](r,t)}))})),r=void 0,!0}s.hmrD=n,s.i.push((function(p){var m,y,g,v,b=p.module,x=function(t,r){var n=i[r];if(!n)return t;var s=function(s){if(n.hot.active){if(i[s]){var a=i[s].parents;-1===a.indexOf(r)&&a.push(r)}else o=[r],e=s;-1===n.children.indexOf(s)&&n.children.push(s)}else console.warn("[HMR] unexpected require("+s+") from disposed module "+r),o=[];return t(s)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var p in t)Object.prototype.hasOwnProperty.call(t,p)&&"e"!==p&&Object.defineProperty(s,p,a(p));return s.e=function(e){return function(e){switch(l){case"ready":u("prepare");case"prepare":return c++,e.then(d,d),e;default:return e}}(t.e(e))},s}(p.require,p.id);b.hot=(m=p.id,y=b,v={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){o=y.parents.slice(),e=g?void 0:m,s(m)},active:!0,accept:function(e,t,r){if(void 0===e)v._selfAccepted=!0;else if("function"==typeof e)v._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)v._acceptedDependencies[e[n]]=t||function(){},v._acceptedErrorHandlers[e[n]]=r;else v._acceptedDependencies[e]=t||function(){},v._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)v._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)v._declinedDependencies[e[t]]=!0;else v._declinedDependencies[e]=!0},dispose:function(e){v._disposeHandlers.push(e)},addDisposeHandler:function(e){v._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=v._disposeHandlers.indexOf(e);t>=0&&v._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":t=[],Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,t)})),u("ready");break;case"ready":Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,t)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(m)}},check:h,apply:f,status:function(e){if(!e)return l;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var t=a.indexOf(e);t>=0&&a.splice(t,1)},data:n[m]},e=void 0,v),b.parents=o,b.children=[],o=[],p.require=x})),s.hmrC={},s.hmrI={}})(),s.p="",(()=>{var e,t,r,n,i,o=s.hmrS_jsonp=s.hmrS_jsonp||{179:0},a={};function l(t,r){return e=r,new Promise(((e,r)=>{a[t]=e;var n=s.p+s.hu(t),i=new Error;s.l(n,(e=>{if(a[t]){a[t]=void 0;var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;i.message="Loading hot update chunk "+t+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,r(i)}}))}))}function c(e){function a(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var i=n.pop(),o=i.id,a=i.chain,c=s.c[o];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:o};for(var p=0;p<c.parents.length;p++){var u=c.parents[p],d=s.c[u];if(d){if(d.hot._declinedDependencies[o])return{type:"declined",chain:a.concat([u]),moduleId:o,parentId:u};-1===t.indexOf(u)&&(d.hot._acceptedDependencies[o]?(r[u]||(r[u]=[]),l(r[u],[o])):(delete r[u],t.push(u),n.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}s.f&&delete s.f.jsonpHmr,t=void 0;var c={},p=[],u={},d=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var h in r)if(s.o(r,h)){var f,m=r[h],y=!1,g=!1,v=!1,b="";switch((f=m?a(h):{type:"disposed",moduleId:h}).chain&&(b="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":e.onDeclined&&e.onDeclined(f),e.ignoreDeclined||(y=new Error("Aborted because of self decline: "+f.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(f),e.ignoreDeclined||(y=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(f),e.ignoreUnaccepted||(y=new Error("Aborted because "+h+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(f),g=!0;break;case"disposed":e.onDisposed&&e.onDisposed(f),v=!0;break;default:throw new Error("Unexception type "+f.type)}if(y)return{error:y};if(g)for(h in u[h]=m,l(p,f.outdatedModules),f.outdatedDependencies)s.o(f.outdatedDependencies,h)&&(c[h]||(c[h]=[]),l(c[h],f.outdatedDependencies[h]));v&&(l(p,[f.moduleId]),u[h]=d)}r=void 0;for(var x,w=[],$=0;$<p.length;$++){var S=p[$],E=s.c[S];E&&(E.hot._selfAccepted||E.hot._main)&&u[S]!==d&&!E.hot._selfInvalidated&&w.push({module:S,require:E.hot._requireSelf,errorHandler:E.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete o[e]})),n=void 0;for(var t,r=p.slice();r.length>0;){var i=r.pop(),a=s.c[i];if(a){var l={},u=a.hot._disposeHandlers;for($=0;$<u.length;$++)u[$].call(null,l);for(s.hmrD[i]=l,a.hot.active=!1,delete s.c[i],delete c[i],$=0;$<a.children.length;$++){var d=s.c[a.children[$]];d&&((e=d.parents.indexOf(i))>=0&&d.parents.splice(e,1))}}}for(var h in c)if(s.o(c,h)&&(a=s.c[h]))for(x=c[h],$=0;$<x.length;$++)t=x[$],(e=a.children.indexOf(t))>=0&&a.children.splice(e,1)},apply:function(t){for(var r in u)s.o(u,r)&&(s.m[r]=u[r]);for(var n=0;n<i.length;n++)i[n](s);for(var o in c)if(s.o(c,o)){var a=s.c[o];if(a){x=c[o];for(var l=[],d=[],h=[],f=0;f<x.length;f++){var m=x[f],y=a.hot._acceptedDependencies[m],g=a.hot._acceptedErrorHandlers[m];if(y){if(-1!==l.indexOf(y))continue;l.push(y),d.push(g),h.push(m)}}for(var v=0;v<l.length;v++)try{l[v].call(null,x)}catch(r){if("function"==typeof d[v])try{d[v](r,{moduleId:o,dependencyId:h[v]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:h[v],error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:o,dependencyId:h[v],error:r}),e.ignoreErrored||t(r)}}}for(var b=0;b<w.length;b++){var $=w[b],S=$.module;try{$.require(S)}catch(r){if("function"==typeof $.errorHandler)try{$.errorHandler(r,{moduleId:S,module:s.c[S]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:S,error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:S,error:r}),e.ignoreErrored||t(r)}}return p}}}self.webpackHotUpdaterapidoc=(t,n,o)=>{for(var l in n)s.o(n,l)&&(r[l]=n[l],e&&e.push(l));o&&i.push(o),a[t]&&(a[t](),a[t]=void 0)},s.hmrI.jsonp=function(e,t){r||(r={},i=[],n=[],t.push(c)),s.o(r,e)||(r[e]=s.m[e])},s.hmrC.jsonp=function(e,a,p,u,d,h){d.push(c),t={},n=a,r=p.reduce((function(e,t){return e[t]=!1,e}),{}),i=[],e.forEach((function(e){s.o(o,e)&&void 0!==o[e]?(u.push(l(e,h)),t[e]=!0):t[e]=!1})),s.f&&(s.f.jsonpHmr=function(e,r){t&&s.o(t,e)&&!t[e]&&(r.push(l(e)),t[e]=!0)})},s.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(s.p+s.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})();s(687)})();
//# sourceMappingURL=rapidoc-min.js.map