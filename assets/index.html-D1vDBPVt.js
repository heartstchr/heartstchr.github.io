import{B as P,s as _,m as l,c as y,r as f,o as c,w as g,a as E,b as k,d as x,e as o,v as Y,T as X,n as C,R as z,f as R,g as be,h as F,i as H,j as ee,k as N,l as p,F as $,p as A,q as I,t as w,u as ye,x as te,y as ne,z as we,A as ke,C as xe,D as j,E as Ie,G as $e,H as b,I as Ae,J as O,K as Ce,L as Pe,M as J,N as S}from"./app-CcVFkuSh.js";import{s as ie,a as _e}from"./index-BarnX_6Z.js";import{s as ae,a as U}from"./index-BIaGD6M8.js";import{p as Se}from"./projects-D-AsqVLu.js";var Te={root:"p-accordioncontent",content:"p-accordioncontent-content"},Ve=P.extend({name:"accordioncontent",classes:Te}),je={name:"BaseAccordionContent",extends:_,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Ve,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},oe={name:"AccordionContent",extends:je,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return l(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function Be(e,t,n,a,r,i){return e.asChild?f(e.$slots,"default",{key:1,class:C(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs}):(c(),y(X,l({key:0,name:"p-toggleable-content"},e.ptm("transition",i.ptParams)),{default:g(function(){return[!i.$pcAccordion.lazy||i.$pcAccordionPanel.active?E((c(),y(x(e.as),l({key:0,class:e.cx("root")},i.attrs),{default:g(function(){return[o("div",l({class:e.cx("content")},e.ptm("content",i.ptParams)),[f(e.$slots,"default")],16)]}),_:3},16,["class"])),[[Y,i.$pcAccordion.lazy?!0:i.$pcAccordionPanel.active]]):k("",!0)]}),_:3},16))}oe.render=Be;var Le={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},Ne=P.extend({name:"accordionheader",classes:Le}),Ee={name:"BaseAccordionHeader",extends:_,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Ne,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},re={name:"AccordionHeader",extends:Ee,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowDownKey:function(t){var n=this.findNextPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onHomeKey(t),t.preventDefault()},onArrowUpKey:function(t){var n=this.findPrevPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findPanel:function(t){return t==null?void 0:t.closest('[data-pc-name="accordionpanel"]')},findHeader:function(t){return H(t,'[data-pc-name="accordionheader"]')},findNextPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?t:t.nextElementSibling;return a?F(a,"data-p-disabled")?this.findNextPanel(a):this.findHeader(a):null},findPrevPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?t:t.previousElementSibling;return a?F(a,"data-p-disabled")?this.findPrevPanel(a):this.findHeader(a):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(t,n){be(this.findHeader(n))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return l(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return R({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:U,ChevronDownIcon:ae},directives:{ripple:z}};function De(e,t,n,a,r,i){var v=ee("ripple");return e.asChild?f(e.$slots,"default",{key:1,class:C(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):E((c(),y(x(e.as),l({key:0,"data-p":i.dataP,class:e.cx("root"),onClick:i.onClick},i.attrs),{default:g(function(){return[f(e.$slots,"default",{active:i.$pcAccordionPanel.active}),f(e.$slots,"toggleicon",{active:i.$pcAccordionPanel.active,class:C(e.cx("toggleicon"))},function(){return[i.$pcAccordionPanel.active?(c(),y(x(i.$pcAccordion.$slots.collapseicon?i.$pcAccordion.$slots.collapseicon:i.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),l({key:0,class:[i.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"])):(c(),y(x(i.$pcAccordion.$slots.expandicon?i.$pcAccordion.$slots.expandicon:i.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),l({key:1,class:[i.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[v]])}re.render=De;var Ke={root:function(t){var n=t.instance,a=t.props;return["p-accordionpanel",{"p-accordionpanel-active":n.active,"p-disabled":a.disabled}]}},Oe=P.extend({name:"accordionpanel",classes:Ke}),Fe={name:"BaseAccordionPanel",extends:_,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Oe,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},se={name:"AccordionPanel",extends:Fe,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return l(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function He(e,t,n,a,r,i){return e.asChild?f(e.$slots,"default",{key:1,class:C(e.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(c(),y(x(e.as),l({key:0,class:e.cx("root")},i.attrs),{default:g(function(){return[f(e.$slots,"default")]}),_:3},16,["class"]))}se.render=He;var Me=({dt:e})=>`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: ${e("accordion.panel.border.width")};
    border-color: ${e("accordion.panel.border.color")};
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${e("accordion.header.padding")};
    color: ${e("accordion.header.color")};
    background: ${e("accordion.header.background")};
    border-style: solid;
    border-width: ${e("accordion.header.border.width")};
    border-color: ${e("accordion.header.border.color")};
    font-weight: ${e("accordion.header.font.weight")};
    border-radius: ${e("accordion.header.border.radius")};
    transition: background ${e("accordion.transition.duration")}, color ${e("accordion.transition.duration")}, outline-color ${e("accordion.transition.duration")}, box-shadow ${e("accordion.transition.duration")};
    outline-color: transparent;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: ${e("accordion.header.first.border.width")};
    border-start-start-radius: ${e("accordion.header.first.top.border.radius")};
    border-start-end-radius: ${e("accordion.header.first.top.border.radius")};
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-end-start-radius: ${e("accordion.header.last.bottom.border.radius")};
    border-end-end-radius: ${e("accordion.header.last.bottom.border.radius")};
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-end-start-radius: ${e("accordion.header.last.active.bottom.border.radius")};
    border-end-end-radius: ${e("accordion.header.last.active.bottom.border.radius")};
}

.p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.color")};
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: ${e("accordion.header.focus.ring.shadow")};
    outline: ${e("accordion.header.focus.ring.width")} ${e("accordion.header.focus.ring.style")} ${e("accordion.header.focus.ring.color")};
    outline-offset: ${e("accordion.header.focus.ring.offset")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: ${e("accordion.header.hover.background")};
    color: ${e("accordion.header.hover.color")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: ${e("accordion.header.active.background")};
    color: ${e("accordion.header.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
    background: ${e("accordion.header.active.hover.background")};
    color: ${e("accordion.header.active.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.active.hover.color")};
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: ${e("accordion.content.border.width")};
    border-color: ${e("accordion.content.border.color")};
    background-color: ${e("accordion.content.background")};
    color: ${e("accordion.content.color")};
    padding: ${e("accordion.content.padding")};
}
`,ze={root:"p-accordion p-component"},Re=P.extend({name:"accordion",style:Me,classes:ze}),Ue={name:"BaseAccordion",extends:_,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:Re,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},le={name:"Accordion",extends:Ue,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t},activeIndex:{immediate:!0,handler:function(t){this.hasAccordionTab&&(this.d_value=this.multiple?t==null?void 0:t.map(String):t==null?void 0:t.toString())}}},methods:{isItemActive:function(t){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(t):this.d_value===t},updateValue:function(t){var n,a=this.isItemActive(t);this.multiple?a?this.d_value=this.d_value.filter(function(r){return r!==t}):this.d_value?this.d_value.push(t):this.d_value=[t]:this.d_value=a?null:t,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(a?"tab-close":"tab-open",{originalEvent:void 0,index:Number(t)})},isAccordionTab:function(t){return t.type.name==="AccordionTab"},getTabProp:function(t,n){return t.props?t.props[n]:void 0},getKey:function(t,n){return this.getTabProp(t,"header")||n},getHeaderPT:function(t,n){var a=this;return{root:l({onClick:function(i){return a.onTabClick(i,n)}},this.getTabProp(t,"headerProps"),this.getTabPT(t,"header",n)),toggleicon:l(this.getTabProp(t,"headeractionprops"),this.getTabPT(t,"headeraction",n))}},getContentPT:function(t,n){return{root:l(this.getTabProp(t,"contentProps"),this.getTabPT(t,"toggleablecontent",n)),transition:this.getTabPT(t,"transition",n),content:this.getTabPT(t,"content",n)}},getTabPT:function(t,n,a){var r=this.tabs.length,i={props:t.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:r,first:a===0,last:a===r-1,active:this.isItemActive("".concat(a))}};return l(this.ptm("accordiontab.".concat(n),i),this.ptmo(this.getTabProp(t,"pt"),n,i))},onTabClick:function(t,n){this.$emit("tab-click",{originalEvent:t,index:n})}},computed:{tabs:function(){var t=this;return this.$slots.default().reduce(function(n,a){return t.isAccordionTab(a)?n.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(r){t.isAccordionTab(r)&&n.push(r)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:se,AccordionHeader:re,AccordionContent:oe,ChevronUpIcon:U,ChevronRightIcon:ie}};function We(e,t,n,a,r,i){var v=N("AccordionHeader"),h=N("AccordionContent"),u=N("AccordionPanel");return c(),p("div",l({class:e.cx("root")},e.ptmi("root")),[i.hasAccordionTab?(c(!0),p($,{key:0},A(i.tabs,function(m,s){return c(),y(u,{key:i.getKey(m,s),value:"".concat(s),pt:{root:i.getTabPT(m,"root",s)},disabled:i.getTabProp(m,"disabled")},{default:g(function(){return[I(v,{class:C(i.getTabProp(m,"headerClass")),pt:i.getHeaderPT(m,s)},{toggleicon:g(function(V){return[V.active?(c(),y(x(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),l({key:0,class:[e.collapseIcon,V.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(m,"headericon",s)),null,16,["class"])):(c(),y(x(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),l({key:1,class:[e.expandIcon,V.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(m,"headericon",s)),null,16,["class"]))]}),default:g(function(){return[m.children&&m.children.headericon?(c(),y(x(m.children.headericon),{key:0,isTabActive:i.isItemActive("".concat(s)),active:i.isItemActive("".concat(s)),index:s},null,8,["isTabActive","active","index"])):k("",!0),m.props&&m.props.header?(c(),p("span",l({key:1,ref_for:!0},i.getTabPT(m,"headertitle",s)),w(m.props.header),17)):k("",!0),m.children&&m.children.header?(c(),y(x(m.children.header),{key:2})):k("",!0)]}),_:2},1032,["class","pt"]),I(h,{pt:i.getContentPT(m,s)},{default:g(function(){return[(c(),y(x(m)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):f(e.$slots,"default",{key:1})],16)}le.render=We;var Je=({dt:e})=>`
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
`,qe={root:function(t){var n=t.props;return["p-timeline p-component","p-timeline-"+n.align,"p-timeline-"+n.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Ze=P.extend({name:"timeline",style:Je,classes:qe}),Qe={name:"BaseTimeline",extends:_,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Ze,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(e)}function q(e,t,n){return(t=Ge(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ge(e){var t=Ye(e,"string");return B(t)=="symbol"?t:t+""}function Ye(e,t){if(B(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(B(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ce={name:"Timeline",extends:Qe,inheritAttrs:!1,methods:{getKey:function(t,n){return this.dataKey?ye(t,this.dataKey):n},getPTOptions:function(t,n){return this.ptm(t,{context:{index:n,count:this.value.length}})}},computed:{dataP:function(){return R(q(q({},this.layout,this.layout),this.align,this.align))}}},Xe=["data-p"],et=["data-p"],tt=["data-p"],nt=["data-p"],it=["data-p"],at=["data-p"],ot=["data-p"];function rt(e,t,n,a,r,i){return c(),p("div",l({class:e.cx("root")},e.ptmi("root"),{"data-p":i.dataP}),[(c(!0),p($,null,A(e.value,function(v,h){return c(),p("div",l({key:i.getKey(v,h),class:e.cx("event"),ref_for:!0},i.getPTOptions("event",h),{"data-p":i.dataP}),[o("div",l({class:e.cx("eventOpposite",{index:h}),ref_for:!0},i.getPTOptions("eventOpposite",h),{"data-p":i.dataP}),[f(e.$slots,"opposite",{item:v,index:h})],16,tt),o("div",l({class:e.cx("eventSeparator"),ref_for:!0},i.getPTOptions("eventSeparator",h),{"data-p":i.dataP}),[f(e.$slots,"marker",{item:v,index:h},function(){return[o("div",l({class:e.cx("eventMarker"),ref_for:!0},i.getPTOptions("eventMarker",h),{"data-p":i.dataP}),null,16,it)]}),h!==e.value.length-1?f(e.$slots,"connector",{key:0,item:v,index:h},function(){return[o("div",l({class:e.cx("eventConnector"),ref_for:!0},i.getPTOptions("eventConnector",h),{"data-p":i.dataP}),null,16,at)]}):k("",!0)],16,nt),o("div",l({class:e.cx("eventContent"),ref_for:!0},i.getPTOptions("eventContent",h),{"data-p":i.dataP}),[f(e.$slots,"content",{item:v,index:h})],16,ot)],16,et)}),128))],16,Xe)}ce.render=rt;var st=P.extend({name:"accordiontab"}),lt={name:"BaseAccordionTab",extends:_,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:st,provide:function(){return{$pcAccordionTab:this,$parentInstance:this}}},de={name:"AccordionTab",extends:lt,inheritAttrs:!1,mounted:function(){console.warn("Deprecated since v4. Use the new structure of Accordion instead.")}};function ct(e,t,n,a,r,i){return f(e.$slots,"default")}de.render=ct;var ue={name:"MinusIcon",extends:te};function dt(e,t,n,a,r,i){return c(),p("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[o("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}ue.render=dt;var pe={name:"PlusIcon",extends:te};function ut(e,t,n,a,r,i){return c(),p("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[o("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}pe.render=ut;var pt=({dt:e})=>`
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
`,ht={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},mt=P.extend({name:"fieldset",style:pt,classes:ht}),ft={name:"BaseFieldset",extends:_,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:mt,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},he={name:"Fieldset",extends:ft,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return R({toggleable:this.toggleable})}},directives:{ripple:z},components:{PlusIcon:pe,MinusIcon:ue}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Z(Object(n),!0).forEach(function(a){vt(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function vt(e,t,n){return(t=gt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gt(e){var t=bt(e,"string");return L(t)=="symbol"?t:t+""}function bt(e,t){if(L(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(L(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var yt=["data-p"],wt=["data-p"],kt=["id"],xt=["id","aria-controls","aria-expanded","aria-label"],It=["id","aria-labelledby"];function $t(e,t,n,a,r,i){var v=ee("ripple");return c(),p("fieldset",l({class:e.cx("root"),"data-p":i.dataP},e.ptmi("root")),[o("legend",l({class:e.cx("legend"),"data-p":i.dataP},e.ptm("legend")),[f(e.$slots,"legend",{toggleCallback:i.toggle},function(){return[e.toggleable?k("",!0):(c(),p("span",l({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),w(e.legend),17,kt)),e.toggleable?E((c(),p("button",l({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!r.d_collapsed,"aria-label":i.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return i.toggle&&i.toggle.apply(i,arguments)}),onKeydown:t[1]||(t[1]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},Q(Q({},e.toggleButtonProps),e.ptm("toggleButton"))),[f(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:r.d_collapsed,class:C(e.cx("toggleIcon"))},function(){return[(c(),y(x(r.d_collapsed?"PlusIcon":"MinusIcon"),l({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),o("span",l({class:e.cx("legendLabel")},e.ptm("legendLabel")),w(e.legend),17)],16,xt)),[[v]]):k("",!0)]})],16,wt),I(X,l({name:"p-toggleable-content"},e.ptm("transition")),{default:g(function(){return[E(o("div",l({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[o("div",l({class:e.cx("content")},e.ptm("content")),[f(e.$slots,"default")],16)],16,It),[[Y,!r.d_collapsed]])]}),_:3},16)],16,yt)}he.render=$t;var At=({dt:e})=>`
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
`,Ct={root:function(t){var n=t.instance;return["p-carousel p-component",{"p-carousel-vertical":n.isVertical(),"p-carousel-horizontal":!n.isVertical()}]},header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:function(t){var n=t.instance;return["p-carousel-prev-button",{"p-disabled":n.backwardIsDisabled}]},viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:function(t){var n=t.index,a=t.value,r=t.totalShiftedItems,i=t.d_numVisible;return["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":r*-1===a.length+i,"p-carousel-item-start":n===0,"p-carousel-item-end":a.slice(-1*i).length-1===n}]},item:function(t){var n=t.instance,a=t.index;return["p-carousel-item",{"p-carousel-item-active":n.firstIndex()<=a&&n.lastIndex()>=a,"p-carousel-item-start":n.firstIndex()===a,"p-carousel-item-end":n.lastIndex()===a}]},pcNextButton:function(t){var n=t.instance;return["p-carousel-next-button",{"p-disabled":n.forwardIsDisabled}]},indicatorList:"p-carousel-indicator-list",indicator:function(t){var n=t.instance,a=t.index;return["p-carousel-indicator",{"p-carousel-indicator-active":n.d_page===a}]},indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},Pt=P.extend({name:"carousel",style:At,classes:Ct}),_t={name:"BaseCarousel",extends:_,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:Pt,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function T(e){return jt(e)||Vt(e)||Tt(e)||St()}function St(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tt(e,t){if(e){if(typeof e=="string")return M(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function Vt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jt(e){if(Array.isArray(e))return M(e)}function M(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var me={name:"Carousel",extends:_t,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(t){t>this.d_page?this.navForward({},t):t<this.d_page&&this.navBackward({},t),this.d_page=t},circular:function(t){this.d_circular=t},numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},numScroll:function(t,n){this.d_oldNumScroll=n,this.d_numScroll=t},value:function(t){this.d_oldValue=t}},mounted:function(){var t=!1;if(this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var n=this.totalShiftedItems;this.d_page===0?n=-1*this.d_numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n,t=!0)}!t&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var t=this.isCircular(),n=!1,a=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var r=this.d_page;this.totalIndicators!==0&&r>=this.totalIndicators&&(r=this.totalIndicators-1,this.$emit("update:page",r),this.d_page=r,n=!0),a=r*this.d_numScroll*-1,t&&(a-=this.d_numVisible),r===this.totalIndicators-1&&this.remainingItems>0?(a+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,a!==this.totalShiftedItems&&(this.totalShiftedItems=a,n=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(a*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(a*(100/this.d_numVisible),"%, 0, 0)")}t&&(this.d_page===0?a=-1*this.d_numVisible:a===0&&(a=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),a!==this.totalShiftedItems&&(this.totalShiftedItems=a,n=!0)),!n&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(t,n){return this.ptm(t,{context:{highlighted:n===this.d_page}})},getItemPTOptions:function(t,n){return this.ptm(t,{context:{index:n,active:this.firstIndex()<=n&&this.lastIndex()>=n,start:this.firstIndex()===n,end:this.lastIndex()===n}})},step:function(t,n){var a=this.totalShiftedItems,r=this.isCircular();if(n!=null)a=this.d_numScroll*n*-1,r&&(a-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{a+=this.d_numScroll*t,this.isRemainingItemsAdded&&(a+=this.remainingItems-this.d_numScroll*t,this.isRemainingItemsAdded=!1);var i=r?a+this.d_numVisible:a;n=Math.abs(Math.floor(i/this.d_numScroll))}r&&this.d_page===this.totalIndicators-1&&t===-1?(a=-1*(this.value.length+this.d_numVisible),n=0):r&&this.d_page===0&&t===1?(a=0,n=this.totalIndicators-1):n===this.totalIndicators-1&&this.remainingItems>0&&(a+=this.remainingItems*-1-this.d_numScroll*t,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&$e(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(a*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(a*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=a,this.$emit("update:page",n),this.d_page=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible,numScroll:this.numScroll},a=0;a<this.responsiveOptions.length;a++){var r=this.responsiveOptions[a];parseInt(r.breakpoint,10)>=t&&(n=r)}if(this.d_numScroll!==n.numScroll){var i=this.d_page;i=parseInt(i*this.d_numScroll/n.numScroll),this.totalShiftedItems=n.numScroll*i*-1,this.isCircular()&&(this.totalShiftedItems-=n.numVisible),this.d_numScroll=n.numScroll,this.$emit("update:page",i),this.d_page=i}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},navBackward:function(t,n){(this.d_circular||this.d_page!==0)&&this.step(1,n),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},navForward:function(t,n){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,n),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},onIndicatorClick:function(t,n){var a=this.d_page;n>a?this.navForward(t,n):n<a&&this.navBackward(t,n)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&Ie(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){var n=t.changedTouches[0],a=this.isVertical()?n.pageY-this.startPos.y:n.pageX-this.startPos.x;Math.abs(a)>this.swipeThreshold&&t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){Math.abs(n)>this.swipeThreshold&&(n<0?this.navForward(t):this.navBackward(t))},onIndicatorKeydown:function(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=T(j(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=T(j(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=T(j(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(i){return F(i,"data-p-active")===!0}),a=H(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=t.findIndex(function(i){return i===a.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=T(j(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=H(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(function(a){return a===n.parentElement})},changedFocusedIndicator:function(t,n){var a=T(j(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));a[t].children[0].tabIndex="-1",a[n].children[0].tabIndex="0",a[n].children[0].focus()},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(n){t.calculatePosition(n)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var t=this;this.interval=setInterval(function(){t.d_page===t.totalIndicators-1?t.step(-1,0):t.step(-1,t.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var t;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",we(this.carouselStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.carouselStyle)}var n=`
                .p-carousel[`.concat(this.$attrSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var a=T(this.responsiveOptions),r=ke();a.sort(function(h,u){var m=h.breakpoint,s=u.breakpoint;return xe(m,s,-1,r)});for(var i=0;i<a.length;i++){var v=a[i];n+=`
                        @media screen and (max-width: `.concat(v.breakpoint,`) {
                            .p-carousel[`).concat(this.$attrSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/v.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=n},isVertical:function(){return this.orientation==="vertical"},hasValidItemCount:function(){return this.value&&this.value.length>this.d_numVisible},isCircular:function(){return this.hasValidItemCount()&&this.d_circular},isAutoplay:function(){return this.hasValidItemCount()&&this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var t;return((t=this.$primevue.config)===null||t===void 0||(t=t.locale)===null||t===void 0?void 0:t.emptyMessage)||""}},components:{Button:ne,ChevronRightIcon:ie,ChevronDownIcon:ae,ChevronLeftIcon:_e,ChevronUpIcon:U},directives:{ripple:z}},Bt=["aria-live"],Lt=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],Nt=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],Et=["data-p-active"],Dt=["tabindex","aria-label","aria-current","onClick"];function Kt(e,t,n,a,r,i){var v=N("Button");return c(),p("div",l({class:e.cx("root"),role:"region"},e.ptmi("root")),[e.$slots.header?(c(),p("div",l({key:0,class:e.cx("header")},e.ptm("header")),[f(e.$slots,"header")],16)):k("",!0),i.empty?f(e.$slots,"empty",{key:2},function(){return[b(w(i.emptyMessageText),1)]}):(c(),p("div",l({key:1,class:[e.cx("contentContainer"),e.containerClass]},e.ptm("contentContainer")),[o("div",l({class:[e.cx("content"),e.contentClass],"aria-live":r.allowAutoplay?"polite":"off"},e.ptm("content")),[e.showNavigators?(c(),y(v,l({key:0,class:e.cx("pcPrevButton"),disabled:i.backwardIsDisabled,"aria-label":i.ariaPrevButtonLabel,unstyled:e.unstyled,onClick:i.navBackward},e.prevButtonProps,{pt:e.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:g(function(h){return[f(e.$slots,"previcon",{},function(){return[(c(),y(x(i.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),l({class:h.icon},e.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):k("",!0),o("div",l({class:e.cx("viewport"),style:[{height:i.isVertical()?e.verticalViewPortHeight:"auto"}],onTouchend:t[1]||(t[1]=function(){return i.onTouchEnd&&i.onTouchEnd.apply(i,arguments)}),onTouchstart:t[2]||(t[2]=function(){return i.onTouchStart&&i.onTouchStart.apply(i,arguments)}),onTouchmove:t[3]||(t[3]=function(){return i.onTouchMove&&i.onTouchMove.apply(i,arguments)})},e.ptm("viewport")),[o("div",l({ref:"itemsContainer",class:e.cx("itemList"),onTransitionend:t[0]||(t[0]=function(){return i.onTransitionEnd&&i.onTransitionEnd.apply(i,arguments)})},e.ptm("itemList")),[i.isCircular()?(c(!0),p($,{key:0},A(e.value.slice(-1*r.d_numVisible),function(h,u){return c(),p("div",l({key:u+"_scloned",class:e.cx("itemClone",{index:u,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},e.ptm("itemClone"),{"data-p-carousel-item-active":r.totalShiftedItems*-1===e.value.length+r.d_numVisible,"data-p-carousel-item-start":u===0,"data-p-carousel-item-end":e.value.slice(-1*r.d_numVisible).length-1===u}),[f(e.$slots,"item",{data:h,index:u})],16,Lt)}),128)):k("",!0),(c(!0),p($,null,A(e.value,function(h,u){return c(),p("div",l({key:u,class:e.cx("item",{index:u}),role:"group","aria-hidden":i.firstIndex()>u||i.lastIndex()<u?!0:void 0,"aria-label":i.ariaSlideNumber(u),"aria-roledescription":i.ariaSlideLabel,ref_for:!0},i.getItemPTOptions("item",u),{"data-p-carousel-item-active":i.firstIndex()<=u&&i.lastIndex()>=u,"data-p-carousel-item-start":i.firstIndex()===u,"data-p-carousel-item-end":i.lastIndex()===u}),[f(e.$slots,"item",{data:h,index:u})],16,Nt)}),128)),i.isCircular()?(c(!0),p($,{key:1},A(e.value.slice(0,r.d_numVisible),function(h,u){return c(),p("div",l({key:u+"_fcloned",class:e.cx("itemClone",{index:u,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},e.ptm("itemClone")),[f(e.$slots,"item",{data:h,index:u})],16)}),128)):k("",!0)],16)],16),e.showNavigators?(c(),y(v,l({key:1,class:e.cx("pcNextButton"),disabled:i.forwardIsDisabled,"aria-label":i.ariaNextButtonLabel,unstyled:e.unstyled,onClick:i.navForward},e.nextButtonProps,{pt:e.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:g(function(h){return[f(e.$slots,"nexticon",{},function(){return[(c(),y(x(i.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),l({class:h.class},e.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):k("",!0)],16,Bt),i.totalIndicators>=0&&e.showIndicators?(c(),p("ul",l({key:0,ref:"indicatorContent",class:[e.cx("indicatorList"),e.indicatorsContentClass],onKeydown:t[4]||(t[4]=function(){return i.onIndicatorKeydown&&i.onIndicatorKeydown.apply(i,arguments)})},e.ptm("indicatorList")),[(c(!0),p($,null,A(i.totalIndicators,function(h,u){return c(),p("li",l({key:"p-carousel-indicator-"+u.toString(),class:e.cx("indicator",{index:u}),ref_for:!0},i.getIndicatorPTOptions("indicator",u),{"data-p-active":r.d_page===u}),[o("button",l({class:e.cx("indicatorButton"),type:"button",tabindex:r.d_page===u?"0":"-1","aria-label":i.ariaPageLabel(u+1),"aria-current":r.d_page===u?"page":void 0,onClick:function(s){return i.onIndicatorClick(s,u)},ref_for:!0},i.getIndicatorPTOptions("indicatorButton",u)),null,16,Dt)],16,Et)}),128))],16)):k("",!0)],16)),e.$slots.footer?(c(),p("div",l({key:3,class:e.cx("footer")},e.ptm("footer")),[f(e.$slots,"footer")],16)):k("",!0)],16)}me.render=Kt;const Ot=[{label:"linkedin",icon:"pi pi-linkedin",url:"https://www.linkedin.com/in/jiwanghosal/"},{label:"youtube",icon:"pi pi-youtube",url:"https://www.youtube.com/@stackseekers"},{label:"stackoverflow",icon:"pi pi-chart-bar",url:"https://stackoverflow.com/users/10376224/stchr?tab=profile"},{label:"Instagram",icon:"pi pi-instagram",url:"https://www.instagram.com/jiwan_ghosal/"}],Ft=[{status:"We start with understanding your requirements",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Set a clear timeline",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"I handle the development phase",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Deliver your project with ongoing support to ensure success",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],Ht=[{title:"Capgemini",icon:"/img/home/capgemini.webp",details:"Consulting and technology services",link:"https://www.capgemini.com/"},{title:"Catch That Bus",icon:"/img/home/catchthatbus.webp",details:"Leisure, travel, and tourism",link:"https://www.catchthatbus.com/"},{title:"Upstox",icon:"/img/home/upstox.webp",details:"Online stock broker",link:"https://www.upstox.com/"},{title:"Mobistreak",icon:"/img/home/mobistreak.webp",details:"Marketing and advertising",link:"https://www.mobistreak.com/"}],G=[{name:"Harris Malik",designation:"Senior Product Manager at 8x8",message:"Jiwan is one of the most valuable people I have ever met. He is smart, professional, and never fails to surprise us with creative solutions to difficult problems. Jiwan's personality and skills would be a great asset to any company. Highly recommended.",avatar:"https://media.licdn.com/dms/image/v2/D5603AQG8ooyo97JCoA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1682841547783?e=1750896000&v=beta&t=RV2vZM-PEHtTdtboor0V4y6H-KGoUu7-DuJiiET_buU",link:"https://www.linkedin.com/in/harrismalik04/",location:"Malaysia",code:"my"},{name:"Jurgen Sweere",designation:"Front End Expert at ABN Amro",message:"Jiwan never stopped amazing me. He brings a lot of front-end knowledge to the table and is able to quickly learn anything new. Jiwan is a great colleague to have!",avatar:"https://media.licdn.com/dms/image/v2/C5603AQGLWlLKfqFZgw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516235161685?e=1750896000&v=beta&t=29wMeVltwAWsPCr9QHNhRJZWz1LZaEgES0iwjE2A4oc",link:"https://www.linkedin.com/in/jurgensweere",location:"The Netherlands",code:"nl"},{name:"Shyam Kumar",designation:"Senior Product Manager at Angel One",message:"I always found Jiwan to be a very dependable and hardworking colleague. Many times he went above and beyond to meet the product requirements; it might be either working overtime to release the project on time or working with other teams to get the production issue fixed. He was always the go-to person on the team.",avatar:"https://media.licdn.com/dms/image/v2/D5603AQHZpSlK7j89uA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698672442801?e=1750896000&v=beta&t=lscT5fFmahvoGSWRzV4hN-r2YM58ddKTki5HdOziiuI",link:"https://www.linkedin.com/in/shyam-kumar-k/",location:"India",code:"in"},{name:"Erkan Ateşli",designation:"Chapter Lead at ABN AMRO Bank N.V.",message:"In our connection with Jiwan at ABN AMRO, I noticed that he has a lot of knowledge in his field of expertise. He can transfer his knowledge easily to others. With his strong analytics skills, he can handle complex questions as usual. Jiwan is a brave colleague I’ve met, and we had a lot of fun during the India visit and especially at the party. ",avatar:"https://media.licdn.com/dms/image/v2/C4E03AQFg4Oh_B9JEeQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1621625662967?e=1750896000&v=beta&t=9KwLZLloVo4ianxK3csxIjlMY0_G0Ez7nKYvgPVVssE",link:"https://www.linkedin.com/in/erkanatesli",location:"The Netherlands",code:"nl"}],Mt=[{id:"proven_expertise",title:"10+ Years of Proven Expertise",description:"Over a decade of delivering impactful projects, consistently providing innovative solutions that drive tangible results and add measurable value for clients across industries."},{id:"client_centric_approach",title:"Client-Centric Approach",description:"Focused on understanding your unique needs, I offer tailored solutions that align with your business goals, ensuring seamless collaboration and delivering the most effective value."},{id:"wide_range_of_experience",title:"20+ Clients Across Industries",description:"With experience working with over 20 clients from diverse sectors, I bring versatile expertise, quickly adapting to challenges and offering solutions suited to each industry’s demands."},{id:"commitment_to_quality_code",title:"Commitment to Quality Code",description:"I ensure all code is clean, scalable, and efficient by using industry-standard tools such as ESLint, Prettier, SonarQube, and Jest, delivering high-performance, maintainable, and reliable solutions."}],zt={class:"mb-6"},Rt={class:"grid justify-content-center my-4"},Ut=["src","alt"],Wt={class:"hidden"},Jt={class:"gallery gap-4"},qt=["href","aria-label"],Zt=["src","alt"],Qt={class:"p-0 m-2"},Gt={class:"my-6"},Yt={class:"card shadow-1 border-round-md p-4 md:mx-8 vp-feature-item"},Xt={class:"font-italic mb-8"},en={class:"text-md line-height-3"},tn={class:"flex align-items-center"},nn=["src","alt"],an=["href"],on={class:"flex flex-column align-items-start ml-2 p-0 m-0"},rn=["alt"],sn={class:"my-6 flex flex-column"},ln={class:"flex flex-wrap"},cn={class:"flex align-items-center pl-2 m-0 p-0"},dn=["src","alt"],un={class:"font-bold p-2 line-height-2"},pn={class:"m-0 pt-4"},hn={class:"my-6"},mn={class:"my-4 grid md:flex-row justify-content-center gap-2"},fn={class:"no-underline flex flex-column justify-content-center flex-wrap"},vn={class:"mb-2 flex align-items-center justify-content-center h-4rem"},gn=["src","alt"],bn={class:"h-5rem"},yn={class:"text-base md:text-xl font-bold flex align-items-center justify-content-center p-0 m-0 text-center line-height-3"},wn={class:"text-xs md:text-sm flex align-items-center justify-content-center line-height-2 text-center"},kn={class:"my-6"},xn={class:"grid overflow-hidden border-round-2xl"},In={class:"col-12"},$n={class:"border-round-2xl flex flex-column gap-2 md:p-2"},An={class:"mx-3"},Cn={class:"my-4"},Pn={href:"https://cal.com/stackseekers",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline mt-4","aria-label":"scheduling a meeting"},_n={class:"border-round-md vp-feature-item",id:"contact"},Sn={class:"my-4"},Tn={href:"mailto:jiwan.cse@gmail.com?subject=Inquiry:%20collaborate%20now",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline","aria-label":"Send an Email"},Vn={class:"flex flex-row justify-content-end flex-wrap gap-4 mx-6"},jn=["href","aria-label"],Bn=["aria-label"],Ln=5e3,On=Ae({__name:"index.html",setup(e){const t=O(0);let n=null;O(!1);const a=O([{breakpoint:"1400px",numVisible:1,numScroll:1},{breakpoint:"1199px",numVisible:1,numScroll:1},{breakpoint:"767px",numVisible:1,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]),r=[{link:"html5",title:"html5"},{link:"javascript",title:"Javascript"},{link:"vuedotjs",title:"vuejs"},{link:"react",title:"ReactJS"},{link:"nodedotjs",title:"NodeJs"},{link:"tailwindcss",title:"tailwindcss"},{link:"typescript",title:"Typescript"},{link:"mongodb",title:"MongoDb"},{link:"lighthouse",title:"lighthouse"}],i=()=>{n=setInterval(()=>{t.value=(t.value+1)%G.value.length},Ln)},v=()=>{clearInterval(n)},h=()=>{i()},u=m=>{t.value=m};return Ce(()=>{i()}),Pe(()=>{v()}),(m,s)=>{const V=me,fe=he,D=de,ve=ce,ge=le,W=ne;return c(),p("div",null,[o("div",zt,[s[0]||(s[0]=o("div",{class:"text-center pb-4"},[o("div",{class:"text-4xl font-bold"},[o("h2",null,[b("Scalable Solutions for "),o("div",{class:"text-4xl font-bold bg-primary"},"Startups, Enterprises & Agencies")])]),o("div",{class:"text-xl md:text-center line-height-3"}," I am Jiwan Ghosal. A full-stack developer with extensive experience in the JavaScript, VueJS, ReactJS and NodeJS ecosystems, as well as expertise in the Azure cloud platform.")],-1)),o("div",Rt,[(c(),p($,null,A(r,d=>o("div",{class:"flex gap-2 p-2",key:d.title},[o("img",{width:"38px",height:"38px",src:`https://cdn.simpleicons.org/${d.link}`,alt:d.title,loading:"eager",fetchpriority:"high"},null,8,Ut),o("h3",Wt,w(d.title),1)])),64))]),o("div",Jt,[(c(!0),p($,null,A(S(Se),(d,K)=>(c(),p("div",{key:K,class:"gallery-item mb-4"},[o("a",{href:d.link,class:"text-l gap-2 font-medium text-center no-underline","aria-label":d.name},[o("img",{src:d.images[0].itemImageSrc,alt:d.images[0].alt,loading:"eager",fetchpriority:"high"},null,8,Zt),o("h3",Qt,w(d.name),1)],8,qt)]))),128))]),s[1]||(s[1]=J('<div class="text-center pb-4 grid justify-content-center gap-4"><a href="/about/#stack" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6">See all stacks</span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" alt="arrow" style="font-size:1rem;"></i></div></div></a><a href="/web-development-projects/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6">See all projects</span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" style="font-size:1rem;"></i></div></div></a></div>',1))]),o("div",Gt,[s[4]||(s[4]=o("div",{class:"text-center pb-4"},[o("div",{class:"text-4xl font-bold"},[o("h2",null,[b("Trusted by "),o("div",{class:"text-4xl font-bold bg-primary"},"World Wide")])]),o("div",{class:"my-4 text-xl line-height-2"},"I value every client as a strategic partner. Here’s what they’ve shared about their experience working with me.")],-1)),o("div",{class:"card relative md:mx-0 -mx-4",onMouseenter:v,onMouseleave:h},[I(V,{value:S(G),numVisible:1,numScroll:1,ref:"carousel",responsiveOptions:a.value,circular:"",page:t.value,onPage:u},{item:g(d=>[o("div",Yt,[o("div",Xt,[o("div",en,[s[2]||(s[2]=o("span",{class:"font-bold text-4xl"},'"',-1)),b(" "+w(d.data.message),1)])]),o("div",tn,[o("img",{src:d.data.avatar,alt:d.data.name,loading:"eager",fetchpriority:"high",class:"border-circle",width:"50px",height:"50px"},null,8,nn),o("a",{href:d.data.link,target:"_blank",class:"no-underline"},[o("h3",on,[o("div",null,[s[3]||(s[3]=o("i",{class:"pi pi-linkedin mr-1 text-blue-700",style:{"font-size":"1rem"}},null,-1)),b(" "+w(d.data.name)+", ",1)]),o("div",null,[o("img",{alt:d.data.location,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",loading:"eager",fetchpriority:"high",class:C(`flag flag-${d.data.code.toLowerCase()} mr-1`),style:{width:"18px"}},null,10,rn),b(" "+w(d.data.location),1)])])],8,an)])])]),_:1},8,["value","responsiveOptions","page"])],32),s[5]||(s[5]=J('<div class="text-center pb-4"><a href="https://www.linkedin.com/in/jiwanghosal/details/recommendations/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6"><i class="pi pi-linkedin" aria-label="LinkedIn Testimonials" style="font-size:1rem;"></i> LinkedIn Testimonials </span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" style="font-size:1rem;"></i></div></div></a></div>',1))]),o("div",sn,[s[6]||(s[6]=o("div",{class:"text-center pb-4"},[o("div",{class:"text-4xl font-bold"},[o("h2",null,[b("Why choose"),o("span",{class:"bg-primary"},"me?")])]),o("div",{class:"my-4 text-xl line-height-2"},"Here’s why I’m the right choice for your project")],-1)),o("div",ln,[(c(!0),p($,null,A(S(Mt),d=>(c(),p("div",{class:"md:col-6 col-12 md:p-4",key:d.title},[I(fe,{class:"vp-feature-item"},{legend:g(()=>[o("h3",cn,[o("img",{src:`/img/home/${d.id}.svg`,class:"p-avatar p-avatar-circle",loading:"lazy",alt:`${d.title} icon`,width:"24px",height:"24px"},null,8,dn),o("span",un,w(d.title),1)])]),default:g(()=>[o("p",pn,w(d.description),1)]),_:2},1024)]))),128))])]),o("div",hn,[s[7]||(s[7]=o("div",{class:"text-center pb-4"},[o("div",{class:"text-4xl font-bold"},[o("h2",null,[b("Scaling startups "),o("div",{class:"text-4xl font-bold bg-primary"},"Elevating industry giants")])]),o("div",{class:"my-4 text-xl line-height-2"},"I bring a proven track record of success in the industry, with a comprehensive skill set spanning every phase of software development.")],-1)),o("div",mn,[(c(!0),p($,null,A(S(Ht),d=>(c(),p("div",{class:"md:col-2 col-5 border-round-md md:p-2 md:m-2 vp-feature-item flex align-items-center justify-content-center",key:d.title},[o("div",fn,[o("div",vn,[o("img",{src:d.icon,alt:d.title,width:"40px",height:"40px",class:"border-round-md",loading:"eager",fetchpriority:"high"},null,8,gn)]),o("div",bn,[o("h3",yn,w(d.title),1),o("div",wn,w(d.details),1)])])]))),128))])]),o("div",kn,[s[14]||(s[14]=o("div",{class:"text-center pb-4"},[o("div",{class:"text-4xl font-bold line-height-2"},[o("h2",null,[b("Frequently asked "),o("span",{class:"bg-primary"},"questions")])])],-1)),o("div",xn,[o("div",In,[o("div",$n,[I(ge,{activeIndex:0},{default:g(()=>[I(D,{header:"Q: How can I start a project with you?"},{default:g(()=>s[8]||(s[8]=[o("h3",{class:"m-0 p-0 hidden"},"How can I start a project with you?",-1),o("p",{class:"mx-3"},[b(" You can start by "),o("a",{href:"https://cal.com/stackseekers",class:"no-underline text-xl","aria-label":"schedule a meeting"},"scheduling a meeting"),b(" with me. I’ll connect with you promptly to discuss your requirements and plan the next steps. ")],-1)])),_:1}),I(D,{header:"Q: What services do you provide?"},{default:g(()=>s[9]||(s[9]=[o("h3",{class:"m-0 p-0 hidden"},"What services do you provide?",-1),o("div",{class:"mx-3"},[b(" I offer a variety of services tailored to your needs, including "),o("a",{href:"web-development-services/#consulting-and-technical-advisory",class:"no-underline","aria-label":"Custom Web Development"},"Custom Web Development"),b(", "),o("a",{href:"web-development-services/#e-commerce-solutions",class:"no-underline","aria-label":"E-commerce Solutions"},"E-commerce Solutions"),b(", "),o("a",{href:"web-development-services/#API-development-and-integration",class:"no-underline","aria-label":"API Development and Integration"},"API Development and Integration "),b(", "),o("a",{href:"web-development-services/#figma-to-web",class:"no-underline","aria-label":"Figma to Web Conversion"},"Figma to Web Conversion"),b(", and "),o("a",{href:"web-development-services/#hosting",class:"no-underline","aria-label":"Hosting & Deployment"},"Hosting & Deployment"),b(". "),o("div",{class:"mt-2"},"Let’s find the best solution for your project!")],-1)])),_:1}),I(D,{header:"Q: What does the project process look like?"},{default:g(()=>[s[12]||(s[12]=o("h3",{class:"m-0 p-0 hidden"},"What does the project process look like?",-1)),o("div",An,[s[11]||(s[11]=o("div",{class:"my-4"},"It’s simple and straightforward: ",-1)),I(ve,{value:S(Ft),align:"left",pt:{eventOpposite:{style:{padding:0,flex:0}},marker:{style:{backgroundColor:"#FFA500"}},connector:{style:{backgroundColor:"#FFA500"}},content:{style:{padding:"4px, 2px"}}}},{opposite:g(d=>s[10]||(s[10]=[o("small",{class:"p-text-secondary"},null,-1)])),content:g(d=>[b(w(d.item.status),1)]),_:1},8,["value"])]),s[13]||(s[13]=o("div",null,null,-1))]),_:1})]),_:1}),o("div",Cn,[o("a",Pn,[I(W,{label:"Discuss your project",icon:"pi pi-calendar-clock",severity:"primary",raised:"",rounded:""})])])])])])]),o("div",_n,[s[17]||(s[17]=o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 60 1440 260"},[o("path",{fill:"#10b981","fill-opacity":"0.1",d:"M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"})],-1)),o("div",null,[s[15]||(s[15]=o("div",{class:"text-center pb-4"},[o("h3",null,[o("div",{class:"text-4xl font-bold"},"NEED A FULL STACK WEB DEVELOPER?")]),o("div",{class:"my-4 text-md"},"Let's work together!")],-1)),s[16]||(s[16]=o("div",{class:"mx-4 text-center text-xl line-height-3"}," I'm always excited to tackle new challenges and bring ideas to life. If you’re searching for a committed full-stack developer to make your vision a reality, don’t hesitate to get in touch - I’d love to collaborate! ",-1)),o("div",Sn,[o("a",Tn,[I(W,{label:"Let's collaborate now!",icon:"pi pi-briefcase",severity:"primary",raised:"",rounded:""})])]),o("div",Vn,[(c(!0),p($,null,A(S(Ot),(d,K)=>(c(),p("a",{key:K,href:d.url,target:"_blank",class:"flex flex-row gap-2","aria-label":d.name},[o("i",{class:C(d.icon),"aria-label":d.label,style:{"font-size":"1rem"}},null,10,Bn)],8,jn))),128))])]),s[18]||(s[18]=o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 60 1440 220",class:"-mb-1"},[o("path",{fill:"#10b981","fill-opacity":"0.1",d:"M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"})],-1))])])}}}),Fn=JSON.parse('{"path":"/","title":"Web Developer","lang":"en-US","frontmatter":{"home":true,"title":"Web Developer","description":"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js).","heroImage":"/img/home/jiwanghosal.webp","heroText":"Hi, Stack Seekers","tagline":"Full-stack consultant specializing in scalable web, mobile, and software solutions using MERN and MEVN stacks. Let’s bring your ideas to life, connect with me today!","containerClass":"fancy-container","actions":[{"text":"Book free consultation","link":"https://cal.com/stackseekers","type":"primary"}],"editLink":false,"copyright":false,"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Web Developer\\",\\"description\\":\\"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js).\\"}"],["meta",{"property":"og:url","content":"https://stackseekers.com/"}],["meta",{"property":"og:site_name","content":"Jiwan Ghosal"}],["meta",{"property":"og:title","content":"Web Developer"}],["meta",{"property":"og:description","content":"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js)."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-28T16:02:17.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-28T16:02:17.000Z"}]]},"git":{"createdTime":1671040067000,"updatedTime":1745856137000},"readingTime":{"minutes":7.41,"words":2224},"filePathRelative":"README.md"}');export{On as comp,Fn as data};
