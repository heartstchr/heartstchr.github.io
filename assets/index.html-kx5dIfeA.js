import{B as E,s as O,c as J,r as oe,a as p,o as d,F as x,b as k,m as u,d as i,e as g,f as w,g as U,R as q,h as se,i as y,w as M,t as v,n as L,j as $,k as B,l as b,v as re,T as le,p as Z,q as de,u as ce,x as ue,y as S,z,A as pe,C as me,D as he,E as fe,G as h,H as ge,I as j,J as ve,K as be,L as F,M as I}from"./app-pLjelcwu.js";import{p as ye,s as we,a as xe}from"./projects-xVpBc_bD.js";import{s as ke,a as Ie}from"./index-aCvlwkSU.js";import{s as Ce,a as _e}from"./index-DttqxRTy.js";var Se=({dt:e})=>`
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
`,$e={root:function(t){var n=t.props;return["p-timeline p-component","p-timeline-"+n.align,"p-timeline-"+n.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Pe=E.extend({name:"timeline",style:Se,classes:$e}),Ve={name:"BaseTimeline",extends:O,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Pe,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function P(e){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(e)}function K(e,t,n){return(t=Te(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e){var t=Ae(e,"string");return P(t)=="symbol"?t:t+""}function Ae(e,t){if(P(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(P(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Q={name:"Timeline",extends:Ve,inheritAttrs:!1,methods:{getKey:function(t,n){return this.dataKey?oe(t,this.dataKey):n},getPTOptions:function(t,n){return this.ptm(t,{context:{index:n,count:this.value.length}})}},computed:{dataP:function(){return J(K(K({},this.layout,this.layout),this.align,this.align))}}},je=["data-p"],Le=["data-p"],Be=["data-p"],Ne=["data-p"],Ee=["data-p"],Oe=["data-p"],De=["data-p"];function Me(e,t,n,o,s,a){return d(),p("div",u({class:e.cx("root")},e.ptmi("root"),{"data-p":a.dataP}),[(d(!0),p(x,null,k(e.value,function(f,m){return d(),p("div",u({key:a.getKey(f,m),class:e.cx("event"),ref_for:!0},a.getPTOptions("event",m),{"data-p":a.dataP}),[i("div",u({class:e.cx("eventOpposite",{index:m}),ref_for:!0},a.getPTOptions("eventOpposite",m),{"data-p":a.dataP}),[g(e.$slots,"opposite",{item:f,index:m})],16,Be),i("div",u({class:e.cx("eventSeparator"),ref_for:!0},a.getPTOptions("eventSeparator",m),{"data-p":a.dataP}),[g(e.$slots,"marker",{item:f,index:m},function(){return[i("div",u({class:e.cx("eventMarker"),ref_for:!0},a.getPTOptions("eventMarker",m),{"data-p":a.dataP}),null,16,Ee)]}),m!==e.value.length-1?g(e.$slots,"connector",{key:0,item:f,index:m},function(){return[i("div",u({class:e.cx("eventConnector"),ref_for:!0},a.getPTOptions("eventConnector",m),{"data-p":a.dataP}),null,16,Oe)]}):w("",!0)],16,Ne),i("div",u({class:e.cx("eventContent"),ref_for:!0},a.getPTOptions("eventContent",m),{"data-p":a.dataP}),[g(e.$slots,"content",{item:f,index:m})],16,De)],16,Le)}),128))],16,je)}Q.render=Me;var G={name:"MinusIcon",extends:U};function ze(e,t,n,o,s,a){return d(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[i("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}G.render=ze;var Y={name:"PlusIcon",extends:U};function Fe(e,t,n,o,s,a){return d(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[i("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}Y.render=Fe;var Ke=({dt:e})=>`
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
`,He={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},Re=E.extend({name:"fieldset",style:Ke,classes:He}),We={name:"BaseFieldset",extends:O,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:Re,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},X={name:"Fieldset",extends:We,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return J({toggleable:this.toggleable})}},directives:{ripple:q},components:{PlusIcon:Y,MinusIcon:G}};function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H(Object(n),!0).forEach(function(o){Je(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Je(e,t,n){return(t=Ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ue(e){var t=qe(e,"string");return V(t)=="symbol"?t:t+""}function qe(e,t){if(V(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(V(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ze=["data-p"],Qe=["data-p"],Ge=["id"],Ye=["id","aria-controls","aria-expanded","aria-label"],Xe=["id","aria-labelledby"];function et(e,t,n,o,s,a){var f=se("ripple");return d(),p("fieldset",u({class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[i("legend",u({class:e.cx("legend"),"data-p":a.dataP},e.ptm("legend")),[g(e.$slots,"legend",{toggleCallback:a.toggle},function(){return[e.toggleable?w("",!0):(d(),p("span",u({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),v(e.legend),17,Ge)),e.toggleable?M((d(),p("button",u({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!s.d_collapsed,"aria-label":a.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return a.toggle&&a.toggle.apply(a,arguments)}),onKeydown:t[1]||(t[1]=function(){return a.onKeyDown&&a.onKeyDown.apply(a,arguments)})},R(R({},e.toggleButtonProps),e.ptm("toggleButton"))),[g(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:s.d_collapsed,class:L(e.cx("toggleIcon"))},function(){return[(d(),$(B(s.d_collapsed?"PlusIcon":"MinusIcon"),u({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),i("span",u({class:e.cx("legendLabel")},e.ptm("legendLabel")),v(e.legend),17)],16,Ye)),[[f]]):w("",!0)]})],16,Qe),y(le,u({name:"p-toggleable-content"},e.ptm("transition")),{default:b(function(){return[M(i("div",u({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[i("div",u({class:e.cx("content")},e.ptm("content")),[g(e.$slots,"default")],16)],16,Xe),[[re,!s.d_collapsed]])]}),_:3},16)],16,Ze)}X.render=et;var tt=({dt:e})=>`
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
`,nt={root:function(t){var n=t.instance;return["p-carousel p-component",{"p-carousel-vertical":n.isVertical(),"p-carousel-horizontal":!n.isVertical()}]},header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:function(t){var n=t.instance;return["p-carousel-prev-button",{"p-disabled":n.backwardIsDisabled}]},viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:function(t){var n=t.index,o=t.value,s=t.totalShiftedItems,a=t.d_numVisible;return["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":s*-1===o.length+a,"p-carousel-item-start":n===0,"p-carousel-item-end":o.slice(-1*a).length-1===n}]},item:function(t){var n=t.instance,o=t.index;return["p-carousel-item",{"p-carousel-item-active":n.firstIndex()<=o&&n.lastIndex()>=o,"p-carousel-item-start":n.firstIndex()===o,"p-carousel-item-end":n.lastIndex()===o}]},pcNextButton:function(t){var n=t.instance;return["p-carousel-next-button",{"p-disabled":n.forwardIsDisabled}]},indicatorList:"p-carousel-indicator-list",indicator:function(t){var n=t.instance,o=t.index;return["p-carousel-indicator",{"p-carousel-indicator-active":n.d_page===o}]},indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},it=E.extend({name:"carousel",style:tt,classes:nt}),at={name:"BaseCarousel",extends:O,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:it,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function C(e){return lt(e)||rt(e)||st(e)||ot()}function ot(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(e,t){if(e){if(typeof e=="string")return N(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function rt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lt(e){if(Array.isArray(e))return N(e)}function N(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var ee={name:"Carousel",extends:at,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(t){t>this.d_page?this.navForward({},t):t<this.d_page&&this.navBackward({},t),this.d_page=t},circular:function(t){this.d_circular=t},numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},numScroll:function(t,n){this.d_oldNumScroll=n,this.d_numScroll=t},value:function(t){this.d_oldValue=t}},mounted:function(){var t=!1;if(this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var n=this.totalShiftedItems;this.d_page===0?n=-1*this.d_numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n,t=!0)}!t&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var t=this.isCircular(),n=!1,o=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var s=this.d_page;this.totalIndicators!==0&&s>=this.totalIndicators&&(s=this.totalIndicators-1,this.$emit("update:page",s),this.d_page=s,n=!0),o=s*this.d_numScroll*-1,t&&(o-=this.d_numVisible),s===this.totalIndicators-1&&this.remainingItems>0?(o+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,o!==this.totalShiftedItems&&(this.totalShiftedItems=o,n=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(o*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(o*(100/this.d_numVisible),"%, 0, 0)")}t&&(this.d_page===0?o=-1*this.d_numVisible:o===0&&(o=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),o!==this.totalShiftedItems&&(this.totalShiftedItems=o,n=!0)),!n&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(t,n){return this.ptm(t,{context:{highlighted:n===this.d_page}})},getItemPTOptions:function(t,n){return this.ptm(t,{context:{index:n,active:this.firstIndex()<=n&&this.lastIndex()>=n,start:this.firstIndex()===n,end:this.lastIndex()===n}})},step:function(t,n){var o=this.totalShiftedItems,s=this.isCircular();if(n!=null)o=this.d_numScroll*n*-1,s&&(o-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{o+=this.d_numScroll*t,this.isRemainingItemsAdded&&(o+=this.remainingItems-this.d_numScroll*t,this.isRemainingItemsAdded=!1);var a=s?o+this.d_numVisible:o;n=Math.abs(Math.floor(a/this.d_numScroll))}s&&this.d_page===this.totalIndicators-1&&t===-1?(o=-1*(this.value.length+this.d_numVisible),n=0):s&&this.d_page===0&&t===1?(o=0,n=this.totalIndicators-1):n===this.totalIndicators-1&&this.remainingItems>0&&(o+=this.remainingItems*-1-this.d_numScroll*t,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&he(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(o*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(o*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=o,this.$emit("update:page",n),this.d_page=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible,numScroll:this.numScroll},o=0;o<this.responsiveOptions.length;o++){var s=this.responsiveOptions[o];parseInt(s.breakpoint,10)>=t&&(n=s)}if(this.d_numScroll!==n.numScroll){var a=this.d_page;a=parseInt(a*this.d_numScroll/n.numScroll),this.totalShiftedItems=n.numScroll*a*-1,this.isCircular()&&(this.totalShiftedItems-=n.numVisible),this.d_numScroll=n.numScroll,this.$emit("update:page",a),this.d_page=a}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},navBackward:function(t,n){(this.d_circular||this.d_page!==0)&&this.step(1,n),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},navForward:function(t,n){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,n),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},onIndicatorClick:function(t,n){var o=this.d_page;n>o?this.navForward(t,n):n<o&&this.navBackward(t,n)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&me(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){var n=t.changedTouches[0],o=this.isVertical()?n.pageY-this.startPos.y:n.pageX-this.startPos.x;Math.abs(o)>this.swipeThreshold&&t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){Math.abs(n)>this.swipeThreshold&&(n<0?this.navForward(t):this.navBackward(t))},onIndicatorKeydown:function(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=C(S(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=C(S(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=C(S(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(a){return pe(a,"data-p-active")===!0}),o=z(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),s=t.findIndex(function(a){return a===o.parentElement});t[s].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=C(S(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=z(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(function(o){return o===n.parentElement})},changedFocusedIndicator:function(t,n){var o=C(S(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));o[t].children[0].tabIndex="-1",o[n].children[0].tabIndex="0",o[n].children[0].focus()},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(n){t.calculatePosition(n)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var t=this;this.interval=setInterval(function(){t.d_page===t.totalIndicators-1?t.step(-1,0):t.step(-1,t.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var t;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",de(this.carouselStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.carouselStyle)}var n=`
                .p-carousel[`.concat(this.$attrSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var o=C(this.responsiveOptions),s=ce();o.sort(function(m,c){var _=m.breakpoint,r=c.breakpoint;return ue(_,r,-1,s)});for(var a=0;a<o.length;a++){var f=o[a];n+=`
                        @media screen and (max-width: `.concat(f.breakpoint,`) {
                            .p-carousel[`).concat(this.$attrSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/f.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=n},isVertical:function(){return this.orientation==="vertical"},hasValidItemCount:function(){return this.value&&this.value.length>this.d_numVisible},isCircular:function(){return this.hasValidItemCount()&&this.d_circular},isAutoplay:function(){return this.hasValidItemCount()&&this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var t;return((t=this.$primevue.config)===null||t===void 0||(t=t.locale)===null||t===void 0?void 0:t.emptyMessage)||""}},components:{Button:Z,ChevronRightIcon:_e,ChevronDownIcon:Ie,ChevronLeftIcon:Ce,ChevronUpIcon:ke},directives:{ripple:q}},dt=["aria-live"],ct=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],ut=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],pt=["data-p-active"],mt=["tabindex","aria-label","aria-current","onClick"];function ht(e,t,n,o,s,a){var f=fe("Button");return d(),p("div",u({class:e.cx("root"),role:"region"},e.ptmi("root")),[e.$slots.header?(d(),p("div",u({key:0,class:e.cx("header")},e.ptm("header")),[g(e.$slots,"header")],16)):w("",!0),a.empty?g(e.$slots,"empty",{key:2},function(){return[h(v(a.emptyMessageText),1)]}):(d(),p("div",u({key:1,class:[e.cx("contentContainer"),e.containerClass]},e.ptm("contentContainer")),[i("div",u({class:[e.cx("content"),e.contentClass],"aria-live":s.allowAutoplay?"polite":"off"},e.ptm("content")),[e.showNavigators?(d(),$(f,u({key:0,class:e.cx("pcPrevButton"),disabled:a.backwardIsDisabled,"aria-label":a.ariaPrevButtonLabel,unstyled:e.unstyled,onClick:a.navBackward},e.prevButtonProps,{pt:e.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:b(function(m){return[g(e.$slots,"previcon",{},function(){return[(d(),$(B(a.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),u({class:m.icon},e.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):w("",!0),i("div",u({class:e.cx("viewport"),style:[{height:a.isVertical()?e.verticalViewPortHeight:"auto"}],onTouchend:t[1]||(t[1]=function(){return a.onTouchEnd&&a.onTouchEnd.apply(a,arguments)}),onTouchstart:t[2]||(t[2]=function(){return a.onTouchStart&&a.onTouchStart.apply(a,arguments)}),onTouchmove:t[3]||(t[3]=function(){return a.onTouchMove&&a.onTouchMove.apply(a,arguments)})},e.ptm("viewport")),[i("div",u({ref:"itemsContainer",class:e.cx("itemList"),onTransitionend:t[0]||(t[0]=function(){return a.onTransitionEnd&&a.onTransitionEnd.apply(a,arguments)})},e.ptm("itemList")),[a.isCircular()?(d(!0),p(x,{key:0},k(e.value.slice(-1*s.d_numVisible),function(m,c){return d(),p("div",u({key:c+"_scloned",class:e.cx("itemClone",{index:c,value:e.value,totalShiftedItems:s.totalShiftedItems,d_numVisible:s.d_numVisible}),ref_for:!0},e.ptm("itemClone"),{"data-p-carousel-item-active":s.totalShiftedItems*-1===e.value.length+s.d_numVisible,"data-p-carousel-item-start":c===0,"data-p-carousel-item-end":e.value.slice(-1*s.d_numVisible).length-1===c}),[g(e.$slots,"item",{data:m,index:c})],16,ct)}),128)):w("",!0),(d(!0),p(x,null,k(e.value,function(m,c){return d(),p("div",u({key:c,class:e.cx("item",{index:c}),role:"group","aria-hidden":a.firstIndex()>c||a.lastIndex()<c?!0:void 0,"aria-label":a.ariaSlideNumber(c),"aria-roledescription":a.ariaSlideLabel,ref_for:!0},a.getItemPTOptions("item",c),{"data-p-carousel-item-active":a.firstIndex()<=c&&a.lastIndex()>=c,"data-p-carousel-item-start":a.firstIndex()===c,"data-p-carousel-item-end":a.lastIndex()===c}),[g(e.$slots,"item",{data:m,index:c})],16,ut)}),128)),a.isCircular()?(d(!0),p(x,{key:1},k(e.value.slice(0,s.d_numVisible),function(m,c){return d(),p("div",u({key:c+"_fcloned",class:e.cx("itemClone",{index:c,value:e.value,totalShiftedItems:s.totalShiftedItems,d_numVisible:s.d_numVisible}),ref_for:!0},e.ptm("itemClone")),[g(e.$slots,"item",{data:m,index:c})],16)}),128)):w("",!0)],16)],16),e.showNavigators?(d(),$(f,u({key:1,class:e.cx("pcNextButton"),disabled:a.forwardIsDisabled,"aria-label":a.ariaNextButtonLabel,unstyled:e.unstyled,onClick:a.navForward},e.nextButtonProps,{pt:e.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:b(function(m){return[g(e.$slots,"nexticon",{},function(){return[(d(),$(B(a.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),u({class:m.class},e.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):w("",!0)],16,dt),a.totalIndicators>=0&&e.showIndicators?(d(),p("ul",u({key:0,ref:"indicatorContent",class:[e.cx("indicatorList"),e.indicatorsContentClass],onKeydown:t[4]||(t[4]=function(){return a.onIndicatorKeydown&&a.onIndicatorKeydown.apply(a,arguments)})},e.ptm("indicatorList")),[(d(!0),p(x,null,k(a.totalIndicators,function(m,c){return d(),p("li",u({key:"p-carousel-indicator-"+c.toString(),class:e.cx("indicator",{index:c}),ref_for:!0},a.getIndicatorPTOptions("indicator",c),{"data-p-active":s.d_page===c}),[i("button",u({class:e.cx("indicatorButton"),type:"button",tabindex:s.d_page===c?"0":"-1","aria-label":a.ariaPageLabel(c+1),"aria-current":s.d_page===c?"page":void 0,onClick:function(r){return a.onIndicatorClick(r,c)},ref_for:!0},a.getIndicatorPTOptions("indicatorButton",c)),null,16,mt)],16,pt)}),128))],16)):w("",!0)],16)),e.$slots.footer?(d(),p("div",u({key:3,class:e.cx("footer")},e.ptm("footer")),[g(e.$slots,"footer")],16)):w("",!0)],16)}ee.render=ht;const ft=[{label:"linkedin",icon:"pi pi-linkedin",url:"https://www.linkedin.com/in/jiwanghosal/"},{label:"youtube",icon:"pi pi-youtube",url:"https://www.youtube.com/@stackseekers"},{label:"stackoverflow",icon:"pi pi-chart-bar",url:"https://stackoverflow.com/users/10376224/stchr?tab=profile"},{label:"Instagram",icon:"pi pi-instagram",url:"https://www.instagram.com/jiwan_ghosal/"}],gt=[{status:"We start with understanding your requirements",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Set a clear timeline",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"I handle the development phase",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Deliver your project with ongoing support to ensure success",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],vt=[{title:"Capgemini",icon:"/img/home/capgemini.webp",details:"Consulting and technology services",link:"https://www.capgemini.com/"},{title:"Catch That Bus",icon:"/img/home/catchthatbus.webp",details:"Leisure, travel, and tourism",link:"https://www.catchthatbus.com/"},{title:"Upstox",icon:"/img/home/upstox.webp",details:"Online stock broker",link:"https://www.upstox.com/"},{title:"Mobistreak",icon:"/img/home/mobistreak.webp",details:"Marketing and advertising",link:"https://www.mobistreak.com/"}],W=[{name:"Harris Malik",designation:"Senior Product Manager at 8x8",message:"Jiwan is one of the most valuable people I have ever met. He is smart, professional, and never fails to surprise us with creative solutions to difficult problems. Jiwan's personality and skills would be a great asset to any company. Highly recommended.",avatar:"https://media.licdn.com/dms/image/v2/D5603AQG8ooyo97JCoA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1682841547783?e=1750896000&v=beta&t=RV2vZM-PEHtTdtboor0V4y6H-KGoUu7-DuJiiET_buU",link:"https://www.linkedin.com/in/harrismalik04/",location:"Malaysia",code:"my"},{name:"Jurgen Sweere",designation:"Front End Expert at ABN Amro",message:"Jiwan never stopped amazing me. He brings a lot of front-end knowledge to the table and is able to quickly learn anything new. Jiwan is a great colleague to have!",avatar:"https://media.licdn.com/dms/image/v2/C5603AQGLWlLKfqFZgw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516235161685?e=1750896000&v=beta&t=29wMeVltwAWsPCr9QHNhRJZWz1LZaEgES0iwjE2A4oc",link:"https://www.linkedin.com/in/jurgensweere",location:"The Netherlands",code:"nl"},{name:"Shyam Kumar",designation:"Senior Product Manager at Angel One",message:"I always found Jiwan to be a very dependable and hardworking colleague. Many times he went above and beyond to meet the product requirements; it might be either working overtime to release the project on time or working with other teams to get the production issue fixed. He was always the go-to person on the team.",avatar:"https://media.licdn.com/dms/image/v2/D5603AQHZpSlK7j89uA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698672442801?e=1750896000&v=beta&t=lscT5fFmahvoGSWRzV4hN-r2YM58ddKTki5HdOziiuI",link:"https://www.linkedin.com/in/shyam-kumar-k/",location:"India",code:"in"},{name:"Erkan Ateşli",designation:"Chapter Lead at ABN AMRO Bank N.V.",message:"In our connection with Jiwan at ABN AMRO, I noticed that he has a lot of knowledge in his field of expertise. He can transfer his knowledge easily to others. With his strong analytics skills, he can handle complex questions as usual. Jiwan is a brave colleague I’ve met, and we had a lot of fun during the India visit and especially at the party. ",avatar:"https://media.licdn.com/dms/image/v2/C4E03AQFg4Oh_B9JEeQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1621625662967?e=1750896000&v=beta&t=9KwLZLloVo4ianxK3csxIjlMY0_G0Ez7nKYvgPVVssE",link:"https://www.linkedin.com/in/erkanatesli",location:"The Netherlands",code:"nl"}],bt=[{id:"proven_expertise",title:"10+ Years of Proven Expertise",description:"Over a decade of delivering impactful projects, consistently providing innovative solutions that drive tangible results and add measurable value for clients across industries."},{id:"client_centric_approach",title:"Client-Centric Approach",description:"Focused on understanding your unique needs, I offer tailored solutions that align with your business goals, ensuring seamless collaboration and delivering the most effective value."},{id:"wide_range_of_experience",title:"20+ Clients Across Industries",description:"With experience working with over 20 clients from diverse sectors, I bring versatile expertise, quickly adapting to challenges and offering solutions suited to each industry’s demands."},{id:"commitment_to_quality_code",title:"Commitment to Quality Code",description:"I ensure all code is clean, scalable, and efficient by using industry-standard tools such as ESLint, Prettier, SonarQube, and Jest, delivering high-performance, maintainable, and reliable solutions."}],yt={class:"mb-6"},wt={class:"grid justify-content-center my-4"},xt=["src","alt"],kt={class:"hidden"},It={class:"gallery gap-4"},Ct=["href","aria-label"],_t=["src","alt"],St={class:"p-0 m-2"},$t={class:"my-6"},Pt={class:"card shadow-1 border-round-md p-4 md:mx-8 vp-feature-item"},Vt={class:"font-italic mb-8"},Tt={class:"text-md line-height-3"},At={class:"flex align-items-center"},jt=["src","alt"],Lt=["href"],Bt={class:"flex flex-column align-items-start ml-2 p-0 m-0"},Nt=["alt"],Et={class:"my-6 flex flex-column"},Ot={class:"flex flex-wrap"},Dt={class:"flex align-items-center pl-2 m-0 p-0"},Mt=["src","alt"],zt={class:"font-bold p-2 line-height-2"},Ft={class:"m-0 pt-4"},Kt={class:"my-6"},Ht={class:"my-4 grid md:flex-row justify-content-center gap-2"},Rt={class:"no-underline flex flex-column justify-content-center flex-wrap"},Wt={class:"mb-2 flex align-items-center justify-content-center h-4rem"},Jt=["src","alt"],Ut={class:"h-5rem"},qt={class:"text-base md:text-xl font-bold flex align-items-center justify-content-center p-0 m-0 text-center line-height-3"},Zt={class:"text-xs md:text-sm flex align-items-center justify-content-center line-height-2 text-center"},Qt={class:"my-6"},Gt={class:"grid overflow-hidden border-round-2xl"},Yt={class:"col-12"},Xt={class:"border-round-2xl flex flex-column gap-2 md:p-2"},en={class:"mx-3"},tn={class:"my-4"},nn={href:"https://cal.com/stackseekers",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline mt-4","aria-label":"scheduling a meeting"},an={class:"border-round-md vp-feature-item",id:"contact"},on={class:"my-4"},sn={href:"mailto:jiwan.cse@gmail.com?subject=Inquiry:%20collaborate%20now",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline","aria-label":"Send an Email"},rn={class:"flex flex-row justify-content-end flex-wrap gap-4 mx-6"},ln=["href","aria-label"],dn=["aria-label"],cn=5e3,fn=ge({__name:"index.html",setup(e){const t=j(0);let n=null;j(!1);const o=j([{breakpoint:"1400px",numVisible:1,numScroll:1},{breakpoint:"1199px",numVisible:1,numScroll:1},{breakpoint:"767px",numVisible:1,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]),s=[{link:"html5",title:"html5"},{link:"javascript",title:"Javascript"},{link:"vuedotjs",title:"vuejs"},{link:"react",title:"ReactJS"},{link:"nodedotjs",title:"NodeJs"},{link:"tailwindcss",title:"tailwindcss"},{link:"typescript",title:"Typescript"},{link:"mongodb",title:"MongoDb"},{link:"lighthouse",title:"lighthouse"}],a=()=>{n=setInterval(()=>{t.value=(t.value+1)%W.value.length},cn)},f=()=>{clearInterval(n)},m=()=>{a()},c=_=>{t.value=_};return ve(()=>{a()}),be(()=>{f()}),(_,r)=>{const te=ee,ne=X,T=we,ie=Q,ae=xe,D=Z;return d(),p("div",null,[i("div",yt,[r[0]||(r[0]=i("div",{class:"text-center pb-4"},[i("div",{class:"text-4xl font-bold"},[i("h2",null,[h("Scalable Solutions for "),i("div",{class:"text-4xl font-bold bg-primary"},"Startups, Enterprises & Agencies")])]),i("div",{class:"text-xl md:text-center line-height-3"}," I am Jiwan Ghosal. A full-stack developer with extensive experience in the JavaScript, VueJS, ReactJS and NodeJS ecosystems, as well as expertise in the Azure cloud platform.")],-1)),i("div",wt,[(d(),p(x,null,k(s,l=>i("div",{class:"flex gap-2 p-2",key:l.title},[i("img",{width:"38px",height:"38px",src:`https://cdn.simpleicons.org/${l.link}`,alt:l.title,loading:"eager",fetchpriority:"high"},null,8,xt),i("h3",kt,v(l.title),1)])),64))]),i("div",It,[(d(!0),p(x,null,k(I(ye),(l,A)=>(d(),p("div",{key:A,class:"gallery-item mb-4"},[i("a",{href:l.link,class:"text-l gap-2 font-medium text-center no-underline","aria-label":l.name},[i("img",{src:l.images[0].itemImageSrc,alt:l.images[0].alt,loading:"eager",fetchpriority:"high"},null,8,_t),i("h3",St,v(l.name),1)],8,Ct)]))),128))]),r[1]||(r[1]=F('<div class="text-center pb-4 grid justify-content-center gap-4"><a href="/about/#stack" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6">See all stacks</span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" alt="arrow" style="font-size:1rem;"></i></div></div></a><a href="/web-development-projects/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6">See all projects</span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" style="font-size:1rem;"></i></div></div></a></div>',1))]),i("div",$t,[r[4]||(r[4]=i("div",{class:"text-center pb-4"},[i("div",{class:"text-4xl font-bold"},[i("h2",null,[h("Trusted by "),i("div",{class:"text-4xl font-bold bg-primary"},"World Wide")])]),i("div",{class:"my-4 text-xl line-height-2"},"I value every client as a strategic partner. Here’s what they’ve shared about their experience working with me.")],-1)),i("div",{class:"card relative md:mx-0 -mx-4",onMouseenter:f,onMouseleave:m},[y(te,{value:I(W),numVisible:1,numScroll:1,ref:"carousel",responsiveOptions:o.value,circular:"",page:t.value,onPage:c},{item:b(l=>[i("div",Pt,[i("div",Vt,[i("div",Tt,[r[2]||(r[2]=i("span",{class:"font-bold text-4xl"},'"',-1)),h(" "+v(l.data.message),1)])]),i("div",At,[i("img",{src:l.data.avatar,alt:l.data.name,loading:"eager",fetchpriority:"high",class:"border-circle",width:"50px",height:"50px"},null,8,jt),i("a",{href:l.data.link,target:"_blank",class:"no-underline"},[i("h3",Bt,[i("div",null,[r[3]||(r[3]=i("i",{class:"pi pi-linkedin mr-1 text-blue-700",style:{"font-size":"1rem"}},null,-1)),h(" "+v(l.data.name)+", ",1)]),i("div",null,[i("img",{alt:l.data.location,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",loading:"eager",fetchpriority:"high",class:L(`flag flag-${l.data.code.toLowerCase()} mr-1`),style:{width:"18px"}},null,10,Nt),h(" "+v(l.data.location),1)])])],8,Lt)])])]),_:1},8,["value","responsiveOptions","page"])],32),r[5]||(r[5]=F('<div class="text-center pb-4"><a href="https://www.linkedin.com/in/jiwanghosal/details/recommendations/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6"><i class="pi pi-linkedin" aria-label="LinkedIn Testimonials" style="font-size:1rem;"></i> LinkedIn Testimonials </span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" style="font-size:1rem;"></i></div></div></a></div>',1))]),i("div",Et,[r[6]||(r[6]=i("div",{class:"text-center pb-4"},[i("div",{class:"text-4xl font-bold"},[i("h2",null,[h("Why choose"),i("span",{class:"bg-primary"},"me?")])]),i("div",{class:"my-4 text-xl line-height-2"},"Here’s why I’m the right choice for your project")],-1)),i("div",Ot,[(d(!0),p(x,null,k(I(bt),l=>(d(),p("div",{class:"md:col-6 col-12 md:p-4",key:l.title},[y(ne,{class:"vp-feature-item"},{legend:b(()=>[i("h3",Dt,[i("img",{src:`/img/home/${l.id}.svg`,class:"p-avatar p-avatar-circle",loading:"lazy",alt:`${l.title} icon`,width:"24px",height:"24px"},null,8,Mt),i("span",zt,v(l.title),1)])]),default:b(()=>[i("p",Ft,v(l.description),1)]),_:2},1024)]))),128))])]),i("div",Kt,[r[7]||(r[7]=i("div",{class:"text-center pb-4"},[i("div",{class:"text-4xl font-bold"},[i("h2",null,[h("Scaling startups "),i("div",{class:"text-4xl font-bold bg-primary"},"Elevating industry giants")])]),i("div",{class:"my-4 text-xl line-height-2"},"I bring a proven track record of success in the industry, with a comprehensive skill set spanning every phase of software development.")],-1)),i("div",Ht,[(d(!0),p(x,null,k(I(vt),l=>(d(),p("div",{class:"md:col-2 col-5 border-round-md md:p-2 md:m-2 vp-feature-item flex align-items-center justify-content-center",key:l.title},[i("div",Rt,[i("div",Wt,[i("img",{src:l.icon,alt:l.title,width:"40px",height:"40px",class:"border-round-md",loading:"eager",fetchpriority:"high"},null,8,Jt)]),i("div",Ut,[i("h3",qt,v(l.title),1),i("div",Zt,v(l.details),1)])])]))),128))])]),i("div",Qt,[r[14]||(r[14]=i("div",{class:"text-center pb-4"},[i("div",{class:"text-4xl font-bold line-height-2"},[i("h2",null,[h("Frequently asked "),i("span",{class:"bg-primary"},"questions")])])],-1)),i("div",Gt,[i("div",Yt,[i("div",Xt,[y(ae,{activeIndex:0},{default:b(()=>[y(T,{header:"Q: How can I start a project with you?"},{default:b(()=>r[8]||(r[8]=[i("h3",{class:"m-0 p-0 hidden"},"How can I start a project with you?",-1),i("p",{class:"mx-3"},[h(" You can start by "),i("a",{href:"https://cal.com/stackseekers",class:"no-underline text-xl","aria-label":"schedule a meeting"},"scheduling a meeting"),h(" with me. I’ll connect with you promptly to discuss your requirements and plan the next steps. ")],-1)])),_:1}),y(T,{header:"Q: What services do you provide?"},{default:b(()=>r[9]||(r[9]=[i("h3",{class:"m-0 p-0 hidden"},"What services do you provide?",-1),i("div",{class:"mx-3"},[h(" I offer a variety of services tailored to your needs, including "),i("a",{href:"web-development-services/#consulting-and-technical-advisory",class:"no-underline","aria-label":"Custom Web Development"},"Custom Web Development"),h(", "),i("a",{href:"web-development-services/#e-commerce-solutions",class:"no-underline","aria-label":"E-commerce Solutions"},"E-commerce Solutions"),h(", "),i("a",{href:"web-development-services/#API-development-and-integration",class:"no-underline","aria-label":"API Development and Integration"},"API Development and Integration "),h(", "),i("a",{href:"web-development-services/#figma-to-web",class:"no-underline","aria-label":"Figma to Web Conversion"},"Figma to Web Conversion"),h(", and "),i("a",{href:"web-development-services/#hosting",class:"no-underline","aria-label":"Hosting & Deployment"},"Hosting & Deployment"),h(". "),i("div",{class:"mt-2"},"Let’s find the best solution for your project!")],-1)])),_:1}),y(T,{header:"Q: What does the project process look like?"},{default:b(()=>[r[12]||(r[12]=i("h3",{class:"m-0 p-0 hidden"},"What does the project process look like?",-1)),i("div",en,[r[11]||(r[11]=i("div",{class:"my-4"},"It’s simple and straightforward: ",-1)),y(ie,{value:I(gt),align:"left",pt:{eventOpposite:{style:{padding:0,flex:0}},marker:{style:{backgroundColor:"#FFA500"}},connector:{style:{backgroundColor:"#FFA500"}},content:{style:{padding:"4px, 2px"}}}},{opposite:b(l=>r[10]||(r[10]=[i("small",{class:"p-text-secondary"},null,-1)])),content:b(l=>[h(v(l.item.status),1)]),_:1},8,["value"])]),r[13]||(r[13]=i("div",null,null,-1))]),_:1})]),_:1}),i("div",tn,[i("a",nn,[y(D,{label:"Discuss your project",icon:"pi pi-calendar-clock",severity:"primary",raised:"",rounded:""})])])])])])]),i("div",an,[r[17]||(r[17]=i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 60 1440 260"},[i("path",{fill:"#10b981","fill-opacity":"0.1",d:"M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"})],-1)),i("div",null,[r[15]||(r[15]=i("div",{class:"text-center pb-4"},[i("h3",null,[i("div",{class:"text-4xl font-bold"},"NEED A FULL STACK WEB DEVELOPER?")]),i("div",{class:"my-4 text-md"},"Let's work together!")],-1)),r[16]||(r[16]=i("div",{class:"mx-4 text-center text-xl line-height-3"}," I'm always excited to tackle new challenges and bring ideas to life. If you’re searching for a committed full-stack developer to make your vision a reality, don’t hesitate to get in touch - I’d love to collaborate! ",-1)),i("div",on,[i("a",sn,[y(D,{label:"Let's collaborate now!",icon:"pi pi-briefcase",severity:"primary",raised:"",rounded:""})])]),i("div",rn,[(d(!0),p(x,null,k(I(ft),(l,A)=>(d(),p("a",{key:A,href:l.url,target:"_blank",class:"flex flex-row gap-2","aria-label":l.name},[i("i",{class:L(l.icon),"aria-label":l.label,style:{"font-size":"1rem"}},null,10,dn)],8,ln))),128))])]),r[18]||(r[18]=i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 60 1440 220",class:"-mb-1"},[i("path",{fill:"#10b981","fill-opacity":"0.1",d:"M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"})],-1))])])}}}),gn=JSON.parse('{"path":"/","title":"Web Developer","lang":"en-US","frontmatter":{"home":true,"title":"Web Developer","description":"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js).","heroImage":"/img/home/jiwanghosal.webp","heroText":"Hi, Stack Seekers","tagline":"Full-stack consultant specializing in scalable web, mobile, and software solutions using MERN and MEVN stacks. Let’s bring your ideas to life, connect with me today!","containerClass":"fancy-container","actions":[{"text":"Book free consultation","link":"https://cal.com/stackseekers","type":"primary"}],"editLink":false,"copyright":false,"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Web Developer\\",\\"description\\":\\"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js).\\"}"],["meta",{"property":"og:url","content":"https://stackseekers.com/"}],["meta",{"property":"og:site_name","content":"Jiwan Ghosal"}],["meta",{"property":"og:title","content":"Web Developer"}],["meta",{"property":"og:description","content":"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js)."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-28T16:02:17.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-28T16:02:17.000Z"}]]},"git":{"createdTime":1671040067000,"updatedTime":1745856137000},"readingTime":{"minutes":7.41,"words":2224},"filePathRelative":"README.md"}');export{fn as comp,gn as data};
