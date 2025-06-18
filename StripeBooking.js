/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;let s=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const r=this.t;if(t&&void 0===e){const t=void 0!==r&&1===r.length;t&&(e=i.get(r)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(r,e))}return e}toString(){return this.cssText}};const o=e=>new s("string"==typeof e?e:e+"",void 0,r),a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1]),e[0]);return new s(i,e,r)},n=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return o(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,u=globalThis,g=u.trustedTypes,v=g?g.emptyScript:"",f=u.reactiveElementPolyfillSupport,b=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},$=(e,t)=>!l(e,t),S={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:s}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const o=i?.call(this);s.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,i)=>{if(t)r.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of i){const i=document.createElement("style"),s=e.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}})(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const s=(void 0!==r.converter?.toAttribute?r.converter:y).toAttribute(t,r.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i,this[i]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??$)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,f?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,_=w.trustedTypes,k=_?_.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+A,D=`<${C}>`,I=document,P=()=>I.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,j="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,O=/>/g,U=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,H=/"/g,F=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),R=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),W=new WeakMap,V=I.createTreeWalker(I,129);function Y(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}const G=(e,t)=>{const r=e.length-1,i=[];let s,o=2===t?"<svg>":3===t?"<math>":"",a=N;for(let t=0;t<r;t++){const r=e[t];let n,l,c=-1,d=0;for(;d<r.length&&(a.lastIndex=d,l=a.exec(r),null!==l);)d=a.lastIndex,a===N?"!--"===l[1]?a=M:void 0!==l[1]?a=O:void 0!==l[2]?(F.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=U):void 0!==l[3]&&(a=U):a===U?">"===l[0]?(a=s??N,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?U:'"'===l[3]?H:q):a===H||a===q?a=U:a===M||a===O?a=N:(a=U,s=void 0);const h=a===U&&e[t+1].startsWith("/>")?" ":"";o+=a===N?r+D:c>=0?(i.push(n),r.slice(0,c)+E+r.slice(c)+A+h):r+A+(-2===c?t:h)}return[Y(e,o+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class K{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let s=0,o=0;const a=e.length-1,n=this.parts,[l,c]=G(e,t);if(this.el=K.createElement(l,r),V.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=V.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(E)){const t=c[o++],r=i.getAttribute(e).split(A),a=/([.?@])?(.*)/.exec(t);n.push({type:1,index:s,name:a[2],strings:r,ctor:"."===a[1]?ee:"?"===a[1]?te:"@"===a[1]?re:X}),i.removeAttribute(e)}else e.startsWith(A)&&(n.push({type:6,index:s}),i.removeAttribute(e));if(F.test(i.tagName)){const e=i.textContent.split(A),t=e.length-1;if(t>0){i.textContent=_?_.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],P()),V.nextNode(),n.push({type:2,index:++s});i.append(e[t],P())}}}else if(8===i.nodeType)if(i.data===C)n.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(A,e+1));)n.push({type:7,index:s}),e+=A.length-1}s++}}static createElement(e,t){const r=I.createElement("template");return r.innerHTML=e,r}}function J(e,t,r=e,i){if(t===R)return t;let s=void 0!==i?r._$Co?.[i]:r._$Cl;const o=z(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(e),s._$AT(e,r,i)),void 0!==i?(r._$Co??=[])[i]=s:r._$Cl=s),void 0!==s&&(t=J(e,s._$AS(e,t.values),s,i)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??I).importNode(t,!0);V.currentNode=i;let s=V.nextNode(),o=0,a=0,n=r[0];for(;void 0!==n;){if(o===n.index){let t;2===n.type?t=new Q(s,s.nextSibling,this,e):1===n.type?t=new n.ctor(s,n.name,n.strings,this,e):6===n.type&&(t=new ie(s,this,e)),this._$AV.push(t),n=r[++a]}o!==n?.index&&(s=V.nextNode(),o++)}return V.currentNode=I,i}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),z(e)?e===L||null==e||""===e?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==R&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==L&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=K.createElement(Y(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Z(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new K(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const s of e)i===t.length?t.push(r=new Q(this.O(P()),this.O(P()),this,this.options)):r=t[i],r._$AI(s),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=L}_$AI(e,t=this,r,i){const s=this.strings;let o=!1;if(void 0===s)e=J(this,e,t,0),o=!z(e)||e!==this._$AH&&e!==R,o&&(this._$AH=e);else{const i=e;let a,n;for(e=s[0],a=0;a<s.length-1;a++)n=J(this,i[r+a],t,a),n===R&&(n=this._$AH[a]),o||=!z(n)||n!==this._$AH[a],n===L?e=L:e!==L&&(e+=(n??"")+s[a+1]),this._$AH[a]=n}o&&!i&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}}class te extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==L)}}class re extends X{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??L)===R)return;const r=this._$AH,i=e===L&&r!==L||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==L&&(r===L||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const se=w.litHtmlPolyfillSupport;se?.(K,Q),(w.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class oe extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const i=r?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=r?.renderBefore??null;i._$litPart$=s=new Q(t.insertBefore(P(),e),e,void 0,r??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}}oe._$litElement$=!0,oe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:oe});const ae=globalThis.litElementPolyfillSupport;ae?.({LitElement:oe}),(globalThis.litElementVersions??=[]).push("4.1.1");var ne,le="basil",ce="https://js.stripe.com",de="".concat(ce,"/").concat(le,"/stripe.js"),he=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,pe=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,me=function(e){var t=document.createElement("script");t.src="".concat(de).concat("");var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(t),t},ue=null,ge=null,ve=null,fe=function(e){return null!==ue?ue:(ue=new Promise((function(t,r){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe)t(window.Stripe);else try{var i=function(){for(var e,t=document.querySelectorAll('script[src^="'.concat(ce,'"]')),r=0;r<t.length;r++){var i=t[r];if(e=i.src,he.test(e)||pe.test(e))return i}return null}();if(i&&e);else if(i){if(i&&null!==ve&&null!==ge){var s;i.removeEventListener("load",ve),i.removeEventListener("error",ge),null===(s=i.parentNode)||void 0===s||s.removeChild(i),i=me()}}else i=me();ve=function(e,t){return function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))}}(t,r),ge=function(e){return function(t){e(new Error("Failed to load Stripe.js",{cause:t}))}}(r),i.addEventListener("load",ve),i.addEventListener("error",ge)}catch(e){return void r(e)}else t(null)})),ue.catch((function(e){return ue=null,Promise.reject(e)})))},be=!1,ye=function(){return ne||(ne=fe(null).catch((function(e){return ne=null,Promise.reject(e)})))};Promise.resolve().then((function(){return ye()})).catch((function(e){be||console.warn(e)}));var $e=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];be=!0;var i=Date.now();return ye().then((function(e){return function(e,t,r){if(null===e)return null;var i=t[0].match(/^pk_test/),s=function(e){return 3===e?"v3":e}(e.version),o=le;i&&s!==o&&console.warn("Stripe.js@".concat(s," was loaded on the page, but @stripe/stripe-js@").concat("7.3.1"," expected Stripe.js@").concat(o,". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));var a=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"7.3.1",startTime:t})}(a,r),a}(e,t,i)}))};class Se extends oe{static properties={widgetId:{type:String},color:{type:String},loading:{type:Boolean},stripeConfig:{type:Object},services:{type:Object},globalAdditionalServices:{type:Array},squareFootagePricing:{type:Array},selectedService:{type:Object},selectedExtras:{type:Array},selectedSquareFootage:{type:Object},currentStep:{type:Number},showServiceDetails:{type:Boolean},paymentProcessing:{type:Boolean},paymentError:{type:String},bookingData:{type:Object},cardData:{type:Object},businessHours:{type:Object},formError:{type:String}};constructor(){super(),this.widgetId="",this.color="#6366f1",this.loading=!1,this.stripeConfig=null,this.services=new Map,this.globalAdditionalServices=[],this.squareFootagePricing=[],this.selectedService=null,this.selectedExtras=[],this.selectedSquareFootage=null,this.currentStep=1,this.showServiceDetails=!1,this.paymentProcessing=!1,this.paymentError="",this.bookingData={serviceInfo:null,schedule:{date:"",time:"",frequency:"one-time"},generalInfo:{name:"",email:"",phone:"",address:"",postalCode:"",state:""},payment:{method:"card"}},this.cardData={cardNumber:"",cardName:"",expiryDate:"",cvv:""},this.apiSecret="booking-d9e180f3-d77d-4c25-a163-4605c8ddfb48",this.businessHours={start:7,end:17},this.formError=""}async connectedCallback(){super.connectedCallback(),await this.fetchBookingSettings(),await this.initializeStripe()}async initializeStripe(){if(console.log("Initializing Stripe..."),!this.stripeConfig?.publicKey)return console.error("Stripe public key is not provided"),void(this.paymentError="Stripe public key is missing.");try{if(this.stripe=await $e(this.stripeConfig.publicKey),!this.stripe)throw new Error("Failed to initialize Stripe.");console.log("Stripe has been successfully initialized.")}catch(e){console.error("Error loading Stripe:",e),this.paymentError="Failed to initialize Stripe. Please try again later."}}async setupStripeElement(){if(this._stripeElementInitialized&&4===this.currentStep)return;if(await this.updateComplete,4!==this.currentStep)return;if(!this.stripe)return console.error("Stripe no está inicializado"),void(this.paymentError="Sistema de pago no listo. Por favor intente nuevamente.");const e=this.renderRoot?.querySelector("#card-element");if(!e)return console.warn("Contenedor no encontrado, reintentando..."),void setTimeout((()=>this.setupStripeElement()),100);if(!this.cardElement)try{e.innerHTML="";const t=this.stripe.elements(),r={base:{color:"#32325d",fontFamily:'"Inter", sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}};this.cardElement=t.create("card",{style:r}),this.cardElement.mount(e),this._stripeElementInitialized=!0,this.cardElement.on("change",(e=>{this.paymentError=e.error?.message||"",this.requestUpdate()}))}catch(e){console.error("Error al crear elemento de tarjeta:",e),this.paymentError="Error al cargar el formulario de pago."}}updated(e){super.updated(e),e.has("currentStep")&&(4===this.currentStep?this.setupStripeElement():this.cardElement&&(this.cardElement.unmount(),this.cardElement=null,this._stripeElementInitialized=!1)),e.has("color")&&this.applyDynamicColor()}async firstUpdated(){this.applyDynamicColor(),setTimeout((()=>{this.setupStripeElement()}),100)}async fetchBookingSettings(){this.loading=!0;try{const e=await fetch(`https://horizondesk-api-0a74dafcd4fb.herokuapp.com/api/booking/settings/byAppId?appId=${this.widgetId}`,{headers:{"x-api-secret":this.apiSecret}});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();this.stripeConfig=t.stripe||{},this.stripeConfig.publicKey||(console.error("Stripe public key is missing in the response data."),this.paymentError="Stripe public key is missing."),this.color=t.color||"#6366f1",this.services=new Map(Object.entries(t.services||{}).map((([e,t])=>[e,{id:e,...t}]))),this.globalAdditionalServices=t.globalAdditionalServices||[],this.squareFootagePricing=t.squareFootagePricing||[]}catch(e){console.error("Failed to load booking settings:",e)}finally{this.loading=!1}}handleServiceSelect(e){const t=this.services.get(e);this.selectedService={id:e,...t},this.selectedExtras=[],this.selectedSquareFootage=null,this.showServiceDetails=!0,setTimeout((()=>{const e=this.shadowRoot?.getElementById("size-selection");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}),100)}toggleExtra(e){const t=this.selectedExtras.some((t=>t.name===e.name));this.selectedExtras=t?this.selectedExtras.filter((t=>t.name!==e.name)):[...this.selectedExtras,e]}selectSquareFootage(e){this.selectedSquareFootage=e}confirmServiceSelection(){this.bookingData.serviceInfo={service:this.selectedService,extras:this.selectedExtras,squareFootage:this.selectedSquareFootage,subtotal:this.subtotal,total:this.total},this.showServiceDetails=!1,this.nextStep()}formatMinutesToHours(e){const t=Math.floor(e/60),r=e%60;return t>0?`${t}h ${r}m`:`${r}m`}get subtotal(){return(this.selectedService?.price||0)+(this.selectedSquareFootage?.price||0)+this.selectedExtras.reduce(((e,t)=>e+(t.price||0)),0)}get total(){return this.subtotal}async nextStep(){if(this.formError="",2===this.currentStep){const{date:e,time:t,frequency:r}=this.bookingData.schedule;if(!e||!t||!r)return void(this.formError="Please select a date, time, and frequency.")}if(3===this.currentStep){const e=this.bookingData.generalInfo;if(!["name","email","phone","address","postalCode","state"].every((t=>e[t]?.trim())))return void(this.formError="Please fill in all personal details.")}this.currentStep<5&&(this.currentStep++,await this.updateComplete,this.scrollToStepTop())}async prevStep(){this.currentStep>1&&(this.currentStep--,await this.updateComplete,this.scrollToStepTop())}async scrollToStepTop(){try{await this.updateComplete;const e=`step-${this.currentStep}`,t=this.shadowRoot.getElementById(e);if(!t)return void console.warn(`No se encontró el elemento con ID: ${e}`);t.scrollIntoView({behavior:"smooth",block:"start"}),await new Promise((e=>setTimeout(e,100)));const r=100,i=t.getBoundingClientRect().top;if(i>r+10||i<r-10){const e=window.scrollY+i-r,t=document.documentElement.style,s=t.scrollBehavior;t.scrollBehavior="auto",window.scrollTo(0,e),setTimeout((()=>{t.scrollBehavior=s}),50)}}catch(e){console.error("Error en scrollToStepTop:",e)}}handleScheduleChange(e){const{name:t,value:r}=e.target;if("time"===t&&r){const[i,s]=r.split(":").map(Number),o=60*i+s,a=15*Math.round(o/15),n=Math.floor(a/60),l=a%60,c=`${String(n).padStart(2,"0")}:${String(l).padStart(2,"0")}`;return this.bookingData.schedule={...this.bookingData.schedule,[t]:c},void(e.target.value=c)}this.bookingData.schedule={...this.bookingData.schedule,[t]:r}}handleGeneralInfoChange(e){const{name:t,value:r}=e.target;this.bookingData.generalInfo={...this.bookingData.generalInfo,[t]:r}}handleCardChange(e){const{name:t,value:r}=e.target;this.cardData={...this.cardData,[t]:r}}validateCard(){return!this.cardData.cardNumber||this.cardData.cardNumber.replace(/\s/g,"").length<16?"Invalid card number":this.cardData.cardName?this.cardData.expiryDate&&this.cardData.expiryDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)?!this.cardData.cvv||this.cardData.cvv.length<3?"CVV is required and must be at least 3 digits":null:"Expiry date is invalid. Use MM/YY format.":"Name on card is required"}async completeBooking(){this.paymentProcessing=!0,this.paymentError="";const e=this.validateCard();if(e)return this.paymentError=e,void(this.paymentProcessing=!1);try{const[e,t]=this.cardData.expiryDate.split("/"),r=`20${t}`;if(!this.stripe)throw new Error("Stripe is not initialized.");const{paymentMethod:i,error:s}=await this.stripe.createPaymentMethod({type:"card",card:{number:this.cardData.cardNumber.replace(/\s/g,""),exp_month:e,exp_year:r,cvc:this.cardData.cvv},billing_details:{name:this.cardData.cardName,email:this.bookingData.generalInfo.email,address:{line1:this.bookingData.generalInfo.address,state:this.bookingData.generalInfo.state,postal_code:this.bookingData.generalInfo.postalCode}}});if(s)throw new Error(s.message);const o={bookingData:{appId:this.widgetId,services:{[this.bookingData.serviceInfo.service.id]:{name:this.bookingData.serviceInfo.service.name,price:this.bookingData.serviceInfo.service.price,additionalServices:this.bookingData.serviceInfo.extras,squareFootage:this.bookingData.serviceInfo.squareFootage}},subtotal:this.bookingData.serviceInfo.subtotal,total:this.bookingData.serviceInfo.total,clientInfo:this.bookingData.generalInfo,schedule:this.bookingData.schedule},paymentData:{paymentMethodId:i.id,currency:"usd",returnUrl:`${window.location.origin}/confirmation`}},a=await fetch("https://horizondesk-api-0a74dafcd4fb.herokuapp.com/api/booking/create-and-pay",{method:"POST",headers:{"Content-Type":"application/json","x-api-secret":this.apiSecret},body:JSON.stringify(o)}),n=await a.json();if(!a.ok)throw new Error(n.error||"Error al procesar el pago");if("succeeded"!==n.payment.status&&"requires_capture"!==n.payment.status)throw new Error("El pago no se completó correctamente");this.nextStep(),this.bookingData.confirmation={bookingId:n.booking._id,paymentId:n.payment.paymentIntentId}}catch(e){console.error("Error en completeBooking:",e),this.paymentError=e.message||"Error al procesar el pago","StripeCardError"===e.type&&(this.paymentError=`Error de tarjeta: ${e.message}`)}finally{this.paymentProcessing=!1}}resetBooking(){this.currentStep=1,this.selectedService=null,this.selectedExtras=[],this.selectedSquareFootage=null,this.showServiceDetails=!1,this.cardData={cardNumber:"",cardName:"",expiryDate:"",cvv:""},this.bookingData={serviceInfo:null,schedule:{date:"",time:"",frequency:"one-time"},generalInfo:{name:"",email:"",phone:"",address:"",postalCode:"",state:""},payment:{method:"card"}}}formatCardNumber(e){let t=e.target.value.replace(/\D/g,"");t=t.replace(/(\d{4})/g,"$1 ").trim(),e.target.value=t,this.cardData.cardNumber=t}formatExpiryDate(e){let t=e.target.value.replace(/\D/g,"");t.length>2&&(t=t.substring(0,2)+"/"+t.substring(2,4)),e.target.value=t,this.cardData.expiryDate=t}adjustColor(e,t){if(!e||"#"!==e[0])return e;3===(e=e.replace("#","")).length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);let r=parseInt(e.substr(0,2),16),i=parseInt(e.substr(2,2),16),s=parseInt(e.substr(4,2),16);r=Math.max(0,Math.min(255,r+t)),i=Math.max(0,Math.min(255,i+t)),s=Math.max(0,Math.min(255,s+t));return`#${r.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}`}updated(e){e.has("color")&&this.applyDynamicColor()}applyDynamicColor(){this.style.setProperty("--primary-color",this.color),this.style.setProperty("--primary-light",this.adjustColor(this.color,20)),this.style.setProperty("--primary-dark",this.adjustColor(this.color,-20))}static styles=a`
    :host {
      --primary-color: ${o(this.color)};
      --primary-light: #a5b4fc;
      --primary-dark: #4f46e5;
      --text-color: #1e293b;
      --light-gray: #f8fafc;
      --medium-gray: #e2e8f0;
      --dark-gray: #94a3b8;
      --success-color: rgb(2, 148, 46);
      --error-color: #ef4444;
      --border-radius: 12px;
      --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --transition: all 0.3s ease;
      font-family: "Inter", system-ui, -apple-system, sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
      color: var(--text-color);
    }

    h1,
    h2,
    h3,
    h4 {
      text-align: center;
      margin-bottom: 1.5rem;
      font-weight: 600;
      color: var(--primary-dark);
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    /* Step Indicator */
    .step-indicator {
      display: flex;
      justify-content: center;
      margin-bottom: 3rem;
      position: relative;
    }

    .step-progress {
      position: absolute;
      top: 15px;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--medium-gray);
      z-index: 1;
    }

    .step-progress-bar {
      height: 100%;
      background: var(--primary-color);
      transition: width 0.3s ease;
    }

    .steps-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      position: relative;
      z-index: 2;
    }

    .step {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .step-number {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: var(--medium-gray);
      color: var(--text-color);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;
      font-weight: 500;
      border: 3px solid white;
    }

    .step.active .step-number {
      background-color: var(--primary-color);
      color: white;
    }

    .step.completed .step-number {
      background-color: var(--success-color);
      color: white;
    }

    .step-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--dark-gray);
      text-align: center;
      max-width: 80px;
    }

    .step.active .step-label,
    .step.completed .step-label {
      color: var(--text-color);
      font-weight: 600;
    }

    /* Service Cards */
    .selection-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    }

    .service-card {
      border: 1px solid var(--medium-gray);
      border-radius: var(--border-radius);
      padding: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }

    .service-card.selected {
      /* Estilos para la tarjeta seleccionada */
      border-color: #1976d2; /* ejemplo: azul primario */
      background: #e3f2fd; /* ejemplo: azul muy claro de fondo */
      /* Puedes ajustar colores/borde según tu diseño, o usar variables CSS compartidas */
    }

    .service-card:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .service-card.selected::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--primary-color);
    }

    .card-header {
      padding: 1.5rem;
      text-align: center;
      border-bottom: 1px solid var(--medium-gray);
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--primary-dark);
    }

    .card-price {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--primary-color);
      margin: 1rem 0;
    }

    .card-body {
      padding: 1.5rem;
    }

    .benefits-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .benefits-list li {
      position: relative;
      padding-left: 1.75rem;
      margin-bottom: 0.75rem;
      line-height: 1.5;
    }

    .benefits-list li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: var(--success-color);
      font-weight: bold;
    }

    .size-selection select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--medium-gray);
      border-radius: var(--border-radius);
      font-size: 1rem;
      transition: var(--transition);
    }
    .size-selection select:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    }
    .card-content {
      padding: 1rem;
    }
    .extra-item img {
      flex-shrink: 0;
    }
    .service-card {
      position: relative;
    }

    .img-services {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: var(--border-radius);
    }
    .img-extras {
      width: 64px;
      height: 64px;
      object-fit: contain;
      display: block;
      margin: 0 auto;
      border-radius: var(--border-radius);
    }

    /* Service Details */
    .service-details-container {
      background: white;
      border-radius: var(--border-radius);
      padding: 2rem;
      margin-top: 2rem;
      box-shadow: var(--box-shadow);
    }

    .details-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .details-header h3 {
      margin: 0;
      text-align: left;
    }

    .back-button {
      background: none;
      border: none;
      color: var(--primary-color);
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Size Selection */
    .size-selection {
      margin-bottom: 2rem;
    }

    .size-options {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .size-option {
      border: 1px solid var(--medium-gray);
      border-radius: var(--border-radius);
      padding: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }

    .size-option:hover {
      border-color: var(--primary-light);
    }

    .size-option.selected {
      border: 2px solid var(--primary-color);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
      background-color: rgba(99, 102, 241, 0.05);
    }

    .size-range {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .size-price {
      color: var(--primary-color);
      font-weight: 700;
      font-size: 1.25rem;
    }

    .size-time {
      color: var(--dark-gray);
      font-size: 0.875rem;
    }

    /* Extras Section */
    .extras-section {
      margin-bottom: 2rem;
    }

    .extras-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .extra-item {
      border: 1px solid var(--medium-gray);
      border-radius: var(--border-radius);
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }

    .extra-item:hover {
      border-color: var(--primary-light);
    }

    .extra-item.selected {
      border-color: var(--primary-color);
      background-color: rgba(99, 102, 241, 0.05);
    }

    .extra-item input {
      accent-color: var(--primary-color);
    }

    .extra-price {
      margin-left: auto;
      font-weight: 600;
      color: var(--primary-color);
    }

    .extra-time {
      color: var(--dark-gray);
      font-size: 0.875rem;
    }

    /* Summary Card */
    .summary-card {
      background: white;
      border-radius: var(--border-radius);
      padding: 1.5rem;
      margin-top: 2rem;
      box-shadow: var(--box-shadow);
      border-top: 4px solid var(--primary-color);
    }

    .summary-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--primary-dark);
      text-align: center;
    }

    .summary-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--medium-gray);
    }

    .summary-total {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--primary-dark);
      margin-top: 1rem;
      padding-top: 0.75rem;
      border-top: 1px solid var(--medium-gray);
    }

    /* Buttons */
    .confirm-button {
      width: 100%;
      padding: 1rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: var(--border-radius);
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
      margin-top: 2rem;
    }

    .confirm-button:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
    }

    /* Form Styles */
    .form-container {
      background: white;
      border-radius: var(--border-radius);
      padding: 2rem;
      box-shadow: var(--box-shadow);
      max-width: 600px;
      margin: 0 auto;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: var(--text-color);
    }

    input,
    select {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid var(--medium-gray);
      border-radius: var(--border-radius);
      font-size: 1rem;
      transition: var(--transition);
    }

    input:focus,
    select:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    }

    /* Navigation Buttons */
    .navigation-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
    }

    button {
      padding: 0.75rem 1.5rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
      font-weight: 500;
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }

    button:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
    }

    button:disabled {
      background-color: var(--dark-gray);
      cursor: not-allowed;
      transform: none;
      opacity: 0.7;
    }

    button.secondary {
      background-color: white;
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
    }

    button.secondary:hover {
      background-color: var(--light-gray);
    }

    /* Confirmation */
    .confirmation-container {
      background: white;
      border-radius: var(--border-radius);
      padding: 3rem;
      text-align: center;
      box-shadow: var(--box-shadow);
      max-width: 600px;
      margin: 0 auto;
    }

    .confirmation-icon {
      font-size: 4rem;
      color: var(--success-color);
      margin-bottom: 1.5rem;
    }

    .confirmation-title {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--primary-dark);
    }

    .confirmation-message {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      line-height: 1.6;
      color: var(--text-color);
    }

    .error-message {
      color: var(--error-color);
      font-weight: 500;
      font-size: 1rem;
      margin-top: 2rem;
      text-align: center;
    }

    /* Payment Section Styles */
    .payment-section {
      background: white;
      border-radius: var(--border-radius);
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: var(--box-shadow);
      border: 1px solid var(--medium-gray);
    }

    .payment-section-header {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .payment-icon {
      width: 40px;
      height: 40px;
      background-color: var(--primary-light);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      color: var(--primary-dark);
      font-size: 1.25rem;
    }

    .payment-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--primary-dark);
    }

    .payment-methods {
      margin-top: 1.5rem;
    }

    .payment-method {
      display: flex;
      align-items: center;
      padding: 0.75rem;
      border: 1px solid var(--medium-gray);
      border-radius: var(--border-radius);
      margin-bottom: 0.75rem;
      cursor: pointer;
      transition: var(--transition);
    }

    .payment-method:hover {
      border-color: var(--primary-color);
    }

    .payment-method.selected {
      border: 2px solid var(--primary-color);
      background-color: rgba(99, 102, 241, 0.05);
    }

    .payment-method-icon {
      width: 30px;
      height: 30px;
      margin-right: 1rem;
      color: var(--primary-color);
    }

    .payment-method-info {
      flex-grow: 1;
    }

    .payment-method-title {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .payment-method-description {
      font-size: 0.875rem;
      color: var(--dark-gray);
    }

    /* Stripe Element Styles */
    #card-element-container {
      margin: 1.5rem 0;
    }

    #card-element {
      border: 1px solid var(--medium-gray);
      border-radius: var(--border-radius);
      padding: 12px;
      background: white;
      transition: var(--transition);
    }

    #card-element.StripeElement--focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 1px var(--primary-color);
    }

    #card-element.StripeElement--invalid {
      border-color: var(--error-color);
    }

    #card-element.StripeElement--complete {
      border-color: var(--success-color);
    }

    .card-hint {
      font-size: 0.875rem;
      color: var(--dark-gray);
      margin-top: 0.5rem;
      text-align: center;
    }

    /* Loading State */
    .loading {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid var(--primary-light);
      border-top: 4px solid var(--primary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    /* Responsive */
    @media (max-width: 768px) {
      .selection-grid,
      .size-options,
      .extras-grid {
        grid-template-columns: 1fr;
      }

      .details-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      .step-label {
        display: none;
      }
    }
  `;render(){return B`
      <style>
        :host {
          --primary-color: ${o(this.color)};
          --primary-light: ${o(this.adjustColor(this.color,20))};
          --primary-dark: ${o(this.adjustColor(this.color,-20))};
        }

        .step-progress-bar {
          width: ${25*(this.currentStep-1)}%;
        }
      </style>

      <div class="container">
        <div class="step-indicator">
          <div class="step-progress">
            <div class="step-progress-bar"></div>
          </div>
          <div class="steps-container">
            <div
              class="step ${this.currentStep>=1?this.currentStep>1?"completed":"active":""}"
            >
              <div class="step-number">1</div>
              <div class="step-label">Service</div>
            </div>
            <div
              class="step ${this.currentStep>=2?this.currentStep>2?"completed":"active":""}"
            >
              <div class="step-number">2</div>
              <div class="step-label">Schedule</div>
            </div>
            <div
              class="step ${this.currentStep>=3?this.currentStep>3?"completed":"active":""}"
            >
              <div class="step-number">3</div>
              <div class="step-label">Details</div>
            </div>
            <div
              class="step ${this.currentStep>=4?this.currentStep>4?"completed":"active":""}"
            >
              <div class="step-number">4</div>
              <div class="step-label">Payment</div>
            </div>
          </div>
        </div>

        ${1===this.currentStep?this.renderStep1():""}
        ${2===this.currentStep?this.renderStep2():""}
        ${3===this.currentStep?this.renderStep3():""}
        ${4===this.currentStep?this.renderStep4():""}
        ${5===this.currentStep?this.renderStep5():""}
      </div>
    `}renderStep1(){return B`
      <div class="step-content" id="step-1">
        <h3>Choose Your Service</h3>
        ${this.loading?B` <div class="loading"><div class="spinner"></div></div> `:B`
              <div class="size-options">
                ${Array.from(this.services.entries()).map((([e,t])=>B`
                    <div
                      class="service-card ${this.selectedService?.id===t.id?"selected":""}"
                      @click=${()=>this.handleServiceSelect(e)}
                    >
                      ${t.image?B`<img
                            src=${t.image}
                            alt=${t.name}
                            class="img-services"
                          />`:""}
                      <div class="size-range">${t.name}</div>
                      <div class="size-price">$${t.price}</div>
                      ${t.time?B`<div class="size-time">
                            ${this.formatMinutesToHours(t.time)}
                          </div>`:""}
                      ${this.selectedService?.id===e?B`<div class="selected-indicator">✓</div>`:""}
                    </div>
                  `))}
              </div>
            `}
        ${this.showServiceDetails&&this.selectedService?B`
              <div class="service-details-container">
                <div class="details-header">
                  <h3>${this.selectedService.name}</h3>
                  <button
                    @click=${()=>this.showServiceDetails=!1}
                    class="back-button"
                  >
                    &larr; Back to services
                  </button>
                </div>

                ${this.squareFootagePricing.length>0?B`
                      <div class="size-selection" id="size-selection">
                        <h3>Select Property Size</h3>
                        <select
                          @change=${e=>this.selectSquareFootage(this.squareFootagePricing.find((t=>t.range===e.target.value)))}
                        >
                          <option value="">-- Select size --</option>
                          ${this.squareFootagePricing.map((e=>B`
                              <option
                                value=${e.range}
                                ?selected=${this.selectedSquareFootage?.range===e.range}
                              >
                                ${e.range} — $${e.price} —
                                ${this.formatMinutesToHours(e.time)}
                              </option>
                            `))}
                        </select>
                      </div>
                    `:""}
                ${this.selectedService.additionalServices?.length>0||this.globalAdditionalServices.length>0?B`
                      <div class="extras-section">
                        <h3>Select Add-ons</h3>
                        <div class="size-options">
                          ${[...this.selectedService.additionalServices||[],...this.globalAdditionalServices].map((e=>B`
                              <div
                                class="size-option ${this.selectedExtras.some((t=>t.name===e.name))?"selected":""}"
                                @click=${()=>this.toggleExtra(e)}
                              >
                                ${e.image?B`<img
                                      src=${e.image}
                                      alt=${e.name}
                                      class="img-extras"
                                    />`:""}

                                <div class="size-range">${e.name}</div>
                                <div class="size-price">+$${e.price}</div>
                                <div class="size-time">
                                  ${this.formatMinutesToHours(e.time)}
                                </div>
                              </div>
                            `))}
                        </div>
                      </div>
                    `:""}

                <div class="summary-card">
                  <div class="summary-title">Order Summary</div>
                  <div class="summary-item">
                    <span>Base Service:</span>
                    <span>$${this.selectedService.price}</span>
                  </div>

                  ${this.selectedSquareFootage?B`
                        <div class="summary-item">
                          <span
                            >Size (${this.selectedSquareFootage.range}):</span
                          >
                          <span>+$${this.selectedSquareFootage.price}</span>
                        </div>
                      `:""}
                  ${this.selectedExtras.map((e=>B`
                      <div class="summary-item">
                        <span>${e.name}:</span>
                        <span>+$${e.price}</span>
                      </div>
                    `))}

                  <div class="summary-item summary-total">
                    <span>Total:</span>
                    <span>$${this.total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  @click=${this.confirmServiceSelection}
                  class="confirm-button"
                >
                  Confirm Selection & Continue
                </button>
              </div>
            `:""}
      </div>
    `}renderStep2(){const e=[];for(let t=this.businessHours.start;t<=this.businessHours.end;t++)for(let r=0;r<60;r+=15){const i=`${String(t).padStart(2,"0")}:${String(r).padStart(2,"0")}`;e.push(i)}const t=new Date;t.setHours(0,0,0,0);const r=t.toISOString().split("T")[0];return B`
      <div class="step-content" id="step-2">
        <div class="form-container">
          <h3>Schedule Your Service</h3>
          ${this.formError?B`<div class="error-message" style="margin-bottom: 1rem;">
                ${this.formError}
              </div>`:""}

          <div class="form-group">
            <label for="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              .value=${this.bookingData.schedule.date}
              @change=${this.handleScheduleChange}
              min=${r}
            />
          </div>
          <div class="form-group">
            <label for="time">Time</label>
            <select
              id="time"
              name="time"
              .value=${this.bookingData.schedule?.time||""}
              @change=${this.handleScheduleChange}
            >
              <option value="">Select a time</option>
              ${e.map((e=>B` <option value=${e}>${e}</option> `))}
            </select>
          </div>
          <div class="form-group">
            <label for="frequency">Frequency</label>
            <select
              id="frequency"
              name="frequency"
              .value=${this.bookingData.schedule.frequency}
              @change=${this.handleScheduleChange}
            >
              <option value="one-time">One Time</option>
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div class="navigation-buttons">
            <button class="secondary" @click=${this.prevStep}>Back</button>
            <button @click=${this.nextStep}>Continue</button>
          </div>
        </div>
      </div>
    `}renderStep3(){return B`
      <div class="step-content">
        <div class="form-container">
          <h3>Your Information</h3>
          ${this.formError?B`<div class="error-message" style="margin-bottom: 1rem;">
                ${this.formError}
              </div>`:""}

          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              .value=${this.bookingData.generalInfo.name}
              @change=${this.handleGeneralInfoChange}
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              .value=${this.bookingData.generalInfo.email}
              @change=${this.handleGeneralInfoChange}
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              .value=${this.bookingData.generalInfo.phone}
              @change=${this.handleGeneralInfoChange}
            />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              .value=${this.bookingData.generalInfo.address}
              @change=${this.handleGeneralInfoChange}
            />
          </div>
          <div class="form-group">
            <label for="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              .value=${this.bookingData.generalInfo.postalCode}
              @change=${this.handleGeneralInfoChange}
            />
          </div>
          <div class="form-group">
            <label for="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              .value=${this.bookingData.generalInfo.state}
              @change=${this.handleGeneralInfoChange}
            />
          </div>
          <div class="navigation-buttons">
            <button class="secondary" @click=${this.prevStep}>Back</button>
            <button @click=${this.nextStep}>Continue</button>
          </div>
        </div>
      </div>
    `}renderStep4(){return setTimeout((()=>{4===this.currentStep&&this.setupStripeElement()}),100),B`
      <div class="step-content" id="step-4">
        <div class="form-container">
          <h3>Payment Information</h3>
          ${this.paymentError?B`<div class="error-message">${this.paymentError}</div>`:""}

          <div class="payment-section">
            <div class="payment-section-header">
              <div class="payment-icon">💳</div>
              <h4 class="payment-title">Credit/Debit Card</h4>
            </div>

            <div class="payment-methods">
              <div class="payment-method selected">
                <div class="payment-method-icon">🟦</div>
                <div class="payment-method-info">
                  <div class="payment-method-title">Card Payment</div>
                  <div class="payment-method-description">
                    Pay securely with your credit or debit card
                  </div>
                </div>
              </div>
            </div>

            <div id="card-element-container">
              <div id="card-element"></div>
              <p class="card-hint">
                We use Stripe for secure payments. Your card details are
                encrypted.
              </p>
            </div>
          </div>

          <div class="summary-card">
            <div class="summary-title">Order Summary</div>
            <div class="summary-item">
              <span>Service:</span>
              <span>${this.bookingData.serviceInfo?.service?.name}</span>
            </div>

            ${this.bookingData.serviceInfo?.squareFootage?B`
                  <div class="summary-item">
                    <span
                      >Size
                      (${this.bookingData.serviceInfo.squareFootage.range}):</span
                    >
                    <span
                      >$${this.bookingData.serviceInfo.squareFootage.price}</span
                    >
                  </div>
                `:""}
            ${this.bookingData.serviceInfo?.extras?.length>0?this.bookingData.serviceInfo.extras.map((e=>B`
                    <div class="summary-item">
                      <span>${e.name}:</span>
                      <span>+$${e.price}</span>
                    </div>
                  `)):""}

            <div class="summary-item summary-total">
              <span>Total Amount:</span>
              <span>$${this.bookingData.serviceInfo?.total?.toFixed(2)}</span>
            </div>
          </div>

          <div class="navigation-buttons">
            <button class="secondary" @click=${this.prevStep}>Back</button>
            <button
              @click=${this.completeBooking}
              ?disabled=${this.paymentProcessing}
            >
              ${this.paymentProcessing?"Processing...":"Complete Booking"}
            </button>
          </div>
        </div>
      </div>
    `}updated(e){super.updated(e),e.has("currentStep")&&4===this.currentStep&&this.setupStripeElement()}renderStep5(){return B`
      <div class="step-content">
        <div class="confirmation-container">
          <div class="confirmation-icon">✓</div>
          <h3 class="confirmation-title">Booking Confirmed!</h3>
          <p class="confirmation-message">
            Thank you for your Booking. We've sent a confirmation to
            ${this.bookingData.generalInfo.email}. Your service is scheduled for
            ${this.bookingData.schedule.date} at
            ${this.bookingData.schedule.time}.
          </p>

          <div class="confirmation-details">
            <div class="summary-item">
              <span>Service:</span>
              <span>${this.bookingData.serviceInfo?.service?.name}</span>
            </div>

            ${this.bookingData.serviceInfo?.squareFootage?B`
                  <div class="summary-item">
                    <span
                      >Size
                      (${this.bookingData.serviceInfo.squareFootage.range}):</span
                    >
                    <span
                      >$${this.bookingData.serviceInfo.squareFootage.price}</span
                    >
                  </div>
                `:""}
            ${this.bookingData.serviceInfo?.extras?.length>0?B`
                  ${this.bookingData.serviceInfo.extras.map((e=>B`
                      <div class="summary-item">
                        <span>${e.name}:</span>
                        <span>+$${e.price}</span>
                      </div>
                    `))}
                `:""}

            <div class="summary-total">
              <span>Total Charged:</span>
              <span>$${this.bookingData.serviceInfo?.total?.toFixed(2)}</span>
            </div>

            ${this.bookingData.confirmation?B`
                  <div class="summary-item">
                    <span>Booking ID:</span>
                    <span>${this.bookingData.confirmation.bookingId}</span>
                  </div>
                  <div class="summary-item">
                    <span>Transaction ID:</span>
                    <span>${this.bookingData.confirmation.paymentId}</span>
                  </div>
                `:""}
          </div>

          <button @click=${this.resetBooking} class="confirm-button">
            Book Another Service
          </button>
        </div>
      </div>
    `}}customElements.get("booking-widget")||customElements.define("booking-widget",Se),customElements.define("booking-widget",Se);
//# sourceMappingURL=index.js.map
