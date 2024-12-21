import{s as ae}from"./index-BuXhlKP-.js";import{B as ie,D as R,E as re,a as W,f as v,g as Q,b as _,G as V,o as s,e as d,j as o,H as k,m as u,k as g,n as b,i as p,F as x,p as S,r as F,s as oe,l as se,c as le,d as j,z as w,w as P,T as ce,u as ue,v as L,t as I,q as de,C as me}from"./app-BgyWysIT.js";import{u as pe,Z as z,b as he,F as ge,a as D,R as M,c as fe,s as be}from"./index-qncczC_e.js";import{b as Z,s as Y,c as ve,a as ye}from"./index-BpWTWL2-.js";import{_ as Ie}from"./plugin-vue_export-helper-DlAUqK2U.js";var we=function(t){var n=t.dt;return`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: `.concat(n("galleria.border.width"),`;
    border-color: `).concat(n("galleria.border.color"),`;
    border-radius: `).concat(n("galleria.border.radius"),`;
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute !important;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: `).concat(n("galleria.nav.button.background"),`;
    color: `).concat(n("galleria.nav.button.color"),`;
    width: `).concat(n("galleria.nav.button.size"),`;
    height: `).concat(n("galleria.nav.button.size"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),", box-shadow ").concat(n("galleria.transition.duration"),`;
    margin: calc(-1 * calc(`).concat(n("galleria.nav.button.size"),") / 2) ").concat(n("galleria.nav.button.gutter")," 0 ").concat(n("galleria.nav.button.gutter"),`;
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: `).concat(n("galleria.nav.button.hover.background"),`;
    color: `).concat(n("galleria.nav.button.hover.color"),`;
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: `).concat(n("galleria.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.nav.button.focus.ring.width")," ").concat(n("galleria.nav.button.focus.ring.style")," ").concat(n("galleria.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.nav.button.focus.ring.offset"),`;
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: `).concat(n("galleria.nav.icon.size"),`;
    width: `).concat(n("galleria.nav.icon.size"),`;
    height: `).concat(n("galleria.nav.icon.size"),`;
}

.p-galleria-prev-button {
    border-radius: `).concat(n("galleria.nav.button.prev.border.radius"),`;
    left: 0;
}

.p-galleria-next-button {
    border-radius: `).concat(n("galleria.nav.button.next.border.radius"),`;
    right: 0;
}

.p-galleria-prev-button:dir(rtl) {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}

.p-galleria-next-button:dir(rtl) {
    right: auto;
    left: 0;
    transform: rotate(180deg);
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity `).concat(n("galleria.transition.duration"),` ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: `).concat(n("galleria.caption.background"),`;
    color: `).concat(n("galleria.caption.color"),`;
    padding: `).concat(n("galleria.caption.padding"),`;
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 `).concat(n("galleria.thumbnail.nav.button.gutter"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: `).concat(n("galleria.thumbnail.nav.button.color"),`;
    width: `).concat(n("galleria.thumbnail.nav.button.size"),`;
    height: `).concat(n("galleria.thumbnail.nav.button.size"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(n("galleria.thumbnail.nav.button.border.radius"),`;
}

.p-galleria-thumbnail-nav-button:hover {
    background: `).concat(n("galleria.thumbnail.nav.button.hover.background"),`;
    color: `).concat(n("galleria.thumbnail.nav.button.hover.color"),`;
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: `).concat(n("galleria.thumbnail.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.thumbnail.nav.button.focus.ring.width")," ").concat(n("galleria.thumbnail.nav.button.focus.ring.style")," ").concat(n("galleria.thumbnail.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.thumbnail.nav.button.focus.ring.offset"),`;
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
    width: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
    height: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: `).concat(n("galleria.thumbnails.content.background"),`;
    padding: `).concat(n("galleria.thumbnails.content.padding"),`;
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("galleria.indicator.list.padding"),`;
    gap: `).concat(n("galleria.indicator.list.gap"),`;
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: `).concat(n("galleria.indicator.button.background"),`;
    width: `).concat(n("galleria.indicator.button.width"),`;
    height: `).concat(n("galleria.indicator.button.height"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),", box-shadow ").concat(n("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(n("galleria.indicator.button.border.radius"),`;
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: `).concat(n("galleria.indicator.button.hover.background"),`;
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: `).concat(n("galleria.indicator.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.indicator.button.focus.ring.width")," ").concat(n("galleria.indicator.button.focus.ring.style")," ").concat(n("galleria.indicator.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.indicator.button.focus.ring.offset"),`;
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(n("galleria.indicator.button.active.background"),`;
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: `).concat(n("galleria.inset.indicator.list.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: `).concat(n("galleria.inset.indicator.button.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: `).concat(n("galleria.inset.indicator.button.hover.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(n("galleria.inset.indicator.button.active.background"),`;
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute !important;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: `).concat(n("galleria.close.button.gutter"),`;
    background: `).concat(n("galleria.close.button.background"),`;
    color: `).concat(n("galleria.close.button.color"),`;
    width: `).concat(n("galleria.close.button.size"),`;
    height: `).concat(n("galleria.close.button.size"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: `).concat(n("galleria.close.button.border.radius"),`;
    outline-color: transparent;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),`;
}

.p-galleria-close-icon {
    font-size: `).concat(n("galleria.close.button.icon.size"),`;
    width: `).concat(n("galleria.close.button.icon.size"),`;
    height: `).concat(n("galleria.close.button.icon.size"),`;
}

.p-galleria-close-button:hover {
    background: `).concat(n("galleria.close.button.hover.background"),`;
    color: `).concat(n("galleria.close.button.hover.color"),`;
}

.p-galleria-close-button:focus-visible {
    box-shadow: `).concat(n("galleria.close.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.close.button.focus.ring.width")," ").concat(n("galleria.close.button.focus.ring.style")," ").concat(n("galleria.close.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.close.button.focus.ring.offset"),`;
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`)},xe={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:function(t){var n=t.instance,a=n.$attrs.showThumbnails&&n.getPositionClass("p-galleria-thumbnails",n.$attrs.thumbnailsPosition),r=n.$attrs.showIndicators&&n.getPositionClass("p-galleria-indicators",n.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":n.$attrs.fullScreen,"p-galleria-inset-indicators":n.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":n.$attrs.showItemNavigatorsOnHover&&!n.$attrs.fullScreen},a,r]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(t){var n=t.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":n.isNavBackwardDisabled()}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(t){var n=t.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":n.isNavForwardDisabled()}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(t){var n=t.instance,a=t.index;return["p-galleria-indicator",{"p-galleria-indicator-active":n.isIndicatorItemActive(a)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(t){var n=t.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavBackwardDisabled()}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(t){var n=t.instance,a=t.index,r=t.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===a,"p-galleria-thumbnail-item-active":n.isItemActive(a),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===a,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===a}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(t){var n=t.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavForwardDisabled()}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},Se=ie.extend({name:"galleria",theme:we,classes:xe});function N(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return pe(e)}var ke={name:"BaseGalleria",extends:D,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:Se,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function A(e){return Ce(e)||Te(e)||Pe(e)||Ae()}function Ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(e,t){if(e){if(typeof e=="string")return $(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}function Te(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ce(e){if(Array.isArray(e))return $(e)}function $(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var X={name:"GalleriaItem",hostName:"Galleria",extends:D,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:this.activeIndex===t}}},next:function(){var t=this.activeIndex+1,n=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",n)},prev:function(){var t=this.activeIndex!==0?this.activeIndex-1:0,n=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",n)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick:function(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter:function(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown:function(t,n){switch(t.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",n),t.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault();break}},onRightKey:function(){var t=A(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=A(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=A(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(i){return Q(i,"data-p-active")===!0}),a=_(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]'),r=t.findIndex(function(i){return i===a.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=A(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=_(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]');return t.findIndex(function(a){return a===n.parentElement})},changedFocusedIndicator:function(t,n){var a=A(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));a[t].children[0].tabIndex="-1",a[n].children[0].tabIndex="0",a[n].children[0].focus()},isIndicatorItemActive:function(t){return this.activeIndex===t},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:Z,ChevronRightIcon:Y},directives:{ripple:M}},Be=["disabled"],Oe=["id","aria-label","aria-roledescription"],_e=["disabled"],je=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],Ve=["tabindex"];function De(e,t,n,a,r,i){var h=V("ripple");return s(),d("div",u({class:e.cx("itemsContainer")},e.ptm("itemsContainer")),[o("div",u({class:e.cx("items")},e.ptm("items")),[n.showItemNavigators?k((s(),d("button",u({key:0,type:"button",class:e.cx("prevButton"),onClick:t[0]||(t[0]=function(m){return i.navBackward(m)}),disabled:i.isNavBackwardDisabled()},e.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(s(),g(b(n.templates.previousitemicon||"ChevronLeftIcon"),u({class:e.cx("prevIcon")},e.ptm("prevIcon")),null,16,["class"]))],16,Be)),[[h]]):p("",!0),o("div",u({id:n.id+"_item_"+n.activeIndex,class:e.cx("item"),role:"group","aria-label":i.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":i.ariaSlideLabel},e.ptm("item")),[n.templates.item?(s(),g(b(n.templates.item),{key:0,item:i.activeItem},null,8,["item"])):p("",!0)],16,Oe),n.showItemNavigators?k((s(),d("button",u({key:1,type:"button",class:e.cx("nextButton"),onClick:t[1]||(t[1]=function(m){return i.navForward(m)}),disabled:i.isNavForwardDisabled()},e.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(s(),g(b(n.templates.nextitemicon||"ChevronRightIcon"),u({class:e.cx("nextIcon")},e.ptm("nextIcon")),null,16,["class"]))],16,_e)),[[h]]):p("",!0),n.templates.caption?(s(),d("div",u({key:2,class:e.cx("caption")},e.ptm("caption")),[n.templates.caption?(s(),g(b(n.templates.caption),{key:0,item:i.activeItem},null,8,["item"])):p("",!0)],16)):p("",!0)],16),n.showIndicators?(s(),d("ul",u({key:0,ref:"indicatorContent",class:e.cx("indicatorList")},e.ptm("indicatorList")),[(s(!0),d(x,null,S(n.value,function(m,l){return s(),d("li",u({key:"p-galleria-indicator-".concat(l),class:e.cx("indicator",{index:l}),"aria-label":i.ariaPageLabel(l+1),"aria-selected":n.activeIndex===l,"aria-controls":n.id+"_item_"+l,onClick:function(y){return i.onIndicatorClick(l)},onMouseenter:function(y){return i.onIndicatorMouseEnter(l)},onKeydown:function(y){return i.onIndicatorKeyDown(y,l)},ref_for:!0},e.ptm("indicator",i.getIndicatorPTOptions(l)),{"data-p-active":i.isIndicatorItemActive(l)}),[n.templates.indicator?p("",!0):(s(),d("button",u({key:0,type:"button",tabindex:n.activeIndex===l?"0":"-1",class:e.cx("indicatorButton"),ref_for:!0},e.ptm("indicatorButton",i.getIndicatorPTOptions(l))),null,16,Ve)),n.templates.indicator?(s(),g(b(n.templates.indicator),{key:1,index:l,activeIndex:n.activeIndex,tabindex:n.activeIndex===l?"0":"-1"},null,8,["index","activeIndex","tabindex"])):p("",!0)],16,je)}),128))],16)):p("",!0)],16)}X.render=De;function E(e){return Ee(e)||Ne(e)||ze(e)||Le()}function Le(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ze(e,t){if(e){if(typeof e=="string")return U(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}function Ne(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ee(e){if(Array.isArray(e))return U(e)}function U(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var ee={name:"GalleriaThumbnails",hostName:"Galleria",extends:D,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},activeIndex:function(t,n){this.d_activeIndex=t,this.d_oldActiveItemIndex=n}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(t*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(t*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&F(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(t){var n=this.totalShiftedItems+t;t<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:t>0&&n>0&&(n=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?n=0:t>0&&this.d_activeIndex===0&&(n=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&F(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward:function(t){this.stopSlideShow();var n=this.d_activeIndex!==0?this.d_activeIndex-1:0,a=n+this.totalShiftedItems;this.d_numVisible-a-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",r),t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow();var n=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var a=this.circular&&this.value.length-1===this.d_activeIndex?0:n;this.$emit("update:activeIndex",a),t.cancelable&&t.preventDefault()},onItemClick:function(t){this.stopSlideShow();var n=t;if(n!==this.d_activeIndex){var a=n+this.totalShiftedItems,r=0;n<this.d_activeIndex?(r=this.d_numVisible-a-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-a,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",n)}},onThumbnailKeydown:function(t,n){switch((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.onItemClick(n),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=E(v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=t.findIndex(function(i){return Q(i,"data-p-active")===!0}),a=_(this.$refs.itemsContainer,'[tabindex="0"]'),r=t.findIndex(function(i){return i===a.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=E(v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=_(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(function(a){return a===n.parentElement})},changedFocusedIndicator:function(t,n){var a=v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');a[t].children[0].tabIndex="-1",a[n].children[0].tabIndex="0",a[n].children[0].focus()},onTransitionEnd:function(t){this.$refs.itemsContainer&&t.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&W(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){n<0?this.navForward(t):this.navBackward(t)},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",oe(this.thumbnailsStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=E(this.responsiveOptions);var a=se();this.sortedResponsiveOptions.sort(function(h,m){var l=h.breakpoint,c=m.breakpoint;return le(l,c,-1,a)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var i=this.sortedResponsiveOptions[r];n+=`
                        @media screen and (max-width: `.concat(i.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/i.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible},a=0;a<this.sortedResponsiveOptions.length;a++){var r=this.sortedResponsiveOptions[a];parseInt(r.breakpoint,10)>=t&&(n=r)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:Z,ChevronRightIcon:Y,ChevronUpIcon:ve,ChevronDownIcon:ye},directives:{ripple:M}};function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(e)}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?K(Object(n),!0).forEach(function(a){$e(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function $e(e,t,n){return(t=Ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ue(e){var t=Me(e,"string");return T(t)=="symbol"?t:t+""}function Me(e,t){if(T(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(T(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Re=["disabled","aria-label"],Fe=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],Ke=["tabindex","aria-label","aria-current","onClick"],He=["disabled","aria-label"];function Ge(e,t,n,a,r,i){var h=V("ripple");return s(),d("div",u({class:e.cx("thumbnails")},e.ptm("thumbnails")),[o("div",u({class:e.cx("thumbnailContent")},e.ptm("thumbnailContent")),[n.showThumbnailNavigators?k((s(),d("button",u({key:0,class:e.cx("thumbnailPrevButton"),disabled:i.isNavBackwardDisabled(),type:"button","aria-label":i.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(m){return i.navBackward(m)})},O(O({},n.prevButtonProps),e.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(s(),g(b(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),u({class:e.cx("thumbnailPrevIcon")},e.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,Re)),[[h]]):p("",!0),o("div",u({class:e.cx("thumbnailsViewport"),style:{height:n.isVertical?n.contentHeight:""}},e.ptm("thumbnailsViewport")),[o("div",u({ref:"itemsContainer",class:e.cx("thumbnailItems"),role:"tablist",onTransitionend:t[1]||(t[1]=function(m){return i.onTransitionEnd(m)}),onTouchstart:t[2]||(t[2]=function(m){return i.onTouchStart(m)}),onTouchmove:t[3]||(t[3]=function(m){return i.onTouchMove(m)}),onTouchend:t[4]||(t[4]=function(m){return i.onTouchEnd(m)})},e.ptm("thumbnailItems")),[(s(!0),d(x,null,S(n.value,function(m,l){return s(),d("div",u({key:"p-galleria-thumbnail-item-".concat(l),class:e.cx("thumbnailItem",{index:l,activeIndex:n.activeIndex}),role:"tab","data-p-active":n.activeIndex===l,"aria-selected":n.activeIndex===l,"aria-controls":n.containerId+"_item_"+l,onKeydown:function(y){return i.onThumbnailKeydown(y,l)},ref_for:!0},e.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":n.activeIndex===l,"data-p-galleria-thumbnail-item-active":i.isItemActive(l),"data-p-galleria-thumbnail-item-start":i.firstItemAciveIndex()===l,"data-p-galleria-thumbnail-item-end":i.lastItemActiveIndex()===l}),[o("div",u({class:e.cx("thumbnail"),tabindex:n.activeIndex===l?"0":"-1","aria-label":i.ariaPageLabel(l+1),"aria-current":n.activeIndex===l?"page":void 0,onClick:function(y){return i.onItemClick(l)},ref_for:!0},e.ptm("thumbnail")),[n.templates.thumbnail?(s(),g(b(n.templates.thumbnail),{key:0,item:m},null,8,["item"])):p("",!0)],16,Ke)],16,Fe)}),128))],16)],16),n.showThumbnailNavigators?k((s(),d("button",u({key:1,class:e.cx("thumbnailNextButton"),disabled:i.isNavForwardDisabled(),type:"button","aria-label":i.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(m){return i.navForward(m)})},O(O({},n.nextButtonProps),e.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(s(),g(b(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),u({class:e.cx("thumbnailNextIcon")},e.ptm("thumbnailNextIcon")),null,16,["class"]))],16,He)),[[h]]):p("",!0)],16)],16)}ee.render=Ge;function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H(Object(n),!0).forEach(function(a){Je(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Je(e,t,n){return(t=qe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qe(e){var t=We(e,"string");return C(t)=="symbol"?t:t+""}function We(e,t){if(C(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(C(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var te={name:"GalleriaContent",hostName:"Galleria",extends:D,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{id:this.$attrs.id||N(),activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.id":function(t){this.id=t||N()},"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},mounted:function(){this.id=this.id||N()},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(t){return this.ptm(t,{props:G(G({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var t=this;this.interval=setInterval(function(){var n=t.$attrs.circular&&t.$attrs.value.length-1===t.activeIndex?0:t.activeIndex+1;t.activeIndex=n},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(t,n){var a=["top","left","bottom","right"],r=a.find(function(i){return i===n});return r?"".concat(t,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:X,GalleriaThumbnails:ee,TimesIcon:fe},directives:{ripple:M}};function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(e)}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?J(Object(n),!0).forEach(function(a){Qe(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Qe(e,t,n){return(t=Ze(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ze(e){var t=Ye(e,"string");return B(t)=="symbol"?t:t+""}function Ye(e,t){if(B(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(B(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Xe=["id","aria-label","aria-roledescription"],et=["aria-label"],tt=["aria-live"];function nt(e,t,n,a,r,i){var h=j("GalleriaItem"),m=j("GalleriaThumbnails"),l=V("ripple");return e.$attrs.value&&e.$attrs.value.length>0?(s(),d("div",u({key:0,id:r.id,role:"region",class:[e.cx("root"),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},q(q({},e.$attrs.containerProps),i.getPTOptions("root"))),[e.$attrs.fullScreen?k((s(),d("button",u({key:0,autofocus:"",type:"button",class:e.cx("closeButton"),"aria-label":i.closeAriaLabel,onClick:t[0]||(t[0]=function(c){return e.$emit("mask-hide")})},i.getPTOptions("closeButton")),[(s(),g(b(e.$attrs.templates.closeicon||"TimesIcon"),u({class:e.cx("closeIcon")},i.getPTOptions("closeIcon")),null,16,["class"]))],16,et)),[[l]]):p("",!0),e.$attrs.templates&&e.$attrs.templates.header?(s(),d("div",u({key:1,class:e.cx("header")},i.getPTOptions("header")),[(s(),g(b(e.$attrs.templates.header)))],16)):p("",!0),o("div",u({class:e.cx("content"),"aria-live":e.$attrs.autoPlay?"polite":"off"},i.getPTOptions("content")),[w(h,{id:r.id,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=function(c){return r.activeIndex=c}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=function(c){return r.slideShowActive=c}),value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:i.startSlideShow,onStopSlideshow:i.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),e.$attrs.showThumbnails?(s(),g(m,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=function(c){return r.activeIndex=c}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=function(c){return r.slideShowActive=c}),containerId:r.id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:r.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:i.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:i.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):p("",!0)],16,tt),e.$attrs.templates&&e.$attrs.templates.footer?(s(),d("div",u({key:2,class:e.cx("footer")},i.getPTOptions("footer")),[(s(),g(b(e.$attrs.templates.footer)))],16)):p("",!0)],16,Xe)):p("",!0)}te.render=nt;var ne={name:"Galleria",extends:ke,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&R(),this.mask=null,this.container&&(z.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(t){z.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(t){this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),re(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&W(this.mask,"p-overlay-mask-leave")},onAfterLeave:function(t){z.clear(t),this.containerVisible=!1,R()},onActiveItemChange:function(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},focus:function(){var t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},components:{GalleriaContent:te,Portal:he},directives:{focustrap:ge}},at=["aria-modal"];function it(e,t,n,a,r,i){var h=j("GalleriaContent"),m=j("Portal"),l=V("focustrap");return e.fullScreen?(s(),g(m,{key:0},{default:P(function(){return[r.containerVisible?(s(),d("div",u({key:0,ref:i.maskRef,class:[e.cx("mask"),e.maskClass],role:"dialog","aria-modal":e.fullScreen?"true":void 0},e.ptm("mask")),[w(ce,u({name:"p-galleria",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:P(function(){return[e.visible?k((s(),g(h,u({key:0,ref:i.containerRef,onMaskHide:i.maskHide,templates:e.$slots,onActiveitemChange:i.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[l]]):p("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,at)):p("",!0)]}),_:1})):(s(),g(h,u({key:1,templates:e.$slots,onActiveitemChange:i.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}ne.render=it;const rt=ue({__name:"index.html",setup(e,{expose:t}){t();const n=L(),a=L([{breakpoint:"1300px",numVisible:4},{breakpoint:"575px",numVisible:1}]),r=L([{title:"Organisation",content:"Organisation Projects",value:"0",children:[]},{title:"Freelance",content:"Freelance Projects",value:"1",children:[]}]),h={images:n,responsiveOptions:a,tabs:r,projects:[{name:"Trokka Attraction",description:"Book Attractions and Tours for Your Next Holiday",skills:["Javascript","ES6","VueJs","Vuex","Axios","API integration","ExpressJS","MongoDB","Git","EC2"],software:"Web",features:[{name:"Show Tours and Attraction of Malaysia"},{name:"Popular activities based on rating and demand"},{name:"Activities and details based on location"},{name:"Book and share attractions for other people"},{name:"Discount system based on promo code"},{name:"Paymnet system using Boost wallet and other payment methods"},{name:"Custome CMS Backend system to add, update, delete tours and attractions"}],org:"Catch That Bus",year:"2019",schema:"https://schema.org/DeveloperApplication",link:"https://m.trokka.com/attraction",images:[{itemImageSrc:"/img/projects/trokka.gif",thumbnailImageSrc:"/img/projects/trokka.gif",alt:"Trokka.com | Book Attractions and Tours for Your Next Holiday",title:"Trokka.com | Book Attractions and Tours for Your Next Holiday"}]},{name:"Catch That Bus",description:"Book Malaysia and Singapore bus tickets online.",skills:["Javascript","ES6","VueJs","Vuex","Vite","Axios","Cordova","API integration","ExpressJS","MongoDB","Git","EC2","Eslint","Prettier"],software:"Web / IOS APP",features:[{name:"Search for bus by chosing from destination and to destination in Malaysia for dates"},{name:"Sort and filter on available buses"},{name:"Seat visualization of a bus"},{name:"Booking system to handel concurent request"},{name:"Discount system based on cupon code"},{name:"Insurnce integration for travelers"},{name:"Payment system usign wallet and cards"},{name:"Webview for Boost wallet"},{name:"Multiple language support"},{name:"Multiple Currency support"},{name:"Bus Booked history"},{name:"Bus orboarding sytem for admin and bus operator"}],org:"Catch That Bus",year:"2019",schema:"https://schema.org/DeveloperApplication",link:"https://m.catchthatbus.com",iosLink:"https://apps.apple.com/my/app/catchthatbus/id1025824078",images:[{itemImageSrc:"/img/projects/catchthatbus.gif",thumbnailImageSrc:"/img/projects/catchthatbus.gif",alt:"Book Malaysia and Singapore bus tickets online. | CatchThatBus",title:"Book Malaysia and Singapore bus tickets online. | CatchThatBus"},{itemImageSrc:"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png",thumbnailImageSrc:"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png",alt:"IOS app for booking Malaysia and Singapore bus tickets online | CatchThatBus",title:"Title 1"}]},{name:"Partner Dashboard Upstox",description:"Open a sub-broker account with Upstox.",skills:["AngularJS","MongoDB","MSSQL","LoopbackJS"],software:"Web",features:[{name:"Refer and earn program"},{name:"Track lead refered"},{name:"Ambasador program"},{name:"Royalty program"},{name:"Track customer refered"},{name:"Dashboard to show earning based on the program"},{name:"Search by name and UCC"},{name:"Earning report based on the customer trade"}],org:"Upstox",year:"2018",schema:"https://schema.org/BusinessApplication",link:"https://upstox.com/sub-broker/",images:[{itemImageSrc:"/img/projects/partnerUpstox/partnerUpstox.png",thumbnailImageSrc:"/img/projects/partnerUpstox/partnerUpstox.png",alt:"Open a sub-broker account with Upstox.",title:"Open a sub-broker account with Upstox."},{itemImageSrc:"/img/projects/partnerUpstox/dashboard.png",thumbnailImageSrc:"/img/projects/partnerUpstox/dashboard.png",alt:"Open a sub-broker account with Upstox.",title:"Open a sub-broker account with Upstox."},{itemImageSrc:"/img/projects/partnerUpstox/leads.png",thumbnailImageSrc:"/img/projects/partnerUpstox/leads.png",alt:"Open a sub-broker account with Upstox.",title:"Open a sub-broker account with Upstox."},{itemImageSrc:"/img/projects/partnerUpstox/customer.png",thumbnailImageSrc:"/img/projects/partnerUpstox/customer.png",alt:"Open a sub-broker account with Upstox.",title:"Open a sub-broker account with Upstox."},{itemImageSrc:"/img/projects/partnerUpstox/earning.png",thumbnailImageSrc:"/img/projects/partnerUpstox/earning.png",alt:"Open a sub-broker account with Upstox.",title:"Open a sub-broker account with Upstox."}]},{name:"Open Demat Account for Upstox",description:"Open a Demat Account Online: Demat Account Opening at Upstox",skills:["AngularJS","MongoDB","MSSQL","LoopbackJS","Digital Ocean"],software:"Web",features:[{name:"Open Demat account with document upload"},{name:"Pan, Aadhar, IPV, and canceled check verification"},{name:"Lead to CRM system"},{name:"Scrutiny of lead"},{name:"Upload details to NSE, BSE, and MCX"},{name:"Report based on the flow of lead"}],org:"Upstox",year:"2017",schema:"https://schema.org/BusinessApplication",link:"https://upstox.com/open-demat-account/",images:[{itemImageSrc:"/img/projects/openDemat.png",thumbnailImageSrc:"/img/projects/openDemat.png",alt:"Open a Demat Account Online: Demat Account Opening at Upstox",title:"Open a Demat Account Online: Demat Account Opening at Upstox"}]},{name:"CallMatrix",description:"Call Intelligence, Marketing, and Analytics Platform",skills:["NodeJS","MongoDB","MSSQL","HapiJS","Digital Ocean"],software:"Web",features:[{name:"Create campaign for call"},{name:"Create bundel of campaigns for call"},{name:"Buy local & toll-free numbers"},{name:"Call Recording and Off Hour Call Handling"},{name:"Funnel to redirect the call based on the multi level IVR"},{name:"Report of bundel, CDR, and offer based on hour, week and geo location"},{name:"Dashboard to get bird eye view"},{name:"Google Adwords API integration"},{name:"User autherisation based on role"}],org:"Mobistreak",year:"2015",schema:"https://schema.org/BusinessApplication",link:"https://callmatrix.io/",images:[{itemImageSrc:"/img/projects/callmatrix.png",thumbnailImageSrc:"/img/projects/callmatrix.png",alt:"CallMatrix - Call Intelligence, Marketing, and Analytics Platform",title:"Title 1"}]},{name:"Quatar Airways widget",description:"Book flights to destinations around the world with Qatar Airways and fly on board an award-winning airline. Enjoy special fares, collect Avios, and more.",skills:["Javascript","ES6","Vue3","Landingi","Pinia","Vite","Axios","Express","API integration","MongoDB","Git","EC2","Eslint","Prettier"],software:"Web",features:[{name:"Widget for Flight Booking"},{name:"Widget for Flight + Hotel Booking"},{name:"Widget for Transfer Booking"},{name:"Use widget with any CMS Platform like Landingi"}],org:"TUI",year:"2021",schema:"https://schema.org/DeveloperApplication",link:"https://www.qatarairways.com/en-us/homepage.html",images:[{itemImageSrc:"/img/projects/quatar/placeholder.png",thumbnailImageSrc:"/img/projects/quatar/placeholder.png",alt:"Quatar Airways",title:"Quatar Airways"},{itemImageSrc:"/img/projects/quatar/quatar.png",thumbnailImageSrc:"/img/projects/quatar/quatar.png",alt:"Quatar Airways",title:"Quatar Airways"},{itemImageSrc:"/img/projects/quatar/qutar_airways.png",thumbnailImageSrc:"/img/projects/quatar/qutar_airways.png",alt:"Quatar Airways",title:"Quatar Airways"},{itemImageSrc:"/img/projects/quatar/thumbnail.png",thumbnailImageSrc:"/img/projects/quatar/thumbnail.png",alt:"Quatar Airways",title:"Quatar Airways"}]},{name:"Recipes",description:"Recipes: Social Network",skills:["Javascript","ES6","Vue3","Pinia","Vite","Axios","Express","API integration","MongoDB","Git","EC2","Eslint","Prettier"],software:"Web",features:[{name:"Authentication with Incognigo pool"},{name:"Create and Share recipes with friends"},{name:"Search recipes"},{name:"List and share your recipes direction or ingradients"},{name:"Rate and review for recipe"}],org:"Freelance",year:"2020",schema:"https://schema.org/DeveloperApplication",link:"http://recipes-client.s3-website.ap-south-1.amazonaws.com/",codeLink:"https://github.com/heartstchr/recipe",images:[{itemImageSrc:"/img/projects/recipe/recipe.gif",thumbnailImageSrc:"/img/projects/recipe/recipe.gif",alt:"Recipes - Social Network | Recipes",title:"Recipes - Social Network | Recipes"},{itemImageSrc:"/img/projects/recipe/recipe-mobile.gif",thumbnailImageSrc:"/img/projects/recipe/recipe-mobile.gif",alt:"Recipes - Social Network | Recipes",title:"Recipes - Social Network | Recipes"}]},{name:"Tv maze",description:"TVmaze: Add TV information to your website or app.",skills:["Javascript","ES6","VueJs","Vuex","Vite","Axios","API integration","MongoDB","Git","EC2","Eslint","Prettier"],software:"Web",features:[{name:"Popular Tv shows sorted based on rating"},{name:"Tv shows based on genre"},{name:"Search Tv shows"},{name:"Details Tv shows"},{name:"Episodes, cast and crew of a Tv shows"}],org:"Freelance",year:"2020",schema:"https://schema.org/DeveloperApplication",link:"https://heartstchr.github.io/tvmaze/",codeLink:"https://github.com/heartstchr/tvshows",images:[{itemImageSrc:"/img/projects/tvmaze/tvmaze-home.png",thumbnailImageSrc:"/img/projects/tvmaze/tvmaze-home.png",alt:"TVmaze - Add TV information to your website or app. | Tv maze",title:"TVmaze - Add TV information to your website or app. | Tv maze"},{itemImageSrc:"/img/projects/tvmaze/search.png",thumbnailImageSrc:"/img/projects/tvmaze/search.png",alt:"TVmaze - Add TV information to your website or app. | Tv maze",title:"TVmaze - Add TV information to your website or app. | Tv maze"},{itemImageSrc:"/img/projects/tvmaze/season.png",thumbnailImageSrc:"/img/projects/tvmaze/season.png",alt:"TVmaze - Add TV information to your website or app. | Tv maze",title:"TVmaze - Add TV information to your website or app. | Tv maze"},{itemImageSrc:"/img/projects/tvmaze/cast.png",thumbnailImageSrc:"/img/projects/tvmaze/cast.png",alt:"TVmaze - Add TV information to your website or app. | Tv maze",title:"TVmaze - Add TV information to your website or app. | Tv maze"},{itemImageSrc:"/img/projects/tvmaze/tvmaze.gif",thumbnailImageSrc:"/img/projects/tvmaze/tvmaze.gif",alt:"TVmaze - Add TV information to your website or app. | Tv maze",title:"TVmaze - Add TV information to your website or app. | Tv maze"},{itemImageSrc:"/img/projects/tvmaze/tvmaze.png",thumbnailImageSrc:"/img/projects/tvmaze/tvmaze.png",alt:"TVmaze - Add TV information to your website or app. | Tv maze",title:"TVmaze - Add TV information to your website or app. | Tv maze"}]},{name:"Command Line Dictionary",description:"CLI for Dictionary",software:"Terminal",features:[{name:"Create help command for available commands"},{name:"Defination of a word"},{name:"Synonyms and antonyms of a word"},{name:"Get example sentence from a word"},{name:"Get word of the day"},{name:"Play word game"}],org:"Freelance",year:"2020",skills:["Inquirer","Commander","Plop","Eslint","Prettier"],schema:"https://schema.org/DeveloperApplication",codeLink:"https://github.com/heartstchr/dic",images:[{itemImageSrc:"/img/projects/dictionary.png",thumbnailImageSrc:"/img/projects/dictionary.png",alt:"CLI for Dictionary",title:"Title 1"}]},{name:"Stock Market",description:"Consuming socket data and plotting a real-time D3 graph",skills:["D3JS","VueJS","NodeJS"],software:"Web",features:[{name:"Show realtime charts of a unit"},{name:"Show history of a unit in charts"}],org:"Freelance",year:"2016",schema:"https://schema.org/BusinessApplication",codeLink:"https://github.com/heartstchr/StockMarket",images:[{itemImageSrc:"/img/projects/stocks.png",thumbnailImageSrc:"/img/projects/stocks.png",alt:"Consuming socket data and plotting a real-time D3 graph",title:"Title 1"}]}]};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),ot={class:"flex flex-column gap-4 my-6"},st=o("div",null,"Here, you’ll find a showcase of some of my featured projects, highlighting my expertise and passion for creating meaningful digital experiences. These projects reflect my ability to turn ideas into reality, tailored to meet each client’s unique needs.",-1),lt=o("div",null,"If you’re searching for a professional who can bring your vision to life with precision and creativity, you’ve come to the right place.",-1),ct={href:"https://cal.com/stackseekers",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline mt-4"},ut={class:"grid my-6 gap-8"},dt=["id"],mt=o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 120 1440 200"},[o("path",{fill:"#10b981","fill-opacity":"0.1",d:"M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,202.7C560,213,640,203,720,192C800,181,880,171,960,181.3C1040,192,1120,224,1200,218.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"})],-1),pt={class:"px-4"},ht={itemprop:"name",class:"text-4xl font-bold"},gt={class:"text-xl mt-2",itemprop:"operatingSystem"},ft={class:"text-sm mt-2"},bt={class:"text-sm mt-2"},vt={class:"flex md:flex-row flex-column",itemscope:"",itemtype:"https://schema.org/SoftwareApplication"},yt={class:"md:col-6 col-12"},It={class:"my-2 text-xl"},wt={key:0,class:"flex flex-column mt-4 p-2"},xt=o("div",{class:"my-2 text-l"},"Features",-1),St={class:"my-2 text-sm"},kt={class:"md:col-6 col-12"},At=["href"],Pt={key:0,class:"card"},Tt=["src","alt"],Ct=["src","alt"],Bt={class:"flex flex-column mt-4 p-4"},Ot=o("div",{class:"my-2 text-l"},"Stack Used",-1),_t={class:"flex grid mt-4 p-2"},jt={class:"flex items-center gap-2 px-1"},Vt=o("i",{class:"pi pi-cog",style:{"font-size":"1rem"}},null,-1),Dt={class:"text-base"},Lt={class:"flex flex-row justify-content-between align-items-center gap-2"},zt=["href"],Nt=["href"],Et={class:"border-round-md vp-feature-item",id:"contact"},$t=o("div",{class:"text-center pb-4"},[o("div",{class:"my-4 text-md"},"Let's work together!")],-1),Ut=o("div",{class:"my-4 text-center text-xl"}," Ready to turn your vision into reality? Let’s discuss how I can help you achieve your goals. ",-1),Mt={class:"my-4"},Rt={href:"mailto:jiwan.cse@gmail.com",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline"},Ft={class:"flex flex-row justify-content-end flex-wrap gap-4 mx-6"},Kt=["href"];function Ht(e,t,n,a,r,i){const h=be,m=ne,l=ae;return s(),d("div",null,[o("div",ot,[st,lt,o("div",null,[o("a",ct,[w(h,{label:"Let’s build something extraordinary together!",icon:"pi pi-calendar-clock",severity:"primary",raised:"",rounded:""})])])]),o("div",ut,[(s(),d(x,null,S(a.projects,(c,y)=>o("div",{class:"vp-feature-item col-12 shadow-1 m-0 p-0",id:c.name},[mt,o("div",pt,[o("div",null,[o("div",ht,I(c.name),1),o("div",gt,[de(I(c.software)+" ",1),o("span",ft,"("+I(c.year)+")",1),o("span",bt," - "+I(c.org),1)])]),o("div",vt,[o("div",yt,[o("div",It,I(c.description),1),c.features?(s(),d("div",wt,[xt,(s(!0),d(x,null,S(c.features,f=>(s(),d("ul",St,[o("li",null,I(f.name),1)]))),256))])):p("",!0)]),o("div",kt,[o("link",{itemprop:"applicationCategory",href:c.schema},null,8,At),c.images?(s(),d("div",Pt,[w(m,{value:c.images,responsiveOptions:a.responsiveOptions,numVisible:5,circular:!0,showItemNavigators:!0,showThumbnails:!1},{item:P(f=>[o("img",{src:f.item.itemImageSrc,alt:f.item.alt,style:{width:"100%",display:"block"}},null,8,Tt)]),thumbnail:P(f=>[o("img",{src:f.item.thumbnailImageSrc,alt:f.item.alt,style:{display:"block"}},null,8,Ct)]),_:2},1032,["value","responsiveOptions"])])):p("",!0)])])]),o("div",Bt,[Ot,o("div",_t,[(s(!0),d(x,null,S(c.skills,f=>(s(),g(l,{style:{border:"2px solid var(--border-color)",background:"transparent",color:"var(--text-color)"},key:f,value:f,class:"m-1"},{default:P(()=>[o("div",jt,[Vt,o("span",Dt,I(f),1)])]),_:2},1032,["value"]))),128))]),o("div",Lt,[c.link?(s(),d("a",{key:0,href:c.link,target:"_blank",class:"w-full flex flex-row no-underline mt-4"},[w(h,{label:"Live Demo",icon:"pi pi-angle-double-right",severity:"primary",raised:"",rounded:""})],8,zt)):p("",!0),c.codeLink?(s(),d("a",{key:1,href:c.codeLink,target:"_blank",class:"w-full flex flex-row no-underline mt-4"},[w(h,{label:"Repo",icon:"pi pi-github",severity:"secondary",raised:"",rounded:""})],8,Nt)):p("",!0)])])],8,dt)),64))]),o("div",Et,[$t,Ut,o("div",Mt,[o("a",Rt,[w(h,{label:"Hire Now",icon:"pi pi-briefcase",severity:"primary",raised:"",rounded:""})])]),o("div",Ft,[(s(!0),d(x,null,S(e.social,(c,y)=>(s(),d("a",{key:y,href:c.url,target:"_blank",class:"flex flex-row gap-2"},[o("i",{class:me(c.icon),style:{"font-size":"1rem"}},null,2)],8,Kt))),128))])])])}const Zt=Ie(rt,[["render",Ht],["__file","index.html.vue"]]),Yt=JSON.parse('{"path":"/projects/","title":"Projects","lang":"en-US","frontmatter":{"title":"Projects","icon":"discover","order":2,"lastUpdated":false,"editLink":false,"copyright":false,"description":"Here, you’ll find a showcase of some of my featured projects, highlighting my expertise and passion for creating meaningful digital experiences. These projects reflect my abilit...","head":[["meta",{"property":"og:url","content":"https://heartstchr.github.io/projects/"}],["meta",{"property":"og:site_name","content":"Jiwan Ghosal"}],["meta",{"property":"og:title","content":"Projects"}],["meta",{"property":"og:description","content":"Here, you’ll find a showcase of some of my featured projects, highlighting my expertise and passion for creating meaningful digital experiences. These projects reflect my abilit..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-21T09:14:28.000Z"}],["meta",{"property":"article:author","content":"Jiwan Ghosal"}],["meta",{"property":"article:modified_time","content":"2024-12-21T09:14:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Projects\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-21T09:14:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jiwan Ghosal\\",\\"url\\":\\"http://heartstchr.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1671040067000,"updatedTime":1734772468000,"contributors":[{"name":"Jiwan ghosal","email":"jiwan.cse@gmail.com","commits":44}]},"readingTime":{"minutes":6.92,"words":2076},"filePathRelative":"projects/index.md","localizedDate":"December 14, 2022","excerpt":"<div class=\\"flex flex-column gap-4 my-6\\">\\n    <div>Here, you’ll find a showcase of some of my featured projects, highlighting my expertise and passion for creating meaningful digital experiences. These projects reflect my ability to turn ideas into reality, tailored to meet each client’s unique needs.</div>\\n    <div>If you’re searching for a professional who can bring your vision to life with precision and creativity, you’ve come to the right place.</div>\\n    <div>\\n        <a href=\\"https://cal.com/stackseekers\\" size=\\"large\\" color=\\"deeppink\\" class=\\"flex justify-content-center text-center no-underline mt-4\\"> \\n            </a><button label=\\"Let’s build something extraordinary together!\\" icon=\\"pi pi-calendar-clock\\" severity=\\"primary\\" raised=\\"\\" rounded=\\"\\"><a href=\\"https://cal.com/stackseekers\\" size=\\"large\\" color=\\"deeppink\\" class=\\"flex justify-content-center text-center no-underline mt-4\\">\\n        </a>\\n    </button></div>\\n</div>","autoDesc":true}');export{Zt as comp,Yt as data};
