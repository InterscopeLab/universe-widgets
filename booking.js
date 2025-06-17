/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let s=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=r.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(i,e))}return e}toString(){return this.cssText}};const a=e=>new s("string"==typeof e?e:e+"",void 0,i),o=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1]),e[0]);return new s(r,e,i)},n=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return a(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,u=globalThis,g=u.trustedTypes,v=g?g.emptyScript:"",b=u.reactiveElementPolyfillSupport,f=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},$=(e,t)=>!l(e,t),S={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&c(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){const a=r?.call(this);s.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(t)i.adoptedStyleSheets=r.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of r){const r=document.createElement("style"),s=e.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=r,this[r]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??$)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[f("elementProperties")]=new Map,x[f("finalized")]=new Map,b?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=globalThis,k=_.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,w="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+E,C=`<${D}>`,I=document,P=()=>I.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,T="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,U=/>/g,H=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,j=/"/g,F=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),R=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),V=new WeakMap,W=I.createTreeWalker(I,129);function Y(e,t){if(!N(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const G=(e,t)=>{const i=e.length-1,r=[];let s,a=2===t?"<svg>":3===t?"<math>":"",o=M;for(let t=0;t<i;t++){const i=e[t];let n,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===M?"!--"===l[1]?o=O:void 0!==l[1]?o=U:void 0!==l[2]?(F.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=H):void 0!==l[3]&&(o=H):o===H?">"===l[0]?(o=s??M,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,n=l[1],o=void 0===l[3]?H:'"'===l[3]?j:q):o===j||o===q?o=H:o===O||o===U?o=M:(o=H,s=void 0);const h=o===H&&e[t+1].startsWith("/>")?" ":"";a+=o===M?i+C:c>=0?(r.push(n),i.slice(0,c)+w+i.slice(c)+E+h):i+E+(-2===c?t:h)}return[Y(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class J{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,a=0;const o=e.length-1,n=this.parts,[l,c]=G(e,t);if(this.el=J.createElement(l,i),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=W.nextNode())&&n.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(w)){const t=c[a++],i=r.getAttribute(e).split(E),o=/([.?@])?(.*)/.exec(t);n.push({type:1,index:s,name:o[2],strings:i,ctor:"."===o[1]?ee:"?"===o[1]?te:"@"===o[1]?ie:X}),r.removeAttribute(e)}else e.startsWith(E)&&(n.push({type:6,index:s}),r.removeAttribute(e));if(F.test(r.tagName)){const e=r.textContent.split(E),t=e.length-1;if(t>0){r.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],P()),W.nextNode(),n.push({type:2,index:++s});r.append(e[t],P())}}}else if(8===r.nodeType)if(r.data===D)n.push({type:2,index:s});else{let e=-1;for(;-1!==(e=r.data.indexOf(E,e+1));)n.push({type:7,index:s}),e+=E.length-1}s++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,r){if(t===R)return t;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const a=z(t)?void 0:t._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),void 0===a?s=void 0:(s=new a(e),s._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(t=K(e,s._$AS(e,t.values),s,r)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??I).importNode(t,!0);W.currentNode=r;let s=W.nextNode(),a=0,o=0,n=i[0];for(;void 0!==n;){if(a===n.index){let t;2===n.type?t=new Q(s,s.nextSibling,this,e):1===n.type?t=new n.ctor(s,n.name,n.strings,this,e):6===n.type&&(t=new re(s,this,e)),this._$AV.push(t),n=i[++o]}a!==n?.index&&(s=W.nextNode(),a++)}return W.currentNode=I,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),z(e)?e===L||null==e||""===e?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==R&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>N(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==L&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new Z(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new J(e)),t}k(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new Q(this.O(P()),this.O(P()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(e,t=this,i,r){const s=this.strings;let a=!1;if(void 0===s)e=K(this,e,t,0),a=!z(e)||e!==this._$AH&&e!==R,a&&(this._$AH=e);else{const r=e;let o,n;for(e=s[0],o=0;o<s.length-1;o++)n=K(this,r[i+o],t,o),n===R&&(n=this._$AH[o]),a||=!z(n)||n!==this._$AH[o],n===L?e=L:e!==L&&(e+=(n??"")+s[o+1]),this._$AH[o]=n}a&&!r&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}}class te extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==L)}}class ie extends X{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??L)===R)return;const i=this._$AH,r=e===L&&i!==L||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==L&&(i===L||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const se=_.litHtmlPolyfillSupport;se?.(J,Q),(_.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ae extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const r=i?.renderBefore??t;let s=r._$litPart$;if(void 0===s){const e=i?.renderBefore??null;r._$litPart$=s=new Q(t.insertBefore(P(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}}ae._$litElement$=!0,ae.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ae});const oe=globalThis.litElementPolyfillSupport;oe?.({LitElement:ae}),(globalThis.litElementVersions??=[]).push("4.1.1");class ne extends ae{static properties={widgetId:{type:String},color:{type:String},loading:{type:Boolean},stripeConfig:{type:Object},services:{type:Object},globalAdditionalServices:{type:Array},squareFootagePricing:{type:Array},selectedService:{type:Object},selectedExtras:{type:Array},selectedSquareFootage:{type:Object},currentStep:{type:Number},showServiceDetails:{type:Boolean},paymentProcessing:{type:Boolean},paymentError:{type:String},bookingData:{type:Object},cardData:{type:Object},businessHours:{type:Object},formError:{type:String}};constructor(){super(),this.widgetId="",this.color="#6366f1",this.loading=!1,this.stripeConfig=null,this.services=new Map,this.globalAdditionalServices=[],this.squareFootagePricing=[],this.selectedService=null,this.selectedExtras=[],this.selectedSquareFootage=null,this.currentStep=1,this.showServiceDetails=!1,this.paymentProcessing=!1,this.paymentError="",this.bookingData={serviceInfo:null,schedule:{date:"",time:"",frequency:"one-time"},generalInfo:{name:"",email:"",phone:"",address:"",postalCode:"",state:""},payment:{method:"card"}},this.cardData={cardNumber:"",cardName:"",expiryDate:"",cvv:""},this.apiSecret="booking-d9e180f3-d77d-4c25-a163-4605c8ddfb48",this.businessHours={start:7,end:17},this.formError=""}async connectedCallback(){super.connectedCallback(),await this.fetchBookingSettings()}async fetchBookingSettings(){this.loading=!0;try{const e=await fetch(`https://horizondesk-api-0a74dafcd4fb.herokuapp.com/api/booking/settings/byAppId?appId=${this.widgetId}`,{headers:{"x-api-secret":this.apiSecret}});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();this.color=t.color||"#6366f1",t.services&&(this.services=new Map(Object.entries(t.services).map((([e,t])=>[e,{id:e,...t}])))),this.globalAdditionalServices=t.globalAdditionalServices||[],this.squareFootagePricing=t.squareFootagePricing||[],this.stripeConfig=t.stripe||{}}catch(e){console.error("Failed to load booking settings:",e)}finally{this.loading=!1}}handleServiceSelect(e){const t=this.services.get(e);this.selectedService={id:e,...t},this.selectedExtras=[],this.selectedSquareFootage=null,this.showServiceDetails=!0}toggleExtra(e){const t=this.selectedExtras.some((t=>t.name===e.name));this.selectedExtras=t?this.selectedExtras.filter((t=>t.name!==e.name)):[...this.selectedExtras,e]}selectSquareFootage(e){this.selectedSquareFootage=e}confirmServiceSelection(){this.bookingData.serviceInfo={service:this.selectedService,extras:this.selectedExtras,squareFootage:this.selectedSquareFootage,subtotal:this.subtotal,total:this.total},this.showServiceDetails=!1,this.nextStep()}formatMinutesToHours(e){const t=Math.floor(e/60),i=e%60;return t>0?`${t}h ${i}m`:`${i}m`}get subtotal(){return(this.selectedService?.price||0)+(this.selectedSquareFootage?.price||0)+this.selectedExtras.reduce(((e,t)=>e+(t.price||0)),0)}get total(){return this.subtotal}nextStep(){if(this.formError="",2===this.currentStep){const{date:e,time:t,frequency:i}=this.bookingData.schedule;if(!e||!t||!i)return void(this.formError="Please select a date, time, and frequency.")}if(3===this.currentStep){const e=this.bookingData.generalInfo;if(!["name","email","phone","address","postalCode","state"].every((t=>e[t]?.trim())))return void(this.formError="Please fill in all personal details.")}this.currentStep<5&&this.currentStep++}prevStep(){this.currentStep>1&&this.currentStep--}handleScheduleChange(e){const{name:t,value:i}=e.target;if("time"===t&&i){const[r,s]=i.split(":").map(Number),a=60*r+s,o=15*Math.round(a/15),n=Math.floor(o/60),l=o%60,c=`${String(n).padStart(2,"0")}:${String(l).padStart(2,"0")}`;return this.bookingData.schedule={...this.bookingData.schedule,[t]:c},void(e.target.value=c)}this.bookingData.schedule={...this.bookingData.schedule,[t]:i}}handleGeneralInfoChange(e){const{name:t,value:i}=e.target;this.bookingData.generalInfo={...this.bookingData.generalInfo,[t]:i}}handleCardChange(e){const{name:t,value:i}=e.target;this.cardData={...this.cardData,[t]:i}}validateCard(){return!this.cardData.cardNumber||this.cardData.cardNumber.replace(/\s/g,"").length<16?"Invalid card number":this.cardData.cardName?this.cardData.expiryDate&&this.cardData.expiryDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)?!this.cardData.cvv||this.cardData.cvv.length<3?"CVV is required and must be at least 3 digits":null:"Expiry date is invalid. Use MM/YY format.":"Name on card is required"}async completeBooking(){this.paymentProcessing=!0,this.paymentError="";const e=this.validateCard();if(e)return this.paymentError=e,void(this.paymentProcessing=!1);try{const e={bookingData:{appId:this.widgetId,services:{[this.bookingData.serviceInfo.service.id]:{name:this.bookingData.serviceInfo.service.name,price:this.bookingData.serviceInfo.service.price,additionalServices:this.bookingData.serviceInfo.extras,squareFootage:this.bookingData.serviceInfo.squareFootage}},subtotal:this.bookingData.serviceInfo.subtotal,total:this.bookingData.serviceInfo.total,clientInfo:this.bookingData.generalInfo,schedule:this.bookingData.schedule},paymentData:{paymentMethodId:"pm_card_visa",currency:"usd",returnUrl:`${window.location.origin}/confirmation`}},t=await fetch("https://horizondesk-api-0a74dafcd4fb.herokuapp.com/api/booking/create-and-pay",{method:"POST",headers:{"Content-Type":"application/json","x-api-secret":this.apiSecret},body:JSON.stringify(e)}),i=await t.json();if(!t.ok)throw new Error(i.error||"Error al procesar el pago");if("succeeded"!==i.payment.status&&"requires_capture"!==i.payment.status)throw new Error("El pago no se completó correctamente");this.nextStep(),this.bookingData.confirmation={bookingId:i.booking._id,paymentId:i.payment.paymentIntentId}}catch(e){console.error("Error en completeBooking:",e),this.paymentError=e.message||"Error al procesar el pago","StripeCardError"===e.type&&(this.paymentError=`Error de tarjeta: ${e.message}`)}finally{this.paymentProcessing=!1}}resetBooking(){this.currentStep=1,this.selectedService=null,this.selectedExtras=[],this.selectedSquareFootage=null,this.showServiceDetails=!1,this.cardData={cardNumber:"",cardName:"",expiryDate:"",cvv:""},this.bookingData={serviceInfo:null,schedule:{date:"",time:"",frequency:"one-time"},generalInfo:{name:"",email:"",phone:"",address:"",postalCode:"",state:""},payment:{method:"card"}}}formatCardNumber(e){let t=e.target.value.replace(/\D/g,"");t=t.replace(/(\d{4})/g,"$1 ").trim(),e.target.value=t,this.cardData.cardNumber=t}formatExpiryDate(e){let t=e.target.value.replace(/\D/g,"");t.length>2&&(t=t.substring(0,2)+"/"+t.substring(2,4)),e.target.value=t,this.cardData.expiryDate=t}adjustColor(e,t){if(!e||"#"!==e[0])return e;3===(e=e.replace("#","")).length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);let i=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),s=parseInt(e.substr(4,2),16);i=Math.max(0,Math.min(255,i+t)),r=Math.max(0,Math.min(255,r+t)),s=Math.max(0,Math.min(255,s+t));return`#${i.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}`}firstUpdated(){this.applyDynamicColor()}updated(e){e.has("color")&&this.applyDynamicColor()}applyDynamicColor(){this.style.setProperty("--primary-color",this.color),this.style.setProperty("--primary-light",this.adjustColor(this.color,20)),this.style.setProperty("--primary-dark",this.adjustColor(this.color,-20))}static styles=o`
    :host {
      --primary-color: ${a(this.color)};
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
      height: 120px;
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
          --primary-color: ${a(this.color)};
          --primary-light: ${a(this.adjustColor(this.color,20))};
          --primary-dark: ${a(this.adjustColor(this.color,-20))};
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
      <div class="step-content">
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
                      <div class="size-selection">
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
    `}renderStep2(){const e=[];for(let t=this.businessHours.start;t<=this.businessHours.end;t++)for(let i=0;i<60;i+=15){const r=`${String(t).padStart(2,"0")}:${String(i).padStart(2,"0")}`;e.push(r)}const t=new Date;t.setHours(0,0,0,0);const i=t.toISOString().split("T")[0];return B`
      <div class="step-content">
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
              min=${i}
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
    `}renderStep4(){return B`
      <div class="step-content">
        <div class="form-container">
          <h3>Payment Information</h3>
          ${this.paymentError?B`<div class="error-message">${this.paymentError}</div>`:""}

          <div class="payment-form">
            <div class="form-group">
              <label for="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                @input=${this.formatCardNumber}
                maxlength="19"
                .value=${this.cardData.cardNumber}
              />
            </div>

            <div class="form-group">
              <label for="cardName">Name on Card</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                placeholder="John Doe"
                @change=${this.handleCardChange}
                .value=${this.cardData.cardName}
              />
            </div>

            <div style="display: flex; gap: 1rem;">
              <div class="form-group" style="flex: 1;">
                <label for="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  @input=${this.formatExpiryDate}
                  maxlength="5"
                  .value=${this.cardData.expiryDate}
                />
              </div>

              <div class="form-group" style="flex: 1;">
                <label for="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  @change=${this.handleCardChange}
                  maxlength="4"
                  .value=${this.cardData.cvv}
                />
              </div>
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
    `}renderStep5(){return B`
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
    `}}customElements.get("booking-widget")||customElements.define("booking-widget",ne),customElements.define("booking-widget",ne);
//# sourceMappingURL=index.js.map
