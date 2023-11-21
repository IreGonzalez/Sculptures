/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var e,t,o,s;const r=window,i=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;class l{constructor(e,t,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&a.set(t,e))}return e}toString(){return this.cssText}}const d=e=>new l("string"==typeof e?e:e+"",void 0,n),p=(e,t)=>{i?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{let o=document.createElement("style"),s=r.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=t.cssText,e.appendChild(o)})},h=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return d(t)})(e):e,c=window,u=c.trustedTypes,m=u?u.emptyScript:"",v=c.reactiveElementPolyfillSupport,g={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},f=(e,t)=>t!==e&&(t==t||e==e),$={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:f};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,o)=>{let s=this._$Ep(o,t);void 0!==s&&(this._$Ev.set(s,o),e.push(s))}),e}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let o="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,o,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(s){let r=this[e];this[t]=s,this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||$}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let e of o)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Ep(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return p(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=$){var s;let r=this.constructor._$Ep(e,o);if(void 0!==r&&!0===o.reflect){let i=(void 0!==(null===(s=o.converter)||void 0===s?void 0:s.toAttribute)?o.converter:g).toAttribute(t,o.type);this._$El=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$El=null}}_$AK(e,t){var o;let s=this.constructor,r=s._$Ev.get(e);if(void 0!==r&&this._$El!==r){let e=s.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:g;this._$El=r,this[r]=i.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let s=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||f)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1,o=this._$AL;try{(t=this.shouldUpdate(o))?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:y}),(null!==(e=c.reactiveElementVersions)&&void 0!==e?e:c.reactiveElementVersions=[]).push("1.6.1");const _=window,A=_.trustedTypes,b=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,C="?"+w,x=`<${C}>`,S=document,P=()=>S.createComment(""),F=e=>null===e||"object"!=typeof e&&"function"!=typeof e,k=Array.isArray,Y=e=>k(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),L="[ 	\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,R=/>/g,N=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,W=/"/g,M=/^(?:script|style|textarea|title)$/i,O=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),D=O(1),T=(O(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),B=new WeakMap,I=S.createTreeWalker(S,129,null,!1),z=(e,t)=>{let o=e.length-1,s=[],r,i=2===t?"<svg>":"",n=H;for(let t=0;t<o;t++){let o=e[t],a,l,d=-1,p=0;for(;p<o.length&&(n.lastIndex=p,null!==(l=n.exec(o)));)p=n.lastIndex,n===H?"!--"===l[1]?n=V:void 0!==l[1]?n=R:void 0!==l[2]?(M.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=null!=r?r:H,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?N:'"'===l[3]?W:U):n===W||n===U?n=N:n===V||n===R?n=H:(n=N,r=void 0);let h=n===N&&e[t+1].startsWith("/>")?" ":"";i+=n===H?o+x:d>=0?(s.push(a),o.slice(0,d)+E+o.slice(d)+w+h):o+w+(-2===d?(s.push(void 0),t):h)}let a=i+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,s]};class q{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let r=0,i=0,n=e.length-1,a=this.parts,[l,d]=z(e,t);if(this.el=q.createElement(l,o),I.currentNode=this.el.content,2===t){let e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=I.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){let e=[];for(let t of s.getAttributeNames())if(t.endsWith(E)||t.startsWith(w)){let o=d[i++];if(e.push(t),void 0!==o){let e=s.getAttribute(o.toLowerCase()+E).split(w),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?X:"?"===t[1]?ee:"@"===t[1]?et:Z})}else a.push({type:6,index:r})}for(let t of e)s.removeAttribute(t)}if(M.test(s.tagName)){let e=s.textContent.split(w),t=e.length-1;if(t>0){s.textContent=A?A.emptyScript:"";for(let o=0;o<t;o++)s.append(e[o],P()),I.nextNode(),a.push({type:2,index:++r});s.append(e[t],P())}}}else if(8===s.nodeType){if(s.data===C)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(w,e+1));)a.push({type:7,index:r}),e+=w.length-1}}r++}}static createElement(e,t){let o=S.createElement("template");return o.innerHTML=e,o}}function G(e,t,o=e,s){var r,i,n;if(t===T)return t;let a=void 0!==s?null===(r=o._$Co)||void 0===r?void 0:r[s]:o._$Cl,l=F(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null===(i=null==a?void 0:a._$AO)||void 0===i||i.call(a,!1),void 0===l?a=void 0:(a=new l(e))._$AT(e,o,s),void 0!==s?(null!==(n=o._$Co)&&void 0!==n?n:o._$Co=[])[s]=a:o._$Cl=a),void 0!==a&&(t=G(e,a._$AS(e,t.values),a,s)),t}class K{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:o},parts:s}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(o,!0);I.currentNode=r;let i=I.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new J(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new eo(i,this,e)),this._$AV.push(t),l=s[++a]}n!==(null==l?void 0:l.index)&&(i=I.nextNode(),n++)}return r}v(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class J{constructor(e,t,o,s){var r;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){F(e=G(this,e,t))?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==T&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Y(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==j&&F(this._$AH)?this._$AA.nextSibling.data=e:this.$(S.createTextNode(e)),this._$AH=e}g(e){var t;let{values:o,_$litType$:s}=e,r="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=q.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(o);else{let e=new K(r,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new q(e)),t}T(e){k(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,s=0;for(let r of e)s===t.length?t.push(o=new J(this.k(P()),this.k(P()),this,this.options)):o=t[s],o._$AI(r),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Z{constructor(e,t,o,s,r){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,s){let r=this.strings,i=!1;if(void 0===r)(i=!F(e=G(this,e,t,0))||e!==this._$AH&&e!==T)&&(this._$AH=e);else{let s,n;let a=e;for(e=r[0],s=0;s<r.length-1;s++)(n=G(this,a[o+s],t,s))===T&&(n=this._$AH[s]),i||(i=!F(n)||n!==this._$AH[s]),n===j?e=j:e!==j&&(e+=(null!=n?n:"")+r[s+1]),this._$AH[s]=n}i&&!s&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class X extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}const Q=A?A.emptyScript:"";class ee extends Z{constructor(){super(...arguments),this.type=4}j(e){e&&e!==j?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class et extends Z{constructor(e,t,o,s,r){super(e,t,o,s,r),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=G(this,e,t,0))&&void 0!==o?o:j)===T)return;let s=this._$AH,r=e===j&&s!==j||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==j&&(s===j||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class eo{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const es=_.litHtmlPolyfillSupport;null==es||es(q,J),(null!==(t=_.litHtmlVersions)&&void 0!==t?t:_.litHtmlVersions=[]).push("2.7.3");const er=(e,t,o)=>{var s,r;let i=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:t,n=i._$litPart$;if(void 0===n){let e=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:null;i._$litPart$=n=new J(t.insertBefore(P(),e),e,void 0,null!=o?o:{})}return n._$AI(e),n};class ei extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=er(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return T}}ei.finalized=!0,ei._$litElement$=!0,null===(o=globalThis.litElementHydrateSupport)||void 0===o||o.call(globalThis,{LitElement:ei});const en=globalThis.litElementPolyfillSupport;null==en||en({LitElement:ei}),(null!==(s=globalThis.litElementVersions)&&void 0!==s?s:globalThis.litElementVersions=[]).push("3.3.2"),customElements.define("persona-header",class extends ei{static get properties(){return{}}constructor(){super()}render(){return D` <h1 style="visibility: hidden;">persona Header</h1> `}}),customElements.define("persona-sidebar",class extends ei{static get properties(){return{peopleLength:{type:Number},peopleWorkshop:{type:Number},maxValueForFilter:{type:Number},minValueForFilter:{type:Number},createdYearValueForFilter:{type:Number}}}constructor(){super()}render(){return console.log("----------- render sidebar",this.peopleLength,this.peopleWorkshop),D`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      />

      <aside>
        <section>
          <div class="mt-5">
            <button
              class="w-100 btn btn-success"
              style="font-size: 50px; display: flex; justify-content: center;"
              @click="${this.newPerson}"
            >
              <strong>Añadir</strong>
            </button>
            <h2 class="text-center">Hay ${this.peopleLength} autores,</h2>
            <h2 class="text-center">${this.peopleWorkshop} tienen taller</h2>
            <div>
              <input
                type="range"
                list="createdYear"
                @input=${this.onCreatedYearSelected}
                min="${this.minValueForFilter}"
                max=${this.maxValueForFilter}
                step="50"
                .value=${this.maxValueForFilter}
              />
            </div>
          </div>
        </section>
      </aside>
    `}newPerson(){console.log("new-person en persona-sidebar"),console.log("se va a crear una nueva persona"),this.dispatchEvent(new CustomEvent("new-person",{}))}onCreatedYearSelected(e){console.log("a\xf1o seleccionado",e.target.value),this.createdYearValueForFilter=e.target.value,this.dispatchEvent(new CustomEvent("createdYearValue-for-filter",{detail:{createdYearValueForFilter:this.createdYearValueForFilter}}))}}),customElements.define("persona-ficha-listado",class extends ei{static get properties(){return{fname:{type:String},createdYear:{type:Number},photo:{type:Object},Workshop:{type:Boolean},profile:{type:String}}}constructor(){super()}render(){return D`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      />

      <div class="card h-100" style="display: flex;flex-direction: column; justify-content: space-between;">
        <div style="height: 200px;display: contents">
          <img
            class="card-img-top"
            src="${this.photo.src}"
            style="max-height: 100%; max-width: 100%"
            alt="${this.photo.alt}"
          />
          </div>
            <div class="card-body" style="max-height: 200px; margin-top:auto;">
              <h5 class="card-title">${this.fname}</h5>
              <p class="card-text">${this.profile}</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${this.createdYear}</li>
              </ul>
              ${!0===this.Workshop?D`<p><strong>Tiene taller</strong></p>`:D``}
            </div>
            <div class="card-footer">
              <button
                class="btn btn-danger col-5"
                @click="${this.deletePerson}"
              >
                <strong>delete</strong>
              </button>
              <button
                class="btn btn-info col-5 offset-1"
                style="color: white;"
                @click="${this.moreInfo}"
              >
                <strong>Info</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    `}deletePerson(){console.log("deletePerson"),console.log("se va a borrar la persona de nombre "+this.fname),this.dispatchEvent(new CustomEvent("delete-person",{detail:{name:this.fname}}))}moreInfo(){console.log("moreInfo"),console.log("Se ha pedido m\xe1s informaci\xf3n de la persona "+this.fname),this.dispatchEvent(new CustomEvent("info-person",{detail:{name:this.fname}}))}}),customElements.define("persona-form",class extends ei{static get properties(){return{person:{type:Object},editingPerson:{type:Boolean}}}constructor(){super(),this.resetFormData()}render(){return D`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      />
      <div>
        <form>
          <div class="form-group">
            <label>Autor</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nombre completo"
              .value="${this.person.name}"
              @input="${this.updateName}"
              ?disabled="${this.editingPerson}"
            />
          </div>
          <div class="form-group">
            <label>Descripción</label>
            <textarea
              type="text"
              class="form-control"
              placeholder="perfil"
              rows="5"
              .value="${this.person.profile}"
              @input="${this.updateProfile}"
            ></textarea>
          </div>
          <div class="form-group">
            <label>Año de creación</label>
            <input
              type="text"
              class="form-control"
              placeholder="Año de creación"
              .value="${this.person.createdYear}"
              @input="${this.updatecreatedYear}"
            />
          </div>
          <div class="form-group">
            <label
              >Tiene Taller
              <input
                type="checkbox"
                placeholder="Si"
                ?checked="${this.person.Workshop}"
                @change="${this.updateWorkshop}"
            /></label>
          </div>
          <button class="btn btn-primary" @click="${this.goBack}">
            <!-- Este componente es el que debe obtener la responsabilidad de limpiar el formulario -->
            <strong>Atrás</strong>
          </button>
          <button
            class="btn btn-primary btn-success"
            @click="${this.storePerson}"
          >
            <strong>Guardar</strong>
          </button>
        </form>
      </div>
    `}updateName(e){console.log("updateName"),console.log("actualizamos la propiedad name con el valor de "+e.target.value),this.person.name=e.target.value}updateProfile(e){console.log("updateProfile"),console.log("actualizamos la propiedad profile con el valor de "+e.target.value),this.person.profile=e.target.value}updatecreatedYear(e){console.log("updatecreatedYear"),console.log("actualizamos los a\xf1os en lacompa\xf1\xeda con el valor de "+e.target.value),this.person.createdYear=e.target.value}updateWorkshop(e){console.log("updateWorkshop"),console.log("actualizamos si tiene taller "+e.target.checked),this.person.updateWorkshop=e.target.checked}goBack(e){console.log("goBack"),e.preventDefault(),this.dispatchEvent(new CustomEvent("persona-form-close",{})),this.resetFormData()}storePerson(e){e.preventDefault(),console.log("storePerson"),console.log("La propiedad name vale "+this.person.name),console.log("La propiedad profile vale "+this.person.profile),console.log("La propiedad createdYear vale "+this.person.createdYear),this.person.photo={src:"./images/escultura.jpg",alt:"persona"},this.dispatchEvent(new CustomEvent("persona-form-store",{detail:{person:{name:this.person.name,profile:this.person.profile,createdYear:this.person.createdYear,photo:this.person.photo,Workshop:this.person.updateWorkshop},editingPerson:this.editingPerson}}))}resetFormData(){console.log("resetFormData"),this.person={},this.person.name="",this.person.profile="",this.person.createdYear="",this.person.updateWorkshop=!1,this.editingPerson=!1}}),customElements.define("persona-main-dm",class extends ei{static get properties(){return{people:{type:Array}}}constructor(){super(),this.people=[{name:"Camille Claudel",createdYear:1893,photo:{src:"./images/claudel-camille_la-valse_1895-1905_aware_women-artists_artistes-femmes-1158x1500.jpg",alt:"La Valse _ Camille Claudel"},Workshop:!1,profile:"La Valse. Escultura vaciada en bronce. Museo Rodin, Par\xeds."},{name:"Auguste Rodin",createdYear:1889,photo:{src:"./images/Rodin-danaide.jpg",alt:"Danaide _ Auguste Rodin"},Workshop:!0,profile:"Danaide. Escultura tallada en m\xe1rmol. Museo Rodin, Par\xeds."},{name:"Constantin Brancusi",createdYear:1913,photo:{src:"./images/brancusi-danaide.jpg",alt:"Danaide _ Brancusi"},Workshop:!0,profile:"Danaide. Escultura vaciada en bronce. Centro Pompidou, Par\xeds."},{name:"Agessandro, Atenodoro y Polidoro de Rodas",createdYear:1506,photo:{src:"./images/agessandro-laocoonte.jpg",alt:"Laocoonte y sus hijos _ Agessandro de Rodas"},Workshop:!1,profile:"Laocoonte y sus hijos. Escultura tallada en m\xe1rmol. Museo Pio-Clementino, Ciudad del Vaticano."},{name:"Gian Lorenzo Bernini",createdYear:1625,photo:{src:"./images/bernini-apolodafne.jpg",alt:"Apolo y Dafne _ Gian Lorenzo Bernini"},Workshop:!0,profile:"Apolo y Dafne. Escultura tallada en m\xe1rmol. Galer\xeda Borghese, Roma."}]}updated(e){if(console.log("updated persona main DM"),e.has("people")){console.log("Ha cambiado People");let e=this.people;this.dispatchEvent(new CustomEvent("add-people",{detail:{people:e}}))}}}),// ("nombre de la etiqueta", clase)
customElements.define("persona-main",class extends ei{static get properties(){return{people:{type:Array},showPersonForm:{type:Boolean},createdYearValueForFilter:{type:Number}}}constructor(){super(),this.people=[],this.showPersonForm=!1}peopleDataUpdate(e){console.log("peopleDataUpdate",e.detail.people),this.people=e.detail.people}updated(e){if(console.log("updated main",e),e.has("showPersonForm")&&(console.log("ha cambiado el valor de la propiedad showPersonForm en persona-main"),!0===this.showPersonForm?this.showPersonFormData():this.showPersonList()),e.has("people")){console.log("Ha cambiado el Array peopleDataInfo",this.people);let e=this.people;this.dispatchEvent(new CustomEvent("people-data-info",{detail:e})),this.maxValueForFilter(),this.minValueForFilter()}}showPersonList(){console.log("showPersonList"),console.log("Mostrando el listado de personas"),this.shadowRoot.getElementById("peopleList").classList.remove("d-none"),this.shadowRoot.getElementById("personForm").classList.add("d-none")}showPersonFormData(){console.log("showPersonFormData"),console.log("Mostrando el formulario de personas"),this.shadowRoot.getElementById("peopleList").classList.add("d-none"),this.shadowRoot.getElementById("personForm").classList.remove("d-none")}// El punto es necesario incluirlo porque no lo pasamos como atributo, sino como propiedad al componente
render(){return D`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      />
      <h2 class="text-center">Escultura</h2>
      <div class="row" id="peopleList" style="margin: 0;">
        <div
          class="row row-cols-1 row-cols-sm-4"
          style=" row-gap: var(--bs-gutter-x);"
        >
          ${this.people.filter(e=>e.createdYear<=this.createdYearValueForFilter).map(e=>D`
                <persona-ficha-listado
                  fname="${e.name}"
                  createdYear="${e.createdYear}"
                  .photo="${e.photo}"
                  .Workshop="${e.Workshop}"
                  profile="${e.profile}"
                  @delete-person="${this.deletePerson}"
                  @info-person="${this.infoPerson}"
                ></persona-ficha-listado>
              `)}
        </div>
      </div>
      <div class="row">
        <persona-form
          id="personForm"
          class="border rounded border-primary d-none"
          @persona-form-close="${this.personFormClose}"
          @persona-form-store="${this.personFormStore}"
        ></persona-form>
      </div>
      <persona-main-dm @add-people="${this.peopleDataUpdate}"></persona-main-dm>
    `}deletePerson(e){console.log("deletePerson en Main"),console.log("Se va a borrar la persona de nombre "+e.detail.name),this.people=this.people.filter(t=>t.name!=e.detail.name)}infoPerson(e){console.log("infoPerson"),console.log("Se ha pedido m\xe1s informaci\xf3n de la persona "+e.detail.name),console.log(e.detail);let t=this.people.filter(t=>t.name===e.detail.name),o={};o.name=t[0].name,o.profile=t[0].profile,o.createdYear=t[0].createdYear,o.Workshop=t[0].Workshop,this.shadowRoot.getElementById("personForm").person=o,this.shadowRoot.getElementById("personForm").editingPerson=!0,this.showPersonForm=!0}personFormClose(e){console.log("personFormClose"),console.log("se ha cerrado el formulario de persona"),this.showPersonForm=!1}personFormStore(e){console.log("personFormStore"),console.log("Se va a almacenar una persona"),!0===e.detail.editingPerson?(console.log("se va a actualizar la persona de nombre "+e.detail.person.name),this.people=this.people.map(t=>t.name===e.detail.person.name?t=e.detail.person:t)):(console.log("Se va a almacenar una persona nueva"),// this.people.push(e.detail.person);
this.people=[...this.people,e.detail.person]),console.log("persona almacenada"),this.showPersonForm=!1}maxValueForFilter(e){let t=1950;this.people.forEach(e=>{e.createdYear>t&&(t=e.createdYear)}),this.createdYearValueForFilter=t,this.dispatchEvent(new CustomEvent("max-value",{detail:{maxValue:t}}))}minValueForFilter(e){let t=1450;this.people.forEach(e=>{e.createdYear<t&&(t=e.createdYear)}),this.dispatchEvent(new CustomEvent("min-value",{detail:{minValue:t}}))}}),// ("nombre de la etiqueta", clase)
customElements.define("persona-footer",class extends ei{static get properties(){return{}}constructor(){super()}render(){return D`
            <h5>@PersonaApp 2023</h5>
        `}}),customElements.define("persona-calculator",class extends ei{static get properties(){return{fpeople:{type:Array},createdYearValueForFilter:{type:Number}}}constructor(){super()}updated(e){console.log("updated calculator",e),this.getCounterPeople(),this.getCounterWorkshop()}getCounterPeople(){let e=this.fpeople?.filter(e=>e.createdYear<=this.createdYearValueForFilter);this.dispatchEvent(new CustomEvent("change-fpeople-length",{detail:{fpeople:e?.length||0}}))}getCounterWorkshop(){let e=this.fpeople?.filter(e=>e.createdYear<=this.createdYearValueForFilter).filter(e=>!0===e.Workshop);this.dispatchEvent(new CustomEvent("change-counterWorkshop",{detail:{counterWorkshop:e?.length||0}}))}}),customElements.define("persona-app",class extends ei{static get properties(){return{people:{type:Array}}}constructor(){super()}render(){return console.log("----------- render app",this.peopleLength,this.peopleWorkshop),D`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      />
      <persona-header></persona-header>
      <persona-calculator
        @change-fpeople-length="${this.getPeopleLength}"
        @change-counterWorkshop="${this.getCounterWorkshop}"
      ></persona-calculator>
      <div class="row">
        <persona-sidebar
          class="col-2"
          @new-person="${this.newPerson}"
          @createdYearValue-for-filter=${this.createdYearValueForFilter}
        ></persona-sidebar>
        <persona-main
          class="col-10"
          @people-data-info="${this.peopleDataInfo}"
          @max-value="${this.maxValue}"
          @min-value="${this.minValue}"
        ></persona-main>
      </div>
      <persona-footer></persona-footer>
    `}newPerson(e){console.log("newPerson en persona-app"),this.shadowRoot.querySelector("persona-main").showPersonForm=!0}getPeopleLength(e){console.log("getPeopleLength",e.detail.fpeople),// this.peopleLength = e.detail.fpeople;
this.shadowRoot.querySelector("persona-sidebar").peopleLength=e.detail.fpeople}getCounterWorkshop(e){console.log("getCounterWorkshop",e.detail.counterWorkshop),// this.peopleWorkshop = e.detail.counterWorkshop;
this.shadowRoot.querySelector("persona-sidebar").peopleWorkshop=e.detail.counterWorkshop}peopleDataInfo(e){console.log("recibe el array",e.detail),this.shadowRoot.querySelector("persona-calculator").fpeople=e.detail}maxValue(e){console.log("recoge el m\xe1ximo valor de createdYear "+e.detail),this.shadowRoot.querySelector("persona-sidebar").maxValueForFilter=e.detail.maxValue}minValue(e){console.log("recoge el m\xe1ximo valor de createdYear "+e.detail),this.shadowRoot.querySelector("persona-sidebar").minValueForFilter=e.detail.minValue}createdYearValueForFilter(e){console.log("recoge el valor establecido para el filtro, que es: "+e.detail.createdYearValueForFilter),this.shadowRoot.querySelector("persona-main").createdYearValueForFilter=e.detail.createdYearValueForFilter,this.shadowRoot.querySelector("persona-calculator").createdYearValueForFilter=e.detail.createdYearValueForFilter}});//# sourceMappingURL=index.63c9f97b.js.map

//# sourceMappingURL=index.63c9f97b.js.map
