import{B as z,c as p,a as d,F as y,g as x,m as u,b as i,l as b,p as w,q as E,v as Q,x as fe,y as Y,R as X,z as ge,f,A as M,t as h,k as ve,C as V,D as N,w as k,E as be,T as Z,r as A,h as v,G as ye,H as xe,I as we,J as ke,s as ee,K as _e,L as Ie,M as Se,N as $,O as H,P as Ce,Q as Pe,S as $e,d as Te,U as L,V as Ve,o as R,W as J,e as T,u as _,X as Ae,Y as Be}from"./app-D7MMaMtI.js";import{_ as je}from"./jiwanghosal-CWYdAzGh.js";import{t as O,o as G,s as Le,w as Oe,e as Ne}from"./home-2TE1L1oL.js";var Fe=({dt:e})=>`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    direction: ltr;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: ${e("timeline.vertical.event.content.padding")};
}

.p-timeline-vertical .p-timeline-event-connector {
    width: ${e("timeline.event.connector.size")};
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: ${e("timeline.event.min.height")};
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: ${e("timeline.event.marker.border.width")};
    border-style: solid;
    border-color: ${e("timeline.event.marker.border.color")};
    border-radius: ${e("timeline.event.marker.border.radius")};
    width: ${e("timeline.event.marker.size")};
    height: ${e("timeline.event.marker.size")};
    background: ${e("timeline.event.marker.background")};
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: ${e("timeline.event.marker.content.border.radius")};
    width: ${e("timeline.event.marker.content.size")};
    height:${e("timeline.event.marker.content.size")};
    background: ${e("timeline.event.marker.content.background")};
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("timeline.event.marker.border.radius")};
    box-shadow: ${e("timeline.event.marker.content.inset.shadow")};
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: ${e("timeline.event.connector.color")};
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: ${e("timeline.event.connector.size")};
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: ${e("timeline.horizontal.event.content.padding")};
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`,ze={root:function(t){var n=t.props;return["p-timeline p-component","p-timeline-"+n.align,"p-timeline-"+n.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Ee=z.extend({name:"timeline",style:Fe,classes:ze}),Ke={name:"BaseTimeline",extends:E,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Ee,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(e)}function W(e,t,n){return(t=De(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function De(e){var t=Me(e,"string");return B(t)=="symbol"?t:t+""}function Me(e,t){if(B(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t);if(B(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var te={name:"Timeline",extends:Ke,inheritAttrs:!1,methods:{getKey:function(t,n){return this.dataKey?fe(t,this.dataKey):n},getPTOptions:function(t,n){return this.ptm(t,{context:{index:n,count:this.value.length}})}},computed:{dataP:function(){return Q(W(W({},this.layout,this.layout),this.align,this.align))}}},He=["data-p"],Re=["data-p"],Je=["data-p"],Ge=["data-p"],We=["data-p"],Ue=["data-p"],qe=["data-p"];function Qe(e,t,n,s,o,a){return d(),p("div",u({class:e.cx("root")},e.ptmi("root"),{"data-p":a.dataP}),[(d(!0),p(y,null,x(e.value,function(g,m){return d(),p("div",u({key:a.getKey(g,m),class:e.cx("event"),ref_for:!0},a.getPTOptions("event",m),{"data-p":a.dataP}),[i("div",u({class:e.cx("eventOpposite",{index:m}),ref_for:!0},a.getPTOptions("eventOpposite",m),{"data-p":a.dataP}),[b(e.$slots,"opposite",{item:g,index:m})],16,Je),i("div",u({class:e.cx("eventSeparator"),ref_for:!0},a.getPTOptions("eventSeparator",m),{"data-p":a.dataP}),[b(e.$slots,"marker",{item:g,index:m},function(){return[i("div",u({class:e.cx("eventMarker"),ref_for:!0},a.getPTOptions("eventMarker",m),{"data-p":a.dataP}),null,16,We)]}),m!==e.value.length-1?b(e.$slots,"connector",{key:0,item:g,index:m},function(){return[i("div",u({class:e.cx("eventConnector"),ref_for:!0},a.getPTOptions("eventConnector",m),{"data-p":a.dataP}),null,16,Ue)]}):w("",!0)],16,Ge),i("div",u({class:e.cx("eventContent"),ref_for:!0},a.getPTOptions("eventContent",m),{"data-p":a.dataP}),[b(e.$slots,"content",{item:g,index:m})],16,qe)],16,Re)}),128))],16,He)}te.render=Qe;var ne={name:"MinusIcon",extends:Y};function Ye(e,t,n,s,o,a){return d(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[i("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}ne.render=Ye;var ie={name:"PlusIcon",extends:Y};function Xe(e,t,n,s,o,a){return d(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[i("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}ie.render=Xe;var Ze=({dt:e})=>`
.p-fieldset {
    background: ${e("fieldset.background")};
    border: 1px solid ${e("fieldset.border.color")};
    border-radius: ${e("fieldset.border.radius")};
    color: ${e("fieldset.color")};
    padding: ${e("fieldset.padding")};
    margin: 0;
}

.p-fieldset-legend {
    background: ${e("fieldset.legend.background")};
    border-radius: ${e("fieldset.legend.border.radius")};
    border-width: ${e("fieldset.legend.border.width")};
    border-style: solid;
    border-color: ${e("fieldset.legend.border.color")};
    padding: ${e("fieldset.legend.padding")};
    transition: background ${e("fieldset.transition.duration")}, color ${e("fieldset.transition.duration")}, outline-color ${e("fieldset.transition.duration")}, box-shadow ${e("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: ${e("fieldset.legend.gap")};
    align-items: center;
    justify-content: center;
    padding: ${e("fieldset.legend.padding")};
    background: transparent;
    border: 0 none;
    border-radius: ${e("fieldset.legend.border.radius")};
    transition: background ${e("fieldset.transition.duration")}, color ${e("fieldset.transition.duration")}, outline-color ${e("fieldset.transition.duration")}, box-shadow ${e("fieldset.transition.duration")};
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: ${e("fieldset.legend.font.weight")};
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: ${e("fieldset.legend.focus.ring.shadow")};
    outline: ${e("fieldset.legend.focus.ring.width")} ${e("fieldset.legend.focus.ring.style")} ${e("fieldset.legend.focus.ring.color")};
    outline-offset: ${e("fieldset.legend.focus.ring.offset")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: ${e("fieldset.legend.hover.color")};
    background: ${e("fieldset.legend.hover.background")};
}

.p-fieldset-toggle-icon {
    color: ${e("fieldset.toggle.icon.color")};
    transition: color ${e("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: ${e("fieldset.toggle.icon.hover.color")};
}

.p-fieldset .p-fieldset-content {
    padding: ${e("fieldset.content.padding")};
}
`,et={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},tt=z.extend({name:"fieldset",style:Ze,classes:et}),nt={name:"BaseFieldset",extends:E,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:tt,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},ae={name:"Fieldset",extends:nt,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return Q({toggleable:this.toggleable})}},directives:{ripple:X},components:{PlusIcon:ie,MinusIcon:ne}};function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(e)}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,s)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U(Object(n),!0).forEach(function(s){it(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function it(e,t,n){return(t=at(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function at(e){var t=st(e,"string");return j(t)=="symbol"?t:t+""}function st(e,t){if(j(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t);if(j(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var rt=["data-p"],ot=["data-p"],lt=["id"],dt=["id","aria-controls","aria-expanded","aria-label"],ct=["id","aria-labelledby"];function ut(e,t,n,s,o,a){var g=ge("ripple");return d(),p("fieldset",u({class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[i("legend",u({class:e.cx("legend"),"data-p":a.dataP},e.ptm("legend")),[b(e.$slots,"legend",{toggleCallback:a.toggle},function(){return[e.toggleable?w("",!0):(d(),p("span",u({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),h(e.legend),17,lt)),e.toggleable?M((d(),p("button",u({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!o.d_collapsed,"aria-label":a.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return a.toggle&&a.toggle.apply(a,arguments)}),onKeydown:t[1]||(t[1]=function(){return a.onKeyDown&&a.onKeyDown.apply(a,arguments)})},q(q({},e.toggleButtonProps),e.ptm("toggleButton"))),[b(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:o.d_collapsed,class:ve(e.cx("toggleIcon"))},function(){return[(d(),V(N(o.d_collapsed?"PlusIcon":"MinusIcon"),u({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),i("span",u({class:e.cx("legendLabel")},e.ptm("legendLabel")),h(e.legend),17)],16,dt)),[[g]]):w("",!0)]})],16,ot),f(Z,u({name:"p-toggleable-content"},e.ptm("transition")),{default:k(function(){return[M(i("div",u({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[i("div",u({class:e.cx("content")},e.ptm("content")),[b(e.$slots,"default")],16)],16,ct),[[be,!o.d_collapsed]])]}),_:3},16)],16,rt)}ae.render=ut;var pt=({dt:e})=>`
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-content {
    display: flex;
    flex-direction: row;
    gap: ${e("carousel.content.gap")};
}

.p-carousel-content:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-viewport {
    overflow: hidden;
    width: 100%;
}

.p-carousel-item-list {
    display: flex;
    flex-direction: row;
}

.p-carousel-item-list:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-prev-button,
.p-carousel-next-button {
    align-self: center;
    flex-shrink: 0;
}

.p-carousel-indicator-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: ${e("carousel.indicator.list.padding")};
    gap: ${e("carousel.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-carousel-indicator-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("carousel.indicator.background")};
    width: ${e("carousel.indicator.width")};
    height: ${e("carousel.indicator.height")};
    border: 0 none;
    transition: background ${e("carousel.transition.duration")}, color ${e("carousel.transition.duration")}, outline-color ${e("carousel.transition.duration")}, box-shadow ${e("carousel.transition.duration")};
    outline-color: transparent;
    border-radius: ${e("carousel.indicator.border.radius")};
    padding: 0;
    margin: 0;
    user-select: none;
    cursor: pointer;
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: ${e("carousel.indicator.focus.ring.shadow")};
    outline: ${e("carousel.indicator.focus.ring.width")} ${e("carousel.indicator.focus.ring.style")} ${e("carousel.indicator.focus.ring.color")};
    outline-offset: ${e("carousel.indicator.focus.ring.offset")};
}

.p-carousel-indicator-button:hover {
    background: ${e("carousel.indicator.hover.background")};
}

.p-carousel-indicator-active .p-carousel-indicator-button {
    background: ${e("carousel.indicator.active.background")};
}

.p-carousel-vertical .p-carousel-content {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-item-list {
    flex-direction: column;
    height: 100%;
}

.p-items-hidden .p-carousel-item {
    visibility: hidden;
}

.p-items-hidden .p-carousel-item.p-carousel-item-active {
    visibility: visible;
}
`,mt={root:function(t){var n=t.instance;return["p-carousel p-component",{"p-carousel-vertical":n.isVertical(),"p-carousel-horizontal":!n.isVertical()}]},header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:function(t){var n=t.instance;return["p-carousel-prev-button",{"p-disabled":n.backwardIsDisabled}]},viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:function(t){var n=t.index,s=t.value,o=t.totalShiftedItems,a=t.d_numVisible;return["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":o*-1===s.length+a,"p-carousel-item-start":n===0,"p-carousel-item-end":s.slice(-1*a).length-1===n}]},item:function(t){var n=t.instance,s=t.index;return["p-carousel-item",{"p-carousel-item-active":n.firstIndex()<=s&&n.lastIndex()>=s,"p-carousel-item-start":n.firstIndex()===s,"p-carousel-item-end":n.lastIndex()===s}]},pcNextButton:function(t){var n=t.instance;return["p-carousel-next-button",{"p-disabled":n.forwardIsDisabled}]},indicatorList:"p-carousel-indicator-list",indicator:function(t){var n=t.instance,s=t.index;return["p-carousel-indicator",{"p-carousel-indicator-active":n.d_page===s}]},indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},ht=z.extend({name:"carousel",style:pt,classes:mt}),ft={name:"BaseCarousel",extends:E,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:ht,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function S(e){return yt(e)||bt(e)||vt(e)||gt()}function gt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vt(e,t){if(e){if(typeof e=="string")return F(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function bt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yt(e){if(Array.isArray(e))return F(e)}function F(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=Array(t);n<t;n++)s[n]=e[n];return s}var se={name:"Carousel",extends:ft,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(t){t>this.d_page?this.navForward({},t):t<this.d_page&&this.navBackward({},t),this.d_page=t},circular:function(t){this.d_circular=t},numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},numScroll:function(t,n){this.d_oldNumScroll=n,this.d_numScroll=t},value:function(t){this.d_oldValue=t}},mounted:function(){var t=!1;if(this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var n=this.totalShiftedItems;this.d_page===0?n=-1*this.d_numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n,t=!0)}!t&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var t=this.isCircular(),n=!1,s=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var o=this.d_page;this.totalIndicators!==0&&o>=this.totalIndicators&&(o=this.totalIndicators-1,this.$emit("update:page",o),this.d_page=o,n=!0),s=o*this.d_numScroll*-1,t&&(s-=this.d_numVisible),o===this.totalIndicators-1&&this.remainingItems>0?(s+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,s!==this.totalShiftedItems&&(this.totalShiftedItems=s,n=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(s*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(s*(100/this.d_numVisible),"%, 0, 0)")}t&&(this.d_page===0?s=-1*this.d_numVisible:s===0&&(s=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),s!==this.totalShiftedItems&&(this.totalShiftedItems=s,n=!0)),!n&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(t,n){return this.ptm(t,{context:{highlighted:n===this.d_page}})},getItemPTOptions:function(t,n){return this.ptm(t,{context:{index:n,active:this.firstIndex()<=n&&this.lastIndex()>=n,start:this.firstIndex()===n,end:this.lastIndex()===n}})},step:function(t,n){var s=this.totalShiftedItems,o=this.isCircular();if(n!=null)s=this.d_numScroll*n*-1,o&&(s-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{s+=this.d_numScroll*t,this.isRemainingItemsAdded&&(s+=this.remainingItems-this.d_numScroll*t,this.isRemainingItemsAdded=!1);var a=o?s+this.d_numVisible:s;n=Math.abs(Math.floor(a/this.d_numScroll))}o&&this.d_page===this.totalIndicators-1&&t===-1?(s=-1*(this.value.length+this.d_numVisible),n=0):o&&this.d_page===0&&t===1?(s=0,n=this.totalIndicators-1):n===this.totalIndicators-1&&this.remainingItems>0&&(s+=this.remainingItems*-1-this.d_numScroll*t,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&$e(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(s*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(s*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=s,this.$emit("update:page",n),this.d_page=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible,numScroll:this.numScroll},s=0;s<this.responsiveOptions.length;s++){var o=this.responsiveOptions[s];parseInt(o.breakpoint,10)>=t&&(n=o)}if(this.d_numScroll!==n.numScroll){var a=this.d_page;a=parseInt(a*this.d_numScroll/n.numScroll),this.totalShiftedItems=n.numScroll*a*-1,this.isCircular()&&(this.totalShiftedItems-=n.numVisible),this.d_numScroll=n.numScroll,this.$emit("update:page",a),this.d_page=a}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},navBackward:function(t,n){(this.d_circular||this.d_page!==0)&&this.step(1,n),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},navForward:function(t,n){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,n),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},onIndicatorClick:function(t,n){var s=this.d_page;n>s?this.navForward(t,n):n<s&&this.navBackward(t,n)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&Pe(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){var n=t.changedTouches[0],s=this.isVertical()?n.pageY-this.startPos.y:n.pageX-this.startPos.x;Math.abs(s)>this.swipeThreshold&&t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){Math.abs(n)>this.swipeThreshold&&(n<0?this.navForward(t):this.navBackward(t))},onIndicatorKeydown:function(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=S($(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=S($(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=S($(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(a){return Ce(a,"data-p-active")===!0}),s=H(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),o=t.findIndex(function(a){return a===s.parentElement});t[o].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=S($(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=H(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(function(s){return s===n.parentElement})},changedFocusedIndicator:function(t,n){var s=S($(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));s[t].children[0].tabIndex="-1",s[n].children[0].tabIndex="0",s[n].children[0].focus()},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(n){t.calculatePosition(n)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var t=this;this.interval=setInterval(function(){t.d_page===t.totalIndicators-1?t.step(-1,0):t.step(-1,t.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var t;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",_e(this.carouselStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.carouselStyle)}var n=`
                .p-carousel[`.concat(this.$attrSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var s=S(this.responsiveOptions),o=Ie();s.sort(function(m,c){var C=m.breakpoint,P=c.breakpoint;return Se(C,P,-1,o)});for(var a=0;a<s.length;a++){var g=s[a];n+=`
                        @media screen and (max-width: `.concat(g.breakpoint,`) {
                            .p-carousel[`).concat(this.$attrSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/g.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=n},isVertical:function(){return this.orientation==="vertical"},hasValidItemCount:function(){return this.value&&this.value.length>this.d_numVisible},isCircular:function(){return this.hasValidItemCount()&&this.d_circular},isAutoplay:function(){return this.hasValidItemCount()&&this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var t;return((t=this.$primevue.config)===null||t===void 0||(t=t.locale)===null||t===void 0?void 0:t.emptyMessage)||""}},components:{Button:ee,ChevronRightIcon:ke,ChevronDownIcon:we,ChevronLeftIcon:xe,ChevronUpIcon:ye},directives:{ripple:X}},xt=["aria-live"],wt=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],kt=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],_t=["data-p-active"],It=["tabindex","aria-label","aria-current","onClick"];function St(e,t,n,s,o,a){var g=A("Button");return d(),p("div",u({class:e.cx("root"),role:"region"},e.ptmi("root")),[e.$slots.header?(d(),p("div",u({key:0,class:e.cx("header")},e.ptm("header")),[b(e.$slots,"header")],16)):w("",!0),a.empty?b(e.$slots,"empty",{key:2},function(){return[v(h(a.emptyMessageText),1)]}):(d(),p("div",u({key:1,class:[e.cx("contentContainer"),e.containerClass]},e.ptm("contentContainer")),[i("div",u({class:[e.cx("content"),e.contentClass],"aria-live":o.allowAutoplay?"polite":"off"},e.ptm("content")),[e.showNavigators?(d(),V(g,u({key:0,class:e.cx("pcPrevButton"),disabled:a.backwardIsDisabled,"aria-label":a.ariaPrevButtonLabel,unstyled:e.unstyled,onClick:a.navBackward},e.prevButtonProps,{pt:e.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:k(function(m){return[b(e.$slots,"previcon",{},function(){return[(d(),V(N(a.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),u({class:m.icon},e.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):w("",!0),i("div",u({class:e.cx("viewport"),style:[{height:a.isVertical()?e.verticalViewPortHeight:"auto"}],onTouchend:t[1]||(t[1]=function(){return a.onTouchEnd&&a.onTouchEnd.apply(a,arguments)}),onTouchstart:t[2]||(t[2]=function(){return a.onTouchStart&&a.onTouchStart.apply(a,arguments)}),onTouchmove:t[3]||(t[3]=function(){return a.onTouchMove&&a.onTouchMove.apply(a,arguments)})},e.ptm("viewport")),[i("div",u({ref:"itemsContainer",class:e.cx("itemList"),onTransitionend:t[0]||(t[0]=function(){return a.onTransitionEnd&&a.onTransitionEnd.apply(a,arguments)})},e.ptm("itemList")),[a.isCircular()?(d(!0),p(y,{key:0},x(e.value.slice(-1*o.d_numVisible),function(m,c){return d(),p("div",u({key:c+"_scloned",class:e.cx("itemClone",{index:c,value:e.value,totalShiftedItems:o.totalShiftedItems,d_numVisible:o.d_numVisible}),ref_for:!0},e.ptm("itemClone"),{"data-p-carousel-item-active":o.totalShiftedItems*-1===e.value.length+o.d_numVisible,"data-p-carousel-item-start":c===0,"data-p-carousel-item-end":e.value.slice(-1*o.d_numVisible).length-1===c}),[b(e.$slots,"item",{data:m,index:c})],16,wt)}),128)):w("",!0),(d(!0),p(y,null,x(e.value,function(m,c){return d(),p("div",u({key:c,class:e.cx("item",{index:c}),role:"group","aria-hidden":a.firstIndex()>c||a.lastIndex()<c?!0:void 0,"aria-label":a.ariaSlideNumber(c),"aria-roledescription":a.ariaSlideLabel,ref_for:!0},a.getItemPTOptions("item",c),{"data-p-carousel-item-active":a.firstIndex()<=c&&a.lastIndex()>=c,"data-p-carousel-item-start":a.firstIndex()===c,"data-p-carousel-item-end":a.lastIndex()===c}),[b(e.$slots,"item",{data:m,index:c})],16,kt)}),128)),a.isCircular()?(d(!0),p(y,{key:1},x(e.value.slice(0,o.d_numVisible),function(m,c){return d(),p("div",u({key:c+"_fcloned",class:e.cx("itemClone",{index:c,value:e.value,totalShiftedItems:o.totalShiftedItems,d_numVisible:o.d_numVisible}),ref_for:!0},e.ptm("itemClone")),[b(e.$slots,"item",{data:m,index:c})],16)}),128)):w("",!0)],16)],16),e.showNavigators?(d(),V(g,u({key:1,class:e.cx("pcNextButton"),disabled:a.forwardIsDisabled,"aria-label":a.ariaNextButtonLabel,unstyled:e.unstyled,onClick:a.navForward},e.nextButtonProps,{pt:e.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:k(function(m){return[b(e.$slots,"nexticon",{},function(){return[(d(),V(N(a.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),u({class:m.class},e.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):w("",!0)],16,xt),a.totalIndicators>=0&&e.showIndicators?(d(),p("ul",u({key:0,ref:"indicatorContent",class:[e.cx("indicatorList"),e.indicatorsContentClass],onKeydown:t[4]||(t[4]=function(){return a.onIndicatorKeydown&&a.onIndicatorKeydown.apply(a,arguments)})},e.ptm("indicatorList")),[(d(!0),p(y,null,x(a.totalIndicators,function(m,c){return d(),p("li",u({key:"p-carousel-indicator-"+c.toString(),class:e.cx("indicator",{index:c}),ref_for:!0},a.getIndicatorPTOptions("indicator",c),{"data-p-active":o.d_page===c}),[i("button",u({class:e.cx("indicatorButton"),type:"button",tabindex:o.d_page===c?"0":"-1","aria-label":a.ariaPageLabel(c+1),"aria-current":o.d_page===c?"page":void 0,onClick:function(P){return a.onIndicatorClick(P,c)},ref_for:!0},a.getIndicatorPTOptions("indicatorButton",c)),null,16,It)],16,_t)}),128))],16)):w("",!0)],16)),e.$slots.footer?(d(),p("div",u({key:3,class:e.cx("footer")},e.ptm("footer")),[b(e.$slots,"footer")],16)):w("",!0)],16)}se.render=St;const Ct={class:"hero-newage relative overflow-hidden p-4 md:p-6 surface-0"},Pt={class:"grid align-items-center"},$t={class:"col-12 md:col-8"},Tt={class:"text-xl md:text-2xl mt-3 line-height-3 min-h-10rem"},Vt={class:"text-4xl"},At={class:"flex gap-3 mt-5 flex-wrap"},Bt={href:"https://cal.com/stackseekers",target:"_blank",class:"no-underline mt-4"},jt={class:"my-8 px-4 md:px-6"},Lt={class:"grid"},Ot={class:"col-12 md:col-6"},Nt={class:"surface-card p-4 border-round-xl shadow-2 mb-4"},Ft={class:"col-12 md:col-6"},zt={class:"surface-card p-4 border-round-xl shadow-2 h-full"},Et={class:"my-8 surface-section p-4 md:p-6 border-round-3xl mx-4 md:mx-6"},Kt={class:"grid align-items-center"},Dt={class:"col-12 md:col-4 text-center"},Mt={class:"flex flex-column gap-3"},Ht={href:"https://www.youtube.com/@JiwanGhosal",target:"_blank",class:"no-underline"},Rt={href:"https://www.instagram.com/jiwan_ghosal/",target:"_blank",class:"no-underline"},Jt={class:"my-6"},Gt={class:"my-4 marquee"},Wt={class:"marquee-track"},Ut={class:"no-underline flex flex-column justify-content-center flex-wrap"},qt={class:"flex align-items-center justify-content-center h-3rem"},Qt=["src","alt"],Yt={class:"h-5rem"},Xt={class:"text-base md:text-xl font-bold flex align-items-center justify-content-center p-0 m-0 text-center line-height-3"},Zt={class:"text-xs md:text-sm flex align-items-center justify-content-center line-height-2 text-center"},en={class:"no-underline flex flex-column justify-content-center flex-wrap"},tn={class:"flex align-items-center justify-content-center h-3rem"},nn=["src","alt"],an={class:"h-5rem"},sn={class:"text-base md:text-xl font-bold flex align-items-center justify-content-center p-0 m-0 text-center line-height-3"},rn={class:"text-xs md:text-sm flex align-items-center justify-content-center line-height-2 text-center"},on={class:"mt-6"},ln={class:"gallery gap-4"},dn=["href","aria-label"],cn=["src","alt"],un={class:"p-0 m-2"},pn={class:"text-center mt-6"},mn={href:"/web-development-projects/",class:"no-underline"},hn={class:"grid justify-content-center my-4"},fn=["src","alt"],gn={class:"sr-only"},vn={class:"my-6"},bn={class:"card shadow-1 border-round-md p-4 md:mx-8 vp-feature-item"},yn={class:"flex align-items-center"},xn=["href"],wn={class:"flex flex-column align-items-start ml-2 p-0 m-0"},kn={class:"text-sm text-600 flex align-items-center mt-1"},_n=["alt","src"],In={class:"font-italic mb-8"},Sn={class:"text-md line-height-3"},Cn={class:"grid justify-content-center my-4 md:flex hidden"},Pn={class:"card shadow-1 border-round-md m-2 p-2 vp-feature-item"},$n={class:"flex align-items-center mb-4"},Tn=["href"],Vn={class:"flex flex-column align-items-start ml-2 p-0 m-0"},An={class:"text-sm"},Bn=["alt","src"],jn={class:"font-italic"},Ln={class:"text-md line-height-3"},On={class:"text-center pb-4"},Nn={href:"https://www.linkedin.com/in/jiwanghosal/details/recommendations/",size:"large",class:"flex justify-content-center text-center no-underline mt-4"},Fn={class:"p-flex p-ai-center"},zn={class:"p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"},En={class:"my-6 flex flex-column"},Kn={class:"flex flex-wrap"},Dn={class:"flex align-items-center pl-2 m-0 p-0"},Mn=["src","alt"],Hn={class:"font-bold p-2 line-height-2"},Rn={class:"m-0 pt-4"},Jn={class:"my-8"},Gn={href:"https://cal.com/stackseekers",size:"large",class:"flex justify-content-center text-center no-underline -mt-4","aria-label":"Send an Email"},Wn={class:"my-6"},Un={class:"grid overflow-hidden border-round-md"},qn={class:"col-12"},Qn={class:"border-round-md flex flex-column gap-4 md:p-2"},Yn={class:"p-4"},Xn={class:"mx-3"},Zn={class:"my-8"},ei={href:"https://cal.com/stackseekers",size:"large",class:"flex justify-content-center text-center no-underline -mt-4","aria-label":"Send an Email"},ti=1e4,si=Te({__name:"index.html",setup(e){const t=L(0);let n=null;L(!1);const s=L([{breakpoint:"1400px",numVisible:1,numScroll:1},{breakpoint:"1199px",numVisible:1,numScroll:1},{breakpoint:"767px",numVisible:1,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]),o=["idea to launch","MVPs","enterprise‑grade apps","AI‑powered products"],a=L(0),g=Ve(()=>o[a.value]);let m=null;R(()=>{m=setInterval(()=>{a.value=(a.value+1)%o.length},3e3)}),J(()=>{m&&clearInterval(m)});const c=()=>{n=setInterval(()=>{t.value=(t.value+1)%O.length},ti)},C=()=>{clearInterval(n)},P=()=>{c()},re=K=>{t.value=K};return R(()=>{c()}),J(()=>{C()}),(K,r)=>{const I=ee,D=A("Circles"),oe=A("CustomButton"),le=A("YouTubePlayers"),de=Ae,ce=se,ue=ae,pe=te,me=A("Contact");return d(),p("div",null,[i("section",Ct,[r[7]||(r[7]=i("div",{class:"orb orb-1"},null,-1)),r[8]||(r[8]=i("div",{class:"orb orb-2"},null,-1)),i("div",Pt,[i("div",$t,[r[4]||(r[4]=T('<div class="mb-3 flex align-items-center gap-2"><span class="inline-flex align-items-center px-2 py-1 border-round-xl bg-primary text-xs"><i class="pi pi-sparkles mr-1"></i> New‑age development partner </span><span class="text-xs text-500">Faster launches · Scalable systems · Reduced operational risk</span></div><h1 class="m-0 p-0 line-height-2 text-5xl md:text-7xl font-bold"> The <span class="text-gradient">Architect</span> behind Stack Seekers </h1>',2)),i("div",Tt,[i("div",Vt,[r[0]||(r[0]=v("Turning ")),f(Z,{name:"fade",mode:"out-in"},{default:k(()=>[(d(),p("span",{key:g.value,class:"text-gradient-2"},h(g.value),1))]),_:1}),r[1]||(r[1]=v(" into engineering excellence."))]),r[2]||(r[2]=i("span",{class:"flex mt-4"},"I’m Jiwan Ghosal, a senior full-stack engineer and the founder of Stack Seekers. I specialize in taking raw ideas and architecting them into scalable, production-grade platforms.",-1)),r[3]||(r[3]=i("p",{class:"mt-3"},"Whether you need a high-performance SaaS or an AI-driven automation engine, I provide the technical leadership to launch faster, scale reliably, and reduce operational pain.",-1))]),i("div",At,[i("a",Bt,[f(I,{label:"Book a 25‑min strategy call",icon:"pi pi-calendar-clock",severity:"primary",rounded:"",raised:""})]),f(oe,{href:"/web-development-projects/",label:"See Work"},{icon:k(()=>[f(D)]),_:1})]),r[5]||(r[5]=T('<div class="mt-5 grid gap-3 ml-1"><div class="flex align-items-center gap-3"><i class="pi pi-check-circle text-green-500"></i><span class="text-sm md:text-base">Enterprise patterns, startup speed</span></div><div class="flex align-items-center gap-3"><i class="pi pi-check-circle text-green-500"></i><span class="text-sm md:text-base">Transparent roadmap and weekly demos</span></div></div>',1))]),r[6]||(r[6]=i("div",{class:"col-12 md:col-4 mt-6 md:mt-0"},[i("div",{class:"relative border-round-2xl overflow-hidden"},[i("img",{src:je,alt:"Jiwan Ghosal",width:"600",height:"600",class:"w-1/2 border-round-2xl shadow-4 hero-image",style:{height:"auto","aspect-ratio":"1/1","object-fit":"cover"},loading:"eager",fetchpriority:"high"}),i("div",{class:"glow-ring"})])],-1))])]),i("div",jt,[i("div",Lt,[i("div",Ot,[r[11]||(r[11]=i("h2",{class:"text-4xl font-bold mb-4"},"Highlights of My Journey",-1)),i("div",Nt,[r[9]||(r[9]=i("h3",{class:"text-2xl font-bold mb-2"},"JS World Conference, Amsterdam",-1)),f(le,{videoId:"H7B5hQbQqKQ",autoplay:!1,muted:!0,loop:!0,class:"border-round-xl overflow-hidden"}),r[10]||(r[10]=i("p",{class:"mt-3 line-height-3"},"In 2023, I participated in the JS World Conference in Amsterdam, presenting on high-performance frontend architecture and state management at scale. Connecting with the global engineering community keeps me at the forefront of modern web standards.",-1))])]),i("div",Ft,[i("div",zt,[r[12]||(r[12]=i("h3",{class:"text-2xl font-bold mb-2"},"NSE Future Tech Hackathon",-1)),f(de,{src:"/img/about/nseHackathon.webp",width:"100%",class:"border-round-xl overflow-hidden"}),r[13]||(r[13]=i("p",{class:"mt-3 line-height-3"},"Proud Finalist (Top 7) in the NSE Future Tech Hackathon. Our team tackled complex financial data challenges, showcasing the ability to build high-stakes solutions under pressure.",-1))])])])]),i("div",Et,[i("div",Kt,[r[14]||(r[14]=T('<div class="col-12 md:col-8"><h2 class="text-4xl font-bold mb-3">The Person Behind the Code</h2><p class="text-xl line-height-4"> When I’m not architecting cloud platforms, I’m exploring the intersection of technology and travel. I document my adventures on my <a href="https://www.youtube.com/@JiwanGhosal" target="_blank" class="text-primary no-underline font-bold">travel vlog</a> and share my daily learnings on <a href="https://www.instagram.com/jiwan_ghosal/" target="_blank" class="text-primary no-underline font-bold">Instagram</a>. </p><p class="text-lg line-height-3 mt-4"> I believe that a great engineer is defined by curiosity. Whether it&#39;s learning a new city&#39;s culture or a new framework&#39;s nuances, that drive for discovery is what fuels my work at Stack Seekers. </p></div>',1)),i("div",Dt,[i("div",Mt,[i("a",Ht,[f(I,{label:"Watch my Travel Vlogs",icon:"pi pi-video",severity:"secondary",outlined:"",rounded:"",class:"w-full"})]),i("a",Rt,[f(I,{label:"Follow on Instagram",icon:"pi pi-instagram",severity:"secondary",outlined:"",rounded:"",class:"w-full"})])])])])]),i("div",Jt,[r[15]||(r[15]=i("div",{class:"text-center pb-4 px-2"},[i("h2",{class:"text-3xl md:text-5xl font-bold m-0 p-0 line-height-2 mb-3"},[v("Scaling startups. "),i("span",{class:"text-primary"},"Elevating industry giants.")]),i("p",{class:"text-lg md:text-xl text-600 line-height-3 max-w-40rem mx-auto mb-0"},"I bring a proven track record of success in the industry, engineering enterprise architectures for global brands.")],-1)),i("div",Gt,[i("div",Wt,[(d(!0),p(y,null,x(_(G),l=>(d(),p("div",{class:"border-round-md flex align-items-center justify-content-center marquee-item",key:`org-1-${l.title}`},[i("div",Ut,[i("div",qt,[i("img",{src:l.icon,alt:l.title,width:"40",height:"40",class:"border-round-md",style:{"aspect-ratio":"1/1"},loading:"lazy",fetchpriority:"low"},null,8,Qt)]),i("div",Yt,[i("h3",Xt,h(l.title),1),i("div",Zt,h(l.details),1)])])]))),128)),(d(!0),p(y,null,x(_(G),l=>(d(),p("div",{class:"border-round-md flex align-items-center justify-content-center marquee-item",key:`org-2-${l.title}`,"aria-hidden":"true"},[i("div",en,[i("div",tn,[i("img",{src:l.icon,alt:l.title,width:"40",height:"40",class:"border-round-md",style:{"aspect-ratio":"1/1"},loading:"lazy",fetchpriority:"low"},null,8,nn)]),i("div",an,[i("h3",sn,h(l.title),1),i("div",rn,h(l.details),1)])])]))),128))])])]),i("div",on,[r[16]||(r[16]=i("div",{class:"text-center pb-4"},[i("h2",{class:"text-4xl font-bold mb-4"},[v("Scalable Solutions for "),i("span",{class:"bg-primary px-2"},"Startups, Enterprises & Agencies")]),i("p",{class:"text-xl md:text-center line-height-3 text-700"},"I'm Jiwan Ghosal, a senior engineer specialising in fast, interactive frontends and high-performance server infrastructure on scalable cloud platforms. I help founders and teams launch faster, scale confidently, and eliminate operational bottlenecks. I bring a proven track record across every phase of product development.")],-1)),i("div",ln,[(d(!0),p(y,null,x(_(Be).slice(0,8),(l,he)=>(d(),p("div",{key:he,class:"gallery-item mb-4"},[i("a",{href:l.link,class:"text-l gap-2 font-medium text-center no-underline","aria-label":l.name},[i("img",{src:l.images[0].itemImageSrc,alt:l.images[0].alt,width:"400",height:"250",loading:"lazy"},null,8,cn),i("h3",un,h(l.name),1)],8,dn)]))),128))]),i("div",pn,[i("a",mn,[f(I,{label:"View Full Architectural Playbook",icon:"pi pi-th-large",severity:"secondary",rounded:"",outlined:""})])]),i("div",hn,[(d(!0),p(y,null,x(_(Le),l=>(d(),p("div",{class:"flex gap-2 p-2",key:l.title},[i("img",{width:"32px",height:"32px",src:`https://cdn.simpleicons.org/${l.link}`,alt:l.title,loading:"eager",fetchpriority:"high"},null,8,fn),i("span",gn,h(l.title),1)]))),128))])]),i("div",vn,[r[22]||(r[22]=i("div",{class:"text-center pb-4"},[i("div",{class:"text-4xl font-bold"},[i("h2",null,[v("Trusted by "),i("div",{class:"text-4xl font-bold bg-primary"},"World Wide")])]),i("h3",{class:"my-4 text-xl line-height-2"},"Client Testimonials: See how partners describe their experience collaborating with me on innovative digital solutions.")],-1)),i("div",{class:"card relative md:mx-0 -mx-4 md:hidden block",onMouseenter:C,onMouseleave:P},[f(ce,{value:_(O),numVisible:1,numScroll:1,ref:"carousel",responsiveOptions:s.value,circular:"",page:t.value,onPage:re},{item:k(l=>[i("div",bn,[i("div",yn,[i("a",{href:l.data.link,target:"_blank",class:"no-underline"},[i("h3",wn,[i("div",kn,[r[17]||(r[17]=i("i",{class:"pi pi-linkedin mr-1 text-blue-700",style:{"font-size":"1rem"}},null,-1)),v(" "+h(l.data.name)+", ",1),i("img",{alt:l.data.location,src:`https://flagcdn.com/w20/${l.data.code.toLowerCase()}.png`,width:"20",height:"15",class:"mr-2 border-round-sm",loading:"lazy"},null,8,_n),v(" "+h(l.data.location),1)])])],8,xn)]),i("div",In,[i("div",Sn,[r[18]||(r[18]=i("span",{class:"font-bold text-4xl"},'"',-1)),v(" "+h(l.data.message),1)])])])]),_:1},8,["value","responsiveOptions","page"])],32),i("div",Cn,[(d(!0),p(y,null,x(_(O),l=>(d(),p("div",{class:"card md:mx-0 -mx-4 col-12 md:col-3",key:l.name},[i("div",Pn,[i("div",$n,[i("a",{href:l.link,target:"_blank",class:"no-underline"},[i("h3",Vn,[i("div",null,[r[19]||(r[19]=i("i",{class:"pi pi-linkedin mr-1 text-blue-700",style:{"font-size":"1rem"}},null,-1)),v(" "+h(l.name)+", ",1)]),i("div",An,[i("img",{alt:l.location,src:`https://flagcdn.com/w20/${l.code.toLowerCase()}.png`,width:"20",height:"15",class:"mr-2 border-round-sm",loading:"lazy"},null,8,Bn),v(" "+h(l.location),1)])])],8,Tn)]),i("div",jn,[i("div",Ln,h(l.message),1)])])]))),128))]),i("div",On,[i("a",Nn,[i("div",Fn,[i("div",zn,[r[20]||(r[20]=i("span",{class:"mr-6"},[i("i",{class:"pi pi-linkedin mr-1","aria-label":"View LinkedIn Reviews",style:{"font-size":"1rem",color:"#0a66c2"}}),v(" View Recommendations ")],-1)),f(D),r[21]||(r[21]=i("i",{class:"pi pi-angle-double-right",style:{"font-size":"1rem"}},null,-1))])])])])]),i("div",En,[r[24]||(r[24]=i("div",{class:"text-center pb-4"},[i("div",{class:"text-4xl font-bold"},[i("h2",null,[v("Why choose "),i("span",{class:"bg-primary"},"me?")])]),i("div",{class:"my-4 text-xl line-height-2"},"Here’s why I’m the right choice for your project")],-1)),i("div",Kn,[(d(!0),p(y,null,x(_(Oe),l=>(d(),p("div",{class:"md:col-6 col-12 md:p-4",key:l.title},[f(ue,{class:"vp-feature-item"},{legend:k(()=>[i("h3",Dn,[i("img",{src:`/img/home/${l.id}.svg`,class:"p-avatar p-avatar-circle",loading:"lazy",alt:`${l.title} icon`,width:"24px",height:"24px"},null,8,Mn),i("span",Hn,h(l.title),1)])]),default:k(()=>[i("p",Rn,h(l.description),1)]),_:2},1024)]))),128))]),i("div",Jn,[i("a",Gn,[f(I,{label:"Book a free call",icon:"pi pi-briefcase",severity:"primary",raised:"",rounded:""})]),r[23]||(r[23]=i("div",{class:"text-center text-xs mt-1"},"No commitment. Get a roadmap and estimate.",-1))])]),i("div",Wn,[r[31]||(r[31]=i("div",{class:"text-center pb-4"},[i("div",{class:"text-4xl font-bold line-height-2"},[i("h2",null,[v("Frequently asked "),i("span",{class:"bg-primary"},"questions")])])],-1)),i("div",Un,[i("div",qn,[i("div",Qn,[r[29]||(r[29]=T('<div class="p-4"><h3 class="m-0 p-0 font-bold">Q. How can I start a project with you?</h3><p class="mx-3"> You can start by <a href="https://cal.com/stackseekers" class="no-underline text-xl" aria-label="schedule a meeting">scheduling a meeting</a> with me. I’ll connect with you promptly to discuss your requirements and plan the next steps. </p></div><div class="p-4"><h3 class="mt-0 p-0 font-bold">Q. What services do you provide?</h3><div class="mx-3"> I offer a variety of specialized engineering services including <a href="/web-development-services/product-architecture-and-scaling/" class="no-underline text-xl" aria-label="Product Architecture">Product Architecture</a>, <a href="/web-development-services/ai-and-automation-strategy/" class="no-underline text-xl" aria-label="AI Automation">AI &amp; Automation</a>, <a href="/web-development-services/api-performance-and-integration/" class="no-underline text-xl" aria-label="API Design">High-Performance API Design</a>, <a href="/web-development-services/programmatic-seo-and-growth/" class="no-underline text-xl" aria-label="Programmatic SEO">Programmatic SEO</a>, and <a href="/web-development-services/enterprise-cloud-migration/" class="no-underline text-xl" aria-label="Cloud Migration">Enterprise Cloud Migration</a>. <p class="mt-2">Let’s find the best solution for your technical bottlenecks!</p></div></div>',2)),i("div",Yn,[r[28]||(r[28]=i("h3",{class:"mt-0 p-0 font-bold"},"Q. What does the project process look like?",-1)),i("div",Xn,[r[27]||(r[27]=i("div",{class:"my-4"},"It’s simple and straightforward: ",-1)),f(pe,{value:_(Ne),align:"left",pt:{eventOpposite:{style:{padding:0,flex:0}},marker:{style:{backgroundColor:"#FFA500"}},connector:{style:{backgroundColor:"#FFA500"}},content:{style:{padding:"4px, 2px"}}}},{opposite:k(l=>r[25]||(r[25]=[i("small",{class:"p-text-secondary"},null,-1)])),content:k(l=>[v(h(l.item.status),1)]),_:1},8,["value"]),i("div",Zn,[i("a",ei,[f(I,{label:"Book a free call",icon:"pi pi-briefcase",severity:"primary",raised:"",rounded:""})]),r[26]||(r[26]=i("div",{class:"text-center text-xs mt-1"},"No commitment. Get a roadmap and estimate.",-1))])])]),r[30]||(r[30]=T('<div><h3 class="mt-0 p-0">Guarantees &amp; Safety Nets</h3><div class=""><div class="flex flex-column gap-4"><div class=""><i class="pi pi-shield text-small mr-3"></i><span class="text-lg">If I&#39;m not a fit after the first week, you pay nothing.</span></div><div class=""><i class="pi pi-unlock text-small mr-3"></i><span class="text-lg">No lock‑in: cancel monthly engagement anytime.</span></div></div></div></div>',1))])])])]),f(me)])}}}),ri=JSON.parse('{"path":"/jiwan-ghosal/","title":"Jiwan Ghosal | Senior Enterprise Architecture Partner & Fractional CTO","lang":"en-US","frontmatter":{"home":true,"title":"Jiwan Ghosal | Senior Enterprise Architecture Partner & Fractional CTO","description":"Jiwan Ghosal — senior enterprise architecture partner and Fractional CTO. Founder of Stack Seekers. Building scalable React, Next.js & Node.js platforms globally.","editLink":false,"copyright":false,"pageInfo":false,"contributors":false,"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Jiwan Ghosal | Senior Enterprise Architecture Partner & Fractional CTO\\",\\"description\\":\\"Jiwan Ghosal — senior enterprise architecture partner and Fractional CTO. Founder of Stack Seekers. Building scalable React, Next.js & Node.js platforms globally.\\"}"],["meta",{"property":"og:url","content":"https://stackseekers.com/jiwan-ghosal/"}],["meta",{"property":"og:site_name","content":"Stack Seekers"}],["meta",{"property":"og:title","content":"Jiwan Ghosal | Senior Enterprise Architecture Partner & Fractional CTO"}],["meta",{"property":"og:description","content":"Jiwan Ghosal — senior enterprise architecture partner and Fractional CTO. Founder of Stack Seekers. Building scalable React, Next.js & Node.js platforms globally."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://stackseekers.com/img/home/jiwanghosal.webp"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2026-05-11T05:22:55.000Z"}],["meta",{"property":"article:modified_time","content":"2026-05-11T05:22:55.000Z"}],["link",{"rel":"canonical","href":"https://stackseekers.com/jiwan-ghosal/"}]]},"git":{"createdTime":1671040067000,"updatedTime":1778476975000},"readingTime":{"minutes":9.7,"words":2911},"filePathRelative":"jiwan-ghosal/index.md","excerpt":"<section class=\\"hero-newage relative overflow-hidden p-4 md:p-6 surface-0\\">\\n  <div class=\\"orb orb-1\\"></div>\\n  <div class=\\"orb orb-2\\"></div>\\n  <div class=\\"grid align-items-center\\">\\n    <div class=\\"col-12 md:col-8\\">\\n      <div class=\\"mb-3 flex align-items-center gap-2\\">\\n        <span class=\\"inline-flex align-items-center px-2 py-1 border-round-xl bg-primary text-xs\\">\\n          <i class=\\"pi pi-sparkles mr-1\\"></i> New‑age development partner\\n        </span>\\n        <span class=\\"text-xs text-500\\">Faster launches · Scalable systems · Reduced operational risk</span>\\n      </div>\\n      <h1 class=\\"m-0 p-0 line-height-2 text-5xl md:text-7xl font-bold\\">\\n        The <span class=\\"text-gradient\\">Architect</span> behind Stack Seekers\\n      </h1>\\n      <div class=\\"text-xl md:text-2xl mt-3 line-height-3 min-h-10rem\\">\\n        <div class=\\"text-4xl\\">Turning  into engineering excellence.</div>\\n        <span class=\\"flex mt-4\\">I’m Jiwan Ghosal, a senior full-stack engineer and the founder of Stack Seekers. I specialize in taking raw ideas and architecting them into scalable, production-grade platforms.</span>\\n        <p class=\\"mt-3\\">Whether you need a high-performance SaaS or an AI-driven automation engine, I provide the technical leadership to launch faster, scale reliably, and reduce operational pain.</p>\\n      </div>\\n      <div class=\\"flex gap-3 mt-5 flex-wrap\\">\\n        <a href=\\"https://cal.com/stackseekers\\" target=\\"_blank\\" class=\\"no-underline mt-4\\">\\n          </a><button label=\\"Book a 25‑min strategy call\\" icon=\\"pi pi-calendar-clock\\" severity=\\"primary\\" rounded=\\"\\" raised=\\"\\"><a href=\\"https://cal.com/stackseekers\\" target=\\"_blank\\" class=\\"no-underline mt-4\\">\\n        </a>\\n        \\n      </button></div>\\n      <div class=\\"mt-5 grid gap-3 ml-1\\">\\n        <div class=\\"flex align-items-center gap-3\\">\\n          <i class=\\"pi pi-check-circle text-green-500\\"></i>\\n          <span class=\\"text-sm md:text-base\\">Enterprise patterns, startup speed</span>\\n        </div>\\n        <div class=\\"flex align-items-center gap-3\\">\\n          <i class=\\"pi pi-check-circle text-green-500\\"></i>\\n          <span class=\\"text-sm md:text-base\\">Transparent roadmap and weekly demos</span>\\n        </div>\\n      </div>\\n    </div>\\n    <div class=\\"col-12 md:col-4 mt-6 md:mt-0\\">\\n      <div class=\\"relative border-round-2xl overflow-hidden\\">\\n        <img src=\\"/img/home/jiwanghosal.webp\\" alt=\\"Jiwan Ghosal\\" width=\\"600\\" height=\\"600\\" class=\\"w-1/2 border-round-2xl shadow-4 hero-image\\" style=\\"height: auto; aspect-ratio: 1/1; object-fit: cover;\\" loading=\\"eager\\" fetchpriority=\\"high\\">\\n        <div class=\\"glow-ring\\"></div>\\n      </div>\\n    </div>\\n  </div>\\n</section>"}');export{si as comp,ri as data};
