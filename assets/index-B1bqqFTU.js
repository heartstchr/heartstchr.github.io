import{B as M,M as j,N as tt,y as U,s as k,z as f,g as G,f as A,R as L,i as O,o,k as u,b,a as y,m as s,c as h,r as g,e as d,F as Z,l as W,x as D,A as et,C as nt,D as it,j as C,p as q,w as E,T as at,d as rt,t as ot}from"./app-RcNCBP_x.js";import{Z as B,s as lt,F as st,a as ct}from"./index-_gtfBKLg.js";import{a as X,s as Y,U as T}from"./index-Bj_pi_n7.js";import{s as ut,a as dt}from"./index-C9J0fD_k.js";var ht=function(n){var e=n.dt;return`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: `.concat(e("galleria.border.width"),`;
    border-color: `).concat(e("galleria.border.color"),`;
    border-radius: `).concat(e("galleria.border.radius"),`;
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
    background: `).concat(e("galleria.nav.button.background"),`;
    color: `).concat(e("galleria.nav.button.color"),`;
    width: `).concat(e("galleria.nav.button.size"),`;
    height: `).concat(e("galleria.nav.button.size"),`;
    transition: background `).concat(e("galleria.transition.duration"),", color ").concat(e("galleria.transition.duration"),", outline-color ").concat(e("galleria.transition.duration"),", box-shadow ").concat(e("galleria.transition.duration"),`;
    margin: calc(-1 * calc(`).concat(e("galleria.nav.button.size"),") / 2) ").concat(e("galleria.nav.button.gutter")," 0 ").concat(e("galleria.nav.button.gutter"),`;
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: `).concat(e("galleria.nav.button.hover.background"),`;
    color: `).concat(e("galleria.nav.button.hover.color"),`;
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: `).concat(e("galleria.nav.button.focus.ring.shadow"),`;
    outline: `).concat(e("galleria.nav.button.focus.ring.width")," ").concat(e("galleria.nav.button.focus.ring.style")," ").concat(e("galleria.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(e("galleria.nav.button.focus.ring.offset"),`;
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: `).concat(e("galleria.nav.icon.size"),`;
    width: `).concat(e("galleria.nav.icon.size"),`;
    height: `).concat(e("galleria.nav.icon.size"),`;
}

.p-galleria-prev-button {
    border-radius: `).concat(e("galleria.nav.button.prev.border.radius"),`;
    left: 0;
}

.p-galleria-next-button {
    border-radius: `).concat(e("galleria.nav.button.next.border.radius"),`;
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
    transition: opacity `).concat(e("galleria.transition.duration"),` ease-in-out;
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
    background: `).concat(e("galleria.caption.background"),`;
    color: `).concat(e("galleria.caption.color"),`;
    padding: `).concat(e("galleria.caption.padding"),`;
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
    margin: 0 `).concat(e("galleria.thumbnail.nav.button.gutter"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: `).concat(e("galleria.thumbnail.nav.button.color"),`;
    width: `).concat(e("galleria.thumbnail.nav.button.size"),`;
    height: `).concat(e("galleria.thumbnail.nav.button.size"),`;
    transition: background `).concat(e("galleria.transition.duration"),", color ").concat(e("galleria.transition.duration"),", outline-color ").concat(e("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(e("galleria.thumbnail.nav.button.border.radius"),`;
}

.p-galleria-thumbnail-nav-button:hover {
    background: `).concat(e("galleria.thumbnail.nav.button.hover.background"),`;
    color: `).concat(e("galleria.thumbnail.nav.button.hover.color"),`;
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: `).concat(e("galleria.thumbnail.nav.button.focus.ring.shadow"),`;
    outline: `).concat(e("galleria.thumbnail.nav.button.focus.ring.width")," ").concat(e("galleria.thumbnail.nav.button.focus.ring.style")," ").concat(e("galleria.thumbnail.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(e("galleria.thumbnail.nav.button.focus.ring.offset"),`;
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: `).concat(e("galleria.thumbnail.nav.button.icon.size"),`;
    width: `).concat(e("galleria.thumbnail.nav.button.icon.size"),`;
    height: `).concat(e("galleria.thumbnail.nav.button.icon.size"),`;
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: `).concat(e("galleria.thumbnails.content.background"),`;
    padding: `).concat(e("galleria.thumbnails.content.padding"),`;
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
    padding: `).concat(e("galleria.indicator.list.padding"),`;
    gap: `).concat(e("galleria.indicator.list.gap"),`;
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: `).concat(e("galleria.indicator.button.background"),`;
    width: `).concat(e("galleria.indicator.button.width"),`;
    height: `).concat(e("galleria.indicator.button.height"),`;
    transition: background `).concat(e("galleria.transition.duration"),", color ").concat(e("galleria.transition.duration"),", outline-color ").concat(e("galleria.transition.duration"),", box-shadow ").concat(e("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(e("galleria.indicator.button.border.radius"),`;
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: `).concat(e("galleria.indicator.button.hover.background"),`;
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: `).concat(e("galleria.indicator.button.focus.ring.shadow"),`;
    outline: `).concat(e("galleria.indicator.button.focus.ring.width")," ").concat(e("galleria.indicator.button.focus.ring.style")," ").concat(e("galleria.indicator.button.focus.ring.color"),`;
    outline-offset: `).concat(e("galleria.indicator.button.focus.ring.offset"),`;
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(e("galleria.indicator.button.active.background"),`;
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
    background: `).concat(e("galleria.inset.indicator.list.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: `).concat(e("galleria.inset.indicator.button.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: `).concat(e("galleria.inset.indicator.button.hover.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(e("galleria.inset.indicator.button.active.background"),`;
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
    margin: `).concat(e("galleria.close.button.gutter"),`;
    background: `).concat(e("galleria.close.button.background"),`;
    color: `).concat(e("galleria.close.button.color"),`;
    width: `).concat(e("galleria.close.button.size"),`;
    height: `).concat(e("galleria.close.button.size"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: `).concat(e("galleria.close.button.border.radius"),`;
    outline-color: transparent;
    transition: background `).concat(e("galleria.transition.duration"),", color ").concat(e("galleria.transition.duration"),", outline-color ").concat(e("galleria.transition.duration"),`;
}

.p-galleria-close-icon {
    font-size: `).concat(e("galleria.close.button.icon.size"),`;
    width: `).concat(e("galleria.close.button.icon.size"),`;
    height: `).concat(e("galleria.close.button.icon.size"),`;
}

.p-galleria-close-button:hover {
    background: `).concat(e("galleria.close.button.hover.background"),`;
    color: `).concat(e("galleria.close.button.hover.color"),`;
}

.p-galleria-close-button:focus-visible {
    box-shadow: `).concat(e("galleria.close.button.focus.ring.shadow"),`;
    outline: `).concat(e("galleria.close.button.focus.ring.width")," ").concat(e("galleria.close.button.focus.ring.style")," ").concat(e("galleria.close.button.focus.ring.color"),`;
    outline-offset: `).concat(e("galleria.close.button.focus.ring.offset"),`;
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
`)},mt={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:function(n){var e=n.instance,i=e.$attrs.showThumbnails&&e.getPositionClass("p-galleria-thumbnails",e.$attrs.thumbnailsPosition),r=e.$attrs.showIndicators&&e.getPositionClass("p-galleria-indicators",e.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":e.$attrs.fullScreen,"p-galleria-inset-indicators":e.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":e.$attrs.showItemNavigatorsOnHover&&!e.$attrs.fullScreen},i,r]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(n){var e=n.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":e.isNavBackwardDisabled()}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(n){var e=n.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":e.isNavForwardDisabled()}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(n){var e=n.instance,i=n.index;return["p-galleria-indicator",{"p-galleria-indicator-active":e.isIndicatorItemActive(i)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(n){var e=n.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":e.isNavBackwardDisabled()}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(n){var e=n.instance,i=n.index,r=n.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===i,"p-galleria-thumbnail-item-active":e.isItemActive(i),"p-galleria-thumbnail-item-start":e.firstItemAciveIndex()===i,"p-galleria-thumbnail-item-end":e.lastItemActiveIndex()===i}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(n){var e=n.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":e.isNavForwardDisabled()}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},pt=M.extend({name:"galleria",theme:ht,classes:mt}),gt={name:"BaseGalleria",extends:k,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:pt,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function I(t){return yt(t)||vt(t)||bt(t)||ft()}function ft(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bt(t,n){if(t){if(typeof t=="string")return N(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?N(t,n):void 0}}function vt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function yt(t){if(Array.isArray(t))return N(t)}function N(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,i=Array(n);e<n;e++)i[e]=t[e];return i}var J={name:"GalleriaItem",hostName:"Galleria",extends:k,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(n){return{context:{highlighted:this.activeIndex===n}}},next:function(){var n=this.activeIndex+1,e=this.circular&&this.value.length-1===this.activeIndex?0:n;this.$emit("update:activeIndex",e)},prev:function(){var n=this.activeIndex!==0?this.activeIndex-1:0,e=this.circular&&this.activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",e)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(n){this.stopSlideShow(),this.prev(),n&&n.cancelable&&n.preventDefault()},navForward:function(n){this.stopSlideShow(),this.next(),n&&n.cancelable&&n.preventDefault()},onIndicatorClick:function(n){this.stopSlideShow(),this.$emit("update:activeIndex",n)},onIndicatorMouseEnter:function(n){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",n))},onIndicatorKeyDown:function(n,e){switch(n.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",e),n.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),n.preventDefault();break;case"End":this.onEndKey(),n.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":n.preventDefault();break}},onRightKey:function(){var n=I(f(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e+1===n.length?n.length-1:e+1)},onLeftKey:function(){var n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n-1<=0?0:n-1)},onHomeKey:function(){var n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,0)},onEndKey:function(){var n=I(f(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,n.length-1)},onTabKey:function(){var n=I(f(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),e=n.findIndex(function(a){return G(a,"data-p-active")===!0}),i=A(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]'),r=n.findIndex(function(a){return a===i.parentElement});n[r].children[0].tabIndex="-1",n[e].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var n=I(f(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),e=A(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]');return n.findIndex(function(i){return i===e.parentElement})},changedFocusedIndicator:function(n,e){var i=I(f(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));i[n].children[0].tabIndex="-1",i[e].children[0].tabIndex="0",i[e].children[0].focus()},isIndicatorItemActive:function(n){return this.activeIndex===n},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber:function(n){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,n):void 0},ariaPageLabel:function(n){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,n):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:X,ChevronRightIcon:Y},directives:{ripple:L}},It=["disabled"],wt=["id","aria-label","aria-roledescription"],St=["disabled"],xt=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],kt=["tabindex"];function Pt(t,n,e,i,r,a){var p=O("ripple");return o(),u("div",s({class:t.cx("itemsContainer")},t.ptm("itemsContainer")),[b("div",s({class:t.cx("items")},t.ptm("items")),[e.showItemNavigators?y((o(),u("button",s({key:0,type:"button",class:t.cx("prevButton"),onClick:n[0]||(n[0]=function(c){return a.navBackward(c)}),disabled:a.isNavBackwardDisabled()},t.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(o(),h(g(e.templates.previousitemicon||"ChevronLeftIcon"),s({class:t.cx("prevIcon")},t.ptm("prevIcon")),null,16,["class"]))],16,It)),[[p]]):d("",!0),b("div",s({id:e.id+"_item_"+e.activeIndex,class:t.cx("item"),role:"group","aria-label":a.ariaSlideNumber(e.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},t.ptm("item")),[e.templates.item?(o(),h(g(e.templates.item),{key:0,item:a.activeItem},null,8,["item"])):d("",!0)],16,wt),e.showItemNavigators?y((o(),u("button",s({key:1,type:"button",class:t.cx("nextButton"),onClick:n[1]||(n[1]=function(c){return a.navForward(c)}),disabled:a.isNavForwardDisabled()},t.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(o(),h(g(e.templates.nextitemicon||"ChevronRightIcon"),s({class:t.cx("nextIcon")},t.ptm("nextIcon")),null,16,["class"]))],16,St)),[[p]]):d("",!0),e.templates.caption?(o(),u("div",s({key:2,class:t.cx("caption")},t.ptm("caption")),[e.templates.caption?(o(),h(g(e.templates.caption),{key:0,item:a.activeItem},null,8,["item"])):d("",!0)],16)):d("",!0)],16),e.showIndicators?(o(),u("ul",s({key:0,ref:"indicatorContent",class:t.cx("indicatorList")},t.ptm("indicatorList")),[(o(!0),u(Z,null,W(e.value,function(c,l){return o(),u("li",s({key:"p-galleria-indicator-".concat(l),class:t.cx("indicator",{index:l}),"aria-label":a.ariaPageLabel(l+1),"aria-selected":e.activeIndex===l,"aria-controls":e.id+"_item_"+l,onClick:function(v){return a.onIndicatorClick(l)},onMouseenter:function(v){return a.onIndicatorMouseEnter(l)},onKeydown:function(v){return a.onIndicatorKeyDown(v,l)},ref_for:!0},t.ptm("indicator",a.getIndicatorPTOptions(l)),{"data-p-active":a.isIndicatorItemActive(l)}),[e.templates.indicator?d("",!0):(o(),u("button",s({key:0,type:"button",tabindex:e.activeIndex===l?"0":"-1",class:t.cx("indicatorButton"),ref_for:!0},t.ptm("indicatorButton",a.getIndicatorPTOptions(l))),null,16,kt)),e.templates.indicator?(o(),h(g(e.templates.indicator),{key:1,index:l,activeIndex:e.activeIndex,tabindex:e.activeIndex===l?"0":"-1"},null,8,["index","activeIndex","tabindex"])):d("",!0)],16,xt)}),128))],16)):d("",!0)],16)}J.render=Pt;function $(t){return Bt(t)||Ot(t)||Ct(t)||At()}function At(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(t,n){if(t){if(typeof t=="string")return V(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?V(t,n):void 0}}function Ot(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Bt(t){if(Array.isArray(t))return V(t)}function V(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,i=Array(n);e<n;e++)i[e]=t[e];return i}var Q={name:"GalleriaThumbnails",hostName:"Galleria",extends:k,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(n,e){this.d_numVisible=n,this.d_oldNumVisible=e},activeIndex:function(n,e){this.d_activeIndex=n,this.d_oldActiveItemIndex=e}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var n=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?n=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?n=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?n=this.d_activeIndex*-1+this.getMedianItemIndex()+1:n=this.d_activeIndex*-1+this.getMedianItemIndex(),n!==this.totalShiftedItems&&(this.totalShiftedItems=n),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&D(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(n){var e=this.totalShiftedItems+n;n<0&&-1*e+this.d_numVisible>this.value.length-1?e=this.d_numVisible-this.value.length:n>0&&e>0&&(e=0),this.circular&&(n<0&&this.value.length-1===this.d_activeIndex?e=0:n>0&&this.d_activeIndex===0&&(e=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&D(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(e*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(e*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=e},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var n=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?n:n-1},navBackward:function(n){this.stopSlideShow();var e=this.d_activeIndex!==0?this.d_activeIndex-1:0,i=e+this.totalShiftedItems;this.d_numVisible-i-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:e;this.$emit("update:activeIndex",r),n.cancelable&&n.preventDefault()},navForward:function(n){this.stopSlideShow();var e=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;e+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var i=this.circular&&this.value.length-1===this.d_activeIndex?0:e;this.$emit("update:activeIndex",i),n.cancelable&&n.preventDefault()},onItemClick:function(n){this.stopSlideShow();var e=n;if(e!==this.d_activeIndex){var i=e+this.totalShiftedItems,r=0;e<this.d_activeIndex?(r=this.d_numVisible-i-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-i,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",e)}},onThumbnailKeydown:function(n,e){switch((n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.onItemClick(e),n.preventDefault()),n.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),n.preventDefault();break;case"End":this.onEndKey(),n.preventDefault();break;case"ArrowUp":case"ArrowDown":n.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var n=f(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e+1===n.length?n.length-1:e+1)},onLeftKey:function(){var n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n-1<=0?0:n-1)},onHomeKey:function(){var n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,0)},onEndKey:function(){var n=f(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,n.length-1)},onTabKey:function(){var n=$(f(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),e=n.findIndex(function(a){return G(a,"data-p-active")===!0}),i=A(this.$refs.itemsContainer,'[tabindex="0"]'),r=n.findIndex(function(a){return a===i.parentElement});n[r].children[0].tabIndex="-1",n[e].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var n=$(f(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),e=A(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return n.findIndex(function(i){return i===e.parentElement})},changedFocusedIndicator:function(n,e){var i=f(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');i[n].children[0].tabIndex="-1",i[e].children[0].tabIndex="0",i[e].children[0].focus()},onTransitionEnd:function(n){this.$refs.itemsContainer&&n.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&U(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(n){var e=n.changedTouches[0];this.startPos={x:e.pageX,y:e.pageY}},onTouchMove:function(n){n.cancelable&&n.preventDefault()},onTouchEnd:function(n){var e=n.changedTouches[0];this.isVertical?this.changePageOnTouch(n,e.pageY-this.startPos.y):this.changePageOnTouch(n,e.pageX-this.startPos.x)},changePageOnTouch:function(n,e){e<0?this.navForward(n):this.navBackward(n)},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var n;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",et(this.thumbnailsStyle,"nonce",(n=this.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce),document.body.appendChild(this.thumbnailsStyle)}var e=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=$(this.responsiveOptions);var i=nt();this.sortedResponsiveOptions.sort(function(p,c){var l=p.breakpoint,m=c.breakpoint;return it(l,m,-1,i)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var a=this.sortedResponsiveOptions[r];e+=`
                        @media screen and (max-width: `.concat(a.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/a.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=e},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var n=window.innerWidth,e={numVisible:this.numVisible},i=0;i<this.sortedResponsiveOptions.length;i++){var r=this.sortedResponsiveOptions[i];parseInt(r.breakpoint,10)>=n&&(e=r)}this.d_numVisible!==e.numVisible&&(this.d_numVisible=e.numVisible)}},bindDocumentListeners:function(){var n=this;this.documentResizeListener||(this.documentResizeListener=function(){n.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(n){return this.firstItemAciveIndex()<=n&&this.lastItemActiveIndex()>=n},ariaPageLabel:function(n){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,n):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:X,ChevronRightIcon:Y,ChevronUpIcon:ut,ChevronDownIcon:dt},directives:{ripple:L}};function w(t){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(t)}function K(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,i)}return e}function P(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?K(Object(e),!0).forEach(function(i){Tt(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):K(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function Tt(t,n,e){return(n=$t(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function $t(t){var n=Nt(t,"string");return w(n)=="symbol"?n:n+""}function Nt(t,n){if(w(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var i=e.call(t,n||"default");if(w(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var Vt=["disabled","aria-label"],Lt=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],jt=["tabindex","aria-label","aria-current","onClick"],Dt=["disabled","aria-label"];function Et(t,n,e,i,r,a){var p=O("ripple");return o(),u("div",s({class:t.cx("thumbnails")},t.ptm("thumbnails")),[b("div",s({class:t.cx("thumbnailContent")},t.ptm("thumbnailContent")),[e.showThumbnailNavigators?y((o(),u("button",s({key:0,class:t.cx("thumbnailPrevButton"),disabled:a.isNavBackwardDisabled(),type:"button","aria-label":a.ariaPrevButtonLabel,onClick:n[0]||(n[0]=function(c){return a.navBackward(c)})},P(P({},e.prevButtonProps),t.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(o(),h(g(e.templates.previousthumbnailicon||(e.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),s({class:t.cx("thumbnailPrevIcon")},t.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,Vt)),[[p]]):d("",!0),b("div",s({class:t.cx("thumbnailsViewport"),style:{height:e.isVertical?e.contentHeight:""}},t.ptm("thumbnailsViewport")),[b("div",s({ref:"itemsContainer",class:t.cx("thumbnailItems"),role:"tablist",onTransitionend:n[1]||(n[1]=function(c){return a.onTransitionEnd(c)}),onTouchstart:n[2]||(n[2]=function(c){return a.onTouchStart(c)}),onTouchmove:n[3]||(n[3]=function(c){return a.onTouchMove(c)}),onTouchend:n[4]||(n[4]=function(c){return a.onTouchEnd(c)})},t.ptm("thumbnailItems")),[(o(!0),u(Z,null,W(e.value,function(c,l){return o(),u("div",s({key:"p-galleria-thumbnail-item-".concat(l),class:t.cx("thumbnailItem",{index:l,activeIndex:e.activeIndex}),role:"tab","data-p-active":e.activeIndex===l,"aria-selected":e.activeIndex===l,"aria-controls":e.containerId+"_item_"+l,onKeydown:function(v){return a.onThumbnailKeydown(v,l)},ref_for:!0},t.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":e.activeIndex===l,"data-p-galleria-thumbnail-item-active":a.isItemActive(l),"data-p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===l,"data-p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===l}),[b("div",s({class:t.cx("thumbnail"),tabindex:e.activeIndex===l?"0":"-1","aria-label":a.ariaPageLabel(l+1),"aria-current":e.activeIndex===l?"page":void 0,onClick:function(v){return a.onItemClick(l)},ref_for:!0},t.ptm("thumbnail")),[e.templates.thumbnail?(o(),h(g(e.templates.thumbnail),{key:0,item:c},null,8,["item"])):d("",!0)],16,jt)],16,Lt)}),128))],16)],16),e.showThumbnailNavigators?y((o(),u("button",s({key:1,class:t.cx("thumbnailNextButton"),disabled:a.isNavForwardDisabled(),type:"button","aria-label":a.ariaNextButtonLabel,onClick:n[5]||(n[5]=function(c){return a.navForward(c)})},P(P({},e.nextButtonProps),t.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(o(),h(g(e.templates.nextthumbnailicon||(e.isVertical?"ChevronDownIcon":"ChevronRightIcon")),s({class:t.cx("thumbnailNextIcon")},t.ptm("thumbnailNextIcon")),null,16,["class"]))],16,Dt)),[[p]]):d("",!0)],16)],16)}Q.render=Et;function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(t)}function F(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,i)}return e}function z(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?F(Object(e),!0).forEach(function(i){Kt(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):F(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function Kt(t,n,e){return(n=Ft(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Ft(t){var n=zt(t,"string");return S(n)=="symbol"?n:n+""}function zt(t,n){if(S(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var i=e.call(t,n||"default");if(S(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var _={name:"GalleriaContent",hostName:"Galleria",extends:k,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{id:this.$attrs.id||T(),activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.id":function(n){this.id=n||T()},"$attrs.value":function(n){n&&n.length<this.numVisible&&(this.numVisible=n.length)},"$attrs.activeIndex":function(n){this.activeIndex=n},"$attrs.numVisible":function(n){this.numVisible=n},"$attrs.autoPlay":function(n){n?this.startSlideShow():this.stopSlideShow()}},mounted:function(){this.id=this.id||T()},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(n){return this.ptm(n,{props:z(z({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var n=this;this.interval=setInterval(function(){var e=n.$attrs.circular&&n.$attrs.value.length-1===n.activeIndex?0:n.activeIndex+1;n.activeIndex=e},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(n,e){var i=["top","left","bottom","right"],r=i.find(function(a){return a===e});return r?"".concat(n,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:J,GalleriaThumbnails:Q,TimesIcon:ct},directives:{ripple:L}};function x(t){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(t)}function R(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,i)}return e}function H(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?R(Object(e),!0).forEach(function(i){Rt(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function Rt(t,n,e){return(n=Ht(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Ht(t){var n=Mt(t,"string");return x(n)=="symbol"?n:n+""}function Mt(t,n){if(x(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var i=e.call(t,n||"default");if(x(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var Ut=["id","aria-label","aria-roledescription"],Gt=["aria-label"],Zt=["aria-live"];function Wt(t,n,e,i,r,a){var p=C("GalleriaItem"),c=C("GalleriaThumbnails"),l=O("ripple");return t.$attrs.value&&t.$attrs.value.length>0?(o(),u("div",s({key:0,id:r.id,role:"region",class:[t.cx("root"),t.$attrs.containerClass],style:t.$attrs.containerStyle,"aria-label":t.$attrs.ariaLabel,"aria-roledescription":t.$attrs.ariaRoledescription},H(H({},t.$attrs.containerProps),a.getPTOptions("root"))),[t.$attrs.fullScreen?y((o(),u("button",s({key:0,autofocus:"",type:"button",class:t.cx("closeButton"),"aria-label":a.closeAriaLabel,onClick:n[0]||(n[0]=function(m){return t.$emit("mask-hide")})},a.getPTOptions("closeButton")),[(o(),h(g(t.$attrs.templates.closeicon||"TimesIcon"),s({class:t.cx("closeIcon")},a.getPTOptions("closeIcon")),null,16,["class"]))],16,Gt)),[[l]]):d("",!0),t.$attrs.templates&&t.$attrs.templates.header?(o(),u("div",s({key:1,class:t.cx("header")},a.getPTOptions("header")),[(o(),h(g(t.$attrs.templates.header)))],16)):d("",!0),b("div",s({class:t.cx("content"),"aria-live":t.$attrs.autoPlay?"polite":"off"},a.getPTOptions("content")),[q(p,{id:r.id,activeIndex:r.activeIndex,"onUpdate:activeIndex":n[1]||(n[1]=function(m){return r.activeIndex=m}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":n[2]||(n[2]=function(m){return r.slideShowActive=m}),value:t.$attrs.value,circular:t.$attrs.circular,templates:t.$attrs.templates,showIndicators:t.$attrs.showIndicators,changeItemOnIndicatorHover:t.$attrs.changeItemOnIndicatorHover,showItemNavigators:t.$attrs.showItemNavigators,autoPlay:t.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow,pt:t.pt,unstyled:t.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),t.$attrs.showThumbnails?(o(),h(c,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":n[3]||(n[3]=function(m){return r.activeIndex=m}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":n[4]||(n[4]=function(m){return r.slideShowActive=m}),containerId:r.id,value:t.$attrs.value,templates:t.$attrs.templates,numVisible:r.numVisible,responsiveOptions:t.$attrs.responsiveOptions,circular:t.$attrs.circular,isVertical:a.isVertical(),contentHeight:t.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:t.$attrs.showThumbnailNavigators,prevButtonProps:t.$attrs.prevButtonProps,nextButtonProps:t.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow,pt:t.pt,unstyled:t.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):d("",!0)],16,Zt),t.$attrs.templates&&t.$attrs.templates.footer?(o(),u("div",s({key:2,class:t.cx("footer")},a.getPTOptions("footer")),[(o(),h(g(t.$attrs.templates.footer)))],16)):d("",!0)],16,Ut)):d("",!0)}_.render=Wt;var qt={name:"Galleria",extends:gt,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&j(),this.mask=null,this.container&&(B.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(n){B.set("modal",n,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(n){this.mask.style.zIndex=String(parseInt(n.style.zIndex,10)-1),tt(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&U(this.mask,"p-overlay-mask-leave")},onAfterLeave:function(n){B.clear(n),this.containerVisible=!1,j()},onActiveItemChange:function(n){this.activeIndex!==n&&this.$emit("update:activeIndex",n)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(n){this.container=n},maskRef:function(n){this.mask=n},focus:function(){var n=this.container.$el.querySelector("[autofocus]");n&&n.focus()}},components:{GalleriaContent:_,Portal:lt},directives:{focustrap:st}},Xt=["aria-modal"];function Yt(t,n,e,i,r,a){var p=C("GalleriaContent"),c=C("Portal"),l=O("focustrap");return t.fullScreen?(o(),h(c,{key:0},{default:E(function(){return[r.containerVisible?(o(),u("div",s({key:0,ref:a.maskRef,class:[t.cx("mask"),t.maskClass],role:"dialog","aria-modal":t.fullScreen?"true":void 0},t.ptm("mask")),[q(at,s({name:"p-galleria",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onAfterLeave:a.onAfterLeave,appear:""},t.ptm("transition")),{default:E(function(){return[t.visible?y((o(),h(p,s({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:t.$slots,onActiveitemChange:a.onActiveItemChange,pt:t.pt,unstyled:t.unstyled},t.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[l]]):d("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,Xt)):d("",!0)]}),_:1})):(o(),h(p,s({key:1,templates:t.$slots,onActiveitemChange:a.onActiveItemChange,pt:t.pt,unstyled:t.unstyled},t.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}qt.render=Yt;var Jt=function(n){var e=n.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(e("tag.primary.background"),`;
    color: `).concat(e("tag.primary.color"),`;
    font-size: `).concat(e("tag.font.size"),`;
    font-weight: `).concat(e("tag.font.weight"),`;
    padding: `).concat(e("tag.padding"),`;
    border-radius: `).concat(e("tag.border.radius"),`;
    gap: `).concat(e("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(e("tag.icon.size"),`;
    width: `).concat(e("tag.icon.size"),`;
    height:`).concat(e("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(e("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(e("tag.success.background"),`;
    color: `).concat(e("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(e("tag.info.background"),`;
    color: `).concat(e("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(e("tag.warn.background"),`;
    color: `).concat(e("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(e("tag.danger.background"),`;
    color: `).concat(e("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(e("tag.secondary.background"),`;
    color: `).concat(e("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(e("tag.contrast.background"),`;
    color: `).concat(e("tag.contrast.color"),`;
}
`)},Qt={root:function(n){var e=n.props;return["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},_t=M.extend({name:"tag",theme:Jt,classes:Qt}),te={name:"BaseTag",extends:k,props:{value:null,severity:null,rounded:Boolean,icon:String},style:_t,provide:function(){return{$pcTag:this,$parentInstance:this}}},ee={name:"Tag",extends:te,inheritAttrs:!1};function ne(t,n,e,i,r,a){return o(),u("span",s({class:t.cx("root")},t.ptmi("root")),[t.$slots.icon?(o(),h(g(t.$slots.icon),s({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(o(),u("span",s({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):d("",!0),t.value!=null||t.$slots.default?rt(t.$slots,"default",{key:2},function(){return[b("span",s({class:t.cx("label")},t.ptm("label")),ot(t.value),17)]}):d("",!0)],16)}ee.render=ne;export{ee as a,qt as s};
